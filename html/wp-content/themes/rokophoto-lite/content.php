                <!-- Blog post -->
                <div <?php post_class('blog-posts'); ?> id="post-<?php the_ID(); ?>">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="post wow fadeIn" data-wow-duration="2s">
                            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                            <ul class="list-inline">
                                <li><?php _e( 'Post By:', 'rokophotolite' ); ?> <?php the_author_posts_link(); ?></li>
                                <li><?php _e( 'Date:', 'rokophotolite' ); ?> <time><?php the_time( get_option( 'date_format' ) ); ?></time></li>
                                <li><?php _e( 'Category:', 'rokophotolite' ); ?> <?php the_category(', '); ?></li>
                            </ul>
                            <?php if ( has_post_thumbnail() && ! post_password_required() ) : ?>
                                <?php 
                                    $image_id = get_post_thumbnail_id();
                                    $image_url_mobile = wp_get_attachment_image_src($image_id, 'blog_post_thumbnail_mobile', true);
                                ?>
                                <picture>
                                    <source media="(max-width: 480px)" srcset="<?php echo esc_url( $image_url_mobile[0] ); ?>">
                                    <?php the_post_thumbnail( 'blog_post_thumbnail', array( 'class' => "img-responsive")); ?>
                                </picture>
                            <?php endif; ?>
                            <?php the_excerpt(); ?>
                            <a href="<?php the_permalink(); ?>" class="btn btn-primary"><?php _e( 'Read More', 'rokophotolite' ); ?></a>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="divider"></div>
                </div>