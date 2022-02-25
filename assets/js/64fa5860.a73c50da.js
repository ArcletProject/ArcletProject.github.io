"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[8569],{3905:function(n,e,a){a.d(e,{Zo:function(){return p},kt:function(){return u}});var t=a(7294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function m(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var c=t.createContext({}),i=function(n){var e=t.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},p=function(n){var e=i(n.components);return t.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,p=m(n,["components","mdxType","originalType","parentName"]),s=i(a),u=r,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return a?t.createElement(f,l(l({ref:e},p),{},{components:a})):t.createElement(f,l({ref:e},p))}));function u(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,l=new Array(o);l[0]=s;var m={};for(var c in e)hasOwnProperty.call(e,c)&&(m[c]=e[c]);m.originalType=n,m.mdxType="string"==typeof n?n:r,l[1]=m;for(var i=2;i<o;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3831:function(n,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],m={id:"manager",title:"\u547d\u4ee4\u7ba1\u7406\u5668"},c=void 0,i={unversionedId:"alconna/manager",id:"alconna/manager",title:"\u547d\u4ee4\u7ba1\u7406\u5668",description:"CommandManager",source:"@site/docs/alconna/manager.md",sourceDirName:"alconna",slug:"/alconna/manager",permalink:"/docs/alconna/manager",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/manager.md",tags:[],version:"current",frontMatter:{id:"manager",title:"\u547d\u4ee4\u7ba1\u7406\u5668"},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u529f\u80fd",permalink:"/docs/alconna/commandline"},next:{title:"Letoderea \u5bfc\u8bed",permalink:"/docs/letoderea/tutorial"}},p=[{value:"CommandManager",id:"commandmanager",children:[],level:2},{value:"all_command_help",id:"all_command_help",children:[],level:2},{value:"broadcast",id:"broadcast",children:[],level:2},{value:"set_enable \u4e0e set_disable",id:"set_enable-\u4e0e-set_disable",children:[],level:2}],d={toc:p};function s(n){var e=n.components,a=(0,r.Z)(n,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commandmanager"},"CommandManager"),(0,o.kt)("p",null,"\u547d\u4ee4\u7ba1\u7406\u5668\u662f\u4e00\u4e2a\u5355\u4f8b, \u8d1f\u8d23\u7ba1\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u547d\u4ee4\u7684\u521b\u5efa\u3001\u67e5\u627e\u3001\u7981\u7528\u3001\u542f\u7528\u7b49\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u547d\u4ee4\u7ba1\u7406\u5668\u5185\u90e8\u7684\u7ed3\u6784\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Manager\n\u251c\u2500\u2500 Commands\n\u2502   \u251c\u2500\u2500 Namespace1\n\u2502   \u2502   \u251c\u2500\u2500 name1: command1\n\u2502   \u2502   \u251c\u2500\u2500 name2: command2\n\u2502   \u2502   \u251c\u2500\u2500 name3: command3\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u251c\u2500\u2500 Namespace2\n\u2502   \u2502   \u251c\u2500\u2500 name1: command1\n\u2502   \u2502   \u251c\u2500\u2500 name2: command2\n\u2502   \u2502   \u251c\u2500\u2500 name3: command3\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u2514 ...\n\u2514\u2500\u2500 Abandon:\n    \u251c\u2500\u2500 name1: command1\n    \u251c\u2500\u2500 name2: command2\n    \u2514\u2500\u2500 name3: command3\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\uff0c\u4e14\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u547d\u4ee4\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\u3002"),(0,o.kt)("h2",{id:"all_command_help"},"all_command_help"),(0,o.kt)("p",null,"\u547d\u4ee4\u7ba1\u7406\u5668\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"all_command_help"),"\u65b9\u6cd5\u8fd4\u56de\u6240\u6709\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u4f20\u5165\u4e00",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),"\u53c2\u6570\uff0c\u8868\u793a\u53ea\u8fd4\u56de\u8be5\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Alconna\nfrom arclet.alconna.manager import CommandManager\nmanager = CommandManager()\nalc = Alconna.from_string("command1 #\u547d\u4ee41")\nalc1 = Alconna.from_string("command2 #\u547d\u4ee42")\nalc2 = Alconna.from_string("command3 #\u547d\u4ee43")\n...\nprint(manager.all_command_help())\n')),(0,o.kt)("p",null,"\u5176\u4f1a\u8f93\u51fa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:'language-title="all_command_help"'},"# \u5f53\u524d\u53ef\u7528\u7684\u547d\u4ee4\u6709:\n - command1 \u547d\u4ee41\n - command2 \u547d\u4ee42\n - command3 \u547d\u4ee43\n# \u8f93\u5165'\u547d\u4ee4\u540d --help' \u67e5\u770b\u7279\u5b9a\u547d\u4ee4\u7684\u8bed\u6cd5\n")),(0,o.kt)("h2",{id:"broadcast"},"broadcast"),(0,o.kt)("p",null,"\u547d\u4ee4\u7ba1\u7406\u5668\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"broadcast"),"\u65b9\u6cd5\u53ef\u4ee5\u5c06\u547d\u4ee4\u53d1\u9001\u7ed9\u5f53\u524d\u4e3b\u7a0b\u5e8f\u4e0b(\u5305\u62ec\u5bfc\u5165\u7684\u6a21\u5757\u4e2d\u7684)\u6ce8\u518c\u7684\u6240\u6709\u547d\u4ee4\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u4f20\u5165\u4e00",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),"\u53c2\u6570\uff0c\u8868\u793a\u53ea\u4f1a\u5c06\u547d\u4ee4\u53d1\u9001\u7ed9\u8be5\u547d\u540d\u7a7a\u95f4\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u547d\u4ee4\u3002"),(0,o.kt)("h2",{id:"set_enable-\u4e0e-set_disable"},"set_enable \u4e0e set_disable"),(0,o.kt)("p",null,"\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u63a7\u5236\u547d\u4ee4\u7684\u542f\u7528\u4e0e\u7981\u7528\u3002"),(0,o.kt)("p",null,"\u65b9\u6cd5\u9700\u8981\u4f20\u5165\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"command"),"\u53c2\u6570\uff0c\u8868\u793a\u8981\u63a7\u5236\u7684\u547d\u4ee4\u3002\u8be5\u53c2\u6570\u53ef\u4ee5\u662f\u547d\u4ee4\u7684\u540d\u79f0\uff0c\u4e5f\u53ef\u4ee5\u662f\u547d\u4ee4\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Alconna\nfrom arclet.alconna.manager import CommandManager\nmanager = CommandManager()\nalc = Alconna.from_string("command1 #\u547d\u4ee41")\nalc1 = Alconna.from_string("command2 #\u547d\u4ee42")\nalc2 = Alconna.from_string("command3 #\u547d\u4ee43")\nmanager.set_disable(alc2)\nprint("\u7981\u7528\u547d\u4ee43")\nprint(alc2.analyse_message("command3").matched)\nprint("\u542f\u7528\u547d\u4ee43")\nmanager.set_enable("Alconna.command3")\nprint(alc2.analyse_message("command3").matched)\n')),(0,o.kt)("p",null,"\u5176\u4f1a\u8f93\u51fa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:'language-title="set_enable,',metastring:'set_disable"','set_disable"':!0},"\u7981\u7528\u547d\u4ee43\nFalse\n\u542f\u7528\u547d\u4ee43\nTrue\n")))}s.isMDXComponent=!0}}]);