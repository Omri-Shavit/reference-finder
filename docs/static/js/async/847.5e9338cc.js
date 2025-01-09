"use strict";(self.webpackChunkreference_finder=self.webpackChunkreference_finder||[]).push([["847"],{7569:function(e,s,i){i.r(s),i.d(s,{default:()=>k});var n=i("4186"),a=i("2312"),l=i("6773"),t=i("1699"),r=i("8893"),o=i("3926"),c=i("7968"),d=i("3566"),x=i("2916"),m=i("1882"),h=i("6087");function u(e){var{value:s,className:i,disabled:n,children:a,onInput:r}=e,o=(0,t.useId)();return(0,l.jsxs)("div",{className:"form-check "+i,children:[(0,l.jsx)("input",{className:"form-check-input",disabled:n,type:"checkbox",id:o,checked:s,onChange:e=>r(e.currentTarget.checked)}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:o,children:a})]})}var p=i("2476"),j=i("2402"),v=i("2111"),b=i("8968"),g=i("8159"),_=void 0===Intl.PluralRules,f=e=>{var{axiom:s}=e,{t:i}=(0,r.$G)(),{tempDb:o,setTempDb:c}=(0,t.useContext)(g.J);return(0,l.jsxs)(u,{value:o.axioms[s-1],onInput:e=>{var i=o.axioms.concat();i[s-1]=e,c((0,a._)((0,n._)({},o),{axioms:i}))},children:["O",s," - ",i("settings.basic.axioms.O".concat(s))]})},y=e=>{var{setNodeRef:s,transform:i,transition:t,attributes:r,listeners:o}=(0,j.nB)({id:e.axiom}),c={transform:v.ux.Transform.toString(i),transition:t};return(0,l.jsxs)("div",{ref:s,style:c,className:"d-flex align-items-baseline",children:[(0,l.jsx)("div",(0,a._)((0,n._)({className:"me-3 handle"},r,o),{children:(0,l.jsx)("i",{className:"fa-solid fa-grip-lines"})})),(0,l.jsx)(f,(0,n._)({},e))]})};function N(){var{t:e}=(0,r.$G)(),{tempDb:s,setTempDb:i}=(0,t.useContext)(g.J),o=(0,p.Dy)((0,p.VT)(p.MA,{activationConstraint:{distance:5}}),(0,p.VT)(p.LO,{activationConstraint:{delay:50,tolerance:5}}));function c(e,l){i((0,a._)((0,n._)({},s),{axiomPriority:(0,j.Rp)(s.axiomPriority,e,l)}))}return(0,l.jsxs)("div",{className:"mb-1",children:[(0,l.jsxs)("h6",{children:[e("settings.basic.axioms._"),(0,l.jsx)(b.b,{title:e("help.axioms")})]}),_?(0,l.jsx)("div",{children:s.axiomPriority.map((e,s)=>(0,l.jsxs)("div",{className:"d-flex align-items-baseline",children:[(0,l.jsxs)("div",{className:"me-3",children:[(0,l.jsx)("button",{type:"button",className:"btn btn-ld btn-sm py-0 px-1 me-2",disabled:0==s,onClick:()=>c(s,s-1),children:(0,l.jsx)("i",{className:"fa-solid fa-caret-up"})}),(0,l.jsx)("button",{type:"button",className:"btn btn-ld btn-sm py-0 px-1",disabled:6==s,onClick:()=>c(s,s+1),children:(0,l.jsx)("i",{className:"fa-solid fa-caret-down"})})]}),(0,l.jsx)(f,{axiom:e})]},e))}):(0,l.jsx)("div",{children:(0,l.jsx)(p.LB,{onDragEnd:function(e){var{active:i,over:n}=e;n&&i.id!==n.id&&c(s.axiomPriority.indexOf(i.id),s.axiomPriority.indexOf(n.id))},sensors:o,collisionDetection:p.pE,children:(0,l.jsx)(j.Fo,{items:s.axiomPriority,children:s.axiomPriority.map((e,s)=>(0,l.jsx)(y,{axiom:e},e))})})})]})}function k(){var{t:e}=(0,r.$G)(),s=(0,m.rV)(),{tempDb:i,setTempDb:p}=(0,t.useContext)(g.J),[j,v]=(0,t.useState)(0);(0,t.useEffect)(()=>{!s.useDB&&(0,o.Lj)("/data")},[s.useDB]);var b=i.maxRank>5,_=!b&&!i.useDivision;return(0,l.jsxs)("div",{className:"modal-body",children:[(0,l.jsxs)("ul",{className:"nav nav-tabs mb-3",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("span",{className:"nav-link "+(0==j?"active":""),onClick:()=>v(0),children:e("settings.basic._")})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("span",{className:"nav-link "+(1==j?"active":""),onClick:()=>v(1),children:e("settings.advanced._")})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("span",{className:"nav-link "+(2==j?"active":""),onClick:()=>v(2),children:e("settings.system._")})})]}),(0,l.jsxs)("div",{className:0==j?"":"d-none",children:[(0,l.jsxs)("div",{className:"grid",children:[(0,l.jsx)(h.Z,{label:e("settings.basic.width"),children:(0,l.jsx)(d.g,{value:i.width,exp:i.widthExp,onInput:(e,s)=>p((0,a._)((0,n._)({},i),{width:e,widthExp:s}))})}),(0,l.jsx)(h.Z,{label:e("settings.basic.height"),children:(0,l.jsx)(d.g,{value:i.height,exp:i.heightExp,onInput:(e,s)=>p((0,a._)((0,n._)({},i),{height:e,heightExp:s}))})}),(0,l.jsx)(h.Z,{label:"Max rank",help:e("help.maxRank"),children:(0,l.jsx)(x.G,{value:i.maxRank,min:2,onInput:e=>p((0,a._)((0,n._)({},i),{maxRank:e}))})}),(0,l.jsx)(h.Z,{label:"Max lines",help:e("help.maxLines"),children:(0,l.jsx)(x.G,{value:i.maxLinesV1,min:1e4,max:17e6,onInput:e=>p((0,a._)((0,n._)({},i),{maxLinesV1:e}))})}),(0,l.jsx)(h.Z,{label:"Max marks",help:e("help.maxMarks"),children:(0,l.jsx)(x.G,{value:i.maxMarksV1,min:1e4,max:17e6,onInput:e=>p((0,a._)((0,n._)({},i),{maxMarksV1:e}))})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)(N,{})]}),(0,l.jsxs)("div",{className:"grid "+(1==j?"":"d-none"),children:[(0,l.jsx)(h.Z,{label:"Use divisions",help:e("help.useDivision"),children:(0,l.jsx)(u,{className:"col-form-label",value:b||i.useDivision,disabled:b,onInput:e=>p((0,a._)((0,n._)({},i),{useDivision:e}))})}),(0,l.jsx)(h.Z,{label:"X divisions",help:e("help.divisions"),children:(0,l.jsx)(x.G,{value:i.numX,min:100,max:65e3,disabled:_,onInput:e=>p((0,a._)((0,n._)({},i),{numX:e}))})}),(0,l.jsx)(h.Z,{label:"Y divisions",help:e("help.divisions"),children:(0,l.jsx)(x.G,{value:i.numY,min:100,max:65e3,disabled:_,onInput:e=>p((0,a._)((0,n._)({},i),{numY:e}))})}),(0,l.jsx)(h.Z,{label:"Angle divisions",help:e("help.lineDivisions"),children:(0,l.jsx)(x.G,{value:i.numA,min:100,max:65e3,disabled:_,onInput:e=>p((0,a._)((0,n._)({},i),{numA:e}))})}),(0,l.jsx)(h.Z,{label:"Radial divisions",help:e("help.lineDivisions"),children:(0,l.jsx)(x.G,{value:i.numD,min:100,max:65e3,disabled:_,onInput:e=>p((0,a._)((0,n._)({},i),{numD:e}))})}),(0,l.jsx)(h.Z,{label:"Min aspect ratio",help:e("help.minAspectRatio"),children:(0,l.jsx)(d.g,{value:i.minAspectRatio,exp:i.minAspectRatioExp,onInput:(e,s)=>p((0,a._)((0,n._)({},i),{minAspectRatio:e,minAspectRatioExp:s}))})}),(0,l.jsx)(h.Z,{label:"Min angle sine",help:e("help.minAngle"),children:(0,l.jsx)(d.g,{value:i.minAngleSine,exp:i.minAngleSineExp,onInput:(e,s)=>p((0,a._)((0,n._)({},i),{minAngleSine:e,minAngleSineExp:s}))})}),(0,l.jsx)(h.Z,{label:"Visibility matters",help:e("help.visibility"),children:(0,l.jsx)(u,{className:"col-form-label",value:i.visibility,onInput:e=>p((0,a._)((0,n._)({},i),{visibility:e}))})}),(0,l.jsx)("div",{className:"mt-n2",style:{gridColumn:"1/3"},children:(0,l.jsx)("hr",{})}),(0,l.jsx)(h.Z,{label:"Line error mode",help:e("help.lineError"),children:(0,l.jsxs)("select",{className:"form-select",value:s.worstCaseError?"1":"",onChange:e=>m.rV.setState({worstCaseError:!!e.currentTarget.value}),children:[(0,l.jsx)("option",{value:"1",children:"Worst-case error"}),(0,l.jsx)("option",{value:"",children:"Pythagorean error"})]})}),(0,l.jsx)(h.Z,{label:"Good enough error",help:e("help.goodEnoughError"),children:(0,l.jsx)(d.g,{value:s.error,exp:s.errorExp,onInput:(e,s)=>m.rV.setState({error:e,errorExp:s})})}),(0,l.jsx)(h.Z,{label:"Solution count",children:(0,l.jsx)(x.G,{min:1,max:20,value:s.count,onInput:e=>m.rV.setState({count:e})})})]}),(0,l.jsxs)("div",{className:2==j?"":"d-none",children:[(0,l.jsxs)("div",{className:"grid",children:[(0,l.jsx)(h.Z,{label:e("settings.system.theme._"),children:(0,l.jsxs)("select",{value:s.theme,className:"form-select",onChange:e=>m.rV.setState({theme:Number(e.currentTarget.value)}),children:[(0,l.jsx)("option",{value:m.Q2.system,children:e("settings.system.theme.system")}),(0,l.jsx)("option",{value:m.Q2.light,children:e("settings.system.theme.light")}),(0,l.jsx)("option",{value:m.Q2.dark,children:e("settings.system.theme.dark")}),(0,l.jsx)("option",{value:m.Q2.rabbit,children:"RabbitEar"})]})}),(0,l.jsx)(h.Z,{label:e("settings.system.precision"),children:(0,l.jsx)(x.G,{min:1,max:6,value:s.precision,onInput:e=>m.rV.setState({precision:e})})})]}),(0,l.jsxs)("div",{className:"mt-3 mb-1",children:[(0,l.jsx)(u,{disabled:!c.X,value:s.useDB&&c.X,onInput:e=>m.rV.setState({useDB:e}),children:e("settings.system.useDB")}),(0,l.jsx)(u,{value:s.showInit,onInput:e=>m.rV.setState({showInit:e}),children:e("settings.system.showInit")}),(0,l.jsx)(u,{value:s.showAxiom,onInput:e=>m.rV.setState({showAxiom:e}),children:e("settings.system.showAxiom")})]})]})]})}}}]);