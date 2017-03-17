editAreaLoader.load_syntax["verilog"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["always", "and", "assign", "begin", "buf", "bufif0", "bufif1", "case", "casex", "casez", "cmos", "deassign", "default", "defparam", "disable", "edge", "else", "end", "endcase", "endfunction", "endmodule", "endprimitive", "endspecify", "endtable", "endtask", "event", "for", "force", "forever", "function", "highz0", "highz1", "if", "ifnone", "initial", "inout", "input", "integer", "join", "large", "macromodule", "medium", "module", "nand", "negedge", "nmos", "nor", "not", "notif0", "notif1", "or", "output", "parameter", "pmos", "posedge", "primitive", "pull0", "pull1", "pulldown", "pullup", "rcmos", "real", "realtime", "reg", "release", "repeat", "rnmos", "rpmos", "rtran", "rtranif0", "rtranif1", "scalared", "small", "specify", "specparam", "strong0", "strong1", "supply0", "supply1", "table", "task", "time", "tran", "tranif0", "tranif1", "tri", "tri0", "tri1", "triand", "trior", "trireg", "vectored", "wait", "wand", "weak0", "weak1", "while", "wire", "wor", "xnor", "xor"],
        'keywordgroup2': ["$display", "$monitor", "$dumpall", "$dumpfile", "$dumpflush", "$dumplimit", "$dumpoff", "$dumpon", "$dumpvars", "$fclose", "$fdisplay", "$fopen", "$finish", "$fmonitor", "$fstrobe", "$fwrite", "$fgetc", "$ungetc", "$fgets", "$fscanf", "$fread", "$ftell", "$fseek", "$frewind", "$ferror", "$fflush", "$feof", "$random", "$readmemb", "$readmemh", "$readmemx", "$signed", "$stime", "$stop", "$strobe", "$time", "$unsigned", "$write"],
        'keywordgroup3': ["`default-net", "`define", "`celldefine", "`default_nettype", "`else", "`elsif", "`endcelldefine", "`endif", "`ifdef", "`ifndef", "`include", "`line", "`nounconnected_drive", "`resetall", "`timescale", "`unconnected_drive", "`undef"]
}, 
    'OPERATORS' : ["=", "+", "-", "*", "/", "!", "%", "^", "&", "|", "~", "?", ":", "#", "<<", "<<<", ">", "<", ">=", "<=", "@", ";", ","], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #00008B;', 
        'QUOTESMARKS' : 'color: #FF00FF;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #A52A2A;',
        'keywordgroup2': 'color: #9932CC;',
        'keywordgroup3': 'color: #008800;'    }, 
       'OPERATORS' : 'color: #5D478B;', 
        'DELIMITERS' : 'color: #5D478B;' 
    } 
}; 
