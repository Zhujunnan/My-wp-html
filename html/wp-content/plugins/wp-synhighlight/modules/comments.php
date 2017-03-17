<?php

/**
 * Function to control whether to process [codesyntax] bbcode in comments 
 *
 */
function wp_synhighlighter_comments_setup() {
	if (get_option('wp_synhighlight_process_comments')) {
		add_filter('comment_text', 'wp_synhighlighter_comments_filter');
		//add_filter('comment_text', 'wp_synhighlighter_comments_anti_mangle', 1000);
	}
}

/**
 * Function that serves as a filter for comment text to process [codesyntax] bbcode
 *
 * @param string $content
 * @return string
 */
function wp_synhighlighter_comments_filter($content) {
	$regexp = '\[(codesyntax)\b(.*?)(?:(\/))?\](?:(.+?)\[\/\1\])?';
	$content = preg_replace_callback('/' . $regexp . '/s', 'wp_synhighlight_do_shortcode_tag', 
			$content);
	return ($content);
}

/**
 * Function to process [codesyntax] tag in comments
 *
 * @param array $m
 * @return string
 */
function wp_synhighlight_do_shortcode_tag($m) {
	$attr = shortcode_parse_atts($m[2]);
	
	if (isset($m[4])) {
		// enclosing tag - extra parameter
		return fr_codesyntax_handler($attr, html_entity_decode($m[4]), false, true);
	} else {
		// self-closing tag
		return fr_codesyntax_handler($attr, NULL, false, true);
	}
}

/**
 * Function to unmangle comments (Wordpress likes to insert newlines where they are not needed at all)
 *
 * @param string $content
 * @return string
 */
function wp_synhighlighter_comments_anti_mangle($content) {
	return preg_replace_callback('#\s*(\<code.*?\>.*?\</code\>)\s*#si', 
			'wp_synhighlighter_comments_do_anti_mangle', $content);
}

/**
 * Function to remove unnecessary newlines from code
 *
 * @param string $data
 * @return string
 */
function wp_synhighlighter_comments_do_anti_mangle($data) {
	//$result = trim($data[0]);
	//file_put_contents("test.txt", var_export($data, true));
	//$result = preg_replace('/\r?\n/', '', $result);
	$result = substr($data[0], 6, strlen($result) - 5);
	return $result;
}
?>