"use strict";(()=>{function Qe(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Zr(t,r,e){return r&&Qe(t.prototype,r),e&&Qe(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var tr="(prefers-reduced-motion: reduce)",Rt=1,jr=2,Dt=3,Vt=4,Xt=5,ie=6,ue=7,Jr={CREATED:Rt,MOUNTED:jr,IDLE:Dt,MOVING:Vt,SCROLLING:Xt,DRAGGING:ie,DESTROYED:ue};function dt(t){t.length=0}function pt(t,r,e){return Array.prototype.slice.call(t,r,e)}function z(t){return t.bind.apply(t,[null].concat(pt(arguments,1)))}var hr=setTimeout,Ie=function(){};function er(t){return requestAnimationFrame(t)}function ve(t,r){return typeof r===t}function Wt(t){return!Ve(t)&&ve("object",t)}var Pe=Array.isArray,gr=z(ve,"function"),Et=z(ve,"string"),qt=z(ve,"undefined");function Ve(t){return t===null}function Er(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Zt(t){return Pe(t)?t:[t]}function rt(t,r){Zt(t).forEach(r)}function xe(t,r){return t.indexOf(r)>-1}function ae(t,r){return t.push.apply(t,Zt(r)),t}function ft(t,r,e){t&&rt(r,function(n){n&&t.classList[e?"add":"remove"](n)})}function st(t,r){ft(t,Et(r)?r.split(" "):r,!0)}function jt(t,r){rt(r,t.appendChild.bind(t))}function Me(t,r){rt(t,function(e){var n=(r||e).parentNode;n&&n.insertBefore(e,r)})}function zt(t,r){return Er(t)&&(t.msMatchesSelector||t.matches).call(t,r)}function mr(t,r){var e=t?pt(t.children):[];return r?e.filter(function(n){return zt(n,r)}):e}function Jt(t,r){return r?mr(t,r)[0]:t.firstElementChild}var Ut=Object.keys;function Tt(t,r,e){return t&&(e?Ut(t).reverse():Ut(t)).forEach(function(n){n!=="__proto__"&&r(t[n],n)}),t}function Bt(t){return pt(arguments,1).forEach(function(r){Tt(r,function(e,n){t[n]=r[n]})}),t}function gt(t){return pt(arguments,1).forEach(function(r){Tt(r,function(e,n){Pe(e)?t[n]=e.slice():Wt(e)?t[n]=gt({},Wt(t[n])?t[n]:{},e):t[n]=e})}),t}function rr(t,r){rt(r||Ut(t),function(e){delete t[e]})}function ot(t,r){rt(t,function(e){rt(r,function(n){e&&e.removeAttribute(n)})})}function M(t,r,e){Wt(r)?Tt(r,function(n,a){M(t,a,n)}):rt(t,function(n){Ve(e)||e===""?ot(n,r):n.setAttribute(r,String(e))})}function wt(t,r,e){var n=document.createElement(t);return r&&(Et(r)?st(n,r):M(n,r)),e&&jt(e,n),n}function nt(t,r,e){if(qt(e))return getComputedStyle(t)[r];Ve(e)||(t.style[r]=""+e)}function Ht(t,r){nt(t,"display",r)}function yr(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function it(t,r){return t.getAttribute(r)}function nr(t,r){return t&&t.classList.contains(r)}function tt(t){return t.getBoundingClientRect()}function bt(t){rt(t,function(r){r&&r.parentNode&&r.parentNode.removeChild(r)})}function pr(t){return Jt(new DOMParser().parseFromString(t,"text/html").body)}function ct(t,r){t.preventDefault(),r&&(t.stopPropagation(),t.stopImmediatePropagation())}function _r(t,r){return t&&t.querySelector(r)}function ke(t,r){return r?pt(t.querySelectorAll(r)):[]}function lt(t,r){ft(t,r,!1)}function Oe(t){return t.timeStamp}function At(t){return Et(t)?t:t?t+"px":""}var Qt="splide",Fe="data-"+Qt;function Ft(t,r){if(!t)throw new Error("["+Qt+"] "+(r||""))}var mt=Math.min,ce=Math.max,fe=Math.floor,Yt=Math.ceil,J=Math.abs;function Sr(t,r,e){return J(t-r)<e}function se(t,r,e,n){var a=mt(r,e),f=ce(r,e);return n?a<t&&t<f:a<=t&&t<=f}function It(t,r,e){var n=mt(r,e),a=ce(r,e);return mt(ce(n,t),a)}function Re(t){return+(t>0)-+(t<0)}function we(t,r){return rt(r,function(e){t=t.replace("%s",""+e)}),t}function Ge(t){return t<10?"0"+t:""+t}var ir={};function Qr(t){return""+t+Ge(ir[t]=(ir[t]||0)+1)}function Ar(){var t=[];function r(i,u,o,c){a(i,u,function(s,g,d){var h="addEventListener"in s,l=h?s.removeEventListener.bind(s,g,o,c):s.removeListener.bind(s,o);h?s.addEventListener(g,o,c):s.addListener(o),t.push([s,g,d,o,l])})}function e(i,u,o){a(i,u,function(c,s,g){t=t.filter(function(d){return d[0]===c&&d[1]===s&&d[2]===g&&(!o||d[3]===o)?(d[4](),!1):!0})})}function n(i,u,o){var c,s=!0;return typeof CustomEvent=="function"?c=new CustomEvent(u,{bubbles:s,detail:o}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(u,s,!1,o)),i.dispatchEvent(c),c}function a(i,u,o){rt(i,function(c){c&&rt(u,function(s){s.split(" ").forEach(function(g){var d=g.split(".");o(c,d[0],d[1])})})})}function f(){t.forEach(function(i){i[4]()}),dt(t)}return{bind:r,unbind:e,dispatch:n,destroy:f}}var Ct="mounted",ar="ready",yt="move",te="moved",Tr="click",tn="active",en="inactive",rn="visible",nn="hidden",K="refresh",Q="updated",$t="resize",We="resized",an="drag",sn="dragging",on="dragged",ze="scroll",xt="scrolled",un="overflow",br="destroy",cn="arrows:mounted",fn="arrows:updated",ln="pagination:mounted",vn="pagination:updated",Lr="navigation:mounted",Cr="autoplay:play",dn="autoplay:playing",Ir="autoplay:pause",Or="lazyload:loaded",Rr="sk",wr="sh",le="ei";function H(t){var r=t?t.event.bus:document.createDocumentFragment(),e=Ar();function n(f,i){e.bind(r,Zt(f).join(" "),function(u){i.apply(i,Pe(u.detail)?u.detail:[])})}function a(f){e.dispatch(r,f,pt(arguments,1))}return t&&t.event.on(br,e.destroy),Bt(e,{bus:r,on:n,off:z(e.unbind,r),emit:a})}function de(t,r,e,n){var a=Date.now,f,i=0,u,o=!0,c=0;function s(){if(!o){if(i=t?mt((a()-f)/t,1):1,e&&e(i),i>=1&&(r(),f=a(),n&&++c>=n))return d();u=er(s)}}function g(p){p||l(),f=a()-(p?i*t:0),o=!1,u=er(s)}function d(){o=!0}function h(){f=a(),i=0,e&&e(i)}function l(){u&&cancelAnimationFrame(u),i=0,u=0,o=!0}function v(p){t=p}function y(){return o}return{start:g,rewind:h,pause:d,cancel:l,set:v,isPaused:y}}function hn(t){var r=t;function e(a){r=a}function n(a){return xe(Zt(a),r)}return{set:e,is:n}}function gn(t,r){var e=de(r||0,t,null,1);return function(){e.isPaused()&&e.start()}}function En(t,r,e){var n=t.state,a=e.breakpoints||{},f=e.reducedMotion||{},i=Ar(),u=[];function o(){var l=e.mediaQuery==="min";Ut(a).sort(function(v,y){return l?+v-+y:+y-+v}).forEach(function(v){s(a[v],"("+(l?"min":"max")+"-width:"+v+"px)")}),s(f,tr),g()}function c(l){l&&i.destroy()}function s(l,v){var y=matchMedia(v);i.bind(y,"change",g),u.push([l,y])}function g(){var l=n.is(ue),v=e.direction,y=u.reduce(function(p,m){return gt(p,m[1].matches?m[0]:{})},{});rr(e),h(y),e.destroy?t.destroy(e.destroy==="completely"):l?(c(!0),t.mount()):v!==e.direction&&t.refresh()}function d(l){matchMedia(tr).matches&&(l?gt(e,f):rr(e,Ut(f)))}function h(l,v,y){gt(e,l),v&&gt(Object.getPrototypeOf(e),l),(y||!n.is(Rt))&&t.emit(Q,e)}return{setup:o,destroy:c,reduce:d,set:h}}var he="Arrow",ge=he+"Left",Ee=he+"Right",Nr=he+"Up",Dr=he+"Down";var sr="rtl",me="ttb",Te={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Nr,Ee],ArrowRight:[Dr,ge]};function mn(t,r,e){function n(f,i,u){u=u||e.direction;var o=u===sr&&!i?1:u===me?0:-1;return Te[f]&&Te[f][o]||f.replace(/width|left|right/i,function(c,s){var g=Te[c.toLowerCase()][o]||c;return s>0?g.charAt(0).toUpperCase()+g.slice(1):g})}function a(f){return f*(e.direction===sr?1:-1)}return{resolve:n,orient:a}}var vt="role",Nt="tabindex",yn="disabled",at="aria-",ee=at+"controls",Pr=at+"current",or=at+"selected",et=at+"label",Ue=at+"labelledby",Vr=at+"hidden",Be=at+"orientation",Kt=at+"roledescription",ur=at+"live",cr=at+"busy",fr=at+"atomic",He=[vt,Nt,yn,ee,Pr,et,Ue,Vr,Be,Kt],ut=Qt+"__",_t="is-",be=Qt,lr=ut+"track",pn=ut+"list",ye=ut+"slide",xr=ye+"--clone",_n=ye+"__container",Ye=ut+"arrows",pe=ut+"arrow",Mr=pe+"--prev",kr=pe+"--next",_e=ut+"pagination",Fr=_e+"__page",Sn=ut+"progress",An=Sn+"__bar",$e=ut+"toggle",Oi=$e+"__play",Ri=$e+"__pause",Tn=ut+"spinner",bn=ut+"sr",Ln=_t+"initialized",Lt=_t+"active",Gr=_t+"prev",Wr=_t+"next",Ne=_t+"visible",De=_t+"loading",zr=_t+"focus-in",Ur=_t+"overflow",Cn=[Lt,Ne,Gr,Wr,De,zr,Ur],In={slide:ye,clone:xr,arrows:Ye,arrow:pe,prev:Mr,next:kr,pagination:_e,page:Fr,spinner:Tn};function On(t,r){if(gr(t.closest))return t.closest(r);for(var e=t;e&&e.nodeType===1&&!zt(e,r);)e=e.parentElement;return e}var Rn=5,vr=200,Br="touchstart mousedown",Le="touchmove mousemove",Ce="touchend touchcancel mouseup click";function wn(t,r,e){var n=H(t),a=n.on,f=n.bind,i=t.root,u=e.i18n,o={},c=[],s=[],g=[],d,h,l;function v(){E(),D(),m()}function y(){a(K,p),a(K,v),a(Q,m),f(document,Br+" keydown",function(S){l=S.type==="keydown"},{capture:!0}),f(i,"focusin",function(){ft(i,zr,!!l)})}function p(S){var O=He.concat("style");dt(c),lt(i,s),lt(d,g),ot([d,h],O),ot(i,S?O:["style",Kt])}function m(){lt(i,s),lt(d,g),s=V(be),g=V(lr),st(i,s),st(d,g),M(i,et,e.label),M(i,Ue,e.labelledby)}function E(){d=I("."+lr),h=Jt(d,"."+pn),Ft(d&&h,"A track/list element is missing."),ae(c,mr(h,"."+ye+":not(."+xr+")")),Tt({arrows:Ye,pagination:_e,prev:Mr,next:kr,bar:An,toggle:$e},function(S,O){o[O]=I("."+S)}),Bt(o,{root:i,track:d,list:h,slides:c})}function D(){var S=i.id||Qr(Qt),O=e.role;i.id=S,d.id=d.id||S+"-track",h.id=h.id||S+"-list",!it(i,vt)&&i.tagName!=="SECTION"&&O&&M(i,vt,O),M(i,Kt,u.carousel),M(h,vt,"presentation")}function I(S){var O=_r(i,S);return O&&On(O,"."+be)===i?O:void 0}function V(S){return[S+"--"+e.type,S+"--"+e.direction,e.drag&&S+"--draggable",e.isNavigation&&S+"--nav",S===be&&Lt]}return Bt(o,{setup:v,mount:y,destroy:p})}var Pt="slide",Mt="loop",re="fade";function Nn(t,r,e,n){var a=H(t),f=a.on,i=a.emit,u=a.bind,o=t.Components,c=t.root,s=t.options,g=s.isNavigation,d=s.updateOnMove,h=s.i18n,l=s.pagination,v=s.slideFocus,y=o.Direction.resolve,p=it(n,"style"),m=it(n,et),E=e>-1,D=Jt(n,"."+_n),I;function V(){E||(n.id=c.id+"-slide"+Ge(r+1),M(n,vt,l?"tabpanel":"group"),M(n,Kt,h.slide),M(n,et,m||we(h.slideLabel,[r+1,t.length]))),S()}function S(){u(n,"click",z(i,Tr,P)),u(n,"keydown",z(i,Rr,P)),f([te,wr,xt],T),f(Lr,F),d&&f(yt,N)}function O(){I=!0,a.destroy(),lt(n,Cn),ot(n,He),M(n,"style",p),M(n,et,m||"")}function F(){var w=t.splides.map(function(A){var R=A.splide.Components.Slides.getAt(r);return R?R.slide.id:""}).join(" ");M(n,et,we(h.slideX,(E?e:r)+1)),M(n,ee,w),M(n,vt,v?"button":""),v&&ot(n,Kt)}function N(){I||T()}function T(){if(!I){var w=t.index;b(),L(),ft(n,Gr,r===w-1),ft(n,Wr,r===w+1)}}function b(){var w=k();w!==nr(n,Lt)&&(ft(n,Lt,w),M(n,Pr,g&&w||""),i(w?tn:en,P))}function L(){var w=Y(),A=!w&&(!k()||E);if(t.state.is([Vt,Xt])||M(n,Vr,A||""),M(ke(n,s.focusableNodes||""),Nt,A?-1:""),v&&M(n,Nt,A?-1:0),w!==nr(n,Ne)&&(ft(n,Ne,w),i(w?rn:nn,P)),!w&&document.activeElement===n){var R=o.Slides.getAt(t.index);R&&yr(R.slide)}}function x(w,A,R){nt(R&&D||n,w,A)}function k(){var w=t.index;return w===r||s.cloneStatus&&w===e}function Y(){if(t.is(re))return k();var w=tt(o.Elements.track),A=tt(n),R=y("left",!0),G=y("right",!0);return fe(w[R])<=Yt(A[R])&&fe(A[G])<=Yt(w[G])}function B(w,A){var R=J(w-r);return!E&&(s.rewind||t.is(Mt))&&(R=mt(R,t.length-R)),R<=A}var P={index:r,slideIndex:e,slide:n,container:D,isClone:E,mount:V,destroy:O,update:T,style:x,isWithin:B};return P}function Dn(t,r,e){var n=H(t),a=n.on,f=n.emit,i=n.bind,u=r.Elements,o=u.slides,c=u.list,s=[];function g(){d(),a(K,h),a(K,d)}function d(){o.forEach(function(T,b){v(T,b,-1)})}function h(){I(function(T){T.destroy()}),dt(s)}function l(){I(function(T){T.update()})}function v(T,b,L){var x=Nn(t,b,L,T);x.mount(),s.push(x),s.sort(function(k,Y){return k.index-Y.index})}function y(T){return T?V(function(b){return!b.isClone}):s}function p(T){var b=r.Controller,L=b.toIndex(T),x=b.hasFocus()?1:e.perPage;return V(function(k){return se(k.index,L,L+x-1)})}function m(T){return V(T)[0]}function E(T,b){rt(T,function(L){if(Et(L)&&(L=pr(L)),Er(L)){var x=o[b];x?Me(L,x):jt(c,L),st(L,e.classes.slide),O(L,z(f,$t))}}),f(K)}function D(T){bt(V(T).map(function(b){return b.slide})),f(K)}function I(T,b){y(b).forEach(T)}function V(T){return s.filter(gr(T)?T:function(b){return Et(T)?zt(b.slide,T):xe(Zt(T),b.index)})}function S(T,b,L){I(function(x){x.style(T,b,L)})}function O(T,b){var L=ke(T,"img"),x=L.length;x?L.forEach(function(k){i(k,"load error",function(){--x||b()})}):b()}function F(T){return T?o.length:s.length}function N(){return s.length>e.perPage}return{mount:g,destroy:h,update:l,register:v,get:y,getIn:p,getAt:m,add:E,remove:D,forEach:I,filter:V,style:S,getLength:F,isEnough:N}}function Pn(t,r,e){var n=H(t),a=n.on,f=n.bind,i=n.emit,u=r.Slides,o=r.Direction.resolve,c=r.Elements,s=c.root,g=c.track,d=c.list,h=u.getAt,l=u.style,v,y,p;function m(){E(),f(window,"resize load",gn(z(i,$t))),a([Q,K],E),a($t,D)}function E(){v=e.direction===me,nt(s,"maxWidth",At(e.width)),nt(g,o("paddingLeft"),I(!1)),nt(g,o("paddingRight"),I(!0)),D(!0)}function D(P){var w=tt(s);(P||y.width!==w.width||y.height!==w.height)&&(nt(g,"height",V()),l(o("marginRight"),At(e.gap)),l("width",O()),l("height",F(),!0),y=w,i(We),p!==(p=B())&&(ft(s,Ur,p),i(un,p)))}function I(P){var w=e.padding,A=o(P?"right":"left");return w&&At(w[A]||(Wt(w)?0:w))||"0px"}function V(){var P="";return v&&(P=S(),Ft(P,"height or heightRatio is missing."),P="calc("+P+" - "+I(!1)+" - "+I(!0)+")"),P}function S(){return At(e.height||tt(d).width*e.heightRatio)}function O(){return e.autoWidth?null:At(e.fixedWidth)||(v?"":N())}function F(){return At(e.fixedHeight)||(v?e.autoHeight?null:N():S())}function N(){var P=At(e.gap);return"calc((100%"+(P&&" + "+P)+")/"+(e.perPage||1)+(P&&" - "+P)+")"}function T(){return tt(d)[o("width")]}function b(P,w){var A=h(P||0);return A?tt(A.slide)[o("width")]+(w?0:k()):0}function L(P,w){var A=h(P);if(A){var R=tt(A.slide)[o("right")],G=tt(d)[o("left")];return J(R-G)+(w?0:k())}return 0}function x(P){return L(t.length-1)-L(0)+b(0,P)}function k(){var P=h(0);return P&&parseFloat(nt(P.slide,o("marginRight")))||0}function Y(P){return parseFloat(nt(g,o("padding"+(P?"Right":"Left"))))||0}function B(){return t.is(re)||x(!0)>T()}return{mount:m,resize:D,listSize:T,slideSize:b,sliderSize:x,totalSize:L,getPadding:Y,isOverflow:B}}var Vn=2;function xn(t,r,e){var n=H(t),a=n.on,f=r.Elements,i=r.Slides,u=r.Direction.resolve,o=[],c;function s(){a(K,g),a([Q,$t],h),(c=y())&&(l(c),r.Layout.resize(!0))}function g(){d(),s()}function d(){bt(o),dt(o),n.destroy()}function h(){var p=y();c!==p&&(c<p||!p)&&n.emit(K)}function l(p){var m=i.get().slice(),E=m.length;if(E){for(;m.length<p;)ae(m,m);ae(m.slice(-p),m.slice(0,p)).forEach(function(D,I){var V=I<p,S=v(D.slide,I);V?Me(S,m[0].slide):jt(f.list,S),ae(o,S),i.register(S,I-p+(V?0:E),D.index)})}}function v(p,m){var E=p.cloneNode(!0);return st(E,e.classes.clone),E.id=t.root.id+"-clone"+Ge(m+1),E}function y(){var p=e.clones;if(!t.is(Mt))p=0;else if(qt(p)){var m=e[u("fixedWidth")]&&r.Layout.slideSize(0),E=m&&Yt(tt(f.track)[u("width")]/m);p=E||e[u("autoWidth")]&&t.length||e.perPage*Vn}return p}return{mount:s,destroy:d}}function Mn(t,r,e){var n=H(t),a=n.on,f=n.emit,i=t.state.set,u=r.Layout,o=u.slideSize,c=u.getPadding,s=u.totalSize,g=u.listSize,d=u.sliderSize,h=r.Direction,l=h.resolve,v=h.orient,y=r.Elements,p=y.list,m=y.track,E;function D(){E=r.Transition,a([Ct,We,Q,K],I)}function I(){r.Controller.isBusy()||(r.Scroll.cancel(),S(t.index),r.Slides.update())}function V(A,R,G,q){A!==R&&P(A>G)&&(T(),O(N(x(),A>G),!0)),i(Vt),f(yt,R,G,A),E.start(R,function(){i(Dt),f(te,R,G,A),q&&q()})}function S(A){O(L(A,!0))}function O(A,R){if(!t.is(re)){var G=R?A:F(A);nt(p,"transform","translate"+l("X")+"("+G+"px)"),A!==G&&f(wr)}}function F(A){if(t.is(Mt)){var R=b(A),G=R>r.Controller.getEnd(),q=R<0;(q||G)&&(A=N(A,G))}return A}function N(A,R){var G=A-B(R),q=d();return A-=v(q*(Yt(J(G)/q)||1))*(R?1:-1),A}function T(){O(x(),!0),E.cancel()}function b(A){for(var R=r.Slides.get(),G=0,q=1/0,X=0;X<R.length;X++){var ht=R[X].index,_=J(L(ht,!0)-A);if(_<=q)q=_,G=ht;else break}return G}function L(A,R){var G=v(s(A-1)-Y(A));return R?k(G):G}function x(){var A=l("left");return tt(p)[A]-tt(m)[A]+v(c(!1))}function k(A){return e.trimSpace&&t.is(Pt)&&(A=It(A,0,v(d(!0)-g()))),A}function Y(A){var R=e.focus;return R==="center"?(g()-o(A,!0))/2:+R*o(A)||0}function B(A){return L(A?r.Controller.getEnd():0,!!e.trimSpace)}function P(A){var R=v(N(x(),A));return A?R>=0:R<=p[l("scrollWidth")]-tt(m)[l("width")]}function w(A,R){R=qt(R)?x():R;var G=A!==!0&&v(R)<v(B(!1)),q=A!==!1&&v(R)>v(B(!0));return G||q}return{mount:D,move:V,jump:S,translate:O,shift:N,cancel:T,toIndex:b,toPosition:L,getPosition:x,getLimit:B,exceededLimit:w,reposition:I}}function kn(t,r,e){var n=H(t),a=n.on,f=n.emit,i=r.Move,u=i.getPosition,o=i.getLimit,c=i.toPosition,s=r.Slides,g=s.isEnough,d=s.getLength,h=e.omitEnd,l=t.is(Mt),v=t.is(Pt),y=z(x,!1),p=z(x,!0),m=e.start||0,E,D=m,I,V,S;function O(){F(),a([Q,K,le],F),a(We,N)}function F(){I=d(!0),V=e.perMove,S=e.perPage,E=P();var _=It(m,0,h?E:I-1);_!==m&&(m=_,i.reposition())}function N(){E!==P()&&f(le)}function T(_,W,j){if(!ht()){var $=L(_),Z=B($);Z>-1&&(W||Z!==m)&&(G(Z),i.move($,Z,D,j))}}function b(_,W,j,$){r.Scroll.scroll(_,W,j,function(){var Z=B(i.toIndex(u()));G(h?mt(Z,E):Z),$&&$()})}function L(_){var W=m;if(Et(_)){var j=_.match(/([+\-<>])(\d+)?/)||[],$=j[1],Z=j[2];$==="+"||$==="-"?W=k(m+ +(""+$+(+Z||1)),m):$===">"?W=Z?w(+Z):y(!0):$==="<"&&(W=p(!0))}else W=l?_:It(_,0,E);return W}function x(_,W){var j=V||(X()?1:S),$=k(m+j*(_?-1:1),m,!(V||X()));return $===-1&&v&&!Sr(u(),o(!_),1)?_?0:E:W?$:B($)}function k(_,W,j){if(g()||X()){var $=Y(_);$!==_&&(W=_,_=$,j=!1),_<0||_>E?!V&&(se(0,_,W,!0)||se(E,W,_,!0))?_=w(A(_)):l?_=j?_<0?-(I%S||S):I:_:e.rewind?_=_<0?E:0:_=-1:j&&_!==W&&(_=w(A(W)+(_<W?-1:1)))}else _=-1;return _}function Y(_){if(v&&e.trimSpace==="move"&&_!==m)for(var W=u();W===c(_,!0)&&se(_,0,t.length-1,!e.rewind);)_<m?--_:++_;return _}function B(_){return l?(_+I)%I||0:_}function P(){for(var _=I-(X()||l&&V?1:S);h&&_-- >0;)if(c(I-1,!0)!==c(_,!0)){_++;break}return It(_,0,I-1)}function w(_){return It(X()?_:S*_,0,E)}function A(_){return X()?mt(_,E):fe((_>=E?I-1:_)/S)}function R(_){var W=i.toIndex(_);return v?It(W,0,E):W}function G(_){_!==m&&(D=m,m=_)}function q(_){return _?D:m}function X(){return!qt(e.focus)||e.isNavigation}function ht(){return t.state.is([Vt,Xt])&&!!e.waitForTransition}return{mount:O,go:T,scroll:b,getNext:y,getPrev:p,getAdjacent:x,getEnd:P,setIndex:G,getIndex:q,toIndex:w,toPage:A,toDest:R,hasFocus:X,isBusy:ht}}var Fn="http://www.w3.org/2000/svg",Gn="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ne=40;function Wn(t,r,e){var n=H(t),a=n.on,f=n.bind,i=n.emit,u=e.classes,o=e.i18n,c=r.Elements,s=r.Controller,g=c.arrows,d=c.track,h=g,l=c.prev,v=c.next,y,p,m={};function E(){I(),a(Q,D)}function D(){V(),E()}function I(){var b=e.arrows;b&&!(l&&v)&&F(),l&&v&&(Bt(m,{prev:l,next:v}),Ht(h,b?"":"none"),st(h,p=Ye+"--"+e.direction),b&&(S(),T(),M([l,v],ee,d.id),i(cn,l,v)))}function V(){n.destroy(),lt(h,p),y?(bt(g?[l,v]:h),l=v=null):ot([l,v],He)}function S(){a([Ct,te,K,xt,le],T),f(v,"click",z(O,">")),f(l,"click",z(O,"<"))}function O(b){s.go(b,!0)}function F(){h=g||wt("div",u.arrows),l=N(!0),v=N(!1),y=!0,jt(h,[l,v]),!g&&Me(h,d)}function N(b){var L='<button class="'+u.arrow+" "+(b?u.prev:u.next)+'" type="button"><svg xmlns="'+Fn+'" viewBox="0 0 '+ne+" "+ne+'" width="'+ne+'" height="'+ne+'" focusable="false"><path d="'+(e.arrowPath||Gn)+'" />';return pr(L)}function T(){if(l&&v){var b=t.index,L=s.getPrev(),x=s.getNext(),k=L>-1&&b<L?o.last:o.prev,Y=x>-1&&b>x?o.first:o.next;l.disabled=L<0,v.disabled=x<0,M(l,et,k),M(v,et,Y),i(fn,l,v,L,x)}}return{arrows:m,mount:E,destroy:V,update:T}}var zn=Fe+"-interval";function Un(t,r,e){var n=H(t),a=n.on,f=n.bind,i=n.emit,u=de(e.interval,t.go.bind(t,">"),S),o=u.isPaused,c=r.Elements,s=r.Elements,g=s.root,d=s.toggle,h=e.autoplay,l,v,y=h==="pause";function p(){h&&(m(),d&&M(d,ee,c.track.id),y||E(),V())}function m(){e.pauseOnHover&&f(g,"mouseenter mouseleave",function(F){l=F.type==="mouseenter",I()}),e.pauseOnFocus&&f(g,"focusin focusout",function(F){v=F.type==="focusin",I()}),d&&f(d,"click",function(){y?E():D(!0)}),a([yt,ze,K],u.rewind),a(yt,O)}function E(){o()&&r.Slides.isEnough()&&(u.start(!e.resetProgress),v=l=y=!1,V(),i(Cr))}function D(F){F===void 0&&(F=!0),y=!!F,V(),o()||(u.pause(),i(Ir))}function I(){y||(l||v?D(!1):E())}function V(){d&&(ft(d,Lt,!y),M(d,et,e.i18n[y?"play":"pause"]))}function S(F){var N=c.bar;N&&nt(N,"width",F*100+"%"),i(dn,F)}function O(F){var N=r.Slides.getAt(F);u.set(N&&+it(N.slide,zn)||e.interval)}return{mount:p,destroy:u.cancel,play:E,pause:D,isPaused:o}}function Bn(t,r,e){var n=H(t),a=n.on;function f(){e.cover&&(a(Or,z(u,!0)),a([Ct,Q,K],z(i,!0)))}function i(o){r.Slides.forEach(function(c){var s=Jt(c.container||c.slide,"img");s&&s.src&&u(o,s,c)})}function u(o,c,s){s.style("background",o?'center/cover no-repeat url("'+c.src+'")':"",!0),Ht(c,o?"none":"")}return{mount:f,destroy:z(i,!1)}}var Hn=10,Yn=600,$n=.6,Kn=1.5,Xn=800;function qn(t,r,e){var n=H(t),a=n.on,f=n.emit,i=t.state.set,u=r.Move,o=u.getPosition,c=u.getLimit,s=u.exceededLimit,g=u.translate,d=t.is(Pt),h,l,v=1;function y(){a(yt,D),a([Q,K],I)}function p(S,O,F,N,T){var b=o();if(D(),F&&(!d||!s())){var L=r.Layout.sliderSize(),x=Re(S)*L*fe(J(S)/L)||0;S=u.toPosition(r.Controller.toDest(S%L))+x}var k=Sr(b,S,1);v=1,O=k?0:O||ce(J(S-b)/Kn,Xn),l=N,h=de(O,m,z(E,b,S,T),1),i(Xt),f(ze),h.start()}function m(){i(Dt),l&&l(),f(xt)}function E(S,O,F,N){var T=o(),b=S+(O-S)*V(N),L=(b-T)*v;g(T+L),d&&!F&&s()&&(v*=$n,J(L)<Hn&&p(c(s(!0)),Yn,!1,l,!0))}function D(){h&&h.cancel()}function I(){h&&!h.isPaused()&&(D(),m())}function V(S){var O=e.easingFunc;return O?O(S):1-Math.pow(1-S,4)}return{mount:y,destroy:D,scroll:p,cancel:I}}var Ot={passive:!1,capture:!0};function Zn(t,r,e){var n=H(t),a=n.on,f=n.emit,i=n.bind,u=n.unbind,o=t.state,c=r.Move,s=r.Scroll,g=r.Controller,d=r.Elements.track,h=r.Media.reduce,l=r.Direction,v=l.resolve,y=l.orient,p=c.getPosition,m=c.exceededLimit,E,D,I,V,S,O=!1,F,N,T;function b(){i(d,Le,Ie,Ot),i(d,Ce,Ie,Ot),i(d,Br,x,Ot),i(d,"click",B,{capture:!0}),i(d,"dragstart",ct),a([Ct,Q],L)}function L(){var C=e.drag;Je(!C),V=C==="free"}function x(C){if(F=!1,!N){var U=Z(C);$(C.target)&&(U||!C.button)&&(g.isBusy()?ct(C,!0):(T=U?d:window,S=o.is([Vt,Xt]),I=null,i(T,Le,k,Ot),i(T,Ce,Y,Ot),c.cancel(),s.cancel(),P(C)))}}function k(C){if(o.is(ie)||(o.set(ie),f(an)),C.cancelable)if(S){c.translate(E+j(X(C)));var U=ht(C)>vr,St=O!==(O=m());(U||St)&&P(C),F=!0,f(sn),ct(C)}else R(C)&&(S=A(C),ct(C))}function Y(C){o.is(ie)&&(o.set(Dt),f(on)),S&&(w(C),ct(C)),u(T,Le,k),u(T,Ce,Y),S=!1}function B(C){!N&&F&&ct(C,!0)}function P(C){I=D,D=C,E=p()}function w(C){var U=G(C),St=q(U),kt=e.rewind&&e.rewindByDrag;h(!1),V?g.scroll(St,0,e.snap):t.is(re)?g.go(y(Re(U))<0?kt?"<":"-":kt?">":"+"):t.is(Pt)&&O&&kt?g.go(m(!0)?">":"<"):g.go(g.toDest(St),!0),h(!0)}function A(C){var U=e.dragMinThreshold,St=Wt(U),kt=St&&U.mouse||0,qr=(St?U.touch:+U)||10;return J(X(C))>(Z(C)?qr:kt)}function R(C){return J(X(C))>J(X(C,!0))}function G(C){if(t.is(Mt)||!O){var U=ht(C);if(U&&U<vr)return X(C)/U}return 0}function q(C){return p()+Re(C)*mt(J(C)*(e.flickPower||600),V?1/0:r.Layout.listSize()*(e.flickMaxPages||1))}function X(C,U){return W(C,U)-W(_(C),U)}function ht(C){return Oe(C)-Oe(_(C))}function _(C){return D===C&&I||D}function W(C,U){return(Z(C)?C.changedTouches[0]:C)["page"+v(U?"Y":"X")]}function j(C){return C/(O&&t.is(Pt)?Rn:1)}function $(C){var U=e.noDrag;return!zt(C,"."+Fr+", ."+pe)&&(!U||!zt(C,U))}function Z(C){return typeof TouchEvent!="undefined"&&C instanceof TouchEvent}function Xr(){return S}function Je(C){N=C}return{mount:b,disable:Je,isDragging:Xr}}var jn={Spacebar:" ",Right:Ee,Left:ge,Up:Nr,Down:Dr};function Ke(t){return t=Et(t)?t:t.key,jn[t]||t}var dr="keydown";function Jn(t,r,e){var n=H(t),a=n.on,f=n.bind,i=n.unbind,u=t.root,o=r.Direction.resolve,c,s;function g(){d(),a(Q,h),a(Q,d),a(yt,v)}function d(){var p=e.keyboard;p&&(c=p==="global"?window:u,f(c,dr,y))}function h(){i(c,dr)}function l(p){s=p}function v(){var p=s;s=!0,hr(function(){s=p})}function y(p){if(!s){var m=Ke(p);m===o(ge)?t.go("<"):m===o(Ee)&&t.go(">")}}return{mount:g,destroy:h,disable:l}}var Gt=Fe+"-lazy",oe=Gt+"-srcset",Qn="["+Gt+"], ["+oe+"]";function ti(t,r,e){var n=H(t),a=n.on,f=n.off,i=n.bind,u=n.emit,o=e.lazyLoad==="sequential",c=[te,xt],s=[];function g(){e.lazyLoad&&(d(),a(K,d))}function d(){dt(s),h(),o?p():(f(c),a(c,l),l())}function h(){r.Slides.forEach(function(m){ke(m.slide,Qn).forEach(function(E){var D=it(E,Gt),I=it(E,oe);if(D!==E.src||I!==E.srcset){var V=e.classes.spinner,S=E.parentElement,O=Jt(S,"."+V)||wt("span",V,S);s.push([E,m,O]),E.src||Ht(E,"none")}})})}function l(){s=s.filter(function(m){var E=e.perPage*((e.preloadPages||1)+1)-1;return m[1].isWithin(t.index,E)?v(m):!0}),s.length||f(c)}function v(m){var E=m[0];st(m[1].slide,De),i(E,"load error",z(y,m)),M(E,"src",it(E,Gt)),M(E,"srcset",it(E,oe)),ot(E,Gt),ot(E,oe)}function y(m,E){var D=m[0],I=m[1];lt(I.slide,De),E.type!=="error"&&(bt(m[2]),Ht(D,""),u(Or,D,I),u($t)),o&&p()}function p(){s.length&&v(s.shift())}return{mount:g,destroy:z(dt,s),check:l}}function ei(t,r,e){var n=H(t),a=n.on,f=n.emit,i=n.bind,u=r.Slides,o=r.Elements,c=r.Controller,s=c.hasFocus,g=c.getIndex,d=c.go,h=r.Direction.resolve,l=o.pagination,v=[],y,p;function m(){E(),a([Q,K,le],m);var N=e.pagination;l&&Ht(l,N?"":"none"),N&&(a([yt,ze,xt],F),D(),F(),f(ln,{list:y,items:v},O(t.index)))}function E(){y&&(bt(l?pt(y.children):y),lt(y,p),dt(v),y=null),n.destroy()}function D(){var N=t.length,T=e.classes,b=e.i18n,L=e.perPage,x=s()?c.getEnd()+1:Yt(N/L);y=l||wt("ul",T.pagination,o.track.parentElement),st(y,p=_e+"--"+S()),M(y,vt,"tablist"),M(y,et,b.select),M(y,Be,S()===me?"vertical":"");for(var k=0;k<x;k++){var Y=wt("li",null,y),B=wt("button",{class:T.page,type:"button"},Y),P=u.getIn(k).map(function(A){return A.slide.id}),w=!s()&&L>1?b.pageX:b.slideX;i(B,"click",z(I,k)),e.paginationKeyboard&&i(B,"keydown",z(V,k)),M(Y,vt,"presentation"),M(B,vt,"tab"),M(B,ee,P.join(" ")),M(B,et,we(w,k+1)),M(B,Nt,-1),v.push({li:Y,button:B,page:k})}}function I(N){d(">"+N,!0)}function V(N,T){var b=v.length,L=Ke(T),x=S(),k=-1;L===h(Ee,!1,x)?k=++N%b:L===h(ge,!1,x)?k=(--N+b)%b:L==="Home"?k=0:L==="End"&&(k=b-1);var Y=v[k];Y&&(yr(Y.button),d(">"+k),ct(T,!0))}function S(){return e.paginationDirection||e.direction}function O(N){return v[c.toPage(N)]}function F(){var N=O(g(!0)),T=O(g());if(N){var b=N.button;lt(b,Lt),ot(b,or),M(b,Nt,-1)}if(T){var L=T.button;st(L,Lt),M(L,or,!0),M(L,Nt,"")}f(vn,{list:y,items:v},N,T)}return{items:v,mount:m,destroy:E,getAt:O,update:F}}var ri=[" ","Enter"];function ni(t,r,e){var n=e.isNavigation,a=e.slideFocus,f=[];function i(){t.splides.forEach(function(l){l.isParent||(c(t,l.splide),c(l.splide,t))}),n&&s()}function u(){f.forEach(function(l){l.destroy()}),dt(f)}function o(){u(),i()}function c(l,v){var y=H(l);y.on(yt,function(p,m,E){v.go(v.is(Mt)?E:p)}),f.push(y)}function s(){var l=H(t),v=l.on;v(Tr,d),v(Rr,h),v([Ct,Q],g),f.push(l),l.emit(Lr,t.splides)}function g(){M(r.Elements.list,Be,e.direction===me?"vertical":"")}function d(l){t.go(l.index)}function h(l,v){xe(ri,Ke(v))&&(d(l),ct(v))}return{setup:z(r.Media.set,{slideFocus:qt(a)?n:a},!0),mount:i,destroy:u,remount:o}}function ii(t,r,e){var n=H(t),a=n.bind,f=0;function i(){e.wheel&&a(r.Elements.track,"wheel",u,Ot)}function u(c){if(c.cancelable){var s=c.deltaY,g=s<0,d=Oe(c),h=e.wheelMinThreshold||0,l=e.wheelSleep||0;J(s)>h&&d-f>l&&(t.go(g?"<":">"),f=d),o(g)&&ct(c)}}function o(c){return!e.releaseWheel||t.state.is(Vt)||r.Controller.getAdjacent(c)!==-1}return{mount:i}}var ai=90;function si(t,r,e){var n=H(t),a=n.on,f=r.Elements.track,i=e.live&&!e.isNavigation,u=wt("span",bn),o=de(ai,z(s,!1));function c(){i&&(d(!r.Autoplay.isPaused()),M(f,fr,!0),u.textContent="\u2026",a(Cr,z(d,!0)),a(Ir,z(d,!1)),a([te,xt],z(s,!0)))}function s(h){M(f,cr,h),h?(jt(f,u),o.start()):(bt(u),o.cancel())}function g(){ot(f,[ur,fr,cr]),bt(u)}function d(h){i&&M(f,ur,h?"off":"polite")}return{mount:c,disable:d,destroy:g}}var oi=Object.freeze({__proto__:null,Media:En,Direction:mn,Elements:wn,Slides:Dn,Layout:Pn,Clones:xn,Move:Mn,Controller:kn,Arrows:Wn,Autoplay:Un,Cover:Bn,Scroll:qn,Drag:Zn,Keyboard:Jn,LazyLoad:ti,Pagination:ei,Sync:ni,Wheel:ii,Live:si}),ui={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ci={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:In,i18n:ui,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function fi(t,r,e){var n=r.Slides;function a(){H(t).on([Ct,K],f)}function f(){n.forEach(function(u){u.style("transform","translateX(-"+100*u.index+"%)")})}function i(u,o){n.style("transition","opacity "+e.speed+"ms "+e.easing),hr(o)}return{mount:a,start:i,cancel:Ie}}function li(t,r,e){var n=r.Move,a=r.Controller,f=r.Scroll,i=r.Elements.list,u=z(nt,i,"transition"),o;function c(){H(t).bind(i,"transitionend",function(h){h.target===i&&o&&(g(),o())})}function s(h,l){var v=n.toPosition(h,!0),y=n.getPosition(),p=d(h);J(v-y)>=1&&p>=1?e.useScroll?f.scroll(v,p,!1,l):(u("transform "+p+"ms "+e.easing),n.translate(v,!0),o=l):(n.jump(h),l())}function g(){u(""),f.cancel()}function d(h){var l=e.rewindSpeed;if(t.is(Pt)&&l){var v=a.getIndex(!0),y=a.getEnd();if(v===0&&h>=y||v>=y&&h===0)return l}return e.speed}return{mount:c,start:s,cancel:g}}var vi=function(){function t(e,n){this.event=H(),this.Components={},this.state=hn(Rt),this.splides=[],this._o={},this._E={};var a=Et(e)?_r(document,e):e;Ft(a,a+" is invalid."),this.root=a,n=gt({label:it(a,et)||"",labelledby:it(a,Ue)||""},ci,t.defaults,n||{});try{gt(n,JSON.parse(it(a,Fe)))}catch{Ft(!1,"Invalid JSON")}this._o=Object.create(gt({},n))}var r=t.prototype;return r.mount=function(n,a){var f=this,i=this.state,u=this.Components;Ft(i.is([Rt,ue]),"Already mounted!"),i.set(Rt),this._C=u,this._T=a||this._T||(this.is(re)?fi:li),this._E=n||this._E;var o=Bt({},oi,this._E,{Transition:this._T});return Tt(o,function(c,s){var g=c(f,u,f._o);u[s]=g,g.setup&&g.setup()}),Tt(u,function(c){c.mount&&c.mount()}),this.emit(Ct),st(this.root,Ln),i.set(Dt),this.emit(ar),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Dt)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,a){return this.event.on(n,a),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var a;return(a=this.event).emit.apply(a,[n].concat(pt(arguments,1))),this},r.add=function(n,a){return this._C.Slides.add(n,a),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(K),this},r.destroy=function(n){n===void 0&&(n=!0);var a=this.event,f=this.state;return f.is(Rt)?H(this).on(ar,this.destroy.bind(this,n)):(Tt(this._C,function(i){i.destroy&&i.destroy(n)},!0),a.emit(br),a.destroy(),n&&dt(this.splides),f.set(ue)),this},Zr(t,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),Se=vi;Se.defaults={};Se.STATES=Jr;function di(t){t.length=0}function Xe(t,r,e){return Array.prototype.slice.call(t,r,e)}function Ae(t){return t.bind.apply(t,[null].concat(Xe(arguments,1)))}function qe(t,r){return typeof r===t}var Yr=Array.isArray;Ae(qe,"function");Ae(qe,"string");Ae(qe,"undefined");function $r(t){return Yr(t)?t:[t]}function Hr(t,r){$r(t).forEach(r)}var hi=Object.keys;function gi(t,r,e){if(t){var n=hi(t);n=e?n.reverse():n;for(var a=0;a<n.length;a++){var f=n[a];if(f!=="__proto__"&&r(t[f],f)===!1)break}}return t}function Ei(t){return Xe(arguments,1).forEach(function(r){gi(r,function(e,n){t[n]=r[n]})}),t}function mi(){var t=[];function r(i,u,o,c){a(i,u,function(s,g,d){var h="addEventListener"in s,l=h?s.removeEventListener.bind(s,g,o,c):s.removeListener.bind(s,o);h?s.addEventListener(g,o,c):s.addListener(o),t.push([s,g,d,o,l])})}function e(i,u,o){a(i,u,function(c,s,g){t=t.filter(function(d){return d[0]===c&&d[1]===s&&d[2]===g&&(!o||d[3]===o)?(d[4](),!1):!0})})}function n(i,u,o){var c,s=!0;return typeof CustomEvent=="function"?c=new CustomEvent(u,{bubbles:s,detail:o}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(u,s,!1,o)),i.dispatchEvent(c),c}function a(i,u,o){Hr(i,function(c){c&&Hr(u,function(s){s.split(" ").forEach(function(g){var d=g.split(".");o(c,d[0],d[1])})})})}function f(){t.forEach(function(i){i[4]()}),di(t)}return{bind:r,unbind:e,dispatch:n,destroy:f}}var yi="destroy";function pi(t){var r=t?t.event.bus:document.createDocumentFragment(),e=mi();function n(f,i){e.bind(r,$r(f).join(" "),function(u){i.apply(i,Yr(u.detail)?u.detail:[])})}function a(f){e.dispatch(r,f,Xe(arguments,1))}return t&&t.event.on(yi,e.destroy),Ei(e,{bus:r,on:n,off:Ae(e.unbind,r),emit:a})}function _i(t,r,e){return Array.prototype.slice.call(t,r,e)}function Ze(t){return t.bind(null,..._i(arguments,1))}function je(t,r){return typeof r===t}Ze(je,"function");Ze(je,"string");var Si=Ze(je,"undefined"),Ai=Object.keys;function Ti(t,r,e){if(t){let n=Ai(t);n=e?n.reverse():n;for(let a=0;a<n.length;a++){let f=n[a];if(f!=="__proto__"&&r(t[f],f)===!1)break}}return t}var bi="intersection",Li="intersection:in",Ci="intersection:out";function Ii(t){let{Components:r}=t;return{keyboard:{enable(){r.Keyboard.disable(!1)},disable(){r.Keyboard.disable(!0)}},autoplay:{enable(){t.options.autoplay&&r.Autoplay.play()},disable(){r.Autoplay.pause()}},autoScroll:{enable(){let e=r.AutoScroll;e&&e.play()},disable(){let e=r.AutoScroll;e&&e.pause()}},video:{enable(){let e=r.Video;e&&e.play()},disable(){let e=r.Video;e&&e.pause()}}}}function Kr(t,r,e){let{emit:n}=pi(t),a=e.intersection||{},f=Ii(t),i;function u(){window.IntersectionObserver&&(i=new IntersectionObserver(c,{root:a.root,rootMargin:a.rootMargin,threshold:a.threshold}),i.observe(t.root))}function o(){i&&(i.disconnect(),i=null)}function c([h]){h&&(h.isIntersecting?g(h):d(h),n(bi,h))}function s(h){Ti(h,(l,v)=>{if(!Si(l)){let y=f[v];l?y.enable():y.disable()}})}function g(h){s(a.inView||{}),n(Li,h),a.once&&o()}function d(h){s(a.outView||{}),n(Ci,h)}return{mount:u,destroy:o}}document.addEventListener("DOMContentLoaded",()=>{let t={arrows:!0,type:"loop",gap:"2rem",pagination:!1,interval:4e3,pauseOnHover:!1,autoplay:"pause",intersection:{inView:{autoplay:!0},outView:{autoplay:!1}}};new Se("#splide-testimonial",t).mount({Intersection:Kr})});})();
/*! Bundled license information:

@splidejs/splide/dist/js/splide.esm.js:
  (*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   *)

@splidejs/splide-extension-intersection/dist/js/splide-extension-intersection.esm.js:
  (*!
   * @splidejs/splide-extension-intersection
   * Version  : 0.2.0
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   *)
*/