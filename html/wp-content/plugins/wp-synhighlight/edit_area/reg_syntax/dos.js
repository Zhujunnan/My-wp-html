editAreaLoader.load_syntax["dos"] = {
    'COMMENT_SINGLE' : {}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {}, 
    'KEYWORDS' : {
        'keywordgroup1': ["if", "else", "goto", "shift", "for", "in", "do", "call", "exit"],
        'keywordgroup2': ["not", "exist", "errorlevel", "defined", "equ", "neq", "lss", "leq", "gtr", "geq"],
        'keywordgroup3': ["cd", "md", "rd", "chdir", "mkdir", "rmdir", "dir", "del", "copy", "move", "ren", "rename", "echo", "setlocal", "endlocal", "set", "pause", "pushd", "popd", "title", "verify"],
        'keywordgroup4': ["prn", "nul", "lpt3", "lpt2", "lpt1", "con", "com4", "com3", "com2", "com1", "aux"]
}, 
    'OPERATORS' : ["@", "%"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #00b100;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #b1b100;',
        'keywordgroup4': 'color: #0000ff;'    }, 
       'OPERATORS' : 'color: #33cc33;', 
        'DELIMITERS' : 'color: #33cc33;' 
    } 
}; 
