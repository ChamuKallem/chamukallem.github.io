!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.e52b2f99308b09ef7684f62bab4d6f07.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.111b5c6ac0287f7acd3ee7484ce1f44d.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.2bb8060537f21c24bda444b8acac5f1a.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.dd74556cf657ab1e8f3235a63e5b93a7.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.b2c634a04700d668e072b1d5f9909f67.js",a.body.appendChild(c)}();