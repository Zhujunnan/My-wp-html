<?php
/**
 * @package lovetype
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

  <div class="post-wrapper row">
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

		 
	</header><!-- .entry-header -->

<aside class="meta col-md-2 text-cente">
			<a href="<?php echo get_author_posts_url(get_the_author_meta( 'ID' )); ?>">
				<?php echo get_avatar( get_the_author_meta('email'), '128' ); ?>
			</a>
			<?php if ( 'post' == get_post_type() ) : ?>
			<div id="time">
			<span class="month"><?php the_time( 'M' ); ?></span>
			<span class="day"><?php the_time( 'd' ); ?></span>
			<span class="year"><?php the_time( 'o' ); ?></span>
			</div>
			<?php endif; ?>
			
		 </aside>
                
	<div class="entry-content  col-md-10">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'lovetype' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
</div>	
	<footer class="entry-footer well">
		<?php
			/* translators: used between list items, there is a space after the comma */
			$category_list = get_the_category_list( __( ', ', 'lovetype' ) );

			/* translators: used between list items, there is a space after the comma */
			$tag_list = get_the_tag_list( '', __( ', ', 'lovetype' ) );

			if ( ! lovetype_categorized_blog() ) {
				// This blog only has 1 category so we just need to worry about tags in the meta text
				if ( '' != $tag_list ) {
					$meta_text = __( 'This entry was tagged %2$s. Bookmark the <a href="%3$s" rel="bookmark">permalink</a>.', 'lovetype' );
				} else {
					$meta_text = __( 'Bookmark the <a href="%3$s" rel="bookmark">permalink</a>.', 'lovetype' );
				}

			} else {
				// But this blog has loads of categories so we should probably display them here
				if ( '' != $tag_list ) {
					$meta_text = __( 'This entry was posted in %1$s and tagged %2$s. Bookmark the <a href="%3$s" rel="bookmark">permalink</a>.', 'lovetype' );
				} else {
					$meta_text = __( 'This entry was posted in %1$s. Bookmark the <a href="%3$s" rel="bookmark">permalink</a>.', 'lovetype' );
				}

			} // end check for categories on this blog

			printf(
				$meta_text,
				$category_list,
				$tag_list,
				get_permalink()
			);
		?>

		<?php edit_post_link( __( 'Edit', 'lovetype' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-footer -->

</article><!-- #post-## -->


