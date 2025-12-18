(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var s=i._howls.length-1;s>=0;s--)i._howls[s].stereo(t);return i},HowlerGlobal.prototype.pos=function(t,i,s){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(i=typeof i!="number"?r._pos[1]:i,s=typeof s!="number"?r._pos[2]:s,typeof t=="number")r._pos=[t,i,s],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,i,s,r,o,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;var u=l._orientation;if(i=typeof i!="number"?u[1]:i,s=typeof s!="number"?u[2]:s,r=typeof r!="number"?u[3]:r,o=typeof o!="number"?u[4]:o,a=typeof a!="number"?u[5]:a,typeof t=="number")l._orientation=[t,i,s,r,o,a],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(t,i,s,r,o,a);else return u;return l},Howl.prototype.init=(function(t){return function(i){var s=this;return s._orientation=i.orientation||[1,0,0],s._stereo=i.stereo||null,s._pos=i.pos||null,s._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},s._onstereo=i.onstereo?[{fn:i.onstereo}]:[],s._onpos=i.onpos?[{fn:i.onpos}]:[],s._onorientation=i.onorientation?[{fn:i.onorientation}]:[],t.call(this,i)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,i){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"stereo",action:function(){s.stereo(t,i)}}),s;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof t=="number")s._stereo=t,s._pos=[t,0,0];else return s._stereo;for(var o=s._getSoundIds(i),a=0;a<o.length;a++){var l=s._soundById(o[a]);if(l)if(typeof t=="number")l._stereo=t,l._pos=[t,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,r),r==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(t,0,0):l._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),s._emit("stereo",l._id);else return l._stereo}return s},Howl.prototype.pos=function(t,i,s,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,i,s,r)}}),o;if(i=typeof i!="number"?0:i,s=typeof s!="number"?-.5:s,typeof r>"u")if(typeof t=="number")o._pos=[t,i,s];else return o._pos;for(var a=o._getSoundIds(r),l=0;l<a.length;l++){var u=o._soundById(a[l]);if(u)if(typeof t=="number")u._pos=[t,i,s],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(s,Howler.ctx.currentTime)):u._panner.setPosition(t,i,s)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,i,s,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,i,s,r)}}),o;if(i=typeof i!="number"?o._orientation[1]:i,s=typeof s!="number"?o._orientation[2]:s,typeof r>"u")if(typeof t=="number")o._orientation=[t,i,s];else return o._orientation;for(var a=o._getSoundIds(r),l=0;l<a.length;l++){var u=o._soundById(a[l]);if(u)if(typeof t=="number")u._orientation=[t,i,s],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(s,Howler.ctx.currentTime)):u._panner.setOrientation(t,i,s)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,i=arguments,s,r,o;if(!t._webAudio)return t;if(i.length===0)return t._pannerAttr;if(i.length===1)if(typeof i[0]=="object")s=i[0],typeof r>"u"&&(s.pannerAttr||(s.pannerAttr={coneInnerAngle:s.coneInnerAngle,coneOuterAngle:s.coneOuterAngle,coneOuterGain:s.coneOuterGain,distanceModel:s.distanceModel,maxDistance:s.maxDistance,refDistance:s.refDistance,rolloffFactor:s.rolloffFactor,panningModel:s.panningModel}),t._pannerAttr={coneInnerAngle:typeof s.pannerAttr.coneInnerAngle<"u"?s.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof s.pannerAttr.coneOuterAngle<"u"?s.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof s.pannerAttr.coneOuterGain<"u"?s.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof s.pannerAttr.distanceModel<"u"?s.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof s.pannerAttr.maxDistance<"u"?s.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof s.pannerAttr.refDistance<"u"?s.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof s.pannerAttr.rolloffFactor<"u"?s.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof s.pannerAttr.panningModel<"u"?s.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(i[0],10)),o?o._pannerAttr:t._pannerAttr;else i.length===2&&(s=i[0],r=parseInt(i[1],10));for(var a=t._getSoundIds(r),l=0;l<a.length;l++)if(o=t._soundById(a[l]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:u.coneOuterGain,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:u.distanceModel,maxDistance:typeof s.maxDistance<"u"?s.maxDistance:u.maxDistance,refDistance:typeof s.refDistance<"u"?s.refDistance:u.refDistance,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:u.rolloffFactor,panningModel:typeof s.panningModel<"u"?s.panningModel:u.panningModel};var h=o._panner;h||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),h=o._panner),h.coneInnerAngle=u.coneInnerAngle,h.coneOuterAngle=u.coneOuterAngle,h.coneOuterGain=u.coneOuterGain,h.distanceModel=u.distanceModel,h.maxDistance=u.maxDistance,h.refDistance=u.refDistance,h.rolloffFactor=u.rolloffFactor,h.panningModel=u.panningModel}return t},Sound.prototype.init=(function(t){return function(){var i=this,s=i._parent;i._orientation=s._orientation,i._stereo=s._stereo,i._pos=s._pos,i._pannerAttr=s._pannerAttr,t.call(this),i._stereo?s.stereo(i._stereo):i._pos&&s.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var i=this,s=i._parent;return i._orientation=s._orientation,i._stereo=s._stereo,i._pos=s._pos,i._pannerAttr=s._pannerAttr,i._stereo?s.stereo(i._stereo):i._pos?s.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,s._refreshBuffer(i)),t.call(this)}})(Sound.prototype.reset);var e=function(t,i){i=i||"spatial",i==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Bp)),Bp}var Bv=Ik();const Tk=Zt(n=>{const e={VOLUME:.2,FADE:{DURATION:1,EASE:"linear"}},t={sounds:new Map,instances:new Map,muted:jn(!0),fades:new Map},i=()=>{t.sounds.forEach(h=>{document.hidden?h.playing()&&h.stop():!t.muted.value&&h.play()})},s=async(h,c,d={})=>{const f=t.sounds.get(h);if(!f)return;t.fades.get(h)?.kill();const p=qs.to({value:f.volume()},{duration:d.duration??e.FADE.DURATION,ease:d.ease??e.FADE.EASE,value:c,onUpdate:function(){f.volume(this.targets()[0].value)}});return t.fades.set(h,p),new Promise(A=>p.eventCallback("onComplete",()=>{t.fades.delete(h),A()}))},r=(h,c={})=>{if(!h)throw new Error("Sound source required");const d=c.volume??e.VOLUME,f=t.sounds.get(h)??(()=>{const p=new Bv.Howl({src:[h],html5:!0,volume:t.muted.value?0:d,loop:!0,preload:!0,format:["mp3"],onloaderror:(A,g)=>{console.error("Load error:",g),t.sounds.delete(h)},onplayerror:(A,g)=>{console.error("Play error:",g),p.state()==="loaded"&&setTimeout(()=>p.play(),100)}});return t.sounds.set(h,p),p})();if(f.state()!=="loaded"){f.once("load",()=>{o(f,h,d,c)}),f.load();return}return o(f,h,d,c)},o=(h,c,d,f)=>{t.instances.has(c)&&(t.instances.get(c),s(c,0,{duration:.2}).then(()=>{h.stop(),t.instances.delete(c)})),h.volume(0),h.loop(f.loop??!0),h.play();const p={currentVolume:d,stop:async(A={})=>{await s(c,0,A),h.stop(),t.instances.delete(c)}};return t.instances.set(c,p),s(c,t.muted.value?0:d,{duration:f.fadeDuration??e.FADE.DURATION,ease:f.fadeEase??e.FADE.EASE}),p},a=async()=>(t.muted.value=!t.muted.value,n.$resize?.mouse?await Promise.all(Array.from(t.instances.entries()).map(([h,c])=>{if(!t.sounds.get(h))return Promise.resolve();const f=t.muted.value?0:c.currentVolume;return s(h,f,{duration:e.FADE.DURATION,ease:e.FADE.EASE})})):(t.sounds.forEach((h,c)=>{const d=t.instances.get(c);d&&(t.muted.value?(h.volume(0),h.stop()):(h.volume(d.currentVolume),h.play()))}),t.fades.forEach(h=>h.kill()),t.fades.clear()),t.muted.value),l=()=>{t.sounds.forEach(h=>{typeof h.unlock=="function"&&h.unlock()})},u=h=>{Array.isArray(h)||(h=[h]),h.forEach(c=>{if(t.sounds.has(c))return;const d=new Bv.Howl({src:[c],html5:!0,preload:!0,volume:0,format:["mp3"]});t.sounds.set(c,d)})};return n.hook("app:mounted",()=>{document.addEventListener("visibilitychange",i),["touchstart","touchend","click"].forEach(c=>{document.addEventListener(c,l,{once:!0})})}),n.hook("app:unmounted",()=>{document.removeEventListener("visibilitychange",i),t.fades.forEach(h=>h.kill()),t.fades.clear(),t.sounds.forEach(h=>h.stop()),t.instances.clear(),t.sounds.clear()}),{provide:{sound:{play:r,toggleMute:a,isMuted:()=>t.muted.value,preload:u}}}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Q_="173",El={ROTATE:0,DOLLY:1,PAN:2},sl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mk=0,Lv=1,Dk=2,jw=1,Rk=2,fr=3,Fr=0,Di=1,Us=2,vo=0,vl=1,km=2,Nv=3,Pv=4,Xw=5,ro=100,Bk=101,Lk=102,Nk=103,Pk=104,Fk=200,Kw=201,kk=202,Ok=203,Om=204,Wd=205,Uk=206,Qk=207,Hk=208,Gk=209,Vk=210,zk=211,Wk=212,qk=213,Yk=214,Um=0,Qm=1,Hm=2,Ol=3,Gm=4,Vm=5,zm=6,Wm=7,$w=0,jk=1,Xk=2,yo=0,Kk=1,$k=2,Jk=3,Zk=4,eO=5,tO=6,nO=7,Fv="attached",iO="detached",H_=300,fa=301,Ul=302,qd=303,qm=304,Mf=306,pa=1e3,gs=1001,Yd=1002,$n=1003,Jw=1004,Oc=1005,On=1006,dd=1007,_s=1008,sO=1008,vn=1009,Zw=1010,eI=1011,Cu=1012,G_=1013,Aa=1014,ai=1015,_i=1016,V_=1017,z_=1018,Ql=1020,tI=35902,nI=1021,iI=1022,Cn=1023,sI=1024,rI=1025,yl=1026,Hl=1027,ho=1028,W_=1029,Jo=1030,q_=1031,Y_=1033,fd=33776,eu=33777,pd=33778,tu=33779,jd=35840,Ym=35841,Xd=35842,jm=35843,Kd=36196,$d=37492,Jd=37496,Su=37808,Xm=37809,Km=37810,$m=37811,bu=37812,Jm=37813,Zm=37814,eg=37815,tg=37816,ng=37817,ig=37818,sg=37819,rg=37820,og=37821,nu=36492,ag=36494,Zd=36495,oI=36283,lg=36284,cg=36285,ug=36286,wu=2300,Iu=2301,Lp=2302,kv=2400,Ov=2401,Uv=2402,rO=2500,oO=0,aI=1,hg=2,aO=3200,lO=3201,lI=0,cO=1,Qs="",Mn="srgb",Jn="srgb-linear",ef="linear",Nt="srgb",La=7680,Qv=519,uO=512,hO=513,dO=514,cI=515,fO=516,pO=517,AO=518,mO=519,dg=35044,Np=35048,Hv="300 es",br=2e3,tf=2001;class ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gv=1234567;const iu=Math.PI/180,Gl=180/Math.PI;function ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function j_(n,e){return(n%e+e)%e}function gO(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _O(n,e,t){return n!==e?(t-n)/(e-n):0}function su(n,e,t){return(1-t)*n+t*e}function EO(n,e,t,i){return su(n,e,1-Math.exp(-t*i))}function vO(n,e=1){return e-Math.abs(j_(n,e*2)-e)}function yO(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xO(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function CO(n,e){return n+Math.floor(Math.random()*(e-n+1))}function SO(n,e){return n+Math.random()*(e-n)}function bO(n){return n*(.5-Math.random())}function wO(n){n!==void 0&&(Gv=n);let e=Gv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function IO(n){return n*iu}function TO(n){return n*Gl}function MO(n){return(n&n-1)===0&&n!==0}function DO(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function RO(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function BO(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+i)/2),h=o((e+i)/2),c=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*c,l*d,a*u);break;case"YZY":n.set(l*d,a*h,l*c,a*u);break;case"ZXZ":n.set(l*c,l*d,a*h,a*u);break;case"XZX":n.set(a*h,l*p,l*f,a*u);break;case"YXY":n.set(l*f,a*h,l*p,a*u);break;case"ZYZ":n.set(l*p,l*f,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function As(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const uI={DEG2RAD:iu,RAD2DEG:Gl,generateUUID:ys,clamp:ht,euclideanModulo:j_,mapLinear:gO,inverseLerp:_O,lerp:su,damp:EO,pingpong:vO,smoothstep:yO,smootherstep:xO,randInt:CO,randFloat:SO,randFloatSpread:bO,seededRandom:wO,degToRad:IO,radToDeg:TO,isPowerOfTwo:MO,ceilPowerOfTwo:DO,floorPowerOfTwo:RO,setQuaternionFromProperEuler:BO,normalize:Rt,denormalize:As};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,i,s,r,o,a,l,u){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u)}set(e,t,i,s,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],c=i[7],d=i[2],f=i[5],p=i[8],A=s[0],g=s[3],m=s[6],E=s[1],_=s[4],v=s[7],x=s[2],S=s[5],w=s[8];return r[0]=o*A+a*E+l*x,r[3]=o*g+a*_+l*S,r[6]=o*m+a*v+l*w,r[1]=u*A+h*E+c*x,r[4]=u*g+h*_+c*S,r[7]=u*m+h*v+c*w,r[2]=d*A+f*E+p*x,r[5]=d*g+f*_+p*S,r[8]=d*m+f*v+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-i*r*h+i*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],c=h*o-a*u,d=a*l-h*r,f=u*r-o*l,p=t*c+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/p;return e[0]=c*A,e[1]=(s*u-h*i)*A,e[2]=(a*i-s*o)*A,e[3]=d*A,e[4]=(h*t-s*l)*A,e[5]=(s*r-a*t)*A,e[6]=f*A,e[7]=(i*l-u*t)*A,e[8]=(o*t-i*r)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pp.makeScale(e,t)),this}rotate(e){return this.premultiply(Pp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pp=new ct;function hI(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Tu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LO(){const n=Tu("canvas");return n.style.display="block",n}const Vv={};function $a(n){n in Vv||(Vv[n]=!0,console.warn(n))}function NO(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function PO(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function FO(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zv=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wv=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kO(){const n={enabled:!0,workingColorSpace:Jn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Nt&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(s.r=xl(s.r),s.g=xl(s.g),s.b=xl(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qs?ef:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jn]:{primaries:e,whitePoint:i,transfer:ef,toXYZ:zv,fromXYZ:Wv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:zv,fromXYZ:Wv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}const yt=kO();function Tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Na;class OO{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Na===void 0&&(Na=Tu("canvas")),Na.width=e.width,Na.height=e.height;const i=Na.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Na}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Tr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UO=0;class dI{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UO++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fp(s[o].image)):r.push(Fp(s[o]))}else r=Fp(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Fp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OO.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QO=0;class on extends ya{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=gs,s=gs,r=On,o=_s,a=Cn,l=vn,u=on.DEFAULT_ANISOTROPY,h=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QO++}),this.uuid=ys(),this.name="",this.source=new dI(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=H_;on.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,s=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],h=l[4],c=l[8],d=l[1],f=l[5],p=l[9],A=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-A)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+A)<.1&&Math.abs(p+g)<.1&&Math.abs(u+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,v=(f+1)/2,x=(m+1)/2,S=(h+d)/4,w=(c+A)/4,T=(p+g)/4;return _>v&&_>x?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=S/i,r=w/i):v>x?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=T/s):x<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),i=w/r,s=T/r),this.set(i,s,r,t),this}let E=Math.sqrt((g-p)*(g-p)+(c-A)*(c-A)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-p)/E,this.y=(c-A)/E,this.z=(d-h)/E,this.w=Math.acos((u+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HO extends ya{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new dI(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ma extends HO{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fI extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pI extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],u=i[s+1],h=i[s+2],c=i[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],A=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=A;return}if(c!==A||l!==d||u!==f||h!==p){let g=1-a;const m=l*d+u*f+h*p+c*A,E=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const x=Math.sqrt(_),S=Math.atan2(x,m*E);g=Math.sin(g*S)/x,a=Math.sin(a*S)/x}const v=a*E;if(l=l*g+d*v,u=u*g+f*v,h=h*g+p*v,c=c*g+A*v,g===1-a){const x=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=x,u*=x,h*=x,c*=x}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],h=i[s+3],c=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*c+l*f-u*d,e[t+1]=l*p+h*d+u*c-a*f,e[t+2]=u*p+h*f+a*d-l*c,e[t+3]=h*p-a*c-l*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(s/2),c=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*c+u*f*p,this._y=u*f*c-d*h*p,this._z=u*h*p+d*f*c,this._w=u*h*c-d*f*p;break;case"YXZ":this._x=d*h*c+u*f*p,this._y=u*f*c-d*h*p,this._z=u*h*p-d*f*c,this._w=u*h*c+d*f*p;break;case"ZXY":this._x=d*h*c-u*f*p,this._y=u*f*c+d*h*p,this._z=u*h*p+d*f*c,this._w=u*h*c-d*f*p;break;case"ZYX":this._x=d*h*c-u*f*p,this._y=u*f*c+d*h*p,this._z=u*h*p-d*f*c,this._w=u*h*c+d*f*p;break;case"YZX":this._x=d*h*c+u*f*p,this._y=u*f*c+d*h*p,this._z=u*h*p-d*f*c,this._w=u*h*c-d*f*p;break;case"XZY":this._x=d*h*c-u*f*p,this._y=u*f*c-d*h*p,this._z=u*h*p+d*f*c,this._w=u*h*c+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],c=t[10],d=i+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(i>a&&i>c){const f=2*Math.sqrt(1+i-a-c);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>c){const f=2*Math.sqrt(1+a-i-c);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+c-i-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+o*a+s*u-r*l,this._y=s*h+o*l+r*a-i*u,this._z=r*h+o*u+i*l-s*a,this._w=o*h-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),c=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=o*c+this._w*d,this._x=i*c+this._x*d,this._y=s*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),h=2*(a*t-r*s),c=2*(r*i-o*t);return this.x=t+l*u+o*c-a*h,this.y=i+l*h+a*u-r*c,this.z=s+l*c+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kp.copy(this).projectOnVector(e),this.sub(kp)}reflect(e){return this.sub(kp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kp=new V,qv=new Wi;class Qr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cs):cs.fromBufferAttribute(r,o),cs.applyMatrix4(e.matrixWorld),this.expandByPoint(cs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uh.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uh.copy(i.boundingBox)),uh.applyMatrix4(e.matrixWorld),this.union(uh)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cs),cs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fc),hh.subVectors(this.max,fc),Pa.subVectors(e.a,fc),Fa.subVectors(e.b,fc),ka.subVectors(e.c,fc),qr.subVectors(Fa,Pa),Yr.subVectors(ka,Fa),Po.subVectors(Pa,ka);let t=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-Po.z,Po.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,Po.z,0,-Po.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-Po.y,Po.x,0];return!Op(t,Pa,Fa,ka,hh)||(t=[1,0,0,0,1,0,0,0,1],!Op(t,Pa,Fa,ka,hh))?!1:(dh.crossVectors(qr,Yr),t=[dh.x,dh.y,dh.z],Op(t,Pa,Fa,ka,hh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ar=[new V,new V,new V,new V,new V,new V,new V,new V],cs=new V,uh=new Qr,Pa=new V,Fa=new V,ka=new V,qr=new V,Yr=new V,Po=new V,fc=new V,hh=new V,dh=new V,Fo=new V;function Op(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fo.fromArray(n,r);const a=s.x*Math.abs(Fo.x)+s.y*Math.abs(Fo.y)+s.z*Math.abs(Fo.z),l=e.dot(Fo),u=t.dot(Fo),h=i.dot(Fo);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const GO=new Qr,pc=new V,Up=new V;class as{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):GO.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pc.subVectors(e,this.center);const t=pc.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pc,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Up.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pc.copy(e.center).add(Up)),this.expandByPoint(pc.copy(e.center).sub(Up))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lr=new V,Qp=new V,fh=new V,jr=new V,Hp=new V,ph=new V,Gp=new V;class Hu{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Qp.copy(e).add(t).multiplyScalar(.5),fh.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Qp);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fh),a=jr.dot(this.direction),l=-jr.dot(fh),u=jr.lengthSq(),h=Math.abs(1-o*o);let c,d,f,p;if(h>0)if(c=o*l-a,d=o*a-l,p=r*h,c>=0)if(d>=-p)if(d<=p){const A=1/h;c*=A,d*=A,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;else d=-r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;else d<=-p?(c=Math.max(0,-(-o*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u):d<=p?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+u):(c=Math.max(0,-(o*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u);else d=o>0?-r:r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(Qp).addScaledVector(fh,d),f}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),s=lr.dot(lr)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,i,s,r){Hp.subVectors(t,e),ph.subVectors(i,e),Gp.crossVectors(Hp,ph);let o=this.direction.dot(Gp),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jr.subVectors(this.origin,e);const l=a*this.direction.dot(ph.crossVectors(jr,ph));if(l<0)return null;const u=a*this.direction.dot(Hp.cross(jr));if(u<0||l+u>o)return null;const h=-a*jr.dot(Gp);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,r,o,a,l,u,h,c,d,f,p,A,g){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u,h,c,d,f,p,A,g)}set(e,t,i,s,r,o,a,l,u,h,c,d,f,p,A,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=h,m[10]=c,m[14]=d,m[3]=f,m[7]=p,m[11]=A,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Oa.setFromMatrixColumn(e,0).length(),r=1/Oa.setFromMatrixColumn(e,1).length(),o=1/Oa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*c,p=a*h,A=a*c;t[0]=l*h,t[4]=-l*c,t[8]=u,t[1]=f+p*u,t[5]=d-A*u,t[9]=-a*l,t[2]=A-d*u,t[6]=p+f*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*c,p=u*h,A=u*c;t[0]=d+A*a,t[4]=p*a-f,t[8]=o*u,t[1]=o*c,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=A+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*c,p=u*h,A=u*c;t[0]=d-A*a,t[4]=-o*c,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=A-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*c,p=a*h,A=a*c;t[0]=l*h,t[4]=p*u-f,t[8]=d*u+A,t[1]=l*c,t[5]=A*u+d,t[9]=f*u-p,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*u,p=a*l,A=a*u;t[0]=l*h,t[4]=A-d*c,t[8]=p*c+f,t[1]=c,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=f*c+p,t[10]=d-A*c}else if(e.order==="XZY"){const d=o*l,f=o*u,p=a*l,A=a*u;t[0]=l*h,t[4]=-c,t[8]=u*h,t[1]=d*c+A,t[5]=o*h,t[9]=f*c-p,t[2]=p*c-f,t[6]=a*h,t[10]=A*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VO,e,zO)}lookAt(e,t,i){const s=this.elements;return Bi.subVectors(e,t),Bi.lengthSq()===0&&(Bi.z=1),Bi.normalize(),Xr.crossVectors(i,Bi),Xr.lengthSq()===0&&(Math.abs(i.z)===1?Bi.x+=1e-4:Bi.z+=1e-4,Bi.normalize(),Xr.crossVectors(i,Bi)),Xr.normalize(),Ah.crossVectors(Bi,Xr),s[0]=Xr.x,s[4]=Ah.x,s[8]=Bi.x,s[1]=Xr.y,s[5]=Ah.y,s[9]=Bi.y,s[2]=Xr.z,s[6]=Ah.z,s[10]=Bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],c=i[5],d=i[9],f=i[13],p=i[2],A=i[6],g=i[10],m=i[14],E=i[3],_=i[7],v=i[11],x=i[15],S=s[0],w=s[4],T=s[8],y=s[12],C=s[1],D=s[5],L=s[9],P=s[13],H=s[2],O=s[6],F=s[10],G=s[14],B=s[3],ae=s[7],pe=s[11],me=s[15];return r[0]=o*S+a*C+l*H+u*B,r[4]=o*w+a*D+l*O+u*ae,r[8]=o*T+a*L+l*F+u*pe,r[12]=o*y+a*P+l*G+u*me,r[1]=h*S+c*C+d*H+f*B,r[5]=h*w+c*D+d*O+f*ae,r[9]=h*T+c*L+d*F+f*pe,r[13]=h*y+c*P+d*G+f*me,r[2]=p*S+A*C+g*H+m*B,r[6]=p*w+A*D+g*O+m*ae,r[10]=p*T+A*L+g*F+m*pe,r[14]=p*y+A*P+g*G+m*me,r[3]=E*S+_*C+v*H+x*B,r[7]=E*w+_*D+v*O+x*ae,r[11]=E*T+_*L+v*F+x*pe,r[15]=E*y+_*P+v*G+x*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],c=e[6],d=e[10],f=e[14],p=e[3],A=e[7],g=e[11],m=e[15];return p*(+r*l*c-s*u*c-r*a*d+i*u*d+s*a*f-i*l*f)+A*(+t*l*f-t*u*d+r*o*d-s*o*f+s*u*h-r*l*h)+g*(+t*u*c-t*a*f-r*o*c+i*o*f+r*a*h-i*u*h)+m*(-s*a*h-t*l*c+t*a*d+s*o*c-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],c=e[9],d=e[10],f=e[11],p=e[12],A=e[13],g=e[14],m=e[15],E=c*g*u-A*d*u+A*l*f-a*g*f-c*l*m+a*d*m,_=p*d*u-h*g*u-p*l*f+o*g*f+h*l*m-o*d*m,v=h*A*u-p*c*u+p*a*f-o*A*f-h*a*m+o*c*m,x=p*c*l-h*A*l-p*a*d+o*A*d+h*a*g-o*c*g,S=t*E+i*_+s*v+r*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=E*w,e[1]=(A*d*r-c*g*r-A*s*f+i*g*f+c*s*m-i*d*m)*w,e[2]=(a*g*r-A*l*r+A*s*u-i*g*u-a*s*m+i*l*m)*w,e[3]=(c*l*r-a*d*r-c*s*u+i*d*u+a*s*f-i*l*f)*w,e[4]=_*w,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*w,e[6]=(p*l*r-o*g*r-p*s*u+t*g*u+o*s*m-t*l*m)*w,e[7]=(o*d*r-h*l*r+h*s*u-t*d*u-o*s*f+t*l*f)*w,e[8]=v*w,e[9]=(p*c*r-h*A*r-p*i*f+t*A*f+h*i*m-t*c*m)*w,e[10]=(o*A*r-p*a*r+p*i*u-t*A*u-o*i*m+t*a*m)*w,e[11]=(h*a*r-o*c*r-h*i*u+t*c*u+o*i*f-t*a*f)*w,e[12]=x*w,e[13]=(h*A*s-p*c*s+p*i*d-t*A*d-h*i*g+t*c*g)*w,e[14]=(p*a*s-o*A*s-p*i*l+t*A*l+o*i*g-t*a*g)*w,e[15]=(o*c*s-h*a*s+h*i*l-t*c*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,h*a+i,h*l-s*o,0,u*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,c=a+a,d=r*u,f=r*h,p=r*c,A=o*h,g=o*c,m=a*c,E=l*u,_=l*h,v=l*c,x=i.x,S=i.y,w=i.z;return s[0]=(1-(A+m))*x,s[1]=(f+v)*x,s[2]=(p-_)*x,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+m))*S,s[6]=(g+E)*S,s[7]=0,s[8]=(p+_)*w,s[9]=(g-E)*w,s[10]=(1-(d+A))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Oa.set(s[0],s[1],s[2]).length();const o=Oa.set(s[4],s[5],s[6]).length(),a=Oa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],us.copy(this);const u=1/r,h=1/o,c=1/a;return us.elements[0]*=u,us.elements[1]*=u,us.elements[2]*=u,us.elements[4]*=h,us.elements[5]*=h,us.elements[6]*=h,us.elements[8]*=c,us.elements[9]*=c,us.elements[10]*=c,t.setFromRotationMatrix(us),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=br){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),c=(t+e)/(t-e),d=(i+s)/(i-s);let f,p;if(a===br)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===tf)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=br){const l=this.elements,u=1/(t-e),h=1/(i-s),c=1/(o-r),d=(t+e)*u,f=(i+s)*h;let p,A;if(a===br)p=(o+r)*c,A=-2*c;else if(a===tf)p=r*c,A=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oa=new V,us=new at,VO=new V(0,0,0),zO=new V(1,1,1),Xr=new V,Ah=new V,Bi=new V,Yv=new at,jv=new Wi;class $s{constructor(e=0,t=0,i=0,s=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],h=s[9],c=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jv.setFromEuler(this),this.setFromQuaternion(jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";class AI{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WO=0;const Xv=new V,Ua=new Wi,cr=new at,mh=new V,Ac=new V,qO=new V,YO=new Wi,Kv=new V(1,0,0),$v=new V(0,1,0),Jv=new V(0,0,1),Zv={type:"added"},jO={type:"removed"},Qa={type:"childadded",child:null},Vp={type:"childremoved",child:null};class zt extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WO++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new V,t=new $s,i=new Wi,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ct}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AI,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ua.setFromAxisAngle(e,t),this.quaternion.multiply(Ua),this}rotateOnWorldAxis(e,t){return Ua.setFromAxisAngle(e,t),this.quaternion.premultiply(Ua),this}rotateX(e){return this.rotateOnAxis(Kv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(Jv,e)}translateOnAxis(e,t){return Xv.copy(e).applyQuaternion(this.quaternion),this.position.add(Xv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(Jv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mh.copy(e):mh.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ac.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Ac,mh,this.up):cr.lookAt(mh,Ac,this.up),this.quaternion.setFromRotationMatrix(cr),s&&(cr.extractRotation(s.matrixWorld),Ua.setFromRotationMatrix(cr),this.quaternion.premultiply(Ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zv),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jO),Vp.child=e,this.dispatchEvent(Vp),Vp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zv),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ac,e,qO),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ac,YO,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];r(e.shapes,c)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),c=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new V(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hs=new V,ur=new V,zp=new V,hr=new V,Ha=new V,Ga=new V,ey=new V,Wp=new V,qp=new V,Yp=new V,jp=new Ct,Xp=new Ct,Kp=new Ct;class ms{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hs.subVectors(e,t),s.cross(hs);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hs.subVectors(s,t),ur.subVectors(i,t),zp.subVectors(e,t);const o=hs.dot(hs),a=hs.dot(ur),l=hs.dot(zp),u=ur.dot(ur),h=ur.dot(zp),c=o*u-a*a;if(c===0)return r.set(0,0,0),null;const d=1/c,f=(u*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hr.x),l.addScaledVector(o,hr.y),l.addScaledVector(a,hr.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return jp.setScalar(0),Xp.setScalar(0),Kp.setScalar(0),jp.fromBufferAttribute(e,t),Xp.fromBufferAttribute(e,i),Kp.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(jp,r.x),o.addScaledVector(Xp,r.y),o.addScaledVector(Kp,r.z),o}static isFrontFacing(e,t,i,s){return hs.subVectors(i,t),ur.subVectors(e,t),hs.cross(ur).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hs.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),hs.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ms.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ms.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ms.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ms.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ms.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ha.subVectors(s,i),Ga.subVectors(r,i),Wp.subVectors(e,i);const l=Ha.dot(Wp),u=Ga.dot(Wp);if(l<=0&&u<=0)return t.copy(i);qp.subVectors(e,s);const h=Ha.dot(qp),c=Ga.dot(qp);if(h>=0&&c<=h)return t.copy(s);const d=l*c-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ha,o);Yp.subVectors(e,r);const f=Ha.dot(Yp),p=Ga.dot(Yp);if(p>=0&&f<=p)return t.copy(r);const A=f*u-l*p;if(A<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(i).addScaledVector(Ga,a);const g=h*p-f*c;if(g<=0&&c-h>=0&&f-p>=0)return ey.subVectors(r,s),a=(c-h)/(c-h+(f-p)),t.copy(s).addScaledVector(ey,a);const m=1/(g+A+d);return o=A*m,a=d*m,t.copy(i).addScaledVector(Ha,o).addScaledVector(Ga,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},gh={h:0,s:0,l:0};function $p(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=j_(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$p(o,r,e+1/3),this.g=$p(o,r,e),this.b=$p(o,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=mI[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=xl(e.r),this.g=xl(e.g),this.b=xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return yt.fromWorkingColorSpace(ni.copy(this),e),Math.round(ht(ni.r*255,0,255))*65536+Math.round(ht(ni.g*255,0,255))*256+Math.round(ht(ni.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(ni.copy(this),t);const i=ni.r,s=ni.g,r=ni.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=h<=.5?c/(o+a):c/(2-o-a),o){case i:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-i)/c+2;break;case r:l=(i-s)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Mn){yt.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,i=ni.g,s=ni.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(gh);const i=su(Kr.h,gh.h,t),s=su(Kr.s,gh.s,t),r=su(Kr.l,gh.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Ke;Ke.NAMES=mI;let XO=0;class Ys extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XO++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=vl,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Om,this.blendDst=Wd,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vl&&(i.blending=this.blending),this.side!==Fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Om&&(i.blendSrc=this.blendSrc),this.blendDst!==Wd&&(i.blendDst=this.blendDst),this.blendEquation!==ro&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(i.stencilFail=this.stencilFail),this.stencilZFail!==La&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Es extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $s,this.combine=$w,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cr=KO();function KO(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const u=l-127;u<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(i[l]=1024>>-u-14,i[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(i[l]=u+15<<10,i[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[l]=u|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function $O(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=ht(n,-65504,65504),Cr.floatView[0]=n;const e=Cr.uint32View[0],t=e>>23&511;return Cr.baseTable[t]+((e&8388607)>>Cr.shiftTable[t])}function JO(n){const e=n>>10;return Cr.uint32View[0]=Cr.mantissaTable[Cr.offsetTable[e]+(n&1023)]+Cr.exponentTable[e],Cr.floatView[0]}const ZO={toHalfFloat:$O,fromHalfFloat:JO},gn=new V,_h=new ze;let e2=0;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dg,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_h.fromBufferAttribute(this,t),_h.applyMatrix3(e),this.setXY(t,_h.x,_h.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dg&&(e.usage=this.usage),e}}class gI extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _I extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mr extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let t2=0;const Xi=new at,Jp=new zt,Va=new V,Li=new Qr,mc=new Qr,Fn=new V;class qi extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hI(e)?_I:gI)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,i){return Xi.makeTranslation(e,t,i),this.applyMatrix4(Xi),this}scale(e,t,i){return Xi.makeScale(e,t,i),this.applyMatrix4(Xi),this}lookAt(e){return Jp.lookAt(e),Jp.updateMatrix(),this.applyMatrix4(Jp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Va).negate(),this.translate(Va.x,Va.y,Va.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mr(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Li.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mc.setFromBufferAttribute(a),this.morphTargetsRelative?(Fn.addVectors(Li.min,mc.min),Li.expandByPoint(Fn),Fn.addVectors(Li.max,mc.max),Li.expandByPoint(Fn)):(Li.expandByPoint(mc.min),Li.expandByPoint(mc.max))}Li.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Fn.fromBufferAttribute(a,u),l&&(Va.fromBufferAttribute(e,u),Fn.add(Va)),s=Math.max(s,i.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new V,l[T]=new V;const u=new V,h=new V,c=new V,d=new ze,f=new ze,p=new ze,A=new V,g=new V;function m(T,y,C){u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),c.fromBufferAttribute(i,C),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,C),h.sub(u),c.sub(u),f.sub(d),p.sub(d);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(A.copy(h).multiplyScalar(p.y).addScaledVector(c,-f.y).multiplyScalar(D),g.copy(c).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[T].add(A),a[y].add(A),a[C].add(A),l[T].add(g),l[y].add(g),l[C].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let T=0,y=E.length;T<y;++T){const C=E[T],D=C.start,L=C.count;for(let P=D,H=D+L;P<H;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const _=new V,v=new V,x=new V,S=new V;function w(T){x.fromBufferAttribute(s,T),S.copy(x);const y=a[T];_.copy(y),_.sub(x.multiplyScalar(x.dot(y))).normalize(),v.crossVectors(S,y);const D=v.dot(l[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,D)}for(let T=0,y=E.length;T<y;++T){const C=E[T],D=C.start,L=C.count;for(let P=D,H=D+L;P<H;P+=3)w(e.getX(P+0)),w(e.getX(P+1)),w(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,u=new V,h=new V,c=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),A=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,A),o.fromBufferAttribute(t,g),h.subVectors(o,r),c.subVectors(s,r),h.cross(c),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,g),a.add(h),l.add(h),u.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(A,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),c.subVectors(s,r),h.cross(c),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,c=a.normalized,d=new u.constructor(l.length*h);let f=0,p=0;for(let A=0,g=l.length;A<g;A++){a.isInterleavedBufferAttribute?f=l[A]*a.data.stride+a.offset:f=l[A]*h;for(let m=0;m<h;m++)d[p++]=u[f++]}return new jt(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,i);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,c=u.length;h<c;h++){const d=u[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,d=u.length;c<d;c++){const f=u[c];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],c=r[u];for(let d=0,f=c.length;d<f;d++)h.push(c[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ty=new at,ko=new Hu,Eh=new as,ny=new V,vh=new V,yh=new V,xh=new V,Zp=new V,Ch=new V,iy=new V,Sh=new V;class dn extends zt{constructor(e=new qi,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ch.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],c=r[l];h!==0&&(Zp.fromBufferAttribute(c,e),o?Ch.addScaledVector(Zp,h):Ch.addScaledVector(Zp.sub(t),h))}t.add(Ch)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eh.copy(i.boundingSphere),Eh.applyMatrix4(r),ko.copy(e.ray).recast(e.near),!(Eh.containsPoint(ko.origin)===!1&&(ko.intersectSphere(Eh,ny)===null||ko.origin.distanceToSquared(ny)>(e.far-e.near)**2))&&(ty.copy(r).invert(),ko.copy(e.ray).applyMatrix4(ty),!(i.boundingBox!==null&&ko.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,A=d.length;p<A;p++){const g=d[p],m=o[g.materialIndex],E=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,x=_;v<x;v+=3){const S=a.getX(v),w=a.getX(v+1),T=a.getX(v+2);s=bh(this,m,e,i,u,h,c,S,w,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let g=p,m=A;g<m;g+=3){const E=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=bh(this,o,e,i,u,h,c,E,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,A=d.length;p<A;p++){const g=d[p],m=o[g.materialIndex],E=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,x=_;v<x;v+=3){const S=v,w=v+1,T=v+2;s=bh(this,m,e,i,u,h,c,S,w,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let g=p,m=A;g<m;g+=3){const E=g,_=g+1,v=g+2;s=bh(this,o,e,i,u,h,c,E,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function n2(n,e,t,i,s,r,o,a){let l;if(e.side===Di?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fr,a),l===null)return null;Sh.copy(a),Sh.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Sh);return u<t.near||u>t.far?null:{distance:u,point:Sh.clone(),object:n}}function bh(n,e,t,i,s,r,o,a,l,u){n.getVertexPosition(a,vh),n.getVertexPosition(l,yh),n.getVertexPosition(u,xh);const h=n2(n,e,t,i,vh,yh,xh,iy);if(h){const c=new V;ms.getBarycoord(iy,vh,yh,xh,c),s&&(h.uv=ms.getInterpolatedAttribute(s,a,l,u,c,new ze)),r&&(h.uv1=ms.getInterpolatedAttribute(r,a,l,u,c,new ze)),o&&(h.normal=ms.getInterpolatedAttribute(o,a,l,u,c,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new V,materialIndex:0};ms.getNormal(vh,yh,xh,d.normal),h.face=d,h.barycoord=c}return h}class Gu extends qi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],c=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mr(u,3)),this.setAttribute("normal",new Mr(h,3)),this.setAttribute("uv",new Mr(c,2));function p(A,g,m,E,_,v,x,S,w,T,y){const C=v/w,D=x/T,L=v/2,P=x/2,H=S/2,O=w+1,F=T+1;let G=0,B=0;const ae=new V;for(let pe=0;pe<F;pe++){const me=pe*D-P;for(let be=0;be<O;be++){const Me=be*C-L;ae[A]=Me*E,ae[g]=me*_,ae[m]=H,u.push(ae.x,ae.y,ae.z),ae[A]=0,ae[g]=0,ae[m]=S>0?1:-1,h.push(ae.x,ae.y,ae.z),c.push(be/w),c.push(1-pe/T),G+=1}}for(let pe=0;pe<T;pe++)for(let me=0;me<w;me++){const be=d+me+O*pe,Me=d+me+O*(pe+1),K=d+(me+1)+O*(pe+1),he=d+(me+1)+O*pe;l.push(be,Me,he),l.push(Me,K,he),B+=6}a.addGroup(f,B,y),f+=B,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fi(n){const e={};for(let t=0;t<n.length;t++){const i=Vl(n[t]);for(const s in i)e[s]=i[s]}return e}function i2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function EI(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const s2={clone:Vl,merge:fi};var r2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Js extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r2,this.fragmentShader=o2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vl(e.uniforms),this.uniformsGroups=i2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let vI=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const $r=new V,sy=new ze,ry=new ze;class mi extends vI{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,sy,ry),t.subVectors(ry,sy)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(iu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const za=-90,Wa=1;class a2 extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mi(za,Wa,e,t);s.layers=this.layers,this.add(s);const r=new mi(za,Wa,e,t);r.layers=this.layers,this.add(r);const o=new mi(za,Wa,e,t);o.layers=this.layers,this.add(o);const a=new mi(za,Wa,e,t);a.layers=this.layers,this.add(a);const l=new mi(za,Wa,e,t);l.layers=this.layers,this.add(l);const u=new mi(za,Wa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===br)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(c,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class yI extends on{constructor(e,t,i,s,r,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:fa,super(e,t,i,s,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l2 extends ma{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yI(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Gu(5,5,5),r=new Js({name:"CubemapFromEquirect",uniforms:Vl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Di,blending:vo});r.uniforms.tEquirect.value=t;const o=new dn(s,r),a=t.minFilter;return t.minFilter===_s&&(t.minFilter=On),new a2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Yn extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c2={type:"move"};class eA{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const A of e.hand.values()){const g=t.getJointPose(A,i),m=this._getHandJoint(u,A);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=h.position.distanceTo(c.position),f=.02,p=.005;u.inputState.pinching&&d>f+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}let oy=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $s,this.environmentIntensity=1,this.environmentRotation=new $s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class xI{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dg,this.updateRanges=[],this.version=0,this.uuid=ys()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ui=new V;class Mu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=As(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=As(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=As(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=As(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ay=new V,ly=new Ct,cy=new Ct,u2=new V,uy=new at,wh=new V,tA=new as,hy=new at,nA=new Hu;class h2 extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fv,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wh),this.boundingBox.expandByPoint(wh)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new as),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wh),this.boundingSphere.expandByPoint(wh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tA.copy(this.boundingSphere),tA.applyMatrix4(s),e.ray.intersectsSphere(tA)!==!1&&(hy.copy(s).invert(),nA.copy(e.ray).applyMatrix4(hy),!(this.boundingBox!==null&&nA.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nA)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iO?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;ly.fromBufferAttribute(s.attributes.skinIndex,e),cy.fromBufferAttribute(s.attributes.skinWeight,e),ay.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=cy.getComponent(r);if(o!==0){const a=ly.getComponent(r);uy.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(u2.copy(ay).applyMatrix4(uy),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class CI extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Df extends on{constructor(e=null,t=1,i=1,s,r,o,a,l,u=$n,h=$n,c,d){super(null,o,a,l,u,h,s,r,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dy=new at,d2=new at;class X_{constructor(e=[],t=[]){this.uuid=ys(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:d2;dy.multiplyMatrices(a,t[r]),dy.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new X_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Df(t,e,e,Cn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new CI),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Zo extends jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qa=new at,fy=new at,Ih=[],py=new Qr,f2=new at,gc=new dn,_c=new as;let p2=class extends dn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,f2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qa),py.copy(e.boundingBox).applyMatrix4(qa),this.boundingBox.union(py)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qa),_c.copy(e.boundingSphere).applyMatrix4(qa),this.boundingSphere.union(_c)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(gc.geometry=this.geometry,gc.material=this.material,gc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_c.copy(this.boundingSphere),_c.applyMatrix4(i),e.ray.intersectsSphere(_c)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qa),fy.multiplyMatrices(i,qa),gc.matrixWorld=fy,gc.raycast(e,Ih);for(let o=0,a=Ih.length;o<a;o++){const l=Ih[o];l.instanceId=r,l.object=this,t.push(l)}Ih.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Df(new Float32Array(s*this.count),s,this.count,ho,ai));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};const iA=new V,A2=new V,m2=new ct;class so{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=iA.subVectors(i,t).cross(A2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(iA),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||m2.getNormalMatrix(e),s=this.coplanarPoint(iA).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oo=new as,Th=new V;class Rf{constructor(e=new so,t=new so,i=new so,s=new so,r=new so,o=new so){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=br){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],h=s[5],c=s[6],d=s[7],f=s[8],p=s[9],A=s[10],g=s[11],m=s[12],E=s[13],_=s[14],v=s[15];if(i[0].setComponents(l-r,d-u,g-f,v-m).normalize(),i[1].setComponents(l+r,d+u,g+f,v+m).normalize(),i[2].setComponents(l+o,d+h,g+p,v+E).normalize(),i[3].setComponents(l-o,d-h,g-p,v-E).normalize(),i[4].setComponents(l-a,d-c,g-A,v-_).normalize(),t===br)i[5].setComponents(l+a,d+c,g+A,v+_).normalize();else if(t===tf)i[5].setComponents(a,c,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oo)}intersectsSprite(e){return Oo.center.set(0,0,0),Oo.radius=.7071067811865476,Oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oo)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Th.x=s.normal.x>0?e.max.x:e.min.x,Th.y=s.normal.y>0?e.max.y:e.min.y,Th.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Th)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class SI extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nf=new V,sf=new V,Ay=new at,Ec=new Hu,Mh=new as,sA=new V,my=new V;class K_ extends zt{constructor(e=new qi,t=new SI){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)nf.fromBufferAttribute(t,s-1),sf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=nf.distanceTo(sf);e.setAttribute("lineDistance",new Mr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mh.copy(i.boundingSphere),Mh.applyMatrix4(s),Mh.radius+=r,e.ray.intersectsSphere(Mh)===!1)return;Ay.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(Ay);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let A=f,g=p-1;A<g;A+=u){const m=h.getX(A),E=h.getX(A+1),_=Dh(this,e,Ec,l,m,E,A);_&&t.push(_)}if(this.isLineLoop){const A=h.getX(p-1),g=h.getX(f),m=Dh(this,e,Ec,l,A,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let A=f,g=p-1;A<g;A+=u){const m=Dh(this,e,Ec,l,A,A+1,A);m&&t.push(m)}if(this.isLineLoop){const A=Dh(this,e,Ec,l,p-1,f,p-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dh(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(nf.fromBufferAttribute(a,s),sf.fromBufferAttribute(a,r),t.distanceSqToSegment(nf,sf,sA,my)>i)return;sA.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(sA);if(!(u<e.near||u>e.far))return{distance:u,point:my.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const gy=new V,_y=new V;class g2 extends K_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)gy.fromBufferAttribute(t,s),_y.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gy.distanceTo(_y);e.setAttribute("lineDistance",new Mr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _2 extends K_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bI extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ey=new at,fg=new Hu,Rh=new as,Bh=new V;class E2 extends zt{constructor(e=new qi,t=new bI){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rh.copy(i.boundingSphere),Rh.applyMatrix4(s),Rh.radius+=r,e.ray.intersectsSphere(Rh)===!1)return;Ey.copy(s).invert(),fg.copy(e.ray).applyMatrix4(Ey);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,c=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,A=f;p<A;p++){const g=u.getX(p);Bh.fromBufferAttribute(c,g),vy(Bh,g,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,A=f;p<A;p++)Bh.fromBufferAttribute(c,p),vy(Bh,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vy(n,e,t,i,s,r,o){const a=fg.distanceSqToPoint(n);if(a<t){const l=new V;fg.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class yy extends on{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=$n,this.minFilter=$n,this.generateMipmaps=!1,this.needsUpdate=!0}}class Bf extends on{constructor(e,t,i,s,r,o,a,l,u,h,c,d){super(null,o,a,l,u,h,s,r,c,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class v2 extends Bf{constructor(e,t,i,s,r,o){super(e,t,i,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=gs,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y2 extends Bf{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,fa),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class wI extends on{constructor(e,t,i,s,r,o,a,l,u,h=yl){if(h!==yl&&h!==Hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yl&&(i=Aa),i===void 0&&h===Hl&&(i=Ql),super(null,s,r,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$n,this.minFilter=l!==void 0?l:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hr extends qi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),u=a+1,h=l+1,c=e/a,d=t/l,f=[],p=[],A=[],g=[];for(let m=0;m<h;m++){const E=m*d-o;for(let _=0;_<u;_++){const v=_*c-r;p.push(v,-E,0),A.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const _=E+u*m,v=E+u*(m+1),x=E+1+u*(m+1),S=E+1+u*m;f.push(_,v,S),f.push(v,x,S)}this.setIndex(f),this.setAttribute("position",new Mr(p,3)),this.setAttribute("normal",new Mr(A,3)),this.setAttribute("uv",new Mr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class rA extends Js{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $_ extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lI,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $s,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zs extends $_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class x2 extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aO,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C2 extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Lh(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function S2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function b2(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function xy(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function II(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Vu{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w2 extends Vu{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kv,endingEnd:kv}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ov:r=e,a=2*t-i;break;case Uv:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ov:o=e,l=2*i-t;break;case Uv:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const u=(i-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),A=p*p,g=A*p,m=-d*g+2*d*A-d*p,E=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*A+.5*p,v=f*g-f*A;for(let x=0;x!==a;++x)r[x]=m*o[h+x]+E*o[u+x]+_*o[l+x]+v*o[c+x];return r}}class I2 extends Vu{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(i-t)/(s-t),c=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*c+o[l+d]*h;return r}}class T2 extends Vu{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class er{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lh(t,this.TimeBufferType),this.values=Lh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lh(e.times,Array),values:Lh(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new T2(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new I2(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w2(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wu:t=this.InterpolantFactoryMethodDiscrete;break;case Iu:t=this.InterpolantFactoryMethodLinear;break;case Lp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wu;case this.InterpolantFactoryMethodLinear:return Iu;case this.InterpolantFactoryMethodSmooth:return Lp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&S2(s))for(let a=0,l=s.length;a!==l;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lp,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(s)l=!0;else{const c=a*i,d=c-i,f=c+i;for(let p=0;p!==i;++p){const A=t[c+p];if(A!==t[d+p]||A!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const c=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[c+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}er.prototype.TimeBufferType=Float32Array;er.prototype.ValueBufferType=Float32Array;er.prototype.DefaultInterpolation=Iu;class Kl extends er{constructor(e,t,i){super(e,t,i)}}Kl.prototype.ValueTypeName="bool";Kl.prototype.ValueBufferType=Array;Kl.prototype.DefaultInterpolation=wu;Kl.prototype.InterpolantFactoryMethodLinear=void 0;Kl.prototype.InterpolantFactoryMethodSmooth=void 0;class TI extends er{}TI.prototype.ValueTypeName="color";class zl extends er{}zl.prototype.ValueTypeName="number";class M2 extends Vu{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let u=e*a;for(let h=u+a;u!==h;u+=4)Wi.slerpFlat(r,0,o,u-a,o,u,l);return r}}class Wl extends er{InterpolantFactoryMethodLinear(e){return new M2(this.times,this.values,this.getValueSize(),e)}}Wl.prototype.ValueTypeName="quaternion";Wl.prototype.InterpolantFactoryMethodSmooth=void 0;class $l extends er{constructor(e,t,i){super(e,t,i)}}$l.prototype.ValueTypeName="string";$l.prototype.ValueBufferType=Array;$l.prototype.DefaultInterpolation=wu;$l.prototype.InterpolantFactoryMethodLinear=void 0;$l.prototype.InterpolantFactoryMethodSmooth=void 0;class ql extends er{}ql.prototype.ValueTypeName="vector";class D2{constructor(e="",t=-1,i=[],s=rO){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ys(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(B2(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(er.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=b2(l);l=xy(l,1,h),u=xy(u,1,h),!s&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new zl(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const c=h[1];let d=s[c];d||(s[c]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(c,d,f,p,A){if(f.length!==0){const g=[],m=[];II(f,g,m,p),g.length!==0&&A.push(new c(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let c=0;c<u.length;c++){const d=u[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let A=0;A<d[p].morphTargets.length;A++)f[d[p].morphTargets[A]]=-1;for(const A in f){const g=[],m=[];for(let E=0;E!==d[p].morphTargets.length;++E){const _=d[p];g.push(_.time),m.push(_.morphTarget===A?1:0)}s.push(new zl(".morphTargetInfluence["+A+"]",g,m))}l=f.length*o}else{const f=".bones["+t[c].name+"]";i(ql,f+".position",d,"pos",s),i(Wl,f+".quaternion",d,"rot",s),i(ql,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function R2(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zl;case"vector":case"vector2":case"vector3":case"vector4":return ql;case"color":return TI;case"quaternion":return Wl;case"bool":case"boolean":return Kl;case"string":return $l}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function B2(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=R2(n.type);if(n.times===void 0){const t=[],i=[];II(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const fo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class L2{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,c){return u.push(h,c),this},this.removeHandler=function(h){const c=u.indexOf(h);return c!==-1&&u.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=u.length;c<d;c+=2){const f=u[c],p=u[c+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const N2=new L2;let Io=class{constructor(e){this.manager=e!==void 0?e:N2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";const dr={};class P2 extends Error{constructor(e,t){super(e),this.response=t}}class Cl extends Io{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(dr[e]!==void 0){dr[e].push({onLoad:t,onProgress:i,onError:s});return}dr[e]=[],dr[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=dr[e],c=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let A=0;const g=new ReadableStream({start(m){E();function E(){c.read().then(({done:_,value:v})=>{if(_)m.close();else{A+=v.byteLength;const x=new ProgressEvent("progress",{lengthComputable:p,loaded:A,total:f});for(let S=0,w=h.length;S<w;S++){const T=h[S];T.onProgress&&T.onProgress(x)}m.enqueue(v),E()}},_=>{m.error(_)})}}});return new Response(g)}else throw new P2(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(p=>f.decode(p))}}}).then(u=>{fo.add(e,u);const h=dr[e];delete dr[e];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=dr[e];if(h===void 0)throw this.manager.itemError(e),u;delete dr[e];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onError&&f.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class F2 extends Io{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Tu("img");function l(){h(),fo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(c){h(),s&&s(c),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class rf extends Io{constructor(e){super(e)}load(e,t,i,s){const r=new on,o=new F2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Lf extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const oA=new at,Cy=new V,Sy=new V;class J_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rf,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cy.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cy),Sy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sy),t.updateMatrixWorld(),oA.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oA),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oA)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k2 extends J_{constructor(){super(new mi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Gl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class O2 extends Lf{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new k2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const by=new at,vc=new V,aA=new V;class U2 extends J_{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vc.setFromMatrixPosition(e.matrixWorld),i.position.copy(vc),aA.copy(i.position),aA.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(aA),i.updateMatrixWorld(),s.makeTranslation(-vc.x,-vc.y,-vc.z),by.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(by)}}class Q2 extends Lf{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new U2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nf extends vI{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class H2 extends J_{constructor(){super(new Nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G2 extends Lf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new H2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V2 extends Lf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ru{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wy extends qi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class z2 extends Io{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fo.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return fo.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){s&&s(u),fo.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fo.add(e,l),r.manager.itemStart(e)}}class W2 extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Z_="\\[\\]\\.:\\/",q2=new RegExp("["+Z_+"]","g"),e0="[^"+Z_+"]",Y2="[^"+Z_.replace("\\.","")+"]",j2=/((?:WC+[\/:])*)/.source.replace("WC",e0),X2=/(WCOD+)?/.source.replace("WCOD",Y2),K2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e0),$2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e0),J2=new RegExp("^"+j2+X2+K2+$2+"$"),Z2=["material","materials","bones","map"];class eU{constructor(e,t,i){const s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Bt{constructor(e,t,i){this.path=t,this.parsedPath=i||Bt.parseTrackName(t),this.node=Bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Bt.Composite(e,t,i):new Bt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q2,"")}static parseTrackName(e){const t=J2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Z2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Bt.Composite=eU;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Iy{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ty=new ze;class tU{constructor(e=new ze(1/0,1/0),t=new ze(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ty.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ty).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class nU extends ya{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function My(n,e,t,i){const s=iU(i);switch(t){case nI:return n*e;case sI:return n*e;case rI:return n*e*2;case ho:return n*e/s.components*s.byteLength;case W_:return n*e/s.components*s.byteLength;case Jo:return n*e*2/s.components*s.byteLength;case q_:return n*e*2/s.components*s.byteLength;case iI:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case Y_:return n*e*4/s.components*s.byteLength;case fd:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pd:case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ym:case jm:return Math.max(n,16)*Math.max(e,8)/4;case jd:case Xd:return Math.max(n,8)*Math.max(e,8)/2;case Kd:case $d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Km:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $m:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case eg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ng:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ig:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case og:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nu:case ag:case Zd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case oI:case lg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cg:case ug:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iU(n){switch(n){case vn:case Zw:return{byteLength:1,components:1};case Cu:case eI:case _i:return{byteLength:2,components:1};case V_:case z_:return{byteLength:2,components:4};case Aa:case G_:case ai:return{byteLength:4,components:1};case tI:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Q_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Q_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function MI(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sU(n){const e=new WeakMap;function t(a,l){const u=a.array,h=a.usage,c=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,h),a.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,l,u){const h=l.array,c=l.updateRanges;if(n.bindBuffer(u,a),c.length===0)n.bufferSubData(u,0,h);else{c.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<c.length;f++){const p=c[d],A=c[f];A.start<=p.start+p.count+1?p.count=Math.max(p.count,A.start+A.count-p.start):(++d,c[d]=A)}c.length=d+1;for(let f=0,p=c.length;f<p;f++){const A=c[f];n.bufferSubData(u,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var rU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oU=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fU=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_U=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DU=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PU="gl_FragColor = linearToOutputTexel( gl_FragColor );",FU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$U=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,H3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eQ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tQ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nQ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iQ=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sQ=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rQ=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aQ=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cQ=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uQ=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hQ=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dQ=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fQ=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AQ=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mQ=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gQ=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_Q=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EQ=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vQ=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yQ=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xQ=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CQ=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SQ=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bQ=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wQ=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IQ=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TQ=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MQ=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DQ=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RQ=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BQ=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LQ=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NQ=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PQ=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FQ=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kQ=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:rU,alphahash_pars_fragment:oU,alphamap_fragment:aU,alphamap_pars_fragment:lU,alphatest_fragment:cU,alphatest_pars_fragment:uU,aomap_fragment:hU,aomap_pars_fragment:dU,batching_pars_vertex:fU,batching_vertex:pU,begin_vertex:AU,beginnormal_vertex:mU,bsdfs:gU,iridescence_fragment:_U,bumpmap_pars_fragment:EU,clipping_planes_fragment:vU,clipping_planes_pars_fragment:yU,clipping_planes_pars_vertex:xU,clipping_planes_vertex:CU,color_fragment:SU,color_pars_fragment:bU,color_pars_vertex:wU,color_vertex:IU,common:TU,cube_uv_reflection_fragment:MU,defaultnormal_vertex:DU,displacementmap_pars_vertex:RU,displacementmap_vertex:BU,emissivemap_fragment:LU,emissivemap_pars_fragment:NU,colorspace_fragment:PU,colorspace_pars_fragment:FU,envmap_fragment:kU,envmap_common_pars_fragment:OU,envmap_pars_fragment:UU,envmap_pars_vertex:QU,envmap_physical_pars_fragment:$U,envmap_vertex:HU,fog_vertex:GU,fog_pars_vertex:VU,fog_fragment:zU,fog_pars_fragment:WU,gradientmap_pars_fragment:qU,lightmap_pars_fragment:YU,lights_lambert_fragment:jU,lights_lambert_pars_fragment:XU,lights_pars_begin:KU,lights_toon_fragment:JU,lights_toon_pars_fragment:ZU,lights_phong_fragment:e3,lights_phong_pars_fragment:t3,lights_physical_fragment:n3,lights_physical_pars_fragment:i3,lights_fragment_begin:s3,lights_fragment_maps:r3,lights_fragment_end:o3,logdepthbuf_fragment:a3,logdepthbuf_pars_fragment:l3,logdepthbuf_pars_vertex:c3,logdepthbuf_vertex:u3,map_fragment:h3,map_pars_fragment:d3,map_particle_fragment:f3,map_particle_pars_fragment:p3,metalnessmap_fragment:A3,metalnessmap_pars_fragment:m3,morphinstance_vertex:g3,morphcolor_vertex:_3,morphnormal_vertex:E3,morphtarget_pars_vertex:v3,morphtarget_vertex:y3,normal_fragment_begin:x3,normal_fragment_maps:C3,normal_pars_fragment:S3,normal_pars_vertex:b3,normal_vertex:w3,normalmap_pars_fragment:I3,clearcoat_normal_fragment_begin:T3,clearcoat_normal_fragment_maps:M3,clearcoat_pars_fragment:D3,iridescence_pars_fragment:R3,opaque_fragment:B3,packing:L3,premultiplied_alpha_fragment:N3,project_vertex:P3,dithering_fragment:F3,dithering_pars_fragment:k3,roughnessmap_fragment:O3,roughnessmap_pars_fragment:U3,shadowmap_pars_fragment:Q3,shadowmap_pars_vertex:H3,shadowmap_vertex:G3,shadowmask_pars_fragment:V3,skinbase_vertex:z3,skinning_pars_vertex:W3,skinning_vertex:q3,skinnormal_vertex:Y3,specularmap_fragment:j3,specularmap_pars_fragment:X3,tonemapping_fragment:K3,tonemapping_pars_fragment:$3,transmission_fragment:J3,transmission_pars_fragment:Z3,uv_pars_fragment:eQ,uv_pars_vertex:tQ,uv_vertex:nQ,worldpos_vertex:iQ,background_vert:sQ,background_frag:rQ,backgroundCube_vert:oQ,backgroundCube_frag:aQ,cube_vert:lQ,cube_frag:cQ,depth_vert:uQ,depth_frag:hQ,distanceRGBA_vert:dQ,distanceRGBA_frag:fQ,equirect_vert:pQ,equirect_frag:AQ,linedashed_vert:mQ,linedashed_frag:gQ,meshbasic_vert:_Q,meshbasic_frag:EQ,meshlambert_vert:vQ,meshlambert_frag:yQ,meshmatcap_vert:xQ,meshmatcap_frag:CQ,meshnormal_vert:SQ,meshnormal_frag:bQ,meshphong_vert:wQ,meshphong_frag:IQ,meshphysical_vert:TQ,meshphysical_frag:MQ,meshtoon_vert:DQ,meshtoon_frag:RQ,points_vert:BQ,points_frag:LQ,shadow_vert:NQ,shadow_frag:PQ,sprite_vert:FQ,sprite_frag:kQ},Re={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},fs={basic:{uniforms:fi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:fi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:fi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:fi([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:fi([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:fi([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:fi([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:fi([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:fi([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:fi([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:fi([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:fi([Re.common,Re.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:fi([Re.lights,Re.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};fs.physical={uniforms:fi([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Nh={r:0,b:0,g:0},Uo=new $s,OQ=new at;function UQ(n,e,t,i,s,r,o){const a=new Ke(0);let l=r===!0?0:1,u,h,c=null,d=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function A(_){let v=!1;const x=p(_);x===null?m(a,l):x&&x.isColor&&(m(x,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,v){const x=p(v);x&&(x.isCubeTexture||x.mapping===Mf)?(h===void 0&&(h=new dn(new Gu(1,1,1),new Js({name:"BackgroundCubeMaterial",uniforms:Vl(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Uo.copy(v.backgroundRotation),Uo.x*=-1,Uo.y*=-1,Uo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Uo.y*=-1,Uo.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(OQ.makeRotationFromEuler(Uo)),h.material.toneMapped=yt.getTransfer(x.colorSpace)!==Nt,(c!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new dn(new Hr(2,2),new Js({name:"BackgroundMaterial",uniforms:Vl(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function m(_,v){_.getRGB(Nh,EI(n)),i.buffers.color.setClear(Nh.r,Nh.g,Nh.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:A,addToRenderList:g,dispose:E}}function QQ(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(C,D,L,P,H){let O=!1;const F=c(P,L,D);r!==F&&(r=F,u(r.object)),O=f(C,P,L,H),O&&p(C,P,L,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(C,D,L,P),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function u(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function c(C,D,L){const P=L.wireframe===!0;let H=i[C.id];H===void 0&&(H={},i[C.id]=H);let O=H[D.id];O===void 0&&(O={},H[D.id]=O);let F=O[P];return F===void 0&&(F=d(l()),O[P]=F),F}function d(C){const D=[],L=[],P=[];for(let H=0;H<t;H++)D[H]=0,L[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,D,L,P){const H=r.attributes,O=D.attributes;let F=0;const G=L.getAttributes();for(const B in G)if(G[B].location>=0){const pe=H[B];let me=O[B];if(me===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(me=C.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function p(C,D,L,P){const H={},O=D.attributes;let F=0;const G=L.getAttributes();for(const B in G)if(G[B].location>=0){let pe=O[B];pe===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),H[B]=me,F++}r.attributes=H,r.attributesNum=F,r.index=P}function A(){const C=r.newAttributes;for(let D=0,L=C.length;D<L;D++)C[D]=0}function g(C){m(C,0)}function m(C,D){const L=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;L[C]=1,P[C]===0&&(n.enableVertexAttribArray(C),P[C]=1),H[C]!==D&&(n.vertexAttribDivisor(C,D),H[C]=D)}function E(){const C=r.newAttributes,D=r.enabledAttributes;for(let L=0,P=D.length;L<P;L++)D[L]!==C[L]&&(n.disableVertexAttribArray(L),D[L]=0)}function _(C,D,L,P,H,O,F){F===!0?n.vertexAttribIPointer(C,D,L,H,O):n.vertexAttribPointer(C,D,L,P,H,O)}function v(C,D,L,P){A();const H=P.attributes,O=L.getAttributes(),F=D.defaultAttributeValues;for(const G in O){const B=O[G];if(B.location>=0){let ae=H[G];if(ae===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const pe=ae.normalized,me=ae.itemSize,be=e.get(ae);if(be===void 0)continue;const Me=be.buffer,K=be.type,he=be.bytesPerElement,ye=K===n.INT||K===n.UNSIGNED_INT||ae.gpuType===G_;if(ae.isInterleavedBufferAttribute){const U=ae.data,ne=U.stride,le=ae.offset;if(U.isInstancedInterleavedBuffer){for(let oe=0;oe<B.locationSize;oe++)m(B.location+oe,U.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let oe=0;oe<B.locationSize;oe++)g(B.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let oe=0;oe<B.locationSize;oe++)_(B.location+oe,me/B.locationSize,K,pe,ne*he,(le+me/B.locationSize*oe)*he,ye)}else{if(ae.isInstancedBufferAttribute){for(let U=0;U<B.locationSize;U++)m(B.location+U,ae.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let U=0;U<B.locationSize;U++)g(B.location+U);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let U=0;U<B.locationSize;U++)_(B.location+U,me/B.locationSize,K,pe,me*he,me/B.locationSize*U*he,ye)}}else if(F!==void 0){const pe=F[G];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(B.location,pe);break;case 3:n.vertexAttrib3fv(B.location,pe);break;case 4:n.vertexAttrib4fv(B.location,pe);break;default:n.vertexAttrib1fv(B.location,pe)}}}}E()}function x(){T();for(const C in i){const D=i[C];for(const L in D){const P=D[L];for(const H in P)h(P[H].object),delete P[H];delete D[L]}delete i[C]}}function S(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const L in D){const P=D[L];for(const H in P)h(P[H].object),delete P[H];delete D[L]}delete i[C.id]}function w(C){for(const D in i){const L=i[D];if(L[C.id]===void 0)continue;const P=L[C.id];for(const H in P)h(P[H].object),delete P[H];delete L[C.id]}}function T(){y(),o=!0,r!==s&&(r=s,u(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:g,disableUnusedAttributes:E}}function HQ(n,e,t){let i;function s(u){i=u}function r(u,h){n.drawArrays(i,u,h),t.update(h,i,1)}function o(u,h,c){c!==0&&(n.drawArraysInstanced(i,u,h,c),t.update(h,i,c))}function a(u,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,c);let f=0;for(let p=0;p<c;p++)f+=h[p];t.update(f,i,1)}function l(u,h,c,d){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)o(u[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,h,0,d,0,c);let p=0;for(let A=0;A<c;A++)p+=h[A]*d[A];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function GQ(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Cn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ai&&!T)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const c=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:A,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,maxSamples:S}}function VQ(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new so,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||i!==0||s;return s=d,i=c.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){t=h(c,d,0)},this.setState=function(c,d,f){const p=c.clippingPlanes,A=c.clipIntersection,g=c.clipShadows,m=n.get(c);if(!s||p===null||p.length===0||r&&!g)r?h(null):u();else{const E=r?0:i,_=E*4;let v=m.clippingState||null;l.value=v,v=h(p,d,_,f);for(let x=0;x!==_;++x)v[x]=t[x];m.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(c,d,f,p){const A=c!==null?c.length:0;let g=null;if(A!==0){if(g=l.value,p!==!0||g===null){const m=f+A*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=f;_!==A;++_,v+=4)o.copy(c[_]).applyMatrix4(E,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,g}}function zQ(n){let e=new WeakMap;function t(o,a){return a===qd?o.mapping=fa:a===qm&&(o.mapping=Ul),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qd||a===qm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new l2(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const rl=4,Dy=[.125,.215,.35,.446,.526,.582],Xo=20,lA=new Nf,Ry=new Ke;let cA=null,uA=0,hA=0,dA=!1;const qo=(1+Math.sqrt(5))/2,Ya=1/qo,By=[new V(-qo,Ya,0),new V(qo,Ya,0),new V(-Ya,0,qo),new V(Ya,0,qo),new V(0,qo,-Ya),new V(0,qo,Ya),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Ly{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){cA=this._renderer.getRenderTarget(),uA=this._renderer.getActiveCubeFace(),hA=this._renderer.getActiveMipmapLevel(),dA=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Py(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cA,uA,hA),this._renderer.xr.enabled=dA,e.scissorTest=!1,Ph(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fa||e.mapping===Ul?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cA=this._renderer.getRenderTarget(),uA=this._renderer.getActiveCubeFace(),hA=this._renderer.getActiveMipmapLevel(),dA=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:_i,format:Cn,colorSpace:Jn,depthBuffer:!1},s=Ny(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ny(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WQ(r)),this._blurMaterial=qQ(r,e,t)}return s}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,lA)}_sceneToCubeUV(e,t,i,s){const a=new mi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(Ry),h.toneMapping=yo,h.autoClear=!1;const f=new Es({name:"PMREM.Background",side:Di,depthWrite:!1,depthTest:!1}),p=new dn(new Gu,f);let A=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,A=!0):(f.color.copy(Ry),A=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):E===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;Ph(s,E*_,m>2?_:0,_,_),h.setRenderTarget(s),A&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fa||e.mapping===Ul;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Py());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ph(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,lA)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=By[(s-r-1)%By.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new dn(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xo-1),A=r/p,g=isFinite(r)?1+Math.floor(h*A):Xo;g>Xo&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xo}`);const m=[];let E=0;for(let w=0;w<Xo;++w){const T=w/A,y=Math.exp(-T*T/2);m.push(y),w===0?E+=y:w<g&&(E+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;const v=this._sizeLods[s],x=3*v*(s>_-rl?s-_+rl:0),S=4*(this._cubeSize-v);Ph(t,x,S,3*v,2*v),l.setRenderTarget(t),l.render(c,lA)}}function WQ(n){const e=[],t=[],i=[];let s=n;const r=n-rl+1+Dy.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-rl?l=Dy[o-n+rl-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,c=1+u,d=[h,h,c,h,c,c,h,h,c,c,h,c],f=6,p=6,A=3,g=2,m=1,E=new Float32Array(A*p*f),_=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let S=0;S<f;S++){const w=S%3*2/3-1,T=S>2?0:-1,y=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];E.set(y,A*p*S),_.set(d,g*p*S);const C=[S,S,S,S,S,S];v.set(C,m*p*S)}const x=new qi;x.setAttribute("position",new jt(E,A)),x.setAttribute("uv",new jt(_,g)),x.setAttribute("faceIndex",new jt(v,m)),e.push(x),s>rl&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ny(n,e,t){const i=new ma(n,e,t);return i.texture.mapping=Mf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ph(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qQ(n,e,t){const i=new Float32Array(Xo),s=new V(0,1,0);return new Js({name:"SphericalGaussianBlur",defines:{n:Xo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:t0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vo,depthTest:!1,depthWrite:!1})}function Py(){return new Js({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:t0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vo,depthTest:!1,depthWrite:!1})}function Fy(){return new Js({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:t0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vo,depthTest:!1,depthWrite:!1})}function t0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YQ(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qd||l===qm,h=l===fa||l===Ul;if(u||h){let c=e.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ly(n)),c=u?t.fromEquirectangular(a,c):t.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return u&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ly(n)),c=u?t.fromEquirectangular(a):t.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function s(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jQ(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$a("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function XQ(n,e,t,i){const s={},r=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function u(c){const d=[],f=c.index,p=c.attributes.position;let A=0;if(f!==null){const E=f.array;A=f.version;for(let _=0,v=E.length;_<v;_+=3){const x=E[_+0],S=E[_+1],w=E[_+2];d.push(x,S,S,w,w,x)}}else if(p!==void 0){const E=p.array;A=p.version;for(let _=0,v=E.length/3-1;_<v;_+=3){const x=_+0,S=_+1,w=_+2;d.push(x,S,S,w,w,x)}}else return;const g=new(hI(d)?_I:gI)(d,1);g.version=A;const m=r.get(c);m&&e.remove(m),r.set(c,g)}function h(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&u(c)}else u(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:h}}function KQ(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function u(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function c(d,f,p,A){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)u(d[m]/o,f[m],A[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,A,0,p);let m=0;for(let E=0;E<p;E++)m+=f[E]*A[E];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=c}function $Q(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function JQ(n,e,t){const i=new WeakMap,s=new Ct;function r(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==c){let y=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),p===!0&&(_=2),A===!0&&(_=3);let v=a.attributes.position.count*_,x=1;v>e.maxTextureSize&&(x=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*x*4*c),w=new fI(S,v,x,c);w.type=ai,w.needsUpdate=!0;const T=_*4;for(let C=0;C<c;C++){const D=g[C],L=m[C],P=E[C],H=v*x*4*C;for(let O=0;O<D.count;O++){const F=O*T;f===!0&&(s.fromBufferAttribute(D,O),S[H+F+0]=s.x,S[H+F+1]=s.y,S[H+F+2]=s.z,S[H+F+3]=0),p===!0&&(s.fromBufferAttribute(L,O),S[H+F+4]=s.x,S[H+F+5]=s.y,S[H+F+6]=s.z,S[H+F+7]=0),A===!0&&(s.fromBufferAttribute(P,O),S[H+F+8]=s.x,S[H+F+9]=s.y,S[H+F+10]=s.z,S[H+F+11]=P.itemSize===4?s.w:1)}}d={count:c,texture:w,size:new ze(v,x)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let A=0;A<u.length;A++)f+=u[A];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ZQ(n,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,h=l.geometry,c=e.get(l,h);if(s.get(c)!==u&&(e.update(c),s.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return c}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}const DI=new on,ky=new wI(1,1),RI=new fI,BI=new pI,LI=new yI,Oy=[],Uy=[],Qy=new Float32Array(16),Hy=new Float32Array(9),Gy=new Float32Array(4);function Jl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Oy[s];if(r===void 0&&(r=new Float32Array(s),Oy[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pf(n,e){let t=Uy[e];t===void 0&&(t=new Int32Array(e),Uy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eH(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;n.uniform2fv(this.addr,e),Bn(t,e)}}function nH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;n.uniform3fv(this.addr,e),Bn(t,e)}}function iH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;n.uniform4fv(this.addr,e),Bn(t,e)}}function sH(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bn(t,e)}else{if(Rn(t,i))return;Gy.set(i),n.uniformMatrix2fv(this.addr,!1,Gy),Bn(t,i)}}function rH(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bn(t,e)}else{if(Rn(t,i))return;Hy.set(i),n.uniformMatrix3fv(this.addr,!1,Hy),Bn(t,i)}}function oH(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bn(t,e)}else{if(Rn(t,i))return;Qy.set(i),n.uniformMatrix4fv(this.addr,!1,Qy),Bn(t,i)}}function aH(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;n.uniform2iv(this.addr,e),Bn(t,e)}}function cH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;n.uniform3iv(this.addr,e),Bn(t,e)}}function uH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;n.uniform4iv(this.addr,e),Bn(t,e)}}function hH(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;n.uniform2uiv(this.addr,e),Bn(t,e)}}function fH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;n.uniform3uiv(this.addr,e),Bn(t,e)}}function pH(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;n.uniform4uiv(this.addr,e),Bn(t,e)}}function AH(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ky.compareFunction=cI,r=ky):r=DI,t.setTexture2D(e||r,s)}function mH(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||BI,s)}function gH(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||LI,s)}function _H(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||RI,s)}function EH(n){switch(n){case 5126:return eH;case 35664:return tH;case 35665:return nH;case 35666:return iH;case 35674:return sH;case 35675:return rH;case 35676:return oH;case 5124:case 35670:return aH;case 35667:case 35671:return lH;case 35668:case 35672:return cH;case 35669:case 35673:return uH;case 5125:return hH;case 36294:return dH;case 36295:return fH;case 36296:return pH;case 35678:case 36198:case 36298:case 36306:case 35682:return AH;case 35679:case 36299:case 36307:return mH;case 35680:case 36300:case 36308:case 36293:return gH;case 36289:case 36303:case 36311:case 36292:return _H}}function vH(n,e){n.uniform1fv(this.addr,e)}function yH(n,e){const t=Jl(e,this.size,2);n.uniform2fv(this.addr,t)}function xH(n,e){const t=Jl(e,this.size,3);n.uniform3fv(this.addr,t)}function CH(n,e){const t=Jl(e,this.size,4);n.uniform4fv(this.addr,t)}function SH(n,e){const t=Jl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bH(n,e){const t=Jl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wH(n,e){const t=Jl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IH(n,e){n.uniform1iv(this.addr,e)}function TH(n,e){n.uniform2iv(this.addr,e)}function MH(n,e){n.uniform3iv(this.addr,e)}function DH(n,e){n.uniform4iv(this.addr,e)}function RH(n,e){n.uniform1uiv(this.addr,e)}function BH(n,e){n.uniform2uiv(this.addr,e)}function LH(n,e){n.uniform3uiv(this.addr,e)}function NH(n,e){n.uniform4uiv(this.addr,e)}function PH(n,e,t){const i=this.cache,s=e.length,r=Pf(t,s);Rn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||DI,r[o])}function FH(n,e,t){const i=this.cache,s=e.length,r=Pf(t,s);Rn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||BI,r[o])}function kH(n,e,t){const i=this.cache,s=e.length,r=Pf(t,s);Rn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||LI,r[o])}function OH(n,e,t){const i=this.cache,s=e.length,r=Pf(t,s);Rn(i,r)||(n.uniform1iv(this.addr,r),Bn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||RI,r[o])}function UH(n){switch(n){case 5126:return vH;case 35664:return yH;case 35665:return xH;case 35666:return CH;case 35674:return SH;case 35675:return bH;case 35676:return wH;case 5124:case 35670:return IH;case 35667:case 35671:return TH;case 35668:case 35672:return MH;case 35669:case 35673:return DH;case 5125:return RH;case 36294:return BH;case 36295:return LH;case 36296:return NH;case 35678:case 36198:case 36298:case 36306:case 35682:return PH;case 35679:case 36299:case 36307:return FH;case 35680:case 36300:case 36308:case 36293:return kH;case 36289:case 36303:case 36311:case 36292:return OH}}class QH{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=EH(t.type)}}class HH{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UH(t.type)}}class GH{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const fA=/(\w+)(\])?(\[|\.)?/g;function Vy(n,e){n.seq.push(e),n.map[e.id]=e}function VH(n,e,t){const i=n.name,s=i.length;for(fA.lastIndex=0;;){const r=fA.exec(i),o=fA.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Vy(t,u===void 0?new QH(a,n,e):new HH(a,n,e));break}else{let c=t.map[a];c===void 0&&(c=new GH(a),Vy(t,c)),t=c}}}class Ad{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);VH(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function zy(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zH=37297;let WH=0;function qH(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Wy=new ct;function YH(n){yt._getMatrix(Wy,yt.workingColorSpace,n);const e=`mat3( ${Wy.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case ef:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+qH(n.getShaderSource(e),o)}else return s}function jH(n,e){const t=YH(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XH(n,e){let t;switch(e){case Kk:t="Linear";break;case $k:t="Reinhard";break;case Jk:t="Cineon";break;case Zk:t="ACESFilmic";break;case tO:t="AgX";break;case nO:t="Neutral";break;case eO:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fh=new V;function KH(){yt.getLuminanceCoefficients(Fh);const n=Fh.x.toFixed(4),e=Fh.y.toFixed(4),t=Fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $H(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uc).join(`
`)}function JH(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZH(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Uc(n){return n!==""}function Yy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eG=/^[ \t]*#include +<([\w\d./]+)>/gm;function pg(n){return n.replace(eG,nG)}const tG=new Map;function nG(n,e){let t=ut[e];if(t===void 0){const i=tG.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pg(t)}const iG=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xy(n){return n.replace(iG,sG)}function sG(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ky(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rG(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jw?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rk?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function oG(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fa:case Ul:e="ENVMAP_TYPE_CUBE";break;case Mf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aG(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ul:e="ENVMAP_MODE_REFRACTION";break}return e}function lG(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $w:e="ENVMAP_BLENDING_MULTIPLY";break;case jk:e="ENVMAP_BLENDING_MIX";break;case Xk:e="ENVMAP_BLENDING_ADD";break}return e}function cG(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uG(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rG(t),u=oG(t),h=aG(t),c=lG(t),d=cG(t),f=$H(t),p=JH(r),A=s.createProgram();let g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Uc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Uc).join(`
`),m.length>0&&(m+=`
`)):(g=[Ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uc).join(`
`),m=[Ky(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yo?"#define TONE_MAPPING":"",t.toneMapping!==yo?ut.tonemapping_pars_fragment:"",t.toneMapping!==yo?XH("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,jH("linearToOutputTexel",t.outputColorSpace),KH(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uc).join(`
`)),o=pg(o),o=Yy(o,t),o=jy(o,t),a=pg(a),a=Yy(a,t),a=jy(a,t),o=Xy(o),a=Xy(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=E+g+o,v=E+m+a,x=zy(s,s.VERTEX_SHADER,_),S=zy(s,s.FRAGMENT_SHADER,v);s.attachShader(A,x),s.attachShader(A,S),t.index0AttributeName!==void 0?s.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function w(D){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(A).trim(),P=s.getShaderInfoLog(x).trim(),H=s.getShaderInfoLog(S).trim();let O=!0,F=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,A,x,S);else{const G=qy(s,x,"vertex"),B=qy(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+G+`
`+B)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(P===""||H==="")&&(F=!1);F&&(D.diagnostics={runnable:O,programLog:L,vertexShader:{log:P,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(x),s.deleteShader(S),T=new Ad(s,A),y=ZH(s,A)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(A,zH)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WH++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=x,this.fragmentShader=S,this}let hG=0;class dG{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fG(e),t.set(e,i)),i}}class fG{constructor(e){this.id=hG++,this.code=e,this.usedTimes=0}}function pG(n,e,t,i,s,r,o){const a=new AI,l=new dG,u=new Set,h=[],c=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(y){return u.add(y),y===0?"uv":`uv${y}`}function g(y,C,D,L,P){const H=L.fog,O=P.geometry,F=y.isMeshStandardMaterial?L.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),B=G&&G.mapping===Mf?G.image.height:null,ae=p[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,me=pe!==void 0?pe.length:0;let be=0;O.morphAttributes.position!==void 0&&(be=1),O.morphAttributes.normal!==void 0&&(be=2),O.morphAttributes.color!==void 0&&(be=3);let Me,K,he,ye;if(ae){const wt=fs[ae];Me=wt.vertexShader,K=wt.fragmentShader}else Me=y.vertexShader,K=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const U=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),le=P.isInstancedMesh===!0,oe=P.isBatchedMesh===!0,Ue=!!y.map,Ze=!!y.matcap,N=!!G,I=!!y.aoMap,$=!!y.lightMap,ie=!!y.bumpMap,Z=!!y.normalMap,J=!!y.displacementMap,ge=!!y.emissiveMap,se=!!y.metalnessMap,M=!!y.roughnessMap,b=y.anisotropy>0,k=y.clearcoat>0,Q=y.dispersion>0,W=y.iridescence>0,Y=y.sheen>0,fe=y.transmission>0,Ae=b&&!!y.anisotropyMap,Ee=k&&!!y.clearcoatMap,Je=k&&!!y.clearcoatNormalMap,de=k&&!!y.clearcoatRoughnessMap,we=W&&!!y.iridescenceMap,Oe=W&&!!y.iridescenceThicknessMap,je=Y&&!!y.sheenColorMap,Pe=Y&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,Xe=!!y.specularColorMap,bt=!!y.specularIntensityMap,q=fe&&!!y.transmissionMap,Be=fe&&!!y.thicknessMap,re=!!y.gradientMap,ce=!!y.alphaMap,De=y.alphaTest>0,Le=!!y.alphaHash,lt=!!y.extensions;let Wt=yo;y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Wt=n.toneMapping);const Ln={shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:K,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:oe,batchingColor:oe&&P._colorsTexture!==null,instancing:le,instancingColor:le&&P.instanceColor!==null,instancingMorph:le&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Jn,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:Ze,envMap:N,envMapMode:N&&G.mapping,envMapCubeUVHeight:B,aoMap:I,lightMap:$,bumpMap:ie,normalMap:Z,displacementMap:d&&J,emissiveMap:ge,normalMapObjectSpace:Z&&y.normalMapType===cO,normalMapTangentSpace:Z&&y.normalMapType===lI,metalnessMap:se,roughnessMap:M,anisotropy:b,anisotropyMap:Ae,clearcoat:k,clearcoatMap:Ee,clearcoatNormalMap:Je,clearcoatRoughnessMap:de,dispersion:Q,iridescence:W,iridescenceMap:we,iridescenceThicknessMap:Oe,sheen:Y,sheenColorMap:je,sheenRoughnessMap:Pe,specularMap:Ye,specularColorMap:Xe,specularIntensityMap:bt,transmission:fe,transmissionMap:q,thicknessMap:Be,gradientMap:re,opaque:y.transparent===!1&&y.blending===vl&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:De,alphaHash:Le,combine:y.combine,mapUv:Ue&&A(y.map.channel),aoMapUv:I&&A(y.aoMap.channel),lightMapUv:$&&A(y.lightMap.channel),bumpMapUv:ie&&A(y.bumpMap.channel),normalMapUv:Z&&A(y.normalMap.channel),displacementMapUv:J&&A(y.displacementMap.channel),emissiveMapUv:ge&&A(y.emissiveMap.channel),metalnessMapUv:se&&A(y.metalnessMap.channel),roughnessMapUv:M&&A(y.roughnessMap.channel),anisotropyMapUv:Ae&&A(y.anisotropyMap.channel),clearcoatMapUv:Ee&&A(y.clearcoatMap.channel),clearcoatNormalMapUv:Je&&A(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&A(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&A(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&A(y.iridescenceThicknessMap.channel),sheenColorMapUv:je&&A(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&A(y.sheenRoughnessMap.channel),specularMapUv:Ye&&A(y.specularMap.channel),specularColorMapUv:Xe&&A(y.specularColorMap.channel),specularIntensityMapUv:bt&&A(y.specularIntensityMap.channel),transmissionMapUv:q&&A(y.transmissionMap.channel),thicknessMapUv:Be&&A(y.thicknessMap.channel),alphaMapUv:ce&&A(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Ue||ce),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:ne,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&yt.getTransfer(y.map.colorSpace)===Nt,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&yt.getTransfer(y.emissiveMap.colorSpace)===Nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Us,flipSided:y.side===Di,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ln.vertexUv1s=u.has(1),Ln.vertexUv2s=u.has(2),Ln.vertexUv3s=u.has(3),u.clear(),Ln}function m(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)C.push(D),C.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(E(C,y),_(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function E(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function _(y,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reverseDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const C=p[y.type];let D;if(C){const L=fs[C];D=s2.clone(L.uniforms)}else D=y.uniforms;return D}function x(y,C){let D;for(let L=0,P=h.length;L<P;L++){const H=h[L];if(H.cacheKey===C){D=H,++D.usedTimes;break}}return D===void 0&&(D=new uG(n,C,y,r),h.push(D)),D}function S(y){if(--y.usedTimes===0){const C=h.indexOf(y);h[C]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:T}}function AG(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function mG(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $y(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jy(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(c,d,f,p,A,g){let m=n[e];return m===void 0?(m={id:c.id,object:c,geometry:d,material:f,groupOrder:p,renderOrder:c.renderOrder,z:A,group:g},n[e]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=c.renderOrder,m.z=A,m.group=g),e++,m}function a(c,d,f,p,A,g){const m=o(c,d,f,p,A,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(c,d,f,p,A,g){const m=o(c,d,f,p,A,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function u(c,d){t.length>1&&t.sort(c||mG),i.length>1&&i.sort(d||$y),s.length>1&&s.sort(d||$y)}function h(){for(let c=e,d=n.length;c<d;c++){const f=n[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:u}}function gG(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Jy,n.set(i,[o])):s>=r.length?(o=new Jy,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _G(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ke};break;case"SpotLight":t={position:new V,direction:new V,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function EG(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vG=0;function yG(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xG(n){const e=new _G,t=EG(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const s=new V,r=new at,o=new at;function a(u){let h=0,c=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,p=0,A=0,g=0,m=0,E=0,_=0,v=0,x=0,S=0,w=0;u.sort(yG);for(let y=0,C=u.length;y<C;y++){const D=u[y],L=D.color,P=D.intensity,H=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=L.r*P,c+=L.g*P,d+=L.b*P;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],P);w++}else if(D.isDirectionalLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,B=t.get(D);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=D.shadow.matrix,E++}i.directional[f]=F,f++}else if(D.isSpotLight){const F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(L).multiplyScalar(P),F.distance=H,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[A]=F;const G=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,G.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[A]=G.matrix,D.castShadow){const B=t.get(D);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[A]=B,i.spotShadowMap[A]=O,v++}A++}else if(D.isRectAreaLight){const F=e.get(D);F.color.copy(L).multiplyScalar(P),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=F,g++}else if(D.isPointLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){const G=D.shadow,B=t.get(D);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=D.shadow.matrix,_++}i.point[p]=F,p++}else if(D.isHemisphereLight){const F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(P),F.groundColor.copy(D.groundColor).multiplyScalar(P),i.hemi[m]=F,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=c,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==f||T.pointLength!==p||T.spotLength!==A||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==E||T.numPointShadows!==_||T.numSpotShadows!==v||T.numSpotMaps!==x||T.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=A,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,T.directionalLength=f,T.pointLength=p,T.spotLength=A,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=E,T.numPointShadows=_,T.numSpotShadows=v,T.numSpotMaps=x,T.numLightProbes=w,i.version=vG++)}function l(u,h){let c=0,d=0,f=0,p=0,A=0;const g=h.matrixWorldInverse;for(let m=0,E=u.length;m<E;m++){const _=u[m];if(_.isDirectionalLight){const v=i.directional[c];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),c++}else if(_.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const v=i.hemi[A];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),A++}}}return{setup:a,setupView:l,state:i}}function Zy(n){const e=new xG(n),t=[],i=[];function s(h){u.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function CG(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Zy(n),e.set(s,[a])):r>=o.length?(a=new Zy(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const SG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wG(n,e,t){let i=new Rf;const s=new ze,r=new ze,o=new Ct,a=new x2({depthPacking:lO}),l=new C2,u={},h=t.maxTextureSize,c={[Fr]:Di,[Di]:Fr,[Us]:Us},d=new Js({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:SG,fragmentShader:bG}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new qi;p.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new dn(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jw;let m=this.type;this.render=function(S,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const y=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(vo),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=m!==fr&&this.type===fr,H=m===fr&&this.type!==fr;for(let O=0,F=S.length;O<F;O++){const G=S[O],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ae=B.getFrameExtents();if(s.multiply(ae),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,B.mapSize.y=r.y)),B.map===null||P===!0||H===!0){const me=this.type!==fr?{minFilter:$n,magFilter:$n}:{};B.map!==null&&B.map.dispose(),B.map=new ma(s.x,s.y,me),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const pe=B.getViewportCount();for(let me=0;me<pe;me++){const be=B.getViewport(me);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),L.viewport(o),B.updateMatrices(G,me),i=B.getFrustum(),v(w,T,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===fr&&E(B,T),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(y,C,D)};function E(S,w){const T=e.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ma(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,T,d,A,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,T,f,A,null)}function _(S,w,T,y){let C=null;const D=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=T.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const L=C.uuid,P=w.uuid;let H=u[L];H===void 0&&(H={},u[L]=H);let O=H[P];O===void 0&&(O=C.clone(),H[P]=O,w.addEventListener("dispose",x)),C=O}if(C.visible=w.visible,C.wireframe=w.wireframe,y===fr?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:c[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=n.properties.get(C);L.light=T}return C}function v(S,w,T,y,C){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===fr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const P=e.update(S),H=S.material;if(Array.isArray(H)){const O=P.groups;for(let F=0,G=O.length;F<G;F++){const B=O[F],ae=H[B.materialIndex];if(ae&&ae.visible){const pe=_(S,ae,y,C);S.onBeforeShadow(n,S,w,T,P,pe,B),n.renderBufferDirect(T,null,P,pe,S,B),S.onAfterShadow(n,S,w,T,P,pe,B)}}}else if(H.visible){const O=_(S,H,y,C);S.onBeforeShadow(n,S,w,T,P,O,null),n.renderBufferDirect(T,null,P,O,S,null),S.onAfterShadow(n,S,w,T,P,O,null)}}const L=S.children;for(let P=0,H=L.length;P<H;P++)v(L[P],w,T,y,C)}function x(S){S.target.removeEventListener("dispose",x);for(const T in u){const y=u[T],C=S.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}const IG={[Um]:Qm,[Hm]:zm,[Gm]:Wm,[Ol]:Vm,[Qm]:Um,[zm]:Hm,[Wm]:Gm,[Vm]:Ol};function TG(n,e){function t(){let q=!1;const Be=new Ct;let re=null;const ce=new Ct(0,0,0,0);return{setMask:function(De){re!==De&&!q&&(n.colorMask(De,De,De,De),re=De)},setLocked:function(De){q=De},setClear:function(De,Le,lt,Wt,Ln){Ln===!0&&(De*=Wt,Le*=Wt,lt*=Wt),Be.set(De,Le,lt,Wt),ce.equals(Be)===!1&&(n.clearColor(De,Le,lt,Wt),ce.copy(Be))},reset:function(){q=!1,re=null,ce.set(-1,0,0,0)}}}function i(){let q=!1,Be=!1,re=null,ce=null,De=null;return{setReversed:function(Le){if(Be!==Le){const lt=e.get("EXT_clip_control");Be?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Wt=De;De=null,this.setClear(Wt)}Be=Le},getReversed:function(){return Be},setTest:function(Le){Le?U(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(Le){re!==Le&&!q&&(n.depthMask(Le),re=Le)},setFunc:function(Le){if(Be&&(Le=IG[Le]),ce!==Le){switch(Le){case Um:n.depthFunc(n.NEVER);break;case Qm:n.depthFunc(n.ALWAYS);break;case Hm:n.depthFunc(n.LESS);break;case Ol:n.depthFunc(n.LEQUAL);break;case Gm:n.depthFunc(n.EQUAL);break;case Vm:n.depthFunc(n.GEQUAL);break;case zm:n.depthFunc(n.GREATER);break;case Wm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Le}},setLocked:function(Le){q=Le},setClear:function(Le){De!==Le&&(Be&&(Le=1-Le),n.clearDepth(Le),De=Le)},reset:function(){q=!1,re=null,ce=null,De=null,Be=!1}}}function s(){let q=!1,Be=null,re=null,ce=null,De=null,Le=null,lt=null,Wt=null,Ln=null;return{setTest:function(wt){q||(wt?U(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(wt){Be!==wt&&!q&&(n.stencilMask(wt),Be=wt)},setFunc:function(wt,Ft,Ri){(re!==wt||ce!==Ft||De!==Ri)&&(n.stencilFunc(wt,Ft,Ri),re=wt,ce=Ft,De=Ri)},setOp:function(wt,Ft,Ri){(Le!==wt||lt!==Ft||Wt!==Ri)&&(n.stencilOp(wt,Ft,Ri),Le=wt,lt=Ft,Wt=Ri)},setLocked:function(wt){q=wt},setClear:function(wt){Ln!==wt&&(n.clearStencil(wt),Ln=wt)},reset:function(){q=!1,Be=null,re=null,ce=null,De=null,Le=null,lt=null,Wt=null,Ln=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let h={},c={},d=new WeakMap,f=[],p=null,A=!1,g=null,m=null,E=null,_=null,v=null,x=null,S=null,w=new Ke(0,0,0),T=0,y=!1,C=null,D=null,L=null,P=null,H=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=G>=2);let ae=null,pe={};const me=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Me=new Ct().fromArray(me),K=new Ct().fromArray(be);function he(q,Be,re,ce){const De=new Uint8Array(4),Le=n.createTexture();n.bindTexture(q,Le),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<re;lt++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Be,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Be+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Le}const ye={};ye[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Ol),ie(!1),Z(Lv),U(n.CULL_FACE),I(vo);function U(q){h[q]!==!0&&(n.enable(q),h[q]=!0)}function ne(q){h[q]!==!1&&(n.disable(q),h[q]=!1)}function le(q,Be){return c[q]!==Be?(n.bindFramebuffer(q,Be),c[q]=Be,q===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Be),q===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Be),!0):!1}function oe(q,Be){let re=f,ce=!1;if(q){re=d.get(Be),re===void 0&&(re=[],d.set(Be,re));const De=q.textures;if(re.length!==De.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,lt=De.length;Le<lt;Le++)re[Le]=n.COLOR_ATTACHMENT0+Le;re.length=De.length,ce=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ce=!0);ce&&n.drawBuffers(re)}function Ue(q){return p!==q?(n.useProgram(q),p=q,!0):!1}const Ze={[ro]:n.FUNC_ADD,[Bk]:n.FUNC_SUBTRACT,[Lk]:n.FUNC_REVERSE_SUBTRACT};Ze[Nk]=n.MIN,Ze[Pk]=n.MAX;const N={[Fk]:n.ZERO,[Kw]:n.ONE,[kk]:n.SRC_COLOR,[Om]:n.SRC_ALPHA,[Vk]:n.SRC_ALPHA_SATURATE,[Hk]:n.DST_COLOR,[Uk]:n.DST_ALPHA,[Ok]:n.ONE_MINUS_SRC_COLOR,[Wd]:n.ONE_MINUS_SRC_ALPHA,[Gk]:n.ONE_MINUS_DST_COLOR,[Qk]:n.ONE_MINUS_DST_ALPHA,[zk]:n.CONSTANT_COLOR,[Wk]:n.ONE_MINUS_CONSTANT_COLOR,[qk]:n.CONSTANT_ALPHA,[Yk]:n.ONE_MINUS_CONSTANT_ALPHA};function I(q,Be,re,ce,De,Le,lt,Wt,Ln,wt){if(q===vo){A===!0&&(ne(n.BLEND),A=!1);return}if(A===!1&&(U(n.BLEND),A=!0),q!==Xw){if(q!==g||wt!==y){if((m!==ro||v!==ro)&&(n.blendEquation(n.FUNC_ADD),m=ro,v=ro),wt)switch(q){case vl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.ONE,n.ONE);break;case Nv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case vl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}E=null,_=null,x=null,S=null,w.set(0,0,0),T=0,g=q,y=wt}return}De=De||Be,Le=Le||re,lt=lt||ce,(Be!==m||De!==v)&&(n.blendEquationSeparate(Ze[Be],Ze[De]),m=Be,v=De),(re!==E||ce!==_||Le!==x||lt!==S)&&(n.blendFuncSeparate(N[re],N[ce],N[Le],N[lt]),E=re,_=ce,x=Le,S=lt),(Wt.equals(w)===!1||Ln!==T)&&(n.blendColor(Wt.r,Wt.g,Wt.b,Ln),w.copy(Wt),T=Ln),g=q,y=!1}function $(q,Be){q.side===Us?ne(n.CULL_FACE):U(n.CULL_FACE);let re=q.side===Di;Be&&(re=!re),ie(re),q.blending===vl&&q.transparent===!1?I(vo):I(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const ce=q.stencilWrite;a.setTest(ce),ce&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ge(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(q){C!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),C=q)}function Z(q){q!==Mk?(U(n.CULL_FACE),q!==D&&(q===Lv?n.cullFace(n.BACK):q===Dk?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),D=q}function J(q){q!==L&&(F&&n.lineWidth(q),L=q)}function ge(q,Be,re){q?(U(n.POLYGON_OFFSET_FILL),(P!==Be||H!==re)&&(n.polygonOffset(Be,re),P=Be,H=re)):ne(n.POLYGON_OFFSET_FILL)}function se(q){q?U(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function M(q){q===void 0&&(q=n.TEXTURE0+O-1),ae!==q&&(n.activeTexture(q),ae=q)}function b(q,Be,re){re===void 0&&(ae===null?re=n.TEXTURE0+O-1:re=ae);let ce=pe[re];ce===void 0&&(ce={type:void 0,texture:void 0},pe[re]=ce),(ce.type!==q||ce.texture!==Be)&&(ae!==re&&(n.activeTexture(re),ae=re),n.bindTexture(q,Be||ye[q]),ce.type=q,ce.texture=Be)}function k(){const q=pe[ae];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function je(q){Me.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),Me.copy(q))}function Pe(q){K.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),K.copy(q))}function Ye(q,Be){let re=u.get(Be);re===void 0&&(re=new WeakMap,u.set(Be,re));let ce=re.get(q);ce===void 0&&(ce=n.getUniformBlockIndex(Be,q.name),re.set(q,ce))}function Xe(q,Be){const ce=u.get(Be).get(q);l.get(Be)!==ce&&(n.uniformBlockBinding(Be,ce,q.__bindingPointIndex),l.set(Be,ce))}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,pe={},c={},d=new WeakMap,f=[],p=null,A=!1,g=null,m=null,E=null,_=null,v=null,x=null,S=null,w=new Ke(0,0,0),T=0,y=!1,C=null,D=null,L=null,P=null,H=null,Me.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:ne,bindFramebuffer:le,drawBuffers:oe,useProgram:Ue,setBlending:I,setMaterial:$,setFlipSided:ie,setCullFace:Z,setLineWidth:J,setPolygonOffset:ge,setScissorTest:se,activeTexture:M,bindTexture:b,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:W,texImage2D:we,texImage3D:Oe,updateUBOMapping:Ye,uniformBlockBinding:Xe,texStorage2D:Je,texStorage3D:de,texSubImage2D:Y,texSubImage3D:fe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ee,scissor:je,viewport:Pe,reset:bt}}function MG(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ze,h=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(M,b){return f?new OffscreenCanvas(M,b):Tu("canvas")}function A(M,b,k){let Q=1;const W=se(M);if((W.width>k||W.height>k)&&(Q=k/Math.max(W.width,W.height)),Q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Y=Math.floor(Q*W.width),fe=Math.floor(Q*W.height);c===void 0&&(c=p(Y,fe));const Ae=b?p(Y,fe):c;return Ae.width=Y,Ae.height=fe,Ae.getContext("2d").drawImage(M,0,0,Y,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Y+"x"+fe+")."),Ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),M;return M}function g(M){return M.generateMipmaps}function m(M){n.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(M,b,k,Q,W=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=b;if(b===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),b===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),b===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),b===n.RGBA){const fe=W?ef:yt.getTransfer(Q);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=fe===Nt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(M,b){let k;return M?b===null||b===Aa||b===Ql?k=n.DEPTH24_STENCIL8:b===ai?k=n.DEPTH32F_STENCIL8:b===Cu&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Aa||b===Ql?k=n.DEPTH_COMPONENT24:b===ai?k=n.DEPTH_COMPONENT32F:b===Cu&&(k=n.DEPTH_COMPONENT16),k}function x(M,b){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==$n&&M.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?b.mipmaps.length:1}function S(M){const b=M.target;b.removeEventListener("dispose",S),T(b),b.isVideoTexture&&h.delete(b)}function w(M){const b=M.target;b.removeEventListener("dispose",w),C(b)}function T(M){const b=i.get(M);if(b.__webglInit===void 0)return;const k=M.source,Q=d.get(k);if(Q){const W=Q[b.__cacheKey];W.usedTimes--,W.usedTimes===0&&y(M),Object.keys(Q).length===0&&d.delete(k)}i.remove(M)}function y(M){const b=i.get(M);n.deleteTexture(b.__webglTexture);const k=M.source,Q=d.get(k);delete Q[b.__cacheKey],o.memory.textures--}function C(M){const b=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let W=0;W<b.__webglFramebuffer[Q].length;W++)n.deleteFramebuffer(b.__webglFramebuffer[Q][W]);else n.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=M.textures;for(let Q=0,W=k.length;Q<W;Q++){const Y=i.get(k[Q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(M)}let D=0;function L(){D=0}function P(){const M=D;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function H(M){const b=[];return b.push(M.wrapS),b.push(M.wrapT),b.push(M.wrapR||0),b.push(M.magFilter),b.push(M.minFilter),b.push(M.anisotropy),b.push(M.internalFormat),b.push(M.format),b.push(M.type),b.push(M.generateMipmaps),b.push(M.premultiplyAlpha),b.push(M.flipY),b.push(M.unpackAlignment),b.push(M.colorSpace),b.join()}function O(M,b){const k=i.get(M);if(M.isVideoTexture&&J(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,M,b);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function F(M,b){const k=i.get(M);if(M.version>0&&k.__version!==M.version){K(k,M,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function G(M,b){const k=i.get(M);if(M.version>0&&k.__version!==M.version){K(k,M,b);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function B(M,b){const k=i.get(M);if(M.version>0&&k.__version!==M.version){he(k,M,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}const ae={[pa]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Yd]:n.MIRRORED_REPEAT},pe={[$n]:n.NEAREST,[Jw]:n.NEAREST_MIPMAP_NEAREST,[Oc]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[dd]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},me={[uO]:n.NEVER,[mO]:n.ALWAYS,[hO]:n.LESS,[cI]:n.LEQUAL,[dO]:n.EQUAL,[AO]:n.GEQUAL,[fO]:n.GREATER,[pO]:n.NOTEQUAL};function be(M,b){if(b.type===ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===dd||b.magFilter===Oc||b.magFilter===_s||b.minFilter===On||b.minFilter===dd||b.minFilter===Oc||b.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ae[b.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ae[b.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ae[b.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,pe[b.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,pe[b.minFilter]),b.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$n||b.minFilter!==Oc&&b.minFilter!==_s||b.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(M,b){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",S));const Q=b.source;let W=d.get(Q);W===void 0&&(W={},d.set(Q,W));const Y=H(b);if(Y!==M.__cacheKey){W[Y]===void 0&&(W[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),W[Y].usedTimes++;const fe=W[M.__cacheKey];fe!==void 0&&(W[M.__cacheKey].usedTimes--,fe.usedTimes===0&&y(b)),M.__cacheKey=Y,M.__webglTexture=W[Y].texture}return k}function K(M,b,k){let Q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=n.TEXTURE_3D);const W=Me(M,b),Y=b.source;t.bindTexture(Q,M.__webglTexture,n.TEXTURE0+k);const fe=i.get(Y);if(Y.version!==fe.__version||W===!0){t.activeTexture(n.TEXTURE0+k);const Ae=yt.getPrimaries(yt.workingColorSpace),Ee=b.colorSpace===Qs?null:yt.getPrimaries(b.colorSpace),Je=b.colorSpace===Qs||Ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let de=A(b.image,!1,s.maxTextureSize);de=ge(b,de);const we=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type);let je=_(b.internalFormat,we,Oe,b.colorSpace,b.isVideoTexture);be(Q,b);let Pe;const Ye=b.mipmaps,Xe=b.isVideoTexture!==!0,bt=fe.__version===void 0||W===!0,q=Y.dataReady,Be=x(b,de);if(b.isDepthTexture)je=v(b.format===Hl,b.type),bt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,je,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,je,de.width,de.height,0,we,Oe,null));else if(b.isDataTexture)if(Ye.length>0){Xe&&bt&&t.texStorage2D(n.TEXTURE_2D,Be,je,Ye[0].width,Ye[0].height);for(let re=0,ce=Ye.length;re<ce;re++)Pe=Ye[re],Xe?q&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Pe.width,Pe.height,we,Oe,Pe.data):t.texImage2D(n.TEXTURE_2D,re,je,Pe.width,Pe.height,0,we,Oe,Pe.data);b.generateMipmaps=!1}else Xe?(bt&&t.texStorage2D(n.TEXTURE_2D,Be,je,de.width,de.height),q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,we,Oe,de.data)):t.texImage2D(n.TEXTURE_2D,0,je,de.width,de.height,0,we,Oe,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xe&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,je,Ye[0].width,Ye[0].height,de.depth);for(let re=0,ce=Ye.length;re<ce;re++)if(Pe=Ye[re],b.format!==Cn)if(we!==null)if(Xe){if(q)if(b.layerUpdates.size>0){const De=My(Pe.width,Pe.height,b.format,b.type);for(const Le of b.layerUpdates){const lt=Pe.data.subarray(Le*De/Pe.data.BYTES_PER_ELEMENT,(Le+1)*De/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Le,Pe.width,Pe.height,1,we,lt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Pe.width,Pe.height,de.depth,we,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,je,Pe.width,Pe.height,de.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Pe.width,Pe.height,de.depth,we,Oe,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,je,Pe.width,Pe.height,de.depth,0,we,Oe,Pe.data)}else{Xe&&bt&&t.texStorage2D(n.TEXTURE_2D,Be,je,Ye[0].width,Ye[0].height);for(let re=0,ce=Ye.length;re<ce;re++)Pe=Ye[re],b.format!==Cn?we!==null?Xe?q&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Pe.width,Pe.height,we,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?q&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Pe.width,Pe.height,we,Oe,Pe.data):t.texImage2D(n.TEXTURE_2D,re,je,Pe.width,Pe.height,0,we,Oe,Pe.data)}else if(b.isDataArrayTexture)if(Xe){if(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,je,de.width,de.height,de.depth),q)if(b.layerUpdates.size>0){const re=My(de.width,de.height,b.format,b.type);for(const ce of b.layerUpdates){const De=de.data.subarray(ce*re/de.data.BYTES_PER_ELEMENT,(ce+1)*re/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,de.width,de.height,1,we,Oe,De)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,Oe,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,je,de.width,de.height,de.depth,0,we,Oe,de.data);else if(b.isData3DTexture)Xe?(bt&&t.texStorage3D(n.TEXTURE_3D,Be,je,de.width,de.height,de.depth),q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,Oe,de.data)):t.texImage3D(n.TEXTURE_3D,0,je,de.width,de.height,de.depth,0,we,Oe,de.data);else if(b.isFramebufferTexture){if(bt)if(Xe)t.texStorage2D(n.TEXTURE_2D,Be,je,de.width,de.height);else{let re=de.width,ce=de.height;for(let De=0;De<Be;De++)t.texImage2D(n.TEXTURE_2D,De,je,re,ce,0,we,Oe,null),re>>=1,ce>>=1}}else if(Ye.length>0){if(Xe&&bt){const re=se(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Be,je,re.width,re.height)}for(let re=0,ce=Ye.length;re<ce;re++)Pe=Ye[re],Xe?q&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,we,Oe,Pe):t.texImage2D(n.TEXTURE_2D,re,je,we,Oe,Pe);b.generateMipmaps=!1}else if(Xe){if(bt){const re=se(de);t.texStorage2D(n.TEXTURE_2D,Be,je,re.width,re.height)}q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Oe,de)}else t.texImage2D(n.TEXTURE_2D,0,je,we,Oe,de);g(b)&&m(Q),fe.__version=Y.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function he(M,b,k){if(b.image.length!==6)return;const Q=Me(M,b),W=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+k);const Y=i.get(W);if(W.version!==Y.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const fe=yt.getPrimaries(yt.workingColorSpace),Ae=b.colorSpace===Qs?null:yt.getPrimaries(b.colorSpace),Ee=b.colorSpace===Qs||fe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Je=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,we=[];for(let ce=0;ce<6;ce++)!Je&&!de?we[ce]=A(b.image[ce],!0,s.maxCubemapSize):we[ce]=de?b.image[ce].image:b.image[ce],we[ce]=ge(b,we[ce]);const Oe=we[0],je=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),Ye=_(b.internalFormat,je,Pe,b.colorSpace),Xe=b.isVideoTexture!==!0,bt=Y.__version===void 0||Q===!0,q=W.dataReady;let Be=x(b,Oe);be(n.TEXTURE_CUBE_MAP,b);let re;if(Je){Xe&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,Ye,Oe.width,Oe.height);for(let ce=0;ce<6;ce++){re=we[ce].mipmaps;for(let De=0;De<re.length;De++){const Le=re[De];b.format!==Cn?je!==null?Xe?q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,Le.width,Le.height,je,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,Le.width,Le.height,je,Pe,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,Ye,Le.width,Le.height,0,je,Pe,Le.data)}}}else{if(re=b.mipmaps,Xe&&bt){re.length>0&&Be++;const ce=se(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,Ye,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(de){Xe?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,we[ce].width,we[ce].height,je,Pe,we[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,we[ce].width,we[ce].height,0,je,Pe,we[ce].data);for(let De=0;De<re.length;De++){const lt=re[De].image[ce].image;Xe?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,lt.width,lt.height,je,Pe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,Ye,lt.width,lt.height,0,je,Pe,lt.data)}}else{Xe?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,je,Pe,we[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,je,Pe,we[ce]);for(let De=0;De<re.length;De++){const Le=re[De];Xe?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,je,Pe,Le.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,Ye,je,Pe,Le.image[ce])}}}g(b)&&m(n.TEXTURE_CUBE_MAP),Y.__version=W.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function ye(M,b,k,Q,W,Y){const fe=r.convert(k.format,k.colorSpace),Ae=r.convert(k.type),Ee=_(k.internalFormat,fe,Ae,k.colorSpace),Je=i.get(b),de=i.get(k);if(de.__renderTarget=b,!Je.__hasExternalTextures){const we=Math.max(1,b.width>>Y),Oe=Math.max(1,b.height>>Y);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,Y,Ee,we,Oe,b.depth,0,fe,Ae,null):t.texImage2D(W,Y,Ee,we,Oe,0,fe,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Z(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,W,de.__webglTexture,0,ie(b)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,W,de.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(M,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,M),b.depthBuffer){const Q=b.depthTexture,W=Q&&Q.isDepthTexture?Q.type:null,Y=v(b.stencilBuffer,W),fe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=ie(b);Z(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Y,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Y,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,M)}else{const Q=b.textures;for(let W=0;W<Q.length;W++){const Y=Q[W],fe=r.convert(Y.format,Y.colorSpace),Ae=r.convert(Y.type),Ee=_(Y.internalFormat,fe,Ae,Y.colorSpace),Je=ie(b);k&&Z(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Ee,b.width,b.height):Z(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,Ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const W=Q.__webglTexture,Y=ie(b);if(b.depthTexture.format===yl)Z(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(b.depthTexture.format===Hl)Z(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function le(M){const b=i.get(M),k=M.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==M.depthTexture){const Q=M.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const W=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",W)};Q.addEventListener("dispose",W),b.__depthDisposeCallback=W}b.__boundDepthTexture=Q}if(M.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ne(b.__webglFramebuffer,M)}else if(k){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=n.createRenderbuffer(),U(b.__webglDepthbuffer[Q],M,!1);else{const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),U(b.__webglDepthbuffer,M,!1);else{const Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(M,b,k){const Q=i.get(M);b!==void 0&&ye(Q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&le(M)}function Ue(M){const b=M.texture,k=i.get(M),Q=i.get(b);M.addEventListener("dispose",w);const W=M.textures,Y=M.isWebGLCubeRenderTarget===!0,fe=W.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=b.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[Ae]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)k.__webglFramebuffer[Ae][Ee]=n.createFramebuffer()}else k.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)k.__webglFramebuffer[Ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Ae=0,Ee=W.length;Ae<Ee;Ae++){const Je=i.get(W[Ae]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&Z(M)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Ae=0;Ae<W.length;Ae++){const Ee=W[Ae];k.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Ae]);const Je=r.convert(Ee.format,Ee.colorSpace),de=r.convert(Ee.type),we=_(Ee.internalFormat,Je,de,Ee.colorSpace,M.isXRRenderTarget===!0),Oe=ie(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,we,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),U(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),be(n.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)ye(k.__webglFramebuffer[Ae][Ee],M,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ee);else ye(k.__webglFramebuffer[Ae],M,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);g(b)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Ae=0,Ee=W.length;Ae<Ee;Ae++){const Je=W[Ae],de=i.get(Je);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),be(n.TEXTURE_2D,Je),ye(k.__webglFramebuffer,M,Je,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),g(Je)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Ae=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Q.__webglTexture),be(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)ye(k.__webglFramebuffer[Ee],M,b,n.COLOR_ATTACHMENT0,Ae,Ee);else ye(k.__webglFramebuffer,M,b,n.COLOR_ATTACHMENT0,Ae,0);g(b)&&m(Ae),t.unbindTexture()}M.depthBuffer&&le(M)}function Ze(M){const b=M.textures;for(let k=0,Q=b.length;k<Q;k++){const W=b[k];if(g(W)){const Y=E(M),fe=i.get(W).__webglTexture;t.bindTexture(Y,fe),m(Y),t.unbindTexture()}}}const N=[],I=[];function $(M){if(M.samples>0){if(Z(M)===!1){const b=M.textures,k=M.width,Q=M.height;let W=n.COLOR_BUFFER_BIT;const Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(M),Ae=b.length>1;if(Ae)for(let Ee=0;Ee<b.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ee]);const Je=i.get(b[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,W,n.NEAREST),l===!0&&(N.length=0,I.length=0,N.push(n.COLOR_ATTACHMENT0+Ee),M.depthBuffer&&M.resolveDepthBuffer===!1&&(N.push(Y),I.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ee=0;Ee<b.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ee]);const Je=i.get(b[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const b=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ie(M){return Math.min(s.maxSamples,M.samples)}function Z(M){const b=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function J(M){const b=o.render.frame;h.get(M)!==b&&(h.set(M,b),M.update())}function ge(M,b){const k=M.colorSpace,Q=M.format,W=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||k!==Jn&&k!==Qs&&(yt.getTransfer(k)===Nt?(Q!==Cn||W!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function se(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(u.width=M.naturalWidth||M.width,u.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(u.width=M.displayWidth,u.height=M.displayHeight):(u.width=M.width,u.height=M.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=oe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Z}function DG(n,e){function t(i,s=Qs){let r;const o=yt.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===V_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===z_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tI)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zw)return n.BYTE;if(i===eI)return n.SHORT;if(i===Cu)return n.UNSIGNED_SHORT;if(i===G_)return n.INT;if(i===Aa)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===nI)return n.ALPHA;if(i===iI)return n.RGB;if(i===Cn)return n.RGBA;if(i===sI)return n.LUMINANCE;if(i===rI)return n.LUMINANCE_ALPHA;if(i===yl)return n.DEPTH_COMPONENT;if(i===Hl)return n.DEPTH_STENCIL;if(i===ho)return n.RED;if(i===W_)return n.RED_INTEGER;if(i===Jo)return n.RG;if(i===q_)return n.RG_INTEGER;if(i===Y_)return n.RGBA_INTEGER;if(i===fd||i===eu||i===pd||i===tu)if(o===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fd)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pd)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fd)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pd)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jd||i===Ym||i===Xd||i===jm)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ym)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jm)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kd||i===$d||i===Jd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kd||i===$d)return o===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jd)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Su||i===Xm||i===Km||i===$m||i===bu||i===Jm||i===Zm||i===eg||i===tg||i===ng||i===ig||i===sg||i===rg||i===og)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Su)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xm)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Km)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$m)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jm)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zm)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eg)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tg)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ng)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ig)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sg)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rg)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===og)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nu||i===ag||i===Zd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nu)return o===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ag)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oI||i===lg||i===cg||i===ug)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lg)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cg)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ug)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ql?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const RG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BG=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LG{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Js({vertexShader:RG,fragmentShader:BG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NG extends ya{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,c=null,d=null,f=null,p=null;const A=new LG,g=t.getContextAttributes();let m=null,E=null;const _=[],v=[],x=new ze;let S=null;const w=new mi;w.viewport=new Ct;const T=new mi;T.viewport=new Ct;const y=[w,T],C=new W2;let D=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=_[K];return he===void 0&&(he=new eA,_[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=_[K];return he===void 0&&(he=new eA,_[K]=he),he.getGripSpace()},this.getHand=function(K){let he=_[K];return he===void 0&&(he=new eA,_[K]=he),he.getHandSpace()};function P(K){const he=v.indexOf(K.inputSource);if(he===-1)return;const ye=_[he];ye!==void 0&&(ye.update(K.inputSource,K.frame,u||o),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",O);for(let K=0;K<_.length;K++){const he=v[K];he!==null&&(v[K]=null,_[K].disconnect(he))}D=null,L=null,A.reset(),e.setRenderTarget(m),f=null,d=null,c=null,s=null,E=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",H),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,U=null,ne=null;g.depth&&(ne=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=g.stencil?Hl:yl,U=g.stencil?Ql:Aa);const le={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};c=new XRWebGLBinding(s,t),d=c.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ma(d.textureWidth,d.textureHeight,{format:Cn,type:vn,depthTexture:new wI(d.textureWidth,d.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ma(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function O(K){for(let he=0;he<K.removed.length;he++){const ye=K.removed[he],U=v.indexOf(ye);U>=0&&(v[U]=null,_[U].disconnect(ye))}for(let he=0;he<K.added.length;he++){const ye=K.added[he];let U=v.indexOf(ye);if(U===-1){for(let le=0;le<_.length;le++)if(le>=v.length){v.push(ye),U=le;break}else if(v[le]===null){v[le]=ye,U=le;break}if(U===-1)break}const ne=_[U];ne&&ne.connect(ye)}}const F=new V,G=new V;function B(K,he,ye){F.setFromMatrixPosition(he.matrixWorld),G.setFromMatrixPosition(ye.matrixWorld);const U=F.distanceTo(G),ne=he.projectionMatrix.elements,le=ye.projectionMatrix.elements,oe=ne[14]/(ne[10]-1),Ue=ne[14]/(ne[10]+1),Ze=(ne[9]+1)/ne[5],N=(ne[9]-1)/ne[5],I=(ne[8]-1)/ne[0],$=(le[8]+1)/le[0],ie=oe*I,Z=oe*$,J=U/(-I+$),ge=J*-I;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ge),K.translateZ(J),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ne[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const se=oe+J,M=Ue+J,b=ie-ge,k=Z+(U-ge),Q=Ze*Ue/M*se,W=N*Ue/M*se;K.projectionMatrix.makePerspective(b,k,Q,W,se,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let he=K.near,ye=K.far;A.texture!==null&&(A.depthNear>0&&(he=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),C.near=T.near=w.near=he,C.far=T.far=w.far=ye,(D!==C.near||L!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,L=C.far),w.layers.mask=K.layers.mask|2,T.layers.mask=K.layers.mask|4,C.layers.mask=w.layers.mask|T.layers.mask;const U=K.parent,ne=C.cameras;ae(C,U);for(let le=0;le<ne.length;le++)ae(ne[le],U);ne.length===2?B(C,w,T):C.projectionMatrix.copy(w.projectionMatrix),pe(K,C,U)};function pe(K,he,ye){ye===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let me=null;function be(K,he){if(h=he.getViewerPose(u||o),p=he,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let U=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,U=!0);for(let oe=0;oe<ye.length;oe++){const Ue=ye[oe];let Ze=null;if(f!==null)Ze=f.getViewport(Ue);else{const I=c.getViewSubImage(d,Ue);Ze=I.viewport,oe===0&&(e.setRenderTargetTextures(E,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(E))}let N=y[oe];N===void 0&&(N=new mi,N.layers.enable(oe),N.viewport=new Ct,y[oe]=N),N.matrix.fromArray(Ue.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Ue.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),oe===0&&(C.matrix.copy(N.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),U===!0&&C.cameras.push(N)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&c){const oe=c.getDepthInformation(ye[0]);oe&&oe.isValid&&oe.texture&&A.init(e,oe,s.renderState)}}for(let ye=0;ye<_.length;ye++){const U=v[ye],ne=_[ye];U!==null&&ne!==void 0&&ne.update(U,he,u||o)}me&&me(K,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),p=null}const Me=new MI;Me.setAnimationLoop(be),this.setAnimationLoop=function(K){me=K},this.dispose=function(){}}}const Qo=new $s,PG=new at;function FG(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,EI(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,E,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),c(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),A(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,E,_):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Di&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Di&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const E=e.get(m),_=E.envMap,v=E.envMapRotation;_&&(g.envMap.value=_,Qo.copy(v),Qo.x*=-1,Qo.y*=-1,Qo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qo.y*=-1,Qo.z*=-1),g.envMapRotation.value.setFromMatrix4(PG.makeRotationFromEuler(Qo)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,E,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Di&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function A(g,m){const E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kG(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,_){const v=_.program;i.uniformBlockBinding(E,v)}function u(E,_){let v=s[E.id];v===void 0&&(p(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",g));const x=_.program;i.updateUBOMapping(E,x);const S=e.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function h(E){const _=c();E.__bindingPointIndex=_;const v=n.createBuffer(),x=E.__size,S=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,x,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function c(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=s[E.id],v=E.uniforms,x=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,w=v.length;S<w;S++){const T=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,C=T.length;y<C;y++){const D=T[y];if(f(D,S,y,x)===!0){const L=D.__offset,P=Array.isArray(D.value)?D.value:[D.value];let H=0;for(let O=0;O<P.length;O++){const F=P[O],G=A(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,L+H,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,_,v,x){const S=E.value,w=_+"_"+v;if(x[w]===void 0)return typeof S=="number"||typeof S=="boolean"?x[w]=S:x[w]=S.clone(),!0;{const T=x[w];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return x[w]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function p(E){const _=E.uniforms;let v=0;const x=16;for(let w=0,T=_.length;w<T;w++){const y=Array.isArray(_[w])?_[w]:[_[w]];for(let C=0,D=y.length;C<D;C++){const L=y[C],P=Array.isArray(L.value)?L.value:[L.value];for(let H=0,O=P.length;H<O;H++){const F=P[H],G=A(F),B=v%x,ae=B%G.boundary,pe=B+ae;v+=ae,pe!==0&&x-pe<G.storage&&(v+=x-pe),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=G.storage}}}const S=v%x;return S>0&&(v+=x-S),E.__size=v,E.__cache={},this}function A(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function g(E){const _=E.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:u,dispose:m}}class NI{constructor(e={}){const{canvas:t=LO(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),A=new Int32Array(4);let g=null,m=null;const E=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=yo,this.toneMappingExposure=1;const v=this;let x=!1,S=0,w=0,T=null,y=-1,C=null;const D=new Ct,L=new Ct;let P=null;const H=new Ke(0);let O=0,F=t.width,G=t.height,B=1,ae=null,pe=null;const me=new Ct(0,0,F,G),be=new Ct(0,0,F,G);let Me=!1;const K=new Rf;let he=!1,ye=!1;this.transmissionResolutionScale=1;const U=new at,ne=new at,le=new V,oe=new Ct,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function N(){return T===null?B:1}let I=i;function $(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Q_}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),I===null){const j="webgl2";if(I=$(j,R),I===null)throw $(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,Z,J,ge,se,M,b,k,Q,W,Y,fe,Ae,Ee,Je,de,we,Oe,je,Pe,Ye,Xe,bt,q;function Be(){ie=new jQ(I),ie.init(),Xe=new DG(I,ie),Z=new GQ(I,ie,e,Xe),J=new TG(I,ie),Z.reverseDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ge=new $Q(I),se=new AG,M=new MG(I,ie,J,se,Z,Xe,ge),b=new zQ(v),k=new YQ(v),Q=new sU(I),bt=new QQ(I,Q),W=new XQ(I,Q,ge,bt),Y=new ZQ(I,W,Q,ge),je=new JQ(I,Z,M),de=new VQ(se),fe=new pG(v,b,k,ie,Z,bt,de),Ae=new FG(v,se),Ee=new gG,Je=new CG(ie),Oe=new UQ(v,b,k,J,Y,f,l),we=new wG(v,Y,Z),q=new kG(I,ge,Z,J),Pe=new HQ(I,ie,ge),Ye=new KQ(I,ie,ge),ge.programs=fe.programs,v.capabilities=Z,v.extensions=ie,v.properties=se,v.renderLists=Ee,v.shadowMap=we,v.state=J,v.info=ge}Be();const re=new NG(v,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(F,G,!1))},this.getSize=function(R){return R.set(F,G)},this.setSize=function(R,j,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,G=j,t.width=Math.floor(R*B),t.height=Math.floor(j*B),ee===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(F*B,G*B).floor()},this.setDrawingBufferSize=function(R,j,ee){F=R,G=j,B=ee,t.width=Math.floor(R*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,j,ee,te){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,j,ee,te),J.viewport(D.copy(me).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(be)},this.setScissor=function(R,j,ee,te){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,j,ee,te),J.scissor(L.copy(be).multiplyScalar(B).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){J.setScissorTest(Me=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(R=!0,j=!0,ee=!0){let te=0;if(R){let X=!1;if(T!==null){const _e=T.texture.format;X=_e===Y_||_e===q_||_e===W_}if(X){const _e=T.texture.type,Ie=_e===vn||_e===Aa||_e===Cu||_e===Ql||_e===V_||_e===z_,ke=Oe.getClearColor(),Fe=Oe.getClearAlpha(),et=ke.r,it=ke.g,We=ke.b;Ie?(p[0]=et,p[1]=it,p[2]=We,p[3]=Fe,I.clearBufferuiv(I.COLOR,0,p)):(A[0]=et,A[1]=it,A[2]=We,A[3]=Fe,I.clearBufferiv(I.COLOR,0,A))}else te|=I.COLOR_BUFFER_BIT}j&&(te|=I.DEPTH_BUFFER_BIT),ee&&(te|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Oe.dispose(),Ee.dispose(),Je.dispose(),se.dispose(),b.dispose(),k.dispose(),Y.dispose(),bt.dispose(),q.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ca),re.removeEventListener("sessionend",Sa),tr.stop()};function ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=ge.autoReset,j=we.enabled,ee=we.autoUpdate,te=we.needsUpdate,X=we.type;Be(),ge.autoReset=R,we.enabled=j,we.autoUpdate=ee,we.needsUpdate=te,we.type=X}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const j=R.target;j.removeEventListener("dispose",lt),Wt(j)}function Wt(R){Ln(R),se.remove(R)}function Ln(R){const j=se.get(R).programs;j!==void 0&&(j.forEach(function(ee){fe.releaseProgram(ee)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ee,te,X,_e){j===null&&(j=Ue);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,ke=Wu(R,j,ee,te,X);J.setMaterial(te,Ie);let Fe=ee.index,et=1;if(te.wireframe===!0){if(Fe=W.getWireframeAttribute(ee),Fe===void 0)return;et=2}const it=ee.drawRange,We=ee.attributes.position;let At=it.start*et,St=(it.start+it.count)*et;_e!==null&&(At=Math.max(At,_e.start*et),St=Math.min(St,(_e.start+_e.count)*et)),Fe!==null?(At=Math.max(At,0),St=Math.min(St,Fe.count)):We!=null&&(At=Math.max(At,0),St=Math.min(St,We.count));const qt=St-At;if(qt<0||qt===1/0)return;bt.setup(X,te,ke,ee,Fe);let Lt,dt=Pe;if(Fe!==null&&(Lt=Q.get(Fe),dt=Ye,dt.setIndex(Lt)),X.isMesh)te.wireframe===!0?(J.setLineWidth(te.wireframeLinewidth*N()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(X.isLine){let Ve=te.linewidth;Ve===void 0&&(Ve=1),J.setLineWidth(Ve*N()),X.isLineSegments?dt.setMode(I.LINES):X.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else X.isPoints?dt.setMode(I.POINTS):X.isSprite&&dt.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ve=X._multiDrawStarts,An=X._multiDrawCounts,xt=X._multiDrawCount,Ei=Fe?Q.get(Fe).bytesPerElement:1,ws=se.get(te).currentProgram.getUniforms();for(let Zn=0;Zn<xt;Zn++)ws.setValue(I,"_gl_DrawID",Zn),dt.render(Ve[Zn]/Ei,An[Zn])}else if(X.isInstancedMesh)dt.renderInstances(At,qt,X.count);else if(ee.isInstancedBufferGeometry){const Ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,An=Math.min(ee.instanceCount,Ve);dt.renderInstances(At,qt,An)}else dt.render(At,qt)};function wt(R,j,ee){R.transparent===!0&&R.side===Us&&R.forceSinglePass===!1?(R.side=Di,R.needsUpdate=!0,en(R,j,ee),R.side=Fr,R.needsUpdate=!0,en(R,j,ee),R.side=Us):en(R,j,ee)}this.compile=function(R,j,ee=null){ee===null&&(ee=R),m=Je.get(ee),m.init(j),_.push(m),ee.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),R!==ee&&R.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const te=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let Ie=0;Ie<_e.length;Ie++){const ke=_e[Ie];wt(ke,ee,X),te.add(ke)}else wt(_e,ee,X),te.add(_e)}),_.pop(),m=null,te},this.compileAsync=function(R,j,ee=null){const te=this.compile(R,j,ee);return new Promise(X=>{function _e(){if(te.forEach(function(Ie){se.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){X(R);return}setTimeout(_e,10)}ie.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ft=null;function Ri(R){Ft&&Ft(R)}function Ca(){tr.stop()}function Sa(){tr.start()}const tr=new MI;tr.setAnimationLoop(Ri),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(R){Ft=R,re.setAnimationLoop(R),R===null?tr.stop():tr.start()},re.addEventListener("sessionstart",Ca),re.addEventListener("sessionend",Sa),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(j),j=re.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,j,T),m=Je.get(R,_.length),m.init(j),_.push(m),ne.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(ne),ye=this.localClippingEnabled,he=de.init(this.clippingPlanes,ye),g=Ee.get(R,E.length),g.init(),E.push(g),re.enabled===!0&&re.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&Zl(_e,j,-1/0,v.sortObjects)}Zl(R,j,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ae,pe),Ze=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ze&&Oe.addToRenderList(g,R),this.info.render.frame++,he===!0&&de.beginShadows();const ee=m.state.shadowsArray;we.render(ee,R,j),he===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=g.opaque,X=g.transmissive;if(m.setupLights(),j.isArrayCamera){const _e=j.cameras;if(X.length>0)for(let Ie=0,ke=_e.length;Ie<ke;Ie++){const Fe=_e[Ie];ec(te,X,R,Fe)}Ze&&Oe.render(R);for(let Ie=0,ke=_e.length;Ie<ke;Ie++){const Fe=_e[Ie];zu(g,R,Fe,Fe.viewport)}}else X.length>0&&ec(te,X,R,j),Ze&&Oe.render(R),zu(g,R,j);T!==null&&w===0&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,j),bt.resetDefaultState(),y=-1,C=null,_.pop(),_.length>0?(m=_[_.length-1],he===!0&&de.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Zl(R,j,ee,te){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){te&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);const Ie=Y.update(R),ke=R.material;ke.visible&&g.push(R,Ie,ke,ee,oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Ie=Y.update(R),ke=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),oe.copy(Ie.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(ke)){const Fe=Ie.groups;for(let et=0,it=Fe.length;et<it;et++){const We=Fe[et],At=ke[We.materialIndex];At&&At.visible&&g.push(R,Ie,At,ee,oe.z,We)}}else ke.visible&&g.push(R,Ie,ke,ee,oe.z,null)}}const _e=R.children;for(let Ie=0,ke=_e.length;Ie<ke;Ie++)Zl(_e[Ie],j,ee,te)}function zu(R,j,ee,te){const X=R.opaque,_e=R.transmissive,Ie=R.transparent;m.setupLightsView(ee),he===!0&&de.setGlobalState(v.clippingPlanes,ee),te&&J.viewport(D.copy(te)),X.length>0&&ba(X,j,ee),_e.length>0&&ba(_e,j,ee),Ie.length>0&&ba(Ie,j,ee),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function ec(R,j,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[te.id]===void 0&&(m.state.transmissionRenderTarget[te.id]=new ma(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?_i:vn,minFilter:_s,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const _e=m.state.transmissionRenderTarget[te.id],Ie=te.viewport||D;_e.setSize(Ie.z*v.transmissionResolutionScale,Ie.w*v.transmissionResolutionScale);const ke=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(H),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&Oe.render(ee);const Fe=v.toneMapping;v.toneMapping=yo;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),m.setupLightsView(te),he===!0&&de.setGlobalState(v.clippingPlanes,te),ba(R,ee,te),M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e),ie.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,At=j.length;We<At;We++){const St=j[We],qt=St.object,Lt=St.geometry,dt=St.material,Ve=St.group;if(dt.side===Us&&qt.layers.test(te.layers)){const An=dt.side;dt.side=Di,dt.needsUpdate=!0,tc(qt,ee,te,Lt,dt,Ve),dt.side=An,dt.needsUpdate=!0,it=!0}}it===!0&&(M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e))}v.setRenderTarget(ke),v.setClearColor(H,O),et!==void 0&&(te.viewport=et),v.toneMapping=Fe}function ba(R,j,ee){const te=j.isScene===!0?j.overrideMaterial:null;for(let X=0,_e=R.length;X<_e;X++){const Ie=R[X],ke=Ie.object,Fe=Ie.geometry,et=te===null?Ie.material:te,it=Ie.group;ke.layers.test(ee.layers)&&tc(ke,j,ee,Fe,et,it)}}function tc(R,j,ee,te,X,_e){R.onBeforeRender(v,j,ee,te,X,_e),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(v,j,ee,te,R,_e),X.transparent===!0&&X.side===Us&&X.forceSinglePass===!1?(X.side=Di,X.needsUpdate=!0,v.renderBufferDirect(ee,j,te,X,R,_e),X.side=Fr,X.needsUpdate=!0,v.renderBufferDirect(ee,j,te,X,R,_e),X.side=Us):v.renderBufferDirect(ee,j,te,X,R,_e),R.onAfterRender(v,j,ee,te,X,_e)}function en(R,j,ee){j.isScene!==!0&&(j=Ue);const te=se.get(R),X=m.state.lights,_e=m.state.shadowsArray,Ie=X.state.version,ke=fe.getParameters(R,X.state,_e,j,ee),Fe=fe.getProgramCacheKey(ke);let et=te.programs;te.environment=R.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(R.isMeshStandardMaterial?k:b).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",lt),et=new Map,te.programs=et);let it=et.get(Fe);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Ie)return pn(R,ke),it}else ke.uniforms=fe.getUniforms(R),R.onBeforeCompile(ke,v),it=fe.acquireProgram(ke,Fe),et.set(Fe,it),te.uniforms=ke.uniforms;const We=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=de.uniform),pn(R,ke),te.needsLights=To(R),te.lightsStateVersion=Ie,te.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function nc(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ad.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function pn(R,j){const ee=se.get(R);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.batchingColor=j.batchingColor,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.instancingMorph=j.instancingMorph,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function Wu(R,j,ee,te,X){j.isScene!==!0&&(j=Ue),M.resetTextureUnits();const _e=j.fog,Ie=te.isMeshStandardMaterial?j.environment:null,ke=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Jn,Fe=(te.isMeshStandardMaterial?k:b).get(te.envMap||Ie),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,it=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,At=!!ee.morphAttributes.normal,St=!!ee.morphAttributes.color;let qt=yo;te.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(qt=v.toneMapping);const Lt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,dt=Lt!==void 0?Lt.length:0,Ve=se.get(te),An=m.state.lights;if(he===!0&&(ye===!0||R!==C)){const wn=R===C&&te.id===y;de.setState(te,R,wn)}let xt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==An.state.version||Ve.outputColorSpace!==ke||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isBatchedMesh&&Ve.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ve.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ve.instancingMorph===!1&&X.morphTexture!==null||Ve.envMap!==Fe||te.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==de.numPlanes||Ve.numIntersection!==de.numIntersection)||Ve.vertexAlphas!==et||Ve.vertexTangents!==it||Ve.morphTargets!==We||Ve.morphNormals!==At||Ve.morphColors!==St||Ve.toneMapping!==qt||Ve.morphTargetsCount!==dt)&&(xt=!0):(xt=!0,Ve.__version=te.version);let Ei=Ve.currentProgram;xt===!0&&(Ei=en(te,j,X));let ws=!1,Zn=!1,Is=!1;const Dt=Ei.getUniforms(),an=Ve.uniforms;if(J.useProgram(Ei.program)&&(ws=!0,Zn=!0,Is=!0),te.id!==y&&(y=te.id,Zn=!0),ws||C!==R){J.buffers.depth.getReversed()?(U.copy(R.projectionMatrix),PO(U),FO(U),Dt.setValue(I,"projectionMatrix",U)):Dt.setValue(I,"projectionMatrix",R.projectionMatrix),Dt.setValue(I,"viewMatrix",R.matrixWorldInverse);const Nn=Dt.map.cameraPosition;Nn!==void 0&&Nn.setValue(I,le.setFromMatrixPosition(R.matrixWorld)),Z.logarithmicDepthBuffer&&Dt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Dt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Zn=!0,Is=!0)}if(X.isSkinnedMesh){Dt.setOptional(I,X,"bindMatrix"),Dt.setOptional(I,X,"bindMatrixInverse");const wn=X.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Dt.setValue(I,"boneTexture",wn.boneTexture,M))}X.isBatchedMesh&&(Dt.setOptional(I,X,"batchingTexture"),Dt.setValue(I,"batchingTexture",X._matricesTexture,M),Dt.setOptional(I,X,"batchingIdTexture"),Dt.setValue(I,"batchingIdTexture",X._indirectTexture,M),Dt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Dt.setValue(I,"batchingColorTexture",X._colorsTexture,M));const bn=ee.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&je.update(X,ee,Ei),(Zn||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,Dt.setValue(I,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(an.envMap.value=Fe,an.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(an.envMapIntensity.value=j.environmentIntensity),Zn&&(Dt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&tn(an,Is),_e&&te.fog===!0&&Ae.refreshFogUniforms(an,_e),Ae.refreshMaterialUniforms(an,te,B,G,m.state.transmissionRenderTarget[R.id]),Ad.upload(I,nc(Ve),an,M)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ad.upload(I,nc(Ve),an,M),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Dt.setValue(I,"center",X.center),Dt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Dt.setValue(I,"normalMatrix",X.normalMatrix),Dt.setValue(I,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const wn=te.uniformsGroups;for(let Nn=0,sc=wn.length;Nn<sc;Nn++){const Yi=wn[Nn];q.update(Yi,Ei),q.bind(Yi,Ei)}}return Ei}function tn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function To(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,j,ee){se.get(R.texture).__webglTexture=j,se.get(R.depthTexture).__webglTexture=ee;const te=se.get(R);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ee=se.get(R);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0};const ic=I.createFramebuffer();this.setRenderTarget=function(R,j=0,ee=0){T=R,S=j,w=ee;let te=!0,X=null,_e=!1,Ie=!1;if(R){const Fe=se.get(R);if(Fe.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(I.FRAMEBUFFER,null),te=!1;else if(Fe.__webglFramebuffer===void 0)M.setupRenderTarget(R);else if(Fe.__hasExternalTextures)M.rebindTextures(R,se.get(R.texture).__webglTexture,se.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(Fe.__boundDepthTexture!==We){if(We!==null&&se.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ie=!0);const it=se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[j])?X=it[j][ee]:X=it[j],_e=!0):R.samples>0&&M.useMultisampledRTT(R)===!1?X=se.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?X=it[ee]:X=it,D.copy(R.viewport),L.copy(R.scissor),P=R.scissorTest}else D.copy(me).multiplyScalar(B).floor(),L.copy(be).multiplyScalar(B).floor(),P=Me;if(ee!==0&&(X=ic),J.bindFramebuffer(I.FRAMEBUFFER,X)&&te&&J.drawBuffers(R,X),J.viewport(D),J.scissor(L),J.setScissorTest(P),_e){const Fe=se.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,ee)}else if(Ie){const Fe=se.get(R.texture),et=j;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,ee,et)}else if(R!==null&&ee!==0){const Fe=se.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,ee)}y=-1},this.readRenderTargetPixels=function(R,j,ee,te,X,_e,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){J.bindFramebuffer(I.FRAMEBUFFER,ke);try{const Fe=R.texture,et=Fe.format,it=Fe.type;if(!Z.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-te&&ee>=0&&ee<=R.height-X&&I.readPixels(j,ee,te,X,Xe.convert(et),Xe.convert(it),_e)}finally{const Fe=T!==null?se.get(T).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(R,j,ee,te,X,_e,Ie){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){const Fe=R.texture,et=Fe.format,it=Fe.type;if(!Z.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-te&&ee>=0&&ee<=R.height-X){J.bindFramebuffer(I.FRAMEBUFFER,ke);const We=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,We),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(j,ee,te,X,Xe.convert(et),Xe.convert(it),0);const At=T!==null?se.get(T).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,At);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await NO(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,We),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(We),I.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,ee=0){R.isTexture!==!0&&($a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const te=Math.pow(2,-ee),X=Math.floor(R.image.width*te),_e=Math.floor(R.image.height*te),Ie=j!==null?j.x:0,ke=j!==null?j.y:0;M.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,Ie,ke,X,_e),J.unbindTexture()};const Gr=I.createFramebuffer(),qu=I.createFramebuffer();this.copyTextureToTexture=function(R,j,ee=null,te=null,X=0,_e=null){R.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,R=arguments[1],j=arguments[2],_e=arguments[3]||0,ee=null),_e===null&&(X!==0?($a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=X,X=0):_e=0);let Ie,ke,Fe,et,it,We,At,St,qt;const Lt=R.isCompressedTexture?R.mipmaps[_e]:R.image;if(ee!==null)Ie=ee.max.x-ee.min.x,ke=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,et=ee.min.x,it=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const bn=Math.pow(2,-X);Ie=Math.floor(Lt.width*bn),ke=Math.floor(Lt.height*bn),R.isDataArrayTexture?Fe=Lt.depth:R.isData3DTexture?Fe=Math.floor(Lt.depth*bn):Fe=1,et=0,it=0,We=0}te!==null?(At=te.x,St=te.y,qt=te.z):(At=0,St=0,qt=0);const dt=Xe.convert(j.format),Ve=Xe.convert(j.type);let An;j.isData3DTexture?(M.setTexture3D(j,0),An=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(M.setTexture2DArray(j,0),An=I.TEXTURE_2D_ARRAY):(M.setTexture2D(j,0),An=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const xt=I.getParameter(I.UNPACK_ROW_LENGTH),Ei=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ws=I.getParameter(I.UNPACK_SKIP_PIXELS),Zn=I.getParameter(I.UNPACK_SKIP_ROWS),Is=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,et),I.pixelStorei(I.UNPACK_SKIP_ROWS,it),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Dt=R.isDataArrayTexture||R.isData3DTexture,an=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const bn=se.get(R),wn=se.get(j),Nn=se.get(bn.__renderTarget),sc=se.get(wn.__renderTarget);J.bindFramebuffer(I.READ_FRAMEBUFFER,Nn.__webglFramebuffer),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,sc.__webglFramebuffer);for(let Yi=0;Yi<Fe;Yi++)Dt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(R).__webglTexture,X,We+Yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(j).__webglTexture,_e,qt+Yi)),I.blitFramebuffer(et,it,Ie,ke,At,St,Ie,ke,I.DEPTH_BUFFER_BIT,I.NEAREST);J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||se.has(R)){const bn=se.get(R),wn=se.get(j);J.bindFramebuffer(I.READ_FRAMEBUFFER,Gr),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,qu);for(let Nn=0;Nn<Fe;Nn++)Dt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,X,We+Nn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,X),an?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,_e,qt+Nn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,_e),X!==0?I.blitFramebuffer(et,it,Ie,ke,At,St,Ie,ke,I.COLOR_BUFFER_BIT,I.NEAREST):an?I.copyTexSubImage3D(An,_e,At,St,qt+Nn,et,it,Ie,ke):I.copyTexSubImage2D(An,_e,At,St,et,it,Ie,ke);J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else an?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(An,_e,At,St,qt,Ie,ke,Fe,dt,Ve,Lt.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(An,_e,At,St,qt,Ie,ke,Fe,dt,Lt.data):I.texSubImage3D(An,_e,At,St,qt,Ie,ke,Fe,dt,Ve,Lt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,At,St,Ie,ke,dt,Ve,Lt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,At,St,Lt.width,Lt.height,dt,Lt.data):I.texSubImage2D(I.TEXTURE_2D,_e,At,St,Ie,ke,dt,Ve,Lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ei),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ws),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Is),_e===0&&j.generateMipmaps&&I.generateMipmap(An),J.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ee=null,te=null,X=0){return R.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,R=arguments[2],j=arguments[3],X=arguments[4]||0),$a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ee,te,X)},this.initRenderTarget=function(R){se.get(R).__webglFramebuffer===void 0&&M.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?M.setTextureCube(R,0):R.isData3DTexture?M.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?M.setTexture2DArray(R,0):M.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){S=0,w=0,T=null,J.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const n0=tN("main",{state:()=>({flags:{loaded:!1,menu:!1,started:!1,entered:!1,interiors:!1,content:!1,zoomed:!1},site:{},interiors:[],penthouse:{},global:{},slides:{current:0,total:0,last:0},gallery:{active:!1,items:[]},plans:{active:!1,item:{}},info:{active:!1,content:{}},credits:{active:!1,content:{}}}),getters:{content(){return[this.penthouse.overview,...this.interiors,this.penthouse.contact]}},actions:{setFlag(n,e=!1){this.flags[n]=e},setSite(n){this.site=n},setInteriors(n){this.interiors=n},setPenthouse(n){this.penthouse=n},setGlobal(n){this.global=n},setSlides({current:n,last:e,total:t}){this.slides.current=n??this.slides.current,this.slides.last=e??this.slides.last,this.slides.total=t??this.slides.total},setGallery({items:n,active:e=!1}){this.gallery.active=e,this.gallery.items=n??this.gallery.items},setPlans({item:n,active:e=!1}){this.plans.active=e,this.plans.item=n??this.plans.item},setInfo({content:n,active:e=!1}){this.info.active=e,this.info.content=n??this.info.content},setCredits({content:n,active:e=!1}){this.credits.active=e,this.credits.content=n??this.credits.content}}}),OG=Zt(n=>{const e=n0(),t=new rf,{$event:i}=n,s=new rf().load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=");let r=[];const o=sn(()=>e.interiors.map(({image:y,imageMobile:C,map:D,mapMobile:L})=>({image:n.$resize?.small?C?.srcMobile||y?.src:y?.src||null,map:n.$resize?.small?L?.src||D?.src:D?.src||null}))),a=async()=>{const y=D=>D?new Promise(L=>{t.load(D,L)}):Promise.resolve(s),C=await Promise.all(o.value.map(async({image:D,map:L})=>({texture:await y(D),map:await y(L)})));r=[{texture:s,map:s},...C]},l=`
        varying vec2 vUv;

		void main() {
			gl_Position = vec4(position, 1.0);
            vUv = uv;
		}
	`,u=`
        uniform sampler2D u_texture1;
        uniform sampler2D u_texture2;
        uniform sampler2D u_map1;
        uniform sampler2D u_map2;
        uniform float u_progress;
        uniform vec2 u_size;
        uniform vec2 u_res;
        uniform int u_direction;
        uniform vec2 u_mouse;
        uniform float u_strength;
        varying vec2 vUv;

        vec2 uvCover(vec2 screenSize, vec2 imageSize, vec2 uv) {
            float screenRatio = screenSize.x / screenSize.y;
            float imageRatio = imageSize.x / imageSize.y;
            
            vec2 newSize = screenRatio < imageRatio 
                ? vec2(imageSize.x * (screenSize.y / imageSize.y), screenSize.y)
                : vec2(screenSize.x, imageSize.y * (screenSize.x / imageSize.x));
            vec2 newOffset = (screenRatio < imageRatio 
                ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
                : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
            
            return uv * screenSize / newSize + newOffset;
        }

        void main() {
            float parallax = -0.5; // Adjust this value to control parallax strength
            float directedProgress = u_direction == 1 ? u_progress : 1.0 - u_progress;
            
            vec2 offset1 = vec2(0.0, directedProgress * parallax);
            vec2 offset2 = vec2(0.0, (directedProgress - 1.0) * parallax);

            vec2 cUv1 = uvCover(u_res, u_size, vUv);
            vec2 cUv2 = uvCover(u_res, u_size, vUv);
            
            vec2 d1 = vec2(0.0);
            vec2 d2 = vec2(0.0);
            
            float depth1 = ((texture2D(u_map1, cUv1 + offset1).r) - 0.5) * 2.0;
            float depth2 = ((texture2D(u_map2, cUv2 + offset2).r) - 0.5) * 2.0;
            
            d1 = u_mouse * depth1 * 0.01 * (0.4 * u_strength);
            d2 = u_mouse * depth2 * 0.01 * (0.4 * u_strength);
            
            vec4 texture1 = texture2D(u_texture1, cUv1 + offset1 + d1);
            vec4 texture2 = texture2D(u_texture2, cUv2 + offset2 + d2);
            
            float mask = step(directedProgress, vUv.y);
            
            vec4 finalTexture = mix(
                texture2,
                texture1,
                mask
            );
            
            gl_FragColor = finalTexture;
        }
    `;let h,c,d,f;const p=jn(!0),A=()=>f,g=async y=>{await a(),await Xs(),console.log(y),h=new Nf(-1,1,1,-1,0,1);const C=new qi,D=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),L=new Float32Array([0,0,2,0,0,2]);C.setAttribute("position",new jt(D,3)),C.setAttribute("uv",new jt(L,2));const{naturalWidth:P,naturalHeight:H}=r[1]?.texture?.image||{naturalWidth:1,naturalHeight:1},{wh:O,ww:F}=n.$resize;f=new Js({vertexShader:l,fragmentShader:u,uniforms:{u_texture1:{value:r[0]?.texture||s},u_texture2:{value:r[1]?.texture||s},u_map1:{value:r[0]?.map||s},u_map2:{value:r[1]?.map||s},u_progress:{value:0},u_size:{value:new ze(P,H)},u_res:{value:new ze(F,O)},u_direction:{value:1},u_mouse:{value:new ze(0,0)},u_strength:{value:1}},transparent:!0,depthWrite:!1,blending:Xw,blendEquation:ro,blendSrc:Kw,blendDst:Wd}),c=new dn(C,f),c.matrixAutoUpdate=!1,c.updateMatrix(),d=new NI({antialias:!0,alpha:!0,depth:!1,stencil:!1,premultipliedAlpha:!0}),d.setClearColor(0,0),d.setPixelRatio(Math.min(1.75,window.devicePixelRatio)),d.setSize(F,O),d.domElement.classList.add("gl-slides","absolute","inset-0"),y.appendChild(d.domElement),n.$resize.add(x),n.$resize.mouse?i.on("cursor:tick",m):i.on("tick",E)},m=({x:y=0,y:C=0})=>{if(!p.value)return;const{wh:D,ww:L}=n.$resize,{u_mouse:P}=f.uniforms;P.value.x=y/L*2-1,P.value.y=-(C/D)*2+1,d.render(c,h)},E=()=>{p.value&&d.render(c,h)},_=()=>{p.value=!0},v=()=>{p.value=!1},x=()=>{const{wh:y,ww:C}=n.$resize;d.setSize(C,y),f&&f.uniforms.u_res.value.set(C,y)};return{provide:{images:{init:g,animate:m,change:(y,C)=>{const D=A();if(!D)return;const L=y>C?-1:1;L===-1?(D.uniforms.u_texture1.value=r[C]?.texture||s,D.uniforms.u_texture2.value=r[y]?.texture||s,D.uniforms.u_map1.value=r[C]?.map||s,D.uniforms.u_map2.value=r[y]?.map||s):(D.uniforms.u_texture1.value=r[y]?.texture||s,D.uniforms.u_texture2.value=r[C]?.texture||s,D.uniforms.u_map1.value=r[y]?.map||s,D.uniforms.u_map2.value=r[C]?.map||s),D.uniforms.u_direction.value=L,D.uniforms.u_progress.value=0},cleanup:()=>{if(d){d.dispose();const y=d.domElement;y.parentNode?.removeChild(y)}f&&f.dispose(),r.forEach(({texture:y,map:C})=>{y.dispose(),C.dispose()}),i.off("cursor:tick",m),i.off("tick",E),n.$resize.remove(x)},progress:y=>{const C=A();!C||y===void 0||(C.uniforms.u_progress.value=y)},start:_,stop:v,active:p,getMaterial:A}}}});var kh={},ex;function UG(){return ex||(ex=1,(function(n){(function(){var e;e=n!==null?n:this,e.Lethargy=(function(){function t(i,s,r,o){this.stability=i!=null?Math.abs(i):8,this.sensitivity=s!=null?1+Math.abs(s):100,this.tolerance=r!=null?1+Math.abs(r):1.1,this.delay=o??150,this.lastUpDeltas=(function(){var a,l,u;for(u=[],a=1,l=this.stability*2;1<=l?a<=l:a>=l;1<=l?a++:a--)u.push(null);return u}).call(this),this.lastDownDeltas=(function(){var a,l,u;for(u=[],a=1,l=this.stability*2;1<=l?a<=l:a>=l;1<=l?a++:a--)u.push(null);return u}).call(this),this.deltasTimestamp=(function(){var a,l,u;for(u=[],a=1,l=this.stability*2;1<=l?a<=l:a>=l;1<=l?a++:a--)u.push(null);return u}).call(this)}return t.prototype.check=function(i){var s;return i=i.originalEvent||i,i.wheelDelta!=null?s=i.wheelDelta:i.deltaY!=null?s=i.deltaY*-40:(i.detail!=null||i.detail===0)&&(s=i.detail*-40),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),s>0?(this.lastUpDeltas.push(s),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(s),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(i){var s,r,o,a,l,u,h;return s=i===-1?this.lastDownDeltas:this.lastUpDeltas,s[0]===null?i:this.deltasTimestamp[this.stability*2-2]+this.delay>Date.now()&&s[0]===s[this.stability*2-1]?!1:(o=s.slice(0,this.stability),r=s.slice(this.stability,this.stability*2),h=o.reduce(function(c,d){return c+d}),l=r.reduce(function(c,d){return c+d}),u=h/o.length,a=l/r.length,Math.abs(u)<Math.abs(a*this.tolerance)&&this.sensitivity<Math.abs(a)?i:!1)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t})()}).call(kh)})(kh)),kh}var QG=UG(),pA,tx;function HG(){if(tx)return pA;tx=1;var n="Expected a function",e=NaN,t="[object Symbol]",i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,l=typeof ki=="object"&&ki&&ki.Object===Object&&ki,u=typeof self=="object"&&self&&self.Object===Object&&self,h=l||u||Function("return this")(),c=Object.prototype,d=c.toString,f=Math.max,p=Math.min,A=function(){return h.Date.now()};function g(S,w,T){var y,C,D,L,P,H,O=0,F=!1,G=!1,B=!0;if(typeof S!="function")throw new TypeError(n);w=x(w)||0,E(T)&&(F=!!T.leading,G="maxWait"in T,D=G?f(x(T.maxWait)||0,w):D,B="trailing"in T?!!T.trailing:B);function ae(ne){var le=y,oe=C;return y=C=void 0,O=ne,L=S.apply(oe,le),L}function pe(ne){return O=ne,P=setTimeout(Me,w),F?ae(ne):L}function me(ne){var le=ne-H,oe=ne-O,Ue=w-le;return G?p(Ue,D-oe):Ue}function be(ne){var le=ne-H,oe=ne-O;return H===void 0||le>=w||le<0||G&&oe>=D}function Me(){var ne=A();if(be(ne))return K(ne);P=setTimeout(Me,me(ne))}function K(ne){return P=void 0,B&&y?ae(ne):(y=C=void 0,L)}function he(){P!==void 0&&clearTimeout(P),O=0,y=H=C=P=void 0}function ye(){return P===void 0?L:K(A())}function U(){var ne=A(),le=be(ne);if(y=arguments,C=this,H=ne,le){if(P===void 0)return pe(H);if(G)return P=setTimeout(Me,w),ae(H)}return P===void 0&&(P=setTimeout(Me,w)),L}return U.cancel=he,U.flush=ye,U}function m(S,w,T){var y=!0,C=!0;if(typeof S!="function")throw new TypeError(n);return E(T)&&(y="leading"in T?!!T.leading:y,C="trailing"in T?!!T.trailing:C),g(S,w,{leading:y,maxWait:w,trailing:C})}function E(S){var w=typeof S;return!!S&&(w=="object"||w=="function")}function _(S){return!!S&&typeof S=="object"}function v(S){return typeof S=="symbol"||_(S)&&d.call(S)==t}function x(S){if(typeof S=="number")return S;if(v(S))return e;if(E(S)){var w=typeof S.valueOf=="function"?S.valueOf():S;S=E(w)?w+"":w}if(typeof S!="string")return S===0?S:+S;S=S.replace(i,"");var T=r.test(S);return T||o.test(S)?a(S.slice(2),T?2:8):s.test(S)?e:+S}return pA=m,pA}var GG=HG();const VG=g_(GG),zG=Zt(n=>{const e=QG.Lethargy,{$event:t,$resize:i,$images:s}=n,r=n0(),o=sn(()=>r.content||[]),a=sn(()=>r.flags),l=sn(()=>o.value.length-1),u=sn(()=>i?.mouse||!1),h=sn(()=>r.gallery),c=sn(()=>r.plans),d=sn(()=>r.info),f=jn(!1),p=jn(0),A=jn(0);let g,m;const E={duration:1.5,ease:"snappy"},_=VG(({y,oe:C})=>{if(!g.check(C)&&u.value||f.value||!a.value.entered||a.value.content||h.value.active||c.value.active||d.value.active)return;const D=-Math.sign(y),L=p.value+D;L<0||L>l.value||(A.value=p.value,p.value=L,!m&&(m=qs.timeline({defaults:E})),T())},50),v=y=>{if(A.value=p.value,p.value=y,s.change?.(A.value,p.value),s.progress?.(1),p.value===0||p.value===l.value){const{$gl:C}=n;C.isPlaying()||C.play()}},x=()=>{const{$gl:y}=n;(A.value===1&&p.value===0||A.value===l.value-1&&p.value===l.value&&!y.isPlaying())&&(console.log("play webgl"),y.play())},S=()=>{const{$gl:y}=n;(A.value===0&&p.value===1||A.value===l.value&&p.value===l.value-1&&y.isPlaying())&&(console.log("pause webgl"),y.pause())},w=()=>{f.value||(A.value=p.value,p.value=Math.min(p.value+1,l.value),T())},T=()=>{!m&&(m=qs.timeline({defaults:E})),f.value=!0,m.clear().add(()=>{s.change(A.value,p.value),x()}).fromTo(s,{progress:0},{progress:1,duration:A.value===0?2.25:E.duration,ease:E.ease},A.value===0?.5:0).add(()=>{f.value=!1,S()}).restart()};return n.hook("app:mounted",async()=>{await Xs(),g=new e(8,50),t.on("vs",_)}),n.hook("app:unmounted",()=>{s.cleanup(),t.off("vs",_),m?.kill(),m=null,g=null}),{provide:{slides:{get current(){return p.value},get last(){return A.value},get total(){return l.value},get active(){return f.value},instant:v,next:w}}}});var Sl=typeof Reflect=="object"?Reflect:null,nx=Sl&&typeof Sl.apply=="function"?Sl.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)},md;Sl&&typeof Sl.ownKeys=="function"?md=Sl.ownKeys:Object.getOwnPropertySymbols?md=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:md=function(e){return Object.getOwnPropertyNames(e)};function WG(n){console&&console.warn&&console.warn(n)}var PI=Number.isNaN||function(e){return e!==e};function Mt(){Mt.init.call(this)}Mt.EventEmitter=Mt;Mt.prototype._events=void 0;Mt.prototype._eventsCount=0;Mt.prototype._maxListeners=void 0;var ix=10;function Ff(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(Mt,"defaultMaxListeners",{enumerable:!0,get:function(){return ix},set:function(n){if(typeof n!="number"||n<0||PI(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");ix=n}});Mt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Mt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||PI(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function FI(n){return n._maxListeners===void 0?Mt.defaultMaxListeners:n._maxListeners}Mt.prototype.getMaxListeners=function(){return FI(this)};Mt.prototype.emit=function(e){if(!e){debugger;throw new Error("Undefined event type")}for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var s=e==="error",r=this._events;if(r!==void 0)s=s&&r.error===void 0;else if(!s)return!1;if(s){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=r[e];if(l===void 0)return!1;if(typeof l=="function")nx(l,this,t);else for(var u=l.length,h=HI(l,u),i=0;i<u;++i)nx(h[i],this,t);return!0};function kI(n,e,t,i){var s,r,o;if(Ff(t),r=n._events,r===void 0?(r=n._events=Object.create(null),n._eventsCount=0):(r.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),r=n._events),o=r[e]),o===void 0)o=r[e]=t,++n._eventsCount;else if(typeof o=="function"?o=r[e]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t),s=FI(n),s>0&&o.length>s&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=e,a.count=o.length,WG(a)}return n}Mt.prototype.addListener=function(e,t){return kI(this,e,t,!1)};Mt.prototype.on=Mt.prototype.addListener;Mt.prototype.prependListener=function(e,t){return kI(this,e,t,!0)};function qG(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function OI(n,e,t){var i={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},s=qG.bind(i);return s.listener=t,i.wrapFn=s,s}Mt.prototype.once=function(e,t){return Ff(t),this.on(e,OI(this,e,t)),this};Mt.prototype.prependOnceListener=function(e,t){return Ff(t),this.prependListener(e,OI(this,e,t)),this};Mt.prototype.removeListener=function(e,t){var i,s,r,o,a;if(Ff(t),s=this._events,s===void 0)return this;if(i=s[e],i===void 0)return this;if(i===t||i.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete s[e],s.removeListener&&this.emit("removeListener",e,i.listener||t));else if(typeof i!="function"){for(r=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){a=i[o].listener,r=o;break}if(r<0)return this;r===0?i.shift():YG(i,r),i.length===1&&(s[e]=i[0]),s.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};Mt.prototype.off=Mt.prototype.removeListener;Mt.prototype.removeAllListeners=function(e){var t,i,s;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var r=Object.keys(i),o;for(s=0;s<r.length;++s)o=r[s],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=i[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(s=t.length-1;s>=0;s--)this.removeListener(e,t[s]);return this};function UI(n,e,t){var i=n._events;if(i===void 0)return[];var s=i[e];return s===void 0?[]:typeof s=="function"?t?[s.listener||s]:[s]:t?jG(s):HI(s,s.length)}Mt.prototype.listeners=function(e){return UI(this,e,!0)};Mt.prototype.rawListeners=function(e){return UI(this,e,!1)};Mt.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):QI.call(n,e)};Mt.prototype.listenerCount=QI;function QI(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}Mt.prototype.eventNames=function(){return this._eventsCount>0?md(this._events):[]};function HI(n,e){for(var t=new Array(e),i=0;i<e;++i)t[i]=n[i];return t}function YG(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function jG(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}Mt.prototype.off=Mt.prototype.removeListener;let $e=new Mt;$e.on_prior=$e.prependListener.bind($e);$e.setMaxListeners(100);$e.getEventCount=()=>{let n=Object.keys($e._events),e=0,t=0;for(;t<n.length;)$e._events[n[t]].length&&(e+=$e._events[n[t]].length),t++;return e};const XG=typeof window<"u";let Ag={};if(XG){const n=new URLSearchParams(window.location.search);Ag={},n.forEach((e,t)=>{Ag[t]=e==="true"?!0:e==="false"?!1:e})}const Ss=Ag;var KG="1.0.38",kf="",sx="?",mg="function",gg="undefined",i0="object",Of="string",GI="major",xe="model",Te="name",ve="type",Ce="vendor",Ne="version",ds="architecture",Qc="console",gt="mobile",ft="tablet",Ni="smarttv",Ja="wearable",_g="embedded",Eg=500,Oh="Amazon",yc="Apple",rx="ASUS",ox="BlackBerry",Ho="Browser",Uh="Chrome",$G="Edge",Qh="Firefox",Hh="Google",ax="Huawei",AA="LG",mA="Microsoft",lx="Motorola",xc="Opera",Gh="Samsung",cx="Sharp",Vh="Sony",gA="Xiaomi",_A="Zebra",ux="Facebook",VI="Chromium OS",zI="Mac OS",JG=function(n,e){var t={};for(var i in n)e[i]&&e[i].length%2===0?t[i]=e[i].concat(n[i]):t[i]=n[i];return t},Uf=function(n){for(var e={},t=0;t<n.length;t++)e[n[t].toUpperCase()]=n[t];return e},hx=function(n,e){return typeof n===Of?ou(e).indexOf(ou(n))!==-1:!1},ou=function(n){return n.toLowerCase()},ZG=function(n){return typeof n===Of?n.replace(/[^\d\.]/g,kf).split(".")[0]:void 0},vg=function(n,e){if(typeof n===Of)return n=n.replace(/^\s\s*/,kf),typeof e===gg?n:n.substring(0,Eg)},Cc=function(n,e){for(var t=0,i,s,r,o,a,l;t<e.length&&!a;){var u=e[t],h=e[t+1];for(i=s=0;i<u.length&&!a&&u[i];)if(a=u[i++].exec(n),a)for(r=0;r<h.length;r++)l=a[++s],o=h[r],typeof o===i0&&o.length>0?o.length===2?typeof o[1]==mg?this[o[0]]=o[1].call(this,l):this[o[0]]=o[1]:o.length===3?typeof o[1]===mg&&!(o[1].exec&&o[1].test)?this[o[0]]=l?o[1].call(this,l,o[2]):void 0:this[o[0]]=l?l.replace(o[1],o[2]):void 0:o.length===4&&(this[o[0]]=l?o[3].call(this,l.replace(o[1],o[2])):void 0):this[o]=l||void 0;t+=2}},EA=function(n,e){for(var t in e)if(typeof e[t]===i0&&e[t].length>0){for(var i=0;i<e[t].length;i++)if(hx(e[t][i],n))return t===sx?void 0:t}else if(hx(e[t],n))return t===sx?void 0:t;return n},eV={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},dx={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},fx={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[Ne,[Te,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[Ne,[Te,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[Te,Ne],[/opios[\/ ]+([\w\.]+)/i],[Ne,[Te,xc+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[Ne,[Te,xc+" GX"]],[/\bopr\/([\w\.]+)/i],[Ne,[Te,xc]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[Ne,[Te,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[Te,Ne],[/\bddg\/([\w\.]+)/i],[Ne,[Te,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[Ne,[Te,"UC"+Ho]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[Ne,[Te,"WeChat"]],[/konqueror\/([\w\.]+)/i],[Ne,[Te,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[Ne,[Te,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[Ne,[Te,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[Ne,[Te,"Smart Lenovo "+Ho]],[/(avast|avg)\/([\w\.]+)/i],[[Te,/(.+)/,"$1 Secure "+Ho],Ne],[/\bfocus\/([\w\.]+)/i],[Ne,[Te,Qh+" Focus"]],[/\bopt\/([\w\.]+)/i],[Ne,[Te,xc+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[Ne,[Te,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[Ne,[Te,"Dolphin"]],[/coast\/([\w\.]+)/i],[Ne,[Te,xc+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[Ne,[Te,"MIUI "+Ho]],[/fxios\/([-\w\.]+)/i],[Ne,[Te,Qh]],[/\bqihu|(qi?ho?o?|360)browser/i],[[Te,"360 "+Ho]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[Te,/(.+)/,"$1 "+Ho],Ne],[/samsungbrowser\/([\w\.]+)/i],[Ne,[Te,Gh+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[Te,/_/g," "],Ne],[/metasr[\/ ]?([\d\.]+)/i],[Ne,[Te,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[Te,"Sogou Mobile"],Ne],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[Te,Ne],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[Te],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[Te,ux],Ne],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[Te,Ne],[/\bgsa\/([\w\.]+) .*safari\//i],[Ne,[Te,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[Ne,[Te,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[Ne,[Te,Uh+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[Te,Uh+" WebView"],Ne],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[Ne,[Te,"Android "+Ho]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[Te,Ne],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[Ne,[Te,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[Ne,Te],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[Te,[Ne,EA,eV]],[/(webkit|khtml)\/([\w\.]+)/i],[Te,Ne],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[Te,"Netscape"],Ne],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[Ne,[Te,Qh+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[Te,Ne],[/(cobalt)\/([\w\.]+)/i],[Te,[Ne,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[ds,"amd64"]],[/(ia32(?=;))/i],[[ds,ou]],[/((?:i[346]|x)86)[;\)]/i],[[ds,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ds,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ds,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ds,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ds,/ower/,kf,ou]],[/(sun4\w)[;\)]/i],[[ds,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ds,ou]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[xe,[Ce,Gh],[ve,ft]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[xe,[Ce,Gh],[ve,gt]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[xe,[Ce,yc],[ve,gt]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[xe,[Ce,yc],[ve,ft]],[/(macintosh);/i],[xe,[Ce,yc]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[xe,[Ce,cx],[ve,gt]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[xe,[Ce,ax],[ve,ft]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[xe,[Ce,ax],[ve,gt]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[xe,/_/g," "],[Ce,gA],[ve,gt]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[xe,/_/g," "],[Ce,gA],[ve,ft]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[xe,[Ce,"OPPO"],[ve,gt]],[/\b(opd2\d{3}a?) bui/i],[xe,[Ce,"OPPO"],[ve,ft]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[xe,[Ce,"Vivo"],[ve,gt]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[xe,[Ce,"Realme"],[ve,gt]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[xe,[Ce,lx],[ve,gt]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[xe,[Ce,lx],[ve,ft]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[xe,[Ce,AA],[ve,ft]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[xe,[Ce,AA],[ve,gt]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[xe,[Ce,"Lenovo"],[ve,ft]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[xe,/_/g," "],[Ce,"Nokia"],[ve,gt]],[/(pixel c)\b/i],[xe,[Ce,Hh],[ve,ft]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[xe,[Ce,Hh],[ve,gt]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[xe,[Ce,Vh],[ve,gt]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[xe,"Xperia Tablet"],[Ce,Vh],[ve,ft]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[xe,[Ce,"OnePlus"],[ve,gt]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[xe,[Ce,Oh],[ve,ft]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[xe,/(.+)/g,"Fire Phone $1"],[Ce,Oh],[ve,gt]],[/(playbook);[-\w\),; ]+(rim)/i],[xe,Ce,[ve,ft]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[xe,[Ce,ox],[ve,gt]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[xe,[Ce,rx],[ve,ft]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[xe,[Ce,rx],[ve,gt]],[/(nexus 9)/i],[xe,[Ce,"HTC"],[ve,ft]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[Ce,[xe,/_/g," "],[ve,gt]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[xe,[Ce,"Acer"],[ve,ft]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[xe,[Ce,"Meizu"],[ve,gt]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[xe,[Ce,"Ulefone"],[ve,gt]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[Ce,xe,[ve,gt]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[Ce,xe,[ve,ft]],[/(surface duo)/i],[xe,[Ce,mA],[ve,ft]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[xe,[Ce,"Fairphone"],[ve,gt]],[/(u304aa)/i],[xe,[Ce,"AT&T"],[ve,gt]],[/\bsie-(\w*)/i],[xe,[Ce,"Siemens"],[ve,gt]],[/\b(rct\w+) b/i],[xe,[Ce,"RCA"],[ve,ft]],[/\b(venue[\d ]{2,7}) b/i],[xe,[Ce,"Dell"],[ve,ft]],[/\b(q(?:mv|ta)\w+) b/i],[xe,[Ce,"Verizon"],[ve,ft]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[xe,[Ce,"Barnes & Noble"],[ve,ft]],[/\b(tm\d{3}\w+) b/i],[xe,[Ce,"NuVision"],[ve,ft]],[/\b(k88) b/i],[xe,[Ce,"ZTE"],[ve,ft]],[/\b(nx\d{3}j) b/i],[xe,[Ce,"ZTE"],[ve,gt]],[/\b(gen\d{3}) b.+49h/i],[xe,[Ce,"Swiss"],[ve,gt]],[/\b(zur\d{3}) b/i],[xe,[Ce,"Swiss"],[ve,ft]],[/\b((zeki)?tb.*\b) b/i],[xe,[Ce,"Zeki"],[ve,ft]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[Ce,"Dragon Touch"],xe,[ve,ft]],[/\b(ns-?\w{0,9}) b/i],[xe,[Ce,"Insignia"],[ve,ft]],[/\b((nxa|next)-?\w{0,9}) b/i],[xe,[Ce,"NextBook"],[ve,ft]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[Ce,"Voice"],xe,[ve,gt]],[/\b(lvtel\-)?(v1[12]) b/i],[[Ce,"LvTel"],xe,[ve,gt]],[/\b(ph-1) /i],[xe,[Ce,"Essential"],[ve,gt]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[xe,[Ce,"Envizen"],[ve,ft]],[/\b(trio[-\w\. ]+) b/i],[xe,[Ce,"MachSpeed"],[ve,ft]],[/\btu_(1491) b/i],[xe,[Ce,"Rotor"],[ve,ft]],[/(shield[\w ]+) b/i],[xe,[Ce,"Nvidia"],[ve,ft]],[/(sprint) (\w+)/i],[Ce,xe,[ve,gt]],[/(kin\.[onetw]{3})/i],[[xe,/\./g," "],[Ce,mA],[ve,gt]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[xe,[Ce,_A],[ve,ft]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[xe,[Ce,_A],[ve,gt]],[/smart-tv.+(samsung)/i],[Ce,[ve,Ni]],[/hbbtv.+maple;(\d+)/i],[[xe,/^/,"SmartTV"],[Ce,Gh],[ve,Ni]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[Ce,AA],[ve,Ni]],[/(apple) ?tv/i],[Ce,[xe,yc+" TV"],[ve,Ni]],[/crkey/i],[[xe,Uh+"cast"],[Ce,Hh],[ve,Ni]],[/droid.+aft(\w+)( bui|\))/i],[xe,[Ce,Oh],[ve,Ni]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[xe,[Ce,cx],[ve,Ni]],[/(bravia[\w ]+)( bui|\))/i],[xe,[Ce,Vh],[ve,Ni]],[/(mitv-\w{5}) bui/i],[xe,[Ce,gA],[ve,Ni]],[/Hbbtv.*(technisat) (.*);/i],[Ce,xe,[ve,Ni]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[Ce,vg],[xe,vg],[ve,Ni]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[ve,Ni]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[Ce,xe,[ve,Qc]],[/droid.+; (shield) bui/i],[xe,[Ce,"Nvidia"],[ve,Qc]],[/(playstation [345portablevi]+)/i],[xe,[Ce,Vh],[ve,Qc]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[xe,[Ce,mA],[ve,Qc]],[/((pebble))app/i],[Ce,xe,[ve,Ja]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[xe,[Ce,yc],[ve,Ja]],[/droid.+; (glass) \d/i],[xe,[Ce,Hh],[ve,Ja]],[/droid.+; (wt63?0{2,3})\)/i],[xe,[Ce,_A],[ve,Ja]],[/(quest( \d| pro)?)/i],[xe,[Ce,ux],[ve,Ja]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[Ce,[ve,_g]],[/(aeobc)\b/i],[xe,[Ce,Oh],[ve,_g]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[xe,[ve,gt]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[xe,[ve,ft]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[ve,ft]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[ve,gt]],[/(android[-\w\. ]{0,9});.+buil/i],[xe,[Ce,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[Ne,[Te,$G+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[Ne,[Te,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[Te,Ne],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[Ne,Te]],os:[[/microsoft (windows) (vista|xp)/i],[Te,Ne],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[Te,[Ne,EA,dx]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[Ne,EA,dx],[Te,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[Ne,/_/g,"."],[Te,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[Te,zI],[Ne,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[Ne,Te],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[Te,Ne],[/\(bb(10);/i],[Ne,[Te,ox]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[Ne,[Te,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[Ne,[Te,Qh+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[Ne,[Te,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[Ne,[Te,"watchOS"]],[/crkey\/([\d\.]+)/i],[Ne,[Te,Uh+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[Te,VI],Ne],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[Te,Ne],[/(sunos) ?([\w\.\d]*)/i],[[Te,"Solaris"],Ne],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[Te,Ne]]},kr=function(n,e){if(typeof n===i0&&(e=n,n=void 0),!(this instanceof kr))return new kr(n,e).getResult();var t=typeof window!==gg&&window.navigator?window.navigator:void 0,i=n||(t&&t.userAgent?t.userAgent:kf),s=t&&t.userAgentData?t.userAgentData:void 0,r=e?JG(fx,e):fx,o=t&&t.userAgent==i;return this.getBrowser=function(){var a={};return a[Te]=void 0,a[Ne]=void 0,Cc.call(a,i,r.browser),a[GI]=ZG(a[Ne]),o&&t&&t.brave&&typeof t.brave.isBrave==mg&&(a[Te]="Brave"),a},this.getCPU=function(){var a={};return a[ds]=void 0,Cc.call(a,i,r.cpu),a},this.getDevice=function(){var a={};return a[Ce]=void 0,a[xe]=void 0,a[ve]=void 0,Cc.call(a,i,r.device),o&&!a[ve]&&s&&s.mobile&&(a[ve]=gt),o&&a[xe]=="Macintosh"&&t&&typeof t.standalone!==gg&&t.maxTouchPoints&&t.maxTouchPoints>2&&(a[xe]="iPad",a[ve]=ft),a},this.getEngine=function(){var a={};return a[Te]=void 0,a[Ne]=void 0,Cc.call(a,i,r.engine),a},this.getOS=function(){var a={};return a[Te]=void 0,a[Ne]=void 0,Cc.call(a,i,r.os),o&&!a[Te]&&s&&s.platform&&s.platform!="Unknown"&&(a[Te]=s.platform.replace(/chrome os/i,VI).replace(/macos/i,zI)),a},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(a){return i=typeof a===Of&&a.length>Eg?vg(a,Eg):a,this},this.setUA(i),this};kr.VERSION=KG;kr.BROWSER=Uf([Te,Ne,GI]);kr.CPU=Uf([ds]);kr.DEVICE=Uf([xe,Ce,ve,Qc,gt,Ni,ft,Ja,_g]);kr.ENGINE=kr.OS=Uf([Te,Ne]);const xa=typeof window<"u",Qf=xa?kr(navigator.userAgent):null;var px=!1;if(xa){const n=Qf.browser;n?.name,px=n?.name==="Firefox",px&&parseInt(n?.major??0)}xa&&Qf.os;const Ax=xa?Qf.device.type:null;var WI=Ax!="tablet"&&Ax!="mobile",tV=WI!=!0;xa&&Qf.os?.name;const mx=tV,Qt=Ss.debug;Ss.debugfbo;Ss.debugaudio;Ss.stats;Ss.mode&&parseInt(Ss.mode);var Hs=xa?Math.min(window.devicePixelRatio,2):null,nV=function(n){},po={w:0,h:0},iV=(n,e)=>{},sV=(n,e)=>{po.w=n,po.h=e};const rV="landscape",oV="portrait";var aV=function(n){};let Et=null;xa&&(Et=document.createElement("canvas"),Et.style.width="100%",Et.style.height="100%",Et.style.outline="none",Et.style.position="absolute",Et.style.left="50%",Et.style.top="50%",Et.style.transform="translate(-50%, -50%)",document.body.appendChild(Et));const gx=Number(Ss.fps);var ot=Object.freeze({VOID:"VOID",CLOUDS:"CLOUDS",CITY:"CITY",ZOOM:"ZOOM",INTERIOR:"INTERIOR"}),_x=Ss.edit,cn="VOID";function vA(n){cn=n}const yA=1e3,ol=0,Fs=-700,Yo=-20,yg=0,Sc=0,lV=Ss.randomcloudseed,cV=45,uV=45;Ss.debugcloudsimage;Ss.buildging3d;var Ps=ci.registerPlugin(F_)||ci;Ps.core.Tween;var Ge={BEFORE_RENDER:"before_render",UPDATE:"update",DAWN_UPDATE:"dawn_update",PRE_UPDATE:"pre_update",POST_UPDATE:"post_update",DUSK_UPDATE:"dusk_update",PAUSE:"pause",PLAY:"play",RESIZE:"resize",PRE_RENDER:"pre_render",KEY_DOWN:"keydown",KEY_UP:"keyup",MOUSE_DOWN:"mousedown",MOUSE_MOVE:"mousemove",MOUSE_UP:"mouseup",MOUSE_LEAVE:"mouseleave",CLICK:"click",DBL_CLICK:"dblclick",WHEEL:"wheel",PINCH_ZOOM:"pinch_zoom",PINCH_START:"pinch_start",PINCH_END:"pinch_end",RELOAD:"reload",ZOOM_POSITION_RESET:"zoom_position_reset"};const zh={x:3500,y:1800};function hV(n,e){let t=0,i=0,s=1;t=n*s,i=e*s,t*i>zh.x*zh.y&&(t=zh.x,i=zh.y);const r=Math.sqrt(t*i),o=r*r;let a=n,l=e;if(n*e>o){const u=l/a;a=r,l=Math.floor(r*u);let h=a*l;const c=Math.sqrt(o/h);a=Math.floor(a*c),l=Math.floor(l*c)}return{width:a,height:l}}var Wh={TOUCH_MOVE:"touchmove",TOUCH_START:"touchstart",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel"};const Ex=new V,vx=new V;class dV{constructor(){this._lastPlaying=!1,this._isPlaying=!1,this.now=Date.now(),this.absTimer=0,this.w=0,this.h=0,this.lastW=0,this.lastH=0,this.timeStampTap=null,this.mousemoveRef=this.mousemove.bind(this),this.mousedownRef=this.mousedown.bind(this),this.mouseupRef=this.mouseup.bind(this),this.updateEvent=this.update.bind(this),this.mouseWheelRef=this.mouseWheel.bind(this),this.keydownRef=this.keydown.bind(this),this.keyupRef=this.keyup.bind(this),this.canvasBoundingRect={left:0,top:0},this.isDragging=!1,this.firstTouch={},this.endTouch={normalized:{x:0,y:0},raw:{x:0,y:0}},this.touches={},this.multitouch=!1,this.isPinching=!1,this.mouseMovedStorage=null,this.mouseUpStorage=null,this.mouseDownStorage=null,this.mouseClickStorage=null,this.mouseDblClickStorage=null,this.wheelStorage=null,this.mousemovePackets=[],this.pinchZoomStorage=null,this.pinchStartStorage=null,this.pinchEndStorage=null,this.lastMouseDown={normalized:{x:0,y:0},raw:{x:0,y:0}},Qt&&(globalThis.mediator=this)}play=()=>new Promise(async(e,t)=>{if(this._isPlaying){console.warn("webgl already playing"),e();return}this.addEvents(),this.now=Date.now(),gx!=null&&Ps.ticker.fps(gx),Ps.ticker.add(this.updateEvent),this._isPlaying=!0,$e.emit(Ge.PLAY,null),e()});pause=()=>new Promise((e,t)=>{if(this._isPlaying==!1){console.warn("webgl already paused"),e();return}this.removeEvents(),this._isPlaying=!1,$e.emit(Ge.PAUSE,null),e()});update(e=!1,t=null){let i=Date.now(),s=(i-this.now)/1e3;e==!0&&(s=0),this.mouseDownStorage!=null&&($e.emit(Ge.MOUSE_DOWN,this.mouseDownStorage),this.mouseDownStorage=null),this.mouseMovedStorage!=null&&(this.mouseMovedStorage.mousemovePackets=this.mousemovePackets,$e.emit(Ge.MOUSE_MOVE,this.mouseMovedStorage),this.mouseMovedStorage=null,this.mousemovePackets=[]),this.mouseUpStorage!=null&&($e.emit(Ge.MOUSE_UP,this.mouseUpStorage),this.mouseUpStorage=null),this.mouseClickStorage!=null&&($e.emit(Ge.CLICK,this.mouseClickStorage),this.mouseClickStorage=null),this.mouseDblClickStorage!=null&&($e.emit(Ge.DBL_CLICK,this.mouseDblClickStorage),this.mouseDblClickStorage=null),this.wheelStorage!=null&&($e.emit(Ge.WHEEL,this.wheelStorage),this.wheelStorage=null),this.pinchStartStorage!=null&&($e.emit(Ge.PINCH_START,this.pinchStartStorage),this.pinchStartStorage=null),this.pinchEndStorage!=null&&($e.emit(Ge.PINCH_END,this.pinchEndStorage),this.pinchEndStorage=null),this.pinchZoomStorage!=null&&($e.emit(Ge.PINCH_ZOOM,this.pinchZoomStorage),this.pinchZoomStorage=null),this.now=i,this.absTimer+=s,$e.emit(Ge.DAWN_UPDATE,s,this.absTimer),$e.emit(Ge.PRE_UPDATE,s,this.absTimer),$e.emit(Ge.BEFORE_RENDER,s,this.absTimer),$e.emit(Ge.UPDATE,s,this.absTimer),$e.emit(Ge.POST_UPDATE,s,this.absTimer),$e.emit(Ge.DUSK_UPDATE,s,this.absTimer)}addEvents(){mx?(Et.addEventListener(Wh.TOUCH_MOVE,this.mousemoveRef),Et.addEventListener(Wh.TOUCH_START,this.mousedownRef),Et.addEventListener(Wh.TOUCH_END,this.mouseupRef),Et.addEventListener(Wh.TOUCH_CANCEL,this.mouseupRef)):(window.addEventListener("mouseleave",this.mouseLeave.bind(this)),Et.addEventListener(Ge.MOUSE_MOVE,this.mousemoveRef),Et.addEventListener(Ge.MOUSE_DOWN,this.mousedownRef),Et.addEventListener(Ge.MOUSE_UP,this.mouseupRef),window.addEventListener(Ge.KEY_DOWN,this.keydownRef),window.addEventListener(Ge.KEY_UP,this.keyupRef),Et.addEventListener(Ge.WHEEL,this.mouseWheelRef,!1))}removeEvents(){mx?(Et.removeEventListener(Ge.TOUCH_MOVE,this.mousemoveRef),Et.removeEventListener(Ge.TOUCH_START,this.mousedownRef),Et.removeEventListener(Ge.TOUCH_END,this.mouseupRef)):(Et.removeEventListener(Ge.MOUSE_MOVE,this.mousemoveRef),Et.removeEventListener(Ge.MOUSE_DOWN,this.mousedownRef),Et.removeEventListener(Ge.MOUSE_UP,this.mouseupRef),window.removeEventListener(Ge.KEY_DOWN,this.keydownRef),window.removeEventListener(Ge.KEY_UP,this.keyupRef),Et.removeEventListener(Ge.WHEEL,this.mouseWheelRef))}mousedown=e=>{if(this.isDragging=!0,e.changedTouches){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){let i=e.changedTouches[t];this.touches[i.identifier]={startX:i.clientX,startY:i.clientY,clientX:i.clientX,clientY:i.clientY,dx:0,dy:0}}}this.timeStampTap=Date.now(),this.mouseDownStorage=this.getMouseData(e),this.lastMouseDown=this.getMouseData(e)};mouseLeave(e){this.isDragging==!0&&this.mouseup(e),$e.emit(Ge.MOUSE_LEAVE,e)}mouseup(e){if(this.isDragging=!1,e.changedTouches){e.preventDefault();for(let s=0;s<e.changedTouches.length;s++){let r=e.changedTouches[s];delete this.touches[r.identifier]}e.targetTouches.length!=2&&(this.prevPinchDistance=null,this.pinchZoomStorage=null,this.isPinching&&(this.pinchEndStorage={},this.isPinching=!1),this.pinchStartStorage=null),e.targetTouches.length<2&&(this.multitouch=!1)}if(this.multitouch)return;this.mouseUpStorage=this.getMouseData(e);let t;if(e.isVR)Ex.setFromMatrixPosition(this.mouseUpStorage.controller.matrixWorld),vx.setFromMatrixPosition(this.lastMouseDown.controller.matrixWorld),Ex.distanceToSquared(vx)<.1&&(this.mouseClickStorage=this.mouseUpStorage);else{const s=this.mouseUpStorage.raw.x-this.lastMouseDown.raw.x,r=this.mouseUpStorage.raw.y-this.lastMouseDown.raw.y;t=Math.sqrt(s*s+r*r)}const i=Date.now()-this.timeStampTap;t<10&&i<1e3&&(this.mouseClickStorage=this.getMouseData(e))}click(e){this.mouseClickStorage=this.getMouseData(e)}mousemove(e){if(e.changedTouches){for(let i=0;i<e.changedTouches.length;i++){const s=e.changedTouches[i];let r=this.touches[s.identifier];r&&(r.dx=s.clientX-r.clientX,r.dy=s.clientY-r.clientY,r.clientX=s.clientX,r.clientY=s.clientY)}if(e.targetTouches.length===2&&this.handlePinchZoom(e),this.multitouch)return}let t=this.getMouseData(e);this.mousemovePackets.push(t),this.mouseMovedStorage=t}handlePinchZoom(e){let t=e.targetTouches[0],i=e.targetTouches[1],s=this.touches[t.identifier],r=this.touches[i.identifier];if(s!=null&&r!=null){const o=this.distance(t,i);if(this.prevPinchDistance){this.pinchZoomStorage==null&&(this.pinchZoomStorage={pinchDelta:0,pinchDistance:o});const a=o-this.prevPinchDistance;this.pinchZoomStorage.pinchDelta+=a,this.pinchZoomStorage.direction=Math.sign(a),this.isPinching=!0}this.prevPinchDistance=o}}distance(e,t){let i=Math.abs(e.clientX-t.clientX),s=Math.abs(e.clientY-t.clientY);return Math.hypot(i,s)}canHandleKeyEvent(e){return e.target===Et||e.target===Et.parentElement||e.target===document.body||e.target!==document.activeElement}keydown(e){this.canHandleKeyEvent(e)&&$e.emit(Ge.KEY_DOWN,e)}keyup(e){this.canHandleKeyEvent(e)&&$e.emit(Ge.KEY_UP,e)}getMouseData(e){let t=0,i=0,s=!1;if(e.changedTouches&&e.changedTouches[0]){e.changedTouches.length>1&&(s=!0),e=e.changedTouches[0];let a=this.touches[e.identifier];a!=null&&(t=a.dx,i=a.dy)}else t=e.movementX??0,i=e.movementY??0;const r=this.canvasBoundingRect;return{rawEvent:e,multitouch:s,isDragging:this.isDragging,time:Date.now(),normalized:{x:(e.clientX-r.left)/r.width*2-1,y:(e.clientY-r.top)/r.height*2-1},raw:{x:e.clientX,y:e.clientY,dx:t,dy:i,screenX:e.screenX,screenY:e.screenY,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,button:e.button??0}}}mouseWheel(e){this.wheelStorage=e}resize(e){if((e==null||!e.w&&!e.h)&&(e={w:this.lastW,h:this.lastH,...e}),this.w=e.w,this.h=e.h,this.fullFrameX=e.w,this.fullFrameY=e.h,e.force==null||e.force==!1){this.lastW=e.w,this.lastH=e.h;let{width:t,height:i}=hV(this.fullFrameX*Hs,this.fullFrameY*Hs);this.w=Math.round(t/Hs),this.h=Math.round(i/Hs)}setTimeout(()=>{this.updateCanvasBounds()}),iV(this.w,this.h),sV(this.fullFrameX,this.fullFrameY),aV(window.matchMedia("(orientation: landscape)").matches?rV:oV),$e.emit(Ge.RESIZE,this.w,this.h),Et!=null&&(Et.style.width=`${this.fullFrameX}px`,Et.style.height=`${this.fullFrameY}px`),nV(parseFloat((this.w/this.fullFrameX*Hs).toFixed(3))),this._isPlaying==!1&&this.update(!0)}updateCanvasBounds(){const e=Et.getBoundingClientRect();this.canvasBoundingRect.left=e.left,this.canvasBoundingRect.top=e.top,this.canvasBoundingRect.width=e.width,this.canvasBoundingRect.height=e.height}}const qh=new dV;class fV{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:s,msg:r,transfer:o}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,o)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=i,this.workers[s].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const pV=0,yx=2,AV=1,xx=2,mV=0,gV=1,_V=10,EV=0,qI=9,YI=15,jI=16,XI=22,KI=37,$I=43,JI=76,ZI=83,eT=97,tT=100,nT=103,iT=109,sT=165,rT=166,s0=1000066e3;class vV{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class bc{constructor(e,t,i,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const i=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,s)}}const hi=[171,75,84,88,32,50,48,187,13,10,26,10];function Cx(n){return new TextDecoder().decode(n)}function yV(n){const e=new Uint8Array(n.buffer,n.byteOffset,hi.length);if(e[0]!==hi[0]||e[1]!==hi[1]||e[2]!==hi[2]||e[3]!==hi[3]||e[4]!==hi[4]||e[5]!==hi[5]||e[6]!==hi[6]||e[7]!==hi[7]||e[8]!==hi[8]||e[9]!==hi[9]||e[10]!==hi[10]||e[11]!==hi[11])throw new Error("Missing KTX 2.0 identifier.");const t=new vV,i=17*Uint32Array.BYTES_PER_ELEMENT,s=new bc(n,hi.length,i,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const r=s._nextUint32();t.supercompressionScheme=s._nextUint32();const o=s._nextUint32(),a=s._nextUint32(),l=s._nextUint32(),u=s._nextUint32(),h=s._nextUint64(),c=s._nextUint64(),d=new bc(n,hi.length+i,3*r*8,!0);for(let G=0;G<r;G++)t.levels.push({levelData:new Uint8Array(n.buffer,n.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new bc(n,o,a,!0),p={vendorId:f._skip(4)._nextUint16(),descriptorType:f._nextUint16(),versionNumber:f._nextUint16(),descriptorBlockSize:f._nextUint16(),colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},A=(p.descriptorBlockSize/4-6)/4;for(let G=0;G<A;G++){const B={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&B.channelType?(B.sampleLower=f._nextInt32(),B.sampleUpper=f._nextInt32()):(B.sampleLower=f._nextUint32(),B.sampleUpper=f._nextUint32()),p.samples[G]=B}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(p);const g=new bc(n,l,u,!0);for(;g._offset<u;){const G=g._nextUint32(),B=g._scan(G),ae=Cx(B);if(t.keyValue[ae]=g._nextUint8Array(G-B.byteLength-1),ae.match(/^ktx/i)){const pe=Cx(t.keyValue[ae]);t.keyValue[ae]=pe.substring(0,pe.lastIndexOf("\0"))}g._skip(G%4?4-G%4:0)}if(c<=0)return t;const m=new bc(n,h,c,!0),E=m._nextUint16(),_=m._nextUint16(),v=m._nextUint32(),x=m._nextUint32(),S=m._nextUint32(),w=m._nextUint32(),T=[];for(let G=0;G<r;G++)T.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const y=h+m._offset,C=y+v,D=C+x,L=D+S,P=new Uint8Array(n.buffer,n.byteOffset+y,v),H=new Uint8Array(n.buffer,n.byteOffset+C,x),O=new Uint8Array(n.buffer,n.byteOffset+D,S),F=new Uint8Array(n.buffer,n.byteOffset+L,w);return t.globalData={endpointCount:E,selectorCount:_,imageDescs:T,endpointsData:P,selectorsData:H,tablesData:O,extendedData:F},t}let xA,pr,xg;const CA={env:{emscripten_notify_memory_growth:function(n){xg=new Uint8Array(pr.exports.memory.buffer)}}};class xV{init(){return xA||(xA=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Sx).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,CA)).then(this._init):WebAssembly.instantiate(Buffer.from(Sx,"base64"),CA).then(this._init),xA)}_init(e){pr=e.instance,CA.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!pr)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,s=pr.exports.malloc(i);xg.set(e,s),t=t||Number(pr.exports.ZSTD_findDecompressedSize(s,i));const r=pr.exports.malloc(t),o=pr.exports.ZSTD_decompress(r,t,s,i),a=xg.slice(r,r+o);return pr.exports.free(s),pr.exports.free(r),a}}const Sx="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",CV="display-p3",SV="display-p3-linear",SA=new WeakMap;let bA=0,wA;class ts extends Io{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new fV,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new Cl(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new Cl(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const s=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([r,o])=>{const a=ts.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(ts.EngineFormat),"let _EngineType = "+JSON.stringify(ts.EngineType),"let _TranscoderFormat = "+JSON.stringify(ts.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ts.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{const u=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return u.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),u})}),bA>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),bA++}return this.transcoderPending}load(e,t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new Cl(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},i,s)}parse(e,t,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(SA.has(e))return SA.get(e).promise.then(t).catch(i);this._createTexture(e).then(s=>t?t(s):null).catch(i)}_createTextureFrom(e,t){const{type:i,error:s,data:{faces:r,width:o,height:a,format:l,type:u,dfdFlags:h}}=e;if(i==="error")return Promise.reject(s);let c;if(t.faceCount===6)c=new y2(r,l,u);else{const d=r[0].mipmaps;c=t.layerCount>1?new v2(d,o,a,t.layerCount,l,u):new Bf(d,o,a,l,u)}return c.minFilter=r[0].mipmaps.length===1?On:_s,c.magFilter=On,c.generateMipmaps=!1,c.needsUpdate=!0,c.colorSpace=oT(t),c.premultiplyAlpha=!!(h&AV),c}async _createTexture(e,t={}){const i=yV(new Uint8Array(e)),s=i.vkFormat===s0&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===EV||s&&!this.workerConfig.astcHDRSupported))return wV(i);const o=t,a=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:o},[e])).then(l=>this._createTextureFrom(l.data,i));return SA.set(e,{promise:a}),a}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),bA--,this}}ts.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};ts.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};ts.EngineFormat={RGBAFormat:Cn,RGBA_ASTC_4x4_Format:Su,RGB_BPTC_UNSIGNED_Format:Zd,RGBA_BPTC_Format:nu,RGBA_ETC2_EAC_Format:Jd,RGBA_PVRTC_4BPPV1_Format:Xd,RGBA_S3TC_DXT5_Format:tu,RGB_ETC1_Format:Kd,RGB_ETC2_Format:$d,RGB_PVRTC_4BPPV1_Format:jd,RGBA_S3TC_DXT1_Format:eu};ts.EngineType={UnsignedByteType:vn,HalfFloatType:_i,FloatType:ai};ts.BasisWorker=function(){let n,e,t;const i=_EngineFormat,s=_EngineType,r=_TranscoderFormat,o=_BasisFormat;self.addEventListener("message",function(p){const A=p.data;switch(A.type){case"init":n=A.config,a(A.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:g,buffers:m,width:E,height:_,hasAlpha:v,format:x,type:S,dfdFlags:w}=l(A.buffer);self.postMessage({type:"transcode",id:A.id,data:{faces:g,width:E,height:_,hasAlpha:v,format:x,type:S,dfdFlags:w}},m)}catch(g){console.error(g),self.postMessage({type:"error",id:A.id,error:g.message})}});break}});function a(p){e=new Promise(A=>{t={wasmBinary:p,onRuntimeInitialized:A},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function l(p){const A=new t.KTX2File(new Uint8Array(p));function g(){A.close(),A.delete()}if(!A.isValid())throw g(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let m;if(A.isUASTC())m=o.UASTC;else if(A.isETC1S())m=o.ETC1S;else if(A.isHDR())m=o.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const E=A.getWidth(),_=A.getHeight(),v=A.getLayers()||1,x=A.getLevels(),S=A.getFaces(),w=A.getHasAlpha(),T=A.getDFDFlags(),{transcoderFormat:y,engineFormat:C,engineType:D}=c(m,E,_,w);if(!E||!_||!x)throw g(),new Error("THREE.KTX2Loader:	Invalid texture");if(!A.startTranscoding())throw g(),new Error("THREE.KTX2Loader: .startTranscoding failed");const L=[],P=[];for(let H=0;H<S;H++){const O=[];for(let F=0;F<x;F++){const G=[];let B,ae;for(let me=0;me<v;me++){const be=A.getImageLevelInfo(F,me,H);H===0&&F===0&&me===0&&(be.origWidth%4!==0||be.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),x>1?(B=be.origWidth,ae=be.origHeight):(B=be.width,ae=be.height);let Me=new Uint8Array(A.getImageTranscodedSizeInBytes(F,me,0,y));const K=A.transcodeImage(Me,F,me,H,y,0,-1,-1);if(D===s.HalfFloatType&&(Me=new Uint16Array(Me.buffer,Me.byteOffset,Me.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!K)throw g(),new Error("THREE.KTX2Loader: .transcodeImage failed.");G.push(Me)}const pe=f(G);O.push({data:pe,width:B,height:ae}),P.push(pe.buffer)}L.push({mipmaps:O,width:E,height:_,format:C,type:D})}return g(),{faces:L,buffers:P,width:E,height:_,hasAlpha:w,dfdFlags:T,format:C,type:D}}const u=[{if:"astcSupported",basisFormat:[o.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[o.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[o.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[o.ETC1S]:u.filter(p=>p.basisFormat.includes(o.ETC1S)).sort((p,A)=>p.priorityUASTC-A.priorityUASTC),[o.UASTC]:u.filter(p=>p.basisFormat.includes(o.UASTC)).sort((p,A)=>p.priorityUASTC-A.priorityUASTC),[o.UASTC_HDR]:u.filter(p=>p.basisFormat.includes(o.UASTC_HDR)).sort((p,A)=>p.priorityHDR-A.priorityHDR)};function c(p,A,g,m){const E=h[p];for(let _=0;_<E.length;_++){const v=E[_];if(v.if&&!n[v.if]||!v.basisFormat.includes(p)||m&&v.transcoderFormat.length<2||v.needsPowerOfTwo&&!(d(A)&&d(g)))continue;const x=v.transcoderFormat[m?1:0],S=v.engineFormat[m?1:0],w=v.engineType[0];return{transcoderFormat:x,engineFormat:S,engineType:w}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(p){return p<=2?!0:(p&p-1)===0&&p!==0}function f(p){if(p.length===1)return p[0];let A=0;for(let E=0;E<p.length;E++){const _=p[E];A+=_.byteLength}const g=new Uint8Array(A);let m=0;for(let E=0;E<p.length;E++){const _=p[E];g.set(_,m),m+=_.byteLength}return g}};const bV=new Set([Cn,Jo,ho]),IA={[iT]:Cn,[eT]:Cn,[KI]:Cn,[$I]:Cn,[nT]:Jo,[ZI]:Jo,[jI]:Jo,[XI]:Jo,[tT]:ho,[JI]:ho,[YI]:ho,[qI]:ho,[s0]:Su,[rT]:bu,[sT]:bu},TA={[iT]:ai,[eT]:_i,[KI]:vn,[$I]:vn,[nT]:ai,[ZI]:_i,[jI]:vn,[XI]:vn,[tT]:ai,[JI]:_i,[YI]:vn,[qI]:vn,[s0]:_i,[rT]:vn,[sT]:vn};async function wV(n){const{vkFormat:e}=n;if(IA[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;n.supercompressionScheme===yx&&(wA||(wA=new Promise(async r=>{const o=new xV;await o.init(),r(o)})),t=await wA);const i=[];for(let r=0;r<n.levels.length;r++){const o=Math.max(1,n.pixelWidth>>r),a=Math.max(1,n.pixelHeight>>r),l=n.pixelDepth?Math.max(1,n.pixelDepth>>r):0,u=n.levels[r];let h;if(n.supercompressionScheme===pV)h=u.levelData;else if(n.supercompressionScheme===yx)h=t.decode(u.levelData,u.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let c;TA[e]===ai?c=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):TA[e]===_i?c=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):c=h,i.push({data:c,width:o,height:a,depth:l})}let s;if(bV.has(IA[e]))s=n.pixelDepth===0?new Df(i[0].data,n.pixelWidth,n.pixelHeight):new pI(i[0].data,n.pixelWidth,n.pixelHeight,n.pixelDepth);else{if(n.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new Bf(i,n.pixelWidth,n.pixelHeight),s.minFilter=i.length===1?On:_s,s.magFilter=On}return s.mipmaps=i,s.type=TA[e],s.format=IA[e],s.colorSpace=oT(n),s.needsUpdate=!0,Promise.resolve(s)}function oT(n){const e=n.dataFormatDescriptor[0];return e.colorPrimaries===gV?e.transferFunction===xx?Mn:Jn:e.colorPrimaries===_V?e.transferFunction===xx?CV:SV:(e.colorPrimaries===mV||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),Qs)}let Ki=null;Et!=null&&(Ki=new NI({canvas:Et,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"}),Ki.autoClear=!1,Ki.setPixelRatio(Hs),Ki.outputColorSpace=Mn,Ki.info.autoReset=!1,Ki.setClearColor(0,1),Ki.debug.checkShaderErrors=Qt,Ki.shadowMap.autoUpdate=!1,Ki.localClippingEnabled=!1,Ki.setTransparentSort((n,e)=>{if(n.object._closestDistance!=null&&(n.z=n.object._closestDistance),e.object._closestDistance!=null&&(e.z=e.object._closestDistance),n.groupOrder!==e.groupOrder)return n.groupOrder-e.groupOrder;if(n.renderOrder!==e.renderOrder)return n.renderOrder-e.renderOrder}),Ki.setOpaqueSort((n,e)=>{var t=n.z,i=e.z;return n.object._closestDistance!=null&&(t=n.object._closestDistance),e.object._closestDistance!=null&&(i=e.object._closestDistance),n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:t!==i?t-i:n.id-e.id}));const al=Ki;function bx(n,e){if(e===oO)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===hg||e===aI){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===hg)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class IV extends Io{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BV(t)}),this.register(function(t){return new LV(t)}),this.register(function(t){return new GV(t)}),this.register(function(t){return new VV(t)}),this.register(function(t){return new zV(t)}),this.register(function(t){return new PV(t)}),this.register(function(t){return new FV(t)}),this.register(function(t){return new kV(t)}),this.register(function(t){return new OV(t)}),this.register(function(t){return new RV(t)}),this.register(function(t){return new UV(t)}),this.register(function(t){return new NV(t)}),this.register(function(t){return new HV(t)}),this.register(function(t){return new QV(t)}),this.register(function(t){return new MV(t)}),this.register(function(t){return new WV(t)}),this.register(function(t){return new qV(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=ru.extractUrlBase(e);o=ru.resolveURL(u,this.path)}else o=ru.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Cl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===aT){try{o[pt.KHR_BINARY_GLTF]=new YV(e)}catch(c){s&&s(c);return}r=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new oz(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const c=this.pluginCallbacks[h](u);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,o[c.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const c=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(c){case pt.KHR_MATERIALS_UNLIT:o[c]=new DV;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[c]=new jV(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[c]=new XV;break;case pt.KHR_MESH_QUANTIZATION:o[c]=new KV;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function TV(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class MV{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new Ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Jn);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new G2(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Q2(h),u.distance=c;break;case"spot":u=new O2(h),u.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),gr(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(u),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class DV{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Es}extendParams(e,t,i){const s=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Mn))}return Promise.all(s)}}class RV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class BV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(r)}}class LV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class NV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class PV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Jn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Mn)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class FV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class kV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(a[0],a[1],a[2],Jn),Promise.all(r)}}class OV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class UV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(a[0],a[1],a[2],Jn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Mn)),Promise.all(r)}}class QV{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class HV{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class GV{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class VV{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zV{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class WV{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,u=s.byteLength||0,h=s.count,c=s.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,c,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*c);return o.decodeGltfBuffer(new Uint8Array(f),h,c,d,s.mode,s.filter),f})})}else return null}}class qV{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const u of s.primitives)if(u.mode!==Ji.TRIANGLES&&u.mode!==Ji.TRIANGLE_STRIP&&u.mode!==Ji.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),c=h.isGroup?h.children:[h],d=u[0].count,f=[];for(const p of c){const A=new at,g=new V,m=new Wi,E=new V(1,1,1),_=new p2(p.geometry,p.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&E.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,A.compose(g,m,E));for(const v in l)if(v==="_COLOR_0"){const x=l[v];_.instanceColor=new Zo(x.array,x.itemSize,x.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);zt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const aT="glTF",wc=12,wx={JSON:1313821514,BIN:5130562};class YV{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wc),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==aT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-wc,r=new DataView(e,wc);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===wx.JSON){const u=new Uint8Array(e,wc+o,a);this.content=i.decode(u)}else if(l===wx.BIN){const u=wc+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jV{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const c=Cg[h]||h.toLowerCase();a[c]=o[h]}for(const h in e.attributes){const c=Cg[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=bl[d.componentType];u[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(c,d){s.decodeDracoFile(h,function(f){for(const p in f.attributes){const A=f.attributes[p],g=l[p];g!==void 0&&(A.normalized=g)}c(f)},a,u,Jn,d)})})}}class XV{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KV{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class lT extends Vu{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=s-t,c=(i-t)/h,d=c*c,f=d*c,p=e*u,A=p-u,g=-2*f+3*d,m=f-d,E=1-g,_=m-d+c;for(let v=0;v!==a;v++){const x=o[A+v+a],S=o[A+v+l]*h,w=o[p+v+a],T=o[p+v]*h;r[v]=E*x+_*S+g*w+m*T}return r}}const $V=new Wi;class JV extends lT{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return $V.fromArray(r).normalize().toArray(r),r}}const Ji={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ix={9728:$n,9729:On,9984:Jw,9985:dd,9986:Oc,9987:_s},Tx={33071:gs,33648:Yd,10497:pa},MA={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZV={CUBICSPLINE:void 0,LINEAR:Iu,STEP:wu},DA={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ez(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new $_({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fr})),n.DefaultMaterial}function Go(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function gr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tz(n,e,t){let i=!1,s=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const c=e[u];if(c.POSITION!==void 0&&(i=!0),c.NORMAL!==void 0&&(s=!0),c.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const c=e[u];if(i){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;o.push(d)}if(s){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],c=u[1],d=u[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=c),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function nz(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iz(n){let e;const t=n.extensions&&n.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+RA(t.attributes):e=n.indices+":"+RA(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+RA(n.targets[i]);return e}function RA(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Sg(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sz(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rz=new at;class oz{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TV,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new rf(this.options.manager):this.textureLoader=new z2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Go(r,a,s),gr(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(ru.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=MA[s.type],a=bl[s.componentType],l=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new jt(u,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=MA[s.type],u=bl[s.componentType],h=u.BYTES_PER_ELEMENT,c=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let A,g;if(f&&f!==c){const m=Math.floor(d/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let _=t.cache.get(E);_||(A=new u(a,m*f,s.count*f/h),_=new xI(A,f/h),t.cache.add(E,_)),g=new Mu(_,l,d%f/h,p)}else a===null?A=new u(s.count*l):A=new u(a,d,s.count*l),g=new jt(A,l,p);if(s.sparse!==void 0){const m=MA.SCALAR,E=bl[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,x=new E(o[1],_,s.sparse.count*m),S=new u(o[2],v,s.sparse.count*l);a!==null&&(g=new jt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,T=x.length;w<T;w++){const y=x[w];if(g.setX(y,S[w*l]),l>=2&&g.setY(y,S[w*l+1]),l>=3&&g.setZ(y,S[w*l+2]),l>=4&&g.setW(y,S[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ix[d.magFilter]||On,h.minFilter=Ix[d.minFilter]||_s,h.wrapS=Tx[d.wrapS]||pa,h.wrapT=Tx[d.wrapT]||pa,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$n&&h.minFilter!==On,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(c){u=!0;const d=new Blob([c],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(A){const g=new on(A);g.needsUpdate=!0,d(g)}),t.load(ru.resolveURL(c,r.path),p,void 0,f)})}).then(function(c){return u===!0&&a.revokeObjectURL(l),gr(c,o),c.userData.mimeType=o.mimeType||sz(o.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new bI,Ys.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new SI,Ys.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return $_}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[pt.KHR_MATERIALS_UNLIT]){const c=s[pt.KHR_MATERIALS_UNLIT];o=c.getMaterialType(),u.push(c.extendParams(a,r,t))}else{const c=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Jn),a.opacity=d[3]}c.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",c.baseColorTexture,Mn)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Us);const h=r.alphaMode||DA.OPAQUE;if(h===DA.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===DA.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Es&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;a.normalScale.set(c,c)}if(r.occlusionTexture!==void 0&&o!==Es&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Es){const c=r.emissiveFactor;a.emissive=new Ke().setRGB(c[0],c[1],c[2],Jn)}return r.emissiveTexture!==void 0&&o!==Es&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mn)),Promise.all(u).then(function(){const c=new o(a);return r.name&&(c.name=r.name),gr(c,r),t.associations.set(c,{materials:e}),r.extensions&&Go(s,c,r),c})}createUniqueName(e){const t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mx(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=iz(u),c=s[h];if(c)o.push(c.promise);else{let d;u.extensions&&u.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Mx(new qi,u,t),s[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?ez(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],c=[];for(let f=0,p=h.length;f<p;f++){const A=h[f],g=o[f];let m;const E=u[f];if(g.mode===Ji.TRIANGLES||g.mode===Ji.TRIANGLE_STRIP||g.mode===Ji.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new h2(A,E):new dn(A,E),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Ji.TRIANGLE_STRIP?m.geometry=bx(m.geometry,aI):g.mode===Ji.TRIANGLE_FAN&&(m.geometry=bx(m.geometry,hg));else if(g.mode===Ji.LINES)m=new g2(A,E);else if(g.mode===Ji.LINE_STRIP)m=new K_(A,E);else if(g.mode===Ji.LINE_LOOP)m=new _2(A,E);else if(g.mode===Ji.POINTS)m=new E2(A,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&nz(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),gr(m,r),g.extensions&&Go(s,m,g),t.assignFinalMaterial(m),c.push(m)}for(let f=0,p=c.length;f<p;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return r.extensions&&Go(s,c[0],r),c[0];const d=new Yn;r.extensions&&Go(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=c.length;f<p;f++)d.add(c[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new mi(uI.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Nf(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),gr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const c=o[u];if(c){a.push(c);const d=new at;r!==null&&d.fromArray(r.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new X_(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],u=[],h=[];for(let c=0,d=s.channels.length;c<d;c++){const f=s.channels[c],p=s.samplers[f.sampler],A=f.target,g=A.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,E=s.parameters!==void 0?s.parameters[p.output]:p.output;A.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",E)),u.push(p),h.push(A))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(c){const d=c[0],f=c[1],p=c[2],A=c[3],g=c[4],m=[];for(let E=0,_=d.length;E<_;E++){const v=d[E],x=f[E],S=p[E],w=A[E],T=g[E];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=i._createAnimationTracks(v,x,S,w,T);if(y)for(let C=0;C<y.length;C++)m.push(y[C])}return new D2(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=s.weights.length;l<u;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(i.getDependency("node",a[u]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],c=u[1],d=u[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,rz)});for(let f=0,p=c.length;f<p;f++)h.add(c[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new CI:u.length>1?h=new Yn:u.length===1?h=u[0]:h=new zt,h!==u[0])for(let c=0,d=u.length;c<d;c++)h.add(u[c]);if(r.name&&(h.userData.name=r.name,h.name=o),gr(h,r),r.extensions&&Go(i,h,r),r.matrix!==void 0){const c=new at;c.fromArray(r.matrix),h.applyMatrix4(c)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Yn;i.name&&(r.name=s.createUniqueName(i.name)),gr(r,i),i.extensions&&Go(t,r,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,c=l.length;h<c;h++)r.add(l[h]);const u=h=>{const c=new Map;for(const[d,f]of s.associations)(d instanceof Ys||d instanceof on)&&c.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&c.set(d,f)}),c};return s.associations=u(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Jr[r.path]===Jr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let u;switch(Jr[r.path]){case Jr.weights:u=zl;break;case Jr.rotation:u=Wl;break;case Jr.position:case Jr.scale:u=ql;break;default:switch(i.itemSize){case 1:u=zl;break;case 2:case 3:default:u=ql;break}break}const h=s.interpolation!==void 0?ZV[s.interpolation]:Iu,c=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const p=new u(l[d]+"."+Jr[r.path],t.array,c,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Sg(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Wl?JV:lT;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function az(n,e,t){const i=e.attributes,s=new Qr;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(u[0],u[1],u[2])),a.normalized){const h=Sg(bl[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let u=0,h=r.length;u<h;u++){const c=r[u];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const A=Sg(bl[d.componentType]);l.multiplyScalar(A)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new as;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Mx(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Cg[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return yt.workingColorSpace!==Jn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),gr(n,e),az(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?tz(n,e.targets,t):n})}const lz=Array(1024).fill(0).map((n,e)=>Math.pow(e/255*.9478672986+.0521327014,2.4));class cz extends Io{constructor(e){super(e),this.type=_i}setDataType(e){return this.type=e,this}parse(e,t){const i={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},s=new TextDecoder,r=new DataView(e);let o=0;const a=[];for(;o<r.byteLength;){const h=r.getUint8(o);if(h===255){const c=r.getUint8(o+1);[216,224,225,226].includes(c)?(a.push({sectionType:c,section:[h,c],sectionOffset:o+2}),o+=2):(a[a.length-1].section.push(h,c),o+=2)}else a[a.length-1].section.push(h),o++}let l,u;for(let h=0;h<a.length;h++){const{sectionType:c,section:d,sectionOffset:f}=a[h];if(c!==224){if(c===225)this._parseXMPMetadata(s.decode(new Uint8Array(d)),i);else if(c===226){const p=new DataView(new Uint8Array(d.slice(2)).buffer);if(p.getUint32(2,!1)===1297106432){const g=p.getUint32(6)===1229531648,m=60,E=p.getUint32(m,g),_=p.getUint32(m+4,g),v=p.getUint32(m+16,g),x=p.getUint32(m+20,g)+f+6;l=new Uint8Array(r.buffer,_,E),u=new Uint8Array(r.buffer,x,v)}}}}if(!i.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&u)this._applyGainmapToSDR(i,l,u,(h,c,d)=>{t({width:c,height:d,data:h,format:Cn,type:this.type})},h=>{throw new Error(h)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}load(e,t,i,s){const r=new Df(this.type===_i?new Uint16Array:new Float32Array,0,0,Cn,this.type,H_,gs,gs,On,sO,1,Jn);r.generateMipmaps=!0,r.flipY=!0;const o=new Cl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,a=>{try{this.parse(a,l=>{r.image={data:l.data,width:l.width,height:l.height},r.needsUpdate=!0,t&&t(r,l)})}catch(l){s&&s(l),console.error(l)}},i,s),r}_parseXMPMetadata(e,t){const s=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[r]=s.getElementsByTagName("Container:Directory");if(!r){const[o]=s.getElementsByTagName("rdf:Description");t.version=o.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=o.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(o.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(o.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(o.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(o.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(o.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(o.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(o.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e/255<.04045?e/255*.0773993808:e<1024?lz[~~e]:Math.pow(e/255*.9478672986+.0521327014,2.4)}_applyGainmapToSDR(e,t,i,s,r){const o=a=>new Promise((l,u)=>{const h=document.createElement("img");h.onload=()=>{const c={width:h.naturalWidth,height:h.naturalHeight,source:h};URL.revokeObjectURL(h.src),l(c)},h.onerror=()=>{URL.revokeObjectURL(h.src),u()},h.src=URL.createObjectURL(new Blob([a],{type:"image/jpeg"}))});Promise.all([o(t),o(i)]).then(([a,l])=>{const u=a.width/a.height,h=l.width/l.height;if(u!==h){r("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}const c=document.createElement("canvas"),d=c.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});c.width=a.width,c.height=a.height,d.drawImage(l.source,0,0,l.width,l.height,0,0,a.width,a.height);const f=d.getImageData(0,0,a.width,a.height,{colorSpace:"srgb"});d.drawImage(a.source,0,0);const p=d.getImageData(0,0,a.width,a.height,{colorSpace:"srgb"});let A;this.type===_i?A=new Uint16Array(p.data.length).fill(23544):A=new Float32Array(p.data.length).fill(255);const g=Math.sqrt(Math.pow(1.8,e.hdrCapacityMax)),m=(Math.log2(g)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),E=Math.min(Math.max(m,0),1),_=e.gamma===1;for(let v=0;v<p.data.length;v+=4){const x=v/4%a.width,S=Math.floor(v/4/a.width);for(let w=0;w<3;w++){const T=p.data[v+w],y=(S*a.width+x)*4+w,C=f.data[y]/255,D=_?C:Math.pow(C,1/e.gamma),L=e.gainMapMin*(1-D)+e.gainMapMax*D,P=(T+e.offsetSDR)*(L*E===0?1:Math.pow(2,L*E))-e.offsetHDR,H=Math.min(Math.max(this._srgbToLinear(P),0),65504);A[v+w]=this.type===_i?ZO.toHalfFloat(H):H}}s(A,a.width,a.height)}).catch(()=>{throw new Error("THREE.UltraHDRLoader Error: Could not parse UltraHDR images")})}}class uz{constructor(){this.loaded={},this.textureLoader=new rf,this.gltfLoader=new IV,this.hdrLoader=new cz}init(){this.ktxLoader=new ts().setTranscoderPath("/gl/static/basis/").detectSupport(al)}loadUltraHDR(e){return new Promise(t=>{this.hdrLoader.load(e,function(i){i.mapping=qd,i.needsUpdate=!0,t(i)})})}async loadModel(e){return await this.gltfLoader.loadAsync(e)}async loadTexture(e){if(this.loaded[e])return this.loaded[e];if(e.split(".").pop()==="ktx2")return await this.loadKTX(e);const i=await this.textureLoader.loadAsync(e);return this.loaded[e]=i,i}async loadKTX(e){const t=await this.ktxLoader.loadAsync(e);return this.loaded[e]=t,t}}const Ui=new uz;let Ic=new Wi,Yh=new dn;class hz{constructor(e,t,i,s={}){if(this.mesh=e,this.id=i,this.geometry=t,this.opts=s,this.scale=new V(1,1,1),this.opts.scale!=null&&(this.opts.scale.x!=null?this.setScale(this.opts.scale.x,this.opts.scale.y,this.opts.scale.z):this.setScale(this.opts.scale[0],this.opts.scale[1],this.opts.scale[2])),this.color=new Ke,s.color&&this.setColor(this.opts.color),this.position=new V,this.opts.position!=null?this.opts.position[0]!=null?this.setPosition({x:this.opts.position[0],y:this.opts.position[1],z:this.opts.position[2]}):this.setPosition({x:this.opts.position.x,y:this.opts.position.y,z:this.opts.position.z}):this.setPosition({x:0,y:0,z:0}),this.rotation=[0,0,0,1],this.eulerRotation={x:0,y:0,z:0},this.opts.rotation!=null&&(this.opts.rotation.x!=null&&(this.opts.rotation=[this.opts.rotation.x,this.opts.rotation.y,this.opts.rotation.z]),this.setRotation(this.opts.rotation)),this.rotationY=0,this.opts.rotationY!=null&&this.setRotationY(this.opts.rotationY),this._opacity=1,this.opts.opacity!=null&&(this._opacity=this.opts.opacity),this.opts.plugins&&this.opts.plugins.length>0)for(let r=0;r<this.opts.plugins.length;r++){const o=this.opts.plugins[r];for(let a in o.attributes)this[a]==null&&(this["_"+a]=o.attributes[a].defaultValue,Object.defineProperty(this,a,{get:function(){return this["_"+a]},set:function(l){this["_"+a]=l}}),this.opts[a]!=null?this[a]=this.opts[a]:this[a]=o.attributes[a].defaultValue)}this._visible=!0}set opacity(e){this._opacity=e}get opacity(){return this._opacity}setPosition(e){this.position=e}setRotationY(e){this.rotationY=e}setRotation(e){this.eulerRotation={x:e[0],y:e[1],z:e[2]},Yh.rotation.x=e[0],Yh.rotation.y=e[1],Yh.rotation.z=e[2],Ic.setFromEuler(Yh.rotation),this.rotation=[Ic.x,Ic.y,Ic.z,Ic.w]}setQuaternion(e){this.rotation=[e.x,e.y,e.z,e.w]}setColor(e){typeof e[0]=="number"?(this.color.r=e[0],this.color.g=e[1],this.color.b=e[2]):this.color.set(e)}setScale(e,t,i){this.scale.set(e,t,i)}set visible(e){this._visible=e}get visible(){return this._visible}remove(){this.mesh?.remove(this)}}const bg=function(e,t,i){return e*(1-i)+t*i},wg=function(e,t,i){return e===t?i<=e?0:1:Math.max(0,Math.min(1,(i-e)/(t-e)))};var r0=WI?1:2;const dz=n=>{r0=n,console.log(n)};class fz extends mi{constructor(e,t,i,s){super(e,t,i,s),this.resizeEvent=this.resize.bind(this),$e.on(Ge.RESIZE,this.resizeEvent),this.updateEvent=this.update.bind(this),$e.on(Ge.PRE_UPDATE,this.updateEvent),this.layers.enableAll()}update(){}resize(e,t){this.aspect=e/t,this.updateProjectionMatrix()}}const Dx={type:"change"},o0={type:"start"},cT={type:"end"},jh=new Hu,Rx=new so,pz=Math.cos(70*uI.DEG2RAD),In=new V,yi=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},BA=1e-6;class Bx extends nU{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:El.ROTATE,MIDDLE:El.DOLLY,RIGHT:El.PAN},this.touches={ONE:sl.ROTATE,TWO:sl.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Wi,this._lastTargetPosition=new V,this._quat=new Wi().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Iy,this._sphericalDelta=new Iy,this._scale=1,this._panOffset=new V,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new V,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this.tempTheta=null,this.tempRadius=null,this.tempPhi=null,this._controlActive=!1,this._onPointerMove=mz.bind(this),this._onPointerDown=Az.bind(this),this._onPointerUp=gz.bind(this),this._onContextMenu=Sz.bind(this),this._onMouseWheel=vz.bind(this),this._onKeyDown=yz.bind(this),this._onTouchStart=xz.bind(this),this._onTouchMove=Cz.bind(this),this._onMouseDown=_z.bind(this),this._onMouseMove=Ez.bind(this),this._interceptControlDown=bz.bind(this),this._interceptControlUp=wz.bind(this),this.domElement!==null&&this.connect(),this.setPolarAngle=function(i){this.tempPhi=i},this.setAzimuthAngle=function(i){this.tempTheta=i},this.setRadius=function(i){this.tempRadius=i},this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getRadius(){return this._spherical.radius||1}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dx),this.update(),this.state=Pt.NONE}update(e=null){const t=this.object.position;In.copy(t).sub(this.target),In.applyQuaternion(this._quat),this._spherical.setFromVector3(In),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=yi:i>Math.PI&&(i-=yi),s<-Math.PI?s+=yi:s>Math.PI&&(s-=yi),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this.tempTheta!=null&&(this._spherical.theta=this.tempTheta,this.tempTheta=null),this.tempPhi!=null&&(this._spherical.phi=this.tempPhi,this.tempPhi=null),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.tempRadius!=null&&(this._spherical.radius=this.tempRadius,this.tempRadius=null),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(In.setFromSpherical(this._spherical),In.applyQuaternion(this._quatInverse),t.copy(this.target).add(In),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=In.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new V(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=In.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(jh.origin.copy(this.object.position),jh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jh.direction))<pz?this.object.lookAt(this.target):(Rx.setFromNormalAndCoplanarPoint(this.object.up,this.target),jh.intersectPlane(Rx,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>BA||8*(1-this._lastQuaternion.dot(this.object.quaternion))>BA||this._lastTargetPosition.distanceToSquared(this.target)>BA?(this.dispatchEvent(Dx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yi/60*this.autoRotateSpeed*e:yi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){const t=this._spherical.phi+this._sphericalDelta.phi,i=(t-this.minPolarAngle)/(Math.PI/6),s=(this.maxPolarAngle-t)/(Math.PI/6);let r=1;e>0&&i<1?r=Math.max(.1,i):e<0&&s<1&&(r=Math.max(.1,s)),r=Math.pow(r,1.5),this._sphericalDelta.phi-=e*r}_panLeft(e,t){In.setFromMatrixColumn(t,0),In.multiplyScalar(-e),this._panOffset.add(In)}_panUp(e,t){this.screenSpacePanning===!0?In.setFromMatrixColumn(t,1):(In.setFromMatrixColumn(t,0),In.crossVectors(this.object.up,In)),In.multiplyScalar(e),this._panOffset.add(In)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;In.copy(s).sub(this.target);let r=In.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yi*this._rotateDelta.x/t.clientHeight),this._rotateUp(yi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yi*this._rotateDelta.x/t.clientHeight),this._rotateUp(yi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Az(n){this.enabled!==!1&&(this._pointers.length===0&&(n.pointerId&&this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function mz(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gz(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cT),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _z(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case El.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Pt.DOLLY;break;case El.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}break;case El.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(o0)}function Ez(n){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function vz(n){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(n.preventDefault(),this.dispatchEvent(o0),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(cT))}function yz(n){this.enabled!==!1&&this._handleKeyDown(n)}function xz(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case sl.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Pt.TOUCH_ROTATE;break;case sl.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case sl.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Pt.TOUCH_DOLLY_PAN;break;case sl.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(o0)}function Cz(n){switch(this._trackPointer(n),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Pt.NONE}}function Sz(n){this.enabled!==!1&&n.preventDefault()}function bz(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wz(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Iz{constructor(){this.mouse={value:new ze(0,0)},this.timer={value:0},this.cloudTimer={value:0},this.DPI={value:Hs},this.resY={value:0},this.aspect={value:1},this.resolution={value:new ze},this.maxBrowsingCloud={value:1},this.scrollProgress={value:0},this.sceneOpacity={value:1},$e.on(Ge.RESIZE,(e,t)=>{this.aspect.value=e/t,this.DPI.value=Hs,this.resolution.value.x=e*Hs,this.resolution.value.y=t*Hs}),$e.on(Ge.PRE_UPDATE,e=>{this.scrollProgress.value=wg(Fs,Yo,Gn.current.position.z),this.maxBrowsingCloud.value=1-wg(ol-100,ol,Gn.current.position.z),this.timer.value+=e,this.cloudTimer.value-=e*1.5})}}const Yl=new Iz,Lx=function(n,e){return Math.abs(e-n)>Math.PI&&(e>0?e=e-2*Math.PI:e=e+2*Math.PI),e};function Nx(n){return n*(Math.PI/180)}function Px(n){return n*180/Math.PI}const rt={position:{x:-.210000000000001,y:-9.5,z:8.21,rotation:-.491592653589793},scalarScale:7.66,hotspots:[{position:{x:.05,y:-.3}},{position:{x:-1.06,y:-.33}}],debughostspot:!1};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class js{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),js.nextNameID=js.nextNameID||0,this.$name.id=`lil-gui-name-${++js.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Tz extends js{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ig(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Mz={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Ig,toHexString:Ig},Du={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Dz={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Du.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Du.toHexString(s)}},Rz={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Du.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Du.toHexString(s)}},Bz=[Mz,Du,Dz,Rz];function Lz(n){return Bz.find(e=>e.match(n))}class Nz extends js{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Lz(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ig(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class LA extends js{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Pz extends js{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},i=E=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+E),this.$input.value=this.getValue())},s=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),i(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),i(this._step*this._arrowKeyMultiplier(E)*-1))},r=E=>{this._inputFocused&&(E.preventDefault(),i(this._step*this._normalizeMouseWheel(E)))};let o=!1,a,l,u,h,c;const d=5,f=E=>{a=E.clientX,l=u=E.clientY,o=!0,h=this.getValue(),c=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",A)},p=E=>{if(o){const _=E.clientX-a,v=E.clientY-l;Math.abs(v)>d?(E.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&A()}if(!o){const _=E.clientY-u;c-=_*this._step*this._arrowKeyMultiplier(E),h+c>this._max?c=this._max-h:h+c<this._min&&(c=this._min-h),this._snapClampSetValue(h+c)}u=E.clientY},A=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",A)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,E,_,v,x)=>(m-E)/(_-E)*(x-v)+v,t=m=>{const E=this.$slider.getBoundingClientRect();let _=e(m,E.left,E.right,this._min,this._max);this._snapClampSetValue(_)},i=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=m=>{t(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const u=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):u(m),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",d))},c=m=>{if(o){const E=m.touches[0].clientX-a,_=m.touches[0].clientY-l;Math.abs(E)>Math.abs(_)?u(m):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),p=400;let A;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const _=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(A),A=setTimeout(f,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Fz extends js{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class kz extends js{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Oz=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Uz(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Fx=!1,kx=class uT{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Fx&&a&&(Uz(Oz),Fx=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new Fz(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new Pz(this,e,t,i,s,r);case"boolean":return new Tz(this,e,t);case"string":return new kz(this,e,t);case"function":return new LA(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Nz(this,e,t,i)}addFolder(e){const t=new uT({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof LA||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof LA)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},un,Ox;Qt?(un=new kx,console.log(un.domElement),un.domElement.style.left="300px",un.__folders={},Ox=new kx,un.__folders.GUI2=Ox,un.__folders.environement=un.addFolder("Environement")):un="";const Ux=new zt,ja={mouseForce:{x:.75,y:.6},reactiveness:3};class NA extends fz{constructor(e=1,t=1,i=.1,s=2e3,r={x:0,y:20,z:0},o=!1){if(super(e,t,i,s),this.transitionPositionTween=null,this.transitionLookAtTween=null,this.mouse={x:0,y:0},this.lookAtVec=new V(0,0,0),this.position.x=r.x,this.position.z=r.z,this.position.y=r.y,this.currentScroll=0,this.overriden=!1,this.currentPosition=new V,this.currentLookAt=new V,o==!1&&(Qt&&_x?this.controls=new Bx(this,Et):($e.on(Ge.MOUSE_MOVE,this.onMouseMove.bind(this)),$e.on(Ge.MOUSE_DOWN,this.onMouseDown.bind(this))),Qt)){const a=un.addFolder("MouseMove");a.add(ja.mouseForce,"x").min(-2).max(2).step(.01).name("forceX"),a.add(ja.mouseForce,"y").min(-2).max(2).step(.01).name("forceY"),a.add(ja,"reactiveness").min(0).max(10).step(.01).name("reactiveness")}}eventListeners=[];on(e,t){this.eventListeners.push({eventName:e,cb:t})}emit(e){this.eventListeners.forEach(t=>{t.eventName==e&&t.cb()})}onMouseMove(e){this.originalMouseEvent=e.rawEvent,isNaN(e.normalized.x)!=!0&&(this.mouse=e.normalized)}onMouseDown(e){this.originalMouseEvent=e.rawEvent}forceX=.6;forceY=.6;tempLookAt=new V;canMouseMove=!0;scroll(e){this.currentScroll=e}mouseEffect=0;update(e){const t=Math.min(e,.2);if(this.zoomControls&&this.zoomControls.enableDamping==!0&&this.zoomControls.update(),this.overriden==!1&&(cn==ot.CITY?this.mouseEffect+=t*3:this.mouseEffect-=t*3,this.mouseEffect=Math.min(1,Math.max(0,this.mouseEffect)),this.currentPosition.z=bg(Fs,Yo,this.currentScroll),this.currentPosition.y=bg(Sc,yg,Yl.maxBrowsingCloud.value),_x!=!0)){const i=Math.min(t*ja.reactiveness,.5);this.position.x=((1-i)*this.position.x+i*this.mouse.x*ja.mouseForce.x)*this.mouseEffect,this.position.y=((1-i)*this.position.y+i*this.mouse.y*ja.mouseForce.y)*this.mouseEffect,this.position.z=this.currentPosition.z,this.tempLookAt.set(0,0,this.position.z+40),this.lookAt(this.tempLookAt),this.currentLookAt.copy(this.tempLookAt)}}async setState(e,t={}){if(cn==e&&cn==ot.CITY){this.transitionToZoomTimelines&&this.transitionToZoomTimelines.reverse();return}var i=[];switch((cn==ot.ZOOM&&e==ot.CITY||cn==ot.INTERIOR&&e==ot.CITY)&&(this.zoomControls&&(this.zoomControls.enableDamping=!1,this.zoomControls.enabled=!1),await this.transitionToCity(t.force)),this.overriden=!1,this.zoomControls&&this.zoomControls.dispose(),e){case ot.CLOUDS:var s={x:0,y:yg,z:Fs};this.position.copy(s),this.currentPosition.copy(this.position),this.currentScroll=0;break;case ot.CITY:if(cn==ot.CLOUDS&&Yl.scrollProgress.value>.7)this.overriden=!0,await this.transitionToCity(),this.currentScroll=1,this.overriden=!1;else{var s={x:0,y:Sc,z:Yo};this.position.copy(s),this.currentPosition.copy(this.position),this.currentScroll=1}break;case ot.ZOOM:cn==ot.CITY&&(this.overriden=!0,await this.transitionToZoom(),this.zoomControls=new Bx(this,Et),this.zoomControls.enabled=!1,this.zoomControls.target.copy(this.currentLookAt),this.zoomControls.enabled=!0,this.zoomControls.enableDamping=!0,this.zoomControls.rotateSpeed=r0,this.zoomControls.minPolarAngle=Math.PI*.62,this.zoomControls.maxPolarAngle=Math.PI*.75,this.zoomControls.enableZoom=!1,this.zoomControls.update(),this.storeControlsCoordinates(this.zoomControls),this.zoomControls._onPointerDown(this.originalMouseEvent),this.originalMouseEvent?.constructor?.name=="Touch"?this.zoomControls._onTouchStart(this.originalMouseEvent):this.zoomControls._onMouseDown(this.originalMouseEvent),this.zoomControls.update());break;case ot.INTERIOR:cn==ot.CITY&&(this.overriden=!0,await this.transitionToInterior());break}return Promise.all(i).then(async r=>r.flat())}tempVec3=new V;transitionToCity(e=!1){return new Promise(t=>{if(this.killTransition(),cn==ot.ZOOM){this.cityTimeline=Ps.timeline();let r={theta:this.zoomControls.getAzimuthalAngle(),phi:this.zoomControls.getPolarAngle(),radius:this.zoomControls.getRadius()};const o=Lx(r.theta,Nx(Px(this.tempTheta))),a=Lx(r.phi,Nx(Px(this.tempPhi))),l=Math.abs(r.theta-o),u=Math.abs(r.phi-a),h=Math.min(l+u,1);this.cityTimeline.to(r,{theta:o,phi:a,radius:this.tempRadius,duration:h,ease:"power3.inOut",onUpdate:()=>{this.zoomControls.setAzimuthAngle(r.theta),this.zoomControls.setPolarAngle(r.phi),this.zoomControls.setRadius(r.radius),this.zoomControls.update()},onComplete:()=>{this.currentLookAt.copy(this.zoomControls.target),this.currentPosition.copy(this.position),this.emit(Ge.ZOOM_POSITION_RESET)}});var i={x:0,y:Sc,z:Yo},s={x:0,y:0,z:Yo+40};this.cityTimeline.to(this.currentPosition,{x:i.x,y:i.y,z:i.z,duration:1,ease:"power3.inOut",onUpdate:()=>{this.position.copy(this.currentPosition)},onComplete:()=>{t()}},"parallel"),this.cityTimeline.to(this.currentLookAt,{x:s.x,y:s.y,z:s.z,duration:1,ease:"power3.inOut",onUpdate:()=>{this.lookAt(this.currentLookAt)}},"parallel"),this.cityTimeline.play()}if(cn==ot.CLOUDS){var i={x:0,y:Sc,z:Yo};this.transitionPositionTween=Ps.to(this.position,{x:i.x,y:i.y,z:i.z,duration:1,ease:"power3.inOut",onUpdate:()=>{this.currentPosition.copy(this.position),this.tempLookAt.set(0,0,this.position.z+40),this.lookAt(this.tempLookAt),this.currentLookAt.copy(this.tempLookAt)},onComplete:()=>{t()}})}if(cn==ot.INTERIOR){var i={x:0,y:Sc,z:Yo},s={x:0,y:i.y,z:i.z+40};if(e==!0&&(this.position.copy(i),this.lookAt(s),this.currentLookAt.copy(s),this.currentPosition.copy(i),t()),e==!1){const l="power3.inOut";this.transitionPositionTween=Ps.to(this.position,{x:i.x,y:i.y,z:i.z,duration:1,ease:l,onUpdate:()=>{this.currentPosition.copy(this.position)},onComplete:()=>{t()}}),this.transitionLookAtTween=Ps.to(this.currentLookAt,{x:s.x,y:s.y,z:s.z,duration:1,ease:l,onUpdate:()=>{this.lookAt(this.currentLookAt)}})}}})}async transitionToZoom(){return new Promise(e=>{this.killTransition();const i=.5;var s={x:0,y:(rt.position.y+12-8)*i,z:(rt.position.z-10)*i};this.transitionToZoomTimelines=Ps.timeline(),this.transitionToZoomTimelines.to(this.position,{x:s.x,y:s.y,z:s.z,duration:1,ease:"power2.inOut",onComplete:()=>{this.transitionToZoomTimelines=null,e()},onReverseComplete:()=>{this.overriden=!1,this.transitionToZoomTimelines=null}},"parallel2"),this.transitionToZoomTimelines.to(this.currentLookAt,{x:0,y:rt.position.y+12+1,z:rt.position.z,duration:1,ease:"power2.inOut",onUpdate:()=>{this.lookAt(this.currentLookAt)}},"parallel2")})}transitionToInterior(){return new Promise(e=>{this.killTransition();const i=1.5;var s={x:0,y:rt.position.y+8.5,z:rt.position.z-4};this.transitionPositionTween=Ps.to(this.position,{x:s.x,y:s.y,z:s.z,duration:i,ease:"power2.inOut",onComplete:()=>{e()}}),this.transitionLookAtTween=Ps.to(this.currentLookAt,{x:0,y:rt.position.y+8.5+5,z:rt.position.z,duration:i,ease:"power2.inOut",onUpdate:()=>{this.tempLookAt.copy(this.currentLookAt),this.lookAt(this.currentLookAt)}})})}killTransition(){this.transitionPositionTween!=null&&(this.transitionPositionTween.kill(),this.transitionPositionTween=null),this.transitionLookAtTween!=null&&(this.transitionLookAtTween.kill(),this.transitionLookAtTween=null),this.transitionPolarTween!=null&&(this.transitionPolarTween.kill(),this.transitionPolarTween=null),this.cityTimeline!=null&&(this.cityTimeline.kill(),this.cityTimeline=null),this.transitionToZoomTimelines&&(this.transitionToZoomTimelines.kill(),this.transitionToZoomTimelines=null)}getWorldDirection(){return Ux.position.copy(this.currentPosition),Ux.getWorldDirection(this.tempVec3),this.tempVec3}storeControlsCoordinates(e){const t=e.enabled;e.enabled=!0,e.update(),this.tempTheta=e.getAzimuthalAngle(),this.tempRadius=e.getRadius(),this.tempPhi=e.getPolarAngle(),e.enabled=t}activate(){}desactivate(){}}class Qz extends oy{constructor(){super(),Qt&&(window.scene=this),this.matrixAutoUpdate=!1,this.matrixWorldAutoUpdate=!0,this.backgroundScene=new oy}}const xi=new Qz;class Hz{constructor(){var e={x:0,y:yg,z:Fs};Qt?this.cameraPool={main:new NA(45,1,.1,yA,{x:0,y:0,z:-20})}:this.cameraPool={main:new NA(45,1,.1,yA,e)},this.backgroundCamera=new NA(120,1,.1,yA,{x:0,y:0,z:-20},!0),this.cameraPool.main.lookAt(new V(0,0,0)),this.camera=null,this.current=this.cameraPool.main,this.frustum=new Rf,this.projScreenMatrix=new at,this.addEvents(),Qt&&(un.__folders.environement.add(this.backgroundCamera,"fov").step(1).min(10).max(120).name("Background FOV").onChange(()=>{this.backgroundCamera.updateProjectionMatrix()}),un.add(this,"_viewOffset").step(1).min(-1e3).max(1e3).name("View Offset"))}addEvents(){$e.on(Ge.PRE_UPDATE,this.update.bind(this))}set current(e){this._current?.desactive&&(this._current.desactive(),xi.remove(this._current)),this._current=e,this._current.activate&&this._current.activate(),xi.add(this._current)}update(e){this._lastViewOffset!=this._viewOffset&&(this.current.setViewOffset(po.w,po.h,this._viewOffset,0,po.w,po.h),this._lastViewOffset=this._viewOffset);const t=bg(cV,uV,Yl.scrollProgress.value);this.current.fov=t,this.current.updateProjectionMatrix(),this.updateFrustum(),this.backgroundCamera.position.copy(this.current.position),this.backgroundCamera.quaternion.copy(this.current.quaternion)}updateFrustum(e=null){const t=e||this.current;this.projScreenMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix)}get current(){return this._current}_viewOffset=0;_lastViewOffset=0;set viewoffset(e){this._viewOffset=e}get viewoffset(){return this._viewOffset}}const Gn=new Hz;class Qx extends dn{constructor(e,t,i){if(super(e,t),this.baseGeometry=e,i.type!=null)this.instanceType=i.type;else debugger;this.matrixAutoUpdate=!1,this.matrixWorldAutoUpdate=!1,this.frustumCulled=!1,this.count=-1,this.instances=[],this.instancesCount=0,this.usedIndexes=new Hx(100),this.nonUsedIndexes=new Hx(100),this.wrapperFlagUpdates=[],this.addEvents()}sort(e,t=!1){if(this.instances.length==0){this.geometry.instanceCount=0,this.visible=!1;return}if(this.geometry.useUniqueFrustumTestFunction!=null){let i=e&&e.frustum?e.frustum:Gn.frustum;if(this.geometry.useUniqueFrustumTestFunction(i)==!1){this.geometry.instanceCount=0,this.visible=!1;return}}if(this.geometry.copyBuffer){if(this.geometry.bufferVersion!=this.geometry.copyBuffer.bufferVersion&&this.geometry.updateCopyBuffers(this.geometry.copyBuffer),this.geometry.instanceCount=this.geometry.copyBuffer.instanceCount,this.geometry.projMatrix=this.geometry.copyBuffer.projMatrix,this.geometry._wMatrix=this.geometry.copyBuffer._wMatrix,this.geometry.computeClosestDistance(e),this.geometry._lods){let i=1;for(;i<this.geometry._lods.length;)this.geometry._lods[i].instanceCount=this.geometry.copyBuffer._lods[i].instanceCount,this.geometry._lods[i]._closestDistance=this.geometry.copyBuffer._lods[i]._closestDistance,i++}}else this.geometry.useSorting==!0?(this.geometry.sort(this.instances,e),this.geometry.computeClosestDistance(e)):this.instancesCount!=this.instances.length&&(this.geometry.assemble(this.instances),this.instancesCount=this.instances.length);if(this.geometry.useSorting==!1){let i=0;for(;i<this.wrapperFlagUpdates.length;)this.geometry.updateNonSorted(this.wrapperFlagUpdates[i]),i++;this.wrapperFlagUpdates=[],this.geometry.rangeNonSorted(this.instances)}if(this.geometry.instanceCount==0){if(this.visible=!1,this.geometry._lods){let i=0;for(;i<this.geometry._lods.length;)this.visible=this.visible||this.geometry._lods[i].instanceCount>0,i++}}else this.visible=!0,this._closestDistance=this.geometry._closestDistance}add(e){if(this.geometry==null)return;this.count++;let t=this.count;this.geometry.useSorting==!1&&(this.nonUsedIndexes.length>0&&(t=this.nonUsedIndexes.shift()),this.usedIndexes.push(t));const i=new hz(this,this.geometry,t,e);return this.instances.push(i),this.geometry.useSorting==!1&&this.wrapperFlagUpdates.push(i),i}wrapperUpdate(e){this.wrapperFlagUpdates.push(e)}remove(e){if(this.geometry==null)return;let t=-1;if(this.geometry.useSorting==!1){const i=this.usedIndexes.indexOf(e.id);this.usedIndexes.splice(i,1),this.nonUsedIndexes.push(e.id)}else if(t=this.instances.indexOf(e),t==-1)return;this.instances.splice(t,1)}_update(e,t,i=!1){let s=this;for(;s.parent!==null;)s=s.parent;s!=null&&s==e&&this.sort(t,i)}addEvents(){this.updateEvent==null&&(this.updateEvent=this._update.bind(this),$e.on(Ge.PRE_RENDER,this.updateEvent))}dispose(){this.removeEvents(),super.dispose()}removeEvents(){this.updateEvent!=null&&($e.off(Ge.PRE_RENDER,this.updateEvent),this.updateEvent=null)}reset(){this.dispose()}}class Hx{growCapacity=100;constructor(e=100){return this.buffer=new Int32Array(e),this.length=0,new Proxy(this,{get(t,i){if(typeof i=="string"){const s=parseInt(i,10);if(typeof s=="number"&&s>=0&&s<t.length)return t.buffer[s]}return t[i]},set(t,i,s){if(typeof i=="string"){const r=parseInt(i,10);if(typeof r=="number"&&r>=0)return r>=t.buffer.length&&t.resize(r+1),t.buffer[r]=s,t.length=Math.max(t.length,r+1),!0}return t[i]=s,!0}})}resize(e){if(e>this.buffer.length){const t=Math.ceil(e/this.growCapacity)*this.growCapacity,i=new Int32Array(t);i.set(this.buffer),this.buffer=i}}push(...e){const t=this.length+e.length;return this.resize(t),this.buffer.set(e,this.length),this.length=t,this.length}toArray(){return this.buffer.slice(0,this.length)}splice(e,t,...i){e=Math.max(0,e<0?this.length+e:e),t=Math.min(Math.max(0,t),this.length-e);const s=this.buffer.slice(e,e+t),r=this.length-t+i.length;return i.length>t&&(this.resize(r),this.buffer.copyWithin(e+i.length,e+t,this.length)),this.buffer.set(i,e),t>i.length&&this.buffer.copyWithin(e+i.length,e+t,this.length),this.length=r,s}shift(){if(this.length===0)return;const e=this.buffer[0];return this.splice(0,1),e}indexOf(e,t=0){t=Math.max(0,t<0?this.length+t:t);for(let i=t;i<this.length;i++)if(this.buffer[i]===e)return i;return-1}getCapacity(){return this.buffer.length}}const hT=3,Gz=32,dT=1<<hT,la=1<<dT,PA=la-1,Hf=Gz/dT,Tg=new Array(Hf),Vz=new ArrayBuffer((Hf+1)*la*4);let Gx=0;for(let n=0;n<Hf+1;n++)Tg[n]=new Uint32Array(Vz,Gx,la),Gx+=la*4;const zz=n=>n,Wz=(n,e)=>{const t=n.length,i=e||{},s=i.aux||new n.constructor(t),r=i.get||zz,o=[n,s];let a,l,u;i.reversed?(a=(d,f)=>d<f,l=d=>{for(let f=la-2;f>=0;f--)d[f]+=d[f+1]},u=(d,f,p)=>{let A=0;for(let g=PA;g>=0;g--){const m=d[g],E=m-A;E!=0&&(E>32?c(f+1,p+A,E):h(f+1,p+A,E),A=m)}}):(a=(d,f)=>d>f,l=d=>{for(let f=1;f<la;f++)d[f]+=d[f-1]},u=(d,f,p)=>{let A=0;for(let g=0;g<la;g++){const m=d[g],E=m-A;E!=0&&(E>32?c(f+1,p+A,E):h(f+1,p+A,E),A=m)}});const h=(d,f,p)=>{const A=o[d&1],g=o[d+1&1];for(let m=f+1;m<f+p;m++){const E=A[m],_=r(E)>>>0;let v=m;for(;v>f&&a(r(A[v-1])>>>0,_);)A[v]=A[--v];A[v]=E}if((d&1)==1)for(let m=f;m<f+p;m++)g[m]=A[m]},c=(d,f,p)=>{const A=o[d&1],g=o[d+1&1],m=3-d<<hT,E=f+p,_=Tg[d],v=Tg[d+1];v.fill(0);for(let x=f;x<E;x++)v[r(A[x])>>>m&PA]++;l(v),_.set(v);for(let x=E-1;x>=f;x--)g[f+--v[r(A[x])>>>m&PA]]=A[x];d!=Hf-1&&u(_,d,f)};c(0,0,t)};let Vx=new V;const zx=1e6,qz=0,Wx=50,qx=new Wi,Xh=new Ct,Yz=new V(1,1,1),Yx=new V;class jx extends wy{constructor(e,t={}){super(),this.opts=t,this.projMatrix=new at,this.isLOD=e.lod!=null,this.instanceCount=0,this.isLOD==!0&&(this._lods=[]),this.isStatic=t.isStatic!=null?t.isStatic:!1,t.boundingSphere==null&&e.computeBoundingSphere(),t.name&&(this.name=t.name),t.vrmName&&(this.vrmName=t.vrmName),this.name=t.name?t.name:"instanced",this.sphere=t.boundingSphere?t.boundingSphere:e.boundingSphere,this.transparencySorting=t.transparencySorting==!0,this.useUniqueFrustumTestFunction=null,this.tempCenter=this.sphere.center,this.tempRadius=this.sphere.radius,this.useNormal=t.useNormal?t.useNormal:!1,this.useGeometryColor=t.useGeometryColor?t.useGeometryColor:!1,this.useInstancedColor=t.color!=null?t.color:!1,this.useFrustumCulling=t.useFrustumCulling!=null?t.useFrustumCulling:!0,this.useSorting=t.useSorting!=null?t.useSorting:!0,this.useSkin=t.useSkin?t.useSkin:!1,this.vrmScale=t.vrmScale?t.vrmScale:!1,this.sorter=t.sorter?t.sorter:null,this.max=t.max??qz,this.previousMax=this.max,this.tempSphere=new as,this.INSTANCED=!0,this.copyBuffer=t.copyBuffer!=null?t.copyBuffer:null,this.scaleRatio=t.scaleRatio!=null?t.scaleRatio:1,this.initializeBaseGeometry(e),this.opts=t,this._closestDistance=zx,this._closestPosition=new V,this.baseGeometry=e,this.computeBoundingSphere(),this.originalSphere=new as().copy(this.boundingSphere),this._closestInstance=new V,this._closestRotation=new Wi,this._closestScale=new V,this._latestCamera=null,this._wMatrix=new at}oldLength=0;setUniqueFrustumTest(e){e!=null&&(this.useFrustumCulling=!0),this.useUniqueFrustumTestFunction=e}sort(e,t=null,i=!1){this.grow(e.length),this.oldLength=e.length;let s=zx;this.visibleWrappers=[];let r=t&&t.frustum?t.frustum:Gn.frustum,o=t?t.position:Gn.current.position;if(this.sorter!=null){this.sorter.sort(this,e,r,o);return}this.instanceCount=0,this.isLOD&&this._lods.forEach(f=>f.instanceCount=0),this.vrmScale==!0&&qx.identity();let a=!1;this.useUniqueFrustumTestFunction!=null&&(a=this.useUniqueFrustumTestFunction(r)),this.radixminZ=1/0,this.radixmaxZ=-1/0;let l=0;for(;l<e.length;){let f=!1;const p=e[l];if(p.updateFromSource!=null&&p.updateFromSource(),this.useFrustumCulling==!1||a==!0)f=!0;else if(p.visible==!1||p.opacity==0){l++;continue}if(al.shadowMap.autoUpdate||i||this.useFrustumCulling==!1){if(p.dynamicShadow==!0){l++;continue}f=!0}else{Vx.copy(p.position);let A=Math.max(p.scale.x*this.scaleRatio,p.scale.y,p.scale.z);p.dynamicShadow&&(A*=2),p.customFrustumTest!=null?f=p.customFrustumTest(r):(this.sphere.radius=Math.abs(this.tempRadius*A),this.tempSphere.copy(this.sphere),this.tempSphere.center.add(Vx),f=r.intersectsSphere(this.tempSphere))}if(f=!0,f)if(p._distance=p.position.z,p._distance<s&&(this.boundingSphere.center.copy(this.originalSphere.center).add(p.position),Yx.copy(p.position)),s=Math.min(s,p._distance),this.visibleWrappers.push(p),this.transparencySorting==!0)this.prepareForRadixSorting(p,!0);else{var u=this;this.updateAttribute(u,p,u.instanceCount),u.instanceCount++}l++}if(this.transparencySorting&&this.visibleWrappers.length>0){this.visibleWrappers.length>1&&((this._radixOptions==null||this.previousMax!=this.max)&&(this._radixOptions={get:f=>f.z,aux:new Array(this.max),reversed:!0}),this.previousMax=this.max,this.computeRadix(this.visibleWrappers),Wz(this.visibleWrappers,this._radixOptions));for(var h=0;h<this.visibleWrappers.length;){const f=this.visibleWrappers[h];var u=this;this.updateAttribute(u,f,u.instanceCount),u.instanceCount++,h++}}let c=0,d=this.isLOD?this._lods.length:1;for(;c<d;){const f=this.isLOD?this._lods[c]:this;if(f.instanceCount>0){f.attributes.offset.updateRanges=[{start:0,count:f.instanceCount*f.attributes.offset.itemSize}],f.attributes.offset.needsUpdate=!0;for(const p in this.items)f.attributes[p].updateRanges=[{start:0,count:f.instanceCount*f.attributes[p].itemSize}],f.attributes[p].needsUpdate=!0}c++}this.copyBuffer==null&&(t.projScreenMatrix!=null?this.projMatrix.copy(t.projScreenMatrix):this.projMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._wMatrix.compose(Yx,qx,Yz),this.computeClosestDistance(t))}updateNonSorted(e){this.updateAttribute(this,e,e.id)}rangeNonSorted(e){if(this.instanceCount=e.length,this.instanceCount>0){this.attributes.offset._updateRange.count=this.instanceCount*this.attributes.offset.itemSize,this.attributes.offset.needsUpdate=!0;for(const t in this.items)this.attributes[t]._updateRange.count=this.instanceCount*this.attributes[t].itemSize,this.attributes[t].needsUpdate=!0}}updateAttribute(e,t,i){const s=i*3,r=i*4;if(e.attributes.offset.array[s]=t.position.x,e.attributes.offset.array[s+1]=t.position.y,e.attributes.offset.array[s+2]=t.position.z,this.vrmScale==!0){const a=t.vrmScale;e.attributes.scale.array[s]=a,e.attributes.scale.array[s+1]=a,e.attributes.scale.array[s+2]=a}else e.attributes.scale.array[s]=t.scale.x*this.scaleRatio,e.attributes.scale.array[s+1]=t.scale.y,e.attributes.scale.array[s+2]=t.scale.z;if(this.opts.rotationY==!0&&(e.attributes.rotationY.array[i]=t.rotationY),this.opts.rotation==!0&&(e.attributes.rotation.array[r]=t.rotation[0],e.attributes.rotation.array[r+1]=t.rotation[1],e.attributes.rotation.array[r+2]=t.rotation[2],e.attributes.rotation.array[r+3]=t.rotation[3]),this.useInstancedColor&&(e.attributes.icolor.array[s]=t.color.r,e.attributes.icolor.array[s+1]=t.color.g,e.attributes.icolor.array[s+2]=t.color.b),this.opts.atlas&&(e.attributes.atlas.array[r]=t.atlas.x,e.attributes.atlas.array[r+1]=t.atlas.y,e.attributes.atlas.array[r+2]=t.atlas.z,e.attributes.atlas.array[r+3]=t.atlas.w),this.opts.animations&&(e.attributes.animations.array[r]=t.animations[0],e.attributes.animations.array[r+1]=t.animations[1],e.attributes.animations.array[r+2]=t.animations[2],e.attributes.animations.array[r+3]=t.animations[3]),this.opts.randomID&&(e.attributes.randomID.array[i]=t.randomID),this.opts.opacity&&(e.attributes.aOpacity.array[i]=t.opacity),this.opts.plugins&&this.opts.plugins.length>0){let a=0;for(;a<this.opts.plugins.length;){const l=this.opts.plugins[a];if(l.attributes){var o=Object.keys(l.attributes);let u=0;for(;u<o.length;){const h=o[u],c=l.attributes[h];if(c.length==1)e.attributes[h].array[i]=t[h];else{let d=0;for(;d<c.length;)t[h]!=null?e.attributes[h].array[i*c.length+d]=t[h][d]:e.attributes[h].array[i*c.length+d]=c.defaultValue[d],d++}u++}}a++}}}computeClosestDistance(e){Xh.copy(this.originalSphere.center),Xh.applyMatrix4(this._wMatrix),Xh.applyMatrix4(this.projMatrix),this._closestDistance=Xh.z}closestMultiple(e){const t=e%Wx,i=Wx-t;return e+i}updateCopyBuffers(){if(this.copyBuffer!=null&&this.bufferVersion!=this.copyBuffer.bufferVersion){this.attributes.offset=this.copyBuffer.attributes.offset;for(const e in this.items)this.attributes[e]=this.copyBuffer.attributes[e];this.bufferVersion=this.copyBuffer.bufferVersion}}grow(e){if(this.copyBuffer==null){if(e>this.max){this.max=this.closestMultiple(e);let i=0,s=this.isLOD?this._lods.length:1;for(;i<s;){const r=this.isLOD?this._lods[i]:this;for(const o in r.attributes){var t=r.attributes[o];if(t instanceof Zo){const a=new t.array.constructor(this.max*t.itemSize);a.set(t.array);const l=new Zo(a,t.itemSize,t.normalized);l.setUsage(Np),r.attributes[o]=l,r.attributes[o].needsUpdate=!0,t=null}}i++}this.bufferVersion==null&&(this.bufferVersion=0),this.bufferVersion++}}}assemble(e){let t=e.length;if(t>this.max){this.grow(t);let i=0;for(;i<t;){const s=e[i];this.updateAttribute(this,s,s.id),i++}}}initializeBaseGeometry(e){this.opts.boundingSphere==null&&e.computeBoundingSphere(),this.sphere=this.opts.boundingSphere?this.opts.boundingSphere:e.boundingSphere,this.tempRadius=this.sphere.radius;let t=0;const i=this.isLOD?e.lod.length+1:1;for(;t<i;){let r=this.isLOD?t==0?this:new wy:this,o=this.isLOD?t==0?e:e.lod[t-1]:e;if(o.index&&r.setIndex(new jt(o.index.array,1)),o.attributes.position&&r.setAttribute("position",new jt(o.attributes.position.array,3)),e.attributes.color&&this.useGeometryColor&&r.setAttribute("color",new jt(e.attributes.color.array,3)),o.attributes.normal&&this.useNormal&&r.setAttribute("normal",new jt(o.attributes.normal.array,3)),o.attributes.uv&&r.setAttribute("uv",new jt(o.attributes.uv.array,2)),o.attributes.uv1&&r.setAttribute("uv1",new jt(o.attributes.uv1.array,2)),o.customAttributes&&o.customAttributes.length>0&&o.customAttributes.forEach(a=>{r.setAttribute(a.name,new jt(a.content.array,a.content.itemSize))}),o.attributes.skinWeight&&this.useSkin==!0&&(r.attributes.skinWeight=o.attributes.skinWeight),o.attributes.skinIndex&&this.useSkin==!0&&(r.attributes.skinIndex=o.attributes.skinIndex),r.items={},this.useInstancedColor&&(r.items.icolor={name:"icolor",array:[],length:3}),this.opts.plugins&&this.opts.plugins.length>0)for(const a of this.opts.plugins)for(const l in a.attributes)r.items[l]=a.attributes[l],r.items[l].array=[];if(this.opts.scale&&(r.items.scale={name:"scale",array:[],length:3}),this.opts.rotation==!0&&(r.items.rotation={name:"rotation",array:[],length:4}),this.opts.rotationY==!0&&(r.items.rotationY={name:"rotationY",array:[],length:1}),this.opts.atlas&&(r.items.atlas={name:"atlas",length:4},r.textureID=this.opts.textureID),this.opts.opacity==!0&&(r.items.aOpacity={name:"aOpacity",length:1}),this.opts.animations&&(r.items.animations={name:"animations",length:4}),this.opts.randomID&&(r.items.randomID={name:"randomID",length:1}),r.copyBuffer!=null){r.attributes.offset=r.copyBuffer.attributes.offset;for(const a in r.items)r.attributes[a]=r.copyBuffer.attributes[a]}else{r.setAttribute("offset",new Zo(new Float32Array(new Array(3*this.max)),3,!1,1)),r.attributes.offset.setUsage(Np);for(const a in r.items){var s=r.items[a].type;s==null&&(s=Float32Array),r.setAttribute(a,new Zo(new s(new Array(r.items[a].length*this.max)),r.items[a].length,!1,1)),r.attributes[a].setUsage(Np)}}this.isLOD&&this._lods.push(r),t++}}radixmaxZ=-1/0;radixminZ=1/0;prepareForRadixSorting(e){const t=e._distance;t>this.radixmaxZ&&(this.radixmaxZ=t),t<this.radixminZ&&(this.radixminZ=t)}computeRadix(e){const t=this.radixmaxZ-this.radixminZ,i=(2**32-1)/t;let s=0;for(;s<e.length;){const r=e[s];r.z=r._distance,r.z-=this.radixminZ,r.z*=i,s++}}findInterval(e,t){for(let i=1;i<t.length;i++)if(e<t[i])return i-1;return t.length-1}}var Tc=/([\s\S]*?\bvoid\b +\bmain\b[\s\S]*?{)([\s\S]*)}/m;let FA=n=>n!=""?`
`+n+`

`:"",Mc=n=>`${FA(n.prefix)}$1${FA(n.main)}$2${FA(n.suffix)}}`;function jz(n){return n.split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0)}let Xz=(n,e)=>{var t="";if(n._data.uniforms!=null)for(const s in n._data.uniforms)t+=s+",";if(n._data.vertexShaderHooks!=null&&(n._data.vertexShaderHooks.prefix!=null&&(t+=n._data.vertexShaderHooks.prefix),n._data.vertexShaderHooks.main!=null&&(t+=n._data.vertexShaderHooks.main),n._data.vertexShaderHooks.suffix!=null&&(t+=n._data.vertexShaderHooks.suffix)),n._data.fragmentShaderHooks!=null&&(n._data.fragmentShaderHooks.prefix!=null&&(t+=n._data.fragmentShaderHooks.prefix),n._data.fragmentShaderHooks.main!=null&&(t+=n._data.fragmentShaderHooks.main),n._data.fragmentShaderHooks.suffix!=null&&(t+=n._data.fragmentShaderHooks.suffix)),n._data.defines!=null)for(const s in n._data.defines)t+=s+","+n._data.defines[s]+",";if(n._data.chunks!=null)for(const s in n._data.chunks)t+=s+",";if(n.transparent==!0&&(t+="transparent,"),n._data.plugins!=null&&n._data.plugins.length>0){let s=0;for(;s<n._data.plugins.length;){if(t+=n._data.plugins[s].name+".",n._data.plugins[s].defines!=null)for(const r in n._data.plugins[s].defines)t+=r+","+n._data.plugins[s].defines[r]+",";n._data.plugins[s].vertexShaderHooks!=null&&(n._data.plugins[s].vertexShaderHooks.prefix!=null&&(t+=n._data.plugins[s].vertexShaderHooks.prefix),n._data.plugins[s].vertexShaderHooks.main!=null&&(t+=n._data.plugins[s].vertexShaderHooks.main),n._data.plugins[s].vertexShaderHooks.suffix!=null&&(t+=n._data.plugins[s].vertexShaderHooks.suffix)),n._data.plugins[s].fragmentShaderHooks!=null&&(n._data.plugins[s].fragmentShaderHooks.prefix!=null&&(t+=n._data.plugins[s].fragmentShaderHooks.prefix),n._data.plugins[s].fragmentShaderHooks.main!=null&&(t+=n._data.plugins[s].fragmentShaderHooks.main),n._data.plugins[s].fragmentShaderHooks.suffix!=null&&(t+=n._data.plugins[s].fragmentShaderHooks.suffix)),s++}}if(t!=""){t+=e+",";var i=t.replace(/[\n\r]/g,"").replace(/\s/g,"");i=jz(i),n.customProgramCacheKey=function(){return i}}},Kz=(n,e=null)=>{n.onBeforeCompile=t=>{let i=Object.assign({prefix:"",main:"",suffix:""},n._data.vertexShaderHooks),s=Object.assign({prefix:"",main:"",suffix:""},n._data.fragmentShaderHooks);try{n._data.uniforms=Object.assign(t.uniforms,n._data.uniforms)}catch{debugger}let r=e!=null?fs[e]:t;if(t.vertexShader=r.vertexShader.replace(Tc,Mc(i)),t.fragmentShader=r.fragmentShader.replace("void main() {",s.prefix+`
void main() {`),t.fragmentShader=t.fragmentShader.replace("void main() {",`void main() {
`+s.main),t.fragmentShader=t.fragmentShader.replace("#include <fog_fragment>",s.suffix+`
#include <fog_fragment>`),n._data.chunks!=null){if(n._data.chunks.vertex!=null)for(const o in n._data.chunks.vertex)t.vertexShader=t.vertexShader.replace(`#include <${o}>`,n._data.chunks.vertex[o]);if(n._data.chunks.fragment!=null)for(const o in n._data.chunks.fragment)t.fragmentShader=t.fragmentShader.replace(`#include <${o}>`,n._data.chunks.fragment[o])}if(n._data.replacers!=null){if(n._data.replacers.vertex!=null){let o=0;for(;o<n._data.replacers.vertex.length;){let a=n._data.replacers.vertex[o];t.vertexShader=t.vertexShader.replace(a.source,a.replace),o++}}if(n._data.replacers.fragment!=null){let o=0;for(;o<n._data.replacers.fragment.length;){let a=n._data.replacers.fragment[o];t.fragmentShader=t.fragmentShader.replace(a.source,a.replace),o++}}}if(t.defines==null&&(t.defines={}),n._data.defines)for(const o in n._data.defines)t.defines[o]=n._data.defines[o];if(n._data.plugins&&n._data.plugins.length>0){let o=n._data.plugins.length-1;for(;o>-1;){const a=n._data.plugins[o];let l=Object.assign({prefix:"",main:"",suffix:""},a.vertexShaderHooks),u=Object.assign({prefix:"",main:"",suffix:""},a.fragmentShaderHooks);if(l.suffix="",u.suffix="",t.vertexShader=t.vertexShader.replace(Tc,Mc(l)),t.fragmentShader=t.fragmentShader.replace(Tc,Mc(u)),n._data.uniforms=Object.assign({},a.uniforms,n._data.uniforms),a.chunks!=null){if(a.chunks.vertex!=null)for(const h in a.chunks.vertex)t.vertexShader=t.vertexShader.replace(`#include <${h}>`,a.chunks.vertex[h]);if(a.chunks.fragment!=null)for(const h in a.chunks.fragment)t.fragmentShader=t.fragmentShader.replace(`#include <${h}>`,a.chunks.fragment[h])}if(a.replacers!=null){if(a.replacers.vertex!=null){let h=0;for(;h<a.replacers.vertex.length;){let c=a.replacers.vertex[h];t.vertexShader=t.vertexShader.replace(c.source,c.replace),h++}}if(a.replacers.fragment!=null){let h=0;for(;h<a.replacers.fragment.length;){let c=a.replacers.fragment[h];t.fragmentShader=t.fragmentShader.replace(c.source,c.replace),h++}}}for(const h in a.defines)t.defines[h]=a.defines[h];a.transparent!=null&&e!="shadow"&&(n.transparent=a.transparent||n.transparent),o--}for(o=0;o<n._data.plugins.length;){const a=n._data.plugins[o];let l=Object.assign({prefix:"",main:"",suffix:""},a.vertexShaderHooks),u=Object.assign({prefix:"",main:"",suffix:""},a.fragmentShaderHooks);l.prefix="",u.prefix="",l.main="",u.main="",t.vertexShader=t.vertexShader.replace(Tc,Mc(l)),t.fragmentShader=t.fragmentShader.replace(Tc,Mc(u)),o++}}t.uniforms=n._data.uniforms,n.uniforms=n._data.uniforms,n.shader=t}};class a0 extends Es{constructor(e={}){super(e),this._data=e,Xz(this,"basic"),Kz(this,"basic")}}var $z=`attribute   vec3 offset;

attribute   float rotationY;

attribute   vec4 rotation;

attribute   vec3 scale;

vec3 applyQuat( vec4 q, vec3 v ){

    return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
}

  

  

 
#if defined(ROTATING) || defined(UV_SHIFT_X) || defined(UV_SHIFT_Y)

    uniform float timer;
    
#endif

mat3 rotateY(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat3(
        c, 0.0, -s,
        0.0, 1.0, 0.0,
        s, 0.0, c
    );
}

vec3 getPosition(){

    #ifndef INSTANCE

       return position;

    #endif

    vec4 quat = rotation;

    vec3 pos = position;

    #ifdef ROTATING

        pos = rotateY(timer)  * pos;

    #endif

    return applyQuat ( quat, ( pos * scale )) + offset;

}

vec3 getPositionWithOptions( vec3 p, vec3 s, vec4 r, vec3 o){

    #ifndef INSTANCE

       return p;

    #endif

    return applyQuat ( r, ( p * s )) + o;

}

vec3 getPositionWithOptions( vec3 p, vec3 s, vec4 r, vec3 o, float y ){

    #ifndef INSTANCE

       return p;

    #endif

    vec4 quat = r;

    vec3 pos = p;

    pos = rotateY(y)  * pos;

    return applyQuat ( quat, ( pos * s )) + o;

}

vec3 getNormal(){

    #ifndef INSTANCE

       return normal;

    #endif

    vec4 quat = rotation;

    vec3 pos = normal;

    #ifdef ROTATING

        pos = rotateY(timer)  * pos;

    #endif

    return applyQuat ( quat, ( pos * scale ));

}

vec3 getNormalWithOptions(vec3 p, vec3 s, vec4 r, vec3 o ){

    #ifndef INSTANCE

       return normal;

    #endif

    vec4 quat = r;

    vec3 pos = p;

    #ifdef ROTATING

        pos = rotateY(timer)  * pos;

    #endif

    return applyQuat ( quat, ( pos ));

}

#ifdef USE_INSTANCE_COLOR

    #define USE_COLOR 

    attribute vec3 icolor;

#endif`,Jz=`#ifndef OVERRIDE_PLUGIN_VERTEX 

    vec3 originalPosition       =  position;

    vec3 position              =  getPosition();

    vec3 normal  	            = getNormal();

#endif`,Zz="",e4="",t4="",n4="";class Xx extends a0{constructor(e={}){let t=Object.assign({},e);t.defines==null&&(t.defines={}),t.defines.INSTANCE="",t.vertexShaderHooks={prefix:e?.vertexShaderHooks?.prefix?e.vertexShaderHooks?.prefix:$z,main:e?.vertexShaderHooks?.main?e.vertexShaderHooks?.main:Jz,suffix:e?.vertexShaderHooks?.suffix?e.vertexShaderHooks?.suffix:Zz},t.fragmentShaderHooks={prefix:e?.fragmentShaderHooks?.prefix?e.fragmentShaderHooks?.prefix:e4,main:e?.fragmentShaderHooks?.main?e.fragmentShaderHooks?.main:t4,suffix:e?.fragmentShaderHooks?.suffix?e.fragmentShaderHooks?.suffix:n4},e.plugins&&e.plugins.length>0&&(t.plugins=e.plugins),super(t)}}var i4=`#ifdef USE_FADE

    varying vec3 vEye;

    varying vec3 vWorldP;

#endif 

attribute vec2 cloudScale;

varying vec2 vCloudScale;`,s4=`#ifdef USE_FADE
    
    vEye = mvPosition.xyz;

    vWorldP = transformed.xyz;

#endif

vCloudScale = cloudScale;`,r4=`uniform sampler2D uNoiseTxt;
#define cloud_plugin 1.0
uniform float gTime;
uniform int uRenderMode;

#ifdef USE_FADE
    varying vec3 vEye;

    uniform float maxCloudBrowsing;

    varying vec3 vWorldP;
  

#endif

varying vec2 vCloudScale;

uniform float cloudSpeed;`,o4=`vec2 baseUv = vec2( vMapUv.x, vMapUv.y);
if(vCloudScale.x < 0.0){
    baseUv.x = 1.0 - baseUv.x;
}
if( vCloudScale.y < 0.0){
    baseUv.y = 1.0 - baseUv.y;       
}

#ifdef USE_FADE

    float time = gTime * 0.03 * cloudSpeed;
    float timeA = gTime * 0.022 * cloudSpeed;
    vec2 uvShift1 = (texture2D(uNoiseTxt, vMapUv * vec2(3.0, 3.0) + vec2(time, 0.0)).rg - .5) * .006;
    vec2 uvShift2 = (texture2D(uNoiseTxt, vMapUv * vec2(2.8, 3.5) + vec2(time, 0.0)).rg - .5) * .012;

    
   
    vec2 nUv = vec2( baseUv ) + uvShift1 + uvShift2;

  

    
    vec4 final = texture2D(map, nUv);
    float alpha = final.a;

    
    
    
    
    
    
    
    
    
    
    
    alpha = clamp(alpha, 0.0, 1.0);
    
    final.a = alpha;

    float distToCamera = smoothstep(FADE_DISTANCE_MIN ,FADE_DISTANCE_MAX, -vEye.z);

    float appear       = smoothstep(APPEAR_DISTANCE_MAX, APPEAR_DISTANCE_MIN, -vEye.z);

    final.a *= distToCamera * appear * maxCloudBrowsing;

    #ifdef FADE_ON_APPEAR

        float distToApparition = smoothstep( 0.0, -50.0, vWorldP.z);

        final.a *= distToApparition;

        

    #endif

#else 

    float time = gTime * 0.03 * cloudSpeed;
    float timeA = gTime * 0.022 * cloudSpeed;
    vec2 uvShift1 = (texture2D(uNoiseTxt, vMapUv * vec2(3.0, 3.0) + vec2(time, 0.0)).rg - .5) * .006;
    vec2 uvShift2 = (texture2D(uNoiseTxt, vMapUv * vec2(2.8, 3.5) + vec2(time, 0.0)).rg - .5) * .012;
    vec2 nUv = baseUv + uvShift1 + uvShift2;
    
    vec4 final = texture2D(map, nUv);
    float alpha = final.a;

    if(uRenderMode == 0) {
        alpha *= 1. - (texture2D(uNoiseTxt, vMapUv * vec2(5., 2.) + timeA).g - .5) * smoothstep(1.0, 0.45, alpha) * 7.0;
        float af1 = 1. - (texture2D(uNoiseTxt, vMapUv * vec2(2., 1.8) + vec2(timeA * 0.8, timeA * 0.2)).g - .5) * 2.0;
        float af2 = 1. - (texture2D(uNoiseTxt, vMapUv * vec2(3., 1.4) + vec2(timeA * 0.5, timeA * 0.2)).g - .5) * 2.0;
        alpha *= af1;
        alpha *= af2;
    }
    else if(uRenderMode == 1) {
        alpha *= 1. - (texture2D(uNoiseTxt, vMapUv * vec2(5., 2.) + timeA * 2.0).g - .5) * smoothstep(0.7, 0.15, alpha) * 7.0;
        alpha = smoothstep(0.1, 0.9, alpha) * 0.45;
    }

    else if (uRenderMode == 2 ) {

        #ifdef USE_FADE

            float distToCamera = smoothstep(FADE_DISTANCE_MIN ,FADE_DISTANCE_MAX, -vEye.z);

            final.a *= distToCamera
        #endif

       
 
    }
   

    alpha = clamp(alpha, 0.0, 1.0);
    alpha *= 1.0;
    final.a = alpha;

#endif

if( final.a < 0.001 ) discard;`,a4="";class of{static get name(){return"CloudNoisePlugin"}constructor(){}async preload(){this.noiseTexture=await Ui.loadTexture("/gl/images/cnoise.png"),this.noiseTexture.wrapS=this.noiseTexture.wrapT=pa,this.noiseTexture.needsUpdate=!0}init(e=0,t=!1,i={}){this.name="CloudNoisePlugin",this.attributes={cloudScale:{name:"cloudScale",length:2,defaultValue:[1,1]}},this.uniforms={uNoiseTxt:{value:this.noiseTexture},gTime:Yl.cloudTimer,cloudSpeed:{value:i.speed!=null?i.speed:1},maxCloudBrowsing:{value:1},uRenderMode:{value:e}},this.defines={},t==!0&&(this.defines.USE_FADE="1.0",this.defines.FADE_DISTANCE_MIN=i.minFade+".0",this.defines.FADE_DISTANCE_MAX=i.maxFade+".0",this.defines.APPEAR_DISTANCE_MIN=i.minAppear+".0",this.defines.APPEAR_DISTANCE_MAX=i.maxAppear+".0",i.fadeOnAppear&&(this.defines.FADE_ON_APPEAR=i.fadeOnAppear+".0")),this.vertexShaderHooks={prefix:i4,suffix:s4},this.fragmentShaderHooks={prefix:r4,suffix:a4},this.replacers={fragment:[{source:"vec4 diffuseColor = vec4( diffuse, opacity );",replace:o4+`
                        vec4 diffuseColor = vec4( final.rgb * diffuse.rgb, final.a );
                    `}]},this.chunks={fragment:{map_fragment:""}}}}class l4{constructor(e=123456789){this.seed=e}next(){const i=Math.pow(2,32);return this.seed=(1664525*this.seed+1013904223)%i,this.seed/i}nextInt(e,t){return Math.floor(this.next()*(t-e+1))+e}reset(e=this.seed){this.seed=e}}class Gf{constructor(e,t,i=""){this.includeName=i,this.cb=e,this.boundHandleDrag=this.handleDrag.bind(this),this.boundHandleDrop=this.handleDrop.bind(this),this.boundHandleDragEnter=this.handleDragEnter.bind(this),this.boundHandleDragLeave=this.handleDragLeave.bind(this),this.attach(document.body)}handleDrag(e){e.preventDefault(),e.stopPropagation()}handleDrop(e){e.preventDefault(),e.stopPropagation();const t=e.dataTransfer.files;if(t&&t.length>0){const i=t[0];if(i.name.toLowerCase().includes(this.includeName)==!0&&this.includeName=="cloud"||this.includeName=="building"||this.includeName=="layer"){const s=new FileReader;s.onload=r=>{const o=new Image;o.onload=()=>{this.cb(o,i.name)},o.src=r.target.result},s.readAsDataURL(i),i.name}else if(this.includeName=="env"){const s=URL.createObjectURL(i);this.cb(s,i.name)}}}handleDragEnter(e){e.preventDefault(),e.stopPropagation()}handleDragLeave(e){e.preventDefault(),e.stopPropagation()}attach(e){e.addEventListener("dragover",this.boundHandleDrag),e.addEventListener("drop",this.boundHandleDrop),e.addEventListener("dragenter",this.boundHandleDragEnter),e.addEventListener("dragleave",this.boundHandleDragLeave)}detach(e){e.removeEventListener("dragover",this.boundHandleDrag),e.removeEventListener("drop",this.boundHandleDrop),e.removeEventListener("dragenter",this.boundHandleDragEnter),e.removeEventListener("dragleave",this.boundHandleDragLeave)}}const Dc=[{position:{x:-27.4,y:-4.3,z:-1},scale:17.4,scaleOrientationX:1,scaleOrientationY:1},{position:{x:-37.7,y:-5,z:0},scale:19.25,scaleOrientationX:1,scaleOrientationY:1},{position:{x:30.4,y:-8.9,z:0},scale:19.25,scaleOrientationX:1,scaleOrientationY:1},{position:{x:5.5,y:-8.9,z:-2.4},scale:10.75,scaleOrientationX:1,scaleOrientationY:1},{position:{x:-3.7,y:-20.7,z:-14.1},scale:44.1,scaleOrientationX:1,scaleOrientationY:1},{position:{x:-32.8,y:-11.1,z:-31.5},scale:40.5,scaleOrientationX:1,scaleOrientationY:1},{position:{x:-3.7,y:-10.2,z:-7.59999999999999},scale:26.45,scaleOrientationX:1,scaleOrientationY:1},{position:{x:32.4,y:-20,z:-72.4},scale:32.35,scaleOrientationX:1,scaleOrientationY:1},{position:{x:22,y:-14.8,z:-14.8},scale:32.35,scaleOrientationX:-1,scaleOrientationY:1},{position:{x:0,y:-14.8,z:-56.4},scale:21.2,scaleOrientationX:-1,scaleOrientationY:1},{position:{x:86,y:-17.2,z:-28},scale:35.75,scaleOrientationX:1,scaleOrientationY:1},{position:{x:-126,y:-17.2,z:-17.2},scale:50,scaleOrientationX:1,scaleOrientationY:1},{position:{x:69.6,y:-6.39999999999998,z:-.799999999999983},scale:50,scaleOrientationX:-1,scaleOrientationY:1},{position:{x:33,y:-3.3,z:6.40000000000001},scale:12.7,scaleOrientationX:1,scaleOrientationY:1},{position:{x:163.2,y:-14.8,z:-150.8},scale:50,scaleOrientationX:-1,scaleOrientationY:1},{position:{x:105.6,y:-4,z:-56.4},scale:40.2,scaleOrientationX:-1,scaleOrientationY:1},{position:{x:200,y:-4,z:-46},scale:50,scaleOrientationX:1,scaleOrientationY:1},{position:{x:-217.6,y:-8,z:-30.4},scale:85.6,scaleOrientationX:-1,scaleOrientationY:1},{position:{x:-322.4,y:-8,z:117.6},scale:100,scaleOrientationX:-1,scaleOrientationY:1},{position:{x:-338.4,y:-1.59999999999997,z:204.8},scale:50,scaleOrientationX:1,scaleOrientationY:1}];class c4 extends Yn{constructor(){super(),this.spawns={scale:80,randomScale:15,x:900,y:10,offsetY:38};var e=7059401;lV&&(e=Math.ceil(Math.random()*1e7)),this.seededRandom=new l4(e),console.log("current cloud seed: "+this.seededRandom.seed),console.log("current cloud seed: "+this.seededRandom.seed),console.log("current cloud seed: "+this.seededRandom.seed),this.max=240,this.range=ol-Fs}async init(){this.cloudPlugin=new of,await this.cloudPlugin.preload(),this.cloudPlugin.init(1,!0,{minFade:0,maxFade:45,minAppear:this.range-200,maxAppear:this.range,fadeOnAppear:ol-Fs});const e=await Ui.loadTexture("/gl/images/Cloud-tint-8.png"),t=new Hr(1,1,1,1),i={transparencySorting:!0,useNormal:!1,scaleRatio:e.image.width/e.image.height,name:"clouds",scale:!0,rotation:!0,plugins:[this.cloudPlugin]},s=new Xx({color:15987702,depthWrite:!1,depthTest:!1,side:2,map:e,transparent:!0,plugins:[this.cloudPlugin]});this.mesh=new Qx(new jx(t,i),s,{type:"clouds"}),this.add(this.mesh),this.mesh.renderOrder=1e3,this.populate(),this.cloudPlugin2=new of,await this.cloudPlugin2.preload(),this.cloudPlugin2.init(2,!0,{minFade:0,maxFade:20,minAppear:this.range-200,maxAppear:this.range});const r={transparencySorting:!0,useNormal:!1,scaleRatio:e.image.width/e.image.height,name:"clouds2",scale:!0,rotation:!0,plugins:[this.cloudPlugin2]},o=new Xx({color:15987702,depthWrite:!1,depthTest:!1,side:2,map:e,transparent:!0,plugins:[this.cloudPlugin2]});this.mesh2=new Qx(new jx(t,r),o,{type:"clouds2"}),window.mesh2=this.mesh2,this.add(this.mesh2),this.mesh2.renderOrder=999,this.addDebugFill(),Qt&&(this.listener=new Gf(this.replaceTexture.bind(this),"png","cloud")),this.addEvents()}replaceTexture(e){const t=new on;t.image=e,t.needsUpdate=!0,this.mesh.material.map=t,this.mesh2.material.map=t;const i=t.image.width/t.image.height;this.mesh.geometry.scaleRatio=i,this.mesh2.geometry.scaleRatio=i}addDebugFill(){if(Qt){this.folder=un.addFolder("filling clouds"),this.folder.close();let t={add:()=>{this.fillWithData(this.folder,Dc)},export:()=>{const i="clouds.json",s=document.createElement("a");s.href=URL.createObjectURL(new Blob([JSON.stringify(Dc,null,4)],{type:"json"})),s.download=i,s.click()}};this.folder.add(t,"add"),this.folder.add(t,"export")}let e=0;for(;e<Dc.length;)this.fillWithData(this.folder,Dc,Dc[e],e),e++}populate(){let e=0;const t=1/this.max;for(;e<this.max;){const s=this.seededRandom.next()*this.spawns.x-this.seededRandom.next()*this.spawns.x,r=e*t*this.range,o=this.seededRandom.next()*this.spawns.y-this.seededRandom.next()*this.spawns.y-this.spawns.offsetY;var i=1*this.spawns.scale+this.seededRandom.next()*this.spawns.randomScale;const a=r+Fs;if(a<ol){const l=this.mesh.add({position:{x:s,y:o,z:a},scale:{x:i,y:i,z:i},rotation:{x:0,y:0,z:0},cloudScale:[this.seededRandom.next()>.5?1:-1,this.seededRandom.next()>.1?1:-1],plugins:[this.cloudPlugin]});l.originalZ=l.position.z}e++}}update(e){if(this.mesh){this.cloudPlugin.uniforms.maxCloudBrowsing.value=Yl.maxBrowsingCloud.value;const t=ol-Fs;for(let i=0;i<this.mesh.instances.length;i++){const s=this.mesh.instances[i];s.position.z-=e*3.5,s.position.z=Fs+((s.position.z-Fs)%t+t)%t}}}mod(e,t){return(e%t+t)%t}addEvents(){$e.on(Ge.PRE_UPDATE,this.update.bind(this))}fillWithData(e,t,i,s=null){i==null&&(i={position:{x:0,y:0,z:0},scale:1,scaleOrientationX:1,scaleOrientationY:1},t.push(i));const r=s??t.length-1,o=this.mesh2.add({plugins:[this.cloudPlugin2]});if(this.setFillInstanceWithData(o,i),Qt){const a=e.addFolder("instance"+r);a.close(),a.add(i.position,"x",-400,400).onChange(()=>{this.setFillInstanceWithData(o,i)}),a.add(i.position,"y",-400,400).onChange(()=>{this.setFillInstanceWithData(o,i)}),a.add(i.position,"z",-400,400).onChange(()=>{this.setFillInstanceWithData(o,i)}),a.add(i,"scale",0,100).onChange(()=>{this.setFillInstanceWithData(o,i)}),a.add(i,"scaleOrientationX",-1,1).step(2).onChange(()=>{this.setFillInstanceWithData(o,i)}),a.add(i,"scaleOrientationY",-1,1).step(2).onChange(()=>{this.setFillInstanceWithData(o,i)})}}setFillInstanceWithData(e,t){e.scale.x=t.scale,e.scale.y=t.scale,e.scale.z=t.scale,e.position.z=t.position.z,e.position.y=t.position.y,e.position.x=t.position.x,e.cloudScale=[t.scaleOrientationX,t.scaleOrientationY]}}const Kh=[{url:"/gl/images/layer0.png",position:{x:0,y:-4.93,z:0},scalarScale:7.25,renderOrder:0},{url:"/gl/images/layer1.png",position:{x:0,y:-7.11,z:4.96000000000001},scalarScale:12,renderOrder:-1},{url:"/gl/images/layer2.png",position:{x:0,y:-10,z:10.39},scalarScale:14,renderOrder:-3},{url:"/gl/images/layer3.png",position:{x:0,y:-10.41,z:18.54},scalarScale:28.95,renderOrder:-4},{url:"/gl/images/layer4.png",position:{x:3.25,y:1.15,z:24.09},scalarScale:70.1,renderOrder:-10}];class u4 extends Yn{constructor(){super()}meshes=[];async init(){Qt&&(this.gui=un.addFolder("LayerCloud"));let e=0;const t=new Hr(1,1,1,1);for(this.cloudPlugin=new of,await this.cloudPlugin.preload(),this.cloudPlugin.init(0,!1,{speed:.5});e<Kh.length;){const i=Kh[e],s=await Ui.loadTexture(i.url),r=new a0({side:2,map:s,transparent:!0,plugins:[this.cloudPlugin]}),o=new dn(t,r),a=s.image.width/s.image.height;if(o.scaleRatio=a,o.scale.x=a*i.scalarScale,o.scale.y=i.scalarScale,o.scale.z=i.scalarScale,o.scalarScale=1,o.position.x=i.position.x,o.position.y=i.position.y,o.position.z=i.position.z,o.renderOrder=i.renderOrder,this.meshes.push(o),this.add(o),Qt){let l=this.gui.addFolder("LayerCloud "+e);l.add(i.position,"x",-20,20).name("position x").step(.01).onChange(()=>{o.position.x=i.position.x}),l.add(i.position,"y",-20,20).name("position y").step(.01).onChange(()=>{o.position.y=i.position.y}),l.add(i.position,"z",-100,100).name("position z").step(.01).onChange(()=>{o.position.z=i.position.z}),l.add(i,"renderOrder",-10,10).step(1).name("renderOrder").onChange(()=>{o.renderOrder=i.renderOrder}),l.add(i,"scalarScale",0,100).name("scalarScale").onChange(()=>{o.scale.x=o.scaleRatio*i.scalarScale,o.scale.y=i.scalarScale}),l.add(o,"visible")}e++}if(Qt){let i={export:()=>{const s="layerclouds.json",r=document.createElement("a");r.href=URL.createObjectURL(new Blob([JSON.stringify(Kh,null,2)],{type:"json"})),r.download=s,r.click()}};this.gui.add(i,"export").name("export"),this.gui.close(),this.dragDrop=new Gf((s,r)=>{console.log(r),console.log(r),console.log(r);var o=-1;const a=r.toLowerCase();if(a.includes("layer0")&&(o=0),a.includes("layer1")&&(o=1),a.includes("layer2")&&(o=2),a.includes("layer3")&&(o=3),a.includes("layer4")&&(o=4),o!=-1){console.log("replace",o,"layer cloud ");const l=new on;l.image=s;const u=Kh[o];this.meshes[o].scaleRatio=s.width/s.height,this.meshes[o].material.map=l,this.meshes[o].scale.set(this.meshes[o].scaleRatio*u.scalarScale,u.scalarScale,1),this.meshes[o].material.needsUpdate=!0,this.meshes[o].material.map.needsUpdate=!0}console.log(s,a)},"png","layer")}}}const Rc=[{url:"/gl/images/building0.png",position:{x:20,y:-5.65,z:17.28},scalarScale:7.46,renderOrder:-4},{url:"/gl/images/building1.png",position:{x:7.44,y:-4.61,z:5.5},scalarScale:8.77,renderOrder:-3},{url:"/gl/images/building2.png",position:{x:-9.84,y:-3.56,z:18.59},scalarScale:10.08,renderOrder:-8},{url:"/gl/images/building3new.png",position:{x:-20.52,y:-3.56,z:23.82},scalarScale:5.5,renderOrder:-5}];let h4=class extends Yn{constructor(){super()}async init(){Qt&&(this.gui=un.addFolder("LayerBuildings"),this.dragDrop=new Gf((i,s)=>{var r=-1;if(s.includes("building0")&&(r=0),s.includes("building1")&&(r=1),s.includes("building2")&&(r=2),s.includes("building3")&&(r=3),r!=-1){const o=new on;o.image=i;const a=Rc[r];this.meshes[r].scaleRatio=i.width/i.height,this.meshes[r].material.map=o,this.meshes[r].scale.set(this.meshes[r].scaleRatio*a.scalarScale,a.scalarScale,1),this.meshes[r].material.needsUpdate=!0,this.meshes[r].material.map.needsUpdate=!0}},"png","building"));let e=0;this.meshes=[];const t=new Hr(1,1,1,1);for(;e<Rc.length;){const i=Rc[e],s=await Ui.loadTexture(i.url),r=new Es({side:2,map:s,transparent:!0,alphaTest:.01}),o=new dn(t,r);this.meshes.push(o);const a=s.image.width/s.image.height;if(o.scaleRatio=a,o.rotation.y=Math.PI,o.scale.x=a*i.scalarScale,o.scale.y=i.scalarScale,o.scale.z=i.scalarScale,o.scalarScale=1,o.position.x=i.position.x,o.position.y=i.position.y,o.position.z=i.position.z,o.renderOrder=i.renderOrder,this.add(o),Qt){let l=this.gui.addFolder("building "+e);l.add(i.position,"x",-80,80).name("position x").step(.01).onChange(()=>{o.position.x=i.position.x}),l.add(i.position,"y",-20,20).name("position y").step(.01).onChange(()=>{o.position.y=i.position.y}),l.add(i.position,"z",-50,50).name("position z").step(.01).onChange(()=>{o.position.z=i.position.z}),l.add(i,"renderOrder",-20,10).step(.5).name("renderOrder").onChange(()=>{o.renderOrder=i.renderOrder}),l.add(i,"scalarScale",0,50).step(.01).name("scalarScale").onChange(()=>{o.scale.x=o.scaleRatio*i.scalarScale,o.scale.y=i.scalarScale}),l.add(o,"visible")}e++}if(Qt){let i={export:()=>{console.log(Rc);const s="buildings.json",r=document.createElement("a");r.href=URL.createObjectURL(new Blob([JSON.stringify(Rc,null,2)],{type:"json"})),r.download=s,r.click()}};this.gui.add(i,"export").name("export"),this.gui.close()}}};const d4="/gl/images/intro-cloud.png",Bc=[{position:{x:-32.45,y:-8.9,z:42.41},rotation:-.0999999999999996,scalarScale:31.02,xScale:1,renderOrder:-11},{position:{x:-50,y:-12.82,z:26.71},rotation:-.0999999999999996,xScale:1,scalarScale:50,renderOrder:-17},{position:{x:26.44,y:-6.6,z:21.47},rotation:.0300000000000002,xScale:1,scalarScale:27.1,renderOrder:-6}];class f4 extends Yn{constructor(){super(),this.nameId=-1}async init(){Qt&&(this.gui=un.addFolder("AdditionalClouds"));let e=0;this.baseGeom=new Hr(1,1,1,1);const t=await Ui.loadTexture(d4);if(this.scaleRatio=t.image.width/t.image.height,this.cloudPlugin=new of,await this.cloudPlugin.preload(),this.cloudPlugin.init(1,!1,{speed:.25}),this.material=new a0({side:2,map:t,transparent:!0,plugins:[this.cloudPlugin]}),Qt){let i={add:()=>{const s={position:{x:0,y:0,z:0},rotation:0,scalarScale:25.13,xScale:1,renderOrder:-4};this.addCloud(s),Bc.push(s)},export:()=>{console.log(Bc);const s="additionalclouds.json",r=document.createElement("a");r.href=URL.createObjectURL(new Blob([JSON.stringify(Bc,null,2)],{type:"json"})),r.download=s,r.click()}};this.gui.add(i,"add").name("add additional cloud"),this.gui.add(i,"export").name("export"),this.gui.close()}for(;e<Bc.length;){const i=Bc[e];this.addCloud(i),e++}}addCloud(e){const t=new dn(this.baseGeom,this.material);if(t.scaleRatio=this.scaleRatio,t.scale.x=this.scaleRatio*e.scalarScale*e.xScale,t.scale.y=e.scalarScale,t.scale.z=e.scalarScale,t.scalarScale=1,t.position.x=e.position.x,t.position.y=e.position.y,t.position.z=e.position.z,t.renderOrder=e.renderOrder,t.rotation.z=e.rotation,this.add(t),Qt){this.nameId++;let i=this.gui.addFolder("AdditionalCloud "+this.nameId);i.add(e.position,"x",-50,50).name("position x").step(.01).onChange(()=>{t.position.x=e.position.x}),i.add(e.position,"y",-50,50).name("position y").step(.01).onChange(()=>{t.position.y=e.position.y}),i.add(e.position,"z",-100,100).name("position z").step(.01).onChange(()=>{t.position.z=e.position.z}),i.add(e,"rotation",-5,5).step(.01).name("rotation").onChange(()=>{t.rotation.z=e.rotation}),i.add(e,"renderOrder",-20,20).step(1).name("renderOrder").onChange(()=>{t.renderOrder=e.renderOrder}),i.add(e,"scalarScale",0,50).step(.01).name("scalarScale").onChange(()=>{t.scale.x=this.scaleRatio*e.scalarScale*e.xScale,t.scale.y=e.scalarScale}),i.add(t,"visible")}}}const $h=new V;function Kx(n,e,t){$h.copy(n),$h.project(e);const i=po.w/2,s=po.h/2,r=$h.x*i+i,o=-($h.y*s)+s;return{x:r,y:o}}const Jh=new V;class p4 extends Yn{constructor(){super()}async init(){if(this.model=await Ui.loadModel("/gl/sothebys_111w57_04.glb"),this.add(this.model.scene),this.model.scene.scale.set(rt.scalarScale,rt.scalarScale,rt.scalarScale),this.model.scene.position.set(rt.position.x,rt.position.y,rt.position.z),this.model.scene.rotation.y=rt.position.rotation,this.ambient=new V2(16777215,1),this.add(this.ambient),Qt){this.gui=un.addFolder("MainBuilding"),this.gui.close(),this.gui.add(rt.position,"x").min(-50).max(50).step(.01).name("pos x").onChange(()=>{this.model.scene.position.x=rt.position.x}),this.gui.add(rt.position,"y").min(-20).max(20).step(.01).name("pos y").onChange(()=>{this.model.scene.position.y=rt.position.y}),this.gui.add(rt.position,"z").min(-50).max(50).step(.01).name("pos z").onChange(()=>{this.model.scene.position.z=rt.position.z}),this.gui.add(rt.position,"rotation").min(-Math.PI).max(Math.PI).step(.01).name("rotation").onChange(()=>{this.model.scene.rotation.y=rt.position.rotation}),this.gui.add(rt,"scalarScale").min(0).max(30).step(.01).name("scalarScale").onChange(()=>{this.model.scene.scale.set(rt.scalarScale,rt.scalarScale,rt.scalarScale)});let e={export:()=>{const t="mainbuilding.json",i=document.createElement("a");i.href=URL.createObjectURL(new Blob([JSON.stringify(rt,null,2)],{type:"json"})),i.download=t,i.click()}};this.gui.add(e,"export").name("export")}this.initHotStops(),this.addEvents()}update(){}hostSpot0=null;hotSpot1=null;postupdate(){this.hotspotsHolder.lookAt(Gn.current.position),this.meshes[0].getWorldPosition(Jh);const e=Kx(Jh,Gn.current);this.hostSpot0=e,this.meshes[1].getWorldPosition(Jh);const t=Kx(Jh,Gn.current);this.hotSpot1=t,rt.debughostspot&&(this.debugElement0.style.transform=`translate(${Math.ceil(e.x)}px, ${Math.ceil(e.y)}px)`,this.debugElement1.style.transform=`translate(${Math.ceil(t.x)}px, ${Math.ceil(t.y)}px)`)}initHotStops(){if(new Hr(1,1,1,1),new Es({color:16711680,side:2,transparent:!0,opacity:.5}),this.meshes=[new Yn,new Yn],this.hotspotsHolder=new zt,this.hotspotsHolder.position.y=2,this.model.scene.add(this.hotspotsHolder),this.hotspotsHolder.add(this.meshes[0]),this.hotspotsHolder.add(this.meshes[1]),this.meshes[0].position.set(rt.hotspots[0].position.x,rt.hotspots[0].position.y,0),this.meshes[1].position.set(rt.hotspots[1].position.x,rt.hotspots[1].position.y,0),Qt){this.gui=un.addFolder("Hotspots"),this.gui.close();const e=10;this.gui.add(rt.hotspots[0].position,"x").min(-e).max(e).step(.01).name("pos x").onChange(()=>{this.meshes[0].position.x=rt.hotspots[0].position.x}),this.gui.add(rt.hotspots[0].position,"y").min(-e).max(e).step(.01).name("pos y").onChange(()=>{this.meshes[0].position.y=rt.hotspots[0].position.y}),this.gui.add(rt.hotspots[1].position,"x").min(-e).max(e).step(.01).name("pos x").onChange(()=>{this.meshes[1].position.x=rt.hotspots[1].position.x}),this.gui.add(rt.hotspots[1].position,"y").min(-e).max(e).step(.01).name("pos y").onChange(()=>{this.meshes[1].position.y=rt.hotspots[1].position.y}),this.gui.add(rt,"debughostspot").onChange(()=>{this.enableDebugDivs()});let t={export:()=>{const i="layerclouds.json",s=document.createElement("a");s.href=URL.createObjectURL(new Blob([JSON.stringify(rt)],{type:"json"})),s.download=i,s.click()}};this.gui.add(t,"export").name("export")}this.enableDebugDivs()}enableDebugDivs(){this.debugElement0==null&&rt.debughostspot==!0&&(this.debugElement0=document.createElement("div"),this.debugElement0.style.position="absolute",this.debugElement0.style.width="50px",this.debugElement0.style.height="50px",this.debugElement0.style.backgroundColor="red",document.body.appendChild(this.debugElement0),this.debugElement1=document.createElement("div"),this.debugElement1.style.position="absolute",this.debugElement1.style.width="50px",this.debugElement1.style.height="50px",this.debugElement1.style.backgroundColor="red",document.body.appendChild(this.debugElement1)),rt.debughostspot==!1&&this.debugElement0!=null&&(document.body.removeChild(this.debugElement0),document.body.removeChild(this.debugElement1),this.debugElement0=null,this.debugElement1=null)}getHotSpots(){return{spot0:this.hostSpot0,spot1:this.hotSpot1}}addEvents(){$e.on(Ge.PRE_UPDATE,this.update.bind(this)),$e.on(Ge.POST_UPDATE,this.postupdate.bind(this))}removeEvents(){$e.off(Ge.PRE_UPDATE,this.update.bind(this))}}class Ru extends dn{constructor(){super(Ru.Geometry,new Es({opacity:0,transparent:!0})),this.isLensflare=!0,this.alpha=1,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new V,t=new V,i=new yy(16,16),s=new yy(16,16);let r=vn;const o=Ru.Geometry,a=new rA({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`
				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {
					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );
				}`,fragmentShader:`
				precision highp float;

				void main() {
					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );
				}`,depthTest:!0,depthWrite:!1,transparent:!1,side:2}),l=new rA({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`
				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {
					vUV = uv;
					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );
				}`,fragmentShader:`
				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {
					gl_FragColor = texture2D( map, vUV );
				}`,depthTest:!1,depthWrite:!1,transparent:!1,side:2});new dn(o,a);const u=[],h=_r.Shader,c=new rA({name:h.name,uniforms:{map:{value:null},opacity:{value:null},occlusionMap:{value:s},color:{value:new Ke(16777215)},scale:{value:new ze},screenPosition:{value:new V}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:km,transparent:!0,depthWrite:!1}),d=new dn(o,c);this.addElement=function(E){u.push(E)};const f=new ze,p=new ze,A=new tU,g=new Ct;var m=this;this.onBeforeRender=function(E,_,v){E.getCurrentViewport(g);const x=E.getRenderTarget(),S=x!==null?x.texture.type:vn;r!==S&&(i.dispose(),s.dispose(),i.type=s.type=S,r=S);const w=g.w/g.z,T=g.z/2,y=g.w/2;let C=16/g.w;f.set(C*w,C),A.min.set(g.x,g.y),A.max.set(g.x+(g.z-16),g.y+(g.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(v.matrixWorldInverse),e.copy(t).applyMatrix4(v.projectionMatrix),p.x=g.x+e.x*T+T-8,p.y=g.y+e.y*y+y-8;{const D=-e.x*2,L=-e.y*2;for(let P=0,H=u.length;P<H;P++){const O=u[P],F=c.uniforms;F.color.value.copy(O.color),F.opacity.value=O.opacity*m.alpha,F.map.value=O.texture,F.screenPosition.value.x=e.x+D*O.distance,F.screenPosition.value.y=e.y+L*O.distance,C=O.size/g.w;const G=g.w/g.z;F.scale.value.set(C*G,C),c.uniformsNeedUpdate=!0,E.renderBufferDirect(v,null,o,c,d,null)}}},this.dispose=function(){a.dispose(),l.dispose(),c.dispose(),i.dispose(),s.dispose();for(let E=0,_=u.length;E<_;E++)u[E].texture.dispose()}}}class _r{constructor(e,t=1,i=0,s=new Ke(16777215),r=1){this.texture=e,this.size=t,this.distance=i,this.color=s,this.opacity=r}}_r.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},opacity:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`
		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {
			vUV = uv;

			vec2 pos = position.xy;

			// vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			// visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			// vVisibility =        visibility.r / 9.0;
			// vVisibility *= 1.0 - visibility.g / 9.0;
			// vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );
		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D map;
    uniform float opacity;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {
			vec4 texture = texture2D( map, vUV );
			// texture.a *= vVisibility * opacity;
			texture.a *= opacity;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;
		}`};Ru.Geometry=(function(){const n=new qi,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new xI(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new Mu(t,3,0,!1)),n.setAttribute("uv",new Mu(t,2,3,!1)),n})();const Ds={scrollRatioAlpha:.52,position:{x:21.7,y:-5.3,z:2.1},mouseForce:{x:0,y:0}};class A4 extends Yn{constructor(){super(),this.mouse={x:0,y:0}}async init(){const e=await Ui.loadTexture("/gl/images/flare/flare-1.jpg"),t=await Ui.loadTexture("/gl/images/flare/flare-2.jpg");if(Qt){const i=un.addFolder("Lens");i.close(),i.add(Ds,"scrollRatioAlpha").min(0).max(1).step(.01).name("scroll ratio alpha"),i.add(Ds.position,"x").min(-50).max(50).step(.1).name("pos x"),i.add(Ds.position,"y").min(-50).max(50).step(.1).name("pos y"),i.add(Ds.position,"z").min(-50).max(50).step(.1).name("pos z");let s={export:()=>{console.log(Ds);const r="lens.json",o=document.createElement("a");o.href=URL.createObjectURL(new Blob([JSON.stringify(Ds,null,2)],{type:"json"})),o.download=r,o.click()}};i.add(s,"export")}this.originalXPosition=20,this.originalZPosition=-50,this.lens=new Ru,this.lens.addElement(new _r(e,0,0,new Ke(16579565),.2)),this.lens.addElement(new _r(t,440,.1,new Ke(16579565),.2)),this.lens.addElement(new _r(e,60,.34,new Ke(16579565),.2)),this.lens.addElement(new _r(e,90,.22,new Ke(16579565),.14)),this.lens.addElement(new _r(e,500,.5,new Ke(14276545),.45)),this.lens.addElement(new _r(e,180,.68,new Ke(16579565),.15)),this.lens.addElement(new _r(e,120,.74,new Ke(16579565),.25)),this.add(this.lens),this.lens.visible=!1,this.addEvents()}update(e){if(this.lens){const t=wg(Ds.scrollRatioAlpha,1,Yl.scrollProgress.value);this.lens.visible=t>0,this.lens.alpha=t,this.lens.position.x=Ds.position.x,this.lens.position.y=Ds.position.y,this.lens.position.z=Ds.position.z}}onMouseMove(e){this.mouse=e.normalized}addEvents(){$e.on(Ge.PRE_UPDATE,this.update.bind(this)),$e.on(Ge.MOUSE_MOVE,this.onMouseMove.bind(this))}}class m4 extends Yn{constructor(){super(),this.clouds=new c4,this.add(this.clouds),this.layerCloud=new u4,this.add(this.layerCloud),this.buildings=new h4,this.add(this.buildings),this.additionalClouds=new f4,this.add(this.additionalClouds),this.lens=new A4,this.add(this.lens),this.mainBuilding=new p4,this.add(this.mainBuilding),this.addEvents()}async preload(e){return Promise.all([this.clouds.init().then(()=>{}),this.layerCloud.init().then(()=>{}),this.buildings.init().then(()=>{}),this.additionalClouds.init().then(()=>{}),this.lens.init().then(()=>{}),this.mainBuilding.init().then(()=>{})])}getHotSpots(){return this.mainBuilding.getHotSpots()}update(e){}setState(e){}stateDone(e){e==ot.ZOOM&&this.toggleVisbility(!1)}toggleVisbility(e){this.clouds.visible=e,this.layerCloud.visible=e,this.buildings.visible=e,this.additionalClouds.visible=e}killTweens(){this.opacityTween!=null&&(this.opacityTween.kill(),this.opacityTween=null)}addEvents(){$e.on(Ge.PRE_UPDATE,this.update.bind(this)),Gn.current.on(Ge.ZOOM_POSITION_RESET,()=>{this.toggleVisbility(!0)})}}class g4 extends Yn{constructor(){super(),this.currentMode=-1,this.scene==null&&(this.scene=new m4,this.add(this.scene))}getHotSpots(){return this.scene.getHotSpots()}async preload(e){await this.scene.preload(e)}async setState(e,t){return this.scene.setState(e,t)}stateDone(e,t){return this.scene.stateDone(e,t)}}class _4{constructor(){Qt&&(this.folder=un.__folders.GUI2.addFolder("States"),this.debugOptions={City:()=>{this.setState(ot.CITY)},CityForce:()=>{this.setState(ot.CITY,{force:!0})},Clouds:()=>{this.setState(ot.CLOUDS)},Zoom:()=>{this.setState(ot.ZOOM)},Interior:()=>{this.setState(ot.INTERIOR)},currentState:cn},this.folder.add(this.debugOptions,"City"),this.folder.add(this.debugOptions,"CityForce"),this.folder.add(this.debugOptions,"Clouds"),this.folder.add(this.debugOptions,"Zoom"),this.folder.add(this.debugOptions,"Interior"),this.debugState=this.folder.add(this.debugOptions,"currentState").name("Current State").listen())}preloadedPercent=0;async preload(){return new Promise(async(e,t)=>{Ui.init();var i=[];i.push(Ui.loadUltraHDR("/gl/images/HDR_AboveTheClouds.test.jpg")),i.push(Ui.loadUltraHDR("/gl/images/sothebys_111w57_reflection_Blurred.jpg")),Promise.all(i).then(async s=>{this.preloadedPercent=23;const r=s[0],o=s[1];xi.environment=o,xi.backgroundScene.background=r,xi.backgroundScene.backgroundRotation.y=-3.04,xi.environmentRotation.y=-2.11159265358979,Qt&&(un.__folders.environement.add(xi.backgroundScene.backgroundRotation,"y").min(-Math.PI).max(Math.PI).step(.01),un.__folders.environement.add(xi.environmentRotation,"y").min(-Math.PI).max(Math.PI).step(.01).name("env rotation"),un.__folders.environement.close()),Qt&&(this.listener=new Gf(async(a,l)=>{if(l.toLowerCase().includes("background")){const u=await Ui.loadUltraHDR(a);xi.backgroundScene.background=u}if(l.toLowerCase().includes("env")){const u=await Ui.loadUltraHDR(a);xi.environment=u}},"png","env")),this.root=new g4,await this.root.preload(this.preloadedPercent),this.preloadedPercent=100,e()})})}async start(){xi.add(this.root),this.addEvents()}async setState(e,t){if(!(cn==e&&cn!=ot.CITY&&e!=ot.CITY)){if(e==ot.ZOOM&&cn!=ot.CITY){console.log("cannot transition into ",ot.ZOOM," from ",cn);return}if(e==ot.INTERIOR&&cn!=ot.CITY){console.log("cannot transition into ",ot.ZOOM," from ",cn);return}var i=[];switch(e){case ot.CITY:case ot.CLOUDS:case ot.ZOOM:case ot.INTERIOR:i.push(this.root.setState(e,t)),i.push(Gn.current.setState(e,t));break}return Promise.all(i).then(async s=>(await this.stateDone(e,t),this.debugState&&(this.debugOptions.currentState=e),vA(e),s.flat()))}}stateDone(e,t,i){return new Promise(s=>{var r=[];r.push(this.root.stateDone(e,t)),Promise.all(r).then(()=>{s(r)})})}set scroll(e){Gn.current.scroll(e),e<1&&cn==ot.CITY&&(this.debugState&&(this.debugOptions.currentState=ot.CLOUDS),vA(ot.CLOUDS)),e==1&&cn!=ot.CITY&&(this.debugState&&(this.debugOptions.currentState=ot.CITY),vA(ot.CITY))}get scroll(){return Gn.current.currentScroll}set viewoffset(e){Gn.viewoffset=e}get viewoffset(){return Gn.viewoffset}set zoomMoveFactor(e){dz(e)}get zoomMoveFactor(){return r0}getHotSpots(){return this.root.getHotSpots()}dawnupdate(){}update(e){$e.emit(Ge.PRE_RENDER,xi,Gn.current),al.clear(),al.render(xi.backgroundScene,Gn.backgroundCamera),al.render(xi,Gn.current)}postupdate(){}duskupdate(){}addEvents(){this.postUpdateEvent=this.postupdate.bind(this),$e.on(Ge.POST_UPDATE,this.postUpdateEvent),this.updateEvent=this.update.bind(this),$e.on(Ge.UPDATE,this.updateEvent),this.dawnUpdateEvent=this.dawnupdate.bind(this),$e.on(Ge.DAWN_UPDATE,this.dawnUpdateEvent),this.duskUpdateEvent=this.duskupdate.bind(this),$e.on(Ge.DUSK_UPDATE,this.duskUpdateEvent),this.resizeEvent=this.resize.bind(this),$e.on(Ge.RESIZE,this.resizeEvent),Qt&&$e.on(Ge.RELOAD,this.reload.bind(this))}reload(){this.setState(cn,{reload:!0})}resize(e,t){al.setSize(e,t)}get percent(){return this.preloadedPercent}}class E4{constructor(){this.world=new _4}async preload(){await this.world.preload()}async start(){await this.world.start()}async setState(e,t){await this.world.setState(e,t)}async play(){await qh.play()}async pause(){await qh.pause()}async resize(e,t){await qh.resize({w:e,h:t})}set scroll(e){this.world.scroll=e}get scroll(){return this.world.scroll}isPlaying(){return qh._isPlaying}set viewoffset(e){this.world.viewoffset=e}get viewoffset(){return this.world.viewoffset}getHotSpots(){return this.world.getHotSpots()}getPercentage(){return this.world.preloadedPercent}set zoomMoveFactor(e){this.world.zoomMoveFactor=e}get zoomMoveFactor(){return this.world.zoomMoveFactor}}const v4=Zt(n=>{const{$event:e}=n,t=n0(),i=new E4,s=()=>{const r=i?.getPercentage()||0;e.emit("preloading",r),r===100&&e.off("tick",s)};return n.hook("app:mounted",async()=>{e.on("tick",s),await i.preload(),await Xs(),i.start(),i.play(),await i.setState(ot.CLOUDS),i.resize(n.$resize.ww,n.$resize.wh),n.$event.on("resize",o=>{i.resize(o.ww,o.wh)}),i.scroll=.3,e.emit("loaded"),t.setFlag("loaded",!0);const r=n.$slides;Ir(()=>n.$resize.medium&&!n.$resize.small,o=>{i.viewoffset=o?-(n.$resize.ww*.135):0},{immediate:!0}),Ir(()=>r?.current,(o,a)=>{a===0&&o>0&&o!==r?.total?(i.setState(ot.INTERIOR),t.setFlag("interiors",!0)):o===0?(i.setState(ot.CITY,{force:!0}),t.setFlag("interiors",!1)):o===r?.total&&i.setState(ot.CLOUDS,{force:!0})})}),{provide:{gl:i}}}),y4=[g1,x1,VL,zL,WL,qL,jL,rN,oN,aN,EP,xP,SP,bP,MP,DP,mk,vk,bk,wk,Tk,OG,zG,v4],fT=(n="RouteProvider")=>bo({name:n,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const t=e.renderKey,i=e.route,s={};for(const r in e.route)Object.defineProperty(s,r,{get:()=>t===e.renderKey?e.route[r]:i[r],enumerable:!0});return go(ua,Gs(s)),()=>e.vnode?oi(e.vnode,{ref:e.vnodeRef}):e.vnode}}),x4=fT(),$x=new WeakMap,C4=bo({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(n,{attrs:e,slots:t,expose:i}){const s=Sn(),r=jn(),o=Xn(ua,null);let a;i({pageRef:r});const l=Xn(qS,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Gi().beforeEach(d)}n.pageKey&&Ir(()=>n.pageKey,(d,f)=>{d!==f&&s.callHook("page:loading:start")});let c=!1;{const d=Gi().beforeResolve(()=>{c=!1});Fu(()=>{d()})}return()=>oi(fb,{name:n.name,route:n.route,...e},{default:d=>{const f=b4(o,d.route,d.Component),p=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!p)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(f&&o&&(!l||l?.isCurrent(o)))return p?u:null;const A=hm(d,n.pageKey),g=w4(o,d.route,d.Component);!s.isHydrating&&a===A&&!g&&Xs(()=>{c=!0,s.callHook("page:loading:end")}),a=A;const m=!!(n.transition??d.route.meta.pageTransition??oE),E=m&&S4([n.transition,d.route.meta.pageTransition,oE,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",d.Component)}}]),_=n.keepalive??d.route.meta.keepalive??rB;return u=Ab(m&&E,BL(_,oi(e_,{suspensible:!0,onPending:()=>{m&&(s._runningTransition=!0),s.callHook("page:start",d.Component)},onResolve:()=>{Xs(()=>s.callHook("page:finish",d.Component).then(()=>{if(delete s._runningTransition,!c&&!g)return c=!0,s.callHook("page:loading:end")}).finally(h))}},{default:()=>{const v={key:A||void 0,vnode:t.default?I4(t.default,d):d.Component,route:d.route,renderKey:A||void 0,trackRootNodes:m,vnodeRef:r};if(!_)return oi(x4,v);const x=d.Component.type,S=x;let w=$x.get(S);return w||(w=fT(x.name||x.__name),$x.set(S,w)),oi(w,v)}}))).default(),u}})}});function S4(n){const e=[];for(const t of n)t&&e.push({...t,onAfterLeave:t.onAfterLeave?h_(t.onAfterLeave):void 0});return zS(...e)}function b4(n,e,t){if(!n)return!1;const i=e.matched.findIndex(s=>s.components?.default===t?.type);return!i||i===-1?!1:e.matched.slice(0,i).some((s,r)=>s.components?.default!==n.matched[r]?.components?.default)||t&&hm({route:e,Component:t})!==hm({route:n,Component:t})}function w4(n,e,t){return n?e.matched.findIndex(s=>s.components?.default===t?.type)<e.matched.length-1:!1}function I4(n,e){const t=n(e);return t.length===1?oi(t[0]):oi(zn,void 0,t)}const T4=bo({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(n,e){return()=>oi(oo[n.name],n.layoutProps,e.slots)}}),M4={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},D4=bo({name:"NuxtLayout",inheritAttrs:!1,props:M4,setup(n,e){const t=Sn(),i=Xn(ua),r=!i||i===Ef()?pb():i,o=sn(()=>{let h=Vt(n.name)??r?.meta.layout??"default";return h&&!(h in oo)&&n.fallback&&(h=Vt(n.fallback)),h}),a=wl();e.expose({layoutRef:a});const l=t.deferHydration();if(t.isHydrating){const h=t.hooks.hookOnce("app:error",l);Gi().beforeEach(h)}let u;return()=>{const h=o.value&&o.value in oo,c=r?.meta.layoutTransition??sB,d=u;return u=o.value,Ab(h&&c,{default:()=>oi(e_,{suspensible:!0,onResolve:()=>{Xs(l)}},{default:()=>oi(R4,{layoutProps:gS(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!n.name,isRenderingNewLayout:f=>f!==d&&f===o.value,hasTransition:!!c},e.slots)})}).default()}}}),R4=bo({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(n,e){const t=n.name;n.shouldProvide&&go(qS,{isCurrent:r=>t===(r.meta.layout??"default")});const i=Xn(ua);if(i&&i===Ef()){const r=pb(),o={};for(const a in r){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>n.isRenderingNewLayout(n.name)?r[l]:i[l]})}go(ua,Gs(o))}return()=>!t||typeof t=="string"&&!(t in oo)?e.slots.default?.():oi(T4,{key:t,layoutProps:n.layoutProps,name:t},e.slots)}}),B4=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},L4={};function N4(n,e){const t=C4,i=D4;return es(),ks(i,null,{default:zg(()=>[Kt(t)]),_:1})}const P4=B4(L4,[["render",N4]]),F4={__name:"nuxt-error-page",props:{error:Object},setup(n){const t=n.error;t.stack&&t.stack.split(`
`).splice(1).map(c=>({text:c.replace("webpack:/","").replace(".vue",".js").trim(),internal:c.includes("node_modules")&&!c.includes(".cache")||c.includes("internal")||c.includes("new Promise")})).map(c=>`<span class="stack${c.internal?" internal":""}">${c.text}</span>`).join(`
`);const i=Number(t.statusCode||500),s=i===404,r=t.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,h=s?HA(()=>fu(()=>import("./DMHYswdk.js"),__vite__mapDeps([7,1,8]),import.meta.url)):HA(()=>fu(()=>import("./DKJql9BM.js"),__vite__mapDeps([9,1,10]),import.meta.url));return(c,d)=>(es(),ks(Vt(h),DT(AS({statusCode:Vt(i),statusMessage:Vt(r),description:Vt(o),stack:Vt(a)})),null,16))}},k4={key:0},Jx={__name:"nuxt-root",setup(n){const e=()=>null,t=Sn(),i=t.deferHydration();if(t.isHydrating){const u=t.hooks.hookOnce("app:error",i);Gi().beforeEach(u)}const s=!1;go(ua,Ef()),t.hooks.callHookWith(u=>u.map(h=>h()),"vue:setup");const r=vf(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;VC((u,h,c)=>{if(t.hooks.callHook("vue:error",u,h,c).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return t.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(jS(u)&&(u.fatal||u.unhandled))return t.runWithContext(()=>zo(u)),!1});const l=!1;return(u,h)=>(es(),ks(e_,{onResolve:Vt(i)},{default:zg(()=>[Vt(o)?(es(),uD("div",k4)):Vt(r)?(es(),ks(Vt(F4),{key:1,error:Vt(r)},null,8,["error"])):Vt(l)?(es(),ks(Vt(e),{key:2,context:Vt(l)},null,8,["context"])):Vt(s)?(es(),ks(MM(Vt(s)),{key:3})):(es(),ks(Vt(P4),{key:4}))]),_:1},8,["onResolve"]))}};let Zx;{let n;Zx=async function(){if(n)return n;const i=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?ZD(Jx):JD(Jx),s=uB({vueApp:i});async function r(o){await s.callHook("app:error",o),s.payload.error||=ia(o)}i.config.errorHandler=r,s.hook("app:suspense:resolve",()=>{i.config.errorHandler===r&&(i.config.errorHandler=void 0)});try{await fB(s,y4)}catch(o){r(o)}try{await s.hooks.callHook("app:created",i),await s.hooks.callHook("app:beforeMount",i),i.mount(aB),await s.hooks.callHook("app:mounted",i),await Xs()}catch(o){r(o)}return i},n=Zx().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{e5 as $,LT as A,Kt as B,zg as C,mS as D,Ef as E,n0 as F,W4 as G,Vt as H,Ir as I,Xs as J,GC as K,qs as L,ks as M,ot as N,hf as O,kS as P,Z4 as Q,zn as R,Qu as S,bD as T,H4 as U,Q4 as V,G4 as W,uf as X,O4 as Y,z4 as Z,B4 as _,Sn as a,yP as a0,or as a1,j4 as a2,q4 as a3,VG as a4,QG as a5,C4 as a6,_a as a7,Lr as a8,go as a9,CL as aa,DT as ab,AS as ac,MM as ad,gS as ae,V4 as af,g_ as ag,K4 as ah,pB as ai,pf as aj,Xn as ak,$S as al,d_ as b,kE as c,bo as d,Fu as e,$4 as f,U4 as g,oi as h,CB as i,sN as j,sn as k,Ea as l,i_ as m,_f as n,Yg as o,DS as p,X4 as q,jn as r,wl as s,Bd as t,Gi as u,Y4 as v,bR as w,uD as x,es as y,pS as z};
