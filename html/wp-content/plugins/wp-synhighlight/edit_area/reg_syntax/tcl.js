editAreaLoader.load_syntax["tcl"] = {
    'COMMENT_SINGLE' : {1: "#"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\"", 1: "\'"}, 
    'KEYWORDS' : {
        'keywordgroup1': ["proc", "global", "upvar", "if", "then", "else", "elseif", "for", "foreach", "break", "continue", "while", "set", "eval", "case", "in", "switch", "default", "exit", "error", "return", "uplevel", "loop", "for_array_keys", "for_recursive_glob", "for_file", "unwind_protect", "expr", "catch", "namespace", "rename", "variable", "method", "itcl_class", "public", "protected"],
        'keywordgroup2': ["append", "binary", "format", "re_syntax", "regexp", "regsub", "scan", "string", "subst", "concat", "join", "lappend", "lindex", "list", "llength", "lrange", "lreplace", "lsearch", "lset", "lsort", "split", "incr", "close", "eof", "fblocked", "fconfigure", "fcopy", "file", "fileevent", "flush", "gets", "open", "puts", "read", "seek", "socket", "tell", "load", "loadTk", "package", "pgk::create", "pgk_mkIndex", "source", "bgerror", "history", "info", "interp", "memory", "unknown", "enconding", "http", "msgcat", "cd", "clock", "exec", "glob", "pid", "pwd", "time", "dde", "registry", "resource", "$argc", "$argv", "$errorCode", "$errorInfo", "$argv0", "$auto_index", "$auto_oldpath", "$auto_path", "$env", "$tcl_interactive", "$tcl_libpath", "$tcl_library", "$tcl_pkgPath", "$tcl_platform", "$tcl_precision", "$tcl_traceExec"],
        'keywordgroup3': ["comment", "filename", "library", "packagens", "tcltest", "tclvars"]
}, 
    'OPERATORS' : ["$", "*", "&", "%", "!", ";", "<", ">", "?"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #483d8b;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #ff7700;',
        'keywordgroup2': 'color: #008000;',
        'keywordgroup3': 'color: #dc143c;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
