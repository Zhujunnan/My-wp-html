editAreaLoader.load_syntax["visualprolog"] = {
    'COMMENT_SINGLE' : {1: "%"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["clauses", "constants", "constructors", "delegate", "domains", "facts", "goal", "guards", "inherits", "monitor", "namespace", "open", "predicates", "properties", "resolve", "supports"],
        'keywordgroup2': ["align", "and", "anyflow", "as", "bitsize", "catch", "determ", "digits", "div", "do", "else", "elseif", "erroneous", "externally", "failure", "finally", "from", "language", "mod", "multi", "nondeterm", "or", "procedure", "quot", "rem", "single", "then", "to"],
        'keywordgroup3': ["#bininclude", "#else", "#elseif", "#endif", "#error", "#export", "#externally", "#if", "#import", "#include", "#message", "#options", "#orrequires", "#requires", "#then", "#warning"]
}, 
    'OPERATORS' : ["+", "-", "*", "?", "=", "/", ">", "<", "^", "!", ":"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #AA77BD', 
        'QUOTESMARKS' : 'color: #00B7B7;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #808000;',
        'keywordgroup2': 'color: #333399;',
        'keywordgroup3': 'color: #800080;'    }, 
       'OPERATORS' : 'color: #000000;', 
        'DELIMITERS' : 'color: #000000;' 
    } 
}; 
