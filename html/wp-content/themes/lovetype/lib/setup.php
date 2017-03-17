<?php
/**
 * lovetype functions and definitions
 *
 * @package lovetype
 */


if ( ! function_exists( 'lovetype_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function lovetype_setup() {


/**
 * Set the content width based on the theme's design and stylesheet.
 */

 global $content_width;
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on lovetype, use a find and replace
	 * to change 'lovetype' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'lovetype', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	//add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary_navigation' => __( 'Primary Menu', 'lovetype' ),
	) );
	
	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link'
	) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'lovetype_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif; // lovetype_setup
add_action( 'after_setup_theme', 'lovetype_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function lovetype_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer 1', 'lovetype' ),
		'id'            => 'footer-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h4 class="widget-title clearfix">',
		'after_title'   => '</h4>',
	) );
	register_sidebar( array(
		'name'          => __( 'Footer 2', 'lovetype' ),
		'id'            => 'footer-2',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h4 class="widget-title clearfix">',
		'after_title'   => '</h4>',
	) );
		register_sidebar( array(
		'name'          => __( 'Footer 3', 'lovetype' ),
		'id'            => 'footer-3',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h4 class="widget-title clearfix">',
		'after_title'   => '</h4>',
	) );
		
}
add_action( 'widgets_init', 'lovetype_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function lovetype_scripts() {
	
	  wp_enqueue_style('bootstrap', get_template_directory_uri() .
        '/inc/css/bootstrap.min.css');
    wp_enqueue_style('bootstrap-theme', get_template_directory_uri() .
        '/inc/css/bootstrap-theme.min.css');
    wp_enqueue_style('font-awesome', get_template_directory_uri() .
        '/inc/css/font-awesome.min.css');
        wp_enqueue_style('font-awesome', get_template_directory_uri() .
        '/inc/css/base.css');
    wp_enqueue_script('jquery');
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() .
        '/inc/js/bootstrap.min.js');
	wp_enqueue_style( 'lovetype-style', get_stylesheet_uri() );

	wp_enqueue_script( 'lovetype-skip-link-focus-fix', get_template_directory_uri() . '/inc/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'lovetype_scripts' );

function lovetype_comments ($comment, $args, $depth)
{
    $GLOBALS['comment'] = $comment; ?>
<li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
    <div id="comment-<?php comment_ID(); ?>" style="position:relative;">
        <div class="comment-author vcard">
            <?php echo get_avatar($comment->comment_author_email, 80); ?>
            <?php printf(__('<span class="fn">By %s</span>', 'lovetype'), get_comment_author_link()) ?>
        </div>
        <div class="comment_text_area">
            <?php if ( $comment->comment_approved == '0' ) : ?>
                <em><?php _e('Your comment is awaiting moderation.', 'lovetype') ?></em>
                <br />
            <?php endif; ?>
            <div class="comment-meta">
                <?php edit_comment_link(__('(Edit)', 'lovetype'), '  ', '') ?>
            </div>
            <div class="commentmetadata">
                <?php comment_text() ?>
            </div>
            <p class="reply">
                <time>
                    Said on <?php comment_date(); ?></time> <?php
                comment_reply_link(array_merge($args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
            </p>
        </div>
    </div>
    </li><?php
}
?>
