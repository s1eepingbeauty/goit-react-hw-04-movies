(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{31:function(e,t,c){"use strict";c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return r})),c.d(t,"a",(function(){return o}));var n=c(32),a=c.n(n);a.a.defaults.baseURL="https://api.themoviedb.org/3";var s="e3b066e22b25d00eb414002518baafe2",i=function(){var e="/trending/movie/week?api_key=".concat(s);return a.a.get(e).then((function(e){return e.data.results})).catch((function(e){return console.log(e)}))},r=function(e){var t="search/movie?query=".concat(encodeURIComponent(e),"&api_key=").concat(s);return a.a.get(t).then((function(e){return e.data.results})).catch((function(e){return console.log(e)}))},o=function(e,t){var c="/movie/".concat(e);switch(t){case"cast":c+="/credits?api_key=".concat(s);break;case"reviews":c+="/reviews?api_key=".concat(s);break;default:c+="?api_key=".concat(s)}return a.a.get(c).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){e.exports={backBtn:"styles_backBtn__2hNOP",movieContainer:"styles_movieContainer__3U66D",imgContainer:"styles_imgContainer__1-e2-",movieInfoContainer:"styles_movieInfoContainer__jcudM",infoLinks:"styles_infoLinks__3yIOU"}},67:function(e,t,c){"use strict";c.r(t);var n=c(33),a=c(0),s=c(2),i=c(8),r=(c(61),c(1)),o=function(e){var t=e.castList;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"castList",children:t})})},l=(c(62),function(e){var t=e.reviewsList;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"reviewList",children:t})})}),j=c(31),u=c(63),h=c.n(u);t.default=function(){var e=Object(s.f)(),t=Object(s.h)().movieId,c=Object(s.i)().url,u=Object(a.useState)(""),b=Object(n.a)(u,2),d=b[0],v=b[1],m=Object(a.useState)(""),O=Object(n.a)(m,2),f=O[0],p=O[1],x=Object(a.useState)(""),g=Object(n.a)(x,2),w=g[0],_=g[1];return Object(a.useEffect)((function(){Object(j.a)(t).then((function(e){var t=e.poster_path,c=e.title,n=e.vote_average,a=e.overview,s=e.genres,i="https://image.tmdb.org/t/p/w500".concat(t),r=10*n,o=s.reduce((function(e,t){var c=t.name;return"".concat(e," ").concat(c)}),"");v({img:i,title:c,userScore:r,overview:a,genresList:o})})),Object(j.a)(t,"cast").then((function(e){var t=e.cast;0!==t.length?p(t.map((function(e){var t,c=e.id,n=e.name,a=e.profile_path,s=e.character;return t=a?"https://image.tmdb.org/t/p/w200".concat(a):"https://exceleratelabs.com/wp-content/uploads/2017/08/default-user.png",Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{src:t,alt:n,width:"200",height:"300"}),Object(r.jsx)("p",{className:"actorName",children:n}),Object(r.jsxs)("p",{className:"actorCharacter",children:["Character: ",s]})]},c)}))):p(Object(r.jsx)("p",{children:"There are no information about cast for this movie..."}))})),Object(j.a)(t,"reviews").then((function(e){var t=e.results;0!==t.length?_(t.map((function(e){var t,c=e.id,n=e.author_details,a=e.content,s=n.username,i=n.avatar_path;return t=i?"https://image.tmdb.org/t/p/w500".concat(i):"https://exceleratelabs.com/wp-content/uploads/2017/08/default-user.png",Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{src:t,alt:"",width:"50"}),Object(r.jsx)("span",{className:"userName",children:s}),Object(r.jsx)("p",{className:"reviewContent",children:a})]},c)}))):_(Object(r.jsx)("p",{children:"There are no reviews for this movie..."}))}))}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:h.a.backBtn,type:"button",onClick:function(){return e.push("/")},children:"\ud83e\udc14 Go back"})}),Object(r.jsxs)("div",{className:h.a.movieContainer,children:[Object(r.jsx)("div",{className:h.a.imgContainer,children:Object(r.jsx)("img",{src:d.img,alt:d.title,width:"250"})}),Object(r.jsxs)("div",{className:h.a.aboutMovieContainer,children:[Object(r.jsx)("h1",{children:d.title}),Object(r.jsxs)("p",{className:h.a.userScore,children:["User score: ","".concat(d.userScore,"%")]}),Object(r.jsx)("h2",{children:"About"}),Object(r.jsx)("p",{className:h.a.about,children:d.overview}),Object(r.jsx)("h3",{children:"Genres"}),Object(r.jsx)("p",{className:h.a.genres,children:d.genresList}),Object(r.jsxs)("div",{className:h.a.info,children:[Object(r.jsx)("h4",{children:"Additional information"}),Object(r.jsxs)("ul",{className:h.a.infoLinks,children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.c,{to:"".concat(c,"/cast"),children:"Cast"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.c,{to:"".concat(c,"/reviews"),children:"Reviews"})})]})]})]})]}),Object(r.jsx)("div",{className:h.a.movieInfoContainer,children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"".concat(c,"/cast"),children:Object(r.jsx)(o,{castList:f})}),Object(r.jsx)(s.a,{path:"".concat(c,"/reviews"),children:Object(r.jsx)(l,{reviewsList:w})})]})})]})}}}]);
//# sourceMappingURL=4.135fc3e4.chunk.js.map