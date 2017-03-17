editAreaLoader.load_syntax["d"] = {
    'COMMENT_SINGLE' : {2: "///", 1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\"", 1: "\'"}, 
    'KEYWORDS' : {
        'keywordgroup1': ["break", "case", "continue", "do", "else", "for", "foreach", "goto", "if", "return", "switch", "while"],
        'keywordgroup2': ["alias", "asm", "assert", "body", "cast", "catch", "default", "delegate", "delete", "extern", "false", "finally", "function", "import", "in", "inout", "interface", "invariant", "is", "mixin", "module", "new", "null", "out", "pragma", "ref", "super", "this", "throw", "true", "try", "typedef", "typeid", "typeof", "union", "with"],
        'keywordgroup3': ["ArrayBoundsError", "AssertError", "ClassInfo", "Error", "Exception", "Interface", "ModuleInfo", "Object", "OutOfMemoryException", "SwitchError", "TypeInfo", "_d_arrayappend", "_d_arrayappendb", "_d_arrayappendc", "_d_arrayappendcb", "_d_arraycast", "_d_arraycast_frombit", "_d_arraycat", "_d_arraycatb", "_d_arraycatn", "_d_arraycopy", "_d_arraycopybit", "_d_arraysetbit", "_d_arraysetbit2", "_d_arraysetlength", "_d_arraysetlengthb", "_d_callfinalizer", "_d_create_exception_object", "_d_criticalenter", "_d_criticalexit", "_d_delarray", "_d_delclass", "_d_delinterface", "_d_delmemory", "_d_dynamic_cast", "_d_exception", "_d_exception_filter", "_d_framehandler", "_d_interface_cast", "_d_interface_vtbl", "_d_invariant", "_d_isbaseof", "_d_isbaseof2", "_d_local_unwind", "_d_monitorenter", "_d_monitorexit", "_d_monitorrelease", "_d_monitor_epilog", "_d_monitor_handler", "_d_monitor_prolog", "_d_new", "_d_newarrayi", "_d_newbitarray", "_d_newclass", "_d_obj_cmp", "_d_obj_eq", "_d_OutOfMemory", "_d_switch_dstring", "_d_switch_string", "_d_switch_ustring", "_d_throw"],
        'keywordgroup4': ["abstract", "align", "auto", "bit", "bool", "byte", "cdouble", "cent", "cfloat", "char", "class", "const", "creal", "dchar", "debug", "deprecated", "double", "enum", "export", "final", "float", "idouble", "ifloat", "int", "ireal", "long", "override", "package", "private", "protected", "ptrdiff_t", "public", "real", "short", "size_t", "static", "struct", "synchronized", "template", "ubyte", "ucent", "uint", "ulong", "unittest", "ushort", "version", "void", "volatile", "wchar"]
}, 
    'OPERATORS' : ["?", "!", ";", ":", ",", "...", "..", "+", "-", "*", "/", "%", "&", "|", "^", "<", ">", "=", "~"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #b1b100;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #aaaadd;',
        'keywordgroup4': 'color: #993333;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
