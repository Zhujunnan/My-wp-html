<?php
/*
 * Geshi language definition file to Edit Area language definition file conversion script
 * @author Vladislav "FractalizeR" Rastrusny
 * @license  http://www.gnu.org/licenses/gpl.html  GNU General Public License
 */

$iterator = new DirectoryIterator(dirname(__FILE__).'/geshi');


foreach ($iterator as $fileObj) {
	
	if ($fileObj->isFile() and ($fileObj->getPathname() != __FILE__)) {
		file_put_contents(dirname(__FILE__) . '/geshi/reg_syntax/' . $fileObj->getBasename('.php') . '.js', 
				convertFile($fileObj->getPathname()));
	}
	echo ("Processed {$fileObj->getBasename('.php')} \r\n");
}

function convertFile($fileName) {
	//Populate $language_data from file
	include_once ($fileName);
	$jsFile = '/* This syntax highlighting file is automagically generated from
	geshi language definition file by _fr_geshiLangToEditAreaLang.php generator.
	Copyright (c) 2009 by Vladislav "FractalizeR" Rastrusny.
	 */
	 
	';
	$filename = basename($fileName, ".php");
	
	//Writting header:
	$jsFile .= 'editAreaLoader.load_syntax["' . $filename . '"] = {' . "\r\n";
	
	//COMMENT_SINGLE
	$jsFile .= "    'COMMENT_SINGLE' : ";
	if (isset($language_data['COMMENT_SINGLE'])) {
		$jsFile .= '{' . phpArrayToJSNameValue($language_data['COMMENT_SINGLE']) . '}';
	}
	$jsFile .= ", \r\n";
	
	//COMMENT_MULTI
	$jsFile .= "    'COMMENT_MULTI' : ";
	if (isset($language_data['COMMENT_MULTI'])) {
		$jsFile .= '{' . phpArrayToJSNameValue($language_data['COMMENT_MULTI']) . '}';
	}
	$jsFile .= ", \r\n";
	
	//QUOTEMARKS
	$jsFile .= "    'QUOTEMARKS' : ";
	if (isset($language_data['QUOTEMARKS'])) {
		$jsFile .= '{' . phpArrayToJSNameValue($language_data['QUOTEMARKS']) . '}';
	}
	$jsFile .= ", \r\n";
	
	//KEYWORDS
	$jsFile .= "    'KEYWORDS' : {\r\n";
	$parts = array();
	foreach ($language_data['KEYWORDS'] as $keywordGroupKey => $keywordGroupValue) {
		$parts[] .= "        'keywordgroup" . $keywordGroupKey . "': [" . phpArrayToJSList(
				$language_data['KEYWORDS'][$keywordGroupKey]) . "]";
	}
	$jsFile .= implode(",\r\n", $parts) . "\r\n}, \r\n";
	
	//OPERATORS
	$jsFile .= "    'OPERATORS' : ";
	if (isset($language_data['SYMBOLS'])) {
		$jsFile .= "[" . phpArrayToJSList($language_data['SYMBOLS'], 
				array('(', ')', '[', ']', '{', '}')) . "]";
	}
	$jsFile .= ", \r\n";
	
	//SYMBOLS
	$jsFile .= "    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], \r\n";
	
	//STYLES
	$jsFile .= "    'STYLES' : { \r\n";
	
	//STYLES - COMMENTS
	$jsFile .= "        'COMMENTS' : '" . processCSSStyle($language_data['STYLES']['COMMENTS'][1]) . "', \r\n";
	
	//STYLES - QUOTEMARKS
	$jsFile .= "        'QUOTESMARKS' : '" . processCSSStyle($language_data['STYLES']['STRINGS'][0]) . "', \r\n";
	
	//STYLES - KEYWORDS
	$parts = array();
	$jsFile .= "        'KEYWORDS' : { \r\n";
	foreach ($language_data['STYLES']['KEYWORDS'] as $keywordGroupKey => $keywordGroupValue) {
		$parts[] .= "        'keywordgroup" . $keywordGroupKey . "': '" . processCSSStyle($keywordGroupValue) . "'";
	}
	$jsFile .= implode(",\r\n", $parts) . "    }, \r\n";
	
	//STYLES - OPERATORS
	$jsFile .= "       'OPERATORS' : '" . processCSSStyle($language_data['STYLES']['SYMBOLS'][0]) . "', \r\n";
	//STYLES - DELIMITERS
	$jsFile .= "        'DELIMITERS' : '" . processCSSStyle($language_data['STYLES']['SYMBOLS'][0]) . "' \r\n";
	
	$jsFile .= "    } \r\n"; //STYLES
	$jsFile .= "}; \r\n"; //GLOBAL
	

	return $jsFile;
}

function phpArrayToJSNameValue($arr) {
	$parts = array();
	foreach ($arr as $key => $value) {
		$parts[] = (is_numeric($key) ? ($key) : ('"' . $key . '"')) . ': "' . addslashes($value) . '"';
	}
	return implode(', ', $parts);
}

function phpArrayToJSList($arr, array $exceptions = array()) {
	$parts = array();
	foreach ($arr as $value) {
		if (in_array($value, $exceptions))
			continue;
		$parts[] = '"' . addslashes($value) . '"';
	}
	return implode(', ', $parts);
}

function processCSSStyle($style) {
	$matches = array();
	preg_match('/color:.+?(?:;|$)/', $style, $matches);
	return $matches[0];
}