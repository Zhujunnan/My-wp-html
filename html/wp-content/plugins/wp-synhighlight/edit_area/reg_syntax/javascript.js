editAreaLoader.load_syntax["javascript"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["as", "break", "case", "catch", "continue", "decodeURI", "delete", "do", "else", "encodeURI", "eval", "finally", "for", "if", "in", "is", "item", "instanceof", "return", "switch", "this", "throw", "try", "typeof", "void", "while", "write", "with"],
        'keywordgroup2': ["class", "const", "default", "debugger", "export", "extends", "false", "function", "import", "namespace", "new", "null", "package", "private", "protected", "public", "super", "true", "use", "var"],
        'keywordgroup3': ["alert", "back", "blur", "close", "confirm", "focus", "forward", "home", "name", "navigate", "onblur", "onerror", "onfocus", "onload", "onmove", "onresize", "onunload", "open", "print", "prompt", "scroll", "status", "stop"]
}, 
    'OPERATORS' : ["+", "-", "*", "/", "%", "!", "@", "&", "|", "^", "<", ">", "=", ",", ";", "?", ":"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #006600;', 
        'QUOTESMARKS' : 'color: #3366CC;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #000066;',
        'keywordgroup2': 'color: #003366;',
        'keywordgroup3': 'color: #000066;'    }, 
       'OPERATORS' : 'color: #339933;', 
        'DELIMITERS' : 'color: #339933;' 
    } 
}; 
