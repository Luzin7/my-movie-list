"use strict";(self.webpackChunkmy_movie_list=self.webpackChunkmy_movie_list||[]).push([[20],{532:function(e,i,a){a.d(i,{Z:function(){return t}});a(791);var s=a(504),n=a(438),r=a(974),l=a(184);var t=function(){return(0,l.jsx)("header",{className:"header",children:(0,l.jsx)("div",{className:"header__content",children:(0,l.jsxs)("ul",{className:"header__links",children:[(0,l.jsx)("li",{className:"header__link-wrapper",children:(0,l.jsx)(s.OL,{to:"/profile/".concat((0,r.J)()),className:"header__link",children:(0,r.J)()})}),(0,l.jsx)("li",{className:"header__link-wrapper",children:(0,l.jsx)(s.OL,{to:n.MB,className:"header__link",children:"Filmes"})}),(0,l.jsx)("li",{className:"header__link-wrapper"}),null!==(0,r.J)()?(0,l.jsx)("li",{className:"header__link-wrapper",children:(0,l.jsx)("span",{className:"header__link",onClick:function(){var e=window.location.origin;window.confirm("Voc\xea tem certeza que deseja sair?")?(localStorage.clear(),window.location.href=e+n.Nz,window.location.reload()):window.alert("Voc\xea desistiu de desconectar, isso \xe9 bom!")},children:"Sair"})}):null]})})})}},20:function(e,i,a){a.r(i),a.d(i,{default:function(){return m}});var s=a(791),n=a(885),r=a(974),l=a(862),t=a(504),o=(a(774),a(861),a(184));var c=function(){var e=(0,l.DI)(),i=e.favoriteMovies,a=e.setFavoriteMovies,c=(0,s.useState)(localStorage.getItem("pfp")?JSON.parse(localStorage.getItem("pfp")):"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"),d=(0,n.Z)(c,2),m=d[0],u=d[1];return(0,o.jsxs)("div",{className:"profile__info",children:[(0,o.jsxs)("div",{className:"user__info",children:[(0,o.jsx)("img",{className:"pfp",src:m,alt:"user profile"}),(0,o.jsx)("input",{type:"url",name:"profile__pic",id:"profile__url__input",placeholder:"Adicione um link de uma imagem aqui",onChange:function(e){u((function(){return e.target.value})),localStorage.setItem("pfp",JSON.stringify(e.target.value))}})]}),(0,o.jsx)("section",{className:"favorite__movies",children:i.length>0?(0,o.jsxs)(o.Fragment,{children:[1===i.length?(0,o.jsx)("h1",{className:"movies__title",children:"Filme favorito de ".concat((0,r.J)(),"!")}):(0,o.jsx)("h1",{className:"movies__title",children:"Favoritos de ".concat((0,r.J)())}),(0,o.jsx)("div",{className:"movies__content",children:(0,o.jsx)("ul",{className:"movies__cards",children:i.map((function(e){return(0,o.jsxs)("li",{className:"movie__card favorite",children:[(0,o.jsxs)("div",{className:"movie__title",children:[(0,o.jsx)("h2",{className:"movie__title-text",children:e.name}),(0,o.jsx)("div",{className:"isfavorite",children:(0,o.jsx)("span",{className:"favorite true",onMouseOver:function(e){return e.target.textContent="\u2606"},onMouseOut:function(e){return e.target.textContent="\u2605"},onClick:function(){!function(e){for(var s=i.find((function(i){return i.id===e})),n=i.length-1;n>=0;n--)i[n]===s&&(i.splice(n,1),a(i),localStorage.setItem("favMovies",JSON.stringify(i)),window.location.reload())}(e.id)},children:"\u2605"})})]}),(0,o.jsx)(t.rU,{to:"/movie/".concat(e.id),children:(0,o.jsx)("div",{className:"movies__img",children:(0,o.jsx)("img",{className:"movie__img",src:e.img,alt:"Capa do filme ".concat(e.name)})})}),(0,o.jsx)("p",{className:"movie__desc-text",children:e.description})]},e.id)}))})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"movies__title",children:"Ainda n\xe3o achou seu favorito?"}),(0,o.jsx)("p",{className:"movies__subtitle",children:"Tenho certeza que o pr\xf3ximo que vamos avaliar vai estar do seu agrado! \ud83d\ude01"})]})})]})},d=a(532);var m=function(){return(0,o.jsxs)("div",{className:"profile",children:[(0,o.jsx)(d.Z,{}),(0,o.jsx)(c,{})]})}},774:function(){},861:function(){}}]);
//# sourceMappingURL=20.7e7eae5e.chunk.js.map