editAreaLoader.load_syntax["scala"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["abstract", "case", "catch", "class", "def", "do", "else", "extends", "false", "final", "finally", "for", "forSome", "if", "implicit", "import", "match", "new", "null", "object", "override", "package", "private", "protected", "requires", "return", "sealed", "super", "this", "throw", "trait", "try", "true", "type", "val", "var", "while", "with", "yield"],
        'keywordgroup2': ["void", "double", "int", "boolean", "byte", "short", "long", "char", "float"]
}, 
    'OPERATORS' : ["*", "&", "%", "!", ";", "<", ">", "?", "_", ":", "=", "=>", "<<:", "<%", ">:", "#", "@"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #008000;', 
        'QUOTESMARKS' : 'color: #6666FF;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000ff;',
        'keywordgroup2': 'color: #9999cc;'    }, 
       'OPERATORS' : 'color: #000080;', 
        'DELIMITERS' : 'color: #000080;' 
    } 
}; 
