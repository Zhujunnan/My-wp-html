<?php

if ( is_active_sidebar( 'rokophoto-sidebar-bottom' )  ) : ?>
	<div id="secondary_bottom" class="secondary-bottom">
		<div class="container">

			<?php if ( is_active_sidebar( 'rokophoto-sidebar-bottom' ) ) : ?>
				<div id="widget-area" class="widget-area" role="complementary">
					<?php dynamic_sidebar( 'rokophoto-sidebar-bottom' ); ?>
				</div><!-- .widget-area -->
			<?php endif; ?>

		</div><!-- .container -->
	</div><!-- .secondary -->

<?php endif; ?>