                <div class="blog-posts">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="post wow fadeIn" data-wow-duration="2s">
                            <h2><?php _e( 'Nothing Found', 'rokophotolite' ); ?></h2>
                                <?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
                                    <p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'rokophotolite' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
                                <?php elseif ( is_search() ) : ?>
                        			<p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'rokophotolite' ); ?></p>
			                        <?php get_search_form(); ?>
                                <?php else : ?>
                                    <p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'rokophotolite' ); ?></p>
                    	    		<?php get_search_form(); ?>
                        		<?php endif; ?>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>