editAreaLoader.load_syntax["asp"] = {
    'COMMENT_SINGLE' : {1: "\'", 2: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["include", "file", "Const", "Dim", "Option", "Explicit", "Implicit", "Set", "Select", "ReDim", "Preserve", "ByVal", "ByRef", "End", "Private", "Public", "If", "Then", "Else", "ElseIf", "Case", "With", "NOT", "While", "Wend", "For", "Loop", "Do", "Request", "Response", "Server", "ADODB", "Session", "Application", "Each", "In", "Get", "Next", "INT", "CINT", "CBOOL", "CDATE", "CBYTE", "CCUR", "CDBL", "CLNG", "CSNG", "CSTR", "Fix", "Is", "Sgn", "String", "Boolean", "Currency", "Me", "Single", "Long", "Integer", "Byte", "Variant", "Double", "To", "Let", "Xor", "Resume", "On", "Error", "Imp", "GoTo", "Call", "Global"],
        'keywordgroup2': ["Null", "Nothing", "And", "False", "True", "var", "Or", "BOF", "EOF", "xor", "Function", "Class", "New", "Sub"],
        'keywordgroup3': ["CreateObject", "Write", "Redirect", "Cookies", "BinaryRead", "ClientCertificate", "Form", "QueryString", "ServerVariables", "TotalBytes", "AddHeader", "AppendToLog", "BinaryWrite", "Buffer", "CacheControl", "Charset", "Clear", "ContentType", "End()", "Expires", "ExpiresAbsolute", "Flush()", "IsClientConnected", "PICS", "Status", "Connection", "Recordset", "Execute", "Abandon", "Lock", "UnLock", "Command", "Fields", "Properties", "Property", "Send", "Replace", "InStr", "TRIM", "NOW", "Day", "Month", "Hour", "Minute", "Second", "Year", "MonthName", "LCase", "UCase", "Abs", "Array", "As", "LEN", "MoveFirst", "MoveLast", "MovePrevious", "MoveNext", "LBound", "UBound", "Transfer", "Open", "Close", "MapPath", "FileExists", "OpenTextFile", "ReadAll"]
}, 
    'OPERATORS' : ["Array", "Array"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #008000;', 
        'QUOTESMARKS' : 'color: #cc0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #990099;',
        'keywordgroup2': 'color: #0000ff;',
        'keywordgroup3': 'color: #330066;'    }, 
       'OPERATORS' : 'color: #006600;', 
        'DELIMITERS' : 'color: #006600;' 
    } 
}; 
