<?php
require_once ("geshi.php");
$iterator = new DirectoryIterator(dirname(__FILE__) . '/geshi');

foreach ($iterator as $fileObj) {
	if ($fileObj->isDot() or $fileObj->isDir()) {
		continue;
	}
	$geshi = new GeSHi("", $fileObj->getBasename(".php"));
	file_put_contents(
			dirname(__FILE__) . '/../themes/default/geshi/' . $fileObj->getBasename(".php") . '.css', 
			$geshi->get_stylesheet(false));
}