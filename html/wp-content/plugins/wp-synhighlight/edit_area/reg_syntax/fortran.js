editAreaLoader.load_syntax["fortran"] = {
    'COMMENT_SINGLE' : {1: "!", 2: "Cf2py"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["allocate", "block", "call", "case", "contains", "continue", "cycle", "deallocate", "default", "do", "else", "elseif", "elsewhere", "end", "enddo", "endif", "endwhere", "entry", "exit", "function", "go", "goto", "if", "interface", "module", "nullify", "only", "operator", "procedure", "program", "recursive", "return", "select", "stop", "subroutine", "then", "to", "where", "while", "access", "action", "advance", "blank", "blocksize", "carriagecontrol", "delim", "direct", "eor", "err", "exist", "file", "flen", "fmt", "form", "formatted", "iostat", "name", "named", "nextrec", "nml", "number", "opened", "pad", "position", "readwrite", "recl", "sequential", "status", "unformatted", "unit"],
        'keywordgroup2': [".AND.", ".EQ.", ".EQV.", ".GE.", ".GT.", ".LE.", ".LT.", ".NE.", ".NEQV.", ".NOT.", ".OR.", ".TRUE.", ".FALSE."],
        'keywordgroup3': ["allocatable", "character", "common", "complex", "data", "dimension", "double", "equivalence", "external", "implicit", "in", "inout", "integer", "intent", "intrinsic", "kind", "logical", "namelist", "none", "optional", "out", "parameter", "pointer", "private", "public", "real", "result", "save", "sequence", "target", "type", "use"],
        'keywordgroup4': ["abs", "achar", "acos", "adjustl", "adjustr", "aimag", "aint", "all", "allocated", "anint", "any", "asin", "atan", "atan2", "bit_size", "break", "btest", "carg", "ceiling", "char", "cmplx", "conjg", "cos", "cosh", "cpu_time", "count", "cshift", "date_and_time", "dble", "digits", "dim", "dot_product", "dprod dvchk", "eoshift", "epsilon", "error", "exp", "exponent", "floor", "flush", "fraction", "getcl", "huge", "iachar", "iand", "ibclr", "ibits", "ibset", "ichar", "ieor", "index", "int", "intrup", "invalop", "ior", "iostat_msg", "ishft", "ishftc", "lbound", "len", "len_trim", "lge", "lgt", "lle", "llt", "log", "log10", "matmul", "max", "maxexponent", "maxloc", "maxval", "merge", "min", "minexponent", "minloc", "minval", "mod", "modulo", "mvbits", "nbreak", "ndperr", "ndpexc", "nearest", "nint", "not", "offset", "ovefl", "pack", "precfill", "precision", "present", "product", "prompt", "radix", "random_number", "random_seed", "range", "repeat", "reshape", "rrspacing", "scale", "scan", "segment", "selected_int_kind", "selected_real_kind", "set_exponent", "shape", "sign", "sin", "sinh", "size", "spacing", "spread", "sqrt", "sum system", "system_clock", "tan", "tanh", "timer", "tiny", "transfer", "transpose", "trim", "ubound", "undfl", "unpack", "val", "verify"]
}, 
    'OPERATORS' : ["=", "+", "-", "*", "/", "!", "%", "^", "&", ":"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #666666;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #b1b100;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #000066;',
        'keywordgroup4': 'color: #993333;'    }, 
       'OPERATORS' : 'color: #339933;', 
        'DELIMITERS' : 'color: #339933;' 
    } 
}; 
