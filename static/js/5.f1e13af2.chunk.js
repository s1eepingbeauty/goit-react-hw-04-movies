(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{31:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var c=n(32),a=n.n(c);a.a.defaults.baseURL="https://api.themoviedb.org/3";var r="e3b066e22b25d00eb414002518baafe2",i=function(){var e="/trending/movie/week?api_key=".concat(r);return a.a.get(e).then((function(e){return e.data.results})).catch((function(e){return console.log(e)}))},o=function(e){var t="search/movie?query=".concat(encodeURIComponent(e),"&api_key=").concat(r);return a.a.get(t).then((function(e){return e.data.results})).catch((function(e){return console.log(e)}))},s=function(e,t){var n="/movie/".concat(e);switch(t){case"cast":n+="/credits?api_key=".concat(r);break;case"reviews":n+="/reviews?api_key=".concat(r);break;default:n+="?api_key=".concat(r)}return a.a.get(n).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},60:function(e,t,n){e.exports={container:"styles_container__2eHBK",movieList:"styles_movieList__3m1Q1"}},65:function(e,t,n){"use strict";n.r(t);var c=n(33),a=n(0),r=n(8),i=n(31),o=n(60),s=n.n(o),u=n(1);t.default=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){Object(i.b)().then((function(e){return o(e.map((function(e){var t=e.id,n=e.title;return Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:{pathname:"/movies/".concat(t),state:{page:"/"}},children:n})},t)})))}))}),[]),Object(u.jsxs)("div",{className:s.a.container,children:[Object(u.jsx)("h1",{children:"Popular movies"}),Object(u.jsx)("ul",{className:s.a.movieList,children:n})]})}}}]);
//# sourceMappingURL=5.f1e13af2.chunk.js.map