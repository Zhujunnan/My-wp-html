editAreaLoader.load_syntax["avisynth"] = {
    'COMMENT_SINGLE' : {1: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/", "[*": "*]"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["try", "cache", "function", "global", "return"],
        'keywordgroup2': ["true", "yes", "false", "no", "__END__"],
        'keywordgroup3': ["AviSource", "AviFileSource", "AddBorders", "AlignedSplice", "AssumeFPS", "AssumeScaledFPS", "AssumeFrameBased", "AssumeFieldBased", "AssumeBFF", "AssumeTFF", "Amplify", "AmplifydB", "AssumeSampleRate", "AudioDub", "AudioDubEx", "Animate", "ApplyRange", "BicubicResize", "BilinearResize", "BlackmanResize", "Blur", "Bob", "BlankClip", "Blackness", "ColorYUV", "ConvertBackToYUY2", "ConvertToRGB", "ConvertToRGB24", "ConvertToRGB32", "ConvertToYUY2", "ConvertToY8", "ConvertToYV411", "ConvertToYV12", "ConvertToYV16", "ConvertToYV24", "ColorKeyMask", "Crop", "CropBottom", "ChangeFPS", "ConvertFPS", "ComplementParity", "ConvertAudioTo8bit", "ConvertAudioTo16bit", "ConvertAudioTo24bit", "ConvertAudioTo32bit", "ConvertAudioToFloat", "ConvertToMono", "ConditionalFilter", "ConditionalReader", "ColorBars", "Compare", "DirectShowSource", "DeleteFrame", "Dissolve", "DuplicateFrame", "DoubleWeave", "DelayAudio", "EnsureVBRMP3Sync", "FixLuminance", "FlipHorizontal", "FlipVertical", "FixBrokenChromaUpsampling", "FadeIn0", "FadeIn", "FadeIn2", "FadeOut0", "FadeOut", "FadeOut2", "FadeIO0", "FadeIO", "FadeIO2", "FreezeFrame", "FrameEvaluate", "GreyScale", "GaussResize", "GeneralConvolution", "GetChannel", "GetLeftChannel", "GetRightChannel", "HorizontalReduceBy2", "Histogram", "ImageReader", "ImageSource", "ImageWriter", "Invert", "Interleave", "Info", "KillAudio", "KillVideo", "Levels", "Limiter", "Layer", "Letterbox", "LanczosResize", "Lanczos4Resize", "Loop", "MergeARGB", "MergeRGB", "MergeChroma", "MergeLuma", "Merge", "Mask", "MaskHS", "MergeChannels", "MixAudio", "MonoToStereo", "MessageClip", "Normalize", "OpenDMLSource", "Overlay", "PointResize", "PeculiarBlend", "Pulldown", "RGBAdjust", "ResetMask", "Reverse", "ResampleAudio", "ReduceBy2", "SegmentedAviSource", "SegmentedDirectShowSource", "SoundOut", "ShowAlpha", "ShowRed", "ShowGreen", "ShowBlue", "SwapUV", "Subtract", "SincResize", "Spline16Resize", "Spline36Resize", "Spline64Resize", "SelectEven", "SelectOdd", "SelectEvery", "SelectRangeEvery", "Sharpen", "SpatialSoften", "SeparateFields", "ShowFiveVersions", "ShowFrameNumber", "ShowSMPTE", "ShowTime", "StackHorizontal", "StackVertical", "Subtitle", "SwapFields", "SuperEQ", "SSRC", "ScriptClip", "Tweak", "TurnLeft", "TurnRight", "Turn180", "TemporalSoften", "TimeStretch", "TCPServer", "TCPSource", "Trim", "Tone", "UToY", "UToY8", "UnalignedSplice", "VToY", "VToY8", "VerticalReduceBy2", "Version", "WavSource", "Weave", "WriteFile", "WriteFileIf", "WriteFileStart", "WriteFileEnd", "YToUV"],
        'keywordgroup4': ["Abs", "Apply", "Assert", "AverageLuma", "AverageChromaU", "AverageChromaV", "Ceil", "Cos", "Chr", "ChromaUDifference", "ChromaVDifference", "Defined", "Default", "Exp", "Exist", "Eval", "Floor", "Frac", "Float", "Findstr", "GetMTMode", "HexValue", "Int", "IsBool", "IsClip", "IsFloat", "IsInt", "IsString", "Import", "LoadPlugin", "Log", "LCase", "LeftStr", "LumaDifference", "LoadVirtualDubPlugin", "LoadVFAPIPlugin", "LoadCPlugin", "Load_Stdcall_Plugin", "Max", "MulDiv", "MidStr", "NOP", "OPT_AllowFloatAudio", "OPT_UseWaveExtensible", "Pi", "Pow", "Round", "Rand", "RevStr", "RightStr", "RGBDifference", "RGBDifferenceFromPrevious", "RGBDifferenceToNext", "Sin", "Sqrt", "Sign", "Spline", "StrLen", "String", "Select", "SetMemoryMax", "SetWorkingDir", "SetMTMode", "SetPlanarLegacyAlignment", "Time", "UCase", "UDifferenceFromPrevious", "UDifferenceToNext", "UPlaneMax", "UPlaneMin", "UPlaneMedian", "UPlaneMinMaxDifference", "Value", "VersionNumber", "VersionString", "VDifferenceFromPrevious", "VDifferenceToNext", "VPlaneMax", "VPlaneMin", "VPlaneMedian", "VPlaneMinMaxDifference", "YDifferenceFromPrevious", "YDifferenceToNext", "YPlaneMax", "YPlaneMin", "YPlaneMedian", "YPlaneMinMaxDifference"]
}, 
    'OPERATORS' : ["+", "++", "-", "--", "/", "*", "%", "=", "==", "<", "<=", ">", ">=", "<>", "!=", "!", "?", ":", "|", "||", "&&", "\\", ".", ","], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color:#008000;', 
        'QUOTESMARKS' : 'color:#996600;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color:#9966CC;',
        'keywordgroup2': 'color:#0000FF;',
        'keywordgroup3': 'color:#CC3300;',
        'keywordgroup4': 'color:#660000;'    }, 
       'OPERATORS' : 'color:#006600;', 
        'DELIMITERS' : 'color:#006600;' 
    } 
}; 
