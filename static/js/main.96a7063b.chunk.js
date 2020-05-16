(this["webpackJsonphospital-status"]=this["webpackJsonphospital-status"]||[]).push([[0],{164:function(e,t){},167:function(e,t){},227:function(e,t,a){e.exports=a(249)},234:function(e,t){},248:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(60),c=a.n(o),l=a(310),i=a(309),u=a(114),s=a.n(u),m=a(134),d=a(87),f=a(72),b=a(307),p=a(308),h=a(254),g=a(196),E=a(311),y=a(201),j=a(319),v=a(313),O={normal:"\u901a\u5e38",restriction:"\u5236\u9650",stop:"\u505c\u6b62",nobeds:"\u8a2d\u7f6e\u306a\u3057",unanswered:"\u672a\u56de\u7b54"},k={ambulatoryCare_weekdays:"\u5916\u6765\uff08\u5e73\u65e5\uff09",ambulatoryCare_holiday:"\u5916\u6765\uff08\u571f\u65e5\uff09",admission:"\u5165\u9662",emergency:"\u6551\u6025",dialysis:"\u900f\u6790",chemotherapy:"\u5316\u5b66\u7642\u6cd5"},w={"\u901a\u5e38":[23,190,187],"\u5236\u9650":[255,165,0],"\u505c\u6b62":[214,34,70],"\u8a2d\u7f6e\u306a\u3057":[192,192,192],"\u672a\u56de\u7b54":[137,137,137]},C=[[1,152,189],[73,227,206],[216,254,181],[254,237,177],[254,173,84],[209,55,78]],x=function(e){var t=e.data,a=e.layerType,n=e.hospitalState,r=e.hospitalType,o=e.onHover,c=e.onClick;if(t){var l=Object.keys(n).filter((function(e){return n[e]})).map((function(e){return O[e]})),i=Object.keys(r).filter((function(e){return r[e]})).map((function(e){return k[e]})),u=t.filter((function(e){return l.some((function(t){return e["\u533b\u7642\u533a\u5206\u56de\u7b54"]===t}))&&i.some((function(t){return e["\u533b\u7642\u533a\u5206"]===t}))}));return[{point:new j.a({id:"scatterplot-layer",data:u,pickable:!0,opacity:.5,stroked:!0,filled:!0,radiusScale:1,radiusMinPixels:6,lineWidthMinPixels:1,getPosition:function(e){return[e["\u7d4c\u5ea6"],e["\u7def\u5ea6"]]},getRadius:0,getFillColor:function(e){return w[e["\u533b\u7642\u533a\u5206\u56de\u7b54"]]},getLineColor:function(e){return w[e["\u533b\u7642\u533a\u5206\u56de\u7b54"]]},onClick:c,onHover:o}),hex:new v.a({id:"hexagon-layer",data:u,colorDomain:[0,50],colorRange:C,opacity:.8,radius:1e4,pickable:!0,extruded:!0,elevationScale:60,elevationRange:[0,3e3],getPosition:function(e){return[e["\u7d4c\u5ea6"],e["\u7def\u5ea6"]]},getColorValue:function(e){for(var t=e.length,a=0,n=0;n<e.length;n++)"\u505c\u6b62"!==e[n]["\u533b\u7642\u533a\u5206\u56de\u7b54"]&&"\u5236\u9650"!==e[n]["\u533b\u7642\u533a\u5206\u56de\u7b54"]||a++;return~~(a/t*100)},onClick:c,onHover:o})}[a]]}},M=a(107),S=a(27),L=a(314),I=a(295),F=a(294),z=a(316),T=Object(S.a)({root:{padding:0,margin:0}})((function(e){return r.a.createElement(F.a,Object.assign({color:"default"},e))})),_=Object(S.a)({root:{padding:0,marginLeft:"0.5em",color:"gray","&$checked":{color:"#17bebb"}},checked:{}})((function(e){return r.a.createElement(z.a,Object.assign({color:"default"},e))})),H=Object(S.a)({root:{padding:0,marginLeft:"0.25em",color:"gray","&$checked":{color:"#FFA500"}},checked:{}})((function(e){return r.a.createElement(z.a,Object.assign({color:"default"},e))})),R=Object(S.a)({root:{padding:0,marginLeft:"0.25em",color:"gray","&$checked":{color:"#d62246"}},checked:{}})((function(e){return r.a.createElement(z.a,Object.assign({color:"default"},e))})),A=Object(S.a)({root:{padding:0,marginLeft:"0.25em",color:"gray","&$checked":{color:"#c0c0c0"}},checked:{}})((function(e){return r.a.createElement(z.a,Object.assign({color:"default"},e))})),P=Object(S.a)({root:{padding:0,marginLeft:"0.25em",color:"gray","&$checked":{color:"#898989"}},checked:{}})((function(e){return r.a.createElement(z.a,Object.assign({color:"default"},e))}));var $=function(e){var t=e.value,a=e.onChange,n=function(e){a(Object(d.a)(Object(d.a)({},t),{},Object(M.a)({},e.target.name,e.target.checked)))};return r.a.createElement(L.a,{elevation:3,id:"panel"},r.a.createElement(I.a,{row:!0},r.a.createElement(T,{control:r.a.createElement(_,{checked:t.normal,onChange:n,name:"normal"}),label:"\u901a\u5e38"}),r.a.createElement(T,{control:r.a.createElement(H,{checked:t.restriction,onChange:n,name:"restriction"}),label:"\u5236\u9650"}),r.a.createElement(T,{control:r.a.createElement(R,{checked:t.stop,onChange:n,name:"stop"}),label:"\u505c\u6b62"}),r.a.createElement(T,{control:r.a.createElement(A,{checked:t.nobeds,onChange:n,name:"nobeds"}),label:"\u8a2d\u7f6e\u306a\u3057"}),r.a.createElement(T,{control:r.a.createElement(P,{checked:t.unanswered,onChange:n,name:"unanswered"}),label:"\u672a\u56de\u7b54"})))},B=Object(S.a)({root:{padding:0,margin:0}})((function(e){return r.a.createElement(F.a,Object.assign({color:"default"},e))})),D=Object(S.a)({root:{padding:0,marginLeft:"0.5em",color:"#aaaaff","&$checked":{color:"#aaaaff"}},checked:{}})((function(e){return r.a.createElement(z.a,Object.assign({color:"default"},e))}));var W=function(e){var t=e.value,a=e.onChange,n=function(e){a(Object(d.a)(Object(d.a)({},t),{},Object(M.a)({},e.target.name,e.target.checked)))};return r.a.createElement(L.a,{elevation:3,id:"panel"},r.a.createElement(I.a,{row:!0},r.a.createElement(B,{control:r.a.createElement(D,{checked:t.ambulatoryCare_weekdays,onChange:n,name:"ambulatoryCare_weekdays"}),label:"\u5916\u6765(\u5e73\u65e5)"}),r.a.createElement(B,{control:r.a.createElement(D,{checked:t.ambulatoryCare_holiday,onChange:n,name:"ambulatoryCare_holiday"}),label:"\u5916\u6765(\u571f\u65e5)"}),r.a.createElement(B,{control:r.a.createElement(D,{checked:t.admission,onChange:n,name:"admission"}),label:"\u5165\u9662"}),r.a.createElement(B,{control:r.a.createElement(D,{checked:t.emergency,onChange:n,name:"emergency"}),label:"\u6551\u6025"}),r.a.createElement(B,{control:r.a.createElement(D,{checked:t.dialysis,onChange:n,name:"dialysis"}),label:"\u900f\u6790"}),r.a.createElement(B,{control:r.a.createElement(D,{checked:t.chemotherapy,onChange:n,name:"chemotherapy"}),label:"\u5316\u5b66\u7642\u6cd5"})))},J=a(297),N=a(296),V=a(192),Y=a.n(V),Z=a(193),q=a.n(Z),G=Object(S.a)({root:{color:"#999","&$selected":{color:"#00f"}},selected:{}})((function(e){return r.a.createElement(N.a,Object.assign({color:"default"},e))}));var K=function(e){var t=e.value,a=e.onChange;return(r.a.createElement(J.a,{value:t,onChange:function(e,t){a(t)},showLabels:!0},r.a.createElement(G,{label:"Point",value:"point",icon:r.a.createElement(Y.a,null)}),r.a.createElement(G,{label:"Hex",value:"hex",icon:r.a.createElement(q.a,null)})))},Q=a(298),U=a(315);function X(){return{top:"".concat(25,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(25,"%)")}}var ee=Object(Q.a)((function(e){return{paper:{position:"absolute",width:"90%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function te(e){var t=e.body,a=e.open,n=e.onClose,o=ee(),c=r.a.useState(X),l=Object(f.a)(c,1)[0],i=r.a.createElement("div",{style:l,className:o.paper},r.a.createElement("h2",{id:"simple-modal-title"},r.a.createElement("a",{rel:"noopener noreferrer",href:"https://cio.go.jp/hosp_monitoring_c19"},"\u5168\u56fd\u533b\u7642\u6a5f\u95a2\u306e\u533b\u7642\u63d0\u4f9b\u4f53\u5236\u306e\u72b6\u6cc1\u306e\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf")),r.a.createElement("div",{id:"simple-modal-description"},t));return r.a.createElement("div",null,r.a.createElement(U.a,{open:a,onClose:n,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},i))}var ae=a(312),ne=a(203),re=a(300);function oe(){return(oe=Object(m.a)(s.a.mark((function e(t){var a,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.length>1&&void 0!==r[1]?r[1]:"utf-8",!window.TextDecoder){e.next=4;break}return n=new TextDecoder(a),e.abrupt("return",n.decode(t));case 4:return e.abrupt("return",new Promise((function(e,n){var r=new Blob([t],{type:"text/plain;charset=".concat(a)}),o=new FileReader;o.onload=function(){e(o.result)},o.onerror=function(){n(o.error)},o.readAsText(r,a)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=function(e){return oe.apply(this,arguments)},le=a(320),ie=a(302),ue=a(306),se=a(305),me=a(301),de=a(303),fe=a(304),be=a(255),pe={"\u901a\u5e38":3,"\u5236\u9650":2,"\u505c\u6b62":1,"\u8a2d\u7f6e\u306a\u3057":4,"\u672a\u56de\u7b54":5},he={"\u901a\u5e38":"#17bebb","\u5236\u9650":"#FFA500","\u505c\u6b62":"#d62246","\u8a2d\u7f6e\u306a\u3057":"#c0c0c0","\u672a\u56de\u7b54":"#898989"},ge=function(e,t){return e.id=e.code,Object.keys(e).forEach((function(t){isNaN(+e[t])||"id"===t||(e[t]=+e[t])})),e},Ee=Object(Q.a)({table:{maxHeight:400,overflow:"auto","& th":{fontWeight:"bold",whiteSpace:"nowrap"},"& td":{whiteSpace:"nowrap"}}});var ye=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Ee(),o=Object(n.useState)(null),c=Object(f.a)(o,2),l=c[0],i=c[1],u=Object(n.useState)("move"),j=Object(f.a)(u,2),v=j[0],O=j[1],k=Object(n.useState)({normal:!0,restriction:!0,stop:!0,nobeds:!0,unanswered:!0}),w=Object(f.a)(k,2),C=w[0],M=w[1],S=Object(n.useState)({ambulatoryCare_weekdays:!0,ambulatoryCare_holiday:!0,admission:!0,emergency:!0,dialysis:!0,chemotherapy:!0}),L=Object(f.a)(S,2),I=L[0],F=L[1],z=Object(n.useState)("point"),T=Object(f.a)(z,2),_=T[0],H=T[1],R=Object(n.useState)({width:window.innerWidth,height:window.innerHeight,longitude:139.0110974,latitude:36.3226885,zoom:6,maxZoom:20}),A=Object(f.a)(R,2),P=A[0],B=A[1],D=Object(n.useState)(null),J=Object(f.a)(D,2),N=J[0],V=J[1],Y=r.a.useState(!1),Z=Object(f.a)(Y,2),q=Z[0],G=Z[1],Q=function(){var a=e.current?e.current.offsetWidth:0,n=e.current?e.current.offsetHeight:0,r=t.current?t.current.offsetHeight:0;B((function(e){return Object(d.a)(Object(d.a)({},e),{},{width:a,height:n-r})}))};return Object(n.useEffect)(Q,[]),Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.a)(Object(ne.a)(t),re.a);case 2:a=e.sent,n=Object.keys(a)[0],ce(a[n]).then((function(e){var t=Object(le.a)(e,ge);t.sort((function(e,t){return pe[t["\u533b\u7642\u533a\u5206\u56de\u7b54"]]-pe[e["\u533b\u7642\u533a\u5206\u56de\u7b54"]]})),i(t)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()("data/covid-19_daily_survey.zip")}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",Q),function(){return window.removeEventListener("resize",Q)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"header"},r.a.createElement(b.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(h.a,{variant:"h6"},"\u533b\u7642\u63d0\u4f9b\u4f53\u5236\u306e\u72b6\u6cc1(2020/5/15\u6642\u70b9)"))),r.a.createElement($,{value:C,onChange:M}),r.a.createElement(W,{value:I,onChange:F}),r.a.createElement(te,{body:N,open:q,onClose:function(){G(!1)}})),r.a.createElement("div",{id:"panel"}),r.a.createElement("div",{id:"map",ref:e},r.a.createElement(g.a,Object.assign({style:{}},P,{mapStyle:"mapbox://styles/mapbox/light-v10",mapboxApiAccessToken:"pk.eyJ1Ijoic2hpbWl6dSIsImEiOiJjam95MDBhamYxMjA1M2tyemk2aHMwenp5In0.i2kMIJulhyPLwp3jiLlpsA",onViewportChange:function(e){return B(e)}}),r.a.createElement(E.a,{getCursor:function(){return v},layers:x({data:l,layerType:_,hospitalState:C,hospitalType:I,onHover:function(e){var t=e.object?"pointer":"move";O(t)},onClick:function(e){var t=e.object.points||[e.object];if(t){var n=function(e){var t=e.sort((function(e,t){return e["\u533b\u7642\u6a5f\u95a2ID"]-t["\u533b\u7642\u6a5f\u95a2ID"]})).map((function(e,t){return{key:t,a:e["\u533b\u7642\u6a5f\u95a2\u540d"],b:e["\u533b\u7642\u533a\u5206"],c:e["\u533b\u7642\u533a\u5206\u56de\u7b54"],d:e["\u533b\u7642\u6a5f\u95a2\u4f4f\u6240"],e:e["\u63d0\u51fa\u65e5"]}}));return(r.a.createElement(me.a,{className:a.table,component:be.a},r.a.createElement(ie.a,{size:"small","aria-label":"a dense table"},r.a.createElement(de.a,null,r.a.createElement(fe.a,null,r.a.createElement(se.a,{align:"left"},"\u533b\u7642\u6a5f\u95a2\u540d"),r.a.createElement(se.a,{align:"left"},"\u533b\u7642\u533a\u5206\u56de\u7b54"),r.a.createElement(se.a,{align:"left"},"\u533b\u7642\u533a\u5206"),r.a.createElement(se.a,{align:"left"},"\u533b\u7642\u6a5f\u95a2\u4f4f\u6240"),r.a.createElement(se.a,{align:"left"},"\u63d0\u51fa\u65e5"))),r.a.createElement(ue.a,null,t.map((function(e){return r.a.createElement(fe.a,{key:e.key},r.a.createElement(se.a,{align:"left"},e.a),r.a.createElement(se.a,{style:{fontWeight:"bold",color:he[e.c]},align:"left"},e.c),r.a.createElement(se.a,{align:"left"},e.b),r.a.createElement(se.a,{align:"left"},e.d),r.a.createElement(se.a,{align:"left"},e.e))}))))))}(t);V(n),G(!0)}}}),controller:{type:y.a,dragRotate:!1},initialViewState:P}))),r.a.createElement("div",{id:"bottom",ref:t},r.a.createElement(K,{value:_,onChange:H})))},je=a(197),ve=Object(je.a)({typography:{fontSize:12},props:{MuiButton:{size:"small"},MuiFilledInput:{margin:"dense"},MuiFormControl:{margin:"dense"},MuiFormHelperText:{margin:"dense"},MuiIconButton:{size:"small"},MuiInputBase:{margin:"dense"},MuiInputLabel:{size:"small",margin:"dense"},MuiListItem:{dense:!0},MuiOutlinedInput:{margin:"dense"},MuiFab:{size:"small"},MuiTable:{size:"small"},MuiTextField:{margin:"dense"},MuiToolbar:{variant:"dense"}},overrides:{MuiInputLabel:{sizeSmall:{marginLeft:4,marginRight:4,padding:12}}}});a(248);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{theme:ve},r.a.createElement(l.a,null),r.a.createElement(ye,null)),","),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.96a7063b.chunk.js.map