<?php
/**
 * WordPress基础配置文件。
 *
 * 这个文件被安装程序用于自动生成wp-config.php配置文件，
 * 您可以不使用网站，您需要手动复制这个文件，
 * 并重命名为“wp-config.php”，然后填入相关信息。
 *
 * 本文件包含以下配置选项：
 *
 * * MySQL设置
 * * 密钥
 * * 数据库表名前缀
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL 设置 - 具体信息来自您正在使用的主机 ** //
/** WordPress数据库的名称 */
define('DB_NAME', 'wordpress');

/** MySQL数据库用户名 */
define('DB_USER', 'root');

/** MySQL数据库密码 */
define('DB_PASSWORD', 'love2008');

/** MySQL主机 */
define('DB_HOST', 'localhost');

/** 创建数据表时默认的文字编码 */
define('DB_CHARSET', 'utf8mb4');

/** 数据库整理类型。如不确定请勿更改 */
define('DB_COLLATE', '');

/**#@+
 * 身份认证密钥与盐。
 *
 * 修改为任意独一无二的字串！
 * 或者直接访问{@link https://api.wordpress.org/secret-key/1.1/salt/
 * WordPress.org密钥生成服务}
 * 任何修改都会导致所有cookies失效，所有用户将必须重新登录。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'C?nSJWM0=U#K^z;hg:<c.872xz*r4Df^Ex|+wy1=me4=`Jp=~dEeqls{})`_u)*J');
define('SECURE_AUTH_KEY',  'xPvRCVk,SU(Y)&%f<}c!Xhu0UUcw><;,6>gmcRiM<aFn?WPlwvoKY:),oK=H}M:g');
define('LOGGED_IN_KEY',    '5T!i3RR}-8d1Hvm<{<8&|dsjS/[@ijz6RhcI.CjT-F;5a;Q&+Gg$G$?E$mp(pw< ');
define('NONCE_KEY',        'UT&@HBb_S%e!vd=GOod9+:R@qedzo,e`H43F}_quaUrgT|C+&$u2|[Li4`9M 0>W');
define('AUTH_SALT',        'Y`9aNH$lw?Qmjebd>zI4</gYRgNvoP:9y/d6V#Z1ML^y6ePJA>Q$RzON&,-zzm|U');
define('SECURE_AUTH_SALT', 'Nv]+:.SuQ8@0RQ?7X~C)p=APOQPFw)h-_WtjteU%-B5LVMs(f`UW&]ciL{ G}RS)');
define('LOGGED_IN_SALT',   'rs#qgGtQZ^o~Is%KN-A}zABYsUZFxu0/],9T3fI``Da1Yn!4;7^I_&9[9TQ+dITb');
define('NONCE_SALT',       '|<<MH0iak:lISHh_;~;iei<.T=as9/jpW)u%V*1pF9qUoP8a4>Fj)z{z6ES!d:.J');

/**#@-*/

/**
 * WordPress数据表前缀。
 *
 * 如果您有在同一数据库内安装多个WordPress的需求，请为每个WordPress设置
 * 不同的数据表前缀。前缀名只能为数字、字母加下划线。
 */
$table_prefix  = 'wp_';

/**
 * 开发者专用：WordPress调试模式。
 *
 * 将这个值改为true，WordPress将显示所有用于开发的提示。
 * 强烈建议插件开发者在开发环境中启用WP_DEBUG。
 *
 * 要获取其他能用于调试的信息，请访问Codex。
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/**
 * zh_CN本地化设置：启用ICP备案号显示
 *
 * 可在设置→常规中修改。
 * 如需禁用，请移除或注释掉本行。
 */
define('WP_ZH_CN_ICP_NUM', true);

/* 好了！请不要再继续编辑。请保存本文件。使用愉快！ */

/** WordPress目录的绝对路径。 */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** 设置WordPress变量和包含文件。 */
require_once(ABSPATH . 'wp-settings.php');
