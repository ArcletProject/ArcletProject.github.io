"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[3785],{5036:function(e,t,n){n.d(t,{K:function(){return c}});var a={};n.r(a);var r=n(5068),l=n(7294),o=n(5798),i=[{text:"ls",cmd:!0},{text:"index.js    package.json    node_modules",cmd:!1},{text:"",cmd:!0}],c=function(e){function t(t){var n;return(n=e.call(this,t)||this).lines=t.lines||{termLines:i},n.interval=t.interval||80,n.height=t.height||240,n.prompt=t.prompt||">>> ",n}return(0,r.Z)(t,e),t.prototype.render=function(){return l.createElement("div",{style:a.default},l.createElement(o.ZP,{lines:this.lines,interval:this.interval,height:this.height,prompt:this.prompt}))},t}(l.Component)},506:function(e,t,n){n.d(t,{Lo:function(){return r},aI:function(){return o},a_:function(){return i},Z6:function(){return c},WQ:function(){return p},Xl:function(){return u},$d:function(){return d},al:function(){return f},A8:function(){return s},Et:function(){return m},wH:function(){return k},an:function(){return h},Mx:function(){return g},wx:function(){return N},Hp:function(){return x},U7:function(){return l}});var a=function(e,t,n,a){for(var r=[],l=Math.ceil(t/e),o=0;o<t;o+=l){var i=" "+o+"/"+t,c=n-(i.length+2),p=Math.ceil(o/t*c),d=c-p,m="["+"#".repeat(p)+"-".repeat(d)+"] "+i;r.push({text:m,delay:a})}return r},r=(a(250,1e3,60,5),a(100,2e3,60,5),[{text:"alconna --help",cmd:!0,delay:80},{text:"* Alconna CLI 0.8.3\n# \u5f53\u524d\u53ef\u7528\u7684\u547d\u4ee4\u6709:\n - create \u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n - analysis \u5206\u6790\u547d\u4ee4\u5e76\u8f6c\u6362\u4e3a Alconna \u547d\u4ee4\u7ed3\u6784\n - help \u5c55\u793a\u6307\u5b9aAlconna\u7ec4\u4ef6\u7684\u5e2e\u52a9\u4fe1\u606f\n - using \u4f9d\u636e\u521b\u5efa\u7684 Alconna \u6765\u89e3\u6790\u8f93\u5165\u7684\u547d\u4ee4\n# \u8f93\u5165'\u547d\u4ee4\u540d --help' \u67e5\u770b\u7279\u5b9a\u547d\u4ee4\u7684\u8bed\u6cd5",cmd:!1},{text:"",cmd:!0}]),l=[{text:"alconna create --help",cmd:!0,delay:80},{text:"create\n\u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n\u53ef\u7528\u7684\u9009\u9879\u6709:\n# \u6307\u5b9a\u547d\u4ee4\u540d\u79f0\n  --command, -C <command_name:str>\n#\u4f20\u5165\u547d\u4ee4\u5934\n  --header, -H <command_header:List[str]>\n#\u521b\u5efa\u547d\u4ee4\u9009\u9879\n  --option, -O <option_name:str> <option_args:list, default=[]>\n# \u4ece\u5df2\u7ecf\u5206\u6790\u7684\u547d\u4ee4\u7ed3\u6784\u4e2d\u521b\u5efaAlconna\n  --analysed, -A",cmd:!1},{text:"",cmd:!0}],o=[{text:'w.parse("\u67e5\u8be2\u5317\u4eac\u5929\u6c14").header',cmd:!0,delay:80},{text:"{'city':'\u5317\u4eac'}",cmd:!1},{text:'d.parse(".rd100").header',cmd:!0,delay:80},{text:"{'count':'100'}",cmd:!1},{text:"",cmd:!0}],i=[{text:'msg = "Cal -sum 12 23"',cmd:!0,delay:80},{text:"cal.parse(msg).main_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23'}",cmd:!1},{text:'msg = "Cal -div 12 23 --round 2"',cmd:!0,delay:80},{text:"cal.parse(msg).all_matched_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23', 'decimal': '2'}",cmd:!1},{text:"",cmd:!0}],c=[{text:'alc.parse("\u53d4\u53d4\u4eca\u5929\u5403\u4ec0\u4e48\u554a?").header',cmd:!0,delay:80},{text:"{'name': '\u53d4\u53d4'}",cmd:!1},{text:'alc.parse("\u53d4\u53d4\u4eca\u5929\u5403tm\u548ctm\u5462").item',cmd:!0,delay:80},{text:"['tm', 'tm\u5462']",cmd:!1},{text:"",cmd:!0}],p=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test foo bar baz")',cmd:!0,delay:40},{text:"['test', {'foo': ['foo', 'bar', 'baz']}]",cmd:!1},{text:'analyse_option(opt1, "test a=1 b=2 c=3")',cmd:!0,delay:40},{text:"['test', {'foo': {'a': '1', 'b': '2', 'c': '3'}}]",cmd:!1},{text:"",cmd:!0}],d=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test abc")',cmd:!0,delay:40},{text:"['test', {'foo': 'abc'}]",cmd:!1},{text:'analyse_option(opt1, "test a")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: param a is incorrect",cmd:!1},{text:"",cmd:!0}],m=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test foo=123")',cmd:!0,delay:40},{text:"['test', {'foo': 123}]",cmd:!1},{text:'analyse_option(opt1, "test 123")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: 123 missing its key. \nDo you forget to add 'foo='?",cmd:!1},{text:"",cmd:!0}],s=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test abc")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: param abc is incorrect",cmd:!1},{text:'analyse_option(opt1, "test abc")',cmd:!0,delay:40},{text:"['test', {}]",cmd:!1},{text:"",cmd:!0}],u=[{text:'github.parse("!github repo ArcletProject/Alconna").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:'github.shortcut("\u67e5\u770bALC", "!github repo ArcletProject/Alconna")',cmd:!0,delay:40},{text:'github.parse("\u67e5\u770bALC").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:"",cmd:!0}],f=[{text:"alc.get_help()",cmd:!0,delay:40},{text:"test <foo:str>\nUnknown Information\n",cmd:!1},{text:"alc1.get_help()",cmd:!0,delay:40},{text:"test1 <foo>\nUnknown Information\n",cmd:!1},{text:"",cmd:!0}],k=[{text:"python test_cooldown.py",cmd:!0,delay:40},{text:"matched=False, head_matched=True, error_data=[], error_info=\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41",cmd:!1},{text:"matched=True, head_matched=True, main_args={'bar': 1}",cmd:!1},{text:"matched=False, head_matched=True, error_data=[], error_info=\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41",cmd:!1},{text:"matched=True, head_matched=True, main_args={'bar': 3}",cmd:!1},{text:"",cmd:!0}],h=[{text:'alc.parse("cut_img --height=640")',cmd:!0,delay:40},{text:'matched=True, head_matched=True, main_args={"--width": 1280, "--height":640}',cmd:!1},{text:"",cmd:!0}],g=[{text:"print(alc)",cmd:!0,delay:40},{text:"<ALC.Alconna::command with 1 options; args=Args('foo': '<class 'int'>')>",cmd:!1},{text:"",cmd:!0}],N=[{text:'alc.parse("tets_fuzzy 123")',cmd:!0,delay:40},{text:"tets_fuzzy is not matched. Do you mean \"test_fuzzy\"?\nmatched=False, head_matched=True, error_data=['123'], error_info=None",cmd:!1},{text:"",cmd:!0}],x=[{text:'alc.parse("!command --baz abc")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: \u4ee5\u4e0b\u53c2\u6570\u6ca1\u6709\u88ab\u6b63\u786e\u89e3\u6790\u54e6~\n: --baz\n\u8bf7\u4e3b\u4eba\u68c0\u67e5\u4e00\u4e0b\u547d\u4ee4\u662f\u5426\u6b63\u786e\u8f93\u5165\u4e86\u5462~",cmd:!1},{text:"",cmd:!0}]},2578:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(8239)),r=c(n(2723)),l=c(n(7294)),o=c(n(5697)),i=c(n(3662));function c(e){return e&&e.__esModule?e:{default:e}}var p=function(e){var t=e.children,n=(0,r.default)(e,["children"]);return l.default.createElement(i.default,(0,a.default)({},n,{code:!0}),t)};p.propTypes={children:o.default.string},t.default=p},9690:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(8239)),r=u(n(5105)),l=u(n(9663)),o=u(n(2600)),i=u(n(9135)),c=u(n(3196)),p=u(n(7294)),d=u(n(5697)),m=u(n(3662)),s=u(n(6653));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.content=(0,s.default)(e.lines),n.state={lines:n.content.next().value,completed:!1},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){var t=e.content.next(),n=t.value,a=t.done;e.setState({lines:n}),a&&(clearInterval(e.timer),e.setState({completed:!0}))}),this.props.interval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"replay",value:function(){var e=this,t=this.props;this.content=(0,s.default)(t.lines),this.setState({completed:!1}),this.timer=setInterval((function(){var t=e.content.next(),n=t.value,a=t.done;e.setState({lines:n}),a&&(clearInterval(e.timer),e.setState({completed:!0}))}),this.props.interval)}},{key:"render",value:function(){var e=this;return p.default.createElement(m.default,(0,a.default)({},this.props,{onReplay:function(){return e.replay()},completed:this.state.completed}),this.state.lines)}}]),t}(p.default.Component);f.defaultProps={interval:100,lines:[]},f.propTypes={interval:d.default.number,lines:d.default.array},t.default=f},3662:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(7294)),r=o(n(4184)),l=o(n(5697));function o(e){return e&&e.__esModule?e:{default:e}}var i=a.default.createElement("span",{className:"Terminal-cursor"}),c=function(e){return(0,r.default)({"Terminal-window":!0,"Terminal-window-white":e})},p=function(e){return(0,r.default)({"Terminal-term":!0,"Terminal-term-code":e})},d=function(e){return(0,r.default)({"Terminal-btn":!0,"Terminal-btn-close":"close"===e,"Terminal-btn-minimize":"minimize"===e,"Terminal-btn-maximize":"maximize"===e})},m=function(e){return(0,r.default)({"Terminal-body":!0,"Terminal-body-animated":!e})},s=function(e,t){return(0,r.default)({"Terminal-console":!0,"Terminal-console-code":e,"Terminal-console-white":t})},u=function(e){var t=e.children,n=e.white,r=e.height,l=e.code,o=e.prompt,u=e.onReplay,f=e.completed,k=n?"Terminal-control-btn Terminal-control-btn-white":"Terminal-control-btn";return a.default.createElement("div",{className:c(n)},a.default.createElement("div",{className:p(l),style:r?{height:r}:null},a.default.createElement("div",{className:"Terminal-header"},a.default.createElement("span",{className:d("close")}),a.default.createElement("span",{className:d("minimize")}),a.default.createElement("span",{className:d("maximize")})),a.default.createElement("div",{className:m(l)},a.default.createElement("div",{className:s(l,n)},l?a.default.createElement("code",{className:"Terminal-code"},t):a.default.createElement("div",null,a.default.createElement("div",{className:"Terminal-code"},function(e,t){return e.map((function(e){return a.default.createElement(a.default.Fragment,{key:e.id},e.cmd?t:"",e.text,e.current?i:"",a.default.createElement("br",null))}))}(t,o)),f?a.default.createElement("a",{className:k,onClick:function(){return u()}},"Replay"):null)))))};u.defaultProps={children:[],white:!1,height:240,code:!1,prompt:"$ ",onReplay:function(){},completed:!1},u.propTypes={children:l.default.oneOfType([l.default.array,l.default.string]),white:l.default.bool,height:l.default.number,code:l.default.bool,prompt:l.default.string,onReplay:l.default.func,completed:l.default.bool},t.default=u},6653:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(4942),l=(a=r)&&a.__esModule?a:{default:a};var o=l.default.mark((function e(t){var n,a,r,o,i,c,p,d,m,s,u,f;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",[]);case 2:n=0,a=0,r=null,o=0,i=null,c=0,p=[];case 9:if(!(n<t.length)){e.next=43;break}if(t[n].cmd){e.next=38;break}if(d=t[n].frames){e.next=21;break}return p.push({id:n,text:t[n].text,cmd:!1,current:!1}),e.next=17,p;case 17:a=0,n++,e.next=36;break;case 21:if(!(o<d.length)){e.next=34;break}if(0===o&&(i||0!==c||p.push({id:n,text:d[0].text,cmd:!1,current:!0})),p[n].text=d[o].text,null!=i){e.next=32;break}if(isNaN(d[o].delay)){e.next=31;break}return i=setTimeout((function(){clearTimeout(i),i=null,o++}),d[o].delay),e.next=29,p;case 29:e.next=32;break;case 31:o++;case 32:e.next=36;break;case 34:m=t[n],s=m.repeat,u=m.repeatCount,s&&c<u?(c++,o=0):(t[n].text&&(p[n].text=t[n].text),p[n].current=!1,a=0,o=0,n++);case 36:e.next=39;break;case 38:a>t[n].text.length?(p[n].current=n===t.length-1,a=0,n++):(0!==a||r||p.push({id:n,text:"",cmd:t[n].cmd,current:!0}),p[n].text=t[n].text.substring(0,a),null==r&&(f=t[n].delay,isNaN(f)?a++:r=setTimeout((function(){clearTimeout(r),r=null,a++}),f)));case 39:return e.next=41,p;case 41:e.next=44;break;case 43:return e.abrupt("return",p);case 44:e.next=9;break;case 46:case"end":return e.stop()}}),e,this)}));t.default=o},5798:function(e,t,n){var a=r(n(9690));function r(e){return e&&e.__esModule?e:{default:e}}r(n(2578)).default,t.ZP=a.default},115:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(5036),i=n(506),c=["components"],p={id:"alconna-args",title:"\u547d\u4ee4\u53c2\u6570"},d=void 0,m={unversionedId:"alconna/basic/alconna-args",id:"alconna/basic/alconna-args",title:"\u547d\u4ee4\u53c2\u6570",description:"Args",source:"@site/docs/alconna/basic/alconna-args.mdx",sourceDirName:"alconna/basic",slug:"/alconna/basic/alconna-args",permalink:"/docs/alconna/basic/alconna-args",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/basic/alconna-args.mdx",tags:[],version:"current",frontMatter:{id:"alconna-args",title:"\u547d\u4ee4\u53c2\u6570"},sidebar:"docs",previous:{title:"\u547d\u4ee4\u8282\u70b9",permalink:"/docs/alconna/basic/alconna-command-node"},next:{title:"\u9009\u9879\u4e0e\u5b50\u547d\u4ee4",permalink:"/docs/alconna/basic/alconna-opt-and-sub"}},s=[{value:"Args",id:"args",children:[{value:"extra",id:"extra",children:[],level:3},{value:"separator",id:"separator",children:[],level:3}],level:2},{value:"AnyParam \u4e0e AllParam",id:"anyparam-\u4e0e-allparam",children:[],level:2},{value:"\u6807\u8bc6\u7b26\u63a7\u5236",id:"\u6807\u8bc6\u7b26\u63a7\u5236",children:[{value:"multi args",id:"multi-args",children:[],level:3},{value:"anti args",id:"anti-args",children:[],level:3},{value:"optional args",id:"optional-args",children:[],level:3},{value:"kwonly args",id:"kwonly-args",children:[],level:3},{value:"hidden type_hint",id:"hidden-type_hint",children:[],level:3},{value:"force type",id:"force-type",children:[],level:3}],level:2},{value:"\u7279\u6b8a\u7c7b\u578b",id:"\u7279\u6b8a\u7c7b\u578b",children:[{value:"choice args",id:"choice-args",children:[],level:3}],level:2}],u={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"args"},"Args"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Args")," \u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u7c7b\uff0c\u7528\u6765\u5305\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"command"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"args"),", \u5373\u547d\u4ee4\u53c2\u6570, \u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Option\nopt = Option("test", args=Args(foo=str, num=int).default(foo="bar"))\n')),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Option\nopt = Option("test", args=Args["foo":str:"bar", "num":int])\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Args")," \u6784\u9020\u65f6\u9700\u8981\u683c\u5f0f\u4e3aKey-Value-Default\u7684\u591a\u4e2a\u53c2\u6570, \u6216\u4f20\u5165\u591a\u4e2aslice\u5bf9\u8c61"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528Args\u76f8\u5173\u7684\u9b54\u672f\u65b9\u6cd5\uff0c\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> ar = Args[\"test\":bool:True][\"aaa\":str:\"bbb\"] << Args[\"perm\":str:\"de\"] + [\"month\", int]\n>>> ar\nArgs('test': '(True|False)' = 'True', 'aaa': '(.+)' = 'bbb', 'perm': '(.+)' = 'de', 'month': '(\\d+)')\n>>> ar1 = Args.foo['bar', ...]\n>>> ar1\nArgs('bar', <class 'inspect._empty'>)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Args.default()")," \u7528\u6765\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\u7684\u9ed8\u8ba4\u503c"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"int"),",",(0,l.kt)("inlineCode",{parentName:"p"},"bool"),"\u7c7b\u7684\u53c2\u6570, ",(0,l.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u89e3\u6790\u6210\u529f\u540e\u4f1a\u628a\u5339\u914d\u51fa\u6765\u7684\u503c(\u5e94\u8be5\u662fstr) \u8f6c\u56de\u5bf9\u5e94\u7684\u7c7b\u578b (\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"'123'"),"\u53d8\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"123"),")"),(0,l.kt)("h3",{id:"extra"},"extra"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Args")," \u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"extra"),"\u53c2\u6570, \u5176\u503c\u53ea\u80fd\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"allow"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"reject"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"ignore")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f20\u5165\u7684\u672a\u77e5\u7c7b\u578b"),(0,l.kt)("p",null,"\u82e5extra\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"allow"),", \u5219Args\u4f1a\u4fdd\u7559\u8fd9\u4e2a\u672a\u77e5\u7c7b\u578b"),(0,l.kt)("p",null,"\u82e5extra\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"reject"),", \u5219Args\u4f1a\u629b\u51fa\u5f02\u5e38"),(0,l.kt)("p",null,"\u82e5extra\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"ignore"),", \u5219Args\u4f1a\u628a\u8fd9\u4e2a\u672a\u77e5\u7c7b\u578b\u5f53\u4f5cAnyParam\u5904\u7406"),(0,l.kt)("h3",{id:"separator"},"separator"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Args")," \u4e5f\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"CommandNode")," \u4e00\u6837\u80fd\u591f\u63a5\u53d7\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"separator"),"\u53c2\u6570, \u5176\u503c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"' '")),(0,l.kt)("p",null,"Args \u7684 separator \u4ec5\u5728\u5305\u542b\u591a\u4e2a\u53c2\u6570\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Args")," \u4e2d\u6709\u6548\uff0c\u5982\u4e0b\u6240\u793a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Command(\n    ...,\n    Separator("main_sep"),\n    Segment(\n        Name("opt1"),\n        Separator("opt1_sep"),\n        Segment(\n            Param("value1"),\n            Separator("args_sep"),\n            Param("value2"),\n            Separator("args_sep"),\n            ...,\n            Param("valueN")\n        )\n    ),\n    Separator("main_sep"),\n    Segment(\n        Name("opt2"),\n        Separator("opt2_sep"),\n        ...\n    )\n)\n')),(0,l.kt)("h2",{id:"anyparam-\u4e0e-allparam"},"AnyParam \u4e0e AllParam"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AnyParam"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"AllParam"),"\u662f\u7279\u6b8a\u7684\u4e24\u79cd\u53c2\u6570\u7c7b\u578b, \u4f5c\u7528\u5206\u522b\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u5355\u53c2"),"\u6cdb\u5339\u914d\u4e0e",(0,l.kt)("strong",{parentName:"p"},"\u5168\u53c2"),"\u6cdb\u5339\u914d"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"alconna.types"),"\u91cc\u627e\u5230\u5b83\u4eec"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u540c\u4e2a\u547d\u4ee4, ",(0,l.kt)("inlineCode",{parentName:"p"},"/test foo bar 123")," \u6765\u8bb2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import AnyParam, AllParam, Alconna, Args\n\ntest1 = Alconna(\n    command="/test",\n    main_args=Args["wild":AnyParam],\n)\n\ntest2 = Alconna(\n    command="/test",\n    main_args=Args["wild":AllParam],\n)\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test1"),"\u53ea\u80fd\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u5339\u914d\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"wild")),(0,l.kt)("p",null,"\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"test2")," \u80fd\u591f\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"foo bar 123")," \u5339\u914d\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"wild")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"AllParam"),"\u4f1a\u76f4\u63a5\u622a\u65ad\u540e\u7eed\u7684\u547d\u4ee4\u89e3\u6790\u64cd\u4f5c, \u8bf7\u8c28\u614e\u4f7f\u7528"))),(0,l.kt)("h2",{id:"\u6807\u8bc6\u7b26\u63a7\u5236"},"\u6807\u8bc6\u7b26\u63a7\u5236"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Args"),"\u6bcf\u4f4d\u53c2\u6570\u7684 key \u53ef\u4ee5\u52a0\u6709\u540e\u7f00\u4f5c\u4e3a\u6807\u8bc6\u7b26, \u7528\u6765\u8d4b\u4e88\u8be5\u53c2\u6570\u7279\u6b8a\u7684\u529f\u80fd"),(0,l.kt)("p",null,"\u76ee\u524d\u6709 7 \u79cd\u6807\u8bc6\u7b26, \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"W"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"A"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"F"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"K"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"O")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"H")),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26\u5e94\u4e0e key \u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},";")," \u5206\u9694, \u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"'|'")," \u533a\u5206"),(0,l.kt)("h3",{id:"multi-args"},"multi args"),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"W")," \u53ef\u4ee5\u8ba9\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\u53ef\u4ee5\u63a5\u53d7\u6307\u5b9a\u7c7b\u578b\u7684\u4e0d\u5b9a\u6570\u91cf\u7684\u53c2\u6570, \u4f46\u4e0d\u4f1a\u50cf",(0,l.kt)("inlineCode",{parentName:"p"},"AllParam"),"\u4e00\u6837\u622a\u65ad\u89e3\u6790\u64cd\u4f5c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"S")," \u8868\u793a\u5f53\u524d\u53c2\u6570\u4e3a\u53ef\u53d8\u957f\u975e\u952e\u503c\u5bf9\u53c2\u6570, \u7c7b\u4f3c\u51fd\u6570\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"*args"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"W")," \u8868\u793a\u5f53\u524d\u53c2\u6570\u4e3a\u53ef\u53d8\u957f\u952e\u503c\u5bf9\u53c2\u6570, \u7c7b\u4f3c\u51fd\u6570\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"**kwargs"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Option\n\nopt = Option("test", Args["foo;S":str])\nopt1 = Option("test", Args["foo;W":str])\n')),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u8f93\u5165\u5982\u4e0b\u547d\u4ee4:"),(0,l.kt)(o.K,{lines:i.WQ,height:240,mdxType:"TerminalApp"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6b63\u6574\u6570\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u6807\u8bc6\u7b26, \u5176\u4f1a\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," \u7684\u9650\u5236\u6027\u64cd\u4f5c. \u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"key;3")," \u8868\u793a\u9700\u8981\u4f20\u5165 0 \u81f3 3 \u4e2a\u53c2\u6570\u3002"))),(0,l.kt)("h3",{id:"anti-args"},"anti args"),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," \u53ef\u4ee5\u8ba9\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u4e0d\u80fd\u63a5\u53d7\u6307\u5b9a\u7684\u53c2\u6570."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Option\n\nopt = Option("test", Args["foo;A":int])\nopt1 = Option("test", Args["foo;A":["a", "b", "c"]])\nopt2 = Option("test", Args["foo;A":"(.+?)/(.+?)\\.py"])\n')),(0,l.kt)(o.K,{lines:i.$d,height:300,mdxType:"TerminalApp"}),(0,l.kt)("h3",{id:"optional-args"},"optional args"),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"O")," \u53ef\u4ee5\u8ba9\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u6210\u4e3a\u53ef\u9009\u53c2\u6570."),(0,l.kt)("p",null,"\u53ef\u9009\u53c2\u6570\u5728\u89e3\u6790\u5931\u8d25\u65f6(\u5305\u62ecdefault\u4e3a\u7a7a\u65f6)\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38, \u800c\u662f\u8df3\u8fc7."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Option\n\nopt = Option("test", Args["foo":int])\nopt1 = Option("test", Args["foo;O":int])\n')),(0,l.kt)(o.K,{lines:i.A8,height:300,mdxType:"TerminalApp"}),(0,l.kt)("h3",{id:"kwonly-args"},"kwonly args"),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"K")," \u53ef\u4ee5\u8ba9\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u5728\u83b7\u53d6\u53c2\u6570\u65f6\u5fc5\u987b\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"{key}=")," \u7684\u5b57\u6837."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Option\n\nopt = Option("test", Args["foo;K":int])\n')),(0,l.kt)(o.K,{lines:i.Et,height:300,mdxType:"TerminalApp"}),(0,l.kt)("h3",{id:"hidden-type_hint"},"hidden type_hint"),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"H")," \u53ef\u4ee5\u8ba9\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u5728 help_text \u6253\u5370\u65f6\u4e0d\u663e\u793a\u5176\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Alconna\n\nalc = Alconna("test", main_args=Args["foo":int])\nalc1 = Alconna("test1", main_args=Args["foo;H":int])\n')),(0,l.kt)(o.K,{lines:i.al,height:300,mdxType:"TerminalApp"}),(0,l.kt)("h3",{id:"force-type"},"force type"),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," \u53ef\u4ee5\u8ba9\u4f20\u5165\u7684\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u4e0d\u7ecf\u8fc7\u5185\u90e8\u7684\u7c7b\u578b\u8f6c\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Args, Alconna\n\nalc = Alconna("command", Args["foo;F":int])\n')),(0,l.kt)(o.K,{lines:i.Mx,height:200,mdxType:"TerminalApp"}),(0,l.kt)("h2",{id:"\u7279\u6b8a\u7c7b\u578b"},"\u7279\u6b8a\u7c7b\u578b"),(0,l.kt)("h3",{id:"choice-args"},"choice args"),(0,l.kt)("p",null,"\u901a\u8fc7\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\u4f20\u5165\u4e00\u4e2a\u5217\u8868\u6216\u8005Union, \u53ef\u4ee5\u9650\u5b9a\u89e3\u6790\u65f6\u53c2\u6570\u7684\u53d6\u503c\u8303\u56f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Union\nfrom arclet.alconna import Args, Option\n\nopt = Option("test", Args["foo":["bar", "baz"]])\nopt1 = Option("test", Args["foo":Union[int, bool]])\n')),(0,l.kt)("p",null,"\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u7684\u503c\u4e0d\u5728",(0,l.kt)("inlineCode",{parentName:"p"},'["bar", "baz"]'),"\u4e2d\u65f6, ",(0,l.kt)("inlineCode",{parentName:"p"},"Alconna"),"\u4f1a\u62a5\u9519"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u60f3\u8fbe\u5230\u89e3\u6790float\u7c7b\u578b\u7684\u53c2\u6570\u6216\u67d0\u4e2a\u6307\u5b9a\u7684\u503c(\u5982",'[float, "qux"]',"), \u4f60\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"UnionArg"),", \u7136\u540e"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Option, Args\nfrom arclet.alconna.types import UnionArg\n\nopt = Option("test", Args["foo":UnionArg[float, "qux"]])\n')),(0,l.kt)("p",{parentName:"div"},"\u8fd9\u6837'foo'\u5c31\u53ea\u80fd\u4e3afloat\u6216\u8005'qux'"))))}f.isMDXComponent=!0}}]);