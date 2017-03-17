/**
 * Function for trimming strings
 * 
 * @param str
 *            String String to trim
 * @return String Trimmed string
 * 
 */
function trim(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

/**
 * Function returns text value of a form select tag
 * 
 * @param elName
 *            String Name of the form element
 * @return String value of the form select tag
 */
function getSelectValue(elName) {
	var elm = document.forms['codesyntax_form'].elements[elName];
	if (!elm || elm.options == null || elm.selectedIndex == -1)         
		return "";                                                  
                                                                     
	return elm.options[elm.selectedIndex].value;                        
}

/**
 * Function sets the value of the select form element to the given option value
 * 
 * @param elName
 *            String Name of the form element
 * @param value
 *            String Value to set
 */
function setSelectValue(elName, value) {
	var elm = document.forms['codesyntax_form'].elements[elName];
	for(i in elm.options) {
		if(elm.options[i] == value) {
			elm.selectedIndex = i;
		}
	}
}

/**
 * Function returns the value of the text form field
 * 
 * @param elName
 *            String Name of the form element
 */
function getTextValue(elName) {
	var elm = document.forms['codesyntax_form'].elements[elName];
	if (!elm || elm.value == null)
		return "";                                                  
                                                                     
	return elm.value;
}

/**
 * Function sets value of the text form field
 * 
 * @param elName
 *            String Name of the form element
 * @param value
 *            String Value to set
 */
function setTextValue(elName, value) {
	var elm = document.forms['codesyntax_form'].elements[elName];
	elm.value = value;
}

// getOptionFromText(elName)
function getOptionFromText(elName) {
	if(trim(getTextValue(elName)) != '') {
		return (" " + elName + '="' + getTextValue(elName) + '"');
	} else {
		return "";
	}

}

// getOptionFromSelect(elName)
function getOptionFromSelect(elName) {
	if(getSelectValue(elName) != 'default') {
		return (" " + elName + '="' + getSelectValue(elName) + '"');
	} else {
		return "";
	}
}

function setInitialValuesForOptions() {
	// Parsing initial values for options
	var sh_shortcode_text = tinyMCEPopup.editor.selection.getContent({format : 'text'});
	
	if(trim(sh_shortcode_text).length < 24) {
		// Setting selected text as a sourcecode and exitting
		setTextValue('sourcecode', sh_shortcode_text);
		return;
	}
	
	// Parsing shortcode data
	// var sh_shortcode_regexp =
	// /(.?)\[(codesyntax)\b(.*?)(?:(\/))?\](?:(.+?)\[\/\2\])?(.?)/s;
	var sh_shortcode_regexp = /([\s\S]?)\[(codesyntax)\b([\s\S]*?)(?:(\/))?\](?:([\s\S]+?)\[\/\2\])?([\s\S]?)/;
	var sh_shortcode_parse_result = sh_shortcode_regexp.exec(sh_shortcode_text);
	if((sh_shortcode_parse_result === null) || (sh_shortcode_parse_result.length < 5)) {
		// Setting selected text as a sourcecode and exitting
		setTextValue('sourcecode', sh_shortcode_text);
		return;
	}
	
	var sh_options_string = sh_shortcode_parse_result[3];
	var sh_shortcode_inner_text = trim(sh_shortcode_parse_result[5]);
	
	var sh_shortcodeoptions_regexp = /(\w+)\s*=\s*"([^"]*)"(?:\s|$)|(\w+)\s*=\s*\'([^\']*)\'(?:\s|$)|(\w+)\s*=\s*([^\s\'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|(\S+)(?:\s|$)/g;
	var sh_form_elements = document.forms['codesyntax_form'].elements;
	while((sh_options_result = sh_shortcodeoptions_regexp.exec(sh_options_string)) != null) {
		switch(sh_form_elements[sh_options_result[1]].type) {
		case 'select-one':
			setSelectValue(sh_options_result[1], sh_options_result[2]);
		case 'text':
			setTextValue(sh_options_result[1], sh_options_result[2]);
		}
	}
	setTextValue('sourcecode', sh_shortcode_inner_text);
}

function htmlspecialchars(text)
{
   var chars = Array("&", "<", ">", '"', "'");
   var replacements = Array("&amp;", "&lt;", "&gt;", "&quot;", "'");
   for (var i=0; i<chars.length; i++)
   {
       var re = new RegExp(chars[i], "gi");
       if(re.test(text))
       {
           text = text.replace(re, replacements[i]);
       }
   }
   return text;
}


// Loading language pack
tinyMCEPopup.requireLangPack();

// Initializing editor
tinyMCEPopup.onInit.add(setInitialValuesForOptions);












