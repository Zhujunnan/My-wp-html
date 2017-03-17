<?php
/**
 * Jetpack Compatibility File
 * See: https://jetpack.me/
 *
 * @package start
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function start_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'start_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function start_jetpack_setup
add_action( 'after_setup_theme', 'start_jetpack_setup' );

function start_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function start_infinite_scroll_render