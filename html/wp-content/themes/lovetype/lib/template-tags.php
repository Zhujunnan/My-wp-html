<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package lovetype
 */

if ( ! function_exists( 'lovetype_paging_nav' ) ) :
/**
 * Display navigation to next/previous set of posts when applicable.
 */
function lovetype_paging_nav() {
	// Don't print empty markup if there's only one page.
	if ( $GLOBALS['wp_query']->max_num_pages < 2 ) {
		return;
	}
	?>
	<nav class="navigation paging-navigation" role="navigation">
		<h1 class="screen-reader-text"><?php _e( 'Posts navigation', 'lovetype' ); ?></h1>
		<ul class="pager">

			<?php if ( get_next_posts_link() ) : ?>
			<li class="previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'lovetype' ) ); ?></li>
			<?php endif; ?>

			<?php if ( get_previous_posts_link() ) : ?>
			<li class="next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'lovetype' ) ); ?></li>
			<?php endif; ?>

		</ul><!-- .nav-links -->
	</nav><!-- .navigation -->
	<?php
}
endif;

if ( ! function_exists( 'lovetype_post_nav' ) ) :
/**
 * Display navigation to next/previous post when applicable.
 */
function lovetype_post_nav() {
	// Don't print empty markup if there's nowhere to navigate.
	$previous = ( is_attachment() ) ? get_post( get_post()->post_parent ) : get_adjacent_post( false, '', true );
	$next     = get_adjacent_post( false, '', false );

	if ( ! $next && ! $previous ) {
		return;
	}
	?>
	<nav class="navigation post-navigation" role="navigation">
		<h4 class="screen-reader-text"><?php _e( 'Read other posts', 'lovetype' ); ?></h4>
		<ul class="pager">
			<?php
				previous_post_link( ' <li class="previous">%link</li>', _x( '<span class="meta-nav">&larr;</span> %title', 'Previous post link', 'lovetype' ) );
				next_post_link(     '<li class="next">%link</li>',     _x( '%title <span class="meta-nav">&rarr;</span>', 'Next post link',     'lovetype' ) );
			?>
		</ul><!-- .nav-links -->
	</nav><!-- .navigation -->
	<?php
}
endif;

/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
function lovetype_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'lovetype_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_the_cool_cats = get_categories( array(
			'fields'     => 'ids',
			'hide_empty' => 1,

			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'lovetype_categories', $all_the_cool_cats );
	}

	if ( $all_the_cool_cats > 1 ) {
		// This blog has more than 1 category so lovetype_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so lovetype_categorized_blog should return false.
		return false;
	}
}

/**
 * Flush out the transients used in lovetype_categorized_blog.
 */
function lovetype_category_transient_flusher() {
	// Like, beat it. Dig?
	delete_transient( 'lovetype_categories' );
}
add_action( 'edit_category', 'lovetype_category_transient_flusher' );
add_action( 'save_post',     'lovetype_category_transient_flusher' );
