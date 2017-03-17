=== Plugin Name ===
Tags: syntax highlight, syntax, highlight, formatting, code, syntax highlighting, code formatting, syntax formatting, geshi
Donate link: http://www.fractalizer.ru
Requires at least: 2.8
Tested up to: 4.4.1
Stable tag: 2.4.3

Plugin provides syntax highlighting for about 116 programming languages via Geshi.

== Description ==

Plugin provides syntax highlighting in posts and comments.

* **Full GUI** mode. No need to switch to code mode and back like in some other plugins
* **GUI editor** with **realtime** syntax highligting support integrated (can be disable in settings)
* **GUI button** to help with highlighting options. No need to memorize them!
* Blog-wide default settings for code highlighting. Now you can change the look of all your posts at once!
* Many options to customize code highlighting (almost full Geshi set)

If you like this plugin, you can make a donation with WebMoney (R704473788938, R704473788938), Yandex.Money (41001122895969), MoneyBookers (FractalizeR@yandex.ru)



== Usage ==
Just select all your source code in the editor and use editor button (preferred method) or surround your code directly in WYSIWYG editor with a [codesyntax] [/codesyntax] tag like this

[codesyntax lang="php"]

`<?php 
//Replacing tags
$find [] = '/<br\s*\\?>/i';
$replace [] = "\r\n";
$content = preg_replace($find, $replace, $content);
?>`

[/codesyntax]

[filesyntax filename="test.phps" lang="php"]

The tag in the last example should be enabled in settings. See it's description below also.

and you will get wonderful geshi formatting. Format all your source code with Preformatted style to preserve spaces.

If you need to change settings of already formatted block - select it all and press GUI editor button again. Plugin will recognize all settings you used.

Plugin recognizes several popular geshi options to render highlighting:



**filename**

The relative filename of the file inside a folder, allowed for [filesyntax] tag to take the source for highlighting from. Works only in [filesyntax] tag

**lang**

The programming language you want to be your source highlighted in. [codesyntax lang="java"]My java code goes here...[/codesyntax]
The name of the language should match the name of the highlighter file. For the list of all supported highlighters please look at /wp-content/plugins/wp-synhighlighter/geshi/geshi directory of your WordPress installation after installing this plugin. A list of currently support languages:

abap, actionscript, actionscript3, ada, apache, applescript, `apt_sources`, asm, asp, autoit, avisynth, bash, basic4gl, blitzbasic, bnf, boo, c, caddcl, cadlisp, cfdg, cfm, cil, cobol, cpp-qt, cpp, csharp, css, `c_mac`, d, delphi, diff, div, dos, dot, eiffel, email, fortran, freebasic, genero, gettext, glsl, gml, gnuplot, groovy, haskell, html4strict, idl, ini, inno, io, java, java5, javascript, kixtart, klonec, klonecpp, latex, lisp, list.txt, lotusformulas, lotusscript, lua, m68k, make, matlab, mirc, mpasm, mxml, mysql, nsis, objc, ocaml-brief, ocaml, oobas, oracle11, oracle8, pascal, per, perl, php-brief, php, pic16, plsql, povray, powershell, progress, prolog, python, qbasic, rails, reg, robots, ruby, sas, scala, scheme, scilab, sdlbasic, smalltalk, smarty, sql, tcl, teraterm, text, thinbasic, tsql, typoscript, vb, vbnet, verilog, vhdl, visualfoxpro, winbatch, xml, xorg_conf, xpp, z80
 


**lines**

Do you want line numbers to be visible? Possible parameter values are:

* *no* - no line numbers. [codesyntax lang="java" lines="no"]My java code[/codesyntax]
* *normal* = normal line numbering
* *fancy* - fancy line numbering
This parameter defaults to fancy



**lines_start**

You can provide this parameter if you want your line numbering to start with a custom value. [codesyntax lang="java" lines="fancy" lines_start="1000"]My java code[/codesyntax]. Please don't forget to enclose a value into quotes exactly like in example
By default numbering starts with 1.



**container**

You can select container, that your code will be wrapped in

* *pre*
* *div*
* *pre_valid*
* *pre_table*
* *none*

