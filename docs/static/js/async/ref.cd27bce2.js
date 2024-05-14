!function(){var t={8226:function(t,e,r){"use strict";t.exports=r.p+"static/wasm/7c856282ff5ca353.module.wasm"},8217:function(t,e,r){"use strict";let n;var a=r("6500"),i=r.n(a);let o=new URL(r("8226"),r.b),s=!1,u=t=>{},c=null,l=new Promise(t=>n=t),f=[];addEventListener("message",async t=>{if(t.data){if(s?await l:s=!0,"cancel"==t.data)u(!0);else for(let r of t.data){var e;e=r,c?(c(e),c=null):f.push(e)}}}),i()({locateFile:t=>t.endsWith(".wasm")?o.pathname:t,print:t=>{"Ready"==t&&n(),postMessage({text:t})},printErr:t=>postMessage({err:t}),checkCancel:()=>new Promise(function(t){u=t,setTimeout(()=>t(!1),0)}),get:async()=>f.length>0?f.shift():await new Promise(t=>c=t),clear(){f.length=0}})},6500:function(t,e){var r,n,a=(n="undefined"!=typeof document?null===(r=document.currentScript)||void 0===r?void 0:r.src:void 0,function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var e,r,a,i,o,s,u,c,l,f,d,m,h,p,y,g,_,v=Object.assign({},t),w=new Promise((t,e)=>{r=t,a=e}),b=Object.assign({},v),S=[],A="./this.program",D=(t,e)=>{throw e},k="";k=self.location.href,n&&(k=n),k=k.startsWith("blob:")?"":k.substr(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1);i=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)};var R=v.print||console.log.bind(console),M=v.printErr||console.error.bind(console);Object.assign(v,b),b=null,v.arguments&&v.arguments,v.thisProgram&&(A=v.thisProgram),v.quit&&(D=v.quit),v.wasmBinary&&(o=v.wasmBinary);var E=!1;function F(){var t=s.buffer;v.HEAP8=c=new Int8Array(t),v.HEAP16=f=new Int16Array(t),v.HEAPU8=l=new Uint8Array(t),v.HEAPU16=new Uint16Array(t),v.HEAP32=m=new Int32Array(t),v.HEAPU32=h=new Uint32Array(t),v.HEAPF32=p=new Float32Array(t),v.HEAPF64=y=new Float64Array(t)}var I=[],x=[],P=[],C=[],O=0,H=null,T=null;function W(t){null===(e=v.onAbort)||void 0===e||e.call(v,t),M(t="Aborted("+t+")"),E=!0,u=1,t+=". Build with -sASSERTIONS for more info.";var e,r=new WebAssembly.RuntimeError(t);throw a(r),r}var Y=t=>t.startsWith("data:application/octet-stream;base64,");if(!Y(g="ref.wasm")){;e=g,g=v.locateFile?v.locateFile(e,k):k+e}function j(t){if(t==g&&o)return new Uint8Array(o);if(i)return i(t);throw"both async and sync fetching of the wasm failed"}function U(t,e,r){var n;return(n=t,o||"function"!=typeof fetch?Promise.resolve().then(()=>j(n)):fetch(n,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw"failed to load wasm binary file at '".concat(n,"'");return t.arrayBuffer()}).catch(()=>j(n))).then(t=>WebAssembly.instantiate(t,e)).then(r,t=>{M("failed to asynchronously prepare wasm: ".concat(t)),W(t)})}function N(t){this.name="ExitStatus",this.message="Program terminated with exit(".concat(t,")"),this.status=t}var B=t=>{for(;t.length>0;)t.shift()(v)},L=v.noExitRuntime||!0;function z(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"i8";switch(r.endsWith("*")&&(r="*"),r){case"i1":case"i8":c[t]=e;break;case"i16":f[t>>1]=e;break;case"i32":m[t>>2]=e;break;case"i64":W("to do setValue(i64) use WASM_BIGINT");case"float":p[t>>2]=e;break;case"double":y[t>>3]=e;break;case"*":h[t>>2]=e;break;default:W("invalid type for setValue: ".concat(r))}}class V{set_type(t){h[this.ptr+4>>2]=t}get_type(){return h[this.ptr+4>>2]}set_destructor(t){h[this.ptr+8>>2]=t}get_destructor(){return h[this.ptr+8>>2]}set_caught(t){t=t?1:0,c[this.ptr+12]=t}get_caught(){return 0!=c[this.ptr+12]}set_rethrown(t){t=t?1:0,c[this.ptr+13]=t}get_rethrown(){return 0!=c[this.ptr+13]}init(t,e){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(e)}set_adjusted_ptr(t){h[this.ptr+16>>2]=t}get_adjusted_ptr(){return h[this.ptr+16>>2]}get_exception_ptr(){if(tP(this.get_type()))return h[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}constructor(t){this.excPtr=t,this.ptr=t-24}}var G=0,q=0,J=()=>2147483648,X=t=>{var e=(t-s.buffer.byteLength+65535)/65536;try{return s.grow(e),F(),1}catch(t){}},Z={},$=()=>A||"./this.program",K=()=>{if(!K.strings){var t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:$()};for(var e in Z)void 0===Z[e]?delete t[e]:t[e]=Z[e];var r=[];for(var e in t)r.push("".concat(e,"=").concat(t[e]));K.strings=r}return K.strings},Q=(t,e)=>{for(var r=0;r<t.length;++r)c[e++]=t.charCodeAt(r);c[e]=0},tt=()=>L||false,te=t=>{if(u=t,!tt()){var e;null===(e=v.onExit)||void 0===e||e.call(v,t),E=!0}D(t,new N(t))},tr=(t,e)=>{u=t,te(t)},tn=(t,e)=>e+2097152>>>0<4194305-!!t?(t>>>0)+4294967296*e:NaN,ta=[null,[],[]],ti="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,to=(t,e,r)=>{for(var n=e+r,a=e;t[a]&&!(a>=n);)++a;if(a-e>16&&t.buffer&&ti)return ti.decode(t.subarray(e,a));for(var i="";e<a;){var o=t[e++];if(!(128&o)){i+=String.fromCharCode(o);continue}var s=63&t[e++];if((224&o)==192){i+=String.fromCharCode((31&o)<<6|s);continue}var u=63&t[e++];if((o=(240&o)==224?(15&o)<<12|s<<6|u:(7&o)<<18|s<<12|u<<6|63&t[e++])<65536)i+=String.fromCharCode(o);else{var c=o-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}return i},ts=(t,e)=>{var r=ta[t];0===e||10===e?((1===t?R:M)(to(r,0)),r.length=0):r.push(e)},tu=(t,e)=>t?to(l,t,e):"",tc=t=>t%4==0&&(t%100!=0||t%400==0),tl=(t,e)=>{for(var r=0,n=0;n<=e;r+=t[n++]);return r},tf=[31,29,31,30,31,30,31,31,30,31,30,31],td=[31,28,31,30,31,30,31,31,30,31,30,31],tm=(t,e)=>{for(var r=new Date(t.getTime());e>0;){var n=tc(r.getFullYear()),a=r.getMonth(),i=(n?tf:td)[a];if(e>i-r.getDate())e-=i-r.getDate()+1,r.setDate(1),a<11?r.setMonth(a+1):(r.setMonth(0),r.setFullYear(r.getFullYear()+1));else{r.setDate(r.getDate()+e);break}}return r},th=t=>{for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e},tp=(t,e,r,n)=>{if(!(n>0))return 0;for(var a=r,i=r+n-1,o=0;o<t.length;++o){var s=t.charCodeAt(o);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++o)),s<=127){if(r>=i)break;e[r++]=s}else if(s<=2047){if(r+1>=i)break;e[r++]=192|s>>6,e[r++]=128|63&s}else if(s<=65535){if(r+2>=i)break;e[r++]=224|s>>12,e[r++]=128|s>>6&63,e[r++]=128|63&s}else{if(r+3>=i)break;e[r++]=240|s>>18,e[r++]=128|s>>12&63,e[r++]=128|s>>6&63,e[r++]=128|63&s}}return e[r]=0,r-a},ty=(t,e)=>{c.set(t,e)},tg=(t,e,r,n)=>{var a,i,o,s,u,c=h[n+40>>2],l={tm_sec:m[n>>2],tm_min:m[n+4>>2],tm_hour:m[n+8>>2],tm_mday:m[n+12>>2],tm_mon:m[n+16>>2],tm_year:m[n+20>>2],tm_wday:m[n+24>>2],tm_yday:m[n+28>>2],tm_isdst:m[n+32>>2],tm_gmtoff:m[n+36>>2],tm_zone:c?tu(c):""},f=tu(r),d={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var p in d)f=f.replace(RegExp(p,"g"),d[p]);var y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g=["January","February","March","April","May","June","July","August","September","October","November","December"];function _(t,e,r){for(var n="number"==typeof t?t.toString():t||"";n.length<e;)n=r[0]+n;return n}function v(t,e){return _(t,e,"0")}function w(t,e){var r;function n(t){return t<0?-1:t>0?1:0}return 0===(r=n(t.getFullYear()-e.getFullYear()))&&0===(r=n(t.getMonth()-e.getMonth()))&&(r=n(t.getDate()-e.getDate())),r}function b(t){switch(t.getDay()){case 0:return new Date(t.getFullYear()-1,11,29);case 1:return t;case 2:return new Date(t.getFullYear(),0,3);case 3:return new Date(t.getFullYear(),0,2);case 4:return new Date(t.getFullYear(),0,1);case 5:return new Date(t.getFullYear()-1,11,31);case 6:return new Date(t.getFullYear()-1,11,30)}}function S(t){var e=tm(new Date(t.tm_year+1900,0,1),t.tm_yday),r=new Date(e.getFullYear(),0,4),n=new Date(e.getFullYear()+1,0,4),a=b(r),i=b(n);if(0>=w(a,e))return 0>=w(i,e)?e.getFullYear()+1:e.getFullYear();return e.getFullYear()-1}var A={"%a":t=>y[t.tm_wday].substring(0,3),"%A":t=>y[t.tm_wday],"%b":t=>g[t.tm_mon].substring(0,3),"%B":t=>g[t.tm_mon],"%C":t=>v((t.tm_year+1900)/100|0,2),"%d":t=>v(t.tm_mday,2),"%e":t=>_(t.tm_mday,2," "),"%g":t=>S(t).toString().substring(2),"%G":S,"%H":t=>v(t.tm_hour,2),"%I":t=>{var e=t.tm_hour;return 0==e?e=12:e>12&&(e-=12),v(e,2)},"%j":t=>v(t.tm_mday+tl(tc(t.tm_year+1900)?tf:td,t.tm_mon-1),3),"%m":t=>v(t.tm_mon+1,2),"%M":t=>v(t.tm_min,2),"%n":()=>"\n","%p":t=>t.tm_hour>=0&&t.tm_hour<12?"AM":"PM","%S":t=>v(t.tm_sec,2),"%t":()=>"	","%u":t=>t.tm_wday||7,"%U":t=>v(Math.floor((t.tm_yday+7-t.tm_wday)/7),2),"%V":t=>{var e=Math.floor((t.tm_yday+7-(t.tm_wday+6)%7)/7);if((t.tm_wday+371-t.tm_yday-2)%7<=2&&e++,e){if(53==e){var r=(t.tm_wday+371-t.tm_yday)%7;4!=r&&(3!=r||!tc(t.tm_year))&&(e=1)}}else{e=52;var n=(t.tm_wday+7-t.tm_yday-1)%7;(4==n||5==n&&tc(t.tm_year%400-1))&&e++}return v(e,2)},"%w":t=>t.tm_wday,"%W":t=>v(Math.floor((t.tm_yday+7-(t.tm_wday+6)%7)/7),2),"%y":t=>(t.tm_year+1900).toString().substring(2),"%Y":t=>t.tm_year+1900,"%z":t=>{var e=t.tm_gmtoff;return(e>=0?"+":"-")+String("0000"+(e=(e=Math.abs(e)/60)/60*100+e%60)).slice(-4)},"%Z":t=>t.tm_zone,"%%":()=>"%"};for(var p in f=f.replace(/%%/g,"\0\0"),A)f.includes(p)&&(f=f.replace(RegExp(p,"g"),A[p](l)));var D=(a=f=f.replace(/\0\0/g,"%"),i=!1,s=Array(th(a)+1),u=tp(a,s,0,s.length),i&&(s.length=u),s);return D.length>e?0:(ty(D,t),D.length-1)},t_=t=>{if(t instanceof N||"unwind"==t)return u;D(1,t)},tv=t=>{try{return t()}catch(t){W(t)}},tw=()=>{if(!tt())try{tr(u)}catch(t){t_(t)}},tb=t=>{if(!E)try{t(),tw()}catch(t){t_(t)}},tS={instrumentWasmImports(t){var e=/^(emscripten_utils_get_double_impl|emscripten_utils_check_cancel_impl|invoke_.*|__asyncjs__.*)$/;for(let[r,n]of Object.entries(t))"function"==typeof n&&(n.isAsync||e.test(r))},instrumentWasmExports(t){var e={};for(let[r,n]of Object.entries(t))"function"==typeof n?e[r]=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];tS.exportCallStack.push(r);try{return n(...e)}finally{!E&&(tS.exportCallStack.pop(),tS.maybeStopUnwind())}}:e[r]=n;return e},State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:4096,currData:null,handleSleepReturnValue:0,exportCallStack:[],callStackNameToId:{},callStackIdToName:{},callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId(t){var e=tS.callStackNameToId[t];return void 0===e&&(e=tS.callStackId++,tS.callStackNameToId[t]=e,tS.callStackIdToName[e]=t),e},maybeStopUnwind(){tS.currData&&tS.state===tS.State.Unwinding&&0===tS.exportCallStack.length&&(tS.state=tS.State.Normal,tv(tO),"undefined"!=typeof Fibers&&Fibers.trampoline())},whenDone:()=>new Promise((t,e)=>{tS.asyncPromiseHandlers={resolve:t,reject:e}}),allocateData(){var t=tE(12+tS.StackSize);return tS.setDataHeader(t,t+12,tS.StackSize),tS.setDataRewindFunc(t),t},setDataHeader(t,e,r){h[t>>2]=e,h[t+4>>2]=e+r},setDataRewindFunc(t){var e=tS.exportCallStack[0],r=tS.getCallStackId(e);m[t+8>>2]=r},getDataRewindFunc(t){var e=m[t+8>>2];return tD[tS.callStackIdToName[e]]},doRewind:t=>tS.getDataRewindFunc(t)(),handleSleep(t){if(!E){if(tS.state===tS.State.Normal){var e=!1,r=!1;t(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!E){if(tS.handleSleepReturnValue=t,e=!0,r){tS.state=tS.State.Rewinding,tv(()=>tH(tS.currData)),"undefined"!=typeof Browser&&Browser.mainLoop.func&&Browser.mainLoop.resume();var n,a=!1;try{n=tS.doRewind(tS.currData)}catch(t){n=t,a=!0}var i=!1;if(!tS.currData){var o=tS.asyncPromiseHandlers;o&&(tS.asyncPromiseHandlers=null,(a?o.reject:o.resolve)(n),i=!0)}if(a&&!i)throw n}}}),r=!0,!e&&(tS.state=tS.State.Unwinding,tS.currData=tS.allocateData(),"undefined"!=typeof Browser&&Browser.mainLoop.func&&Browser.mainLoop.pause(),tv(()=>tC(tS.currData)))}else tS.state===tS.State.Rewinding?(tS.state=tS.State.Normal,tv(tT),tR(tS.currData),tS.currData=null,tS.sleepCallbacks.forEach(tb)):W("invalid state: ".concat(tS.state));return tS.handleSleepReturnValue}},handleAsync:t=>tS.handleSleep(e=>{t().then(e)})},tA={b:(t,e,r)=>{throw new V(t).init(e,r),G=t,q++,G},e:()=>1,h:(t,e,r)=>l.copyWithin(t,e,e+r),d:()=>{W("")},f:()=>Date.now(),g:t=>{var e=l.length;t>>>=0;var r=J();if(t>r)return!1;for(var n=(t,e)=>t+(e-t%e)%e,a=1;a<=4;a*=2){var i=e*(1+.2/a);if(i=Math.min(i,t+100663296),X(Math.min(r,n(Math.max(t,i),65536))))return!0}return!1},j:function(){return tS.handleAsync(async()=>{let t=await v.checkCancel(),e=tE(1);return z(e,t,"i8"),e})},q:function(){v.clear()},a:function(){return tS.handleAsync(async()=>{let t=await v.get(),e=tE(8);return z(e,t,"double"),e})},m:(t,e)=>{var r=0;return K().forEach((n,a)=>{var i=e+r;h[t+4*a>>2]=i,Q(n,i),r+=n.length+1}),0},n:(t,e)=>{var r=K();h[t>>2]=r.length;var n=0;return r.forEach(t=>n+=t.length+1),h[e>>2]=n,0},i:tr,o:t=>52,p:(t,e,r,n)=>52,k:function(t,e,r,n,a){return tn(e,r),70},c:(t,e,r,n)=>{for(var a=0,i=0;i<r;i++){var o=h[e>>2],s=h[e+4>>2];e+=8;for(var u=0;u<s;u++)ts(t,l[o+u]);a+=s}return h[n>>2]=a,0},l:(t,e,r,n,a)=>tg(t,e,r,n)},tD=function(){var t,e,r,n,i,u,c={a:tA};function l(t,e){var r;return tD=t.exports,s=(tD=tS.instrumentWasmExports(tD)).r,F(),r=tD.s,x.unshift(r),!function(t){var e;if(O--,null===(e=v.monitorRunDependencies)||void 0===e||e.call(v,O),0==O&&(null!==H&&(clearInterval(H),H=null),T)){var r=T;T=null,r()}}(0),tD}t=0,O++,null===(e=v.monitorRunDependencies)||void 0===e||e.call(v,O);if(v.instantiateWasm)try{return v.instantiateWasm(c,l)}catch(t){M("Module.instantiateWasm callback failed with error: ".concat(t)),a(t)}return(r=o,n=g,i=c,u=function(t){l(t.instance)},r||"function"!=typeof WebAssembly.instantiateStreaming||Y(n)||"function"!=typeof fetch?U(n,i,u):fetch(n,{credentials:"same-origin"}).then(t=>WebAssembly.instantiateStreaming(t,i).then(u,function(t){return M("wasm streaming compile failed: ".concat(t)),M("falling back to ArrayBuffer instantiation"),U(n,i,u)}))).catch(a),{}}(),tk=()=>(0,tD.s)(),tR=t=>(tR=tD.u)(t),tM=v._main=(t,e)=>(tM=v._main=tD.v)(t,e),tE=t=>(tE=tD.w)(t),tF=t=>(0,tD._emscripten_stack_restore)(t),tI=t=>(0,tD._emscripten_stack_alloc)(t),tx=()=>(0,tD.emscripten_stack_get_current)(),tP=t=>(tP=tD.x)(t),tC=t=>(tC=tD.y)(t),tO=()=>(tO=tD.z)(),tH=t=>(tH=tD.A)(t),tT=()=>(tT=tD.B)();v.___start_em_js=27692,v.___stop_em_js=28044,v.setValue=z,T=function t(){!_&&tW(),!_&&(T=t)};function tW(){if(!(O>0))!function(){if(v.preRun)for("function"==typeof v.preRun&&(v.preRun=[v.preRun]);v.preRun.length;)(function(t){I.unshift(t)})(v.preRun.shift());B(I)}(),!(O>0)&&(v.setStatus?(v.setStatus("Running..."),setTimeout(function(){setTimeout(function(){v.setStatus("")},1),t()},1)):t());function t(){if(!_)_=!0,v.calledRun=!0,!E&&(B(x),B(P),r(v),v.onRuntimeInitialized&&v.onRuntimeInitialized(),tY&&!function(){var t=tM;try{var e=t(0,0);tr(e,!0)}catch(t){return t_(t)}}(),!function(){if(v.postRun)for("function"==typeof v.postRun&&(v.postRun=[v.postRun]);v.postRun.length;)(function(t){C.unshift(t)})(v.postRun.shift());B(C)}())}}if(v.preInit)for("function"==typeof v.preInit&&(v.preInit=[v.preInit]);v.preInit.length>0;)v.preInit.pop()();var tY=!0;return v.noInitialRun&&(tY=!1),tW(),w});"object"==typeof e?t.exports=a:"function"==typeof define&&define.amd&&define([],()=>a)}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/reference-finder/",r.b=self.location+"/../../../../",r("8217")}();