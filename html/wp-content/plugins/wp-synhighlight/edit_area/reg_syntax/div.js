editAreaLoader.load_syntax["div"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["while", "until", "to", "switch", "step", "return", "repeat", "loop", "if", "from", "frame", "for", "end", "elseif", "else", "default", "debug", "continue", "clone", "case", "break", "begin"],
        'keywordgroup2': ["xor", "whoami", "type", "sizeof", "pointer", "or", "offset", "not", "neg", "mod", "id", "dup", "and", "_ne", "_lt", "_le", "_gt", "_ge", "_eq"],
        'keywordgroup3': ["setup_program", "program", "process", "private", "local", "import", "global", "function", "const", "compiler_options"],
        'keywordgroup4': ["word", "struct", "string", "int", "byte"]
}, 
    'OPERATORS' : ["=", "+", "-", "*", "/", "!", "%", "^", "&", ":", ";", ",", "<", ">"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0040b1;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #000066;',
        'keywordgroup4': 'color: #993333;'    }, 
       'OPERATORS' : 'color: #44aa44;', 
        'DELIMITERS' : 'color: #44aa44;' 
    } 
}; 
