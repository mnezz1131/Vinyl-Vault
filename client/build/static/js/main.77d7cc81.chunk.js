(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(29),s=a.n(c),i=(a(39),a(40),a(34)),u=a(2),l=a.n(u),o=a(3),d=a(5),b=(a(42),a(4)),j=(a(43),a(44),a(45),a(7)),m=a(0),h=function(e){var t=e.user,a=e.handleLogout,n=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.b,{className:"nav-link-models",to:"/albums",children:"Albums"}),Object(m.jsx)(j.b,{className:"nav-link-models",to:"/add-album",children:"Save An Album"}),Object(m.jsx)("button",{className:"nav-link-models nav-link-models-button",onClick:a,children:"Logout"})]}),r=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.b,{className:"nav-link-sign-up",to:"/sign-up",children:"Sign Up"}),Object(m.jsx)(j.b,{className:"nav-link-sign-in",to:"/sign-in",children:"Sign In"})]});return Object(m.jsxs)("nav",{children:[Object(m.jsx)("div",{className:"nav-left",children:Object(m.jsxs)(j.b,{to:"/",children:[Object(m.jsx)("img",{className:"nav-logo",src:"/images/logo-big.png",alt:"Title"}),Object(m.jsx)("img",{className:"nav-title",src:"/images/title.png",alt:"Title"})]})}),Object(m.jsx)("div",{className:"nav-center",children:t&&Object(m.jsxs)("div",{className:"nav-welcome",children:["Welcome, \xa0 ",t.username]})}),Object(m.jsx)("div",{className:"nav-right",children:Object(m.jsx)("div",{className:"nav-btns",children:t?n:r})})]})},p=function(e){var t=e.user,a=e.handleLogout,n=e.children;return Object(m.jsxs)("div",{className:"layout",children:[Object(m.jsx)(h,{user:t,handleLogout:a}),Object(m.jsx)("div",{className:"layout-children",children:n})]})},v=a(32),O=a.n(v);a(55);O.a.init();var x=function(e){var t=e.user,a=e.handleLogout;return Object(m.jsx)(p,{user:t,handleLogout:a,children:Object(m.jsx)("div",{className:"home-main-div",children:Object(m.jsxs)("div",{className:"home-title",children:[Object(m.jsx)("div",{className:"rotate linear infinite",children:Object(m.jsx)("img",{src:"../../images/logo-big-980.png",alt:"logo",className:"home-album"})}),Object(m.jsx)("img",{className:"home-vinyl-vault","data-aos":"fade-down","data-aos-offset":"500","data-aos-easing":"ease-in-sine","data-aos-duration":"2000",alt:"logo",src:"../../images/title.png"})]})})})},f=(a(56),a(57),function(e){var t=e.album;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.b,{className:"maincontainer",to:"/albums/".concat(t.id),children:[Object(m.jsxs)("div",{className:"back",children:[Object(m.jsx)("div",{className:"album-title",children:"".concat(t.title)}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"album-artist",children:t.artist}),Object(m.jsx)("div",{className:"album-genre",children:"Genre: ".concat(t.genre)}),Object(m.jsx)("div",{className:"album-vendor",children:"Vendor: ".concat(t.vendor)}),Object(m.jsx)("div",{className:"album-condition",children:"Condition: ".concat(t.condition)}),Object(m.jsx)("div",{className:"album-cost",children:"Cost: ".concat(t.cost)}),Object(m.jsx)("div",{className:"album-purchase",children:"Purchase Date: ".concat(t.purchased)}),Object(m.jsx)("div",{className:"album-release",children:"Release Date: ".concat(t.released)})]})]}),Object(m.jsx)("div",{className:"front",children:Object(m.jsx)("div",{className:"image",children:Object(m.jsx)("img",{className:"cover_url",src:t.cover_url,alt:t.title})})})]})})}),g=function(e){var t=e.user,a=e.handleLogout,n=e.albums;return Object(m.jsx)(p,{user:t,handleLogout:a,children:Object(m.jsx)("div",{className:"albums",children:n.map((function(e,t){return Object(m.jsx)(f,{album:e},t)}))})})},N=a(11),w=a(6),C=(a(58),function(e){var t=e.user,a=e.handleAlbumCreate,r=e.handleLogout,c=Object(n.useState)({title:"",artist:"",genre:"",vendor:"",condition:"",cost:"",purchased:"",released:"",cover_url:""}),s=Object(d.a)(c,2),i=s[0],u=s[1],l=function(e){var t=e.target,a=t.name,n=t.value;u((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(N.a)({},a,n))}))};return Object(m.jsx)(p,{user:t,handleLogout:r,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Add An Album To Your Collection"}),Object(m.jsx)("div",{className:"album-create-form",children:Object(m.jsxs)("form",{className:"create-form",onSubmit:function(e){e.preventDefault(),a(i)},children:[Object(m.jsx)("input",{className:"inputbox",placeholder:"Title",value:i.title,name:"title",required:!0,autoFocus:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Artist",value:i.artist,name:"artist",required:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Genre",value:i.genre,name:"genre",required:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Vendor",value:i.vendor,name:"vendor",required:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Condition",value:i.condition,name:"condition",required:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Cost",value:i.cost,name:"cost",required:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Purchased",value:i.purchased,name:"purchased",required:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Released",value:i.released,name:"released",required:!0,onChange:l}),Object(m.jsx)("input",{className:"inputbox",placeholder:"Cover Image",value:i.cover_url,name:"cover_url",required:!0,onChange:l}),Object(m.jsx)("button",{type:"submit",className:"submit-button",children:"Submit"})]})})]})})});a(59);function k(e){var t=e.user,a=e.handleLogin,r=e.handleLogout,c=Object(n.useState)({username:"",password:"",isError:!1,errorMsg:""}),s=Object(d.a)(c,2),i=s[0],u=s[1],b=function(e){u((function(t){return Object(w.a)(Object(w.a)({},t),{},Object(N.a)({},e.target.name,e.target.value))}))},j=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,a(i);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),u({isError:!0,errorMsg:"Invalid Credentials",username:"",password:""});case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),h=i.username,v=i.password;return Object(m.jsx)(p,{user:t,handleLogout:r,children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("h3",{children:"Sign In"}),Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsx)("label",{children:"User Name"}),Object(m.jsx)("input",{required:!0,type:"text",name:"username",value:h,placeholder:"Enter User Name",onChange:b}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{required:!0,name:"password",value:v,type:"password",placeholder:"Password",onChange:b}),function(){var e=i.isError?"danger":"";return i.isError?Object(m.jsx)("button",{type:"submit",className:e,children:i.errorMsg}):Object(m.jsx)("button",{type:"submit",children:"Sign In"})}()]})]})})}a(60);var y=function(e){var t=e.user,a=e.handleLogout,r=e.handleRegister,c=Object(n.useState)({username:"",email:"",password:"",passwordConfirmation:"",isError:!1,errorMsg:""}),s=Object(d.a)(c,2),i=s[0],u=s[1],b=function(e){return u((function(t){return Object(w.a)(Object(w.a)({},t),{},Object(N.a)({},e.target.name,e.target.value))}))},j=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,O!==x){e.next=7;break}return e.next=5,r(i);case 5:e.next=8;break;case 7:throw new Error("Passwords do not match");case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),u({username:"",email:"",password:"",passwordConfirmation:"",isError:!0,errorMsg:"Sign Up Details Invalid"});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),h=i.username,v=i.email,O=i.password,x=i.passwordConfirmation;return Object(m.jsx)(p,{user:t,handleLogout:a,children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("h3",{children:"Sign Up"}),Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsx)("label",{children:"Username"}),Object(m.jsx)("input",{required:!0,type:"text",name:"username",value:h,placeholder:"Enter username",onChange:b}),Object(m.jsx)("label",{children:"Email address"}),Object(m.jsx)("input",{required:!0,type:"email",name:"email",value:v,placeholder:"Enter email",onChange:b}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{required:!0,name:"password",value:O,type:"password",placeholder:"Password",onChange:b}),Object(m.jsx)("label",{children:"Password Confirmation"}),Object(m.jsx)("input",{required:!0,name:"passwordConfirmation",value:x,type:"password",placeholder:"Confirm Password",onChange:b}),function(){var e=i.isError?"danger":"";return i.isError?Object(m.jsx)("button",{type:"submit",className:e,children:i.errorMsg}):Object(m.jsx)("button",{type:"submit",children:"Sign Up"})}()]})]})})},L=(a(61),a(33)),S=a.n(L).a.create({baseURL:"https://vinyl-vault-api.herokuapp.com/"}),q=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/albums");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/albums/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("/albums",{album:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.put("/albums/".concat(t),{album:a});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.delete("/albums/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.user,a=(e.albums,e.handleAlbumUpdate),r=e.handleLogout,c=e.handleAlbumDelete,s=Object(n.useState)({title:"",artist:"",genre:"",vendor:"",condition:"",cost:"",purchased:"",released:"",cover_url:""}),i=Object(d.a)(s,2),u=i[0],j=i[1],h=Object(n.useState)(!1),v=Object(d.a)(h,2),O=v[0],x=v[1],f=Object(b.g)().id;if(Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(f);case 2:t=e.sent,j({title:t.title,artist:t.artist,genre:t.genre,vendor:t.vendor,condition:t.condition,cost:t.cost,purchased:t.purchased,released:t.released,cover_url:t.cover_url}),x(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[f]),!O)return Object(m.jsx)("h1",{children:"Loading..."});var g=function(e){var t=e.target,a=t.name,n=t.value;j((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(N.a)({},a,n))}))};return Object(m.jsx)(p,{user:t,handleLogout:r,children:Object(m.jsxs)("div",{className:"album-edit-container",children:[Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{className:"edit-product-image",src:u.cover_url,alt:u.title})}),Object(m.jsx)("div",{className:"album-edit-form",children:Object(m.jsxs)("form",{className:"create-form",onSubmit:function(e){e.preventDefault(),a(f,u)},children:[Object(m.jsx)("h2",{children:"Edit An Album"}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Title",children:"Title"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Title",value:u.title,name:"title",required:!0,autoFocus:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Title",children:"Artist"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Artist",value:u.artist,name:"artist",required:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Title",children:"Genre"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Genre",value:u.genre,name:"genre",required:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Title",children:"Vendor"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Vendor",value:u.vendor,name:"vendor",required:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Title",children:"Condition"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Condition",value:u.condition,name:"condition",required:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Title",children:"Cost"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Cost",value:u.cost,name:"cost",required:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Purchased",children:"Year Purchased"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Purchased",value:u.purchased,name:"purchased",required:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"Released",children:"Year Released"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Released",value:u.released,name:"released",required:!0,onChange:g}),Object(m.jsx)("label",{className:"album-edit-label",htmlFor:"input-cover-url",children:"Cover Image"}),Object(m.jsx)("input",{className:"album-input",placeholder:"Cover Image",value:u.cover_url,name:"cover_url",required:!0,onChange:g}),Object(m.jsx)("button",{type:"submit",className:"submit-button",children:"Submit"}),Object(m.jsx)("button",{className:"delete-button",onClick:function(){return c(f)},children:"Delete"})]})})]})})},P=(a(80),function(e){var t=e.user,a=e.handleLogout,r=Object(n.useState)(null),c=Object(d.a)(r,2),s=c[0],i=c[1],u=Object(n.useState)(!1),h=Object(d.a)(u,2),v=h[0],O=h[1],x=Object(n.useState)(!1),f=Object(d.a)(x,2),g=f[0],N=(f[1],Object(n.useState)({title:"",desciption:""})),w=Object(d.a)(N,2),C=(w[0],w[1],Object(b.g)().id);Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(C);case 2:t=e.sent,i(t),O(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[C,g]);return v?Object(m.jsx)(p,{user:t,handleLogout:a,children:Object(m.jsx)("div",{className:"album-detail-container",children:Object(m.jsxs)("div",{className:"album-detail",children:[Object(m.jsx)("img",{className:"album-detail-image",src:s.cover_url,alt:s.title}),Object(m.jsxs)("div",{className:"detail",children:[Object(m.jsx)("div",{className:"title",children:"Title: ".concat(s.title)}),Object(m.jsx)("div",{className:"artist",children:"Artist: ".concat(s.artist)}),Object(m.jsxs)("div",{className:"genre",children:[" ","Genre: ".concat(s.genre)]}),Object(m.jsx)("div",{className:"vendor",children:"Vendor: ".concat(s.vendor)}),Object(m.jsx)("div",{className:"condition",children:"Condition: ".concat(s.condition)}),Object(m.jsx)("div",{className:"cost",children:"Cost: ".concat(s.cost)}),Object(m.jsx)("div",{className:"purchased",children:"Purchase Date: ".concat(s.purchased)}),Object(m.jsx)("div",{className:"released",children:"Release Date: ".concat(s.released)}),Object(m.jsx)("div",{className:"album-detail-button-div",children:Object(m.jsx)("div",{className:"button-container",children:Object(m.jsx)("button",{children:Object(m.jsx)(j.b,{className:"album-detail-edit-button",to:"/albums/".concat(s.id,"/edit"),children:"Edit Album"})})})})]})]})})}):Object(m.jsx)("h1",{children:"Loading..."})}),D=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("/auth/login",{authentication:t});case 2:return a=e.sent,localStorage.setItem("authToken",a.data.token),S.defaults.headers.common.authorization="Bearer ".concat(a.data.token),e.abrupt("return",a.data.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("/users",{user:t});case 2:return a=e.sent,localStorage.setItem("authToken",a.data.token),S.defaults.headers.common.authorization="Bearer ".concat(a.data.token),e.abrupt("return",a.data.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("authToken"))){e.next=7;break}return S.defaults.headers.common.authorization="Bearer ".concat(t),e.next=5,S.get("/auth/verify");case 5:return a=e.sent,e.abrupt("return",a.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var R=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(d.a)(c,2),u=s[0],j=s[1],h=Object(b.f)();Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,j(t||null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:a=e.sent,r((function(e){return[].concat(Object(i.a)(e),[a])})),h.push("/albums");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:r((function(e){return e.filter((function(e){return e.id!==Number(t)}))})),h.push("/albums");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t,a);case 2:n=e.sent,r((function(e){return e.map((function(e){return e.id===Number(t)?n:e}))})),h.push("/albums");case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:a=e.sent,j(a),h.push("/albums");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:a=e.sent,j(a),h.push("/albums");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(null),localStorage.removeItem("authToken"),S.defaults.headers.common.authorization=null,h.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/sign-up",children:Object(m.jsx)(y,{handleRegister:N,user:u,handleLogout:w})}),Object(m.jsx)(b.a,{path:"/sign-in",children:Object(m.jsx)(k,{user:u,handleLogout:w,handleLogin:f})}),Object(m.jsx)(b.a,{path:"/add-album",children:Object(m.jsx)(C,{user:u,handleLogout:w,handleAlbumCreate:p})}),Object(m.jsx)(b.a,{path:"/albums/:id/edit",children:Object(m.jsx)(I,{user:u,albums:a,handleAlbumUpdate:O,handleLogout:w,handleAlbumDelete:v})}),Object(m.jsx)(b.a,{path:"/albums/:id",children:Object(m.jsx)(P,{user:u,handleLogout:w})}),Object(m.jsx)(b.a,{path:"/albums",children:Object(m.jsx)(g,{user:u,handleLogout:w,albums:a})}),Object(m.jsx)(b.a,{path:"/",children:Object(m.jsx)(x,{user:u,handleLogout:w})})]})})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(R,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.77d7cc81.chunk.js.map