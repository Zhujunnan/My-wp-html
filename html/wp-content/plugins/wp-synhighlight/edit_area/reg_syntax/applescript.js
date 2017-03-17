editAreaLoader.load_syntax["applescript"] = {
    'COMMENT_SINGLE' : {1: "--"}, 
    'COMMENT_MULTI' : {"(*": "*)"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["application", "close", "count", "delete", "duplicate", "exists", "launch", "make", "move", "open", "print", "quit", "reopen", "run", "save", "saving", "idle", "path to", "number", "alias", "list", "text", "string", "integer", "it", "me", "version", "pi", "result", "space", "tab", "anything", "case", "diacriticals", "expansion", "hyphens", "punctuation", "bold", "condensed", "expanded", "hidden", "italic", "outline", "plain", "shadow", "strikethrough", "subscript", "superscript", "underline", "ask", "no", "yes", "false", "id", "true", "weekday", "monday", "mon", "tuesday", "tue", "wednesday", "wed", "thursday", "thu", "friday", "fri", "saturday", "sat", "sunday", "sun", "month", "january", "jan", "february", "feb", "march", "mar", "april", "apr", "may", "june", "jun", "july", "jul", "august", "aug", "september", "quote", "do JavaScript", "sep", "october", "oct", "november", "nov", "december", "dec", "minutes", "hours", "name", "default answer", "days", "weeks", "folder", "folders", "file", "files", "window", "eject", "disk", "reveal", "sleep", "shut down", "restart", "display dialog", "buttons", "invisibles", "item", "items", "delimiters", "offset of", "AppleScript\'s", "choose file", "choose folder", "choose from list", "beep", "contents", "do shell script", "paragraph", "paragraphs", "missing value", "quoted form", "desktop", "POSIX path", "POSIX file", "activate", "document", "adding", "receiving", "content", "new", "properties", "info for", "bounds", "selection", "extension", "into", "onto", "by", "between", "against", "set the clipboard to", "the clipboard"],
        'keywordgroup2': ["each", "some", "every", "whose", "where", "index", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "last", "front", "back", "st", "nd", "rd", "th", "middle", "named", "through", "thru", "before", "after", "beginning", "the", "as", "div", "mod", "and", "not", "or", "contains", "equal", "equals", "isnt", "less", "greater"],
        'keywordgroup3': ["script", "property", "prop", "end", "to", "set", "global", "local", "on", "of", "in", "given", "with", "without", "return", "continue", "tell", "if", "then", "else", "repeat", "times", "while", "until", "from", "exit", "try", "error", "considering", "ignoring", "timeout", "transaction", "my", "get", "put", "is", "copy"]
}, 
    'OPERATORS' : ["+", "-", "^", "*", "/", "&", "<", ">=", "<", "<=", "=", "�"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #009900;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0066ff;',
        'keywordgroup2': 'color: #ff0033;',
        'keywordgroup3': 'color: #ff0033;'    }, 
       'OPERATORS' : 'color: #000000;', 
        'DELIMITERS' : 'color: #000000;' 
    } 
}; 
