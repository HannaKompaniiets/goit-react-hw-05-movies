"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[59],{2639:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(8402),i="Loader_Loader__wqo9C",a=t(184),s=function(){return(0,a.jsxs)("div",{className:i,children:[(0,a.jsx)(r.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"}),";"]})}},9059:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(2639),i=t(2791),a=t(7689),s=t(1087),c={mainMovieDetails:"MovieDetails_mainMovieDetails__WKeG3",movieDescription:"MovieDetails_movieDescription__5iWVh",movieTitle:"MovieDetails_movieTitle__aFVJA",genres:"MovieDetails_genres__S5am5",linksList:"MovieDetails_linksList__h-eoN",links:"MovieDetails_links__w5tJX",backLink:"MovieDetails_backLink__CzOZg",adInfo:"MovieDetails_adInfo__9lGox"},o=t(5861),u=t(9439),l=t(7757),v=t.n(l),d=t(1066),f=function(){var e=(0,i.useState)({}),n=(0,u.Z)(e,2),t=n[0],r=n[1],s=(0,i.useState)(null),c=(0,u.Z)(s,2),l=c[0],f=c[1],p=(0,i.useState)(null),h=(0,u.Z)(p,2),m=h[0],x=h[1],_=(0,a.UO)().movieId;return(0,i.useEffect)((function(){x(!0);var e=function(){var e=(0,o.Z)(v().mark((function e(){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Ny)(_);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(e.t0.message);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e(_)}),[_]),{movie:t,error:l,isLoading:m}},p=t(184),h=function(){var e,n,t=(0,a.TH)(),o=(0,i.useRef)(null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),u=f(),l=u.movie,v=u.error,d=u.isLoading,h=l.original_title,m=l.title,x=l.name,_=l.overview,k=l.poster_path,g=l.genres;return(0,p.jsxs)("div",{children:[d&&(0,p.jsx)(r.Z,{}),v&&(0,p.jsx)("div",{children:"Sorry, error"}),(0,p.jsxs)("div",{className:c.mainMovieDetails,children:[(0,p.jsx)(s.rU,{className:c.backLink,to:o.current,children:"Go BACK"}),(0,p.jsxs)("div",{className:c.movieDescription,children:[(0,p.jsx)("img",{style:{width:300},src:k?"https://image.tmdb.org/t/p/w300/".concat(k):"https://th.bing.com/th/id/R.1a12b4c6a85c3d3d0356b8b0982e3038?rik=%2bN8VUyxPhKxwsA&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flego%2fimages%2fa%2fac%2fNo-Image-Basic.png%2frevision%2flatest%3fcb%3d20130819001030&ehk=4LPMn2YupbS2wKmWBvjF5%2bFz434RztzcY3x7Pg99GBI%3d&risl=&pid=ImgRaw&r=0",alt:m||x||h}),(0,p.jsxs)("div",{className:c.movieDescriptionText,children:[(0,p.jsx)("h2",{className:c.movieTitle,children:m||x||h}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:_}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("ul",{className:c.genres,children:g&&g.map((function(e){var n=e.id,t=e.name;return(0,p.jsx)("li",{children:t},n)}))})]})]})]}),(0,p.jsxs)("div",{className:c.adInfo,children:[(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsxs)("ul",{className:c.linksList,children:[(0,p.jsx)(s.rU,{className:c.links,to:"cast",children:(0,p.jsx)("div",{children:"Cast"})}),(0,p.jsx)(s.rU,{className:c.links,to:"reviews",children:(0,p.jsx)("div",{children:"Review"})})]}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(r.Z,{}),children:(0,p.jsx)(a.j3,{})})]})]})}},1066:function(e,n,t){t.d(n,{Df:function(){return u},Hx:function(){return v},Ny:function(){return l},mv:function(){return f},uV:function(){return d}});var r=t(5861),i=t(7757),a=t.n(i),s=t(1243),c="314821462cf957217439db4fd7a420c5",o="https://api.themoviedb.org/3",u=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/search/movie?api_key=").concat(c,"&query=").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=59.4e63e9ef.chunk.js.map