                <!-- Blog post -->
                <div <?php post_class('blog-post'); ?> id="post-<?php the_ID(); ?>">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="post wow fadeIn" data-wow-duration="2s">
                            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                            <ul class="list-inline">
                                <li><?php _e( 'Post By:', 'rokophotolite' ); ?> <?php the_author_posts_link(); ?></li>
                                <li><?php _e( 'Date:', 'rokophotolite' ); ?> <time><?php the_time( get_option( 'date_format' ) ); ?></time></li>
                                <li><?php _e( 'Category:', 'rokophotolite' ); ?> <?php the_category(', '); ?></li>
                                <li><?php the_tags('Tags: ', ', '); ?></li>
                            </ul>
                            <?php if ( has_post_thumbnail() && ! post_password_required() ) : ?>
                                <?php the_post_thumbnail( 'full', array( 'class' => "img-responsive")); ?>
                            <?php endif; ?>
                            <?php the_content(); ?>
                            <?php wp_link_pages(); ?>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>