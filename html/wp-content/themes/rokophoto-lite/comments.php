<?php
/**
 * The template for displaying Comments
 *
 * The area of the page that contains comments and the comment form.
 */
if ( post_password_required() ) {
    return;
}
?>

<section id="comments">
    <div class="container">
	<?php if ( have_comments() ) : ?>

	<div class="col-md-12 center add-bottom wow fadeIn">
        <i class="fa fa-comments fa-2x"></i>
        <span class="comment-text">
	    	<?php
			    printf( _n( 'One thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', get_comments_number(), 'rokophotolite' ),
		    		number_format_i18n( get_comments_number() ), get_the_title() );
	    	?>
        </span>
	</div>

    <div class="col-md-8 col-md-offset-2">
        <ol class="commentlist">
		    <?php
    			wp_list_comments( array(
	    			'style'      => 'li',
		    		'short_ping' => true,
			    	'avatar_size'=> 34,
                    'callback'   => 'rokophotolite_comment',
			    ) );
	    	?>
	    </ol><!-- .comment-list -->
    </div>

	<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
	<nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
		<h1 class="screen-reader-text"><?php _e( 'Comment navigation', 'rokophotolite' ); ?></h1>
		<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'rokophotolite' ) ); ?></div>
		<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'rokophotolite' ) ); ?></div>
	</nav><!-- #comment-nav-below -->
	<?php endif; // Check for comment navigation. ?>

	<?php if ( ! comments_open() ) : ?>
	<p class="no-comments"><?php _e( 'Comments are closed.', 'rokophotolite' ); ?></p>
	<?php endif; ?>

	<?php endif; // have_comments() ?>

    </div>
</section><!-- #comments -->

<div id="commentform">
    <div class="container wow fadeIn"> <!-- Container -->
        <div class="row"> <!-- Row -->
            <div class="col-md-10 col-md-offset-1"> <!-- 12 column grid -->

<?php

$args = array(
'fields' => apply_filters(
'comment_form_default_fields', array(
'author' =>'<div class="col-md-6">
<div class="form-group wow fadeIn"> <!-- Your name input -->
<input id="author" name="author" type="text" class="form-control" value="' . esc_attr(  $commenter['comment_author'] ) . '" placeholder="' . __( 'Your Name', 'rokophotolite' ) . ' '. ( $req ? '*' : '' ) .'">
<p class="help-block text-danger"></p>
</div> ',
'email'  => '<div class="form-group wow fadeIn"> <!-- Your email input -->
<input id="email" name="email" type="email" class="form-control" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" placeholder="'. __( 'Your Email', 'rokophotolite' ) . ' '. ( $req ? '*' : '' ) .'">                            
<p class="help-block text-danger"></p>
</div>',
'url'    => '<div class="form-group wow fadeIn"> <!-- Your website. input -->
<input id="url" name="url" type="text" class="form-control" placeholder="'. __( 'Your Website', 'rokophotolite' ) . '">
</div>
</div>'
)
),
'comment_field' => '<div class="col-md-6 wow fadeIn comment-login"> <!-- 6 column grid right form-->
<div class="form-group"> <!-- Your message input -->
<textarea class="form-control" placeholder="'. __( 'Your Message', 'rokophotolite' ) . '" id="comment" name="comment" ></textarea>
<p class="help-block text-danger"></p>
</div>
</div> <!-- End 6 column grid right form-->',
    'comment_notes_after' => '',
);

comment_form($args);
?>

            </div>
        </div>
    </div>
</div>