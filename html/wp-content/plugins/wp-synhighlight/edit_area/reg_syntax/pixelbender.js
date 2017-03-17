editAreaLoader.load_syntax["pixelbender"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["languageVersion", "kernel"],
        'keywordgroup2': ["import", "parameter", "dependent", "const", "input", "output", "evaluatePixel", "evaluateDependents", "needed", "changed", "generated"],
        'keywordgroup3': ["bool", "bool2", "bool3", "bool4", "int", "int2", "int3", "int4", "float", "float2", "float3", "float4", "float2x2", "float3x3", "float4x4", "pixel2", "pixel3", "pixel4", "region", "image1", "image2", "image3", "image4", "imageRef", "void"],
        'keywordgroup4': ["in", "out", "inout", "if", "else", "for", "while", "do", "break", "continue", "return"],
        'keywordgroup5': ["radians", "degrees", "sin", "cos", "tan", "asin", "acos", "atan", "pow", "exp", "exp2", "log", "log2", "sqrt", "inverseSqrt", "abs", "sign", "floor", "ceil", "fract", "mod", "min", "max", "step", "clamp", "mix", "smoothStep", "length", "distance", "dot", "cross", "normalize", "matrixCompMult", "lessThan", "lessThanEqual", "greaterThan", "greaterThanEqual", "equal", "notEqual", "any", "all", "not", "nowhere", "everywhere", "transform", "union", "intersect", "outset", "inset", "bounds", "isEmpty", "sample", "sampleLinear", "sampleNearest", "outCoord", "dod", "pixelSize", "pixelAspectRatio"],
        'keywordgroup6': ["namespace", "vendor", "version", "minValue", "maxValue", "defaultValue", "description"],
        'keywordgroup7': ["#if", "#endif", "#ifdef", "#elif", "defined", "#define", "AIF_ATI", "AIF_NVIDIA", "AIF_FLASH_TARGET"]
}, 
    'OPERATORS' : ["!", "%", "&", "|", "+", "-", "*", "/", "=", "<", ">", "?", ":"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #009900;', 
        'QUOTESMARKS' : 'color: #990000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0033ff;',
        'keywordgroup2': 'color: #0033ff;',
        'keywordgroup3': 'color: #0033ff;',
        'keywordgroup4': 'color: #9900cc;',
        'keywordgroup5': 'color: #333333;',
        'keywordgroup6': 'color: #666666;',
        'keywordgroup7': 'color: #990000;'    }, 
       'OPERATORS' : 'color: #000000;', 
        'DELIMITERS' : 'color: #000000;' 
    } 
}; 
