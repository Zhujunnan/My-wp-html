editAreaLoader.load_syntax["idl"] = {
    'COMMENT_SINGLE' : {1: "//", 2: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["published", "get", "set", "service", "singleton", "type", "module", "interface", "struct", "const", "constants", "exception", "enum", "raises", "typedef"],
        'keywordgroup2': ["bound", "maybeambiguous", "maybedefault", "maybevoid", "oneway", "optional", "readonly", "in", "out", "inout", "attribute", "transient", "removable"],
        'keywordgroup3': ["True", "False", "TRUE", "FALSE"],
        'keywordgroup4': ["string", "long", "byte", "hyper", "boolean", "any", "char", "double", "void", "sequence", "unsigned"]
}, 
    'OPERATORS' : ["=", "+", "-", "*", "/", "!", "%", "^", "&", ":", ";", "..."], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #3f7f5f;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #990078;',
        'keywordgroup2': 'color: #36dd1c;',
        'keywordgroup3': 'color: #990078;',
        'keywordgroup4': 'color: #0000ec;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
