"use strict";(self.webpackChunkarclet_penoparma=self.webpackChunkarclet_penoparma||[]).push([[4831],{5036:function(e,t,n){n.d(t,{K:function(){return d}});var a={};n.r(a);var r=n(5068),c=n(7294),l=n(5798),o=[{text:"ls",cmd:!0},{text:"index.js    package.json    node_modules",cmd:!1},{text:"",cmd:!0}],d=function(e){function t(t){var n;return(n=e.call(this,t)||this).lines=t.lines||{termLines:o},n.interval=t.interval||80,n.height=t.height||240,n.prompt=t.prompt||">>> ",n}return(0,r.Z)(t,e),t.prototype.render=function(){return c.createElement("div",{style:a.default},c.createElement(l.ZP,{lines:this.lines,interval:this.interval,height:this.height,prompt:this.prompt}))},t}(c.Component)},506:function(e,t,n){n.d(t,{Lo:function(){return r},aI:function(){return l},a_:function(){return o},Z6:function(){return d},WQ:function(){return i},Xl:function(){return f},$d:function(){return m},al:function(){return p},A8:function(){return s},Et:function(){return u},wH:function(){return x},an:function(){return h},Mx:function(){return y},wx:function(){return _},Hp:function(){return b},U7:function(){return c}});var a=function(e,t,n,a){for(var r=[],c=Math.ceil(t/e),l=0;l<t;l+=c){var o=" "+l+"/"+t,d=n-(o.length+2),i=Math.ceil(l/t*d),m=d-i,u="["+"#".repeat(i)+"-".repeat(m)+"] "+o;r.push({text:u,delay:a})}return r},r=(a(250,1e3,60,5),a(100,2e3,60,5),[{text:"alconna --help",cmd:!0,delay:80},{text:"* Alconna CLI 0.8.3\n# \u5f53\u524d\u53ef\u7528\u7684\u547d\u4ee4\u6709:\n - create \u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n - analysis \u5206\u6790\u547d\u4ee4\u5e76\u8f6c\u6362\u4e3a Alconna \u547d\u4ee4\u7ed3\u6784\n - help \u5c55\u793a\u6307\u5b9aAlconna\u7ec4\u4ef6\u7684\u5e2e\u52a9\u4fe1\u606f\n - using \u4f9d\u636e\u521b\u5efa\u7684 Alconna \u6765\u89e3\u6790\u8f93\u5165\u7684\u547d\u4ee4\n# \u8f93\u5165'\u547d\u4ee4\u540d --help' \u67e5\u770b\u7279\u5b9a\u547d\u4ee4\u7684\u8bed\u6cd5",cmd:!1},{text:"",cmd:!0}]),c=[{text:"alconna create --help",cmd:!0,delay:80},{text:"create\n\u5f00\u59cb\u521b\u5efa Alconna \u547d\u4ee4\n\u53ef\u7528\u7684\u9009\u9879\u6709:\n# \u6307\u5b9a\u547d\u4ee4\u540d\u79f0\n  --command, -C <command_name:str>\n#\u4f20\u5165\u547d\u4ee4\u5934\n  --header, -H <command_header:List[str]>\n#\u521b\u5efa\u547d\u4ee4\u9009\u9879\n  --option, -O <option_name:str> <option_args:list, default=[]>\n# \u4ece\u5df2\u7ecf\u5206\u6790\u7684\u547d\u4ee4\u7ed3\u6784\u4e2d\u521b\u5efaAlconna\n  --analysed, -A",cmd:!1},{text:"",cmd:!0}],l=[{text:'w.parse("\u67e5\u8be2\u5317\u4eac\u5929\u6c14").header',cmd:!0,delay:80},{text:"{'city':'\u5317\u4eac'}",cmd:!1},{text:'d.parse(".rd100").header',cmd:!0,delay:80},{text:"{'count':'100'}",cmd:!1},{text:"",cmd:!0}],o=[{text:'msg = "Cal -sum 12 23"',cmd:!0,delay:80},{text:"cal.parse(msg).main_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23'}",cmd:!1},{text:'msg = "Cal -div 12 23 --round 2"',cmd:!0,delay:80},{text:"cal.parse(msg).all_matched_args",cmd:!0},{text:"{'num_a': '12', 'num_b': '23', 'decimal': '2'}",cmd:!1},{text:"",cmd:!0}],d=[{text:'alc.parse("\u53d4\u53d4\u4eca\u5929\u5403\u4ec0\u4e48\u554a?").header',cmd:!0,delay:80},{text:"{'name': '\u53d4\u53d4'}",cmd:!1},{text:'alc.parse("\u53d4\u53d4\u4eca\u5929\u5403tm\u548ctm\u5462").item',cmd:!0,delay:80},{text:"['tm', 'tm\u5462']",cmd:!1},{text:"",cmd:!0}],i=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test foo bar baz")',cmd:!0,delay:40},{text:"['test', {'foo': ['foo', 'bar', 'baz']}]",cmd:!1},{text:'analyse_option(opt1, "test a=1 b=2 c=3")',cmd:!0,delay:40},{text:"['test', {'foo': {'a': '1', 'b': '2', 'c': '3'}}]",cmd:!1},{text:"",cmd:!0}],m=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test abc")',cmd:!0,delay:40},{text:"['test', {'foo': 'abc'}]",cmd:!1},{text:'analyse_option(opt1, "test a")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: param a is incorrect",cmd:!1},{text:"",cmd:!0}],u=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test foo=123")',cmd:!0,delay:40},{text:"['test', {'foo': 123}]",cmd:!1},{text:'analyse_option(opt1, "test 123")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: 123 missing its key. \nDo you forget to add 'foo='?",cmd:!1},{text:"",cmd:!0}],s=[{text:"from arclet.alconna.analysis import analyse_option",cmd:!0,delay:80},{text:'analyse_option(opt, "test abc")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: param abc is incorrect",cmd:!1},{text:'analyse_option(opt1, "test abc")',cmd:!0,delay:40},{text:"['test', {}]",cmd:!1},{text:"",cmd:!0}],f=[{text:'github.parse("!github repo ArcletProject/Alconna").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:'github.shortcut("\u67e5\u770bALC", "!github repo ArcletProject/Alconna")',cmd:!0,delay:40},{text:'github.parse("\u67e5\u770bALC").repo',cmd:!0},{text:"ArcletProject/Alconna",cmd:!1},{text:"",cmd:!0}],p=[{text:"alc.get_help()",cmd:!0,delay:40},{text:"test <foo:str>\nUnknown Information\n",cmd:!1},{text:"alc1.get_help()",cmd:!0,delay:40},{text:"test1 <foo>\nUnknown Information\n",cmd:!1},{text:"",cmd:!0}],x=[{text:"python test_cooldown.py",cmd:!0,delay:40},{text:"matched=False, head_matched=True, error_data=[], error_info=\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41",cmd:!1},{text:"matched=True, head_matched=True, main_args={'bar': 1}",cmd:!1},{text:"matched=False, head_matched=True, error_data=[], error_info=\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41",cmd:!1},{text:"matched=True, head_matched=True, main_args={'bar': 3}",cmd:!1},{text:"",cmd:!0}],h=[{text:'alc.parse("cut_img --height=640")',cmd:!0,delay:40},{text:'matched=True, head_matched=True, main_args={"--width": 1280, "--height":640}',cmd:!1},{text:"",cmd:!0}],y=[{text:"print(alc)",cmd:!0,delay:40},{text:"<ALC.Alconna::command with 1 options; args=Args('foo': '<class 'int'>')>",cmd:!1},{text:"",cmd:!0}],_=[{text:'alc.parse("tets_fuzzy 123")',cmd:!0,delay:40},{text:"tets_fuzzy is not matched. Do you mean \"test_fuzzy\"?\nmatched=False, head_matched=True, error_data=['123'], error_info=None",cmd:!1},{text:"",cmd:!0}],b=[{text:'alc.parse("!command --baz abc")',cmd:!0,delay:40},{text:"Traceback (most recent call last):\narclet.alconna.exceptions.ParamsUnmatched: \u4ee5\u4e0b\u53c2\u6570\u6ca1\u6709\u88ab\u6b63\u786e\u89e3\u6790\u54e6~\n: --baz\n\u8bf7\u4e3b\u4eba\u68c0\u67e5\u4e00\u4e0b\u547d\u4ee4\u662f\u5426\u6b63\u786e\u8f93\u5165\u4e86\u5462~",cmd:!1},{text:"",cmd:!0}]},2578:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(8239)),r=d(n(2723)),c=d(n(7294)),l=d(n(5697)),o=d(n(3662));function d(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.children,n=(0,r.default)(e,["children"]);return c.default.createElement(o.default,(0,a.default)({},n,{code:!0}),t)};i.propTypes={children:l.default.string},t.default=i},9690:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(8239)),r=f(n(5105)),c=f(n(9663)),l=f(n(2600)),o=f(n(9135)),d=f(n(3196)),i=f(n(7294)),m=f(n(5697)),u=f(n(3662)),s=f(n(6653));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,c.default)(this,t);var n=(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.content=(0,s.default)(e.lines),n.state={lines:n.content.next().value,completed:!1},n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){var t=e.content.next(),n=t.value,a=t.done;e.setState({lines:n}),a&&(clearInterval(e.timer),e.setState({completed:!0}))}),this.props.interval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"replay",value:function(){var e=this,t=this.props;this.content=(0,s.default)(t.lines),this.setState({completed:!1}),this.timer=setInterval((function(){var t=e.content.next(),n=t.value,a=t.done;e.setState({lines:n}),a&&(clearInterval(e.timer),e.setState({completed:!0}))}),this.props.interval)}},{key:"render",value:function(){var e=this;return i.default.createElement(u.default,(0,a.default)({},this.props,{onReplay:function(){return e.replay()},completed:this.state.completed}),this.state.lines)}}]),t}(i.default.Component);p.defaultProps={interval:100,lines:[]},p.propTypes={interval:m.default.number,lines:m.default.array},t.default=p},3662:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(7294)),r=l(n(4184)),c=l(n(5697));function l(e){return e&&e.__esModule?e:{default:e}}var o=a.default.createElement("span",{className:"Terminal-cursor"}),d=function(e){return(0,r.default)({"Terminal-window":!0,"Terminal-window-white":e})},i=function(e){return(0,r.default)({"Terminal-term":!0,"Terminal-term-code":e})},m=function(e){return(0,r.default)({"Terminal-btn":!0,"Terminal-btn-close":"close"===e,"Terminal-btn-minimize":"minimize"===e,"Terminal-btn-maximize":"maximize"===e})},u=function(e){return(0,r.default)({"Terminal-body":!0,"Terminal-body-animated":!e})},s=function(e,t){return(0,r.default)({"Terminal-console":!0,"Terminal-console-code":e,"Terminal-console-white":t})},f=function(e){var t=e.children,n=e.white,r=e.height,c=e.code,l=e.prompt,f=e.onReplay,p=e.completed,x=n?"Terminal-control-btn Terminal-control-btn-white":"Terminal-control-btn";return a.default.createElement("div",{className:d(n)},a.default.createElement("div",{className:i(c),style:r?{height:r}:null},a.default.createElement("div",{className:"Terminal-header"},a.default.createElement("span",{className:m("close")}),a.default.createElement("span",{className:m("minimize")}),a.default.createElement("span",{className:m("maximize")})),a.default.createElement("div",{className:u(c)},a.default.createElement("div",{className:s(c,n)},c?a.default.createElement("code",{className:"Terminal-code"},t):a.default.createElement("div",null,a.default.createElement("div",{className:"Terminal-code"},function(e,t){return e.map((function(e){return a.default.createElement(a.default.Fragment,{key:e.id},e.cmd?t:"",e.text,e.current?o:"",a.default.createElement("br",null))}))}(t,l)),p?a.default.createElement("a",{className:x,onClick:function(){return f()}},"Replay"):null)))))};f.defaultProps={children:[],white:!1,height:240,code:!1,prompt:"$ ",onReplay:function(){},completed:!1},f.propTypes={children:c.default.oneOfType([c.default.array,c.default.string]),white:c.default.bool,height:c.default.number,code:c.default.bool,prompt:c.default.string,onReplay:c.default.func,completed:c.default.bool},t.default=f},6653:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(4942),c=(a=r)&&a.__esModule?a:{default:a};var l=c.default.mark((function e(t){var n,a,r,l,o,d,i,m,u,s,f,p;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",[]);case 2:n=0,a=0,r=null,l=0,o=null,d=0,i=[];case 9:if(!(n<t.length)){e.next=43;break}if(t[n].cmd){e.next=38;break}if(m=t[n].frames){e.next=21;break}return i.push({id:n,text:t[n].text,cmd:!1,current:!1}),e.next=17,i;case 17:a=0,n++,e.next=36;break;case 21:if(!(l<m.length)){e.next=34;break}if(0===l&&(o||0!==d||i.push({id:n,text:m[0].text,cmd:!1,current:!0})),i[n].text=m[l].text,null!=o){e.next=32;break}if(isNaN(m[l].delay)){e.next=31;break}return o=setTimeout((function(){clearTimeout(o),o=null,l++}),m[l].delay),e.next=29,i;case 29:e.next=32;break;case 31:l++;case 32:e.next=36;break;case 34:u=t[n],s=u.repeat,f=u.repeatCount,s&&d<f?(d++,l=0):(t[n].text&&(i[n].text=t[n].text),i[n].current=!1,a=0,l=0,n++);case 36:e.next=39;break;case 38:a>t[n].text.length?(i[n].current=n===t.length-1,a=0,n++):(0!==a||r||i.push({id:n,text:"",cmd:t[n].cmd,current:!0}),i[n].text=t[n].text.substring(0,a),null==r&&(p=t[n].delay,isNaN(p)?a++:r=setTimeout((function(){clearTimeout(r),r=null,a++}),p)));case 39:return e.next=41,i;case 41:e.next=44;break;case 43:return e.abrupt("return",i);case 44:e.next=9;break;case 46:case"end":return e.stop()}}),e,this)}));t.default=l},5798:function(e,t,n){var a=r(n(9690));function r(e){return e&&e.__esModule?e:{default:e}}r(n(2578)).default,t.ZP=a.default},4292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var a=n(7462),r=n(3366),c=(n(7294),n(3905)),l=n(5036),o=n(506),d=["components"],i={id:"strange-command",title:"\u5947\u602a\u7684\u547d\u4ee4"},m=void 0,u={unversionedId:"alconna/detail/strange-command",id:"alconna/detail/strange-command",title:"\u5947\u602a\u7684\u547d\u4ee4",description:"\u6b63\u5219\u547d\u4ee4\u5934",source:"@site/docs/alconna/detail/strange-command.mdx",sourceDirName:"alconna/detail",slug:"/alconna/detail/strange-command",permalink:"/docs/alconna/detail/strange-command",editUrl:"https://github.com/ArcletProject/Documents/edit/main/docs/docs/alconna/detail/strange-command.mdx",tags:[],version:"current",frontMatter:{id:"strange-command",title:"\u5947\u602a\u7684\u547d\u4ee4"},sidebar:"docs",previous:{title:"\u89e3\u6790\u90e8\u5206",permalink:"/docs/alconna/analysis"},next:{title:"Args\u53ef\u4e0d\u53ea\u80fd\u4f20\u5165\u4e00\u4e2a\u53c2\u6570",permalink:"/docs/alconna/detail/much-args"}},s=[{value:"\u6b63\u5219\u547d\u4ee4\u5934",id:"\u6b63\u5219\u547d\u4ee4\u5934",children:[],level:2}],f={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,d);return(0,c.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u6b63\u5219\u547d\u4ee4\u5934"},"\u6b63\u5219\u547d\u4ee4\u5934"),(0,c.kt)("p",null,"\u4f9d\u636e\u6807\u51c6\u6784\u9020\u683c\u5f0f\u4e2d\u5173\u4e8e\u547d\u4ee4\u5934\u90e8\u7684\u7279\u6b8a\u5f62\u5f0f, \u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u5982\u4e0b\u5b9e\u7528\u547d\u4ee4:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},'from arclet.alconna import Alconna\n\nw = Alconna("\u67e5\u8be2{city}\u5929\u6c14")\nd = Alconna(".rd{count:int}")\n')),(0,c.kt)(l.K,{lines:o.aI,height:240,mdxType:"TerminalApp"}))}p.isMDXComponent=!0}}]);