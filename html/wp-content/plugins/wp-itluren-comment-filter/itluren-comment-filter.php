<?php
/*
Plugin Name: wp-itluren-comment-filter
Plugin URI: http://www.itluren.com/wp-itluren-comment-filter
Description: wp-itluren-comment-filter can stop particular users whose data accords with the imformation setted and saved.  wp-itluren-comment-filter可以以昵称 IP 邮箱 网址 内容片断为根据指定评论人员黑名单，并阻止他们提交评论。同时，评论次数超过设定的范围就会暂时禁止评论。当然，还将全英文、全部复制文章内容作为内容的评论进行过滤。最后为了安全起见，还提供了禁止特定IP用户访问站点！！
Version: 1.0
Author: Rilun Chen
Author URI: http://www.itluren.com/
*/
function itluren_comment_filter_init(){
load_plugin_textdomain('comments_filter',false,dirname(plugin_basename( __FILE__ )).'/lang/');
}
add_action('plugins_loaded','itluren_comment_filter_init');
function check_local_lang_ch(){
include(itluren_gethomepath()."wp-config.php");
$wordpress_language=constant('WPLANG');
if(empty($wordpress_language)){
$wordpress_language='abcdefg';
}
if(stristr($wordpress_language,'zh')!=false){
return true;
}else{
return false;
}
}
global $pagenow;
if (is_admin()&&isset($_GET['activate'])&&$pagenow=='plugins.php'){
add_action('admin_notices', 'itluren_comment_filter');
}
function itluren_comment_filter(){
echo '<div class="error"><p>';echo _e('Congratulations on installing wp-itluren-comment-filter successfully,Please go to ','comments_filter');echo '<a href="'.admin_url('options-general.php?page=Comment_Filter/itluren-comment-filter.php','http').'">';echo _e('the Setting Page of wp-itluren-comment-filter','comments_filter');echo '</a>';echo _e(' to set configuration items.Thank your for your support！','comments_filter');echo '</p></div>';
}
function itluren_gethomepath() {
        $home=get_option('home');
        if ($home!=''&&$home!=get_option('siteurl' )){
            $home_path=parse_url( $home );
            $home_path=$home_path['path'];
            $file_self=dirname($_SERVER["REQUEST_URI"]);
            $file_self=str_replace('\\','/',$file_self);
            $file_self=str_replace('//','/',$file_self);
            $file_self_full=realpath(".");
            $file_self_full=str_replace('\\','/',$file_self_full);
            $file_self_full=str_replace('//','/',$file_self_full);
            $root=str_replace($file_self,'',$file_self_full);
            $home_path = trailingslashit($root.$home_path);
        } else {
            $home_path=ABSPATH;
        }
        $home_path=str_replace('\\','/',$home_path);
        $home_path=str_replace('//','/',$home_path);
        return $home_path;
}
//定义存储字段
define("COMMENT_COUNT_BACKLIST","comment_count_backlist");//一天评论次数
define("COMMENT_NICKNAME_BACKLIST","comment_nickname_backlist");//昵称黑名单
define("COMMENT_EMAIL_BACKLIST","comment_email_backlist");//邮箱黑名单
define("COMMENT_SITE_BACKLIST","comment_site_backlist");//网址黑名单
define("COMMENT_CONTENT_BACKLIST","comment_content_backlist");//内容片断黑名单
define("COMMENT_WORD_BACKLIST","comment_word_backlist");//评论字数
define("COMMENT_IP_BACKLIST","comment_ip_backlist");//IP黑名单
define("STEM_IP_BACKLIST","stem_ip_backlist");//阻止访问IP黑名单
//插入评论时设置Cookie
function itluren_comment_setcookie($comment_id){
    $comment_cookie_expire=1; 
	$comment=get_comment($comment_id);
	$itluren_post_ID =$comment->comment_post_ID;
	if (! isset($_COOKIE["WP-LastCommentedPosts"])) {
		$itluren_cookiearray = array($itluren_post_ID);
	} else {
		$itluren_cookiearray = unserialize(preg_replace('!s:(\d+):"(.*?)";!e', "'s:'.strlen('$2').':\"$2\";'", stripslashes($_COOKIE["WP-LastCommentedPosts"])));
		if (! is_array($itluren_cookiearray)) {
			$itluren_cookiearray = array($itluren_post_ID);
		}
	}
  	if (in_array($itluren_post_ID, $itluren_cookiearray)) {
		$itluren_key = array_search($itluren_post_ID, $itluren_cookiearray);
		array_splice($itluren_cookiearray, $itluren_key, 1);
	}
	array_unshift($itluren_cookiearray, $itluren_post_ID);
	$itluren_blog_url_array = parse_url(get_bloginfo('url'));
	$itluren_blog_url = $itluren_blog_url_array['host'];
	$itluren_blog_url = str_replace('www.', '', $itluren_blog_url);
	$itluren_blog_url_dot = '.';
	$itluren_blog_url_dot .= $itluren_blog_url;
	$itluren_path_url = $itluren_blog_url_array['path'];
	$itluren_path_url_slash = '/';
	$itluren_path_url .= $itluren_path_url_slash;
	setcookie("WP-LastCommentedPosts", serialize($itluren_cookiearray), (time()+($comment_cookie_expire*86400)), $itluren_path_url, $itluren_blog_url_dot, 0);
}
add_action('comment_post','itluren_comment_setcookie');
//抓取真实IP
function itluren_GetIP(){
if (getenv('HTTP_CLIENT_IP')){
$ip=getenv('HTTP_CLIENT_IP'); 
}elseif(getenv('HTTP_X_FORWARDED_FOR')){
$ip=getenv('HTTP_X_FORWARDED_FOR');
}elseif(getenv('HTTP_X_FORWARDED')){ 
$ip=getenv('HTTP_X_FORWARDED');
}elseif(getenv('HTTP_FORWARDED_FOR')){
$ip=getenv('HTTP_FORWARDED_FOR');
}elseif(getenv('HTTP_FORWARDED')) {
$ip=getenv('HTTP_FORWARDED');
}else{
$ip=$_SERVER['REMOTE_ADDR'];
}
return $ip;
}
//抓取域名
function itluren_getdomain_name($url){
preg_match("/^(http:\/\/)?([^\/]+)/i",$url, $matches); 
$host = $matches[2]; 
preg_match("/[^\.\/]+\.[^\.\/]+$/",$host,$matches); 
return $matches[0];
}
//获取最近的评论数量
function recently_Commented_PostCount() {
if(isset($_COOKIE["WP-LastCommentedPosts"])) {
$itluren_post_IDs = unserialize(preg_replace('!s:(\d+):"(.*?)";!e', "'s:'.strlen('$2').':\"$2\";'", stripslashes($_COOKIE["WP-LastCommentedPosts"])));
$post_count=count($itluren_post_IDs);
}else{
$post_count=0;
}
$post_count=(int)$post_count;
return $post_count;
}
//接下来是当然就是狙击评论了
function itluren_comment_filer($commentdata){
    include(itluren_gethomepath()."wp-config.php");
    $wordpress_language=constant('WPLANG');
   if(empty($wordpress_language)){
   $wordpress_language='abcdefg';
    }
    //首先来抓取设置吧
	$comment_count_backlist=get_option(COMMENT_COUNT_BACKLIST);
	$comment_nickname_backlist=explode("||",stripslashes(get_option(COMMENT_NICKNAME_BACKLIST)));
	$comment_email_backlist=explode("||",stripslashes(get_option(COMMENT_EMAIL_BACKLIST)));
	$comment_site_backlist=explode("||",stripslashes(get_option(COMMENT_SITE_BACKLIST)));
	$comment_content_backlist=explode("||",stripslashes(get_option(COMMENT_CONTENT_BACKLIST)));
	$comment_ip_backlist=explode("||",stripslashes(get_option(COMMENT_IP_BACKLIST)));
    $comment_word_count_limited=get_option(COMMENT_WORD_BACKLIST);
	if($comment_word_count_limited==''){$comment_word_count_limited=0;}$comment_word_count_limited=(int)$comment_word_count_limited;
	if (mb_strlen(trim($commentdata['comment_content']),'UTF8')>=$comment_word_count_limited){
	$comment_pattern= '/[一-龥]/u';
    if(!preg_match($comment_pattern,$commentdata['comment_content'])&&check_local_lang_ch()!=false){
	$errType=4;
	}
	if(!empty($comment_count_backlist)&&$comment_count_backlist!=''){
	$today_comment_count=recently_Commented_PostCount();
	$today_comment_count=(int)$today_comment_count;
	if($today_comment_count>$comment_count_backlist){
	$errType=1;
	}
	}
    if(!empty($comment_nickname_backlist)&&$comment_nickname_backlist[0]!=''){
	for($i=0;$i<count($comment_nickname_backlist);$i++){
	if(stristr($commentdata["comment_author"],$comment_nickname_backlist[$i])!=false){
	$errType=2;
	}
	}
	}
    if(!empty($comment_email_backlist)&&$comment_email_backlist[0]!=''){
	for($i=0;$i<count($comment_email_backlist);$i++){
	if($commentdata["comment_author_email"]==$comment_email_backlist[$i]){
	$errType=2;
	}
	}
	}
    if(!empty($comment_site_backlist)&&$comment_site_backlist[0]!=''&&!empty($commentdata["comment_author_url"])){
	for($i=0;$i<count($comment_site_backlist);$i++){
	if(itluren_getdomain_name($commentdata["comment_author_url"])==itluren_getdomain_name($comment_site_backlist[$i])){
	$errType=2;
	}
	}
	}
    if(!empty($comment_content_backlist)&&$comment_content_backlist[0]!=''){
	for($i=0;$i<count($comment_content_backlist);$i++){
	if(stristr($commentdata["comment_content"],$comment_content_backlist[$i])!=false){
	$errType=2;
	}
	}
	}
    $post_comtent_commented=get_post($commentdata["comment_post_ID"])->post_content;
    if($post_comtent_commented!=''){
	if(stristr($post_comtent_commented,$commentdata["comment_content"])!=false){
	$errType=3;
	}
	}
	if(!empty($comment_ip_backlist)&&$comment_ip_backlist[0]!=''){
	$user_ip_address=itluren_GetIP();
	for($i=0;$i<count($comment_ip_backlist);$i++){
	if($user_ip_address==$comment_ip_backlist[$i]){
	$errType=2;
	}
	}
	}
	if($errType==1){
	if(check_local_lang_ch()!=false){
	wp_die('对不起，你今天评论太多了，请明天再来吧……');
	}else{
	wp_die('Soory,you have commented too much.Please come back tomorrow……');
	}
	}else if($errType==2){
	if(check_local_lang_ch()!=false){
	wp_die('对不起，你已经被禁止评论，如果有疑问，请联系管理员……');
	}else{
	wp_die('Sorry,you have been banned to post comments.Please contact administrator if you wanna learn more……');
	}
	}else if($errType==3){
	if(check_local_lang_ch()!=false){
	wp_die('请认真评论，不要单纯复制文章片段作为评论全部内容……');
	}else{
	wp_die('Do not copy article content fragment for comment without other words.Please type the comment content carefully.……');
	}
	}else if($errType==4){
	wp_die('天朝规定，必须有天朝文字出现在评论中方准通过，你懂的……');
	}
    }else{
	if(check_local_lang_ch()!=false){
	wp_die('你的评论字数太少，不足'.$comment_word_count_limited.'个字，所以无法提交……');
	}else{
	wp_die('Sorry,your comment content is too short to submit.Please enter at least '.$comment_word_count_limited.' characters.');
	}
    }	
	return $commentdata;
}
add_filter('preprocess_comment','itluren_comment_filer');
//阻止访问
add_action('get_header','itluren_view_ip_filer');
function itluren_view_ip_filer(){
$stem_ip_backlist=explode("||",stripslashes(get_option(STEM_IP_BACKLIST)));
if(!empty($stem_ip_backlist)&&$stem_ip_backlist[0]!=''){
for($i=0;$i<count($stem_ip_backlist);$i++){
if($stem_ip_backlist[$i]==itluren_GetIP()){
if(check_local_lang_ch()!=false){
wp_die('对不起，你已经被禁止访问，如果想解禁，请联系管理员……');
}else{
wp_die('Sorry,you have been banned to access.Please contect us if you wanna lift your ban……');
}
}
}
}
}
function itluren_comment_filter_admin(){
?>
<style type="text/css">
#wpcontent,#wpfooter{background:#eeeeee!important;}
#itluren_updated,#itluren_show_note,#itluren_comment_filter_warp{width:70%;background:#fff;color:#333;}
#itluren_updated{height:40px;margin:20px 0 0 20px;border-left:4px #6BA82F solid;line-height:40px;text-indent:10px;}
#itluren_show_note{height:40px;margin:20px 0 0 20px;line-height:40px;-webkit-border-top-left-radius:5px;-webkit-border-top-right-radius:5px;-moz-border-radius-topleft:5px;-moz-border-radius-topright:5px;border-top-left-radius:5px;border-top-right-radius:5px;text-indent:20px;font-size:15px;background:#747474 url("http://www.itluren.com/wp-content/themes/d-simple/img/logo.png") no-repeat right center;color:#fff;}
#itluren_show_note a{color:#333;padding:5px 10px;text-decoration:none;background:#fff;margin:0 5px;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px; -webkit-box-shadow:4px 2px 6px #000000;box-shadow:4px 2px 6px #000000;-moz-box-shadow:3px 2px 6px #000000;}
#itluren_comment_filter_warp{margin:0 0 0 20px;padding:20px 0 30px;-webkit-border-bottom-right-radius:5px;-webkit-border-bottom-left-radius:5px;-moz-border-radius-bottomright:5px;-moz-border-radius-bottomleft:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;}
.itluren_comment_filter_item{width:80%;margin-left:20px;padding:20px 0;border-bottom:2px #747474 dotted;}
#itluren_comment_filter_warp .itluren_comment_filter_title{height:35px;line-height:35px;width:100%;font-size:15px;}
#itluren_comment_filter_warp .itluren_comment_filter_note{line-height:20px;width:100%;}
.itluren_comment_filter_item input,.itluren_comment_filter_item textarea{width:100%;}
.itluren_comment_filter_item textarea{min-height:100px;line-height:20px;}
#itluren_submit{padding:5px 30px;margin:10px 0 0 20px;}
.itluren_comment_filter_note b{color:#eb2d7a;font-weight:normal;}
</style>
<?php
if(!empty($_POST['action'])){
//接下来获取参数并保存
$itluren_comment_count=(int)$_POST['comment_count_limit'];//一天评论次数
$itluren_comment_nickname=$_POST['comment_nickname_limit'];//昵称黑名单
$itluren_comment_email=$_POST['comment_email_limit'];//邮箱黑名单
$itluren_comment_site=$_POST['comment_site_limit'];//网址黑名单
$itluren_comment_content=$_POST['comment_content_limit'];//内容片断黑名单
$itluren_comment_word=$_POST['comment_word_limit'];//评论字数
$itluren_comment_ip=$_POST['comment_ip_limit'];//IP黑名单
$itluren_site_ip=$_POST['site_ip_limit'];//阻止访问IP黑名单
update_option(COMMENT_COUNT_BACKLIST,$itluren_comment_count);
update_option(COMMENT_NICKNAME_BACKLIST,$itluren_comment_nickname);
update_option(COMMENT_EMAIL_BACKLIST,$itluren_comment_email);
update_option(COMMENT_SITE_BACKLIST,$itluren_comment_site);
update_option(COMMENT_CONTENT_BACKLIST,$itluren_comment_content);
update_option(COMMENT_WORD_BACKLIST,$itluren_comment_word);
update_option(COMMENT_IP_BACKLIST,$itluren_comment_ip);
update_option(STEM_IP_BACKLIST,$itluren_site_ip);
echo '<div id="itluren_updated" onLoad="hidde_updataed();"><p><strong>';echo _e('Updataed！','comments_filter');echo '</strong></p></div>';
}
$limit_comment_count=get_option(COMMENT_COUNT_BACKLIST);
$limit_comment_nickname=get_option(COMMENT_NICKNAME_BACKLIST);
$limit_comment_email=get_option(COMMENT_EMAIL_BACKLIST);
$limit_comment_site=get_option(COMMENT_SITE_BACKLIST);
$limit_comment_content=get_option(COMMENT_CONTENT_BACKLIST);
$limit_comment_word=get_option(COMMENT_WORD_BACKLIST);
$limit_comment_ip=get_option(COMMENT_IP_BACKLIST);
$limit_view_ipbacklist=get_option(STEM_IP_BACKLIST);
?>
<div id="itluren_show_note"><?php echo _e('wp-itluren-comment-filter is developed by','comments_filter');?><a href="http://www.itluren.com" target="_blank">IT路人</a><?php echo _e('.','comments_filter');?></div>
<form action="" method="post">
<div id="itluren_comment_filter_warp">
<div class="itluren_comment_filter_item" id="itluren_comment_count">
<div class="itluren_comment_filter_title"><?php echo _e('Most Comments Times Daily','comments_filter');?></div>
<div class="itluren_comment_filter_input"><input type="text" value="<?php echo $limit_comment_count;?>" name="comment_count_limit" placeholder="<?php echo _e('Please type a number','comments_filter');?>" /></div>
<div class="itluren_comment_filter_note"><?php echo _e('Please type a number to limit the daily comment count of everyone.<b>Do not enter anything or enter 0 if you decide not to limit the comment number</b>.','comments_filter');?></div>
</div>
<div class="itluren_comment_filter_item" id="itluren_comment_nickname">
<div class="itluren_comment_filter_title"><?php echo _e('Nickname Backlist','comments_filter');?></div>
<div class="itluren_comment_filter_input"><textarea name="comment_nickname_limit" type="textarea"><?php echo $limit_comment_nickname;?></textarea></div>
<div class="itluren_comment_filter_note"><?php echo _e('Type the nickname limited(if a user use the nickname or a similar nickname,the comment will be banned to submit).<b>Please ensure that two nicknames are separated by \'||\'</b>.','comments_filter');?></div>
</div>
<div class="itluren_comment_filter_item" id="itluren_comment_email">
<div class="itluren_comment_filter_title"><?php echo _e('Email Backlist','comments_filter');?></div>
<div class="itluren_comment_filter_input"><textarea name="comment_email_limit" type="textarea"><?php echo $limit_comment_email;?></textarea></div>
<div class="itluren_comment_filter_note"><?php echo _e('Type the list of emails limited(if the user email is included in the list,the comment will be banned to submit).<b>Please ensure that two emails are separated by \'||\'</b>.','comments_filter');?></div>
</div>
<div class="itluren_comment_filter_item" id="itluren_comment_site">
<div class="itluren_comment_filter_title"><?php echo _e('Website Backlist','comments_filter');?></div>
<div class="itluren_comment_filter_input"><textarea name="comment_site_limit" type="textarea"><?php echo $limit_comment_site;?></textarea></div>
<div class="itluren_comment_filter_note"><?php echo _e('Type the list of sites limited(if the user website is included in the list,the comment will be banned to submit).<b>Please ensure that two sites are separated by \'||\'</b>.','comments_filter');?></div>
</div>
<div class="itluren_comment_filter_item" id="itluren_comment_content">
<div class="itluren_comment_filter_title"><?php echo _e('Content Fragment Backlist','comments_filter');?></div>
<div class="itluren_comment_filter_input"><textarea name="comment_content_limit" type="textarea"><?php echo $limit_comment_content;?></textarea></div>
<div class="itluren_comment_filter_note"><?php echo _e('Type the content fragments limited(if a user use the content fragment or a similar content fragment,the comment will be banned to submit).<b>Please ensure that two content fragments are separated by \'||\'</b>.','comments_filter');?></div>
</div>
<div class="itluren_comment_filter_item" id="itluren_comment_word">
<div class="itluren_comment_filter_title"><?php echo _e('How long comment should be at least.','comments_filter');?></div>
<div class="itluren_comment_filter_input"><input type="text" value="<?php echo $limit_comment_word;?>" name="comment_word_limit" placeholder="<?php echo _e('Please type a number','comments_filter');?>" /></div>
<div class="itluren_comment_filter_note"><?php echo _e('Please type a number to place a word count on how long your comments should be.The comment will be banned to submit if the content too short.','comments_filter');?></div>
</div>
<div class="itluren_comment_filter_item" id="itluren_comment_ip">
<div class="itluren_comment_filter_title"><?php echo _e('Comment user IPs Backlist','comments_filter');?></div>
<div class="itluren_comment_filter_input"><textarea name="comment_ip_limit" type="textarea"><?php echo $limit_comment_ip;?></textarea></div>
<div class="itluren_comment_filter_note"><?php echo _e('Type the list of ips limited(if the user IP is included in the list,the comment will be banned to submit).<b>Please ensure that two IPs are separated by \'||\'</b>.','comments_filter');?></div>
</div>
<div class="itluren_comment_filter_item" id="itluren_site_ip" style="border-bottom:none;">
<div class="itluren_comment_filter_title"><?php echo _e('Visitor IPs Backlist','comments_filter');?></div>
<div class="itluren_comment_filter_input"><textarea name="site_ip_limit" type="textarea"><?php echo $limit_view_ipbacklist;?></textarea></div>
<div class="itluren_comment_filter_note"><?php echo _e('Type the list of IPs limited(if the IP of visitor is included in the list,the visitor will be banned to access).<b>Please ensure that two IPs are separated by \'||\'</b>.','comments_filter');?></div>
</div>
</div>
<input type="hidden" name="action" value="updataed" />
<input id="itluren_submit" type="submit" name="itluren_submit" value="<?php echo _e('Save','comments_filter');?>" />
</form>
<?php
}
function itluren_comment_filter_setting() {

if(check_local_lang_ch()!=false){
add_options_page('评论过滤','评论过滤',8, __FILE__, 'itluren_comment_filter_admin');
}else{
add_options_page('Comments Filter','Comments Filter',8, __FILE__, 'itluren_comment_filter_admin');
}
}
add_action('admin_menu', 'itluren_comment_filter_setting');
?>