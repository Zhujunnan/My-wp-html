editAreaLoader.load_syntax["c_mac"] = {
    'COMMENT_SINGLE' : {1: "//", 2: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["if", "return", "while", "case", "continue", "default", "do", "else", "for", "switch", "goto"],
        'keywordgroup2': ["NULL", "false", "break", "true", "enum", "errno", "EDOM", "ERANGE", "FLT_RADIX", "FLT_ROUNDS", "FLT_DIG", "DBL_DIG", "LDBL_DIG", "FLT_EPSILON", "DBL_EPSILON", "LDBL_EPSILON", "FLT_MANT_DIG", "DBL_MANT_DIG", "LDBL_MANT_DIG", "FLT_MAX", "DBL_MAX", "LDBL_MAX", "FLT_MAX_EXP", "DBL_MAX_EXP", "LDBL_MAX_EXP", "FLT_MIN", "DBL_MIN", "LDBL_MIN", "FLT_MIN_EXP", "DBL_MIN_EXP", "LDBL_MIN_EXP", "CHAR_BIT", "CHAR_MAX", "CHAR_MIN", "SCHAR_MAX", "SCHAR_MIN", "UCHAR_MAX", "SHRT_MAX", "SHRT_MIN", "USHRT_MAX", "INT_MAX", "INT_MIN", "UINT_MAX", "LONG_MAX", "LONG_MIN", "ULONG_MAX", "HUGE_VAL", "SIGABRT", "SIGFPE", "SIGILL", "SIGINT", "SIGSEGV", "SIGTERM", "SIG_DFL", "SIG_ERR", "SIG_IGN", "BUFSIZ", "EOF", "FILENAME_MAX", "FOPEN_MAX", "L_tmpnam", "SEEK_CUR", "SEEK_END", "SEEK_SET", "TMP_MAX", "stdin", "stdout", "stderr", "EXIT_FAILURE", "EXIT_SUCCESS", "RAND_MAX", "CLOCKS_PER_SEC", "kCFAllocatorDefault"],
        'keywordgroup3': ["printf", "fprintf", "snprintf", "sprintf", "assert", "isalnum", "isalpha", "isdigit", "iscntrl", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "exp", "log", "log10", "pow", "sqrt", "ceil", "floor", "fabs", "ldexp", "frexp", "modf", "fmod", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "sinh", "cosh", "tanh", "setjmp", "longjmp", "va_start", "va_arg", "va_end", "offsetof", "sizeof", "fopen", "freopen", "fflush", "fclose", "remove", "rename", "tmpfile", "tmpname", "setvbuf", "setbuf", "vfprintf", "vprintf", "vsprintf", "fscanf", "scanf", "sscanf", "fgetc", "fgets", "fputc", "fputs", "getc", "getchar", "gets", "putc", "putchar", "puts", "ungetc", "fread", "fwrite", "fseek", "ftell", "rewind", "fgetpos", "fsetpos", "clearerr", "feof", "ferror", "perror", "abs", "labs", "div", "ldiv", "atof", "atoi", "atol", "strtod", "strtol", "strtoul", "calloc", "malloc", "realloc", "free", "abort", "exit", "atexit", "system", "getenv", "bsearch", "qsort", "rand", "srand", "strcpy", "strncpy", "strcat", "strncat", "strcmp", "strncmp", "strcoll", "strchr", "strrchr", "strspn", "strcspn", "strpbrk", "strstr", "strlen", "strerror", "strtok", "strxfrm", "memcpy", "memmove", "memcmp", "memchr", "memset", "clock", "time", "difftime", "mktime", "asctime", "ctime", "gmtime", "localtime", "strftime"],
        'keywordgroup4': ["auto", "char", "const", "double", "float", "int", "long", "register", "short", "signed", "static", "string", "struct", "typedef", "union", "unsigned", "void", "volatile", "extern", "jmp_buf", "signal", "raise", "va_list", "ptrdiff_t", "size_t", "FILE", "fpos_t", "div_t", "ldiv_t", "clock_t", "time_t", "tm", "CFArrayRef", "CFDictionaryRef", "CFMutableDictionaryRef", "CFBundleRef", "CFSetRef", "CFStringRef", "CFURLRef", "CFLocaleRef", "CFDateFormatterRef", "CFNumberFormatterRef", "CFPropertyListRef", "CFTreeRef", "CFWriteStreamRef", "CFCharacterSetRef", "CFMutableStringRef", "CFNotificationRef", "CFReadStreamRef", "CFNull", "CFAllocatorRef", "CFBagRef", "CFBinaryHeapRef", "CFBitVectorRef", "CFBooleanRef", "CFDataRef", "CFDateRef", "CFMachPortRef", "CFMessagePortRef", "CFMutableArrayRef", "CFMutableBagRef", "CFMutableBitVectorRef", "CFMutableCharacterSetRef", "CFMutableDataRef", "CFMutableSetRef", "CFNumberRef", "CFPlugInRef", "CFPlugInInstanceRef", "CFRunLoopRef", "CFRunLoopObserverRef", "CFRunLoopSourceRef", "CFRunLoopTimerRef", "CFSocketRef", "CFTimeZoneRef", "CFTypeRef", "CFUserNotificationRef", "CFUUIDRef", "CFXMLNodeRef", "CFXMLParserRef", "CFXMLTreeRef"]
}, 
    'OPERATORS' : ["=", "+", "-", "*", "/", "!", "%", "^", "&", ":"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #ff0000;', 
        'QUOTESMARKS' : 'color: #666666;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000ff;',
        'keywordgroup2': 'color: #0000ff;',
        'keywordgroup3': 'color: #0000dd;',
        'keywordgroup4': 'color: #0000ff;'    }, 
       'OPERATORS' : 'color: #000000;', 
        'DELIMITERS' : 'color: #000000;' 
    } 
}; 
