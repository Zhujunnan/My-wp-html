<?php
/*************************************************************************************
 * c1.php
 * ----------------
 * Author: Vladislav Rastrusny (FractalizeR@yandex.ru)
 * Copyright: (c) 2004 Vladislav Rastrusny, Nigel McNie (http://qbnz.com/highlighter)
 * Release Version: 1.0.8.4
 * Date Started: 20/11/2009
 *
 * 1C language file for GeSHi.
 *
 * -------------------------
 *
 *************************************************************************************
 *
 *     This file is part of GeSHi.
 *
 *   GeSHi is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *
 *   GeSHi is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with GeSHi; if not, write to the Free Software
 *   Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 *
 ************************************************************************************/

$language_data = array (
    'LANG_NAME' => 'ActionScript',
    'COMMENT_SINGLE' => array(1 => '//'),
    'COMMENT_MULTI' => array(),
    'CASE_KEYWORDS' => GESHI_CAPS_NO_CHANGE,
    'QUOTEMARKS' => array('"'),
    'ESCAPE_CHAR' => '\\',
	   'NUMBERS' =>
        GESHI_NUMBER_INT_BASIC | GESHI_NUMBER_FLT_SCI_ZERO,
    'KEYWORDS' => array(
		//Ключевые слова языка.
        1 => array('Если', 'If', 'Тогда', 'Then', 'ИначеЕсли', 'ElseIf', 'Иначе', 'Else', 
			'КонецЕсли', 'EndIf', 'Для', 'For', 'Каждого', 'Each', 'Из', 'In', 'По', 
			'To', 'Пока', 'While', 'Цикл', 'Do', 'КонецЦикла', 'EndDo', 'Процедура', 
			'Procedure', 'Функция', 'Function', 'КонецПроцедуры', 'EndProcedure', 
			'КонецФункции', 'EndFunction', 'Перем', 'Var', 'Перейти', 'Goto', 
			'Продолжить', 'Continue', 'Прервать', 'Break', 'Попытка', 'Try', 'Исключение', 'Except', 
			'ВызватьИсключение', 'Raise', 'КонецПопытки', 'EndTry', 'Новый', 'New', 'Выполнить', 'Execute', 'Возврат', 
			'Return', 'И', 'And', 'Или', 'Or', 'Не', 'Not', 'Ложь', 'False', 'Истина', 'True'),
		
        //Встроенные функции
		2 => array(
			'ВРег', 'КодСимвола', 'Лев', 'Найти', 'НРег', 'Прав',
			'ПустаяСтрока', 'Символ', 'СокрЛ', 'СокрП', 'СокрЛП',  
			'Сред', 'СтрДлина', 'СтрЗаменить',  'СтрПолучитьСтроку', 
			'СтрЧислоВхождений', 'СтрЧислоСтрок', 'Год', 'Year', 'День', 
			'Day', 'ДеньГода', 'DayOfYear', 'ДеньНедели', 'DayOfWeek', 
			'ДобавитьМесяц', 'AddMonth', 'КонецГода', 'EndOfYear', 'КонецДня',
			'EndOfDay', 'КонецКвартала', 'EndOfQuarter', 'КонецМесяца', 'EndOfMonth', 
			'КонецМинуты',  'EndOfMinute', 'КонецНедели', 'EndOfWeek', 'КонецЧаса', 
			'EndOfHour', 'Месяц', 'Month', 'Минута', 'Minute', 'НачалоГода', 'BegOfYear',
			'НачалоДня', 'BegOfDay', 'НачалоКвартала', 'BegOfQuarter', 'НачалоМесяца',
			'BegOfMonth', 'НачалоМинуты', 'BegOfMinute', 'НачалоНедели', 'BegOfWeek', 
			'НачалоЧаса', 'BegOfHour', 'НеделяГода', 'WeekOfYear', 'Секунда', 'Second', 'ТекущаяДата', 
			'CurrentDate', 'Час', 'Hour', 'Булево', 'Boolean', 'Дата', 'Date', 'Строка', 
			'String', 'Число', 'Number', 'Формат', 'Format', 'Вычислить', 'Eval', 'Макс', 'Max', 
			'Мин', 'Min', 'ОписаниеОшибки', 'ErrorDescription', 'Тип', 'Type', 'ТипЗнч', 'TypeOf',
			'Вопрос', 'DoQueryBox', 'ОбработкаПрерыванияПользователя', 'UserInterruptProcessing', 
			'Оповестить', 'Notify', 'ОткрытьЗначение', 'OpenValue', 'ОткрытьИндексСправки', 'OpenHelpIndex', 
			'ОткрытьСодержаниеСправки', 'OpenHelpContent', 'ОткрытьСправку', 'OpenHelp', 'ОчиститьСообщения', 'ClearMessages', 
			'Предупреждение', 'DoMessageBox', 'Сигнал', 'Beep', 'Сообщить', 'Message', 'Состояние', 'Status', 
			'ВвестиДату', 'InputDate', 'ВвестиЗначение', 'InputValue', 'ВвестиСтроку', 'ВвестиЧисло', 'InputNumber', 
			'НСтр', 'NStr', 'ПредставлениеПериода', 'PeriodPresentation', 'ЧислоПрописью', 'NumberInWords', 
			'ПолучитьОбщийМакет', 'GetCommonTemplate', 'ПолучитьОбщуюФорму', 'GetCommonForm', 
			'ЗаблокироватьРаботуПользователя', 'LockApplication', 'ЗавершитьРаботуСистемы', 'Exit', 
			'ИмяКомпьютера', 'ComputerName', 'ИмяПользователя', 'UserName', 'КаталогВременныхФайлов', 'TempFilesDir', 
			'КаталогПрограммы', 'BinDir', 'КодЛокализации', 'LocaleCode', 'ОтключитьОбработчикОжидания', 'DetachIdleHandler', 
			'ОтключитьОбработчикОповещения', 'DetachNotificationHandler', 'ПараметрыДоступа', 'AccessParameters', 
			'ПодключитьОбработчикОповещения', 'AttachIdleHandler', 'ПодключитьОбработчикОповещения', 'AttachNotificationHandler', 
			'ПолноеИмяПользователя', 'UserFullName', 'ПолучитьЗаголовокСистемы', 'GetCaption', 'ПравоДоступа', 'AccessRight', 
			'ПрекратитьРаботуСистемы', 'Terminate', 'РольДоступна', 'IsInRole'),
        
        //Объекты глобального контекста.
		3 => array('БиблиотекаКартинок', 'PictureLib', 'БиблиотекаСтилей', 'StyleLib', 
			'БизнесПроцессы', 'BusinessProcesses', 'ВнешниеОбработки', 
			'ExternalProcessings', 'ГлавныйИнтерфейс', 'MainInterface', 'Документы', 
			'Documents', 'ЖурналыДокументов', 'DocumentJournals', 'Задачи', 'Tasks', 
			'Константы', 'Constants', 'КритерииОтбора', 'FilterCriteria', 'Метаданные', 
			'Metadata', 'Обработки', 'Processings', 'Отчеты', 'Reports',  
			'ПараметрыСеанса', 'SessionParameters', 'Перечисления', 'Enums', 
			'ПланыВидовРасчета', 'ChartsOfCalculationTypes', 'ПланыВидовХарактеристик', 
			'ChartsOfCharacteristicTypes', 'ПланыОбмена', 'ExchangePlans', 
			'ПланыСчетов', 'ChartsOfAccounts', 'ПользователиИнформационнойБазы', 
			'InfoBaseUsers', 'РегистрыБухгалтерии', 'AccountingRegisters', 
			'РегистрыНакопления', 'AccumulationRegisters', 
			'РегистрыРасчета', 'CalculationRegisters', 'РегистрыСведений', 
			'InformationRegisters', 'Справочники', 'Catalogs'),
		
		//Свойства глобального контекста элементарных типов.
		4 => array('ИспользованиеРабочейДаты', 'WorkingDateUse', 'ПараметрЗапуска', 'LaunchParameter',
			'РабочаяДата', 'WorkingDate'),
		
		//Математические функции
        5 => array('ACos', 'ASin', 'ATan', 'Cos', 'Exp', 'Log', 'Log10', 'Pow', 'Sin', 'Sqrt', 
					'Tan', 'Окр', 'Round', 'Цел', 'Int'),
        ),
    'SYMBOLS' => array(
        '(', ')', '[', ']', '{', '}',
        '!', '@', '%', '&', '|', '/',
        '<', '>',
        '=', '-', '+', '*',
        '.', ':', ',', ';'
        ),
    'CASE_SENSITIVE' => array(
        GESHI_COMMENTS => false,
        1 => false,
        2 => false,
        3 => false,
        ),
    'STYLES' => array(
        'KEYWORDS' => array(
            1 => 'color: red;',
            2 => 'color: red;',
            3 => 'color: #800000;',
            4 => 'color: red;',
			5 => 'color: red;',
            ),
        'COMMENTS' => array(
            1 => 'color: green;',
            'MULTI' => 'color: green; font-style: italic;'
            ),
        'ESCAPE_CHAR' => array(
            0 => 'color: #000099; font-weight: bold;'
            ),
        'BRACKETS' => array(
            0 => 'color: blue;'
            ),
        'STRINGS' => array(
            0 => 'color: blue;'
            ),
        'NUMBERS' => array(
            0 => 'color: blue;'
            ),
        'METHODS' => array(
            1 => 'color: blue;'
            ),
        'SYMBOLS' => array(
            0 => 'color: blue;'
            ),
        'REGEXPS' => array(
            ),
        'SCRIPT' => array(
            )
        ),
    'URLS' => array(
        1 => '',
        2 => '',
        3 => ''
        ),
    'OOLANG' => true,
    'OBJECT_SPLITTERS' => array(
        1 => '.'
        ),
    'REGEXPS' => array(
        ),
    'STRICT_MODE_APPLIES' => GESHI_NEVER,
    'SCRIPT_DELIMITERS' => array(),
    'HIGHLIGHT_STRICT_BLOCK' => array(),
        
    'PARSER_CONTROL' => array(
    'KEYWORDS' => array(
		//Ключевые слова языка
        1 => array(
        	'DISALLOWED_BEFORE' => '(?<![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        	'DISALLOWED_AFTER' => '(?![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        ),
		
        //Встроенные функции
        2 => array(        	
        	'DISALLOWED_BEFORE' => '(?<![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        	'DISALLOWED_AFTER' => '(?![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        ),
		
        //Объекты глобального контекста
        3 => array(
        	'DISALLOWED_BEFORE' => '(?<![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        	'DISALLOWED_AFTER' => '(?![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        ),
		
		//Свойства глобального контекста элементарных типов
        4 => array(
        	'DISALLOWED_BEFORE' => '(?<![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        	'DISALLOWED_AFTER' => '(?![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        ),

		//Математические функции		
        5 => array(
        	'DISALLOWED_BEFORE' => '(?<![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        	'DISALLOWED_AFTER' => '(?![a-zA-Z0-9]|(\xD0[\x80-\xBF])|\xD1[\x80-\xBF])',
        ),
      )
    )
);

?>
