<?php get_header(); ?>
    
    <!-- Blog Posts
    ================================================== -->
    <?php get_sidebar('top'); ?>
    <div class="blog">
        <div class="container">
            <div class="row">

            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>
                        <?php get_template_part( 'content'); ?>
                <?php endwhile; ?>

                <!-- Pagination -->
                <?php
				global $wp_query;

				$big = 999999999; // need an unlikely integer
				echo '<ul class="pagination">';
				echo paginate_links( array(
					'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
					'format' => '?paged=%#%',
					'current' => max( 1, get_query_var('paged') ),
					'total' => $wp_query->max_num_pages
				) );
				echo '</ul>';
				?>

            <?php else : ?>
                <?php get_template_part( 'content', 'none' ); ?>
            <?php endif; ?>

            </div>
        </div>
    </div>
    <?php get_sidebar('bottom'); ?>

<?php get_footer(); ?>