editAreaLoader.load_syntax["klonec"] = {
    'COMMENT_SINGLE' : {1: "//", 2: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/", "<!--": "-->"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["if", "return", "while", "case", "class", "continue", "default", "do", "else", "for", "switch", "goto", "null", "break", "true", "enum", "extern", "inline", "false"],
        'keywordgroup2': ["out", "request", "response"],
        'keywordgroup3': ["printf", "malloc", "fopen", "fclose", "free", "fputs", "fgets", "feof", "fwrite", "perror", "ferror", "qsort", "stats", "sscanf", "scanf", "strdup", "strcpy", "strcmp", "strncpy", "strcasecmp", "cat", "strcat", "strstr", "strlen", "strtof", "strtod", "strtok", "towlower", "towupper", "cd", "system", "exit", "exec", "fork", "vfork", "kill", "signal", "syslog", "usleep", "utime", "wait", "waitpid", "waitid", "ceil", "eval", "round", "floor", "atoi", "atol", "abs", "cos", "sin", "tan", "acos", "asin", "atan", "exp", "time", "ctime", "localtime", "asctime", "gmtime", "difftime", "date"],
        'keywordgroup4': ["request_get_cookies", "request_get_cookie", "request_get_args", "request_get_arg", "request_io", "request_get_uri", "request_get_filename", "request_get_query_string", "request_get_path_info", "request_get_if_modified_since", "request_get_http", "request_get_client_request", "request_get_content_length", "request_get_uploads", "request_get_uploaded_file", "request_get_method", "request_get_protocol", "request_get_resolved_filename", "request_get_resolved_path_info", "request_get_addr", "request_get_peer_addr", "request_get_header", "request_get_field", "request_get_field_value", "response_set_content_encoding", "response_disable_caching", "response_enable_caching", "response_set_cookie", "response_set_method", "response_get_method", "response_print_header", "response_set_field", "response_del_field", "response_set_content_type", "response_set_date", "response_set_last_modified", "response_set_content_length", "response_get_status", "response_get_header", "response_io", "response_redirect", "response_set_status", "session_get_vars", "session_get", "session_set", "session_age", "session_clean", "session_del", "io_type", "io_pipe", "io_dup", "io_copy", "io_seek", "io_tell", "io_close", "io_free", "io_read", "io_printf", "io_flush", "io_write", "io_putc", "io_getc", "io_get_until", "io_gets", "io_codec_add_head", "io_codec_add_tail", "io_codecs_remove", "io_name_set", "io_name_get"],
        'keywordgroup5': ["auto", "char", "const", "double", "float", "int", "long", "register", "short", "signed", "sizeof", "static", "string", "struct", "typedef", "union", "unsigned", "void", "volatile", "wchar_t", "time_t", "FILE"],
        'keywordgroup6': ["a", "abbr", "acronym", "address", "applet", "base", "basefont", "bdo", "big", "blockquote", "body", "br", "button", "b", "caption", "center", "cite", "code", "colgroup", "col", "dd", "del", "dfn", "dir", "div", "dl", "dt", "em", "fieldset", "font", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "html", "iframe", "ilayer", "img", "input", "ins", "isindex", "i", "kbd", "label", "legend", "link", "li", "map", "meta", "noframes", "noscript", "object", "ol", "optgroup", "option", "param", "pre", "p", "q", "samp", "script", "select", "small", "span", "strike", "strong", "style", "sub", "sup", "s", "table", "tbody", "td", "textarea", "text", "tfoot", "thead", "th", "title", "tr", "tt", "ul", "u", "var"],
        'keywordgroup7': ["abbr", "accept-charset", "accept", "accesskey", "action", "align", "alink", "alt", "archive", "axis", "background", "bgcolor", "border", "cellpadding", "cellspacing", "char", "charoff", "charset", "checked", "cite", "class", "classid", "clear", "code", "codebase", "codetype", "color", "cols", "colspan", "compact", "content", "coords", "data", "datetime", "declare", "defer", "dir", "disabled", "enctype", "face", "for", "frame", "frameborder", "headers", "height", "href", "hreflang", "hspace", "http-equiv", "id", "ismap", "label", "lang", "language", "link", "longdesc", "marginheight", "marginwidth", "maxlength", "media", "method", "multiple", "name", "nohref", "noresize", "noshade", "nowrap", "object", "onblur", "onchange", "onclick", "ondblclick", "onfocus", "onkeydown", "onkeypress", "onkeyup", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onreset", "onselect", "onsubmit", "onunload", "profile", "prompt", "readonly", "rel", "rev", "rowspan", "rows", "rules", "scheme", "scope", "scrolling", "selected", "shape", "size", "span", "src", "standby", "start", "style", "summary", "tabindex", "target", "text", "title", "type", "usemap", "valign", "value", "valuetype", "version", "vlink", "vspace", "width"]
}, 
    'OPERATORS' : ["Array", "Array"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #b1b100;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #6600FF;',
        'keywordgroup4': 'color: #6600FF;',
        'keywordgroup5': 'color: #0099FF;',
        'keywordgroup6': 'color: #990099;',
        'keywordgroup7': 'color: #000066;'    }, 
       'OPERATORS' : 'color: #000000;', 
        'DELIMITERS' : 'color: #000000;' 
    } 
}; 
