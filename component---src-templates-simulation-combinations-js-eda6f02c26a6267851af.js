(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{456:function(e,t,a){"use strict";a.r(t);a(526),a(57),a(463),a(28),a(76),a(670),a(40);var n=a(10),r=a.n(n),i=a(32),l=a.n(i),o=a(0),s=a.n(o),c=a(1),u=a.n(c),d=a(75),m=(a(98),a(99),a(97),a(671)),p=a.n(m),g=a(51);function f(e){var t=e.i18nPlugin.lang,a=e.pageContext,n=a.resultsRaw,r=a.spec,i=a.wowClass,l=a.simulationType,o=JSON.parse(n),s=function(e){return"combinations-default"===e?1:parseInt(e.split("-")[1].charAt(0))}(l),c=[],u=6===o[0].length,m=o[0][4],f={},h={},b=o,v=Array.isArray(b),y=0;for(b=v?b:b[Symbol.iterator]();;){var E;if(v){if(y>=b.length)break;E=b[y++]}else{if((y=b.next()).done)break;E=y.value}var w=E,P=w[1],T=w[3],S=w[4],k={rank:w[0],talents:P,azeritePowers:T,dps:S};u&&(k.bossDPS=w[5]),k.talentsLabel=Object(d.i)(P,i,r,t),k.dpsPercentageDifference=(100*S/m-100).toFixed(1);var R=T.split(" / "),x=[],C=R,q=Array.isArray(C),j=0;for(C=q?C:C[Symbol.iterator]();;){var z;if(q){if(j>=C.length)break;z=C[j++]}else{if((j=C.next()).done)break;z=j.value}var O=z;"None"!==O?x.push(Object(d.g)(O,i,r,P,t,!1)+" (x"+s+")"):x.push("None")}k.azeritePowerLabel=x.join(" "),c.push(k);for(var F=0;F<P.length;F++){f[F]||(f[F]={});var L=parseInt(P.charAt(F));if(0!==L){var D=L-1;f[F][D]||(f[F][D]={selected:!0})}}var A=R,I=Array.isArray(A),B=0;for(A=I?A:A[Symbol.iterator]();;){var N;if(I){if(B>=A.length)break;N=A[B++]}else{if((B=A.next()).done)break;N=B.value}var V=N;if("combinations-default"!==l&&"None"!==V&&!h[V]){var G=Object(g.a)(V),H=G.spellId,_=G.tier,W=G.classesId;h[V]={spellName:V,selected:!0,spellId:H,tier:_,classesId:W}}}}for(var M in f)for(var J=0;J<3;J++)f[M][J]||(f[M][J]={disabled:!0});var U=Object(g.d)(i,r),Y={};return p()(Y,U,f),{multiTargets:u,results:c,azeritePowersFilter:h,talentsTree:Y}}var h=a(147),b=a(530),v=a.n(b),y=a(704),E=a.n(y),w=a(706),P=a.n(w),T=a(500),S=a.n(T),k=a(708),R=a.n(k),x=a(536),C=a.n(x),q=a(469),j=a(499),z=(a(696),a(18)),O=a(457),F=a.n(O),L=a(521),D=a.n(L),A=a(518),I=a.n(A),B=a(519),N=a.n(B),V=a(523),G=a.n(V),H=a(476),_=a.n(H),W=z.b.div.withConfig({componentId:"sc-1lrw6cf-0"})(["align-items:center;display:flex;justify-content:space-evenly;width:100%"]),M=Object(z.b)(_.a).withConfig({componentId:"sc-1lrw6cf-1"})(["&&{opacity:",";}"],function(e){var t=e.disabled;return e.selected?"1":t?"0.05":"0.5"}),J=Object(z.b)(_.a).withConfig({componentId:"sc-1lrw6cf-2"})(["&&{opacity:",";}"],function(e){return e.selected?"1":"0.5"}),U=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.createAzeritePowerSelectHandler=function(e){var t=this;return function(a){t.props.onAzeritePowerSelect(a,e)}},a.createTalentSelectHandler=function(e,t){var a=this;return function(n){a.props.onTalentSelect(n,e,t)}},a.render=function(){var e=this,t=this.props,a=t.name,n=t.azeritePowersFilter,r=t.talentsTree,i=t.wowheadLink;return s.a.createElement(_.a,{item:!0,xs:12},s.a.createElement(I.a,{defaultExpanded:!0,elevation:1},s.a.createElement(F.a,null),s.a.createElement(N.a,{expandIcon:s.a.createElement(D.a,null)},s.a.createElement("h3",{style:{margin:0}},s.a.createElement(h.Trans,{id:"Filters (Click to toggle them on/off from the results)"}))),s.a.createElement(G.a,{style:{padding:"8px 0 24px 0"}},s.a.createElement(W,null,s.a.createElement("div",null,Object.values(r).map(function(t,n){return s.a.createElement(_.a,{container:!0,key:a+"-"+n,spacing:8,style:{width:"135px"}},Object.values(t).map(function(t,r){var l=t.disabled,o=t.selected,c=t.spellId;return s.a.createElement(M,{item:!0,key:a+"-"+n+"-"+r,xs:4,disabled:l,selected:o,onClick:e.createTalentSelectHandler(n,r)},s.a.createElement("a",{href:i+"spell="+c,"data-wh-rename-link":"false","data-wh-icon-size":"medium"}))}))})),s.a.createElement(_.a,{container:!0,spacing:8,style:{width:"185px"}},Object.values(n).map(function(t){var n=t.selected,r=t.spellName,l=t.spellId,o=t.tier,c=t.classesId;return s.a.createElement(J,{item:!0,key:a+"-"+r,xs:12,selected:n,onClick:e.createAzeritePowerSelectHandler(r)},s.a.createElement("a",{href:i+"spell="+l,className:Object(d.a)(o,c)},s.a.createElement("span",null,r)))}))))))},t}(s.a.Component);U.propTypes={name:u.a.string.isRequired,onAzeritePowerSelect:u.a.func.isRequired,onTalentSelect:u.a.func.isRequired,azeritePowersFilter:u.a.object.isRequired,talentsTree:u.a.object.isRequired,wowheadLink:u.a.string.isRequired};var Y=U,K=a(697),Q=a.n(K),X=a(701),Z=a.n(X),$=[{id:"rank",label:"#",numeric:!0,sortable:!1},{id:"talents",label:"Talents",numeric:!1,sortable:!1},{id:"special",label:"Azerite Powers",numeric:!1,sortable:!1},{id:"dps",label:"DPS",numeric:!0,sortable:!0},{id:"bossDPS",label:"Boss DPS",numeric:!0,sortable:!0},{id:"dpsPercentageDifference",label:"% Diff",numeric:!0,sortable:!1}],ee=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.createSortHandler=function(e){var t=this;return function(a){t.props.onRequestSort(a,e)}},a.render=function(){var e=this,t=this.props,a=t.multiTargets,n=t.order,r=t.orderBy;return s.a.createElement(Q.a,null,s.a.createElement(C.a,null,$.map(function(t){var i=t.id,l=t.label,o=t.numeric,c=t.sortable;return a||"bossDPS"!==i?s.a.createElement(S.a,{key:i,numeric:o,sortDirection:r===i&&n},c&&s.a.createElement(Z.a,{active:r===i,direction:n,onClick:e.createSortHandler(i)},l),!c&&l):null})))},t}(s.a.Component);ee.propTypes={multiTargets:u.a.bool.isRequired,onRequestSort:u.a.func.isRequired,order:u.a.string.isRequired,orderBy:u.a.string.isRequired};var te=ee;a.d(t,"query",function(){return ne});var ae=function(e){function t(t){var a,n=f((a=e.call(this,t)||this).props);return a.state=Object.assign({order:"desc",orderBy:"dps",page:0,rowsPerPage:15},n),a.handleAzeritePowerSelect=a.handleAzeritePowerSelect.bind(l()(l()(a))),a.handleTalentSelect=a.handleTalentSelect.bind(l()(l()(a))),a.handleRequestSort=a.handleRequestSort.bind(l()(l()(a))),a.handleChangePage=a.handleChangePage.bind(l()(l()(a))),a.handleChangeRowsPerPage=a.handleChangeRowsPerPage.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.handleAzeritePowerSelect=function(e,t){e.preventDefault();var a=this.state.azeritePowersFilter,n=Object.entries(a).filter(function(e){e[0];return e[1].selected});(n.length>1||t!==n[0][0])&&(a[t].selected=!a[t].selected,this.setState({azeritePowersFilter:a}))},a.handleTalentSelect=function(e,t,a){e.preventDefault();var n=this.state.talentsTree,r=n[t],i=r[a];if(!i.disabled){for(var l=0,o=0;o<3;o++)if(o!==a){var s=r[o];!s.disabled&&s.selected||(l+=1)}l<2&&(i.selected=!i.selected,this.setState({talentsTree:n}))}},a.isValidResult=function(e){var t=e.talents,a=e.azeritePowers,n=this.state,r=n.azeritePowersFilter,i=n.talentsTree;if(t)for(var l=0;l<t.length;l++){var o=parseInt(t.charAt(l));if(0!==o){var s=o-1;if(!i[l][s].selected)return!1}}if(a&&"None"!==a){if(!r[a])return!0;if(!r[a].selected)return!1}return!0},a.handleRequestSort=function(e,t){var a="desc";this.state.orderBy===t&&"desc"===this.state.order&&(a="asc"),this.setState({order:a,orderBy:t})},a.handleChangePage=function(e,t){this.setState({page:t})},a.handleChangeRowsPerPage=function(e){this.setState({rowsPerPage:e.target.value})},a.componentDidMount=function(){Object(d.f)()},a.componentDidUpdate=function(e,t,a){Object(d.f)()},a.render=function(){var e=this,t=this.props,a=t.data,n=t.i18nPlugin,r=t.pageContext,i=this.state,l=i.multiTargets,o=i.order,c=i.orderBy,u=i.page,d=i.results,m=i.rowsPerPage,p=i.azeritePowersFilter,g=i.talentsTree,f=n.t,b=n.wowheadLink,y=r.fightStyle,w=r.fightLength,T=r.fightLengthVariation,k=r.name,x=r.simcBuildTimestamp,z=r.simcGitRevision,O=r.simulationFeaturedOrder,F=r.simulationCategory,L=r.simulationType,D=r.spec,A=r.targetError,I=r.templateGear,B=r.templateDPS,N=r.tier,V=r.variation,G=r.wowBuild,H=r.wowClass,_=r.wowVersion;return s.a.createElement("div",null,s.a.createElement("h1",null,k.replace(new RegExp("_","g")," ").replace(new RegExp("-","g")," ")),s.a.createElement("p",null,s.a.createElement(h.Trans,{id:"<0>Information:</0><1/>These simulations are all based on the default profiles from SimulationCraft.<2/>You can consider everything within the target error DPS range to be mostly equal and requiring a more detailed investigation.",components:[s.a.createElement("b",null),s.a.createElement("br",null),s.a.createElement("br",null)]})),s.a.createElement("p",null,s.a.createElement(h.Trans,{id:"The purpose of these simulations is to get a general idea of how different setups will compare with each other and not to promote any definitive best builds. Several variables (like different trinkets, WF/TF or ingame situations) are not taken into account. This is why you, as always, should <0><1>simulate your own character</1></0> to find your optimal setup.",components:[s.a.createElement("u",null),s.a.createElement("b",null)]})),s.a.createElement("p",null,s.a.createElement(h.Trans,{id:"The fact that generic azerite powers are not included is intended. The goal of such simulations is not to find the best possibilities out of millions possible combinations but rather let you know <0>if a given azerite power alone could impact talents choices</0>. One of the caveat is that it could happen with further stacks or a combination of two of them, those cases are not covered there. You might find more information about such events on your class resources.",components:[s.a.createElement("b",null)]})),s.a.createElement("p",null,s.a.createElement(h.Trans,{id:"Of course, you can also check how the talents compare each other without any azerite power (just unselect all of them). Which is ideal in case you are using only generic azerite powers for example."})),s.a.createElement(q.a,{data:a,fightStyle:y,simulationFeaturedOrder:O,simulationCategory:F,simulationType:L,spec:D,t:f,tier:N,variation:V}),s.a.createElement(j.a,{i18nPlugin:n,fightLength:w,fightLengthVariation:T,simcBuildTimestamp:x,simulationCategory:F,simcGitRevision:z,targetError:A,templateGear:I,templateDPS:B,wowBuild:G,wowClass:H,wowVersion:_}),!d&&s.a.createElement(v.a,{id:"results-loader",color:"secondary"}),d&&s.a.createElement("div",null,s.a.createElement(Y,{name:k,onAzeritePowerSelect:this.handleAzeritePowerSelect,onTalentSelect:this.handleTalentSelect,azeritePowersFilter:p,talentsTree:g,wowheadLink:b}),s.a.createElement("p",{style:{textAlign:"center"}},s.a.createElement("span",{className:"azerite-tier3-specific"},"Outer Ring (Spec Specific)")," | ",s.a.createElement("span",{className:"azerite-tier3-generic"},"Outer Ring (Generic)")," | ",s.a.createElement("span",{className:"azerite-tier2"},"Inner Ring")),s.a.createElement(E.a,null,s.a.createElement(te,{multiTargets:l,onRequestSort:this.handleRequestSort,order:o,orderBy:c}),s.a.createElement(P.a,null,d.filter(function(t){return e.isValidResult(t)}).sort("desc"===o?function(e,t){return t[c]-e[c]}:function(e,t){return e[c]-t[c]}).slice(u*m,u*m+m).map(function(e){return s.a.createElement(C.a,{key:k+"-"+e.rank,hover:!0},s.a.createElement(S.a,{component:"th",scope:"row",numeric:!0},e.rank),s.a.createElement(S.a,{dangerouslySetInnerHTML:{__html:e.talentsLabel}}),s.a.createElement(S.a,{dangerouslySetInnerHTML:{__html:e.azeritePowerLabel}}),s.a.createElement(S.a,{numeric:!0},e.dps),l&&s.a.createElement(S.a,{numeric:!0},e.bossDPS),s.a.createElement(S.a,{numeric:!0},e.dpsPercentageDifference))}))),s.a.createElement(R.a,{component:"div",count:d.length,rowsPerPage:m,page:u,rowsPerPageOptions:[5,10,15,20,25,50,100,1e3],backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage})))},t}(s.a.Component);ae.propTypes={data:u.a.object.isRequired,i18nPlugin:u.a.object,pageContext:u.a.object.isRequired};t.default=ae;var ne="333121488"},469:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(18),s=a(20),c=a(458),u=a.n(c),d=a(457),m=a.n(d),p=function(e){var t=e.data.relatedFightStyles,a=e.fightStyle,n=e.t;return!t||t.edges.length<=1?null:r.a.createElement("div",null,r.a.createElement(m.a,null),t.edges.map(function(e,t){var i=e.node,l=i.context,o=i.path,c=l.fightStyle;return r.a.createElement(u.a,{key:t,variant:"contained",color:"primary",disabled:a===c,component:s.Link,to:o,style:{margin:"4px 8px"}},"["+c.toUpperCase()+"] "+n("fightstyle-"+c))}))};p.propTypes={data:l.a.object.isRequired,fightStyle:l.a.string,t:l.a.func.isRequired};var g=p,f=function(e){var t=e.data.relatedSimulations,a=(e.simulationFeaturedOrder,e.simulationCategory),n=e.simulationType,i=e.t;if(!t||t.edges.length<=1)return null;var l=t.edges.filter(function(e){return!!e.node.context.simulationFeaturedOrder}),o=t.edges.filter(function(e){return e.node.context.simulationCategory===a});return r.a.createElement(r.a.Fragment,null,l.length>=1&&r.a.createElement("div",null,l.map(function(e,t){var n=e.node,l=n.context,o=n.path,c=l.simulationCategory;return r.a.createElement(u.a,{key:t,variant:"contained",color:"primary",disabled:a===c,component:s.Link,to:o,style:{margin:"4px 8px"}},i(c))})),o.length>1&&r.a.createElement("div",null,r.a.createElement(m.a,null),o.map(function(e,t){var a=e.node,l=a.context,o=a.path,c=l.simulationType;return r.a.createElement(u.a,{key:t,variant:"contained",color:"primary",disabled:n===c,component:s.Link,to:o,style:{margin:"4px 8px"}},i(c))})))};f.propTypes={data:l.a.object.isRequired,simulationFeaturedOrder:l.a.number,simulationCategory:l.a.string,simulationType:l.a.string,t:l.a.func.isRequired};var h=f,b=a(75),v=function(e){var t=e.data.relatedSpecWithVariations,a=e.spec,n=e.variation,i=e.t;if(!t||t.edges.length<=1)return null;var l=t.edges.filter(function(e){return""===e.node.context.variation}),o=t.edges.filter(function(e){return e.node.context.spec===a});return r.a.createElement(r.a.Fragment,null,l.length>=1&&r.a.createElement("div",null,r.a.createElement(m.a,null),l.map(function(e,t){var n=e.node,l=n.context,o=n.path,c=l.spec;return r.a.createElement(u.a,{key:t,variant:"contained",color:"primary",disabled:a===c,component:s.Link,to:o,style:{margin:"4px 8px"}},Object(b.b)(i,c,!1))})),o.length>1&&r.a.createElement("div",null,r.a.createElement(m.a,null),o.map(function(e,t){var a=e.node,l=a.context,o=a.path,c=l.variation;return r.a.createElement(u.a,{key:t,variant:"contained",color:"primary",disabled:n===c,component:s.Link,to:o,style:{margin:"4px 8px"}},Object(b.c)(i,""!==c?c:"default",!1))})))};v.propTypes={data:l.a.object.isRequired,spec:l.a.string,t:l.a.func.isRequired,variation:l.a.string};var y=v,E=function(e){var t=e.data.relatedTiers,a=e.t,n=e.tier;return!t||t.edges.length<=1?null:r.a.createElement("div",null,r.a.createElement(m.a,null),t.edges.map(function(e,t){var i=e.node,l=i.context,o=i.path,c=l.tier;return r.a.createElement(u.a,{key:t,variant:"contained",color:"primary",disabled:n===c,component:s.Link,to:o,style:{margin:"4px 8px"}},a(c))}))};E.propTypes={data:l.a.object,t:l.a.func.isRequired,tier:l.a.string};var w=E,P=o.b.div.withConfig({componentId:"sc-1yorpzd-0"})(["border:1px solid ",";display:table;margin:auto;text-align:center;"],function(e){return e.theme.palette.divider}),T=function(e){var t=e.data,a=e.fightStyle,n=e.simulationFeaturedOrder,i=e.simulationCategory,l=e.simulationType,o=e.spec,s=e.t,c=e.tier,u=e.variation;return r.a.createElement(P,null,r.a.createElement(h,{data:t,simulationFeaturedOrder:n,simulationCategory:i,simulationType:l,t:s}),r.a.createElement(w,{data:t,tier:c,t:s}),r.a.createElement(y,{data:t,spec:o,variation:u,t:s}),r.a.createElement(g,{data:t,fightStyle:a,t:s}))};T.propTypes={data:l.a.object.isRequired,fightStyle:l.a.string,simulationFeaturedOrder:l.a.number,simulationCategory:l.a.string,simulationType:l.a.string,spec:l.a.string,t:l.a.func.isRequired,tier:l.a.string,variation:l.a.string};t.a=T},499:function(e,t,a){"use strict";a(528),a(98),a(99),a(28),a(97);var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(51),s=a(75),c=a(147),u=a(529),d=a.n(u);var m=function(e){var t=e.i18nPlugin,a=e.fightLength,n=e.fightLengthVariation,i=e.simcBuildTimestamp,l=e.simulationCategory,u=e.simcGitRevision,m=e.targetError,p=e.templateGear,g=e.templateTalents,f=e.templateDPS,h=e.wowBuild,b=e.wowClass,v=e.wowVersion,y=new Date(1e3*i),E=null==t?void 0:t.lang;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("p",null,r.a.createElement(c.Trans,{id:"<0>Last Update:</0>",components:[r.a.createElement("b",null)]})," ",function(e){if("undefined"!=typeof window)return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{date:e})," | ")}(y),r.a.createElement(c.DateFormat,{value:y,format:{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}})," (CEST)",r.a.createElement("br",null),r.a.createElement(c.Trans,{id:"<0>WoW-Build:</0>",components:[r.a.createElement("b",null)]})," ",v,".",h," ",r.a.createElement("a",{href:"https://github.com/simulationcraft/simc/commits/"+u,title:"Corresponding SimC commit"},"#",u),r.a.createElement("br",null),r.a.createElement(c.Trans,{id:"<0>Target Error:</0>",components:[r.a.createElement("b",null)]})," ",m,"% (~",Math.round(f*m/100)," DPS)",r.a.createElement("br",null),r.a.createElement(c.Trans,{id:"<0>Fight Length:</0>",components:[r.a.createElement("b",null)]})," ",(a*(1-n)/60).toFixed(1)," - ",(a*(1+n)/60).toFixed(1)," minutes",g&&E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(c.Trans,{id:"<0>Talents:</0>",components:[r.a.createElement("b",null)]})," ",g.map(function(e){return 0===e?null:r.a.createElement("a",{key:e,href:Object(s.e)(E)+"spell="+e,"data-wh-rename-link":"false"})})),p&&E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(c.Trans,{id:"<0>Gear:</0>",components:[r.a.createElement("b",null)]})," ",p.map(function(e){var t="",a=e.split(","),n=Array.isArray(a),i=0;for(a=n?a:a[Symbol.iterator]();;){var c;if(n){if(i>=a.length)break;c=a[i++]}else{if((i=a.next()).done)break;c=i.value}var u=c.split("="),d=u[0],m=u[1];switch(d){case"id":t+="item="+m;break;case"bonus_id":t+="&bonus="+m.split("/").join(":");break;case"azerite_powers":if("azerite"===l||"combinations"===l)break;var p=m.split("/");!parseInt(p[0])<=12&&p.unshift(Object(o.g)(b).toString()),t+="&azerite-powers="+p.join(":")}}return r.a.createElement("a",{key:e,href:""+Object(s.e)(E)+t,"data-wh-rename-link":"false"})}))))};m.propTypes={i18nPlugin:l.a.object,fightLength:l.a.number.isRequired,fightLengthVariation:l.a.number.isRequired,simcBuildTimestamp:l.a.number.isRequired,simcGitRevision:l.a.string.isRequired,simulationCategory:l.a.string,targetError:l.a.number.isRequired,templateGear:l.a.array,templateTalents:l.a.array,templateDPS:l.a.number.isRequired,wowBuild:l.a.number.isRequired,wowClass:l.a.string,wowVersion:l.a.string.isRequired},t.a=m}}]);