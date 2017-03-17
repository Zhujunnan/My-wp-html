<?php
define('WP_USE_THEMES', false);
require ('../../../../wp-blog-header.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type"
	content="text/html; charset=windows-1251" />
<title>{#WPSynHighlight_dlg.WindowTitle}</title>
<script src="../../../../wp-includes/js/media.js?ver=327-1235"
	type="text/javascript"> </script>
<script type="text/javascript"
	src="../../../../wp-includes/js/tinymce/tiny_mce_popup.js"></script>
<script type="text/javascript"
	src="../../../../wp-includes/js/tinymce/utils/mctabs.js?ver=3241-1141"></script>
<script type="text/javascript"
	src="../../../../wp-includes/js/tinymce/utils/form_utils.js?ver=3241-1141"></script>
<script type="text/javascript"
	src="../../../../wp-includes/js/tinymce/utils/validate.js?ver=3241-1141"></script>
<script type="text/javascript" src="js/panel.js"></script>
<link type="text/css" rel="stylesheet" href="css/media.css?ver=327-1235" />
<?php
if (! get_option('wp_synhighlight_disable_editarea')) :
	?>
<script language="Javascript" type="text/javascript"
	src="../edit_area/edit_area_full_with_plugins.js"></script>

<?php endif;
?>
<script language="javascript">

function displayCodeTab() {
	<?php
	if (! get_option('wp_synhighlight_disable_editarea')) :
		?>
	if(editAreas.sourcecode)
		editAreaLoader.delete_instance('sourcecode');
	editAreaLoader.init({
		id: "sourcecode"	// id of the textarea to transform		
		,start_highlight: true	// if start with highlight
		,allow_resize: "both"
		,allow_toggle: true
		,word_wrap: true
		,toolbar: "search, go_to_line, |, undo, redo, |, select_font,|, change_smooth_selection, highlight, reset_highlight, word_wrap, |, help"
		,language: "<?php
		$lang = substr(WPLANG, 0, 2);
		if (in_array($lang, 
				array('bg', 'cs', 'de', 'dk', 'en', 'eo', 'es', 'fi', 'fr', 'hr', 'it', 'ja', 
						'mk', 'nl', 'pl', 'pt', 'ru', 'sk', 'zh'))) {
			echo $lang;
		} else {
			echo "en";
		}
		?>"
		,syntax: getSelectValue('lang')
	});
	
	<?php endif;
	?>
	mcTabs.displayTab('code_tab','code_panel');		
}

function resizeTextArea() {
	<?php
	if (! get_option('wp_synhighlight_disable_editarea')) :
		?>
	if(editAreas.sourcecode)
		editAreaLoader.delete_instance('sourcecode');
	
	<?php endif;
	?>
			
	var vp = tinyMCEPopup.dom.getViewPort(window), el;
	el = document.getElementById('sourcecode');
	el.style.width = (vp.w - 40) + 'px';
	el.style.height = (vp.h - 110) + 'px';

	el = document.getElementById('code_panel');
	el.style.width = (vp.w - 30) + 'px';
	el.style.height = (vp.h - 90) + 'px';
	<?php
	if (! get_option('wp_synhighlight_disable_editarea')) :
		?>
			editAreaLoader.init({
				id: "sourcecode"	// id of the textarea to transform		
				,start_highlight: true	// if start with highlight
				,allow_resize: "both"
				,allow_toggle: true
				,word_wrap: true
				,language: "<?php
		echo substr('en', 0, 2);
		?>"
				,syntax: getSelectValue('lang')
			});			
	
	
	<?php endif;
	?>
			
}

function insertShortCode() {
	var ed = tinyMCEPopup.editor;
	var optionsString = "";
	// Iterating options
	optionsString += getOptionFromSelect('lang');
	optionsString += getOptionFromSelect('lines');
	optionsString += getOptionFromText('lines_start');
	optionsString += getOptionFromSelect('container');
	optionsString += getOptionFromSelect('capitalize');
	optionsString += getOptionFromText('tab_width');
	optionsString += getOptionFromSelect('strict');
	optionsString += getOptionFromText('title');
	optionsString += getOptionFromText('bookmarkname');
	optionsString += getOptionFromSelect('blockstate');
	optionsString += getOptionFromText('highlight_lines');
	optionsString += getOptionFromSelect('doclinks');
	<?php
	if (! get_option('wp_synhighlight_disable_editarea')) :
		?>
		var sh_sourcecode = htmlspecialchars(editAreaLoader.getValue('sourcecode'));
		
	<?php else :
		?>
		var sh_sourcecode = getTextValue('sourcecode');
	
	<?php
	endif;
	?>	
	ed.selection.setContent('[codesyntax' + optionsString + ']<pre>' + sh_sourcecode + '</pre>[/codesyntax]');
	tinyMCEPopup.close();
}
tinyMCEPopup.onInit.add(resizeTextArea);
</script>
</head>
<body onresize="return resizeTextArea()">
<form id="codesyntax_form" name="codesyntax_form">
<div class="tabs">
<ul>
	<li id="options_tab" class="current"><span><a
		href="javascript:mcTabs.displayTab('options_tab','options_panel');"
		onmousedown="return false;">{#WPSynHighlight_dlg.Settings}</a></span></li>
	<li id="code_tab"><span><a href="javascript:displayCodeTab();"
		onmousedown="return false;">{#WPSynHighlight_dlg.Code}</a></span></li>
</ul>
</div>
<div class="panel_wrapper">
<div id="options_panel" class="panel current" style="height: auto">
<table border="0">
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.Language}:</th>
		<td width="3">&nbsp;</td>
		<td><select name="lang" id="lang">
			<option value="abap">abap</option>
			<option value="actionscript">actionscript</option>
			<option value="actionscript3">actionscript3</option>
			<option value="ada">ada</option>
			<option value="apache">apache</option>
			<option value="applescript">applescript</option>
			<option value="apt_sources">apt_sources</option>
			<option value="asm">asm</option>
			<option value="asp">asp</option>
			<option value="autoit">autoit</option>
			<option value="avisynth">avisynth</option>
			<option value="bash">bash</option>
			<option value="basic4gl">basic4gl</option>
			<option value="blitzbasic">blitzbasic</option>
			<option value="bnf">bnf</option>
			<option value="boo">boo</option>
			<option value="c">c</option>
			<option value="c1">c1</option>
			<option value="caddcl">caddcl</option>
			<option value="cadlisp">cadlisp</option>
			<option value="cfdg">cfdg</option>
			<option value="cfm">cfm</option>
			<option value="cil">cil</option>
			<option value="cobol">cobol</option>
			<option value="cpp-qt">cpp-qt</option>
			<option value="cpp">cpp</option>
			<option value="csharp">csharp</option>
			<option value="css">css</option>
			<option value="c_mac">c_mac</option>
			<option value="d">d</option>
			<option value="delphi">delphi</option>
			<option value="diff">diff</option>
			<option value="div">div</option>
			<option value="dos">dos</option>
			<option value="dot">dot</option>
			<option value="eiffel">eiffel</option>
			<option value="email">email</option>
			<option value="fortran">fortran</option>
			<option value="freebasic">freebasic</option>
			<option value="genero">genero</option>
			<option value="gettext">gettext</option>
			<option value="glsl">glsl</option>
			<option value="gml">gml</option>
			<option value="gnuplot">gnuplot</option>
			<option value="groovy">groovy</option>
			<option value="haskell">haskell</option>
			<option value="html4strict">html4strict</option>
			<option value="idl">idl</option>
			<option value="ini">ini</option>
			<option value="inno">inno</option>
			<option value="io">io</option>
			<option value="java">java</option>
			<option value="java5">java5</option>
			<option value="javascript">javascript</option>
			<option value="kixtart">kixtart</option>
			<option value="klonec">klonec</option>
			<option value="klonecpp">klonecpp</option>
			<option value="latex">latex</option>
			<option value="lisp">lisp</option>
			<option value="list.txt">list.txt</option>
			<option value="lotusformulas">lotusformulas</option>
			<option value="lotusscript">lotusscript</option>
			<option value="lua">lua</option>
			<option value="m68k">m68k</option>
			<option value="make">make</option>
			<option value="matlab">matlab</option>
			<option value="mirc">mirc</option>
			<option value="mpasm">mpasm</option>
			<option value="mxml">mxml</option>
			<option value="mysql">mysql</option>
			<option value="nsis">nsis</option>
			<option value="objc">objc</option>
			<option value="ocaml-brief">ocaml-brief</option>
			<option value="ocaml">ocaml</option>
			<option value="oobas">oobas</option>
			<option value="oracle11">oracle11</option>
			<option value="oracle8">oracle8</option>
			<option value="pascal">pascal</option>
			<option value="per">per</option>
			<option value="perl">perl</option>
			<option value="php-brief">php-brief</option>
			<option value="php" selected="selected">php</option>
			<option value="pic16">pic16</option>
			<option value="plsql">plsql</option>
			<option value="povray">povray</option>
			<option value="powershell">powershell</option>
			<option value="progress">progress</option>
			<option value="prolog">prolog</option>
			<option value="python">python</option>
			<option value="qbasic">qbasic</option>
			<option value="rails">rails</option>
			<option value="reg">reg</option>
			<option value="robots">robots</option>
			<option value="ruby">ruby</option>
			<option value="sas">sas</option>
			<option value="scala">scala</option>
			<option value="scheme">scheme</option>
			<option value="scilab">scilab</option>
			<option value="sdlbasic">sdlbasic</option>
			<option value="smalltalk">smalltalk</option>
			<option value="smarty">smarty</option>
			<option value="sql">sql</option>
			<option value="tcl">tcl</option>
			<option value="teraterm">teraterm</option>
			<option value="text">text</option>
			<option value="thinbasic">thinbasic</option>
			<option value="tsql">tsql</option>
			<option value="typoscript">typoscript</option>
			<option value="vb">vb</option>
			<option value="vbnet">vbnet</option>
			<option value="verilog">verilog</option>
			<option value="vhdl">vhdl</option>
			<option value="visualfoxpro">visualfoxpro</option>
			<option value="winbatch">winbatch</option>
			<option value="xml">xml</option>
			<option value="xorg_conf">xorg_conf</option>
			<option value="xpp">xpp</option>
			<option value="z80">z80</option>
		</select></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.LineNumbers}:</th>
		<td width="3">&nbsp;</td>
		<td><select name="lines" id="lines">
			<option value="default">{#WPSynHighlight_dlg.LineNumbersDefault}</option>
			<option value="no">{#WPSynHighlight_dlg.LineNumbersNo}</option>
			<option value="normal">{#WPSynHighlight_dlg.LineNumbersNormal}</option>
			<option value="fancy">{#WPSynHighlight_dlg.LineNumbersFancy}</option>
		</select></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.LineNumbersStartWith}:</th>
		<td width="3">&nbsp;</td>
		<td><input name="lines_start" type="text" id="lines_start" size="10" /></td>
	</tr>
	<tr>
		<th align="right" scope="row">
		<p>{#WPSynHighlight_dlg.Container}:</p>
		</th>
		<td width="3">&nbsp;</td>
		<td><select name="container" id="container">
			<option value="default">{#WPSynHighlight_dlg.ContainerDefault}</option>
			<option value="none">{#WPSynHighlight_dlg.ContainerNone}</option>
			<option value="div">{#WPSynHighlight_dlg.ContainerDiv}</option>
			<option value="pre">{#WPSynHighlight_dlg.ContainerPre}</option>
			<option value="pre_valid">{#WPSynHighlight_dlg.ContainerPre_valid}</option>
			<option value="pre_table">{#WPSynHighlight_dlg.ContainerPre_table}</option>
		</select></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.CapitalizeKeywords}:</th>
		<td width="3">&nbsp;</td>
		<td><select name="capitalize" id="capitalize">
			<option value="default">{#WPSynHighlight_dlg.CapitalizeKeywordsDefault}</option>
			<option value="no">{#WPSynHighlight_dlg.CapitalizeKeywordsNo}</option>
			<option value="upper">{#WPSynHighlight_dlg.CapitalizeKeywordsUppercase}</option>
			<option value="lower">{#WPSynHighlight_dlg.CapitalizeKeywordsLowercase}</option>
		</select></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.TabWidth}:</th>
		<td width="3">&nbsp;</td>
		<td><input name="tab_width" type="text" id="tab_width" size="10" /></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.StrictMode}:</th>
		<td width="3">&nbsp;</td>
		<td><select name="strict" id="strict">
			<option value="default">{#WPSynHighlight_dlg.StrictModeDefault}</option>
			<option value="no">{#WPSynHighlight_dlg.StrictModeNo}</option>
			<option value="yes">{#WPSynHighlight_dlg.StrictModeYes}</option>
		</select></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.Title}:</th>
		<td width="3">&nbsp;</td>
		<td><input name="title" type="text" id="title" size="50" /></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.BookmarkName}:</th>
		<td width="3">&nbsp;</td>
		<td><input name="bookmarkname" type="text" id="bookmarkname" size="50" /></td>
	</tr>
	<tr>
		<th align="left" scope="row">&nbsp;</th>
		<td width="3">&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.InitialBlockState}:</th>
		<td width="3">&nbsp;</td>
		<td><select name="blockstate" id="blockstate">
			<option value="default">{#WPSynHighlight_dlg.InitialBlockStateDefault}</option>
			<option value="expanded">{#WPSynHighlight_dlg.InitialBlockStateExpanded}</option>
			<option value="collapsed">{#WPSynHighlight_dlg.InitialBlockStateCollapsed}</option>
		</select></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.HighlightLines}:</th>
		<td width="3">&nbsp;</td>
		<td><input name="highlight_lines" type="text" id="highlight_lines"
			size="50" /></td>
	</tr>
	<tr>
		<th align="right" scope="row">{#WPSynHighlight_dlg.DocLinks}:</th>
		<td width="3">&nbsp;</td>
		<td><select name="doclinks" id="doclinks">
			<option value="default">{#WPSynHighlight_dlg.DocLinksDefault}</option>
			<option value="1">{#WPSynHighlight_dlg.DocLinksOn}</option>
			<option value="0">{#WPSynHighlight_dlg.DocLinksOff}</option>
		</select></td>
	</tr>
	<tr>
		<td colspan="3" align="center">&nbsp;</td>
	</tr>
	<tr>
		<td colspan="3" align="center">{#WPSynHighlight_dlg.PHPNote}</td>
	</tr>
</table>
</div>
<div id="code_panel" class="panel"><textarea name="sourcecode"
	id="sourcecode"> Enter code here</textarea></div>
</div>
<p>
<div style="float: left;"><input type="button" id="insert"
	value="{#WPSynHighlight_dlg.Insert}" onclick="insertShortCode()"
	style="width: 120" /></div>
<div style="float: right;"><input type="button" id="cancel"
	value="{#WPSynHighlight_dlg.Cancel}" onclick="tinyMCEPopup.close();"
	style="width: 120" /></div>
</p>
</form>
</body>
</html>
