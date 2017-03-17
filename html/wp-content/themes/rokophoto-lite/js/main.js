// Hello.
//
// This is The Scripts used for Awesome Photography/Portfolio Template
//
//

function main() {

(function () {
   'use strict';

   //Page Loader
        //<![CDATA[
      jQuery(window).load(function() { // makes sure the whole site is loaded
        jQuery('#status').fadeOut(); // will first fade out the loading animation
        jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        jQuery('body').delay(350).css({'overflow':'visible'});
      });
      //]]>
      
   // Contact form toggle hide/show
	jQuery(document).ready(function(){
      jQuery("#show").click(function(){
        jQuery("#contact").slideToggle("slow,swing");
      });
    });

    // Wow animation
      new WOW().init();

    // Header/Vision carousel slider
      jQuery('.carousel').carousel({
        interval: 3000
      });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
      jQuery(function() {
        jQuery('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          jQuery('html, body').stop().animate({
            scrollTop: jQuery($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
          event.preventDefault();
        });
      });

    // Highlight the top nav as scrolling occurs
      jQuery('body').scrollspy({
          target: '.navbar-fixed-top'
      });

    // Closes the Responsive Menu on Menu Item Click
      jQuery('.navbar-collapse ul li a').click(function() {
          jQuery('.navbar-toggle:visible').click();
      });

}());

}
main();