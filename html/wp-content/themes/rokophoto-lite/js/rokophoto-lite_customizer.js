jQuery(document).ready(function() {
	
	jQuery('.wp-full-overlay-sidebar-content').prepend('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://wordpress.org/support/view/theme-reviews/rokophoto-lite" class="button" target="_blank">{review}</a>'.replace('{review}',objectL10n.review));
	
	jQuery('.wp-full-overlay-sidebar-content').prepend('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://themeisle.com/rokophoto-lite-documentation/" class="button" target="_blank">{documentation}</a>'.replace('{documentation}',objectL10n.documentation));
	
	jQuery('.wp-full-overlay-sidebar-content').prepend('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://themeisle.com/themes/rokophoto/" class="button" target="_blank">{pro}</a>'.replace('{pro}',objectL10n.pro));
	
});