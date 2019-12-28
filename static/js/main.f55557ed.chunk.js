(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"06ba43":function(e,t,n){"use strict";const a="https://jsonplaceholder.typicode.com";t.a={get:function(e){return fetch(a+e).then(e=>e.json())}}},"2f158c":function(e,t,n){e.exports={root:"_2SV9nqCN",header:"KiG5F72V",main:"_1evcUDq8"}},"3ab6a2":function(e,t,n){"use strict";var a,c=n("18abc8"),r=function(e,t,n,a){var c,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(o=(r<3?c(o):r>3?c(t,n,o):c(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},o=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function o(e){try{i(a.next(e))}catch(e){r(e)}}function s(e){try{i(a.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}i((a=a.apply(e,t||[])).next())}))};!function(e){e[e.Idle=0]="Idle",e[e.Pending=1]="Pending",e[e.Fulfilled=2]="Fulfilled",e[e.Rejected=3]="Rejected"}(a||(a={}));class s{constructor(e){this.service=e,this.state=a.Idle}get loading(){return this.state===a.Pending}get success(){return this.state===a.Fulfilled}get failure(){return this.state===a.Rejected}fetch(...e){return o(this,void 0,void 0,(function*(){try{return this.state=a.Pending,[yield this.service(...e),()=>this.state=a.Fulfilled]}catch(e){return this.state=a.Rejected,Promise.reject(e)}}))}}r([c.f],s.prototype,"state",void 0),r([c.c],s.prototype,"loading",null),r([c.c],s.prototype,"success",null),r([c.c],s.prototype,"failure",null),r([c.b],s.prototype,"fetch",null);var i=s;t.a=i},"54c809":function(e,t,n){e.exports={root:"_3N4K6CC9"}},"59a6af":function(e,t,n){"use strict";var a=n("18abc8"),c=n("3ab6a2"),r=n("ddd1e9"),o=n("06ba43"),s=n("e07faa"),i=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function o(e){try{i(a.next(e))}catch(e){r(e)}}function s(e){try{i(a.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}i((a=a.apply(e,t||[])).next())}))};var l={fetchUser:function(){return i(this,void 0,void 0,(function*(){const e=yield o.a.get("/users/2");return r.decode(s.a,e)}))}},u=function(e,t,n,a){var c,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(o=(r<3?c(o):r>3?c(t,n,o):c(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};class f{constructor(){this.fetch=()=>this.status.fetch().then(([e,t])=>Object(a.h)(()=>{this.user=e,t()})).catch(e=>{console.log(e)}),this.status=new c.a(l.fetchUser),this.user=null,Object(a.g)(this,"user",()=>this.fetch())}}u([a.f],f.prototype,"user",void 0),u([a.b],f.prototype,"fetch",void 0);var d=new f;t.a=()=>d},"784e47":function(e,t,n){e.exports={root:"_3iUT9uhC",content:"kKyHcxd0",title:"UiCsmKit",side:"_1PRdoG1h",user:"_3qb8q7Im"}},"802ed2":function(e,t,n){"use strict";n.r(t);n("c281f1");var a=n("8af190"),c=n.n(a),r=n("63f14a"),o=n.n(r),s=n("b91f72"),i=n("e07faa"),l=c.a.createContext([i.b.Light,()=>{}]);var u=function(e){document.documentElement.setAttribute("theme",e)};const f=matchMedia("(prefers-color-scheme: dark)").matches?i.b.Dark:i.b.Light;var d=Object(s.a)((function({children:e}){const[t,n]=Object(a.useState)(f),r=Object(a.useCallback)(e=>{n(e)},[]);return Object(a.useLayoutEffect)(()=>{u(t)},[t]),c.a.createElement(l.Provider,{value:[t,r]},e)})),h=n("b912ec"),m=n.n(h),b=n("59a6af"),p=n("54c809"),v=n.n(p),y=c.a.memo((function({className:e,children:t}){return c.a.createElement("div",{className:m()(v.a.root,e)},t)})),g=Object(s.a)((function({user:e,className:t}){return e?c.a.createElement("div",{className:m()(t)},e.name):null})),j=n("fa87fe"),E=n.n(j);const N=Object.keys(i.b);var O=c.a.memo((function({className:e,onChange:t}){return c.a.createElement("div",{className:m()(E.a.root,e)},N.map(e=>c.a.createElement("button",{key:e,className:E.a.button,onClick:()=>t(i.b[e])},e)))})),w=n("784e47"),P=n.n(w),k=Object(s.a)((function({className:e}){const{user:t}=Object(b.a)(),[,n]=Object(a.useContext)(l);return c.a.createElement("header",{className:m()(P.a.root,e)},c.a.createElement(y,{className:P.a.content},c.a.createElement("div",{className:P.a.title},"Demo"),c.a.createElement("div",{className:P.a.side},c.a.createElement(g,{className:P.a.user,user:t}),c.a.createElement(O,{onChange:n}))))})),x=n("2f158c"),C=n.n(x),R=Object(s.a)((function({children:e}){return c.a.createElement("div",{className:C.a.root},c.a.createElement(k,{className:C.a.header}),c.a.createElement("main",{className:C.a.main},c.a.createElement(y,null,e)))})),_=c.a.lazy(()=>n.e(3).then(n.bind(null,"bd4786")));o.a.render(c.a.createElement(d,null,c.a.createElement(R,null,c.a.createElement(a.Suspense,{fallback:null},c.a.createElement(_,null)))),document.getElementById("root"))},c281f1:function(e,t,n){},e07faa:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,c=n("2bf77a");!function(e){e.Light="light",e.Dark="dark"}(a||(a={}));const r=c.readonly(c.interface({id:c.number,name:c.string}))},fa87fe:function(e,t,n){e.exports={root:"_2oIKar5Z",button:"_3L5XS3WE"}}},[["802ed2",1,2]]]);
//# sourceMappingURL=main.f55557ed.chunk.js.map