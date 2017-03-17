<?php

// Do not delete these lines
if ( ! empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']) )
    die ('Please do not load this page directly. Thanks!');

if ( post_password_required() ) {
    ?>
    <p class="nocomments">This post is password protected. Enter the password to view
        comments.</p>
    <?php
    return;
}
?>
    <!-- You can start editing here. -->
<?php if ( have_comments() ) : ?>
    <div class="total-comments">
        <h4><?php comments_number('No Responses', 'Comments', 'Comments'); ?></h4>
    </div>
    <div id="comments">
        <ol class="commentlist">
            <div class="navigation">
                <div class="alignleft"><?php previous_comments_link() ?></div>
                <div class="alignright"><?php next_comments_link() ?></div>
            </div>
            <?php wp_list_comments('type=comment&callback=lovetype_comments'); ?>
            <div class="navigation">
                <div class="alignleft"><?php previous_comments_link() ?></div>
                <div class="alignright"><?php next_comments_link() ?></div>
            </div>
        </ol>
    </div>
<?php else : // this is displayed if there are no comments so far ?>
    <?php if ( 'open' == $post->comment_status ) : ?>
        <!-- If comments are open, but there are no comments. -->
    <?php else : // comments are closed ?>
        <!-- If comments are closed. -->
        <p class="nocomments"></p>
    <?php endif; ?>
<?php endif; ?>
<?php if ( 'open' == $post->comment_status ) : ?>
    <div id="commentsAdd">
        <div id="respond" class="box m-t-6">
            <?php comment_form(); ?>
        </div>
    </div>
<?php endif; // if you delete this the sky will fall on your head ?>
