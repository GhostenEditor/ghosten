var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"zh"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val;return 5}global.ng.common.locales["zh"]=["zh",[["\u4E0A\u5348","\u4E0B\u5348"],u,u],u,[["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"]],u,[["1","2","3","4","5","6","7","8","9","10","11","12"],["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"]],u,[["\u516C\u5143\u524D","\u516C\u5143"],u,u],0,[6,0],["y/M/d","y\u5E74M\u6708d\u65E5",u,"y\u5E74M\u6708d\u65E5EEEE"],["HH:mm","HH:mm:ss","z HH:mm:ss","zzzz HH:mm:ss"],["{1} {0}",u,u,u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"CNY","\xA5","\u4EBA\u6C11\u5E01",{"AUD":["AU$","$"],"BYN":[u,"\u0440."],"CNY":["\xA5"],"ILR":["ILS"],"JPY":["JP\xA5","\xA5"],"KRW":["\uFFE6","\u20A9"],"PHP":[u,"\u20B1"],"RUR":[u,"\u0440."],"TWD":["NT$"],"USD":["US$","$"],"XXX":[]},"ltr",plural,[[["\u5348\u591C","\u65E9\u4E0A","\u4E0A\u5348","\u4E2D\u5348","\u4E0B\u5348","\u665A\u4E0A","\u51CC\u6668"],u,["\u5348\u591C","\u6E05\u6668","\u4E0A\u5348","\u4E2D\u5348","\u4E0B\u5348","\u665A\u4E0A","\u51CC\u6668"]],[["\u5348\u591C","\u65E9\u4E0A","\u4E0A\u5348","\u4E2D\u5348","\u4E0B\u5348","\u665A\u4E0A","\u51CC\u6668"],u,u],["00:00",["05:00","08:00"],["08:00","12:00"],["12:00","13:00"],["13:00","19:00"],["19:00","24:00"],["00:00","05:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[736],{1135:(ze,fe,C)=>{"use strict";C.d(fe,{X:()=>A});var v=C(7579);class A extends v.x{constructor(W){super(),this._value=W}get value(){return this.getValue()}_subscribe(W){const Z=super._subscribe(W);return!Z.closed&&W.next(this._value),Z}getValue(){const{hasError:W,thrownError:Z,_value:Q}=this;if(W)throw Z;return this._throwIfClosed(),Q}next(W){super.next(this._value=W)}}},9751:(ze,fe,C)=>{"use strict";C.d(fe,{y:()=>te});var v=C(930),A=C(727),O=C(8822),W=C(9635),Z=C(2416),Q=C(576),oe=C(2806);let te=(()=>{class ie{constructor(Ce){Ce&&(this._subscribe=Ce)}lift(Ce){const ce=new ie;return ce.source=this,ce.operator=Ce,ce}subscribe(Ce,ce,Oe){const pe=function q(ie){return ie&&ie instanceof v.Lv||function ee(ie){return ie&&(0,Q.m)(ie.next)&&(0,Q.m)(ie.error)&&(0,Q.m)(ie.complete)}(ie)&&(0,A.Nn)(ie)}(Ce)?Ce:new v.Hp(Ce,ce,Oe);return(0,oe.x)(()=>{const{operator:Te,source:it}=this;pe.add(Te?Te.call(pe,it):it?this._subscribe(pe):this._trySubscribe(pe))}),pe}_trySubscribe(Ce){try{return this._subscribe(Ce)}catch(ce){Ce.error(ce)}}forEach(Ce,ce){return new(ce=G(ce))((Oe,pe)=>{const Te=new v.Hp({next:it=>{try{Ce(it)}catch(vt){pe(vt),Te.unsubscribe()}},error:pe,complete:Oe});this.subscribe(Te)})}_subscribe(Ce){var ce;return null===(ce=this.source)||void 0===ce?void 0:ce.subscribe(Ce)}[O.L](){return this}pipe(...Ce){return(0,W.U)(Ce)(this)}toPromise(Ce){return new(Ce=G(Ce))((ce,Oe)=>{let pe;this.subscribe(Te=>pe=Te,Te=>Oe(Te),()=>ce(pe))})}}return ie.create=Pe=>new ie(Pe),ie})();function G(ie){var Pe;return null!==(Pe=ie??Z.v.Promise)&&void 0!==Pe?Pe:Promise}},7579:(ze,fe,C)=>{"use strict";C.d(fe,{x:()=>oe});var v=C(9751),A=C(727);const W=(0,C(3888).d)(G=>function(){G(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Z=C(8737),Q=C(2806);let oe=(()=>{class G extends v.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(q){const ie=new te(this,this);return ie.operator=q,ie}_throwIfClosed(){if(this.closed)throw new W}next(q){(0,Q.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const ie of this.currentObservers)ie.next(q)}})}error(q){(0,Q.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=q;const{observers:ie}=this;for(;ie.length;)ie.shift().error(q)}})}complete(){(0,Q.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:q}=this;for(;q.length;)q.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var q;return(null===(q=this.observers)||void 0===q?void 0:q.length)>0}_trySubscribe(q){return this._throwIfClosed(),super._trySubscribe(q)}_subscribe(q){return this._throwIfClosed(),this._checkFinalizedStatuses(q),this._innerSubscribe(q)}_innerSubscribe(q){const{hasError:ie,isStopped:Pe,observers:Ce}=this;return ie||Pe?A.Lc:(this.currentObservers=null,Ce.push(q),new A.w0(()=>{this.currentObservers=null,(0,Z.P)(Ce,q)}))}_checkFinalizedStatuses(q){const{hasError:ie,thrownError:Pe,isStopped:Ce}=this;ie?q.error(Pe):Ce&&q.complete()}asObservable(){const q=new v.y;return q.source=this,q}}return G.create=(ee,q)=>new te(ee,q),G})();class te extends oe{constructor(ee,q){super(),this.destination=ee,this.source=q}next(ee){var q,ie;null===(ie=null===(q=this.destination)||void 0===q?void 0:q.next)||void 0===ie||ie.call(q,ee)}error(ee){var q,ie;null===(ie=null===(q=this.destination)||void 0===q?void 0:q.error)||void 0===ie||ie.call(q,ee)}complete(){var ee,q;null===(q=null===(ee=this.destination)||void 0===ee?void 0:ee.complete)||void 0===q||q.call(ee)}_subscribe(ee){var q,ie;return null!==(ie=null===(q=this.source)||void 0===q?void 0:q.subscribe(ee))&&void 0!==ie?ie:A.Lc}}},930:(ze,fe,C)=>{"use strict";C.d(fe,{Hp:()=>Oe,Lv:()=>ie});var v=C(576),A=C(727),O=C(2416),W=C(7849),Z=C(5032);const Q=G("C",void 0,void 0);function G(we,j,me){return{kind:we,value:j,error:me}}var ee=C(3410),q=C(2806);class ie extends A.w0{constructor(j){super(),this.isStopped=!1,j?(this.destination=j,(0,A.Nn)(j)&&j.add(this)):this.destination=vt}static create(j,me,De){return new Oe(j,me,De)}next(j){this.isStopped?it(function te(we){return G("N",we,void 0)}(j),this):this._next(j)}error(j){this.isStopped?it(function oe(we){return G("E",void 0,we)}(j),this):(this.isStopped=!0,this._error(j))}complete(){this.isStopped?it(Q,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(j){this.destination.next(j)}_error(j){try{this.destination.error(j)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Pe=Function.prototype.bind;function Ce(we,j){return Pe.call(we,j)}class ce{constructor(j){this.partialObserver=j}next(j){const{partialObserver:me}=this;if(me.next)try{me.next(j)}catch(De){pe(De)}}error(j){const{partialObserver:me}=this;if(me.error)try{me.error(j)}catch(De){pe(De)}else pe(j)}complete(){const{partialObserver:j}=this;if(j.complete)try{j.complete()}catch(me){pe(me)}}}class Oe extends ie{constructor(j,me,De){let Ee;if(super(),(0,v.m)(j)||!j)Ee={next:j??void 0,error:me??void 0,complete:De??void 0};else{let Se;this&&O.v.useDeprecatedNextContext?(Se=Object.create(j),Se.unsubscribe=()=>this.unsubscribe(),Ee={next:j.next&&Ce(j.next,Se),error:j.error&&Ce(j.error,Se),complete:j.complete&&Ce(j.complete,Se)}):Ee=j}this.destination=new ce(Ee)}}function pe(we){O.v.useDeprecatedSynchronousErrorHandling?(0,q.O)(we):(0,W.h)(we)}function it(we,j){const{onStoppedNotification:me}=O.v;me&&ee.z.setTimeout(()=>me(we,j))}const vt={closed:!0,next:Z.Z,error:function Te(we){throw we},complete:Z.Z}},727:(ze,fe,C)=>{"use strict";C.d(fe,{Lc:()=>Q,w0:()=>Z,Nn:()=>oe});var v=C(576);const O=(0,C(3888).d)(G=>function(q){G(this),this.message=q?`${q.length} errors occurred during unsubscription:\n${q.map((ie,Pe)=>`${Pe+1}) ${ie.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=q});var W=C(8737);class Z{constructor(ee){this.initialTeardown=ee,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let ee;if(!this.closed){this.closed=!0;const{_parentage:q}=this;if(q)if(this._parentage=null,Array.isArray(q))for(const Ce of q)Ce.remove(this);else q.remove(this);const{initialTeardown:ie}=this;if((0,v.m)(ie))try{ie()}catch(Ce){ee=Ce instanceof O?Ce.errors:[Ce]}const{_finalizers:Pe}=this;if(Pe){this._finalizers=null;for(const Ce of Pe)try{te(Ce)}catch(ce){ee=ee??[],ce instanceof O?ee=[...ee,...ce.errors]:ee.push(ce)}}if(ee)throw new O(ee)}}add(ee){var q;if(ee&&ee!==this)if(this.closed)te(ee);else{if(ee instanceof Z){if(ee.closed||ee._hasParent(this))return;ee._addParent(this)}(this._finalizers=null!==(q=this._finalizers)&&void 0!==q?q:[]).push(ee)}}_hasParent(ee){const{_parentage:q}=this;return q===ee||Array.isArray(q)&&q.includes(ee)}_addParent(ee){const{_parentage:q}=this;this._parentage=Array.isArray(q)?(q.push(ee),q):q?[q,ee]:ee}_removeParent(ee){const{_parentage:q}=this;q===ee?this._parentage=null:Array.isArray(q)&&(0,W.P)(q,ee)}remove(ee){const{_finalizers:q}=this;q&&(0,W.P)(q,ee),ee instanceof Z&&ee._removeParent(this)}}Z.EMPTY=(()=>{const G=new Z;return G.closed=!0,G})();const Q=Z.EMPTY;function oe(G){return G instanceof Z||G&&"closed"in G&&(0,v.m)(G.remove)&&(0,v.m)(G.add)&&(0,v.m)(G.unsubscribe)}function te(G){(0,v.m)(G)?G():G.unsubscribe()}},2416:(ze,fe,C)=>{"use strict";C.d(fe,{v:()=>v});const v={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},4033:(ze,fe,C)=>{"use strict";C.d(fe,{c:()=>Q});var v=C(9751),A=C(727),O=C(8343),W=C(5403),Z=C(4482);class Q extends v.y{constructor(te,G){super(),this.source=te,this.subjectFactory=G,this._subject=null,this._refCount=0,this._connection=null,(0,Z.A)(te)&&(this.lift=te.lift)}_subscribe(te){return this.getSubject().subscribe(te)}getSubject(){const te=this._subject;return(!te||te.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:te}=this;this._subject=this._connection=null,te?.unsubscribe()}connect(){let te=this._connection;if(!te){te=this._connection=new A.w0;const G=this.getSubject();te.add(this.source.subscribe((0,W.x)(G,void 0,()=>{this._teardown(),G.complete()},ee=>{this._teardown(),G.error(ee)},()=>this._teardown()))),te.closed&&(this._connection=null,te=A.w0.EMPTY)}return te}refCount(){return(0,O.x)()(this)}}},9841:(ze,fe,C)=>{"use strict";C.d(fe,{a:()=>ee});var v=C(9751),A=C(4742),O=C(2076),W=C(4671),Z=C(3268),Q=C(3269),oe=C(1810),te=C(5403),G=C(9672);function ee(...Pe){const Ce=(0,Q.yG)(Pe),ce=(0,Q.jO)(Pe),{args:Oe,keys:pe}=(0,A.D)(Pe);if(0===Oe.length)return(0,O.D)([],Ce);const Te=new v.y(function q(Pe,Ce,ce=W.y){return Oe=>{ie(Ce,()=>{const{length:pe}=Pe,Te=new Array(pe);let it=pe,vt=pe;for(let we=0;we<pe;we++)ie(Ce,()=>{const j=(0,O.D)(Pe[we],Ce);let me=!1;j.subscribe((0,te.x)(Oe,De=>{Te[we]=De,me||(me=!0,vt--),vt||Oe.next(ce(Te.slice()))},()=>{--it||Oe.complete()}))},Oe)},Oe)}}(Oe,Ce,pe?it=>(0,oe.n)(pe,it):W.y));return ce?Te.pipe((0,Z.Z)(ce)):Te}function ie(Pe,Ce,ce){Pe?(0,G.f)(ce,Pe,Ce):Ce()}},7272:(ze,fe,C)=>{"use strict";C.d(fe,{z:()=>Z});var v=C(8189),O=C(3269),W=C(2076);function Z(...Q){return function A(){return(0,v.J)(1)}()((0,W.D)(Q,(0,O.yG)(Q)))}},9770:(ze,fe,C)=>{"use strict";C.d(fe,{P:()=>O});var v=C(9751),A=C(8421);function O(W){return new v.y(Z=>{(0,A.Xf)(W()).subscribe(Z)})}},515:(ze,fe,C)=>{"use strict";C.d(fe,{E:()=>A});const A=new(C(9751).y)(Z=>Z.complete())},2076:(ze,fe,C)=>{"use strict";C.d(fe,{D:()=>De});var v=C(8421),A=C(9672),O=C(4482),W=C(5403);function Z(Ee,Se=0){return(0,O.e)((Ie,ae)=>{Ie.subscribe((0,W.x)(ae,se=>(0,A.f)(ae,Ee,()=>ae.next(se),Se),()=>(0,A.f)(ae,Ee,()=>ae.complete(),Se),se=>(0,A.f)(ae,Ee,()=>ae.error(se),Se)))})}function Q(Ee,Se=0){return(0,O.e)((Ie,ae)=>{ae.add(Ee.schedule(()=>Ie.subscribe(ae),Se))})}var G=C(9751),q=C(2202),ie=C(576);function Ce(Ee,Se){if(!Ee)throw new Error("Iterable cannot be null");return new G.y(Ie=>{(0,A.f)(Ie,Se,()=>{const ae=Ee[Symbol.asyncIterator]();(0,A.f)(Ie,Se,()=>{ae.next().then(se=>{se.done?Ie.complete():Ie.next(se.value)})},0,!0)})})}var ce=C(3670),Oe=C(8239),pe=C(1144),Te=C(6495),it=C(2206),vt=C(4532),we=C(3260);function De(Ee,Se){return Se?function me(Ee,Se){if(null!=Ee){if((0,ce.c)(Ee))return function oe(Ee,Se){return(0,v.Xf)(Ee).pipe(Q(Se),Z(Se))}(Ee,Se);if((0,pe.z)(Ee))return function ee(Ee,Se){return new G.y(Ie=>{let ae=0;return Se.schedule(function(){ae===Ee.length?Ie.complete():(Ie.next(Ee[ae++]),Ie.closed||this.schedule())})})}(Ee,Se);if((0,Oe.t)(Ee))return function te(Ee,Se){return(0,v.Xf)(Ee).pipe(Q(Se),Z(Se))}(Ee,Se);if((0,it.D)(Ee))return Ce(Ee,Se);if((0,Te.T)(Ee))return function Pe(Ee,Se){return new G.y(Ie=>{let ae;return(0,A.f)(Ie,Se,()=>{ae=Ee[q.h](),(0,A.f)(Ie,Se,()=>{let se,ye;try{({value:se,done:ye}=ae.next())}catch(le){return void Ie.error(le)}ye?Ie.complete():Ie.next(se)},0,!0)}),()=>(0,ie.m)(ae?.return)&&ae.return()})}(Ee,Se);if((0,we.L)(Ee))return function j(Ee,Se){return Ce((0,we.Q)(Ee),Se)}(Ee,Se)}throw(0,vt.z)(Ee)}(Ee,Se):(0,v.Xf)(Ee)}},4968:(ze,fe,C)=>{"use strict";C.d(fe,{R:()=>ee});var v=C(8421),A=C(9751),O=C(5577),W=C(1144),Z=C(576),Q=C(3268);const oe=["addListener","removeListener"],te=["addEventListener","removeEventListener"],G=["on","off"];function ee(ce,Oe,pe,Te){if((0,Z.m)(pe)&&(Te=pe,pe=void 0),Te)return ee(ce,Oe,pe).pipe((0,Q.Z)(Te));const[it,vt]=function Ce(ce){return(0,Z.m)(ce.addEventListener)&&(0,Z.m)(ce.removeEventListener)}(ce)?te.map(we=>j=>ce[we](Oe,j,pe)):function ie(ce){return(0,Z.m)(ce.addListener)&&(0,Z.m)(ce.removeListener)}(ce)?oe.map(q(ce,Oe)):function Pe(ce){return(0,Z.m)(ce.on)&&(0,Z.m)(ce.off)}(ce)?G.map(q(ce,Oe)):[];if(!it&&(0,W.z)(ce))return(0,O.z)(we=>ee(we,Oe,pe))((0,v.Xf)(ce));if(!it)throw new TypeError("Invalid event target");return new A.y(we=>{const j=(...me)=>we.next(1<me.length?me:me[0]);return it(j),()=>vt(j)})}function q(ce,Oe){return pe=>Te=>ce[pe](Oe,Te)}},8421:(ze,fe,C)=>{"use strict";C.d(fe,{Xf:()=>Pe});var v=C(655),A=C(1144),O=C(8239),W=C(9751),Z=C(3670),Q=C(2206),oe=C(4532),te=C(6495),G=C(3260),ee=C(576),q=C(7849),ie=C(8822);function Pe(we){if(we instanceof W.y)return we;if(null!=we){if((0,Z.c)(we))return function Ce(we){return new W.y(j=>{const me=we[ie.L]();if((0,ee.m)(me.subscribe))return me.subscribe(j);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(we);if((0,A.z)(we))return function ce(we){return new W.y(j=>{for(let me=0;me<we.length&&!j.closed;me++)j.next(we[me]);j.complete()})}(we);if((0,O.t)(we))return function Oe(we){return new W.y(j=>{we.then(me=>{j.closed||(j.next(me),j.complete())},me=>j.error(me)).then(null,q.h)})}(we);if((0,Q.D)(we))return Te(we);if((0,te.T)(we))return function pe(we){return new W.y(j=>{for(const me of we)if(j.next(me),j.closed)return;j.complete()})}(we);if((0,G.L)(we))return function it(we){return Te((0,G.Q)(we))}(we)}throw(0,oe.z)(we)}function Te(we){return new W.y(j=>{(function vt(we,j){var me,De,Ee,Se;return(0,v.mG)(this,void 0,void 0,function*(){try{for(me=(0,v.KL)(we);!(De=yield me.next()).done;)if(j.next(De.value),j.closed)return}catch(Ie){Ee={error:Ie}}finally{try{De&&!De.done&&(Se=me.return)&&(yield Se.call(me))}finally{if(Ee)throw Ee.error}}j.complete()})})(we,j).catch(me=>j.error(me))})}},6451:(ze,fe,C)=>{"use strict";C.d(fe,{T:()=>Q});var v=C(8189),A=C(8421),O=C(515),W=C(3269),Z=C(2076);function Q(...oe){const te=(0,W.yG)(oe),G=(0,W._6)(oe,1/0),ee=oe;return ee.length?1===ee.length?(0,A.Xf)(ee[0]):(0,v.J)(G)((0,Z.D)(ee,te)):O.E}},9646:(ze,fe,C)=>{"use strict";C.d(fe,{of:()=>O});var v=C(3269),A=C(2076);function O(...W){const Z=(0,v.yG)(W);return(0,A.D)(W,Z)}},2843:(ze,fe,C)=>{"use strict";C.d(fe,{_:()=>O});var v=C(9751),A=C(576);function O(W,Z){const Q=(0,A.m)(W)?W:()=>W,oe=te=>te.error(Q());return new v.y(Z?te=>Z.schedule(oe,0,te):oe)}},5963:(ze,fe,C)=>{"use strict";C.d(fe,{H:()=>Z});var v=C(9751),A=C(4986),O=C(3532);function Z(Q=0,oe,te=A.P){let G=-1;return null!=oe&&((0,O.K)(oe)?te=oe:G=oe),new v.y(ee=>{let q=function W(Q){return Q instanceof Date&&!isNaN(Q)}(Q)?+Q-te.now():Q;q<0&&(q=0);let ie=0;return te.schedule(function(){ee.closed||(ee.next(ie++),0<=G?this.schedule(void 0,G):ee.complete())},q)})}},5403:(ze,fe,C)=>{"use strict";C.d(fe,{x:()=>A});var v=C(930);function A(W,Z,Q,oe,te){return new O(W,Z,Q,oe,te)}class O extends v.Lv{constructor(Z,Q,oe,te,G,ee){super(Z),this.onFinalize=G,this.shouldUnsubscribe=ee,this._next=Q?function(q){try{Q(q)}catch(ie){Z.error(ie)}}:super._next,this._error=te?function(q){try{te(q)}catch(ie){Z.error(ie)}finally{this.unsubscribe()}}:super._error,this._complete=oe?function(){try{oe()}catch(q){Z.error(q)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var Z;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:Q}=this;super.unsubscribe(),!Q&&(null===(Z=this.onFinalize)||void 0===Z||Z.call(this))}}}},262:(ze,fe,C)=>{"use strict";C.d(fe,{K:()=>W});var v=C(8421),A=C(5403),O=C(4482);function W(Z){return(0,O.e)((Q,oe)=>{let ee,te=null,G=!1;te=Q.subscribe((0,A.x)(oe,void 0,void 0,q=>{ee=(0,v.Xf)(Z(q,W(Z)(Q))),te?(te.unsubscribe(),te=null,ee.subscribe(oe)):G=!0})),G&&(te.unsubscribe(),te=null,ee.subscribe(oe))})}},4351:(ze,fe,C)=>{"use strict";C.d(fe,{b:()=>O});var v=C(5577),A=C(576);function O(W,Z){return(0,A.m)(Z)?(0,v.z)(W,Z,1):(0,v.z)(W,1)}},9300:(ze,fe,C)=>{"use strict";C.d(fe,{h:()=>O});var v=C(4482),A=C(5403);function O(W,Z){return(0,v.e)((Q,oe)=>{let te=0;Q.subscribe((0,A.x)(oe,G=>W.call(Z,G,te++)&&oe.next(G)))})}},4004:(ze,fe,C)=>{"use strict";C.d(fe,{U:()=>O});var v=C(4482),A=C(5403);function O(W,Z){return(0,v.e)((Q,oe)=>{let te=0;Q.subscribe((0,A.x)(oe,G=>{oe.next(W.call(Z,G,te++))}))})}},9718:(ze,fe,C)=>{"use strict";C.d(fe,{h:()=>A});var v=C(4004);function A(O){return(0,v.U)(()=>O)}},8189:(ze,fe,C)=>{"use strict";C.d(fe,{J:()=>O});var v=C(5577),A=C(4671);function O(W=1/0){return(0,v.z)(A.y,W)}},5577:(ze,fe,C)=>{"use strict";C.d(fe,{z:()=>te});var v=C(4004),A=C(8421),O=C(4482),W=C(9672),Z=C(5403),oe=C(576);function te(G,ee,q=1/0){return(0,oe.m)(ee)?te((ie,Pe)=>(0,v.U)((Ce,ce)=>ee(ie,Ce,Pe,ce))((0,A.Xf)(G(ie,Pe))),q):("number"==typeof ee&&(q=ee),(0,O.e)((ie,Pe)=>function Q(G,ee,q,ie,Pe,Ce,ce,Oe){const pe=[];let Te=0,it=0,vt=!1;const we=()=>{vt&&!pe.length&&!Te&&ee.complete()},j=De=>Te<ie?me(De):pe.push(De),me=De=>{Ce&&ee.next(De),Te++;let Ee=!1;(0,A.Xf)(q(De,it++)).subscribe((0,Z.x)(ee,Se=>{Pe?.(Se),Ce?j(Se):ee.next(Se)},()=>{Ee=!0},void 0,()=>{if(Ee)try{for(Te--;pe.length&&Te<ie;){const Se=pe.shift();ce?(0,W.f)(ee,ce,()=>me(Se)):me(Se)}we()}catch(Se){ee.error(Se)}}))};return G.subscribe((0,Z.x)(ee,j,()=>{vt=!0,we()})),()=>{Oe?.()}}(ie,Pe,G,q)))}},8343:(ze,fe,C)=>{"use strict";C.d(fe,{x:()=>O});var v=C(4482),A=C(5403);function O(){return(0,v.e)((W,Z)=>{let Q=null;W._refCount++;const oe=(0,A.x)(Z,void 0,void 0,void 0,()=>{if(!W||W._refCount<=0||0<--W._refCount)return void(Q=null);const te=W._connection,G=Q;Q=null,te&&(!G||te===G)&&te.unsubscribe(),Z.unsubscribe()});W.subscribe(oe),oe.closed||(Q=W.connect())})}},3099:(ze,fe,C)=>{"use strict";C.d(fe,{B:()=>Z});var v=C(8421),A=C(7579),O=C(930),W=C(4482);function Z(oe={}){const{connector:te=(()=>new A.x),resetOnError:G=!0,resetOnComplete:ee=!0,resetOnRefCountZero:q=!0}=oe;return ie=>{let Pe,Ce,ce,Oe=0,pe=!1,Te=!1;const it=()=>{Ce?.unsubscribe(),Ce=void 0},vt=()=>{it(),Pe=ce=void 0,pe=Te=!1},we=()=>{const j=Pe;vt(),j?.unsubscribe()};return(0,W.e)((j,me)=>{Oe++,!Te&&!pe&&it();const De=ce=ce??te();me.add(()=>{Oe--,0===Oe&&!Te&&!pe&&(Ce=Q(we,q))}),De.subscribe(me),!Pe&&Oe>0&&(Pe=new O.Hp({next:Ee=>De.next(Ee),error:Ee=>{Te=!0,it(),Ce=Q(vt,G,Ee),De.error(Ee)},complete:()=>{pe=!0,it(),Ce=Q(vt,ee),De.complete()}}),(0,v.Xf)(j).subscribe(Pe))})(ie)}}function Q(oe,te,...G){if(!0===te)return void oe();if(!1===te)return;const ee=new O.Hp({next:()=>{ee.unsubscribe(),oe()}});return te(...G).subscribe(ee)}},8675:(ze,fe,C)=>{"use strict";C.d(fe,{O:()=>W});var v=C(7272),A=C(3269),O=C(4482);function W(...Z){const Q=(0,A.yG)(Z);return(0,O.e)((oe,te)=>{(Q?(0,v.z)(Z,oe,Q):(0,v.z)(Z,oe)).subscribe(te)})}},3900:(ze,fe,C)=>{"use strict";C.d(fe,{w:()=>W});var v=C(8421),A=C(4482),O=C(5403);function W(Z,Q){return(0,A.e)((oe,te)=>{let G=null,ee=0,q=!1;const ie=()=>q&&!G&&te.complete();oe.subscribe((0,O.x)(te,Pe=>{G?.unsubscribe();let Ce=0;const ce=ee++;(0,v.Xf)(Z(Pe,ce)).subscribe(G=(0,O.x)(te,Oe=>te.next(Q?Q(Pe,Oe,ce,Ce++):Oe),()=>{G=null,ie()}))},()=>{q=!0,ie()}))})}},5698:(ze,fe,C)=>{"use strict";C.d(fe,{q:()=>W});var v=C(515),A=C(4482),O=C(5403);function W(Z){return Z<=0?()=>v.E:(0,A.e)((Q,oe)=>{let te=0;Q.subscribe((0,O.x)(oe,G=>{++te<=Z&&(oe.next(G),Z<=te&&oe.complete())}))})}},2722:(ze,fe,C)=>{"use strict";C.d(fe,{R:()=>Z});var v=C(4482),A=C(5403),O=C(8421),W=C(5032);function Z(Q){return(0,v.e)((oe,te)=>{(0,O.Xf)(Q).subscribe((0,A.x)(te,()=>te.complete(),W.Z)),!te.closed&&oe.subscribe(te)})}},2529:(ze,fe,C)=>{"use strict";C.d(fe,{o:()=>O});var v=C(4482),A=C(5403);function O(W,Z=!1){return(0,v.e)((Q,oe)=>{let te=0;Q.subscribe((0,A.x)(oe,G=>{const ee=W(G,te++);(ee||Z)&&oe.next(G),!ee&&oe.complete()}))})}},8505:(ze,fe,C)=>{"use strict";C.d(fe,{b:()=>Z});var v=C(576),A=C(4482),O=C(5403),W=C(4671);function Z(Q,oe,te){const G=(0,v.m)(Q)||oe||te?{next:Q,error:oe,complete:te}:Q;return G?(0,A.e)((ee,q)=>{var ie;null===(ie=G.subscribe)||void 0===ie||ie.call(G);let Pe=!0;ee.subscribe((0,O.x)(q,Ce=>{var ce;null===(ce=G.next)||void 0===ce||ce.call(G,Ce),q.next(Ce)},()=>{var Ce;Pe=!1,null===(Ce=G.complete)||void 0===Ce||Ce.call(G),q.complete()},Ce=>{var ce;Pe=!1,null===(ce=G.error)||void 0===ce||ce.call(G,Ce),q.error(Ce)},()=>{var Ce,ce;Pe&&(null===(Ce=G.unsubscribe)||void 0===Ce||Ce.call(G)),null===(ce=G.finalize)||void 0===ce||ce.call(G)}))}):W.y}},4408:(ze,fe,C)=>{"use strict";C.d(fe,{o:()=>Z});var v=C(727);class A extends v.w0{constructor(oe,te){super()}schedule(oe,te=0){return this}}const O={setInterval(Q,oe,...te){const{delegate:G}=O;return G?.setInterval?G.setInterval(Q,oe,...te):setInterval(Q,oe,...te)},clearInterval(Q){const{delegate:oe}=O;return(oe?.clearInterval||clearInterval)(Q)},delegate:void 0};var W=C(8737);class Z extends A{constructor(oe,te){super(oe,te),this.scheduler=oe,this.work=te,this.pending=!1}schedule(oe,te=0){var G;if(this.closed)return this;this.state=oe;const ee=this.id,q=this.scheduler;return null!=ee&&(this.id=this.recycleAsyncId(q,ee,te)),this.pending=!0,this.delay=te,this.id=null!==(G=this.id)&&void 0!==G?G:this.requestAsyncId(q,this.id,te),this}requestAsyncId(oe,te,G=0){return O.setInterval(oe.flush.bind(oe,this),G)}recycleAsyncId(oe,te,G=0){if(null!=G&&this.delay===G&&!1===this.pending)return te;null!=te&&O.clearInterval(te)}execute(oe,te){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const G=this._execute(oe,te);if(G)return G;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(oe,te){let ee,G=!1;try{this.work(oe)}catch(q){G=!0,ee=q||new Error("Scheduled action threw falsy error")}if(G)return this.unsubscribe(),ee}unsubscribe(){if(!this.closed){const{id:oe,scheduler:te}=this,{actions:G}=te;this.work=this.state=this.scheduler=null,this.pending=!1,(0,W.P)(G,this),null!=oe&&(this.id=this.recycleAsyncId(te,oe,null)),this.delay=null,super.unsubscribe()}}}},7565:(ze,fe,C)=>{"use strict";C.d(fe,{v:()=>O});var v=C(6063);class A{constructor(Z,Q=A.now){this.schedulerActionCtor=Z,this.now=Q}schedule(Z,Q=0,oe){return new this.schedulerActionCtor(this,Z).schedule(oe,Q)}}A.now=v.l.now;class O extends A{constructor(Z,Q=A.now){super(Z,Q),this.actions=[],this._active=!1}flush(Z){const{actions:Q}=this;if(this._active)return void Q.push(Z);let oe;this._active=!0;do{if(oe=Z.execute(Z.state,Z.delay))break}while(Z=Q.shift());if(this._active=!1,oe){for(;Z=Q.shift();)Z.unsubscribe();throw oe}}}},29:(ze,fe,C)=>{"use strict";C.d(fe,{Z:()=>Q});var v=C(4408),A=C(3399),W=C(7565);const Q=new class Z extends W.v{flush(G){this._active=!0;const ee=this._scheduled;this._scheduled=void 0;const{actions:q}=this;let ie;G=G||q.shift();do{if(ie=G.execute(G.state,G.delay))break}while((G=q[0])&&G.id===ee&&q.shift());if(this._active=!1,ie){for(;(G=q[0])&&G.id===ee&&q.shift();)G.unsubscribe();throw ie}}}(class O extends v.o{constructor(G,ee){super(G,ee),this.scheduler=G,this.work=ee}requestAsyncId(G,ee,q=0){return null!==q&&q>0?super.requestAsyncId(G,ee,q):(G.actions.push(this),G._scheduled||(G._scheduled=A.l.requestAnimationFrame(()=>G.flush(void 0))))}recycleAsyncId(G,ee,q=0){var ie;if(null!=q?q>0:this.delay>0)return super.recycleAsyncId(G,ee,q);const{actions:Pe}=G;null!=ee&&(null===(ie=Pe[Pe.length-1])||void 0===ie?void 0:ie.id)!==ee&&(A.l.cancelAnimationFrame(ee),G._scheduled=void 0)}})},3399:(ze,fe,C)=>{"use strict";C.d(fe,{l:()=>A});var v=C(727);const A={schedule(O){let W=requestAnimationFrame,Z=cancelAnimationFrame;const{delegate:Q}=A;Q&&(W=Q.requestAnimationFrame,Z=Q.cancelAnimationFrame);const oe=W(te=>{Z=void 0,O(te)});return new v.w0(()=>Z?.(oe))},requestAnimationFrame(...O){const{delegate:W}=A;return(W?.requestAnimationFrame||requestAnimationFrame)(...O)},cancelAnimationFrame(...O){const{delegate:W}=A;return(W?.cancelAnimationFrame||cancelAnimationFrame)(...O)},delegate:void 0}},4986:(ze,fe,C)=>{"use strict";C.d(fe,{P:()=>W,z:()=>O});var v=C(4408);const O=new(C(7565).v)(v.o),W=O},6063:(ze,fe,C)=>{"use strict";C.d(fe,{l:()=>v});const v={now:()=>(v.delegate||Date).now(),delegate:void 0}},3410:(ze,fe,C)=>{"use strict";C.d(fe,{z:()=>v});const v={setTimeout(A,O,...W){const{delegate:Z}=v;return Z?.setTimeout?Z.setTimeout(A,O,...W):setTimeout(A,O,...W)},clearTimeout(A){const{delegate:O}=v;return(O?.clearTimeout||clearTimeout)(A)},delegate:void 0}},2202:(ze,fe,C)=>{"use strict";C.d(fe,{h:()=>A});const A=function v(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(ze,fe,C)=>{"use strict";C.d(fe,{L:()=>v});const v="function"==typeof Symbol&&Symbol.observable||"@@observable"},3269:(ze,fe,C)=>{"use strict";C.d(fe,{_6:()=>Q,jO:()=>W,yG:()=>Z});var v=C(576),A=C(3532);function O(oe){return oe[oe.length-1]}function W(oe){return(0,v.m)(O(oe))?oe.pop():void 0}function Z(oe){return(0,A.K)(O(oe))?oe.pop():void 0}function Q(oe,te){return"number"==typeof O(oe)?oe.pop():te}},4742:(ze,fe,C)=>{"use strict";C.d(fe,{D:()=>Z});const{isArray:v}=Array,{getPrototypeOf:A,prototype:O,keys:W}=Object;function Z(oe){if(1===oe.length){const te=oe[0];if(v(te))return{args:te,keys:null};if(function Q(oe){return oe&&"object"==typeof oe&&A(oe)===O}(te)){const G=W(te);return{args:G.map(ee=>te[ee]),keys:G}}}return{args:oe,keys:null}}},8737:(ze,fe,C)=>{"use strict";function v(A,O){if(A){const W=A.indexOf(O);0<=W&&A.splice(W,1)}}C.d(fe,{P:()=>v})},3888:(ze,fe,C)=>{"use strict";function v(A){const W=A(Z=>{Error.call(Z),Z.stack=(new Error).stack});return W.prototype=Object.create(Error.prototype),W.prototype.constructor=W,W}C.d(fe,{d:()=>v})},1810:(ze,fe,C)=>{"use strict";function v(A,O){return A.reduce((W,Z,Q)=>(W[Z]=O[Q],W),{})}C.d(fe,{n:()=>v})},2806:(ze,fe,C)=>{"use strict";C.d(fe,{O:()=>W,x:()=>O});var v=C(2416);let A=null;function O(Z){if(v.v.useDeprecatedSynchronousErrorHandling){const Q=!A;if(Q&&(A={errorThrown:!1,error:null}),Z(),Q){const{errorThrown:oe,error:te}=A;if(A=null,oe)throw te}}else Z()}function W(Z){v.v.useDeprecatedSynchronousErrorHandling&&A&&(A.errorThrown=!0,A.error=Z)}},9672:(ze,fe,C)=>{"use strict";function v(A,O,W,Z=0,Q=!1){const oe=O.schedule(function(){W(),Q?A.add(this.schedule(null,Z)):this.unsubscribe()},Z);if(A.add(oe),!Q)return oe}C.d(fe,{f:()=>v})},4671:(ze,fe,C)=>{"use strict";function v(A){return A}C.d(fe,{y:()=>v})},1144:(ze,fe,C)=>{"use strict";C.d(fe,{z:()=>v});const v=A=>A&&"number"==typeof A.length&&"function"!=typeof A},2206:(ze,fe,C)=>{"use strict";C.d(fe,{D:()=>A});var v=C(576);function A(O){return Symbol.asyncIterator&&(0,v.m)(O?.[Symbol.asyncIterator])}},576:(ze,fe,C)=>{"use strict";function v(A){return"function"==typeof A}C.d(fe,{m:()=>v})},3670:(ze,fe,C)=>{"use strict";C.d(fe,{c:()=>O});var v=C(8822),A=C(576);function O(W){return(0,A.m)(W[v.L])}},6495:(ze,fe,C)=>{"use strict";C.d(fe,{T:()=>O});var v=C(2202),A=C(576);function O(W){return(0,A.m)(W?.[v.h])}},8239:(ze,fe,C)=>{"use strict";C.d(fe,{t:()=>A});var v=C(576);function A(O){return(0,v.m)(O?.then)}},3260:(ze,fe,C)=>{"use strict";C.d(fe,{L:()=>W,Q:()=>O});var v=C(655),A=C(576);function O(Z){return(0,v.FC)(this,arguments,function*(){const oe=Z.getReader();try{for(;;){const{value:te,done:G}=yield(0,v.qq)(oe.read());if(G)return yield(0,v.qq)(void 0);yield yield(0,v.qq)(te)}}finally{oe.releaseLock()}})}function W(Z){return(0,A.m)(Z?.getReader)}},3532:(ze,fe,C)=>{"use strict";C.d(fe,{K:()=>A});var v=C(576);function A(O){return O&&(0,v.m)(O.schedule)}},4482:(ze,fe,C)=>{"use strict";C.d(fe,{A:()=>A,e:()=>O});var v=C(576);function A(W){return(0,v.m)(W?.lift)}function O(W){return Z=>{if(A(Z))return Z.lift(function(Q){try{return W(Q,this)}catch(oe){this.error(oe)}});throw new TypeError("Unable to lift unknown Observable type")}}},3268:(ze,fe,C)=>{"use strict";C.d(fe,{Z:()=>W});var v=C(4004);const{isArray:A}=Array;function W(Z){return(0,v.U)(Q=>function O(Z,Q){return A(Q)?Z(...Q):Z(Q)}(Z,Q))}},5032:(ze,fe,C)=>{"use strict";function v(){}C.d(fe,{Z:()=>v})},9635:(ze,fe,C)=>{"use strict";C.d(fe,{U:()=>O,z:()=>A});var v=C(4671);function A(...W){return O(W)}function O(W){return 0===W.length?v.y:1===W.length?W[0]:function(Q){return W.reduce((oe,te)=>te(oe),Q)}}},7849:(ze,fe,C)=>{"use strict";C.d(fe,{h:()=>O});var v=C(2416),A=C(3410);function O(W){A.z.setTimeout(()=>{const{onUnhandledError:Z}=v.v;if(!Z)throw W;Z(W)})}},4532:(ze,fe,C)=>{"use strict";function v(A){return new TypeError(`You provided ${null!==A&&"object"==typeof A?"an invalid object":`'${A}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}C.d(fe,{z:()=>v})},3738:function(ze){var fe;ze.exports=((fe=function(){function C(ee){return O.appendChild(ee.dom),ee}function v(ee){for(var q=0;q<O.children.length;q++)O.children[q].style.display=q===ee?"block":"none";A=ee}var A=0,O=document.createElement("div");O.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",O.addEventListener("click",function(ee){ee.preventDefault(),v(++A%O.children.length)},!1);var W=(performance||Date).now(),Z=W,Q=0,oe=C(new fe.Panel("FPS","#0ff","#002")),te=C(new fe.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var G=C(new fe.Panel("MB","#f08","#201"));return v(0),{REVISION:16,dom:O,addPanel:C,showPanel:v,begin:function(){W=(performance||Date).now()},end:function(){Q++;var ee=(performance||Date).now();if(te.update(ee-W,200),ee>Z+1e3&&(oe.update(1e3*Q/(ee-Z),100),Z=ee,Q=0,G)){var q=performance.memory;G.update(q.usedJSHeapSize/1048576,q.jsHeapSizeLimit/1048576)}return ee},update:function(){W=this.end()},domElement:O,setMode:v}}).Panel=function(C,v,A){var O=1/0,W=0,Z=Math.round,Q=Z(window.devicePixelRatio||1),oe=80*Q,te=48*Q,G=3*Q,ee=2*Q,q=3*Q,ie=15*Q,Pe=74*Q,Ce=30*Q,ce=document.createElement("canvas");ce.width=oe,ce.height=te,ce.style.cssText="width:80px;height:48px";var Oe=ce.getContext("2d");return Oe.font="bold "+9*Q+"px Helvetica,Arial,sans-serif",Oe.textBaseline="top",Oe.fillStyle=A,Oe.fillRect(0,0,oe,te),Oe.fillStyle=v,Oe.fillText(C,G,ee),Oe.fillRect(q,ie,Pe,Ce),Oe.fillStyle=A,Oe.globalAlpha=.9,Oe.fillRect(q,ie,Pe,Ce),{dom:ce,update:function(pe,Te){O=Math.min(O,pe),W=Math.max(W,pe),Oe.fillStyle=A,Oe.globalAlpha=1,Oe.fillRect(0,0,oe,ie),Oe.fillStyle=v,Oe.fillText(Z(pe)+" "+C+" ("+Z(O)+"-"+Z(W)+")",G,ee),Oe.drawImage(ce,q+Q,ie,Pe-Q,Ce,q,ie,Pe-Q,Ce),Oe.fillRect(q+Pe-Q,ie,Q,Ce),Oe.fillStyle=A,Oe.globalAlpha=.9,Oe.fillRect(q+Pe-Q,ie,Q,Z((1-pe/Te)*Ce))}}},fe)},655:(ze,fe,C)=>{"use strict";function te(ae,se,ye,le){return new(ye||(ye=Promise))(function(Ne,st){function bt(Bt){try{$e(le.next(Bt))}catch(mn){st(mn)}}function gt(Bt){try{$e(le.throw(Bt))}catch(mn){st(mn)}}function $e(Bt){Bt.done?Ne(Bt.value):function Le(Ne){return Ne instanceof ye?Ne:new ye(function(st){st(Ne)})}(Bt.value).then(bt,gt)}$e((le=le.apply(ae,se||[])).next())})}function pe(ae){return this instanceof pe?(this.v=ae,this):new pe(ae)}function Te(ae,se,ye){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Le,le=ye.apply(ae,se||[]),Ne=[];return Le={},st("next"),st("throw"),st("return"),Le[Symbol.asyncIterator]=function(){return this},Le;function st(Ot){le[Ot]&&(Le[Ot]=function(yt){return new Promise(function(un,Ye){Ne.push([Ot,yt,un,Ye])>1||bt(Ot,yt)})})}function bt(Ot,yt){try{!function gt(Ot){Ot.value instanceof pe?Promise.resolve(Ot.value.v).then($e,Bt):mn(Ne[0][2],Ot)}(le[Ot](yt))}catch(un){mn(Ne[0][3],un)}}function $e(Ot){bt("next",Ot)}function Bt(Ot){bt("throw",Ot)}function mn(Ot,yt){Ot(yt),Ne.shift(),Ne.length&&bt(Ne[0][0],Ne[0][1])}}function vt(ae){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ye,se=ae[Symbol.asyncIterator];return se?se.call(ae):(ae=function ie(ae){var se="function"==typeof Symbol&&Symbol.iterator,ye=se&&ae[se],le=0;if(ye)return ye.call(ae);if(ae&&"number"==typeof ae.length)return{next:function(){return ae&&le>=ae.length&&(ae=void 0),{value:ae&&ae[le++],done:!ae}}};throw new TypeError(se?"Object is not iterable.":"Symbol.iterator is not defined.")}(ae),ye={},le("next"),le("throw"),le("return"),ye[Symbol.asyncIterator]=function(){return this},ye);function le(Ne){ye[Ne]=ae[Ne]&&function(st){return new Promise(function(bt,gt){!function Le(Ne,st,bt,gt){Promise.resolve(gt).then(function($e){Ne({value:$e,done:bt})},st)}(bt,gt,(st=ae[Ne](st)).done,st.value)})}}}C.d(fe,{FC:()=>Te,KL:()=>vt,mG:()=>te,qq:()=>pe})},7340:(ze,fe,C)=>{"use strict";C.d(fe,{IO:()=>ce,LC:()=>A,SB:()=>G,X$:()=>W,ZE:()=>it,ZN:()=>Te,_j:()=>v,eR:()=>q,jt:()=>Z,k1:()=>vt,l3:()=>O,oB:()=>te,pV:()=>Pe,ru:()=>Q,vP:()=>oe});
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
class v{}class A{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const O="*";function W(we,j){return{type:7,name:we,definitions:j,options:{}}}function Z(we,j=null){return{type:4,styles:j,timings:we}}function Q(we,j=null){return{type:3,steps:we,options:j}}function oe(we,j=null){return{type:2,steps:we,options:j}}function te(we){return{type:6,styles:we,offset:null}}function G(we,j,me){return{type:0,name:we,styles:j,options:me}}function q(we,j,me=null){return{type:1,expr:we,animation:j,options:me}}function Pe(we=null){return{type:9,options:we}}function ce(we,j,me=null){return{type:11,selector:we,animation:j,options:me}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function pe(we){Promise.resolve().then(we)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Te{constructor(j=0,me=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=j+me}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(j=>j()),this._onDoneFns=[])}onStart(j){this._originalOnStartFns.push(j),this._onStartFns.push(j)}onDone(j){this._originalOnDoneFns.push(j),this._onDoneFns.push(j)}onDestroy(j){this._onDestroyFns.push(j)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){pe(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(j=>j()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(j=>j()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(j){this._position=this.totalTime?j*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(j){const me="start"==j?this._onStartFns:this._onDoneFns;me.forEach(De=>De()),me.length=0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class it{constructor(j){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=j;let me=0,De=0,Ee=0;const Se=this.players.length;0==Se?pe(()=>this._onFinish()):this.players.forEach(Ie=>{Ie.onDone(()=>{++me==Se&&this._onFinish()}),Ie.onDestroy(()=>{++De==Se&&this._onDestroy()}),Ie.onStart(()=>{++Ee==Se&&this._onStart()})}),this.totalTime=this.players.reduce((Ie,ae)=>Math.max(Ie,ae.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(j=>j()),this._onDoneFns=[])}init(){this.players.forEach(j=>j.init())}onStart(j){this._onStartFns.push(j)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(j=>j()),this._onStartFns=[])}onDone(j){this._onDoneFns.push(j)}onDestroy(j){this._onDestroyFns.push(j)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(j=>j.play())}pause(){this.players.forEach(j=>j.pause())}restart(){this.players.forEach(j=>j.restart())}finish(){this._onFinish(),this.players.forEach(j=>j.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(j=>j.destroy()),this._onDestroyFns.forEach(j=>j()),this._onDestroyFns=[])}reset(){this.players.forEach(j=>j.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(j){const me=j*this.totalTime;this.players.forEach(De=>{const Ee=De.totalTime?Math.min(1,me/De.totalTime):1;De.setPosition(Ee)})}getPosition(){const j=this.players.reduce((me,De)=>null===me||De.totalTime>me.totalTime?De:me,null);return null!=j?j.getPosition():0}beforeDestroy(){this.players.forEach(j=>{j.beforeDestroy&&j.beforeDestroy()})}triggerCallback(j){const me="start"==j?this._onStartFns:this._onDoneFns;me.forEach(De=>De()),me.length=0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const vt="!";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},445:(ze,fe,C)=>{"use strict";C.d(fe,{Is:()=>oe,vT:()=>G});var v=C(4650),A=C(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const O=new v.OlP("cdk-dir-doc",{providedIn:"root",factory:function W(){return(0,v.f3M)(A.K0)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}),Z=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let oe=(()=>{class ee{constructor(ie){if(this.value="ltr",this.change=new v.vpe,ie){const Ce=ie.documentElement?ie.documentElement.dir:null;this.value=function Q(ee){const q=ee?.toLowerCase()||"";return"auto"===q&&typeof navigator<"u"&&navigator?.language?Z.test(navigator.language)?"rtl":"ltr":"rtl"===q?"rtl":"ltr"}((ie.body?ie.body.dir:null)||Ce||"ltr")}}ngOnDestroy(){this.change.complete()}}return ee.\u0275fac=function(ie){return new(ie||ee)(v.LFG(O,8))},ee.\u0275prov=v.Yz7({token:ee,factory:ee.\u0275fac,providedIn:"root"}),ee})(),G=(()=>{class ee{}return ee.\u0275fac=function(ie){return new(ie||ee)},ee.\u0275mod=v.oAB({type:ee}),ee.\u0275inj=v.cJS({}),ee})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,1281:(ze,fe,C)=>{"use strict";C.d(fe,{Eq:()=>Z,HM:()=>Q,Ig:()=>A,fI:()=>oe,su:()=>O});var v=C(4650);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function A(G){return null!=G&&"false"!=`${G}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function O(G,ee=0){return function W(G){return!isNaN(parseFloat(G))&&!isNaN(Number(G))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(G)?Number(G):ee}function Z(G){return Array.isArray(G)?G:[G]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Q(G){return null==G?"":"string"==typeof G?G:`${G}px`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function oe(G){return G instanceof v.SBq?G.nativeElement:G}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,8184:(ze,fe,C)=>{"use strict";C.d(fe,{U8:()=>wt,aV:()=>Ln});var v=C(6270),A=C(6895),O=C(4650),W=C(1281),Z=C(3353),Q=C(445),oe=C(4080),te=C(7579),G=C(727),ee=C(6451),q=C(5698),ie=C(2722);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Pe=(0,Z.Mq)();class Ce{constructor(I,N){this._viewportRuler=I,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=N}attach(){}enable(){if(this._canBeEnabled()){const I=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=I.style.left||"",this._previousHTMLStyles.top=I.style.top||"",I.style.left=(0,W.HM)(-this._previousScrollPosition.left),I.style.top=(0,W.HM)(-this._previousScrollPosition.top),I.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const I=this._document.documentElement,V=I.style,L=this._document.body.style,re=V.scrollBehavior||"",ve=L.scrollBehavior||"";this._isEnabled=!1,V.left=this._previousHTMLStyles.left,V.top=this._previousHTMLStyles.top,I.classList.remove("cdk-global-scrollblock"),Pe&&(V.scrollBehavior=L.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Pe&&(V.scrollBehavior=re,L.scrollBehavior=ve)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const N=this._document.body,V=this._viewportRuler.getViewportSize();return N.scrollHeight>V.height||N.scrollWidth>V.width}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Oe{constructor(I,N,V,L){this._scrollDispatcher=I,this._ngZone=N,this._viewportRuler=V,this._config=L,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(I){this._overlayRef=I}enable(){if(this._scrollSubscription)return;const I=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=I.subscribe(()=>{const N=this._viewportRuler.getViewportScrollPosition().top;Math.abs(N-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=I.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class pe{enable(){}disable(){}attach(){}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Te(J,I){return I.some(N=>J.bottom<N.top||J.top>N.bottom||J.right<N.left||J.left>N.right)}function it(J,I){return I.some(N=>J.top<N.top||J.bottom>N.bottom||J.left<N.left||J.right>N.right)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class vt{constructor(I,N,V,L){this._scrollDispatcher=I,this._viewportRuler=N,this._ngZone=V,this._config=L,this._scrollSubscription=null}attach(I){this._overlayRef=I}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const N=this._overlayRef.overlayElement.getBoundingClientRect(),{width:V,height:L}=this._viewportRuler.getViewportSize();Te(N,[{width:V,height:L,bottom:L,right:V,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let we=(()=>{class J{constructor(N,V,L,re){this._scrollDispatcher=N,this._viewportRuler=V,this._ngZone=L,this.noop=()=>new pe,this.close=ve=>new Oe(this._scrollDispatcher,this._ngZone,this._viewportRuler,ve),this.block=()=>new Ce(this._viewportRuler,this._document),this.reposition=ve=>new vt(this._scrollDispatcher,this._viewportRuler,this._ngZone,ve),this._document=re}}return J.\u0275fac=function(N){return new(N||J)(O.LFG(v.mF),O.LFG(v.rL),O.LFG(O.R0b),O.LFG(A.K0))},J.\u0275prov=O.Yz7({token:J,factory:J.\u0275fac,providedIn:"root"}),J})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class j{constructor(I){if(this.scrollStrategy=new pe,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,I){const N=Object.keys(I);for(const V of N)void 0!==I[V]&&(this[V]=I[V])}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ee{constructor(I,N){this.connectionPair=I,this.scrollableViewProperties=N}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ae=(()=>{class J{constructor(N){this._attachedOverlays=[],this._document=N}ngOnDestroy(){this.detach()}add(N){this.remove(N),this._attachedOverlays.push(N)}remove(N){const V=this._attachedOverlays.indexOf(N);V>-1&&this._attachedOverlays.splice(V,1),0===this._attachedOverlays.length&&this.detach()}}return J.\u0275fac=function(N){return new(N||J)(O.LFG(A.K0))},J.\u0275prov=O.Yz7({token:J,factory:J.\u0275fac,providedIn:"root"}),J})(),se=(()=>{class J extends ae{constructor(N,V){super(N),this._ngZone=V,this._keydownListener=L=>{const re=this._attachedOverlays;for(let ve=re.length-1;ve>-1;ve--)if(re[ve]._keydownEvents.observers.length>0){const K=re[ve]._keydownEvents;this._ngZone?this._ngZone.run(()=>K.next(L)):K.next(L);break}}}add(N){super.add(N),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return J.\u0275fac=function(N){return new(N||J)(O.LFG(A.K0),O.LFG(O.R0b,8))},J.\u0275prov=O.Yz7({token:J,factory:J.\u0275fac,providedIn:"root"}),J})(),ye=(()=>{class J extends ae{constructor(N,V,L){super(N),this._platform=V,this._ngZone=L,this._cursorStyleIsSet=!1,this._pointerDownListener=re=>{this._pointerDownEventTarget=(0,Z.sA)(re)},this._clickListener=re=>{const ve=(0,Z.sA)(re),K="click"===re.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:ve;this._pointerDownEventTarget=null;const k=this._attachedOverlays.slice();for(let x=k.length-1;x>-1;x--){const ne=k[x];if(ne._outsidePointerEvents.observers.length<1||!ne.hasAttached())continue;if(ne.overlayElement.contains(ve)||ne.overlayElement.contains(K))break;const de=ne._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>de.next(re)):de.next(re)}}}add(N){if(super.add(N),!this._isAttached){const V=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(V)):this._addEventListeners(V),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=V.style.cursor,V.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const N=this._document.body;N.removeEventListener("pointerdown",this._pointerDownListener,!0),N.removeEventListener("click",this._clickListener,!0),N.removeEventListener("auxclick",this._clickListener,!0),N.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(N.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(N){N.addEventListener("pointerdown",this._pointerDownListener,!0),N.addEventListener("click",this._clickListener,!0),N.addEventListener("auxclick",this._clickListener,!0),N.addEventListener("contextmenu",this._clickListener,!0)}}return J.\u0275fac=function(N){return new(N||J)(O.LFG(A.K0),O.LFG(Z.t4),O.LFG(O.R0b,8))},J.\u0275prov=O.Yz7({token:J,factory:J.\u0275fac,providedIn:"root"}),J})(),le=(()=>{class J{constructor(N,V){this._platform=V,this._document=N}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const N="cdk-overlay-container";if(this._platform.isBrowser||(0,Z.Oy)()){const L=this._document.querySelectorAll(`.${N}[platform="server"], .${N}[platform="test"]`);for(let re=0;re<L.length;re++)L[re].remove()}const V=this._document.createElement("div");V.classList.add(N),(0,Z.Oy)()?V.setAttribute("platform","test"):this._platform.isBrowser||V.setAttribute("platform","server"),this._document.body.appendChild(V),this._containerElement=V}}return J.\u0275fac=function(N){return new(N||J)(O.LFG(A.K0),O.LFG(Z.t4))},J.\u0275prov=O.Yz7({token:J,factory:J.\u0275fac,providedIn:"root"}),J})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Le{constructor(I,N,V,L,re,ve,K,k,x,ne=!1){this._portalOutlet=I,this._host=N,this._pane=V,this._config=L,this._ngZone=re,this._keyboardDispatcher=ve,this._document=K,this._location=k,this._outsideClickDispatcher=x,this._animationsDisabled=ne,this._backdropElement=null,this._backdropClick=new te.x,this._attachments=new te.x,this._detachments=new te.x,this._locationChanges=G.w0.EMPTY,this._backdropClickHandler=de=>this._backdropClick.next(de),this._backdropTransitionendHandler=de=>{this._disposeBackdrop(de.target)},this._keydownEvents=new te.x,this._outsidePointerEvents=new te.x,L.scrollStrategy&&(this._scrollStrategy=L.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=L.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(I){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const N=this._portalOutlet.attach(I);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe((0,q.q)(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),"function"==typeof N?.onDestroy&&N.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),N}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const I=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),I}dispose(){const I=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,I&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(I){I!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=I,this.hasAttached()&&(I.attach(this),this.updatePosition()))}updateSize(I){this._config={...this._config,...I},this._updateElementSize()}setDirection(I){this._config={...this._config,direction:I},this._updateElementDirection()}addPanelClass(I){this._pane&&this._toggleClasses(this._pane,I,!0)}removePanelClass(I){this._pane&&this._toggleClasses(this._pane,I,!1)}getDirection(){const I=this._config.direction;return I?"string"==typeof I?I:I.value:"ltr"}updateScrollStrategy(I){I!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=I,this.hasAttached()&&(I.attach(this),I.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const I=this._pane.style;I.width=(0,W.HM)(this._config.width),I.height=(0,W.HM)(this._config.height),I.minWidth=(0,W.HM)(this._config.minWidth),I.minHeight=(0,W.HM)(this._config.minHeight),I.maxWidth=(0,W.HM)(this._config.maxWidth),I.maxHeight=(0,W.HM)(this._config.maxHeight)}_togglePointerEvents(I){this._pane.style.pointerEvents=I?"":"none"}_attachBackdrop(){const I="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(I)})}):this._backdropElement.classList.add(I)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const I=this._backdropElement;if(I){if(this._animationsDisabled)return void this._disposeBackdrop(I);I.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{I.addEventListener("transitionend",this._backdropTransitionendHandler)}),I.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(I)},500))}}_toggleClasses(I,N,V){const L=(0,W.Eq)(N||[]).filter(re=>!!re);L.length&&(V?I.classList.add(...L):I.classList.remove(...L))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const I=this._ngZone.onStable.pipe((0,ie.R)((0,ee.T)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),I.unsubscribe())})})}_disposeScrollStrategy(){const I=this._scrollStrategy;I&&(I.disable(),I.detach&&I.detach())}_disposeBackdrop(I){I&&(I.removeEventListener("click",this._backdropClickHandler),I.removeEventListener("transitionend",this._backdropTransitionendHandler),I.remove(),this._backdropElement===I&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ne="cdk-overlay-connected-position-bounding-box",st=/([A-Za-z%]+)$/;class bt{constructor(I,N,V,L,re){this._viewportRuler=N,this._document=V,this._platform=L,this._overlayContainer=re,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new te.x,this._resizeSubscription=G.w0.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(I)}get positions(){return this._preferredPositions}attach(I){this._validatePositions(),I.hostElement.classList.add(Ne),this._overlayRef=I,this._boundingBox=I.hostElement,this._pane=I.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const I=this._originRect,N=this._overlayRect,V=this._viewportRect,L=this._containerRect,re=[];let ve;for(let K of this._preferredPositions){let k=this._getOriginPoint(I,L,K),x=this._getOverlayPoint(k,N,K),ne=this._getOverlayFit(x,N,V,K);if(ne.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(K,k);this._canFitWithFlexibleDimensions(ne,x,V)?re.push({position:K,origin:k,overlayRect:N,boundingBoxRect:this._calculateBoundingBoxRect(k,K)}):(!ve||ve.overlayFit.visibleArea<ne.visibleArea)&&(ve={overlayFit:ne,overlayPoint:x,originPoint:k,position:K,overlayRect:N})}if(re.length){let K=null,k=-1;for(const x of re){const ne=x.boundingBoxRect.width*x.boundingBoxRect.height*(x.position.weight||1);ne>k&&(k=ne,K=x)}return this._isPushed=!1,void this._applyPosition(K.position,K.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(ve.position,ve.originPoint);this._applyPosition(ve.position,ve.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&gt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ne),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const I=this._lastPosition;if(I){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const N=this._getOriginPoint(this._originRect,this._containerRect,I);this._applyPosition(I,N)}else this.apply()}withScrollableContainers(I){return this._scrollables=I,this}withPositions(I){return this._preferredPositions=I,-1===I.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(I){return this._viewportMargin=I,this}withFlexibleDimensions(I=!0){return this._hasFlexibleDimensions=I,this}withGrowAfterOpen(I=!0){return this._growAfterOpen=I,this}withPush(I=!0){return this._canPush=I,this}withLockedPosition(I=!0){return this._positionLocked=I,this}setOrigin(I){return this._origin=I,this}withDefaultOffsetX(I){return this._offsetX=I,this}withDefaultOffsetY(I){return this._offsetY=I,this}withTransformOriginOn(I){return this._transformOriginSelector=I,this}_getOriginPoint(I,N,V){let L,re;if("center"==V.originX)L=I.left+I.width/2;else{const ve=this._isRtl()?I.right:I.left,K=this._isRtl()?I.left:I.right;L="start"==V.originX?ve:K}return N.left<0&&(L-=N.left),re="center"==V.originY?I.top+I.height/2:"top"==V.originY?I.top:I.bottom,N.top<0&&(re-=N.top),{x:L,y:re}}_getOverlayPoint(I,N,V){let L,re;return L="center"==V.overlayX?-N.width/2:"start"===V.overlayX?this._isRtl()?-N.width:0:this._isRtl()?0:-N.width,re="center"==V.overlayY?-N.height/2:"top"==V.overlayY?0:-N.height,{x:I.x+L,y:I.y+re}}_getOverlayFit(I,N,V,L){const re=Bt(N);let{x:ve,y:K}=I,k=this._getOffset(L,"x"),x=this._getOffset(L,"y");k&&(ve+=k),x&&(K+=x);let Ze=0-K,Xe=K+re.height-V.height,Be=this._subtractOverflows(re.width,0-ve,ve+re.width-V.width),Fe=this._subtractOverflows(re.height,Ze,Xe),Lt=Be*Fe;return{visibleArea:Lt,isCompletelyWithinViewport:re.width*re.height===Lt,fitsInViewportVertically:Fe===re.height,fitsInViewportHorizontally:Be==re.width}}_canFitWithFlexibleDimensions(I,N,V){if(this._hasFlexibleDimensions){const L=V.bottom-N.y,re=V.right-N.x,ve=$e(this._overlayRef.getConfig().minHeight),K=$e(this._overlayRef.getConfig().minWidth),x=I.fitsInViewportHorizontally||null!=K&&K<=re;return(I.fitsInViewportVertically||null!=ve&&ve<=L)&&x}return!1}_pushOverlayOnScreen(I,N,V){if(this._previousPushAmount&&this._positionLocked)return{x:I.x+this._previousPushAmount.x,y:I.y+this._previousPushAmount.y};const L=Bt(N),re=this._viewportRect,ve=Math.max(I.x+L.width-re.width,0),K=Math.max(I.y+L.height-re.height,0),k=Math.max(re.top-V.top-I.y,0),x=Math.max(re.left-V.left-I.x,0);let ne=0,de=0;return ne=L.width<=re.width?x||-ve:I.x<this._viewportMargin?re.left-V.left-I.x:0,de=L.height<=re.height?k||-K:I.y<this._viewportMargin?re.top-V.top-I.y:0,this._previousPushAmount={x:ne,y:de},{x:I.x+ne,y:I.y+de}}_applyPosition(I,N){if(this._setTransformOrigin(I),this._setOverlayElementStyles(N,I),this._setBoundingBoxStyles(N,I),I.panelClass&&this._addPanelClasses(I.panelClass),this._lastPosition=I,this._positionChanges.observers.length){const V=this._getScrollVisibility(),L=new Ee(I,V);this._positionChanges.next(L)}this._isInitialRender=!1}_setTransformOrigin(I){if(!this._transformOriginSelector)return;const N=this._boundingBox.querySelectorAll(this._transformOriginSelector);let V,L=I.overlayY;V="center"===I.overlayX?"center":this._isRtl()?"start"===I.overlayX?"right":"left":"start"===I.overlayX?"left":"right";for(let re=0;re<N.length;re++)N[re].style.transformOrigin=`${V} ${L}`}_calculateBoundingBoxRect(I,N){const V=this._viewportRect,L=this._isRtl();let re,ve,K,ne,de,Ze;if("top"===N.overlayY)ve=I.y,re=V.height-ve+this._viewportMargin;else if("bottom"===N.overlayY)K=V.height-I.y+2*this._viewportMargin,re=V.height-K+this._viewportMargin;else{const Xe=Math.min(V.bottom-I.y+V.top,I.y),Be=this._lastBoundingBoxSize.height;re=2*Xe,ve=I.y-Xe,re>Be&&!this._isInitialRender&&!this._growAfterOpen&&(ve=I.y-Be/2)}if("end"===N.overlayX&&!L||"start"===N.overlayX&&L)Ze=V.width-I.x+this._viewportMargin,ne=I.x-this._viewportMargin;else if("start"===N.overlayX&&!L||"end"===N.overlayX&&L)de=I.x,ne=V.right-I.x;else{const Xe=Math.min(V.right-I.x+V.left,I.x),Be=this._lastBoundingBoxSize.width;ne=2*Xe,de=I.x-Xe,ne>Be&&!this._isInitialRender&&!this._growAfterOpen&&(de=I.x-Be/2)}return{top:ve,left:de,bottom:K,right:Ze,width:ne,height:re}}_setBoundingBoxStyles(I,N){const V=this._calculateBoundingBoxRect(I,N);!this._isInitialRender&&!this._growAfterOpen&&(V.height=Math.min(V.height,this._lastBoundingBoxSize.height),V.width=Math.min(V.width,this._lastBoundingBoxSize.width));const L={};if(this._hasExactPosition())L.top=L.left="0",L.bottom=L.right=L.maxHeight=L.maxWidth="",L.width=L.height="100%";else{const re=this._overlayRef.getConfig().maxHeight,ve=this._overlayRef.getConfig().maxWidth;L.height=(0,W.HM)(V.height),L.top=(0,W.HM)(V.top),L.bottom=(0,W.HM)(V.bottom),L.width=(0,W.HM)(V.width),L.left=(0,W.HM)(V.left),L.right=(0,W.HM)(V.right),L.alignItems="center"===N.overlayX?"center":"end"===N.overlayX?"flex-end":"flex-start",L.justifyContent="center"===N.overlayY?"center":"bottom"===N.overlayY?"flex-end":"flex-start",re&&(L.maxHeight=(0,W.HM)(re)),ve&&(L.maxWidth=(0,W.HM)(ve))}this._lastBoundingBoxSize=V,gt(this._boundingBox.style,L)}_resetBoundingBoxStyles(){gt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){gt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(I,N){const V={},L=this._hasExactPosition(),re=this._hasFlexibleDimensions,ve=this._overlayRef.getConfig();if(L){const ne=this._viewportRuler.getViewportScrollPosition();gt(V,this._getExactOverlayY(N,I,ne)),gt(V,this._getExactOverlayX(N,I,ne))}else V.position="static";let K="",k=this._getOffset(N,"x"),x=this._getOffset(N,"y");k&&(K+=`translateX(${k}px) `),x&&(K+=`translateY(${x}px)`),V.transform=K.trim(),ve.maxHeight&&(L?V.maxHeight=(0,W.HM)(ve.maxHeight):re&&(V.maxHeight="")),ve.maxWidth&&(L?V.maxWidth=(0,W.HM)(ve.maxWidth):re&&(V.maxWidth="")),gt(this._pane.style,V)}_getExactOverlayY(I,N,V){let L={top:"",bottom:""},re=this._getOverlayPoint(N,this._overlayRect,I);return this._isPushed&&(re=this._pushOverlayOnScreen(re,this._overlayRect,V)),"bottom"===I.overlayY?L.bottom=this._document.documentElement.clientHeight-(re.y+this._overlayRect.height)+"px":L.top=(0,W.HM)(re.y),L}_getExactOverlayX(I,N,V){let ve,L={left:"",right:""},re=this._getOverlayPoint(N,this._overlayRect,I);return this._isPushed&&(re=this._pushOverlayOnScreen(re,this._overlayRect,V)),ve=this._isRtl()?"end"===I.overlayX?"left":"right":"end"===I.overlayX?"right":"left","right"===ve?L.right=this._document.documentElement.clientWidth-(re.x+this._overlayRect.width)+"px":L.left=(0,W.HM)(re.x),L}_getScrollVisibility(){const I=this._getOriginRect(),N=this._pane.getBoundingClientRect(),V=this._scrollables.map(L=>L.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:it(I,V),isOriginOutsideView:Te(I,V),isOverlayClipped:it(N,V),isOverlayOutsideView:Te(N,V)}}_subtractOverflows(I,...N){return N.reduce((V,L)=>V-Math.max(L,0),I)}_getNarrowedViewportRect(){const I=this._document.documentElement.clientWidth,N=this._document.documentElement.clientHeight,V=this._viewportRuler.getViewportScrollPosition();return{top:V.top+this._viewportMargin,left:V.left+this._viewportMargin,right:V.left+I-this._viewportMargin,bottom:V.top+N-this._viewportMargin,width:I-2*this._viewportMargin,height:N-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(I,N){return"x"===N?I.offsetX??this._offsetX:I.offsetY??this._offsetY}_validatePositions(){}_addPanelClasses(I){this._pane&&(0,W.Eq)(I).forEach(N=>{""!==N&&-1===this._appliedPanelClasses.indexOf(N)&&(this._appliedPanelClasses.push(N),this._pane.classList.add(N))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(I=>{this._pane.classList.remove(I)}),this._appliedPanelClasses=[])}_getOriginRect(){const I=this._origin;if(I instanceof O.SBq)return I.nativeElement.getBoundingClientRect();if(I instanceof Element)return I.getBoundingClientRect();const N=I.width||0,V=I.height||0;return{top:I.y,bottom:I.y+V,left:I.x,right:I.x+N,height:V,width:N}}}function gt(J,I){for(let N in I)I.hasOwnProperty(N)&&(J[N]=I[N]);return J}function $e(J){if("number"!=typeof J&&null!=J){const[I,N]=J.split(st);return N&&"px"!==N?null:parseFloat(I)}return J||null}function Bt(J){return{top:Math.floor(J.top),right:Math.floor(J.right),bottom:Math.floor(J.bottom),left:Math.floor(J.left),width:Math.floor(J.width),height:Math.floor(J.height)}}const yt="cdk-global-overlay-wrapper";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class un{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(I){const N=I.getConfig();this._overlayRef=I,this._width&&!N.width&&I.updateSize({width:this._width}),this._height&&!N.height&&I.updateSize({height:this._height}),I.hostElement.classList.add(yt),this._isDisposed=!1}top(I=""){return this._bottomOffset="",this._topOffset=I,this._alignItems="flex-start",this}left(I=""){return this._xOffset=I,this._xPosition="left",this}bottom(I=""){return this._topOffset="",this._bottomOffset=I,this._alignItems="flex-end",this}right(I=""){return this._xOffset=I,this._xPosition="right",this}start(I=""){return this._xOffset=I,this._xPosition="start",this}end(I=""){return this._xOffset=I,this._xPosition="end",this}width(I=""){return this._overlayRef?this._overlayRef.updateSize({width:I}):this._width=I,this}height(I=""){return this._overlayRef?this._overlayRef.updateSize({height:I}):this._height=I,this}centerHorizontally(I=""){return this.left(I),this._xPosition="center",this}centerVertically(I=""){return this.top(I),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const I=this._overlayRef.overlayElement.style,N=this._overlayRef.hostElement.style,V=this._overlayRef.getConfig(),{width:L,height:re,maxWidth:ve,maxHeight:K}=V,k=!("100%"!==L&&"100vw"!==L||ve&&"100%"!==ve&&"100vw"!==ve),x=!("100%"!==re&&"100vh"!==re||K&&"100%"!==K&&"100vh"!==K),ne=this._xPosition,de=this._xOffset,Ze="rtl"===this._overlayRef.getConfig().direction;let Xe="",Be="",Fe="";k?Fe="flex-start":"center"===ne?(Fe="center",Ze?Be=de:Xe=de):Ze?"left"===ne||"end"===ne?(Fe="flex-end",Xe=de):("right"===ne||"start"===ne)&&(Fe="flex-start",Be=de):"left"===ne||"start"===ne?(Fe="flex-start",Xe=de):("right"===ne||"end"===ne)&&(Fe="flex-end",Be=de),I.position=this._cssPosition,I.marginLeft=k?"0":Xe,I.marginTop=x?"0":this._topOffset,I.marginBottom=this._bottomOffset,I.marginRight=k?"0":Be,N.justifyContent=Fe,N.alignItems=x?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const I=this._overlayRef.overlayElement.style,N=this._overlayRef.hostElement,V=N.style;N.classList.remove(yt),V.justifyContent=V.alignItems=I.marginTop=I.marginBottom=I.marginLeft=I.marginRight=I.position="",this._overlayRef=null,this._isDisposed=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ye=(()=>{class J{constructor(N,V,L,re){this._viewportRuler=N,this._document=V,this._platform=L,this._overlayContainer=re}global(){return new un}flexibleConnectedTo(N){return new bt(N,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return J.\u0275fac=function(N){return new(N||J)(O.LFG(v.rL),O.LFG(A.K0),O.LFG(Z.t4),O.LFG(le))},J.\u0275prov=O.Yz7({token:J,factory:J.\u0275fac,providedIn:"root"}),J})(),kt=0,Ln=(()=>{class J{constructor(N,V,L,re,ve,K,k,x,ne,de,Ze,Xe){this.scrollStrategies=N,this._overlayContainer=V,this._componentFactoryResolver=L,this._positionBuilder=re,this._keyboardDispatcher=ve,this._injector=K,this._ngZone=k,this._document=x,this._directionality=ne,this._location=de,this._outsideClickDispatcher=Ze,this._animationsModuleType=Xe}create(N){const V=this._createHostElement(),L=this._createPaneElement(V),re=this._createPortalOutlet(L),ve=new j(N);return ve.direction=ve.direction||this._directionality.value,new Le(re,V,L,ve,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType)}position(){return this._positionBuilder}_createPaneElement(N){const V=this._document.createElement("div");return V.id="cdk-overlay-"+kt++,V.classList.add("cdk-overlay-pane"),N.appendChild(V),V}_createHostElement(){const N=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(N),N}_createPortalOutlet(N){return this._appRef||(this._appRef=this._injector.get(O.z2F)),new oe.u0(N,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return J.\u0275fac=function(N){return new(N||J)(O.LFG(we),O.LFG(le),O.LFG(O._Vd),O.LFG(Ye),O.LFG(se),O.LFG(O.zs3),O.LFG(O.R0b),O.LFG(A.K0),O.LFG(Q.Is),O.LFG(A.Ye),O.LFG(ye),O.LFG(O.QbO,8))},J.\u0275prov=O.Yz7({token:J,factory:J.\u0275fac}),J})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const at={provide:new O.OlP("cdk-connected-overlay-scroll-strategy"),deps:[Ln],useFactory:function Ue(J){return()=>J.scrollStrategies.reposition()}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let wt=(()=>{class J{}return J.\u0275fac=function(N){return new(N||J)},J.\u0275mod=O.oAB({type:J}),J.\u0275inj=O.cJS({providers:[Ln,at],imports:[Q.vT,oe.eL,v.Cl,v.Cl]}),J})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,3353:(ze,fe,C)=>{"use strict";C.d(fe,{Mq:()=>Ce,Oy:()=>we,ht:()=>it,i$:()=>q,kV:()=>Te,sA:()=>vt,t4:()=>W,ud:()=>Z});var v=C(4650),A=C(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let O;try{O=typeof Intl<"u"&&Intl.v8BreakIterator}catch{O=!1}let G,Pe,Oe,W=(()=>{class j{constructor(De){this._platformId=De,this.isBrowser=this._platformId?(0,A.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!O)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return j.\u0275fac=function(De){return new(De||j)(v.LFG(v.Lbi))},j.\u0275prov=v.Yz7({token:j,factory:j.\u0275fac,providedIn:"root"}),j})(),Z=(()=>{class j{}return j.\u0275fac=function(De){return new(De||j)},j.\u0275mod=v.oAB({type:j}),j.\u0275inj=v.cJS({}),j})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function q(j){return function ee(){if(null==G&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>G=!0}))}finally{G=G||!1}return G}()?j:!!j.capture}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ce(){if(null==Pe){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return Pe=!1,Pe;if("scrollBehavior"in document.documentElement.style)Pe=!0;else{const j=Element.prototype.scrollTo;Pe=!!j&&!/\{\s*\[native code\]\s*\}/.test(j.toString())}}return Pe}function Te(j){if(function pe(){if(null==Oe){const j=typeof document<"u"?document.head:null;Oe=!(!j||!j.createShadowRoot&&!j.attachShadow)}return Oe}()){const me=j.getRootNode?j.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&me instanceof ShadowRoot)return me}return null}function it(){let j=typeof document<"u"&&document?document.activeElement:null;for(;j&&j.shadowRoot;){const me=j.shadowRoot.activeElement;if(me===j)break;j=me}return j}function vt(j){return j.composedPath?j.composedPath()[0]:j.target}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function we(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},4080:(ze,fe,C)=>{"use strict";C.d(fe,{C5:()=>ee,Pl:()=>it,UE:()=>q,eL:()=>we,u0:()=>ce});var v=C(4650),A=C(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class G{attach(De){return this._attachedHost=De,De.attach(this)}detach(){let De=this._attachedHost;null!=De&&(this._attachedHost=null,De.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(De){this._attachedHost=De}}class ee extends G{constructor(De,Ee,Se,Ie){super(),this.component=De,this.viewContainerRef=Ee,this.injector=Se,this.componentFactoryResolver=Ie}}class q extends G{constructor(De,Ee,Se,Ie){super(),this.templateRef=De,this.viewContainerRef=Ee,this.context=Se,this.injector=Ie}get origin(){return this.templateRef.elementRef}attach(De,Ee=this.context){return this.context=Ee,super.attach(De)}detach(){return this.context=void 0,super.detach()}}class ie extends G{constructor(De){super(),this.element=De instanceof v.SBq?De.nativeElement:De}}class Pe{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(De){return De instanceof ee?(this._attachedPortal=De,this.attachComponentPortal(De)):De instanceof q?(this._attachedPortal=De,this.attachTemplatePortal(De)):this.attachDomPortal&&De instanceof ie?(this._attachedPortal=De,this.attachDomPortal(De)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(De){this._disposeFn=De}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ce extends Pe{constructor(De,Ee,Se,Ie,ae){super(),this.outletElement=De,this._componentFactoryResolver=Ee,this._appRef=Se,this._defaultInjector=Ie,this.attachDomPortal=se=>{const ye=se.element,le=this._document.createComment("dom-portal");ye.parentNode.insertBefore(le,ye),this.outletElement.appendChild(ye),this._attachedPortal=se,super.setDisposeFn(()=>{le.parentNode&&le.parentNode.replaceChild(ye,le)})},this._document=ae}attachComponentPortal(De){const Se=(De.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(De.component);let Ie;return De.viewContainerRef?(Ie=De.viewContainerRef.createComponent(Se,De.viewContainerRef.length,De.injector||De.viewContainerRef.injector),this.setDisposeFn(()=>Ie.destroy())):(Ie=Se.create(De.injector||this._defaultInjector||v.zs3.NULL),this._appRef.attachView(Ie.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(Ie.hostView),Ie.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(Ie)),this._attachedPortal=De,Ie}attachTemplatePortal(De){let Ee=De.viewContainerRef,Se=Ee.createEmbeddedView(De.templateRef,De.context,{injector:De.injector});return Se.rootNodes.forEach(Ie=>this.outletElement.appendChild(Ie)),Se.detectChanges(),this.setDisposeFn(()=>{let Ie=Ee.indexOf(Se);-1!==Ie&&Ee.remove(Ie)}),this._attachedPortal=De,Se}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(De){return De.hostView.rootNodes[0]}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let it=(()=>{class me extends Pe{constructor(Ee,Se,Ie){super(),this._componentFactoryResolver=Ee,this._viewContainerRef=Se,this._isInitialized=!1,this.attached=new v.vpe,this.attachDomPortal=ae=>{const se=ae.element,ye=this._document.createComment("dom-portal");ae.setAttachedHost(this),se.parentNode.insertBefore(ye,se),this._getRootNode().appendChild(se),this._attachedPortal=ae,super.setDisposeFn(()=>{ye.parentNode&&ye.parentNode.replaceChild(se,ye)})},this._document=Ie}get portal(){return this._attachedPortal}set portal(Ee){this.hasAttached()&&!Ee&&!this._isInitialized||(this.hasAttached()&&super.detach(),Ee&&super.attach(Ee),this._attachedPortal=Ee||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(Ee){Ee.setAttachedHost(this);const Se=null!=Ee.viewContainerRef?Ee.viewContainerRef:this._viewContainerRef,ae=(Ee.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(Ee.component),se=Se.createComponent(ae,Se.length,Ee.injector||Se.injector);return Se!==this._viewContainerRef&&this._getRootNode().appendChild(se.hostView.rootNodes[0]),super.setDisposeFn(()=>se.destroy()),this._attachedPortal=Ee,this._attachedRef=se,this.attached.emit(se),se}attachTemplatePortal(Ee){Ee.setAttachedHost(this);const Se=this._viewContainerRef.createEmbeddedView(Ee.templateRef,Ee.context,{injector:Ee.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=Ee,this._attachedRef=Se,this.attached.emit(Se),Se}_getRootNode(){const Ee=this._viewContainerRef.element.nativeElement;return Ee.nodeType===Ee.ELEMENT_NODE?Ee:Ee.parentNode}}return me.\u0275fac=function(Ee){return new(Ee||me)(v.Y36(v._Vd),v.Y36(v.s_b),v.Y36(A.K0))},me.\u0275dir=v.lG2({type:me,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[v.qOj]}),me})(),we=(()=>{class me{}return me.\u0275fac=function(Ee){return new(Ee||me)},me.\u0275mod=v.oAB({type:me}),me.\u0275inj=v.cJS({}),me})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,6270:(ze,fe,C)=>{"use strict";C.d(fe,{ZD:()=>J,mF:()=>yt,Cl:()=>I,rL:()=>kt});var v=C(1281),A=C(4650),O=C(7579),W=C(9646),Z=C(9751),Q=C(4968),te=(C(29),C(4408));let ee,G=1;const q={};function ie(N){return N in q&&(delete q[N],!0)}const Pe={setImmediate(N){const V=G++;return q[V]=!0,ee||(ee=Promise.resolve()),ee.then(()=>ie(V)&&N()),V},clearImmediate(N){ie(N)}},{setImmediate:ce,clearImmediate:Oe}=Pe,pe={setImmediate(...N){const{delegate:V}=pe;return(V?.setImmediate||ce)(...N)},clearImmediate(N){const{delegate:V}=pe;return(V?.clearImmediate||Oe)(N)},delegate:void 0};var it=C(7565);new class vt extends it.v{flush(V){this._active=!0;const L=this._scheduled;this._scheduled=void 0;const{actions:re}=this;let ve;V=V||re.shift();do{if(ve=V.execute(V.state,V.delay))break}while((V=re[0])&&V.id===L&&re.shift());if(this._active=!1,ve){for(;(V=re[0])&&V.id===L&&re.shift();)V.unsubscribe();throw ve}}}(class Te extends te.o{constructor(V,L){super(V,L),this.scheduler=V,this.work=L}requestAsyncId(V,L,re=0){return null!==re&&re>0?super.requestAsyncId(V,L,re):(V.actions.push(this),V._scheduled||(V._scheduled=pe.setImmediate(V.flush.bind(V,void 0))))}recycleAsyncId(V,L,re=0){var ve;if(null!=re?re>0:this.delay>0)return super.recycleAsyncId(V,L,re);const{actions:K}=V;null!=L&&(null===(ve=K[K.length-1])||void 0===ve?void 0:ve.id)!==L&&(pe.clearImmediate(L),V._scheduled=void 0)}});var me=C(4986),De=C(4482),Ee=C(8421),Se=C(5403),ae=C(5963);function se(N,V=me.z){return function Ie(N){return(0,De.e)((V,L)=>{let re=!1,ve=null,K=null,k=!1;const x=()=>{if(K?.unsubscribe(),K=null,re){re=!1;const de=ve;ve=null,L.next(de)}k&&L.complete()},ne=()=>{K=null,k&&L.complete()};V.subscribe((0,Se.x)(L,de=>{re=!0,ve=de,K||(0,Ee.Xf)(N(de)).subscribe(K=(0,Se.x)(L,x,ne))},()=>{k=!0,(!re||!K||K.closed)&&L.complete()}))})}(()=>(0,ae.H)(N,V))}var ye=C(9300),le=C(3353),Le=C(6895),Ne=C(445);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let yt=(()=>{class N{constructor(L,re,ve){this._ngZone=L,this._platform=re,this._scrolled=new O.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=ve}register(L){this.scrollContainers.has(L)||this.scrollContainers.set(L,L.elementScrolled().subscribe(()=>this._scrolled.next(L)))}deregister(L){const re=this.scrollContainers.get(L);re&&(re.unsubscribe(),this.scrollContainers.delete(L))}scrolled(L=20){return this._platform.isBrowser?new Z.y(re=>{this._globalSubscription||this._addGlobalListener();const ve=L>0?this._scrolled.pipe(se(L)).subscribe(re):this._scrolled.subscribe(re);return this._scrolledCount++,()=>{ve.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,W.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((L,re)=>this.deregister(re)),this._scrolled.complete()}ancestorScrolled(L,re){const ve=this.getAncestorScrollContainers(L);return this.scrolled(re).pipe((0,ye.h)(K=>!K||ve.indexOf(K)>-1))}getAncestorScrollContainers(L){const re=[];return this.scrollContainers.forEach((ve,K)=>{this._scrollableContainsElement(K,L)&&re.push(K)}),re}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(L,re){let ve=(0,v.fI)(re),K=L.getElementRef().nativeElement;do{if(ve==K)return!0}while(ve=ve.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const L=this._getWindow();return(0,Q.R)(L.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return N.\u0275fac=function(L){return new(L||N)(A.LFG(A.R0b),A.LFG(le.t4),A.LFG(Le.K0,8))},N.\u0275prov=A.Yz7({token:N,factory:N.\u0275fac,providedIn:"root"}),N})(),kt=(()=>{class N{constructor(L,re,ve){this._platform=L,this._change=new O.x,this._changeListener=K=>{this._change.next(K)},this._document=ve,re.runOutsideAngular(()=>{if(L.isBrowser){const K=this._getWindow();K.addEventListener("resize",this._changeListener),K.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const L=this._getWindow();L.removeEventListener("resize",this._changeListener),L.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const L={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),L}getViewportRect(){const L=this.getViewportScrollPosition(),{width:re,height:ve}=this.getViewportSize();return{top:L.top,left:L.left,bottom:L.top+ve,right:L.left+re,height:ve,width:re}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const L=this._document,re=this._getWindow(),ve=L.documentElement,K=ve.getBoundingClientRect();return{top:-K.top||L.body.scrollTop||re.scrollY||ve.scrollTop||0,left:-K.left||L.body.scrollLeft||re.scrollX||ve.scrollLeft||0}}change(L=20){return L>0?this._change.pipe(se(L)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const L=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:L.innerWidth,height:L.innerHeight}:{width:0,height:0}}}return N.\u0275fac=function(L){return new(L||N)(A.LFG(le.t4),A.LFG(A.R0b),A.LFG(Le.K0,8))},N.\u0275prov=A.Yz7({token:N,factory:N.\u0275fac,providedIn:"root"}),N})(),J=(()=>{class N{}return N.\u0275fac=function(L){return new(L||N)},N.\u0275mod=A.oAB({type:N}),N.\u0275inj=A.cJS({}),N})(),I=(()=>{class N{}return N.\u0275fac=function(L){return new(L||N)},N.\u0275mod=A.oAB({type:N}),N.\u0275inj=A.cJS({imports:[Ne.vT,J,Ne.vT,J]}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,6895:(ze,fe,C)=>{"use strict";C.d(fe,{Do:()=>vt,ED:()=>wr,EM:()=>Fn,HT:()=>Z,JF:()=>ts,JJ:()=>Ii,K0:()=>oe,Mx:()=>Ci,NF:()=>vs,Nd:()=>ms,O5:()=>jt,Ov:()=>jr,PC:()=>Zi,RF:()=>Er,S$:()=>pe,Ts:()=>Ti,V_:()=>ee,Ye:()=>we,b0:()=>it,bD:()=>Ar,ez:()=>Ri,gd:()=>Ur,mk:()=>Ft,n9:()=>Hn,q:()=>O,sg:()=>dr,uU:()=>gs,w_:()=>Q});var v=C(4650);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let A=null;function O(){return A}function Z(u){A||(A=u)}class Q{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const oe=new v.OlP("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let te=(()=>{class u{historyGo(f){throw new Error("Not implemented")}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275prov=v.Yz7({token:u,factory:function(){return function G(){return(0,v.LFG)(q)}()},providedIn:"platform"}),u})();const ee=new v.OlP("Location Initialized");let q=(()=>{class u extends te{constructor(f){super(),this._doc=f,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return O().getBaseHref(this._doc)}onPopState(f){const w=O().getGlobalEventTarget(this._doc,"window");return w.addEventListener("popstate",f,!1),()=>w.removeEventListener("popstate",f)}onHashChange(f){const w=O().getGlobalEventTarget(this._doc,"window");return w.addEventListener("hashchange",f,!1),()=>w.removeEventListener("hashchange",f)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(f){this.location.pathname=f}pushState(f,w,R){ie()?this._history.pushState(f,w,R):this.location.hash=R}replaceState(f,w,R){ie()?this._history.replaceState(f,w,R):this.location.hash=R}forward(){this._history.forward()}back(){this._history.back()}historyGo(f=0){this._history.go(f)}getState(){return this._history.state}}return u.\u0275fac=function(f){return new(f||u)(v.LFG(oe))},u.\u0275prov=v.Yz7({token:u,factory:function(){return function Pe(){return new q((0,v.LFG)(oe))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()},providedIn:"platform"}),u})();function ie(){return!!window.history.pushState}function Ce(u,g){if(0==u.length)return g;if(0==g.length)return u;let f=0;return u.endsWith("/")&&f++,g.startsWith("/")&&f++,2==f?u+g.substring(1):1==f?u+g:u+"/"+g}function ce(u){const g=u.match(/#|\?|$/),f=g&&g.index||u.length;return u.slice(0,f-("/"===u[f-1]?1:0))+u.slice(f)}function Oe(u){return u&&"?"!==u[0]?"?"+u:u}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let pe=(()=>{class u{historyGo(f){throw new Error("Not implemented")}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275prov=v.Yz7({token:u,factory:function(){return(0,v.f3M)(it)},providedIn:"root"}),u})();const Te=new v.OlP("appBaseHref");let it=(()=>{class u extends pe{constructor(f,w){super(),this._platformLocation=f,this._removeListenerFns=[],this._baseHref=w??this._platformLocation.getBaseHrefFromDOM()??(0,v.f3M)(oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(f){this._removeListenerFns.push(this._platformLocation.onPopState(f),this._platformLocation.onHashChange(f))}getBaseHref(){return this._baseHref}prepareExternalUrl(f){return Ce(this._baseHref,f)}path(f=!1){const w=this._platformLocation.pathname+Oe(this._platformLocation.search),R=this._platformLocation.hash;return R&&f?`${w}${R}`:w}pushState(f,w,R,Y){const ue=this.prepareExternalUrl(R+Oe(Y));this._platformLocation.pushState(f,w,ue)}replaceState(f,w,R,Y){const ue=this.prepareExternalUrl(R+Oe(Y));this._platformLocation.replaceState(f,w,ue)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(f=0){this._platformLocation.historyGo?.(f)}}return u.\u0275fac=function(f){return new(f||u)(v.LFG(te),v.LFG(Te,8))},u.\u0275prov=v.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),vt=(()=>{class u extends pe{constructor(f,w){super(),this._platformLocation=f,this._baseHref="",this._removeListenerFns=[],null!=w&&(this._baseHref=w)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(f){this._removeListenerFns.push(this._platformLocation.onPopState(f),this._platformLocation.onHashChange(f))}getBaseHref(){return this._baseHref}path(f=!1){let w=this._platformLocation.hash;return null==w&&(w="#"),w.length>0?w.substring(1):w}prepareExternalUrl(f){const w=Ce(this._baseHref,f);return w.length>0?"#"+w:w}pushState(f,w,R,Y){let ue=this.prepareExternalUrl(R+Oe(Y));0==ue.length&&(ue=this._platformLocation.pathname),this._platformLocation.pushState(f,w,ue)}replaceState(f,w,R,Y){let ue=this.prepareExternalUrl(R+Oe(Y));0==ue.length&&(ue=this._platformLocation.pathname),this._platformLocation.replaceState(f,w,ue)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(f=0){this._platformLocation.historyGo?.(f)}}return u.\u0275fac=function(f){return new(f||u)(v.LFG(te),v.LFG(Te,8))},u.\u0275prov=v.Yz7({token:u,factory:u.\u0275fac}),u})(),we=(()=>{class u{constructor(f){this._subject=new v.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=f;const w=this._locationStrategy.getBaseHref();this._baseHref=ce(De(w)),this._locationStrategy.onPopState(R=>{this._subject.emit({url:this.path(!0),pop:!0,state:R.state,type:R.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(f=!1){return this.normalize(this._locationStrategy.path(f))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(f,w=""){return this.path()==this.normalize(f+Oe(w))}normalize(f){return u.stripTrailingSlash(function me(u,g){return u&&g.startsWith(u)?g.substring(u.length):g}(this._baseHref,De(f)))}prepareExternalUrl(f){return f&&"/"!==f[0]&&(f="/"+f),this._locationStrategy.prepareExternalUrl(f)}go(f,w="",R=null){this._locationStrategy.pushState(R,"",f,w),this._notifyUrlChangeListeners(this.prepareExternalUrl(f+Oe(w)),R)}replaceState(f,w="",R=null){this._locationStrategy.replaceState(R,"",f,w),this._notifyUrlChangeListeners(this.prepareExternalUrl(f+Oe(w)),R)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(f=0){this._locationStrategy.historyGo?.(f)}onUrlChange(f){return this._urlChangeListeners.push(f),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(w=>{this._notifyUrlChangeListeners(w.url,w.state)})),()=>{const w=this._urlChangeListeners.indexOf(f);this._urlChangeListeners.splice(w,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(f="",w){this._urlChangeListeners.forEach(R=>R(f,w))}subscribe(f,w,R){return this._subject.subscribe({next:f,error:w,complete:R})}}return u.normalizeQueryParams=Oe,u.joinWithSlash=Ce,u.stripTrailingSlash=ce,u.\u0275fac=function(f){return new(f||u)(v.LFG(pe))},u.\u0275prov=v.Yz7({token:u,factory:function(){return function j(){return new we((0,v.LFG)(pe))}()},providedIn:"root"}),u})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function De(u){return u.replace(/\/index.html$/,"")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Se=(()=>((Se=Se||{})[Se.Decimal=0]="Decimal",Se[Se.Percent=1]="Percent",Se[Se.Currency=2]="Currency",Se[Se.Scientific=3]="Scientific",Se))(),ae=(()=>((ae=ae||{})[ae.Format=0]="Format",ae[ae.Standalone=1]="Standalone",ae))(),se=(()=>((se=se||{})[se.Narrow=0]="Narrow",se[se.Abbreviated=1]="Abbreviated",se[se.Wide=2]="Wide",se[se.Short=3]="Short",se))(),ye=(()=>((ye=ye||{})[ye.Short=0]="Short",ye[ye.Medium=1]="Medium",ye[ye.Long=2]="Long",ye[ye.Full=3]="Full",ye))(),le=(()=>((le=le||{})[le.Decimal=0]="Decimal",le[le.Group=1]="Group",le[le.List=2]="List",le[le.PercentSign=3]="PercentSign",le[le.PlusSign=4]="PlusSign",le[le.MinusSign=5]="MinusSign",le[le.Exponential=6]="Exponential",le[le.SuperscriptingExponent=7]="SuperscriptingExponent",le[le.PerMille=8]="PerMille",le[le.Infinity=9]="Infinity",le[le.NaN=10]="NaN",le[le.TimeSeparator=11]="TimeSeparator",le[le.CurrencyDecimal=12]="CurrencyDecimal",le[le.CurrencyGroup=13]="CurrencyGroup",le))();function Ot(u,g){return J((0,v.cg1)(u)[v.wAp.DateFormat],g)}function yt(u,g){return J((0,v.cg1)(u)[v.wAp.TimeFormat],g)}function un(u,g){return J((0,v.cg1)(u)[v.wAp.DateTimeFormat],g)}function Ye(u,g){const f=(0,v.cg1)(u),w=f[v.wAp.NumberSymbols][g];if(typeof w>"u"){if(g===le.CurrencyDecimal)return f[v.wAp.NumberSymbols][le.Decimal];if(g===le.CurrencyGroup)return f[v.wAp.NumberSymbols][le.Group]}return w}function Ue(u){if(!u[v.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${u[v.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function J(u,g){for(let f=g;f>-1;f--)if(typeof u[f]<"u")return u[f];throw new Error("Locale data API: locale data undefined")}function I(u){const[g,f]=u.split(":");return{hours:+g,minutes:+f}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const re=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ve={},K=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var k=(()=>((k=k||{})[k.Short=0]="Short",k[k.ShortGMT=1]="ShortGMT",k[k.Long=2]="Long",k[k.Extended=3]="Extended",k))(),x=(()=>((x=x||{})[x.FullYear=0]="FullYear",x[x.Month=1]="Month",x[x.Date=2]="Date",x[x.Hours=3]="Hours",x[x.Minutes=4]="Minutes",x[x.Seconds=5]="Seconds",x[x.FractionalSeconds=6]="FractionalSeconds",x[x.Day=7]="Day",x))(),ne=(()=>((ne=ne||{})[ne.DayPeriods=0]="DayPeriods",ne[ne.Days=1]="Days",ne[ne.Months=2]="Months",ne[ne.Eras=3]="Eras",ne))();function de(u,g,f,w){let R=function Vt(u){if(On(u))return u;if("number"==typeof u&&!isNaN(u))return new Date(u);if("string"==typeof u){if(u=u.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(u)){const[R,Y=1,ue=1]=u.split("-").map(Ae=>+Ae);return Ze(R,Y-1,ue)}const f=parseFloat(u);if(!isNaN(u-f))return new Date(f);let w;if(w=u.match(re))return function Ht(u){const g=new Date(0);let f=0,w=0;const R=u[8]?g.setUTCFullYear:g.setFullYear,Y=u[8]?g.setUTCHours:g.setHours;u[9]&&(f=Number(u[9]+u[10]),w=Number(u[9]+u[11])),R.call(g,Number(u[1]),Number(u[2])-1,Number(u[3]));const ue=Number(u[4]||0)-f,Ae=Number(u[5]||0)-w,Ve=Number(u[6]||0),We=Math.floor(1e3*parseFloat("0."+(u[7]||0)));return Y.call(g,ue,Ae,Ve,We),g}(w)}const g=new Date(u);if(!On(g))throw new Error(`Unable to convert "${u}" into a date`);return g}(u);g=Xe(f,g)||g;let Ae,ue=[];for(;g;){if(Ae=K.exec(g),!Ae){ue.push(g);break}{ue=ue.concat(Ae.slice(1));const rt=ue.pop();if(!rt)break;g=rt}}let Ve=R.getTimezoneOffset();w&&(Ve=Rn(w,Ve),R=function Rt(u,g,f){const w=f?-1:1,R=u.getTimezoneOffset();return function si(u,g){return(u=new Date(u.getTime())).setMinutes(u.getMinutes()+g),u}(u,w*(Rn(g,R)-R))}(R,w,!0));let We="";return ue.forEach(rt=>{const et=function kr(u){if(yr[u])return yr[u];let g;switch(u){case"G":case"GG":case"GGG":g=ht(ne.Eras,se.Abbreviated);break;case"GGGG":g=ht(ne.Eras,se.Wide);break;case"GGGGG":g=ht(ne.Eras,se.Narrow);break;case"y":g=_t(x.FullYear,1,0,!1,!0);break;case"yy":g=_t(x.FullYear,2,0,!0,!0);break;case"yyy":g=_t(x.FullYear,3,0,!1,!0);break;case"yyyy":g=_t(x.FullYear,4,0,!1,!0);break;case"Y":g=In(1);break;case"YY":g=In(2,!0);break;case"YYY":g=In(3);break;case"YYYY":g=In(4);break;case"M":case"L":g=_t(x.Month,1,1);break;case"MM":case"LL":g=_t(x.Month,2,1);break;case"MMM":g=ht(ne.Months,se.Abbreviated);break;case"MMMM":g=ht(ne.Months,se.Wide);break;case"MMMMM":g=ht(ne.Months,se.Narrow);break;case"LLL":g=ht(ne.Months,se.Abbreviated,ae.Standalone);break;case"LLLL":g=ht(ne.Months,se.Wide,ae.Standalone);break;case"LLLLL":g=ht(ne.Months,se.Narrow,ae.Standalone);break;case"w":g=Bn(1);break;case"ww":g=Bn(2);break;case"W":g=Bn(1,!0);break;case"d":g=_t(x.Date,1);break;case"dd":g=_t(x.Date,2);break;case"c":case"cc":g=_t(x.Day,1);break;case"ccc":g=ht(ne.Days,se.Abbreviated,ae.Standalone);break;case"cccc":g=ht(ne.Days,se.Wide,ae.Standalone);break;case"ccccc":g=ht(ne.Days,se.Narrow,ae.Standalone);break;case"cccccc":g=ht(ne.Days,se.Short,ae.Standalone);break;case"E":case"EE":case"EEE":g=ht(ne.Days,se.Abbreviated);break;case"EEEE":g=ht(ne.Days,se.Wide);break;case"EEEEE":g=ht(ne.Days,se.Narrow);break;case"EEEEEE":g=ht(ne.Days,se.Short);break;case"a":case"aa":case"aaa":g=ht(ne.DayPeriods,se.Abbreviated);break;case"aaaa":g=ht(ne.DayPeriods,se.Wide);break;case"aaaaa":g=ht(ne.DayPeriods,se.Narrow);break;case"b":case"bb":case"bbb":g=ht(ne.DayPeriods,se.Abbreviated,ae.Standalone,!0);break;case"bbbb":g=ht(ne.DayPeriods,se.Wide,ae.Standalone,!0);break;case"bbbbb":g=ht(ne.DayPeriods,se.Narrow,ae.Standalone,!0);break;case"B":case"BB":case"BBB":g=ht(ne.DayPeriods,se.Abbreviated,ae.Format,!0);break;case"BBBB":g=ht(ne.DayPeriods,se.Wide,ae.Format,!0);break;case"BBBBB":g=ht(ne.DayPeriods,se.Narrow,ae.Format,!0);break;case"h":g=_t(x.Hours,1,-12);break;case"hh":g=_t(x.Hours,2,-12);break;case"H":g=_t(x.Hours,1);break;case"HH":g=_t(x.Hours,2);break;case"m":g=_t(x.Minutes,1);break;case"mm":g=_t(x.Minutes,2);break;case"s":g=_t(x.Seconds,1);break;case"ss":g=_t(x.Seconds,2);break;case"S":g=_t(x.FractionalSeconds,1);break;case"SS":g=_t(x.FractionalSeconds,2);break;case"SSS":g=_t(x.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":g=Pt(k.Short);break;case"ZZZZZ":g=Pt(k.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":g=Pt(k.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":g=Pt(k.Long);break;default:return null}return yr[u]=g,g}(rt);We+=et?et(R,f,Ve):"''"===rt?"'":rt.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),We}function Ze(u,g,f){const w=new Date(0);return w.setFullYear(u,g,f),w.setHours(0,0,0),w}function Xe(u,g){const f=function Ne(u){return(0,v.cg1)(u)[v.wAp.LocaleId]}(u);if(ve[f]=ve[f]||{},ve[f][g])return ve[f][g];let w="";switch(g){case"shortDate":w=Ot(u,ye.Short);break;case"mediumDate":w=Ot(u,ye.Medium);break;case"longDate":w=Ot(u,ye.Long);break;case"fullDate":w=Ot(u,ye.Full);break;case"shortTime":w=yt(u,ye.Short);break;case"mediumTime":w=yt(u,ye.Medium);break;case"longTime":w=yt(u,ye.Long);break;case"fullTime":w=yt(u,ye.Full);break;case"short":const R=Xe(u,"shortTime"),Y=Xe(u,"shortDate");w=Be(un(u,ye.Short),[R,Y]);break;case"medium":const ue=Xe(u,"mediumTime"),Ae=Xe(u,"mediumDate");w=Be(un(u,ye.Medium),[ue,Ae]);break;case"long":const Ve=Xe(u,"longTime"),We=Xe(u,"longDate");w=Be(un(u,ye.Long),[Ve,We]);break;case"full":const rt=Xe(u,"fullTime"),et=Xe(u,"fullDate");w=Be(un(u,ye.Full),[rt,et])}return w&&(ve[f][g]=w),w}function Be(u,g){return g&&(u=u.replace(/\{([^}]+)}/g,function(f,w){return null!=g&&w in g?g[w]:f})),u}function Fe(u,g,f="-",w,R){let Y="";(u<0||R&&u<=0)&&(R?u=1-u:(u=-u,Y=f));let ue=String(u);for(;ue.length<g;)ue="0"+ue;return w&&(ue=ue.slice(ue.length-g)),Y+ue}function _t(u,g,f=0,w=!1,R=!1){return function(Y,ue){let Ae=function cn(u,g){switch(u){case x.FullYear:return g.getFullYear();case x.Month:return g.getMonth();case x.Date:return g.getDate();case x.Hours:return g.getHours();case x.Minutes:return g.getMinutes();case x.Seconds:return g.getSeconds();case x.FractionalSeconds:return g.getMilliseconds();case x.Day:return g.getDay();default:throw new Error(`Unknown DateType value "${u}".`)}}(u,Y);if((f>0||Ae>-f)&&(Ae+=f),u===x.Hours)0===Ae&&-12===f&&(Ae=12);else if(u===x.FractionalSeconds)return function Lt(u,g){return Fe(u,3).substring(0,g)}(Ae,g);const Ve=Ye(ue,le.MinusSign);return Fe(Ae,g,Ve,w,R)}}function ht(u,g,f=ae.Format,w=!1){return function(R,Y){return function Mt(u,g,f,w,R,Y){switch(f){case ne.Months:return function gt(u,g,f){const w=(0,v.cg1)(u),Y=J([w[v.wAp.MonthsFormat],w[v.wAp.MonthsStandalone]],g);return J(Y,f)}(g,R,w)[u.getMonth()];case ne.Days:return function bt(u,g,f){const w=(0,v.cg1)(u),Y=J([w[v.wAp.DaysFormat],w[v.wAp.DaysStandalone]],g);return J(Y,f)}(g,R,w)[u.getDay()];case ne.DayPeriods:const ue=u.getHours(),Ae=u.getMinutes();if(Y){const We=function at(u){const g=(0,v.cg1)(u);return Ue(g),(g[v.wAp.ExtraData][2]||[]).map(w=>"string"==typeof w?I(w):[I(w[0]),I(w[1])])}(g),rt=function wt(u,g,f){const w=(0,v.cg1)(u);Ue(w);const Y=J([w[v.wAp.ExtraData][0],w[v.wAp.ExtraData][1]],g)||[];return J(Y,f)||[]}(g,R,w),et=We.findIndex(It=>{if(Array.isArray(It)){const[mt,Dt]=It,Dn=ue>=mt.hours&&Ae>=mt.minutes,Qt=ue<Dt.hours||ue===Dt.hours&&Ae<Dt.minutes;if(mt.hours<Dt.hours){if(Dn&&Qt)return!0}else if(Dn||Qt)return!0}else if(It.hours===ue&&It.minutes===Ae)return!0;return!1});if(-1!==et)return rt[et]}return function st(u,g,f){const w=(0,v.cg1)(u),Y=J([w[v.wAp.DayPeriodsFormat],w[v.wAp.DayPeriodsStandalone]],g);return J(Y,f)}(g,R,w)[ue<12?0:1];case ne.Eras:return function $e(u,g){return J((0,v.cg1)(u)[v.wAp.Eras],g)}(g,w)[u.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${f}`)}}(R,Y,u,g,f,w)}}function Pt(u){return function(g,f,w){const R=-1*w,Y=Ye(f,le.MinusSign),ue=R>0?Math.floor(R/60):Math.ceil(R/60);switch(u){case k.Short:return(R>=0?"+":"")+Fe(ue,2,Y)+Fe(Math.abs(R%60),2,Y);case k.ShortGMT:return"GMT"+(R>=0?"+":"")+Fe(ue,1,Y);case k.Long:return"GMT"+(R>=0?"+":"")+Fe(ue,2,Y)+":"+Fe(Math.abs(R%60),2,Y);case k.Extended:return 0===w?"Z":(R>=0?"+":"")+Fe(ue,2,Y)+":"+Fe(Math.abs(R%60),2,Y);default:throw new Error(`Unknown zone width "${u}"`)}}}function kn(u){return Ze(u.getFullYear(),u.getMonth(),u.getDate()+(4-u.getDay()))}function Bn(u,g=!1){return function(f,w){let R;if(g){const Y=new Date(f.getFullYear(),f.getMonth(),1).getDay()-1,ue=f.getDate();R=1+Math.floor((ue+Y)/7)}else{const Y=kn(f),ue=function Zt(u){const g=Ze(u,0,1).getDay();return Ze(u,0,1+(g<=4?4:11)-g)}(Y.getFullYear()),Ae=Y.getTime()-ue.getTime();R=1+Math.round(Ae/6048e5)}return Fe(R,u,Ye(w,le.MinusSign))}}function In(u,g=!1){return function(f,w){return Fe(kn(f).getFullYear(),u,Ye(w,le.MinusSign),g)}}const yr={};function Rn(u,g){u=u.replace(/:/g,"");const f=Date.parse("Jan 01, 1970 00:00:00 "+u)/6e4;return isNaN(f)?g:f}function On(u){return u instanceof Date&&!isNaN(u.valueOf())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const yn=/^(\d+)?\.((\d+)(-(\d+))?)?$/,z=".",$="0";function nn(u){const g=parseInt(u);if(isNaN(g))throw new Error("Invalid integer literal when parsing "+u);return g}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ci(u,g){g=encodeURIComponent(g);for(const f of u.split(";")){const w=f.indexOf("="),[R,Y]=-1==w?[f,""]:[f.slice(0,w),f.slice(w+1)];if(R.trim()===g)return decodeURIComponent(Y)}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ft=(()=>{class u{constructor(f,w,R,Y){this._iterableDiffers=f,this._keyValueDiffers=w,this._ngEl=R,this._renderer=Y,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(f){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof f?f.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(f){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof f?f.split(/\s+/):f,this._rawClass&&((0,v.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const f=this._iterableDiffer.diff(this._rawClass);f&&this._applyIterableChanges(f)}else if(this._keyValueDiffer){const f=this._keyValueDiffer.diff(this._rawClass);f&&this._applyKeyValueChanges(f)}}_applyKeyValueChanges(f){f.forEachAddedItem(w=>this._toggleClass(w.key,w.currentValue)),f.forEachChangedItem(w=>this._toggleClass(w.key,w.currentValue)),f.forEachRemovedItem(w=>{w.previousValue&&this._toggleClass(w.key,!1)})}_applyIterableChanges(f){f.forEachAddedItem(w=>{if("string"!=typeof w.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,v.AaK)(w.item)}`);this._toggleClass(w.item,!0)}),f.forEachRemovedItem(w=>this._toggleClass(w.item,!1))}_applyClasses(f){f&&(Array.isArray(f)||f instanceof Set?f.forEach(w=>this._toggleClass(w,!0)):Object.keys(f).forEach(w=>this._toggleClass(w,!!f[w])))}_removeClasses(f){f&&(Array.isArray(f)||f instanceof Set?f.forEach(w=>this._toggleClass(w,!1)):Object.keys(f).forEach(w=>this._toggleClass(w,!1)))}_toggleClass(f,w){(f=f.trim())&&f.split(/\s+/g).forEach(R=>{w?this._renderer.addClass(this._ngEl.nativeElement,R):this._renderer.removeClass(this._ngEl.nativeElement,R)})}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.ZZ4),v.Y36(v.aQg),v.Y36(v.SBq),v.Y36(v.Qsj))},u.\u0275dir=v.lG2({type:u,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),u})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Vr{constructor(g,f,w,R){this.$implicit=g,this.ngForOf=f,this.index=w,this.count=R}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let dr=(()=>{class u{constructor(f,w,R){this._viewContainer=f,this._template=w,this._differs=R,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(f){this._ngForOf=f,this._ngForOfDirty=!0}set ngForTrackBy(f){this._trackByFn=f}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(f){f&&(this._template=f)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const f=this._ngForOf;!this._differ&&f&&(this._differ=this._differs.find(f).create(this.ngForTrackBy))}if(this._differ){const f=this._differ.diff(this._ngForOf);f&&this._applyChanges(f)}}_applyChanges(f){const w=this._viewContainer;f.forEachOperation((R,Y,ue)=>{if(null==R.previousIndex)w.createEmbeddedView(this._template,new Vr(R.item,this._ngForOf,-1,-1),null===ue?void 0:ue);else if(null==ue)w.remove(null===Y?void 0:Y);else if(null!==Y){const Ae=w.get(Y);w.move(Ae,ue),Dr(Ae,R)}});for(let R=0,Y=w.length;R<Y;R++){const Ae=w.get(R).context;Ae.index=R,Ae.count=Y,Ae.ngForOf=this._ngForOf}f.forEachIdentityChange(R=>{Dr(w.get(R.currentIndex),R)})}static ngTemplateContextGuard(f,w){return!0}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(v.ZZ4))},u.\u0275dir=v.lG2({type:u,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),u})();function Dr(u,g){u.context.$implicit=g.item}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let jt=(()=>{class u{constructor(f,w){this._viewContainer=f,this._context=new Si,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=w}set ngIf(f){this._context.$implicit=this._context.ngIf=f,this._updateView()}set ngIfThen(f){Gt("ngIfThen",f),this._thenTemplateRef=f,this._thenViewRef=null,this._updateView()}set ngIfElse(f){Gt("ngIfElse",f),this._elseTemplateRef=f,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(f,w){return!0}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.s_b),v.Y36(v.Rgc))},u.\u0275dir=v.lG2({type:u,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),u})();class Si{constructor(){this.$implicit=null,this.ngIf=null}}function Gt(u,g){if(g&&!g.createEmbeddedView)throw new Error(`${u} must be a TemplateRef, but received '${(0,v.AaK)(g)}'.`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class fn{constructor(g,f){this._viewContainerRef=g,this._templateRef=f,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(g){g&&!this._created?this.create():!g&&this._created&&this.destroy()}}let Er=(()=>{class u{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(f){this._ngSwitch=f,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(f){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(f)}_matchCase(f){const w=f==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||w,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),w}_updateDefaultCases(f){if(this._defaultViews&&f!==this._defaultUsed){this._defaultUsed=f;for(let w=0;w<this._defaultViews.length;w++)this._defaultViews[w].enforceState(f)}}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275dir=v.lG2({type:u,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0}),u})(),Hn=(()=>{class u{constructor(f,w,R){this.ngSwitch=R,R._addCase(),this._view=new fn(f,w)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(Er,9))},u.\u0275dir=v.lG2({type:u,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0}),u})(),wr=(()=>{class u{constructor(f,w,R){R._addDefault(new fn(f,w))}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(Er,9))},u.\u0275dir=v.lG2({type:u,selectors:[["","ngSwitchDefault",""]],standalone:!0}),u})(),Zi=(()=>{class u{constructor(f,w,R){this._ngEl=f,this._differs=w,this._renderer=R,this._ngStyle=null,this._differ=null}set ngStyle(f){this._ngStyle=f,!this._differ&&f&&(this._differ=this._differs.find(f).create())}ngDoCheck(){if(this._differ){const f=this._differ.diff(this._ngStyle);f&&this._applyChanges(f)}}_setStyle(f,w){const[R,Y]=f.split("."),ue=-1===R.indexOf("-")?void 0:v.JOm.DashCase;null!=w?this._renderer.setStyle(this._ngEl.nativeElement,R,Y?`${w}${Y}`:w,ue):this._renderer.removeStyle(this._ngEl.nativeElement,R,ue)}_applyChanges(f){f.forEachRemovedItem(w=>this._setStyle(w.key,null)),f.forEachAddedItem(w=>this._setStyle(w.key,w.currentValue)),f.forEachChangedItem(w=>this._setStyle(w.key,w.currentValue))}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.SBq),v.Y36(v.aQg),v.Y36(v.Qsj))},u.\u0275dir=v.lG2({type:u,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0}),u})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function zn(u,g){return new v.vHH(2100,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Qi{createSubscription(g,f){return g.subscribe({next:f,error:w=>{throw w}})}dispose(g){g.unsubscribe()}}class Ws{createSubscription(g,f){return g.then(f,w=>{throw w})}dispose(g){}}const oi=new Ws,Xi=new Qi;let jr=(()=>{class u{constructor(f){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=f}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(f){return this._obj?f!==this._obj?(this._dispose(),this.transform(f)):this._latestValue:(f&&this._subscribe(f),this._latestValue)}_subscribe(f){this._obj=f,this._strategy=this._selectStrategy(f),this._subscription=this._strategy.createSubscription(f,w=>this._updateLatestValue(f,w))}_selectStrategy(f){if((0,v.QGY)(f))return oi;if((0,v.F4k)(f))return Xi;throw zn()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(f,w){f===this._obj&&(this._latestValue=w,this._ref.markForCheck())}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.sBO,16))},u.\u0275pipe=v.Yjl({name:"async",type:u,pure:!1,standalone:!0}),u})(),Ur=(()=>{class u{transform(f){if(null==f)return null;if("string"!=typeof f)throw zn();return f.toUpperCase()}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275pipe=v.Yjl({name:"uppercase",type:u,pure:!0,standalone:!0}),u})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Mi=new v.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let gs=(()=>{class u{constructor(f,w){this.locale=f,this.defaultTimezone=w}transform(f,w="mediumDate",R,Y){if(null==f||""===f||f!=f)return null;try{return de(f,w,Y||this.locale,R??this.defaultTimezone??void 0)}catch(ue){throw zn()}}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.soG,16),v.Y36(Mi,24))},u.\u0275pipe=v.Yjl({name:"date",type:u,pure:!0,standalone:!0}),u})(),Ti=(()=>{class u{transform(f){return JSON.stringify(f,null,2)}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275pipe=v.Yjl({name:"json",type:u,pure:!1,standalone:!0}),u})(),ms=(()=>{class u{constructor(f){this.differs=f,this.keyValues=[],this.compareFn=Wn}transform(f,w=Wn){if(!f||!(f instanceof Map)&&"object"!=typeof f)return null;this.differ||(this.differ=this.differs.find(f).create());const R=this.differ.diff(f),Y=w!==this.compareFn;return R&&(this.keyValues=[],R.forEachItem(ue=>{this.keyValues.push(
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ai(u,g){return{key:u,value:g}}(ue.key,ue.currentValue))})),(R||Y)&&(this.keyValues.sort(w),this.compareFn=w),this.keyValues}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.aQg,16))},u.\u0275pipe=v.Yjl({name:"keyvalue",type:u,pure:!1,standalone:!0}),u})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Wn(u,g){const f=u.key,w=g.key;if(f===w)return 0;if(void 0===f)return 1;if(void 0===w)return-1;if(null===f)return 1;if(null===w)return-1;if("string"==typeof f&&"string"==typeof w)return f<w?-1:1;if("number"==typeof f&&"number"==typeof w)return f-w;if("boolean"==typeof f&&"boolean"==typeof w)return f<w?-1:1;const R=String(f),Y=String(w);return R==Y?0:R<Y?-1:1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ii=(()=>{class u{constructor(f){this._locale=f}transform(f,w,R){if(!function Ai(u){return!(null==u||""===u||u!=u)}(f))return null;R=R||this._locale;try{return function ut(u,g,f){return function Ct(u,g,f,w,R,Y,ue=!1){let Ae="",Ve=!1;if(isFinite(u)){let We=function ur(u){let w,R,Y,ue,Ae,g=Math.abs(u)+"",f=0;for((R=g.indexOf(z))>-1&&(g=g.replace(z,"")),(Y=g.search(/e/i))>0?(R<0&&(R=Y),R+=+g.slice(Y+1),g=g.substring(0,Y)):R<0&&(R=g.length),Y=0;g.charAt(Y)===$;Y++);if(Y===(Ae=g.length))w=[0],R=1;else{for(Ae--;g.charAt(Ae)===$;)Ae--;for(R-=Y,w=[],ue=0;Y<=Ae;Y++,ue++)w[ue]=Number(g.charAt(Y))}return R>22&&(w=w.splice(0,21),f=R-1,R=1),{digits:w,exponent:f,integerLen:R}}(u);ue&&(We=function $n(u){if(0===u.digits[0])return u;const g=u.digits.length-u.integerLen;return u.exponent?u.exponent+=2:(0===g?u.digits.push(0,0):1===g&&u.digits.push(0),u.integerLen+=2),u}(We));let rt=g.minInt,et=g.minFrac,It=g.maxFrac;if(Y){const pn=Y.match(yn);if(null===pn)throw new Error(`${Y} is not a valid digit info`);const tn=pn[1],En=pn[3],Bi=pn[5];null!=tn&&(rt=nn(tn)),null!=En&&(et=nn(En)),null!=Bi?It=nn(Bi):null!=En&&et>It&&(It=et)}!function cr(u,g,f){if(g>f)throw new Error(`The minimum number of digits after fraction (${g}) is higher than the maximum (${f}).`);let w=u.digits,R=w.length-u.integerLen;const Y=Math.min(Math.max(g,R),f);let ue=Y+u.integerLen,Ae=w[ue];if(ue>0){w.splice(Math.max(u.integerLen,ue));for(let et=ue;et<w.length;et++)w[et]=0}else{R=Math.max(0,R),u.integerLen=1,w.length=Math.max(1,ue=Y+1),w[0]=0;for(let et=1;et<ue;et++)w[et]=0}if(Ae>=5)if(ue-1<0){for(let et=0;et>ue;et--)w.unshift(0),u.integerLen++;w.unshift(1),u.integerLen++}else w[ue-1]++;for(;R<Math.max(0,Y);R++)w.push(0);let Ve=0!==Y;const We=g+u.integerLen,rt=w.reduceRight(function(et,It,mt,Dt){return Dt[mt]=(It+=et)<10?It:It-10,Ve&&(0===Dt[mt]&&mt>=We?Dt.pop():Ve=!1),It>=10?1:0},0);rt&&(w.unshift(rt),u.integerLen++)}(We,et,It);let mt=We.digits,Dt=We.integerLen;const Dn=We.exponent;let Qt=[];for(Ve=mt.every(pn=>!pn);Dt<rt;Dt++)mt.unshift(0);for(;Dt<0;Dt++)mt.unshift(0);Dt>0?Qt=mt.splice(Dt,mt.length):(Qt=mt,mt=[0]);const Kt=[];for(mt.length>=g.lgSize&&Kt.unshift(mt.splice(-g.lgSize,mt.length).join(""));mt.length>g.gSize;)Kt.unshift(mt.splice(-g.gSize,mt.length).join(""));mt.length&&Kt.unshift(mt.join("")),Ae=Kt.join(Ye(f,w)),Qt.length&&(Ae+=Ye(f,R)+Qt.join("")),Dn&&(Ae+=Ye(f,le.Exponential)+"+"+Dn)}else Ae=Ye(f,le.Infinity);return Ae=u<0&&!Ve?g.negPre+Ae+g.negSuf:g.posPre+Ae+g.posSuf,Ae}(u,function An(u,g="-"){const f={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},w=u.split(";"),R=w[0],Y=w[1],ue=-1!==R.indexOf(z)?R.split(z):[R.substring(0,R.lastIndexOf($)+1),R.substring(R.lastIndexOf($)+1)],Ae=ue[0],Ve=ue[1]||"";f.posPre=Ae.substring(0,Ae.indexOf("#"));for(let rt=0;rt<Ve.length;rt++){const et=Ve.charAt(rt);et===$?f.minFrac=f.maxFrac=rt+1:"#"===et?f.maxFrac=rt+1:f.posSuf+=et}const We=Ae.split(",");if(f.gSize=We[1]?We[1].length:0,f.lgSize=We[2]||We[1]?(We[2]||We[1]).length:0,Y){const rt=R.length-f.posPre.length-f.posSuf.length,et=Y.indexOf("#");f.negPre=Y.substring(0,et).replace(/'/g,""),f.negSuf=Y.slice(et+rt).replace(/'/g,"")}else f.negPre=g+f.posPre,f.negSuf=f.posSuf;return f}(function kt(u,g){return(0,v.cg1)(u)[v.wAp.NumberFormats][g]}(g,Se.Decimal),Ye(g,le.MinusSign)),g,le.Group,le.Decimal,f)}(function Cr(u){if("string"==typeof u&&!isNaN(Number(u)-parseFloat(u)))return Number(u);if("number"!=typeof u)throw new Error(`${u} is not a number`);return u}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(f),R,w)}catch(Y){throw zn()}}}return u.\u0275fac=function(f){return new(f||u)(v.Y36(v.soG,16))},u.\u0275pipe=v.Yjl({name:"number",type:u,pure:!0,standalone:!0}),u})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Ri=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=v.oAB({type:u}),u.\u0275inj=v.cJS({}),u})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ar="browser";function vs(u){return u===Ar}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Fn=(()=>{class u{}return u.\u0275prov=(0,v.Yz7)({token:u,providedIn:"root",factory:()=>new ci((0,v.LFG)(oe),window)}),u})();class ci{constructor(g,f){this.document=g,this.window=f,this.offset=()=>[0,0]}setOffset(g){this.offset=Array.isArray(g)?()=>g:g}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(g){this.supportsScrolling()&&this.window.scrollTo(g[0],g[1])}scrollToAnchor(g){if(!this.supportsScrolling())return;const f=function Cn(u,g){const f=u.getElementById(g)||u.getElementsByName(g)[0];if(f)return f;if("function"==typeof u.createTreeWalker&&u.body&&(u.body.createShadowRoot||u.body.attachShadow)){const w=u.createTreeWalker(u.body,NodeFilter.SHOW_ELEMENT);let R=w.currentNode;for(;R;){const Y=R.shadowRoot;if(Y){const ue=Y.getElementById(g)||Y.querySelector(`[name="${g}"]`);if(ue)return ue}R=w.nextNode()}}return null}(this.document,g);f&&(this.scrollToElement(f),f.focus())}setHistoryScrollRestoration(g){if(this.supportScrollRestoration()){const f=this.window.history;f&&f.scrollRestoration&&(f.scrollRestoration=g)}}scrollToElement(g){const f=g.getBoundingClientRect(),w=f.left+this.window.pageXOffset,R=f.top+this.window.pageYOffset,Y=this.offset();this.window.scrollTo(w-Y[0],R-Y[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const g=Gn(this.window.history)||Gn(Object.getPrototypeOf(this.window.history));return!(!g||!g.writable&&!g.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Gn(u){return Object.getOwnPropertyDescriptor(u,"scrollRestoration")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ts{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,529:(ze,fe,C)=>{"use strict";C.d(fe,{JF:()=>L,TP:()=>bt,Zn:()=>ye,eN:()=>Ne});var v=C(6895),A=C(4650),O=C(9646),W=C(9751),Z=C(4351),Q=C(9300),oe=C(4004);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class te{}class G{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ee{constructor(k){this.normalizedNames=new Map,this.lazyUpdate=null,k?this.lazyInit="string"==typeof k?()=>{this.headers=new Map,k.split("\n").forEach(x=>{const ne=x.indexOf(":");if(ne>0){const de=x.slice(0,ne),Ze=de.toLowerCase(),Xe=x.slice(ne+1).trim();this.maybeSetNormalizedName(de,Ze),this.headers.has(Ze)?this.headers.get(Ze).push(Xe):this.headers.set(Ze,[Xe])}})}:()=>{this.headers=new Map,Object.keys(k).forEach(x=>{let ne=k[x];const de=x.toLowerCase();"string"==typeof ne&&(ne=[ne]),ne.length>0&&(this.headers.set(de,ne),this.maybeSetNormalizedName(x,de))})}:this.headers=new Map}has(k){return this.init(),this.headers.has(k.toLowerCase())}get(k){this.init();const x=this.headers.get(k.toLowerCase());return x&&x.length>0?x[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(k){return this.init(),this.headers.get(k.toLowerCase())||null}append(k,x){return this.clone({name:k,value:x,op:"a"})}set(k,x){return this.clone({name:k,value:x,op:"s"})}delete(k,x){return this.clone({name:k,value:x,op:"d"})}maybeSetNormalizedName(k,x){this.normalizedNames.has(x)||this.normalizedNames.set(x,k)}init(){this.lazyInit&&(this.lazyInit instanceof ee?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(k=>this.applyUpdate(k)),this.lazyUpdate=null))}copyFrom(k){k.init(),Array.from(k.headers.keys()).forEach(x=>{this.headers.set(x,k.headers.get(x)),this.normalizedNames.set(x,k.normalizedNames.get(x))})}clone(k){const x=new ee;return x.lazyInit=this.lazyInit&&this.lazyInit instanceof ee?this.lazyInit:this,x.lazyUpdate=(this.lazyUpdate||[]).concat([k]),x}applyUpdate(k){const x=k.name.toLowerCase();switch(k.op){case"a":case"s":let ne=k.value;if("string"==typeof ne&&(ne=[ne]),0===ne.length)return;this.maybeSetNormalizedName(k.name,x);const de=("a"===k.op?this.headers.get(x):void 0)||[];de.push(...ne),this.headers.set(x,de);break;case"d":const Ze=k.value;if(Ze){let Xe=this.headers.get(x);if(!Xe)return;Xe=Xe.filter(Be=>-1===Ze.indexOf(Be)),0===Xe.length?(this.headers.delete(x),this.normalizedNames.delete(x)):this.headers.set(x,Xe)}else this.headers.delete(x),this.normalizedNames.delete(x)}}forEach(k){this.init(),Array.from(this.normalizedNames.keys()).forEach(x=>k(this.normalizedNames.get(x),this.headers.get(x)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ie{encodeKey(k){return Oe(k)}encodeValue(k){return Oe(k)}decodeKey(k){return decodeURIComponent(k)}decodeValue(k){return decodeURIComponent(k)}}const Ce=/%(\d[a-f0-9])/gi,ce={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Oe(K){return encodeURIComponent(K).replace(Ce,(k,x)=>ce[x]??k)}function pe(K){return`${K}`}class Te{constructor(k={}){if(this.updates=null,this.cloneFrom=null,this.encoder=k.encoder||new ie,k.fromString){if(k.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Pe(K,k){const x=new Map;return K.length>0&&K.replace(/^\?/,"").split("&").forEach(de=>{const Ze=de.indexOf("="),[Xe,Be]=-1==Ze?[k.decodeKey(de),""]:[k.decodeKey(de.slice(0,Ze)),k.decodeValue(de.slice(Ze+1))],Fe=x.get(Xe)||[];Fe.push(Be),x.set(Xe,Fe)}),x}(k.fromString,this.encoder)}else k.fromObject?(this.map=new Map,Object.keys(k.fromObject).forEach(x=>{const ne=k.fromObject[x],de=Array.isArray(ne)?ne.map(pe):[pe(ne)];this.map.set(x,de)})):this.map=null}has(k){return this.init(),this.map.has(k)}get(k){this.init();const x=this.map.get(k);return x?x[0]:null}getAll(k){return this.init(),this.map.get(k)||null}keys(){return this.init(),Array.from(this.map.keys())}append(k,x){return this.clone({param:k,value:x,op:"a"})}appendAll(k){const x=[];return Object.keys(k).forEach(ne=>{const de=k[ne];Array.isArray(de)?de.forEach(Ze=>{x.push({param:ne,value:Ze,op:"a"})}):x.push({param:ne,value:de,op:"a"})}),this.clone(x)}set(k,x){return this.clone({param:k,value:x,op:"s"})}delete(k,x){return this.clone({param:k,value:x,op:"d"})}toString(){return this.init(),this.keys().map(k=>{const x=this.encoder.encodeKey(k);return this.map.get(k).map(ne=>x+"="+this.encoder.encodeValue(ne)).join("&")}).filter(k=>""!==k).join("&")}clone(k){const x=new Te({encoder:this.encoder});return x.cloneFrom=this.cloneFrom||this,x.updates=(this.updates||[]).concat(k),x}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(k=>this.map.set(k,this.cloneFrom.map.get(k))),this.updates.forEach(k=>{switch(k.op){case"a":case"s":const x=("a"===k.op?this.map.get(k.param):void 0)||[];x.push(pe(k.value)),this.map.set(k.param,x);break;case"d":if(void 0===k.value){this.map.delete(k.param);break}{let ne=this.map.get(k.param)||[];const de=ne.indexOf(pe(k.value));-1!==de&&ne.splice(de,1),ne.length>0?this.map.set(k.param,ne):this.map.delete(k.param)}}}),this.cloneFrom=this.updates=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class vt{constructor(){this.map=new Map}set(k,x){return this.map.set(k,x),this}get(k){return this.map.has(k)||this.map.set(k,k.defaultValue()),this.map.get(k)}delete(k){return this.map.delete(k),this}has(k){return this.map.has(k)}keys(){return this.map.keys()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function j(K){return typeof ArrayBuffer<"u"&&K instanceof ArrayBuffer}function me(K){return typeof Blob<"u"&&K instanceof Blob}function De(K){return typeof FormData<"u"&&K instanceof FormData}class Se{constructor(k,x,ne,de){let Ze;if(this.url=x,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=k.toUpperCase(),function we(K){switch(K){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||de?(this.body=void 0!==ne?ne:null,Ze=de):Ze=ne,Ze&&(this.reportProgress=!!Ze.reportProgress,this.withCredentials=!!Ze.withCredentials,Ze.responseType&&(this.responseType=Ze.responseType),Ze.headers&&(this.headers=Ze.headers),Ze.context&&(this.context=Ze.context),Ze.params&&(this.params=Ze.params)),this.headers||(this.headers=new ee),this.context||(this.context=new vt),this.params){const Xe=this.params.toString();if(0===Xe.length)this.urlWithParams=x;else{const Be=x.indexOf("?");this.urlWithParams=x+(-1===Be?"?":Be<x.length-1?"&":"")+Xe}}else this.params=new Te,this.urlWithParams=x}serializeBody(){return null===this.body?null:j(this.body)||me(this.body)||De(this.body)||function Ee(K){return typeof URLSearchParams<"u"&&K instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Te?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||De(this.body)?null:me(this.body)?this.body.type||null:j(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Te?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(k={}){const x=k.method||this.method,ne=k.url||this.url,de=k.responseType||this.responseType,Ze=void 0!==k.body?k.body:this.body,Xe=void 0!==k.withCredentials?k.withCredentials:this.withCredentials,Be=void 0!==k.reportProgress?k.reportProgress:this.reportProgress;let Fe=k.headers||this.headers,Lt=k.params||this.params;const _t=k.context??this.context;return void 0!==k.setHeaders&&(Fe=Object.keys(k.setHeaders).reduce((cn,ht)=>cn.set(ht,k.setHeaders[ht]),Fe)),k.setParams&&(Lt=Object.keys(k.setParams).reduce((cn,ht)=>cn.set(ht,k.setParams[ht]),Lt)),new Se(x,ne,Ze,{params:Lt,headers:Fe,context:_t,reportProgress:Be,responseType:de,withCredentials:Xe})}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Ie=(()=>((Ie=Ie||{})[Ie.Sent=0]="Sent",Ie[Ie.UploadProgress=1]="UploadProgress",Ie[Ie.ResponseHeader=2]="ResponseHeader",Ie[Ie.DownloadProgress=3]="DownloadProgress",Ie[Ie.Response=4]="Response",Ie[Ie.User=5]="User",Ie))();class ae{constructor(k,x=200,ne="OK"){this.headers=k.headers||new ee,this.status=void 0!==k.status?k.status:x,this.statusText=k.statusText||ne,this.url=k.url||null,this.ok=this.status>=200&&this.status<300}}class se extends ae{constructor(k={}){super(k),this.type=Ie.ResponseHeader}clone(k={}){return new se({headers:k.headers||this.headers,status:void 0!==k.status?k.status:this.status,statusText:k.statusText||this.statusText,url:k.url||this.url||void 0})}}class ye extends ae{constructor(k={}){super(k),this.type=Ie.Response,this.body=void 0!==k.body?k.body:null}clone(k={}){return new ye({body:void 0!==k.body?k.body:this.body,headers:k.headers||this.headers,status:void 0!==k.status?k.status:this.status,statusText:k.statusText||this.statusText,url:k.url||this.url||void 0})}}class le extends ae{constructor(k){super(k,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${k.url||"(unknown url)"}`:`Http failure response for ${k.url||"(unknown url)"}: ${k.status} ${k.statusText}`,this.error=k.error||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Le(K,k){return{body:k,headers:K.headers,context:K.context,observe:K.observe,params:K.params,reportProgress:K.reportProgress,responseType:K.responseType,withCredentials:K.withCredentials}}let Ne=(()=>{class K{constructor(x){this.handler=x}request(x,ne,de={}){let Ze;if(x instanceof Se)Ze=x;else{let Fe,Lt;Fe=de.headers instanceof ee?de.headers:new ee(de.headers),de.params&&(Lt=de.params instanceof Te?de.params:new Te({fromObject:de.params})),Ze=new Se(x,ne,void 0!==de.body?de.body:null,{headers:Fe,context:de.context,params:Lt,reportProgress:de.reportProgress,responseType:de.responseType||"json",withCredentials:de.withCredentials})}const Xe=(0,O.of)(Ze).pipe((0,Z.b)(Fe=>this.handler.handle(Fe)));if(x instanceof Se||"events"===de.observe)return Xe;const Be=Xe.pipe((0,Q.h)(Fe=>Fe instanceof ye));switch(de.observe||"body"){case"body":switch(Ze.responseType){case"arraybuffer":return Be.pipe((0,oe.U)(Fe=>{if(null!==Fe.body&&!(Fe.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return Fe.body}));case"blob":return Be.pipe((0,oe.U)(Fe=>{if(null!==Fe.body&&!(Fe.body instanceof Blob))throw new Error("Response is not a Blob.");return Fe.body}));case"text":return Be.pipe((0,oe.U)(Fe=>{if(null!==Fe.body&&"string"!=typeof Fe.body)throw new Error("Response is not a string.");return Fe.body}));default:return Be.pipe((0,oe.U)(Fe=>Fe.body))}case"response":return Be;default:throw new Error(`Unreachable: unhandled observe type ${de.observe}}`)}}delete(x,ne={}){return this.request("DELETE",x,ne)}get(x,ne={}){return this.request("GET",x,ne)}head(x,ne={}){return this.request("HEAD",x,ne)}jsonp(x,ne){return this.request("JSONP",x,{params:(new Te).append(ne,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(x,ne={}){return this.request("OPTIONS",x,ne)}patch(x,ne,de={}){return this.request("PATCH",x,Le(de,ne))}post(x,ne,de={}){return this.request("POST",x,Le(de,ne))}put(x,ne,de={}){return this.request("PUT",x,Le(de,ne))}}return K.\u0275fac=function(x){return new(x||K)(A.LFG(te))},K.\u0275prov=A.Yz7({token:K,factory:K.\u0275fac}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class st{constructor(k,x){this.next=k,this.interceptor=x}handle(k){return this.interceptor.intercept(k,this.next)}}const bt=new A.OlP("HTTP_INTERCEPTORS");let gt=(()=>{class K{intercept(x,ne){return ne.handle(x)}}return K.\u0275fac=function(x){return new(x||K)},K.\u0275prov=A.Yz7({token:K,factory:K.\u0275fac}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const on=/^\)\]\}',?\n/;let Qe=(()=>{class K{constructor(x){this.xhrFactory=x}handle(x){if("JSONP"===x.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new W.y(ne=>{const de=this.xhrFactory.build();if(de.open(x.method,x.urlWithParams),x.withCredentials&&(de.withCredentials=!0),x.headers.forEach((Mt,Pt)=>de.setRequestHeader(Mt,Pt.join(","))),x.headers.has("Accept")||de.setRequestHeader("Accept","application/json, text/plain, */*"),!x.headers.has("Content-Type")){const Mt=x.detectContentTypeHeader();null!==Mt&&de.setRequestHeader("Content-Type",Mt)}if(x.responseType){const Mt=x.responseType.toLowerCase();de.responseType="json"!==Mt?Mt:"text"}const Ze=x.serializeBody();let Xe=null;const Be=()=>{if(null!==Xe)return Xe;const Mt=de.statusText||"OK",Pt=new ee(de.getAllResponseHeaders()),qt=function Un(K){return"responseURL"in K&&K.responseURL?K.responseURL:/^X-Request-URL:/m.test(K.getAllResponseHeaders())?K.getResponseHeader("X-Request-URL"):null}(de)||x.url;return Xe=new se({headers:Pt,status:de.status,statusText:Mt,url:qt}),Xe},Fe=()=>{let{headers:Mt,status:Pt,statusText:qt,url:dn}=Be(),Zt=null;204!==Pt&&(Zt=typeof de.response>"u"?de.responseText:de.response),0===Pt&&(Pt=Zt?200:0);let kn=Pt>=200&&Pt<300;if("json"===x.responseType&&"string"==typeof Zt){const Bn=Zt;Zt=Zt.replace(on,"");try{Zt=""!==Zt?JSON.parse(Zt):null}catch(In){Zt=Bn,kn&&(kn=!1,Zt={error:In,text:Zt})}}kn?(ne.next(new ye({body:Zt,headers:Mt,status:Pt,statusText:qt,url:dn||void 0})),ne.complete()):ne.error(new le({error:Zt,headers:Mt,status:Pt,statusText:qt,url:dn||void 0}))},Lt=Mt=>{const{url:Pt}=Be(),qt=new le({error:Mt,status:de.status||0,statusText:de.statusText||"Unknown Error",url:Pt||void 0});ne.error(qt)};let _t=!1;const cn=Mt=>{_t||(ne.next(Be()),_t=!0);let Pt={type:Ie.DownloadProgress,loaded:Mt.loaded};Mt.lengthComputable&&(Pt.total=Mt.total),"text"===x.responseType&&!!de.responseText&&(Pt.partialText=de.responseText),ne.next(Pt)},ht=Mt=>{let Pt={type:Ie.UploadProgress,loaded:Mt.loaded};Mt.lengthComputable&&(Pt.total=Mt.total),ne.next(Pt)};return de.addEventListener("load",Fe),de.addEventListener("error",Lt),de.addEventListener("timeout",Lt),de.addEventListener("abort",Lt),x.reportProgress&&(de.addEventListener("progress",cn),null!==Ze&&de.upload&&de.upload.addEventListener("progress",ht)),de.send(Ze),ne.next({type:Ie.Sent}),()=>{de.removeEventListener("error",Lt),de.removeEventListener("abort",Lt),de.removeEventListener("load",Fe),de.removeEventListener("timeout",Lt),x.reportProgress&&(de.removeEventListener("progress",cn),null!==Ze&&de.upload&&de.upload.removeEventListener("progress",ht)),de.readyState!==de.DONE&&de.abort()}})}}return K.\u0275fac=function(x){return new(x||K)(A.LFG(v.JF))},K.\u0275prov=A.Yz7({token:K,factory:K.\u0275fac}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const He=new A.OlP("XSRF_COOKIE_NAME"),Ue=new A.OlP("XSRF_HEADER_NAME");class at{}let wt=(()=>{class K{constructor(x,ne,de){this.doc=x,this.platform=ne,this.cookieName=de,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const x=this.doc.cookie||"";return x!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,v.Mx)(x,this.cookieName),this.lastCookieString=x),this.lastToken}}return K.\u0275fac=function(x){return new(x||K)(A.LFG(v.K0),A.LFG(A.Lbi),A.LFG(He))},K.\u0275prov=A.Yz7({token:K,factory:K.\u0275fac}),K})(),Xt=(()=>{class K{constructor(x,ne){this.tokenService=x,this.headerName=ne}intercept(x,ne){const de=x.url.toLowerCase();if("GET"===x.method||"HEAD"===x.method||de.startsWith("http://")||de.startsWith("https://"))return ne.handle(x);const Ze=this.tokenService.getToken();return null!==Ze&&!x.headers.has(this.headerName)&&(x=x.clone({headers:x.headers.set(this.headerName,Ze)})),ne.handle(x)}}return K.\u0275fac=function(x){return new(x||K)(A.LFG(at),A.LFG(Ue))},K.\u0275prov=A.Yz7({token:K,factory:K.\u0275fac}),K})(),J=(()=>{class K{constructor(x,ne){this.backend=x,this.injector=ne,this.chain=null}handle(x){if(null===this.chain){const ne=this.injector.get(bt,[]);this.chain=ne.reduceRight((de,Ze)=>new st(de,Ze),this.backend)}return this.chain.handle(x)}}return K.\u0275fac=function(x){return new(x||K)(A.LFG(G),A.LFG(A.zs3))},K.\u0275prov=A.Yz7({token:K,factory:K.\u0275fac}),K})(),V=(()=>{class K{static disable(){return{ngModule:K,providers:[{provide:Xt,useClass:gt}]}}static withOptions(x={}){return{ngModule:K,providers:[x.cookieName?{provide:He,useValue:x.cookieName}:[],x.headerName?{provide:Ue,useValue:x.headerName}:[]]}}}return K.\u0275fac=function(x){return new(x||K)},K.\u0275mod=A.oAB({type:K}),K.\u0275inj=A.cJS({providers:[Xt,{provide:bt,useExisting:Xt,multi:!0},{provide:at,useClass:wt},{provide:He,useValue:"XSRF-TOKEN"},{provide:Ue,useValue:"X-XSRF-TOKEN"}]}),K})(),L=(()=>{class K{}return K.\u0275fac=function(x){return new(x||K)},K.\u0275mod=A.oAB({type:K}),K.\u0275inj=A.cJS({providers:[Ne,{provide:te,useClass:J},Qe,{provide:G,useExisting:Qe}],imports:[V.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4650:(ze,fe,C)=>{"use strict";C.d(fe,{$8M:()=>Ts,$Z:()=>yh,AFp:()=>xg,ALo:()=>qp,AaK:()=>te,Akn:()=>ti,AsE:()=>Wu,BQk:()=>Ka,CHM:()=>Yr,CRH:()=>ug,CZH:()=>sl,CqO:()=>uf,D6c:()=>pC,DdM:()=>zp,EJc:()=>Aw,EpF:()=>af,F$t:()=>gf,F4k:()=>lf,FYo:()=>Zd,FiY:()=>No,G48:()=>Qw,Gf:()=>ag,GfV:()=>Qd,GkF:()=>ku,Gpc:()=>q,Gre:()=>Yf,Hsn:()=>mf,Ikx:()=>Gu,JOm:()=>vi,Jf7:()=>Xd,KtG:()=>Sr,LFG:()=>Mn,LMc:()=>mC,LSH:()=>Kl,Lbi:()=>bw,Lck:()=>CE,MAs:()=>sf,MMx:()=>nc,NdJ:()=>Vu,OlP:()=>Wt,Oqu:()=>zu,PXZ:()=>zw,Q6J:()=>Fu,QGY:()=>Bu,QP$:()=>On,QbO:()=>Mw,Qsj:()=>Jy,QtT:()=>Op,R0b:()=>Lr,RDi:()=>py,Rgc:()=>oa,SBq:()=>Go,SDv:()=>Rp,Sil:()=>Rw,Suo:()=>lg,TTD:()=>zr,TgZ:()=>za,Tol:()=>xf,Udp:()=>ju,W1O:()=>fg,WLB:()=>Wp,X6Q:()=>Zw,XFs:()=>J,Xpm:()=>dn,Xts:()=>Yl,Y36:()=>ao,YKP:()=>Np,YNc:()=>rf,Yjl:()=>si,Yz7:()=>yt,Z0I:()=>Ln,ZZ4:()=>Mc,_Bn:()=>Fp,_UZ:()=>Lu,_Vd:()=>Wo,_c5:()=>hC,_uU:()=>Hf,aQg:()=>Tc,c2e:()=>Tw,cJS:()=>Ye,cg1:()=>Ku,dDg:()=>Hw,dqk:()=>de,eFA:()=>Gg,ekj:()=>Uu,eoX:()=>$g,f3M:()=>Wc,g9A:()=>Ng,h0i:()=>Co,hGG:()=>fC,hij:()=>Za,iGM:()=>og,ifc:()=>ne,ip1:()=>Og,jDz:()=>kp,kEZ:()=>Gp,kL8:()=>sp,lG2:()=>Rn,lcZ:()=>Jp,lqb:()=>ks,lri:()=>jg,n5z:()=>Po,n_E:()=>el,oAB:()=>In,oxw:()=>pf,pQV:()=>Qu,qLn:()=>Ko,qOj:()=>Pu,qZA:()=>Wa,rWj:()=>Ug,sBO:()=>Xw,sIi:()=>Qo,s_b:()=>nl,soG:()=>ol,tb:()=>Lg,tp0:()=>Lo,uIk:()=>xu,vHH:()=>ce,vpe:()=>wi,wAp:()=>dt,xi3:()=>eg,xp6:()=>ih,ynx:()=>Ga,z2F:()=>al,zSh:()=>Xl,zs3:()=>Bs});var v=C(7579),A=C(727),O=C(9751),W=C(6451),Z=C(3099);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Q(e){for(let t in e)if(e[t]===Q)return t;throw Error("Could not find renamed property on target object.")}function oe(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function te(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(te).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function G(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ee=Q({__forward_ref__:Q});function q(e){return e.__forward_ref__=q,e.toString=function(){return te(this())},e}function ie(e){return Pe(e)?e():e}function Pe(e){return"function"==typeof e&&e.hasOwnProperty(ee)&&e.__forward_ref__===q}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ce extends Error{constructor(t,n){super(function Oe(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,n)),this.code=t}}function pe(e){return"string"==typeof e?e:null==e?"":String(e)}function j(e,t){throw new ce(-201,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function $e(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function yt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Ye(e){return{providers:e.providers||[],imports:e.imports||[]}}function kt(e){return on(e,Ue)||on(e,wt)}function Ln(e){return null!==kt(e)}function on(e,t){return e.hasOwnProperty(t)?e[t]:null}function He(e){return e&&(e.hasOwnProperty(at)||e.hasOwnProperty(Xt))?e[at]:null}const Ue=Q({\u0275prov:Q}),at=Q({\u0275inj:Q}),wt=Q({ngInjectableDef:Q}),Xt=Q({ngInjectorDef:Q});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var J=(()=>((J=J||{})[J.Default=0]="Default",J[J.Host=1]="Host",J[J.Self=2]="Self",J[J.SkipSelf=4]="SkipSelf",J[J.Optional=8]="Optional",J))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let I;function V(e){const t=I;return I=e,t}function L(e,t,n){const r=kt(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&J.Optional?null:void 0!==t?t:void j(te(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ve(e){return{toString:e}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var K=(()=>((K=K||{})[K.OnPush=0]="OnPush",K[K.Default=1]="Default",K))(),ne=(()=>{return(e=ne||(ne={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",ne;var e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const de=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Be={},Fe=[],Lt=Q({\u0275cmp:Q}),_t=Q({\u0275dir:Q}),cn=Q({\u0275pipe:Q}),ht=Q({\u0275mod:Q}),Mt=Q({\u0275fac:Q}),Pt=Q({__NG_ELEMENT_ID__:Q});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let qt=0;function dn(e){return ve(()=>{const n=!0===e.standalone,r={},i={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===K.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||Fe,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||ne.Emulated,id:"c"+qt++,styles:e.styles||Fe,_:null,setInput:null,schemas:e.schemas||null,tView:null},s=e.dependencies,o=e.features;return i.inputs=kr(e.inputs,r),i.outputs=kr(e.outputs),o&&o.forEach(p=>p(i)),i.directiveDefs=s?()=>("function"==typeof s?s():s).map(kn).filter(Bn):null,i.pipeDefs=s?()=>("function"==typeof s?s():s).map(Ht).filter(Bn):null,i})}function kn(e){return Rt(e)||Vt(e)}function Bn(e){return null!==e}function In(e){return ve(()=>({type:e.type,bootstrap:e.bootstrap||Fe,declarations:e.declarations||Fe,imports:e.imports||Fe,exports:e.exports||Fe,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function kr(e,t){if(null==e)return Be;const n={};for(const r in e)if(e.hasOwnProperty(r)){let i=e[r],s=i;Array.isArray(i)&&(s=i[1],i=i[0]),n[i]=r,t&&(t[i]=s)}return n}const Rn=dn;function si(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function Rt(e){return e[Lt]||null}function Vt(e){return e[_t]||null}function Ht(e){return e[cn]||null}function On(e){const t=Rt(e)||Vt(e)||Ht(e);return null!==t&&t.standalone}function yn(e,t){const n=e[ht]||null;if(!n&&!0===t)throw new Error(`Type ${te(e)} does not have '\u0275mod' property.`);return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Gt(e){return Array.isArray(e)&&"object"==typeof e[1]}function fn(e){return Array.isArray(e)&&!0===e[1]}function Er(e){return 0!=(8&e.flags)}function Hn(e){return 2==(2&e.flags)}function wr(e){return 1==(1&e.flags)}function xn(e){return null!==e.template}function Hr(e){return 0!=(256&e[2])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Wn(e,t){return e.hasOwnProperty(Mt)?e[Mt]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ii{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function zr(){return li}function li(e){return e.type.prototype.ngOnChanges&&(e.setInput=Cr),Ai}function Ai(){const e=ys(this),t=e?.current;if(t){const n=e.previous;if(n===Be)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Cr(e,t,n,r){const i=ys(e)||function Ri(e,t){return e[Pi]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,{previous:Be,current:null}),s=i.current||(i.current={}),o=i.previous,p=this.declaredInputs[n],m=o[p];s[p]=new Ii(m&&m.currentValue,t,o===Be),e[r]=t}zr.ngInherit=!0;const Pi="__ngSimpleChanges__";function ys(e){return e[Pi]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function en(e){for(;Array.isArray(e);)e=e[0];return e}function Gn(e,t){return en(t[e])}function Cn(e,t){return en(t[e.index])}function ts(e,t){return e.data[t]}function Rr(e,t){return e[t]}function Nt(e,t){const n=t[e];return Gt(n)?n:n[0]}function er(e){return 64==(64&e[2])}function jn(e,t){return null==t?null:e[t]}function Sn(e){e[18]=0}function Wr(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const tt={lFrame:b(null),bindingsEnabled:!0};function xr(){return tt.bindingsEnabled}function Re(){return tt.lFrame.lView}function Tt(){return tt.lFrame.tView}function Yr(e){return tt.lFrame.contextLView=e,e[8]}function Sr(e){return tt.lFrame.contextLView=null,e}function rn(){let e=xi();for(;null!==e&&64===e.type;)e=e.parent;return e}function xi(){return tt.lFrame.currentTNode}function di(){const e=tt.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function Kn(e,t){const n=tt.lFrame;n.currentTNode=e,n.isParent=t}function rs(){return tt.lFrame.isParent}function Fi(){tt.lFrame.isParent=!1}function zt(){const e=tt.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Yn(){return tt.lFrame.bindingIndex}function Zr(){return tt.lFrame.bindingIndex++}function gr(e){const t=tt.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function os(e){tt.lFrame.inI18n=e}function as(e,t){const n=tt.lFrame;n.bindingIndex=n.bindingRootIndex=e,ls(t)}function ls(e){tt.lFrame.currentDirectiveIndex=e}function Qs(){return tt.lFrame.currentQueryIndex}function hi(e){tt.lFrame.currentQueryIndex=e}function S(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function a(e,t,n){if(n&J.SkipSelf){let i=t,s=e;for(;!(i=i.parent,null!==i||n&J.Host||(i=S(s),null===i||(s=s[15],10&i.type))););if(null===i)return!1;t=i,e=s}const r=tt.lFrame=_();return r.currentTNode=t,r.lView=e,!0}function c(e){const t=_(),n=e[1];tt.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function _(){const e=tt.lFrame,t=null===e?null:e.child;return null===t?b(e):t}function b(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function P(){const e=tt.lFrame;return tt.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const u=P;function g(){const e=P();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function R(){return tt.lFrame.selectedIndex}function Y(e){tt.lFrame.selectedIndex=e}function ue(){const e=tt.lFrame;return ts(e.tView,e.selectedIndex)}function mt(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const s=e.data[n].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:p,ngAfterViewInit:m,ngAfterViewChecked:E,ngOnDestroy:T}=s;o&&(e.contentHooks||(e.contentHooks=[])).push(-n,o),p&&((e.contentHooks||(e.contentHooks=[])).push(n,p),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,p)),m&&(e.viewHooks||(e.viewHooks=[])).push(-n,m),E&&((e.viewHooks||(e.viewHooks=[])).push(n,E),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,E)),null!=T&&(e.destroyHooks||(e.destroyHooks=[])).push(n,T)}}function Dt(e,t,n){Kt(e,t,3,n)}function Dn(e,t,n,r){(3&e[2])===n&&Kt(e,t,n,r)}function Qt(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Kt(e,t,n,r){const s=r??-1,o=t.length-1;let p=0;for(let m=void 0!==r?65535&e[18]:0;m<o;m++)if("number"==typeof t[m+1]){if(p=t[m],null!=r&&p>=r)break}else t[m]<0&&(e[18]+=65536),(p<s||-1==s)&&(pn(e,n,t,m),e[18]=(4294901760&e[18])+m+2),m++}function pn(e,t,n,r){const i=n[r]<0,s=n[r+1],p=e[i?-n[r]:n[r]];if(i){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{s.call(p)}finally{}}}else try{s.call(p)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class En{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function At(e,t,n){let r=0;for(;r<n.length;){const i=n[r];if("number"==typeof i){if(0!==i)break;r++;const s=n[r++],o=n[r++],p=n[r++];e.setAttribute(t,o,p,s)}else{const s=i,o=n[++r];rr(s)?e.setProperty(t,s,o):e.setAttribute(t,s,o),r++}}return r}function an(e){return 3===e||4===e||6===e}function rr(e){return 64===e.charCodeAt(0)}function bn(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const i=t[r];"number"==typeof i?n=i:0===n||br(e,n,i,null,-1===n||2===n?t[++r]:null)}}return e}function br(e,t,n,r,i){let s=0,o=e.length;if(-1===t)o=-1;else for(;s<e.length;){const p=e[s++];if("number"==typeof p){if(p===t){o=-1;break}if(p>t){o=s-1;break}}}for(;s<e.length;){const p=e[s];if("number"==typeof p)break;if(p===n){if(null===r)return void(null!==i&&(e[s+1]=i));if(r===e[s+1])return void(e[s+2]=i)}s++,null!==r&&s++,null!==i&&s++}-1!==o&&(e.splice(o,0,t),s=o+1),e.splice(s++,0,n),null!==r&&e.splice(s++,0,r),null!==i&&e.splice(s++,0,i)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Yt(e){return-1!==e}function Fr(e){return 32767&e}function Jt(e,t){let n=function ws(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let mr=!0;function Nn(e){const t=mr;return mr=e,t}let dl=0;const ir={};function pi(e,t){const n=Ao(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Ss(r.data,e),Ss(t,null),Ss(r.blueprint,null));const i=Xs(e,t),s=e.injectorIndex;if(Yt(i)){const o=Fr(i),p=Jt(i,t),m=p[1].data;for(let E=0;E<8;E++)t[s+E]=p[o+E]|m[o+E]}return t[s+8]=i,s}function Ss(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Ao(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Xs(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,i=t;for(;null!==i;){if(r=ya(i),null===r)return-1;if(n++,i=i[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Hi(e,t,n){!function ua(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Pt)&&(r=n[Pt]),null==r&&(r=n[Pt]=dl++);const i=255&r;t.data[e+(i>>5)]|=1<<i}(e,t,n)}function ca(e,t,n){if(n&J.Optional||void 0!==e)return e;j()}function da(e,t,n,r){if(n&J.Optional&&void 0===r&&(r=null),0==(n&(J.Self|J.Host))){const i=e[9],s=V(void 0);try{return i?i.get(t,r,n&J.Optional):L(t,r,n&J.Optional)}finally{V(s)}}return ca(r,0,n)}function ha(e,t,n,r=J.Default,i){if(null!==e){if(1024&t[2]){const o=function kc(e,t,n,r,i){let s=e,o=t;for(;null!==s&&null!==o&&1024&o[2]&&!(256&o[2]);){const p=fa(s,o,n,r|J.Self,ir);if(p!==ir)return p;let m=s.parent;if(!m){const E=o[21];if(E){const T=E.get(n,ir,r);if(T!==ir)return T}m=ya(o),o=o[15]}s=m}return i}(e,t,n,r,ir);if(o!==ir)return o}const s=fa(e,t,n,r,ir);if(s!==ir)return s}return da(t,n,r,i)}function fa(e,t,n,r,i){const s=function ga(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Pt)?e[Pt]:void 0;return"number"==typeof t?t>=0?255&t:fl:t}(n);if("function"==typeof s){if(!a(t,e,r))return r&J.Host?ca(i,0,r):da(t,n,r,i);try{const o=s(r);if(null!=o||r&J.Optional)return o;j()}finally{u()}}else if("number"==typeof s){let o=null,p=Ao(e,t),m=-1,E=r&J.Host?t[16][6]:null;for((-1===p||r&J.SkipSelf)&&(m=-1===p?Xs(e,t):t[p+8],-1!==m&&Ms(r,!1)?(o=t[1],p=Fr(m),t=Jt(m,t)):p=-1);-1!==p;){const T=t[1];if(qs(s,p,T.data)){const F=pa(p,t,n,o,r,E);if(F!==ir)return F}m=t[p+8],-1!==m&&Ms(r,t[1].data[p+8]===E)&&qs(s,p,t)?(o=T,p=Fr(m),t=Jt(m,t)):p=-1}}return i}function pa(e,t,n,r,i,s){const o=t[1],p=o.data[e+8],T=ln(p,o,n,null==r?Hn(p)&&mr:r!=o&&0!=(3&p.type),i&J.Host&&s===p);return null!==T?bs(t,o,T,p):ir}function ln(e,t,n,r,i){const s=e.providerIndexes,o=t.data,p=1048575&s,m=e.directiveStart,T=s>>20,X=i?p+T:e.directiveEnd;for(let he=r?p:p+T;he<X;he++){const be=o[he];if(he<m&&n===be||he>=m&&be.type===n)return he}if(i){const he=o[m];if(he&&xn(he)&&he.type===n)return m}return null}function bs(e,t,n,r){let i=e[n];const s=t.data;if(function Bi(e){return e instanceof En}(i)){const o=i;o.resolving&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function it(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new ce(-200,`Circular dependency in DI detected for ${e}${n}`)}(function Te(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():pe(e)}(s[n]));const p=Nn(o.canSeeViewProviders);o.resolving=!0;const m=o.injectImpl?V(o.injectImpl):null;a(e,r,J.Default);try{i=e[n]=o.factory(void 0,s,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function It(e,t,n){const{ngOnChanges:r,ngOnInit:i,ngDoCheck:s}=t.type.prototype;if(r){const o=li(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,o)}i&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,i),s&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s))}(n,s[n],t)}finally{null!==m&&V(m),Nn(p),o.resolving=!1,u()}}return i}function qs(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Ms(e,t){return!(e&J.Self||e&J.Host&&t)}class ji{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return ha(this._tNode,this._lView,t,r,n)}}function fl(){return new ji(rn(),Re())}function Po(e){return ve(()=>{const t=e.prototype.constructor,n=t[Mt]||ma(t),r=Object.prototype;let i=Object.getPrototypeOf(e.prototype).constructor;for(;i&&i!==r;){const s=i[Mt]||ma(i);if(s&&s!==n)return s;i=Object.getPrototypeOf(i)}return s=>new s})}function ma(e){return Pe(e)?()=>{const t=ma(ie(e));return t&&t()}:Wn(e)}function ya(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ts(e){return function hl(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let i=0;for(;i<r;){const s=n[i];if(an(s))break;if(0===s)i+=2;else if("number"==typeof s)for(i++;i<r&&"string"==typeof n[i];)i++;else{if(s===t)return n[i+1];i+=2}}}return null}(rn(),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Qr="__parameters__";function mi(e,t,n){return ve(()=>{const r=function gi(e){return function(...n){if(e){const r=e(...n);for(const i in r)this[i]=r[i]}}}(t);function i(...s){if(this instanceof i)return r.apply(this,s),this;const o=new i(...s);return p.annotation=o,p;function p(m,E,T){const F=m.hasOwnProperty(Qr)?m[Qr]:Object.defineProperty(m,Qr,{value:[]})[Qr];for(;F.length<=T;)F.push(null);return(F[T]=F[T]||[]).push(o),m}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Wt{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=yt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function sr(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),sr(r,t)):t!==e&&t.push(r)}return t}function Xr(e,t){e.forEach(n=>Array.isArray(n)?Xr(n,t):t(n))}function Da(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ps(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Rs(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}function M(e,t,n){let r=U(e,t);return r>=0?e[1|r]=n:(r=~r,function h(e,t,n,r){let i=e.length;if(i==t)e.push(n,r);else if(1===i)e.push(r,e[0]),e[0]=n;else{for(i--,e.push(e[i-1],e[i]);i>t;)e[i]=e[i-2],i--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function H(e,t){const n=U(e,t);if(n>=0)return e[1|n]}function U(e,t){return function je(e,t,n){let r=0,i=e.length>>n;for(;i!==r;){const s=r+(i-r>>1),o=e[s<<n];if(t===o)return s<<n;o>t?i=s:r=s+1}return~(i<<n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,t,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const xs={},vl="__NG_DI_FLAG__",Ea="ngTempTokenPath",gm=/\n/gm,$c="__source";let xo;function eo(e){const t=xo;return xo=e,t}function ym(e,t=J.Default){if(void 0===xo)throw new ce(-203,!1);return null===xo?L(e,void 0,t):xo.get(e,t&J.Optional?null:void 0,t)}function Mn(e,t=J.Default){return(function N(){return I}()||ym)(ie(e),t)}function Wc(e,t=J.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),Mn(e,t)}function _l(e){const t=[];for(let n=0;n<e.length;n++){const r=ie(e[n]);if(Array.isArray(r)){if(0===r.length)throw new ce(900,!1);let i,s=J.Default;for(let o=0;o<r.length;o++){const p=r[o],m=vm(p);"number"==typeof m?-1===m?i=p.token:s|=m:i=p}t.push(Mn(i,s))}else t.push(Mn(r))}return t}function Fo(e,t){return e[vl]=t,e.prototype[vl]=t,e}function vm(e){return e[vl]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const No=Fo(mi("Optional"),8),Lo=Fo(mi("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var vi=(()=>((vi=vi||{})[vi.Important=1]="Important",vi[vi.DashCase=2]="DashCase",vi))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const xm=/^>|^->|<!--|-->|--!>|<!-$/g,Fm=/(<|>)/;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Sl=new Map;let Lm=0;const Ml="__ngContext__";function Qn(e,t){Gt(t)?(e[Ml]=t[20],function Bm(e){Sl.set(e[20],e)}(t)):e[Ml]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Tl;function Il(e,t){return Tl(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ho(e){const t=e[3];return fn(t)?t[3]:t}function Al(e){return dd(e[13])}function Pl(e){return dd(e[4])}function dd(e){for(;null!==e&&!fn(e);)e=e[4];return e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function no(e,t,n,r,i){if(null!=r){let s,o=!1;fn(r)?s=r:Gt(r)&&(o=!0,r=r[0]);const p=en(r);0===e&&null!==n?null==i?yd(t,n,p):Fs(t,n,p,i||null,!0):1===e&&null!==n?Fs(t,n,p,i||null,!0):2===e?kl(t,p,o):3===e&&t.destroyNode(p),null!=s&&function uy(e,t,n,r,i){const s=n[7];s!==en(n)&&no(t,e,r,s,i);for(let p=10;p<n.length;p++){const m=n[p];jo(m[1],m,e,t,r,s)}}(t,e,s,n,i)}}function Rl(e,t){return e.createText(t)}function hd(e,t,n){e.setValue(t,n)}function Xm(e,t){return e.createComment(function rd(e){return e.replace(xm,t=>t.replace(Fm,"\u200b$1\u200b"))}(t))}function Ol(e,t,n){return e.createElement(t,n)}function fd(e,t){const n=e[9],r=n.indexOf(t),i=t[3];512&t[2]&&(t[2]&=-513,Wr(i,-1)),n.splice(r,1)}function xl(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const i=r[17];null!==i&&i!==e&&fd(i,r),t>0&&(e[n-1][4]=r[4]);const s=Ps(e,10+t);!function qm(e,t){jo(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const o=s[19];null!==o&&o.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function pd(e,t){if(!(128&t[2])){const n=t[11];n.destroyNode&&jo(e,t,n,3,null,null),function ty(e){let t=e[13];if(!t)return Fl(e[1],e);for(;t;){let n=null;if(Gt(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)Gt(t)&&Fl(t[1],t),t=t[3];null===t&&(t=e),Gt(t)&&Fl(t[1],t),n=t&&t[4]}t=n}}(t)}}function Fl(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function sy(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const i=t[n[r]];if(!(i instanceof En)){const s=n[r+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){const p=i[s[o]],m=s[o+1];try{m.call(p)}finally{}}else try{s.call(i)}finally{}}}}(e,t),function iy(e,t){const n=e.cleanup,r=t[7];let i=-1;if(null!==n)for(let s=0;s<n.length-1;s+=2)if("string"==typeof n[s]){const o=n[s+1],p="function"==typeof o?o(t):en(t[o]),m=r[i=n[s+2]],E=n[s+3];"boolean"==typeof E?p.removeEventListener(n[s],m,E):E>=0?r[i=E]():r[i=-E].unsubscribe(),s+=2}else{const o=r[i=n[s+1]];n[s].call(o)}if(null!==r){for(let s=i+1;s<r.length;s++)(0,r[s])();t[7]=null}}(e,t),1===t[1].type&&t[11].destroy();const n=t[17];if(null!==n&&fn(t[3])){n!==t[3]&&fd(n,t);const r=t[19];null!==r&&r.detachView(e)}!function Vm(e){Sl.delete(e[20])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)}}function gd(e,t,n){return md(e,t.parent,n)}function md(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const i=e.data[r.directiveStart].encapsulation;if(i===ne.None||i===ne.Emulated)return null}return Cn(r,n)}function Fs(e,t,n,r,i){e.insertBefore(t,n,r,i)}function yd(e,t,n){e.appendChild(t,n)}function vd(e,t,n,r,i){null!==r?Fs(e,t,n,r,i):yd(e,t,n)}function Sa(e,t){return e.parentNode(t)}function _d(e,t,n){return Ed(e,t,n)}function Dd(e,t,n){return 40&e.type?Cn(e,n):null}let Nl,Ta,jl,Ed=Dd;function wd(e,t){Ed=e,Nl=t}function ba(e,t,n,r){const i=gd(e,r,t),s=t[11],p=_d(r.parent||t[6],r,t);if(null!=i)if(Array.isArray(n))for(let m=0;m<n.length;m++)vd(s,i,n[m],p,!1);else vd(s,i,n,p,!1);void 0!==Nl&&Nl(s,r,t,n,i)}function Ma(e,t){if(null!==t){const n=t.type;if(3&n)return Cn(t,e);if(4&n)return Ll(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Ma(e,r);{const i=e[t.index];return fn(i)?Ll(-1,i):en(i)}}if(32&n)return Il(t,e)()||en(e[t.index]);{const r=Cd(e,t);return null!==r?Array.isArray(r)?r[0]:Ma(Ho(e[16]),r):Ma(e,t.next)}}return null}function Cd(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Ll(e,t){const n=10+e+1;if(n<t.length){const r=t[n],i=r[1].firstChild;if(null!==i)return Ma(r,i)}return t[7]}function kl(e,t,n){const r=Sa(e,t);r&&function oy(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}function Bl(e,t,n,r,i,s,o){for(;null!=n;){const p=r[n.index],m=n.type;if(o&&0===t&&(p&&Qn(en(p),r),n.flags|=4),64!=(64&n.flags))if(8&m)Bl(e,t,n.child,r,i,s,!1),no(t,e,i,p,s);else if(32&m){const E=Il(n,r);let T;for(;T=E();)no(t,e,i,T,s);no(t,e,i,p,s)}else 16&m?Sd(e,t,r,n,i,s):no(t,e,i,p,s);n=o?n.projectionNext:n.next}}function jo(e,t,n,r,i,s){Bl(n,r,e.firstChild,t,i,s,!1)}function Sd(e,t,n,r,i,s){const o=n[16],m=o[6].projection[r.projection];if(Array.isArray(m))for(let E=0;E<m.length;E++)no(t,e,i,m[E],s);else Bl(e,t,m,o[3],i,s,!0)}function bd(e,t,n){e.setAttribute(t,"style",n)}function Vl(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ns(e){return function Hl(){if(void 0===Ta&&(Ta=null,de.trustedTypes))try{Ta=de.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Ta}()?.createHTML(e)||e}function py(e){jl=e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Pd{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function cs(e){return e instanceof Pd?e.changingThisBreaksApplicationSecurity:e}class Ey{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const n=(new window.DOMParser).parseFromString(Ns(t),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(t):(n.removeChild(n.firstChild),n)}catch{return null}}}class wy{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const r=this.inertDocument.createElement("body");n.appendChild(r)}}getInertBodyElement(t){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=Ns(t),n;const r=this.inertDocument.createElement("body");return r.innerHTML=Ns(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(t){const n=t.attributes;for(let i=n.length-1;0<i;i--){const o=n.item(i).name;("xmlns:ns1"===o||0===o.indexOf("ns1:"))&&t.removeAttribute(o)}let r=t.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Sy=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function $l(e){return(e=String(e)).match(Sy)?e:"unsafe:"+e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function zi(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function $o(...e){const t={};for(const n of e)for(const r in n)n.hasOwnProperty(r)&&(t[r]=!0);return t}const Od=zi("area,br,col,hr,img,wbr"),xd=zi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Fd=zi("rp,rt"),zl=$o(Od,$o(xd,zi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),$o(Fd,zi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),$o(Fd,xd)),Wl=zi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Nd=$o(Wl,zi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),zi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"));
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Tn=(()=>((Tn=Tn||{})[Tn.NONE=0]="NONE",Tn[Tn.HTML=1]="HTML",Tn[Tn.STYLE=2]="STYLE",Tn[Tn.SCRIPT=3]="SCRIPT",Tn[Tn.URL=4]="URL",Tn[Tn.RESOURCE_URL=5]="RESOURCE_URL",Tn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Kl(e){const t=function zo(){const e=Re();return e&&e[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */();return t?t.sanitize(Tn.URL,e)||"":function Uo(e,t){const n=function Dy(e){return e instanceof Pd&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?cs(e):$l(pe(e))}const Yl=new Wt("ENVIRONMENT_INITIALIZER"),Bd=new Wt("INJECTOR",-1),Vd=new Wt("INJECTOR_DEF_TYPES");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Hd{get(t,n=xs){if(n===xs){const r=new Error(`NullInjectorError: No provider for ${te(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function By(...e){return{\u0275providers:jd(0,e)}}function jd(e,...t){const n=[],r=new Set;let i;return Xr(t,s=>{const o=s;Zl(o,n,[],r)&&(i||(i=[]),i.push(o))}),void 0!==i&&Ud(i,n),n}function Ud(e,t){for(let n=0;n<e.length;n++){const{providers:i}=e[n];Xr(i,s=>{t.push(s)})}}function Zl(e,t,n,r){if(!(e=ie(e)))return!1;let i=null,s=He(e);const o=!s&&Rt(e);if(s||o){if(o&&!o.standalone)return!1;i=e}else{const m=e.ngModule;if(s=He(m),!s)return!1;i=m}const p=r.has(i);if(o){if(p)return!1;if(r.add(i),o.dependencies){const m="function"==typeof o.dependencies?o.dependencies():o.dependencies;for(const E of m)Zl(E,t,n,r)}}else{if(!s)return!1;{if(null!=s.imports&&!p){let E;r.add(i);try{Xr(s.imports,T=>{Zl(T,t,n,r)&&(E||(E=[]),E.push(T))})}finally{}void 0!==E&&Ud(E,t)}if(!p){const E=Wn(i)||(()=>new i);t.push({provide:i,useFactory:E,deps:Fe},{provide:Vd,useValue:i,multi:!0},{provide:Yl,useValue:()=>Mn(i),multi:!0})}const m=s.providers;null==m||p||Xr(m,T=>{t.push(T)})}}return i!==e&&void 0!==e.providers}const Vy=Q({provide:String,useValue:Q});function Ql(e){return null!==e&&"object"==typeof e&&Vy in e}function Ls(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Xl=new Wt("Set Injector scope."),Pa={},jy={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ql;function Ra(){return void 0===ql&&(ql=new Hd),ql}class ks{}class Wd extends ks{constructor(t,n,r,i){super(),this.parent=n,this.source=r,this.scopes=i,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,eu(t,o=>this.processProvider(o)),this.records.set(Bd,ro(void 0,this)),i.has("environment")&&this.records.set(ks,ro(void 0,this));const s=this.records.get(Xl);null!=s&&"string"==typeof s.value&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Vd.multi,Fe,J.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=eo(this),r=V(void 0);try{return t()}finally{eo(n),V(r)}}get(t,n=xs,r=J.Default){this.assertNotDestroyed();const i=eo(this),s=V(void 0);try{if(!(r&J.SkipSelf)){let p=this.records.get(t);if(void 0===p){const m=function Gy(e){return"function"==typeof e||"object"==typeof e&&e instanceof Wt}(t)&&kt(t);p=m&&this.injectableDefInScope(m)?ro(Jl(t),Pa):null,this.records.set(t,p)}if(null!=p)return this.hydrate(t,p)}return(r&J.Self?Ra():this.parent).get(t,n=r&J.Optional&&n===xs?null:n)}catch(o){if("NullInjectorError"===o.name){if((o[Ea]=o[Ea]||[]).unshift(te(t)),i)throw o;return function _m(e,t,n,r){const i=e[Ea];throw t[$c]&&i.unshift(t[$c]),e.message=function Dm(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let i=te(t);if(Array.isArray(t))i=t.map(te).join(" -> ");else if("object"==typeof t){let s=[];for(let o in t)if(t.hasOwnProperty(o)){let p=t[o];s.push(o+":"+("string"==typeof p?JSON.stringify(p):te(p)))}i=`{${s.join(", ")}}`}return`${n}${r?"("+r+")":""}[${i}]: ${e.replace(gm,"\n  ")}`}("\n"+e.message,i,n,r),e.ngTokenPath=i,e[Ea]=null,e}(o,t,"R3InjectorError",this.source)}throw o}finally{V(s),eo(i)}}resolveInjectorInitializers(){const t=eo(this),n=V(void 0);try{const r=this.get(Yl.multi,Fe,J.Self);for(const i of r)i()}finally{eo(t),V(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(te(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ce(205,!1)}processProvider(t){let n=Ls(t=ie(t))?t:ie(t&&t.provide);const r=function $y(e){return Ql(e)?ro(void 0,e.useValue):ro(Gd(e),Pa)}(t);if(Ls(t)||!0!==t.multi)this.records.get(n);else{let i=this.records.get(n);i||(i=ro(void 0,Pa,!0),i.factory=()=>_l(i.multi),this.records.set(n,i)),n=t,i.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===Pa&&(n.value=jy,n.value=n.factory()),"object"==typeof n.value&&n.value&&function Wy(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=ie(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Jl(e){const t=kt(e),n=null!==t?t.factory:Wn(e);if(null!==n)return n;if(e instanceof Wt)throw new ce(204,!1);if(e instanceof Function)return function Uy(e){const t=e.length;if(t>0)throw Rs(t,"?"),new ce(204,!1);const n=function Un(e){const t=e&&(e[Ue]||e[wt]);if(t){const n=function Qe(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new ce(204,!1)}function Gd(e,t,n){let r;if(Ls(e)){const i=ie(e);return Wn(i)||Jl(i)}if(Ql(e))r=()=>ie(e.useValue);else if(function zd(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(..._l(e.deps||[]));else if(function $d(e){return!(!e||!e.useExisting)}(e))r=()=>Mn(ie(e.useExisting));else{const i=ie(e&&(e.useClass||e.provide));if(!function zy(e){return!!e.deps}(e))return Wn(i)||Jl(i);r=()=>new i(..._l(e.deps))}return r}function ro(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Ky(e){return!!e.\u0275providers}function eu(e,t){for(const n of e)Array.isArray(n)?eu(n,t):Ky(n)?eu(n.\u0275providers,t):t(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Kd{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Qy{resolveComponentFactory(t){throw function Zy(e){const t=Error(`No component factory found for ${te(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Wo=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.NULL=new Qy,e})();function Xy(){return io(rn(),Re())}function io(e,t){return new Go(Cn(e,t))}let Go=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=Xy,e})();function qy(e){return e instanceof Go?e.nativeElement:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Zd{}let Jy=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function ev(){const e=Re(),n=Nt(rn().index,e);return(Gt(n)?n:e)[11]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(),e})(),tv=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=yt({token:e,providedIn:"root",factory:()=>null}),e})();class Qd{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const nv=new Qd("14.2.12"),tu={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ru(e){return e.ngOriginalError}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ko{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&ru(t);for(;n&&ru(n);)n=ru(n);return n||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Xd(e){return e.ownerDocument.defaultView}function Wi(e){return e instanceof Function?e():e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Jd(e,t,n){let r=e.length;for(;;){const i=e.indexOf(t,n);if(-1===i)return i;if(0===i||e.charCodeAt(i-1)<=32){const s=t.length;if(i+s===r||e.charCodeAt(i+s)<=32)return i}n=i+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const eh="ng-template";function hv(e,t,n){let r=0;for(;r<e.length;){let i=e[r++];if(n&&"class"===i){if(i=e[r],-1!==Jd(i.toLowerCase(),t,0))return!0}else if(1===i){for(;r<e.length&&"string"==typeof(i=e[r++]);)if(i.toLowerCase()===t)return!0;return!1}}return!1}function th(e){return 4===e.type&&e.value!==eh}function fv(e,t,n){return t===(4!==e.type||n?e.value:eh)}function pv(e,t,n){let r=4;const i=e.attrs||[],s=function yv(e){for(let t=0;t<e.length;t++)if(an(e[t]))return t;return e.length}(i);let o=!1;for(let p=0;p<t.length;p++){const m=t[p];if("number"!=typeof m){if(!o)if(4&r){if(r=2|1&r,""!==m&&!fv(e,m,n)||""===m&&1===t.length){if(Jr(r))return!1;o=!0}}else{const E=8&r?m:t[++p];if(8&r&&null!==e.attrs){if(!hv(e.attrs,E,n)){if(Jr(r))return!1;o=!0}continue}const F=gv(8&r?"class":m,i,th(e),n);if(-1===F){if(Jr(r))return!1;o=!0;continue}if(""!==E){let X;X=F>s?"":i[F+1].toLowerCase();const he=8&r?X:null;if(he&&-1!==Jd(he,E,0)||2&r&&E!==X){if(Jr(r))return!1;o=!0}}}}else{if(!o&&!Jr(r)&&!Jr(m))return!1;if(o&&Jr(m))continue;o=!1,r=m|1&r}}return Jr(r)||o}function Jr(e){return 0==(1&e)}function gv(e,t,n,r){if(null===t)return-1;let i=0;if(r||!n){let s=!1;for(;i<t.length;){const o=t[i];if(o===e)return i;if(3===o||6===o)s=!0;else{if(1===o||2===o){let p=t[++i];for(;"string"==typeof p;)p=t[++i];continue}if(4===o)break;if(0===o){i+=4;continue}}i+=s?1:2}return-1}return function vv(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function nh(e,t,n=!1){for(let r=0;r<t.length;r++)if(pv(e,t[r],n))return!0;return!1}function _v(e,t){e:for(let n=0;n<t.length;n++){const r=t[n];if(e.length===r.length){for(let i=0;i<e.length;i++)if(e[i]!==r[i])continue e;return!0}}return!1}function rh(e,t){return e?":not("+t.trim()+")":t}function Dv(e){let t=e[0],n=1,r=2,i="",s=!1;for(;n<e.length;){let o=e[n];if("string"==typeof o)if(2&r){const p=e[++n];i+="["+o+(p.length>0?'="'+p+'"':"")+"]"}else 8&r?i+="."+o:4&r&&(i+=" "+o);else""!==i&&!Jr(o)&&(t+=rh(s,i),i=""),r=o,s=s||!Jr(r);n++}return""!==i&&(t+=rh(s,i)),t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const St={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ih(e){sh(Tt(),Re(),R()+e,!1)}function sh(e,t,n,r){if(!r)if(3==(3&t[2])){const s=e.preOrderCheckHooks;null!==s&&Dt(t,s,n)}else{const s=e.preOrderHooks;null!==s&&Dn(t,s,0,n)}Y(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function uh(e,t=null,n=null,r){const i=ch(e,t,n,r);return i.resolveInjectorInitializers(),i}function ch(e,t=null,n=null,r,i=new Set){const s=[n||Fe,By(e)];return r=r||("object"==typeof e?void 0:te(e)),new Wd(s,t||Ra(),r||null,i)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let Bs=(()=>{class e{static create(n,r){if(Array.isArray(n))return uh({name:""},r,n,"");{const i=n.name??"";return uh({name:i},n.parent,n.providers,i)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.THROW_IF_NOT_FOUND=xs,e.NULL=new Hd,e.\u0275prov=yt({token:e,providedIn:"any",factory:()=>Mn(Bd)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ao(e,t=J.Default){const n=Re();return null===n?Mn(e,t):ha(rn(),n,ie(e),t)}function yh(){throw new Error("invalid")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function xa(e,t){return e<<17|t<<2}function ei(e){return e>>17&32767}function lu(e){return 2|e}function Gi(e){return(131068&e)>>2}function uu(e,t){return-131069&e|t<<2}function cu(e){return 1|e}function Ih(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const i=n[r],s=n[r+1];if(-1!==s){const o=e.data[s];hi(i),o.contentQueries(2,t[s],s)}}}function La(e,t,n,r,i,s,o,p,m,E,T){const F=t.blueprint.slice();return F[0]=i,F[2]=76|r,(null!==T||e&&1024&e[2])&&(F[2]|=1024),Sn(F),F[3]=F[15]=e,F[8]=n,F[10]=o||e&&e[10],F[11]=p||e&&e[11],F[12]=m||e&&e[12]||null,F[9]=E||e&&e[9]||null,F[6]=s,F[20]=function km(){return Lm++}(),F[21]=T,F[16]=2==t.type?e[16]:F,F}function lo(e,t,n,r,i){let s=e.data[t];if(null===s)s=vu(e,t,n,r,i),function Zs(){return tt.lFrame.inI18n}()&&(s.flags|=64);else if(64&s.type){s.type=n,s.value=r,s.attrs=i;const o=di();s.injectorIndex=null===o?-1:o.injectorIndex}return Kn(s,!0),s}function vu(e,t,n,r,i){const s=xi(),o=rs(),m=e.data[t]=function n_(e,t,n,r,i,s){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:i,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,o?s:s&&s.parent,n,t,r,i);return null===e.firstChild&&(e.firstChild=m),null!==s&&(o?null==s.child&&null!==m.parent&&(s.child=m):null===s.next&&(s.next=m)),m}function uo(e,t,n,r){if(0===n)return-1;const i=t.length;for(let s=0;s<n;s++)t.push(r),e.blueprint.push(r),e.data.push(null);return i}function _u(e,t,n){c(t);try{const r=e.viewQuery;null!==r&&Tu(1,r,n);const i=e.template;null!==i&&Ah(e,t,i,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Ih(e,t),e.staticViewQueries&&Tu(2,e.viewQuery,n);const s=e.components;null!==s&&function Jv(e,t){for(let n=0;n<t.length;n++)v_(e,t[n])}(t,s)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,g()}}function ka(e,t,n,r){const i=t[2];if(128!=(128&i)){c(t);try{Sn(t),function Li(e){return tt.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Ah(e,t,n,2,r);const o=3==(3&i);if(o){const E=e.preOrderCheckHooks;null!==E&&Dt(t,E,null)}else{const E=e.preOrderHooks;null!==E&&Dn(t,E,0,null),Qt(t,0)}if(function m_(e){for(let t=Al(e);null!==t;t=Pl(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const i=n[r],s=i[3];0==(512&i[2])&&Wr(s,1),i[2]|=512}}}(t),function g_(e){for(let t=Al(e);null!==t;t=Pl(t))for(let n=10;n<t.length;n++){const r=t[n],i=r[1];er(r)&&ka(i,r,i.template,r[8])}}(t),null!==e.contentQueries&&Ih(e,t),o){const E=e.contentCheckHooks;null!==E&&Dt(t,E)}else{const E=e.contentHooks;null!==E&&Dn(t,E,1),Qt(t,1)}!
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Xv(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const i=n[r];if(i<0)Y(~i);else{const s=i,o=n[++r],p=n[++r];as(o,s),p(2,t[s])}}}finally{Y(-1)}}(e,t);const p=e.components;null!==p&&function qv(e,t){for(let n=0;n<t.length;n++)y_(e,t[n])}(t,p);const m=e.viewQuery;if(null!==m&&Tu(2,m,r),o){const E=e.viewCheckHooks;null!==E&&Dt(t,E)}else{const E=e.viewHooks;null!==E&&Dn(t,E,2),Qt(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,Wr(t[3],-1))}finally{g()}}}function Ah(e,t,n,r,i){const s=R(),o=2&r;try{Y(-1),o&&t.length>22&&sh(e,t,22,!1),n(r,i)}finally{Y(s)}}function Ph(e,t,n){if(Er(t)){const i=t.directiveEnd;for(let s=t.directiveStart;s<i;s++){const o=e.data[s];o.contentQueries&&o.contentQueries(1,n[s],s)}}}function Du(e,t,n){!xr()||(function a_(e,t,n,r){const i=n.directiveStart,s=n.directiveEnd;e.firstCreatePass||pi(n,t),Qn(r,t);const o=n.initialInputs;for(let p=i;p<s;p++){const m=e.data[p],E=xn(m);E&&h_(t,n,m);const T=bs(t,e,p,n);Qn(T,t),null!==o&&f_(0,p-i,T,m,0,o),E&&(Nt(n.index,t)[8]=T)}}(e,t,n,Cn(n,t)),128==(128&n.flags)&&function l_(e,t,n){const r=n.directiveStart,i=n.directiveEnd,s=n.index,o=function Ds(){return tt.lFrame.currentDirectiveIndex}();try{Y(s);for(let p=r;p<i;p++){const m=e.data[p],E=t[p];ls(p),(null!==m.hostBindings||0!==m.hostVars||null!==m.hostAttrs)&&kh(m,E)}}finally{Y(-1),ls(o)}}(e,t,n))}function Eu(e,t,n=Cn){const r=t.localNames;if(null!==r){let i=t.index+1;for(let s=0;s<r.length;s+=2){const o=r[s+1],p=-1===o?n(t,e):e[o];e[i++]=p}}}function Rh(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=wu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function wu(e,t,n,r,i,s,o,p,m,E){const T=22+r,F=T+i,X=function e_(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:St);return n}(T,F),he="function"==typeof E?E():E;return X[1]={type:e,blueprint:X,template:n,queries:null,viewQuery:p,declTNode:t,data:X.slice().fill(null,T),bindingStartIndex:T,expandoStartIndex:F,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:m,consts:he,incompleteFirstPass:!1}}function Oh(e,t,n,r){const i=Uh(t);null===n?i.push(r):(i.push(n),e.firstCreatePass&&$h(e).push(r,i.length-1))}function xh(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const i=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,i):n[r]=[t,i]}return n}function Fh(e,t){const r=t.directiveEnd,i=e.data,s=t.attrs,o=[];let p=null,m=null;for(let E=t.directiveStart;E<r;E++){const T=i[E],F=T.inputs,X=null===s||th(t)?null:p_(F,s);o.push(X),p=xh(F,E,p),m=xh(T.outputs,E,m)}null!==p&&(p.hasOwnProperty("class")&&(t.flags|=16),p.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=o,t.inputs=p,t.outputs=m}function Mr(e,t,n,r,i,s,o,p){const m=Cn(t,n);let T,E=t.inputs;!p&&null!=E&&(T=E[r])?(Iu(e,n,T,r,i),Hn(t)&&Nh(n,t.index)):3&t.type&&(r=function r_(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),i=null!=o?o(i,t.value||"",r):i,s.setProperty(m,r,i))}function Nh(e,t){const n=Nt(t,e);16&n[2]||(n[2]|=32)}function Cu(e,t,n,r){let i=!1;if(xr()){const s=function u_(e,t,n){const r=e.directiveRegistry;let i=null;if(r)for(let s=0;s<r.length;s++){const o=r[s];nh(n,o.selectors,!1)&&(i||(i=[]),Hi(pi(n,t),e,o.type),xn(o)?(Bh(e,n),i.unshift(o)):i.push(o))}return i}(e,t,n),o=null===r?null:{"":-1};if(null!==s){i=!0,Vh(n,e.data.length,s.length);for(let T=0;T<s.length;T++){const F=s[T];F.providersResolver&&F.providersResolver(F)}let p=!1,m=!1,E=uo(e,t,s.length,null);for(let T=0;T<s.length;T++){const F=s[T];n.mergedAttrs=bn(n.mergedAttrs,F.hostAttrs),Hh(e,n,t,E,F),d_(E,F,o),null!==F.contentQueries&&(n.flags|=8),(null!==F.hostBindings||null!==F.hostAttrs||0!==F.hostVars)&&(n.flags|=128);const X=F.type.prototype;!p&&(X.ngOnChanges||X.ngOnInit||X.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),p=!0),!m&&(X.ngOnChanges||X.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),m=!0),E++}Fh(e,n)}o&&function c_(e,t,n){if(t){const r=e.localNames=[];for(let i=0;i<t.length;i+=2){const s=n[t[i+1]];if(null==s)throw new ce(-301,!1);r.push(t[i],s)}}}(n,r,o)}return n.mergedAttrs=bn(n.mergedAttrs,n.attrs),i}function Lh(e,t,n,r,i,s){const o=s.hostBindings;if(o){let p=e.hostBindingOpCodes;null===p&&(p=e.hostBindingOpCodes=[]);const m=~t.index;(function o_(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(p)!=m&&p.push(m),p.push(r,i,o)}}function kh(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Bh(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function d_(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;xn(t)&&(n[""]=e)}}function Vh(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Hh(e,t,n,r,i){e.data[r]=i;const s=i.factory||(i.factory=Wn(i.type)),o=new En(s,xn(i),ao);e.blueprint[r]=o,n[r]=o,Lh(e,t,0,r,uo(e,n,i.hostVars,St),i)}function h_(e,t,n){const r=Cn(t,e),i=Rh(n),s=e[10],o=Ba(e,La(e,i,null,n.onPush?32:16,r,t,s,s.createRenderer(r,n),null,null,null));e[t.index]=o}function Su(e,t,n,r,i,s,o){if(null==s)e.removeAttribute(t,i,n);else{const p=null==o?pe(s):o(s,r||"",i);e.setAttribute(t,i,p,n)}}function f_(e,t,n,r,i,s){const o=s[t];if(null!==o){const p=r.setInput;for(let m=0;m<o.length;){const E=o[m++],T=o[m++],F=o[m++];null!==p?r.setInput(n,F,E,T):n[T]=F}}}function p_(e,t){let n=null,r=0;for(;r<t.length;){const i=t[r];if(0!==i)if(5!==i){if("number"==typeof i)break;e.hasOwnProperty(i)&&(null===n&&(n=[]),n.push(i,e[i],t[r+1])),r+=2}else r+=2;else r+=4}return n}function jh(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function y_(e,t){const n=Nt(t,e);if(er(n)){const r=n[1];48&n[2]?ka(r,n,r.template,n[8]):n[5]>0&&bu(n)}}function bu(e){for(let r=Al(e);null!==r;r=Pl(r))for(let i=10;i<r.length;i++){const s=r[i];if(er(s))if(512&s[2]){const o=s[1];ka(o,s,o.template,s[8])}else s[5]>0&&bu(s)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const i=Nt(n[r],e);er(i)&&i[5]>0&&bu(i)}}function v_(e,t){const n=Nt(t,e),r=n[1];(function __(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),_u(r,n,n[8])}function Ba(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Mu(e){for(;e;){e[2]|=32;const t=Ho(e);if(Hr(e)&&!t)return e;e=t}return null}function Va(e,t,n,r=!0){const i=t[10];i.begin&&i.begin();try{ka(e,t,e.template,n)}catch(o){throw r&&Wh(t,o),o}finally{i.end&&i.end()}}function Tu(e,t,n){hi(0),t(e,n)}function Uh(e){return e[7]||(e[7]=[])}function $h(e){return e.cleanup||(e.cleanup=[])}function Wh(e,t){const n=e[9],r=n?n.get(Ko,null):null;r&&r.handleError(t)}function Iu(e,t,n,r,i){for(let s=0;s<n.length;){const o=n[s++],p=n[s++],m=t[o],E=e.data[o];null!==E.setInput?E.setInput(m,i,r,p):m[p]=i}}function Ki(e,t,n){const r=Gn(t,e);hd(e[11],r,n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ha(e,t,n){let r=n?e.styles:null,i=n?e.classes:null,s=0;if(null!==t)for(let o=0;o<t.length;o++){const p=t[o];"number"==typeof p?s=p:1==s?i=G(i,p):2==s&&(r=G(r,p+": "+t[++o]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=i:e.classesWithoutHost=i}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ja(e,t,n,r,i=!1){for(;null!==n;){const s=t[n.index];if(null!==s&&r.push(en(s)),fn(s))for(let p=10;p<s.length;p++){const m=s[p],E=m[1].firstChild;null!==E&&ja(m[1],m,E,r)}const o=n.type;if(8&o)ja(e,t,n.child,r);else if(32&o){const p=Il(n,t);let m;for(;m=p();)r.push(m)}else if(16&o){const p=Cd(t,n);if(Array.isArray(p))r.push(...p);else{const m=Ho(t[16]);ja(m[1],m,p,r,!0)}}n=i?n.projectionNext:n.next}return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Yo{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return ja(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(fn(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(xl(t,r),Ps(n,r))}this._attachedToViewContainer=!1}pd(this._lView[1],this._lView)}onDestroy(t){Oh(this._lView[1],this._lView,null,t)}markForCheck(){Mu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Va(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function ey(e,t){jo(e,t,t[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new ce(902,!1);this._appRef=t}}class D_ extends Yo{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;Va(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Au extends Wo{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=Rt(t);return new Zo(n,this.ngModule)}}function Gh(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class w_{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const i=this.injector.get(t,tu,r);return i!==tu||n===tu?i:this.parentInjector.get(t,n,r)}}class Zo extends Kd{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function Ev(e){return e.map(Dv).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Gh(this.componentDef.inputs)}get outputs(){return Gh(this.componentDef.outputs)}create(t,n,r,i){let s=(i=i||this.ngModule)instanceof ks?i:i?.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const o=s?new w_(t,s):t,p=o.get(Zd,null);if(null===p)throw new ce(407,!1);const m=o.get(tv,null),E=p.createRenderer(null,this.componentDef),T=this.componentDef.selectors[0][0]||"div",F=r?function t_(e,t,n){return e.selectRootElement(t,n===ne.ShadowDom)}(E,r,this.componentDef.encapsulation):Ol(E,T,function E_(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(T)),X=this.componentDef.onPush?288:272,he=wu(0,null,null,1,0,null,null,null,null,null),be=La(null,he,null,X,null,null,p,E,m,o,null);let ke,Ge;c(be);try{const nt=function b_(e,t,n,r,i,s){const o=n[1];n[22]=e;const m=lo(o,22,2,"#host",null),E=m.mergedAttrs=t.hostAttrs;null!==E&&(Ha(m,E,!0),null!==e&&(At(i,e,E),null!==m.classes&&Vl(i,e,m.classes),null!==m.styles&&bd(i,e,m.styles)));const T=r.createRenderer(e,t),F=La(n,Rh(t),null,t.onPush?32:16,n[22],m,r,T,s||null,null,null);return o.firstCreatePass&&(Hi(pi(m,n),o,t.type),Bh(o,m),Vh(m,n.length,1)),Ba(n,F),n[22]=F}(F,this.componentDef,be,p,E);if(F)if(r)At(E,F,["ng-version",nv.full]);else{const{attrs:lt,classes:xe}=function wv(e){const t=[],n=[];let r=1,i=2;for(;r<e.length;){let s=e[r];if("string"==typeof s)2===i?""!==s&&t.push(s,e[++r]):8===i&&n.push(s);else{if(!Jr(i))break;i=s}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);lt&&At(E,F,lt),xe&&xe.length>0&&Vl(E,F,xe.join(" "))}if(Ge=ts(he,22),void 0!==n){const lt=Ge.projection=[];for(let xe=0;xe<this.ngContentSelectors.length;xe++){const pt=n[xe];lt.push(null!=pt?Array.from(pt):null)}}ke=function M_(e,t,n,r){const i=n[1],s=function s_(e,t,n){const r=rn();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Hh(e,r,t,uo(e,t,1,null),n),Fh(e,r));const i=bs(t,e,r.directiveStart,r);Qn(i,t);const s=Cn(r,t);return s&&Qn(s,t),i}(i,n,t);if(e[8]=n[8]=s,null!==r)for(const p of r)p(s,t);if(t.contentQueries){const p=rn();t.contentQueries(1,s,p.directiveStart)}const o=rn();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Y(o.index),Lh(n[1],o,0,o.directiveStart,o.directiveEnd,t),kh(t,s)),s}(nt,this.componentDef,be,[T_]),_u(he,be,null)}finally{g()}return new S_(this.componentType,ke,io(Ge,be),be,Ge)}}class S_ extends class Yy{}{constructor(t,n,r,i,s){super(),this.location=r,this._rootLView=i,this._tNode=s,this.instance=n,this.hostView=this.changeDetectorRef=new D_(i),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let i;if(null!==r&&(i=r[t])){const s=this._rootLView;Iu(s[1],s,i,t,n),Nh(s,this._tNode.index)}}get injector(){return new ji(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function T_(){const e=rn();mt(Re()[1],e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Pu(e){let t=function Kh(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let i;if(xn(e))i=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new ce(903,!1);i=t.\u0275dir}if(i){if(n){r.push(i);const o=e;o.inputs=Ru(e.inputs),o.declaredInputs=Ru(e.declaredInputs),o.outputs=Ru(e.outputs);const p=i.hostBindings;p&&R_(e,p);const m=i.viewQuery,E=i.contentQueries;if(m&&A_(e,m),E&&P_(e,E),oe(e.inputs,i.inputs),oe(e.declaredInputs,i.declaredInputs),oe(e.outputs,i.outputs),xn(i)&&i.data.animation){const T=e.data;T.animation=(T.animation||[]).concat(i.data.animation)}}const s=i.features;if(s)for(let o=0;o<s.length;o++){const p=s[o];p&&p.ngInherit&&p(e),p===Pu&&(n=!1)}}t=Object.getPrototypeOf(t)}!function I_(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.hostVars=t+=i.hostVars,i.hostAttrs=bn(i.hostAttrs,n=bn(n,i.hostAttrs))}}(r)}function Ru(e){return e===Be?{}:e===Fe?[]:e}function A_(e,t){const n=e.viewQuery;e.viewQuery=n?(r,i)=>{t(r,i),n(r,i)}:t}function P_(e,t){const n=e.contentQueries;e.contentQueries=n?(r,i,s)=>{t(r,i,s),n(r,i,s)}:t}function R_(e,t){const n=e.hostBindings;e.hostBindings=n?(r,i)=>{t(r,i),n(r,i)}:t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Ua=null;function Vs(){if(!Ua){const e=de.Symbol;if(e&&e.iterator)Ua=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Ua=r)}}}return Ua}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Qo(e){return!!Ou(e)&&(Array.isArray(e)||!(e instanceof Map)&&Vs()in e)}function Ou(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Di(e,t,n){return e[t]=n}function Xn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Hs(e,t,n,r){const i=Xn(e,t,n);return Xn(e,t+1,r)||i}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function xu(e,t,n,r){const i=Re();return Xn(i,Zr(),t)&&(Tt(),function _i(e,t,n,r,i,s){const o=Cn(e,t);Su(t[11],o,s,e.value,n,r,i)}(ue(),i,e,t,n,r)),xu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ho(e,t,n,r){return Xn(e,Zr(),n)?t+pe(n)+r:St}function rf(e,t,n,r,i,s,o,p){const m=Re(),E=Tt(),T=e+22,F=E.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function V_(e,t,n,r,i,s,o,p,m){const E=t.consts,T=lo(t,e,4,o||null,jn(E,p));Cu(t,n,T,jn(E,m)),mt(t,T);const F=T.tViews=wu(2,T,r,i,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,E);return null!==t.queries&&(t.queries.template(t,T),F.queries=t.queries.embeddedTView(T)),T}(T,E,m,t,n,r,i,s,o):E.data[T];Kn(F,!1);const X=m[11].createComment("");ba(E,m,X,F),Qn(X,m),Ba(m,m[T]=jh(X,m,X,F)),wr(F)&&Du(E,m,F),null!=o&&Eu(m,F,p)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function sf(e){return Rr(function is(){return tt.lFrame.contextLView}(),22+e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Fu(e,t,n){const r=Re();return Xn(r,Zr(),t)&&Mr(Tt(),ue(),r,e,t,r[11],n,!1),Fu}function Nu(e,t,n,r,i){const o=i?"class":"style";Iu(e,n,t.inputs[o],o,r)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function za(e,t,n,r){const i=Re(),s=Tt(),o=22+e,p=i[11],m=i[o]=Ol(p,t,function et(){return tt.lFrame.currentNamespace}()),E=s.firstCreatePass?function j_(e,t,n,r,i,s,o){const p=t.consts,E=lo(t,e,2,i,jn(p,s));return Cu(t,n,E,jn(p,o)),null!==E.attrs&&Ha(E,E.attrs,!1),null!==E.mergedAttrs&&Ha(E,E.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,E),E}(o,s,i,0,t,n,r):s.data[o];Kn(E,!0);const T=E.mergedAttrs;null!==T&&At(p,m,T);const F=E.classes;null!==F&&Vl(p,m,F);const X=E.styles;return null!==X&&bd(p,m,X),64!=(64&E.flags)&&ba(s,i,m,E),0===function ns(){return tt.lFrame.elementDepthCount}()&&Qn(m,i),function Gr(){tt.lFrame.elementDepthCount++}(),wr(E)&&(Du(s,i,E),Ph(s,E,i)),null!==r&&Eu(i,E),za}function Wa(){let e=rn();rs()?Fi():(e=e.parent,Kn(e,!1));const t=e;!function _s(){tt.lFrame.elementDepthCount--}();const n=Tt();return n.firstCreatePass&&(mt(n,e),Er(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function Es(e){return 0!=(16&e.flags)}(t)&&Nu(n,t,Re(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function Je(e){return 0!=(32&e.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)&&Nu(n,t,Re(),t.stylesWithoutHost,!1),Wa}function Lu(e,t,n,r){return za(e,t,n,r),Wa(),Lu
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}function Ga(e,t,n){const r=Re(),i=Tt(),s=e+22,o=i.firstCreatePass?function U_(e,t,n,r,i){const s=t.consts,o=jn(s,r),p=lo(t,e,8,"ng-container",o);return null!==o&&Ha(p,o,!0),Cu(t,n,p,jn(s,i)),null!==t.queries&&t.queries.elementStart(t,p),p}(s,i,r,t,n):i.data[s];Kn(o,!0);const p=r[s]=r[11].createComment("");return ba(i,r,p,o),Qn(p,r),wr(o)&&(Du(i,r,o),Ph(i,o,r)),null!=n&&Eu(r,o),Ga}function Ka(){let e=rn();const t=Tt();return rs()?Fi():(e=e.parent,Kn(e,!1)),t.firstCreatePass&&(mt(t,e),Er(e)&&t.queries.elementEnd(e)),Ka}function ku(e,t,n){return Ga(e,t,n),Ka(),ku}function af(){return Re()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Bu(e){return!!e&&"function"==typeof e.then}function lf(e){return!!e&&"function"==typeof e.subscribe}const uf=lf;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vu(e,t,n,r){const i=Re(),s=Tt(),o=rn();return function df(e,t,n,r,i,s,o,p){const m=wr(r),T=e.firstCreatePass&&$h(e),F=t[8],X=Uh(t);let he=!0;if(3&r.type||p){const Ge=Cn(r,t),nt=p?p(Ge):Ge,lt=X.length,xe=p?$t=>p(en($t[r.index])):r.index;let pt=null;if(!p&&m&&(pt=function $_(e,t,n,r){const i=e.cleanup;if(null!=i)for(let s=0;s<i.length-1;s+=2){const o=i[s];if(o===n&&i[s+1]===r){const p=t[7],m=i[s+2];return p.length>m?p[m]:null}"string"==typeof o&&(s+=2)}return null}(e,t,i,r.index)),null!==pt)(pt.__ngLastListenerFn__||pt).__ngNextListenerFn__=s,pt.__ngLastListenerFn__=s,he=!1;else{s=ff(r,t,F,s,!1);const $t=n.listen(nt,i,s);X.push(s,$t),T&&T.push(i,xe,lt,lt+1)}}else s=ff(r,t,F,s,!1);const be=r.outputs;let ke;if(he&&null!==be&&(ke=be[i])){const Ge=ke.length;if(Ge)for(let nt=0;nt<Ge;nt+=2){const sn=t[ke[nt]][ke[nt+1]].subscribe(s),$s=X.length;X.push(s,sn),T&&T.push(i,r.index,$s,-($s+1))}}}(s,i,i[11],o,e,t,0,r),Vu}function hf(e,t,n,r){try{return!1!==n(r)}catch(i){return Wh(e,i),!1}}function ff(e,t,n,r,i){return function s(o){if(o===Function)return r;Mu(2&e.flags?Nt(e.index,t):t);let m=hf(t,0,r,o),E=s.__ngNextListenerFn__;for(;E;)m=hf(t,0,E,o)&&m,E=E.__ngNextListenerFn__;return i&&!1===m&&(o.preventDefault(),o.returnValue=!1),m}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function pf(e=1){return function f(e){return(tt.lFrame.contextLView=function w(e,t){for(;e>0;)t=t[15],e--;return t}(e,tt.lFrame.contextLView))[8]}(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function z_(e,t){let n=null;const r=function mv(e){const t=e.attrs;if(null!=t){const n=t.indexOf(5);if(0==(1&n))return t[n+1]}return null}(e);for(let i=0;i<t.length;i++){const s=t[i];if("*"!==s){if(null===r?nh(e,s,!0):_v(r,s))return i}else n=i}return n}function gf(e){const t=Re()[16][6];if(!t.projection){const r=t.projection=Rs(e?e.length:1,null),i=r.slice();let s=t.child;for(;null!==s;){const o=e?z_(s,e):0;null!==o&&(i[o]?i[o].projectionNext=s:r[o]=s,i[o]=s),s=s.next}}}function mf(e,t=0,n){const r=Re(),i=Tt(),s=lo(i,22+e,16,null,n||null);null===s.projection&&(s.projection=t),Fi(),64!=(64&s.flags)&&function ly(e,t,n){Sd(t[11],0,t,n,gd(e,n,t),_d(n.parent||t[6],n,t))}(i,r,s)}function Mf(e,t,n,r,i){const s=e[n+1],o=null===t;let p=r?ei(s):Gi(s),m=!1;for(;0!==p&&(!1===m||o);){const T=e[p+1];K_(e[p],t)&&(m=!0,e[p+1]=r?cu(T):lu(T)),p=r?ei(T):Gi(T)}m&&(e[n+1]=r?lu(s):cu(s))}function K_(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&U(e,t)>=0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Pn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Tf(e){return e.substring(Pn.key,Pn.keyEnd)}function Y_(e){return e.substring(Pn.value,Pn.valueEnd)}function If(e,t){const n=Pn.textEnd;return n===t?-1:(t=Pn.keyEnd=function X_(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,Pn.key=t,n),Do(e,t,n))}function Af(e,t){const n=Pn.textEnd;let r=Pn.key=Do(e,t,n);return n===r?-1:(r=Pn.keyEnd=function q_(e,t,n){let r;for(;t<n&&(45===(r=e.charCodeAt(t))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)t++;return t}(e,r,n),r=Rf(e,r,n),r=Pn.value=Do(e,r,n),r=Pn.valueEnd=function J_(e,t,n){let r=-1,i=-1,s=-1,o=t,p=o;for(;o<n;){const m=e.charCodeAt(o++);if(59===m)return p;34===m||39===m?p=o=Of(e,m,o,n):t===o-4&&85===s&&82===i&&76===r&&40===m?p=o=Of(e,41,o,n):m>32&&(p=o),s=i,i=r,r=-33&m}return p}(e,r,n),Rf(e,r,n))}function Pf(e){Pn.key=0,Pn.keyEnd=0,Pn.value=0,Pn.valueEnd=0,Pn.textEnd=e.length}function Do(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function Rf(e,t,n,r){return(t=Do(e,t,n))<n&&t++,t}function Of(e,t,n,r){let i=-1,s=n;for(;s<r;){const o=e.charCodeAt(s++);if(o==t&&92!==i)return s;i=92==o&&92===i?0:o}throw new Error}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ju(e,t,n){return ni(e,t,n,!1),ju}function Uu(e,t){return ni(e,t,null,!0),Uu}function ti(e){ri(Lf,eD,e,!1)}function eD(e,t){for(let n=function Q_(e){return Pf(e),Af(e,Do(e,0,Pn.textEnd))}(t);n>=0;n=Af(t,n))Lf(e,Tf(t),Y_(t))}function xf(e){ri(M,Ei,e,!0)}function Ei(e,t){for(let n=function Z_(e){return Pf(e),If(e,Do(e,0,Pn.textEnd))}(t);n>=0;n=If(t,n))M(e,Tf(t),!0)}function ni(e,t,n,r){const i=Re(),s=Tt(),o=gr(2);s.firstUpdatePass&&Nf(s,e,o,r),t!==St&&Xn(i,o,t)&&kf(s,s.data[R()],i,i[11],e,i[o+1]=function aD(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=te(cs(e)))),e}(t,n),r,o)}function ri(e,t,n,r){const i=Tt(),s=gr(2);i.firstUpdatePass&&Nf(i,null,s,r);const o=Re();if(n!==St&&Xn(o,s,n)){const p=i.data[R()];if(Vf(p,r)&&!Ff(i,s)){let m=r?p.classesWithoutHost:p.stylesWithoutHost;null!==m&&(n=G(m,n||"")),Nu(i,p,o,n,r)}else!function oD(e,t,n,r,i,s,o,p){i===St&&(i=Fe);let m=0,E=0,T=0<i.length?i[0]:null,F=0<s.length?s[0]:null;for(;null!==T||null!==F;){const X=m<i.length?i[m+1]:void 0,he=E<s.length?s[E+1]:void 0;let ke,be=null;T===F?(m+=2,E+=2,X!==he&&(be=F,ke=he)):null===F||null!==T&&T<F?(m+=2,be=T):(E+=2,be=F,ke=he),null!==be&&kf(e,t,n,r,be,ke,o,p),T=m<i.length?i[m]:null,F=E<s.length?s[E]:null}}(i,p,o,o[11],o[s+1],o[s+1]=function sD(e,t,n){if(null==n||""===n)return Fe;const r=[],i=cs(n);if(Array.isArray(i))for(let s=0;s<i.length;s++)e(r,i[s],!0);else if("object"==typeof i)for(const s in i)i.hasOwnProperty(s)&&e(r,s,i[s]);else"string"==typeof i&&t(r,i);return r}(e,t,n),r,s)}}function Ff(e,t){return t>=e.expandoStartIndex}function Nf(e,t,n,r){const i=e.data;if(null===i[n+1]){const s=i[R()],o=Ff(e,n);Vf(s,r)&&null===t&&!o&&(t=!1),t=function tD(e,t,n,r){const i=function ki(e){const t=tt.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let s=r?t.residualClasses:t.residualStyles;if(null===i)0===(r?t.classBindings:t.styleBindings)&&(n=qo(n=$u(null,e,t,n,r),t.attrs,r),s=null);else{const o=t.directiveStylingLast;if(-1===o||e[o]!==i)if(n=$u(i,e,t,n,r),null===s){let m=function nD(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Gi(r))return e[ei(r)]}(e,t,r);void 0!==m&&Array.isArray(m)&&(m=$u(null,e,t,m[1],r),m=qo(m,t.attrs,r),function rD(e,t,n,r){e[ei(n?t.classBindings:t.styleBindings)]=r}(e,t,r,m))}else s=function iD(e,t,n){let r;const i=t.directiveEnd;for(let s=1+t.directiveStylingLast;s<i;s++)r=qo(r,e[s].hostAttrs,n);return qo(r,t.attrs,n)}(e,t,r)}return void 0!==s&&(r?t.residualClasses=s:t.residualStyles=s),n}(i,s,t,r),function W_(e,t,n,r,i,s){let o=s?t.classBindings:t.styleBindings,p=ei(o),m=Gi(o);e[r]=n;let T,E=!1;if(Array.isArray(n)){const F=n;T=F[1],(null===T||U(F,T)>0)&&(E=!0)}else T=n;if(i)if(0!==m){const X=ei(e[p+1]);e[r+1]=xa(X,p),0!==X&&(e[X+1]=uu(e[X+1],r)),e[p+1]=function jv(e,t){return 131071&e|t<<17}(e[p+1],r)}else e[r+1]=xa(p,0),0!==p&&(e[p+1]=uu(e[p+1],r)),p=r;else e[r+1]=xa(m,0),0===p?p=r:e[m+1]=uu(e[m+1],r),m=r;E&&(e[r+1]=lu(e[r+1])),Mf(e,T,r,!0),Mf(e,T,r,!1),function G_(e,t,n,r,i){const s=i?e.residualClasses:e.residualStyles;null!=s&&"string"==typeof t&&U(s,t)>=0&&(n[r+1]=cu(n[r+1]))}(t,T,e,r,s),o=xa(p,m),s?t.classBindings=o:t.styleBindings=o}(i,s,t,n,o,r)}}function $u(e,t,n,r,i){let s=null;const o=n.directiveEnd;let p=n.directiveStylingLast;for(-1===p?p=n.directiveStart:p++;p<o&&(s=t[p],r=qo(r,s.hostAttrs,i),s!==e);)p++;return null!==e&&(n.directiveStylingLast=p),r}function qo(e,t,n){const r=n?1:2;let i=-1;if(null!==t)for(let s=0;s<t.length;s++){const o=t[s];"number"==typeof o?i=o:i===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),M(e,o,!!n||t[++s]))}return void 0===e?null:e}function Lf(e,t,n){M(e,t,cs(n))}function kf(e,t,n,r,i,s,o,p){if(!(3&t.type))return;const m=e.data,E=m[p+1];Ya(function Dh(e){return 1==(1&e)}(E)?Bf(m,t,n,i,Gi(E),o):void 0)||(Ya(s)||function _h(e){return 2==(2&e)}(E)&&(s=Bf(m,null,n,i,p,o)),function cy(e,t,n,r,i){if(t)i?e.addClass(n,r):e.removeClass(n,r);else{let s=-1===r.indexOf("-")?void 0:vi.DashCase;null==i?e.removeStyle(n,r,s):("string"==typeof i&&i.endsWith("!important")&&(i=i.slice(0,-10),s|=vi.Important),e.setStyle(n,r,i,s))}}(r,o,Gn(R(),n),i,s))}function Bf(e,t,n,r,i,s){const o=null===t;let p;for(;i>0;){const m=e[i],E=Array.isArray(m),T=E?m[1]:m,F=null===T;let X=n[i+1];X===St&&(X=F?Fe:void 0);let he=F?H(X,r):T===r?X:void 0;if(E&&!Ya(he)&&(he=H(m,r)),Ya(he)&&(p=he,o))return p;const be=e[i+1];i=o?ei(be):Gi(be)}if(null!==t){let m=s?t.residualClasses:t.residualStyles;null!=m&&(p=H(m,r))}return p}function Ya(e){return void 0!==e}function Vf(e,t){return 0!=(e.flags&(t?16:32))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Hf(e,t=""){const n=Re(),r=Tt(),i=e+22,s=r.firstCreatePass?lo(r,i,1,t,null):r.data[i],o=n[i]=Rl(n[11],t);ba(r,n,o,s),Kn(s,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function zu(e){return Za("",e,""),zu}function Za(e,t,n){const r=Re(),i=ho(r,e,t,n);return i!==St&&Ki(r,R(),i),Za}function Wu(e,t,n,r,i){const s=Re(),o=function fo(e,t,n,r,i,s){const p=Hs(e,Yn(),n,i);return gr(2),p?t+pe(n)+r+pe(i)+s:St}(s,e,t,n,r,i);return o!==St&&Ki(s,R(),o),Wu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Yf(e,t,n){ri(M,Ei,ho(Re(),e,t,n),!0)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Gu(e,t,n){const r=Re();return Xn(r,Zr(),t)&&Mr(Tt(),ue(),r,e,t,r[11],n,!0),Gu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const js=void 0;var MD=["en",[["a","p"],["AM","PM"],js],[["AM","PM"],js,js],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],js,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],js,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",js,"{1} 'at' {0}",js],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function bD(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Eo={};function Ku(e){const t=function TD(e){return e.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e);let n=op(t);if(n)return n;const r=t.split("-")[0];if(n=op(r),n)return n;if("en"===r)return MD;throw new ce(701,!1)}function sp(e){return Ku(e)[dt.PluralCase]}function op(e){return e in Eo||(Eo[e]=de.ng&&de.ng.common&&de.ng.common.locales&&de.ng.common.locales[e]),Eo[e]}var dt=(()=>((dt=dt||{})[dt.LocaleId=0]="LocaleId",dt[dt.DayPeriodsFormat=1]="DayPeriodsFormat",dt[dt.DayPeriodsStandalone=2]="DayPeriodsStandalone",dt[dt.DaysFormat=3]="DaysFormat",dt[dt.DaysStandalone=4]="DaysStandalone",dt[dt.MonthsFormat=5]="MonthsFormat",dt[dt.MonthsStandalone=6]="MonthsStandalone",dt[dt.Eras=7]="Eras",dt[dt.FirstDayOfWeek=8]="FirstDayOfWeek",dt[dt.WeekendRange=9]="WeekendRange",dt[dt.DateFormat=10]="DateFormat",dt[dt.TimeFormat=11]="TimeFormat",dt[dt.DateTimeFormat=12]="DateTimeFormat",dt[dt.NumberSymbols=13]="NumberSymbols",dt[dt.NumberFormats=14]="NumberFormats",dt[dt.CurrencyCode=15]="CurrencyCode",dt[dt.CurrencySymbol=16]="CurrencySymbol",dt[dt.CurrencyName=17]="CurrencyName",dt[dt.Currencies=18]="Currencies",dt[dt.Directionality=19]="Directionality",dt[dt.PluralCase=20]="PluralCase",dt[dt.ExtraData=21]="ExtraData",dt))();const ID=["zero","one","two","few","many"],wo="en-US",Qa={marker:"element"},Xa={marker:"ICU"};var gn=(()=>((gn=gn||{})[gn.SHIFT=2]="SHIFT",gn[gn.APPEND_EAGERLY=1]="APPEND_EAGERLY",gn[gn.COMMENT=2]="COMMENT",gn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ap=wo;function lp(e){(function gt(e,t){null==e&&$e(t,e,null,"!=")})(e,"Expected localeId to be defined"),"string"==typeof e&&(ap=e.toLowerCase().replace(/_/g,"-"))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function up(e,t,n){const r=t.insertBeforeIndex,i=Array.isArray(r)?r[0]:r;return null===i?Dd(e,0,n):en(n[i])}function cp(e,t,n,r,i){const s=t.insertBeforeIndex;if(Array.isArray(s)){let o=r,p=null;if(3&t.type||(p=o,o=i),null!==o&&0==(2&t.flags))for(let m=1;m<s.length;m++)Fs(e,o,n[s[m]],p,!1)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function dp(e,t){if(e.push(t),e.length>1)for(let n=e.length-2;n>=0;n--){const r=e[n];hp(r)||OD(r,t)&&null===xD(r)&&FD(r,t.index)}}function hp(e){return!(64&e.type)}function OD(e,t){return hp(t)||e.index>t.index}function xD(e){const t=e.insertBeforeIndex;return Array.isArray(t)?t[0]:t}function FD(e,t){const n=e.insertBeforeIndex;Array.isArray(n)?n[0]=t:(wd(up,cp),e.insertBeforeIndex=t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Jo(e,t){const n=e.data[t];return null===n||"string"==typeof n?null:n.hasOwnProperty("currentCaseLViewIndex")?n:n.value}function kD(e,t,n){const r=vu(e,n,64,null,null);return dp(t,r),r}function qa(e,t){const n=t[e.currentCaseLViewIndex];return null===n?n:n<0?~n:n}function fp(e){return e>>>17}function pp(e){return(131070&e)>>>1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ea=0,ta=0;function mp(e,t,n,r){const i=n[11];let o,s=null;for(let p=0;p<t.length;p++){const m=t[p];if("string"==typeof m){const E=t[++p];null===n[E]&&(n[E]=Rl(i,m))}else if("number"==typeof m)switch(1&m){case 0:const E=fp(m);let T,F;if(null===s&&(s=E,o=Sa(i,r)),E===s?(T=r,F=o):(T=null,F=en(n[E])),null!==F){const ke=pp(m);Fs(i,F,n[ke],T,!1);const nt=Jo(e,ke);if(null!==nt&&"object"==typeof nt){const lt=qa(nt,n);null!==lt&&mp(e,nt.create[lt],n,n[nt.anchorIdx])}}break;case 1:const he=t[++p],be=t[++p];Su(i,Gn(m>>>1,n),null,null,he,be,null)}else switch(m){case Xa:const E=t[++p],T=t[++p];null===n[T]&&Qn(n[T]=Xm(i,E),n);break;case Qa:const F=t[++p],X=t[++p];null===n[X]&&Qn(n[X]=Ol(i,F,null),n)}}}function yp(e,t,n,r,i){for(let s=0;s<n.length;s++){const o=n[s],p=n[++s];if(o&i){let m="";for(let E=s+1;E<=s+p;E++){const T=n[E];if("string"==typeof T)m+=T;else if("number"==typeof T)if(T<0)m+=pe(t[r-T]);else{const F=T>>>2;switch(3&T){case 1:const X=n[++E],he=n[++E],be=e.data[F];"string"==typeof be?Su(t[11],t[F],null,be,X,m,he):Mr(e,be,t,X,m,t[11],he,!1);break;case 0:const ke=t[F];null!==ke&&hd(t[11],ke,m);break;case 2:UD(e,Jo(e,F),t,m);break;case 3:vp(e,Jo(e,F),r,t)}}}}else{const m=n[s+1];if(m>0&&3==(3&m)){const T=Jo(e,m>>>2);t[T.currentCaseLViewIndex]<0&&vp(e,T,r,t)}}s+=p}}function vp(e,t,n,r){let i=r[t.currentCaseLViewIndex];if(null!==i){let s=ea;i<0&&(i=r[t.currentCaseLViewIndex]=~i,s=-1),yp(e,r,t.update[i],n,s)}}function UD(e,t,n,r){const i=function $D(e,t){let n=e.cases.indexOf(t);if(-1===n)switch(e.type){case 1:{const r=function AD(e,t){const n=sp(t)(parseInt(e,10)),r=ID[n];return void 0!==r?r:"other"}(t,function RD(){return ap}());n=e.cases.indexOf(r),-1===n&&"other"!==r&&(n=e.cases.indexOf("other"));break}case 0:n=e.cases.indexOf("other")}return-1===n?null:n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,r);if(qa(t,n)!==i&&(_p(e,t,n),n[t.currentCaseLViewIndex]=null===i?null:~i,null!==i)){const o=n[t.anchorIdx];o&&mp(e,t.create[i],n,o)}}function _p(e,t,n){let r=qa(t,n);if(null!==r){const i=t.remove[r];for(let s=0;s<i.length;s++){const o=i[s];if(o>0){const p=Gn(o,n);null!==p&&kl(n[11],p)}else _p(e,Jo(e,~o),n)}}}function zD(){const e=[];let n,r,t=-1;function s(p,m){t=0;const E=qa(p,m);r=null!==E?p.remove[E]:Fe}function o(){if(t<r.length){const p=r[t++];return p>0?n[p]:(e.push(t,r),s(n[1].data[~p],n),o())}return 0===e.length?null:(r=e.pop(),t=e.pop(),o())}return function i(p,m){for(n=m;e.length;)e.pop();return s(p.value,m),o}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ja=/\ufffd(\d+):?\d*\ufffd/gi,GD=/\ufffd(\d+)\ufffd/,Ep=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,KD=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,YD=/\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,ZD=/\uE500/g;function wp(e,t,n,r,i,s,o){const p=uo(e,r,1,null);let m=p<<gn.SHIFT,E=di();t===E&&(E=null),null===E&&(m|=gn.APPEND_EAGERLY),o&&(m|=gn.COMMENT,function Km(e){void 0===Tl&&(Tl=e())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(zD)),i.push(m,null===s?"":s);const T=vu(e,p,o?32:1,null===s?"":s,null);dp(n,T);const F=T.index;return Kn(T,!1),null!==E&&t!==E&&function LD(e,t){let n=e.insertBeforeIndex;null===n?(wd(up,cp),n=e.insertBeforeIndex=[null,t]):(function Ie(e,t,n){e!=t&&$e(n,e,t,"==")}(Array.isArray(n),!0,"Expecting array here"),n.push(t))}(E,F),T}function qD(e,t,n,r,i,s,o){const p=o.match(Ja),m=wp(e,t,n,s,r,p?null:o,!1);p&&ra(i,o,m.index,null,0,null)}function ra(e,t,n,r,i,s){const o=e.length,p=o+1;e.push(null,null);const m=o+2,E=t.split(Ja);let T=0;for(let F=0;F<E.length;F++){const X=E[F];if(1&F){const he=i+parseInt(X,10);e.push(-1-he),T|=Cp(he)}else""!==X&&e.push(X)}return e.push(n<<2|(r?1:0)),r&&e.push(r,s),e[o]=T,e[p]=e.length-m,T}function Cp(e){return 1<<Math.min(e,31)}function Sp(e){let t,s,n="",r=0,i=!1;for(;null!==(t=KD.exec(e));)i?t[0]===`\ufffd/*${s}\ufffd`&&(r=t.index,i=!1):(n+=e.substring(r,t.index+t[0].length),s=t[1],i=!0);return n+=e.slice(r),n}function bp(e,t,n,r,i,s){let o=0;const p={type:i.type,currentCaseLViewIndex:uo(e,t,1,null),anchorIdx:s,cases:[],create:[],remove:[],update:[]};(function oE(e,t,n){e.push(Cp(t.mainBinding),2,-1-t.mainBinding,n<<2|2)})(n,i,s),function ND(e,t,n){const r=e.data[t];null===r?e.data[t]=n:r.value=n}(e,s,p);const m=i.values;for(let E=0;E<m.length;E++){const T=m[E],F=[];for(let X=0;X<T.length;X++){const he=T[X];if("string"!=typeof he){const be=F.push(he)-1;T[X]=`\x3c!--\ufffd${be}\ufffd--\x3e`}}o=iE(e,p,t,n,r,i.cases[E],T.join(""),F)|o}o&&function aE(e,t,n){e.push(t,1,n<<2|3)}(n,o,s)}function rE(e){const t=[],n=[];let r=1,i=0;const s=Yu(e=e.replace(Ep,function(o,p,m){return r="select"===m?0:1,i=parseInt(p.slice(1),10),""}));for(let o=0;o<s.length;){let p=s[o++].trim();1===r&&(p=p.replace(/\s*(?:=)?(\w+)\s*/,"$1")),p.length&&t.push(p);const m=Yu(s[o++]);t.length>n.length&&n.push(m)}return{type:r,mainBinding:i,cases:t,values:n}}function Yu(e){if(!e)return[];let t=0;const n=[],r=[],i=/[{}]/g;let s;for(i.lastIndex=0;s=i.exec(e);){const p=s.index;if("}"==s[0]){if(n.pop(),0==n.length){const m=e.substring(t,p);Ep.test(m)?r.push(rE(m)):r.push(m),t=p+1}}else{if(0==n.length){const m=e.substring(t,p);r.push(m),t=p+1}n.push("{")}}const o=e.substring(t);return r.push(o),r}function iE(e,t,n,r,i,s,o,p){const m=[],E=[],T=[];t.cases.push(s),t.create.push(m),t.remove.push(E),t.update.push(T);const X=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Rd(e){const t=new wy(e);return function Cy(){try{return!!(new window.DOMParser).parseFromString(Ns(""),"text/html")}catch{return!1}}()?new Ey(t):t}(function Md(){return void 0!==jl?jl:typeof document<"u"?document:void 0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()).getInertBodyElement(o),he=function Gl(e){return"content"in e&&function Py(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}(e)?e.content:null}(X)||X;return he?Mp(e,t,n,r,m,E,T,he,i,p,0):0}function Mp(e,t,n,r,i,s,o,p,m,E,T){let F=0,X=p.firstChild;for(;X;){const he=uo(e,n,1,null);switch(X.nodeType){case Node.ELEMENT_NODE:const be=X,ke=be.tagName.toLowerCase();if(zl.hasOwnProperty(ke)){Zu(i,Qa,ke,m,he),e.data[he]=ke;const xe=be.attributes;for(let pt=0;pt<xe.length;pt++){const $t=xe.item(pt),sn=$t.name.toLowerCase();$t.value.match(Ja)?Nd.hasOwnProperty(sn)&&ra(o,$t.value,he,$t.name,0,Wl[sn]?$l:null):lE(i,he,$t)}F=Mp(e,t,n,r,i,s,o,X,he,E,T+1)|F,Tp(s,he,T)}break;case Node.TEXT_NODE:const Ge=X.textContent||"",nt=Ge.match(Ja);Zu(i,null,nt?"":Ge,m,he),Tp(s,he,T),nt&&(F=ra(o,Ge,he,null,0,null)|F);break;case Node.COMMENT_NODE:const lt=GD.exec(X.textContent||"");if(lt){const pt=E[parseInt(lt[1],10)];Zu(i,Xa,"",m,he),bp(e,n,r,m,pt,he),sE(s,he,T)}}X=X.nextSibling}return F}function Tp(e,t,n){0===n&&e.push(t)}function sE(e,t,n){0===n&&(e.push(~t),e.push(t))}function Zu(e,t,n,r,i){null!==t&&e.push(t),e.push(n,i,function BD(e,t,n){return e|t<<17|n<<1}(0,r,i))}function lE(e,t,n){e.push(t<<1|1,n.name,n.value)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ap(e,t,n=-1){const r=Tt(),i=Re(),s=22+e,o=jn(r.consts,t),p=di();r.firstCreatePass&&function XD(e,t,n,r,i,s){const o=di(),p=[],m=[],E=[[]];i=function nE(e,t){if(function tE(e){return-1===e}(t))return Sp(e);{const n=e.indexOf(`:${t}\ufffd`)+2+t.toString().length,r=e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));return Sp(e.substring(n,r))}}(i,s);const T=function QD(e){return e.replace(ZD," ")}(i).split(YD);for(let F=0;F<T.length;F++){let X=T[F];if(0==(1&F)){const he=Yu(X);for(let be=0;be<he.length;be++){let ke=he[be];if(0==(1&be)){const Ge=ke;""!==Ge&&qD(e,o,E[0],p,m,n,Ge)}else{const Ge=ke;if("object"!=typeof Ge)throw new Error(`Unable to parse ICU expression in "${i}" message.`);bp(e,n,m,t,Ge,wp(e,o,E[0],n,p,"",!0).index)}}}else{const he=47===X.charCodeAt(0),ke=(X.charCodeAt(he?1:0),22+Number.parseInt(X.substring(he?2:1)));if(he)E.shift(),Kn(di(),!1);else{const Ge=kD(e,E[0],ke);E.unshift([]),Kn(Ge,!0)}}}e.data[r]={create:p,update:m}}(r,null===p?0:p.index,i,s,o,n);const m=r.data[s],T=md(r,p===i[6]?null:p,i);(function jD(e,t,n,r){const i=e[11];for(let s=0;s<t.length;s++){const o=t[s++],p=t[s],m=(o&gn.COMMENT)===gn.COMMENT,E=(o&gn.APPEND_EAGERLY)===gn.APPEND_EAGERLY,T=o>>>gn.SHIFT;let F=e[T];null===F&&(F=e[T]=m?i.createComment(p):Rl(i,p)),E&&null!==n&&Fs(i,n,F,r,!1)}})(i,m.create,T,p&&8&p.type?i[p.index]:null),os(!0)}function Rp(e,t,n){Ap(e,t,n),function Pp(){os(!1)}()}function Qu(e){return function VD(e){e&&(ea|=1<<Math.min(ta,31)),ta++}(Xn(Re(),Zr(),e)),Qu}function Op(e){!function HD(e,t,n){if(ta>0){const r=e.data[n];yp(e,t,Array.isArray(r)?r:r.update,Yn()-ta-1,ea)}ea=0,ta=0}(Tt(),Re(),e+22)}function Xu(e,t,n,r,i){if(e=ie(e),Array.isArray(e))for(let s=0;s<e.length;s++)Xu(e[s],t,n,r,i);else{const s=Tt(),o=Re();let p=Ls(e)?e:ie(e.provide),m=Gd(e);const E=rn(),T=1048575&E.providerIndexes,F=E.directiveStart,X=E.providerIndexes>>20;if(Ls(e)||!e.multi){const he=new En(m,i,ao),be=Ju(p,t,i?T:T+X,F);-1===be?(Hi(pi(E,o),s,p),qu(s,e,t.length),t.push(p),E.directiveStart++,E.directiveEnd++,i&&(E.providerIndexes+=1048576),n.push(he),o.push(he)):(n[be]=he,o[be]=he)}else{const he=Ju(p,t,T+X,F),be=Ju(p,t,T,T+X),ke=he>=0&&n[he],Ge=be>=0&&n[be];if(i&&!Ge||!i&&!ke){Hi(pi(E,o),s,p);const nt=function wE(e,t,n,r,i){const s=new En(e,n,ao);return s.multi=[],s.index=t,s.componentProviders=0,xp(s,i,r&&!n),s}(i?EE:DE,n.length,i,r,m);!i&&Ge&&(n[be].providerFactory=nt),qu(s,e,t.length,0),t.push(p),E.directiveStart++,E.directiveEnd++,i&&(E.providerIndexes+=1048576),n.push(nt),o.push(nt)}else qu(s,e,he>-1?he:be,xp(n[i?be:he],m,!i&&r));!i&&r&&Ge&&n[be].componentProviders++}}}function qu(e,t,n,r){const i=Ls(t),s=function Hy(e){return!!e.useClass}(t);if(i||s){const m=(s?ie(t.useClass):t).prototype.ngOnDestroy;if(m){const E=e.destroyHooks||(e.destroyHooks=[]);if(!i&&t.multi){const T=E.indexOf(n);-1===T?E.push(n,[r,m]):E[T+1].push(r,m)}else E.push(n,m)}}}function xp(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function Ju(e,t,n,r){for(let i=n;i<r;i++)if(t[i]===e)return i;return-1}function DE(e,t,n,r){return ec(this.multi,[])}function EE(e,t,n,r){const i=this.multi;let s;if(this.providerFactory){const o=this.providerFactory.componentProviders,p=bs(n,n[1],this.providerFactory.index,r);s=p.slice(0,o),ec(i,s);for(let m=o;m<p.length;m++)s.push(p[m])}else s=[],ec(i,s);return s}function ec(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function Fp(e,t=[]){return n=>{n.providersResolver=(r,i)=>
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function _E(e,t,n){const r=Tt();if(r.firstCreatePass){const i=xn(e);Xu(n,r.data,r.blueprint,i,!0),Xu(t,r.data,r.blueprint,i,!1)}}(r,i?i(e):e,t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Co{}class Np{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function CE(e,t){return new Lp(e,t??null)}class Lp extends Co{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Au(this);const r=yn(t);this._bootstrapComponents=Wi(r.bootstrap),this._r3Injector=ch(t,n,[{provide:Co,useValue:this},{provide:Wo,useValue:this.componentFactoryResolver}],te(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class tc extends Np{constructor(t){super(),this.moduleType=t}create(t){return new Lp(this.moduleType,t)}}class SE extends Co{constructor(t,n,r){super(),this.componentFactoryResolver=new Au(this),this.instance=null;const i=new Wd([...t,{provide:Co,useValue:this},{provide:Wo,useValue:this.componentFactoryResolver}],n||Ra(),r,new Set(["environment"]));this.injector=i,i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function nc(e,t,n=null){return new SE(e,t,n).injector}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let bE=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=jd(0,n.type),i=r.length>0?nc([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,i)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=yt({token:e,providedIn:"environment",factory:()=>new e(Mn(ks))}),e})();function kp(e){e.getStandaloneInjector=t=>t.get(bE).getOrCreateStandaloneInjector(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function zp(e,t,n){const r=zt()+e,i=Re();return i[r]===St?Di(i,r,n?t.call(n):t()):function Xo(e,t){return e[t]}(i,r)}function Wp(e,t,n,r,i){return Yp(Re(),zt(),e,t,n,r,i)}function Gp(e,t,n,r,i,s){return function Zp(e,t,n,r,i,s,o,p){const m=t+n;return function $a(e,t,n,r,i){const s=Hs(e,t,n,r);return Xn(e,t+2,i)||s}(e,m,i,s,o)?Di(e,m+3,p?r.call(p,i,s,o):r(i,s,o)):ia(e,m+3)}(Re(),zt(),e,t,n,r,i,s)}function ia(e,t){const n=e[t];return n===St?void 0:n}function Yp(e,t,n,r,i,s,o){const p=t+n;return Hs(e,p,i,s)?Di(e,p+2,o?r.call(o,i,s):r(i,s)):ia(e,p+2)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function qp(e,t){const n=Tt();let r;const i=e+22;n.firstCreatePass?(r=function jE(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[i]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(i,r.onDestroy)):r=n.data[i];const s=r.factory||(r.factory=Wn(r.type)),o=V(ao);try{const p=Nn(!1),m=s();return Nn(p),function H_(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,Re(),i,m),m}finally{V(o)}}function Jp(e,t,n){const r=e+22,i=Re(),s=Rr(i,r);return sa(i,r)?function Kp(e,t,n,r,i,s){const o=t+n;return Xn(e,o,i)?Di(e,o+1,s?r.call(s,i):r(i)):ia(e,o+1)}(i,zt(),t,s.transform,n,s):s.transform(n)}function eg(e,t,n,r){const i=e+22,s=Re(),o=Rr(s,i);return sa(s,i)?Yp(s,zt(),t,o.transform,n,r,o):o.transform(n,r)}function sa(e,t){return e[1].data[t].pure}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ic(e){return t=>{setTimeout(e,void 0,t)}}const wi=class WE extends v.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let i=t,s=n||(()=>null),o=r;if(t&&"object"==typeof t){const m=t;i=m.next?.bind(m),s=m.error?.bind(m),o=m.complete?.bind(m)}this.__isAsync&&(s=ic(s),i&&(i=ic(i)),o&&(o=ic(o)));const p=super.subscribe({next:i,error:s,complete:o});return t instanceof A.w0&&t.add(p),p}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function GE(){return this._results[Vs()]()}class el{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Vs(),r=el.prototype;r[n]||(r[n]=GE)}get changes(){return this._changes||(this._changes=new wi)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const i=sr(t);(this._changesDetected=!function ml(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],s=t[r];if(n&&(i=n(i),s=n(s)),s!==i)return!1}return!0}(r._results,i,n))&&(r._results=i,r.length=i.length,r.last=i[this.length-1],r.first=i[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let oa=(()=>{class e{}return e.__NG_ELEMENT_ID__=ZE,e})();const KE=oa,YE=class extends KE{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,i=La(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);i[17]=this._declarationLView[this._declarationTContainer.index];const o=this._declarationLView[19];return null!==o&&(i[19]=o.createEmbeddedView(r)),_u(r,i,t),new Yo(i)}};function ZE(){return tl(rn(),Re())}function tl(e,t){return 4&e.type?new YE(t,e,io(e,t)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let nl=(()=>{class e{}return e.__NG_ELEMENT_ID__=QE,e})();function QE(){return rg(rn(),Re())}const XE=nl,tg=class extends XE{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return io(this._hostTNode,this._hostLView)}get injector(){return new ji(this._hostTNode,this._hostLView)}get parentInjector(){const t=Xs(this._hostTNode,this._hostLView);if(Yt(t)){const n=Jt(t,this._hostLView),r=Fr(t);return new ji(n[1].data[r+8],n)}return new ji(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=ng(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let i,s;"number"==typeof r?i=r:null!=r&&(i=r.index,s=r.injector);const o=t.createEmbeddedView(n||{},s);return this.insert(o,i),o}createComponent(t,n,r,i,s){const o=t&&!function As(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t);let p;if(o)p=n;else{const F=n||{};p=F.index,r=F.injector,i=F.projectableNodes,s=F.environmentInjector||F.ngModuleRef}const m=o?t:new Zo(Rt(t)),E=r||this.parentInjector;if(!s&&null==m.ngModule){const X=(o?E:this.parentInjector).get(ks,null);X&&(s=X)}const T=m.create(E,i,void 0,s);return this.insert(T.hostView,p),T}insert(t,n){const r=t._lView,i=r[1];if(function Ys(e){return fn(e[3])}(r)){const T=this.indexOf(t);if(-1!==T)this.detach(T);else{const F=r[3],X=new tg(F,F[6],F[3]);X.detach(X.indexOf(t))}}const s=this._adjustIndex(n),o=this._lContainer;!function ny(e,t,n,r){const i=10+r,s=n.length;r>0&&(n[i-1][4]=t),r<s-10?(t[4]=n[i],Da(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const o=t[17];null!==o&&n!==o&&function ry(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(o,t);const p=t[19];null!==p&&p.insertView(e),t[2]|=64}(i,r,o,s);const p=Ll(s,o),m=r[11],E=Sa(m,o[7]);return null!==E&&function Jm(e,t,n,r,i,s){r[0]=i,r[6]=t,jo(e,r,n,1,i,s)}(i,o[6],m,r,E,p),t.attachToViewContainerRef(),Da(sc(o),s,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=ng(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=xl(this._lContainer,n);r&&(Ps(sc(this._lContainer),n),pd(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=xl(this._lContainer,n);return r&&null!=Ps(sc(this._lContainer),n)?new Yo(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function ng(e){return e[8]}function sc(e){return e[8]||(e[8]=[])}function rg(e,t){let n;const r=t[e.index];if(fn(r))n=r;else{let i;if(8&e.type)i=en(r);else{const s=t[11];i=s.createComment("");const o=Cn(e,t);Fs(s,Sa(s,o),i,function ay(e,t){return e.nextSibling(t)}(s,o),!1)}t[e.index]=n=jh(r,t,i,e),Ba(t,n)}return new tg(n,e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class oc{constructor(t){this.queryList=t,this.matches=null}clone(){return new oc(this.queryList)}setDirty(){this.queryList.setDirty()}}class ac{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,i=[];for(let s=0;s<r;s++){const o=n.getByIndex(s);i.push(this.queries[o.indexInDeclarationView].clone())}return new ac(i)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==hg(t,n).matches&&this.queries[n].setDirty()}}class ig{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class lc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const i=null!==n?n.length:0,s=this.getByIndex(r).embeddedTView(t,i);s&&(s.indexInDeclarationView=r,null!==n?n.push(s):n=[s])}return null!==n?new lc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class uc{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new uc(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=r[i];this.matchTNodeWithReadOption(t,n,ew(n,s)),this.matchTNodeWithReadOption(t,n,ln(n,t,s,!1,!1))}else r===oa?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,ln(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const i=this.metadata.read;if(null!==i)if(i===Go||i===nl||i===oa&&4&n.type)this.addMatch(n.index,-2);else{const s=ln(n,t,i,!1,!1);null!==s&&this.addMatch(n.index,s)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function ew(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function nw(e,t,n,r){return-1===n?function tw(e,t){return 11&e.type?io(e,t):4&e.type?tl(e,t):null}(t,e):-2===n?function rw(e,t,n){return n===Go?io(t,e):n===oa?tl(t,e):n===nl?rg(t,e):void 0}(e,t,r):bs(e,e[1],n,t)}function sg(e,t,n,r){const i=t[19].queries[r];if(null===i.matches){const s=e.data,o=n.matches,p=[];for(let m=0;m<o.length;m+=2){const E=o[m];p.push(E<0?null:nw(t,s[E],o[m+1],n.metadata.read))}i.matches=p}return i.matches}function cc(e,t,n,r){const i=e.queries.getByIndex(n),s=i.matches;if(null!==s){const o=sg(e,t,i,n);for(let p=0;p<s.length;p+=2){const m=s[p];if(m>0)r.push(o[p/2]);else{const E=s[p+1],T=t[-m];for(let F=10;F<T.length;F++){const X=T[F];X[17]===X[3]&&cc(X[1],X,E,r)}if(null!==T[9]){const F=T[9];for(let X=0;X<F.length;X++){const he=F[X];cc(he[1],he,E,r)}}}}}return r}function og(e){const t=Re(),n=Tt(),r=Qs();hi(r+1);const i=hg(n,r);if(e.dirty&&function Ks(e){return 4==(4&e[2])}(t)===(2==(2&i.metadata.flags))){if(null===i.matches)e.reset([]);else{const s=i.crossesNgTemplate?cc(n,t,r,[]):sg(n,t,i,r);e.reset(s,qy),e.notifyOnChanges()}return!0}return!1}function ag(e,t,n){const r=Tt();r.firstCreatePass&&(dg(r,new ig(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),cg(r,Re(),t)}function lg(e,t,n,r){const i=Tt();if(i.firstCreatePass){const s=rn();dg(i,new ig(t,n,r),s.index),function sw(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(i,e),2==(2&n)&&(i.staticContentQueries=!0)}cg(i,Re(),n)}function ug(){return function iw(e,t){return e[19].queries[t].queryList}(Re(),Qs())}function cg(e,t,n){const r=new el(4==(4&n));Oh(e,t,r,r.destroy),null===t[19]&&(t[19]=new ac),t[19].queries.push(new oc(r))}function dg(e,t,n){null===e.queries&&(e.queries=new lc),e.queries.track(new uc(t,n))}function hg(e,t){return e.queries.getByIndex(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function fg(e,t){return tl(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function il(...e){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Og=new Wt("Application Initializer");let sl=(()=>{class e{constructor(n){this.appInits=n,this.resolve=il,this.reject=il,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,i)=>{this.resolve=r,this.reject=i})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let i=0;i<this.appInits.length;i++){const s=this.appInits[i]();if(Bu(s))n.push(s);else if(uf(s)){const o=new Promise((p,m)=>{s.subscribe({complete:p,error:m})});n.push(o)}}Promise.all(n).then(()=>{r()}).catch(i=>{this.reject(i)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(Mn(Og,8))},e.\u0275prov=yt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const xg=new Wt("AppId",{providedIn:"root",factory:function Fg(){return`${gc()}${gc()}${gc()}`}});function gc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Ng=new Wt("Platform Initializer"),bw=new Wt("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Lg=new Wt("appBootstrapListener"),Mw=new Wt("AnimationModuleType");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Tw=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=yt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ol=new Wt("LocaleId",{providedIn:"root",factory:()=>Wc(ol,J.Optional|J.SkipSelf)||function Iw(){return typeof $localize<"u"&&$localize.locale||wo}()}),Aw=new Wt("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Pw{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Rw=(()=>{class e{compileModuleSync(n){return new tc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),s=Wi(yn(n).declarations).reduce((o,p)=>{const m=Rt(p);return m&&o.push(new Zo(m)),o},[]);return new Pw(r,s)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=yt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Fw=(()=>Promise.resolve(0))();function mc(e){typeof Zone>"u"?Fw.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Lr{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new wi(!1),this.onMicrotaskEmpty=new wi(!1),this.onStable=new wi(!1),this.onError=new wi(!1),typeof Zone>"u")throw new ce(908,!1);Zone.assertZonePatched();const i=this;if(i._nesting=0,i._outer=i._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const s=Zone.AsyncStackTaggingZoneSpec;i._inner=i._inner.fork(new s("Angular"))}Zone.TaskTrackingZoneSpec&&(i._inner=i._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(i._inner=i._inner.fork(Zone.longStackTraceZoneSpec)),i.shouldCoalesceEventChangeDetection=!r&&n,i.shouldCoalesceRunChangeDetection=r,i.lastRequestAnimationFrameId=-1,i.nativeRequestAnimationFrame=function Nw(){let e=de.requestAnimationFrame,t=de.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function Bw(e){const t=()=>{!function kw(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(de,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,vc(e),e.isCheckStableRunning=!0,yc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),vc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,i,s,o,p)=>{try{return Vg(e),n.invokeTask(i,s,o,p)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===s.type||e.shouldCoalesceRunChangeDetection)&&t(),Hg(e)}},onInvoke:(n,r,i,s,o,p,m)=>{try{return Vg(e),n.invoke(i,s,o,p,m)}finally{e.shouldCoalesceRunChangeDetection&&t(),Hg(e)}},onHasTask:(n,r,i,s)=>{n.hasTask(i,s),r===i&&("microTask"==s.change?(e._hasPendingMicrotasks=s.microTask,vc(e),yc(e)):"macroTask"==s.change&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(n,r,i,s)=>(n.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}(i)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Lr.isInAngularZone())throw new ce(909,!1)}static assertNotInAngularZone(){if(Lr.isInAngularZone())throw new ce(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,i){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+i,t,Lw,il,il);try{return s.runTask(o,n,r)}finally{s.cancelTask(o)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const Lw={};function yc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function vc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Vg(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Hg(e){e._nesting--,yc(e)}class Vw{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new wi,this.onMicrotaskEmpty=new wi,this.onStable=new wi,this.onError=new wi}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,i){return t.apply(n,r)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const jg=new Wt(""),Ug=new Wt("");let _c,Hw=(()=>{class e{constructor(n,r,i){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,_c||(function jw(e){_c=e}(i),i.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Lr.assertNotInAngularZone(),mc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())mc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,i){let s=-1;r&&r>0&&(s=setTimeout(()=>{this._callbacks=this._callbacks.filter(o=>o.timeoutId!==s),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:s,updateCb:i})}whenStable(n,r,i){if(i&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,i),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,i){return[]}}return e.\u0275fac=function(n){return new(n||e)(Mn(Lr),Mn($g),Mn(Ug))},e.\u0275prov=yt({token:e,factory:e.\u0275fac}),e})(),$g=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return _c?.findTestabilityInTree(this,n,r)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=yt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),fs=null;const zg=new Wt("AllowMultipleToken"),Dc=new Wt("PlatformDestroyListeners");class zw{constructor(t,n){this.name=t,this.token=n}}function Gg(e,t,n=[]){const r=`Platform: ${t}`,i=new Wt(r);return(s=[])=>{let o=Ec();if(!o||o.injector.get(zg,!1)){const p=[...n,...s,{provide:i,useValue:!0}];e?e(p):function Ww(e){if(fs&&!fs.get(zg,!1))throw new ce(400,!1);fs=e;const t=e.get(Yg);(function Wg(e){const t=e.get(Ng,null);t&&t.forEach(n=>n())})(e)}(function Kg(e=[],t){return Bs.create({name:t,providers:[{provide:Xl,useValue:"platform"},{provide:Dc,useValue:new Set([()=>fs=null])},...e]})}(p,r))}return function Kw(e){const t=Ec();if(!t)throw new ce(401,!1);return t}()}}function Ec(){return fs?.get(Yg)??null}let Yg=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const i=function Qg(e,t){let n;return n="noop"===e?new Vw:("zone.js"===e?void 0:e)||new Lr(t),n}(r?.ngZone,function Zg(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),s=[{provide:Lr,useValue:i}];return i.run(()=>{const o=Bs.create({providers:s,parent:this.injector,name:n.moduleType.name}),p=n.create(o),m=p.injector.get(Ko,null);if(!m)throw new ce(402,!1);return i.runOutsideAngular(()=>{const E=i.onError.subscribe({next:T=>{m.handleError(T)}});p.onDestroy(()=>{ll(this._modules,p),E.unsubscribe()})}),function Xg(e,t,n){try{const r=n();return Bu(r)?r.catch(i=>{throw t.runOutsideAngular(()=>e.handleError(i)),i}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(m,i,()=>{const E=p.injector.get(sl);return E.runInitializers(),E.donePromise.then(()=>(lp(p.injector.get(ol,wo)||wo),this._moduleDoBootstrap(p),p))})})}bootstrapModule(n,r=[]){const i=qg({},r);return function Uw(e,t,n){const r=new tc(n);return Promise.resolve(r)}(0,0,n).then(s=>this.bootstrapModuleFactory(s,i))}_moduleDoBootstrap(n){const r=n.injector.get(al);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>r.bootstrap(i));else{if(!n.instance.ngDoBootstrap)throw new ce(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new ce(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Dc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(Mn(Bs))},e.\u0275prov=yt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function qg(e,t){return Array.isArray(t)?t.reduce(qg,e):{...e,...t}}let al=(()=>{class e{constructor(n,r,i){this._zone=n,this._injector=r,this._exceptionHandler=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const s=new O.y(p=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{p.next(this._stable),p.complete()})}),o=new O.y(p=>{let m;this._zone.runOutsideAngular(()=>{m=this._zone.onStable.subscribe(()=>{Lr.assertNotInAngularZone(),mc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,p.next(!0))})})});const E=this._zone.onUnstable.subscribe(()=>{Lr.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{p.next(!1)}))});return()=>{m.unsubscribe(),E.unsubscribe()}});this.isStable=(0,W.T)(s,o.pipe((0,Z.B)()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const i=n instanceof Kd;if(!this._injector.get(sl).done)throw!i&&On(n),new ce(405,false);let o;o=i?n:this._injector.get(Wo).resolveComponentFactory(n),this.componentTypes.push(o.componentType);const p=function $w(e){return e.isBoundToModule}(o)?void 0:this._injector.get(Co),E=o.create(Bs.NULL,[],r||o.selector,p),T=E.location.nativeElement,F=E.injector.get(jg,null);return F?.registerApplication(T),E.onDestroy(()=>{this.detachView(E.hostView),ll(this.components,E),F?.unregisterApplication(T)}),this._loadComponent(E),E}tick(){if(this._runningTick)throw new ce(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;ll(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Lg,[]).concat(this._bootstrapListeners).forEach(i=>i(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>ll(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new ce(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(Mn(Lr),Mn(ks),Mn(Ko))},e.\u0275prov=yt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ll(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let em=!0,tm=!1;function Zw(){return tm=!0,em}function Qw(){if(tm)throw new Error("Cannot enable prod mode after platform setup.");em=!1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Xw=(()=>{class e{}return e.__NG_ELEMENT_ID__=qw,e})();function qw(e){return function Jw(e,t,n){if(Hn(e)&&!n){const r=Nt(e.index,t);return new Yo(r,r)}return 47&e.type?new Yo(t[16],t):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(rn(),Re(),16==(16&e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class sm{constructor(){}supports(t){return Qo(t)}create(t){return new sC(t)}}const iC=(e,t)=>t;class sC{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||iC}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,i=0,s=null;for(;n||r;){const o=!r||n&&n.currentIndex<am(r,i,s)?n:r,p=am(o,i,s),m=o.currentIndex;if(o===r)i--,r=r._nextRemoved;else if(n=n._next,null==o.previousIndex)i++;else{s||(s=[]);const E=p-i,T=m-i;if(E!=T){for(let X=0;X<E;X++){const he=X<s.length?s[X]:s[X]=0,be=he+X;T<=be&&be<E&&(s[X]=he+1)}s[o.previousIndex]=T-E}}p!==m&&t(o,p,m)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!Qo(t))throw new ce(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let i,s,o,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let p=0;p<this.length;p++)s=t[p],o=this._trackByFn(p,s),null!==n&&Object.is(n.trackById,o)?(r&&(n=this._verifyReinsertion(n,s,o,p)),Object.is(n.item,s)||this._addIdentityChange(n,s)):(n=this._mismatch(n,s,o,p),r=!0),n=n._next}else i=0,function L_(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Vs()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,p=>{o=this._trackByFn(i,p),null!==n&&Object.is(n.trackById,o)?(r&&(n=this._verifyReinsertion(n,p,o,i)),Object.is(n.item,p)||this._addIdentityChange(n,p)):(n=this._mismatch(n,p,o,i),r=!0),n=n._next,i++}),this.length=i;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,i){let s;return null===t?s=this._itTail:(s=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,s,i)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,i))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,s,i)):t=this._addAfter(new oC(n,r),s,i),t}_verifyReinsertion(t,n,r,i){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==s?t=this._reinsertAfter(s,t._prev,i):t.currentIndex!=i&&(t.currentIndex=i,this._addToMoves(t,i)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const i=t._prevRemoved,s=t._nextRemoved;return null===i?this._removalsHead=s:i._nextRemoved=s,null===s?this._removalsTail=i:s._prevRemoved=i,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const i=null===n?this._itHead:n._next;return t._next=i,t._prev=n,null===i?this._itTail=t:i._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new om),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new om),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class oC{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class aC{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class om{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new aC,this.map.set(n,r)),r.add(t)}get(t,n){const i=this.map.get(t);return i?i.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function am(e,t,n){const r=e.previousIndex;if(null===r)return r;let i=0;return n&&r<n.length&&(i=n[r]),r+t+i
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class lm{constructor(){}supports(t){return t instanceof Map||Ou(t)}create(){return new lC}}class lC{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Ou(t)))throw new ce(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,i)=>{if(n&&n.key===i)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const s=this._getOrCreateRecordForKey(i,r);n=this._insertBeforeOrAppend(n,s)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const i=this._records.get(t);this._maybeAddToChanges(i,n);const s=i._prev,o=i._next;return s&&(s._next=o),o&&(o._prev=s),i._next=null,i._prev=null,i}const r=new uC(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class uC{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function um(){return new Mc([new sm])}let Mc=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const i=r.factories.slice();n=n.concat(i)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||um()),deps:[[e,new Lo,new No]]}}find(n){const r=this.factories.find(i=>i.supports(n));if(null!=r)return r;throw new ce(901,!1)}}return e.\u0275prov=yt({token:e,providedIn:"root",factory:um}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function cm(){return new Tc([new lm])}let Tc=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const i=r.factories.slice();n=n.concat(i)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||cm()),deps:[[e,new Lo,new No]]}}find(n){const r=this.factories.find(i=>i.supports(n));if(r)return r;throw new ce(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=yt({token:e,providedIn:"root",factory:cm}),e})();const hC=Gg(null,"core",[]);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let fC=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(Mn(al))},e.\u0275mod=In({type:e}),e.\u0275inj=Ye({}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function pC(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function mC(e,t){const n=Rt(e),r=t.elementInjector||Ra();return new Zo(n).create(r,t.projectableNodes,t.hostElement,t.environmentInjector)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,8746:(ze,fe,C)=>{"use strict";C.d(fe,{PW:()=>ls});var v=C(4650),A=C(1481),O=C(7340);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Z(S){return new v.vHH(3e3,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function un(){return typeof window<"u"&&typeof window.document<"u"}function Ye(){return typeof process<"u"&&"[object process]"==={}.toString.call(process)}function kt(S){switch(S.length){case 0:return new O.ZN;case 1:return S[0];default:return new O.ZE(S)}}function Ln(S,a,c,_,b=new Map,P=new Map){const u=[],g=[];let f=-1,w=null;if(_.forEach(R=>{const Y=R.get("offset"),ue=Y==f,Ae=ue&&w||new Map;R.forEach((Ve,We)=>{let rt=We,et=Ve;if("offset"!==We)switch(rt=a.normalizePropertyName(rt,u),et){case O.k1:et=b.get(We);break;case O.l3:et=P.get(We);break;default:et=a.normalizeStyleValue(We,rt,et,u)}Ae.set(rt,et)}),ue||g.push(Ae),w=Ae,f=Y}),u.length)throw function se(S){return new v.vHH(3502,!1)}();return g}function on(S,a,c,_){switch(a){case"start":S.onStart(()=>_(c&&Un(c,"start",S)));break;case"done":S.onDone(()=>_(c&&Un(c,"done",S)));break;case"destroy":S.onDestroy(()=>_(c&&Un(c,"destroy",S)))}}function Un(S,a,c){const P=Qe(S.element,S.triggerName,S.fromState,S.toState,a||S.phaseName,c.totalTime??S.totalTime,!!c.disabled),u=S._data;return null!=u&&(P._data=u),P}function Qe(S,a,c,_,b="",P=0,u){return{element:S,triggerName:a,fromState:c,toState:_,phaseName:b,totalTime:P,disabled:!!u}}function He(S,a,c){let _=S.get(a);return _||S.set(a,_=c),_}function Ue(S){const a=S.indexOf(":");return[S.substring(1,a),S.slice(a+1)]}let at=(S,a)=>!1,wt=(S,a,c)=>[],Xt=null;function J(S){const a=S.parentNode||S.host;return a===Xt?null:a}(Ye()||typeof Element<"u")&&(un()?(Xt=(()=>document.documentElement)(),at=(S,a)=>{for(;a;){if(a===S)return!0;a=J(a)}return!1}):at=(S,a)=>S.contains(a),wt=(S,a,c)=>{if(c)return Array.from(S.querySelectorAll(a));const _=S.querySelector(a);return _?[_]:[]});let V=null,L=!1;const k=at,x=wt;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let de=(()=>{class S{validateStyleProperty(c){return function re(S){V||(V=function K(){return typeof document<"u"?document.body:null}()||{},L=!!V.style&&"WebkitAppearance"in V.style);let a=!0;return V.style&&!function N(S){return"ebkit"==S.substring(1,6)}(S)&&(a=S in V.style,!a&&L&&(a="Webkit"+S.charAt(0).toUpperCase()+S.slice(1)in V.style)),a}(c)}matchesElement(c,_){return!1}containsElement(c,_){return k(c,_)}getParentElement(c){return J(c)}query(c,_,b){return x(c,_,b)}computeStyle(c,_,b){return b||""}animate(c,_,b,P,u,g=[],f){return new O.ZN(b,P)}}return S.\u0275fac=function(c){return new(c||S)},S.\u0275prov=v.Yz7({token:S,factory:S.\u0275fac}),S})(),Ze=(()=>{class S{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return S.NOOP=new de,S})();const Lt="ng-enter",_t="ng-leave",cn="ng-trigger",ht=".ng-trigger",Mt="ng-animating",Pt=".ng-animating";function qt(S){if("number"==typeof S)return S;const a=S.match(/^(-?[\.\d]+)(m?s)/);return!a||a.length<2?0:dn(parseFloat(a[1]),a[2])}function dn(S,a){return"s"===a?1e3*S:S}function Zt(S,a,c){return S.hasOwnProperty("duration")?S:function kn(S,a,c){let b,P=0,u="";if("string"==typeof S){const g=S.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===g)return a.push(Z()),{duration:0,delay:0,easing:""};b=dn(parseFloat(g[1]),g[2]);const f=g[3];null!=f&&(P=dn(parseFloat(f),g[4]));const w=g[5];w&&(u=w)}else b=S;if(!c){let g=!1,f=a.length;b<0&&(a.push(function Q(){return new v.vHH(3100,!1)}()),g=!0),P<0&&(a.push(function oe(){return new v.vHH(3101,!1)}()),g=!0),g&&a.splice(f,0,Z())}return{duration:b,delay:P,easing:u}}(S,a,c)}function Bn(S,a={}){return Object.keys(S).forEach(c=>{a[c]=S[c]}),a}function In(S){const a=new Map;return Object.keys(S).forEach(c=>{a.set(c,S[c])}),a}function Rn(S,a=new Map,c){if(c)for(let[_,b]of c)a.set(_,b);for(let[_,b]of S)a.set(_,b);return a}function si(S,a,c){return c?a+":"+c+";":""}function Rt(S){let a="";for(let c=0;c<S.style.length;c++){const _=S.style.item(c);a+=si(0,_,S.style.getPropertyValue(_))}for(const c in S.style)S.style.hasOwnProperty(c)&&!c.startsWith("_")&&(a+=si(0,Ke(c),S.style[c]));S.setAttribute("style",a)}function Vt(S,a,c){S.style&&(a.forEach((_,b)=>{const P=Me(b);c&&!c.has(b)&&c.set(b,S.style[P]),S.style[P]=_}),Ye()&&Rt(S))}function Ht(S,a){S.style&&(a.forEach((c,_)=>{const b=Me(_);S.style[b]=""}),Ye()&&Rt(S))}function On(S){return Array.isArray(S)?1==S.length?S[0]:(0,O.vP)(S):S}const hn=new RegExp("{{\\s*(.+?)\\s*}}","g");function z(S){let a=[];if("string"==typeof S){let c;for(;c=hn.exec(S);)a.push(c[1]);hn.lastIndex=0}return a}function $(S,a,c){const _=S.toString(),b=_.replace(hn,(P,u)=>{let g=a[u];return null==g&&(c.push(function G(S){return new v.vHH(3003,!1)}()),g=""),g.toString()});return b==_?S:b}function B(S){const a=[];let c=S.next();for(;!c.done;)a.push(c.value),c=S.next();return a}const ge=/-+([a-z0-9])/g;function Me(S){return S.replace(ge,(...a)=>a[1].toUpperCase())}function Ke(S){return S.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function xt(S,a,c){switch(a.type){case 7:return S.visitTrigger(a,c);case 0:return S.visitState(a,c);case 1:return S.visitTransition(a,c);case 2:return S.visitSequence(a,c);case 3:return S.visitGroup(a,c);case 4:return S.visitAnimate(a,c);case 5:return S.visitKeyframes(a,c);case 6:return S.visitStyle(a,c);case 8:return S.visitReference(a,c);case 9:return S.visitAnimateChild(a,c);case 10:return S.visitAnimateRef(a,c);case 11:return S.visitQuery(a,c);case 12:return S.visitStagger(a,c);default:throw function ee(S){return new v.vHH(3004,!1)}()}}function qn(S,a){return window.getComputedStyle(S)[a]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vn(S,a){const c=[];return"string"==typeof S?S.split(/\s*,\s*/).forEach(_=>function Br(S,a,c){if(":"==S[0]){const f=function Ci(S,a){switch(S){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(c,_)=>parseFloat(_)>parseFloat(c);case":decrement":return(c,_)=>parseFloat(_)<parseFloat(c);default:return a.push(function Ee(S){return new v.vHH(3016,!1)}()),"* => *"}}(S,c);if("function"==typeof f)return void a.push(f);S=f}const _=S.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==_||_.length<4)return c.push(function De(S){return new v.vHH(3015,!1)}()),a;const b=_[1],P=_[2],u=_[3];a.push(_r(b,u));"<"==P[0]&&!("*"==b&&"*"==u)&&a.push(_r(u,b))}(_,c,a)):c.push(S),c}const Ft=new Set(["true","1"]),Tr=new Set(["false","0"]);function _r(S,a){const c=Ft.has(S)||Tr.has(S),_=Ft.has(a)||Tr.has(a);return(b,P)=>{let u="*"==S||S==b,g="*"==a||a==P;return!u&&c&&"boolean"==typeof b&&(u=b?Ft.has(S):Tr.has(S)),!g&&_&&"boolean"==typeof P&&(g=P?Ft.has(a):Tr.has(a)),u&&g}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Vr=new RegExp("s*:selfs*,?","g");function dr(S,a,c,_){return new hr(S).build(a,c,_)}class hr{constructor(a){this._driver=a}build(a,c,_){const b=new Gt(c);return this._resetContextStyleTimingState(b),xt(this,On(a),b)}_resetContextStyleTimingState(a){a.currentQuerySelector="",a.collectedStyles=new Map,a.collectedStyles.set("",new Map),a.currentTime=0}visitTrigger(a,c){let _=c.queryCount=0,b=c.depCount=0;const P=[],u=[];return"@"==a.name.charAt(0)&&c.errors.push(function ie(){return new v.vHH(3006,!1)}()),a.definitions.forEach(g=>{if(this._resetContextStyleTimingState(c),0==g.type){const f=g,w=f.name;w.toString().split(/\s*,\s*/).forEach(R=>{f.name=R,P.push(this.visitState(f,c))}),f.name=w}else if(1==g.type){const f=this.visitTransition(g,c);_+=f.queryCount,b+=f.depCount,u.push(f)}else c.errors.push(function Pe(){return new v.vHH(3007,!1)}())}),{type:7,name:a.name,states:P,transitions:u,queryCount:_,depCount:b,options:null}}visitState(a,c){const _=this.visitStyle(a.styles,c),b=a.options&&a.options.params||null;if(_.containsDynamicStyles){const P=new Set,u=b||{};_.styles.forEach(g=>{g instanceof Map&&g.forEach(f=>{z(f).forEach(w=>{u.hasOwnProperty(w)||P.add(w)})})}),P.size&&(B(P.values()),c.errors.push(function Ce(S,a){return new v.vHH(3008,!1)}()))}return{type:0,name:a.name,style:_,options:b?{params:b}:null}}visitTransition(a,c){c.queryCount=0,c.depCount=0;const _=xt(this,On(a.animation),c);return{type:1,matchers:Vn(a.expr,c.errors),animation:_,queryCount:c.queryCount,depCount:c.depCount,options:Hn(a.options)}}visitSequence(a,c){return{type:2,steps:a.steps.map(_=>xt(this,_,c)),options:Hn(a.options)}}visitGroup(a,c){const _=c.currentTime;let b=0;const P=a.steps.map(u=>{c.currentTime=_;const g=xt(this,u,c);return b=Math.max(b,c.currentTime),g});return c.currentTime=b,{type:3,steps:P,options:Hn(a.options)}}visitAnimate(a,c){const _=function Er(S,a){if(S.hasOwnProperty("duration"))return S;if("number"==typeof S)return wr(Zt(S,a).duration,0,"");const c=S;if(c.split(/\s+/).some(P=>"{"==P.charAt(0)&&"{"==P.charAt(1))){const P=wr(0,0,"");return P.dynamic=!0,P.strValue=c,P}const b=Zt(c,a);return wr(b.duration,b.delay,b.easing)}(a.timings,c.errors);c.currentAnimateTimings=_;let b,P=a.styles?a.styles:(0,O.oB)({});if(5==P.type)b=this.visitKeyframes(P,c);else{let u=a.styles,g=!1;if(!u){g=!0;const w={};_.easing&&(w.easing=_.easing),u=(0,O.oB)(w)}c.currentTime+=_.duration+_.delay;const f=this.visitStyle(u,c);f.isEmptyStep=g,b=f}return c.currentAnimateTimings=null,{type:4,timings:_,style:b,options:null}}visitStyle(a,c){const _=this._makeStyleAst(a,c);return this._validateStyleAst(_,c),_}_makeStyleAst(a,c){const _=[],b=Array.isArray(a.styles)?a.styles:[a.styles];for(let g of b)"string"==typeof g?g===O.l3?_.push(g):c.errors.push(new v.vHH(3002,!1)):_.push(In(g));let P=!1,u=null;return _.forEach(g=>{if(g instanceof Map&&(g.has("easing")&&(u=g.get("easing"),g.delete("easing")),!P))for(let f of g.values())if(f.toString().indexOf("{{")>=0){P=!0;break}}),{type:6,styles:_,easing:u,offset:a.offset,containsDynamicStyles:P,options:null}}_validateStyleAst(a,c){const _=c.currentAnimateTimings;let b=c.currentTime,P=c.currentTime;_&&P>0&&(P-=_.duration+_.delay),a.styles.forEach(u=>{"string"!=typeof u&&u.forEach((g,f)=>{const w=c.collectedStyles.get(c.currentQuerySelector),R=w.get(f);let Y=!0;R&&(P!=b&&P>=R.startTime&&b<=R.endTime&&(c.errors.push(function pe(S,a,c,_,b){return new v.vHH(3010,!1)}()),Y=!1),P=R.startTime),Y&&w.set(f,{startTime:P,endTime:b}),c.options&&function yn(S,a,c){const _=a.params||{},b=z(S);b.length&&b.forEach(P=>{_.hasOwnProperty(P)||c.push(function te(S){return new v.vHH(3001,!1)}())})}(g,c.options,c.errors)})})}visitKeyframes(a,c){const _={type:5,styles:[],options:null};if(!c.currentAnimateTimings)return c.errors.push(function Te(){return new v.vHH(3011,!1)}()),_;let P=0;const u=[];let g=!1,f=!1,w=0;const R=a.steps.map(et=>{const It=this._makeStyleAst(et,c);let mt=null!=It.offset?It.offset:function fn(S){if("string"==typeof S)return null;let a=null;if(Array.isArray(S))S.forEach(c=>{if(c instanceof Map&&c.has("offset")){const _=c;a=parseFloat(_.get("offset")),_.delete("offset")}});else if(S instanceof Map&&S.has("offset")){const c=S;a=parseFloat(c.get("offset")),c.delete("offset")}return a}(It.styles),Dt=0;return null!=mt&&(P++,Dt=It.offset=mt),f=f||Dt<0||Dt>1,g=g||Dt<w,w=Dt,u.push(Dt),It});f&&c.errors.push(function it(){return new v.vHH(3012,!1)}()),g&&c.errors.push(function vt(){return new v.vHH(3200,!1)}());const Y=a.steps.length;let ue=0;P>0&&P<Y?c.errors.push(function we(){return new v.vHH(3202,!1)}()):0==P&&(ue=1/(Y-1));const Ae=Y-1,Ve=c.currentTime,We=c.currentAnimateTimings,rt=We.duration;return R.forEach((et,It)=>{const mt=ue>0?It==Ae?1:ue*It:u[It],Dt=mt*rt;c.currentTime=Ve+We.delay+Dt,We.duration=Dt,this._validateStyleAst(et,c),et.offset=mt,_.styles.push(et)}),_}visitReference(a,c){return{type:8,animation:xt(this,On(a.animation),c),options:Hn(a.options)}}visitAnimateChild(a,c){return c.depCount++,{type:9,options:Hn(a.options)}}visitAnimateRef(a,c){return{type:10,animation:this.visitReference(a.animation,c),options:Hn(a.options)}}visitQuery(a,c){const _=c.currentQuerySelector,b=a.options||{};c.queryCount++,c.currentQuery=a;const[P,u]=function jt(S){const a=!!S.split(/\s*,\s*/).find(c=>":self"==c);return a&&(S=S.replace(Vr,"")),S=S.replace(/@\*/g,ht).replace(/@\w+/g,c=>ht+"-"+c.slice(1)).replace(/:animating/g,Pt),[S,a]}(a.selector);c.currentQuerySelector=_.length?_+" "+P:P,He(c.collectedStyles,c.currentQuerySelector,new Map);const g=xt(this,On(a.animation),c);return c.currentQuery=null,c.currentQuerySelector=_,{type:11,selector:P,limit:b.limit||0,optional:!!b.optional,includeSelf:u,animation:g,originalSelector:a.selector,options:Hn(a.options)}}visitStagger(a,c){c.currentQuery||c.errors.push(function j(){return new v.vHH(3013,!1)}());const _="full"===a.timings?{duration:0,delay:0,easing:"full"}:Zt(a.timings,c.errors,!0);return{type:12,animation:xt(this,On(a.animation),c),timings:_,options:null}}}class Gt{constructor(a){this.errors=a,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function Hn(S){return S?(S=Bn(S)).params&&(S.params=function Si(S){return S?Bn(S):null}(S.params)):S={},S}function wr(S,a,c){return{duration:S,delay:a,easing:c}}function xn(S,a,c,_,b,P,u=null,g=!1){return{type:1,element:S,keyframes:a,preStyleProps:c,postStyleProps:_,duration:b,delay:P,totalTime:b+P,easing:u,subTimeline:g}}class Hr{constructor(){this._map=new Map}get(a){return this._map.get(a)||[]}append(a,c){let _=this._map.get(a);_||this._map.set(a,_=[]),_.push(...c)}has(a){return this._map.has(a)}clear(){this._map.clear()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ps=new RegExp(":enter","g"),zn=new RegExp(":leave","g");function Qi(S,a,c,_,b,P=new Map,u=new Map,g,f,w=[]){return(new Ws).buildKeyframes(S,a,c,_,b,P,u,g,f,w)}class Ws{buildKeyframes(a,c,_,b,P,u,g,f,w,R=[]){w=w||new Hr;const Y=new Xi(a,c,w,b,P,R,[]);Y.options=f;const ue=f.delay?qt(f.delay):0;Y.currentTimeline.delayNextStep(ue),Y.currentTimeline.setStyles([u],null,Y.errors,f),xt(this,_,Y);const Ae=Y.timelines.filter(Ve=>Ve.containsAnimation());if(Ae.length&&g.size){let Ve;for(let We=Ae.length-1;We>=0;We--){const rt=Ae[We];if(rt.element===c){Ve=rt;break}}Ve&&!Ve.allowOnlyTimelineStyles()&&Ve.setStyles([g],null,Y.errors,f)}return Ae.length?Ae.map(Ve=>Ve.buildKeyframes()):[xn(c,[],[],[],0,ue,"",!1)]}visitTrigger(a,c){}visitState(a,c){}visitTransition(a,c){}visitAnimateChild(a,c){const _=c.subInstructions.get(c.element);if(_){const b=c.createSubContext(a.options),P=c.currentTimeline.currentTime,u=this._visitSubInstructions(_,b,b.options);P!=u&&c.transformIntoNewTimeline(u)}c.previousNode=a}visitAnimateRef(a,c){const _=c.createSubContext(a.options);_.transformIntoNewTimeline(),this._applyAnimationRefDelays([a.options,a.animation.options],c,_),this.visitReference(a.animation,_),c.transformIntoNewTimeline(_.currentTimeline.currentTime),c.previousNode=a}_applyAnimationRefDelays(a,c,_){for(const b of a){const P=b?.delay;if(P){const u="number"==typeof P?P:qt($(P,b?.params??{},c.errors));_.delayNextStep(u)}}}_visitSubInstructions(a,c,_){let P=c.currentTimeline.currentTime;const u=null!=_.duration?qt(_.duration):null,g=null!=_.delay?qt(_.delay):null;return 0!==u&&a.forEach(f=>{const w=c.appendInstructionToTimeline(f,u,g);P=Math.max(P,w.duration+w.delay)}),P}visitReference(a,c){c.updateOptions(a.options,!0),xt(this,a.animation,c),c.previousNode=a}visitSequence(a,c){const _=c.subContextCount;let b=c;const P=a.options;if(P&&(P.params||P.delay)&&(b=c.createSubContext(P),b.transformIntoNewTimeline(),null!=P.delay)){6==b.previousNode.type&&(b.currentTimeline.snapshotCurrentStyles(),b.previousNode=oi);const u=qt(P.delay);b.delayNextStep(u)}a.steps.length&&(a.steps.forEach(u=>xt(this,u,b)),b.currentTimeline.applyStylesToKeyframe(),b.subContextCount>_&&b.transformIntoNewTimeline()),c.previousNode=a}visitGroup(a,c){const _=[];let b=c.currentTimeline.currentTime;const P=a.options&&a.options.delay?qt(a.options.delay):0;a.steps.forEach(u=>{const g=c.createSubContext(a.options);P&&g.delayNextStep(P),xt(this,u,g),b=Math.max(b,g.currentTimeline.currentTime),_.push(g.currentTimeline)}),_.forEach(u=>c.currentTimeline.mergeTimelineCollectedStyles(u)),c.transformIntoNewTimeline(b),c.previousNode=a}_visitTiming(a,c){if(a.dynamic){const _=a.strValue;return Zt(c.params?$(_,c.params,c.errors):_,c.errors)}return{duration:a.duration,delay:a.delay,easing:a.easing}}visitAnimate(a,c){const _=c.currentAnimateTimings=this._visitTiming(a.timings,c),b=c.currentTimeline;_.delay&&(c.incrementTime(_.delay),b.snapshotCurrentStyles());const P=a.style;5==P.type?this.visitKeyframes(P,c):(c.incrementTime(_.duration),this.visitStyle(P,c),b.applyStylesToKeyframe()),c.currentAnimateTimings=null,c.previousNode=a}visitStyle(a,c){const _=c.currentTimeline,b=c.currentAnimateTimings;!b&&_.hasCurrentStyleProperties()&&_.forwardFrame();const P=b&&b.easing||a.easing;a.isEmptyStep?_.applyEmptyStep(P):_.setStyles(a.styles,P,c.errors,c.options),c.previousNode=a}visitKeyframes(a,c){const _=c.currentAnimateTimings,b=c.currentTimeline.duration,P=_.duration,g=c.createSubContext().currentTimeline;g.easing=_.easing,a.styles.forEach(f=>{g.forwardTime((f.offset||0)*P),g.setStyles(f.styles,f.easing,c.errors,c.options),g.applyStylesToKeyframe()}),c.currentTimeline.mergeTimelineCollectedStyles(g),c.transformIntoNewTimeline(b+P),c.previousNode=a}visitQuery(a,c){const _=c.currentTimeline.currentTime,b=a.options||{},P=b.delay?qt(b.delay):0;P&&(6===c.previousNode.type||0==_&&c.currentTimeline.hasCurrentStyleProperties())&&(c.currentTimeline.snapshotCurrentStyles(),c.previousNode=oi);let u=_;const g=c.invokeQuery(a.selector,a.originalSelector,a.limit,a.includeSelf,!!b.optional,c.errors);c.currentQueryTotal=g.length;let f=null;g.forEach((w,R)=>{c.currentQueryIndex=R;const Y=c.createSubContext(a.options,w);P&&Y.delayNextStep(P),w===c.element&&(f=Y.currentTimeline),xt(this,a.animation,Y),Y.currentTimeline.applyStylesToKeyframe(),u=Math.max(u,Y.currentTimeline.currentTime)}),c.currentQueryIndex=0,c.currentQueryTotal=0,c.transformIntoNewTimeline(u),f&&(c.currentTimeline.mergeTimelineCollectedStyles(f),c.currentTimeline.snapshotCurrentStyles()),c.previousNode=a}visitStagger(a,c){const _=c.parentContext,b=c.currentTimeline,P=a.timings,u=Math.abs(P.duration),g=u*(c.currentQueryTotal-1);let f=u*c.currentQueryIndex;switch(P.duration<0?"reverse":P.easing){case"reverse":f=g-f;break;case"full":f=_.currentStaggerTime}const R=c.currentTimeline;f&&R.delayNextStep(f);const Y=R.currentTime;xt(this,a.animation,c),c.previousNode=a,_.currentStaggerTime=b.currentTime-Y+(b.startTime-_.currentTimeline.startTime)}}const oi={};class Xi{constructor(a,c,_,b,P,u,g,f){this._driver=a,this.element=c,this.subInstructions=_,this._enterClassName=b,this._leaveClassName=P,this.errors=u,this.timelines=g,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=oi,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=f||new jr(this._driver,c,0),g.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(a,c){if(!a)return;const _=a;let b=this.options;null!=_.duration&&(b.duration=qt(_.duration)),null!=_.delay&&(b.delay=qt(_.delay));const P=_.params;if(P){let u=b.params;u||(u=this.options.params={}),Object.keys(P).forEach(g=>{(!c||!u.hasOwnProperty(g))&&(u[g]=$(P[g],u,this.errors))})}}_copyOptions(){const a={};if(this.options){const c=this.options.params;if(c){const _=a.params={};Object.keys(c).forEach(b=>{_[b]=c[b]})}}return a}createSubContext(a=null,c,_){const b=c||this.element,P=new Xi(this._driver,b,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(b,_||0));return P.previousNode=this.previousNode,P.currentAnimateTimings=this.currentAnimateTimings,P.options=this._copyOptions(),P.updateOptions(a),P.currentQueryIndex=this.currentQueryIndex,P.currentQueryTotal=this.currentQueryTotal,P.parentContext=this,this.subContextCount++,P}transformIntoNewTimeline(a){return this.previousNode=oi,this.currentTimeline=this.currentTimeline.fork(this.element,a),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(a,c,_){const b={duration:c??a.duration,delay:this.currentTimeline.currentTime+(_??0)+a.delay,easing:""},P=new qi(this._driver,a.element,a.keyframes,a.preStyleProps,a.postStyleProps,b,a.stretchStartingKeyframe);return this.timelines.push(P),b}incrementTime(a){this.currentTimeline.forwardTime(this.currentTimeline.duration+a)}delayNextStep(a){a>0&&this.currentTimeline.delayNextStep(a)}invokeQuery(a,c,_,b,P,u){let g=[];if(b&&g.push(this.element),a.length>0){a=(a=a.replace(ps,"."+this._enterClassName)).replace(zn,"."+this._leaveClassName);let w=this._driver.query(this.element,a,1!=_);0!==_&&(w=_<0?w.slice(w.length+_,w.length):w.slice(0,_)),g.push(...w)}return!P&&0==g.length&&u.push(function me(S){return new v.vHH(3014,!1)}()),g}}class jr{constructor(a,c,_,b){this._driver=a,this.element=c,this.startTime=_,this._elementTimelineStylesLookup=b,this.duration=0,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(c),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(c,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(a){const c=1===this._keyframes.size&&this._pendingStyles.size;this.duration||c?(this.forwardTime(this.currentTime+a),c&&this.snapshotCurrentStyles()):this.startTime+=a}fork(a,c){return this.applyStylesToKeyframe(),new jr(this._driver,a,c||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(a){this.applyStylesToKeyframe(),this.duration=a,this._loadKeyframe()}_updateStyle(a,c){this._localTimelineStyles.set(a,c),this._globalTimelineStyles.set(a,c),this._styleSummary.set(a,{time:this.currentTime,value:c})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(a){a&&this._previousKeyframe.set("easing",a);for(let[c,_]of this._globalTimelineStyles)this._backFill.set(c,_||O.l3),this._currentKeyframe.set(c,O.l3);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(a,c,_,b){c&&this._previousKeyframe.set("easing",c);const P=b&&b.params||{},u=function fr(S,a){const c=new Map;let _;return S.forEach(b=>{if("*"===b){_=_||a.keys();for(let P of _)c.set(P,O.l3)}else Rn(b,c)}),c}(a,this._globalTimelineStyles);for(let[g,f]of u){const w=$(f,P,_);this._pendingStyles.set(g,w),this._localTimelineStyles.has(g)||this._backFill.set(g,this._globalTimelineStyles.get(g)??O.l3),this._updateStyle(g,w)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((a,c)=>{this._currentKeyframe.set(c,a)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((a,c)=>{this._currentKeyframe.has(c)||this._currentKeyframe.set(c,a)}))}snapshotCurrentStyles(){for(let[a,c]of this._localTimelineStyles)this._pendingStyles.set(a,c),this._updateStyle(a,c)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const a=[];for(let c in this._currentKeyframe)a.push(c);return a}mergeTimelineCollectedStyles(a){a._styleSummary.forEach((c,_)=>{const b=this._styleSummary.get(_);(!b||c.time>b.time)&&this._updateStyle(_,c.value)})}buildKeyframes(){this.applyStylesToKeyframe();const a=new Set,c=new Set,_=1===this._keyframes.size&&0===this.duration;let b=[];this._keyframes.forEach((g,f)=>{const w=Rn(g,new Map,this._backFill);w.forEach((R,Y)=>{R===O.k1?a.add(Y):R===O.l3&&c.add(Y)}),_||w.set("offset",f/this.duration),b.push(w)});const P=a.size?B(a.values()):[],u=c.size?B(c.values()):[];if(_){const g=b[0],f=new Map(g);g.set("offset",0),f.set("offset",1),b=[g,f]}return xn(this.element,b,P,u,this.duration,this.startTime,this.easing,!1)}}class qi extends jr{constructor(a,c,_,b,P,u,g=!1){super(a,c,u.delay),this.keyframes=_,this.preStyleProps=b,this.postStyleProps=P,this._stretchStartingKeyframe=g,this.timings={duration:u.duration,delay:u.delay,easing:u.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let a=this.keyframes,{delay:c,duration:_,easing:b}=this.timings;if(this._stretchStartingKeyframe&&c){const P=[],u=_+c,g=c/u,f=Rn(a[0]);f.set("offset",0),P.push(f);const w=Rn(a[0]);w.set("offset",bi(g)),P.push(w);const R=a.length-1;for(let Y=1;Y<=R;Y++){let ue=Rn(a[Y]);const Ae=ue.get("offset");ue.set("offset",bi((c+Ae*_)/u)),P.push(ue)}_=u,c=0,b="",a=P}return xn(this.element,a,this.preStyleProps,this.postStyleProps,_,c,b,!0)}}function bi(S,a=3){const c=Math.pow(10,a-1);return Math.round(S*c)/c}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Mi{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Gs=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class Jn extends Mi{normalizePropertyName(a,c){return Me(a)}normalizeStyleValue(a,c,_,b){let P="";const u=_.toString().trim();if(Gs.has(c)&&0!==_&&"0"!==_)if("number"==typeof _)P="px";else{const g=_.match(/^[+-]?[\d\.]+([a-z]*)$/);g&&0==g[1].length&&b.push(function q(S,a){return new v.vHH(3005,!1)}())}return u+P}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function $r(S,a,c,_,b,P,u,g,f,w,R,Y,ue){return{type:0,element:S,triggerName:a,isRemovalTransition:b,fromState:c,fromStyles:P,toState:_,toStyles:u,timelines:g,queriedElements:f,preStyleProps:w,postStyleProps:R,totalTime:Y,errors:ue}}const Ti={};class ai{constructor(a,c,_){this._triggerName=a,this.ast=c,this._stateStyles=_}match(a,c,_,b){return function Wn(S,a,c,_,b){return S.some(P=>P(a,c,_,b))}(this.ast.matchers,a,c,_,b)}buildStyles(a,c,_){let b=this._stateStyles.get("*");return void 0!==a&&(b=this._stateStyles.get(a?.toString())||b),b?b.buildStyles(c,_):new Map}build(a,c,_,b,P,u,g,f,w,R){const Y=[],ue=this.ast.options&&this.ast.options.params||Ti,Ve=this.buildStyles(_,g&&g.params||Ti,Y),We=f&&f.params||Ti,rt=this.buildStyles(b,We,Y),et=new Set,It=new Map,mt=new Map,Dt="void"===b,Dn={params:Ii(We,ue),delay:this.ast.options?.delay},Qt=R?[]:Qi(a,c,this.ast.animation,P,u,Ve,rt,Dn,w,Y);let Kt=0;if(Qt.forEach(tn=>{Kt=Math.max(tn.duration+tn.delay,Kt)}),Y.length)return $r(c,this._triggerName,_,b,Dt,Ve,rt,[],[],It,mt,Kt,Y);Qt.forEach(tn=>{const En=tn.element,Bi=He(It,En,new Set);tn.preStyleProps.forEach(nr=>Bi.add(nr));const fi=He(mt,En,new Set);tn.postStyleProps.forEach(nr=>fi.add(nr)),En!==c&&et.add(En)});const pn=B(et.values());return $r(c,this._triggerName,_,b,Dt,Ve,rt,Qt,pn,It,mt,Kt)}}function Ii(S,a){const c=Bn(a);for(const _ in S)S.hasOwnProperty(_)&&null!=S[_]&&(c[_]=S[_]);return c}class zr{constructor(a,c,_){this.styles=a,this.defaultParams=c,this.normalizer=_}buildStyles(a,c){const _=new Map,b=Bn(this.defaultParams);return Object.keys(a).forEach(P=>{const u=a[P];null!==u&&(b[P]=u)}),this.styles.styles.forEach(P=>{"string"!=typeof P&&P.forEach((u,g)=>{u&&(u=$(u,b,c));const f=this.normalizer.normalizePropertyName(g,c);u=this.normalizer.normalizeStyleValue(g,f,u,c),_.set(f,u)})}),_}}class Ai{constructor(a,c,_){this.name=a,this.ast=c,this._normalizer=_,this.transitionFactories=[],this.states=new Map,c.states.forEach(b=>{this.states.set(b.name,new zr(b.style,b.options&&b.options.params||{},_))}),Pi(this.states,"true","1"),Pi(this.states,"false","0"),c.transitions.forEach(b=>{this.transitionFactories.push(new ai(a,b,this.states))}),this.fallbackTransition=function Cr(S,a,c){return new ai(S,{type:1,animation:{type:2,steps:[],options:null},matchers:[(u,g)=>!0],options:null,queryCount:0,depCount:0},a)}(a,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(a,c,_,b){return this.transitionFactories.find(u=>u.match(a,c,_,b))||null}matchStyles(a,c,_){return this.fallbackTransition.buildStyles(a,c,_)}}function Pi(S,a,c){S.has(a)?S.has(c)||S.set(c,S.get(a)):S.has(c)&&S.set(a,S.get(c))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ys=new Hr;class Ri{constructor(a,c,_){this.bodyNode=a,this._driver=c,this._normalizer=_,this._animations=new Map,this._playersById=new Map,this.players=[]}register(a,c){const _=[],P=dr(this._driver,c,_,[]);if(_.length)throw function ye(S){return new v.vHH(3503,!1)}();this._animations.set(a,P)}_buildPlayer(a,c,_){const b=a.element,P=Ln(0,this._normalizer,0,a.keyframes,c,_);return this._driver.animate(b,P,a.duration,a.delay,a.easing,[],!0)}create(a,c,_={}){const b=[],P=this._animations.get(a);let u;const g=new Map;if(P?(u=Qi(this._driver,c,P,Lt,_t,new Map,new Map,_,ys,b),u.forEach(R=>{const Y=He(g,R.element,new Map);R.postStyleProps.forEach(ue=>Y.set(ue,null))})):(b.push(function le(){return new v.vHH(3300,!1)}()),u=[]),b.length)throw function Le(S){return new v.vHH(3504,!1)}();g.forEach((R,Y)=>{R.forEach((ue,Ae)=>{R.set(Ae,this._driver.computeStyle(Y,Ae,O.l3))})});const w=kt(u.map(R=>{const Y=g.get(R.element);return this._buildPlayer(R,new Map,Y)}));return this._playersById.set(a,w),w.onDestroy(()=>this.destroy(a)),this.players.push(w),w}destroy(a){const c=this._getPlayer(a);c.destroy(),this._playersById.delete(a);const _=this.players.indexOf(c);_>=0&&this.players.splice(_,1)}_getPlayer(a){const c=this._playersById.get(a);if(!c)throw function Ne(S){return new v.vHH(3301,!1)}();return c}listen(a,c,_,b){const P=Qe(c,"","","");return on(this._getPlayer(a),_,P,b),()=>{}}command(a,c,_,b){if("register"==_)return void this.register(a,b[0]);if("create"==_)return void this.create(a,c,b[0]||{});const P=this._getPlayer(a);switch(_){case"play":P.play();break;case"pause":P.pause();break;case"reset":P.reset();break;case"restart":P.restart();break;case"finish":P.finish();break;case"init":P.init();break;case"setPosition":P.setPosition(parseFloat(b[0]));break;case"destroy":this.destroy(a)}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ar="ng-animate-queued",_n="ng-animate-disabled",Oi=[],es={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},en={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Fn="__ng_removed";class ci{constructor(a,c=""){this.namespaceId=c;const _=a&&a.hasOwnProperty("value");if(this.value=function Ks(S){return S??null}(_?a.value:a),_){const P=Bn(a);delete P.value,this.options=P}else this.options={};this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(a){const c=a.params;if(c){const _=this.options.params;Object.keys(c).forEach(b=>{null==_[b]&&(_[b]=c[b])})}}}const Gn="void",Cn=new ci(Gn);class To{constructor(a,c,_){this.id=a,this.hostElement=c,this._engine=_,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+a,tt(c,this._hostClassName)}listen(a,c,_,b){if(!this._triggers.has(c))throw function st(S,a){return new v.vHH(3302,!1)}();if(null==_||0==_.length)throw function bt(S){return new v.vHH(3303,!1)}();if(!function Ys(S){return"start"==S||"done"==S}(_))throw function gt(S,a){return new v.vHH(3400,!1)}();const P=He(this._elementListeners,a,[]),u={name:c,phase:_,callback:b};P.push(u);const g=He(this._engine.statesByElement,a,new Map);return g.has(c)||(tt(a,cn),tt(a,cn+"-"+c),g.set(c,Cn)),()=>{this._engine.afterFlush(()=>{const f=P.indexOf(u);f>=0&&P.splice(f,1),this._triggers.has(c)||g.delete(c)})}}register(a,c){return!this._triggers.has(a)&&(this._triggers.set(a,c),!0)}_getTrigger(a){const c=this._triggers.get(a);if(!c)throw function $e(S){return new v.vHH(3401,!1)}();return c}trigger(a,c,_,b=!0){const P=this._getTrigger(c),u=new Rr(this.id,c,a);let g=this._engine.statesByElement.get(a);g||(tt(a,cn),tt(a,cn+"-"+c),this._engine.statesByElement.set(a,g=new Map));let f=g.get(c);const w=new ci(_,this.id);if(!(_&&_.hasOwnProperty("value"))&&f&&w.absorbOptions(f.options),g.set(c,w),f||(f=Cn),w.value!==Gn&&f.value===w.value){if(!function _s(S,a){const c=Object.keys(S),_=Object.keys(a);if(c.length!=_.length)return!1;for(let b=0;b<c.length;b++){const P=c[b];if(!a.hasOwnProperty(P)||S[P]!==a[P])return!1}return!0}(f.params,w.params)){const We=[],rt=P.matchStyles(f.value,f.params,We),et=P.matchStyles(w.value,w.params,We);We.length?this._engine.reportError(We):this._engine.afterFlush(()=>{Ht(a,rt),Vt(a,et)})}return}const ue=He(this._engine.playersByElement,a,[]);ue.forEach(We=>{We.namespaceId==this.id&&We.triggerName==c&&We.queued&&We.destroy()});let Ae=P.matchTransition(f.value,w.value,a,w.params),Ve=!1;if(!Ae){if(!b)return;Ae=P.fallbackTransition,Ve=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:a,triggerName:c,transition:Ae,fromState:f,toState:w,player:u,isFallbackTransition:Ve}),Ve||(tt(a,Ar),u.onStart(()=>{Or(a,Ar)})),u.onDone(()=>{let We=this.players.indexOf(u);We>=0&&this.players.splice(We,1);const rt=this._engine.playersByElement.get(a);if(rt){let et=rt.indexOf(u);et>=0&&rt.splice(et,1)}}),this.players.push(u),ue.push(u),u}deregister(a){this._triggers.delete(a),this._engine.statesByElement.forEach(c=>c.delete(a)),this._elementListeners.forEach((c,_)=>{this._elementListeners.set(_,c.filter(b=>b.name!=a))})}clearElementCache(a){this._engine.statesByElement.delete(a),this._elementListeners.delete(a);const c=this._engine.playersByElement.get(a);c&&(c.forEach(_=>_.destroy()),this._engine.playersByElement.delete(a))}_signalRemovalForInnerTriggers(a,c){const _=this._engine.driver.query(a,ht,!0);_.forEach(b=>{if(b[Fn])return;const P=this._engine.fetchNamespacesByElement(b);P.size?P.forEach(u=>u.triggerLeaveAnimation(b,c,!1,!0)):this.clearElementCache(b)}),this._engine.afterFlushAnimationsDone(()=>_.forEach(b=>this.clearElementCache(b)))}triggerLeaveAnimation(a,c,_,b){const P=this._engine.statesByElement.get(a),u=new Map;if(P){const g=[];if(P.forEach((f,w)=>{if(u.set(w,f.value),this._triggers.has(w)){const R=this.trigger(a,w,Gn,b);R&&g.push(R)}}),g.length)return this._engine.markElementAsRemoved(this.id,a,!0,c,u),_&&kt(g).onDone(()=>this._engine.processLeaveNode(a)),!0}return!1}prepareLeaveAnimationListeners(a){const c=this._elementListeners.get(a),_=this._engine.statesByElement.get(a);if(c&&_){const b=new Set;c.forEach(P=>{const u=P.name;if(b.has(u))return;b.add(u);const f=this._triggers.get(u).fallbackTransition,w=_.get(u)||Cn,R=new ci(Gn),Y=new Rr(this.id,u,a);this._engine.totalQueuedPlayers++,this._queue.push({element:a,triggerName:u,transition:f,fromState:w,toState:R,player:Y,isFallbackTransition:!0})})}}removeNode(a,c){const _=this._engine;if(a.childElementCount&&this._signalRemovalForInnerTriggers(a,c),this.triggerLeaveAnimation(a,c,!0))return;let b=!1;if(_.totalAnimations){const P=_.players.length?_.playersByQueriedElement.get(a):[];if(P&&P.length)b=!0;else{let u=a;for(;u=u.parentNode;)if(_.statesByElement.get(u)){b=!0;break}}}if(this.prepareLeaveAnimationListeners(a),b)_.markElementAsRemoved(this.id,a,!1,c);else{const P=a[Fn];(!P||P===es)&&(_.afterFlush(()=>this.clearElementCache(a)),_.destroyInnerAnimations(a),_._onRemovalComplete(a,c))}}insertNode(a,c){tt(a,this._hostClassName)}drainQueuedTransitions(a){const c=[];return this._queue.forEach(_=>{const b=_.player;if(b.destroyed)return;const P=_.element,u=this._elementListeners.get(P);u&&u.forEach(g=>{if(g.name==_.triggerName){const f=Qe(P,_.triggerName,_.fromState.value,_.toState.value);f._data=a,on(_.player,g.phase,f,g.callback)}}),b.markedForDestroy?this._engine.afterFlush(()=>{b.destroy()}):c.push(_)}),this._queue=[],c.sort((_,b)=>{const P=_.transition.ast.depCount,u=b.transition.ast.depCount;return 0==P||0==u?P-u:this._engine.driver.containsElement(_.element,b.element)?1:-1})}destroy(a){this.players.forEach(c=>c.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,a)}elementContainsData(a){let c=!1;return this._elementListeners.has(a)&&(c=!0),c=!!this._queue.find(_=>_.element===a)||c,c}}class ts{constructor(a,c,_){this.bodyNode=a,this.driver=c,this._normalizer=_,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(b,P)=>{}}_onRemovalComplete(a,c){this.onRemovalComplete(a,c)}get queuedPlayers(){const a=[];return this._namespaceList.forEach(c=>{c.players.forEach(_=>{_.queued&&a.push(_)})}),a}createNamespace(a,c){const _=new To(a,c,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,c)?this._balanceNamespaceList(_,c):(this.newHostElements.set(c,_),this.collectEnterElement(c)),this._namespaceLookup[a]=_}_balanceNamespaceList(a,c){const _=this._namespaceList,b=this.namespacesByHostElement;if(_.length-1>=0){let u=!1,g=this.driver.getParentElement(c);for(;g;){const f=b.get(g);if(f){const w=_.indexOf(f);_.splice(w+1,0,a),u=!0;break}g=this.driver.getParentElement(g)}u||_.unshift(a)}else _.push(a);return b.set(c,a),a}register(a,c){let _=this._namespaceLookup[a];return _||(_=this.createNamespace(a,c)),_}registerTrigger(a,c,_){let b=this._namespaceLookup[a];b&&b.register(c,_)&&this.totalAnimations++}destroy(a,c){if(!a)return;const _=this._fetchNamespace(a);this.afterFlush(()=>{this.namespacesByHostElement.delete(_.hostElement),delete this._namespaceLookup[a];const b=this._namespaceList.indexOf(_);b>=0&&this._namespaceList.splice(b,1)}),this.afterFlushAnimationsDone(()=>_.destroy(c))}_fetchNamespace(a){return this._namespaceLookup[a]}fetchNamespacesByElement(a){const c=new Set,_=this.statesByElement.get(a);if(_)for(let b of _.values())if(b.namespaceId){const P=this._fetchNamespace(b.namespaceId);P&&c.add(P)}return c}trigger(a,c,_,b){if(er(c)){const P=this._fetchNamespace(a);if(P)return P.trigger(c,_,b),!0}return!1}insertNode(a,c,_,b){if(!er(c))return;const P=c[Fn];if(P&&P.setForRemoval){P.setForRemoval=!1,P.setForMove=!0;const u=this.collectedLeaveElements.indexOf(c);u>=0&&this.collectedLeaveElements.splice(u,1)}if(a){const u=this._fetchNamespace(a);u&&u.insertNode(c,_)}b&&this.collectEnterElement(c)}collectEnterElement(a){this.collectedEnterElements.push(a)}markElementAsDisabled(a,c){c?this.disabledNodes.has(a)||(this.disabledNodes.add(a),tt(a,_n)):this.disabledNodes.has(a)&&(this.disabledNodes.delete(a),Or(a,_n))}removeNode(a,c,_,b){if(er(c)){const P=a?this._fetchNamespace(a):null;if(P?P.removeNode(c,b):this.markElementAsRemoved(a,c,!1,b),_){const u=this.namespacesByHostElement.get(c);u&&u.id!==a&&u.removeNode(c,b)}}else this._onRemovalComplete(c,b)}markElementAsRemoved(a,c,_,b,P){this.collectedLeaveElements.push(c),c[Fn]={namespaceId:a,setForRemoval:b,hasAnimation:_,removedBeforeQueried:!1,previousTriggersValues:P}}listen(a,c,_,b,P){return er(c)?this._fetchNamespace(a).listen(c,_,b,P):()=>{}}_buildInstruction(a,c,_,b,P){return a.transition.build(this.driver,a.element,a.fromState.value,a.toState.value,_,b,a.fromState.options,a.toState.options,c,P)}destroyInnerAnimations(a){let c=this.driver.query(a,ht,!0);c.forEach(_=>this.destroyActiveAnimationsForElement(_)),0!=this.playersByQueriedElement.size&&(c=this.driver.query(a,Pt,!0),c.forEach(_=>this.finishActiveQueriedAnimationOnElement(_)))}destroyActiveAnimationsForElement(a){const c=this.playersByElement.get(a);c&&c.forEach(_=>{_.queued?_.markedForDestroy=!0:_.destroy()})}finishActiveQueriedAnimationOnElement(a){const c=this.playersByQueriedElement.get(a);c&&c.forEach(_=>_.finish())}whenRenderingDone(){return new Promise(a=>{if(this.players.length)return kt(this.players).onDone(()=>a());a()})}processLeaveNode(a){const c=a[Fn];if(c&&c.setForRemoval){if(a[Fn]=es,c.namespaceId){this.destroyInnerAnimations(a);const _=this._fetchNamespace(c.namespaceId);_&&_.clearElementCache(a)}this._onRemovalComplete(a,c.setForRemoval)}a.classList?.contains(_n)&&this.markElementAsDisabled(a,!1),this.driver.query(a,".ng-animate-disabled",!0).forEach(_=>{this.markElementAsDisabled(_,!1)})}flush(a=-1){let c=[];if(this.newHostElements.size&&(this.newHostElements.forEach((_,b)=>this._balanceNamespaceList(_,b)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let _=0;_<this.collectedEnterElements.length;_++)tt(this.collectedEnterElements[_],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const _=[];try{c=this._flushAnimations(_,a)}finally{for(let b=0;b<_.length;b++)_[b]()}}else for(let _=0;_<this.collectedLeaveElements.length;_++)this.processLeaveNode(this.collectedLeaveElements[_]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(_=>_()),this._flushFns=[],this._whenQuietFns.length){const _=this._whenQuietFns;this._whenQuietFns=[],c.length?kt(c).onDone(()=>{_.forEach(b=>b())}):_.forEach(b=>b())}}reportError(a){throw function Bt(S){return new v.vHH(3402,!1)}()}_flushAnimations(a,c){const _=new Hr,b=[],P=new Map,u=[],g=new Map,f=new Map,w=new Map,R=new Set;this.disabledNodes.forEach(Je=>{R.add(Je);const ot=this.driver.query(Je,".ng-animate-queued",!0);for(let ct=0;ct<ot.length;ct++)R.add(ot[ct])});const Y=this.bodyNode,ue=Array.from(this.statesByElement.keys()),Ae=Wr(ue,this.collectedEnterElements),Ve=new Map;let We=0;Ae.forEach((Je,ot)=>{const ct=Lt+We++;Ve.set(ot,ct),Je.forEach(At=>tt(At,ct))});const rt=[],et=new Set,It=new Set;for(let Je=0;Je<this.collectedLeaveElements.length;Je++){const ot=this.collectedLeaveElements[Je],ct=ot[Fn];ct&&ct.setForRemoval&&(rt.push(ot),et.add(ot),ct.hasAnimation?this.driver.query(ot,".ng-star-inserted",!0).forEach(At=>et.add(At)):It.add(ot))}const mt=new Map,Dt=Wr(ue,Array.from(et));Dt.forEach((Je,ot)=>{const ct=_t+We++;mt.set(ot,ct),Je.forEach(At=>tt(At,ct))}),a.push(()=>{Ae.forEach((Je,ot)=>{const ct=Ve.get(ot);Je.forEach(At=>Or(At,ct))}),Dt.forEach((Je,ot)=>{const ct=mt.get(ot);Je.forEach(At=>Or(At,ct))}),rt.forEach(Je=>{this.processLeaveNode(Je)})});const Dn=[],Qt=[];for(let Je=this._namespaceList.length-1;Je>=0;Je--)this._namespaceList[Je].drainQueuedTransitions(c).forEach(ct=>{const At=ct.player,an=ct.element;if(Dn.push(At),this.collectedEnterElements.length){const Jt=an[Fn];if(Jt&&Jt.setForMove){if(Jt.previousTriggersValues&&Jt.previousTriggersValues.has(ct.triggerName)){const mr=Jt.previousTriggersValues.get(ct.triggerName),Nn=this.statesByElement.get(ct.element);if(Nn&&Nn.has(ct.triggerName)){const Cs=Nn.get(ct.triggerName);Cs.value=mr,Nn.set(ct.triggerName,Cs)}}return void At.destroy()}}const rr=!Y||!this.driver.containsElement(Y,an),bn=mt.get(an),br=Ve.get(an),Yt=this._buildInstruction(ct,_,br,bn,rr);if(Yt.errors&&Yt.errors.length)return void Qt.push(Yt);if(rr)return At.onStart(()=>Ht(an,Yt.fromStyles)),At.onDestroy(()=>Vt(an,Yt.toStyles)),void b.push(At);if(ct.isFallbackTransition)return At.onStart(()=>Ht(an,Yt.fromStyles)),At.onDestroy(()=>Vt(an,Yt.toStyles)),void b.push(At);const Fr=[];Yt.timelines.forEach(Jt=>{Jt.stretchStartingKeyframe=!0,this.disabledNodes.has(Jt.element)||Fr.push(Jt)}),Yt.timelines=Fr,_.append(an,Yt.timelines),u.push({instruction:Yt,player:At,element:an}),Yt.queriedElements.forEach(Jt=>He(g,Jt,[]).push(At)),Yt.preStyleProps.forEach((Jt,mr)=>{if(Jt.size){let Nn=f.get(mr);Nn||f.set(mr,Nn=new Set),Jt.forEach((Cs,us)=>Nn.add(us))}}),Yt.postStyleProps.forEach((Jt,mr)=>{let Nn=w.get(mr);Nn||w.set(mr,Nn=new Set),Jt.forEach((Cs,us)=>Nn.add(us))})});if(Qt.length){const Je=[];Qt.forEach(ot=>{Je.push(function Ot(S,a){return new v.vHH(3505,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */())}),Dn.forEach(ot=>ot.destroy()),this.reportError(Je)}const Kt=new Map,pn=new Map;u.forEach(Je=>{const ot=Je.element;_.has(ot)&&(pn.set(ot,ot),this._beforeAnimationBuild(Je.player.namespaceId,Je.instruction,Kt))}),b.forEach(Je=>{const ot=Je.element;this._getPreviousPlayers(ot,!1,Je.namespaceId,Je.triggerName,null).forEach(At=>{He(Kt,ot,[]).push(At),At.destroy()})});const tn=rt.filter(Je=>xr(Je,f,w)),En=new Map;Sn(En,this.driver,It,w,O.l3).forEach(Je=>{xr(Je,f,w)&&tn.push(Je)});const fi=new Map;Ae.forEach((Je,ot)=>{Sn(fi,this.driver,new Set(Je),f,O.k1)}),tn.forEach(Je=>{const ot=En.get(Je),ct=fi.get(Je);En.set(Je,new Map([...Array.from(ot?.entries()??[]),...Array.from(ct?.entries()??[])]))});const nr=[],Vi=[],Es={};u.forEach(Je=>{const{element:ot,player:ct,instruction:At}=Je;if(_.has(ot)){if(R.has(ot))return ct.onDestroy(()=>Vt(ot,At.toStyles)),ct.disabled=!0,ct.overrideTotalTime(At.totalTime),void b.push(ct);let an=Es;if(pn.size>1){let bn=ot;const br=[];for(;bn=bn.parentNode;){const Yt=pn.get(bn);if(Yt){an=Yt;break}br.push(bn)}br.forEach(Yt=>pn.set(Yt,an))}const rr=this._buildAnimation(ct.namespaceId,At,Kt,P,fi,En);if(ct.setRealPlayer(rr),an===Es)nr.push(ct);else{const bn=this.playersByElement.get(an);bn&&bn.length&&(ct.parentPlayer=kt(bn)),b.push(ct)}}else Ht(ot,At.fromStyles),ct.onDestroy(()=>Vt(ot,At.toStyles)),Vi.push(ct),R.has(ot)&&b.push(ct)}),Vi.forEach(Je=>{const ot=P.get(Je.element);if(ot&&ot.length){const ct=kt(ot);Je.setRealPlayer(ct)}}),b.forEach(Je=>{Je.parentPlayer?Je.syncPlayerEvents(Je.parentPlayer):Je.destroy()});for(let Je=0;Je<rt.length;Je++){const ot=rt[Je],ct=ot[Fn];if(Or(ot,_t),ct&&ct.hasAnimation)continue;let At=[];if(g.size){let rr=g.get(ot);rr&&rr.length&&At.push(...rr);let bn=this.driver.query(ot,Pt,!0);for(let br=0;br<bn.length;br++){let Yt=g.get(bn[br]);Yt&&Yt.length&&At.push(...Yt)}}const an=At.filter(rr=>!rr.destroyed);an.length?Io(this,ot,an):this.processLeaveNode(ot)}return rt.length=0,nr.forEach(Je=>{this.players.push(Je),Je.onDone(()=>{Je.destroy();const ot=this.players.indexOf(Je);this.players.splice(ot,1)}),Je.play()}),nr}elementContainsData(a,c){let _=!1;const b=c[Fn];return b&&b.setForRemoval&&(_=!0),this.playersByElement.has(c)&&(_=!0),this.playersByQueriedElement.has(c)&&(_=!0),this.statesByElement.has(c)&&(_=!0),this._fetchNamespace(a).elementContainsData(c)||_}afterFlush(a){this._flushFns.push(a)}afterFlushAnimationsDone(a){this._whenQuietFns.push(a)}_getPreviousPlayers(a,c,_,b,P){let u=[];if(c){const g=this.playersByQueriedElement.get(a);g&&(u=g)}else{const g=this.playersByElement.get(a);if(g){const f=!P||P==Gn;g.forEach(w=>{w.queued||!f&&w.triggerName!=b||u.push(w)})}}return(_||b)&&(u=u.filter(g=>!(_&&_!=g.namespaceId||b&&b!=g.triggerName))),u}_beforeAnimationBuild(a,c,_){const P=c.element,u=c.isRemovalTransition?void 0:a,g=c.isRemovalTransition?void 0:c.triggerName;for(const f of c.timelines){const w=f.element,R=w!==P,Y=He(_,w,[]);this._getPreviousPlayers(w,R,u,g,c.toState).forEach(Ae=>{const Ve=Ae.getRealPlayer();Ve.beforeDestroy&&Ve.beforeDestroy(),Ae.destroy(),Y.push(Ae)})}Ht(P,c.fromStyles)}_buildAnimation(a,c,_,b,P,u){const g=c.triggerName,f=c.element,w=[],R=new Set,Y=new Set,ue=c.timelines.map(Ve=>{const We=Ve.element;R.add(We);const rt=We[Fn];if(rt&&rt.removedBeforeQueried)return new O.ZN(Ve.duration,Ve.delay);const et=We!==f,It=function ns(S){const a=[];return Gr(S,a),a}((_.get(We)||Oi).map(Kt=>Kt.getRealPlayer())).filter(Kt=>!!Kt.element&&Kt.element===We),mt=P.get(We),Dt=u.get(We),Dn=Ln(0,this._normalizer,0,Ve.keyframes,mt,Dt),Qt=this._buildPlayer(Ve,Dn,It);if(Ve.subTimeline&&b&&Y.add(We),et){const Kt=new Rr(a,g,We);Kt.setRealPlayer(Qt),w.push(Kt)}return Qt});w.forEach(Ve=>{He(this.playersByQueriedElement,Ve.element,[]).push(Ve),Ve.onDone(()=>function Nt(S,a,c){let _=S.get(a);if(_){if(_.length){const b=_.indexOf(c);_.splice(b,1)}0==_.length&&S.delete(a)}return _}(this.playersByQueriedElement,Ve.element,Ve))}),R.forEach(Ve=>tt(Ve,Mt));const Ae=kt(ue);return Ae.onDestroy(()=>{R.forEach(Ve=>Or(Ve,Mt)),Vt(f,c.toStyles)}),Y.forEach(Ve=>{He(b,Ve,[]).push(Ae)}),Ae}_buildPlayer(a,c,_){return c.length>0?this.driver.animate(a.element,c,a.duration,a.delay,a.easing,_):new O.ZN(a.duration,a.delay)}}class Rr{constructor(a,c,_){this.namespaceId=a,this.triggerName=c,this.element=_,this._player=new O.ZN,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(a){this._containsRealPlayer||(this._player=a,this._queuedCallbacks.forEach((c,_)=>{c.forEach(b=>on(a,_,void 0,b))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(a.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(a){this.totalTime=a}syncPlayerEvents(a){const c=this._player;c.triggerCallback&&a.onStart(()=>c.triggerCallback("start")),a.onDone(()=>this.finish()),a.onDestroy(()=>this.destroy())}_queueEvent(a,c){He(this._queuedCallbacks,a,[]).push(c)}onDone(a){this.queued&&this._queueEvent("done",a),this._player.onDone(a)}onStart(a){this.queued&&this._queueEvent("start",a),this._player.onStart(a)}onDestroy(a){this.queued&&this._queueEvent("destroy",a),this._player.onDestroy(a)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(a){this.queued||this._player.setPosition(a)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(a){const c=this._player;c.triggerCallback&&c.triggerCallback(a)}}function er(S){return S&&1===S.nodeType}function jn(S,a){const c=S.style.display;return S.style.display=a??"none",c}function Sn(S,a,c,_,b){const P=[];c.forEach(f=>P.push(jn(f)));const u=[];_.forEach((f,w)=>{const R=new Map;f.forEach(Y=>{const ue=a.computeStyle(w,Y,b);R.set(Y,ue),(!ue||0==ue.length)&&(w[Fn]=en,u.push(w))}),S.set(w,R)});let g=0;return c.forEach(f=>jn(f,P[g++])),u}function Wr(S,a){const c=new Map;if(S.forEach(g=>c.set(g,[])),0==a.length)return c;const b=new Set(a),P=new Map;function u(g){if(!g)return 1;let f=P.get(g);if(f)return f;const w=g.parentNode;return f=c.has(w)?w:b.has(w)?1:u(w),P.set(g,f),f}return a.forEach(g=>{const f=u(g);1!==f&&c.get(f).push(g)}),c}function tt(S,a){S.classList?.add(a)}function Or(S,a){S.classList?.remove(a)}function Io(S,a,c){kt(c).onDone(()=>S.processLeaveNode(a))}function Gr(S,a){for(let c=0;c<S.length;c++){const _=S[c];_ instanceof O.ZE?Gr(_.players,a):a.push(_)}}function xr(S,a,c){const _=c.get(S);if(!_)return!1;let b=a.get(S);return b?_.forEach(P=>b.add(P)):a.set(S,_),c.delete(S),!0}class tr{constructor(a,c,_){this.bodyNode=a,this._driver=c,this._normalizer=_,this._triggerCache={},this.onRemovalComplete=(b,P)=>{},this._transitionEngine=new ts(a,c,_),this._timelineEngine=new Ri(a,c,_),this._transitionEngine.onRemovalComplete=(b,P)=>this.onRemovalComplete(b,P)}registerTrigger(a,c,_,b,P){const u=a+"-"+b;let g=this._triggerCache[u];if(!g){const f=[],R=dr(this._driver,P,f,[]);if(f.length)throw function ae(S,a){return new v.vHH(3404,!1)}();g=function li(S,a,c){return new Ai(S,a,c)}(b,R,this._normalizer),this._triggerCache[u]=g}this._transitionEngine.registerTrigger(c,b,g)}register(a,c){this._transitionEngine.register(a,c)}destroy(a,c){this._transitionEngine.destroy(a,c)}onInsert(a,c,_,b){this._transitionEngine.insertNode(a,c,_,b)}onRemove(a,c,_,b){this._transitionEngine.removeNode(a,c,b||!1,_)}disableAnimations(a,c){this._transitionEngine.markElementAsDisabled(a,c)}process(a,c,_,b){if("@"==_.charAt(0)){const[P,u]=Ue(_);this._timelineEngine.command(P,c,u,b)}else this._transitionEngine.trigger(a,c,_,b)}listen(a,c,_,b,P){if("@"==_.charAt(0)){const[u,g]=Ue(_);return this._timelineEngine.listen(u,c,g,P)}return this._transitionEngine.listen(a,c,_,b,P)}flush(a=-1){this._transitionEngine.flush(a)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}let Re=(()=>{class S{constructor(c,_,b){this._element=c,this._startStyles=_,this._endStyles=b,this._state=0;let P=S.initialStylesByElement.get(c);P||S.initialStylesByElement.set(c,P=new Map),this._initialStyles=P}start(){this._state<1&&(this._startStyles&&Vt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Vt(this._element,this._initialStyles),this._endStyles&&(Vt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(S.initialStylesByElement.delete(this._element),this._startStyles&&(Ht(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Ht(this._element,this._endStyles),this._endStyles=null),Vt(this._element,this._initialStyles),this._state=3)}}return S.initialStylesByElement=new WeakMap,S})();function Tt(S){let a=null;return S.forEach((c,_)=>{(function Yr(S){return"display"===S||"position"===S})(_)&&(a=a||new Map,a.set(_,c))}),a}class Sr{constructor(a,c,_,b){this.element=a,this.keyframes=c,this.options=_,this._specialStyles=b,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=_.duration,this._delay=_.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(a=>a()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const a=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,a,this.options),this._finalKeyframe=a.length?a[a.length-1]:new Map,this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(a){const c=[];return a.forEach(_=>{c.push(Object.fromEntries(_))}),c}_triggerWebAnimation(a,c,_){return a.animate(this._convertKeyframesToObject(c),_)}onStart(a){this._originalOnStartFns.push(a),this._onStartFns.push(a)}onDone(a){this._originalOnDoneFns.push(a),this._onDoneFns.push(a)}onDestroy(a){this._onDestroyFns.push(a)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(a=>a()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(a=>a()),this._onDestroyFns=[])}setPosition(a){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=a*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const a=new Map;this.hasStarted()&&this._finalKeyframe.forEach((_,b)=>{"offset"!==b&&a.set(b,this._finished?_:qn(this.element,b))}),this.currentSnapshot=a}triggerCallback(a){const c="start"===a?this._onStartFns:this._onDoneFns;c.forEach(_=>_()),c.length=0}}class rn{validateStyleProperty(a){return!0}validateAnimatableStyleProperty(a){return!0}matchesElement(a,c){return!1}containsElement(a,c){return k(a,c)}getParentElement(a){return J(a)}query(a,c,_){return x(a,c,_)}computeStyle(a,c,_){return window.getComputedStyle(a)[c]}animate(a,c,_,b,P,u=[]){const f={duration:_,delay:b,fill:0==b?"both":"forwards"};P&&(f.easing=P);const w=new Map,R=u.filter(Ae=>Ae instanceof Sr);(function ft(S,a){return 0===S||0===a})(_,b)&&R.forEach(Ae=>{Ae.currentSnapshot.forEach((Ve,We)=>w.set(We,Ve))});let Y=function yr(S){return S.length?S[0]instanceof Map?S:S.map(a=>In(a)):[]}(c).map(Ae=>Rn(Ae));Y=function Ct(S,a,c){if(c.size&&a.length){let _=a[0],b=[];if(c.forEach((P,u)=>{_.has(u)||b.push(u),_.set(u,P)}),b.length)for(let P=1;P<a.length;P++){let u=a[P];b.forEach(g=>u.set(g,qn(S,g)))}}return a}(a,Y,w);const ue=function Kr(S,a){let c=null,_=null;return Array.isArray(a)&&a.length?(c=Tt(a[0]),a.length>1&&(_=Tt(a[a.length-1]))):a instanceof Map&&(c=Tt(a)),c||_?new Re(S,c,_):null}(a,Y);return new Sr(a,Y,f,ue)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var xi=C(6895);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let di=(()=>{class S extends O._j{constructor(c,_){super(),this._nextAnimationId=0,this._renderer=c.createRenderer(_.body,{id:"0",encapsulation:v.ifc.None,styles:[],data:{animation:[]}})}build(c){const _=this._nextAnimationId.toString();this._nextAnimationId++;const b=Array.isArray(c)?(0,O.vP)(c):c;return Fi(this._renderer,null,_,"register",[b]),new Kn(_,this._renderer)}}return S.\u0275fac=function(c){return new(c||S)(v.LFG(v.FYo),v.LFG(xi.K0))},S.\u0275prov=v.Yz7({token:S,factory:S.\u0275fac}),S})();class Kn extends O.LC{constructor(a,c){super(),this._id=a,this._renderer=c}create(a,c){return new rs(this._id,a,c||{},this._renderer)}}class rs{constructor(a,c,_,b){this.id=a,this.element=c,this._renderer=b,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",_)}_listen(a,c){return this._renderer.listen(this.element,`@@${this.id}:${a}`,c)}_command(a,...c){return Fi(this._renderer,this.element,this.id,a,c)}onDone(a){this._listen("done",a)}onStart(a){this._listen("start",a)}onDestroy(a){this._listen("destroy",a)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(a){this._command("setPosition",a)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function Fi(S,a,c,_,b){return S.setProperty(a,`@@${c}:${_}`,b)}const is="@.disabled";let ss=(()=>{class S{constructor(c,_,b){this.delegate=c,this.engine=_,this._zone=b,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),_.onRemovalComplete=(P,u)=>{const g=u?.parentNode(P);g&&u.removeChild(g,P)}}createRenderer(c,_){const P=this.delegate.createRenderer(c,_);if(!(c&&_&&_.data&&_.data.animation)){let R=this._rendererCache.get(P);return R||(R=new pr("",P,this.engine,()=>this._rendererCache.delete(P)),this._rendererCache.set(P,R)),R}const u=_.id,g=_.id+"-"+this._currentId;this._currentId++,this.engine.register(g,c);const f=R=>{Array.isArray(R)?R.forEach(f):this.engine.registerTrigger(u,g,c,R.name,R)};return _.data.animation.forEach(f),new zt(this,g,P,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(c,_,b){c>=0&&c<this._microtaskId?this._zone.run(()=>_(b)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(P=>{const[u,g]=P;u(g)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([_,b]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return S.\u0275fac=function(c){return new(c||S)(v.LFG(v.FYo),v.LFG(tr),v.LFG(v.R0b))},S.\u0275prov=v.Yz7({token:S,factory:S.\u0275fac}),S})();class pr{constructor(a,c,_,b){this.namespaceId=a,this.delegate=c,this.engine=_,this._onDestroy=b,this.destroyNode=this.delegate.destroyNode?P=>c.destroyNode(P):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy(),this._onDestroy?.()}createElement(a,c){return this.delegate.createElement(a,c)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}appendChild(a,c){this.delegate.appendChild(a,c),this.engine.onInsert(this.namespaceId,c,a,!1)}insertBefore(a,c,_,b=!0){this.delegate.insertBefore(a,c,_),this.engine.onInsert(this.namespaceId,c,a,b)}removeChild(a,c,_){this.engine.onRemove(this.namespaceId,c,this.delegate,_)}selectRootElement(a,c){return this.delegate.selectRootElement(a,c)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,c,_,b){this.delegate.setAttribute(a,c,_,b)}removeAttribute(a,c,_){this.delegate.removeAttribute(a,c,_)}addClass(a,c){this.delegate.addClass(a,c)}removeClass(a,c){this.delegate.removeClass(a,c)}setStyle(a,c,_,b){this.delegate.setStyle(a,c,_,b)}removeStyle(a,c,_){this.delegate.removeStyle(a,c,_)}setProperty(a,c,_){"@"==c.charAt(0)&&c==is?this.disableAnimations(a,!!_):this.delegate.setProperty(a,c,_)}setValue(a,c){this.delegate.setValue(a,c)}listen(a,c,_){return this.delegate.listen(a,c,_)}disableAnimations(a,c){this.engine.disableAnimations(a,c)}}class zt extends pr{constructor(a,c,_,b,P){super(c,_,b,P),this.factory=a,this.namespaceId=c}setProperty(a,c,_){"@"==c.charAt(0)?"."==c.charAt(1)&&c==is?this.disableAnimations(a,_=void 0===_||!!_):this.engine.process(this.namespaceId,a,c.slice(1),_):this.delegate.setProperty(a,c,_)}listen(a,c,_){if("@"==c.charAt(0)){const b=function Yn(S){switch(S){case"body":return document.body;case"document":return document;case"window":return window;default:return S}}(a);let P=c.slice(1),u="";return"@"!=P.charAt(0)&&([P,u]=function Li(S){const a=S.indexOf(".");return[S.substring(0,a),S.slice(a+1)]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(P)),this.engine.listen(this.namespaceId,b,P,u,g=>{this.factory.scheduleListenerCallback(g._data||-1,_,g)})}return this.delegate.listen(a,c,_)}}const os=[{provide:O._j,useClass:di},{provide:Mi,useFactory:function gr(){return new Jn}},{provide:tr,useClass:(()=>{class S extends tr{constructor(c,_,b,P){super(c.body,_,b)}ngOnDestroy(){this.flush()}}return S.\u0275fac=function(c){return new(c||S)(v.LFG(xi.K0),v.LFG(Ze),v.LFG(Mi),v.LFG(v.z2F))},S.\u0275prov=v.Yz7({token:S,factory:S.\u0275fac}),S})()},{provide:v.FYo,useFactory:function Zs(S,a,c){return new ss(S,a,c)},deps:[A.se,tr,v.R0b]}],as=[{provide:Ze,useFactory:()=>new rn},{provide:v.QbO,useValue:"BrowserAnimations"},...os],Ds=[{provide:Ze,useClass:de},{provide:v.QbO,useValue:"NoopAnimations"},...os];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ls=(()=>{class S{static withConfig(c){return{ngModule:S,providers:c.disableAnimations?Ds:as}}}return S.\u0275fac=function(c){return new(c||S)},S.\u0275mod=v.oAB({type:S}),S.\u0275inj=v.cJS({providers:as,imports:[A.b2]}),S})()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,1481:(ze,fe,C)=>{"use strict";C.d(fe,{Dx:()=>K,HJ:()=>cn,b2:()=>N,q6:()=>wt,se:()=>le});var v=C(6895),A=C(4650);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class O extends v.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class W extends O{static makeCurrent(){(0,v.HT)(new W)}onAndCancel($,B,ge){return $.addEventListener(B,ge,!1),()=>{$.removeEventListener(B,ge,!1)}}dispatchEvent($,B){$.dispatchEvent(B)}remove($){$.parentNode&&$.parentNode.removeChild($)}createElement($,B){return(B=B||this.getDefaultDocument()).createElement($)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode($){return $.nodeType===Node.ELEMENT_NODE}isShadowRoot($){return $ instanceof DocumentFragment}getGlobalEventTarget($,B){return"window"===B?window:"document"===B?$:"body"===B?$.body:null}getBaseHref($){const B=function Q(){return Z=Z||document.querySelector("base"),Z?Z.getAttribute("href"):null}();return null==B?null:function te(z){oe=oe||document.createElement("a"),oe.setAttribute("href",z);const $=oe.pathname;return"/"===$.charAt(0)?$:`/${$}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(B)}resetBaseElement(){Z=null}getUserAgent(){return window.navigator.userAgent}getCookie($){return(0,v.Mx)(document.cookie,$)}}let oe,Z=null;const G=new A.OlP("TRANSITION_ID"),q=[{provide:A.ip1,useFactory:function ee(z,$,B){return()=>{B.get(A.CZH).donePromise.then(()=>{const ge=(0,v.q)(),Me=$.querySelectorAll(`style[ng-transition="${z}"]`);for(let Ke=0;Ke<Me.length;Ke++)ge.remove(Me[Ke])})}},deps:[G,v.K0,A.zs3],multi:!0}];let Pe=(()=>{class z{build(){return new XMLHttpRequest}}return z.\u0275fac=function(B){return new(B||z)},z.\u0275prov=A.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ce=new A.OlP("EventManagerPlugins");let ce=(()=>{class z{constructor(B,ge){this._zone=ge,this._eventNameToPlugin=new Map,B.forEach(Me=>Me.manager=this),this._plugins=B.slice().reverse()}addEventListener(B,ge,Me){return this._findPluginFor(ge).addEventListener(B,ge,Me)}addGlobalEventListener(B,ge,Me){return this._findPluginFor(ge).addGlobalEventListener(B,ge,Me)}getZone(){return this._zone}_findPluginFor(B){const ge=this._eventNameToPlugin.get(B);if(ge)return ge;const Me=this._plugins;for(let Ke=0;Ke<Me.length;Ke++){const ft=Me[Ke];if(ft.supports(B))return this._eventNameToPlugin.set(B,ft),ft}throw new Error(`No event manager plugin found for event ${B}`)}}return z.\u0275fac=function(B){return new(B||z)(A.LFG(Ce),A.LFG(A.R0b))},z.\u0275prov=A.Yz7({token:z,factory:z.\u0275fac}),z})();class Oe{constructor($){this._doc=$}addGlobalEventListener($,B,ge){const Me=(0,v.q)().getGlobalEventTarget(this._doc,$);if(!Me)throw new Error(`Unsupported event target ${Me} for event ${B}`);return this.addEventListener(Me,B,ge)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let pe=(()=>{class z{constructor(){this._stylesSet=new Set}addStyles(B){const ge=new Set;B.forEach(Me=>{this._stylesSet.has(Me)||(this._stylesSet.add(Me),ge.add(Me))}),this.onStylesAdded(ge)}onStylesAdded(B){}getAllStyles(){return Array.from(this._stylesSet)}}return z.\u0275fac=function(B){return new(B||z)},z.\u0275prov=A.Yz7({token:z,factory:z.\u0275fac}),z})(),Te=(()=>{class z extends pe{constructor(B){super(),this._doc=B,this._hostNodes=new Map,this._hostNodes.set(B.head,[])}_addStylesToHost(B,ge,Me){B.forEach(Ke=>{const ft=this._doc.createElement("style");ft.textContent=Ke,Me.push(ge.appendChild(ft))})}addHost(B){const ge=[];this._addStylesToHost(this._stylesSet,B,ge),this._hostNodes.set(B,ge)}removeHost(B){const ge=this._hostNodes.get(B);ge&&ge.forEach(it),this._hostNodes.delete(B)}onStylesAdded(B){this._hostNodes.forEach((ge,Me)=>{this._addStylesToHost(B,Me,ge)})}ngOnDestroy(){this._hostNodes.forEach(B=>B.forEach(it))}}return z.\u0275fac=function(B){return new(B||z)(A.LFG(v.K0))},z.\u0275prov=A.Yz7({token:z,factory:z.\u0275fac}),z})();function it(z){(0,v.q)().remove(z)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const vt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},we=/%COMP%/g;function ae(z,$,B){for(let ge=0;ge<$.length;ge++){let Me=$[ge];Array.isArray(Me)?ae(z,Me,B):(Me=Me.replace(we,z),B.push(Me))}return B}function se(z){return $=>{if("__ngUnwrap__"===$)return z;!1===z($)&&($.preventDefault(),$.returnValue=!1)}}let le=(()=>{class z{constructor(B,ge,Me){this.eventManager=B,this.sharedStylesHost=ge,this.appId=Me,this.rendererByCompId=new Map,this.defaultRenderer=new Le(B)}createRenderer(B,ge){if(!B||!ge)return this.defaultRenderer;switch(ge.encapsulation){case A.ifc.Emulated:{let Me=this.rendererByCompId.get(ge.id);return Me||(Me=new gt(this.eventManager,this.sharedStylesHost,ge,this.appId),this.rendererByCompId.set(ge.id,Me)),Me.applyToHost(B),Me}case 1:case A.ifc.ShadowDom:return new $e(this.eventManager,this.sharedStylesHost,B,ge);default:if(!this.rendererByCompId.has(ge.id)){const Me=ae(ge.id,ge.styles,[]);this.sharedStylesHost.addStyles(Me),this.rendererByCompId.set(ge.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return z.\u0275fac=function(B){return new(B||z)(A.LFG(ce),A.LFG(Te),A.LFG(A.AFp))},z.\u0275prov=A.Yz7({token:z,factory:z.\u0275fac}),z})();class Le{constructor($){this.eventManager=$,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement($,B){return B?document.createElementNS(vt[B]||B,$):document.createElement($)}createComment($){return document.createComment($)}createText($){return document.createTextNode($)}appendChild($,B){(bt($)?$.content:$).appendChild(B)}insertBefore($,B,ge){$&&(bt($)?$.content:$).insertBefore(B,ge)}removeChild($,B){$&&$.removeChild(B)}selectRootElement($,B){let ge="string"==typeof $?document.querySelector($):$;if(!ge)throw new Error(`The selector "${$}" did not match any elements`);return B||(ge.textContent=""),ge}parentNode($){return $.parentNode}nextSibling($){return $.nextSibling}setAttribute($,B,ge,Me){if(Me){B=Me+":"+B;const Ke=vt[Me];Ke?$.setAttributeNS(Ke,B,ge):$.setAttribute(B,ge)}else $.setAttribute(B,ge)}removeAttribute($,B,ge){if(ge){const Me=vt[ge];Me?$.removeAttributeNS(Me,B):$.removeAttribute(`${ge}:${B}`)}else $.removeAttribute(B)}addClass($,B){$.classList.add(B)}removeClass($,B){$.classList.remove(B)}setStyle($,B,ge,Me){Me&(A.JOm.DashCase|A.JOm.Important)?$.style.setProperty(B,ge,Me&A.JOm.Important?"important":""):$.style[B]=ge}removeStyle($,B,ge){ge&A.JOm.DashCase?$.style.removeProperty(B):$.style[B]=""}setProperty($,B,ge){$[B]=ge}setValue($,B){$.nodeValue=B}listen($,B,ge){return"string"==typeof $?this.eventManager.addGlobalEventListener($,B,se(ge)):this.eventManager.addEventListener($,B,se(ge))}}function bt(z){return"TEMPLATE"===z.tagName&&void 0!==z.content}class gt extends Le{constructor($,B,ge,Me){super($),this.component=ge;const Ke=ae(Me+"-"+ge.id,ge.styles,[]);B.addStyles(Ke),this.contentAttr=function Se(z){return"_ngcontent-%COMP%".replace(we,z)}(Me+"-"+ge.id),this.hostAttr=function Ie(z){return"_nghost-%COMP%".replace(we,z)}(Me+"-"+ge.id)}applyToHost($){super.setAttribute($,this.hostAttr,"")}createElement($,B){const ge=super.createElement($,B);return super.setAttribute(ge,this.contentAttr,""),ge}}class $e extends Le{constructor($,B,ge,Me){super($),this.sharedStylesHost=B,this.hostEl=ge,this.shadowRoot=ge.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Ke=ae(Me.id,Me.styles,[]);for(let ft=0;ft<Ke.length;ft++){const Ct=document.createElement("style");Ct.textContent=Ke[ft],this.shadowRoot.appendChild(Ct)}}nodeOrShadowRoot($){return $===this.hostEl?this.shadowRoot:$}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild($,B){return super.appendChild(this.nodeOrShadowRoot($),B)}insertBefore($,B,ge){return super.insertBefore(this.nodeOrShadowRoot($),B,ge)}removeChild($,B){return super.removeChild(this.nodeOrShadowRoot($),B)}parentNode($){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot($)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Bt=(()=>{class z extends Oe{constructor(B){super(B)}supports(B){return!0}addEventListener(B,ge,Me){return B.addEventListener(ge,Me,!1),()=>this.removeEventListener(B,ge,Me)}removeEventListener(B,ge,Me){return B.removeEventListener(ge,Me)}}return z.\u0275fac=function(B){return new(B||z)(A.LFG(v.K0))},z.\u0275prov=A.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const mn=["alt","control","meta","shift"],Ot={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yt={alt:z=>z.altKey,control:z=>z.ctrlKey,meta:z=>z.metaKey,shift:z=>z.shiftKey};let un=(()=>{class z extends Oe{constructor(B){super(B)}supports(B){return null!=z.parseEventName(B)}addEventListener(B,ge,Me){const Ke=z.parseEventName(ge),ft=z.eventCallback(Ke.fullKey,Me,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,v.q)().onAndCancel(B,Ke.domEventName,ft))}static parseEventName(B){const ge=B.toLowerCase().split("."),Me=ge.shift();if(0===ge.length||"keydown"!==Me&&"keyup"!==Me)return null;const Ke=z._normalizeKey(ge.pop());let ft="",Ct=ge.indexOf("code");if(Ct>-1&&(ge.splice(Ct,1),ft="code."),mn.forEach(qn=>{const ut=ge.indexOf(qn);ut>-1&&(ge.splice(ut,1),ft+=qn+".")}),ft+=Ke,0!=ge.length||0===Ke.length)return null;const xt={};return xt.domEventName=Me,xt.fullKey=ft,xt}static matchEventFullKeyCode(B,ge){let Me=Ot[B.key]||B.key,Ke="";return ge.indexOf("code.")>-1&&(Me=B.code,Ke="code."),!(null==Me||!Me)&&(Me=Me.toLowerCase()," "===Me?Me="space":"."===Me&&(Me="dot"),mn.forEach(ft=>{ft!==Me&&(0,yt[ft])(B)&&(Ke+=ft+".")}),Ke+=Me,Ke===ge)}static eventCallback(B,ge,Me){return Ke=>{z.matchEventFullKeyCode(Ke,B)&&Me.runGuarded(()=>ge(Ke))}}static _normalizeKey(B){return"esc"===B?"escape":B}}return z.\u0275fac=function(B){return new(B||z)(A.LFG(v.K0))},z.\u0275prov=A.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const wt=(0,A.eFA)(A._c5,"browser",[{provide:A.Lbi,useValue:v.bD},{provide:A.g9A,useValue:function Qe(){W.makeCurrent()},multi:!0},{provide:v.K0,useFactory:function Ue(){return(0,A.RDi)(document),document},deps:[]}]),Xt=new A.OlP(""),J=[{provide:A.rWj,useClass:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ie{addToWindow($){A.dqk.getAngularTestability=(ge,Me=!0)=>{const Ke=$.findTestabilityInTree(ge,Me);if(null==Ke)throw new Error("Could not find testability for element.");return Ke},A.dqk.getAllAngularTestabilities=()=>$.getAllTestabilities(),A.dqk.getAllAngularRootElements=()=>$.getAllRootElements(),A.dqk.frameworkStabilizers||(A.dqk.frameworkStabilizers=[]),A.dqk.frameworkStabilizers.push(ge=>{const Me=A.dqk.getAllAngularTestabilities();let Ke=Me.length,ft=!1;const Ct=function(xt){ft=ft||xt,Ke--,0==Ke&&ge(ft)};Me.forEach(function(xt){xt.whenStable(Ct)})})}findTestabilityInTree($,B,ge){return null==B?null:$.getTestability(B)??(ge?(0,v.q)().isShadowRoot(B)?this.findTestabilityInTree($,B.host,!0):this.findTestabilityInTree($,B.parentElement,!0):null)}},deps:[]},{provide:A.lri,useClass:A.dDg,deps:[A.R0b,A.eoX,A.rWj]},{provide:A.dDg,useClass:A.dDg,deps:[A.R0b,A.eoX,A.rWj]}],I=[{provide:A.zSh,useValue:"root"},{provide:A.qLn,useFactory:function He(){return new A.qLn},deps:[]},{provide:Ce,useClass:Bt,multi:!0,deps:[v.K0,A.R0b,A.Lbi]},{provide:Ce,useClass:un,multi:!0,deps:[v.K0]},{provide:le,useClass:le,deps:[ce,Te,A.AFp]},{provide:A.FYo,useExisting:le},{provide:pe,useExisting:Te},{provide:Te,useClass:Te,deps:[v.K0]},{provide:ce,useClass:ce,deps:[Ce,A.R0b]},{provide:v.JF,useClass:Pe,deps:[]},[]];let N=(()=>{class z{constructor(B){}static withServerTransition(B){return{ngModule:z,providers:[{provide:A.AFp,useValue:B.appId},{provide:G,useExisting:A.AFp},q]}}}return z.\u0275fac=function(B){return new(B||z)(A.LFG(Xt,12))},z.\u0275mod=A.oAB({type:z}),z.\u0275inj=A.cJS({providers:[...I,...J],imports:[v.ez,A.hGG]}),z})(),K=(()=>{class z{constructor(B){this._doc=B}getTitle(){return this._doc.title}setTitle(B){this._doc.title=B||""}}return z.\u0275fac=function(B){return new(B||z)(A.LFG(v.K0))},z.\u0275prov=A.Yz7({token:z,factory:function(B){let ge=null;return ge=B?new B:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ve(){return new K((0,A.LFG)(v.K0))}(),ge},providedIn:"root"}),z})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Xe=typeof window<"u"&&window||{};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Be{constructor($,B){this.msPerTick=$,this.numTicks=B}}class Fe{constructor($){this.appRef=$.injector.get(A.z2F)}timeChangeDetection($){const B=$&&$.record,ge="Change Detection",Me=null!=Xe.console.profile;B&&Me&&Xe.console.profile(ge);const Ke=Lt();let ft=0;for(;ft<5||Lt()-Ke<500;)this.appRef.tick(),ft++;const Ct=Lt();B&&Me&&Xe.console.profileEnd(ge);const xt=(Ct-Ke)/ft;return Xe.console.log(`ran ${ft} change detection cycles`),Xe.console.log(`${xt.toFixed(2)} ms per check`),new Be(xt,ft)}}function Lt(){return Xe.performance&&Xe.performance.now?Xe.performance.now():(new Date).getTime()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function cn(z){return function Ze(z,$){(typeof COMPILED>"u"||!COMPILED)&&((A.dqk.ng=A.dqk.ng||{})[z]=$)}("profiler",new Fe(z)),z}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,5453:(ze,fe,C)=>{"use strict";C.d(fe,{gz:()=>Jn,m2:()=>Gt,Z6:()=>pi,F0:()=>ln,Od:()=>ji,yS:()=>Ms,Bz:()=>As,lC:()=>es});var v=C(4650),A=C(2076),O=C(9646),W=C(1135);const Q=(0,C(3888).d)(d=>function(){d(this),this.name="EmptyError",this.message="no elements in sequence"});var oe=C(9841),te=C(7272),G=C(9770),ee=C(9635),q=C(2843),ie=C(9751),Pe=C(515),Ce=C(4033),ce=C(7579),Oe=C(6895),pe=C(4004),Te=C(3900),it=C(5698),vt=C(8675),we=C(9300),j=C(5577),me=C(4482),De=C(5403);function Ee(d){return(0,me.e)((h,l)=>{let y=!1;h.subscribe((0,De.x)(l,D=>{y=!0,l.next(D)},()=>{y||l.next(d),l.complete()}))})}function Se(d=Ie){return(0,me.e)((h,l)=>{let y=!1;h.subscribe((0,De.x)(l,D=>{y=!0,l.next(D)},()=>y?l.complete():l.error(d())))})}function Ie(){return new Q}var ae=C(4671);function se(d,h){const l=arguments.length>=2;return y=>y.pipe(d?(0,we.h)((D,M)=>d(D,M,y)):ae.y,(0,it.q)(1),l?Ee(h):Se(()=>new Q))}var ye=C(4351),le=C(8505),Le=C(262);function Ne(d,h,l,y,D){return(M,H)=>{let U=l,_e=h,je=0;M.subscribe((0,De.x)(H,Et=>{const qe=je++;_e=U?d(_e,Et,qe):(U=!0,Et),y&&H.next(_e)},D&&(()=>{U&&H.next(_e),H.complete()})))}}function st(d,h){return(0,me.e)(Ne(d,h,arguments.length>=2,!0))}function bt(d){return d<=0?()=>Pe.E:(0,me.e)((h,l)=>{let y=[];h.subscribe((0,De.x)(l,D=>{y.push(D),d<y.length&&y.shift()},()=>{for(const D of y)l.next(D);l.complete()},void 0,()=>{y=null}))})}function gt(d,h){const l=arguments.length>=2;return y=>y.pipe(d?(0,we.h)((D,M)=>d(D,M,y)):ae.y,bt(1),l?Ee(h):Se(()=>new Q))}var $e=C(2529),Bt=C(9718);function mn(d){return(0,me.e)((h,l)=>{try{h.subscribe(l)}finally{l.add(d)}})}var Ot=C(8343),yt=C(8189),un=C(1481);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ye="primary",kt=Symbol("RouteTitle");class Ln{constructor(h){this.params=h||{}}has(h){return Object.prototype.hasOwnProperty.call(this.params,h)}get(h){if(this.has(h)){const l=this.params[h];return Array.isArray(l)?l[0]:l}return null}getAll(h){if(this.has(h)){const l=this.params[h];return Array.isArray(l)?l:[l]}return[]}get keys(){return Object.keys(this.params)}}function on(d){return new Ln(d)}function Un(d,h,l){const y=l.path.split("/");if(y.length>d.length||"full"===l.pathMatch&&(h.hasChildren()||y.length<d.length))return null;const D={};for(let M=0;M<y.length;M++){const H=y[M],U=d[M];if(H.startsWith(":"))D[H.substring(1)]=U;else if(H!==U.path)return null}return{consumed:d.slice(0,y.length),posParams:D}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function He(d,h){const l=d?Object.keys(d):void 0,y=h?Object.keys(h):void 0;if(!l||!y||l.length!=y.length)return!1;let D;for(let M=0;M<l.length;M++)if(D=l[M],!Ue(d[D],h[D]))return!1;return!0}function Ue(d,h){if(Array.isArray(d)&&Array.isArray(h)){if(d.length!==h.length)return!1;const l=[...d].sort(),y=[...h].sort();return l.every((D,M)=>y[M]===D)}return d===h}function at(d){return Array.prototype.concat.apply([],d)}function wt(d){return d.length>0?d[d.length-1]:null}function J(d,h){for(const l in d)d.hasOwnProperty(l)&&h(d[l],l)}function I(d){return(0,v.CqO)(d)?d:(0,v.QGY)(d)?(0,A.D)(Promise.resolve(d)):(0,O.of)(d)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const N=!1,L={exact:function k(d,h,l){if(!_t(d.segments,h.segments)||!Ze(d.segments,h.segments,l)||d.numberOfChildren!==h.numberOfChildren)return!1;for(const y in h.children)if(!d.children[y]||!k(d.children[y],h.children[y],l))return!1;return!0},subset:ne},re={exact:function K(d,h){return He(d,h)},subset:function x(d,h){return Object.keys(h).length<=Object.keys(d).length&&Object.keys(h).every(l=>Ue(d[l],h[l]))},ignored:()=>!0};function ve(d,h,l){return L[l.paths](d.root,h.root,l.matrixParams)&&re[l.queryParams](d.queryParams,h.queryParams)&&!("exact"===l.fragment&&d.fragment!==h.fragment)}function ne(d,h,l){return de(d,h,h.segments,l)}function de(d,h,l,y){if(d.segments.length>l.length){const D=d.segments.slice(0,l.length);return!(!_t(D,l)||h.hasChildren()||!Ze(D,l,y))}if(d.segments.length===l.length){if(!_t(d.segments,l)||!Ze(d.segments,l,y))return!1;for(const D in h.children)if(!d.children[D]||!ne(d.children[D],h.children[D],y))return!1;return!0}{const D=l.slice(0,d.segments.length),M=l.slice(d.segments.length);return!!(_t(d.segments,D)&&Ze(d.segments,D,y)&&d.children[Ye])&&de(d.children[Ye],h,M,y)}}function Ze(d,h,l){return h.every((y,D)=>re[l](d[D].parameters,y.parameters))}class Xe{constructor(h,l,y){this.root=h,this.queryParams=l,this.fragment=y}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=on(this.queryParams)),this._queryParamMap}toString(){return Pt.serialize(this)}}class Be{constructor(h,l){this.segments=h,this.children=l,this.parent=null,J(l,(y,D)=>y.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qt(this)}}class Fe{constructor(h,l){this.path=h,this.parameters=l}get parameterMap(){return this._parameterMap||(this._parameterMap=on(this.parameters)),this._parameterMap}toString(){return Rn(this)}}function _t(d,h){return d.length===h.length&&d.every((l,y)=>l.path===h[y].path)}let ht=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275prov=v.Yz7({token:d,factory:function(){return new Mt},providedIn:"root"}),d})();class Mt{parse(h){const l=new $(h);return new Xe(l.parseRootSegment(),l.parseQueryParams(),l.parseFragment())}serialize(h){const l=`/${dn(h.root,!0)}`,y=function Rt(d){const h=Object.keys(d).map(l=>{const y=d[l];return Array.isArray(y)?y.map(D=>`${kn(l)}=${kn(D)}`).join("&"):`${kn(l)}=${kn(y)}`}).filter(l=>!!l);return h.length?`?${h.join("&")}`:""}(h.queryParams);return`${l}${y}${"string"==typeof h.fragment?`#${function Bn(d){return encodeURI(d)}(h.fragment)}`:""}`}}const Pt=new Mt;function qt(d){return d.segments.map(h=>Rn(h)).join("/")}function dn(d,h){if(!d.hasChildren())return qt(d);if(h){const l=d.children[Ye]?dn(d.children[Ye],!1):"",y=[];return J(d.children,(D,M)=>{M!==Ye&&y.push(`${M}:${dn(D,!1)}`)}),y.length>0?`${l}(${y.join("//")})`:l}{const l=function cn(d,h){let l=[];return J(d.children,(y,D)=>{D===Ye&&(l=l.concat(h(y,D)))}),J(d.children,(y,D)=>{D!==Ye&&(l=l.concat(h(y,D)))}),l}(d,(y,D)=>D===Ye?[dn(d.children[Ye],!1)]:[`${D}:${dn(y,!1)}`]);return 1===Object.keys(d.children).length&&null!=d.children[Ye]?`${qt(d)}/${l[0]}`:`${qt(d)}/(${l.join("//")})`}}function Zt(d){return encodeURIComponent(d).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function kn(d){return Zt(d).replace(/%3B/gi,";")}function In(d){return Zt(d).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function yr(d){return decodeURIComponent(d)}function kr(d){return yr(d.replace(/\+/g,"%20"))}function Rn(d){return`${In(d.path)}${function si(d){return Object.keys(d).map(h=>`;${In(h)}=${In(d[h])}`).join("")}(d.parameters)}`}const Vt=/^[^\/()?;=#]+/;function Ht(d){const h=d.match(Vt);return h?h[0]:""}const On=/^[^=?&#]+/,hn=/^[^&#]+/;class ${constructor(h){this.url=h,this.remaining=h}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Be([],{}):new Be([],this.parseChildren())}parseQueryParams(){const h={};if(this.consumeOptional("?"))do{this.parseQueryParam(h)}while(this.consumeOptional("&"));return h}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const h=[];for(this.peekStartsWith("(")||h.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),h.push(this.parseSegment());let l={};this.peekStartsWith("/(")&&(this.capture("/"),l=this.parseParens(!0));let y={};return this.peekStartsWith("(")&&(y=this.parseParens(!1)),(h.length>0||Object.keys(l).length>0)&&(y[Ye]=new Be(h,l)),y}parseSegment(){const h=Ht(this.remaining);if(""===h&&this.peekStartsWith(";"))throw new v.vHH(4009,N);return this.capture(h),new Fe(yr(h),this.parseMatrixParams())}parseMatrixParams(){const h={};for(;this.consumeOptional(";");)this.parseParam(h);return h}parseParam(h){const l=Ht(this.remaining);if(!l)return;this.capture(l);let y="";if(this.consumeOptional("=")){const D=Ht(this.remaining);D&&(y=D,this.capture(y))}h[yr(l)]=yr(y)}parseQueryParam(h){const l=function yn(d){const h=d.match(On);return h?h[0]:""}(this.remaining);if(!l)return;this.capture(l);let y="";if(this.consumeOptional("=")){const H=function z(d){const h=d.match(hn);return h?h[0]:""}(this.remaining);H&&(y=H,this.capture(y))}const D=kr(l),M=kr(y);if(h.hasOwnProperty(D)){let H=h[D];Array.isArray(H)||(H=[H],h[D]=H),H.push(M)}else h[D]=M}parseParens(h){const l={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const y=Ht(this.remaining),D=this.remaining[y.length];if("/"!==D&&")"!==D&&";"!==D)throw new v.vHH(4010,N);let M;y.indexOf(":")>-1?(M=y.slice(0,y.indexOf(":")),this.capture(M),this.capture(":")):h&&(M=Ye);const H=this.parseChildren();l[M]=1===Object.keys(H).length?H[Ye]:new Be([],H),this.consumeOptional("//")}return l}peekStartsWith(h){return this.remaining.startsWith(h)}consumeOptional(h){return!!this.peekStartsWith(h)&&(this.remaining=this.remaining.substring(h.length),!0)}capture(h){if(!this.consumeOptional(h))throw new v.vHH(4011,N)}}function B(d){return d.segments.length>0?new Be([],{[Ye]:d}):d}function ge(d){const h={};for(const y of Object.keys(d.children)){const M=ge(d.children[y]);(M.segments.length>0||M.hasChildren())&&(h[y]=M)}return function Me(d){if(1===d.numberOfChildren&&d.children[Ye]){const h=d.children[Ye];return new Be(d.segments.concat(h.segments),h.children)}return d}(new Be(d.segments,h))}function Ke(d){return d instanceof Xe}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ut(d,h,l,y,D){if(0===l.length)return ur(h.root,h.root,h.root,y,D);const M=function vr(d){if("string"==typeof d[0]&&1===d.length&&"/"===d[0])return new nn(!0,0,d);let h=0,l=!1;const y=d.reduce((D,M,H)=>{if("object"==typeof M&&null!=M){if(M.outlets){const U={};return J(M.outlets,(_e,je)=>{U[je]="string"==typeof _e?_e.split("/"):_e}),[...D,{outlets:U}]}if(M.segmentPath)return[...D,M.segmentPath]}return"string"!=typeof M?[...D,M]:0===H?(M.split("/").forEach((U,_e)=>{0==_e&&"."===U||(0==_e&&""===U?l=!0:".."===U?h++:""!=U&&D.push(U))}),D):[...D,M]},[]);return new nn(l,h,y)}(l);return M.toRoot()?ur(h.root,h.root,new Be([],{}),y,D):function H(_e){const je=function Br(d,h,l,y){if(d.isAbsolute)return new vn(h.root,!0,0);if(-1===y)return new vn(l,l===h.root,0);return function Ci(d,h,l){let y=d,D=h,M=l;for(;M>D;){if(M-=D,y=y.parent,!y)throw new v.vHH(4005,!1);D=y.segments.length}return new vn(y,!1,D-M)}(l,y+(An(d.commands[0])?0:1),d.numberOfDoubleDots)}(M,h,d.snapshot?._urlSegment,_e),Et=je.processChildren?_r(je.segmentGroup,je.index,M.commands):Tr(je.segmentGroup,je.index,M.commands);return ur(h.root,je.segmentGroup,Et,y,D)}(d.snapshot?._lastPathIndex)}function An(d){return"object"==typeof d&&null!=d&&!d.outlets&&!d.segmentPath}function $n(d){return"object"==typeof d&&null!=d&&d.outlets}function ur(d,h,l,y,D){let H,M={};y&&J(y,(_e,je)=>{M[je]=Array.isArray(_e)?_e.map(Et=>`${Et}`):`${_e}`}),H=d===h?l:cr(d,h,l);const U=B(ge(H));return new Xe(U,M,D)}function cr(d,h,l){const y={};return J(d.children,(D,M)=>{y[M]=D===h?l:cr(D,h,l)}),new Be(d.segments,y)}class nn{constructor(h,l,y){if(this.isAbsolute=h,this.numberOfDoubleDots=l,this.commands=y,h&&y.length>0&&An(y[0]))throw new v.vHH(4003,!1);const D=y.find($n);if(D&&D!==wt(y))throw new v.vHH(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class vn{constructor(h,l,y){this.segmentGroup=h,this.processChildren=l,this.index=y}}function Tr(d,h,l){if(d||(d=new Be([],{})),0===d.segments.length&&d.hasChildren())return _r(d,h,l);const y=function Ir(d,h,l){let y=0,D=h;const M={match:!1,pathIndex:0,commandIndex:0};for(;D<d.segments.length;){if(y>=l.length)return M;const H=d.segments[D],U=l[y];if($n(U))break;const _e=`${U}`,je=y<l.length-1?l[y+1]:null;if(D>0&&void 0===_e)break;if(_e&&je&&"object"==typeof je&&void 0===je.outlets){if(!hr(_e,je,H))return M;y+=2}else{if(!hr(_e,{},H))return M;y++}D++}return{match:!0,pathIndex:D,commandIndex:y}}(d,h,l),D=l.slice(y.commandIndex);if(y.match&&y.pathIndex<d.segments.length){const M=new Be(d.segments.slice(0,y.pathIndex),{});return M.children[Ye]=new Be(d.segments.slice(y.pathIndex),d.children),_r(M,0,D)}return y.match&&0===D.length?new Be(d.segments,{}):y.match&&!d.hasChildren()?Vr(d,h,l):y.match?_r(d,0,D):Vr(d,h,l)}function _r(d,h,l){if(0===l.length)return new Be(d.segments,{});{const y=function Ft(d){return $n(d[0])?d[0].outlets:{[Ye]:d}}(l),D={};return J(y,(M,H)=>{"string"==typeof M&&(M=[M]),null!==M&&(D[H]=Tr(d.children[H],h,M))}),J(d.children,(M,H)=>{void 0===y[H]&&(D[H]=M)}),new Be(d.segments,D)}}function Vr(d,h,l){const y=d.segments.slice(0,h);let D=0;for(;D<l.length;){const M=l[D];if($n(M)){const _e=dr(M.outlets);return new Be(y,_e)}if(0===D&&An(l[0])){y.push(new Fe(d.segments[h].path,Dr(l[0]))),D++;continue}const H=$n(M)?M.outlets[Ye]:`${M}`,U=D<l.length-1?l[D+1]:null;H&&U&&An(U)?(y.push(new Fe(H,Dr(U))),D+=2):(y.push(new Fe(H,{})),D++)}return new Be(y,{})}function dr(d){const h={};return J(d,(l,y)=>{"string"==typeof l&&(l=[l]),null!==l&&(h[y]=Vr(new Be([],{}),0,l))}),h}function Dr(d){const h={};return J(d,(l,y)=>h[y]=`${l}`),h}function hr(d,h,l){return d==l.path&&He(h,l.parameters)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class jt{constructor(h,l){this.id=h,this.url=l}}class Si extends jt{constructor(h,l,y="imperative",D=null){super(h,l),this.type=0,this.navigationTrigger=y,this.restoredState=D}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Gt extends jt{constructor(h,l,y){super(h,l),this.urlAfterRedirects=y,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class fn extends jt{constructor(h,l,y,D){super(h,l),this.reason=y,this.code=D,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Er extends jt{constructor(h,l,y,D){super(h,l),this.error=y,this.target=D,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Hn extends jt{constructor(h,l,y,D){super(h,l),this.urlAfterRedirects=y,this.state=D,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class wr extends jt{constructor(h,l,y,D){super(h,l),this.urlAfterRedirects=y,this.state=D,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class xn extends jt{constructor(h,l,y,D,M){super(h,l),this.urlAfterRedirects=y,this.state=D,this.shouldActivate=M,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Hr extends jt{constructor(h,l,y,D){super(h,l),this.urlAfterRedirects=y,this.state=D,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class zs extends jt{constructor(h,l,y,D){super(h,l),this.urlAfterRedirects=y,this.state=D,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Zi{constructor(h){this.route=h,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class ps{constructor(h){this.route=h,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Mo{constructor(h){this.snapshot=h,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class zn{constructor(h){this.snapshot=h,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Qi{constructor(h){this.snapshot=h,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ws{constructor(h){this.snapshot=h,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class oi{constructor(h,l,y){this.routerEvent=h,this.position=l,this.anchor=y,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class jr{constructor(h){this._root=h}get root(){return this._root.value}parent(h){const l=this.pathFromRoot(h);return l.length>1?l[l.length-2]:null}children(h){const l=qi(h,this._root);return l?l.children.map(y=>y.value):[]}firstChild(h){const l=qi(h,this._root);return l&&l.children.length>0?l.children[0].value:null}siblings(h){const l=bi(h,this._root);return l.length<2?[]:l[l.length-2].children.map(D=>D.value).filter(D=>D!==h)}pathFromRoot(h){return bi(h,this._root).map(l=>l.value)}}function qi(d,h){if(d===h.value)return h;for(const l of h.children){const y=qi(d,l);if(y)return y}return null}function bi(d,h){if(d===h.value)return[h];for(const l of h.children){const y=bi(d,l);if(y.length)return y.unshift(h),y}return[]}class fr{constructor(h,l){this.value=h,this.children=l}toString(){return`TreeNode(${this.value})`}}function Ur(d){const h={};return d&&d.children.forEach(l=>h[l.value.outlet]=l),h
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class Mi extends jr{constructor(h,l){super(h),this.snapshot=l,Wn(this,h)}toString(){return this.snapshot.toString()}}function gs(d,h){const l=function Gs(d,h){const H=new ai([],{},{},"",{},Ye,h,null,d.root,-1,{});return new ms("",new fr(H,[]))}(d,h),y=new W.X([new Fe("",{})]),D=new W.X({}),M=new W.X({}),H=new W.X({}),U=new W.X(""),_e=new Jn(y,D,H,U,M,Ye,h,l.root);return _e.snapshot=l.root,new Mi(new fr(_e,[]),l)}class Jn{constructor(h,l,y,D,M,H,U,_e){this.url=h,this.params=l,this.queryParams=y,this.fragment=D,this.data=M,this.outlet=H,this.component=U,this.title=this.data?.pipe((0,pe.U)(je=>je[kt]))??(0,O.of)(void 0),this._futureSnapshot=_e}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,pe.U)(h=>on(h)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,pe.U)(h=>on(h)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function $r(d,h="emptyOnly"){const l=d.pathFromRoot;let y=0;if("always"!==h)for(y=l.length-1;y>=1;){const D=l[y],M=l[y-1];if(D.routeConfig&&""===D.routeConfig.path)y--;else{if(M.component)break;y--}}return function Ti(d){return d.reduce((h,l)=>({params:{...h.params,...l.params},data:{...h.data,...l.data},resolve:{...l.data,...h.resolve,...l.routeConfig?.data,...l._resolvedData}}),{params:{},data:{},resolve:{}})}(l.slice(y))}class ai{constructor(h,l,y,D,M,H,U,_e,je,Et,qe,Ut){this.url=h,this.params=l,this.queryParams=y,this.fragment=D,this.data=M,this.outlet=H,this.component=U,this.title=this.data?.[kt],this.routeConfig=_e,this._urlSegment=je,this._lastPathIndex=Et,this._correctedLastPathIndex=Ut??Et,this._resolve=qe}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=on(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=on(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(y=>y.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class ms extends jr{constructor(h,l){super(l),this.url=h,Wn(this,l)}toString(){return Ii(this._root)}}function Wn(d,h){h.value._routerState=d,h.children.forEach(l=>Wn(d,l))}function Ii(d){const h=d.children.length>0?` { ${d.children.map(Ii).join(", ")} } `:"";return`${d.value}${h}`}function zr(d){if(d.snapshot){const h=d.snapshot,l=d._futureSnapshot;d.snapshot=l,He(h.queryParams,l.queryParams)||d.queryParams.next(l.queryParams),h.fragment!==l.fragment&&d.fragment.next(l.fragment),He(h.params,l.params)||d.params.next(l.params),function Qe(d,h){if(d.length!==h.length)return!1;for(let l=0;l<d.length;++l)if(!He(d[l],h[l]))return!1;return!0}(h.url,l.url)||d.url.next(l.url),He(h.data,l.data)||d.data.next(l.data)}else d.snapshot=d._futureSnapshot,d.data.next(d._futureSnapshot.data)}function li(d,h){const l=He(d.params,h.params)&&function Lt(d,h){return _t(d,h)&&d.every((l,y)=>He(l.parameters,h[y].parameters))}(d.url,h.url);return l&&!(!d.parent!=!h.parent)&&(!d.parent||li(d.parent,h.parent))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Cr(d,h,l){if(l&&d.shouldReuseRoute(h.value,l.value.snapshot)){const y=l.value;y._futureSnapshot=h.value;const D=function Pi(d,h,l){return h.children.map(y=>{for(const D of l.children)if(d.shouldReuseRoute(y.value,D.value.snapshot))return Cr(d,y,D);return Cr(d,y)})}(d,h,l);return new fr(y,D)}{if(d.shouldAttach(h.value)){const M=d.retrieve(h.value);if(null!==M){const H=M.route;return H.value._futureSnapshot=h.value,H.children=h.children.map(U=>Cr(d,U)),H}}const y=function ys(d){return new Jn(new W.X(d.url),new W.X(d.params),new W.X(d.queryParams),new W.X(d.fragment),new W.X(d.data),d.outlet,d.component,d)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(h.value),D=h.children.map(M=>Cr(d,M));return new fr(y,D)}}const Ri="ngNavigationCancelingError";function Ar(d,h){const{redirectTo:l,navigationBehaviorOptions:y}=Ke(h)?{redirectTo:h,navigationBehaviorOptions:void 0}:h,D=Ji(!1,0,h);return D.url=l,D.navigationBehaviorOptions=y,D}function Ji(d,h,l){const y=new Error("NavigationCancelingError: "+(d||""));return y[Ri]=!0,y.cancellationCode=h,l&&(y.url=l),y}function _n(d){return ui(d)&&Ke(d.url)}function ui(d){return d&&d[Ri]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class vs{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Pr,this.attachRef=null}}let Pr=(()=>{class d{constructor(){this.contexts=new Map}onChildOutletCreated(l,y){const D=this.getOrCreateContext(l);D.outlet=y,this.contexts.set(l,D)}onChildOutletDestroyed(l){const y=this.getContext(l);y&&(y.outlet=null,y.attachRef=null)}onOutletDeactivated(){const l=this.contexts;return this.contexts=new Map,l}onOutletReAttached(l){this.contexts=l}getOrCreateContext(l){let y=this.getContext(l);return y||(y=new vs,this.contexts.set(l,y)),y}getContext(l){return this.contexts.get(l)||null}}return d.\u0275fac=function(l){return new(l||d)},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Oi=!1;let es=(()=>{class d{constructor(l,y,D,M,H){this.parentContexts=l,this.location=y,this.changeDetector=M,this.environmentInjector=H,this.activated=null,this._activatedRoute=null,this.activateEvents=new v.vpe,this.deactivateEvents=new v.vpe,this.attachEvents=new v.vpe,this.detachEvents=new v.vpe,this.name=D||Ye,l.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const l=this.parentContexts.getContext(this.name);l&&l.route&&(l.attachRef?this.attach(l.attachRef,l.route):this.activateWith(l.route,l.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new v.vHH(4012,Oi);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new v.vHH(4012,Oi);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new v.vHH(4012,Oi);this.location.detach();const l=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(l.instance),l}attach(l,y){this.activated=l,this._activatedRoute=y,this.location.insert(l.hostView),this.attachEvents.emit(l.instance)}deactivate(){if(this.activated){const l=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(l)}}activateWith(l,y){if(this.isActivated)throw new v.vHH(4013,Oi);this._activatedRoute=l;const D=this.location,H=l._futureSnapshot.component,U=this.parentContexts.getOrCreateContext(this.name).children,_e=new en(l,U,D.injector);if(y&&function Fn(d){return!!d.resolveComponentFactory}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(y)){const je=y.resolveComponentFactory(H);this.activated=D.createComponent(je,D.length,_e)}else this.activated=D.createComponent(H,{index:D.length,injector:_e,environmentInjector:y??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return d.\u0275fac=function(l){return new(l||d)(v.Y36(Pr),v.Y36(v.s_b),v.$8M("name"),v.Y36(v.sBO),v.Y36(v.lqb))},d.\u0275dir=v.lG2({type:d,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),d})();class en{constructor(h,l,y){this.route=h,this.childContexts=l,this.parent=y}get(h,l){return h===Jn?this.route:h===Pr?this.childContexts:this.parent.get(h,l)}}let ci=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275cmp=v.Xpm({type:d,selectors:[["ng-component"]],standalone:!0,features:[v.jDz],decls:1,vars:0,template:function(l,y){1&l&&v._UZ(0,"router-outlet")},dependencies:[es],encapsulation:2}),d})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Gn(d,h){return d.providers&&!d._injector&&(d._injector=(0,v.MMx)(d.providers,h,`Route: ${d.path}`)),d._injector??h}function jn(d){const h=d.children&&d.children.map(jn),l=h?{...d,children:h}:{...d};return!l.component&&!l.loadComponent&&(h||l.loadChildren)&&l.outlet&&l.outlet!==Ye&&(l.component=ci),l}function Sn(d){return d.outlet||Ye}function Wr(d,h){const l=d.filter(y=>Sn(y)===h);return l.push(...d.filter(y=>Sn(y)!==h)),l}function tt(d){if(!d)return null;if(d.routeConfig?._injector)return d.routeConfig._injector;for(let h=d.parent;h;h=h.parent){const l=h.routeConfig;if(l?._loadedInjector)return l._loadedInjector;if(l?._injector)return l._injector}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Io{constructor(h,l,y,D){this.routeReuseStrategy=h,this.futureState=l,this.currState=y,this.forwardEvent=D}activate(h){const l=this.futureState._root,y=this.currState?this.currState._root:null;this.deactivateChildRoutes(l,y,h),zr(this.futureState.root),this.activateChildRoutes(l,y,h)}deactivateChildRoutes(h,l,y){const D=Ur(l);h.children.forEach(M=>{const H=M.value.outlet;this.deactivateRoutes(M,D[H],y),delete D[H]}),J(D,(M,H)=>{this.deactivateRouteAndItsChildren(M,y)})}deactivateRoutes(h,l,y){const D=h.value,M=l?l.value:null;if(D===M)if(D.component){const H=y.getContext(D.outlet);H&&this.deactivateChildRoutes(h,l,H.children)}else this.deactivateChildRoutes(h,l,y);else M&&this.deactivateRouteAndItsChildren(l,y)}deactivateRouteAndItsChildren(h,l){h.value.component&&this.routeReuseStrategy.shouldDetach(h.value.snapshot)?this.detachAndStoreRouteSubtree(h,l):this.deactivateRouteAndOutlet(h,l)}detachAndStoreRouteSubtree(h,l){const y=l.getContext(h.value.outlet),D=y&&h.value.component?y.children:l,M=Ur(h);for(const H of Object.keys(M))this.deactivateRouteAndItsChildren(M[H],D);if(y&&y.outlet){const H=y.outlet.detach(),U=y.children.onOutletDeactivated();this.routeReuseStrategy.store(h.value.snapshot,{componentRef:H,route:h,contexts:U})}}deactivateRouteAndOutlet(h,l){const y=l.getContext(h.value.outlet),D=y&&h.value.component?y.children:l,M=Ur(h);for(const H of Object.keys(M))this.deactivateRouteAndItsChildren(M[H],D);y&&y.outlet&&(y.outlet.deactivate(),y.children.onOutletDeactivated(),y.attachRef=null,y.resolver=null,y.route=null)}activateChildRoutes(h,l,y){const D=Ur(l);h.children.forEach(M=>{this.activateRoutes(M,D[M.value.outlet],y),this.forwardEvent(new Ws(M.value.snapshot))}),h.children.length&&this.forwardEvent(new zn(h.value.snapshot))}activateRoutes(h,l,y){const D=h.value,M=l?l.value:null;if(zr(D),D===M)if(D.component){const H=y.getOrCreateContext(D.outlet);this.activateChildRoutes(h,l,H.children)}else this.activateChildRoutes(h,l,y);else if(D.component){const H=y.getOrCreateContext(D.outlet);if(this.routeReuseStrategy.shouldAttach(D.snapshot)){const U=this.routeReuseStrategy.retrieve(D.snapshot);this.routeReuseStrategy.store(D.snapshot,null),H.children.onOutletReAttached(U.contexts),H.attachRef=U.componentRef,H.route=U.route.value,H.outlet&&H.outlet.attach(U.componentRef,U.route.value),zr(U.route.value),this.activateChildRoutes(h,null,H.children)}else{const U=tt(D.snapshot),_e=U?.get(v._Vd)??null;H.attachRef=null,H.route=D,H.resolver=_e,H.injector=U,H.outlet&&H.outlet.activateWith(D,H.injector),this.activateChildRoutes(h,null,H.children)}}else this.activateChildRoutes(h,null,y)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ns{constructor(h){this.path=h,this.route=this.path[this.path.length-1]}}class Gr{constructor(h,l){this.component=h,this.route=l}}function _s(d,h,l){const y=d._root;return Kr(y,h?h._root:null,l,[y.value])}function tr(d,h){const l=Symbol(),y=h.get(d,l);return y===l?"function"!=typeof d||(0,v.Z0I)(d)?h.get(d):d:y}function Kr(d,h,l,y,D={canDeactivateChecks:[],canActivateChecks:[]}){const M=Ur(h);return d.children.forEach(H=>{(function Re(d,h,l,y,D={canDeactivateChecks:[],canActivateChecks:[]}){const M=d.value,H=h?h.value:null,U=l?l.getContext(d.value.outlet):null;if(H&&M.routeConfig===H.routeConfig){const _e=function Tt(d,h,l){if("function"==typeof l)return l(d,h);switch(l){case"pathParamsChange":return!_t(d.url,h.url);case"pathParamsOrQueryParamsChange":return!_t(d.url,h.url)||!He(d.queryParams,h.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!li(d,h)||!He(d.queryParams,h.queryParams);default:return!li(d,h)}}(H,M,M.routeConfig.runGuardsAndResolvers);_e?D.canActivateChecks.push(new ns(y)):(M.data=H.data,M._resolvedData=H._resolvedData),Kr(d,h,M.component?U?U.children:null:l,y,D),_e&&U&&U.outlet&&U.outlet.isActivated&&D.canDeactivateChecks.push(new Gr(U.outlet.component,H))}else H&&Yr(h,U,D),D.canActivateChecks.push(new ns(y)),Kr(d,null,M.component?U?U.children:null:l,y,D)})(H,M[H.value.outlet],l,y.concat([H.value]),D),delete M[H.value.outlet]}),J(M,(H,U)=>Yr(H,l.getContext(U),D)),D}function Yr(d,h,l){const y=Ur(d),D=d.value;J(y,(M,H)=>{Yr(M,D.component?h?h.children.getContext(H):null:h,l)}),l.canDeactivateChecks.push(new Gr(D.component&&h&&h.outlet&&h.outlet.isActivated?h.outlet.component:null,D))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Sr(d){return"function"==typeof d}function ss(d){return d instanceof Q||"EmptyError"===d?.name}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const pr=Symbol("INITIAL_VALUE");function zt(){return(0,Te.w)(d=>(0,oe.a)(d.map(h=>h.pipe((0,it.q)(1),(0,vt.O)(pr)))).pipe((0,pe.U)(h=>{for(const l of h)if(!0!==l){if(l===pr)return pr;if(!1===l||l instanceof Xe)return l}return!0}),(0,we.h)(h=>h!==pr),(0,it.q)(1)))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ki(d){return(0,ee.z)((0,le.b)(h=>{if(Ke(h))throw Ar(0,h)}),(0,pe.U)(h=>!0===h))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const hi={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function S(d,h,l,y,D){const M=a(d,h,l);return M.matched?function Qs(d,h,l,y){const D=h.canMatch;if(!D||0===D.length)return(0,O.of)(!0);const M=D.map(H=>{const U=tr(H,d);return I(function Fi(d){return d&&Sr(d.canMatch)}(U)?U.canMatch(h,l):d.runInContext(()=>U(h,l)))});return(0,O.of)(M).pipe(zt(),ki())}(y=Gn(h,y),h,l).pipe((0,pe.U)(H=>!0===H?M:{...hi})):(0,O.of)(M)}function a(d,h,l){if(""===h.path)return"full"===h.pathMatch&&(d.hasChildren()||l.length>0)?{...hi}:{matched:!0,consumedSegments:[],remainingSegments:l,parameters:{},positionalParamSegments:{}};const D=(h.matcher||Un)(l,d,h);if(!D)return{...hi};const M={};J(D.posParams,(U,_e)=>{M[_e]=U.path});const H=D.consumed.length>0?{...M,...D.consumed[D.consumed.length-1].parameters}:M;return{matched:!0,consumedSegments:D.consumed,remainingSegments:l.slice(D.consumed.length),parameters:H,positionalParamSegments:D.posParams??{}}}function c(d,h,l,y,D="corrected"){if(l.length>0&&function P(d,h,l){return l.some(y=>g(d,h,y)&&Sn(y)!==Ye)}(d,l,y)){const H=new Be(h,function b(d,h,l,y){const D={};D[Ye]=y,y._sourceSegment=d,y._segmentIndexShift=h.length;for(const M of l)if(""===M.path&&Sn(M)!==Ye){const H=new Be([],{});H._sourceSegment=d,H._segmentIndexShift=h.length,D[Sn(M)]=H}return D}(d,h,y,new Be(l,d.children)));return H._sourceSegment=d,H._segmentIndexShift=h.length,{segmentGroup:H,slicedSegments:[]}}if(0===l.length&&function u(d,h,l){return l.some(y=>g(d,h,y))}(d,l,y)){const H=new Be(d.segments,function _(d,h,l,y,D,M){const H={};for(const U of y)if(g(d,l,U)&&!D[Sn(U)]){const _e=new Be([],{});_e._sourceSegment=d,_e._segmentIndexShift="legacy"===M?d.segments.length:h.length,H[Sn(U)]=_e}return{...D,...H}}(d,h,l,y,d.children,D));return H._sourceSegment=d,H._segmentIndexShift=h.length,{segmentGroup:H,slicedSegments:l}}const M=new Be(d.segments,d.children);return M._sourceSegment=d,M._segmentIndexShift=h.length,{segmentGroup:M,slicedSegments:l}}function g(d,h,l){return(!(d.hasChildren()||h.length>0)||"full"!==l.pathMatch)&&""===l.path}function f(d,h,l,y){return!!(Sn(d)===y||y!==Ye&&g(h,l,d))&&("**"===d.path||a(h,d,l).matched)}function w(d,h,l){return 0===h.length&&!d.children[l]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const R=!1;class Y{constructor(h){this.segmentGroup=h||null}}class ue{constructor(h){this.urlTree=h}}function Ae(d){return(0,q._)(new Y(d))}function Ve(d){return(0,q._)(new ue(d))}class It{constructor(h,l,y,D,M){this.injector=h,this.configLoader=l,this.urlSerializer=y,this.urlTree=D,this.config=M,this.allowRedirects=!0}apply(){const h=c(this.urlTree.root,[],[],this.config).segmentGroup,l=new Be(h.segments,h.children);return this.expandSegmentGroup(this.injector,this.config,l,Ye).pipe((0,pe.U)(M=>this.createUrlTree(ge(M),this.urlTree.queryParams,this.urlTree.fragment))).pipe((0,Le.K)(M=>{if(M instanceof ue)return this.allowRedirects=!1,this.match(M.urlTree);throw M instanceof Y?this.noMatchError(M):M}))}match(h){return this.expandSegmentGroup(this.injector,this.config,h.root,Ye).pipe((0,pe.U)(D=>this.createUrlTree(ge(D),h.queryParams,h.fragment))).pipe((0,Le.K)(D=>{throw D instanceof Y?this.noMatchError(D):D}))}noMatchError(h){return new v.vHH(4002,R)}createUrlTree(h,l,y){const D=B(h);return new Xe(D,l,y)}expandSegmentGroup(h,l,y,D){return 0===y.segments.length&&y.hasChildren()?this.expandChildren(h,l,y).pipe((0,pe.U)(M=>new Be([],M))):this.expandSegment(h,y,l,y.segments,D,!0)}expandChildren(h,l,y){const D=[];for(const M of Object.keys(y.children))"primary"===M?D.unshift(M):D.push(M);return(0,A.D)(D).pipe((0,ye.b)(M=>{const H=y.children[M],U=Wr(l,M);return this.expandSegmentGroup(h,U,H,M).pipe((0,pe.U)(_e=>({segment:_e,outlet:M})))}),st((M,H)=>(M[H.outlet]=H.segment,M),{}),gt())}expandSegment(h,l,y,D,M,H){return(0,A.D)(y).pipe((0,ye.b)(U=>this.expandSegmentAgainstRoute(h,l,y,U,D,M,H).pipe((0,Le.K)(je=>{if(je instanceof Y)return(0,O.of)(null);throw je}))),se(U=>!!U),(0,Le.K)((U,_e)=>{if(ss(U))return w(l,D,M)?(0,O.of)(new Be([],{})):Ae(l);throw U}))}expandSegmentAgainstRoute(h,l,y,D,M,H,U){return f(D,l,M,H)?void 0===D.redirectTo?this.matchSegmentAgainstRoute(h,l,D,M,H):U&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(h,l,y,D,M,H):Ae(l):Ae(l)}expandSegmentAgainstRouteUsingRedirect(h,l,y,D,M,H){return"**"===D.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(h,y,D,H):this.expandRegularSegmentAgainstRouteUsingRedirect(h,l,y,D,M,H)}expandWildCardWithParamsAgainstRouteUsingRedirect(h,l,y,D){const M=this.applyRedirectCommands([],y.redirectTo,{});return y.redirectTo.startsWith("/")?Ve(M):this.lineralizeSegments(y,M).pipe((0,j.z)(H=>{const U=new Be(H,{});return this.expandSegment(h,U,l,H,D,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(h,l,y,D,M,H){const{matched:U,consumedSegments:_e,remainingSegments:je,positionalParamSegments:Et}=a(l,D,M);if(!U)return Ae(l);const qe=this.applyRedirectCommands(_e,D.redirectTo,Et);return D.redirectTo.startsWith("/")?Ve(qe):this.lineralizeSegments(D,qe).pipe((0,j.z)(Ut=>this.expandSegment(h,l,y,Ut.concat(je),H,!1)))}matchSegmentAgainstRoute(h,l,y,D,M){return"**"===y.path?(h=Gn(y,h),y.loadChildren?(y._loadedRoutes?(0,O.of)({routes:y._loadedRoutes,injector:y._loadedInjector}):this.configLoader.loadChildren(h,y)).pipe((0,pe.U)(U=>(y._loadedRoutes=U.routes,y._loadedInjector=U.injector,new Be(D,{})))):(0,O.of)(new Be(D,{}))):S(l,y,D,h).pipe((0,Te.w)(({matched:H,consumedSegments:U,remainingSegments:_e})=>H?this.getChildConfig(h=y._injector??h,y,D).pipe((0,j.z)(Et=>{const qe=Et.injector??h,Ut=Et.routes,{segmentGroup:Zn,slicedSegments:qr}=c(l,U,_e,Ut),$i=new Be(Zn.segments,Zn.children);if(0===qr.length&&$i.hasChildren())return this.expandChildren(qe,Ut,$i).pipe((0,pe.U)(xs=>new Be(U,xs)));if(0===Ut.length&&0===qr.length)return(0,O.of)(new Be(U,{}));const or=Sn(y)===M;return this.expandSegment(qe,$i,Ut,qr,or?Ye:M,!0).pipe((0,pe.U)(Js=>new Be(U.concat(Js.segments),Js.children)))})):Ae(l)))}getChildConfig(h,l,y){return l.children?(0,O.of)({routes:l.children,injector:h}):l.loadChildren?void 0!==l._loadedRoutes?(0,O.of)({routes:l._loadedRoutes,injector:l._loadedInjector}):function ls(d,h,l,y){const D=h.canLoad;if(void 0===D||0===D.length)return(0,O.of)(!0);const M=D.map(H=>{const U=tr(H,d);return I(function xi(d){return d&&Sr(d.canLoad)}(U)?U.canLoad(h,l):d.runInContext(()=>U(h,l)))});return(0,O.of)(M).pipe(zt(),ki())}(h,l,y).pipe((0,j.z)(D=>D?this.configLoader.loadChildren(h,l).pipe((0,le.b)(M=>{l._loadedRoutes=M.routes,l._loadedInjector=M.injector})):function rt(d){return(0,q._)(Ji(R,3))}())):(0,O.of)({routes:[],injector:h})}lineralizeSegments(h,l){let y=[],D=l.root;for(;;){if(y=y.concat(D.segments),0===D.numberOfChildren)return(0,O.of)(y);if(D.numberOfChildren>1||!D.children[Ye])return(0,q._)(new v.vHH(4e3,R));D=D.children[Ye]}}applyRedirectCommands(h,l,y){return this.applyRedirectCreateUrlTree(l,this.urlSerializer.parse(l),h,y)}applyRedirectCreateUrlTree(h,l,y,D){const M=this.createSegmentGroup(h,l.root,y,D);return new Xe(M,this.createQueryParams(l.queryParams,this.urlTree.queryParams),l.fragment)}createQueryParams(h,l){const y={};return J(h,(D,M)=>{if("string"==typeof D&&D.startsWith(":")){const U=D.substring(1);y[M]=l[U]}else y[M]=D}),y}createSegmentGroup(h,l,y,D){const M=this.createSegments(h,l.segments,y,D);let H={};return J(l.children,(U,_e)=>{H[_e]=this.createSegmentGroup(h,U,y,D)}),new Be(M,H)}createSegments(h,l,y,D){return l.map(M=>M.path.startsWith(":")?this.findPosParam(h,M,D):this.findOrReturn(M,y))}findPosParam(h,l,y){const D=y[l.path.substring(1)];if(!D)throw new v.vHH(4001,R);return D}findOrReturn(h,l){let y=0;for(const D of l){if(D.path===h.path)return l.splice(y),D;y++}return h}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Dn{}class pn{constructor(h,l,y,D,M,H,U,_e){this.injector=h,this.rootComponentType=l,this.config=y,this.urlTree=D,this.url=M,this.paramsInheritanceStrategy=H,this.relativeLinkResolution=U,this.urlSerializer=_e}recognize(){const h=c(this.urlTree.root,[],[],this.config.filter(l=>void 0===l.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,h,Ye).pipe((0,pe.U)(l=>{if(null===l)return null;const y=new ai([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Ye,this.rootComponentType,null,this.urlTree.root,-1,{}),D=new fr(y,l),M=new ms(this.url,D);return this.inheritParamsAndData(M._root),M}))}inheritParamsAndData(h){const l=h.value,y=$r(l,this.paramsInheritanceStrategy);l.params=Object.freeze(y.params),l.data=Object.freeze(y.data),h.children.forEach(D=>this.inheritParamsAndData(D))}processSegmentGroup(h,l,y,D){return 0===y.segments.length&&y.hasChildren()?this.processChildren(h,l,y):this.processSegment(h,l,y,y.segments,D)}processChildren(h,l,y){return(0,A.D)(Object.keys(y.children)).pipe((0,ye.b)(D=>{const M=y.children[D],H=Wr(l,D);return this.processSegmentGroup(h,H,M,D)}),st((D,M)=>D&&M?(D.push(...M),D):null),(0,$e.o)(D=>null!==D),Ee(null),gt(),(0,pe.U)(D=>{if(null===D)return null;const M=fi(D);return function tn(d){d.sort((h,l)=>h.value.outlet===Ye?-1:l.value.outlet===Ye?1:h.value.outlet.localeCompare(l.value.outlet))}(M),M}))}processSegment(h,l,y,D,M){return(0,A.D)(l).pipe((0,ye.b)(H=>this.processSegmentAgainstRoute(H._injector??h,H,y,D,M)),se(H=>!!H),(0,Le.K)(H=>{if(ss(H))return w(y,D,M)?(0,O.of)([]):(0,O.of)(null);throw H}))}processSegmentAgainstRoute(h,l,y,D,M){if(l.redirectTo||!f(l,y,D,M))return(0,O.of)(null);let H;if("**"===l.path){const U=D.length>0?wt(D).parameters:{},_e=Es(y)+D.length,je=new ai(D,U,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ot(l),Sn(l),l.component??l._loadedComponent??null,l,Vi(y),_e,ct(l),_e);H=(0,O.of)({snapshot:je,consumedSegments:[],remainingSegments:[]})}else H=S(y,l,D,h).pipe((0,pe.U)(({matched:U,consumedSegments:_e,remainingSegments:je,parameters:Et})=>{if(!U)return null;const qe=Es(y)+_e.length;return{snapshot:new ai(_e,Et,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ot(l),Sn(l),l.component??l._loadedComponent??null,l,Vi(y),qe,ct(l),qe),consumedSegments:_e,remainingSegments:je}}));return H.pipe((0,Te.w)(U=>{if(null===U)return(0,O.of)(null);const{snapshot:_e,consumedSegments:je,remainingSegments:Et}=U;h=l._injector??h;const qe=l._loadedInjector??h,Ut=function En(d){return d.children?d.children:d.loadChildren?d._loadedRoutes:[]}(l),{segmentGroup:Zn,slicedSegments:qr}=c(y,je,Et,Ut.filter(or=>void 0===or.redirectTo),this.relativeLinkResolution);if(0===qr.length&&Zn.hasChildren())return this.processChildren(qe,Ut,Zn).pipe((0,pe.U)(or=>null===or?null:[new fr(_e,or)]));if(0===Ut.length&&0===qr.length)return(0,O.of)([new fr(_e,[])]);const $i=Sn(l)===M;return this.processSegment(qe,Ut,Zn,qr,$i?Ye:M).pipe((0,pe.U)(or=>null===or?null:[new fr(_e,or)]))}))}}function Bi(d){const h=d.value.routeConfig;return h&&""===h.path&&void 0===h.redirectTo}function fi(d){const h=[],l=new Set;for(const y of d){if(!Bi(y)){h.push(y);continue}const D=h.find(M=>y.value.routeConfig===M.value.routeConfig);void 0!==D?(D.children.push(...y.children),l.add(D)):h.push(y)}for(const y of l){const D=fi(y.children);h.push(new fr(y.value,D))}return h.filter(y=>!l.has(y))}function Vi(d){let h=d;for(;h._sourceSegment;)h=h._sourceSegment;return h}function Es(d){let h=d,l=h._segmentIndexShift??0;for(;h._sourceSegment;)h=h._sourceSegment,l+=h._segmentIndexShift??0;return l-1}function ot(d){return d.data||{}}function ct(d){return d.resolve||{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Fr(d){return"string"==typeof d.title||null===d.title}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ws(d){return(0,Te.w)(h=>{const l=d(h);return l?(0,A.D)(l).pipe((0,pe.U)(()=>h)):(0,O.of)(h)})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Jt=(()=>{class d{buildTitle(l){let y,D=l.root;for(;void 0!==D;)y=this.getResolvedTitleForRoute(D)??y,D=D.children.find(M=>M.outlet===Ye);return y}getResolvedTitleForRoute(l){return l.data[kt]}}return d.\u0275fac=function(l){return new(l||d)},d.\u0275prov=v.Yz7({token:d,factory:function(){return(0,v.f3M)(mr)},providedIn:"root"}),d})(),mr=(()=>{class d extends Jt{constructor(l){super(),this.title=l}updateTitle(l){const y=this.buildTitle(l);void 0!==y&&this.title.setTitle(y)}}return d.\u0275fac=function(l){return new(l||d)(v.LFG(un.Dx))},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Cs{}class la extends class us{shouldDetach(h){return!1}store(h,l){}shouldAttach(h){return!1}retrieve(h){return null}shouldReuseRoute(h,l){return h.routeConfig===l.routeConfig}}{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ir=new v.OlP("",{providedIn:"root",factory:()=>({})}),pi=new v.OlP("ROUTES");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ss=(()=>{class d{constructor(l,y){this.injector=l,this.compiler=y,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(l){if(this.componentLoaders.get(l))return this.componentLoaders.get(l);if(l._loadedComponent)return(0,O.of)(l._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(l);const y=I(l.loadComponent()).pipe((0,le.b)(M=>{this.onLoadEndListener&&this.onLoadEndListener(l),l._loadedComponent=M}),mn(()=>{this.componentLoaders.delete(l)})),D=new Ce.c(y,()=>new ce.x).pipe((0,Ot.x)());return this.componentLoaders.set(l,D),D}loadChildren(l,y){if(this.childrenLoaders.get(y))return this.childrenLoaders.get(y);if(y._loadedRoutes)return(0,O.of)({routes:y._loadedRoutes,injector:y._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(y);const M=this.loadModuleFactoryOrRoutes(y.loadChildren).pipe((0,pe.U)(U=>{this.onLoadEndListener&&this.onLoadEndListener(y);let _e,je,Et=!1;Array.isArray(U)?je=U:(_e=U.create(l).injector,je=at(_e.get(pi,[],v.XFs.Self|v.XFs.Optional)));return{routes:je.map(jn),injector:_e}}),mn(()=>{this.childrenLoaders.delete(y)})),H=new Ce.c(M,()=>new ce.x).pipe((0,Ot.x)());return this.childrenLoaders.set(y,H),H}loadModuleFactoryOrRoutes(l){return I(l()).pipe((0,j.z)(y=>y instanceof v.YKP||Array.isArray(y)?(0,O.of)(y):(0,A.D)(this.compiler.compileModuleAsync(y))))}}return d.\u0275fac=function(l){return new(l||d)(v.LFG(v.zs3),v.LFG(v.Sil))},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ao{}class Xs{shouldProcessUrl(h){return!0}extract(h){return h}merge(h,l){return h}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hl(d){throw d}function ca(d,h,l){return h.parse("/")}const da={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ha={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function pa(){const d=(0,v.f3M)(ht),h=(0,v.f3M)(Pr),l=(0,v.f3M)(Oe.Ye),y=(0,v.f3M)(v.zs3),D=(0,v.f3M)(v.Sil),M=(0,v.f3M)(pi,{optional:!0})??[],H=(0,v.f3M)(ir,{optional:!0})??{},U=(0,v.f3M)(mr),_e=(0,v.f3M)(Jt,{optional:!0}),je=(0,v.f3M)(Ao,{optional:!0}),Et=(0,v.f3M)(Cs,{optional:!0}),qe=new ln(null,d,h,l,y,D,at(M));return je&&(qe.urlHandlingStrategy=je),Et&&(qe.routeReuseStrategy=Et),qe.titleStrategy=_e??U,function fa(d,h){d.errorHandler&&(h.errorHandler=d.errorHandler),d.malformedUriErrorHandler&&(h.malformedUriErrorHandler=d.malformedUriErrorHandler),d.onSameUrlNavigation&&(h.onSameUrlNavigation=d.onSameUrlNavigation),d.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=d.paramsInheritanceStrategy),d.relativeLinkResolution&&(h.relativeLinkResolution=d.relativeLinkResolution),d.urlUpdateStrategy&&(h.urlUpdateStrategy=d.urlUpdateStrategy),d.canceledNavigationResolution&&(h.canceledNavigationResolution=d.canceledNavigationResolution)}(H,qe),qe}let ln=(()=>{class d{constructor(l,y,D,M,H,U,_e){this.rootComponentType=l,this.urlSerializer=y,this.rootContexts=D,this.location=M,this.config=_e,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new ce.x,this.errorHandler=hl,this.malformedUriErrorHandler=ca,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>(0,O.of)(void 0),this.urlHandlingStrategy=new Xs,this.routeReuseStrategy=new la,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=H.get(Ss),this.configLoader.onLoadEndListener=Ut=>this.triggerEvent(new ps(Ut)),this.configLoader.onLoadStartListener=Ut=>this.triggerEvent(new Zi(Ut)),this.ngModule=H.get(v.h0i),this.console=H.get(v.c2e);const qe=H.get(v.R0b);this.isNgZoneEnabled=qe instanceof v.R0b&&v.R0b.isInAngularZone(),this.resetConfig(_e),this.currentUrlTree=function V(){return new Xe(new Be([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=gs(this.currentUrlTree,this.rootComponentType),this.transitions=new W.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(l){const y=this.events;return l.pipe((0,we.h)(D=>0!==D.id),(0,pe.U)(D=>({...D,extractedUrl:this.urlHandlingStrategy.extract(D.rawUrl)})),(0,Te.w)(D=>{let M=!1,H=!1;return(0,O.of)(D).pipe((0,le.b)(U=>{this.currentNavigation={id:U.id,initialUrl:U.rawUrl,extractedUrl:U.extractedUrl,trigger:U.source,extras:U.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),(0,Te.w)(U=>{const _e=this.browserUrlTree.toString(),je=!this.navigated||U.extractedUrl.toString()!==_e||_e!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||je)&&this.urlHandlingStrategy.shouldProcessUrl(U.rawUrl))return ga(U.source)&&(this.browserUrlTree=U.extractedUrl),(0,O.of)(U).pipe((0,Te.w)(qe=>{const Ut=this.transitions.getValue();return y.next(new Si(qe.id,this.serializeUrl(qe.extractedUrl),qe.source,qe.restoredState)),Ut!==this.transitions.getValue()?Pe.E:Promise.resolve(qe)}),function mt(d,h,l,y){return(0,Te.w)(D=>function et(d,h,l,y,D){return new It(d,h,l,y,D).apply()}(d,h,l,D.extractedUrl,y).pipe((0,pe.U)(M=>({...D,urlAfterRedirects:M}))))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,le.b)(qe=>{this.currentNavigation={...this.currentNavigation,finalUrl:qe.urlAfterRedirects},D.urlAfterRedirects=qe.urlAfterRedirects}),function At(d,h,l,y,D,M){return(0,j.z)(H=>function Kt(d,h,l,y,D,M,H="emptyOnly",U="legacy"){return new pn(d,h,l,y,D,H,U,M).recognize().pipe((0,Te.w)(_e=>null===_e?function Qt(d){return new ie.y(h=>h.error(d))}(new Dn):(0,O.of)(_e)))}(d,h,l,H.urlAfterRedirects,y.serialize(H.urlAfterRedirects),y,D,M).pipe((0,pe.U)(U=>({...H,targetSnapshot:U}))))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,le.b)(qe=>{if(D.targetSnapshot=qe.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!qe.extras.skipLocationChange){const Zn=this.urlHandlingStrategy.merge(qe.urlAfterRedirects,qe.rawUrl);this.setBrowserUrl(Zn,qe)}this.browserUrlTree=qe.urlAfterRedirects}const Ut=new Hn(qe.id,this.serializeUrl(qe.extractedUrl),this.serializeUrl(qe.urlAfterRedirects),qe.targetSnapshot);y.next(Ut)}));if(je&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:Ut,extractedUrl:Zn,source:qr,restoredState:$i,extras:or}=U,Os=new Si(Ut,this.serializeUrl(Zn),qr,$i);y.next(Os);const Js=gs(Zn,this.rootComponentType).snapshot;return D={...U,targetSnapshot:Js,urlAfterRedirects:Zn,extras:{...or,skipLocationChange:!1,replaceUrl:!1}},(0,O.of)(D)}return this.rawUrlTree=U.rawUrl,U.resolve(null),Pe.E}),(0,le.b)(U=>{const _e=new wr(U.id,this.serializeUrl(U.extractedUrl),this.serializeUrl(U.urlAfterRedirects),U.targetSnapshot);this.triggerEvent(_e)}),(0,pe.U)(U=>D={...U,guards:_s(U.targetSnapshot,U.currentSnapshot,this.rootContexts)}),function Yn(d,h){return(0,j.z)(l=>{const{targetSnapshot:y,currentSnapshot:D,guards:{canActivateChecks:M,canDeactivateChecks:H}}=l;return 0===H.length&&0===M.length?(0,O.of)({...l,guardsResult:!0}):function Li(d,h,l,y){return(0,A.D)(d).pipe((0,j.z)(D=>function Ds(d,h,l,y,D){const M=h&&h.routeConfig?h.routeConfig.canDeactivate:null;if(!M||0===M.length)return(0,O.of)(!0);const H=M.map(U=>{const _e=tt(h)??D,je=tr(U,_e);return I(function rs(d){return d&&Sr(d.canDeactivate)}(je)?je.canDeactivate(d,h,l,y):_e.runInContext(()=>je(d,h,l,y))).pipe(se())});return(0,O.of)(H).pipe(zt())}(D.component,D.route,l,h,y)),se(D=>!0!==D,!0))}(H,y,D,d).pipe((0,j.z)(U=>U&&function rn(d){return"boolean"==typeof d}(U)?function Zr(d,h,l,y){return(0,A.D)(h).pipe((0,ye.b)(D=>(0,te.z)(function Zs(d,h){return null!==d&&h&&h(new Mo(d)),(0,O.of)(!0)}(D.route.parent,y),function gr(d,h){return null!==d&&h&&h(new Qi(d)),(0,O.of)(!0)}(D.route,y),function as(d,h,l){const y=h[h.length-1],M=h.slice(0,h.length-1).reverse().map(H=>function xr(d){const h=d.routeConfig?d.routeConfig.canActivateChild:null;return h&&0!==h.length?{node:d,guards:h}:null}(H)).filter(H=>null!==H).map(H=>(0,G.P)(()=>{const U=H.guards.map(_e=>{const je=tt(H.node)??l,Et=tr(_e,je);return I(function Kn(d){return d&&Sr(d.canActivateChild)}(Et)?Et.canActivateChild(y,d):je.runInContext(()=>Et(y,d))).pipe(se())});return(0,O.of)(U).pipe(zt())}));return(0,O.of)(M).pipe(zt())}(d,D.path,l),function os(d,h,l){const y=h.routeConfig?h.routeConfig.canActivate:null;if(!y||0===y.length)return(0,O.of)(!0);const D=y.map(M=>(0,G.P)(()=>{const H=tt(h)??l,U=tr(M,H);return I(function di(d){return d&&Sr(d.canActivate)}(U)?U.canActivate(h,d):H.runInContext(()=>U(h,d))).pipe(se())}));return(0,O.of)(D).pipe(zt())}(d,D.route,l))),se(D=>!0!==D,!0))}(y,M,d,h):(0,O.of)(U)),(0,pe.U)(U=>({...l,guardsResult:U})))})}(this.ngModule.injector,U=>this.triggerEvent(U)),(0,le.b)(U=>{if(D.guardsResult=U.guardsResult,Ke(U.guardsResult))throw Ar(0,U.guardsResult);const _e=new xn(U.id,this.serializeUrl(U.extractedUrl),this.serializeUrl(U.urlAfterRedirects),U.targetSnapshot,!!U.guardsResult);this.triggerEvent(_e)}),(0,we.h)(U=>!!U.guardsResult||(this.restoreHistory(U),this.cancelNavigationTransition(U,"",3),!1)),ws(U=>{if(U.guards.canActivateChecks.length)return(0,O.of)(U).pipe((0,le.b)(_e=>{const je=new Hr(_e.id,this.serializeUrl(_e.extractedUrl),this.serializeUrl(_e.urlAfterRedirects),_e.targetSnapshot);this.triggerEvent(je)}),(0,Te.w)(_e=>{let je=!1;return(0,O.of)(_e).pipe(function an(d,h){return(0,j.z)(l=>{const{targetSnapshot:y,guards:{canActivateChecks:D}}=l;if(!D.length)return(0,O.of)(l);let M=0;return(0,A.D)(D).pipe((0,ye.b)(H=>function rr(d,h,l,y){const D=d.routeConfig,M=d._resolve;return void 0!==D?.title&&!Fr(D)&&(M[kt]=D.title),function bn(d,h,l,y){const D=function br(d){return[...Object.keys(d),...Object.getOwnPropertySymbols(d)]}(d);if(0===D.length)return(0,O.of)({});const M={};return(0,A.D)(D).pipe((0,j.z)(H=>function Yt(d,h,l,y){const D=tt(h)??y,M=tr(d,D);return I(M.resolve?M.resolve(h,l):D.runInContext(()=>M(h,l)))}(d[H],h,l,y).pipe(se(),(0,le.b)(U=>{M[H]=U}))),bt(1),(0,Bt.h)(M),(0,Le.K)(H=>ss(H)?Pe.E:(0,q._)(H)))}(M,d,h,y).pipe((0,pe.U)(H=>(d._resolvedData=H,d.data=$r(d,l).resolve,D&&Fr(D)&&(d.data[kt]=D.title),null)))}(H.route,y,d,h)),(0,le.b)(()=>M++),bt(1),(0,j.z)(H=>M===D.length?(0,O.of)(l):Pe.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,le.b)({next:()=>je=!0,complete:()=>{je||(this.restoreHistory(_e),this.cancelNavigationTransition(_e,"",2))}}))}),(0,le.b)(_e=>{const je=new zs(_e.id,this.serializeUrl(_e.extractedUrl),this.serializeUrl(_e.urlAfterRedirects),_e.targetSnapshot);this.triggerEvent(je)}))}),ws(U=>{const _e=je=>{const Et=[];je.routeConfig?.loadComponent&&!je.routeConfig._loadedComponent&&Et.push(this.configLoader.loadComponent(je.routeConfig).pipe((0,le.b)(qe=>{je.component=qe}),(0,pe.U)(()=>{})));for(const qe of je.children)Et.push(..._e(qe));return Et};return(0,oe.a)(_e(U.targetSnapshot.root)).pipe(Ee(),(0,it.q)(1))}),ws(()=>this.afterPreactivation()),(0,pe.U)(U=>{const _e=function Ai(d,h,l){const y=Cr(d,h._root,l?l._root:void 0);return new Mi(y,h)}(this.routeReuseStrategy,U.targetSnapshot,U.currentRouterState);return D={...U,targetRouterState:_e}}),(0,le.b)(U=>{this.currentUrlTree=U.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(U.urlAfterRedirects,U.rawUrl),this.routerState=U.targetRouterState,"deferred"===this.urlUpdateStrategy&&(U.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,U),this.browserUrlTree=U.urlAfterRedirects)}),((d,h,l)=>(0,pe.U)(y=>(new Io(h,y.targetRouterState,y.currentRouterState,l).activate(d),y)))(this.rootContexts,this.routeReuseStrategy,U=>this.triggerEvent(U)),(0,le.b)({next(){M=!0},complete(){M=!0}}),mn(()=>{M||H||this.cancelNavigationTransition(D,"",1),this.currentNavigation?.id===D.id&&(this.currentNavigation=null)}),(0,Le.K)(U=>{if(H=!0,ui(U)){_n(U)||(this.navigated=!0,this.restoreHistory(D,!0));const _e=new fn(D.id,this.serializeUrl(D.extractedUrl),U.message,U.cancellationCode);if(y.next(_e),_n(U)){const je=this.urlHandlingStrategy.merge(U.url,this.rawUrlTree),Et={skipLocationChange:D.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||ga(D.source)};this.scheduleNavigation(je,"imperative",null,Et,{resolve:D.resolve,reject:D.reject,promise:D.promise})}else D.resolve(!1)}else{this.restoreHistory(D,!0);const _e=new Er(D.id,this.serializeUrl(D.extractedUrl),U,D.targetSnapshot??void 0);y.next(_e);try{D.resolve(this.errorHandler(U))}catch(je){D.reject(je)}}return Pe.E}))}))}resetRootComponentType(l){this.rootComponentType=l,this.routerState.root.component=this.rootComponentType}setTransition(l){this.transitions.next({...this.transitions.value,...l})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(l=>{const y="popstate"===l.type?"popstate":"hashchange";"popstate"===y&&setTimeout(()=>{const D={replaceUrl:!0},M=l.state?.navigationId?l.state:null;if(M){const U={...M};delete U.navigationId,delete U.\u0275routerPageId,0!==Object.keys(U).length&&(D.state=U)}const H=this.parseUrl(l.url);this.scheduleNavigation(H,y,M,D)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(l){this.events.next(l)}resetConfig(l){this.config=l.map(jn),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(l,y={}){const{relativeTo:D,queryParams:M,fragment:H,queryParamsHandling:U,preserveFragment:_e}=y,je=D||this.routerState.root,Et=_e?this.currentUrlTree.fragment:H;let qe=null;switch(U){case"merge":qe={...this.currentUrlTree.queryParams,...M};break;case"preserve":qe=this.currentUrlTree.queryParams;break;default:qe=M||null}return null!==qe&&(qe=this.removeEmptyProps(qe)),ut(je,this.currentUrlTree,l,qe,Et??null)}navigateByUrl(l,y={skipLocationChange:!1}){const D=Ke(l)?l:this.parseUrl(l),M=this.urlHandlingStrategy.merge(D,this.rawUrlTree);return this.scheduleNavigation(M,"imperative",null,y)}navigate(l,y={skipLocationChange:!1}){return function bs(d){for(let h=0;h<d.length;h++){if(null==d[h])throw new v.vHH(4008,false)}}(l),this.navigateByUrl(this.createUrlTree(l,y),y)}serializeUrl(l){return this.urlSerializer.serialize(l)}parseUrl(l){let y;try{y=this.urlSerializer.parse(l)}catch(D){y=this.malformedUriErrorHandler(D,this.urlSerializer,l)}return y}isActive(l,y){let D;if(D=!0===y?{...da}:!1===y?{...ha}:y,Ke(l))return ve(this.currentUrlTree,l,D);const M=this.parseUrl(l);return ve(this.currentUrlTree,M,D)}removeEmptyProps(l){return Object.keys(l).reduce((y,D)=>{const M=l[D];return null!=M&&(y[D]=M),y},{})}processNavigations(){this.navigations.subscribe(l=>{this.navigated=!0,this.lastSuccessfulId=l.id,this.currentPageId=l.targetPageId,this.events.next(new Gt(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),l.resolve(!0)},l=>{this.console.warn(`Unhandled Navigation Error: ${l}`)})}scheduleNavigation(l,y,D,M,H){if(this.disposed)return Promise.resolve(!1);let U,_e,je;H?(U=H.resolve,_e=H.reject,je=H.promise):je=new Promise((Ut,Zn)=>{U=Ut,_e=Zn});const Et=++this.navigationId;let qe;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(D=this.location.getState()),qe=D&&D.\u0275routerPageId?D.\u0275routerPageId:M.replaceUrl||M.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):qe=0,this.setTransition({id:Et,targetPageId:qe,source:y,restoredState:D,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:l,extras:M,resolve:U,reject:_e,promise:je,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),je.catch(Ut=>Promise.reject(Ut))}setBrowserUrl(l,y){const D=this.urlSerializer.serialize(l),M={...y.extras.state,...this.generateNgRouterState(y.id,y.targetPageId)};this.location.isCurrentPathEqualTo(D)||y.extras.replaceUrl?this.location.replaceState(D,"",M):this.location.go(D,"",M)}restoreHistory(l,y=!1){if("computed"===this.canceledNavigationResolution){const D=this.currentPageId-l.targetPageId;"popstate"!==l.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===D?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===D&&(this.resetState(l),this.browserUrlTree=l.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(D)}else"replace"===this.canceledNavigationResolution&&(y&&this.resetState(l),this.resetUrlToCurrentUrlTree())}resetState(l){this.routerState=l.currentRouterState,this.currentUrlTree=l.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,l.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(l,y,D){const M=new fn(l.id,this.serializeUrl(l.extractedUrl),y,D);this.triggerEvent(M),l.resolve(!1)}generateNgRouterState(l,y){return"computed"===this.canceledNavigationResolution?{navigationId:l,\u0275routerPageId:y}:{navigationId:l}}}return d.\u0275fac=function(l){v.$Z()},d.\u0275prov=v.Yz7({token:d,factory:function(){return pa()},providedIn:"root"}),d})();function ga(d){return"imperative"!==d}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let qs=(()=>{class d{constructor(l,y,D,M,H){this.router=l,this.route=y,this.tabIndexAttribute=D,this.renderer=M,this.el=H,this._preserveFragment=!1,this._skipLocationChange=!1,this._replaceUrl=!1,this.commands=null,this.onChanges=new ce.x,this.setTabIndexIfNotOnNativeEl("0")}set preserveFragment(l){this._preserveFragment=(0,v.D6c)(l)}get preserveFragment(){return this._preserveFragment}set skipLocationChange(l){this._skipLocationChange=(0,v.D6c)(l)}get skipLocationChange(){return this._skipLocationChange}set replaceUrl(l){this._replaceUrl=(0,v.D6c)(l)}get replaceUrl(){return this._replaceUrl}setTabIndexIfNotOnNativeEl(l){if(null!=this.tabIndexAttribute)return;const y=this.renderer,D=this.el.nativeElement;null!==l?y.setAttribute(D,"tabindex",l):y.removeAttribute(D,"tabindex")}ngOnChanges(l){this.onChanges.next(this)}set routerLink(l){null!=l?(this.commands=Array.isArray(l)?l:[l],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(){return null===this.urlTree||this.router.navigateByUrl(this.urlTree,{skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state}),!0}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}}return d.\u0275fac=function(l){return new(l||d)(v.Y36(ln),v.Y36(Jn),v.$8M("tabindex"),v.Y36(v.Qsj),v.Y36(v.SBq))},d.\u0275dir=v.lG2({type:d,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(l,y){1&l&&v.NdJ("click",function(){return y.onClick()})},inputs:{queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",routerLink:"routerLink"},standalone:!0,features:[v.TTD]}),d})(),Ms=(()=>{class d{constructor(l,y,D){this.router=l,this.route=y,this.locationStrategy=D,this._preserveFragment=!1,this._skipLocationChange=!1,this._replaceUrl=!1,this.commands=null,this.href=null,this.onChanges=new ce.x,this.subscription=l.events.subscribe(M=>{M instanceof Gt&&this.updateTargetUrlAndHref()})}set preserveFragment(l){this._preserveFragment=(0,v.D6c)(l)}get preserveFragment(){return this._preserveFragment}set skipLocationChange(l){this._skipLocationChange=(0,v.D6c)(l)}get skipLocationChange(){return this._skipLocationChange}set replaceUrl(l){this._replaceUrl=(0,v.D6c)(l)}get replaceUrl(){return this._replaceUrl}set routerLink(l){this.commands=null!=l?Array.isArray(l)?l:[l]:null}ngOnChanges(l){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(l,y,D,M,H){return!!(0!==l||y||D||M||H||"string"==typeof this.target&&"_self"!=this.target||null===this.urlTree)||(this.router.navigateByUrl(this.urlTree,{skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state}),!1)}updateTargetUrlAndHref(){this.href=null!==this.urlTree?this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}}return d.\u0275fac=function(l){return new(l||d)(v.Y36(ln),v.Y36(Jn),v.Y36(Oe.S$))},d.\u0275dir=v.lG2({type:d,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(l,y){1&l&&v.NdJ("click",function(M){return y.onClick(M.button,M.ctrlKey,M.shiftKey,M.altKey,M.metaKey)}),2&l&&v.uIk("target",y.target)("href",y.href,v.LSH)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",routerLink:"routerLink"},standalone:!0,features:[v.TTD]}),d})(),ji=(()=>{class d{constructor(l,y,D,M,H,U){this.router=l,this.element=y,this.renderer=D,this.cdr=M,this.link=H,this.linkWithHref=U,this.classes=[],this.isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new v.vpe,this.routerEventsSubscription=l.events.subscribe(_e=>{_e instanceof Gt&&this.update()})}ngAfterContentInit(){(0,O.of)(this.links.changes,this.linksWithHrefs.changes,(0,O.of)(null)).pipe((0,yt.J)()).subscribe(l=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();const l=[...this.links.toArray(),...this.linksWithHrefs.toArray(),this.link,this.linkWithHref].filter(y=>!!y).map(y=>y.onChanges);this.linkInputChangesSubscription=(0,A.D)(l).pipe((0,yt.J)()).subscribe(y=>{this.isActive!==this.isLinkActive(this.router)(y)&&this.update()})}set routerLinkActive(l){const y=Array.isArray(l)?l:l.split(" ");this.classes=y.filter(D=>!!D)}ngOnChanges(l){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.linksWithHrefs||!this.router.navigated||Promise.resolve().then(()=>{const l=this.hasActiveLinks();this.isActive!==l&&(this.isActive=l,this.cdr.markForCheck(),this.classes.forEach(y=>{l?this.renderer.addClass(this.element.nativeElement,y):this.renderer.removeClass(this.element.nativeElement,y)}),l&&void 0!==this.ariaCurrentWhenActive?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this.isActiveChange.emit(l))})}isLinkActive(l){const y=function fl(d){return!!d.paths}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return D=>!!D.urlTree&&l.isActive(D.urlTree,y)}hasActiveLinks(){const l=this.isLinkActive(this.router);return this.link&&l(this.link)||this.linkWithHref&&l(this.linkWithHref)||this.links.some(l)||this.linksWithHrefs.some(l)}}return d.\u0275fac=function(l){return new(l||d)(v.Y36(ln),v.Y36(v.SBq),v.Y36(v.Qsj),v.Y36(v.sBO),v.Y36(qs,8),v.Y36(Ms,8))},d.\u0275dir=v.lG2({type:d,selectors:[["","routerLinkActive",""]],contentQueries:function(l,y,D){if(1&l&&(v.Suo(D,qs,5),v.Suo(D,Ms,5)),2&l){let M;v.iGM(M=v.CRH())&&(y.links=M),v.iGM(M=v.CRH())&&(y.linksWithHrefs=M)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[v.TTD]}),d})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Po{}let ya=(()=>{class d{constructor(l,y,D,M,H){this.router=l,this.injector=D,this.preloadingStrategy=M,this.loader=H}setUpPreloading(){this.subscription=this.router.events.pipe((0,we.h)(l=>l instanceof Gt),(0,ye.b)(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(l,y){const D=[];for(const M of y){M.providers&&!M._injector&&(M._injector=(0,v.MMx)(M.providers,l,`Route: ${M.path}`));const H=M._injector??l,U=M._loadedInjector??H;M.loadChildren&&!M._loadedRoutes&&void 0===M.canLoad||M.loadComponent&&!M._loadedComponent?D.push(this.preloadConfig(H,M)):(M.children||M._loadedRoutes)&&D.push(this.processRoutes(U,M.children??M._loadedRoutes))}return(0,A.D)(D).pipe((0,yt.J)())}preloadConfig(l,y){return this.preloadingStrategy.preload(y,()=>{let D;D=y.loadChildren&&void 0===y.canLoad?this.loader.loadChildren(l,y):(0,O.of)(null);const M=D.pipe((0,j.z)(H=>null===H?(0,O.of)(void 0):(y._loadedRoutes=H.routes,y._loadedInjector=H.injector,this.processRoutes(H.injector??l,H.routes))));if(y.loadComponent&&!y._loadedComponent){const H=this.loader.loadComponent(y);return(0,A.D)([M,H]).pipe((0,yt.J)())}return M})}}return d.\u0275fac=function(l){return new(l||d)(v.LFG(ln),v.LFG(v.Sil),v.LFG(v.lqb),v.LFG(Po),v.LFG(Ss))},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ts=new v.OlP("");let Ui=(()=>{class d{constructor(l,y,D={}){this.router=l,this.viewportScroller=y,this.options=D,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},D.scrollPositionRestoration=D.scrollPositionRestoration||"disabled",D.anchorScrolling=D.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(l=>{l instanceof Si?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=l.navigationTrigger,this.restoredId=l.restoredState?l.restoredState.navigationId:0):l instanceof Gt&&(this.lastId=l.id,this.scheduleScrollEvent(l,this.router.parseUrl(l.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(l=>{l instanceof oi&&(l.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(l.position):l.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(l.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(l,y){this.router.triggerEvent(new oi(l,"popstate"===this.lastSource?this.store[this.restoredId]:null,y))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return d.\u0275fac=function(l){v.$Z()},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac}),d})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function gi(d,h){return{\u0275kind:d,\u0275providers:h}}function mi(d){return[{provide:pi,multi:!0,useValue:d}]}function va(){const d=(0,v.f3M)(v.zs3);return h=>{const l=d.get(v.z2F);if(h!==l.components[0])return;const y=d.get(ln),D=d.get(Wt);1===d.get(_a)&&y.initialNavigation(),d.get(pl,null,v.XFs.Optional)?.setUpPreloading(),d.get(Ts,null,v.XFs.Optional)?.init(),y.resetRootComponentType(l.componentTypes[0]),D.closed||(D.next(),D.unsubscribe())}}const Wt=new v.OlP("",{factory:()=>new ce.x}),_a=new v.OlP("",{providedIn:"root",factory:()=>1});const pl=new v.OlP("");function jc(d){return gi(0,[{provide:pl,useExisting:ya},{provide:Po,useExisting:d}])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const gl=new v.OlP("ROUTER_FORROOT_GUARD"),wn=[Oe.Ye,{provide:ht,useClass:Mt},{provide:ln,useFactory:pa},Pr,{provide:Jn,useFactory:function Ro(d){return d.routerState.root},deps:[ln]},Ss];function Oo(){return new v.PXZ("Router",ln)}let As=(()=>{class d{constructor(l){}static forRoot(l,y){return{ngModule:d,providers:[wn,[],mi(l),{provide:gl,useFactory:Xr,deps:[[ln,new v.FiY,new v.tp0]]},{provide:ir,useValue:y||{}},y?.useHash?{provide:Oe.S$,useClass:Oe.Do}:{provide:Oe.S$,useClass:Oe.b0},{provide:Ts,useFactory:()=>{const d=(0,v.f3M)(ln),h=(0,v.f3M)(Oe.EM),l=(0,v.f3M)(ir);return l.scrollOffset&&h.setOffset(l.scrollOffset),new Ui(d,h,l)}},y?.preloadingStrategy?jc(y.preloadingStrategy).\u0275providers:[],{provide:v.PXZ,multi:!0,useFactory:Oo},y?.initialNavigation?Da(y):[],[{provide:Ps,useFactory:va},{provide:v.tb,multi:!0,useExisting:Ps}]]}}static forChild(l){return{ngModule:d,providers:[mi(l)]}}}return d.\u0275fac=function(l){return new(l||d)(v.LFG(gl,8))},d.\u0275mod=v.oAB({type:d}),d.\u0275inj=v.cJS({imports:[ci]}),d})();function Xr(d){return"guarded"}function Da(d){return["disabled"===d.initialNavigation?gi(3,[{provide:v.ip1,multi:!0,useFactory:()=>{const h=(0,v.f3M)(ln);return()=>{h.setUpLocationChangeListener()}}},{provide:_a,useValue:2}]).\u0275providers:[],"enabledBlocking"===d.initialNavigation?gi(2,[{provide:_a,useValue:0},{provide:v.ip1,multi:!0,deps:[v.zs3],useFactory:h=>{const l=h.get(Oe.V_,Promise.resolve());let y=!1;return()=>l.then(()=>new Promise(M=>{const H=h.get(ln),U=h.get(Wt);(function D(M){h.get(ln).events.pipe((0,we.h)(U=>U instanceof Gt||U instanceof fn||U instanceof Er),(0,pe.U)(U=>U instanceof Gt||U instanceof fn&&(0===U.code||1===U.code)&&null),(0,we.h)(U=>null!==U),(0,it.q)(1)).subscribe(()=>{M()})})(()=>{M(!0),y=!0}),H.afterPreactivation=()=>(M(!0),y||U.closed?(0,O.of)(void 0):U),H.initialNavigation()}))}}]).\u0275providers:[]]}const Ps=new v.OlP("")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,2039:(ze,fe,C)=>{"use strict";C.d(fe,{Wr:()=>Un,yO:()=>Ot});var v=C(6895),A=C(4650),O=C(9770),W=C(2843),Z=C(4968),Q=C(9646),oe=C(7272),te=C(7579),G=C(9751),ee=C(5032);const q=new G.y(ee.Z);var Pe=C(6451),Ce=C(4004),ce=C(9300),Oe=C(3900),pe=C(4033),Te=C(576),it=C(8421),vt=C(4482);const j={connector:()=>new te.x};function me(Qe,He=j){const{connector:Ue}=He;return(0,vt.e)((at,wt)=>{const Xt=Ue();(0,it.Xf)(Qe(function we(Qe){return new G.y(He=>Qe.subscribe(He))}(Xt))).subscribe(wt),wt.add(at.subscribe(Xt))})}var Se=C(5698),Ie=C(8505),ae=C(4986),se=C(5403),le=C(9718),Le=C(5577);function Ne(Qe,He){return He?Ue=>(0,oe.z)(He.pipe((0,Se.q)(1),function ye(){return(0,vt.e)((Qe,He)=>{Qe.subscribe((0,se.x)(He,ee.Z))})}()),Ue.pipe(Ne(Qe))):(0,Le.z)((Ue,at)=>Qe(Ue,at).pipe((0,Se.q)(1),(0,le.h)(Ue)))}var st=C(5963);
/**
     * @license Angular v14.2.12
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const gt="Service workers are disabled or not supported by this browser";class Bt{constructor(He){if(this.serviceWorker=He,He){const at=(0,Z.R)(He,"controllerchange").pipe((0,Ce.U)(()=>He.controller)),wt=(0,O.P)(()=>(0,Q.of)(He.controller)),Xt=(0,oe.z)(wt,at);this.worker=Xt.pipe((0,ce.h)(L=>!!L)),this.registration=this.worker.pipe((0,Oe.w)(()=>He.getRegistration()));const V=(0,Z.R)(He,"message").pipe((0,Ce.U)(L=>L.data)).pipe((0,ce.h)(L=>L&&L.type)).pipe(function Ee(Qe){return Qe?He=>me(Qe)(He):He=>function De(Qe,He){const Ue=(0,Te.m)(Qe)?Qe:()=>Qe;return(0,Te.m)(He)?me(He,{connector:Ue}):at=>new pe.c(at,Ue)}(new te.x)(He)}());V.connect(),this.events=V}else this.worker=this.events=this.registration=function $e(Qe){return(0,O.P)(()=>(0,W._)(new Error(Qe)))}(gt)}postMessage(He,Ue){return this.worker.pipe((0,Se.q)(1),(0,Ie.b)(at=>{at.postMessage({action:He,...Ue})})).toPromise().then(()=>{})}postMessageWithOperation(He,Ue,at){const wt=this.waitForOperationCompleted(at),Xt=this.postMessage(He,Ue);return Promise.all([Xt,wt]).then(([,J])=>J)}generateNonce(){return Math.round(1e7*Math.random())}eventsOfType(He){let Ue;return Ue="string"==typeof He?at=>at.type===He:at=>He.includes(at.type),this.events.pipe((0,ce.h)(Ue))}nextEventOfType(He){return this.eventsOfType(He).pipe((0,Se.q)(1))}waitForOperationCompleted(He){return this.eventsOfType("OPERATION_COMPLETED").pipe((0,ce.h)(Ue=>Ue.nonce===He),(0,Se.q)(1),(0,Ce.U)(Ue=>{if(void 0!==Ue.result)return Ue.result;throw new Error(Ue.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let mn=(()=>{class Qe{constructor(Ue){if(this.sw=Ue,this.subscriptionChanges=new te.x,!Ue.isEnabled)return this.messages=q,this.notificationClicks=q,void(this.subscription=q);this.messages=this.sw.eventsOfType("PUSH").pipe((0,Ce.U)(wt=>wt.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,Ce.U)(wt=>wt.data)),this.pushManager=this.sw.registration.pipe((0,Ce.U)(wt=>wt.pushManager));const at=this.pushManager.pipe((0,Oe.w)(wt=>wt.getSubscription()));this.subscription=(0,Pe.T)(at,this.subscriptionChanges)}get isEnabled(){return this.sw.isEnabled}requestSubscription(Ue){if(!this.sw.isEnabled)return Promise.reject(new Error(gt));const at={userVisibleOnly:!0};let wt=this.decodeBase64(Ue.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),Xt=new Uint8Array(new ArrayBuffer(wt.length));for(let J=0;J<wt.length;J++)Xt[J]=wt.charCodeAt(J);return at.applicationServerKey=Xt,this.pushManager.pipe((0,Oe.w)(J=>J.subscribe(at)),(0,Se.q)(1)).toPromise().then(J=>(this.subscriptionChanges.next(J),J))}unsubscribe(){return this.sw.isEnabled?this.subscription.pipe((0,Se.q)(1),(0,Oe.w)(at=>{if(null===at)throw new Error("Not subscribed to push notifications.");return at.unsubscribe().then(wt=>{if(!wt)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})})).toPromise():Promise.reject(new Error(gt))}decodeBase64(Ue){return atob(Ue)}}return Qe.\u0275fac=function(Ue){return new(Ue||Qe)(A.LFG(Bt))},Qe.\u0275prov=A.Yz7({token:Qe,factory:Qe.\u0275fac}),Qe})(),Ot=(()=>{class Qe{constructor(Ue){if(this.sw=Ue,!Ue.isEnabled)return this.versionUpdates=q,this.available=q,this.activated=q,void(this.unrecoverable=q);this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.available=this.versionUpdates.pipe((0,ce.h)(at=>"VERSION_READY"===at.type),(0,Ce.U)(at=>({type:"UPDATE_AVAILABLE",current:at.currentVersion,available:at.latestVersion}))),this.activated=this.sw.eventsOfType("UPDATE_ACTIVATED"),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}get isEnabled(){return this.sw.isEnabled}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(gt));const Ue=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:Ue},Ue)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(gt));const Ue=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:Ue},Ue)}}return Qe.\u0275fac=function(Ue){return new(Ue||Qe)(A.LFG(Bt))},Qe.\u0275prov=A.Yz7({token:Qe,factory:Qe.\u0275fac}),Qe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class yt{}const un=new A.OlP("NGSW_REGISTER_SCRIPT");function Ye(Qe,He,Ue,at){return()=>{if(!(0,v.NF)(at)||!("serviceWorker"in navigator)||!1===Ue.enabled)return;let wt;if(navigator.serviceWorker.addEventListener("controllerchange",()=>{null!==navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})}),"function"==typeof Ue.registrationStrategy)wt=Ue.registrationStrategy();else{const[J,...I]=(Ue.registrationStrategy||"registerWhenStable:30000").split(":");switch(J){case"registerImmediately":wt=(0,Q.of)(null);break;case"registerWithDelay":wt=kt(+I[0]||0);break;case"registerWhenStable":wt=I[0]?(0,Pe.T)(Ln(Qe),kt(+I[0])):Ln(Qe);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${Ue.registrationStrategy}`)}}Qe.get(A.R0b).runOutsideAngular(()=>wt.pipe((0,Se.q)(1)).subscribe(()=>navigator.serviceWorker.register(He,{scope:Ue.scope}).catch(J=>console.error("Service worker registration failed with:",J))))}}function kt(Qe){return(0,Q.of)(null).pipe(function bt(Qe,He=ae.z){const Ue=(0,st.H)(Qe,He);return Ne(()=>Ue)}(Qe))}function Ln(Qe){return Qe.get(A.z2F).isStable.pipe((0,ce.h)(Ue=>Ue))}function on(Qe,He){return new Bt((0,v.NF)(He)&&!1!==Qe.enabled?navigator.serviceWorker:void 0)}let Un=(()=>{class Qe{static register(Ue,at={}){return{ngModule:Qe,providers:[{provide:un,useValue:Ue},{provide:yt,useValue:at},{provide:Bt,useFactory:on,deps:[yt,A.Lbi]},{provide:A.ip1,useFactory:Ye,deps:[A.zs3,un,yt,A.Lbi],multi:!0}]}}}return Qe.\u0275fac=function(Ue){return new(Ue||Qe)},Qe.\u0275mod=A.oAB({type:Qe}),Qe.\u0275inj=A.cJS({providers:[mn,Ot]}),Qe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}}]);