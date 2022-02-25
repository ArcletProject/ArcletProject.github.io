"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[2170],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2285:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return h},metadata:function(){return v},toc:function(){return b}});var a=t(7462),r=t(3366),l=t(7294),o=t(3905),i=t(2389),c=t(9548),s=t(6010),u="tabItem_LplD";function p(e){var n,t,r,o=e.lazy,i=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,c.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,_=(0,l.useState)(b),w=_[0],O=_[1],T=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=g[d];null!=E&&E!==w&&k.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==w&&(x(n),O(a),null!=d&&N(d,a))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},k.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:j,onClick:j},r,{className:(0,s.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function m(e){var n=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}var d=function(e){var n=e.children,t=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:a},n)},f=["components"],h={id:"entry",title:"\u5165\u95e8"},k=void 0,v={unversionedId:"alconna/entry",id:"alconna/entry",title:"\u5165\u95e8",description:"Alconna \u7ed3\u6784",source:"@site/docs/alconna/entry.mdx",sourceDirName:"alconna",slug:"/alconna/entry",permalink:"/docs/alconna/entry",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/entry.mdx",tags:[],version:"current",frontMatter:{id:"entry",title:"\u5165\u95e8"},sidebar:"docs",previous:{title:"\u547d\u4ee4\u7ed3\u6784",permalink:"/docs/alconna/command/command-structure"},next:{title:"\u547d\u4ee4\u8282\u70b9",permalink:"/docs/alconna/basic/alconna-template-command"}},b=[{value:"Alconna \u7ed3\u6784",id:"alconna-\u7ed3\u6784",children:[],level:2},{value:"\u6784\u9020\u65b9\u6cd5",id:"\u6784\u9020\u65b9\u6cd5",children:[],level:2},{value:"\u547d\u4ee4\u6837\u4f8b",id:"\u547d\u4ee4\u6837\u4f8b",children:[],level:2}],y={toc:b};function g(e){var n=e.components,t=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"alconna-\u7ed3\u6784"},"Alconna \u7ed3\u6784"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u524d\u63d0")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u786e\u4fdd\u60a8\u5df2\u9605\u8bfb\u5173\u4e8e",(0,o.kt)("inlineCode",{parentName:"strong"},"\u547d\u4ee4\u7ed3\u6784"),"\u7684\u90e8\u5206")))),(0,o.kt)("p",null,"\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u5b9e\u4f8b\u7684\u4e3b\u8981\u7ed3\u6784\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Alconna\n\u251c\u2500\u2500 command_headers\n\u251c\u2500\u2500 command_name\n\u251c\u2500\u2500 options\n\u2502   \u2502\u2500\u2500 Subcommand\n\u2502   \u2502   \u2502\u2500\u2500 sub_name\n\u2502   \u2502   \u2502\u2500\u2500 sub_options\n\u2502   \u2502   \u2502   \u2502\u2500\u2500 Option\n\u2502   \u2502   \u2502   \u2502   \u2502\u2500\u2500 sub_opt_name\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 sub_opt_arg\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u2502   \u2514\u2500\u2500 sub_main_arg\n\u2502   \u2502\u2500\u2500 Option\n\u2502   \u2502   \u2502\u2500\u2500 opt_name\n\u2502   \u2502   \u2514\u2500\u2500 opt_arg\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 main_args\n\n")),(0,o.kt)("p",null,"\u5176\u4e2d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"command_headers: \u547d\u4ee4\u5934"),(0,o.kt)("li",{parentName:"ul"},"command_name: \u547d\u4ee4\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"sub_name: \u5b50\u547d\u4ee4\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"sub_opt_name: \u5b50\u547d\u4ee4\u9009\u9879\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"sub_opt_arg: \u5b50\u547d\u4ee4\u9009\u9879\u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"sub_main_arg: \u5b50\u547d\u4ee4\u4e3b\u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"opt_name: \u547d\u4ee4\u9009\u9879\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"opt_arg: \u547d\u4ee4\u9009\u9879\u53c2\u6570")),(0,o.kt)("p",null,"\u89e3\u6790\u65f6\uff0c\u5148\u5224\u65ad\u547d\u4ee4\u5934(\u5373 header + command), \u518d\u5224\u65adoptions\u4e0emain args, \u8fd9\u91ccoptions\u4e0emain args\u5728\u8f93\u5165\u6307\u4ee4\u65f6\u662f\u4e0d\u5206\u5148\u540e\u7684"),(0,o.kt)("h2",{id:"\u6784\u9020\u65b9\u6cd5"},"\u6784\u9020\u65b9\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Alconna")," \u76ee\u524d\u63d0\u4f9b\u4e865\u79cd\u6784\u9020\u65b9\u5f0f, \u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"typical")," \u4e3a\u9ed8\u8ba4\u7684\u6784\u9020\u65b9\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/alconna/constructs/typical"},"typical")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/alconna/constructs/koishi-like"},"koishi-like")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/alconna/constructs/format"},"formatter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/alconna/constructs/simple"},"iterable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/alconna/constructs/click-like"},"click-like"))),(0,o.kt)(m,{groupId:"classify",mdxType:"Tabs"},(0,o.kt)(d,{value:"typical",label:"\u6807\u51c6\u65b9\u5f0f",mdxType:"TabItem"},"\u53ef\u4ee5\u4f20\u5165\u5168\u90e8\u53c2\u6570\u7684\u6784\u9020\u65b9\u5f0f",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"alc = Alconna(...)\n"))),(0,o.kt)(d,{value:"koishi",label:"\u5b57\u7b26\u4e32\u65b9\u5f0f",mdxType:"TabItem"},"\u65e0\u6cd5\u4f20\u5165\u5b50\u547d\u4ee4\u4e0e\u62a5\u9519\u9009\u9879",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"alc = Alconna.from_string(...)\n"))),(0,o.kt)(d,{value:"format",label:"\u683c\u5f0f\u5316\u65b9\u5f0f",mdxType:"TabItem"},"\u65e0\u6cd5\u5199\u5165\u5e2e\u52a9\u4fe1\u606f\u3001\u547d\u4ee4\u5934\u4e0e\u9009\u9879\u522b\u540d",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"alc = Alconna.format(...)\n"))),(0,o.kt)(d,{value:"iterable",label:"\u8fed\u4ee3\u53c2\u6570\u65b9\u5f0f",mdxType:"TabItem"},"\u6700\u7b80\u6613\u7684\u6784\u9020\u65b9\u5f0f",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"alc = Alconna.simple(...)\n"))),(0,o.kt)(d,{value:"click",label:"\u88c5\u9970\u5668\u65b9\u5f0f",mdxType:"TabItem"},"\u65e0\u6cd5\u4f20\u5165\u5b50\u547d\u4ee4\u4e0e\u62a5\u9519\u9009\u9879",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"alc = AlconnaDecorate(...)\n@alc.build_command()\ndef test(...):\n    pass\n")))),(0,o.kt)("h2",{id:"\u547d\u4ee4\u6837\u4f8b"},"\u547d\u4ee4\u6837\u4f8b"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5047\u8bbe\u4e00\u547d\u4ee4\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/pip\nUsage:\n  /pip <command> [options]\n\nCommands:\n  install                     Install packages.\n  list                        List installed packages.\n  show                        Show information about installed packages.\n  help                        Show help for commands.\n\nGeneral Options:\n  --help                      Show help.\n  --retries <retries>         Maximum number of retries each connection should attempt (default 5 times).\n  --timeout <sec>             Set the socket timeout (default 15 seconds).\n  --exists-action <action>    Default action when a path already exists: (s)witch, (i)gnore, (w)ipe, (b)ackup, (a)bort.\n  --trusted-host <hostname>   Mark this host or host:port pair as trusted, even though it does not have valid or any HTTPS.\n")),(0,o.kt)("p",null,"\u6839\u636e\u4e0a\u8ff0\u7684Alconna\u7ed3\u6784\u4e0e\u524d\u6587\u7684\u547d\u4ee4\u7ed3\u6784\u5206\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u8fd9\u6837\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Alconna"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="/src/test_alconna.py"',title:'"/src/test_alconna.py"'},'from arclet.alconna import Alconna, Option, Subcommand\nimport sys\n\npip = Alconna(\n    command="/pip",\n    options=[\n        Subcommand(\n            "install",\n            Option("--upgrade"),\n            pak=str,\n        ),\n        Subcommand(\n            "show",\n            pak=str,\n        ),\n        Subcommand(\n            "help",\n            command=str,\n        ),\n        Option("list"),\n        Option("--help"),\n        Option("--retries", retries=int),\n        Option("--timeout", sec=int, alias=\'-t\'),\n        Option("--exists-action", ex_action=str, alias=\'-ea\'),\n        Option("--trusted-host", hostname="url", alias=\'-th\')\n    ]\n)\n\nif __name__ == "__main__":\n    args = sys.argv[1:]\n    print(pip.analyse_message(" ".join(args)))\n\n')),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u5982\u4e0b\u8f93\u5165:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'python test_alconna.py "/pip install cesloi --upgrade --trusted-host http://pypi.douban.com/simple"\n')),(0,o.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b, \u4f1a\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{'upgrade': Ellipsis, 'pak': 'cesloi', 'hostname': 'http://pypi.douban.com/simple'}\n")))}g.isMDXComponent=!0}}]);