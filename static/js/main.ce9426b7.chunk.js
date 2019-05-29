(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={root:"Header_root__2nBTP",content:"Header_content__3nBtP",title:"Header_title__W8kkr",side:"Header_side__2HLyl",user:"Header_user__2drLH"}},,,,function(e,t,n){e.exports={root:"Layout_root__3Jpa7",header:"Layout_header__3qpxs",main:"Layout_main__3R21F"}},function(e,t,n){e.exports={root:"ThemeSelector_root__3Ke2n",button:"ThemeSelector_button__1CTn9"}},,,,function(e,t,n){"use strict";var r=n(6),a=n.n(r),c=n(10),o=function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://jsonplaceholder.typicode.com"+t).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.a={get:o}},function(e,t,n){"use strict";var r,a,c,o=n(5),i=n(8),u=n(9),s=n(2),l=(n(13),n(1)),f=n(18),p=n(16),h=function(){return p.a.get("/users/2")},m=new(r=function e(){var t=this;Object(u.a)(this,e),this.status=void 0,Object(i.a)(this,"user",a,this),Object(i.a)(this,"fetch",c,this),this.status=new f.a(h),this.user=null,Object(l.f)(this,"user",function(){return t.fetch()})},a=Object(s.a)(r.prototype,"user",[l.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(s.a)(r.prototype,"fetch",[l.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return e.status.fetch().then(function(t){var n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(l.g)(function(){e.user=r,a()})})}}}),r);t.a=function(){return m}},function(e,t,n){"use strict";var r,a,c,o=n(6),i=n.n(o),u=n(10),s=n(8),l=n(9),f=n(21),p=n(2),h=(n(13),n(1));!function(e){e[e.Idle=0]="Idle",e[e.Pending=1]="Pending",e[e.Fulfilled=2]="Fulfilled",e[e.Rejected=3]="Rejected"}(c||(c={}));var m=(r=function(){function e(t){Object(l.a)(this,e),this.service=void 0,Object(s.a)(this,"state",a,this),this.service=t,this.state=c.Idle}return Object(f.a)(e,[{key:"fetch",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,n=this,r=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.state=c.Pending,e.next=4,this.service.apply(this,r);case 4:return t=e.sent,e.abrupt("return",[t,function(){return n.state=c.Fulfilled}]);case 8:return e.prev=8,e.t0=e.catch(0),this.state=c.Rejected,e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"loading",get:function(){return this.state===c.Pending}},{key:"success",get:function(){return this.state===c.Fulfilled}},{key:"failure",get:function(){return this.state===c.Rejected}}]),e}(),a=Object(p.a)(r.prototype,"state",[h.e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(p.a)(r.prototype,"loading",[h.c],Object.getOwnPropertyDescriptor(r.prototype,"loading"),r.prototype),Object(p.a)(r.prototype,"success",[h.c],Object.getOwnPropertyDescriptor(r.prototype,"success"),r.prototype),Object(p.a)(r.prototype,"failure",[h.c],Object.getOwnPropertyDescriptor(r.prototype,"failure"),r.prototype),Object(p.a)(r.prototype,"fetch",[h.b],Object.getOwnPropertyDescriptor(r.prototype,"fetch"),r.prototype),r);t.a=m},,function(e,t,n){e.exports={root:"Content_root__qJ71I"}},,,function(e,t,n){e.exports=n(35)},function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(24);var r,a=n(0),c=n.n(a),o=n(19),i=n.n(o),u=n(5),s=n(3);!function(e){e.Light="light",e.Dark="dark"}(r||(r={}));var l=c.a.createContext([r.Light,function(){}]),f=matchMedia("(prefers-color-scheme: dark)").matches?r.Dark:r.Light,p=Object(s.a)(function(e){var t=e.children,n=Object(a.useState)(f),r=Object(u.a)(n,2),o=r[0],i=r[1],s=Object(a.useCallback)(function(e){i(e)},[]);return Object(a.useLayoutEffect)(function(){!function(e){document.documentElement.setAttribute("theme",e)}(o)},[o]),c.a.createElement(l.Provider,{value:[o,s]},t)}),h=n(4),m=n.n(h),d=n(20),b=n.n(d),j=c.a.memo(function(e){var t=e.className,n=e.children;return c.a.createElement("div",{className:m()(b.a.root,t)},n)}),O=Object(s.a)(function(e){var t=e.user,n=e.className;return t?c.a.createElement("div",{className:m()(n)},t.name):null}),v=n(12),y=n.n(v),_=Object.keys(r),g=c.a.memo(function(e){var t=e.className,n=e.onChange;return c.a.createElement("div",{className:m()(y.a.root,t)},_.map(function(e){return c.a.createElement("button",{key:e,className:y.a.button,onClick:function(){return n(r[e])}},e)}))}),E=n(17),w=n(7),k=n.n(w),N=Object(s.a)(function(e){var t=e.className,n=Object(E.a)().user,r=Object(a.useContext)(l),o=Object(u.a)(r,2)[1];return c.a.createElement("header",{className:m()(k.a.root,t)},c.a.createElement(j,{className:k.a.content},c.a.createElement("div",{className:k.a.title},"Demo"),c.a.createElement("div",{className:k.a.side},c.a.createElement(O,{className:k.a.user,user:n}),c.a.createElement(g,{onChange:o}))))}),P=n(11),x=n.n(P),L=Object(s.a)(function(e){var t=e.children;return c.a.createElement("div",{className:x.a.root},c.a.createElement(N,{className:x.a.header}),c.a.createElement("main",{className:x.a.main},c.a.createElement(j,null,t)))}),C=n(22),D=n.n(C)()({loader:function(){return n.e(1).then(n.bind(null,40))},loading:function(){return c.a.createElement("div",null,"Loading...")}});i.a.render(c.a.createElement(p,null,c.a.createElement(L,null,c.a.createElement(D,null))),document.getElementById("root"))}],[[23,2,3]]]);
//# sourceMappingURL=main.ce9426b7.chunk.js.map