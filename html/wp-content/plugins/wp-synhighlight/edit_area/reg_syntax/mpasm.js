editAreaLoader.load_syntax["mpasm"] = {
    'COMMENT_SINGLE' : {1: ";"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup4': ["CONSTANT", "#DEFINE", "END", "EQU", "ERROR", "ERROR-LEVEL", "#INCLUDE", "LIST", "MESSG", "NOLIST", "ORG", "PAGE", "PROCESSOR", "RADIX", "SET", "SPACE", "SUBTITLE", "TITLE", "#UNDEFINE", "VARIABLE", "ELSE", "ENDIF", "ENDW", "IF", "IFDEF", "IFNDEF", "WHILE", "__BADRAM", "CBLOCK", "__CONFIG", "DA", "DATA", "DB", "DE", "DT", "DW", "ENDC", "FILL", "__IDLOCS", "__MAXRAM", "RES", "ENDM", "EXITM", "EXPAND", "LOCAL", "MACRO", "NOEXPAND", "BANKISEL", "BANKSEL", "CODE", "EXTERN", "GLOBAL", "IDATA", "PAGESEL", "UDATA", "UDATA_ACS", "UDATA_OVR", "UDATA_SHR"],
        'keywordgroup1': ["andlw", "call", "clrwdt", "goto", "iorlw", "movlw", "option", "retlw", "sleep", "tris", "xorlw", "addwf", "andwf", "clrf", "clrw", "comf", "decf", "decfsz", "incf", "incfsz", "iorwf", "movf", "nop", "rlf", "rrf", "subwf", "swapf", "xorwf", "bcf", "bsf", "btfsc", "btfss", "addlw", "retfie", "return", "sublw", "addcf", "adddcf", "b", "bc", "bdc", "bnc", "bndc", "bnz", "bz", "clrc", "clrdc", "clrz", "lcall", "lgoto", "movfw", "negf", "setc", "setdc", "setz", "skpc", "skpdc", "skpnc", "skpndc", "skpnz", "skpz", "subcf", "subdcf", "tstf"],
        'keywordgroup2': ["movfp", "movlb", "movlp", "movpf", "movwf", "tablrd", "tablwt", "tlrd", "tlwt", "addwfc", "daw", "mullw", "negw", "rlcf", "rlncf", "rrcf", "rrncf", "setf", "subwfb", "btg", "cpfseq", "cpfsgt", "cpfslt", "dcfsnz", "infsnz", "tstfsz", "lfsr", "bnn", "bnov", "bra", "pop", "push", "rcall", "reset"],
        'keywordgroup3': ["INDF", "TMR0", "PCL", "STATUS", "FSR", "PORTA", "PORTB", "PORTC", "PORTD", "PORTE", "PCLATH", "INTCON", "PIR1", "PIR2", "TMR1L", "TMR1H", "T1CON", "TMR2", "T2CON", "TMR2L", "TMR2H", "TMR0H", "TMR0L", "SSPBUF", "SSPCON", "CCPR1L", "CCPR1H", "CCP1CON", "RCSTA", "TXREG", "RCREG", "CCPR2L", "CCPR2H", "CCP2CON", "OPTION", "TRISA", "TRISB", "TRISC", "TRISD", "TRISE", "PIE2", "PIE1", "PR2", "SSPADD", "SSPSTAT", "TXSTA", "SPBRG"],
        'keywordgroup5': ["high", "low"]
}, 
    'OPERATORS' : [], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #adadad;', 
        'QUOTESMARKS' : 'color: #7f007f;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #00007f;',
        'keywordgroup2': 'color: #0000ff;',
        'keywordgroup3': 'color: #007f00;',
        'keywordgroup4': 'color: #46aa03;',
        'keywordgroup5': 'color: #7f0000;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
