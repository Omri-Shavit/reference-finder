"use strict";(self.webpackChunkreference_finder=self.webpackChunkreference_finder||[]).push([["996"],{1831:function(t,e,r){r.r(e),r.d(e,{default:()=>j});var a=r("3835"),n=r("2676"),s=r("6927"),i=r("6101"),d=r("2501"),l=r("1882"),c=r("7931"),o=r("6690");o.kL.register(o.uw,o.f$,o.ZL,o.De,c.Z);function h(){return l.oR.getState().computedTheme}function u(){var t=h();return t==l.Q2.dark||t==l.Q2.rabbit?"#dee2e6":"#212529"}function x(t){var e=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(var a of t)a<e&&(e=a),a>r&&(r=a);return[e,r]}o.kL.defaults.color=u,o.kL.defaults.borderColor=()=>u()+"66";var m=r("5271");function g(t){var e,{data:r}=t,a=(0,l.rV)(),s=h(),[c,o]=(0,m.useState)(0),[u,g]=x(r),f=(g-u)/10,v=Array.from({length:10},(t,e)=>u+(e+1)*f);v[v.length-1]=g;var j=function(t,e){var r=[],a=0,n=0;for(var s of t){for(;e[n]<s;)r.push(a),a=0,n++;a++}return r.push(a),r}(r,v),b=function(t){var e=[];for(var r of t)e.push(r+(e[e.length-1]||0));return e.map((e,r)=>e-t[r])}(j);var p=(e=h())==l.Q2.rabbit?"#198754":e==l.Q2.light?(0,d.c)("#0d6efd").lighten(.5).rgbString():"#0d6efd";function k(t){return s==l.Q2.light?(0,d.c)(t).darken(.1).rgbString():(0,d.c)(t).lighten(.3).rgbString()}var N={labels:v.map(t=>"≤ ".concat(t.toFixed(a.precision))),datasets:[{label:"Bucket count",data:j,backgroundColor:"#ffc107",borderColor:k("#ffc107"),borderWidth:3},{label:"Aggregate",data:b,backgroundColor:p,borderColor:k(p),borderWidth:3}]};return(0,n.jsx)("div",{style:{height:"25rem"},children:(0,n.jsx)(i.$Q,{style:{height:"100%"},data:N,options:{indexAxis:"y",maintainAspectRatio:!1,hover:{mode:void 0},scales:{x:{stacked:!0,position:"top"},y:{stacked:!0,grid:{color:"transparent"}}},layout:{padding:{right:c+5}},plugins:{legend:{position:"top"},datalabels:{anchor:"end",align:"right",display:t=>!!t.datasetIndex||0==t.dataIndex||"auto",offset:0,formatter(t,e){var a=1==e.datasetIndex;if(a){if(0==t)return"";t+=j[e.dataIndex]}var n="".concat(t," (").concat((t/r.length*100).toFixed(1),"%)");return a&&e.dataIndex==e.dataset.data.length-1&&o(e.chart.ctx.measureText(n).width),n}}}}},s)})}var f=[10,20,50,80,90,95,99];function v(t){var e,r,a,{t:i}=(0,s.$G)(),d=(0,l.rV)();function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.toFixed(d.precision+e)}var[o,h]=x(t.data);var u=(e=t.data).reduce((t,e)=>t+e,0)/e.length;var m=(r=t.data,a=u,Math.sqrt(r.map(t=>t-a).reduce((t,e)=>t+e*e,0)/r.length));return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("table",{className:"table table-striped",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:i("statistics.summary.total")}),(0,n.jsx)("td",{children:t.data.length})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:i("statistics.summary.runTime")}),(0,n.jsxs)("td",{children:[(t.time/1e3).toFixed(1),"s (",(t.time/t.data.length).toFixed(3),"ms/trial)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Min / max errors"}),(0,n.jsxs)("td",{children:[c(o)," / ",c(h)]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:i("statistics.summary.average")}),(0,n.jsx)("td",{children:c(u,2)})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:i("statistics.summary.stdDev")}),(0,n.jsx)("td",{children:c(m,2)})]}),f.map((e,r)=>(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[e,"th percentile"]}),(0,n.jsx)("td",{children:c(t.data[Math.floor(e/100*t.data.length)])})]},r))]})})})}function j(t){var{data:e}=t,{t:r}=(0,s.$G)(),[i,d]=(0,m.useState)(0);return null==e?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("ul",{className:"nav nav-tabs mt-3",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("span",{className:"nav-link "+(0==i?"active":""),onClick:()=>d(0),children:r("statistics.summary._")})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("span",{className:"nav-link "+(1==i?"active":""),onClick:()=>d(1),children:r("statistics.errorDist")})})]}),(0,n.jsx)("div",{className:"mt-3 "+(0==i?"":"d-none"),children:(0,n.jsx)(v,(0,a._)({},e))}),(0,n.jsx)("div",{className:"mt-2 "+(1==i?"":"d-none"),children:(0,n.jsx)(g,(0,a._)({},e))})]})}console.log("Stat loaded")}}]);