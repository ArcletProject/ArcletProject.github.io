"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[4831],{9684:function(e,t,n){n.d(t,{K:function(){return l}});var a=n(5068),c=n(7294),r=n(696),d=[{text:"ls",cmd:!0},{text:"index.js    package.json    node_modules",cmd:!1},{text:"",cmd:!0}],l=function(e){function t(t){var n;return(n=e.call(this,t)||this).lines=t.lines||{termLines:d},n.interval=t.interval||80,n.height=t.height||240,n}return(0,a.Z)(t,e),t.prototype.render=function(){return c.createElement(r.ZP,{lines:this.lines,interval:this.interval,height:this.height})},t}(c.Component)},506:function(e,t,n){n.d(t,{Lo:function(){return a},aI:function(){return c},a_:function(){return r},Z6:function(){return d},mu:function(){return l},Xl:function(){return m}});var a=[{text:"alconna --help",cmd:!0,delay:80},{text:"* Alconna CL\n# \u5f53\u524d\u53ef\u7528\u7684\u547d\u4ee4\u6709:\n - create \u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n - analysis \u5206\u6790\u547d\u4ee4\u5e76\u8f6c\u6362\u4e3a Alconna \u547d\u4ee4\u7ed3\u6784\n - help \u5c55\u793a\u6307\u5b9aAlconna\u7ec4\u4ef6\u7684\u5e2e\u52a9\u4fe1\u606f\n - using \u4f9d\u636e\u521b\u5efa\u7684 Alconna \u6765\u89e3\u6790\u8f93\u5165\u7684\u547d\u4ee4\n# \u8f93\u5165'\u547d\u4ee4\u540d --help' \u67e5\u770b\u7279\u5b9a\u547d\u4ee4\u7684\u8bed\u6cd5",cmd:!1},{text:"",cmd:!0}],c=[{text:'w.analyse_message("\u67e5\u8be2\u5317\u4eac\u5929\u6c14").header',cmd:!0,delay:80},{text:"'\u5317\u4eac'",cmd:!1},{text:'d.analyse_message(".d100").header',cmd:!0,delay:80},{text:"'100'",cmd:!1},{text:'d.analyse_message(".ra").header',cmd:!0,delay:80},{text:"True",cmd:!1},{text:"",cmd:!0}],r=[{text:'msg = "Cal -sum 12 23"',cmd:!0,delay:80},{text:"cal.analyse_message(msg).main_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23'}",cmd:!1},{text:'msg = "Cal -div 12 23 --round 2"',cmd:!0,delay:80},{text:"cal.analyse_message(msg).all_matched_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23', 'decimal': '2'}",cmd:!1},{text:"",cmd:!0}],d=[{text:'alc.analyse_message("\u53d4\u53d4\u4eca\u5929\u5403\u4ec0\u4e48\u554a?").header',cmd:!0,delay:80},{text:"'\u53d4\u53d4'",cmd:!1},{text:'alc.analyse_message("\u53d4\u53d4\u4eca\u5929\u5403tm\u548ctm\u5462").item',cmd:!0,delay:80},{text:"['tm', 'tm\u5462']",cmd:!1},{text:"",cmd:!0}],l=[{text:'alc = Alconna.from_string("/test <*tag:str>")',cmd:!0,delay:80},{text:'alc.analyse_message("/test foo bar baz").main_args',cmd:!0,delay:80},{text:"['foo', 'bar', 'baz']",cmd:!1},{text:"",cmd:!0}],m=[{text:'github.analyse_message("!github repo ArcletProject/Alconna").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:'github.shortcut("\u67e5\u770bALC", "!github repo ArcletProject/Alconna")',cmd:!0,delay:40},{text:'github.analyse_message("\u67e5\u770bALC").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:"",cmd:!0}]},4292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var a=n(7462),c=n(3366),r=(n(7294),n(3905)),d=n(9684),l=n(506),m=["components"],o={id:"strange-command",title:"\u5947\u602a\u7684\u547d\u4ee4"},s=void 0,i={unversionedId:"alconna/detail/strange-command",id:"alconna/detail/strange-command",title:"\u5947\u602a\u7684\u547d\u4ee4",description:"\u6b63\u5219\u547d\u4ee4\u5934",source:"@site/docs/alconna/detail/strange-command.mdx",sourceDirName:"alconna/detail",slug:"/alconna/detail/strange-command",permalink:"/docs/alconna/detail/strange-command",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/detail/strange-command.mdx",tags:[],version:"current",frontMatter:{id:"strange-command",title:"\u5947\u602a\u7684\u547d\u4ee4"},sidebar:"docs",previous:{title:"\u89e3\u6790\u987a\u5e8f",permalink:"/docs/alconna/detail/parse-order"},next:{title:"Args\u53ef\u4e0d\u53ea\u80fd\u4f20\u5165\u4e00\u4e2a\u53c2\u6570",permalink:"/docs/alconna/detail/much-args"}},u=[{value:"\u6b63\u5219\u547d\u4ee4\u5934",id:"\u6b63\u5219\u547d\u4ee4\u5934",children:[],level:2}],g={toc:u};function p(e){var t=e.components,n=(0,c.Z)(e,m);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6b63\u5219\u547d\u4ee4\u5934"},"\u6b63\u5219\u547d\u4ee4\u5934"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Alconna")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"command"),"\u652f\u6301\u5199\u5165\u6b63\u5219\u8868\u8fbe\u5f0f, \u6240\u4ee5\u4ee5\u4e0b\u547d\u4ee4\u662f\u53ef\u4ee5\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'w = Alconna(command=f"\u67e5\u8be2{AnyStr}\u5929\u6c14")\nd = Alconna(headers=[".ra", f".d{AnyDigit}"])\n')),(0,r.kt)(d.K,{lines:l.aI,height:240,mdxType:"TerminalApp"}))}p.isMDXComponent=!0}}]);