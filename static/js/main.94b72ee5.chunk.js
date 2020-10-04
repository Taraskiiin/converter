(this.webpackJsonpcrypt__converter=this.webpackJsonpcrypt__converter||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=(a(80),a(152)),o=a(153),u=a(138),m=a(156),s=Object(u.a)((function(e){return Object(m.a)({root:{padding:e.spacing(10)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},input__box:{marginTop:20,marginBottom:20},currencyInput:{minWidth:"calc(70% - 10px)",marginRight:10},currencyType:{minWidth:"30%"},table:{minWidth:650},currencyIcon:{width:20,height:20},redColumn:{backgroundColor:"#ffdada"},greenColumn:{backgroundColor:"#d8ffc4"},rowCurrency:{cursor:"pointer"}})})),p=a(23),f=a(144),b=a(148),d=a(147),g=a(141),y=a(145),v=a(146),E=a(143),O=Object(p.b)("currenciesStore","converterStore")(Object(p.c)((function(e){var t=e.classes,a=e.currenciesStore,n=e.converterStore,c=a.getItems,i=a.getDiffObj;r.a.useEffect((function(){a&&(a.fetchCoins(),setInterval((function(){a.fetchCoins()}),3e4))}),[]);return r.a.createElement(g.a,{component:E.a},r.a.createElement(f.a,{stickyHeader:!0,className:t.table,"aria-label":"simple table"},r.a.createElement(y.a,null,r.a.createElement(v.a,null,r.a.createElement(d.a,{align:"left"}),r.a.createElement(d.a,{align:"left"},"Name"),r.a.createElement(d.a,{align:"left"},"Full\xa0name"),r.a.createElement(d.a,{align:"left"},"Price"),r.a.createElement(d.a,{align:"left"},"Volume\xa0last\xa024\xa0hours"))),r.a.createElement(b.a,null,c.length?c.map((function(e){return r.a.createElement(v.a,{onClick:function(){return t=e,void(n&&n.setSelectedCoin(t));var t},className:t.rowCurrency,hover:!0,key:e.name},r.a.createElement(d.a,{align:"left"},r.a.createElement("img",{className:t.currencyIcon,src:e.imageUrl,alt:"Coin icon"})),r.a.createElement(d.a,{align:"left"},e.name),r.a.createElement(d.a,{align:"left"},e.fullName),r.a.createElement(d.a,{className:i[e.name]&&t["".concat(i[e.name],"Column")],align:"left"},"$",e.price),r.a.createElement(d.a,{align:"left"},"$",e.volume24Hour))})):"Loading...")))}))),h=a(48),j=a(39),C=a(40),S=a(157),I=a(154),w=a(155),N=a(149),D=a(158);function k(e,t){var a;switch(t.type){case"SET_VALUE":return Object(C.a)(Object(C.a)({},e),{},(a={},Object(j.a)(a,t.payload.name,t.payload.value),Object(j.a)(a,"value2",String(Number(t.payload.value)*e.inPrice/e.outPrice)),a));case"SET_PRICES":return Object(C.a)(Object(C.a)({},e),{},{inPrice:t.payload.in,outPrice:t.payload.out});default:return e}}var P=Object(p.b)("currenciesStore","converterStore")(Object(p.c)((function(e){var t,a=e.classes,n=e.currenciesStore,c=e.converterStore,i=r.a.useState("USD"),l=Object(h.a)(i,2),o=l[0],u=l[1],m=Number(null===c||void 0===c?void 0:c.getSelectedCoin.price)||0,s=Number(null===(t=n.getItems.find((function(e){return e.name===o})))||void 0===t?void 0:t.price)||0,p=r.a.useReducer(k,{value1:"",value2:"",inPrice:m,outPrice:s}),f=Object(h.a)(p,2),b=f[0],d=f[1],g=n.getItems.map((function(e){return e.name}));r.a.useEffect((function(){d({type:"SET_PRICES",payload:{in:m,out:s}})}),[m,s]);return r.a.createElement(E.a,{className:a.paper},r.a.createElement("div",{className:a.input__box},r.a.createElement(N.a,{className:a.currencyInput},r.a.createElement(S.a,{type:"number",value:b.value1,onChange:function(e){return t="value1",a=e.target.value,void d({type:"SET_VALUE",payload:{name:t,value:a}});var t,a},error:!0,fullWidth:!0,label:"\u0421\u0443\u043c\u043c\u0430"})),r.a.createElement(N.a,{className:a.currencyType},r.a.createElement(D.a,{shrink:!0,id:"demo-simple-select-placeholder-label-lable"},"\u0412\u0430\u043b\u044e\u0442\u0430"),r.a.createElement(I.a,{value:null===c||void 0===c?void 0:c.getSelectedCoin.name},g.map((function(e){return r.a.createElement(w.a,{value:e},e)}))))),r.a.createElement("div",{className:a.input__box},r.a.createElement(N.a,{className:a.currencyInput},r.a.createElement(S.a,{type:"number",value:b.value2,error:!0,fullWidth:!0,label:"\u0421\u0443\u043c\u043c\u0430"})),r.a.createElement(N.a,{className:a.currencyType},r.a.createElement(D.a,{shrink:!0,id:"demo-simple-select-placeholder-label-lable"},"\u0412\u0430\u043b\u044e\u0442\u0430"),r.a.createElement(I.a,{onChange:function(e){return u(e.target.value)},value:o},r.a.createElement(w.a,{value:"USD"},"USD"),g.map((function(e){return r.a.createElement(w.a,{value:e},e)}))))))})));var _,U,x,T,R,W,z,A=function(){var e=s();return r.a.createElement(l.a,{className:e.root,fixed:!0,maxWidth:"lg"},r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,xs:8},r.a.createElement(O,{classes:e})),r.a.createElement(o.a,{item:!0,xs:4},r.a.createElement(P,{classes:e}))))},H=a(28),L=a(46),V=a(47),F=a(16),B=(a(55),a(5)),J=(_=function(){function e(){Object(L.a)(this,e),Object(H.a)(this,"selectedCoin",U,this)}return Object(V.a)(e,[{key:"setSelectedCoin",value:function(e){this.selectedCoin={name:e.name,price:e.price}}},{key:"getSelectedCoin",get:function(){return this.selectedCoin}}]),e}(),U=Object(F.a)(_.prototype,"selectedCoin",[B.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:" ",price:0}}}),Object(F.a)(_.prototype,"getSelectedCoin",[B.g],Object.getOwnPropertyDescriptor(_.prototype,"getSelectedCoin"),_.prototype),Object(F.a)(_.prototype,"setSelectedCoin",[B.f],Object.getOwnPropertyDescriptor(_.prototype,"setSelectedCoin"),_.prototype),_),M=a(65),$=a.n(M),q={currenciesStore:new(x=function(){function e(){Object(L.a)(this,e),Object(H.a)(this,"items",T,this),Object(H.a)(this,"diffObj",R,this),Object(H.a)(this,"setItems",W,this),Object(H.a)(this,"fetchCoins",z,this)}return Object(V.a)(e,[{key:"diffCurrencies",value:function(e,t){return e.filter((function(e,a){return e.price!==t[a].price}))}},{key:"getItems",get:function(){return this.items}},{key:"getDiffObj",get:function(){return this.diffObj}}]),e}(),T=Object(F.a)(x.prototype,"items",[B.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),R=Object(F.a)(x.prototype,"diffObj",[B.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(F.a)(x.prototype,"getItems",[B.g],Object.getOwnPropertyDescriptor(x.prototype,"getItems"),x.prototype),Object(F.a)(x.prototype,"getDiffObj",[B.g],Object.getOwnPropertyDescriptor(x.prototype,"getDiffObj"),x.prototype),W=Object(F.a)(x.prototype,"setItems",[B.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.diffObj=e.diffCurrencies(e.items,t).reduce((function(a,n){var r=t.find((function(e){return e.name===n.name})),c=e.items.find((function(e){return e.name===r.name})),i=r.price===c.price?" ":r.price>c.price?"green":"red";return a[r.name]=i,a}),{}),e.items=t,setTimeout((function(){e.diffObj={}}),15e3)}}}),z=Object(F.a)(x.prototype,"fetchCoins",[B.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){$.a.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit-10&tsym=USD").then((function(t){var a=t.data.Data.map((function(e){return{name:e.CoinInfo.Name,fullName:e.CoinInfo.FullName,imageUrl:"https://www.cryptocompare.com/".concat(e.CoinInfo.ImageUrl),price:e.RAW.USD.PRICE.toFixed(3),volume24Hour:parseInt(e.RAW.USD.VOLUME24HOUR)}}));e.setItems(a),q.converterStore.setSelectedCoin(a[0])}))}}}),x),converterStore:new J};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,q,r.a.createElement(A,null))),document.getElementById("root"))},75:function(e,t,a){e.exports=a(100)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.94b72ee5.chunk.js.map