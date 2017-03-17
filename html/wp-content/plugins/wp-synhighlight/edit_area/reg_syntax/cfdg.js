editAreaLoader.load_syntax["cfdg"] = {
    'COMMENT_SINGLE' : {1: "//", 2: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["include", "startshape", "rule", "background"],
        'keywordgroup2': ["SQUARE", "CIRCLE", "TRIANGLE"],
        'keywordgroup3': ["b", "brightness", "h", "hue", "sat", "saturation", "a", "alpha", "x", "y", "z", "s", "size", "r", "rotate", "f", "flip", "skew", "xml_set_object"]
}, 
    'OPERATORS' : ["*", "|"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #717100;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #006666;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
