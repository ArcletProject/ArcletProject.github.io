"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[8927],{9684:function(e,n,t){t.d(n,{K:function(){return o}});var a=t(5068),l=t(7294),m=t(696),c=[{text:"ls",cmd:!0},{text:"index.js    package.json    node_modules",cmd:!1},{text:"",cmd:!0}],o=function(e){function n(n){var t;return(t=e.call(this,n)||this).lines=n.lines||{termLines:c},t.interval=n.interval||80,t.height=n.height||240,t}return(0,a.Z)(n,e),n.prototype.render=function(){return l.createElement(m.ZP,{lines:this.lines,interval:this.interval,height:this.height})},n}(l.Component)},506:function(e,n,t){t.d(n,{Lo:function(){return a},Up:function(){return l},b6:function(){return m},lO:function(){return c},zP:function(){return o}});var a=[{text:"alconna --help",cmd:!0,delay:80},{text:"Alconna_CL\n\u53ef\u7528\u7684\u5b50\u547d\u4ee4\u6709:\n# \u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n  create\n## \u8be5\u5b50\u547d\u4ee4\u5185\u53ef\u7528\u7684\u9009\u9879\u6709:\n # \u6307\u5b9a\u547d\u4ee4\u540d\u79f0\n  -C, --command <command_name>\n # \u4f20\u5165\u547d\u4ee4\u5934\n  -H, --header <command_header>\n # \u521b\u5efa\u547d\u4ee4\u9009\u9879\n  -O, --option <option_name> <option_args, default=[]>\n # \u5c55\u793a\u521b\u5efa\u547d\u4ee4\u7684\u751f\u6210\u4ee3\u7801\n  -S, --show\n# \u5c55\u793a\u6307\u5b9aAlconna\u7ec4\u4ef6\u7684\u5e2e\u52a9\u4fe1\u606f\n  help <target>",cmd:!1},{text:"",cmd:!0}],l=[{text:'w.analyse_message("\u67e5\u8be2\u5317\u4eac\u5929\u6c14").header',cmd:!0,delay:80},{text:"'\u5317\u4eac'",cmd:!1},{text:'d.analyse_message(".d100").header',cmd:!0,delay:80},{text:"'100'",cmd:!1},{text:"",cmd:!0}],m=[{text:'msg = "Cal -sum 12 23"',cmd:!0,delay:80},{text:"cal.analyse_message(msg).get('sum')",cmd:!0,delay:80},{text:"{'num_a': '12', 'num_b': '23'}",cmd:!1},{text:'msg = "Cal -div 12 23 --round 2"',cmd:!0,delay:80},{text:"cal.analyse_message(msg).get('div')",cmd:!0,delay:80},{text:"{'num_a': '12', 'num_b': '23', 'round': {'decimal': '2'}}",cmd:!1},{text:"",cmd:!0}],c=[{text:'alc.analyse_message("\u53d4\u53d4\u4eca\u5929\u5403\u4ec0\u4e48\u554a?").header',cmd:!0,delay:80},{text:"'\u53d4\u53d4'",cmd:!1},{text:'alc.analyse_message("\u53d4\u53d4\u4eca\u5929\u5403tm\u548ctm\u5462").item',cmd:!0,delay:80},{text:"['tm', 'tm\u5462']",cmd:!1},{text:"",cmd:!0}],o=[{text:'msg = MessageChain.create(At(12345), " \u4e22\u6f02\u6d41\u74f6 ", "I L U")',cmd:!0,delay:80},{text:"test.analyse_message(msg).main_args",cmd:!0,delay:80},{text:"{'content': 'I L U'}",cmd:!1},{text:"",cmd:!0}]},5214:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var a=t(7462),l=t(3366),m=(t(7294),t(3905)),c=t(9684),o=t(506),r=["components"],i={id:"usage",title:"\u5e94\u7528"},d=void 0,s={unversionedId:"alconna/usage",id:"alconna/usage",title:"\u5e94\u7528",description:"\u5947\u5947\u602a\u602a\u7684\u547d\u4ee4",source:"@site/docs/alconna/usage.mdx",sourceDirName:"alconna",slug:"/alconna/usage",permalink:"/docs/alconna/usage",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/usage.mdx",tags:[],version:"current",frontMatter:{id:"usage",title:"\u5e94\u7528"},sidebar:"docs",previous:{title:"\u89e3\u6790\u987a\u5e8f",permalink:"/docs/alconna/detail/parse-order"},next:{title:"\u547d\u4ee4\u884c\u529f\u80fd",permalink:"/docs/alconna/commandline"}},u=[{value:"\u5947\u5947\u602a\u602a\u7684\u547d\u4ee4",id:"\u5947\u5947\u602a\u602a\u7684\u547d\u4ee4",children:[],level:2},{value:"\u9009\u9879\u7684\u591a\u53c2\u6570",id:"\u9009\u9879\u7684\u591a\u53c2\u6570",children:[],level:2},{value:"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26",id:"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26",children:[],level:2},{value:"\u975e\u6587\u672c\u5143\u7d20\u4f5c\u4e3a\u547d\u4ee4\u5934",id:"\u975e\u6587\u672c\u5143\u7d20\u4f5c\u4e3a\u547d\u4ee4\u5934",children:[],level:2}],p={toc:u};function g(e){var n=e.components,t=(0,l.Z)(e,r);return(0,m.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"\u5947\u5947\u602a\u602a\u7684\u547d\u4ee4"},"\u5947\u5947\u602a\u602a\u7684\u547d\u4ee4"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"Alconna")," \u7684 ",(0,m.kt)("inlineCode",{parentName:"p"},"command"),"\u652f\u6301\u5199\u5165\u6b63\u5219\u8868\u8fbe\u5f0f, \u6240\u4ee5\u4ee5\u4e0b\u547d\u4ee4\u662f\u53ef\u4ee5\u7684"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'w = Alconna(command=f"\u67e5\u8be2{AnyStr}\u5929\u6c14")\nd = Alconna(headers=["."], command=f"d{AnyDigit}")\n')),(0,m.kt)(c.K,{lines:o.Up,height:200,mdxType:"TerminalApp"}),(0,m.kt)("h2",{id:"\u9009\u9879\u7684\u591a\u53c2\u6570"},"\u9009\u9879\u7684\u591a\u53c2\u6570"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"Option")," \u4e0e ",(0,m.kt)("inlineCode",{parentName:"p"},"Subcommand")," \u7684 ",(0,m.kt)("inlineCode",{parentName:"p"},"args")," \u53ef\u4ee5\u586b\u5165\u4e0d\u6b62\u4e00\u4e2a\u53c2\u6570\uff0c\u6240\u4ee5\u4ee5\u4e0b\u547d\u4ee4\u662f\u53ef\u4ee5\u7684"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'cal = Alconna(\n    command="Cal",\n    options=[\n        Option("-sum", Args["num_a":int, "num_b":int]),\n        Subcommand(\n            "-div",\n            Option("--round", Args["decimal":int]),\n            args=Args["num_a":int, "num_b":int]\n        )\n    ]\n)\n')),(0,m.kt)(c.K,{lines:o.b6,height:240,mdxType:"TerminalApp"}),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"PS. Alconna\u5728\u89e3\u6790\u5b8c\u6210\u540e\u4f1a\u628a\u7834\u6298\u7ebf\u7ed9\u8fc7\u6ee4\u6389")),(0,m.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26"},"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"Alconna")," \u4e0d\u5f3a\u5236 shell-like \u7684\u6307\u4ee4\uff0c\u6240\u4ee5\u4ee5\u4e0b\u547d\u4ee4\u662f\u53ef\u4ee5\u7684"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'alc = Alconna(\n    command=f"{AnyStr}\u4eca\u5929",\n    main_args=Args["item":AnyParam],\n    actions=lambda x: x.split("\u548c")\n).separate("\u5403")\n')),(0,m.kt)(c.K,{lines:o.lO,height:200,mdxType:"TerminalApp"}),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"PS. \u5982\u679c\u4f60\u60f3\u7528\u7a7a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5206\u9694\u7b26\u7684\u8bdd,\u4e3a\u4ec0\u4e48\u4e0d\u8bd5\u8bd5\u7b2c\u4e00\u79cd\u5199\u6cd5\u5462\uff1f")),(0,m.kt)("h2",{id:"\u975e\u6587\u672c\u5143\u7d20\u4f5c\u4e3a\u547d\u4ee4\u5934"},"\u975e\u6587\u672c\u5143\u7d20\u4f5c\u4e3a\u547d\u4ee4\u5934"),(0,m.kt)("p",null,"\u6ce8: \u8be5\u7279\u6027\u4e3a",(0,m.kt)("inlineCode",{parentName:"p"},"0.5.3"),"\u4ee5\u4e0a"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"headers"),"\u53ef\u4ee5\u4f20\u5165\u6d88\u606f\u5143\u7d20, \u6240\u4ee5\u4ee5\u4e0b\u662f\u53ef\u4ee5\u7684:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'test = Alconna(\n    headers=[At(12345)],\n    command="\u4e22\u6f02\u6d41\u74f6",\n    main_args=Args["content":AnyParam]\n)\n')),(0,m.kt)(c.K,{lines:o.zP,height:200,mdxType:"TerminalApp"}))}g.isMDXComponent=!0}}]);