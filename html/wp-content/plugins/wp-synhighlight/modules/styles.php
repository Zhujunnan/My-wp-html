<?php

/**
 * Function is called by wordpress to inject content to it
 */
function wp_synhighlight_head() {
	global $wp_sh_themeURL;
	
	//Injecting CSS
	if (file_exists(TEMPLATEPATH . "/wp-synhighlighter.css")) {
		$css_url = get_bloginfo("template_url") . "/wp-synhighlighter.css";
	} else {
		$css_url = $wp_sh_themeURL . '/' . 'wp-synhighlighter.css';
	}
	echo "\n" . '<link rel="stylesheet" href="' . $css_url . '" type="text/css" media="screen" />' .
			 "\n";
		
		//Injecting JS
		$js_url = $wp_sh_themeURL . '/' . 'wp-synhighlighter.js';
		if (file_exists(TEMPLATEPATH . "/wp-synhighlighter.js")) {
			$js_url = get_bloginfo("template_url") . "/wp-synhighlighter.css";
		} else {
			$js_url = $wp_sh_themeURL . "/wp-synhighlighter.js";
		}
		echo "\n" . '<script type="text/javascript" src="' . $js_url . '"></script>' . "\n";
	}
	
	?>