(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="170",vh=0,Oo=1,_h=2,xc=1,Sc=2,En=3,Pn=0,Wt=1,Et=2,Ot=0,Ii=1,ma=2,Fo=3,Bo=4,Mc=5,An=100,xh=101,Sh=102,Mh=103,bh=104,ga=200,yh=201,wh=202,Eh=203,va=204,_a=205,bc=206,Th=207,yc=208,Ah=209,Ch=210,Lh=211,Rh=212,Ph=213,kh=214,xa=0,Sa=1,Ma=2,Fi=3,ba=4,ya=5,wa=6,Ea=7,lo=0,Dh=1,Ih=2,Vn=0,wc=1,Ec=2,Tc=3,co=4,Uh=5,Ac=6,Cc=7,Lc=300,Bi=301,zi=302,Ta=303,Aa=304,pr=306,ri=1e3,ii=1001,Ca=1002,et=1003,Nh=1004,ws=1005,gn=1006,Er=1007,si=1008,kn=1009,Rc=1010,Pc=1011,gs=1012,ho=1013,ai=1014,ln=1015,hn=1016,uo=1017,fo=1018,oi=1020,kc=35902,Dc=1021,Ic=1022,cn=1023,Uc=1024,Nc=1025,Ui=1026,li=1027,mr=1028,po=1029,Oc=1030,mo=1031,go=1033,ir=33776,sr=33777,rr=33778,ar=33779,La=35840,Ra=35841,Pa=35842,ka=35843,Da=36196,Ia=37492,Ua=37496,Na=37808,Oa=37809,Fa=37810,Ba=37811,za=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,Ya=37818,$a=37819,qa=37820,ja=37821,or=36492,Za=36494,Ja=36495,Fc=36283,Ka=36284,Qa=36285,eo=36286,Oh=3200,Fh=3201,gr=0,Bh=1,Gn="",xt="srgb",Vi="srgb-linear",vr="linear",rt="srgb",di=7680,zo=519,zh=512,Hh=513,Gh=514,Bc=515,Vh=516,Wh=517,Xh=518,Yh=519,Ho=35044,Go="300 es",Ln=2e3,ur=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vo=1234567;const hs=Math.PI/180,vs=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function vo(i,e){return(i%e+e)%e}function $h(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qh(i,e,t){return i!==e?(t-i)/(e-i):0}function us(i,e,t){return(1-t)*i+t*e}function jh(i,e,t,n){return us(i,e,1-Math.exp(-t*n))}function Zh(i,e=1){return e-Math.abs(vo(i,e*2)-e)}function Jh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function eu(i,e){return i+Math.random()*(e-i)}function tu(i){return i*(.5-Math.random())}function nu(i){i!==void 0&&(Vo=i);let e=Vo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iu(i){return i*hs}function su(i){return i*vs}function ru(i){return(i&i-1)===0&&i!==0}function au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),h=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),p=a((e-n)/2),g=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*p,o*h);break;case"YZY":i.set(c*p,o*u,c*d,o*h);break;case"ZXZ":i.set(c*d,c*p,o*u,o*h);break;case"XZX":i.set(o*u,c*v,c*g,o*h);break;case"YXY":i.set(c*g,o*u,c*v,o*h);break;case"ZYZ":i.set(c*v,c*g,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zt={DEG2RAD:hs,RAD2DEG:vs,generateUUID:Xi,clamp:Ft,euclideanModulo:vo,mapLinear:$h,inverseLerp:qh,lerp:us,damp:jh,pingpong:Zh,smoothstep:Jh,smootherstep:Kh,randInt:Qh,randFloat:eu,randFloatSpread:tu,seededRandom:nu,degToRad:iu,radToDeg:su,isPowerOfTwo:ru,ceilPowerOfTwo:au,floorPowerOfTwo:ou,setQuaternionFromProperEuler:lu,normalize:Ut,denormalize:Li};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,a,o,c,h){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],d=n[7],p=n[2],g=n[5],v=n[8],_=s[0],m=s[3],f=s[6],w=s[1],M=s[4],b=s[7],R=s[2],L=s[5],A=s[8];return r[0]=a*_+o*w+c*R,r[3]=a*m+o*M+c*L,r[6]=a*f+o*b+c*A,r[1]=h*_+u*w+d*R,r[4]=h*m+u*M+d*L,r[7]=h*f+u*b+d*A,r[2]=p*_+g*w+v*R,r[5]=p*m+g*M+v*L,r[8]=p*f+g*b+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=u*a-o*h,p=o*c-u*r,g=h*r-a*c,v=t*d+n*p+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*h-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=g*_,e[7]=(n*c-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tr.makeScale(e,t)),this}rotate(e){return this.premultiply(Tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new Be;function zc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){const i=_s("canvas");return i.style.display="block",i}const Wo={};function os(i){i in Wo||(Wo[i]=!0,console.warn(i))}function hu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function uu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function du(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xo=[.64,.33,.3,.6,.15,.06],Yo=[.2126,.7152,.0722],$o=[.3127,.329],qo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Vi]:{primaries:Xo,whitePoint:$o,transfer:vr,toXYZ:qo,fromXYZ:jo,luminanceCoefficients:Yo,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:Xo,whitePoint:$o,transfer:rt,toXYZ:qo,fromXYZ:jo,luminanceCoefficients:Yo,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}});let fi;class fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=_s("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pu=0;class Hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ar(s[a].image)):r.push(Ar(s[a]))}else r=Ar(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class Dt extends Wi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=ii,s=ii,r=gn,a=si,o=cn,c=kn,h=Dt.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Xi(),this.name="",this.source=new Hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Lc;Dt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,h=c[0],u=c[4],d=c[8],p=c[1],g=c[5],v=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(h+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,b=(g+1)/2,R=(f+1)/2,L=(u+p)/4,A=(d+_)/4,P=(v+m)/4;return M>b&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=L/n,r=A/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=L/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=P/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(d-_)/w,this.z=(p-u)/w,this.w=Math.acos((h+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gu extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zt extends gu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gc extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=et,this.minFilter=et,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vu extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=et,this.minFilter=et,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3];const p=r[a+0],g=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=g,e[t+2]=v,e[t+3]=_;return}if(d!==_||c!==p||h!==g||u!==v){let m=1-o;const f=c*p+h*g+u*v+d*_,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const R=Math.sqrt(M),L=Math.atan2(R,f*w);m=Math.sin(m*L)/R,o=Math.sin(o*L)/R}const b=o*w;if(c=c*m+p*b,h=h*m+g*b,u=u*m+v*b,d=d*m+_*b,m===1-o){const R=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=R,h*=R,u*=R,d*=R}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a],p=r[a+1],g=r[a+2],v=r[a+3];return e[t]=o*v+u*d+c*g-h*p,e[t+1]=c*v+u*p+h*d-o*g,e[t+2]=h*v+u*g+o*p-c*d,e[t+3]=u*v-o*d-c*p-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),d=o(r/2),p=c(n/2),g=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=p*u*d+h*g*v,this._y=h*g*d-p*u*v,this._z=h*u*v+p*g*d,this._w=h*u*d-p*g*v;break;case"YXZ":this._x=p*u*d+h*g*v,this._y=h*g*d-p*u*v,this._z=h*u*v-p*g*d,this._w=h*u*d+p*g*v;break;case"ZXY":this._x=p*u*d-h*g*v,this._y=h*g*d+p*u*v,this._z=h*u*v+p*g*d,this._w=h*u*d-p*g*v;break;case"ZYX":this._x=p*u*d-h*g*v,this._y=h*g*d+p*u*v,this._z=h*u*v-p*g*d,this._w=h*u*d+p*g*v;break;case"YZX":this._x=p*u*d+h*g*v,this._y=h*g*d+p*u*v,this._z=h*u*v-p*g*d,this._w=h*u*d-p*g*v;break;case"XZY":this._x=p*u*d-h*g*v,this._y=h*g*d-p*u*v,this._z=h*u*v+p*g*d,this._w=h*u*d+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-h)*g,this._z=(a-s)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(u-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+h)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(r-h)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(a-s)/g,this._x=(r+h)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*h+a*d-o*u,this.y=n+c*u+o*h-r*d,this.z=s+c*d+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cr.copy(this).projectOnVector(e),this.sub(Cr)}reflect(e){return this.sub(Cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new N,Zo=new xs;class ci{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Ts.subVectors(this.max,Zi),pi.subVectors(e.a,Zi),mi.subVectors(e.b,Zi),gi.subVectors(e.c,Zi),Un.subVectors(mi,pi),Nn.subVectors(gi,mi),Yn.subVectors(pi,gi);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Yn.z,Yn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Yn.z,0,-Yn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Yn.y,Yn.x,0];return!Lr(t,pi,mi,gi,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,pi,mi,gi,Ts))?!1:(As.crossVectors(Un,Nn),t=[As.x,As.y,As.z],Lr(t,pi,mi,gi,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,Es=new ci,pi=new N,mi=new N,gi=new N,Un=new N,Nn=new N,Yn=new N,Zi=new N,Ts=new N,As=new N,$n=new N;function Lr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=e.dot($n),h=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const _u=new ci,Ji=new N,Rr=new N;class Yi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_u.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Rr)),this.expandByPoint(Ji.copy(e.center).sub(Rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new N,Pr=new N,Cs=new N,On=new N,kr=new N,Ls=new N,Dr=new N;class _o{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pr.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Pr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=On.dot(this.direction),c=-On.dot(Cs),h=On.lengthSq(),u=Math.abs(1-a*a);let d,p,g,v;if(u>0)if(d=a*c-o,p=a*o-c,v=r*u,d>=0)if(p>=-v)if(p<=v){const _=1/u;d*=_,p*=_,g=d*(d+a*p+2*o)+p*(a*d+p+2*c)+h}else p=r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+h;else p=-r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+h;else p<=-v?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+p*(p+2*c)+h):p<=v?(d=0,p=Math.min(Math.max(-r,-c),r),g=p*(p+2*c)+h):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+p*(p+2*c)+h);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pr).addScaledVector(Cs,p),g}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){kr.subVectors(t,e),Ls.subVectors(n,e),Dr.crossVectors(kr,Ls);let a=this.direction.dot(Dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const c=o*this.direction.dot(Ls.crossVectors(On,Ls));if(c<0)return null;const h=o*this.direction.dot(kr.cross(On));if(h<0||c+h>a)return null;const u=-o*On.dot(Dr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,s,r,a,o,c,h,u,d,p,g,v,_,m){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,u,d,p,g,v,_,m)}set(e,t,n,s,r,a,o,c,h,u,d,p,g,v,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=u,f[10]=d,f[14]=p,f[3]=g,f[7]=v,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=a*u,g=a*d,v=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=h,t[1]=g+v*h,t[5]=p-_*h,t[9]=-o*c,t[2]=_-p*h,t[6]=v+g*h,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,g=c*d,v=h*u,_=h*d;t[0]=p+_*o,t[4]=v*o-g,t[8]=a*h,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=g*o-v,t[6]=_+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,g=c*d,v=h*u,_=h*d;t[0]=p-_*o,t[4]=-a*d,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,g=a*d,v=o*u,_=o*d;t[0]=c*u,t[4]=v*h-g,t[8]=p*h+_,t[1]=c*d,t[5]=_*h+p,t[9]=g*h-v,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,g=a*h,v=o*c,_=o*h;t[0]=c*u,t[4]=_-p*d,t[8]=v*d+g,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=g*d+v,t[10]=p-_*d}else if(e.order==="XZY"){const p=a*c,g=a*h,v=o*c,_=o*h;t[0]=c*u,t[4]=-d,t[8]=h*u,t[1]=p*d+_,t[5]=a*u,t[9]=g*d-v,t[2]=v*d-g,t[6]=o*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,Su)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Fn.crossVectors(n,$t),Fn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Fn.crossVectors(n,$t)),Fn.normalize(),Rs.crossVectors($t,Fn),s[0]=Fn.x,s[4]=Rs.x,s[8]=$t.x,s[1]=Fn.y,s[5]=Rs.y,s[9]=$t.y,s[2]=Fn.z,s[6]=Rs.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],d=n[5],p=n[9],g=n[13],v=n[2],_=n[6],m=n[10],f=n[14],w=n[3],M=n[7],b=n[11],R=n[15],L=s[0],A=s[4],P=s[8],y=s[12],x=s[1],C=s[5],F=s[9],O=s[13],Y=s[2],Z=s[6],$=s[10],K=s[14],V=s[3],te=s[7],ue=s[11],xe=s[15];return r[0]=a*L+o*x+c*Y+h*V,r[4]=a*A+o*C+c*Z+h*te,r[8]=a*P+o*F+c*$+h*ue,r[12]=a*y+o*O+c*K+h*xe,r[1]=u*L+d*x+p*Y+g*V,r[5]=u*A+d*C+p*Z+g*te,r[9]=u*P+d*F+p*$+g*ue,r[13]=u*y+d*O+p*K+g*xe,r[2]=v*L+_*x+m*Y+f*V,r[6]=v*A+_*C+m*Z+f*te,r[10]=v*P+_*F+m*$+f*ue,r[14]=v*y+_*O+m*K+f*xe,r[3]=w*L+M*x+b*Y+R*V,r[7]=w*A+M*C+b*Z+R*te,r[11]=w*P+M*F+b*$+R*ue,r[15]=w*y+M*O+b*K+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],d=e[6],p=e[10],g=e[14],v=e[3],_=e[7],m=e[11],f=e[15];return v*(+r*c*d-s*h*d-r*o*p+n*h*p+s*o*g-n*c*g)+_*(+t*c*g-t*h*p+r*a*p-s*a*g+s*h*u-r*c*u)+m*(+t*h*d-t*o*g-r*a*d+n*a*g+r*o*u-n*h*u)+f*(-s*o*u-t*c*d+t*o*p+s*a*d-n*a*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=e[9],p=e[10],g=e[11],v=e[12],_=e[13],m=e[14],f=e[15],w=d*m*h-_*p*h+_*c*g-o*m*g-d*c*f+o*p*f,M=v*p*h-u*m*h-v*c*g+a*m*g+u*c*f-a*p*f,b=u*_*h-v*d*h+v*o*g-a*_*g-u*o*f+a*d*f,R=v*d*c-u*_*c-v*o*p+a*_*p+u*o*m-a*d*m,L=t*w+n*M+s*b+r*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=w*A,e[1]=(_*p*r-d*m*r-_*s*g+n*m*g+d*s*f-n*p*f)*A,e[2]=(o*m*r-_*c*r+_*s*h-n*m*h-o*s*f+n*c*f)*A,e[3]=(d*c*r-o*p*r-d*s*h+n*p*h+o*s*g-n*c*g)*A,e[4]=M*A,e[5]=(u*m*r-v*p*r+v*s*g-t*m*g-u*s*f+t*p*f)*A,e[6]=(v*c*r-a*m*r-v*s*h+t*m*h+a*s*f-t*c*f)*A,e[7]=(a*p*r-u*c*r+u*s*h-t*p*h-a*s*g+t*c*g)*A,e[8]=b*A,e[9]=(v*d*r-u*_*r-v*n*g+t*_*g+u*n*f-t*d*f)*A,e[10]=(a*_*r-v*o*r+v*n*h-t*_*h-a*n*f+t*o*f)*A,e[11]=(u*o*r-a*d*r-u*n*h+t*d*h+a*n*g-t*o*g)*A,e[12]=R*A,e[13]=(u*_*s-v*d*s+v*n*p-t*_*p-u*n*m+t*d*m)*A,e[14]=(v*o*s-a*_*s-v*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*p+t*o*p)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,d=o+o,p=r*h,g=r*u,v=r*d,_=a*u,m=a*d,f=o*d,w=c*h,M=c*u,b=c*d,R=n.x,L=n.y,A=n.z;return s[0]=(1-(_+f))*R,s[1]=(g+b)*R,s[2]=(v-M)*R,s[3]=0,s[4]=(g-b)*L,s[5]=(1-(p+f))*L,s[6]=(m+w)*L,s[7]=0,s[8]=(v+M)*A,s[9]=(m-w)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);const h=1/r,u=1/a,d=1/o;return rn.elements[0]*=h,rn.elements[1]*=h,rn.elements[2]*=h,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ln){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let g,v;if(o===Ln)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ur)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ln){const c=this.elements,h=1/(t-e),u=1/(n-s),d=1/(a-r),p=(t+e)*h,g=(n+s)*u;let v,_;if(o===Ln)v=(a+r)*d,_=-2*d;else if(o===ur)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new N,rn=new Ze,xu=new N(0,0,0),Su=new N(1,1,1),Fn=new N,Rs=new N,$t=new N,Jo=new Ze,Ko=new xs;class un{constructor(e=0,t=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],d=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mu=0;const Qo=new N,_i=new xs,bn=new Ze,Ps=new N,Ki=new N,bu=new N,yu=new xs,el=new N(1,0,0),tl=new N(0,1,0),nl=new N(0,0,1),il={type:"added"},wu={type:"removed"},xi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class wt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new N,t=new un,n=new xs,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Be}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return Qo.copy(e).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ki,Ps,this.up):bn.lookAt(Ps,Ki,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(bn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new N(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new N,yn=new N,Ur=new N,wn=new N,Si=new N,Mi=new N,sl=new N,Nr=new N,Or=new N,Fr=new N,Br=new gt,zr=new gt,Hr=new gt;class on{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),yn.subVectors(n,t),Ur.subVectors(e,t);const a=an.dot(an),o=an.dot(yn),c=an.dot(Ur),h=yn.dot(yn),u=yn.dot(Ur),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,g=(h*c-o*u)*p,v=(a*u-o*c)*p;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Br.setScalar(0),zr.setScalar(0),Hr.setScalar(0),Br.fromBufferAttribute(e,t),zr.fromBufferAttribute(e,n),Hr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Br,r.x),a.addScaledVector(zr,r.y),a.addScaledVector(Hr,r.z),a}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),yn.subVectors(e,t),an.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),an.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),Mi.subVectors(r,n),Nr.subVectors(e,n);const c=Si.dot(Nr),h=Mi.dot(Nr);if(c<=0&&h<=0)return t.copy(n);Or.subVectors(e,s);const u=Si.dot(Or),d=Mi.dot(Or);if(u>=0&&d<=u)return t.copy(s);const p=c*d-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Si,a);Fr.subVectors(e,r);const g=Si.dot(Fr),v=Mi.dot(Fr);if(v>=0&&g<=v)return t.copy(r);const _=g*h-c*v;if(_<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(Mi,o);const m=u*v-g*d;if(m<=0&&d-u>=0&&g-v>=0)return sl.subVectors(r,s),o=(d-u)/(d-u+(g-v)),t.copy(s).addScaledVector(sl,o);const f=1/(m+_+p);return a=_*f,o=p*f,t.copy(n).addScaledVector(Si,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class he{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=vo(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Gr(a,r,e+1/3),this.g=Gr(a,r,e),this.b=Gr(a,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return je.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ft(Pt.r*255,0,255))*65536+Math.round(Ft(Pt.g*255,0,255))*256+Math.round(Ft(Pt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=xt){je.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(ks);const n=us(Bn.h,ks.h,t),s=us(Bn.s,ks.s,t),r=us(Bn.l,ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new he;he.NAMES=Vc;let Eu=0;class Gt extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Xi(),this.name="",this.blending=Ii,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=_a,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ft extends Gt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,Ds=new ke;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ho,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}}class Wc extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xc extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tu=0;const Kt=new Ze,Vr=new wt,bi=new N,qt=new ci,Qi=new ci,yt=new N;class Xt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zc(e)?Xc:Wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(qt.min,Qi.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Qi.max),qt.expandByPoint(yt)):(qt.expandByPoint(Qi.min),qt.expandByPoint(Qi.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)yt.fromBufferAttribute(o,h),c&&(bi.fromBufferAttribute(e,h),yt.add(bi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new N,c[P]=new N;const h=new N,u=new N,d=new N,p=new ke,g=new ke,v=new ke,_=new N,m=new N;function f(P,y,x){h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,y),v.fromBufferAttribute(r,x),u.sub(h),d.sub(h),g.sub(p),v.sub(p);const C=1/(g.x*v.y-v.x*g.y);isFinite(C)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(C),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(C),o[P].add(_),o[y].add(_),o[x].add(_),c[P].add(m),c[y].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,y=w.length;P<y;++P){const x=w[P],C=x.start,F=x.count;for(let O=C,Y=C+F;O<Y;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new N,b=new N,R=new N,L=new N;function A(P){R.fromBufferAttribute(s,P),L.copy(R);const y=o[P];M.copy(y),M.sub(R.multiplyScalar(R.dot(y))).normalize(),b.crossVectors(L,y);const C=b.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,C)}for(let P=0,y=w.length;P<y;++P){const x=w[P],C=x.start,F=x.count;for(let O=C,Y=C+F;O<Y;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,h=new N,u=new N,d=new N;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const h=o.array,u=o.itemSize,d=o.normalized,p=new h.constructor(c.length*u);let g=0,v=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?g=c[_]*o.data.stride+o.offset:g=c[_]*u;for(let f=0;f<u;f++)p[v++]=h[g++]}return new Tt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){const p=h[u],g=e(p,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,p=h.length;d<p;d++){const g=h[d];u.push(g.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],d=r[h];for(let p=0,g=d.length;p<g;p++)u.push(d[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new Ze,qn=new _o,Is=new Yi,al=new N,Us=new N,Ns=new N,Os=new N,Wr=new N,Fs=new N,ol=new N,Bs=new N;class qe extends wt{constructor(e=new Xt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],d=r[c];u!==0&&(Wr.fromBufferAttribute(d,e),a?Fs.addScaledVector(Wr,u):Fs.addScaledVector(Wr.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(Is.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Is,al)===null||qn.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(rl.copy(r).invert(),qn.copy(e.ray).applyMatrix4(rl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const m=p[v],f=a[m.materialIndex],w=Math.max(m.start,g.start),M=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let b=w,R=M;b<R;b+=3){const L=o.getX(b),A=o.getX(b+1),P=o.getX(b+2);s=zs(this,f,e,n,h,u,d,L,A,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let m=v,f=_;m<f;m+=3){const w=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=zs(this,a,e,n,h,u,d,w,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const m=p[v],f=a[m.materialIndex],w=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let b=w,R=M;b<R;b+=3){const L=b,A=b+1,P=b+2;s=zs(this,f,e,n,h,u,d,L,A,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let m=v,f=_;m<f;m+=3){const w=m,M=m+1,b=m+2;s=zs(this,a,e,n,h,u,d,w,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Au(i,e,t,n,s,r,a,o){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Pn,o),c===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Bs);return h<t.near||h>t.far?null:{distance:h,point:Bs.clone(),object:i}}function zs(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,Us),i.getVertexPosition(c,Ns),i.getVertexPosition(h,Os);const u=Au(i,e,t,n,Us,Ns,Os,ol);if(u){const d=new N;on.getBarycoord(ol,Us,Ns,Os,d),s&&(u.uv=on.getInterpolatedAttribute(s,o,c,h,d,new ke)),r&&(u.uv1=on.getInterpolatedAttribute(r,o,c,h,d,new ke)),a&&(u.normal=on.getInterpolatedAttribute(a,o,c,h,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:c,c:h,normal:new N,materialIndex:0};on.getNormal(Us,Ns,Os,p.normal),u.face=p,u.barycoord=d}return u}class kt extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],d=[];let p=0,g=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(d,2));function v(_,m,f,w,M,b,R,L,A,P,y){const x=b/A,C=R/P,F=b/2,O=R/2,Y=L/2,Z=A+1,$=P+1;let K=0,V=0;const te=new N;for(let ue=0;ue<$;ue++){const xe=ue*C-O;for(let Ue=0;Ue<Z;Ue++){const Je=Ue*x-F;te[_]=Je*w,te[m]=xe*M,te[f]=Y,h.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[f]=L>0?1:-1,u.push(te.x,te.y,te.z),d.push(Ue/A),d.push(1-ue/P),K+=1}}for(let ue=0;ue<P;ue++)for(let xe=0;xe<A;xe++){const Ue=p+xe+Z*ue,Je=p+xe+Z*(ue+1),q=p+(xe+1)+Z*(ue+1),ie=p+(xe+1)+Z*ue;c.push(Ue,Je,ie),c.push(Je,q,ie),V+=6}o.addGroup(g,V,y),g+=V,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function Cu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const vn={clone:Hi,merge:Nt};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Gt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $c extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new N,ll=new ke,cl=new ke;class en extends $c{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,ll,cl),t.subVectors(cl,ll)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,wi=1;class Pu extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(yi,wi,e,t);s.layers=this.layers,this.add(s);const r=new en(yi,wi,e,t);r.layers=this.layers,this.add(r);const a=new en(yi,wi,e,t);a.layers=this.layers,this.add(a);const o=new en(yi,wi,e,t);o.layers=this.layers,this.add(o);const c=new en(yi,wi,e,t);c.layers=this.layers,this.add(c);const h=new en(yi,wi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class qc extends Dt{constructor(e,t,n,s,r,a,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ku extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Ot});r.uniforms.tEquirect.value=t;const a=new qe(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=gn),new Pu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Xr=new N,Du=new N,Iu=new Be;class Qn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Xr.subVectors(n,t).cross(Du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iu.getNormalMatrix(e),s=this.coplanarPoint(Xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Yi,Hs=new N;class So{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],v=s[9],_=s[10],m=s[11],f=s[12],w=s[13],M=s[14],b=s[15];if(n[0].setComponents(c-r,p-h,m-g,b-f).normalize(),n[1].setComponents(c+r,p+h,m+g,b+f).normalize(),n[2].setComponents(c+a,p+u,m+v,b+w).normalize(),n[3].setComponents(c-a,p-u,m-v,b-w).normalize(),n[4].setComponents(c-o,p-d,m-_,b-M).normalize(),t===Ln)n[5].setComponents(c+o,p+d,m+_,b+M).normalize();else if(t===ur)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Hs.x=s.normal.x>0?e.max.x:e.min.x,Hs.y=s.normal.y>0?e.max.y:e.min.y,Hs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Uu(i){const e=new WeakMap;function t(o,c){const h=o.array,u=o.usage,d=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,u),o.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){const u=c.array,d=c.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,u);else{d.sort((g,v)=>g.start-v.start);let p=0;for(let g=1;g<d.length;g++){const v=d[p],_=d[g];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++p,d[p]=_)}d.length=p+1;for(let g=0,v=d.length;g<v;g++){const _=d[g];i.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}class Ss extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,d=e/o,p=t/c,g=[],v=[],_=[],m=[];for(let f=0;f<u;f++){const w=f*p-a;for(let M=0;M<h;M++){const b=M*d-r;v.push(b,-w,0),_.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){const M=w+h*f,b=w+h*(f+1),R=w+1+h*(f+1),L=w+1+h*f;g.push(M,b,L),g.push(b,R,L)}this.setIndex(g),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ou=`#ifdef USE_ALPHAHASH
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
#endif`,Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
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
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu=`#ifdef USE_BATCHING
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
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ju=`#ifdef USE_IRIDESCENCE
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
#endif`,Zu=`#ifdef USE_BUMPMAP
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rd=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
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
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
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
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
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
#endif`,Id=`struct PhysicalMaterial {
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
}`,Ud=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rf=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mf=`float getShadowMask() {
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
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,Wf=`#define DISTANCE
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
}`,Xf=`#define DISTANCE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Kf=`#define LAMBERT
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
}`,Qf=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,np=`#define NORMAL
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
}`,ip=`#define NORMAL
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
}`,sp=`#define PHONG
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
}`,rp=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,lp=`#define TOON
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
}`,cp=`#define TOON
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
}`,hp=`uniform float size;
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 color;
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
}`,pp=`uniform float rotation;
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
}`,mp=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Nu,alphahash_pars_fragment:Ou,alphamap_fragment:Fu,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:Hu,aomap_fragment:Gu,aomap_pars_fragment:Vu,batching_pars_vertex:Wu,batching_vertex:Xu,begin_vertex:Yu,beginnormal_vertex:$u,bsdfs:qu,iridescence_fragment:ju,bumpmap_pars_fragment:Zu,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:ed,color_fragment:td,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:dd,colorspace_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Cd,envmap_vertex:_d,fog_vertex:xd,fog_pars_vertex:Sd,fog_fragment:Md,fog_pars_fragment:bd,gradientmap_pars_fragment:yd,lightmap_pars_fragment:wd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Td,lights_pars_begin:Ad,lights_toon_fragment:Ld,lights_toon_pars_fragment:Rd,lights_phong_fragment:Pd,lights_phong_pars_fragment:kd,lights_physical_fragment:Dd,lights_physical_pars_fragment:Id,lights_fragment_begin:Ud,lights_fragment_maps:Nd,lights_fragment_end:Od,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Hd,map_fragment:Gd,map_pars_fragment:Vd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:$d,morphinstance_vertex:qd,morphcolor_vertex:jd,morphnormal_vertex:Zd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Kd,normal_fragment_begin:Qd,normal_fragment_maps:ef,normal_pars_fragment:tf,normal_pars_vertex:nf,normal_vertex:sf,normalmap_pars_fragment:rf,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:lf,iridescence_pars_fragment:cf,opaque_fragment:hf,packing:uf,premultiplied_alpha_fragment:df,project_vertex:ff,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:xf,shadowmap_vertex:Sf,shadowmask_pars_fragment:Mf,skinbase_vertex:bf,skinning_pars_vertex:yf,skinning_vertex:wf,skinnormal_vertex:Ef,specularmap_fragment:Tf,specularmap_pars_fragment:Af,tonemapping_fragment:Cf,tonemapping_pars_fragment:Lf,transmission_fragment:Rf,transmission_pars_fragment:Pf,uv_pars_fragment:kf,uv_pars_vertex:Df,uv_vertex:If,worldpos_vertex:Uf,background_vert:Nf,background_frag:Of,backgroundCube_vert:Ff,backgroundCube_frag:Bf,cube_vert:zf,cube_frag:Hf,depth_vert:Gf,depth_frag:Vf,distanceRGBA_vert:Wf,distanceRGBA_frag:Xf,equirect_vert:Yf,equirect_frag:$f,linedashed_vert:qf,linedashed_frag:jf,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Kf,meshlambert_frag:Qf,meshmatcap_vert:ep,meshmatcap_frag:tp,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:sp,meshphong_frag:rp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:hp,points_frag:up,shadow_vert:dp,shadow_frag:fp,sprite_vert:pp,sprite_frag:mp},ce={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},mn={basic:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new he(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Nt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Nt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new he(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Nt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Nt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Nt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Nt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Nt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Nt([ce.lights,ce.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};mn.physical={uniforms:Nt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Gs={r:0,b:0,g:0},Zn=new un,gp=new Ze;function vp(i,e,t,n,s,r,a){const o=new he(0);let c=r===!0?0:1,h,u,d=null,p=0,g=null;function v(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function _(w){let M=!1;const b=v(w);b===null?f(o,c):b&&b.isColor&&(f(b,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const b=v(M);b&&(b.isCubeTexture||b.mapping===pr)?(u===void 0&&(u=new qe(new kt(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Hi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zn.copy(M.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(Zn)),u.material.toneMapped=je.getTransfer(b.colorSpace)!==rt,(d!==b||p!==b.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=b,p=b.version,g=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new qe(new Ss(2,2),new St({name:"BackgroundMaterial",uniforms:Hi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=je.getTransfer(b.colorSpace)!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||p!==b.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,p=b.version,g=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,M){w.getRGB(Gs,Yc(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(o,c)},render:_,addToRenderList:m}}function _p(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(x,C,F,O,Y){let Z=!1;const $=d(O,F,C);r!==$&&(r=$,h(r.object)),Z=g(x,O,F,Y),Z&&v(x,O,F,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(x,C,F,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,C,F){const O=F.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let Z=Y[C.id];Z===void 0&&(Z={},Y[C.id]=Z);let $=Z[O];return $===void 0&&($=p(c()),Z[O]=$),$}function p(x){const C=[],F=[],O=[];for(let Y=0;Y<t;Y++)C[Y]=0,F[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:O,object:x,attributes:{},index:null}}function g(x,C,F,O){const Y=r.attributes,Z=C.attributes;let $=0;const K=F.getAttributes();for(const V in K)if(K[V].location>=0){const ue=Y[V];let xe=Z[V];if(xe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function v(x,C,F,O){const Y={},Z=C.attributes;let $=0;const K=F.getAttributes();for(const V in K)if(K[V].location>=0){let ue=Z[V];ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),Y[V]=xe,$++}r.attributes=Y,r.attributesNum=$,r.index=O}function _(){const x=r.newAttributes;for(let C=0,F=x.length;C<F;C++)x[C]=0}function m(x){f(x,0)}function f(x,C){const F=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;F[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),Y[x]!==C&&(i.vertexAttribDivisor(x,C),Y[x]=C)}function w(){const x=r.newAttributes,C=r.enabledAttributes;for(let F=0,O=C.length;F<O;F++)C[F]!==x[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function M(x,C,F,O,Y,Z,$){$===!0?i.vertexAttribIPointer(x,C,F,Y,Z):i.vertexAttribPointer(x,C,F,O,Y,Z)}function b(x,C,F,O){_();const Y=O.attributes,Z=F.getAttributes(),$=C.defaultAttributeValues;for(const K in Z){const V=Z[K];if(V.location>=0){let te=Y[K];if(te===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const ue=te.normalized,xe=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const Je=Ue.buffer,q=Ue.type,ie=Ue.bytesPerElement,_e=q===i.INT||q===i.UNSIGNED_INT||te.gpuType===ho;if(te.isInterleavedBufferAttribute){const ae=te.data,we=ae.stride,Le=te.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<V.locationSize;De++)f(V.location+De,ae.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<V.locationSize;De++)m(V.location+De);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let De=0;De<V.locationSize;De++)M(V.location+De,xe/V.locationSize,q,ue,we*ie,(Le+xe/V.locationSize*De)*ie,_e)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae,te.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ae=0;ae<V.locationSize;ae++)M(V.location+ae,xe/V.locationSize,q,ue,xe*ie,xe/V.locationSize*ae*ie,_e)}}else if($!==void 0){const ue=$[K];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(V.location,ue);break;case 3:i.vertexAttrib3fv(V.location,ue);break;case 4:i.vertexAttrib4fv(V.location,ue);break;default:i.vertexAttrib1fv(V.location,ue)}}}}w()}function R(){P();for(const x in n){const C=n[x];for(const F in C){const O=C[F];for(const Y in O)u(O[Y].object),delete O[Y];delete C[F]}delete n[x]}}function L(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const F in C){const O=C[F];for(const Y in O)u(O[Y].object),delete O[Y];delete C[F]}delete n[x.id]}function A(x){for(const C in n){const F=n[C];if(F[x.id]===void 0)continue;const O=F[x.id];for(const Y in O)u(O[Y].object),delete O[Y];delete F[x.id]}}function P(){y(),a=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function xp(i,e,t){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),t.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),t.update(u,n,d))}function o(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,n,1)}function c(h,u,d,p){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<h.length;v++)a(h[v],u[v],p[v]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,u,0,p,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*p[_];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ln&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:R,maxSamples:L}}function Mp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Qn,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||n!==0||s;return s=p,n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,g){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):h();else{const w=r?0:n,M=w*4;let b=f.clippingState||null;c.value=b,b=u(v,p,M,g);for(let R=0;R!==M;++R)b[R]=t[R];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,g,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,v!==!0||m===null){const f=g+_*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,b=g;M!==_;++M,b+=4)a.copy(d[M]).applyMatrix4(w,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bp(i){let e=new WeakMap;function t(a,o){return o===Ta?a.mapping=Bi:o===Aa&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ta||o===Aa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new ku(c.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _r extends $c{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,hl=[.125,.215,.35,.446,.526,.582],ti=20,Yr=new _r,ul=new he;let $r=null,qr=0,jr=0,Zr=!1;const ei=(1+Math.sqrt(5))/2,Ei=1/ei,dl=[new N(-ei,Ei,0),new N(ei,Ei,0),new N(-Ei,0,ei),new N(Ei,0,ei),new N(0,ei,-Ei),new N(0,ei,Ei),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){$r=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($r,qr,jr),this._renderer.xr.enabled=Zr,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:hn,format:cn,colorSpace:Vi,depthBuffer:!1},s=pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(r)),this._blurMaterial=wp(r,e,t)}return s}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,n,s){const o=new en(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ul),u.toneMapping=Vn,u.autoClear=!1;const g=new ft({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),v=new qe(new kt,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(ul),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):w===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));const M=this._cubeSize;Vs(s,w*M,f>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bi||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Vs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dl[(s-r-1)%dl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new qe(this._lodPlanes[s],h),p=h.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ti-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const f=[];let w=0;for(let A=0;A<ti;++A){const P=A/_,y=Math.exp(-P*P/2);f.push(y),A===0?w+=y:A<m&&(w+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=v,p.mipInt.value=M-n;const b=this._sizeLods[s],R=3*b*(s>M-Ri?s-M+Ri:0),L=4*(this._cubeSize-b);Vs(t,R,L,3*b,2*b),c.setRenderTarget(t),c.render(d,Yr)}}function yp(i){const e=[],t=[],n=[];let s=i;const r=i-Ri+1+hl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ri?c=hl[a-i+Ri-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),u=-h,d=1+h,p=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,v=6,_=3,m=2,f=1,w=new Float32Array(_*v*g),M=new Float32Array(m*v*g),b=new Float32Array(f*v*g);for(let L=0;L<g;L++){const A=L%3*2/3-1,P=L>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(y,_*v*L),M.set(p,m*v*L);const x=[L,L,L,L,L,L];b.set(x,f*v*L)}const R=new Xt;R.setAttribute("position",new Tt(w,_)),R.setAttribute("uv",new Tt(M,m)),R.setAttribute("faceIndex",new Tt(b,f)),e.push(R),s>Ri&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pl(i,e,t){const n=new Zt(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wp(i,e,t){const n=new Float32Array(ti),s=new N(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function ml(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function gl(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function Ep(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Ta||c===Aa,u=c===Bi||c===zi;if(h||u){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new fl(i)),d=h?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return h&&g&&g.height>0||u&&g&&s(g)?(t===null&&(t=new fl(i)),d=h?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ap(i,e,t,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const _=p.morphAttributes[v];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}p.removeEventListener("dispose",a),delete s[p.id];const g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const v in p)e.update(p[v],i.ARRAY_BUFFER);const g=d.morphAttributes;for(const v in g){const _=g[v];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function h(d){const p=[],g=d.index,v=d.attributes.position;let _=0;if(g!==null){const w=g.array;_=g.version;for(let M=0,b=w.length;M<b;M+=3){const R=w[M+0],L=w[M+1],A=w[M+2];p.push(R,L,L,A,A,R)}}else if(v!==void 0){const w=v.array;_=v.version;for(let M=0,b=w.length/3-1;M<b;M+=3){const R=M+0,L=M+1,A=M+2;p.push(R,L,L,A,A,R)}}else return;const m=new(zc(p)?Xc:Wc)(p,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const p=r.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Cp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,g){i.drawElements(n,g,r,p*a),t.update(g,n,1)}function h(p,g,v){v!==0&&(i.drawElementsInstanced(n,g,r,p*a,v),t.update(g,n,v))}function u(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,v);let m=0;for(let f=0;f<v;f++)m+=g[f];t.update(m,n,1)}function d(p,g,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)h(p[f]/a,g[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,p,0,_,0,v);let f=0;for(let w=0;w<v;w++)f+=g[w]*_[w];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Lp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,e,t){const n=new WeakMap,s=new gt;function r(a,o,c){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var g=x;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let R=o.attributes.position.count*b,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*L*4*d),P=new Gc(A,R,L,d);P.type=ln,P.needsUpdate=!0;const y=b*4;for(let C=0;C<d;C++){const F=f[C],O=w[C],Y=M[C],Z=R*L*4*C;for(let $=0;$<F.count;$++){const K=$*y;v===!0&&(s.fromBufferAttribute(F,$),A[Z+K+0]=s.x,A[Z+K+1]=s.y,A[Z+K+2]=s.z,A[Z+K+3]=0),_===!0&&(s.fromBufferAttribute(O,$),A[Z+K+4]=s.x,A[Z+K+5]=s.y,A[Z+K+6]=s.z,A[Z+K+7]=0),m===!0&&(s.fromBufferAttribute(Y,$),A[Z+K+8]=s.x,A[Z+K+9]=s.y,A[Z+K+10]=s.z,A[Z+K+11]=Y.itemSize===4?s.w:1)}}p={count:d,texture:P,size:new ke(R,L)},n.set(o,p),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<h.length;m++)v+=h[m];const _=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Pp(i,e,t,n){let s=new WeakMap;function r(c){const h=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class bo extends Dt{constructor(e,t,n,s,r,a,o,c,h,u=Ui){if(u!==Ui&&u!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=ai),n===void 0&&u===li&&(n=oi),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:et,this.minFilter=c!==void 0?c:et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zc=new Dt,vl=new bo(1,1),Jc=new Gc,Kc=new vu,Qc=new qc,_l=[],xl=[],Sl=new Float32Array(16),Ml=new Float32Array(9),bl=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xr(i,e){let t=xl[e];t===void 0&&(t=new Int32Array(e),xl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;bl.set(n),i.uniformMatrix2fv(this.addr,!1,bl),bt(t,n)}}function Op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),bt(t,n)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),bt(t,n)}}function Bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vl.compareFunction=Bc,r=vl):r=Zc,t.setTexture2D(e||r,s)}function qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kc,s)}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qc,s)}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jc,s)}function Jp(i){switch(i){case 5126:return kp;case 35664:return Dp;case 35665:return Ip;case 35666:return Up;case 35674:return Np;case 35675:return Op;case 35676:return Fp;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Hp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Kp(i,e){i.uniform1fv(this.addr,e)}function Qp(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function em(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function tm(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function nm(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function im(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sm(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rm(i,e){i.uniform1iv(this.addr,e)}function am(i,e){i.uniform2iv(this.addr,e)}function om(i,e){i.uniform3iv(this.addr,e)}function lm(i,e){i.uniform4iv(this.addr,e)}function cm(i,e){i.uniform1uiv(this.addr,e)}function hm(i,e){i.uniform2uiv(this.addr,e)}function um(i,e){i.uniform3uiv(this.addr,e)}function dm(i,e){i.uniform4uiv(this.addr,e)}function fm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Zc,r[a])}function pm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kc,r[a])}function mm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qc,r[a])}function gm(i,e,t){const n=this.cache,s=e.length,r=xr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jc,r[a])}function vm(i){switch(i){case 5126:return Kp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class _m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vm(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function yl(i,e){i.seq.push(e),i.map[e.id]=e}function Mm(i,e,t){const n=i.name,s=n.length;for(Jr.lastIndex=0;;){const r=Jr.exec(n),a=Jr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){yl(t,h===void 0?new _m(o,i,e):new xm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Sm(o),yl(t,d)),t=d}}}class lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Mm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function wl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bm=37297;let ym=0;function wm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const El=new Be;function Em(i){je._getMatrix(El,je.workingColorSpace,i);const e=`mat3( ${El.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case vr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wm(i.getShaderSource(e),a)}else return s}function Tm(i,e){const t=Em(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Am(i,e){let t;switch(e){case wc:t="Linear";break;case Ec:t="Reinhard";break;case Tc:t="Cineon";break;case co:t="ACESFilmic";break;case Ac:t="AgX";break;case Cc:t="Neutral";break;case Uh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new N;function Cm(){je.getLuminanceCoefficients(Ws);const i=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Rm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ls(i){return i!==""}function Al(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(km,Im)}const Dm=new Map;function Im(i,e){let t=ze[e];if(t===void 0){const n=Dm.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return to(t)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(i){return i.replace(Um,Nm)}function Nm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Om(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function Fm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:e="ENVMAP_TYPE_CUBE";break;case pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function zm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lo:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Ih:e="ENVMAP_BLENDING_ADD";break}return e}function Hm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Gm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Om(t),h=Fm(t),u=Bm(t),d=zm(t),p=Hm(t),g=Lm(t),v=Rm(r),_=s.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Tm("linearToOutputTexel",t.outputColorSpace),Cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=to(a),a=Al(a,t),a=Cl(a,t),o=to(o),o=Al(o,t),o=Cl(o,t),a=Ll(a),o=Ll(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=w+m+a,b=w+f+o,R=wl(s,s.VERTEX_SHADER,M),L=wl(s,s.FRAGMENT_SHADER,b);s.attachShader(_,R),s.attachShader(_,L),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(L).trim();let Z=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,L);else{const K=Tl(s,R,"vertex"),V=Tl(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+K+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||Y==="")&&($=!1);$&&(C.diagnostics={runnable:Z,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(R),s.deleteShader(L),P=new lr(s,_),y=Pm(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,bm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=L,this}let Vm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xm(e),t.set(e,n)),n}}class Xm{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}}function Ym(i,e,t,n,s,r,a){const o=new xo,c=new Wm,h=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,x,C,F,O){const Y=F.fog,Z=O.geometry,$=y.isMeshStandardMaterial?F.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),V=K&&K.mapping===pr?K.image.height:null,te=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=ue!==void 0?ue.length:0;let Ue=0;Z.morphAttributes.position!==void 0&&(Ue=1),Z.morphAttributes.normal!==void 0&&(Ue=2),Z.morphAttributes.color!==void 0&&(Ue=3);let Je,q,ie,_e;if(te){const st=mn[te];Je=st.vertexShader,q=st.fragmentShader}else Je=y.vertexShader,q=y.fragmentShader,c.update(y),ie=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);const ae=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,De=O.isBatchedMesh===!0,lt=!!y.map,We=!!y.matcap,ht=!!K,D=!!y.aoMap,Ct=!!y.lightMap,Ge=!!y.bumpMap,Ve=!!y.normalMap,Ce=!!y.displacementMap,it=!!y.emissiveMap,Ae=!!y.metalnessMap,T=!!y.roughnessMap,S=y.anisotropy>0,B=y.clearcoat>0,J=y.dispersion>0,ee=y.iridescence>0,j=y.sheen>0,Se=y.transmission>0,le=S&&!!y.anisotropyMap,de=B&&!!y.clearcoatMap,He=B&&!!y.clearcoatNormalMap,ne=B&&!!y.clearcoatRoughnessMap,ge=ee&&!!y.iridescenceMap,Re=ee&&!!y.iridescenceThicknessMap,Pe=j&&!!y.sheenColorMap,ve=j&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,Ie=!!y.specularColorMap,Ke=!!y.specularIntensityMap,k=Se&&!!y.transmissionMap,oe=Se&&!!y.thicknessMap,W=!!y.gradientMap,Q=!!y.alphaMap,me=y.alphaTest>0,fe=!!y.alphaHash,Oe=!!y.extensions;let pt=Vn;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Lt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:q,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:De,batchingColor:De&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Vi,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:We,envMap:ht,envMapMode:ht&&K.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:Ct,bumpMap:Ge,normalMap:Ve,displacementMap:p&&Ce,emissiveMap:it,normalMapObjectSpace:Ve&&y.normalMapType===Bh,normalMapTangentSpace:Ve&&y.normalMapType===gr,metalnessMap:Ae,roughnessMap:T,anisotropy:S,anisotropyMap:le,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:He,clearcoatRoughnessMap:ne,dispersion:J,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:j,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:Ye,specularColorMap:Ie,specularIntensityMap:Ke,transmission:Se,transmissionMap:k,thicknessMap:oe,gradientMap:W,opaque:y.transparent===!1&&y.blending===Ii&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:fe,combine:y.combine,mapUv:lt&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:Ct&&_(y.lightMap.channel),bumpMapUv:Ge&&_(y.bumpMap.channel),normalMapUv:Ve&&_(y.normalMap.channel),displacementMapUv:Ce&&_(y.displacementMap.channel),emissiveMapUv:it&&_(y.emissiveMap.channel),metalnessMapUv:Ae&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:le&&_(y.anisotropyMap.channel),clearcoatMapUv:de&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(y.sheenRoughnessMap.channel),specularMapUv:Ye&&_(y.specularMap.channel),specularColorMapUv:Ie&&_(y.specularColorMap.channel),specularIntensityMapUv:Ke&&_(y.specularIntensityMap.channel),transmissionMapUv:k&&_(y.transmissionMap.channel),thicknessMapUv:oe&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ve||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(lt||Q),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Et,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=h.has(1),Lt.vertexUv2s=h.has(2),Lt.vertexUv3s=h.has(3),h.clear(),Lt}function f(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(w(x,y),M(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const x=v[y.type];let C;if(x){const F=mn[x];C=vn.clone(F.uniforms)}else C=y.uniforms;return C}function R(y,x){let C;for(let F=0,O=u.length;F<O;F++){const Y=u[F];if(Y.cacheKey===x){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new Gm(i,x,y,r),u.push(C)),C}function L(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function A(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:R,releaseProgram:L,releaseShaderCache:A,programs:u,dispose:P}}function $m(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,g,v,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,p,g,v,_,m){const f=a(d,p,g,v,_,m);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):t.push(f)}function c(d,p,g,v,_,m){const f=a(d,p,g,v,_,m);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):t.unshift(f)}function h(d,p){t.length>1&&t.sort(d||qm),n.length>1&&n.sort(p||Pl),s.length>1&&s.sort(p||Pl)}function u(){for(let d=e,p=i.length;d<p;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function jm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new kl,i.set(n,[a])):s>=r.length?(a=new kl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new he};break;case"SpotLight":t={position:new N,direction:new N,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Km=0;function Qm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eg(i){const e=new Zm,t=Jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);const s=new N,r=new Ze,a=new Ze;function o(h){let u=0,d=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,v=0,_=0,m=0,f=0,w=0,M=0,b=0,R=0,L=0,A=0;h.sort(Qm);for(let y=0,x=h.length;y<x;y++){const C=h[y],F=C.color,O=C.intensity,Y=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=F.r*O,d+=F.g*O,p+=F.b*O;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],O);A++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,V=t.get(C);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=C.shadow.matrix,w++}n.directional[g]=$,g++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(F).multiplyScalar(O),$.distance=Y,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[_]=$;const K=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,K.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[_]=K.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Z,b++}_++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(F).multiplyScalar(O),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const K=C.shadow,V=t.get(C);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=C.shadow.matrix,M++}n.point[v]=$,v++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(O),$.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==g||P.pointLength!==v||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==w||P.numPointShadows!==M||P.numSpotShadows!==b||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=g,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+R-L,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=A,P.directionalLength=g,P.pointLength=v,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=w,P.numPointShadows=M,P.numSpotShadows=b,P.numSpotMaps=R,P.numLightProbes=A,n.version=Km++)}function c(h,u){let d=0,p=0,g=0,v=0,_=0;const m=u.matrixWorldInverse;for(let f=0,w=h.length;f<w;f++){const M=h[f];if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(M.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Dl(i){const e=new eg(i),t=[],n=[];function s(u){h.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function tg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Dl(i),e.set(s,[o])):r>=a.length?(o=new Dl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class ng extends Gt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends Gt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`;function ag(i,e,t){let n=new So;const s=new ke,r=new ke,a=new gt,o=new ng({depthPacking:Fh}),c=new ig,h={},u=t.maxTextureSize,d={[Pn]:Wt,[Wt]:Pn,[Et]:Et},p=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qe(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let f=this.type;this.render=function(L,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ot),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==En&&this.type===En,Y=f===En&&this.type!==En;for(let Z=0,$=L.length;Z<$;Z++){const K=L[Z],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const te=V.getFrameExtents();if(s.multiply(te),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,V.mapSize.y=r.y)),V.map===null||O===!0||Y===!0){const xe=this.type!==En?{minFilter:et,magFilter:et}:{};V.map!==null&&V.map.dispose(),V.map=new Zt(s.x,s.y,xe),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ue=V.getViewportCount();for(let xe=0;xe<ue;xe++){const Ue=V.getViewport(xe);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),F.viewport(a),V.updateMatrices(K,xe),n=V.getFrustum(),b(A,P,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===En&&w(V,P),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,C)};function w(L,A){const P=e.update(_);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zt(s.x,s.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(A,null,P,p,_,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(A,null,P,g,_,null)}function M(L,A,P,y){let x=null;const C=P.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=x.uuid,O=A.uuid;let Y=h[F];Y===void 0&&(Y={},h[F]=Y);let Z=Y[O];Z===void 0&&(Z=x.clone(),Y[O]=Z,A.addEventListener("dispose",R)),x=Z}if(x.visible=A.visible,x.wireframe=A.wireframe,y===En?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=P}return x}function b(L,A,P,y,x){if(L.visible===!1)return;if(L.layers.test(A.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===En)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,L.matrixWorld);const O=e.update(L),Y=L.material;if(Array.isArray(Y)){const Z=O.groups;for(let $=0,K=Z.length;$<K;$++){const V=Z[$],te=Y[V.materialIndex];if(te&&te.visible){const ue=M(L,te,y,x);L.onBeforeShadow(i,L,A,P,O,ue,V),i.renderBufferDirect(P,null,O,ue,L,V),L.onAfterShadow(i,L,A,P,O,ue,V)}}}else if(Y.visible){const Z=M(L,Y,y,x);L.onBeforeShadow(i,L,A,P,O,Z,null),i.renderBufferDirect(P,null,O,Z,L,null),L.onAfterShadow(i,L,A,P,O,Z,null)}}const F=L.children;for(let O=0,Y=F.length;O<Y;O++)b(F[O],A,P,y,x)}function R(L){L.target.removeEventListener("dispose",R);for(const P in h){const y=h[P],x=L.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const og={[xa]:Sa,[Ma]:wa,[ba]:Ea,[Fi]:ya,[Sa]:xa,[wa]:Ma,[Ea]:ba,[ya]:Fi};function lg(i,e){function t(){let k=!1;const oe=new gt;let W=null;const Q=new gt(0,0,0,0);return{setMask:function(me){W!==me&&!k&&(i.colorMask(me,me,me,me),W=me)},setLocked:function(me){k=me},setClear:function(me,fe,Oe,pt,Lt){Lt===!0&&(me*=pt,fe*=pt,Oe*=pt),oe.set(me,fe,Oe,pt),Q.equals(oe)===!1&&(i.clearColor(me,fe,Oe,pt),Q.copy(oe))},reset:function(){k=!1,W=null,Q.set(-1,0,0,0)}}}function n(){let k=!1,oe=!1,W=null,Q=null,me=null;return{setReversed:function(fe){if(oe!==fe){const Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const pt=me;me=null,this.setClear(pt)}oe=fe},getReversed:function(){return oe},setTest:function(fe){fe?ae(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(fe){W!==fe&&!k&&(i.depthMask(fe),W=fe)},setFunc:function(fe){if(oe&&(fe=og[fe]),Q!==fe){switch(fe){case xa:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=fe}},setLocked:function(fe){k=fe},setClear:function(fe){me!==fe&&(oe&&(fe=1-fe),i.clearDepth(fe),me=fe)},reset:function(){k=!1,W=null,Q=null,me=null,oe=!1}}}function s(){let k=!1,oe=null,W=null,Q=null,me=null,fe=null,Oe=null,pt=null,Lt=null;return{setTest:function(st){k||(st?ae(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(st){oe!==st&&!k&&(i.stencilMask(st),oe=st)},setFunc:function(st,tn,_n){(W!==st||Q!==tn||me!==_n)&&(i.stencilFunc(st,tn,_n),W=st,Q=tn,me=_n)},setOp:function(st,tn,_n){(fe!==st||Oe!==tn||pt!==_n)&&(i.stencilOp(st,tn,_n),fe=st,Oe=tn,pt=_n)},setLocked:function(st){k=st},setClear:function(st){Lt!==st&&(i.clearStencil(st),Lt=st)},reset:function(){k=!1,oe=null,W=null,Q=null,me=null,fe=null,Oe=null,pt=null,Lt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,h=new WeakMap;let u={},d={},p=new WeakMap,g=[],v=null,_=!1,m=null,f=null,w=null,M=null,b=null,R=null,L=null,A=new he(0,0,0),P=0,y=!1,x=null,C=null,F=null,O=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=K>=2);let te=null,ue={};const xe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Je=new gt().fromArray(xe),q=new gt().fromArray(Ue);function ie(k,oe,W,Q){const me=new Uint8Array(4),fe=i.createTexture();i.bindTexture(k,fe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<W;Oe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(oe+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return fe}const _e={};_e[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Fi),Ge(!1),Ve(Oo),ae(i.CULL_FACE),D(Ot);function ae(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function we(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Le(k,oe){return d[k]!==oe?(i.bindFramebuffer(k,oe),d[k]=oe,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function De(k,oe){let W=g,Q=!1;if(k){W=p.get(oe),W===void 0&&(W=[],p.set(oe,W));const me=k.textures;if(W.length!==me.length||W[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Oe=me.length;fe<Oe;fe++)W[fe]=i.COLOR_ATTACHMENT0+fe;W.length=me.length,Q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Q=!0);Q&&i.drawBuffers(W)}function lt(k){return v!==k?(i.useProgram(k),v=k,!0):!1}const We={[An]:i.FUNC_ADD,[xh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};We[Mh]=i.MIN,We[bh]=i.MAX;const ht={[ga]:i.ZERO,[yh]:i.ONE,[wh]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[Ch]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Eh]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Ah]:i.ONE_MINUS_DST_COLOR,[Th]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Rh]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,oe,W,Q,me,fe,Oe,pt,Lt,st){if(k===Ot){_===!0&&(we(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),k!==Mc){if(k!==m||st!==y){if((f!==An||b!==An)&&(i.blendEquation(i.FUNC_ADD),f=An,b=An),st)switch(k){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.ONE,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,M=null,R=null,L=null,A.set(0,0,0),P=0,m=k,y=st}return}me=me||oe,fe=fe||W,Oe=Oe||Q,(oe!==f||me!==b)&&(i.blendEquationSeparate(We[oe],We[me]),f=oe,b=me),(W!==w||Q!==M||fe!==R||Oe!==L)&&(i.blendFuncSeparate(ht[W],ht[Q],ht[fe],ht[Oe]),w=W,M=Q,R=fe,L=Oe),(pt.equals(A)===!1||Lt!==P)&&(i.blendColor(pt.r,pt.g,pt.b,Lt),A.copy(pt),P=Lt),m=k,y=!1}function Ct(k,oe){k.side===Et?we(i.CULL_FACE):ae(i.CULL_FACE);let W=k.side===Wt;oe&&(W=!W),Ge(W),k.blending===Ii&&k.transparent===!1?D(Ot):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),it(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(k){x!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),x=k)}function Ve(k){k!==vh?(ae(i.CULL_FACE),k!==C&&(k===Oo?i.cullFace(i.BACK):k===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),C=k}function Ce(k){k!==F&&($&&i.lineWidth(k),F=k)}function it(k,oe,W){k?(ae(i.POLYGON_OFFSET_FILL),(O!==oe||Y!==W)&&(i.polygonOffset(oe,W),O=oe,Y=W)):we(i.POLYGON_OFFSET_FILL)}function Ae(k){k?ae(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function T(k){k===void 0&&(k=i.TEXTURE0+Z-1),te!==k&&(i.activeTexture(k),te=k)}function S(k,oe,W){W===void 0&&(te===null?W=i.TEXTURE0+Z-1:W=te);let Q=ue[W];Q===void 0&&(Q={type:void 0,texture:void 0},ue[W]=Q),(Q.type!==k||Q.texture!==oe)&&(te!==W&&(i.activeTexture(W),te=W),i.bindTexture(k,oe||_e[k]),Q.type=k,Q.texture=oe)}function B(){const k=ue[te];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){Je.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Je.copy(k))}function ve(k){q.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function Ye(k,oe){let W=h.get(oe);W===void 0&&(W=new WeakMap,h.set(oe,W));let Q=W.get(k);Q===void 0&&(Q=i.getUniformBlockIndex(oe,k.name),W.set(k,Q))}function Ie(k,oe){const Q=h.get(oe).get(k);c.get(oe)!==Q&&(i.uniformBlockBinding(oe,Q,k.__bindingPointIndex),c.set(oe,Q))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},te=null,ue={},d={},p=new WeakMap,g=[],v=null,_=!1,m=null,f=null,w=null,M=null,b=null,R=null,L=null,A=new he(0,0,0),P=0,y=!1,x=null,C=null,F=null,O=null,Y=null,Je.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:we,bindFramebuffer:Le,drawBuffers:De,useProgram:lt,setBlending:D,setMaterial:Ct,setFlipSided:Ge,setCullFace:Ve,setLineWidth:Ce,setPolygonOffset:it,setScissorTest:Ae,activeTexture:T,bindTexture:S,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Re,updateUBOMapping:Ye,uniformBlockBinding:Ie,texStorage2D:He,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Pe,viewport:ve,reset:Ke}}function Il(i,e,t,n){const s=cg(n);switch(t){case Dc:return i*e;case Uc:return i*e;case Nc:return i*e*2;case mr:return i*e/s.components*s.byteLength;case po:return i*e/s.components*s.byteLength;case Oc:return i*e*2/s.components*s.byteLength;case mo:return i*e*2/s.components*s.byteLength;case Ic:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case go:return i*e*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:case ka:return Math.max(i,16)*Math.max(e,8)/4;case La:case Pa:return Math.max(i,8)*Math.max(e,8)/2;case Da:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case or:case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fc:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cg(i){switch(i){case kn:case Rc:return{byteLength:1,components:1};case gs:case Pc:case hn:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case ai:case ho:case ln:return{byteLength:4,components:1};case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,u=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return g?new OffscreenCanvas(T,S):_s("canvas")}function _(T,S,B){let J=1;const ee=Ae(T);if((ee.width>B||ee.height>B)&&(J=B/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(J*ee.width),Se=Math.floor(J*ee.height);d===void 0&&(d=v(j,Se));const le=S?v(j,Se):d;return le.width=j,le.height=Se,le.getContext("2d").drawImage(T,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Se+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,S,B,J,ee=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=S;if(S===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),S===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),S===i.RGBA){const Se=ee?vr:je.getTransfer(J);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Se===rt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(T,S){let B;return T?S===null||S===ai||S===oi?B=i.DEPTH24_STENCIL8:S===ln?B=i.DEPTH32F_STENCIL8:S===gs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ai||S===oi?B=i.DEPTH_COMPONENT24:S===ln?B=i.DEPTH_COMPONENT32F:S===gs&&(B=i.DEPTH_COMPONENT16),B}function R(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==et&&T.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function L(T){const S=T.target;S.removeEventListener("dispose",L),P(S),S.isVideoTexture&&u.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),x(S)}function P(T){const S=n.get(T);if(S.__webglInit===void 0)return;const B=T.source,J=p.get(B);if(J){const ee=J[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(T),Object.keys(J).length===0&&p.delete(B)}n.remove(T)}function y(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const B=T.source,J=p.get(B);delete J[S.__cacheKey],a.memory.textures--}function x(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ee=0;ee<S.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let J=0,ee=B.length;J<ee;J++){const j=n.get(B[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[J])}n.remove(T)}let C=0;function F(){C=0}function O(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function Y(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Z(T,S){const B=n.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,T,S);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function $(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){q(B,T,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function K(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){q(B,T,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function V(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){ie(B,T,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const te={[ri]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},ue={[et]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Er]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},xe={[zh]:i.NEVER,[Yh]:i.ALWAYS,[Hh]:i.LESS,[Bc]:i.LEQUAL,[Gh]:i.EQUAL,[Xh]:i.GEQUAL,[Vh]:i.GREATER,[Wh]:i.NOTEQUAL};function Ue(T,S){if(S.type===ln&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===Er||S.magFilter===ws||S.magFilter===si||S.minFilter===gn||S.minFilter===Er||S.minFilter===ws||S.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,te[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,te[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,te[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ue[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===et||S.minFilter!==ws&&S.minFilter!==si||S.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Je(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",L));const J=S.source;let ee=p.get(J);ee===void 0&&(ee={},p.set(J,ee));const j=Y(S);if(j!==T.__cacheKey){ee[j]===void 0&&(ee[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[j].usedTimes++;const Se=ee[T.__cacheKey];Se!==void 0&&(ee[T.__cacheKey].usedTimes--,Se.usedTimes===0&&y(S)),T.__cacheKey=j,T.__webglTexture=ee[j].texture}return B}function q(T,S,B){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const ee=Je(T,S),j=S.source;t.bindTexture(J,T.__webglTexture,i.TEXTURE0+B);const Se=n.get(j);if(j.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const le=je.getPrimaries(je.workingColorSpace),de=S.colorSpace===Gn?null:je.getPrimaries(S.colorSpace),He=S.colorSpace===Gn||le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ne=_(S.image,!1,s.maxTextureSize);ne=it(S,ne);const ge=r.convert(S.format,S.colorSpace),Re=r.convert(S.type);let Pe=M(S.internalFormat,ge,Re,S.colorSpace,S.isVideoTexture);Ue(J,S);let ve;const Ye=S.mipmaps,Ie=S.isVideoTexture!==!0,Ke=Se.__version===void 0||ee===!0,k=j.dataReady,oe=R(S,ne);if(S.isDepthTexture)Pe=b(S.format===li,S.type),Ke&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ge,Re,null));else if(S.isDataTexture)if(Ye.length>0){Ie&&Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,Ye[0].width,Ye[0].height);for(let W=0,Q=Ye.length;W<Q;W++)ve=Ye[W],Ie?k&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Re,ve.data):t.texImage2D(i.TEXTURE_2D,W,Pe,ve.width,ve.height,0,ge,Re,ve.data);S.generateMipmaps=!1}else Ie?(Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,ne.width,ne.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Re,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ge,Re,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ie&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ye[0].width,Ye[0].height,ne.depth);for(let W=0,Q=Ye.length;W<Q;W++)if(ve=Ye[W],S.format!==cn)if(ge!==null)if(Ie){if(k)if(S.layerUpdates.size>0){const me=Il(ve.width,ve.height,S.format,S.type);for(const fe of S.layerUpdates){const Oe=ve.data.subarray(fe*me/ve.data.BYTES_PER_ELEMENT,(fe+1)*me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,fe,ve.width,ve.height,1,ge,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,ne.depth,ge,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Pe,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,ne.depth,ge,Re,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Pe,ve.width,ve.height,ne.depth,0,ge,Re,ve.data)}else{Ie&&Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,Ye[0].width,Ye[0].height);for(let W=0,Q=Ye.length;W<Q;W++)ve=Ye[W],S.format!==cn?ge!==null?Ie?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?k&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Re,ve.data):t.texImage2D(i.TEXTURE_2D,W,Pe,ve.width,ve.height,0,ge,Re,ve.data)}else if(S.isDataArrayTexture)if(Ie){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,ne.width,ne.height,ne.depth),k)if(S.layerUpdates.size>0){const W=Il(ne.width,ne.height,S.format,S.type);for(const Q of S.layerUpdates){const me=ne.data.subarray(Q*W/ne.data.BYTES_PER_ELEMENT,(Q+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ge,Re,me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(S.isData3DTexture)Ie?(Ke&&t.texStorage3D(i.TEXTURE_3D,oe,Pe,ne.width,ne.height,ne.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(S.isFramebufferTexture){if(Ke)if(Ie)t.texStorage2D(i.TEXTURE_2D,oe,Pe,ne.width,ne.height);else{let W=ne.width,Q=ne.height;for(let me=0;me<oe;me++)t.texImage2D(i.TEXTURE_2D,me,Pe,W,Q,0,ge,Re,null),W>>=1,Q>>=1}}else if(Ye.length>0){if(Ie&&Ke){const W=Ae(Ye[0]);t.texStorage2D(i.TEXTURE_2D,oe,Pe,W.width,W.height)}for(let W=0,Q=Ye.length;W<Q;W++)ve=Ye[W],Ie?k&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,Re,ve):t.texImage2D(i.TEXTURE_2D,W,Pe,ge,Re,ve);S.generateMipmaps=!1}else if(Ie){if(Ke){const W=Ae(ne);t.texStorage2D(i.TEXTURE_2D,oe,Pe,W.width,W.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ge,Re,ne);m(S)&&f(J),Se.__version=j.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ie(T,S,B){if(S.image.length!==6)return;const J=Je(T,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const j=n.get(ee);if(ee.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+B);const Se=je.getPrimaries(je.workingColorSpace),le=S.colorSpace===Gn?null:je.getPrimaries(S.colorSpace),de=S.colorSpace===Gn||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!He&&!ne?ge[Q]=_(S.image[Q],!0,s.maxCubemapSize):ge[Q]=ne?S.image[Q].image:S.image[Q],ge[Q]=it(S,ge[Q]);const Re=ge[0],Pe=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),Ye=M(S.internalFormat,Pe,ve,S.colorSpace),Ie=S.isVideoTexture!==!0,Ke=j.__version===void 0||J===!0,k=ee.dataReady;let oe=R(S,Re);Ue(i.TEXTURE_CUBE_MAP,S);let W;if(He){Ie&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ye,Re.width,Re.height);for(let Q=0;Q<6;Q++){W=ge[Q].mipmaps;for(let me=0;me<W.length;me++){const fe=W[me];S.format!==cn?Pe!==null?Ie?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Pe,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Pe,ve,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Ye,fe.width,fe.height,0,Pe,ve,fe.data)}}}else{if(W=S.mipmaps,Ie&&Ke){W.length>0&&oe++;const Q=Ae(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Pe,ve,ge[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,ge[Q].width,ge[Q].height,0,Pe,ve,ge[Q].data);for(let me=0;me<W.length;me++){const Oe=W[me].image[Q].image;Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Oe.width,Oe.height,Pe,ve,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Ye,Oe.width,Oe.height,0,Pe,ve,Oe.data)}}else{Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,ve,ge[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,Pe,ve,ge[Q]);for(let me=0;me<W.length;me++){const fe=W[me];Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Pe,ve,fe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Ye,Pe,ve,fe.image[Q])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),j.__version=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function _e(T,S,B,J,ee,j){const Se=r.convert(B.format,B.colorSpace),le=r.convert(B.type),de=M(B.internalFormat,Se,le,B.colorSpace),He=n.get(S),ne=n.get(B);if(ne.__renderTarget=S,!He.__hasExternalTextures){const ge=Math.max(1,S.width>>j),Re=Math.max(1,S.height>>j);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,de,ge,Re,S.depth,0,Se,le,null):t.texImage2D(ee,j,de,ge,Re,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ee,ne.__webglTexture,0,Ge(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ee,ne.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(T,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const J=S.depthTexture,ee=J&&J.isDepthTexture?J.type:null,j=b(S.stencilBuffer,ee),Se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Ge(S);Ve(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,j,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const J=S.textures;for(let ee=0;ee<J.length;ee++){const j=J[ee],Se=r.convert(j.format,j.colorSpace),le=r.convert(j.type),de=M(j.internalFormat,Se,le,j.colorSpace),He=Ge(S);B&&Ve(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,de,S.width,S.height):Ve(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const ee=J.__webglTexture,j=Ge(S);if(S.depthTexture.format===Ui)Ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(S.depthTexture.format===li)Ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(T){const S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=J}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");we(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),ae(S.__webglDepthbuffer[J],T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ae(S.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,S,B){const J=n.get(T);S!==void 0&&_e(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Le(T)}function lt(T){const S=T.texture,B=n.get(T),J=n.get(S);T.addEventListener("dispose",A);const ee=T.textures,j=T.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let de=0;de<S.mipmaps.length;de++)B.__webglFramebuffer[le][de]=i.createFramebuffer()}else B.__webglFramebuffer[le]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)B.__webglFramebuffer[le]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Se)for(let le=0,de=ee.length;le<de;le++){const He=n.get(ee[le]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ve(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const de=ee[le];B.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const He=r.convert(de.format,de.colorSpace),ne=r.convert(de.type),ge=M(de.internalFormat,He,ne,de.colorSpace,T.isXRRenderTarget===!0),Re=Ge(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,B.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)_e(B.__webglFramebuffer[le][de],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else _e(B.__webglFramebuffer[le],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,de=ee.length;le<de;le++){const He=ee[le],ne=n.get(He);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Ue(i.TEXTURE_2D,He),_e(B.__webglFramebuffer,T,He,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(He)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),Ue(le,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)_e(B.__webglFramebuffer[de],T,S,i.COLOR_ATTACHMENT0,le,de);else _e(B.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,le,0);m(S)&&f(le),t.unbindTexture()}T.depthBuffer&&Le(T)}function We(T){const S=T.textures;for(let B=0,J=S.length;B<J;B++){const ee=S[B];if(m(ee)){const j=w(T),Se=n.get(ee).__webglTexture;t.bindTexture(j,Se),f(j),t.unbindTexture()}}}const ht=[],D=[];function Ct(T){if(T.samples>0){if(Ve(T)===!1){const S=T.textures,B=T.width,J=T.height;let ee=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),le=S.length>1;if(le)for(let de=0;de<S.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<S.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const He=n.get(S[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,ee,i.NEAREST),c===!0&&(ht.length=0,D.length=0,ht.push(i.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ht.push(j),D.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<S.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const He=n.get(S[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ge(T){return Math.min(s.maxSamples,T.samples)}function Ve(T){const S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(T){const S=a.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function it(T,S){const B=T.colorSpace,J=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Vi&&B!==Gn&&(je.getTransfer(B)===rt?(J!==cn||ee!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ve}function ug(i,e){function t(n,s=Gn){let r;const a=je.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===cn)return i.RGBA;if(n===Uc)return i.LUMINANCE;if(n===Nc)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===mr)return i.RED;if(n===po)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===mo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Ra||n===Pa||n===ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Ia||n===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Ia)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Oa||n===Fa||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===$a||n===qa||n===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===Za||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Ka||n===Qa||n===eo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class dg extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(h,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],p=u.position.distanceTo(d.position),g=.02,v=.005;h.inputState.pinching&&p>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new St({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vg extends Wi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,p=null,g=null,v=null;const _=new gg,m=t.getContextAttributes();let f=null,w=null;const M=[],b=[],R=new ke;let L=null;const A=new en;A.viewport=new gt;const P=new en;P.viewport=new gt;const y=[A,P],x=new dg;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=M[q];return ie===void 0&&(ie=new Kr,M[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=M[q];return ie===void 0&&(ie=new Kr,M[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=M[q];return ie===void 0&&(ie=new Kr,M[q]=ie),ie.getHandSpace()};function O(q){const ie=b.indexOf(q.inputSource);if(ie===-1)return;const _e=M[ie];_e!==void 0&&(_e.update(q.inputSource,q.frame,h||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<M.length;q++){const ie=b[q];ie!==null&&(b[q]=null,M[q].disconnect(ie))}C=null,F=null,_.reset(),e.setRenderTarget(f),g=null,p=null,d=null,s=null,w=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Zt(g.framebufferWidth,g.framebufferHeight,{format:cn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,_e=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?li:Ui,_e=m.stencil?oi:ai);const we={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(we),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Zt(p.textureWidth,p.textureHeight,{format:cn,type:kn,depthTexture:new bo(p.textureWidth,p.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let ie=0;ie<q.removed.length;ie++){const _e=q.removed[ie],ae=b.indexOf(_e);ae>=0&&(b[ae]=null,M[ae].disconnect(_e))}for(let ie=0;ie<q.added.length;ie++){const _e=q.added[ie];let ae=b.indexOf(_e);if(ae===-1){for(let Le=0;Le<M.length;Le++)if(Le>=b.length){b.push(_e),ae=Le;break}else if(b[Le]===null){b[Le]=_e,ae=Le;break}if(ae===-1)break}const we=M[ae];we&&we.connect(_e)}}const $=new N,K=new N;function V(q,ie,_e){$.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const ae=$.distanceTo(K),we=ie.projectionMatrix.elements,Le=_e.projectionMatrix.elements,De=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),We=(we[9]+1)/we[5],ht=(we[9]-1)/we[5],D=(we[8]-1)/we[0],Ct=(Le[8]+1)/Le[0],Ge=De*D,Ve=De*Ct,Ce=ae/(-D+Ct),it=Ce*-D;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(it),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=De+Ce,T=lt+Ce,S=Ge-it,B=Ve+(ae-it),J=We*lt/T*Ae,ee=ht*lt/T*Ae;q.projectionMatrix.makePerspective(S,B,J,ee,Ae,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,_e=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),x.near=P.near=A.near=ie,x.far=P.far=A.far=_e,(C!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,F=x.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,x.layers.mask=A.layers.mask|P.layers.mask;const ae=q.parent,we=x.cameras;te(x,ae);for(let Le=0;Le<we.length;Le++)te(we[Le],ae);we.length===2?V(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),ue(q,x,ae)};function ue(q,ie,_e){_e===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xe=null;function Ue(q,ie){if(u=ie.getViewerPose(h||a),v=ie,u!==null){const _e=u.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let ae=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Le=0;Le<_e.length;Le++){const De=_e[Le];let lt=null;if(g!==null)lt=g.getViewport(De);else{const ht=d.getViewSubImage(p,De);lt=ht.viewport,Le===0&&(e.setRenderTargetTextures(w,ht.colorTexture,p.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(w))}let We=y[Le];We===void 0&&(We=new en,We.layers.enable(Le),We.viewport=new gt,y[Le]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),Le===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(We)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){const Le=d.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,s.renderState)}}for(let _e=0;_e<M.length;_e++){const ae=b[_e],we=M[_e];ae!==null&&we!==void 0&&we.update(ae,ie,h||a)}xe&&xe(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Je=new jc;Je.setAnimationLoop(Ue),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const Jn=new un,_g=new Ze;function xg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,w,M):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),M=w.envMap,b=w.envMapRotation;M&&(m.envMap.value=M,Jn.copy(b),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Jn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const b=M.program;n.uniformBlockBinding(w,b)}function h(w,M){let b=s[w.id];b===void 0&&(v(w),b=u(w),s[w.id]=b,w.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(w,R);const L=e.render.frame;r[w.id]!==L&&(p(w),r[w.id]=L)}function u(w){const M=d();w.__bindingPointIndex=M;const b=i.createBuffer(),R=w.__size,L=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const M=s[w.id],b=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let L=0,A=b.length;L<A;L++){const P=Array.isArray(b[L])?b[L]:[b[L]];for(let y=0,x=P.length;y<x;y++){const C=P[y];if(g(C,L,y,R)===!0){const F=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let Z=0;Z<O.length;Z++){const $=O[Z],K=_($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,F+Y,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,M,b,R){const L=w.value,A=M+"_"+b;if(R[A]===void 0)return typeof L=="number"||typeof L=="boolean"?R[A]=L:R[A]=L.clone(),!0;{const P=R[A];if(typeof L=="number"||typeof L=="boolean"){if(P!==L)return R[A]=L,!0}else if(P.equals(L)===!1)return P.copy(L),!0}return!1}function v(w){const M=w.uniforms;let b=0;const R=16;for(let A=0,P=M.length;A<P;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,C=y.length;x<C;x++){const F=y[x],O=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,Z=O.length;Y<Z;Y++){const $=O[Y],K=_($),V=b%R,te=V%K.boundary,ue=V+te;b+=te,ue!==0&&R-ue<K.storage&&(b+=R-ue),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=K.storage}}}const L=b%R;return L>0&&(b+=R-L),w.__size=b,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:h,dispose:f}}class Mg{constructor(e={}){const{canvas:t=cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=Vn,this.toneMappingExposure=1;const b=this;let R=!1,L=0,A=0,P=null,y=-1,x=null;const C=new gt,F=new gt;let O=null;const Y=new he(0);let Z=0,$=t.width,K=t.height,V=1,te=null,ue=null;const xe=new gt(0,0,$,K),Ue=new gt(0,0,$,K);let Je=!1;const q=new So;let ie=!1,_e=!1;const ae=new Ze,we=new Ze,Le=new N,De=new gt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ht(){return P===null?V:1}let D=n;function Ct(E,I){return t.getContext(E,I)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oo}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const I="webgl2";if(D=Ct(I,E),D===null)throw Ct(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ge,Ve,Ce,it,Ae,T,S,B,J,ee,j,Se,le,de,He,ne,ge,Re,Pe,ve,Ye,Ie,Ke,k;function oe(){Ge=new Tp(D),Ge.init(),Ie=new ug(D,Ge),Ve=new Sp(D,Ge,e,Ie),Ce=new lg(D,Ge),Ve.reverseDepthBuffer&&p&&Ce.buffers.depth.setReversed(!0),it=new Lp(D),Ae=new $m,T=new hg(D,Ge,Ce,Ae,Ve,Ie,it),S=new bp(b),B=new Ep(b),J=new Uu(D),Ke=new _p(D,J),ee=new Ap(D,J,it,Ke),j=new Pp(D,ee,J,it),Pe=new Rp(D,Ve,T),ne=new Mp(Ae),Se=new Ym(b,S,B,Ge,Ve,Ke,ne),le=new xg(b,Ae),de=new jm,He=new tg(Ge),Re=new vp(b,S,B,Ce,j,g,c),ge=new ag(b,j,Ve),k=new Sg(D,it,Ve,Ce),ve=new xp(D,Ge,it),Ye=new Cp(D,Ge,it),it.programs=Se.programs,b.capabilities=Ve,b.extensions=Ge,b.properties=Ae,b.renderLists=de,b.shadowMap=ge,b.state=Ce,b.info=it}oe();const W=new vg(b,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize($,K,!1))},this.getSize=function(E){return E.set($,K)},this.setSize=function(E,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,K=I,t.width=Math.floor(E*V),t.height=Math.floor(I*V),z===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set($*V,K*V).floor()},this.setDrawingBufferSize=function(E,I,z){$=E,K=I,V=z,t.width=Math.floor(E*z),t.height=Math.floor(I*z),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,I,z,G){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,I,z,G),Ce.viewport(C.copy(xe).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,I,z,G){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,I,z,G),Ce.scissor(F.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){Ce.setScissorTest(Je=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,I=!0,z=!0){let G=0;if(E){let U=!1;if(P!==null){const se=P.texture.format;U=se===go||se===mo||se===po}if(U){const se=P.texture.type,pe=se===kn||se===ai||se===gs||se===oi||se===uo||se===fo,Me=Re.getClearColor(),be=Re.getClearAlpha(),Ne=Me.r,Fe=Me.g,ye=Me.b;pe?(v[0]=Ne,v[1]=Fe,v[2]=ye,v[3]=be,D.clearBufferuiv(D.COLOR,0,v)):(_[0]=Ne,_[1]=Fe,_[2]=ye,_[3]=be,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}I&&(G|=D.DEPTH_BUFFER_BIT),z&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),de.dispose(),He.dispose(),Ae.dispose(),S.dispose(),B.dispose(),j.dispose(),Ke.dispose(),k.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",Lo),W.removeEventListener("sessionend",Ro),Xn.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=it.autoReset,I=ge.enabled,z=ge.autoUpdate,G=ge.needsUpdate,U=ge.type;oe(),it.autoReset=E,ge.enabled=I,ge.autoUpdate=z,ge.needsUpdate=G,ge.type=U}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const I=E.target;I.removeEventListener("dispose",Oe),pt(I)}function pt(E){Lt(E),Ae.remove(E)}function Lt(E){const I=Ae.get(E).programs;I!==void 0&&(I.forEach(function(z){Se.releaseProgram(z)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,z,G,U,se){I===null&&(I=lt);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Me=ph(E,I,z,G,U);Ce.setMaterial(G,pe);let be=z.index,Ne=1;if(G.wireframe===!0){if(be=ee.getWireframeAttribute(z),be===void 0)return;Ne=2}const Fe=z.drawRange,ye=z.attributes.position;let Qe=Fe.start*Ne,ct=(Fe.start+Fe.count)*Ne;se!==null&&(Qe=Math.max(Qe,se.start*Ne),ct=Math.min(ct,(se.start+se.count)*Ne)),be!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,be.count)):ye!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,ye.count));const ut=ct-Qe;if(ut<0||ut===1/0)return;Ke.setup(U,G,Me,z,be);let Bt,tt=ve;if(be!==null&&(Bt=J.get(be),tt=Ye,tt.setIndex(Bt)),U.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*ht()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(U.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),Ce.setLineWidth(Ee*ht()),U.isLineSegments?tt.setMode(D.LINES):U.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else U.isPoints?tt.setMode(D.POINTS):U.isSprite&&tt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,xn=U._multiDrawCounts,nt=U._multiDrawCount,nn=be?J.get(be).bytesPerElement:1,ui=Ae.get(G).currentProgram.getUniforms();for(let Yt=0;Yt<nt;Yt++)ui.setValue(D,"_gl_DrawID",Yt),tt.render(Ee[Yt]/nn,xn[Yt])}else if(U.isInstancedMesh)tt.renderInstances(Qe,ut,U.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,xn=Math.min(z.instanceCount,Ee);tt.renderInstances(Qe,ut,xn)}else tt.render(Qe,ut)};function st(E,I,z){E.transparent===!0&&E.side===Et&&E.forceSinglePass===!1?(E.side=Wt,E.needsUpdate=!0,ys(E,I,z),E.side=Pn,E.needsUpdate=!0,ys(E,I,z),E.side=Et):ys(E,I,z)}this.compile=function(E,I,z=null){z===null&&(z=E),f=He.get(z),f.init(I),M.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),E!==z&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const G=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Me=se[pe];st(Me,z,U),G.add(Me)}else st(se,z,U),G.add(se)}),M.pop(),f=null,G},this.compileAsync=function(E,I,z=null){const G=this.compile(E,I,z);return new Promise(U=>{function se(){if(G.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){U(E);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let tn=null;function _n(E){tn&&tn(E)}function Lo(){Xn.stop()}function Ro(){Xn.start()}const Xn=new jc;Xn.setAnimationLoop(_n),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(E){tn=E,W.setAnimationLoop(E),E===null?Xn.stop():Xn.start()},W.addEventListener("sessionstart",Lo),W.addEventListener("sessionend",Ro),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,I,P),f=He.get(E,M.length),f.init(I),M.push(f),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(we),_e=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,_e),m=de.get(E,w.length),m.init(),w.push(m),W.enabled===!0&&W.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&wr(se,I,-1/0,b.sortObjects)}wr(E,I,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(te,ue),We=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,We&&Re.addToRenderList(m,E),this.info.render.frame++,ie===!0&&ne.beginShadows();const z=f.state.shadowsArray;ge.render(z,E,I),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let pe=0,Me=se.length;pe<Me;pe++){const be=se[pe];ko(G,U,E,be)}We&&Re.render(E);for(let pe=0,Me=se.length;pe<Me;pe++){const be=se[pe];Po(m,E,be,be.viewport)}}else U.length>0&&ko(G,U,E,I),We&&Re.render(E),Po(m,E,I);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(b,E,I),Ke.resetDefaultState(),y=-1,x=null,M.pop(),M.length>0?(f=M[M.length-1],ie===!0&&ne.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function wr(E,I,z,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){G&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const pe=j.update(E),Me=E.material;Me.visible&&m.push(E,pe,Me,z,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const pe=j.update(E),Me=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(Me)){const be=pe.groups;for(let Ne=0,Fe=be.length;Ne<Fe;Ne++){const ye=be[Ne],Qe=Me[ye.materialIndex];Qe&&Qe.visible&&m.push(E,pe,Qe,z,De.z,ye)}}else Me.visible&&m.push(E,pe,Me,z,De.z,null)}}const se=E.children;for(let pe=0,Me=se.length;pe<Me;pe++)wr(se[pe],I,z,G)}function Po(E,I,z,G){const U=E.opaque,se=E.transmissive,pe=E.transparent;f.setupLightsView(z),ie===!0&&ne.setGlobalState(b.clippingPlanes,z),G&&Ce.viewport(C.copy(G)),U.length>0&&bs(U,I,z),se.length>0&&bs(se,I,z),pe.length>0&&bs(pe,I,z),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ko(E,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Zt(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?hn:kn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const se=f.state.transmissionRenderTarget[G.id],pe=G.viewport||C;se.setSize(pe.z,pe.w);const Me=b.getRenderTarget();b.setRenderTarget(se),b.getClearColor(Y),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),We&&Re.render(z);const be=b.toneMapping;b.toneMapping=Vn;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ie===!0&&ne.setGlobalState(b.clippingPlanes,G),bs(E,z,G),T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ye=0,Qe=I.length;ye<Qe;ye++){const ct=I[ye],ut=ct.object,Bt=ct.geometry,tt=ct.material,Ee=ct.group;if(tt.side===Et&&ut.layers.test(G.layers)){const xn=tt.side;tt.side=Wt,tt.needsUpdate=!0,Do(ut,z,G,Bt,tt,Ee),tt.side=xn,tt.needsUpdate=!0,Fe=!0}}Fe===!0&&(T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se))}b.setRenderTarget(Me),b.setClearColor(Y,Z),Ne!==void 0&&(G.viewport=Ne),b.toneMapping=be}function bs(E,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=E.length;U<se;U++){const pe=E[U],Me=pe.object,be=pe.geometry,Ne=G===null?pe.material:G,Fe=pe.group;Me.layers.test(z.layers)&&Do(Me,I,z,be,Ne,Fe)}}function Do(E,I,z,G,U,se){E.onBeforeRender(b,I,z,G,U,se),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(b,I,z,G,E,se),U.transparent===!0&&U.side===Et&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,b.renderBufferDirect(z,I,G,U,E,se),U.side=Pn,U.needsUpdate=!0,b.renderBufferDirect(z,I,G,U,E,se),U.side=Et):b.renderBufferDirect(z,I,G,U,E,se),E.onAfterRender(b,I,z,G,U,se)}function ys(E,I,z){I.isScene!==!0&&(I=lt);const G=Ae.get(E),U=f.state.lights,se=f.state.shadowsArray,pe=U.state.version,Me=Se.getParameters(E,U.state,se,I,z),be=Se.getProgramCacheKey(Me);let Ne=G.programs;G.environment=E.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Oe),Ne=new Map,G.programs=Ne);let Fe=Ne.get(be);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===pe)return Uo(E,Me),Fe}else Me.uniforms=Se.getUniforms(E),E.onBeforeCompile(Me,b),Fe=Se.acquireProgram(Me,be),Ne.set(be,Fe),G.uniforms=Me.uniforms;const ye=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ne.uniform),Uo(E,Me),G.needsLights=gh(E),G.lightsStateVersion=pe,G.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function Io(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=lr.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Uo(E,I){const z=Ae.get(E);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function ph(E,I,z,G,U){I.isScene!==!0&&(I=lt),T.resetTextureUnits();const se=I.fog,pe=G.isMeshStandardMaterial?I.environment:null,Me=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vi,be=(G.isMeshStandardMaterial?B:S).get(G.envMap||pe),Ne=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color;let ut=Vn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ut=b.toneMapping);const Bt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=Bt!==void 0?Bt.length:0,Ee=Ae.get(G),xn=f.state.lights;if(ie===!0&&(_e===!0||E!==x)){const Jt=E===x&&G.id===y;ne.setState(G,E,Jt)}let nt=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==xn.state.version||Ee.outputColorSpace!==Me||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==be||G.fog===!0&&Ee.fog!==se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==Fe||Ee.morphTargets!==ye||Ee.morphNormals!==Qe||Ee.morphColors!==ct||Ee.toneMapping!==ut||Ee.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Ee.__version=G.version);let nn=Ee.currentProgram;nt===!0&&(nn=ys(G,I,U));let ui=!1,Yt=!1,qi=!1;const dt=nn.getUniforms(),dn=Ee.uniforms;if(Ce.useProgram(nn.program)&&(ui=!0,Yt=!0,qi=!0),G.id!==y&&(y=G.id,Yt=!0),ui||x!==E){Ce.buffers.depth.getReversed()?(ae.copy(E.projectionMatrix),uu(ae),du(ae),dt.setValue(D,"projectionMatrix",ae)):dt.setValue(D,"projectionMatrix",E.projectionMatrix),dt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Dn=dt.map.cameraPosition;Dn!==void 0&&Dn.setValue(D,Le.setFromMatrixPosition(E.matrixWorld)),Ve.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Yt=!0,qi=!0)}if(U.isSkinnedMesh){dt.setOptional(D,U,"bindMatrix"),dt.setOptional(D,U,"bindMatrixInverse");const Jt=U.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),dt.setValue(D,"boneTexture",Jt.boneTexture,T))}U.isBatchedMesh&&(dt.setOptional(D,U,"batchingTexture"),dt.setValue(D,"batchingTexture",U._matricesTexture,T),dt.setOptional(D,U,"batchingIdTexture"),dt.setValue(D,"batchingIdTexture",U._indirectTexture,T),dt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(D,"batchingColorTexture",U._colorsTexture,T));const ji=z.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Pe.update(U,z,nn),(Yt||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,dt.setValue(D,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dn.envMap.value=be,dn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(dn.envMapIntensity.value=I.environmentIntensity),Yt&&(dt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Ee.needsLights&&mh(dn,qi),se&&G.fog===!0&&le.refreshFogUniforms(dn,se),le.refreshMaterialUniforms(dn,G,V,K,f.state.transmissionRenderTarget[E.id]),lr.upload(D,Io(Ee),dn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lr.upload(D,Io(Ee),dn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(D,"center",U.center),dt.setValue(D,"modelViewMatrix",U.modelViewMatrix),dt.setValue(D,"normalMatrix",U.normalMatrix),dt.setValue(D,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Jt=G.uniformsGroups;for(let Dn=0,In=Jt.length;Dn<In;Dn++){const No=Jt[Dn];k.update(No,nn),k.bind(No,nn)}}return nn}function mh(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function gh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,I,z){Ae.get(E.texture).__webglTexture=I,Ae.get(E.depthTexture).__webglTexture=z;const G=Ae.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const z=Ae.get(E);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,z=0){P=E,L=I,A=z;let G=!0,U=null,se=!1,pe=!1;if(E){const be=Ae.get(E);if(be.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(be.__hasExternalTextures)T.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(be.__boundDepthTexture!==ye){if(ye!==null&&Ae.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Fe=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[I])?U=Fe[I][z]:U=Fe[I],se=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?U=Ae.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[z]:U=Fe,C.copy(E.viewport),F.copy(E.scissor),O=E.scissorTest}else C.copy(xe).multiplyScalar(V).floor(),F.copy(Ue).multiplyScalar(V).floor(),O=Je;if(Ce.bindFramebuffer(D.FRAMEBUFFER,U)&&G&&Ce.drawBuffers(E,U),Ce.viewport(C),Ce.scissor(F),Ce.setScissorTest(O),se){const be=Ae.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,be.__webglTexture,z)}else if(pe){const be=Ae.get(E.texture),Ne=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,z||0,Ne)}y=-1},this.readRenderTargetPixels=function(E,I,z,G,U,se,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Ce.bindFramebuffer(D.FRAMEBUFFER,Me);try{const be=E.texture,Ne=be.format,Fe=be.type;if(!Ve.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&z>=0&&z<=E.height-U&&D.readPixels(I,z,G,U,Ie.convert(Ne),Ie.convert(Fe),se)}finally{const be=P!==null?Ae.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,I,z,G,U,se,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const be=E.texture,Ne=be.format,Fe=be.type;if(!Ve.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-G&&z>=0&&z<=E.height-U){Ce.bindFramebuffer(D.FRAMEBUFFER,Me);const ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(I,z,G,U,Ie.convert(Ne),Ie.convert(Fe),0);const Qe=P!==null?Ae.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Qe);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hu(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(ye),D.deleteSync(ct),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,z=0){E.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-z),U=Math.floor(E.image.width*G),se=Math.floor(E.image.height*G),pe=I!==null?I.x:0,Me=I!==null?I.y:0;T.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,pe,Me,U,se),Ce.unbindTexture()},this.copyTextureToTexture=function(E,I,z=null,G=null,U=0){E.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let se,pe,Me,be,Ne,Fe,ye,Qe,ct;const ut=E.isCompressedTexture?E.mipmaps[U]:E.image;z!==null?(se=z.max.x-z.min.x,pe=z.max.y-z.min.y,Me=z.isBox3?z.max.z-z.min.z:1,be=z.min.x,Ne=z.min.y,Fe=z.isBox3?z.min.z:0):(se=ut.width,pe=ut.height,Me=ut.depth||1,be=0,Ne=0,Fe=0),G!==null?(ye=G.x,Qe=G.y,ct=G.z):(ye=0,Qe=0,ct=0);const Bt=Ie.convert(I.format),tt=Ie.convert(I.type);let Ee;I.isData3DTexture?(T.setTexture3D(I,0),Ee=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),Ee=D.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const xn=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nn=D.getParameter(D.UNPACK_SKIP_PIXELS),ui=D.getParameter(D.UNPACK_SKIP_ROWS),Yt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe);const qi=E.isDataArrayTexture||E.isData3DTexture,dt=I.isDataArrayTexture||I.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const dn=Ae.get(E),ji=Ae.get(I),Jt=Ae.get(dn.__renderTarget),Dn=Ae.get(ji.__renderTarget);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let In=0;In<Me;In++)qi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(E).__webglTexture,U,Fe+In),E.isDepthTexture?(dt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(I).__webglTexture,U,ct+In),D.blitFramebuffer(be,Ne,se,pe,ye,Qe,se,pe,D.DEPTH_BUFFER_BIT,D.NEAREST)):dt?D.copyTexSubImage3D(Ee,U,ye,Qe,ct+In,be,Ne,se,pe):D.copyTexSubImage2D(Ee,U,ye,Qe,ct+In,be,Ne,se,pe);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ee,U,ye,Qe,ct,se,pe,Me,Bt,tt,ut.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,U,ye,Qe,ct,se,pe,Me,Bt,ut.data):D.texSubImage3D(Ee,U,ye,Qe,ct,se,pe,Me,Bt,tt,ut):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,ye,Qe,se,pe,Bt,tt,ut.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,ye,Qe,ut.width,ut.height,Bt,ut.data):D.texSubImage2D(D.TEXTURE_2D,U,ye,Qe,se,pe,Bt,tt,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,xn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ui),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),U===0&&I.generateMipmaps&&D.generateMipmap(Ee),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,I,z=null,G=null,U=0){return E.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,z,G,U)},this.initRenderTarget=function(E){Ae.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){L=0,A=0,P=null,Ce.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class ds{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new ds(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bg extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class eh extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,c,h=et,u=et,d,p){super(null,a,o,c,h,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new Ze,Nl=new Ze,Xs=[],Ol=new ci,yg=new Ze,es=new qe,ts=new Yi;class ns extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Ol.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Ol)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),ts.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),Nl.multiplyMatrices(n,Ti),es.matrixWorld=Nl,es.raycast(e,Xs);for(let a=0,o=Xs.length;a<o;a++){const c=Xs[a];c.instanceId=r,c.object=this,t.push(c)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eh(new Float32Array(s*this.count),s,this.count,mr,ln));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class no extends Gt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dr=new N,fr=new N,Fl=new Ze,is=new _o,Ys=new Yi,Qr=new N,Bl=new N;class wg extends wt{constructor(e=new Xt,t=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)dr.fromBufferAttribute(t,s-1),fr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=dr.distanceTo(fr);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;Fl.copy(s).invert(),is.copy(e.ray).applyMatrix4(Fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const g=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let _=g,m=v-1;_<m;_+=h){const f=u.getX(_),w=u.getX(_+1),M=$s(this,e,is,c,f,w);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(g),f=$s(this,e,is,c,_,m);f&&t.push(f)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let _=g,m=v-1;_<m;_+=h){const f=$s(this,e,is,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=$s(this,e,is,c,v-1,g);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $s(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(dr.fromBufferAttribute(a,s),fr.fromBufferAttribute(a,r),t.distanceSqToSegment(dr,fr,Qr,Bl)>n)return;Qr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qr);if(!(c<e.near||c>e.far))return{distance:c,point:Bl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Sr extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],h=new N,u=new ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const g=n+d/t*s;h.x=e*Math.cos(g),h.y=e*Math.sin(g),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(o,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yo extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const u=[],d=new N,p=new N,g=[],v=[],_=[],m=[];for(let f=0;f<=n;f++){const w=[],M=f/n;let b=0;f===0&&a===0?b=.5/t:f===n&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const L=R/t;d.x=-e*Math.cos(s+L*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+L*r)*Math.sin(a+M*o),v.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),m.push(L+b,1-M),w.push(h++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const M=u[f][w+1],b=u[f][w],R=u[f+1][w],L=u[f+1][w+1];(f!==0||a>0)&&g.push(M,b,L),(f!==n-1||c<Math.PI)&&g.push(b,R,L)}this.setIndex(g),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eg extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Hn extends Gt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tg extends Gt{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class io extends Gt{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const zl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ag{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=h.length;d<p;d+=2){const g=h[d],v=h[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null}}}const Cg=new Ag;class wo{constructor(e){this.manager=e!==void 0?e:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Lg extends wo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=zl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=_s("img");function c(){u(),zl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Mr extends wo{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,a=new Lg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Eo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Rg extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ea=new Ze,Hl=new N,Gl=new N;class Pg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kg extends Pg{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dg extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ig extends Eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class th{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vl(){return performance.now()}const Wl=new Ze;class Ug{constructor(e,t,n=0,s=1/0){this.ray=new _o(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(e,t=!0,n=[]){return so(e,this,n,t),n.sort(Xl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)so(e[s],this,n,t);return n.sort(Xl),n}}function Xl(i,e){return i.distance-e.distance}function so(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)so(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);const H=16,Kn=63,X={ocean:0,plains:1,desert:2,windswept_hills:3,forest:4,taiga:5,swamp:6,river:7,frozen_ocean:10,frozen_river:11,snowy_plains:12,snowy_mountains:13,mushroom_fields:14,beach:16,jungle:21,sparse_jungle:23,deep_ocean:24,stony_shore:25,snowy_beach:26,birch_forest:27,dark_forest:29,snowy_taiga:30,old_growth_pine_taiga:32,windswept_forest:34,savanna:35,savanna_plateau:36,badlands:37,wooded_badlands:38,wooded_badlands_plateau:39,eroded_badlands:40,warm_ocean:44,lukewarm_ocean:45,cold_ocean:46,deep_lukewarm_ocean:48,deep_cold_ocean:49,deep_frozen_ocean:50,sunflower_plains:129,flower_forest:132,ice_spikes:140,old_growth_birch_forest:155,old_growth_spruce_taiga:160,windswept_savanna:163,windswept_gravelly_hills:131,bamboo_jungle:168,meadow:177,grove:178,snowy_slopes:179,frozen_peaks:180,jagged_peaks:181,stony_peaks:182,cherry_grove:183,pale_garden:184,mangrove_swamp:175};var Xe=(i=>(i[i.Oak=0]="Oak",i[i.Birch=1]="Birch",i[i.Spruce=2]="Spruce",i[i.Jungle=3]="Jungle",i[i.Acacia=4]="Acacia",i[i.DarkOak=5]="DarkOak",i[i.Cherry=6]="Cherry",i[i.Mangrove=7]="Mangrove",i[i.Cactus=8]="Cactus",i))(Xe||{});let cr,hr;var l=(i=>(i[i.Air=0]="Air",i[i.Stone=1]="Stone",i[i.Dirt=2]="Dirt",i[i.Grass=3]="Grass",i[i.Sand=4]="Sand",i[i.Gravel=5]="Gravel",i[i.Water=6]="Water",i[i.Ice=7]="Ice",i[i.Snow=8]="Snow",i[i.SnowBlock=9]="SnowBlock",i[i.Clay=10]="Clay",i[i.Bedrock=11]="Bedrock",i[i.OakLog=12]="OakLog",i[i.BirchLog=13]="BirchLog",i[i.SpruceLog=14]="SpruceLog",i[i.JungleLog=15]="JungleLog",i[i.AcaciaLog=16]="AcaciaLog",i[i.DarkOakLog=17]="DarkOakLog",i[i.CherryLog=18]="CherryLog",i[i.MangroveLog=19]="MangroveLog",i[i.OakLeaves=20]="OakLeaves",i[i.BirchLeaves=21]="BirchLeaves",i[i.SpruceLeaves=22]="SpruceLeaves",i[i.JungleLeaves=23]="JungleLeaves",i[i.AcaciaLeaves=24]="AcaciaLeaves",i[i.DarkOakLeaves=25]="DarkOakLeaves",i[i.CherryLeaves=26]="CherryLeaves",i[i.MangroveLeaves=27]="MangroveLeaves",i[i.Cactus=28]="Cactus",i[i.CactusTop=29]="CactusTop",i[i.DeadBush=30]="DeadBush",i[i.TallGrass=31]="TallGrass",i[i.Fern=32]="Fern",i[i.Podzol=33]="Podzol",i[i.Mycelium=34]="Mycelium",i[i.PackedIce=35]="PackedIce",i[i.BlueIce=36]="BlueIce",i[i.RedSand=37]="RedSand",i[i.Terracotta=38]="Terracotta",i[i.Coral=39]="Coral",i[i.Seagrass=40]="Seagrass",i[i.OakSapling=41]="OakSapling",i[i.BirchSapling=42]="BirchSapling",i[i.SpruceSapling=43]="SpruceSapling",i[i.JungleSapling=44]="JungleSapling",i[i.AcaciaSapling=45]="AcaciaSapling",i[i.DarkOakSapling=46]="DarkOakSapling",i[i.CherrySapling=47]="CherrySapling",i[i.MangroveSapling=48]="MangroveSapling",i[i.OakPlanks=49]="OakPlanks",i[i.BirchPlanks=50]="BirchPlanks",i[i.SprucePlanks=51]="SprucePlanks",i[i.JunglePlanks=52]="JunglePlanks",i[i.AcaciaPlanks=53]="AcaciaPlanks",i[i.DarkOakPlanks=54]="DarkOakPlanks",i[i.CherryPlanks=55]="CherryPlanks",i[i.MangrovePlanks=56]="MangrovePlanks",i[i.StrippedOakLog=57]="StrippedOakLog",i[i.StrippedBirchLog=58]="StrippedBirchLog",i[i.StrippedSpruceLog=59]="StrippedSpruceLog",i[i.StrippedJungleLog=60]="StrippedJungleLog",i[i.StrippedAcaciaLog=61]="StrippedAcaciaLog",i[i.StrippedDarkOakLog=62]="StrippedDarkOakLog",i[i.StrippedCherryLog=63]="StrippedCherryLog",i[i.StrippedMangroveLog=64]="StrippedMangroveLog",i[i.OakDoor=65]="OakDoor",i[i.BirchDoor=66]="BirchDoor",i[i.SpruceDoor=67]="SpruceDoor",i[i.JungleDoor=68]="JungleDoor",i[i.AcaciaDoor=69]="AcaciaDoor",i[i.DarkOakDoor=70]="DarkOakDoor",i[i.CherryDoor=71]="CherryDoor",i[i.MangroveDoor=72]="MangroveDoor",i[i.OakTrapdoor=73]="OakTrapdoor",i[i.BirchTrapdoor=74]="BirchTrapdoor",i[i.SpruceTrapdoor=75]="SpruceTrapdoor",i[i.JungleTrapdoor=76]="JungleTrapdoor",i[i.AcaciaTrapdoor=77]="AcaciaTrapdoor",i[i.DarkOakTrapdoor=78]="DarkOakTrapdoor",i[i.CherryTrapdoor=79]="CherryTrapdoor",i[i.MangroveTrapdoor=80]="MangroveTrapdoor",i))(l||{});cr={0:12,1:13,2:14,3:15,4:16,5:17,6:18,7:19,8:28};hr={0:20,1:21,2:22,3:23,4:24,5:25,6:26,7:27,8:0};const Ng={20:41,21:42,22:43,23:44,24:45,25:46,26:47,27:48},Og={20:.05,21:.05,22:.05,23:.025,24:.05,25:.05,26:.05,27:.05},It="/sound-effects",ta={"step/grass":6,"step/stone":6,"step/wood":6,"step/sand":5,"step/gravel":4,"step/snow":4,"step/cloth":4,"step/coral":6,"step/wet_grass":6,"dig/grass":4,"dig/stone":4,"dig/wood":4,"dig/sand":4,"dig/gravel":4,"dig/snow":4,"dig/cloth":4,"dig/coral":4,"dig/wet_grass":4,"random/pop":1,"random/click":1,"random/break":1,"random/orb":1,"random/splash":1,"liquid/splash":1,"liquid/splash2":1,"liquid/swim":18,"liquid/water":1,"damage/fallbig":1,"damage/fallsmall":1},Fg={[l.Grass]:"grass",[l.Dirt]:"grass",[l.Podzol]:"grass",[l.Mycelium]:"grass",[l.TallGrass]:"grass",[l.Fern]:"grass",[l.DeadBush]:"grass",[l.Stone]:"stone",[l.Terracotta]:"stone",[l.Ice]:"stone",[l.PackedIce]:"stone",[l.BlueIce]:"stone",[l.Clay]:"stone",[l.Bedrock]:"stone",[l.OakLog]:"wood",[l.BirchLog]:"wood",[l.SpruceLog]:"wood",[l.JungleLog]:"wood",[l.AcaciaLog]:"wood",[l.DarkOakLog]:"wood",[l.CherryLog]:"wood",[l.MangroveLog]:"wood",[l.Sand]:"sand",[l.RedSand]:"sand",[l.Gravel]:"gravel",[l.Snow]:"snow",[l.SnowBlock]:"snow",[l.OakLeaves]:"grass",[l.BirchLeaves]:"grass",[l.SpruceLeaves]:"grass",[l.JungleLeaves]:"grass",[l.AcaciaLeaves]:"grass",[l.DarkOakLeaves]:"grass",[l.CherryLeaves]:"grass",[l.MangroveLeaves]:"grass",[l.OakSapling]:"grass",[l.BirchSapling]:"grass",[l.SpruceSapling]:"grass",[l.JungleSapling]:"grass",[l.AcaciaSapling]:"grass",[l.DarkOakSapling]:"grass",[l.CherrySapling]:"grass",[l.MangroveSapling]:"grass",[l.Cactus]:"cloth",[l.CactusTop]:"cloth",[l.Coral]:"coral",[l.Seagrass]:"wet_grass"},fn={step:.3,dig:.5,place:.6,break:.7,pickup:.5,splash:.6,swim:.3,ui:.4,fall:.5},na={step:280,dig:200,swim:400};class Pi{static instance;audioCache=new Map;lastPlayTime=new Map;masterVolume=1;enabled=!0;audioContext=null;gainNode=null;constructor(){this.initAudioContext()}static getInstance(){return Pi.instance||(Pi.instance=new Pi),Pi.instance}initAudioContext(){const e=()=>{this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination),this.gainNode.gain.value=this.masterVolume),this.audioContext.state==="suspended"&&this.audioContext.resume()};document.addEventListener("click",e,{once:!1}),document.addEventListener("keydown",e,{once:!1}),document.addEventListener("mousedown",e,{once:!1})}setMasterVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.gainNode&&(this.gainNode.gain.value=this.masterVolume)}setEnabled(e){this.enabled=e}getSoundCategory(e){return Fg[e]||"stone"}buildSoundPath(e,t){if(e.startsWith("liquid/swim"))return`${It}/liquid/swim${t}.ogg`;if(e==="random/pop"||e==="random/click"||e==="random/break"||e==="random/orb"||e==="random/splash"||e==="liquid/water"){const r=e.split("/")[1];return`${It}/${e.split("/")[0]}/${r}.ogg`}if(e==="liquid/splash")return`${It}/liquid/splash.ogg`;if(e==="liquid/splash2")return`${It}/liquid/splash2.ogg`;if(e==="damage/fallbig"||e==="damage/fallsmall")return`${It}/${e}.ogg`;const[n,s]=e.split("/");return`${It}/${n}/${s}${t}.ogg`}getAudio(e){let t=this.audioCache.get(e);if(!t){t=[];for(let n=0;n<3;n++){const s=new Audio(e);s.preload="auto",t.push(s)}this.audioCache.set(e,t)}for(const n of t)if(n.paused||n.ended)return n;return t[0]}playWithCooldown(e,t,n,s){const r=Date.now(),a=this.lastPlayTime.get(e)||0;return r-a<t?!1:(this.lastPlayTime.set(e,r),this.playSound(n,s),!0)}playSound(e,t){if(!this.enabled)return;const n=this.getAudio(e);n.volume=t*this.masterVolume,n.currentTime=0,n.play().catch(()=>{})}getRandomVariant(e){const t=ta[e]||1;return Math.floor(Math.random()*t)+1}playFootstep(e){const t=this.getSoundCategory(e),n=`step/${t}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playWithCooldown(`step_${t}`,na.step,r,fn.step)}playBlockHit(e){const t=this.getSoundCategory(e),n=`dig/${t}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playWithCooldown(`dig_${t}`,na.dig,r,fn.dig)}playBlockBreak(e){const n=`dig/${this.getSoundCategory(e)}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playSound(r,fn.break)}playBlockPlace(e){const n=`dig/${this.getSoundCategory(e)}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playSound(r,fn.place)}playItemPickup(){const e=`${It}/random/pop.ogg`;this.playSound(e,fn.pickup)}playSplash(){const e=Math.random()>.5?"":"2",t=`${It}/liquid/splash${e}.ogg`;this.playSound(t,fn.splash)}playSwim(){const e=Math.floor(Math.random()*18)+1,t=`${It}/liquid/swim${e}.ogg`;this.playWithCooldown("swim",na.swim,t,fn.swim)}playUIClick(){const e=`${It}/random/click.ogg`;this.playSound(e,fn.ui)}playFallDamage(e){const t=`${It}/damage/fall${e?"big":"small"}.ogg`;this.playSound(t,fn.fall)}playOrbPickup(){const e=`${It}/random/orb.ogg`;this.playSound(e,fn.pickup)}preloadCommonSounds(){const e=["grass","stone","wood","sand"];for(const t of e){const n=`step/${t}`,s=`dig/${t}`,r=ta[n]||4,a=ta[s]||4;for(let o=1;o<=r;o++)this.getAudio(this.buildSoundPath(n,o));for(let o=1;o<=a;o++)this.getAudio(this.buildSoundPath(s,o))}this.getAudio(`${It}/random/pop.ogg`),this.getAudio(`${It}/random/click.ogg`),this.getAudio(`${It}/liquid/splash.ogg`)}}function vt(){return Pi.getInstance()}function re(i,e,t={}){return{id:i,name:e,isSolid:!0,isTransparent:!1,isGravityAffected:!1,needsBiomeTint:!1,isLeaves:!1,isLog:!1,isSapling:!1,isDoor:!1,isTrapdoor:!1,undergroundLayers:null,hardness:1,drops:i,dropChance:1,...t}}const Yl=new Map([[l.Air,re(l.Air,"Air",{isSolid:!1,isTransparent:!0,hardness:0,drops:null})],[l.Stone,re(l.Stone,"Stone",{hardness:1.5,undergroundLayers:[l.Stone,l.Stone]})],[l.Dirt,re(l.Dirt,"Dirt",{hardness:.5,undergroundLayers:[l.Dirt,l.Stone]})],[l.Grass,re(l.Grass,"Grass Block",{hardness:.6,needsBiomeTint:!0,drops:l.Dirt,undergroundLayers:[l.Dirt,l.Stone]})],[l.Sand,re(l.Sand,"Sand",{hardness:.5,isGravityAffected:!0,undergroundLayers:[l.Sand,l.Stone]})],[l.RedSand,re(l.RedSand,"Red Sand",{hardness:.5,isGravityAffected:!0,undergroundLayers:[l.RedSand,l.Stone]})],[l.Gravel,re(l.Gravel,"Gravel",{hardness:.6,isGravityAffected:!0,undergroundLayers:[l.Stone,l.Stone]})],[l.Water,re(l.Water,"Water",{isSolid:!1,isTransparent:!0,hardness:100,drops:null,undergroundLayers:[l.Sand,l.Stone]})],[l.Ice,re(l.Ice,"Ice",{isTransparent:!0,hardness:.5,undergroundLayers:[l.Stone,l.Stone]})],[l.PackedIce,re(l.PackedIce,"Packed Ice",{hardness:.5,undergroundLayers:[l.Stone,l.Stone]})],[l.BlueIce,re(l.BlueIce,"Blue Ice",{hardness:2.8,undergroundLayers:[l.Stone,l.Stone]})],[l.Snow,re(l.Snow,"Snow",{hardness:.1,undergroundLayers:[l.Dirt,l.Stone]})],[l.SnowBlock,re(l.SnowBlock,"Snow Block",{hardness:.2,undergroundLayers:[l.Dirt,l.Stone]})],[l.Clay,re(l.Clay,"Clay",{hardness:.6,undergroundLayers:[l.Clay,l.Dirt]})],[l.Bedrock,re(l.Bedrock,"Bedrock",{hardness:-1,drops:null,undergroundLayers:null})],[l.Podzol,re(l.Podzol,"Podzol",{hardness:.5,drops:l.Dirt,undergroundLayers:[l.Dirt,l.Stone]})],[l.Mycelium,re(l.Mycelium,"Mycelium",{hardness:.6,drops:l.Dirt,undergroundLayers:[l.Dirt,l.Stone]})],[l.Terracotta,re(l.Terracotta,"Terracotta",{hardness:1.25,undergroundLayers:[l.Terracotta,l.Stone]})],[l.OakLog,re(l.OakLog,"Oak Log",{hardness:2,isLog:!0})],[l.BirchLog,re(l.BirchLog,"Birch Log",{hardness:2,isLog:!0})],[l.SpruceLog,re(l.SpruceLog,"Spruce Log",{hardness:2,isLog:!0})],[l.JungleLog,re(l.JungleLog,"Jungle Log",{hardness:2,isLog:!0})],[l.AcaciaLog,re(l.AcaciaLog,"Acacia Log",{hardness:2,isLog:!0})],[l.DarkOakLog,re(l.DarkOakLog,"Dark Oak Log",{hardness:2,isLog:!0})],[l.CherryLog,re(l.CherryLog,"Cherry Log",{hardness:2,isLog:!0})],[l.MangroveLog,re(l.MangroveLog,"Mangrove Log",{hardness:2,isLog:!0})],[l.StrippedOakLog,re(l.StrippedOakLog,"Stripped Oak Log",{hardness:2,isLog:!0})],[l.StrippedBirchLog,re(l.StrippedBirchLog,"Stripped Birch Log",{hardness:2,isLog:!0})],[l.StrippedSpruceLog,re(l.StrippedSpruceLog,"Stripped Spruce Log",{hardness:2,isLog:!0})],[l.StrippedJungleLog,re(l.StrippedJungleLog,"Stripped Jungle Log",{hardness:2,isLog:!0})],[l.StrippedAcaciaLog,re(l.StrippedAcaciaLog,"Stripped Acacia Log",{hardness:2,isLog:!0})],[l.StrippedDarkOakLog,re(l.StrippedDarkOakLog,"Stripped Dark Oak Log",{hardness:2,isLog:!0})],[l.StrippedCherryLog,re(l.StrippedCherryLog,"Stripped Cherry Log",{hardness:2,isLog:!0})],[l.StrippedMangroveLog,re(l.StrippedMangroveLog,"Stripped Mangrove Log",{hardness:2,isLog:!0})],[l.OakLeaves,re(l.OakLeaves,"Oak Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.OakSapling,dropChance:.05})],[l.BirchLeaves,re(l.BirchLeaves,"Birch Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.BirchSapling,dropChance:.05})],[l.SpruceLeaves,re(l.SpruceLeaves,"Spruce Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.SpruceSapling,dropChance:.05})],[l.JungleLeaves,re(l.JungleLeaves,"Jungle Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.JungleSapling,dropChance:.025})],[l.AcaciaLeaves,re(l.AcaciaLeaves,"Acacia Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.AcaciaSapling,dropChance:.05})],[l.DarkOakLeaves,re(l.DarkOakLeaves,"Dark Oak Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.DarkOakSapling,dropChance:.05})],[l.CherryLeaves,re(l.CherryLeaves,"Cherry Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!1,isLeaves:!0,drops:l.CherrySapling,dropChance:.05})],[l.MangroveLeaves,re(l.MangroveLeaves,"Mangrove Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.MangroveSapling,dropChance:.05})],[l.OakSapling,re(l.OakSapling,"Oak Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.BirchSapling,re(l.BirchSapling,"Birch Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.SpruceSapling,re(l.SpruceSapling,"Spruce Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.JungleSapling,re(l.JungleSapling,"Jungle Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.AcaciaSapling,re(l.AcaciaSapling,"Acacia Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.DarkOakSapling,re(l.DarkOakSapling,"Dark Oak Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.CherrySapling,re(l.CherrySapling,"Cherry Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.MangroveSapling,re(l.MangroveSapling,"Mangrove Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.OakPlanks,re(l.OakPlanks,"Oak Planks",{hardness:2})],[l.BirchPlanks,re(l.BirchPlanks,"Birch Planks",{hardness:2})],[l.SprucePlanks,re(l.SprucePlanks,"Spruce Planks",{hardness:2})],[l.JunglePlanks,re(l.JunglePlanks,"Jungle Planks",{hardness:2})],[l.AcaciaPlanks,re(l.AcaciaPlanks,"Acacia Planks",{hardness:2})],[l.DarkOakPlanks,re(l.DarkOakPlanks,"Dark Oak Planks",{hardness:2})],[l.CherryPlanks,re(l.CherryPlanks,"Cherry Planks",{hardness:2})],[l.MangrovePlanks,re(l.MangrovePlanks,"Mangrove Planks",{hardness:2})],[l.OakDoor,re(l.OakDoor,"Oak Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.BirchDoor,re(l.BirchDoor,"Birch Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.SpruceDoor,re(l.SpruceDoor,"Spruce Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.JungleDoor,re(l.JungleDoor,"Jungle Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.AcaciaDoor,re(l.AcaciaDoor,"Acacia Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.DarkOakDoor,re(l.DarkOakDoor,"Dark Oak Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.CherryDoor,re(l.CherryDoor,"Cherry Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.MangroveDoor,re(l.MangroveDoor,"Mangrove Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.OakTrapdoor,re(l.OakTrapdoor,"Oak Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.BirchTrapdoor,re(l.BirchTrapdoor,"Birch Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.SpruceTrapdoor,re(l.SpruceTrapdoor,"Spruce Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.JungleTrapdoor,re(l.JungleTrapdoor,"Jungle Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.AcaciaTrapdoor,re(l.AcaciaTrapdoor,"Acacia Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.DarkOakTrapdoor,re(l.DarkOakTrapdoor,"Dark Oak Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.CherryTrapdoor,re(l.CherryTrapdoor,"Cherry Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.MangroveTrapdoor,re(l.MangroveTrapdoor,"Mangrove Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.Cactus,re(l.Cactus,"Cactus",{hardness:.4,isTransparent:!0})],[l.CactusTop,re(l.CactusTop,"Cactus Top",{hardness:.4,isTransparent:!0,drops:l.Cactus})],[l.DeadBush,re(l.DeadBush,"Dead Bush",{isSolid:!1,isTransparent:!0,hardness:0})],[l.TallGrass,re(l.TallGrass,"Tall Grass",{isSolid:!1,isTransparent:!0,hardness:0,needsBiomeTint:!0,drops:null})],[l.Fern,re(l.Fern,"Fern",{isSolid:!1,isTransparent:!0,hardness:0,needsBiomeTint:!0,drops:null})],[l.Coral,re(l.Coral,"Coral",{isSolid:!1,isTransparent:!0,hardness:0})],[l.Seagrass,re(l.Seagrass,"Seagrass",{isSolid:!1,isTransparent:!0,hardness:0,drops:null})]]);function Wn(i){const e=Yl.get(i);return e||(console.warn(`Unknown block type: ${i}, using Air properties`),Yl.get(l.Air))}function nh(i){return Wn(i).isGravityAffected}function Bg(i){return Wn(i).needsBiomeTint}function ih(i){return Wn(i).isLog}function zg(i){return Wn(i).isSapling}function Hg(i){return Wn(i).isDoor}function Gg(i){return Wn(i).isTrapdoor}function Vg(i){return Wn(i).undergroundLayers??[l.Dirt,l.Stone]}const Wg=20,ia=1;function sa(i){return nh(i)}class Xg{scene;fallingBlocks=new Map;nextId=0;blockMaterials=new Map;blockGeometry;placeBlock;removeBlock;getHeight;isSolid;getBlock;playerPosition=null;playerWidth=.6;pendingFallChecks=[];constructor(e,t,n,s,r,a){this.scene=e,this.placeBlock=t,this.removeBlock=n,this.getHeight=s,this.isSolid=r,this.getBlock=a,this.blockGeometry=new kt(ia,ia,ia)}setBlockMaterials(e){this.blockMaterials=e}setPlayerPosition(e){this.playerPosition=e}spawnFallingBlock(e,t,n,s){let r=this.blockMaterials.get(s);if(!r){const c=s===l.Sand?12759680:s===l.RedSand?12479290:(s===l.Gravel,8947848);r=new io({color:c})}const a=new qe(this.blockGeometry,r);a.position.set(e,t,n),this.scene.add(a);const o={id:this.nextId++,blockType:s,mesh:a,position:new N(e,t,n),velocity:0,startY:t,sourceX:Math.floor(e),sourceZ:Math.floor(n)};this.fallingBlocks.set(o.id,o),console.log(`🪨 Spawned falling ${l[s]} at (${e}, ${t}, ${n})`)}checkAndTriggerFall(e,t,n,s){if(s===void 0&&(s=this.getBlock(e,t,n)??void 0),s===void 0||!sa(s))return!1;const r=t-1,a=this.isSolid(e,r,n);return Array.from(this.fallingBlocks.values()).some(c=>Math.floor(c.position.x)===e&&Math.floor(c.position.z)===n&&Math.abs(c.position.y-t)<.5)||a?!1:(this.removeBlock(e,t,n),this.spawnFallingBlock(e,t,n,s),!0)}checkBlocksAbove(e,t,n){const s=t+1,r=this.getBlock(e,s,n);r!==null&&sa(r)&&this.checkAndTriggerFall(e,s,n,r)}update(e){const t=[],n=[];for(const[s,r]of this.fallingBlocks){r.velocity-=Wg*e,r.velocity=Math.max(r.velocity,-40);const a=r.position.y+r.velocity*e,o=Math.floor(r.position.x),c=Math.floor(r.position.z);let h=this.findLandingY(o,c,r.position.y);if(a<=h){const u=Math.floor(h);this.pushPlayerAway(o,u,c),this.placeBlock(o,u,c,r.blockType)?(console.log(`🪨 ${l[r.blockType]} landed at (${o}, ${u}, ${c})`),t.push({x:o,y:u,z:c,blockType:r.blockType}),vt().playBlockPlace(r.blockType),this.pendingFallChecks.push({x:o,y:u+1,z:c})):this.placeBlock(o,u+1,c,r.blockType)?(console.log(`🪨 ${l[r.blockType]} landed at elevated position (${o}, ${u+1}, ${c})`),t.push({x:o,y:u+1,z:c,blockType:r.blockType}),vt().playBlockPlace(r.blockType)):console.log(`⚠️ ${l[r.blockType]} couldn't land at (${o}, ${u}, ${c})`),this.scene.remove(r.mesh),r.mesh.geometry.dispose(),n.push(s)}else r.position.y=a,r.mesh.position.y=a,r.mesh.rotation.x+=e*.5,r.mesh.rotation.z+=e*.3}for(const s of n)this.fallingBlocks.delete(s);for(;this.pendingFallChecks.length>0;){const s=this.pendingFallChecks.shift(),r=this.getBlock(s.x,s.y,s.z);r!==null&&sa(r)&&this.checkAndTriggerFall(s.x,s.y,s.z,r)}return t}findLandingY(e,t,n){let s=Math.floor(n);for(;s>0;){const a=s-1;if(this.isSolid(e,a,t)||Array.from(this.fallingBlocks.values()).some(c=>Math.floor(c.position.x)===e&&Math.floor(c.position.z)===t&&c.position.y<n&&c.position.y>=a))return s;s--}return this.getHeight(e,t)+1}pushPlayerAway(e,t,n){if(!this.playerPosition)return;const s=this.playerPosition.x,r=this.playerPosition.y,a=this.playerPosition.z,o=this.playerWidth/2,c=1.8,h=e,u=e+1,d=t,p=t+1,g=n,v=n+1,_=s-o,m=s+o,f=r,w=r+c,M=a-o,b=a+o,R=u>_&&h<m,L=p>f&&d<w,A=v>M&&g<b;if(R&&L&&A){const P=[{axis:"x",dist:u-_,dir:1},{axis:"x",dist:m-h,dir:-1},{axis:"z",dist:v-M,dir:1},{axis:"z",dist:b-g,dir:-1},{axis:"y",dist:p-f,dir:1}];P.sort((C,F)=>C.dist-F.dist);const y=P[0],x=y.dist+.1;y.axis==="x"?(this.playerPosition.x+=x*y.dir,console.log(`🏃 Player pushed ${y.dir>0?"+":"-"}X by ${x.toFixed(2)} to avoid falling block`)):y.axis==="z"?(this.playerPosition.z+=x*y.dir,console.log(`🏃 Player pushed ${y.dir>0?"+":"-"}Z by ${x.toFixed(2)} to avoid falling block`)):y.axis==="y"&&(this.playerPosition.y+=x,console.log(`🏃 Player pushed up by ${x.toFixed(2)} to avoid falling block`))}}getFallingBlockCount(){return this.fallingBlocks.size}hasFallingBlockAbove(e,t,n){for(const s of this.fallingBlocks.values())if(Math.floor(s.position.x)===e&&Math.floor(s.position.z)===t&&s.position.y>=n)return!0;return!1}destroy(){for(const e of this.fallingBlocks.values())this.scene.remove(e.mesh),e.mesh.geometry.dispose();this.fallingBlocks.clear(),this.blockGeometry.dispose()}}const Yg=3,$g=5,ni=new kt(1,1,1);ni.computeBoundingSphere();ni.computeBoundingBox();const sh=7/9,To=new Ss(1,1);To.rotateX(-Math.PI/2);To.translate(0,sh-.5,0);function qg(){const i=new Xt,e=new Float32Array([-.5,0,-.5,.5,0,.5,.5,1,.5,-.5,0,-.5,.5,1,.5,-.5,1,-.5,.5,0,.5,-.5,0,-.5,-.5,1,-.5,.5,0,.5,-.5,1,-.5,.5,1,.5,-.5,0,.5,.5,0,-.5,.5,1,-.5,-.5,0,.5,.5,1,-.5,-.5,1,.5,.5,0,-.5,-.5,0,.5,-.5,1,.5,.5,0,-.5,-.5,1,.5,.5,1,-.5]),t=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1]),n=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);return i.setAttribute("position",new Tt(e,3)),i.setAttribute("uv",new Tt(t,2)),i.setAttribute("normal",new Tt(n,3)),i}const jg=qg();function Oi(i){return Hg(i)}function Zg(i){return Gg(i)}const Jg={[l.OakDoor]:{bottom:"/textures/oak_door_bottom.png",top:"/textures/oak_door_top.png"},[l.BirchDoor]:{bottom:"/textures/birch_door_bottom.png",top:"/textures/birch_door_top.png"},[l.SpruceDoor]:{bottom:"/textures/spruce_door_bottom.png",top:"/textures/spruce_door_top.png"},[l.JungleDoor]:{bottom:"/textures/jungle_door_bottom.png",top:"/textures/jungle_door_top.png"},[l.AcaciaDoor]:{bottom:"/textures/acacia_door_bottom.png",top:"/textures/acacia_door_top.png"},[l.DarkOakDoor]:{bottom:"/textures/dark_oak_door_bottom.png",top:"/textures/dark_oak_door_top.png"},[l.CherryDoor]:{bottom:"/textures/cherry_door_bottom.png",top:"/textures/cherry_door_top.png"},[l.MangroveDoor]:{bottom:"/textures/mangrove_door_bottom.png",top:"/textures/mangrove_door_top.png"}},ro=3/16;function Kg(){const i=new Xt,e=.5,t=ro/2,n=1,s=.5-t,r=new Float32Array([-e,0,s+t,e,0,s+t,e,n,s+t,-e,0,s+t,e,n,s+t,-e,n,s+t,e,0,s-t,-e,0,s-t,-e,n,s-t,e,0,s-t,-e,n,s-t,e,n,s-t,-e,0,s-t,-e,0,s+t,-e,n,s+t,-e,0,s-t,-e,n,s+t,-e,n,s-t,e,0,s+t,e,0,s-t,e,n,s-t,e,0,s+t,e,n,s-t,e,n,s+t,-e,n,s+t,e,n,s+t,e,n,s-t,-e,n,s+t,e,n,s-t,-e,n,s-t,-e,0,s-t,e,0,s-t,e,0,s+t,-e,0,s-t,e,0,s+t,-e,0,s-t]),a=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,.4,0,.6,0,.6,1,.4,0,.6,1,.4,1,.4,0,.6,0,.6,1,.4,0,.6,1,.4,1,0,.4,1,.4,1,.6,0,.4,1,.6,0,.6,0,.4,1,.4,1,.6,0,.4,1,.6,0,.6]),o=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]);return i.setAttribute("position",new Tt(r,3)),i.setAttribute("uv",new Tt(a,2)),i.setAttribute("normal",new Tt(o,3)),i}const ra=Kg();function Qg(i){const e=new kt(1,i,1);e.translate(0,i/2,0);const t=e.getAttribute("uv"),n=e.getAttribute("normal");for(let s=0;s<t.count;s++)if(Math.abs(n.getY(s))<.5){const r=t.getY(s);t.setY(s,(1-r)*i)}return t.needsUpdate=!0,e}class e0{scene;generator;textureManager;chunks=new Map;chunkData=new Map;chunkRevision=0;brokenBlocks=new Map;placedBlocks=new Map;doorStates=new Map;doorMaterials=new Map;lastPlayerChunkX=-999;lastPlayerChunkZ=-999;loadRadius=Yg;unloadRadius=$g;currentZoom=10;treeLOD=0;fastGraphics=!1;fallingBlockManager;playerPosition=null;constructor(e,t,n){this.scene=e,this.generator=t,this.textureManager=n,this.fallingBlockManager=new Xg(e,(s,r,a,o)=>this.placeBlockInternal(s,r,a,o),(s,r,a)=>this.removeBlockInternal(s,r,a),(s,r)=>this.getHeightAt(s,r),(s,r,a)=>this.isSolidAt(s,r,a),(s,r,a)=>this.getBlockTypeAt(s,r,a)),this.initFallingBlockMaterials()}initFallingBlockMaterials(){const e=new Map;e.set(l.Sand,this.textureManager.getMaterial(l.Sand)),e.set(l.Gravel,this.textureManager.getMaterial(l.Gravel)),e.set(l.RedSand,this.textureManager.getMaterial(l.RedSand)),this.fallingBlockManager.setBlockMaterials(e)}setZoom(e){this.currentZoom=e,this.updateTreeLOD()}setFastGraphics(e){this.fastGraphics=e,this.updateTreeLOD()}updateTreeLOD(){let e=0;this.fastGraphics?this.currentZoom>45?e=2:this.currentZoom>35&&(e=1):this.currentZoom>55?e=2:this.currentZoom>45&&(e=1),e!==this.treeLOD&&(this.treeLOD=e,this.applyTreeLOD())}applyTreeLOD(){}setRenderDistance(e){this.loadRadius=Math.max(2,Math.min(8,e)),this.unloadRadius=this.loadRadius+2,this.lastPlayerChunkX=-999,this.lastPlayerChunkZ=-999}getRenderDistance(){return this.loadRadius}setPlayerPosition(e){this.playerPosition=e,this.fallingBlockManager.setPlayerPosition(e)}update(e,t){const n=Math.floor(e/H),s=Math.floor(t/H);if(!(n===this.lastPlayerChunkX&&s===this.lastPlayerChunkZ)){this.lastPlayerChunkX=n,this.lastPlayerChunkZ=s;for(let r=-this.loadRadius;r<=this.loadRadius;r++)for(let a=-this.loadRadius;a<=this.loadRadius;a++){const o=n+r,c=s+a,h=`${o},${c}`;this.chunks.has(h)||this.loadChunk(o,c)}for(const[r,a]of this.chunks){const[o,c]=r.split(",").map(Number),h=Math.abs(o-n),u=Math.abs(c-s);(h>this.unloadRadius||u>this.unloadRadius)&&this.unloadChunk(r,a)}}}updateFallingBlocks(e){const t=this.fallingBlockManager.update(e),n=new Set;for(const s of t){const r=Math.floor(s.x/H),a=Math.floor(s.z/H);n.add(`${r},${a}`)}for(const s of n){const[r,a]=s.split(",").map(Number);this.rebuildChunk(r,a)}}getFallingBlockCount(){return this.fallingBlockManager.getFallingBlockCount()}loadChunk(e,t){const n=`${e},${t}`,s=this.generator.generateChunk(e,t);this.chunkData.set(n,s);const r=new Vt;r.name=`chunk_${n}`;const a=e*H,o=t*H;this.createTreeMeshes(r,s,a,o),this.createTerrainMesh(r,s,a,o),this.scene.add(r),this.chunks.set(n,r),this.chunkRevision++}createTerrainMesh(e,t,n,s){const r=Math.floor(n/H),a=Math.floor(s/H),o=`${r},${a}`,c=new Map,h=new Map,u=new Map,d=(g,v,_,m,f)=>{if(m===l.Air)return;const w=this.textureManager.needsBiomeTint(m)||m===l.Water,M=w?`${m}_${f}`:`${m}`;c.has(M)||(c.set(M,[]),h.set(M,m),w&&u.set(M,f)),c.get(M).push(new N(g,v,_))};for(let g=0;g<H;g++)for(let v=0;v<H;v++){const _=g*H+v,m=t.heightMap[_],f=t.topBlock[_],w=t.biomeMap[_],M=n+v,b=Math.floor(m),R=s+g,L=this.getUndergroundLayersForBlock(f);this.isBlockBroken(M,b,R)||d(M,b,R,f,w);const A=b-1;this.isBlockBroken(M,A,R)||d(M,A,R,L[0],w);const P=b-2;this.isBlockBroken(M,P,R)||d(M,P,R,L[1],w);const y=b-3;this.isBlockBroken(M,y,R)||d(M,y,R,l.Bedrock,w)}const p=this.placedBlocks.get(o);if(p)for(const[g,v]of p){const[_,m,f]=g.split(",").map(Number),w=(_%H+H)%H,b=(f%H+H)%H*H+w,R=t.biomeMap[b]||1;d(_,m,f,v,R)}for(const[g,v]of c){if(v.length===0)continue;const _=h.get(g),m=u.get(g),f=_===l.Water,w=zg(_),M=ih(_);if(_===l.Grass||_===l.Podzol||_===l.Mycelium){const y=m!==void 0?this.textureManager.getBiomeTint(m):void 0,x=this.textureManager.getInstancedMaterial(_,y),C=new ns(ni,x,v.length),F=new Ze;v.forEach((O,Y)=>{F.setPosition(O.x,O.y,O.z),C.setMatrixAt(Y,F)}),C.instanceMatrix.needsUpdate=!0,C.frustumCulled=!0,C.castShadow=!0,C.receiveShadow=!0,e.add(C);continue}if(M){const y=this.textureManager.getInstancedMaterial(_),x=new ns(ni,y,v.length),C=new Ze;v.forEach((F,O)=>{C.setPosition(F.x,F.y,F.z),x.setMatrixAt(O,C)}),x.instanceMatrix.needsUpdate=!0,x.frustumCulled=!0,x.castShadow=!0,x.receiveShadow=!0,e.add(x);continue}if(w){const y=this.textureManager.getSaplingMaterial(_);for(const x of v){const C=new qe(jg,y);C.position.set(x.x,x.y,x.z),e.add(C)}continue}if(Oi(_)){for(const y of v){const x=this.createDoorMesh(_,y.x,y.y,y.z);e.add(x)}continue}if(Zg(_)){const y=this.textureManager.getSaplingMaterial(_);for(const x of v){const C=new kt(1,.1875,1);C.translate(0,3/32,0);const F=new qe(C,y);F.position.set(x.x,x.y,x.z),e.add(F)}continue}let R;f?R=this.textureManager.getWaterMaterial(m):m!==void 0?R=this.textureManager.getInstancedLeavesMaterial(_,m):R=this.textureManager.getInstancedMaterial(_);const L=f?To:ni,A=new ns(L,R,v.length),P=new Ze;v.forEach((y,x)=>{P.setPosition(y.x,y.y,y.z),A.setMatrixAt(x,P)}),A.instanceMatrix.needsUpdate=!0,A.frustumCulled=!0,A.castShadow=!0,A.receiveShadow=!0,f?A.renderOrder=0:m!==void 0&&(A.renderOrder=2),e.add(A)}}getUndergroundLayersForBlock(e){return Vg(e)}createTreeMeshes(e,t,n,s){if(!t.trees||t.trees.length===0)return;const r=new Set,a=new Map,o=[];for(const h of t.trees){const u=h.z*H+h.x,d=t.heightMap[u],p=t.biomeMap[u],g=cr[h.type],v=hr[h.type],_=n+h.x,m=d+1,f=s+h.z;if(h.blocks&&h.blocks.length>0&&h.blocks[0].type==="cactus"){const w=h.blocks.filter(M=>M.type==="cactus").length;if(w>0){const M=this.textureManager.getCactusMaterials(),b=Qg(w),R=new qe(b,M);R.position.set(_,m,f),e.add(R);for(let L=0;L<w;L++)r.add(`${_},${m+L},${f}`)}continue}if(h.blocks)for(const w of h.blocks){const M=_+w.dx,b=m+w.dy,R=f+w.dz,L=`${M},${b},${R}`;if(!r.has(L))if(r.add(L),w.type==="leaves"){const A=`${v}_${p}`;a.has(A)||a.set(A,[]),a.get(A).push(new N(M,b,R))}else w.type==="log"&&o.push({pos:new N(M,b,R),logType:g})}}for(const[h,u]of a){if(u.length===0)continue;const[d,p]=h.split("_"),g=parseInt(d),v=parseInt(p),_=this.textureManager.getInstancedLeavesMaterial(g,v),m=new ns(ni,_,u.length);m.name=`leaves_instanced_${h}`,m.renderOrder=2,m.frustumCulled=!0,m.castShadow=!0,m.receiveShadow=!1;const f=new Ze;for(let w=0;w<u.length;w++){const M=u[w];f.setPosition(M.x,M.y,M.z),m.setMatrixAt(w,f)}m.instanceMatrix.needsUpdate=!0,e.add(m)}const c=new Map;for(const{pos:h,logType:u}of o)c.has(u)||c.set(u,[]),c.get(u).push(h);for(const[h,u]of c){if(u.length===0)continue;const d=this.textureManager.getInstancedMaterial(h),p=new ns(ni,d,u.length);p.name=`logs_instanced_${h}`,p.frustumCulled=!0,p.castShadow=!0,p.receiveShadow=!0;const g=new Ze;for(let v=0;v<u.length;v++){const _=u[v];g.setPosition(_.x,_.y,_.z),p.setMatrixAt(v,g)}p.instanceMatrix.needsUpdate=!0,e.add(p)}e.updateMatrixWorld(!0)}unloadChunk(e,t){this.scene.remove(t),t.traverse(n=>{}),this.chunks.delete(e),this.chunkData.delete(e),this.chunkRevision++}getHeightAt(e,t){const n=Math.floor(e),s=Math.floor(t),r=Math.floor(n/H),a=Math.floor(s/H),o=`${r},${a}`;let c=64;const h=this.chunkData.get(o);if(h){const v=(n%H+H)%H,m=(s%H+H)%H*H+v,f=h.heightMap[m];f!==void 0&&!isNaN(f)&&(c=Math.floor(f))}else{const v=this.generator.getHeightAt(n,s);c=v===void 0||isNaN(v)?64:Math.floor(v)}const u=this.placedBlocks.get(o);let d=-1/0;if(u&&u.size>0){console.log(`[getHeightAt] Checking placedMap for chunk ${o}, size=${u.size}`);for(const v of u.keys()){const[_,m,f]=v.split(",").map(Number);console.log(`[getHeightAt] Placed block at ${v}: px=${_}, py=${m}, pz=${f}, floorX=${n}, floorZ=${s}`),_===n&&f===s&&m>d&&(d=m,console.log(`[getHeightAt] Found matching placed block at y=${m}`))}}const p=Math.max(c,d),g=c-3;for(let v=p;v>=g;v--)if(u&&u.has(`${n},${v},${s}`)||v<=c&&v>=c-3&&!this.isBlockBroken(n,v,s))return v;return c-4}getHeightAtForPlayer(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(s/H),o=Math.floor(r/H),c=`${a},${o}`;let h=64;const u=this.chunkData.get(c);if(u){const v=(s%H+H)%H,m=(r%H+H)%H*H+v,f=u.heightMap[m];f!==void 0&&!isNaN(f)&&(h=Math.floor(f))}else{const v=this.generator.getHeightAt(s,r);h=v===void 0||isNaN(v)?64:Math.floor(v)}const p=Math.floor(n-1)+1,g=h-10;for(let v=p;v>=g;v--)if(this.isSolidBlockAt(s,v,r)&&!this.isSolidBlockAt(s,v+1,r)&&!this.isSolidBlockAt(s,v+2,r))return v;return h-4}isSolidBlockAt(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=Math.floor(s/H),c=Math.floor(a/H),h=`${o},${c}`,u=this.placedBlocks.get(h);if(u&&u.has(`${s},${r},${a}`)){const p=u.get(`${s},${r},${a}`);if(p!==l.Water&&p!==l.Air)return!0}if(this.isBlockBroken(s,r,a))return!1;const d=this.chunkData.get(h);if(d){const p=(s%H+H)%H,v=(a%H+H)%H*H+p,_=d.heightMap[v];if(_!==void 0&&!isNaN(_)){const m=Math.floor(_);if(r<=m&&r>=m-3){const f=this.getBlockAt(s,r,a);if(f&&f!==l.Water)return!0}}}return!1}getSurfaceHeightAt(e,t){const n=this.getHeightAt(e,t);return n===void 0||isNaN(n)?64:this.getBlockAt(Math.floor(e),n,Math.floor(t))===l.Water?n+sh-.5:n}getBlockAt(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=Math.floor(s/H),c=Math.floor(a/H),h=`${o},${c}`,u=this.getPlacedBlock(s,r,a);if(u!==null)return u;if(this.isBlockBroken(s,r,a))return l.Air;const d=this.chunkData.get(h);if(!d)return null;const p=(s%H+H)%H,v=(a%H+H)%H*H+p,_=Math.floor(d.heightMap[v]);if(d.trees){const f=o*H,w=c*H;for(const M of d.trees){const b=M.z*H+M.x,R=d.heightMap[b],L=f+M.x,A=R+1,P=w+M.z;if(M.blocks)for(const y of M.blocks){const x=L+y.dx,C=A+y.dy,F=P+y.dz;if(x===s&&C===r&&F===a){if(y.type==="leaves")return hr[M.type];if(y.type==="log")return cr[M.type];if(y.type==="cactus")return l.Cactus}}}}if(r===_)return d.topBlock[v];const m=_-r;if(m>=1&&m<=3){const f=d.topBlock[v],w=this.getUndergroundLayersForBlock(f);if(m===1)return w[0];if(m===2)return w[1];if(m===3)return l.Bedrock}return r<=_?d.topBlock[v]:null}getChunkCount(){return this.chunks.size}getChunkRevision(){return this.chunkRevision}removeBlock(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r,a);if(o===null||o===l.Air||o===l.Water)return null;const c=Math.floor(s/H),h=Math.floor(a/H),u=`${c},${h}`,d=`${s},${r},${a}`,p=this.placedBlocks.get(u);p&&p.has(d)?p.delete(d):(this.brokenBlocks.has(u)||this.brokenBlocks.set(u,new Set),this.brokenBlocks.get(u).add(d));const g=this.chunkData.get(u);if(!g)return null;const v=(s%H+H)%H,m=(a%H+H)%H*H+v,f=g.heightMap[m];if(r===Math.floor(f)&&(g.topBlock[m]=l.Air),g.trees)for(const w of g.trees){if(!w.blocks)continue;const M=c*H+w.x,b=h*H+w.z,R=w.z*H+w.x,L=Math.floor(g.heightMap[R])+1;for(let A=w.blocks.length-1;A>=0;A--){const P=w.blocks[A],y=M+P.dx,x=L+P.dy,C=b+P.dz;if(y===s&&x===r&&C===a){w.blocks.splice(A,1);break}}}return this.rebuildChunk(c,h),this.fallingBlockManager.checkBlocksAbove(s,r,a),o}rebuildChunk(e,t){const n=`${e},${t}`,s=this.chunkData.get(n),r=this.chunks.get(n);if(!s||!r)return;this.scene.remove(r),r.traverse(h=>{});const a=new Vt;a.name=`chunk_${n}`;const o=e*H,c=t*H;this.createTerrainMesh(a,s,o,c),this.createTreeMeshes(a,s,o,c),this.scene.add(a),this.chunks.set(n,a),this.chunkRevision++}isBlockBroken(e,t,n){const s=Math.floor(e/H),r=Math.floor(n/H),a=`${s},${r}`,o=this.brokenBlocks.get(a);return o?o.has(`${Math.floor(e)},${Math.floor(t)},${Math.floor(n)}`):!1}removeBlockInternal(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r,a);if(o===null||o===l.Air||o===l.Water)return null;const c=Math.floor(s/H),h=Math.floor(a/H),u=`${c},${h}`,d=`${s},${r},${a}`,p=this.placedBlocks.get(u);p&&p.has(d)?p.delete(d):(this.brokenBlocks.has(u)||this.brokenBlocks.set(u,new Set),this.brokenBlocks.get(u).add(d));const g=this.chunkData.get(u);if(g){const v=(s%H+H)%H,m=(a%H+H)%H*H+v,f=g.heightMap[m];r===Math.floor(f)&&(g.topBlock[m]=l.Air)}return this.rebuildChunk(c,h),o}placeBlockInternal(e,t,n,s){const r=Math.floor(e),a=Math.floor(t),o=Math.floor(n);if(s===l.Air||s===l.Water)return!1;const c=this.getBlockTypeAt(r,a,o);if(c!==null&&c!==l.Air)return!1;const h=Math.floor(r/H),u=Math.floor(o/H),d=`${h},${u}`;this.placedBlocks.has(d)||this.placedBlocks.set(d,new Map);const p=`${r},${a},${o}`;this.placedBlocks.get(d).set(p,s);const g=this.brokenBlocks.get(d);return g&&g.delete(p),!0}placeBlock(e,t,n,s){const r=Math.floor(e),a=Math.floor(t),o=Math.floor(n);if(s===l.Air||s===l.Water)return!1;const c=this.getBlockTypeAt(r,a,o);if(c!==null&&c!==l.Air)return!1;if(nh(s)){const v=a-1;if(!this.isSolidAt(r,v,o))return this.fallingBlockManager.spawnFallingBlock(r,a,o,s),!0}const h=Math.floor(r/H),u=Math.floor(o/H),d=`${h},${u}`;this.placedBlocks.has(d)||this.placedBlocks.set(d,new Map);const p=`${r},${a},${o}`;this.placedBlocks.get(d).set(p,s);const g=this.brokenBlocks.get(d);return g&&g.delete(p),this.rebuildChunk(h,u),!0}getPlacedBlock(e,t,n){const s=Math.floor(e/H),r=Math.floor(n/H),a=`${s},${r}`,o=this.placedBlocks.get(a);if(!o)return null;const c=`${Math.floor(e)},${Math.floor(t)},${Math.floor(n)}`;return o.get(c)||null}createDoorMesh(e,t,n,s){const r=new Vt,a=`${t},${n},${s}`;let o=this.doorStates.get(a);o||(o={open:!1,facing:0},this.doorStates.set(a,o));const c=Jg[e];if(!c){const w=this.textureManager.getSaplingMaterial(e),M=new qe(ra.clone(),w);return r.add(M),r.position.set(t,n,s),r}const h=`door_bottom_${e}`,u=`door_top_${e}`;let d=this.doorMaterials.get(h),p=this.doorMaterials.get(u);const g=new Mr;if(!d){const w=g.load(c.bottom);w.magFilter=et,w.minFilter=et,w.colorSpace=xt,d=new io({map:w,side:Et,transparent:!0,alphaTest:.5}),this.doorMaterials.set(h,d)}if(!p){const w=g.load(c.top);w.magFilter=et,w.minFilter=et,w.colorSpace=xt,p=new io({map:w,side:Et,transparent:!0,alphaTest:.5}),this.doorMaterials.set(u,p)}const v=new Vt,_=new qe(ra.clone(),d);_.position.set(0,0,0),v.add(_);const m=new qe(ra.clone(),p);m.position.set(0,1,0),v.add(m);const f=o.facing*Math.PI/2;return o.open?(v.position.set(-.5,0,.5-ro/2),v.rotation.y=f-Math.PI/2,v.position.x+=.5*Math.cos(f-Math.PI/2)+.5*Math.cos(f),v.position.z+=.5*Math.sin(f-Math.PI/2)+.5*Math.sin(f)+(.5-ro/2)):v.rotation.y=f,r.add(v),r.position.set(t,n,s),r.userData={isDoor:!0,blockType:e,posKey:a},r}toggleDoor(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r,a);if(!o||!Oi(o)){const p=this.getBlockTypeAt(s,r-1,a);return p&&Oi(p)?this.toggleDoor(s,r-1,a):!1}const c=`${s},${r},${a}`;let h=this.doorStates.get(c);h||(h={open:!1,facing:0}),h.open=!h.open,this.doorStates.set(c,h),console.log(`🚪 Door at (${s}, ${r}, ${a}) is now ${h.open?"OPEN":"CLOSED"}`);const u=Math.floor(s/H),d=Math.floor(a/H);return this.rebuildChunk(u,d),!0}isDoorOpen(e,t,n){const s=`${Math.floor(e)},${Math.floor(t)},${Math.floor(n)}`;return this.doorStates.get(s)?.open??!1}getBlockTypeAt(e,t,n){const s=Math.floor(e/H),r=Math.floor(n/H),a=`${s},${r}`,o=this.getPlacedBlock(e,t,n);if(o!==null)return o;if(this.isBlockBroken(e,t,n))return null;const c=this.chunkData.get(a);if(!c)return null;const h=(Math.floor(e)%H+H)%H,d=(Math.floor(n)%H+H)%H*H+h,p=Math.floor(c.heightMap[d]),g=Math.floor(t);if(g===p)return c.topBlock[d];const v=p-g;if(v>=1&&v<=3){const _=c.topBlock[d],m=this.getUndergroundLayersForBlock(_);if(v===1)return m[0];if(v===2)return m[1];if(v===3)return l.Bedrock}if(c.trees){for(const _ of c.trees)if(_.blocks){const m=s*H+_.x,f=r*H+_.z,w=c.heightMap[_.z*H+_.x]+1;for(const M of _.blocks){const b=m+M.dx,R=w+M.dy,L=f+M.dz;if(Math.floor(e)===b&&Math.floor(t)===R&&Math.floor(n)===L){if(M.type==="log")return cr[_.type];if(M.type==="leaves")return hr[_.type];if(M.type==="cactus")return l.Cactus}}}}return null}isSolidAt(e,t,n){const s=this.getBlockTypeAt(e,t,n);if(s===null)return!1;const r=Wn(s);if(!r.isSolid)return!1;if(r.isDoor){const a=Math.floor(e),o=Math.floor(t),c=Math.floor(n),h=`${a},${o},${c}`,u=`${a},${o-1},${c}`;if((this.doorStates.get(h)||this.doorStates.get(u))?.open)return!1}return!0}checkCollision(e,t,n,s=.6,r=1.8){const a=s/2,o=[{x:e-a,y:t,z:n-a},{x:e+a,y:t,z:n-a},{x:e-a,y:t,z:n+a},{x:e+a,y:t,z:n+a},{x:e-a,y:t+1,z:n-a},{x:e+a,y:t+1,z:n-a},{x:e-a,y:t+1,z:n+a},{x:e+a,y:t+1,z:n+a}];for(const c of o)if(this.isSolidAt(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))return!0;return!1}checkHeadCollision(e,t,n,s=.6,r=1.8){const a=s/2,o=t+r,c=[{x:e-a,z:n-a},{x:e+a,z:n-a},{x:e-a,z:n+a},{x:e+a,z:n+a}];for(const h of c)if(this.isSolidAt(Math.floor(h.x),Math.floor(o),Math.floor(h.z)))return!0;return!1}canStandAt(e,t,n,s=.6){const r=s/2,a=[{x:e-r,z:n-r},{x:e+r,z:n-r},{x:e-r,z:n+r},{x:e+r,z:n+r}];for(const o of a){const h=this.getHeightAtForPlayer(o.x,o.z,t)+1,u=t-h;if(u>=-.1&&u<=.5)return!0}return!1}getStandingHeightAt(e,t,n,s=.6){const r=s/2,a=[{x:e-r,z:t-r},{x:e+r,z:t-r},{x:e-r,z:t+r},{x:e+r,z:t+r}];let o=-1/0;for(const c of a){const h=this.getHeightAtForPlayer(c.x,c.z,n);h>o&&(o=h)}return o+1}destroy(){for(const[e,t]of this.chunks)this.unloadChunk(e,t);this.fallingBlockManager.destroy()}}const qs=10,$l=25,t0=.3,n0=.7;class br{name="grounded";isCrouching=!1;enter(e){e.setJumpVelocity(0),e.setJumpProgress(0),e.setIsJumping(!1),e.setSwimmingInternal(!1),e.syncBaseY()}exit(e){this.isCrouching=!1}update(e,t){return null}handleJump(e){return this.isCrouching?null:new rh}handleCrouch(e,t){this.isCrouching=t,e.setCrouchingInternal(t)}handleWaterChange(e,t){return t?new ah:null}getSpeedMultiplier(){return this.isCrouching?t0:1}canJump(){return!0}canCrouch(){return!0}getDisplayName(){return this.isCrouching?"crouching":"grounded"}}class rh{name="jumping";jumpVelocity=qs;baseY=0;terrainY=0;constructor(e=qs){this.jumpVelocity=e}enter(e){this.jumpVelocity<=0?this.baseY=-1e3:this.baseY=e.position.y,this.terrainY=e.position.y,e.setJumpVelocity(this.jumpVelocity),e.setIsJumping(!0),e.setCrouchingInternal(!1)}exit(e){e.setIsJumping(!1),e.setJumpVelocity(0)}update(e,t){e.position.y+=this.jumpVelocity*t,this.jumpVelocity-=$l*t,e.setJumpVelocity(this.jumpVelocity);const n=e.position.y-this.baseY,s=qs*qs/(2*$l),r=Math.max(0,Math.min(1,n/s));e.setJumpProgress(r);const a=Math.max(this.baseY,this.terrainY);return e.position.y<=a&&this.jumpVelocity<0?(e.position.y=a,e.triggerLandingSquash(),new br):null}handleJump(e){return null}handleCrouch(e,t){}handleWaterChange(e,t){return t?new ah:null}getSpeedMultiplier(){return 1}canJump(){return!1}canCrouch(){return!1}updateBaseY(e){e>this.baseY&&(this.baseY=e)}getBaseY(){return this.baseY}setTerrainY(e){this.terrainY=e}handleCeilingHit(e,t){this.jumpVelocity>0&&(e.position.y=t,this.jumpVelocity=-.5,e.setJumpVelocity(this.jumpVelocity))}getDisplayName(){return this.jumpVelocity>0?"jumping":"falling"}}class ah{name="swimming";enter(e){e.setSwimmingInternal(!0),e.setCrouchingInternal(!1),e.setIsJumping(!1)}exit(e){e.setSwimmingInternal(!1)}update(e,t){return null}handleJump(e){return null}handleCrouch(e,t){}handleWaterChange(e,t){return t?null:new br}getSpeedMultiplier(){return n0}canJump(){return!1}canCrouch(){return!1}getDisplayName(){return"swimming"}}class i0{currentState;player;constructor(e,t=new br){this.player=e,this.currentState=t,this.currentState.enter(e)}getStateName(){return this.currentState.getDisplayName()}getCurrentState(){return this.currentState}transitionTo(e){this.currentState.exit(this.player),this.currentState=e,this.currentState.enter(this.player)}update(e){const t=this.currentState.update(this.player,e);t&&this.transitionTo(t)}handleJump(){const e=this.currentState.handleJump(this.player);return e?(this.transitionTo(e),!0):!1}handleCrouch(e){this.currentState.handleCrouch(this.player,e)}handleWaterChange(e){const t=this.currentState.handleWaterChange(this.player,e);t&&this.transitionTo(t)}getSpeedMultiplier(){return this.currentState.getSpeedMultiplier()}canJump(){return this.currentState.canJump()}canCrouch(){return this.currentState.canCrouch()}forceState(e){this.transitionTo(e)}updateTerrainY(e){this.currentState.name==="jumping"&&this.currentState.setTerrainY(e)}handleFall(){return this.currentState.name==="grounded"?(this.transitionTo(new rh(0)),!0):!1}isInAir(){return this.currentState.name==="jumping"}handleCeilingHit(e){return this.currentState.name==="jumping"?(this.currentState.handleCeilingHit(this.player,e),!0):!1}getJumpVelocity(){return this.currentState.name==="jumping"?this.player.getJumpVelocity():0}}const js=64;function $e(i,e,t,n){return{u:i/js,v:1-(e+n)/js,uw:t/js,vh:n/js}}const Ai={head:{front:$e(8,8,8,8),back:$e(24,8,8,8),top:$e(8,0,8,8),bottom:$e(16,0,8,8),right:$e(16,8,8,8),left:$e(0,8,8,8)},body:{front:$e(20,20,8,12),back:$e(32,20,8,12),top:$e(20,16,8,4),bottom:$e(28,16,8,4),right:$e(16,20,4,12),left:$e(28,20,4,12)},rightArm:{front:$e(44,20,4,12),back:$e(52,20,4,12),top:$e(44,16,4,4),bottom:$e(48,16,4,4),right:$e(40,20,4,12),left:$e(48,20,4,12)},leftArm:{front:$e(36,52,4,12),back:$e(44,52,4,12),top:$e(36,48,4,4),bottom:$e(40,48,4,4),right:$e(40,52,4,12),left:$e(32,52,4,12)},rightLeg:{front:$e(4,20,4,12),back:$e(12,20,4,12),top:$e(4,16,4,4),bottom:$e(8,16,4,4),right:$e(0,20,4,12),left:$e(8,20,4,12)},leftLeg:{front:$e(20,52,4,12),back:$e(28,52,4,12),top:$e(20,48,4,4),bottom:$e(24,48,4,4),right:$e(24,52,4,12),left:$e(16,52,4,12)}},s0=.46634,ql=1,jl=1,r0=.4,a0=-2.5,o0=.3,Zl=.15,Jl=.15,Kl=.5,l0=12,c0=-1.8,aa=.25,oa=4,h0=8,u0=10,d0={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3};class f0{position;mesh;scene;stateMachine;head;body;leftArm;rightArm;leftLeg;rightLeg;shadow;limbSwing=0;limbSwingAmount=0;previousPosition;_isJumping=!1;_jumpVelocity=0;baseY=64;_jumpProgress=0;landingSquashTimer=0;_isCrouching=!1;crouchAmount=0;_isSwimming=!1;swimAmount=0;swimCycle=0;swimPose=d0;isPunching=!1;punchProgress=0;punchTimer=0;texture=null;material=null;currentBlockType=l.Grass;footstepDistance=0;wasSwimming=!1;FOOTSTEP_INTERVAL=1.8;constructor(e,t,n){this.scene=e,this.position=new N(t,64,n),this.previousPosition=this.position.clone(),this.stateMachine=new i0(this,new br),this.mesh=this.createPlaceholderMesh(),this.mesh.rotation.order="YXZ",this.setMeshRenderOrder(this.mesh,-5),this.mesh.position.copy(this.position),e.add(this.mesh),this.createShadow(),this.loadTexture()}async loadTexture(){return new Promise(e=>{new Mr().load("/texturepack/assets/minecraft/textures/entity/player/wide/steve.png",n=>{n.magFilter=et,n.minFilter=et,n.colorSpace=xt,this.texture=n,this.scene.remove(this.mesh),this.mesh.traverse(s=>{s instanceof qe&&(s.geometry.dispose(),s.material instanceof Gt&&s.material.dispose())}),this.mesh=this.createPlayerMesh(),this.mesh.rotation.order="YXZ",this.setMeshRenderOrder(this.mesh,-5),this.mesh.position.copy(this.position),this.scene.add(this.mesh),e()},void 0,()=>{console.warn("Failed to load Steve texture, using placeholder colors"),e()})})}createPlaceholderMesh(){const e=new Vt,t=new Hn({color:13014380,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),n=new Hn({color:47288,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),s=new Hn({color:3881912,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),r=new Hn({color:4863784,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),a=1.62/32,o=new kt(8*a,8*a,8*a);this.head=new qe(o,t),this.head.position.y=24*a+4*a,e.add(this.head);const c=new kt(8.2*a,2*a,8.2*a),h=new qe(c,r);h.position.y=29*a,e.add(h);const u=new kt(8*a,12*a,4*a);return this.body=new qe(u,n),this.body.position.y=12*a+6*a,e.add(this.body),this.rightArm=this.createLimbGroup(4*a,12*a,4*a,t),this.rightArm.position.set(-6*a,24*a,0),e.add(this.rightArm),this.leftArm=this.createLimbGroup(4*a,12*a,4*a,t),this.leftArm.position.set(6*a,24*a,0),e.add(this.leftArm),this.rightLeg=this.createLimbGroup(4*a,12*a,4*a,s),this.rightLeg.position.set(-2*a,12*a,0),e.add(this.rightLeg),this.leftLeg=this.createLimbGroup(4*a,12*a,4*a,s),this.leftLeg.position.set(2*a,12*a,0),e.add(this.leftLeg),this.enableMeshLighting(e),e}createPlayerMesh(){const e=new Vt,t=1.62/32,n=this.texture?new Hn({map:this.texture,emissive:16777215,emissiveMap:this.texture,emissiveIntensity:.5,transparent:!0,alphaTest:.1,roughness:.88,metalness:0}):new Hn({color:13014380,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5});this.material=n;const s=new Hn({color:47288,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),r=new Hn({color:3881912,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),a=this.createTexturedBox(8*t,8*t,8*t,Ai.head);this.head=new qe(a,(this.texture,n)),this.head.position.y=24*t+4*t,e.add(this.head);const o=this.createTexturedBox(8*t,12*t,4*t,Ai.body);return this.body=new qe(o,this.texture?n:s),this.body.position.y=12*t+6*t,e.add(this.body),this.rightArm=this.createTexturedLimbGroup(4*t,12*t,4*t,Ai.rightArm,(this.texture,n)),this.rightArm.position.set(-6*t,24*t,0),e.add(this.rightArm),this.leftArm=this.createTexturedLimbGroup(4*t,12*t,4*t,Ai.leftArm,(this.texture,n)),this.leftArm.position.set(6*t,24*t,0),e.add(this.leftArm),this.rightLeg=this.createTexturedLimbGroup(4*t,12*t,4*t,Ai.rightLeg,this.texture?n:r),this.rightLeg.position.set(-2*t,12*t,0),e.add(this.rightLeg),this.leftLeg=this.createTexturedLimbGroup(4*t,12*t,4*t,Ai.leftLeg,this.texture?n:r),this.leftLeg.position.set(2*t,12*t,0),e.add(this.leftLeg),this.enableMeshLighting(e),e}enableMeshLighting(e){e.traverse(t=>{t instanceof qe&&(t.castShadow=!0,t.receiveShadow=!1)})}setMeshRenderOrder(e,t){e.renderOrder=t,e.traverse(n=>{n.renderOrder=t})}createShadow(){this.shadow&&(this.scene.remove(this.shadow),this.shadow.geometry.dispose(),this.shadow.material instanceof Gt&&this.shadow.material.dispose());const e=new Sr(.4,16),t=new ft({color:0,transparent:!0,opacity:.3});this.shadow=new qe(e,t),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.set(this.position.x,this.baseY+.01,this.position.z),this.scene.add(this.shadow)}createLimbGroup(e,t,n,s){const r=new Vt,a=new kt(e,t,n),o=new qe(a,s);return o.position.y=-t/2,r.add(o),r}createTexturedLimbGroup(e,t,n,s,r){const a=new Vt,o=this.createTexturedBox(e,t,n,s),c=new qe(o,r);return c.position.y=-t/2,a.add(c),a}createTexturedBox(e,t,n,s){const r=new kt(e,t,n),a=r.getAttribute("uv"),o=a.array,c=[s.right,s.left,s.top,s.bottom,s.front,s.back];for(let h=0;h<6;h++){const u=c[h],d=h*8;o[d+0]=u.u,o[d+1]=u.v+u.vh,o[d+2]=u.u+u.uw,o[d+3]=u.v+u.vh,o[d+4]=u.u,o[d+5]=u.v,o[d+6]=u.u+u.uw,o[d+7]=u.v}return a.needsUpdate=!0,r}jump(){this.stateMachine.handleJump()}fall(){this.stateMachine.handleFall()}isInAir(){return this.stateMachine.isInAir()}get jumping(){return this._isJumping}setCrouching(e){this.stateMachine.handleCrouch(e)}get crouching(){return this._isCrouching}getSpeedMultiplier(){return this.stateMachine.getSpeedMultiplier()}setSwimming(e){this.stateMachine.handleWaterChange(e)}setIsJumping(e){this._isJumping=e}setJumpVelocity(e){this._jumpVelocity=e}setJumpProgress(e){this._jumpProgress=e}setCrouchingInternal(e){this._isCrouching=e}setSwimmingInternal(e){this._isSwimming=e}triggerLandingSquash(){this.landingSquashTimer=Jl}getStateName(){return this.stateMachine.getStateName()}canJump(){return this.stateMachine.canJump()}canCrouch(){return this.stateMachine.canCrouch()}updateTerrainY(e){this.stateMachine.updateTerrainY(e)}hitCeiling(e){return this.stateMachine.handleCeilingHit(e)}getJumpVelocity(){return this._jumpVelocity}syncBaseY(){this.baseY=this.position.y}setSwimPose(e){this.swimPose=e}get swimming(){return this._isSwimming}punch(){this.isPunching||(this.isPunching=!0,this.punchTimer=aa,this.punchProgress=0)}get punching(){return this.isPunching}setCurrentBlockType(e){this.currentBlockType=e}update(e){this.stateMachine.update(e),this.landingSquashTimer>0&&(this.landingSquashTimer-=e,this.landingSquashTimer<0&&(this.landingSquashTimer=0));const t=this._isCrouching?1:0;this.crouchAmount+=(t-this.crouchAmount)*l0*e,this.crouchAmount=Math.max(0,Math.min(1,this.crouchAmount));const n=this._isSwimming?1:0;if(this.swimAmount+=(n-this.swimAmount)*u0*e,this.swimAmount=Math.max(0,Math.min(1,this.swimAmount)),this.isPunching){this.punchTimer-=e;const d=aa-this.punchTimer,p=aa/2;d<p?this.punchProgress=d/p:this.punchProgress=1-(d-p)/p,this.punchTimer<=0&&(this.isPunching=!1,this.punchProgress=0,this.punchTimer=0)}const s=this.position.x-this.previousPosition.x,r=this.position.z-this.previousPosition.z,a=Math.sqrt(s*s+r*r),c=a/Math.max(e,.001)>.1,h=vt();if(this._isSwimming&&!this.wasSwimming&&h.playSplash(),this.wasSwimming=this._isSwimming,c&&!this._isJumping){this.footstepDistance+=a;const d=this._isCrouching?this.FOOTSTEP_INTERVAL*1.5:this.FOOTSTEP_INTERVAL;this.footstepDistance>=d&&(this.footstepDistance=0,this._isSwimming?h.playSwim():h.playFootstep(this.currentBlockType))}if(this._isSwimming&&(c?this.swimCycle+=e*oa:this.swimCycle+=e*oa*.25),c){const d=this._isCrouching?.3:1;this.limbSwing+=a*4*d}const u=c?1:0;if(this.limbSwingAmount+=(u-this.limbSwingAmount)*r0,this.rightArm&&this.leftArm&&this.rightLeg&&this.leftLeg){const d=this.limbSwing*s0;let p=1,g=1;if(this.landingSquashTimer>0){const _=this.landingSquashTimer/Jl;p=1-Zl*_,g=1+Zl*.5*_}const v=this._isJumping?Math.sin(this._jumpProgress*Math.PI):0;if(this.swimAmount>.1){const _=this.swimAmount,m=this.swimPose,f=Math.sin(this.swimCycle)*m.armStrokeAmplitude,w=Math.sin(this.swimCycle+Math.PI)*m.armStrokeAmplitude,M=-m.armForwardAngle;this.rightArm.rotation.x=M+f*_,this.leftArm.rotation.x=M+w*_,this.rightArm.rotation.z=-.15*_,this.leftArm.rotation.z=.15*_}else if(this._isJumping){const _=a0*v;this.rightArm.rotation.x=_,this.leftArm.rotation.x=_,this.rightArm.rotation.z=-.3*v,this.leftArm.rotation.z=.3*v}else if(this.crouchAmount>.5){const _=Kl*this.crouchAmount;this.rightArm.rotation.x=_,this.leftArm.rotation.x=_,this.rightArm.rotation.z=0,this.leftArm.rotation.z=0}else{const _=Math.cos(d)*ql*this.limbSwingAmount,m=Math.cos(d+Math.PI)*ql*this.limbSwingAmount;this.rightArm.rotation.x=_,this.leftArm.rotation.x=m,this.rightArm.rotation.z=0,this.leftArm.rotation.z=0}if(this.isPunching&&this.punchProgress>0){const _=Math.sin(this.punchProgress*Math.PI),m=c0*_;this.rightArm.rotation.x=m,this.rightArm.rotation.z=-.2*_}if(this.swimAmount>.1){const _=this.swimCycle*(h0/oa),m=this.swimAmount,f=this.swimPose,w=Math.sin(_)*f.legKickAmplitude,M=Math.sin(_+Math.PI)*f.legKickAmplitude;this.rightLeg.rotation.x=w*m,this.leftLeg.rotation.x=M*m,this.rightLeg.rotation.z=0,this.leftLeg.rotation.z=0}else if(this._isJumping){const _=o0*v;this.rightLeg.rotation.x=_,this.leftLeg.rotation.x=_,this.rightLeg.rotation.z=-.15*v,this.leftLeg.rotation.z=.15*v}else{const _=this.crouchAmount>.5?jl*.5:jl;this.rightLeg.rotation.x=Math.cos(d+Math.PI)*_*this.limbSwingAmount,this.leftLeg.rotation.x=Math.cos(d)*_*this.limbSwingAmount,this.rightLeg.rotation.z=0,this.leftLeg.rotation.z=0}if(this.body&&(this.body.scale.set(g,p,g),this.swimAmount>.1?this.body.rotation.x=this.swimPose.bodyRotationX*this.swimAmount:this.crouchAmount>.01?this.body.rotation.x=Kl*this.crouchAmount:this.body.rotation.x=0),this.head)if(this.swimAmount>.1)this.head.rotation.x=this.swimPose.headRotationX*this.swimAmount,this.head.position.y=1.4175,this.head.position.z=0;else if(this._isJumping)this.head.rotation.x=-.2*v,this.head.position.y=1.4175,this.head.position.z=0;else{this.head.rotation.x=0;const f=Math.abs(Math.sin(d*2))*.02*this.limbSwingAmount,w=(1-p)*.1,M=.15*this.crouchAmount,b=.1*this.crouchAmount;this.head.position.y=1.4175+f-w-M,this.head.position.z=b}}if(this.previousPosition.set(this.position.x,this.previousPosition.y,this.position.z),this.mesh.position.copy(this.position),this.swimAmount>.01){const d=this.swimPose;this.mesh.rotation.x=d.meshRotationX*this.swimAmount,this.mesh.position.y+=d.pivotOffsetY*this.swimAmount+d.heightOffset*this.swimAmount,this.mesh.position.z-=d.pivotOffsetZ*this.swimAmount}else this.mesh.rotation.x=0;if(this.shadow&&(this.shadow.visible=!this._isSwimming),this.shadow){this.shadow.position.x=this.position.x,this.shadow.position.z=this.position.z,this.shadow.position.y=this.baseY+.01;const d=this.position.y-this.baseY,p=1,g=2,_=Math.min(d/1.25,1),m=p+(g-p)*_;this.shadow.scale.set(m,m,1);const f=this.shadow.material,w=.3,M=.15;f.opacity=w-(w-M)*_}}move(e,t){this.position.x+=e,this.position.z+=t,this.mesh.position.x=this.position.x,this.mesh.position.z=this.position.z,(e!==0||t!==0)&&(this.mesh.rotation.y=Math.atan2(e,t))}setY(e){this._isJumping||(this.position.y=e,this.baseY=e),this.mesh.position.y=this.position.y,this.shadow&&(this.shadow.position.y=this.baseY+.01)}getMesh(){return this.mesh}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(e=>{e instanceof qe&&(e.geometry.dispose(),e.material instanceof Gt&&e.material.dispose())}),this.texture&&this.texture.dispose(),this.shadow&&(this.scene.remove(this.shadow),this.shadow.geometry.dispose(),this.shadow.material instanceof Gt&&this.shadow.material.dispose())}}const p0=new Set([l.Sand,l.RedSand,l.Snow,l.SnowBlock,l.Ice,l.PackedIce,l.BlueIce,l.BirchLog,l.Clay,l.Terracotta,l.CherryLeaves]);class m0{scene;group;currentFace="top";visible=!1;currentColor=16777215;faceLines=new Map;constructor(e){this.scene=e,this.group=new Vt;const t=.505,n=new no({color:16777215,linewidth:2,transparent:!0,opacity:1,depthTest:!1}),s={top:[-t,t,-t,t,t,-t,t,t,-t,t,t,t,t,t,t,-t,t,t,-t,t,t,-t,t,-t],bottom:[-t,-t,-t,t,-t,-t,t,-t,-t,t,-t,t,t,-t,t,-t,-t,t,-t,-t,t,-t,-t,-t],right:[t,-t,-t,t,t,-t,t,t,-t,t,t,t,t,t,t,t,-t,t,t,-t,t,t,-t,-t],left:[-t,-t,-t,-t,t,-t,-t,t,-t,-t,t,t,-t,t,t,-t,-t,t,-t,-t,t,-t,-t,-t],front:[-t,-t,t,t,-t,t,t,-t,t,t,t,t,t,t,t,-t,t,t,-t,t,t,-t,-t,t],back:[-t,-t,-t,t,-t,-t,t,-t,-t,t,t,-t,t,t,-t,-t,t,-t,-t,t,-t,-t,-t,-t]};for(const[r,a]of Object.entries(s)){const o=new Xt;o.setAttribute("position",new At(a,3));const c=new wg(o,n.clone());c.visible=!1,c.renderOrder=999,this.faceLines.set(r,c),this.group.add(c)}this.group.visible=!1,e.add(this.group)}setPosition(e,t,n,s){this.group.position.set(e,t,n),s&&this.setFace(s)}setFace(e){this.currentFace=e;for(const[t,n]of this.faceLines)n.visible=t===e}setVisible(e){this.visible=e,this.group.visible=e,e&&this.setFace(this.currentFace)}isVisible(){return this.visible}getPosition(){return this.group.position.clone()}getFace(){return this.currentFace}setColorForBlock(e){const t=e!==null&&p0.has(e)?0:16777215;if(t!==this.currentColor){this.currentColor=t;for(const n of this.faceLines.values())n.material instanceof no&&n.material.color.setHex(t)}}destroy(){this.scene.remove(this.group);for(const e of this.faceLines.values())e.geometry.dispose(),e.material instanceof Gt&&e.material.dispose()}}function g0(i){const e=Math.abs(i.x),t=Math.abs(i.y),n=Math.abs(i.z);return t>=e&&t>=n?i.y>0?"top":"bottom":e>=t&&e>=n?i.x>0?"right":"left":i.z>0?"front":"back"}const Ms=`
  @font-face {
    font-family: 'Minecraft';
    src: url('https://cdn.jsdelivr.net/gh/South-Paw/typeface-minecraft@master/files/minecraft.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/South-Paw/typeface-minecraft@master/files/minecraft.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`,ot='"Minecraft", monospace';class v0{container;visible=!1;constructor(){this.container=document.createElement("div"),this.container.className="debug-ui-3d",this.container.style.display="none",this.container.innerHTML=`
      <div class="debug-panel">
        <div class="debug-row">
          <span class="debug-label">FPS:</span>
          <span class="debug-value" id="debug-fps">--</span>
        </div>
        <div class="debug-row">
          <span class="debug-label">Memory:</span>
          <span class="debug-value" id="debug-memory">--</span>
        </div>
        <div class="debug-row">
          <span class="debug-label">Chunks:</span>
          <span class="debug-value" id="debug-chunks">--</span>
        </div>
        <div class="debug-row debug-seed">
          Seed: <span id="debug-seed">--</span>
        </div>
        <hr class="debug-divider">
        <div class="debug-row">
          <span class="debug-label">🔺 Triangles:</span>
          <span class="debug-value" id="debug-triangles">--</span>
        </div>
        <div class="debug-row">
          <span class="debug-label">🎨 Draw Calls:</span>
          <span class="debug-value" id="debug-drawcalls">--</span>
        </div>
        <hr class="debug-divider">
        <div class="debug-row">
          <span class="debug-label">📍 Position:</span>
          <span class="debug-value" id="debug-position">--</span>
        </div>
        <div class="debug-row">
          <span class="debug-label">🔍 Zoom:</span>
          <span class="debug-value" id="debug-zoom">--</span>
        </div>
        <div class="debug-row">
          <span class="debug-label">🌍 Biome:</span>
          <span class="debug-value" id="debug-biome">--</span>
        </div>
        <div class="debug-row">
          <span class="debug-label">🏃 State:</span>
          <span class="debug-value" id="debug-state">--</span>
        </div>
        <hr class="debug-divider">
        <div class="debug-row">
          <span class="debug-label">👟 Block Below:</span>
          <span class="debug-value" id="debug-block-below">--</span>
        </div>
        <div class="debug-row">
          <span class="debug-label">🎯 Target:</span>
          <span class="debug-value" id="debug-target">--</span>
        </div>
        <hr class="debug-divider">
        <div class="debug-controls">
          <div class="control-row">F3 - Toggle Debug</div>
        </div>
      </div>
    `,this.addStyles(),document.body.appendChild(this.container)}addStyles(){if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}const e=document.createElement("style");e.textContent=`
      .debug-ui-3d {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
        font-family: ${ot};
        font-size: 12px;
        image-rendering: pixelated;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .debug-panel {
        background: rgba(0, 0, 0, 0.7);
        border: 3px solid;
        border-top-color: #555;
        border-left-color: #555;
        border-right-color: #1a1a1a;
        border-bottom-color: #1a1a1a;
        padding: 12px 16px;
        color: #fff;
        min-width: 220px;
        box-shadow: inset 1px 1px 0 rgba(255,255,255,0.1);
      }
      
      .debug-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4px 0;
      }
      
      .debug-label {
        color: #aaa;
        text-shadow: 1px 1px 0 #222;
      }
      
      .debug-value {
        color: #55ffff;
        text-shadow: 1px 1px 0 #003333;
      }
      
      .debug-seed {
        color: #777;
        font-size: 10px;
        justify-content: flex-start;
        gap: 4px;
        text-shadow: 1px 1px 0 #111;
      }
      
      .debug-divider {
        border: none;
        border-top: 2px solid #333;
        margin: 10px 0;
      }
      
      .debug-controls {
        color: #aaa;
        font-size: 10px;
        text-shadow: 1px 1px 0 #222;
      }
      
      .control-row {
        margin: 3px 0;
        padding-left: 8px;
      }
      
      #debug-biome {
        color: #55ff55;
        text-shadow: 1px 1px 0 #003300;
      }
      
      #debug-position {
        color: #ff55ff;
        text-shadow: 1px 1px 0 #330033;
      }
      
      #debug-state {
        color: #ffaa00;
        text-shadow: 1px 1px 0 #332200;
      }
      
      #debug-triangles,
      #debug-drawcalls {
        color: #ff7777;
        text-shadow: 1px 1px 0 #330011;
      }
      
      #debug-block-below {
        color: #77aaff;
        text-shadow: 1px 1px 0 #112233;
      }
      
      #debug-target {
        color: #ffff77;
        text-shadow: 1px 1px 0 #333300;
      }
    `,document.head.appendChild(e)}update(e){if(!this.visible)return;const t=(s,r)=>{const a=document.getElementById(s);a&&(a.textContent=r)};t("debug-fps",String(e.fps)),t("debug-chunks",String(e.chunks)),t("debug-seed",e.seed.toString(16).toUpperCase()),t("debug-position",`(${e.playerX.toFixed(0)}, ${e.playerY.toFixed(0)}, ${e.playerZ.toFixed(0)})`),t("debug-zoom",`${e.zoom.toFixed(1)}x`),t("debug-biome",e.biome),t("debug-state",e.playerState),t("debug-triangles",this.formatNumber(e.triangles)),t("debug-drawcalls",String(e.drawCalls)),t("debug-block-below",e.blockBelow||"Air"),t("debug-target",e.targetedBlock||"None");const n=performance.memory;n&&t("debug-memory",`${(n.usedJSHeapSize/1024/1024).toFixed(1)} MB`)}formatNumber(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}toggleVisibility(){this.visible=!this.visible,this.container.style.display=this.visible?"block":"none"}destroy(){this.container.remove()}}const Ao=new Set,Ql=new N(50,100,50).normalize();function _0(i){Ao.add(i)}function ec(i){Ql.set(i.sunX??50,i.sunY??100,i.sunZ??50).normalize();for(const e of Ao)i.shaderEnabled!==void 0&&e.uniforms.shaderEnabled&&(e.uniforms.shaderEnabled.value=i.shaderEnabled),i.topBrightness!==void 0&&e.uniforms.topBrightness&&(e.uniforms.topBrightness.value=i.topBrightness),i.bottomBrightness!==void 0&&e.uniforms.bottomBrightness&&(e.uniforms.bottomBrightness.value=i.bottomBrightness),i.northSouthBrightness!==void 0&&e.uniforms.northSouthBrightness&&(e.uniforms.northSouthBrightness.value=i.northSouthBrightness),i.eastWestBrightness!==void 0&&e.uniforms.eastWestBrightness&&(e.uniforms.eastWestBrightness.value=i.eastWestBrightness),i.sunBoost!==void 0&&e.uniforms.sunBoost&&(e.uniforms.sunBoost.value=i.sunBoost),i.globalLight!==void 0&&e.uniforms.globalLight&&(e.uniforms.globalLight.value=i.globalLight),i.nightLift!==void 0&&e.uniforms.nightLift&&(e.uniforms.nightLift.value=i.nightLift),e.uniforms.sunDirection&&e.uniforms.sunDirection.value.copy(Ql),i.heightDarkening!==void 0&&e.uniforms.heightDarkening&&(e.uniforms.heightDarkening.value=i.heightDarkening),i.depthShading!==void 0&&e.uniforms.depthShading&&(e.uniforms.depthShading.value=i.depthShading),i.baseHeight!==void 0&&e.uniforms.baseHeight&&(e.uniforms.baseHeight.value=i.baseHeight)}function x0(i){for(const e of Ao)e.uniforms.uTime&&(e.uniforms.uTime.value=i)}const S0=new N(40,75,55).normalize(),Zs={TOP:1,BOTTOM:.4,NORTH:.7,EAST:.75},M0=`
  uniform float topBrightness;
  uniform float bottomBrightness;
  uniform float northSouthBrightness;
  uniform float eastWestBrightness;
  uniform vec3 sunDirection;
  uniform float sunBoost;
  uniform float globalLight;
  uniform bool shaderEnabled;
  uniform float heightDarkening;
  uniform float depthShading;
  uniform float baseHeight;
  uniform float uTime;
  uniform float uWaterMode;
  uniform float uWaveStrength;
  uniform float uWaveScale;
  uniform float uFresnelStrength;
  uniform float uLeafMode;
  uniform float uLeafSwayAmplitude;
  uniform float uLeafSwaySpeed;
  
  varying vec2 vUv;
  varying float vBrightness;
  varying float vFaceLight;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  
  // Shadow map support
  #include <common>
  #include <shadowmap_pars_vertex>
  
  void main() {
    vUv = uv;
    vec3 localPosition = position;
    vec4 baseWorldPosition = modelMatrix * vec4(position, 1.0);

    if (uLeafMode > 0.5) {
      float canopyFactor = clamp((position.y + 0.5) * 0.8, 0.0, 1.0);
      float windA = sin((baseWorldPosition.x + baseWorldPosition.z) * 0.38 + (uTime * uLeafSwaySpeed));
      float windB = cos((baseWorldPosition.x - baseWorldPosition.z) * 0.31 + (uTime * uLeafSwaySpeed * 0.73));
      localPosition.x += windA * uLeafSwayAmplitude * canopyFactor;
      localPosition.z += windB * (uLeafSwayAmplitude * 0.75) * canopyFactor;
    }

    // Get world position for depth calculations
    vec4 worldPosition = modelMatrix * vec4(localPosition, 1.0);
    
    // Transform normal to world space (required for shadow bias)
    vec3 objectNormal = normal;
    vec3 transformedNormal = normalMatrix * objectNormal;
    
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(transformedNormal);

    // If shader disabled, use flat brightness
    if (!shaderEnabled) {
      vBrightness = 1.0;
      vFaceLight = 1.0;
    } else {
      vec3 n = normalize(transformedNormal);
      vec2 sunHorizRaw = vec2(sunDirection.x, sunDirection.z);
      float sunHorizLen = length(sunHorizRaw);
      vec2 sunHoriz = sunHorizLen > 0.0001 ? (sunHorizRaw / sunHorizLen) : vec2(1.0, 0.0);
      vec2 normalHorizRaw = vec2(n.x, n.z);
      float normalHorizLen = length(normalHorizRaw);
      vec2 normalHoriz = normalHorizLen > 0.0001 ? (normalHorizRaw / normalHorizLen) : vec2(1.0, 0.0);
      float sideDot = max(dot(normalHoriz, sunHoriz), 0.0);
      float topMask = smoothstep(0.55, 0.92, n.y);
      float bottomMask = smoothstep(-0.92, -0.55, n.y);
      float sideMask = clamp(1.0 - topMask - bottomMask, 0.0, 1.0);
      float topLight = 1.0;
      float bottomLight = 0.40;
      float sideLight = mix(0.50, 1.00, sideDot);
      float faceLight = topMask * topLight + sideMask * sideLight + bottomMask * bottomLight;
      vFaceLight = faceLight;
      float ambient = 0.14 + (0.45 * globalLight);
      float brightness = ambient + (faceLight * sunBoost);
      
      // Height-based darkening
      float heightDiff = worldPosition.y - baseHeight;
      float heightFactor = clamp(heightDiff / 10.0, -1.0, 1.0);
      brightness *= 1.0 + (heightFactor * heightDarkening * 0.5);
      
      // Isometric depth shading
      float isoDepth = (worldPosition.x + worldPosition.z) / 30.0;
      float depthFactor = clamp(isoDepth, -1.0, 1.0);
      brightness *= 0.85 + (depthFactor * depthShading * 0.35);
      
      vBrightness = clamp(brightness, 0.14, 1.00);
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(localPosition, 1.0);
    
    // Calculate shadow coordinates
    #include <shadowmap_vertex>
  }
`,b0=`
  uniform float topBrightness;
  uniform float bottomBrightness;
  uniform float northSouthBrightness;
  uniform float eastWestBrightness;
  uniform vec3 sunDirection;
  uniform float sunBoost;
  uniform float globalLight;
  uniform bool shaderEnabled;
  uniform float heightDarkening;
  uniform float depthShading;
  uniform float baseHeight;
  uniform float uTime;
  uniform float uWaterMode;
  uniform float uWaveStrength;
  uniform float uWaveScale;
  uniform float uFresnelStrength;
  uniform float uLeafMode;
  uniform float uLeafSwayAmplitude;
  uniform float uLeafSwaySpeed;
  
  varying vec2 vUv;
  varying float vBrightness;
  varying float vFaceLight;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  
  // Shadow map support
  #include <common>
  #include <shadowmap_pars_vertex>
  
  void main() {
    vUv = uv;
    vec3 localPosition = position;
    vec4 baseWorldPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);

    if (uLeafMode > 0.5) {
      float canopyFactor = clamp((position.y + 0.5) * 0.8, 0.0, 1.0);
      float windA = sin((baseWorldPosition.x + baseWorldPosition.z) * 0.38 + (uTime * uLeafSwaySpeed));
      float windB = cos((baseWorldPosition.x - baseWorldPosition.z) * 0.31 + (uTime * uLeafSwaySpeed * 0.73));
      localPosition.x += windA * uLeafSwayAmplitude * canopyFactor;
      localPosition.z += windB * (uLeafSwayAmplitude * 0.75) * canopyFactor;
    }

    // Get world position (account for instancing)
    vec4 worldPosition = modelMatrix * instanceMatrix * vec4(localPosition, 1.0);
    
    // Transform normal to world space (required for shadow bias)
    vec3 objectNormal = normal;
    vec3 transformedNormal = normalMatrix * objectNormal;
    
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(transformedNormal);

    if (!shaderEnabled) {
      vBrightness = 1.0;
      vFaceLight = 1.0;
    } else {
      vec3 n = normalize(transformedNormal);
      vec2 sunHorizRaw = vec2(sunDirection.x, sunDirection.z);
      float sunHorizLen = length(sunHorizRaw);
      vec2 sunHoriz = sunHorizLen > 0.0001 ? (sunHorizRaw / sunHorizLen) : vec2(1.0, 0.0);
      vec2 normalHorizRaw = vec2(n.x, n.z);
      float normalHorizLen = length(normalHorizRaw);
      vec2 normalHoriz = normalHorizLen > 0.0001 ? (normalHorizRaw / normalHorizLen) : vec2(1.0, 0.0);
      float sideDot = max(dot(normalHoriz, sunHoriz), 0.0);
      float topMask = smoothstep(0.55, 0.92, n.y);
      float bottomMask = smoothstep(-0.92, -0.55, n.y);
      float sideMask = clamp(1.0 - topMask - bottomMask, 0.0, 1.0);
      float topLight = 1.0;
      float bottomLight = 0.40;
      float sideLight = mix(0.50, 1.00, sideDot);
      float faceLight = topMask * topLight + sideMask * sideLight + bottomMask * bottomLight;
      vFaceLight = faceLight;
      float ambient = 0.14 + (0.45 * globalLight);
      float brightness = ambient + (faceLight * sunBoost);
      
      float heightDiff = worldPosition.y - baseHeight;
      float heightFactor = clamp(heightDiff / 10.0, -1.0, 1.0);
      brightness *= 1.0 + (heightFactor * heightDarkening * 0.5);
      
      float isoDepth = (worldPosition.x + worldPosition.z) / 30.0;
      float depthFactor = clamp(isoDepth, -1.0, 1.0);
      brightness *= 0.85 + (depthFactor * depthShading * 0.35);
      
      vBrightness = clamp(brightness, 0.14, 1.00);
    }
    
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(localPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Calculate shadow coordinates
    #include <shadowmap_vertex>
  }
`,y0=`
  uniform sampler2D map;
  uniform vec3 color;
  uniform float opacity;
  uniform float globalLight;
  uniform float nightLift;
  uniform float uTime;
  uniform float uWaterMode;
  uniform float uWaveStrength;
  uniform float uWaveScale;
  uniform float uFresnelStrength;
  
  varying vec2 vUv;
  varying float vBrightness;
  varying float vFaceLight;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  
  // Shadow map support
  #include <common>
  #include <packing>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  
  void main() {
    vec2 sampleUv = vUv;

    if (uWaterMode > 0.5) {
      float waveA = sin((vUv.x + uTime * 0.075) * uWaveScale) * cos((vUv.y - uTime * 0.06) * (uWaveScale * 0.86));
      float waveB = sin((vUv.y + uTime * 0.11) * (uWaveScale * 1.27));
      sampleUv += vec2(waveA, waveB) * uWaveStrength;
    }

    vec4 texColor = texture2D(map, sampleUv);
    
    // Calculate shadow (1.0 = fully lit, 0.0 = fully shadowed)
    float shadow = 1.0;
    
    #if defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 )
      DirectionalLightShadow directionalLight = directionalLightShadows[0];
      shadow = getShadow(
        directionalShadowMap[0],
        directionalLight.shadowMapSize,
        directionalLight.shadowIntensity,
        directionalLight.shadowBias,
        directionalLight.shadowRadius,
        vDirectionalShadowCoord[0]
      );
      // Keep shadows readable without washing them out.
      float shadowFloor = mix(0.58, 0.42, globalLight);
      shadow = shadowFloor + shadow * (1.0 - shadowFloor);
    #endif
    
    vec3 shadedColor = texColor.rgb * color * vBrightness * shadow;

    // Prevent very bright albedo blocks (sand/snow/ice/birch) from appearing self-lit at night.
    float texLuma = dot(texColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    float brightAlbedo = smoothstep(0.50, 1.0, texLuma);
    float nightAmount = clamp(1.0 - globalLight, 0.0, 1.0);
    shadedColor *= 1.0 - (brightAlbedo * nightAmount * 0.62);
    shadedColor = mix(shadedColor, pow(max(shadedColor, vec3(0.0)), vec3(1.25)), brightAlbedo * nightAmount * 0.70);
    // Ensure shadows on high-albedo materials (snow/birch) darken visibly instead of reading white.
    float shadowAmount = clamp(1.0 - shadow, 0.0, 1.0);
    float highAlbedoShadowDarken = 1.0 - (shadowAmount * brightAlbedo * 0.78);
    shadedColor *= highAlbedoShadowDarken;

    // Daylight high-albedo guard: keep snow/sand/birch bright, but prevent hard bloom blowout.
    float shadedLuma = dot(shadedColor, vec3(0.2126, 0.7152, 0.0722));
    float highlightMask = smoothstep(0.58, 1.00, shadedLuma);
    float directSunMask = smoothstep(0.80, 1.16, vBrightness);
    float albedoGuard = brightAlbedo * highlightMask * (0.55 + (0.65 * directSunMask));
    shadedColor *= 1.0 - (albedoGuard * 0.22);
    float maxChannel = max(max(shadedColor.r, shadedColor.g), shadedColor.b);
    float maxTarget = mix(1.0, 0.88, albedoGuard);
    if (maxChannel > maxTarget) {
      shadedColor *= maxTarget / maxChannel;
    }
    // Extra soft-knee rolloff for white-ish materials under direct sun to avoid bloom blowout.
    float postGuardLuma = dot(shadedColor, vec3(0.2126, 0.7152, 0.0722));
    float softKnee = smoothstep(0.62, 0.94, postGuardLuma) * brightAlbedo * directSunMask;
    shadedColor /= (1.0 + softKnee * 0.30);

    // Bloom-driving highlight lift should only apply to lit faces (sun-facing and not shadowed).
    if (uWaterMode < 0.5) {
      float litBloomMask = smoothstep(0.72, 0.98, vFaceLight) * smoothstep(0.72, 0.98, shadow);
      // Rebalance bloom: high-albedo blocks contribute less relative bloom than low/mid albedo blocks.
      float albedoBloomWeight = mix(1.00, 0.00, brightAlbedo);
      float sunlitLift = smoothstep(0.84, 1.12, vBrightness) * litBloomMask * albedoBloomWeight;
      shadedColor += vec3(0.012, 0.011, 0.010) * sunlitLift;
      // Suppress bloom-prone highlights on non-lit faces.
      float nonLitHighlight = smoothstep(0.58, 0.94, dot(shadedColor, vec3(0.2126, 0.7152, 0.0722))) * (1.0 - litBloomMask);
      shadedColor *= 1.0 - (nonLitHighlight * 0.28);
    }

    shadedColor *= nightLift;

    if (uWaterMode > 0.5) {
      vec3 worldNormal = normalize(vWorldNormal);
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float fresnel = pow(1.0 - max(dot(worldNormal, viewDir), 0.0), 2.2) * uFresnelStrength;
      float shimmer = sin((vWorldPosition.x + vWorldPosition.z) * 0.45 + uTime * 1.4) * 0.5 + 0.5;
      shadedColor += vec3(0.012, 0.020, 0.028) * shimmer + vec3(fresnel * 0.10);
    }

    // Apply tint, brightness, shadows, and water enhancements.
    gl_FragColor = vec4(clamp(shadedColor, vec3(0.0), vec3(1.0)), texColor.a * opacity);
    
    // Alpha test for leaves
    if (gl_FragColor.a < 0.1) discard;
  }
`;function Ht(i={}){const{map:e=null,color:t=new he(16777215),opacity:n=1,transparent:s=!1,side:r=Pn,instanced:a=!1,sunDirection:o=S0,sunBoost:c=.5,heightDarkening:h=0,depthShading:u=0,baseHeight:d=64,waterMode:p=!1,waveStrength:g=0,waveScale:v=0,fresnelStrength:_=0,leafMode:m=!1,leafSwayAmplitude:f=0,leafSwaySpeed:w=0}=i,M=new St({uniforms:vn.merge([ce.lights,{map:{value:e},color:{value:t},opacity:{value:n},shaderEnabled:{value:!0},sunDirection:{value:o.clone().normalize()},sunBoost:{value:c},globalLight:{value:1},nightLift:{value:1},topBrightness:{value:Zs.TOP},bottomBrightness:{value:Zs.BOTTOM},northSouthBrightness:{value:Zs.NORTH},eastWestBrightness:{value:Zs.EAST},heightDarkening:{value:h},depthShading:{value:u},baseHeight:{value:d},uTime:{value:0},uWaterMode:{value:p?1:0},uWaveStrength:{value:g},uWaveScale:{value:v},uFresnelStrength:{value:_},uLeafMode:{value:m?1:0},uLeafSwayAmplitude:{value:f},uLeafSwaySpeed:{value:w}}]),vertexShader:a?b0:M0,fragmentShader:y0,transparent:s,side:r,depthWrite:!s,lights:!0});return _0(M),M}function w0(i,e,t={}){const n=e.clone();return n.multiplyScalar(1.08),Ht({map:i,color:n,opacity:.4,transparent:!0,side:Et,instanced:!0,sunBoost:.16,waterMode:!0,waveStrength:t.waveStrength??.012,waveScale:t.waveScale??19,fresnelStrength:t.fresnelStrength??.45})}function la(i={}){return Ht({...i,instanced:!0})}function E0(i,e){return Ht({map:i,color:e,opacity:1,transparent:!0,side:Et,instanced:!1,sunBoost:.1,leafMode:!0,leafSwayAmplitude:.08,leafSwaySpeed:1.8})}function T0(i,e){return Ht({map:i,color:e,opacity:1,transparent:!0,side:Et,instanced:!0,sunBoost:.1,leafMode:!0,leafSwayAmplitude:.08,leafSwaySpeed:1.8})}const A0={[l.Grass]:"/textures/grass_block_top.png",[l.Dirt]:"/textures/dirt.png",[l.Sand]:"/textures/sand.png",[l.Stone]:"/textures/stone.png",[l.Gravel]:"/textures/gravel.png",[l.Bedrock]:"/textures/bedrock.png",[l.Snow]:"/textures/snow.png",[l.Ice]:"/textures/ice.png",[l.PackedIce]:"/textures/packed_ice.png",[l.BlueIce]:"/textures/blue_ice.png",[l.Clay]:"/textures/clay.png",[l.Podzol]:"/textures/podzol_top.png",[l.Mycelium]:"/textures/mycelium_top.png",[l.RedSand]:"/textures/red_sand.png",[l.Terracotta]:"/textures/terracotta.png",[l.OakLog]:"/textures/oak_log.png",[l.BirchLog]:"/textures/birch_log.png",[l.SpruceLog]:"/textures/spruce_log.png",[l.JungleLog]:"/textures/jungle_log.png",[l.AcaciaLog]:"/textures/acacia_log.png",[l.DarkOakLog]:"/textures/dark_oak_log.png",[l.CherryLog]:"/textures/cherry_log.png",[l.MangroveLog]:"/textures/mangrove_log.png",[l.OakLeaves]:"/textures/oak_leaves.png",[l.BirchLeaves]:"/textures/birch_leaves.png",[l.SpruceLeaves]:"/textures/spruce_leaves.png",[l.JungleLeaves]:"/textures/jungle_leaves.png",[l.AcaciaLeaves]:"/textures/acacia_leaves.png",[l.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[l.CherryLeaves]:"/textures/cherry_leaves.png",[l.MangroveLeaves]:"/textures/mangrove_leaves.png",[l.Cactus]:"/textures/cactus_side.png",[l.OakSapling]:"/textures/oak_sapling.png",[l.BirchSapling]:"/textures/birch_sapling.png",[l.SpruceSapling]:"/textures/spruce_sapling.png",[l.JungleSapling]:"/textures/jungle_sapling.png",[l.AcaciaSapling]:"/textures/acacia_sapling.png",[l.DarkOakSapling]:"/textures/dark_oak_sapling.png",[l.CherrySapling]:"/textures/cherry_sapling.png",[l.MangroveSapling]:"/textures/mangrove_sapling.png",[l.Water]:"/textures/water_still.png",[l.OakPlanks]:"/textures/oak_planks.png",[l.BirchPlanks]:"/textures/birch_planks.png",[l.SprucePlanks]:"/textures/spruce_planks.png",[l.JunglePlanks]:"/textures/jungle_planks.png",[l.AcaciaPlanks]:"/textures/acacia_planks.png",[l.DarkOakPlanks]:"/textures/dark_oak_planks.png",[l.CherryPlanks]:"/textures/cherry_planks.png",[l.MangrovePlanks]:"/textures/mangrove_planks.png",[l.StrippedOakLog]:"/textures/stripped_oak_log.png",[l.StrippedBirchLog]:"/textures/stripped_birch_log.png",[l.StrippedSpruceLog]:"/textures/stripped_spruce_log.png",[l.StrippedJungleLog]:"/textures/stripped_jungle_log.png",[l.StrippedAcaciaLog]:"/textures/stripped_acacia_log.png",[l.StrippedDarkOakLog]:"/textures/stripped_dark_oak_log.png",[l.StrippedCherryLog]:"/textures/stripped_cherry_log.png",[l.StrippedMangroveLog]:"/textures/stripped_mangrove_log.png",[l.OakDoor]:"/textures/oak_door_bottom.png",[l.BirchDoor]:"/textures/birch_door_bottom.png",[l.SpruceDoor]:"/textures/spruce_door_bottom.png",[l.JungleDoor]:"/textures/jungle_door_bottom.png",[l.AcaciaDoor]:"/textures/acacia_door_bottom.png",[l.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[l.CherryDoor]:"/textures/cherry_door_bottom.png",[l.MangroveDoor]:"/textures/mangrove_door_bottom.png",[l.OakTrapdoor]:"/textures/oak_trapdoor.png",[l.BirchTrapdoor]:"/textures/birch_trapdoor.png",[l.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[l.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[l.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[l.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[l.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[l.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"},tc={[l.OakLog]:"/textures/oak_log_top.png",[l.BirchLog]:"/textures/birch_log_top.png",[l.SpruceLog]:"/textures/spruce_log_top.png",[l.JungleLog]:"/textures/jungle_log_top.png",[l.AcaciaLog]:"/textures/acacia_log_top.png",[l.DarkOakLog]:"/textures/dark_oak_log_top.png",[l.CherryLog]:"/textures/cherry_log_top.png",[l.MangroveLog]:"/textures/mangrove_log_top.png",[l.Cactus]:"/textures/cactus_top.png",[l.StrippedOakLog]:"/textures/stripped_oak_log_top.png",[l.StrippedBirchLog]:"/textures/stripped_birch_log_top.png",[l.StrippedSpruceLog]:"/textures/stripped_spruce_log_top.png",[l.StrippedJungleLog]:"/textures/stripped_jungle_log_top.png",[l.StrippedAcaciaLog]:"/textures/stripped_acacia_log_top.png",[l.StrippedDarkOakLog]:"/textures/stripped_dark_oak_log_top.png",[l.StrippedCherryLog]:"/textures/stripped_cherry_log_top.png",[l.StrippedMangroveLog]:"/textures/stripped_mangrove_log_top.png"},nc={[l.Grass]:"/textures/grass_block_side.png",[l.Podzol]:"/textures/podzol_side.png",[l.Mycelium]:"/textures/mycelium_side.png"},ca={[l.Air]:0};class C0{loader;textures=new Map;logTopTextures=new Map;blockSideTextures=new Map;materials=new Map;constructor(){this.loader=new Mr}async loadTextures(){console.log("📦 Loading 3D textures...");const e=[];for(const[t,n]of Object.entries(A0)){const s=parseInt(t);e.push(this.loadTexture(s,n))}for(const[t,n]of Object.entries(tc)){const s=parseInt(t);e.push(this.loadLogTopTexture(s,n))}for(const[t,n]of Object.entries(nc)){const s=parseInt(t);e.push(this.loadBlockSideTexture(s,n))}await Promise.all(e),console.log(`✅ Loaded ${this.textures.size} textures + ${this.logTopTextures.size} log tops + ${this.blockSideTextures.size} block sides`)}async loadTexture(e,t){return new Promise(n=>{this.loader.load(t,s=>{s.magFilter=et,s.minFilter=et,s.colorSpace=xt,this.textures.set(e,s),n()},void 0,()=>{n()})})}async loadLogTopTexture(e,t){return new Promise(n=>{this.loader.load(t,s=>{s.magFilter=et,s.minFilter=et,s.colorSpace=xt,this.logTopTextures.set(e,s),n()},void 0,()=>{n()})})}async loadBlockSideTexture(e,t){return new Promise(n=>{this.loader.load(t,s=>{s.magFilter=et,s.minFilter=et,s.colorSpace=xt,this.blockSideTextures.set(e,s),n()},void 0,()=>{n()})})}isLogBlock(e){return ih(e)||tc[e]!==void 0}getMaterial(e,t){const n=`${e}_${t?.getHexString()||"none"}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=t||new he(16777215);let a;if(s)a=Ht({map:s.clone(),color:r,instanced:!1});else{const o=ca[e]||8947848;a=Ht({color:new he(o),instanced:!1})}return this.materials.set(n,a),a}getLogMaterials(e){const t=`log_materials_${e}`,n=this.materials.get(`${t}_side`),s=this.materials.get(`${t}_top`);if(n&&s)return[n,n,s,s,n,n];const r=this.textures.get(e),a=this.logTopTextures.get(e)||r,o=Ht(r?{map:r.clone(),color:new he(16777215),instanced:!1}:{color:new he(7033394),instanced:!1}),c=a?Ht({map:a.clone(),color:new he(16777215),instanced:!1}):o;return this.materials.set(`${t}_side`,o),this.materials.set(`${t}_top`,c),[o,o,c,c,o,o]}hasBlockSideTexture(e){return nc[e]!==void 0}getGrassBlockMaterials(e,t){const n=t?.getHexString()||"none",s=`grass_materials_${e}_${n}`,r=this.materials.get(`${s}_side`),a=this.materials.get(`${s}_top`);if(r&&a){const v=this.materials.get(`${s}_bottom`)||r;return[r,r,a,v,r,r]}const o=this.textures.get(e),c=this.blockSideTextures.get(e)||o,h=this.textures.get(l.Dirt),u=t||new he(16777215),d=Ht(o?{map:o.clone(),color:u,instanced:!1}:{color:new he(8174669),instanced:!1}),p=c?Ht({map:c.clone(),color:u,instanced:!1}):d,g=Ht(h?{map:h.clone(),color:new he(16777215),instanced:!1}:{color:new he(9135170),instanced:!1});return this.materials.set(`${s}_side`,p),this.materials.set(`${s}_top`,d),this.materials.set(`${s}_bottom`,g),[p,p,d,g,p,p]}getCactusMaterials(){const e="cactus_materials",t=this.materials.get(`${e}_side`),n=this.materials.get(`${e}_top`);if(t&&n)return[t,t,n,n,t,t];const s=this.textures.get(l.Cactus),r=this.logTopTextures.get(l.Cactus);let a,o;if(s){const c=s.clone();c.wrapS=ri,c.wrapT=ri,c.needsUpdate=!0,a=new ft({map:c})}else a=new ft({color:3968040});if(r){const c=r.clone();c.needsUpdate=!0,o=new ft({map:c})}else o=a;return this.materials.set(`${e}_side`,a),this.materials.set(`${e}_top`,o),[a,a,o,o,a,a]}getInstancedMaterial(e,t){const n=`instanced_${e}_${t?.getHexString()||"none"}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=t||new he(16777215);let a;if(s)a=la({map:s.clone(),color:r});else{const o=ca[e]||8947848;a=la({color:new he(o)})}return this.materials.set(n,a),a}getWaterMaterial(e){const t=e!==void 0?`water_${e}`:"water_default";if(this.materials.has(t))return this.materials.get(t);const n=this.textures.get(l.Water),s=e!==void 0?this.getWaterTint(e):new he(4159204),r=w0(n?.clone()||null,s,{waveStrength:.012,waveScale:19,fresnelStrength:.45});return this.materials.set(t,r),r}getWaterTint(e){const t={warm_ocean:45,deep_warm_ocean:46,lukewarm_ocean:47,deep_lukewarm_ocean:49,cold_ocean:43,deep_cold_ocean:44,deep_ocean:24,ocean:0,swamp:6,mangrove_swamp:51,frozen_ocean:10,deep_frozen_ocean:50},s={[t.warm_ocean]:[67,213,238],[t.deep_warm_ocean]:[67,213,238],[t.lukewarm_ocean]:[69,173,242],[t.deep_lukewarm_ocean]:[69,173,242],[t.cold_ocean]:[61,87,214],[t.deep_cold_ocean]:[61,87,214],[t.frozen_ocean]:[57,56,201],[t.deep_frozen_ocean]:[57,56,201],[t.deep_ocean]:[48,96,195],[t.ocean]:[63,118,228],[t.swamp]:[97,123,100],[t.mangrove_swamp]:[62,93,83]}[e]||[63,118,228];return new he(s[0]/255,s[1]/255,s[2]/255)}getLeavesMaterial(e,t){const n=`leaves_${e}_${t}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=this.getBiomeTint(t),a=E0(s?.clone()||null,r);return this.materials.set(n,a),a}getInstancedLeavesMaterial(e,t){const n=`instanced_leaves_${e}_${t}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=this.getBiomeTint(t),a=T0(s?.clone()||null,r);return this.materials.set(n,a),a}getGrassMaterial(e){const t=`instanced_grass_${e}`;if(this.materials.has(t))return this.materials.get(t);const n=this.textures.get(l.Grass),s=this.getBiomeTint(e),r=la({map:n?.clone()||null,color:s});return this.materials.set(t,r),r}getBiomeTint(e){const t={swamp:6,mangrove_swamp:51,jungle:21,bamboo_jungle:48,sparse_jungle:23,badlands:37,wooded_badlands:38,wooded_badlands_plateau:39,eroded_badlands:165,dark_forest:29,snowy_plains:12,snowy_taiga:30,snowy_slopes:184,snowy_beach:26,ice_spikes:140,frozen_peaks:182,grove:185,snowy_mountains:13,cherry_grove:186,savanna:35,savanna_plateau:36,windswept_savanna:163,desert:2,birch_forest:27,old_growth_birch_forest:155,taiga:5,old_growth_pine_taiga:32,old_growth_spruce_taiga:160},s={[t.swamp]:[106,112,57],[t.mangrove_swamp]:[141,154,50],[t.jungle]:[89,201,60],[t.bamboo_jungle]:[89,201,60],[t.sparse_jungle]:[89,201,60],[t.badlands]:[144,129,77],[t.wooded_badlands]:[144,129,77],[t.wooded_badlands_plateau]:[144,129,77],[t.eroded_badlands]:[144,129,77],[t.dark_forest]:[80,122,50],[t.snowy_plains]:[128,180,151],[t.snowy_taiga]:[128,180,151],[t.snowy_slopes]:[128,180,151],[t.snowy_beach]:[128,180,151],[t.ice_spikes]:[128,180,151],[t.frozen_peaks]:[128,180,151],[t.grove]:[128,180,151],[t.snowy_mountains]:[128,180,151],[t.cherry_grove]:[182,219,97],[t.savanna]:[191,183,85],[t.savanna_plateau]:[191,183,85],[t.windswept_savanna]:[191,183,85],[t.desert]:[191,183,85],[t.birch_forest]:[136,183,97],[t.old_growth_birch_forest]:[136,183,97],[t.taiga]:[134,175,97],[t.old_growth_pine_taiga]:[134,175,97],[t.old_growth_spruce_taiga]:[134,175,97]}[e]||[145,189,89];return new he(s[0]/255,s[1]/255,s[2]/255)}needsBiomeTint(e){return Bg(e)}getDroppedItemMaterials(e){const t=`dropped_${e}`;if(this.materials.has(t))return this.materials.get(t);const n=`dropped_array_${e}`;if(this.materials.has(`${n}_0`)){const a=[];for(let o=0;o<6;o++)a.push(this.materials.get(`${n}_${o}`));return a}if(this.hasBlockSideTexture(e))return this.createDroppedGrassBlockMaterials(e,n);if(this.isLogBlock(e))return this.createDroppedLogMaterials(e,n);const s=this.textures.get(e);let r;if(s){const a=this.cloneTextureWithSettings(s);if(this.needsBiomeTint(e)){const o=new he(.5686274509803921,.7411764705882353,.34901960784313724);r=new ft({map:a,color:o})}else r=new ft({map:a})}else{const a=ca[e]||8947848;r=new ft({color:a})}return this.materials.set(t,r),r}cloneTextureWithSettings(e){const t=e.clone();return t.magFilter=et,t.minFilter=et,t.colorSpace=xt,t.needsUpdate=!0,t}createDroppedGrassBlockMaterials(e,t){const n=this.textures.get(e),s=this.blockSideTextures.get(e)||n,r=this.textures.get(l.Dirt),a=new he(145/255,189/255,89/255),o=n?new ft({map:this.cloneTextureWithSettings(n),color:a}):new ft({color:8174669}),c=s?new ft({map:this.cloneTextureWithSettings(s)}):o,h=r?new ft({map:this.cloneTextureWithSettings(r)}):new ft({color:9135170}),u=[c,c,o,h,c,c];for(let d=0;d<6;d++)this.materials.set(`${t}_${d}`,u[d]);return u}createDroppedLogMaterials(e,t){const n=this.textures.get(e),s=this.logTopTextures.get(e)||n,r=n?new ft({map:this.cloneTextureWithSettings(n)}):new ft({color:7033394}),a=s?new ft({map:this.cloneTextureWithSettings(s)}):r,o=[r,r,a,a,r,r];for(let c=0;c<6;c++)this.materials.set(`${t}_${c}`,o[c]);return o}getSaplingMaterial(e){const t=`sapling_${e}`;if(this.materials.has(t))return this.materials.get(t);const n=this.textures.get(e);let s;if(n){const r=n.clone();r.needsUpdate=!0,s=new ft({map:r,transparent:!0,alphaTest:.1,side:Et,depthWrite:!0})}else s=new ft({color:4881471,transparent:!0,side:Et});return this.materials.set(t,s),s}}const L0=[l.OakSapling,l.BirchSapling,l.SpruceSapling,l.JungleSapling,l.AcaciaSapling,l.DarkOakSapling,l.CherrySapling,l.MangroveSapling,l.OakDoor,l.BirchDoor,l.SpruceDoor,l.JungleDoor,l.AcaciaDoor,l.DarkOakDoor,l.CherryDoor,l.MangroveDoor,l.OakTrapdoor,l.BirchTrapdoor,l.SpruceTrapdoor,l.JungleTrapdoor,l.AcaciaTrapdoor,l.DarkOakTrapdoor,l.CherryTrapdoor,l.MangroveTrapdoor];function R0(i){return[l.OakLeaves,l.BirchLeaves,l.SpruceLeaves,l.JungleLeaves,l.AcaciaLeaves,l.DarkOakLeaves,l.MangroveLeaves].includes(i)?{tint:"sepia(1) saturate(3) hue-rotate(70deg)",faces:["all"]}:i===l.CherryLeaves?{tint:"sepia(1) saturate(2) hue-rotate(300deg)",faces:["all"]}:i===l.Grass?{tint:"sepia(1) saturate(2.5) hue-rotate(70deg)",faces:["top"]}:null}function oh(i){return L0.includes(i)}function cs(i,e,t){const n=R0(i);return n?n.faces.includes("all")||n.faces.includes("top")&&e==="top"||n.faces.includes("side")&&e!=="top"?`brightness(${t}) ${n.tint}`:`brightness(${t})`:`brightness(${t})`}const Qt={top:1,front:.8,right:.6,left:.7},P0={[l.Stone]:"#7f7f7f",[l.Dirt]:"#8b6442",[l.Grass]:"#7cbc4d",[l.Sand]:"#dbd4a0",[l.RedSand]:"#b5633a",[l.Gravel]:"#847f7d",[l.Clay]:"#9da3a7",[l.Terracotta]:"#985e43",[l.Ice]:"#a5d3f3",[l.PackedIce]:"#8cb4d4",[l.BlueIce]:"#74a8d6",[l.Snow]:"#f0f0f0",[l.SnowBlock]:"#f0f0f0",[l.Bedrock]:"#3a3a3a",[l.Water]:"#3f76e4",[l.OakPlanks]:"#b8945f",[l.BirchPlanks]:"#c8b77a",[l.SprucePlanks]:"#7a5a3a",[l.JunglePlanks]:"#a8754a",[l.AcaciaPlanks]:"#ad5d32",[l.DarkOakPlanks]:"#3e2912",[l.CherryPlanks]:"#e4b4a5",[l.MangrovePlanks]:"#773535",[l.OakLog]:"#6b5232",[l.BirchLog]:"#d5cdb3",[l.SpruceLog]:"#4a3a25",[l.JungleLog]:"#5a4a2a",[l.AcaciaLog]:"#6d5040",[l.DarkOakLog]:"#3d2d1d",[l.CherryLog]:"#a87080",[l.MangroveLog]:"#5a3030",[l.StrippedOakLog]:"#b8945f",[l.StrippedBirchLog]:"#c8b77a",[l.StrippedSpruceLog]:"#7a5a3a",[l.StrippedJungleLog]:"#a8754a",[l.StrippedAcaciaLog]:"#ad5d32",[l.StrippedDarkOakLog]:"#3e2912",[l.StrippedCherryLog]:"#e4b4a5",[l.StrippedMangroveLog]:"#773535",[l.OakLeaves]:"#4a7a2b",[l.BirchLeaves]:"#5a8a3b",[l.SpruceLeaves]:"#3a5a2b",[l.JungleLeaves]:"#3a7a3b",[l.AcaciaLeaves]:"#5a8a4b",[l.DarkOakLeaves]:"#3a5a2b",[l.CherryLeaves]:"#e0a0c0",[l.MangroveLeaves]:"#4a7a4b",[l.Podzol]:"#7a5a3a",[l.Mycelium]:"#8a7a7a",[l.OakSapling]:"#5a9a3b",[l.BirchSapling]:"#6aaa4b",[l.SpruceSapling]:"#3a6a2b",[l.JungleSapling]:"#4a8a3b",[l.AcaciaSapling]:"#6a9a4b",[l.DarkOakSapling]:"#3a5a2b",[l.CherrySapling]:"#d090b0",[l.MangroveSapling]:"#4a7a4b",[l.OakDoor]:"#a58046",[l.BirchDoor]:"#d4c797",[l.SpruceDoor]:"#6b5034",[l.JungleDoor]:"#a87453",[l.AcaciaDoor]:"#9b5b3b",[l.DarkOakDoor]:"#4a321d",[l.CherryDoor]:"#e4b4a5",[l.MangroveDoor]:"#6b3030",[l.OakTrapdoor]:"#a58046",[l.BirchTrapdoor]:"#d4c797",[l.SpruceTrapdoor]:"#6b5034",[l.JungleTrapdoor]:"#a87453",[l.AcaciaTrapdoor]:"#9b5b3b",[l.DarkOakTrapdoor]:"#4a321d",[l.CherryTrapdoor]:"#e4b4a5",[l.MangroveTrapdoor]:"#6b3030",[l.Cactus]:"#5a8a3b"};function lh(i){return P0[i]||"#808080"}class Co{container;slots=[];selectedSlot=0;items=new Array(9).fill(null);selectorHighlight;static BLOCK_TEXTURES={[l.Grass]:{top:"/textures/grass_block_top.png",side:"/textures/grass_block_side.png"},[l.Podzol]:{top:"/textures/podzol_top.png",side:"/textures/podzol_side.png"},[l.Mycelium]:{top:"/textures/mycelium_top.png",side:"/textures/mycelium_side.png"},[l.Snow]:{top:"/textures/snow.png",side:"/textures/snow.png"},[l.OakLog]:{top:"/textures/oak_log_top.png",side:"/textures/oak_log.png"},[l.BirchLog]:{top:"/textures/birch_log_top.png",side:"/textures/birch_log.png"},[l.SpruceLog]:{top:"/textures/spruce_log_top.png",side:"/textures/spruce_log.png"},[l.JungleLog]:{top:"/textures/jungle_log_top.png",side:"/textures/jungle_log.png"},[l.AcaciaLog]:{top:"/textures/acacia_log_top.png",side:"/textures/acacia_log.png"},[l.DarkOakLog]:{top:"/textures/dark_oak_log_top.png",side:"/textures/dark_oak_log.png"},[l.CherryLog]:{top:"/textures/cherry_log_top.png",side:"/textures/cherry_log.png"},[l.MangroveLog]:{top:"/textures/mangrove_log_top.png",side:"/textures/mangrove_log.png"},[l.Cactus]:{top:"/textures/cactus_top.png",side:"/textures/cactus_side.png"},[l.Dirt]:"/textures/dirt.png",[l.Stone]:"/textures/stone.png",[l.Sand]:"/textures/sand.png",[l.RedSand]:"/textures/red_sand.png",[l.Gravel]:"/textures/gravel.png",[l.Clay]:"/textures/clay.png",[l.Terracotta]:"/textures/terracotta.png",[l.Ice]:"/textures/ice.png",[l.PackedIce]:"/textures/packed_ice.png",[l.BlueIce]:"/textures/blue_ice.png",[l.Water]:"/textures/water_still.png",[l.OakLeaves]:"/textures/oak_leaves.png",[l.BirchLeaves]:"/textures/birch_leaves.png",[l.SpruceLeaves]:"/textures/spruce_leaves.png",[l.JungleLeaves]:"/textures/jungle_leaves.png",[l.AcaciaLeaves]:"/textures/acacia_leaves.png",[l.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[l.CherryLeaves]:"/textures/cherry_leaves.png",[l.MangroveLeaves]:"/textures/mangrove_leaves.png",[l.OakSapling]:"/textures/oak_sapling.png",[l.BirchSapling]:"/textures/birch_sapling.png",[l.SpruceSapling]:"/textures/spruce_sapling.png",[l.JungleSapling]:"/textures/jungle_sapling.png",[l.AcaciaSapling]:"/textures/acacia_sapling.png",[l.DarkOakSapling]:"/textures/dark_oak_sapling.png",[l.CherrySapling]:"/textures/cherry_sapling.png",[l.MangroveSapling]:"/textures/mangrove_sapling.png",[l.OakPlanks]:"/textures/oak_planks.png",[l.BirchPlanks]:"/textures/birch_planks.png",[l.SprucePlanks]:"/textures/spruce_planks.png",[l.JunglePlanks]:"/textures/jungle_planks.png",[l.AcaciaPlanks]:"/textures/acacia_planks.png",[l.DarkOakPlanks]:"/textures/dark_oak_planks.png",[l.CherryPlanks]:"/textures/cherry_planks.png",[l.MangrovePlanks]:"/textures/mangrove_planks.png",[l.StrippedOakLog]:{top:"/textures/stripped_oak_log_top.png",side:"/textures/stripped_oak_log.png"},[l.StrippedBirchLog]:{top:"/textures/stripped_birch_log_top.png",side:"/textures/stripped_birch_log.png"},[l.StrippedSpruceLog]:{top:"/textures/stripped_spruce_log_top.png",side:"/textures/stripped_spruce_log.png"},[l.StrippedJungleLog]:{top:"/textures/stripped_jungle_log_top.png",side:"/textures/stripped_jungle_log.png"},[l.StrippedAcaciaLog]:{top:"/textures/stripped_acacia_log_top.png",side:"/textures/stripped_acacia_log.png"},[l.StrippedDarkOakLog]:{top:"/textures/stripped_dark_oak_log_top.png",side:"/textures/stripped_dark_oak_log.png"},[l.StrippedCherryLog]:{top:"/textures/stripped_cherry_log_top.png",side:"/textures/stripped_cherry_log.png"},[l.StrippedMangroveLog]:{top:"/textures/stripped_mangrove_log_top.png",side:"/textures/stripped_mangrove_log.png"},[l.OakDoor]:"/textures/oak_door_bottom.png",[l.BirchDoor]:"/textures/birch_door_bottom.png",[l.SpruceDoor]:"/textures/spruce_door_bottom.png",[l.JungleDoor]:"/textures/jungle_door_bottom.png",[l.AcaciaDoor]:"/textures/acacia_door_bottom.png",[l.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[l.CherryDoor]:"/textures/cherry_door_bottom.png",[l.MangroveDoor]:"/textures/mangrove_door_bottom.png",[l.OakTrapdoor]:"/textures/oak_trapdoor.png",[l.BirchTrapdoor]:"/textures/birch_trapdoor.png",[l.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[l.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[l.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[l.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[l.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[l.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"};constructor(){this.injectStyles(),this.container=this.createHotbar(),this.selectorHighlight=this.createSelectorHighlight(),this.container.appendChild(this.selectorHighlight),document.body.appendChild(this.container),this.setupKeyboardInput(),this.updateDisplay()}injectStyles(){if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}if(document.getElementById("inventory-cube-styles"))return;const e=document.createElement("style");e.id="inventory-cube-styles",e.textContent=`
      .iso-cube {
        width: 12px;
        height: 12px;
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(-30deg) rotateY(45deg);
      }
      
      .iso-cube .face {
        position: absolute;
        width: 12px;
        height: 12px;
        background-size: cover;
        background-position: center;
        image-rendering: pixelated;
        backface-visibility: hidden;
      }
      
      .iso-cube .face-top {
        transform: rotateX(90deg) translateZ(6px);
        filter: brightness(1.0);
      }
      
      .iso-cube .face-front {
        transform: translateZ(6px);
        filter: brightness(0.8);
      }
      
      .iso-cube .face-right {
        transform: rotateY(90deg) translateZ(6px);
        filter: brightness(0.6);
      }
      
      .iso-cube .face-left {
        transform: rotateY(-90deg) translateZ(6px);
        filter: brightness(0.7);
      }
    `,document.head.appendChild(e)}createHotbar(){const e=document.createElement("div");e.id="hotbar",e.style.cssText=`
      position: fixed;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%) scale(2);
      transform-origin: bottom center;
      display: flex;
      gap: 0px;
      background: #8b8b8b;
      border: 2px solid #000;
      image-rendering: pixelated;
      z-index: 1000;
    `;for(let t=0;t<9;t++){const n=this.createSlot(t);this.slots.push(n),e.appendChild(n)}return e}createSlot(e){const t=document.createElement("div");t.className="hotbar-slot",t.dataset.index=e.toString(),t.style.cssText=`
      width: 20px;
      height: 20px;
      background: #8b8b8b;
      border: 1px solid;
      border-color: #373737 #ffffff #ffffff #373737;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    `;const n=document.createElement("div");n.className="slot-inner",n.style.cssText=`
      width: 16px;
      height: 16px;
      background: #555550;
      border: 1px solid;
      border-color: #3a3a38 #7a7a75 #7a7a75 #3a3a38;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      perspective: 50px;
    `,t.appendChild(n);const s=document.createElement("div");s.className="cube-container",s.style.cssText=`
      width: 12px;
      height: 12px;
      display: none;
      transform-style: preserve-3d;
    `,n.appendChild(s);const r=document.createElement("div");r.className="iso-cube",s.appendChild(r);const a=document.createElement("div");a.className="face face-top",r.appendChild(a);const o=document.createElement("div");o.className="face face-front",r.appendChild(o);const c=document.createElement("div");c.className="face face-right",r.appendChild(c);const h=document.createElement("div");h.className="face face-left",r.appendChild(h);const u=document.createElement("div");u.className="slot-sprite",u.style.cssText=`
      width: 12px;
      height: 12px;
      display: none;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      image-rendering: pixelated;
    `,n.appendChild(u);const d=document.createElement("span");return d.className="slot-count",d.style.cssText=`
      position: absolute;
      bottom: 1px;
      right: 2px;
      font-family: ${ot};
      font-size: 6px;
      color: white;
      text-shadow: 1px 1px 0 #3f3f3f;
      pointer-events: none;
      z-index: 10;
      -webkit-font-smoothing: none;
    `,t.appendChild(d),t.addEventListener("click",()=>{this.selectSlot(e)}),t}createSelectorHighlight(){const e=document.createElement("div");return e.id="hotbar-selector",e.style.cssText=`
      position: absolute;
      width: 24px;
      height: 24px;
      border: 1px solid #fff;
      outline: 1px solid #000;
      pointer-events: none;
      z-index: 1001;
      box-sizing: border-box;
      top: -2px;
      left: -2px;
    `,e}setupKeyboardInput(){window.addEventListener("keydown",e=>{if(e.code>="Digit1"&&e.code<="Digit9"){const t=parseInt(e.code.replace("Digit",""))-1;this.selectSlot(t)}}),window.addEventListener("wheel",e=>{(e.target===document.body||e.target.tagName==="CANVAS")&&e.shiftKey&&(e.preventDefault(),e.deltaY>0?this.selectSlot((this.selectedSlot+1)%9):this.selectSlot((this.selectedSlot+8)%9))},{passive:!1})}selectSlot(e){e<0||e>8||(this.selectedSlot!==e&&vt().playUIClick(),this.selectedSlot=e,this.updateDisplay())}getSelectedSlot(){return this.selectedSlot}getSelectedItem(){return this.items[this.selectedSlot]}setItem(e,t){e<0||e>8||(this.items[e]=t,this.updateDisplay())}getItem(e){return e<0||e>8?null:this.items[e]}removeItem(e,t=1){if(e<0||e>8)return!1;const n=this.items[e];return!n||n.count<t?!1:(n.count-=t,n.count<=0&&(this.items[e]=null),this.updateDisplay(),!0)}addItem(e){let n=e.count;for(let s=0;s<9&&!(n<=0);s++){const r=this.items[s];if(r&&r.blockType===e.blockType){const a=64-r.count,o=Math.min(a,n);o>0&&(r.count+=o,n-=o)}}for(let s=0;s<9&&!(n<=0);s++)if(!this.items[s]){const r=Math.min(64,n);this.items[s]={blockType:e.blockType,count:r,name:e.name,icon:e.icon},n-=r}return this.updateDisplay(),n<e.count}removeFromSelected(e=1){const t=this.items[this.selectedSlot];if(!t)return 0;const n=Math.min(e,t.count);return t.count-=n,t.count<=0&&(this.items[this.selectedSlot]=null),this.updateDisplay(),n}hasSpaceFor(e,t=1){let s=t;for(let r=0;r<9;r++){const a=this.items[r];if(a&&a.blockType===e?s-=64-a.count:a||(s-=64),s<=0)return!0}return s<=0}getTextureConfig(e){const t=Co.BLOCK_TEXTURES[e];return t?typeof t=="string"?{top:t,side:t,bottom:t}:{top:t.top,side:t.side,bottom:t.bottom||t.side}:null}updateDisplay(){this.slots.forEach((e,t)=>{const n=this.items[t],s=e.querySelector(".slot-inner"),r=s?.querySelector(".cube-container"),a=r?.querySelector(".iso-cube"),o=s?.querySelector(".slot-sprite"),c=e.querySelector(".slot-count");if(!(!r||!a||!o))if(n){const h=this.getTextureConfig(n.blockType);if(oh(n.blockType)&&h)r.style.display="none",o.style.display="block",o.style.backgroundImage=`url(${h.side})`;else if(h){r.style.display="block",o.style.display="none";const d=a.querySelector(".face-top"),p=a.querySelector(".face-front"),g=a.querySelector(".face-right"),v=a.querySelector(".face-left");d&&(d.style.backgroundImage=`url(${h.top})`,d.style.filter=cs(n.blockType,"top",Qt.top)),p&&(p.style.backgroundImage=`url(${h.side})`,p.style.filter=cs(n.blockType,"front",Qt.front)),g&&(g.style.backgroundImage=`url(${h.side})`,g.style.filter=cs(n.blockType,"right",Qt.right)),v&&(v.style.backgroundImage=`url(${h.side})`,v.style.filter=cs(n.blockType,"left",Qt.left))}else{r.style.display="block",o.style.display="none";const d=lh(n.blockType),p=a.querySelector(".face-top"),g=a.querySelector(".face-front"),v=a.querySelector(".face-right"),_=a.querySelector(".face-left");p&&(p.style.backgroundImage="none",p.style.backgroundColor=d,p.style.filter=`brightness(${Qt.top})`),g&&(g.style.backgroundImage="none",g.style.backgroundColor=d,g.style.filter=`brightness(${Qt.front})`),v&&(v.style.backgroundImage="none",v.style.backgroundColor=d,v.style.filter=`brightness(${Qt.right})`),_&&(_.style.backgroundImage="none",_.style.backgroundColor=d,_.style.filter=`brightness(${Qt.left})`)}n.count>1?(c.textContent=n.count.toString(),c.style.display="block"):c.style.display="none"}else r.style.display="none",o.style.display="none",c.style.display="none"}),this.updateSelectorPosition()}updateSelectorPosition(){const t=this.selectedSlot*20-2;this.selectorHighlight.style.left=`${t}px`}destroy(){this.container.remove();const e=document.getElementById("inventory-cube-styles");e&&e.remove()}}const fs=.25,k0=1.5,D0=.1,I0=2,U0=1.5,ic=2,N0=5,O0=15,F0=300,B0=3,z0=20,sc=.2,H0=.5,rc=64,G0=new kt(fs,fs,fs),ch=new Sr(fs*.6,8);ch.rotateX(-Math.PI/2);const V0=new ft({color:0,transparent:!0,opacity:.3,depthWrite:!1});class W0{blockType;count;position;velocity;isPickedUp=!1;shouldDespawn=!1;mesh;scene;age=0;bobPhase=Math.random()*Math.PI*2;rotationAngle=Math.random()*Math.PI*2;groundY=0;isOnGround=!1;materials;isBeingAttracted=!1;attractionProgress=0;constructor(e,t,n){if(this.scene=e,this.blockType=t.blockType,this.count=t.count,this.position=t.position.clone(),this.materials=n,t.velocity)this.velocity=t.velocity.clone();else{const s=Math.random()*Math.PI*2,r=1.5+Math.random()*1.5;this.velocity=new N(Math.cos(s)*r,B0+Math.random()*2,Math.sin(s)*r)}this.mesh=this.createMesh(),this.mesh.position.copy(this.position),e.add(this.mesh)}createMesh(){const e=new Vt,t=new qe(G0,this.materials);t.position.y=fs/2,e.add(t);const n=V0.clone(),s=new qe(ch,n);return s.position.y=.01,s.name="shadow",e.add(s),e}update(e,t,n){if(this.age+=e,this.age>=F0){this.shouldDespawn=!0;return}const s=t.x-this.position.x,r=t.y-this.position.y,a=t.z-this.position.z,o=Math.sqrt(s*s+r*r+a*a);if(o<U0){this.isPickedUp=!0;return}if(o<ic){this.isBeingAttracted=!0;const u=1-o/ic;this.attractionProgress=Math.min(1,this.attractionProgress+e*2);const d=s/o,p=r/o,g=a/o,v=N0+O0*u*this.attractionProgress;this.velocity.x=d*v,this.velocity.y=p*v,this.velocity.z=g*v,this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.position.z+=this.velocity.z*e}else this.isBeingAttracted=!1,this.attractionProgress=0,this.isOnGround||(this.velocity.y-=z0*e,this.velocity.x*=.98,this.velocity.z*=.98,this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.position.z+=this.velocity.z*e,this.groundY=n(this.position.x,this.position.z)+1+sc,this.position.y<=this.groundY&&(this.position.y=this.groundY,this.isOnGround=!0,this.velocity.set(0,0,0)));this.rotationAngle+=k0*e,this.bobPhase+=I0*Math.PI*2*e,this.mesh.position.copy(this.position),this.isOnGround&&!this.isBeingAttracted&&(this.mesh.position.y+=Math.sin(this.bobPhase)*D0);const c=this.mesh.children.find(u=>u instanceof qe&&u.name!=="shadow");c&&(c.rotation.y=this.rotationAngle);const h=this.mesh.children.find(u=>u.name==="shadow");if(h&&h.material instanceof ft){const u=Math.max(0,this.position.y-this.groundY+sc);h.material.opacity=Math.max(.1,.3-u*.1),h.position.y=-u+.01}}canMergeWith(e){return e===this||e.blockType!==this.blockType||this.count>=rc||e.isPickedUp||e.shouldDespawn?!1:this.position.distanceTo(e.position)<H0}mergeFrom(e){const t=rc-this.count,n=Math.min(t,e.count);this.count+=n,e.count-=n,e.count<=0&&(e.shouldDespawn=!0)}getPosition(){return this.position.clone()}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(e=>{e instanceof qe&&e.name==="shadow"&&e.material instanceof Gt&&e.material.dispose()})}}class X0{scene;textureManager;inventoryHUD;items=[];getGroundHeight;onItemPickup;constructor(e,t,n,s){this.scene=e,this.textureManager=t,this.inventoryHUD=n,this.getGroundHeight=s}spawnItem(e,t,n=1,s){if(e===l.Air)return null;const r=this.textureManager.getDroppedItemMaterials(e),a={blockType:e,count:n,position:t,velocity:s},o=new W0(this.scene,a,r);return this.items.push(o),o}spawnItemsFromBlock(e,t,n=1){const s=t.clone();s.y+=.5,this.spawnItem(e,s,n)}update(e,t){for(const s of this.items)s.update(e,t,this.getGroundHeight);this.mergeNearbyItems();const n=[];for(const s of this.items)s.isPickedUp?this.inventoryHUD.addItem({blockType:s.blockType,count:s.count,name:this.getBlockName(s.blockType)})?(this.onItemPickup&&this.onItemPickup(s.blockType,s.count),vt().playItemPickup(),n.push(s)):s.isPickedUp=!1:s.shouldDespawn&&n.push(s);for(const s of n){s.destroy();const r=this.items.indexOf(s);r!==-1&&this.items.splice(r,1)}}mergeNearbyItems(){for(let e=0;e<this.items.length;e++){const t=this.items[e];if(!(t.shouldDespawn||t.isPickedUp))for(let n=e+1;n<this.items.length;n++){const s=this.items[n];s.shouldDespawn||s.isPickedUp||t.canMergeWith(s)&&t.mergeFrom(s)}}}getBlockName(e){return{[l.Grass]:"Grass Block",[l.Dirt]:"Dirt",[l.Stone]:"Stone",[l.Sand]:"Sand",[l.Gravel]:"Gravel",[l.Water]:"Water",[l.Ice]:"Ice",[l.Snow]:"Snow",[l.SnowBlock]:"Snow Block",[l.Clay]:"Clay",[l.OakLog]:"Oak Log",[l.BirchLog]:"Birch Log",[l.SpruceLog]:"Spruce Log",[l.JungleLog]:"Jungle Log",[l.AcaciaLog]:"Acacia Log",[l.DarkOakLog]:"Dark Oak Log",[l.CherryLog]:"Cherry Log",[l.MangroveLog]:"Mangrove Log",[l.OakLeaves]:"Oak Leaves",[l.BirchLeaves]:"Birch Leaves",[l.SpruceLeaves]:"Spruce Leaves",[l.JungleLeaves]:"Jungle Leaves",[l.AcaciaLeaves]:"Acacia Leaves",[l.DarkOakLeaves]:"Dark Oak Leaves",[l.CherryLeaves]:"Cherry Leaves",[l.MangroveLeaves]:"Mangrove Leaves",[l.Cactus]:"Cactus",[l.Podzol]:"Podzol",[l.Mycelium]:"Mycelium",[l.PackedIce]:"Packed Ice",[l.BlueIce]:"Blue Ice",[l.RedSand]:"Red Sand",[l.Terracotta]:"Terracotta",[l.OakSapling]:"Oak Sapling",[l.BirchSapling]:"Birch Sapling",[l.SpruceSapling]:"Spruce Sapling",[l.JungleSapling]:"Jungle Sapling",[l.AcaciaSapling]:"Acacia Sapling",[l.DarkOakSapling]:"Dark Oak Sapling",[l.CherrySapling]:"Cherry Sapling",[l.MangroveSapling]:"Mangrove Propagule"}[e]||"Block"}getItemCount(){return this.items.length}destroy(){for(const e of this.items)e.destroy();this.items=[]}}const Y0={[l.TallGrass]:0,[l.DeadBush]:0,[l.Fern]:0,[l.OakLeaves]:.2,[l.BirchLeaves]:.2,[l.SpruceLeaves]:.2,[l.JungleLeaves]:.2,[l.AcaciaLeaves]:.2,[l.DarkOakLeaves]:.2,[l.CherryLeaves]:.2,[l.MangroveLeaves]:.2,[l.Dirt]:.5,[l.Sand]:.5,[l.RedSand]:.5,[l.Gravel]:.6,[l.Clay]:.6,[l.Snow]:.2,[l.SnowBlock]:.2,[l.Grass]:.6,[l.Podzol]:.5,[l.Mycelium]:.6,[l.OakLog]:2,[l.BirchLog]:2,[l.SpruceLog]:2,[l.JungleLog]:2,[l.AcaciaLog]:2,[l.DarkOakLog]:2,[l.CherryLog]:2,[l.MangroveLog]:2,[l.Stone]:1.5,[l.Terracotta]:1.25,[l.Ice]:.5,[l.PackedIce]:.5,[l.BlueIce]:2.8,[l.Cactus]:.4,[l.OakSapling]:0,[l.BirchSapling]:0,[l.SpruceSapling]:0,[l.JungleSapling]:0,[l.AcaciaSapling]:0,[l.DarkOakSapling]:0,[l.CherrySapling]:0,[l.MangroveSapling]:0},$0=new Set([l.Stone,l.Terracotta,l.Ice,l.PackedIce,l.BlueIce]),q0=1,ha=10;function j0(i){const e=Y0[i]??q0;if(e===0)return 0;let t=e*1.5;return $0.has(i)&&(t*=5),t}class Z0{scene;breakingMesh=null;breakingOverlays=[];targetBlock=null;targetBlockType=null;breakProgress=0;breakTime=0;currentStage=-1;overlayMaterial;constructor(e){this.scene=e,this.overlayMaterial=new ft({color:0,transparent:!0,depthTest:!0,depthWrite:!1,side:Et,alphaTest:.1});const t=new kt(1.002,1.002,1.002);this.breakingMesh=new qe(t,this.overlayMaterial),this.breakingMesh.visible=!1,this.breakingMesh.renderOrder=1e3,e.add(this.breakingMesh),this.loadDestroyTextures()}loadDestroyTextures(){const e=new Mr;for(let t=0;t<ha;t++){const n=e.load(`/textures/destroy_stage_${t}.png`);n.magFilter=et,n.minFilter=et,this.breakingOverlays.push(n)}}startBreaking(e,t,n){if((!this.targetBlock||!this.targetBlock.equals(e))&&(this.targetBlock=e.clone(),this.targetBlockType=t,this.breakProgress=0,this.breakTime=j0(t),this.currentStage=0,this.breakingMesh&&(this.breakingMesh.position.copy(e),this.updateOverlayTexture(0),this.breakingMesh.visible=!0)),this.breakTime===0)return this.stopBreaking(),!0;this.breakProgress+=n/this.breakTime;const s=Math.min(Math.floor(this.breakProgress*ha),ha-1);return s!==this.currentStage&&s>=0&&(this.currentStage=s,this.updateOverlayTexture(s)),this.breakProgress>=1?(this.stopBreaking(),!0):!1}updateOverlayTexture(e){e>=0&&e<this.breakingOverlays.length&&(this.overlayMaterial.map=this.breakingOverlays[e],this.overlayMaterial.needsUpdate=!0)}stopBreaking(){this.targetBlock=null,this.targetBlockType=null,this.breakProgress=0,this.breakTime=0,this.currentStage=-1,this.breakingMesh&&(this.breakingMesh.visible=!1)}isBreaking(){return this.targetBlock!==null}getProgress(){return this.breakProgress}getTargetBlock(){return this.targetBlock?.clone()||null}getCurrentStage(){return this.currentStage}destroy(){this.breakingMesh&&(this.scene.remove(this.breakingMesh),this.breakingMesh.geometry.dispose()),this.overlayMaterial.dispose();for(const e of this.breakingOverlays)e.dispose()}}class J0{container;visible=!0;boundMouseMove;posX;posY;velX=0;velY=0;ACCELERATION=2e3;MAX_SPEED=600;FRICTION=8;usingGamepad=!1;constructor(){this.posX=window.innerWidth/2,this.posY=window.innerHeight/2,this.container=this.createCrosshair(),document.body.appendChild(this.container),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`,this.boundMouseMove=this.handleMouseMove.bind(this),window.addEventListener("mousemove",this.boundMouseMove),document.body.style.cursor="none"}createCrosshair(){const e=document.createElement("div");e.id="crosshair",e.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 1px;
      height: 1px;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
    `;const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      top: 0;
      left: -8px;
      width: 17px;
      height: 1px;
      background: white;
      pointer-events: none;
    `;const n=document.createElement("div");return n.style.cssText=`
      position: absolute;
      top: -8px;
      left: 0;
      width: 1px;
      height: 17px;
      background: white;
      pointer-events: none;
    `,e.appendChild(t),e.appendChild(n),e}handleMouseMove(e){this.visible&&(this.usingGamepad=!1,this.posX=e.clientX,this.posY=e.clientY,this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`)}updateGamepad(e,t,n){if(!this.visible)return;if(Math.abs(e)>.01||Math.abs(t)>.01){this.usingGamepad=!0;const r=e*this.MAX_SPEED,a=t*this.MAX_SPEED,o=this.ACCELERATION*n;this.velX=this.lerp(this.velX,r,Math.min(1,o/this.MAX_SPEED*3)),this.velY=this.lerp(this.velY,a,Math.min(1,o/this.MAX_SPEED*3))}else{const r=1-this.FRICTION*n;this.velX*=Math.max(0,r),this.velY*=Math.max(0,r),Math.abs(this.velX)<1&&(this.velX=0),Math.abs(this.velY)<1&&(this.velY=0)}(Math.abs(this.velX)>.1||Math.abs(this.velY)>.1)&&(this.posX=Math.max(0,Math.min(window.innerWidth,this.posX+this.velX*n)),this.posY=Math.max(0,Math.min(window.innerHeight,this.posY+this.velY*n)),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`)}lerp(e,t,n){return e+(t-e)*n}isMoving(){return Math.abs(this.velX)>1||Math.abs(this.velY)>1}moveBy(e,t){this.visible&&(Math.abs(e)<.001&&Math.abs(t)<.001||(this.usingGamepad=!0,this.posX=Math.max(0,Math.min(window.innerWidth,this.posX+e)),this.posY=Math.max(0,Math.min(window.innerHeight,this.posY+t)),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`))}getPosition(){return{x:this.posX,y:this.posY}}isUsingGamepad(){return this.usingGamepad}centerCrosshair(){this.posX=window.innerWidth/2,this.posY=window.innerHeight/2,this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`}setVisible(e){this.visible=e,this.container.style.display=e?"block":"none"}isVisible(){return this.visible}destroy(){window.removeEventListener("mousemove",this.boundMouseMove),document.body.style.cursor="",this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}var Te=(i=>(i[i.none=-1]="none",i[i.ocean=0]="ocean",i[i.plains=1]="plains",i[i.desert=2]="desert",i[i.windswept_hills=3]="windswept_hills",i[i.forest=4]="forest",i[i.taiga=5]="taiga",i[i.swamp=6]="swamp",i[i.river=7]="river",i[i.nether_wastes=8]="nether_wastes",i[i.the_end=9]="the_end",i[i.frozen_ocean=10]="frozen_ocean",i[i.frozen_river=11]="frozen_river",i[i.snowy_plains=12]="snowy_plains",i[i.snowy_mountains=13]="snowy_mountains",i[i.mushroom_fields=14]="mushroom_fields",i[i.mushroom_field_shore=15]="mushroom_field_shore",i[i.beach=16]="beach",i[i.desert_hills=17]="desert_hills",i[i.wooded_hills=18]="wooded_hills",i[i.taiga_hills=19]="taiga_hills",i[i.mountain_edge=20]="mountain_edge",i[i.jungle=21]="jungle",i[i.jungle_hills=22]="jungle_hills",i[i.sparse_jungle=23]="sparse_jungle",i[i.deep_ocean=24]="deep_ocean",i[i.stony_shore=25]="stony_shore",i[i.snowy_beach=26]="snowy_beach",i[i.birch_forest=27]="birch_forest",i[i.birch_forest_hills=28]="birch_forest_hills",i[i.dark_forest=29]="dark_forest",i[i.snowy_taiga=30]="snowy_taiga",i[i.snowy_taiga_hills=31]="snowy_taiga_hills",i[i.old_growth_pine_taiga=32]="old_growth_pine_taiga",i[i.old_growth_pine_taiga_hills=33]="old_growth_pine_taiga_hills",i[i.windswept_forest=34]="windswept_forest",i[i.savanna=35]="savanna",i[i.savanna_plateau=36]="savanna_plateau",i[i.badlands=37]="badlands",i[i.wooded_badlands=38]="wooded_badlands",i[i.badlands_plateau=39]="badlands_plateau",i[i.small_end_islands=40]="small_end_islands",i[i.end_midlands=41]="end_midlands",i[i.end_highlands=42]="end_highlands",i[i.end_barrens=43]="end_barrens",i[i.warm_ocean=44]="warm_ocean",i[i.lukewarm_ocean=45]="lukewarm_ocean",i[i.cold_ocean=46]="cold_ocean",i[i.deep_warm_ocean=47]="deep_warm_ocean",i[i.deep_lukewarm_ocean=48]="deep_lukewarm_ocean",i[i.deep_cold_ocean=49]="deep_cold_ocean",i[i.deep_frozen_ocean=50]="deep_frozen_ocean",i[i.meadow=177]="meadow",i[i.grove=178]="grove",i[i.snowy_slopes=179]="snowy_slopes",i[i.jagged_peaks=180]="jagged_peaks",i[i.frozen_peaks=181]="frozen_peaks",i[i.stony_peaks=182]="stony_peaks",i[i.deep_dark=183]="deep_dark",i[i.mangrove_swamp=184]="mangrove_swamp",i[i.cherry_grove=185]="cherry_grove",i[i.pale_garden=186]="pale_garden",i[i.sunflower_plains=129]="sunflower_plains",i[i.flower_forest=132]="flower_forest",i[i.ice_spikes=140]="ice_spikes",i[i.old_growth_birch_forest=155]="old_growth_birch_forest",i[i.old_growth_spruce_taiga=160]="old_growth_spruce_taiga",i[i.windswept_savanna=163]="windswept_savanna",i[i.eroded_badlands=165]="eroded_badlands",i[i.bamboo_jungle=168]="bamboo_jungle",i[i.bamboo_jungle_hills=169]="bamboo_jungle_hills",i[i.soul_sand_valley=170]="soul_sand_valley",i[i.crimson_forest=171]="crimson_forest",i[i.warped_forest=172]="warped_forest",i[i.basalt_deltas=173]="basalt_deltas",i[i.dripstone_caves=174]="dripstone_caves",i[i.lush_caves=175]="lush_caves",i))(Te||{});const K0={0:[0,0,112],24:[0,0,48],10:[112,112,214],50:[64,64,144],46:[32,32,112],49:[32,32,80],45:[0,0,172],48:[0,0,128],44:[0,150,255],7:[0,0,255],11:[160,160,255],16:[250,222,85],26:[250,240,192],25:[162,162,132],1:[141,179,96],129:[181,219,136],177:[88,184,88],4:[5,102,33],132:[45,142,73],27:[48,116,68],155:[88,156,108],29:[64,81,26],185:[255,183,197],186:[213,206,199],5:[11,102,89],30:[49,85,74],32:[89,102,81],160:[69,82,61],178:[78,138,78],21:[83,123,9],168:[118,142,20],23:[98,139,23],6:[7,249,178],184:[103,53,43],2:[250,148,24],37:[217,69,21],38:[176,151,101],165:[255,109,61],35:[189,178,95],36:[167,157,100],163:[209,188,115],12:[255,255,255],140:[180,220,220],179:[168,168,168],181:[160,160,255],180:[192,192,192],182:[136,136,136],3:[96,96,96],34:[80,112,80],14:[255,0,255],8:[191,59,59],170:[94,56,48],171:[221,8,8],172:[73,144,123],173:[64,54,54],9:[128,128,255],40:[138,138,128],41:[148,148,138],42:[158,158,148],43:[118,118,108],183:[15,37,47],174:[134,96,67],175:[123,163,49]};function Q0(i){return K0[i]??[128,128,128]}function ev(i){return i===0||i===24||i===10||i===50||i===46||i===49||i===45||i===48||i===44||i===47}function tv(i){return i===12||i===30||i===10||i===11||i===26||i===179||i===181||i===140||i===50||i===178}function nv(i){switch(i){case 4:case 132:case 27:case 155:case 29:case 5:case 30:case 32:case 160:case 21:case 168:case 23:case 6:case 184:case 178:case 34:case 185:case 186:case 38:return 1;case 1:case 177:case 35:case 36:case 129:return 2;default:return 0}}function iv(i){switch(i){case 6:return[106,112,57];case 184:return[141,177,39];case 21:case 168:case 23:return[89,201,60];case 37:case 38:case 165:return[144,129,77];case 29:return[80,122,50];case 185:return[182,219,136];case 186:return[163,177,157];default:return[141,179,96]}}function sv(i){switch(i){case 0:case 45:case 46:case 44:case 10:return 45;case 24:case 48:case 49:case 50:case 47:return 30;case 7:case 11:return 56;case 16:case 26:return 63;case 25:return 64;case 1:case 129:case 2:return 68;case 177:return 72;case 4:case 132:case 185:return 70;case 27:case 29:case 186:return 68;case 5:case 30:return 68;case 178:return 75;case 21:return 72;case 168:case 23:return 70;case 6:return 62;case 184:return 61;case 35:return 70;case 36:return 85;case 37:return 80;case 38:return 82;case 165:return 75;case 12:case 140:return 68;case 179:return 90;case 181:return 110;case 3:return 90;case 34:return 85;case 180:return 120;case 182:return 115;case 14:return 66;default:return 64}}const rv=512;class Tn{state;constructor(e){let t=BigInt(e)^BigInt("0x9E3779B97F4A7C15");const n=()=>{t=BigInt.asUintN(64,t+BigInt("0x9E3779B97F4A7C15"));let s=t;return s=BigInt.asUintN(64,(s^s>>BigInt(30))*BigInt("0xBF58476D1CE4E5B9")),s=BigInt.asUintN(64,(s^s>>BigInt(27))*BigInt("0x94D049BB133111EB")),Number(BigInt.asUintN(32,s^s>>BigInt(31)))};this.state=[n(),n(),n(),n()]}nextInt(){const e=this.state[0]+this.state[3]>>>0,t=this.state[1]<<9>>>0;return this.state[2]^=this.state[0],this.state[3]^=this.state[1],this.state[1]^=this.state[2],this.state[0]^=this.state[3],this.state[2]^=t,this.state[3]=(this.state[3]<<11|this.state[3]>>>21)>>>0,e}nextFloat(){return(this.nextInt()>>>0)/4294967296}nextDouble(){return this.nextFloat()*2-1}nextBounded(e){return Math.floor(this.nextFloat()*e)}}class ao{perm;originX;originY;originZ;constructor(e){this.perm=new Uint8Array(rv);for(let t=0;t<256;t++)this.perm[t]=t;for(let t=0;t<256;t++){const n=e.nextBounded(256-t)+t,s=this.perm[t];this.perm[t]=this.perm[n],this.perm[n]=s}for(let t=0;t<256;t++)this.perm[t+256]=this.perm[t];this.originX=e.nextDouble()*256,this.originY=e.nextDouble()*256,this.originZ=e.nextDouble()*256}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return t+e*(n-t)}grad(e,t,n,s){const r=e&15,a=r<8?t:n,o=r<4?n:r===12||r===14?t:s;return((r&1)===0?a:-a)+((r&2)===0?o:-o)}sample(e,t,n){const s=e+this.originX,r=t+this.originY,a=n+this.originZ,o=Math.floor(s)&255,c=Math.floor(r)&255,h=Math.floor(a)&255,u=s-Math.floor(s),d=r-Math.floor(r),p=a-Math.floor(a),g=this.fade(u),v=this.fade(d),_=this.fade(p),m=this.perm,f=m[o]+c,w=m[f]+h,M=m[f+1]+h,b=m[o+1]+c,R=m[b]+h,L=m[b+1]+h;return this.lerp(_,this.lerp(v,this.lerp(g,this.grad(m[w],u,d,p),this.grad(m[R],u-1,d,p)),this.lerp(g,this.grad(m[M],u,d-1,p),this.grad(m[L],u-1,d-1,p))),this.lerp(v,this.lerp(g,this.grad(m[w+1],u,d,p-1),this.grad(m[R+1],u-1,d,p-1)),this.lerp(g,this.grad(m[M+1],u,d-1,p-1),this.grad(m[L+1],u-1,d-1,p-1))))}sample2D(e,t){return this.sample(e,0,t)}}class ss{octaves;lacunarity;persistence;constructor(e,t,n=2,s=.5){this.octaves=[],this.lacunarity=n,this.persistence=s;for(let r=0;r<t;r++)this.octaves.push(new ao(e))}sample(e,t,n){let s=0,r=1,a=1,o=0;for(const c of this.octaves)s+=r*c.sample(e*a,t*a,n*a),o+=r,r*=this.persistence,a*=this.lacunarity;return s/o}sample2D(e,t){return this.sample(e,0,t)}}let av=class hh{perm;permMod12;static GRAD3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];static F2=.5*(Math.sqrt(3)-1);static G2=(3-Math.sqrt(3))/6;constructor(e){this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);const t=new Uint8Array(256);for(let n=0;n<256;n++)t[n]=n;for(let n=255;n>0;n--){const s=e.nextBounded(n+1),r=t[n];t[n]=t[s],t[s]=r}for(let n=0;n<512;n++)this.perm[n]=t[n&255],this.permMod12[n]=this.perm[n]%12}dot2(e,t,n){return e[0]*t+e[1]*n}sample2D(e,t){const{F2:n,G2:s,GRAD3:r}=hh,a=(e+t)*n,o=Math.floor(e+a),c=Math.floor(t+a),h=(o+c)*s,u=o-h,d=c-h,p=e-u,g=t-d;let v,_;p>g?(v=1,_=0):(v=0,_=1);const m=p-v+s,f=g-_+s,w=p-1+2*s,M=g-1+2*s,b=o&255,R=c&255,L=this.permMod12[b+this.perm[R]],A=this.permMod12[b+v+this.perm[R+_]],P=this.permMod12[b+1+this.perm[R+1]];let y=0,x=0,C=0,F=.5-p*p-g*g;F>=0&&(F*=F,y=F*F*this.dot2(r[L],p,g));let O=.5-m*m-f*f;O>=0&&(O*=O,x=O*O*this.dot2(r[A],m,f));let Y=.5-w*w-M*M;return Y>=0&&(Y*=Y,C=Y*Y*this.dot2(r[P],w,M)),70*(y+x+C)}};function ac(i,e){if(i.length<2)return i[0]?.[1]??0;let t=0;for(;t<i.length-1&&i[t+1][0]<e;)t++;if(t>=i.length-1)return i[i.length-1][1];if(t<0||e<i[0][0])return i[0][1];const n=i[t][0],s=i[t+1][0],r=i[t][1],a=i[t+1][1],o=(e-n)/(s-n),c=o*o*(3-2*o);return r+(a-r)*c}class ov{temperatureNoise;humidityNoise;continentalnessNoise;erosionNoise;weirdnessNoise;shiftNoise;constructor(e){const t=new Tn(e),n=new Tn(e+1),s=new Tn(e+2),r=new Tn(e+3),a=new Tn(e+4),o=new Tn(e+5);this.temperatureNoise=new ss(t,4,2,.5),this.humidityNoise=new ss(n,4,2,.5),this.continentalnessNoise=new ss(s,6,2,.5),this.erosionNoise=new ss(r,4,2,.5),this.weirdnessNoise=new ss(a,4,2,.5),this.shiftNoise=new av(o)}sampleClimate(e,t,n=0){const r=this.shiftNoise.sample2D(e*.0025,t*.0025)*4,a=this.shiftNoise.sample2D(e*.0025+100,t*.0025+100)*4,o=e+r,c=t+a,h=this.temperatureNoise.sample2D(o*.0025,c*.0025),u=this.humidityNoise.sample2D(o*.0025,c*.0025),d=this.continentalnessNoise.sample2D(o*65e-5,c*65e-5),p=this.erosionNoise.sample2D(o*.00125,c*.00125),g=this.weirdnessNoise.sample2D(o*.0025,c*.0025);return{temperature:h,humidity:u,continentalness:d,erosion:p,weirdness:g,depth:n*.01}}}class oc{seed;biomeNoise;constructor(e){this.seed=e??Math.floor(Math.random()*2147483647),this.biomeNoise=new ov(this.seed)}getBiomeAt(e,t,n,s){const r=e===1?t>>2:t,a=e===1?s>>2:s,o=e===1?n>>2:n,c=this.biomeNoise.sampleClimate(r,a,o);return this.selectBiome(c)}genBiomes2D(e,t,n,s,r,a,o=63){const c=o>>2;for(let h=0;h<a;h++)for(let u=0;u<r;u++){const d=t===1?n+u>>2:n+u,p=t===1?s+h>>2:s+h,g=this.biomeNoise.sampleClimate(d,p,c);e[h*r+u]=this.selectBiome(g)}}getTerrainHeight(e,t){const n=this.biomeNoise.sampleClimate(e>>2,t>>2),s=ac([[-1,30],[-.6,40],[-.2,55],[0,62],[.1,65],[.3,68],[.5,75],[.7,85],[1,100]],n.continentalness),r=ac([[-1,.6],[-.5,.8],[0,1],[.5,1.2],[1,1.5]],n.erosion),a=n.weirdness*8;return Math.max(0,Math.min(255,s*r+a))}selectBiome(e){const{temperature:t,humidity:n,continentalness:s,erosion:r,weirdness:a}=e;return s<-.1?this.selectOceanBiome(t,s):s<.1?this.selectShoreBiome(t,n,s):Math.abs(a)<.05&&r>.3&&s>.1?t<-.3?Te.frozen_river:Te.river:s>.6&&r<-.2?this.selectMountainBiome(t,n,r,a):this.selectLandBiome(t,n,s,r,a)}selectOceanBiome(e,t){const n=t<-.5;return e<-.5?n?Te.deep_frozen_ocean:Te.frozen_ocean:e<-.15?n?Te.deep_cold_ocean:Te.cold_ocean:e<.2?n?Te.deep_ocean:Te.ocean:e<.5?n?Te.deep_lukewarm_ocean:Te.lukewarm_ocean:n?Te.deep_warm_ocean:Te.warm_ocean}selectShoreBiome(e,t,n){return n<.03?e<-.3?Te.snowy_beach:t<-.3||Math.abs(e)>.4?Te.stony_shore:Te.beach:t>.3&&e>0?e>.5?Te.mangrove_swamp:Te.swamp:Te.plains}selectMountainBiome(e,t,n,s){const r=s>.5?"jagged":s<-.3?"stony":"frozen";return e<-.4?n<-.5?r==="jagged"?Te.jagged_peaks:Te.frozen_peaks:t>0?Te.grove:Te.snowy_slopes:e<0?n<-.5?r==="jagged"?Te.jagged_peaks:Te.stony_peaks:Te.windswept_forest:n<-.5?Te.stony_peaks:t>.3?Te.windswept_forest:Te.windswept_hills}selectLandBiome(e,t,n,s,r){return e<-.45?t>.3?Te.snowy_taiga:r>.7?Te.ice_spikes:Te.snowy_plains:e<-.15?t>.4?Te.old_growth_spruce_taiga:t>.1?Te.taiga:Te.snowy_plains:e<.2?t>.5?r>.4?Te.dark_forest:Te.old_growth_birch_forest:t>.2?r>.3?Te.flower_forest:Te.forest:t>-.2?r>.5?Te.meadow:Te.plains:n>.5?Te.sunflower_plains:Te.plains:e<.55?t>.5?r>.3?Te.bamboo_jungle:Te.jungle:t>.2?Te.sparse_jungle:t>-.3?r>.5?Te.cherry_grove:Te.forest:Te.savanna:t>.3?Te.jungle:t>-.1?r>.3?Te.windswept_savanna:Te.savanna_plateau:t<-.4?Te.desert:r>.5?Te.eroded_badlands:r>0?Te.wooded_badlands:Te.badlands}getSeed(){return this.seed}}let at=null,Js=null;async function lv(){return at||Js||(Js=(async()=>{await new Promise((e,t)=>{if(window.CubiomesModule){e();return}const n=document.createElement("script");n.src="/cubiomes.js",n.onload=()=>e(),n.onerror=()=>t(new Error("Failed to load cubiomes.js")),document.head.appendChild(n)});const i=window.CubiomesModule;if(!i)throw new Error("CubiomesModule not found in window");return at=await i(),console.log("✅ Cubiomes WASM module loaded"),at})(),Js)}const cv={MC_1_20:20},hv={NETHER:-1,OVERWORLD:0,END:1};class uv{initialized=!1;seed;fallbackGenerator=null;constructor(e){this.seed=BigInt(e??Math.floor(Math.random()*2147483647))}async init(e=cv.MC_1_20){if(!(typeof window.CubiomesModule=="function")){this.fallbackGenerator=new oc(this.getSeedNumber()),this.initialized=!0,console.log(`🌍 Fallback generator initialized with seed: ${this.seed.toString(16)}`);return}try{if(at||await lv(),at){at._init_generator(e,0);const n=Number(this.seed>>BigInt(32)&BigInt(4294967295)),s=Number(this.seed&BigInt(4294967295));at._apply_seed(n,s,hv.OVERWORLD),this.initialized=!0,console.log(`🌍 WASM generator initialized with seed: ${this.seed.toString(16)}`);return}}catch(n){console.warn("⚠️ cubiomes WASM unavailable, using TypeScript fallback generator.",n)}this.fallbackGenerator=new oc(this.getSeedNumber()),this.initialized=!0,console.log(`🌍 Fallback generator initialized with seed: ${this.seed.toString(16)}`)}getBiomeAt(e,t,n,s){if(!this.initialized)throw new Error("Generator not initialized");if(this.fallbackGenerator)return this.fallbackGenerator.getBiomeAt(e,t,n,s);if(!at)throw new Error("WASM module unavailable");return at._get_biome_at(e,t,n,s)}genBiomes2D(e,t,n,s,r,a=63){if(!this.initialized)throw new Error("Generator not initialized");if(this.fallbackGenerator){const u=new Int32Array(s*r);return this.fallbackGenerator.genBiomes2D(u,e,t,n,s,r,a),u}if(!at)throw new Error("WASM module unavailable");const o=at._alloc_biome_buffer(s,r),c=at._gen_biomes_2d(o,e,t,n,s,r,a);if(c!==0)throw at._free_buffer(o),new Error(`Biome generation failed with code ${c}`);const h=new Int32Array(s*r);for(let u=0;u<s*r;u++)h[u]=at.getValue(o+u*4,"i32");return at._free_buffer(o),h}isOcean(e){return this.fallbackGenerator?ev(e):at?at._is_ocean(e)!==0:!1}isSnowy(e){return this.fallbackGenerator?tv(e):at?at._is_snowy_biome(e)!==0:!1}getBiomeColor(e){if(this.fallbackGenerator)return Q0(e);if(!at)return[128,128,128];const t=at._get_biome_color(e);return[t>>16&255,t>>8&255,t&255]}getBiomeBaseHeight(e){return this.fallbackGenerator?sv(e):at?at._get_biome_base_height(e):64}biomeHasTrees(e){return this.fallbackGenerator?nv(e):at?at._biome_has_trees(e):0}getBiomeGrassColor(e){if(this.fallbackGenerator)return iv(e);if(!at)return[141,179,96];const t=at._get_biome_grass_color(e);return[t>>16&255,t>>8&255,t&255]}getSeed(){return this.seed}getSeedNumber(){return Number(this.seed&BigInt(2147483647))}getBiomeName(e){return{0:"Ocean",1:"Plains",2:"Desert",3:"Windswept Hills",4:"Forest",5:"Taiga",6:"Swamp",7:"River",8:"Nether Wastes",9:"The End",10:"Frozen Ocean",11:"Frozen River",12:"Snowy Plains",13:"Snowy Mountains",14:"Mushroom Fields",15:"Mushroom Field Shore",16:"Beach",17:"Desert Hills",18:"Wooded Hills",19:"Taiga Hills",20:"Mountain Edge",21:"Jungle",22:"Jungle Hills",23:"Sparse Jungle",24:"Deep Ocean",25:"Stony Shore",26:"Snowy Beach",27:"Birch Forest",28:"Birch Forest Hills",29:"Dark Forest",30:"Snowy Taiga",31:"Snowy Taiga Hills",32:"Old Growth Pine Taiga",33:"Old Growth Pine Taiga Hills",34:"Windswept Forest",35:"Savanna",36:"Savanna Plateau",37:"Badlands",38:"Wooded Badlands",39:"Badlands Plateau",40:"Small End Islands",41:"End Midlands",42:"End Highlands",43:"End Barrens",44:"Warm Ocean",45:"Lukewarm Ocean",46:"Cold Ocean",47:"Deep Warm Ocean",48:"Deep Lukewarm Ocean",49:"Deep Cold Ocean",50:"Deep Frozen Ocean",127:"The Void",129:"Sunflower Plains",130:"Desert Lakes",131:"Windswept Gravelly Hills",132:"Flower Forest",133:"Taiga Mountains",134:"Swamp Hills",140:"Ice Spikes",149:"Jungle Edge Mutated",151:"Modified Jungle Edge",155:"Old Growth Birch Forest",156:"Birch Forest Mountains",157:"Dark Forest Hills",158:"Snowy Taiga Mountains",160:"Old Growth Spruce Taiga",161:"Giant Spruce Taiga Hills",162:"Modified Gravelly Mountains",163:"Windswept Savanna",164:"Shattered Savanna Plateau",165:"Eroded Badlands",166:"Modified Wooded Badlands Plateau",167:"Modified Badlands Plateau",168:"Bamboo Jungle",169:"Bamboo Jungle Hills",170:"Soul Sand Valley",171:"Crimson Forest",172:"Warped Forest",173:"Basalt Deltas",174:"Dripstone Caves",175:"Lush Caves",177:"Meadow",178:"Grove",179:"Snowy Slopes",180:"Frozen Peaks",181:"Jagged Peaks",182:"Stony Peaks",183:"Cherry Grove",184:"Deep Dark",185:"Mangrove Swamp"}[e]||`Unknown (${e})`}}async function dv(i){const e=new uv(i);return await e.init(),e}const fv={[Xe.Oak]:{baseHeight:4,heightRandA:2,heightRandB:0},[Xe.Birch]:{baseHeight:5,heightRandA:2,heightRandB:0},[Xe.Spruce]:{baseHeight:5,heightRandA:2,heightRandB:3},[Xe.Jungle]:{baseHeight:4,heightRandA:8,heightRandB:0},[Xe.Acacia]:{baseHeight:5,heightRandA:2,heightRandB:0},[Xe.DarkOak]:{baseHeight:6,heightRandA:2,heightRandB:0},[Xe.Cherry]:{baseHeight:4,heightRandA:3,heightRandB:0},[Xe.Mangrove]:{baseHeight:5,heightRandA:3,heightRandB:0},[Xe.Cactus]:{baseHeight:1,heightRandA:2,heightRandB:0}};function lc(i,e){const t=fv[i];return t.baseHeight+e.nextBounded(t.heightRandA+1)+e.nextBounded(t.heightRandB+1)}function cc(i,e,t,n,s){for(let r=0;r<=t;r++){const a=Math.max(0,n-Math.floor(r/2));for(let o=-a;o<=a;o++)for(let c=-a;c<=a;c++)Math.abs(o)===a&&Math.abs(c)===a&&(s.nextBounded(2)===0||r===0)||i.push({dx:o,dy:e-r,dz:c,type:"leaves"})}}function pv(i,e,t,n,s){let r=s.nextBounded(2),a=1,o=0;for(let c=0;c<t;c++){const h=e-c;for(let u=-r;u<=r;u++)for(let d=-r;d<=r;d++)Math.abs(u)===r&&Math.abs(d)===r&&r>0||i.push({dx:u,dy:h,dz:d,type:"leaves"});r>=a?(r=o,o=1,a=Math.min(n,a+1)):r++}}function mv(i,e,t){const n=2+t.nextBounded(2);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++)i.push({dx:s,dy:e,dz:r,type:"leaves"});for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++)s*s+r*r<=n*n+1&&t.nextFloat()>.1&&i.push({dx:s,dy:e-1,dz:r,type:"leaves"})}function gv(i,e,t){for(let n=0;n<3;n++){const s=n===1?3:2;for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++)Math.abs(r)===s&&Math.abs(a)===s||i.push({dx:r,dy:e-n,dz:a,type:"leaves"})}}function vv(i,e,t){const n=[{dx:0,dy:0,dz:0,r:2},{dx:-2,dy:-1,dz:0,r:2},{dx:2,dy:-1,dz:0,r:2},{dx:0,dy:-1,dz:-2,r:2},{dx:0,dy:-1,dz:2,r:2}];for(const s of n)for(let r=-s.r;r<=s.r;r++)for(let a=-s.r;a<=s.r;a++)for(let o=-1;o<=1;o++)r*r+a*a+o*o<=s.r*s.r+1&&t.nextFloat()>.15&&i.push({dx:s.dx+r,dy:e+s.dy+o,dz:s.dz+a,type:"leaves"})}function _v(i,e,t){for(let s=0;s<4;s++){const r=s===0||s===3?2:3;for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++)Math.abs(a)===r&&Math.abs(o)===r&&t.nextBounded(2)===0||i.push({dx:a,dy:e-s,dz:o,type:"leaves"})}}function hc(i){const e=new Map;for(const t of i){const n=`${t.dx},${t.dy},${t.dz}`;e.get(n)?(t.type==="log"||t.type==="cactus")&&e.set(n,t):e.set(n,t)}return Array.from(e.values())}function xv(i,e){const t=[];if(i===Xe.Cactus){const o=lc(i,e);for(let c=0;c<o;c++)t.push({dx:0,dy:c,dz:0,type:"cactus"});return{type:i,blocks:hc(t),trunkHeight:o,foliageRadius:0}}const n=lc(i,e);if(i===Xe.DarkOak||i===Xe.Jungle)for(let o=0;o<n;o++)t.push({dx:0,dy:o,dz:0,type:"log"}),t.push({dx:1,dy:o,dz:0,type:"log"}),t.push({dx:0,dy:o,dz:1,type:"log"}),t.push({dx:1,dy:o,dz:1,type:"log"});else if(i===Xe.Acacia){for(let u=0;u<n-2;u++)t.push({dx:0,dy:u,dz:0,type:"log"});const o=e.nextBounded(4),c=o===0?1:o===1?-1:0,h=o===2?1:o===3?-1:0;t.push({dx:c,dy:n-2,dz:h,type:"log"}),t.push({dx:c*2,dy:n-1,dz:h*2,type:"log"})}else for(let o=0;o<n;o++)t.push({dx:0,dy:o,dz:0,type:"log"});const r=n+1;let a=2;switch(i){case Xe.Oak:case Xe.Birch:a=2,cc(t,r,3,a,e);break;case Xe.Spruce:a=2;const o=Math.max(4,n-2);pv(t,r,o,a,e);break;case Xe.Jungle:a=3,_v(t,r,e);break;case Xe.Acacia:a=3,mv(t,r-1,e);break;case Xe.DarkOak:a=3,gv(t,r);break;case Xe.Cherry:a=4,vv(t,r,e);break;case Xe.Mangrove:a=3,cc(t,r,4,a,e);for(let c=0;c<4;c++){const h=c/4*Math.PI*2,u=Math.round(Math.cos(h)*1.5),d=Math.round(Math.sin(h)*1.5);(u!==0||d!==0)&&(t.push({dx:u,dy:0,dz:d,type:"log"}),t.push({dx:u,dy:1,dz:d,type:"log"}))}break}return{type:i,blocks:hc(t),trunkHeight:n,foliageRadius:a}}function Sv(i,e){switch(i){case X.forest:case X.flower_forest:case X.plains:case X.meadow:case X.sunflower_plains:return e.nextFloat()<.8?Xe.Oak:Xe.Birch;case X.birch_forest:case X.old_growth_birch_forest:return Xe.Birch;case X.dark_forest:case X.pale_garden:return e.nextFloat()<.7?Xe.DarkOak:Xe.Oak;case X.taiga:case X.snowy_taiga:case X.old_growth_pine_taiga:case X.old_growth_spruce_taiga:case X.grove:case X.windswept_forest:return Xe.Spruce;case X.jungle:case X.bamboo_jungle:case X.sparse_jungle:return e.nextFloat()<.3?Xe.Jungle:Xe.Oak;case X.savanna:case X.savanna_plateau:case X.windswept_savanna:return Xe.Acacia;case X.cherry_grove:return Xe.Cherry;case X.swamp:return Xe.Oak;case X.mangrove_swamp:return Xe.Mangrove;case X.desert:return Xe.Cactus;case X.wooded_badlands:return Xe.Oak;default:return null}}function Mv(i){switch(i){case X.forest:case X.flower_forest:case X.birch_forest:case X.dark_forest:return 8;case X.jungle:case X.bamboo_jungle:return 12;case X.taiga:case X.snowy_taiga:case X.old_growth_pine_taiga:case X.old_growth_spruce_taiga:return 6;case X.plains:case X.meadow:case X.sunflower_plains:return 1;case X.savanna:case X.savanna_plateau:return 2;case X.desert:return 2;case X.swamp:case X.mangrove_swamp:return 4;case X.cherry_grove:return 5;case X.grove:case X.windswept_forest:return 4;default:return 0}}l.Air+"",l.Stone+"",l.Dirt+"",l.Grass+"",l.Sand+"",l.Gravel+"",l.Water+"",l.Ice+"",l.Snow+"",l.SnowBlock+"",l.Clay+"",l.Bedrock+"",l.OakLog+"",l.BirchLog+"",l.SpruceLog+"",l.JungleLog+"",l.AcaciaLog+"",l.DarkOakLog+"",l.CherryLog+"",l.MangroveLog+"",l.OakLeaves+"",l.BirchLeaves+"",l.SpruceLeaves+"",l.JungleLeaves+"",l.AcaciaLeaves+"",l.DarkOakLeaves+"",l.CherryLeaves+"",l.MangroveLeaves+"",l.Cactus+"",l.CactusTop+"",l.DeadBush+"",l.TallGrass+"",l.Fern+"",l.Podzol+"",l.Mycelium+"",l.RedSand+"",l.Terracotta+"",l.PackedIce+"",l.BlueIce+"",l.Coral+"",l.Seagrass+"";class bv{generator=null;seed;initialized=!1;initPromise=null;terrainNoise=null;detailNoise=null;constructor(e){this.seed=e;const t=new Tn(e),n=new Tn(e^305419896);this.terrainNoise=new ao(t),this.detailNoise=new ao(n)}async init(){if(!this.initialized)return this.initPromise?this.initPromise:(this.initPromise=(async()=>{this.generator=await dv(BigInt(this.seed)),this.initialized=!0,console.log(`✅ ChunkGenerator initialized with seed: ${this.seed}`)})(),this.initPromise)}isReady(){return this.initialized&&this.generator!==null}generateChunk(e,t){if(!this.generator)throw new Error("Generator not initialized. Call init() first.");const n=new Uint8Array(H*H),s=new Int16Array(H*H),r=new Uint8Array(H*H),a=new Uint8Array(H*H),o=new Uint8Array(H),c=new Uint8Array(H),h=[],u=e*H,d=t*H,p=this.generator.genBiomes2D(1,u,d,H,H,63);for(let g=0;g<H;g++)for(let v=0;v<H;v++){const _=g*H+v,m=u+v,f=d+g,w=p[_];s[_]=w;const M=this.calculateSmoothHeight(m,f,w);n[_]=M}for(let g=0;g<H;g++){const v=u+H,_=d+g,m=this.getBiomeAt(v,_);o[g]=this.calculateSmoothHeight(v,_,m)}for(let g=0;g<H;g++){const v=u+g,_=d+H,m=this.getBiomeAt(v,_);c[g]=this.calculateSmoothHeight(v,_,m)}for(let g=0;g<3;g++)for(let v=0;v<H;v++)for(let _=0;_<H;_++){const m=v*H+_,f=n[m],w=v>0?n[(v-1)*H+_]:f,M=v<H-1?n[(v+1)*H+_]:c[_],b=_>0?n[v*H+(_-1)]:f,R=_<H-1?n[v*H+(_+1)]:o[v],L=[w,M,b,R];let A=Math.min(...L),P=Math.max(...L);n[m]=Math.max(A-1,Math.min(P+1,f))}for(let g=0;g<H;g++)for(let v=0;v<H;v++){const _=g*H+v,m=s[_],f=n[_],w=u+v,M=d+g,{block:b,waterLevel:R}=this.getTopBlock(m,f,w,M);r[_]=b,a[_]=R>0?Kn-f:0}return this.generateTrees(e,t,n,s,r,h),{heightMap:n,biomeMap:s,topBlock:r,trees:h,waterDepth:a,rightNeighborHeights:o,frontNeighborHeights:c}}calculateSmoothHeight(e,t,n){return Kn}isSwampWaterPatch(e,t){if(!this.detailNoise)return!1;const n=.08;return this.detailNoise.sample2D(e*n,t*n)<-.3}isMountainBiome(e){return e===X.windswept_hills||e===X.windswept_gravelly_hills||e===X.windswept_forest||e===X.windswept_savanna||e===X.jagged_peaks||e===X.stony_peaks||e===X.frozen_peaks||e===X.snowy_slopes||e===X.snowy_mountains||e===X.grove||e===X.stony_shore||e>=130&&e<=165}calculateHeight(e,t,n){if(!this.terrainNoise)return Kn;const s=.005,r=this.terrainNoise.sample2D(e*s,t*s);if(this.generator?.isOcean(n)||n===X.river||n===X.frozen_river)return Kn-1;let a=Kn+(r+1)*3;return this.isMountainBiome(n)?a+=3:(n===X.beach||n===X.snowy_beach)&&(a=Kn),Math.round(a)}getTopBlock(e,t,n,s){const r=[X.ocean,X.deep_ocean,X.cold_ocean,X.deep_cold_ocean,X.lukewarm_ocean,X.deep_lukewarm_ocean,X.warm_ocean,0,24,44,45,46,47,48,49,50];if([X.frozen_ocean,X.deep_frozen_ocean,10,50].includes(e))return{block:l.Ice,waterLevel:0};if(r.includes(e))return{block:l.Water,waterLevel:0};if(this.generator?.isOcean(e))return{block:l.Water,waterLevel:0};if(e===X.river||e===7)return{block:l.Water,waterLevel:0};if(e===X.frozen_river||e===11)return{block:l.Ice,waterLevel:0};if(e===X.swamp||e===X.mangrove_swamp)return this.isSwampWaterPatch(n,s)?{block:l.Water,waterLevel:0}:{block:l.Grass,waterLevel:0};switch(e){case X.desert:return{block:l.Sand,waterLevel:0};case X.badlands:case X.eroded_badlands:return{block:l.Terracotta,waterLevel:0};case X.wooded_badlands:case X.wooded_badlands_plateau:return{block:l.RedSand,waterLevel:0};case X.beach:case X.snowy_beach:return{block:l.Sand,waterLevel:0};case X.stony_shore:return{block:l.Stone,waterLevel:0};case X.snowy_plains:case X.snowy_slopes:case X.frozen_peaks:case X.snowy_mountains:return{block:l.Snow,waterLevel:0};case X.ice_spikes:return{block:l.PackedIce,waterLevel:0};case X.jagged_peaks:case X.stony_peaks:return{block:l.Stone,waterLevel:0};case X.windswept_hills:case X.windswept_gravelly_hills:return{block:l.Gravel,waterLevel:0};case X.old_growth_pine_taiga:case X.old_growth_spruce_taiga:return{block:l.Podzol,waterLevel:0};case X.mushroom_fields:return{block:l.Mycelium,waterLevel:0};case X.plains:case X.sunflower_plains:case X.meadow:case X.forest:case X.birch_forest:case X.flower_forest:case X.old_growth_birch_forest:case X.dark_forest:case X.cherry_grove:case X.taiga:case X.snowy_taiga:case X.grove:case X.jungle:case X.bamboo_jungle:case X.sparse_jungle:case X.savanna:case X.savanna_plateau:case X.windswept_savanna:case X.windswept_forest:return{block:l.Grass,waterLevel:0};default:return{block:l.Grass,waterLevel:0}}}generateTrees(e,t,n,s,r,a){const o=new Tn(this.seed^e*341873128712+t*132897987541),c=H/2*H+H/2,h=s[c],u=Mv(h);if(u===0)return;const d=u*3;let p=0;for(let g=0;g<d&&p<u;g++){const v=2+o.nextBounded(H-4),_=2+o.nextBounded(H-4),m=_*H+v,f=s[m],w=n[m],M=r[m];if(M===l.Water||M===l.Ice||w<Kn||f===X.beach||f===X.snowy_beach||f===X.stony_shore)continue;const b=Sv(f,o);if(b===null)continue;const R=b===Xe.Jungle?4:3;let L=!1;for(const P of a){const y=P.x-v,x=P.z-_;if(y*y+x*x<R*R){L=!0;break}}if(L)continue;const A=xv(b,o);a.push({x:v,z:_,type:b,height:A.trunkHeight,blocks:A.blocks}),p++}}isWaterBiome(e){switch(e){case X.ocean:case X.deep_ocean:case X.cold_ocean:case X.deep_cold_ocean:case X.frozen_ocean:case X.deep_frozen_ocean:case X.lukewarm_ocean:case X.deep_lukewarm_ocean:case X.warm_ocean:case X.river:case X.frozen_river:return!0;default:return!1}}hashPosition(e,t){let n=this.seed;return n^=e*374761393,n^=t*668265263,n^=n>>13,n*=1274126177,n>>>0}getBiomeAt(e,t){return this.generator?this.generator.getBiomeAt(1,e,63,t):X.plains}getHeightAt(e,t){const n=this.getBiomeAt(e,t);return this.calculateHeight(e,t,n)}getBiomeColor(e){return this.generator?this.generator.getBiomeColor(e):[128,128,128]}getGrassColor(e){return this.generator?this.generator.getBiomeGrassColor(e):[124,189,80]}getSeed(){return this.seed}getBiomeName(e){return this.generator?this.generator.getBiomeName(e):"Unknown"}isOcean(e){return this.generator?this.generator.isOcean(e):!1}}async function yv(i){const e=new bv(i);return await e.init(),e}const wv="/soundtrack",uc=["music/game/calm1.ogg","music/game/calm2.ogg","music/game/calm3.ogg","music/game/hal1.ogg","music/game/hal2.ogg","music/game/hal3.ogg","music/game/hal4.ogg","music/game/nuance1.ogg","music/game/nuance2.ogg","music/game/piano1.ogg","music/game/piano2.ogg","music/game/piano3.ogg"],Ev=["music/game/creative/creative1.ogg","music/game/creative/creative2.ogg","music/game/creative/creative3.ogg","music/game/creative/creative4.ogg","music/game/creative/creative5.ogg","music/game/creative/creative6.ogg"],Tv=["music/menu/menu1.ogg","music/menu/menu2.ogg","music/menu/menu3.ogg","music/menu/menu4.ogg"],Av=["music/game/water/axolotl.ogg","music/game/water/dragon_fish.ogg","music/game/water/shuniji.ogg"],dc=300*1e3,Cv=900*1e3,fc=3e3;class ki{static instance;currentAudio=null;currentContext="none";volume=.5;enabled=!0;isPlaying=!1;isFading=!1;nextTrackTimeout=null;fadeInterval=null;lastPlayedTracks=[];playedTrackHistory=new Map;constructor(){}static getInstance(){return ki.instance||(ki.instance=new ki),ki.instance}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.currentAudio&&!this.isFading&&(this.currentAudio.volume=this.volume)}getVolume(){return this.volume}setEnabled(e){this.enabled=e,e?this.currentContext!=="none"&&this.scheduleNextTrack(1e3):this.stop()}isEnabled(){return this.enabled}isCurrentlyPlaying(){return this.isPlaying}getCurrentTrackName(){if(!this.currentAudio||!this.isPlaying)return null;const t=this.currentAudio.src.match(/\/([^/]+)\.ogg$/);return t?t[1].replace(/_/g," ").replace(/\d+$/,"").trim():null}setContext(e){if(e===this.currentContext)return;const t=this.currentContext;if(this.currentContext=e,this.isPlaying)this.fadeOut(()=>{e!=="none"&&this.scheduleNextTrack(2e3)});else if(e!=="none"&&this.enabled){const n=t==="none"?5e3:this.getRandomDelay();this.scheduleNextTrack(n)}}start(){!this.enabled||this.currentContext==="none"||this.scheduleNextTrack(3e3)}stop(){this.clearScheduledTrack(),this.currentAudio&&this.fadeOut(()=>{this.currentAudio&&(this.currentAudio.pause(),this.currentAudio=null),this.isPlaying=!1})}skip(){this.currentAudio?this.fadeOut(()=>{this.playNextTrack()}):this.playNextTrack()}scheduleNextTrack(e){this.clearScheduledTrack(),this.nextTrackTimeout=setTimeout(()=>{this.playNextTrack()},e)}clearScheduledTrack(){this.nextTrackTimeout&&(clearTimeout(this.nextTrackTimeout),this.nextTrackTimeout=null)}getTracksForContext(){switch(this.currentContext){case"menu":return Tv;case"creative":return[...uc,...Ev];case"underwater":return Av;case"overworld":default:return uc}}selectRandomTrack(){const e=this.getTracksForContext(),t=e.filter(o=>!this.lastPlayedTracks.includes(o)),n=t.length>0?t:e,s=n.map(o=>1/((this.playedTrackHistory.get(o)||0)+1)),r=s.reduce((o,c)=>o+c,0);let a=Math.random()*r;for(let o=0;o<n.length;o++)if(a-=s[o],a<=0)return n[o];return n[Math.floor(Math.random()*n.length)]}playNextTrack(){if(!this.enabled||this.currentContext==="none")return;const e=this.selectRandomTrack(),t=`${wv}/${e}`;this.lastPlayedTracks.push(e),this.lastPlayedTracks.length>3&&this.lastPlayedTracks.shift(),this.playedTrackHistory.set(e,(this.playedTrackHistory.get(e)||0)+1),this.currentAudio=new Audio(t),this.currentAudio.volume=0,this.currentAudio.addEventListener("ended",()=>{this.isPlaying=!1,this.scheduleNextTrack(this.getRandomDelay())}),this.currentAudio.addEventListener("error",()=>{console.warn(`Failed to load music track: ${e}`),this.isPlaying=!1,this.scheduleNextTrack(5e3)}),this.currentAudio.play().then(()=>{this.isPlaying=!0,this.fadeIn()}).catch(()=>{console.log("Music autoplay blocked, waiting for user interaction")})}fadeIn(){if(!this.currentAudio)return;this.isFading=!0;const e=0,t=this.volume,n=Date.now();this.clearFadeInterval(),this.fadeInterval=setInterval(()=>{const s=Date.now()-n,r=Math.min(1,s/fc);this.currentAudio&&(this.currentAudio.volume=e+(t-e)*r),r>=1&&(this.clearFadeInterval(),this.isFading=!1)},50)}fadeOut(e){if(!this.currentAudio){e?.();return}this.isFading=!0;const t=this.currentAudio.volume,n=Date.now();this.clearFadeInterval(),this.fadeInterval=setInterval(()=>{const s=Date.now()-n,r=Math.min(1,s/fc);this.currentAudio&&(this.currentAudio.volume=t*(1-r)),r>=1&&(this.clearFadeInterval(),this.isFading=!1,this.currentAudio&&this.currentAudio.pause(),this.isPlaying=!1,e?.())},50)}clearFadeInterval(){this.fadeInterval&&(clearInterval(this.fadeInterval),this.fadeInterval=null)}getRandomDelay(){return dc+Math.random()*(Cv-dc)}destroy(){this.stop(),this.clearScheduledTrack(),this.clearFadeInterval()}}function ps(){return ki.getInstance()}var mt=(i=>(i.MoveForward="moveForward",i.MoveBackward="moveBackward",i.MoveLeft="moveLeft",i.MoveRight="moveRight",i.Jump="jump",i.Crouch="crouch",i.Attack="attack",i.Use="use",i.NextSlot="nextSlot",i.PrevSlot="prevSlot",i.OpenInventory="openInventory",i.Pause="pause",i.MenuUp="menuUp",i.MenuDown="menuDown",i.MenuLeft="menuLeft",i.MenuRight="menuRight",i.MenuSelect="menuSelect",i.MenuBack="menuBack",i.ZoomIn="zoomIn",i.ZoomOut="zoomOut",i.CrosshairRight="crosshairRight",i.CrosshairLeft="crosshairLeft",i.CrosshairUp="crosshairUp",i.CrosshairDown="crosshairDown",i))(mt||{});const uh=[{button:0,action:"jump"},{button:1,action:"attack"},{button:2,action:"use"},{button:3,action:"openInventory"},{button:10,action:"crouch"},{button:5,action:"nextSlot"},{button:4,action:"prevSlot"},{button:7,action:"zoomIn"},{button:6,action:"zoomOut"},{button:9,action:"pause"},{button:12,action:"menuUp"},{button:13,action:"menuDown"},{button:14,action:"menuLeft"},{button:15,action:"menuRight"},{button:0,action:"menuSelect"},{button:1,action:"menuBack"}],dh=[{axis:0,positiveAction:"moveRight",negativeAction:"moveLeft",deadzone:.15},{axis:1,positiveAction:"moveForward",negativeAction:"moveBackward",deadzone:.15},{axis:2,positiveAction:"crosshairRight",negativeAction:"crosshairLeft",deadzone:.15},{axis:3,positiveAction:"crosshairDown",negativeAction:"crosshairUp",deadzone:.15}],ua={enabled:!0,deadzone:.15,sensitivity:1,invertY:!1,vibration:!0,buttonMappings:uh,axisMappings:dh},Lv={0:"A / Cross",1:"B / Circle",2:"X / Square",3:"Y / Triangle",4:"LB / L1",5:"RB / R1",6:"LT / L2",7:"RT / R2",8:"Select / Share",9:"Start / Options",10:"L3",11:"R3",12:"D-Pad Up",13:"D-Pad Down",14:"D-Pad Left",15:"D-Pad Right",16:"Home"},Rv={moveForward:"Move Forward",moveBackward:"Move Backward",moveLeft:"Move Left",moveRight:"Move Right",jump:"Jump",crouch:"Crouch",attack:"Attack / Break",use:"Use / Place",nextSlot:"Next Slot",prevSlot:"Previous Slot",openInventory:"Open Inventory",pause:"Pause",menuUp:"Menu Up",menuDown:"Menu Down",menuLeft:"Menu Left",menuRight:"Menu Right",menuSelect:"Menu Select",menuBack:"Menu Back",zoomIn:"Zoom In",zoomOut:"Zoom Out",crosshairRight:"Crosshair Right",crosshairLeft:"Crosshair Left",crosshairUp:"Crosshair Up",crosshairDown:"Crosshair Down"};class Di{static instance;settings;gamepads=new Map;activeGamepadIndex=null;actionStates=new Map;previousActionStates=new Map;commands=new Map;onMenuNavigate;onMenuSelect;onMenuBack;onPause;menuMode=!1;menuRepeatTimers=new Map;MENU_REPEAT_DELAY=400;MENU_REPEAT_RATE=150;constructor(){this.settings=this.loadSettings(),this.initializeActionStates(),this.setupEventListeners(),this.checkConnectedGamepads()}static getInstance(){return Di.instance||(Di.instance=new Di),Di.instance}initializeActionStates(){for(const e of Object.values(mt))this.actionStates.set(e,0),this.previousActionStates.set(e,0)}setupEventListeners(){window.addEventListener("gamepadconnected",e=>{console.log(`🎮 Gamepad connected: ${e.gamepad.id}`),this.onGamepadConnected(e.gamepad)}),window.addEventListener("gamepaddisconnected",e=>{console.log(`🎮 Gamepad disconnected: ${e.gamepad.id}`),this.onGamepadDisconnected(e.gamepad)})}checkConnectedGamepads(){const e=navigator.getGamepads();for(const t of e)t&&this.onGamepadConnected(t)}onGamepadConnected(e){const t={connected:!0,buttons:new Array(e.buttons.length).fill(!1),previousButtons:new Array(e.buttons.length).fill(!1),axes:new Array(e.axes.length).fill(0),previousAxes:new Array(e.axes.length).fill(0)};this.gamepads.set(e.index,t),this.activeGamepadIndex===null&&(this.activeGamepadIndex=e.index)}onGamepadDisconnected(e){if(this.gamepads.delete(e.index),this.activeGamepadIndex===e.index){const t=Array.from(this.gamepads.keys());this.activeGamepadIndex=t.length>0?t[0]:null}}registerCommand(e,t){this.commands.set(e,t)}setMenuMode(e){this.menuMode=e,this.menuRepeatTimers.clear()}isConnected(){return this.activeGamepadIndex!==null&&this.settings.enabled}getGamepadName(){return this.activeGamepadIndex===null?null:navigator.getGamepads()[this.activeGamepadIndex]?.id||null}update(e){if(!this.settings.enabled||this.activeGamepadIndex===null)return;const n=navigator.getGamepads()[this.activeGamepadIndex];if(!n)return;const s=this.gamepads.get(this.activeGamepadIndex);if(s){s.previousButtons=[...s.buttons],s.previousAxes=[...s.axes];for(let r=0;r<n.buttons.length;r++)s.buttons[r]=n.buttons[r].pressed;for(let r=0;r<n.axes.length;r++)s.axes[r]=n.axes[r];for(const[r,a]of this.actionStates)this.previousActionStates.set(r,a);this.computeActionStates(s),this.menuMode?this.processMenuActions(e):this.processGameActions()}}computeActionStates(e){for(const t of Object.values(mt))this.actionStates.set(t,0);for(const t of this.settings.buttonMappings)e.buttons[t.button]&&this.actionStates.set(t.action,1);for(const t of this.settings.axisMappings){const n=e.axes[t.axis]||0,s=t.deadzone??this.settings.deadzone;let r=0;if(Math.abs(n)>s&&(r=(Math.abs(n)-s)/(1-s),r=Math.sign(n)*r),t.axis===1&&this.settings.invertY&&(r=-r),r>0){const a=this.actionStates.get(t.positiveAction)||0;this.actionStates.set(t.positiveAction,Math.max(a,r))}else if(r<0){const a=this.actionStates.get(t.negativeAction)||0;this.actionStates.set(t.negativeAction,Math.max(a,Math.abs(r)))}}}processGameActions(){for(const[e,t]of this.actionStates){const n=this.previousActionStates.get(e)||0;if(t>.5&&n<=.5){const r=this.commands.get(e);r&&r.execute(),e==="pause"&&this.onPause&&this.onPause()}}}processMenuActions(e){const t=performance.now(),n=[{action:"menuUp",dir:"up"},{action:"menuDown",dir:"down"},{action:"menuLeft",dir:"left"},{action:"menuRight",dir:"right"}];for(const{action:u,dir:d}of n){const p=this.actionStates.get(u)||0,g=this.previousActionStates.get(u)||0,v=p>.5&&g<=.5,_=p>.5;if(p<=.5&&g>.5)this.menuRepeatTimers.delete(d);else if(v)this.onMenuNavigate?.(d),vt().playUIClick(),this.menuRepeatTimers.set(d,t+this.MENU_REPEAT_DELAY);else if(_){const f=this.menuRepeatTimers.get(d);f&&t>=f&&(this.onMenuNavigate?.(d),vt().playUIClick(),this.menuRepeatTimers.set(d,t+this.MENU_REPEAT_RATE))}}const s=this.actionStates.get("menuSelect")||0,r=this.previousActionStates.get("menuSelect")||0;s>.5&&r<=.5&&(this.onMenuSelect?.(),vt().playUIClick());const a=this.actionStates.get("menuBack")||0,o=this.previousActionStates.get("menuBack")||0;a>.5&&o<=.5&&(this.onMenuBack?.(),vt().playUIClick());const c=this.actionStates.get("pause")||0,h=this.previousActionStates.get("pause")||0;c>.5&&h<=.5&&(this.onMenuBack?.(),vt().playUIClick())}getActionValue(e){return this.settings.enabled&&this.actionStates.get(e)||0}isActionJustPressed(e){if(!this.settings.enabled)return!1;const t=this.actionStates.get(e)||0,n=this.previousActionStates.get(e)||0;return t>.5&&n<=.5}isActionPressed(e){return this.settings.enabled?(this.actionStates.get(e)||0)>.5:!1}getMovementVector(){if(!this.settings.enabled)return{x:0,y:0};const e=this.actionStates.get("moveLeft")||0,t=this.actionStates.get("moveRight")||0,n=this.actionStates.get("moveForward")||0,s=this.actionStates.get("moveBackward")||0;let r=t-e,a=s-n;r*=this.settings.sensitivity,a*=this.settings.sensitivity;const o=Math.sqrt(r*r+a*a);return o>1&&(r/=o,a/=o),{x:r,y:a}}getCrosshairVector(){if(!this.settings.enabled)return{x:0,y:0};const e=this.actionStates.get("crosshairLeft")||0,t=this.actionStates.get("crosshairRight")||0,n=this.actionStates.get("crosshairUp")||0,s=this.actionStates.get("crosshairDown")||0;let r=t-e,a=s-n;const o=this.settings.sensitivity*.8;return r*=o,a*=o,{x:r,y:a}}vibrate(e,t=.5,n=.5){if(!this.settings.vibration||this.activeGamepadIndex===null)return;const r=navigator.getGamepads()[this.activeGamepadIndex];r?.vibrationActuator&&r.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:e,weakMagnitude:t,strongMagnitude:n}).catch(()=>{})}getSettings(){return{...this.settings}}updateSettings(e){this.settings={...this.settings,...e},this.saveSettings()}setButtonMapping(e,t){["menuUp","menuDown","menuLeft","menuRight","menuSelect","menuBack"].includes(t)||(this.settings.buttonMappings=this.settings.buttonMappings.filter(s=>s.button!==e||["menuUp","menuDown","menuLeft","menuRight","menuSelect","menuBack"].includes(s.action))),this.settings.buttonMappings.push({button:e,action:t}),this.saveSettings()}getButtonForAction(e){return this.settings.buttonMappings.find(n=>n.action===e)?.button??null}resetToDefaults(){this.settings={...ua},this.saveSettings()}loadSettings(){try{const e=localStorage.getItem("isocraft_gamepad_settings");if(e){const t=JSON.parse(e);return{...ua,...t,buttonMappings:t.buttonMappings||uh,axisMappings:t.axisMappings||dh}}}catch{}return{...ua}}saveSettings(){try{localStorage.setItem("isocraft_gamepad_settings",JSON.stringify(this.settings))}catch{}}waitForButtonPress(e=5e3){return new Promise(t=>{const n=performance.now(),s=()=>{if(performance.now()-n>e){t(null);return}if(this.activeGamepadIndex===null){requestAnimationFrame(s);return}const a=navigator.getGamepads()[this.activeGamepadIndex];if(!a){requestAnimationFrame(s);return}for(let o=0;o<a.buttons.length;o++)if(a.buttons[o].pressed){t(o);return}requestAnimationFrame(s)};requestAnimationFrame(s)})}}class Pv{constructor(e){this.onJump=e}execute(){this.onJump()}}class kv{constructor(e,t){this.onCrouchStart=e,this.onCrouchEnd=t}execute(){this.onCrouchStart()}undo(){this.onCrouchEnd?.()}}class Dv{constructor(e,t){this.onAttackStart=e,this.onAttackEnd=t}execute(){this.onAttackStart()}undo(){this.onAttackEnd?.()}}class Iv{constructor(e){this.onUse=e}execute(){this.onUse()}}class pc{constructor(e,t){this.direction=e,this.onChange=t}execute(){this.onChange(this.direction)}}class Uv{constructor(e){this.onOpen=e}execute(){this.onOpen()}}function jt(){return Di.getInstance()}const rs={sound:{masterVolume:100,musicVolume:50,soundEffectsVolume:100,ambientVolume:100},video:{renderDistance:4,zoom:10,graphicsQuality:"high",fogEnabled:!0,particlesEnabled:!0,shaderEnabled:!0},showFPS:!0,musicEnabled:!0};class Nv{container;isVisible=!1;currentScreen="main";settings;focusableElements=[];focusedIndex=0;isRemapping=!1;_remappingAction=null;onResume;onSettingsChange;onToggleDebug;onQuit;constructor(){this.settings=this.loadSettings(),this.container=document.createElement("div"),this.container.id="pause-menu",this.container.style.display="none",this.injectStyles(),this.buildMainMenu(),document.body.appendChild(this.container),this.applySettings(),this.setupGamepadNavigation()}injectStyles(){if(document.getElementById("pause-menu-styles"))return;if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}const e=document.createElement("style");e.id="pause-menu-styles",e.textContent=`
      #pause-menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: ${ot};
        image-rendering: pixelated;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .mc-title {
        color: #fff;
        font-size: 20px;
        margin-bottom: 24px;
        text-shadow: 2px 2px 0 #3f3f3f;
        letter-spacing: 0px;
        font-family: ${ot};
      }
      
      .mc-button-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: center;
      }
      
      .mc-button-row {
        display: flex;
        gap: 6px;
        justify-content: center;
      }
      
      .mc-button {
        min-width: 200px;
        height: 40px;
        padding: 0 20px;
        font-family: ${ot};
        font-size: 16px;
        color: #e0e0e0;
        text-shadow: 2px 2px 0 #383838;
        border: 3px solid;
        border-top-color: #aaa;
        border-left-color: #aaa;
        border-right-color: #555;
        border-bottom-color: #555;
        background: linear-gradient(to bottom, 
          #737373 0%, 
          #6a6a6a 40%, 
          #585858 50%, 
          #6a6a6a 60%, 
          #737373 100%);
        cursor: pointer;
        transition: none;
        position: relative;
        box-shadow: 
          inset 1px 1px 0 rgba(255,255,255,0.15),
          inset -1px -1px 0 rgba(0,0,0,0.2);
      }
      
      .mc-button:hover {
        color: #ffffa0;
        background: linear-gradient(to bottom, 
          #6686b4 0%, 
          #5d7aa8 40%, 
          #4a6590 50%, 
          #5d7aa8 60%, 
          #6686b4 100%);
        border-top-color: #aab8d4;
        border-left-color: #aab8d4;
        border-right-color: #4a5568;
        border-bottom-color: #4a5568;
      }
      
      .mc-button:active {
        background: linear-gradient(to bottom, #5a5a5a 0%, #505050 50%, #4a4a4a 100%);
      }
      
      .mc-button.half {
        min-width: 150px;
        width: 150px;
      }
      
      .mc-button.wide {
        min-width: 400px;
      }
      
      .mc-slider-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 400px;
        margin: 4px 0;
      }
      
      .mc-slider-row {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 400px;
      }
      
      .mc-slider-label {
        color: #fff;
        font-size: 14px;
        font-family: ${ot};
        text-shadow: 2px 2px 0 #3f3f3f;
        min-width: 160px;
      }
      
      .mc-slider {
        flex: 1;
        height: 40px;
        appearance: none;
        background: linear-gradient(to bottom, 
          #737373 0%, 
          #6a6a6a 40%, 
          #585858 50%, 
          #6a6a6a 60%, 
          #737373 100%);
        border: 3px solid;
        border-top-color: #aaa;
        border-left-color: #aaa;
        border-right-color: #555;
        border-bottom-color: #555;
        cursor: pointer;
        position: relative;
      }
      
      .mc-slider::-webkit-slider-thumb {
        appearance: none;
        width: 8px;
        height: 34px;
        background: linear-gradient(to bottom, #e0e0e0 0%, #c0c0c0 50%, #a0a0a0 100%);
        border: 2px solid;
        border-color: #fff #666 #666 #fff;
        cursor: pointer;
      }
      
      .mc-slider::-moz-range-thumb {
        width: 8px;
        height: 34px;
        background: linear-gradient(to bottom, #e0e0e0 0%, #c0c0c0 50%, #a0a0a0 100%);
        border: 2px solid;
        border-color: #fff #666 #666 #fff;
        cursor: pointer;
      }
      
      .mc-slider:hover::-webkit-slider-thumb {
        background: linear-gradient(to bottom, #ffffa0 0%, #e0e080 50%, #c0c060 100%);
      }
      
      .mc-slider-value {
        color: #fff;
        font-size: 14px;
        font-family: ${ot};
        text-shadow: 2px 2px 0 #3f3f3f;
        min-width: 50px;
        text-align: right;
      }
      
      .mc-toggle {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 8px 0;
        width: 400px;
        justify-content: space-between;
      }
      
      .mc-toggle-label {
        color: #fff;
        font-size: 14px;
        font-family: ${ot};
        text-shadow: 2px 2px 0 #3f3f3f;
      }
      
      .mc-toggle-btn {
        min-width: 180px;
        height: 40px;
        font-family: ${ot};
        font-size: 14px;
        color: #e0e0e0;
        text-shadow: 2px 2px 0 #383838;
        border: 3px solid;
        border-top-color: #aaa;
        border-left-color: #aaa;
        border-right-color: #555;
        border-bottom-color: #555;
        background: linear-gradient(to bottom, 
          #737373 0%, 
          #6a6a6a 40%, 
          #585858 50%, 
          #6a6a6a 60%, 
          #737373 100%);
        cursor: pointer;
      }
      
      .mc-toggle-btn:hover {
        color: #ffffa0;
        background: linear-gradient(to bottom, 
          #6686b4 0%, 
          #5d7aa8 40%, 
          #4a6590 50%, 
          #5d7aa8 60%, 
          #6686b4 100%);
      }
      
      .mc-toggle-btn.on {
        color: #5f5;
      }
      
      .mc-toggle-btn.off {
        color: #f55;
      }
      
      .mc-divider {
        width: 400px;
        height: 0px;
        margin: 12px 0;
      }
      
      .mc-section-title {
        color: #fff;
        font-size: 14px;
        font-family: ${ot};
        text-shadow: 2px 2px 0 #3f3f3f;
        margin: 16px 0 8px 0;
        width: 400px;
        text-align: center;
      }
      
      .mc-about-container {
        max-width: 500px;
        padding: 20px;
        text-align: center;
      }
      
      .mc-about-text {
        color: #ddd;
        font-size: 12px;
        font-family: ${ot};
        text-shadow: 1px 1px 0 #222;
        line-height: 1.6;
        margin-bottom: 20px;
      }
      
      .mc-about-credit {
        color: #fff;
        font-size: 14px;
        font-family: ${ot};
        text-shadow: 2px 2px 0 #3f3f3f;
        margin: 20px 0;
      }
      
      .mc-about-link {
        color: #5af;
        text-decoration: none;
        font-family: ${ot};
      }
      
      .mc-about-link:hover {
        color: #8cf;
        text-decoration: underline;
      }
      
      .mc-footer-credit {
        color: #888;
        font-size: 11px;
        font-family: ${ot};
        text-shadow: 1px 1px 0 #222;
        margin-top: 24px;
      }
      
      .mc-footer-credit a {
        color: #aaa;
        text-decoration: none;
      }
      
      .mc-footer-credit a:hover {
        color: #5af;
        text-decoration: underline;
      }
      
      /* Gamepad focus styles */
      .mc-button.gamepad-focus,
      .mc-toggle-btn.gamepad-focus,
      .mc-slider.gamepad-focus {
        outline: 3px solid #fff;
        outline-offset: 2px;
        animation: gamepad-focus-pulse 1s ease-in-out infinite;
      }
      
      @keyframes gamepad-focus-pulse {
        0%, 100% { outline-color: #fff; }
        50% { outline-color: #ffffa0; }
      }
      
      .mc-button.gamepad-focus {
        color: #ffffa0;
        background: linear-gradient(to bottom, 
          #6686b4 0%, 
          #5d7aa8 40%, 
          #4a6590 50%, 
          #5d7aa8 60%, 
          #6686b4 100%);
      }
      
      /* Gamepad indicator */
      .gamepad-indicator {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 8px 12px;
        background: rgba(0, 0, 0, 0.7);
        border: 2px solid #555;
        border-radius: 4px;
        color: #aaa;
        font-size: 11px;
        font-family: ${ot};
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 10001;
      }
      
      .gamepad-indicator.connected {
        border-color: #5f5;
        color: #5f5;
      }
      
      .gamepad-icon {
        width: 16px;
        height: 16px;
      }
      
      /* Controls menu specific styles */
      .mc-controls-grid {
        display: grid;
        grid-template-columns: 1fr 150px;
        gap: 8px;
        width: 400px;
        margin: 8px 0;
      }
      
      .mc-control-row {
        display: contents;
      }
      
      .mc-control-label {
        color: #ddd;
        font-size: 12px;
        font-family: ${ot};
        text-shadow: 1px 1px 0 #222;
        padding: 8px 0;
        text-align: left;
      }
      
      .mc-control-btn {
        min-width: 120px;
        height: 32px;
        font-family: ${ot};
        font-size: 11px;
        color: #e0e0e0;
        text-shadow: 1px 1px 0 #383838;
        border: 2px solid;
        border-top-color: #aaa;
        border-left-color: #aaa;
        border-right-color: #555;
        border-bottom-color: #555;
        background: linear-gradient(to bottom, 
          #737373 0%, 
          #6a6a6a 40%, 
          #585858 50%, 
          #6a6a6a 60%, 
          #737373 100%);
        cursor: pointer;
      }
      
      .mc-control-btn:hover,
      .mc-control-btn.gamepad-focus {
        color: #ffffa0;
        background: linear-gradient(to bottom, 
          #6686b4 0%, 
          #5d7aa8 40%, 
          #4a6590 50%, 
          #5d7aa8 60%, 
          #6686b4 100%);
      }
      
      .mc-control-btn.remapping {
        color: #ff5;
        animation: remap-pulse 0.5s ease-in-out infinite;
      }
      
      @keyframes remap-pulse {
        0%, 100% { background-color: #6686b4; }
        50% { background-color: #8896c4; }
      }
      
      .mc-gamepad-status {
        color: #888;
        font-size: 11px;
        font-family: ${ot};
        text-shadow: 1px 1px 0 #222;
        margin: 8px 0;
        padding: 8px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        width: 384px;
        text-align: center;
      }
      
      .mc-gamepad-status.connected {
        color: #5f5;
      }
    `,document.head.appendChild(e)}setupGamepadNavigation(){const e=jt();e.onMenuNavigate=t=>{if(!(!this.isVisible||this.isRemapping)){if(t==="up")this.moveFocus(-1);else if(t==="down")this.moveFocus(1);else if(t==="left"||t==="right"){const n=this.focusableElements[this.focusedIndex];if(n?.classList.contains("mc-slider")){const s=n,r=t==="left"?-5:5,a=Math.max(parseInt(s.min),Math.min(parseInt(s.max),parseInt(s.value)+r));s.value=String(a),s.dispatchEvent(new Event("input")),s.dispatchEvent(new Event("change"))}}}},e.onMenuSelect=()=>{if(!this.isVisible||this.isRemapping)return;const t=this.focusableElements[this.focusedIndex];t&&t.click()},e.onMenuBack=()=>{if(this.isVisible){if(this.isRemapping){this.isRemapping=!1,this._remappingAction=null,this.buildControlsMenu();return}this.currentScreen==="main"?(this.hide(),this.onResume?.()):this.currentScreen==="options"?this.buildMainMenu():this.buildOptionsMenu()}}}updateFocusableElements(){this.focusableElements.forEach(e=>e.classList.remove("gamepad-focus")),this.focusableElements=Array.from(this.container.querySelectorAll(".mc-button, .mc-toggle-btn, .mc-slider, .mc-control-btn")).filter(e=>!e.hasAttribute("disabled")),this.focusedIndex=0,this.updateFocusVisual()}moveFocus(e){this.focusableElements.length!==0&&(this.focusableElements[this.focusedIndex]?.classList.remove("gamepad-focus"),this.focusedIndex+=e,this.focusedIndex<0?this.focusedIndex=this.focusableElements.length-1:this.focusedIndex>=this.focusableElements.length&&(this.focusedIndex=0),this.updateFocusVisual())}updateFocusVisual(){const e=this.focusableElements[this.focusedIndex];e&&(e.classList.add("gamepad-focus"),e.scrollIntoView({behavior:"smooth",block:"center"}))}buildMainMenu(){this.container.innerHTML=`
      <div class="mc-title">Game Menu</div>
      <div class="mc-button-container">
        <button class="mc-button wide" id="btn-resume">Back to Game</button>
        <button class="mc-button wide" id="btn-quit">Regenerate World</button>
      </div>
    `,this.currentScreen="main",this.attachMainMenuListeners(),this.updateFocusableElements()}attachMainMenuListeners(){this.container.querySelector("#btn-resume")?.addEventListener("click",()=>{this.playClickSound(),this.hide(),this.onResume?.()}),this.container.querySelector("#btn-quit")?.addEventListener("click",()=>{this.playClickSound(),this.onQuit?.(),window.location.reload()})}buildOptionsMenu(){const t=jt().isConnected();this.container.innerHTML=`
      <div class="mc-title">Options</div>
      <div class="mc-button-container">
        <button class="mc-button wide" id="btn-sound">Music & Sounds...</button>
        <button class="mc-button wide" id="btn-video">Video Settings...</button>
        <button class="mc-button wide" id="btn-controls">Controls...</button>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Debug Screen (F3):</span>
          <button class="mc-toggle-btn ${this.settings.showFPS?"on":"off"}" id="btn-toggle-debug">
            ${this.settings.showFPS?"ON":"OFF"}
          </button>
        </div>
        
        <button class="mc-button wide" id="btn-about">About...</button>
        <button class="mc-button wide" id="btn-back-options">Done</button>
      </div>
      ${t?`
        <div class="gamepad-indicator connected">
          <span>🎮</span>
          <span>Controller Connected</span>
        </div>
      `:""}
    `,this.currentScreen="options",this.attachOptionsMenuListeners(),this.updateFocusableElements()}attachOptionsMenuListeners(){this.container.querySelector("#btn-sound")?.addEventListener("click",()=>{this.playClickSound(),this.buildSoundMenu()}),this.container.querySelector("#btn-video")?.addEventListener("click",()=>{this.playClickSound(),this.buildVideoMenu()}),this.container.querySelector("#btn-controls")?.addEventListener("click",()=>{this.playClickSound(),this.buildControlsMenu()}),this.container.querySelector("#btn-toggle-debug")?.addEventListener("click",()=>{this.playClickSound(),this.settings.showFPS=!this.settings.showFPS,this.saveSettings(),this.onToggleDebug?.(),this.buildOptionsMenu()}),this.container.querySelector("#btn-about")?.addEventListener("click",()=>{this.playClickSound(),this.buildAboutMenu()}),this.container.querySelector("#btn-back-options")?.addEventListener("click",()=>{this.playClickSound(),this.buildMainMenu()})}buildSoundMenu(){const e=ps();this.container.innerHTML=`
      <div class="mc-title">Music & Sound Options</div>
      <div class="mc-button-container">
        
        <div class="mc-section-title">Volume Controls</div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Master Volume:</span>
          <input type="range" class="mc-slider" id="slider-master" min="0" max="100" value="${this.settings.sound.masterVolume}">
          <span class="mc-slider-value" id="val-master">${this.settings.sound.masterVolume}%</span>
        </div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Music:</span>
          <input type="range" class="mc-slider" id="slider-music" min="0" max="100" value="${this.settings.sound.musicVolume}">
          <span class="mc-slider-value" id="val-music">${this.settings.sound.musicVolume}%</span>
        </div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Sound Effects:</span>
          <input type="range" class="mc-slider" id="slider-sfx" min="0" max="100" value="${this.settings.sound.soundEffectsVolume}">
          <span class="mc-slider-value" id="val-sfx">${this.settings.sound.soundEffectsVolume}%</span>
        </div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Ambient/Environment:</span>
          <input type="range" class="mc-slider" id="slider-ambient" min="0" max="100" value="${this.settings.sound.ambientVolume}">
          <span class="mc-slider-value" id="val-ambient">${this.settings.sound.ambientVolume}%</span>
        </div>
        
        <div class="mc-divider"></div>
        
        <div class="mc-section-title">Music Settings</div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Background Music:</span>
          <button class="mc-toggle-btn ${this.settings.musicEnabled?"on":"off"}" id="btn-toggle-music">
            ${this.settings.musicEnabled?"ON":"OFF"}
          </button>
        </div>
        
        <button class="mc-button" id="btn-skip-track" ${e.isCurrentlyPlaying()?"":"disabled"}>
          Skip Current Track
        </button>
        
        <div class="mc-divider"></div>
        
        <button class="mc-button wide" id="btn-back-sound">Done</button>
      </div>
    `,this.currentScreen="sound",this.attachSoundMenuListeners(),this.updateFocusableElements()}attachSoundMenuListeners(){const e=ps(),t=this.container.querySelector("#slider-master"),n=this.container.querySelector("#val-master");t?.addEventListener("input",()=>{const u=parseInt(t.value);this.settings.sound.masterVolume=u,n.textContent=`${u}%`,this.applySettings()}),t?.addEventListener("change",()=>this.saveSettings());const s=this.container.querySelector("#slider-music"),r=this.container.querySelector("#val-music");s?.addEventListener("input",()=>{const u=parseInt(s.value);this.settings.sound.musicVolume=u,r.textContent=`${u}%`,this.applySettings()}),s?.addEventListener("change",()=>this.saveSettings());const a=this.container.querySelector("#slider-sfx"),o=this.container.querySelector("#val-sfx");a?.addEventListener("input",()=>{const u=parseInt(a.value);this.settings.sound.soundEffectsVolume=u,o.textContent=`${u}%`,this.applySettings()}),a?.addEventListener("change",()=>this.saveSettings());const c=this.container.querySelector("#slider-ambient"),h=this.container.querySelector("#val-ambient");c?.addEventListener("input",()=>{const u=parseInt(c.value);this.settings.sound.ambientVolume=u,h.textContent=`${u}%`,this.applySettings()}),c?.addEventListener("change",()=>this.saveSettings()),this.container.querySelector("#btn-toggle-music")?.addEventListener("click",()=>{this.playClickSound(),this.settings.musicEnabled=!this.settings.musicEnabled,e.setEnabled(this.settings.musicEnabled),this.saveSettings(),this.buildSoundMenu()}),this.container.querySelector("#btn-skip-track")?.addEventListener("click",()=>{this.playClickSound(),e.skip()}),this.container.querySelector("#btn-back-sound")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}buildVideoMenu(){const e={low:"Fast",medium:"Fancy",high:"Fabulous"};this.container.innerHTML=`
      <div class="mc-title">Video Settings</div>
      <div class="mc-button-container">
        
        <div class="mc-section-title">Performance</div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Render Distance:</span>
          <input type="range" class="mc-slider" id="slider-render-distance" min="2" max="8" value="${this.settings.video.renderDistance}">
          <span class="mc-slider-value" id="val-render-distance">${this.settings.video.renderDistance} chunks</span>
        </div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Graphics:</span>
          <button class="mc-toggle-btn" id="btn-graphics-quality">
            ${e[this.settings.video.graphicsQuality]}
          </button>
        </div>
        
        <div class="mc-divider"></div>
        
        <div class="mc-section-title">View Settings</div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Camera Zoom:</span>
          <input type="range" class="mc-slider" id="slider-zoom" min="5" max="26" value="${this.settings.video.zoom}">
          <span class="mc-slider-value" id="val-zoom">${this.settings.video.zoom}</span>
        </div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Fog:</span>
          <button class="mc-toggle-btn ${this.settings.video.fogEnabled?"on":"off"}" id="btn-toggle-fog">
            ${this.settings.video.fogEnabled?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Particles:</span>
          <button class="mc-toggle-btn ${this.settings.video.particlesEnabled?"on":"off"}" id="btn-toggle-particles">
            ${this.settings.video.particlesEnabled?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-divider"></div>
        
        <button class="mc-button wide" id="btn-back-video">Done</button>
      </div>
    `,this.currentScreen="video",this.attachVideoMenuListeners(),this.updateFocusableElements()}attachVideoMenuListeners(){const e=["low","medium","high"],t={low:"Fast",medium:"Fancy",high:"Fabulous"},n=this.container.querySelector("#slider-render-distance"),s=this.container.querySelector("#val-render-distance");n?.addEventListener("input",()=>{const c=parseInt(n.value);this.settings.video.renderDistance=c,s.textContent=`${c} chunks`,this.applySettings()}),n?.addEventListener("change",()=>this.saveSettings());const r=this.container.querySelector("#slider-zoom"),a=this.container.querySelector("#val-zoom");r?.addEventListener("input",()=>{const c=parseInt(r.value);this.settings.video.zoom=c,a.textContent=`${c}`,this.applySettings()}),r?.addEventListener("change",()=>this.saveSettings());const o=this.container.querySelector("#btn-graphics-quality");o?.addEventListener("click",()=>{this.playClickSound();const h=(e.indexOf(this.settings.video.graphicsQuality)+1)%e.length;this.settings.video.graphicsQuality=e[h],o.textContent=t[this.settings.video.graphicsQuality],this.saveSettings()}),this.container.querySelector("#btn-toggle-fog")?.addEventListener("click",()=>{this.playClickSound(),this.settings.video.fogEnabled=!this.settings.video.fogEnabled,this.saveSettings(),this.buildVideoMenu()}),this.container.querySelector("#btn-toggle-particles")?.addEventListener("click",()=>{this.playClickSound(),this.settings.video.particlesEnabled=!this.settings.video.particlesEnabled,this.saveSettings(),this.buildVideoMenu()}),this.container.querySelector("#btn-back-video")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}buildControlsMenu(){const e=jt(),t=e.getSettings(),n=e.isConnected(),s=e.getGamepadName(),a=[mt.Jump,mt.Crouch,mt.Attack,mt.Use,mt.NextSlot,mt.PrevSlot,mt.ZoomIn,mt.ZoomOut].map(o=>{const c=e.getButtonForAction(o),h=c!==null?Lv[c]:"None";return`
        <div class="mc-control-row">
          <span class="mc-control-label">${Rv[o]}:</span>
          <button class="mc-control-btn" data-action="${o}">${h}</button>
        </div>
      `}).join("");this.container.innerHTML=`
      <div class="mc-title">Controls</div>
      <div class="mc-button-container">
        
        <div class="mc-gamepad-status ${n?"connected":""}">
          ${n?`🎮 ${s?s.substring(0,40):"Controller Connected"}`:"🎮 No controller connected"}
        </div>
        
        <div class="mc-section-title">Gamepad Settings</div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Gamepad Enabled:</span>
          <button class="mc-toggle-btn ${t.enabled?"on":"off"}" id="btn-toggle-gamepad">
            ${t.enabled?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Stick Deadzone:</span>
          <input type="range" class="mc-slider" id="slider-deadzone" min="5" max="40" value="${Math.round(t.deadzone*100)}">
          <span class="mc-slider-value" id="val-deadzone">${Math.round(t.deadzone*100)}%</span>
        </div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Sensitivity:</span>
          <input type="range" class="mc-slider" id="slider-sensitivity" min="50" max="150" value="${Math.round(t.sensitivity*100)}">
          <span class="mc-slider-value" id="val-sensitivity">${Math.round(t.sensitivity*100)}%</span>
        </div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Invert Y Axis:</span>
          <button class="mc-toggle-btn ${t.invertY?"on":"off"}" id="btn-toggle-inverty">
            ${t.invertY?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Vibration:</span>
          <button class="mc-toggle-btn ${t.vibration?"on":"off"}" id="btn-toggle-vibration">
            ${t.vibration?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-divider"></div>
        
        <div class="mc-section-title">Button Mappings</div>
        <div class="mc-about-text" style="width: 400px; margin-bottom: 8px;">
          Click a button to remap it. Press any gamepad button to assign.
        </div>
        
        <div class="mc-controls-grid">
          ${a}
        </div>
        
        <div class="mc-divider"></div>
        
        <button class="mc-button" id="btn-reset-controls">Reset to Defaults</button>
        <button class="mc-button wide" id="btn-back-controls">Done</button>
      </div>
    `,this.currentScreen="controls",this.attachControlsMenuListeners(),this.updateFocusableElements()}attachControlsMenuListeners(){const e=jt();this.container.querySelector("#btn-toggle-gamepad")?.addEventListener("click",()=>{this.playClickSound();const a=e.getSettings();e.updateSettings({enabled:!a.enabled}),this.buildControlsMenu()});const t=this.container.querySelector("#slider-deadzone"),n=this.container.querySelector("#val-deadzone");t?.addEventListener("input",()=>{const a=parseInt(t.value);n.textContent=`${a}%`,e.updateSettings({deadzone:a/100})});const s=this.container.querySelector("#slider-sensitivity"),r=this.container.querySelector("#val-sensitivity");s?.addEventListener("input",()=>{const a=parseInt(s.value);r.textContent=`${a}%`,e.updateSettings({sensitivity:a/100})}),this.container.querySelector("#btn-toggle-inverty")?.addEventListener("click",()=>{this.playClickSound();const a=e.getSettings();e.updateSettings({invertY:!a.invertY}),this.buildControlsMenu()}),this.container.querySelector("#btn-toggle-vibration")?.addEventListener("click",()=>{this.playClickSound();const a=e.getSettings();e.updateSettings({vibration:!a.vibration}),a.vibration||e.vibrate(200,.5,.5),this.buildControlsMenu()}),this.container.querySelectorAll(".mc-control-btn[data-action]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.getAttribute("data-action");if(!o)return;this.playClickSound(),this.isRemapping=!0,this._remappingAction=o,a.textContent="Press button...",a.classList.add("remapping");const c=await e.waitForButtonPress(5e3);this.isRemapping=!1,this._remappingAction=null,c!==null&&(e.setButtonMapping(c,o),this.playClickSound()),this.buildControlsMenu()})}),this.container.querySelector("#btn-reset-controls")?.addEventListener("click",()=>{this.playClickSound(),e.resetToDefaults(),this.buildControlsMenu()}),this.container.querySelector("#btn-back-controls")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}buildAboutMenu(){this.container.innerHTML=`
      <div class="mc-title">About</div>
      <div class="mc-about-container">
        <div class="mc-about-text">
          IsoCraft is an open-source, isometric Minecraft-inspired game built with Three.js that runs entirely in your browser.
        </div>
        
        <div class="mc-about-credit">
          Created by <a href="https://www.guidavid.com/" target="_blank" rel="noopener noreferrer" class="mc-about-link">Gui Dávid</a>
        </div>
        
        <div class="mc-about-credit">
          <a href="https://github.com/gdavidss/isocraft" target="_blank" rel="noopener noreferrer" class="mc-about-link">⭐ View on GitHub</a>
        </div>
        
        <div class="mc-divider"></div>
        
        <div class="mc-about-text" style="font-size: 10px; color: #888;">
          NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT. This is an independent fan project for educational and non-commercial purposes.
        </div>
        
        <div class="mc-divider"></div>
        
        <button class="mc-button wide" id="btn-back-about">Done</button>
      </div>
    `,this.currentScreen="about",this.attachAboutMenuListeners(),this.updateFocusableElements()}attachAboutMenuListeners(){this.container.querySelector("#btn-back-about")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}playClickSound(){vt().playUIClick()}applySettings(){const e=vt(),t=ps(),n=this.settings.sound.masterVolume/100;e.setMasterVolume(n*(this.settings.sound.soundEffectsVolume/100)),t.setVolume(n*(this.settings.sound.musicVolume/100)),t.setEnabled(this.settings.musicEnabled),this.onSettingsChange?.(this.settings)}loadSettings(){try{const e=localStorage.getItem("isocraft_settings");if(e){const t=JSON.parse(e),n={...rs,...t,sound:{...rs.sound,...t.sound||{}},video:{...rs.video,...t.video||{}}};return n.video.zoom=rs.video.zoom,n.video.shaderEnabled=!0,n.video.graphicsQuality="high",n}}catch{}return{...rs}}saveSettings(){this.settings.video.shaderEnabled=!0,this.settings.video.graphicsQuality="high";try{localStorage.setItem("isocraft_settings",JSON.stringify(this.settings))}catch{}this.applySettings()}getSettings(){return{...this.settings}}toggleDebugSetting(){this.settings.showFPS=!this.settings.showFPS,this.saveSettings()}show(){this.isVisible||(this.isVisible=!0,this.container.style.display="flex",this.buildMainMenu(),jt().setMenuMode(!0),this.playClickSound())}hide(){this.isVisible&&(this.isVisible=!1,this.container.style.display="none",jt().setMenuMode(!1))}toggle(){this.isVisible?this.currentScreen==="sound"||this.currentScreen==="video"||this.currentScreen==="about"||this.currentScreen==="controls"?(this.playClickSound(),this.buildOptionsMenu()):this.currentScreen==="options"?(this.playClickSound(),this.buildMainMenu()):(this.hide(),this.onResume?.()):this.show()}isMenuVisible(){return this.isVisible}destroy(){this.container.remove();const e=document.getElementById("pause-menu-styles");e&&e.remove()}}class Ov{container;visible=!1;settings;onChangeCallback=null;waterYOffset=0;onWaterYChangeCallback=null;constructor(){this.settings={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3},this.container=document.createElement("div"),this.container.className="swim-debug-ui",this.container.style.display="none",this.buildUI(),this.addStyles(),document.body.appendChild(this.container),window.addEventListener("keydown",e=>{e.code==="KeyW"&&e.shiftKey&&(e.preventDefault(),this.toggleVisibility())})}setOnChange(e){this.onChangeCallback=e}setOnWaterYChange(e){this.onWaterYChangeCallback=e}buildUI(){this.container.innerHTML=`
      <div class="swim-panel">
        <div class="swim-title">🏊 Swim Debug (Shift+W)</div>
        
        <div class="swim-section">
          <div class="section-title">Water Position (Game3D)</div>
          
          <div class="slider-row">
            <label>Water Y Offset</label>
            <input type="range" id="swim-water-y" min="-1" max="2" step="0.05" value="${this.waterYOffset}">
            <span class="slider-value" id="swim-water-y-val">${this.waterYOffset.toFixed(2)}</span>
          </div>
        </div>
        
        <div class="swim-section">
          <div class="section-title">Mesh Position Offsets</div>
          
          <div class="slider-row">
            <label>Height Offset</label>
            <input type="range" id="swim-height" min="-3" max="1" step="0.05" value="${this.settings.heightOffset}">
            <span class="slider-value" id="swim-height-val">${this.settings.heightOffset.toFixed(2)}</span>
          </div>
          
          <div class="slider-row">
            <label>Pivot Offset Y</label>
            <input type="range" id="swim-pivot-y" min="-2" max="2" step="0.05" value="${this.settings.pivotOffsetY}">
            <span class="slider-value" id="swim-pivot-y-val">${this.settings.pivotOffsetY.toFixed(2)}</span>
          </div>
          
          <div class="slider-row">
            <label>Pivot Offset Z</label>
            <input type="range" id="swim-pivot-z" min="-2" max="2" step="0.05" value="${this.settings.pivotOffsetZ}">
            <span class="slider-value" id="swim-pivot-z-val">${this.settings.pivotOffsetZ.toFixed(2)}</span>
          </div>
        </div>
        
        <div class="swim-section">
          <div class="section-title">Rotation</div>
          
          <div class="slider-row">
            <label>Mesh Rotation X</label>
            <input type="range" id="swim-mesh-rot" min="0" max="${Math.PI}" step="0.05" value="${this.settings.meshRotationX}">
            <span class="slider-value" id="swim-mesh-rot-val">${this.settings.meshRotationX.toFixed(2)}</span>
          </div>
          
          <div class="slider-row">
            <label>Head Rotation X</label>
            <input type="range" id="swim-head-rot" min="${-Math.PI}" max="${Math.PI}" step="0.05" value="${this.settings.headRotationX}">
            <span class="slider-value" id="swim-head-rot-val">${this.settings.headRotationX.toFixed(2)}</span>
          </div>
        </div>
        
        <div class="swim-actions">
          <button id="swim-reset">Reset Defaults</button>
          <button id="swim-copy">Copy Values</button>
        </div>
        
        <div class="swim-output" id="swim-output"></div>
      </div>
    `,setTimeout(()=>this.bindEvents(),0)}bindEvents(){const e=document.getElementById("swim-water-y"),t=document.getElementById("swim-water-y-val");e?.addEventListener("input",()=>{this.waterYOffset=parseFloat(e.value),t&&(t.textContent=this.waterYOffset.toFixed(2)),this.onWaterYChangeCallback?.(this.waterYOffset)}),this.bindSlider("swim-height","heightOffset"),this.bindSlider("swim-pivot-y","pivotOffsetY"),this.bindSlider("swim-pivot-z","pivotOffsetZ"),this.bindSlider("swim-mesh-rot","meshRotationX"),this.bindSlider("swim-head-rot","headRotationX"),document.getElementById("swim-reset")?.addEventListener("click",()=>{this.resetDefaults()}),document.getElementById("swim-copy")?.addEventListener("click",()=>{this.copyValues()})}bindSlider(e,t){const n=document.getElementById(e),s=document.getElementById(`${e}-val`);!n||!s||n.addEventListener("input",()=>{const r=parseFloat(n.value);this.settings[t]=r,s.textContent=r.toFixed(2),this.onChangeCallback?.(this.settings)})}resetDefaults(){this.settings={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3},this.waterYOffset=0,this.updateSlider("swim-water-y",this.waterYOffset),this.updateSlider("swim-height",this.settings.heightOffset),this.updateSlider("swim-pivot-y",this.settings.pivotOffsetY),this.updateSlider("swim-pivot-z",this.settings.pivotOffsetZ),this.updateSlider("swim-mesh-rot",this.settings.meshRotationX),this.updateSlider("swim-head-rot",this.settings.headRotationX),this.onChangeCallback?.(this.settings),this.onWaterYChangeCallback?.(this.waterYOffset)}updateSlider(e,t){const n=document.getElementById(e),s=document.getElementById(`${e}-val`);n&&(n.value=String(t)),s&&(s.textContent=t.toFixed(2))}copyValues(){const e=`// Swim pose settings
const DEFAULT_SWIM_POSE: SwimPoseConfig = {
  name: "Diving Down",
  meshRotationX: ${this.settings.meshRotationX.toFixed(2)},
  bodyRotationX: ${this.settings.bodyRotationX.toFixed(2)},
  headRotationX: ${this.settings.headRotationX.toFixed(2)},
  armForwardAngle: ${this.settings.armForwardAngle.toFixed(2)},
  armStrokeAmplitude: ${this.settings.armStrokeAmplitude.toFixed(2)},
  legKickAmplitude: ${this.settings.legKickAmplitude.toFixed(2)},
  heightOffset: ${this.settings.heightOffset.toFixed(2)},
  pivotOffsetY: ${this.settings.pivotOffsetY.toFixed(2)},
  pivotOffsetZ: ${this.settings.pivotOffsetZ.toFixed(2)},
};

// Water Y offset in Game3D
const WATER_SWIM_Y_OFFSET = ${this.waterYOffset.toFixed(2)};`;navigator.clipboard.writeText(e).then(()=>{const t=document.getElementById("swim-output");t&&(t.textContent="✓ Copied to clipboard!",setTimeout(()=>{t.textContent=""},2e3))})}addStyles(){if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}const e=document.createElement("style");e.textContent=`
      .swim-debug-ui {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1001;
        font-family: ${ot};
        font-size: 11px;
        image-rendering: pixelated;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .swim-panel {
        background: rgba(0, 0, 0, 0.85);
        border: 3px solid;
        border-top-color: #555;
        border-left-color: #555;
        border-right-color: #1a1a1a;
        border-bottom-color: #1a1a1a;
        padding: 12px 16px;
        color: #fff;
        min-width: 280px;
        box-shadow: inset 1px 1px 0 rgba(255,255,255,0.1);
      }
      
      .swim-title {
        font-size: 13px;
        color: #55ffff;
        margin-bottom: 10px;
        text-shadow: 2px 2px 0 #003333;
      }
      
      .swim-section {
        margin-bottom: 12px;
      }
      
      .section-title {
        color: #aaa;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 8px;
        padding-bottom: 4px;
        border-bottom: 2px solid #333;
        text-shadow: 1px 1px 0 #222;
      }
      
      .slider-row {
        display: grid;
        grid-template-columns: 100px 1fr 45px;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
      }
      
      .slider-row label {
        color: #ccc;
        font-size: 10px;
        text-shadow: 1px 1px 0 #222;
      }
      
      .slider-row input[type="range"] {
        width: 100%;
        height: 8px;
        -webkit-appearance: none;
        background: #333;
        border: 2px solid #222;
        cursor: pointer;
      }
      
      .slider-row input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 10px;
        height: 16px;
        background: linear-gradient(to bottom, #88ccff 0%, #66aadd 50%, #5599cc 100%);
        border: 2px solid;
        border-color: #aaddff #447799 #447799 #aaddff;
        cursor: pointer;
      }
      
      .slider-value {
        color: #55ffff;
        text-align: right;
        font-size: 10px;
        text-shadow: 1px 1px 0 #003333;
      }
      
      .swim-actions {
        display: flex;
        gap: 8px;
        margin-top: 12px;
      }
      
      .swim-actions button {
        flex: 1;
        padding: 6px 10px;
        font-family: ${ot};
        font-size: 10px;
        cursor: pointer;
        border: 3px solid;
        border-top-color: #aaa;
        border-left-color: #aaa;
        border-right-color: #555;
        border-bottom-color: #555;
        background: linear-gradient(to bottom, #737373 0%, #6a6a6a 40%, #585858 50%, #6a6a6a 60%, #737373 100%);
        color: #fff;
        text-shadow: 2px 2px 0 #383838;
      }
      
      .swim-actions button:hover {
        color: #ffffa0;
        background: linear-gradient(to bottom, #6686b4 0%, #5d7aa8 40%, #4a6590 50%, #5d7aa8 60%, #6686b4 100%);
      }
      
      #swim-reset {
        color: #ff5555;
      }
      
      #swim-copy {
        color: #55ff55;
      }
      
      .swim-output {
        margin-top: 8px;
        color: #55ff55;
        font-size: 10px;
        text-align: center;
        min-height: 14px;
        text-shadow: 1px 1px 0 #003300;
      }
    `,document.head.appendChild(e)}toggleVisibility(){this.visible=!this.visible,this.container.style.display=this.visible?"block":"none"}destroy(){this.container.remove()}}const ms={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class hi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fv=new _r(-1,1,1,-1,0,1);class Bv extends Xt{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}}const zv=new Bv;class yr{constructor(e){this._mesh=new qe(zv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fh extends hi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mc extends hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Hv extends hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Gv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fh(ms),this.copyPass.material.blending=Ot,this.clock=new th}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mc!==void 0&&(a instanceof mc?n=!0:a instanceof Hv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vv extends hi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new he}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}class Wv{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),h=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(c+h)*u,p=c-d,g=h-d,v=e-p,_=t-g;let m,f;v>_?(m=1,f=0):(m=0,f=1);const w=v-m+u,M=_-f+u,b=v-1+2*u,R=_-1+2*u,L=c&255,A=h&255,P=this.perm[L+this.perm[A]]%12,y=this.perm[L+m+this.perm[A+f]]%12,x=this.perm[L+1+this.perm[A+1]]%12;let C=.5-v*v-_*_;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[P],v,_));let F=.5-w*w-M*M;F<0?s=0:(F*=F,s=F*F*this.dot(this.grad3[y],w,M));let O=.5-b*b-R*R;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[x],b,R)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o;const h=(e+t+n)*.3333333333333333,u=Math.floor(e+h),d=Math.floor(t+h),p=Math.floor(n+h),g=1/6,v=(u+d+p)*g,_=u-v,m=d-v,f=p-v,w=e-_,M=t-m,b=n-f;let R,L,A,P,y,x;w>=M?M>=b?(R=1,L=0,A=0,P=1,y=1,x=0):w>=b?(R=1,L=0,A=0,P=1,y=0,x=1):(R=0,L=0,A=1,P=1,y=0,x=1):M<b?(R=0,L=0,A=1,P=0,y=1,x=1):w<b?(R=0,L=1,A=0,P=0,y=1,x=1):(R=0,L=1,A=0,P=1,y=1,x=0);const C=w-R+g,F=M-L+g,O=b-A+g,Y=w-P+2*g,Z=M-y+2*g,$=b-x+2*g,K=w-1+3*g,V=M-1+3*g,te=b-1+3*g,ue=u&255,xe=d&255,Ue=p&255,Je=this.perm[ue+this.perm[xe+this.perm[Ue]]]%12,q=this.perm[ue+R+this.perm[xe+L+this.perm[Ue+A]]]%12,ie=this.perm[ue+P+this.perm[xe+y+this.perm[Ue+x]]]%12,_e=this.perm[ue+1+this.perm[xe+1+this.perm[Ue+1]]]%12;let ae=.6-w*w-M*M-b*b;ae<0?s=0:(ae*=ae,s=ae*ae*this.dot3(this.grad3[Je],w,M,b));let we=.6-C*C-F*F-O*O;we<0?r=0:(we*=we,r=we*we*this.dot3(this.grad3[q],C,F,O));let Le=.6-Y*Y-Z*Z-$*$;Le<0?a=0:(Le*=Le,a=Le*Le*this.dot3(this.grad3[ie],Y,Z,$));let De=.6-K*K-V*V-te*te;return De<0?o=0:(De*=De,o=De*De*this.dot3(this.grad3[_e],K,V,te)),32*(s+r+a+o)}noise4d(e,t,n,s){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;let u,d,p,g,v;const _=(e+t+n+s)*c,m=Math.floor(e+_),f=Math.floor(t+_),w=Math.floor(n+_),M=Math.floor(s+_),b=(m+f+w+M)*h,R=m-b,L=f-b,A=w-b,P=M-b,y=e-R,x=t-L,C=n-A,F=s-P,O=y>x?32:0,Y=y>C?16:0,Z=x>C?8:0,$=y>F?4:0,K=x>F?2:0,V=C>F?1:0,te=O+Y+Z+$+K+V,ue=a[te][0]>=3?1:0,xe=a[te][1]>=3?1:0,Ue=a[te][2]>=3?1:0,Je=a[te][3]>=3?1:0,q=a[te][0]>=2?1:0,ie=a[te][1]>=2?1:0,_e=a[te][2]>=2?1:0,ae=a[te][3]>=2?1:0,we=a[te][0]>=1?1:0,Le=a[te][1]>=1?1:0,De=a[te][2]>=1?1:0,lt=a[te][3]>=1?1:0,We=y-ue+h,ht=x-xe+h,D=C-Ue+h,Ct=F-Je+h,Ge=y-q+2*h,Ve=x-ie+2*h,Ce=C-_e+2*h,it=F-ae+2*h,Ae=y-we+3*h,T=x-Le+3*h,S=C-De+3*h,B=F-lt+3*h,J=y-1+4*h,ee=x-1+4*h,j=C-1+4*h,Se=F-1+4*h,le=m&255,de=f&255,He=w&255,ne=M&255,ge=o[le+o[de+o[He+o[ne]]]]%32,Re=o[le+ue+o[de+xe+o[He+Ue+o[ne+Je]]]]%32,Pe=o[le+q+o[de+ie+o[He+_e+o[ne+ae]]]]%32,ve=o[le+we+o[de+Le+o[He+De+o[ne+lt]]]]%32,Ye=o[le+1+o[de+1+o[He+1+o[ne+1]]]]%32;let Ie=.6-y*y-x*x-C*C-F*F;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this.dot4(r[ge],y,x,C,F));let Ke=.6-We*We-ht*ht-D*D-Ct*Ct;Ke<0?d=0:(Ke*=Ke,d=Ke*Ke*this.dot4(r[Re],We,ht,D,Ct));let k=.6-Ge*Ge-Ve*Ve-Ce*Ce-it*it;k<0?p=0:(k*=k,p=k*k*this.dot4(r[Pe],Ge,Ve,Ce,it));let oe=.6-Ae*Ae-T*T-S*S-B*B;oe<0?g=0:(oe*=oe,g=oe*oe*this.dot4(r[ve],Ae,T,S,B));let W=.6-J*J-ee*ee-j*j-Se*Se;return W<0?v=0:(W*=W,v=W*W*this.dot4(r[Ye],J,ee,j,Se)),27*(u+d+p+g+v)}}const Ks={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ke},cameraProjectionMatrix:{value:new Ze},cameraInverseProjectionMatrix:{value:new Ze},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Qs={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},er={uniforms:{tDiffuse:{value:null},resolution:{value:new ke}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Cn extends hi{constructor(e,t,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new bo;a.format=li,a.type=oi,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:et,magFilter:et,type:hn,depthTexture:a}),this.ssaoRenderTarget=new Zt(this.width,this.height,{type:hn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new St({defines:Object.assign({},Ks.defines),uniforms:vn.clone(Ks.uniforms),vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader,blending:Ot}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Tg,this.normalMaterial.blending=Ot,this.blurMaterial=new St({defines:Object.assign({},er.defines),uniforms:vn.clone(er.uniforms),vertexShader:er.vertexShader,fragmentShader:er.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new St({defines:Object.assign({},Qs.defines),uniforms:vn.clone(Qs.uniforms),vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,blending:Ot}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:vn.clone(ms.uniforms),vertexShader:ms.vertexShader,fragmentShader:ms.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:yc,blendDst:ga,blendEquation:An,blendSrcAlpha:bc,blendDstAlpha:ga,blendEquationAlpha:An}),this.fsQuad=new yr(null),this.originalClearColor=new he}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,n){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Cn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Ot,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Cn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ot,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Cn.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Cn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ot,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Cn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Mc,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const s=new N;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/e;r=zt.lerp(.1,1,r*r),s.multiplyScalar(r),t.push(s)}}generateRandomKernelRotations(){const n=new Wv,s=16,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,c=Math.random()*2-1,h=0;r[a]=n.noise3d(o,c,h)}this.noiseTexture=new eh(r,4,4,mr,ln),this.noiseTexture.wrapS=ri,this.noiseTexture.wrapT=ri,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}}Cn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Xv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gi extends hi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new he(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,a,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Zt(r,a,{type:hn});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const g=new Zt(r,a,{type:hn});g.texture.name="UnrealBloomPass.v"+d,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),a=Math.round(a/2)}const o=Xv;this.highPassUniforms=vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ke(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ms;this.copyUniforms=vn.clone(u.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ma,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new he,this.oldClearAlpha=1,this.basic=new ft,this.fsQuad=new yr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Gi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Gi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Gi.BlurDirectionX=new ke(1,0);Gi.BlurDirectionY=new ke(0,1);const Yv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $v extends hi{constructor(){super();const e=Yv;this.uniforms=vn.clone(e.uniforms),this.material=new Eg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new yr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===co?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const qv={uniforms:{tDiffuse:{value:null},contrast:{value:1.18},saturation:{value:1.16},gamma:{value:.96},vignetteStrength:{value:.3},twilightWarmth:{value:0},nightFactor:{value:0}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float contrast;
    uniform float saturation;
    uniform float gamma;
    uniform float vignetteStrength;
    uniform float twilightWarmth;
    uniform float nightFactor;

    varying vec2 vUv;

    vec3 applySaturation(vec3 color, float amount) {
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      return mix(vec3(luma), color, amount);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec3 color = texel.rgb;

      color = applySaturation(color, saturation);
      color = (color - 0.5) * contrast + 0.5;
      color = pow(max(color, vec3(0.0)), vec3(gamma));

      float dist = distance(vUv, vec2(0.5));
      float vignette = 1.0 - smoothstep(0.30, 0.86, dist);
      color *= mix(1.0, vignette, vignetteStrength);

      // Warm highlights during twilight.
      vec3 warmTint = vec3(1.08, 1.02, 0.94);
      color *= mix(vec3(1.0), warmTint, twilightWarmth);

      // Cooler darker nights.
      vec3 nightTint = vec3(0.78, 0.86, 1.08);
      color *= mix(vec3(1.0), nightTint, nightFactor * 0.30);
      color *= 1.0 - (nightFactor * 0.20);

      gl_FragColor = vec4(color, texel.a);
    }
  `};class jv{composer;ssaoPass=null;bloomPass;gradingPass;outputPass;constructor(e,t,n,s,r){this.composer=new Gv(e);const a=new Vv(t,n);this.composer.addPass(a),n instanceof en&&(this.ssaoPass=new Cn(t,n,Math.max(1,s),Math.max(1,r)),this.ssaoPass.kernelRadius=22,this.ssaoPass.minDistance=.0025,this.ssaoPass.maxDistance=.12,this.ssaoPass.output=Cn.OUTPUT.Default,this.composer.addPass(this.ssaoPass)),this.bloomPass=new Gi(new ke(Math.max(1,s),Math.max(1,r)),.38,.56,.84),this.composer.addPass(this.bloomPass),this.gradingPass=new fh(qv),this.composer.addPass(this.gradingPass),this.outputPass=new $v,this.composer.addPass(this.outputPass)}setSize(e,t){const n=Math.max(1,Math.floor(e)),s=Math.max(1,Math.floor(t));this.composer.setSize(n,s),this.ssaoPass?.setSize(n,s),this.bloomPass.setSize(n,s)}setTimeOfDay(e){this.bloomPass.strength=.18,this.bloomPass.radius=.3,this.bloomPass.threshold=.36,this.gradingPass.uniforms.twilightWarmth.value=0,this.gradingPass.uniforms.nightFactor.value=0}render(e){this.composer.render(e)}dispose(){this.ssaoPass?.dispose(),this.bloomPass.dispose(),this.composer.dispose()}}const tr=[l.Stone,l.Dirt,l.Grass,l.Sand,l.RedSand,l.Gravel,l.Clay,l.Podzol,l.Mycelium,l.Snow,l.SnowBlock,l.Ice,l.PackedIce,l.BlueIce,l.Terracotta,l.OakPlanks,l.BirchPlanks,l.SprucePlanks,l.JunglePlanks,l.AcaciaPlanks,l.DarkOakPlanks,l.CherryPlanks,l.MangrovePlanks,l.OakLog,l.BirchLog,l.SpruceLog,l.JungleLog,l.AcaciaLog,l.DarkOakLog,l.CherryLog,l.MangroveLog,l.StrippedOakLog,l.StrippedBirchLog,l.StrippedSpruceLog,l.StrippedJungleLog,l.StrippedAcaciaLog,l.StrippedDarkOakLog,l.StrippedCherryLog,l.StrippedMangroveLog,l.OakLeaves,l.BirchLeaves,l.SpruceLeaves,l.JungleLeaves,l.AcaciaLeaves,l.DarkOakLeaves,l.CherryLeaves,l.MangroveLeaves,l.OakSapling,l.BirchSapling,l.SpruceSapling,l.JungleSapling,l.AcaciaSapling,l.DarkOakSapling,l.CherrySapling,l.MangroveSapling,l.OakDoor,l.BirchDoor,l.SpruceDoor,l.JungleDoor,l.AcaciaDoor,l.DarkOakDoor,l.CherryDoor,l.MangroveDoor,l.OakTrapdoor,l.BirchTrapdoor,l.SpruceTrapdoor,l.JungleTrapdoor,l.AcaciaTrapdoor,l.DarkOakTrapdoor,l.CherryTrapdoor,l.MangroveTrapdoor,l.Cactus,l.Bedrock],nr={[l.Stone]:"Stone",[l.Dirt]:"Dirt",[l.Grass]:"Grass Block",[l.Sand]:"Sand",[l.RedSand]:"Red Sand",[l.Gravel]:"Gravel",[l.Clay]:"Clay",[l.Podzol]:"Podzol",[l.Mycelium]:"Mycelium",[l.Snow]:"Snow",[l.SnowBlock]:"Snow Block",[l.Ice]:"Ice",[l.PackedIce]:"Packed Ice",[l.BlueIce]:"Blue Ice",[l.Terracotta]:"Terracotta",[l.OakPlanks]:"Oak Planks",[l.BirchPlanks]:"Birch Planks",[l.SprucePlanks]:"Spruce Planks",[l.JunglePlanks]:"Jungle Planks",[l.AcaciaPlanks]:"Acacia Planks",[l.DarkOakPlanks]:"Dark Oak Planks",[l.CherryPlanks]:"Cherry Planks",[l.MangrovePlanks]:"Mangrove Planks",[l.OakLog]:"Oak Log",[l.BirchLog]:"Birch Log",[l.SpruceLog]:"Spruce Log",[l.JungleLog]:"Jungle Log",[l.AcaciaLog]:"Acacia Log",[l.DarkOakLog]:"Dark Oak Log",[l.CherryLog]:"Cherry Log",[l.MangroveLog]:"Mangrove Log",[l.StrippedOakLog]:"Stripped Oak Log",[l.StrippedBirchLog]:"Stripped Birch Log",[l.StrippedSpruceLog]:"Stripped Spruce Log",[l.StrippedJungleLog]:"Stripped Jungle Log",[l.StrippedAcaciaLog]:"Stripped Acacia Log",[l.StrippedDarkOakLog]:"Stripped Dark Oak Log",[l.StrippedCherryLog]:"Stripped Cherry Log",[l.StrippedMangroveLog]:"Stripped Mangrove Log",[l.OakLeaves]:"Oak Leaves",[l.BirchLeaves]:"Birch Leaves",[l.SpruceLeaves]:"Spruce Leaves",[l.JungleLeaves]:"Jungle Leaves",[l.AcaciaLeaves]:"Acacia Leaves",[l.DarkOakLeaves]:"Dark Oak Leaves",[l.CherryLeaves]:"Cherry Leaves",[l.MangroveLeaves]:"Mangrove Leaves",[l.OakSapling]:"Oak Sapling",[l.BirchSapling]:"Birch Sapling",[l.SpruceSapling]:"Spruce Sapling",[l.JungleSapling]:"Jungle Sapling",[l.AcaciaSapling]:"Acacia Sapling",[l.DarkOakSapling]:"Dark Oak Sapling",[l.CherrySapling]:"Cherry Sapling",[l.MangroveSapling]:"Mangrove Sapling",[l.OakDoor]:"Oak Door",[l.BirchDoor]:"Birch Door",[l.SpruceDoor]:"Spruce Door",[l.JungleDoor]:"Jungle Door",[l.AcaciaDoor]:"Acacia Door",[l.DarkOakDoor]:"Dark Oak Door",[l.CherryDoor]:"Cherry Door",[l.MangroveDoor]:"Mangrove Door",[l.OakTrapdoor]:"Oak Trapdoor",[l.BirchTrapdoor]:"Birch Trapdoor",[l.SpruceTrapdoor]:"Spruce Trapdoor",[l.JungleTrapdoor]:"Jungle Trapdoor",[l.AcaciaTrapdoor]:"Acacia Trapdoor",[l.DarkOakTrapdoor]:"Dark Oak Trapdoor",[l.CherryTrapdoor]:"Cherry Trapdoor",[l.MangroveTrapdoor]:"Mangrove Trapdoor",[l.Cactus]:"Cactus",[l.Bedrock]:"Bedrock"},Zv={[l.Grass]:{top:"/textures/grass_block_top.png",side:"/textures/grass_block_side.png",bottom:"/textures/dirt.png"},[l.Podzol]:{top:"/textures/podzol_top.png",side:"/textures/podzol_side.png",bottom:"/textures/dirt.png"},[l.Mycelium]:{top:"/textures/mycelium_top.png",side:"/textures/mycelium_side.png",bottom:"/textures/dirt.png"},[l.Snow]:"/textures/snow.png",[l.SnowBlock]:"/textures/snow.png",[l.OakLog]:{top:"/textures/oak_log_top.png",side:"/textures/oak_log.png"},[l.BirchLog]:{top:"/textures/birch_log_top.png",side:"/textures/birch_log.png"},[l.SpruceLog]:{top:"/textures/spruce_log_top.png",side:"/textures/spruce_log.png"},[l.JungleLog]:{top:"/textures/jungle_log_top.png",side:"/textures/jungle_log.png"},[l.AcaciaLog]:{top:"/textures/acacia_log_top.png",side:"/textures/acacia_log.png"},[l.DarkOakLog]:{top:"/textures/dark_oak_log_top.png",side:"/textures/dark_oak_log.png"},[l.CherryLog]:{top:"/textures/cherry_log_top.png",side:"/textures/cherry_log.png"},[l.MangroveLog]:{top:"/textures/mangrove_log_top.png",side:"/textures/mangrove_log.png"},[l.Cactus]:{top:"/textures/cactus_top.png",side:"/textures/cactus_side.png"},[l.Dirt]:"/textures/dirt.png",[l.Stone]:"/textures/stone.png",[l.Sand]:"/textures/sand.png",[l.RedSand]:"/textures/red_sand.png",[l.Gravel]:"/textures/gravel.png",[l.Clay]:"/textures/clay.png",[l.Terracotta]:"/textures/terracotta.png",[l.Ice]:"/textures/ice.png",[l.PackedIce]:"/textures/packed_ice.png",[l.BlueIce]:"/textures/blue_ice.png",[l.Bedrock]:"/textures/bedrock.png",[l.OakLeaves]:"/textures/oak_leaves.png",[l.BirchLeaves]:"/textures/birch_leaves.png",[l.SpruceLeaves]:"/textures/spruce_leaves.png",[l.JungleLeaves]:"/textures/jungle_leaves.png",[l.AcaciaLeaves]:"/textures/acacia_leaves.png",[l.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[l.CherryLeaves]:"/textures/cherry_leaves.png",[l.MangroveLeaves]:"/textures/mangrove_leaves.png",[l.OakSapling]:"/textures/oak_sapling.png",[l.BirchSapling]:"/textures/birch_sapling.png",[l.SpruceSapling]:"/textures/spruce_sapling.png",[l.JungleSapling]:"/textures/jungle_sapling.png",[l.AcaciaSapling]:"/textures/acacia_sapling.png",[l.DarkOakSapling]:"/textures/dark_oak_sapling.png",[l.CherrySapling]:"/textures/cherry_sapling.png",[l.MangroveSapling]:"/textures/mangrove_sapling.png",[l.OakPlanks]:"/textures/oak_planks.png",[l.BirchPlanks]:"/textures/birch_planks.png",[l.SprucePlanks]:"/textures/spruce_planks.png",[l.JunglePlanks]:"/textures/jungle_planks.png",[l.AcaciaPlanks]:"/textures/acacia_planks.png",[l.DarkOakPlanks]:"/textures/dark_oak_planks.png",[l.CherryPlanks]:"/textures/cherry_planks.png",[l.MangrovePlanks]:"/textures/mangrove_planks.png",[l.StrippedOakLog]:{top:"/textures/stripped_oak_log_top.png",side:"/textures/stripped_oak_log.png"},[l.StrippedBirchLog]:{top:"/textures/stripped_birch_log_top.png",side:"/textures/stripped_birch_log.png"},[l.StrippedSpruceLog]:{top:"/textures/stripped_spruce_log_top.png",side:"/textures/stripped_spruce_log.png"},[l.StrippedJungleLog]:{top:"/textures/stripped_jungle_log_top.png",side:"/textures/stripped_jungle_log.png"},[l.StrippedAcaciaLog]:{top:"/textures/stripped_acacia_log_top.png",side:"/textures/stripped_acacia_log.png"},[l.StrippedDarkOakLog]:{top:"/textures/stripped_dark_oak_log_top.png",side:"/textures/stripped_dark_oak_log.png"},[l.StrippedCherryLog]:{top:"/textures/stripped_cherry_log_top.png",side:"/textures/stripped_cherry_log.png"},[l.StrippedMangroveLog]:{top:"/textures/stripped_mangrove_log_top.png",side:"/textures/stripped_mangrove_log.png"},[l.OakDoor]:"/textures/oak_door_bottom.png",[l.BirchDoor]:"/textures/birch_door_bottom.png",[l.SpruceDoor]:"/textures/spruce_door_bottom.png",[l.JungleDoor]:"/textures/jungle_door_bottom.png",[l.AcaciaDoor]:"/textures/acacia_door_bottom.png",[l.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[l.CherryDoor]:"/textures/cherry_door_bottom.png",[l.MangroveDoor]:"/textures/mangrove_door_bottom.png",[l.OakTrapdoor]:"/textures/oak_trapdoor.png",[l.BirchTrapdoor]:"/textures/birch_trapdoor.png",[l.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[l.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[l.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[l.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[l.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[l.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"};l.Stone+"",l.Dirt+"",l.Grass+"",l.Sand+"",l.RedSand+"",l.Gravel+"",l.Clay+"",l.Terracotta+"",l.Ice+"",l.PackedIce+"",l.BlueIce+"",l.Snow+"",l.SnowBlock+"",l.Bedrock+"",l.OakPlanks+"",l.BirchPlanks+"",l.SprucePlanks+"",l.JunglePlanks+"",l.AcaciaPlanks+"",l.DarkOakPlanks+"",l.CherryPlanks+"",l.MangrovePlanks+"",l.OakLog+"",l.BirchLog+"",l.SpruceLog+"",l.JungleLog+"",l.AcaciaLog+"",l.DarkOakLog+"",l.CherryLog+"",l.MangroveLog+"",l.StrippedOakLog+"",l.StrippedBirchLog+"",l.StrippedSpruceLog+"",l.StrippedJungleLog+"",l.StrippedAcaciaLog+"",l.StrippedDarkOakLog+"",l.StrippedCherryLog+"",l.StrippedMangroveLog+"",l.OakLeaves+"",l.BirchLeaves+"",l.SpruceLeaves+"",l.JungleLeaves+"",l.AcaciaLeaves+"",l.DarkOakLeaves+"",l.CherryLeaves+"",l.MangroveLeaves+"",l.Podzol+"",l.Mycelium+"",l.OakSapling+"",l.BirchSapling+"",l.SpruceSapling+"",l.JungleSapling+"",l.AcaciaSapling+"",l.DarkOakSapling+"",l.CherrySapling+"",l.MangroveSapling+"",l.OakDoor+"",l.BirchDoor+"",l.SpruceDoor+"",l.JungleDoor+"",l.AcaciaDoor+"",l.DarkOakDoor+"",l.CherryDoor+"",l.MangroveDoor+"",l.OakTrapdoor+"",l.BirchTrapdoor+"",l.SpruceTrapdoor+"",l.JungleTrapdoor+"",l.AcaciaTrapdoor+"",l.DarkOakTrapdoor+"",l.CherryTrapdoor+"",l.MangroveTrapdoor+"",l.Cactus+"";class Jv{container;isVisible=!1;inventoryHUD;tooltip;focusedSlotIndex=0;currentBlocks=tr;GRID_COLUMNS=9;savedGamepadCallbacks={};onOpen;onClose;constructor(e){this.inventoryHUD=e,this.injectStyles(),this.container=this.createInventoryUI(),document.body.appendChild(this.container),this.tooltip=this.createTooltip(),document.body.appendChild(this.tooltip)}injectStyles(){if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}if(document.getElementById("creative-inventory-styles"))return;const e=document.createElement("style");e.id="creative-inventory-styles",e.textContent=`
      #creative-inventory {
        --ci-slot-size: clamp(30px, min(5vw, 5.5vh), 40px);
        --ci-slot-inner-size: calc(var(--ci-slot-size) - 8px);
        --ci-icon-size: calc(var(--ci-slot-size) - 16px);
        --ci-grid-gap: clamp(2px, 0.4vw, 4px);
        --ci-grid-padding: clamp(4px, 0.75vw, 8px);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 16px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.65);
        z-index: 9999;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: ${ot};
        image-rendering: pixelated;
      }
      
      .creative-panel {
        background: #c6c6c6;
        border: 4px solid;
        border-color: #ffffff #555555 #555555 #ffffff;
        width: min(96vw, calc(var(--ci-slot-size) * 9 + var(--ci-grid-gap) * 8 + var(--ci-grid-padding) * 2 + 32px));
        max-height: 90vh;
        padding: clamp(6px, 1vw, 10px);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        box-shadow: inset 2px 2px 0 rgba(255,255,255,0.3),
                    inset -2px -2px 0 rgba(0,0,0,0.2);
      }

      .creative-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 8px;
      }
      
      .creative-title {
        color: #404040;
        font-size: clamp(13px, 2vw, 16px);
        text-align: left;
        text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
        font-family: ${ot};
      }

      .creative-close-button {
        min-width: 68px;
        height: 26px;
        padding: 0 10px;
        background: #c6c6c6;
        border: 2px solid;
        border-color: #ffffff #555555 #555555 #ffffff;
        color: #202020;
        font-family: ${ot};
        font-size: 11px;
        cursor: pointer;
        image-rendering: pixelated;
      }

      .creative-close-button:hover {
        background: #d8d8d8;
      }

      .creative-close-button:active {
        border-color: #555555 #ffffff #ffffff #555555;
        background: #b6b6b6;
      }
      
      .creative-grid {
        display: grid;
        grid-template-columns: repeat(9, var(--ci-slot-size));
        gap: var(--ci-grid-gap);
        background: #8b8b8b;
        padding: var(--ci-grid-padding);
        border: 2px solid;
        border-color: #373737 #ffffff #ffffff #373737;
        max-height: min(58vh, calc(var(--ci-slot-size) * 6 + var(--ci-grid-gap) * 5 + var(--ci-grid-padding) * 2));
        overflow-y: auto;
        overflow-x: hidden;
        justify-content: center;
      }
      
      .creative-slot {
        width: var(--ci-slot-size);
        height: var(--ci-slot-size);
        background: #8b8b8b;
        border: 2px solid;
        border-color: #373737 #ffffff #ffffff #373737;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.05s;
      }
      
      .creative-slot:hover {
        transform: scale(1.1);
        z-index: 10;
        border-color: #ffff00 #aaaa00 #aaaa00 #ffff00;
      }
      
      .creative-slot:active {
        transform: scale(0.95);
      }
      
      .creative-slot.gamepad-focus {
        transform: scale(1.1);
        z-index: 10;
        border-color: #00ff00 #00aa00 #00aa00 #00ff00;
        box-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
        animation: gamepad-slot-pulse 0.8s ease-in-out infinite;
      }
      
      @keyframes gamepad-slot-pulse {
        0%, 100% { box-shadow: 0 0 8px rgba(0, 255, 0, 0.6); }
        50% { box-shadow: 0 0 16px rgba(0, 255, 0, 0.9); }
      }
      
      .creative-slot-inner {
        width: var(--ci-slot-inner-size);
        height: var(--ci-slot-inner-size);
        background: #555550;
        border: 1px solid;
        border-color: #3a3a38 #7a7a75 #7a7a75 #3a3a38;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 100px;
      }
      
      .creative-cube-container {
        width: var(--ci-icon-size);
        height: var(--ci-icon-size);
        transform-style: preserve-3d;
      }
      
      .creative-cube {
        width: var(--ci-icon-size);
        height: var(--ci-icon-size);
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(-30deg) rotateY(45deg);
      }
      
      .creative-cube .face {
        position: absolute;
        width: var(--ci-icon-size);
        height: var(--ci-icon-size);
        background-size: cover;
        background-position: center;
        image-rendering: pixelated;
        backface-visibility: hidden;
      }
      
      .creative-cube .face-top {
        transform: rotateX(90deg) translateZ(calc(var(--ci-icon-size) / 2));
        filter: brightness(1.0);
      }
      
      .creative-cube .face-front {
        transform: translateZ(calc(var(--ci-icon-size) / 2));
        filter: brightness(0.8);
      }
      
      .creative-cube .face-right {
        transform: rotateY(90deg) translateZ(calc(var(--ci-icon-size) / 2));
        filter: brightness(0.6);
      }
      
      .creative-cube .face-left {
        transform: rotateY(-90deg) translateZ(calc(var(--ci-icon-size) / 2));
        filter: brightness(0.7);
      }
      
      /* Flat sprite rendering for saplings, flowers, etc. */
      .creative-sprite {
        width: var(--ci-icon-size);
        height: var(--ci-icon-size);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        image-rendering: pixelated;
      }
      
      .creative-tooltip {
        position: fixed;
        background: #1a0a30;
        border: 2px solid;
        border-color: #5000a0 #280050 #280050 #5000a0;
        padding: 6px 10px;
        font-family: ${ot};
        font-size: 14px;
        color: #ffffff;
        text-shadow: 2px 2px 0 #3f3f3f;
        pointer-events: none;
        z-index: 10001;
        display: none;
        white-space: nowrap;
      }
      
      .creative-close-hint {
        color: #606060;
        font-size: clamp(10px, 1.5vw, 12px);
        text-align: center;
        margin-top: 12px;
        font-family: ${ot};
      }
      
      .creative-tabs {
        display: flex;
        margin-bottom: -2px;
        z-index: 1;
      }
      
      .creative-tab {
        background: #8b8b8b;
        border: 2px solid;
        border-color: #ffffff #555555 transparent #ffffff;
        padding: 4px 12px;
        cursor: pointer;
        color: #404040;
        font-family: ${ot};
        font-size: 12px;
        margin-right: 2px;
      }
      
      .creative-tab.active {
        background: #c6c6c6;
        border-bottom-color: #c6c6c6;
        margin-bottom: -2px;
        padding-bottom: 6px;
      }
      
      .creative-tab:hover:not(.active) {
        background: #a0a0a0;
      }
      
      .creative-search-container {
        margin-bottom: 8px;
      }
      
      .creative-search {
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        font-family: ${ot};
        font-size: clamp(12px, 1.8vw, 14px);
        background: #000000;
        border: 2px solid;
        border-color: #373737 #ffffff #ffffff #373737;
        color: #ffffff;
        outline: none;
      }
      
      .creative-search::placeholder {
        color: #606060;
      }

      @media (max-width: 760px), (max-height: 600px) {
        #creative-inventory {
          --ci-slot-size: clamp(26px, min(6.25vw, 6.25vh), 34px);
        }

        .creative-close-hint {
          margin-top: 8px;
        }
      }
    `,document.head.appendChild(e)}createInventoryUI(){const e=document.createElement("div");e.id="creative-inventory",e.innerHTML=`
      <div class="creative-tabs">
        <div class="creative-tab active">Building Blocks</div>
      </div>
      <div class="creative-panel">
        <div class="creative-header">
          <div class="creative-title">Creative Inventory</div>
          <button type="button" class="creative-close-button" id="creative-close-button">Close</button>
        </div>
        <div class="creative-search-container">
          <input type="text" class="creative-search" placeholder="Search blocks..." id="creative-search">
        </div>
        <div class="creative-grid" id="creative-grid">
          <!-- Slots will be generated here -->
        </div>
      </div>
      <div class="creative-close-hint">Press E, ESC, or Circle/B to close • D-Pad to navigate • Cross/A to select</div>
    `;const t=e.querySelector("#creative-grid");this.populateGrid(t,tr);const n=e.querySelector("#creative-search");return n.addEventListener("input",()=>{const r=n.value.toLowerCase();this.currentBlocks=tr.filter(a=>(nr[a]||l[a]).toLowerCase().includes(r)),this.populateGrid(t,this.currentBlocks),this.focusedSlotIndex=0,jt().isConnected()&&this.currentBlocks.length>0&&this.setFocusedSlot(0)}),e.querySelector("#creative-close-button").addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),this.hide(),vt().playUIClick()}),e.addEventListener("click",r=>{r.target===e&&this.hide()}),e}populateGrid(e,t){e.innerHTML="",t.forEach(s=>{const r=this.createBlockSlot(s);e.appendChild(r)});const n=t.length%9;if(n>0)for(let s=0;s<9-n;s++){const r=document.createElement("div");r.className="creative-slot",r.innerHTML='<div class="creative-slot-inner"></div>',e.appendChild(r)}}createBlockSlot(e){const t=document.createElement("div");t.className="creative-slot",t.dataset.blockType=e.toString();const n=document.createElement("div");if(n.className="creative-slot-inner",oh(e)){const s=document.createElement("div");s.className="creative-sprite";const r=this.getTextureConfig(e);r&&(s.style.backgroundImage=`url(${r.side})`),n.appendChild(s)}else{const s=document.createElement("div");s.className="creative-cube-container";const r=document.createElement("div");r.className="creative-cube";const a=this.getTextureConfig(e);[{name:"top",brightness:Qt.top},{name:"front",brightness:Qt.front},{name:"right",brightness:Qt.right},{name:"left",brightness:Qt.left}].forEach(({name:c,brightness:h})=>{const u=document.createElement("div");if(u.className=`face face-${c}`,a){const d=c==="top"?a.top:a.side;u.style.backgroundImage=`url(${d})`,u.style.filter=cs(e,c,h)}else{const d=lh(e);u.style.backgroundColor=d}r.appendChild(u)}),s.appendChild(r),n.appendChild(s)}return t.appendChild(n),t.addEventListener("click",()=>{this.addBlockToInventory(e)}),t.addEventListener("mouseenter",s=>{const r=nr[e]||l[e];this.showTooltip(r,s.clientX,s.clientY)}),t.addEventListener("mousemove",s=>{this.moveTooltip(s.clientX,s.clientY)}),t.addEventListener("mouseleave",()=>{this.hideTooltip()}),t}getTextureConfig(e){const t=Zv[e];return t?typeof t=="string"?{top:t,side:t,bottom:t}:{top:t.top,side:t.side,bottom:t.bottom||t.side}:null}addBlockToInventory(e){const t={blockType:e,count:64,name:nr[e]||l[e]};this.inventoryHUD.addItem(t)&&vt().playUIClick()}createTooltip(){const e=document.createElement("div");return e.className="creative-tooltip",e}showTooltip(e,t,n){this.tooltip.textContent=e,this.tooltip.style.display="block",this.moveTooltip(t,n)}moveTooltip(e,t){this.tooltip.style.left=`${e+15}px`,this.tooltip.style.top=`${t+15}px`;const s=this.tooltip.getBoundingClientRect();s.right>window.innerWidth&&(this.tooltip.style.left=`${e-s.width-15}px`),s.bottom>window.innerHeight&&(this.tooltip.style.top=`${t-s.height-15}px`)}hideTooltip(){this.tooltip.style.display="none"}setupGamepadNavigation(){const e=jt();this.savedGamepadCallbacks={onMenuNavigate:e.onMenuNavigate,onMenuSelect:e.onMenuSelect,onMenuBack:e.onMenuBack},e.onMenuNavigate=t=>{this.navigateSlot(t)},e.onMenuSelect=()=>{this.selectFocusedSlot()},e.onMenuBack=()=>{this.hide()},e.setMenuMode(!0)}restoreGamepadCallbacks(){const e=jt();e.onMenuNavigate=this.savedGamepadCallbacks.onMenuNavigate,e.onMenuSelect=this.savedGamepadCallbacks.onMenuSelect,e.onMenuBack=this.savedGamepadCallbacks.onMenuBack,e.setMenuMode(!1)}navigateSlot(e){const t=this.currentBlocks.length;if(t===0)return;const n=Math.ceil(t/this.GRID_COLUMNS),s=Math.floor(this.focusedSlotIndex/this.GRID_COLUMNS),r=this.focusedSlotIndex%this.GRID_COLUMNS;let a=s,o=r;switch(e){case"up":a=s>0?s-1:n-1;break;case"down":a=s<n-1?s+1:0;break;case"left":r>0?o=r-1:(o=this.GRID_COLUMNS-1,a=s>0?s-1:n-1);break;case"right":r<this.GRID_COLUMNS-1?o=r+1:(o=0,a=s<n-1?s+1:0);break}let c=a*this.GRID_COLUMNS+o;c>=t&&(e==="down"||e==="right"?c=0:c=t-1),this.setFocusedSlot(c),vt().playUIClick()}setFocusedSlot(e){const t=this.container.querySelectorAll(".creative-slot");t.forEach(s=>s.classList.remove("gamepad-focus")),this.focusedSlotIndex=Math.max(0,Math.min(e,this.currentBlocks.length-1));const n=t[this.focusedSlotIndex];if(n&&this.currentBlocks[this.focusedSlotIndex]!==void 0){n.classList.add("gamepad-focus");const s=this.currentBlocks[this.focusedSlotIndex],r=nr[s]||l[s],a=n.getBoundingClientRect();this.showTooltip(r,a.right,a.top)}}selectFocusedSlot(){if(this.focusedSlotIndex<this.currentBlocks.length){const e=this.currentBlocks[this.focusedSlotIndex];this.addBlockToInventory(e)}}show(){if(this.isVisible)return;this.isVisible=!0,this.container.style.display="flex";const e=this.container.querySelector("#creative-search");e.value="";const t=this.container.querySelector("#creative-grid");this.currentBlocks=[...tr],this.populateGrid(t,this.currentBlocks),this.focusedSlotIndex=0,this.setupGamepadNavigation(),setTimeout(()=>{jt().isConnected()?this.setFocusedSlot(0):e.focus()},50),vt().playUIClick(),this.onOpen?.()}hide(){this.isVisible&&(this.isVisible=!1,this.container.style.display="none",this.hideTooltip(),this.restoreGamepadCallbacks(),this.onClose?.())}toggle(){this.isVisible?this.hide():this.show()}isInventoryVisible(){return this.isVisible}destroy(){this.container.remove(),this.tooltip.remove();const e=document.getElementById("creative-inventory-styles");e&&e.remove()}}const gc=25,da=10,as=7/9,vc=1.8,Kv=1,Qv=.3,e_=.7;class t_{world;waterSwimYOffset=0;constructor(e){this.world=e}setWaterSwimYOffset(e){this.waterSwimYOffset=e}calculateTargetY(e,t,n,s){const r=s?this.world.getHeightAt(e,t):this.world.getHeightAtForPlayer(e,t,n);return this.world.getBlockAt(Math.floor(e),Math.floor(r),Math.floor(t))===l.Water?r+as+this.waterSwimYOffset:r+1}isOverWater(e,t,n){const s=this.world.getHeightAt(e,t);return this.world.getBlockAt(Math.floor(e),Math.floor(s),Math.floor(t))===l.Water}isInWater(e,t,n){const s=this.world.getHeightAt(e,t);if(this.world.getBlockAt(Math.floor(e),Math.floor(s),Math.floor(t))!==l.Water)return!1;const a=s+as+.5;return n<=a+.1}canStand(e,t,n){return this.world.canStandAt(e,t,n)}getBlockAtFeet(e,t){const n=this.world.getHeightAt(e,t);return this.world.getBlockAt(Math.floor(e),Math.floor(n),Math.floor(t))}tryMove(e,t,n){const{position:s,isJumping:r,isSwimming:a,isCrouching:o}=e,c=s.x+t,h=s.z+n,u=a?this.world.getHeightAt(c,h):this.world.getHeightAtForPlayer(c,h,s.y),d=this.world.getBlockAt(Math.floor(c),Math.floor(u),Math.floor(h)),p=d===l.Water;let g;p?g=u+as+this.waterSwimYOffset:g=u+1;const v=g-s.y,m=v<-.1||r?s.y:g;if(!(!p&&this.world.checkCollision(c,m,h))){const V=!r&&!a&&v<-.5;return o&&V&&!p?this.world.canStandAt(c,s.y,h)?{newX:c,newZ:h,newY:s.y,moved:!0,shouldFall:!1,blockType:d}:{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}:{newX:c,newZ:h,newY:g,moved:!0,shouldFall:V,blockType:d}}const w=a?this.world.getHeightAt(c,s.z):this.world.getHeightAtForPlayer(c,s.z,s.y),M=this.world.getBlockAt(Math.floor(c),Math.floor(w),Math.floor(s.z)),b=M===l.Water,R=b?w+as+this.waterSwimYOffset:w+1,L=R-s.y,P=L<-.1||r?s.y:R;if(!(!b&&this.world.checkCollision(c,P,s.z))){const V=!r&&!a&&L<-.5;if(o&&V&&!b){if(this.world.canStandAt(c,s.y,s.z))return{newX:c,newZ:s.z,newY:s.y,moved:!0,shouldFall:!1,blockType:M}}else return{newX:c,newZ:s.z,newY:R,moved:!0,shouldFall:V,blockType:M}}const x=a?this.world.getHeightAt(s.x,h):this.world.getHeightAtForPlayer(s.x,h,s.y),C=this.world.getBlockAt(Math.floor(s.x),Math.floor(x),Math.floor(h)),F=C===l.Water,O=F?x+as+this.waterSwimYOffset:x+1,Y=O-s.y,$=Y<-.1||r?s.y:O;if(!(!F&&this.world.checkCollision(s.x,$,h))){const V=!r&&!a&&Y<-.5;return o&&V&&!F?this.world.canStandAt(s.x,s.y,h)?{newX:s.x,newZ:h,newY:s.y,moved:!0,shouldFall:!1,blockType:C}:{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}:{newX:s.x,newZ:h,newY:O,moved:!0,shouldFall:V,blockType:C}}return{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}}applyGravity(e,t){return e-gc*t}calculateVerticalMovement(e,t){return e*t}checkCeilingCollision(e,t,n){return this.world.checkHeadCollision(e,t,n)?{hit:!0,maxY:Math.floor(t+vc)-vc-.01}:{hit:!1,maxY:t}}getJumpVelocity(){return da}calculateJumpProgress(e,t){const n=e-t,s=da*da/(2*gc);return Math.max(0,Math.min(1,n/s))}hasLanded(e,t,n){return e<=t&&n<0}getSpeedMultiplier(e,t){return t?e_:e?Qv:Kv}}const fa=200,_c=15;class pn{container;analogStick;analogKnob;jumpButton;inventoryButton;callbacks;analogActive=!1;analogStartX=0;analogStartY=0;analogTouchId=null;analogTouchStartTime=0;analogMoved=!1;moveX=0;moveY=0;pinchStartDistance=0;pinchTouchIds=[];interactionTouchId=null;interactionStartTime=0;interactionStartX=0;interactionStartY=0;isBreaking=!1;breakCheckTimeout=null;crosshairTouchId=null;static isMobileDevice=null;boundAnalogStart=this.handleAnalogStart.bind(this);boundAnalogMove=this.handleAnalogMove.bind(this);boundAnalogEnd=this.handleAnalogEnd.bind(this);boundJumpStart=this.handleJumpStart.bind(this);boundJumpEnd=this.handleJumpEnd.bind(this);boundInventoryStart=this.handleInventoryStart.bind(this);boundInventoryEnd=this.handleInventoryEnd.bind(this);boundGlobalTouchStart=this.handleGlobalTouchStart.bind(this);boundGlobalTouchMove=this.handleGlobalTouchMove.bind(this);boundGlobalTouchEnd=this.handleGlobalTouchEnd.bind(this);constructor(e){this.callbacks=e,this.container=this.createContainer(),this.analogStick=this.createAnalogStick(),this.analogKnob=this.createAnalogKnob(),this.jumpButton=this.createJumpButton(),this.inventoryButton=this.createInventoryButton(),this.analogStick.appendChild(this.analogKnob),this.container.appendChild(this.analogStick),this.container.appendChild(this.jumpButton),this.container.appendChild(this.inventoryButton),document.body.appendChild(this.container),this.setupTouchHandlers()}static isMobile(){if(pn.isMobileDevice!==null)return pn.isMobileDevice;if(new URLSearchParams(window.location.search).get("mobile")==="true")return pn.isMobileDevice=!0,!0;const t="ontouchstart"in window||navigator.maxTouchPoints>0,n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=window.innerWidth<=1024||window.innerHeight<=768;return pn.isMobileDevice=t&&(n||s),pn.isMobileDevice}static setMobileMode(e){pn.isMobileDevice=e}createContainer(){const e=document.createElement("div");return e.id="mobile-controls",e.style.cssText=`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      pointer-events: none;
      z-index: 1100;
      display: ${pn.isMobile()?"block":"none"};
    `,e}createAnalogStick(){const e=document.createElement("div");return e.id="mobile-analog",e.style.cssText=`
      position: absolute;
      right: 20px;
      bottom: 95px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      border: 2px solid rgba(255, 255, 255, 0.2);
      pointer-events: auto;
      touch-action: none;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    `,e}createAnalogKnob(){const e=document.createElement("div");return e.id="mobile-analog-knob",e.style.cssText=`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
      border: 2px solid rgba(255, 255, 255, 0.4);
      pointer-events: none;
      transition: transform 0.05s ease-out;
    `,e}createJumpButton(){const e=document.createElement("div");return e.id="mobile-jump",e.style.cssText=`
      position: absolute;
      left: 20px;
      bottom: 95px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
      border: 2px solid rgba(255, 255, 255, 0.25);
      pointer-events: auto;
      touch-action: none;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      user-select: none;
      -webkit-user-select: none;
    `,e.innerHTML=`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    `,e}createInventoryButton(){const e=document.createElement("div");return e.id="mobile-inventory",e.style.cssText=`
      position: absolute;
      left: 20px;
      bottom: 150px;
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.12);
      border: 2px solid rgba(255, 255, 255, 0.25);
      pointer-events: auto;
      touch-action: none;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      user-select: none;
      -webkit-user-select: none;
    `,e.innerHTML=`
      <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    `,e}setupTouchHandlers(){this.analogStick.addEventListener("touchstart",this.boundAnalogStart,{passive:!1}),this.analogStick.addEventListener("touchmove",this.boundAnalogMove,{passive:!1}),this.analogStick.addEventListener("touchend",this.boundAnalogEnd,{passive:!1}),this.analogStick.addEventListener("touchcancel",this.boundAnalogEnd,{passive:!1}),this.jumpButton.addEventListener("touchstart",this.boundJumpStart,{passive:!1}),this.jumpButton.addEventListener("touchend",this.boundJumpEnd,{passive:!1}),this.inventoryButton.addEventListener("touchstart",this.boundInventoryStart,{passive:!1}),this.inventoryButton.addEventListener("touchend",this.boundInventoryEnd,{passive:!1}),document.addEventListener("touchstart",this.boundGlobalTouchStart,{passive:!1}),document.addEventListener("touchmove",this.boundGlobalTouchMove,{passive:!1}),document.addEventListener("touchend",this.boundGlobalTouchEnd,{passive:!1}),document.addEventListener("touchcancel",this.boundGlobalTouchEnd,{passive:!1})}handleAnalogStart(e){if(e.preventDefault(),e.stopPropagation(),this.analogTouchId!==null)return;const t=e.changedTouches[0];this.analogTouchId=t.identifier,this.analogActive=!0,this.analogTouchStartTime=Date.now(),this.analogMoved=!1;const n=this.analogStick.getBoundingClientRect();this.analogStartX=n.left+n.width/2,this.analogStartY=n.top+n.height/2}handleAnalogMove(e){if(e.preventDefault(),e.stopPropagation(),!this.analogActive||this.analogTouchId===null)return;const t=Array.from(e.touches).find(u=>u.identifier===this.analogTouchId);if(!t)return;const n=t.clientX-this.analogStartX,s=t.clientY-this.analogStartY,r=32,a=Math.sqrt(n*n+s*s),o=Math.min(a,r);a>10&&(this.analogMoved=!0);let c=0,h=0;a>0&&(c=n/a*o,h=s/a*o),this.analogKnob.style.transform=`translate(calc(-50% + ${c}px), calc(-50% + ${h}px))`,this.moveX=c/r,this.moveY=-h/r,this.callbacks.onMove(this.moveX,this.moveY)}handleAnalogEnd(e){e.preventDefault(),e.stopPropagation(),Array.from(e.changedTouches).find(n=>n.identifier===this.analogTouchId)&&(this.analogActive=!1,this.analogTouchId=null,this.moveX=0,this.moveY=0,this.analogKnob.style.transform="translate(-50%, -50%)",this.callbacks.onMove(0,0))}handleJumpStart(e){e.preventDefault(),e.stopPropagation(),this.jumpButton.style.transform="scale(0.92)",this.jumpButton.style.background="rgba(255, 255, 255, 0.25)",this.callbacks.onJump()}handleJumpEnd(e){e.preventDefault(),e.stopPropagation(),this.jumpButton.style.transform="scale(1)",this.jumpButton.style.background="rgba(255, 255, 255, 0.12)"}handleInventoryStart(e){e.preventDefault(),e.stopPropagation(),this.inventoryButton.style.transform="scale(0.92)",this.inventoryButton.style.background="rgba(255, 255, 255, 0.25)",this.callbacks.onOpenInventory()}handleInventoryEnd(e){e.preventDefault(),e.stopPropagation(),this.inventoryButton.style.transform="scale(1)",this.inventoryButton.style.background="rgba(255, 255, 255, 0.12)"}handleGlobalTouchStart(e){const t=e.target;if(!this.isUIElement(t)){if(e.touches.length===2){this.startPinchZoom(e);return}if(e.touches.length===1&&t.tagName==="CANVAS"){const n=e.touches[0];if(this.analogTouchId!==null)return;this.interactionTouchId=n.identifier,this.interactionStartTime=Date.now(),this.interactionStartX=n.clientX,this.interactionStartY=n.clientY,this.isBreaking=!1,this.callbacks.onCrosshairMove(n.clientX,n.clientY),this.breakCheckTimeout=setTimeout(()=>{this.interactionTouchId!==null&&!this.isBreaking&&(this.isBreaking=!0,this.callbacks.onBreakStart(this.interactionStartX,this.interactionStartY))},fa)}}}handleGlobalTouchMove(e){if(e.touches.length===2&&this.pinchTouchIds.length===2){this.updatePinchZoom(e);return}if(this.interactionTouchId!==null){const t=Array.from(e.touches).find(n=>n.identifier===this.interactionTouchId);if(t){const n=t.clientX-this.interactionStartX,s=t.clientY-this.interactionStartY;Math.sqrt(n*n+s*s)>_c&&(this.callbacks.onCrosshairMove(t.clientX,t.clientY),this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null),!this.isBreaking&&Date.now()-this.interactionStartTime>fa?(this.isBreaking=!0,this.callbacks.onBreakStart(t.clientX,t.clientY)):this.isBreaking&&(this.callbacks.onBreakEnd(),this.callbacks.onBreakStart(t.clientX,t.clientY)))}}}handleGlobalTouchEnd(e){for(const n of Array.from(e.changedTouches)){const s=this.pinchTouchIds.indexOf(n.identifier);s!==-1&&(this.pinchTouchIds.splice(s,1),this.pinchTouchIds.length<2&&(this.pinchStartDistance=0))}const t=Array.from(e.changedTouches).find(n=>n.identifier===this.interactionTouchId);if(t){this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null);const n=Date.now()-this.interactionStartTime,s=t.clientX-this.interactionStartX,r=t.clientY-this.interactionStartY,a=Math.sqrt(s*s+r*r);this.isBreaking?this.callbacks.onBreakEnd():n<fa&&a<_c&&this.callbacks.onPlace(t.clientX,t.clientY),this.interactionTouchId=null,this.isBreaking=!1}}startPinchZoom(e){this.pinchTouchIds=[e.touches[0].identifier,e.touches[1].identifier],this.pinchStartDistance=this.getPinchDistance(e.touches[0],e.touches[1]),this.interactionTouchId!==null&&(this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null),this.isBreaking&&this.callbacks.onBreakEnd(),this.interactionTouchId=null,this.isBreaking=!1)}updatePinchZoom(e){if(this.pinchStartDistance===0)return;const t=Array.from(e.touches).find(a=>a.identifier===this.pinchTouchIds[0]),n=Array.from(e.touches).find(a=>a.identifier===this.pinchTouchIds[1]);if(!t||!n)return;const s=this.getPinchDistance(t,n),r=s-this.pinchStartDistance;if(Math.abs(r)>10){const a=-r*.02;this.callbacks.onZoom(a),this.pinchStartDistance=s}}getPinchDistance(e,t){const n=e.clientX-t.clientX,s=e.clientY-t.clientY;return Math.sqrt(n*n+s*s)}isUIElement(e){let t=e;for(;t;){if(t.id==="mobile-controls"||t.id==="mobile-analog"||t.id==="mobile-jump"||t.id==="mobile-inventory"||t.id==="hotbar"||t.id==="creative-inventory"||t.id==="pause-menu"||t.id==="debug-ui")return!0;t=t.parentElement}return!1}getMovement(){return{x:this.moveX,y:this.moveY}}setVisible(e){this.container.style.display=e?"block":"none"}isVisible(){return this.container.style.display!=="none"}destroy(){this.breakCheckTimeout&&clearTimeout(this.breakCheckTimeout),this.analogStick.removeEventListener("touchstart",this.boundAnalogStart),this.analogStick.removeEventListener("touchmove",this.boundAnalogMove),this.analogStick.removeEventListener("touchend",this.boundAnalogEnd),this.analogStick.removeEventListener("touchcancel",this.boundAnalogEnd),this.jumpButton.removeEventListener("touchstart",this.boundJumpStart),this.jumpButton.removeEventListener("touchend",this.boundJumpEnd),this.inventoryButton.removeEventListener("touchstart",this.boundInventoryStart),this.inventoryButton.removeEventListener("touchend",this.boundInventoryEnd),document.removeEventListener("touchstart",this.boundGlobalTouchStart),document.removeEventListener("touchmove",this.boundGlobalTouchMove),document.removeEventListener("touchend",this.boundGlobalTouchEnd),document.removeEventListener("touchcancel",this.boundGlobalTouchEnd),this.container.remove()}}function Ci(){return pn.isMobile()}const n_=7/9,pa=5.4;class i_{renderer;scene;camera;postFX=null;chunkManager=null;player=null;playerPhysics=null;blockHighlight=null;debugUI;shaderDebugUI=null;swimDebugUI;textureManager;ambientLight=null;hemiLight=null;sunLight=null;sunMarker=null;shadowOffset=new N(15,200,160);shadowOffsetTarget=new N(15,200,160);sunDirection=new N(.3,.8,.5).normalize();sunVisualDirection=new N(.3,.8,.5).normalize();keyLightDirection=new N(.34,.86,.38).normalize();keyLightDirectionSmoothed=new N(.34,.86,.38).normalize();dayLengthSeconds=120;worldTimeSeconds=this.dayLengthSeconds*.25;timeOfDay=.25;skyDayColor=new he(8374015);skyDawnColor=new he(16750177);skyNightColor=new he(463142);fogDayColor=new he(10476031);fogDawnColor=new he(13143932);fogNightColor=new he(989739);ambientDayColor=new he(16774365);ambientDawnColor=new he(16759898);ambientNightColor=new he(6258633);hemiGroundDayColor=new he(.22,.26,.22);hemiGroundNightColor=new he(1251105);sunDayLightColor=new he(16773855);frameSkyColor=new he;frameFogColor=new he;frameAmbientColor=new he;frameHemiSkyColor=new he;frameHemiGroundColor=new he;waterSwimYOffset=0;inventoryHUD;droppedItemManager=null;blockBreaking=null;crosshair;pauseMenu;creativeInventory;generator=null;seed;targetedBlockPos=null;isMouseDown=!1;hasValidTarget=!1;isGamepadAttacking=!1;isGamepadCrouching=!1;mobileControls=null;mobileMovement={x:0,y:0};isMobileTouchBreaking=!1;blockRaycaster=new Ug;blockRayNdc=new ke;blockRaycastHits=[];chunkRaycastTargets=[];chunkRaycastRevision=-1;clock;isInitialized=!1;isPaused=!1;cameraDistance=50;zoom=10;constructor(){this.seed=Math.floor(Math.random()*2147483647),this.renderer=new Mg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(8900331),this.renderer.outputColorSpace=xt,this.renderer.toneMapping=co,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Sc,this.scene=new bg,this.scene.fog=new ds(8900331,100,200);const e=window.innerWidth/window.innerHeight;this.camera=new _r(-this.zoom*e,this.zoom*e,this.zoom,-this.zoom,.1,1e3),this.setupIsometricCamera(),this.setupLights(),this.initCinematicPostFX(),this.textureManager=new C0,this.debugUI=new v0,this.shaderDebugUI=null,this.swimDebugUI=new Ov,this.inventoryHUD=new Co,this.crosshair=new J0,this.pauseMenu=new Nv,this.creativeInventory=new Jv(this.inventoryHUD),this.swimDebugUI.setOnChange(t=>{this.player&&this.player.setSwimPose(t)}),this.swimDebugUI.setOnWaterYChange(t=>{this.waterSwimYOffset=t}),this.clock=new th,this.pauseMenu.onResume=()=>{this.isPaused=!1,this.crosshair.setVisible(!0),this.mobileControls&&Ci()&&this.mobileControls.setVisible(!0)},this.pauseMenu.onToggleDebug=()=>{this.debugUI.toggleVisibility()},this.pauseMenu.onSettingsChange=t=>{this.applyVideoSettings(t.video),console.log("Settings updated:",t)},this.creativeInventory.onOpen=()=>{this.isPaused=!0,this.crosshair.setVisible(!1),this.mobileControls&&this.mobileControls.setVisible(!1)},this.creativeInventory.onClose=()=>{this.isPaused=!1,this.crosshair.setVisible(!0),this.mobileControls&&Ci()&&this.mobileControls.setVisible(!0)},Ci()&&this.setupMobileControls()}setupMobileControls(){this.mobileControls=new pn({onMove:(e,t)=>{this.mobileMovement.x=e,this.mobileMovement.y=t},onJump:()=>{if(this.player&&!this.isPaused)if(this.player.swimming){if(this.playerPhysics){const t=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0),n=this.player.position.y+3*.1;this.player.position.y=Math.min(n,t)}}else this.player.jump()},onOpenInventory:()=>{this.isPaused||this.creativeInventory.toggle()},onZoom:e=>{this.isPaused||(this.zoom+=e,this.zoom=Math.max(5,Math.min(26,this.zoom)),this.updateCameraZoom())},onBreakStart:(e,t)=>{this.isPaused||(this.isMobileTouchBreaking=!0,this.updateBlockHighlight(e,t))},onBreakEnd:()=>{this.isMobileTouchBreaking=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()},onPlace:(e,t)=>{this.isPaused||(this.updateBlockHighlight(e,t),this.placeBlock())},onCrosshairMove:(e,t)=>{this.isPaused||(this.crosshair.moveBy(e-this.crosshair.getPosition().x,t-this.crosshair.getPosition().y),this.updateBlockHighlight(e,t))}}),document.body.style.cursor=""}applyVideoSettings(e){const t={...e,graphicsQuality:"high"};t.zoom!==this.zoom&&(this.zoom=t.zoom,this.updateCameraZoom()),this.chunkManager&&(this.chunkManager.setRenderDistance(t.renderDistance),this.chunkManager.setFastGraphics(t.graphicsQuality==="low"),this.chunkManager.setZoom(this.zoom));const n={low:1,medium:1.5,high:Math.min(window.devicePixelRatio,2)};this.renderer.setPixelRatio(n[t.graphicsQuality]),this.postFX?.setSize(window.innerWidth,window.innerHeight),this.scene.fog||(this.scene.fog=new ds(8900331,100,200)),ec({shaderEnabled:!0})}setupIsometricCamera(){const e=this.cameraDistance;this.camera.position.set(e,e,e),this.camera.lookAt(0,0,0),this.camera.up.set(0,1,0)}setupLights(){this.ambientLight=new Ig(16777215,.65),this.scene.add(this.ambientLight),this.sunLight=new Dg(16777215,.9),this.sunLight.position.set(15,200,160),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048;const e=80;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=300,this.sunLight.shadow.bias=-.0041,this.sunLight.shadow.normalBias=.005,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight.target),this.scene.add(this.sunLight),this.hemiLight=new Rg(8900331,4021309,.32),this.scene.add(this.hemiLight);const t=new ft({color:14205304,transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1});this.sunMarker=new qe(new yo(2.4,16,16),t),this.sunMarker.frustumCulled=!1,this.scene.add(this.sunMarker),this.updateDayNight(0)}initCinematicPostFX(){try{this.postFX=new jv(this.renderer,this.scene,this.camera,window.innerWidth,window.innerHeight)}catch(e){this.postFX=null,console.warn("⚠️ Cinematic post-processing unavailable; using direct renderer fallback.",e)}}updateDayNight(e){this.worldTimeSeconds+=e,this.timeOfDay=this.worldTimeSeconds/this.dayLengthSeconds%1;const t=this.timeOfDay*Math.PI*2,n=Math.sin(t),s=t+Math.PI*.15,r=1-Math.min(.55,Math.abs(n)*.38);this.sunDirection.set(Math.cos(s)*r,n,Math.sin(s)*r).normalize();const a=1,o=0,c=.72,h=Math.sqrt(Math.max(0,1-c*c));this.keyLightDirection.set(Math.cos(s)*h,c,Math.sin(s)*h);const u=e>0?zt.clamp(e*3,0,1):1;this.keyLightDirectionSmoothed.lerp(this.keyLightDirection,u).normalize();const d=this.frameSkyColor.copy(this.skyNightColor).lerp(this.skyDawnColor,o*.9).lerp(this.skyDayColor,a),p=this.frameFogColor.copy(this.fogNightColor).lerp(this.fogDawnColor,o*.86).lerp(this.fogDayColor,a);this.renderer.setClearColor(d,1),this.renderer.toneMappingExposure=zt.lerp(1.06,1.3,a)+o*.02,this.scene.fog instanceof ds&&(this.scene.fog.color.copy(p),this.scene.fog.near=zt.lerp(80,120,a),this.scene.fog.far=zt.lerp(160,230,a)),this.ambientLight&&(this.frameAmbientColor.copy(this.ambientNightColor).lerp(this.ambientDawnColor,o*.98).lerp(this.ambientDayColor,a),this.ambientLight.color.copy(this.frameAmbientColor),this.ambientLight.intensity=zt.lerp(.36,.84,a)+o*.04),this.hemiLight&&(this.frameHemiSkyColor.copy(d).multiplyScalar(zt.lerp(.52,.95,a)),this.hemiLight.color.copy(this.frameHemiSkyColor),this.frameHemiGroundColor.copy(this.hemiGroundDayColor).lerp(this.hemiGroundNightColor,1-a),this.hemiLight.groundColor.copy(this.frameHemiGroundColor),this.hemiLight.intensity=zt.lerp(.26,.48,a)+o*.04),this.sunLight&&(this.sunLight.color.copy(this.sunDayLightColor),this.sunLight.intensity=zt.lerp(.46,1.35,a)+o*.06,this.sunLight.shadow.intensity=zt.lerp(.48,.78,a)),this.shadowOffsetTarget.set(this.keyLightDirectionSmoothed.x*165,120+Math.max(.22,this.keyLightDirectionSmoothed.y)*130,this.keyLightDirectionSmoothed.z*165);const g=e>0?zt.clamp(e*3,0,1):1;this.shadowOffset.lerp(this.shadowOffsetTarget,g);const v=zt.lerp(.36,1,a)+o*.02,_=zt.lerp(1.16,1.06,a);ec({shaderEnabled:!0,sunX:this.keyLightDirectionSmoothed.x*100,sunY:this.keyLightDirectionSmoothed.y*100,sunZ:this.keyLightDirectionSmoothed.z*100,sunBoost:zt.lerp(.22,.72,a)+o*.02,globalLight:v,nightLift:_}),this.postFX&&this.postFX.setTimeOfDay(this.timeOfDay)}async init(){const e=document.getElementById("loading");document.body.appendChild(this.renderer.domElement),Ci()&&(this.renderer.domElement.style.touchAction="none"),e&&(e.querySelector(".loading-text").textContent="Loading Textures..."),await this.textureManager.loadTextures(),e&&(e.querySelector(".loading-text").textContent="Initializing World..."),this.generator=await yv(this.seed),this.chunkManager=new e0(this.scene,this.generator,this.textureManager),this.playerPhysics=new t_(this.chunkManager),this.droppedItemManager=new X0(this.scene,this.textureManager,this.inventoryHUD,(r,a)=>this.chunkManager.getHeightAt(r,a)),this.blockBreaking=new Z0(this.scene),vt().preloadCommonSounds();const t=this.findSpawnPoint();this.player=new f0(this.scene,t.x,t.z),this.player.setY(t.y),this.blockHighlight=new m0(this.scene),this.setupInputHandlers(),this.setupGamepadCommands(),window.addEventListener("resize",()=>this.handleResize()),e&&(e.style.display="none"),console.log(`⛏️ IsoCraft 3D initialized! Seed: ${this.seed.toString(16)}`),console.log("🎮 Controls: WASD to move, Space to jump, C to crouch, Mouse wheel to zoom"),console.log("🏊 Swimming activates automatically in water!"),console.log("🎵 Press ESC for game menu and sound settings"),console.log("📦 Press E to open Creative Inventory"),this.isInitialized=!0;const n=ps();n.setContext("overworld"),n.start();const s=this.pauseMenu.getSettings();s.showFPS||this.debugUI.toggleVisibility(),this.applyVideoSettings(s.video),this.animate()}findSpawnPoint(){if(!this.generator)return{x:0,y:64,z:0};for(let e=0;e<1e3;e+=8)for(let t=0;t<16;t++){const n=t/16*Math.PI*2,s=Math.floor(Math.cos(n)*e),r=Math.floor(Math.sin(n)*e),a=this.generator.getHeightAt(s,r),o=this.generator.getBiomeAt(s,r);if(!this.generator.isOcean(o)&&a>=63&&a<=80)return console.log(`🏠 Spawn found at (${s}, ${a}, ${r})`),{x:s,y:a+1,z:r}}return{x:0,y:64,z:0}}setupGamepadCommands(){const e=jt();e.registerCommand(mt.Jump,new Pv(()=>{this.player&&!this.isPaused&&this.player.jump()})),e.registerCommand(mt.Crouch,new kv(()=>{this.player&&!this.isPaused&&!this.player.swimming&&(this.isGamepadCrouching=!this.isGamepadCrouching,this.player.setCrouching(this.isGamepadCrouching))})),e.registerCommand(mt.Attack,new Dv(()=>{this.isPaused||(this.isGamepadAttacking=!0)},()=>{this.isGamepadAttacking=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()})),e.registerCommand(mt.Use,new Iv(()=>{this.isPaused||this.placeBlock()})),e.registerCommand(mt.NextSlot,new pc("next",()=>{if(!this.isPaused){const t=this.inventoryHUD.getSelectedSlot();this.inventoryHUD.selectSlot((t+1)%9)}})),e.registerCommand(mt.PrevSlot,new pc("prev",()=>{if(!this.isPaused){const t=this.inventoryHUD.getSelectedSlot();this.inventoryHUD.selectSlot((t-1+9)%9)}})),e.registerCommand(mt.OpenInventory,new Uv(()=>{this.pauseMenu.isMenuVisible()||this.creativeInventory.toggle()})),e.onPause=()=>{this.isPaused||(this.pauseMenu.toggle(),this.isPaused=this.pauseMenu.isMenuVisible(),this.crosshair.setVisible(!this.isPaused),this.mobileControls&&this.mobileControls.setVisible(!this.isPaused&&Ci()))}}setupInputHandlers(){const e=new Set;window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(t.preventDefault(),this.creativeInventory.isInventoryVisible()){this.creativeInventory.hide();return}this.pauseMenu.toggle(),this.isPaused=this.pauseMenu.isMenuVisible(),this.crosshair.setVisible(!this.isPaused),this.mobileControls&&this.mobileControls.setVisible(!this.isPaused&&Ci());return}if(t.code==="KeyE"){if(t.preventDefault(),this.pauseMenu.isMenuVisible())return;this.creativeInventory.toggle();return}this.isPaused||this.creativeInventory.isInventoryVisible()||(e.add(t.code),t.code==="F3"&&(t.preventDefault(),this.debugUI.toggleVisibility(),this.pauseMenu.toggleDebugSetting()))}),window.addEventListener("keyup",t=>{this.isPaused||this.creativeInventory.isInventoryVisible()||e.delete(t.code)}),this.keys=e,this.renderer.domElement.addEventListener("wheel",t=>{t.preventDefault(),this.zoom+=t.deltaY*.02,this.zoom=Math.max(5,Math.min(26,this.zoom)),this.updateCameraZoom()},{passive:!1}),this.renderer.domElement.addEventListener("mousemove",t=>{if(!this.isPaused&&(this.updateBlockHighlight(t.clientX,t.clientY),this.isMouseDown&&this.blockBreaking)){const n=this.blockBreaking.getTargetBlock();if(n&&this.blockHighlight?.isVisible()){const s=this.blockHighlight.getPosition();n.equals(s)||this.blockBreaking.stopBreaking()}}}),this.renderer.domElement.addEventListener("mousedown",t=>{this.isPaused||t.button===0&&(this.isMouseDown=!0)}),this.renderer.domElement.addEventListener("mouseup",t=>{t.button===0&&(this.isMouseDown=!1,this.blockBreaking&&this.blockBreaking.stopBreaking())}),this.renderer.domElement.addEventListener("mouseleave",()=>{this.isMouseDown=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()}),this.renderer.domElement.addEventListener("contextmenu",t=>{t.preventDefault(),this.placeBlock()})}placeBlock(){if(!this.blockHighlight||!this.chunkManager||!this.player||!this.blockHighlight.isVisible())return;const e=this.blockHighlight.getPosition(),t=this.blockHighlight.getFace();let n=this.chunkManager.getBlockTypeAt(e.x,e.y,e.z),s=e.y;if(n===null||!Oi(n)){const Z=this.chunkManager.getBlockTypeAt(e.x,e.y-1,e.z);Z!==null&&Oi(Z)&&(n=Z,s=e.y-1)}if(n!==null&&Oi(n)){const Z=e.x+.5-this.player.position.x,$=s+.5-(this.player.position.y+.9),K=e.z+.5-this.player.position.z;Math.sqrt(Z*Z+$*$+K*K)<=pa&&this.chunkManager.toggleDoor(e.x,s,e.z)&&(vt().playBlockPlace(n),this.player.punch());return}const r=e.clone();switch(t){case"top":r.y+=1;break;case"bottom":r.y-=1;break;case"left":r.x-=1;break;case"right":r.x+=1;break;case"front":r.z+=1;break;case"back":r.z-=1;break}const a=r.x+.5-this.player.position.x,o=r.y+.5-(this.player.position.y+.9),c=r.z+.5-this.player.position.z;if(Math.sqrt(a*a+o*o+c*c)>pa){console.log("📏 Too far to place block");return}const u=this.player.position.x,d=this.player.position.y,p=this.player.position.z,g=.6,v=1.8,_=g/2,m=r.x,f=r.x+1,w=r.y,M=r.y+1,b=r.z,R=r.z+1,L=u-_,A=u+_,P=d,y=d+v,x=p-_,C=p+_;if(f>L&&m<A&&M>P&&w<y&&R>x&&b<C){console.log("🚫 Cannot place block inside player");return}const F=this.inventoryHUD.getSelectedSlot(),O=this.inventoryHUD.getItem(F);if(!O||O.count<=0){console.log("🙌 No item selected to place");return}this.chunkManager.placeBlock(r.x,r.y,r.z,O.blockType)&&(this.inventoryHUD.removeItem(F,1),this.player.punch(),vt().playBlockPlace(O.blockType),console.log(`🧱 Placed ${l[O.blockType]} at (${r.x}, ${r.y}, ${r.z})`))}updateBlockBreaking(e){if(!(this.isMouseDown||this.isGamepadAttacking||this.isMobileTouchBreaking)||!this.blockHighlight||!this.chunkManager||!this.player||!this.blockBreaking)return;let n=null;if(this.blockBreaking.isBreaking()&&(n=this.blockBreaking.getTargetBlock()),!n&&this.hasValidTarget&&(n=this.blockHighlight.getPosition()),!n){this.blockBreaking.stopBreaking();return}const s=n.x+.5-this.player.position.x,r=n.y+.5-(this.player.position.y+.9),a=n.z+.5-this.player.position.z;if(Math.sqrt(s*s+r*r+a*a)>pa){this.blockBreaking.stopBreaking();return}const c=this.chunkManager.getBlockTypeAt(n.x,n.y,n.z);if(c===null||c===l.Air||c===l.Water){this.blockBreaking.stopBreaking();return}this.player.punching||this.player.punch(),this.blockHighlight.setVisible(!0);const h=this.blockBreaking.getCurrentStage(),u=this.blockBreaking.startBreaking(n,c,e),d=this.blockBreaking.getCurrentStage();d>h&&d>=0&&vt().playBlockHit(c),u&&this.finishBreakingBlock(n,c)}finishBreakingBlock(e,t){if(!this.chunkManager||!this.droppedItemManager||!this.blockHighlight)return;vt().playBlockBreak(t),this.chunkManager.removeBlock(e.x,e.y,e.z);const n=Ng[t];if(n!==void 0){const s=Og[t]||.05;Math.random()<s?(this.droppedItemManager.spawnItemsFromBlock(n,e,1),console.log(`🌱 Leaves dropped a ${l[n]}!`)):console.log("🍂 Leaves crumbled to nothing")}else{const s=this.getBlockDropType(t);this.droppedItemManager.spawnItemsFromBlock(s,e,1),console.log(`⛏️ Broke ${l[t]} at (${e.x}, ${e.y}, ${e.z})`)}this.blockHighlight.setVisible(!1)}getBlockDropType(e){return{[l.Grass]:l.Dirt,[l.Podzol]:l.Dirt,[l.Mycelium]:l.Dirt}[e]??e}breakTargetedBlock(){}updateCameraZoom(){const e=window.innerWidth/window.innerHeight;this.camera.left=-this.zoom*e,this.camera.right=this.zoom*e,this.camera.top=this.zoom,this.camera.bottom=-this.zoom,this.camera.updateProjectionMatrix(),this.chunkManager&&this.chunkManager.setZoom(this.zoom)}refreshChunkRaycastTargets(){if(!this.chunkManager){this.chunkRaycastTargets.length=0,this.chunkRaycastRevision=-1;return}const e=this.chunkManager.getChunkRevision();e!==this.chunkRaycastRevision&&(this.chunkRaycastTargets.length=0,this.scene.children.forEach(t=>{t.name.startsWith("chunk_")&&this.chunkRaycastTargets.push(t)}),this.chunkRaycastRevision=e)}updateBlockHighlight(e,t){if(!this.blockHighlight||!this.chunkManager)return;const n=e/window.innerWidth*2-1,s=-(t/window.innerHeight)*2+1;this.blockRayNdc.set(n,s),this.blockRaycaster.setFromCamera(this.blockRayNdc,this.camera),this.refreshChunkRaycastTargets(),this.blockRaycastHits.length=0,this.blockRaycaster.intersectObjects(this.chunkRaycastTargets,!0,this.blockRaycastHits);const r=this.blockRaycastHits;if(r.length>0){const a=r[0],o=a.point.clone(),c=a.face?.normal;let h="top";if(c){const p=c.clone().transformDirection(a.object.matrixWorld);h=g0(p),o.sub(p.multiplyScalar(.1))}const u=new N(Math.round(o.x),Math.round(o.y),Math.round(o.z));this.blockHighlight.setPosition(u.x,u.y,u.z,h);const d=this.chunkManager.getBlockTypeAt(u.x,u.y,u.z);this.blockHighlight.setColorForBlock(d),this.hasValidTarget=!0,this.blockHighlight.setVisible(!0)}else this.hasValidTarget=!1,this.blockHighlight.setVisible(!1)}handleResize(){const e=window.innerWidth/window.innerHeight;this.camera.left=-this.zoom*e,this.camera.right=this.zoom*e,this.camera.top=this.zoom,this.camera.bottom=-this.zoom,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.postFX?.setSize(window.innerWidth,window.innerHeight)}animate=()=>{if(requestAnimationFrame(this.animate),!this.isInitialized)return;const e=this.clock.getDelta();this.updateDayNight(e),x0(this.worldTimeSeconds);const t=jt();if(t.update(e),!this.isPaused&&!this.creativeInventory.isInventoryVisible()){const n=t.getCrosshairVector();this.crosshair.updateGamepad(n.x,n.y,e);const s=8*e;t.isActionPressed(mt.ZoomIn)&&(this.zoom=Math.max(5,this.zoom-s),this.updateCameraZoom()),t.isActionPressed(mt.ZoomOut)&&(this.zoom=Math.min(26,this.zoom+s),this.updateCameraZoom())}if(t.isActionPressed(mt.Attack)&&!this.isPaused?this.isGamepadAttacking=!0:t.isActionPressed(mt.Attack)||(this.isGamepadAttacking=!1),!this.isPaused){this.updatePlayerMovement(e),this.updateCamera();const n=this.crosshair.getPosition();this.updateBlockHighlight(n.x,n.y),this.chunkManager&&this.player&&(this.chunkManager.update(this.player.position.x,this.player.position.z),this.chunkManager.setPlayerPosition(this.player.position),this.chunkManager.updateFallingBlocks(e)),this.droppedItemManager&&this.player&&this.droppedItemManager.update(e,this.player.position),this.updateBlockBreaking(e)}if(this.updateDebugUI(e),this.postFX)try{this.postFX.render(e)}catch(n){console.warn("⚠️ Post-processing render failed, switching to direct renderer.",n),this.postFX.dispose(),this.postFX=null,this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.camera)};updatePlayerMovement(e){if(!this.player||!this.chunkManager||!this.playerPhysics)return;const t=this.keys,n=jt(),s=10;let r=0,a=0;(t.has("KeyW")||t.has("ArrowUp"))&&(r-=1,a-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(r+=1,a+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(r-=1,a+=1),(t.has("KeyD")||t.has("ArrowRight"))&&(r+=1,a-=1);const o=n.getMovementVector();if((Math.abs(o.x)>.01||Math.abs(o.y)>.01)&&(r=-o.y+o.x,a=-o.y-o.x),(Math.abs(this.mobileMovement.x)>.01||Math.abs(this.mobileMovement.y)>.01)&&(r=-this.mobileMovement.y+this.mobileMovement.x,a=-this.mobileMovement.y-this.mobileMovement.x),t.has("Space"))if(this.player.swimming){const d=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0),p=this.player.position.y+3*e;this.player.position.y=Math.min(p,d)}else this.player.jump();if(this.player.swimming)this.isGamepadCrouching=!1;else{const u=t.has("KeyC");(u||!this.isGamepadCrouching)&&this.player.setCrouching(u||this.isGamepadCrouching)}this.playerPhysics.setWaterSwimYOffset(this.waterSwimYOffset);const c=this.playerPhysics.isInWater(this.player.position.x,this.player.position.z,this.player.position.y);this.player.setSwimming(c);const h=this.playerPhysics.getBlockAtFeet(this.player.position.x,this.player.position.z);if(h!==null&&h!==l.Air&&this.player.setCurrentBlockType(h),!this.player.jumping&&!this.player.swimming&&(this.playerPhysics.canStand(this.player.position.x,this.player.position.y,this.player.position.z)||this.player.fall()),this.player.swimming&&!this.player.jumping){const u=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0);this.player.setY(u)}if(r!==0||a!==0){const u=Math.sqrt(r*r+a*a),d=s*this.player.getSpeedMultiplier();r=r/u*d*e,a=a/u*d*e;const p=this.playerPhysics.tryMove({position:this.player.position,isJumping:this.player.jumping||this.player.isInAir(),isSwimming:this.player.swimming,isCrouching:this.player.crouching,jumpVelocity:this.player.getJumpVelocity()},r,a);p.moved&&(this.player.move(p.newX-this.player.position.x,p.newZ-this.player.position.z),this.player.jumping||this.player.isInAir()?this.player.updateTerrainY(p.newY):p.shouldFall?(this.player.fall(),this.player.updateTerrainY(p.newY)):this.player.setY(p.newY))}if(this.player.jumping){const u=this.chunkManager.getStandingHeightAt(this.player.position.x,this.player.position.z,this.player.position.y),d=this.chunkManager.getHeightAt(this.player.position.x,this.player.position.z),v=this.chunkManager.getBlockAt(Math.floor(this.player.position.x),Math.floor(d),Math.floor(this.player.position.z))===l.Water?Math.max(u,d+n_+.5):u;this.player.updateTerrainY(v)}if(this.player.update(e),this.player.jumping&&this.player.getJumpVelocity()>0){const u=this.playerPhysics.checkCeilingCollision(this.player.position.x,this.player.position.y,this.player.position.z);u.hit&&this.player.hitCeiling(u.maxY)}}updateCamera(){if(!this.player)return;const e=this.cameraDistance;this.camera.position.set(this.player.position.x+e,this.player.position.y+e,this.player.position.z+e),this.camera.lookAt(this.player.position.x,this.player.position.y,this.player.position.z);const t=this.sunLight;if(t){const r=t.shadow.mapSize.width,o=60*2/r,c=Math.round(this.player.position.x/o)*o,h=Math.round(this.player.position.z/o)*o;t.position.set(c+this.shadowOffset.x,this.player.position.y+this.shadowOffset.y,h+this.shadowOffset.z),t.target.position.set(c,this.player.position.y,h)}const n=250,s=180;this.sunMarker&&(this.sunVisualDirection.copy(this.sunDirection),this.sunVisualDirection.y=Math.abs(this.sunVisualDirection.y),this.sunVisualDirection.normalize(),this.sunMarker.position.copy(this.player.position).addScaledVector(this.sunVisualDirection,n),this.sunMarker.position.y+=s,this.sunMarker.material.opacity=.72,this.sunMarker.visible=!0)}updateDebugUI(e){if(!this.player||!this.generator)return;const t=this.generator.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z)),n=e>0?Math.round(1/e):60;let s=null;if(this.chunkManager){const o=Math.floor(this.player.position.y)-1,c=this.chunkManager.getBlockAt(Math.floor(this.player.position.x),o,Math.floor(this.player.position.z));c!==null&&(s=l[c])}let r=null;if(this.blockHighlight?.isVisible()&&this.chunkManager){const o=this.blockHighlight.getPosition(),c=this.chunkManager.getBlockAt(Math.floor(o.x),Math.floor(o.y),Math.floor(o.z));c!==null&&(r=l[c])}const a=this.renderer.info.render;this.debugUI.update({fps:n,playerX:this.player.position.x,playerY:this.player.position.y,playerZ:this.player.position.z,chunks:this.chunkManager?.getChunkCount()||0,biome:this.generator.getBiomeName(t),seed:this.seed,zoom:this.zoom,playerState:this.player.getStateName(),triangles:a.triangles,drawCalls:a.calls,blockBelow:s,targetedBlock:r})}destroy(){this.postFX?.dispose(),this.renderer.dispose(),this.chunkManager?.destroy(),this.player?.destroy(),this.blockHighlight?.destroy(),this.droppedItemManager?.destroy(),this.blockBreaking?.destroy(),this.crosshair.destroy(),this.debugUI.destroy(),this.shaderDebugUI?.destroy(),this.pauseMenu.destroy(),this.creativeInventory.destroy(),this.mobileControls?.destroy(),ps().destroy(),this.sunMarker?.geometry.dispose(),this.sunMarker?.material.dispose()}}async function s_(){const i=new i_;await i.init(),window.game=i,console.log("⛏️ IsoCraft 3D initialized!"),console.log("🌍 Using Three.js with cubiomes for Minecraft biome generation"),console.log("🎮 Controls: WASD to move, Mouse wheel to zoom")}s_().catch(i=>{console.error("Failed to start game:",i);const e=document.getElementById("loading");e&&(e.innerHTML=`
      <div style="color: #ff5555; font-size: 20px; text-shadow: 2px 2px 0 #330000;">Error Loading World</div>
      <div style="color: #aaa; margin-top: 15px; font-size: 14px; text-shadow: 1px 1px 0 #222;">${i.message}</div>
    `)});
