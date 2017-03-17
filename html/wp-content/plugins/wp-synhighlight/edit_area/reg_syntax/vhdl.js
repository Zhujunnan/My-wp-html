editAreaLoader.load_syntax["vhdl"] = {
    'COMMENT_SINGLE' : {1: "--"}, 
    'COMMENT_MULTI' : {"%": "%"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["access", "after", "alias", "all", "assert", "attribute", "architecture", "begin", "block", "body", "buffer", "bus", "case", "component", "configuration", "constant", "disconnect", "downto", "else", "elsif", "end", "entity", "exit", "file", "for", "function", "generate", "generic", "group", "guarded", "if", "impure", "in", "inertial", "inout", "is", "label", "library", "linkage", "literal", "loop", "map", "new", "next", "null", "of", "on", "open", "others", "out", "package", "port", "postponed", "procedure", "process", "pure", "range", "record", "register", "reject", "report", "return", "select", "severity", "signal", "shared", "subtype", "then", "to", "transport", "type", "unaffected", "units", "until", "use", "variable", "wait", "when", "while", "with", "note", "warning", "error", "failure", "and", "or", "xor", "not", "nor", "used", "memory", "segments", "dff", "dffe", "help_id", "mod", "info", "latch", "rising_edge", "falling_edge"],
        'keywordgroup2': ["bit", "bit_vector", "character", "boolean", "integer", "real", "time", "string", "severity_level", "positive", "natural", "signed", "unsigned", "line", "text", "std_logic", "std_logic_vector", "std_ulogic", "std_ulogic_vector", "qsim_state", "qsim_state_vector", "qsim_12state", "qsim_12state_vector", "qsim_strength", "mux_bit", "mux_vector", "reg_bit", "reg_vector", "wor_bit", "wor_vector", "work", "ieee", "std_logic_signed", "std_logic_1164", "std_logic_arith", "numeric_std"]
}, 
    'OPERATORS' : [";", ":", "<", ">", "=", "<=", ":=", "=>", "=="], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #008000;', 
        'QUOTESMARKS' : 'color: #7f007f;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #000080;',
        'keywordgroup2': 'color: #0000ff;'    }, 
       'OPERATORS' : 'color: #000066;', 
        'DELIMITERS' : 'color: #000066;' 
    } 
}; 
