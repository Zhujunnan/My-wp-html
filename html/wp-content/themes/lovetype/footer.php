<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package lovetype
 */
?>

	</div><!-- #content -->
<!-- Footer -->
 <footer id="colophon" class="footer" role="contentinfo">
		
  	
	<div id="bottom">
		<div class="container">
			 <div class="row">
                    <div class="col-md-4">
                       <?php dynamic_sidebar( 'footer-1' ); ?>
                    </div>
                    <div class="col-md-4">
                       <?php dynamic_sidebar( 'footer-2' ); ?>
                    </div>
                    <div class="col-md-4">
                          <?php dynamic_sidebar( 'footer-3' ); ?>
                       
                    </div>
                </div> <!-- row -->
		</div>
	</div>



	<div class="site-footer ">  
		<p class="bg-info"><a href="<?php echo esc_url( __( 'http://wordpress.org/', 'lovetype' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'lovetype' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'lovetype' ), 'lovetype', '<a href="http://kumarmohit.com/" rel="designer">Mohit Kumar</a>' ); ?></p>
		</div><!-- .site-info -->
  </footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
