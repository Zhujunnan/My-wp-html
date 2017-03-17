    <!-- About Section
    ================================================== -->
    <section id="bsocials">
      <div class="container wow bounceIn" data-wow-delay="0.8s">
        <?php
          $socialtext = get_theme_mod('rokophotolite_social_text', __( 'Follow Me', 'rokophotolite' ));
          $sociallabel = get_theme_mod('rokophotolite_social_label', __( 'To get the latest update of me and my works', 'rokophotolite' ));
	  if(!empty($sociallabel)) {
              echo '<p> '. wp_kses_post( $sociallabel ) .' </p>';
	  }
	  if(!empty($socialtext)) {
              echo '<p>  &gt;&gt; <span class="follow"> '.wp_kses_post( $socialtext ).' </span>  &lt;&lt; </p>';
	  }
        ?>
        <ol class="social">
        <?php
          $facebookurl = get_theme_mod('rokophotolite_facebook_link', '#');
          $twitterurl = get_theme_mod('rokophotolite_twitter_link', '#');
          $behanceurl = get_theme_mod('rokophotolite_behance_link', '#');
          $dribbbleurl = get_theme_mod('rokophotolite_dribbble_link', '#');
          $flickrurl = get_theme_mod('rokophotolite_flickr_link', '#');
          $googleplusurl = get_theme_mod('rokophotolite_googleplus_link', '#');
          $instagramurl = get_theme_mod('rokophotolite_instagram_link', '#');
          $mailaddress = get_theme_mod('rokophotolite_mail_link');
          $linkedin = get_theme_mod('rokophotolite_linkedin_link');
          if(!empty($facebookurl)) {
              echo '<li><a href="'. esc_url( $facebookurl ) .'" title="'. __( 'Facebook', 'rokophotolite' ) .'"><i class="fa fa-facebook fa-2x"></i></a></li>';
          }

          if(!empty($twitterurl)) {
              echo '<li><a href="'. esc_url( $twitterurl ) .'" title="'. __( 'Twitter', 'rokophotolite' ) .'"><i class="fa fa-twitter fa-2x"></i></a></li>';
          }

          if(!empty($behanceurl)) {
              echo '<li><a href="'. esc_url( $behanceurl ) .'" title="'. __( 'Behance', 'rokophotolite' ) .'"><i class="fa fa-behance fa-2x"></i></a></li>';
          }

          if(!empty($dribbbleurl)) {
              echo '<li><a href="'. esc_url( $dribbbleurl ) .'" title="'. __( 'Dribbble', 'rokophotolite' ) .'"><i class="fa fa-dribbble fa-2x"></i></a></li>';
          }

          if(!empty($flickrurl)) {
              echo '<li><a href="'. esc_url( $flickrurl ) .'" title="'. __( 'Flickr', 'rokophotolite' ) .'"><i class="fa fa-flickr fa-2x"></i></a></li>';
          }

          if(!empty($googleplusurl)) {
              echo '<li><a href="'. esc_url( $googleplusurl ) .'" title="'. __( 'Google+', 'rokophotolite' ) .'"><i class="fa fa-google-plus fa-2x"></i></a></li>';
          }

          if(!empty($instagramurl)) {
              echo '<li><a href="'. esc_url( $instagramurl ) .'" title="'. __( 'Instagram', 'rokophotolite' ) .'"><i class="fa fa-instagram fa-2x"></i></a></li>';
          }

          if(!empty($mailaddress)) {
              echo '<li><a href="mailto:'. antispambot( $mailaddress ) .'" title="'. __( 'Mail address', 'rokophotolite' ) .'"><i class="fa fa-envelope-o fa-2x"></i></a></li>';
          }

          if(!empty($linkedin)) {
              echo '<li><a href="'. esc_url( $linkedin ) .'" title="'. __( 'LinkedIn', 'rokophotolite' ) .'"><i class="fa fa-linkedin fa-2x"></i></a></li>';
          }
         ?>
        </ol>
      </div>
    </section>

    <div id="footer-nav">  <!-- Copyright notice on the bottom -->
      <span><?php $copyright = get_theme_mod('rokophotolite_footer_copyrights', __( 'RokoPhoto Lite. All Rights Reserved', 'rokophotolite' )); if(!empty($copyright)) { echo wp_kses_post( $copyright ); } ?> <br/> <a href="<?php echo esc_url( 'https://themeisle.com/themes/rokophoto-lite/' ); ?>" target="_blank" rel="nofollow"><?php _e( 'RokoPhoto Lite', 'rokophotolite' ); ?></a> <?php _e(' powered by','rokophotolite'); ?> <a href="<?php echo esc_url( 'https://wordpress.org/' ); ?>" target="_blank" rel="nofollow"> WordPress</a></span>
    </div>

<?php wp_footer(); ?>

  </body>
</html>