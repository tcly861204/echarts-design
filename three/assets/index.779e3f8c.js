import{S as we,P as ee,W as ye,D as dt,A as ie,av as xe,i as _e,aj as ft,V as E,aw as Ae,ax as Gt,ay as Ct,K as Y,az as Se,ak as ne,aA as lt,g as se,aB as ht,aC as re,aD as Ee,aE as gt,af as Bt,aF as Ce,b as D,a7 as oe,Y as Me,G as Tt,$ as Le,aG as ze,B as It,aH as Pe,as as F,l as X,Z as ct,C as Mt,ae,R as Vt,aI as _t,aJ as $e,M as Oe,aK as De,aL as Be}from"./three.module.c85d35f8.js";import{r as Lt,j as Te}from"./index.7442dff7.js";import{O as Ie}from"./OrbitControls.a97767ed.js";const zt=function(e,t){return Object.prototype.toString.call(t)===`[object ${e}]`},ut=function(e){return zt("Object",e)};function Pt(e,t=new Map){if(e!=null&&ut(e)){let i=t.get(e);if(i)return i;const n=Array.isArray(e);let s=n?[]:{};return i=t.set(e,s),n?e.forEach((r,o)=>{s[o]=Pt(r,i)}):Object.keys(e).forEach(r=>{ut(s[r])?s[r]=Pt(e[r],i):s[r]=e[r]}),s}else return e}function tt(e,t){e=Pt(e);for(let i in t)i in e&&ut(t[i])&&ut(e[i])?e[i]=tt(e[i],t[i]):e[i]=t[i];return e}const N=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var Z=function(){var e=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(l){l.preventDefault(),n(++e%t.children.length)},!1);function i(l){return t.appendChild(l.dom),l}function n(l){for(var u=0;u<t.children.length;u++)t.children[u].style.display=u===l?"block":"none";e=l}var s=(performance||Date).now(),r=s,o=0,a=i(new Z.Panel("FPS","#0ff","#002")),h=i(new Z.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var g=i(new Z.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:i,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){o++;var l=(performance||Date).now();if(h.update(l-s,200),l>=r+1e3&&(a.update(o*1e3/(l-r),100),r=l,o=0,g)){var u=performance.memory;g.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return l},update:function(){s=this.end()},domElement:t,setMode:n}};Z.Panel=function(e,t,i){var n=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,h=48*o,g=3*o,l=2*o,u=3*o,m=15*o,c=74*o,f=30*o,p=document.createElement("canvas");p.width=a,p.height=h,p.style.cssText="width:80px;height:48px";var d=p.getContext("2d");return d.font="bold "+9*o+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=i,d.fillRect(0,0,a,h),d.fillStyle=t,d.fillText(e,g,l),d.fillRect(u,m,c,f),d.fillStyle=i,d.globalAlpha=.9,d.fillRect(u,m,c,f),{dom:p,update:function(w,b){n=Math.min(n,w),s=Math.max(s,w),d.fillStyle=i,d.globalAlpha=1,d.fillRect(0,0,a,m),d.fillStyle=t,d.fillText(r(w)+" "+e+" ("+r(n)+"-"+r(s)+")",g,l),d.drawImage(p,u+o,m,c-o,f,u,m,c-o,f),d.fillRect(u+c-o,m,o,f),d.fillStyle=i,d.globalAlpha=.9,d.fillRect(u+c-o,m,o,r((1-w/b)*f))}}};var J=Object.freeze({Linear:Object.freeze({None:function(e){return e},In:function(e){return this.None(e)},Out:function(e){return this.None(e)},InOut:function(e){return this.None(e)}}),Quadratic:Object.freeze({In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}}),Cubic:Object.freeze({In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}),Quartic:Object.freeze({In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}}),Quintic:Object.freeze({In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}}),Sinusoidal:Object.freeze({In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.sin(Math.PI*(.5-e)))}}),Exponential:Object.freeze({In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}}),Circular:Object.freeze({In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}}),Elastic:Object.freeze({In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(e){var t=1.70158;return e===1?1:e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return e===0?0:--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}}),Bounce:Object.freeze({In:function(e){return 1-J.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?J.Bounce.In(e*2)*.5:J.Bounce.Out(e*2-1)*.5+.5}}),generatePow:function(e){return e===void 0&&(e=4),e=e<Number.EPSILON?Number.EPSILON:e,e=e>1e4?1e4:e,{In:function(t){return Math.pow(t,e)},Out:function(t){return 1-Math.pow(1-t,e)},InOut:function(t){return t<.5?Math.pow(t*2,e)/2:(1-Math.pow(2-t*2,e))/2+.5}}}}),K;typeof self>"u"&&typeof process<"u"&&process.hrtime?K=function(){var e=process.hrtime();return e[0]*1e3+e[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?K=self.performance.now.bind(self.performance):Date.now!==void 0?K=Date.now:K=function(){return new Date().getTime()};var q=K,le=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(i){return t._tweens[i]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,i){t===void 0&&(t=q()),i===void 0&&(i=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!i;r&&r.update(t,o)===!1&&!i&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),U={Linear:function(e,t){var i=e.length-1,n=i*t,s=Math.floor(n),r=U.Utils.Linear;return t<0?r(e[0],e[1],n):t>1?r(e[i],e[i-1],i-n):r(e[s],e[s+1>i?i:s+1],n-s)},Bezier:function(e,t){for(var i=0,n=e.length-1,s=Math.pow,r=U.Utils.Bernstein,o=0;o<=n;o++)i+=s(1-t,n-o)*s(t,o)*e[o]*r(n,o);return i},CatmullRom:function(e,t){var i=e.length-1,n=i*t,s=Math.floor(n),r=U.Utils.CatmullRom;return e[0]===e[i]?(t<0&&(s=Math.floor(n=i*(1+t))),r(e[(s-1+i)%i],e[s],e[(s+1)%i],e[(s+2)%i],n-s)):t<0?e[0]-(r(e[0],e[0],e[1],e[1],-n)-e[0]):t>1?e[i]-(r(e[i],e[i],e[i-1],e[i-1],n-i)-e[i]):r(e[s?s-1:0],e[s],e[i<s+1?i:s+1],e[i<s+2?i:s+2],n-s)},Utils:{Linear:function(e,t,i){return(t-e)*i+e},Bernstein:function(e,t){var i=U.Utils.Factorial;return i(e)/i(t)/i(e-t)},Factorial:function(){var e=[1];return function(t){var i=1;if(e[t])return e[t];for(var n=t;n>1;n--)i*=n;return e[t]=i,i}}(),CatmullRom:function(e,t,i,n,s){var r=(i-e)*.5,o=(n-t)*.5,a=s*s,h=s*a;return(2*t-2*i+r+o)*h+(-3*t+3*i-2*r-o)*a+r*s+t}}},kt=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),$t=new le,ke=function(){function e(t,i){i===void 0&&(i=$t),this._object=t,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=J.Linear.None,this._interpolationFunction=U.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=kt.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.to=function(t,i){return this._valuesEnd=Object.create(t),i!==void 0&&(this._duration=i),this},e.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t,this},e.prototype.start=function(t,i){if(t===void 0&&(t=q()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i),this},e.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},e.prototype._setupProperties=function(t,i,n,s,r){for(var o in n){var a=t[o],h=Array.isArray(a),g=h?"array":typeof a,l=!h&&Array.isArray(n[o]);if(!(g==="undefined"||g==="function")){if(l){var u=n[o];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,a)),i[o]===void 0&&(n[o]=[a].concat(u))}if((g==="object"||h)&&a&&!l){i[o]=h?[]:{};for(var m in a)i[o][m]=a[m];s[o]=h?[]:{},this._setupProperties(a,i[o],n[o],s[o],r)}else(typeof i[o]>"u"||r)&&(i[o]=a),h||(i[o]*=1),l?s[o]=n[o].slice().reverse():s[o]=i[o]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=q()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=q()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,i=this._chainedTweens.length;t<i;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return t===void 0&&(t=$t),this._group=t,this},e.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},e.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},e.prototype.easing=function(t){return t===void 0&&(t=J.Linear.None),this._easingFunction=t,this},e.prototype.interpolation=function(t){return t===void 0&&(t=U.Linear),this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,i){if(t===void 0&&(t=q()),i===void 0&&(i=!0),this._isPaused)return!0;var n,s,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>r)return!1;i&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(t-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var o=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,h=this._chainedTweens.length;a<h;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,i,n,s){for(var r in n)if(i[r]!==void 0){var o=i[r]||0,a=n[r],h=Array.isArray(t[r]),g=Array.isArray(a),l=!h&&g;l?t[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(t[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*s))}},e.prototype._handleRelativeValue=function(t,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?t+parseFloat(i):parseFloat(i)},e.prototype._swapEndStartRepeatValues=function(t){var i=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=i},e}(),Fe="19.0.0",Re=kt.nextId,I=$t,He=I.getAll.bind(I),je=I.removeAll.bind(I),Ue=I.add.bind(I),Ge=I.remove.bind(I),Ve=I.update.bind(I),pt={Easing:J,Group:le,Interpolation:U,now:q,Sequence:kt,nextId:Re,Tween:ke,VERSION:Fe,getAll:He,removeAll:je,add:Ue,remove:Ge,update:Ve};class We{constructor(t={}){let i={isFull:!0,container:null,width:window.innerWidth,height:window.innerHeight,bgColor:0,materialColor:16711680,controls:{visibel:!0,enableDamping:!0,autoRotate:!1,maxPolarAngle:Math.PI},statsVisibel:!0,axesVisibel:!0,axesHelperSize:250};this.options=tt(i,t),this.container=typeof this.options.container=="object"?this.options.container:document.querySelector(this.options.container),this.options.width=this.container.offsetWidth,this.options.height=this.container.offsetHeight,this.scene=new we,this.camera=null,this.renderer=null,this.mesh=null,this.animationStop=null,this.controls=null,this.stats=null,this.init()}init(){this.initStats(),this.initCamera(),this.initModel(),this.initRenderer(),this.initLight(),this.initAxes(),this.initControls()}async initModel(){}run(){this.loop()}loop(){this.animationStop=window.requestAnimationFrame(()=>{this.loop()}),this.renderer.render(this.scene,this.camera),this.options.controls.visibel&&this.controls.update(),this.options.statsVisibel&&this.stats.update(),pt.update()}initCamera(){let{width:t,height:i}=this.options,n=t/i;this.camera=new ee(45,n,.1,1500),this.camera.position.set(270.27,173.24,257.54),this.camera.lookAt(0,0,0)}initRenderer(){let{width:t,height:i,bgColor:n}=this.options,s=new ye({antialias:!0});s.setPixelRatio(window.devicePixelRatio),s.setSize(t,i),s.setClearColor(n,1),this.container.appendChild(s.domElement),this.renderer=s}initLight(){let t=new dt(16777215,.6);t.position.set(400,200,200);let i=new dt(16777215,.6);i.position.set(-400,-200,-300);let n=new ie(16777215,.5);this.addObject(t),this.addObject(i),this.addObject(n)}initStats(){if(!this.options.statsVisibel)return!1;this.stats=new Z,this.container.appendChild(this.stats.dom)}initControls(){try{let{controls:{enableDamping:t,autoRotate:i,visibel:n,maxPolarAngle:s}}=this.options;if(!n)return!1;this.controls=new Ie(this.camera,this.renderer.domElement),this.controls.maxPolarAngle=s,this.controls.autoRotate=i,this.controls.enableDamping=t}catch(t){console.log(t)}}initAxes(){if(!this.options.axesVisibel)return!1;var t=new xe(this.options.axesHelperSize);this.addObject(t)}empty(t){for(;t&&t.lastChild;)t.removeChild(t.lastChild)}addObject(t){zt("Array",t)?this.scene.add(...t):this.scene.add(t)}removeObject(t){zt("Array",t)?(t.map(i=>{i.geometry.dispose()}),this.scene.remove(...t)):(t.geometry.dispose(),this.scene.remove(t))}resize(){this.options.width=this.container.innerWidth||window.innerWidth,this.options.height=this.container.innerHeight||window.innerHeight,this.renderer.setSize(this.options.width,this.options.height);let t=this.options.width/this.options.height;this.camera.aspect=t,this.camera.updateProjectionMatrix()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class T{constructor(t,i,n,s,r="div"){this.parent=t,this.object=i,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),T.nextNameID=T.nextNameID||0,this.$name.id="lil-gui-name-"+ ++T.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ne extends T{constructor(t,i,n){super(t,i,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ot(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!i&&"#"+i}const Ye={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:Ot,toHexString:Ot},Q={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},qe={isPrimitive:!1,match:Array.isArray,fromHexString(e,t,i=1){const n=Q.fromHexString(e);t[0]=(n>>16&255)/255*i,t[1]=(n>>8&255)/255*i,t[2]=(255&n)/255*i},toHexString:([e,t,i],n=1)=>Q.toHexString(e*(n=255/n)<<16^t*n<<8^i*n<<0)},Xe={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){const n=Q.fromHexString(e);t.r=(n>>16&255)/255*i,t.g=(n>>8&255)/255*i,t.b=(255&n)/255*i},toHexString:({r:e,g:t,b:i},n=1)=>Q.toHexString(e*(n=255/n)<<16^t*n<<8^i*n<<0)},Je=[Ye,Q,qe,Xe];class Ke extends T{constructor(t,i,n,s){var r;super(t,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,Je.find(o=>o.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Ot(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class At extends T{constructor(t,i,n){super(t,i,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class Ze extends T{constructor(t,i,n,s,r,o){super(t,i,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=100*i+"%"}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=l=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+l),this.$input.value=this.getValue())};let i,n,s,r,o,a=!1;const h=l=>{if(a){const u=l.clientX-i,m=l.clientY-n;Math.abs(m)>5?(l.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&g()}if(!a){const u=l.clientY-s;o-=u*this._step*this._arrowKeyMultiplier(l),r+o>this._max?o=this._max-r:r+o<this._min&&(o=this._min-r),this._snapClampSetValue(r+o)}s=l.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",g)};this.$input.addEventListener("input",()=>{const l=parseFloat(this.$input.value);isNaN(l)||this.setValue(this._clamp(l))}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),t(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),t(this._step*this._arrowKeyMultiplier(l)*-1))}),this.$input.addEventListener("wheel",l=>{this._inputFocused&&(l.preventDefault(),t(this._step*this._normalizeMouseWheel(l)))}),this.$input.addEventListener("mousedown",l=>{i=l.clientX,n=s=l.clientY,a=!0,r=this.getValue(),o=0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",g)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=m=>{const c=this.$slider.getBoundingClientRect();let f=(p=m,d=c.left,w=c.right,b=this._min,_=this._max,(p-d)/(w-d)*(_-b)+b);var p,d,w,b,_;this._snapClampSetValue(f)},i=m=>{t(m.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",n)};let s,r,o=!1;const a=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},h=m=>{if(o){const c=m.touches[0].clientX-s,f=m.touches[0].clientY-r;Math.abs(c)>Math.abs(f)?a(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",g))}else m.preventDefault(),t(m.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",g)},l=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",m=>{m.touches.length>1||(this._hasScrollBar?(s=m.touches[0].clientX,r=m.touches[0].clientY,o=!0):a(m),window.addEventListener("touchmove",h),window.addEventListener("touchend",g))}),this.$slider.addEventListener("wheel",m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const c=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+c),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(l,400)})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+i,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Qe extends T{constructor(t,i,n,s){super(t,i,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?t:this._names[i],this}}class ti extends T{constructor(t,i,n){super(t,i,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Wt=!1;class Ft{constructor({parent:t,autoPlace:i=t===void 0,container:n,width:s,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{h.code!=="Enter"&&h.code!=="Space"||(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Wt&&o&&(function(h){const g=document.createElement("style");g.innerHTML=h;const l=document.querySelector("head link[rel=stylesheet], head style");l?document.head.insertBefore(g,l):document.head.appendChild(g)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Wt=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,i,n,s,r){if(Object(n)===n)return new Qe(this,t,i,n);const o=t[i];switch(typeof o){case"number":return new Ze(this,t,i,n,s,r);case"boolean":return new Ne(this,t,i);case"string":return new ti(this,t,i);case"function":return new At(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,o)}addColor(t,i,n=1){return new Ke(this,t,i,n)}addFolder(t){return new Ft({parent:this,title:t})}load(t,i=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof At||n._name in t.controllers&&n.load(t.controllers[n._name])}),i&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof At)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const ei=()=>{const[e,t]=Lt.exports.useState(0);return{progress:e,requestData:async n=>{try{let r=await new _e().loadAsync(n,o=>{let{loaded:a,total:h}=o;t((a/h*100).toFixed(0))});return r=JSON.parse(r),r}catch(s){console.log(s)}}}},Nt=new ft,rt=new E;class he extends Ae{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Gt(t,3)),this.setAttribute("uv",new Gt(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,n=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),n.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const n=new Ct(i,6,1);return this.setAttribute("instanceStart",new Y(n,3,0)),this.setAttribute("instanceEnd",new Y(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const n=new Ct(i,6,1);return this.setAttribute("instanceColorStart",new Y(n,3,0)),this.setAttribute("instanceColorEnd",new Y(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Se(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ft);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Nt.setFromBufferAttribute(i),this.boundingBox.union(Nt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ne),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rt.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rt)),rt.fromBufferAttribute(i,r),s=Math.max(s,n.distanceToSquared(rt));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}lt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new se(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ht.line={uniforms:re.merge([lt.common,lt.fog,lt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Rt extends Ee{constructor(t){super({type:"LineMaterial",uniforms:re.clone(ht.line.uniforms),vertexShader:ht.line.vertexShader,fragmentShader:ht.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(i){this.uniforms.diffuse.value=i}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(i){i===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(i){this.uniforms.linewidth.value=i}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(i){Boolean(i)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),i===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(i){this.uniforms.dashScale.value=i}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(i){this.uniforms.dashSize.value=i}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(i){this.uniforms.dashOffset.value=i}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(i){this.uniforms.gapSize.value=i}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(i){this.uniforms.opacity.value=i}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(i){this.uniforms.resolution.value.copy(i)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(i){Boolean(i)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),i===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const Yt=new E,qt=new E,C=new gt,M=new gt,$=new gt,St=new E,Et=new Bt,L=new Ce,Xt=new E,ot=new ft,at=new ne,O=new gt;let B,Dt,ce,G;function Jt(e,t,i){return O.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),O.multiplyScalar(1/O.w),O.x=G/i.width,O.y=G/i.height,O.applyMatrix4(e.projectionMatrixInverse),O.multiplyScalar(1/O.w),Math.abs(Math.max(O.x,O.y))}function ii(e,t){for(let i=0,n=Dt.count;i<n;i++){L.start.fromBufferAttribute(Dt,i),L.end.fromBufferAttribute(ce,i);const s=new E,r=new E;B.distanceSqToSegment(L.start,L.end,r,s),r.distanceTo(s)<G*.5&&t.push({point:r,pointOnLine:s,distance:B.origin.distanceTo(r),object:e,face:null,faceIndex:i,uv:null,uv2:null})}}function ni(e,t,i){const n=t.projectionMatrix,r=e.material.resolution,o=e.matrixWorld,a=e.geometry,h=a.attributes.instanceStart,g=a.attributes.instanceEnd,l=-t.near;B.at(1,$),$.w=1,$.applyMatrix4(t.matrixWorldInverse),$.applyMatrix4(n),$.multiplyScalar(1/$.w),$.x*=r.x/2,$.y*=r.y/2,$.z=0,St.copy($),Et.multiplyMatrices(t.matrixWorldInverse,o);for(let u=0,m=h.count;u<m;u++){if(C.fromBufferAttribute(h,u),M.fromBufferAttribute(g,u),C.w=1,M.w=1,C.applyMatrix4(Et),M.applyMatrix4(Et),C.z>l&&M.z>l)continue;if(C.z>l){const b=C.z-M.z,_=(C.z-l)/b;C.lerp(M,_)}else if(M.z>l){const b=M.z-C.z,_=(M.z-l)/b;M.lerp(C,_)}C.applyMatrix4(n),M.applyMatrix4(n),C.multiplyScalar(1/C.w),M.multiplyScalar(1/M.w),C.x*=r.x/2,C.y*=r.y/2,M.x*=r.x/2,M.y*=r.y/2,L.start.copy(C),L.start.z=0,L.end.copy(M),L.end.z=0;const f=L.closestPointToPointParameter(St,!0);L.at(f,Xt);const p=oe.lerp(C.z,M.z,f),d=p>=-1&&p<=1,w=St.distanceTo(Xt)<G*.5;if(d&&w){L.start.fromBufferAttribute(h,u),L.end.fromBufferAttribute(g,u),L.start.applyMatrix4(o),L.end.applyMatrix4(o);const b=new E,_=new E;B.distanceSqToSegment(L.start,L.end,_,b),i.push({point:_,pointOnLine:b,distance:B.origin.distanceTo(_),object:e,face:null,faceIndex:u,uv:null,uv2:null})}}}class si extends D{constructor(t=new he,i=new Rt({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*i.count);for(let o=0,a=0,h=i.count;o<h;o++,a+=2)Yt.fromBufferAttribute(i,o),qt.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Yt.distanceTo(qt);const r=new Ct(s,2,1);return t.setAttribute("instanceDistanceStart",new Y(r,1,0)),t.setAttribute("instanceDistanceEnd",new Y(r,1,1)),this}raycast(t,i){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;B=t.ray;const o=this.matrixWorld,a=this.geometry,h=this.material;G=h.linewidth+r,Dt=a.attributes.instanceStart,ce=a.attributes.instanceEnd,a.boundingSphere===null&&a.computeBoundingSphere(),at.copy(a.boundingSphere).applyMatrix4(o);let g;if(n)g=G*.5;else{const u=Math.max(s.near,at.distanceToPoint(B.origin));g=Jt(s,u,h.resolution)}if(at.radius+=g,B.intersectsSphere(at)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ot.copy(a.boundingBox).applyMatrix4(o);let l;if(n)l=G*.5;else{const u=Math.max(s.near,ot.distanceToPoint(B.origin));l=Jt(s,u,h.resolution)}ot.expandByScalar(l),B.intersectsBox(ot)!==!1&&(n?ii(this,i):ni(this,s,i))}}class de extends he{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,n=new Float32Array(2*i);for(let s=0;s<i;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const i=t.length-3,n=new Float32Array(2*i);for(let s=0;s<i;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class ri extends si{constructor(t=new de,i=new Rt({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}const oi=()=>{const e=(i,n={},s="LineLoop")=>{let r={color:65535};r=tt(r,n);let o=new Me(r);s==="Line2"&&(o=new Rt(r));let a=i.features,h=new Tt;for(let g=0;g<a.length;g++)a[g].geometry.coordinates.forEach((u,m)=>{const c=[];if(s==="Line2"){u[0].forEach(p=>{c.push(p[0],p[1],0)});let f=t(c,o,s);h.add(f)}else{u[0].forEach(p=>{c.push(new E(p[0],p[1],0))});let f=t(c,o,s);h.add(f)}});return h},t=(i,n,s="LineLoop")=>{let r=null;if(s==="Line2"){const o=new de;o.setPositions(i),r=new ri(o,n),r.name="countryLine2",r.computeLineDistances()}else{const o=new Le;o.setFromPoints(i),r=new ze[s](o,n),r.name="countryLine"}return r};return{createCountryFlatLine:e}},ai=()=>{const e=(s,r)=>{var o=s,a=r,h=o*2003750834e-2/180,g=Math.log(Math.tan((90+a)*Math.PI/360))/(Math.PI/180);return g=g*2003750834e-2/180,{x:h,y:g}},t=(s,r,o)=>{var a=r*Math.PI/180,h=o*Math.PI/180;a=-a;var g=s*Math.cos(h)*Math.cos(a),l=s*Math.sin(h),u=s*Math.cos(h)*Math.sin(a);return{x:g,y:l,z:u}};return{geoMercatorCoord:e,geoSphereCoord:t,getBoundingBox:s=>{var r=new ft;r.expandByObject(s);var o=new E;r.getSize(o);var a=new E;return r.getCenter(a),{box3:r,center:a,size:o}},setMeshQuaternion:(s,r,o,a)=>{const{x:h,y:g,z:l}=t(r,o,a);s.position.set(h,g,l);let u=new E(h,g,l).normalize(),m=new E(0,0,1);return s.quaternion.setFromUnitVectors(m,u),s}}},li=()=>({transfromGeoJSON:i=>{let n=i.features;for(let s=0;s<n.length;s++){const r=n[s];r.geometry.type==="Polygon"&&(r.geometry.coordinates=[r.geometry.coordinates])}return i},transformGeoRoad:i=>{let n=i.features;for(let s=0;s<n.length;s++){const r=n[s];r.geometry.type==="LineString"?r.geometry.coordinates=[[r.geometry.coordinates]]:r.geometry.coordinates=[r.geometry.coordinates]}return i}});function hi(e){let t={pointTextureUrl:"public/sichuan/assets/texture/\u6807\u6CE8.png",lightHaloTextureUrl:"public/sichuan/assets/texture/\u6807\u6CE8\u5149\u5708.png",lightPillarUrl:"public/sichuan/assets/texture/\u5149\u67F1.png",scaleFactor:1};t=tt(t,e);const i=new It,n=new Pe;let s=window.width,r=window.height,o=null;const a=()=>{const c=new F(1,1),f=new X({map:i.load(t.pointTextureUrl),color:65535,side:ct,transparent:!0,depthWrite:!1});let p=new D(c,f);p.name="createPointMesh";const d=.15*t.scaleFactor;return p.scale.set(d,d,d),p},h=()=>{const c=new F(1,1),f=new X({map:i.load(t.lightHaloTextureUrl),color:65535,side:ct,opacity:0,transparent:!0,depthWrite:!1});let p=new D(c,f);p.name="createLightHalo";const d=.3*t.scaleFactor;p.scale.set(d,d,d);const w=N(0,2e3);return p.tween1=new pt.Tween({scale:d,opacity:0}).to({scale:d*1.5,opacity:1},1e3).delay(w).onUpdate(b=>{let{scale:_,opacity:z}=b;p.scale.set(_,_,_),p.material.opacity=z}),p.tween2=new pt.Tween({scale:d*1.5,opacity:1}).to({scale:d*2,opacity:0},1e3).onUpdate(b=>{let{scale:_,opacity:z}=b;p.scale.set(_,_,_),p.material.opacity=z}),p.tween1.chain(p.tween2),p.tween2.chain(p.tween1),p.tween1.start(),p},g=(c,f,p=1)=>{let d=new Tt;const w=p,b=new F(w/6.219,w);b.rotateX(Math.PI/2),b.translate(0,0,w/2);const _=new X({map:i.load(t.lightPillarUrl),color:65535,transparent:!0,depthWrite:!1,side:ct});let z=new D(b,_);z.name="createLightPillar01";let R=z.clone();R.name="createLightPillar02",R.rotateZ(Math.PI/2);const mt=a(),vt=h();return d.add(mt,vt,z,R),d.position.set(c,f,0),d},l=(c,f)=>{c.children.forEach(p=>{p.material.color=new Mt(f)})},u=(c,f,p,d)=>{o||(o=f.getBoundingClientRect(),s=f.offsetWidth,r=f.offsetHeight);var w=(c.clientX-o.left)/s*2-1,b=-((c.clientY-o.top)/r)*2+1;n.setFromCamera(new se(w,b),p);var _=n.intersectObjects(d);return _};return{createLightPillar:g,setLightPillarColor:l,chooseLightPillar:(c,f,p,d)=>{c.preventDefault();let w=u(c,f,p,d);return w.length>0?w[0]:null}}}const ci=()=>{let e=new It;return{createSequenceFrame:i=>{let n=tt({image:"",width:200,height:200,frame:60,column:10,row:6,speed:.5},i),s=new F(n.width,n.height),r=e.load(n.image);r.repeat.set(1/n.column,1/n.row);let o=new X({map:r,transparent:!0,opacity:1,side:ct,depthWrite:!1}),a=new D(s,o),h=0,g=0,l=0;return a.updateSequenceFrame=u=>{l+=n.speed,l>n.frame&&(l=0),g=n.column-Math.floor(l%n.column)-1,h=Math.floor(l/n.column%n.row),r.offset.x=g/n.column,r.offset.y=h/n.row},a}}};class di extends ae{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof Element&&i.element.parentNode!==null&&i.element.parentNode.removeChild(i.element)})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this}}const W=new E,Kt=new Bt,Zt=new Bt,Qt=new E,te=new E;class ui{constructor(t={}){const i=this;let n,s,r,o;const a={objects:new WeakMap},h=t.element!==void 0?t.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h,this.getSize=function(){return{width:n,height:s}},this.render=function(c,f){c.autoUpdate===!0&&c.updateMatrixWorld(),f.parent===null&&f.updateMatrixWorld(),Kt.copy(f.matrixWorldInverse),Zt.multiplyMatrices(f.projectionMatrix,Kt),g(c,c,f),m(c)},this.setSize=function(c,f){n=c,s=f,r=n/2,o=s/2,h.style.width=c+"px",h.style.height=f+"px"};function g(c,f,p){if(c.isCSS2DObject){W.setFromMatrixPosition(c.matrixWorld),W.applyMatrix4(Zt);const d=c.visible===!0&&W.z>=-1&&W.z<=1&&c.layers.test(p.layers)===!0;if(c.element.style.display=d===!0?"":"none",d===!0){c.onBeforeRender(i,f,p);const b=c.element;b.style.transform="translate(-50%,-50%) translate("+(W.x*r+r)+"px,"+(-W.y*o+o)+"px)",b.parentNode!==h&&h.appendChild(b),c.onAfterRender(i,f,p)}const w={distanceToCameraSquared:l(p,c)};a.objects.set(c,w)}for(let d=0,w=c.children.length;d<w;d++)g(c.children[d],f,p)}function l(c,f){return Qt.setFromMatrixPosition(c.matrixWorld),te.setFromMatrixPosition(f.matrixWorld),Qt.distanceToSquared(te)}function u(c){const f=[];return c.traverse(function(p){p.isCSS2DObject&&f.push(p)}),f}function m(c){const f=u(c).sort(function(d,w){if(d.renderOrder!==w.renderOrder)return w.renderOrder-d.renderOrder;const b=a.objects.get(d).distanceToCameraSquared,_=a.objects.get(w).distanceToCameraSquared;return b-_}),p=f.length;for(let d=0,w=f.length;d<w;d++)f[d].element.style.zIndex=p-d}}}const pi=()=>({initCSS2DRender:(i,n)=>{let{width:s,height:r}=i,o=new ui;return o.setSize(s,r),o.domElement.style.position="absolute",o.domElement.style.left="0px",o.domElement.style.top="0px",o.domElement.style.pointerEvents="none",n.appendChild(o.domElement),o},create2DTag:(i="",n="")=>{let s=document.createElement("div");s.innerHTML=i,s.className=n,s.style.pointerEvents="none",s.style.visibility="hidden",s.style.position="absolute",n||(s.style.padding="10px",s.style.color="#fff",s.style.fontSize="12px",s.style.textAlign="center",s.style.background="rgba(0,0,0,0.6)",s.style.borderRadius="4px");let r=new di(s);return r.show=(o,a)=>{r.element.innerHTML=o,r.element.style.visibility="visible",r.position.copy(a)},r.hide=()=>{r.element.style.visibility="hidden"},r}});let k=[106.59893798828125,26.918846130371094],fi=.1;const bi=()=>{const e=Lt.exports.useRef(null);let t=null;const i=()=>{t.resize()},{requestData:n}=ei(),{transfromGeoJSON:s}=li(),{getBoundingBox:r}=ai(),{createCountryFlatLine:o}=oi(),{initCSS2DRender:a,create2DTag:h}=pi(),{createLightPillar:g}=hi({scaleFactor:1.2}),{createSequenceFrame:l}=ci(),u=new It,m=u.load("public/sichuan/data/map/gz-map.jpg"),c=u.load("public/sichuan/data/map/gz-map-fx.jpg"),f=u.load("public/sichuan/data/map/rotatingAperture.png"),p=u.load("public/sichuan/data/map/rotating-point2.png"),d=u.load("public/sichuan/data/map/circle-point.png"),w=u.load("public/sichuan/data/map/scene-bg2.png");m.wrapS=c.wrapS=Vt,m.wrapT=c.wrapT=Vt,m.flipY=c.flipY=!1,m.rotation=c.rotation=oe.degToRad(45);const b=.128;m.repeat.set(b,b),c.repeat.set(b,b);const _=new _t({map:m,color:11857642,combine:$e,transparent:!0,opacity:1}),z=new Oe({color:1191972,transparent:!0,opacity:.9}),R=-.2,mt=()=>{const A=new Ft,S={topColor:"#b4eeea",sideColor:"#123024",scale:.1};A.addColor(S,"topColor").onChange(y=>{_.color=new Mt(y)}),A.addColor(S,"sideColor").onChange(y=>{z.color=new Mt(y)}),A.add(S,"scale",0,1).onChange(y=>{m.repeat.set(y,y),c.repeat.set(y,y)})},vt=(A,S)=>{let y=new F(S,S),v=new X({map:f,transparent:!0,opacity:1,depthTest:!0}),x=new D(y,v);return x.position.set(...k,0),x.scale.set(1.1,1.1,1.1),A.add(x),x},ue=(A,S)=>{let y=new F(S,S),v=new X({map:p,transparent:!0,opacity:1,depthTest:!0}),x=new D(y,v);return x.position.set(...k,R-.02),x.scale.set(1.1,1.1,1.1),A.add(x),x},pe=(A,S)=>{let y=new F(S*4,S*4),v=new _t({color:16777215,map:w,transparent:!0,opacity:1,depthTest:!0}),x=new D(y,v);x.position.set(...k,R-.2),A.add(x)},fe=(A,S)=>{let y=new F(S,S),v=new _t({color:65535,map:d,transparent:!0,opacity:1}),x=new D(y,v);x.position.set(...k,R-.1),A.add(x)},ge=(A,S)=>{let{center:y,size:v}=S,x=y.x-v.x,P=y.x+v.x,et=y.y-v.y,Ht=y.y+v.y,it=-6,bt=6,V=[];for(let nt=0;nt<16;nt++){const H=l({image:"public/sichuan/data/map/\u4E0A\u5347\u7C92\u5B501.png",width:180,height:189,frame:9,column:9,row:1,speed:.5});let j=N(5,10)/1e3;H.scale.set(j,j,j),H.rotation.x=Math.PI/2;let wt=N(x,P),yt=N(et,Ht),xt=N(it,bt);H.position.set(wt,yt,xt),V.push(H)}return A.add(...V),V},me=(A,S)=>{let y=o(A,{color:16777215,linewidth:.0015,transparent:!0,depthTest:!1},"Line2");y.position.z+=.305;let v=o(A,{color:6421501,linewidth:.002,depthTest:!1},"Line2");v.position.z-=.1905,S.add(y),S.add(v)},ve=(A,S)=>{let y=.4+N(1,5)/5,v=A.centroid||A.center,x=g(...v,y);x.position.z=.31,S.add(x)},be=(A,S)=>{var y=h("\u6807\u7B7E","map-32-label");S.add(y);let v=A.center;y.show(A.name,new E(...v,.31))};return Lt.exports.useEffect(()=>((async()=>{let A=await n("public/sichuan/data/map/sichuan.json");A=s(A);class S extends We{constructor(v){super(v)}initCamera(){let{width:v,height:x}=this.options,P=v/x;this.camera=new ee(45,P,.001,9e7),this.camera.up.set(0,0,1),this.camera.position.set(102.97777217804006,17.660260562607277,8.029548316292933),this.camera.lookAt(...k,0)}initModel(){try{this.mapGroup=new Tt,this.css2dRender=a(this.options,this.container),A.features.forEach((et,Ht)=>{const it=new ae,bt=et.geometry.coordinates,V=et.properties;bt.forEach(nt=>{nt.forEach(H=>{const j=new De;for(let st=0;st<H.length;st++){let[jt,Ut]=H[st];st===0&&j.moveTo(jt,Ut),j.lineTo(jt,Ut)}const wt={depth:fi,bevelEnabled:!0,bevelSegments:1,bevelThickness:.1},yt=new Be(j,wt),xt=new D(yt,[_,z]);it.add(xt)})}),this.mapGroup.add(it),ve(V,this.mapGroup),be(V,this.scene)}),me(A,this.mapGroup);let v=r(this.mapGroup);k=[v.center.x,v.center.y];let{size:x}=v,P=x.x<x.y?x.y+1:x.x+1;this.rotatingApertureMesh=vt(this.scene,P),this.rotatingPointMesh=ue(this.scene,P-2),fe(this.scene,P),pe(this.scene,P),this.scene.add(this.mapGroup),this.particleArr=ge(this.scene,v),mt()}catch(v){console.log(v)}}getDataRenderMap(){}destroy(){}initControls(){super.initControls(),this.controls.target=new E(...k,0)}initLight(){let v=new dt(8058111,1);v.position.set(...k,30);let x=new dt(8058111,1);x.position.set(...k,30);let P=new ie(8058111,1);this.addObject(v),this.addObject(x),this.addObject(P)}initRenderer(){super.initRenderer()}loop(){if(this.animationStop=window.requestAnimationFrame(()=>{this.loop()}),this.renderer.render(this.scene,this.camera),this.options.controls.visibel&&this.controls&&this.controls.update(),this.options.statsVisibel&&this.stats.update(),this.rotatingApertureMesh&&(this.rotatingApertureMesh.rotation.z+=5e-4),this.rotatingPointMesh&&(this.rotatingPointMesh.rotation.z-=5e-4),this.css2dRender&&this.css2dRender.render(this.scene,this.camera),this.particleArr.length)for(let v=0;v<this.particleArr.length;v++)this.particleArr[v].updateSequenceFrame(),this.particleArr[v].position.z+=.01,this.particleArr[v].position.z>=6&&(this.particleArr[v].position.z=-6);pt.update()}resize(){super.resize(),this.renderer.render(this.scene,this.camera),this.renderer.setPixelRatio(window.devicePixelRatio),this.css2dRender&&this.css2dRender.setSize(this.options.width,this.options.height)}}t=new S({container:e.current,axesVisibel:!1,statsVisibel:!1,controls:{enableDamping:!0,maxPolarAngle:Math.PI/2*.98}}),t.run(),window.addEventListener("resize",i,!1)})(),()=>{window.removeEventListener("resize",i,!1)}),[]),Te("div",{ref:e,style:{width:"100vw",height:"100vh",fontSize:"12px",color:"#fff"}})};export{bi as default};
