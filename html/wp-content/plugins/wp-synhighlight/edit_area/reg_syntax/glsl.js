editAreaLoader.load_syntax["glsl"] = {
    'COMMENT_SINGLE' : {1: "//", 2: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["if", "else", "for", "while", "do", "break", "continue", "asm", "switch", "case", "default", "return", "discard", "namespace", "using", "sizeof", "cast"],
        'keywordgroup2': ["const", "uniform", "attribute", "centroid", "varying", "invariant", "in", "out", "inout", "input", "output", "typedef", "volatile", "public", "static", "extern", "external", "packed", "inline", "noinline", "noperspective", "flat"],
        'keywordgroup3': ["void", "bool", "int", "long", "short", "float", "half", "fixed", "unsigned", "lowp", "mediump", "highp", "precision", "vec2", "vec3", "vec4", "bvec2", "bvec3", "bvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "hvec2", "hvec3", "hvec4", "ivec2", "ivec3", "ivec4", "mat2", "mat3", "mat4", "mat2x2", "mat3x2", "mat4x2", "mat2x3", "mat3x3", "mat4x3", "mat2x4", "mat3x4", "mat4x4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "class", "union", "enum", "interface", "template"],
        'keywordgroup4': ["this", "false", "true"],
        'keywordgroup5': ["radians", "degrees", "sin", "cos", "tan", "asin", "acos", "atan", "pow", "exp2", "log2", "sqrt", "inversesqrt", "abs", "sign", "ceil", "floor", "fract", "mod", "min", "max", "clamp", "mix", "step", "smoothstep", "length", "distance", "dot", "cross", "normalize", "ftransform", "faceforward", "reflect", "matrixCompMult", "equal", "lessThan", "lessThanEqual", "greaterThan", "greaterThanEqual", "notEqual", "any", "all", "not", "texture1D", "texture1DProj", "texture1DLod", "texture1DProjLod", "texture2D", "texture2DProj", "texture2DLod", "texture2DProjLod", "texture3D", "texture3DProj", "texture3DLod", "texture3DProjLod", "textureCube", "textureCubeLod", "shadow1D", "shadow1DProj", "shadow1DLod", "shadow1DProjLod", "shadow2D", "shadow2DProj", "shadow2DLod", "shadow2DProjLod", "noise1", "noise2", "noise3", "noise4"],
        'keywordgroup6': ["gl_Position", "gl_PointSize", "gl_ClipVertex", "gl_FragColor", "gl_FragData", "gl_FragDepth", "gl_FragCoord", "gl_FrontFacing", "gl_Color", "gl_SecondaryColor", "gl_Normal", "gl_Vertex", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_FogCoord", "gl_MaxLights", "gl_MaxClipPlanes", "gl_MaxTextureUnits", "gl_MaxTextureCoords", "gl_MaxVertexAttribs", "gl_MaxVaryingFloats", "gl_MaxVertexUniformComponents", "gl_MaxVertexTextureImageUnits", "gl_MaxCombinedTextureImageUnits", "gl_MaxTextureImageUnits", "gl_MaxFragmentUniformComponents", "gl_MaxDrawBuffers", "gl_Point", "gl_ModelViewMatrix", "gl_ProjectionMatrix", "gl_FrontMaterial", "gl_ModelViewProjectionMatrix", "gl_TextureMatrix", "gl_ClipPlane", "gl_NormalMatrix", "gl_ModelViewMatrixInverse", "gl_BackMaterial", "gl_ProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverse", "gl_TextureMatrixInverse", "gl_ModelViewMatrixTranspose", "gl_Fog", "gl_ProjectionMatrixTranspose", "gl_NormalScale", "gl_DepthRange", "gl_odelViewProjectionMatrixTranspose", "gl_TextureMatrixTranspose", "gl_ModelViewMatrixInverseTranspose", "gl_LightSource", "gl_ProjectionMatrixInverseTranspose", "gl_LightModel", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_TexCoord", "gl_TextureMatrixInverseTranspose", "gl_TextureEnvColor", "gl_FrontLightModelProduct", "gl_BackLightModelProduct", "gl_FrontLightProduct", "gl_BackLightProduct", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_ObjectPlaneR", "gl_ObjectPlaneQ", "gl_EyePlaneS", "gl_EyePlaneT", "gl_EyePlaneR", "gl_EyePlaneQ", "gl_FrontColor", "gl_BackColor", "gl_FrontSecondaryColor", "gl_BackSecondaryColor", "gl_FogFragCoord", "gl_PointCoord"]
}, 
    'OPERATORS' : ["=", "+", "-", "*", "/", "!", "%", "^", "&", "?", ":", ".", "|", ";", ",", "<", ">"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #666666;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #000000;',
        'keywordgroup2': 'color: #333399;',
        'keywordgroup3': 'color: #000066;',
        'keywordgroup4': 'color: #333399;',
        'keywordgroup5': 'color: #993333;',
        'keywordgroup6': 'color: #551111;'    }, 
       'OPERATORS' : 'color: #000066;', 
        'DELIMITERS' : 'color: #000066;' 
    } 
}; 
