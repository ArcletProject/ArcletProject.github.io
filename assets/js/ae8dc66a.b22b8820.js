"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[108],{9684:function(e,t,n){n.d(t,{K:function(){return r}});var a=n(5068),c=n(7294),l=n(696),o=[{text:"ls",cmd:!0},{text:"index.js    package.json    node_modules",cmd:!1},{text:"",cmd:!0}],r=function(e){function t(t){var n;return(n=e.call(this,t)||this).lines=t.lines||{termLines:o},n.interval=t.interval||80,n.height=t.height||240,n}return(0,a.Z)(t,e),t.prototype.render=function(){return c.createElement(l.ZP,{lines:this.lines,interval:this.interval,height:this.height})},t}(c.Component)},506:function(e,t,n){n.d(t,{Lo:function(){return a},aI:function(){return c},a_:function(){return l},Z6:function(){return o},WQ:function(){return r},Xl:function(){return s},$d:function(){return d},al:function(){return p},Et:function(){return m},A8:function(){return i}});var a=[{text:"alconna --help",cmd:!0,delay:80},{text:"* Alconna CL\n# \u5f53\u524d\u53ef\u7528\u7684\u547d\u4ee4\u6709:\n - create \u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n - analysis \u5206\u6790\u547d\u4ee4\u5e76\u8f6c\u6362\u4e3a Alconna \u547d\u4ee4\u7ed3\u6784\n - help \u5c55\u793a\u6307\u5b9aAlconna\u7ec4\u4ef6\u7684\u5e2e\u52a9\u4fe1\u606f\n - using \u4f9d\u636e\u521b\u5efa\u7684 Alconna \u6765\u89e3\u6790\u8f93\u5165\u7684\u547d\u4ee4\n# \u8f93\u5165'\u547d\u4ee4\u540d --help' \u67e5\u770b\u7279\u5b9a\u547d\u4ee4\u7684\u8bed\u6cd5",cmd:!1},{text:"",cmd:!0}],c=[{text:'w.analyse_message("\u67e5\u8be2\u5317\u4eac\u5929\u6c14").header',cmd:!0,delay:80},{text:"'\u5317\u4eac'",cmd:!1},{text:'d.analyse_message(".d100").header',cmd:!0,delay:80},{text:"'100'",cmd:!1},{text:'d.analyse_message(".ra").header',cmd:!0,delay:80},{text:"True",cmd:!1},{text:"",cmd:!0}],l=[{text:'msg = "Cal -sum 12 23"',cmd:!0,delay:80},{text:"cal.analyse_message(msg).main_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23'}",cmd:!1},{text:'msg = "Cal -div 12 23 --round 2"',cmd:!0,delay:80},{text:"cal.analyse_message(msg).all_matched_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23', 'decimal': '2'}",cmd:!1},{text:"",cmd:!0}],o=[{text:'alc.analyse_message("\u53d4\u53d4\u4eca\u5929\u5403\u4ec0\u4e48\u554a?").header',cmd:!0,delay:80},{text:"'\u53d4\u53d4'",cmd:!1},{text:'alc.analyse_message("\u53d4\u53d4\u4eca\u5929\u5403tm\u548ctm\u5462").item',cmd:!0,delay:80},{text:"['tm', 'tm\u5462']",cmd:!1},{text:"",cmd:!0}],r=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test foo bar baz")',cmd:!0,delay:40},{text:"['test', {'foo': ['foo', 'bar', 'baz']}]",cmd:!1},{text:'analyse_option(opt1, "test a=1 b=2 c=3")',cmd:!0,delay:40},{text:"['test', {'foo': {'a': '1', 'b': '2', 'c': '3'}}]",cmd:!1},{text:"",cmd:!0}],d=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test abc")',cmd:!0,delay:40},{text:"['test', {'foo': 'abc'}]",cmd:!1},{text:'analyse_option(opt1, "test a")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: param a is incorrect",cmd:!1},{text:"",cmd:!0}],m=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test foo=123")',cmd:!0,delay:40},{text:"['test', {'foo': 123}]",cmd:!1},{text:'analyse_option(opt1, "test 123")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: 123 missing its key. \nDo you forget to add 'foo='?",cmd:!1},{text:"",cmd:!0}],i=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test abc")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: param abc is incorrect",cmd:!1},{text:'analyse_option(opt1, "test abc")',cmd:!0,delay:40},{text:"['test', {}]",cmd:!1},{text:"",cmd:!0}],s=[{text:'github.analyse_message("!github repo ArcletProject/Alconna").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:'github.shortcut("\u67e5\u770bALC", "!github repo ArcletProject/Alconna")',cmd:!0,delay:40},{text:'github.analyse_message("\u67e5\u770bALC").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:"",cmd:!0}],p=[{text:"alc.get_help()",cmd:!0,delay:40},{text:"test <foo:str>\nUnknown Information\n",cmd:!1},{text:"alc1.get_help()",cmd:!0,delay:40},{text:"test1 <foo>\nUnknown Information\n",cmd:!1},{text:"",cmd:!0}]},6040:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return x}});var a=n(7462),c=n(3366),l=(n(7294),n(3905)),o=n(9684),r=n(506),d=["components"],m={id:"commandline",title:"\u547d\u4ee4\u884c\u529f\u80fd"},i=void 0,s={unversionedId:"alconna/commandline",id:"alconna/commandline",title:"\u547d\u4ee4\u884c\u529f\u80fd",description:"\u5f97\u76ca\u4e8eAlconna\u7684\u5b8c\u5584\u6027, \u5728 v0.6 \u7248\u672c\u4e2d, \u6211\u4eec\u52a0\u5165\u4e86\u547d\u4ee4\u884c\u529f\u80fd.",source:"@site/docs/alconna/commandline.mdx",sourceDirName:"alconna",slug:"/alconna/commandline",permalink:"/docs/alconna/commandline",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/commandline.mdx",tags:[],version:"current",frontMatter:{id:"commandline",title:"\u547d\u4ee4\u884c\u529f\u80fd"},sidebar:"docs",previous:{title:"\u628a\u547d\u4ee4\u53d8\u5c0f",permalink:"/docs/alconna/detail/shortcut"},next:{title:"\u547d\u4ee4\u7ba1\u7406\u5668",permalink:"/docs/alconna/manager"}},p=[{value:"Commandline",id:"commandline",children:[],level:2},{value:"create\u6307\u4ee4",id:"create\u6307\u4ee4",children:[],level:2},{value:"analysis\u6307\u4ee4",id:"analysis\u6307\u4ee4",children:[],level:2},{value:"using\u6307\u4ee4",id:"using\u6307\u4ee4",children:[],level:2},{value:"help\u6307\u4ee4",id:"help\u6307\u4ee4",children:[],level:2}],u={toc:p};function x(e){var t=e.components,n=(0,c.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5f97\u76ca\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u7684\u5b8c\u5584\u6027, \u5728 v0.6 \u7248\u672c\u4e2d, \u6211\u4eec\u52a0\u5165\u4e86\u547d\u4ee4\u884c\u529f\u80fd."),(0,l.kt)("h2",{id:"commandline"},"Commandline"),(0,l.kt)("p",null,"\u5728\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"pip"),"\u5b89\u88c5/\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"arclet-alconna")," \u540e, \u4f60\u53ef\u4ee5\u5c1d\u8bd5\u5728\u672c\u5730\u7ec8\u7aef\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\Administrator> alconna\n")),(0,l.kt)(o.K,{lines:r.Lo,height:480,mdxType:"TerminalApp"}),(0,l.kt)("h2",{id:"create\u6307\u4ee4"},"create\u6307\u4ee4"),(0,l.kt)("p",null,"\u8be5\u6307\u4ee4\u7528\u6765\u8f85\u52a9\u5165\u95e8\u8005\u5feb\u901f\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Alconna")," \u547d\u4ee4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"create\n\u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n\u53ef\u7528\u7684\u9009\u9879\u6709:\n# \u6307\u5b9a\u547d\u4ee4\u540d\u79f0\n  -C, --command <command_name>\n# \u4f20\u5165\u547d\u4ee4\u5934\n  -H, --header <command_header>\n# \u521b\u5efa\u547d\u4ee4\u9009\u9879\n  -O, --option <option_name> <option_args, default=[]>\n# \u4ece\u5df2\u7ecf\u5206\u6790\u7684\u547d\u4ee4\u7ed3\u6784\u4e2d\u521b\u5efaAlconna\n  -A, --analysed\n")),(0,l.kt)("h2",{id:"analysis\u6307\u4ee4"},"analysis\u6307\u4ee4"),(0,l.kt)("p",null,"\u8be5\u6307\u4ee4\u7528\u6765\u5c06\u4e00\u4e2a\u666e\u901a\u7684\u547d\u4ee4\u89e3\u6790\u4e3a\u4ee5\u5b57\u5178\u5f62\u5f0f\u8868\u793a\u7684\u547d\u4ee4\u7ed3\u6784."),(0,l.kt)("h2",{id:"using\u6307\u4ee4"},"using\u6307\u4ee4"),(0,l.kt)("p",null,"\u8be5\u6307\u4ee4\u9700\u8981\u914d\u5408",(0,l.kt)("inlineCode",{parentName:"p"},"create"),"\u6765\u4f7f\u7528, \u5b83\u7528\u6765\u6267\u884c\u5728cli\u4e2d\u521b\u5efa\u597d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u6307\u4ee4, \u5e76\u8f93\u51fa\u5bf9\u5e94\u7684\u89e3\u6790\u7ed3\u679c."),(0,l.kt)("h2",{id:"help\u6307\u4ee4"},"help\u6307\u4ee4"),(0,l.kt)("p",null,"\u8be5\u6307\u4ee4\u7528\u6765\u5feb\u901f\u67e5\u770bApi\u6587\u6863."))}x.isMDXComponent=!0}}]);