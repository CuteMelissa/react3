(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){e.exports=n(185)},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),l=n(103),c=n(11),u=n(12);var d=function(e){return e.pri?o.a.createElement(s,{path:e.path,component:e.component,routes:e.routes}):o.a.createElement(c.b,{path:e.path,component:e.component,routes:e.routes,exact:e.exact})};Object(c.g)((function(e){return console.log(e),o.a.createElement(u.a,null,o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement(u.b,{activeClassName:"active",to:"/doc/core"},"\u9ad8\u7ea7\u6307\u5f15")),o.a.createElement("li",null,o.a.createElement(u.b,{activeClassName:"active",to:"/doc/guide"},"\u5bfc\u822a")),o.a.createElement("li",null,o.a.createElement(u.b,{activeClassName:"active",to:"/doc/api"},"API")),o.a.createElement("li",null,o.a.createElement(u.b,{activeClassName:"active",to:"/doc/hook"},"Hook"))),o.a.createElement(c.d,null,e.routes.map((function(e,t){return o.a.createElement(d,Object.assign({key:t},e))}))))})),n(113),n(114);function s(e){var t=e.component,n=Object(l.a)(e,["component"]);return o.a.createElement(c.b,Object.assign({},n,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?o.a.createElement(t,n):o.a.createElement(c.a,{to:{pathname:"/login",state:a}})}}))}var p=n(36),m=n(37),h=n(39),g=n(38),f=function(e,t){return function(n){Object(h.a)(r,n);var a=Object(g.a)(r);function r(){var e;return Object(p.a)(this,r),(e=a.call(this)).state={data:[]},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})}))}},{key:"render",value:function(){return o.a.createElement(e,{data:this.state.data})}}]),r}(a.Component)},b=(f((function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"\u6807\u9898"),o.a.createElement("div",null,e.data.content))}),"https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"),f((function(e){return console.log(e.data),o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",null,e.title)})))}),"https://cnodejs.org/api/v1/topics"),n(115),n(13)),E=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={data:["1","2","3"],imgHeight:176},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"]})}),100)}},{key:"render",value:function(){var e=this;return o.a.createElement(b.f,null,o.a.createElement(b.b,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return o.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},o.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/".concat(t,".png"),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))}}]),n}(o.a.Component),y=(n(183),function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return console.log(t),t.split("/").length>2?null:o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(b.d,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:this.state.hidden},o.a.createElement(b.d.Item,{title:"\u9996\u9875",key:"home",icon:o.a.createElement("i",{className:"iconfont icon-hengxing"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-hengxing"}),selected:"/Home"===t,badge:1,onPress:function(){e.props.history.push("/Home")},"data-seed":"logId"}),o.a.createElement(b.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-leida"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-leida"}),title:"\u5546\u54c1",key:"goods",badge:"new",selected:"/Goods"===t,onPress:function(){e.props.history.push("/Goods")},"data-seed":"logId1"}),o.a.createElement(b.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-yuzhoufeichuan"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-yuzhoufeichuan"}),title:"\u8d2d\u7269\u8f66",key:"shopping",dot:!0,selected:"/Shopping"===t,onPress:function(){e.props.history.push("/Shopping")}}),o.a.createElement(b.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-yuhangyuan"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-yuhangyuan"}),title:"\u6211\u7684",key:"my",selected:"/My"===t,onPress:function(){e.props.history.push("/My")}}),o.a.createElement(b.d.Item,{icon:o.a.createElement("i",{className:"iconfont icon-yuhangyuan"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-yuhangyuan"}),title:"\u66f4\u591a",key:"more",selected:"/More"===t,onPress:function(){e.props.history.push("./More")}})))}}]),n}(o.a.Component)),x=Object(c.g)(y),k=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"nav"},o.a.createElement("i",{style:{fontsize:100,color:"white",fontSize:"20px"}},"\u6dd8"),o.a.createElement("input",{type:"search",className:"Search",onClick:function(){return e.history.push("./Search")},placeholder:"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa"})),o.a.createElement("img",{style:{width:"100%"},alt:""}),o.a.createElement(E,null),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/O1CN01AudSAc297fTNKe9L5_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./xiaogou")}}),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/O1CN01AudSAc297fTNKe9L5_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./xiaogou")}}),o.a.createElement("img",{src:n(96),style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./danshentu")}}),o.a.createElement("img",{src:n(96),style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./danshentu")}}),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/O1CN01CXj15v1zpVDpSAx7b_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./tianshi")}}),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/O1CN01CXj15v1zpVDpSAx7b_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./tianshi")}}),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/O1CN01YWUs0H1kuLAlo3bMW_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./niuquxiaogou")}}),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/O1CN01YWUs0H1kuLAlo3bMW_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",float:"left"},onClick:function(){return e.history.push("./niuquxiaogou")}}),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/O1CN01DUQE1g1oD4D7NNOA7_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",paddingBottom:"20%",float:"left"},onClick:function(){return e.history.push("./kuqixiaomao")}}),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/O1CN01DUQE1g1oD4D7NNOA7_!!0-fleamarket.jpg_570x10000Q75.jpg_.webp",style:{width:"42%",paddingLeft:"5%",paddingTop:"5%",paddingBottom:"20%",float:"left"},onClick:function(){return e.history.push("./kuqixiaomao")}}),o.a.createElement(x,null))};var w=function(){return o.a.createElement("div",null,"Goods",o.a.createElement(x,null))};var C=function(){return o.a.createElement("div",null,"My",o.a.createElement(x,null))};var v=function(){return o.a.createElement("div",null,"shopping",o.a.createElement(x,null))};function j(){return o.a.createElement("div",null,"more",o.a.createElement(x,null))}var O=function(e){return o.a.createElement("div",null,o.a.createElement(b.e,null),o.a.createElement(b.c,{placeholder:"Search",style:{width:"84%",float:"left"},cancelText:" ",onSubmit:function(e){return console.log(e,"onSubmit")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0}),o.a.createElement("button",{style:{float:"left",marginTop:"3%",border:"none"},onClick:e.history.goBack},"\u53d6\u6d88"))};function _(e){return o.a.createElement("div",null,o.a.createElement("button",{style:{borderRadius:"50%",width:"30px",height:"30px",border:"none",backgroundColor:"#938e8a",color:"#ebeae9"},onClick:function(){return e.history.push("./home")}},"<"),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i2/O1CN01k61CH31RSQKWy7bCf_!!0-fleamarket.jpg_790x10000Q75.jpg_.webp",style:{height:"100%",width:"100%"}}),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"7%",borderRadius:"5px",marginTop:"60%"}},"\u5e97\u94fa"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u5ba2\u670d"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u6536\u85cf"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u7acb\u5373\u8d2d\u4e70"))}function L(e){return o.a.createElement("div",null,o.a.createElement("button",{style:{borderRadius:"50%",width:"30px",height:"30px",border:"none",backgroundColor:"#938e8a",color:"#ebeae9"},onClick:function(){return e.history.push("./home")}},"<"),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/O1CN01G0ftJ71bKJTJmmAhp_!!0-fleamarket.jpg_790x10000Q75.jpg_.webp",style:{height:"100%",width:"100%"}}),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"7%",borderRadius:"5px",marginTop:"80%"}},"\u5e97\u94fa"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u5ba2\u670d"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u6536\u85cf"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u7acb\u5373\u8d2d\u4e70"))}function N(e){return o.a.createElement("div",null,o.a.createElement("button",{style:{borderRadius:"50%",width:"30px",height:"30px",border:"none",backgroundColor:"#938e8a",color:"#ebeae9"},onClick:function(){return e.history.push("./home")}},"<"),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i4/O1CN01kNTsB11uTS4o1ZHdY_!!0-fleamarket.jpg_790x10000Q75.jpg_.webp",style:{height:"100%",width:"100%"}}),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"7%",borderRadius:"5px",marginTop:"60%"}},"\u5e97\u94fa"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u5ba2\u670d"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u6536\u85cf"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u7acb\u5373\u8d2d\u4e70"))}function T(e){return o.a.createElement("div",null,o.a.createElement("button",{style:{borderRadius:"50%",width:"30px",height:"30px",border:"none",backgroundColor:"#938e8a",color:"#ebeae9"},onClick:function(){return e.history.push("./home")}},"<"),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/O1CN011oQ1Cz1a9UV7vQKwU_!!0-fleamarket.jpg_790x10000Q75.jpg_.webp",style:{height:"100%",width:"100%"}}),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"7%",borderRadius:"5px",marginTop:"60%"}},"\u5e97\u94fa"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u5ba2\u670d"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u6536\u85cf"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u7acb\u5373\u8d2d\u4e70"))}function R(e){return o.a.createElement("div",null,o.a.createElement("button",{style:{borderRadius:"50%",width:"30px",height:"30px",border:"none",backgroundColor:"#938e8a",color:"#ebeae9"},onClick:function(){return e.history.push("./home")}},"<"),o.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/O1CN01XdWEd71GeMsz5ABCY_!!0-fleamarket.jpg_790x10000Q75.jpg_.webp",style:{height:"100%",width:"100%"}}),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"7%",borderRadius:"5px",marginTop:"60%"}},"\u5e97\u94fa"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u5ba2\u670d"),o.a.createElement("button",{style:{height:"30px",width:"40px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u6536\u85cf"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{style:{height:"30px",backgroundColor:"#ff852a",border:"none",marginLeft:"5%",borderRadius:"5px"}},"\u7acb\u5373\u8d2d\u4e70"))}var D=function(){return o.a.createElement(u.a,null,o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"/",component:k}),o.a.createElement(c.b,{path:"/Goods",component:w}),o.a.createElement(c.b,{path:"/Shopping",component:v}),o.a.createElement(c.b,{path:"/My",component:C}),o.a.createElement(c.b,{path:"/More",component:j}),o.a.createElement(c.b,{path:"/Search",component:O}),o.a.createElement(c.b,{path:"/xiaogou",component:_}),o.a.createElement(c.b,{path:"/tianshi",component:L}),o.a.createElement(c.b,{path:"/danshentu",component:N}),o.a.createElement(c.b,{path:"/niuquxiaogou",component:T}),o.a.createElement(c.b,{path:"/kuqixiaomao",component:R}),o.a.createElement(c.b,{component:k})))},S=n(49),I=n(82),A=[123];var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;if("ADD_TODO"==t.type)return[].concat(Object(I.a)(e),[t.value]);if(t.type="DEL_TODO"){var n=Object(I.a)(e);return n.splice(t.index,1),n}return e},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{username:t.username};default:return e}},z=Object(S.b)({todo:Q,home:M}),B=(Object(S.c)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),n(28)),H=(Object(B.b)((function(e){return console.log(e),{mydata:e.todo}}))((function(e){return console.log(e),o.a.createElement("div",null,e.mydata.map((function(t,n){return o.a.createElement("li",{key:{idx:n}},t,o.a.createElement("button",{onClick:function(){e.dispatch({type:"DEL_TODO",index:n})}},"\u5220\u9664"))})))})),n(102));Object(B.b)((function(e){return{username:e.home.username}}))((function(e){var t=Object(a.useState)(!1),n=Object(H.a)(t,2),r=(n[0],n[1]),i=function(){r(!0);fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Connect-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.dispatch({type:"LOGIN",username:t.data.name}),r(!1)}))};return o.a.createElement("div",null,e.username?o.a.createElement("div",null,e.username,o.a.createElement("button",{onClick:i},"\u9000\u51fa")," "):o.a.createElement("button",{onClick:i},"\u767b\u5f55"),o.a.createElement(b.a,{toast:!0,text:"\u767b\u9646\u4e2d....",animating:!0}))})),Object(B.b)()((function(e){return console.log(e),o.a.createElement("div",null,o.a.createElement("input",{onKeyDown:function(t){13==t.keyCode&&e.dispatch({type:"ADD_TODO",value:t.target.value})},type:"text"}))}));i.a.render(o.a.createElement(D,null),document.getElementById("root"))},96:function(e,t,n){e.exports=n.p+"static/media/danshentu1.806b3731.JPG"}},[[104,1,2]]]);
//# sourceMappingURL=main.e0fa8d2a.chunk.js.map