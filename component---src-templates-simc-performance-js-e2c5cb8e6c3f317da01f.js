(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{445:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return f});a(40);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),l=a(51),s=a(75),c=a(659),u=a(469),d={backgroundColor:"#303030",width:"100%",chartArea:{top:50,bottom:50,right:100,left:250},fontName:'"Roboto", "Helvetica", "Arial", sans-serif',titleTextStyle:{fontSize:18,color:"white"},vAxis:{textStyle:{fontSize:14,color:"white"}},hAxis:{textStyle:{fontSize:14,color:"white"},viewWindowMode:"maximized",viewWindow:{min:0}},legend:{position:"none"}},m=function(t,e){return t[1]-e[1]},p=function(t,e){return e[1]-t[1]},g=["Name","",{role:"style"}],v=function(t){var e=t.data,a=t.i18nPlugin,n=t.pageContext,i=a.t,o=n.fightStyle,v=n.simulationFeaturedOrder,f=n.simulationCategory,y=n.simulationType,h=n.tier;if(!e.statistics)return r.a.createElement("div",null,r.a.createElement("h1",null,"SimC Performance"),r.a.createElement(u.a,{data:e,fightStyle:o,simulationFeaturedOrder:v,simulationCategory:f,simulationType:y,t:i,tier:h}),r.a.createElement("div",null,r.a.createElement("p",null,"No statistics found.")));var E=e.statistics.edges.map(function(t){var e=t.node.context,a=e.wowClass,n=e.spec,r=e.variation,o=e.elapsedTime,c=e.totalEventsProcessed,u=e.totalIterations,d=e.totalActors;return[Object(s.d)(i,n,r),{elapsedTime:o,totalEventsProcessed:c,totalIterations:u,totalActors:d},"color: "+Object(l.f)(a)]});d.height=80+25.5*E.length;var b=E.map(function(t){var e=t[1],a=e.elapsedTime,n=e.totalIterations;return[t[0],Math.round(n/a),t[2]]});b.sort(p),b.unshift(g);var x=E.map(function(t){var e=t[1],a=e.totalEventsProcessed,n=e.totalIterations;return[t[0],Math.round(a/n),t[2]]});x.sort(m),x.unshift(g);var T=E.map(function(t){var e=t[1],a=e.elapsedTime,n=e.totalIterations;return[t[0],Math.round(1e6*a/n),t[2]]});T.sort(m),T.unshift(g);var C=E.map(function(t){var e=t[1],a=e.elapsedTime,n=e.totalActors;return[t[0],Math.round(1e3*a/n),t[2]]});C.sort(m),C.unshift(g);var O=E.map(function(t){var e=t[1],a=e.totalIterations,n=e.totalActors;return[t[0],Math.round(a/n),t[2]]});return O.sort(m),O.unshift(g),r.a.createElement("div",null,r.a.createElement("h1",null,"SimC Performance"),r.a.createElement(u.a,{data:e,fightStyle:o,simulationFeaturedOrder:v,simulationCategory:f,simulationType:y,t:i,tier:h}),r.a.createElement("div",null,r.a.createElement(c.a,{chartType:"BarChart",data:b,options:Object.assign({},d,{title:"Avg. Iterations per second [iterations / time]"})})),r.a.createElement("div",null,r.a.createElement(c.a,{chartType:"BarChart",data:x,options:Object.assign({},d,{title:"Avg. Events processed per iteration [events / iterations]"})})),r.a.createElement("div",null,r.a.createElement(c.a,{chartType:"BarChart",data:T,options:Object.assign({},d,{title:"Avg. Duration (μs) per iteration [time * 1000000 / iterations]"})})),r.a.createElement("div",null,r.a.createElement(c.a,{chartType:"BarChart",data:C,options:Object.assign({},d,{title:"Avg. Duration (ms) per actor for 0."+(-1!==y.indexOf("combinations")?"4":"2")+"% Target Error [time * 1000 / actors]"})})),r.a.createElement("div",null,r.a.createElement(c.a,{chartType:"BarChart",data:O,options:Object.assign({},d,{title:"Avg. Iterations per actor for 0."+(-1!==y.indexOf("combinations")?"4":"2")+"% Target Error [iterations / actors]"})})))};v.propTypes={data:o.a.object.isRequired,i18nPlugin:o.a.object,pageContext:o.a.object.isRequired},e.default=v;var f="967601199"},469:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),l=a(18),s=a(20),c=a(458),u=a.n(c),d=a(457),m=a.n(d),p=function(t){var e=t.data.relatedFightStyles,a=t.fightStyle,n=t.t;return!e||e.edges.length<=1?null:r.a.createElement("div",null,r.a.createElement(m.a,null),e.edges.map(function(t,e){var i=t.node,o=i.context,l=i.path,c=o.fightStyle;return r.a.createElement(u.a,{key:e,variant:"contained",color:"primary",disabled:a===c,component:s.Link,to:l,style:{margin:"4px 8px"}},"["+c.toUpperCase()+"] "+n("fightstyle-"+c))}))};p.propTypes={data:o.a.object.isRequired,fightStyle:o.a.string,t:o.a.func.isRequired};var g=p,v=function(t){var e=t.data.relatedSimulations,a=(t.simulationFeaturedOrder,t.simulationCategory),n=t.simulationType,i=t.t;if(!e||e.edges.length<=1)return null;var o=e.edges.filter(function(t){return!!t.node.context.simulationFeaturedOrder}),l=e.edges.filter(function(t){return t.node.context.simulationCategory===a});return r.a.createElement(r.a.Fragment,null,o.length>=1&&r.a.createElement("div",null,o.map(function(t,e){var n=t.node,o=n.context,l=n.path,c=o.simulationCategory;return r.a.createElement(u.a,{key:e,variant:"contained",color:"primary",disabled:a===c,component:s.Link,to:l,style:{margin:"4px 8px"}},i(c))})),l.length>1&&r.a.createElement("div",null,r.a.createElement(m.a,null),l.map(function(t,e){var a=t.node,o=a.context,l=a.path,c=o.simulationType;return r.a.createElement(u.a,{key:e,variant:"contained",color:"primary",disabled:n===c,component:s.Link,to:l,style:{margin:"4px 8px"}},i(c))})))};v.propTypes={data:o.a.object.isRequired,simulationFeaturedOrder:o.a.number,simulationCategory:o.a.string,simulationType:o.a.string,t:o.a.func.isRequired};var f=v,y=a(75),h=function(t){var e=t.data.relatedSpecWithVariations,a=t.spec,n=t.variation,i=t.t;if(!e||e.edges.length<=1)return null;var o=e.edges.filter(function(t){return""===t.node.context.variation}),l=e.edges.filter(function(t){return t.node.context.spec===a});return r.a.createElement(r.a.Fragment,null,o.length>=1&&r.a.createElement("div",null,r.a.createElement(m.a,null),o.map(function(t,e){var n=t.node,o=n.context,l=n.path,c=o.spec;return r.a.createElement(u.a,{key:e,variant:"contained",color:"primary",disabled:a===c,component:s.Link,to:l,style:{margin:"4px 8px"}},Object(y.b)(i,c,!1))})),l.length>1&&r.a.createElement("div",null,r.a.createElement(m.a,null),l.map(function(t,e){var a=t.node,o=a.context,l=a.path,c=o.variation;return r.a.createElement(u.a,{key:e,variant:"contained",color:"primary",disabled:n===c,component:s.Link,to:l,style:{margin:"4px 8px"}},Object(y.c)(i,""!==c?c:"default",!1))})))};h.propTypes={data:o.a.object.isRequired,spec:o.a.string,t:o.a.func.isRequired,variation:o.a.string};var E=h,b=function(t){var e=t.data.relatedTiers,a=t.t,n=t.tier;return!e||e.edges.length<=1?null:r.a.createElement("div",null,r.a.createElement(m.a,null),e.edges.map(function(t,e){var i=t.node,o=i.context,l=i.path,c=o.tier;return r.a.createElement(u.a,{key:e,variant:"contained",color:"primary",disabled:n===c,component:s.Link,to:l,style:{margin:"4px 8px"}},a(c))}))};b.propTypes={data:o.a.object,t:o.a.func.isRequired,tier:o.a.string};var x=b,T=l.b.div.withConfig({componentId:"sc-1yorpzd-0"})(["border:1px solid ",";display:table;margin:auto;text-align:center;"],function(t){return t.theme.palette.divider}),C=function(t){var e=t.data,a=t.fightStyle,n=t.simulationFeaturedOrder,i=t.simulationCategory,o=t.simulationType,l=t.spec,s=t.t,c=t.tier,u=t.variation;return r.a.createElement(T,null,r.a.createElement(f,{data:e,simulationFeaturedOrder:n,simulationCategory:i,simulationType:o,t:s}),r.a.createElement(x,{data:e,tier:c,t:s}),r.a.createElement(E,{data:e,spec:l,variation:u,t:s}),r.a.createElement(g,{data:e,fightStyle:a,t:s}))};C.propTypes={data:o.a.object.isRequired,fightStyle:o.a.string,simulationFeaturedOrder:o.a.number,simulationCategory:o.a.string,simulationType:o.a.string,spec:o.a.string,t:o.a.func.isRequired,tier:o.a.string,variation:o.a.string};e.a=C}}]);