<?php

/**
 * Function to be called upon plugin activation.
 *
 */
function wp_synhighlight_on_install() {
	global $wpsh_upload_dir;
	
	//Creating options
	add_option('wp_synhighlight_process_comments', 1);
	add_option('wp_synhighlight_use_theme', 'wp-content/plugins/wp-synhighlight/themes/default');
	add_option('wp_synhighlight_disable_editarea', 0);
	add_option('wp_synhighlight_default_codeblock_title', __('Source code', 'wp-synhighlighter'));
	add_option('wp_synhighlight_default_lines', 'default');
	add_option('wp_synhighlight_default_lines_start_with', "0");
	add_option('wp_synhighlight_default_container', 'default');
	add_option('wp_synhighlight_default_capitalize_keywords', 'default');
	add_option('wp_synhighlight_default_tab_width', '4');
	add_option('wp_synhighlight_default_strict_mode', 'default');
	add_option('wp_synhighlight_default_blockstate', 'default');
	add_option('wp_synhighlight_styling_type', 'theme');
	add_option('wp_synhighlight_override_css_height', 0);
	add_option('wp_synhighlight_filesyntax_dir', $wpsh_upload_dir);
	add_option('wp_synhighlight_filesyntax_ext', "filesyntax phps source");
	add_option('wp_synhighlight_filesyntax_on', false);
	add_option('wp_synhighlight_doclinks_off', false);
}

function wpsh_welcome_text() {
	echo "<div id='akismet-warning' class='updated fade'><p><strong>" . __(
			'WP-SynHighligher plugin is almost ready.') . "</strong> " . sprintf(
			__(
					'You might want to <a href="%1$s">adjust its settings</a> for it to work as you want.'), 
			"options-general.php?page=wp-synhighlight/modules/settings.php") . "</p></div>";
}

function wpsh_satisfaction_text() {
	echo "<div id='akismet-warning' class='updated fade'><p><strong>" . __(
			'You are using WP-SynHighligher plugin for quite long already. ') . "</strong> " . sprintf(
			__(
					'Thank you! You might want to <a href="%1$s">donate to its development</a>, <a href="%2$s">rate it</a>, <a href="%3$s">ask a question about it or just tell us how you like it or not.</a>'), 
			"options-general.php?page=wp-synhighlight/modules/settings.php", 
			"http://wordpress.org/extend/plugins/wp-synhighlight/", 
			"http://wordpress.org/tags/wp-synhighlight?forum_id=10") . "</p></div>";
}

function wpsh_check_date() {
	$date = get_option('wp_synhighlight_date');
	
	if (! $date) {
		add_action('admin_notices', 'wpsh_welcome_text');
		add_option('wp_synhighlight_date', time());
		return;
	}
	
	if ((time() - $date) > 2 * 30 * 24 * 60 * 60) {
		add_action('admin_notices', 'wpsh_satisfaction_text');
		update_option('wp_synhighlight_date', time());
		return;
	}
}
?>