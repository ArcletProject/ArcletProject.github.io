"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[8191],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),l=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},m=function(n){var e=l(n.components);return a.createElement(p.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),d=l(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||s[u]||o;return t?a.createElement(k,c(c({ref:e},m),{},{components:t})):a.createElement(k,c({ref:e},m))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8036:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),c=["components"],i={id:"command-structure",title:"\u547d\u4ee4\u7ed3\u6784"},p=void 0,l={unversionedId:"alconna/command/command-structure",id:"alconna/command/command-structure",title:"\u547d\u4ee4\u7ed3\u6784",description:"Structure",source:"@site/docs/alconna/command/command-structure.md",sourceDirName:"alconna/command",slug:"/alconna/command/command-structure",permalink:"/docs/alconna/command/command-structure",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/command/command-structure.md",tags:[],version:"current",frontMatter:{id:"command-structure",title:"\u547d\u4ee4\u7ed3\u6784"},sidebar:"docs",previous:{title:"Alconna \u524d\u8eab",permalink:"/docs/alconna/command/command-analyser"},next:{title:"\u6784\u9020 Alconna",permalink:"/docs/alconna/basic/alconna-construct"}},m=[{value:"Structure",id:"structure",children:[],level:2}],s={toc:m};function d(n){var e=n.components,t=(0,r.Z)(n,c);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u4e00\u6761\u547d\u4ee4\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sdist upload -r pypi\n")),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u4ee5json\u7ed3\u6784\u53bb\u8868\u793a\u8fd9\u4e2a\u547d\u4ee4\u65f6, \u6709\u5927\u81f4\u4e24\u79cd\u7ed3\u6784:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'a = {\n  "main": {\n    "name": "sdist",\n    "separate": " ",\n    "args": [\n      " _upload_ "\n    ]\n  },\n  "separate": " ",\n  "subcommand": [\n    {\n      "name": "-r",\n      "separate": " ",\n      "args": " %pypi% "\n    }\n  ]\n}\n\nb = {\n  "name": "sdist",\n  "separate": " ",\n  "args": [\n    {\n      "name": "upload",\n      "separate": " ",\n      "args": [\n        {\n          "name": "-r",\n          "separate": " ",\n          "args": " %pypi% "\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u53c2\u6570\u8bf4\u660e")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},'"_upload_"'),", \u4e0b\u5212\u7ebf\u8868\u793a\u8be5\u5904\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"single-str-match"),", \u5373\u53c2\u6570\u53ea\u80fd\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"\u6307\u5b9a\u5b57\u7b26\u4e32")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},'"%pypi%"'),", \u767e\u5206\u53f7\u8868\u793a\u8be5\u5904\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"any-str-match"),", \u5373\u53c2\u6570\u53ef\u4ee5\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"\u4efb\u610f\u5b57\u7b26\u4e32")))),(0,o.kt)("p",null,"\u663e\u7136\u7684\u662f\uff0c\u7b2c\u4e00\u79cd\u7ed3\u6784\u7684\u5c42\u6570\u66f4\u5c11\uff0c\u7b2c\u4e8c\u79cd\u7ed3\u6784\u7684\u62d3\u5c55\u6027\u66f4\u597d"),(0,o.kt)("p",null,"\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandAnalysis")," \u6b63\u662f\u6839\u636e\u7b2c\u4e8c\u79cd\u7ed3\u6784\u5b9e\u73b0\u7684\u547d\u4ee4\u89e3\u6790"),(0,o.kt)("p",null,"\u4ee5\u5e38\u89c1\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"/ping 127.0.0.1")," \u4e3a\u4f8b, "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/"),"\u662f\u547d\u4ee4\u5934, ",(0,o.kt)("inlineCode",{parentName:"p"},"ping"),"\u662f\u547d\u4ee4\u540d\u79f0, ",(0,o.kt)("inlineCode",{parentName:"p"}," "),"\u662f\u547d\u4ee4\u5206\u9694\u7b26, ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\u662f\u547d\u4ee4\u53c2\u6570"),(0,o.kt)("p",null,"\u4ee5json\u8868\u793a\u5c31\u662f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "header": "/",\n  "main": {\n    "name": "ping",\n    "separate": " ",\n    "args": "127.0.0.1"\n  }\n}\n')),(0,o.kt)("p",null,"\u90a3\u4e48\u600e\u4e48\u8f6c\u6362\u6210\u53ef\u4ee5\u8ba9\u89e3\u6790\u5668\u89e3\u6790\u7684\u547d\u4ee4\u5462\uff1f"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u8fd9\u4e48\u5199:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'Command(headers=["/"], main=["ping", AnyIP])\n')),(0,o.kt)("p",null,"AnyIP \u5176\u5b9e\u662f\u9884\u5236\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u662f\u7684\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"CommandAnalysis")," \u4e2d, \u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u5730\u65b9\u5199\u5165\u81ea\u5df1\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8bfb\u5b8c\u8fd9\u4e9b\uff0c\u4f60\u5e94\u8be5\u5bf9 ",(0,o.kt)("strong",{parentName:"p"},"\u547d\u4ee4(Command)")," \u7684\u7ed3\u6784\u6709\u4e00\u4e2a\u5927\u81f4\u7684\u4e86\u89e3, \u8fd9\u4e5f\u662f\u4e3a\u540e\u9762\u4f60\u5b66\u4e60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna")," \u505a\u529f\u8bfe"))),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765, \u4fbf\u662f\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna")," \u7684\u8be6\u7ec6\u4ecb\u7ecd\u4e86"))}d.isMDXComponent=!0}}]);