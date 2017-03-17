<?php
function wp_synhighlighter_i18n_setup()
{
  static $i18n_is_setup = false;

   if($i18n_is_setup) {
      return;
   } 

   load_plugin_textdomain('wp-synhighlighter');
   $i18n_is_setup = true;
}

?>