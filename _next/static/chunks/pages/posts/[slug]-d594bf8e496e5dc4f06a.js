(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3453:function(e,t,r){"use strict";var n=r(5893),a=r(3855),s=r(4790);t.Z=function(e){var t=e.dateString,r=(0,a.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,s.Z)(r,"LLLL d, yyyy")})}},9560:function(e,t,r){"use strict";var n=r(5893),a=function(e){return"\u23f3 ".concat(Math.ceil(e)," ").concat(1===e?"minute":"minutes"," to read")};t.Z=function(e){var t=e.timeToRead;return(0,n.jsx)("span",{children:a(t)})}},9245:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return E},default:function(){return A}});var n=r(6265),a=r(5893),s=r(1163),o=r(2918),i=r(9008),l=r(8093),c=r(7063),u=function(e){var t=e.children;return(0,a.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,a.jsx)("div",{className:"markdown",children:t})})},d=r(3453),p=function(e){var t=e.children;return(0,a.jsx)("h1",{className:"text-5xl font-bold tracking-tighter leading-none mb-3 text-center",children:t})};p.defaultProps={children:null};var b=p,f=r(9560),y=function(e){var t=e.title,r=e.date,n=(e.author,e.timeToRead);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{children:t}),(0,a.jsx)("div",{className:"max-w-2xl mx-auto text-center",children:(0,a.jsxs)("div",{className:"mb-14 text-lg",children:[(0,a.jsx)(d.Z,{dateString:r})," -"," ",(0,a.jsx)(f.Z,{timeToRead:n})]})})]})},g=r(4342),m=r(4544),h=r(7410),v=r(4184),j=r.n(v),x={plain:{color:"#a2a3aa",backgroundColor:"#151627"},styles:[{types:["comment"],style:{color:"rgb(93, 93, 107)",fontStyle:"italic"}},{types:["punctuation","operator"],style:{color:"rgb(130, 131, 161)"}},{types:["attr-name","class","id"],style:{color:"#DBCDAB"}},{types:["selector"],style:{color:"#C6797E"}},{types:["property"],style:{color:"#A2A3AA"}},{types:["color","number","unit"],style:{color:"#969E92"}},{types:["constant","atrule"],style:{color:"rgb(240, 183, 167)"}},{types:["function","builtin"],style:{color:"rgb(215, 161, 165)"}},{types:["variable"],style:{fontStyle:"italic"}},{types:["attr-name"],style:{color:"rgba(219, 205, 171, 0.9)",fontStyle:"italic"}},{types:["tag"],style:{color:"rgb(198, 121, 126)"}},{types:["string","inserted"],style:{color:"rgb(150, 158, 146)"}},{types:["deleted"],style:{color:"rgba(197, 89, 105, 0.85)"}},{types:["changed"],style:{color:"rgba(219, 205, 171, 0.9)"}}]};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){function t(e){return function(){return e}}for(var r=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n+=1)r=r.replace(/<self>/g,t(r));r=r.replace(/<self>/g,(function(){return/[^\s\S]/.source})),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+r),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0,alias:"string"},attribute:{pattern:/#!?\[(?:[^[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(h.Z);var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"// highlight-next-line";return null===e||void 0===e?void 0:e.some((function(e){return(null===e||void 0===e?void 0:e.content)===t}))},k=function(e){var t,r=e.children,n=e.className,s=null===(t=n)||void 0===t?void 0:t.replace(/language-/,"");return(0,a.jsx)(m.ZP,O(O({},m.lG),{},{theme:x,code:r,language:s,children:function(e){var t=e.className,r=e.style,n=e.tokens,o=e.getLineProps,i=e.getTokenProps;return(0,a.jsx)("pre",{className:j()(t,"rounded-lg p-5"),style:r,"data-language":s,children:n.map((function(e,t){var r=o({line:e,key:t}),s=[r.className];if(_(e))return null;_(null===n||void 0===n?void 0:n[t-1])&&s.push("gatsby-highlight-code-line");var l=O(O({},r),{},{className:s.join(" ")});return(0,a.jsx)("div",O(O({},l),{},{children:e.map((function(e,t){return(0,a.jsx)("span",O({},i({token:e,key:t})))}))}))}))})}}))},P=r(2624);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={code:k,br:(0,a.jsx)("br",{})},Z=function(e){var t=e.source,r=e.post,n=e.preview;return(0,s.useRouter)().isFallback||null!==r&&void 0!==r&&r.slug?(0,a.jsx)(g.Z,{preview:n,children:(0,a.jsx)(c.Z,{children:(0,a.jsxs)("article",{className:"mb-32",children:[(0,a.jsx)(i.default,{children:(0,a.jsxs)("title",{children:[r.title," | ",P.yU," "]})}),(0,a.jsx)(y,{title:r.title,date:r.date,author:r.author,timeToRead:r.timeToRead}),(0,a.jsx)(u,{children:(0,a.jsx)(l.R,z(z({},t),{},{components:S}))})]})})}):(0,a.jsx)(o.default,{statusCode:404})};Z.defaultProps={preview:!1};var E=!0,A=Z},9035:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(9245)}])}},function(e){e.O(0,[664,522,327,342,774,888,179],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);