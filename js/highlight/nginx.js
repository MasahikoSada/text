(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[114],{342:function(e,n){e.exports=function(e){var n={className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/}/},{begin:"[\\$\\@]"+e.UNDERSCORE_IDENT_RE}]},a={endsWithParent:!0,lexemes:"[a-z/_]+",keywords:{literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[n]},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:"\\s\\^",end:"\\s|{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|{|;",returnEnd:!0},{begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},n]};return{aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{begin:e.UNDERSCORE_IDENT_RE+"\\s+{",returnBegin:!0,end:"{",contains:[{className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|{",returnBegin:!0,contains:[{className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:a}],relevance:0}],illegal:"[^\\s\\}]"}}}}]);
//# sourceMappingURL=nginx.js.map?v=fa35720081fd359694de