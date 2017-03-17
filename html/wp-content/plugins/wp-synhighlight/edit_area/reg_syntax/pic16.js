editAreaLoader.load_syntax["pic16"] = {
    'COMMENT_SINGLE' : {1: ";"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["addcf", "adddcf", "addlw", "addwf", "andlw", "andwf", "bc", "bcf", "bdc", "bnc", "bndc", "bnz", "bsf", "btfsc", "btfss", "bz", "call", "clrc", "clrdc", "clrf", "clrw", "clrwdt", "clrz", "comf", "decf", "goto", "incf", "incfsz", "iorlw", "iorwf", "lcall", "lgoto", "movf", "movfw", "movlw", "movwf", "option", "negf", "nop", "retfie", "retlw", "return", "rlf", "rrf", "setc", "setdc", "setz", "skpc", "skpdc", "skpnc", "skpndc", "skpnz", "skpz", "sleep", "subcf", "subdcf", "sublw", "subwf", "swapf", "tris", "tstf", "xorlw", "xorwf"],
        'keywordgroup2': ["INDF", "TMR0", "OPTION", "PCL", "STATUS", "FSR", "PORTA", "PORTB", "PORTC", "PORTD", "PORTE", "PORTF", "TRISA", "TRISB", "TRISC", "TRISD", "TRISE", "TRISF", "PCLATH", "INTCON", "PIR1", "PIE1", "PCON", "CMCON", "VRCON", "F", "W"],
        'keywordgroup3': ["_BADRAM", "BANKISEL", "BANKSEL", "CBLOCK", "CODE", "_CONFIG", "CONSTANT", "DA", "DATA", "DB", "DE", "#DEFINE", "DT", "DW", "ELSE", "END", "ENDC", "ENDIF", "ENDM", "ENDW", "EQU", "ERROR", "ERRORLEVEL", "EXITM", "EXPAND", "EXTERN", "FILL", "GLOBAL", "IDATA", "_IDLOCS", "IF", "IFDEF", "IFNDEF", "INCLUDE", "#INCLUDE", "LIST", "LOCAL", "MACRO", "_MAXRAM", "MESSG", "NOEXPAND", "NOLIST", "ORG", "PAGE", "PAGESEL", "PROCESSOR", "RADIX", "RES", "SET", "SPACE", "SUBTITLE", "TITLE", "UDATA", "UDATA_ACS", "UDATA_OVR", "UDATA_SHR", "#UNDEFINE", "VARIABLE", "WHILE", "D", "H", "O", "B", "A"]
}, 
    'OPERATORS' : ["=", ".", ",", ":"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #00a000;', 
        'QUOTESMARKS' : 'color: #ff7700;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000a0;',
        'keywordgroup2': 'color: #aa3300;',
        'keywordgroup3': 'color: #0000ff;'    }, 
       'OPERATORS' : 'color: #7777ff;', 
        'DELIMITERS' : 'color: #7777ff;' 
    } 
}; 
