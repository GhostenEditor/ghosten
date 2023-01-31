var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en-US"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[179],{3498:(w,T,o)=>{o.d(T,{k:()=>I});var h=o(4080),a=o(7340),t=o(4650),u=o(6895);function C(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"strong",9),t._uU(2),t.qZA(),t.TgZ(3,"small"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"button",10),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,v=t.oxw();return t.KtG(v.remove(g))}),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.xi3(5,2,e.time,"medium"))}}function y(n,d){if(1&n&&(t.TgZ(0,"div",11)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.message),t.xp6(2),t.Oqu(e.detail)}}function b(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"button",10),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,v=t.oxw();return t.KtG(v.remove(g))}),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.message)}}function E(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){const v=t.CHM(e).$implicit,f=t.oxw(2).$implicit;return t.KtG(f.buttonClick&&f.buttonClick(v))}),t._uU(1),t.qZA()}if(2&n){const e=d.$implicit,i=t.oxw(2).$implicit;t.Q6J("ngClass","btn-"+i.type),t.xp6(1),t.hij(" ",e," ")}}function c(n,d){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,E,2,2,"button",14),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("ngClass","border-"+e.type+"-subtle"),t.xp6(1),t.Q6J("ngForOf",e.buttons)}}function x(n,d){if(1&n&&(t.TgZ(0,"div",16),t._UZ(1,"div",17),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Udp("transform","scaleX("+e.progress+")")}}function F(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.NdJ("mouseenter",function(){const v=t.CHM(e).$implicit;return t.KtG(v.paused=!0)})("mouseleave",function(){const v=t.CHM(e).$implicit;return t.KtG(v.paused=!1)}),t.YNc(1,C,7,5,"div",3),t.YNc(2,y,5,2,"div",4),t.YNc(3,b,4,1,"div",5),t.YNc(4,c,2,2,"div",6),t.YNc(5,x,2,2,"div",7),t.qZA()}if(2&n){const e=d.$implicit;t.Q6J("ngClass","text-bg-"+e.type)("@slide",void 0),t.xp6(1),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",!e.title),t.xp6(1),t.Q6J("ngIf",e.buttons),t.xp6(1),t.Q6J("ngIf",!1!==e.duration)}}let S=(()=>{class n{constructor(e,i){this.ngZone=e,this.cdr=i,this.toastList=[],this.progress=100}set position(e){switch(this._position=e,e){case"top_left":this.toastContainerClass="top-0 start-0";break;case"top_right":this.toastContainerClass="top-0 end-0";break;case"top_center":this.toastContainerClass="top-0 start-50 translate-middle-x";break;case"middle_left":this.toastContainerClass="top-50 start-0 translate-middle-y";break;case"middle_right":this.toastContainerClass="top-50 end-0 translate-middle-y";break;case"middle_center":this.toastContainerClass="top-50 start-50 translate-middle";break;case"bottom_left":this.toastContainerClass="bottom-0 start-0";break;case"bottom_right":this.toastContainerClass="bottom-0 end-0";break;case"bottom_center":this.toastContainerClass="bottom-0 start-50 translate-middle-x"}}get position(){return this._position}ngOnInit(){let e=performance.now();this.ngZone.runOutsideAngular(()=>{const i=g=>{const v=g-e;this.toastList.forEach(f=>{!1!==f.duration&&!f.paused&&(f.remain-=v,f.remain=Math.max(0,f.remain),this.ngZone.run(()=>f.progress=+((f.remain-200)/5e3).toFixed(2)),0===f.remain&&setTimeout(()=>this.remove(f)))}),e=g,this.timer=requestAnimationFrame(i)};this.timer=requestAnimationFrame(i)})}add(e){const i={...e,time:e.time||Date.now(),paused:!1,progress:1,remain:"boolean"==typeof e.duration?0:e.duration||5e3};/bottom/.test(this.position)?this.toastList.unshift(i):this.toastList.push(i)}remove(e){this.toastList.splice(this.toastList.indexOf(e),1),this.cdr.detectChanges()}ngOnDestroy(){cancelAnimationFrame(this.timer)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.R0b),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-toast"]],inputs:{position:"position"},decls:2,vars:2,consts:[[1,"toast-container","position-fixed","p-3",3,"ngClass"],["class","toast show mb-2 overflow-hidden","role","alert","aria-live","assertive","aria-atomic","true",3,"ngClass","mouseenter","mouseleave",4,"ngFor","ngForOf"],["role","alert","aria-live","assertive","aria-atomic","true",1,"toast","show","mb-2","overflow-hidden",3,"ngClass","mouseenter","mouseleave"],["class","toast-header",4,"ngIf"],["class","toast-body",4,"ngIf"],["class","toast-body d-flex justify-content-between",4,"ngIf"],["class","mt-2 p-2 border-top text-end",3,"ngClass",4,"ngIf"],["class","progress","style","height: 2px;--bs-progress-bg: transparent",4,"ngIf"],[1,"toast-header"],[1,"me-auto"],["type","button","data-bs-dismiss","toast","aria-label","Close",1,"btn-close",3,"click"],[1,"toast-body"],[1,"toast-body","d-flex","justify-content-between"],[1,"mt-2","p-2","border-top","text-end",3,"ngClass"],["type","button","class","btn btn-sm",3,"ngClass","click",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-sm",3,"ngClass","click"],[1,"progress",2,"height","2px","--bs-progress-bg","transparent"],["role","progressbar","aria-label","Example 1px high","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","w-100",2,"transform-origin","left","transition","transform 200ms linear"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,F,6,7,"div",1),t.qZA()),2&e&&(t.Q6J("ngClass",i.toastContainerClass),t.xp6(1),t.Q6J("ngForOf",i.toastList))},dependencies:[u.mk,u.sg,u.O5,u.uU],encapsulation:2,data:{animation:[(0,a.X$)("slide",[(0,a.eR)(":enter",[(0,a.oB)({opacity:0,transform:"translateX(10%)"}),(0,a.jt)("250ms cubic-bezier(0.4,0.0,0.2,1)",(0,a.oB)({opacity:1,transform:"translateX(0)"}))]),(0,a.eR)(":leave",[(0,a.jt)("250ms cubic-bezier(0.4,0.0,0.2,1)",(0,a.oB)({opacity:0,transform:"translateX(50%)"}))])])]}}),n})();var A=o(8184);let I=(()=>{class n{constructor(e){this.overlay=e,this.componentRefs={}}show(e){const i=e.position||"bottom_right";this.componentRefs[i]||(this.componentRefs[i]=this.overlay.create().attach(new h.C5(S)),this.componentRefs[i].instance.position=i),this.componentRefs[i].instance.add(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(A.aV))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},9371:(w,T,o)=>{o.d(T,{J:()=>a});var h=o(4650);let a=(()=>{class t{constructor(){this.rawMenus=[]}generateRoutes(C,y){const b=new Map,E=this.rawMenus.map(c=>{const x={id:c.id,path:c.url,parentId:typeof c.parentId>"u"||null===c.parentID?null:+c.parentId,component:C,data:{id:c.id},children:[],resolve:{data:y}};return b.set(x.id,x),x});return E.forEach(c=>{if(c.parentId){const x=b.get(c.parentId);x&&x.children.push(c)}}),E.forEach(c=>{c.children.length&&(delete c.component,delete c.resolve)}),E.filter(c=>!c.parentId)}}return t.\u0275fac=function(C){return new(C||t)},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5320:(w,T,o)=>{o.d(T,{N:()=>h});const h={production:!0,debug:!1}},6799:(w,T,o)=>{var h=o(1481),a=o(4650),t=o(8746),u=o(529),C=o(5453),y=o(2039),b=o(3498);let E=(()=>{class s{constructor(r,p){p.isEnabled&&p.versionUpdates.subscribe(m=>{"VERSION_READY"===m.type&&r.show({type:"primary",title:"Info",message:"There is new edition, update now?",buttons:["Yes"],duration:!1,buttonClick:M=>{M==="Yes"&&location.reload()}})})}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(b.k),a.Y36(y.yO))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-root"]],decls:1,vars:0,template:function(r,p){1&r&&a._UZ(0,"router-outlet")},dependencies:[C.lC],encapsulation:2}),s})();var c=o(6895),x=o(8184),F=o(4080);let S=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({providers:[b.k],imports:[x.U8,c.ez,F.eL]}),s})();var A=o(5320),I=o(5698),n=o(262),d=o(515),e=o(4004),i=o(8505),g=o(4968),v=o(6451),f=o(9300);let B=(()=>{class s{constructor(){if(this.worker=null,this.message=d.E,this.error=d.E,s.workerConnector)return s.workerConnector;if(!(typeof Worker<"u"))throw new Error("Web Worker is not supported by you browser!");this.worker=new Worker(o.tu(new URL(o.p+o.u(929),o.b))),this.message=(0,g.R)(this.worker,"message"),this.error=(0,v.T)((0,g.R)(this.worker,"messageerror"),(0,g.R)(this.worker,"error"))}postMessage(r,p){this.worker&&this.worker.postMessage(r,p)}request(r,p){return this.postMessage({type:r,data:p}),this.message.pipe((0,f.h)(({data:m})=>m.subType===r),(0,e.U)(m=>{if("log"===m.data.type)return m.data;throw new Error(m.data.message)}),(0,I.q)(1))}terminate(){this.worker&&this.worker.terminate(),s.workerConnector=null}}return s.workerConnector=null,s})();var k=o(5425);let P=(()=>{class s{constructor(r){this.worker=new B,this.isBrowser=(0,c.NF)(r)}intercept(r,p){return this.isBrowser?((0,k.c)("info","[HTTP]","REQUEST",r),this.resolveWorkerRequest(r).pipe((0,e.U)(({data:m})=>new u.Zn({url:r.url,body:m})),(0,i.b)(m=>(0,k.c)("info","[HTTP]","RESPONSE",m)),(0,I.q)(1),(0,n.K)(m=>{throw(0,k.c)("error","[HTTP]",m.message),m}))):p.handle(r)}resolveWorkerRequest(r){switch(r.url){case"getLatestConfigByID":case"getPageList":case"getNavigations":case"getRoutes":case"addPage":case"editPage":case"deletePage":case"activatePage":case"save":case"getActivatedPageID":case"deleteDB":case"importDB":case"exportDB":case"exportDBWithoutHistory":case"getHistoryByID":case"saveComponent":case"removeComponent":const p="get"===r.method.toLocaleLowerCase()?Object.fromEntries(new URLSearchParams(r.params.toString())):r.body;return this.worker.request(r.url,p);default:return d.E}}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(a.Lbi))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac}),s})();var O=o(9371);const U=[{provide:u.TP,useClass:P,multi:!0},O.J,{provide:a.ip1,useFactory:function N(s,l){return()=>s.get("getRoutes").pipe((0,i.b)(r=>l.rawMenus=r))},multi:!0,deps:[u.eN,O.J]},{provide:a.qLn,useClass:class{constructor(s){this.toast=s}handleError(s){console.error(s),this.toast.show({type:"danger",message:s,duration:!1})}},deps:[b.k]}];let $=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s,bootstrap:[E]}),s.\u0275inj=a.cJS({providers:U,imports:[h.b2.withServerTransition({appId:"serverApp"}),t.PW,u.JF,S,C.Bz.forRoot([{path:"",loadChildren:()=>Promise.all([o.e(780),o.e(592),o.e(916)]).then(o.bind(o,4916)).then(l=>l.MainModule)},{path:"edit",loadChildren:()=>Promise.all([o.e(780),o.e(811)]).then(o.bind(o,811)).then(l=>l.GtModule)},{path:"**",redirectTo:"404",pathMatch:"full"}]),y.Wr.register("ngsw-worker.js",{enabled:A.N.production,registrationStrategy:"registerWhenStable:3000"})]}),s})();A.N.production&&(0,a.G48)();const Z=new(o(3738));Z.dom.style.top="",Z.dom.style.bottom="env(safe-area-inset-bottom)",document.body.appendChild(Z.dom);const R=()=>{Z.update(),requestAnimationFrame(R)};function L(){h.q6().bootstrapModule($).then(s=>{const l=s.injector.get(a.z2F);(0,h.HJ)(l.components[0])}).catch(s=>(0,k.c)("error","Bootstrap Error",s))}requestAnimationFrame(R),"complete"===document.readyState?L():document.addEventListener("DOMContentLoaded",L),function z(){const s=localStorage.getItem("fontSize"),l=localStorage.getItem("theme"),r=localStorage.getItem("direction");if(s&&document.documentElement.style.setProperty("font-size",s+"px"),l&&"auto"!==l)document.documentElement.dataset.bsTheme=l;else{const p=matchMedia("(prefers-color-scheme: dark)"),m=M=>{const J=localStorage.getItem("theme");(!J||"auto"===J)&&(document.documentElement.dataset.bsTheme=M?"dark":"light")};p.addEventListener("change",M=>m(M.matches)),document.documentElement.dataset.bsTheme=p.matches?"dark":"light"}if("rtl"===r){document.documentElement.dir="rtl";const p=document.head.querySelector("link#bootstrap");p.href=p.href.replace("bootstrap.min.css","bootstrap.rtl.min.css")}}()},5425:(w,T,o)=>{o.d(T,{c:()=>t,i:()=>a});var h=o(5320);function a(u){return Promise.resolve(window.confirm(u))}function t(u,C,y,...b){switch(u){case"info":h.N.debug&&console.info("%c"+C,"color: white; font-weight: 700; background-color: #404dff;padding: 4px;border-radius: 2px",y,...b);break;case"warn":console.warn("%c"+C,"color: #997404; font-weight: 700; background-color: #fff3cd;padding: 4px;border-radius: 2px",y,...b);break;case"error":throw y}}}},w=>{w.O(0,[736],()=>w(w.s=6799)),w.O()}]);