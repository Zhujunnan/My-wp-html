editAreaLoader.load_syntax["xpp"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["void", "str", "real", "int64", "int", "date", "container", "boolean", "anytype"],
        'keywordgroup2': ["window", "while", "try", "true", "throw", "switch", "super", "static", "server", "right", "return", "retry", "public", "protected", "private", "print", "pause", "null", "new", "mod", "left", "interface", "implements", "if", "for", "final", "false", "extends", "else", "edit", "do", "div", "display", "default", "continue", "client", "class", "changeCompany", "case", "breakpoint", "break", "at", "abstract"],
        'keywordgroup3': ["year", "wkofyr", "webwebpartstr", "webstaticfilestr", "websitetempstr", "websitedefstr", "webreportstr", "webpagedefstr", "weboutputcontentitemstr", "webmenustr", "webletitemstr", "webformstr", "webdisplaycontentitemstr", "webactionitemstr", "varstr", "utilmoyr", "uint2str", "typeof", "typeid", "trunc", "today", "timenow", "time2str", "term", "tanh", "tan", "tablestr", "tablestaticmethodstr", "tablepname", "tablenum", "tablename2id", "tablemethodstr", "tableid2pname", "tableid2name", "tablefieldgroupstr", "tablecollectionstr", "systemdateset", "systemdateget", "syd", "substr", "strupr", "strscan", "strrtrim", "strrep", "strrem", "strprompt", "strpoke", "strnfind", "strlwr", "strltrim", "strline", "strlen", "strkeep", "strins", "strfmt", "strfind", "strdel", "strcolseq", "strcmp", "stralpha", "str2time", "str2num", "str2int64", "str2int", "str2guid", "str2enum", "str2date", "staticmethodstr", "sln", "sleep", "sinh", "sin", "setprefix", "sessionid", "securitykeystr", "securitykeynum", "runbuf", "runas", "round", "resourcestr", "reportstr", "refprintall", "rate", "querystr", "pv", "pt", "prmisdefault", "primoyr", "prevyr", "prevqtr", "prevmth", "power", "pmt", "num2str", "num2date", "num2char", "nextyr", "nextqtr", "nextmth", "newguid", "mthofyr", "mthname", "mkdate", "minint", "min", "methodstr", "menustr", "menuitemoutputstr", "menuitemdisplaystr", "menuitemactionstr", "maxint", "maxdate", "max", "match", "logn", "log10", "literalstr", "licensecodestr", "licensecodenum", "intvnorm", "intvno", "intvname", "intvmax", "int64str", "indexstr", "indexnum", "indexname2id", "indexid2name", "idg", "identifierstr", "helpfilestr", "helpdevstr", "helpapplstr", "guid2str", "getprefix", "getCurrentUTCTime", "fv", "funcname", "frac", "formstr", "fieldstr", "fieldpname", "fieldnum", "fieldname2id", "fieldid2pname", "fieldid2name", "extendedTypeStr", "extendedTypeNum", "exp10", "exp", "evalbuf", "enumstr", "enumnum", "enumcnt", "enum2str", "endmth", "dimof", "dg", "decround", "ddb", "dayofyr", "dayofwk", "dayofmth", "dayname", "date2str", "date2num", "curuserid", "curext", "cterm", "cosh", "cos", "corrflagset", "corrflagget", "convertUTCTimeToLocalTime", "convertUTCDateToLocalDate", "conpoke", "conpeek", "connull", "conlen", "conins", "confind", "configurationkeystr", "configurationkeynum", "condel", "classstr", "classnum", "classidget", "char2num", "beep", "atan", "asin", "ascii2ansi", "any2str", "any2real", "any2int64", "any2int", "any2guid", "any2enum", "any2date", "ansi2ascii", "acos", "abs"],
        'keywordgroup4': ["where", "update_recordset", "ttsCommit", "ttsBegin", "ttsAbort", "sum", "setting", "select", "reverse", "pessimisticLock", "outer", "order by", "optimisticLock", "notExists", "noFetch", "next", "minof", "maxof", "like", "join", "insert_recordset", "index hint", "index", "group by", "from", "forUpdate", "forceSelectOrder", "forcePlaceholders", "forceNestedLoop", "forceLiterals", "flush", "firstOnly", "firstFast", "exists", "desc", "delete_from", "count", "avg", "asc"]
}, 
    'OPERATORS' : ["!", "&", "*", "^", "|", "~", "+", ",", "-", "/", ":", "<", "=", ">", "?"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #007f00;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000ff;',
        'keywordgroup2': 'color: #0000ff;',
        'keywordgroup3': 'color: #0000ff;',
        'keywordgroup4': 'color: #0000ff;'    }, 
       'OPERATORS' : 'color: #00007f;', 
        'DELIMITERS' : 'color: #00007f;' 
    } 
}; 
