"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[916],{4916:(Oe,y,_)=>{_.r(y),_.d(y,{MainModule:()=>Se});var p=_(5453),r=_(6895),x=_(2867),z=_(4254),e=_(4650);let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-page-error"]],decls:2,vars:0,consts:[[1,"font-monospace","display-1","w-100","h-100","d-flex","justify-content-center","align-items-center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._uU(1," 404 Not Found "),e.qZA())},encapsulation:2}),o})();var b=_(6555),V=_(7272),H=_(5963),Q=_(4004);let Y=(()=>{class o{constructor(){this.originalDescription="A Low-Code Web Editor. Fast and easy to build web page.",this.description=""}ngOnInit(){(0,V.z)(...this.originalDescription.split("").map(t=>(0,H.H)(150*Math.random()).pipe((0,Q.U)(()=>t)))).subscribe(t=>this.description+=t)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:18,vars:1,consts:[[1,"text-center","p-1"],[1,"mt-5","mb-4","display-3","fw-medium"],[1,"fw-normal","mb-5","text-secondary","font-monospace","m-auto",2,"max-width","24rem","height","2.5em"],[1,"cursor"],[1,"mb-3"],["target","_blank","href","https://github.com/GhostenEditor/ghosten",1,"btn","btn-lg","btn-primary","me-3"],["type","button","disabled","",1,"btn","btn-lg","btn-light"],[1,"text-body-tertiary"],["src","https://user-images.githubusercontent.com/121630113/215403653-729e84b0-af01-4682-9a71-61ccf7fbaeae.jpg","alt","screenshot","width","3420","height","2140",1,"img-fluid","border","rounded","mt-5"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2,"GHOSTEN EDITOR"),e.qZA(),e.TgZ(3,"h6",2),e._uU(4),e.TgZ(5,"span",3),e._uU(6,"|"),e.qZA()(),e.TgZ(7,"div",4)(8,"a",5)(9,"small"),e._uU(10,"Develop"),e.qZA()(),e.TgZ(11,"button",6)(12,"small"),e._uU(13,"How to start (Todo)"),e.qZA()()(),e.TgZ(14,"small",7)(15,"i"),e._uU(16,"*Note: It is alpha version."),e.qZA()(),e._UZ(17,"img",8),e.qZA()),2&t&&(e.xp6(4),e.hij(" ",n.description," "))},styles:[".cursor[_ngcontent-%COMP%]{animation:blink .7s infinite}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}"]}),o})();var f=_(529),T=_(7340),D=_(8580);function j(o,i){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",6),e.NdJ("click",function(){e.CHM(t),e.oxw();const l=e.MAs(1);return e.KtG(l.toggle())}),e._UZ(2,"a",7),e.TgZ(3,"i",8),e._uU(4),e.qZA(),e.TgZ(5,"span",9),e._uU(6),e.qZA(),e.TgZ(7,"i",10),e._uU(8),e.qZA()(),e._UZ(9,"app-navigation-item",11),e.BQk()}if(2&o){const t=e.oxw().$implicit,n=e.MAs(1),l=e.oxw();e.xp6(1),e.Udp("padding-left",.75*l.level+"rem"),e.xp6(1),e.Q6J("routerLink",t.url),e.xp6(2),e.Oqu(t.icon),e.xp6(2),e.Oqu(t.label),e.xp6(2),e.Oqu(n.expanded?"chevron_down":"chevron_right"),e.xp6(1),e.Q6J("items",t.children)("level",l.level+1)("@bodyExpansion",n.expanded?"expanded":"collapsed")}}function K(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"a",12)(2,"i",8),e._uU(3),e.qZA(),e.TgZ(4,"span",13),e._uU(5),e.qZA()(),e.BQk()),2&o){const t=e.oxw().$implicit,n=e.oxw();e.xp6(1),e.Udp("padding-left",.75*n.level+"rem"),e.Q6J("routerLink",t.url),e.xp6(2),e.Oqu(t.icon),e.xp6(2),e.Oqu(t.label)}}function W(o,i){if(1&o&&(e.ynx(0,2,3),e.TgZ(2,"li",4),e.YNc(3,j,10,9,"ng-container",5),e.YNc(4,K,6,5,"ng-container",5),e.qZA(),e.BQk()),2&o){const t=i.$implicit,n=e.MAs(1);e.Q6J("expanded",!0),e.xp6(2),e.ekj("open",n.expanded),e.xp6(1),e.Q6J("ngIf",t.directory),e.xp6(1),e.Q6J("ngIf",!t.directory)}}let ee=(()=>{class o{constructor(){this.level=1}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-navigation-item"]],hostAttrs:[1,"overflow-hidden"],inputs:{items:"items",level:"level"},decls:2,vars:4,consts:[["cdkAccordion","",1,"list-unstyled",3,"multi"],["cdkAccordionItem","",3,"expanded",4,"ngFor","ngForOf"],["cdkAccordionItem","",3,"expanded"],["accordionItem","cdkAccordionItem"],[1,"mb-1"],[4,"ngIf"],["routerLinkActive","active",1,"btn","btn-text","d-flex","align-items-baseline","btn-sm",3,"click"],[1,"d-none",3,"routerLink"],[1,"gt-icon","me-2","flex-shrink-0"],[1,"flex-grow-1","text-start","text-truncate"],[1,"gt-icon","ms-2","flex-shrink-0"],[1,"d-block",3,"items","level"],["routerLinkActive","active",1,"btn","btn-text","d-flex","align-items-baseline","btn-sm",3,"routerLink"],[1,"text-truncate"]],template:function(t,n){1&t&&(e.TgZ(0,"ul",0),e.YNc(1,W,5,5,"ng-container",1),e.qZA()),2&t&&(e.ekj("mt-1",1!==n.level),e.Q6J("multi",!0),e.xp6(1),e.Q6J("ngForOf",n.items))},dependencies:[r.sg,r.O5,p.yS,p.Od,D.xI,D.dD,o],encapsulation:2,data:{animation:[(0,T.X$)("bodyExpansion",[(0,T.SB)("collapsed, void",(0,T.oB)({height:"0px",visibility:"hidden"})),(0,T.SB)("expanded",(0,T.oB)({height:"*",visibility:"visible"})),(0,T.eR)("expanded <=> collapsed, void => collapsed",(0,T.jt)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])]}}),o})();function te(o,i){1&o&&(e.TgZ(0,"div",2),e._uU(1," There is no menu now! Try to do something. "),e.qZA())}let ne=(()=>{class o{constructor(t){this.http=t,this.showSideMenu=!1,this.http.get("getNavigations").subscribe(n=>this.items=n)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.eN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-navigation"]],inputs:{showSideMenu:"showSideMenu"},decls:2,vars:4,consts:[["class","vh-100 font-monospace text-center p-3 oblique-stripes rounded border",4,"ngIf"],[2,"overflow","auto!important",3,"items"],[1,"vh-100","font-monospace","text-center","p-3","oblique-stripes","rounded","border"]],template:function(t,n){1&t&&(e.YNc(0,te,2,0,"div",0),e._UZ(1,"app-navigation-item",1)),2&t&&(e.Q6J("ngIf",n.items&&!n.items.length),e.xp6(1),e.ekj("show",n.showSideMenu),e.Q6J("items",n.items))},dependencies:[r.O5,ee],encapsulation:2}),o})();var U=_(5861),h=_(4080),N=_(8505),Z=_(3900),O=_(6451),G=_(5698),m=_(9847),s=_(433),I=_(8744);function oe(o,i){1&o&&(e.TgZ(0,"div",29),e._uU(1,"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"),e.qZA())}function ie(o,i){if(1&o&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("ngValue",t.value),e.xp6(1),e.hij(" ",t.label||t.value," ")}}function le(o,i){if(1&o&&(e.TgZ(0,"div",29),e._uU(1),e.ALo(2,"json"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,t.pageUrl.errors)," ")}}function ae(o,i){if(1&o&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("ngValue",t.id),e.xp6(1),e.hij(" ",t.title," ")}}function se(o,i){if(1&o&&(e.TgZ(0,"div",29),e._uU(1),e.ALo(2,"json"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,t.pageParentID.errors)," ")}}function _e(o,i){1&o&&(e.TgZ(0,"div",29),e._uU(1,"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"),e.qZA())}let $=(()=>{class o{constructor(t){this.http=t,this.mode="add",this.modalConfirm=new e.vpe,this.modalClose=new e.vpe,this.animationDone=new e.vpe,this.form=new s.cw({id:new s.NI(null),title:new s.NI(null,s.kI.required),description:new s.NI(null,s.kI.required),url:new s.NI(null,[s.kI.required,s.kI.pattern(/^[\w\-]+$/)]),type:new s.NI("Function",s.kI.required),icon:new s.NI(null),parentId:new s.NI}),this.pageID=this.form.get("id"),this.pageTitle=this.form.get("title"),this.pageDescription=this.form.get("description"),this.pageUrl=this.form.get("url"),this.pageType=this.form.get("type"),this.pageIcon=this.form.get("icon"),this.pageParentID=this.form.get("parentId"),this.modalPending=!1,this.parentList=this.http.get("getPageList",{params:{type:"Directory"}}),this.gtIcons=[{label:"",value:"add"},{label:"",value:"mouse_pointer"},{label:"",value:"division"},{label:"",value:"checkbox"},{label:"",value:"toys"},{label:"",value:"trash"},{label:"",value:"edit"},{label:"",value:"file"},{label:"",value:"pages"},{label:"",value:"chevron_left"},{label:"",value:"chevron_right"},{label:"",value:"chevron_up"},{label:"",value:"chevron_down"},{label:"",value:"chevrons_left"},{label:"",value:"chevrons_right"},{label:"",value:"chevrons_up"},{label:"",value:"chevrons_down"},{label:"",value:"move"},{label:"",value:"refresh"},{label:"",value:"rotate_ccw"},{label:"",value:"rotate_cw"},{label:"",value:"arrow_left"},{label:"",value:"arrow_right"},{label:"",value:"dashed_rect"},{label:"",value:"bind"},{label:"",value:"preview"},{label:"",value:"save"},{label:"",value:"list"},{label:"",value:"maximize"},{label:"",value:"minimize"},{label:"",value:"plus"},{label:"",value:"minus"},{label:"",value:"column"},{label:"",value:"row"},{label:"",value:"panel"},{label:"",value:"form"},{label:"",value:"gauge"},{label:"",value:"dotted_line"},{label:"",value:"bell"},{label:"",value:"radio"},{label:"",value:"button"},{label:"",value:"button_group"},{label:"",value:"unbind"},{label:"",value:"custom"},{label:"",value:"picture"},{label:"",value:"battery"},{label:"",value:"slot"},{label:"",value:"water"},{label:"",value:"textarea"},{label:"",value:"toggle"},{label:"",value:"input"},{label:"",value:"close"},{label:"",value:"calendar"},{label:"",value:"check"},{label:"",value:"dashed_line"},{label:"",value:"solid_line"},{label:"",value:"setting"},{label:"",value:"logout"},{label:"",value:"bar_chart"},{label:"",value:"line_chart"},{label:"",value:"history"},{label:"",value:"icon"},{label:"",value:"lamp"},{label:"",value:"table"},{label:"",value:"switch"},{label:"",value:"slider"},{label:"",value:"tools"},{label:"",value:"pen"},{label:"",value:"tab"}]}ngOnInit(){this.modalTitle="add"===this.mode?"\u9875\u9762\u521B\u5EFA":"\u9875\u9762\u4FEE\u6539"}confirm(){if(this.form.valid){this.modalPending=!0;const t={...this.form.value};"add"===this.mode&&delete t.id,this.http.post("add"===this.mode?"addPage":"editPage",t).subscribe({next:n=>{this.modalPending=!1,this.modalConfirm.emit(n)},error:n=>{this.modalPending=!1;const l=this.form.get(n.name);l&&(l.setErrors({text:n.message}),l.markAsTouched())}})}else this.form.markAllAsTouched()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.eN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-modal-page-edit"]],inputs:{mode:"mode"},outputs:{modalConfirm:"modalConfirm",modalClose:"modalClose",animationDone:"animationDone"},decls:49,vars:23,consts:function(){let i,t,n,l,a,u,E,M,A;return i="\u7CFB\u7EDF\u5237\u65B0\u540E\u624D\u80FD\u770B\u5230\u83DC\u5355\u680F\u7684\u66F4\u65B0 ",t="\u6807\u9898",n="\u83DC\u5355\u56FE\u6807",l="\u8DEF\u5F84",a="\u83DC\u5355\u7C7B\u578B",u="\u529F\u80FD",E="\u76EE\u5F55",M="\u4E0A\u7EA7\u83DC\u5355",A="\u63CF\u8FF0",[[3,"modalTitle","modalPending","modalFooter","formGroup","confirm","cancel","animationDone"],["role","alert",1,"alert","alert-primary"],[1,"gt-icon"],i,[1,"mb-3"],[1,"form-label"],t,["id","title","type","text","formControlName","title",1,"form-control"],["class","invalid-feedback",4,"ngIf"],[1,"row"],[1,"col-md-6","mb-3"],n,[1,"input-group"],["formControlName","icon",1,"form-select"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"input-group-text"],l,["type","text","formControlName","url",1,"form-control"],a,["formControlName","type",1,"form-select"],["value","Function"],u,["value","Directory"],E,M,["formControlName","parentId",1,"form-select"],A,["rows","5","formControlName","description",1,"form-control"],[1,"invalid-feedback"]]},template:function(t,n){1&t&&(e.TgZ(0,"gt-modal",0),e.NdJ("confirm",function(){return n.confirm()})("cancel",function(){return n.modalClose.emit()})("animationDone",function(){return n.animationDone.emit()}),e.TgZ(1,"div",1)(2,"i",2),e._uU(3,"bell"),e.qZA(),e.ynx(4),e.SDv(5,3),e.BQk(),e.qZA(),e.TgZ(6,"div",4)(7,"label",5),e.SDv(8,6),e.qZA(),e._UZ(9,"input",7),e.YNc(10,oe,2,0,"div",8),e.qZA(),e.TgZ(11,"div",9)(12,"div",10)(13,"label",5),e.SDv(14,11),e.qZA(),e.TgZ(15,"div",12)(16,"select",13),e._UZ(17,"option",14),e.YNc(18,ie,2,2,"option",15),e.qZA(),e.TgZ(19,"span",16)(20,"i",2),e._uU(21),e.qZA()()()(),e.TgZ(22,"div",10)(23,"label",5),e.SDv(24,17),e.qZA(),e._UZ(25,"input",18),e.YNc(26,le,3,3,"div",8),e.qZA()(),e.TgZ(27,"div",9)(28,"div",10)(29,"label",5),e.SDv(30,19),e.qZA(),e.TgZ(31,"select",20)(32,"option",21),e.SDv(33,22),e.qZA(),e.TgZ(34,"option",23),e.SDv(35,24),e.qZA()()(),e.TgZ(36,"div",10)(37,"label",5),e.SDv(38,25),e.qZA(),e.TgZ(39,"select",26),e._UZ(40,"option",14),e.YNc(41,ae,2,2,"option",15),e.ALo(42,"async"),e.qZA(),e.YNc(43,se,3,3,"div",8),e.qZA()(),e.TgZ(44,"div",4)(45,"label",5),e.SDv(46,27),e.qZA(),e._UZ(47,"textarea",28),e.YNc(48,_e,2,0,"div",8),e.qZA()()),2&t&&(e.Q6J("modalTitle",n.modalTitle)("modalPending",n.modalPending)("modalFooter",!0)("formGroup",n.form),e.xp6(9),e.ekj("is-invalid",n.pageTitle.touched&&n.pageTitle.invalid),e.xp6(1),e.Q6J("ngIf",n.pageTitle.touched),e.xp6(7),e.Q6J("ngValue",null),e.xp6(1),e.Q6J("ngForOf",n.gtIcons),e.xp6(3),e.Oqu(n.pageIcon.value),e.xp6(4),e.ekj("is-invalid",n.pageUrl.touched&&n.pageUrl.invalid),e.xp6(1),e.Q6J("ngIf",n.pageUrl.touched),e.xp6(13),e.ekj("is-invalid",n.pageParentID.touched&&n.pageParentID.invalid),e.xp6(1),e.Q6J("ngValue",null),e.xp6(1),e.Q6J("ngForOf",e.lcZ(42,21,n.parentList)),e.xp6(2),e.Q6J("ngIf",n.pageParentID.touched),e.xp6(4),e.ekj("is-invalid",n.pageDescription.touched&&n.pageDescription.invalid),e.xp6(1),e.Q6J("ngIf",n.pageDescription.touched))},dependencies:[r.sg,r.O5,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,I.O,r.Ov,r.Ts],encapsulation:2}),o})();var P=_(5425),L=_(8184),C=_(1206);function re(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(t);const l=e.oxw().$implicit,a=e.oxw();return e.KtG(a.activatePage(l.id))}),e.SDv(1,26),e.qZA()}}function ue(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr",17)(1,"td")(2,"i",18),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td",19)(15,"button",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.editPage(a))}),e.SDv(16,21),e.qZA(),e.TgZ(17,"button",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.deletePage(a.id))}),e.SDv(18,22),e.qZA(),e.YNc(19,re,2,0,"button",23),e.qZA(),e.TgZ(20,"td",24)(21,"i",18),e._uU(22,"list"),e.qZA()()()}if(2&o){const t=i.$implicit;e.xp6(3),e.Oqu(t.icon),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Oqu(t.description),e.xp6(2),e.Oqu(t.type),e.xp6(2),e.Oqu(t.url),e.xp6(2),e.Oqu(t.parentId),e.xp6(6),e.Q6J("ngIf","Function"===t.type)}}let ce=(()=>{class o{constructor(t,n,l){this.http=t,this.overlay=n,this.router=l,this.modalClose=new e.vpe,this.animationDone=new e.vpe,this.mode="view"}ngOnInit(){this.loadPageList()}loadPageList(){this.http.get("getPageList").subscribe(t=>this.pageList=t)}addPage(){const t=this.overlay.create({hasBackdrop:!0,disposeOnNavigation:!0}),n=t.attach(new h.C5($));(0,O.T)(n.instance.modalConfirm.pipe((0,N.b)(()=>this.loadPageList())),n.instance.modalClose).subscribe(()=>t.dispose())}editPage(t){const n=this.overlay.create({hasBackdrop:!0,disposeOnNavigation:!0}),a=n.attach(new h.C5($)).instance;a.mode="modify",a.pageID.setValue(t.id),a.pageTitle.setValue(t.title),a.pageIcon.setValue(t.icon),a.pageDescription.setValue(t.description),a.pageUrl.setValue(t.url),a.pageType.setValue(t.type),a.pageType.disable({emitEvent:!0}),a.pageParentID.setValue(t.parentId),(0,O.T)(a.modalConfirm.pipe((0,N.b)(()=>this.loadPageList())),a.modalClose).subscribe(()=>n.dispose())}deletePage(t){var n=this;return(0,U.Z)(function*(){(yield(0,P.i)(m.d2))&&n.http.post("deletePage",{id:t}).subscribe(()=>n.loadPageList())})()}activatePage(t){this.router.navigate(["edit",t]).catch(),this.modal.onCancel()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.eN),e.Y36(L.aV),e.Y36(p.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-modal-pages"]],viewQuery:function(t,n){if(1&t&&e.Gf(b.O,7),2&t){let l;e.iGM(l=e.CRH())&&(n.modal=l.first)}},outputs:{modalClose:"modalClose",animationDone:"animationDone"},decls:25,vars:1,consts:function(){let i,t,n,l,a,u,E,M,A,d,v,S;return i="\u9875\u9762\u5217\u8868",t="\u56FE\u6807",n="\u6807\u9898",l="\u63CF\u8FF0",a="\u7C7B\u578B",u="\u8DEF\u5F84",E="\u4E0A\u7EA7\u83DC\u5355",M="\u64CD\u4F5C",A="\u6DFB\u52A0",d="\u4FEE\u6539",v=" \u5220\u9664 ",S=" \u7F16\u8F91 ",[["modalTitle",i,"modalSize","xl",3,"cancel","animationDone"],[1,"overflow-auto"],[1,"table","table-bordered","table-hover","table-striped"],[1,"position-sticky","bg-body",2,"top","-1rem"],[1,"text-truncate"],t,n,l,a,u,E,M,["cdkDropList",""],["cdkDrag","","cdkDragLockAxis","y",4,"ngFor","ngForOf"],[1,"d-grid","gap-2"],[1,"btn","btn-light",3,"click"],A,["cdkDrag","","cdkDragLockAxis","y"],[1,"gt-icon"],[1,"text-nowrap"],[1,"btn","btn-light","btn-sm","me-2",3,"click"],d,v,["class","btn btn-light btn-sm",3,"click",4,"ngIf"],["cdkDragHandle",""],[1,"btn","btn-light","btn-sm",3,"click"],S]},template:function(t,n){1&t&&(e.TgZ(0,"gt-modal",0),e.NdJ("cancel",function(){return n.modalClose.emit()})("animationDone",function(){return n.animationDone.emit()}),e.TgZ(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),e.SDv(6,5),e.qZA(),e.TgZ(7,"th",4),e.SDv(8,6),e.qZA(),e.TgZ(9,"th",4),e.SDv(10,7),e.qZA(),e.TgZ(11,"th",4),e.SDv(12,8),e.qZA(),e.TgZ(13,"th",4),e.SDv(14,9),e.qZA(),e.TgZ(15,"th",4),e.SDv(16,10),e.qZA(),e.TgZ(17,"th",4),e.SDv(18,11),e.qZA(),e._UZ(19,"th"),e.qZA()(),e.TgZ(20,"tbody",12),e.YNc(21,ue,23,7,"tr",13),e.qZA()()(),e.TgZ(22,"div",14)(23,"button",15),e.NdJ("click",function(){return n.addPage()}),e.SDv(24,16),e.qZA()()()),2&t&&(e.xp6(21),e.Q6J("ngForOf",n.pageList))},dependencies:[r.sg,r.O5,I.O,C.Wj,C.Zt,C.Bh],encapsulation:2}),o})(),de=(()=>{class o{constructor(){this.modalConfirm=new e.vpe,this.modalCancel=new e.vpe,this.animationDone=new e.vpe;const t=localStorage.getItem("fontSize"),n=localStorage.getItem("theme"),l=localStorage.getItem("direction");this.formGroup=new s.cw({fontSize:new s.NI(t&&!isNaN(+t)?+t:16),direction:new s.NI(l||"ltr"),theme:new s.NI(n||"auto")})}ngOnInit(){this.formGroup.get("fontSize").valueChanges.subscribe(t=>{document.documentElement.style.setProperty("font-size",t+"px"),localStorage.setItem("fontSize",t)}),this.formGroup.get("theme").valueChanges.subscribe(t=>{if("auto"===t){const n=matchMedia("(prefers-color-scheme: dark)");document.documentElement.dataset.bsTheme=n.matches?"dark":"light"}else document.documentElement.dataset.bsTheme=t;localStorage.setItem("theme",t)}),this.formGroup.get("direction").valueChanges.subscribe(t=>{const n=document.head.querySelector("link#bootstrap");"rtl"===t?(document.documentElement.dir="rtl",n.href=n.href.replace("bootstrap.min.css","bootstrap.rtl.min.css")):(document.documentElement.dir="ltr",n.href=n.href.replace("bootstrap.rtl.min.css","bootstrap.min.css")),localStorage.setItem("direction",t)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-modal-settings"]],outputs:{modalConfirm:"modalConfirm",modalCancel:"modalCancel",animationDone:"animationDone"},decls:34,vars:1,consts:function(){let i,t,n,l;return i="\u8BBE\u7F6E",t="\u5B57\u4F53\u5927\u5C0F",n="\u65B9\u5411",l="\u4E3B\u9898",[["modalTitle",i,3,"confirm","cancel","animationDone"],[1,"row","g-3",3,"formGroup"],[1,"col-md-6"],[1,"form-label"],t,["type","range","min","12","max","20","step","1","formControlName","fontSize",1,"form-range"],n,[1,"form-check","form-check-inline"],["id","gt-settings-direction-ltr","type","radio","value","ltr","formControlName","direction",1,"form-check-input"],["for","gt-settings-direction-ltr",1,"form-check-label"],["id","gt-settings-direction-rtl","type","radio","value","rtl","formControlName","direction",1,"form-check-input"],["for","gt-settings-direction-rtl",1,"form-check-label"],[1,"col"],l,["id","gt-settings-theme-light","type","radio","value","light","formControlName","theme",1,"form-check-input"],["for","gt-settings-theme-light",1,"form-check-label"],["id","gt-settings-theme-dark","type","radio","value","dark","formControlName","theme",1,"form-check-input"],["for","gt-settings-theme-dark",1,"form-check-label"],["id","gt-settings-theme-auto","type","radio","value","auto","formControlName","theme",1,"form-check-input"],["for","gt-settings-theme-auto",1,"form-check-label"]]},template:function(t,n){1&t&&(e.TgZ(0,"gt-modal",0),e.NdJ("confirm",function(){return n.modalConfirm.emit()})("cancel",function(){return n.modalCancel.emit()})("animationDone",function(){return n.animationDone.emit()}),e.TgZ(1,"form",1)(2,"div",2)(3,"label",3),e.SDv(4,4),e.qZA(),e._UZ(5,"input",5),e.qZA(),e.TgZ(6,"div",2)(7,"label",3),e.SDv(8,6),e.qZA(),e.TgZ(9,"div")(10,"div",7),e._UZ(11,"input",8),e.TgZ(12,"label",9),e._uU(13,"ltr"),e.qZA()(),e.TgZ(14,"div",7),e._UZ(15,"input",10),e.TgZ(16,"label",11),e._uU(17,"rtl"),e.qZA()()()(),e.TgZ(18,"div",12)(19,"label",3),e.SDv(20,13),e.qZA(),e.TgZ(21,"div")(22,"div",7),e._UZ(23,"input",14),e.TgZ(24,"label",15),e._uU(25,"Light"),e.qZA()(),e.TgZ(26,"div",7),e._UZ(27,"input",16),e.TgZ(28,"label",17),e._uU(29,"Dark"),e.qZA()(),e.TgZ(30,"div",7),e._UZ(31,"input",18),e.TgZ(32,"label",19),e._uU(33,"Auto"),e.qZA()()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.formGroup))},dependencies:[I.O,s._Y,s.Fj,s.eT,s._,s.JJ,s.JL,s.sg,s.u],encapsulation:2}),o})();var ge=_(3498),pe=_(727),Ee=_(9300);const me=["*"];let w=(()=>{class o{constructor(t,n,l){this._document=t,this.renderer=n,this.router=l,this._show=!1,this.hiding=!1,this.showChange=new e.vpe,this.subscription=pe.w0.EMPTY}get show(){return this._show}set show(t){if(this._show===t)return;this._show=t;const n=this._document.body;if(t){this.hiding=!1;const l=window.innerWidth-this._document.documentElement.scrollWidth;this.renderer.setStyle(n,"overflow","hidden"),this.renderer.setStyle(n,"paddingRight",l+"px")}else this.hiding=!0,setTimeout(()=>{this.hiding=!1,this.renderer.removeStyle(n,"overflow"),this.renderer.removeStyle(n,"paddingRight")},300)}ngOnInit(){this.subscription=this.router.events.pipe((0,Ee.h)(t=>t instanceof p.m2)).subscribe(()=>{this.show&&(this.show=!1,this.showChange.emit(this.show))})}ngOnDestroy(){this.subscription.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.K0),e.Y36(e.Qsj),e.Y36(p.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-offcanvas"]],inputs:{show:"show",position:"position",theme:"theme",offCanvasTitle:"offCanvasTitle"},outputs:{showChange:"showChange"},ngContentSelectors:me,decls:11,vars:15,consts:[[1,"offcanvas-lg"],[1,"offcanvas-header","pb-0"],["src","assets/icons/192.png","alt","Ghosten Logo",1,"rounded",2,"width","2rem"],[1,"offcanvas-title"],["type","button",1,"btn","btn-close",3,"click"],[1,"offcanvas-body","pt-0"],[1,"d-lg-none","text-body-50"],[1,"me-auto"],[1,"offcanvas-backdrop","fade","show",3,"click"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"h5",3),e._uU(4),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return n.show=!1,n.showChange.emit(n.show)}),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"hr",6)(8,"div",7),e.Hsn(9),e.qZA()(),e.TgZ(10,"div",8),e.NdJ("click",function(){return n.show=!1,n.showChange.emit(n.show)}),e.qZA()),2&t&&(e.ekj("show",n.show)("hiding",n.hiding)("offcanvas-start","start"===n.position)("offcanvas-end","end"===n.position)("bg-primary","primary"===n.theme),e.xp6(4),e.hij(" ",n.offCanvasTitle," "),e.xp6(6),e.ekj("show",n.show)("d-none",!n.show&&!n.hiding))},styles:["@media (max-width: 991.98px){[_nghost-%COMP%]{position:fixed;z-index:1045}}"]}),o})(),Me=(()=>{class o{constructor(t,n,l,a,u,E){this.http=t,this.toast=n,this.overlay=l,this.router=a,this.location=u,this.renderer=E,this.showSideMenu=!1,this.showLeftSidebar=new e.vpe,this.showRightSidebar=!1}reset(){var t=this;return(0,U.Z)(function*(){(yield(0,P.i)(m.c7))&&t.http.post("deleteDB",null).subscribe(()=>{t.toast.show({type:"primary",title:m.Ij,message:m.F,detail:m.r4}),setTimeout(()=>t.reload(),5e3)})})()}import(t){t.files&&t.files[0]&&this.http.post("importDB",t.files[0]).subscribe(()=>{this.toast.show({type:"primary",title:m.Ij,message:m.FH,detail:m.r4}),setTimeout(()=>this.reload(),5e3)})}export(){this.http.get("exportDB").subscribe(t=>{const n=this.renderer.createElement("a");n.download=t.name,n.href=URL.createObjectURL(t),n.click()})}pageList(){const t=this.overlay.create({hasBackdrop:!0,disposeOnNavigation:!0}),n=t.attach(new h.C5(ce));n.instance.modalClose.pipe((0,N.b)(()=>t.detachBackdrop()),(0,Z.w)(()=>n.instance.animationDone),(0,G.q)(1)).subscribe(()=>t.dispose())}addPage(){const t=this.overlay.create({hasBackdrop:!0,disposeOnNavigation:!0}),n=t.attach(new h.C5($));(0,O.T)(n.instance.modalConfirm.pipe((0,N.b)(l=>{"Function"===l.type&&this.router.navigate(["edit",l.id]).catch()})),n.instance.modalClose).pipe((0,N.b)(()=>t.detachBackdrop()),(0,Z.w)(()=>n.instance.animationDone),(0,G.q)(1)).subscribe(()=>t.dispose())}reload(){location.reload()}settings(){const t=this.overlay.create({hasBackdrop:!0,disposeOnNavigation:!0}),n=t.attach(new h.C5(de));(0,O.T)(n.instance.modalConfirm,n.instance.modalCancel).pipe((0,N.b)(()=>t.detachBackdrop()),(0,Z.w)(()=>n.instance.animationDone),(0,G.q)(1)).subscribe(()=>t.dispose())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.eN),e.Y36(ge.k),e.Y36(L.aV),e.Y36(p.F0),e.Y36(r.Ye),e.Y36(e.Qsj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-navbar"]],inputs:{showSideMenu:"showSideMenu"},outputs:{showLeftSidebar:"showLeftSidebar"},features:[e._Bn([r.Ye,{provide:r.S$,useClass:r.b0}])],decls:77,vars:1,consts:function(){let i,t,n,l,a,u,E,M,A,d,v,S,g,k,B,F,X,q;return i="\u540E\u9000",t="\u540E\u9000",n="\u524D\u8FDB",l="\u524D\u8FDB",a="\u5237\u65B0",u="\u5237\u65B0",E="\u521B\u5EFA\u9875\u9762",M="\u521B\u5EFA\u9875\u9762",A="\u9875\u9762\u5217\u8868",d="\u9875\u9762\u5217\u8868",v="\u5BFC\u5165",S="\u5BFC\u5165",g="\u5BFC\u51FA",k="\u5BFC\u51FA",B="\u91CD\u7F6E",F="\u91CD\u7F6E",X="\u8BBE\u7F6E",q="\u8BBE\u7F6E",[["data-bs-theme","dark",1,"navbar","navbar-expand-lg","bg-primary",2,"position","sticky","top","0","z-index","1000","--bs-emphasis-color-rgb","248,249,250"],[1,"container"],["type","button","data-bs-toggle","collapse","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"gt-icon"],["routerLink","/",1,"navbar-brand","me-0","d-flex","align-items-center"],["src","assets/icons/192.png","alt","Ghosten Logo","width","32","height","32",1,"rounded",2,"width","2rem","height","2rem"],[1,"fw-bold","mx-1"],["offCanvasTitle","GHOSTEN","position","end","theme","primary",3,"show","showChange"],[1,"navbar-nav","flex-row","flex-wrap"],[1,"nav-item","col-6","col-lg-auto"],["type","button","title",i,1,"btn","btn-link","nav-link",3,"click"],[1,"d-lg-none","ms-2"],t,["type","button","title",n,1,"btn","btn-link","nav-link",3,"click"],l,["type","button","title",a,1,"btn","btn-link","nav-link",3,"click"],u,[1,"nav-item","py-2","col-12","col-lg-auto"],[1,"vr","d-none","d-lg-flex","h-100","mx-lg-2","text-white"],[1,"d-lg-none","text-white-50"],["type","button","title",E,1,"btn","btn-link","nav-link",3,"click"],M,["type","button","title",A,1,"btn","btn-link","nav-link",3,"click"],d,["type","button","title",v,1,"btn","btn-link","nav-link","position-relative","overflow-hidden"],["type","file","accept",".gt",1,"position-absolute","w-100","h-100","opacity-0",2,"left","0","top","0",3,"change"],["file",""],S,["type","button","title",g,1,"btn","btn-link","nav-link",3,"click"],k,["type","button","title",B,1,"btn","btn-link","nav-link",3,"click"],F,["type","button","title",X,1,"btn","btn-link","nav-link",3,"click"],q]},template:function(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.showLeftSidebar.emit()}),e.TgZ(3,"i",3),e._uU(4,"list"),e.qZA()(),e.TgZ(5,"a",4),e._UZ(6,"img",5),e.TgZ(7,"span",6),e._uU(8,"GHOSTEN"),e.qZA()(),e.TgZ(9,"app-offcanvas",7),e.NdJ("showChange",function(u){return n.showRightSidebar=u}),e.TgZ(10,"ul",8)(11,"li",9)(12,"button",10),e.NdJ("click",function(){return n.location.back()}),e.TgZ(13,"i",3),e._uU(14,"chevron_left"),e.qZA(),e.TgZ(15,"small",11),e.SDv(16,12),e.qZA()()(),e.TgZ(17,"li",9)(18,"button",13),e.NdJ("click",function(){return n.location.forward()}),e.TgZ(19,"i",3),e._uU(20,"chevron_right"),e.qZA(),e.TgZ(21,"small",11),e.SDv(22,14),e.qZA()()(),e.TgZ(23,"li",9)(24,"button",15),e.NdJ("click",function(){return n.reload()}),e.TgZ(25,"i",3),e._uU(26,"refresh_ccw"),e.qZA(),e.TgZ(27,"small",11),e.SDv(28,16),e.qZA()()(),e.TgZ(29,"li",17),e._UZ(30,"div",18)(31,"hr",19),e.qZA(),e.TgZ(32,"li",9)(33,"button",20),e.NdJ("click",function(){return n.addPage()}),e.TgZ(34,"i",3),e._uU(35,"add"),e.qZA(),e.TgZ(36,"small",11),e.SDv(37,21),e.qZA()()(),e.TgZ(38,"li",9)(39,"button",22),e.NdJ("click",function(){return n.pageList()}),e.TgZ(40,"i",3),e._uU(41,"list"),e.qZA(),e.TgZ(42,"small",11),e.SDv(43,23),e.qZA()()(),e.TgZ(44,"li",9)(45,"button",24)(46,"label")(47,"input",25,26),e.NdJ("change",function(){e.CHM(l);const u=e.MAs(48);return e.KtG(n.import(u))}),e.qZA()(),e.TgZ(49,"i",3),e._uU(50,"upload"),e.qZA(),e.TgZ(51,"small",11),e.SDv(52,27),e.qZA()()(),e.TgZ(53,"li",9)(54,"button",28),e.NdJ("click",function(){return n.export()}),e.TgZ(55,"i",3),e._uU(56,"download"),e.qZA(),e.TgZ(57,"small",11),e.SDv(58,29),e.qZA()()(),e.TgZ(59,"li",9)(60,"button",30),e.NdJ("click",function(){return n.reset()}),e.TgZ(61,"i",3),e._uU(62,"refresh_ccw"),e.qZA(),e.TgZ(63,"small",11),e.SDv(64,31),e.qZA()()(),e.TgZ(65,"li",17),e._UZ(66,"div",18)(67,"hr",19),e.qZA(),e.TgZ(68,"li",9)(69,"button",32),e.NdJ("click",function(){return n.settings()}),e.TgZ(70,"i",3),e._uU(71,"tools"),e.qZA(),e.TgZ(72,"small",11),e.SDv(73,33),e.qZA()()()()(),e.TgZ(74,"button",2),e.NdJ("click",function(){return n.showRightSidebar=!0}),e.TgZ(75,"i",3),e._uU(76,"dotted_line"),e.qZA()()()()}2&t&&(e.xp6(9),e.Q6J("show",n.showRightSidebar))},dependencies:[p.yS,w],encapsulation:2}),o})(),Ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-footer"]],decls:30,vars:0,consts:[[1,"mt-5","py-4","oblique-stripes","border-top"],[1,"container","py-4","px-4"],[1,"row"],[1,"col-lg-6","col-md-auto","mb-3","d-flex"],["href","/",1,"navbar-brand","d-flex","flex-column","align-items-center"],["src","assets/icons/192.png","alt","Ghosten Logo","width","80","height","80",1,"rounded",2,"width","5rem","height","5rem"],[1,"fw-bold","my-2"],[1,"ms-3"],[1,"col-6","col-lg-3","mb-3"],[1,"list-unstyled"],[1,"mb-2"],["href","/ghosten/zh/"],["href","/ghosten/en-US/"],["target","_blank","href","https://github.com/GhostenEditor/ghosten"]],template:function(t,n){1&t&&(e.TgZ(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),e._UZ(5,"img",5),e.TgZ(6,"span",6),e._uU(7,"GHOSTEN"),e.qZA()(),e.TgZ(8,"div",7),e._uU(9," A Low-Code Web Editor. If you like it, give me a star please! Code licensed MIT, Currently v0.1.0-alpha9. "),e.qZA()(),e.TgZ(10,"div",8)(11,"h5"),e._uU(12,"LANGUAGES"),e.qZA(),e.TgZ(13,"ul",9)(14,"li",10)(15,"a",11),e._uU(16,"\u7b80\u4f53\u4e2d\u6587\u7248"),e.qZA()(),e.TgZ(17,"li",10)(18,"a",12),e._uU(19,"English Version"),e.qZA()(),e.TgZ(20,"li",10)(21,"span"),e._uU(22,"\u65e5\u672c\u8a9e\u7248 (todo)"),e.qZA()()()(),e.TgZ(23,"div",8)(24,"h5"),e._uU(25,"LINKS"),e.qZA(),e.TgZ(26,"ul",9)(27,"li",10)(28,"a",13),e._uU(29,"GITHUB"),e.qZA()()()()()()())},encapsulation:2}),o})(),Te=(()=>{class o{constructor(){this.showSideMenu=!1}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-main"]],decls:8,vars:2,consts:[[3,"showLeftSidebar"],[1,"container","pt-4"],[1,"row"],["position","start","offCanvasTitle","Navigation",1,"col-2",3,"show","showChange"],[1,"w-100",3,"showSideMenu"],[1,"col-lg-10","px-4","min-vh-100"]],template:function(t,n){1&t&&(e.TgZ(0,"app-navbar",0),e.NdJ("showLeftSidebar",function(){return n.showSideMenu=!0}),e.qZA(),e.TgZ(1,"div",1)(2,"div",2)(3,"app-offcanvas",3),e.NdJ("showChange",function(a){return n.showSideMenu=a}),e._UZ(4,"app-navigation",4),e.qZA(),e.TgZ(5,"div",5),e._UZ(6,"router-outlet"),e.qZA()()(),e._UZ(7,"app-footer")),2&t&&(e.xp6(3),e.Q6J("show",n.showSideMenu),e.xp6(1),e.Q6J("showSideMenu",n.showSideMenu))},dependencies:[p.lC,ne,Me,Ae,w],encapsulation:2}),o})();var Ne=_(9371);let fe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,p.Bz,L.U8,D.XD]}),o})(),he=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,s.u5,s.UX,b.l,C._t]}),o})();var Pe=_(7032);let ve=(()=>{class o{constructor(t,n){this.route=t,this.isBrowser=(0,r.NF)(n)}log({type:t,message:n,data:l}){if(this.isBrowser)switch(t){case"info":(0,P.c)("info","[GHOSTEN  INFO]",n,l);break;case"error":(0,P.c)("error","[GHOSTEN ERROR]",n,l);break;case"warning":(0,P.c)("warn","[GHOSTEN WARNING]",n,l)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.gz),e.Y36(e.Lbi))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-template"]],decls:1,vars:1,consts:[[3,"data","log"]],template:function(t,n){1&t&&(e.TgZ(0,"gt-renderer",0),e.NdJ("log",function(a){return n.log(a)}),e.qZA()),2&t&&e.Q6J("data",n.route.snapshot.data.data)},dependencies:[Pe.O],encapsulation:2}),o})(),R=(()=>{class o{constructor(t){this.http=t}resolve(t){return this.http.get("getLatestConfigByID",{params:{id:t.data.id}})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),Se=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[{provide:p.Z6,multi:!0,useFactory:i=>[{path:"",component:Te,children:[{path:"",component:Y},{path:"404",component:J},...i.generateRoutes(ve,R)]}],deps:[Ne.J]},R],imports:[r.ez,p.Bz,fe,z.Bp,x.h3,he,b.l,s.UX]}),o})()}}]);