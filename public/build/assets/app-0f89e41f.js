var x="top",j="bottom",W="right",$="left",Mn="auto",Et=[x,j,W,$],ze="start",lt="end",lo="clippingParents",Yr="viewport",et="popper",uo="reference",Or=Et.reduce(function(n,e){return n.concat([e+"-"+ze,e+"-"+lt])},[]),Jr=[].concat(Et,[Mn]).reduce(function(n,e){return n.concat([e,e+"-"+ze,e+"-"+lt])},[]),ho="beforeRead",fo="read",po="afterRead",mo="beforeMain",_o="main",go="afterMain",Eo="beforeWrite",vo="write",bo="afterWrite",yo=[ho,fo,po,mo,_o,go,Eo,vo,bo];function ie(n){return n?(n.nodeName||"").toLowerCase():null}function z(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function Ke(n){var e=z(n).Element;return n instanceof e||n instanceof Element}function K(n){var e=z(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Xr(n){if(typeof ShadowRoot>"u")return!1;var e=z(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function Dc(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},s=e.attributes[t]||{},i=e.elements[t];!K(i)||!ie(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var a=s[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function Pc(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!K(s)||!ie(s)||(Object.assign(s.style,a),Object.keys(i).forEach(function(c){s.removeAttribute(c)}))})}}const Qr={name:"applyStyles",enabled:!0,phase:"write",fn:Dc,effect:Pc,requires:["computeStyles"]};function te(n){return n.split("-")[0]}var je=Math.max,yn=Math.min,ut=Math.round;function Cr(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function wo(){return!/^((?!chrome|android).)*safari/i.test(Cr())}function dt(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),s=1,i=1;e&&K(n)&&(s=n.offsetWidth>0&&ut(r.width)/n.offsetWidth||1,i=n.offsetHeight>0&&ut(r.height)/n.offsetHeight||1);var o=Ke(n)?z(n):window,a=o.visualViewport,c=!wo()&&t,l=(r.left+(c&&a?a.offsetLeft:0))/s,u=(r.top+(c&&a?a.offsetTop:0))/i,h=r.width/s,g=r.height/i;return{width:h,height:g,top:u,right:l+h,bottom:u+g,left:l,x:l,y:u}}function Zr(n){var e=dt(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function To(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Xr(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function de(n){return z(n).getComputedStyle(n)}function Lc(n){return["table","td","th"].indexOf(ie(n))>=0}function Re(n){return((Ke(n)?n.ownerDocument:n.document)||window.document).documentElement}function xn(n){return ie(n)==="html"?n:n.assignedSlot||n.parentNode||(Xr(n)?n.host:null)||Re(n)}function Hs(n){return!K(n)||de(n).position==="fixed"?null:n.offsetParent}function kc(n){var e=/firefox/i.test(Cr()),t=/Trident/i.test(Cr());if(t&&K(n)){var r=de(n);if(r.position==="fixed")return null}var s=xn(n);for(Xr(s)&&(s=s.host);K(s)&&["html","body"].indexOf(ie(s))<0;){var i=de(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function Ft(n){for(var e=z(n),t=Hs(n);t&&Lc(t)&&de(t).position==="static";)t=Hs(t);return t&&(ie(t)==="html"||ie(t)==="body"&&de(t).position==="static")?e:t||kc(n)||e}function es(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Dt(n,e,t){return je(n,yn(e,t))}function Mc(n,e,t){var r=Dt(n,e,t);return r>t?t:r}function Ao(){return{top:0,right:0,bottom:0,left:0}}function So(n){return Object.assign({},Ao(),n)}function Io(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var xc=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,So(typeof e!="number"?e:Io(e,Et))};function $c(n){var e,t=n.state,r=n.name,s=n.options,i=t.elements.arrow,o=t.modifiersData.popperOffsets,a=te(t.placement),c=es(a),l=[$,W].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=xc(s.padding,t),g=Zr(i),E=c==="y"?x:$,m=c==="y"?j:W,_=t.rects.reference[u]+t.rects.reference[c]-o[c]-t.rects.popper[u],p=o[c]-t.rects.reference[c],b=Ft(i),A=b?c==="y"?b.clientHeight||0:b.clientWidth||0:0,S=_/2-p/2,y=h[E],w=A-g[u]-h[m],O=A/2-g[u]/2+S,C=Dt(y,O,w),D=c;t.modifiersData[r]=(e={},e[D]=C,e.centerOffset=C-O,e)}}function Uc(n){var e=n.state,t=n.options,r=t.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||To(e.elements.popper,s)&&(e.elements.arrow=s))}const Oo={name:"arrow",enabled:!0,phase:"main",fn:$c,effect:Uc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ht(n){return n.split("-")[1]}var Fc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Bc(n,e){var t=n.x,r=n.y,s=e.devicePixelRatio||1;return{x:ut(t*s)/s||0,y:ut(r*s)/s||0}}function Vs(n){var e,t=n.popper,r=n.popperRect,s=n.placement,i=n.variation,o=n.offsets,a=n.position,c=n.gpuAcceleration,l=n.adaptive,u=n.roundOffsets,h=n.isFixed,g=o.x,E=g===void 0?0:g,m=o.y,_=m===void 0?0:m,p=typeof u=="function"?u({x:E,y:_}):{x:E,y:_};E=p.x,_=p.y;var b=o.hasOwnProperty("x"),A=o.hasOwnProperty("y"),S=$,y=x,w=window;if(l){var O=Ft(t),C="clientHeight",D="clientWidth";if(O===z(t)&&(O=Re(t),de(O).position!=="static"&&a==="absolute"&&(C="scrollHeight",D="scrollWidth")),O=O,s===x||(s===$||s===W)&&i===lt){y=j;var R=h&&O===w&&w.visualViewport?w.visualViewport.height:O[C];_-=R-r.height,_*=c?1:-1}if(s===$||(s===x||s===j)&&i===lt){S=W;var P=h&&O===w&&w.visualViewport?w.visualViewport.width:O[D];E-=P-r.width,E*=c?1:-1}}var k=Object.assign({position:a},l&&Fc),J=u===!0?Bc({x:E,y:_},z(t)):{x:E,y:_};if(E=J.x,_=J.y,c){var M;return Object.assign({},k,(M={},M[y]=A?"0":"",M[S]=b?"0":"",M.transform=(w.devicePixelRatio||1)<=1?"translate("+E+"px, "+_+"px)":"translate3d("+E+"px, "+_+"px, 0)",M))}return Object.assign({},k,(e={},e[y]=A?_+"px":"",e[S]=b?E+"px":"",e.transform="",e))}function Hc(n){var e=n.state,t=n.options,r=t.gpuAcceleration,s=r===void 0?!0:r,i=t.adaptive,o=i===void 0?!0:i,a=t.roundOffsets,c=a===void 0?!0:a,l={placement:te(e.placement),variation:ht(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Vs(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Vs(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ts={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Hc,data:{}};var nn={passive:!0};function Vc(n){var e=n.state,t=n.instance,r=n.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,a=o===void 0?!0:o,c=z(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",t.update,nn)}),a&&c.addEventListener("resize",t.update,nn),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",t.update,nn)}),a&&c.removeEventListener("resize",t.update,nn)}}const ns={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vc,data:{}};var jc={left:"right",right:"left",bottom:"top",top:"bottom"};function dn(n){return n.replace(/left|right|bottom|top/g,function(e){return jc[e]})}var Wc={start:"end",end:"start"};function js(n){return n.replace(/start|end/g,function(e){return Wc[e]})}function rs(n){var e=z(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function ss(n){return dt(Re(n)).left+rs(n).scrollLeft}function zc(n,e){var t=z(n),r=Re(n),s=t.visualViewport,i=r.clientWidth,o=r.clientHeight,a=0,c=0;if(s){i=s.width,o=s.height;var l=wo();(l||!l&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:i,height:o,x:a+ss(n),y:c}}function Kc(n){var e,t=Re(n),r=rs(n),s=(e=n.ownerDocument)==null?void 0:e.body,i=je(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=je(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-r.scrollLeft+ss(n),c=-r.scrollTop;return de(s||t).direction==="rtl"&&(a+=je(t.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function is(n){var e=de(n),t=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+r)}function Co(n){return["html","body","#document"].indexOf(ie(n))>=0?n.ownerDocument.body:K(n)&&is(n)?n:Co(xn(n))}function Pt(n,e){var t;e===void 0&&(e=[]);var r=Co(n),s=r===((t=n.ownerDocument)==null?void 0:t.body),i=z(r),o=s?[i].concat(i.visualViewport||[],is(r)?r:[]):r,a=e.concat(o);return s?a:a.concat(Pt(xn(o)))}function Nr(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function qc(n,e){var t=dt(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function Ws(n,e,t){return e===Yr?Nr(zc(n,t)):Ke(e)?qc(e,t):Nr(Kc(Re(n)))}function Gc(n){var e=Pt(xn(n)),t=["absolute","fixed"].indexOf(de(n).position)>=0,r=t&&K(n)?Ft(n):n;return Ke(r)?e.filter(function(s){return Ke(s)&&To(s,r)&&ie(s)!=="body"}):[]}function Yc(n,e,t,r){var s=e==="clippingParents"?Gc(n):[].concat(e),i=[].concat(s,[t]),o=i[0],a=i.reduce(function(c,l){var u=Ws(n,l,r);return c.top=je(u.top,c.top),c.right=yn(u.right,c.right),c.bottom=yn(u.bottom,c.bottom),c.left=je(u.left,c.left),c},Ws(n,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function No(n){var e=n.reference,t=n.element,r=n.placement,s=r?te(r):null,i=r?ht(r):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(s){case x:c={x:o,y:e.y-t.height};break;case j:c={x:o,y:e.y+e.height};break;case W:c={x:e.x+e.width,y:a};break;case $:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var l=s?es(s):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case ze:c[l]=c[l]-(e[u]/2-t[u]/2);break;case lt:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function ft(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=r===void 0?n.placement:r,i=t.strategy,o=i===void 0?n.strategy:i,a=t.boundary,c=a===void 0?lo:a,l=t.rootBoundary,u=l===void 0?Yr:l,h=t.elementContext,g=h===void 0?et:h,E=t.altBoundary,m=E===void 0?!1:E,_=t.padding,p=_===void 0?0:_,b=So(typeof p!="number"?p:Io(p,Et)),A=g===et?uo:et,S=n.rects.popper,y=n.elements[m?A:g],w=Yc(Ke(y)?y:y.contextElement||Re(n.elements.popper),c,u,o),O=dt(n.elements.reference),C=No({reference:O,element:S,strategy:"absolute",placement:s}),D=Nr(Object.assign({},S,C)),R=g===et?D:O,P={top:w.top-R.top+b.top,bottom:R.bottom-w.bottom+b.bottom,left:w.left-R.left+b.left,right:R.right-w.right+b.right},k=n.modifiersData.offset;if(g===et&&k){var J=k[s];Object.keys(P).forEach(function(M){var ke=[W,j].indexOf(M)>=0?1:-1,Me=[x,j].indexOf(M)>=0?"y":"x";P[M]+=J[Me]*ke})}return P}function Jc(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=t.boundary,i=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?Jr:c,u=ht(r),h=u?a?Or:Or.filter(function(m){return ht(m)===u}):Et,g=h.filter(function(m){return l.indexOf(m)>=0});g.length===0&&(g=h);var E=g.reduce(function(m,_){return m[_]=ft(n,{placement:_,boundary:s,rootBoundary:i,padding:o})[te(_)],m},{});return Object.keys(E).sort(function(m,_){return E[m]-E[_]})}function Xc(n){if(te(n)===Mn)return[];var e=dn(n);return[js(n),e,js(e)]}function Qc(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var s=t.mainAxis,i=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,l=t.padding,u=t.boundary,h=t.rootBoundary,g=t.altBoundary,E=t.flipVariations,m=E===void 0?!0:E,_=t.allowedAutoPlacements,p=e.options.placement,b=te(p),A=b===p,S=c||(A||!m?[dn(p)]:Xc(p)),y=[p].concat(S).reduce(function(Xe,_e){return Xe.concat(te(_e)===Mn?Jc(e,{placement:_e,boundary:u,rootBoundary:h,padding:l,flipVariations:m,allowedAutoPlacements:_}):_e)},[]),w=e.rects.reference,O=e.rects.popper,C=new Map,D=!0,R=y[0],P=0;P<y.length;P++){var k=y[P],J=te(k),M=ht(k)===ze,ke=[x,j].indexOf(J)>=0,Me=ke?"width":"height",H=ft(e,{placement:k,boundary:u,rootBoundary:h,altBoundary:g,padding:l}),X=ke?M?W:$:M?j:x;w[Me]>O[Me]&&(X=dn(X));var Xt=dn(X),xe=[];if(i&&xe.push(H[J]<=0),a&&xe.push(H[X]<=0,H[Xt]<=0),xe.every(function(Xe){return Xe})){R=k,D=!1;break}C.set(k,xe)}if(D)for(var Qt=m?3:1,Xn=function(_e){var Ot=y.find(function(en){var $e=C.get(en);if($e)return $e.slice(0,_e).every(function(Qn){return Qn})});if(Ot)return R=Ot,"break"},It=Qt;It>0;It--){var Zt=Xn(It);if(Zt==="break")break}e.placement!==R&&(e.modifiersData[r]._skip=!0,e.placement=R,e.reset=!0)}}const Ro={name:"flip",enabled:!0,phase:"main",fn:Qc,requiresIfExists:["offset"],data:{_skip:!1}};function zs(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Ks(n){return[x,W,j,$].some(function(e){return n[e]>=0})}function Zc(n){var e=n.state,t=n.name,r=e.rects.reference,s=e.rects.popper,i=e.modifiersData.preventOverflow,o=ft(e,{elementContext:"reference"}),a=ft(e,{altBoundary:!0}),c=zs(o,r),l=zs(a,s,i),u=Ks(c),h=Ks(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const Do={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Zc};function el(n,e,t){var r=te(n),s=[$,x].indexOf(r)>=0?-1:1,i=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=i[0],a=i[1];return o=o||0,a=(a||0)*s,[$,W].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function tl(n){var e=n.state,t=n.options,r=n.name,s=t.offset,i=s===void 0?[0,0]:s,o=Jr.reduce(function(u,h){return u[h]=el(h,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const Po={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:tl};function nl(n){var e=n.state,t=n.name;e.modifiersData[t]=No({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const os={name:"popperOffsets",enabled:!0,phase:"read",fn:nl,data:{}};function rl(n){return n==="x"?"y":"x"}function sl(n){var e=n.state,t=n.options,r=n.name,s=t.mainAxis,i=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,h=t.padding,g=t.tether,E=g===void 0?!0:g,m=t.tetherOffset,_=m===void 0?0:m,p=ft(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),b=te(e.placement),A=ht(e.placement),S=!A,y=es(b),w=rl(y),O=e.modifiersData.popperOffsets,C=e.rects.reference,D=e.rects.popper,R=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,P=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),k=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,J={x:0,y:0};if(O){if(i){var M,ke=y==="y"?x:$,Me=y==="y"?j:W,H=y==="y"?"height":"width",X=O[y],Xt=X+p[ke],xe=X-p[Me],Qt=E?-D[H]/2:0,Xn=A===ze?C[H]:D[H],It=A===ze?-D[H]:-C[H],Zt=e.elements.arrow,Xe=E&&Zt?Zr(Zt):{width:0,height:0},_e=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ao(),Ot=_e[ke],en=_e[Me],$e=Dt(0,C[H],Xe[H]),Qn=S?C[H]/2-Qt-$e-Ot-P.mainAxis:Xn-$e-Ot-P.mainAxis,Sc=S?-C[H]/2+Qt+$e+en+P.mainAxis:It+$e+en+P.mainAxis,Zn=e.elements.arrow&&Ft(e.elements.arrow),Ic=Zn?y==="y"?Zn.clientTop||0:Zn.clientLeft||0:0,Ps=(M=k==null?void 0:k[y])!=null?M:0,Oc=X+Qn-Ps-Ic,Cc=X+Sc-Ps,Ls=Dt(E?yn(Xt,Oc):Xt,X,E?je(xe,Cc):xe);O[y]=Ls,J[y]=Ls-X}if(a){var ks,Nc=y==="x"?x:$,Rc=y==="x"?j:W,Ue=O[w],tn=w==="y"?"height":"width",Ms=Ue+p[Nc],xs=Ue-p[Rc],er=[x,$].indexOf(b)!==-1,$s=(ks=k==null?void 0:k[w])!=null?ks:0,Us=er?Ms:Ue-C[tn]-D[tn]-$s+P.altAxis,Fs=er?Ue+C[tn]+D[tn]-$s-P.altAxis:xs,Bs=E&&er?Mc(Us,Ue,Fs):Dt(E?Us:Ms,Ue,E?Fs:xs);O[w]=Bs,J[w]=Bs-Ue}e.modifiersData[r]=J}}const Lo={name:"preventOverflow",enabled:!0,phase:"main",fn:sl,requiresIfExists:["offset"]};function il(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function ol(n){return n===z(n)||!K(n)?rs(n):il(n)}function al(n){var e=n.getBoundingClientRect(),t=ut(e.width)/n.offsetWidth||1,r=ut(e.height)/n.offsetHeight||1;return t!==1||r!==1}function cl(n,e,t){t===void 0&&(t=!1);var r=K(e),s=K(e)&&al(e),i=Re(e),o=dt(n,s,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((ie(e)!=="body"||is(i))&&(a=ol(e)),K(e)?(c=dt(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=ss(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function ll(n){var e=new Map,t=new Set,r=[];n.forEach(function(i){e.set(i.name,i)});function s(i){t.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&s(c)}}),r.push(i)}return n.forEach(function(i){t.has(i.name)||s(i)}),r}function ul(n){var e=ll(n);return yo.reduce(function(t,r){return t.concat(e.filter(function(s){return s.phase===r}))},[])}function dl(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function hl(n){var e=n.reduce(function(t,r){var s=t[r.name];return t[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var qs={placement:"bottom",modifiers:[],strategy:"absolute"};function Gs(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function $n(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,s=e.defaultOptions,i=s===void 0?qs:s;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},qs,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],g=!1,E={state:u,setOptions:function(b){var A=typeof b=="function"?b(u.options):b;_(),u.options=Object.assign({},i,u.options,A),u.scrollParents={reference:Ke(a)?Pt(a):a.contextElement?Pt(a.contextElement):[],popper:Pt(c)};var S=ul(hl([].concat(r,u.options.modifiers)));return u.orderedModifiers=S.filter(function(y){return y.enabled}),m(),E.update()},forceUpdate:function(){if(!g){var b=u.elements,A=b.reference,S=b.popper;if(Gs(A,S)){u.rects={reference:cl(A,Ft(S),u.options.strategy==="fixed"),popper:Zr(S)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(P){return u.modifiersData[P.name]=Object.assign({},P.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var w=u.orderedModifiers[y],O=w.fn,C=w.options,D=C===void 0?{}:C,R=w.name;typeof O=="function"&&(u=O({state:u,options:D,name:R,instance:E})||u)}}}},update:dl(function(){return new Promise(function(p){E.forceUpdate(),p(u)})}),destroy:function(){_(),g=!0}};if(!Gs(a,c))return E;E.setOptions(l).then(function(p){!g&&l.onFirstUpdate&&l.onFirstUpdate(p)});function m(){u.orderedModifiers.forEach(function(p){var b=p.name,A=p.options,S=A===void 0?{}:A,y=p.effect;if(typeof y=="function"){var w=y({state:u,name:b,instance:E,options:S}),O=function(){};h.push(w||O)}})}function _(){h.forEach(function(p){return p()}),h=[]}return E}}var fl=$n(),pl=[ns,os,ts,Qr],ml=$n({defaultModifiers:pl}),_l=[ns,os,ts,Qr,Po,Ro,Lo,Oo,Do],as=$n({defaultModifiers:_l});const ko=Object.freeze(Object.defineProperty({__proto__:null,afterMain:go,afterRead:po,afterWrite:bo,applyStyles:Qr,arrow:Oo,auto:Mn,basePlacements:Et,beforeMain:mo,beforeRead:ho,beforeWrite:Eo,bottom:j,clippingParents:lo,computeStyles:ts,createPopper:as,createPopperBase:fl,createPopperLite:ml,detectOverflow:ft,end:lt,eventListeners:ns,flip:Ro,hide:Do,left:$,main:_o,modifierPhases:yo,offset:Po,placements:Jr,popper:et,popperGenerator:$n,popperOffsets:os,preventOverflow:Lo,read:fo,reference:uo,right:W,start:ze,top:x,variationPlacements:Or,viewport:Yr,write:vo},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ge=new Map,tr={set(n,e,t){ge.has(n)||ge.set(n,new Map);const r=ge.get(n);if(!r.has(e)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(e,t)},get(n,e){return ge.has(n)&&ge.get(n).get(e)||null},remove(n,e){if(!ge.has(n))return;const t=ge.get(n);t.delete(e),t.size===0&&ge.delete(n)}},gl=1e6,El=1e3,Rr="transitionend",Mo=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),n),vl=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),bl=n=>{do n+=Math.floor(Math.random()*gl);while(document.getElementById(n));return n},yl=n=>{if(!n)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(n);const r=Number.parseFloat(e),s=Number.parseFloat(t);return!r&&!s?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*El)},xo=n=>{n.dispatchEvent(new Event(Rr))},le=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),Oe=n=>le(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Mo(n)):null,vt=n=>{if(!le(n)||n.getClientRects().length===0)return!1;const e=getComputedStyle(n).getPropertyValue("visibility")==="visible",t=n.closest("details:not([open])");if(!t)return e;if(t!==n){const r=n.closest("summary");if(r&&r.parentNode!==t||r===null)return!1}return e},Ce=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",$o=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const e=n.getRootNode();return e instanceof ShadowRoot?e:null}return n instanceof ShadowRoot?n:n.parentNode?$o(n.parentNode):null},wn=()=>{},Bt=n=>{n.offsetHeight},Uo=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,nr=[],wl=n=>{document.readyState==="loading"?(nr.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of nr)e()}),nr.push(n)):n()},q=()=>document.documentElement.dir==="rtl",Y=n=>{wl(()=>{const e=Uo();if(e){const t=n.NAME,r=e.fn[t];e.fn[t]=n.jQueryInterface,e.fn[t].Constructor=n,e.fn[t].noConflict=()=>(e.fn[t]=r,n.jQueryInterface)}})},F=(n,e=[],t=n)=>typeof n=="function"?n(...e):t,Fo=(n,e,t=!0)=>{if(!t){F(n);return}const r=5,s=yl(e)+r;let i=!1;const o=({target:a})=>{a===e&&(i=!0,e.removeEventListener(Rr,o),F(n))};e.addEventListener(Rr,o),setTimeout(()=>{i||xo(e)},s)},cs=(n,e,t,r)=>{const s=n.length;let i=n.indexOf(e);return i===-1?!t&&r?n[s-1]:n[0]:(i+=t?1:-1,r&&(i=(i+s)%s),n[Math.max(0,Math.min(i,s-1))])},Tl=/[^.]*(?=\..*)\.|.*/,Al=/\..*/,Sl=/::\d+$/,rr={};let Ys=1;const Bo={mouseenter:"mouseover",mouseleave:"mouseout"},Il=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ho(n,e){return e&&`${e}::${Ys++}`||n.uidEvent||Ys++}function Vo(n){const e=Ho(n);return n.uidEvent=e,rr[e]=rr[e]||{},rr[e]}function Ol(n,e){return function t(r){return ls(r,{delegateTarget:n}),t.oneOff&&f.off(n,r.type,e),e.apply(n,[r])}}function Cl(n,e,t){return function r(s){const i=n.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return ls(s,{delegateTarget:o}),r.oneOff&&f.off(n,s.type,e,t),t.apply(o,[s])}}function jo(n,e,t=null){return Object.values(n).find(r=>r.callable===e&&r.delegationSelector===t)}function Wo(n,e,t){const r=typeof e=="string",s=r?t:e||t;let i=zo(n);return Il.has(i)||(i=n),[r,s,i]}function Js(n,e,t,r,s){if(typeof e!="string"||!n)return;let[i,o,a]=Wo(e,t,r);e in Bo&&(o=(m=>function(_){if(!_.relatedTarget||_.relatedTarget!==_.delegateTarget&&!_.delegateTarget.contains(_.relatedTarget))return m.call(this,_)})(o));const c=Vo(n),l=c[a]||(c[a]={}),u=jo(l,o,i?t:null);if(u){u.oneOff=u.oneOff&&s;return}const h=Ho(o,e.replace(Tl,"")),g=i?Cl(n,t,o):Ol(n,o);g.delegationSelector=i?t:null,g.callable=o,g.oneOff=s,g.uidEvent=h,l[h]=g,n.addEventListener(a,g,i)}function Dr(n,e,t,r,s){const i=jo(e[t],r,s);i&&(n.removeEventListener(t,i,!!s),delete e[t][i.uidEvent])}function Nl(n,e,t,r){const s=e[t]||{};for(const[i,o]of Object.entries(s))i.includes(r)&&Dr(n,e,t,o.callable,o.delegationSelector)}function zo(n){return n=n.replace(Al,""),Bo[n]||n}const f={on(n,e,t,r){Js(n,e,t,r,!1)},one(n,e,t,r){Js(n,e,t,r,!0)},off(n,e,t,r){if(typeof e!="string"||!n)return;const[s,i,o]=Wo(e,t,r),a=o!==e,c=Vo(n),l=c[o]||{},u=e.startsWith(".");if(typeof i<"u"){if(!Object.keys(l).length)return;Dr(n,c,o,i,s?t:null);return}if(u)for(const h of Object.keys(c))Nl(n,c,h,e.slice(1));for(const[h,g]of Object.entries(l)){const E=h.replace(Sl,"");(!a||e.includes(E))&&Dr(n,c,o,g.callable,g.delegationSelector)}},trigger(n,e,t){if(typeof e!="string"||!n)return null;const r=Uo(),s=zo(e),i=e!==s;let o=null,a=!0,c=!0,l=!1;i&&r&&(o=r.Event(e,t),r(n).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=ls(new Event(e,{bubbles:a,cancelable:!0}),t);return l&&u.preventDefault(),c&&n.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function ls(n,e={}){for(const[t,r]of Object.entries(e))try{n[t]=r}catch{Object.defineProperty(n,t,{configurable:!0,get(){return r}})}return n}function Xs(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function sr(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const ue={setDataAttribute(n,e,t){n.setAttribute(`data-bs-${sr(e)}`,t)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${sr(e)}`)},getDataAttributes(n){if(!n)return{};const e={},t=Object.keys(n.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of t){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=Xs(n.dataset[r])}return e},getDataAttribute(n,e){return Xs(n.getAttribute(`data-bs-${sr(e)}`))}};class Ht{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const r=le(t)?ue.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...le(t)?ue.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[r,s]of Object.entries(t)){const i=e[r],o=le(i)?"element":vl(i);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${s}".`)}}}const Rl="5.3.3";class Z extends Ht{constructor(e,t){super(),e=Oe(e),e&&(this._element=e,this._config=this._getConfig(t),tr.set(this._element,this.constructor.DATA_KEY,this))}dispose(){tr.remove(this._element,this.constructor.DATA_KEY),f.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,r=!0){Fo(e,t,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return tr.get(Oe(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return Rl}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ir=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let t=n.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>Mo(t)).join(","):null},v={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(t=>t.matches(e))},parents(n,e){const t=[];let r=n.parentNode.closest(e);for(;r;)t.push(r),r=r.parentNode.closest(e);return t},prev(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(t=>!Ce(t)&&vt(t))},getSelectorFromElement(n){const e=ir(n);return e&&v.findOne(e)?e:null},getElementFromSelector(n){const e=ir(n);return e?v.findOne(e):null},getMultipleElementsFromSelector(n){const e=ir(n);return e?v.find(e):[]}},Un=(n,e="hide")=>{const t=`click.dismiss${n.EVENT_KEY}`,r=n.NAME;f.on(document,t,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Ce(this))return;const i=v.getElementFromSelector(this)||this.closest(`.${r}`);n.getOrCreateInstance(i)[e]()})},Dl="alert",Pl="bs.alert",Ko=`.${Pl}`,Ll=`close${Ko}`,kl=`closed${Ko}`,Ml="fade",xl="show";class Fn extends Z{static get NAME(){return Dl}close(){if(f.trigger(this._element,Ll).defaultPrevented)return;this._element.classList.remove(xl);const t=this._element.classList.contains(Ml);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),f.trigger(this._element,kl),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=Fn.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Un(Fn,"close");Y(Fn);const $l="button",Ul="bs.button",Fl=`.${Ul}`,Bl=".data-api",Hl="active",Qs='[data-bs-toggle="button"]',Vl=`click${Fl}${Bl}`;class Bn extends Z{static get NAME(){return $l}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Hl))}static jQueryInterface(e){return this.each(function(){const t=Bn.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}f.on(document,Vl,Qs,n=>{n.preventDefault();const e=n.target.closest(Qs);Bn.getOrCreateInstance(e).toggle()});Y(Bn);const jl="swipe",bt=".bs.swipe",Wl=`touchstart${bt}`,zl=`touchmove${bt}`,Kl=`touchend${bt}`,ql=`pointerdown${bt}`,Gl=`pointerup${bt}`,Yl="touch",Jl="pen",Xl="pointer-event",Ql=40,Zl={endCallback:null,leftCallback:null,rightCallback:null},eu={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Tn extends Ht{constructor(e,t){super(),this._element=e,!(!e||!Tn.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Zl}static get DefaultType(){return eu}static get NAME(){return jl}dispose(){f.off(this._element,bt)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),F(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Ql)return;const t=e/this._deltaX;this._deltaX=0,t&&F(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(f.on(this._element,ql,e=>this._start(e)),f.on(this._element,Gl,e=>this._end(e)),this._element.classList.add(Xl)):(f.on(this._element,Wl,e=>this._start(e)),f.on(this._element,zl,e=>this._move(e)),f.on(this._element,Kl,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Jl||e.pointerType===Yl)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const tu="carousel",nu="bs.carousel",De=`.${nu}`,qo=".data-api",ru="ArrowLeft",su="ArrowRight",iu=500,Ct="next",Qe="prev",tt="left",hn="right",ou=`slide${De}`,or=`slid${De}`,au=`keydown${De}`,cu=`mouseenter${De}`,lu=`mouseleave${De}`,uu=`dragstart${De}`,du=`load${De}${qo}`,hu=`click${De}${qo}`,Go="carousel",rn="active",fu="slide",pu="carousel-item-end",mu="carousel-item-start",_u="carousel-item-next",gu="carousel-item-prev",Yo=".active",Jo=".carousel-item",Eu=Yo+Jo,vu=".carousel-item img",bu=".carousel-indicators",yu="[data-bs-slide], [data-bs-slide-to]",wu='[data-bs-ride="carousel"]',Tu={[ru]:hn,[su]:tt},Au={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Su={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Vt extends Z{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=v.findOne(bu,this._element),this._addEventListeners(),this._config.ride===Go&&this.cycle()}static get Default(){return Au}static get DefaultType(){return Su}static get NAME(){return tu}next(){this._slide(Ct)}nextWhenVisible(){!document.hidden&&vt(this._element)&&this.next()}prev(){this._slide(Qe)}pause(){this._isSliding&&xo(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){f.one(this._element,or,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){f.one(this._element,or,()=>this.to(e));return}const r=this._getItemIndex(this._getActive());if(r===e)return;const s=e>r?Ct:Qe;this._slide(s,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&f.on(this._element,au,e=>this._keydown(e)),this._config.pause==="hover"&&(f.on(this._element,cu,()=>this.pause()),f.on(this._element,lu,()=>this._maybeEnableCycle())),this._config.touch&&Tn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of v.find(vu,this._element))f.on(r,uu,s=>s.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(tt)),rightCallback:()=>this._slide(this._directionToOrder(hn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),iu+this._config.interval))}};this._swipeHelper=new Tn(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Tu[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=v.findOne(Yo,this._indicatorsElement);t.classList.remove(rn),t.removeAttribute("aria-current");const r=v.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);r&&(r.classList.add(rn),r.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const r=this._getActive(),s=e===Ct,i=t||cs(this._getItems(),r,s,this._config.wrap);if(i===r)return;const o=this._getItemIndex(i),a=E=>f.trigger(this._element,E,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(r),to:o});if(a(ou).defaultPrevented||!r||!i)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const u=s?mu:pu,h=s?_u:gu;i.classList.add(h),Bt(i),r.classList.add(u),i.classList.add(u);const g=()=>{i.classList.remove(u,h),i.classList.add(rn),r.classList.remove(rn,h,u),this._isSliding=!1,a(or)};this._queueCallback(g,r,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(fu)}_getActive(){return v.findOne(Eu,this._element)}_getItems(){return v.find(Jo,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return q()?e===tt?Qe:Ct:e===tt?Ct:Qe}_orderToDirection(e){return q()?e===Qe?tt:hn:e===Qe?hn:tt}static jQueryInterface(e){return this.each(function(){const t=Vt.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}f.on(document,hu,yu,function(n){const e=v.getElementFromSelector(this);if(!e||!e.classList.contains(Go))return;n.preventDefault();const t=Vt.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to");if(r){t.to(r),t._maybeEnableCycle();return}if(ue.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});f.on(window,du,()=>{const n=v.find(wu);for(const e of n)Vt.getOrCreateInstance(e)});Y(Vt);const Iu="collapse",Ou="bs.collapse",jt=`.${Ou}`,Cu=".data-api",Nu=`show${jt}`,Ru=`shown${jt}`,Du=`hide${jt}`,Pu=`hidden${jt}`,Lu=`click${jt}${Cu}`,ar="show",rt="collapse",sn="collapsing",ku="collapsed",Mu=`:scope .${rt} .${rt}`,xu="collapse-horizontal",$u="width",Uu="height",Fu=".collapse.show, .collapse.collapsing",Pr='[data-bs-toggle="collapse"]',Bu={parent:null,toggle:!0},Hu={parent:"(null|element)",toggle:"boolean"};class kt extends Z{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const r=v.find(Pr);for(const s of r){const i=v.getSelectorFromElement(s),o=v.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Bu}static get DefaultType(){return Hu}static get NAME(){return Iu}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Fu).filter(a=>a!==this._element).map(a=>kt.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||f.trigger(this._element,Nu).defaultPrevented)return;for(const a of e)a.hide();const r=this._getDimension();this._element.classList.remove(rt),this._element.classList.add(sn),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(sn),this._element.classList.add(rt,ar),this._element.style[r]="",f.trigger(this._element,Ru)},o=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||f.trigger(this._element,Du).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Bt(this._element),this._element.classList.add(sn),this._element.classList.remove(rt,ar);for(const s of this._triggerArray){const i=v.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(sn),this._element.classList.add(rt),f.trigger(this._element,Pu)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(ar)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Oe(e.parent),e}_getDimension(){return this._element.classList.contains(xu)?$u:Uu}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Pr);for(const t of e){const r=v.getElementFromSelector(t);r&&this._addAriaAndCollapsedClass([t],this._isShown(r))}}_getFirstLevelChildren(e){const t=v.find(Mu,this._config.parent);return v.find(e,this._config.parent).filter(r=>!t.includes(r))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const r of e)r.classList.toggle(ku,!t),r.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const r=kt.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e]()}})}}f.on(document,Lu,Pr,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const e of v.getMultipleElementsFromSelector(this))kt.getOrCreateInstance(e,{toggle:!1}).toggle()});Y(kt);const Zs="dropdown",Vu="bs.dropdown",Ye=`.${Vu}`,us=".data-api",ju="Escape",ei="Tab",Wu="ArrowUp",ti="ArrowDown",zu=2,Ku=`hide${Ye}`,qu=`hidden${Ye}`,Gu=`show${Ye}`,Yu=`shown${Ye}`,Xo=`click${Ye}${us}`,Qo=`keydown${Ye}${us}`,Ju=`keyup${Ye}${us}`,nt="show",Xu="dropup",Qu="dropend",Zu="dropstart",ed="dropup-center",td="dropdown-center",Be='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',nd=`${Be}.${nt}`,fn=".dropdown-menu",rd=".navbar",sd=".navbar-nav",id=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",od=q()?"top-end":"top-start",ad=q()?"top-start":"top-end",cd=q()?"bottom-end":"bottom-start",ld=q()?"bottom-start":"bottom-end",ud=q()?"left-start":"right-start",dd=q()?"right-start":"left-start",hd="top",fd="bottom",pd={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},md={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ne extends Z{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=v.next(this._element,fn)[0]||v.prev(this._element,fn)[0]||v.findOne(fn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return pd}static get DefaultType(){return md}static get NAME(){return Zs}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ce(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!f.trigger(this._element,Gu,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(sd))for(const r of[].concat(...document.body.children))f.on(r,"mouseover",wn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(nt),this._element.classList.add(nt),f.trigger(this._element,Yu,e)}}hide(){if(Ce(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!f.trigger(this._element,Ku,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))f.off(r,"mouseover",wn);this._popper&&this._popper.destroy(),this._menu.classList.remove(nt),this._element.classList.remove(nt),this._element.setAttribute("aria-expanded","false"),ue.removeDataAttribute(this._menu,"popper"),f.trigger(this._element,qu,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!le(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Zs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof ko>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:le(this._config.reference)?e=Oe(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=as(e,this._menu,t)}_isShown(){return this._menu.classList.contains(nt)}_getPlacement(){const e=this._parent;if(e.classList.contains(Qu))return ud;if(e.classList.contains(Zu))return dd;if(e.classList.contains(ed))return hd;if(e.classList.contains(td))return fd;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(Xu)?t?ad:od:t?ld:cd}_detectNavbar(){return this._element.closest(rd)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ue.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...F(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const r=v.find(id,this._menu).filter(s=>vt(s));r.length&&cs(r,t,e===ti,!r.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=ne.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===zu||e.type==="keyup"&&e.key!==ei)return;const t=v.find(nd);for(const r of t){const s=ne.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=e.composedPath(),o=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===ei||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:s._element};e.type==="click"&&(a.clickEvent=e),s._completeHide(a)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),r=e.key===ju,s=[Wu,ti].includes(e.key);if(!s&&!r||t&&!r)return;e.preventDefault();const i=this.matches(Be)?this:v.prev(this,Be)[0]||v.next(this,Be)[0]||v.findOne(Be,e.delegateTarget.parentNode),o=ne.getOrCreateInstance(i);if(s){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),i.focus())}}f.on(document,Qo,Be,ne.dataApiKeydownHandler);f.on(document,Qo,fn,ne.dataApiKeydownHandler);f.on(document,Xo,ne.clearMenus);f.on(document,Ju,ne.clearMenus);f.on(document,Xo,Be,function(n){n.preventDefault(),ne.getOrCreateInstance(this).toggle()});Y(ne);const Zo="backdrop",_d="fade",ni="show",ri=`mousedown.bs.${Zo}`,gd={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ed={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ea extends Ht{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return gd}static get DefaultType(){return Ed}static get NAME(){return Zo}show(e){if(!this._config.isVisible){F(e);return}this._append();const t=this._getElement();this._config.isAnimated&&Bt(t),t.classList.add(ni),this._emulateAnimation(()=>{F(e)})}hide(e){if(!this._config.isVisible){F(e);return}this._getElement().classList.remove(ni),this._emulateAnimation(()=>{this.dispose(),F(e)})}dispose(){this._isAppended&&(f.off(this._element,ri),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(_d),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Oe(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),f.on(e,ri,()=>{F(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Fo(e,this._getElement(),this._config.isAnimated)}}const vd="focustrap",bd="bs.focustrap",An=`.${bd}`,yd=`focusin${An}`,wd=`keydown.tab${An}`,Td="Tab",Ad="forward",si="backward",Sd={autofocus:!0,trapElement:null},Id={autofocus:"boolean",trapElement:"element"};class ta extends Ht{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Sd}static get DefaultType(){return Id}static get NAME(){return vd}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),f.off(document,An),f.on(document,yd,e=>this._handleFocusin(e)),f.on(document,wd,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,f.off(document,An))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const r=v.focusableChildren(t);r.length===0?t.focus():this._lastTabNavDirection===si?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===Td&&(this._lastTabNavDirection=e.shiftKey?si:Ad)}}const ii=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",oi=".sticky-top",on="padding-right",ai="margin-right";class Lr{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,on,t=>t+e),this._setElementAttributes(ii,on,t=>t+e),this._setElementAttributes(oi,ai,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,on),this._resetElementAttributes(ii,on),this._resetElementAttributes(oi,ai)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,r){const s=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${r(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const r=e.style.getPropertyValue(t);r&&ue.setDataAttribute(e,t,r)}_resetElementAttributes(e,t){const r=s=>{const i=ue.getDataAttribute(s,t);if(i===null){s.style.removeProperty(t);return}ue.removeDataAttribute(s,t),s.style.setProperty(t,i)};this._applyManipulationCallback(e,r)}_applyManipulationCallback(e,t){if(le(e)){t(e);return}for(const r of v.find(e,this._element))t(r)}}const Od="modal",Cd="bs.modal",G=`.${Cd}`,Nd=".data-api",Rd="Escape",Dd=`hide${G}`,Pd=`hidePrevented${G}`,na=`hidden${G}`,ra=`show${G}`,Ld=`shown${G}`,kd=`resize${G}`,Md=`click.dismiss${G}`,xd=`mousedown.dismiss${G}`,$d=`keydown.dismiss${G}`,Ud=`click${G}${Nd}`,ci="modal-open",Fd="fade",li="show",cr="modal-static",Bd=".modal.show",Hd=".modal-dialog",Vd=".modal-body",jd='[data-bs-toggle="modal"]',Wd={backdrop:!0,focus:!0,keyboard:!0},zd={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class pt extends Z{constructor(e,t){super(e,t),this._dialog=v.findOne(Hd,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Lr,this._addEventListeners()}static get Default(){return Wd}static get DefaultType(){return zd}static get NAME(){return Od}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||f.trigger(this._element,ra,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ci),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||f.trigger(this._element,Dd).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(li),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){f.off(window,G),f.off(this._dialog,G),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ea({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ta({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=v.findOne(Vd,this._dialog);t&&(t.scrollTop=0),Bt(this._element),this._element.classList.add(li);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,f.trigger(this._element,Ld,{relatedTarget:e})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){f.on(this._element,$d,e=>{if(e.key===Rd){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),f.on(window,kd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),f.on(this._element,xd,e=>{f.one(this._element,Md,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ci),this._resetAdjustments(),this._scrollBar.reset(),f.trigger(this._element,na)})}_isAnimated(){return this._element.classList.contains(Fd)}_triggerBackdropTransition(){if(f.trigger(this._element,Pd).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(cr)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(cr),this._queueCallback(()=>{this._element.classList.remove(cr),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),r=t>0;if(r&&!e){const s=q()?"paddingLeft":"paddingRight";this._element.style[s]=`${t}px`}if(!r&&e){const s=q()?"paddingRight":"paddingLeft";this._element.style[s]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const r=pt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e](t)}})}}f.on(document,Ud,jd,function(n){const e=v.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),f.one(e,ra,s=>{s.defaultPrevented||f.one(e,na,()=>{vt(this)&&this.focus()})});const t=v.findOne(Bd);t&&pt.getInstance(t).hide(),pt.getOrCreateInstance(e).toggle(this)});Un(pt);Y(pt);const Kd="offcanvas",qd="bs.offcanvas",me=`.${qd}`,sa=".data-api",Gd=`load${me}${sa}`,Yd="Escape",ui="show",di="showing",hi="hiding",Jd="offcanvas-backdrop",ia=".offcanvas.show",Xd=`show${me}`,Qd=`shown${me}`,Zd=`hide${me}`,fi=`hidePrevented${me}`,oa=`hidden${me}`,eh=`resize${me}`,th=`click${me}${sa}`,nh=`keydown.dismiss${me}`,rh='[data-bs-toggle="offcanvas"]',sh={backdrop:!0,keyboard:!0,scroll:!1},ih={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ne extends Z{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return sh}static get DefaultType(){return ih}static get NAME(){return Kd}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||f.trigger(this._element,Xd,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Lr().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(di);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ui),this._element.classList.remove(di),f.trigger(this._element,Qd,{relatedTarget:e})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||f.trigger(this._element,Zd).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(hi),this._backdrop.hide();const t=()=>{this._element.classList.remove(ui,hi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Lr().reset(),f.trigger(this._element,oa)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){f.trigger(this._element,fi);return}this.hide()},t=!!this._config.backdrop;return new ea({className:Jd,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new ta({trapElement:this._element})}_addEventListeners(){f.on(this._element,nh,e=>{if(e.key===Yd){if(this._config.keyboard){this.hide();return}f.trigger(this._element,fi)}})}static jQueryInterface(e){return this.each(function(){const t=Ne.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}f.on(document,th,rh,function(n){const e=v.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ce(this))return;f.one(e,oa,()=>{vt(this)&&this.focus()});const t=v.findOne(ia);t&&t!==e&&Ne.getInstance(t).hide(),Ne.getOrCreateInstance(e).toggle(this)});f.on(window,Gd,()=>{for(const n of v.find(ia))Ne.getOrCreateInstance(n).show()});f.on(window,eh,()=>{for(const n of v.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&Ne.getOrCreateInstance(n).hide()});Un(Ne);Y(Ne);const oh=/^aria-[\w-]*$/i,aa={"*":["class","dir","id","lang","role",oh],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ah=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ch=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,lh=(n,e)=>{const t=n.nodeName.toLowerCase();return e.includes(t)?ah.has(t)?!!ch.test(n.nodeValue):!0:e.filter(r=>r instanceof RegExp).some(r=>r.test(t))};function uh(n,e,t){if(!n.length)return n;if(t&&typeof t=="function")return t(n);const s=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(e["*"]||[],e[a]||[]);for(const u of c)lh(u,l)||o.removeAttribute(u.nodeName)}return s.body.innerHTML}const dh="TemplateFactory",hh={allowList:aa,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},fh={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ph={entry:"(string|element|function|null)",selector:"(string|element)"};class mh extends Ht{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return hh}static get DefaultType(){return fh}static get NAME(){return dh}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(e,i,s);const t=e.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&t.classList.add(...r.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,r]of Object.entries(e))super._typeCheckConfig({selector:t,entry:r},ph)}_setContent(e,t,r){const s=v.findOne(r,e);if(s){if(t=this._resolvePossibleFunction(t),!t){s.remove();return}if(le(t)){this._putElementInTemplate(Oe(t),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(t);return}s.textContent=t}}_maybeSanitize(e){return this._config.sanitize?uh(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return F(e,[this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const _h="tooltip",gh=new Set(["sanitize","allowList","sanitizeFn"]),lr="fade",Eh="modal",an="show",vh=".tooltip-inner",pi=`.${Eh}`,mi="hide.bs.modal",Nt="hover",ur="focus",bh="click",yh="manual",wh="hide",Th="hidden",Ah="show",Sh="shown",Ih="inserted",Oh="click",Ch="focusin",Nh="focusout",Rh="mouseenter",Dh="mouseleave",Ph={AUTO:"auto",TOP:"top",RIGHT:q()?"left":"right",BOTTOM:"bottom",LEFT:q()?"right":"left"},Lh={allowList:aa,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},kh={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class yt extends Z{constructor(e,t){if(typeof ko>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Lh}static get DefaultType(){return kh}static get NAME(){return _h}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),f.off(this._element.closest(pi),mi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=f.trigger(this._element,this.constructor.eventName(Ah)),r=($o(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),f.trigger(this._element,this.constructor.eventName(Ih))),this._popper=this._createPopper(s),s.classList.add(an),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))f.on(a,"mouseover",wn);const o=()=>{f.trigger(this._element,this.constructor.eventName(Sh)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||f.trigger(this._element,this.constructor.eventName(wh)).defaultPrevented)return;if(this._getTipElement().classList.remove(an),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))f.off(s,"mouseover",wn);this._activeTrigger[bh]=!1,this._activeTrigger[ur]=!1,this._activeTrigger[Nt]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),f.trigger(this._element,this.constructor.eventName(Th)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(lr,an),t.classList.add(`bs-${this.constructor.NAME}-auto`);const r=bl(this.constructor.NAME).toString();return t.setAttribute("id",r),this._isAnimated()&&t.classList.add(lr),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new mh({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[vh]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(lr)}_isShown(){return this.tip&&this.tip.classList.contains(an)}_createPopper(e){const t=F(this._config.placement,[this,e,this._element]),r=Ph[t.toUpperCase()];return as(this._element,e,this._getPopperConfig(r))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return F(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...t,...F(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")f.on(this._element,this.constructor.eventName(Oh),this._config.selector,r=>{this._initializeOnDelegatedTarget(r).toggle()});else if(t!==yh){const r=t===Nt?this.constructor.eventName(Rh):this.constructor.eventName(Ch),s=t===Nt?this.constructor.eventName(Dh):this.constructor.eventName(Nh);f.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?ur:Nt]=!0,o._enter()}),f.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?ur:Nt]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},f.on(this._element.closest(pi),mi,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=ue.getDataAttributes(this._element);for(const r of Object.keys(t))gh.has(r)&&delete t[r];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Oe(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,r]of Object.entries(this._config))this.constructor.Default[t]!==r&&(e[t]=r);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=yt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Y(yt);const Mh="popover",xh=".popover-header",$h=".popover-body",Uh={...yt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Fh={...yt.DefaultType,content:"(null|string|element|function)"};class ds extends yt{static get Default(){return Uh}static get DefaultType(){return Fh}static get NAME(){return Mh}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[xh]:this._getTitle(),[$h]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=ds.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Y(ds);const Bh="scrollspy",Hh="bs.scrollspy",hs=`.${Hh}`,Vh=".data-api",jh=`activate${hs}`,_i=`click${hs}`,Wh=`load${hs}${Vh}`,zh="dropdown-item",Ze="active",Kh='[data-bs-spy="scroll"]',dr="[href]",qh=".nav, .list-group",gi=".nav-link",Gh=".nav-item",Yh=".list-group-item",Jh=`${gi}, ${Gh} > ${gi}, ${Yh}`,Xh=".dropdown",Qh=".dropdown-toggle",Zh={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},ef={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Hn extends Z{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Zh}static get DefaultType(){return ef}static get NAME(){return Bh}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Oe(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(f.off(this._config.target,_i),f.on(this._config.target,_i,dr,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const r=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),r=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(r(o),!s)return;continue}!i&&!a&&r(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=v.find(dr,this._config.target);for(const t of e){if(!t.hash||Ce(t))continue;const r=v.findOne(decodeURI(t.hash),this._element);vt(r)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,r))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Ze),this._activateParents(e),f.trigger(this._element,jh,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(zh)){v.findOne(Qh,e.closest(Xh)).classList.add(Ze);return}for(const t of v.parents(e,qh))for(const r of v.prev(t,Jh))r.classList.add(Ze)}_clearActiveClass(e){e.classList.remove(Ze);const t=v.find(`${dr}.${Ze}`,e);for(const r of t)r.classList.remove(Ze)}static jQueryInterface(e){return this.each(function(){const t=Hn.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}f.on(window,Wh,()=>{for(const n of v.find(Kh))Hn.getOrCreateInstance(n)});Y(Hn);const tf="tab",nf="bs.tab",Je=`.${nf}`,rf=`hide${Je}`,sf=`hidden${Je}`,of=`show${Je}`,af=`shown${Je}`,cf=`click${Je}`,lf=`keydown${Je}`,uf=`load${Je}`,df="ArrowLeft",Ei="ArrowRight",hf="ArrowUp",vi="ArrowDown",hr="Home",bi="End",He="active",yi="fade",fr="show",ff="dropdown",ca=".dropdown-toggle",pf=".dropdown-menu",pr=`:not(${ca})`,mf='.list-group, .nav, [role="tablist"]',_f=".nav-item, .list-group-item",gf=`.nav-link${pr}, .list-group-item${pr}, [role="tab"]${pr}`,la='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',mr=`${gf}, ${la}`,Ef=`.${He}[data-bs-toggle="tab"], .${He}[data-bs-toggle="pill"], .${He}[data-bs-toggle="list"]`;class mt extends Z{constructor(e){super(e),this._parent=this._element.closest(mf),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),f.on(this._element,lf,t=>this._keydown(t)))}static get NAME(){return tf}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),r=t?f.trigger(t,rf,{relatedTarget:e}):null;f.trigger(e,of,{relatedTarget:t}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(He),this._activate(v.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(fr);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),f.trigger(e,af,{relatedTarget:t})};this._queueCallback(r,e,e.classList.contains(yi))}_deactivate(e,t){if(!e)return;e.classList.remove(He),e.blur(),this._deactivate(v.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(fr);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),f.trigger(e,sf,{relatedTarget:t})};this._queueCallback(r,e,e.classList.contains(yi))}_keydown(e){if(![df,Ei,hf,vi,hr,bi].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(s=>!Ce(s));let r;if([hr,bi].includes(e.key))r=t[e.key===hr?0:t.length-1];else{const s=[Ei,vi].includes(e.key);r=cs(t,e.target,s,!0)}r&&(r.focus({preventScroll:!0}),mt.getOrCreateInstance(r).show())}_getChildren(){return v.find(mr,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const r of t)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),r=this._getOuterElement(e);e.setAttribute("aria-selected",t),r!==e&&this._setAttributeIfNotExists(r,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=v.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const r=this._getOuterElement(e);if(!r.classList.contains(ff))return;const s=(i,o)=>{const a=v.findOne(i,r);a&&a.classList.toggle(o,t)};s(ca,He),s(pf,fr),r.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,r){e.hasAttribute(t)||e.setAttribute(t,r)}_elemIsActive(e){return e.classList.contains(He)}_getInnerElement(e){return e.matches(mr)?e:v.findOne(mr,e)}_getOuterElement(e){return e.closest(_f)||e}static jQueryInterface(e){return this.each(function(){const t=mt.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}f.on(document,cf,la,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Ce(this)&&mt.getOrCreateInstance(this).show()});f.on(window,uf,()=>{for(const n of v.find(Ef))mt.getOrCreateInstance(n)});Y(mt);const vf="toast",bf="bs.toast",Pe=`.${bf}`,yf=`mouseover${Pe}`,wf=`mouseout${Pe}`,Tf=`focusin${Pe}`,Af=`focusout${Pe}`,Sf=`hide${Pe}`,If=`hidden${Pe}`,Of=`show${Pe}`,Cf=`shown${Pe}`,Nf="fade",wi="hide",cn="show",ln="showing",Rf={animation:"boolean",autohide:"boolean",delay:"number"},Df={animation:!0,autohide:!0,delay:5e3};class Vn extends Z{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Df}static get DefaultType(){return Rf}static get NAME(){return vf}show(){if(f.trigger(this._element,Of).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Nf);const t=()=>{this._element.classList.remove(ln),f.trigger(this._element,Cf),this._maybeScheduleHide()};this._element.classList.remove(wi),Bt(this._element),this._element.classList.add(cn,ln),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||f.trigger(this._element,Sf).defaultPrevented)return;const t=()=>{this._element.classList.add(wi),this._element.classList.remove(ln,cn),f.trigger(this._element,If)};this._element.classList.add(ln),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(cn),super.dispose()}isShown(){return this._element.classList.contains(cn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const r=e.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){f.on(this._element,yf,e=>this._onInteraction(e,!0)),f.on(this._element,wf,e=>this._onInteraction(e,!1)),f.on(this._element,Tf,e=>this._onInteraction(e,!0)),f.on(this._element,Af,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=Vn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Un(Vn);Y(Vn);function ua(n,e){return function(){return n.apply(e,arguments)}}const{toString:Pf}=Object.prototype,{getPrototypeOf:fs}=Object,jn=(n=>e=>{const t=Pf.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),ee=n=>(n=n.toLowerCase(),e=>jn(e)===n),Wn=n=>e=>typeof e===n,{isArray:wt}=Array,Mt=Wn("undefined");function Lf(n){return n!==null&&!Mt(n)&&n.constructor!==null&&!Mt(n.constructor)&&V(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const da=ee("ArrayBuffer");function kf(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&da(n.buffer),e}const Mf=Wn("string"),V=Wn("function"),ha=Wn("number"),zn=n=>n!==null&&typeof n=="object",xf=n=>n===!0||n===!1,pn=n=>{if(jn(n)!=="object")return!1;const e=fs(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},$f=ee("Date"),Uf=ee("File"),Ff=ee("Blob"),Bf=ee("FileList"),Hf=n=>zn(n)&&V(n.pipe),Vf=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||V(n.append)&&((e=jn(n))==="formdata"||e==="object"&&V(n.toString)&&n.toString()==="[object FormData]"))},jf=ee("URLSearchParams"),[Wf,zf,Kf,qf]=["ReadableStream","Request","Response","Headers"].map(ee),Gf=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wt(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,s;if(typeof n!="object"&&(n=[n]),wt(n))for(r=0,s=n.length;r<s;r++)e.call(null,n[r],r,n);else{const i=t?Object.getOwnPropertyNames(n):Object.keys(n),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,n[a],a,n)}}function fa(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,s;for(;r-- >0;)if(s=t[r],e===s.toLowerCase())return s;return null}const Ve=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),pa=n=>!Mt(n)&&n!==Ve;function kr(){const{caseless:n}=pa(this)&&this||{},e={},t=(r,s)=>{const i=n&&fa(e,s)||s;pn(e[i])&&pn(r)?e[i]=kr(e[i],r):pn(r)?e[i]=kr({},r):wt(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Wt(arguments[r],t);return e}const Yf=(n,e,t,{allOwnKeys:r}={})=>(Wt(e,(s,i)=>{t&&V(s)?n[i]=ua(s,t):n[i]=s},{allOwnKeys:r}),n),Jf=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Xf=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Qf=(n,e,t,r)=>{let s,i,o;const a={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),i=s.length;i-- >0;)o=s[i],(!r||r(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&fs(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Zf=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},ep=n=>{if(!n)return null;if(wt(n))return n;let e=n.length;if(!ha(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},tp=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&fs(Uint8Array)),np=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(n,i[0],i[1])}},rp=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},sp=ee("HTMLFormElement"),ip=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,s){return r.toUpperCase()+s}),Ti=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),op=ee("RegExp"),ma=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Wt(t,(s,i)=>{let o;(o=e(s,i,n))!==!1&&(r[i]=o||s)}),Object.defineProperties(n,r)},ap=n=>{ma(n,(e,t)=>{if(V(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(V(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},cp=(n,e)=>{const t={},r=s=>{s.forEach(i=>{t[i]=!0})};return wt(n)?r(n):r(String(n).split(e)),t},lp=()=>{},up=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e,_r="abcdefghijklmnopqrstuvwxyz",Ai="0123456789",_a={DIGIT:Ai,ALPHA:_r,ALPHA_DIGIT:_r+_r.toUpperCase()+Ai},dp=(n=16,e=_a.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function hp(n){return!!(n&&V(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const fp=n=>{const e=new Array(10),t=(r,s)=>{if(zn(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=wt(r)?[]:{};return Wt(r,(o,a)=>{const c=t(o,s+1);!Mt(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return t(n,0)},pp=ee("AsyncFunction"),mp=n=>n&&(zn(n)||V(n))&&V(n.then)&&V(n.catch),ga=((n,e)=>n?setImmediate:e?((t,r)=>(Ve.addEventListener("message",({source:s,data:i})=>{s===Ve&&i===t&&r.length&&r.shift()()},!1),s=>{r.push(s),Ve.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",V(Ve.postMessage)),_p=typeof queueMicrotask<"u"?queueMicrotask.bind(Ve):typeof process<"u"&&process.nextTick||ga,d={isArray:wt,isArrayBuffer:da,isBuffer:Lf,isFormData:Vf,isArrayBufferView:kf,isString:Mf,isNumber:ha,isBoolean:xf,isObject:zn,isPlainObject:pn,isReadableStream:Wf,isRequest:zf,isResponse:Kf,isHeaders:qf,isUndefined:Mt,isDate:$f,isFile:Uf,isBlob:Ff,isRegExp:op,isFunction:V,isStream:Hf,isURLSearchParams:jf,isTypedArray:tp,isFileList:Bf,forEach:Wt,merge:kr,extend:Yf,trim:Gf,stripBOM:Jf,inherits:Xf,toFlatObject:Qf,kindOf:jn,kindOfTest:ee,endsWith:Zf,toArray:ep,forEachEntry:np,matchAll:rp,isHTMLForm:sp,hasOwnProperty:Ti,hasOwnProp:Ti,reduceDescriptors:ma,freezeMethods:ap,toObjectSet:cp,toCamelCase:ip,noop:lp,toFiniteNumber:up,findKey:fa,global:Ve,isContextDefined:pa,ALPHABET:_a,generateString:dp,isSpecCompliantForm:hp,toJSONObject:fp,isAsyncFn:pp,isThenable:mp,setImmediate:ga,asap:_p};function I(n,e,t,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}d.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.status}}});const Ea=I.prototype,va={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{va[n]={value:n}});Object.defineProperties(I,va);Object.defineProperty(Ea,"isAxiosError",{value:!0});I.from=(n,e,t,r,s,i)=>{const o=Object.create(Ea);return d.toFlatObject(n,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),I.call(o,n.message,e,t,r,s),o.cause=n,o.name=n.name,i&&Object.assign(o,i),o};const gp=null;function Mr(n){return d.isPlainObject(n)||d.isArray(n)}function ba(n){return d.endsWith(n,"[]")?n.slice(0,-2):n}function Si(n,e,t){return n?n.concat(e).map(function(s,i){return s=ba(s),!t&&i?"["+s+"]":s}).join(t?".":""):e}function Ep(n){return d.isArray(n)&&!n.some(Mr)}const vp=d.toFlatObject(d,{},null,function(e){return/^is[A-Z]/.test(e)});function Kn(n,e,t){if(!d.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=d.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!d.isUndefined(p[_])});const r=t.metaTokens,s=t.visitor||u,i=t.dots,o=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(e);if(!d.isFunction(s))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(d.isDate(m))return m.toISOString();if(!c&&d.isBlob(m))throw new I("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(m)||d.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,_,p){let b=m;if(m&&!p&&typeof m=="object"){if(d.endsWith(_,"{}"))_=r?_:_.slice(0,-2),m=JSON.stringify(m);else if(d.isArray(m)&&Ep(m)||(d.isFileList(m)||d.endsWith(_,"[]"))&&(b=d.toArray(m)))return _=ba(_),b.forEach(function(S,y){!(d.isUndefined(S)||S===null)&&e.append(o===!0?Si([_],y,i):o===null?_:_+"[]",l(S))}),!1}return Mr(m)?!0:(e.append(Si(p,_,i),l(m)),!1)}const h=[],g=Object.assign(vp,{defaultVisitor:u,convertValue:l,isVisitable:Mr});function E(m,_){if(!d.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(m),d.forEach(m,function(b,A){(!(d.isUndefined(b)||b===null)&&s.call(e,b,d.isString(A)?A.trim():A,_,g))===!0&&E(b,_?_.concat(A):[A])}),h.pop()}}if(!d.isObject(n))throw new TypeError("data must be an object");return E(n),e}function Ii(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function ps(n,e){this._pairs=[],n&&Kn(n,this,e)}const ya=ps.prototype;ya.append=function(e,t){this._pairs.push([e,t])};ya.toString=function(e){const t=e?function(r){return e.call(this,r,Ii)}:Ii;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function bp(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wa(n,e,t){if(!e)return n;const r=t&&t.encode||bp,s=t&&t.serialize;let i;if(s?i=s(e,t):i=d.isURLSearchParams(e)?e.toString():new ps(e,t).toString(r),i){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+i}return n}class yp{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){d.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Oi=yp,Ta={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wp=typeof URLSearchParams<"u"?URLSearchParams:ps,Tp=typeof FormData<"u"?FormData:null,Ap=typeof Blob<"u"?Blob:null,Sp={isBrowser:!0,classes:{URLSearchParams:wp,FormData:Tp,Blob:Ap},protocols:["http","https","file","blob","url","data"]},ms=typeof window<"u"&&typeof document<"u",xr=typeof navigator=="object"&&navigator||void 0,Ip=ms&&(!xr||["ReactNative","NativeScript","NS"].indexOf(xr.product)<0),Op=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Cp=ms&&window.location.href||"http://localhost",Np=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ms,hasStandardBrowserEnv:Ip,hasStandardBrowserWebWorkerEnv:Op,navigator:xr,origin:Cp},Symbol.toStringTag,{value:"Module"})),B={...Np,...Sp};function Rp(n,e){return Kn(n,new B.classes.URLSearchParams,Object.assign({visitor:function(t,r,s,i){return B.isNode&&d.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Dp(n){return d.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Pp(n){const e={},t=Object.keys(n);let r;const s=t.length;let i;for(r=0;r<s;r++)i=t[r],e[i]=n[i];return e}function Aa(n){function e(t,r,s,i){let o=t[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=t.length;return o=!o&&d.isArray(s)?s.length:o,c?(d.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!d.isObject(s[o]))&&(s[o]=[]),e(t,r,s[o],i)&&d.isArray(s[o])&&(s[o]=Pp(s[o])),!a)}if(d.isFormData(n)&&d.isFunction(n.entries)){const t={};return d.forEachEntry(n,(r,s)=>{e(Dp(r),s,t,0)}),t}return null}function Lp(n,e,t){if(d.isString(n))try{return(e||JSON.parse)(n),d.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const _s={transitional:Ta,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",s=r.indexOf("application/json")>-1,i=d.isObject(e);if(i&&d.isHTMLForm(e)&&(e=new FormData(e)),d.isFormData(e))return s?JSON.stringify(Aa(e)):e;if(d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)||d.isReadableStream(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Rp(e,this.formSerializer).toString();if((a=d.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Kn(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(t.setContentType("application/json",!1),Lp(e)):e}],transformResponse:[function(e){const t=this.transitional||_s.transitional,r=t&&t.forcedJSONParsing,s=this.responseType==="json";if(d.isResponse(e)||d.isReadableStream(e))return e;if(e&&d.isString(e)&&(r&&!this.responseType||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?I.from(a,I.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],n=>{_s.headers[n]={}});const gs=_s,kp=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mp=n=>{const e={};let t,r,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!t||e[t]&&kp[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},Ci=Symbol("internals");function Rt(n){return n&&String(n).trim().toLowerCase()}function mn(n){return n===!1||n==null?n:d.isArray(n)?n.map(mn):String(n)}function xp(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const $p=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function gr(n,e,t,r,s){if(d.isFunction(r))return r.call(this,e,t);if(s&&(e=t),!!d.isString(e)){if(d.isString(r))return e.indexOf(r)!==-1;if(d.isRegExp(r))return r.test(e)}}function Up(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function Fp(n,e){const t=d.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class qn{constructor(e){e&&this.set(e)}set(e,t,r){const s=this;function i(a,c,l){const u=Rt(c);if(!u)throw new Error("header name must be a non-empty string");const h=d.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||c]=mn(a))}const o=(a,c)=>d.forEach(a,(l,u)=>i(l,u,c));if(d.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(d.isString(e)&&(e=e.trim())&&!$p(e))o(Mp(e),t);else if(d.isHeaders(e))for(const[a,c]of e.entries())i(c,a,r);else e!=null&&i(t,e,r);return this}get(e,t){if(e=Rt(e),e){const r=d.findKey(this,e);if(r){const s=this[r];if(!t)return s;if(t===!0)return xp(s);if(d.isFunction(t))return t.call(this,s,r);if(d.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Rt(e),e){const r=d.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||gr(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let s=!1;function i(o){if(o=Rt(o),o){const a=d.findKey(r,o);a&&(!t||gr(r,r[a],a,t))&&(delete r[a],s=!0)}}return d.isArray(e)?e.forEach(i):i(e),s}clear(e){const t=Object.keys(this);let r=t.length,s=!1;for(;r--;){const i=t[r];(!e||gr(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const t=this,r={};return d.forEach(this,(s,i)=>{const o=d.findKey(r,i);if(o){t[o]=mn(s),delete t[i];return}const a=e?Up(i):String(i).trim();a!==i&&delete t[i],t[a]=mn(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return d.forEach(this,(r,s)=>{r!=null&&r!==!1&&(t[s]=e&&d.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ci]=this[Ci]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Rt(o);r[a]||(Fp(s,o),r[a]=!0)}return d.isArray(e)?e.forEach(i):i(e),this}}qn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(qn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});d.freezeMethods(qn);const Q=qn;function Er(n,e){const t=this||gs,r=e||t,s=Q.from(r.headers);let i=r.data;return d.forEach(n,function(a){i=a.call(t,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Sa(n){return!!(n&&n.__CANCEL__)}function Tt(n,e,t){I.call(this,n??"canceled",I.ERR_CANCELED,e,t),this.name="CanceledError"}d.inherits(Tt,I,{__CANCEL__:!0});function Ia(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new I("Request failed with status code "+t.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Bp(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Hp(n,e){n=n||10;const t=new Array(n),r=new Array(n);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),t[s]=c,r[s]=l;let h=i,g=0;for(;h!==s;)g+=t[h++],h=h%n;if(s=(s+1)%n,s===i&&(i=(i+1)%n),l-o<e)return;const E=u&&l-u;return E?Math.round(g*1e3/E):void 0}}function Vp(n,e){let t=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{t=u,s=null,i&&(clearTimeout(i),i=null),n.apply(null,l)};return[(...l)=>{const u=Date.now(),h=u-t;h>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-h)))},()=>s&&o(s)]}const Sn=(n,e,t=3)=>{let r=0;const s=Hp(50,250);return Vp(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(h)},t)},Ni=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},Ri=n=>(...e)=>d.asap(()=>n(...e)),jp=B.hasStandardBrowserEnv?function(){const e=B.navigator&&/(msie|trident)/i.test(B.navigator.userAgent),t=document.createElement("a");let r;function s(i){let o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=s(window.location.href),function(o){const a=d.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),Wp=B.hasStandardBrowserEnv?{write(n,e,t,r,s,i){const o=[n+"="+encodeURIComponent(e)];d.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),d.isString(r)&&o.push("path="+r),d.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zp(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Kp(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Oa(n,e){return n&&!zp(e)?Kp(n,e):e}const Di=n=>n instanceof Q?{...n}:n;function qe(n,e){e=e||{};const t={};function r(l,u,h){return d.isPlainObject(l)&&d.isPlainObject(u)?d.merge.call({caseless:h},l,u):d.isPlainObject(u)?d.merge({},u):d.isArray(u)?u.slice():u}function s(l,u,h){if(d.isUndefined(u)){if(!d.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function i(l,u){if(!d.isUndefined(u))return r(void 0,u)}function o(l,u){if(d.isUndefined(u)){if(!d.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in e)return r(l,u);if(h in n)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Di(l),Di(u),!0)};return d.forEach(Object.keys(Object.assign({},n,e)),function(u){const h=c[u]||s,g=h(n[u],e[u],u);d.isUndefined(g)&&h!==a||(t[u]=g)}),t}const Ca=n=>{const e=qe({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Q.from(o),e.url=wa(Oa(e.baseURL,e.url),n.params,n.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(d.isFormData(t)){if(B.hasStandardBrowserEnv||B.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(B.hasStandardBrowserEnv&&(r&&d.isFunction(r)&&(r=r(e)),r||r!==!1&&jp(e.url))){const l=s&&i&&Wp.read(i);l&&o.set(s,l)}return e},qp=typeof XMLHttpRequest<"u",Gp=qp&&function(n){return new Promise(function(t,r){const s=Ca(n);let i=s.data;const o=Q.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,h,g,E,m;function _(){E&&E(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function b(){if(!p)return;const S=Q.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:S,config:n,request:p};Ia(function(C){t(C),_()},function(C){r(C),_()},w),p=null}"onloadend"in p?p.onloadend=b:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(b)},p.onabort=function(){p&&(r(new I("Request aborted",I.ECONNABORTED,n,p)),p=null)},p.onerror=function(){r(new I("Network Error",I.ERR_NETWORK,n,p)),p=null},p.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const w=s.transitional||Ta;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),r(new I(y,w.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,n,p)),p=null},i===void 0&&o.setContentType(null),"setRequestHeader"in p&&d.forEach(o.toJSON(),function(y,w){p.setRequestHeader(w,y)}),d.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),l&&([g,m]=Sn(l,!0),p.addEventListener("progress",g)),c&&p.upload&&([h,E]=Sn(c),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=S=>{p&&(r(!S||S.type?new Tt(null,n,p):S),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const A=Bp(s.url);if(A&&B.protocols.indexOf(A)===-1){r(new I("Unsupported protocol "+A+":",I.ERR_BAD_REQUEST,n));return}p.send(i||null)})},Yp=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof I?u:new Tt(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new I(`timeout ${e} of ms exceeded`,I.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),n=null)};n.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>d.asap(a),c}},Jp=Yp,Xp=function*(n,e){let t=n.byteLength;if(!e||t<e){yield n;return}let r=0,s;for(;r<t;)s=r+e,yield n.slice(r,s),r=s},Qp=async function*(n,e){for await(const t of Zp(n))yield*Xp(t,e)},Zp=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},Pi=(n,e,t,r)=>{const s=Qp(n,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let h=u.byteLength;if(t){let g=i+=h;t(g)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Gn=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Na=Gn&&typeof ReadableStream=="function",em=Gn&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Ra=(n,...e)=>{try{return!!n(...e)}catch{return!1}},tm=Na&&Ra(()=>{let n=!1;const e=new Request(B.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),Li=64*1024,$r=Na&&Ra(()=>d.isReadableStream(new Response("").body)),In={stream:$r&&(n=>n.body)};Gn&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!In[e]&&(In[e]=d.isFunction(n[e])?t=>t[e]():(t,r)=>{throw new I(`Response type '${e}' is not supported`,I.ERR_NOT_SUPPORT,r)})})})(new Response);const nm=async n=>{if(n==null)return 0;if(d.isBlob(n))return n.size;if(d.isSpecCompliantForm(n))return(await new Request(B.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(d.isArrayBufferView(n)||d.isArrayBuffer(n))return n.byteLength;if(d.isURLSearchParams(n)&&(n=n+""),d.isString(n))return(await em(n)).byteLength},rm=async(n,e)=>{const t=d.toFiniteNumber(n.getContentLength());return t??nm(e)},sm=Gn&&(async n=>{let{url:e,method:t,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:g}=Ca(n);l=l?(l+"").toLowerCase():"text";let E=Jp([s,i&&i.toAbortSignal()],o),m;const _=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let p;try{if(c&&tm&&t!=="get"&&t!=="head"&&(p=await rm(u,r))!==0){let w=new Request(e,{method:"POST",body:r,duplex:"half"}),O;if(d.isFormData(r)&&(O=w.headers.get("content-type"))&&u.setContentType(O),w.body){const[C,D]=Ni(p,Sn(Ri(c)));r=Pi(w.body,Li,C,D)}}d.isString(h)||(h=h?"include":"omit");const b="credentials"in Request.prototype;m=new Request(e,{...g,signal:E,method:t.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:b?h:void 0});let A=await fetch(m);const S=$r&&(l==="stream"||l==="response");if($r&&(a||S&&_)){const w={};["status","statusText","headers"].forEach(R=>{w[R]=A[R]});const O=d.toFiniteNumber(A.headers.get("content-length")),[C,D]=a&&Ni(O,Sn(Ri(a),!0))||[];A=new Response(Pi(A.body,Li,C,()=>{D&&D(),_&&_()}),w)}l=l||"text";let y=await In[d.findKey(In,l)||"text"](A,n);return!S&&_&&_(),await new Promise((w,O)=>{Ia(w,O,{data:y,headers:Q.from(A.headers),status:A.status,statusText:A.statusText,config:n,request:m})})}catch(b){throw _&&_(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,n,m),{cause:b.cause||b}):I.from(b,b&&b.code,n,m)}}),Ur={http:gp,xhr:Gp,fetch:sm};d.forEach(Ur,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const ki=n=>`- ${n}`,im=n=>d.isFunction(n)||n===null||n===!1,Da={getAdapter:n=>{n=d.isArray(n)?n:[n];const{length:e}=n;let t,r;const s={};for(let i=0;i<e;i++){t=n[i];let o;if(r=t,!im(t)&&(r=Ur[(o=String(t)).toLowerCase()],r===void 0))throw new I(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ki).join(`
`):" "+ki(i[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ur};function vr(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Tt(null,n)}function Mi(n){return vr(n),n.headers=Q.from(n.headers),n.data=Er.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Da.getAdapter(n.adapter||gs.adapter)(n).then(function(r){return vr(n),r.data=Er.call(n,n.transformResponse,r),r.headers=Q.from(r.headers),r},function(r){return Sa(r)||(vr(n),r&&r.response&&(r.response.data=Er.call(n,n.transformResponse,r.response),r.response.headers=Q.from(r.response.headers))),Promise.reject(r)})}const Pa="1.7.7",Es={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Es[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const xi={};Es.transitional=function(e,t,r){function s(i,o){return"[Axios v"+Pa+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new I(s(o," has been removed"+(t?" in "+t:"")),I.ERR_DEPRECATED);return t&&!xi[o]&&(xi[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,a):!0}};function om(n,e,t){if(typeof n!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=n[i],c=a===void 0||o(a,i,n);if(c!==!0)throw new I("option "+i+" must be "+c,I.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}}const Fr={assertOptions:om,validators:Es},Ee=Fr.validators;class On{constructor(e){this.defaults=e,this.interceptors={request:new Oi,response:new Oi}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=qe(this.defaults,t);const{transitional:r,paramsSerializer:s,headers:i}=t;r!==void 0&&Fr.assertOptions(r,{silentJSONParsing:Ee.transitional(Ee.boolean),forcedJSONParsing:Ee.transitional(Ee.boolean),clarifyTimeoutError:Ee.transitional(Ee.boolean)},!1),s!=null&&(d.isFunction(s)?t.paramsSerializer={serialize:s}:Fr.assertOptions(s,{encode:Ee.function,serialize:Ee.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&d.merge(i.common,i[t.method]);i&&d.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),t.headers=Q.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(t)===!1||(c=c&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,h=0,g;if(!c){const m=[Mi.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,l),g=m.length,u=Promise.resolve(t);h<g;)u=u.then(m[h++],m[h++]);return u}g=a.length;let E=t;for(h=0;h<g;){const m=a[h++],_=a[h++];try{E=m(E)}catch(p){_.call(this,p);break}}try{u=Mi.call(this,E)}catch(m){return Promise.reject(m)}for(h=0,g=l.length;h<g;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=qe(this.defaults,e);const t=Oa(e.baseURL,e.url);return wa(t,e.params,e.paramsSerializer)}}d.forEach(["delete","get","head","options"],function(e){On.prototype[e]=function(t,r){return this.request(qe(r||{},{method:e,url:t,data:(r||{}).data}))}});d.forEach(["post","put","patch"],function(e){function t(r){return function(i,o,a){return this.request(qe(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}On.prototype[e]=t(),On.prototype[e+"Form"]=t(!0)});const _n=On;class vs{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Tt(i,o,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new vs(function(s){e=s}),cancel:e}}}const am=vs;function cm(n){return function(t){return n.apply(null,t)}}function lm(n){return d.isObject(n)&&n.isAxiosError===!0}const Br={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Br).forEach(([n,e])=>{Br[e]=n});const um=Br;function La(n){const e=new _n(n),t=ua(_n.prototype.request,e);return d.extend(t,_n.prototype,e,{allOwnKeys:!0}),d.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return La(qe(n,s))},t}const L=La(gs);L.Axios=_n;L.CanceledError=Tt;L.CancelToken=am;L.isCancel=Sa;L.VERSION=Pa;L.toFormData=Kn;L.AxiosError=I;L.Cancel=L.CanceledError;L.all=function(e){return Promise.all(e)};L.spread=cm;L.isAxiosError=lm;L.mergeConfig=qe;L.AxiosHeaders=Q;L.formToJSON=n=>Aa(d.isHTMLForm(n)?new FormData(n):n);L.getAdapter=Da.getAdapter;L.HttpStatusCode=um;L.default=L;const dm=L;window.axios=dm;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},hm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|l>>6,E=l&63;c||(E=64,o||(g=64)),r.push(t[u],t[h],t[g],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ka(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new fm;const g=i<<2|a>>4;if(r.push(g),l!==64){const E=a<<4&240|l>>2;if(r.push(E),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pm=function(n){const e=ka(n);return Ma.encodeByteArray(e,!0)},xa=function(n){return pm(n).replace(/\./g,"")},$a=function(n){try{return Ma.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=()=>mm().__FIREBASE_DEFAULTS__,gm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Em=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$a(n[1]);return e&&JSON.parse(e)},bs=()=>{try{return _m()||gm()||Em()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vm=n=>{var e,t;return(t=(e=bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ua=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.config},Fa=n=>{var e;return(e=bs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function wm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Am(){const n=U();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sm(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="FirebaseError";class Le extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Om,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Cm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Le(s,a,r)}}function Cm(n,e){return n.replace(Nm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Nm=/\{\$([^}]+)}/g;function Rm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if($i(i)&&$i(o)){if(!Cn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function $i(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dm(n,e){const t=new Pm(n,e);return t.subscribe.bind(t)}class Pm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Lm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=br),s.error===void 0&&(s.error=br),s.complete===void 0&&(s.complete=br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function br(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n){return n&&n._delegate?n._delegate:n}class _t{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xm(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mm(n){return n===Fe?void 0:n}function xm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new km(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const Um={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Fm=N.INFO,Bm={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Hm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Bm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ba{constructor(e){this.name=e,this._logLevel=Fm,this._logHandler=Hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Um[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Vm=(n,e)=>e.some(t=>n instanceof t);let Ui,Fi;function jm(){return Ui||(Ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wm(){return Fi||(Fi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ha=new WeakMap,Hr=new WeakMap,Va=new WeakMap,yr=new WeakMap,ys=new WeakMap;function zm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Se(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ha.set(t,n)}).catch(()=>{}),ys.set(e,n),e}function Km(n){if(Hr.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Hr.set(n,e)}let Vr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Va.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Se(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qm(n){Vr=n(Vr)}function Gm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(wr(this),e,...t);return Va.set(r,e.sort?e.sort():[e]),Se(r)}:Wm().includes(n)?function(...e){return n.apply(wr(this),e),Se(Ha.get(this))}:function(...e){return Se(n.apply(wr(this),e))}}function Ym(n){return typeof n=="function"?Gm(n):(n instanceof IDBTransaction&&Km(n),Vm(n,jm())?new Proxy(n,Vr):n)}function Se(n){if(n instanceof IDBRequest)return zm(n);if(yr.has(n))return yr.get(n);const e=Ym(n);return e!==n&&(yr.set(n,e),ys.set(e,n)),e}const wr=n=>ys.get(n);function Jm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Se(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Se(o.result),c.oldVersion,c.newVersion,Se(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Xm=["get","getKey","getAll","getAllKeys","count"],Qm=["put","add","delete","clear"],Tr=new Map;function Bi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Tr.get(e))return Tr.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Qm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xm.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Tr.set(e,i),i}qm(n=>({...n,get:(e,t,r)=>Bi(e,t)||n.get(e,t,r),has:(e,t)=>!!Bi(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(e_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function e_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",Hi="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Ba("@firebase/app"),t_="@firebase/app-compat",n_="@firebase/analytics-compat",r_="@firebase/analytics",s_="@firebase/app-check-compat",i_="@firebase/app-check",o_="@firebase/auth",a_="@firebase/auth-compat",c_="@firebase/database",l_="@firebase/database-compat",u_="@firebase/functions",d_="@firebase/functions-compat",h_="@firebase/installations",f_="@firebase/installations-compat",p_="@firebase/messaging",m_="@firebase/messaging-compat",__="@firebase/performance",g_="@firebase/performance-compat",E_="@firebase/remote-config",v_="@firebase/remote-config-compat",b_="@firebase/storage",y_="@firebase/storage-compat",w_="@firebase/firestore",T_="@firebase/vertexai-preview",A_="@firebase/firestore-compat",S_="firebase",I_="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]",O_={[jr]:"fire-core",[t_]:"fire-core-compat",[r_]:"fire-analytics",[n_]:"fire-analytics-compat",[i_]:"fire-app-check",[s_]:"fire-app-check-compat",[o_]:"fire-auth",[a_]:"fire-auth-compat",[c_]:"fire-rtdb",[l_]:"fire-rtdb-compat",[u_]:"fire-fn",[d_]:"fire-fn-compat",[h_]:"fire-iid",[f_]:"fire-iid-compat",[p_]:"fire-fcm",[m_]:"fire-fcm-compat",[__]:"fire-perf",[g_]:"fire-perf-compat",[E_]:"fire-rc",[v_]:"fire-rc-compat",[b_]:"fire-gcs",[y_]:"fire-gcs-compat",[w_]:"fire-fst",[A_]:"fire-fst-compat",[T_]:"fire-vertex","fire-js":"fire-js",[S_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Map,C_=new Map,zr=new Map;function Vi(n,e){try{n.container.addComponent(e)}catch(t){he.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(zr.has(e))return he.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,n);for(const t of Nn.values())Vi(t,n);for(const t of C_.values())Vi(t,n);return!0}function ja(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ae(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new zt("app","Firebase",N_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=I_;function Wa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ie.create("bad-app-name",{appName:String(s)});if(t||(t=Ua()),!t)throw Ie.create("no-options");const i=Nn.get(s);if(i){if(Cn(t,i.options)&&Cn(r,i.config))return i;throw Ie.create("duplicate-app",{appName:s})}const o=new $m(s);for(const c of zr.values())o.addComponent(c);const a=new R_(t,r,o);return Nn.set(s,a),a}function D_(n=Wr){const e=Nn.get(n);if(!e&&n===Wr&&Ua())return Wa();if(!e)throw Ie.create("no-app",{appName:n});return e}function it(n,e,t){var r;let s=(r=O_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),he.warn(a.join(" "));return}xt(new _t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebase-heartbeat-database",L_=1,$t="firebase-heartbeat-store";let Ar=null;function za(){return Ar||(Ar=Jm(P_,L_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($t)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),Ar}async function k_(n){try{const t=(await za()).transaction($t),r=await t.objectStore($t).get(Ka(n));return await t.done,r}catch(e){if(e instanceof Le)he.warn(e.message);else{const t=Ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});he.warn(t.message)}}}async function ji(n,e){try{const r=(await za()).transaction($t,"readwrite");await r.objectStore($t).put(e,Ka(n)),await r.done}catch(t){if(t instanceof Le)he.warn(t.message);else{const r=Ie.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});he.warn(r.message)}}}function Ka(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=1024,x_=30*24*60*60*1e3;class $_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=x_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){he.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wi(),{heartbeatsToSend:r,unsentEntries:s}=U_(this._heartbeatsCache.heartbeats),i=xa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return he.warn(t),""}}}function Wi(){return new Date().toISOString().substring(0,10)}function U_(n,e=M_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zi(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zi(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sm()?Im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await k_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ji(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ji(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zi(n){return xa(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n){xt(new _t("platform-logger",e=>new Zm(e),"PRIVATE")),xt(new _t("heartbeat",e=>new $_(e),"PRIVATE")),it(jr,Hi,n),it(jr,Hi,"esm2017"),it("fire-js","")}B_("");var H_="firebase",V_="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(H_,V_,"app");function ws(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j_=qa,Ga=new zt("auth","Firebase",qa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Ba("@firebase/auth");function W_(n,...e){Rn.logLevel<=N.WARN&&Rn.warn(`Auth (${qt}): ${n}`,...e)}function gn(n,...e){Rn.logLevel<=N.ERROR&&Rn.error(`Auth (${qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,...e){throw Ts(n,...e)}function re(n,...e){return Ts(n,...e)}function Ya(n,e,t){const r=Object.assign(Object.assign({},j_()),{[e]:t});return new zt("auth","Firebase",r).create(e,{appName:n.name})}function We(n){return Ya(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ts(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ga.create(n,...e)}function T(n,e,...t){if(!n)throw Ts(e,...t)}function oe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gn(e),new Error(e)}function pe(n,e){n||oe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function z_(){return Ki()==="http:"||Ki()==="https:"}function Ki(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(z_()||wm()||"connection"in navigator)?navigator.onLine:!0}function q_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.shortDelay=e,this.longDelay=t,pe(t>e,"Short delay should be less than long delay!"),this.isMobile=ym()||Tm()}get(){return K_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n,e){pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Gt(3e4,6e4);function Ss(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function St(n,e,t,r,s={}){return Xa(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Kt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Ja.fetch()(Qa(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xa(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},G_),e);try{const s=new X_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw un(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw un(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw un(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw un(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ya(n,u,l);fe(n,u)}}catch(s){if(s instanceof Le)throw s;fe(n,"network-request-failed",{message:String(s)})}}async function J_(n,e,t,r,s={}){const i=await St(n,e,t,r,s);return"mfaPendingCredential"in i&&fe(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Qa(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?As(n.config,s):`${n.config.apiScheme}://${s}`}class X_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(re(this.auth,"network-request-failed")),Y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function un(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=re(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function Za(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Z_(n,e=!1){const t=At(n),r=await t.getIdToken(e),s=Is(r);T(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lt(Sr(s.auth_time)),issuedAtTime:Lt(Sr(s.iat)),expirationTime:Lt(Sr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sr(n){return Number(n)*1e3}function Is(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gn("JWT malformed, contained fewer than 3 sections"),null;try{const s=$a(t);return s?JSON.parse(s):(gn("Failed to decode base64 JWT payload"),null)}catch(s){return gn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qi(n){const e=Is(n);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Le&&eg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function eg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lt(this.lastLoginAt),this.creationTime=Lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ut(n,Za(t,{idToken:r}));T(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ec(i.providerUserInfo):[],a=rg(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qr(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function ng(n){const e=At(n);await Dn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ec(n){return n.map(e=>{var{providerId:t}=e,r=ws(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e){const t=await Xa(n,{},async()=>{const r=Kt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Qa(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ja.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ig(n,e){return St(n,"POST","/v2/accounts:revokeToken",Ss(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){T(e.length!==0,"internal-error");const t=qi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(T(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await sg(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new ot;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(T(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(T(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return oe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e){T(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ae{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ut(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Z_(this,e)}reload(){return ng(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Dn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ae(this.auth.app))return Promise.reject(We(this.auth));const e=await this.getIdToken();return await Ut(this,Q_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=t.createdAt)!==null&&l!==void 0?l:void 0,A=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:y,isAnonymous:w,providerData:O,stsTokenManager:C}=t;T(S&&C,e,"internal-error");const D=ot.fromJSON(this.name,C);T(typeof S=="string",e,"internal-error"),ve(h,e.name),ve(g,e.name),T(typeof y=="boolean",e,"internal-error"),T(typeof w=="boolean",e,"internal-error"),ve(E,e.name),ve(m,e.name),ve(_,e.name),ve(p,e.name),ve(b,e.name),ve(A,e.name);const R=new ae({uid:S,auth:e,email:g,emailVerified:y,displayName:h,isAnonymous:w,photoURL:m,phoneNumber:E,tenantId:_,stsTokenManager:D,createdAt:b,lastLoginAt:A});return O&&Array.isArray(O)&&(R.providerData=O.map(P=>Object.assign({},P))),p&&(R._redirectEventId=p),R}static async _fromIdTokenResponse(e,t,r=!1){const s=new ot;s.updateFromServerResponse(t);const i=new ae({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Dn(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];T(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ec(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ot;a.updateFromIdToken(r);const c=new ae({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map;function ce(n){pe(n instanceof Function,"Expected a class definition");let e=Gi.get(n);return e?(pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gi.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tc.type="NONE";const Yi=tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n,e,t){return`firebase:${n}:${e}:${t}`}class at{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=En(this.userKey,s.apiKey,i),this.fullPersistenceKey=En("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new at(ce(Yi),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ce(Yi);const o=En(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=ae._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new at(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new at(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ic(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ac(e))return"Blackberry";if(cc(e))return"Webos";if(rc(e))return"Safari";if((e.includes("chrome/")||sc(e))&&!e.includes("edge/"))return"Chrome";if(oc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nc(n=U()){return/firefox\//i.test(n)}function rc(n=U()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sc(n=U()){return/crios\//i.test(n)}function ic(n=U()){return/iemobile/i.test(n)}function oc(n=U()){return/android/i.test(n)}function ac(n=U()){return/blackberry/i.test(n)}function cc(n=U()){return/webos/i.test(n)}function Os(n=U()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function og(n=U()){var e;return Os(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ag(){return Am()&&document.documentMode===10}function lc(n=U()){return Os(n)||oc(n)||cc(n)||ac(n)||/windows phone/i.test(n)||ic(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,e=[]){let t;switch(n){case"Browser":t=Ji(U());break;case"Worker":t=`${Ji(U())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(n,e={}){return St(n,"GET","/v2/passwordPolicy",Ss(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=6;class dg{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ug,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xi(this),this.idTokenSubscription=new Xi(this),this.beforeStateQueue=new cg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ga,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ce(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await at.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Za(this,{idToken:e}),r=await ae._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Dn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=q_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ae(this.app))return Promise.reject(We(this));const t=e?At(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ae(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ae(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lg(this),t=new dg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ig(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ce(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&W_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cs(n){return At(n)}class Xi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dm(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fg(n){Ns=n}function pg(n){return Ns.loadJS(n)}function mg(){return Ns.gapiScript}function _g(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e){const t=ja(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Cn(i,e??{}))return s;fe(s,"already-initialized")}return t.initialize({options:e})}function Eg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ce);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vg(n,e,t){const r=Cs(n);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=dc(e),{host:o,port:a}=bg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yg()}function dc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bg(n){const e=dc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qi(o)}}}function Qi(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return oe("not implemented")}_getIdTokenResponse(e){return oe("not implemented")}_linkToIdToken(e,t){return oe("not implemented")}_getReauthenticationResolver(e){return oe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(n,e){return J_(n,"POST","/v1/accounts:signInWithIdp",Ss(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="http://localhost";class Ge extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ws(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ge(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ct(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ct(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}buildRequest(){const e={requestUri:wg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Kt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Yt{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ge._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ye.credential(t,r)}catch{return null}}}ye.GOOGLE_SIGN_IN_METHOD="google.com";ye.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Yt{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.GITHUB_SIGN_IN_METHOD="github.com";we.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Yt{constructor(){super("twitter.com")}static credential(e,t){return Ge._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Te.credential(t,r)}catch{return null}}}Te.TWITTER_SIGN_IN_METHOD="twitter.com";Te.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ae._fromIdTokenResponse(e,r,s),o=Zi(r);return new gt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Zi(r);return new gt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Zi(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Le{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Pn(e,t,r,s)}}function pc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pn._fromErrorAndOperation(n,i,e,r):i})}async function Tg(n,e,t=!1){const r=await Ut(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(n,e,t=!1){const{auth:r}=n;if(Ae(r.app))return Promise.reject(We(r));const s="reauthenticate";try{const i=await Ut(n,pc(r,s,e,n),t);T(i.idToken,r,"internal-error");const o=Is(i.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(n.uid===a,r,"user-mismatch"),gt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(n,e,t=!1){if(Ae(n.app))return Promise.reject(We(n));const r="signIn",s=await pc(n,r,e),i=await gt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Ig(n,e,t,r){return At(n).onIdTokenChanged(e,t,r)}function Og(n,e,t){return At(n).beforeAuthStateChanged(e,t)}const Ln="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ln,"1"),this.storage.removeItem(Ln),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=1e3,Ng=10;class _c extends mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ag()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ng):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_c.type="LOCAL";const Rg=_c;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gc.type="SESSION";const Ec=gc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Yn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await Dg(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Rs("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function Lg(n){se().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function kg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xg(){return vc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="firebaseLocalStorageDb",$g=1,kn="firebaseLocalStorage",yc="fbase_key";class Jt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jn(n,e){return n.transaction([kn],e?"readwrite":"readonly").objectStore(kn)}function Ug(){const n=indexedDB.deleteDatabase(bc);return new Jt(n).toPromise()}function Gr(){const n=indexedDB.open(bc,$g);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(kn,{keyPath:yc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(kn)?e(r):(r.close(),await Ug(),e(await Gr()))})})}async function eo(n,e,t){const r=Jn(n,!0).put({[yc]:e,value:t});return new Jt(r).toPromise()}async function Fg(n,e){const t=Jn(n,!1).get(e),r=await new Jt(t).toPromise();return r===void 0?null:r.value}function to(n,e){const t=Jn(n,!0).delete(e);return new Jt(t).toPromise()}const Bg=800,Hg=3;class wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yn._getInstance(xg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kg(),!this.activeServiceWorker)return;this.sender=new Pg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gr();return await eo(e,Ln,"1"),await to(e,Ln),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>eo(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>to(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jn(s,!1).getAll();return new Jt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wc.type="LOCAL";const Vg=wc;new Gt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n,e){return e?ce(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ct(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ct(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wg(n){return Sg(n.auth,new Ds(n),n.bypassAuthState)}function zg(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Ag(t,new Ds(n),n.bypassAuthState)}async function Kg(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Tg(t,new Ds(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wg;case"linkViaPopup":case"linkViaRedirect":return Kg;case"reauthViaPopup":case"reauthViaRedirect":return zg;default:fe(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Gt(2e3,1e4);class st extends Tc{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,st.currentPopupAction&&st.currentPopupAction.cancel(),st.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,st.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qg.get())};e()}}st.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="pendingRedirect",vn=new Map;class Yg extends Tc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const r=await Jg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jg(n,e){const t=Zg(e),r=Qg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Xg(n,e){vn.set(n._key(),e)}function Qg(n){return ce(n._redirectPersistence)}function Zg(n){return En(Gg,n.config.apiKey,n.name)}async function eE(n,e,t=!1){if(Ae(n.app))return Promise.reject(We(n));const r=Cs(n),s=jg(r,e),o=await new Yg(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=10*60*1e3;class nE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(re(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tE&&this.cachedEventUids.clear(),this.cachedEventUids.has(no(e))}saveEventToCache(e){this.cachedEventUids.add(no(e)),this.lastProcessedEventTime=Date.now()}}function no(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ac({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(n,e={}){return St(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oE=/^https?/;async function aE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sE(n);for(const t of e)try{if(cE(t))return}catch{}fe(n,"unauthorized-domain")}function cE(n){const e=Kr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!oE.test(t))return!1;if(iE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=new Gt(3e4,6e4);function ro(){const n=se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function uE(n){return new Promise((e,t)=>{var r,s,i;function o(){ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ro(),t(re(n,"network-request-failed"))},timeout:lE.get()})}if(!((s=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=se().gapi)===null||i===void 0)&&i.load)o();else{const a=_g("iframefcb");return se()[a]=()=>{gapi.load?o():t(re(n,"network-request-failed"))},pg(`${mg()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw bn=null,e})}let bn=null;function dE(n){return bn=bn||uE(n),bn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Gt(5e3,15e3),fE="__/auth/iframe",pE="emulator/auth/iframe",mE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gE(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?As(e,pE):`https://${n.config.authDomain}/${fE}`,r={apiKey:e.apiKey,appName:n.name,v:qt},s=_E.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Kt(r).slice(1)}`}async function EE(n){const e=await dE(n),t=se().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:gE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=re(n,"network-request-failed"),a=se().setTimeout(()=>{i(o)},hE.get());function c(){se().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bE=500,yE=600,wE="_blank",TE="http://localhost";class so{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AE(n,e,t,r=bE,s=yE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vE),{width:r.toString(),height:s.toString(),top:i,left:o}),l=U().toLowerCase();t&&(a=sc(l)?wE:t),nc(l)&&(e=e||TE,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[E,m])=>`${g}${E}=${m},`,"");if(og(l)&&a!=="_self")return SE(e||"",a),new so(null);const h=window.open(e||"",a,u);T(h,n,"popup-blocked");try{h.focus()}catch{}return new so(h)}function SE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="__/auth/handler",OE="emulator/auth/handler",CE=encodeURIComponent("fac");async function io(n,e,t,r,s,i){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qt,eventId:s};if(e instanceof fc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Rm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Yt){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${CE}=${encodeURIComponent(c)}`:"";return`${NE(n)}?${Kt(a).slice(1)}${l}`}function NE({config:n}){return n.emulator?As(n,OE):`https://${n.authDomain}/${IE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="webStorageSupport";class RE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ec,this._completeRedirectFn=eE,this._overrideRedirectResult=Xg}async _openPopup(e,t,r,s){var i;pe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await io(e,t,r,Kr(),s);return AE(e,o,Rs())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await io(e,t,r,Kr(),s);return Lg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(pe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await EE(e),r=new nE(e);return t.register("authEvent",s=>(T(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ir,{type:Ir},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ir];o!==void 0&&t(!!o),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lc()||rc()||Os()}}const DE=RE;var oo="@firebase/auth",ao="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kE(n){xt(new _t("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uc(n)},l=new hg(r,s,i,c);return Eg(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xt(new _t("auth-internal",e=>{const t=Cs(e.getProvider("auth").getImmediate());return(r=>new PE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(oo,ao,LE(n)),it(oo,ao,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=5*60,xE=Fa("authIdTokenMaxAge")||ME;let co=null;const $E=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>xE)return;const s=t==null?void 0:t.token;co!==s&&(co=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UE(n=D_()){const e=ja(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gg(n,{popupRedirectResolver:DE,persistence:[Vg,Rg,Ec]}),r=Fa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$E(i.toString());Og(t,o,()=>o(t.currentUser)),Ig(t,a=>o(a))}}const s=vm("auth");return s&&vg(t,`http://${s}`),t}function FE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}fg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=re("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",FE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kE("Browser");const BE={apiKey:"AIzaSyBXNtIk6uLjQtf98JCf20cdiUoSYwU9Fk4",authDomain:"saada-4a54d.firebaseapp.com",projectId:"saada-4a54d",storageBucket:"saada-4a54d.appspot.com",messagingSenderId:"581263205971",appId:"1:581263205971:web:01733857d047716a1d08a6",measurementId:"G-EX2497D5KM"},HE=Wa(BE);UE(HE);
