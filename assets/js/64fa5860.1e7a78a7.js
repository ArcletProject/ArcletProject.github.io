"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[8569],{3905:function(n,e,r){r.d(e,{Zo:function(){return u},kt:function(){return s}});var t=r(7294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function m(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var i=t.createContext({}),l=function(n){var e=t.useContext(i),r=e;return n&&(r="function"==typeof n?n(e):c(c({},e),n)),r},u=function(n){var e=l(n.components);return t.createElement(i.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,i=n.parentName,u=m(n,["components","mdxType","originalType","parentName"]),d=l(r),s=a,f=d["".concat(i,".").concat(s)]||d[s]||p[s]||o;return r?t.createElement(f,c(c({ref:e},u),{},{components:r})):t.createElement(f,c({ref:e},u))}));function s(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,c=new Array(o);c[0]=d;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=n,m.mdxType="string"==typeof n?n:a,c[1]=m;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3831:function(n,e,r){r.r(e),r.d(e,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],m={id:"manager",title:"Alconna \u547d\u4ee4\u7ba1\u7406\u5668"},i=void 0,l={unversionedId:"alconna/manager",id:"alconna/manager",title:"Alconna \u547d\u4ee4\u7ba1\u7406\u5668",description:"CommandManager",source:"@site/docs/alconna/manager.md",sourceDirName:"alconna",slug:"/alconna/manager",permalink:"/docs/alconna/manager",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/manager.md",tags:[],version:"current",frontMatter:{id:"manager",title:"Alconna \u547d\u4ee4\u7ba1\u7406\u5668"},sidebar:"docs",previous:{title:"Alconna \u7684\u5e94\u7528",permalink:"/docs/alconna/usage"},next:{title:"Edoves \u4ecb\u7ecd",permalink:"/docs/edoves/tutorial"}},u=[{value:"CommandManager",id:"commandmanager",children:[],level:2}],p={toc:u};function d(n){var e=n.components,r=(0,a.Z)(n,c);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commandmanager"},"CommandManager"),(0,o.kt)("p",null,"\u547d\u4ee4\u7ba1\u7406\u5668\u662f\u4e00\u4e2a\u5355\u4f8b, \u8d1f\u8d23\u7ba1\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u547d\u4ee4\u7684\u521b\u5efa\u3001\u67e5\u627e\u3001\u7981\u7528\u3001\u542f\u7528\u7b49\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u547d\u4ee4\u7ba1\u7406\u5668\u5185\u90e8\u7684\u7ed3\u6784\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Manager\n\u251c\u2500\u2500 Commands\n\u2502   \u251c\u2500\u2500 Namespace1\n\u2502   \u2502   \u251c\u2500\u2500 name1: command1\n\u2502   \u2502   \u251c\u2500\u2500 name2: command2\n\u2502   \u2502   \u251c\u2500\u2500 name3: command3\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u251c\u2500\u2500 Namespace2\n\u2502   \u2502   \u251c\u2500\u2500 name1: command1\n\u2502   \u2502   \u251c\u2500\u2500 name2: command2\n\u2502   \u2502   \u251c\u2500\u2500 name3: command3\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u2514 ...\n\u2514\u2500\u2500 Abandon:\n    \u2514\u2500\u2500 name1: command1\n    \u2514\u2500\u2500 name2: command2\n    \u2514\u2500\u2500 name3: command3\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\uff0c\u4e14\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u547d\u4ee4\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\u3002"))}d.isMDXComponent=!0}}]);