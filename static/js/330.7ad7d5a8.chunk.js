(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[330],{2639:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(8402),a="Loader_Loader__wqo9C",i=t(184),s=function(){return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)(n.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"}),";"]})}},9155:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(7689),a=t(1087),i="MoviesList_moviesItem__r+0sq",s="MoviesList_moviesList__P6SP5",c=t(2007),o=t.n(c),u=t(184),p=function(e){var r=e.movies,t=(0,n.TH)();return(0,u.jsx)(u.Fragment,{children:r.length>0&&r.map((function(e){var r=e.id,n=e.original_title,c=e.title,o=e.name;return(0,u.jsx)("li",{className:s,children:(0,u.jsx)(a.rU,{className:i,to:"/movies/".concat(r),state:{from:t},children:c||o||n})},r)}))})},f=p;p.propTypers={movie:o().arrayOf(o().shape({id:o().number.isRequired,original_title:o().string,title:o().string,name:o().string}).isRequired).isRequired}},6330:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var n=t(2639),a=t(9155),i="Movies_mainMovies__MuYhf",s="Movies_input__N3yRL",c="Movies_search__Lis1s",o="Movies_form__5L7s0",u=t(5861),p=t(9439),f=t(7757),v=t.n(f),l=t(2791),d=t(1087),m=t(1066),h=function(){var e=(0,l.useState)([]),r=(0,p.Z)(e,2),t=r[0],n=r[1],a=(0,l.useState)(null),i=(0,p.Z)(a,2),s=i[0],c=i[1],o=(0,l.useState)(!1),f=(0,p.Z)(o,2),h=f[0],_=f[1],y=(0,d.lr)(),x=(0,p.Z)(y,2),g=x[0],b=x[1],w=g.get("query");(0,l.useEffect)((function(){w&&k(w)}),[g,w]);var k=function(){var e=(0,u.Z)(v().mark((function e(r){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,m.mv)(r);case 4:t=e.sent,n(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c(e.t0.massage);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(r){return e.apply(this,arguments)}}();return{movies:t,error:s,isLoading:h,setSearchParams:b}},_=t(184),y=function(){var e=h(),r=e.movies,t=e.error,u=e.isLoading,p=e.setSearchParams;return(0,_.jsxs)("div",{children:[u&&(0,_.jsx)(n.Z,{}),t&&(0,_.jsx)("div",{children:"Sorry, error"}),(0,_.jsxs)("div",{className:i,children:[(0,_.jsxs)("form",{className:o,onSubmit:p,children:[(0,_.jsx)("h2",{children:"Find movie:"}),(0,_.jsx)("input",{className:s,type:"text",name:"query"}),(0,_.jsx)("button",{className:c,type:"submit",children:"Search"})]}),(0,_.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&(0,_.jsx)(a.Z,{movies:r})})]})]})}},1066:function(e,r,t){"use strict";t.d(r,{Df:function(){return u},Hx:function(){return f},Ny:function(){return p},mv:function(){return l},uV:function(){return v}});var n=t(5861),a=t(7757),i=t.n(a),s=t(1243),c="314821462cf957217439db4fd7a420c5",o="https://api.themoviedb.org/3",u=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(c,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(r,"?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(r,"/reviews?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(r,"/credits?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/search/movie?api_key=").concat(c,"&query=").concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},888:function(e,r,t){"use strict";var n=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,i,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,r,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=330.7ad7d5a8.chunk.js.map