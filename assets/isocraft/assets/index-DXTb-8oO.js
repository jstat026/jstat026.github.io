(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lo="170",_h=0,Fo=1,xh=2,Sc=1,Mc=2,An=3,Dn=0,Wt=1,Tt=2,Ot=0,Ui=1,ga=2,Oo=3,Bo=4,bc=5,Ln=100,Sh=101,Mh=102,bh=103,yh=104,va=200,wh=201,Th=202,Eh=203,_a=204,xa=205,yc=206,Ah=207,wc=208,Ch=209,Lh=210,Rh=211,Ph=212,kh=213,Dh=214,Sa=0,Ma=1,ba=2,Oi=3,ya=4,wa=5,Ta=6,Ea=7,co=0,Ih=1,Uh=2,Yn=0,Tc=1,Ec=2,Ac=3,ho=4,Nh=5,Cc=6,Lc=7,Rc=300,Bi=301,zi=302,Aa=303,Ca=304,gr=306,ai=1e3,si=1001,La=1002,et=1003,Fh=1004,ws=1005,vn=1006,Ar=1007,ri=1008,In=1009,Pc=1010,kc=1011,gs=1012,uo=1013,oi=1014,cn=1015,un=1016,fo=1017,po=1018,li=1020,Dc=35902,Ic=1021,Uc=1022,hn=1023,Nc=1024,Fc=1025,Ni=1026,ci=1027,vr=1028,mo=1029,Oc=1030,go=1031,vo=1033,sr=33776,rr=33777,ar=33778,or=33779,Ra=35840,Pa=35841,ka=35842,Da=35843,Ia=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,Ha=37812,Ga=37813,Va=37814,Wa=37815,Xa=37816,Ya=37817,$a=37818,qa=37819,ja=37820,Za=37821,lr=36492,Ja=36494,Ka=36495,Bc=36283,Qa=36284,eo=36285,to=36286,Oh=3200,Bh=3201,_r=0,zh=1,Xn="",xt="srgb",Vi="srgb-linear",xr="linear",rt="srgb",fi=7680,zo=519,Hh=512,Gh=513,Vh=514,zc=515,Wh=516,Xh=517,Yh=518,$h=519,Ho=35044,Go="300 es",Pn=2e3,dr=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vo=1234567;const hs=Math.PI/180,vs=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function _o(i,e){return(i%e+e)%e}function qh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jh(i,e,t){return i!==e?(t-i)/(e-i):0}function us(i,e,t){return(1-t)*i+t*e}function Zh(i,e,t,n){return us(i,e,1-Math.exp(-t*n))}function Jh(i,e=1){return e-Math.abs(_o(i,e*2)-e)}function Kh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tu(i,e){return i+Math.random()*(e-i)}function nu(i){return i*(.5-Math.random())}function iu(i){i!==void 0&&(Vo=i);let e=Vo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function su(i){return i*hs}function ru(i){return i*vs}function au(i){return(i&i-1)===0&&i!==0}function ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),h=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*f,o*h);break;case"YZY":i.set(c*f,o*u,c*d,o*h);break;case"ZXZ":i.set(c*d,c*f,o*u,o*h);break;case"XZX":i.set(o*u,c*v,c*m,o*h);break;case"YXY":i.set(c*m,o*u,c*v,o*h);break;case"ZYZ":i.set(c*v,c*m,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:hs,RAD2DEG:vs,generateUUID:Xi,clamp:Bt,euclideanModulo:_o,mapLinear:qh,inverseLerp:jh,lerp:us,damp:Zh,pingpong:Jh,smoothstep:Kh,smootherstep:Qh,randInt:eu,randFloat:tu,randFloatSpread:nu,seededRandom:iu,degToRad:su,radToDeg:ru,isPowerOfTwo:au,ceilPowerOfTwo:ou,floorPowerOfTwo:lu,setQuaternionFromProperEuler:cu,normalize:Nt,denormalize:Ri};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,a,o,c,h){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],_=s[0],g=s[3],p=s[6],T=s[1],S=s[4],b=s[7],R=s[2],L=s[5],C=s[8];return r[0]=a*_+o*T+c*R,r[3]=a*g+o*S+c*L,r[6]=a*p+o*b+c*C,r[1]=h*_+u*T+d*R,r[4]=h*g+u*S+d*L,r[7]=h*p+u*b+d*C,r[2]=f*_+m*T+v*R,r[5]=f*g+m*S+v*L,r[8]=f*p+m*b+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=u*a-o*h,f=o*c-u*r,m=h*r-a*c,v=t*d+n*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*h-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cr.makeScale(e,t)),this}rotate(e){return this.premultiply(Cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new Be;function Hc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hu(){const i=_s("canvas");return i.style.display="block",i}const Wo={};function os(i){i in Wo||(Wo[i]=!0,console.warn(i))}function uu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function du(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xo=[.64,.33,.3,.6,.15,.06],Yo=[.2126,.7152,.0722],$o=[.3127,.329],qo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Vi]:{primaries:Xo,whitePoint:$o,transfer:xr,toXYZ:qo,fromXYZ:jo,luminanceCoefficients:Yo,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:Xo,whitePoint:$o,transfer:rt,toXYZ:qo,fromXYZ:jo,luminanceCoefficients:Yo,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}});let pi;class pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=_s("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mu=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lr(s[a].image)):r.push(Lr(s[a]))}else r=Lr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gu=0;class It extends Wi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=si,s=si,r=vn,a=ri,o=hn,c=In,h=It.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Xi(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Rc;It.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,h=c[0],u=c[4],d=c[8],f=c[1],m=c[5],v=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(h+1)/2,b=(m+1)/2,R=(p+1)/2,L=(u+f)/4,C=(d+_)/4,P=(v+g)/4;return S>b&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=L/n,r=C/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=L/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-v)/T,this.y=(d-_)/T,this.z=(f-u)/T,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vu extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new It(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zt extends vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vc extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=et,this.minFilter=et,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=et,this.minFilter=et,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(d!==_||c!==f||h!==m||u!==v){let g=1-o;const p=c*f+h*m+u*v+d*_,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),L=Math.atan2(R,p*T);g=Math.sin(g*L)/R,o=Math.sin(o*L)/R}const b=o*T;if(c=c*g+f*b,h=h*g+m*b,u=u*g+v*b,d=d*g+_*b,g===1-o){const R=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=R,h*=R,u*=R,d*=R}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+u*d+c*m-h*f,e[t+1]=c*v+u*f+h*d-o*m,e[t+2]=h*v+u*m+o*f-c*d,e[t+3]=u*v-o*d-c*f-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),d=o(r/2),f=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=f*u*d+h*m*v,this._y=h*m*d-f*u*v,this._z=h*u*v+f*m*d,this._w=h*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+h*m*v,this._y=h*m*d-f*u*v,this._z=h*u*v-f*m*d,this._w=h*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-h*m*v,this._y=h*m*d+f*u*v,this._z=h*u*v+f*m*d,this._w=h*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-h*m*v,this._y=h*m*d+f*u*v,this._z=h*u*v-f*m*d,this._w=h*u*d+f*m*v;break;case"YZX":this._x=f*u*d+h*m*v,this._y=h*m*d+f*u*v,this._z=h*u*v-f*m*d,this._w=h*u*d-f*m*v;break;case"XZY":this._x=f*u*d-h*m*v,this._y=h*m*d-f*u*v,this._z=h*u*v+f*m*d,this._w=h*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*h+a*d-o*u,this.y=n+c*u+o*h-r*d,this.z=s+c*d+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new N,Zo=new xs;class hi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Es.subVectors(this.max,Zi),mi.subVectors(e.a,Zi),gi.subVectors(e.b,Zi),vi.subVectors(e.c,Zi),Fn.subVectors(gi,mi),On.subVectors(vi,gi),qn.subVectors(mi,vi);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-qn.z,qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,qn.z,0,-qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-qn.y,qn.x,0];return!Pr(t,mi,gi,vi,Es)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,mi,gi,vi,Es))?!1:(As.crossVectors(Fn,On),t=[As.x,As.y,As.z],Pr(t,mi,gi,vi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,Ts=new hi,mi=new N,gi=new N,vi=new N,Fn=new N,On=new N,qn=new N,Zi=new N,Es=new N,As=new N,jn=new N;function Pr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);const o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),c=e.dot(jn),h=t.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const xu=new hi,Ji=new N,kr=new N;class Yi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(kr)),this.expandByPoint(Ji.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new N,Dr=new N,Cs=new N,Bn=new N,Ir=new N,Ls=new N,Ur=new N;class xo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dr.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Dr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=Bn.dot(this.direction),c=-Bn.dot(Cs),h=Bn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,v;if(u>0)if(d=a*c-o,f=a*o-c,v=r*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+h}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+h;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+h;else f<=-v?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+h):f<=v?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+h):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+h);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dr).addScaledVector(Cs,f),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,s,r){Ir.subVectors(t,e),Ls.subVectors(n,e),Ur.crossVectors(Ir,Ls);let a=this.direction.dot(Ur),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const c=o*this.direction.dot(Ls.crossVectors(Bn,Ls));if(c<0)return null;const h=o*this.direction.dot(Ir.cross(Bn));if(h<0||c+h>a)return null;const u=-o*Bn.dot(Ur);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,s,r,a,o,c,h,u,d,f,m,v,_,g){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,u,d,f,m,v,_,g)}set(e,t,n,s,r,a,o,c,h,u,d,f,m,v,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,v=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=h,t[1]=m+v*h,t[5]=f-_*h,t[9]=-o*c,t[2]=_-f*h,t[6]=v+m*h,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,v=h*u,_=h*d;t[0]=f+_*o,t[4]=v*o-m,t[8]=a*h,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,v=h*u,_=h*d;t[0]=f-_*o,t[4]=-a*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*d,v=o*u,_=o*d;t[0]=c*u,t[4]=v*h-m,t[8]=f*h+_,t[1]=c*d,t[5]=_*h+f,t[9]=m*h-v,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*h,v=o*c,_=o*h;t[0]=c*u,t[4]=_-f*d,t[8]=v*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=m*d+v,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,m=a*h,v=o*c,_=o*h;t[0]=c*u,t[4]=-d,t[8]=h*u,t[1]=f*d+_,t[5]=a*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Su,e,Mu)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),zn.crossVectors(n,$t),zn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),zn.crossVectors(n,$t)),zn.normalize(),Rs.crossVectors($t,zn),s[0]=zn.x,s[4]=Rs.x,s[8]=$t.x,s[1]=zn.y,s[5]=Rs.y,s[9]=$t.y,s[2]=zn.z,s[6]=Rs.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],_=n[6],g=n[10],p=n[14],T=n[3],S=n[7],b=n[11],R=n[15],L=s[0],C=s[4],P=s[8],y=s[12],x=s[1],A=s[5],O=s[9],F=s[13],Y=s[2],Z=s[6],$=s[10],K=s[14],G=s[3],te=s[7],ue=s[11],xe=s[15];return r[0]=a*L+o*x+c*Y+h*G,r[4]=a*C+o*A+c*Z+h*te,r[8]=a*P+o*O+c*$+h*ue,r[12]=a*y+o*F+c*K+h*xe,r[1]=u*L+d*x+f*Y+m*G,r[5]=u*C+d*A+f*Z+m*te,r[9]=u*P+d*O+f*$+m*ue,r[13]=u*y+d*F+f*K+m*xe,r[2]=v*L+_*x+g*Y+p*G,r[6]=v*C+_*A+g*Z+p*te,r[10]=v*P+_*O+g*$+p*ue,r[14]=v*y+_*F+g*K+p*xe,r[3]=T*L+S*x+b*Y+R*G,r[7]=T*C+S*A+b*Z+R*te,r[11]=T*P+S*O+b*$+R*ue,r[15]=T*y+S*F+b*K+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],_=e[7],g=e[11],p=e[15];return v*(+r*c*d-s*h*d-r*o*f+n*h*f+s*o*m-n*c*m)+_*(+t*c*m-t*h*f+r*a*f-s*a*m+s*h*u-r*c*u)+g*(+t*h*d-t*o*m-r*a*d+n*a*m+r*o*u-n*h*u)+p*(-s*o*u-t*c*d+t*o*f+s*a*d-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],_=e[13],g=e[14],p=e[15],T=d*g*h-_*f*h+_*c*m-o*g*m-d*c*p+o*f*p,S=v*f*h-u*g*h-v*c*m+a*g*m+u*c*p-a*f*p,b=u*_*h-v*d*h+v*o*m-a*_*m-u*o*p+a*d*p,R=v*d*c-u*_*c-v*o*f+a*_*f+u*o*g-a*d*g,L=t*T+n*S+s*b+r*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=T*C,e[1]=(_*f*r-d*g*r-_*s*m+n*g*m+d*s*p-n*f*p)*C,e[2]=(o*g*r-_*c*r+_*s*h-n*g*h-o*s*p+n*c*p)*C,e[3]=(d*c*r-o*f*r-d*s*h+n*f*h+o*s*m-n*c*m)*C,e[4]=S*C,e[5]=(u*g*r-v*f*r+v*s*m-t*g*m-u*s*p+t*f*p)*C,e[6]=(v*c*r-a*g*r-v*s*h+t*g*h+a*s*p-t*c*p)*C,e[7]=(a*f*r-u*c*r+u*s*h-t*f*h-a*s*m+t*c*m)*C,e[8]=b*C,e[9]=(v*d*r-u*_*r-v*n*m+t*_*m+u*n*p-t*d*p)*C,e[10]=(a*_*r-v*o*r+v*n*h-t*_*h-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*d*r-u*n*h+t*d*h+a*n*m-t*o*m)*C,e[12]=R*C,e[13]=(u*_*s-v*d*s+v*n*f-t*_*f-u*n*g+t*d*g)*C,e[14]=(v*o*s-a*_*s-v*n*c+t*_*c+a*n*g-t*o*g)*C,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,d=o+o,f=r*h,m=r*u,v=r*d,_=a*u,g=a*d,p=o*d,T=c*h,S=c*u,b=c*d,R=n.x,L=n.y,C=n.z;return s[0]=(1-(_+p))*R,s[1]=(m+b)*R,s[2]=(v-S)*R,s[3]=0,s[4]=(m-b)*L,s[5]=(1-(f+p))*L,s[6]=(g+T)*L,s[7]=0,s[8]=(v+S)*C,s[9]=(g-T)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);const h=1/r,u=1/a,d=1/o;return rn.elements[0]*=h,rn.elements[1]*=h,rn.elements[2]*=h,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Pn){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,v;if(o===Pn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===dr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pn){const c=this.elements,h=1/(t-e),u=1/(n-s),d=1/(a-r),f=(t+e)*h,m=(n+s)*u;let v,_;if(o===Pn)v=(a+r)*d,_=-2*d;else if(o===dr)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new N,rn=new Ze,Su=new N(0,0,0),Mu=new N(1,1,1),zn=new N,Rs=new N,$t=new N,Jo=new Ze,Ko=new xs;class dn{constructor(e=0,t=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const Qo=new N,xi=new xs,wn=new Ze,Ps=new N,Ki=new N,yu=new N,wu=new xs,el=new N(1,0,0),tl=new N(0,1,0),nl=new N(0,0,1),il={type:"added"},Tu={type:"removed"},Si={type:"childadded",child:null},Nr={type:"childremoved",child:null};class wt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new N,t=new dn,n=new xs,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Be}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return Qo.copy(e).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ki,Ps,this.up):wn.lookAt(Ps,Ki,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(wn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tu),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new N(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new N,Tn=new N,Fr=new N,En=new N,Mi=new N,bi=new N,sl=new N,Or=new N,Br=new N,zr=new N,Hr=new gt,Gr=new gt,Vr=new gt;class ln{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),Tn.subVectors(n,t),Fr.subVectors(e,t);const a=an.dot(an),o=an.dot(Tn),c=an.dot(Fr),h=Tn.dot(Tn),u=Tn.dot(Fr),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(h*c-o*u)*f,v=(a*u-o*c)*f;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hr.setScalar(0),Gr.setScalar(0),Vr.setScalar(0),Hr.fromBufferAttribute(e,t),Gr.fromBufferAttribute(e,n),Vr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Gr,r.y),a.addScaledVector(Vr,r.z),a}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),Tn.subVectors(e,t),an.cross(Tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),an.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,n),bi.subVectors(r,n),Or.subVectors(e,n);const c=Mi.dot(Or),h=bi.dot(Or);if(c<=0&&h<=0)return t.copy(n);Br.subVectors(e,s);const u=Mi.dot(Br),d=bi.dot(Br);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Mi,a);zr.subVectors(e,r);const m=Mi.dot(zr),v=bi.dot(zr);if(v>=0&&m<=v)return t.copy(r);const _=m*h-c*v;if(_<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(bi,o);const g=u*v-m*d;if(g<=0&&d-u>=0&&m-v>=0)return sl.subVectors(r,s),o=(d-u)/(d-u+(m-v)),t.copy(s).addScaledVector(sl,o);const p=1/(g+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Mi,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Wr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class he{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=_o(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wr(a,r,e+1/3),this.g=Wr(a,r,e),this.b=Wr(a,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return je.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Bt(Pt.r*255,0,255))*65536+Math.round(Bt(Pt.g*255,0,255))*256+Math.round(Bt(Pt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=xt){je.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(ks);const n=us(Hn.h,ks.h,t),s=us(Hn.s,ks.s,t),r=us(Hn.l,ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new he;he.NAMES=Wc;let Eu=0;class Gt extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Xi(),this.name="",this.blending=Ui,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ft extends Gt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,Ds=new ke;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ho,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}}class Xc extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Au=0;const Kt=new Ze,Xr=new wt,yi=new N,qt=new hi,Qi=new hi,yt=new N;class Xt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?Yc:Xc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(qt.min,Qi.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Qi.max),qt.expandByPoint(yt)):(qt.expandByPoint(Qi.min),qt.expandByPoint(Qi.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)yt.fromBufferAttribute(o,h),c&&(yi.fromBufferAttribute(e,h),yt.add(yi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new N,c[P]=new N;const h=new N,u=new N,d=new N,f=new ke,m=new ke,v=new ke,_=new N,g=new N;function p(P,y,x){h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,x),u.sub(h),d.sub(h),m.sub(f),v.sub(f);const A=1/(m.x*v.y-v.x*m.y);isFinite(A)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(A),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(A),o[P].add(_),o[y].add(_),o[x].add(_),c[P].add(g),c[y].add(g),c[x].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,y=T.length;P<y;++P){const x=T[P],A=x.start,O=x.count;for(let F=A,Y=A+O;F<Y;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new N,b=new N,R=new N,L=new N;function C(P){R.fromBufferAttribute(s,P),L.copy(R);const y=o[P];S.copy(y),S.sub(R.multiplyScalar(R.dot(y))).normalize(),b.crossVectors(L,y);const A=b.dot(c[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,A)}for(let P=0,y=T.length;P<y;++P){const x=T[P],A=x.start,O=x.count;for(let F=A,Y=A+O;F<Y;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,h=new N,u=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,g),o.add(u),c.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const h=o.array,u=o.itemSize,d=o.normalized,f=new h.constructor(c.length*u);let m=0,v=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let p=0;p<u;p++)f[v++]=h[m++]}return new Et(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){const f=h[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,f=h.length;d<f;d++){const m=h[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],d=r[h];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new Ze,Zn=new xo,Is=new Yi,al=new N,Us=new N,Ns=new N,Fs=new N,Yr=new N,Os=new N,ol=new N,Bs=new N;class Ye extends wt{constructor(e=new Xt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],d=r[c];u!==0&&(Yr.fromBufferAttribute(d,e),a?Os.addScaledVector(Yr,u):Os.addScaledVector(Yr.sub(t),u))}t.add(Os)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(Is.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Is,al)===null||Zn.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(rl.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(rl),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const g=f[v],p=a[g.materialIndex],T=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,R=S;b<R;b+=3){const L=o.getX(b),C=o.getX(b+1),P=o.getX(b+2);s=zs(this,p,e,n,h,u,d,L,C,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=v,p=_;g<p;g+=3){const T=o.getX(g),S=o.getX(g+1),b=o.getX(g+2);s=zs(this,a,e,n,h,u,d,T,S,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const g=f[v],p=a[g.materialIndex],T=Math.max(g.start,m.start),S=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let b=T,R=S;b<R;b+=3){const L=b,C=b+1,P=b+2;s=zs(this,p,e,n,h,u,d,L,C,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let g=v,p=_;g<p;g+=3){const T=g,S=g+1,b=g+2;s=zs(this,a,e,n,h,u,d,T,S,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Cu(i,e,t,n,s,r,a,o){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Dn,o),c===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Bs);return h<t.near||h>t.far?null:{distance:h,point:Bs.clone(),object:i}}function zs(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,Us),i.getVertexPosition(c,Ns),i.getVertexPosition(h,Fs);const u=Cu(i,e,t,n,Us,Ns,Fs,ol);if(u){const d=new N;ln.getBarycoord(ol,Us,Ns,Fs,d),s&&(u.uv=ln.getInterpolatedAttribute(s,o,c,h,d,new ke)),r&&(u.uv1=ln.getInterpolatedAttribute(r,o,c,h,d,new ke)),a&&(u.normal=ln.getInterpolatedAttribute(a,o,c,h,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:h,normal:new N,materialIndex:0};ln.getNormal(Us,Ns,Fs,f.normal),u.face=f,u.barycoord=d}return u}class Dt extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(d,2));function v(_,g,p,T,S,b,R,L,C,P,y){const x=b/C,A=R/P,O=b/2,F=R/2,Y=L/2,Z=C+1,$=P+1;let K=0,G=0;const te=new N;for(let ue=0;ue<$;ue++){const xe=ue*A-F;for(let Ue=0;Ue<Z;Ue++){const Je=Ue*x-O;te[_]=Je*T,te[g]=xe*S,te[p]=Y,h.push(te.x,te.y,te.z),te[_]=0,te[g]=0,te[p]=L>0?1:-1,u.push(te.x,te.y,te.z),d.push(Ue/C),d.push(1-ue/P),K+=1}}for(let ue=0;ue<P;ue++)for(let xe=0;xe<C;xe++){const Ue=f+xe+Z*ue,Je=f+xe+Z*(ue+1),q=f+(xe+1)+Z*(ue+1),ie=f+(xe+1)+Z*ue;c.push(Ue,Je,ie),c.push(Je,q,ie),G+=6}o.addGroup(m,G,y),m+=G,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function Lu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $c(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const _n={clone:Hi,merge:Ft};var Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Gt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new N,ll=new ke,cl=new ke;class en extends qc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,ll,cl),t.subVectors(cl,ll)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ti=1;class ku extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(wi,Ti,e,t);s.layers=this.layers,this.add(s);const r=new en(wi,Ti,e,t);r.layers=this.layers,this.add(r);const a=new en(wi,Ti,e,t);a.layers=this.layers,this.add(a);const o=new en(wi,Ti,e,t);o.layers=this.layers,this.add(o);const c=new en(wi,Ti,e,t);c.layers=this.layers,this.add(c);const h=new en(wi,Ti,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jc extends It{constructor(e,t,n,s,r,a,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Ot});r.uniforms.tEquirect.value=t;const a=new Ye(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=vn),new ku(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const $r=new N,Iu=new N,Uu=new Be;class ti{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$r.subVectors(n,t).cross(Iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uu.getNormalMatrix(e),s=this.coplanarPoint($r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Yi,Hs=new N;class Mo{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],v=s[9],_=s[10],g=s[11],p=s[12],T=s[13],S=s[14],b=s[15];if(n[0].setComponents(c-r,f-h,g-m,b-p).normalize(),n[1].setComponents(c+r,f+h,g+m,b+p).normalize(),n[2].setComponents(c+a,f+u,g+v,b+T).normalize(),n[3].setComponents(c-a,f-u,g-v,b-T).normalize(),n[4].setComponents(c-o,f-d,g-_,b-S).normalize(),t===Pn)n[5].setComponents(c+o,f+d,g+_,b+S).normalize();else if(t===dr)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Hs.x=s.normal.x>0?e.max.x:e.min.x,Hs.y=s.normal.y>0?e.max.y:e.min.y,Hs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nu(i){const e=new WeakMap;function t(o,c){const h=o.array,u=o.usage,d=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,u),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){const u=c.array,d=c.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],_=d[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const _=d[m];i.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}class Ss extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,d=e/o,f=t/c,m=[],v=[],_=[],g=[];for(let p=0;p<u;p++){const T=p*f-a;for(let S=0;S<h;S++){const b=S*d-r;v.push(b,-T,0),_.push(0,0,1),g.push(S/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const S=T+h*p,b=T+h*(p+1),R=T+1+h*(p+1),L=T+1+h*p;m.push(S,b,L),m.push(b,R,L)}this.setIndex(m),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fu=`#ifdef USE_ALPHAHASH
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
#endif`,Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vu=`#ifdef USE_AOMAP
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
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu=`#ifdef USE_BATCHING
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
#endif`,Yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ju=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ad=`#define PI 3.141592653589793
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Ud=`struct PhysicalMaterial {
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
}`,Nd=`
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yd=`#if defined( USE_POINTS_UV )
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
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
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
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bf=`float getShadowMask() {
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
}`,yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
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
}`,Wf=`#if DEPTH_PACKING == 3200
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
}`,Xf=`#define DISTANCE
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
}`,Yf=`#define DISTANCE
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,ep=`#define LAMBERT
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
}`,tp=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,ap=`#define PHONG
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
}`,op=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,hp=`#define TOON
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
}`,up=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Fu,alphahash_pars_fragment:Ou,alphamap_fragment:Bu,alphamap_pars_fragment:zu,alphatest_fragment:Hu,alphatest_pars_fragment:Gu,aomap_fragment:Vu,aomap_pars_fragment:Wu,batching_pars_vertex:Xu,batching_vertex:Yu,begin_vertex:$u,beginnormal_vertex:qu,bsdfs:ju,iridescence_fragment:Zu,bumpmap_pars_fragment:Ju,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:ad,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:vd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Ld,envmap_vertex:xd,fog_vertex:Sd,fog_pars_vertex:Md,fog_fragment:bd,fog_pars_fragment:yd,gradientmap_pars_fragment:wd,lightmap_pars_fragment:Td,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Rd,lights_toon_pars_fragment:Pd,lights_phong_fragment:kd,lights_phong_pars_fragment:Dd,lights_physical_fragment:Id,lights_physical_pars_fragment:Ud,lights_fragment_begin:Nd,lights_fragment_maps:Fd,lights_fragment_end:Od,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Gd,map_fragment:Vd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:Yd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:qd,morphinstance_vertex:jd,morphcolor_vertex:Zd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Kd,morphtarget_vertex:Qd,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:uf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:vf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:Sf,shadowmap_vertex:Mf,shadowmask_pars_fragment:bf,skinbase_vertex:yf,skinning_pars_vertex:wf,skinning_vertex:Tf,skinnormal_vertex:Ef,specularmap_fragment:Af,specularmap_pars_fragment:Cf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Rf,transmission_fragment:Pf,transmission_pars_fragment:kf,uv_pars_fragment:Df,uv_pars_vertex:If,uv_vertex:Uf,worldpos_vertex:Nf,background_vert:Ff,background_frag:Of,backgroundCube_vert:Bf,backgroundCube_frag:zf,cube_vert:Hf,cube_frag:Gf,depth_vert:Vf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:Yf,equirect_vert:$f,equirect_frag:qf,linedashed_vert:jf,linedashed_frag:Zf,meshbasic_vert:Jf,meshbasic_frag:Kf,meshlambert_vert:Qf,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},ce={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},gn={basic:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new he(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new he(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([ce.lights,ce.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gn.physical={uniforms:Ft([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Gs={r:0,b:0,g:0},Kn=new dn,vp=new Ze;function _p(i,e,t,n,s,r,a){const o=new he(0);let c=r===!0?0:1,h,u,d=null,f=0,m=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function _(T){let S=!1;const b=v(T);b===null?p(o,c):b&&b.isColor&&(p(b,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,S){const b=v(S);b&&(b.isCubeTexture||b.mapping===gr)?(u===void 0&&(u=new Ye(new Dt(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Hi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Kn.copy(S.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vp.makeRotationFromEuler(Kn)),u.material.toneMapped=je.getTransfer(b.colorSpace)!==rt,(d!==b||f!==b.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Ye(new Ss(2,2),new St({name:"BackgroundMaterial",uniforms:Hi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=je.getTransfer(b.colorSpace)!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,S){T.getRGB(Gs,$c(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:_,addToRenderList:g}}function xp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(x,A,O,F,Y){let Z=!1;const $=d(F,O,A);r!==$&&(r=$,h(r.object)),Z=m(x,F,O,Y),Z&&v(x,F,O,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(x,A,O,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,A,O){const F=O.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let Z=Y[A.id];Z===void 0&&(Z={},Y[A.id]=Z);let $=Z[F];return $===void 0&&($=f(c()),Z[F]=$),$}function f(x){const A=[],O=[],F=[];for(let Y=0;Y<t;Y++)A[Y]=0,O[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,A,O,F){const Y=r.attributes,Z=A.attributes;let $=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){const ue=Y[G];let xe=Z[G];if(xe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function v(x,A,O,F){const Y={},Z=A.attributes;let $=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){let ue=Z[G];ue===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),Y[G]=xe,$++}r.attributes=Y,r.attributesNum=$,r.index=F}function _(){const x=r.newAttributes;for(let A=0,O=x.length;A<O;A++)x[A]=0}function g(x){p(x,0)}function p(x,A){const O=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;O[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),Y[x]!==A&&(i.vertexAttribDivisor(x,A),Y[x]=A)}function T(){const x=r.newAttributes,A=r.enabledAttributes;for(let O=0,F=A.length;O<F;O++)A[O]!==x[O]&&(i.disableVertexAttribArray(O),A[O]=0)}function S(x,A,O,F,Y,Z,$){$===!0?i.vertexAttribIPointer(x,A,O,Y,Z):i.vertexAttribPointer(x,A,O,F,Y,Z)}function b(x,A,O,F){_();const Y=F.attributes,Z=O.getAttributes(),$=A.defaultAttributeValues;for(const K in Z){const G=Z[K];if(G.location>=0){let te=Y[K];if(te===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const ue=te.normalized,xe=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const Je=Ue.buffer,q=Ue.type,ie=Ue.bytesPerElement,_e=q===i.INT||q===i.UNSIGNED_INT||te.gpuType===uo;if(te.isInterleavedBufferAttribute){const ae=te.data,we=ae.stride,Le=te.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)p(G.location+De,ae.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<G.locationSize;De++)g(G.location+De);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let De=0;De<G.locationSize;De++)S(G.location+De,xe/G.locationSize,q,ue,we*ie,(Le+xe/G.locationSize*De)*ie,_e)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae,te.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<G.locationSize;ae++)g(G.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ae=0;ae<G.locationSize;ae++)S(G.location+ae,xe/G.locationSize,q,ue,xe*ie,xe/G.locationSize*ae*ie,_e)}}else if($!==void 0){const ue=$[K];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(G.location,ue);break;case 3:i.vertexAttrib3fv(G.location,ue);break;case 4:i.vertexAttrib4fv(G.location,ue);break;default:i.vertexAttrib1fv(G.location,ue)}}}}T()}function R(){P();for(const x in n){const A=n[x];for(const O in A){const F=A[O];for(const Y in F)u(F[Y].object),delete F[Y];delete A[O]}delete n[x]}}function L(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const O in A){const F=A[O];for(const Y in F)u(F[Y].object),delete F[Y];delete A[O]}delete n[x.id]}function C(x){for(const A in n){const O=n[A];if(O[x.id]===void 0)continue;const F=O[x.id];for(const Y in F)u(F[Y].object),delete F[Y];delete O[x.id]}}function P(){y(),a=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:T}}function Sp(i,e,t){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),t.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),t.update(u,n,d))}function o(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function c(h,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h.length;v++)a(h[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Mp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==In&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:R,maxSamples:L}}function bp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ti,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):h();else{const T=r?0:n,S=T*4;let b=p.clippingState||null;c.value=b,b=u(v,f,S,m);for(let R=0;R!==S;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,v!==!0||g===null){const p=m+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,b=m;S!==_;++S,b+=4)a.copy(d[S]).applyMatrix4(T,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function yp(i){let e=new WeakMap;function t(a,o){return o===Aa?a.mapping=Bi:o===Ca&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===Ca)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Du(c.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Sr extends qc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pi=4,hl=[.125,.215,.35,.446,.526,.582],ii=20,qr=new Sr,ul=new he;let jr=null,Zr=0,Jr=0,Kr=!1;const ni=(1+Math.sqrt(5))/2,Ei=1/ni,dl=[new N(-ni,Ei,0),new N(ni,Ei,0),new N(-Ei,0,ni),new N(Ei,0,ni),new N(0,ni,-Ei),new N(0,ni,Ei),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){jr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jr,Zr,Jr),this._renderer.xr.enabled=Kr,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:un,format:hn,colorSpace:Vi,depthBuffer:!1},s=pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(r)),this._blurMaterial=Tp(r,e,t)}return s}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,s){const o=new en(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ul),u.toneMapping=Yn,u.autoClear=!1;const m=new ft({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),v=new Ye(new Dt,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(ul),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):T===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const S=this._cubeSize;Vs(s,T*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bi||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Vs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dl[(s-r-1)%dl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ye(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ii-1),_=r/v,g=isFinite(r)?1+Math.floor(u*_):ii;g>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ii}`);const p=[];let T=0;for(let C=0;C<ii;++C){const P=C/_,y=Math.exp(-P*P/2);p.push(y),C===0?T+=y:C<g&&(T+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const b=this._sizeLods[s],R=3*b*(s>S-Pi?s-S+Pi:0),L=4*(this._cubeSize-b);Vs(t,R,L,3*b,2*b),c.setRenderTarget(t),c.render(d,qr)}}function wp(i){const e=[],t=[],n=[];let s=i;const r=i-Pi+1+hl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Pi?c=hl[a-i+Pi-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,_=3,g=2,p=1,T=new Float32Array(_*v*m),S=new Float32Array(g*v*m),b=new Float32Array(p*v*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,P=L>2?0:-1,y=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];T.set(y,_*v*L),S.set(f,g*v*L);const x=[L,L,L,L,L,L];b.set(x,p*v*L)}const R=new Xt;R.setAttribute("position",new Et(T,_)),R.setAttribute("uv",new Et(S,g)),R.setAttribute("faceIndex",new Et(b,p)),e.push(R),s>Pi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pl(i,e,t){const n=new Zt(i,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tp(i,e,t){const n=new Float32Array(ii),s=new N(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function ml(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function gl(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ot,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function Ep(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Aa||c===Ca,u=c===Bi||c===zi;if(h||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new fl(i)),d=h?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return h&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new fl(i)),d=h?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ap(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cp(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const _=m[v];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function h(d){const f=[],m=d.index,v=d.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let S=0,b=T.length;S<b;S+=3){const R=T[S+0],L=T[S+1],C=T[S+2];f.push(R,L,L,C,C,R)}}else if(v!==void 0){const T=v.array;_=v.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const R=S+0,L=S+1,C=S+2;f.push(R,L,L,C,C,R)}}else return;const g=new(Hc(f)?Yc:Xc)(f,1);g.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Lp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function h(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,f*a,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,v);let g=0;for(let p=0;p<v;p++)g+=m[p];t.update(g,n,1)}function d(f,m,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)h(f[p]/a,m[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,v);let p=0;for(let T=0;T<v;T++)p+=m[T]*_[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Rp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,e,t){const n=new WeakMap,s=new gt;function r(a,o,c){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let R=o.attributes.position.count*b,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*L*4*d),P=new Vc(C,R,L,d);P.type=cn,P.needsUpdate=!0;const y=b*4;for(let A=0;A<d;A++){const O=p[A],F=T[A],Y=S[A],Z=R*L*4*A;for(let $=0;$<O.count;$++){const K=$*y;v===!0&&(s.fromBufferAttribute(O,$),C[Z+K+0]=s.x,C[Z+K+1]=s.y,C[Z+K+2]=s.z,C[Z+K+3]=0),_===!0&&(s.fromBufferAttribute(F,$),C[Z+K+4]=s.x,C[Z+K+5]=s.y,C[Z+K+6]=s.z,C[Z+K+7]=0),g===!0&&(s.fromBufferAttribute(Y,$),C[Z+K+8]=s.x,C[Z+K+9]=s.y,C[Z+K+10]=s.z,C[Z+K+11]=Y.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new ke(R,L)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<h.length;g++)v+=h[g];const _=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function kp(i,e,t,n){let s=new WeakMap;function r(c){const h=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class yo extends It{constructor(e,t,n,s,r,a,o,c,h,u=Ni){if(u!==Ni&&u!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=oi),n===void 0&&u===ci&&(n=li),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:et,this.minFilter=c!==void 0?c:et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jc=new It,vl=new yo(1,1),Kc=new Vc,Qc=new _u,eh=new jc,_l=[],xl=[],Sl=new Float32Array(16),Ml=new Float32Array(9),bl=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mr(i,e){let t=xl[e];t===void 0&&(t=new Int32Array(e),xl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;bl.set(n),i.uniformMatrix2fv(this.addr,!1,bl),bt(t,n)}}function Op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),bt(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),bt(t,n)}}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vl.compareFunction=zc,r=vl):r=Jc,t.setTexture2D(e||r,s)}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qc,s)}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eh,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kc,s)}function Kp(i){switch(i){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return Yp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function Qp(i,e){i.uniform1fv(this.addr,e)}function em(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function tm(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function nm(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function im(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sm(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rm(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function am(i,e){i.uniform1iv(this.addr,e)}function om(i,e){i.uniform2iv(this.addr,e)}function lm(i,e){i.uniform3iv(this.addr,e)}function cm(i,e){i.uniform4iv(this.addr,e)}function hm(i,e){i.uniform1uiv(this.addr,e)}function um(i,e){i.uniform2uiv(this.addr,e)}function dm(i,e){i.uniform3uiv(this.addr,e)}function fm(i,e){i.uniform4uiv(this.addr,e)}function pm(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Jc,r[a])}function mm(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qc,r[a])}function gm(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||eh,r[a])}function vm(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kc,r[a])}function _m(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}}class Mm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function yl(i,e){i.seq.push(e),i.map[e.id]=e}function bm(i,e,t){const n=i.name,s=n.length;for(Qr.lastIndex=0;;){const r=Qr.exec(n),a=Qr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){yl(t,h===void 0?new xm(o,i,e):new Sm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Mm(o),yl(t,d)),t=d}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);bm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function wl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ym=37297;let wm=0;function Tm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tl=new Be;function Em(i){je._getMatrix(Tl,je.workingColorSpace,i);const e=`mat3( ${Tl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case xr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function El(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tm(i.getShaderSource(e),a)}else return s}function Am(i,e){const t=Em(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cm(i,e){let t;switch(e){case Tc:t="Linear";break;case Ec:t="Reinhard";break;case Ac:t="Cineon";break;case ho:t="ACESFilmic";break;case Cc:t="AgX";break;case Lc:t="Neutral";break;case Nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new N;function Lm(){je.getLuminanceCoefficients(Ws);const i=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Pm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function km(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ls(i){return i!==""}function Al(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(i){return i.replace(Dm,Um)}const Im=new Map;function Um(i,e){let t=ze[e];if(t===void 0){const n=Im.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return no(t)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(i){return i.replace(Nm,Fm)}function Fm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Om(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:e="ENVMAP_TYPE_CUBE";break;case gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Hm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case co:e="ENVMAP_BLENDING_MULTIPLY";break;case Ih:e="ENVMAP_BLENDING_MIX";break;case Uh:e="ENVMAP_BLENDING_ADD";break}return e}function Gm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Om(t),h=Bm(t),u=zm(t),d=Hm(t),f=Gm(t),m=Rm(t),v=Pm(r),_=s.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(g=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Am("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=no(a),a=Al(a,t),a=Cl(a,t),o=no(o),o=Al(o,t),o=Cl(o,t),a=Ll(a),o=Ll(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+g+a,b=T+p+o,R=wl(s,s.VERTEX_SHADER,S),L=wl(s,s.FRAGMENT_SHADER,b);s.attachShader(_,R),s.attachShader(_,L),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(A){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(L).trim();let Z=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,L);else{const K=El(s,R,"vertex"),G=El(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+K+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||Y==="")&&($=!1);$&&(A.diagnostics={runnable:Z,programLog:O,vertexShader:{log:F,prefix:g},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(R),s.deleteShader(L),P=new cr(s,_),y=km(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,ym)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=L,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ym(e),t.set(e,n)),n}}class Ym{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function $m(i,e,t,n,s,r,a){const o=new So,c=new Xm,h=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return h.add(y),y===0?"uv":`uv${y}`}function g(y,x,A,O,F){const Y=O.fog,Z=F.geometry,$=y.isMeshStandardMaterial?O.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),G=K&&K.mapping===gr?K.image.height:null,te=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=ue!==void 0?ue.length:0;let Ue=0;Z.morphAttributes.position!==void 0&&(Ue=1),Z.morphAttributes.normal!==void 0&&(Ue=2),Z.morphAttributes.color!==void 0&&(Ue=3);let Je,q,ie,_e;if(te){const st=gn[te];Je=st.vertexShader,q=st.fragmentShader}else Je=y.vertexShader,q=y.fragmentShader,c.update(y),ie=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);const ae=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,lt=!!y.map,We=!!y.matcap,ht=!!K,D=!!y.aoMap,Ct=!!y.lightMap,Ge=!!y.bumpMap,Ve=!!y.normalMap,Ce=!!y.displacementMap,it=!!y.emissiveMap,Ae=!!y.metalnessMap,E=!!y.roughnessMap,M=y.anisotropy>0,B=y.clearcoat>0,J=y.dispersion>0,ee=y.iridescence>0,j=y.sheen>0,Se=y.transmission>0,le=M&&!!y.anisotropyMap,de=B&&!!y.clearcoatMap,He=B&&!!y.clearcoatNormalMap,ne=B&&!!y.clearcoatRoughnessMap,ge=ee&&!!y.iridescenceMap,Re=ee&&!!y.iridescenceThicknessMap,Pe=j&&!!y.sheenColorMap,ve=j&&!!y.sheenRoughnessMap,$e=!!y.specularMap,Ie=!!y.specularColorMap,Ke=!!y.specularIntensityMap,k=Se&&!!y.transmissionMap,oe=Se&&!!y.thicknessMap,V=!!y.gradientMap,Q=!!y.alphaMap,me=y.alphaTest>0,fe=!!y.alphaHash,Fe=!!y.extensions;let pt=Yn;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Lt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:q,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Vi,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:We,envMap:ht,envMapMode:ht&&K.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Ct,bumpMap:Ge,normalMap:Ve,displacementMap:f&&Ce,emissiveMap:it,normalMapObjectSpace:Ve&&y.normalMapType===zh,normalMapTangentSpace:Ve&&y.normalMapType===_r,metalnessMap:Ae,roughnessMap:E,anisotropy:M,anisotropyMap:le,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:He,clearcoatRoughnessMap:ne,dispersion:J,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:j,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:$e,specularColorMap:Ie,specularIntensityMap:Ke,transmission:Se,transmissionMap:k,thicknessMap:oe,gradientMap:V,opaque:y.transparent===!1&&y.blending===Ui&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:fe,combine:y.combine,mapUv:lt&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:Ct&&_(y.lightMap.channel),bumpMapUv:Ge&&_(y.bumpMap.channel),normalMapUv:Ve&&_(y.normalMap.channel),displacementMapUv:Ce&&_(y.displacementMap.channel),emissiveMapUv:it&&_(y.emissiveMap.channel),metalnessMapUv:Ae&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:le&&_(y.anisotropyMap.channel),clearcoatMapUv:de&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(y.sheenRoughnessMap.channel),specularMapUv:$e&&_(y.specularMap.channel),specularColorMapUv:Ie&&_(y.specularColorMap.channel),specularIntensityMapUv:Ke&&_(y.specularIntensityMap.channel),transmissionMapUv:k&&_(y.transmissionMap.channel),thicknessMapUv:oe&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ve||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(lt||Q),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tt,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=h.has(1),Lt.vertexUv2s=h.has(2),Lt.vertexUv3s=h.has(3),h.clear(),Lt}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)x.push(A),x.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(T(x,y),S(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function T(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const x=v[y.type];let A;if(x){const O=gn[x];A=_n.clone(O.uniforms)}else A=y.uniforms;return A}function R(y,x){let A;for(let O=0,F=u.length;O<F;O++){const Y=u[O];if(Y.cacheKey===x){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new Vm(i,x,y,r),u.push(A)),A}function L(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function C(y){c.remove(y)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:L,releaseShaderCache:C,programs:u,dispose:P}}function qm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,v,_,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:_,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=g),e++,p}function o(d,f,m,v,_,g){const p=a(d,f,m,v,_,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(d,f,m,v,_,g){const p=a(d,f,m,v,_,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function h(d,f){t.length>1&&t.sort(d||jm),n.length>1&&n.sort(f||Pl),s.length>1&&s.sort(f||Pl)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function Zm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new kl,i.set(n,[a])):s>=r.length?(a=new kl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new he};break;case"SpotLight":t={position:new N,direction:new N,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qm=0;function eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tg(i){const e=new Jm,t=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);const s=new N,r=new Ze,a=new Ze;function o(h){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,_=0,g=0,p=0,T=0,S=0,b=0,R=0,L=0,C=0;h.sort(eg);for(let y=0,x=h.length;y<x;y++){const A=h[y],O=A.color,F=A.intensity,Y=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=O.r*F,d+=O.g*F,f+=O.b*F;else if(A.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(A.sh.coefficients[$],F);C++}else if(A.isDirectionalLight){const $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const K=A.shadow,G=t.get(A);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=A.shadow.matrix,T++}n.directional[m]=$,m++}else if(A.isSpotLight){const $=e.get(A);$.position.setFromMatrixPosition(A.matrixWorld),$.color.copy(O).multiplyScalar(F),$.distance=Y,$.coneCos=Math.cos(A.angle),$.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),$.decay=A.decay,n.spot[_]=$;const K=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,K.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[_]=K.matrix,A.castShadow){const G=t.get(A);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Z,b++}_++}else if(A.isRectAreaLight){const $=e.get(A);$.color.copy(O).multiplyScalar(F),$.halfWidth.set(A.width*.5,0,0),$.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=$,g++}else if(A.isPointLight){const $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),$.distance=A.distance,$.decay=A.decay,A.castShadow){const K=A.shadow,G=t.get(A);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=A.shadow.matrix,S++}n.point[v]=$,v++}else if(A.isHemisphereLight){const $=e.get(A);$.skyColor.copy(A.color).multiplyScalar(F),$.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=$,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==b||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+R-L,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,P.directionalLength=m,P.pointLength=v,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=b,P.numSpotMaps=R,P.numLightProbes=C,n.version=Qm++)}function c(h,u){let d=0,f=0,m=0,v=0,_=0;const g=u.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){const S=h[p];if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(S.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function Dl(i){const e=new tg(i),t=[],n=[];function s(u){h.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ng(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Dl(i),e.set(s,[o])):r>=a.length?(o=new Dl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class ig extends Gt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sg extends Gt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(i,e,t){let n=new Mo;const s=new ke,r=new ke,a=new gt,o=new ig({depthPacking:Bh}),c=new sg,h={},u=t.maxTextureSize,d={[Dn]:Wt,[Wt]:Dn,[Tt]:Tt},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let p=this.type;this.render=function(L,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ot),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==An&&this.type===An,Y=p===An&&this.type!==An;for(let Z=0,$=L.length;Z<$;Z++){const K=L[Z],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const te=G.getFrameExtents();if(s.multiply(te),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,G.mapSize.y=r.y)),G.map===null||F===!0||Y===!0){const xe=this.type!==An?{minFilter:et,magFilter:et}:{};G.map!==null&&G.map.dispose(),G.map=new Zt(s.x,s.y,xe),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ue=G.getViewportCount();for(let xe=0;xe<ue;xe++){const Ue=G.getViewport(xe);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),O.viewport(a),G.updateMatrices(K,xe),n=G.getFrustum(),b(C,P,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===An&&T(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,x,A)};function T(L,C){const P=e.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zt(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,_,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,P,m,_,null)}function S(L,C,P,y){let x=null;const A=P.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)x=A;else if(x=P.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=x.uuid,F=C.uuid;let Y=h[O];Y===void 0&&(Y={},h[O]=Y);let Z=Y[F];Z===void 0&&(Z=x.clone(),Y[F]=Z,C.addEventListener("dispose",R)),x=Z}if(x.visible=C.visible,x.wireframe=C.wireframe,y===An?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=P}return x}function b(L,C,P,y,x){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===An)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,L.matrixWorld);const F=e.update(L),Y=L.material;if(Array.isArray(Y)){const Z=F.groups;for(let $=0,K=Z.length;$<K;$++){const G=Z[$],te=Y[G.materialIndex];if(te&&te.visible){const ue=S(L,te,y,x);L.onBeforeShadow(i,L,C,P,F,ue,G),i.renderBufferDirect(P,null,F,ue,L,G),L.onAfterShadow(i,L,C,P,F,ue,G)}}}else if(Y.visible){const Z=S(L,Y,y,x);L.onBeforeShadow(i,L,C,P,F,Z,null),i.renderBufferDirect(P,null,F,Z,L,null),L.onAfterShadow(i,L,C,P,F,Z,null)}}const O=L.children;for(let F=0,Y=O.length;F<Y;F++)b(O[F],C,P,y,x)}function R(L){L.target.removeEventListener("dispose",R);for(const P in h){const y=h[P],x=L.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const lg={[Sa]:Ma,[ba]:Ta,[ya]:Ea,[Oi]:wa,[Ma]:Sa,[Ta]:ba,[Ea]:ya,[wa]:Oi};function cg(i,e){function t(){let k=!1;const oe=new gt;let V=null;const Q=new gt(0,0,0,0);return{setMask:function(me){V!==me&&!k&&(i.colorMask(me,me,me,me),V=me)},setLocked:function(me){k=me},setClear:function(me,fe,Fe,pt,Lt){Lt===!0&&(me*=pt,fe*=pt,Fe*=pt),oe.set(me,fe,Fe,pt),Q.equals(oe)===!1&&(i.clearColor(me,fe,Fe,pt),Q.copy(oe))},reset:function(){k=!1,V=null,Q.set(-1,0,0,0)}}}function n(){let k=!1,oe=!1,V=null,Q=null,me=null;return{setReversed:function(fe){if(oe!==fe){const Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const pt=me;me=null,this.setClear(pt)}oe=fe},getReversed:function(){return oe},setTest:function(fe){fe?ae(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(fe){V!==fe&&!k&&(i.depthMask(fe),V=fe)},setFunc:function(fe){if(oe&&(fe=lg[fe]),Q!==fe){switch(fe){case Sa:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=fe}},setLocked:function(fe){k=fe},setClear:function(fe){me!==fe&&(oe&&(fe=1-fe),i.clearDepth(fe),me=fe)},reset:function(){k=!1,V=null,Q=null,me=null,oe=!1}}}function s(){let k=!1,oe=null,V=null,Q=null,me=null,fe=null,Fe=null,pt=null,Lt=null;return{setTest:function(st){k||(st?ae(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(st){oe!==st&&!k&&(i.stencilMask(st),oe=st)},setFunc:function(st,tn,Sn){(V!==st||Q!==tn||me!==Sn)&&(i.stencilFunc(st,tn,Sn),V=st,Q=tn,me=Sn)},setOp:function(st,tn,Sn){(fe!==st||Fe!==tn||pt!==Sn)&&(i.stencilOp(st,tn,Sn),fe=st,Fe=tn,pt=Sn)},setLocked:function(st){k=st},setClear:function(st){Lt!==st&&(i.clearStencil(st),Lt=st)},reset:function(){k=!1,oe=null,V=null,Q=null,me=null,fe=null,Fe=null,pt=null,Lt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,h=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,_=!1,g=null,p=null,T=null,S=null,b=null,R=null,L=null,C=new he(0,0,0),P=0,y=!1,x=null,A=null,O=null,F=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=K>=2);let te=null,ue={};const xe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Je=new gt().fromArray(xe),q=new gt().fromArray(Ue);function ie(k,oe,V,Q){const me=new Uint8Array(4),fe=i.createTexture();i.bindTexture(k,fe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<V;Fe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(oe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return fe}const _e={};_e[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Oi),Ge(!1),Ve(Fo),ae(i.CULL_FACE),D(Ot);function ae(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function we(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Le(k,oe){return d[k]!==oe?(i.bindFramebuffer(k,oe),d[k]=oe,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function De(k,oe){let V=m,Q=!1;if(k){V=f.get(oe),V===void 0&&(V=[],f.set(oe,V));const me=k.textures;if(V.length!==me.length||V[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Fe=me.length;fe<Fe;fe++)V[fe]=i.COLOR_ATTACHMENT0+fe;V.length=me.length,Q=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Q=!0);Q&&i.drawBuffers(V)}function lt(k){return v!==k?(i.useProgram(k),v=k,!0):!1}const We={[Ln]:i.FUNC_ADD,[Sh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};We[bh]=i.MIN,We[yh]=i.MAX;const ht={[va]:i.ZERO,[wh]:i.ONE,[Th]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[wc]:i.DST_COLOR,[yc]:i.DST_ALPHA,[Eh]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[Ch]:i.ONE_MINUS_DST_COLOR,[Ah]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ph]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Dh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,oe,V,Q,me,fe,Fe,pt,Lt,st){if(k===Ot){_===!0&&(we(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),k!==bc){if(k!==g||st!==y){if((p!==Ln||b!==Ln)&&(i.blendEquation(i.FUNC_ADD),p=Ln,b=Ln),st)switch(k){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.ONE,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,S=null,R=null,L=null,C.set(0,0,0),P=0,g=k,y=st}return}me=me||oe,fe=fe||V,Fe=Fe||Q,(oe!==p||me!==b)&&(i.blendEquationSeparate(We[oe],We[me]),p=oe,b=me),(V!==T||Q!==S||fe!==R||Fe!==L)&&(i.blendFuncSeparate(ht[V],ht[Q],ht[fe],ht[Fe]),T=V,S=Q,R=fe,L=Fe),(pt.equals(C)===!1||Lt!==P)&&(i.blendColor(pt.r,pt.g,pt.b,Lt),C.copy(pt),P=Lt),g=k,y=!1}function Ct(k,oe){k.side===Tt?we(i.CULL_FACE):ae(i.CULL_FACE);let V=k.side===Wt;oe&&(V=!V),Ge(V),k.blending===Ui&&k.transparent===!1?D(Ot):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),it(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(k){x!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),x=k)}function Ve(k){k!==_h?(ae(i.CULL_FACE),k!==A&&(k===Fo?i.cullFace(i.BACK):k===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),A=k}function Ce(k){k!==O&&($&&i.lineWidth(k),O=k)}function it(k,oe,V){k?(ae(i.POLYGON_OFFSET_FILL),(F!==oe||Y!==V)&&(i.polygonOffset(oe,V),F=oe,Y=V)):we(i.POLYGON_OFFSET_FILL)}function Ae(k){k?ae(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function E(k){k===void 0&&(k=i.TEXTURE0+Z-1),te!==k&&(i.activeTexture(k),te=k)}function M(k,oe,V){V===void 0&&(te===null?V=i.TEXTURE0+Z-1:V=te);let Q=ue[V];Q===void 0&&(Q={type:void 0,texture:void 0},ue[V]=Q),(Q.type!==k||Q.texture!==oe)&&(te!==V&&(i.activeTexture(V),te=V),i.bindTexture(k,oe||_e[k]),Q.type=k,Q.texture=oe)}function B(){const k=ue[te];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){Je.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Je.copy(k))}function ve(k){q.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function $e(k,oe){let V=h.get(oe);V===void 0&&(V=new WeakMap,h.set(oe,V));let Q=V.get(k);Q===void 0&&(Q=i.getUniformBlockIndex(oe,k.name),V.set(k,Q))}function Ie(k,oe){const Q=h.get(oe).get(k);c.get(oe)!==Q&&(i.uniformBlockBinding(oe,Q,k.__bindingPointIndex),c.set(oe,Q))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},te=null,ue={},d={},f=new WeakMap,m=[],v=null,_=!1,g=null,p=null,T=null,S=null,b=null,R=null,L=null,C=new he(0,0,0),P=0,y=!1,x=null,A=null,O=null,F=null,Y=null,Je.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:we,bindFramebuffer:Le,drawBuffers:De,useProgram:lt,setBlending:D,setMaterial:Ct,setFlipSided:Ge,setCullFace:Ve,setLineWidth:Ce,setPolygonOffset:it,setScissorTest:Ae,activeTexture:E,bindTexture:M,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Re,updateUBOMapping:$e,uniformBlockBinding:Ie,texStorage2D:He,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Pe,viewport:ve,reset:Ke}}function Il(i,e,t,n){const s=hg(n);switch(t){case Ic:return i*e;case Nc:return i*e;case Fc:return i*e*2;case vr:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case Oc:return i*e*2/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case Uc:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case vo:return i*e*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(e,8)/4;case Ra:case ka:return Math.max(i,8)*Math.max(e,8)/2;case Ia:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lr:case Ja:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bc:case Qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hg(i){switch(i){case In:case Pc:return{byteLength:1,components:1};case gs:case kc:case un:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case oi:case uo:case cn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ug(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,M){return m?new OffscreenCanvas(E,M):_s("canvas")}function _(E,M,B){let J=1;const ee=Ae(E);if((ee.width>B||ee.height>B)&&(J=B/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(J*ee.width),Se=Math.floor(J*ee.height);d===void 0&&(d=v(j,Se));const le=M?v(j,Se):d;return le.width=j,le.height=Se,le.getContext("2d").drawImage(E,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Se+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,M,B,J,ee=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=M;if(M===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),M===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Se=ee?xr:je.getTransfer(J);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Se===rt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(E,M){let B;return E?M===null||M===oi||M===li?B=i.DEPTH24_STENCIL8:M===cn?B=i.DEPTH32F_STENCIL8:M===gs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===oi||M===li?B=i.DEPTH_COMPONENT24:M===cn?B=i.DEPTH_COMPONENT32F:M===gs&&(B=i.DEPTH_COMPONENT16),B}function R(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==et&&E.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){const M=E.target;M.removeEventListener("dispose",L),P(M),M.isVideoTexture&&u.delete(M)}function C(E){const M=E.target;M.removeEventListener("dispose",C),x(M)}function P(E){const M=n.get(E);if(M.__webglInit===void 0)return;const B=E.source,J=f.get(B);if(J){const ee=J[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(E),Object.keys(J).length===0&&f.delete(B)}n.remove(E)}function y(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const B=E.source,J=f.get(B);delete J[M.__cacheKey],a.memory.textures--}function x(E){const M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ee=0;ee<M.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=E.textures;for(let J=0,ee=B.length;J<ee;J++){const j=n.get(B[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[J])}n.remove(E)}let A=0;function O(){A=0}function F(){const E=A;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),A+=1,E}function Y(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Z(E,M){const B=n.get(E);if(E.isVideoTexture&&Ce(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,E,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function $(E,M){const B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function K(E,M){const B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function G(E,M){const B=n.get(E);if(E.version>0&&B.__version!==E.version){ie(B,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const te={[ai]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},ue={[et]:i.NEAREST,[Fh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},xe={[Hh]:i.NEVER,[$h]:i.ALWAYS,[Gh]:i.LESS,[zc]:i.LEQUAL,[Vh]:i.EQUAL,[Yh]:i.GEQUAL,[Wh]:i.GREATER,[Xh]:i.NOTEQUAL};function Ue(E,M){if(M.type===cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===vn||M.magFilter===Ar||M.magFilter===ws||M.magFilter===ri||M.minFilter===vn||M.minFilter===Ar||M.minFilter===ws||M.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,te[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,te[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,te[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ue[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===et||M.minFilter!==ws&&M.minFilter!==ri||M.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Je(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",L));const J=M.source;let ee=f.get(J);ee===void 0&&(ee={},f.set(J,ee));const j=Y(M);if(j!==E.__cacheKey){ee[j]===void 0&&(ee[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[j].usedTimes++;const Se=ee[E.__cacheKey];Se!==void 0&&(ee[E.__cacheKey].usedTimes--,Se.usedTimes===0&&y(M)),E.__cacheKey=j,E.__webglTexture=ee[j].texture}return B}function q(E,M,B){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const ee=Je(E,M),j=M.source;t.bindTexture(J,E.__webglTexture,i.TEXTURE0+B);const Se=n.get(j);if(j.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const le=je.getPrimaries(je.workingColorSpace),de=M.colorSpace===Xn?null:je.getPrimaries(M.colorSpace),He=M.colorSpace===Xn||le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ne=_(M.image,!1,s.maxTextureSize);ne=it(M,ne);const ge=r.convert(M.format,M.colorSpace),Re=r.convert(M.type);let Pe=S(M.internalFormat,ge,Re,M.colorSpace,M.isVideoTexture);Ue(J,M);let ve;const $e=M.mipmaps,Ie=M.isVideoTexture!==!0,Ke=Se.__version===void 0||ee===!0,k=j.dataReady,oe=R(M,ne);if(M.isDepthTexture)Pe=b(M.format===ci,M.type),Ke&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ge,Re,null));else if(M.isDataTexture)if($e.length>0){Ie&&Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,$e[0].width,$e[0].height);for(let V=0,Q=$e.length;V<Q;V++)ve=$e[V],Ie?k&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,Re,ve.data):t.texImage2D(i.TEXTURE_2D,V,Pe,ve.width,ve.height,0,ge,Re,ve.data);M.generateMipmaps=!1}else Ie?(Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,ne.width,ne.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Re,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ge,Re,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,$e[0].width,$e[0].height,ne.depth);for(let V=0,Q=$e.length;V<Q;V++)if(ve=$e[V],M.format!==hn)if(ge!==null)if(Ie){if(k)if(M.layerUpdates.size>0){const me=Il(ve.width,ve.height,M.format,M.type);for(const fe of M.layerUpdates){const Fe=ve.data.subarray(fe*me/ve.data.BYTES_PER_ELEMENT,(fe+1)*me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,fe,ve.width,ve.height,1,ge,Fe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ne.depth,ge,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Pe,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ne.depth,ge,Re,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Pe,ve.width,ve.height,ne.depth,0,ge,Re,ve.data)}else{Ie&&Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,$e[0].width,$e[0].height);for(let V=0,Q=$e.length;V<Q;V++)ve=$e[V],M.format!==hn?ge!==null?Ie?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?k&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,Re,ve.data):t.texImage2D(i.TEXTURE_2D,V,Pe,ve.width,ve.height,0,ge,Re,ve.data)}else if(M.isDataArrayTexture)if(Ie){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,ne.width,ne.height,ne.depth),k)if(M.layerUpdates.size>0){const V=Il(ne.width,ne.height,M.format,M.type);for(const Q of M.layerUpdates){const me=ne.data.subarray(Q*V/ne.data.BYTES_PER_ELEMENT,(Q+1)*V/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ge,Re,me)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(M.isData3DTexture)Ie?(Ke&&t.texStorage3D(i.TEXTURE_3D,oe,Pe,ne.width,ne.height,ne.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(M.isFramebufferTexture){if(Ke)if(Ie)t.texStorage2D(i.TEXTURE_2D,oe,Pe,ne.width,ne.height);else{let V=ne.width,Q=ne.height;for(let me=0;me<oe;me++)t.texImage2D(i.TEXTURE_2D,me,Pe,V,Q,0,ge,Re,null),V>>=1,Q>>=1}}else if($e.length>0){if(Ie&&Ke){const V=Ae($e[0]);t.texStorage2D(i.TEXTURE_2D,oe,Pe,V.width,V.height)}for(let V=0,Q=$e.length;V<Q;V++)ve=$e[V],Ie?k&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ge,Re,ve):t.texImage2D(i.TEXTURE_2D,V,Pe,ge,Re,ve);M.generateMipmaps=!1}else if(Ie){if(Ke){const V=Ae(ne);t.texStorage2D(i.TEXTURE_2D,oe,Pe,V.width,V.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ge,Re,ne);g(M)&&p(J),Se.__version=j.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ie(E,M,B){if(M.image.length!==6)return;const J=Je(E,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const j=n.get(ee);if(ee.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+B);const Se=je.getPrimaries(je.workingColorSpace),le=M.colorSpace===Xn?null:je.getPrimaries(M.colorSpace),de=M.colorSpace===Xn||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!He&&!ne?ge[Q]=_(M.image[Q],!0,s.maxCubemapSize):ge[Q]=ne?M.image[Q].image:M.image[Q],ge[Q]=it(M,ge[Q]);const Re=ge[0],Pe=r.convert(M.format,M.colorSpace),ve=r.convert(M.type),$e=S(M.internalFormat,Pe,ve,M.colorSpace),Ie=M.isVideoTexture!==!0,Ke=j.__version===void 0||J===!0,k=ee.dataReady;let oe=R(M,Re);Ue(i.TEXTURE_CUBE_MAP,M);let V;if(He){Ie&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,$e,Re.width,Re.height);for(let Q=0;Q<6;Q++){V=ge[Q].mipmaps;for(let me=0;me<V.length;me++){const fe=V[me];M.format!==hn?Pe!==null?Ie?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Pe,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,$e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Pe,ve,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,$e,fe.width,fe.height,0,Pe,ve,fe.data)}}}else{if(V=M.mipmaps,Ie&&Ke){V.length>0&&oe++;const Q=Ae(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Pe,ve,ge[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,ge[Q].width,ge[Q].height,0,Pe,ve,ge[Q].data);for(let me=0;me<V.length;me++){const Fe=V[me].image[Q].image;Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Fe.width,Fe.height,Pe,ve,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,$e,Fe.width,Fe.height,0,Pe,ve,Fe.data)}}else{Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,ve,ge[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Pe,ve,ge[Q]);for(let me=0;me<V.length;me++){const fe=V[me];Ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Pe,ve,fe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,$e,Pe,ve,fe.image[Q])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=ee.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function _e(E,M,B,J,ee,j){const Se=r.convert(B.format,B.colorSpace),le=r.convert(B.type),de=S(B.internalFormat,Se,le,B.colorSpace),He=n.get(M),ne=n.get(B);if(ne.__renderTarget=M,!He.__hasExternalTextures){const ge=Math.max(1,M.width>>j),Re=Math.max(1,M.height>>j);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,de,ge,Re,M.depth,0,Se,le,null):t.texImage2D(ee,j,de,ge,Re,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ee,ne.__webglTexture,0,Ge(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ee,ne.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(E,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){const J=M.depthTexture,ee=J&&J.isDepthTexture?J.type:null,j=b(M.stencilBuffer,ee),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Ge(M);Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,j,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,E)}else{const J=M.textures;for(let ee=0;ee<J.length;ee++){const j=J[ee],Se=r.convert(j.format,j.colorSpace),le=r.convert(j.type),de=S(j.internalFormat,Se,le,j.colorSpace),He=Ge(M);B&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,de,M.width,M.height):Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,de,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,de,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const ee=J.__webglTexture,j=Ge(M);if(M.depthTexture.format===Ni)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ci)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(E){const M=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=J}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,E)}else if(B){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),ae(M.__webglDepthbuffer[J],E,!1);else{const ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ae(M.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,M,B){const J=n.get(E);M!==void 0&&_e(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Le(E)}function lt(E){const M=E.texture,B=n.get(E),J=n.get(M);E.addEventListener("dispose",C);const ee=E.textures,j=E.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let de=0;de<M.mipmaps.length;de++)B.__webglFramebuffer[le][de]=i.createFramebuffer()}else B.__webglFramebuffer[le]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)B.__webglFramebuffer[le]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Se)for(let le=0,de=ee.length;le<de;le++){const He=n.get(ee[le]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ve(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const de=ee[le];B.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const He=r.convert(de.format,de.colorSpace),ne=r.convert(de.type),ge=S(de.internalFormat,He,ne,de.colorSpace,E.isXRRenderTarget===!0),Re=Ge(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ge,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,B.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)_e(B.__webglFramebuffer[le][de],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else _e(B.__webglFramebuffer[le],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,de=ee.length;le<de;le++){const He=ee[le],ne=n.get(He);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Ue(i.TEXTURE_2D,He),_e(B.__webglFramebuffer,E,He,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),g(He)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),Ue(le,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)_e(B.__webglFramebuffer[de],E,M,i.COLOR_ATTACHMENT0,le,de);else _e(B.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,le,0);g(M)&&p(le),t.unbindTexture()}E.depthBuffer&&Le(E)}function We(E){const M=E.textures;for(let B=0,J=M.length;B<J;B++){const ee=M[B];if(g(ee)){const j=T(E),Se=n.get(ee).__webglTexture;t.bindTexture(j,Se),p(j),t.unbindTexture()}}}const ht=[],D=[];function Ct(E){if(E.samples>0){if(Ve(E)===!1){const M=E.textures,B=E.width,J=E.height;let ee=i.COLOR_BUFFER_BIT;const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(E),le=M.length>1;if(le)for(let de=0;de<M.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<M.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const He=n.get(M[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,ee,i.NEAREST),c===!0&&(ht.length=0,D.length=0,ht.push(i.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ht.push(j),D.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<M.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const He=n.get(M[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ge(E){return Math.min(s.maxSamples,E.samples)}function Ve(E){const M=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(E){const M=a.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function it(E,M){const B=E.colorSpace,J=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Vi&&B!==Xn&&(je.getTransfer(B)===rt?(J!==hn||ee!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=De,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ve}function dg(i,e){function t(n,s=Xn){let r;const a=je.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===kc)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===uo)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===hn)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Fc)return i.LUMINANCE_ALPHA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===vr)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===go)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===ka||n===Da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Ua||n===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Ua)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===$a||n===qa||n===ja||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===Ja||n===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lr)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Qa||n===eo||n===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class fg extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pg={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(h,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;h.inputState.pinching&&f>m+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=m-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gg=`
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

}`;class vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new St({vertexShader:mg,fragmentShader:gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends Wi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,f=null,m=null,v=null;const _=new vg,g=t.getContextAttributes();let p=null,T=null;const S=[],b=[],R=new ke;let L=null;const C=new en;C.viewport=new gt;const P=new en;P.viewport=new gt;const y=[C,P],x=new fg;let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=S[q];return ie===void 0&&(ie=new ea,S[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=S[q];return ie===void 0&&(ie=new ea,S[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=S[q];return ie===void 0&&(ie=new ea,S[q]=ie),ie.getHandSpace()};function F(q){const ie=b.indexOf(q.inputSource);if(ie===-1)return;const _e=S[ie];_e!==void 0&&(_e.update(q.inputSource,q.frame,h||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<S.length;q++){const ie=b[q];ie!==null&&(b[q]=null,S[q].disconnect(ie))}A=null,O=null,_.reset(),e.setRenderTarget(p),m=null,f=null,d=null,s=null,T=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Zt(m.framebufferWidth,m.framebufferHeight,{format:hn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,_e=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?ci:Ni,_e=g.stencil?li:oi);const we={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Zt(f.textureWidth,f.textureHeight,{format:hn,type:In,depthTexture:new yo(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let ie=0;ie<q.removed.length;ie++){const _e=q.removed[ie],ae=b.indexOf(_e);ae>=0&&(b[ae]=null,S[ae].disconnect(_e))}for(let ie=0;ie<q.added.length;ie++){const _e=q.added[ie];let ae=b.indexOf(_e);if(ae===-1){for(let Le=0;Le<S.length;Le++)if(Le>=b.length){b.push(_e),ae=Le;break}else if(b[Le]===null){b[Le]=_e,ae=Le;break}if(ae===-1)break}const we=S[ae];we&&we.connect(_e)}}const $=new N,K=new N;function G(q,ie,_e){$.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const ae=$.distanceTo(K),we=ie.projectionMatrix.elements,Le=_e.projectionMatrix.elements,De=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),We=(we[9]+1)/we[5],ht=(we[9]-1)/we[5],D=(we[8]-1)/we[0],Ct=(Le[8]+1)/Le[0],Ge=De*D,Ve=De*Ct,Ce=ae/(-D+Ct),it=Ce*-D;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(it),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=De+Ce,E=lt+Ce,M=Ge-it,B=Ve+(ae-it),J=We*lt/E*Ae,ee=ht*lt/E*Ae;q.projectionMatrix.makePerspective(M,B,J,ee,Ae,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,_e=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),x.near=P.near=C.near=ie,x.far=P.far=C.far=_e,(A!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,O=x.far),C.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,x.layers.mask=C.layers.mask|P.layers.mask;const ae=q.parent,we=x.cameras;te(x,ae);for(let Le=0;Le<we.length;Le++)te(we[Le],ae);we.length===2?G(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),ue(q,x,ae)};function ue(q,ie,_e){_e===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xe=null;function Ue(q,ie){if(u=ie.getViewerPose(h||a),v=ie,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ae=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Le=0;Le<_e.length;Le++){const De=_e[Le];let lt=null;if(m!==null)lt=m.getViewport(De);else{const ht=d.getViewSubImage(f,De);lt=ht.viewport,Le===0&&(e.setRenderTargetTextures(T,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(T))}let We=y[Le];We===void 0&&(We=new en,We.layers.enable(Le),We.viewport=new gt,y[Le]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),Le===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(We)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){const Le=d.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,s.renderState)}}for(let _e=0;_e<S.length;_e++){const ae=b[_e],we=S[_e];ae!==null&&we!==void 0&&we.update(ae,ie,h||a)}xe&&xe(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Je=new Zc;Je.setAnimationLoop(Ue),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const Qn=new dn,xg=new Ze;function Sg(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$c(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),v(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,T,S):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),S=T.envMap,b=T.envMapRotation;S&&(g.envMap.value=S,Qn.copy(b),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),g.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(Qn)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const b=S.program;n.uniformBlockBinding(T,b)}function h(T,S){let b=s[T.id];b===void 0&&(v(T),b=u(T),s[T.id]=b,T.addEventListener("dispose",g));const R=S.program;n.updateUBOMapping(T,R);const L=e.render.frame;r[T.id]!==L&&(f(T),r[T.id]=L)}function u(T){const S=d();T.__bindingPointIndex=S;const b=i.createBuffer(),R=T.__size,L=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=s[T.id],b=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let L=0,C=b.length;L<C;L++){const P=Array.isArray(b[L])?b[L]:[b[L]];for(let y=0,x=P.length;y<x;y++){const A=P[y];if(m(A,L,y,R)===!0){const O=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let Y=0;for(let Z=0;Z<F.length;Z++){const $=F[Z],K=_($);typeof $=="number"||typeof $=="boolean"?(A.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,A.__data)):$.isMatrix3?(A.__data[0]=$.elements[0],A.__data[1]=$.elements[1],A.__data[2]=$.elements[2],A.__data[3]=0,A.__data[4]=$.elements[3],A.__data[5]=$.elements[4],A.__data[6]=$.elements[5],A.__data[7]=0,A.__data[8]=$.elements[6],A.__data[9]=$.elements[7],A.__data[10]=$.elements[8],A.__data[11]=0):($.toArray(A.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,S,b,R){const L=T.value,C=S+"_"+b;if(R[C]===void 0)return typeof L=="number"||typeof L=="boolean"?R[C]=L:R[C]=L.clone(),!0;{const P=R[C];if(typeof L=="number"||typeof L=="boolean"){if(P!==L)return R[C]=L,!0}else if(P.equals(L)===!1)return P.copy(L),!0}return!1}function v(T){const S=T.uniforms;let b=0;const R=16;for(let C=0,P=S.length;C<P;C++){const y=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,A=y.length;x<A;x++){const O=y[x],F=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,Z=F.length;Y<Z;Y++){const $=F[Y],K=_($),G=b%R,te=G%K.boundary,ue=G+te;b+=te,ue!==0&&R-ue<K.storage&&(b+=R-ue),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=K.storage}}}const L=b%R;return L>0&&(b+=R-L),T.__size=b,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function g(T){const S=T.target;S.removeEventListener("dispose",g);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}class bg{constructor(e={}){const{canvas:t=hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=Yn,this.toneMappingExposure=1;const b=this;let R=!1,L=0,C=0,P=null,y=-1,x=null;const A=new gt,O=new gt;let F=null;const Y=new he(0);let Z=0,$=t.width,K=t.height,G=1,te=null,ue=null;const xe=new gt(0,0,$,K),Ue=new gt(0,0,$,K);let Je=!1;const q=new Mo;let ie=!1,_e=!1;const ae=new Ze,we=new Ze,Le=new N,De=new gt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ht(){return P===null?G:1}let D=n;function Ct(w,I){return t.getContext(w,I)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const I="webgl2";if(D=Ct(I,w),D===null)throw Ct(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,Ve,Ce,it,Ae,E,M,B,J,ee,j,Se,le,de,He,ne,ge,Re,Pe,ve,$e,Ie,Ke,k;function oe(){Ge=new Ap(D),Ge.init(),Ie=new dg(D,Ge),Ve=new Mp(D,Ge,e,Ie),Ce=new cg(D,Ge),Ve.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),it=new Rp(D),Ae=new qm,E=new ug(D,Ge,Ce,Ae,Ve,Ie,it),M=new yp(b),B=new Ep(b),J=new Nu(D),Ke=new xp(D,J),ee=new Cp(D,J,it,Ke),j=new kp(D,ee,J,it),Pe=new Pp(D,Ve,E),ne=new bp(Ae),Se=new $m(b,M,B,Ge,Ve,Ke,ne),le=new Sg(b,Ae),de=new Zm,He=new ng(Ge),Re=new _p(b,M,B,Ce,j,m,c),ge=new og(b,j,Ve),k=new Mg(D,it,Ve,Ce),ve=new Sp(D,Ge,it),$e=new Lp(D,Ge,it),it.programs=Se.programs,b.capabilities=Ve,b.extensions=Ge,b.properties=Ae,b.renderLists=de,b.shadowMap=ge,b.state=Ce,b.info=it}oe();const V=new _g(b,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize($,K,!1))},this.getSize=function(w){return w.set($,K)},this.setSize=function(w,I,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,K=I,t.width=Math.floor(w*G),t.height=Math.floor(I*G),z===!0&&(t.style.width=w+"px",t.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set($*G,K*G).floor()},this.setDrawingBufferSize=function(w,I,z){$=w,K=I,G=z,t.width=Math.floor(w*z),t.height=Math.floor(I*z),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(xe)},this.setViewport=function(w,I,z,H){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,I,z,H),Ce.viewport(A.copy(xe).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Ue)},this.setScissor=function(w,I,z,H){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,I,z,H),Ce.scissor(O.copy(Ue).multiplyScalar(G).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(w){Ce.setScissorTest(Je=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(w=!0,I=!0,z=!0){let H=0;if(w){let U=!1;if(P!==null){const se=P.texture.format;U=se===vo||se===go||se===mo}if(U){const se=P.texture.type,pe=se===In||se===oi||se===gs||se===li||se===fo||se===po,Me=Re.getClearColor(),be=Re.getClearAlpha(),Ne=Me.r,Oe=Me.g,ye=Me.b;pe?(v[0]=Ne,v[1]=Oe,v[2]=ye,v[3]=be,D.clearBufferuiv(D.COLOR,0,v)):(_[0]=Ne,_[1]=Oe,_[2]=ye,_[3]=be,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}I&&(H|=D.DEPTH_BUFFER_BIT),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),de.dispose(),He.dispose(),Ae.dispose(),M.dispose(),B.dispose(),j.dispose(),Ke.dispose(),k.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",Lo),V.removeEventListener("sessionend",Ro),$n.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=it.autoReset,I=ge.enabled,z=ge.autoUpdate,H=ge.needsUpdate,U=ge.type;oe(),it.autoReset=w,ge.enabled=I,ge.autoUpdate=z,ge.needsUpdate=H,ge.type=U}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const I=w.target;I.removeEventListener("dispose",Fe),pt(I)}function pt(w){Lt(w),Ae.remove(w)}function Lt(w){const I=Ae.get(w).programs;I!==void 0&&(I.forEach(function(z){Se.releaseProgram(z)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,z,H,U,se){I===null&&(I=lt);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Me=mh(w,I,z,H,U);Ce.setMaterial(H,pe);let be=z.index,Ne=1;if(H.wireframe===!0){if(be=ee.getWireframeAttribute(z),be===void 0)return;Ne=2}const Oe=z.drawRange,ye=z.attributes.position;let Qe=Oe.start*Ne,ct=(Oe.start+Oe.count)*Ne;se!==null&&(Qe=Math.max(Qe,se.start*Ne),ct=Math.min(ct,(se.start+se.count)*Ne)),be!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,be.count)):ye!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,ye.count));const ut=ct-Qe;if(ut<0||ut===1/0)return;Ke.setup(U,H,Me,z,be);let zt,tt=ve;if(be!==null&&(zt=J.get(be),tt=$e,tt.setIndex(zt)),U.isMesh)H.wireframe===!0?(Ce.setLineWidth(H.wireframeLinewidth*ht()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(U.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*ht()),U.isLineSegments?tt.setMode(D.LINES):U.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else U.isPoints?tt.setMode(D.POINTS):U.isSprite&&tt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Mn=U._multiDrawCounts,nt=U._multiDrawCount,nn=be?J.get(be).bytesPerElement:1,di=Ae.get(H).currentProgram.getUniforms();for(let Yt=0;Yt<nt;Yt++)di.setValue(D,"_gl_DrawID",Yt),tt.render(Te[Yt]/nn,Mn[Yt])}else if(U.isInstancedMesh)tt.renderInstances(Qe,ut,U.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Mn=Math.min(z.instanceCount,Te);tt.renderInstances(Qe,ut,Mn)}else tt.render(Qe,ut)};function st(w,I,z){w.transparent===!0&&w.side===Tt&&w.forceSinglePass===!1?(w.side=Wt,w.needsUpdate=!0,ys(w,I,z),w.side=Dn,w.needsUpdate=!0,ys(w,I,z),w.side=Tt):ys(w,I,z)}this.compile=function(w,I,z=null){z===null&&(z=w),p=He.get(z),p.init(I),S.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Me=se[pe];st(Me,z,U),H.add(Me)}else st(se,z,U),H.add(se)}),S.pop(),p=null,H},this.compileAsync=function(w,I,z=null){const H=this.compile(w,I,z);return new Promise(U=>{function se(){if(H.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){U(w);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let tn=null;function Sn(w){tn&&tn(w)}function Lo(){$n.stop()}function Ro(){$n.start()}const $n=new Zc;$n.setAnimationLoop(Sn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(w){tn=w,V.setAnimationLoop(w),w===null?$n.stop():$n.start()},V.addEventListener("sessionstart",Lo),V.addEventListener("sessionend",Ro),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,I,P),p=He.get(w,S.length),p.init(I),S.push(p),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(we),_e=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,_e),g=de.get(w,T.length),g.init(),T.push(g),V.enabled===!0&&V.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&Er(se,I,-1/0,b.sortObjects)}Er(w,I,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(te,ue),We=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,We&&Re.addToRenderList(g,w),this.info.render.frame++,ie===!0&&ne.beginShadows();const z=p.state.shadowsArray;ge.render(z,w,I),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,U=g.transmissive;if(p.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let pe=0,Me=se.length;pe<Me;pe++){const be=se[pe];ko(H,U,w,be)}We&&Re.render(w);for(let pe=0,Me=se.length;pe<Me;pe++){const be=se[pe];Po(g,w,be,be.viewport)}}else U.length>0&&ko(H,U,w,I),We&&Re.render(w),Po(g,w,I);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(b,w,I),Ke.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&ne.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Er(w,I,z,H){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){H&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const pe=j.update(w),Me=w.material;Me.visible&&g.push(w,pe,Me,z,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const pe=j.update(w),Me=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Me)){const be=pe.groups;for(let Ne=0,Oe=be.length;Ne<Oe;Ne++){const ye=be[Ne],Qe=Me[ye.materialIndex];Qe&&Qe.visible&&g.push(w,pe,Qe,z,De.z,ye)}}else Me.visible&&g.push(w,pe,Me,z,De.z,null)}}const se=w.children;for(let pe=0,Me=se.length;pe<Me;pe++)Er(se[pe],I,z,H)}function Po(w,I,z,H){const U=w.opaque,se=w.transmissive,pe=w.transparent;p.setupLightsView(z),ie===!0&&ne.setGlobalState(b.clippingPlanes,z),H&&Ce.viewport(A.copy(H)),U.length>0&&bs(U,I,z),se.length>0&&bs(se,I,z),pe.length>0&&bs(pe,I,z),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ko(w,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Zt(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?un:In,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const se=p.state.transmissionRenderTarget[H.id],pe=H.viewport||A;se.setSize(pe.z,pe.w);const Me=b.getRenderTarget();b.setRenderTarget(se),b.getClearColor(Y),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),We&&Re.render(z);const be=b.toneMapping;b.toneMapping=Yn;const Ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ie===!0&&ne.setGlobalState(b.clippingPlanes,H),bs(w,z,H),E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ye=0,Qe=I.length;ye<Qe;ye++){const ct=I[ye],ut=ct.object,zt=ct.geometry,tt=ct.material,Te=ct.group;if(tt.side===Tt&&ut.layers.test(H.layers)){const Mn=tt.side;tt.side=Wt,tt.needsUpdate=!0,Do(ut,z,H,zt,tt,Te),tt.side=Mn,tt.needsUpdate=!0,Oe=!0}}Oe===!0&&(E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se))}b.setRenderTarget(Me),b.setClearColor(Y,Z),Ne!==void 0&&(H.viewport=Ne),b.toneMapping=be}function bs(w,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=w.length;U<se;U++){const pe=w[U],Me=pe.object,be=pe.geometry,Ne=H===null?pe.material:H,Oe=pe.group;Me.layers.test(z.layers)&&Do(Me,I,z,be,Ne,Oe)}}function Do(w,I,z,H,U,se){w.onBeforeRender(b,I,z,H,U,se),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(b,I,z,H,w,se),U.transparent===!0&&U.side===Tt&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,b.renderBufferDirect(z,I,H,U,w,se),U.side=Dn,U.needsUpdate=!0,b.renderBufferDirect(z,I,H,U,w,se),U.side=Tt):b.renderBufferDirect(z,I,H,U,w,se),w.onAfterRender(b,I,z,H,U,se)}function ys(w,I,z){I.isScene!==!0&&(I=lt);const H=Ae.get(w),U=p.state.lights,se=p.state.shadowsArray,pe=U.state.version,Me=Se.getParameters(w,U.state,se,I,z),be=Se.getProgramCacheKey(Me);let Ne=H.programs;H.environment=w.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Fe),Ne=new Map,H.programs=Ne);let Oe=Ne.get(be);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===pe)return Uo(w,Me),Oe}else Me.uniforms=Se.getUniforms(w),w.onBeforeCompile(Me,b),Oe=Se.acquireProgram(Me,be),Ne.set(be,Oe),H.uniforms=Me.uniforms;const ye=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ye.clippingPlanes=ne.uniform),Uo(w,Me),H.needsLights=vh(w),H.lightsStateVersion=pe,H.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function Io(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=cr.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Uo(w,I){const z=Ae.get(w);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function mh(w,I,z,H,U){I.isScene!==!0&&(I=lt),E.resetTextureUnits();const se=I.fog,pe=H.isMeshStandardMaterial?I.environment:null,Me=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vi,be=(H.isMeshStandardMaterial?B:M).get(H.envMap||pe),Ne=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color;let ut=Yn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ut=b.toneMapping);const zt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=zt!==void 0?zt.length:0,Te=Ae.get(H),Mn=p.state.lights;if(ie===!0&&(_e===!0||w!==x)){const Jt=w===x&&H.id===y;ne.setState(H,w,Jt)}let nt=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Mn.state.version||Te.outputColorSpace!==Me||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==be||H.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==Oe||Te.morphTargets!==ye||Te.morphNormals!==Qe||Te.morphColors!==ct||Te.toneMapping!==ut||Te.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Te.__version=H.version);let nn=Te.currentProgram;nt===!0&&(nn=ys(H,I,U));let di=!1,Yt=!1,qi=!1;const dt=nn.getUniforms(),fn=Te.uniforms;if(Ce.useProgram(nn.program)&&(di=!0,Yt=!0,qi=!0),H.id!==y&&(y=H.id,Yt=!0),di||x!==w){Ce.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),du(ae),fu(ae),dt.setValue(D,"projectionMatrix",ae)):dt.setValue(D,"projectionMatrix",w.projectionMatrix),dt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Un=dt.map.cameraPosition;Un!==void 0&&Un.setValue(D,Le.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Yt=!0,qi=!0)}if(U.isSkinnedMesh){dt.setOptional(D,U,"bindMatrix"),dt.setOptional(D,U,"bindMatrixInverse");const Jt=U.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),dt.setValue(D,"boneTexture",Jt.boneTexture,E))}U.isBatchedMesh&&(dt.setOptional(D,U,"batchingTexture"),dt.setValue(D,"batchingTexture",U._matricesTexture,E),dt.setOptional(D,U,"batchingIdTexture"),dt.setValue(D,"batchingIdTexture",U._indirectTexture,E),dt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(D,"batchingColorTexture",U._colorsTexture,E));const ji=z.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Pe.update(U,z,nn),(Yt||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,dt.setValue(D,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fn.envMap.value=be,fn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(fn.envMapIntensity.value=I.environmentIntensity),Yt&&(dt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Te.needsLights&&gh(fn,qi),se&&H.fog===!0&&le.refreshFogUniforms(fn,se),le.refreshMaterialUniforms(fn,H,G,K,p.state.transmissionRenderTarget[w.id]),cr.upload(D,Io(Te),fn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cr.upload(D,Io(Te),fn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(D,"center",U.center),dt.setValue(D,"modelViewMatrix",U.modelViewMatrix),dt.setValue(D,"normalMatrix",U.normalMatrix),dt.setValue(D,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Jt=H.uniformsGroups;for(let Un=0,Nn=Jt.length;Un<Nn;Un++){const No=Jt[Un];k.update(No,nn),k.bind(No,nn)}}return nn}function gh(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function vh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,I,z){Ae.get(w.texture).__webglTexture=I,Ae.get(w.depthTexture).__webglTexture=z;const H=Ae.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const z=Ae.get(w);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,z=0){P=w,L=I,C=z;let H=!0,U=null,se=!1,pe=!1;if(w){const be=Ae.get(w);if(be.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(be.__hasExternalTextures)E.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ye=w.depthTexture;if(be.__boundDepthTexture!==ye){if(ye!==null&&Ae.has(ye)&&(w.width!==ye.image.width||w.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Oe=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[I])?U=Oe[I][z]:U=Oe[I],se=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?U=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?U=Oe[z]:U=Oe,A.copy(w.viewport),O.copy(w.scissor),F=w.scissorTest}else A.copy(xe).multiplyScalar(G).floor(),O.copy(Ue).multiplyScalar(G).floor(),F=Je;if(Ce.bindFramebuffer(D.FRAMEBUFFER,U)&&H&&Ce.drawBuffers(w,U),Ce.viewport(A),Ce.scissor(O),Ce.setScissorTest(F),se){const be=Ae.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,be.__webglTexture,z)}else if(pe){const be=Ae.get(w.texture),Ne=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,z||0,Ne)}y=-1},this.readRenderTargetPixels=function(w,I,z,H,U,se,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Ce.bindFramebuffer(D.FRAMEBUFFER,Me);try{const be=w.texture,Ne=be.format,Oe=be.type;if(!Ve.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-H&&z>=0&&z<=w.height-U&&D.readPixels(I,z,H,U,Ie.convert(Ne),Ie.convert(Oe),se)}finally{const be=P!==null?Ae.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,I,z,H,U,se,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const be=w.texture,Ne=be.format,Oe=be.type;if(!Ve.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-H&&z>=0&&z<=w.height-U){Ce.bindFramebuffer(D.FRAMEBUFFER,Me);const ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(I,z,H,U,Ie.convert(Ne),Ie.convert(Oe),0);const Qe=P!==null?Ae.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Qe);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uu(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(ye),D.deleteSync(ct),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,z=0){w.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(w.image.width*H),se=Math.floor(w.image.height*H),pe=I!==null?I.x:0,Me=I!==null?I.y:0;E.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,pe,Me,U,se),Ce.unbindTexture()},this.copyTextureToTexture=function(w,I,z=null,H=null,U=0){w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let se,pe,Me,be,Ne,Oe,ye,Qe,ct;const ut=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(se=z.max.x-z.min.x,pe=z.max.y-z.min.y,Me=z.isBox3?z.max.z-z.min.z:1,be=z.min.x,Ne=z.min.y,Oe=z.isBox3?z.min.z:0):(se=ut.width,pe=ut.height,Me=ut.depth||1,be=0,Ne=0,Oe=0),H!==null?(ye=H.x,Qe=H.y,ct=H.z):(ye=0,Qe=0,ct=0);const zt=Ie.convert(I.format),tt=Ie.convert(I.type);let Te;I.isData3DTexture?(E.setTexture3D(I,0),Te=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(E.setTexture2DArray(I,0),Te=D.TEXTURE_2D_ARRAY):(E.setTexture2D(I,0),Te=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Mn=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nn=D.getParameter(D.UNPACK_SKIP_PIXELS),di=D.getParameter(D.UNPACK_SKIP_ROWS),Yt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const qi=w.isDataArrayTexture||w.isData3DTexture,dt=I.isDataArrayTexture||I.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const fn=Ae.get(w),ji=Ae.get(I),Jt=Ae.get(fn.__renderTarget),Un=Ae.get(ji.__renderTarget);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Nn=0;Nn<Me;Nn++)qi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(w).__webglTexture,U,Oe+Nn),w.isDepthTexture?(dt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(I).__webglTexture,U,ct+Nn),D.blitFramebuffer(be,Ne,se,pe,ye,Qe,se,pe,D.DEPTH_BUFFER_BIT,D.NEAREST)):dt?D.copyTexSubImage3D(Te,U,ye,Qe,ct+Nn,be,Ne,se,pe):D.copyTexSubImage2D(Te,U,ye,Qe,ct+Nn,be,Ne,se,pe);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Te,U,ye,Qe,ct,se,pe,Me,zt,tt,ut.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,U,ye,Qe,ct,se,pe,Me,zt,ut.data):D.texSubImage3D(Te,U,ye,Qe,ct,se,pe,Me,zt,tt,ut):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,ye,Qe,se,pe,zt,tt,ut.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,ye,Qe,ut.width,ut.height,zt,ut.data):D.texSubImage2D(D.TEXTURE_2D,U,ye,Qe,se,pe,zt,tt,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,di),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),U===0&&I.generateMipmaps&&D.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,I,z=null,H=null,U=0){return w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,I,z,H,U)},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){L=0,C=0,P=null,Ce.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class ds{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new ds(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yg extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class th extends It{constructor(e=null,t=1,n=1,s,r,a,o,c,h=et,u=et,d,f){super(null,a,o,c,h,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ai=new Ze,Nl=new Ze,Xs=[],Fl=new hi,wg=new Ze,es=new Ye,ts=new Yi;class ns extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),Fl.copy(e.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),ts.copy(e.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),Nl.multiplyMatrices(n,Ai),es.matrixWorld=Nl,es.raycast(e,Xs);for(let a=0,o=Xs.length;a<o;a++){const c=Xs[a];c.instanceId=r,c.object=this,t.push(c)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new th(new Float32Array(s*this.count),s,this.count,vr,cn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class io extends Gt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fr=new N,pr=new N,Ol=new Ze,is=new xo,Ys=new Yi,ta=new N,Bl=new N;class Tg extends wt{constructor(e=new Xt,t=new io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fr.fromBufferAttribute(t,s-1),pr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fr.distanceTo(pr);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;Ol.copy(s).invert(),is.copy(e.ray).applyMatrix4(Ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let _=m,g=v-1;_<g;_+=h){const p=u.getX(_),T=u.getX(_+1),S=$s(this,e,is,c,p,T);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(v-1),g=u.getX(m),p=$s(this,e,is,c,_,g);p&&t.push(p)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let _=m,g=v-1;_<g;_+=h){const p=$s(this,e,is,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=$s(this,e,is,c,v-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $s(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(fr.fromBufferAttribute(a,s),pr.fromBufferAttribute(a,r),t.distanceSqToSegment(fr,pr,ta,Bl)>n)return;ta.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ta);if(!(c<e.near||c>e.far))return{distance:c,point:Bl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class br extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],h=new N,u=new ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=n+d/t*s;h.x=e*Math.cos(m),h.y=e*Math.sin(m),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(o,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wo extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const u=[],d=new N,f=new N,m=[],v=[],_=[],g=[];for(let p=0;p<=n;p++){const T=[],S=p/n;let b=0;p===0&&a===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const L=R/t;d.x=-e*Math.cos(s+L*r)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(s+L*r)*Math.sin(a+S*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(L+b,1-S),T.push(h++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const S=u[p][T+1],b=u[p][T],R=u[p+1][T],L=u[p+1][T+1];(p!==0||a>0)&&m.push(S,b,L),(p!==n-1||c<Math.PI)&&m.push(b,R,L)}this.setIndex(m),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eg extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Vn extends Gt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ag extends Gt{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class so extends Gt{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const zl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cg{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const m=h[d],v=h[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Lg=new Cg;class To{constructor(e){this.manager=e!==void 0?e:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}To.DEFAULT_MATERIAL_NAME="__DEFAULT";class Rg extends To{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=zl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=_s("img");function c(){u(),zl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class yr extends To{constructor(e){super(e)}load(e,t,n,s){const r=new It,a=new Rg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Eo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pg extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const na=new Ze,Hl=new N,Gl=new N;class kg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dg extends kg{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ig extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ug extends Eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ng{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vl(){return performance.now()}const Wl=new Ze;class Fg{constructor(e,t,n=0,s=1/0){this.ray=new xo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(e,t=!0,n=[]){return ro(e,this,n,t),n.sort(Xl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ro(e[s],this,n,t);return n.sort(Xl),n}}function Xl(i,e){return i.distance-e.distance}function ro(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ro(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);const X=16,ei=63,W={ocean:0,plains:1,desert:2,windswept_hills:3,forest:4,taiga:5,swamp:6,river:7,frozen_ocean:10,frozen_river:11,snowy_plains:12,snowy_mountains:13,mushroom_fields:14,beach:16,jungle:21,sparse_jungle:23,deep_ocean:24,stony_shore:25,snowy_beach:26,birch_forest:27,dark_forest:29,snowy_taiga:30,old_growth_pine_taiga:32,windswept_forest:34,savanna:35,savanna_plateau:36,badlands:37,wooded_badlands:38,wooded_badlands_plateau:39,eroded_badlands:40,warm_ocean:44,lukewarm_ocean:45,cold_ocean:46,deep_lukewarm_ocean:48,deep_cold_ocean:49,deep_frozen_ocean:50,sunflower_plains:129,flower_forest:132,ice_spikes:140,old_growth_birch_forest:155,old_growth_spruce_taiga:160,windswept_savanna:163,windswept_gravelly_hills:131,bamboo_jungle:168,meadow:177,grove:178,snowy_slopes:179,frozen_peaks:180,jagged_peaks:181,stony_peaks:182,cherry_grove:183,pale_garden:184,mangrove_swamp:175};var Xe=(i=>(i[i.Oak=0]="Oak",i[i.Birch=1]="Birch",i[i.Spruce=2]="Spruce",i[i.Jungle=3]="Jungle",i[i.Acacia=4]="Acacia",i[i.DarkOak=5]="DarkOak",i[i.Cherry=6]="Cherry",i[i.Mangrove=7]="Mangrove",i[i.Cactus=8]="Cactus",i))(Xe||{});let hr,ur;var l=(i=>(i[i.Air=0]="Air",i[i.Stone=1]="Stone",i[i.Dirt=2]="Dirt",i[i.Grass=3]="Grass",i[i.Sand=4]="Sand",i[i.Gravel=5]="Gravel",i[i.Water=6]="Water",i[i.Ice=7]="Ice",i[i.Snow=8]="Snow",i[i.SnowBlock=9]="SnowBlock",i[i.Clay=10]="Clay",i[i.Bedrock=11]="Bedrock",i[i.OakLog=12]="OakLog",i[i.BirchLog=13]="BirchLog",i[i.SpruceLog=14]="SpruceLog",i[i.JungleLog=15]="JungleLog",i[i.AcaciaLog=16]="AcaciaLog",i[i.DarkOakLog=17]="DarkOakLog",i[i.CherryLog=18]="CherryLog",i[i.MangroveLog=19]="MangroveLog",i[i.OakLeaves=20]="OakLeaves",i[i.BirchLeaves=21]="BirchLeaves",i[i.SpruceLeaves=22]="SpruceLeaves",i[i.JungleLeaves=23]="JungleLeaves",i[i.AcaciaLeaves=24]="AcaciaLeaves",i[i.DarkOakLeaves=25]="DarkOakLeaves",i[i.CherryLeaves=26]="CherryLeaves",i[i.MangroveLeaves=27]="MangroveLeaves",i[i.Cactus=28]="Cactus",i[i.CactusTop=29]="CactusTop",i[i.DeadBush=30]="DeadBush",i[i.TallGrass=31]="TallGrass",i[i.Fern=32]="Fern",i[i.Podzol=33]="Podzol",i[i.Mycelium=34]="Mycelium",i[i.PackedIce=35]="PackedIce",i[i.BlueIce=36]="BlueIce",i[i.RedSand=37]="RedSand",i[i.Terracotta=38]="Terracotta",i[i.Coral=39]="Coral",i[i.Seagrass=40]="Seagrass",i[i.OakSapling=41]="OakSapling",i[i.BirchSapling=42]="BirchSapling",i[i.SpruceSapling=43]="SpruceSapling",i[i.JungleSapling=44]="JungleSapling",i[i.AcaciaSapling=45]="AcaciaSapling",i[i.DarkOakSapling=46]="DarkOakSapling",i[i.CherrySapling=47]="CherrySapling",i[i.MangroveSapling=48]="MangroveSapling",i[i.OakPlanks=49]="OakPlanks",i[i.BirchPlanks=50]="BirchPlanks",i[i.SprucePlanks=51]="SprucePlanks",i[i.JunglePlanks=52]="JunglePlanks",i[i.AcaciaPlanks=53]="AcaciaPlanks",i[i.DarkOakPlanks=54]="DarkOakPlanks",i[i.CherryPlanks=55]="CherryPlanks",i[i.MangrovePlanks=56]="MangrovePlanks",i[i.StrippedOakLog=57]="StrippedOakLog",i[i.StrippedBirchLog=58]="StrippedBirchLog",i[i.StrippedSpruceLog=59]="StrippedSpruceLog",i[i.StrippedJungleLog=60]="StrippedJungleLog",i[i.StrippedAcaciaLog=61]="StrippedAcaciaLog",i[i.StrippedDarkOakLog=62]="StrippedDarkOakLog",i[i.StrippedCherryLog=63]="StrippedCherryLog",i[i.StrippedMangroveLog=64]="StrippedMangroveLog",i[i.OakDoor=65]="OakDoor",i[i.BirchDoor=66]="BirchDoor",i[i.SpruceDoor=67]="SpruceDoor",i[i.JungleDoor=68]="JungleDoor",i[i.AcaciaDoor=69]="AcaciaDoor",i[i.DarkOakDoor=70]="DarkOakDoor",i[i.CherryDoor=71]="CherryDoor",i[i.MangroveDoor=72]="MangroveDoor",i[i.OakTrapdoor=73]="OakTrapdoor",i[i.BirchTrapdoor=74]="BirchTrapdoor",i[i.SpruceTrapdoor=75]="SpruceTrapdoor",i[i.JungleTrapdoor=76]="JungleTrapdoor",i[i.AcaciaTrapdoor=77]="AcaciaTrapdoor",i[i.DarkOakTrapdoor=78]="DarkOakTrapdoor",i[i.CherryTrapdoor=79]="CherryTrapdoor",i[i.MangroveTrapdoor=80]="MangroveTrapdoor",i))(l||{});hr={0:12,1:13,2:14,3:15,4:16,5:17,6:18,7:19,8:28};ur={0:20,1:21,2:22,3:23,4:24,5:25,6:26,7:27,8:0};const Og={20:41,21:42,22:43,23:44,24:45,25:46,26:47,27:48},Bg={20:.05,21:.05,22:.05,23:.025,24:.05,25:.05,26:.05,27:.05},Ut="/sound-effects",ia={"step/grass":6,"step/stone":6,"step/wood":6,"step/sand":5,"step/gravel":4,"step/snow":4,"step/cloth":4,"step/coral":6,"step/wet_grass":6,"dig/grass":4,"dig/stone":4,"dig/wood":4,"dig/sand":4,"dig/gravel":4,"dig/snow":4,"dig/cloth":4,"dig/coral":4,"dig/wet_grass":4,"random/pop":1,"random/click":1,"random/break":1,"random/orb":1,"random/splash":1,"liquid/splash":1,"liquid/splash2":1,"liquid/swim":18,"liquid/water":1,"damage/fallbig":1,"damage/fallsmall":1},zg={[l.Grass]:"grass",[l.Dirt]:"grass",[l.Podzol]:"grass",[l.Mycelium]:"grass",[l.TallGrass]:"grass",[l.Fern]:"grass",[l.DeadBush]:"grass",[l.Stone]:"stone",[l.Terracotta]:"stone",[l.Ice]:"stone",[l.PackedIce]:"stone",[l.BlueIce]:"stone",[l.Clay]:"stone",[l.Bedrock]:"stone",[l.OakLog]:"wood",[l.BirchLog]:"wood",[l.SpruceLog]:"wood",[l.JungleLog]:"wood",[l.AcaciaLog]:"wood",[l.DarkOakLog]:"wood",[l.CherryLog]:"wood",[l.MangroveLog]:"wood",[l.Sand]:"sand",[l.RedSand]:"sand",[l.Gravel]:"gravel",[l.Snow]:"snow",[l.SnowBlock]:"snow",[l.OakLeaves]:"grass",[l.BirchLeaves]:"grass",[l.SpruceLeaves]:"grass",[l.JungleLeaves]:"grass",[l.AcaciaLeaves]:"grass",[l.DarkOakLeaves]:"grass",[l.CherryLeaves]:"grass",[l.MangroveLeaves]:"grass",[l.OakSapling]:"grass",[l.BirchSapling]:"grass",[l.SpruceSapling]:"grass",[l.JungleSapling]:"grass",[l.AcaciaSapling]:"grass",[l.DarkOakSapling]:"grass",[l.CherrySapling]:"grass",[l.MangroveSapling]:"grass",[l.Cactus]:"cloth",[l.CactusTop]:"cloth",[l.Coral]:"coral",[l.Seagrass]:"wet_grass"},pn={step:.3,dig:.5,place:.6,break:.7,pickup:.5,splash:.6,swim:.3,ui:.4,fall:.5},sa={step:280,dig:200,swim:400};class ki{static instance;audioCache=new Map;lastPlayTime=new Map;masterVolume=1;enabled=!0;audioContext=null;gainNode=null;constructor(){this.initAudioContext()}static getInstance(){return ki.instance||(ki.instance=new ki),ki.instance}initAudioContext(){const e=()=>{this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination),this.gainNode.gain.value=this.masterVolume),this.audioContext.state==="suspended"&&this.audioContext.resume()};document.addEventListener("click",e,{once:!1}),document.addEventListener("keydown",e,{once:!1}),document.addEventListener("mousedown",e,{once:!1})}setMasterVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.gainNode&&(this.gainNode.gain.value=this.masterVolume)}setEnabled(e){this.enabled=e}getSoundCategory(e){return zg[e]||"stone"}buildSoundPath(e,t){if(e.startsWith("liquid/swim"))return`${Ut}/liquid/swim${t}.ogg`;if(e==="random/pop"||e==="random/click"||e==="random/break"||e==="random/orb"||e==="random/splash"||e==="liquid/water"){const r=e.split("/")[1];return`${Ut}/${e.split("/")[0]}/${r}.ogg`}if(e==="liquid/splash")return`${Ut}/liquid/splash.ogg`;if(e==="liquid/splash2")return`${Ut}/liquid/splash2.ogg`;if(e==="damage/fallbig"||e==="damage/fallsmall")return`${Ut}/${e}.ogg`;const[n,s]=e.split("/");return`${Ut}/${n}/${s}${t}.ogg`}getAudio(e){let t=this.audioCache.get(e);if(!t){t=[];for(let n=0;n<3;n++){const s=new Audio(e);s.preload="auto",t.push(s)}this.audioCache.set(e,t)}for(const n of t)if(n.paused||n.ended)return n;return t[0]}playWithCooldown(e,t,n,s){const r=Date.now(),a=this.lastPlayTime.get(e)||0;return r-a<t?!1:(this.lastPlayTime.set(e,r),this.playSound(n,s),!0)}playSound(e,t){if(!this.enabled)return;const n=this.getAudio(e);n.volume=t*this.masterVolume,n.currentTime=0,n.play().catch(()=>{})}getRandomVariant(e){const t=ia[e]||1;return Math.floor(Math.random()*t)+1}playFootstep(e){const t=this.getSoundCategory(e),n=`step/${t}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playWithCooldown(`step_${t}`,sa.step,r,pn.step)}playBlockHit(e){const t=this.getSoundCategory(e),n=`dig/${t}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playWithCooldown(`dig_${t}`,sa.dig,r,pn.dig)}playBlockBreak(e){const n=`dig/${this.getSoundCategory(e)}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playSound(r,pn.break)}playBlockPlace(e){const n=`dig/${this.getSoundCategory(e)}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playSound(r,pn.place)}playItemPickup(){const e=`${Ut}/random/pop.ogg`;this.playSound(e,pn.pickup)}playSplash(){const e=Math.random()>.5?"":"2",t=`${Ut}/liquid/splash${e}.ogg`;this.playSound(t,pn.splash)}playSwim(){const e=Math.floor(Math.random()*18)+1,t=`${Ut}/liquid/swim${e}.ogg`;this.playWithCooldown("swim",sa.swim,t,pn.swim)}playUIClick(){const e=`${Ut}/random/click.ogg`;this.playSound(e,pn.ui)}playFallDamage(e){const t=`${Ut}/damage/fall${e?"big":"small"}.ogg`;this.playSound(t,pn.fall)}playOrbPickup(){const e=`${Ut}/random/orb.ogg`;this.playSound(e,pn.pickup)}preloadCommonSounds(){const e=["grass","stone","wood","sand"];for(const t of e){const n=`step/${t}`,s=`dig/${t}`,r=ia[n]||4,a=ia[s]||4;for(let o=1;o<=r;o++)this.getAudio(this.buildSoundPath(n,o));for(let o=1;o<=a;o++)this.getAudio(this.buildSoundPath(s,o))}this.getAudio(`${Ut}/random/pop.ogg`),this.getAudio(`${Ut}/random/click.ogg`),this.getAudio(`${Ut}/liquid/splash.ogg`)}}function vt(){return ki.getInstance()}function re(i,e,t={}){return{id:i,name:e,isSolid:!0,isTransparent:!1,isGravityAffected:!1,needsBiomeTint:!1,isLeaves:!1,isLog:!1,isSapling:!1,isDoor:!1,isTrapdoor:!1,undergroundLayers:null,hardness:1,drops:i,dropChance:1,...t}}const Yl=new Map([[l.Air,re(l.Air,"Air",{isSolid:!1,isTransparent:!0,hardness:0,drops:null})],[l.Stone,re(l.Stone,"Stone",{hardness:1.5,undergroundLayers:[l.Stone,l.Stone]})],[l.Dirt,re(l.Dirt,"Dirt",{hardness:.5,undergroundLayers:[l.Dirt,l.Stone]})],[l.Grass,re(l.Grass,"Grass Block",{hardness:.6,needsBiomeTint:!0,drops:l.Dirt,undergroundLayers:[l.Dirt,l.Stone]})],[l.Sand,re(l.Sand,"Sand",{hardness:.5,isGravityAffected:!0,undergroundLayers:[l.Sand,l.Stone]})],[l.RedSand,re(l.RedSand,"Red Sand",{hardness:.5,isGravityAffected:!0,undergroundLayers:[l.RedSand,l.Stone]})],[l.Gravel,re(l.Gravel,"Gravel",{hardness:.6,isGravityAffected:!0,undergroundLayers:[l.Stone,l.Stone]})],[l.Water,re(l.Water,"Water",{isSolid:!1,isTransparent:!0,hardness:100,drops:null,undergroundLayers:[l.Sand,l.Stone]})],[l.Ice,re(l.Ice,"Ice",{isTransparent:!0,hardness:.5,undergroundLayers:[l.Stone,l.Stone]})],[l.PackedIce,re(l.PackedIce,"Packed Ice",{hardness:.5,undergroundLayers:[l.Stone,l.Stone]})],[l.BlueIce,re(l.BlueIce,"Blue Ice",{hardness:2.8,undergroundLayers:[l.Stone,l.Stone]})],[l.Snow,re(l.Snow,"Snow",{hardness:.1,undergroundLayers:[l.Dirt,l.Stone]})],[l.SnowBlock,re(l.SnowBlock,"Snow Block",{hardness:.2,undergroundLayers:[l.Dirt,l.Stone]})],[l.Clay,re(l.Clay,"Clay",{hardness:.6,undergroundLayers:[l.Clay,l.Dirt]})],[l.Bedrock,re(l.Bedrock,"Bedrock",{hardness:-1,drops:null,undergroundLayers:null})],[l.Podzol,re(l.Podzol,"Podzol",{hardness:.5,drops:l.Dirt,undergroundLayers:[l.Dirt,l.Stone]})],[l.Mycelium,re(l.Mycelium,"Mycelium",{hardness:.6,drops:l.Dirt,undergroundLayers:[l.Dirt,l.Stone]})],[l.Terracotta,re(l.Terracotta,"Terracotta",{hardness:1.25,undergroundLayers:[l.Terracotta,l.Stone]})],[l.OakLog,re(l.OakLog,"Oak Log",{hardness:2,isLog:!0})],[l.BirchLog,re(l.BirchLog,"Birch Log",{hardness:2,isLog:!0})],[l.SpruceLog,re(l.SpruceLog,"Spruce Log",{hardness:2,isLog:!0})],[l.JungleLog,re(l.JungleLog,"Jungle Log",{hardness:2,isLog:!0})],[l.AcaciaLog,re(l.AcaciaLog,"Acacia Log",{hardness:2,isLog:!0})],[l.DarkOakLog,re(l.DarkOakLog,"Dark Oak Log",{hardness:2,isLog:!0})],[l.CherryLog,re(l.CherryLog,"Cherry Log",{hardness:2,isLog:!0})],[l.MangroveLog,re(l.MangroveLog,"Mangrove Log",{hardness:2,isLog:!0})],[l.StrippedOakLog,re(l.StrippedOakLog,"Stripped Oak Log",{hardness:2,isLog:!0})],[l.StrippedBirchLog,re(l.StrippedBirchLog,"Stripped Birch Log",{hardness:2,isLog:!0})],[l.StrippedSpruceLog,re(l.StrippedSpruceLog,"Stripped Spruce Log",{hardness:2,isLog:!0})],[l.StrippedJungleLog,re(l.StrippedJungleLog,"Stripped Jungle Log",{hardness:2,isLog:!0})],[l.StrippedAcaciaLog,re(l.StrippedAcaciaLog,"Stripped Acacia Log",{hardness:2,isLog:!0})],[l.StrippedDarkOakLog,re(l.StrippedDarkOakLog,"Stripped Dark Oak Log",{hardness:2,isLog:!0})],[l.StrippedCherryLog,re(l.StrippedCherryLog,"Stripped Cherry Log",{hardness:2,isLog:!0})],[l.StrippedMangroveLog,re(l.StrippedMangroveLog,"Stripped Mangrove Log",{hardness:2,isLog:!0})],[l.OakLeaves,re(l.OakLeaves,"Oak Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.OakSapling,dropChance:.05})],[l.BirchLeaves,re(l.BirchLeaves,"Birch Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.BirchSapling,dropChance:.05})],[l.SpruceLeaves,re(l.SpruceLeaves,"Spruce Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.SpruceSapling,dropChance:.05})],[l.JungleLeaves,re(l.JungleLeaves,"Jungle Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.JungleSapling,dropChance:.025})],[l.AcaciaLeaves,re(l.AcaciaLeaves,"Acacia Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.AcaciaSapling,dropChance:.05})],[l.DarkOakLeaves,re(l.DarkOakLeaves,"Dark Oak Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.DarkOakSapling,dropChance:.05})],[l.CherryLeaves,re(l.CherryLeaves,"Cherry Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!1,isLeaves:!0,drops:l.CherrySapling,dropChance:.05})],[l.MangroveLeaves,re(l.MangroveLeaves,"Mangrove Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:l.MangroveSapling,dropChance:.05})],[l.OakSapling,re(l.OakSapling,"Oak Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.BirchSapling,re(l.BirchSapling,"Birch Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.SpruceSapling,re(l.SpruceSapling,"Spruce Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.JungleSapling,re(l.JungleSapling,"Jungle Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.AcaciaSapling,re(l.AcaciaSapling,"Acacia Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.DarkOakSapling,re(l.DarkOakSapling,"Dark Oak Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.CherrySapling,re(l.CherrySapling,"Cherry Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.MangroveSapling,re(l.MangroveSapling,"Mangrove Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[l.OakPlanks,re(l.OakPlanks,"Oak Planks",{hardness:2})],[l.BirchPlanks,re(l.BirchPlanks,"Birch Planks",{hardness:2})],[l.SprucePlanks,re(l.SprucePlanks,"Spruce Planks",{hardness:2})],[l.JunglePlanks,re(l.JunglePlanks,"Jungle Planks",{hardness:2})],[l.AcaciaPlanks,re(l.AcaciaPlanks,"Acacia Planks",{hardness:2})],[l.DarkOakPlanks,re(l.DarkOakPlanks,"Dark Oak Planks",{hardness:2})],[l.CherryPlanks,re(l.CherryPlanks,"Cherry Planks",{hardness:2})],[l.MangrovePlanks,re(l.MangrovePlanks,"Mangrove Planks",{hardness:2})],[l.OakDoor,re(l.OakDoor,"Oak Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.BirchDoor,re(l.BirchDoor,"Birch Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.SpruceDoor,re(l.SpruceDoor,"Spruce Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.JungleDoor,re(l.JungleDoor,"Jungle Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.AcaciaDoor,re(l.AcaciaDoor,"Acacia Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.DarkOakDoor,re(l.DarkOakDoor,"Dark Oak Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.CherryDoor,re(l.CherryDoor,"Cherry Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.MangroveDoor,re(l.MangroveDoor,"Mangrove Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[l.OakTrapdoor,re(l.OakTrapdoor,"Oak Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.BirchTrapdoor,re(l.BirchTrapdoor,"Birch Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.SpruceTrapdoor,re(l.SpruceTrapdoor,"Spruce Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.JungleTrapdoor,re(l.JungleTrapdoor,"Jungle Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.AcaciaTrapdoor,re(l.AcaciaTrapdoor,"Acacia Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.DarkOakTrapdoor,re(l.DarkOakTrapdoor,"Dark Oak Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.CherryTrapdoor,re(l.CherryTrapdoor,"Cherry Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.MangroveTrapdoor,re(l.MangroveTrapdoor,"Mangrove Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[l.Cactus,re(l.Cactus,"Cactus",{hardness:.4,isTransparent:!0})],[l.CactusTop,re(l.CactusTop,"Cactus Top",{hardness:.4,isTransparent:!0,drops:l.Cactus})],[l.DeadBush,re(l.DeadBush,"Dead Bush",{isSolid:!1,isTransparent:!0,hardness:0})],[l.TallGrass,re(l.TallGrass,"Tall Grass",{isSolid:!1,isTransparent:!0,hardness:0,needsBiomeTint:!0,drops:null})],[l.Fern,re(l.Fern,"Fern",{isSolid:!1,isTransparent:!0,hardness:0,needsBiomeTint:!0,drops:null})],[l.Coral,re(l.Coral,"Coral",{isSolid:!1,isTransparent:!0,hardness:0})],[l.Seagrass,re(l.Seagrass,"Seagrass",{isSolid:!1,isTransparent:!0,hardness:0,drops:null})]]);function xn(i){const e=Yl.get(i);return e||(console.warn(`Unknown block type: ${i}, using Air properties`),Yl.get(l.Air))}function nh(i){return xn(i).isGravityAffected}function Hg(i){return xn(i).needsBiomeTint}function ih(i){return xn(i).isLog}function Gg(i){return xn(i).isSapling}function Vg(i){return xn(i).isDoor}function Wg(i){return xn(i).isTrapdoor}function Xg(i){return xn(i).undergroundLayers??[l.Dirt,l.Stone]}function Yg(i){const e=xn(i);return e.drops===null?null:{type:e.drops,chance:e.dropChance}}function $g(i){return xn(i).hardness}const qg=20,ra=1;function aa(i){return nh(i)}class jg{scene;fallingBlocks=new Map;nextId=0;blockMaterials=new Map;blockGeometry;placeBlock;removeBlock;getHeight;isSolid;getBlock;playerPosition=null;playerWidth=.6;pendingFallChecks=[];constructor(e,t,n,s,r,a){this.scene=e,this.placeBlock=t,this.removeBlock=n,this.getHeight=s,this.isSolid=r,this.getBlock=a,this.blockGeometry=new Dt(ra,ra,ra)}setBlockMaterials(e){this.blockMaterials=e}setPlayerPosition(e){this.playerPosition=e}spawnFallingBlock(e,t,n,s){let r=this.blockMaterials.get(s);if(!r){const c=s===l.Sand?12759680:s===l.RedSand?12479290:(s===l.Gravel,8947848);r=new so({color:c})}const a=new Ye(this.blockGeometry,r);a.position.set(e,t,n),this.scene.add(a);const o={id:this.nextId++,blockType:s,mesh:a,position:new N(e,t,n),velocity:0,startY:t,sourceX:Math.floor(e),sourceZ:Math.floor(n)};this.fallingBlocks.set(o.id,o),console.log(`🪨 Spawned falling ${l[s]} at (${e}, ${t}, ${n})`)}checkAndTriggerFall(e,t,n,s){if(s===void 0&&(s=this.getBlock(e,t,n)??void 0),s===void 0||!aa(s))return!1;const r=t-1,a=this.isSolid(e,r,n);return Array.from(this.fallingBlocks.values()).some(c=>Math.floor(c.position.x)===e&&Math.floor(c.position.z)===n&&Math.abs(c.position.y-t)<.5)||a?!1:(this.removeBlock(e,t,n),this.spawnFallingBlock(e,t,n,s),!0)}checkBlocksAbove(e,t,n){const s=t+1,r=this.getBlock(e,s,n);r!==null&&aa(r)&&this.checkAndTriggerFall(e,s,n,r)}update(e){const t=[],n=[];for(const[s,r]of this.fallingBlocks){r.velocity-=qg*e,r.velocity=Math.max(r.velocity,-40);const a=r.position.y+r.velocity*e,o=Math.floor(r.position.x),c=Math.floor(r.position.z);let h=this.findLandingY(o,c,r.position.y);if(a<=h){const u=Math.floor(h);this.pushPlayerAway(o,u,c),this.placeBlock(o,u,c,r.blockType)?(console.log(`🪨 ${l[r.blockType]} landed at (${o}, ${u}, ${c})`),t.push({x:o,y:u,z:c,blockType:r.blockType}),vt().playBlockPlace(r.blockType),this.pendingFallChecks.push({x:o,y:u+1,z:c})):this.placeBlock(o,u+1,c,r.blockType)?(console.log(`🪨 ${l[r.blockType]} landed at elevated position (${o}, ${u+1}, ${c})`),t.push({x:o,y:u+1,z:c,blockType:r.blockType}),vt().playBlockPlace(r.blockType)):console.log(`⚠️ ${l[r.blockType]} couldn't land at (${o}, ${u}, ${c})`),this.scene.remove(r.mesh),r.mesh.geometry.dispose(),n.push(s)}else r.position.y=a,r.mesh.position.y=a,r.mesh.rotation.x+=e*.5,r.mesh.rotation.z+=e*.3}for(const s of n)this.fallingBlocks.delete(s);for(;this.pendingFallChecks.length>0;){const s=this.pendingFallChecks.shift(),r=this.getBlock(s.x,s.y,s.z);r!==null&&aa(r)&&this.checkAndTriggerFall(s.x,s.y,s.z,r)}return t}findLandingY(e,t,n){let s=Math.floor(n);for(;s>0;){const a=s-1;if(this.isSolid(e,a,t)||Array.from(this.fallingBlocks.values()).some(c=>Math.floor(c.position.x)===e&&Math.floor(c.position.z)===t&&c.position.y<n&&c.position.y>=a))return s;s--}return this.getHeight(e,t)+1}pushPlayerAway(e,t,n){if(!this.playerPosition)return;const s=this.playerPosition.x,r=this.playerPosition.y,a=this.playerPosition.z,o=this.playerWidth/2,c=1.8,h=e,u=e+1,d=t,f=t+1,m=n,v=n+1,_=s-o,g=s+o,p=r,T=r+c,S=a-o,b=a+o,R=u>_&&h<g,L=f>p&&d<T,C=v>S&&m<b;if(R&&L&&C){const P=[{axis:"x",dist:u-_,dir:1},{axis:"x",dist:g-h,dir:-1},{axis:"z",dist:v-S,dir:1},{axis:"z",dist:b-m,dir:-1},{axis:"y",dist:f-p,dir:1}];P.sort((A,O)=>A.dist-O.dist);const y=P[0],x=y.dist+.1;y.axis==="x"?(this.playerPosition.x+=x*y.dir,console.log(`🏃 Player pushed ${y.dir>0?"+":"-"}X by ${x.toFixed(2)} to avoid falling block`)):y.axis==="z"?(this.playerPosition.z+=x*y.dir,console.log(`🏃 Player pushed ${y.dir>0?"+":"-"}Z by ${x.toFixed(2)} to avoid falling block`)):y.axis==="y"&&(this.playerPosition.y+=x,console.log(`🏃 Player pushed up by ${x.toFixed(2)} to avoid falling block`))}}getFallingBlockCount(){return this.fallingBlocks.size}hasFallingBlockAbove(e,t,n){for(const s of this.fallingBlocks.values())if(Math.floor(s.position.x)===e&&Math.floor(s.position.z)===t&&s.position.y>=n)return!0;return!1}destroy(){for(const e of this.fallingBlocks.values())this.scene.remove(e.mesh),e.mesh.geometry.dispose();this.fallingBlocks.clear(),this.blockGeometry.dispose()}}const Zg=3,Jg=5,Wn=new Dt(1,1,1);Wn.computeBoundingSphere();Wn.computeBoundingBox();const sh=7/9,mr=new Ss(1,1);mr.rotateX(-Math.PI/2);mr.translate(0,sh-.5,0);function Kg(){const i=new Xt,e=new Float32Array([-.5,0,-.5,.5,0,.5,.5,1,.5,-.5,0,-.5,.5,1,.5,-.5,1,-.5,.5,0,.5,-.5,0,-.5,-.5,1,-.5,.5,0,.5,-.5,1,-.5,.5,1,.5,-.5,0,.5,.5,0,-.5,.5,1,-.5,-.5,0,.5,.5,1,-.5,-.5,1,.5,.5,0,-.5,-.5,0,.5,-.5,1,.5,.5,0,-.5,-.5,1,.5,.5,1,-.5]),t=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1]),n=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);return i.setAttribute("position",new Et(e,3)),i.setAttribute("uv",new Et(t,2)),i.setAttribute("normal",new Et(n,3)),i}const $l=Kg();function on(i){return Vg(i)}function Qg(i){return Wg(i)}const e0={[l.OakDoor]:{bottom:"/textures/oak_door_bottom.png",top:"/textures/oak_door_top.png"},[l.BirchDoor]:{bottom:"/textures/birch_door_bottom.png",top:"/textures/birch_door_top.png"},[l.SpruceDoor]:{bottom:"/textures/spruce_door_bottom.png",top:"/textures/spruce_door_top.png"},[l.JungleDoor]:{bottom:"/textures/jungle_door_bottom.png",top:"/textures/jungle_door_top.png"},[l.AcaciaDoor]:{bottom:"/textures/acacia_door_bottom.png",top:"/textures/acacia_door_top.png"},[l.DarkOakDoor]:{bottom:"/textures/dark_oak_door_bottom.png",top:"/textures/dark_oak_door_top.png"},[l.CherryDoor]:{bottom:"/textures/cherry_door_bottom.png",top:"/textures/cherry_door_top.png"},[l.MangroveDoor]:{bottom:"/textures/mangrove_door_bottom.png",top:"/textures/mangrove_door_top.png"}},ao=3/16;function t0(){const i=new Xt,e=.5,t=ao/2,n=1,s=.5-t,r=new Float32Array([-e,0,s+t,e,0,s+t,e,n,s+t,-e,0,s+t,e,n,s+t,-e,n,s+t,e,0,s-t,-e,0,s-t,-e,n,s-t,e,0,s-t,-e,n,s-t,e,n,s-t,-e,0,s-t,-e,0,s+t,-e,n,s+t,-e,0,s-t,-e,n,s+t,-e,n,s-t,e,0,s+t,e,0,s-t,e,n,s-t,e,0,s+t,e,n,s-t,e,n,s+t,-e,n,s+t,e,n,s+t,e,n,s-t,-e,n,s+t,e,n,s-t,-e,n,s-t,-e,0,s-t,e,0,s-t,e,0,s+t,-e,0,s-t,e,0,s+t,-e,0,s-t]),a=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,.4,0,.6,0,.6,1,.4,0,.6,1,.4,1,.4,0,.6,0,.6,1,.4,0,.6,1,.4,1,0,.4,1,.4,1,.6,0,.4,1,.6,0,.6,0,.4,1,.4,1,.6,0,.4,1,.6,0,.6]),o=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]);return i.setAttribute("position",new Et(r,3)),i.setAttribute("uv",new Et(a,2)),i.setAttribute("normal",new Et(o,3)),i}const qs=t0();function n0(i){const e=new Dt(1,i,1);e.translate(0,i/2,0);const t=e.getAttribute("uv"),n=e.getAttribute("normal");for(let s=0;s<t.count;s++)if(Math.abs(n.getY(s))<.5){const r=t.getY(s);t.setY(s,(1-r)*i)}return t.needsUpdate=!0,e}class i0{scene;generator;textureManager;chunks=new Map;chunkData=new Map;chunkRevision=0;brokenBlocks=new Map;placedBlocks=new Map;doorStates=new Map;doorMaterials=new Map;lastPlayerChunkX=-999;lastPlayerChunkZ=-999;loadRadius=Zg;unloadRadius=Jg;currentZoom=10;treeLOD=0;fastGraphics=!1;fallingBlockManager;playerPosition=null;constructor(e,t,n){this.scene=e,this.generator=t,this.textureManager=n,this.fallingBlockManager=new jg(e,(s,r,a,o)=>this.placeBlockInternal(s,r,a,o),(s,r,a)=>this.removeBlockInternal(s,r,a),(s,r)=>this.getHeightAt(s,r),(s,r,a)=>this.isSolidAt(s,r,a),(s,r,a)=>this.getBlockTypeAt(s,r,a)),this.initFallingBlockMaterials()}initFallingBlockMaterials(){const e=new Map;e.set(l.Sand,this.textureManager.getMaterial(l.Sand)),e.set(l.Gravel,this.textureManager.getMaterial(l.Gravel)),e.set(l.RedSand,this.textureManager.getMaterial(l.RedSand)),this.fallingBlockManager.setBlockMaterials(e)}setZoom(e){this.currentZoom=e,this.updateTreeLOD()}setFastGraphics(e){this.fastGraphics=e,this.updateTreeLOD()}updateTreeLOD(){let e=0;this.fastGraphics?this.currentZoom>45?e=2:this.currentZoom>35&&(e=1):this.currentZoom>55?e=2:this.currentZoom>45&&(e=1),e!==this.treeLOD&&(this.treeLOD=e,this.applyTreeLOD())}applyTreeLOD(){}setRenderDistance(e){this.loadRadius=Math.max(2,Math.min(8,e)),this.unloadRadius=this.loadRadius+2,this.lastPlayerChunkX=-999,this.lastPlayerChunkZ=-999}getRenderDistance(){return this.loadRadius}setPlayerPosition(e){this.playerPosition=e,this.fallingBlockManager.setPlayerPosition(e)}update(e,t){const n=Math.floor(e/X),s=Math.floor(t/X);if(!(n===this.lastPlayerChunkX&&s===this.lastPlayerChunkZ)){this.lastPlayerChunkX=n,this.lastPlayerChunkZ=s;for(let r=-this.loadRadius;r<=this.loadRadius;r++)for(let a=-this.loadRadius;a<=this.loadRadius;a++){const o=n+r,c=s+a,h=`${o},${c}`;this.chunks.has(h)||this.loadChunk(o,c)}for(const[r,a]of this.chunks){const[o,c]=r.split(",").map(Number),h=Math.abs(o-n),u=Math.abs(c-s);(h>this.unloadRadius||u>this.unloadRadius)&&this.unloadChunk(r,a)}}}updateFallingBlocks(e){const t=this.fallingBlockManager.update(e),n=new Set;for(const s of t){const r=Math.floor(s.x/X),a=Math.floor(s.z/X);n.add(`${r},${a}`)}for(const s of n){const[r,a]=s.split(",").map(Number);this.rebuildChunk(r,a)}}getFallingBlockCount(){return this.fallingBlockManager.getFallingBlockCount()}loadChunk(e,t){const n=`${e},${t}`,s=this.generator.generateChunk(e,t);this.chunkData.set(n,s);const r=new Vt;r.name=`chunk_${n}`;const a=e*X,o=t*X;this.createTreeMeshes(r,s,a,o),this.createTerrainMesh(r,s,a,o),this.scene.add(r),this.chunks.set(n,r),this.chunkRevision++}createTerrainMesh(e,t,n,s){const r=Math.floor(n/X),a=Math.floor(s/X),o=`${r},${a}`,c=new Map,h=new Map,u=new Map,d=(m,v,_,g,p)=>{if(g===l.Air)return;const T=this.textureManager.needsBiomeTint(g)||g===l.Water,S=T?`${g}_${p}`:`${g}`;c.has(S)||(c.set(S,[]),h.set(S,g),T&&u.set(S,p)),c.get(S).push(new N(m,v,_))};for(let m=0;m<X;m++)for(let v=0;v<X;v++){const _=m*X+v,g=t.heightMap[_],p=t.topBlock[_],T=t.biomeMap[_],S=n+v,b=Math.floor(g),R=s+m,L=this.getUndergroundLayersForBlock(p);this.isBlockBroken(S,b,R)||d(S,b,R,p,T);const C=b-1;this.isBlockBroken(S,C,R)||d(S,C,R,L[0],T);const P=b-2;this.isBlockBroken(S,P,R)||d(S,P,R,L[1],T);const y=b-3;this.isBlockBroken(S,y,R)||d(S,y,R,l.Bedrock,T)}const f=this.placedBlocks.get(o);if(f)for(const[m,v]of f){const[_,g,p]=m.split(",").map(Number),T=(_%X+X)%X,b=(p%X+X)%X*X+T,R=t.biomeMap[b]||1;d(_,g,p,v,R)}for(const[m,v]of c){if(v.length===0)continue;const _=h.get(m),g=u.get(m),p=_===l.Water,T=Gg(_),S=ih(_);if(_===l.Grass||_===l.Podzol||_===l.Mycelium){const y=g!==void 0?this.textureManager.getBiomeTint(g):void 0,x=this.textureManager.getInstancedMaterial(_,y),A=new ns(Wn,x,v.length),O=new Ze;v.forEach((F,Y)=>{O.setPosition(F.x,F.y,F.z),A.setMatrixAt(Y,O)}),A.instanceMatrix.needsUpdate=!0,A.frustumCulled=!0,A.castShadow=!0,A.receiveShadow=!0,e.add(A);continue}if(S){const y=this.textureManager.getInstancedMaterial(_),x=new ns(Wn,y,v.length),A=new Ze;v.forEach((O,F)=>{A.setPosition(O.x,O.y,O.z),x.setMatrixAt(F,A)}),x.instanceMatrix.needsUpdate=!0,x.frustumCulled=!0,x.castShadow=!0,x.receiveShadow=!0,e.add(x);continue}if(T){const y=this.textureManager.getSaplingMaterial(_);for(const x of v){const A=new Ye($l,y);A.position.set(x.x,x.y,x.z),e.add(A)}continue}if(on(_)){for(const y of v){const x=this.getBlockTypeAt(y.x,y.y-1,y.z);if(x!==null&&on(x))continue;const A=this.createDoorMesh(_,y.x,y.y,y.z);e.add(A)}continue}if(Qg(_)){const y=this.textureManager.getSaplingMaterial(_);for(const x of v){const A=new Dt(1,.1875,1);A.translate(0,3/32,0);const O=new Ye(A,y);O.position.set(x.x,x.y,x.z),e.add(O)}continue}let R;p?R=this.textureManager.getWaterMaterial(g):g!==void 0?R=this.textureManager.getInstancedLeavesMaterial(_,g):R=this.textureManager.getInstancedMaterial(_);const L=p?mr:Wn,C=new ns(L,R,v.length),P=new Ze;v.forEach((y,x)=>{P.setPosition(y.x,y.y,y.z),C.setMatrixAt(x,P)}),C.instanceMatrix.needsUpdate=!0,C.frustumCulled=!0,C.castShadow=!0,C.receiveShadow=!0,p?C.renderOrder=0:g!==void 0&&(C.renderOrder=2),e.add(C)}}getUndergroundLayersForBlock(e){return Xg(e)}createTreeMeshes(e,t,n,s){if(!t.trees||t.trees.length===0)return;const r=new Set,a=new Map,o=[];for(const h of t.trees){const u=h.z*X+h.x,d=t.heightMap[u],f=t.biomeMap[u],m=hr[h.type],v=ur[h.type],_=n+h.x,g=d+1,p=s+h.z;if(h.blocks&&h.blocks.length>0&&h.blocks[0].type==="cactus"){const T=h.blocks.filter(S=>S.type==="cactus").length;if(T>0){const S=this.textureManager.getCactusMaterials(),b=n0(T),R=new Ye(b,S);R.position.set(_,g,p),e.add(R);for(let L=0;L<T;L++)r.add(`${_},${g+L},${p}`)}continue}if(h.blocks)for(const T of h.blocks){const S=_+T.dx,b=g+T.dy,R=p+T.dz,L=`${S},${b},${R}`;if(!r.has(L))if(r.add(L),T.type==="leaves"){const C=`${v}_${f}`;a.has(C)||a.set(C,[]),a.get(C).push(new N(S,b,R))}else T.type==="log"&&o.push({pos:new N(S,b,R),logType:m})}}for(const[h,u]of a){if(u.length===0)continue;const[d,f]=h.split("_"),m=parseInt(d),v=parseInt(f),_=this.textureManager.getInstancedLeavesMaterial(m,v),g=new ns(Wn,_,u.length);g.name=`leaves_instanced_${h}`,g.renderOrder=2,g.frustumCulled=!0,g.castShadow=!0,g.receiveShadow=!1;const p=new Ze;for(let T=0;T<u.length;T++){const S=u[T];p.setPosition(S.x,S.y,S.z),g.setMatrixAt(T,p)}g.instanceMatrix.needsUpdate=!0,e.add(g)}const c=new Map;for(const{pos:h,logType:u}of o)c.has(u)||c.set(u,[]),c.get(u).push(h);for(const[h,u]of c){if(u.length===0)continue;const d=this.textureManager.getInstancedMaterial(h),f=new ns(Wn,d,u.length);f.name=`logs_instanced_${h}`,f.frustumCulled=!0,f.castShadow=!0,f.receiveShadow=!0;const m=new Ze;for(let v=0;v<u.length;v++){const _=u[v];m.setPosition(_.x,_.y,_.z),f.setMatrixAt(v,m)}f.instanceMatrix.needsUpdate=!0,e.add(f)}e.updateMatrixWorld(!0)}unloadChunk(e,t){this.scene.remove(t),this.disposeChunkOwnedGeometries(t),this.chunks.delete(e),this.chunkData.delete(e),this.chunkRevision++}disposeChunkOwnedGeometries(e){const t=new Set([Wn,mr,$l,qs]),n=new Set;e.traverse(s=>{if(!(s instanceof Ye))return;const r=s.geometry;!r||t.has(r)||n.has(r)||(r.dispose(),n.add(r))})}getHeightAt(e,t){const n=Math.floor(e),s=Math.floor(t),r=Math.floor(n/X),a=Math.floor(s/X),o=`${r},${a}`;let c=64;const h=this.chunkData.get(o);if(h){const v=(n%X+X)%X,g=(s%X+X)%X*X+v,p=h.heightMap[g];p!==void 0&&!isNaN(p)&&(c=Math.floor(p))}else{const v=this.generator.getHeightAt(n,s);c=v===void 0||isNaN(v)?64:Math.floor(v)}const u=this.placedBlocks.get(o);let d=-1/0;if(u&&u.size>0)for(const v of u.keys()){const[_,g,p]=v.split(",").map(Number);_===n&&p===s&&g>d&&(d=g)}const f=Math.max(c,d),m=c-3;for(let v=f;v>=m;v--)if(u&&u.has(`${n},${v},${s}`)||v<=c&&v>=c-3&&!this.isBlockBroken(n,v,s))return v;return c-4}getHeightAtForPlayer(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(s/X),o=Math.floor(r/X),c=`${a},${o}`;let h=64;const u=this.chunkData.get(c);if(u){const v=(s%X+X)%X,g=(r%X+X)%X*X+v,p=u.heightMap[g];p!==void 0&&!isNaN(p)&&(h=Math.floor(p))}else{const v=this.generator.getHeightAt(s,r);h=v===void 0||isNaN(v)?64:Math.floor(v)}const f=Math.floor(n-1)+1,m=h-10;for(let v=f;v>=m;v--)if(this.isSolidBlockAt(s,v,r)&&!this.isSolidBlockAt(s,v+1,r)&&!this.isSolidBlockAt(s,v+2,r))return v;return h-4}isSolidBlockAt(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n);return this.isSolidAt(s,r,a)}getSurfaceHeightAt(e,t){const n=this.getHeightAt(e,t);return n===void 0||isNaN(n)?64:this.getBlockAt(Math.floor(e),n,Math.floor(t))===l.Water?n+sh-.5:n}getBlockAt(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=Math.floor(s/X),c=Math.floor(a/X),h=`${o},${c}`,u=this.getPlacedBlock(s,r,a);if(u!==null)return u;if(this.isBlockBroken(s,r,a))return l.Air;const d=this.chunkData.get(h);if(!d)return null;const f=(s%X+X)%X,v=(a%X+X)%X*X+f,_=Math.floor(d.heightMap[v]);if(d.trees){const p=o*X,T=c*X;for(const S of d.trees){const b=S.z*X+S.x,R=d.heightMap[b],L=p+S.x,C=R+1,P=T+S.z;if(S.blocks)for(const y of S.blocks){const x=L+y.dx,A=C+y.dy,O=P+y.dz;if(x===s&&A===r&&O===a){if(y.type==="leaves")return ur[S.type];if(y.type==="log")return hr[S.type];if(y.type==="cactus")return l.Cactus}}}}if(r===_)return d.topBlock[v];const g=_-r;if(g>=1&&g<=3){const p=d.topBlock[v],T=this.getUndergroundLayersForBlock(p);if(g===1)return T[0];if(g===2)return T[1];if(g===3)return l.Bedrock}return r<=_?d.topBlock[v]:null}getChunkCount(){return this.chunks.size}getChunkRevision(){return this.chunkRevision}removeBlock(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r,a);if(o===null||o===l.Air||o===l.Water)return null;const c=new Set,h=[],u=(d,f,m)=>{if(!this.removeBlockDataNoRebuild(d,f,m))return;const v=Math.floor(d/X),_=Math.floor(m/X);c.add(`${v},${_}`),h.push({x:d,y:f,z:m})};if(on(o)){const d=this.getDoorStateKey(s,r,a),[f,m,v]=d.split(",").map(Number);this.doorStates.delete(d),u(f,m,v),u(f,m+1,v)}else u(s,r,a);for(const d of c){const[f,m]=d.split(",").map(Number);this.rebuildChunk(f,m)}for(const d of h)this.fallingBlockManager.checkBlocksAbove(d.x,d.y,d.z);return o}removeBlockDataNoRebuild(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r,a);if(o===null||o===l.Air||o===l.Water)return!1;const c=Math.floor(s/X),h=Math.floor(a/X),u=`${c},${h}`,d=`${s},${r},${a}`,f=this.placedBlocks.get(u);f&&f.has(d)?f.delete(d):(this.brokenBlocks.has(u)||this.brokenBlocks.set(u,new Set),this.brokenBlocks.get(u).add(d));const m=this.chunkData.get(u);if(!m)return!0;if(m.trees)for(const v of m.trees){if(!v.blocks)continue;const _=c*X+v.x,g=h*X+v.z,p=v.z*X+v.x,T=Math.floor(m.heightMap[p])+1;for(let S=v.blocks.length-1;S>=0;S--){const b=v.blocks[S],R=_+b.dx,L=T+b.dy,C=g+b.dz;if(R===s&&L===r&&C===a){v.blocks.splice(S,1);break}}}return!0}rebuildChunk(e,t){const n=`${e},${t}`,s=this.chunkData.get(n),r=this.chunks.get(n);if(!s||!r)return;this.scene.remove(r),this.disposeChunkOwnedGeometries(r);const a=new Vt;a.name=`chunk_${n}`;const o=e*X,c=t*X;this.createTreeMeshes(a,s,o,c),this.createTerrainMesh(a,s,o,c),this.scene.add(a),this.chunks.set(n,a),this.chunkRevision++}isBlockBroken(e,t,n){const s=Math.floor(e/X),r=Math.floor(n/X),a=`${s},${r}`,o=this.brokenBlocks.get(a);return o?o.has(`${Math.floor(e)},${Math.floor(t)},${Math.floor(n)}`):!1}removeBlockInternal(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r,a);if(o===null||o===l.Air||o===l.Water)return null;this.removeBlockDataNoRebuild(s,r,a);const c=Math.floor(s/X),h=Math.floor(a/X);return this.rebuildChunk(c,h),o}placeBlockInternal(e,t,n,s){const r=Math.floor(e),a=Math.floor(t),o=Math.floor(n);if(s===l.Air||s===l.Water)return!1;const c=this.getBlockTypeAt(r,a,o);if(c!==null&&c!==l.Air)return!1;const h=Math.floor(r/X),u=Math.floor(o/X),d=`${h},${u}`;this.placedBlocks.has(d)||this.placedBlocks.set(d,new Map);const f=`${r},${a},${o}`;this.placedBlocks.get(d).set(f,s);const m=this.brokenBlocks.get(d);return m&&m.delete(f),!0}placeBlockDataNoRebuild(e,t,n,s){const r=Math.floor(e),a=Math.floor(t),o=Math.floor(n),c=Math.floor(r/X),h=Math.floor(o/X),u=`${c},${h}`,d=`${r},${a},${o}`;this.placedBlocks.has(u)||this.placedBlocks.set(u,new Map),this.placedBlocks.get(u).set(d,s);const f=this.brokenBlocks.get(u);f&&f.delete(d)}canPlaceIntoCell(e,t,n){const s=this.getBlockTypeAt(e,t,n);return s===null||s===l.Air}placeDoorBlock(e,t,n,s){if(!this.canPlaceIntoCell(e,t,n)||!this.canPlaceIntoCell(e,t+1,n)||!this.isSolidAt(e,t-1,n))return!1;this.placeBlockDataNoRebuild(e,t,n,s),this.placeBlockDataNoRebuild(e,t+1,n,s);const r=`${Math.floor(e)},${Math.floor(t)},${Math.floor(n)}`;this.doorStates.set(r,{open:!1,facing:0});const a=Math.floor(e/X),o=Math.floor(n/X);return this.rebuildChunk(a,o),!0}placeBlock(e,t,n,s){const r=Math.floor(e),a=Math.floor(t),o=Math.floor(n);if(s===l.Air||s===l.Water)return!1;if(on(s))return this.placeDoorBlock(r,a,o,s);const c=this.getBlockTypeAt(r,a,o);if(c!==null&&c!==l.Air)return!1;if(nh(s)){const v=a-1;if(!this.isSolidAt(r,v,o))return this.fallingBlockManager.spawnFallingBlock(r,a,o,s),!0}const h=Math.floor(r/X),u=Math.floor(o/X),d=`${h},${u}`;this.placedBlocks.has(d)||this.placedBlocks.set(d,new Map);const f=`${r},${a},${o}`;this.placedBlocks.get(d).set(f,s);const m=this.brokenBlocks.get(d);return m&&m.delete(f),this.rebuildChunk(h,u),!0}getPlacedBlock(e,t,n){const s=Math.floor(e/X),r=Math.floor(n/X),a=`${s},${r}`,o=this.placedBlocks.get(a);if(!o)return null;const c=`${Math.floor(e)},${Math.floor(t)},${Math.floor(n)}`;return o.get(c)||null}createDoorMesh(e,t,n,s){const r=new Vt,a=`${Math.floor(t)},${Math.floor(n)},${Math.floor(s)}`,o=this.getDoorStateKey(t,n,s);let c=this.doorStates.get(o);c||(c={open:!1,facing:0},this.doorStates.set(o,c)),a!==o&&this.doorStates.delete(a);const h=e0[e];if(!h){const S=this.textureManager.getSaplingMaterial(e),b=new Ye(qs.clone(),S);return r.add(b),r.position.set(t,n,s),r}const u=`door_bottom_${e}`,d=`door_top_${e}`;let f=this.doorMaterials.get(u),m=this.doorMaterials.get(d);const v=new yr;if(!f){const S=v.load(h.bottom);S.magFilter=et,S.minFilter=et,S.colorSpace=xt,f=new so({map:S,side:Tt,transparent:!0,alphaTest:.5}),this.doorMaterials.set(u,f)}if(!m){const S=v.load(h.top);S.magFilter=et,S.minFilter=et,S.colorSpace=xt,m=new so({map:S,side:Tt,transparent:!0,alphaTest:.5}),this.doorMaterials.set(d,m)}const _=new Vt,g=new Ye(qs.clone(),f);g.position.set(0,0,0),_.add(g);const p=new Ye(qs.clone(),m);p.position.set(0,1,0),_.add(p);const T=c.facing*Math.PI/2;return c.open?(_.position.set(-.5,0,.5-ao/2),_.rotation.y=T-Math.PI/2,_.position.x+=.5*Math.cos(T-Math.PI/2)+.5*Math.cos(T),_.position.z+=.5*Math.sin(T-Math.PI/2)+.5*Math.sin(T)+(.5-ao/2)):_.rotation.y=T,r.add(_),r.position.set(t,n,s),r.userData={isDoor:!0,blockType:e,posKey:o},r}toggleDoor(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r,a);if(!o||!on(o)){const m=this.getBlockTypeAt(s,r-1,a);return m&&on(m)?this.toggleDoor(s,r-1,a):!1}const c=this.getDoorStateKey(s,r,a),h=`${s},${r},${a}`;let u=this.doorStates.get(c);u||(u={open:!1,facing:0}),u.open=!u.open,this.doorStates.set(c,u),h!==c&&this.doorStates.delete(h),console.log(`🚪 Door at (${c}) is now ${u.open?"OPEN":"CLOSED"}`);const d=Math.floor(s/X),f=Math.floor(a/X);return this.rebuildChunk(d,f),!0}isDoorOpen(e,t,n){const s=this.getDoorStateKey(e,t,n);return this.doorStates.get(s)?.open??!1}getBlockTypeAt(e,t,n){const s=Math.floor(e/X),r=Math.floor(n/X),a=`${s},${r}`,o=this.getPlacedBlock(e,t,n);if(o!==null)return o;if(this.isBlockBroken(e,t,n))return null;const c=this.chunkData.get(a);if(!c)return null;const h=(Math.floor(e)%X+X)%X,d=(Math.floor(n)%X+X)%X*X+h,f=Math.floor(c.heightMap[d]),m=Math.floor(t);if(m===f)return c.topBlock[d];const v=f-m;if(v>=1&&v<=3){const _=c.topBlock[d],g=this.getUndergroundLayersForBlock(_);if(v===1)return g[0];if(v===2)return g[1];if(v===3)return l.Bedrock}if(c.trees){for(const _ of c.trees)if(_.blocks){const g=s*X+_.x,p=r*X+_.z,T=c.heightMap[_.z*X+_.x]+1;for(const S of _.blocks){const b=g+S.dx,R=T+S.dy,L=p+S.dz;if(Math.floor(e)===b&&Math.floor(t)===R&&Math.floor(n)===L){if(S.type==="log")return hr[_.type];if(S.type==="leaves")return ur[_.type];if(S.type==="cactus")return l.Cactus}}}}return null}isSolidAt(e,t,n){const s=this.getBlockTypeAt(e,t,n);if(s===null)return!1;const r=xn(s);if(!r.isSolid)return!1;if(r.isDoor){const a=Math.floor(e),o=Math.floor(t),c=Math.floor(n),h=this.getDoorStateKey(a,o,c);if(this.doorStates.get(h)?.open)return!1}return!0}getDoorStateKey(e,t,n){const s=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=this.getBlockTypeAt(s,r+1,a),c=this.getBlockTypeAt(s,r-1,a),h=o!==null&&on(o),d=c!==null&&on(c)&&!h?r-1:r;return`${s},${d},${a}`}checkCollision(e,t,n,s=.6,r=1.8){const a=s/2,o=[{x:e-a,y:t,z:n-a},{x:e+a,y:t,z:n-a},{x:e-a,y:t,z:n+a},{x:e+a,y:t,z:n+a},{x:e-a,y:t+1,z:n-a},{x:e+a,y:t+1,z:n-a},{x:e-a,y:t+1,z:n+a},{x:e+a,y:t+1,z:n+a}];for(const c of o)if(this.isSolidAt(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))return!0;return!1}checkHeadCollision(e,t,n,s=.6,r=1.8){const a=s/2,o=t+r,c=[{x:e-a,z:n-a},{x:e+a,z:n-a},{x:e-a,z:n+a},{x:e+a,z:n+a}];for(const h of c)if(this.isSolidAt(Math.floor(h.x),Math.floor(o),Math.floor(h.z)))return!0;return!1}canStandAt(e,t,n,s=.6){const r=s/2,a=[{x:e-r,z:n-r},{x:e+r,z:n-r},{x:e-r,z:n+r},{x:e+r,z:n+r}];for(const o of a){const h=this.getHeightAtForPlayer(o.x,o.z,t)+1,u=t-h;if(u>=-.1&&u<=.5)return!0}return!1}getStandingHeightAt(e,t,n,s=.6){const r=s/2,a=[{x:e-r,z:t-r},{x:e+r,z:t-r},{x:e-r,z:t+r},{x:e+r,z:t+r}];let o=-1/0;for(const c of a){const h=this.getHeightAtForPlayer(c.x,c.z,n);h>o&&(o=h)}return o+1}destroy(){for(const[e,t]of this.chunks)this.unloadChunk(e,t);this.fallingBlockManager.destroy()}}const js=10,ql=25,s0=.3,r0=.7;class wr{name="grounded";isCrouching=!1;enter(e){e.setJumpVelocity(0),e.setJumpProgress(0),e.setIsJumping(!1),e.setSwimmingInternal(!1),e.syncBaseY()}exit(e){this.isCrouching=!1}update(e,t){return null}handleJump(e){return this.isCrouching?null:new rh}handleCrouch(e,t){this.isCrouching=t,e.setCrouchingInternal(t)}handleWaterChange(e,t){return t?new ah:null}getSpeedMultiplier(){return this.isCrouching?s0:1}canJump(){return!0}canCrouch(){return!0}getDisplayName(){return this.isCrouching?"crouching":"grounded"}}class rh{name="jumping";jumpVelocity=js;baseY=0;terrainY=0;constructor(e=js){this.jumpVelocity=e}enter(e){this.jumpVelocity<=0?this.baseY=-1e3:this.baseY=e.position.y,this.terrainY=e.position.y,e.setJumpVelocity(this.jumpVelocity),e.setIsJumping(!0),e.setCrouchingInternal(!1)}exit(e){e.setIsJumping(!1),e.setJumpVelocity(0)}update(e,t){e.position.y+=this.jumpVelocity*t,this.jumpVelocity-=ql*t,e.setJumpVelocity(this.jumpVelocity);const n=e.position.y-this.baseY,s=js*js/(2*ql),r=Math.max(0,Math.min(1,n/s));e.setJumpProgress(r);const a=Math.max(this.baseY,this.terrainY);return e.position.y<=a&&this.jumpVelocity<0?(e.position.y=a,e.triggerLandingSquash(),new wr):null}handleJump(e){return null}handleCrouch(e,t){}handleWaterChange(e,t){return t?new ah:null}getSpeedMultiplier(){return 1}canJump(){return!1}canCrouch(){return!1}updateBaseY(e){e>this.baseY&&(this.baseY=e)}getBaseY(){return this.baseY}setTerrainY(e){this.terrainY=e}handleCeilingHit(e,t){this.jumpVelocity>0&&(e.position.y=t,this.jumpVelocity=-.5,e.setJumpVelocity(this.jumpVelocity))}getDisplayName(){return this.jumpVelocity>0?"jumping":"falling"}}class ah{name="swimming";enter(e){e.setSwimmingInternal(!0),e.setCrouchingInternal(!1),e.setIsJumping(!1)}exit(e){e.setSwimmingInternal(!1)}update(e,t){return null}handleJump(e){return null}handleCrouch(e,t){}handleWaterChange(e,t){return t?null:new wr}getSpeedMultiplier(){return r0}canJump(){return!1}canCrouch(){return!1}getDisplayName(){return"swimming"}}class a0{currentState;player;constructor(e,t=new wr){this.player=e,this.currentState=t,this.currentState.enter(e)}getStateName(){return this.currentState.getDisplayName()}getCurrentState(){return this.currentState}transitionTo(e){this.currentState.exit(this.player),this.currentState=e,this.currentState.enter(this.player)}update(e){const t=this.currentState.update(this.player,e);t&&this.transitionTo(t)}handleJump(){const e=this.currentState.handleJump(this.player);return e?(this.transitionTo(e),!0):!1}handleCrouch(e){this.currentState.handleCrouch(this.player,e)}handleWaterChange(e){const t=this.currentState.handleWaterChange(this.player,e);t&&this.transitionTo(t)}getSpeedMultiplier(){return this.currentState.getSpeedMultiplier()}canJump(){return this.currentState.canJump()}canCrouch(){return this.currentState.canCrouch()}forceState(e){this.transitionTo(e)}updateTerrainY(e){this.currentState.name==="jumping"&&this.currentState.setTerrainY(e)}handleFall(){return this.currentState.name==="grounded"?(this.transitionTo(new rh(0)),!0):!1}isInAir(){return this.currentState.name==="jumping"}handleCeilingHit(e){return this.currentState.name==="jumping"?(this.currentState.handleCeilingHit(this.player,e),!0):!1}getJumpVelocity(){return this.currentState.name==="jumping"?this.player.getJumpVelocity():0}}const Zs=64;function qe(i,e,t,n){return{u:i/Zs,v:1-(e+n)/Zs,uw:t/Zs,vh:n/Zs}}const Ci={head:{front:qe(8,8,8,8),back:qe(24,8,8,8),top:qe(8,0,8,8),bottom:qe(16,0,8,8),right:qe(16,8,8,8),left:qe(0,8,8,8)},body:{front:qe(20,20,8,12),back:qe(32,20,8,12),top:qe(20,16,8,4),bottom:qe(28,16,8,4),right:qe(16,20,4,12),left:qe(28,20,4,12)},rightArm:{front:qe(44,20,4,12),back:qe(52,20,4,12),top:qe(44,16,4,4),bottom:qe(48,16,4,4),right:qe(40,20,4,12),left:qe(48,20,4,12)},leftArm:{front:qe(36,52,4,12),back:qe(44,52,4,12),top:qe(36,48,4,4),bottom:qe(40,48,4,4),right:qe(40,52,4,12),left:qe(32,52,4,12)},rightLeg:{front:qe(4,20,4,12),back:qe(12,20,4,12),top:qe(4,16,4,4),bottom:qe(8,16,4,4),right:qe(0,20,4,12),left:qe(8,20,4,12)},leftLeg:{front:qe(20,52,4,12),back:qe(28,52,4,12),top:qe(20,48,4,4),bottom:qe(24,48,4,4),right:qe(24,52,4,12),left:qe(16,52,4,12)}},o0=.46634,jl=1,Zl=1,l0=.4,c0=-2.5,h0=.3,Jl=.15,Kl=.15,Ql=.5,u0=12,d0=-1.8,oa=.25,la=4,f0=8,p0=10,m0={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3};class g0{position;mesh;scene;stateMachine;head;body;leftArm;rightArm;leftLeg;rightLeg;shadow;limbSwing=0;limbSwingAmount=0;previousPosition;_isJumping=!1;_jumpVelocity=0;baseY=64;_jumpProgress=0;landingSquashTimer=0;_isCrouching=!1;crouchAmount=0;_isSwimming=!1;swimAmount=0;swimCycle=0;swimPose=m0;isPunching=!1;punchProgress=0;punchTimer=0;texture=null;material=null;currentBlockType=l.Grass;footstepDistance=0;wasSwimming=!1;FOOTSTEP_INTERVAL=1.8;constructor(e,t,n){this.scene=e,this.position=new N(t,64,n),this.previousPosition=this.position.clone(),this.stateMachine=new a0(this,new wr),this.mesh=this.createPlaceholderMesh(),this.mesh.rotation.order="YXZ",this.setMeshRenderOrder(this.mesh,-5),this.mesh.position.copy(this.position),e.add(this.mesh),this.createShadow(),this.loadTexture()}async loadTexture(){return new Promise(e=>{new yr().load("/texturepack/assets/minecraft/textures/entity/player/wide/steve.png",n=>{n.magFilter=et,n.minFilter=et,n.colorSpace=xt,this.texture=n,this.scene.remove(this.mesh),this.mesh.traverse(s=>{s instanceof Ye&&(s.geometry.dispose(),s.material instanceof Gt&&s.material.dispose())}),this.mesh=this.createPlayerMesh(),this.mesh.rotation.order="YXZ",this.setMeshRenderOrder(this.mesh,-5),this.mesh.position.copy(this.position),this.scene.add(this.mesh),e()},void 0,()=>{console.warn("Failed to load Steve texture, using placeholder colors"),e()})})}createPlaceholderMesh(){const e=new Vt,t=new Vn({color:13014380,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),n=new Vn({color:47288,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),s=new Vn({color:3881912,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),r=new Vn({color:4863784,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),a=1.62/32,o=new Dt(8*a,8*a,8*a);this.head=new Ye(o,t),this.head.position.y=24*a+4*a,e.add(this.head);const c=new Dt(8.2*a,2*a,8.2*a),h=new Ye(c,r);h.position.y=29*a,e.add(h);const u=new Dt(8*a,12*a,4*a);return this.body=new Ye(u,n),this.body.position.y=12*a+6*a,e.add(this.body),this.rightArm=this.createLimbGroup(4*a,12*a,4*a,t),this.rightArm.position.set(-6*a,24*a,0),e.add(this.rightArm),this.leftArm=this.createLimbGroup(4*a,12*a,4*a,t),this.leftArm.position.set(6*a,24*a,0),e.add(this.leftArm),this.rightLeg=this.createLimbGroup(4*a,12*a,4*a,s),this.rightLeg.position.set(-2*a,12*a,0),e.add(this.rightLeg),this.leftLeg=this.createLimbGroup(4*a,12*a,4*a,s),this.leftLeg.position.set(2*a,12*a,0),e.add(this.leftLeg),this.enableMeshLighting(e),e}createPlayerMesh(){const e=new Vt,t=1.62/32,n=this.texture?new Vn({map:this.texture,emissive:16777215,emissiveMap:this.texture,emissiveIntensity:.5,transparent:!0,alphaTest:.1,roughness:.88,metalness:0}):new Vn({color:13014380,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5});this.material=n;const s=new Vn({color:47288,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),r=new Vn({color:3881912,roughness:.9,metalness:0,emissive:16777215,emissiveIntensity:.5}),a=this.createTexturedBox(8*t,8*t,8*t,Ci.head);this.head=new Ye(a,(this.texture,n)),this.head.position.y=24*t+4*t,e.add(this.head);const o=this.createTexturedBox(8*t,12*t,4*t,Ci.body);return this.body=new Ye(o,this.texture?n:s),this.body.position.y=12*t+6*t,e.add(this.body),this.rightArm=this.createTexturedLimbGroup(4*t,12*t,4*t,Ci.rightArm,(this.texture,n)),this.rightArm.position.set(-6*t,24*t,0),e.add(this.rightArm),this.leftArm=this.createTexturedLimbGroup(4*t,12*t,4*t,Ci.leftArm,(this.texture,n)),this.leftArm.position.set(6*t,24*t,0),e.add(this.leftArm),this.rightLeg=this.createTexturedLimbGroup(4*t,12*t,4*t,Ci.rightLeg,this.texture?n:r),this.rightLeg.position.set(-2*t,12*t,0),e.add(this.rightLeg),this.leftLeg=this.createTexturedLimbGroup(4*t,12*t,4*t,Ci.leftLeg,this.texture?n:r),this.leftLeg.position.set(2*t,12*t,0),e.add(this.leftLeg),this.enableMeshLighting(e),e}enableMeshLighting(e){e.traverse(t=>{t instanceof Ye&&(t.castShadow=!0,t.receiveShadow=!1)})}setMeshRenderOrder(e,t){e.renderOrder=t,e.traverse(n=>{n.renderOrder=t})}createShadow(){this.shadow&&(this.scene.remove(this.shadow),this.shadow.geometry.dispose(),this.shadow.material instanceof Gt&&this.shadow.material.dispose());const e=new br(.4,16),t=new ft({color:0,transparent:!0,opacity:.3});this.shadow=new Ye(e,t),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.set(this.position.x,this.baseY+.01,this.position.z),this.scene.add(this.shadow)}createLimbGroup(e,t,n,s){const r=new Vt,a=new Dt(e,t,n),o=new Ye(a,s);return o.position.y=-t/2,r.add(o),r}createTexturedLimbGroup(e,t,n,s,r){const a=new Vt,o=this.createTexturedBox(e,t,n,s),c=new Ye(o,r);return c.position.y=-t/2,a.add(c),a}createTexturedBox(e,t,n,s){const r=new Dt(e,t,n),a=r.getAttribute("uv"),o=a.array,c=[s.right,s.left,s.top,s.bottom,s.front,s.back];for(let h=0;h<6;h++){const u=c[h],d=h*8;o[d+0]=u.u,o[d+1]=u.v+u.vh,o[d+2]=u.u+u.uw,o[d+3]=u.v+u.vh,o[d+4]=u.u,o[d+5]=u.v,o[d+6]=u.u+u.uw,o[d+7]=u.v}return a.needsUpdate=!0,r}jump(){this.stateMachine.handleJump()}fall(){this.stateMachine.handleFall()}isInAir(){return this.stateMachine.isInAir()}get jumping(){return this._isJumping}setCrouching(e){this.stateMachine.handleCrouch(e)}get crouching(){return this._isCrouching}getSpeedMultiplier(){return this.stateMachine.getSpeedMultiplier()}setSwimming(e){this.stateMachine.handleWaterChange(e)}setIsJumping(e){this._isJumping=e}setJumpVelocity(e){this._jumpVelocity=e}setJumpProgress(e){this._jumpProgress=e}setCrouchingInternal(e){this._isCrouching=e}setSwimmingInternal(e){this._isSwimming=e}triggerLandingSquash(){this.landingSquashTimer=Kl}getStateName(){return this.stateMachine.getStateName()}canJump(){return this.stateMachine.canJump()}canCrouch(){return this.stateMachine.canCrouch()}updateTerrainY(e){this.stateMachine.updateTerrainY(e)}hitCeiling(e){return this.stateMachine.handleCeilingHit(e)}getJumpVelocity(){return this._jumpVelocity}syncBaseY(){this.baseY=this.position.y}setSwimPose(e){this.swimPose=e}get swimming(){return this._isSwimming}punch(){this.isPunching||(this.isPunching=!0,this.punchTimer=oa,this.punchProgress=0)}get punching(){return this.isPunching}setCurrentBlockType(e){this.currentBlockType=e}update(e){this.stateMachine.update(e),this.landingSquashTimer>0&&(this.landingSquashTimer-=e,this.landingSquashTimer<0&&(this.landingSquashTimer=0));const t=this._isCrouching?1:0;this.crouchAmount+=(t-this.crouchAmount)*u0*e,this.crouchAmount=Math.max(0,Math.min(1,this.crouchAmount));const n=this._isSwimming?1:0;if(this.swimAmount+=(n-this.swimAmount)*p0*e,this.swimAmount=Math.max(0,Math.min(1,this.swimAmount)),this.isPunching){this.punchTimer-=e;const d=oa-this.punchTimer,f=oa/2;d<f?this.punchProgress=d/f:this.punchProgress=1-(d-f)/f,this.punchTimer<=0&&(this.isPunching=!1,this.punchProgress=0,this.punchTimer=0)}const s=this.position.x-this.previousPosition.x,r=this.position.z-this.previousPosition.z,a=Math.sqrt(s*s+r*r),c=a/Math.max(e,.001)>.1,h=vt();if(this._isSwimming&&!this.wasSwimming&&h.playSplash(),this.wasSwimming=this._isSwimming,c&&!this._isJumping){this.footstepDistance+=a;const d=this._isCrouching?this.FOOTSTEP_INTERVAL*1.5:this.FOOTSTEP_INTERVAL;this.footstepDistance>=d&&(this.footstepDistance=0,this._isSwimming?h.playSwim():h.playFootstep(this.currentBlockType))}if(this._isSwimming&&(c?this.swimCycle+=e*la:this.swimCycle+=e*la*.25),c){const d=this._isCrouching?.3:1;this.limbSwing+=a*4*d}const u=c?1:0;if(this.limbSwingAmount+=(u-this.limbSwingAmount)*l0,this.rightArm&&this.leftArm&&this.rightLeg&&this.leftLeg){const d=this.limbSwing*o0;let f=1,m=1;if(this.landingSquashTimer>0){const _=this.landingSquashTimer/Kl;f=1-Jl*_,m=1+Jl*.5*_}const v=this._isJumping?Math.sin(this._jumpProgress*Math.PI):0;if(this.swimAmount>.1){const _=this.swimAmount,g=this.swimPose,p=Math.sin(this.swimCycle)*g.armStrokeAmplitude,T=Math.sin(this.swimCycle+Math.PI)*g.armStrokeAmplitude,S=-g.armForwardAngle;this.rightArm.rotation.x=S+p*_,this.leftArm.rotation.x=S+T*_,this.rightArm.rotation.z=-.15*_,this.leftArm.rotation.z=.15*_}else if(this._isJumping){const _=c0*v;this.rightArm.rotation.x=_,this.leftArm.rotation.x=_,this.rightArm.rotation.z=-.3*v,this.leftArm.rotation.z=.3*v}else if(this.crouchAmount>.5){const _=Ql*this.crouchAmount;this.rightArm.rotation.x=_,this.leftArm.rotation.x=_,this.rightArm.rotation.z=0,this.leftArm.rotation.z=0}else{const _=Math.cos(d)*jl*this.limbSwingAmount,g=Math.cos(d+Math.PI)*jl*this.limbSwingAmount;this.rightArm.rotation.x=_,this.leftArm.rotation.x=g,this.rightArm.rotation.z=0,this.leftArm.rotation.z=0}if(this.isPunching&&this.punchProgress>0){const _=Math.sin(this.punchProgress*Math.PI),g=d0*_;this.rightArm.rotation.x=g,this.rightArm.rotation.z=-.2*_}if(this.swimAmount>.1){const _=this.swimCycle*(f0/la),g=this.swimAmount,p=this.swimPose,T=Math.sin(_)*p.legKickAmplitude,S=Math.sin(_+Math.PI)*p.legKickAmplitude;this.rightLeg.rotation.x=T*g,this.leftLeg.rotation.x=S*g,this.rightLeg.rotation.z=0,this.leftLeg.rotation.z=0}else if(this._isJumping){const _=h0*v;this.rightLeg.rotation.x=_,this.leftLeg.rotation.x=_,this.rightLeg.rotation.z=-.15*v,this.leftLeg.rotation.z=.15*v}else{const _=this.crouchAmount>.5?Zl*.5:Zl;this.rightLeg.rotation.x=Math.cos(d+Math.PI)*_*this.limbSwingAmount,this.leftLeg.rotation.x=Math.cos(d)*_*this.limbSwingAmount,this.rightLeg.rotation.z=0,this.leftLeg.rotation.z=0}if(this.body&&(this.body.scale.set(m,f,m),this.swimAmount>.1?this.body.rotation.x=this.swimPose.bodyRotationX*this.swimAmount:this.crouchAmount>.01?this.body.rotation.x=Ql*this.crouchAmount:this.body.rotation.x=0),this.head)if(this.swimAmount>.1)this.head.rotation.x=this.swimPose.headRotationX*this.swimAmount,this.head.position.y=1.4175,this.head.position.z=0;else if(this._isJumping)this.head.rotation.x=-.2*v,this.head.position.y=1.4175,this.head.position.z=0;else{this.head.rotation.x=0;const p=Math.abs(Math.sin(d*2))*.02*this.limbSwingAmount,T=(1-f)*.1,S=.15*this.crouchAmount,b=.1*this.crouchAmount;this.head.position.y=1.4175+p-T-S,this.head.position.z=b}}if(this.previousPosition.set(this.position.x,this.previousPosition.y,this.position.z),this.mesh.position.copy(this.position),this.swimAmount>.01){const d=this.swimPose;this.mesh.rotation.x=d.meshRotationX*this.swimAmount,this.mesh.position.y+=d.pivotOffsetY*this.swimAmount+d.heightOffset*this.swimAmount,this.mesh.position.z-=d.pivotOffsetZ*this.swimAmount}else this.mesh.rotation.x=0;if(this.shadow&&(this.shadow.visible=!this._isSwimming),this.shadow){this.shadow.position.x=this.position.x,this.shadow.position.z=this.position.z,this.shadow.position.y=this.baseY+.01;const d=this.position.y-this.baseY,f=1,m=2,_=Math.min(d/1.25,1),g=f+(m-f)*_;this.shadow.scale.set(g,g,1);const p=this.shadow.material,T=.3,S=.15;p.opacity=T-(T-S)*_}}move(e,t){this.position.x+=e,this.position.z+=t,this.mesh.position.x=this.position.x,this.mesh.position.z=this.position.z,(e!==0||t!==0)&&(this.mesh.rotation.y=Math.atan2(e,t))}setY(e){this._isJumping||(this.position.y=e,this.baseY=e),this.mesh.position.y=this.position.y,this.shadow&&(this.shadow.position.y=this.baseY+.01)}getMesh(){return this.mesh}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(e=>{e instanceof Ye&&(e.geometry.dispose(),e.material instanceof Gt&&e.material.dispose())}),this.texture&&this.texture.dispose(),this.shadow&&(this.scene.remove(this.shadow),this.shadow.geometry.dispose(),this.shadow.material instanceof Gt&&this.shadow.material.dispose())}}const v0=new Set([l.Sand,l.RedSand,l.Snow,l.SnowBlock,l.Ice,l.PackedIce,l.BlueIce,l.BirchLog,l.Clay,l.Terracotta,l.CherryLeaves]);class _0{scene;group;currentFace="top";visible=!1;currentColor=16777215;faceLines=new Map;constructor(e){this.scene=e,this.group=new Vt;const t=.505,n=new io({color:16777215,linewidth:2,transparent:!0,opacity:1,depthTest:!1}),s={top:[-t,t,-t,t,t,-t,t,t,-t,t,t,t,t,t,t,-t,t,t,-t,t,t,-t,t,-t],bottom:[-t,-t,-t,t,-t,-t,t,-t,-t,t,-t,t,t,-t,t,-t,-t,t,-t,-t,t,-t,-t,-t],right:[t,-t,-t,t,t,-t,t,t,-t,t,t,t,t,t,t,t,-t,t,t,-t,t,t,-t,-t],left:[-t,-t,-t,-t,t,-t,-t,t,-t,-t,t,t,-t,t,t,-t,-t,t,-t,-t,t,-t,-t,-t],front:[-t,-t,t,t,-t,t,t,-t,t,t,t,t,t,t,t,-t,t,t,-t,t,t,-t,-t,t],back:[-t,-t,-t,t,-t,-t,t,-t,-t,t,t,-t,t,t,-t,-t,t,-t,-t,t,-t,-t,-t,-t]};for(const[r,a]of Object.entries(s)){const o=new Xt;o.setAttribute("position",new At(a,3));const c=new Tg(o,n.clone());c.visible=!1,c.renderOrder=999,this.faceLines.set(r,c),this.group.add(c)}this.group.visible=!1,e.add(this.group)}setPosition(e,t,n,s){this.group.position.set(e,t,n),s&&this.setFace(s)}setFace(e){this.currentFace=e;for(const[t,n]of this.faceLines)n.visible=t===e}setVisible(e){this.visible=e,this.group.visible=e,e&&this.setFace(this.currentFace)}isVisible(){return this.visible}getPosition(){return this.group.position.clone()}getFace(){return this.currentFace}setColorForBlock(e){const t=e!==null&&v0.has(e)?0:16777215;if(t!==this.currentColor){this.currentColor=t;for(const n of this.faceLines.values())n.material instanceof io&&n.material.color.setHex(t)}}destroy(){this.scene.remove(this.group);for(const e of this.faceLines.values())e.geometry.dispose(),e.material instanceof Gt&&e.material.dispose()}}function x0(i){const e=Math.abs(i.x),t=Math.abs(i.y),n=Math.abs(i.z);return t>=e&&t>=n?i.y>0?"top":"bottom":e>=t&&e>=n?i.x>0?"right":"left":i.z>0?"front":"back"}const Ms=`
  @font-face {
    font-family: 'Minecraft';
    src: url('https://cdn.jsdelivr.net/gh/South-Paw/typeface-minecraft@master/files/minecraft.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/South-Paw/typeface-minecraft@master/files/minecraft.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`,at='"Minecraft", monospace';class S0{container;compactHud;compactFpsValue;compactBiomeValue;visible=!1;constructor(){this.container=document.createElement("div"),this.container.className="debug-ui-3d",this.container.style.display="none",this.container.innerHTML=`
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
    `,this.addStyles(),document.body.appendChild(this.container),this.compactHud=document.createElement("div"),this.compactHud.className="debug-ui-compact",this.compactHud.innerHTML=`
      <div class="compact-row"><span class="compact-label">FPS</span><span class="compact-value" id="compact-fps">--</span></div>
      <div class="compact-row"><span class="compact-label">Biome</span><span class="compact-value" id="compact-biome">--</span></div>
    `,this.compactFpsValue=this.compactHud.querySelector("#compact-fps"),this.compactBiomeValue=this.compactHud.querySelector("#compact-biome"),document.body.appendChild(this.compactHud)}addStyles(){if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}const e=document.createElement("style");e.textContent=`
      .debug-ui-3d {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
        font-family: ${at};
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

      .debug-ui-compact {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        font-family: ${at};
        font-size: 12px;
        image-rendering: pixelated;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
        background: rgba(0, 0, 0, 0.62);
        border: 2px solid rgba(255, 255, 255, 0.16);
        padding: 5px 8px;
        min-width: 0;
        width: max-content;
        pointer-events: none;
      }

      .compact-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;
        margin: 2px 0;
      }

      .compact-label {
        color: #d5dbe4;
        text-shadow: 1px 1px 0 #111;
        min-width: 40px;
      }

      .compact-value {
        color: #9cf8a6;
        text-shadow: 1px 1px 0 #142614;
        min-width: 96px;
        text-align: right;
      }
    `,document.head.appendChild(e)}update(e){if(this.compactFpsValue.textContent=String(e.fps),this.compactBiomeValue.textContent=e.biome,!this.visible)return;const t=(s,r)=>{const a=document.getElementById(s);a&&(a.textContent=r)};t("debug-fps",String(e.fps)),t("debug-chunks",String(e.chunks)),t("debug-seed",e.seed.toString(16).toUpperCase()),t("debug-position",`(${e.playerX.toFixed(0)}, ${e.playerY.toFixed(0)}, ${e.playerZ.toFixed(0)})`),t("debug-zoom",`${e.zoom.toFixed(1)}x`),t("debug-biome",e.biome),t("debug-state",e.playerState),t("debug-triangles",this.formatNumber(e.triangles)),t("debug-drawcalls",String(e.drawCalls)),t("debug-block-below",e.blockBelow||"Air"),t("debug-target",e.targetedBlock||"None");const n=performance.memory;n&&t("debug-memory",`${(n.usedJSHeapSize/1024/1024).toFixed(1)} MB`)}formatNumber(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}toggleVisibility(){this.visible=!this.visible,this.container.style.display=this.visible?"block":"none"}destroy(){this.container.remove(),this.compactHud.remove()}}const Ao=new Set,ec=new N(50,100,50).normalize();function M0(i){Ao.add(i)}function tc(i){ec.set(i.sunX??50,i.sunY??100,i.sunZ??50).normalize();for(const e of Ao)i.shaderEnabled!==void 0&&e.uniforms.shaderEnabled&&(e.uniforms.shaderEnabled.value=i.shaderEnabled),i.topBrightness!==void 0&&e.uniforms.topBrightness&&(e.uniforms.topBrightness.value=i.topBrightness),i.bottomBrightness!==void 0&&e.uniforms.bottomBrightness&&(e.uniforms.bottomBrightness.value=i.bottomBrightness),i.northSouthBrightness!==void 0&&e.uniforms.northSouthBrightness&&(e.uniforms.northSouthBrightness.value=i.northSouthBrightness),i.eastWestBrightness!==void 0&&e.uniforms.eastWestBrightness&&(e.uniforms.eastWestBrightness.value=i.eastWestBrightness),i.sunBoost!==void 0&&e.uniforms.sunBoost&&(e.uniforms.sunBoost.value=i.sunBoost),i.globalLight!==void 0&&e.uniforms.globalLight&&(e.uniforms.globalLight.value=i.globalLight),i.nightLift!==void 0&&e.uniforms.nightLift&&(e.uniforms.nightLift.value=i.nightLift),e.uniforms.sunDirection&&e.uniforms.sunDirection.value.copy(ec),i.heightDarkening!==void 0&&e.uniforms.heightDarkening&&(e.uniforms.heightDarkening.value=i.heightDarkening),i.depthShading!==void 0&&e.uniforms.depthShading&&(e.uniforms.depthShading.value=i.depthShading),i.baseHeight!==void 0&&e.uniforms.baseHeight&&(e.uniforms.baseHeight.value=i.baseHeight)}function b0(i){for(const e of Ao)e.uniforms.uTime&&(e.uniforms.uTime.value=i)}const y0=new N(40,75,55).normalize(),Js={TOP:1,BOTTOM:.4,NORTH:.7,EAST:.75},w0=`
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
  uniform float uWaveAmpLarge;
  uniform float uWaveAmpDetail;
  uniform float uWaveFreqLarge;
  uniform float uWaveFreqDetail;
  uniform float uWaveSpeedLarge;
  uniform float uWaveSpeedDetail;
  uniform float uWaveChoppiness;
  uniform float uFresnelStrength;
  uniform float uSpecularStrength;
  uniform float uSpecularPower;
  uniform float uFoamStrength;
  uniform float uFoamThreshold;
  uniform float uWaterClarity;
  uniform float uWaterAbsorption;
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
`,T0=`
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
  uniform float uWaveAmpLarge;
  uniform float uWaveAmpDetail;
  uniform float uWaveFreqLarge;
  uniform float uWaveFreqDetail;
  uniform float uWaveSpeedLarge;
  uniform float uWaveSpeedDetail;
  uniform float uWaveChoppiness;
  uniform float uFresnelStrength;
  uniform float uSpecularStrength;
  uniform float uSpecularPower;
  uniform float uFoamStrength;
  uniform float uFoamThreshold;
  uniform float uWaterClarity;
  uniform float uWaterAbsorption;
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
`,E0=`
  uniform sampler2D map;
  uniform vec3 color;
  uniform float opacity;
  uniform float globalLight;
  uniform float nightLift;
  uniform vec3 sunDirection;
  uniform float uTime;
  uniform float uWaterMode;
  uniform float uWaveAmpLarge;
  uniform float uWaveAmpDetail;
  uniform float uWaveFreqLarge;
  uniform float uWaveFreqDetail;
  uniform float uWaveSpeedLarge;
  uniform float uWaveSpeedDetail;
  uniform float uWaveChoppiness;
  uniform float uFresnelStrength;
  uniform float uSpecularStrength;
  uniform float uSpecularPower;
  uniform float uFoamStrength;
  uniform float uFoamThreshold;
  uniform float uWaterClarity;
  uniform float uWaterAbsorption;
  
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

  // Ocean-style lighting helper adapted from Three.js water shader examples.
  void sunLight(
    const vec3 surfaceNormal,
    const vec3 eyeDirection,
    const vec3 lightDirection,
    const float shiny,
    const float spec,
    const float diffuse,
    inout vec3 diffuseColor,
    inout vec3 specularColor
  ) {
    vec3 sunColor = vec3(1.0, 0.96, 0.88);
    vec3 reflection = normalize(reflect(-lightDirection, surfaceNormal));
    float direction = max(0.0, dot(eyeDirection, reflection));
    specularColor += pow(direction, shiny) * sunColor * spec;
    diffuseColor += max(dot(lightDirection, surfaceNormal), 0.0) * sunColor * diffuse;
  }

  float sampleWaterWave(vec2 p) {
    vec2 dirA = normalize(vec2(0.86, 0.50));
    vec2 dirB = normalize(vec2(-0.42, 0.91));
    vec2 dirC = normalize(vec2(0.23, -0.97));
    vec2 dirD = normalize(dirA + dirC);
    vec2 dirE = normalize(vec2(-0.79, -0.61));

    float swellA = sin(dot(p, dirA) * uWaveFreqLarge + (uTime * uWaveSpeedLarge));
    float swellB = sin(dot(p, dirB) * (uWaveFreqLarge * 1.33) + (uTime * (uWaveSpeedLarge * 0.81)) + 1.7);
    float swellC = cos(dot(p, dirE) * (uWaveFreqLarge * 0.67) - (uTime * (uWaveSpeedLarge * 0.58)) + 0.6);
    float detailA = sin(dot(p, dirC) * uWaveFreqDetail + (uTime * uWaveSpeedDetail) + 0.9);
    float detailB = cos(dot(p, dirD) * (uWaveFreqDetail * 1.78) - (uTime * (uWaveSpeedDetail * 1.24)) + 2.6);
    float detailC = sin(dot(p, normalize(dirB + dirE)) * (uWaveFreqDetail * 1.42) + (uTime * (uWaveSpeedDetail * 1.36)) + 2.1);

    float macroWave = (swellA + (swellB * 0.72) + (swellC * 0.48)) * uWaveAmpLarge;
    float microWave = (detailA * 0.52 + detailB * 0.33 + detailC * 0.29) * uWaveAmpDetail;
    float wave = macroWave + microWave;

    float choppyBlend = clamp(uWaveChoppiness, 0.0, 1.0);
    float choppyWave = sign(wave) * pow(abs(wave), mix(1.0, 2.38, choppyBlend));
    return mix(wave, choppyWave, choppyBlend * 0.76);
  }

  vec3 sampleOceanNormal(vec2 p) {
    const float e = 0.10;
    float h = sampleWaterWave(p);
    float hx = sampleWaterWave(p + vec2(e, 0.0));
    float hz = sampleWaterWave(p + vec2(0.0, e));
    vec2 grad = vec2((hx - h) / e, (hz - h) / e);
    return normalize(vec3(-grad.x * 2.2, 1.0, -grad.y * 2.2));
  }
  
  void main() {
    vec2 sampleUv = vUv;
    vec2 worldXZ = vWorldPosition.xz;
    float waveHeight = 0.0;
    float waveSlope = 0.0;
    vec3 waterNormal = normalize(vWorldNormal);

    if (uWaterMode > 0.5) {
      vec2 oceanP = worldXZ * 0.86 + vec2(uTime * uWaveSpeedLarge * 0.08, -uTime * uWaveSpeedLarge * 0.06);
      waveHeight = sampleWaterWave(oceanP);
      vec3 pseudoNormal = sampleOceanNormal(oceanP + vec2(
        sin(uTime * uWaveSpeedDetail * 0.19),
        cos(uTime * uWaveSpeedDetail * 0.17)
      ));
      waterNormal = normalize(mix(normalize(vWorldNormal), pseudoNormal, 0.98));
      waveSlope = clamp(1.0 - waterNormal.y, 0.0, 1.0);

      vec2 waveDrift = vec2(
        sin(dot(worldXZ, vec2(0.083, 0.061)) + (uTime * (uWaveSpeedLarge * 0.52))),
        cos(dot(worldXZ, vec2(-0.071, 0.094)) + (uTime * (uWaveSpeedLarge * 0.48)))
      );
      vec2 microDistort = vec2(
        sin(dot(worldXZ, vec2(0.42, 0.37)) * uWaveFreqDetail + (uTime * uWaveSpeedDetail)),
        cos(dot(worldXZ, vec2(-0.35, 0.46)) * uWaveFreqDetail + (uTime * (uWaveSpeedDetail * 1.07)))
      );
      vec2 macroScroll = vec2(
        uTime * (uWaveSpeedLarge * 0.024),
        -uTime * (uWaveSpeedLarge * 0.018)
      );
      float distortAmp = (uWaveAmpLarge * 0.56) + (uWaveAmpDetail * 0.74);
      sampleUv += macroScroll + (waveDrift * 0.32 + microDistort * 0.68) * distortAmp;
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

    float texLuma = dot(texColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    float brightAlbedo = smoothstep(0.50, 1.0, texLuma);
    if (uWaterMode < 0.5) {
      // Prevent very bright albedo blocks (sand/snow/ice/birch) from appearing self-lit at night.
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
    }

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
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 lightDir = normalize(vec3(sunDirection.x, max(0.20, abs(sunDirection.y)), sunDirection.z));
      vec3 diffuseLight = vec3(0.0);
      vec3 specularLight = vec3(0.0);
      sunLight(
        waterNormal,
        viewDir,
        lightDir,
        max(16.0, uSpecularPower),
        uSpecularStrength,
        0.62,
        diffuseLight,
        specularLight
      );
      specularLight *= smoothstep(0.30, 1.0, shadow);
      diffuseLight *= mix(0.64, 1.0, shadow);

      float theta = max(dot(viewDir, waterNormal), 0.0);
      float fresnel = (0.07 + (1.0 - 0.07) * pow(1.0 - theta, 5.0)) * uFresnelStrength;

      float crestMask = smoothstep(uFoamThreshold, uFoamThreshold + 0.20, waveSlope + (waveHeight * 0.45));
      float foam = clamp(crestMask * uFoamStrength, 0.0, 0.45);

      vec3 skyReflection = mix(
        vec3(0.06, 0.14, 0.24),
        vec3(0.56, 0.74, 0.96),
        clamp(viewDir.y * 0.5 + 0.5, 0.0, 1.0)
      );
      vec3 foamColor = vec3(0.84, 0.92, 0.98);

      float clarity = clamp(uWaterClarity, 0.0, 1.0);
      float absorption = clamp(uWaterAbsorption, 0.0, 1.0);
      vec3 deepTone = color * vec3(0.34, 0.52, 0.74);
      vec3 crestTone = color * vec3(0.92, 1.10, 1.20);
      vec3 subsurface = mix(deepTone, crestTone, clamp(0.35 + waveHeight * 1.2 + waveSlope * 0.72, 0.0, 1.0));
      vec3 refraction = mix(texColor.rgb * color * (0.55 + clarity * 0.18), subsurface, 0.78 + absorption * 0.12);
      vec3 reflection = skyReflection + specularLight;
      vec3 oceanLit = mix(refraction + diffuseLight * 0.28, reflection, clamp(fresnel, 0.0, 1.0));

      oceanLit += vec3(0.03, 0.05, 0.08) * waveSlope;
      oceanLit = mix(oceanLit, foamColor, foam);
      shadedColor = mix(shadedColor, oceanLit, 0.94);
      // Hard guard against blown-out white reflections.
      shadedColor = min(shadedColor, vec3(0.93, 0.95, 0.97));
    }

    // Apply tint, brightness, shadows, and water enhancements.
    float finalAlpha = texColor.a * opacity;
    if (uWaterMode > 0.5) {
      float clarity = clamp(uWaterClarity, 0.0, 1.0);
      finalAlpha *= mix(0.84, 0.64, clarity);
      finalAlpha *= mix(0.98, 0.80, waveSlope);
      finalAlpha = clamp(finalAlpha, 0.22, 0.92);
    }
    gl_FragColor = vec4(clamp(shadedColor, vec3(0.0), vec3(1.0)), finalAlpha);
    
    // Alpha test for leaves
    if (gl_FragColor.a < 0.1) discard;
  }
`;function Ht(i={}){const{map:e=null,color:t=new he(16777215),opacity:n=1,transparent:s=!1,side:r=Dn,instanced:a=!1,sunDirection:o=y0,sunBoost:c=.5,heightDarkening:h=0,depthShading:u=0,baseHeight:d=64,waterMode:f=!1,waveAmpLarge:m=0,waveAmpDetail:v=0,waveFreqLarge:_=0,waveFreqDetail:g=0,waveSpeedLarge:p=0,waveSpeedDetail:T=0,waveChoppiness:S=0,fresnelStrength:b=0,specularStrength:R=0,specularPower:L=24,foamStrength:C=0,foamThreshold:P=.24,waterClarity:y=.5,waterAbsorption:x=.25,leafMode:A=!1,leafSwayAmplitude:O=0,leafSwaySpeed:F=0}=i,Y=new St({uniforms:_n.merge([ce.lights,{map:{value:e},color:{value:t},opacity:{value:n},shaderEnabled:{value:!0},sunDirection:{value:o.clone().normalize()},sunBoost:{value:c},globalLight:{value:1},nightLift:{value:1},topBrightness:{value:Js.TOP},bottomBrightness:{value:Js.BOTTOM},northSouthBrightness:{value:Js.NORTH},eastWestBrightness:{value:Js.EAST},heightDarkening:{value:h},depthShading:{value:u},baseHeight:{value:d},uTime:{value:0},uWaterMode:{value:f?1:0},uWaveAmpLarge:{value:m},uWaveAmpDetail:{value:v},uWaveFreqLarge:{value:_},uWaveFreqDetail:{value:g},uWaveSpeedLarge:{value:p},uWaveSpeedDetail:{value:T},uWaveChoppiness:{value:S},uFresnelStrength:{value:b},uSpecularStrength:{value:R},uSpecularPower:{value:L},uFoamStrength:{value:C},uFoamThreshold:{value:P},uWaterClarity:{value:y},uWaterAbsorption:{value:x},uLeafMode:{value:A?1:0},uLeafSwayAmplitude:{value:O},uLeafSwaySpeed:{value:F}}]),vertexShader:a?T0:w0,fragmentShader:E0,transparent:s,side:r,depthWrite:!s,lights:!0});return M0(Y),Y}function A0(i,e,t={}){const n=e.clone();return n.multiplyScalar(1.08),Ht({map:i,color:n,opacity:.62,transparent:!0,side:Tt,instanced:!0,sunBoost:.16,waterMode:!0,waveAmpLarge:t.waveAmpLarge??.28,waveAmpDetail:t.waveAmpDetail??.15,waveFreqLarge:t.waveFreqLarge??.82,waveFreqDetail:t.waveFreqDetail??3.8,waveSpeedLarge:t.waveSpeedLarge??1.24,waveSpeedDetail:t.waveSpeedDetail??2.62,waveChoppiness:t.waveChoppiness??.92,fresnelStrength:t.fresnelStrength??1.18,specularStrength:t.specularStrength??.84,specularPower:t.specularPower??18,foamStrength:t.foamStrength??.34,foamThreshold:t.foamThreshold??.14,waterClarity:t.waterClarity??.78,waterAbsorption:t.waterAbsorption??.22})}function ca(i={}){return Ht({...i,instanced:!0})}function C0(i,e){return Ht({map:i,color:e,opacity:1,transparent:!0,side:Tt,instanced:!1,sunBoost:.1,leafMode:!0,leafSwayAmplitude:.08,leafSwaySpeed:1.8})}function L0(i,e){return Ht({map:i,color:e,opacity:1,transparent:!0,side:Tt,instanced:!0,sunBoost:.1,leafMode:!0,leafSwayAmplitude:.08,leafSwaySpeed:1.8})}const R0={[l.Grass]:"/textures/grass_block_top.png",[l.Dirt]:"/textures/dirt.png",[l.Sand]:"/textures/sand.png",[l.Stone]:"/textures/stone.png",[l.Gravel]:"/textures/gravel.png",[l.Bedrock]:"/textures/bedrock.png",[l.Snow]:"/textures/snow.png",[l.Ice]:"/textures/ice.png",[l.PackedIce]:"/textures/packed_ice.png",[l.BlueIce]:"/textures/blue_ice.png",[l.Clay]:"/textures/clay.png",[l.Podzol]:"/textures/podzol_top.png",[l.Mycelium]:"/textures/mycelium_top.png",[l.RedSand]:"/textures/red_sand.png",[l.Terracotta]:"/textures/terracotta.png",[l.OakLog]:"/textures/oak_log.png",[l.BirchLog]:"/textures/birch_log.png",[l.SpruceLog]:"/textures/spruce_log.png",[l.JungleLog]:"/textures/jungle_log.png",[l.AcaciaLog]:"/textures/acacia_log.png",[l.DarkOakLog]:"/textures/dark_oak_log.png",[l.CherryLog]:"/textures/cherry_log.png",[l.MangroveLog]:"/textures/mangrove_log.png",[l.OakLeaves]:"/textures/oak_leaves.png",[l.BirchLeaves]:"/textures/birch_leaves.png",[l.SpruceLeaves]:"/textures/spruce_leaves.png",[l.JungleLeaves]:"/textures/jungle_leaves.png",[l.AcaciaLeaves]:"/textures/acacia_leaves.png",[l.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[l.CherryLeaves]:"/textures/cherry_leaves.png",[l.MangroveLeaves]:"/textures/mangrove_leaves.png",[l.Cactus]:"/textures/cactus_side.png",[l.OakSapling]:"/textures/oak_sapling.png",[l.BirchSapling]:"/textures/birch_sapling.png",[l.SpruceSapling]:"/textures/spruce_sapling.png",[l.JungleSapling]:"/textures/jungle_sapling.png",[l.AcaciaSapling]:"/textures/acacia_sapling.png",[l.DarkOakSapling]:"/textures/dark_oak_sapling.png",[l.CherrySapling]:"/textures/cherry_sapling.png",[l.MangroveSapling]:"/textures/mangrove_sapling.png",[l.Water]:"/textures/water_still.png",[l.OakPlanks]:"/textures/oak_planks.png",[l.BirchPlanks]:"/textures/birch_planks.png",[l.SprucePlanks]:"/textures/spruce_planks.png",[l.JunglePlanks]:"/textures/jungle_planks.png",[l.AcaciaPlanks]:"/textures/acacia_planks.png",[l.DarkOakPlanks]:"/textures/dark_oak_planks.png",[l.CherryPlanks]:"/textures/cherry_planks.png",[l.MangrovePlanks]:"/textures/mangrove_planks.png",[l.StrippedOakLog]:"/textures/stripped_oak_log.png",[l.StrippedBirchLog]:"/textures/stripped_birch_log.png",[l.StrippedSpruceLog]:"/textures/stripped_spruce_log.png",[l.StrippedJungleLog]:"/textures/stripped_jungle_log.png",[l.StrippedAcaciaLog]:"/textures/stripped_acacia_log.png",[l.StrippedDarkOakLog]:"/textures/stripped_dark_oak_log.png",[l.StrippedCherryLog]:"/textures/stripped_cherry_log.png",[l.StrippedMangroveLog]:"/textures/stripped_mangrove_log.png",[l.OakDoor]:"/textures/oak_door_bottom.png",[l.BirchDoor]:"/textures/birch_door_bottom.png",[l.SpruceDoor]:"/textures/spruce_door_bottom.png",[l.JungleDoor]:"/textures/jungle_door_bottom.png",[l.AcaciaDoor]:"/textures/acacia_door_bottom.png",[l.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[l.CherryDoor]:"/textures/cherry_door_bottom.png",[l.MangroveDoor]:"/textures/mangrove_door_bottom.png",[l.OakTrapdoor]:"/textures/oak_trapdoor.png",[l.BirchTrapdoor]:"/textures/birch_trapdoor.png",[l.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[l.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[l.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[l.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[l.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[l.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"},nc={[l.OakLog]:"/textures/oak_log_top.png",[l.BirchLog]:"/textures/birch_log_top.png",[l.SpruceLog]:"/textures/spruce_log_top.png",[l.JungleLog]:"/textures/jungle_log_top.png",[l.AcaciaLog]:"/textures/acacia_log_top.png",[l.DarkOakLog]:"/textures/dark_oak_log_top.png",[l.CherryLog]:"/textures/cherry_log_top.png",[l.MangroveLog]:"/textures/mangrove_log_top.png",[l.Cactus]:"/textures/cactus_top.png",[l.StrippedOakLog]:"/textures/stripped_oak_log_top.png",[l.StrippedBirchLog]:"/textures/stripped_birch_log_top.png",[l.StrippedSpruceLog]:"/textures/stripped_spruce_log_top.png",[l.StrippedJungleLog]:"/textures/stripped_jungle_log_top.png",[l.StrippedAcaciaLog]:"/textures/stripped_acacia_log_top.png",[l.StrippedDarkOakLog]:"/textures/stripped_dark_oak_log_top.png",[l.StrippedCherryLog]:"/textures/stripped_cherry_log_top.png",[l.StrippedMangroveLog]:"/textures/stripped_mangrove_log_top.png"},ic={[l.Grass]:"/textures/grass_block_side.png",[l.Podzol]:"/textures/podzol_side.png",[l.Mycelium]:"/textures/mycelium_side.png"},ha={[l.Air]:0};class P0{loader;textures=new Map;logTopTextures=new Map;blockSideTextures=new Map;materials=new Map;constructor(){this.loader=new yr}async loadTextures(){console.log("📦 Loading 3D textures...");const e=[];for(const[t,n]of Object.entries(R0)){const s=parseInt(t);e.push(this.loadTexture(s,n))}for(const[t,n]of Object.entries(nc)){const s=parseInt(t);e.push(this.loadLogTopTexture(s,n))}for(const[t,n]of Object.entries(ic)){const s=parseInt(t);e.push(this.loadBlockSideTexture(s,n))}await Promise.all(e),console.log(`✅ Loaded ${this.textures.size} textures + ${this.logTopTextures.size} log tops + ${this.blockSideTextures.size} block sides`)}async loadTexture(e,t){return new Promise(n=>{this.loader.load(t,s=>{s.magFilter=et,s.minFilter=et,s.colorSpace=xt,this.textures.set(e,s),n()},void 0,()=>{n()})})}async loadLogTopTexture(e,t){return new Promise(n=>{this.loader.load(t,s=>{s.magFilter=et,s.minFilter=et,s.colorSpace=xt,this.logTopTextures.set(e,s),n()},void 0,()=>{n()})})}async loadBlockSideTexture(e,t){return new Promise(n=>{this.loader.load(t,s=>{s.magFilter=et,s.minFilter=et,s.colorSpace=xt,this.blockSideTextures.set(e,s),n()},void 0,()=>{n()})})}isLogBlock(e){return ih(e)||nc[e]!==void 0}getMaterial(e,t){const n=`${e}_${t?.getHexString()||"none"}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=t||new he(16777215);let a;if(s)a=Ht({map:s.clone(),color:r,instanced:!1});else{const o=ha[e]||8947848;a=Ht({color:new he(o),instanced:!1})}return this.materials.set(n,a),a}getLogMaterials(e){const t=`log_materials_${e}`,n=this.materials.get(`${t}_side`),s=this.materials.get(`${t}_top`);if(n&&s)return[n,n,s,s,n,n];const r=this.textures.get(e),a=this.logTopTextures.get(e)||r,o=Ht(r?{map:r.clone(),color:new he(16777215),instanced:!1}:{color:new he(7033394),instanced:!1}),c=a?Ht({map:a.clone(),color:new he(16777215),instanced:!1}):o;return this.materials.set(`${t}_side`,o),this.materials.set(`${t}_top`,c),[o,o,c,c,o,o]}hasBlockSideTexture(e){return ic[e]!==void 0}getGrassBlockMaterials(e,t){const n=t?.getHexString()||"none",s=`grass_materials_${e}_${n}`,r=this.materials.get(`${s}_side`),a=this.materials.get(`${s}_top`);if(r&&a){const v=this.materials.get(`${s}_bottom`)||r;return[r,r,a,v,r,r]}const o=this.textures.get(e),c=this.blockSideTextures.get(e)||o,h=this.textures.get(l.Dirt),u=t||new he(16777215),d=Ht(o?{map:o.clone(),color:u,instanced:!1}:{color:new he(8174669),instanced:!1}),f=c?Ht({map:c.clone(),color:u,instanced:!1}):d,m=Ht(h?{map:h.clone(),color:new he(16777215),instanced:!1}:{color:new he(9135170),instanced:!1});return this.materials.set(`${s}_side`,f),this.materials.set(`${s}_top`,d),this.materials.set(`${s}_bottom`,m),[f,f,d,m,f,f]}getCactusMaterials(){const e="cactus_materials",t=this.materials.get(`${e}_side`),n=this.materials.get(`${e}_top`);if(t&&n)return[t,t,n,n,t,t];const s=this.textures.get(l.Cactus),r=this.logTopTextures.get(l.Cactus);let a,o;if(s){const c=s.clone();c.wrapS=ai,c.wrapT=ai,c.needsUpdate=!0,a=new ft({map:c})}else a=new ft({color:3968040});if(r){const c=r.clone();c.needsUpdate=!0,o=new ft({map:c})}else o=a;return this.materials.set(`${e}_side`,a),this.materials.set(`${e}_top`,o),[a,a,o,o,a,a]}getInstancedMaterial(e,t){const n=`instanced_${e}_${t?.getHexString()||"none"}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=t||new he(16777215);let a;if(s)a=ca({map:s.clone(),color:r});else{const o=ha[e]||8947848;a=ca({color:new he(o)})}return this.materials.set(n,a),a}getWaterMaterial(e){const t=e!==void 0?`water_${e}`:"water_default";if(this.materials.has(t))return this.materials.get(t);const n=this.textures.get(l.Water),s=e!==void 0?this.getWaterTint(e):new he(4159204),r=A0(n?.clone()||null,s,{waveAmpLarge:.28,waveAmpDetail:.15,waveFreqLarge:.82,waveFreqDetail:3.8,waveSpeedLarge:1.24,waveSpeedDetail:2.62,waveChoppiness:.92,fresnelStrength:1.18,specularStrength:.84,specularPower:18,foamStrength:.34,foamThreshold:.14,waterClarity:.78,waterAbsorption:.22});return this.materials.set(t,r),r}getWaterTint(e){const t={warm_ocean:45,deep_warm_ocean:46,lukewarm_ocean:47,deep_lukewarm_ocean:49,cold_ocean:43,deep_cold_ocean:44,deep_ocean:24,ocean:0,swamp:6,mangrove_swamp:51,frozen_ocean:10,deep_frozen_ocean:50},s={[t.warm_ocean]:[67,213,238],[t.deep_warm_ocean]:[67,213,238],[t.lukewarm_ocean]:[69,173,242],[t.deep_lukewarm_ocean]:[69,173,242],[t.cold_ocean]:[61,87,214],[t.deep_cold_ocean]:[61,87,214],[t.frozen_ocean]:[57,56,201],[t.deep_frozen_ocean]:[57,56,201],[t.deep_ocean]:[48,96,195],[t.ocean]:[63,118,228],[t.swamp]:[97,123,100],[t.mangrove_swamp]:[62,93,83]}[e]||[63,118,228];return new he(s[0]/255,s[1]/255,s[2]/255)}getLeavesMaterial(e,t){const n=`leaves_${e}_${t}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=this.getBiomeTint(t),a=C0(s?.clone()||null,r);return this.materials.set(n,a),a}getInstancedLeavesMaterial(e,t){const n=`instanced_leaves_${e}_${t}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(e),r=this.getBiomeTint(t),a=L0(s?.clone()||null,r);return this.materials.set(n,a),a}getGrassMaterial(e){const t=`instanced_grass_${e}`;if(this.materials.has(t))return this.materials.get(t);const n=this.textures.get(l.Grass),s=this.getBiomeTint(e),r=ca({map:n?.clone()||null,color:s});return this.materials.set(t,r),r}getBiomeTint(e){const t={swamp:6,mangrove_swamp:51,jungle:21,bamboo_jungle:48,sparse_jungle:23,badlands:37,wooded_badlands:38,wooded_badlands_plateau:39,eroded_badlands:165,dark_forest:29,snowy_plains:12,snowy_taiga:30,snowy_slopes:184,snowy_beach:26,ice_spikes:140,frozen_peaks:182,grove:185,snowy_mountains:13,cherry_grove:186,savanna:35,savanna_plateau:36,windswept_savanna:163,desert:2,birch_forest:27,old_growth_birch_forest:155,taiga:5,old_growth_pine_taiga:32,old_growth_spruce_taiga:160},s={[t.swamp]:[106,112,57],[t.mangrove_swamp]:[141,154,50],[t.jungle]:[89,201,60],[t.bamboo_jungle]:[89,201,60],[t.sparse_jungle]:[89,201,60],[t.badlands]:[144,129,77],[t.wooded_badlands]:[144,129,77],[t.wooded_badlands_plateau]:[144,129,77],[t.eroded_badlands]:[144,129,77],[t.dark_forest]:[80,122,50],[t.snowy_plains]:[128,180,151],[t.snowy_taiga]:[128,180,151],[t.snowy_slopes]:[128,180,151],[t.snowy_beach]:[128,180,151],[t.ice_spikes]:[128,180,151],[t.frozen_peaks]:[128,180,151],[t.grove]:[128,180,151],[t.snowy_mountains]:[128,180,151],[t.cherry_grove]:[182,219,97],[t.savanna]:[191,183,85],[t.savanna_plateau]:[191,183,85],[t.windswept_savanna]:[191,183,85],[t.desert]:[191,183,85],[t.birch_forest]:[136,183,97],[t.old_growth_birch_forest]:[136,183,97],[t.taiga]:[134,175,97],[t.old_growth_pine_taiga]:[134,175,97],[t.old_growth_spruce_taiga]:[134,175,97]}[e]||[145,189,89];return new he(s[0]/255,s[1]/255,s[2]/255)}needsBiomeTint(e){return Hg(e)}getDroppedItemMaterials(e){const t=`dropped_${e}`;if(this.materials.has(t))return this.materials.get(t);const n=`dropped_array_${e}`;if(this.materials.has(`${n}_0`)){const a=[];for(let o=0;o<6;o++)a.push(this.materials.get(`${n}_${o}`));return a}if(this.hasBlockSideTexture(e))return this.createDroppedGrassBlockMaterials(e,n);if(this.isLogBlock(e))return this.createDroppedLogMaterials(e,n);const s=this.textures.get(e);let r;if(s){const a=this.cloneTextureWithSettings(s);if(this.needsBiomeTint(e)){const o=new he(.5686274509803921,.7411764705882353,.34901960784313724);r=new ft({map:a,color:o})}else r=new ft({map:a})}else{const a=ha[e]||8947848;r=new ft({color:a})}return this.materials.set(t,r),r}cloneTextureWithSettings(e){const t=e.clone();return t.magFilter=et,t.minFilter=et,t.colorSpace=xt,t.needsUpdate=!0,t}createDroppedGrassBlockMaterials(e,t){const n=this.textures.get(e),s=this.blockSideTextures.get(e)||n,r=this.textures.get(l.Dirt),a=new he(145/255,189/255,89/255),o=n?new ft({map:this.cloneTextureWithSettings(n),color:a}):new ft({color:8174669}),c=s?new ft({map:this.cloneTextureWithSettings(s)}):o,h=r?new ft({map:this.cloneTextureWithSettings(r)}):new ft({color:9135170}),u=[c,c,o,h,c,c];for(let d=0;d<6;d++)this.materials.set(`${t}_${d}`,u[d]);return u}createDroppedLogMaterials(e,t){const n=this.textures.get(e),s=this.logTopTextures.get(e)||n,r=n?new ft({map:this.cloneTextureWithSettings(n)}):new ft({color:7033394}),a=s?new ft({map:this.cloneTextureWithSettings(s)}):r,o=[r,r,a,a,r,r];for(let c=0;c<6;c++)this.materials.set(`${t}_${c}`,o[c]);return o}getSaplingMaterial(e){const t=`sapling_${e}`;if(this.materials.has(t))return this.materials.get(t);const n=this.textures.get(e);let s;if(n){const r=n.clone();r.needsUpdate=!0,s=new ft({map:r,transparent:!0,alphaTest:.1,side:Tt,depthWrite:!0})}else s=new ft({color:4881471,transparent:!0,side:Tt});return this.materials.set(t,s),s}}const k0=[l.OakSapling,l.BirchSapling,l.SpruceSapling,l.JungleSapling,l.AcaciaSapling,l.DarkOakSapling,l.CherrySapling,l.MangroveSapling,l.OakDoor,l.BirchDoor,l.SpruceDoor,l.JungleDoor,l.AcaciaDoor,l.DarkOakDoor,l.CherryDoor,l.MangroveDoor,l.OakTrapdoor,l.BirchTrapdoor,l.SpruceTrapdoor,l.JungleTrapdoor,l.AcaciaTrapdoor,l.DarkOakTrapdoor,l.CherryTrapdoor,l.MangroveTrapdoor];function D0(i){return[l.OakLeaves,l.BirchLeaves,l.SpruceLeaves,l.JungleLeaves,l.AcaciaLeaves,l.DarkOakLeaves,l.MangroveLeaves].includes(i)?{tint:"sepia(1) saturate(3) hue-rotate(70deg)",faces:["all"]}:i===l.CherryLeaves?{tint:"sepia(1) saturate(2) hue-rotate(300deg)",faces:["all"]}:i===l.Grass?{tint:"sepia(1) saturate(2.5) hue-rotate(70deg)",faces:["top"]}:null}function oh(i){return k0.includes(i)}function cs(i,e,t){const n=D0(i);return n?n.faces.includes("all")||n.faces.includes("top")&&e==="top"||n.faces.includes("side")&&e!=="top"?`brightness(${t}) ${n.tint}`:`brightness(${t})`:`brightness(${t})`}const Qt={top:1,front:.8,right:.6,left:.7},I0={[l.Stone]:"#7f7f7f",[l.Dirt]:"#8b6442",[l.Grass]:"#7cbc4d",[l.Sand]:"#dbd4a0",[l.RedSand]:"#b5633a",[l.Gravel]:"#847f7d",[l.Clay]:"#9da3a7",[l.Terracotta]:"#985e43",[l.Ice]:"#a5d3f3",[l.PackedIce]:"#8cb4d4",[l.BlueIce]:"#74a8d6",[l.Snow]:"#f0f0f0",[l.SnowBlock]:"#f0f0f0",[l.Bedrock]:"#3a3a3a",[l.Water]:"#3f76e4",[l.OakPlanks]:"#b8945f",[l.BirchPlanks]:"#c8b77a",[l.SprucePlanks]:"#7a5a3a",[l.JunglePlanks]:"#a8754a",[l.AcaciaPlanks]:"#ad5d32",[l.DarkOakPlanks]:"#3e2912",[l.CherryPlanks]:"#e4b4a5",[l.MangrovePlanks]:"#773535",[l.OakLog]:"#6b5232",[l.BirchLog]:"#d5cdb3",[l.SpruceLog]:"#4a3a25",[l.JungleLog]:"#5a4a2a",[l.AcaciaLog]:"#6d5040",[l.DarkOakLog]:"#3d2d1d",[l.CherryLog]:"#a87080",[l.MangroveLog]:"#5a3030",[l.StrippedOakLog]:"#b8945f",[l.StrippedBirchLog]:"#c8b77a",[l.StrippedSpruceLog]:"#7a5a3a",[l.StrippedJungleLog]:"#a8754a",[l.StrippedAcaciaLog]:"#ad5d32",[l.StrippedDarkOakLog]:"#3e2912",[l.StrippedCherryLog]:"#e4b4a5",[l.StrippedMangroveLog]:"#773535",[l.OakLeaves]:"#4a7a2b",[l.BirchLeaves]:"#5a8a3b",[l.SpruceLeaves]:"#3a5a2b",[l.JungleLeaves]:"#3a7a3b",[l.AcaciaLeaves]:"#5a8a4b",[l.DarkOakLeaves]:"#3a5a2b",[l.CherryLeaves]:"#e0a0c0",[l.MangroveLeaves]:"#4a7a4b",[l.Podzol]:"#7a5a3a",[l.Mycelium]:"#8a7a7a",[l.OakSapling]:"#5a9a3b",[l.BirchSapling]:"#6aaa4b",[l.SpruceSapling]:"#3a6a2b",[l.JungleSapling]:"#4a8a3b",[l.AcaciaSapling]:"#6a9a4b",[l.DarkOakSapling]:"#3a5a2b",[l.CherrySapling]:"#d090b0",[l.MangroveSapling]:"#4a7a4b",[l.OakDoor]:"#a58046",[l.BirchDoor]:"#d4c797",[l.SpruceDoor]:"#6b5034",[l.JungleDoor]:"#a87453",[l.AcaciaDoor]:"#9b5b3b",[l.DarkOakDoor]:"#4a321d",[l.CherryDoor]:"#e4b4a5",[l.MangroveDoor]:"#6b3030",[l.OakTrapdoor]:"#a58046",[l.BirchTrapdoor]:"#d4c797",[l.SpruceTrapdoor]:"#6b5034",[l.JungleTrapdoor]:"#a87453",[l.AcaciaTrapdoor]:"#9b5b3b",[l.DarkOakTrapdoor]:"#4a321d",[l.CherryTrapdoor]:"#e4b4a5",[l.MangroveTrapdoor]:"#6b3030",[l.Cactus]:"#5a8a3b"};function lh(i){return I0[i]||"#808080"}class Co{container;slots=[];selectedSlot=0;items=new Array(9).fill(null);selectorHighlight;static BLOCK_TEXTURES={[l.Grass]:{top:"/textures/grass_block_top.png",side:"/textures/grass_block_side.png"},[l.Podzol]:{top:"/textures/podzol_top.png",side:"/textures/podzol_side.png"},[l.Mycelium]:{top:"/textures/mycelium_top.png",side:"/textures/mycelium_side.png"},[l.Snow]:{top:"/textures/snow.png",side:"/textures/snow.png"},[l.OakLog]:{top:"/textures/oak_log_top.png",side:"/textures/oak_log.png"},[l.BirchLog]:{top:"/textures/birch_log_top.png",side:"/textures/birch_log.png"},[l.SpruceLog]:{top:"/textures/spruce_log_top.png",side:"/textures/spruce_log.png"},[l.JungleLog]:{top:"/textures/jungle_log_top.png",side:"/textures/jungle_log.png"},[l.AcaciaLog]:{top:"/textures/acacia_log_top.png",side:"/textures/acacia_log.png"},[l.DarkOakLog]:{top:"/textures/dark_oak_log_top.png",side:"/textures/dark_oak_log.png"},[l.CherryLog]:{top:"/textures/cherry_log_top.png",side:"/textures/cherry_log.png"},[l.MangroveLog]:{top:"/textures/mangrove_log_top.png",side:"/textures/mangrove_log.png"},[l.Cactus]:{top:"/textures/cactus_top.png",side:"/textures/cactus_side.png"},[l.Dirt]:"/textures/dirt.png",[l.Stone]:"/textures/stone.png",[l.Sand]:"/textures/sand.png",[l.RedSand]:"/textures/red_sand.png",[l.Gravel]:"/textures/gravel.png",[l.Clay]:"/textures/clay.png",[l.Terracotta]:"/textures/terracotta.png",[l.Ice]:"/textures/ice.png",[l.PackedIce]:"/textures/packed_ice.png",[l.BlueIce]:"/textures/blue_ice.png",[l.Water]:"/textures/water_still.png",[l.OakLeaves]:"/textures/oak_leaves.png",[l.BirchLeaves]:"/textures/birch_leaves.png",[l.SpruceLeaves]:"/textures/spruce_leaves.png",[l.JungleLeaves]:"/textures/jungle_leaves.png",[l.AcaciaLeaves]:"/textures/acacia_leaves.png",[l.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[l.CherryLeaves]:"/textures/cherry_leaves.png",[l.MangroveLeaves]:"/textures/mangrove_leaves.png",[l.OakSapling]:"/textures/oak_sapling.png",[l.BirchSapling]:"/textures/birch_sapling.png",[l.SpruceSapling]:"/textures/spruce_sapling.png",[l.JungleSapling]:"/textures/jungle_sapling.png",[l.AcaciaSapling]:"/textures/acacia_sapling.png",[l.DarkOakSapling]:"/textures/dark_oak_sapling.png",[l.CherrySapling]:"/textures/cherry_sapling.png",[l.MangroveSapling]:"/textures/mangrove_sapling.png",[l.OakPlanks]:"/textures/oak_planks.png",[l.BirchPlanks]:"/textures/birch_planks.png",[l.SprucePlanks]:"/textures/spruce_planks.png",[l.JunglePlanks]:"/textures/jungle_planks.png",[l.AcaciaPlanks]:"/textures/acacia_planks.png",[l.DarkOakPlanks]:"/textures/dark_oak_planks.png",[l.CherryPlanks]:"/textures/cherry_planks.png",[l.MangrovePlanks]:"/textures/mangrove_planks.png",[l.StrippedOakLog]:{top:"/textures/stripped_oak_log_top.png",side:"/textures/stripped_oak_log.png"},[l.StrippedBirchLog]:{top:"/textures/stripped_birch_log_top.png",side:"/textures/stripped_birch_log.png"},[l.StrippedSpruceLog]:{top:"/textures/stripped_spruce_log_top.png",side:"/textures/stripped_spruce_log.png"},[l.StrippedJungleLog]:{top:"/textures/stripped_jungle_log_top.png",side:"/textures/stripped_jungle_log.png"},[l.StrippedAcaciaLog]:{top:"/textures/stripped_acacia_log_top.png",side:"/textures/stripped_acacia_log.png"},[l.StrippedDarkOakLog]:{top:"/textures/stripped_dark_oak_log_top.png",side:"/textures/stripped_dark_oak_log.png"},[l.StrippedCherryLog]:{top:"/textures/stripped_cherry_log_top.png",side:"/textures/stripped_cherry_log.png"},[l.StrippedMangroveLog]:{top:"/textures/stripped_mangrove_log_top.png",side:"/textures/stripped_mangrove_log.png"},[l.OakDoor]:"/textures/oak_door_bottom.png",[l.BirchDoor]:"/textures/birch_door_bottom.png",[l.SpruceDoor]:"/textures/spruce_door_bottom.png",[l.JungleDoor]:"/textures/jungle_door_bottom.png",[l.AcaciaDoor]:"/textures/acacia_door_bottom.png",[l.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[l.CherryDoor]:"/textures/cherry_door_bottom.png",[l.MangroveDoor]:"/textures/mangrove_door_bottom.png",[l.OakTrapdoor]:"/textures/oak_trapdoor.png",[l.BirchTrapdoor]:"/textures/birch_trapdoor.png",[l.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[l.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[l.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[l.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[l.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[l.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"};constructor(){this.injectStyles(),this.container=this.createHotbar(),this.selectorHighlight=this.createSelectorHighlight(),this.container.appendChild(this.selectorHighlight),document.body.appendChild(this.container),this.setupKeyboardInput(),this.updateDisplay()}injectStyles(){if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}if(document.getElementById("inventory-cube-styles"))return;const e=document.createElement("style");e.id="inventory-cube-styles",e.textContent=`
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
      font-family: ${at};
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
    `,e}setupKeyboardInput(){window.addEventListener("keydown",e=>{if(e.code>="Digit1"&&e.code<="Digit9"){const t=parseInt(e.code.replace("Digit",""))-1;this.selectSlot(t)}}),window.addEventListener("wheel",e=>{(e.target===document.body||e.target.tagName==="CANVAS")&&e.shiftKey&&(e.preventDefault(),e.deltaY>0?this.selectSlot((this.selectedSlot+1)%9):this.selectSlot((this.selectedSlot+8)%9))},{passive:!1})}selectSlot(e){e<0||e>8||(this.selectedSlot!==e&&vt().playUIClick(),this.selectedSlot=e,this.updateDisplay())}getSelectedSlot(){return this.selectedSlot}getSelectedItem(){return this.items[this.selectedSlot]}setItem(e,t){e<0||e>8||(this.items[e]=t,this.updateDisplay())}getItem(e){return e<0||e>8?null:this.items[e]}removeItem(e,t=1){if(e<0||e>8)return!1;const n=this.items[e];return!n||n.count<t?!1:(n.count-=t,n.count<=0&&(this.items[e]=null),this.updateDisplay(),!0)}addItem(e){let n=e.count;for(let s=0;s<9&&!(n<=0);s++){const r=this.items[s];if(r&&r.blockType===e.blockType){const a=64-r.count,o=Math.min(a,n);o>0&&(r.count+=o,n-=o)}}for(let s=0;s<9&&!(n<=0);s++)if(!this.items[s]){const r=Math.min(64,n);this.items[s]={blockType:e.blockType,count:r,name:e.name,icon:e.icon},n-=r}return this.updateDisplay(),n<e.count}removeFromSelected(e=1){const t=this.items[this.selectedSlot];if(!t)return 0;const n=Math.min(e,t.count);return t.count-=n,t.count<=0&&(this.items[this.selectedSlot]=null),this.updateDisplay(),n}hasSpaceFor(e,t=1){let s=t;for(let r=0;r<9;r++){const a=this.items[r];if(a&&a.blockType===e?s-=64-a.count:a||(s-=64),s<=0)return!0}return s<=0}getTextureConfig(e){const t=Co.BLOCK_TEXTURES[e];return t?typeof t=="string"?{top:t,side:t,bottom:t}:{top:t.top,side:t.side,bottom:t.bottom||t.side}:null}updateDisplay(){this.slots.forEach((e,t)=>{const n=this.items[t],s=e.querySelector(".slot-inner"),r=s?.querySelector(".cube-container"),a=r?.querySelector(".iso-cube"),o=s?.querySelector(".slot-sprite"),c=e.querySelector(".slot-count");if(!(!r||!a||!o))if(n){const h=this.getTextureConfig(n.blockType);if(oh(n.blockType)&&h)r.style.display="none",o.style.display="block",o.style.backgroundImage=`url(${h.side})`;else if(h){r.style.display="block",o.style.display="none";const d=a.querySelector(".face-top"),f=a.querySelector(".face-front"),m=a.querySelector(".face-right"),v=a.querySelector(".face-left");d&&(d.style.backgroundImage=`url(${h.top})`,d.style.filter=cs(n.blockType,"top",Qt.top)),f&&(f.style.backgroundImage=`url(${h.side})`,f.style.filter=cs(n.blockType,"front",Qt.front)),m&&(m.style.backgroundImage=`url(${h.side})`,m.style.filter=cs(n.blockType,"right",Qt.right)),v&&(v.style.backgroundImage=`url(${h.side})`,v.style.filter=cs(n.blockType,"left",Qt.left))}else{r.style.display="block",o.style.display="none";const d=lh(n.blockType),f=a.querySelector(".face-top"),m=a.querySelector(".face-front"),v=a.querySelector(".face-right"),_=a.querySelector(".face-left");f&&(f.style.backgroundImage="none",f.style.backgroundColor=d,f.style.filter=`brightness(${Qt.top})`),m&&(m.style.backgroundImage="none",m.style.backgroundColor=d,m.style.filter=`brightness(${Qt.front})`),v&&(v.style.backgroundImage="none",v.style.backgroundColor=d,v.style.filter=`brightness(${Qt.right})`),_&&(_.style.backgroundImage="none",_.style.backgroundColor=d,_.style.filter=`brightness(${Qt.left})`)}n.count>1?(c.textContent=n.count.toString(),c.style.display="block"):c.style.display="none"}else r.style.display="none",o.style.display="none",c.style.display="none"}),this.updateSelectorPosition()}updateSelectorPosition(){const t=this.selectedSlot*20-2;this.selectorHighlight.style.left=`${t}px`}destroy(){this.container.remove();const e=document.getElementById("inventory-cube-styles");e&&e.remove()}}const fs=.25,U0=1.5,N0=.1,F0=2,O0=1.5,sc=2,B0=5,z0=15,H0=300,G0=3,V0=20,rc=.2,W0=.5,ac=64,X0=new Dt(fs,fs,fs),ch=new br(fs*.6,8);ch.rotateX(-Math.PI/2);const Y0=new ft({color:0,transparent:!0,opacity:.3,depthWrite:!1});class $0{blockType;count;position;velocity;isPickedUp=!1;shouldDespawn=!1;mesh;scene;age=0;bobPhase=Math.random()*Math.PI*2;rotationAngle=Math.random()*Math.PI*2;groundY=0;isOnGround=!1;materials;isBeingAttracted=!1;attractionProgress=0;constructor(e,t,n){if(this.scene=e,this.blockType=t.blockType,this.count=t.count,this.position=t.position.clone(),this.materials=n,t.velocity)this.velocity=t.velocity.clone();else{const s=Math.random()*Math.PI*2,r=1.5+Math.random()*1.5;this.velocity=new N(Math.cos(s)*r,G0+Math.random()*2,Math.sin(s)*r)}this.mesh=this.createMesh(),this.mesh.position.copy(this.position),e.add(this.mesh)}createMesh(){const e=new Vt,t=new Ye(X0,this.materials);t.position.y=fs/2,e.add(t);const n=Y0.clone(),s=new Ye(ch,n);return s.position.y=.01,s.name="shadow",e.add(s),e}update(e,t,n){if(this.age+=e,this.age>=H0){this.shouldDespawn=!0;return}const s=t.x-this.position.x,r=t.y-this.position.y,a=t.z-this.position.z,o=Math.sqrt(s*s+r*r+a*a);if(o<O0){this.isPickedUp=!0;return}if(o<sc){this.isBeingAttracted=!0;const u=1-o/sc;this.attractionProgress=Math.min(1,this.attractionProgress+e*2);const d=s/o,f=r/o,m=a/o,v=B0+z0*u*this.attractionProgress;this.velocity.x=d*v,this.velocity.y=f*v,this.velocity.z=m*v,this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.position.z+=this.velocity.z*e}else this.isBeingAttracted=!1,this.attractionProgress=0,this.isOnGround||(this.velocity.y-=V0*e,this.velocity.x*=.98,this.velocity.z*=.98,this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.position.z+=this.velocity.z*e,this.groundY=n(this.position.x,this.position.z)+1+rc,this.position.y<=this.groundY&&(this.position.y=this.groundY,this.isOnGround=!0,this.velocity.set(0,0,0)));this.rotationAngle+=U0*e,this.bobPhase+=F0*Math.PI*2*e,this.mesh.position.copy(this.position),this.isOnGround&&!this.isBeingAttracted&&(this.mesh.position.y+=Math.sin(this.bobPhase)*N0);const c=this.mesh.children.find(u=>u instanceof Ye&&u.name!=="shadow");c&&(c.rotation.y=this.rotationAngle);const h=this.mesh.children.find(u=>u.name==="shadow");if(h&&h.material instanceof ft){const u=Math.max(0,this.position.y-this.groundY+rc);h.material.opacity=Math.max(.1,.3-u*.1),h.position.y=-u+.01}}canMergeWith(e){return e===this||e.blockType!==this.blockType||this.count>=ac||e.isPickedUp||e.shouldDespawn?!1:this.position.distanceTo(e.position)<W0}mergeFrom(e){const t=ac-this.count,n=Math.min(t,e.count);this.count+=n,e.count-=n,e.count<=0&&(e.shouldDespawn=!0)}getPosition(){return this.position.clone()}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(e=>{e instanceof Ye&&e.name==="shadow"&&e.material instanceof Gt&&e.material.dispose()})}}class q0{scene;textureManager;inventoryHUD;items=[];getGroundHeight;onItemPickup;constructor(e,t,n,s){this.scene=e,this.textureManager=t,this.inventoryHUD=n,this.getGroundHeight=s}spawnItem(e,t,n=1,s){if(e===l.Air)return null;const r=this.textureManager.getDroppedItemMaterials(e),a={blockType:e,count:n,position:t,velocity:s},o=new $0(this.scene,a,r);return this.items.push(o),o}spawnItemsFromBlock(e,t,n=1){const s=t.clone();s.y+=.5,this.spawnItem(e,s,n)}update(e,t){for(const s of this.items)s.update(e,t,this.getGroundHeight);this.mergeNearbyItems();const n=[];for(const s of this.items)s.isPickedUp?this.inventoryHUD.addItem({blockType:s.blockType,count:s.count,name:this.getBlockName(s.blockType)})?(this.onItemPickup&&this.onItemPickup(s.blockType,s.count),vt().playItemPickup(),n.push(s)):s.isPickedUp=!1:s.shouldDespawn&&n.push(s);for(const s of n){s.destroy();const r=this.items.indexOf(s);r!==-1&&this.items.splice(r,1)}}mergeNearbyItems(){for(let e=0;e<this.items.length;e++){const t=this.items[e];if(!(t.shouldDespawn||t.isPickedUp))for(let n=e+1;n<this.items.length;n++){const s=this.items[n];s.shouldDespawn||s.isPickedUp||t.canMergeWith(s)&&t.mergeFrom(s)}}}getBlockName(e){return{[l.Grass]:"Grass Block",[l.Dirt]:"Dirt",[l.Stone]:"Stone",[l.Sand]:"Sand",[l.Gravel]:"Gravel",[l.Water]:"Water",[l.Ice]:"Ice",[l.Snow]:"Snow",[l.SnowBlock]:"Snow Block",[l.Clay]:"Clay",[l.OakLog]:"Oak Log",[l.BirchLog]:"Birch Log",[l.SpruceLog]:"Spruce Log",[l.JungleLog]:"Jungle Log",[l.AcaciaLog]:"Acacia Log",[l.DarkOakLog]:"Dark Oak Log",[l.CherryLog]:"Cherry Log",[l.MangroveLog]:"Mangrove Log",[l.OakLeaves]:"Oak Leaves",[l.BirchLeaves]:"Birch Leaves",[l.SpruceLeaves]:"Spruce Leaves",[l.JungleLeaves]:"Jungle Leaves",[l.AcaciaLeaves]:"Acacia Leaves",[l.DarkOakLeaves]:"Dark Oak Leaves",[l.CherryLeaves]:"Cherry Leaves",[l.MangroveLeaves]:"Mangrove Leaves",[l.Cactus]:"Cactus",[l.Podzol]:"Podzol",[l.Mycelium]:"Mycelium",[l.PackedIce]:"Packed Ice",[l.BlueIce]:"Blue Ice",[l.RedSand]:"Red Sand",[l.Terracotta]:"Terracotta",[l.OakSapling]:"Oak Sapling",[l.BirchSapling]:"Birch Sapling",[l.SpruceSapling]:"Spruce Sapling",[l.JungleSapling]:"Jungle Sapling",[l.AcaciaSapling]:"Acacia Sapling",[l.DarkOakSapling]:"Dark Oak Sapling",[l.CherrySapling]:"Cherry Sapling",[l.MangroveSapling]:"Mangrove Propagule"}[e]||"Block"}getItemCount(){return this.items.length}destroy(){for(const e of this.items)e.destroy();this.items=[]}}const j0={[l.TallGrass]:0,[l.DeadBush]:0,[l.Fern]:0,[l.OakLeaves]:.2,[l.BirchLeaves]:.2,[l.SpruceLeaves]:.2,[l.JungleLeaves]:.2,[l.AcaciaLeaves]:.2,[l.DarkOakLeaves]:.2,[l.CherryLeaves]:.2,[l.MangroveLeaves]:.2,[l.Dirt]:.5,[l.Sand]:.5,[l.RedSand]:.5,[l.Gravel]:.6,[l.Clay]:.6,[l.Snow]:.2,[l.SnowBlock]:.2,[l.Grass]:.6,[l.Podzol]:.5,[l.Mycelium]:.6,[l.OakLog]:2,[l.BirchLog]:2,[l.SpruceLog]:2,[l.JungleLog]:2,[l.AcaciaLog]:2,[l.DarkOakLog]:2,[l.CherryLog]:2,[l.MangroveLog]:2,[l.Stone]:1.5,[l.Terracotta]:1.25,[l.Ice]:.5,[l.PackedIce]:.5,[l.BlueIce]:2.8,[l.Cactus]:.4,[l.OakSapling]:0,[l.BirchSapling]:0,[l.SpruceSapling]:0,[l.JungleSapling]:0,[l.AcaciaSapling]:0,[l.DarkOakSapling]:0,[l.CherrySapling]:0,[l.MangroveSapling]:0},Z0=new Set([l.Stone,l.Terracotta,l.Ice,l.PackedIce,l.BlueIce]),J0=1,ua=10;function hh(i){const e=$g(i),t=j0[i]??e??J0;if(t<0)return 1/0;if(t===0)return 0;let n=t*1.5;return Z0.has(i)&&(n*=5),n}function K0(i){return Number.isFinite(hh(i))}class Q0{scene;breakingMesh=null;breakingOverlays=[];targetBlock=null;targetBlockType=null;breakProgress=0;breakTime=0;currentStage=-1;overlayMaterial;constructor(e){this.scene=e,this.overlayMaterial=new ft({color:0,transparent:!0,depthTest:!0,depthWrite:!1,side:Tt,alphaTest:.1});const t=new Dt(1.002,1.002,1.002);this.breakingMesh=new Ye(t,this.overlayMaterial),this.breakingMesh.visible=!1,this.breakingMesh.renderOrder=1e3,e.add(this.breakingMesh),this.loadDestroyTextures()}loadDestroyTextures(){const e=new yr;for(let t=0;t<ua;t++){const n=e.load(`/textures/destroy_stage_${t}.png`);n.magFilter=et,n.minFilter=et,this.breakingOverlays.push(n)}}startBreaking(e,t,n){if(!this.targetBlock||!this.targetBlock.equals(e)){const r=hh(t);if(!Number.isFinite(r))return this.stopBreaking(),!1;this.targetBlock=e.clone(),this.targetBlockType=t,this.breakProgress=0,this.breakTime=r,this.currentStage=0,this.breakingMesh&&(this.breakingMesh.position.copy(e),this.updateOverlayTexture(0),this.breakingMesh.visible=!0)}if(this.breakTime===0)return this.stopBreaking(),!0;this.breakProgress+=n/this.breakTime;const s=Math.min(Math.floor(this.breakProgress*ua),ua-1);return s!==this.currentStage&&s>=0&&(this.currentStage=s,this.updateOverlayTexture(s)),this.breakProgress>=1?(this.stopBreaking(),!0):!1}updateOverlayTexture(e){e>=0&&e<this.breakingOverlays.length&&(this.overlayMaterial.map=this.breakingOverlays[e],this.overlayMaterial.needsUpdate=!0)}stopBreaking(){this.targetBlock=null,this.targetBlockType=null,this.breakProgress=0,this.breakTime=0,this.currentStage=-1,this.breakingMesh&&(this.breakingMesh.visible=!1)}isBreaking(){return this.targetBlock!==null}getProgress(){return this.breakProgress}getTargetBlock(){return this.targetBlock?.clone()||null}getCurrentStage(){return this.currentStage}destroy(){this.breakingMesh&&(this.scene.remove(this.breakingMesh),this.breakingMesh.geometry.dispose()),this.overlayMaterial.dispose();for(const e of this.breakingOverlays)e.dispose()}}class ev{container;visible=!0;boundMouseMove;posX;posY;velX=0;velY=0;ACCELERATION=2e3;MAX_SPEED=600;FRICTION=8;usingGamepad=!1;constructor(){this.posX=window.innerWidth/2,this.posY=window.innerHeight/2,this.container=this.createCrosshair(),document.body.appendChild(this.container),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`,this.boundMouseMove=this.handleMouseMove.bind(this),window.addEventListener("mousemove",this.boundMouseMove),document.body.style.cursor="none"}createCrosshair(){const e=document.createElement("div");e.id="crosshair",e.style.cssText=`
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
    `,e.appendChild(t),e.appendChild(n),e}handleMouseMove(e){this.visible&&(this.usingGamepad=!1,this.posX=e.clientX,this.posY=e.clientY,this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`)}updateGamepad(e,t,n){if(!this.visible)return;if(Math.abs(e)>.01||Math.abs(t)>.01){this.usingGamepad=!0;const r=e*this.MAX_SPEED,a=t*this.MAX_SPEED,o=this.ACCELERATION*n;this.velX=this.lerp(this.velX,r,Math.min(1,o/this.MAX_SPEED*3)),this.velY=this.lerp(this.velY,a,Math.min(1,o/this.MAX_SPEED*3))}else{const r=1-this.FRICTION*n;this.velX*=Math.max(0,r),this.velY*=Math.max(0,r),Math.abs(this.velX)<1&&(this.velX=0),Math.abs(this.velY)<1&&(this.velY=0)}(Math.abs(this.velX)>.1||Math.abs(this.velY)>.1)&&(this.posX=Math.max(0,Math.min(window.innerWidth,this.posX+this.velX*n)),this.posY=Math.max(0,Math.min(window.innerHeight,this.posY+this.velY*n)),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`)}lerp(e,t,n){return e+(t-e)*n}isMoving(){return Math.abs(this.velX)>1||Math.abs(this.velY)>1}moveBy(e,t){this.visible&&(Math.abs(e)<.001&&Math.abs(t)<.001||(this.usingGamepad=!0,this.posX=Math.max(0,Math.min(window.innerWidth,this.posX+e)),this.posY=Math.max(0,Math.min(window.innerHeight,this.posY+t)),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`))}getPosition(){return{x:this.posX,y:this.posY}}isUsingGamepad(){return this.usingGamepad}centerCrosshair(){this.posX=window.innerWidth/2,this.posY=window.innerHeight/2,this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`}setVisible(e){this.visible=e,this.container.style.display=e?"block":"none"}isVisible(){return this.visible}destroy(){window.removeEventListener("mousemove",this.boundMouseMove),document.body.style.cursor="",this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}var Ee=(i=>(i[i.none=-1]="none",i[i.ocean=0]="ocean",i[i.plains=1]="plains",i[i.desert=2]="desert",i[i.windswept_hills=3]="windswept_hills",i[i.forest=4]="forest",i[i.taiga=5]="taiga",i[i.swamp=6]="swamp",i[i.river=7]="river",i[i.nether_wastes=8]="nether_wastes",i[i.the_end=9]="the_end",i[i.frozen_ocean=10]="frozen_ocean",i[i.frozen_river=11]="frozen_river",i[i.snowy_plains=12]="snowy_plains",i[i.snowy_mountains=13]="snowy_mountains",i[i.mushroom_fields=14]="mushroom_fields",i[i.mushroom_field_shore=15]="mushroom_field_shore",i[i.beach=16]="beach",i[i.desert_hills=17]="desert_hills",i[i.wooded_hills=18]="wooded_hills",i[i.taiga_hills=19]="taiga_hills",i[i.mountain_edge=20]="mountain_edge",i[i.jungle=21]="jungle",i[i.jungle_hills=22]="jungle_hills",i[i.sparse_jungle=23]="sparse_jungle",i[i.deep_ocean=24]="deep_ocean",i[i.stony_shore=25]="stony_shore",i[i.snowy_beach=26]="snowy_beach",i[i.birch_forest=27]="birch_forest",i[i.birch_forest_hills=28]="birch_forest_hills",i[i.dark_forest=29]="dark_forest",i[i.snowy_taiga=30]="snowy_taiga",i[i.snowy_taiga_hills=31]="snowy_taiga_hills",i[i.old_growth_pine_taiga=32]="old_growth_pine_taiga",i[i.old_growth_pine_taiga_hills=33]="old_growth_pine_taiga_hills",i[i.windswept_forest=34]="windswept_forest",i[i.savanna=35]="savanna",i[i.savanna_plateau=36]="savanna_plateau",i[i.badlands=37]="badlands",i[i.wooded_badlands=38]="wooded_badlands",i[i.badlands_plateau=39]="badlands_plateau",i[i.small_end_islands=40]="small_end_islands",i[i.end_midlands=41]="end_midlands",i[i.end_highlands=42]="end_highlands",i[i.end_barrens=43]="end_barrens",i[i.warm_ocean=44]="warm_ocean",i[i.lukewarm_ocean=45]="lukewarm_ocean",i[i.cold_ocean=46]="cold_ocean",i[i.deep_warm_ocean=47]="deep_warm_ocean",i[i.deep_lukewarm_ocean=48]="deep_lukewarm_ocean",i[i.deep_cold_ocean=49]="deep_cold_ocean",i[i.deep_frozen_ocean=50]="deep_frozen_ocean",i[i.meadow=177]="meadow",i[i.grove=178]="grove",i[i.snowy_slopes=179]="snowy_slopes",i[i.jagged_peaks=180]="jagged_peaks",i[i.frozen_peaks=181]="frozen_peaks",i[i.stony_peaks=182]="stony_peaks",i[i.deep_dark=183]="deep_dark",i[i.mangrove_swamp=184]="mangrove_swamp",i[i.cherry_grove=185]="cherry_grove",i[i.pale_garden=186]="pale_garden",i[i.sunflower_plains=129]="sunflower_plains",i[i.flower_forest=132]="flower_forest",i[i.ice_spikes=140]="ice_spikes",i[i.old_growth_birch_forest=155]="old_growth_birch_forest",i[i.old_growth_spruce_taiga=160]="old_growth_spruce_taiga",i[i.windswept_savanna=163]="windswept_savanna",i[i.eroded_badlands=165]="eroded_badlands",i[i.bamboo_jungle=168]="bamboo_jungle",i[i.bamboo_jungle_hills=169]="bamboo_jungle_hills",i[i.soul_sand_valley=170]="soul_sand_valley",i[i.crimson_forest=171]="crimson_forest",i[i.warped_forest=172]="warped_forest",i[i.basalt_deltas=173]="basalt_deltas",i[i.dripstone_caves=174]="dripstone_caves",i[i.lush_caves=175]="lush_caves",i))(Ee||{});const tv={0:[0,0,112],24:[0,0,48],10:[112,112,214],50:[64,64,144],46:[32,32,112],49:[32,32,80],45:[0,0,172],48:[0,0,128],44:[0,150,255],7:[0,0,255],11:[160,160,255],16:[250,222,85],26:[250,240,192],25:[162,162,132],1:[141,179,96],129:[181,219,136],177:[88,184,88],4:[5,102,33],132:[45,142,73],27:[48,116,68],155:[88,156,108],29:[64,81,26],185:[255,183,197],186:[213,206,199],5:[11,102,89],30:[49,85,74],32:[89,102,81],160:[69,82,61],178:[78,138,78],21:[83,123,9],168:[118,142,20],23:[98,139,23],6:[7,249,178],184:[103,53,43],2:[250,148,24],37:[217,69,21],38:[176,151,101],165:[255,109,61],35:[189,178,95],36:[167,157,100],163:[209,188,115],12:[255,255,255],140:[180,220,220],179:[168,168,168],181:[160,160,255],180:[192,192,192],182:[136,136,136],3:[96,96,96],34:[80,112,80],14:[255,0,255],8:[191,59,59],170:[94,56,48],171:[221,8,8],172:[73,144,123],173:[64,54,54],9:[128,128,255],40:[138,138,128],41:[148,148,138],42:[158,158,148],43:[118,118,108],183:[15,37,47],174:[134,96,67],175:[123,163,49]};function nv(i){return tv[i]??[128,128,128]}function iv(i){return i===0||i===24||i===10||i===50||i===46||i===49||i===45||i===48||i===44||i===47}function sv(i){return i===12||i===30||i===10||i===11||i===26||i===179||i===181||i===140||i===50||i===178}function rv(i){switch(i){case 4:case 132:case 27:case 155:case 29:case 5:case 30:case 32:case 160:case 21:case 168:case 23:case 6:case 184:case 178:case 34:case 185:case 186:case 38:return 1;case 1:case 177:case 35:case 36:case 129:return 2;default:return 0}}function av(i){switch(i){case 6:return[106,112,57];case 184:return[141,177,39];case 21:case 168:case 23:return[89,201,60];case 37:case 38:case 165:return[144,129,77];case 29:return[80,122,50];case 185:return[182,219,136];case 186:return[163,177,157];default:return[141,179,96]}}function ov(i){switch(i){case 0:case 45:case 46:case 44:case 10:return 45;case 24:case 48:case 49:case 50:case 47:return 30;case 7:case 11:return 56;case 16:case 26:return 63;case 25:return 64;case 1:case 129:case 2:return 68;case 177:return 72;case 4:case 132:case 185:return 70;case 27:case 29:case 186:return 68;case 5:case 30:return 68;case 178:return 75;case 21:return 72;case 168:case 23:return 70;case 6:return 62;case 184:return 61;case 35:return 70;case 36:return 85;case 37:return 80;case 38:return 82;case 165:return 75;case 12:case 140:return 68;case 179:return 90;case 181:return 110;case 3:return 90;case 34:return 85;case 180:return 120;case 182:return 115;case 14:return 66;default:return 64}}const lv=512;class Cn{state;constructor(e){let t=BigInt(e)^BigInt("0x9E3779B97F4A7C15");const n=()=>{t=BigInt.asUintN(64,t+BigInt("0x9E3779B97F4A7C15"));let s=t;return s=BigInt.asUintN(64,(s^s>>BigInt(30))*BigInt("0xBF58476D1CE4E5B9")),s=BigInt.asUintN(64,(s^s>>BigInt(27))*BigInt("0x94D049BB133111EB")),Number(BigInt.asUintN(32,s^s>>BigInt(31)))};this.state=[n(),n(),n(),n()]}nextInt(){const e=this.state[0]+this.state[3]>>>0,t=this.state[1]<<9>>>0;return this.state[2]^=this.state[0],this.state[3]^=this.state[1],this.state[1]^=this.state[2],this.state[0]^=this.state[3],this.state[2]^=t,this.state[3]=(this.state[3]<<11|this.state[3]>>>21)>>>0,e}nextFloat(){return(this.nextInt()>>>0)/4294967296}nextDouble(){return this.nextFloat()*2-1}nextBounded(e){return Math.floor(this.nextFloat()*e)}}class oo{perm;originX;originY;originZ;constructor(e){this.perm=new Uint8Array(lv);for(let t=0;t<256;t++)this.perm[t]=t;for(let t=0;t<256;t++){const n=e.nextBounded(256-t)+t,s=this.perm[t];this.perm[t]=this.perm[n],this.perm[n]=s}for(let t=0;t<256;t++)this.perm[t+256]=this.perm[t];this.originX=e.nextDouble()*256,this.originY=e.nextDouble()*256,this.originZ=e.nextDouble()*256}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return t+e*(n-t)}grad(e,t,n,s){const r=e&15,a=r<8?t:n,o=r<4?n:r===12||r===14?t:s;return((r&1)===0?a:-a)+((r&2)===0?o:-o)}sample(e,t,n){const s=e+this.originX,r=t+this.originY,a=n+this.originZ,o=Math.floor(s)&255,c=Math.floor(r)&255,h=Math.floor(a)&255,u=s-Math.floor(s),d=r-Math.floor(r),f=a-Math.floor(a),m=this.fade(u),v=this.fade(d),_=this.fade(f),g=this.perm,p=g[o]+c,T=g[p]+h,S=g[p+1]+h,b=g[o+1]+c,R=g[b]+h,L=g[b+1]+h;return this.lerp(_,this.lerp(v,this.lerp(m,this.grad(g[T],u,d,f),this.grad(g[R],u-1,d,f)),this.lerp(m,this.grad(g[S],u,d-1,f),this.grad(g[L],u-1,d-1,f))),this.lerp(v,this.lerp(m,this.grad(g[T+1],u,d,f-1),this.grad(g[R+1],u-1,d,f-1)),this.lerp(m,this.grad(g[S+1],u,d-1,f-1),this.grad(g[L+1],u-1,d-1,f-1))))}sample2D(e,t){return this.sample(e,0,t)}}class ss{octaves;lacunarity;persistence;constructor(e,t,n=2,s=.5){this.octaves=[],this.lacunarity=n,this.persistence=s;for(let r=0;r<t;r++)this.octaves.push(new oo(e))}sample(e,t,n){let s=0,r=1,a=1,o=0;for(const c of this.octaves)s+=r*c.sample(e*a,t*a,n*a),o+=r,r*=this.persistence,a*=this.lacunarity;return s/o}sample2D(e,t){return this.sample(e,0,t)}}let cv=class uh{perm;permMod12;static GRAD3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];static F2=.5*(Math.sqrt(3)-1);static G2=(3-Math.sqrt(3))/6;constructor(e){this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);const t=new Uint8Array(256);for(let n=0;n<256;n++)t[n]=n;for(let n=255;n>0;n--){const s=e.nextBounded(n+1),r=t[n];t[n]=t[s],t[s]=r}for(let n=0;n<512;n++)this.perm[n]=t[n&255],this.permMod12[n]=this.perm[n]%12}dot2(e,t,n){return e[0]*t+e[1]*n}sample2D(e,t){const{F2:n,G2:s,GRAD3:r}=uh,a=(e+t)*n,o=Math.floor(e+a),c=Math.floor(t+a),h=(o+c)*s,u=o-h,d=c-h,f=e-u,m=t-d;let v,_;f>m?(v=1,_=0):(v=0,_=1);const g=f-v+s,p=m-_+s,T=f-1+2*s,S=m-1+2*s,b=o&255,R=c&255,L=this.permMod12[b+this.perm[R]],C=this.permMod12[b+v+this.perm[R+_]],P=this.permMod12[b+1+this.perm[R+1]];let y=0,x=0,A=0,O=.5-f*f-m*m;O>=0&&(O*=O,y=O*O*this.dot2(r[L],f,m));let F=.5-g*g-p*p;F>=0&&(F*=F,x=F*F*this.dot2(r[C],g,p));let Y=.5-T*T-S*S;return Y>=0&&(Y*=Y,A=Y*Y*this.dot2(r[P],T,S)),70*(y+x+A)}};function oc(i,e){if(i.length<2)return i[0]?.[1]??0;let t=0;for(;t<i.length-1&&i[t+1][0]<e;)t++;if(t>=i.length-1)return i[i.length-1][1];if(t<0||e<i[0][0])return i[0][1];const n=i[t][0],s=i[t+1][0],r=i[t][1],a=i[t+1][1],o=(e-n)/(s-n),c=o*o*(3-2*o);return r+(a-r)*c}class hv{temperatureNoise;humidityNoise;continentalnessNoise;erosionNoise;weirdnessNoise;shiftNoise;constructor(e){const t=new Cn(e),n=new Cn(e+1),s=new Cn(e+2),r=new Cn(e+3),a=new Cn(e+4),o=new Cn(e+5);this.temperatureNoise=new ss(t,4,2,.5),this.humidityNoise=new ss(n,4,2,.5),this.continentalnessNoise=new ss(s,6,2,.5),this.erosionNoise=new ss(r,4,2,.5),this.weirdnessNoise=new ss(a,4,2,.5),this.shiftNoise=new cv(o)}sampleClimate(e,t,n=0){const r=this.shiftNoise.sample2D(e*.0025,t*.0025)*4,a=this.shiftNoise.sample2D(e*.0025+100,t*.0025+100)*4,o=e+r,c=t+a,h=this.temperatureNoise.sample2D(o*.0025,c*.0025),u=this.humidityNoise.sample2D(o*.0025,c*.0025),d=this.continentalnessNoise.sample2D(o*65e-5,c*65e-5),f=this.erosionNoise.sample2D(o*.00125,c*.00125),m=this.weirdnessNoise.sample2D(o*.0025,c*.0025);return{temperature:h,humidity:u,continentalness:d,erosion:f,weirdness:m,depth:n*.01}}}class lc{seed;biomeNoise;constructor(e){this.seed=e??Math.floor(Math.random()*2147483647),this.biomeNoise=new hv(this.seed)}getBiomeAt(e,t,n,s){const r=e===1?t>>2:t,a=e===1?s>>2:s,o=e===1?n>>2:n,c=this.biomeNoise.sampleClimate(r,a,o);return this.selectBiome(c)}genBiomes2D(e,t,n,s,r,a,o=63){const c=o>>2;for(let h=0;h<a;h++)for(let u=0;u<r;u++){const d=t===1?n+u>>2:n+u,f=t===1?s+h>>2:s+h,m=this.biomeNoise.sampleClimate(d,f,c);e[h*r+u]=this.selectBiome(m)}}getTerrainHeight(e,t){const n=this.biomeNoise.sampleClimate(e>>2,t>>2),s=oc([[-1,30],[-.6,40],[-.2,55],[0,62],[.1,65],[.3,68],[.5,75],[.7,85],[1,100]],n.continentalness),r=oc([[-1,.6],[-.5,.8],[0,1],[.5,1.2],[1,1.5]],n.erosion),a=n.weirdness*8;return Math.max(0,Math.min(255,s*r+a))}selectBiome(e){const{temperature:t,humidity:n,continentalness:s,erosion:r,weirdness:a}=e,o=.1;return s<-.1?this.selectOceanBiome(t,s):s<o?this.selectShoreBiome(t,n,s):Math.abs(a)<.05&&r>.3&&s>.1?t<-.3?Ee.frozen_river:Ee.river:s>.6&&r<-.2?this.selectMountainBiome(t,n,r,a):this.selectLandBiome(t,n,s,r,a)}selectOceanBiome(e,t){const n=t<-.5;return e<-.5?n?Ee.deep_frozen_ocean:Ee.frozen_ocean:e<-.15?n?Ee.deep_cold_ocean:Ee.cold_ocean:e<.2?n?Ee.deep_ocean:Ee.ocean:e<.5?n?Ee.deep_lukewarm_ocean:Ee.lukewarm_ocean:n?Ee.deep_warm_ocean:Ee.warm_ocean}selectShoreBiome(e,t,n){return n<-.0935?e<-.3?Ee.snowy_beach:t<-.3||Math.abs(e)>.4?Ee.stony_shore:Ee.beach:t>.3&&e>0?e>.5?Ee.mangrove_swamp:Ee.swamp:Ee.plains}selectMountainBiome(e,t,n,s){const r=s>.5?"jagged":s<-.3?"stony":"frozen";return e<-.4?n<-.5?r==="jagged"?Ee.jagged_peaks:Ee.frozen_peaks:t>0?Ee.grove:Ee.snowy_slopes:e<0?n<-.5?r==="jagged"?Ee.jagged_peaks:Ee.stony_peaks:Ee.windswept_forest:n<-.5?Ee.stony_peaks:t>.3?Ee.windswept_forest:Ee.windswept_hills}selectLandBiome(e,t,n,s,r){return e<-.45?t>.3?Ee.snowy_taiga:r>.7?Ee.ice_spikes:Ee.snowy_plains:e<-.15?t>.4?Ee.old_growth_spruce_taiga:t>.1?Ee.taiga:Ee.snowy_plains:e<.2?t>.5?r>.4?Ee.dark_forest:Ee.old_growth_birch_forest:t>.2?r>.3?Ee.flower_forest:Ee.forest:t>-.2?r>.5?Ee.meadow:Ee.plains:n>.5?Ee.sunflower_plains:Ee.plains:e<.55?t>.5?r>.3?Ee.bamboo_jungle:Ee.jungle:t>.2?Ee.sparse_jungle:t>-.3?r>.5?Ee.cherry_grove:Ee.forest:Ee.savanna:t>.3?Ee.jungle:t>-.1?r>.3?Ee.windswept_savanna:Ee.savanna_plateau:t<-.4?Ee.desert:r>.5?Ee.eroded_badlands:r>0?Ee.wooded_badlands:Ee.badlands}getSeed(){return this.seed}}let ot=null,Ks=null;async function uv(){return ot||Ks||(Ks=(async()=>{await new Promise((e,t)=>{if(window.CubiomesModule){e();return}const n=document.createElement("script");n.src="/cubiomes.js",n.onload=()=>e(),n.onerror=()=>t(new Error("Failed to load cubiomes.js")),document.head.appendChild(n)});const i=window.CubiomesModule;if(!i)throw new Error("CubiomesModule not found in window");return ot=await i(),console.log("✅ Cubiomes WASM module loaded"),ot})(),Ks)}const dv={MC_1_20:20},fv={NETHER:-1,OVERWORLD:0,END:1};class pv{initialized=!1;seed;fallbackGenerator=null;constructor(e){this.seed=BigInt(e??Math.floor(Math.random()*2147483647))}async init(e=dv.MC_1_20){if(!(typeof window.CubiomesModule=="function")){this.fallbackGenerator=new lc(this.getSeedNumber()),this.initialized=!0,console.log(`🌍 Fallback generator initialized with seed: ${this.seed.toString(16)}`);return}try{if(ot||await uv(),ot){ot._init_generator(e,0);const n=Number(this.seed>>BigInt(32)&BigInt(4294967295)),s=Number(this.seed&BigInt(4294967295));ot._apply_seed(n,s,fv.OVERWORLD),this.initialized=!0,console.log(`🌍 WASM generator initialized with seed: ${this.seed.toString(16)}`);return}}catch(n){console.warn("⚠️ cubiomes WASM unavailable, using TypeScript fallback generator.",n)}this.fallbackGenerator=new lc(this.getSeedNumber()),this.initialized=!0,console.log(`🌍 Fallback generator initialized with seed: ${this.seed.toString(16)}`)}getBiomeAt(e,t,n,s){if(!this.initialized)throw new Error("Generator not initialized");if(this.fallbackGenerator)return this.fallbackGenerator.getBiomeAt(e,t,n,s);if(!ot)throw new Error("WASM module unavailable");return ot._get_biome_at(e,t,n,s)}genBiomes2D(e,t,n,s,r,a=63){if(!this.initialized)throw new Error("Generator not initialized");if(this.fallbackGenerator){const u=new Int32Array(s*r);return this.fallbackGenerator.genBiomes2D(u,e,t,n,s,r,a),u}if(!ot)throw new Error("WASM module unavailable");const o=ot._alloc_biome_buffer(s,r),c=ot._gen_biomes_2d(o,e,t,n,s,r,a);if(c!==0)throw ot._free_buffer(o),new Error(`Biome generation failed with code ${c}`);const h=new Int32Array(s*r);for(let u=0;u<s*r;u++)h[u]=ot.getValue(o+u*4,"i32");return ot._free_buffer(o),h}isOcean(e){return this.fallbackGenerator?iv(e):ot?ot._is_ocean(e)!==0:!1}isSnowy(e){return this.fallbackGenerator?sv(e):ot?ot._is_snowy_biome(e)!==0:!1}getBiomeColor(e){if(this.fallbackGenerator)return nv(e);if(!ot)return[128,128,128];const t=ot._get_biome_color(e);return[t>>16&255,t>>8&255,t&255]}getBiomeBaseHeight(e){return this.fallbackGenerator?ov(e):ot?ot._get_biome_base_height(e):64}biomeHasTrees(e){return this.fallbackGenerator?rv(e):ot?ot._biome_has_trees(e):0}getBiomeGrassColor(e){if(this.fallbackGenerator)return av(e);if(!ot)return[141,179,96];const t=ot._get_biome_grass_color(e);return[t>>16&255,t>>8&255,t&255]}getSeed(){return this.seed}getSeedNumber(){return Number(this.seed&BigInt(2147483647))}getBiomeName(e){return{0:"Ocean",1:"Plains",2:"Desert",3:"Windswept Hills",4:"Forest",5:"Taiga",6:"Swamp",7:"River",8:"Nether Wastes",9:"The End",10:"Frozen Ocean",11:"Frozen River",12:"Snowy Plains",13:"Snowy Mountains",14:"Mushroom Fields",15:"Mushroom Field Shore",16:"Beach",17:"Desert Hills",18:"Wooded Hills",19:"Taiga Hills",20:"Mountain Edge",21:"Jungle",22:"Jungle Hills",23:"Sparse Jungle",24:"Deep Ocean",25:"Stony Shore",26:"Snowy Beach",27:"Birch Forest",28:"Birch Forest Hills",29:"Dark Forest",30:"Snowy Taiga",31:"Snowy Taiga Hills",32:"Old Growth Pine Taiga",33:"Old Growth Pine Taiga Hills",34:"Windswept Forest",35:"Savanna",36:"Savanna Plateau",37:"Badlands",38:"Wooded Badlands",39:"Badlands Plateau",40:"Small End Islands",41:"End Midlands",42:"End Highlands",43:"End Barrens",44:"Warm Ocean",45:"Lukewarm Ocean",46:"Cold Ocean",47:"Deep Warm Ocean",48:"Deep Lukewarm Ocean",49:"Deep Cold Ocean",50:"Deep Frozen Ocean",127:"The Void",129:"Sunflower Plains",130:"Desert Lakes",131:"Windswept Gravelly Hills",132:"Flower Forest",133:"Taiga Mountains",134:"Swamp Hills",140:"Ice Spikes",149:"Jungle Edge Mutated",151:"Modified Jungle Edge",155:"Old Growth Birch Forest",156:"Birch Forest Mountains",157:"Dark Forest Hills",158:"Snowy Taiga Mountains",160:"Old Growth Spruce Taiga",161:"Giant Spruce Taiga Hills",162:"Modified Gravelly Mountains",163:"Windswept Savanna",164:"Shattered Savanna Plateau",165:"Eroded Badlands",166:"Modified Wooded Badlands Plateau",167:"Modified Badlands Plateau",168:"Bamboo Jungle",169:"Bamboo Jungle Hills",170:"Soul Sand Valley",171:"Crimson Forest",172:"Warped Forest",173:"Basalt Deltas",174:"Dripstone Caves",175:"Lush Caves",177:"Meadow",178:"Grove",179:"Snowy Slopes",180:"Frozen Peaks",181:"Jagged Peaks",182:"Stony Peaks",183:"Cherry Grove",184:"Deep Dark",185:"Mangrove Swamp"}[e]||`Unknown (${e})`}}async function mv(i){const e=new pv(i);return await e.init(),e}const gv={[Xe.Oak]:{baseHeight:4,heightRandA:2,heightRandB:0},[Xe.Birch]:{baseHeight:5,heightRandA:2,heightRandB:0},[Xe.Spruce]:{baseHeight:5,heightRandA:2,heightRandB:3},[Xe.Jungle]:{baseHeight:4,heightRandA:8,heightRandB:0},[Xe.Acacia]:{baseHeight:5,heightRandA:2,heightRandB:0},[Xe.DarkOak]:{baseHeight:6,heightRandA:2,heightRandB:0},[Xe.Cherry]:{baseHeight:4,heightRandA:3,heightRandB:0},[Xe.Mangrove]:{baseHeight:5,heightRandA:3,heightRandB:0},[Xe.Cactus]:{baseHeight:1,heightRandA:2,heightRandB:0}};function cc(i,e){const t=gv[i];return t.baseHeight+e.nextBounded(t.heightRandA+1)+e.nextBounded(t.heightRandB+1)}function hc(i,e,t,n,s){for(let r=0;r<=t;r++){const a=Math.max(0,n-Math.floor(r/2));for(let o=-a;o<=a;o++)for(let c=-a;c<=a;c++)Math.abs(o)===a&&Math.abs(c)===a&&(s.nextBounded(2)===0||r===0)||i.push({dx:o,dy:e-r,dz:c,type:"leaves"})}}function vv(i,e,t,n,s){let r=s.nextBounded(2),a=1,o=0;for(let c=0;c<t;c++){const h=e-c;for(let u=-r;u<=r;u++)for(let d=-r;d<=r;d++)Math.abs(u)===r&&Math.abs(d)===r&&r>0||i.push({dx:u,dy:h,dz:d,type:"leaves"});r>=a?(r=o,o=1,a=Math.min(n,a+1)):r++}}function _v(i,e,t){const n=2+t.nextBounded(2);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++)i.push({dx:s,dy:e,dz:r,type:"leaves"});for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++)s*s+r*r<=n*n+1&&t.nextFloat()>.1&&i.push({dx:s,dy:e-1,dz:r,type:"leaves"})}function xv(i,e,t){for(let n=0;n<3;n++){const s=n===1?3:2;for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++)Math.abs(r)===s&&Math.abs(a)===s||i.push({dx:r,dy:e-n,dz:a,type:"leaves"})}}function Sv(i,e,t){const n=[{dx:0,dy:0,dz:0,r:2},{dx:-2,dy:-1,dz:0,r:2},{dx:2,dy:-1,dz:0,r:2},{dx:0,dy:-1,dz:-2,r:2},{dx:0,dy:-1,dz:2,r:2}];for(const s of n)for(let r=-s.r;r<=s.r;r++)for(let a=-s.r;a<=s.r;a++)for(let o=-1;o<=1;o++)r*r+a*a+o*o<=s.r*s.r+1&&t.nextFloat()>.15&&i.push({dx:s.dx+r,dy:e+s.dy+o,dz:s.dz+a,type:"leaves"})}function Mv(i,e,t){for(let s=0;s<4;s++){const r=s===0||s===3?2:3;for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++)Math.abs(a)===r&&Math.abs(o)===r&&t.nextBounded(2)===0||i.push({dx:a,dy:e-s,dz:o,type:"leaves"})}}function uc(i){const e=new Map;for(const t of i){const n=`${t.dx},${t.dy},${t.dz}`;e.get(n)?(t.type==="log"||t.type==="cactus")&&e.set(n,t):e.set(n,t)}return Array.from(e.values())}function bv(i,e){const t=[];if(i===Xe.Cactus){const o=cc(i,e);for(let c=0;c<o;c++)t.push({dx:0,dy:c,dz:0,type:"cactus"});return{type:i,blocks:uc(t),trunkHeight:o,foliageRadius:0}}const n=cc(i,e);if(i===Xe.DarkOak||i===Xe.Jungle)for(let o=0;o<n;o++)t.push({dx:0,dy:o,dz:0,type:"log"}),t.push({dx:1,dy:o,dz:0,type:"log"}),t.push({dx:0,dy:o,dz:1,type:"log"}),t.push({dx:1,dy:o,dz:1,type:"log"});else if(i===Xe.Acacia){for(let u=0;u<n-2;u++)t.push({dx:0,dy:u,dz:0,type:"log"});const o=e.nextBounded(4),c=o===0?1:o===1?-1:0,h=o===2?1:o===3?-1:0;t.push({dx:c,dy:n-2,dz:h,type:"log"}),t.push({dx:c*2,dy:n-1,dz:h*2,type:"log"})}else for(let o=0;o<n;o++)t.push({dx:0,dy:o,dz:0,type:"log"});const r=n+1;let a=2;switch(i){case Xe.Oak:case Xe.Birch:a=2,hc(t,r,3,a,e);break;case Xe.Spruce:a=2;const o=Math.max(4,n-2);vv(t,r,o,a,e);break;case Xe.Jungle:a=3,Mv(t,r,e);break;case Xe.Acacia:a=3,_v(t,r-1,e);break;case Xe.DarkOak:a=3,xv(t,r);break;case Xe.Cherry:a=4,Sv(t,r,e);break;case Xe.Mangrove:a=3,hc(t,r,4,a,e);for(let c=0;c<4;c++){const h=c/4*Math.PI*2,u=Math.round(Math.cos(h)*1.5),d=Math.round(Math.sin(h)*1.5);(u!==0||d!==0)&&(t.push({dx:u,dy:0,dz:d,type:"log"}),t.push({dx:u,dy:1,dz:d,type:"log"}))}break}return{type:i,blocks:uc(t),trunkHeight:n,foliageRadius:a}}function yv(i,e){switch(i){case W.forest:case W.flower_forest:case W.plains:case W.meadow:case W.sunflower_plains:return e.nextFloat()<.8?Xe.Oak:Xe.Birch;case W.birch_forest:case W.old_growth_birch_forest:return Xe.Birch;case W.dark_forest:case W.pale_garden:return e.nextFloat()<.7?Xe.DarkOak:Xe.Oak;case W.taiga:case W.snowy_taiga:case W.old_growth_pine_taiga:case W.old_growth_spruce_taiga:case W.grove:case W.windswept_forest:return Xe.Spruce;case W.jungle:case W.bamboo_jungle:case W.sparse_jungle:return e.nextFloat()<.3?Xe.Jungle:Xe.Oak;case W.savanna:case W.savanna_plateau:case W.windswept_savanna:return Xe.Acacia;case W.cherry_grove:return Xe.Cherry;case W.swamp:return Xe.Oak;case W.mangrove_swamp:return Xe.Mangrove;case W.desert:return Xe.Cactus;case W.wooded_badlands:return Xe.Oak;default:return null}}function wv(i){switch(i){case W.forest:case W.flower_forest:case W.birch_forest:case W.dark_forest:return 8;case W.jungle:case W.bamboo_jungle:return 12;case W.taiga:case W.snowy_taiga:case W.old_growth_pine_taiga:case W.old_growth_spruce_taiga:return 6;case W.plains:case W.meadow:case W.sunflower_plains:return 1;case W.savanna:case W.savanna_plateau:return 2;case W.desert:return 2;case W.swamp:case W.mangrove_swamp:return 4;case W.cherry_grove:return 5;case W.grove:case W.windswept_forest:return 4;default:return 0}}l.Air+"",l.Stone+"",l.Dirt+"",l.Grass+"",l.Sand+"",l.Gravel+"",l.Water+"",l.Ice+"",l.Snow+"",l.SnowBlock+"",l.Clay+"",l.Bedrock+"",l.OakLog+"",l.BirchLog+"",l.SpruceLog+"",l.JungleLog+"",l.AcaciaLog+"",l.DarkOakLog+"",l.CherryLog+"",l.MangroveLog+"",l.OakLeaves+"",l.BirchLeaves+"",l.SpruceLeaves+"",l.JungleLeaves+"",l.AcaciaLeaves+"",l.DarkOakLeaves+"",l.CherryLeaves+"",l.MangroveLeaves+"",l.Cactus+"",l.CactusTop+"",l.DeadBush+"",l.TallGrass+"",l.Fern+"",l.Podzol+"",l.Mycelium+"",l.RedSand+"",l.Terracotta+"",l.PackedIce+"",l.BlueIce+"",l.Coral+"",l.Seagrass+"";class Tv{generator=null;seed;initialized=!1;initPromise=null;terrainNoise=null;detailNoise=null;constructor(e){this.seed=e;const t=new Cn(e),n=new Cn(e^305419896);this.terrainNoise=new oo(t),this.detailNoise=new oo(n)}async init(){if(!this.initialized)return this.initPromise?this.initPromise:(this.initPromise=(async()=>{this.generator=await mv(BigInt(this.seed)),this.initialized=!0,console.log(`✅ ChunkGenerator initialized with seed: ${this.seed}`)})(),this.initPromise)}isReady(){return this.initialized&&this.generator!==null}generateChunk(e,t){if(!this.generator)throw new Error("Generator not initialized. Call init() first.");const n=new Uint8Array(X*X),s=new Int16Array(X*X),r=new Uint8Array(X*X),a=new Uint8Array(X*X),o=new Uint8Array(X),c=new Uint8Array(X),h=[],u=e*X,d=t*X,f=this.generator.genBiomes2D(1,u,d,X,X,63);for(let m=0;m<X;m++)for(let v=0;v<X;v++){const _=m*X+v,g=u+v,p=d+m,T=f[_];s[_]=T;const S=this.calculateSmoothHeight(g,p,T);n[_]=S}for(let m=0;m<X;m++){const v=u+X,_=d+m,g=this.getBiomeAt(v,_);o[m]=this.calculateSmoothHeight(v,_,g)}for(let m=0;m<X;m++){const v=u+m,_=d+X,g=this.getBiomeAt(v,_);c[m]=this.calculateSmoothHeight(v,_,g)}for(let m=0;m<3;m++)for(let v=0;v<X;v++)for(let _=0;_<X;_++){const g=v*X+_,p=n[g],T=v>0?n[(v-1)*X+_]:p,S=v<X-1?n[(v+1)*X+_]:c[_],b=_>0?n[v*X+(_-1)]:p,R=_<X-1?n[v*X+(_+1)]:o[v],L=[T,S,b,R];let C=Math.min(...L),P=Math.max(...L);n[g]=Math.max(C-1,Math.min(P+1,p))}for(let m=0;m<X;m++)for(let v=0;v<X;v++){const _=m*X+v,g=s[_],p=n[_],T=u+v,S=d+m,{block:b,waterLevel:R}=this.getTopBlock(g,p,T,S);r[_]=b,a[_]=R>0?ei-p:0}return this.generateTrees(e,t,n,s,r,h),{heightMap:n,biomeMap:s,topBlock:r,trees:h,waterDepth:a,rightNeighborHeights:o,frontNeighborHeights:c}}calculateSmoothHeight(e,t,n){return ei}isSwampWaterPatch(e,t){if(!this.detailNoise)return!1;const n=.08;return this.detailNoise.sample2D(e*n,t*n)<-.3}isMountainBiome(e){return e===W.windswept_hills||e===W.windswept_gravelly_hills||e===W.windswept_forest||e===W.windswept_savanna||e===W.jagged_peaks||e===W.stony_peaks||e===W.frozen_peaks||e===W.snowy_slopes||e===W.snowy_mountains||e===W.grove||e===W.stony_shore||e>=130&&e<=165}calculateHeight(e,t,n){if(!this.terrainNoise)return ei;const s=.005,r=this.terrainNoise.sample2D(e*s,t*s);if(this.generator?.isOcean(n)||n===W.river||n===W.frozen_river)return ei-1;let a=ei+(r+1)*3;return this.isMountainBiome(n)?a+=3:(n===W.beach||n===W.snowy_beach)&&(a=ei),Math.round(a)}getTopBlock(e,t,n,s){const r=[W.ocean,W.deep_ocean,W.cold_ocean,W.deep_cold_ocean,W.lukewarm_ocean,W.deep_lukewarm_ocean,W.warm_ocean,0,24,44,45,46,47,48,49,50];if([W.frozen_ocean,W.deep_frozen_ocean,10,50].includes(e))return{block:l.Ice,waterLevel:0};if(r.includes(e))return{block:l.Water,waterLevel:0};if(this.generator?.isOcean(e))return{block:l.Water,waterLevel:0};if(e===W.river||e===7)return{block:l.Water,waterLevel:0};if(e===W.frozen_river||e===11)return{block:l.Ice,waterLevel:0};if(e===W.swamp||e===W.mangrove_swamp)return this.isSwampWaterPatch(n,s)?{block:l.Water,waterLevel:0}:{block:l.Grass,waterLevel:0};switch(e){case W.desert:return{block:l.Sand,waterLevel:0};case W.badlands:case W.eroded_badlands:return{block:l.Terracotta,waterLevel:0};case W.wooded_badlands:case W.wooded_badlands_plateau:return{block:l.RedSand,waterLevel:0};case W.beach:case W.snowy_beach:return{block:l.Sand,waterLevel:0};case W.stony_shore:return{block:l.Stone,waterLevel:0};case W.snowy_plains:case W.snowy_slopes:case W.frozen_peaks:case W.snowy_mountains:return{block:l.Snow,waterLevel:0};case W.ice_spikes:return{block:l.PackedIce,waterLevel:0};case W.jagged_peaks:case W.stony_peaks:return{block:l.Stone,waterLevel:0};case W.windswept_hills:case W.windswept_gravelly_hills:return{block:l.Gravel,waterLevel:0};case W.old_growth_pine_taiga:case W.old_growth_spruce_taiga:return{block:l.Podzol,waterLevel:0};case W.mushroom_fields:return{block:l.Mycelium,waterLevel:0};case W.plains:case W.sunflower_plains:case W.meadow:case W.forest:case W.birch_forest:case W.flower_forest:case W.old_growth_birch_forest:case W.dark_forest:case W.cherry_grove:case W.taiga:case W.snowy_taiga:case W.grove:case W.jungle:case W.bamboo_jungle:case W.sparse_jungle:case W.savanna:case W.savanna_plateau:case W.windswept_savanna:case W.windswept_forest:return{block:l.Grass,waterLevel:0};default:return{block:l.Grass,waterLevel:0}}}generateTrees(e,t,n,s,r,a){const o=new Cn(this.seed^e*341873128712+t*132897987541),c=X/2*X+X/2,h=s[c],u=wv(h);if(u===0)return;const d=u*3;let f=0;for(let m=0;m<d&&f<u;m++){const v=2+o.nextBounded(X-4),_=2+o.nextBounded(X-4),g=_*X+v,p=s[g],T=n[g],S=r[g];if(S===l.Water||S===l.Ice||T<ei||p===W.beach||p===W.snowy_beach||p===W.stony_shore)continue;const b=yv(p,o);if(b===null)continue;const R=b===Xe.Jungle?4:3;let L=!1;for(const P of a){const y=P.x-v,x=P.z-_;if(y*y+x*x<R*R){L=!0;break}}if(L)continue;const C=bv(b,o);a.push({x:v,z:_,type:b,height:C.trunkHeight,blocks:C.blocks}),f++}}isWaterBiome(e){switch(e){case W.ocean:case W.deep_ocean:case W.cold_ocean:case W.deep_cold_ocean:case W.frozen_ocean:case W.deep_frozen_ocean:case W.lukewarm_ocean:case W.deep_lukewarm_ocean:case W.warm_ocean:case W.river:case W.frozen_river:return!0;default:return!1}}hashPosition(e,t){let n=this.seed;return n^=e*374761393,n^=t*668265263,n^=n>>13,n*=1274126177,n>>>0}getBiomeAt(e,t){return this.generator?this.generator.getBiomeAt(1,e,63,t):W.plains}getHeightAt(e,t){const n=this.getBiomeAt(e,t);return this.calculateHeight(e,t,n)}getBiomeColor(e){return this.generator?this.generator.getBiomeColor(e):[128,128,128]}getGrassColor(e){return this.generator?this.generator.getBiomeGrassColor(e):[124,189,80]}getSeed(){return this.seed}getBiomeName(e){return this.generator?this.generator.getBiomeName(e):"Unknown"}isOcean(e){return this.generator?this.generator.isOcean(e):!1}}async function Ev(i){const e=new Tv(i);return await e.init(),e}const Av="/soundtrack",dc=["music/game/calm1.ogg","music/game/calm2.ogg","music/game/calm3.ogg","music/game/hal1.ogg","music/game/hal2.ogg","music/game/hal3.ogg","music/game/hal4.ogg","music/game/nuance1.ogg","music/game/nuance2.ogg","music/game/piano1.ogg","music/game/piano2.ogg","music/game/piano3.ogg"],Cv=["music/game/creative/creative1.ogg","music/game/creative/creative2.ogg","music/game/creative/creative3.ogg","music/game/creative/creative4.ogg","music/game/creative/creative5.ogg","music/game/creative/creative6.ogg"],Lv=["music/menu/menu1.ogg","music/menu/menu2.ogg","music/menu/menu3.ogg","music/menu/menu4.ogg"],Rv=["music/game/water/axolotl.ogg","music/game/water/dragon_fish.ogg","music/game/water/shuniji.ogg"],fc=300*1e3,Pv=900*1e3,pc=3e3;class Di{static instance;currentAudio=null;currentContext="none";volume=.5;enabled=!0;isPlaying=!1;isFading=!1;nextTrackTimeout=null;fadeInterval=null;lastPlayedTracks=[];playedTrackHistory=new Map;constructor(){}static getInstance(){return Di.instance||(Di.instance=new Di),Di.instance}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.currentAudio&&!this.isFading&&(this.currentAudio.volume=this.volume)}getVolume(){return this.volume}setEnabled(e){this.enabled=e,e?this.currentContext!=="none"&&this.scheduleNextTrack(1e3):this.stop()}isEnabled(){return this.enabled}isCurrentlyPlaying(){return this.isPlaying}getCurrentTrackName(){if(!this.currentAudio||!this.isPlaying)return null;const t=this.currentAudio.src.match(/\/([^/]+)\.ogg$/);return t?t[1].replace(/_/g," ").replace(/\d+$/,"").trim():null}setContext(e){if(e===this.currentContext)return;const t=this.currentContext;if(this.currentContext=e,this.isPlaying)this.fadeOut(()=>{e!=="none"&&this.scheduleNextTrack(2e3)});else if(e!=="none"&&this.enabled){const n=t==="none"?5e3:this.getRandomDelay();this.scheduleNextTrack(n)}}start(){!this.enabled||this.currentContext==="none"||this.scheduleNextTrack(3e3)}stop(){this.clearScheduledTrack(),this.currentAudio&&this.fadeOut(()=>{this.currentAudio&&(this.currentAudio.pause(),this.currentAudio=null),this.isPlaying=!1})}skip(){this.currentAudio?this.fadeOut(()=>{this.playNextTrack()}):this.playNextTrack()}scheduleNextTrack(e){this.clearScheduledTrack(),this.nextTrackTimeout=setTimeout(()=>{this.playNextTrack()},e)}clearScheduledTrack(){this.nextTrackTimeout&&(clearTimeout(this.nextTrackTimeout),this.nextTrackTimeout=null)}getTracksForContext(){switch(this.currentContext){case"menu":return Lv;case"creative":return[...dc,...Cv];case"underwater":return Rv;case"overworld":default:return dc}}selectRandomTrack(){const e=this.getTracksForContext(),t=e.filter(o=>!this.lastPlayedTracks.includes(o)),n=t.length>0?t:e,s=n.map(o=>1/((this.playedTrackHistory.get(o)||0)+1)),r=s.reduce((o,c)=>o+c,0);let a=Math.random()*r;for(let o=0;o<n.length;o++)if(a-=s[o],a<=0)return n[o];return n[Math.floor(Math.random()*n.length)]}playNextTrack(){if(!this.enabled||this.currentContext==="none")return;const e=this.selectRandomTrack(),t=`${Av}/${e}`;this.lastPlayedTracks.push(e),this.lastPlayedTracks.length>3&&this.lastPlayedTracks.shift(),this.playedTrackHistory.set(e,(this.playedTrackHistory.get(e)||0)+1),this.currentAudio=new Audio(t),this.currentAudio.volume=0,this.currentAudio.addEventListener("ended",()=>{this.isPlaying=!1,this.scheduleNextTrack(this.getRandomDelay())}),this.currentAudio.addEventListener("error",()=>{console.warn(`Failed to load music track: ${e}`),this.isPlaying=!1,this.scheduleNextTrack(5e3)}),this.currentAudio.play().then(()=>{this.isPlaying=!0,this.fadeIn()}).catch(()=>{console.log("Music autoplay blocked, waiting for user interaction")})}fadeIn(){if(!this.currentAudio)return;this.isFading=!0;const e=0,t=this.volume,n=Date.now();this.clearFadeInterval(),this.fadeInterval=setInterval(()=>{const s=Date.now()-n,r=Math.min(1,s/pc);this.currentAudio&&(this.currentAudio.volume=e+(t-e)*r),r>=1&&(this.clearFadeInterval(),this.isFading=!1)},50)}fadeOut(e){if(!this.currentAudio){e?.();return}this.isFading=!0;const t=this.currentAudio.volume,n=Date.now();this.clearFadeInterval(),this.fadeInterval=setInterval(()=>{const s=Date.now()-n,r=Math.min(1,s/pc);this.currentAudio&&(this.currentAudio.volume=t*(1-r)),r>=1&&(this.clearFadeInterval(),this.isFading=!1,this.currentAudio&&this.currentAudio.pause(),this.isPlaying=!1,e?.())},50)}clearFadeInterval(){this.fadeInterval&&(clearInterval(this.fadeInterval),this.fadeInterval=null)}getRandomDelay(){return fc+Math.random()*(Pv-fc)}destroy(){this.stop(),this.clearScheduledTrack(),this.clearFadeInterval()}}function ps(){return Di.getInstance()}var mt=(i=>(i.MoveForward="moveForward",i.MoveBackward="moveBackward",i.MoveLeft="moveLeft",i.MoveRight="moveRight",i.Jump="jump",i.Crouch="crouch",i.Attack="attack",i.Use="use",i.NextSlot="nextSlot",i.PrevSlot="prevSlot",i.OpenInventory="openInventory",i.Pause="pause",i.MenuUp="menuUp",i.MenuDown="menuDown",i.MenuLeft="menuLeft",i.MenuRight="menuRight",i.MenuSelect="menuSelect",i.MenuBack="menuBack",i.ZoomIn="zoomIn",i.ZoomOut="zoomOut",i.CrosshairRight="crosshairRight",i.CrosshairLeft="crosshairLeft",i.CrosshairUp="crosshairUp",i.CrosshairDown="crosshairDown",i))(mt||{});const dh=[{button:0,action:"jump"},{button:1,action:"attack"},{button:2,action:"use"},{button:3,action:"openInventory"},{button:10,action:"crouch"},{button:5,action:"nextSlot"},{button:4,action:"prevSlot"},{button:7,action:"zoomIn"},{button:6,action:"zoomOut"},{button:9,action:"pause"},{button:12,action:"menuUp"},{button:13,action:"menuDown"},{button:14,action:"menuLeft"},{button:15,action:"menuRight"},{button:0,action:"menuSelect"},{button:1,action:"menuBack"}],fh=[{axis:0,positiveAction:"moveRight",negativeAction:"moveLeft",deadzone:.15},{axis:1,positiveAction:"moveForward",negativeAction:"moveBackward",deadzone:.15},{axis:2,positiveAction:"crosshairRight",negativeAction:"crosshairLeft",deadzone:.15},{axis:3,positiveAction:"crosshairDown",negativeAction:"crosshairUp",deadzone:.15}],da={enabled:!0,deadzone:.15,sensitivity:1,invertY:!1,vibration:!0,buttonMappings:dh,axisMappings:fh},kv={0:"A / Cross",1:"B / Circle",2:"X / Square",3:"Y / Triangle",4:"LB / L1",5:"RB / R1",6:"LT / L2",7:"RT / R2",8:"Select / Share",9:"Start / Options",10:"L3",11:"R3",12:"D-Pad Up",13:"D-Pad Down",14:"D-Pad Left",15:"D-Pad Right",16:"Home"},Dv={moveForward:"Move Forward",moveBackward:"Move Backward",moveLeft:"Move Left",moveRight:"Move Right",jump:"Jump",crouch:"Crouch",attack:"Attack / Break",use:"Use / Place",nextSlot:"Next Slot",prevSlot:"Previous Slot",openInventory:"Open Inventory",pause:"Pause",menuUp:"Menu Up",menuDown:"Menu Down",menuLeft:"Menu Left",menuRight:"Menu Right",menuSelect:"Menu Select",menuBack:"Menu Back",zoomIn:"Zoom In",zoomOut:"Zoom Out",crosshairRight:"Crosshair Right",crosshairLeft:"Crosshair Left",crosshairUp:"Crosshair Up",crosshairDown:"Crosshair Down"};class Ii{static instance;settings;gamepads=new Map;activeGamepadIndex=null;actionStates=new Map;previousActionStates=new Map;commands=new Map;onMenuNavigate;onMenuSelect;onMenuBack;onPause;menuMode=!1;menuRepeatTimers=new Map;MENU_REPEAT_DELAY=400;MENU_REPEAT_RATE=150;constructor(){this.settings=this.loadSettings(),this.initializeActionStates(),this.setupEventListeners(),this.checkConnectedGamepads()}static getInstance(){return Ii.instance||(Ii.instance=new Ii),Ii.instance}initializeActionStates(){for(const e of Object.values(mt))this.actionStates.set(e,0),this.previousActionStates.set(e,0)}setupEventListeners(){window.addEventListener("gamepadconnected",e=>{console.log(`🎮 Gamepad connected: ${e.gamepad.id}`),this.onGamepadConnected(e.gamepad)}),window.addEventListener("gamepaddisconnected",e=>{console.log(`🎮 Gamepad disconnected: ${e.gamepad.id}`),this.onGamepadDisconnected(e.gamepad)})}checkConnectedGamepads(){const e=navigator.getGamepads();for(const t of e)t&&this.onGamepadConnected(t)}onGamepadConnected(e){const t={connected:!0,buttons:new Array(e.buttons.length).fill(!1),previousButtons:new Array(e.buttons.length).fill(!1),axes:new Array(e.axes.length).fill(0),previousAxes:new Array(e.axes.length).fill(0)};this.gamepads.set(e.index,t),this.activeGamepadIndex===null&&(this.activeGamepadIndex=e.index)}onGamepadDisconnected(e){if(this.gamepads.delete(e.index),this.activeGamepadIndex===e.index){const t=Array.from(this.gamepads.keys());this.activeGamepadIndex=t.length>0?t[0]:null}}registerCommand(e,t){this.commands.set(e,t)}setMenuMode(e){this.menuMode=e,this.menuRepeatTimers.clear()}isConnected(){return this.activeGamepadIndex!==null&&this.settings.enabled}getGamepadName(){return this.activeGamepadIndex===null?null:navigator.getGamepads()[this.activeGamepadIndex]?.id||null}update(e){if(!this.settings.enabled||this.activeGamepadIndex===null)return;const n=navigator.getGamepads()[this.activeGamepadIndex];if(!n)return;const s=this.gamepads.get(this.activeGamepadIndex);if(s){s.previousButtons=[...s.buttons],s.previousAxes=[...s.axes];for(let r=0;r<n.buttons.length;r++)s.buttons[r]=n.buttons[r].pressed;for(let r=0;r<n.axes.length;r++)s.axes[r]=n.axes[r];for(const[r,a]of this.actionStates)this.previousActionStates.set(r,a);this.computeActionStates(s),this.menuMode?this.processMenuActions(e):this.processGameActions()}}computeActionStates(e){for(const t of Object.values(mt))this.actionStates.set(t,0);for(const t of this.settings.buttonMappings)e.buttons[t.button]&&this.actionStates.set(t.action,1);for(const t of this.settings.axisMappings){const n=e.axes[t.axis]||0,s=t.deadzone??this.settings.deadzone;let r=0;if(Math.abs(n)>s&&(r=(Math.abs(n)-s)/(1-s),r=Math.sign(n)*r),t.axis===1&&this.settings.invertY&&(r=-r),r>0){const a=this.actionStates.get(t.positiveAction)||0;this.actionStates.set(t.positiveAction,Math.max(a,r))}else if(r<0){const a=this.actionStates.get(t.negativeAction)||0;this.actionStates.set(t.negativeAction,Math.max(a,Math.abs(r)))}}}processGameActions(){for(const[e,t]of this.actionStates){const n=this.previousActionStates.get(e)||0;if(t>.5&&n<=.5){const r=this.commands.get(e);r&&r.execute(),e==="pause"&&this.onPause&&this.onPause()}}}processMenuActions(e){const t=performance.now(),n=[{action:"menuUp",dir:"up"},{action:"menuDown",dir:"down"},{action:"menuLeft",dir:"left"},{action:"menuRight",dir:"right"}];for(const{action:u,dir:d}of n){const f=this.actionStates.get(u)||0,m=this.previousActionStates.get(u)||0,v=f>.5&&m<=.5,_=f>.5;if(f<=.5&&m>.5)this.menuRepeatTimers.delete(d);else if(v)this.onMenuNavigate?.(d),vt().playUIClick(),this.menuRepeatTimers.set(d,t+this.MENU_REPEAT_DELAY);else if(_){const p=this.menuRepeatTimers.get(d);p&&t>=p&&(this.onMenuNavigate?.(d),vt().playUIClick(),this.menuRepeatTimers.set(d,t+this.MENU_REPEAT_RATE))}}const s=this.actionStates.get("menuSelect")||0,r=this.previousActionStates.get("menuSelect")||0;s>.5&&r<=.5&&(this.onMenuSelect?.(),vt().playUIClick());const a=this.actionStates.get("menuBack")||0,o=this.previousActionStates.get("menuBack")||0;a>.5&&o<=.5&&(this.onMenuBack?.(),vt().playUIClick());const c=this.actionStates.get("pause")||0,h=this.previousActionStates.get("pause")||0;c>.5&&h<=.5&&(this.onMenuBack?.(),vt().playUIClick())}getActionValue(e){return this.settings.enabled&&this.actionStates.get(e)||0}isActionJustPressed(e){if(!this.settings.enabled)return!1;const t=this.actionStates.get(e)||0,n=this.previousActionStates.get(e)||0;return t>.5&&n<=.5}isActionPressed(e){return this.settings.enabled?(this.actionStates.get(e)||0)>.5:!1}getMovementVector(){if(!this.settings.enabled)return{x:0,y:0};const e=this.actionStates.get("moveLeft")||0,t=this.actionStates.get("moveRight")||0,n=this.actionStates.get("moveForward")||0,s=this.actionStates.get("moveBackward")||0;let r=t-e,a=s-n;r*=this.settings.sensitivity,a*=this.settings.sensitivity;const o=Math.sqrt(r*r+a*a);return o>1&&(r/=o,a/=o),{x:r,y:a}}getCrosshairVector(){if(!this.settings.enabled)return{x:0,y:0};const e=this.actionStates.get("crosshairLeft")||0,t=this.actionStates.get("crosshairRight")||0,n=this.actionStates.get("crosshairUp")||0,s=this.actionStates.get("crosshairDown")||0;let r=t-e,a=s-n;const o=this.settings.sensitivity*.8;return r*=o,a*=o,{x:r,y:a}}vibrate(e,t=.5,n=.5){if(!this.settings.vibration||this.activeGamepadIndex===null)return;const r=navigator.getGamepads()[this.activeGamepadIndex];r?.vibrationActuator&&r.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:e,weakMagnitude:t,strongMagnitude:n}).catch(()=>{})}getSettings(){return{...this.settings}}updateSettings(e){this.settings={...this.settings,...e},this.saveSettings()}setButtonMapping(e,t){["menuUp","menuDown","menuLeft","menuRight","menuSelect","menuBack"].includes(t)||(this.settings.buttonMappings=this.settings.buttonMappings.filter(s=>s.button!==e||["menuUp","menuDown","menuLeft","menuRight","menuSelect","menuBack"].includes(s.action))),this.settings.buttonMappings.push({button:e,action:t}),this.saveSettings()}getButtonForAction(e){return this.settings.buttonMappings.find(n=>n.action===e)?.button??null}resetToDefaults(){this.settings={...da},this.saveSettings()}loadSettings(){try{const e=localStorage.getItem("isocraft_gamepad_settings");if(e){const t=JSON.parse(e);return{...da,...t,buttonMappings:t.buttonMappings||dh,axisMappings:t.axisMappings||fh}}}catch{}return{...da}}saveSettings(){try{localStorage.setItem("isocraft_gamepad_settings",JSON.stringify(this.settings))}catch{}}waitForButtonPress(e=5e3){return new Promise(t=>{const n=performance.now(),s=()=>{if(performance.now()-n>e){t(null);return}if(this.activeGamepadIndex===null){requestAnimationFrame(s);return}const a=navigator.getGamepads()[this.activeGamepadIndex];if(!a){requestAnimationFrame(s);return}for(let o=0;o<a.buttons.length;o++)if(a.buttons[o].pressed){t(o);return}requestAnimationFrame(s)};requestAnimationFrame(s)})}}class Iv{constructor(e){this.onJump=e}execute(){this.onJump()}}class Uv{constructor(e,t){this.onCrouchStart=e,this.onCrouchEnd=t}execute(){this.onCrouchStart()}undo(){this.onCrouchEnd?.()}}class Nv{constructor(e,t){this.onAttackStart=e,this.onAttackEnd=t}execute(){this.onAttackStart()}undo(){this.onAttackEnd?.()}}class Fv{constructor(e){this.onUse=e}execute(){this.onUse()}}class mc{constructor(e,t){this.direction=e,this.onChange=t}execute(){this.onChange(this.direction)}}class Ov{constructor(e){this.onOpen=e}execute(){this.onOpen()}}function jt(){return Ii.getInstance()}const rs={sound:{masterVolume:100,musicVolume:50,soundEffectsVolume:100,ambientVolume:100},video:{renderDistance:4,zoom:10,graphicsQuality:"high",fogEnabled:!0,particlesEnabled:!0,shaderEnabled:!0},showFPS:!0,musicEnabled:!0};class Bv{container;isVisible=!1;currentScreen="main";settings;focusableElements=[];focusedIndex=0;isRemapping=!1;_remappingAction=null;onResume;onSettingsChange;onToggleDebug;onQuit;constructor(){this.settings=this.loadSettings(),this.container=document.createElement("div"),this.container.id="pause-menu",this.container.style.display="none",this.injectStyles(),this.buildMainMenu(),document.body.appendChild(this.container),this.applySettings(),this.setupGamepadNavigation()}injectStyles(){if(document.getElementById("pause-menu-styles"))return;if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}const e=document.createElement("style");e.id="pause-menu-styles",e.textContent=`
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
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
        text-shadow: 2px 2px 0 #3f3f3f;
      }
      
      .mc-toggle-btn {
        min-width: 180px;
        height: 40px;
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
        text-shadow: 1px 1px 0 #222;
        line-height: 1.6;
        margin-bottom: 20px;
      }
      
      .mc-about-credit {
        color: #fff;
        font-size: 14px;
        font-family: ${at};
        text-shadow: 2px 2px 0 #3f3f3f;
        margin: 20px 0;
      }
      
      .mc-about-link {
        color: #5af;
        text-decoration: none;
        font-family: ${at};
      }
      
      .mc-about-link:hover {
        color: #8cf;
        text-decoration: underline;
      }
      
      .mc-footer-credit {
        color: #888;
        font-size: 11px;
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
        text-shadow: 1px 1px 0 #222;
        padding: 8px 0;
        text-align: left;
      }
      
      .mc-control-btn {
        min-width: 120px;
        height: 32px;
        font-family: ${at};
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
        font-family: ${at};
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
    `,this.currentScreen="video",this.attachVideoMenuListeners(),this.updateFocusableElements()}attachVideoMenuListeners(){const e=["low","medium","high"],t={low:"Fast",medium:"Fancy",high:"Fabulous"},n=this.container.querySelector("#slider-render-distance"),s=this.container.querySelector("#val-render-distance");n?.addEventListener("input",()=>{const c=parseInt(n.value);this.settings.video.renderDistance=c,s.textContent=`${c} chunks`,this.applySettings()}),n?.addEventListener("change",()=>this.saveSettings());const r=this.container.querySelector("#slider-zoom"),a=this.container.querySelector("#val-zoom");r?.addEventListener("input",()=>{const c=parseInt(r.value);this.settings.video.zoom=c,a.textContent=`${c}`,this.applySettings()}),r?.addEventListener("change",()=>this.saveSettings());const o=this.container.querySelector("#btn-graphics-quality");o?.addEventListener("click",()=>{this.playClickSound();const h=(e.indexOf(this.settings.video.graphicsQuality)+1)%e.length;this.settings.video.graphicsQuality=e[h],o.textContent=t[this.settings.video.graphicsQuality],this.saveSettings()}),this.container.querySelector("#btn-toggle-fog")?.addEventListener("click",()=>{this.playClickSound(),this.settings.video.fogEnabled=!this.settings.video.fogEnabled,this.saveSettings(),this.buildVideoMenu()}),this.container.querySelector("#btn-toggle-particles")?.addEventListener("click",()=>{this.playClickSound(),this.settings.video.particlesEnabled=!this.settings.video.particlesEnabled,this.saveSettings(),this.buildVideoMenu()}),this.container.querySelector("#btn-back-video")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}buildControlsMenu(){const e=jt(),t=e.getSettings(),n=e.isConnected(),s=e.getGamepadName(),a=[mt.Jump,mt.Crouch,mt.Attack,mt.Use,mt.NextSlot,mt.PrevSlot,mt.ZoomIn,mt.ZoomOut].map(o=>{const c=e.getButtonForAction(o),h=c!==null?kv[c]:"None";return`
        <div class="mc-control-row">
          <span class="mc-control-label">${Dv[o]}:</span>
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
    `,this.currentScreen="about",this.attachAboutMenuListeners(),this.updateFocusableElements()}attachAboutMenuListeners(){this.container.querySelector("#btn-back-about")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}playClickSound(){vt().playUIClick()}applySettings(){const e=vt(),t=ps(),n=this.settings.sound.masterVolume/100;e.setMasterVolume(n*(this.settings.sound.soundEffectsVolume/100)),t.setVolume(n*(this.settings.sound.musicVolume/100)),t.setEnabled(this.settings.musicEnabled),this.onSettingsChange?.(this.settings)}loadSettings(){try{const e=localStorage.getItem("isocraft_settings");if(e){const t=JSON.parse(e),n={...rs,...t,sound:{...rs.sound,...t.sound||{}},video:{...rs.video,...t.video||{}}};return n.video.zoom=rs.video.zoom,n.video.shaderEnabled=!0,n.video.graphicsQuality="high",n}}catch{}return{...rs}}saveSettings(){this.settings.video.shaderEnabled=!0,this.settings.video.graphicsQuality="high";try{localStorage.setItem("isocraft_settings",JSON.stringify(this.settings))}catch{}this.applySettings()}getSettings(){return{...this.settings}}toggleDebugSetting(){this.settings.showFPS=!this.settings.showFPS,this.saveSettings()}show(){this.isVisible||(this.isVisible=!0,this.container.style.display="flex",this.buildMainMenu(),jt().setMenuMode(!0),this.playClickSound())}hide(){this.isVisible&&(this.isVisible=!1,this.container.style.display="none",jt().setMenuMode(!1))}toggle(){this.isVisible?this.currentScreen==="sound"||this.currentScreen==="video"||this.currentScreen==="about"||this.currentScreen==="controls"?(this.playClickSound(),this.buildOptionsMenu()):this.currentScreen==="options"?(this.playClickSound(),this.buildMainMenu()):(this.hide(),this.onResume?.()):this.show()}isMenuVisible(){return this.isVisible}destroy(){this.container.remove();const e=document.getElementById("pause-menu-styles");e&&e.remove()}}class zv{container;visible=!1;settings;onChangeCallback=null;waterYOffset=0;onWaterYChangeCallback=null;constructor(){this.settings={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3},this.container=document.createElement("div"),this.container.className="swim-debug-ui",this.container.style.display="none",this.buildUI(),this.addStyles(),document.body.appendChild(this.container),window.addEventListener("keydown",e=>{e.code==="KeyW"&&e.shiftKey&&(e.preventDefault(),this.toggleVisibility())})}setOnChange(e){this.onChangeCallback=e}setOnWaterYChange(e){this.onWaterYChangeCallback=e}buildUI(){this.container.innerHTML=`
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
        font-family: ${at};
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
        font-family: ${at};
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


		}`};class ui{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hv=new Sr(-1,1,1,-1,0,1);class Gv extends Xt{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}}const Vv=new Gv;class Tr{constructor(e){this._mesh=new Ye(Vv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ph extends ui{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_n.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Tr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gc extends ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Wv extends ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Xv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ph(ms),this.copyPass.material.blending=Ot,this.clock=new Ng}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gc!==void 0&&(a instanceof gc?n=!0:a instanceof Wv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yv extends ui{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new he}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}class $v{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),h=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(c+h)*u,f=c-d,m=h-d,v=e-f,_=t-m;let g,p;v>_?(g=1,p=0):(g=0,p=1);const T=v-g+u,S=_-p+u,b=v-1+2*u,R=_-1+2*u,L=c&255,C=h&255,P=this.perm[L+this.perm[C]]%12,y=this.perm[L+g+this.perm[C+p]]%12,x=this.perm[L+1+this.perm[C+1]]%12;let A=.5-v*v-_*_;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[P],v,_));let O=.5-T*T-S*S;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[y],T,S));let F=.5-b*b-R*R;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[x],b,R)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o;const h=(e+t+n)*.3333333333333333,u=Math.floor(e+h),d=Math.floor(t+h),f=Math.floor(n+h),m=1/6,v=(u+d+f)*m,_=u-v,g=d-v,p=f-v,T=e-_,S=t-g,b=n-p;let R,L,C,P,y,x;T>=S?S>=b?(R=1,L=0,C=0,P=1,y=1,x=0):T>=b?(R=1,L=0,C=0,P=1,y=0,x=1):(R=0,L=0,C=1,P=1,y=0,x=1):S<b?(R=0,L=0,C=1,P=0,y=1,x=1):T<b?(R=0,L=1,C=0,P=0,y=1,x=1):(R=0,L=1,C=0,P=1,y=1,x=0);const A=T-R+m,O=S-L+m,F=b-C+m,Y=T-P+2*m,Z=S-y+2*m,$=b-x+2*m,K=T-1+3*m,G=S-1+3*m,te=b-1+3*m,ue=u&255,xe=d&255,Ue=f&255,Je=this.perm[ue+this.perm[xe+this.perm[Ue]]]%12,q=this.perm[ue+R+this.perm[xe+L+this.perm[Ue+C]]]%12,ie=this.perm[ue+P+this.perm[xe+y+this.perm[Ue+x]]]%12,_e=this.perm[ue+1+this.perm[xe+1+this.perm[Ue+1]]]%12;let ae=.6-T*T-S*S-b*b;ae<0?s=0:(ae*=ae,s=ae*ae*this.dot3(this.grad3[Je],T,S,b));let we=.6-A*A-O*O-F*F;we<0?r=0:(we*=we,r=we*we*this.dot3(this.grad3[q],A,O,F));let Le=.6-Y*Y-Z*Z-$*$;Le<0?a=0:(Le*=Le,a=Le*Le*this.dot3(this.grad3[ie],Y,Z,$));let De=.6-K*K-G*G-te*te;return De<0?o=0:(De*=De,o=De*De*this.dot3(this.grad3[_e],K,G,te)),32*(s+r+a+o)}noise4d(e,t,n,s){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;let u,d,f,m,v;const _=(e+t+n+s)*c,g=Math.floor(e+_),p=Math.floor(t+_),T=Math.floor(n+_),S=Math.floor(s+_),b=(g+p+T+S)*h,R=g-b,L=p-b,C=T-b,P=S-b,y=e-R,x=t-L,A=n-C,O=s-P,F=y>x?32:0,Y=y>A?16:0,Z=x>A?8:0,$=y>O?4:0,K=x>O?2:0,G=A>O?1:0,te=F+Y+Z+$+K+G,ue=a[te][0]>=3?1:0,xe=a[te][1]>=3?1:0,Ue=a[te][2]>=3?1:0,Je=a[te][3]>=3?1:0,q=a[te][0]>=2?1:0,ie=a[te][1]>=2?1:0,_e=a[te][2]>=2?1:0,ae=a[te][3]>=2?1:0,we=a[te][0]>=1?1:0,Le=a[te][1]>=1?1:0,De=a[te][2]>=1?1:0,lt=a[te][3]>=1?1:0,We=y-ue+h,ht=x-xe+h,D=A-Ue+h,Ct=O-Je+h,Ge=y-q+2*h,Ve=x-ie+2*h,Ce=A-_e+2*h,it=O-ae+2*h,Ae=y-we+3*h,E=x-Le+3*h,M=A-De+3*h,B=O-lt+3*h,J=y-1+4*h,ee=x-1+4*h,j=A-1+4*h,Se=O-1+4*h,le=g&255,de=p&255,He=T&255,ne=S&255,ge=o[le+o[de+o[He+o[ne]]]]%32,Re=o[le+ue+o[de+xe+o[He+Ue+o[ne+Je]]]]%32,Pe=o[le+q+o[de+ie+o[He+_e+o[ne+ae]]]]%32,ve=o[le+we+o[de+Le+o[He+De+o[ne+lt]]]]%32,$e=o[le+1+o[de+1+o[He+1+o[ne+1]]]]%32;let Ie=.6-y*y-x*x-A*A-O*O;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this.dot4(r[ge],y,x,A,O));let Ke=.6-We*We-ht*ht-D*D-Ct*Ct;Ke<0?d=0:(Ke*=Ke,d=Ke*Ke*this.dot4(r[Re],We,ht,D,Ct));let k=.6-Ge*Ge-Ve*Ve-Ce*Ce-it*it;k<0?f=0:(k*=k,f=k*k*this.dot4(r[Pe],Ge,Ve,Ce,it));let oe=.6-Ae*Ae-E*E-M*M-B*B;oe<0?m=0:(oe*=oe,m=oe*oe*this.dot4(r[ve],Ae,E,M,B));let V=.6-J*J-ee*ee-j*j-Se*Se;return V<0?v=0:(V*=V,v=V*V*this.dot4(r[$e],J,ee,j,Se)),27*(u+d+f+m+v)}}const Qs={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ke},cameraProjectionMatrix:{value:new Ze},cameraInverseProjectionMatrix:{value:new Ze},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},er={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},tr={uniforms:{tDiffuse:{value:null},resolution:{value:new ke}},vertexShader:`varying vec2 vUv;

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

		}`};class Rn extends ui{constructor(e,t,n,s,r=32){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(r),this.generateRandomKernelRotations();const a=new yo;a.format=ci,a.type=li,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:et,magFilter:et,type:un,depthTexture:a}),this.ssaoRenderTarget=new Zt(this.width,this.height,{type:un}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new St({defines:Object.assign({},Qs.defines),uniforms:_n.clone(Qs.uniforms),vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,blending:Ot}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Ag,this.normalMaterial.blending=Ot,this.blurMaterial=new St({defines:Object.assign({},tr.defines),uniforms:_n.clone(tr.uniforms),vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new St({defines:Object.assign({},er.defines),uniforms:_n.clone(er.uniforms),vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,blending:Ot}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:_n.clone(ms.uniforms),vertexShader:ms.vertexShader,fragmentShader:ms.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:wc,blendDst:va,blendEquation:Ln,blendSrcAlpha:yc,blendDstAlpha:va,blendEquationAlpha:Ln}),this.fsQuad=new Tr(null),this.originalClearColor=new he}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t,n){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Rn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Ot,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Rn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ot,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Rn.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Rn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ot,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Rn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=bc,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const s=new N;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/e;r=kt.lerp(.1,1,r*r),s.multiplyScalar(r),t.push(s)}}generateRandomKernelRotations(){const n=new $v,s=16,r=new Float32Array(s);for(let a=0;a<s;a++){const o=Math.random()*2-1,c=Math.random()*2-1,h=0;r[a]=n.noise3d(o,c,h)}this.noiseTexture=new th(r,4,4,vr,cn),this.noiseTexture.wrapS=ai,this.noiseTexture.wrapT=ai,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}}Rn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const qv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gi extends ui{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new he(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,a,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Zt(r,a,{type:un});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Zt(r,a,{type:un});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=qv;this.highPassUniforms=_n.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ke(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ms;this.copyUniforms=_n.clone(u.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ga,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new he,this.oldClearAlpha=1,this.basic=new ft,this.fsQuad=new Tr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Gi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Gi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gi.BlurDirectionX=new ke(1,0);Gi.BlurDirectionY=new ke(0,1);const jv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zv extends ui{constructor(){super();const e=jv;this.uniforms=_n.clone(e.uniforms),this.material=new Eg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Tr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Jv={uniforms:{tDiffuse:{value:null},contrast:{value:1.18},saturation:{value:1.16},gamma:{value:.96},vignetteStrength:{value:.3},twilightWarmth:{value:0},nightFactor:{value:0}},vertexShader:`
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
  `};class Kv{composer;ssaoPass=null;bloomPass;gradingPass;outputPass;constructor(e,t,n,s,r){this.composer=new Xv(e);const a=new Yv(t,n);this.composer.addPass(a),n instanceof en&&(this.ssaoPass=new Rn(t,n,Math.max(1,s),Math.max(1,r)),this.ssaoPass.kernelRadius=22,this.ssaoPass.minDistance=.0025,this.ssaoPass.maxDistance=.12,this.ssaoPass.output=Rn.OUTPUT.Default,this.composer.addPass(this.ssaoPass)),this.bloomPass=new Gi(new ke(Math.max(1,s),Math.max(1,r)),.38,.56,.84),this.composer.addPass(this.bloomPass),this.gradingPass=new ph(Jv),this.composer.addPass(this.gradingPass),this.outputPass=new Zv,this.composer.addPass(this.outputPass)}setSize(e,t){const n=Math.max(1,Math.floor(e)),s=Math.max(1,Math.floor(t));this.composer.setSize(n,s),this.ssaoPass?.setSize(n,s),this.bloomPass.setSize(n,s)}setTimeOfDay(e){this.bloomPass.strength=.18,this.bloomPass.radius=.3,this.bloomPass.threshold=.36,this.gradingPass.uniforms.twilightWarmth.value=0,this.gradingPass.uniforms.nightFactor.value=0}render(e){this.composer.render(e)}dispose(){this.ssaoPass?.dispose(),this.bloomPass.dispose(),this.composer.dispose()}}const nr=[l.Stone,l.Dirt,l.Grass,l.Sand,l.RedSand,l.Gravel,l.Clay,l.Podzol,l.Mycelium,l.Snow,l.SnowBlock,l.Ice,l.PackedIce,l.BlueIce,l.Terracotta,l.OakPlanks,l.BirchPlanks,l.SprucePlanks,l.JunglePlanks,l.AcaciaPlanks,l.DarkOakPlanks,l.CherryPlanks,l.MangrovePlanks,l.OakLog,l.BirchLog,l.SpruceLog,l.JungleLog,l.AcaciaLog,l.DarkOakLog,l.CherryLog,l.MangroveLog,l.StrippedOakLog,l.StrippedBirchLog,l.StrippedSpruceLog,l.StrippedJungleLog,l.StrippedAcaciaLog,l.StrippedDarkOakLog,l.StrippedCherryLog,l.StrippedMangroveLog,l.OakLeaves,l.BirchLeaves,l.SpruceLeaves,l.JungleLeaves,l.AcaciaLeaves,l.DarkOakLeaves,l.CherryLeaves,l.MangroveLeaves,l.OakSapling,l.BirchSapling,l.SpruceSapling,l.JungleSapling,l.AcaciaSapling,l.DarkOakSapling,l.CherrySapling,l.MangroveSapling,l.OakDoor,l.BirchDoor,l.SpruceDoor,l.JungleDoor,l.AcaciaDoor,l.DarkOakDoor,l.CherryDoor,l.MangroveDoor,l.OakTrapdoor,l.BirchTrapdoor,l.SpruceTrapdoor,l.JungleTrapdoor,l.AcaciaTrapdoor,l.DarkOakTrapdoor,l.CherryTrapdoor,l.MangroveTrapdoor,l.Cactus,l.Bedrock],ir={[l.Stone]:"Stone",[l.Dirt]:"Dirt",[l.Grass]:"Grass Block",[l.Sand]:"Sand",[l.RedSand]:"Red Sand",[l.Gravel]:"Gravel",[l.Clay]:"Clay",[l.Podzol]:"Podzol",[l.Mycelium]:"Mycelium",[l.Snow]:"Snow",[l.SnowBlock]:"Snow Block",[l.Ice]:"Ice",[l.PackedIce]:"Packed Ice",[l.BlueIce]:"Blue Ice",[l.Terracotta]:"Terracotta",[l.OakPlanks]:"Oak Planks",[l.BirchPlanks]:"Birch Planks",[l.SprucePlanks]:"Spruce Planks",[l.JunglePlanks]:"Jungle Planks",[l.AcaciaPlanks]:"Acacia Planks",[l.DarkOakPlanks]:"Dark Oak Planks",[l.CherryPlanks]:"Cherry Planks",[l.MangrovePlanks]:"Mangrove Planks",[l.OakLog]:"Oak Log",[l.BirchLog]:"Birch Log",[l.SpruceLog]:"Spruce Log",[l.JungleLog]:"Jungle Log",[l.AcaciaLog]:"Acacia Log",[l.DarkOakLog]:"Dark Oak Log",[l.CherryLog]:"Cherry Log",[l.MangroveLog]:"Mangrove Log",[l.StrippedOakLog]:"Stripped Oak Log",[l.StrippedBirchLog]:"Stripped Birch Log",[l.StrippedSpruceLog]:"Stripped Spruce Log",[l.StrippedJungleLog]:"Stripped Jungle Log",[l.StrippedAcaciaLog]:"Stripped Acacia Log",[l.StrippedDarkOakLog]:"Stripped Dark Oak Log",[l.StrippedCherryLog]:"Stripped Cherry Log",[l.StrippedMangroveLog]:"Stripped Mangrove Log",[l.OakLeaves]:"Oak Leaves",[l.BirchLeaves]:"Birch Leaves",[l.SpruceLeaves]:"Spruce Leaves",[l.JungleLeaves]:"Jungle Leaves",[l.AcaciaLeaves]:"Acacia Leaves",[l.DarkOakLeaves]:"Dark Oak Leaves",[l.CherryLeaves]:"Cherry Leaves",[l.MangroveLeaves]:"Mangrove Leaves",[l.OakSapling]:"Oak Sapling",[l.BirchSapling]:"Birch Sapling",[l.SpruceSapling]:"Spruce Sapling",[l.JungleSapling]:"Jungle Sapling",[l.AcaciaSapling]:"Acacia Sapling",[l.DarkOakSapling]:"Dark Oak Sapling",[l.CherrySapling]:"Cherry Sapling",[l.MangroveSapling]:"Mangrove Sapling",[l.OakDoor]:"Oak Door",[l.BirchDoor]:"Birch Door",[l.SpruceDoor]:"Spruce Door",[l.JungleDoor]:"Jungle Door",[l.AcaciaDoor]:"Acacia Door",[l.DarkOakDoor]:"Dark Oak Door",[l.CherryDoor]:"Cherry Door",[l.MangroveDoor]:"Mangrove Door",[l.OakTrapdoor]:"Oak Trapdoor",[l.BirchTrapdoor]:"Birch Trapdoor",[l.SpruceTrapdoor]:"Spruce Trapdoor",[l.JungleTrapdoor]:"Jungle Trapdoor",[l.AcaciaTrapdoor]:"Acacia Trapdoor",[l.DarkOakTrapdoor]:"Dark Oak Trapdoor",[l.CherryTrapdoor]:"Cherry Trapdoor",[l.MangroveTrapdoor]:"Mangrove Trapdoor",[l.Cactus]:"Cactus",[l.Bedrock]:"Bedrock"},Qv={[l.Grass]:{top:"/textures/grass_block_top.png",side:"/textures/grass_block_side.png",bottom:"/textures/dirt.png"},[l.Podzol]:{top:"/textures/podzol_top.png",side:"/textures/podzol_side.png",bottom:"/textures/dirt.png"},[l.Mycelium]:{top:"/textures/mycelium_top.png",side:"/textures/mycelium_side.png",bottom:"/textures/dirt.png"},[l.Snow]:"/textures/snow.png",[l.SnowBlock]:"/textures/snow.png",[l.OakLog]:{top:"/textures/oak_log_top.png",side:"/textures/oak_log.png"},[l.BirchLog]:{top:"/textures/birch_log_top.png",side:"/textures/birch_log.png"},[l.SpruceLog]:{top:"/textures/spruce_log_top.png",side:"/textures/spruce_log.png"},[l.JungleLog]:{top:"/textures/jungle_log_top.png",side:"/textures/jungle_log.png"},[l.AcaciaLog]:{top:"/textures/acacia_log_top.png",side:"/textures/acacia_log.png"},[l.DarkOakLog]:{top:"/textures/dark_oak_log_top.png",side:"/textures/dark_oak_log.png"},[l.CherryLog]:{top:"/textures/cherry_log_top.png",side:"/textures/cherry_log.png"},[l.MangroveLog]:{top:"/textures/mangrove_log_top.png",side:"/textures/mangrove_log.png"},[l.Cactus]:{top:"/textures/cactus_top.png",side:"/textures/cactus_side.png"},[l.Dirt]:"/textures/dirt.png",[l.Stone]:"/textures/stone.png",[l.Sand]:"/textures/sand.png",[l.RedSand]:"/textures/red_sand.png",[l.Gravel]:"/textures/gravel.png",[l.Clay]:"/textures/clay.png",[l.Terracotta]:"/textures/terracotta.png",[l.Ice]:"/textures/ice.png",[l.PackedIce]:"/textures/packed_ice.png",[l.BlueIce]:"/textures/blue_ice.png",[l.Bedrock]:"/textures/bedrock.png",[l.OakLeaves]:"/textures/oak_leaves.png",[l.BirchLeaves]:"/textures/birch_leaves.png",[l.SpruceLeaves]:"/textures/spruce_leaves.png",[l.JungleLeaves]:"/textures/jungle_leaves.png",[l.AcaciaLeaves]:"/textures/acacia_leaves.png",[l.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[l.CherryLeaves]:"/textures/cherry_leaves.png",[l.MangroveLeaves]:"/textures/mangrove_leaves.png",[l.OakSapling]:"/textures/oak_sapling.png",[l.BirchSapling]:"/textures/birch_sapling.png",[l.SpruceSapling]:"/textures/spruce_sapling.png",[l.JungleSapling]:"/textures/jungle_sapling.png",[l.AcaciaSapling]:"/textures/acacia_sapling.png",[l.DarkOakSapling]:"/textures/dark_oak_sapling.png",[l.CherrySapling]:"/textures/cherry_sapling.png",[l.MangroveSapling]:"/textures/mangrove_sapling.png",[l.OakPlanks]:"/textures/oak_planks.png",[l.BirchPlanks]:"/textures/birch_planks.png",[l.SprucePlanks]:"/textures/spruce_planks.png",[l.JunglePlanks]:"/textures/jungle_planks.png",[l.AcaciaPlanks]:"/textures/acacia_planks.png",[l.DarkOakPlanks]:"/textures/dark_oak_planks.png",[l.CherryPlanks]:"/textures/cherry_planks.png",[l.MangrovePlanks]:"/textures/mangrove_planks.png",[l.StrippedOakLog]:{top:"/textures/stripped_oak_log_top.png",side:"/textures/stripped_oak_log.png"},[l.StrippedBirchLog]:{top:"/textures/stripped_birch_log_top.png",side:"/textures/stripped_birch_log.png"},[l.StrippedSpruceLog]:{top:"/textures/stripped_spruce_log_top.png",side:"/textures/stripped_spruce_log.png"},[l.StrippedJungleLog]:{top:"/textures/stripped_jungle_log_top.png",side:"/textures/stripped_jungle_log.png"},[l.StrippedAcaciaLog]:{top:"/textures/stripped_acacia_log_top.png",side:"/textures/stripped_acacia_log.png"},[l.StrippedDarkOakLog]:{top:"/textures/stripped_dark_oak_log_top.png",side:"/textures/stripped_dark_oak_log.png"},[l.StrippedCherryLog]:{top:"/textures/stripped_cherry_log_top.png",side:"/textures/stripped_cherry_log.png"},[l.StrippedMangroveLog]:{top:"/textures/stripped_mangrove_log_top.png",side:"/textures/stripped_mangrove_log.png"},[l.OakDoor]:"/textures/oak_door_bottom.png",[l.BirchDoor]:"/textures/birch_door_bottom.png",[l.SpruceDoor]:"/textures/spruce_door_bottom.png",[l.JungleDoor]:"/textures/jungle_door_bottom.png",[l.AcaciaDoor]:"/textures/acacia_door_bottom.png",[l.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[l.CherryDoor]:"/textures/cherry_door_bottom.png",[l.MangroveDoor]:"/textures/mangrove_door_bottom.png",[l.OakTrapdoor]:"/textures/oak_trapdoor.png",[l.BirchTrapdoor]:"/textures/birch_trapdoor.png",[l.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[l.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[l.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[l.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[l.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[l.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"};l.Stone+"",l.Dirt+"",l.Grass+"",l.Sand+"",l.RedSand+"",l.Gravel+"",l.Clay+"",l.Terracotta+"",l.Ice+"",l.PackedIce+"",l.BlueIce+"",l.Snow+"",l.SnowBlock+"",l.Bedrock+"",l.OakPlanks+"",l.BirchPlanks+"",l.SprucePlanks+"",l.JunglePlanks+"",l.AcaciaPlanks+"",l.DarkOakPlanks+"",l.CherryPlanks+"",l.MangrovePlanks+"",l.OakLog+"",l.BirchLog+"",l.SpruceLog+"",l.JungleLog+"",l.AcaciaLog+"",l.DarkOakLog+"",l.CherryLog+"",l.MangroveLog+"",l.StrippedOakLog+"",l.StrippedBirchLog+"",l.StrippedSpruceLog+"",l.StrippedJungleLog+"",l.StrippedAcaciaLog+"",l.StrippedDarkOakLog+"",l.StrippedCherryLog+"",l.StrippedMangroveLog+"",l.OakLeaves+"",l.BirchLeaves+"",l.SpruceLeaves+"",l.JungleLeaves+"",l.AcaciaLeaves+"",l.DarkOakLeaves+"",l.CherryLeaves+"",l.MangroveLeaves+"",l.Podzol+"",l.Mycelium+"",l.OakSapling+"",l.BirchSapling+"",l.SpruceSapling+"",l.JungleSapling+"",l.AcaciaSapling+"",l.DarkOakSapling+"",l.CherrySapling+"",l.MangroveSapling+"",l.OakDoor+"",l.BirchDoor+"",l.SpruceDoor+"",l.JungleDoor+"",l.AcaciaDoor+"",l.DarkOakDoor+"",l.CherryDoor+"",l.MangroveDoor+"",l.OakTrapdoor+"",l.BirchTrapdoor+"",l.SpruceTrapdoor+"",l.JungleTrapdoor+"",l.AcaciaTrapdoor+"",l.DarkOakTrapdoor+"",l.CherryTrapdoor+"",l.MangroveTrapdoor+"",l.Cactus+"";class e_{container;isVisible=!1;inventoryHUD;tooltip;focusedSlotIndex=0;currentBlocks=nr;GRID_COLUMNS=9;savedGamepadCallbacks={};onOpen;onClose;constructor(e){this.inventoryHUD=e,this.injectStyles(),this.container=this.createInventoryUI(),document.body.appendChild(this.container),this.tooltip=this.createTooltip(),document.body.appendChild(this.tooltip)}injectStyles(){if(!document.getElementById("minecraft-font-styles")){const t=document.createElement("style");t.id="minecraft-font-styles",t.textContent=Ms,document.head.appendChild(t)}if(document.getElementById("creative-inventory-styles"))return;const e=document.createElement("style");e.id="creative-inventory-styles",e.textContent=`
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
        font-family: ${at};
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
        font-family: ${at};
      }

      .creative-close-button {
        min-width: 68px;
        height: 26px;
        padding: 0 10px;
        background: #c6c6c6;
        border: 2px solid;
        border-color: #ffffff #555555 #555555 #ffffff;
        color: #202020;
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
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
        font-family: ${at};
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
      <div class="creative-close-hint">Press ESC to close</div>
    `;const t=e.querySelector("#creative-grid");this.populateGrid(t,nr);const n=e.querySelector("#creative-search");return n.addEventListener("input",()=>{const r=n.value.toLowerCase();this.currentBlocks=nr.filter(a=>(ir[a]||l[a]).toLowerCase().includes(r)),this.populateGrid(t,this.currentBlocks),this.focusedSlotIndex=0,jt().isConnected()&&this.currentBlocks.length>0&&this.setFocusedSlot(0)}),e.querySelector("#creative-close-button").addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),this.hide(),vt().playUIClick()}),e.addEventListener("click",r=>{r.target===e&&this.hide()}),e}populateGrid(e,t){e.innerHTML="",t.forEach(s=>{const r=this.createBlockSlot(s);e.appendChild(r)});const n=t.length%9;if(n>0)for(let s=0;s<9-n;s++){const r=document.createElement("div");r.className="creative-slot",r.innerHTML='<div class="creative-slot-inner"></div>',e.appendChild(r)}}createBlockSlot(e){const t=document.createElement("div");t.className="creative-slot",t.dataset.blockType=e.toString();const n=document.createElement("div");if(n.className="creative-slot-inner",oh(e)){const s=document.createElement("div");s.className="creative-sprite";const r=this.getTextureConfig(e);r&&(s.style.backgroundImage=`url(${r.side})`),n.appendChild(s)}else{const s=document.createElement("div");s.className="creative-cube-container";const r=document.createElement("div");r.className="creative-cube";const a=this.getTextureConfig(e);[{name:"top",brightness:Qt.top},{name:"front",brightness:Qt.front},{name:"right",brightness:Qt.right},{name:"left",brightness:Qt.left}].forEach(({name:c,brightness:h})=>{const u=document.createElement("div");if(u.className=`face face-${c}`,a){const d=c==="top"?a.top:a.side;u.style.backgroundImage=`url(${d})`,u.style.filter=cs(e,c,h)}else{const d=lh(e);u.style.backgroundColor=d}r.appendChild(u)}),s.appendChild(r),n.appendChild(s)}return t.appendChild(n),t.addEventListener("click",()=>{this.addBlockToInventory(e)}),t.addEventListener("mouseenter",s=>{const r=ir[e]||l[e];this.showTooltip(r,s.clientX,s.clientY)}),t.addEventListener("mousemove",s=>{this.moveTooltip(s.clientX,s.clientY)}),t.addEventListener("mouseleave",()=>{this.hideTooltip()}),t}getTextureConfig(e){const t=Qv[e];return t?typeof t=="string"?{top:t,side:t,bottom:t}:{top:t.top,side:t.side,bottom:t.bottom||t.side}:null}addBlockToInventory(e){const t={blockType:e,count:64,name:ir[e]||l[e]};this.inventoryHUD.addItem(t)&&vt().playUIClick()}createTooltip(){const e=document.createElement("div");return e.className="creative-tooltip",e}showTooltip(e,t,n){this.tooltip.textContent=e,this.tooltip.style.display="block",this.moveTooltip(t,n)}moveTooltip(e,t){this.tooltip.style.left=`${e+15}px`,this.tooltip.style.top=`${t+15}px`;const s=this.tooltip.getBoundingClientRect();s.right>window.innerWidth&&(this.tooltip.style.left=`${e-s.width-15}px`),s.bottom>window.innerHeight&&(this.tooltip.style.top=`${t-s.height-15}px`)}hideTooltip(){this.tooltip.style.display="none"}setupGamepadNavigation(){const e=jt();this.savedGamepadCallbacks={onMenuNavigate:e.onMenuNavigate,onMenuSelect:e.onMenuSelect,onMenuBack:e.onMenuBack},e.onMenuNavigate=t=>{this.navigateSlot(t)},e.onMenuSelect=()=>{this.selectFocusedSlot()},e.onMenuBack=()=>{this.hide()},e.setMenuMode(!0)}restoreGamepadCallbacks(){const e=jt();e.onMenuNavigate=this.savedGamepadCallbacks.onMenuNavigate,e.onMenuSelect=this.savedGamepadCallbacks.onMenuSelect,e.onMenuBack=this.savedGamepadCallbacks.onMenuBack,e.setMenuMode(!1)}navigateSlot(e){const t=this.currentBlocks.length;if(t===0)return;const n=Math.ceil(t/this.GRID_COLUMNS),s=Math.floor(this.focusedSlotIndex/this.GRID_COLUMNS),r=this.focusedSlotIndex%this.GRID_COLUMNS;let a=s,o=r;switch(e){case"up":a=s>0?s-1:n-1;break;case"down":a=s<n-1?s+1:0;break;case"left":r>0?o=r-1:(o=this.GRID_COLUMNS-1,a=s>0?s-1:n-1);break;case"right":r<this.GRID_COLUMNS-1?o=r+1:(o=0,a=s<n-1?s+1:0);break}let c=a*this.GRID_COLUMNS+o;c>=t&&(e==="down"||e==="right"?c=0:c=t-1),this.setFocusedSlot(c),vt().playUIClick()}setFocusedSlot(e){const t=this.container.querySelectorAll(".creative-slot");t.forEach(s=>s.classList.remove("gamepad-focus")),this.focusedSlotIndex=Math.max(0,Math.min(e,this.currentBlocks.length-1));const n=t[this.focusedSlotIndex];if(n&&this.currentBlocks[this.focusedSlotIndex]!==void 0){n.classList.add("gamepad-focus");const s=this.currentBlocks[this.focusedSlotIndex],r=ir[s]||l[s],a=n.getBoundingClientRect();this.showTooltip(r,a.right,a.top)}}selectFocusedSlot(){if(this.focusedSlotIndex<this.currentBlocks.length){const e=this.currentBlocks[this.focusedSlotIndex];this.addBlockToInventory(e)}}show(){if(this.isVisible)return;this.isVisible=!0,this.container.style.display="flex";const e=this.container.querySelector("#creative-search");e.value="";const t=this.container.querySelector("#creative-grid");this.currentBlocks=[...nr],this.populateGrid(t,this.currentBlocks),this.focusedSlotIndex=0,this.setupGamepadNavigation(),setTimeout(()=>{jt().isConnected()?this.setFocusedSlot(0):e.focus()},50),vt().playUIClick(),this.onOpen?.()}hide(){this.isVisible&&(this.isVisible=!1,this.container.style.display="none",this.hideTooltip(),this.restoreGamepadCallbacks(),this.onClose?.())}toggle(){this.isVisible?this.hide():this.show()}isInventoryVisible(){return this.isVisible}destroy(){this.container.remove(),this.tooltip.remove();const e=document.getElementById("creative-inventory-styles");e&&e.remove()}}const vc=25,fa=10,as=7/9,_c=1.8,t_=1,n_=.3,i_=.7;class s_{world;waterSwimYOffset=0;constructor(e){this.world=e}setWaterSwimYOffset(e){this.waterSwimYOffset=e}calculateTargetY(e,t,n,s){const r=s?this.world.getHeightAt(e,t):this.world.getHeightAtForPlayer(e,t,n);return this.world.getBlockAt(Math.floor(e),Math.floor(r),Math.floor(t))===l.Water?r+as+this.waterSwimYOffset:r+1}isOverWater(e,t,n){const s=this.world.getHeightAt(e,t);return this.world.getBlockAt(Math.floor(e),Math.floor(s),Math.floor(t))===l.Water}isInWater(e,t,n){const s=this.world.getHeightAt(e,t);if(this.world.getBlockAt(Math.floor(e),Math.floor(s),Math.floor(t))!==l.Water)return!1;const a=s+as+.5;return n<=a+.1}canStand(e,t,n){return this.world.canStandAt(e,t,n)}getBlockAtFeet(e,t){const n=this.world.getHeightAt(e,t);return this.world.getBlockAt(Math.floor(e),Math.floor(n),Math.floor(t))}tryMove(e,t,n){const{position:s,isJumping:r,isSwimming:a,isCrouching:o}=e,c=s.x+t,h=s.z+n,u=a?this.world.getHeightAt(c,h):this.world.getHeightAtForPlayer(c,h,s.y),d=this.world.getBlockAt(Math.floor(c),Math.floor(u),Math.floor(h)),f=d===l.Water;let m;f?m=u+as+this.waterSwimYOffset:m=u+1;const v=m-s.y,g=v<-.1||r?s.y:m;if(!(!f&&this.world.checkCollision(c,g,h))){const G=!r&&!a&&v<-.5;return o&&G&&!f?this.world.canStandAt(c,s.y,h)?{newX:c,newZ:h,newY:s.y,moved:!0,shouldFall:!1,blockType:d}:{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}:{newX:c,newZ:h,newY:m,moved:!0,shouldFall:G,blockType:d}}const T=a?this.world.getHeightAt(c,s.z):this.world.getHeightAtForPlayer(c,s.z,s.y),S=this.world.getBlockAt(Math.floor(c),Math.floor(T),Math.floor(s.z)),b=S===l.Water,R=b?T+as+this.waterSwimYOffset:T+1,L=R-s.y,P=L<-.1||r?s.y:R;if(!(!b&&this.world.checkCollision(c,P,s.z))){const G=!r&&!a&&L<-.5;if(o&&G&&!b){if(this.world.canStandAt(c,s.y,s.z))return{newX:c,newZ:s.z,newY:s.y,moved:!0,shouldFall:!1,blockType:S}}else return{newX:c,newZ:s.z,newY:R,moved:!0,shouldFall:G,blockType:S}}const x=a?this.world.getHeightAt(s.x,h):this.world.getHeightAtForPlayer(s.x,h,s.y),A=this.world.getBlockAt(Math.floor(s.x),Math.floor(x),Math.floor(h)),O=A===l.Water,F=O?x+as+this.waterSwimYOffset:x+1,Y=F-s.y,$=Y<-.1||r?s.y:F;if(!(!O&&this.world.checkCollision(s.x,$,h))){const G=!r&&!a&&Y<-.5;return o&&G&&!O?this.world.canStandAt(s.x,s.y,h)?{newX:s.x,newZ:h,newY:s.y,moved:!0,shouldFall:!1,blockType:A}:{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}:{newX:s.x,newZ:h,newY:F,moved:!0,shouldFall:G,blockType:A}}return{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}}applyGravity(e,t){return e-vc*t}calculateVerticalMovement(e,t){return e*t}checkCeilingCollision(e,t,n){return this.world.checkHeadCollision(e,t,n)?{hit:!0,maxY:Math.floor(t+_c)-_c-.01}:{hit:!1,maxY:t}}getJumpVelocity(){return fa}calculateJumpProgress(e,t){const n=e-t,s=fa*fa/(2*vc);return Math.max(0,Math.min(1,n/s))}hasLanded(e,t,n){return e<=t&&n<0}getSpeedMultiplier(e,t){return t?i_:e?n_:t_}}const pa=200,xc=15;class mn{container;analogStick;analogKnob;jumpButton;inventoryButton;callbacks;analogActive=!1;analogStartX=0;analogStartY=0;analogTouchId=null;analogTouchStartTime=0;analogMoved=!1;moveX=0;moveY=0;pinchStartDistance=0;pinchTouchIds=[];interactionTouchId=null;interactionStartTime=0;interactionStartX=0;interactionStartY=0;isBreaking=!1;breakCheckTimeout=null;crosshairTouchId=null;static isMobileDevice=null;boundAnalogStart=this.handleAnalogStart.bind(this);boundAnalogMove=this.handleAnalogMove.bind(this);boundAnalogEnd=this.handleAnalogEnd.bind(this);boundJumpStart=this.handleJumpStart.bind(this);boundJumpEnd=this.handleJumpEnd.bind(this);boundInventoryStart=this.handleInventoryStart.bind(this);boundInventoryEnd=this.handleInventoryEnd.bind(this);boundGlobalTouchStart=this.handleGlobalTouchStart.bind(this);boundGlobalTouchMove=this.handleGlobalTouchMove.bind(this);boundGlobalTouchEnd=this.handleGlobalTouchEnd.bind(this);constructor(e){this.callbacks=e,this.container=this.createContainer(),this.analogStick=this.createAnalogStick(),this.analogKnob=this.createAnalogKnob(),this.jumpButton=this.createJumpButton(),this.inventoryButton=this.createInventoryButton(),this.analogStick.appendChild(this.analogKnob),this.container.appendChild(this.analogStick),this.container.appendChild(this.jumpButton),this.container.appendChild(this.inventoryButton),document.body.appendChild(this.container),this.setupTouchHandlers()}static isMobile(){if(mn.isMobileDevice!==null)return mn.isMobileDevice;if(new URLSearchParams(window.location.search).get("mobile")==="true")return mn.isMobileDevice=!0,!0;const t="ontouchstart"in window||navigator.maxTouchPoints>0,n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=window.innerWidth<=1024||window.innerHeight<=768;return mn.isMobileDevice=t&&(n||s),mn.isMobileDevice}static setMobileMode(e){mn.isMobileDevice=e}createContainer(){const e=document.createElement("div");return e.id="mobile-controls",e.style.cssText=`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      pointer-events: none;
      z-index: 1100;
      display: ${mn.isMobile()?"block":"none"};
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
    `,e}setupTouchHandlers(){this.analogStick.addEventListener("touchstart",this.boundAnalogStart,{passive:!1}),this.analogStick.addEventListener("touchmove",this.boundAnalogMove,{passive:!1}),this.analogStick.addEventListener("touchend",this.boundAnalogEnd,{passive:!1}),this.analogStick.addEventListener("touchcancel",this.boundAnalogEnd,{passive:!1}),this.jumpButton.addEventListener("touchstart",this.boundJumpStart,{passive:!1}),this.jumpButton.addEventListener("touchend",this.boundJumpEnd,{passive:!1}),this.inventoryButton.addEventListener("touchstart",this.boundInventoryStart,{passive:!1}),this.inventoryButton.addEventListener("touchend",this.boundInventoryEnd,{passive:!1}),document.addEventListener("touchstart",this.boundGlobalTouchStart,{passive:!1}),document.addEventListener("touchmove",this.boundGlobalTouchMove,{passive:!1}),document.addEventListener("touchend",this.boundGlobalTouchEnd,{passive:!1}),document.addEventListener("touchcancel",this.boundGlobalTouchEnd,{passive:!1})}handleAnalogStart(e){if(e.preventDefault(),e.stopPropagation(),this.analogTouchId!==null)return;const t=e.changedTouches[0];this.analogTouchId=t.identifier,this.analogActive=!0,this.analogTouchStartTime=Date.now(),this.analogMoved=!1;const n=this.analogStick.getBoundingClientRect();this.analogStartX=n.left+n.width/2,this.analogStartY=n.top+n.height/2}handleAnalogMove(e){if(e.preventDefault(),e.stopPropagation(),!this.analogActive||this.analogTouchId===null)return;const t=Array.from(e.touches).find(u=>u.identifier===this.analogTouchId);if(!t)return;const n=t.clientX-this.analogStartX,s=t.clientY-this.analogStartY,r=32,a=Math.sqrt(n*n+s*s),o=Math.min(a,r);a>10&&(this.analogMoved=!0);let c=0,h=0;a>0&&(c=n/a*o,h=s/a*o),this.analogKnob.style.transform=`translate(calc(-50% + ${c}px), calc(-50% + ${h}px))`,this.moveX=c/r,this.moveY=-h/r,this.callbacks.onMove(this.moveX,this.moveY)}handleAnalogEnd(e){e.preventDefault(),e.stopPropagation(),Array.from(e.changedTouches).find(n=>n.identifier===this.analogTouchId)&&(this.analogActive=!1,this.analogTouchId=null,this.moveX=0,this.moveY=0,this.analogKnob.style.transform="translate(-50%, -50%)",this.callbacks.onMove(0,0))}handleJumpStart(e){e.preventDefault(),e.stopPropagation(),this.jumpButton.style.transform="scale(0.92)",this.jumpButton.style.background="rgba(255, 255, 255, 0.25)",this.callbacks.onJump()}handleJumpEnd(e){e.preventDefault(),e.stopPropagation(),this.jumpButton.style.transform="scale(1)",this.jumpButton.style.background="rgba(255, 255, 255, 0.12)"}handleInventoryStart(e){e.preventDefault(),e.stopPropagation(),this.inventoryButton.style.transform="scale(0.92)",this.inventoryButton.style.background="rgba(255, 255, 255, 0.25)",this.callbacks.onOpenInventory()}handleInventoryEnd(e){e.preventDefault(),e.stopPropagation(),this.inventoryButton.style.transform="scale(1)",this.inventoryButton.style.background="rgba(255, 255, 255, 0.12)"}handleGlobalTouchStart(e){const t=e.target;if(!this.isUIElement(t)){if(e.touches.length===2){this.startPinchZoom(e);return}if(e.touches.length===1&&t.tagName==="CANVAS"){const n=e.touches[0];if(this.analogTouchId!==null)return;this.interactionTouchId=n.identifier,this.interactionStartTime=Date.now(),this.interactionStartX=n.clientX,this.interactionStartY=n.clientY,this.isBreaking=!1,this.callbacks.onCrosshairMove(n.clientX,n.clientY),this.breakCheckTimeout=setTimeout(()=>{this.interactionTouchId!==null&&!this.isBreaking&&(this.isBreaking=!0,this.callbacks.onBreakStart(this.interactionStartX,this.interactionStartY))},pa)}}}handleGlobalTouchMove(e){if(e.touches.length===2&&this.pinchTouchIds.length===2){this.updatePinchZoom(e);return}if(this.interactionTouchId!==null){const t=Array.from(e.touches).find(n=>n.identifier===this.interactionTouchId);if(t){const n=t.clientX-this.interactionStartX,s=t.clientY-this.interactionStartY;Math.sqrt(n*n+s*s)>xc&&(this.callbacks.onCrosshairMove(t.clientX,t.clientY),this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null),!this.isBreaking&&Date.now()-this.interactionStartTime>pa?(this.isBreaking=!0,this.callbacks.onBreakStart(t.clientX,t.clientY)):this.isBreaking&&(this.callbacks.onBreakEnd(),this.callbacks.onBreakStart(t.clientX,t.clientY)))}}}handleGlobalTouchEnd(e){for(const n of Array.from(e.changedTouches)){const s=this.pinchTouchIds.indexOf(n.identifier);s!==-1&&(this.pinchTouchIds.splice(s,1),this.pinchTouchIds.length<2&&(this.pinchStartDistance=0))}const t=Array.from(e.changedTouches).find(n=>n.identifier===this.interactionTouchId);if(t){this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null);const n=Date.now()-this.interactionStartTime,s=t.clientX-this.interactionStartX,r=t.clientY-this.interactionStartY,a=Math.sqrt(s*s+r*r);this.isBreaking?this.callbacks.onBreakEnd():n<pa&&a<xc&&this.callbacks.onPlace(t.clientX,t.clientY),this.interactionTouchId=null,this.isBreaking=!1}}startPinchZoom(e){this.pinchTouchIds=[e.touches[0].identifier,e.touches[1].identifier],this.pinchStartDistance=this.getPinchDistance(e.touches[0],e.touches[1]),this.interactionTouchId!==null&&(this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null),this.isBreaking&&this.callbacks.onBreakEnd(),this.interactionTouchId=null,this.isBreaking=!1)}updatePinchZoom(e){if(this.pinchStartDistance===0)return;const t=Array.from(e.touches).find(a=>a.identifier===this.pinchTouchIds[0]),n=Array.from(e.touches).find(a=>a.identifier===this.pinchTouchIds[1]);if(!t||!n)return;const s=this.getPinchDistance(t,n),r=s-this.pinchStartDistance;if(Math.abs(r)>10){const a=-r*.02;this.callbacks.onZoom(a),this.pinchStartDistance=s}}getPinchDistance(e,t){const n=e.clientX-t.clientX,s=e.clientY-t.clientY;return Math.sqrt(n*n+s*s)}isUIElement(e){let t=e;for(;t;){if(t.id==="mobile-controls"||t.id==="mobile-analog"||t.id==="mobile-jump"||t.id==="mobile-inventory"||t.id==="hotbar"||t.id==="creative-inventory"||t.id==="pause-menu"||t.id==="debug-ui")return!0;t=t.parentElement}return!1}getMovement(){return{x:this.moveX,y:this.moveY}}setVisible(e){this.container.style.display=e?"block":"none"}isVisible(){return this.container.style.display!=="none"}destroy(){this.breakCheckTimeout&&clearTimeout(this.breakCheckTimeout),this.analogStick.removeEventListener("touchstart",this.boundAnalogStart),this.analogStick.removeEventListener("touchmove",this.boundAnalogMove),this.analogStick.removeEventListener("touchend",this.boundAnalogEnd),this.analogStick.removeEventListener("touchcancel",this.boundAnalogEnd),this.jumpButton.removeEventListener("touchstart",this.boundJumpStart),this.jumpButton.removeEventListener("touchend",this.boundJumpEnd),this.inventoryButton.removeEventListener("touchstart",this.boundInventoryStart),this.inventoryButton.removeEventListener("touchend",this.boundInventoryEnd),document.removeEventListener("touchstart",this.boundGlobalTouchStart),document.removeEventListener("touchmove",this.boundGlobalTouchMove),document.removeEventListener("touchend",this.boundGlobalTouchEnd),document.removeEventListener("touchcancel",this.boundGlobalTouchEnd),this.container.remove()}}function Li(){return mn.isMobile()}const r_=7/9,ma=5.4;class a_{renderer;scene;camera;postFX=null;chunkManager=null;player=null;playerPhysics=null;blockHighlight=null;debugUI;shaderDebugUI=null;swimDebugUI;textureManager;ambientLight=null;hemiLight=null;sunLight=null;sunMarker=null;shadowOffset=new N(15,200,160);shadowOffsetTarget=new N(15,200,160);sunDirection=new N(.3,.8,.5).normalize();sunVisualDirection=new N(.3,.8,.5).normalize();keyLightDirection=new N(.34,.86,.38).normalize();keyLightDirectionSmoothed=new N(.34,.86,.38).normalize();dayLengthSeconds=120;worldTimeSeconds=this.dayLengthSeconds*.25;timeOfDay=.25;skyDayColor=new he(8374015);skyDawnColor=new he(16750177);skyNightColor=new he(463142);fogDayColor=new he(10476031);fogDawnColor=new he(13143932);fogNightColor=new he(989739);ambientDayColor=new he(16774365);ambientDawnColor=new he(16759898);ambientNightColor=new he(6258633);hemiGroundDayColor=new he(.22,.26,.22);hemiGroundNightColor=new he(1251105);sunDayLightColor=new he(16773855);frameSkyColor=new he;frameFogColor=new he;frameAmbientColor=new he;frameHemiSkyColor=new he;frameHemiGroundColor=new he;waterSwimYOffset=0;inventoryHUD;droppedItemManager=null;blockBreaking=null;crosshair;pauseMenu;creativeInventory;generator=null;seed;targetedBlockPos=null;isMouseDown=!1;hasValidTarget=!1;isGamepadAttacking=!1;isGamepadCrouching=!1;mobileControls=null;mobileMovement={x:0,y:0};isMobileTouchBreaking=!1;blockRaycaster=new Fg;blockRayNdc=new ke;blockRaycastHits=[];chunkRaycastTargets=[];chunkRaycastRevision=-1;targetFrameTime=1/60;lastAnimationTimestamp=0;frameTimeAccumulator=0;isInitialized=!1;isPaused=!1;cameraDistance=50;zoom=10;cameraAzimuth=Math.PI/4;cameraAzimuthTarget=Math.PI/4;cameraRotateSpeed=8;rotateViewButton=null;movementForward=new N;movementRight=new N;constructor(){this.seed=Math.floor(Math.random()*2147483647),this.renderer=new bg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(8900331),this.renderer.outputColorSpace=xt,this.renderer.toneMapping=ho,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Mc,this.scene=new yg,this.scene.fog=new ds(8900331,100,200);const e=window.innerWidth/window.innerHeight;this.camera=new Sr(-this.zoom*e,this.zoom*e,this.zoom,-this.zoom,.1,1e3),this.setupIsometricCamera(),this.setupLights(),this.initCinematicPostFX(),this.textureManager=new P0,this.debugUI=new S0,this.shaderDebugUI=null,this.swimDebugUI=new zv,this.inventoryHUD=new Co,this.crosshair=new ev,this.pauseMenu=new Bv,this.creativeInventory=new e_(this.inventoryHUD),this.swimDebugUI.setOnChange(t=>{this.player&&this.player.setSwimPose(t)}),this.swimDebugUI.setOnWaterYChange(t=>{this.waterSwimYOffset=t}),this.pauseMenu.onResume=()=>{this.isPaused=!1,this.crosshair.setVisible(!0),this.mobileControls&&Li()&&this.mobileControls.setVisible(!0)},this.pauseMenu.onToggleDebug=()=>{this.debugUI.toggleVisibility()},this.pauseMenu.onSettingsChange=t=>{this.applyVideoSettings(t.video),console.log("Settings updated:",t)},this.creativeInventory.onOpen=()=>{this.isPaused=!0,this.crosshair.setVisible(!1),this.mobileControls&&this.mobileControls.setVisible(!1)},this.creativeInventory.onClose=()=>{this.isPaused=!1,this.crosshair.setVisible(!0),this.mobileControls&&Li()&&this.mobileControls.setVisible(!0)},Li()&&this.setupMobileControls()}setupMobileControls(){this.mobileControls=new mn({onMove:(e,t)=>{this.mobileMovement.x=e,this.mobileMovement.y=t},onJump:()=>{if(this.player&&!this.isPaused)if(this.player.swimming){if(this.playerPhysics){const t=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0),n=this.player.position.y+3*.1;this.player.position.y=Math.min(n,t)}}else this.player.jump()},onOpenInventory:()=>{this.isPaused||this.creativeInventory.toggle()},onZoom:e=>{this.isPaused||(this.zoom+=e,this.zoom=Math.max(5,Math.min(26,this.zoom)),this.updateCameraZoom())},onBreakStart:(e,t)=>{this.isPaused||(this.isMobileTouchBreaking=!0,this.updateBlockHighlight(e,t))},onBreakEnd:()=>{this.isMobileTouchBreaking=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()},onPlace:(e,t)=>{this.isPaused||(this.updateBlockHighlight(e,t),this.placeBlock())},onCrosshairMove:(e,t)=>{this.isPaused||(this.crosshair.moveBy(e-this.crosshair.getPosition().x,t-this.crosshair.getPosition().y),this.updateBlockHighlight(e,t))}}),document.body.style.cursor=""}applyVideoSettings(e){const t={...e,graphicsQuality:"high"};t.zoom!==this.zoom&&(this.zoom=t.zoom,this.updateCameraZoom()),this.chunkManager&&(this.chunkManager.setRenderDistance(t.renderDistance),this.chunkManager.setFastGraphics(t.graphicsQuality==="low"),this.chunkManager.setZoom(this.zoom));const n={low:1,medium:1.5,high:Math.min(window.devicePixelRatio,2)};this.renderer.setPixelRatio(n[t.graphicsQuality]),this.postFX?.setSize(window.innerWidth,window.innerHeight),this.scene.fog||(this.scene.fog=new ds(8900331,100,200)),tc({shaderEnabled:!0})}setupIsometricCamera(){this.camera.up.set(0,1,0),this.updateCameraPositionFromTarget(0,0,0)}updateCameraPositionFromTarget(e,t,n){const s=this.cameraDistance*Math.SQRT2,r=Math.cos(this.cameraAzimuth)*s,a=Math.sin(this.cameraAzimuth)*s;this.camera.position.set(e+r,t+this.cameraDistance,n+a),this.camera.lookAt(e,t,n)}rotateViewByQuarterTurn(){this.cameraAzimuthTarget=kt.euclideanModulo(this.cameraAzimuthTarget-Math.PI/2,Math.PI*2)}updateCameraAzimuth(e){if(e<=0)return;const t=Math.atan2(Math.sin(this.cameraAzimuthTarget-this.cameraAzimuth),Math.cos(this.cameraAzimuthTarget-this.cameraAzimuth));if(Math.abs(t)<5e-4){this.cameraAzimuth=this.cameraAzimuthTarget;return}const n=Math.sign(t)*Math.min(Math.abs(t),this.cameraRotateSpeed*e);this.cameraAzimuth=kt.euclideanModulo(this.cameraAzimuth+n,Math.PI*2)}setupRotateViewButton(){if(this.rotateViewButton)return;const e=document.createElement("button");e.type="button",e.id="rotate-view-button",e.textContent="Rotate",e.title="Rotate view by 90°",e.style.cssText=`
      position: fixed;
      left: 20px;
      top: 20px;
      z-index: 140;
      min-width: 84px;
      height: 34px;
      padding: 0 12px;
      border: 1px solid rgba(255, 255, 255, 0.26);
      border-radius: 4px;
      background: rgba(13, 22, 35, 0.52);
      color: rgba(245, 250, 255, 0.95);
      font-family: ${at};
      font-size: 12px;
      line-height: 32px;
      cursor: pointer;
      user-select: none;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
    `,e.addEventListener("click",t=>{t.preventDefault(),this.rotateViewByQuarterTurn()}),document.body.appendChild(e),this.rotateViewButton=e}setupLights(){this.ambientLight=new Ug(16777215,.65),this.scene.add(this.ambientLight),this.sunLight=new Ig(16777215,.9),this.sunLight.position.set(15,200,160),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048;const e=80;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=300,this.sunLight.shadow.bias=-.0041,this.sunLight.shadow.normalBias=.005,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight.target),this.scene.add(this.sunLight),this.hemiLight=new Pg(8900331,4021309,.32),this.scene.add(this.hemiLight);const t=new ft({color:14205304,transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1});this.sunMarker=new Ye(new wo(2.4,16,16),t),this.sunMarker.frustumCulled=!1,this.scene.add(this.sunMarker),this.updateDayNight(0)}initCinematicPostFX(){try{this.postFX=new Kv(this.renderer,this.scene,this.camera,window.innerWidth,window.innerHeight)}catch(e){this.postFX=null,console.warn("⚠️ Cinematic post-processing unavailable; using direct renderer fallback.",e)}}updateDayNight(e){this.worldTimeSeconds+=e,this.timeOfDay=this.worldTimeSeconds/this.dayLengthSeconds%1;const t=this.timeOfDay*Math.PI*2,n=Math.sin(t),s=t+Math.PI*.15,r=1-Math.min(.55,Math.abs(n)*.38);this.sunDirection.set(Math.cos(s)*r,n,Math.sin(s)*r).normalize();const a=1,o=0,c=.72,h=Math.sqrt(Math.max(0,1-c*c));this.keyLightDirection.set(Math.cos(s)*h,c,Math.sin(s)*h);const u=e>0?kt.clamp(e*3,0,1):1;this.keyLightDirectionSmoothed.lerp(this.keyLightDirection,u).normalize();const d=this.frameSkyColor.copy(this.skyNightColor).lerp(this.skyDawnColor,o*.9).lerp(this.skyDayColor,a),f=this.frameFogColor.copy(this.fogNightColor).lerp(this.fogDawnColor,o*.86).lerp(this.fogDayColor,a);this.renderer.setClearColor(d,1),this.renderer.toneMappingExposure=kt.lerp(1.06,1.3,a)+o*.02,this.scene.fog instanceof ds&&(this.scene.fog.color.copy(f),this.scene.fog.near=kt.lerp(80,120,a),this.scene.fog.far=kt.lerp(160,230,a)),this.ambientLight&&(this.frameAmbientColor.copy(this.ambientNightColor).lerp(this.ambientDawnColor,o*.98).lerp(this.ambientDayColor,a),this.ambientLight.color.copy(this.frameAmbientColor),this.ambientLight.intensity=kt.lerp(.36,.84,a)+o*.04),this.hemiLight&&(this.frameHemiSkyColor.copy(d).multiplyScalar(kt.lerp(.52,.95,a)),this.hemiLight.color.copy(this.frameHemiSkyColor),this.frameHemiGroundColor.copy(this.hemiGroundDayColor).lerp(this.hemiGroundNightColor,1-a),this.hemiLight.groundColor.copy(this.frameHemiGroundColor),this.hemiLight.intensity=kt.lerp(.26,.48,a)+o*.04),this.sunLight&&(this.sunLight.color.copy(this.sunDayLightColor),this.sunLight.intensity=kt.lerp(.46,1.35,a)+o*.06,this.sunLight.shadow.intensity=kt.lerp(.48,.78,a)),this.shadowOffsetTarget.set(this.keyLightDirectionSmoothed.x*165,120+Math.max(.22,this.keyLightDirectionSmoothed.y)*130,this.keyLightDirectionSmoothed.z*165);const m=e>0?kt.clamp(e*3,0,1):1;this.shadowOffset.lerp(this.shadowOffsetTarget,m);const v=kt.lerp(.36,1,a)+o*.02,_=kt.lerp(1.16,1.06,a);tc({shaderEnabled:!0,sunX:this.keyLightDirectionSmoothed.x*100,sunY:this.keyLightDirectionSmoothed.y*100,sunZ:this.keyLightDirectionSmoothed.z*100,sunBoost:kt.lerp(.22,.72,a)+o*.02,globalLight:v,nightLift:_}),this.postFX&&this.postFX.setTimeOfDay(this.timeOfDay)}async init(){const e=document.getElementById("loading");document.body.appendChild(this.renderer.domElement),this.setupRotateViewButton(),Li()&&(this.renderer.domElement.style.touchAction="none"),e&&(e.querySelector(".loading-text").textContent="Loading Textures..."),await this.textureManager.loadTextures(),e&&(e.querySelector(".loading-text").textContent="Initializing World..."),this.generator=await Ev(this.seed),this.chunkManager=new i0(this.scene,this.generator,this.textureManager),this.playerPhysics=new s_(this.chunkManager),this.droppedItemManager=new q0(this.scene,this.textureManager,this.inventoryHUD,(r,a)=>this.chunkManager.getHeightAt(r,a)),this.blockBreaking=new Q0(this.scene),vt().preloadCommonSounds();const t=this.findSpawnPoint();this.player=new g0(this.scene,t.x,t.z),this.player.setY(t.y),this.blockHighlight=new _0(this.scene),this.setupInputHandlers(),this.setupGamepadCommands(),window.addEventListener("resize",()=>this.handleResize()),e&&(e.style.display="none"),console.log(`⛏️ IsoCraft 3D initialized! Seed: ${this.seed.toString(16)}`),console.log("🎮 Controls: WASD to move, Space to jump, C to crouch, Mouse wheel to zoom"),console.log('🔄 Click "Rotate 90°" to rotate perspective'),console.log("🏊 Swimming activates automatically in water!"),console.log("🎵 Press ESC for game menu and sound settings"),console.log("📦 Press E to open Creative Inventory"),this.isInitialized=!0;const n=ps();n.setContext("overworld"),n.start();const s=this.pauseMenu.getSettings();s.showFPS||this.debugUI.toggleVisibility(),this.applyVideoSettings(s.video),this.animate()}findSpawnPoint(){if(!this.generator)return{x:0,y:64,z:0};for(let e=0;e<1e3;e+=8)for(let t=0;t<16;t++){const n=t/16*Math.PI*2,s=Math.floor(Math.cos(n)*e),r=Math.floor(Math.sin(n)*e),a=this.generator.getHeightAt(s,r),o=this.generator.getBiomeAt(s,r);if(!this.generator.isOcean(o)&&a>=63&&a<=80)return console.log(`🏠 Spawn found at (${s}, ${a}, ${r})`),{x:s,y:a+1,z:r}}return{x:0,y:64,z:0}}setupGamepadCommands(){const e=jt();e.registerCommand(mt.Jump,new Iv(()=>{this.player&&!this.isPaused&&this.player.jump()})),e.registerCommand(mt.Crouch,new Uv(()=>{this.player&&!this.isPaused&&!this.player.swimming&&(this.isGamepadCrouching=!this.isGamepadCrouching,this.player.setCrouching(this.isGamepadCrouching))})),e.registerCommand(mt.Attack,new Nv(()=>{this.isPaused||(this.isGamepadAttacking=!0)},()=>{this.isGamepadAttacking=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()})),e.registerCommand(mt.Use,new Fv(()=>{this.isPaused||this.placeBlock()})),e.registerCommand(mt.NextSlot,new mc("next",()=>{if(!this.isPaused){const t=this.inventoryHUD.getSelectedSlot();this.inventoryHUD.selectSlot((t+1)%9)}})),e.registerCommand(mt.PrevSlot,new mc("prev",()=>{if(!this.isPaused){const t=this.inventoryHUD.getSelectedSlot();this.inventoryHUD.selectSlot((t-1+9)%9)}})),e.registerCommand(mt.OpenInventory,new Ov(()=>{this.pauseMenu.isMenuVisible()||this.creativeInventory.toggle()})),e.onPause=()=>{this.isPaused||(this.pauseMenu.toggle(),this.isPaused=this.pauseMenu.isMenuVisible(),this.crosshair.setVisible(!this.isPaused),this.mobileControls&&this.mobileControls.setVisible(!this.isPaused&&Li()))}}setupInputHandlers(){const e=new Set;window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(t.preventDefault(),this.creativeInventory.isInventoryVisible()){this.creativeInventory.hide();return}this.pauseMenu.toggle(),this.isPaused=this.pauseMenu.isMenuVisible(),this.crosshair.setVisible(!this.isPaused),this.mobileControls&&this.mobileControls.setVisible(!this.isPaused&&Li());return}if(t.code==="KeyE"){if(t.preventDefault(),this.pauseMenu.isMenuVisible())return;this.creativeInventory.toggle();return}if(t.code==="KeyR"){t.preventDefault(),this.rotateViewByQuarterTurn();return}this.isPaused||this.creativeInventory.isInventoryVisible()||(e.add(t.code),t.code==="F3"&&(t.preventDefault(),this.debugUI.toggleVisibility(),this.pauseMenu.toggleDebugSetting()))}),window.addEventListener("keyup",t=>{this.isPaused||this.creativeInventory.isInventoryVisible()||e.delete(t.code)}),this.keys=e,this.renderer.domElement.addEventListener("wheel",t=>{t.preventDefault(),this.zoom+=t.deltaY*.02,this.zoom=Math.max(5,Math.min(26,this.zoom)),this.updateCameraZoom()},{passive:!1}),this.renderer.domElement.addEventListener("mousemove",t=>{if(!this.isPaused&&(this.updateBlockHighlight(t.clientX,t.clientY),this.isMouseDown&&this.blockBreaking)){const n=this.blockBreaking.getTargetBlock();if(n&&this.blockHighlight?.isVisible()){const s=this.blockHighlight.getPosition();n.equals(s)||this.blockBreaking.stopBreaking()}}}),this.renderer.domElement.addEventListener("mousedown",t=>{this.isPaused||t.button===0&&(this.isMouseDown=!0)}),this.renderer.domElement.addEventListener("mouseup",t=>{t.button===0&&(this.isMouseDown=!1,this.blockBreaking&&this.blockBreaking.stopBreaking())}),this.renderer.domElement.addEventListener("mouseleave",()=>{this.isMouseDown=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()}),this.renderer.domElement.addEventListener("contextmenu",t=>{t.preventDefault(),this.placeBlock()})}placeBlock(){if(!this.blockHighlight||!this.chunkManager||!this.player||!this.blockHighlight.isVisible())return;const e=this.blockHighlight.getPosition(),t=this.blockHighlight.getFace();let n=this.chunkManager.getBlockTypeAt(e.x,e.y,e.z),s=e.y;if(n===null||!on(n)){const Z=this.chunkManager.getBlockTypeAt(e.x,e.y-1,e.z);Z!==null&&on(Z)&&(n=Z,s=e.y-1)}if(n!==null&&on(n)){const Z=e.x+.5-this.player.position.x,$=s+.5-(this.player.position.y+.9),K=e.z+.5-this.player.position.z;Math.sqrt(Z*Z+$*$+K*K)<=ma&&this.chunkManager.toggleDoor(e.x,s,e.z)&&(vt().playBlockPlace(n),this.player.punch());return}const r=e.clone();switch(t){case"top":r.y+=1;break;case"bottom":r.y-=1;break;case"left":r.x-=1;break;case"right":r.x+=1;break;case"front":r.z+=1;break;case"back":r.z-=1;break}const a=r.x+.5-this.player.position.x,o=r.y+.5-(this.player.position.y+.9),c=r.z+.5-this.player.position.z;if(Math.sqrt(a*a+o*o+c*c)>ma){console.log("📏 Too far to place block");return}const u=this.player.position.x,d=this.player.position.y,f=this.player.position.z,m=.6,v=1.8,_=m/2,g=r.x,p=r.x+1,T=r.y,S=r.y+1,b=r.z,R=r.z+1,L=u-_,C=u+_,P=d,y=d+v,x=f-_,A=f+_;if(p>L&&g<C&&S>P&&T<y&&R>x&&b<A){console.log("🚫 Cannot place block inside player");return}const O=this.inventoryHUD.getSelectedSlot(),F=this.inventoryHUD.getItem(O);if(!F||F.count<=0){console.log("🙌 No item selected to place");return}this.chunkManager.placeBlock(r.x,r.y,r.z,F.blockType)&&(this.inventoryHUD.removeItem(O,1),this.player.punch(),vt().playBlockPlace(F.blockType),console.log(`🧱 Placed ${l[F.blockType]} at (${r.x}, ${r.y}, ${r.z})`))}updateBlockBreaking(e){if(!(this.isMouseDown||this.isGamepadAttacking||this.isMobileTouchBreaking)||!this.blockHighlight||!this.chunkManager||!this.player||!this.blockBreaking)return;let n=null;if(this.blockBreaking.isBreaking()&&(n=this.blockBreaking.getTargetBlock()),!n&&this.hasValidTarget&&(n=this.blockHighlight.getPosition()),!n){this.blockBreaking.stopBreaking();return}const s=n.x+.5-this.player.position.x,r=n.y+.5-(this.player.position.y+.9),a=n.z+.5-this.player.position.z;if(Math.sqrt(s*s+r*r+a*a)>ma){this.blockBreaking.stopBreaking();return}const c=this.chunkManager.getBlockTypeAt(n.x,n.y,n.z);if(c===null||c===l.Air||c===l.Water){this.blockBreaking.stopBreaking();return}if(!K0(c)){this.blockBreaking.stopBreaking();return}this.player.punching||this.player.punch(),this.blockHighlight.setVisible(!0);const h=this.blockBreaking.getCurrentStage(),u=this.blockBreaking.startBreaking(n,c,e),d=this.blockBreaking.getCurrentStage();d>h&&d>=0&&vt().playBlockHit(c),u&&this.finishBreakingBlock(n,c)}finishBreakingBlock(e,t){if(!this.chunkManager||!this.droppedItemManager||!this.blockHighlight)return;vt().playBlockBreak(t),this.chunkManager.removeBlock(e.x,e.y,e.z);const n=Og[t];if(n!==void 0){const s=Bg[t]||.05;Math.random()<s?(this.droppedItemManager.spawnItemsFromBlock(n,e,1),console.log(`🌱 Leaves dropped a ${l[n]}!`)):console.log("🍂 Leaves crumbled to nothing")}else{const s=Yg(t);s&&Math.random()<s.chance&&this.droppedItemManager.spawnItemsFromBlock(s.type,e,1),console.log(`⛏️ Broke ${l[t]} at (${e.x}, ${e.y}, ${e.z})`)}this.blockHighlight.setVisible(!1)}breakTargetedBlock(){}updateCameraZoom(){const e=window.innerWidth/window.innerHeight;this.camera.left=-this.zoom*e,this.camera.right=this.zoom*e,this.camera.top=this.zoom,this.camera.bottom=-this.zoom,this.camera.updateProjectionMatrix(),this.chunkManager&&this.chunkManager.setZoom(this.zoom)}refreshChunkRaycastTargets(){if(!this.chunkManager){this.chunkRaycastTargets.length=0,this.chunkRaycastRevision=-1;return}const e=this.chunkManager.getChunkRevision();e!==this.chunkRaycastRevision&&(this.chunkRaycastTargets.length=0,this.scene.children.forEach(t=>{t.name.startsWith("chunk_")&&this.chunkRaycastTargets.push(t)}),this.chunkRaycastRevision=e)}updateBlockHighlight(e,t){if(!this.blockHighlight||!this.chunkManager)return;const n=e/window.innerWidth*2-1,s=-(t/window.innerHeight)*2+1;this.blockRayNdc.set(n,s),this.blockRaycaster.setFromCamera(this.blockRayNdc,this.camera),this.refreshChunkRaycastTargets(),this.blockRaycastHits.length=0,this.blockRaycaster.intersectObjects(this.chunkRaycastTargets,!0,this.blockRaycastHits);const r=this.blockRaycastHits;if(r.length>0){const a=r[0],o=a.point.clone(),c=a.face?.normal;let h="top";if(c){const f=c.clone().transformDirection(a.object.matrixWorld);h=x0(f),o.sub(f.multiplyScalar(.1))}const u=new N(Math.round(o.x),Math.round(o.y),Math.round(o.z));this.blockHighlight.setPosition(u.x,u.y,u.z,h);const d=this.chunkManager.getBlockTypeAt(u.x,u.y,u.z);this.blockHighlight.setColorForBlock(d),this.hasValidTarget=!0,this.blockHighlight.setVisible(!0)}else this.hasValidTarget=!1,this.blockHighlight.setVisible(!1)}handleResize(){const e=window.innerWidth/window.innerHeight;this.camera.left=-this.zoom*e,this.camera.right=this.zoom*e,this.camera.top=this.zoom,this.camera.bottom=-this.zoom,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.postFX?.setSize(window.innerWidth,window.innerHeight)}animate=(e=performance.now())=>{if(requestAnimationFrame(this.animate),!this.isInitialized)return;if(this.lastAnimationTimestamp===0){this.lastAnimationTimestamp=e;return}let t=(e-this.lastAnimationTimestamp)/1e3;if(this.lastAnimationTimestamp=e,t=Math.min(t,.25),this.frameTimeAccumulator+=t,this.frameTimeAccumulator<this.targetFrameTime)return;const n=jt();let s=0;const r=3;for(;this.frameTimeAccumulator>=this.targetFrameTime&&s<r;){const o=this.targetFrameTime;if(this.frameTimeAccumulator-=this.targetFrameTime,s++,this.updateDayNight(o),b0(this.worldTimeSeconds),this.updateCameraAzimuth(o),n.update(o),!this.isPaused&&!this.creativeInventory.isInventoryVisible()){const c=n.getCrosshairVector();this.crosshair.updateGamepad(c.x,c.y,o);const h=8*o;n.isActionPressed(mt.ZoomIn)&&(this.zoom=Math.max(5,this.zoom-h),this.updateCameraZoom()),n.isActionPressed(mt.ZoomOut)&&(this.zoom=Math.min(26,this.zoom+h),this.updateCameraZoom())}if(n.isActionPressed(mt.Attack)&&!this.isPaused?this.isGamepadAttacking=!0:n.isActionPressed(mt.Attack)||(this.isGamepadAttacking=!1),!this.isPaused){this.updatePlayerMovement(o),this.updateCamera();const c=this.crosshair.getPosition();this.updateBlockHighlight(c.x,c.y),this.chunkManager&&this.player&&(this.chunkManager.update(this.player.position.x,this.player.position.z),this.chunkManager.setPlayerPosition(this.player.position),this.chunkManager.updateFallingBlocks(o)),this.droppedItemManager&&this.player&&this.droppedItemManager.update(o,this.player.position),this.updateBlockBreaking(o)}}this.frameTimeAccumulator=Math.min(this.frameTimeAccumulator,this.targetFrameTime*r);const a=Math.max(this.targetFrameTime,t);if(this.updateDebugUI(a),this.postFX)try{this.postFX.render(a)}catch(o){console.warn("⚠️ Post-processing render failed, switching to direct renderer.",o),this.postFX.dispose(),this.postFX=null,this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.camera)};updatePlayerMovement(e){if(!this.player||!this.chunkManager||!this.playerPhysics)return;const t=this.keys,n=jt(),s=10;let r=0,a=0,o=0,c=0;(t.has("KeyW")||t.has("ArrowUp"))&&(o+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(o-=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(c-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(c+=1);const h=n.getMovementVector();if((Math.abs(h.x)>.01||Math.abs(h.y)>.01)&&(o=-h.y,c=h.x),(Math.abs(this.mobileMovement.x)>.01||Math.abs(this.mobileMovement.y)>.01)&&(o=this.mobileMovement.y,c=this.mobileMovement.x),(o!==0||c!==0)&&(this.movementForward.set(-Math.cos(this.cameraAzimuth),0,-Math.sin(this.cameraAzimuth)).normalize(),this.movementRight.set(-this.movementForward.z,0,this.movementForward.x).normalize(),r=this.movementForward.x*o+this.movementRight.x*c,a=this.movementForward.z*o+this.movementRight.z*c),t.has("Space"))if(this.player.swimming){const m=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0),v=this.player.position.y+3*e;this.player.position.y=Math.min(v,m)}else this.player.jump();if(this.player.swimming)this.isGamepadCrouching=!1;else{const f=t.has("KeyC");(f||!this.isGamepadCrouching)&&this.player.setCrouching(f||this.isGamepadCrouching)}this.playerPhysics.setWaterSwimYOffset(this.waterSwimYOffset);const u=this.playerPhysics.isInWater(this.player.position.x,this.player.position.z,this.player.position.y);this.player.setSwimming(u);const d=this.playerPhysics.getBlockAtFeet(this.player.position.x,this.player.position.z);if(d!==null&&d!==l.Air&&this.player.setCurrentBlockType(d),!this.player.jumping&&!this.player.swimming&&(this.playerPhysics.canStand(this.player.position.x,this.player.position.y,this.player.position.z)||this.player.fall()),this.player.swimming&&!this.player.jumping){const f=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0);this.player.setY(f)}if(r!==0||a!==0){const f=Math.sqrt(r*r+a*a),m=s*this.player.getSpeedMultiplier();r=r/f*m*e,a=a/f*m*e;const v=this.playerPhysics.tryMove({position:this.player.position,isJumping:this.player.jumping||this.player.isInAir(),isSwimming:this.player.swimming,isCrouching:this.player.crouching,jumpVelocity:this.player.getJumpVelocity()},r,a);v.moved&&(this.player.move(v.newX-this.player.position.x,v.newZ-this.player.position.z),this.player.jumping||this.player.isInAir()?this.player.updateTerrainY(v.newY):v.shouldFall?(this.player.fall(),this.player.updateTerrainY(v.newY)):this.player.setY(v.newY))}if(this.player.jumping){const f=this.chunkManager.getStandingHeightAt(this.player.position.x,this.player.position.z,this.player.position.y),m=this.chunkManager.getHeightAt(this.player.position.x,this.player.position.z),g=this.chunkManager.getBlockAt(Math.floor(this.player.position.x),Math.floor(m),Math.floor(this.player.position.z))===l.Water?Math.max(f,m+r_+.5):f;this.player.updateTerrainY(g)}if(this.player.update(e),this.player.jumping&&this.player.getJumpVelocity()>0){const f=this.playerPhysics.checkCeilingCollision(this.player.position.x,this.player.position.y,this.player.position.z);f.hit&&this.player.hitCeiling(f.maxY)}}updateCamera(){if(!this.player)return;this.updateCameraPositionFromTarget(this.player.position.x,this.player.position.y,this.player.position.z);const e=this.sunLight;if(e){const s=e.shadow.mapSize.width,a=60*2/s,o=Math.round(this.player.position.x/a)*a,c=Math.round(this.player.position.z/a)*a;e.position.set(o+this.shadowOffset.x,this.player.position.y+this.shadowOffset.y,c+this.shadowOffset.z),e.target.position.set(o,this.player.position.y,c)}const t=250,n=180;this.sunMarker&&(this.sunVisualDirection.copy(this.sunDirection),this.sunVisualDirection.y=Math.abs(this.sunVisualDirection.y),this.sunVisualDirection.normalize(),this.sunMarker.position.copy(this.player.position).addScaledVector(this.sunVisualDirection,t),this.sunMarker.position.y+=n,this.sunMarker.material.opacity=.72,this.sunMarker.visible=!0)}updateDebugUI(e){if(!this.player||!this.generator)return;const t=this.generator.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z)),n=e>0?1/e:60,s=Math.max(0,Math.round(n/5)*5);let r=null;if(this.chunkManager){const c=Math.floor(this.player.position.y)-1,h=this.chunkManager.getBlockAt(Math.floor(this.player.position.x),c,Math.floor(this.player.position.z));h!==null&&(r=l[h])}let a=null;if(this.blockHighlight?.isVisible()&&this.chunkManager){const c=this.blockHighlight.getPosition(),h=this.chunkManager.getBlockAt(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z));h!==null&&(a=l[h])}const o=this.renderer.info.render;this.debugUI.update({fps:s,playerX:this.player.position.x,playerY:this.player.position.y,playerZ:this.player.position.z,chunks:this.chunkManager?.getChunkCount()||0,biome:this.generator.getBiomeName(t),seed:this.seed,zoom:this.zoom,playerState:this.player.getStateName(),triangles:o.triangles,drawCalls:o.calls,blockBelow:r,targetedBlock:a})}destroy(){this.postFX?.dispose(),this.renderer.dispose(),this.chunkManager?.destroy(),this.player?.destroy(),this.blockHighlight?.destroy(),this.droppedItemManager?.destroy(),this.blockBreaking?.destroy(),this.crosshair.destroy(),this.debugUI.destroy(),this.shaderDebugUI?.destroy(),this.pauseMenu.destroy(),this.creativeInventory.destroy(),this.mobileControls?.destroy(),ps().destroy(),this.sunMarker?.geometry.dispose(),this.sunMarker?.material.dispose()}}async function o_(){const i=new a_;await i.init(),window.game=i,console.log("⛏️ IsoCraft 3D initialized!"),console.log("🌍 Using Three.js with cubiomes for Minecraft biome generation"),console.log("🎮 Controls: WASD to move, Mouse wheel to zoom")}o_().catch(i=>{console.error("Failed to start game:",i);const e=document.getElementById("loading");e&&(e.innerHTML=`
      <div style="color: #ff5555; font-size: 20px; text-shadow: 2px 2px 0 #330000;">Error Loading World</div>
      <div style="color: #aaa; margin-top: 15px; font-size: 14px; text-shadow: 1px 1px 0 #222;">${i.message}</div>
    `)});
