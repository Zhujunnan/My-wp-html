editAreaLoader.load_syntax["ada"] = {
    'COMMENT_SINGLE' : {1: "--"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["begin", "declare", "do", "else", "elsif", "exception", "for", "if", "is", "loop", "while", "then", "end", "select", "case", "until", "goto", "return"],
        'keywordgroup2': ["abs", "and", "mod", "not", "or", "rem", "xor"],
        'keywordgroup3': ["abort", "abstract", "accept", "access", "aliased", "all", "array", "at", "body", "constant", "delay", "delta", "digits", "entry", "exit", "function", "generic", "in", "limited", "new", "null", "of", "others", "out", "package", "pragma", "private", "procedure", "protected", "raise", "range", "record", "renames", "requeue", "reverse", "separate", "subtype", "tagged", "task", "terminate", "type", "use", "when", "with"]
}, 
    'OPERATORS' : [], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #adadad;', 
        'QUOTESMARKS' : 'color: #7f007f;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #00007f;',
        'keywordgroup2': 'color: #0000ff;',
        'keywordgroup3': 'color: #46aa03;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
