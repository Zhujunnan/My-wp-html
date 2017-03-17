

<?php

require get_template_directory() . '/lib/nav.php'; 					    //Bootstrap nav menu
require get_template_directory() . '/lib/setup.php'; 					// Theme setup functions


/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/lib/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/lib/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/lib/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/lib/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/lib/jetpack.php';

?>
