/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wr="141",Xu={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ju={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ic=0,qa=1,Dc=2,Yu=3,Zu=0,Co=1,Fc=2,Fi=3,Qn=0,Tt=1,jn=2,Nc=1,$u=2,an=0,Jn=1,Xa=2,Ja=3,Ya=4,zc=5,Gn=100,Bc=101,Oc=102,Za=103,$a=104,Uc=200,kc=201,Vc=202,Gc=203,Lo=204,Po=205,Hc=206,Wc=207,qc=208,Xc=209,Jc=210,Yc=0,Zc=1,$c=2,Or=3,Kc=4,Qc=5,jc=6,eh=7,Bs=0,th=1,nh=2,Jt=0,ih=1,sh=2,rh=3,ah=4,oh=5,qr=300,bn=301,wn=302,vs=303,Ms=304,ts=306,bs=1e3,_t=1001,ws=1002,at=1003,Ur=1004,Ku=1004,kr=1005,Qu=1005,nt=1006,Ro=1007,ju=1007,oi=1008,ed=1008,Sn=1009,lh=1010,ch=1011,Io=1012,hh=1013,yn=1014,rn=1015,ki=1016,uh=1017,dh=1018,Yn=1020,fh=1021,ph=1022,At=1023,mh=1024,gh=1025,Mn=1026,ei=1027,xh=1028,_h=1029,yh=1030,vh=1031,Mh=1033,Pr=33776,Rr=33777,Ir=33778,Dr=33779,Ka=35840,Qa=35841,ja=35842,eo=35843,bh=36196,to=37492,no=37496,io=37808,so=37809,ro=37810,ao=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,xo=37821,_o=36492,wh=2200,Sh=2201,Ah=2202,Ss=2300,As=2301,Fr=2302,Wn=2400,qn=2401,Ts=2402,Xr=2500,Do=2501,td=0,nd=1,id=2,An=3e3,Ke=3001,Th=3200,Eh=3201,li=0,Ch=1,sd="",Xt="srgb",vn="srgb-linear",rd=0,Nr=7680,ad=7681,od=7682,ld=7683,cd=34055,hd=34056,ud=5386,dd=512,fd=513,pd=514,md=515,gd=516,xd=517,_d=518,Lh=519,Vr=35044,yd=35048,vd=35040,Md=35045,bd=35049,wd=35041,Sd=35046,Ad=35050,Td=35042,Ed="100",yo="300 es",Gr=1035;class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const ut=[];for(let o=0;o<256;o++)ut[o]=(o<16?"0":"")+o.toString(16);let ll=1234567;const Zn=Math.PI/180,Es=180/Math.PI;function Et(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[o&255]+ut[o>>8&255]+ut[o>>16&255]+ut[o>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function it(o,e,t){return Math.max(e,Math.min(t,o))}function Fo(o,e){return(o%e+e)%e}function Cd(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Ld(o,e,t){return o!==e?(t-o)/(e-o):0}function xs(o,e,t){return(1-t)*o+t*e}function Pd(o,e,t,n){return xs(o,e,1-Math.exp(-t*n))}function Rd(o,e=1){return e-Math.abs(Fo(o,e*2)-e)}function Id(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Dd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Fd(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Nd(o,e){return o+Math.random()*(e-o)}function zd(o){return o*(.5-Math.random())}function Bd(o){o!==void 0&&(ll=o);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Od(o){return o*Zn}function Ud(o){return o*Es}function vo(o){return(o&o-1)===0&&o!==0}function Ph(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Hr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function kd(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vd(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gd(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Hd=Object.freeze({__proto__:null,DEG2RAD:Zn,RAD2DEG:Es,generateUUID:Et,clamp:it,euclideanModulo:Fo,mapLinear:Cd,inverseLerp:Ld,lerp:xs,damp:Pd,pingpong:Rd,smoothstep:Id,smootherstep:Dd,randInt:Fd,randFloat:Nd,randFloatSpread:zd,seededRandom:Bd,degToRad:Od,radToDeg:Ud,isPowerOfTwo:vo,ceilPowerOfTwo:Ph,floorPowerOfTwo:Hr,setQuaternionFromProperEuler:kd,normalize:Gd,denormalize:Vd});class ${constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],p=i[0],m=i[3],x=i[6],_=i[1],M=i[4],y=i[7],w=i[2],T=i[5],L=i[8];return s[0]=r*p+a*_+l*w,s[3]=r*m+a*M+l*T,s[6]=r*x+a*y+l*L,s[1]=c*p+h*_+u*w,s[4]=c*m+h*M+u*T,s[7]=c*x+h*y+u*L,s[2]=d*p+f*_+g*w,s[5]=d*m+f*M+g*T,s[8]=d*x+f*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*r)*p,e[3]=d*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*r+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*r+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Rh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}const Wd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ni(o,e){return new Wd[o](e)}function Cs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $n(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ha={[Xt]:{[vn]:$n},[vn]:{[Xt]:zr}},Rt={legacyMode:!0,get workingColorSpace(){return vn},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(ha[e]&&ha[e][t]!==void 0){const n=ha[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},Ft={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function ua(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Ws(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vn){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vn){if(e=Fo(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ua(r,s,e+1/3),this.g=ua(r,s,e),this.b=ua(r,s,e-1/3)}return Rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Rt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Rt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Rt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Rt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Xt){const n=Ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Rt.fromWorkingColorSpace(Ws(this,ot),e),it(ot.r*255,0,255)<<16^it(ot.g*255,0,255)<<8^it(ot.b*255,0,255)<<0}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vn){Rt.fromWorkingColorSpace(Ws(this,ot),t);const n=ot.r,i=ot.g,s=ot.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vn){return Rt.fromWorkingColorSpace(Ws(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Xt){return Rt.fromWorkingColorSpace(Ws(this,ot),e),e!==Xt?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=n,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Hs);const n=xs(Ft.h,Hs.h,t),i=xs(Ft.s,Hs.s,t),s=xs(Ft.l,Hs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ue.NAMES=Ih;let gi;class No{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=Cs("canvas")),gi.width=e.width,gi.height=e.height;const n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=$n(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Xn{constructor(e=null){this.isSource=!0,this.uuid=Et(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(da(i[r].image)):s.push(da(i[r]))}else s=da(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function da(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?No.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qd=0;class lt extends Ln{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,n=_t,i=_t,s=nt,r=oi,a=At,l=Sn,c=1,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Et(),this.name="",this.source=new Xn(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case _t:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case _t:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=qr;class Xe{constructor(e=0,t=0,n=0,i=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],p=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(f+1)/2,w=(x+1)/2,T=(h+d)/4,L=(u+p)/4,v=(g+m)/4;return M>y&&M>w?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=L/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=v/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=L/s,i=v/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-p)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ct extends Ln{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=at,this.minFilter=at,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xd extends Ct{constructor(e,t,n){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Os(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Jr extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=at,this.minFilter=at,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jd extends Ct{constructor(e,t,n){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Jr(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Yd extends Ct{constructor(e,t,n,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=s.clone(),this.texture[r].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class bt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],p=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==f||h!==g){let m=1-a;const x=l*d+c*f+h*g+u*p,_=x>=0?1:-1,M=1-x*x;if(M>Number.EPSILON){const w=Math.sqrt(M),T=Math.atan2(w,x*_);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*_;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+p*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-r*t,d=-s*t-r*n-a*i;return this.x=c*l+d*-s+h*-a-u*-r,this.y=h*l+d*-r+u*-s-c*-a,this.z=u*l+d*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new S,cl=new bt;class ci{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)Dn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Dn)}else n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox),pa.applyMatrix4(e.matrixWorld),this.union(pa);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),qs.subVectors(this.max,ls),xi.subVectors(e.a,ls),_i.subVectors(e.b,ls),yi.subVectors(e.c,ls),hn.subVectors(_i,xi),un.subVectors(yi,_i),Fn.subVectors(xi,yi);let t=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Fn.z,Fn.y,hn.z,0,-hn.x,un.z,0,-un.x,Fn.z,0,-Fn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Fn.y,Fn.x,0];return!ma(t,xi,_i,yi,qs)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,xi,_i,yi,qs))?!1:(Xs.crossVectors(hn,un),t=[Xs.x,Xs.y,Xs.z],ma(t,xi,_i,yi,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Dn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new S,new S,new S,new S,new S,new S,new S,new S],Dn=new S,pa=new ci,xi=new S,_i=new S,yi=new S,hn=new S,un=new S,Fn=new S,ls=new S,qs=new S,Xs=new S,Nn=new S;function ma(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Nn.fromArray(o,s);const a=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Zd=new ci,hl=new S,Js=new S,ga=new S;class hi{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ga.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Js.set(0,0,1).multiplyScalar(e.radius):Js.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(hl.copy(e.center).add(Js)),this.expandByPoint(hl.copy(e.center).sub(Js)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new S,xa=new S,Ys=new S,dn=new S,_a=new S,Zs=new S,ya=new S;class Us{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xa.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(xa);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ys),a=dn.dot(this.direction),l=-dn.dot(Ys),c=dn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ys).multiplyScalar(d).add(xa),f}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),i=jt.dot(jt)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,i,s){_a.subVectors(t,e),Zs.subVectors(n,e),ya.crossVectors(_a,Zs);let r=this.direction.dot(ya),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;dn.subVectors(this.origin,e);const l=a*this.direction.dot(Zs.crossVectors(dn,Zs));if(l<0)return null;const c=a*this.direction.dot(_a.cross(dn));if(c<0||l+c>r)return null;const h=-a*dn.dot(ya);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,a,l,c,h,u,d,f,g,p,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=r,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=g,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),r=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d+p*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=p+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d-p*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=p-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-p*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,Kd)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),fn.crossVectors(n,wt),fn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),fn.crossVectors(n,wt)),fn.normalize(),$s.crossVectors(wt,fn),i[0]=fn.x,i[4]=$s.x,i[8]=wt.x,i[1]=fn.y,i[5]=$s.y,i[9]=wt.y,i[2]=fn.z,i[6]=$s.z,i[10]=wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],p=n[6],m=n[10],x=n[14],_=n[3],M=n[7],y=n[11],w=n[15],T=i[0],L=i[4],v=i[8],E=i[12],R=i[1],D=i[5],X=i[9],j=i[13],I=i[2],V=i[6],z=i[10],J=i[14],Z=i[3],k=i[7],G=i[11],ee=i[15];return s[0]=r*T+a*R+l*I+c*Z,s[4]=r*L+a*D+l*V+c*k,s[8]=r*v+a*X+l*z+c*G,s[12]=r*E+a*j+l*J+c*ee,s[1]=h*T+u*R+d*I+f*Z,s[5]=h*L+u*D+d*V+f*k,s[9]=h*v+u*X+d*z+f*G,s[13]=h*E+u*j+d*J+f*ee,s[2]=g*T+p*R+m*I+x*Z,s[6]=g*L+p*D+m*V+x*k,s[10]=g*v+p*X+m*z+x*G,s[14]=g*E+p*j+m*J+x*ee,s[3]=_*T+M*R+y*I+w*Z,s[7]=_*L+M*D+y*V+w*k,s[11]=_*v+M*X+y*z+w*G,s[15]=_*E+M*j+y*J+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],p=e[7],m=e[11],x=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+p*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*r*u+n*r*f+s*a*h-n*c*h)+x*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],p=e[13],m=e[14],x=e[15],_=u*m*c-p*d*c+p*l*f-a*m*f-u*l*x+a*d*x,M=g*d*c-h*m*c-g*l*f+r*m*f+h*l*x-r*d*x,y=h*p*c-g*u*c+g*a*f-r*p*f-h*a*x+r*u*x,w=g*u*l-h*p*l-g*a*d+r*p*d+h*a*m-r*u*m,T=t*_+n*M+i*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=_*L,e[1]=(p*d*s-u*m*s-p*i*f+n*m*f+u*i*x-n*d*x)*L,e[2]=(a*m*s-p*l*s+p*i*c-n*m*c-a*i*x+n*l*x)*L,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*L,e[4]=M*L,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*x+t*d*x)*L,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*x-t*l*x)*L,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*f+t*l*f)*L,e[8]=y*L,e[9]=(g*u*s-h*p*s-g*n*f+t*p*f+h*n*x-t*u*x)*L,e[10]=(r*p*s-g*a*s+g*n*c-t*p*c-r*n*x+t*a*x)*L,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*f-t*a*f)*L,e[12]=w*L,e[13]=(h*p*i-g*u*i+g*n*d-t*p*d-h*n*m+t*u*m)*L,e[14]=(g*a*i-r*p*i-g*n*l+t*p*l+r*n*m-t*a*m)*L,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,g=s*u,p=r*h,m=r*u,x=a*u,_=l*c,M=l*h,y=l*u,w=n.x,T=n.y,L=n.z;return i[0]=(1-(p+x))*w,i[1]=(f+y)*w,i[2]=(g-M)*w,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+x))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+M)*L,i[9]=(m-_)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=vi.set(i[0],i[1],i[2]).length();const r=vi.set(i[4],i[5],i[6]).length(),a=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);const c=1/s,h=1/r,u=1/a;return Nt.elements[0]*=c,Nt.elements[1]*=c,Nt.elements[2]*=c,Nt.elements[4]*=h,Nt.elements[5]*=h,Nt.elements[6]*=h,Nt.elements[8]*=u,Nt.elements[9]*=u,Nt.elements[10]*=u,t.setFromRotationMatrix(Nt),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){r===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,f=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new S,Nt=new Ie,$d=new S(0,0,0),Kd=new S(1,1,1),fn=new S,$s=new S,wt=new S,ul=new Ie,dl=new bt;class ns{constructor(e=0,t=0,n=0,i=ns.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ns.DefaultOrder="XYZ";ns.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Yr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qd=0;const fl=new S,Mi=new bt,en=new Ie,Ks=new S,cs=new S,jd=new S,ef=new bt,pl=new S(1,0,0),ml=new S(0,1,0),gl=new S(0,0,1),tf={type:"added"},xl={type:"removed"};class Ge extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Et(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DefaultUp.clone();const e=new S,t=new ns,n=new bt,i=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Dt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(cs,Ks,this.up):en.lookAt(Ks,cs,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(en),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ge.DefaultUp=new S(0,1,0);Ge.DefaultMatrixAutoUpdate=!0;const zt=new S,tn=new S,va=new S,nn=new S,bi=new S,wi=new S,_l=new S,Ma=new S,ba=new S,wa=new S;class It{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zt.subVectors(e,t),i.cross(zt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){zt.subVectors(i,t),tn.subVectors(n,t),va.subVectors(e,t);const r=zt.dot(zt),a=zt.dot(tn),l=zt.dot(va),c=tn.dot(tn),h=tn.dot(va),u=r*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,nn),l.set(0,0),l.addScaledVector(s,nn.x),l.addScaledVector(r,nn.y),l.addScaledVector(a,nn.z),l}static isFrontFacing(e,t,n,i){return zt.subVectors(n,t),tn.subVectors(e,t),zt.cross(tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),zt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return It.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;bi.subVectors(i,n),wi.subVectors(s,n),Ma.subVectors(e,n);const l=bi.dot(Ma),c=wi.dot(Ma);if(l<=0&&c<=0)return t.copy(n);ba.subVectors(e,i);const h=bi.dot(ba),u=wi.dot(ba);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(bi,r);wa.subVectors(e,s);const f=bi.dot(wa),g=wi.dot(wa);if(g>=0&&f<=g)return t.copy(s);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(wi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return _l.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(_l,a);const x=1/(m+p+d);return r=p*x,a=d*x,t.copy(n).addScaledVector(bi,r).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nf=0;class ct extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Et(),this.name="",this.type="Material",this.blending=Jn,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lo,this.blendDst=Po,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Nc;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}ct.fromType=function(){return null};class Pn extends ct{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new S,Qs=new $;class Ye{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Vr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new ue),t[n++]=r.r,t[n++]=r.g,t[n++]=r.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new $),t[n++]=r.x,t[n++]=r.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new S),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new Xe),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=r.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sf extends Ye{constructor(e,t,n){super(new Int8Array(e),t,n)}}class rf extends Ye{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class af extends Ye{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class of extends Ye{constructor(e,t,n){super(new Int16Array(e),t,n)}}class zo extends Ye{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lf extends Ye{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Bo extends Ye{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cf extends Ye{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}}class me extends Ye{constructor(e,t,n){super(new Float32Array(e),t,n)}}class hf extends Ye{constructor(e,t,n){super(new Float64Array(e),t,n)}}let uf=0;const Pt=new Ie,Sa=new Ge,Si=new S,St=new ci,hs=new ci,ht=new S;class Re extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Et(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?Bo:zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(St.min,hs.min),St.expandByPoint(ht),ht.addVectors(St.max,hs.max),St.expandByPoint(ht)):(St.expandByPoint(hs.min),St.expandByPoint(hs.max))}St.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(e,c),ht.add(Si)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<a;R++)c[R]=new S,h[R]=new S;const u=new S,d=new S,f=new S,g=new $,p=new $,m=new $,x=new S,_=new S;function M(R,D,X){u.fromArray(i,R*3),d.fromArray(i,D*3),f.fromArray(i,X*3),g.fromArray(r,R*2),p.fromArray(r,D*2),m.fromArray(r,X*2),d.sub(u),f.sub(u),p.sub(g),m.sub(g);const j=1/(p.x*m.y-m.x*p.y);!isFinite(j)||(x.copy(d).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(j),_.copy(f).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(j),c[R].add(x),c[D].add(x),c[X].add(x),h[R].add(_),h[D].add(_),h[X].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,D=y.length;R<D;++R){const X=y[R],j=X.start,I=X.count;for(let V=j,z=j+I;V<z;V+=3)M(n[V+0],n[V+1],n[V+2])}const w=new S,T=new S,L=new S,v=new S;function E(R){L.fromArray(s,R*3),v.copy(L);const D=c[R];w.copy(D),w.sub(L.multiplyScalar(L.dot(D))).normalize(),T.crossVectors(v,D);const j=T.dot(h[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=j}for(let R=0,D=y.length;R<D;++R){const X=y[R],j=X.start,I=X.count;for(let V=j,z=j+I;V<z;V+=3)E(n[V+0]),E(n[V+1]),E(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new S,s=new S,r=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,r.length-c);for(let u=0,d=c;u<h;u++,d++)r[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let x=0;x<h;x++)d[g++]=c[f++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Re,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Ie,Ai=new Us,Aa=new hi,pn=new S,mn=new S,gn=new S,Ta=new S,Ea=new S,Ca=new S,js=new S,er=new S,tr=new S,nr=new $,ir=new $,sr=new $,La=new S,rr=new S;class ft extends Ge{constructor(e=new Re,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),e.ray.intersectsSphere(Aa)===!1)||(yl.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(yl),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const x=f[p],_=i[x.materialIndex],M=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let w=M,T=y;w<T;w+=3){const L=a.getX(w),v=a.getX(w+1),E=a.getX(w+2);r=ar(this,_,e,Ai,l,c,h,u,d,L,v,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let x=p,_=m;x<_;x+=3){const M=a.getX(x),y=a.getX(x+1),w=a.getX(x+2);r=ar(this,i,e,Ai,l,c,h,u,d,M,y,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const x=f[p],_=i[x.materialIndex],M=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let w=M,T=y;w<T;w+=3){const L=w,v=w+1,E=w+2;r=ar(this,_,e,Ai,l,c,h,u,d,L,v,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let x=p,_=m;x<_;x+=3){const M=x,y=x+1,w=x+2;r=ar(this,i,e,Ai,l,c,h,u,d,M,y,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function df(o,e,t,n,i,s,r,a){let l;if(e.side===Tt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side!==jn,a),l===null)return null;rr.copy(a),rr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:o}}function ar(o,e,t,n,i,s,r,a,l,c,h,u){pn.fromBufferAttribute(i,c),mn.fromBufferAttribute(i,h),gn.fromBufferAttribute(i,u);const d=o.morphTargetInfluences;if(s&&d){js.set(0,0,0),er.set(0,0,0),tr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const m=d[g],x=s[g];m!==0&&(Ta.fromBufferAttribute(x,c),Ea.fromBufferAttribute(x,h),Ca.fromBufferAttribute(x,u),r?(js.addScaledVector(Ta,m),er.addScaledVector(Ea,m),tr.addScaledVector(Ca,m)):(js.addScaledVector(Ta.sub(pn),m),er.addScaledVector(Ea.sub(mn),m),tr.addScaledVector(Ca.sub(gn),m)))}pn.add(js),mn.add(er),gn.add(tr)}o.isSkinnedMesh&&(o.boneTransform(c,pn),o.boneTransform(h,mn),o.boneTransform(u,gn));const f=df(o,e,t,n,pn,mn,gn,La);if(f){a&&(nr.fromBufferAttribute(a,c),ir.fromBufferAttribute(a,h),sr.fromBufferAttribute(a,u),f.uv=It.getUV(La,pn,mn,gn,nr,ir,sr,new $)),l&&(nr.fromBufferAttribute(l,c),ir.fromBufferAttribute(l,h),sr.fromBufferAttribute(l,u),f.uv2=It.getUV(La,pn,mn,gn,nr,ir,sr,new $));const g={a:c,b:h,c:u,normal:new S,materialIndex:0};It.getNormal(pn,mn,gn,g.normal),f.face=g}return f}class on extends Re{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(p,m,x,_,M,y,w,T,L,v,E){const R=y/L,D=w/v,X=y/2,j=w/2,I=T/2,V=L+1,z=v+1;let J=0,Z=0;const k=new S;for(let G=0;G<z;G++){const ee=G*D-j;for(let K=0;K<V;K++){const le=K*R-X;k[p]=le*_,k[m]=ee*M,k[x]=I,c.push(k.x,k.y,k.z),k[p]=0,k[m]=0,k[x]=T>0?1:-1,h.push(k.x,k.y,k.z),u.push(K/L),u.push(1-G/v),J+=1}}for(let G=0;G<v;G++)for(let ee=0;ee<L;ee++){const K=d+ee+V*G,le=d+ee+V*(G+1),ge=d+(ee+1)+V*(G+1),ye=d+(ee+1)+V*G;l.push(K,le,ye),l.push(le,ge,ye),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=J}}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pt(o){const e={};for(let t=0;t<o.length;t++){const n=Vi(o[t]);for(const i in n)e[i]=n[i]}return e}const Dh={clone:Vi,merge:pt};var ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends ct{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zr extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dt extends Zr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zn*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=90,Ei=1;class Fh extends Ge{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new dt(Ti,Ei,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const s=new dt(Ti,Ei,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);const r=new dt(Ti,Ei,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new S(0,1,0)),this.add(r);const a=new dt(Ti,Ei,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const l=new dt(Ti,Ei,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new dt(Ti,Ei,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Jt,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ks extends lt{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:bn,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nh extends Ct{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ks(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new on(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:an});s.uniforms.tEquirect.value=t;const r=new ft(i,s),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=nt),new Fh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Pa=new S,mf=new S,gf=new Dt;class _n{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pa.subVectors(n,t).cross(mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gf.getNormalMatrix(e),i=this.coplanarPoint(Pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new hi,or=new S;class $r{constructor(e=new _n,t=new _n,n=new _n,i=new _n,s=new _n,r=new _n){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],p=n[11],m=n[12],x=n[13],_=n[14],M=n[15];return t[0].setComponents(a-i,u-l,p-d,M-m).normalize(),t[1].setComponents(a+i,u+l,p+d,M+m).normalize(),t[2].setComponents(a+s,u+c,p+f,M+x).normalize(),t[3].setComponents(a-s,u-c,p-f,M-x).normalize(),t[4].setComponents(a-r,u-h,p-g,M-_).normalize(),t[5].setComponents(a+r,u+h,p+g,M+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(or.x=i.normal.x>0?e.max.x:e.min.x,or.y=i.normal.y>0?e.max.y:e.min.y,or.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function xf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,c),f.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:a,update:l}}class ti extends Re{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],p=[],m=[];for(let x=0;x<h;x++){const _=x*d-r;for(let M=0;M<c;M++){const y=M*u-s;g.push(y,-_,0),p.push(0,0,1),m.push(M/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<a;_++){const M=_+c*x,y=_+c*(x+1),w=_+1+c*(x+1),T=_+1+c*x;f.push(M,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(p,3)),this.setAttribute("uv",new me(m,2))}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var _f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf="vec3 transformed = vec3( position );",Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Ef=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Cf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ap=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,dp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,fp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Rp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$p=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,om=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,um=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,fm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ym=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,vm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,bm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Am=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Im=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,zm=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Om=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:_f,alphamap_pars_fragment:yf,alphatest_fragment:vf,alphatest_pars_fragment:Mf,aomap_fragment:bf,aomap_pars_fragment:wf,begin_vertex:Sf,beginnormal_vertex:Af,bsdfs:Tf,iridescence_fragment:Ef,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:If,color_fragment:Df,color_pars_fragment:Ff,color_pars_vertex:Nf,color_vertex:zf,common:Bf,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Uf,displacementmap_pars_vertex:kf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,encodings_fragment:Wf,encodings_pars_fragment:qf,envmap_fragment:Xf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Yf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:ap,envmap_vertex:$f,fog_vertex:Kf,fog_pars_vertex:Qf,fog_fragment:jf,fog_pars_fragment:ep,gradientmap_pars_fragment:tp,lightmap_fragment:np,lightmap_pars_fragment:ip,lights_lambert_vertex:sp,lights_pars_begin:rp,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:fp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:yp,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:bp,map_particle_pars_fragment:wp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ap,morphcolor_vertex:Tp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Cp,morphtarget_vertex:Lp,normal_fragment_begin:Pp,normal_fragment_maps:Rp,normal_pars_fragment:Ip,normal_pars_vertex:Dp,normal_vertex:Fp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Up,output_fragment:kp,packing:Vp,premultiplied_alpha_fragment:Gp,project_vertex:Hp,dithering_fragment:Wp,dithering_pars_fragment:qp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Zp,shadowmap_vertex:$p,shadowmask_pars_fragment:Kp,skinbase_vertex:Qp,skinning_pars_vertex:jp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:am,transmission_pars_fragment:om,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,uv2_pars_fragment:um,uv2_pars_vertex:dm,uv2_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,cube_vert:xm,cube_frag:_m,depth_vert:ym,depth_frag:vm,distanceRGBA_vert:Mm,distanceRGBA_frag:bm,equirect_vert:wm,equirect_frag:Sm,linedashed_vert:Am,linedashed_frag:Tm,meshbasic_vert:Em,meshbasic_frag:Cm,meshlambert_vert:Lm,meshlambert_frag:Pm,meshmatcap_vert:Rm,meshmatcap_frag:Im,meshnormal_vert:Dm,meshnormal_frag:Fm,meshphong_vert:Nm,meshphong_frag:zm,meshphysical_vert:Bm,meshphysical_frag:Om,meshtoon_vert:Um,meshtoon_frag:km,points_vert:Vm,points_frag:Gm,shadow_vert:Hm,shadow_frag:Wm,sprite_vert:qm,sprite_frag:Xm},re={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},Ut={basic:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new ue(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:pt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:pt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ue(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:pt([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:pt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:pt([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:pt([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:pt([re.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:pt([re.common,re.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:pt([re.lights,re.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ut.physical={uniforms:pt([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function Jm(o,e,t,n,i,s){const r=new ue(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(p,m){let x=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=e.get(_));const M=o.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?g(r,a):_&&_.isColor&&(g(_,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ts)?(c===void 0&&(c=new ft(new on(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Vi(Ut.cube.uniforms),vertexShader:Ut.cube.vertexShader,fragmentShader:Ut.cube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,(h!==_||u!==_.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ft(new ti(2,2),new Zt({name:"BackgroundMaterial",uniforms:Vi(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,s)}return{getClearColor:function(){return r},setClearColor:function(p,m=1){r.set(p),a=m,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(r,a)},render:f}}function Ym(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(I,V,z,J,Z){let k=!1;if(r){const G=p(J,z,V);c!==G&&(c=G,f(c.object)),k=x(I,J,z,Z),k&&_(I,J,z,Z)}else{const G=V.wireframe===!0;(c.geometry!==J.id||c.program!==z.id||c.wireframe!==G)&&(c.geometry=J.id,c.program=z.id,c.wireframe=G,k=!0)}Z!==null&&t.update(Z,34963),(k||h)&&(h=!1,v(I,V,z,J),Z!==null&&o.bindBuffer(34963,t.get(Z).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,V,z){const J=z.wireframe===!0;let Z=a[I.id];Z===void 0&&(Z={},a[I.id]=Z);let k=Z[V.id];k===void 0&&(k={},Z[V.id]=k);let G=k[J];return G===void 0&&(G=m(d()),k[J]=G),G}function m(I){const V=[],z=[],J=[];for(let Z=0;Z<i;Z++)V[Z]=0,z[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:J,object:I,attributes:{},index:null}}function x(I,V,z,J){const Z=c.attributes,k=V.attributes;let G=0;const ee=z.getAttributes();for(const K in ee)if(ee[K].location>=0){const ge=Z[K];let ye=k[K];if(ye===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),ge===void 0||ge.attribute!==ye||ye&&ge.data!==ye.data)return!0;G++}return c.attributesNum!==G||c.index!==J}function _(I,V,z,J){const Z={},k=V.attributes;let G=0;const ee=z.getAttributes();for(const K in ee)if(ee[K].location>=0){let ge=k[K];ge===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor));const ye={};ye.attribute=ge,ge&&ge.data&&(ye.data=ge.data),Z[K]=ye,G++}c.attributes=Z,c.attributesNum=G,c.index=J}function M(){const I=c.newAttributes;for(let V=0,z=I.length;V<z;V++)I[V]=0}function y(I){w(I,0)}function w(I,V){const z=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;z[I]=1,J[I]===0&&(o.enableVertexAttribArray(I),J[I]=1),Z[I]!==V&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),Z[I]=V)}function T(){const I=c.newAttributes,V=c.enabledAttributes;for(let z=0,J=V.length;z<J;z++)V[z]!==I[z]&&(o.disableVertexAttribArray(z),V[z]=0)}function L(I,V,z,J,Z,k){n.isWebGL2===!0&&(z===5124||z===5125)?o.vertexAttribIPointer(I,V,z,Z,k):o.vertexAttribPointer(I,V,z,J,Z,k)}function v(I,V,z,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Z=J.attributes,k=z.getAttributes(),G=V.defaultAttributeValues;for(const ee in k){const K=k[ee];if(K.location>=0){let le=Z[ee];if(le===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),le!==void 0){const ge=le.normalized,ye=le.itemSize,H=t.get(le);if(H===void 0)continue;const Be=H.buffer,we=H.type,Ce=H.bytesPerElement;if(le.isInterleavedBufferAttribute){const ae=le.data,Fe=ae.stride,Y=le.offset;if(ae.isInstancedInterleavedBuffer){for(let q=0;q<K.locationSize;q++)w(K.location+q,ae.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let q=0;q<K.locationSize;q++)y(K.location+q);o.bindBuffer(34962,Be);for(let q=0;q<K.locationSize;q++)L(K.location+q,ye/K.locationSize,we,ge,Fe*Ce,(Y+ye/K.locationSize*q)*Ce)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)w(K.location+ae,le.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<K.locationSize;ae++)y(K.location+ae);o.bindBuffer(34962,Be);for(let ae=0;ae<K.locationSize;ae++)L(K.location+ae,ye/K.locationSize,we,ge,ye*Ce,ye/K.locationSize*ae*Ce)}}else if(G!==void 0){const ge=G[ee];if(ge!==void 0)switch(ge.length){case 2:o.vertexAttrib2fv(K.location,ge);break;case 3:o.vertexAttrib3fv(K.location,ge);break;case 4:o.vertexAttrib4fv(K.location,ge);break;default:o.vertexAttrib1fv(K.location,ge)}}}}T()}function E(){X();for(const I in a){const V=a[I];for(const z in V){const J=V[z];for(const Z in J)g(J[Z].object),delete J[Z];delete V[z]}delete a[I]}}function R(I){if(a[I.id]===void 0)return;const V=a[I.id];for(const z in V){const J=V[z];for(const Z in J)g(J[Z].object),delete J[Z];delete V[z]}delete a[I.id]}function D(I){for(const V in a){const z=a[V];if(z[I.id]===void 0)continue;const J=z[I.id];for(const Z in J)g(J[Z].object),delete J[Z];delete z[I.id]}}function X(){j(),h=!0,c!==l&&(c=l,f(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:j,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:T}}function Zm(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=l}function $m(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),m=o.getParameter(36347),x=o.getParameter(36348),_=o.getParameter(36349),M=d>0,y=r||e.has("OES_texture_float"),w=M&&y,T=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function Km(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new _n,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,x=o.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,M=_*4;let y=x.clippingState||null;l.value=y,y=h(g,d,M,f);for(let w=0;w!==M;++w)y[w]=t[w];x.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const p=u!==null?u.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const x=f+p*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let M=0,y=f;M!==p;++M,y+=4)r.copy(u[M]).applyMatrix4(_,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Qm(o){let e=new WeakMap;function t(r,a){return a===vs?r.mapping=bn:a===Ms&&(r.mapping=wn),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===vs||a===Ms)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Nh(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Kr extends Zr{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,vl=[.125,.215,.35,.446,.526,.582],Hn=20,Ra=new Kr,Ml=new ue;let Ia=null;const Vn=(1+Math.sqrt(5))/2,Li=1/Vn,bl=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Vn,Li),new S(0,Vn,-Li),new S(Li,0,Vn),new S(-Li,0,Vn),new S(Vn,Li,0),new S(-Vn,Li,0)];class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia),e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bn||e.mapping===wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nt,minFilter:nt,generateMipmaps:!1,type:ki,format:At,encoding:An,depthBuffer:!1},i=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(s)),this._blurMaterial=eg(s,e,t)}return i}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,i){const a=new dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ml),h.toneMapping=Jt,h.autoClear=!1;const f=new Pn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new ft(new on,f);let p=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ml),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):_===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const M=this._cubeSize;lr(i,_*M,x>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bn||e.mapping===wn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=bl[(i-1)%bl.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ft(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hn-1),p=s/g,m=isFinite(s)?1+Math.floor(h*p):Hn;m>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const x=[];let _=0;for(let L=0;L<Hn;++L){const v=L/p,E=Math.exp(-v*v/2);x.push(E),L===0?_+=E:L<m&&(_+=2*E)}for(let L=0;L<x.length;L++)x[L]=x[L]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=x,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const y=this._sizeLods[i],w=3*y*(i>M-zi?i-M+zi:0),T=4*(this._cubeSize-y);lr(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(u,Ra)}}function jm(o){const e=[],t=[],n=[];let i=o;const s=o-zi+1+vl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-zi?l=vl[r-o+zi-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,p=3,m=2,x=1,_=new Float32Array(p*g*f),M=new Float32Array(m*g*f),y=new Float32Array(x*g*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,v=T>2?0:-1,E=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];_.set(E,p*g*T),M.set(d,m*g*T);const R=[T,T,T,T,T,T];y.set(R,x*g*T)}const w=new Re;w.setAttribute("position",new Ye(_,p)),w.setAttribute("uv",new Ye(M,m)),w.setAttribute("faceIndex",new Ye(y,x)),e.push(w),i>zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(o,e,t){const n=new Ct(o,e,t);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function eg(o,e,t){const n=new Float32Array(Hn),i=new S(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Sl(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Al(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function tg(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vs||l===Ms,h=l===bn||l===wn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Mo(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Mo(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ng(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ig(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const p=f[g];for(let m=0,x=p.length;m<x;m++)e.update(p[m],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let p=0;if(f!==null){const _=f.array;p=f.version;for(let M=0,y=_.length;M<y;M+=3){const w=_[M+0],T=_[M+1],L=_[M+2];d.push(w,T,T,L,L,w)}}else{const _=g.array;p=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){const w=M+0,T=M+1,L=M+2;d.push(w,T,T,L,L,w)}}const m=new(Rh(d)?Bo:zo)(d,1);m.version=p;const x=s.get(u);x&&e.remove(x),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sg(o,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){o.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function rg(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ag(o,e){return o[0]-e[0]}function og(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Da(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function lg(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Xe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==p){let V=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",V)};m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],v=h.morphAttributes.color||[];let E=0;M===!0&&(E=1),y===!0&&(E=2),w===!0&&(E=3);let R=h.attributes.position.count*E,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const X=new Float32Array(R*D*4*p),j=new Os(X,R,D,p);j.type=rn,j.needsUpdate=!0;const I=E*4;for(let z=0;z<p;z++){const J=T[z],Z=L[z],k=v[z],G=R*D*4*z;for(let ee=0;ee<J.count;ee++){const K=ee*I;M===!0&&(r.fromBufferAttribute(J,ee),J.normalized===!0&&Da(r,J),X[G+K+0]=r.x,X[G+K+1]=r.y,X[G+K+2]=r.z,X[G+K+3]=0),y===!0&&(r.fromBufferAttribute(Z,ee),Z.normalized===!0&&Da(r,Z),X[G+K+4]=r.x,X[G+K+5]=r.y,X[G+K+6]=r.z,X[G+K+7]=0),w===!0&&(r.fromBufferAttribute(k,ee),k.normalized===!0&&Da(r,k),X[G+K+8]=r.x,X[G+K+9]=r.y,X[G+K+10]=r.z,X[G+K+11]=k.itemSize===4?r.w:1)}}m={count:p,texture:j,size:new $(R,D)},s.set(h,m),h.addEventListener("dispose",V)}let x=0;for(let M=0;M<f.length;M++)x+=f[M];const _=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(o,"morphTargetBaseInfluence",_),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<g;y++){const w=p[y];w[0]=y,w[1]=f[y]}p.sort(og);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ag);const m=h.morphAttributes.position,x=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],L=w[1];T!==Number.MAX_SAFE_INTEGER&&L?(m&&h.getAttribute("morphTarget"+y)!==m[T]&&h.setAttribute("morphTarget"+y,m[T]),x&&h.getAttribute("morphNormal"+y)!==x[T]&&h.setAttribute("morphNormal"+y,x[T]),i[y]=L,_+=L):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),x&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const M=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function cg(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Bh=new lt,Oh=new Os,Uh=new Jr,kh=new ks,Tl=[],El=[],Cl=new Float32Array(16),Ll=new Float32Array(9),Pl=new Float32Array(4);function is(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Tl[i];if(s===void 0&&(s=new Float32Array(i),Tl[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function yt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function vt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Qr(o,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function hg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function ug(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;o.uniform2fv(this.addr,e),vt(t,e)}}function dg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;o.uniform3fv(this.addr,e),vt(t,e)}}function fg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;o.uniform4fv(this.addr,e),vt(t,e)}}function pg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;Pl.set(n),o.uniformMatrix2fv(this.addr,!1,Pl),vt(t,n)}}function mg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;Ll.set(n),o.uniformMatrix3fv(this.addr,!1,Ll),vt(t,n)}}function gg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;Cl.set(n),o.uniformMatrix4fv(this.addr,!1,Cl),vt(t,n)}}function xg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function _g(o,e){const t=this.cache;yt(t,e)||(o.uniform2iv(this.addr,e),vt(t,e))}function yg(o,e){const t=this.cache;yt(t,e)||(o.uniform3iv(this.addr,e),vt(t,e))}function vg(o,e){const t=this.cache;yt(t,e)||(o.uniform4iv(this.addr,e),vt(t,e))}function Mg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function bg(o,e){const t=this.cache;yt(t,e)||(o.uniform2uiv(this.addr,e),vt(t,e))}function wg(o,e){const t=this.cache;yt(t,e)||(o.uniform3uiv(this.addr,e),vt(t,e))}function Sg(o,e){const t=this.cache;yt(t,e)||(o.uniform4uiv(this.addr,e),vt(t,e))}function Ag(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Bh,i)}function Tg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uh,i)}function Eg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kh,i)}function Cg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Oh,i)}function Lg(o){switch(o){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return yg;case 35669:case 35673:return vg;case 5125:return Mg;case 36294:return bg;case 36295:return wg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(o,e){o.uniform1fv(this.addr,e)}function Rg(o,e){const t=is(e,this.size,2);o.uniform2fv(this.addr,t)}function Ig(o,e){const t=is(e,this.size,3);o.uniform3fv(this.addr,t)}function Dg(o,e){const t=is(e,this.size,4);o.uniform4fv(this.addr,t)}function Fg(o,e){const t=is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ng(o,e){const t=is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function zg(o,e){const t=is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Bg(o,e){o.uniform1iv(this.addr,e)}function Og(o,e){o.uniform2iv(this.addr,e)}function Ug(o,e){o.uniform3iv(this.addr,e)}function kg(o,e){o.uniform4iv(this.addr,e)}function Vg(o,e){o.uniform1uiv(this.addr,e)}function Gg(o,e){o.uniform2uiv(this.addr,e)}function Hg(o,e){o.uniform3uiv(this.addr,e)}function Wg(o,e){o.uniform4uiv(this.addr,e)}function qg(o,e,t){const n=e.length,i=Qr(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Bh,i[s])}function Xg(o,e,t){const n=e.length,i=Qr(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Uh,i[s])}function Jg(o,e,t){const n=e.length,i=Qr(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||kh,i[s])}function Yg(o,e,t){const n=e.length,i=Qr(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Oh,i[s])}function Zg(o){switch(o){case 5126:return Pg;case 35664:return Rg;case 35665:return Ig;case 35666:return Dg;case 35674:return Fg;case 35675:return Ng;case 35676:return zg;case 5124:case 35670:return Bg;case 35667:case 35671:return Og;case 35668:case 35672:return Ug;case 35669:case 35673:return kg;case 5125:return Vg;case 36294:return Gg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Yg}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Lg(t.type)}}class Kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Zg(t.type)}}class Qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Rl(o,e){o.seq.push(e),o.map[e.id]=e}function jg(o,e,t){const n=o.name,i=n.length;for(Fa.lastIndex=0;;){const s=Fa.exec(n),r=Fa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Rl(t,c===void 0?new $g(a,o,e):new Kg(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Qg(a),Rl(t,u)),t=u}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);jg(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Il(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let e0=0;function t0(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function n0(o){switch(o){case An:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Dl(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+t0(o.getShaderSource(e),r)}else return i}function i0(o,e){const t=n0(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function s0(o,e){let t;switch(e){case ih:t="Linear";break;case sh:t="Reinhard";break;case rh:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r0(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function a0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o0(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function gs(o){return o!==""}function Fl(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(o){return o.replace(l0,c0)}function c0(o,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return bo(t)}const h0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(o){return o.replace(u0,Vh).replace(h0,d0)}function d0(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Vh(o,e,t,n)}function Vh(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Co?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function p0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case bn:case wn:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case wn:e="ENVMAP_MODE_REFRACTION";break}return e}function g0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Bs:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function x0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _0(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=f0(t),c=p0(t),h=m0(t),u=g0(t),d=x0(t),f=t.isWebGL2?"":r0(t),g=a0(s),p=i.createProgram();let m,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(gs).join(`
`),m.length>0&&(m+=`
`),x=[f,g].filter(gs).join(`
`),x.length>0&&(x+=`
`)):(m=[Bl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),x=[f,Bl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?ze.tonemapping_pars_fragment:"",t.toneMapping!==Jt?s0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,i0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),r=bo(r),r=Fl(r,t),r=Nl(r,t),a=bo(a),a=Fl(a,t),a=Nl(a,t),r=zl(r),a=zl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=_+m+r,y=_+x+a,w=Il(i,35633,M),T=Il(i,35632,y);if(i.attachShader(p,w),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),D=i.getShaderInfoLog(T).trim();let X=!0,j=!0;if(i.getProgramParameter(p,35714)===!1){X=!1;const I=Dl(i,w,"vertex"),V=Dl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+I+`
`+V)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||D==="")&&(j=!1);j&&(this.diagnostics={runnable:X,programLog:E,vertexShader:{log:R,prefix:m},fragmentShader:{log:D,prefix:x}})}i.deleteShader(w),i.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new Br(i,p)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=o0(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let y0=0;class v0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new M0(e);t.set(e,n)}return t.get(e)}}class M0{constructor(e){this.id=y0++,this.code=e,this.usedTimes=0}}function b0(o,e,t,n,i,s,r){const a=new Yr,l=new v0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,R,D,X){const j=D.fog,I=X.geometry,V=v.isMeshStandardMaterial?D.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),J=!!z&&z.mapping===ts?z.image.height:null,Z=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,G=k!==void 0?k.length:0;let ee=0;I.morphAttributes.position!==void 0&&(ee=1),I.morphAttributes.normal!==void 0&&(ee=2),I.morphAttributes.color!==void 0&&(ee=3);let K,le,ge,ye;if(Z){const Fe=Ut[Z];K=Fe.vertexShader,le=Fe.fragmentShader}else K=v.vertexShader,le=v.fragmentShader,l.update(v),ge=l.getVertexShaderID(v),ye=l.getFragmentShaderID(v);const H=o.getRenderTarget(),Be=v.alphaTest>0,we=v.clearcoat>0,Ce=v.iridescence>0;return{isWebGL2:h,shaderID:Z,shaderName:v.type,vertexShader:K,fragmentShader:le,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?o.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:An,map:!!v.map,matcap:!!v.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ch,tangentSpaceNormalMap:v.normalMapType===li,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ke,clearcoat:we,clearcoatMap:we&&!!v.clearcoatMap,clearcoatRoughnessMap:we&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!v.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!v.iridescenceMap,iridescenceThicknessMap:Ce&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Jn,alphaMap:!!v.alphaMap,alphaTest:Be,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!j,useFog:v.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:Jt,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jn,flipSided:v.side===Tt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(x(E,v),_(E,v),E.push(o.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),E.fog&&a.enable(33),v.push(a.mask),a.disableAll(),E.useFog&&a.enable(0),E.flatShading&&a.enable(1),E.logarithmicDepthBuffer&&a.enable(2),E.skinning&&a.enable(3),E.morphTargets&&a.enable(4),E.morphNormals&&a.enable(5),E.morphColors&&a.enable(6),E.premultipliedAlpha&&a.enable(7),E.shadowMapEnabled&&a.enable(8),E.physicallyCorrectLights&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.specularIntensityMap&&a.enable(14),E.specularColorMap&&a.enable(15),E.transmission&&a.enable(16),E.transmissionMap&&a.enable(17),E.thicknessMap&&a.enable(18),E.sheen&&a.enable(19),E.sheenColorMap&&a.enable(20),E.sheenRoughnessMap&&a.enable(21),E.decodeVideoTexture&&a.enable(22),E.opaque&&a.enable(23),v.push(a.mask)}function M(v){const E=g[v.type];let R;if(E){const D=Ut[E];R=Dh.clone(D.uniforms)}else R=v.uniforms;return R}function y(v,E){let R;for(let D=0,X=c.length;D<X;D++){const j=c[D];if(j.cacheKey===E){R=j,++R.usedTimes;break}}return R===void 0&&(R=new _0(o,E,v,s),c.push(R)),R}function w(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:L}}function w0(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function S0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ol(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ul(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,g,p,m){let x=o[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},o[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=f,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=p,x.group=m),e++,x}function a(u,d,f,g,p,m){const x=r(u,d,f,g,p,m);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):t.push(x)}function l(u,d,f,g,p,m){const x=r(u,d,f,g,p,m);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):t.unshift(x)}function c(u,d){t.length>1&&t.sort(u||S0),n.length>1&&n.sort(d||Ol),i.length>1&&i.sort(d||Ol)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function A0(){let o=new WeakMap;function e(n,i){let s;return o.has(n)===!1?(s=new Ul,o.set(n,[s])):i>=o.get(n).length?(s=new Ul,o.get(n).push(s)):s=o.get(n)[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function T0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ue};break;case"SpotLight":t={position:new S,direction:new S,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new S,halfWidth:new S,halfHeight:new S};break}return o[e.id]=t,t}}}function E0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let C0=0;function L0(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function P0(o,e){const t=new T0,n=E0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new S);const s=new S,r=new Ie,a=new Ie;function l(h,u){let d=0,f=0,g=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,m=0,x=0,_=0,M=0,y=0,w=0,T=0;h.sort(L0);const L=u!==!0?Math.PI:1;for(let E=0,R=h.length;E<R;E++){const D=h[E],X=D.color,j=D.intensity,I=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=X.r*j*L,f+=X.g*j*L,g+=X.b*j*L;else if(D.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],j);else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*L),D.castShadow){const J=D.shadow,Z=n.get(D);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=D.shadow.matrix,y++}i.directional[p]=z,p++}else if(D.isSpotLight){const z=t.get(D);if(z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(X).multiplyScalar(j*L),z.distance=I,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,D.castShadow){const J=D.shadow,Z=n.get(D);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=V,i.spotShadowMatrix[x]=D.shadow.matrix,T++}i.spot[x]=z,x++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(X).multiplyScalar(j),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=z,_++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*L),z.distance=D.distance,z.decay=D.decay,D.castShadow){const J=D.shadow,Z=n.get(D);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=D.shadow.matrix,w++}i.point[m]=z,m++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(j*L),z.groundColor.copy(D.groundColor).multiplyScalar(j*L),i.hemi[M]=z,M++}}_>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==p||v.pointLength!==m||v.spotLength!==x||v.rectAreaLength!==_||v.hemiLength!==M||v.numDirectionalShadows!==y||v.numPointShadows!==w||v.numSpotShadows!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotShadowMatrix.length=T,v.directionalLength=p,v.pointLength=m,v.spotLength=x,v.rectAreaLength=_,v.hemiLength=M,v.numDirectionalShadows=y,v.numPointShadows=w,v.numSpotShadows=T,i.version=C0++)}function c(h,u){let d=0,f=0,g=0,p=0,m=0;const x=u.matrixWorldInverse;for(let _=0,M=h.length;_<M;_++){const y=h[_];if(y.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),d++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),a.identity(),r.copy(y.matrixWorld),r.premultiply(x),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),f++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),m++}}}return{setup:l,setupView:c,state:i}}function kl(o,e){const t=new P0(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function R0(o,e){let t=new WeakMap;function n(s,r=0){let a;return t.has(s)===!1?(a=new kl(o,e),t.set(s,[a])):r>=t.get(s).length?(a=new kl(o,e),t.get(s).push(a)):a=t.get(s)[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Uo extends ct{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ko extends ct{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function F0(o,e,t){let n=new $r;const i=new $,s=new $,r=new Xe,a=new Uo({depthPacking:Eh}),l=new ko,c={},h=t.maxTextureSize,u={0:Tt,1:Qn,2:jn},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:I0,fragmentShader:D0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co,this.render=function(y,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const L=o.getRenderTarget(),v=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),R=o.state;R.setBlending(an),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let D=0,X=y.length;D<X;D++){const j=y[D],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const V=I.getFrameExtents();if(i.multiply(V),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===Fi&&(I.map=new Ct(i.x,i.y),I.map.texture.name=j.name+".shadowMap",I.mapPass=new Ct(i.x,i.y),I.camera.updateProjectionMatrix()),I.map===null){const J={minFilter:at,magFilter:at,format:At};I.map=new Ct(i.x,i.y,J),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const z=I.getViewportCount();for(let J=0;J<z;J++){const Z=I.getViewport(J);r.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),R.viewport(r),I.updateMatrices(j,J),n=I.getFrustum(),M(w,T,I.camera,j,this.type)}!I.isPointLightShadow&&this.type===Fi&&x(I,T),I.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(L,v,E)};function x(y,w){const T=e.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(w,null,T,d,p,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(w,null,T,f,p,null)}function _(y,w,T,L,v,E){let R=null;const D=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0?R=D:R=T.isPointLight===!0?l:a,o.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const X=R.uuid,j=w.uuid;let I=c[X];I===void 0&&(I={},c[X]=I);let V=I[j];V===void 0&&(V=R.clone(),I[j]=V),R=V}return R.visible=w.visible,R.wireframe=w.wireframe,E===Fi?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=L,R.farDistance=v),R}function M(y,w,T,L,v){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Fi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const D=e.update(y),X=y.material;if(Array.isArray(X)){const j=D.groups;for(let I=0,V=j.length;I<V;I++){const z=j[I],J=X[z.materialIndex];if(J&&J.visible){const Z=_(y,J,L,T.near,T.far,v);o.renderBufferDirect(T,null,D,Z,y,z)}}}else if(X.visible){const j=_(y,X,L,T.near,T.far,v);o.renderBufferDirect(T,null,D,j,y,null)}}const R=y.children;for(let D=0,X=R.length;D<X;D++)M(R[D],w,T,L,v)}}function N0(o,e,t){const n=t.isWebGL2;function i(){let P=!1;const oe=new Xe;let se=null;const be=new Xe(0,0,0,0);return{setMask:function(pe){se!==pe&&!P&&(o.colorMask(pe,pe,pe,pe),se=pe)},setLocked:function(pe){P=pe},setClear:function(pe,Te,te,Ee,He){He===!0&&(pe*=Ee,Te*=Ee,te*=Ee),oe.set(pe,Te,te,Ee),be.equals(oe)===!1&&(o.clearColor(pe,Te,te,Ee),be.copy(oe))},reset:function(){P=!1,se=null,be.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,se=null,be=null;return{setTest:function(pe){pe?ye(2929):H(2929)},setMask:function(pe){oe!==pe&&!P&&(o.depthMask(pe),oe=pe)},setFunc:function(pe){if(se!==pe){if(pe)switch(pe){case Yc:o.depthFunc(512);break;case Zc:o.depthFunc(519);break;case $c:o.depthFunc(513);break;case Or:o.depthFunc(515);break;case Kc:o.depthFunc(514);break;case Qc:o.depthFunc(518);break;case jc:o.depthFunc(516);break;case eh:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);se=pe}},setLocked:function(pe){P=pe},setClear:function(pe){be!==pe&&(o.clearDepth(pe),be=pe)},reset:function(){P=!1,oe=null,se=null,be=null}}}function r(){let P=!1,oe=null,se=null,be=null,pe=null,Te=null,te=null,Ee=null,He=null;return{setTest:function(We){P||(We?ye(2960):H(2960))},setMask:function(We){oe!==We&&!P&&(o.stencilMask(We),oe=We)},setFunc:function(We,mt,Gt){(se!==We||be!==mt||pe!==Gt)&&(o.stencilFunc(We,mt,Gt),se=We,be=mt,pe=Gt)},setOp:function(We,mt,Gt){(Te!==We||te!==mt||Ee!==Gt)&&(o.stencilOp(We,mt,Gt),Te=We,te=mt,Ee=Gt)},setLocked:function(We){P=We},setClear:function(We){He!==We&&(o.clearStencil(We),He=We)},reset:function(){P=!1,oe=null,se=null,be=null,pe=null,Te=null,te=null,Ee=null,He=null}}}const a=new i,l=new s,c=new r;let h={},u={},d=new WeakMap,f=[],g=null,p=!1,m=null,x=null,_=null,M=null,y=null,w=null,T=null,L=!1,v=null,E=null,R=null,D=null,X=null;const j=o.getParameter(35661);let I=!1,V=0;const z=o.getParameter(7938);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=V>=2);let J=null,Z={};const k=o.getParameter(3088),G=o.getParameter(2978),ee=new Xe().fromArray(k),K=new Xe().fromArray(G);function le(P,oe,se){const be=new Uint8Array(4),pe=o.createTexture();o.bindTexture(P,pe),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let Te=0;Te<se;Te++)o.texImage2D(oe+Te,0,6408,1,1,0,6408,5121,be);return pe}const ge={};ge[3553]=le(3553,3553,1),ge[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(2929),l.setFunc(Or),ie(!1),xe(qa),ye(2884),Y(an);function ye(P){h[P]!==!0&&(o.enable(P),h[P]=!0)}function H(P){h[P]!==!1&&(o.disable(P),h[P]=!1)}function Be(P,oe){return u[P]!==oe?(o.bindFramebuffer(P,oe),u[P]=oe,n&&(P===36009&&(u[36160]=oe),P===36160&&(u[36009]=oe)),!0):!1}function we(P,oe){let se=f,be=!1;if(P)if(se=d.get(oe),se===void 0&&(se=[],d.set(oe,se)),P.isWebGLMultipleRenderTargets){const pe=P.texture;if(se.length!==pe.length||se[0]!==36064){for(let Te=0,te=pe.length;Te<te;Te++)se[Te]=36064+Te;se.length=pe.length,be=!0}}else se[0]!==36064&&(se[0]=36064,be=!0);else se[0]!==1029&&(se[0]=1029,be=!0);be&&(t.isWebGL2?o.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ce(P){return g!==P?(o.useProgram(P),g=P,!0):!1}const ae={[Gn]:32774,[Bc]:32778,[Oc]:32779};if(n)ae[Za]=32775,ae[$a]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ae[Za]=P.MIN_EXT,ae[$a]=P.MAX_EXT)}const Fe={[Uc]:0,[kc]:1,[Vc]:768,[Lo]:770,[Jc]:776,[qc]:774,[Hc]:772,[Gc]:769,[Po]:771,[Xc]:775,[Wc]:773};function Y(P,oe,se,be,pe,Te,te,Ee){if(P===an){p===!0&&(H(3042),p=!1);return}if(p===!1&&(ye(3042),p=!0),P!==zc){if(P!==m||Ee!==L){if((x!==Gn||y!==Gn)&&(o.blendEquation(32774),x=Gn,y=Gn),Ee)switch(P){case Jn:o.blendFuncSeparate(1,771,1,771);break;case Xa:o.blendFunc(1,1);break;case Ja:o.blendFuncSeparate(0,769,0,1);break;case Ya:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Jn:o.blendFuncSeparate(770,771,1,771);break;case Xa:o.blendFunc(770,1);break;case Ja:o.blendFuncSeparate(0,769,0,1);break;case Ya:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,M=null,w=null,T=null,m=P,L=Ee}return}pe=pe||oe,Te=Te||se,te=te||be,(oe!==x||pe!==y)&&(o.blendEquationSeparate(ae[oe],ae[pe]),x=oe,y=pe),(se!==_||be!==M||Te!==w||te!==T)&&(o.blendFuncSeparate(Fe[se],Fe[be],Fe[Te],Fe[te]),_=se,M=be,w=Te,T=te),m=P,L=null}function q(P,oe){P.side===jn?H(2884):ye(2884);let se=P.side===Tt;oe&&(se=!se),ie(se),P.blending===Jn&&P.transparent===!1?Y(an):Y(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Le(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ye(32926):H(32926)}function ie(P){v!==P&&(P?o.frontFace(2304):o.frontFace(2305),v=P)}function xe(P){P!==Ic?(ye(2884),P!==E&&(P===qa?o.cullFace(1029):P===Dc?o.cullFace(1028):o.cullFace(1032))):H(2884),E=P}function ce(P){P!==R&&(I&&o.lineWidth(P),R=P)}function Le(P,oe,se){P?(ye(32823),(D!==oe||X!==se)&&(o.polygonOffset(oe,se),D=oe,X=se)):H(32823)}function Me(P){P?ye(3089):H(3089)}function ve(P){P===void 0&&(P=33984+j-1),J!==P&&(o.activeTexture(P),J=P)}function Ze(P,oe){J===null&&ve();let se=Z[J];se===void 0&&(se={type:void 0,texture:void 0},Z[J]=se),(se.type!==P||se.texture!==oe)&&(o.bindTexture(P,oe||ge[P]),se.type=P,se.texture=oe)}function Je(){const P=Z[J];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function C(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){ee.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function fe(P){K.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),K.copy(P))}function de(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},J=null,Z={},u={},d=new WeakMap,f=[],g=null,p=!1,m=null,x=null,_=null,M=null,y=null,w=null,T=null,L=!1,v=null,E=null,R=null,D=null,X=null,ee.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ye,disable:H,bindFramebuffer:Be,drawBuffers:we,useProgram:Ce,setBlending:Y,setMaterial:q,setFlipSided:ie,setCullFace:xe,setLineWidth:ce,setPolygonOffset:Le,setScissorTest:Me,activeTexture:ve,bindTexture:Ze,unbindTexture:Je,compressedTexImage2D:C,texImage2D:Ae,texImage3D:O,texStorage2D:ne,texStorage3D:he,texSubImage2D:b,texSubImage3D:B,compressedTexSubImage2D:Q,scissor:_e,viewport:fe,reset:de}}function z0(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return x?new OffscreenCanvas(C,b):Cs("canvas")}function M(C,b,B,Q){let ne=1;if((C.width>Q||C.height>Q)&&(ne=Q/Math.max(C.width,C.height)),ne<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const he=b?Hr:Math.floor,Ae=he(ne*C.width),O=he(ne*C.height);p===void 0&&(p=_(Ae,O));const _e=B?_(Ae,O):p;return _e.width=Ae,_e.height=O,_e.getContext("2d").drawImage(C,0,0,Ae,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ae+"x"+O+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return vo(C.width)&&vo(C.height)}function w(C){return a?!1:C.wrapS!==_t||C.wrapT!==_t||C.minFilter!==at&&C.minFilter!==nt}function T(C,b){return C.generateMipmaps&&b&&C.minFilter!==at&&C.minFilter!==nt}function L(C){o.generateMipmap(C)}function v(C,b,B,Q,ne=!1){if(a===!1)return b;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=b;return b===6403&&(B===5126&&(he=33326),B===5131&&(he=33325),B===5121&&(he=33321)),b===33319&&(B===5126&&(he=33328),B===5131&&(he=33327),B===5121&&(he=33323)),b===6408&&(B===5126&&(he=34836),B===5131&&(he=34842),B===5121&&(he=Q===Ke&&ne===!1?35907:32856),B===32819&&(he=32854),B===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function E(C,b,B){return T(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==at&&C.minFilter!==nt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){return C===at||C===Ur||C===kr?9728:9729}function D(C){const b=C.target;b.removeEventListener("dispose",D),j(b),b.isVideoTexture&&g.delete(b)}function X(C){const b=C.target;b.removeEventListener("dispose",X),V(b)}function j(C){const b=n.get(C);if(b.__webglInit===void 0)return;const B=C.source,Q=m.get(B);if(Q){const ne=Q[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(C),Object.keys(Q).length===0&&m.delete(B)}n.remove(C)}function I(C){const b=n.get(C);o.deleteTexture(b.__webglTexture);const B=C.source,Q=m.get(B);delete Q[b.__cacheKey],r.memory.textures--}function V(C){const b=C.texture,B=n.get(C),Q=n.get(b);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(B.__webglFramebuffer[ne]),B.__webglDepthbuffer&&o.deleteRenderbuffer(B.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&o.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&o.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&o.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,he=b.length;ne<he;ne++){const Ae=n.get(b[ne]);Ae.__webglTexture&&(o.deleteTexture(Ae.__webglTexture),r.memory.textures--),n.remove(b[ne])}n.remove(b),n.remove(C)}let z=0;function J(){z=0}function Z(){const C=z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),z+=1,C}function k(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function G(C,b){const B=n.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(B,C,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,B.__webglTexture)}function ee(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){we(B,C,b);return}t.activeTexture(33984+b),t.bindTexture(35866,B.__webglTexture)}function K(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){we(B,C,b);return}t.activeTexture(33984+b),t.bindTexture(32879,B.__webglTexture)}function le(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Ce(B,C,b);return}t.activeTexture(33984+b),t.bindTexture(34067,B.__webglTexture)}const ge={[bs]:10497,[_t]:33071,[ws]:33648},ye={[at]:9728,[Ur]:9984,[kr]:9986,[nt]:9729,[Ro]:9985,[oi]:9987};function H(C,b,B){if(B?(o.texParameteri(C,10242,ge[b.wrapS]),o.texParameteri(C,10243,ge[b.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,ge[b.wrapR]),o.texParameteri(C,10240,ye[b.magFilter]),o.texParameteri(C,10241,ye[b.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(b.wrapS!==_t||b.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,R(b.magFilter)),o.texParameteri(C,10241,R(b.minFilter)),b.minFilter!==at&&b.minFilter!==nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(b.type===rn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Be(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D));const Q=b.source;let ne=m.get(Q);ne===void 0&&(ne={},m.set(Q,ne));const he=k(b);if(he!==C.__cacheKey){ne[he]===void 0&&(ne[he]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,B=!0),ne[he].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&I(b)),C.__cacheKey=he,C.__webglTexture=ne[he].texture}return B}function we(C,b,B){let Q=3553;b.isDataArrayTexture&&(Q=35866),b.isData3DTexture&&(Q=32879);const ne=Be(C,b),he=b.source;if(t.activeTexture(33984+B),t.bindTexture(Q,C.__webglTexture),he.version!==he.__currentVersion||ne===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const Ae=w(b)&&y(b.image)===!1;let O=M(b.image,Ae,!1,h);O=Je(b,O);const _e=y(O)||a,fe=s.convert(b.format,b.encoding);let de=s.convert(b.type),P=v(b.internalFormat,fe,de,b.encoding,b.isVideoTexture);H(Q,b,_e);let oe;const se=b.mipmaps,be=a&&b.isVideoTexture!==!0,pe=he.__currentVersion===void 0||ne===!0,Te=E(b,O,_e);if(b.isDepthTexture)P=6402,a?b.type===rn?P=36012:b.type===yn?P=33190:b.type===Yn?P=35056:P=33189:b.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Mn&&P===6402&&b.type!==Io&&b.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=yn,de=s.convert(b.type)),b.format===ei&&P===6402&&(P=34041,b.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Yn,de=s.convert(b.type))),pe&&(be?t.texStorage2D(3553,1,P,O.width,O.height):t.texImage2D(3553,0,P,O.width,O.height,0,fe,de,null));else if(b.isDataTexture)if(se.length>0&&_e){be&&pe&&t.texStorage2D(3553,Te,P,se[0].width,se[0].height);for(let te=0,Ee=se.length;te<Ee;te++)oe=se[te],be?t.texSubImage2D(3553,te,0,0,oe.width,oe.height,fe,de,oe.data):t.texImage2D(3553,te,P,oe.width,oe.height,0,fe,de,oe.data);b.generateMipmaps=!1}else be?(pe&&t.texStorage2D(3553,Te,P,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,fe,de,O.data)):t.texImage2D(3553,0,P,O.width,O.height,0,fe,de,O.data);else if(b.isCompressedTexture){be&&pe&&t.texStorage2D(3553,Te,P,se[0].width,se[0].height);for(let te=0,Ee=se.length;te<Ee;te++)oe=se[te],b.format!==At?fe!==null?be?t.compressedTexSubImage2D(3553,te,0,0,oe.width,oe.height,fe,oe.data):t.compressedTexImage2D(3553,te,P,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,te,0,0,oe.width,oe.height,fe,de,oe.data):t.texImage2D(3553,te,P,oe.width,oe.height,0,fe,de,oe.data)}else if(b.isDataArrayTexture)be?(pe&&t.texStorage3D(35866,Te,P,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,fe,de,O.data)):t.texImage3D(35866,0,P,O.width,O.height,O.depth,0,fe,de,O.data);else if(b.isData3DTexture)be?(pe&&t.texStorage3D(32879,Te,P,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,fe,de,O.data)):t.texImage3D(32879,0,P,O.width,O.height,O.depth,0,fe,de,O.data);else if(b.isFramebufferTexture){if(pe)if(be)t.texStorage2D(3553,Te,P,O.width,O.height);else{let te=O.width,Ee=O.height;for(let He=0;He<Te;He++)t.texImage2D(3553,He,P,te,Ee,0,fe,de,null),te>>=1,Ee>>=1}}else if(se.length>0&&_e){be&&pe&&t.texStorage2D(3553,Te,P,se[0].width,se[0].height);for(let te=0,Ee=se.length;te<Ee;te++)oe=se[te],be?t.texSubImage2D(3553,te,0,0,fe,de,oe):t.texImage2D(3553,te,P,fe,de,oe);b.generateMipmaps=!1}else be?(pe&&t.texStorage2D(3553,Te,P,O.width,O.height),t.texSubImage2D(3553,0,0,0,fe,de,O)):t.texImage2D(3553,0,P,fe,de,O);T(b,_e)&&L(Q),he.__currentVersion=he.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ce(C,b,B){if(b.image.length!==6)return;const Q=Be(C,b),ne=b.source;if(t.activeTexture(33984+B),t.bindTexture(34067,C.__webglTexture),ne.version!==ne.__currentVersion||Q===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,O=[];for(let te=0;te<6;te++)!he&&!Ae?O[te]=M(b.image[te],!1,!0,c):O[te]=Ae?b.image[te].image:b.image[te],O[te]=Je(b,O[te]);const _e=O[0],fe=y(_e)||a,de=s.convert(b.format,b.encoding),P=s.convert(b.type),oe=v(b.internalFormat,de,P,b.encoding),se=a&&b.isVideoTexture!==!0,be=ne.__currentVersion===void 0||Q===!0;let pe=E(b,_e,fe);H(34067,b,fe);let Te;if(he){se&&be&&t.texStorage2D(34067,pe,oe,_e.width,_e.height);for(let te=0;te<6;te++){Te=O[te].mipmaps;for(let Ee=0;Ee<Te.length;Ee++){const He=Te[Ee];b.format!==At?de!==null?se?t.compressedTexSubImage2D(34069+te,Ee,0,0,He.width,He.height,de,He.data):t.compressedTexImage2D(34069+te,Ee,oe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?t.texSubImage2D(34069+te,Ee,0,0,He.width,He.height,de,P,He.data):t.texImage2D(34069+te,Ee,oe,He.width,He.height,0,de,P,He.data)}}}else{Te=b.mipmaps,se&&be&&(Te.length>0&&pe++,t.texStorage2D(34067,pe,oe,O[0].width,O[0].height));for(let te=0;te<6;te++)if(Ae){se?t.texSubImage2D(34069+te,0,0,0,O[te].width,O[te].height,de,P,O[te].data):t.texImage2D(34069+te,0,oe,O[te].width,O[te].height,0,de,P,O[te].data);for(let Ee=0;Ee<Te.length;Ee++){const We=Te[Ee].image[te].image;se?t.texSubImage2D(34069+te,Ee+1,0,0,We.width,We.height,de,P,We.data):t.texImage2D(34069+te,Ee+1,oe,We.width,We.height,0,de,P,We.data)}}else{se?t.texSubImage2D(34069+te,0,0,0,de,P,O[te]):t.texImage2D(34069+te,0,oe,de,P,O[te]);for(let Ee=0;Ee<Te.length;Ee++){const He=Te[Ee];se?t.texSubImage2D(34069+te,Ee+1,0,0,de,P,He.image[te]):t.texImage2D(34069+te,Ee+1,oe,de,P,He.image[te])}}}T(b,fe)&&L(34067),ne.__currentVersion=ne.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ae(C,b,B,Q,ne){const he=s.convert(B.format,B.encoding),Ae=s.convert(B.type),O=v(B.internalFormat,he,Ae,B.encoding);n.get(b).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,O,b.width,b.height,b.depth,0,he,Ae,null):t.texImage2D(ne,0,O,b.width,b.height,0,he,Ae,null)),t.bindFramebuffer(36160,C),ve(b)?d.framebufferTexture2DMultisampleEXT(36160,Q,ne,n.get(B).__webglTexture,0,Me(b)):o.framebufferTexture2D(36160,Q,ne,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(C,b,B){if(o.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let Q=33189;if(B||ve(b)){const ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===rn?Q=36012:ne.type===yn&&(Q=33190));const he=Me(b);ve(b)?d.renderbufferStorageMultisampleEXT(36161,he,Q,b.width,b.height):o.renderbufferStorageMultisample(36161,he,Q,b.width,b.height)}else o.renderbufferStorage(36161,Q,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const Q=Me(b);B&&ve(b)===!1?o.renderbufferStorageMultisample(36161,Q,35056,b.width,b.height):ve(b)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0;ne<Q.length;ne++){const he=Q[ne],Ae=s.convert(he.format,he.encoding),O=s.convert(he.type),_e=v(he.internalFormat,Ae,O,he.encoding),fe=Me(b);B&&ve(b)===!1?o.renderbufferStorageMultisample(36161,fe,_e,b.width,b.height):ve(b)?d.renderbufferStorageMultisampleEXT(36161,fe,_e,b.width,b.height):o.renderbufferStorage(36161,_e,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function Y(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,ne=Me(b);if(b.depthTexture.format===Mn)ve(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ne):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(b.depthTexture.format===ei)ve(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ne):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function q(C){const b=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Y(b.__webglFramebuffer,C)}else if(B){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=o.createRenderbuffer(),Fe(b.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Fe(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function ie(C,b,B){const Q=n.get(C);b!==void 0&&ae(Q.__webglFramebuffer,C,C.texture,36064,3553),B!==void 0&&q(C)}function xe(C){const b=C.texture,B=n.get(C),Q=n.get(b);C.addEventListener("dispose",X),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=b.version,r.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,Ae=y(C)||a;if(ne){B.__webglFramebuffer=[];for(let O=0;O<6;O++)B.__webglFramebuffer[O]=o.createFramebuffer()}else{if(B.__webglFramebuffer=o.createFramebuffer(),he)if(i.drawBuffers){const O=C.texture;for(let _e=0,fe=O.length;_e<fe;_e++){const de=n.get(O[_e]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ve(C)===!1){const O=he?b:[b];B.__webglMultisampledFramebuffer=o.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let _e=0;_e<O.length;_e++){const fe=O[_e];B.__webglColorRenderbuffer[_e]=o.createRenderbuffer(),o.bindRenderbuffer(36161,B.__webglColorRenderbuffer[_e]);const de=s.convert(fe.format,fe.encoding),P=s.convert(fe.type),oe=v(fe.internalFormat,de,P,fe.encoding),se=Me(C);o.renderbufferStorageMultisample(36161,se,oe,C.width,C.height),o.framebufferRenderbuffer(36160,36064+_e,36161,B.__webglColorRenderbuffer[_e])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Q.__webglTexture),H(34067,b,Ae);for(let O=0;O<6;O++)ae(B.__webglFramebuffer[O],C,b,36064,34069+O);T(b,Ae)&&L(34067),t.unbindTexture()}else if(he){const O=C.texture;for(let _e=0,fe=O.length;_e<fe;_e++){const de=O[_e],P=n.get(de);t.bindTexture(3553,P.__webglTexture),H(3553,de,Ae),ae(B.__webglFramebuffer,C,de,36064+_e,3553),T(de,Ae)&&L(3553)}t.unbindTexture()}else{let O=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?O=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(O,Q.__webglTexture),H(O,b,Ae),ae(B.__webglFramebuffer,C,b,36064,O),T(b,Ae)&&L(O),t.unbindTexture()}C.depthBuffer&&q(C)}function ce(C){const b=y(C)||a,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,ne=B.length;Q<ne;Q++){const he=B[Q];if(T(he,b)){const Ae=C.isWebGLCubeRenderTarget?34067:3553,O=n.get(he).__webglTexture;t.bindTexture(Ae,O),L(Ae),t.unbindTexture()}}}function Le(C){if(a&&C.samples>0&&ve(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,Q=C.height;let ne=16384;const he=[],Ae=C.stencilBuffer?33306:36096,O=n.get(C),_e=C.isWebGLMultipleRenderTargets===!0;if(_e)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,O.__webglFramebuffer),o.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,O.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,O.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){he.push(36064+fe),C.depthBuffer&&he.push(Ae);const de=O.__ignoreDepthValues!==void 0?O.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(ne|=256),C.stencilBuffer&&(ne|=1024)),_e&&o.framebufferRenderbuffer(36008,36064,36161,O.__webglColorRenderbuffer[fe]),de===!0&&(o.invalidateFramebuffer(36008,[Ae]),o.invalidateFramebuffer(36009,[Ae])),_e){const P=n.get(b[fe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,P,0)}o.blitFramebuffer(0,0,B,Q,0,0,B,Q,ne,9728),f&&o.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+fe,36161,O.__webglColorRenderbuffer[fe]);const de=n.get(b[fe]).__webglTexture;t.bindFramebuffer(36160,O.__webglFramebuffer),o.framebufferTexture2D(36009,36064+fe,3553,de,0)}t.bindFramebuffer(36009,O.__webglMultisampledFramebuffer)}}function Me(C){return Math.min(u,C.samples)}function ve(C){const b=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ze(C){const b=r.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function Je(C,b){const B=C.encoding,Q=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Gr||B!==An&&(B===Ke?a===!1?e.has("EXT_sRGB")===!0&&Q===At?(C.format=Gr,C.minFilter=nt,C.generateMipmaps=!1):b=No.sRGBToLinear(b):(Q!==At||ne!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),b}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=G,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=le,this.rebindTextures=ie,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ve}function Gh(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===Sn)return 5121;if(s===uh)return 32819;if(s===dh)return 32820;if(s===lh)return 5120;if(s===ch)return 5122;if(s===Io)return 5123;if(s===hh)return 5124;if(s===yn)return 5125;if(s===rn)return 5126;if(s===ki)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fh)return 6406;if(s===At)return 6408;if(s===mh)return 6409;if(s===gh)return 6410;if(s===Mn)return 6402;if(s===ei)return 34041;if(s===xh)return 6403;if(s===ph)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Gr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===_h)return 36244;if(s===yh)return 33319;if(s===vh)return 33320;if(s===Mh)return 36249;if(s===Pr||s===Rr||s===Ir||s===Dr)if(r===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ka||s===Qa||s===ja||s===eo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ka)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===eo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===to||s===no)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===to)return r===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===no)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===io||s===so||s===ro||s===ao||s===oo||s===lo||s===co||s===ho||s===uo||s===fo||s===po||s===mo||s===go||s===xo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===io)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===so)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ro)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ao)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oo)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lo)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===co)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ho)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uo)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fo)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===po)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mo)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===go)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xo)return r===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_o)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_o)return r===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Yn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Hh extends dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B0))),c&&e.hand){r=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const _=new Bi;_.matrixAutoUpdate=!1,_.visible=!1,c.joints[p.jointName]=_,c.add(_)}const x=c.joints[p.jointName];m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=m.radius),x.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class Wh extends lt{constructor(e,t,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:Mn,h!==Mn&&h!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mn&&(n=yn),n===void 0&&h===ei&&(n=Yn),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:at,this.minFilter=l!==void 0?l:at,this.flipY=!1,this.generateMipmaps=!1}}class O0 extends Ln{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,f=null;const g=t.getContextAttributes();let p=null,m=null;const x=[],_=new Map,M=new dt;M.layers.enable(1),M.viewport=new Xe;const y=new dt;y.layers.enable(2),y.viewport=new Xe;const w=[M,y],T=new Hh;T.layers.enable(1),T.layers.enable(2);let L=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let G=x[k];return G===void 0&&(G=new Na,x[k]=G),G.getTargetRaySpace()},this.getControllerGrip=function(k){let G=x[k];return G===void 0&&(G=new Na,x[k]=G),G.getGripSpace()},this.getHand=function(k){let G=x[k];return G===void 0&&(G=new Na,x[k]=G),G.getHandSpace()};function E(k){const G=_.get(k.inputSource);G!==void 0&&G.dispatchEvent({type:k.type,data:k.inputSource})}function R(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D),_.forEach(function(k,G){k!==void 0&&k.disconnect(G)}),_.clear(),L=null,v=null,e.setRenderTarget(p),d=null,u=null,h=null,i=null,m=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:d}),m=new Ct(d.framebufferWidth,d.framebufferHeight,{format:At,type:Sn,encoding:e.outputEncoding})}else{let G=null,ee=null,K=null;g.depth&&(K=g.stencil?35056:33190,G=g.stencil?ei:Mn,ee=g.stencil?Yn:yn);const le={colorFormat:e.outputEncoding===Ke?35907:32856,depthFormat:K,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(le),i.updateRenderState({layers:[u]}),m=new Ct(u.textureWidth,u.textureHeight,{format:At,type:Sn,depthTexture:new Wh(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ge=e.properties.get(m);ge.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(k){const G=i.inputSources;for(let ee=0;ee<G.length;ee++){const K=G[ee].handedness==="right"?1:0;_.set(G[ee],x[K])}for(let ee=0;ee<k.removed.length;ee++){const K=k.removed[ee],le=_.get(K);le&&(le.dispatchEvent({type:"disconnected",data:K}),_.delete(K))}for(let ee=0;ee<k.added.length;ee++){const K=k.added[ee],le=_.get(K);le&&le.dispatchEvent({type:"connected",data:K})}}const X=new S,j=new S;function I(k,G,ee){X.setFromMatrixPosition(G.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const K=X.distanceTo(j),le=G.projectionMatrix.elements,ge=ee.projectionMatrix.elements,ye=le[14]/(le[10]-1),H=le[14]/(le[10]+1),Be=(le[9]+1)/le[5],we=(le[9]-1)/le[5],Ce=(le[8]-1)/le[0],ae=(ge[8]+1)/ge[0],Fe=ye*Ce,Y=ye*ae,q=K/(-Ce+ae),ie=q*-Ce;G.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ie),k.translateZ(q),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const xe=ye+q,ce=H+q,Le=Fe-ie,Me=Y+(K-ie),ve=Be*H/ce*xe,Ze=we*H/ce*xe;k.projectionMatrix.makePerspective(Le,Me,ve,Ze,xe,ce)}function V(k,G){G===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(G.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;T.near=y.near=M.near=k.near,T.far=y.far=M.far=k.far,(L!==T.near||v!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,v=T.far);const G=k.parent,ee=T.cameras;V(T,G);for(let le=0;le<ee.length;le++)V(ee[le],G);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),k.position.copy(T.position),k.quaternion.copy(T.quaternion),k.scale.copy(T.scale),k.matrix.copy(T.matrix),k.matrixWorld.copy(T.matrixWorld);const K=k.children;for(let le=0,ge=K.length;le<ge;le++)K[le].updateMatrixWorld(!0);ee.length===2?I(T,M,y):T.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let z=null;function J(k,G){if(c=G.getViewerPose(l||r),f=G,c!==null){const K=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let le=!1;K.length!==T.cameras.length&&(T.cameras.length=0,le=!0);for(let ge=0;ge<K.length;ge++){const ye=K[ge];let H=null;if(d!==null)H=d.getViewport(ye);else{const we=h.getViewSubImage(u,ye);H=we.viewport,ge===0&&(e.setRenderTargetTextures(m,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(m))}let Be=w[ge];Be===void 0&&(Be=new dt,Be.layers.enable(ge),Be.viewport=new Xe,w[ge]=Be),Be.matrix.fromArray(ye.transform.matrix),Be.projectionMatrix.fromArray(ye.projectionMatrix),Be.viewport.set(H.x,H.y,H.width,H.height),ge===0&&T.matrix.copy(Be.matrix),le===!0&&T.cameras.push(Be)}}const ee=i.inputSources;for(let K=0;K<x.length;K++){const le=ee[K],ge=_.get(le);ge!==void 0&&ge.update(le,G,l||r)}z&&z(k,G),f=null}const Z=new zh;Z.setAnimationLoop(J),this.setAnimationLoop=function(k){z=k},this.dispose=function(){}}}function U0(o,e){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,x,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?a(p,m,x,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Tt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Tt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.iridescenceMap?_=m.iridescenceMap:m.iridescenceThicknessMap?_=m.iridescenceThicknessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Tt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function k0(){const o=Cs("canvas");return o.style.display="block",o}function qh(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:k0(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=An,this.physicallyCorrectLights=!1,this.toneMapping=Jt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,x=0,_=0,M=null,y=-1,w=null;const T=new Xe,L=new Xe;let v=null,E=e.width,R=e.height,D=1,X=null,j=null;const I=new Xe(0,0,E,R),V=new Xe(0,0,E,R);let z=!1;const J=new $r;let Z=!1,k=!1,G=null;const ee=new Ie,K=new $,le=new S,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return M===null?D:1}let H=t;function Be(A,F){for(let U=0;U<A.length;U++){const N=A[U],W=e.getContext(N,F);if(W!==null)return W}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wr}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",se,!1),H===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),H=Be(F,A),H===null)throw Be(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,Ce,ae,Fe,Y,q,ie,xe,ce,Le,Me,ve,Ze,Je,C,b,B,Q,ne,he,Ae,O,_e;function fe(){we=new ng(H),Ce=new $m(H,we,o),we.init(Ce),O=new Gh(H,we,Ce),ae=new N0(H,we,Ce),Fe=new rg,Y=new w0,q=new z0(H,we,ae,Y,Ce,O,Fe),ie=new Qm(p),xe=new tg(p),ce=new xf(H,Ce),_e=new Ym(H,we,ce,Ce),Le=new ig(H,ce,Fe,_e),Me=new cg(H,Le,ce,Fe),ne=new lg(H,Ce,q),b=new Km(Y),ve=new b0(p,ie,xe,we,Ce,_e,b),Ze=new U0(p,Y),Je=new A0,C=new R0(we,Ce),Q=new Jm(p,ie,ae,Me,h,r),B=new F0(p,Me,Ce),he=new Zm(H,we,Fe,Ce),Ae=new sg(H,we,Fe,Ce),Fe.programs=ve.programs,p.capabilities=Ce,p.extensions=we,p.properties=Y,p.renderLists=Je,p.shadowMap=B,p.state=ae,p.info=Fe}fe();const de=new O0(p,H);this.xr=de,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(E,R,!1))},this.getSize=function(A){return A.set(E,R)},this.setSize=function(A,F,U){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,R=F,e.width=Math.floor(A*D),e.height=Math.floor(F*D),U!==!1&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(E*D,R*D).floor()},this.setDrawingBufferSize=function(A,F,U){E=A,R=F,D=U,e.width=Math.floor(A*U),e.height=Math.floor(F*U),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,F,U,N){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,F,U,N),ae.viewport(T.copy(I).multiplyScalar(D).floor())},this.getScissor=function(A){return A.copy(V)},this.setScissor=function(A,F,U,N){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,F,U,N),ae.scissor(L.copy(V).multiplyScalar(D).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(A){ae.setScissorTest(z=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(A=!0,F=!0,U=!0){let N=0;A&&(N|=16384),F&&(N|=256),U&&(N|=1024),H.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",se,!1),Je.dispose(),C.dispose(),Y.dispose(),ie.dispose(),xe.dispose(),Me.dispose(),_e.dispose(),ve.dispose(),de.dispose(),de.removeEventListener("sessionstart",He),de.removeEventListener("sessionend",We),G&&(G.dispose(),G=null),mt.stop()};function P(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const A=Fe.autoReset,F=B.enabled,U=B.autoUpdate,N=B.needsUpdate,W=B.type;fe(),Fe.autoReset=A,B.enabled=F,B.autoUpdate=U,B.needsUpdate=N,B.type=W}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const F=A.target;F.removeEventListener("dispose",be),pe(F)}function pe(A){Te(A),Y.remove(A)}function Te(A){const F=Y.get(A).programs;F!==void 0&&(F.forEach(function(U){ve.releaseProgram(U)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,U,N,W,Se){F===null&&(F=ge);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Hu(A,F,U,N,W);ae.setMaterial(N,Pe);let De=U.index;const qe=U.attributes.position;if(De===null){if(qe===void 0||qe.count===0)return}else if(De.count===0)return;let Oe=1;N.wireframe===!0&&(De=Le.getWireframeAttribute(U),Oe=2),_e.setup(W,N,Ne,U,De);let ke,je=he;De!==null&&(ke=ce.get(De),je=Ae,je.setIndex(ke));const In=De!==null?De.count:qe.count,fi=U.drawRange.start*Oe,pi=U.drawRange.count*Oe,Ht=Se!==null?Se.start*Oe:0,Ve=Se!==null?Se.count*Oe:1/0,mi=Math.max(fi,Ht),st=Math.min(In,fi+pi,Ht+Ve)-1,Wt=Math.max(0,st-mi+1);if(Wt!==0){if(W.isMesh)N.wireframe===!0?(ae.setLineWidth(N.wireframeLinewidth*ye()),je.setMode(1)):je.setMode(4);else if(W.isLine){let cn=N.linewidth;cn===void 0&&(cn=1),ae.setLineWidth(cn*ye()),W.isLineSegments?je.setMode(1):W.isLineLoop?je.setMode(2):je.setMode(3)}else W.isPoints?je.setMode(0):W.isSprite&&je.setMode(4);if(W.isInstancedMesh)je.renderInstances(mi,Wt,W.count);else if(U.isInstancedBufferGeometry){const cn=Math.min(U.instanceCount,U._maxInstanceCount);je.renderInstances(mi,Wt,cn)}else je.render(mi,Wt)}},this.compile=function(A,F){d=C.get(A),d.init(),g.push(d),A.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(p.physicallyCorrectLights),A.traverse(function(U){const N=U.material;if(N)if(Array.isArray(N))for(let W=0;W<N.length;W++){const Se=N[W];oa(Se,A,U)}else oa(N,A,U)}),g.pop(),d=null};let te=null;function Ee(A){te&&te(A)}function He(){mt.stop()}function We(){mt.start()}const mt=new zh;mt.setAnimationLoop(Ee),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(A){te=A,de.setAnimationLoop(A),A===null?mt.stop():mt.start()},de.addEventListener("sessionstart",He),de.addEventListener("sessionend",We),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,F,M),d=C.get(A,g.length),d.init(),g.push(d),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(ee),k=this.localClippingEnabled,Z=b.init(this.clippingPlanes,k,F),u=Je.get(A,f.length),u.init(),f.push(u),Gt(A,F,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(X,j),Z===!0&&b.beginShadows();const U=d.state.shadowsArray;if(B.render(U,A,F),Z===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,A),d.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const N=F.cameras;for(let W=0,Se=N.length;W<Se;W++){const Pe=N[W];al(u,A,Pe,Pe.viewport)}}else al(u,A,F);M!==null&&(q.updateMultisampleRenderTarget(M),q.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(p,A,F),_e.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Gt(A,F,U,N){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)U=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){N&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Pe=Me.update(A),Ne=A.material;Ne.visible&&u.push(A,Pe,Ne,U,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Fe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Fe.render.frame),!A.frustumCulled||J.intersectsObject(A))){N&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Pe=Me.update(A),Ne=A.material;if(Array.isArray(Ne)){const De=Pe.groups;for(let qe=0,Oe=De.length;qe<Oe;qe++){const ke=De[qe],je=Ne[ke.materialIndex];je&&je.visible&&u.push(A,Pe,je,U,le.z,ke)}}else Ne.visible&&u.push(A,Pe,Ne,U,le.z,null)}}const Se=A.children;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++)Gt(Se[Pe],F,U,N)}function al(A,F,U,N){const W=A.opaque,Se=A.transmissive,Pe=A.transparent;d.setupLightsView(U),Se.length>0&&Vu(W,F,U),N&&ae.viewport(T.copy(N)),W.length>0&&Gs(W,F,U),Se.length>0&&Gs(Se,F,U),Pe.length>0&&Gs(Pe,F,U),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Vu(A,F,U){const N=Ce.isWebGL2;G===null&&(G=new Ct(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?ki:Sn,minFilter:oi,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(K),N?G.setSize(K.x,K.y):G.setSize(Hr(K.x),Hr(K.y));const W=p.getRenderTarget();p.setRenderTarget(G),p.clear();const Se=p.toneMapping;p.toneMapping=Jt,Gs(A,F,U),p.toneMapping=Se,q.updateMultisampleRenderTarget(G),q.updateRenderTargetMipmap(G),p.setRenderTarget(W)}function Gs(A,F,U){const N=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Pe=A[W],Ne=Pe.object,De=Pe.geometry,qe=N===null?Pe.material:N,Oe=Pe.group;Ne.layers.test(U.layers)&&Gu(Ne,F,U,De,qe,Oe)}}function Gu(A,F,U,N,W,Se){A.onBeforeRender(p,F,U,N,W,Se),A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(p,F,U,N,A,Se),W.transparent===!0&&W.side===jn?(W.side=Tt,W.needsUpdate=!0,p.renderBufferDirect(U,F,N,W,A,Se),W.side=Qn,W.needsUpdate=!0,p.renderBufferDirect(U,F,N,W,A,Se),W.side=jn):p.renderBufferDirect(U,F,N,W,A,Se),A.onAfterRender(p,F,U,N,W,Se)}function oa(A,F,U){F.isScene!==!0&&(F=ge);const N=Y.get(A),W=d.state.lights,Se=d.state.shadowsArray,Pe=W.state.version,Ne=ve.getParameters(A,W.state,Se,F,U),De=ve.getProgramCacheKey(Ne);let qe=N.programs;N.environment=A.isMeshStandardMaterial?F.environment:null,N.fog=F.fog,N.envMap=(A.isMeshStandardMaterial?xe:ie).get(A.envMap||N.environment),qe===void 0&&(A.addEventListener("dispose",be),qe=new Map,N.programs=qe);let Oe=qe.get(De);if(Oe!==void 0){if(N.currentProgram===Oe&&N.lightsStateVersion===Pe)return ol(A,Ne),Oe}else Ne.uniforms=ve.getUniforms(A),A.onBuild(U,Ne,p),A.onBeforeCompile(Ne,p),Oe=ve.acquireProgram(Ne,De),qe.set(De,Oe),N.uniforms=Ne.uniforms;const ke=N.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=b.uniform),ol(A,Ne),N.needsLights=qu(A),N.lightsStateVersion=Pe,N.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotShadowMatrix.value=W.state.spotShadowMatrix,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix);const je=Oe.getUniforms(),In=Br.seqWithValue(je.seq,ke);return N.currentProgram=Oe,N.uniformsList=In,Oe}function ol(A,F){const U=Y.get(A);U.outputEncoding=F.outputEncoding,U.instancing=F.instancing,U.skinning=F.skinning,U.morphTargets=F.morphTargets,U.morphNormals=F.morphNormals,U.morphColors=F.morphColors,U.morphTargetsCount=F.morphTargetsCount,U.numClippingPlanes=F.numClippingPlanes,U.numIntersection=F.numClipIntersection,U.vertexAlphas=F.vertexAlphas,U.vertexTangents=F.vertexTangents,U.toneMapping=F.toneMapping}function Hu(A,F,U,N,W){F.isScene!==!0&&(F=ge),q.resetTextureUnits();const Se=F.fog,Pe=N.isMeshStandardMaterial?F.environment:null,Ne=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:An,De=(N.isMeshStandardMaterial?xe:ie).get(N.envMap||Pe),qe=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Oe=!!N.normalMap&&!!U.attributes.tangent,ke=!!U.morphAttributes.position,je=!!U.morphAttributes.normal,In=!!U.morphAttributes.color,fi=N.toneMapped?p.toneMapping:Jt,pi=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ht=pi!==void 0?pi.length:0,Ve=Y.get(N),mi=d.state.lights;if(Z===!0&&(k===!0||A!==w)){const qt=A===w&&N.id===y;b.setState(N,A,qt)}let st=!1;N.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==mi.state.version||Ve.outputEncoding!==Ne||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==De||N.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==b.numPlanes||Ve.numIntersection!==b.numIntersection)||Ve.vertexAlphas!==qe||Ve.vertexTangents!==Oe||Ve.morphTargets!==ke||Ve.morphNormals!==je||Ve.morphColors!==In||Ve.toneMapping!==fi||Ce.isWebGL2===!0&&Ve.morphTargetsCount!==Ht)&&(st=!0):(st=!0,Ve.__version=N.version);let Wt=Ve.currentProgram;st===!0&&(Wt=oa(N,F,W));let cn=!1,as=!1,la=!1;const gt=Wt.getUniforms(),os=Ve.uniforms;if(ae.useProgram(Wt.program)&&(cn=!0,as=!0,la=!0),N.id!==y&&(y=N.id,as=!0),cn||w!==A){if(gt.setValue(H,"projectionMatrix",A.projectionMatrix),Ce.logarithmicDepthBuffer&&gt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,as=!0,la=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const qt=gt.map.cameraPosition;qt!==void 0&&qt.setValue(H,le.setFromMatrixPosition(A.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&gt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||W.isSkinnedMesh)&&gt.setValue(H,"viewMatrix",A.matrixWorldInverse)}if(W.isSkinnedMesh){gt.setOptional(H,W,"bindMatrix"),gt.setOptional(H,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(Ce.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),gt.setValue(H,"boneTexture",qt.boneTexture,q),gt.setValue(H,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ca=U.morphAttributes;return(ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Ce.isWebGL2===!0)&&ne.update(W,U,N,Wt),(as||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,gt.setValue(H,"receiveShadow",W.receiveShadow)),as&&(gt.setValue(H,"toneMappingExposure",p.toneMappingExposure),Ve.needsLights&&Wu(os,la),Se&&N.fog===!0&&Ze.refreshFogUniforms(os,Se),Ze.refreshMaterialUniforms(os,N,D,R,G),Br.upload(H,Ve.uniformsList,os,q)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Br.upload(H,Ve.uniformsList,os,q),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&gt.setValue(H,"center",W.center),gt.setValue(H,"modelViewMatrix",W.modelViewMatrix),gt.setValue(H,"normalMatrix",W.normalMatrix),gt.setValue(H,"modelMatrix",W.matrixWorld),Wt}function Wu(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function qu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,F,U){Y.get(A.texture).__webglTexture=F,Y.get(A.depthTexture).__webglTexture=U;const N=Y.get(A);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const U=Y.get(A);U.__webglFramebuffer=F,U.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,U=0){M=A,x=F,_=U;let N=!0;if(A){const De=Y.get(A);De.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),N=!1):De.__webglFramebuffer===void 0?q.setupRenderTarget(A):De.__hasExternalTextures&&q.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture)}let W=null,Se=!1,Pe=!1;if(A){const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture)&&(Pe=!0);const qe=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(W=qe[F],Se=!0):Ce.isWebGL2&&A.samples>0&&q.useMultisampledRTT(A)===!1?W=Y.get(A).__webglMultisampledFramebuffer:W=qe,T.copy(A.viewport),L.copy(A.scissor),v=A.scissorTest}else T.copy(I).multiplyScalar(D).floor(),L.copy(V).multiplyScalar(D).floor(),v=z;if(ae.bindFramebuffer(36160,W)&&Ce.drawBuffers&&N&&ae.drawBuffers(A,W),ae.viewport(T),ae.scissor(L),ae.setScissorTest(v),Se){const De=Y.get(A.texture);H.framebufferTexture2D(36160,36064,34069+F,De.__webglTexture,U)}else if(Pe){const De=Y.get(A.texture),qe=F||0;H.framebufferTextureLayer(36160,36064,De.__webglTexture,U||0,qe)}y=-1},this.readRenderTargetPixels=function(A,F,U,N,W,Se,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){ae.bindFramebuffer(36160,Ne);try{const De=A.texture,qe=De.format,Oe=De.type;if(qe!==At&&O.convert(qe)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===ki&&(we.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&we.has("EXT_color_buffer_float"));if(Oe!==Sn&&O.convert(Oe)!==H.getParameter(35738)&&!(Oe===rn&&(Ce.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-N&&U>=0&&U<=A.height-W&&H.readPixels(F,U,N,W,O.convert(qe),O.convert(Oe),Se)}finally{const De=M!==null?Y.get(M).__webglFramebuffer:null;ae.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(A,F,U=0){const N=Math.pow(2,-U),W=Math.floor(F.image.width*N),Se=Math.floor(F.image.height*N);q.setTexture2D(F,0),H.copyTexSubImage2D(3553,U,0,0,A.x,A.y,W,Se),ae.unbindTexture()},this.copyTextureToTexture=function(A,F,U,N=0){const W=F.image.width,Se=F.image.height,Pe=O.convert(U.format),Ne=O.convert(U.type);q.setTexture2D(U,0),H.pixelStorei(37440,U.flipY),H.pixelStorei(37441,U.premultiplyAlpha),H.pixelStorei(3317,U.unpackAlignment),F.isDataTexture?H.texSubImage2D(3553,N,A.x,A.y,W,Se,Pe,Ne,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(3553,N,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Pe,F.mipmaps[0].data):H.texSubImage2D(3553,N,A.x,A.y,Pe,Ne,F.image),N===0&&U.generateMipmaps&&H.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(A,F,U,N,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=A.max.x-A.min.x+1,Pe=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,De=O.convert(N.format),qe=O.convert(N.type);let Oe;if(N.isData3DTexture)q.setTexture3D(N,0),Oe=32879;else if(N.isDataArrayTexture)q.setTexture2DArray(N,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment);const ke=H.getParameter(3314),je=H.getParameter(32878),In=H.getParameter(3316),fi=H.getParameter(3315),pi=H.getParameter(32877),Ht=U.isCompressedTexture?U.mipmaps[0]:U.image;H.pixelStorei(3314,Ht.width),H.pixelStorei(32878,Ht.height),H.pixelStorei(3316,A.min.x),H.pixelStorei(3315,A.min.y),H.pixelStorei(32877,A.min.z),U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Oe,W,F.x,F.y,F.z,Se,Pe,Ne,De,qe,Ht.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Oe,W,F.x,F.y,F.z,Se,Pe,Ne,De,Ht.data)):H.texSubImage3D(Oe,W,F.x,F.y,F.z,Se,Pe,Ne,De,qe,Ht),H.pixelStorei(3314,ke),H.pixelStorei(32878,je),H.pixelStorei(3316,In),H.pixelStorei(3315,fi),H.pixelStorei(32877,pi),W===0&&N.generateMipmaps&&H.generateMipmap(Oe),ae.unbindTexture()},this.initTexture=function(A){q.setTexture2D(A,0),ae.unbindTexture()},this.resetState=function(){x=0,_=0,M=null,ae.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Xh extends qh{}Xh.prototype.isWebGL1Renderer=!0;class jr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ue(e),this.density=t}clone(){return new jr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class ea{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Jh extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class ta{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Et()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new S;class ni{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ye(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ni(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vo extends ct{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Pi;const us=new S,Ri=new S,Ii=new S,Di=new $,ds=new $,Yh=new Ie,cr=new S,fs=new S,hr=new S,Vl=new $,za=new $,Gl=new $;class Zh extends Ge{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Re;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ta(t,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new ni(n,3,0,!1)),Pi.setAttribute("uv",new ni(n,2,3,!1))}this.geometry=Pi,this.material=e!==void 0?e:new Vo,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ii.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;ur(cr.set(-.5,-.5,0),Ii,r,Ri,i,s),ur(fs.set(.5,-.5,0),Ii,r,Ri,i,s),ur(hr.set(.5,.5,0),Ii,r,Ri,i,s),Vl.set(0,0),za.set(1,0),Gl.set(1,1);let a=e.ray.intersectTriangle(cr,fs,hr,!1,us);if(a===null&&(ur(fs.set(-.5,.5,0),Ii,r,Ri,i,s),za.set(0,1),a=e.ray.intersectTriangle(cr,hr,fs,!1,us),a===null))return;const l=e.ray.origin.distanceTo(us);l<e.near||l>e.far||t.push({distance:l,point:us.clone(),uv:It.getUV(us,cr,fs,hr,Vl,za,Gl,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ur(o,e,t,n,i,s){Di.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(ds.x=s*Di.x-i*Di.y,ds.y=i*Di.x+s*Di.y):ds.copy(Di),o.copy(e),o.x+=ds.x,o.y+=ds.y,o.applyMatrix4(Yh)}const dr=new S,Hl=new S;class $h extends Ge{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){dr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(dr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){dr.setFromMatrixPosition(e.matrixWorld),Hl.setFromMatrixPosition(this.matrixWorld);const n=dr.distanceTo(Hl)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const r=n[i];t.object.levels.push({object:r.object.uuid,distance:r.distance})}return t}}const Wl=new S,ql=new Xe,Xl=new Xe,V0=new S,Jl=new Ie;class Kh extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;ql.fromBufferAttribute(i.attributes.skinIndex,e),Xl.fromBufferAttribute(i.attributes.skinWeight,e),Wl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Xl.getComponent(s);if(r!==0){const a=ql.getComponent(s);Jl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(V0.copy(Wl).applyMatrix4(Jl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Go extends Ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ui extends lt{constructor(e=null,t=1,n=1,i,s,r,a,l,c=at,h=at,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=new Ie,G0=new Ie;class na{constructor(e=[],t=[]){this.uuid=Et(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:G0;Yl.multiplyMatrices(a,t[s]),Yl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ph(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ui(t,e,e,At,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Go),this.bones.push(r),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Gi extends Ye{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zl=new Ie,$l=new Ie,fr=[],ps=new ft;class Qh extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Zl),$l.multiplyMatrices(n,Zl),ps.matrixWorld=$l,ps.raycast(e,fr);for(let r=0,a=fr.length;r<a;r++){const l=fr[r];l.instanceId=s,l.object=this,t.push(l)}fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mt extends ct{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kl=new S,Ql=new S,jl=new Ie,Ba=new Us,pr=new hi;class Tn extends Ge{constructor(e=new Re,t=new Mt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Kl.fromBufferAttribute(t,i-1),Ql.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Kl.distanceTo(Ql);e.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=s,e.ray.intersectsSphere(pr)===!1)return;jl.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,h=new S,u=new S,d=new S,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const x=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let M=x,y=_-1;M<y;M+=f){const w=g.getX(M),T=g.getX(M+1);if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,T),Ba.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,r.start),_=Math.min(m.count,r.start+r.count);for(let M=x,y=_-1;M<y;M+=f){if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,M+1),Ba.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ec=new S,tc=new S;class Kt extends Tn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ec.fromBufferAttribute(t,i),tc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ec.distanceTo(tc);e.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jh extends Tn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ho extends ct{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nc=new Ie,wo=new Us,mr=new hi,gr=new S;class eu extends Ge{constructor(e=new Re,t=new Ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;nc.copy(i).invert(),wo.copy(e.ray).applyMatrix4(nc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,p=f;g<p;g++){const m=c.getX(g);gr.fromBufferAttribute(u,m),ic(gr,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,p=f;g<p;g++)gr.fromBufferAttribute(u,g),ic(gr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ic(o,e,t,n,i,s,r){const a=wo.distanceSqToPoint(o);if(a<t){const l=new S;wo.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class H0 extends lt{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:nt,this.magFilter=s!==void 0?s:nt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class W0 extends lt{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=at,this.minFilter=at,this.generateMipmaps=!1,this.needsUpdate=!0}}class tu extends lt{constructor(e,t,n,i,s,r,a,l,c,h,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class q0 extends lt{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new $:new S);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],s=[],r=[],a=new S,l=new Ie;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new S)}s[0]=new S,r[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(it(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(it(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ia extends kt{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new $,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nu extends ia{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Wo(){let o=0,e=0,t=0,n=0;function i(s,r,a,l){o=s,e=a,t=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,u){let d=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const xr=new S,Oa=new Wo,Ua=new Wo,ka=new Wo;class iu extends kt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(xr.subVectors(i[0],i[1]).add(i[0]),c=xr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(xr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Oa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,p,m),Ua.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,p,m),ka.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ua.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ka.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Oa.calc(l),Ua.calc(l),ka.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sc(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*a+s*o+t}function X0(o,e){const t=1-o;return t*t*e}function J0(o,e){return 2*(1-o)*o*e}function Y0(o,e){return o*o*e}function _s(o,e,t,n){return X0(o,e)+J0(o,t)+Y0(o,n)}function Z0(o,e){const t=1-o;return t*t*t*e}function $0(o,e){const t=1-o;return 3*t*t*o*e}function K0(o,e){return 3*(1-o)*o*o*e}function Q0(o,e){return o*o*o*e}function ys(o,e,t,n,i){return Z0(o,e)+$0(o,t)+K0(o,n)+Q0(o,i)}class qo extends kt{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ys(e,i.x,s.x,r.x,a.x),ys(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class su extends kt{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ys(e,i.x,s.x,r.x,a.x),ys(e,i.y,s.y,r.y,a.y),ys(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sa extends kt{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ru extends kt{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xo extends kt{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(_s(e,i.x,s.x,r.x),_s(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jo extends kt{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(_s(e,i.x,s.x,r.x),_s(e,i.y,s.y,r.y),_s(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yo extends kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(sc(a,l.x,c.x,h.x,u.x),sc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $().fromArray(i))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:nu,CatmullRomCurve3:iu,CubicBezierCurve:qo,CubicBezierCurve3:su,EllipseCurve:ia,LineCurve:sa,LineCurve3:ru,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:Jo,SplineCurve:Yo});class au extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new sa(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zo[i.type]().fromJSON(i))}return this}}class Ls extends au{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sa(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Xo(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const a=new qo(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Yo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,r,a,l),this}absellipse(e,t,n,i,s,r,a,l){const c=new ia(e,t,n,i,s,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ii extends Re{constructor(e=[new $(0,.5),new $(.5,0),new $(0,-.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=it(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],h=1/t,u=new S,d=new $,f=new S,g=new S,p=new S;let m=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(p.x,p.y,p.z);break;default:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),l.push(f.x,f.y,f.z),p.copy(g)}for(let _=0;_<=t;_++){const M=n+_*h*i,y=Math.sin(M),w=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*w,r.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),a.push(d.x,d.y);const L=l[3*T+0]*y,v=l[3*T+1],E=l[3*T+0]*w;c.push(L,v,E)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){const y=M+_*e.length,w=y,T=y+e.length,L=y+e.length+1,v=y+1;s.push(w,T,v),s.push(L,v,T)}this.setIndex(s),this.setAttribute("position",new me(r,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}static fromJSON(e){return new ii(e.points,e.segments,e.phiStart,e.phiLength)}}class Hi extends ii{constructor(e=1,t=1,n=4,i=8){const s=new Ls;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Hi(e.radius,e.length,e.capSegments,e.radialSegments)}}class Wi extends Re{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new S,h=new $;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}static fromJSON(e){return new Wi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class En extends Re{constructor(e=1,t=1,n=1,i=8,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const p=[],m=n/2;let x=0;_(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function _(){const y=new S,w=new S;let T=0;const L=(t-e)/n;for(let v=0;v<=s;v++){const E=[],R=v/s,D=R*(t-e)+e;for(let X=0;X<=i;X++){const j=X/i,I=j*l+a,V=Math.sin(I),z=Math.cos(I);w.x=D*V,w.y=-R*n+m,w.z=D*z,u.push(w.x,w.y,w.z),y.set(V,L,z).normalize(),d.push(y.x,y.y,y.z),f.push(j,1-R),E.push(g++)}p.push(E)}for(let v=0;v<i;v++)for(let E=0;E<s;E++){const R=p[E][v],D=p[E+1][v],X=p[E+1][v+1],j=p[E][v+1];h.push(R,D,j),h.push(D,X,j),T+=6}c.addGroup(x,T,0),x+=T}function M(y){const w=g,T=new $,L=new S;let v=0;const E=y===!0?e:t,R=y===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;const D=g;for(let X=0;X<=i;X++){const I=X/i*l+a,V=Math.cos(I),z=Math.sin(I);L.x=E*z,L.y=m*R,L.z=E*V,u.push(L.x,L.y,L.z),d.push(0,R,0),T.x=V*.5+.5,T.y=z*.5*R+.5,f.push(T.x,T.y),g++}for(let X=0;X<i;X++){const j=w+X,I=D+X;y===!0?h.push(I,I+1,j):h.push(I+1,I,j),v+=3}c.addGroup(x,v,y===!0?1:2),x+=v}}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qi extends En{constructor(e=1,t=1,n=8,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new qi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $t extends Re{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(s.slice(),3)),this.setAttribute("uv",new me(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const M=new S,y=new S,w=new S;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],y),f(t[T+2],w),l(M,y,w,_)}function l(_,M,y,w){const T=w+1,L=[];for(let v=0;v<=T;v++){L[v]=[];const E=_.clone().lerp(y,v/T),R=M.clone().lerp(y,v/T),D=T-v;for(let X=0;X<=D;X++)X===0&&v===T?L[v][X]=E:L[v][X]=E.clone().lerp(R,X/D)}for(let v=0;v<T;v++)for(let E=0;E<2*(T-v)-1;E++){const R=Math.floor(E/2);E%2===0?(d(L[v][R+1]),d(L[v+1][R]),d(L[v][R])):(d(L[v][R+1]),d(L[v+1][R+1]),d(L[v+1][R]))}}function c(_){const M=new S;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(_),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function h(){const _=new S;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];const y=m(_)/2/Math.PI+.5,w=x(_)/Math.PI+.5;r.push(y,1-w)}g(),u()}function u(){for(let _=0;_<r.length;_+=6){const M=r[_+0],y=r[_+2],w=r[_+4],T=Math.max(M,y,w),L=Math.min(M,y,w);T>.9&&L<.1&&(M<.2&&(r[_+0]+=1),y<.2&&(r[_+2]+=1),w<.2&&(r[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,M){const y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){const _=new S,M=new S,y=new S,w=new S,T=new $,L=new $,v=new $;for(let E=0,R=0;E<s.length;E+=9,R+=6){_.set(s[E+0],s[E+1],s[E+2]),M.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),T.set(r[R+0],r[R+1]),L.set(r[R+2],r[R+3]),v.set(r[R+4],r[R+5]),w.copy(_).add(M).add(y).divideScalar(3);const D=m(w);p(T,R+0,_,D),p(L,R+2,M,D),p(v,R+4,y,D)}}function p(_,M,y,w){w<0&&_.x===1&&(r[M]=_.x-1),y.x===0&&y.z===0&&(r[M]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}static fromJSON(e){return new $t(e.vertices,e.indices,e.radius,e.details)}}class Xi extends $t{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xi(e.radius,e.detail)}}const _r=new S,yr=new S,Va=new S,vr=new It;class ou extends Re{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Zn*t),r=e.getIndex(),a=e.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:m,c:x}=vr;if(p.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),vr.getNormal(Va),u[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){const M=(_+1)%3,y=u[_],w=u[M],T=vr[h[_]],L=vr[h[M]],v=`${y}_${w}`,E=`${w}_${y}`;E in d&&d[E]?(Va.dot(d[E].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(L.x,L.y,L.z)),d[E]=null):v in d||(d[v]={index0:c[_],index1:c[M],normal:Va.clone()})}}for(const g in d)if(d[g]){const{index0:p,index1:m}=d[g];_r.fromBufferAttribute(a,p),yr.fromBufferAttribute(a,m),f.push(_r.x,_r.y,_r.z),f.push(yr.x,yr.y,yr.z)}this.setAttribute("position",new me(f,3))}}}class Kn extends Ls{constructor(e){super(e),this.uuid=Et(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ls().fromJSON(i))}return this}}const j0={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let s=lu(o,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,h,u,d,f;if(n&&(s=sx(o,e,s,t)),o.length>80*t){a=c=o[0],l=h=o[1];for(let g=t;g<i;g+=t)u=o[g],d=o[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return Ps(s,r,t,a,l,f),r}};function lu(o,e,t,n,i){let s,r;if(i===mx(o,e,t,n)>0)for(s=e;s<t;s+=n)r=rc(s,o[s],o[s+1],r);else for(s=t-n;s>=e;s-=n)r=rc(s,o[s],o[s+1],r);return r&&ra(r,r.next)&&(Is(r),r=r.next),r}function Cn(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(ra(t,t.next)||Qe(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ps(o,e,t,n,i,s,r){if(!o)return;!r&&s&&cx(o,n,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?tx(o,n,i,s):ex(o)){e.push(l.i/t),e.push(o.i/t),e.push(c.i/t),Is(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=nx(Cn(o),e,t),Ps(o,e,t,n,i,s,2)):r===2&&ix(o,e,t,n,i,s):Ps(Cn(o),e,t,n,i,s,1);break}}}function ex(o){const e=o.prev,t=o,n=o.next;if(Qe(e,t,n)>=0)return!1;let i=o.next.next;for(;i!==o.prev;){if(Oi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Qe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function tx(o,e,t,n){const i=o.prev,s=o,r=o.next;if(Qe(i,s,r)>=0)return!1;const a=i.x<s.x?i.x<r.x?i.x:r.x:s.x<r.x?s.x:r.x,l=i.y<s.y?i.y<r.y?i.y:r.y:s.y<r.y?s.y:r.y,c=i.x>s.x?i.x>r.x?i.x:r.x:s.x>r.x?s.x:r.x,h=i.y>s.y?i.y>r.y?i.y:r.y:s.y>r.y?s.y:r.y,u=So(a,l,e,t,n),d=So(c,h,e,t,n);let f=o.prevZ,g=o.nextZ;for(;f&&f.z>=u&&g&&g.z<=d;){if(f!==o.prev&&f!==o.next&&Oi(i.x,i.y,s.x,s.y,r.x,r.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0||(f=f.prevZ,g!==o.prev&&g!==o.next&&Oi(i.x,i.y,s.x,s.y,r.x,r.y,g.x,g.y)&&Qe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=u;){if(f!==o.prev&&f!==o.next&&Oi(i.x,i.y,s.x,s.y,r.x,r.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==o.prev&&g!==o.next&&Oi(i.x,i.y,s.x,s.y,r.x,r.y,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function nx(o,e,t){let n=o;do{const i=n.prev,s=n.next.next;!ra(i,s)&&cu(i,n,n.next,s)&&Rs(i,s)&&Rs(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Is(n),Is(n.next),n=o=s),n=n.next}while(n!==o);return Cn(n)}function ix(o,e,t,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&dx(r,a)){let l=hu(r,a);r=Cn(r,r.next),l=Cn(l,l.next),Ps(r,e,t,n,i,s),Ps(l,e,t,n,i,s);return}a=a.next}r=r.next}while(r!==o)}function sx(o,e,t,n){const i=[];let s,r,a,l,c;for(s=0,r=e.length;s<r;s++)a=e[s]*n,l=s<r-1?e[s+1]*n:o.length,c=lu(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ux(c));for(i.sort(rx),s=0;s<i.length;s++)ax(i[s],t),t=Cn(t,t.next);return t}function rx(o,e){return o.x-e.x}function ax(o,e){if(e=ox(o,e),e){const t=hu(e,o);Cn(e,e.next),Cn(t,t.next)}}function ox(o,e){let t=e;const n=o.x,i=o.y;let s=-1/0,r;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}r=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!r)return null;if(n===s)return r;const a=r,l=r.x,c=r.y;let h=1/0,u;t=r;do n>=t.x&&t.x>=l&&n!==t.x&&Oi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Rs(t,o)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&lx(r,t)))&&(r=t,h=u)),t=t.next;while(t!==a);return r}function lx(o,e){return Qe(o.prev,o,e.prev)<0&&Qe(e.next,o,o.next)<0}function cx(o,e,t,n){let i=o;do i.z===null&&(i.z=So(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,hx(i)}function hx(o){let e,t,n,i,s,r,a,l,c=1;do{for(t=o,o=null,s=null,r=0;t;){for(r++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(r>1);return o}function So(o,e,t,n,i){return o=32767*(o-t)*i,e=32767*(e-n)*i,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function ux(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function Oi(o,e,t,n,i,s,r,a){return(i-r)*(e-a)-(o-r)*(s-a)>=0&&(o-r)*(n-a)-(t-r)*(e-a)>=0&&(t-r)*(s-a)-(i-r)*(n-a)>=0}function dx(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!fx(o,e)&&(Rs(o,e)&&Rs(e,o)&&px(o,e)&&(Qe(o.prev,o,e.prev)||Qe(o,e.prev,e))||ra(o,e)&&Qe(o.prev,o,o.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function ra(o,e){return o.x===e.x&&o.y===e.y}function cu(o,e,t,n){const i=br(Qe(o,e,t)),s=br(Qe(o,e,n)),r=br(Qe(t,n,o)),a=br(Qe(t,n,e));return!!(i!==s&&r!==a||i===0&&Mr(o,t,e)||s===0&&Mr(o,n,e)||r===0&&Mr(t,o,n)||a===0&&Mr(t,e,n))}function Mr(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function br(o){return o>0?1:o<0?-1:0}function fx(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&cu(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function Rs(o,e){return Qe(o.prev,o,o.next)<0?Qe(o,e,o.next)>=0&&Qe(o,o.prev,e)>=0:Qe(o,e,o.prev)<0||Qe(o,o.next,e)<0}function px(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,s=(o.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function hu(o,e){const t=new Ao(o.i,o.x,o.y),n=new Ao(e.i,e.x,e.y),i=o.next,s=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function rc(o,e,t,n){const i=new Ao(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Is(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Ao(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mx(o,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class Yt{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Yt.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ac(e),oc(n,e);let r=e.length;t.forEach(ac);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,oc(n,t[l]);const a=j0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ac(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function oc(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Ji extends Re{constructor(e=new Kn([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r(c)}this.setAttribute("position",new me(i,3)),this.setAttribute("uv",new me(s,2)),this.computeVertexNormals();function r(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:gx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let M,y=!1,w,T,L,v;x&&(M=x.getSpacedPoints(h),y=!0,d=!1,w=x.computeFrenetFrames(h,!1),T=new S,L=new S,v=new S),d||(m=0,f=0,g=0,p=0);const E=a.extractPoints(c);let R=E.shape;const D=E.holes;if(!Yt.isClockWise(R)){R=R.reverse();for(let Y=0,q=D.length;Y<q;Y++){const ie=D[Y];Yt.isClockWise(ie)&&(D[Y]=ie.reverse())}}const j=Yt.triangulateShape(R,D),I=R;for(let Y=0,q=D.length;Y<q;Y++){const ie=D[Y];R=R.concat(ie)}function V(Y,q,ie){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().multiplyScalar(ie).add(Y)}const z=R.length,J=j.length;function Z(Y,q,ie){let xe,ce,Le;const Me=Y.x-q.x,ve=Y.y-q.y,Ze=ie.x-Y.x,Je=ie.y-Y.y,C=Me*Me+ve*ve,b=Me*Je-ve*Ze;if(Math.abs(b)>Number.EPSILON){const B=Math.sqrt(C),Q=Math.sqrt(Ze*Ze+Je*Je),ne=q.x-ve/B,he=q.y+Me/B,Ae=ie.x-Je/Q,O=ie.y+Ze/Q,_e=((Ae-ne)*Je-(O-he)*Ze)/(Me*Je-ve*Ze);xe=ne+Me*_e-Y.x,ce=he+ve*_e-Y.y;const fe=xe*xe+ce*ce;if(fe<=2)return new $(xe,ce);Le=Math.sqrt(fe/2)}else{let B=!1;Me>Number.EPSILON?Ze>Number.EPSILON&&(B=!0):Me<-Number.EPSILON?Ze<-Number.EPSILON&&(B=!0):Math.sign(ve)===Math.sign(Je)&&(B=!0),B?(xe=-ve,ce=Me,Le=Math.sqrt(C)):(xe=Me,ce=ve,Le=Math.sqrt(C/2))}return new $(xe/Le,ce/Le)}const k=[];for(let Y=0,q=I.length,ie=q-1,xe=Y+1;Y<q;Y++,ie++,xe++)ie===q&&(ie=0),xe===q&&(xe=0),k[Y]=Z(I[Y],I[ie],I[xe]);const G=[];let ee,K=k.concat();for(let Y=0,q=D.length;Y<q;Y++){const ie=D[Y];ee=[];for(let xe=0,ce=ie.length,Le=ce-1,Me=xe+1;xe<ce;xe++,Le++,Me++)Le===ce&&(Le=0),Me===ce&&(Me=0),ee[xe]=Z(ie[xe],ie[Le],ie[Me]);G.push(ee),K=K.concat(ee)}for(let Y=0;Y<m;Y++){const q=Y/m,ie=f*Math.cos(q*Math.PI/2),xe=g*Math.sin(q*Math.PI/2)+p;for(let ce=0,Le=I.length;ce<Le;ce++){const Me=V(I[ce],k[ce],xe);Be(Me.x,Me.y,-ie)}for(let ce=0,Le=D.length;ce<Le;ce++){const Me=D[ce];ee=G[ce];for(let ve=0,Ze=Me.length;ve<Ze;ve++){const Je=V(Me[ve],ee[ve],xe);Be(Je.x,Je.y,-ie)}}}const le=g+p;for(let Y=0;Y<z;Y++){const q=d?V(R[Y],K[Y],le):R[Y];y?(L.copy(w.normals[0]).multiplyScalar(q.x),T.copy(w.binormals[0]).multiplyScalar(q.y),v.copy(M[0]).add(L).add(T),Be(v.x,v.y,v.z)):Be(q.x,q.y,0)}for(let Y=1;Y<=h;Y++)for(let q=0;q<z;q++){const ie=d?V(R[q],K[q],le):R[q];y?(L.copy(w.normals[Y]).multiplyScalar(ie.x),T.copy(w.binormals[Y]).multiplyScalar(ie.y),v.copy(M[Y]).add(L).add(T),Be(v.x,v.y,v.z)):Be(ie.x,ie.y,u/h*Y)}for(let Y=m-1;Y>=0;Y--){const q=Y/m,ie=f*Math.cos(q*Math.PI/2),xe=g*Math.sin(q*Math.PI/2)+p;for(let ce=0,Le=I.length;ce<Le;ce++){const Me=V(I[ce],k[ce],xe);Be(Me.x,Me.y,u+ie)}for(let ce=0,Le=D.length;ce<Le;ce++){const Me=D[ce];ee=G[ce];for(let ve=0,Ze=Me.length;ve<Ze;ve++){const Je=V(Me[ve],ee[ve],xe);y?Be(Je.x,Je.y+M[h-1].y,M[h-1].x+ie):Be(Je.x,Je.y,u+ie)}}}ge(),ye();function ge(){const Y=i.length/3;if(d){let q=0,ie=z*q;for(let xe=0;xe<J;xe++){const ce=j[xe];we(ce[2]+ie,ce[1]+ie,ce[0]+ie)}q=h+m*2,ie=z*q;for(let xe=0;xe<J;xe++){const ce=j[xe];we(ce[0]+ie,ce[1]+ie,ce[2]+ie)}}else{for(let q=0;q<J;q++){const ie=j[q];we(ie[2],ie[1],ie[0])}for(let q=0;q<J;q++){const ie=j[q];we(ie[0]+z*h,ie[1]+z*h,ie[2]+z*h)}}n.addGroup(Y,i.length/3-Y,0)}function ye(){const Y=i.length/3;let q=0;H(I,q),q+=I.length;for(let ie=0,xe=D.length;ie<xe;ie++){const ce=D[ie];H(ce,q),q+=ce.length}n.addGroup(Y,i.length/3-Y,1)}function H(Y,q){let ie=Y.length;for(;--ie>=0;){const xe=ie;let ce=ie-1;ce<0&&(ce=Y.length-1);for(let Le=0,Me=h+m*2;Le<Me;Le++){const ve=z*Le,Ze=z*(Le+1),Je=q+xe+ve,C=q+ce+ve,b=q+ce+Ze,B=q+xe+Ze;Ce(Je,C,b,B)}}}function Be(Y,q,ie){l.push(Y),l.push(q),l.push(ie)}function we(Y,q,ie){ae(Y),ae(q),ae(ie);const xe=i.length/3,ce=_.generateTopUV(n,i,xe-3,xe-2,xe-1);Fe(ce[0]),Fe(ce[1]),Fe(ce[2])}function Ce(Y,q,ie,xe){ae(Y),ae(q),ae(xe),ae(q),ae(ie),ae(xe);const ce=i.length/3,Le=_.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);Fe(Le[0]),Fe(Le[1]),Fe(Le[3]),Fe(Le[1]),Fe(Le[2]),Fe(Le[3])}function ae(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function Fe(Y){s.push(Y.x),s.push(Y.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zo[i.type]().fromJSON(i)),new Ji(n,e.options)}}const gx={generateTopUV:function(o,e,t,n,i){const s=e[t*3],r=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new $(s,r),new $(a,l),new $(c,h)]},generateSideWallUV:function(o,e,t,n,i,s){const r=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new $(r,1-l),new $(c,1-u),new $(d,1-g),new $(p,1-x)]:[new $(a,1-l),new $(h,1-u),new $(f,1-g),new $(m,1-x)]}};function xx(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];t.shapes.push(s.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yi extends $t{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yi(e.radius,e.detail)}}class si extends $t{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new si(e.radius,e.detail)}}class Zi extends Re{constructor(e=.5,t=1,n=8,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new S,g=new $;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){const x=s+m/n*r;f.x=u*Math.cos(x),f.y=u*Math.sin(x),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let p=0;p<i;p++){const m=p*(n+1);for(let x=0;x<n;x++){const _=x+m,M=_,y=_+n+1,w=_+n+2,T=_+1;a.push(M,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}static fromJSON(e){return new Zi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $i extends Re{constructor(e=new Kn([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(i,3)),this.setAttribute("normal",new me(s,3)),this.setAttribute("uv",new me(r,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Yt.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,x=g.length;m<x;m++){const _=g[m];Yt.isClockWise(_)===!0&&(g[m]=_.reverse())}const p=Yt.triangulateShape(f,g);for(let m=0,x=g.length;m<x;m++){const _=g[m];f=f.concat(_)}for(let m=0,x=f.length;m<x;m++){const _=f[m];i.push(_.x,_.y,0),s.push(0,0,1),r.push(_.x,_.y)}for(let m=0,x=p.length;m<x;m++){const _=p[m],M=_[0]+u,y=_[1]+u,w=_[2]+u;n.push(M,y,w),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _x(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const r=t[e.shapes[i]];n.push(r)}return new $i(n,e.curveSegments)}}function _x(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,n=o.length;t<n;t++){const i=o[t];e.shapes.push(i.uuid)}else e.shapes.push(o.uuid);return e}class ri extends Re{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new S,d=new S,f=[],g=[],p=[],m=[];for(let x=0;x<=n;x++){const _=[],M=x/n;let y=0;x==0&&r==0?y=.5/t:x==n&&l==Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(i+T*s)*Math.sin(r+M*a),u.y=e*Math.cos(r+M*a),u.z=e*Math.sin(i+T*s)*Math.sin(r+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),m.push(T+y,1-M),_.push(c++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){const M=h[x][_+1],y=h[x][_],w=h[x+1][_],T=h[x+1][_+1];(x!==0||r>0)&&f.push(M,y,T),(x!==n-1||l<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(p,3)),this.setAttribute("uv",new me(m,2))}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ki extends $t{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ki(e.radius,e.detail)}}class Qi extends Re{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new S,u=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const p=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const p=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,x=(i+1)*(f-1)+g,_=(i+1)*f+g;r.push(p,m,_),r.push(m,x,_)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}static fromJSON(e){return new Qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ji extends Re{constructor(e=1,t=.4,n=64,i=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:r},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new S,d=new S,f=new S,g=new S,p=new S,m=new S,x=new S;for(let M=0;M<=n;++M){const y=M/n*s*Math.PI*2;_(y,s,r,e,f),_(y+.01,s,r,e,g),m.subVectors(g,f),x.addVectors(g,f),p.crossVectors(m,x),x.crossVectors(p,m),p.normalize(),x.normalize();for(let w=0;w<=i;++w){const T=w/i*Math.PI*2,L=-t*Math.cos(T),v=t*Math.sin(T);u.x=f.x+(L*x.x+v*p.x),u.y=f.y+(L*x.y+v*p.y),u.z=f.z+(L*x.z+v*p.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(M/n),h.push(w/i)}}for(let M=1;M<=n;M++)for(let y=1;y<=i;y++){const w=(i+1)*(M-1)+(y-1),T=(i+1)*M+(y-1),L=(i+1)*M+y,v=(i+1)*(M-1)+y;a.push(w,T,v),a.push(T,L,v)}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2));function _(M,y,w,T,L){const v=Math.cos(M),E=Math.sin(M),R=w/y*M,D=Math.cos(R);L.x=T*(2+D)*.5*v,L.y=T*(2+D)*E*.5,L.z=T*Math.sin(R)*.5}}static fromJSON(e){return new ji(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class es extends Re{constructor(e=new Jo(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new S,l=new S,c=new $;let h=new S;const u=[],d=[],f=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function p(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),_(),x()}function m(M){h=e.getPointAt(M/t,h);const y=r.normals[M],w=r.binormals[M];for(let T=0;T<=i;T++){const L=T/i*Math.PI*2,v=Math.sin(L),E=-Math.cos(L);l.x=E*y.x+v*w.x,l.y=E*y.y+v*w.y,l.z=E*y.z+v*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let M=1;M<=t;M++)for(let y=1;y<=i;y++){const w=(i+1)*(M-1)+(y-1),T=(i+1)*M+(y-1),L=(i+1)*M+y,v=(i+1)*(M-1)+y;g.push(w,T,v),g.push(T,L,v)}}function _(){for(let M=0;M<=t;M++)for(let y=0;y<=i;y++)c.x=M/t,c.y=y/i,f.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new es(new Zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class uu extends Re{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new S,s=new S;if(e.index!==null){const r=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,p=d+f;g<p;g+=3)for(let m=0;m<3;m++){const x=a.getX(g+m),_=a.getX(g+(m+1)%3);i.fromBufferAttribute(r,x),s.fromBufferAttribute(r,_),lc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const r=e.attributes.position;for(let a=0,l=r.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(r,h),s.fromBufferAttribute(r,u),lc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new me(t,3))}}}function lc(o,e,t){const n=`${o.x},${o.y},${o.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${o.x},${o.y},${o.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var cc=Object.freeze({__proto__:null,BoxGeometry:on,BoxBufferGeometry:on,CapsuleGeometry:Hi,CapsuleBufferGeometry:Hi,CircleGeometry:Wi,CircleBufferGeometry:Wi,ConeGeometry:qi,ConeBufferGeometry:qi,CylinderGeometry:En,CylinderBufferGeometry:En,DodecahedronGeometry:Xi,DodecahedronBufferGeometry:Xi,EdgesGeometry:ou,ExtrudeGeometry:Ji,ExtrudeBufferGeometry:Ji,IcosahedronGeometry:Yi,IcosahedronBufferGeometry:Yi,LatheGeometry:ii,LatheBufferGeometry:ii,OctahedronGeometry:si,OctahedronBufferGeometry:si,PlaneGeometry:ti,PlaneBufferGeometry:ti,PolyhedronGeometry:$t,PolyhedronBufferGeometry:$t,RingGeometry:Zi,RingBufferGeometry:Zi,ShapeGeometry:$i,ShapeBufferGeometry:$i,SphereGeometry:ri,SphereBufferGeometry:ri,TetrahedronGeometry:Ki,TetrahedronBufferGeometry:Ki,TorusGeometry:Qi,TorusBufferGeometry:Qi,TorusKnotGeometry:ji,TorusKnotBufferGeometry:ji,TubeGeometry:es,TubeBufferGeometry:es,WireframeGeometry:uu});class du extends ct{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class fu extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $o extends ct{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pu extends $o{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mu extends ct{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gu extends ct{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class xu extends ct{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class _u extends ct{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class yu extends ct{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vu extends Mt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const yx={ShadowMaterial:du,SpriteMaterial:Vo,RawShaderMaterial:fu,ShaderMaterial:Zt,PointsMaterial:Ho,MeshPhysicalMaterial:pu,MeshStandardMaterial:$o,MeshPhongMaterial:mu,MeshToonMaterial:gu,MeshNormalMaterial:xu,MeshLambertMaterial:_u,MeshDepthMaterial:Uo,MeshDistanceMaterial:ko,MeshBasicMaterial:Pn,MeshMatcapMaterial:yu,LineDashedMaterial:vu,LineBasicMaterial:Mt,Material:ct};ct.fromType=function(o){return new yx[o]};const $e={arraySlice:function(o,e,t){return $e.isTypedArray(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)},convertArray:function(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i},flattenJSON:function(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)},subclip:function(o,e,t,n,i=30){const s=o.clone();s.name=e;const r=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){u.push(c.times[f]);for(let p=0;p<h;++p)d.push(c.values[f*h+p])}}u.length!==0&&(c.times=$e.convertArray(u,c.times.constructor),c.values=$e.convertArray(d,c.values.constructor),r.push(c))}s.tracks=r;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(o,e=0,t=o,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let r=0;r<i;++r){const a=t.tracks[r],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let p;if(s<=a.times[0]){const x=h,_=u-h;p=$e.arraySlice(a.values,x,_)}else if(s>=a.times[g]){const x=g*u+h,_=x+u-h;p=$e.arraySlice(a.values,x,_)}else{const x=a.createInterpolant(),_=h,M=u-h;x.evaluate(s),p=$e.arraySlice(x.resultBuffer,_,M)}l==="quaternion"&&new bt().fromArray(p).normalize().conjugate().toArray(p);const m=c.times.length;for(let x=0;x<m;++x){const _=x*f+d;if(l==="quaternion")bt.multiplyQuaternionsFlat(c.values,_,p,0,c.values,_);else{const M=f-d*2;for(let y=0;y<M;++y)c.values[_+y]-=p[y]}}}return o.blendMode=Do,o}};class Vs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Mu extends Vs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wn,endingEnd:Wn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case qn:s=e,a=2*t-n;break;case Ts:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qn:r=e,l=2*n-t;break;case Ts:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,x=-d*m+2*d*p-d*g,_=(1+d)*m+(-1.5-2*d)*p+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*p+.5*g,y=f*m-f*p;for(let w=0;w!==a;++w)s[w]=x*r[h+w]+_*r[c+w]+M*r[l+w]+y*r[u+w];return s}}class Ko extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class bu extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$e.convertArray(t,this.TimeBufferType),this.values=$e.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$e.convertArray(e.times,Array),values:$e.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case Fr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return Fr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=$e.arraySlice(n,s,r),this.values=$e.arraySlice(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&$e.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=$e.arraySlice(this.times),t=$e.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Fr,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const p=t[u+g];if(p!==t[d+g]||p!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=$e.arraySlice(e,0,r),this.values=$e.arraySlice(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=$e.arraySlice(this.times,0),t=$e.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Vt.prototype.TimeBufferType=Float32Array;Vt.prototype.ValueBufferType=Float32Array;Vt.prototype.DefaultInterpolation=As;class ui extends Vt{}ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ss;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Qo extends Vt{}Qo.prototype.ValueTypeName="color";class Ds extends Vt{}Ds.prototype.ValueTypeName="number";class wu extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)bt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class ss extends Vt{InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}}ss.prototype.ValueTypeName="quaternion";ss.prototype.DefaultInterpolation=As;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class di extends Vt{}di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ss;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Vt{}Fs.prototype.ValueTypeName="vector";class Ns{constructor(e,t=-1,n,i=Xr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Et(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Mx(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Vt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=$e.getKeyframeOrder(l);l=$e.sortedArray(l,1,h),c=$e.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,p){if(f.length!==0){const m=[],x=[];$e.flattenJSON(f,m,x,g),m.length!==0&&p.push(new u(d,m,x))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)f[d[g].morphTargets[p]]=-1;for(const p in f){const m=[],x=[];for(let _=0;_!==d[g].morphTargets.length;++_){const M=d[g];m.push(M.time),x.push(M.morphTarget===p?1:0)}i.push(new Ds(".morphTargetInfluence["+p+"]",m,x))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(Fs,f+".position",d,"pos",i),n(ss,f+".quaternion",d,"rot",i),n(Fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vx(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Fs;case"color":return Qo;case"quaternion":return ss;case"bool":case"boolean":return ui;case"string":return di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Mx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vx(o.type);if(o.times===void 0){const t=[],n=[];$e.flattenJSON(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ai={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class jo{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Su=new jo;class Lt{constructor(e){this.manager=e!==void 0?e:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const sn={};class ln extends Lt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ai.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(sn[e]!==void 0){sn[e].push({onLoad:t,onProgress:n,onError:i});return}sn[e]=[],sn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=sn[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let p=0;const m=new ReadableStream({start(x){_();function _(){u.read().then(({done:M,value:y})=>{if(M)x.close();else{p+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let T=0,L=h.length;T<L;T++){const v=h[T];v.onProgress&&v.onProgress(w)}x.enqueue(y),_()}})}}});return new Response(m)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ai.add(e,c);const h=sn[e];delete sn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=sn[e];if(h===void 0)throw this.manager.itemError(e),c;delete sn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bx extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new ln(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ns.parse(e[n]);t.push(i)}return t}}class wx extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=[],a=new tu,l=new ln(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(e[u],function(d){const f=s.parse(d,!0);r[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=nt),a.image=r,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){const d=s.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let g=0;g<f;g++){r[g]={mipmaps:[]};for(let p=0;p<d.mipmapCount;p++)r[g].mipmaps.push(d.mipmaps[g*d.mipmapCount+p]),r[g].format=d.format,r[g].width=d.width,r[g].height=d.height}a.image=r}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=nt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class zs extends Lt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ai.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Cs("img");function l(){h(),ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Sx extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=new ks,r=new zs(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Ax extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Ui,a=new ln(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);!c||(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:_t,r.wrapT=c.wrapT!==void 0?c.wrapT:_t,r.magFilter=c.magFilter!==void 0?c.magFilter:nt,r.minFilter=c.minFilter!==void 0?c.minFilter:nt,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=oi),c.mipmapCount===1&&(r.minFilter=nt),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},n,i),r}}class Tx extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=new lt,r=new zs(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Rn extends Ge{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Au extends Rn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hc=new Ie,uc=new S,dc=new S;class el{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(uc),dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dc),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ex extends el{constructor(){super(new dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tu extends Rn{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new Ex}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fc=new Ie,ms=new S,Ga=new S;class Cx extends el{constructor(){super(new dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),Ga.copy(n.position),Ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc)}}class Eu extends Rn{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lx extends el{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends Rn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.shadow=new Lx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lu extends Rn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pu extends Rn{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ru{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*i),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*i)),t.addScaledVector(r[5],1.092548*(i*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(n*s)),t.addScaledVector(r[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*i),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*i),t.addScaledVector(r[5],2*.429043*i*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*n*s),t.addScaledVector(r[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class aa extends Rn{constructor(e=new Ru,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Iu extends Lt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,r=new ln(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=ct.fromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const r=e.uniforms[s];switch(i.uniforms[s]={},r.type){case"t":i.uniforms[s].value=n(r.value);break;case"c":i.uniforms[s].value=new ue().setHex(r.value);break;case"v2":i.uniforms[s].value=new $().fromArray(r.value);break;case"v3":i.uniforms[s].value=new S().fromArray(r.value);break;case"v4":i.uniforms[s].value=new Xe().fromArray(r.value);break;case"m3":i.uniforms[s].value=new Dt().fromArray(r.value);break;case"m4":i.uniforms[s].value=new Ie().fromArray(r.value);break;default:i.uniforms[s].value=r.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new $().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}}class To{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Du extends Re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Fu extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new ln(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,g){if(t[g]!==void 0)return t[g];const m=f.interleavedBuffers[g],x=s(f,m.buffer),_=Ni(m.type,x),M=new ta(_,m.stride);return M.uuid=m.uuid,t[g]=M,M}function s(f,g){if(n[g]!==void 0)return n[g];const m=f.arrayBuffers[g],x=new Uint32Array(m).buffer;return n[g]=x,x}const r=e.isInstancedBufferGeometry?new Du:new Re,a=e.data.index;if(a!==void 0){const f=Ni(a.type,a.array);r.setIndex(new Ye(f,1))}const l=e.data.attributes;for(const f in l){const g=l[f];let p;if(g.isInterleavedBufferAttribute){const m=i(e.data,g.data);p=new ni(m,g.itemSize,g.offset,g.normalized)}else{const m=Ni(g.type,g.array),x=g.isInstancedBufferAttribute?Gi:Ye;p=new x(m,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),g.usage!==void 0&&p.setUsage(g.usage),g.updateRange!==void 0&&(p.updateRange.offset=g.updateRange.offset,p.updateRange.count=g.updateRange.count),r.setAttribute(f,p)}const c=e.data.morphAttributes;if(c)for(const f in c){const g=c[f],p=[];for(let m=0,x=g.length;m<x;m++){const _=g[m];let M;if(_.isInterleavedBufferAttribute){const y=i(e.data,_.data);M=new ni(y,_.itemSize,_.offset,_.normalized)}else{const y=Ni(_.type,_.array);M=new Ye(y,_.itemSize,_.normalized)}_.name!==void 0&&(M.name=_.name),p.push(M)}r.morphAttributes[f]=p}e.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,g=u.length;f!==g;++f){const p=u[f];r.addGroup(p.start,p.count,p.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new S;d.center!==void 0&&f.fromArray(d.center),r.boundingSphere=new hi(f,d.radius)}return e.name&&(r.name=e.name),e.userData&&(r.userData=e.userData),r}}class Px extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=this.path===""?To.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const a=new ln(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?To.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new ln(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const r=await s.loadAsync(e,t),a=JSON.parse(r),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),r=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,r),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let u=!1;for(const d in r)if(r[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),r=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,r),l=this.parseObject(e.object,i,a,r,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Kn().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,r=e.length;s<r;s++){const a=new na().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Fu;for(let s=0,r=e.length;s<r;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;case"Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");break;default:l.type in cc?a=cc[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),a.isBufferGeometry===!0&&l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Iu;s.setTextures(t);for(let r=0,a=e.length;r<a;r++){const l=e[r];if(l.type==="MultiMaterial"){const c=[];for(let h=0;h<l.materials.length;h++){const u=l.materials[h];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),c.push(n[u.uuid])}i[l.uuid]=c}else n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Ns.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function r(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return r(h)}else return l.data?{data:Ni(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new jo(t);s=new zs(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let g=0,p=d.length;g<p;g++){const m=d[g],x=a(m);x!==null&&(x instanceof HTMLImageElement?f.push(x):f.push(new Ui(x.data,x.width,x.height)))}i[u.uuid]=new Xn(f)}else{const f=a(u.url);i[u.uuid]=new Xn(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(r){if(typeof r=="string"){const a=r,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return r.data?{data:Ni(r.type,r.data),width:r.width,height:r.height}:null}if(e!==void 0&&e.length>0){i=new zs(this.manager),i.setCrossOrigin(this.crossOrigin);for(let r=0,a=e.length;r<a;r++){const l=e[r],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],g=await s(f);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new Ui(g.data,g.width,g.height)))}n[l.uuid]=new Xn(h)}else{const h=await s(l.url);n[l.uuid]=new Xn(h)}}}return n}parseTextures(e,t){function n(s,r){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),r[s])}const i={};if(e!==void 0)for(let s=0,r=e.length;s<r;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let h;Array.isArray(c)?(h=new ks,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Ui:h=new lt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Rx)),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],pc),h.wrapT=n(a.wrap[1],pc)),a.format!==void 0&&(h.format=a.format),a.type!==void 0&&(h.type=a.type),a.encoding!==void 0&&(h.encoding=a.encoding),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,mc)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,mc)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,s){let r;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let g=0,p=d.length;g<p;g++){const m=d[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":r=new Jh,e.background!==void 0&&(Number.isInteger(e.background)?r.background=new ue(e.background):r.background=c(e.background)),e.environment!==void 0&&(r.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new ea(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new jr(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":r=new dt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new Kr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new Lu(e.color,e.intensity);break;case"DirectionalLight":r=new Cu(e.color,e.intensity);break;case"PointLight":r=new Eu(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new Pu(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new Tu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new Au(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new aa().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=l(e.material),r=new Kh(h,u),e.bindMode!==void 0&&(r.bindMode=e.bindMode),e.bindMatrix!==void 0&&r.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(r.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=l(e.material),r=new ft(h,u);break;case"InstancedMesh":h=a(e.geometry),u=l(e.material);const d=e.count,f=e.instanceMatrix,g=e.instanceColor;r=new Qh(h,u,d),r.instanceMatrix=new Gi(new Float32Array(f.array),16),g!==void 0&&(r.instanceColor=new Gi(new Float32Array(g.array),g.itemSize));break;case"LOD":r=new $h;break;case"Line":r=new Tn(a(e.geometry),l(e.material));break;case"LineLoop":r=new jh(a(e.geometry),l(e.material));break;case"LineSegments":r=new Kt(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":r=new eu(a(e.geometry),l(e.material));break;case"Sprite":r=new Zh(l(e.material));break;case"Group":r=new Bi;break;case"Bone":r=new Go;break;default:r=new Ge}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)r.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const g=d[f];r.animations.push(s[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const g=d[f],p=r.getObjectByProperty("uuid",g.object);p!==void 0&&r.addLevel(p,g.distance)}}return r}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const Rx={UVMapping:qr,CubeReflectionMapping:bn,CubeRefractionMapping:wn,EquirectangularReflectionMapping:vs,EquirectangularRefractionMapping:Ms,CubeUVReflectionMapping:ts},pc={RepeatWrapping:bs,ClampToEdgeWrapping:_t,MirroredRepeatWrapping:ws},mc={NearestFilter:at,NearestMipmapNearestFilter:Ur,NearestMipmapLinearFilter:kr,LinearFilter:nt,LinearMipmapNearestFilter:Ro,LinearMipmapLinearFilter:oi};class Ix extends Lt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ai.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ai.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let wr;const tl={getContext:function(){return wr===void 0&&(wr=new(window.AudioContext||window.webkitAudioContext)),wr},setContext:function(o){wr=o}};class Dx extends Lt{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new ln(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{const l=a.slice(0);tl.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class Fx extends aa{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new ue().set(e),s=new ue().set(t),r=new S(i.r,i.g,i.b),a=new S(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(r).sub(a).multiplyScalar(c)}}class Nx extends aa{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new ue().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const gc=new Ie,xc=new Ie,zn=new Ie;class zx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new dt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new dt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,zn.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,r=t.near*Math.tan(Zn*t.fov*.5)/t.zoom;let a,l;xc.elements[12]=-i,gc.elements[12]=i,a=-r*t.aspect+s,l=r*t.aspect+s,zn.elements[0]=2*t.near/(l-a),zn.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(zn),a=-r*t.aspect-s,l=r*t.aspect-s,zn.elements[0]=2*t.near/(l-a),zn.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(zn)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(xc),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(gc)}}class Nu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_c();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _c(){return(typeof performance>"u"?Date:performance).now()}const Bn=new S,yc=new bt,Bx=new S,On=new S;class Ox extends Ge{constructor(){super(),this.type="AudioListener",this.context=tl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Nu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Bn,yc,Bx),On.set(0,0,-1).applyQuaternion(yc),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Bn.x,i),t.positionY.linearRampToValueAtTime(Bn.y,i),t.positionZ.linearRampToValueAtTime(Bn.z,i),t.forwardX.linearRampToValueAtTime(On.x,i),t.forwardY.linearRampToValueAtTime(On.y,i),t.forwardZ.linearRampToValueAtTime(On.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Bn.x,Bn.y,Bn.z),t.setOrientation(On.x,On.y,On.z,n.x,n.y,n.z)}}class zu extends Ge{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Un=new S,vc=new bt,Ux=new S,kn=new S;class kx extends zu{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Un,vc,Ux),kn.set(0,0,1).applyQuaternion(vc);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Un.x,n),t.positionY.linearRampToValueAtTime(Un.y,n),t.positionZ.linearRampToValueAtTime(Un.z,n),t.orientationX.linearRampToValueAtTime(kn.x,n),t.orientationY.linearRampToValueAtTime(kn.y,n),t.orientationZ.linearRampToValueAtTime(kn.z,n)}else t.setPosition(Un.x,Un.y,Un.z),t.setOrientation(kn.x,kn.y,kn.z)}}class Vx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Bu{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){bt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;bt.multiplyQuaternionsFlat(e,r,e,t,e,n),bt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const nl="\\[\\]\\.:\\/",Gx=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",Hx="[^"+nl.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",il),qx=/(WCOD+)?/.source.replace("WCOD",Hx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),Yx=new RegExp("^"+Wx+qx+Xx+Jx+"$"),Zx=["material","materials","bones"];class $x{constructor(e,t,n){const i=n||Ue.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ue{constructor(e,t,n){this.path=t,this.parsedPath=n||Ue.parseTrackName(t),this.node=Ue.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ue.Composite(e,t,n):new Ue(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gx,"")}static parseTrackName(e){const t=Yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Zx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ue.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=$x;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Kx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Et(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,r=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let g=t[f];if(g===void 0){g=l++,t[f]=g,e.push(d);for(let p=0,m=r;p!==m;++p)s[p].push(new Ue(d,n[p],i[p]))}else if(g<c){a=e[g];const p=--c,m=e[p];t[m.uuid]=g,e[g]=m,t[f]=p,e[p]=d;for(let x=0,_=r;x!==_;++x){const M=s[x],y=M[p];let w=M[g];M[g]=y,w===void 0&&(w=new Ue(d,n[x],i[x])),M[p]=w}}else e[g]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let r=0,a=arguments.length;r!==a;++r){const l=arguments[r],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,g=i;f!==g;++f){const p=n[f],m=p[u],x=p[h];p[h]=m,p[u]=x}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,r=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){const d=--s,f=e[d],g=--r,p=e[g];t[f.uuid]=u,e[u]=f,t[p.uuid]=d,e[d]=p,e.pop();for(let m=0,x=i;m!==x;++m){const _=n[m],M=_[d],y=_[g];_[u]=M,_[d]=y,_.pop()}}else{const d=--r,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let g=0,p=i;g!==p;++g){const m=n[g];m[u]=m[d],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const r=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=s.length,n[e]=i,r.push(e),a.push(t),s.push(u);for(let d=h,f=l.length;d!==f;++d){const g=l[d];u[d]=new Ue(g,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length-1,l=r[a],c=e[a];t[c]=n,r[n]=l,r.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class Qx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:Wn,endingEnd:Wn};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Sh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Do:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case Xr:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===Ah;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===wh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=qn,i.endingEnd=qn):(e?i.endingStart=this.zeroSlopeAtStart?qn:Wn:i.endingStart=Ts,t?i.endingEnd=this.zeroSlopeAtEnd?qn:Wn:i.endingEnd=Ts)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const jx=new Float32Array(1);class e_ extends Ln{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;g=new Bu(Ue.create(n,f,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ko(new Float32Array(2),new Float32Array(2),1,jx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Ns.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Xr),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new Qx(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ns.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class sl{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new sl(this.value.clone===void 0?this.value:this.value.clone())}}class t_ extends ta{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class n_{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class i_{constructor(e,t,n=0,i=1/0){this.ray=new Us(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Eo(e,this,n,t),n.sort(Mc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Eo(e[i],this,n,t);return n.sort(Mc),n}}function Mc(o,e){return o.distance-e.distance}function Eo(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)Eo(i[s],e,t,!0)}}class s_{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class r_{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const bc=new $;class a_{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wc=new S,Sr=new S;class o_{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wc.subVectors(e,this.start),Sr.subVectors(this.end,this.start);const n=Sr.dot(Sr);let s=Sr.dot(wc)/n;return t&&(s=it(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Sc=new S;class l_ extends Ge{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new Re,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,a=1,l=32;r<l;r++,a++){const c=r/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new me(i,3));const s=new Mt({fog:!1,toneMapped:!1});this.cone=new Kt(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Sc.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Sc),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const xn=new S,Ar=new Ie,Ha=new Ie;class c_ extends Kt{constructor(e){const t=Ou(e),n=new Re,i=[],s=[],r=new ue(0,0,1),a=new ue(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(r.r,r.g,r.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new me(i,3)),n.setAttribute("color",new me(s,3));const l=new Mt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ha.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Ar.multiplyMatrices(Ha,a.matrixWorld),xn.setFromMatrixPosition(Ar),i.setXYZ(r,xn.x,xn.y,xn.z),Ar.multiplyMatrices(Ha,a.parent.matrixWorld),xn.setFromMatrixPosition(Ar),i.setXYZ(r+1,xn.x,xn.y,xn.z),r+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Ou(o){const e=[];o.isBone===!0&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,Ou(o.children[t]));return e}class h_ extends ft{constructor(e,t,n){const i=new ri(t,4,2),s=new Pn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const u_=new S,Ac=new ue,Tc=new ue;class d_ extends Ge{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new si(t);i.rotateY(Math.PI*.5),this.material=new Pn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),r=new Float32Array(s.count*3);i.setAttribute("color",new Ye(r,3)),this.add(new ft(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Ac.copy(this.light.color),Tc.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Ac:Tc;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}e.lookAt(u_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class f_ extends Kt{constructor(e=10,t=10,n=4473924,i=8947848){n=new ue(n),i=new ue(i);const s=t/2,r=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=r){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=d===s?n:i;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}const h=new Re;h.setAttribute("position",new me(l,3)),h.setAttribute("color",new me(c,3));const u=new Mt({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}class p_ extends Kt{constructor(e=10,t=16,n=8,i=64,s=4473924,r=8947848){s=new ue(s),r=new ue(r);const a=[],l=[];for(let u=0;u<=t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,g);const p=u&1?s:r;l.push(p.r,p.g,p.b),l.push(p.r,p.g,p.b)}for(let u=0;u<=n;u++){const d=u&1?s:r,f=e-e/n*u;for(let g=0;g<i;g++){let p=g/i*(Math.PI*2),m=Math.sin(p)*f,x=Math.cos(p)*f;a.push(m,0,x),l.push(d.r,d.g,d.b),p=(g+1)/i*(Math.PI*2),m=Math.sin(p)*f,x=Math.cos(p)*f,a.push(m,0,x),l.push(d.r,d.g,d.b)}}const c=new Re;c.setAttribute("position",new me(a,3)),c.setAttribute("color",new me(l,3));const h=new Mt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}}const Ec=new S,Tr=new S,Cc=new S;class m_ extends Ge{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new Re;i.setAttribute("position",new me([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Mt({fog:!1,toneMapped:!1});this.lightPlane=new Tn(i,s),this.add(this.lightPlane),i=new Re,i.setAttribute("position",new me([0,0,0,0,0,1],3)),this.targetLine=new Tn(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Ec.setFromMatrixPosition(this.light.matrixWorld),Tr.setFromMatrixPosition(this.light.target.matrixWorld),Cc.subVectors(Tr,Ec),this.lightPlane.lookAt(Tr),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Tr),this.targetLine.scale.z=Cc.length()}}const Er=new S,et=new Zr;class g_ extends Kt{constructor(e){const t=new Re,n=new Mt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],r={},a=new ue(16755200),l=new ue(16711680),c=new ue(43775),h=new ue(16777215),u=new ue(3355443);d("n1","n2",a),d("n2","n4",a),d("n4","n3",a),d("n3","n1",a),d("f1","f2",a),d("f2","f4",a),d("f4","f3",a),d("f3","f1",a),d("n1","f1",a),d("n2","f2",a),d("n3","f3",a),d("n4","f4",a),d("p","n1",l),d("p","n2",l),d("p","n3",l),d("p","n4",l),d("u1","u2",c),d("u2","u3",c),d("u3","u1",c),d("c","t",h),d("p","c",u),d("cn1","cn2",u),d("cn3","cn4",u),d("cf1","cf2",u),d("cf3","cf4",u);function d(g,p,m){f(g,m),f(p,m)}function f(g,p){i.push(0,0,0),s.push(p.r,p.g,p.b),r[g]===void 0&&(r[g]=[]),r[g].push(i.length/3-1)}t.setAttribute("position",new me(i,3)),t.setAttribute("color",new me(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update()}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),tt("c",t,e,et,0,0,-1),tt("t",t,e,et,0,0,1),tt("n1",t,e,et,-n,-i,-1),tt("n2",t,e,et,n,-i,-1),tt("n3",t,e,et,-n,i,-1),tt("n4",t,e,et,n,i,-1),tt("f1",t,e,et,-n,-i,1),tt("f2",t,e,et,n,-i,1),tt("f3",t,e,et,-n,i,1),tt("f4",t,e,et,n,i,1),tt("u1",t,e,et,n*.7,i*1.1,-1),tt("u2",t,e,et,-n*.7,i*1.1,-1),tt("u3",t,e,et,0,i*2,-1),tt("cf1",t,e,et,-n,0,1),tt("cf2",t,e,et,n,0,1),tt("cf3",t,e,et,0,-i,1),tt("cf4",t,e,et,0,i,1),tt("cn1",t,e,et,-n,0,-1),tt("cn2",t,e,et,n,0,-1),tt("cn3",t,e,et,0,-i,-1),tt("cn4",t,e,et,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function tt(o,e,t,n,i,s,r){Er.set(i,s,r).unproject(n);const a=e[o];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Er.x,Er.y,Er.z)}}const Cr=new ci;class x_ extends Kt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Re;s.setIndex(new Ye(n,1)),s.setAttribute("position",new Ye(i,3)),super(s,new Mt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Cr.setFromObject(this.object),Cr.isEmpty())return;const t=Cr.min,n=Cr.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}}class __ extends Kt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Re;s.setIndex(new Ye(n,1)),s.setAttribute("position",new me(i,3)),super(s,new Mt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class y_ extends Tn{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],r=new Re;r.setAttribute("position",new me(s,3)),r.computeBoundingSphere(),super(r,new Mt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],l=new Re;l.setAttribute("position",new me(a,3)),l.computeBoundingSphere(),this.add(new ft(l,new Pn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?Tt:Qn,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const Lc=new S;let Lr,Wa;class v_ extends Ge{constructor(e=new S(0,0,1),t=new S(0,0,0),n=1,i=16776960,s=n*.2,r=s*.2){super(),this.type="ArrowHelper",Lr===void 0&&(Lr=new Re,Lr.setAttribute("position",new me([0,0,0,0,1,0],3)),Wa=new En(0,.5,1,5,1),Wa.translate(0,-.5,0)),this.position.copy(t),this.line=new Tn(Lr,new Mt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ft(Wa,new Pn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,r)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Lc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Lc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class M_ extends Kt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Re;i.setAttribute("position",new me(t,3)),i.setAttribute("color",new me(n,3));const s=new Mt({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ue,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class b_{constructor(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ls,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(_){const M=[];for(let y=0,w=_.length;y<w;y++){const T=_[y],L=new Kn;L.curves=T.curves,M.push(L)}return M}function i(_,M){const y=M.length;let w=!1;for(let T=y-1,L=0;L<y;T=L++){let v=M[T],E=M[L],R=E.x-v.x,D=E.y-v.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(v=M[L],R=-R,E=M[T],D=-D),_.y<v.y||_.y>E.y)continue;if(_.y===v.y){if(_.x===v.x)return!0}else{const X=D*(_.x-v.x)-R*(_.y-v.y);if(X===0)return!0;if(X<0)continue;w=!w}}else{if(_.y!==v.y)continue;if(E.x<=_.x&&_.x<=v.x||v.x<=_.x&&_.x<=E.x)return!0}}return w}const s=Yt.isClockWise,r=this.subPaths;if(r.length===0)return[];if(t===!0)return n(r);let a,l,c;const h=[];if(r.length===1)return l=r[0],c=new Kn,c.curves=l.curves,h.push(c),h;let u=!s(r[0].getPoints());u=e?!u:u;const d=[],f=[];let g=[],p=0,m;f[p]=void 0,g[p]=[];for(let _=0,M=r.length;_<M;_++)l=r[_],m=l.getPoints(),a=s(m),a=e?!a:a,a?(!u&&f[p]&&p++,f[p]={s:new Kn,p:m},f[p].s.curves=l.curves,u&&p++,g[p]=[]):g[p].push({h:l,p:m[0]});if(!f[0])return n(r);if(f.length>1){let _=!1,M=0;for(let y=0,w=f.length;y<w;y++)d[y]=[];for(let y=0,w=f.length;y<w;y++){const T=g[y];for(let L=0;L<T.length;L++){const v=T[L];let E=!0;for(let R=0;R<f.length;R++)i(v.p,f[R].p)&&(y!==R&&M++,E?(E=!1,d[R].push(v)):_=!0);E&&d[y].push(v)}}M>0&&_===!1&&(g=d)}let x;for(let _=0,M=f.length;_<M;_++){c=f[_].s,h.push(c),x=g[_];for(let y=0,w=x.length;y<w;y++)c.holes.push(x[y].h)}return h}}class w_{static toHalfFloat(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=it(e,-65504,65504),Pc[0]=e;const t=Rc[0],n=t>>23&511;return Bt[n]+((t&8388607)>>Ot[n])}static fromHalfFloat(e){const t=e>>10;return Rc[0]=rl[ku[t]+(e&1023)]+rs[t],Pc[0]}}const Uu=new ArrayBuffer(4),Pc=new Float32Array(Uu),Rc=new Uint32Array(Uu),Bt=new Uint32Array(512),Ot=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(Bt[o]=0,Bt[o|256]=32768,Ot[o]=24,Ot[o|256]=24):e<-14?(Bt[o]=1024>>-e-14,Bt[o|256]=1024>>-e-14|32768,Ot[o]=-e-1,Ot[o|256]=-e-1):e<=15?(Bt[o]=e+15<<10,Bt[o|256]=e+15<<10|32768,Ot[o]=13,Ot[o|256]=13):e<128?(Bt[o]=31744,Bt[o|256]=64512,Ot[o]=24,Ot[o|256]=24):(Bt[o]=31744,Bt[o|256]=64512,Ot[o]=13,Ot[o|256]=13)}const rl=new Uint32Array(2048),rs=new Uint32Array(64),ku=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,rl[o]=e|t}for(let o=1024;o<2048;++o)rl[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)rs[o]=o<<23;rs[31]=1199570944;rs[32]=2147483648;for(let o=33;o<63;++o)rs[o]=2147483648+(o-32<<23);rs[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(ku[o]=1024);class S_ extends Re{constructor(){console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"),super()}}class A_ extends Re{constructor(){console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"),super()}}function T_(){console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js")}function E_(){console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js")}function C_(){console.error("THREE.ImmediateRenderObject has been removed.")}class L_ extends Ct{constructor(e,t,n){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(e,t,n),this.samples=4}}class P_ extends Os{constructor(e,t,n,i){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(e,t,n,i)}}class R_ extends Jr{constructor(e,t,n,i){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wr);const I_=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ah,AddEquation:Gn,AddOperation:nh,AdditiveAnimationBlendMode:Do,AdditiveBlending:Xa,AlphaFormat:fh,AlwaysDepth:Zc,AlwaysStencilFunc:Lh,AmbientLight:Lu,AmbientLightProbe:Nx,AnimationClip:Ns,AnimationLoader:bx,AnimationMixer:e_,AnimationObjectGroup:Kx,AnimationUtils:$e,ArcCurve:nu,ArrayCamera:Hh,ArrowHelper:v_,Audio:zu,AudioAnalyser:Vx,AudioContext:tl,AudioListener:Ox,AudioLoader:Dx,AxesHelper:M_,BackSide:Tt,BasicDepthPacking:Th,BasicShadowMap:Zu,Bone:Go,BooleanKeyframeTrack:ui,Box2:a_,Box3:ci,Box3Helper:__,BoxBufferGeometry:on,BoxGeometry:on,BoxHelper:x_,BufferAttribute:Ye,BufferGeometry:Re,BufferGeometryLoader:Fu,ByteType:lh,Cache:ai,Camera:Zr,CameraHelper:g_,CanvasTexture:q0,CapsuleBufferGeometry:Hi,CapsuleGeometry:Hi,CatmullRomCurve3:iu,CineonToneMapping:rh,CircleBufferGeometry:Wi,CircleGeometry:Wi,ClampToEdgeWrapping:_t,Clock:Nu,Color:ue,ColorKeyframeTrack:Qo,ColorManagement:Rt,CompressedTexture:tu,CompressedTextureLoader:wx,ConeBufferGeometry:qi,ConeGeometry:qi,CubeCamera:Fh,CubeReflectionMapping:bn,CubeRefractionMapping:wn,CubeTexture:ks,CubeTextureLoader:Sx,CubeUVReflectionMapping:ts,CubicBezierCurve:qo,CubicBezierCurve3:su,CubicInterpolant:Mu,CullFaceBack:qa,CullFaceFront:Dc,CullFaceFrontBack:Yu,CullFaceNone:Ic,Curve:kt,CurvePath:au,CustomBlending:zc,CustomToneMapping:oh,CylinderBufferGeometry:En,CylinderGeometry:En,Cylindrical:r_,Data3DTexture:Jr,DataArrayTexture:Os,DataTexture:Ui,DataTexture2DArray:P_,DataTexture3D:R_,DataTextureLoader:Ax,DataUtils:w_,DecrementStencilOp:ld,DecrementWrapStencilOp:hd,DefaultLoadingManager:Su,DepthFormat:Mn,DepthStencilFormat:ei,DepthTexture:Wh,DirectionalLight:Cu,DirectionalLightHelper:m_,DiscreteInterpolant:bu,DodecahedronBufferGeometry:Xi,DodecahedronGeometry:Xi,DoubleSide:jn,DstAlphaFactor:Hc,DstColorFactor:qc,DynamicCopyUsage:Ad,DynamicDrawUsage:yd,DynamicReadUsage:bd,EdgesGeometry:ou,EllipseCurve:ia,EqualDepth:Kc,EqualStencilFunc:pd,EquirectangularReflectionMapping:vs,EquirectangularRefractionMapping:Ms,Euler:ns,EventDispatcher:Ln,ExtrudeBufferGeometry:Ji,ExtrudeGeometry:Ji,FileLoader:ln,FlatShading:Nc,Float16BufferAttribute:cf,Float32BufferAttribute:me,Float64BufferAttribute:hf,FloatType:rn,Fog:ea,FogExp2:jr,Font:E_,FontLoader:T_,FramebufferTexture:W0,FrontSide:Qn,Frustum:$r,GLBufferAttribute:n_,GLSL1:Ed,GLSL3:yo,GreaterDepth:jc,GreaterEqualDepth:Qc,GreaterEqualStencilFunc:_d,GreaterStencilFunc:gd,GridHelper:f_,Group:Bi,HalfFloatType:ki,HemisphereLight:Au,HemisphereLightHelper:d_,HemisphereLightProbe:Fx,IcosahedronBufferGeometry:Yi,IcosahedronGeometry:Yi,ImageBitmapLoader:Ix,ImageLoader:zs,ImageUtils:No,ImmediateRenderObject:C_,IncrementStencilOp:od,IncrementWrapStencilOp:cd,InstancedBufferAttribute:Gi,InstancedBufferGeometry:Du,InstancedInterleavedBuffer:t_,InstancedMesh:Qh,Int16BufferAttribute:of,Int32BufferAttribute:lf,Int8BufferAttribute:sf,IntType:hh,InterleavedBuffer:ta,InterleavedBufferAttribute:ni,Interpolant:Vs,InterpolateDiscrete:Ss,InterpolateLinear:As,InterpolateSmooth:Fr,InvertStencilOp:ud,KeepStencilOp:Nr,KeyframeTrack:Vt,LOD:$h,LatheBufferGeometry:ii,LatheGeometry:ii,Layers:Yr,LessDepth:$c,LessEqualDepth:Or,LessEqualStencilFunc:md,LessStencilFunc:fd,Light:Rn,LightProbe:aa,Line:Tn,Line3:o_,LineBasicMaterial:Mt,LineCurve:sa,LineCurve3:ru,LineDashedMaterial:vu,LineLoop:jh,LineSegments:Kt,LinearEncoding:An,LinearFilter:nt,LinearInterpolant:Ko,LinearMipMapLinearFilter:ed,LinearMipMapNearestFilter:ju,LinearMipmapLinearFilter:oi,LinearMipmapNearestFilter:Ro,LinearSRGBColorSpace:vn,LinearToneMapping:ih,Loader:Lt,LoaderUtils:To,LoadingManager:jo,LoopOnce:wh,LoopPingPong:Ah,LoopRepeat:Sh,LuminanceAlphaFormat:gh,LuminanceFormat:mh,MOUSE:Xu,Material:ct,MaterialLoader:Iu,MathUtils:Hd,Matrix3:Dt,Matrix4:Ie,MaxEquation:$a,Mesh:ft,MeshBasicMaterial:Pn,MeshDepthMaterial:Uo,MeshDistanceMaterial:ko,MeshLambertMaterial:_u,MeshMatcapMaterial:yu,MeshNormalMaterial:xu,MeshPhongMaterial:mu,MeshPhysicalMaterial:pu,MeshStandardMaterial:$o,MeshToonMaterial:gu,MinEquation:Za,MirroredRepeatWrapping:ws,MixOperation:th,MultiplyBlending:Ya,MultiplyOperation:Bs,NearestFilter:at,NearestMipMapLinearFilter:Qu,NearestMipMapNearestFilter:Ku,NearestMipmapLinearFilter:kr,NearestMipmapNearestFilter:Ur,NeverDepth:Yc,NeverStencilFunc:dd,NoBlending:an,NoColorSpace:sd,NoToneMapping:Jt,NormalAnimationBlendMode:Xr,NormalBlending:Jn,NotEqualDepth:eh,NotEqualStencilFunc:xd,NumberKeyframeTrack:Ds,Object3D:Ge,ObjectLoader:Px,ObjectSpaceNormalMap:Ch,OctahedronBufferGeometry:si,OctahedronGeometry:si,OneFactor:kc,OneMinusDstAlphaFactor:Wc,OneMinusDstColorFactor:Xc,OneMinusSrcAlphaFactor:Po,OneMinusSrcColorFactor:Gc,OrthographicCamera:Kr,PCFShadowMap:Co,PCFSoftShadowMap:Fc,PMREMGenerator:Mo,ParametricGeometry:S_,Path:Ls,PerspectiveCamera:dt,Plane:_n,PlaneBufferGeometry:ti,PlaneGeometry:ti,PlaneHelper:y_,PointLight:Eu,PointLightHelper:h_,Points:eu,PointsMaterial:Ho,PolarGridHelper:p_,PolyhedronBufferGeometry:$t,PolyhedronGeometry:$t,PositionalAudio:kx,PropertyBinding:Ue,PropertyMixer:Bu,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:Jo,Quaternion:bt,QuaternionKeyframeTrack:ss,QuaternionLinearInterpolant:wu,REVISION:Wr,RGBADepthPacking:Eh,RGBAFormat:At,RGBAIntegerFormat:Mh,RGBA_ASTC_10x10_Format:mo,RGBA_ASTC_10x5_Format:uo,RGBA_ASTC_10x6_Format:fo,RGBA_ASTC_10x8_Format:po,RGBA_ASTC_12x10_Format:go,RGBA_ASTC_12x12_Format:xo,RGBA_ASTC_4x4_Format:io,RGBA_ASTC_5x4_Format:so,RGBA_ASTC_5x5_Format:ro,RGBA_ASTC_6x5_Format:ao,RGBA_ASTC_6x6_Format:oo,RGBA_ASTC_8x5_Format:lo,RGBA_ASTC_8x6_Format:co,RGBA_ASTC_8x8_Format:ho,RGBA_BPTC_Format:_o,RGBA_ETC2_EAC_Format:no,RGBA_PVRTC_2BPPV1_Format:eo,RGBA_PVRTC_4BPPV1_Format:ja,RGBA_S3TC_DXT1_Format:Rr,RGBA_S3TC_DXT3_Format:Ir,RGBA_S3TC_DXT5_Format:Dr,RGBFormat:ph,RGB_ETC1_Format:bh,RGB_ETC2_Format:to,RGB_PVRTC_2BPPV1_Format:Qa,RGB_PVRTC_4BPPV1_Format:Ka,RGB_S3TC_DXT1_Format:Pr,RGFormat:yh,RGIntegerFormat:vh,RawShaderMaterial:fu,Ray:Us,Raycaster:i_,RectAreaLight:Pu,RedFormat:xh,RedIntegerFormat:_h,ReinhardToneMapping:sh,RepeatWrapping:bs,ReplaceStencilOp:ad,ReverseSubtractEquation:Oc,RingBufferGeometry:Zi,RingGeometry:Zi,SRGBColorSpace:Xt,Scene:Jh,ShaderChunk:ze,ShaderLib:Ut,ShaderMaterial:Zt,ShadowMaterial:du,Shape:Kn,ShapeBufferGeometry:$i,ShapeGeometry:$i,ShapePath:b_,ShapeUtils:Yt,ShortType:ch,Skeleton:na,SkeletonHelper:c_,SkinnedMesh:Kh,SmoothShading:$u,Source:Xn,Sphere:hi,SphereBufferGeometry:ri,SphereGeometry:ri,Spherical:s_,SphericalHarmonics3:Ru,SplineCurve:Yo,SpotLight:Tu,SpotLightHelper:l_,Sprite:Zh,SpriteMaterial:Vo,SrcAlphaFactor:Lo,SrcAlphaSaturateFactor:Jc,SrcColorFactor:Vc,StaticCopyUsage:Sd,StaticDrawUsage:Vr,StaticReadUsage:Md,StereoCamera:zx,StreamCopyUsage:Td,StreamDrawUsage:vd,StreamReadUsage:wd,StringKeyframeTrack:di,SubtractEquation:Bc,SubtractiveBlending:Ja,TOUCH:Ju,TangentSpaceNormalMap:li,TetrahedronBufferGeometry:Ki,TetrahedronGeometry:Ki,TextGeometry:A_,Texture:lt,TextureLoader:Tx,TorusBufferGeometry:Qi,TorusGeometry:Qi,TorusKnotBufferGeometry:ji,TorusKnotGeometry:ji,Triangle:It,TriangleFanDrawMode:id,TriangleStripDrawMode:nd,TrianglesDrawMode:td,TubeBufferGeometry:es,TubeGeometry:es,UVMapping:qr,Uint16BufferAttribute:zo,Uint32BufferAttribute:Bo,Uint8BufferAttribute:rf,Uint8ClampedBufferAttribute:af,Uniform:sl,UniformsLib:re,UniformsUtils:Dh,UnsignedByteType:Sn,UnsignedInt248Type:Yn,UnsignedIntType:yn,UnsignedShort4444Type:uh,UnsignedShort5551Type:dh,UnsignedShortType:Io,VSMShadowMap:Fi,Vector2:$,Vector3:S,Vector4:Xe,VectorKeyframeTrack:Fs,VideoTexture:H0,WebGL1Renderer:Xh,WebGL3DRenderTarget:Jd,WebGLArrayRenderTarget:Xd,WebGLCubeRenderTarget:Nh,WebGLMultipleRenderTargets:Yd,WebGLMultisampleRenderTarget:L_,WebGLRenderTarget:Ct,WebGLRenderer:qh,WebGLUtils:Gh,WireframeGeometry:uu,WrapAroundEnding:Ts,ZeroCurvatureEnding:Wn,ZeroFactor:Uc,ZeroSlopeEnding:qn,ZeroStencilOp:rd,_SRGBAFormat:Gr,sRGBEncoding:Ke},Symbol.toStringTag,{value:"Module"}));export{Re as $,Lu as A,Tx as B,ue as C,Cu as D,Ln as E,ea as F,Bi as G,Ix as H,Yi as I,ta as J,ni as K,Lt as L,_u as M,at as N,Ye as O,dt as P,bt as Q,bs as R,Jh as S,Qi as T,Ho as U,S as V,qh as W,ct as X,Mt as Y,jn as Z,Ue as _,ri as a,Kh as a0,nd as a1,id as a2,Kt as a3,Tn as a4,jh as a5,eu as a6,Hd as a7,Kr as a8,Fs as a9,re as aA,Ut as aB,Dh as aC,Zt as aD,Xe as aE,o_ as aF,I_ as aG,i_ as aH,mu as aI,Bs as aJ,Kn as aK,Ji as aL,ss as aa,Ds as ab,Ns as ac,Go as ad,Ge as ae,Ie as af,na as ag,Qn as ah,lt as ai,ci as aj,hi as ak,Ax as al,ki as am,rn as an,w_ as ao,An as ap,ah as aq,vs as ar,ti as as,Ya as at,on as au,M_ as av,Du as aw,me as ax,t_ as ay,uu as az,ft as b,gu as c,Xu as d,Ju as e,s_ as f,$ as g,To as h,ln as i,Tu as j,Eu as k,Pn as l,pu as m,$o as n,li as o,Vs as p,nt as q,Ur as r,Ke as s,Ro as t,kr as u,oi as v,_t as w,ws as x,As as y,Ss as z};
