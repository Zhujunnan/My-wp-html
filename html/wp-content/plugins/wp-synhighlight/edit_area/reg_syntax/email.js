editAreaLoader.load_syntax["email"] = {
    'COMMENT_SINGLE' : {}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["HTTP", "SMTP", "ASMTP", "ESMTP"],
        'keywordgroup2': ["Content-Type", "Content-Transfer-Encoding", "Content-Disposition", "Delivered-To", "Dkim-Signature", "Domainkey-Signature", "In-Reply-To", "Message-Id", "MIME-Version", "Received", "Received-SPF", "References", "Resend-From", "Resend-To", "Return-Path"],
        'keywordgroup3': ["Date", "From", "Subject", "To"],
        'keywordgroup4': ["by", "for", "from", "id", "with"]
}, 
    'OPERATORS' : [":", ";", "<", ">"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : '', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000FF;',
        'keywordgroup2': 'color: #000000;',
        'keywordgroup3': 'color: #800000;',
        'keywordgroup4': ''    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
