<?php
/**
 * @package lovetype
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="post-wrapper row">
<header class="entry-header">
		<?php the_title( sprintf( '<h1 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>

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
		<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'lovetype' ) ); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'lovetype' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	</div>
	<footer class="entry-footer well">
		<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
			<?php
				/* translators: used between list items, there is a space after the comma */
				$categories_list = get_the_category_list( __( ', ', 'lovetype' ) );
				if ( $categories_list && lovetype_categorized_blog() ) :
			?>
			<span class="cat-links">
				<?php printf( __( 'Posted in %1$s', 'lovetype' ), $categories_list ); ?>
			</span>
			<?php endif; // End if categories ?>

			<?php
				/* translators: used between list items, there is a space after the comma */
				$tags_list = get_the_tag_list( '', __( ', ', 'lovetype' ) );
				if ( $tags_list ) :
			?>
			<span class="tags-links">
				<?php printf( __( 'Tagged %1$s', 'lovetype' ), $tags_list ); ?>
			</span>
			<?php endif; // End if $tags_list ?>
		<?php endif; // End if 'post' == get_post_type() ?>

		<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
		<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'lovetype' ), __( '1 Comment', 'lovetype' ), __( '% Comments', 'lovetype' ) ); ?></span>
		<?php endif; ?>

		<?php edit_post_link( __( 'Edit', 'lovetype' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-footer -->

</article><!-- #post-## -->

