(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{31:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return a})),c.d(t,"a",(function(){return s}));var n={movie:"/movie/",credits:"/credits",reviews:"/reviews"},a={cast:"cast",reviews:"reviews"},s={baseImgURL:"https://image.tmdb.org/t/p/w500",defaultImgURL:"https://exceleratelabs.com/wp-content/uploads/2017/08/default-user.png"}},32:function(e,t,c){"use strict";c.d(t,"c",(function(){return r})),c.d(t,"d",(function(){return i})),c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return u}));var n=c(33),a=c.n(n),s=c(31);a.a.defaults.baseURL="https://api.themoviedb.org/3",a.a.defaults.params={api_key:"e3b066e22b25d00eb414002518baafe2"};var r=function(){return a.a.get("/trending/movie/week").then((function(e){return e.data.results})).catch((function(e){return console.log(e)}))},i=function(e){var t="search/movie?query=".concat(encodeURIComponent(e));return a.a.get(t).then((function(e){return e.data.results})).catch((function(e){return console.log(e)}))},o=function(e,t){switch(t){case s.c.cast:return"".concat(s.b.movie).concat(e).concat(s.b.credits);case s.c.reviews:return"".concat(s.b.movie).concat(e).concat(s.b.reviews);default:return"".concat(s.b.movie).concat(e)}},u=function(e){return a.a.get(e).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){e.exports={backBtn:"styles_backBtn__2hNOP",movieContainer:"styles_movieContainer__3U66D",imgContainer:"styles_imgContainer__1-e2-",movieInfoContainer:"styles_movieInfoContainer__jcudM",infoLinks:"styles_infoLinks__3yIOU"}},68:function(e,t,c){"use strict";c.r(t);var n=c(34),a=c(0),s=c(2),r=c(8),i=(c(62),c(1)),o=function(e){var t=e.castList;return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"castList",children:t})})},u=(c(63),function(e){var t=e.reviewsList;return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"reviewList",children:t})})}),j=c(31),l=c(32),b=c(64),d=c.n(b);t.default=function(){var e=Object(s.f)(),t=Object(s.h)().movieId,c=Object(s.i)().url,b=Object(a.useState)(""),h=Object(n.a)(b,2),v=h[0],m=h[1],f=Object(a.useState)(""),O=Object(n.a)(f,2),x=O[0],g=O[1],p=Object(a.useState)(""),w=Object(n.a)(p,2),_=w[0],L=w[1];return Object(a.useEffect)((function(){Object(l.b)(Object(l.a)(t)).then((function(e){var t=e.poster_path,c=e.title,n=e.vote_average,a=e.overview,s=e.genres,r="".concat(j.a.baseImgURL).concat(t),i=10*n,o=s.reduce((function(e,t){var c=t.name;return"".concat(e," ").concat(c)}),"");m({img:r,title:c,userScore:i,overview:a,genresList:o})})),Object(l.b)(Object(l.a)(t,j.c.cast)).then((function(e){var t=e.cast;0!==t.length?g(t.map((function(e){var t,c=e.id,n=e.name,a=e.profile_path,s=e.character;return t=a?j.a.baseImgURL+a:j.a.defaultImgURL,Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:t,alt:n,width:"200",height:"300"}),Object(i.jsx)("p",{className:"actorName",children:n}),Object(i.jsxs)("p",{className:"actorCharacter",children:["Character: ",s]})]},c)}))):g(Object(i.jsx)("p",{children:"There are no information about cast for this movie..."}))})),Object(l.b)(Object(l.a)(t,j.c.reviews)).then((function(e){var t=e.results;0!==t.length?L(t.map((function(e){var t,c=e.id,n=e.author_details,a=e.content,s=n.username,r=n.avatar_path;return t=r?j.a.baseImgURL+r:j.a.defaultImgURL,Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:t,alt:"",width:"50"}),Object(i.jsx)("span",{className:"userName",children:s}),Object(i.jsx)("p",{className:"reviewContent",children:a})]},c)}))):L(Object(i.jsx)("p",{children:"There are no reviews for this movie..."}))}))}),[t]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:d.a.backBtn,type:"button",onClick:function(){return e.push("/")},children:"\ud83e\udc14 Go back"})}),Object(i.jsxs)("div",{className:d.a.movieContainer,children:[Object(i.jsx)("div",{className:d.a.imgContainer,children:Object(i.jsx)("img",{src:v.img,alt:v.title,width:"250"})}),Object(i.jsxs)("div",{className:d.a.aboutMovieContainer,children:[Object(i.jsx)("h1",{children:v.title}),Object(i.jsxs)("p",{className:d.a.userScore,children:["User score: ","".concat(v.userScore,"%")]}),Object(i.jsx)("h2",{children:"About"}),Object(i.jsx)("p",{className:d.a.about,children:v.overview}),Object(i.jsx)("h3",{children:"Genres"}),Object(i.jsx)("p",{className:d.a.genres,children:v.genresList}),Object(i.jsxs)("div",{className:d.a.info,children:[Object(i.jsx)("h4",{children:"Additional information"}),Object(i.jsxs)("ul",{className:d.a.infoLinks,children:[Object(i.jsx)("li",{children:Object(i.jsx)(r.c,{to:"".concat(c,"/cast"),children:"Cast"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.c,{to:"".concat(c,"/reviews"),children:"Reviews"})})]})]})]})]}),Object(i.jsx)("div",{className:d.a.movieInfoContainer,children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{path:"".concat(c,"/cast"),children:Object(i.jsx)(o,{castList:x})}),Object(i.jsx)(s.a,{path:"".concat(c,"/reviews"),children:Object(i.jsx)(u,{reviewsList:_})})]})})]})}}}]);
//# sourceMappingURL=4.d6262d29.chunk.js.map