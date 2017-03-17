editAreaLoader.load_syntax["scheme"] = {
    'COMMENT_SINGLE' : {1: ";"}, 
    'COMMENT_MULTI' : {"#|": "|#"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["abs", "acos", "and", "angle", "append", "appply", "approximate", "asin", "assoc", "assq", "assv", "atan", "begin", "boolean?", "bound-identifier=?", "caar", "caddr", "cadr", "call-with-current-continuation", "call-with-input-file", "call-with-output-file", "call/cc", "car", "case", "catch", "cdddar", "cddddr", "cdr", "ceiling", "char->integer", "char-alphabetic?", "char-ci<=?", "char-ci<?", "char-ci?", "char-ci>=?", "char-ci>?", "char-ci=?", "char-downcase", "char-lower-case?", "char-numeric", "char-ready", "char-ready?", "char-upcase", "char-upper-case?", "char-whitespace?", "char<=?", "char<?", "char=?", "char>=?", "char>?", "char?", "close-input-port", "close-output-port", "complex?", "cond", "cons", "construct-identifier", "cos", "current-input-port", "current-output-port", "d", "define", "define-syntax", "delay", "denominator", "display", "do", "e", "eof-object?", "eq?", "equal?", "eqv?", "even?", "exact->inexact", "exact?", "exp", "expt", "else", "f", "floor", "for-each", "force", "free-identifer=?", "gcd", "gen-counter", "gen-loser", "generate-identifier", "identifier->symbol", "identifier", "if", "imag-part", "inexact->exact", "inexact?", "input-port?", "integer->char", "integer?", "integrate-system", "l", "lambda", "last-pair", "lcm", "length", "let", "let*", "letrec", "list", "list->string", "list->vector", "list-ref", "list-tail", "list?", "load", "log", "magnitude", "make-polar", "make-promise", "make-rectangular", "make-string", "make-vector", "map", "map-streams", "max", "member", "memq", "memv", "min", "modulo", "negative", "newline", "nil", "not", "null?", "number->string", "number?", "numerator", "odd?", "open-input-file", "open-output-file", "or", "output-port", "pair?", "peek-char", "positive?", "procedure?", "quasiquote", "quote", "quotient", "rational", "rationalize", "read", "read-char", "real-part", "real?", "remainder", "return", "reverse", "s", "sequence", "set!", "set-char!", "set-cdr!", "sin", "sqrt", "string", "string->list", "string->number", "string->symbol", "string-append", "string-ci<=?", "string-ci<?", "string-ci=?", "string-ci>=?", "string-ci>?", "string-copy", "string-fill!", "string-length", "string-ref", "string-set!", "string<=?", "string<?", "string=?", "string>=?", "string>?", "string?", "substring", "symbol->string", "symbol?", "syntax", "syntax-rules", "t", "tan", "template", "transcript-off", "transcript-on", "truncate", "unquote", "unquote-splicing", "unwrap-syntax", "vector", "vector->list", "vector-fill!", "vector-length", "vector-ref", "vector-set!", "vector?", "with-input-from-file", "with-output-to-file", "write", "write-char", "zero?"]
}, 
    'OPERATORS' : ["!", "%", "^", "&", "/", "+", "-", "*", "=", "<", ">", ";", "|"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #b1b100;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
