"use strict";(self.webpackChunkreference_finder=self.webpackChunkreference_finder||[]).push([["847"],{7569:function(e,s,i){i.r(s),i.d(s,{default:function(){return y}});let n=i("3835"),a=i("7510"),l=i("2676"),t=i("5271"),r=i("1120"),o=i("3566"),c=i("2916"),x=i("1882"),d=i("6087");function h(e){var{value:s,className:i,children:n,onInput:a}=e,r=(0,t.useId)();return(0,l.jsxs)("div",{className:"form-check "+i,children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:r,checked:s,onChange:e=>a(e.currentTarget.checked)}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:r,children:n})]})}let m=i("4675"),p=i("7790"),u=i("8434"),j=i("8968"),v=i("8159");var b=void 0===Intl.PluralRules,g=e=>{var{axiom:s}=e,{t:i}=(0,r.$G)(),{tempDb:o,setTempDb:c}=(0,t.useContext)(v.J);return(0,l.jsxs)(h,{value:o.axioms[s-1],onInput:e=>{var i=o.axioms.concat();i[s-1]=e,c((0,a._)((0,n._)({},o),{axioms:i}))},children:["O",s," - ",i("settings.basic.axioms.O".concat(s))]})},_=e=>{var{setNodeRef:s,transform:i,transition:t,attributes:r,listeners:o}=(0,p.nB)({id:e.axiom}),c={transform:u.ux.Transform.toString(i),transition:t};return(0,l.jsxs)("div",{ref:s,style:c,className:"d-flex align-items-baseline",children:[(0,l.jsx)("div",(0,a._)((0,n._)({className:"me-3 handle"},r,o),{children:(0,l.jsx)("i",{className:"fa-solid fa-grip-lines"})})),(0,l.jsx)(g,(0,n._)({},e))]})};function f(){var{t:e}=(0,r.$G)(),{tempDb:s,setTempDb:i}=(0,t.useContext)(v.J),o=(0,m.Dy)((0,m.VT)(m.MA,{activationConstraint:{distance:5}}),(0,m.VT)(m.LO,{activationConstraint:{delay:50,tolerance:5}}));function c(e,l){i((0,a._)((0,n._)({},s),{axiomPriority:(0,p.Rp)(s.axiomPriority,e,l)}))}return(0,l.jsxs)("div",{className:"mb-1",children:[(0,l.jsxs)("h6",{children:[e("settings.basic.axioms._"),(0,l.jsx)(j.b,{title:e("help.axioms")})]}),b?(0,l.jsx)("div",{children:s.axiomPriority.map((e,s)=>(0,l.jsxs)("div",{className:"d-flex align-items-baseline",children:[(0,l.jsxs)("div",{className:"me-3",children:[(0,l.jsx)("button",{type:"button",className:"btn btn-ld btn-sm py-0 px-1 me-2",disabled:0==s,onClick:()=>c(s,s-1),children:(0,l.jsx)("i",{className:"fa-solid fa-caret-up"})}),(0,l.jsx)("button",{type:"button",className:"btn btn-ld btn-sm py-0 px-1",disabled:6==s,onClick:()=>c(s,s+1),children:(0,l.jsx)("i",{className:"fa-solid fa-caret-down"})})]}),(0,l.jsx)(g,{axiom:e})]},e))}):(0,l.jsx)("div",{children:(0,l.jsx)(m.LB,{onDragEnd:function(e){var{active:i,over:n}=e;n&&i.id!==n.id&&c(s.axiomPriority.indexOf(i.id),s.axiomPriority.indexOf(n.id))},sensors:o,collisionDetection:m.pE,children:(0,l.jsx)(p.Fo,{items:s.axiomPriority,children:s.axiomPriority.map((e,s)=>(0,l.jsx)(_,{axiom:e},e))})})})]})}function y(){var{t:e}=(0,r.$G)(),s=(0,x.rV)(),{tempDb:i,setTempDb:m}=(0,t.useContext)(v.J),[p,u]=(0,t.useState)(0);return(0,l.jsxs)("div",{className:"modal-body",children:[(0,l.jsxs)("ul",{className:"nav nav-tabs mb-3",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("span",{className:"nav-link "+(0==p?"active":""),onClick:()=>u(0),children:e("settings.basic._")})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("span",{className:"nav-link "+(1==p?"active":""),onClick:()=>u(1),children:e("settings.advanced._")})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("span",{className:"nav-link "+(2==p?"active":""),onClick:()=>u(2),children:e("settings.display._")})})]}),(0,l.jsxs)("div",{className:0==p?"":"d-none",children:[(0,l.jsxs)("div",{className:"grid",children:[(0,l.jsx)(d.Z,{label:e("settings.basic.width"),children:(0,l.jsx)(o.g,{value:i.width,exp:i.widthExp,onInput:(e,s)=>m((0,a._)((0,n._)({},i),{width:e,widthExp:s}))})}),(0,l.jsx)(d.Z,{label:e("settings.basic.height"),children:(0,l.jsx)(o.g,{value:i.height,exp:i.heightExp,onInput:(e,s)=>m((0,a._)((0,n._)({},i),{height:e,heightExp:s}))})}),(0,l.jsx)(d.Z,{label:"Max rank",help:e("help.maxRank"),children:(0,l.jsx)(c.G,{value:i.maxRank,min:2,onInput:e=>m((0,a._)((0,n._)({},i),{maxRank:e}))})}),(0,l.jsx)(d.Z,{label:"Max lines",help:e("help.maxLines"),children:(0,l.jsx)(c.G,{value:i.maxLinesV1,onInput:e=>m((0,a._)((0,n._)({},i),{maxLinesV1:e}))})}),(0,l.jsx)(d.Z,{label:"Max marks",help:e("help.maxMarks"),children:(0,l.jsx)(c.G,{value:i.maxMarksV1,onInput:e=>m((0,a._)((0,n._)({},i),{maxMarksV1:e}))})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)(f,{})]}),(0,l.jsxs)("div",{className:"grid "+(1==p?"":"d-none"),children:[(0,l.jsx)(d.Z,{label:"X divisions",help:e("help.divisions"),children:(0,l.jsx)(c.G,{value:i.numX,min:100,max:46e3,onInput:e=>m((0,a._)((0,n._)({},i),{numX:e}))})}),(0,l.jsx)(d.Z,{label:"Y divisions",help:e("help.divisions"),children:(0,l.jsx)(c.G,{value:i.numY,min:100,max:46e3,onInput:e=>m((0,a._)((0,n._)({},i),{numY:e}))})}),(0,l.jsx)(d.Z,{label:"Angle divisions",help:e("help.lineDivisions"),children:(0,l.jsx)(c.G,{value:i.numA,min:100,max:46e3,onInput:e=>m((0,a._)((0,n._)({},i),{numA:e}))})}),(0,l.jsx)(d.Z,{label:"Radial divisions",help:e("help.lineDivisions"),children:(0,l.jsx)(c.G,{value:i.numD,min:100,max:46e3,onInput:e=>m((0,a._)((0,n._)({},i),{numD:e}))})}),(0,l.jsx)(d.Z,{label:"Min aspect ratio",help:e("help.minAspectRatio"),children:(0,l.jsx)(o.g,{value:i.minAspectRatio,exp:i.minAspectRatioExp,onInput:(e,s)=>m((0,a._)((0,n._)({},i),{minAspectRatio:e,minAspectRatioExp:s}))})}),(0,l.jsx)(d.Z,{label:"Min angle sine",help:e("help.minAngle"),children:(0,l.jsx)(o.g,{value:i.minAngleSine,exp:i.minAngleSineExp,onInput:(e,s)=>m((0,a._)((0,n._)({},i),{minAngleSine:e,minAngleSineExp:s}))})}),(0,l.jsx)(d.Z,{label:"Visibility matters",help:e("help.visibility"),children:(0,l.jsx)(h,{className:"col-form-label",value:i.visibility,onInput:e=>m((0,a._)((0,n._)({},i),{visibility:e}))})}),(0,l.jsx)("div",{className:"mt-n2",style:{gridColumn:"1/3"},children:(0,l.jsx)("hr",{})}),(0,l.jsx)(d.Z,{label:"Line error mode",help:e("help.lineError"),children:(0,l.jsxs)("select",{className:"form-select",value:s.worstCaseError?"1":"",onChange:e=>x.rV.setState({worstCaseError:!!e.currentTarget.value}),children:[(0,l.jsx)("option",{value:"1",children:"Worst-case error"}),(0,l.jsx)("option",{value:"",children:"Pythagorean error"})]})}),(0,l.jsx)(d.Z,{label:"Good enough error",help:e("help.goodEnoughError"),children:(0,l.jsx)(o.g,{value:s.error,exp:s.errorExp,onInput:(e,s)=>x.rV.setState({error:e,errorExp:s})})}),(0,l.jsx)(d.Z,{label:"Solution count",children:(0,l.jsx)(c.G,{min:1,max:20,value:s.count,onInput:e=>x.rV.setState({count:e})})})]}),(0,l.jsxs)("div",{className:2==p?"":"d-none",children:[(0,l.jsxs)("div",{className:"grid",children:[(0,l.jsx)(d.Z,{label:e("settings.display.theme._"),children:(0,l.jsxs)("select",{value:s.theme,className:"form-select",onChange:e=>x.rV.setState({theme:Number(e.currentTarget.value)}),children:[(0,l.jsx)("option",{value:x.Q2.system,children:e("settings.display.theme.system")}),(0,l.jsx)("option",{value:x.Q2.light,children:e("settings.display.theme.light")}),(0,l.jsx)("option",{value:x.Q2.dark,children:e("settings.display.theme.dark")}),(0,l.jsx)("option",{value:x.Q2.rabbit,children:"RabbitEar"})]})}),(0,l.jsx)(d.Z,{label:e("settings.display.precision"),children:(0,l.jsx)(c.G,{min:1,max:6,value:s.precision,onInput:e=>x.rV.setState({precision:e})})})]}),(0,l.jsxs)("div",{className:"mt-3 mb-1",children:[(0,l.jsx)(h,{value:s.showInit,onInput:e=>x.rV.setState({showInit:e}),children:e("settings.display.showInit")}),(0,l.jsx)(h,{value:s.showAxiom,onInput:e=>x.rV.setState({showAxiom:e}),children:e("settings.display.showAxiom")})]})]})]})}}}]);