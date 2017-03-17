editAreaLoader.load_syntax["bibtex"] = {
    'COMMENT_SINGLE' : {1: "%%"}, 
    'COMMENT_MULTI' : {}, 
    'QUOTEMARKS' : {}, 
    'KEYWORDS' : {
        'keywordgroup0': ["@comment", "@preamble", "@string"],
        'keywordgroup1': ["@article", "@book", "@booklet", "@conference", "@inbook", "@incollection", "@inproceedings", "@manual", "@mastersthesis", "@misc", "@phdthesis", "@proceedings", "@techreport", "@unpublished"],
        'keywordgroup2': ["@collection", "@patent", "@webpage"],
        'keywordgroup3': ["address", "annote", "author", "booktitle", "chapter", "crossref", "edition", "editor", "howpublished", "institution", "journal", "key", "month", "note", "number", "organization", "pages", "publisher", "school", "series", "title", "type", "volume", "year"],
        'keywordgroup4': ["abstract", "affiliation", "chaptername", "cited-by", "cites", "contents", "copyright", "date-added", "date-modified", "doi", "eprint", "isbn", "issn", "keywords", "language", "lccn", "lib-congress", "location", "price", "rating", "read", "size", "source", "url"]
}, 
    'OPERATORS' : ["#", "=", ","], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #2C922C;', 
        'QUOTESMARKS' : 'color: #2020C0;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #C02020;',
        'keywordgroup2': 'color: #C02020;',
        'keywordgroup3': 'color: #C08020;',
        'keywordgroup4': 'color: #C08020;'    }, 
       'OPERATORS' : 'color: #E02020;', 
        'DELIMITERS' : 'color: #E02020;' 
    } 
}; 
