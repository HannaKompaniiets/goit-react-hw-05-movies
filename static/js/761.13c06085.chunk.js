"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[761],{2639:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(8402),a="Loader_Loader__wqo9C",c=n(184),u=function(){return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)(t.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"}),";"]})}},4761:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(2639),a="Reviews_revTitle__M8A-9",c="Reviews_revList__ljZve",u="Reviews_revListItem__NQgzp",i=n(5861),s=n(9439),o=n(7757),p=n.n(o),v=n(2791),f=n(7689),d=n(1066),l=function(){var e=(0,v.useState)([]),r=(0,s.Z)(e,2),n=r[0],t=r[1],a=(0,v.useState)(null),c=(0,s.Z)(a,2),u=c[0],o=c[1],l=(0,v.useState)(null),h=(0,s.Z)(l,2),w=h[0],x=h[1],m=(0,f.UO)().movieId;return(0,v.useEffect)((function(){x(!0);var e=function(){var e=(0,i.Z)(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Hx)(m);case 3:r=e.sent,t(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(e.t0.message);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),{reviews:n,error:u,isLoading:w}},h=n(184),w=function(){var e=l(),r=e.reviews,n=e.error,i=e.isLoading;return(0,h.jsxs)("div",{children:[i&&(0,h.jsx)(t.Z,{}),n&&(0,h.jsx)("div",{children:"Sorry, error"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:a,children:"Reviews: "}),(0,h.jsx)("ul",{className:c,children:r.length>0?r.map((function(e){var r=e.author,n=e.content,t=e.id;return(0,h.jsxs)("li",{className:u,children:[(0,h.jsx)("h3",{children:r}),(0,h.jsx)("p",{className:u,children:n})]},t)})):"Sorry, we don't have any review for this movie"})]})]})}},1066:function(e,r,n){n.d(r,{Df:function(){return o},Hx:function(){return v},Ny:function(){return p},mv:function(){return d},uV:function(){return f}});var t=n(5861),a=n(7757),c=n.n(a),u=n(1243),i="314821462cf957217439db4fd7a420c5",s="https://api.themoviedb.org/3",o=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=761.13c06085.chunk.js.map