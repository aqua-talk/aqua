(this["webpackJsonpaqua-client"]=this["webpackJsonpaqua-client"]||[]).push([[0],{54:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(19),s=n.n(i),l=n(12),a=n(18),o=n(39),d=n.n(o),g=n(40),u=n(5),j="set_user",f="clear_user",b={currentUser:null},A=Object(a.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{currentUser:null});default:return e}}}),p=n(21),C=(n(54),n(13)),x=n(4),h=n(22),B=n.n(h);function O(){return{type:f}}var v=n(80),y=n(2);var w=function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(v.a,{variant:"primary",onClick:function(){B.a.get("/auth/google").then((function(e){console.log("\ub85c\uadf8\uc778 \uc131\uacf5",e)})).catch((function(e){console.log("\ub85c\uadf8\uc778 \uc2e4\ud328")}))},children:"\uad6c\uae00"})})},I=n(24),m=n(42);var S=function(e){var t=Object(l.b)(),n=Object(x.f)();return Object(y.jsxs)("nav",{style:{position:"fixed",top:0,left:0,bottom:0,width:60,paddingTop:30,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",backgroundColor:"#ececec"},children:[Object(y.jsxs)("ul",{style:{padding:0,display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:30,alignItems:"center"},children:[Object(y.jsx)("li",{style:{cursor:"pointer"},onClick:function(){e.handleTab("friend")},children:Object(y.jsx)(I.b,{size:30,color:"friend"===e.tab?null:"#acacac"})}),Object(y.jsx)("li",{style:{cursor:"pointer"},onClick:function(){e.handleTab("chat")},children:Object(y.jsx)(I.a,{size:30,color:"chat"===e.tab?null:"#acacac"})}),Object(y.jsx)("li",{style:{cursor:"pointer"},onClick:function(){e.handleTab("more")},children:Object(y.jsx)(I.c,{size:30,color:"more"===e.tab?null:"#acacac"})})]}),Object(y.jsx)("ul",{style:{padding:0,display:"flex",flexDirection:"column",justifyContent:"flex-end",gap:30,alignItems:"center"},children:Object(y.jsx)("li",{children:Object(y.jsx)(m.a,{size:30,onClick:function(){console.log("\ub85c\uadf8\uc544\uc6c3 \uc131\uacf5"),t(O()),n.push("/login")}})})})]})},k=n(15);var U=function(){return Object(y.jsxs)("div",{style:{paddingTop:30,display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)("h2",{style:{textAlign:"left",fontSize:"1.5rem",fontWeight:600},children:"\uce5c\uad6c"}),Object(y.jsxs)("ul",{style:{display:"flex",gap:15},children:[Object(y.jsx)("li",{children:Object(y.jsx)(k.b,{size:25})}),Object(y.jsx)("li",{children:Object(y.jsx)(k.c,{size:25})})]})]})},E=n(79),K=n.p+"static/media/testProfileImage.78010666.jpg";var F=function(){var e=Object(l.c)((function(e){return e.user.currentUser})),t="test";return Object(y.jsx)("div",{style:{padding:"10px 0"},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"left"},children:[Object(y.jsx)(E.a,{src:K,width:60,roundedCircle:!0,style:{cursor:"pointer"}}),Object(y.jsxs)("div",{style:{marginLeft:10,display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(y.jsx)("h4",{style:{margin:0,fontSize:"1rem",fontWeight:600},children:e&&e.displayName}),Object(y.jsx)("p",{style:{margin:0},children:t})]})]})})};var Q=function(e){var t=Object(c.useState)(!1),n=Object(C.a)(t,2),r=n[0],i=n[1];return Object(y.jsxs)("div",{style:{padding:"10px 0"},children:[Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"left"},children:[Object(y.jsx)(E.a,{src:e.friend.profileImage,width:50,height:50,roundedCircle:!0,style:{cursor:"pointer"},onClick:function(){i((function(e){return!e}))}}),Object(y.jsxs)("div",{style:{marginLeft:10,display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(y.jsx)("h4",{style:{margin:0,fontSize:"1rem",fontWeight:600},children:e.friend.name}),e.friend.statusMessage&&Object(y.jsx)("p",{style:{margin:0},children:e.friend.statusMessage})]})]}),r&&Object(y.jsx)("div",{style:{backgroundColor:"#ececec"},children:"Profile"})]})},X=n.p+"static/media/UTH.b815ab83.png",D=n.p+"static/media/CGS.daa869dd.png";var V=function(){var e=Object(c.useState)([{name:"\uc5c4\ud0dc\ud601",statusMessage:"test",profileImage:X},{name:"\uae40\uc815\uad6d",statusMessage:"test",profileImage:"data:image/png;base64,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"},{name:"\ucc28\uad11\uc131",statusMessage:"test",profileImage:D}]),t=Object(C.a)(e,2),n=t[0];return t[1],Object(y.jsxs)("div",{children:[Object(y.jsxs)("h5",{style:{fontSize:"0.8rem",color:"#777",textAlign:"left"},children:["\uce5c\uad6c ",n.length]}),function(){var e=[];return n.map((function(t,n){e.push(Object(y.jsx)(Q,{friend:t},n))})),e.sort((function(e,t){return e.props.friend.name>t.props.friend.name?1:-1}))}()]})};var J=function(){return Object(y.jsx)("div",{style:{height:10,borderBottom:"1px solid #ececec",marginBottom:10}})};var W=function(){return Object(y.jsxs)("div",{style:{marginLeft:60,width:"100%",padding:"0 20px",boxSizing:"border-box"},children:[Object(y.jsx)(U,{}),Object(y.jsx)(F,{}),Object(y.jsx)(J,{}),Object(y.jsx)(V,{})]})};var L=function(){return Object(y.jsxs)("div",{style:{paddingTop:30,display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)("h2",{style:{textAlign:"left",fontSize:"1.5rem",fontWeight:600},children:"\ucc44\ud305"}),Object(y.jsxs)("ul",{style:{display:"flex",gap:15},children:[Object(y.jsx)("li",{children:Object(y.jsx)(k.b,{size:25})}),Object(y.jsx)("li",{children:Object(y.jsx)(k.a,{size:25})})]})]})};var R=function(){return Object(y.jsx)("div",{children:"ChatList"})};var G=function(){var e=Object(c.useState)(0),t=Object(C.a)(e,2);return t[0],t[1],Object(y.jsxs)("div",{style:{marginLeft:60,width:"100%",padding:"0 20px",boxSizing:"border-box"},children:[Object(y.jsx)(L,{}),Object(y.jsx)(R,{})]})};var M=function(){return Object(y.jsxs)("div",{style:{paddingTop:30,display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)("h2",{style:{textAlign:"left",fontSize:"1.5rem",fontWeight:600},children:"\ub354\ubcf4\uae30"}),Object(y.jsx)("ul",{style:{display:"flex"}})]})};var z=function(){return Object(y.jsx)("div",{style:{marginLeft:60,width:"100%",padding:"0 20px",boxSizing:"border-box"},children:Object(y.jsx)(M,{})})};var H=function(){var e=Object(c.useState)("friend"),t=Object(C.a)(e,2),n=t[0],r=t[1],i=Object(l.c)((function(e){return e.user.currentUser}));return Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(S,{tab:n,handleTab:function(e){r(e)}}),function(){switch(n){case"friend":return Object(y.jsx)(W,{user:i});case"chat":return Object(y.jsx)(G,{user:i});case"more":return Object(y.jsx)(z,{});default:alert("something wrong..")}}()]})};var P=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("h1",{style:{position:"fixed",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#0e101c",color:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",\n"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',fontWeight:"100"},children:"... loading"})})};n(76),n(77);var Y=function(){var e=Object(l.b)(),t=Object(x.f)(),n=Object(c.useState)(!0),r=Object(C.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){B.a.get("/user_info",{withCredentials:!0}).then((function(n){var c,r=n.data;r.user_info.id?(console.log("\uc720\uc800 \uc815\ubcf4 \uc870\ud68c",r.user_info),e((c=r.user_info,{type:j,payload:c})),s(!1),t.push("/")):(console.log("\uc720\uc800 \uc815\ubcf4 \uc5c6\uc74c",r),e(O()),t.push("/login"))})).catch((function(e){alert("\uc720\uc800 \uc815\ubcf4 \uc694\uccad \uc2e4\ud328"),t.push("/login")}))}),[]),Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(x.c,{children:[Object(y.jsx)(x.a,{exact:!0,path:"/",component:i?P:H}),Object(y.jsx)(x.a,{path:"/login",component:w})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))},q=Object(a.a)(d.a,g.a)(a.c);s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(l.a,{store:q(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(y.jsx)(p.a,{children:Object(y.jsx)(Y,{})})})}),document.getElementById("root")),N()}},[[78,1,2]]]);
//# sourceMappingURL=main.8d0c9eb6.chunk.js.map