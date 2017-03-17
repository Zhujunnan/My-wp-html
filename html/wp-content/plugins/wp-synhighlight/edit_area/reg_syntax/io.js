editAreaLoader.load_syntax["io"] = {
    'COMMENT_SINGLE' : {1: "//", 2: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["and", "break", "else", "elseif", "exit", "for", "foreach", "if", "ifFalse", "ifNil", "ifTrue", "or", "pass", "raise", "return", "then", "try", "wait", "while", "yield"],
        'keywordgroup2': ["activate", "activeCoroCount", "asString", "block", "catch", "clone", "collectGarbage", "compileString", "continue", "do", "doFile", "doMessage", "doString", "forward", "getSlot", "getenv", "hasSlot", "isActive", "isNil", "isResumable", "list", "message", "method", "parent", "pause", "perform", "performWithArgList", "print", "proto", "raiseResumable", "removeSlot", "resend", "resume", "schedulerSleepSeconds", "self", "sender", "setSchedulerSleepSeconds", "setSlot", "shallowCopy", "slotNames", "super", "system", "thisBlock", "thisContext", "thisMessage", "type", "uniqueId", "updateSlot", "write"],
        'keywordgroup3': ["Array", "AudioDevice", "AudioMixer", "Block", "Box", "Buffer", "CFunction", "CGI", "Color", "Curses", "DBM", "DNSResolver", "DOConnection", "DOProxy", "DOServer", "Date", "Directory", "Duration", "DynLib", "Error", "Exception", "FFT", "File", "Fnmatch", "Font", "Future", "GL", "GLE", "GLScissor", "GLU", "GLUCylinder", "GLUQuadric", "GLUSphere", "GLUT", "Host", "Image", "Importer", "LinkList", "List", "Lobby", "Locals", "MD5", "MP3Decoder", "MP3Encoder", "Map", "Message", "Movie", "NULL", "Nil", "Nop", "Notifiction", "Number", "Object", "OpenGL", "Point", "Protos", "Regex", "SGMLTag", "SQLite", "Server", "ShowMessage", "SleepyCat", "SleepyCatCursor", "Socket", "SocketManager", "Sound", "Soup", "Store", "String", "Tree", "UDPSender", "UDPReceiver", "URL", "User", "Warning", "WeakLink"]
}, 
    'OPERATORS' : ["!", "@", "%", "&", "*", "|", "/", "<", ">"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #b1b100;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #000066;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
