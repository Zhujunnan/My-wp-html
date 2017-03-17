editAreaLoader.load_syntax["m68k"] = {
    'COMMENT_SINGLE' : {1: ";"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["adc", "add", "ais", "aix", "and", "asl", "asr", "bcc", "bclr", "bcs", "beq", "bge", "bgt", "bhcc", "bhcs", "bhi", "bhs", "bih", "bil", "bit", "ble", "blo", "bls", "blt", "bmc", "bmi", "bms", "bne", "bpl", "bra", "brclr", "brn", "brset", "bset", "bsr", "cbeq", "clc", "cli", "clr", "cmp", "com", "cphx", "cpx", "daa", "dbnz", "dec", "div", "eor", "inc", "jmp", "jsr", "lda", "ldhx", "ldx", "lsl", "lsr", "mov", "mul", "neg", "nop", "nsa", "ora", "psha", "pshh", "pshx", "pula", "pulh", "pulx", "rol", "ror", "rsp", "rti", "rts", "sbc", "sec", "sei", "sta", "sthx", "stop", "stx", "sub", "swi", "tap", "tax", "tpa", "tst", "tsx", "txa", "txs", "wait"],
        'keywordgroup2': ["a", "h", "x", "hx", "sp"],
        'keywordgroup3': ["#define", "#endif", "#else", "#ifdef", "#ifndef", "#include", "#undef", ".db", ".dd", ".df", ".dq", ".dt", ".dw", ".end", ".org", "equ"]
}, 
    'OPERATORS' : [","], 
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
