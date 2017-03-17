editAreaLoader.load_syntax["c1"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["Если", "If", "Тогда", "Then", "ИначеЕсли", "ElseIf", "Иначе", "Else", "КонецЕсли", "EndIf", "Для", "For", "Каждого", "Each", "Из", "In", "По", "To", "Пока", "While", "Цикл", "Do", "КонецЦикла", "EndDo", "Процедура", "Procedure", "Функция", "Function", "КонецПроцедуры", "EndProcedure", "КонецФункции", "EndFunction", "Перем", "Var", "Перейти", "Goto", "Продолжить", "Continue", "Прервать", "Break", "Попытка", "Try", "Исключение", "Except", "ВызватьИсключение", "Raise", "КонецПопытки", "EndTry", "Новый", "New", "Выполнить", "Execute", "Возврат", "Return", "И", "And", "Или", "Or", "Не", "Not", "Ложь", "False", "Истина", "True"],
        'keywordgroup2': ["ВРег", "КодСимвола", "Лев", "Найти", "НРег", "Прав", "ПустаяСтрока", "Символ", "СокрЛ", "СокрП", "СокрЛП", "Сред", "СтрДлина", "СтрЗаменить", "СтрПолучитьСтроку", "СтрЧислоВхождений", "СтрЧислоСтрок", "Год", "Year", "День", "Day", "ДеньГода", "DayOfYear", "ДеньНедели", "DayOfWeek", "ДобавитьМесяц", "AddMonth", "КонецГода", "EndOfYear", "КонецДня", "EndOfDay", "КонецКвартала", "EndOfQuarter", "КонецМесяца", "EndOfMonth", "КонецМинуты", "EndOfMinute", "КонецНедели", "EndOfWeek", "КонецЧаса", "EndOfHour", "Месяц", "Month", "Минута", "Minute", "НачалоГода", "BegOfYear", "НачалоДня", "BegOfDay", "НачалоКвартала", "BegOfQuarter", "НачалоМесяца", "BegOfMonth", "НачалоМинуты", "BegOfMinute", "НачалоНедели", "BegOfWeek", "НачалоЧаса", "BegOfHour", "НеделяГода", "WeekOfYear", "Секунда", "Second", "ТекущаяДата", "CurrentDate", "Час", "Hour", "Булево", "Boolean", "Дата", "Date", "Строка", "String", "Число", "Number", "Формат", "Format", "Вычислить", "Eval", "Макс", "Max", "Мин", "Min", "ОписаниеОшибки", "ErrorDescription", "Тип", "Type", "ТипЗнч", "TypeOf", "Вопрос", "DoQueryBox", "ОбработкаПрерыванияПользователя", "UserInterruptProcessing", "Оповестить", "Notify", "ОткрытьЗначение", "OpenValue", "ОткрытьИндексСправки", "OpenHelpIndex", "ОткрытьСодержаниеСправки", "OpenHelpContent", "ОткрытьСправку", "OpenHelp", "ОчиститьСообщения", "ClearMessages", "Предупреждение", "DoMessageBox", "Сигнал", "Beep", "Сообщить", "Message", "Состояние", "Status", "ВвестиДату", "InputDate", "ВвестиЗначение", "InputValue", "ВвестиСтроку", "ВвестиЧисло", "InputNumber", "НСтр", "NStr", "ПредставлениеПериода", "PeriodPresentation", "ЧислоПрописью", "NumberInWords", "ПолучитьОбщийМакет", "GetCommonTemplate", "ПолучитьОбщуюФорму", "GetCommonForm", "ЗаблокироватьРаботуПользователя", "LockApplication", "ЗавершитьРаботуСистемы", "Exit", "ИмяКомпьютера", "ComputerName", "ИмяПользователя", "UserName", "КаталогВременныхФайлов", "TempFilesDir", "КаталогПрограммы", "BinDir", "КодЛокализации", "LocaleCode", "ОтключитьОбработчикОжидания", "DetachIdleHandler", "ОтключитьОбработчикОповещения", "DetachNotificationHandler", "ПараметрыДоступа", "AccessParameters", "ПодключитьОбработчикОповещения", "AttachIdleHandler", "ПодключитьОбработчикОповещения", "AttachNotificationHandler", "ПолноеИмяПользователя", "UserFullName", "ПолучитьЗаголовокСистемы", "GetCaption", "ПравоДоступа", "AccessRight", "ПрекратитьРаботуСистемы", "Terminate", "РольДоступна", "IsInRole"],
        'keywordgroup3': ["БиблиотекаКартинок", "PictureLib", "БиблиотекаСтилей", "StyleLib", "БизнесПроцессы", "BusinessProcesses", "ВнешниеОбработки", "ExternalProcessings", "ГлавныйИнтерфейс", "MainInterface", "Документы", "Documents", "ЖурналыДокументов", "DocumentJournals", "Задачи", "Tasks", "Константы", "Constants", "КритерииОтбора", "FilterCriteria", "Метаданные", "Metadata", "Обработки", "Processings", "Отчеты", "Reports", "ПараметрыСеанса", "SessionParameters", "Перечисления", "Enums", "ПланыВидовРасчета", "ChartsOfCalculationTypes", "ПланыВидовХарактеристик", "ChartsOfCharacteristicTypes", "ПланыОбмена", "ExchangePlans", "ПланыСчетов", "ChartsOfAccounts", "ПользователиИнформационнойБазы", "InfoBaseUsers", "РегистрыБухгалтерии", "AccountingRegisters", "РегистрыНакопления", "AccumulationRegisters", "РегистрыРасчета", "CalculationRegisters", "РегистрыСведений", "InformationRegisters", "Справочники", "Catalogs"],
        'keywordgroup4': ["ИспользованиеРабочейДаты", "WorkingDateUse", "ПараметрЗапуска", "LaunchParameter", "РабочаяДата", "WorkingDate"],
        'keywordgroup5': ["ACos", "ASin", "ATan", "Cos", "Exp", "Log", "Log10", "Pow", "Sin", "Sqrt", "Tan", "Окр", "Round", "Цел", "Int"]
}, 
    'OPERATORS' : ["!", "@", "%", "&", "|", "/", "<", ">", "=", "-", "+", "*", ".", ":", ",", ";"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: green;', 
        'QUOTESMARKS' : 'color: blue;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: red;',
        'keywordgroup2': 'color: red;',
        'keywordgroup3': 'color: #800000;',
        'keywordgroup4': 'color: red;',
        'keywordgroup5': 'color: red;'    }, 
       'OPERATORS' : 'color: blue;', 
        'DELIMITERS' : 'color: blue;' 
    } 
}; 
