<?php get_header(); ?>

    <!-- Blog Posts
    ================================================== -->
    <?php get_sidebar('top'); ?>
    <div class="blog">
        <div class="container">
            <div class="row">

            <?php if ( have_posts() ) : ?>

                <?php while ( have_posts() ) : the_post(); ?>
                        <?php get_template_part( 'content', 'single'); ?>
                <?php endwhile; ?>

            <?php else : ?>
                <?php get_template_part( 'content', 'none' ); ?>
            <?php endif; ?>

            </div>
        </div>
    </div>

    <?php
        // If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
    ?>
    <?php get_sidebar('bottom'); ?>
    
<?php get_footer(); ?>