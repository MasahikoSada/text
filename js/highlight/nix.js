(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[118],{523:function(e,n,t){"use strict";e.exports=function(e){var n={keyword:"rec with let in inherit assert if else then",literal:"true false or and null",built_in:"import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"},t={className:"subst",begin:/\$\{/,end:/\}/,keywords:n},i={className:"string",contains:[t],variants:[{begin:"''",end:"''"},{begin:'"',end:'"'}]},s=[e.NUMBER_MODE,e.HASH_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,{begin:/[a-zA-Z0-9-_]+(\s*=)/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/\S+/}]}];return t.contains=s,{name:"Nix",aliases:["nixos"],keywords:n,contains:s}}}}]);
//# sourceMappingURL=nix.js.map?v=ce6ea59fab0d32ef22fd