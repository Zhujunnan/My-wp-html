editAreaLoader.load_syntax["smarty"] = {
    'COMMENT_SINGLE' : {}, 
    'COMMENT_MULTI' : {"{*": "*}"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["$smarty", "now", "const", "capture", "config", "section", "foreach", "template", "version", "ldelim", "rdelim", "foreachelse", "include", "include_php", "insert", "if", "elseif", "else", "php", "sectionelse", "is_cached"],
        'keywordgroup2': ["capitalize", "count_characters", "cat", "count_paragraphs", "count_sentences", "count_words", "date_format", "default", "escape", "indent", "lower", "nl2br", "regex_replace", "replace", "spacify", "string_format", "strip", "strip_tags", "truncate", "upper", "wordwrap"],
        'keywordgroup3': ["counter", "cycle", "debug", "eval", "html_checkboxes", "html_image", "html_options", "html_radios", "html_select_date", "html_select_time", "html_table", "math", "mailto", "popup_init", "popup", "textformat"],
        'keywordgroup4': ["$template_dir", "$compile_dir", "$config_dir", "$plugins_dir", "$debugging", "$debug_tpl", "$debugging_ctrl", "$autoload_filters", "$compile_check", "$force_compile", "$caching", "$cache_dir", "$cache_lifetime", "$cache_handler_func", "$cache_modified_check", "$config_overwrite", "$config_booleanize", "$config_read_hidden", "$config_fix_newlines", "$default_template_handler_func", "$php_handling", "$security", "$secure_dir", "$security_settings", "$trusted_dir", "$left_delimiter", "$right_delimiter", "$compiler_class", "$request_vars_order", "$request_use_auto_globals", "$error_reporting", "$compile_id", "$use_sub_dirs", "$default_modifiers", "$default_resource_type"],
        'keywordgroup5': ["append", "append_by_ref", "assign", "assign_by_ref", "clear_all_assign", "clear_all_cache", "clear_assign", "clear_cache", "clear_compiled_tpl", "clear_config", "config_load", "display", "fetch", "get_config_vars", "get_registered_object", "get_template_vars", "load_filter", "register_block", "register_compiler_function", "register_function", "register_modifier", "register_object", "register_outputfilter", "register_postfilter", "register_prefilter", "register_resource", "trigger_error", "template_exists", "unregister_block", "unregister_compiler_function", "unregister_function", "unregister_modifier", "unregister_object", "unregister_outputfilter", "unregister_postfilter", "unregister_prefilter", "unregister_resource"],
        'keywordgroup6': ["name", "file", "scope", "global", "key", "once", "script", "loop", "start", "step", "max", "show", "values", "value", "from", "item"],
        'keywordgroup7': ["eq", "neq", "ne", "lte", "gte", "ge", "le", "not", "mod"],
        'keywordgroup8': ["isset", "is_array", "empty", "count", "sizeof"]
}, 
    'OPERATORS' : ["/", "=", "==", "!=", ">", "<", ">=", "<=", "!", "%"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : '', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0600FF;',
        'keywordgroup2': 'color: #008000;',
        'keywordgroup3': 'color: #0600FF;',
        'keywordgroup4': 'color: #804040;',
        'keywordgroup5': 'color: #008000;',
        'keywordgroup6': 'color: #6A0A0A;',
        'keywordgroup7': 'color: #D36900;',
        'keywordgroup8': 'color: #0600FF;'    }, 
       'OPERATORS' : 'color: #D36900;', 
        'DELIMITERS' : 'color: #D36900;' 
    } 
}; 
