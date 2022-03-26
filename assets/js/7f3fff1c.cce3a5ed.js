"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[7321],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),s=a,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2045:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={id:"tutorial",title:"Alconna \u5bfc\u8bed"},p=void 0,c={unversionedId:"alconna/tutorial",id:"alconna/tutorial",title:"Alconna \u5bfc\u8bed",description:"\u4ecb\u7ecd",source:"@site/docs/alconna/tutorial.md",sourceDirName:"alconna",slug:"/alconna/tutorial",permalink:"/docs/alconna/tutorial",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/tutorial.md",tags:[],version:"current",frontMatter:{id:"tutorial",title:"Alconna \u5bfc\u8bed"},sidebar:"docs",previous:{title:"Arclet \u6982\u89c8",permalink:"/docs/intro"},next:{title:"Alconna \u524d\u8eab",permalink:"/docs/alconna/command/command-analyser"}},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",children:[],level:2},{value:"\u6027\u80fd\u53c2\u8003",id:"\u6027\u80fd\u53c2\u8003",children:[],level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'\u4e9a\u5c14\u5eb7\u5a1c (Alconna), \u662f \u51ef\u4e1d\u6d1b\u4f0a \u7684"\u597d"\u59b9\u59b9')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ArcletProject/Alconna"},(0,l.kt)("inlineCode",{parentName:"a"},"Alconna"))," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Arclet Project")," \u4e0b\u7684\u547d\u4ee4\u89e3\u6790\u5668"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u7531\u7e41\u591a\u7684\u9884\u8bbe\u7ec4\u4ef6\u6765\u67b6\u6784\u5176\u89e3\u6790\u529f\u80fd, \u4ee5\u7528\u4e8e\u66f4\u52a0\u7cbe\u786e\u7684\u547d\u4ee4\u89e3\u6790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Alconna, AnyStr\nv = Alconna(f"\u83b7\u53d6{AnyStr}\u7684\u6da9\u56fe", headers=["!", ".bot"])\nprint(v.parse("!\u83b7\u53d6\u5186\u9999\u7684\u6da9\u56fe").header)\n\'\u5186\u9999\'\n')),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"pip"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install --upgrade arclet-alconna\n")),(0,l.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u65e2\u80fd\u89e3\u6790\u7eaf\u6587\u672c, \u4e5f\u80fd\u89e3\u6790\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageChain")," \u7684\u590d\u6742\u6570\u636e, \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"List[str]"),"\u7b49\u539f\u59cb\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u53ef\u4ee5\u901a\u8fc7\u5355\u4e2a\u5bf9\u8c61\u53bb\u89e3\u6790\u591a\u79cd\u547d\u4ee4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u62e5\u6709\u5f3a\u5927\u7684\u7c7b\u578b\u8f6c\u6362\u4e0e\u7e41\u591a\u7684\u7c7b\u578b\u9884\u8bbe, \u53ef\u4ee5\u81ea\u5b9a\u4e49\u7c7b\u578b, \u5e76\u4e14\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7c7b\u578b\u7684\u89e3\u6790\u65b9\u5f0f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u6784\u9020\u65b9\u6cd5, \u65e0\u9700\u8c03\u6574\u8fc7\u591a\u53c2\u6570\u4fbf\u53ef\u4f7f\u7528; \u53ef\u4ee5\u89e3\u6790\u5b57\u7b26\u4e32\u4e0e\u6d88\u606f\u94fe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u4f1a\u5c06\u89e3\u6790\u7684\u7ed3\u679c\u5305\u88c5\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"Arpamar"),", \u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Arpamar")," \u83b7\u53d6\u4f20\u5165\u7684\u6d88\u606f\u5185\u5bb9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u53ef\u4ee5\u81ea\u5b9a\u4e49\u89e3\u6790\u5668, \u53ef\u4ee5\u81ea\u5b9a\u4e49\u89e3\u6790\u5668\u7684\u89e3\u6790\u65b9\u5f0f, \u53ef\u4ee5\u81ea\u5b9a\u4e49\u89e3\u6790\u5668\u7684\u89e3\u6790\u7ed3\u679c"))),(0,l.kt)("h2",{id:"\u6027\u80fd\u53c2\u8003"},"\u6027\u80fd\u53c2\u8003"),(0,l.kt)("p",null,"\u5728 i5-10210U \u5904\u7406\u5668\u4e0a, ",(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u7684\u6027\u80fd\u5927\u7ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"36000~71000 msg/s"),", \u53d6\u51b3\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u7684\u590d\u6742\u7a0b\u5ea6"))}d.isMDXComponent=!0}}]);