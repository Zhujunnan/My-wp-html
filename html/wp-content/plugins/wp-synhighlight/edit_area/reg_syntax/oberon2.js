editAreaLoader.load_syntax["oberon2"] = {
    'COMMENT_SINGLE' : {}, 
    'COMMENT_MULTI' : {"(*": "*)"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["ARRAY", "BEGIN", "BY", "CASE", "CONST", "DIV", "DO", "ELSE", "ELSIF", "END", "EXIT", "FOR", "IF", "IMPORT", "IN", "IS", "LOOP", "MOD", "MODULE", "OF", "OR", "POINTER", "PROCEDURE", "RECORD", "REPEAT", "RETURN", "THEN", "TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH"],
        'keywordgroup2': ["NIL", "FALSE", "TRUE"],
        'keywordgroup3': ["ABS", "ASH", "ASSERT", "CAP", "CHR", "COPY", "DEC", "ENTIER", "EXCL", "HALT", "INC", "INCL", "LEN", "LONG", "MAX", "MIN", "NEW", "ODD", "ORD", "SHORT", "SIZE"],
        'keywordgroup4': ["BOOLEAN", "CHAR", "SHORTINT", "LONGINT", "INTEGER", "LONGREAL", "REAL", "SET", "PTR"]
}, 
    'OPERATORS' : [",", ":", "=", "+", "-", "*", "/", "#", "~"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : '', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #000000;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #000066;',
        'keywordgroup4': 'color: #000066;'    }, 
       'OPERATORS' : 'color: #339933;', 
        'DELIMITERS' : 'color: #339933;' 
    } 
}; 
