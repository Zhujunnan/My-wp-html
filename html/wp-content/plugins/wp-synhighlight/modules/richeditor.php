<?php
function wp_synhighlighter_addbuttons() {
   // Don't bother doing this stuff if the current user lacks permissions
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
 
   // Add only in Rich Editor mode
   if ( get_user_option('rich_editing') == 'true') {
     add_filter("mce_external_plugins", "add_wp_synhighlighter_tinymce_plugin");
     add_filter('mce_buttons', 'register_wp_synhighlighter_button');
     add_filter('tiny_mce_version', 'wp_synhighlight_change_tinymce_version');
   }
}
 
function register_wp_synhighlighter_button($buttons) {
   array_push($buttons, "separator", "WPSynHighlight");
   return $buttons;
}
 
// Load the TinyMCE plugin : editor_plugin.js (wp2.5)
function add_wp_synhighlighter_tinymce_plugin($plugin_array) {
   $plugin_array['WPSynHighlight'] = WP_CONTENT_URL . "/plugins/wp-synhighlight/tinymce/tinymce_buttons.js";
   return $plugin_array;
}

function wp_synhighlight_change_tinymce_version($version) {
		return ++$version;
	}

?>