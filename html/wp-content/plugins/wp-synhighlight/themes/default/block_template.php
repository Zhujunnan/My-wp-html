<?php

/**
 * This function returns the header for the block inside which Geshi container is located
 * This return value of both functions can be changed to style the container
 * @param int $instanceNumber A number of this code block instance (they are sequential)
 * @param string $title Title of this code block
 * @param string $bookmarkname A name of the bookmark of this code block
 * @param bool $initiallyHidden Should the block be initially collapsed
 */
function wp_synhighlight_get_tpl_header($instanceNumber, $title, $bookmarkname, $initiallyHidden) {
	$displayClass = (($initiallyHidden) ? ('wp-synhighlighter-collapsed') : ('wp-synhighlighter-expanded'));
	$displayStyle = (($initiallyHidden) ? ('none') : ('block'));
	
	//If we need to override CSS settings on max block height
	$overrideHeight = '';
	$cssHeight = get_option('wp_synhighlight_override_css_height');
	if ($cssHeight) {
		$overrideHeight = "max-height: {$cssHeight}px";
	}
	
	//===================================================
	//Outer block
	//===================================================
	$output = '<div id="wpshdo_' . $instanceNumber . '" class="wp-synhighlighter-outer">';
	
	//===================================================
	//Title block
	//===================================================
	//Div of the title
	$output .= '<div id="wpshdt_' . $instanceNumber . '" class="' . $displayClass .
			 '">';
	
	//Table for title
	$output .= '<table border="0" width="100%"><tr>';
	
	//Left part - code header and bookmark
	$output .= '<td align="left" width="80%">';
	$output .= '<a name="#' . $bookmarkname . '"></a>';
	$output .= '<a id="wpshat_' . $instanceNumber . '" class="wp-synhighlighter-title" href="#' . $bookmarkname .
			 '"  onClick="javascript:wpsh_toggleBlock(' . $instanceNumber . ')" title="' . __(
					'Click to show/hide code block', 'wp-synhighlighter') . '">' . htmlspecialchars(
					$title) . '</a>';
	$output .= '</td>';
	
	//Right part - buttons
	$output .= '<td align="right">';
	$output .= get_button_html_js($bookmarkname, $instanceNumber, 'code.png', 'wpsh_code', 
			__("Show code only", 'wp-synhighlighter'));
	$output .= get_button_html_js($bookmarkname, $instanceNumber, 'printer.png', 'wpsh_print', 
			__("Print code", 'wp-synhighlighter'));
	$output .= get_button_html_link('info.gif', get_bloginfo("wpurl") . '/wp-content/plugins/wp-synhighlight/About.html', 
			__("Show plugin information", 'wp-synhighlighter'));
	
	$output .= '</td>';
	
	//Table completed
	$output .= '</tr></table>';
	
	//Div closes
	$output .= '</div>';
	
	//===================================================
	//Inner block
	//===================================================
	$output .= '<div id="wpshdi_' . $instanceNumber . '" class="wp-synhighlighter-inner" style="display: ' .
			 $displayStyle . ';' . $overrideHeight . '">';
	return ($output);
}

/**
 * Function forms HTML code for a button
 * @param $bookmarkname A name of the bookmark
 * @param $instanceNumber A number of this code block instance (they are sequential)
 * @param $imageName A name of the image if this button
 * @param $jsFunctionName A name of the JS function this button executes over the block
 */
function get_button_html_js($bookmarkname, $instanceNumber, $imageName, $jsFunctionName, $buttonHint) {
	global $wp_sh_themeURL;
	return ('<a href="#' . $bookmarkname . '" onClick="javascript:' . $jsFunctionName . '(' . $instanceNumber .
			 ')" title="' . htmlspecialchars($buttonHint) . '"><img border="0" style="border: 0 none" src="' .
			 $wp_sh_themeURL . '/images/' . $imageName . '" /></a>&nbsp;');
}

/**
 * Function forms HTML code for a button
 * @param $bookmarkname A name of the bookmark
 * @param $instanceNumber A number of this code block instance (they are sequential)
 * @param $imageName A name of the image if this button
 * @param $jsFunctionName A name of the JS function this button executes over the block
 */
function get_button_html_link($imageName, $linkAddress, $buttonHint) {
	global $wp_sh_themeURL;
	return ('<a href="' . $linkAddress . '" target="_blank" title="' . htmlspecialchars($buttonHint) . '"><img border="0" style="border: 0 none" src="' .
			 $wp_sh_themeURL . '/images/' . $imageName . '" /></a>&nbsp;');
}

/**
 * This function returns the footer for the block inside which Geshi container is located
 *
 * @return string
 */
function wp_synhighlight_get_tpl_footer() {
	return ('</div></div>');
}
?>