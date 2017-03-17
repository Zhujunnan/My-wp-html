<?php

/**
 * Function for post parsing to apply different post stylings. the_posts hook.
 * @param array $posts
 * @return array $posts
 */
function wp_synhighlight_parse_posts($posts) {
	global $wp_sh_themeURL;
	if (empty($posts))
		return $posts;
	
	foreach ($posts as $post) {
		$matches = array();
		preg_match_all('/\[(?:code|file)syntax[^]]+lang\s*=\s*\"?(\w+)\"?/', $post->post_content, 
				$matches);
		foreach ($matches[1] as $language) {
			$language = trim(html_entity_decode($language), '"'); //Windows Live Writer fix
			wp_register_style("geshi-$language", "$wp_sh_themeURL/geshi/$language.css");
			wp_enqueue_style("geshi-$language");
		}
	}
	return $posts;
}

/**
 * Function for post parsing to apply different post stylings. the_posts hook.
 * @param array $posts
 * @return array $posts
 */
function wp_synhighlight_parse_comments($comments) {
	global $wp_sh_themeURL;
	if (empty($comments))
		return $comments;
	
	foreach ($comments as $comment) {
		$matches = array();
		preg_match_all('/\[(?:code|file)syntax[^]]+lang\s*=\s*\"?(\w+)\"?/', 
				$comment->comment_content, $matches);
		foreach ($matches[1] as $language) {
			$language = trim(html_entity_decode($language), '"'); //Windows Live Writer fix
			wp_register_style("geshi-$language", "$wp_sh_themeURL/geshi/$language.css");
			wp_enqueue_style("geshi-$language");
		}
	}
	return $comments;
}