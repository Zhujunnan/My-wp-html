editAreaLoader.load_syntax["pascal"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"{": "}", "(*": "*)"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["absolute", "asm", "assembler", "begin", "break", "case", "catch", "cdecl", "const", "constructor", "default", "destructor", "div", "do", "downto", "else", "end", "except", "export", "exports", "external", "far", "finalization", "finally", "for", "forward", "function", "goto", "if", "implementation", "in", "index", "inherited", "initialization", "inline", "interface", "interrupt", "label", "library", "mod", "name", "not", "of", "or", "overload", "override", "private", "procedure", "program", "property", "protected", "public", "published", "raise", "repeat", "resourcestring", "shl", "shr", "stdcall", "stored", "switch", "then", "to", "try", "type", "unit", "until", "uses", "var", "while", "xor"],
        'keywordgroup2': ["nil", "false", "true"],
        'keywordgroup3': ["abs", "and", "arc", "arctan", "blockread", "blockwrite", "chr", "dispose", "cos", "eof", "eoln", "exp", "get", "ln", "new", "odd", "ord", "ordinal", "pred", "read", "readln", "sin", "sqrt", "succ", "write", "writeln"],
        'keywordgroup4': ["ansistring", "array", "boolean", "byte", "bytebool", "char", "file", "integer", "longbool", "longint", "object", "packed", "pointer", "real", "record", "set", "shortint", "smallint", "string", "union", "word"]
}, 
    'OPERATORS' : [",", ":", "=", "+", "-", "*", "/"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #666666;', 
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
