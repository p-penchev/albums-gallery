(window["webpackJsonpalbum-gallery"]=window["webpackJsonpalbum-gallery"]||[]).push([[0],{15:function(e,t,a){},29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),i=a.n(l),c=(a(34),a(5)),o=a(6),u=a(9),s=a(8),m=a(10),h=a(25),d=a(11),v=a(7);var f=function(e){return r.a.createElement("div",{className:"module",onClick:function(){return e.handleClick(e.item)}},"Album ",e.item)},b=(a(15),a(23)),p=a(28),y="ADD_FAV_ITEM",g="SELECTED_ALBUM",E="REMOVE_FAV_ITEM",O="CLEAR_FAVORITES",j={favorite:[],selectedAlbum:[]};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return t.type===g?Object.assign({},e,{selectedAlbum:t.payload}):t.type===y?Object.assign({},e,{favorite:e.favorite.concat(t.payload)}):t.type===E?Object.assign({},e,{favorite:Object(p.a)(e.favorite.filter(function(e){return e.id!==t.payload.id}))}):t.type===O?Object.assign({},e,{favorite:t.payload}):e},C=function(){try{var e=localStorage.getItem("state");return null===e?void 0:JSON.parse(e)}catch(t){return void console.log(t)}}(),A=Object(b.a)(k,C);A.subscribe(function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(A.getState())});var F=A;function S(e){return{type:E,payload:e}}function w(e){return{type:g,payload:e}}var I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={categoryTitle:"Albums",albums:[],albumsId:[]},e.handleClick=e.handleClick.bind(Object(v.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/photos").then(function(e){return e.json()}).then(function(t){e.setState({albums:t});var a=Array.from(new Set(t.map(function(e){return e.albumId})));e.setState({albumsId:a})})}},{key:"handleClick",value:function(e){var t=this.state.albums.filter(function(t){return t.albumId===e});F.dispatch(w(t)),this.props.history.push({pathname:"/album"})}},{key:"render",value:function(){var e=this,t=this.state.albumsId.map(function(t){return r.a.createElement(f,{key:t,item:t,handleClick:e.handleClick})});return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,this.state.categoryTitle),r.a.createElement("hr",null),r.a.createElement("div",{className:"darkButton",onClick:function(){return e.props.history.push("/fav")}},"Favorites")),r.a.createElement("div",{className:"grid"},t))}}]),t}(n.Component);var N=function(e){return r.a.createElement("div",{className:"hoverOpacity galleryItem"},r.a.createElement("input",{type:"checkbox",checked:!e.isFavGallery&&e.item.isFavorite,onChange:function(){return e.handleChange(e.item)}}),r.a.createElement("label",{onClick:function(){return e.handleChange(e.item)}},e.caption),r.a.createElement("figure",null,r.a.createElement("img",{src:e.item.url,alt:""})),r.a.createElement("h3",null,e.item.title))},T=function(e){function t(){var e;Object(c.a)(this,t),e=Object(u.a)(this,Object(s.a)(t).call(this));for(var a=F.getState().selectedAlbum,n=F.getState().favorite,r=0;r<a.length;r++){a[r].isFavorite=!1;for(var l=0;l<n.length;l++)a[r].id===n[l].id&&(a[r].isFavorite=!0)}return e.state={done:void 0,selectedAlbum:a},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(function(t){var a=t.selectedAlbum.map(function(t){return t.id===e.id&&(t.isFavorite=!t.isFavorite,t.isFavorite?F.dispatch({type:y,payload:t}):F.dispatch(S(t))),t});return F.dispatch(w(a)),{selectedAlbum:a}})}},{key:"render",value:function(){var e=this,t=this.state.selectedAlbum,a=t.map(function(t){return r.a.createElement(N,{key:t.id,item:t,handleChange:e.handleChange,isFavGallery:!1,caption:"Favorite"})});return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Album ",t.length?t[0].albumId:""),r.a.createElement("hr",null),r.a.createElement("div",{className:"darkButton",onClick:function(){return e.props.history.push("/fav")}},"Favorites")),r.a.createElement("div",{className:"gridGallery"},a))}}]),t}(n.Component),_=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={favoruteAlbum:F.getState().favorite},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(function(t){return F.dispatch(S(e)),{favoruteAlbum:F.getState().favorite}})}},{key:"render",value:function(){var e=this,t=this.state.favoruteAlbum.map(function(t){return r.a.createElement(N,{key:t.id,item:t,handleChange:e.handleChange,isFavGallery:!0,caption:"Remove"})});return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Favorites"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"gridGallery"},t))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:I,exact:!0}),r.a.createElement(d.a,{path:"/album",component:T}),r.a.createElement(d.a,{path:"/fav",component:_}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.f075c8e0.chunk.js.map