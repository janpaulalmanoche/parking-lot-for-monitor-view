/*! For license information please see 7714ec9c.3ca2b679.js.LICENSE */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7714ec9c"],{"0a06":function(t,e,n){"use strict";var r=n("c532"),o=n("30b5"),a=n("f6b4"),i=n("5270"),s=n("4a7b");function c(t){this.defaults=t,this.interceptors={request:new a,response:new a}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method=t.method?t.method.toLowerCase():"get";var e=[i,void 0],n=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}})),t.exports=c},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),o=n("c8af"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function s(){var t;return"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e)?t=n("b50d"):"undefined"!==typeof XMLHttpRequest&&(t=n("b50d")),t}var c={adapter:s(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(a)})),t.exports=c}).call(this,n("4362"))},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,o,a){var i=new Error(t);return r(i,e,n,o,a)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var a;if(n)a=n(e);else if(r.isURLSearchParams(e))a=e.toString();else{var i=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),a=i.join("&")}if(a){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+a}return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"3b20":function(t,e,n){},"41c6":function(t,e,n){"use strict";var r=n("87fa"),o=n.n(r);o.a},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var o=n.config.validateStatus;!o||o(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={};return r.forEach(["url","method","params","data"],(function(t){"undefined"!==typeof e[t]&&(n[t]=e[t])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(e[o])?n[o]=r.deepMerge(t[o],e[o]):"undefined"!==typeof e[o]?n[o]=e[o]:r.isObject(t[o])?n[o]=r.deepMerge(t[o]):"undefined"!==typeof t[o]&&(n[o]=t[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){"undefined"!==typeof e[r]?n[r]=e[r]:"undefined"!==typeof t[r]&&(n[r]=t[r])})),n}},5270:function(t,e,n){"use strict";var r=n("c532"),o=n("c401"),a=n("2e67"),i=n("2444"),s=n("d925"),c=n("e683");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||i.adapter;return e(t).then((function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return a(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,a,i){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"87fa":function(t,e,n){},"8df4":function(t,e,n){"use strict";var r=n("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},b50d:function(t,e,n){"use strict";var r=n("c532"),o=n("467f"),a=n("30b5"),i=n("c345"),s=n("3934"),c=n("2d83");t.exports=function(t){return new Promise((function(e,u){var l=t.data,f=t.headers;r.isFormData(l)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",h=t.auth.password||"";f.Authorization="Basic "+btoa(p+":"+h)}if(d.open(t.method.toUpperCase(),a(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,a={data:r,status:d.status,statusText:d.statusText,headers:n,config:t,request:d};o(e,u,a),d=null}},d.onabort=function(){d&&(u(c("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=n("7aac"),g=(t.withCredentials||s(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;g&&(f[t.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(f,(function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete f[e]:d.setRequestHeader(e,t)})),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(b){if("json"!==t.responseType)throw b}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),u(t),d=null)})),void 0===l&&(l=null),d.send(l)}))}},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,a,i={};return t?(r.forEach(t.split("\n"),(function(t){if(a=t.indexOf(":"),e=r.trim(t.substr(0,a)).toLowerCase(),n=r.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}})),i):i}},c401:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},c532:function(t,e,n){"use strict";var r=n("1d2b"),o=n("c7ce"),a=Object.prototype.toString;function i(t){return"[object Array]"===a.call(t)}function s(t){return"[object ArrayBuffer]"===a.call(t)}function c(t){return"undefined"!==typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function l(t){return"string"===typeof t}function f(t){return"number"===typeof t}function d(t){return"undefined"===typeof t}function p(t){return null!==t&&"object"===typeof t}function h(t){return"[object Date]"===a.call(t)}function m(t){return"[object File]"===a.call(t)}function g(t){return"[object Blob]"===a.call(t)}function b(t){return"[object Function]"===a.call(t)}function v(t){return p(t)&&b(t.pipe)}function y(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function _(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function C(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=C(t[n],e):t[n]=e}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function q(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=q(t[n],e):t[n]="object"===typeof e?q({},e):e}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function S(t,e,n){return w(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t}t.exports={isArray:i,isArrayBuffer:s,isBuffer:o,isFormData:c,isArrayBufferView:u,isString:l,isNumber:f,isObject:p,isUndefined:d,isDate:h,isFile:m,isBlob:g,isFunction:b,isStream:v,isURLSearchParams:y,isStandardBrowserEnv:x,forEach:w,merge:C,deepMerge:q,extend:S,trim:_}},c7ce:function(t,e){t.exports=function(t){return null!=t&&null!=t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},cee4:function(t,e,n){"use strict";var r=n("c532"),o=n("1d2b"),a=n("0a06"),i=n("4a7b"),s=n("2444");function c(t){var e=new a(t),n=o(a.prototype.request,e);return r.extend(n,a.prototype,e),r.extend(n,e),n}var u=c(s);u.Axios=a,u.create=function(t){return c(i(u.defaults,t))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(t){return Promise.all(t)},u.spread=n("0df6"),t.exports=u,t.exports.default=u},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},da36:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("q-card",{staticClass:"my-card",staticStyle:{margin:"20px 20%",height:"350px"}},[n("q-card-section",{staticClass:"bg-purple text-white",staticStyle:{height:"100px"}},[n("div",{staticClass:"text-h6"},[n("q-input",{attrs:{placeholder:"SCAN RFID",autofocus:""},on:{change:this.haha},model:{value:t.rfid,callback:function(e){t.rfid=e},expression:"rfid"}})],1)]),n("q-card-actions",{attrs:{align:"around"}},[n("q-item",{staticStyle:{"margin-top":"20px","font-size":"20px"}},[n("q-item-section",{attrs:{top:""}},[n("q-item-label",{attrs:{lines:"1"}},[n("span",[t._v("\n                                Client :\n                            "+t._s(t.user_detail.user.first_name)+" "+t._s(t.user_detail.user.middle_name)+" "+t._s(t.user_detail.user.last_name)+"\n                        ")]),n("br"),n("span",[t._v("\n                                Plate no : "+t._s(t.user_detail.plate_no)+"\n                        ")]),n("br"),n("span",[t._v("\n                                Vehicle type : "+t._s(t.user_detail.type.type)+"\n                        ")]),n("br"),n("span",[t._v("\n                                Vehicle brand : "+t._s(t.user_detail.brand_id)+"\n                        ")]),n("br"),n("span",[t._v("\n                                Color : "+t._s(t.user_detail.color)+"\n                        ")]),n("span",{staticClass:"text-grey-8"})]),n("q-item-label",{attrs:{caption:"",lines:"1"}}),t._v("\n                        Available Plot  : "+t._s(this.count)+"/6 "),n("br"),t._v("\n                        Vehicle Inside  : "+t._s(this.count2)+"\n                ")],1)],1)],1)],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-dialog",{attrs:{persistent:""},model:{value:t.table,callback:function(e){t.table=e},expression:"table"}},[n("q-card",[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v("Result")])]),n("q-card-section",[n("q-markup-table",{attrs:{flat:"",bordered:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Name")]),n("th",{staticClass:"text-right"},[t._v("Birth Date")]),n("th",{staticClass:"text-right"},[t._v("Burial Date")]),n("th",{staticClass:"text-right"},[t._v("Select")])])]),n("tbody",{staticClass:"bg-grey-3"},t._l(t.search_result,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"text-left"},[t._v(t._s(e.first_name)+" "+t._s(e.last_name))]),n("td",{staticClass:"text-right"},[t._v(t._s(e.birth_date))]),n("td",{staticClass:"text-right"},[t._v(t._s(e.created_at))]),n("td",{staticClass:"text-right"},[n("q-btn",{attrs:{round:"",loading:t.loading5,size:"xs",color:"primary",icon:"play_arrow"},on:{click:function(n){t.simulateProgress(5),t.setID(e.id)}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-facebook")]},proxy:!0}],null,!0)})],1)])})),0)])],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"close",color:"primary"}})],1)],1)],1),n("q-dialog",{attrs:{persistent:""},model:{value:t.medium,callback:function(e){t.medium=e},expression:"medium"}},[n("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[n("q-card-section",[n("div",{staticClass:"q-pa-md"},[n("q-card",{staticClass:"my-card"},[n("q-parallax",{attrs:{src:"https://cdn.quasar.dev/img/parallax1.jpg",height:150}}),n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v('\n                            " '+t._s(t.chosenName)+' "\n                            ')]),n("q-input",{attrs:{label:"Search Using Surname",icon:"search"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("br"),n("q-btn",{staticStyle:{width:"150px"},attrs:{icon:"search",loading:t.loading1,percentage:t.percentage1,color:"primary"},on:{click:function(e){return t.startComputing(1)}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-gears",{staticClass:"on-left"}),t._v("\n                            Searching...\n                            ")]},proxy:!0}])},[t._v("\n                            Search\n                            ")]),n("q-btn",{staticClass:"flat",staticStyle:{"margin-left":"20px"},attrs:{color:"red-5",label:"Close",icon:"close"},on:{click:t.close_search}})],1)],1)],1)]),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}})],1)],1),n("div",{staticClass:"column items-center",staticStyle:{"margin-top":"3px","margin-bottom":"100px"}},[n("q-fab",{attrs:{color:"secondary",push:"",icon:"keyboard_arrow_right",direction:"right"}},[n("q-fab-action",{attrs:{color:"primary",icon:"search"},on:{click:function(e){return t.showNotif("center")}}}),n("q-fab-action",{attrs:{color:"orange-7",to:"/",icon:"home"}}),n("q-fab-action",{attrs:{color:"accent",to:"/",icon:"close"}})],1)],1)],1)},i=[],s=n("2f62"),c=n("bc3a"),u=n.n(c),l=[{color:"purple",message:"Make sure you type the surname of the person",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"}],f={data:function(){return{medium:!1,input:"",table:!1,search_result:{},id:"",list:[],chosenName:"",loading1:!1,percentage1:0,loading2:!1,percentage2:0,loading3:!1,percentage3:0,loading4:!1,loading5:!1,loading6:!1,progress:!1}},computed:Object(s["b"])({quote_:function(t){return t.quotes.quotes}}),methods:{close_search:function(){this.medium=!1},showPLOT:function(){this.$store.dispatch("SHOW_PLOT_A")},setID:function(t){this.id=t},simulateProgress:function(t){var e=this;this["loading".concat(t)]=!0,setTimeout((function(){e["loading".concat(t)]=!1,u.a.post("http://127.0.0.1:8000/api/display-plot",{id:e.id}).then((function(t){e.$q.notify({message:"Proceed to this HIghlited Area",color:"secondary",position:"top",timeout:0,actions:[{label:"Continue",color:"yellow",handler:function(){e.showPLOT()}}]});var n=t.data.area.area;switch(e.$store.dispatch("SET_PLOT_a",t.data.plot),e.$store.dispatch("AREA",n),e.$store.dispatch("PERSON_INFO_A",t.data.record),console.log("area",n),n){case n="A":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("AA");break;case n="B":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("BB");break;case n="C":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("CC");break;case n="D":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("DD");break;case n="E":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("EE");break;case n="F":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("FF");break;case n="G":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("GG");break;case n="H":e.$store.dispatch("SET_IMG_TRUE_A"),e.$store.dispatch("HH");break}})).catch((function(t){console.log(t.response)})),e.table=!e.table}),3e3)},picker:function(){var t=Math.floor(Math.random()*this.quote_.length);this.chosenName=this.quote_[t]},showSearchBar:function(){alert("quote_")},showNotif:function(t){this.picker(),this.medium=!0;var e=l[Math.floor(10*Math.random(l.length))%l.length],n=e.color,r=e.textColor,o=e.multiLine,a=e.icon,i=e.message,s=e.avatar,c=100*Math.random(),u=c>70;this.$q.notify({color:n,textColor:r,icon:c>30?a:null,message:i,position:t,avatar:s,multiLine:o,actions:u?[{label:"Dismiss",color:"yellow",handler:function(){}}]:c>40?{label:"Dismiss",color:"yellow",handler:function(){}}:null,timeout:5e3*Math.random()+3e3})},startComputing:function(t){var e=this;this["loading".concat(t)]=!0,this["percentage".concat(t)]=0,this["interval".concat(t)]=setInterval((function(){e["percentage".concat(t)]+=Math.floor(8*Math.random()+10),e["percentage".concat(t)]>=100&&(clearInterval(e["interval".concat(t)]),u.a.post("http://127.0.0.1:8000/api/search",{name:e.input}).then((function(t){t.data.length?(e.$q.notify({message:"We found some records of what your looking ",color:"secondary",position:"top"}),e.medium=!e.medium,e.table=!e.table,e.search_result=t.data,console.log(t.data)):(e.$q.notify({message:"We cant find the person youre looking for. Please make sure you type the name correctly",color:"orange-8",position:"top"}),e.medium=!e.medium)})).catch((function(t){console.log(t.response)})),e["loading".concat(t)]=!1,e.input="")}),700)}},beforeDestroy:function(){clearInterval(this.interval1),clearInterval(this.interval2)}},d=f,p=n("2877"),h=n("fe09"),m=Object(p["a"])(d,a,i,!1,null,"5296f180",null),g=m.exports;m.options.components=Object.assign({QDialog:h["g"],QCard:h["d"],QCardSection:h["f"],QMarkupTable:h["t"],QBtn:h["c"],QSpinnerFacebook:h["z"],QCardActions:h["e"],QParallax:h["w"],QInput:h["o"],QSpinnerGears:h["A"],QFab:h["i"],QFabAction:h["j"]},m.options.components||{}),m.options.directives=Object.assign({ClosePopup:h["a"]},m.options.directives||{});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-dialog",{attrs:{persistent:"","full-width":"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[n("q-card",{staticClass:"bg-primary text-white"},[n("q-card-section",{staticClass:"row items-center"},[n("div",{attrs:{id:"content-header"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"widget-title"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"icon-align-justify"})]),n("h5",[t._v("Plot Area Information: "+t._s(t.person.first_name)+" "+t._s(t.person.last_name))])]),n("div",{staticClass:"widget-box"},[n("div",{staticClass:"widget-content nopadding"},[n("main",{staticClass:"grid"},t._l(t.plots,(function(e,r){return n("a",{key:e.id},[n("div",{staticClass:"grid-item",style:{backgroundColor:e.color[0]}},[t._v("\n                                            "+t._s(e.id)+"\n\n                                            "+t._s(e.status)+"\n\n                                        ")])])})),0)])])])])]),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",label:"Close",color:"orange"},on:{click:t.reset_plot}})],1)],1)],1)],1)},v=[],y={computed:Object(s["b"])({plots:function(t){return t.index3.plot_info},person:function(t){return t.index3.person_info},confirm:function(t){return t.plot.show_plot}}),methods:{reset_plot:function(){this.$store.dispatch("RESET_SHOW_PLOT"),this.$store.dispatch("RESET_A")},haha:function(t){}}},_=y,x=(n("db22"),Object(p["a"])(_,b,v,!1,null,"7525b919",null)),w=x.exports;x.options.components=Object.assign({QDialog:h["g"],QCard:h["d"],QCardSection:h["f"],QCardActions:h["e"],QBtn:h["c"]},x.options.components||{});var C="//damp-gorge-98609.herokuapp.com/api/",q={components:{Plot:w,Notif:g},mounted:function(){},methods:{haha:function(){var t=this;u.a.get(C+"rfid/"+this.rfid).then((function(e){console.log(e.data),t.user_detail=e.data[0],t.showNotif("center",e.data[1]),u.a.get(C+"plot").then((function(e){t.count=e.data[0],t.count2=e.data[1]}))})),this.rfid=""},showNotif:function(t,e){this.$q.notify({position:t,timeout:8e3,classes:"test",color:"green",message:e,multiLine:!0,avatar:"https://cdn.quasar.dev/img/boy-avatar.png",actions:[{label:"",color:"yellow",handler:function(){}}]})},get_data:function(){var t=this;u.a.get(C+"latest").then((function(e){t.user_detail=e.data}))}},data:function(){return{user_detail:{id:1,owner_id:"",plate_no:"",brand_id:"",vehicle_type_id:"",encoded_by:3,color:"",rfid:"",created_at:"",updated_at:"",user:{id:1,first_name:"",middle_name:"",last_name:"",id_no:"",type_id:"",role_id:0,email:"",email_verified_at:null,created_at:null,updated_at:null},brand:{id:1,brand:"",created_at:null,updated_at:null},type:{id:1,type:"",created_at:null,updated_at:null}},count:"5",count2:"0",rfid:""}}},S=q,E=(n("41c6"),Object(p["a"])(S,r,o,!1,null,"39f16751",null));e["default"]=E.exports;E.options.components=Object.assign({QPage:h["u"],QCard:h["d"],QCardSection:h["f"],QInput:h["o"],QCardActions:h["e"],QItem:h["p"],QItemSection:h["r"],QIcon:h["m"],QItemLabel:h["q"]},E.options.components||{})},db22:function(t,e,n){"use strict";var r=n("3b20"),o=n.n(r);o.a},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var i=a>=0?arguments[a]:t.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,r="/"===i.charAt(0))}return e=n(o(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),i="/"===a(t,-1);return t=n(o(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&i&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),a=r(n.split("/")),i=Math.min(o.length,a.length),s=i,c=0;c<i;c++)if(o[c]!==a[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return u=u.concat(a.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,a=t.length-1;a>=1;--a)if(e=t.charCodeAt(a),47===e){if(!o){r=a;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,a=0,i=t.length-1;i>=0;--i){var s=t.charCodeAt(i);if(47!==s)-1===r&&(o=!1,r=i+1),46===s?-1===e?e=i:1!==a&&(a=1):-1!==e&&(a=-1);else if(!o){n=i+1;break}}return-1===e||-1===r||0===a||1===a&&e===r-1&&e===n+1?"":t.slice(e,r)};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o}}]);