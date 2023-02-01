var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en-US"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[179],{9847:(w,b,o)=>{o.d(b,{Cz:()=>r,F:()=>x,FH:()=>c,Ij:()=>g,YK:()=>t,bW:()=>d,c7:()=>y,d2:()=>S,dy:()=>C,r4:()=>T,tz:()=>u,wQ:()=>A,xZ:()=>M});const u="Save Successfully",r="Auto Save Successfully",t="Rollback Successfully",d="Component Save Successfully",C="Component Remove Successfully",y="Are you sure to reset all data?",g="Info",x="Everything is reset now!",c="Import data Successfully!",T="Browser will refresh in 5 seconds.",S="Are you sure to remove this data?",A="Yes",M="There is new edition, update now?"},3498:(w,b,o)=>{o.d(b,{k:()=>O});var u=o(4080),r=o(7340),t=o(4650),d=o(6895);function C(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"strong",9),t._uU(2),t.qZA(),t.TgZ(3,"small"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"button",10),t.NdJ("click",function(){t.CHM(e);const E=t.oxw().$implicit,h=t.oxw();return t.KtG(h.remove(E))}),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.xi3(5,2,e.time,"medium"))}}function y(n,f){if(1&n&&(t.TgZ(0,"div",11)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.message),t.xp6(2),t.Oqu(e.detail)}}function g(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"button",10),t.NdJ("click",function(){t.CHM(e);const E=t.oxw().$implicit,h=t.oxw();return t.KtG(h.remove(E))}),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.message)}}function x(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){const h=t.CHM(e).$implicit,v=t.oxw(2).$implicit;return t.KtG(v.buttonClick&&v.buttonClick(h))}),t._uU(1),t.qZA()}if(2&n){const e=f.$implicit,i=t.oxw(2).$implicit;t.Q6J("ngClass","btn-"+i.type),t.xp6(1),t.hij(" ",e," ")}}function c(n,f){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,x,2,2,"button",14),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("ngClass","border-"+e.type+"-subtle"),t.xp6(1),t.Q6J("ngForOf",e.buttons)}}function T(n,f){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"div",17),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Udp("transform","scaleX("+e.progress+")")}}function S(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.NdJ("mouseenter",function(){const h=t.CHM(e).$implicit;return t.KtG(h.paused=!0)})("mouseleave",function(){const h=t.CHM(e).$implicit;return t.KtG(h.paused=!1)}),t.YNc(1,C,7,5,"div",3),t.YNc(2,y,5,2,"div",4),t.YNc(3,g,4,1,"div",5),t.YNc(4,c,2,2,"div",6),t.YNc(5,T,2,2,"div",7),t.qZA()}if(2&n){const e=f.$implicit;t.Q6J("ngClass","text-bg-"+e.type)("@slide",void 0),t.xp6(1),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",!e.title),t.xp6(1),t.Q6J("ngIf",e.buttons),t.xp6(1),t.Q6J("ngIf",!1!==e.duration)}}let A=(()=>{class n{constructor(e,i){this.ngZone=e,this.cdr=i,this.toastList=[],this.progress=100}set position(e){switch(this._position=e,e){case"top_left":this.toastContainerClass="top-0 start-0";break;case"top_right":this.toastContainerClass="top-0 end-0";break;case"top_center":this.toastContainerClass="top-0 start-50 translate-middle-x";break;case"middle_left":this.toastContainerClass="top-50 start-0 translate-middle-y";break;case"middle_right":this.toastContainerClass="top-50 end-0 translate-middle-y";break;case"middle_center":this.toastContainerClass="top-50 start-50 translate-middle";break;case"bottom_left":this.toastContainerClass="bottom-0 start-0";break;case"bottom_right":this.toastContainerClass="bottom-0 end-0";break;case"bottom_center":this.toastContainerClass="bottom-0 start-50 translate-middle-x"}}get position(){return this._position}ngOnInit(){let e=performance.now();this.ngZone.runOutsideAngular(()=>{const i=E=>{const h=E-e;this.toastList.forEach(v=>{!1!==v.duration&&!v.paused&&(v.remain-=h,v.remain=Math.max(0,v.remain),this.ngZone.run(()=>v.progress=+((v.remain-200)/(v.duration||5e3)).toFixed(2)),0===v.remain&&setTimeout(()=>this.remove(v)))}),e=E,this.timer=requestAnimationFrame(i)};this.timer=requestAnimationFrame(i)})}add(e){const i={...e,time:e.time||Date.now(),paused:!1,progress:1,remain:"boolean"==typeof e.duration?0:e.duration||5e3};/bottom/.test(this.position)?this.toastList.unshift(i):this.toastList.push(i)}remove(e){this.toastList.splice(this.toastList.indexOf(e),1),this.cdr.detectChanges()}ngOnDestroy(){cancelAnimationFrame(this.timer)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.R0b),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-toast"]],inputs:{position:"position"},decls:2,vars:2,consts:[[1,"toast-container","position-fixed","p-3",3,"ngClass"],["class","toast show mb-2 overflow-hidden","role","alert","aria-live","assertive","aria-atomic","true",3,"ngClass","mouseenter","mouseleave",4,"ngFor","ngForOf"],["role","alert","aria-live","assertive","aria-atomic","true",1,"toast","show","mb-2","overflow-hidden",3,"ngClass","mouseenter","mouseleave"],["class","toast-header",4,"ngIf"],["class","toast-body",4,"ngIf"],["class","toast-body d-flex justify-content-between",4,"ngIf"],["class","mt-2 p-2 border-top text-end",3,"ngClass",4,"ngIf"],["class","progress","style","height: 2px;--bs-progress-bg: transparent",4,"ngIf"],[1,"toast-header"],[1,"me-auto"],["type","button","data-bs-dismiss","toast","aria-label","Close",1,"btn-close",3,"click"],[1,"toast-body"],[1,"toast-body","d-flex","justify-content-between"],[1,"mt-2","p-2","border-top","text-end",3,"ngClass"],["type","button","class","btn btn-sm",3,"ngClass","click",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm",3,"ngClass","click"],[1,"progress",2,"height","2px","--bs-progress-bg","transparent"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning","w-100",2,"transform-origin","left","transition","transform 200ms linear"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,S,6,7,"div",1),t.qZA()),2&e&&(t.Q6J("ngClass",i.toastContainerClass),t.xp6(1),t.Q6J("ngForOf",i.toastList))},dependencies:[d.mk,d.sg,d.O5,d.uU],encapsulation:2,data:{animation:[(0,r.X$)("slide",[(0,r.eR)(":enter",[(0,r.oB)({opacity:0,transform:"translateX(10%)"}),(0,r.jt)("250ms cubic-bezier(0.4,0.0,0.2,1)",(0,r.oB)({opacity:1,transform:"translateX(0)"}))]),(0,r.eR)(":leave",[(0,r.jt)("250ms cubic-bezier(0.4,0.0,0.2,1)",(0,r.oB)({opacity:0,transform:"translateX(50%)"}))])])]}}),n})();var M=o(8184);let O=(()=>{class n{constructor(e){this.overlay=e,this.componentRefs={}}show(e){const i=e.position||"bottom_right";this.componentRefs[i]||(this.componentRefs[i]=this.overlay.create().attach(new u.C5(A)),this.componentRefs[i].instance.position=i),this.componentRefs[i].instance.add(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(M.aV))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},9371:(w,b,o)=>{o.d(b,{J:()=>r});var u=o(4650);let r=(()=>{class t{constructor(){this.rawMenus=[]}generateRoutes(C,y){const g=new Map,x=this.rawMenus.map(c=>{const T={id:c.id,path:c.url,parentId:typeof c.parentId>"u"||null===c.parentID?null:+c.parentId,component:C,data:{id:c.id},children:[],resolve:{data:y}};return g.set(T.id,T),T});return x.forEach(c=>{if(c.parentId){const T=g.get(c.parentId);T&&T.children.push(c)}}),x.forEach(c=>{c.children.length&&(delete c.component,delete c.resolve)}),x.filter(c=>!c.parentId)}}return t.\u0275fac=function(C){return new(C||t)},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5320:(w,b,o)=>{o.d(b,{N:()=>u});const u={production:!0,debug:!1}},6799:(w,b,o)=>{var u=o(1481),r=o(4650),t=o(8746),d=o(529),C=o(5453),y=o(2039),g=o(9847),x=o(3498);let c=(()=>{class s{constructor(a,p){p.isEnabled&&p.versionUpdates.subscribe(m=>{"VERSION_READY"===m.type&&a.show({type:"primary",title:g.Ij,message:g.xZ,buttons:[g.wQ],duration:!1,buttonClick:I=>{I===g.wQ&&location.reload()}})})}}return s.\u0275fac=function(a){return new(a||s)(r.Y36(x.k),r.Y36(y.yO))},s.\u0275cmp=r.Xpm({type:s,selectors:[["app-root"]],decls:1,vars:0,template:function(a,p){1&a&&r._UZ(0,"router-outlet")},dependencies:[C.lC],encapsulation:2}),s})();var T=o(6895),S=o(8184),A=o(4080);let M=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({providers:[x.k],imports:[S.U8,T.ez,A.eL]}),s})();var O=o(5320),n=o(5698),f=o(262),e=o(515),i=o(4004),E=o(8505),h=o(4968),v=o(6451),$=o(9300);let z=(()=>{class s{constructor(){if(this.worker=null,this.message=e.E,this.error=e.E,s.workerConnector)return s.workerConnector;if(!(typeof Worker<"u"))throw new Error("Web Worker is not supported by you browser!");this.worker=new Worker(o.tu(new URL(o.p+o.u(929),o.b))),this.message=(0,h.R)(this.worker,"message"),this.error=(0,v.T)((0,h.R)(this.worker,"messageerror"),(0,h.R)(this.worker,"error"))}postMessage(a,p){this.worker&&this.worker.postMessage(a,p)}request(a,p){return this.postMessage({type:a,data:p}),this.message.pipe((0,$.h)(({data:m})=>m.subType===a),(0,i.U)(m=>{if("log"===m.data.type)return m.data;throw new Error(m.data.message)}),(0,n.q)(1))}terminate(){this.worker&&this.worker.terminate(),s.workerConnector=null}}return s.workerConnector=null,s})();var R=o(5425);let B=(()=>{class s{constructor(a){this.worker=new z,this.isBrowser=(0,T.NF)(a)}intercept(a,p){return this.isBrowser?((0,R.c)("info","[HTTP]","REQUEST",a),this.resolveWorkerRequest(a).pipe((0,i.U)(({data:m})=>new d.Zn({url:a.url,body:m})),(0,E.b)(m=>(0,R.c)("info","[HTTP]","RESPONSE",m)),(0,n.q)(1),(0,f.K)(m=>{throw(0,R.c)("error","[HTTP]",m.message),m}))):p.handle(a)}resolveWorkerRequest(a){switch(a.url){case"getLatestConfigByID":case"getPageList":case"getNavigations":case"getRoutes":case"addPage":case"editPage":case"deletePage":case"activatePage":case"save":case"getActivatedPageID":case"deleteDB":case"importDB":case"exportDB":case"exportDBWithoutHistory":case"getHistoryByID":case"saveComponent":case"removeComponent":const p="get"===a.method.toLocaleLowerCase()?Object.fromEntries(new URLSearchParams(a.params.toString())):a.body;return this.worker.request(a.url,p);default:return e.E}}}return s.\u0275fac=function(a){return new(a||s)(r.LFG(r.Lbi))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac}),s})();var k=o(9371);const U=[{provide:d.TP,useClass:B,multi:!0},k.J,{provide:r.ip1,useFactory:function P(s,l){return()=>s.get("getRoutes").pipe((0,E.b)(a=>l.rawMenus=a))},multi:!0,deps:[d.eN,k.J]},{provide:r.qLn,useClass:class{constructor(s){this.toast=s}handleError(s){console.error(s),this.toast.show({type:"danger",message:s,duration:!1})}},deps:[x.k]}];let J=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=r.oAB({type:s,bootstrap:[c]}),s.\u0275inj=r.cJS({providers:U,imports:[u.b2.withServerTransition({appId:"serverApp"}),t.PW,d.JF,M,C.Bz.forRoot([{path:"",loadChildren:()=>Promise.all([o.e(867),o.e(592),o.e(916)]).then(o.bind(o,4916)).then(l=>l.MainModule)},{path:"edit",loadChildren:()=>Promise.all([o.e(867),o.e(761)]).then(o.bind(o,8761)).then(l=>l.GtModule)},{path:"**",redirectTo:"404",pathMatch:"full"}]),y.Wr.register("ngsw-worker.js",{enabled:O.N.production,registrationStrategy:"registerWhenStable:3000"})]}),s})();O.N.production&&(0,r.G48)();const F=new(o(3738));F.dom.style.top="",F.dom.style.bottom="env(safe-area-inset-bottom)",document.body.appendChild(F.dom);const Z=()=>{F.update(),requestAnimationFrame(Z)};function N(){u.q6().bootstrapModule(J).then(s=>{const l=s.injector.get(r.z2F);(0,u.HJ)(l.components[0])}).catch(s=>(0,R.c)("error","Bootstrap Error",s))}requestAnimationFrame(Z),"complete"===document.readyState?N():document.addEventListener("DOMContentLoaded",N),function Y(){const s=localStorage.getItem("fontSize"),l=localStorage.getItem("theme"),a=localStorage.getItem("direction");if(s&&document.documentElement.style.setProperty("font-size",s+"px"),l&&"auto"!==l)document.documentElement.dataset.bsTheme=l;else{const p=matchMedia("(prefers-color-scheme: dark)"),m=I=>{const L=localStorage.getItem("theme");(!L||"auto"===L)&&(document.documentElement.dataset.bsTheme=I?"dark":"light")};p.addEventListener("change",I=>m(I.matches)),document.documentElement.dataset.bsTheme=p.matches?"dark":"light"}if("rtl"===a){document.documentElement.dir="rtl";const p=document.head.querySelector("link#bootstrap");p.href=p.href.replace("bootstrap.min.css","bootstrap.rtl.min.css")}}()},5425:(w,b,o)=>{o.d(b,{c:()=>t,i:()=>r});var u=o(5320);function r(d){return Promise.resolve(window.confirm(d))}function t(d,C,y,...g){switch(d){case"info":u.N.debug&&console.info("%c"+C,"color: white; font-weight: 700; background-color: #404dff;padding: 4px;border-radius: 2px",y,...g);break;case"warn":console.warn("%c"+C,"color: #997404; font-weight: 700; background-color: #fff3cd;padding: 4px;border-radius: 2px",y,...g);break;case"error":throw y}}}},w=>{w.O(0,[736],()=>w(w.s=6799)),w.O()}]);