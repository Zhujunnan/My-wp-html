editAreaLoader.load_syntax["sas"] = {
    'COMMENT_SINGLE' : {}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["_ALL_", "_CHARACTER_", "_INFILE_", "_N_", "_NULL_", "_NUMERIC_", "_WEBOUT_"],
        'keywordgroup2': ["%BQUOTE", "%CMPRES", "%COMPSTOR", "%DATATYP", "%DISPLAY", "%DO", "%ELSE", "%END", "%EVAL", "%GLOBAL", "%GOTO", "%IF", "%INDEX", "%INPUT", "%KEYDEF", "%LABEL", "%LEFT", "%LENGTH", "%LET", "%LOCAL", "%LOWCASE", "%MACRO", "%MEND", "%NRBQUOTE", "%NRQUOTE", "%NRSTR", "%PUT", "%QCMPRES", "%QLEFT", "%QLOWCASE", "%QSCAN", "%QSUBSTR", "%QSYSFUNC", "%QTRIM", "%QUOTE", "%QUPCASE", "%SCAN", "%STR", "%SUBSTR", "%SUPERQ", "%SYSCALL", "%SYSEVALF", "%SYSEXEC", "%SYSFUNC", "%SYSGET", "%SYSLPUT", "%SYSPROD", "%SYSRC", "%SYSRPUT", "%THEN", "%TO", "%TRIM", "%UNQUOTE", "%UNTIL", "%UPCASE", "%VERIFY", "%WHILE", "%WINDOW"],
        'keywordgroup3': ["ABS", "ADDR", "AIRY", "ARCOS", "ARSIN", "ATAN", "ATTRC", "ATTRN", "BAND", "BETAINV", "BLSHIFT", "BNOT", "BOR", "BRSHIFT", "BXOR", "BYTE", "CDF", "CEIL", "CEXIST", "CINV", "CLOSE", "CNONCT", "COLLATE", "COMPBL", "COMPOUND", "COMPRESS", "COSH", "COS", "CSS", "CUROBS", "CV", "DACCDBSL", "DACCDB", "DACCSL", "DACCSYD", "DACCTAB", "DAIRY", "DATETIME", "DATEJUL", "DATEPART", "DATE", "DAY", "DCLOSE", "DEPDBSL", "DEPDB", "DEPSL", "DEPSYD", "DEPTAB", "DEQUOTE", "DHMS", "DIF", "DIGAMMA", "DIM", "DINFO", "DNUM", "DOPEN", "DOPTNAME", "DOPTNUM", "DREAD", "DROPNOTE", "DSNAME", "ERFC", "ERF", "EXIST", "EXP", "FAPPEND", "FCLOSE", "FCOL", "FDELETE", "FETCHOBS", "FETCH", "FEXIST", "FGET", "FILEEXIST", "FILENAME", "FILEREF", "FINFO", "FINV", "FIPNAMEL", "FIPNAME", "FIPSTATE", "FLOOR", "FNONCT", "FNOTE", "FOPEN", "FOPTNAME", "FOPTNUM", "FPOINT", "FPOS", "FPUT", "FREAD", "FREWIND", "FRLEN", "FSEP", "FUZZ", "FWRITE", "GAMINV", "GAMMA", "GETOPTION", "GETVARC", "GETVARN", "HBOUND", "HMS", "HOSTHELP", "HOUR", "IBESSEL", "INDEXW", "INDEXC", "INDEX", "INPUTN", "INPUTC", "INPUT", "INTRR", "INTCK", "INTNX", "INT", "IRR", "JBESSEL", "JULDATE", "KURTOSIS", "LAG", "LBOUND", "LEFT", "LENGTH", "LGAMMA", "LIBNAME", "LIBREF", "LOG10", "LOG2", "LOGPDF", "LOGPMF", "LOGSDF", "LOG", "LOWCASE", "MAX", "MDY", "MEAN", "MINUTE", "MIN", "MOD", "MONTH", "MOPEN", "MORT", "NETPV", "NMISS", "NORMAL", "NPV", "N", "OPEN", "ORDINAL", "PATHNAME", "PDF", "PEEKC", "PEEK", "PMF", "POINT", "POISSON", "POKE", "PROBBETA", "PROBBNML", "PROBCHI", "PROBF", "PROBGAM", "PROBHYPR", "PROBIT", "PROBNEGB", "PROBNORM", "PROBT", "PUTN", "PUTC", "PUT", "QTR", "QUOTE", "RANBIN", "RANCAU", "RANEXP", "RANGAM", "RANGE", "RANK", "RANNOR", "RANPOI", "RANTBL", "RANTRI", "RANUNI", "REPEAT", "RESOLVE", "REVERSE", "REWIND", "RIGHT", "ROUND", "SAVING", "SCAN", "SDF", "SECOND", "SIGN", "SINH", "SIN", "SKEWNESS", "SOUNDEX", "SPEDIS", "SQRT", "STDERR", "STD", "STFIPS", "STNAME", "STNAMEL", "SUBSTR", "SUM", "SYMGET", "SYSGET", "SYSMSG", "SYSPROD", "SYSRC", "SYSTEM", "TANH", "TAN", "TIMEPART", "TIME", "TINV", "TNONCT", "TODAY", "TRANSLATE", "TRANWRD", "TRIGAMMA", "TRIMN", "TRIM", "TRUNC", "UNIFORM", "UPCASE", "USS", "VARFMT", "VARINFMT", "VARLABEL", "VARLEN", "VARNAME", "VARNUM", "VARRAYX", "VARRAY", "VARTYPE", "VAR", "VERIFY", "VFORMATX", "VFORMATDX", "VFORMATD", "VFORMATNX", "VFORMATN", "VFORMATWX", "VFORMATW", "VFORMAT", "VINARRAYX", "VINARRAY", "VINFORMATX", "VINFORMATDX", "VINFORMATD", "VINFORMATNX", "VINFORMATN", "VINFORMATWX", "VINFORMATW", "VINFORMAT", "VLABELX", "VLABEL", "VLENGTHX", "VLENGTH", "VNAMEX", "VNAME", "VTYPEX", "VTYPE", "WEEKDAY", "YEAR", "YYQ", "ZIPFIPS", "ZIPNAME", "ZIPNAMEL", "ZIPSTATE"],
        'keywordgroup4': ["ABORT", "ADD", "ALTER", "AND", "ARRAY", "AS", "ATTRIB", "BY", "CALL", "CARDS4", "CASCADE", "CATNAME", "CHECK", "CONTINUE", "CREATE", "DATALINES4", "DELETE", "DESCRIBE", "DISPLAY", "DISTINCT", "DM", "DROP", "ENDSAS", "FILE", "FOOTNOTE", "FOREIGN", "FORMAT", "FROM", "GOTO", "GROUP", "HAVING", "IN", "INFILE", "INFORMAT", "INSERT", "INTO", "KEEP", "KEY", "LABEL", "LEAVE", "LIKE", "LINK", "LIST", "LOSTCARD", "MERGE", "MESSAGE", "MISSING", "MODIFY", "MSGTYPE", "NOT", "NULL", "ON", "OPTIONS", "OR", "ORDER", "OUTPUT", "PAGE", "PRIMARY", "REDIRECT", "REFERENCES", "REMOVE", "RENAME", "REPLACE", "RESET", "RESTRICT", "RETAIN", "RETURN", "SELECT", "SET", "SKIP", "STARTSAS", "STOP", "SYSTASK", "TABLE", "TITLE", "UNIQUE", "UPDATE", "VALIDATE", "VIEW", "WAITSAS", "WHERE", "WINDOW", "X"],
        'keywordgroup5': ["DO", "ELSE", "END", "IF", "THEN", "UNTIL", "WHILE"],
        'keywordgroup6': ["RUN", "QUIT", "DATA"],
        'keywordgroup7': ["ERROR"],
        'keywordgroup8': ["WARNING"],
        'keywordgroup9': ["NOTE"]
}, 
    'OPERATORS' : [], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : '', 
        'QUOTESMARKS' : 'color: #a020f0;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000ff;',
        'keywordgroup2': 'color: #0000ff;',
        'keywordgroup3': 'color: #0000ff;',
        'keywordgroup4': 'color: #0000ff;',
        'keywordgroup5': 'color: #0000ff;',
        'keywordgroup6': 'color: #000080;',
        'keywordgroup7': 'color: #ff0000;',
        'keywordgroup8': 'color: #00ff00;',
        'keywordgroup9': 'color: #0000ff;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
