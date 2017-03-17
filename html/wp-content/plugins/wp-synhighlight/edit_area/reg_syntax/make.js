editAreaLoader.load_syntax["make"] = {
    'COMMENT_SINGLE' : {1: "#"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["ifeq", "else", "endif", "ifneq", "ifdef", "ifndef", "include", "vpath", "export", "unexport", "override", "info", "warning", "error"],
        'keywordgroup2': [".SUFFIXES", ".PHONY", ".DEFAULT", ".PRECIOUS", ".IGNORE", ".SILENT", ".EXPORT_ALL_VARIABLES", ".KEEP_STATE", ".LIBPATTERNS", ".NOTPARALLEL", ".DELETE_ON_ERROR", ".INTERMEDIATE", ".POSIX", ".SECONDARY"]
}, 
    'OPERATORS' : ["!", "@", "%", "&", "|", "/", "<", ">", "=", "-", "+", "*", ".", ":", ",", ";", "$"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #339900;', 
        'QUOTESMARKS' : 'color: #CC2200;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #666622;',
        'keywordgroup2': 'color: #990000;'    }, 
       'OPERATORS' : 'color: #004400;', 
        'DELIMITERS' : 'color: #004400;' 
    } 
}; 
