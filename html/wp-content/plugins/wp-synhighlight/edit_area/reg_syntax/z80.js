editAreaLoader.load_syntax["z80"] = {
    'COMMENT_SINGLE' : {1: ";"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["adc", "add", "and", "bit", "call", "ccf", "cp", "cpd", "cpdr", "cpir", "cpi", "cpl", "daa", "dec", "di", "djnz", "ei", "ex", "exx", "halt", "im", "in", "in0", "inc", "ind", "indr", "inir", "ini", "jp", "jr", "ld", "ldd", "lddr", "ldir", "ldi", "mlt", "neg", "nop", "or", "otdm", "otdmr", "otdr", "otim", "otimr", "otir", "out", "out0", "outd", "outi", "pop", "push", "res", "ret", "reti", "retn", "rl", "rla", "rlc", "rlca", "rld", "rr", "rra", "rrc", "rrca", "rrd", "rst", "sbc", "scf", "set", "sla", "sl1", "sll", "slp", "sra", "srl", "sub", "tst", "tstio", "xor"],
        'keywordgroup2': ["a", "b", "c", "d", "e", "h", "l", "af", "bc", "de", "hl", "ix", "iy", "sp", "af\'", "ixh", "ixl", "iyh", "iyl"],
        'keywordgroup3': ["#define", "#endif", "#else", "#ifdef", "#ifndef", "#include", "#undef", ".db", ".dd", ".df", ".dq", ".dt", ".dw", ".end", ".org", "equ"]
}, 
    'OPERATORS' : ["?", "+", "-", "*", "/", "%", "$"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #adadad;', 
        'QUOTESMARKS' : 'color: #7f007f;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000ff;',
        'keywordgroup2': 'color: #0000ff;',
        'keywordgroup3': 'color: #46aa03;'    }, 
       'OPERATORS' : 'color: #008000;', 
        'DELIMITERS' : 'color: #008000;' 
    } 
}; 