By default pre is used. [codesyntax lang="java" container="pre"]My java code[/codesyntax]
More information can be found in [Geshi documentation](http://qbnz.com/highlighter/geshi-doc.html#the-code-container)


**capitalize**

Do you wish your keywords to be automatically capitalized or decapitalized?

* *no* - don't change anything
* *upper* - convert all keywords into uppercase
* *lower* - convert all keywords into lowercase
By default no change is assumed
[codesyntax lang="java" capitalize="upper" lines_start="1000"]



**tab_width**

If you want to change tab width, use this parameter: [codesyntax lang="java" tab_width="10"]

**strict**

This setting enables or disables strict mode for formatting complex pieces of data. Please see [Geshi documentation](http://qbnz.com/highlighter/geshi-doc.html#using-strict-mode) to find out more on the subject

**title (new in 0.91)**

This attribute sets the header of the collapsable code block ("Code" by default)

**bookmarkname (new in 0.91)**

The name of bookmark (Named anchor tag `<a name="bookmarkname" />`) you want to refer to this codeblock. By default it is
`codesyntaxX`, where X is 1 for first code block on the page, 2 for second etc. You can refer to your codeblocks using hyperlinks
`< a href="#codesyntax5">Link to fifth code block on the page</a>` or, if you used 
`[codesyntax bookmarkname="fifthcode"] lang="php"` bbcode, you can then refer to this codeblock as  
`< a href="#fifthcode">Link to fifth code block on the page</a>`

**blockstate (new in 0.97)**
Sets initial code block state when the page is shown to user. It can be default, expanded or collapsed. Default corresponds to expanded currently.

**highlight_lines (new in 1.1)**
Provides a comma-separated list of lines, that should be specially highlighted in the code

**doclinks (new in 2.3)**
Enables or disables generation of documentation links for keywords

== Installation ==

This section describes how to install the plugin and get it working.

1. Unpack plugin archive into `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

The below actions are not needed after installation. Just some customization.

1. You can update Geshi if you like by downloading a new version from it's site and overwritting files in geshi folder of plugin. Geshi is untouched by me ;)
1. You can customize collapsable code block by changing `wp-synhighlighter.css` file in the plugin folder
1. You can change the template of the collapsable code block by editing `template.php` file



== Frequently Asked Questions ==

= Where do I send suggestions on improving the plugin? =

I am glad to accept offers or code patches for the plugin by email: [FractalizeR@yandex.ru](mailto:FractalizeR@yandex.ru)

= Why PHP scripts are not highlighted with your plugin? =

Please start PHP code you want to highlight from PHP tag <?php and it will be highlighted just fine.

= Line spacing is crippled? =

If you write code in the editor, make newlines with Ctrl-Enter, not just enter. If you paste it - format it using an editor buttor or at least ensure you formatted all source using Preformatted style

= Why embedding styles option is marked as "breaking" and "slow"? =

* Publishing <STYLE> tag outisde <HEAD> tag is breaking HTML validity
* Every time browser encounters <STYLE> tag, it needs to rerender the whole page, because some styles could be redefined


== Screenshots ==

1. GUI Mode Editor button 
1. When you press button, you see code formatting settings 
1. and you can edit code in-place with realtime syntax highlighting 
1. The result of pasting code in GUI Mode Editor button 

== Changelog ==
= 2.4 (07.01.2015) =
* Tested with Wordpress 4.4.1

= 2.3.1 (22.02.2014) =
* Tested with Wordpress 3.8.1

= 2.3 (11.02.2011) =
* Added [filesytax] tag, that allows to insert into post files, highlighted from filesystem. Related security settings are added to options. The use of this tag should be enabled in options too.
* Due to security settings added to options, only blog admin is now allowed to change them
* Added doclinks_off settings option which enables you to control the generation of documentation URLs for keywords by default
* Added doclinks option to [codesyntax] and [filesyntax] tags to control the generation of documentation URLs per each source piece
* Several bugfixes
* User satisfactory texts are now displayed after some time of using plugin in settings
* Bugfix: comments are now highlighted correctly even when using external CSS styles for highlighting

= 2.2.7 (28.09.2010) =
* Critical bug fix (not all blogs affected though): slashes in theme folder name do not duplicate now

= 2.2.6 (24.09.2010) =
* wp-content is now movable/renameable. Just don't forget to change theme path in WP-SynHighlight options if even you left it on defaults. For more details on the operation see [Codex](http://codex.wordpress.org/Editing_wp-config.php#Moving_wp-content)

= 2.2.5 (22.09.2010) =
* GUI Mode editor javascript bug fixed
* Comments display fixed, <code> tag eliminated. Will see, how it will go

= 2.2.4 (12.07.2010) =
* HTML validation bug fixed. Thanks to whallify for reporting and providing a fix

= 2.2.3 (06.07.2010) =
* Minor plugin activation bug fixed. Thanks to Aziz Light for reporting.

= 2.2.2 (03.05.2010) =
* Theme path fixes (when is set to be different from default). Thanks to chandima for reporting
* `<code>` tags in comments eliminated. Thanks to Navarr for reporting
* Unicode symbols conversion bug fixed completely. Thanks to simplylinux.ch for reporting

= 2.2.1 (26.01.2010) =
* Theme path showed as unsaved in options. Now fixed thanks to Willington Vega for patch.

= 2.2 (12.01.2010) =
* Added option to set code block height in pixels. See plugin options.

= 2.1.1 (10.01.2010) =
* Small bug fixed with default CSS styling. It is set to old behaviour and can now be changed from options. External CSS option is preferred.
* Windows Live Writer compatibility introduced (it corrupts shortcodes a little sometimes)
* Localization updated to include some missing phrases

= 2.1 (10.01.2010) =

* An option added to output highlighting using CSS styles. See plugin options to control behaviour. Thanks to Artem Russakovskii for the concept and the idea.
* Warning added to remind users to start PHP code from <?php tag to highlight properly
* Minor options bug fixed

= 2.0 (05.01.2010) =

* SuperGUI mode added. Now you can edit your source code and have a realtime code syntax highlighting.
* Now editor button supports detecting of existing shortcodes in text
* highlight_lines option empty behavior fixed
* GUI mode visualization of shortcode changed to full-pre for better display

= 1.1 =

* Added a possibility to select default code options on settings page. For example, you may set, that all code blocks on all pages should be collapsed by default
* Added highlight_lines parameter which you can set to a comma-delimited list of line numbers, that you need to be specially highlighted in the code block
* English localization fixed. 
* Fixed box buttons border style if it is defined in CSS by your theme
* Added plugin settings link to the plugin description in the plugin list
* Russian localization added

= 1.0.2 =

* Geshi syntax highlighting for 1C language improved.

= 1.0.1 =

* Box buttons border removed to comply with some styles.

= 1.0 =

* Code initial state option added, for instance, to make code block collapsed by default when the page is opened by user
* Code block folding animation added
* Theming is now supported. See themes directory for details. You can set current theme in plugin options.
* Code block corners are now look rounded at least in Firefox. Stupid IE...
* Print code button added
* Show code only button added
* Padding bug of <ol> block fixed when line numbers are shown
* Geshi updated to latest stable (1.0.8.4)
* 1C language syntax highlighting (primarily intended for russian users though). It is crippled, because Geshi doesn't work well with UTF-8 encoded keywords. But it is best I can do. Language code is c1.

= 0.965 =

* Localization corrected and now plugin is fully localizable. For now English and Russian languages added
* TinyMCE Files slightly rearranged
* Compatibility with other plugins using own Geshi libs added. Geshi is now loaded only if it wasn't loaded by some other plugin earlier.
* Russian localization fixed (button name is now displayed properly)
* Line height in CSS enforced to be 100% to avoid problems with some WP themes.

= 0.963 =

* Another Unicode three-dots symbol presentation fixed

= 0.962 =

* Another Unicode double-dashes symbol presentation fixed

= 0.961 =

* Another Unicode quote-like symbol presentation fixed

= 0.96 =

* Editor button UI added for convinient selecting all codesyntax tag options
* Code is now correctly trimmed preventing nasty newlines from appearing
* Bug fixed with non-latin code titles

= 0.94 =

* css stylesheet problem with incorrect displaying short code fragments fixed. Thanks to Warun Kietduriyakul for reporting a bug.
* inove theme css stylesheet problem fixed. Thanks to Warun Kietduriyakul for reporting a bug.

= 0.93 =

* css stylesheet path problem fixed. Thanks to Warun Kietduriyakul for reporting a bug.

= 0.92 =

* Editor button for GUI mode fixed at last and is working ok now. I am sorry for this bug.


= 0.9 =

* Editor button for GUI mode
* Syntax highlighting in comments
* Collapsable code area with customizable css
* New options for bbcode: title and bookmarkname

== Upgrade Notice ==
* No need to care about upgrade so far ;) Just overwrite old files with new ones or use WordPress plugin autoupgrade feature 