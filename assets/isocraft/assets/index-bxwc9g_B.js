(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="170",Vc=0,So=1,Wc=2,Ql=1,tc=2,Sn=3,wn=0,Be=1,we=2,On=0,Ei=1,bo=2,Mo=3,yo=4,Xc=5,Jn=100,$c=101,Yc=102,qc=103,Jc=104,jc=200,Zc=201,Kc=202,Qc=203,na=204,ia=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,ah=212,oh=213,lh=214,sa=0,ra=1,aa=2,Li=3,oa=4,la=5,ca=6,ha=7,Ya=0,ch=1,hh=2,Nn=0,dh=1,uh=2,ph=3,fh=4,gh=5,mh=6,_h=7,ec=300,Ri=301,Pi=302,da=303,ua=304,ir=306,rs=1e3,Kn=1001,pa=1002,ee=1003,vh=1004,fs=1005,hn=1006,hr=1007,Qn=1008,En=1009,nc=1010,ic=1011,as=1012,qa=1013,ti=1014,dn=1015,ls=1016,Ja=1017,ja=1018,ki=1020,sc=35902,rc=1021,ac=1022,rn=1023,oc=1024,lc=1025,Ti=1026,Di=1027,Za=1028,Ka=1029,cc=1030,Qa=1031,to=1033,Ws=33776,Xs=33777,$s=33778,Ys=33779,fa=35840,ga=35841,ma=35842,_a=35843,va=36196,xa=37492,Sa=37496,ba=37808,Ma=37809,ya=37810,wa=37811,Ea=37812,Ta=37813,Aa=37814,Ca=37815,La=37816,Ra=37817,Pa=37818,ka=37819,Da=37820,Ia=37821,qs=36492,Ua=36494,Oa=36495,hc=36283,Na=36284,Ba=36285,Fa=36286,xh=3200,Sh=3201,dc=0,bh=1,Un="",xe="srgb",Ui="srgb-linear",sr="linear",ie="srgb",si=7680,wo=519,Mh=512,yh=513,wh=514,uc=515,Eh=516,Th=517,Ah=518,Ch=519,Eo=35044,To="300 es",Mn=2e3,Qs=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,za=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Lh(i,t){return(i%t+t)%t}function ur(i,t,e){return(1-e)*i+e*t}function Gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,a,l,c,h){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],u=n[7],f=n[2],m=n[5],_=n[8],v=s[0],g=s[3],p=s[6],E=s[1],y=s[4],w=s[7],P=s[2],L=s[5],A=s[8];return r[0]=a*v+l*E+c*P,r[3]=a*g+l*y+c*L,r[6]=a*p+l*w+c*A,r[1]=h*v+d*E+u*P,r[4]=h*g+d*y+u*L,r[7]=h*p+d*w+u*A,r[2]=f*v+m*E+_*P,r[5]=f*g+m*y+_*L,r[8]=f*p+m*w+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*c+s*r*h-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],u=d*a-l*h,f=l*c-d*r,m=h*r-a*c,_=e*u+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*h-d*n)*v,t[2]=(l*n-s*a)*v,t[3]=f*v,t[4]=(d*e-s*c)*v,t[5]=(s*r-l*e)*v,t[6]=m*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(pr.makeScale(t,e)),this}rotate(t){return this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new Ut;function pc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rh(){const i=os("canvas");return i.style.display="block",i}const Ao={};function ts(i){i in Ao||(Ao[i]=!0,console.warn(i))}function Ph(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?sr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Co=[.64,.33,.3,.6,.15,.06],Lo=[.2126,.7152,.0722],Ro=[.3127,.329],Po=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ko=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ui]:{primaries:Co,whitePoint:Ro,transfer:sr,toXYZ:Po,fromXYZ:ko,luminanceCoefficients:Lo,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:Co,whitePoint:Ro,transfer:ie,toXYZ:Po,fromXYZ:ko,luminanceCoefficients:Lo,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});let ri;class Ih{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=os("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uh=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(fr(s[a].image)):r.push(fr(s[a]))}else r=fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;class Re extends Oi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Kn,s=Kn,r=hn,a=Qn,l=rn,c=En,h=Re.DEFAULT_ANISOTROPY,d=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=cs(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=ec;Re.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],d=c[4],u=c[8],f=c[1],m=c[5],_=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+g)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,w=(m+1)/2,P=(p+1)/2,L=(d+f)/4,A=(u+v)/4,k=(_+g)/4;return y>w&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=L/n,r=A/n):w>P?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=L/s,r=k/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=k/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-_)*(g-_)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(u-v)/E,this.z=(f-d)/E,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Nh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gc extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ee,this.minFilter=ee,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ee,this.minFilter=ee,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],d=n[s+2],u=n[s+3];const f=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(l===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=u;return}if(l===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(u!==v||c!==f||h!==m||d!==_){let g=1-l;const p=c*f+h*m+d*_+u*v,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),L=Math.atan2(P,p*E);g=Math.sin(g*L)/P,l=Math.sin(l*L)/P}const w=l*E;if(c=c*g+f*w,h=h*g+m*w,d=d*g+_*w,u=u*g+v*w,g===1-l){const P=1/Math.sqrt(c*c+h*h+d*d+u*u);c*=P,h*=P,d*=P,u*=P}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const l=n[s],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=l*_+d*u+c*m-h*f,t[e+1]=c*_+d*f+h*u-l*m,t[e+2]=h*_+d*m+l*f-c*u,t[e+3]=d*_-l*u-c*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(s/2),u=l(r/2),f=c(n/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*d*u+h*m*_,this._y=h*m*u-f*d*_,this._z=h*d*_+f*m*u,this._w=h*d*u-f*m*_;break;case"YXZ":this._x=f*d*u+h*m*_,this._y=h*m*u-f*d*_,this._z=h*d*_-f*m*u,this._w=h*d*u+f*m*_;break;case"ZXY":this._x=f*d*u-h*m*_,this._y=h*m*u+f*d*_,this._z=h*d*_+f*m*u,this._w=h*d*u-f*m*_;break;case"ZYX":this._x=f*d*u-h*m*_,this._y=h*m*u+f*d*_,this._z=h*d*_-f*m*u,this._w=h*d*u+f*m*_;break;case"YZX":this._x=f*d*u+h*m*_,this._y=h*m*u+f*d*_,this._z=h*d*_-f*m*u,this._w=h*d*u-f*m*_;break;case"XZY":this._x=f*d*u-h*m*_,this._y=h*m*u-f*d*_,this._z=h*d*_+f*m*u,this._w=h*d*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],d=e[6],u=e[10],f=n+l+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>l&&n>u){const m=2*Math.sqrt(1+n-l-u);this._w=(d-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(l>u){const m=2*Math.sqrt(1+l-n-u);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-n-l);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*c,this._y=s*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-s*l,this._w=a*d-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let l=a*t._w+n*t._x+s*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-l*l;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,l),u=Math.sin((1-e)*d)/h,f=Math.sin(e*d)/h;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Do.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),u=2*(r*n-a*e);return this.x=e+c*h+a*u-l*d,this.y=n+c*d+l*h-r*u,this.z=s+c*u+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gr.copy(this).projectOnVector(t),this.sub(gr)}reflect(t){return this.sub(gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new O,Do=new hs;class ni{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),ms.subVectors(this.max,Vi),ai.subVectors(t.a,Vi),oi.subVectors(t.b,Vi),li.subVectors(t.c,Vi),Ln.subVectors(oi,ai),Rn.subVectors(li,oi),zn.subVectors(ai,li);let e=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-zn.z,zn.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,zn.z,0,-zn.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-zn.y,zn.x,0];return!mr(e,ai,oi,li,ms)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,ai,oi,li,ms))?!1:(_s.crossVectors(Ln,Rn),e=[_s.x,_s.y,_s.z],mr(e,ai,oi,li,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new O,new O,new O,new O,new O,new O,new O,new O],Ke=new O,gs=new ni,ai=new O,oi=new O,li=new O,Ln=new O,Rn=new O,zn=new O,Vi=new O,ms=new O,_s=new O,Hn=new O;function mr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);const l=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=t.dot(Hn),h=e.dot(Hn),d=n.dot(Hn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}const Fh=new ni,Wi=new O,_r=new O;class Ni{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(_r)),this.expandByPoint(Wi.copy(t.center).sub(_r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new O,vr=new O,vs=new O,Pn=new O,xr=new O,xs=new O,Sr=new O;class eo{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vr.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(vr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(vs),l=Pn.dot(this.direction),c=-Pn.dot(vs),h=Pn.lengthSq(),d=Math.abs(1-a*a);let u,f,m,_;if(d>0)if(u=a*c-l,f=a*l-c,_=r*d,u>=0)if(f>=-_)if(f<=_){const v=1/d;u*=v,f*=v,m=u*(u+a*f+2*l)+f*(a*u+f+2*c)+h}else f=r,u=Math.max(0,-(a*f+l)),m=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(a*f+l)),m=-u*u+f*(f+2*c)+h;else f<=-_?(u=Math.max(0,-(-a*r+l)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+h):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+h):(u=Math.max(0,-(a*r+l)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+h);else f=a>0?-r:r,u=Math.max(0,-(a*f+l)),m=-u*u+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vr).addScaledVector(vs,f),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(l=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){xr.subVectors(e,t),xs.subVectors(n,t),Sr.crossVectors(xr,xs);let a=this.direction.dot(Sr),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const c=l*this.direction.dot(xs.crossVectors(Pn,xs));if(c<0)return null;const h=l*this.direction.dot(xr.cross(Pn));if(h<0||c+h>a)return null;const d=-l*Pn.dot(Sr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,a,l,c,h,d,u,f,m,_,v,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,d,u,f,m,_,v,g)}set(t,e,n,s,r,a,l,c,h,d,u,f,m,_,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=h,p[6]=d,p[10]=u,p[14]=f,p[3]=m,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*d,m=a*u,_=l*d,v=l*u;e[0]=c*d,e[4]=-c*u,e[8]=h,e[1]=m+_*h,e[5]=f-v*h,e[9]=-l*c,e[2]=v-f*h,e[6]=_+m*h,e[10]=a*c}else if(t.order==="YXZ"){const f=c*d,m=c*u,_=h*d,v=h*u;e[0]=f+v*l,e[4]=_*l-m,e[8]=a*h,e[1]=a*u,e[5]=a*d,e[9]=-l,e[2]=m*l-_,e[6]=v+f*l,e[10]=a*c}else if(t.order==="ZXY"){const f=c*d,m=c*u,_=h*d,v=h*u;e[0]=f-v*l,e[4]=-a*u,e[8]=_+m*l,e[1]=m+_*l,e[5]=a*d,e[9]=v-f*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){const f=a*d,m=a*u,_=l*d,v=l*u;e[0]=c*d,e[4]=_*h-m,e[8]=f*h+v,e[1]=c*u,e[5]=v*h+f,e[9]=m*h-_,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*h,_=l*c,v=l*h;e[0]=c*d,e[4]=v-f*u,e[8]=_*u+m,e[1]=u,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=m*u+_,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*c,m=a*h,_=l*c,v=l*h;e[0]=c*d,e[4]=-u,e[8]=h*d,e[1]=f*u+v,e[5]=a*d,e[9]=m*u-_,e[2]=_*u-m,e[6]=l*d,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,Hh)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),kn.crossVectors(n,ze),kn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),kn.crossVectors(n,ze)),kn.normalize(),Ss.crossVectors(ze,kn),s[0]=kn.x,s[4]=Ss.x,s[8]=ze.x,s[1]=kn.y,s[5]=Ss.y,s[9]=ze.y,s[2]=kn.z,s[6]=Ss.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],u=n[5],f=n[9],m=n[13],_=n[2],v=n[6],g=n[10],p=n[14],E=n[3],y=n[7],w=n[11],P=n[15],L=s[0],A=s[4],k=s[8],M=s[12],S=s[1],C=s[5],G=s[9],N=s[13],$=s[2],j=s[6],Y=s[10],Q=s[14],V=s[3],at=s[7],pt=s[11],wt=s[15];return r[0]=a*L+l*S+c*$+h*V,r[4]=a*A+l*C+c*j+h*at,r[8]=a*k+l*G+c*Y+h*pt,r[12]=a*M+l*N+c*Q+h*wt,r[1]=d*L+u*S+f*$+m*V,r[5]=d*A+u*C+f*j+m*at,r[9]=d*k+u*G+f*Y+m*pt,r[13]=d*M+u*N+f*Q+m*wt,r[2]=_*L+v*S+g*$+p*V,r[6]=_*A+v*C+g*j+p*at,r[10]=_*k+v*G+g*Y+p*pt,r[14]=_*M+v*N+g*Q+p*wt,r[3]=E*L+y*S+w*$+P*V,r[7]=E*A+y*C+w*j+P*at,r[11]=E*k+y*G+w*Y+P*pt,r[15]=E*M+y*N+w*Q+P*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],d=t[2],u=t[6],f=t[10],m=t[14],_=t[3],v=t[7],g=t[11],p=t[15];return _*(+r*c*u-s*h*u-r*l*f+n*h*f+s*l*m-n*c*m)+v*(+e*c*m-e*h*f+r*a*f-s*a*m+s*h*d-r*c*d)+g*(+e*h*u-e*l*m-r*a*u+n*a*m+r*l*d-n*h*d)+p*(-s*l*d-e*c*u+e*l*f+s*a*u-n*a*f+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],u=t[9],f=t[10],m=t[11],_=t[12],v=t[13],g=t[14],p=t[15],E=u*g*h-v*f*h+v*c*m-l*g*m-u*c*p+l*f*p,y=_*f*h-d*g*h-_*c*m+a*g*m+d*c*p-a*f*p,w=d*v*h-_*u*h+_*l*m-a*v*m-d*l*p+a*u*p,P=_*u*c-d*v*c-_*l*f+a*v*f+d*l*g-a*u*g,L=e*E+n*y+s*w+r*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return t[0]=E*A,t[1]=(v*f*r-u*g*r-v*s*m+n*g*m+u*s*p-n*f*p)*A,t[2]=(l*g*r-v*c*r+v*s*h-n*g*h-l*s*p+n*c*p)*A,t[3]=(u*c*r-l*f*r-u*s*h+n*f*h+l*s*m-n*c*m)*A,t[4]=y*A,t[5]=(d*g*r-_*f*r+_*s*m-e*g*m-d*s*p+e*f*p)*A,t[6]=(_*c*r-a*g*r-_*s*h+e*g*h+a*s*p-e*c*p)*A,t[7]=(a*f*r-d*c*r+d*s*h-e*f*h-a*s*m+e*c*m)*A,t[8]=w*A,t[9]=(_*u*r-d*v*r-_*n*m+e*v*m+d*n*p-e*u*p)*A,t[10]=(a*v*r-_*l*r+_*n*h-e*v*h-a*n*p+e*l*p)*A,t[11]=(d*l*r-a*u*r-d*n*h+e*u*h+a*n*m-e*l*m)*A,t[12]=P*A,t[13]=(d*v*s-_*u*s+_*n*f-e*v*f-d*n*g+e*u*g)*A,t[14]=(_*l*s-a*v*s-_*n*c+e*v*c+a*n*g-e*l*g)*A,t[15]=(a*u*s-d*l*s+d*n*c-e*u*c-a*n*f+e*l*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,d*l+n,d*c-s*a,0,h*c-s*l,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,d=a+a,u=l+l,f=r*h,m=r*d,_=r*u,v=a*d,g=a*u,p=l*u,E=c*h,y=c*d,w=c*u,P=n.x,L=n.y,A=n.z;return s[0]=(1-(v+p))*P,s[1]=(m+w)*P,s[2]=(_-y)*P,s[3]=0,s[4]=(m-w)*L,s[5]=(1-(f+p))*L,s[6]=(g+E)*L,s[7]=0,s[8]=(_+y)*A,s[9]=(g-E)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const a=ci.set(s[4],s[5],s[6]).length(),l=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const h=1/r,d=1/a,u=1/l;return Qe.elements[0]*=h,Qe.elements[1]*=h,Qe.elements[2]*=h,Qe.elements[4]*=d,Qe.elements[5]*=d,Qe.elements[6]*=d,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,a,l=Mn){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(l===Mn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(l===Qs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Mn){const c=this.elements,h=1/(e-t),d=1/(n-s),u=1/(a-r),f=(e+t)*h,m=(n+s)*d;let _,v;if(l===Mn)_=(a+r)*u,v=-2*u;else if(l===Qs)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new O,Qe=new jt,zh=new O(0,0,0),Hh=new O(1,1,1),kn=new O,Ss=new O,ze=new O,Io=new jt,Uo=new hs;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Io,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gh=0;const Oo=new O,hi=new hs,_n=new jt,bs=new O,Xi=new O,Vh=new O,Wh=new hs,No=new O(1,0,0),Bo=new O(0,1,0),Fo=new O(0,0,1),zo={type:"added"},Xh={type:"removed"},di={type:"childadded",child:null},br={type:"childremoved",child:null};class ye extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new O,e=new un,n=new hs,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ut}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(No,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(No,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Xi,bs,this.up):_n.lookAt(bs,Xi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(_n),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zo),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xh),br.child=t,this.dispatchEvent(br),br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zo),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,Vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){const l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(l){const c=[];for(const h in l){const d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new O(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new O,vn=new O,Mr=new O,xn=new O,ui=new O,pi=new O,Ho=new O,yr=new O,wr=new O,Er=new O,Tr=new ge,Ar=new ge,Cr=new ge;class sn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),vn.subVectors(n,e),Mr.subVectors(t,e);const a=tn.dot(tn),l=tn.dot(vn),c=tn.dot(Mr),h=vn.dot(vn),d=vn.dot(Mr),u=a*h-l*l;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(h*c-l*d)*f,_=(a*d-l*c)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(l,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Tr.setScalar(0),Ar.setScalar(0),Cr.setScalar(0),Tr.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,n),Cr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Tr,r.x),a.addScaledVector(Ar,r.y),a.addScaledVector(Cr,r.z),a}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),vn.subVectors(t,e),tn.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),tn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,l;ui.subVectors(s,n),pi.subVectors(r,n),yr.subVectors(t,n);const c=ui.dot(yr),h=pi.dot(yr);if(c<=0&&h<=0)return e.copy(n);wr.subVectors(t,s);const d=ui.dot(wr),u=pi.dot(wr);if(d>=0&&u<=d)return e.copy(s);const f=c*u-d*h;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(ui,a);Er.subVectors(t,r);const m=ui.dot(Er),_=pi.dot(Er);if(_>=0&&m<=_)return e.copy(r);const v=m*h-c*_;if(v<=0&&h>=0&&_<=0)return l=h/(h-_),e.copy(n).addScaledVector(pi,l);const g=d*_-m*u;if(g<=0&&u-d>=0&&m-_>=0)return Ho.subVectors(r,s),l=(u-d)/(u-d+(m-_)),e.copy(s).addScaledVector(Ho,l);const p=1/(g+v+f);return a=v*p,l=f*p,e.copy(n).addScaledVector(ui,a).addScaledVector(pi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Lr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Lh(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lr(a,r,t+1/3),this.g=Lr(a,r,t),this.b=Lr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Yt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Oe(Ce.r*255,0,255))*65536+Math.round(Oe(Ce.g*255,0,255))*256+Math.round(Oe(Ce.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),l=Math.min(n,s,r);let c,h;const d=(l+a)/2;if(l===a)c=0,h=0;else{const u=a-l;switch(h=d<=.5?u/(a+l):u/(2-a-l),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=xe){Yt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ms);const n=ur(Dn.h,Ms.h,e),s=ur(Dn.s,Ms.s,e),r=ur(Dn.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Et;Et.NAMES=mc;let $h=0;class Ye extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=cs(),this.name="",this.blending=Ei,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const l in r){const c=r[l];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pe extends Ye{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new O,ys=new Zt;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eo&&(t.usage=this.usage),t}}class _c extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vc extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qe extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yh=0;const Xe=new jt,Rr=new ye,fi=new O,He=new ni,$i=new ni,Me=new O;class Je extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pc(t)?vc:_c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const l=e[r];$i.setFromBufferAttribute(l),this.morphTargetsRelative?(Me.addVectors(He.min,$i.min),He.expandByPoint(Me),Me.addVectors(He.max,$i.max),He.expandByPoint(Me)):(He.expandByPoint($i.min),He.expandByPoint($i.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const l=e[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Me.fromBufferAttribute(l,h),c&&(fi.fromBufferAttribute(t,h),Me.add(fi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<n.count;k++)l[k]=new O,c[k]=new O;const h=new O,d=new O,u=new O,f=new Zt,m=new Zt,_=new Zt,v=new O,g=new O;function p(k,M,S){h.fromBufferAttribute(n,k),d.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,k),m.fromBufferAttribute(r,M),_.fromBufferAttribute(r,S),d.sub(h),u.sub(h),m.sub(f),_.sub(f);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(C),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(C),l[k].add(v),l[M].add(v),l[S].add(v),c[k].add(g),c[M].add(g),c[S].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let k=0,M=E.length;k<M;++k){const S=E[k],C=S.start,G=S.count;for(let N=C,$=C+G;N<$;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new O,w=new O,P=new O,L=new O;function A(k){P.fromBufferAttribute(s,k),L.copy(P);const M=l[k];y.copy(M),y.sub(P.multiplyScalar(P.dot(M))).normalize(),w.crossVectors(L,M);const C=w.dot(c[k])<0?-1:1;a.setXYZW(k,y.x,y.y,y.z,C)}for(let k=0,M=E.length;k<M;++k){const S=E[k],C=S.start,G=S.count;for(let N=C,$=C+G;N<$;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,l=new O,c=new O,h=new O,d=new O,u=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),l.add(d),c.add(d),h.add(d),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(l,c){const h=l.array,d=l.itemSize,u=l.normalized,f=new h.constructor(c.length*d);let m=0,_=0;for(let v=0,g=c.length;v<g;v++){l.isInterleavedBufferAttribute?m=c[v]*l.data.stride+l.offset:m=c[v]*d;for(let p=0;p<d;p++)f[_++]=h[m++]}return new Ee(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],h=t(c,n);e.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const c=[],h=r[l];for(let d=0,u=h.length;d<u;d++){const f=h[d],m=t(f,n);c.push(m)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let u=0,f=h.length;u<f;u++){const m=h[u];d.push(m.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],u=r[h];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new jt,Gn=new eo,ws=new Ni,Vo=new O,Es=new O,Ts=new O,As=new O,Pr=new O,Cs=new O,Wo=new O,Ls=new O;class qt extends ye{constructor(t=new Je,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){Cs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=l[c],u=r[c];d!==0&&(Pr.fromBufferAttribute(u,t),a?Cs.addScaledVector(Pr,d):Cs.addScaledVector(Pr.sub(e),d))}e.add(Cs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(ws.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ws,Vo)===null||Gn.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(Go.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Go),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=a[g.materialIndex],E=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let w=E,P=y;w<P;w+=3){const L=l.getX(w),A=l.getX(w+1),k=l.getX(w+2);s=Rs(this,p,t,n,h,d,u,L,A,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const E=l.getX(g),y=l.getX(g+1),w=l.getX(g+2);s=Rs(this,a,t,n,h,d,u,E,y,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=a[g.materialIndex],E=Math.max(g.start,m.start),y=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let w=E,P=y;w<P;w+=3){const L=w,A=w+1,k=w+2;s=Rs(this,p,t,n,h,d,u,L,A,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const E=g,y=g+1,w=g+2;s=Rs(this,a,t,n,h,d,u,E,y,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function qh(i,t,e,n,s,r,a,l){let c;if(t.side===Be?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===wn,l),c===null)return null;Ls.copy(l),Ls.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ls);return h<e.near||h>e.far?null:{distance:h,point:Ls.clone(),object:i}}function Rs(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,Es),i.getVertexPosition(c,Ts),i.getVertexPosition(h,As);const d=qh(i,t,e,n,Es,Ts,As,Wo);if(d){const u=new O;sn.getBarycoord(Wo,Es,Ts,As,u),s&&(d.uv=sn.getInterpolatedAttribute(s,l,c,h,u,new Zt)),r&&(d.uv1=sn.getInterpolatedAttribute(r,l,c,h,u,new Zt)),a&&(d.normal=sn.getInterpolatedAttribute(a,l,c,h,u,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new O,materialIndex:0};sn.getNormal(Es,Ts,As,f.normal),d.face=f,d.barycoord=u}return d}class Le extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],d=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(u,2));function _(v,g,p,E,y,w,P,L,A,k,M){const S=w/A,C=P/k,G=w/2,N=P/2,$=L/2,j=A+1,Y=k+1;let Q=0,V=0;const at=new O;for(let pt=0;pt<Y;pt++){const wt=pt*C-N;for(let Bt=0;Bt<j;Bt++){const re=Bt*S-G;at[v]=re*E,at[g]=wt*y,at[p]=$,h.push(at.x,at.y,at.z),at[v]=0,at[g]=0,at[p]=L>0?1:-1,d.push(at.x,at.y,at.z),u.push(Bt/A),u.push(1-pt/k),Q+=1}}for(let pt=0;pt<k;pt++)for(let wt=0;wt<A;wt++){const Bt=f+wt+j*pt,re=f+wt+j*(pt+1),J=f+(wt+1)+j*(pt+1),it=f+(wt+1)+j*pt;c.push(Bt,re,it),c.push(re,J,it),V+=6}l.addGroup(m,V,M),m+=V,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const s in n)t[s]=n[s]}return t}function Jh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Sc={clone:Ii,merge:ke};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Ye{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=Jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new O,Xo=new Zt,$o=new Zt;class nn extends bc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Xo,$o),e.subVectors($o,Xo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,mi=1;class Kh extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(gi,mi,t,e);s.layers=this.layers,this.add(s);const r=new nn(gi,mi,t,e);r.layers=this.layers,this.add(r);const a=new nn(gi,mi,t,e);a.layers=this.layers,this.add(a);const l=new nn(gi,mi,t,e);l.layers=this.layers,this.add(l);const c=new nn(gi,mi,t,e);c.layers=this.layers,this.add(c);const h=new nn(gi,mi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(const h of e)this.remove(h);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,c,h,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(u,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Mc extends Re{constructor(t,e,n,s,r,a,l,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qh extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:On});r.uniforms.tEquirect.value=e;const a=new qt(s,r),l=e.minFilter;return e.minFilter===Qn&&(e.minFilter=hn),new Kh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const kr=new O,td=new O,ed=new Ut;class Yn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=kr.subVectors(n,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ed.getNormalMatrix(t),s=this.coplanarPoint(kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ni,Ps=new O;class io{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,s=t.elements,r=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],v=s[10],g=s[11],p=s[12],E=s[13],y=s[14],w=s[15];if(n[0].setComponents(c-r,f-h,g-m,w-p).normalize(),n[1].setComponents(c+r,f+h,g+m,w+p).normalize(),n[2].setComponents(c+a,f+d,g+_,w+E).normalize(),n[3].setComponents(c-a,f-d,g-_,w-E).normalize(),n[4].setComponents(c-l,f-u,g-v,w-y).normalize(),e===Mn)n[5].setComponents(c+l,f+u,g+v,w+y).normalize();else if(e===Qs)n[5].setComponents(l,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ps.x=s.normal.x>0?t.max.x:t.min.x,Ps.y=s.normal.y>0?t.max.y:t.min.y,Ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nd(i){const t=new WeakMap;function e(l,c){const h=l.array,d=l.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,c,h){const d=c.array,u=c.updateRanges;if(i.bindBuffer(h,l),u.length===0)i.bufferSubData(h,0,d);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],v=u[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const v=u[m];i.bufferSubData(h,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}class ds extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,d=c+1,u=t/l,f=e/c,m=[],_=[],v=[],g=[];for(let p=0;p<d;p++){const E=p*f-a;for(let y=0;y<h;y++){const w=y*u-r;_.push(w,-E,0),v.push(0,0,1),g.push(y/l),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<l;E++){const y=E+h*p,w=E+h*(p+1),P=E+1+h*(p+1),L=E+1+h*p;m.push(y,w,L),m.push(w,P,L)}this.setIndex(m),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
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
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
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
#endif`,ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,md=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Td=`#define PI 3.141592653589793
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
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
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
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
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
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
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
#endif`,eu=`struct PhysicalMaterial {
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
}`,nu=`
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
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
#endif`,su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ru=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uu=`#if defined( USE_POINTS_UV )
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
#endif`,pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
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
#endif`,xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eu=`#ifdef USE_NORMALMAP
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
#endif`,Tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hu=`float getShadowMask() {
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
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
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
#endif`,Wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xu=`#ifdef USE_SKINNING
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
#endif`,$u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ju=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ju=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
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
}`,cp=`#if DEPTH_PACKING == 3200
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
}`,hp=`#define DISTANCE
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
}`,dp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,gp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,bp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,wp=`#define PHONG
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
}`,Ep=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,Ap=`#define STANDARD
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
}`,Cp=`#define TOON
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
}`,Lp=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Dp=`uniform vec3 color;
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
}`,Ip=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:ad,alphatest_fragment:od,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:hd,batching_pars_vertex:dd,batching_vertex:ud,begin_vertex:pd,beginnormal_vertex:fd,bsdfs:gd,iridescence_fragment:md,bumpmap_pars_fragment:_d,clipping_planes_fragment:vd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:bd,color_fragment:Md,color_pars_fragment:yd,color_pars_vertex:wd,color_vertex:Ed,common:Td,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Rd,emissivemap_fragment:Pd,emissivemap_pars_fragment:kd,colorspace_fragment:Dd,colorspace_pars_fragment:Id,envmap_fragment:Ud,envmap_common_pars_fragment:Od,envmap_pars_fragment:Nd,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Jd,envmap_vertex:Fd,fog_vertex:zd,fog_pars_vertex:Hd,fog_fragment:Gd,fog_pars_fragment:Vd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Yd,lights_pars_begin:qd,lights_toon_fragment:jd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Qd,lights_physical_fragment:tu,lights_physical_pars_fragment:eu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:su,logdepthbuf_fragment:ru,logdepthbuf_pars_fragment:au,logdepthbuf_pars_vertex:ou,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:hu,map_particle_fragment:du,map_particle_pars_fragment:uu,metalnessmap_fragment:pu,metalnessmap_pars_fragment:fu,morphinstance_vertex:gu,morphcolor_vertex:mu,morphnormal_vertex:_u,morphtarget_pars_vertex:vu,morphtarget_vertex:xu,normal_fragment_begin:Su,normal_fragment_maps:bu,normal_pars_fragment:Mu,normal_pars_vertex:yu,normal_vertex:wu,normalmap_pars_fragment:Eu,clearcoat_normal_fragment_begin:Tu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Lu,opaque_fragment:Ru,packing:Pu,premultiplied_alpha_fragment:ku,project_vertex:Du,dithering_fragment:Iu,dithering_pars_fragment:Uu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:Nu,shadowmap_pars_fragment:Bu,shadowmap_pars_vertex:Fu,shadowmap_vertex:zu,shadowmask_pars_fragment:Hu,skinbase_vertex:Gu,skinning_pars_vertex:Vu,skinning_vertex:Wu,skinnormal_vertex:Xu,specularmap_fragment:$u,specularmap_pars_fragment:Yu,tonemapping_fragment:qu,tonemapping_pars_fragment:Ju,transmission_fragment:ju,transmission_pars_fragment:Zu,uv_pars_fragment:Ku,uv_pars_vertex:Qu,uv_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:ap,cube_frag:op,depth_vert:lp,depth_frag:cp,distanceRGBA_vert:hp,distanceRGBA_frag:dp,equirect_vert:up,equirect_frag:pp,linedashed_vert:fp,linedashed_frag:gp,meshbasic_vert:mp,meshbasic_frag:_p,meshlambert_vert:vp,meshlambert_frag:xp,meshmatcap_vert:Sp,meshmatcap_frag:bp,meshnormal_vert:Mp,meshnormal_frag:yp,meshphong_vert:wp,meshphong_frag:Ep,meshphysical_vert:Tp,meshphysical_frag:Ap,meshtoon_vert:Cp,meshtoon_frag:Lp,points_vert:Rp,points_frag:Pp,shadow_vert:kp,shadow_frag:Dp,sprite_vert:Ip,sprite_frag:Up},rt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},cn={basic:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ke([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ke([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ke([rt.points,rt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ke([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ke([rt.common,rt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ke([rt.sprite,rt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ke([rt.common,rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ke([rt.lights,rt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};cn.physical={uniforms:ke([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const ks={r:0,b:0,g:0},Wn=new un,Op=new jt;function Np(i,t,e,n,s,r,a){const l=new Et(0);let c=r===!0?0:1,h,d,u=null,f=0,m=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function v(E){let y=!1;const w=_(E);w===null?p(l,c):w&&w.isColor&&(p(w,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,y){const w=_(y);w&&(w.isCubeTexture||w.mapping===ir)?(d===void 0&&(d=new qt(new Le(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Ii(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Wn.copy(y.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(Wn)),d.material.toneMapped=Yt.getTransfer(w.colorSpace)!==ie,(u!==w||f!==w.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new qt(new ds(2,2),new Tn({name:"BackgroundMaterial",uniforms:Ii(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(w.colorSpace)!==ie,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function p(E,y){E.getRGB(ks,xc(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,y,a)}return{getClearColor:function(){return l},setClearColor:function(E,y=1){l.set(E),c=y,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(l,c)},render:v,addToRenderList:g}}function Bp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function l(S,C,G,N,$){let j=!1;const Y=u(N,G,C);r!==Y&&(r=Y,h(r.object)),j=m(S,N,G,$),j&&_(S,N,G,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,w(S,C,G,N),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function u(S,C,G){const N=G.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let j=$[C.id];j===void 0&&(j={},$[C.id]=j);let Y=j[N];return Y===void 0&&(Y=f(c()),j[N]=Y),Y}function f(S){const C=[],G=[],N=[];for(let $=0;$<e;$++)C[$]=0,G[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:N,object:S,attributes:{},index:null}}function m(S,C,G,N){const $=r.attributes,j=C.attributes;let Y=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){const pt=$[V];let wt=j[V];if(wt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),pt===void 0||pt.attribute!==wt||wt&&pt.data!==wt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function _(S,C,G,N){const $={},j=C.attributes;let Y=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){let pt=j[V];pt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));const wt={};wt.attribute=pt,pt&&pt.data&&(wt.data=pt.data),$[V]=wt,Y++}r.attributes=$,r.attributesNum=Y,r.index=N}function v(){const S=r.newAttributes;for(let C=0,G=S.length;C<G;C++)S[C]=0}function g(S){p(S,0)}function p(S,C){const G=r.newAttributes,N=r.enabledAttributes,$=r.attributeDivisors;G[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),$[S]!==C&&(i.vertexAttribDivisor(S,C),$[S]=C)}function E(){const S=r.newAttributes,C=r.enabledAttributes;for(let G=0,N=C.length;G<N;G++)C[G]!==S[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function y(S,C,G,N,$,j,Y){Y===!0?i.vertexAttribIPointer(S,C,G,$,j):i.vertexAttribPointer(S,C,G,N,$,j)}function w(S,C,G,N){v();const $=N.attributes,j=G.getAttributes(),Y=C.defaultAttributeValues;for(const Q in j){const V=j[Q];if(V.location>=0){let at=$[Q];if(at===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const pt=at.normalized,wt=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const re=Bt.buffer,J=Bt.type,it=Bt.bytesPerElement,St=J===i.INT||J===i.UNSIGNED_INT||at.gpuType===qa;if(at.isInterleavedBufferAttribute){const lt=at.data,Lt=lt.stride,kt=at.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft,lt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)g(V.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Ft=0;Ft<V.locationSize;Ft++)y(V.location+Ft,wt/V.locationSize,J,pt,Lt*it,(kt+wt/V.locationSize*Ft)*it,St)}else{if(at.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,at.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let lt=0;lt<V.locationSize;lt++)g(V.location+lt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let lt=0;lt<V.locationSize;lt++)y(V.location+lt,wt/V.locationSize,J,pt,wt*it,wt/V.locationSize*lt*it,St)}}else if(Y!==void 0){const pt=Y[Q];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(V.location,pt);break;case 3:i.vertexAttrib3fv(V.location,pt);break;case 4:i.vertexAttrib4fv(V.location,pt);break;default:i.vertexAttrib1fv(V.location,pt)}}}}E()}function P(){k();for(const S in n){const C=n[S];for(const G in C){const N=C[G];for(const $ in N)d(N[$].object),delete N[$];delete C[G]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const G in C){const N=C[G];for(const $ in N)d(N[$].object),delete N[$];delete C[G]}delete n[S.id]}function A(S){for(const C in n){const G=n[C];if(G[S.id]===void 0)continue;const N=G[S.id];for(const $ in N)d(N[$].object),delete N[$];delete G[S.id]}}function k(){M(),a=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:k,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function Fp(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,u){u!==0&&(i.drawArraysInstanced(n,h,d,u),e.update(d,n,u))}function l(h,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_];e.update(m,n,1)}function c(h,d,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h.length;_++)a(h[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,d,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=d[v]*f[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const k=A===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==En&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==dn&&!k)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=c(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:P,maxSamples:L}}function Hp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Yn,l=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!g)r?d(null):h();else{const E=r?0:n,y=E*4;let w=p.clippingState||null;c.value=w,w=d(_,f,y,m);for(let P=0;P!==y;++P)w[P]=e[P];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,f,m,_){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const p=m+v*4,E=f.matrixWorldInverse;l.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,w=m;y!==v;++y,w+=4)a.copy(u[y]).applyMatrix4(E,l),a.normal.toArray(g,w),g[w+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Gp(i){let t=new WeakMap;function e(a,l){return l===da?a.mapping=Ri:l===ua&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===da||l===ua)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Qh(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class so extends bc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bi=4,Yo=[.125,.215,.35,.446,.526,.582],jn=20,Dr=new so,qo=new Et;let Ir=null,Ur=0,Or=0,Nr=!1;const qn=(1+Math.sqrt(5))/2,_i=1/qn,Jo=[new O(-qn,_i,0),new O(qn,_i,0),new O(-_i,0,qn),new O(_i,0,qn),new O(0,qn,-_i),new O(0,qn,_i),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Ur,Or),this._renderer.xr.enabled=Nr,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ls,format:rn,colorSpace:Ui,depthBuffer:!1},s=Zo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(r)),this._blurMaterial=Wp(r,t,e)}return s}_compileMaterial(t){const e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,s){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(qo),d.toneMapping=Nn,d.autoClear=!1;const m=new pe({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new qt(new Le,m);let v=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,v=!0):(m.color.copy(qo),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(l.up.set(0,c[p],0),l.lookAt(h[p],0,0)):E===1?(l.up.set(0,0,c[p]),l.lookAt(0,h[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,h[p]));const y=this._cubeSize;Ds(s,E*y,p>2?y:0,y,y),d.setRenderTarget(s),v&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ri||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=t;const c=this._cubeSize;Ds(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Jo[(s-r-1)%Jo.length];this._blur(t,r-1,r,a,l)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new qt(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),v=r/_,g=isFinite(r)?1+Math.floor(d*v):jn;g>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${jn}`);const p=[];let E=0;for(let A=0;A<jn;++A){const k=A/v,M=Math.exp(-k*k/2);p.push(M),A===0?E+=M:A<g&&(E+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const w=this._sizeLods[s],P=3*w*(s>y-bi?s-y+bi:0),L=4*(this._cubeSize-w);Ds(e,P,L,3*w,2*w),c.setRenderTarget(e),c.render(u,Dr)}}function Vp(i){const t=[],e=[],n=[];let s=i;const r=i-bi+1+Yo.length;for(let a=0;a<r;a++){const l=Math.pow(2,s);e.push(l);let c=1/l;a>i-bi?c=Yo[a-i+bi-1]:a===0&&(c=0),n.push(c);const h=1/(l-2),d=-h,u=1+h,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,_=6,v=3,g=2,p=1,E=new Float32Array(v*_*m),y=new Float32Array(g*_*m),w=new Float32Array(p*_*m);for(let L=0;L<m;L++){const A=L%3*2/3-1,k=L>2?0:-1,M=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];E.set(M,v*_*L),y.set(f,g*_*L);const S=[L,L,L,L,L,L];w.set(S,p*_*L)}const P=new Je;P.setAttribute("position",new Ee(E,v)),P.setAttribute("uv",new Ee(y,g)),P.setAttribute("faceIndex",new Ee(w,p)),t.push(P),s>bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zo(i,t,e){const n=new ei(i,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wp(i,t,e){const n=new Float32Array(jn),s=new O(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ro(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ko(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Qo(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ro(){return`

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
	`}function Xp(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const c=l.mapping,h=c===da||c===ua,d=c===Ri||c===Pi;if(h||d){let u=t.get(l);const f=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new jo(i)),u=h?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const m=l.image;return h&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new jo(i)),u=h?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",r),u.texture):null}}}return l}function s(l){let c=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&c++;return c===h}function r(l){const c=l.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $p(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yp(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let g=0,p=v.length;g<p;g++)t.update(v[g],i.ARRAY_BUFFER)}}function h(u){const f=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let y=0,w=E.length;y<w;y+=3){const P=E[y+0],L=E[y+1],A=E[y+2];f.push(P,L,L,A,A,P)}}else if(_!==void 0){const E=_.array;v=_.version;for(let y=0,w=E.length/3-1;y<w;y+=3){const P=y+0,L=y+1,A=y+2;f.push(P,L,L,A,A,P)}}else return;const g=new(pc(f)?vc:_c)(f,1);g.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function d(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&h(u)}else h(u);return r.get(u)}return{get:l,update:c,getWireframeAttribute:d}}function qp(i,t,e){let n;function s(f){n=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function h(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),e.update(m,n,_))}function d(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];e.update(g,n,1)}function u(f,m,_,v){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)h(f[p]/a,m[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,_);let p=0;for(let E=0;E<_;E++)p+=m[E]*v[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Jp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jp(i,t,e){const n=new WeakMap,s=new ge;function r(a,l,c){const h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(l);if(f===void 0||f.count!==u){let S=function(){k.dispose(),n.delete(l),l.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const _=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let w=0;_===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let P=l.attributes.position.count*w,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*L*4*u),k=new gc(A,P,L,u);k.type=dn,k.needsUpdate=!0;const M=w*4;for(let C=0;C<u;C++){const G=p[C],N=E[C],$=y[C],j=P*L*4*C;for(let Y=0;Y<G.count;Y++){const Q=Y*M;_===!0&&(s.fromBufferAttribute(G,Y),A[j+Q+0]=s.x,A[j+Q+1]=s.y,A[j+Q+2]=s.z,A[j+Q+3]=0),v===!0&&(s.fromBufferAttribute(N,Y),A[j+Q+4]=s.x,A[j+Q+5]=s.y,A[j+Q+6]=s.z,A[j+Q+7]=0),g===!0&&(s.fromBufferAttribute($,Y),A[j+Q+8]=s.x,A[j+Q+9]=s.y,A[j+Q+10]=s.z,A[j+Q+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:k,size:new Zt(P,L)},n.set(l,f),l.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let g=0;g<h.length;g++)_+=h[g];const v=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zp(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class wc extends Re{constructor(t,e,n,s,r,a,l,c,h,d=Ti){if(d!==Ti&&d!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ti&&(n=ti),n===void 0&&d===Di&&(n=ki),super(null,s,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:ee,this.minFilter=c!==void 0?c:ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ec=new Re,tl=new wc(1,1),Tc=new gc,Ac=new Bh,Cc=new Mc,el=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function Bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=el[s];if(r===void 0&&(r=new Float32Array(s),el[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function nf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;rl.set(n),i.uniformMatrix2fv(this.addr,!1,rl),be(e,n)}}function sf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),be(e,n)}}function rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),be(e,n)}}function af(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function hf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function ff(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=uc,r=tl):r=Ec,e.setTexture2D(t||r,s)}function gf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ac,s)}function mf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cc,s)}function _f(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tc,s)}function vf(i){switch(i){case 5126:return Kp;case 35664:return Qp;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return df;case 36295:return uf;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(i,t){i.uniform1fv(this.addr,t)}function Sf(i,t){const e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function bf(i,t){const e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function Mf(i,t){const e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function yf(i,t){const e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wf(i,t){const e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ef(i,t){const e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tf(i,t){i.uniform1iv(this.addr,t)}function Af(i,t){i.uniform2iv(this.addr,t)}function Cf(i,t){i.uniform3iv(this.addr,t)}function Lf(i,t){i.uniform4iv(this.addr,t)}function Rf(i,t){i.uniform1uiv(this.addr,t)}function Pf(i,t){i.uniform2uiv(this.addr,t)}function kf(i,t){i.uniform3uiv(this.addr,t)}function Df(i,t){i.uniform4uiv(this.addr,t)}function If(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ec,r[a])}function Uf(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ac,r[a])}function Of(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cc,r[a])}function Nf(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tc,r[a])}function Bf(i){switch(i){case 5126:return xf;case 35664:return Sf;case 35665:return bf;case 35666:return Mf;case 35674:return yf;case 35675:return wf;case 35676:return Ef;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Lf;case 5125:return Rf;case 36294:return Pf;case 36295:return kf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Nf}}class Ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vf(e.type)}}class zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}}class Hf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(t,e[l.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function al(i,t){i.seq.push(t),i.map[t.id]=t}function Gf(i,t,e){const n=i.name,s=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),a=Br.lastIndex;let l=r[1];const c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){al(e,h===void 0?new Ff(l,i,t):new zf(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new Hf(l),al(e,u)),e=u}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Gf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ol(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vf=37297;let Wf=0;function Xf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const ll=new Ut;function $f(i){Yt._getMatrix(ll,Yt.workingColorSpace,i);const t=`mat3( ${ll.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case sr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Xf(i.getShaderSource(t),a)}else return s}function Yf(i,t){const e=$f(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qf(i,t){let e;switch(t){case dh:e="Linear";break;case uh:e="Reinhard";break;case ph:e="Cineon";break;case fh:e="ACESFilmic";break;case mh:e="AgX";break;case _h:e="Neutral";break;case gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new O;function Jf(){Yt.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function Zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function es(i){return i!==""}function hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(Qf,eg)}const tg=new Map;function eg(i,t){let e=Nt[t];if(e===void 0){const n=tg.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(ng,ig)}function ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function rg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Pi:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function og(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case ch:t="ENVMAP_BLENDING_MIX";break;case hh:t="ENVMAP_BLENDING_ADD";break}return t}function lg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,l=e.fragmentShader;const c=sg(e),h=rg(e),d=ag(e),u=og(e),f=lg(e),m=jf(e),_=Zf(r),v=s.createProgram();let g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(es).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(es).join(`
`),p.length>0&&(p+=`
`)):(g=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Yf("linearToOutputTexel",e.outputColorSpace),Jf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=Ha(a),a=hl(a,e),a=dl(a,e),l=Ha(l),l=hl(l,e),l=dl(l,e),a=ul(a),l=ul(l),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+g+a,w=E+p+l,P=ol(s,s.VERTEX_SHADER,y),L=ol(s,s.FRAGMENT_SHADER,w);s.attachShader(v,P),s.attachShader(v,L),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(P).trim(),$=s.getShaderInfoLog(L).trim();let j=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,L);else{const Q=cl(s,P,"vertex"),V=cl(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+Q+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(N===""||$==="")&&(Y=!1);Y&&(C.diagnostics={runnable:j,programLog:G,vertexShader:{log:N,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(P),s.deleteShader(L),k=new Js(s,v),M=Kf(s,v)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Vf)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=L,this}let hg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ug(t),e.set(t,n)),n}}class ug{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}}function pg(i,t,e,n,s,r,a){const l=new no,c=new dg,h=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function g(M,S,C,G,N){const $=G.fog,j=N.geometry,Y=M.isMeshStandardMaterial?G.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),V=Q&&Q.mapping===ir?Q.image.height:null,at=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=pt!==void 0?pt.length:0;let Bt=0;j.morphAttributes.position!==void 0&&(Bt=1),j.morphAttributes.normal!==void 0&&(Bt=2),j.morphAttributes.color!==void 0&&(Bt=3);let re,J,it,St;if(at){const te=cn[at];re=te.vertexShader,J=te.fragmentShader}else re=M.vertexShader,J=M.fragmentShader,c.update(M),it=c.getVertexShaderID(M),St=c.getFragmentShaderID(M);const lt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),kt=N.isInstancedMesh===!0,Ft=N.isBatchedMesh===!0,de=!!M.map,Xt=!!M.matcap,me=!!Q,U=!!M.aoMap,Ve=!!M.lightMap,Gt=!!M.bumpMap,Vt=!!M.normalMap,At=!!M.displacementMap,le=!!M.emissiveMap,Tt=!!M.metalnessMap,T=!!M.roughnessMap,x=M.anisotropy>0,B=M.clearcoat>0,Z=M.dispersion>0,tt=M.iridescence>0,q=M.sheen>0,bt=M.transmission>0,ct=x&&!!M.anisotropyMap,ft=B&&!!M.clearcoatMap,$t=B&&!!M.clearcoatNormalMap,et=B&&!!M.clearcoatRoughnessMap,gt=tt&&!!M.iridescenceMap,Ct=tt&&!!M.iridescenceThicknessMap,Rt=q&&!!M.sheenColorMap,mt=q&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,Ot=!!M.specularColorMap,ae=!!M.specularIntensityMap,R=bt&&!!M.transmissionMap,ot=bt&&!!M.thicknessMap,X=!!M.gradientMap,K=!!M.alphaMap,ut=M.alphaTest>0,ht=!!M.alphaHash,Dt=!!M.extensions;let ue=Nn;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Te={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:J,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:St,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&N._colorsTexture!==null,instancing:kt,instancingColor:kt&&N.instanceColor!==null,instancingMorph:kt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ui,alphaToCoverage:!!M.alphaToCoverage,map:de,matcap:Xt,envMap:me,envMapMode:me&&Q.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Ve,bumpMap:Gt,normalMap:Vt,displacementMap:f&&At,emissiveMap:le,normalMapObjectSpace:Vt&&M.normalMapType===bh,normalMapTangentSpace:Vt&&M.normalMapType===dc,metalnessMap:Tt,roughnessMap:T,anisotropy:x,anisotropyMap:ct,clearcoat:B,clearcoatMap:ft,clearcoatNormalMap:$t,clearcoatRoughnessMap:et,dispersion:Z,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:ae,transmission:bt,transmissionMap:R,thicknessMap:ot,gradientMap:X,opaque:M.transparent===!1&&M.blending===Ei&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ht,combine:M.combine,mapUv:de&&v(M.map.channel),aoMapUv:U&&v(M.aoMap.channel),lightMapUv:Ve&&v(M.lightMap.channel),bumpMapUv:Gt&&v(M.bumpMap.channel),normalMapUv:Vt&&v(M.normalMap.channel),displacementMapUv:At&&v(M.displacementMap.channel),emissiveMapUv:le&&v(M.emissiveMap.channel),metalnessMapUv:Tt&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:ct&&v(M.anisotropyMap.channel),clearcoatMapUv:ft&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:$t&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(M.sheenRoughnessMap.channel),specularMapUv:Wt&&v(M.specularMap.channel),specularColorMapUv:Ot&&v(M.specularColorMap.channel),specularIntensityMapUv:ae&&v(M.specularIntensityMap.channel),transmissionMapUv:R&&v(M.transmissionMap.channel),thicknessMapUv:ot&&v(M.thicknessMap.channel),alphaMapUv:K&&v(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Vt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(de||K),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:le&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===we,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Dt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Te.vertexUv1s=h.has(1),Te.vertexUv2s=h.has(2),Te.vertexUv3s=h.has(3),h.clear(),Te}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(E(S,M),y(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),M.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reverseDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.decodeVideoTextureEmissive&&l.enable(20),S.alphaToCoverage&&l.enable(21),M.push(l.mask)}function w(M){const S=_[M.type];let C;if(S){const G=cn[S];C=Sc.clone(G.uniforms)}else C=M.uniforms;return C}function P(M,S){let C;for(let G=0,N=d.length;G<N;G++){const $=d[G];if($.cacheKey===S){C=$,++C.usedTimes;break}}return C===void 0&&(C=new cg(i,S,M,r),d.push(C)),C}function L(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function A(M){c.remove(M)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:P,releaseProgram:L,releaseShaderCache:A,programs:d,dispose:k}}function fg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,m,_,v,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function l(u,f,m,_,v,g){const p=a(u,f,m,_,v,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(u,f,m,_,v,g){const p=a(u,f,m,_,v,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||gg),n.length>1&&n.sort(f||fl),s.length>1&&s.sort(f||fl)}function d(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function mg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new gl,i.set(n,[a])):s>=r.length?(a=new gl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _g(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Et};break;case"SpotLight":e={position:new O,direction:new O,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bg(i){const t=new _g,e=vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);const s=new O,r=new jt,a=new jt;function l(h){let d=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,E=0,y=0,w=0,P=0,L=0,A=0;h.sort(Sg);for(let M=0,S=h.length;M<S;M++){const C=h[M],G=C.color,N=C.intensity,$=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=G.r*N,u+=G.g*N,f+=G.b*N;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],N);A++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=Y,m++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(G).multiplyScalar(N),Y.distance=$,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[v]=Y;const Q=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,Q.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[v]=Q.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=j,w++}v++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(G).multiplyScalar(N),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=Y,g++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=C.shadow.matrix,y++}n.point[_]=Y,_++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(N),Y.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const k=n.hash;(k.directionalLength!==m||k.pointLength!==_||k.spotLength!==v||k.rectAreaLength!==g||k.hemiLength!==p||k.numDirectionalShadows!==E||k.numPointShadows!==y||k.numSpotShadows!==w||k.numSpotMaps!==P||k.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+P-L,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=A,k.directionalLength=m,k.pointLength=_,k.spotLength=v,k.rectAreaLength=g,k.hemiLength=p,k.numDirectionalShadows=E,k.numPointShadows=y,k.numSpotShadows=w,k.numSpotMaps=P,k.numLightProbes=A,n.version=xg++)}function c(h,d){let u=0,f=0,m=0,_=0,v=0;const g=d.matrixWorldInverse;for(let p=0,E=h.length;p<E;p++){const y=h[p];if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),u++}else if(y.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:l,setupView:c,state:n}}function ml(i){const t=new bg(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function l(){t.setup(e)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Mg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new ml(i),t.set(s,[l])):r>=a.length?(l=new ml(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class yg extends Ye{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends Ye{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Ag(i,t,e){let n=new io;const s=new Zt,r=new Zt,a=new ge,l=new yg({depthPacking:Sh}),c=new wg,h={},d=e.maxTextureSize,u={[wn]:Be,[Be]:wn,[we]:we},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Je;_.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let p=this.type;this.render=function(L,A,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(On),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=p!==Sn&&this.type===Sn,$=p===Sn&&this.type!==Sn;for(let j=0,Y=L.length;j<Y;j++){const Q=L[j],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const at=V.getFrameExtents();if(s.multiply(at),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/at.y),s.y=r.y*at.y,V.mapSize.y=r.y)),V.map===null||N===!0||$===!0){const wt=this.type!==Sn?{minFilter:ee,magFilter:ee}:{};V.map!==null&&V.map.dispose(),V.map=new ei(s.x,s.y,wt),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const pt=V.getViewportCount();for(let wt=0;wt<pt;wt++){const Bt=V.getViewport(wt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),G.viewport(a),V.updateMatrices(Q,wt),n=V.getFrustum(),w(A,k,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Sn&&E(V,k),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,C)};function E(L,A){const k=t.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(A,null,k,f,v,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(A,null,k,m,v,null)}function y(L,A,k,M){let S=null;const C=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)S=C;else if(S=k.isPointLight===!0?c:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=S.uuid,N=A.uuid;let $=h[G];$===void 0&&($={},h[G]=$);let j=$[N];j===void 0&&(j=S.clone(),$[N]=j,A.addEventListener("dispose",P)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Sn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=i.properties.get(S);G.light=k}return S}function w(L,A,k,M,S){if(L.visible===!1)return;if(L.layers.test(A.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Sn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const N=t.update(L),$=L.material;if(Array.isArray($)){const j=N.groups;for(let Y=0,Q=j.length;Y<Q;Y++){const V=j[Y],at=$[V.materialIndex];if(at&&at.visible){const pt=y(L,at,M,S);L.onBeforeShadow(i,L,A,k,N,pt,V),i.renderBufferDirect(k,null,N,pt,L,V),L.onAfterShadow(i,L,A,k,N,pt,V)}}}else if($.visible){const j=y(L,$,M,S);L.onBeforeShadow(i,L,A,k,N,j,null),i.renderBufferDirect(k,null,N,j,L,null),L.onAfterShadow(i,L,A,k,N,j,null)}}const G=L.children;for(let N=0,$=G.length;N<$;N++)w(G[N],A,k,M,S)}function P(L){L.target.removeEventListener("dispose",P);for(const k in h){const M=h[k],S=L.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Cg={[sa]:ra,[aa]:ca,[oa]:ha,[Li]:la,[ra]:sa,[ca]:aa,[ha]:oa,[la]:Li};function Lg(i,t){function e(){let R=!1;const ot=new ge;let X=null;const K=new ge(0,0,0,0);return{setMask:function(ut){X!==ut&&!R&&(i.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){R=ut},setClear:function(ut,ht,Dt,ue,Te){Te===!0&&(ut*=ue,ht*=ue,Dt*=ue),ot.set(ut,ht,Dt,ue),K.equals(ot)===!1&&(i.clearColor(ut,ht,Dt,ue),K.copy(ot))},reset:function(){R=!1,X=null,K.set(-1,0,0,0)}}}function n(){let R=!1,ot=!1,X=null,K=null,ut=null;return{setReversed:function(ht){if(ot!==ht){const Dt=t.get("EXT_clip_control");ot?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ut;ut=null,this.setClear(ue)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?lt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(ht){X!==ht&&!R&&(i.depthMask(ht),X=ht)},setFunc:function(ht){if(ot&&(ht=Cg[ht]),K!==ht){switch(ht){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ht}},setLocked:function(ht){R=ht},setClear:function(ht){ut!==ht&&(ot&&(ht=1-ht),i.clearDepth(ht),ut=ht)},reset:function(){R=!1,X=null,K=null,ut=null,ot=!1}}}function s(){let R=!1,ot=null,X=null,K=null,ut=null,ht=null,Dt=null,ue=null,Te=null;return{setTest:function(te){R||(te?lt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(te){ot!==te&&!R&&(i.stencilMask(te),ot=te)},setFunc:function(te,je,pn){(X!==te||K!==je||ut!==pn)&&(i.stencilFunc(te,je,pn),X=te,K=je,ut=pn)},setOp:function(te,je,pn){(ht!==te||Dt!==je||ue!==pn)&&(i.stencilOp(te,je,pn),ht=te,Dt=je,ue=pn)},setLocked:function(te){R=te},setClear:function(te){Te!==te&&(i.clearStencil(te),Te=te)},reset:function(){R=!1,ot=null,X=null,K=null,ut=null,ht=null,Dt=null,ue=null,Te=null}}}const r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap;let d={},u={},f=new WeakMap,m=[],_=null,v=!1,g=null,p=null,E=null,y=null,w=null,P=null,L=null,A=new Et(0,0,0),k=0,M=!1,S=null,C=null,G=null,N=null,$=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=Q>=2);let at=null,pt={};const wt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),re=new ge().fromArray(wt),J=new ge().fromArray(Bt);function it(R,ot,X,K){const ut=new Uint8Array(4),ht=i.createTexture();i.bindTexture(R,ht),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<X;Dt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ot+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ht}const St={};St[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Li),Gt(!1),Vt(So),lt(i.CULL_FACE),U(On);function lt(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function Lt(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function kt(R,ot){return u[R]!==ot?(i.bindFramebuffer(R,ot),u[R]=ot,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Ft(R,ot){let X=m,K=!1;if(R){X=f.get(ot),X===void 0&&(X=[],f.set(ot,X));const ut=R.textures;if(X.length!==ut.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Dt=ut.length;ht<Dt;ht++)X[ht]=i.COLOR_ATTACHMENT0+ht;X.length=ut.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function de(R){return _!==R?(i.useProgram(R),_=R,!0):!1}const Xt={[Jn]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};Xt[qc]=i.MIN,Xt[Jc]=i.MAX;const me={[jc]:i.ZERO,[Zc]:i.ONE,[Kc]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[nh]:i.DST_COLOR,[th]:i.DST_ALPHA,[Qc]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[ih]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[lh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(R,ot,X,K,ut,ht,Dt,ue,Te,te){if(R===On){v===!0&&(Lt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),R!==Xc){if(R!==g||te!==M){if((p!==Jn||w!==Jn)&&(i.blendEquation(i.FUNC_ADD),p=Jn,w=Jn),te)switch(R){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,y=null,P=null,L=null,A.set(0,0,0),k=0,g=R,M=te}return}ut=ut||ot,ht=ht||X,Dt=Dt||K,(ot!==p||ut!==w)&&(i.blendEquationSeparate(Xt[ot],Xt[ut]),p=ot,w=ut),(X!==E||K!==y||ht!==P||Dt!==L)&&(i.blendFuncSeparate(me[X],me[K],me[ht],me[Dt]),E=X,y=K,P=ht,L=Dt),(ue.equals(A)===!1||Te!==k)&&(i.blendColor(ue.r,ue.g,ue.b,Te),A.copy(ue),k=Te),g=R,M=!1}function Ve(R,ot){R.side===we?Lt(i.CULL_FACE):lt(i.CULL_FACE);let X=R.side===Be;ot&&(X=!X),Gt(X),R.blending===Ei&&R.transparent===!1?U(On):U(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const K=R.stencilWrite;l.setTest(K),K&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),le(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(R){S!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),S=R)}function Vt(R){R!==Vc?(lt(i.CULL_FACE),R!==C&&(R===So?i.cullFace(i.BACK):R===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),C=R}function At(R){R!==G&&(Y&&i.lineWidth(R),G=R)}function le(R,ot,X){R?(lt(i.POLYGON_OFFSET_FILL),(N!==ot||$!==X)&&(i.polygonOffset(ot,X),N=ot,$=X)):Lt(i.POLYGON_OFFSET_FILL)}function Tt(R){R?lt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function T(R){R===void 0&&(R=i.TEXTURE0+j-1),at!==R&&(i.activeTexture(R),at=R)}function x(R,ot,X){X===void 0&&(at===null?X=i.TEXTURE0+j-1:X=at);let K=pt[X];K===void 0&&(K={type:void 0,texture:void 0},pt[X]=K),(K.type!==R||K.texture!==ot)&&(at!==X&&(i.activeTexture(X),at=X),i.bindTexture(R,ot||St[R]),K.type=R,K.texture=ot)}function B(){const R=pt[at];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Rt(R){re.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),re.copy(R))}function mt(R){J.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),J.copy(R))}function Wt(R,ot){let X=h.get(ot);X===void 0&&(X=new WeakMap,h.set(ot,X));let K=X.get(R);K===void 0&&(K=i.getUniformBlockIndex(ot,R.name),X.set(R,K))}function Ot(R,ot){const K=h.get(ot).get(R);c.get(ot)!==K&&(i.uniformBlockBinding(ot,K,R.__bindingPointIndex),c.set(ot,K))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},at=null,pt={},u={},f=new WeakMap,m=[],_=null,v=!1,g=null,p=null,E=null,y=null,w=null,P=null,L=null,A=new Et(0,0,0),k=0,M=!1,S=null,C=null,G=null,N=null,$=null,re.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:lt,disable:Lt,bindFramebuffer:kt,drawBuffers:Ft,useProgram:de,setBlending:U,setMaterial:Ve,setFlipSided:Gt,setCullFace:Vt,setLineWidth:At,setPolygonOffset:le,setScissorTest:Tt,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:$t,texStorage3D:et,texSubImage2D:q,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:ae}}function _l(i,t,e,n){const s=Rg(n);switch(e){case rc:return i*t;case oc:return i*t;case lc:return i*t*2;case Za:return i*t/s.components*s.byteLength;case Ka:return i*t/s.components*s.byteLength;case cc:return i*t*2/s.components*s.byteLength;case Qa:return i*t*2/s.components*s.byteLength;case ac:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case to:return i*t*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case _a:return Math.max(i,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(t,8)/2;case va:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qs:case Ua:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hc:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(i){switch(i){case En:case nc:return{byteLength:1,components:1};case as:case ic:case ls:return{byteLength:2,components:1};case Ja:case ja:return{byteLength:2,components:4};case ti:case qa:case dn:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Pg(i,t,e,n,s,r,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Zt,d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return m?new OffscreenCanvas(T,x):os("canvas")}function v(T,x,B){let Z=1;const tt=Tt(T);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Z*tt.width),bt=Math.floor(Z*tt.height);u===void 0&&(u=_(q,bt));const ct=x?_(q,bt):u;return ct.width=q,ct.height=bt,ct.getContext("2d").drawImage(T,0,0,q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+q+"x"+bt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,x,B,Z,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const bt=tt?sr:Yt.getTransfer(Z);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=bt===ie?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function w(T,x){let B;return T?x===null||x===ti||x===ki?B=i.DEPTH24_STENCIL8:x===dn?B=i.DEPTH32F_STENCIL8:x===as&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ti||x===ki?B=i.DEPTH_COMPONENT24:x===dn?B=i.DEPTH_COMPONENT32F:x===as&&(B=i.DEPTH_COMPONENT16),B}function P(T,x){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==ee&&T.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){const x=T.target;x.removeEventListener("dispose",L),k(x),x.isVideoTexture&&d.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),S(x)}function k(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,Z=f.get(B);if(Z){const tt=Z[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(T),Object.keys(Z).length===0&&f.delete(B)}n.remove(T)}function M(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,Z=f.get(B);delete Z[x.__cacheKey],a.memory.textures--}function S(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let tt=0;tt<x.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,tt=B.length;Z<tt;Z++){const q=n.get(B[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(T)}let C=0;function G(){C=0}function N(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function $(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function j(T,x){const B=n.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,T,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Y(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){J(B,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Q(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){J(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function V(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){it(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const at={[rs]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},pt={[ee]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},wt={[Mh]:i.NEVER,[Ch]:i.ALWAYS,[yh]:i.LESS,[uc]:i.LEQUAL,[wh]:i.EQUAL,[Ah]:i.GEQUAL,[Eh]:i.GREATER,[Th]:i.NOTEQUAL};function Bt(T,x){if(x.type===dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===hr||x.magFilter===fs||x.magFilter===Qn||x.minFilter===hn||x.minFilter===hr||x.minFilter===fs||x.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,at[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,at[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,at[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ee||x.minFilter!==fs&&x.minFilter!==Qn||x.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L));const Z=x.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const q=$(x);if(q!==T.__cacheKey){tt[q]===void 0&&(tt[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[q].usedTimes++;const bt=tt[T.__cacheKey];bt!==void 0&&(tt[T.__cacheKey].usedTimes--,bt.usedTimes===0&&M(x)),T.__cacheKey=q,T.__webglTexture=tt[q].texture}return B}function J(T,x,B){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=re(T,x),q=x.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+B);const bt=n.get(q);if(q.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ct=Yt.getPrimaries(Yt.workingColorSpace),ft=x.colorSpace===Un?null:Yt.getPrimaries(x.colorSpace),$t=x.colorSpace===Un||ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let et=v(x.image,!1,s.maxTextureSize);et=le(x,et);const gt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type);let Rt=y(x.internalFormat,gt,Ct,x.colorSpace,x.isVideoTexture);Bt(Z,x);let mt;const Wt=x.mipmaps,Ot=x.isVideoTexture!==!0,ae=bt.__version===void 0||tt===!0,R=q.dataReady,ot=P(x,et);if(x.isDepthTexture)Rt=w(x.format===Di,x.type),ae&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,gt,Ct,null));else if(x.isDataTexture)if(Wt.length>0){Ot&&ae&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Wt[0].width,Wt[0].height);for(let X=0,K=Wt.length;X<K;X++)mt=Wt[X],Ot?R&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,gt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,X,Rt,mt.width,mt.height,0,gt,Ct,mt.data);x.generateMipmaps=!1}else Ot?(ae&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,et.width,et.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,gt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,gt,Ct,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,Wt[0].width,Wt[0].height,et.depth);for(let X=0,K=Wt.length;X<K;X++)if(mt=Wt[X],x.format!==rn)if(gt!==null)if(Ot){if(R)if(x.layerUpdates.size>0){const ut=_l(mt.width,mt.height,x.format,x.type);for(const ht of x.layerUpdates){const Dt=mt.data.subarray(ht*ut/mt.data.BYTES_PER_ELEMENT,(ht+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ht,mt.width,mt.height,1,gt,Dt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,et.depth,gt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Rt,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,et.depth,gt,Ct,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Rt,mt.width,mt.height,et.depth,0,gt,Ct,mt.data)}else{Ot&&ae&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Wt[0].width,Wt[0].height);for(let X=0,K=Wt.length;X<K;X++)mt=Wt[X],x.format!==rn?gt!==null?Ot?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?R&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,gt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,X,Rt,mt.width,mt.height,0,gt,Ct,mt.data)}else if(x.isDataArrayTexture)if(Ot){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,et.width,et.height,et.depth),R)if(x.layerUpdates.size>0){const X=_l(et.width,et.height,x.format,x.type);for(const K of x.layerUpdates){const ut=et.data.subarray(K*X/et.data.BYTES_PER_ELEMENT,(K+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,gt,Ct,ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,gt,Ct,et.data);else if(x.isData3DTexture)Ot?(ae&&e.texStorage3D(i.TEXTURE_3D,ot,Rt,et.width,et.height,et.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,gt,Ct,et.data);else if(x.isFramebufferTexture){if(ae)if(Ot)e.texStorage2D(i.TEXTURE_2D,ot,Rt,et.width,et.height);else{let X=et.width,K=et.height;for(let ut=0;ut<ot;ut++)e.texImage2D(i.TEXTURE_2D,ut,Rt,X,K,0,gt,Ct,null),X>>=1,K>>=1}}else if(Wt.length>0){if(Ot&&ae){const X=Tt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Rt,X.width,X.height)}for(let X=0,K=Wt.length;X<K;X++)mt=Wt[X],Ot?R&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Ct,mt):e.texImage2D(i.TEXTURE_2D,X,Rt,gt,Ct,mt);x.generateMipmaps=!1}else if(Ot){if(ae){const X=Tt(et);e.texStorage2D(i.TEXTURE_2D,ot,Rt,X.width,X.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,Rt,gt,Ct,et);g(x)&&p(Z),bt.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function it(T,x,B){if(x.image.length!==6)return;const Z=re(T,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const q=n.get(tt);if(tt.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const bt=Yt.getPrimaries(Yt.workingColorSpace),ct=x.colorSpace===Un?null:Yt.getPrimaries(x.colorSpace),ft=x.colorSpace===Un||bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const $t=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!$t&&!et?gt[K]=v(x.image[K],!0,s.maxCubemapSize):gt[K]=et?x.image[K].image:x.image[K],gt[K]=le(x,gt[K]);const Ct=gt[0],Rt=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),Wt=y(x.internalFormat,Rt,mt,x.colorSpace),Ot=x.isVideoTexture!==!0,ae=q.__version===void 0||Z===!0,R=tt.dataReady;let ot=P(x,Ct);Bt(i.TEXTURE_CUBE_MAP,x);let X;if($t){Ot&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Wt,Ct.width,Ct.height);for(let K=0;K<6;K++){X=gt[K].mipmaps;for(let ut=0;ut<X.length;ut++){const ht=X[ut];x.format!==rn?Rt!==null?Ot?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,Rt,mt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Wt,ht.width,ht.height,0,Rt,mt,ht.data)}}}else{if(X=x.mipmaps,Ot&&ae){X.length>0&&ot++;const K=Tt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Ot?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Rt,mt,gt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,gt[K].width,gt[K].height,0,Rt,mt,gt[K].data);for(let ut=0;ut<X.length;ut++){const Dt=X[ut].image[K].image;Ot?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Dt.width,Dt.height,Rt,mt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Wt,Dt.width,Dt.height,0,Rt,mt,Dt.data)}}else{Ot?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,mt,gt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,Rt,mt,gt[K]);for(let ut=0;ut<X.length;ut++){const ht=X[ut];Ot?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Rt,mt,ht.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Wt,Rt,mt,ht.image[K])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),q.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function St(T,x,B,Z,tt,q){const bt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),ft=y(B.internalFormat,bt,ct,B.colorSpace),$t=n.get(x),et=n.get(B);if(et.__renderTarget=x,!$t.__hasExternalTextures){const gt=Math.max(1,x.width>>q),Ct=Math.max(1,x.height>>q);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,q,ft,gt,Ct,x.depth,0,bt,ct,null):e.texImage2D(tt,q,ft,gt,Ct,0,bt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,et.__webglTexture,0,Gt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,et.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const Z=x.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,q=w(x.stencilBuffer,tt),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Gt(x);Vt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,q,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{const Z=x.textures;for(let tt=0;tt<Z.length;tt++){const q=Z[tt],bt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),ft=y(q.internalFormat,bt,ct,q.colorSpace),$t=Gt(x);B&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,ft,x.width,x.height):Vt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const tt=Z.__webglTexture,q=Gt(x);if(x.depthTexture.format===Ti)Vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Di)Vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function kt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Lt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(x.__webglDepthbuffer[Z],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),lt(x.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,x,B){const Z=n.get(T);x!==void 0&&St(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&kt(T)}function de(T){const x=T.texture,B=n.get(T),Z=n.get(x);T.addEventListener("dispose",A);const tt=T.textures,q=T.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let ft=0;ft<x.mipmaps.length;ft++)B.__webglFramebuffer[ct][ft]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ct=0,ft=tt.length;ct<ft;ct++){const $t=n.get(tt[ct]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Vt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const ft=tt[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const $t=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),gt=y(ft.internalFormat,$t,et,ft.colorSpace,T.isXRRenderTarget===!0),Ct=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)St(B.__webglFramebuffer[ct][ft],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else St(B.__webglFramebuffer[ct],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,ft=tt.length;ct<ft;ct++){const $t=tt[ct],et=n.get($t);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Bt(i.TEXTURE_2D,$t),St(B.__webglFramebuffer,T,$t,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),g($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),Bt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)St(B.__webglFramebuffer[ft],T,x,i.COLOR_ATTACHMENT0,ct,ft);else St(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ct,0);g(x)&&p(ct),e.unbindTexture()}T.depthBuffer&&kt(T)}function Xt(T){const x=T.textures;for(let B=0,Z=x.length;B<Z;B++){const tt=x[B];if(g(tt)){const q=E(T),bt=n.get(tt).__webglTexture;e.bindTexture(q,bt),p(q),e.unbindTexture()}}}const me=[],U=[];function Ve(T){if(T.samples>0){if(Vt(T)===!1){const x=T.textures,B=T.width,Z=T.height;let tt=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),ct=x.length>1;if(ct)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const $t=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,i.NEAREST),c===!0&&(me.length=0,U.length=0,me.push(i.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(me.push(q),U.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const $t=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Vt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function At(T){const x=a.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function le(T,x){const B=T.colorSpace,Z=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ui&&B!==Un&&(Yt.getTransfer(B)===ie?(Z!==rn||tt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Vt}function kg(i,t){function e(n,s=Un){let r;const a=Yt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===ac)return i.RGB;if(n===rn)return i.RGBA;if(n===oc)return i.LUMINANCE;if(n===lc)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===cc)return i.RG;if(n===Qa)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===$s||n===Ys)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===ga||n===ma||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===xa||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===xa)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Ma||n===ya||n===wa||n===Ea||n===Ta||n===Aa||n===Ca||n===La||n===Ra||n===Pa||n===ka||n===Da||n===Ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Ua||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qs)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===Na||n===Ba||n===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Dg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ne extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ig={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,_=.005;h.inputState.pinching&&f>m+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:Ug,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bg extends Oi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,u=null,f=null,m=null,_=null;const v=new Ng,g=e.getContextAttributes();let p=null,E=null;const y=[],w=[],P=new Zt;let L=null;const A=new nn;A.viewport=new ge;const k=new nn;k.viewport=new ge;const M=[A,k],S=new Dg;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=y[J];return it===void 0&&(it=new Fr,y[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=y[J];return it===void 0&&(it=new Fr,y[J]=it),it.getGripSpace()},this.getHand=function(J){let it=y[J];return it===void 0&&(it=new Fr,y[J]=it),it.getHandSpace()};function N(J){const it=w.indexOf(J.inputSource);if(it===-1)return;const St=y[it];St!==void 0&&(St.update(J.inputSource,J.frame,h||a),St.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",j);for(let J=0;J<y.length;J++){const it=w[J];it!==null&&(w[J]=null,y[J].disconnect(it))}C=null,G=null,v.reset(),t.setRenderTarget(p),m=null,f=null,u=null,s=null,E=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",$),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new ei(m.framebufferWidth,m.framebufferHeight,{format:rn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,St=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Di:Ti,St=g.stencil?ki:ti);const Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new ei(f.textureWidth,f.textureHeight,{format:rn,type:En,depthTexture:new wc(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(J){for(let it=0;it<J.removed.length;it++){const St=J.removed[it],lt=w.indexOf(St);lt>=0&&(w[lt]=null,y[lt].disconnect(St))}for(let it=0;it<J.added.length;it++){const St=J.added[it];let lt=w.indexOf(St);if(lt===-1){for(let kt=0;kt<y.length;kt++)if(kt>=w.length){w.push(St),lt=kt;break}else if(w[kt]===null){w[kt]=St,lt=kt;break}if(lt===-1)break}const Lt=y[lt];Lt&&Lt.connect(St)}}const Y=new O,Q=new O;function V(J,it,St){Y.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);const lt=Y.distanceTo(Q),Lt=it.projectionMatrix.elements,kt=St.projectionMatrix.elements,Ft=Lt[14]/(Lt[10]-1),de=Lt[14]/(Lt[10]+1),Xt=(Lt[9]+1)/Lt[5],me=(Lt[9]-1)/Lt[5],U=(Lt[8]-1)/Lt[0],Ve=(kt[8]+1)/kt[0],Gt=Ft*U,Vt=Ft*Ve,At=lt/(-U+Ve),le=At*-U;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(le),J.translateZ(At),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Lt[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Tt=Ft+At,T=de+At,x=Gt-le,B=Vt+(lt-le),Z=Xt*de/T*Tt,tt=me*de/T*Tt;J.projectionMatrix.makePerspective(x,B,Z,tt,Tt,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function at(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let it=J.near,St=J.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(St=v.depthFar)),S.near=k.near=A.near=it,S.far=k.far=A.far=St,(C!==S.near||G!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,G=S.far),A.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,S.layers.mask=A.layers.mask|k.layers.mask;const lt=J.parent,Lt=S.cameras;at(S,lt);for(let kt=0;kt<Lt.length;kt++)at(Lt[kt],lt);Lt.length===2?V(S,A,k):S.projectionMatrix.copy(A.projectionMatrix),pt(J,S,lt)};function pt(J,it,St){St===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=za*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let wt=null;function Bt(J,it){if(d=it.getViewerPose(h||a),_=it,d!==null){const St=d.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let lt=!1;St.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let kt=0;kt<St.length;kt++){const Ft=St[kt];let de=null;if(m!==null)de=m.getViewport(Ft);else{const me=u.getViewSubImage(f,Ft);de=me.viewport,kt===0&&(t.setRenderTargetTextures(E,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(E))}let Xt=M[kt];Xt===void 0&&(Xt=new nn,Xt.layers.enable(kt),Xt.viewport=new ge,M[kt]=Xt),Xt.matrix.fromArray(Ft.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ft.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),kt===0&&(S.matrix.copy(Xt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(Xt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const kt=u.getDepthInformation(St[0]);kt&&kt.isValid&&kt.texture&&v.init(t,kt,s.renderState)}}for(let St=0;St<y.length;St++){const lt=w[St],Lt=y[St];lt!==null&&Lt!==void 0&&Lt.update(lt,it,h||a)}wt&&wt(J,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}const re=new yc;re.setAnimationLoop(Bt),this.setAnimationLoop=function(J){wt=J},this.dispose=function(){}}}const Xn=new un,Fg=new jt;function zg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,xc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,w)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?c(g,p,E,y):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=t.get(p),y=E.envMap,w=E.envMapRotation;y&&(g.envMap.value=y,Xn.copy(w),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),g.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(Xn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hg(i,t,e,n){let s={},r={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const w=y.program;n.uniformBlockBinding(E,w)}function h(E,y){let w=s[E.id];w===void 0&&(_(E),w=d(E),s[E.id]=w,E.addEventListener("dispose",g));const P=y.program;n.updateUBOMapping(E,P);const L=t.render.frame;r[E.id]!==L&&(f(E),r[E.id]=L)}function d(E){const y=u();E.__bindingPointIndex=y;const w=i.createBuffer(),P=E.__size,L=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function u(){for(let E=0;E<l;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],w=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let L=0,A=w.length;L<A;L++){const k=Array.isArray(w[L])?w[L]:[w[L]];for(let M=0,S=k.length;M<S;M++){const C=k[M];if(m(C,L,M,P)===!0){const G=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let $=0;for(let j=0;j<N.length;j++){const Y=N[j],Q=v(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,G+$,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,y,w,P){const L=E.value,A=y+"_"+w;if(P[A]===void 0)return typeof L=="number"||typeof L=="boolean"?P[A]=L:P[A]=L.clone(),!0;{const k=P[A];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return P[A]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function _(E){const y=E.uniforms;let w=0;const P=16;for(let A=0,k=y.length;A<k;A++){const M=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,C=M.length;S<C;S++){const G=M[S],N=Array.isArray(G.value)?G.value:[G.value];for(let $=0,j=N.length;$<j;$++){const Y=N[$],Q=v(Y),V=w%P,at=V%Q.boundary,pt=V+at;w+=at,pt!==0&&P-pt<Q.storage&&(w+=P-pt),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=Q.storage}}}const L=w%P;return L>0&&(w+=P-L),E.__size=w,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function g(E){const y=E.target;y.removeEventListener("dispose",g);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}class Gg{constructor(t={}){const{canvas:e=Rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Nn,this.toneMappingExposure=1;const w=this;let P=!1,L=0,A=0,k=null,M=-1,S=null;const C=new ge,G=new ge;let N=null;const $=new Et(0);let j=0,Y=e.width,Q=e.height,V=1,at=null,pt=null;const wt=new ge(0,0,Y,Q),Bt=new ge(0,0,Y,Q);let re=!1;const J=new io;let it=!1,St=!1;const lt=new jt,Lt=new jt,kt=new O,Ft=new ge,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function me(){return k===null?V:1}let U=n;function Ve(b,D){return e.getContext(b,D)}try{const b={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){const D="webgl2";if(U=Ve(D,b),U===null)throw Ve(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Gt,Vt,At,le,Tt,T,x,B,Z,tt,q,bt,ct,ft,$t,et,gt,Ct,Rt,mt,Wt,Ot,ae,R;function ot(){Gt=new $p(U),Gt.init(),Ot=new kg(U,Gt),Vt=new zp(U,Gt,t,Ot),At=new Lg(U,Gt),Vt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),le=new Jp(U),Tt=new fg,T=new Pg(U,Gt,At,Tt,Vt,Ot,le),x=new Gp(w),B=new Xp(w),Z=new nd(U),ae=new Bp(U,Z),tt=new Yp(U,Z,le,ae),q=new Zp(U,tt,Z,le),Rt=new jp(U,Vt,T),et=new Hp(Tt),bt=new pg(w,x,B,Gt,Vt,ae,et),ct=new zg(w,Tt),ft=new mg,$t=new Mg(Gt),Ct=new Np(w,x,B,At,q,m,c),gt=new Ag(w,q,Vt),R=new Hg(U,le,Vt,At),mt=new Fp(U,Gt,le),Wt=new qp(U,Gt,le),le.programs=bt.programs,w.capabilities=Vt,w.extensions=Gt,w.properties=Tt,w.renderLists=ft,w.shadowMap=gt,w.state=At,w.info=le}ot();const X=new Bg(w,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(Y,Q,!1))},this.getSize=function(b){return b.set(Y,Q)},this.setSize=function(b,D,F=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,Q=D,e.width=Math.floor(b*V),e.height=Math.floor(D*V),F===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Y*V,Q*V).floor()},this.setDrawingBufferSize=function(b,D,F){Y=b,Q=D,V=F,e.width=Math.floor(b*F),e.height=Math.floor(D*F),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,D,F,H){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,D,F,H),At.viewport(C.copy(wt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,D,F,H){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,D,F,H),At.scissor(G.copy(Bt).multiplyScalar(V).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){At.setScissorTest(re=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,D=!0,F=!0){let H=0;if(b){let I=!1;if(k!==null){const nt=k.texture.format;I=nt===to||nt===Qa||nt===Ka}if(I){const nt=k.texture.type,dt=nt===En||nt===ti||nt===as||nt===ki||nt===Ja||nt===ja,_t=Ct.getClearColor(),vt=Ct.getClearAlpha(),Pt=_t.r,It=_t.g,xt=_t.b;dt?(_[0]=Pt,_[1]=It,_[2]=xt,_[3]=vt,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=Pt,v[1]=It,v[2]=xt,v[3]=vt,U.clearBufferiv(U.COLOR,0,v))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),F&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ft.dispose(),$t.dispose(),Tt.dispose(),x.dispose(),B.dispose(),q.dispose(),ae.dispose(),R.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",uo),X.removeEventListener("sessionend",po),Fn.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=le.autoReset,D=gt.enabled,F=gt.autoUpdate,H=gt.needsUpdate,I=gt.type;ot(),le.autoReset=b,gt.enabled=D,gt.autoUpdate=F,gt.needsUpdate=H,gt.type=I}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dt(b){const D=b.target;D.removeEventListener("dispose",Dt),ue(D)}function ue(b){Te(b),Tt.remove(b)}function Te(b){const D=Tt.get(b).programs;D!==void 0&&(D.forEach(function(F){bt.releaseProgram(F)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,F,H,I,nt){D===null&&(D=de);const dt=I.isMesh&&I.matrixWorld.determinant()<0,_t=zc(b,D,F,H,I);At.setMaterial(H,dt);let vt=F.index,Pt=1;if(H.wireframe===!0){if(vt=tt.getWireframeAttribute(F),vt===void 0)return;Pt=2}const It=F.drawRange,xt=F.attributes.position;let Jt=It.start*Pt,oe=(It.start+It.count)*Pt;nt!==null&&(Jt=Math.max(Jt,nt.start*Pt),oe=Math.min(oe,(nt.start+nt.count)*Pt)),vt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,vt.count)):xt!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,xt.count));const ce=oe-Jt;if(ce<0||ce===1/0)return;ae.setup(I,H,_t,F,vt);let De,Kt=mt;if(vt!==null&&(De=Z.get(vt),Kt=Wt,Kt.setIndex(De)),I.isMesh)H.wireframe===!0?(At.setLineWidth(H.wireframeLinewidth*me()),Kt.setMode(U.LINES)):Kt.setMode(U.TRIANGLES);else if(I.isLine){let Mt=H.linewidth;Mt===void 0&&(Mt=1),At.setLineWidth(Mt*me()),I.isLineSegments?Kt.setMode(U.LINES):I.isLineLoop?Kt.setMode(U.LINE_LOOP):Kt.setMode(U.LINE_STRIP)}else I.isPoints?Kt.setMode(U.POINTS):I.isSprite&&Kt.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Kt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Mt=I._multiDrawStarts,fn=I._multiDrawCounts,Qt=I._multiDrawCount,Ze=vt?Z.get(vt).bytesPerElement:1,ii=Tt.get(H).currentProgram.getUniforms();for(let Fe=0;Fe<Qt;Fe++)ii.setValue(U,"_gl_DrawID",Fe),Kt.render(Mt[Fe]/Ze,fn[Fe])}else if(I.isInstancedMesh)Kt.renderInstances(Jt,ce,I.count);else if(F.isInstancedBufferGeometry){const Mt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,fn=Math.min(F.instanceCount,Mt);Kt.renderInstances(Jt,ce,fn)}else Kt.render(Jt,ce)};function te(b,D,F){b.transparent===!0&&b.side===we&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,ps(b,D,F),b.side=wn,b.needsUpdate=!0,ps(b,D,F),b.side=we):ps(b,D,F)}this.compile=function(b,D,F=null){F===null&&(F=b),p=$t.get(F),p.init(D),y.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),b!==F&&b.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const H=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const nt=I.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const _t=nt[dt];te(_t,F,I),H.add(_t)}else te(nt,F,I),H.add(nt)}),y.pop(),p=null,H},this.compileAsync=function(b,D,F=null){const H=this.compile(b,D,F);return new Promise(I=>{function nt(){if(H.forEach(function(dt){Tt.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){I(b);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let je=null;function pn(b){je&&je(b)}function uo(){Fn.stop()}function po(){Fn.start()}const Fn=new yc;Fn.setAnimationLoop(pn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(b){je=b,X.setAnimationLoop(b),b===null?Fn.stop():Fn.start()},X.addEventListener("sessionstart",uo),X.addEventListener("sessionend",po),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,D,k),p=$t.get(b,y.length),p.init(D),y.push(p),Lt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),J.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,it=et.init(this.clippingPlanes,St),g=ft.get(b,E.length),g.init(),E.push(g),X.enabled===!0&&X.isPresenting===!0){const nt=w.xr.getDepthSensingMesh();nt!==null&&cr(nt,D,-1/0,w.sortObjects)}cr(b,D,0,w.sortObjects),g.finish(),w.sortObjects===!0&&g.sort(at,pt),Xt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xt&&Ct.addToRenderList(g,b),this.info.render.frame++,it===!0&&et.beginShadows();const F=p.state.shadowsArray;gt.render(F,b,D),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,I=g.transmissive;if(p.setupLights(),D.isArrayCamera){const nt=D.cameras;if(I.length>0)for(let dt=0,_t=nt.length;dt<_t;dt++){const vt=nt[dt];go(H,I,b,vt)}Xt&&Ct.render(b);for(let dt=0,_t=nt.length;dt<_t;dt++){const vt=nt[dt];fo(g,b,vt,vt.viewport)}}else I.length>0&&go(H,I,b,D),Xt&&Ct.render(b),fo(g,b,D);k!==null&&(T.updateMultisampleRenderTarget(k),T.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(w,b,D),ae.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],it===!0&&et.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function cr(b,D,F,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){H&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);const dt=q.update(b),_t=b.material;_t.visible&&g.push(b,dt,_t,F,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const dt=q.update(b),_t=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ft.copy(dt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(_t)){const vt=dt.groups;for(let Pt=0,It=vt.length;Pt<It;Pt++){const xt=vt[Pt],Jt=_t[xt.materialIndex];Jt&&Jt.visible&&g.push(b,dt,Jt,F,Ft.z,xt)}}else _t.visible&&g.push(b,dt,_t,F,Ft.z,null)}}const nt=b.children;for(let dt=0,_t=nt.length;dt<_t;dt++)cr(nt[dt],D,F,H)}function fo(b,D,F,H){const I=b.opaque,nt=b.transmissive,dt=b.transparent;p.setupLightsView(F),it===!0&&et.setGlobalState(w.clippingPlanes,F),H&&At.viewport(C.copy(H)),I.length>0&&us(I,D,F),nt.length>0&&us(nt,D,F),dt.length>0&&us(dt,D,F),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function go(b,D,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ls:En,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],dt=H.viewport||C;nt.setSize(dt.z,dt.w);const _t=w.getRenderTarget();w.setRenderTarget(nt),w.getClearColor($),j=w.getClearAlpha(),j<1&&w.setClearColor(16777215,.5),w.clear(),Xt&&Ct.render(F);const vt=w.toneMapping;w.toneMapping=Nn;const Pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),it===!0&&et.setGlobalState(w.clippingPlanes,H),us(b,F,H),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let xt=0,Jt=D.length;xt<Jt;xt++){const oe=D[xt],ce=oe.object,De=oe.geometry,Kt=oe.material,Mt=oe.group;if(Kt.side===we&&ce.layers.test(H.layers)){const fn=Kt.side;Kt.side=Be,Kt.needsUpdate=!0,mo(ce,F,H,De,Kt,Mt),Kt.side=fn,Kt.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}w.setRenderTarget(_t),w.setClearColor($,j),Pt!==void 0&&(H.viewport=Pt),w.toneMapping=vt}function us(b,D,F){const H=D.isScene===!0?D.overrideMaterial:null;for(let I=0,nt=b.length;I<nt;I++){const dt=b[I],_t=dt.object,vt=dt.geometry,Pt=H===null?dt.material:H,It=dt.group;_t.layers.test(F.layers)&&mo(_t,D,F,vt,Pt,It)}}function mo(b,D,F,H,I,nt){b.onBeforeRender(w,D,F,H,I,nt),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(w,D,F,H,b,nt),I.transparent===!0&&I.side===we&&I.forceSinglePass===!1?(I.side=Be,I.needsUpdate=!0,w.renderBufferDirect(F,D,H,I,b,nt),I.side=wn,I.needsUpdate=!0,w.renderBufferDirect(F,D,H,I,b,nt),I.side=we):w.renderBufferDirect(F,D,H,I,b,nt),b.onAfterRender(w,D,F,H,I,nt)}function ps(b,D,F){D.isScene!==!0&&(D=de);const H=Tt.get(b),I=p.state.lights,nt=p.state.shadowsArray,dt=I.state.version,_t=bt.getParameters(b,I.state,nt,D,F),vt=bt.getProgramCacheKey(_t);let Pt=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?B:x).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",Dt),Pt=new Map,H.programs=Pt);let It=Pt.get(vt);if(It!==void 0){if(H.currentProgram===It&&H.lightsStateVersion===dt)return vo(b,_t),It}else _t.uniforms=bt.getUniforms(b),b.onBeforeCompile(_t,w),It=bt.acquireProgram(_t,vt),Pt.set(vt,It),H.uniforms=_t.uniforms;const xt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xt.clippingPlanes=et.uniform),vo(b,_t),H.needsLights=Gc(b),H.lightsStateVersion=dt,H.needsLights&&(xt.ambientLightColor.value=I.state.ambient,xt.lightProbe.value=I.state.probe,xt.directionalLights.value=I.state.directional,xt.directionalLightShadows.value=I.state.directionalShadow,xt.spotLights.value=I.state.spot,xt.spotLightShadows.value=I.state.spotShadow,xt.rectAreaLights.value=I.state.rectArea,xt.ltc_1.value=I.state.rectAreaLTC1,xt.ltc_2.value=I.state.rectAreaLTC2,xt.pointLights.value=I.state.point,xt.pointLightShadows.value=I.state.pointShadow,xt.hemisphereLights.value=I.state.hemi,xt.directionalShadowMap.value=I.state.directionalShadowMap,xt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,xt.spotShadowMap.value=I.state.spotShadowMap,xt.spotLightMatrix.value=I.state.spotLightMatrix,xt.spotLightMap.value=I.state.spotLightMap,xt.pointShadowMap.value=I.state.pointShadowMap,xt.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=It,H.uniformsList=null,It}function _o(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Js.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function vo(b,D){const F=Tt.get(b);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function zc(b,D,F,H,I){D.isScene!==!0&&(D=de),T.resetTextureUnits();const nt=D.fog,dt=H.isMeshStandardMaterial?D.environment:null,_t=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ui,vt=(H.isMeshStandardMaterial?B:x).get(H.envMap||dt),Pt=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,It=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),xt=!!F.morphAttributes.position,Jt=!!F.morphAttributes.normal,oe=!!F.morphAttributes.color;let ce=Nn;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ce=w.toneMapping);const De=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Kt=De!==void 0?De.length:0,Mt=Tt.get(H),fn=p.state.lights;if(it===!0&&(St===!0||b!==S)){const We=b===S&&H.id===M;et.setState(H,b,We)}let Qt=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==fn.state.version||Mt.outputColorSpace!==_t||I.isBatchedMesh&&Mt.batching===!1||!I.isBatchedMesh&&Mt.batching===!0||I.isBatchedMesh&&Mt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Mt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Mt.instancing===!1||!I.isInstancedMesh&&Mt.instancing===!0||I.isSkinnedMesh&&Mt.skinning===!1||!I.isSkinnedMesh&&Mt.skinning===!0||I.isInstancedMesh&&Mt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Mt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Mt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Mt.instancingMorph===!1&&I.morphTexture!==null||Mt.envMap!==vt||H.fog===!0&&Mt.fog!==nt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==et.numPlanes||Mt.numIntersection!==et.numIntersection)||Mt.vertexAlphas!==Pt||Mt.vertexTangents!==It||Mt.morphTargets!==xt||Mt.morphNormals!==Jt||Mt.morphColors!==oe||Mt.toneMapping!==ce||Mt.morphTargetsCount!==Kt)&&(Qt=!0):(Qt=!0,Mt.__version=H.version);let Ze=Mt.currentProgram;Qt===!0&&(Ze=ps(H,D,I));let ii=!1,Fe=!1,zi=!1;const he=Ze.getUniforms(),an=Mt.uniforms;if(At.useProgram(Ze.program)&&(ii=!0,Fe=!0,zi=!0),H.id!==M&&(M=H.id,Fe=!0),ii||S!==b){At.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),kh(lt),Dh(lt),he.setValue(U,"projectionMatrix",lt)):he.setValue(U,"projectionMatrix",b.projectionMatrix),he.setValue(U,"viewMatrix",b.matrixWorldInverse);const An=he.map.cameraPosition;An!==void 0&&An.setValue(U,kt.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Fe=!0,zi=!0)}if(I.isSkinnedMesh){he.setOptional(U,I,"bindMatrix"),he.setOptional(U,I,"bindMatrixInverse");const We=I.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),he.setValue(U,"boneTexture",We.boneTexture,T))}I.isBatchedMesh&&(he.setOptional(U,I,"batchingTexture"),he.setValue(U,"batchingTexture",I._matricesTexture,T),he.setOptional(U,I,"batchingIdTexture"),he.setValue(U,"batchingIdTexture",I._indirectTexture,T),he.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&he.setValue(U,"batchingColorTexture",I._colorsTexture,T));const Hi=F.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&Rt.update(I,F,Ze),(Fe||Mt.receiveShadow!==I.receiveShadow)&&(Mt.receiveShadow=I.receiveShadow,he.setValue(U,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(an.envMap.value=vt,an.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(an.envMapIntensity.value=D.environmentIntensity),Fe&&(he.setValue(U,"toneMappingExposure",w.toneMappingExposure),Mt.needsLights&&Hc(an,zi),nt&&H.fog===!0&&ct.refreshFogUniforms(an,nt),ct.refreshMaterialUniforms(an,H,V,Q,p.state.transmissionRenderTarget[b.id]),Js.upload(U,_o(Mt),an,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Js.upload(U,_o(Mt),an,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(U,"center",I.center),he.setValue(U,"modelViewMatrix",I.modelViewMatrix),he.setValue(U,"normalMatrix",I.normalMatrix),he.setValue(U,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const We=H.uniformsGroups;for(let An=0,Cn=We.length;An<Cn;An++){const xo=We[An];R.update(xo,Ze),R.bind(xo,Ze)}}return Ze}function Hc(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Gc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,D,F){Tt.get(b.texture).__webglTexture=D,Tt.get(b.depthTexture).__webglTexture=F;const H=Tt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=F===void 0,H.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const F=Tt.get(b);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,F=0){k=b,L=D,A=F;let H=!0,I=null,nt=!1,dt=!1;if(b){const vt=Tt.get(b);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(vt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(vt.__hasExternalTextures)T.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const xt=b.depthTexture;if(vt.__boundDepthTexture!==xt){if(xt!==null&&Tt.has(xt)&&(b.width!==xt.image.width||b.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(dt=!0);const It=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[D])?I=It[D][F]:I=It[D],nt=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?I=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?I=It[F]:I=It,C.copy(b.viewport),G.copy(b.scissor),N=b.scissorTest}else C.copy(wt).multiplyScalar(V).floor(),G.copy(Bt).multiplyScalar(V).floor(),N=re;if(At.bindFramebuffer(U.FRAMEBUFFER,I)&&H&&At.drawBuffers(b,I),At.viewport(C),At.scissor(G),At.setScissorTest(N),nt){const vt=Tt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,vt.__webglTexture,F)}else if(dt){const vt=Tt.get(b.texture),Pt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.__webglTexture,F||0,Pt)}M=-1},this.readRenderTargetPixels=function(b,D,F,H,I,nt,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){At.bindFramebuffer(U.FRAMEBUFFER,_t);try{const vt=b.texture,Pt=vt.format,It=vt.type;if(!Vt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&F>=0&&F<=b.height-I&&U.readPixels(D,F,H,I,Ot.convert(Pt),Ot.convert(It),nt)}finally{const vt=k!==null?Tt.get(k).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(b,D,F,H,I,nt,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){const vt=b.texture,Pt=vt.format,It=vt.type;if(!Vt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-H&&F>=0&&F<=b.height-I){At.bindFramebuffer(U.FRAMEBUFFER,_t);const xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(D,F,H,I,Ot.convert(Pt),Ot.convert(It),0);const Jt=k!==null?Tt.get(k).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,Jt);const oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ph(U,oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(xt),U.deleteSync(oe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,F=0){b.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-F),I=Math.floor(b.image.width*H),nt=Math.floor(b.image.height*H),dt=D!==null?D.x:0,_t=D!==null?D.y:0;T.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,dt,_t,I,nt),At.unbindTexture()},this.copyTextureToTexture=function(b,D,F=null,H=null,I=0){b.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],D=arguments[2],I=arguments[3]||0,F=null);let nt,dt,_t,vt,Pt,It,xt,Jt,oe;const ce=b.isCompressedTexture?b.mipmaps[I]:b.image;F!==null?(nt=F.max.x-F.min.x,dt=F.max.y-F.min.y,_t=F.isBox3?F.max.z-F.min.z:1,vt=F.min.x,Pt=F.min.y,It=F.isBox3?F.min.z:0):(nt=ce.width,dt=ce.height,_t=ce.depth||1,vt=0,Pt=0,It=0),H!==null?(xt=H.x,Jt=H.y,oe=H.z):(xt=0,Jt=0,oe=0);const De=Ot.convert(D.format),Kt=Ot.convert(D.type);let Mt;D.isData3DTexture?(T.setTexture3D(D,0),Mt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Mt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Mt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const fn=U.getParameter(U.UNPACK_ROW_LENGTH),Qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ze=U.getParameter(U.UNPACK_SKIP_PIXELS),ii=U.getParameter(U.UNPACK_SKIP_ROWS),Fe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,It);const zi=b.isDataArrayTexture||b.isData3DTexture,he=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const an=Tt.get(b),Hi=Tt.get(D),We=Tt.get(an.__renderTarget),An=Tt.get(Hi.__renderTarget);At.bindFramebuffer(U.READ_FRAMEBUFFER,We.__webglFramebuffer),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Cn=0;Cn<_t;Cn++)zi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,I,It+Cn),b.isDepthTexture?(he&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.get(D).__webglTexture,I,oe+Cn),U.blitFramebuffer(vt,Pt,nt,dt,xt,Jt,nt,dt,U.DEPTH_BUFFER_BIT,U.NEAREST)):he?U.copyTexSubImage3D(Mt,I,xt,Jt,oe+Cn,vt,Pt,nt,dt):U.copyTexSubImage2D(Mt,I,xt,Jt,oe+Cn,vt,Pt,nt,dt);At.bindFramebuffer(U.READ_FRAMEBUFFER,null),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else he?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Mt,I,xt,Jt,oe,nt,dt,_t,De,Kt,ce.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Mt,I,xt,Jt,oe,nt,dt,_t,De,ce.data):U.texSubImage3D(Mt,I,xt,Jt,oe,nt,dt,_t,De,Kt,ce):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,xt,Jt,nt,dt,De,Kt,ce.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,xt,Jt,ce.width,ce.height,De,ce.data):U.texSubImage2D(U.TEXTURE_2D,I,xt,Jt,nt,dt,De,Kt,ce);U.pixelStorei(U.UNPACK_ROW_LENGTH,fn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,ii),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe),I===0&&D.generateMipmaps&&U.generateMipmap(Mt),At.unbindTexture()},this.copyTextureToTexture3D=function(b,D,F=null,H=null,I=0){return b.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,H=arguments[1]||null,b=arguments[2],D=arguments[3],I=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,F,H,I)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){L=0,A=0,k=null,At.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class tr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new tr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vg extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wg extends Re{constructor(t=null,e=1,n=1,s,r,a,l,c,h=ee,d=ee,u,f){super(null,a,l,c,h,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vi=new jt,xl=new jt,Us=[],Sl=new ni,Xg=new jt,Yi=new qt,qi=new Ni;class Ji extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Sl.copy(t.boundingBox).applyMatrix4(vi),this.boundingBox.union(Sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),qi.copy(t.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vi),xl.multiplyMatrices(n,vi),Yi.matrixWorld=xl,Yi.raycast(t,Us);for(let a=0,l=Us.length;a<l;a++){const c=Us[a];c.instanceId=r,c.object=this,e.push(c)}Us.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wg(new Float32Array(s*this.count),s,this.count,Za,dn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=l,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ga extends Ye{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const er=new O,nr=new O,bl=new jt,ji=new eo,Os=new Ni,zr=new O,Ml=new O;class $g extends ye{constructor(t=new Je,e=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)er.fromBufferAttribute(e,s-1),nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=er.distanceTo(nr);t.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;bl.copy(s).invert(),ji.copy(t.ray).applyMatrix4(bl);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=m,g=_-1;v<g;v+=h){const p=d.getX(v),E=d.getX(v+1),y=Ns(this,t,ji,c,p,E);y&&e.push(y)}if(this.isLineLoop){const v=d.getX(_-1),g=d.getX(m),p=Ns(this,t,ji,c,v,g);p&&e.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=m,g=_-1;v<g;v+=h){const p=Ns(this,t,ji,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Ns(this,t,ji,c,_-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Ns(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(er.fromBufferAttribute(a,s),nr.fromBufferAttribute(a,r),e.distanceSqToSegment(er,nr,zr,Ml)>n)return;zr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zr);if(!(c<t.near||c>t.far))return{distance:c,point:Ml.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class ar extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],l=[],c=[],h=new O,d=new Zt;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),a.push(h.x,h.y,h.z),l.push(0,0,1),d.x=(a[f]/t+1)/2,d.y=(a[f+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class en extends Ye{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const yl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Yg{constructor(t,e,n){const s=this;let r=!1,a=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return h.push(d,u),this},this.removeHandler=function(d){const u=h.indexOf(d);return u!==-1&&h.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=h.length;u<f;u+=2){const m=h[u],_=h[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const qg=new Yg;class ao{constructor(t){this.manager=t!==void 0?t:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ao.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jg extends ao{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=yl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const l=os("img");function c(){d(),yl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){d(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(t),l.src=t,l}}class or extends ao{constructor(t){super(t)}load(t,e,n,s){const r=new Re,a=new Jg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){r.image=l,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class oo extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class jg extends oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hr=new jt,wl=new O,El=new O;class Zg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),Hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Kg extends Zg{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qg extends oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Kg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tm extends oo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class em{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Tl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Tl(){return performance.now()}const Al=new jt;class nm{constructor(t,e,n=0,s=1/0){this.ray=new eo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Al.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Al),this}intersectObject(t,e=!0,n=[]){return Va(t,this,n,e),n.sort(Cl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Va(t[s],this,n,e);return n.sort(Cl),n}}function Cl(i,t){return i.distance-t.distance}function Va(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,l=r.length;a<l;a++)Va(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);const z=16,$n=63,W={ocean:0,plains:1,desert:2,windswept_hills:3,forest:4,taiga:5,swamp:6,river:7,frozen_ocean:10,frozen_river:11,snowy_plains:12,snowy_mountains:13,mushroom_fields:14,beach:16,jungle:21,sparse_jungle:23,deep_ocean:24,stony_shore:25,snowy_beach:26,birch_forest:27,dark_forest:29,snowy_taiga:30,old_growth_pine_taiga:32,windswept_forest:34,savanna:35,savanna_plateau:36,badlands:37,wooded_badlands:38,wooded_badlands_plateau:39,eroded_badlands:40,warm_ocean:44,lukewarm_ocean:45,cold_ocean:46,deep_lukewarm_ocean:48,deep_cold_ocean:49,deep_frozen_ocean:50,sunflower_plains:129,flower_forest:132,ice_spikes:140,old_growth_birch_forest:155,old_growth_spruce_taiga:160,windswept_savanna:163,windswept_gravelly_hills:131,bamboo_jungle:168,meadow:177,grove:178,snowy_slopes:179,frozen_peaks:180,jagged_peaks:181,stony_peaks:182,cherry_grove:183,pale_garden:184,mangrove_swamp:175};var zt=(i=>(i[i.Oak=0]="Oak",i[i.Birch=1]="Birch",i[i.Spruce=2]="Spruce",i[i.Jungle=3]="Jungle",i[i.Acacia=4]="Acacia",i[i.DarkOak=5]="DarkOak",i[i.Cherry=6]="Cherry",i[i.Mangrove=7]="Mangrove",i[i.Cactus=8]="Cactus",i))(zt||{});let js,Zs;var o=(i=>(i[i.Air=0]="Air",i[i.Stone=1]="Stone",i[i.Dirt=2]="Dirt",i[i.Grass=3]="Grass",i[i.Sand=4]="Sand",i[i.Gravel=5]="Gravel",i[i.Water=6]="Water",i[i.Ice=7]="Ice",i[i.Snow=8]="Snow",i[i.SnowBlock=9]="SnowBlock",i[i.Clay=10]="Clay",i[i.Bedrock=11]="Bedrock",i[i.OakLog=12]="OakLog",i[i.BirchLog=13]="BirchLog",i[i.SpruceLog=14]="SpruceLog",i[i.JungleLog=15]="JungleLog",i[i.AcaciaLog=16]="AcaciaLog",i[i.DarkOakLog=17]="DarkOakLog",i[i.CherryLog=18]="CherryLog",i[i.MangroveLog=19]="MangroveLog",i[i.OakLeaves=20]="OakLeaves",i[i.BirchLeaves=21]="BirchLeaves",i[i.SpruceLeaves=22]="SpruceLeaves",i[i.JungleLeaves=23]="JungleLeaves",i[i.AcaciaLeaves=24]="AcaciaLeaves",i[i.DarkOakLeaves=25]="DarkOakLeaves",i[i.CherryLeaves=26]="CherryLeaves",i[i.MangroveLeaves=27]="MangroveLeaves",i[i.Cactus=28]="Cactus",i[i.CactusTop=29]="CactusTop",i[i.DeadBush=30]="DeadBush",i[i.TallGrass=31]="TallGrass",i[i.Fern=32]="Fern",i[i.Podzol=33]="Podzol",i[i.Mycelium=34]="Mycelium",i[i.PackedIce=35]="PackedIce",i[i.BlueIce=36]="BlueIce",i[i.RedSand=37]="RedSand",i[i.Terracotta=38]="Terracotta",i[i.Coral=39]="Coral",i[i.Seagrass=40]="Seagrass",i[i.OakSapling=41]="OakSapling",i[i.BirchSapling=42]="BirchSapling",i[i.SpruceSapling=43]="SpruceSapling",i[i.JungleSapling=44]="JungleSapling",i[i.AcaciaSapling=45]="AcaciaSapling",i[i.DarkOakSapling=46]="DarkOakSapling",i[i.CherrySapling=47]="CherrySapling",i[i.MangroveSapling=48]="MangroveSapling",i[i.OakPlanks=49]="OakPlanks",i[i.BirchPlanks=50]="BirchPlanks",i[i.SprucePlanks=51]="SprucePlanks",i[i.JunglePlanks=52]="JunglePlanks",i[i.AcaciaPlanks=53]="AcaciaPlanks",i[i.DarkOakPlanks=54]="DarkOakPlanks",i[i.CherryPlanks=55]="CherryPlanks",i[i.MangrovePlanks=56]="MangrovePlanks",i[i.StrippedOakLog=57]="StrippedOakLog",i[i.StrippedBirchLog=58]="StrippedBirchLog",i[i.StrippedSpruceLog=59]="StrippedSpruceLog",i[i.StrippedJungleLog=60]="StrippedJungleLog",i[i.StrippedAcaciaLog=61]="StrippedAcaciaLog",i[i.StrippedDarkOakLog=62]="StrippedDarkOakLog",i[i.StrippedCherryLog=63]="StrippedCherryLog",i[i.StrippedMangroveLog=64]="StrippedMangroveLog",i[i.OakDoor=65]="OakDoor",i[i.BirchDoor=66]="BirchDoor",i[i.SpruceDoor=67]="SpruceDoor",i[i.JungleDoor=68]="JungleDoor",i[i.AcaciaDoor=69]="AcaciaDoor",i[i.DarkOakDoor=70]="DarkOakDoor",i[i.CherryDoor=71]="CherryDoor",i[i.MangroveDoor=72]="MangroveDoor",i[i.OakTrapdoor=73]="OakTrapdoor",i[i.BirchTrapdoor=74]="BirchTrapdoor",i[i.SpruceTrapdoor=75]="SpruceTrapdoor",i[i.JungleTrapdoor=76]="JungleTrapdoor",i[i.AcaciaTrapdoor=77]="AcaciaTrapdoor",i[i.DarkOakTrapdoor=78]="DarkOakTrapdoor",i[i.CherryTrapdoor=79]="CherryTrapdoor",i[i.MangroveTrapdoor=80]="MangroveTrapdoor",i))(o||{});js={0:12,1:13,2:14,3:15,4:16,5:17,6:18,7:19,8:28};Zs={0:20,1:21,2:22,3:23,4:24,5:25,6:26,7:27,8:0};const im={20:41,21:42,22:43,23:44,24:45,25:46,26:47,27:48},sm={20:.05,21:.05,22:.05,23:.025,24:.05,25:.05,26:.05,27:.05},Pe="/sound-effects",Gr={"step/grass":6,"step/stone":6,"step/wood":6,"step/sand":5,"step/gravel":4,"step/snow":4,"step/cloth":4,"step/coral":6,"step/wet_grass":6,"dig/grass":4,"dig/stone":4,"dig/wood":4,"dig/sand":4,"dig/gravel":4,"dig/snow":4,"dig/cloth":4,"dig/coral":4,"dig/wet_grass":4,"random/pop":1,"random/click":1,"random/break":1,"random/orb":1,"random/splash":1,"liquid/splash":1,"liquid/splash2":1,"liquid/swim":18,"liquid/water":1,"damage/fallbig":1,"damage/fallsmall":1},rm={[o.Grass]:"grass",[o.Dirt]:"grass",[o.Podzol]:"grass",[o.Mycelium]:"grass",[o.TallGrass]:"grass",[o.Fern]:"grass",[o.DeadBush]:"grass",[o.Stone]:"stone",[o.Terracotta]:"stone",[o.Ice]:"stone",[o.PackedIce]:"stone",[o.BlueIce]:"stone",[o.Clay]:"stone",[o.Bedrock]:"stone",[o.OakLog]:"wood",[o.BirchLog]:"wood",[o.SpruceLog]:"wood",[o.JungleLog]:"wood",[o.AcaciaLog]:"wood",[o.DarkOakLog]:"wood",[o.CherryLog]:"wood",[o.MangroveLog]:"wood",[o.Sand]:"sand",[o.RedSand]:"sand",[o.Gravel]:"gravel",[o.Snow]:"snow",[o.SnowBlock]:"snow",[o.OakLeaves]:"grass",[o.BirchLeaves]:"grass",[o.SpruceLeaves]:"grass",[o.JungleLeaves]:"grass",[o.AcaciaLeaves]:"grass",[o.DarkOakLeaves]:"grass",[o.CherryLeaves]:"grass",[o.MangroveLeaves]:"grass",[o.OakSapling]:"grass",[o.BirchSapling]:"grass",[o.SpruceSapling]:"grass",[o.JungleSapling]:"grass",[o.AcaciaSapling]:"grass",[o.DarkOakSapling]:"grass",[o.CherrySapling]:"grass",[o.MangroveSapling]:"grass",[o.Cactus]:"cloth",[o.CactusTop]:"cloth",[o.Coral]:"coral",[o.Seagrass]:"wet_grass"},on={step:.3,dig:.5,place:.6,break:.7,pickup:.5,splash:.6,swim:.3,ui:.4,fall:.5},Vr={step:280,dig:200,swim:400};class Mi{static instance;audioCache=new Map;lastPlayTime=new Map;masterVolume=1;enabled=!0;audioContext=null;gainNode=null;constructor(){this.initAudioContext()}static getInstance(){return Mi.instance||(Mi.instance=new Mi),Mi.instance}initAudioContext(){const t=()=>{this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination),this.gainNode.gain.value=this.masterVolume),this.audioContext.state==="suspended"&&this.audioContext.resume()};document.addEventListener("click",t,{once:!1}),document.addEventListener("keydown",t,{once:!1}),document.addEventListener("mousedown",t,{once:!1})}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.gainNode&&(this.gainNode.gain.value=this.masterVolume)}setEnabled(t){this.enabled=t}getSoundCategory(t){return rm[t]||"stone"}buildSoundPath(t,e){if(t.startsWith("liquid/swim"))return`${Pe}/liquid/swim${e}.ogg`;if(t==="random/pop"||t==="random/click"||t==="random/break"||t==="random/orb"||t==="random/splash"||t==="liquid/water"){const r=t.split("/")[1];return`${Pe}/${t.split("/")[0]}/${r}.ogg`}if(t==="liquid/splash")return`${Pe}/liquid/splash.ogg`;if(t==="liquid/splash2")return`${Pe}/liquid/splash2.ogg`;if(t==="damage/fallbig"||t==="damage/fallsmall")return`${Pe}/${t}.ogg`;const[n,s]=t.split("/");return`${Pe}/${n}/${s}${e}.ogg`}getAudio(t){let e=this.audioCache.get(t);if(!e){e=[];for(let n=0;n<3;n++){const s=new Audio(t);s.preload="auto",e.push(s)}this.audioCache.set(t,e)}for(const n of e)if(n.paused||n.ended)return n;return e[0]}playWithCooldown(t,e,n,s){const r=Date.now(),a=this.lastPlayTime.get(t)||0;return r-a<e?!1:(this.lastPlayTime.set(t,r),this.playSound(n,s),!0)}playSound(t,e){if(!this.enabled)return;const n=this.getAudio(t);n.volume=e*this.masterVolume,n.currentTime=0,n.play().catch(()=>{})}getRandomVariant(t){const e=Gr[t]||1;return Math.floor(Math.random()*e)+1}playFootstep(t){const e=this.getSoundCategory(t),n=`step/${e}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playWithCooldown(`step_${e}`,Vr.step,r,on.step)}playBlockHit(t){const e=this.getSoundCategory(t),n=`dig/${e}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playWithCooldown(`dig_${e}`,Vr.dig,r,on.dig)}playBlockBreak(t){const n=`dig/${this.getSoundCategory(t)}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playSound(r,on.break)}playBlockPlace(t){const n=`dig/${this.getSoundCategory(t)}`,s=this.getRandomVariant(n),r=this.buildSoundPath(n,s);this.playSound(r,on.place)}playItemPickup(){const t=`${Pe}/random/pop.ogg`;this.playSound(t,on.pickup)}playSplash(){const t=Math.random()>.5?"":"2",e=`${Pe}/liquid/splash${t}.ogg`;this.playSound(e,on.splash)}playSwim(){const t=Math.floor(Math.random()*18)+1,e=`${Pe}/liquid/swim${t}.ogg`;this.playWithCooldown("swim",Vr.swim,e,on.swim)}playUIClick(){const t=`${Pe}/random/click.ogg`;this.playSound(t,on.ui)}playFallDamage(t){const e=`${Pe}/damage/fall${t?"big":"small"}.ogg`;this.playSound(e,on.fall)}playOrbPickup(){const t=`${Pe}/random/orb.ogg`;this.playSound(t,on.pickup)}preloadCommonSounds(){const t=["grass","stone","wood","sand"];for(const e of t){const n=`step/${e}`,s=`dig/${e}`,r=Gr[n]||4,a=Gr[s]||4;for(let l=1;l<=r;l++)this.getAudio(this.buildSoundPath(n,l));for(let l=1;l<=a;l++)this.getAudio(this.buildSoundPath(s,l))}this.getAudio(`${Pe}/random/pop.ogg`),this.getAudio(`${Pe}/random/click.ogg`),this.getAudio(`${Pe}/liquid/splash.ogg`)}}function ve(){return Mi.getInstance()}function st(i,t,e={}){return{id:i,name:t,isSolid:!0,isTransparent:!1,isGravityAffected:!1,needsBiomeTint:!1,isLeaves:!1,isLog:!1,isSapling:!1,isDoor:!1,isTrapdoor:!1,undergroundLayers:null,hardness:1,drops:i,dropChance:1,...e}}const Ll=new Map([[o.Air,st(o.Air,"Air",{isSolid:!1,isTransparent:!0,hardness:0,drops:null})],[o.Stone,st(o.Stone,"Stone",{hardness:1.5,undergroundLayers:[o.Stone,o.Stone]})],[o.Dirt,st(o.Dirt,"Dirt",{hardness:.5,undergroundLayers:[o.Dirt,o.Stone]})],[o.Grass,st(o.Grass,"Grass Block",{hardness:.6,needsBiomeTint:!0,drops:o.Dirt,undergroundLayers:[o.Dirt,o.Stone]})],[o.Sand,st(o.Sand,"Sand",{hardness:.5,isGravityAffected:!0,undergroundLayers:[o.Sand,o.Stone]})],[o.RedSand,st(o.RedSand,"Red Sand",{hardness:.5,isGravityAffected:!0,undergroundLayers:[o.RedSand,o.Stone]})],[o.Gravel,st(o.Gravel,"Gravel",{hardness:.6,isGravityAffected:!0,undergroundLayers:[o.Stone,o.Stone]})],[o.Water,st(o.Water,"Water",{isSolid:!1,isTransparent:!0,hardness:100,drops:null,undergroundLayers:[o.Sand,o.Stone]})],[o.Ice,st(o.Ice,"Ice",{isTransparent:!0,hardness:.5,undergroundLayers:[o.Stone,o.Stone]})],[o.PackedIce,st(o.PackedIce,"Packed Ice",{hardness:.5,undergroundLayers:[o.Stone,o.Stone]})],[o.BlueIce,st(o.BlueIce,"Blue Ice",{hardness:2.8,undergroundLayers:[o.Stone,o.Stone]})],[o.Snow,st(o.Snow,"Snow",{hardness:.1,undergroundLayers:[o.Dirt,o.Stone]})],[o.SnowBlock,st(o.SnowBlock,"Snow Block",{hardness:.2,undergroundLayers:[o.Dirt,o.Stone]})],[o.Clay,st(o.Clay,"Clay",{hardness:.6,undergroundLayers:[o.Clay,o.Dirt]})],[o.Bedrock,st(o.Bedrock,"Bedrock",{hardness:-1,drops:null,undergroundLayers:null})],[o.Podzol,st(o.Podzol,"Podzol",{hardness:.5,drops:o.Dirt,undergroundLayers:[o.Dirt,o.Stone]})],[o.Mycelium,st(o.Mycelium,"Mycelium",{hardness:.6,drops:o.Dirt,undergroundLayers:[o.Dirt,o.Stone]})],[o.Terracotta,st(o.Terracotta,"Terracotta",{hardness:1.25,undergroundLayers:[o.Terracotta,o.Stone]})],[o.OakLog,st(o.OakLog,"Oak Log",{hardness:2,isLog:!0})],[o.BirchLog,st(o.BirchLog,"Birch Log",{hardness:2,isLog:!0})],[o.SpruceLog,st(o.SpruceLog,"Spruce Log",{hardness:2,isLog:!0})],[o.JungleLog,st(o.JungleLog,"Jungle Log",{hardness:2,isLog:!0})],[o.AcaciaLog,st(o.AcaciaLog,"Acacia Log",{hardness:2,isLog:!0})],[o.DarkOakLog,st(o.DarkOakLog,"Dark Oak Log",{hardness:2,isLog:!0})],[o.CherryLog,st(o.CherryLog,"Cherry Log",{hardness:2,isLog:!0})],[o.MangroveLog,st(o.MangroveLog,"Mangrove Log",{hardness:2,isLog:!0})],[o.StrippedOakLog,st(o.StrippedOakLog,"Stripped Oak Log",{hardness:2,isLog:!0})],[o.StrippedBirchLog,st(o.StrippedBirchLog,"Stripped Birch Log",{hardness:2,isLog:!0})],[o.StrippedSpruceLog,st(o.StrippedSpruceLog,"Stripped Spruce Log",{hardness:2,isLog:!0})],[o.StrippedJungleLog,st(o.StrippedJungleLog,"Stripped Jungle Log",{hardness:2,isLog:!0})],[o.StrippedAcaciaLog,st(o.StrippedAcaciaLog,"Stripped Acacia Log",{hardness:2,isLog:!0})],[o.StrippedDarkOakLog,st(o.StrippedDarkOakLog,"Stripped Dark Oak Log",{hardness:2,isLog:!0})],[o.StrippedCherryLog,st(o.StrippedCherryLog,"Stripped Cherry Log",{hardness:2,isLog:!0})],[o.StrippedMangroveLog,st(o.StrippedMangroveLog,"Stripped Mangrove Log",{hardness:2,isLog:!0})],[o.OakLeaves,st(o.OakLeaves,"Oak Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:o.OakSapling,dropChance:.05})],[o.BirchLeaves,st(o.BirchLeaves,"Birch Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:o.BirchSapling,dropChance:.05})],[o.SpruceLeaves,st(o.SpruceLeaves,"Spruce Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:o.SpruceSapling,dropChance:.05})],[o.JungleLeaves,st(o.JungleLeaves,"Jungle Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:o.JungleSapling,dropChance:.025})],[o.AcaciaLeaves,st(o.AcaciaLeaves,"Acacia Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:o.AcaciaSapling,dropChance:.05})],[o.DarkOakLeaves,st(o.DarkOakLeaves,"Dark Oak Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:o.DarkOakSapling,dropChance:.05})],[o.CherryLeaves,st(o.CherryLeaves,"Cherry Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!1,isLeaves:!0,drops:o.CherrySapling,dropChance:.05})],[o.MangroveLeaves,st(o.MangroveLeaves,"Mangrove Leaves",{isSolid:!1,isTransparent:!0,hardness:.2,needsBiomeTint:!0,isLeaves:!0,drops:o.MangroveSapling,dropChance:.05})],[o.OakSapling,st(o.OakSapling,"Oak Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.BirchSapling,st(o.BirchSapling,"Birch Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.SpruceSapling,st(o.SpruceSapling,"Spruce Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.JungleSapling,st(o.JungleSapling,"Jungle Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.AcaciaSapling,st(o.AcaciaSapling,"Acacia Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.DarkOakSapling,st(o.DarkOakSapling,"Dark Oak Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.CherrySapling,st(o.CherrySapling,"Cherry Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.MangroveSapling,st(o.MangroveSapling,"Mangrove Sapling",{isSolid:!1,isTransparent:!0,hardness:0,isSapling:!0})],[o.OakPlanks,st(o.OakPlanks,"Oak Planks",{hardness:2})],[o.BirchPlanks,st(o.BirchPlanks,"Birch Planks",{hardness:2})],[o.SprucePlanks,st(o.SprucePlanks,"Spruce Planks",{hardness:2})],[o.JunglePlanks,st(o.JunglePlanks,"Jungle Planks",{hardness:2})],[o.AcaciaPlanks,st(o.AcaciaPlanks,"Acacia Planks",{hardness:2})],[o.DarkOakPlanks,st(o.DarkOakPlanks,"Dark Oak Planks",{hardness:2})],[o.CherryPlanks,st(o.CherryPlanks,"Cherry Planks",{hardness:2})],[o.MangrovePlanks,st(o.MangrovePlanks,"Mangrove Planks",{hardness:2})],[o.OakDoor,st(o.OakDoor,"Oak Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.BirchDoor,st(o.BirchDoor,"Birch Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.SpruceDoor,st(o.SpruceDoor,"Spruce Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.JungleDoor,st(o.JungleDoor,"Jungle Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.AcaciaDoor,st(o.AcaciaDoor,"Acacia Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.DarkOakDoor,st(o.DarkOakDoor,"Dark Oak Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.CherryDoor,st(o.CherryDoor,"Cherry Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.MangroveDoor,st(o.MangroveDoor,"Mangrove Door",{isSolid:!0,isTransparent:!0,hardness:3,isDoor:!0})],[o.OakTrapdoor,st(o.OakTrapdoor,"Oak Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.BirchTrapdoor,st(o.BirchTrapdoor,"Birch Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.SpruceTrapdoor,st(o.SpruceTrapdoor,"Spruce Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.JungleTrapdoor,st(o.JungleTrapdoor,"Jungle Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.AcaciaTrapdoor,st(o.AcaciaTrapdoor,"Acacia Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.DarkOakTrapdoor,st(o.DarkOakTrapdoor,"Dark Oak Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.CherryTrapdoor,st(o.CherryTrapdoor,"Cherry Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.MangroveTrapdoor,st(o.MangroveTrapdoor,"Mangrove Trapdoor",{isSolid:!1,isTransparent:!0,hardness:3,isTrapdoor:!0})],[o.Cactus,st(o.Cactus,"Cactus",{hardness:.4,isTransparent:!0})],[o.CactusTop,st(o.CactusTop,"Cactus Top",{hardness:.4,isTransparent:!0,drops:o.Cactus})],[o.DeadBush,st(o.DeadBush,"Dead Bush",{isSolid:!1,isTransparent:!0,hardness:0})],[o.TallGrass,st(o.TallGrass,"Tall Grass",{isSolid:!1,isTransparent:!0,hardness:0,needsBiomeTint:!0,drops:null})],[o.Fern,st(o.Fern,"Fern",{isSolid:!1,isTransparent:!0,hardness:0,needsBiomeTint:!0,drops:null})],[o.Coral,st(o.Coral,"Coral",{isSolid:!1,isTransparent:!0,hardness:0})],[o.Seagrass,st(o.Seagrass,"Seagrass",{isSolid:!1,isTransparent:!0,hardness:0,drops:null})]]);function Bn(i){const t=Ll.get(i);return t||(console.warn(`Unknown block type: ${i}, using Air properties`),Ll.get(o.Air))}function Lc(i){return Bn(i).isGravityAffected}function am(i){return Bn(i).needsBiomeTint}function Rc(i){return Bn(i).isLog}function om(i){return Bn(i).isSapling}function lm(i){return Bn(i).isDoor}function cm(i){return Bn(i).isTrapdoor}function hm(i){return Bn(i).undergroundLayers??[o.Dirt,o.Stone]}const dm=20,Wr=1;function Xr(i){return Lc(i)}class um{scene;fallingBlocks=new Map;nextId=0;blockMaterials=new Map;blockGeometry;placeBlock;removeBlock;getHeight;isSolid;getBlock;playerPosition=null;playerWidth=.6;pendingFallChecks=[];constructor(t,e,n,s,r,a){this.scene=t,this.placeBlock=e,this.removeBlock=n,this.getHeight=s,this.isSolid=r,this.getBlock=a,this.blockGeometry=new Le(Wr,Wr,Wr)}setBlockMaterials(t){this.blockMaterials=t}setPlayerPosition(t){this.playerPosition=t}spawnFallingBlock(t,e,n,s){let r=this.blockMaterials.get(s);if(!r){const c=s===o.Sand?12759680:s===o.RedSand?12479290:(s===o.Gravel,8947848);r=new en({color:c})}const a=new qt(this.blockGeometry,r);a.position.set(t,e,n),this.scene.add(a);const l={id:this.nextId++,blockType:s,mesh:a,position:new O(t,e,n),velocity:0,startY:e,sourceX:Math.floor(t),sourceZ:Math.floor(n)};this.fallingBlocks.set(l.id,l),console.log(`🪨 Spawned falling ${o[s]} at (${t}, ${e}, ${n})`)}checkAndTriggerFall(t,e,n,s){if(s===void 0&&(s=this.getBlock(t,e,n)??void 0),s===void 0||!Xr(s))return!1;const r=e-1,a=this.isSolid(t,r,n);return Array.from(this.fallingBlocks.values()).some(c=>Math.floor(c.position.x)===t&&Math.floor(c.position.z)===n&&Math.abs(c.position.y-e)<.5)||a?!1:(this.removeBlock(t,e,n),this.spawnFallingBlock(t,e,n,s),!0)}checkBlocksAbove(t,e,n){const s=e+1,r=this.getBlock(t,s,n);r!==null&&Xr(r)&&this.checkAndTriggerFall(t,s,n,r)}update(t){const e=[],n=[];for(const[s,r]of this.fallingBlocks){r.velocity-=dm*t,r.velocity=Math.max(r.velocity,-40);const a=r.position.y+r.velocity*t,l=Math.floor(r.position.x),c=Math.floor(r.position.z);let h=this.findLandingY(l,c,r.position.y);if(a<=h){const d=Math.floor(h);this.pushPlayerAway(l,d,c),this.placeBlock(l,d,c,r.blockType)?(console.log(`🪨 ${o[r.blockType]} landed at (${l}, ${d}, ${c})`),e.push({x:l,y:d,z:c,blockType:r.blockType}),ve().playBlockPlace(r.blockType),this.pendingFallChecks.push({x:l,y:d+1,z:c})):this.placeBlock(l,d+1,c,r.blockType)?(console.log(`🪨 ${o[r.blockType]} landed at elevated position (${l}, ${d+1}, ${c})`),e.push({x:l,y:d+1,z:c,blockType:r.blockType}),ve().playBlockPlace(r.blockType)):console.log(`⚠️ ${o[r.blockType]} couldn't land at (${l}, ${d}, ${c})`),this.scene.remove(r.mesh),r.mesh.geometry.dispose(),n.push(s)}else r.position.y=a,r.mesh.position.y=a,r.mesh.rotation.x+=t*.5,r.mesh.rotation.z+=t*.3}for(const s of n)this.fallingBlocks.delete(s);for(;this.pendingFallChecks.length>0;){const s=this.pendingFallChecks.shift(),r=this.getBlock(s.x,s.y,s.z);r!==null&&Xr(r)&&this.checkAndTriggerFall(s.x,s.y,s.z,r)}return e}findLandingY(t,e,n){let s=Math.floor(n);for(;s>0;){const a=s-1;if(this.isSolid(t,a,e)||Array.from(this.fallingBlocks.values()).some(c=>Math.floor(c.position.x)===t&&Math.floor(c.position.z)===e&&c.position.y<n&&c.position.y>=a))return s;s--}return this.getHeight(t,e)+1}pushPlayerAway(t,e,n){if(!this.playerPosition)return;const s=this.playerPosition.x,r=this.playerPosition.y,a=this.playerPosition.z,l=this.playerWidth/2,c=1.8,h=t,d=t+1,u=e,f=e+1,m=n,_=n+1,v=s-l,g=s+l,p=r,E=r+c,y=a-l,w=a+l,P=d>v&&h<g,L=f>p&&u<E,A=_>y&&m<w;if(P&&L&&A){const k=[{axis:"x",dist:d-v,dir:1},{axis:"x",dist:g-h,dir:-1},{axis:"z",dist:_-y,dir:1},{axis:"z",dist:w-m,dir:-1},{axis:"y",dist:f-p,dir:1}];k.sort((C,G)=>C.dist-G.dist);const M=k[0],S=M.dist+.1;M.axis==="x"?(this.playerPosition.x+=S*M.dir,console.log(`🏃 Player pushed ${M.dir>0?"+":"-"}X by ${S.toFixed(2)} to avoid falling block`)):M.axis==="z"?(this.playerPosition.z+=S*M.dir,console.log(`🏃 Player pushed ${M.dir>0?"+":"-"}Z by ${S.toFixed(2)} to avoid falling block`)):M.axis==="y"&&(this.playerPosition.y+=S,console.log(`🏃 Player pushed up by ${S.toFixed(2)} to avoid falling block`))}}getFallingBlockCount(){return this.fallingBlocks.size}hasFallingBlockAbove(t,e,n){for(const s of this.fallingBlocks.values())if(Math.floor(s.position.x)===t&&Math.floor(s.position.z)===e&&s.position.y>=n)return!0;return!1}destroy(){for(const t of this.fallingBlocks.values())this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.fallingBlocks.clear(),this.blockGeometry.dispose()}}const pm=3,fm=5,Zn=new Le(1,1,1);Zn.computeBoundingSphere();Zn.computeBoundingBox();const Pc=7/9,lo=new ds(1,1);lo.rotateX(-Math.PI/2);lo.translate(0,Pc-.5,0);function gm(){const i=new Je,t=new Float32Array([-.5,0,-.5,.5,0,.5,.5,1,.5,-.5,0,-.5,.5,1,.5,-.5,1,-.5,.5,0,.5,-.5,0,-.5,-.5,1,-.5,.5,0,.5,-.5,1,-.5,.5,1,.5,-.5,0,.5,.5,0,-.5,.5,1,-.5,-.5,0,.5,.5,1,-.5,-.5,1,.5,.5,0,-.5,-.5,0,.5,-.5,1,.5,.5,0,-.5,-.5,1,.5,.5,1,-.5]),e=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1]),n=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);return i.setAttribute("position",new Ee(t,3)),i.setAttribute("uv",new Ee(e,2)),i.setAttribute("normal",new Ee(n,3)),i}const mm=gm();function Ci(i){return lm(i)}function _m(i){return cm(i)}const vm={[o.OakDoor]:{bottom:"/textures/oak_door_bottom.png",top:"/textures/oak_door_top.png"},[o.BirchDoor]:{bottom:"/textures/birch_door_bottom.png",top:"/textures/birch_door_top.png"},[o.SpruceDoor]:{bottom:"/textures/spruce_door_bottom.png",top:"/textures/spruce_door_top.png"},[o.JungleDoor]:{bottom:"/textures/jungle_door_bottom.png",top:"/textures/jungle_door_top.png"},[o.AcaciaDoor]:{bottom:"/textures/acacia_door_bottom.png",top:"/textures/acacia_door_top.png"},[o.DarkOakDoor]:{bottom:"/textures/dark_oak_door_bottom.png",top:"/textures/dark_oak_door_top.png"},[o.CherryDoor]:{bottom:"/textures/cherry_door_bottom.png",top:"/textures/cherry_door_top.png"},[o.MangroveDoor]:{bottom:"/textures/mangrove_door_bottom.png",top:"/textures/mangrove_door_top.png"}},Wa=3/16;function xm(){const i=new Je,t=.5,e=Wa/2,n=1,s=.5-e,r=new Float32Array([-t,0,s+e,t,0,s+e,t,n,s+e,-t,0,s+e,t,n,s+e,-t,n,s+e,t,0,s-e,-t,0,s-e,-t,n,s-e,t,0,s-e,-t,n,s-e,t,n,s-e,-t,0,s-e,-t,0,s+e,-t,n,s+e,-t,0,s-e,-t,n,s+e,-t,n,s-e,t,0,s+e,t,0,s-e,t,n,s-e,t,0,s+e,t,n,s-e,t,n,s+e,-t,n,s+e,t,n,s+e,t,n,s-e,-t,n,s+e,t,n,s-e,-t,n,s-e,-t,0,s-e,t,0,s-e,t,0,s+e,-t,0,s-e,t,0,s+e,-t,0,s-e]),a=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,.4,0,.6,0,.6,1,.4,0,.6,1,.4,1,.4,0,.6,0,.6,1,.4,0,.6,1,.4,1,0,.4,1,.4,1,.6,0,.4,1,.6,0,.6,0,.4,1,.4,1,.6,0,.4,1,.6,0,.6]),l=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]);return i.setAttribute("position",new Ee(r,3)),i.setAttribute("uv",new Ee(a,2)),i.setAttribute("normal",new Ee(l,3)),i}const $r=xm();function Sm(i){const t=new Le(1,i,1);t.translate(0,i/2,0);const e=t.getAttribute("uv"),n=t.getAttribute("normal");for(let s=0;s<e.count;s++)if(Math.abs(n.getY(s))<.5){const r=e.getY(s);e.setY(s,(1-r)*i)}return e.needsUpdate=!0,t}class bm{scene;generator;textureManager;chunks=new Map;chunkData=new Map;brokenBlocks=new Map;placedBlocks=new Map;doorStates=new Map;doorMaterials=new Map;lastPlayerChunkX=-999;lastPlayerChunkZ=-999;loadRadius=pm;unloadRadius=fm;currentZoom=10;treeLOD=0;fastGraphics=!1;fallingBlockManager;playerPosition=null;constructor(t,e,n){this.scene=t,this.generator=e,this.textureManager=n,this.fallingBlockManager=new um(t,(s,r,a,l)=>this.placeBlockInternal(s,r,a,l),(s,r,a)=>this.removeBlockInternal(s,r,a),(s,r)=>this.getHeightAt(s,r),(s,r,a)=>this.isSolidAt(s,r,a),(s,r,a)=>this.getBlockTypeAt(s,r,a)),this.initFallingBlockMaterials()}initFallingBlockMaterials(){const t=new Map;t.set(o.Sand,this.textureManager.getMaterial(o.Sand)),t.set(o.Gravel,this.textureManager.getMaterial(o.Gravel)),t.set(o.RedSand,this.textureManager.getMaterial(o.RedSand)),this.fallingBlockManager.setBlockMaterials(t)}setZoom(t){this.currentZoom=t,this.updateTreeLOD()}setFastGraphics(t){this.fastGraphics=t,this.updateTreeLOD()}updateTreeLOD(){let t=0;this.fastGraphics?this.currentZoom>45?t=2:this.currentZoom>35&&(t=1):this.currentZoom>55?t=2:this.currentZoom>45&&(t=1),t!==this.treeLOD&&(this.treeLOD=t,this.applyTreeLOD())}applyTreeLOD(){}setRenderDistance(t){this.loadRadius=Math.max(2,Math.min(8,t)),this.unloadRadius=this.loadRadius+2,this.lastPlayerChunkX=-999,this.lastPlayerChunkZ=-999}getRenderDistance(){return this.loadRadius}setPlayerPosition(t){this.playerPosition=t,this.fallingBlockManager.setPlayerPosition(t)}update(t,e){const n=Math.floor(t/z),s=Math.floor(e/z);if(!(n===this.lastPlayerChunkX&&s===this.lastPlayerChunkZ)){this.lastPlayerChunkX=n,this.lastPlayerChunkZ=s;for(let r=-this.loadRadius;r<=this.loadRadius;r++)for(let a=-this.loadRadius;a<=this.loadRadius;a++){const l=n+r,c=s+a,h=`${l},${c}`;this.chunks.has(h)||this.loadChunk(l,c)}for(const[r,a]of this.chunks){const[l,c]=r.split(",").map(Number),h=Math.abs(l-n),d=Math.abs(c-s);(h>this.unloadRadius||d>this.unloadRadius)&&this.unloadChunk(r,a)}}}updateFallingBlocks(t){const e=this.fallingBlockManager.update(t);for(const n of e){const s=Math.floor(n.x/z),r=Math.floor(n.z/z);this.rebuildChunk(s,r)}}getFallingBlockCount(){return this.fallingBlockManager.getFallingBlockCount()}loadChunk(t,e){const n=`${t},${e}`,s=this.generator.generateChunk(t,e);this.chunkData.set(n,s);const r=new Ne;r.name=`chunk_${n}`;const a=t*z,l=e*z;this.createTreeMeshes(r,s,a,l),this.createTerrainMesh(r,s,a,l),this.scene.add(r),this.chunks.set(n,r)}createTerrainMesh(t,e,n,s){const r=Math.floor(n/z),a=Math.floor(s/z),l=`${r},${a}`,c=new Map,h=new Map,d=new Map,u=(m,_,v,g,p)=>{if(g===o.Air)return;const E=this.textureManager.needsBiomeTint(g)||g===o.Water,y=E?`${g}_${p}`:`${g}`;c.has(y)||(c.set(y,[]),h.set(y,g),E&&d.set(y,p)),c.get(y).push(new O(m,_,v))};for(let m=0;m<z;m++)for(let _=0;_<z;_++){const v=m*z+_,g=e.heightMap[v],p=e.topBlock[v],E=e.biomeMap[v],y=n+_,w=Math.floor(g),P=s+m,L=this.getUndergroundLayersForBlock(p);this.isBlockBroken(y,w,P)||u(y,w,P,p,E);const A=w-1;this.isBlockBroken(y,A,P)||u(y,A,P,L[0],E);const k=w-2;this.isBlockBroken(y,k,P)||u(y,k,P,L[1],E);const M=w-3;this.isBlockBroken(y,M,P)||u(y,M,P,o.Bedrock,E)}const f=this.placedBlocks.get(l);if(f)for(const[m,_]of f){const[v,g,p]=m.split(",").map(Number),E=(v%z+z)%z,w=(p%z+z)%z*z+E,P=e.biomeMap[w]||1;u(v,g,p,_,P)}for(const[m,_]of c){if(_.length===0)continue;const v=h.get(m),g=d.get(m),p=v===o.Water,E=om(v),y=Rc(v);if(v===o.Grass||v===o.Podzol||v===o.Mycelium){const M=g!==void 0?this.textureManager.getBiomeTint(g):void 0,S=this.textureManager.getInstancedMaterial(v,M),C=new Ji(Zn,S,_.length),G=new jt;_.forEach((N,$)=>{G.setPosition(N.x,N.y,N.z),C.setMatrixAt($,G)}),C.instanceMatrix.needsUpdate=!0,C.frustumCulled=!0,C.castShadow=!0,C.receiveShadow=!0,t.add(C);continue}if(y){const M=this.textureManager.getInstancedMaterial(v),S=new Ji(Zn,M,_.length),C=new jt;_.forEach((G,N)=>{C.setPosition(G.x,G.y,G.z),S.setMatrixAt(N,C)}),S.instanceMatrix.needsUpdate=!0,S.frustumCulled=!0,S.castShadow=!0,S.receiveShadow=!1,t.add(S);continue}if(E){const M=this.textureManager.getSaplingMaterial(v);for(const S of _){const C=new qt(mm,M);C.position.set(S.x,S.y,S.z),t.add(C)}continue}if(Ci(v)){for(const M of _){const S=this.createDoorMesh(v,M.x,M.y,M.z);t.add(S)}continue}if(_m(v)){const M=this.textureManager.getSaplingMaterial(v);for(const S of _){const C=new Le(1,.1875,1);C.translate(0,3/32,0);const G=new qt(C,M);G.position.set(S.x,S.y,S.z),t.add(G)}continue}let P;p?P=this.textureManager.getWaterMaterial(g):g!==void 0?P=this.textureManager.getInstancedLeavesMaterial(v,g):P=this.textureManager.getInstancedMaterial(v);const L=p?lo:Zn,A=new Ji(L,P,_.length),k=new jt;_.forEach((M,S)=>{k.setPosition(M.x,M.y,M.z),A.setMatrixAt(S,k)}),A.instanceMatrix.needsUpdate=!0,A.frustumCulled=!0,A.castShadow=!0,A.receiveShadow=!0,p?A.renderOrder=0:g!==void 0&&(A.renderOrder=2),t.add(A)}}getUndergroundLayersForBlock(t){return hm(t)}createTreeMeshes(t,e,n,s){if(!e.trees||e.trees.length===0)return;const r=new Set,a=new Map,l=[];for(const h of e.trees){const d=h.z*z+h.x,u=e.heightMap[d],f=e.biomeMap[d],m=js[h.type],_=Zs[h.type],v=n+h.x,g=u+1,p=s+h.z;if(h.blocks&&h.blocks.length>0&&h.blocks[0].type==="cactus"){const E=h.blocks.filter(y=>y.type==="cactus").length;if(E>0){const y=this.textureManager.getCactusMaterials(),w=Sm(E),P=new qt(w,y);P.position.set(v,g,p),t.add(P);for(let L=0;L<E;L++)r.add(`${v},${g+L},${p}`)}continue}if(h.blocks)for(const E of h.blocks){const y=v+E.dx,w=g+E.dy,P=p+E.dz,L=`${y},${w},${P}`;if(!r.has(L))if(r.add(L),E.type==="leaves"){const A=`${_}_${f}`;a.has(A)||a.set(A,[]),a.get(A).push(new O(y,w,P))}else E.type==="log"&&l.push({pos:new O(y,w,P),logType:m})}}for(const[h,d]of a){if(d.length===0)continue;const[u,f]=h.split("_"),m=parseInt(u),_=parseInt(f),v=this.textureManager.getInstancedMaterial(m,this.textureManager.getBiomeTint(_)),g=new Ji(Zn,v,d.length);g.name=`leaves_instanced_${h}`,g.renderOrder=2,g.frustumCulled=!0,g.castShadow=!0,g.receiveShadow=!1;const p=new jt;for(let E=0;E<d.length;E++){const y=d[E];p.setPosition(y.x,y.y,y.z),g.setMatrixAt(E,p)}g.instanceMatrix.needsUpdate=!0,t.add(g)}const c=new Map;for(const{pos:h,logType:d}of l)c.has(d)||c.set(d,[]),c.get(d).push(h);for(const[h,d]of c){if(d.length===0)continue;const u=this.textureManager.getInstancedMaterial(h),f=new Ji(Zn,u,d.length);f.name=`logs_instanced_${h}`,f.frustumCulled=!0,f.castShadow=!0,f.receiveShadow=!1;const m=new jt;for(let _=0;_<d.length;_++){const v=d[_];m.setPosition(v.x,v.y,v.z),f.setMatrixAt(_,m)}f.instanceMatrix.needsUpdate=!0,t.add(f)}t.updateMatrixWorld(!0)}unloadChunk(t,e){this.scene.remove(e),e.traverse(n=>{}),this.chunks.delete(t),this.chunkData.delete(t)}getHeightAt(t,e){const n=Math.floor(t),s=Math.floor(e),r=Math.floor(n/z),a=Math.floor(s/z),l=`${r},${a}`;let c=64;const h=this.chunkData.get(l);if(h){const _=(n%z+z)%z,g=(s%z+z)%z*z+_,p=h.heightMap[g];p!==void 0&&!isNaN(p)&&(c=Math.floor(p))}else{const _=this.generator.getHeightAt(n,s);c=_===void 0||isNaN(_)?64:Math.floor(_)}const d=this.placedBlocks.get(l);let u=-1/0;if(d&&d.size>0){console.log(`[getHeightAt] Checking placedMap for chunk ${l}, size=${d.size}`);for(const _ of d.keys()){const[v,g,p]=_.split(",").map(Number);console.log(`[getHeightAt] Placed block at ${_}: px=${v}, py=${g}, pz=${p}, floorX=${n}, floorZ=${s}`),v===n&&p===s&&g>u&&(u=g,console.log(`[getHeightAt] Found matching placed block at y=${g}`))}}const f=Math.max(c,u),m=c-3;for(let _=f;_>=m;_--)if(d&&d.has(`${n},${_},${s}`)||_<=c&&_>=c-3&&!this.isBlockBroken(n,_,s))return _;return c-4}getHeightAtForPlayer(t,e,n){const s=Math.floor(t),r=Math.floor(e),a=Math.floor(s/z),l=Math.floor(r/z),c=`${a},${l}`;let h=64;const d=this.chunkData.get(c);if(d){const _=(s%z+z)%z,g=(r%z+z)%z*z+_,p=d.heightMap[g];p!==void 0&&!isNaN(p)&&(h=Math.floor(p))}else{const _=this.generator.getHeightAt(s,r);h=_===void 0||isNaN(_)?64:Math.floor(_)}const f=Math.floor(n-1)+1,m=h-10;for(let _=f;_>=m;_--)if(this.isSolidBlockAt(s,_,r)&&!this.isSolidBlockAt(s,_+1,r)&&!this.isSolidBlockAt(s,_+2,r))return _;return h-4}isSolidBlockAt(t,e,n){const s=Math.floor(t),r=Math.floor(e),a=Math.floor(n),l=Math.floor(s/z),c=Math.floor(a/z),h=`${l},${c}`,d=this.placedBlocks.get(h);if(d&&d.has(`${s},${r},${a}`)){const f=d.get(`${s},${r},${a}`);if(f!==o.Water&&f!==o.Air)return!0}if(this.isBlockBroken(s,r,a))return!1;const u=this.chunkData.get(h);if(u){const f=(s%z+z)%z,_=(a%z+z)%z*z+f,v=u.heightMap[_];if(v!==void 0&&!isNaN(v)){const g=Math.floor(v);if(r<=g&&r>=g-3){const p=this.getBlockAt(s,r,a);if(p&&p!==o.Water)return!0}}}return!1}getSurfaceHeightAt(t,e){const n=this.getHeightAt(t,e);return n===void 0||isNaN(n)?64:this.getBlockAt(Math.floor(t),n,Math.floor(e))===o.Water?n+Pc-.5:n}getBlockAt(t,e,n){const s=Math.floor(t),r=Math.floor(e),a=Math.floor(n),l=Math.floor(s/z),c=Math.floor(a/z),h=`${l},${c}`,d=this.getPlacedBlock(s,r,a);if(d!==null)return d;if(this.isBlockBroken(s,r,a))return o.Air;const u=this.chunkData.get(h);if(!u)return null;const f=(s%z+z)%z,_=(a%z+z)%z*z+f,v=Math.floor(u.heightMap[_]);if(u.trees){const p=l*z,E=c*z;for(const y of u.trees){const w=y.z*z+y.x,P=u.heightMap[w],L=p+y.x,A=P+1,k=E+y.z;if(y.blocks)for(const M of y.blocks){const S=L+M.dx,C=A+M.dy,G=k+M.dz;if(S===s&&C===r&&G===a){if(M.type==="leaves")return Zs[y.type];if(M.type==="log")return js[y.type];if(M.type==="cactus")return o.Cactus}}}}if(r===v)return u.topBlock[_];const g=v-r;if(g>=1&&g<=3){const p=u.topBlock[_],E=this.getUndergroundLayersForBlock(p);if(g===1)return E[0];if(g===2)return E[1];if(g===3)return o.Bedrock}return r<=v?u.topBlock[_]:null}getChunkCount(){return this.chunks.size}removeBlock(t,e,n){const s=Math.floor(t),r=Math.floor(e),a=Math.floor(n),l=this.getBlockTypeAt(s,r,a);if(l===null||l===o.Air||l===o.Water)return null;const c=Math.floor(s/z),h=Math.floor(a/z),d=`${c},${h}`,u=`${s},${r},${a}`,f=this.placedBlocks.get(d);f&&f.has(u)?f.delete(u):(this.brokenBlocks.has(d)||this.brokenBlocks.set(d,new Set),this.brokenBlocks.get(d).add(u));const m=this.chunkData.get(d);if(!m)return null;const _=(s%z+z)%z,g=(a%z+z)%z*z+_,p=m.heightMap[g];if(r===Math.floor(p)&&(m.topBlock[g]=o.Air),m.trees)for(const E of m.trees){if(!E.blocks)continue;const y=c*z+E.x,w=h*z+E.z,P=E.z*z+E.x,L=Math.floor(m.heightMap[P])+1;for(let A=E.blocks.length-1;A>=0;A--){const k=E.blocks[A],M=y+k.dx,S=L+k.dy,C=w+k.dz;if(M===s&&S===r&&C===a){E.blocks.splice(A,1);break}}}return this.rebuildChunk(c,h),this.fallingBlockManager.checkBlocksAbove(s,r,a),l}rebuildChunk(t,e){const n=`${t},${e}`,s=this.chunkData.get(n),r=this.chunks.get(n);if(!s||!r)return;this.scene.remove(r),r.traverse(h=>{});const a=new Ne;a.name=`chunk_${n}`;const l=t*z,c=e*z;this.createTerrainMesh(a,s,l,c),this.createTreeMeshes(a,s,l,c),this.scene.add(a),this.chunks.set(n,a)}isBlockBroken(t,e,n){const s=Math.floor(t/z),r=Math.floor(n/z),a=`${s},${r}`,l=this.brokenBlocks.get(a);return l?l.has(`${Math.floor(t)},${Math.floor(e)},${Math.floor(n)}`):!1}removeBlockInternal(t,e,n){const s=Math.floor(t),r=Math.floor(e),a=Math.floor(n),l=this.getBlockTypeAt(s,r,a);if(l===null||l===o.Air||l===o.Water)return null;const c=Math.floor(s/z),h=Math.floor(a/z),d=`${c},${h}`,u=`${s},${r},${a}`,f=this.placedBlocks.get(d);f&&f.has(u)?f.delete(u):(this.brokenBlocks.has(d)||this.brokenBlocks.set(d,new Set),this.brokenBlocks.get(d).add(u));const m=this.chunkData.get(d);if(m){const _=(s%z+z)%z,g=(a%z+z)%z*z+_,p=m.heightMap[g];r===Math.floor(p)&&(m.topBlock[g]=o.Air)}return this.rebuildChunk(c,h),l}placeBlockInternal(t,e,n,s){const r=Math.floor(t),a=Math.floor(e),l=Math.floor(n);if(s===o.Air||s===o.Water)return!1;const c=this.getBlockTypeAt(r,a,l);if(c!==null&&c!==o.Air)return!1;const h=Math.floor(r/z),d=Math.floor(l/z),u=`${h},${d}`;this.placedBlocks.has(u)||this.placedBlocks.set(u,new Map);const f=`${r},${a},${l}`;this.placedBlocks.get(u).set(f,s);const m=this.brokenBlocks.get(u);return m&&m.delete(f),!0}placeBlock(t,e,n,s){const r=Math.floor(t),a=Math.floor(e),l=Math.floor(n);if(s===o.Air||s===o.Water)return!1;const c=this.getBlockTypeAt(r,a,l);if(c!==null&&c!==o.Air)return!1;if(Lc(s)){const _=a-1;if(!this.isSolidAt(r,_,l))return this.fallingBlockManager.spawnFallingBlock(r,a,l,s),!0}const h=Math.floor(r/z),d=Math.floor(l/z),u=`${h},${d}`;this.placedBlocks.has(u)||this.placedBlocks.set(u,new Map);const f=`${r},${a},${l}`;this.placedBlocks.get(u).set(f,s);const m=this.brokenBlocks.get(u);return m&&m.delete(f),this.rebuildChunk(h,d),!0}getPlacedBlock(t,e,n){const s=Math.floor(t/z),r=Math.floor(n/z),a=`${s},${r}`,l=this.placedBlocks.get(a);if(!l)return null;const c=`${Math.floor(t)},${Math.floor(e)},${Math.floor(n)}`;return l.get(c)||null}createDoorMesh(t,e,n,s){const r=new Ne,a=`${e},${n},${s}`;let l=this.doorStates.get(a);l||(l={open:!1,facing:0},this.doorStates.set(a,l));const c=vm[t];if(!c){const E=this.textureManager.getSaplingMaterial(t),y=new qt($r.clone(),E);return r.add(y),r.position.set(e,n,s),r}const h=`door_bottom_${t}`,d=`door_top_${t}`;let u=this.doorMaterials.get(h),f=this.doorMaterials.get(d);const m=new or;if(!u){const E=m.load(c.bottom);E.magFilter=ee,E.minFilter=ee,E.colorSpace=xe,u=new en({map:E,side:we,transparent:!0,alphaTest:.5}),this.doorMaterials.set(h,u)}if(!f){const E=m.load(c.top);E.magFilter=ee,E.minFilter=ee,E.colorSpace=xe,f=new en({map:E,side:we,transparent:!0,alphaTest:.5}),this.doorMaterials.set(d,f)}const _=new Ne,v=new qt($r.clone(),u);v.position.set(0,0,0),_.add(v);const g=new qt($r.clone(),f);g.position.set(0,1,0),_.add(g);const p=l.facing*Math.PI/2;return l.open?(_.position.set(-.5,0,.5-Wa/2),_.rotation.y=p-Math.PI/2,_.position.x+=.5*Math.cos(p-Math.PI/2)+.5*Math.cos(p),_.position.z+=.5*Math.sin(p-Math.PI/2)+.5*Math.sin(p)+(.5-Wa/2)):_.rotation.y=p,r.add(_),r.position.set(e,n,s),r.userData={isDoor:!0,blockType:t,posKey:a},r}toggleDoor(t,e,n){const s=Math.floor(t),r=Math.floor(e),a=Math.floor(n),l=this.getBlockTypeAt(s,r,a);if(!l||!Ci(l)){const f=this.getBlockTypeAt(s,r-1,a);return f&&Ci(f)?this.toggleDoor(s,r-1,a):!1}const c=`${s},${r},${a}`;let h=this.doorStates.get(c);h||(h={open:!1,facing:0}),h.open=!h.open,this.doorStates.set(c,h),console.log(`🚪 Door at (${s}, ${r}, ${a}) is now ${h.open?"OPEN":"CLOSED"}`);const d=Math.floor(s/z),u=Math.floor(a/z);return this.rebuildChunk(d,u),!0}isDoorOpen(t,e,n){const s=`${Math.floor(t)},${Math.floor(e)},${Math.floor(n)}`;return this.doorStates.get(s)?.open??!1}getBlockTypeAt(t,e,n){const s=Math.floor(t/z),r=Math.floor(n/z),a=`${s},${r}`,l=this.getPlacedBlock(t,e,n);if(l!==null)return l;if(this.isBlockBroken(t,e,n))return null;const c=this.chunkData.get(a);if(!c)return null;const h=(Math.floor(t)%z+z)%z,u=(Math.floor(n)%z+z)%z*z+h,f=Math.floor(c.heightMap[u]),m=Math.floor(e);if(m===f)return c.topBlock[u];const _=f-m;if(_>=1&&_<=3){const v=c.topBlock[u],g=this.getUndergroundLayersForBlock(v);if(_===1)return g[0];if(_===2)return g[1];if(_===3)return o.Bedrock}if(c.trees){for(const v of c.trees)if(v.blocks){const g=s*z+v.x,p=r*z+v.z,E=c.heightMap[v.z*z+v.x]+1;for(const y of v.blocks){const w=g+y.dx,P=E+y.dy,L=p+y.dz;if(Math.floor(t)===w&&Math.floor(e)===P&&Math.floor(n)===L){if(y.type==="log")return js[v.type];if(y.type==="leaves")return Zs[v.type];if(y.type==="cactus")return o.Cactus}}}}return null}isSolidAt(t,e,n){const s=this.getBlockTypeAt(t,e,n);if(s===null)return!1;const r=Bn(s);if(!r.isSolid)return!1;if(r.isDoor){const a=Math.floor(t),l=Math.floor(e),c=Math.floor(n),h=`${a},${l},${c}`,d=`${a},${l-1},${c}`;if((this.doorStates.get(h)||this.doorStates.get(d))?.open)return!1}return!0}checkCollision(t,e,n,s=.6,r=1.8){const a=s/2,l=[{x:t-a,y:e,z:n-a},{x:t+a,y:e,z:n-a},{x:t-a,y:e,z:n+a},{x:t+a,y:e,z:n+a},{x:t-a,y:e+1,z:n-a},{x:t+a,y:e+1,z:n-a},{x:t-a,y:e+1,z:n+a},{x:t+a,y:e+1,z:n+a}];for(const c of l)if(this.isSolidAt(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))return!0;return!1}checkHeadCollision(t,e,n,s=.6,r=1.8){const a=s/2,l=e+r,c=[{x:t-a,z:n-a},{x:t+a,z:n-a},{x:t-a,z:n+a},{x:t+a,z:n+a}];for(const h of c)if(this.isSolidAt(Math.floor(h.x),Math.floor(l),Math.floor(h.z)))return!0;return!1}canStandAt(t,e,n,s=.6){const r=s/2,a=[{x:t-r,z:n-r},{x:t+r,z:n-r},{x:t-r,z:n+r},{x:t+r,z:n+r}];for(const l of a){const h=this.getHeightAtForPlayer(l.x,l.z,e)+1,d=e-h;if(d>=-.1&&d<=.5)return!0}return!1}getStandingHeightAt(t,e,n,s=.6){const r=s/2,a=[{x:t-r,z:e-r},{x:t+r,z:e-r},{x:t-r,z:e+r},{x:t+r,z:e+r}];let l=-1/0;for(const c of a){const h=this.getHeightAtForPlayer(c.x,c.z,n);h>l&&(l=h)}return l+1}destroy(){for(const[t,e]of this.chunks)this.unloadChunk(t,e);this.fallingBlockManager.destroy()}}const Bs=10,Rl=25,Mm=.3,ym=.7;class lr{name="grounded";isCrouching=!1;enter(t){t.setJumpVelocity(0),t.setJumpProgress(0),t.setIsJumping(!1),t.setSwimmingInternal(!1),t.syncBaseY()}exit(t){this.isCrouching=!1}update(t,e){return null}handleJump(t){return this.isCrouching?null:new kc}handleCrouch(t,e){this.isCrouching=e,t.setCrouchingInternal(e)}handleWaterChange(t,e){return e?new Dc:null}getSpeedMultiplier(){return this.isCrouching?Mm:1}canJump(){return!0}canCrouch(){return!0}getDisplayName(){return this.isCrouching?"crouching":"grounded"}}class kc{name="jumping";jumpVelocity=Bs;baseY=0;terrainY=0;constructor(t=Bs){this.jumpVelocity=t}enter(t){this.jumpVelocity<=0?this.baseY=-1e3:this.baseY=t.position.y,this.terrainY=t.position.y,t.setJumpVelocity(this.jumpVelocity),t.setIsJumping(!0),t.setCrouchingInternal(!1)}exit(t){t.setIsJumping(!1),t.setJumpVelocity(0)}update(t,e){t.position.y+=this.jumpVelocity*e,this.jumpVelocity-=Rl*e,t.setJumpVelocity(this.jumpVelocity);const n=t.position.y-this.baseY,s=Bs*Bs/(2*Rl),r=Math.max(0,Math.min(1,n/s));t.setJumpProgress(r);const a=Math.max(this.baseY,this.terrainY);return t.position.y<=a&&this.jumpVelocity<0?(t.position.y=a,t.triggerLandingSquash(),new lr):null}handleJump(t){return null}handleCrouch(t,e){}handleWaterChange(t,e){return e?new Dc:null}getSpeedMultiplier(){return 1}canJump(){return!1}canCrouch(){return!1}updateBaseY(t){t>this.baseY&&(this.baseY=t)}getBaseY(){return this.baseY}setTerrainY(t){this.terrainY=t}handleCeilingHit(t,e){this.jumpVelocity>0&&(t.position.y=e,this.jumpVelocity=-.5,t.setJumpVelocity(this.jumpVelocity))}getDisplayName(){return this.jumpVelocity>0?"jumping":"falling"}}class Dc{name="swimming";enter(t){t.setSwimmingInternal(!0),t.setCrouchingInternal(!1),t.setIsJumping(!1)}exit(t){t.setSwimmingInternal(!1)}update(t,e){return null}handleJump(t){return null}handleCrouch(t,e){}handleWaterChange(t,e){return e?null:new lr}getSpeedMultiplier(){return ym}canJump(){return!1}canCrouch(){return!1}getDisplayName(){return"swimming"}}class wm{currentState;player;constructor(t,e=new lr){this.player=t,this.currentState=e,this.currentState.enter(t)}getStateName(){return this.currentState.getDisplayName()}getCurrentState(){return this.currentState}transitionTo(t){this.currentState.exit(this.player),this.currentState=t,this.currentState.enter(this.player)}update(t){const e=this.currentState.update(this.player,t);e&&this.transitionTo(e)}handleJump(){const t=this.currentState.handleJump(this.player);return t?(this.transitionTo(t),!0):!1}handleCrouch(t){this.currentState.handleCrouch(this.player,t)}handleWaterChange(t){const e=this.currentState.handleWaterChange(this.player,t);e&&this.transitionTo(e)}getSpeedMultiplier(){return this.currentState.getSpeedMultiplier()}canJump(){return this.currentState.canJump()}canCrouch(){return this.currentState.canCrouch()}forceState(t){this.transitionTo(t)}updateTerrainY(t){this.currentState.name==="jumping"&&this.currentState.setTerrainY(t)}handleFall(){return this.currentState.name==="grounded"?(this.transitionTo(new kc(0)),!0):!1}isInAir(){return this.currentState.name==="jumping"}handleCeilingHit(t){return this.currentState.name==="jumping"?(this.currentState.handleCeilingHit(this.player,t),!0):!1}getJumpVelocity(){return this.currentState.name==="jumping"?this.player.getJumpVelocity():0}}const Fs=64;function Ht(i,t,e,n){return{u:i/Fs,v:1-(t+n)/Fs,uw:e/Fs,vh:n/Fs}}const xi={head:{front:Ht(8,8,8,8),back:Ht(24,8,8,8),top:Ht(8,0,8,8),bottom:Ht(16,0,8,8),right:Ht(16,8,8,8),left:Ht(0,8,8,8)},body:{front:Ht(20,20,8,12),back:Ht(32,20,8,12),top:Ht(20,16,8,4),bottom:Ht(28,16,8,4),right:Ht(16,20,4,12),left:Ht(28,20,4,12)},rightArm:{front:Ht(44,20,4,12),back:Ht(52,20,4,12),top:Ht(44,16,4,4),bottom:Ht(48,16,4,4),right:Ht(40,20,4,12),left:Ht(48,20,4,12)},leftArm:{front:Ht(36,52,4,12),back:Ht(44,52,4,12),top:Ht(36,48,4,4),bottom:Ht(40,48,4,4),right:Ht(40,52,4,12),left:Ht(32,52,4,12)},rightLeg:{front:Ht(4,20,4,12),back:Ht(12,20,4,12),top:Ht(4,16,4,4),bottom:Ht(8,16,4,4),right:Ht(0,20,4,12),left:Ht(8,20,4,12)},leftLeg:{front:Ht(20,52,4,12),back:Ht(28,52,4,12),top:Ht(20,48,4,4),bottom:Ht(24,48,4,4),right:Ht(24,52,4,12),left:Ht(16,52,4,12)}},Em=.46634,Pl=1,kl=1,Tm=.4,Am=-2.5,Cm=.3,Dl=.15,Il=.15,Ul=.5,Lm=12,Rm=-1.8,Yr=.25,qr=4,Pm=8,km=10,Dm={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3};class Im{position;mesh;scene;stateMachine;head;body;leftArm;rightArm;leftLeg;rightLeg;shadow;limbSwing=0;limbSwingAmount=0;previousPosition;_isJumping=!1;_jumpVelocity=0;baseY=64;_jumpProgress=0;landingSquashTimer=0;_isCrouching=!1;crouchAmount=0;_isSwimming=!1;swimAmount=0;swimCycle=0;swimPose=Dm;isPunching=!1;punchProgress=0;punchTimer=0;texture=null;material=null;currentBlockType=o.Grass;footstepDistance=0;wasSwimming=!1;FOOTSTEP_INTERVAL=1.8;constructor(t,e,n){this.scene=t,this.position=new O(e,64,n),this.previousPosition=this.position.clone(),this.stateMachine=new wm(this,new lr),this.mesh=this.createPlaceholderMesh(),this.mesh.rotation.order="YXZ",this.setMeshRenderOrder(this.mesh,-5),this.mesh.position.copy(this.position),t.add(this.mesh),this.createShadow(),this.loadTexture()}async loadTexture(){return new Promise(t=>{new or().load("/texturepack/assets/minecraft/textures/entity/player/wide/steve.png",n=>{n.magFilter=ee,n.minFilter=ee,n.colorSpace=xe,this.texture=n,this.scene.remove(this.mesh),this.mesh.traverse(s=>{s instanceof qt&&(s.geometry.dispose(),s.material instanceof Ye&&s.material.dispose())}),this.mesh=this.createPlayerMesh(),this.mesh.rotation.order="YXZ",this.setMeshRenderOrder(this.mesh,-5),this.mesh.position.copy(this.position),this.scene.add(this.mesh),t()},void 0,()=>{console.warn("Failed to load Steve texture, using placeholder colors"),t()})})}createPlaceholderMesh(){const t=new Ne,e=new en({color:13014380}),n=new en({color:47288}),s=new en({color:3881912}),r=new en({color:4863784}),a=1.62/32,l=new Le(8*a,8*a,8*a);this.head=new qt(l,e),this.head.position.y=24*a+4*a,t.add(this.head);const c=new Le(8.2*a,2*a,8.2*a),h=new qt(c,r);h.position.y=29*a,t.add(h);const d=new Le(8*a,12*a,4*a);return this.body=new qt(d,n),this.body.position.y=12*a+6*a,t.add(this.body),this.rightArm=this.createLimbGroup(4*a,12*a,4*a,e),this.rightArm.position.set(-6*a,24*a,0),t.add(this.rightArm),this.leftArm=this.createLimbGroup(4*a,12*a,4*a,e),this.leftArm.position.set(6*a,24*a,0),t.add(this.leftArm),this.rightLeg=this.createLimbGroup(4*a,12*a,4*a,s),this.rightLeg.position.set(-2*a,12*a,0),t.add(this.rightLeg),this.leftLeg=this.createLimbGroup(4*a,12*a,4*a,s),this.leftLeg.position.set(2*a,12*a,0),t.add(this.leftLeg),t}createPlayerMesh(){const t=new Ne,e=1.62/32,n=this.texture?new en({map:this.texture,transparent:!0}):new en({color:13014380});this.material=n;const s=new en({color:47288}),r=new en({color:3881912}),a=this.createTexturedBox(8*e,8*e,8*e,xi.head);this.head=new qt(a,(this.texture,n)),this.head.position.y=24*e+4*e,t.add(this.head);const l=this.createTexturedBox(8*e,12*e,4*e,xi.body);return this.body=new qt(l,this.texture?n:s),this.body.position.y=12*e+6*e,t.add(this.body),this.rightArm=this.createTexturedLimbGroup(4*e,12*e,4*e,xi.rightArm,(this.texture,n)),this.rightArm.position.set(-6*e,24*e,0),t.add(this.rightArm),this.leftArm=this.createTexturedLimbGroup(4*e,12*e,4*e,xi.leftArm,(this.texture,n)),this.leftArm.position.set(6*e,24*e,0),t.add(this.leftArm),this.rightLeg=this.createTexturedLimbGroup(4*e,12*e,4*e,xi.rightLeg,this.texture?n:r),this.rightLeg.position.set(-2*e,12*e,0),t.add(this.rightLeg),this.leftLeg=this.createTexturedLimbGroup(4*e,12*e,4*e,xi.leftLeg,this.texture?n:r),this.leftLeg.position.set(2*e,12*e,0),t.add(this.leftLeg),t}setMeshRenderOrder(t,e){t.renderOrder=e,t.traverse(n=>{n.renderOrder=e})}createShadow(){this.shadow&&(this.scene.remove(this.shadow),this.shadow.geometry.dispose(),this.shadow.material instanceof Ye&&this.shadow.material.dispose());const t=new ar(.4,16),e=new pe({color:0,transparent:!0,opacity:.3});this.shadow=new qt(t,e),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.set(this.position.x,this.baseY+.01,this.position.z),this.scene.add(this.shadow)}createLimbGroup(t,e,n,s){const r=new Ne,a=new Le(t,e,n),l=new qt(a,s);return l.position.y=-e/2,r.add(l),r}createTexturedLimbGroup(t,e,n,s,r){const a=new Ne,l=this.createTexturedBox(t,e,n,s),c=new qt(l,r);return c.position.y=-e/2,a.add(c),a}createTexturedBox(t,e,n,s){const r=new Le(t,e,n),a=r.getAttribute("uv"),l=a.array,c=[s.right,s.left,s.top,s.bottom,s.front,s.back];for(let h=0;h<6;h++){const d=c[h],u=h*8;l[u+0]=d.u,l[u+1]=d.v+d.vh,l[u+2]=d.u+d.uw,l[u+3]=d.v+d.vh,l[u+4]=d.u,l[u+5]=d.v,l[u+6]=d.u+d.uw,l[u+7]=d.v}return a.needsUpdate=!0,r}jump(){this.stateMachine.handleJump()}fall(){this.stateMachine.handleFall()}isInAir(){return this.stateMachine.isInAir()}get jumping(){return this._isJumping}setCrouching(t){this.stateMachine.handleCrouch(t)}get crouching(){return this._isCrouching}getSpeedMultiplier(){return this.stateMachine.getSpeedMultiplier()}setSwimming(t){this.stateMachine.handleWaterChange(t)}setIsJumping(t){this._isJumping=t}setJumpVelocity(t){this._jumpVelocity=t}setJumpProgress(t){this._jumpProgress=t}setCrouchingInternal(t){this._isCrouching=t}setSwimmingInternal(t){this._isSwimming=t}triggerLandingSquash(){this.landingSquashTimer=Il}getStateName(){return this.stateMachine.getStateName()}canJump(){return this.stateMachine.canJump()}canCrouch(){return this.stateMachine.canCrouch()}updateTerrainY(t){this.stateMachine.updateTerrainY(t)}hitCeiling(t){return this.stateMachine.handleCeilingHit(t)}getJumpVelocity(){return this._jumpVelocity}syncBaseY(){this.baseY=this.position.y}setSwimPose(t){this.swimPose=t}get swimming(){return this._isSwimming}punch(){this.isPunching||(this.isPunching=!0,this.punchTimer=Yr,this.punchProgress=0)}get punching(){return this.isPunching}setCurrentBlockType(t){this.currentBlockType=t}update(t){this.stateMachine.update(t),this.landingSquashTimer>0&&(this.landingSquashTimer-=t,this.landingSquashTimer<0&&(this.landingSquashTimer=0));const e=this._isCrouching?1:0;this.crouchAmount+=(e-this.crouchAmount)*Lm*t,this.crouchAmount=Math.max(0,Math.min(1,this.crouchAmount));const n=this._isSwimming?1:0;if(this.swimAmount+=(n-this.swimAmount)*km*t,this.swimAmount=Math.max(0,Math.min(1,this.swimAmount)),this.isPunching){this.punchTimer-=t;const u=Yr-this.punchTimer,f=Yr/2;u<f?this.punchProgress=u/f:this.punchProgress=1-(u-f)/f,this.punchTimer<=0&&(this.isPunching=!1,this.punchProgress=0,this.punchTimer=0)}const s=this.position.x-this.previousPosition.x,r=this.position.z-this.previousPosition.z,a=Math.sqrt(s*s+r*r),c=a/Math.max(t,.001)>.1,h=ve();if(this._isSwimming&&!this.wasSwimming&&h.playSplash(),this.wasSwimming=this._isSwimming,c&&!this._isJumping){this.footstepDistance+=a;const u=this._isCrouching?this.FOOTSTEP_INTERVAL*1.5:this.FOOTSTEP_INTERVAL;this.footstepDistance>=u&&(this.footstepDistance=0,this._isSwimming?h.playSwim():h.playFootstep(this.currentBlockType))}if(this._isSwimming&&(c?this.swimCycle+=t*qr:this.swimCycle+=t*qr*.25),c){const u=this._isCrouching?.3:1;this.limbSwing+=a*4*u}const d=c?1:0;if(this.limbSwingAmount+=(d-this.limbSwingAmount)*Tm,this.rightArm&&this.leftArm&&this.rightLeg&&this.leftLeg){const u=this.limbSwing*Em;let f=1,m=1;if(this.landingSquashTimer>0){const v=this.landingSquashTimer/Il;f=1-Dl*v,m=1+Dl*.5*v}const _=this._isJumping?Math.sin(this._jumpProgress*Math.PI):0;if(this.swimAmount>.1){const v=this.swimAmount,g=this.swimPose,p=Math.sin(this.swimCycle)*g.armStrokeAmplitude,E=Math.sin(this.swimCycle+Math.PI)*g.armStrokeAmplitude,y=-g.armForwardAngle;this.rightArm.rotation.x=y+p*v,this.leftArm.rotation.x=y+E*v,this.rightArm.rotation.z=-.15*v,this.leftArm.rotation.z=.15*v}else if(this._isJumping){const v=Am*_;this.rightArm.rotation.x=v,this.leftArm.rotation.x=v,this.rightArm.rotation.z=-.3*_,this.leftArm.rotation.z=.3*_}else if(this.crouchAmount>.5){const v=Ul*this.crouchAmount;this.rightArm.rotation.x=v,this.leftArm.rotation.x=v,this.rightArm.rotation.z=0,this.leftArm.rotation.z=0}else{const v=Math.cos(u)*Pl*this.limbSwingAmount,g=Math.cos(u+Math.PI)*Pl*this.limbSwingAmount;this.rightArm.rotation.x=v,this.leftArm.rotation.x=g,this.rightArm.rotation.z=0,this.leftArm.rotation.z=0}if(this.isPunching&&this.punchProgress>0){const v=Math.sin(this.punchProgress*Math.PI),g=Rm*v;this.rightArm.rotation.x=g,this.rightArm.rotation.z=-.2*v}if(this.swimAmount>.1){const v=this.swimCycle*(Pm/qr),g=this.swimAmount,p=this.swimPose,E=Math.sin(v)*p.legKickAmplitude,y=Math.sin(v+Math.PI)*p.legKickAmplitude;this.rightLeg.rotation.x=E*g,this.leftLeg.rotation.x=y*g,this.rightLeg.rotation.z=0,this.leftLeg.rotation.z=0}else if(this._isJumping){const v=Cm*_;this.rightLeg.rotation.x=v,this.leftLeg.rotation.x=v,this.rightLeg.rotation.z=-.15*_,this.leftLeg.rotation.z=.15*_}else{const v=this.crouchAmount>.5?kl*.5:kl;this.rightLeg.rotation.x=Math.cos(u+Math.PI)*v*this.limbSwingAmount,this.leftLeg.rotation.x=Math.cos(u)*v*this.limbSwingAmount,this.rightLeg.rotation.z=0,this.leftLeg.rotation.z=0}if(this.body&&(this.body.scale.set(m,f,m),this.swimAmount>.1?this.body.rotation.x=this.swimPose.bodyRotationX*this.swimAmount:this.crouchAmount>.01?this.body.rotation.x=Ul*this.crouchAmount:this.body.rotation.x=0),this.head)if(this.swimAmount>.1)this.head.rotation.x=this.swimPose.headRotationX*this.swimAmount,this.head.position.y=1.4175,this.head.position.z=0;else if(this._isJumping)this.head.rotation.x=-.2*_,this.head.position.y=1.4175,this.head.position.z=0;else{this.head.rotation.x=0;const p=Math.abs(Math.sin(u*2))*.02*this.limbSwingAmount,E=(1-f)*.1,y=.15*this.crouchAmount,w=.1*this.crouchAmount;this.head.position.y=1.4175+p-E-y,this.head.position.z=w}}if(this.previousPosition.set(this.position.x,this.previousPosition.y,this.position.z),this.mesh.position.copy(this.position),this.swimAmount>.01){const u=this.swimPose;this.mesh.rotation.x=u.meshRotationX*this.swimAmount,this.mesh.position.y+=u.pivotOffsetY*this.swimAmount+u.heightOffset*this.swimAmount,this.mesh.position.z-=u.pivotOffsetZ*this.swimAmount}else this.mesh.rotation.x=0;if(this.shadow&&(this.shadow.visible=!this._isSwimming),this.shadow){this.shadow.position.x=this.position.x,this.shadow.position.z=this.position.z,this.shadow.position.y=this.baseY+.01;const u=this.position.y-this.baseY,f=1,m=2,v=Math.min(u/1.25,1),g=f+(m-f)*v;this.shadow.scale.set(g,g,1);const p=this.shadow.material,E=.3,y=.15;p.opacity=E-(E-y)*v}}move(t,e){this.position.x+=t,this.position.z+=e,this.mesh.position.x=this.position.x,this.mesh.position.z=this.position.z,(t!==0||e!==0)&&(this.mesh.rotation.y=Math.atan2(t,e))}setY(t){this._isJumping||(this.position.y=t,this.baseY=t),this.mesh.position.y=this.position.y,this.shadow&&(this.shadow.position.y=this.baseY+.01)}getMesh(){return this.mesh}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(t=>{t instanceof qt&&(t.geometry.dispose(),t.material instanceof Ye&&t.material.dispose())}),this.texture&&this.texture.dispose(),this.shadow&&(this.scene.remove(this.shadow),this.shadow.geometry.dispose(),this.shadow.material instanceof Ye&&this.shadow.material.dispose())}}const Um=new Set([o.Sand,o.RedSand,o.Snow,o.SnowBlock,o.Ice,o.PackedIce,o.BlueIce,o.BirchLog,o.Clay,o.Terracotta,o.CherryLeaves]);class Om{scene;group;currentFace="top";visible=!1;currentColor=16777215;faceLines=new Map;constructor(t){this.scene=t,this.group=new Ne;const e=.505,n=new Ga({color:16777215,linewidth:2,transparent:!0,opacity:1,depthTest:!1}),s={top:[-e,e,-e,e,e,-e,e,e,-e,e,e,e,e,e,e,-e,e,e,-e,e,e,-e,e,-e],bottom:[-e,-e,-e,e,-e,-e,e,-e,-e,e,-e,e,e,-e,e,-e,-e,e,-e,-e,e,-e,-e,-e],right:[e,-e,-e,e,e,-e,e,e,-e,e,e,e,e,e,e,e,-e,e,e,-e,e,e,-e,-e],left:[-e,-e,-e,-e,e,-e,-e,e,-e,-e,e,e,-e,e,e,-e,-e,e,-e,-e,e,-e,-e,-e],front:[-e,-e,e,e,-e,e,e,-e,e,e,e,e,e,e,e,-e,e,e,-e,e,e,-e,-e,e],back:[-e,-e,-e,e,-e,-e,e,-e,-e,e,e,-e,e,e,-e,-e,e,-e,-e,e,-e,-e,-e,-e]};for(const[r,a]of Object.entries(s)){const l=new Je;l.setAttribute("position",new qe(a,3));const c=new $g(l,n.clone());c.visible=!1,c.renderOrder=999,this.faceLines.set(r,c),this.group.add(c)}this.group.visible=!1,t.add(this.group)}setPosition(t,e,n,s){this.group.position.set(t,e,n),s&&this.setFace(s)}setFace(t){this.currentFace=t;for(const[e,n]of this.faceLines)n.visible=e===t}setVisible(t){this.visible=t,this.group.visible=t,t&&this.setFace(this.currentFace)}isVisible(){return this.visible}getPosition(){return this.group.position.clone()}getFace(){return this.currentFace}setColorForBlock(t){const e=t!==null&&Um.has(t)?0:16777215;if(e!==this.currentColor){this.currentColor=e;for(const n of this.faceLines.values())n.material instanceof Ga&&n.material.color.setHex(e)}}destroy(){this.scene.remove(this.group);for(const t of this.faceLines.values())t.geometry.dispose(),t.material instanceof Ye&&t.material.dispose()}}function Nm(i){const t=Math.abs(i.x),e=Math.abs(i.y),n=Math.abs(i.z);return e>=t&&e>=n?i.y>0?"top":"bottom":t>=e&&t>=n?i.x>0?"right":"left":i.z>0?"front":"back"}const Fi=`
  @font-face {
    font-family: 'Minecraft';
    src: url('https://cdn.jsdelivr.net/gh/South-Paw/typeface-minecraft@master/files/minecraft.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/South-Paw/typeface-minecraft@master/files/minecraft.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`,se='"Minecraft", monospace';class Bm{container;visible=!1;constructor(){this.container=document.createElement("div"),this.container.className="debug-ui-3d",this.container.style.display="none",this.container.innerHTML=`
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
    `,this.addStyles(),document.body.appendChild(this.container)}addStyles(){if(!document.getElementById("minecraft-font-styles")){const e=document.createElement("style");e.id="minecraft-font-styles",e.textContent=Fi,document.head.appendChild(e)}const t=document.createElement("style");t.textContent=`
      .debug-ui-3d {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
        font-family: ${se};
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
    `,document.head.appendChild(t)}update(t){if(!this.visible)return;const e=(s,r)=>{const a=document.getElementById(s);a&&(a.textContent=r)};e("debug-fps",String(t.fps)),e("debug-chunks",String(t.chunks)),e("debug-seed",t.seed.toString(16).toUpperCase()),e("debug-position",`(${t.playerX.toFixed(0)}, ${t.playerY.toFixed(0)}, ${t.playerZ.toFixed(0)})`),e("debug-zoom",`${t.zoom.toFixed(1)}x`),e("debug-biome",t.biome),e("debug-state",t.playerState),e("debug-triangles",this.formatNumber(t.triangles)),e("debug-drawcalls",String(t.drawCalls)),e("debug-block-below",t.blockBelow||"Air"),e("debug-target",t.targetedBlock||"None");const n=performance.memory;n&&e("debug-memory",`${(n.usedJSHeapSize/1024/1024).toFixed(1)} MB`)}formatNumber(t){return t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:String(t)}toggleVisibility(){this.visible=!this.visible,this.container.style.display=this.visible?"block":"none"}destroy(){this.container.remove()}}const Ic=[];function Fm(i){Ic.push(i)}function Ks(i){const t=new O(i.sunX??50,i.sunY??100,i.sunZ??50).normalize();for(const e of Ic)i.shaderEnabled!==void 0&&e.uniforms.shaderEnabled&&(e.uniforms.shaderEnabled.value=i.shaderEnabled),i.topBrightness!==void 0&&e.uniforms.topBrightness&&(e.uniforms.topBrightness.value=i.topBrightness),i.bottomBrightness!==void 0&&e.uniforms.bottomBrightness&&(e.uniforms.bottomBrightness.value=i.bottomBrightness),i.northSouthBrightness!==void 0&&e.uniforms.northSouthBrightness&&(e.uniforms.northSouthBrightness.value=i.northSouthBrightness),i.eastWestBrightness!==void 0&&e.uniforms.eastWestBrightness&&(e.uniforms.eastWestBrightness.value=i.eastWestBrightness),i.sunBoost!==void 0&&e.uniforms.sunBoost&&(e.uniforms.sunBoost.value=i.sunBoost),e.uniforms.sunDirection&&e.uniforms.sunDirection.value.copy(t),i.heightDarkening!==void 0&&e.uniforms.heightDarkening&&(e.uniforms.heightDarkening.value=i.heightDarkening),i.depthShading!==void 0&&e.uniforms.depthShading&&(e.uniforms.depthShading.value=i.depthShading),i.baseHeight!==void 0&&e.uniforms.baseHeight&&(e.uniforms.baseHeight.value=i.baseHeight)}class zm{container;visible=!1;settings;constructor(){this.settings={shaderEnabled:!0,topBrightness:1,bottomBrightness:.4,northSouthBrightness:.7,eastWestBrightness:.75,sunBoost:.5,sunX:40,sunY:75,sunZ:55,heightDarkening:0,depthShading:0,baseHeight:64},this.container=document.createElement("div"),this.container.className="shader-debug-ui",this.container.style.display="none",this.buildUI(),this.addStyles(),document.body.appendChild(this.container),window.addEventListener("keydown",t=>{t.code==="KeyS"&&t.shiftKey&&(t.preventDefault(),this.toggleVisibility())})}buildUI(){this.container.innerHTML=`
      <div class="shader-panel">
        <div class="shader-title">🎨 Shader Debug (Shift+S)</div>
        
        <div class="shader-toggle">
          <label class="toggle-label">
            <input type="checkbox" id="shader-enabled" ${this.settings.shaderEnabled?"checked":""}>
            <span class="toggle-text">Shader Effects</span>
            <span class="toggle-status" id="shader-status">${this.settings.shaderEnabled?"ON":"OFF"}</span>
          </label>
        </div>
        
        <div class="shader-section">
          <div class="section-title">Face Brightness</div>
          
          <div class="slider-row">
            <label>Top (Y+)</label>
            <input type="range" id="shader-top" min="0" max="2.0" step="0.05" value="${this.settings.topBrightness}">
            <span class="slider-value" id="shader-top-val">${this.settings.topBrightness}</span>
          </div>
          
          <div class="slider-row">
            <label>Bottom (Y-)</label>
            <input type="range" id="shader-bottom" min="0" max="2.0" step="0.05" value="${this.settings.bottomBrightness}">
            <span class="slider-value" id="shader-bottom-val">${this.settings.bottomBrightness}</span>
          </div>
          
          <div class="slider-row">
            <label>North/South (Z)</label>
            <input type="range" id="shader-ns" min="0" max="2.0" step="0.05" value="${this.settings.northSouthBrightness}">
            <span class="slider-value" id="shader-ns-val">${this.settings.northSouthBrightness}</span>
          </div>
          
          <div class="slider-row">
            <label>East/West (X)</label>
            <input type="range" id="shader-ew" min="0" max="2.0" step="0.05" value="${this.settings.eastWestBrightness}">
            <span class="slider-value" id="shader-ew-val">${this.settings.eastWestBrightness}</span>
          </div>
        </div>
        
        <div class="shader-section">
          <div class="section-title">Sun Light</div>
          
          <div class="slider-row">
            <label>Sun Boost</label>
            <input type="range" id="shader-sun-boost" min="0" max="0.5" step="0.01" value="${this.settings.sunBoost}">
            <span class="slider-value" id="shader-sun-boost-val">${this.settings.sunBoost}</span>
          </div>
          
          <div class="slider-row">
            <label>Sun X</label>
            <input type="range" id="shader-sun-x" min="-100" max="100" step="5" value="${this.settings.sunX}">
            <span class="slider-value" id="shader-sun-x-val">${this.settings.sunX}</span>
          </div>
          
          <div class="slider-row">
            <label>Sun Y</label>
            <input type="range" id="shader-sun-y" min="0" max="200" step="5" value="${this.settings.sunY}">
            <span class="slider-value" id="shader-sun-y-val">${this.settings.sunY}</span>
          </div>
          
          <div class="slider-row">
            <label>Sun Z</label>
            <input type="range" id="shader-sun-z" min="-100" max="100" step="5" value="${this.settings.sunZ}">
            <span class="slider-value" id="shader-sun-z-val">${this.settings.sunZ}</span>
          </div>
        </div>
        
        <div class="shader-section">
          <div class="section-title">Depth Shading</div>
          
          <div class="slider-row">
            <label>Height Dark</label>
            <input type="range" id="shader-height-dark" min="0" max="1.0" step="0.05" value="${this.settings.heightDarkening}">
            <span class="slider-value" id="shader-height-dark-val">${this.settings.heightDarkening}</span>
          </div>
          
          <div class="slider-row">
            <label>Depth Shade</label>
            <input type="range" id="shader-depth-shade" min="0" max="1.0" step="0.05" value="${this.settings.depthShading}">
            <span class="slider-value" id="shader-depth-shade-val">${this.settings.depthShading}</span>
          </div>
          
          <div class="slider-row">
            <label>Base Height</label>
            <input type="range" id="shader-base-height" min="0" max="128" step="1" value="${this.settings.baseHeight}">
            <span class="slider-value" id="shader-base-height-val">${this.settings.baseHeight}</span>
          </div>
        </div>
        
        <div class="shader-actions">
          <button id="shader-reset">Reset Defaults</button>
          <button id="shader-copy">Copy Values</button>
        </div>
        
        <div class="shader-output" id="shader-output"></div>
      </div>
    `,setTimeout(()=>this.bindEvents(),0)}bindEvents(){const t=document.getElementById("shader-enabled"),e=document.getElementById("shader-status");t?.addEventListener("change",()=>{this.settings.shaderEnabled=t.checked,e&&(e.textContent=t.checked?"ON":"OFF"),Ks(this.settings)}),this.bindSlider("shader-top","topBrightness"),this.bindSlider("shader-bottom","bottomBrightness"),this.bindSlider("shader-ns","northSouthBrightness"),this.bindSlider("shader-ew","eastWestBrightness"),this.bindSlider("shader-sun-boost","sunBoost"),this.bindSlider("shader-sun-x","sunX"),this.bindSlider("shader-sun-y","sunY"),this.bindSlider("shader-sun-z","sunZ"),this.bindSlider("shader-height-dark","heightDarkening"),this.bindSlider("shader-depth-shade","depthShading"),this.bindSlider("shader-base-height","baseHeight"),document.getElementById("shader-reset")?.addEventListener("click",()=>{this.resetDefaults()}),document.getElementById("shader-copy")?.addEventListener("click",()=>{this.copyValues()})}bindSlider(t,e){const n=document.getElementById(t),s=document.getElementById(`${t}-val`);!n||!s||n.addEventListener("input",()=>{const r=parseFloat(n.value);this.settings[e]=r,s.textContent=r.toFixed(2),Ks(this.settings)})}resetDefaults(){this.settings={shaderEnabled:!0,topBrightness:1,bottomBrightness:.4,northSouthBrightness:.7,eastWestBrightness:.75,sunBoost:.5,sunX:40,sunY:75,sunZ:55,heightDarkening:0,depthShading:0,baseHeight:64};const t=document.getElementById("shader-enabled"),e=document.getElementById("shader-status");t&&(t.checked=this.settings.shaderEnabled),e&&(e.textContent=this.settings.shaderEnabled?"ON":"OFF"),this.updateSlider("shader-top",this.settings.topBrightness),this.updateSlider("shader-bottom",this.settings.bottomBrightness),this.updateSlider("shader-ns",this.settings.northSouthBrightness),this.updateSlider("shader-ew",this.settings.eastWestBrightness),this.updateSlider("shader-sun-boost",this.settings.sunBoost),this.updateSlider("shader-sun-x",this.settings.sunX),this.updateSlider("shader-sun-y",this.settings.sunY),this.updateSlider("shader-sun-z",this.settings.sunZ),this.updateSlider("shader-height-dark",this.settings.heightDarkening),this.updateSlider("shader-depth-shade",this.settings.depthShading),this.updateSlider("shader-base-height",this.settings.baseHeight),Ks(this.settings)}updateSlider(t,e){const n=document.getElementById(t),s=document.getElementById(`${t}-val`);n&&(n.value=String(e)),s&&(s.textContent=e.toFixed(2))}copyValues(){const t=`// Shader settings
const FACE_BRIGHTNESS = {
  TOP: ${this.settings.topBrightness},
  BOTTOM: ${this.settings.bottomBrightness},
  NORTH: ${this.settings.northSouthBrightness},
  SOUTH: ${this.settings.northSouthBrightness},
  EAST: ${this.settings.eastWestBrightness},
  WEST: ${this.settings.eastWestBrightness},
};

const SUN_BOOST = ${this.settings.sunBoost};
const SUN_DIRECTION = new THREE.Vector3(${this.settings.sunX}, ${this.settings.sunY}, ${this.settings.sunZ});

// Depth shading
const HEIGHT_DARKENING = ${this.settings.heightDarkening};
const DEPTH_SHADING = ${this.settings.depthShading};
const BASE_HEIGHT = ${this.settings.baseHeight};`;navigator.clipboard.writeText(t).then(()=>{const e=document.getElementById("shader-output");e&&(e.textContent="✓ Copied to clipboard!",setTimeout(()=>{e.textContent=""},2e3))})}addStyles(){if(!document.getElementById("minecraft-font-styles")){const e=document.createElement("style");e.id="minecraft-font-styles",e.textContent=Fi,document.head.appendChild(e)}const t=document.createElement("style");t.textContent=`
      .shader-debug-ui {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
        font-family: ${se};
        font-size: 11px;
        image-rendering: pixelated;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .shader-panel {
        background: rgba(0, 0, 0, 0.8);
        border: 3px solid;
        border-top-color: #555;
        border-left-color: #555;
        border-right-color: #1a1a1a;
        border-bottom-color: #1a1a1a;
        padding: 12px 16px;
        color: #fff;
        min-width: 300px;
        box-shadow: inset 1px 1px 0 rgba(255,255,255,0.1);
      }
      
      .shader-title {
        font-size: 13px;
        color: #ffff55;
        margin-bottom: 10px;
        text-shadow: 2px 2px 0 #333300;
      }
      
      .shader-toggle {
        background: rgba(0, 0, 0, 0.4);
        border: 2px solid #333;
        padding: 8px 10px;
        margin-bottom: 12px;
      }
      
      .toggle-label {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
      
      .toggle-label input[type="checkbox"] {
        width: 16px;
        height: 16px;
        cursor: pointer;
        accent-color: #55ff55;
      }
      
      .toggle-text {
        color: #fff;
        font-size: 11px;
        flex: 1;
        text-shadow: 1px 1px 0 #333;
      }
      
      .toggle-status {
        font-size: 10px;
        padding: 2px 6px;
        background: #003300;
        color: #55ff55;
        text-shadow: 1px 1px 0 #001100;
      }
      
      .toggle-label input:not(:checked) ~ .toggle-status {
        background: #330000;
        color: #ff5555;
        text-shadow: 1px 1px 0 #110000;
      }
      
      .shader-section {
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
        background: linear-gradient(to bottom, #888 0%, #666 50%, #555 100%);
        border: 2px solid;
        border-color: #aaa #444 #444 #aaa;
        cursor: pointer;
      }
      
      .slider-row input[type="range"]::-webkit-slider-thumb:hover {
        background: linear-gradient(to bottom, #7777ff 0%, #5555dd 50%, #4444cc 100%);
      }
      
      .slider-value {
        color: #55ffff;
        text-align: right;
        font-size: 10px;
        text-shadow: 1px 1px 0 #003333;
      }
      
      .shader-actions {
        display: flex;
        gap: 8px;
        margin-top: 12px;
      }
      
      .shader-actions button {
        flex: 1;
        padding: 6px 10px;
        font-family: ${se};
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
      
      .shader-actions button:hover {
        color: #ffffa0;
        background: linear-gradient(to bottom, #6686b4 0%, #5d7aa8 40%, #4a6590 50%, #5d7aa8 60%, #6686b4 100%);
      }
      
      #shader-reset {
        color: #ff5555;
      }
      
      #shader-copy {
        color: #55ff55;
      }
      
      .shader-output {
        margin-top: 8px;
        color: #55ff55;
        font-size: 10px;
        text-align: center;
        min-height: 14px;
        text-shadow: 1px 1px 0 #003300;
      }
    `,document.head.appendChild(t)}toggleVisibility(){this.visible=!this.visible,this.container.style.display=this.visible?"block":"none"}destroy(){this.container.remove()}}const Hm=new O(40,75,55).normalize(),zs={TOP:1,BOTTOM:.4,NORTH:.7,EAST:.75},Gm=`
  uniform float topBrightness;
  uniform float bottomBrightness;
  uniform float northSouthBrightness;
  uniform float eastWestBrightness;
  uniform vec3 sunDirection;
  uniform float sunBoost;
  uniform bool shaderEnabled;
  uniform float heightDarkening;
  uniform float depthShading;
  uniform float baseHeight;
  
  varying vec2 vUv;
  varying float vBrightness;
  
  // Shadow map support
  #include <common>
  #include <shadowmap_pars_vertex>
  
  void main() {
    vUv = uv;
    
    // Get world position for depth calculations
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    
    // Transform normal to world space (required for shadow bias)
    vec3 objectNormal = normal;
    vec3 transformedNormal = normalMatrix * objectNormal;
    
    // If shader disabled, use flat brightness
    if (!shaderEnabled) {
      vBrightness = 1.0;
    } else {
      // === Face-based Brightness (branchless) ===
      vec3 absNormal = abs(normal);
      
      float isYDominant = step(absNormal.x, absNormal.y) * step(absNormal.z, absNormal.y);
      float isXDominant = (1.0 - isYDominant) * step(absNormal.z, absNormal.x);
      float isZDominant = 1.0 - isYDominant - isXDominant;
      
      float isTop = step(0.0, normal.y);
      float yBrightness = mix(bottomBrightness, topBrightness, isTop);
      
      // Face brightness - uniform for isometric view (no directional divide)
      float xBrightness = eastWestBrightness;
      float zBrightness = northSouthBrightness;
      
      float brightness = isYDominant * yBrightness +
                         isXDominant * xBrightness +
                         isZDominant * zBrightness;
      
      float sunLight = max(dot(normal, sunDirection), 0.0) * sunBoost;
      brightness += sunLight;
      
      // Height-based darkening
      float heightDiff = worldPosition.y - baseHeight;
      float heightFactor = clamp(heightDiff / 10.0, -1.0, 1.0);
      brightness *= 1.0 + (heightFactor * heightDarkening * 0.5);
      
      // Isometric depth shading
      float isoDepth = (worldPosition.x + worldPosition.z) / 30.0;
      float depthFactor = clamp(isoDepth, -1.0, 1.0);
      brightness *= 0.85 + (depthFactor * depthShading * 0.35);
      
      vBrightness = max(0.15, brightness);
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    
    // Calculate shadow coordinates
    #include <shadowmap_vertex>
  }
`,Vm=`
  uniform float topBrightness;
  uniform float bottomBrightness;
  uniform float northSouthBrightness;
  uniform float eastWestBrightness;
  uniform vec3 sunDirection;
  uniform float sunBoost;
  uniform bool shaderEnabled;
  uniform float heightDarkening;
  uniform float depthShading;
  uniform float baseHeight;
  
  varying vec2 vUv;
  varying float vBrightness;
  
  // Shadow map support
  #include <common>
  #include <shadowmap_pars_vertex>
  
  void main() {
    vUv = uv;
    
    // Get world position (account for instancing)
    vec4 worldPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);
    
    // Transform normal to world space (required for shadow bias)
    vec3 objectNormal = normal;
    vec3 transformedNormal = normalMatrix * objectNormal;
    
    if (!shaderEnabled) {
      vBrightness = 1.0;
    } else {
      vec3 absNormal = abs(normal);
      
      float isYDominant = step(absNormal.x, absNormal.y) * step(absNormal.z, absNormal.y);
      float isXDominant = (1.0 - isYDominant) * step(absNormal.z, absNormal.x);
      float isZDominant = 1.0 - isYDominant - isXDominant;
      
      float isTop = step(0.0, normal.y);
      float yBrightness = mix(bottomBrightness, topBrightness, isTop);
      
      // Face brightness - uniform for isometric view (no directional divide)
      float xBrightness = eastWestBrightness;
      float zBrightness = northSouthBrightness;

      float brightness = isYDominant * yBrightness +
                         isXDominant * xBrightness +
                         isZDominant * zBrightness;
      
      float sunLight = max(dot(normal, sunDirection), 0.0) * sunBoost;
      brightness += sunLight;
      
      float heightDiff = worldPosition.y - baseHeight;
      float heightFactor = clamp(heightDiff / 10.0, -1.0, 1.0);
      brightness *= 1.0 + (heightFactor * heightDarkening * 0.5);
      
      float isoDepth = (worldPosition.x + worldPosition.z) / 30.0;
      float depthFactor = clamp(isoDepth, -1.0, 1.0);
      brightness *= 0.85 + (depthFactor * depthShading * 0.35);
      
      vBrightness = max(0.15, brightness);
    }
    
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Calculate shadow coordinates
    #include <shadowmap_vertex>
  }
`,Wm=`
  uniform sampler2D map;
  uniform vec3 color;
  uniform float opacity;
  
  varying vec2 vUv;
  varying float vBrightness;
  
  // Shadow map support
  #include <common>
  #include <packing>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  
  void main() {
    vec4 texColor = texture2D(map, vUv);
    
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
      // Don't make shadows completely black - ambient light still reaches them
      shadow = 0.5 + shadow * 0.5;
    #endif
    
    // Apply tint, brightness, and shadow
    gl_FragColor = vec4(texColor.rgb * color * vBrightness * shadow, texColor.a * opacity);
    
    // Alpha test for leaves
    if (gl_FragColor.a < 0.1) discard;
  }
`;function Ue(i={}){const{map:t=null,color:e=new Et(16777215),opacity:n=1,transparent:s=!1,side:r=wn,instanced:a=!1,sunDirection:l=Hm,sunBoost:c=.5,heightDarkening:h=0,depthShading:d=0,baseHeight:u=64}=i,f=new Tn({uniforms:Sc.merge([rt.lights,{map:{value:t},color:{value:e},opacity:{value:n},shaderEnabled:{value:!0},sunDirection:{value:l.clone().normalize()},sunBoost:{value:c},topBrightness:{value:zs.TOP},bottomBrightness:{value:zs.BOTTOM},northSouthBrightness:{value:zs.NORTH},eastWestBrightness:{value:zs.EAST},heightDarkening:{value:h},depthShading:{value:d},baseHeight:{value:u}}]),vertexShader:a?Vm:Gm,fragmentShader:Wm,transparent:s,side:r,depthWrite:!s,lights:!0});return Fm(f),f}function Xm(i,t){const e=t.clone();return e.multiplyScalar(1.8),Ue({map:i,color:e,opacity:.7,transparent:!0,side:we,instanced:!0,sunBoost:.2})}function Jr(i={}){return Ue({...i,instanced:!0})}function $m(i,t){return Ue({map:i,color:t,opacity:1,transparent:!0,side:we,instanced:!1,sunBoost:.1})}function Ym(i,t){return Ue({map:i,color:t,opacity:1,transparent:!0,side:we,instanced:!0,sunBoost:.1})}const qm={[o.Grass]:"/textures/grass_block_top.png",[o.Dirt]:"/textures/dirt.png",[o.Sand]:"/textures/sand.png",[o.Stone]:"/textures/stone.png",[o.Gravel]:"/textures/gravel.png",[o.Bedrock]:"/textures/bedrock.png",[o.Snow]:"/textures/snow.png",[o.Ice]:"/textures/ice.png",[o.PackedIce]:"/textures/packed_ice.png",[o.BlueIce]:"/textures/blue_ice.png",[o.Clay]:"/textures/clay.png",[o.Podzol]:"/textures/podzol_top.png",[o.Mycelium]:"/textures/mycelium_top.png",[o.RedSand]:"/textures/red_sand.png",[o.Terracotta]:"/textures/terracotta.png",[o.OakLog]:"/textures/oak_log.png",[o.BirchLog]:"/textures/birch_log.png",[o.SpruceLog]:"/textures/spruce_log.png",[o.JungleLog]:"/textures/jungle_log.png",[o.AcaciaLog]:"/textures/acacia_log.png",[o.DarkOakLog]:"/textures/dark_oak_log.png",[o.CherryLog]:"/textures/cherry_log.png",[o.MangroveLog]:"/textures/mangrove_log.png",[o.OakLeaves]:"/textures/oak_leaves.png",[o.BirchLeaves]:"/textures/birch_leaves.png",[o.SpruceLeaves]:"/textures/spruce_leaves.png",[o.JungleLeaves]:"/textures/jungle_leaves.png",[o.AcaciaLeaves]:"/textures/acacia_leaves.png",[o.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[o.CherryLeaves]:"/textures/cherry_leaves.png",[o.MangroveLeaves]:"/textures/mangrove_leaves.png",[o.Cactus]:"/textures/cactus_side.png",[o.OakSapling]:"/textures/oak_sapling.png",[o.BirchSapling]:"/textures/birch_sapling.png",[o.SpruceSapling]:"/textures/spruce_sapling.png",[o.JungleSapling]:"/textures/jungle_sapling.png",[o.AcaciaSapling]:"/textures/acacia_sapling.png",[o.DarkOakSapling]:"/textures/dark_oak_sapling.png",[o.CherrySapling]:"/textures/cherry_sapling.png",[o.MangroveSapling]:"/textures/mangrove_sapling.png",[o.Water]:"/textures/water_still.png",[o.OakPlanks]:"/textures/oak_planks.png",[o.BirchPlanks]:"/textures/birch_planks.png",[o.SprucePlanks]:"/textures/spruce_planks.png",[o.JunglePlanks]:"/textures/jungle_planks.png",[o.AcaciaPlanks]:"/textures/acacia_planks.png",[o.DarkOakPlanks]:"/textures/dark_oak_planks.png",[o.CherryPlanks]:"/textures/cherry_planks.png",[o.MangrovePlanks]:"/textures/mangrove_planks.png",[o.StrippedOakLog]:"/textures/stripped_oak_log.png",[o.StrippedBirchLog]:"/textures/stripped_birch_log.png",[o.StrippedSpruceLog]:"/textures/stripped_spruce_log.png",[o.StrippedJungleLog]:"/textures/stripped_jungle_log.png",[o.StrippedAcaciaLog]:"/textures/stripped_acacia_log.png",[o.StrippedDarkOakLog]:"/textures/stripped_dark_oak_log.png",[o.StrippedCherryLog]:"/textures/stripped_cherry_log.png",[o.StrippedMangroveLog]:"/textures/stripped_mangrove_log.png",[o.OakDoor]:"/textures/oak_door_bottom.png",[o.BirchDoor]:"/textures/birch_door_bottom.png",[o.SpruceDoor]:"/textures/spruce_door_bottom.png",[o.JungleDoor]:"/textures/jungle_door_bottom.png",[o.AcaciaDoor]:"/textures/acacia_door_bottom.png",[o.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[o.CherryDoor]:"/textures/cherry_door_bottom.png",[o.MangroveDoor]:"/textures/mangrove_door_bottom.png",[o.OakTrapdoor]:"/textures/oak_trapdoor.png",[o.BirchTrapdoor]:"/textures/birch_trapdoor.png",[o.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[o.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[o.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[o.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[o.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[o.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"},Ol={[o.OakLog]:"/textures/oak_log_top.png",[o.BirchLog]:"/textures/birch_log_top.png",[o.SpruceLog]:"/textures/spruce_log_top.png",[o.JungleLog]:"/textures/jungle_log_top.png",[o.AcaciaLog]:"/textures/acacia_log_top.png",[o.DarkOakLog]:"/textures/dark_oak_log_top.png",[o.CherryLog]:"/textures/cherry_log_top.png",[o.MangroveLog]:"/textures/mangrove_log_top.png",[o.Cactus]:"/textures/cactus_top.png",[o.StrippedOakLog]:"/textures/stripped_oak_log_top.png",[o.StrippedBirchLog]:"/textures/stripped_birch_log_top.png",[o.StrippedSpruceLog]:"/textures/stripped_spruce_log_top.png",[o.StrippedJungleLog]:"/textures/stripped_jungle_log_top.png",[o.StrippedAcaciaLog]:"/textures/stripped_acacia_log_top.png",[o.StrippedDarkOakLog]:"/textures/stripped_dark_oak_log_top.png",[o.StrippedCherryLog]:"/textures/stripped_cherry_log_top.png",[o.StrippedMangroveLog]:"/textures/stripped_mangrove_log_top.png"},Nl={[o.Grass]:"/textures/grass_block_side.png",[o.Podzol]:"/textures/podzol_side.png",[o.Mycelium]:"/textures/mycelium_side.png"},jr={[o.Air]:0};class Jm{loader;textures=new Map;logTopTextures=new Map;blockSideTextures=new Map;materials=new Map;constructor(){this.loader=new or}async loadTextures(){console.log("📦 Loading 3D textures...");const t=[];for(const[e,n]of Object.entries(qm)){const s=parseInt(e);t.push(this.loadTexture(s,n))}for(const[e,n]of Object.entries(Ol)){const s=parseInt(e);t.push(this.loadLogTopTexture(s,n))}for(const[e,n]of Object.entries(Nl)){const s=parseInt(e);t.push(this.loadBlockSideTexture(s,n))}await Promise.all(t),console.log(`✅ Loaded ${this.textures.size} textures + ${this.logTopTextures.size} log tops + ${this.blockSideTextures.size} block sides`)}async loadTexture(t,e){return new Promise(n=>{this.loader.load(e,s=>{s.magFilter=ee,s.minFilter=ee,s.colorSpace=xe,this.textures.set(t,s),n()},void 0,()=>{n()})})}async loadLogTopTexture(t,e){return new Promise(n=>{this.loader.load(e,s=>{s.magFilter=ee,s.minFilter=ee,s.colorSpace=xe,this.logTopTextures.set(t,s),n()},void 0,()=>{n()})})}async loadBlockSideTexture(t,e){return new Promise(n=>{this.loader.load(e,s=>{s.magFilter=ee,s.minFilter=ee,s.colorSpace=xe,this.blockSideTextures.set(t,s),n()},void 0,()=>{n()})})}isLogBlock(t){return Rc(t)||Ol[t]!==void 0}getMaterial(t,e){const n=`${t}_${e?.getHexString()||"none"}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(t),r=e||new Et(16777215);let a;if(s)a=Ue({map:s.clone(),color:r,instanced:!1});else{const l=jr[t]||8947848;a=Ue({color:new Et(l),instanced:!1})}return this.materials.set(n,a),a}getLogMaterials(t){const e=`log_materials_${t}`,n=this.materials.get(`${e}_side`),s=this.materials.get(`${e}_top`);if(n&&s)return[n,n,s,s,n,n];const r=this.textures.get(t),a=this.logTopTextures.get(t)||r,l=Ue(r?{map:r.clone(),color:new Et(16777215),instanced:!1}:{color:new Et(7033394),instanced:!1}),c=a?Ue({map:a.clone(),color:new Et(16777215),instanced:!1}):l;return this.materials.set(`${e}_side`,l),this.materials.set(`${e}_top`,c),[l,l,c,c,l,l]}hasBlockSideTexture(t){return Nl[t]!==void 0}getGrassBlockMaterials(t,e){const n=e?.getHexString()||"none",s=`grass_materials_${t}_${n}`,r=this.materials.get(`${s}_side`),a=this.materials.get(`${s}_top`);if(r&&a){const _=this.materials.get(`${s}_bottom`)||r;return[r,r,a,_,r,r]}const l=this.textures.get(t),c=this.blockSideTextures.get(t)||l,h=this.textures.get(o.Dirt),d=e||new Et(16777215),u=Ue(l?{map:l.clone(),color:d,instanced:!1}:{color:new Et(8174669),instanced:!1}),f=c?Ue({map:c.clone(),color:d,instanced:!1}):u,m=Ue(h?{map:h.clone(),color:new Et(16777215),instanced:!1}:{color:new Et(9135170),instanced:!1});return this.materials.set(`${s}_side`,f),this.materials.set(`${s}_top`,u),this.materials.set(`${s}_bottom`,m),[f,f,u,m,f,f]}getCactusMaterials(){const t="cactus_materials",e=this.materials.get(`${t}_side`),n=this.materials.get(`${t}_top`);if(e&&n)return[e,e,n,n,e,e];const s=this.textures.get(o.Cactus),r=this.logTopTextures.get(o.Cactus);let a,l;if(s){const c=s.clone();c.wrapS=rs,c.wrapT=rs,c.needsUpdate=!0,a=new pe({map:c})}else a=new pe({color:3968040});if(r){const c=r.clone();c.needsUpdate=!0,l=new pe({map:c})}else l=a;return this.materials.set(`${t}_side`,a),this.materials.set(`${t}_top`,l),[a,a,l,l,a,a]}getInstancedMaterial(t,e){const n=`instanced_${t}_${e?.getHexString()||"none"}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(t),r=e||new Et(16777215);let a;if(s)a=Jr({map:s.clone(),color:r});else{const l=jr[t]||8947848;a=Jr({color:new Et(l)})}return this.materials.set(n,a),a}getWaterMaterial(t){const e=t!==void 0?`water_${t}`:"water_default";if(this.materials.has(e))return this.materials.get(e);const n=this.textures.get(o.Water),s=t!==void 0?this.getWaterTint(t):new Et(4159204),r=Xm(n?.clone()||null,s);return this.materials.set(e,r),r}getWaterTint(t){const e={warm_ocean:45,deep_warm_ocean:46,lukewarm_ocean:47,deep_lukewarm_ocean:49,cold_ocean:43,deep_cold_ocean:44,deep_ocean:24,ocean:0,swamp:6,mangrove_swamp:51,frozen_ocean:10,deep_frozen_ocean:50},s={[e.warm_ocean]:[67,213,238],[e.deep_warm_ocean]:[67,213,238],[e.lukewarm_ocean]:[69,173,242],[e.deep_lukewarm_ocean]:[69,173,242],[e.cold_ocean]:[61,87,214],[e.deep_cold_ocean]:[61,87,214],[e.frozen_ocean]:[57,56,201],[e.deep_frozen_ocean]:[57,56,201],[e.deep_ocean]:[48,96,195],[e.ocean]:[63,118,228],[e.swamp]:[97,123,100],[e.mangrove_swamp]:[62,93,83]}[t]||[63,118,228];return new Et(s[0]/255,s[1]/255,s[2]/255)}getLeavesMaterial(t,e){const n=`leaves_${t}_${e}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(t),r=this.getBiomeTint(e),a=$m(s?.clone()||null,r);return this.materials.set(n,a),a}getInstancedLeavesMaterial(t,e){const n=`instanced_leaves_${t}_${e}`;if(this.materials.has(n))return this.materials.get(n);const s=this.textures.get(t),r=this.getBiomeTint(e),a=Ym(s?.clone()||null,r);return this.materials.set(n,a),a}getGrassMaterial(t){const e=`instanced_grass_${t}`;if(this.materials.has(e))return this.materials.get(e);const n=this.textures.get(o.Grass),s=this.getBiomeTint(t),r=Jr({map:n?.clone()||null,color:s});return this.materials.set(e,r),r}getBiomeTint(t){const e={swamp:6,mangrove_swamp:51,jungle:21,bamboo_jungle:48,sparse_jungle:23,badlands:37,wooded_badlands:38,wooded_badlands_plateau:39,eroded_badlands:165,dark_forest:29,snowy_plains:12,snowy_taiga:30,snowy_slopes:184,snowy_beach:26,ice_spikes:140,frozen_peaks:182,grove:185,snowy_mountains:13,cherry_grove:186,savanna:35,savanna_plateau:36,windswept_savanna:163,desert:2,birch_forest:27,old_growth_birch_forest:155,taiga:5,old_growth_pine_taiga:32,old_growth_spruce_taiga:160},s={[e.swamp]:[106,112,57],[e.mangrove_swamp]:[141,154,50],[e.jungle]:[89,201,60],[e.bamboo_jungle]:[89,201,60],[e.sparse_jungle]:[89,201,60],[e.badlands]:[144,129,77],[e.wooded_badlands]:[144,129,77],[e.wooded_badlands_plateau]:[144,129,77],[e.eroded_badlands]:[144,129,77],[e.dark_forest]:[80,122,50],[e.snowy_plains]:[128,180,151],[e.snowy_taiga]:[128,180,151],[e.snowy_slopes]:[128,180,151],[e.snowy_beach]:[128,180,151],[e.ice_spikes]:[128,180,151],[e.frozen_peaks]:[128,180,151],[e.grove]:[128,180,151],[e.snowy_mountains]:[128,180,151],[e.cherry_grove]:[182,219,97],[e.savanna]:[191,183,85],[e.savanna_plateau]:[191,183,85],[e.windswept_savanna]:[191,183,85],[e.desert]:[191,183,85],[e.birch_forest]:[136,183,97],[e.old_growth_birch_forest]:[136,183,97],[e.taiga]:[134,175,97],[e.old_growth_pine_taiga]:[134,175,97],[e.old_growth_spruce_taiga]:[134,175,97]}[t]||[145,189,89];return new Et(s[0]/255,s[1]/255,s[2]/255)}needsBiomeTint(t){return am(t)}getDroppedItemMaterials(t){const e=`dropped_${t}`;if(this.materials.has(e))return this.materials.get(e);const n=`dropped_array_${t}`;if(this.materials.has(`${n}_0`)){const a=[];for(let l=0;l<6;l++)a.push(this.materials.get(`${n}_${l}`));return a}if(this.hasBlockSideTexture(t))return this.createDroppedGrassBlockMaterials(t,n);if(this.isLogBlock(t))return this.createDroppedLogMaterials(t,n);const s=this.textures.get(t);let r;if(s){const a=this.cloneTextureWithSettings(s);if(this.needsBiomeTint(t)){const l=new Et(.5686274509803921,.7411764705882353,.34901960784313724);r=new pe({map:a,color:l})}else r=new pe({map:a})}else{const a=jr[t]||8947848;r=new pe({color:a})}return this.materials.set(e,r),r}cloneTextureWithSettings(t){const e=t.clone();return e.magFilter=ee,e.minFilter=ee,e.colorSpace=xe,e.needsUpdate=!0,e}createDroppedGrassBlockMaterials(t,e){const n=this.textures.get(t),s=this.blockSideTextures.get(t)||n,r=this.textures.get(o.Dirt),a=new Et(145/255,189/255,89/255),l=n?new pe({map:this.cloneTextureWithSettings(n),color:a}):new pe({color:8174669}),c=s?new pe({map:this.cloneTextureWithSettings(s)}):l,h=r?new pe({map:this.cloneTextureWithSettings(r)}):new pe({color:9135170}),d=[c,c,l,h,c,c];for(let u=0;u<6;u++)this.materials.set(`${e}_${u}`,d[u]);return d}createDroppedLogMaterials(t,e){const n=this.textures.get(t),s=this.logTopTextures.get(t)||n,r=n?new pe({map:this.cloneTextureWithSettings(n)}):new pe({color:7033394}),a=s?new pe({map:this.cloneTextureWithSettings(s)}):r,l=[r,r,a,a,r,r];for(let c=0;c<6;c++)this.materials.set(`${e}_${c}`,l[c]);return l}getSaplingMaterial(t){const e=`sapling_${t}`;if(this.materials.has(e))return this.materials.get(e);const n=this.textures.get(t);let s;if(n){const r=n.clone();r.needsUpdate=!0,s=new pe({map:r,transparent:!0,alphaTest:.1,side:we,depthWrite:!0})}else s=new pe({color:4881471,transparent:!0,side:we});return this.materials.set(e,s),s}}const jm=[o.OakSapling,o.BirchSapling,o.SpruceSapling,o.JungleSapling,o.AcaciaSapling,o.DarkOakSapling,o.CherrySapling,o.MangroveSapling,o.OakDoor,o.BirchDoor,o.SpruceDoor,o.JungleDoor,o.AcaciaDoor,o.DarkOakDoor,o.CherryDoor,o.MangroveDoor,o.OakTrapdoor,o.BirchTrapdoor,o.SpruceTrapdoor,o.JungleTrapdoor,o.AcaciaTrapdoor,o.DarkOakTrapdoor,o.CherryTrapdoor,o.MangroveTrapdoor];function Zm(i){return[o.OakLeaves,o.BirchLeaves,o.SpruceLeaves,o.JungleLeaves,o.AcaciaLeaves,o.DarkOakLeaves,o.MangroveLeaves].includes(i)?{tint:"sepia(1) saturate(3) hue-rotate(70deg)",faces:["all"]}:i===o.CherryLeaves?{tint:"sepia(1) saturate(2) hue-rotate(300deg)",faces:["all"]}:i===o.Grass?{tint:"sepia(1) saturate(2.5) hue-rotate(70deg)",faces:["top"]}:null}function Uc(i){return jm.includes(i)}function ns(i,t,e){const n=Zm(i);return n?n.faces.includes("all")||n.faces.includes("top")&&t==="top"||n.faces.includes("side")&&t!=="top"?`brightness(${e}) ${n.tint}`:`brightness(${e})`:`brightness(${e})`}const $e={top:1,front:.8,right:.6,left:.7},Km={[o.Stone]:"#7f7f7f",[o.Dirt]:"#8b6442",[o.Grass]:"#7cbc4d",[o.Sand]:"#dbd4a0",[o.RedSand]:"#b5633a",[o.Gravel]:"#847f7d",[o.Clay]:"#9da3a7",[o.Terracotta]:"#985e43",[o.Ice]:"#a5d3f3",[o.PackedIce]:"#8cb4d4",[o.BlueIce]:"#74a8d6",[o.Snow]:"#f0f0f0",[o.SnowBlock]:"#f0f0f0",[o.Bedrock]:"#3a3a3a",[o.Water]:"#3f76e4",[o.OakPlanks]:"#b8945f",[o.BirchPlanks]:"#c8b77a",[o.SprucePlanks]:"#7a5a3a",[o.JunglePlanks]:"#a8754a",[o.AcaciaPlanks]:"#ad5d32",[o.DarkOakPlanks]:"#3e2912",[o.CherryPlanks]:"#e4b4a5",[o.MangrovePlanks]:"#773535",[o.OakLog]:"#6b5232",[o.BirchLog]:"#d5cdb3",[o.SpruceLog]:"#4a3a25",[o.JungleLog]:"#5a4a2a",[o.AcaciaLog]:"#6d5040",[o.DarkOakLog]:"#3d2d1d",[o.CherryLog]:"#a87080",[o.MangroveLog]:"#5a3030",[o.StrippedOakLog]:"#b8945f",[o.StrippedBirchLog]:"#c8b77a",[o.StrippedSpruceLog]:"#7a5a3a",[o.StrippedJungleLog]:"#a8754a",[o.StrippedAcaciaLog]:"#ad5d32",[o.StrippedDarkOakLog]:"#3e2912",[o.StrippedCherryLog]:"#e4b4a5",[o.StrippedMangroveLog]:"#773535",[o.OakLeaves]:"#4a7a2b",[o.BirchLeaves]:"#5a8a3b",[o.SpruceLeaves]:"#3a5a2b",[o.JungleLeaves]:"#3a7a3b",[o.AcaciaLeaves]:"#5a8a4b",[o.DarkOakLeaves]:"#3a5a2b",[o.CherryLeaves]:"#e0a0c0",[o.MangroveLeaves]:"#4a7a4b",[o.Podzol]:"#7a5a3a",[o.Mycelium]:"#8a7a7a",[o.OakSapling]:"#5a9a3b",[o.BirchSapling]:"#6aaa4b",[o.SpruceSapling]:"#3a6a2b",[o.JungleSapling]:"#4a8a3b",[o.AcaciaSapling]:"#6a9a4b",[o.DarkOakSapling]:"#3a5a2b",[o.CherrySapling]:"#d090b0",[o.MangroveSapling]:"#4a7a4b",[o.OakDoor]:"#a58046",[o.BirchDoor]:"#d4c797",[o.SpruceDoor]:"#6b5034",[o.JungleDoor]:"#a87453",[o.AcaciaDoor]:"#9b5b3b",[o.DarkOakDoor]:"#4a321d",[o.CherryDoor]:"#e4b4a5",[o.MangroveDoor]:"#6b3030",[o.OakTrapdoor]:"#a58046",[o.BirchTrapdoor]:"#d4c797",[o.SpruceTrapdoor]:"#6b5034",[o.JungleTrapdoor]:"#a87453",[o.AcaciaTrapdoor]:"#9b5b3b",[o.DarkOakTrapdoor]:"#4a321d",[o.CherryTrapdoor]:"#e4b4a5",[o.MangroveTrapdoor]:"#6b3030",[o.Cactus]:"#5a8a3b"};function Oc(i){return Km[i]||"#808080"}class co{container;slots=[];selectedSlot=0;items=new Array(9).fill(null);selectorHighlight;static BLOCK_TEXTURES={[o.Grass]:{top:"/textures/grass_block_top.png",side:"/textures/grass_block_side.png"},[o.Podzol]:{top:"/textures/podzol_top.png",side:"/textures/podzol_side.png"},[o.Mycelium]:{top:"/textures/mycelium_top.png",side:"/textures/mycelium_side.png"},[o.Snow]:{top:"/textures/snow.png",side:"/textures/snow.png"},[o.OakLog]:{top:"/textures/oak_log_top.png",side:"/textures/oak_log.png"},[o.BirchLog]:{top:"/textures/birch_log_top.png",side:"/textures/birch_log.png"},[o.SpruceLog]:{top:"/textures/spruce_log_top.png",side:"/textures/spruce_log.png"},[o.JungleLog]:{top:"/textures/jungle_log_top.png",side:"/textures/jungle_log.png"},[o.AcaciaLog]:{top:"/textures/acacia_log_top.png",side:"/textures/acacia_log.png"},[o.DarkOakLog]:{top:"/textures/dark_oak_log_top.png",side:"/textures/dark_oak_log.png"},[o.CherryLog]:{top:"/textures/cherry_log_top.png",side:"/textures/cherry_log.png"},[o.MangroveLog]:{top:"/textures/mangrove_log_top.png",side:"/textures/mangrove_log.png"},[o.Cactus]:{top:"/textures/cactus_top.png",side:"/textures/cactus_side.png"},[o.Dirt]:"/textures/dirt.png",[o.Stone]:"/textures/stone.png",[o.Sand]:"/textures/sand.png",[o.RedSand]:"/textures/red_sand.png",[o.Gravel]:"/textures/gravel.png",[o.Clay]:"/textures/clay.png",[o.Terracotta]:"/textures/terracotta.png",[o.Ice]:"/textures/ice.png",[o.PackedIce]:"/textures/packed_ice.png",[o.BlueIce]:"/textures/blue_ice.png",[o.Water]:"/textures/water_still.png",[o.OakLeaves]:"/textures/oak_leaves.png",[o.BirchLeaves]:"/textures/birch_leaves.png",[o.SpruceLeaves]:"/textures/spruce_leaves.png",[o.JungleLeaves]:"/textures/jungle_leaves.png",[o.AcaciaLeaves]:"/textures/acacia_leaves.png",[o.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[o.CherryLeaves]:"/textures/cherry_leaves.png",[o.MangroveLeaves]:"/textures/mangrove_leaves.png",[o.OakSapling]:"/textures/oak_sapling.png",[o.BirchSapling]:"/textures/birch_sapling.png",[o.SpruceSapling]:"/textures/spruce_sapling.png",[o.JungleSapling]:"/textures/jungle_sapling.png",[o.AcaciaSapling]:"/textures/acacia_sapling.png",[o.DarkOakSapling]:"/textures/dark_oak_sapling.png",[o.CherrySapling]:"/textures/cherry_sapling.png",[o.MangroveSapling]:"/textures/mangrove_sapling.png",[o.OakPlanks]:"/textures/oak_planks.png",[o.BirchPlanks]:"/textures/birch_planks.png",[o.SprucePlanks]:"/textures/spruce_planks.png",[o.JunglePlanks]:"/textures/jungle_planks.png",[o.AcaciaPlanks]:"/textures/acacia_planks.png",[o.DarkOakPlanks]:"/textures/dark_oak_planks.png",[o.CherryPlanks]:"/textures/cherry_planks.png",[o.MangrovePlanks]:"/textures/mangrove_planks.png",[o.StrippedOakLog]:{top:"/textures/stripped_oak_log_top.png",side:"/textures/stripped_oak_log.png"},[o.StrippedBirchLog]:{top:"/textures/stripped_birch_log_top.png",side:"/textures/stripped_birch_log.png"},[o.StrippedSpruceLog]:{top:"/textures/stripped_spruce_log_top.png",side:"/textures/stripped_spruce_log.png"},[o.StrippedJungleLog]:{top:"/textures/stripped_jungle_log_top.png",side:"/textures/stripped_jungle_log.png"},[o.StrippedAcaciaLog]:{top:"/textures/stripped_acacia_log_top.png",side:"/textures/stripped_acacia_log.png"},[o.StrippedDarkOakLog]:{top:"/textures/stripped_dark_oak_log_top.png",side:"/textures/stripped_dark_oak_log.png"},[o.StrippedCherryLog]:{top:"/textures/stripped_cherry_log_top.png",side:"/textures/stripped_cherry_log.png"},[o.StrippedMangroveLog]:{top:"/textures/stripped_mangrove_log_top.png",side:"/textures/stripped_mangrove_log.png"},[o.OakDoor]:"/textures/oak_door_bottom.png",[o.BirchDoor]:"/textures/birch_door_bottom.png",[o.SpruceDoor]:"/textures/spruce_door_bottom.png",[o.JungleDoor]:"/textures/jungle_door_bottom.png",[o.AcaciaDoor]:"/textures/acacia_door_bottom.png",[o.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[o.CherryDoor]:"/textures/cherry_door_bottom.png",[o.MangroveDoor]:"/textures/mangrove_door_bottom.png",[o.OakTrapdoor]:"/textures/oak_trapdoor.png",[o.BirchTrapdoor]:"/textures/birch_trapdoor.png",[o.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[o.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[o.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[o.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[o.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[o.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"};constructor(){this.injectStyles(),this.container=this.createHotbar(),this.selectorHighlight=this.createSelectorHighlight(),this.container.appendChild(this.selectorHighlight),document.body.appendChild(this.container),this.setupKeyboardInput(),this.updateDisplay()}injectStyles(){if(!document.getElementById("minecraft-font-styles")){const e=document.createElement("style");e.id="minecraft-font-styles",e.textContent=Fi,document.head.appendChild(e)}if(document.getElementById("inventory-cube-styles"))return;const t=document.createElement("style");t.id="inventory-cube-styles",t.textContent=`
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
    `,document.head.appendChild(t)}createHotbar(){const t=document.createElement("div");t.id="hotbar",t.style.cssText=`
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
    `;for(let e=0;e<9;e++){const n=this.createSlot(e);this.slots.push(n),t.appendChild(n)}return t}createSlot(t){const e=document.createElement("div");e.className="hotbar-slot",e.dataset.index=t.toString(),e.style.cssText=`
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
    `,e.appendChild(n);const s=document.createElement("div");s.className="cube-container",s.style.cssText=`
      width: 12px;
      height: 12px;
      display: none;
      transform-style: preserve-3d;
    `,n.appendChild(s);const r=document.createElement("div");r.className="iso-cube",s.appendChild(r);const a=document.createElement("div");a.className="face face-top",r.appendChild(a);const l=document.createElement("div");l.className="face face-front",r.appendChild(l);const c=document.createElement("div");c.className="face face-right",r.appendChild(c);const h=document.createElement("div");h.className="face face-left",r.appendChild(h);const d=document.createElement("div");d.className="slot-sprite",d.style.cssText=`
      width: 12px;
      height: 12px;
      display: none;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      image-rendering: pixelated;
    `,n.appendChild(d);const u=document.createElement("span");return u.className="slot-count",u.style.cssText=`
      position: absolute;
      bottom: 1px;
      right: 2px;
      font-family: ${se};
      font-size: 6px;
      color: white;
      text-shadow: 1px 1px 0 #3f3f3f;
      pointer-events: none;
      z-index: 10;
      -webkit-font-smoothing: none;
    `,e.appendChild(u),e.addEventListener("click",()=>{this.selectSlot(t)}),e}createSelectorHighlight(){const t=document.createElement("div");return t.id="hotbar-selector",t.style.cssText=`
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
    `,t}setupKeyboardInput(){window.addEventListener("keydown",t=>{if(t.code>="Digit1"&&t.code<="Digit9"){const e=parseInt(t.code.replace("Digit",""))-1;this.selectSlot(e)}}),window.addEventListener("wheel",t=>{(t.target===document.body||t.target.tagName==="CANVAS")&&t.shiftKey&&(t.preventDefault(),t.deltaY>0?this.selectSlot((this.selectedSlot+1)%9):this.selectSlot((this.selectedSlot+8)%9))},{passive:!1})}selectSlot(t){t<0||t>8||(this.selectedSlot!==t&&ve().playUIClick(),this.selectedSlot=t,this.updateDisplay())}getSelectedSlot(){return this.selectedSlot}getSelectedItem(){return this.items[this.selectedSlot]}setItem(t,e){t<0||t>8||(this.items[t]=e,this.updateDisplay())}getItem(t){return t<0||t>8?null:this.items[t]}removeItem(t,e=1){if(t<0||t>8)return!1;const n=this.items[t];return!n||n.count<e?!1:(n.count-=e,n.count<=0&&(this.items[t]=null),this.updateDisplay(),!0)}addItem(t){let n=t.count;for(let s=0;s<9&&!(n<=0);s++){const r=this.items[s];if(r&&r.blockType===t.blockType){const a=64-r.count,l=Math.min(a,n);l>0&&(r.count+=l,n-=l)}}for(let s=0;s<9&&!(n<=0);s++)if(!this.items[s]){const r=Math.min(64,n);this.items[s]={blockType:t.blockType,count:r,name:t.name,icon:t.icon},n-=r}return this.updateDisplay(),n<t.count}removeFromSelected(t=1){const e=this.items[this.selectedSlot];if(!e)return 0;const n=Math.min(t,e.count);return e.count-=n,e.count<=0&&(this.items[this.selectedSlot]=null),this.updateDisplay(),n}hasSpaceFor(t,e=1){let s=e;for(let r=0;r<9;r++){const a=this.items[r];if(a&&a.blockType===t?s-=64-a.count:a||(s-=64),s<=0)return!0}return s<=0}getTextureConfig(t){const e=co.BLOCK_TEXTURES[t];return e?typeof e=="string"?{top:e,side:e,bottom:e}:{top:e.top,side:e.side,bottom:e.bottom||e.side}:null}updateDisplay(){this.slots.forEach((t,e)=>{const n=this.items[e],s=t.querySelector(".slot-inner"),r=s?.querySelector(".cube-container"),a=r?.querySelector(".iso-cube"),l=s?.querySelector(".slot-sprite"),c=t.querySelector(".slot-count");if(!(!r||!a||!l))if(n){const h=this.getTextureConfig(n.blockType);if(Uc(n.blockType)&&h)r.style.display="none",l.style.display="block",l.style.backgroundImage=`url(${h.side})`;else if(h){r.style.display="block",l.style.display="none";const u=a.querySelector(".face-top"),f=a.querySelector(".face-front"),m=a.querySelector(".face-right"),_=a.querySelector(".face-left");u&&(u.style.backgroundImage=`url(${h.top})`,u.style.filter=ns(n.blockType,"top",$e.top)),f&&(f.style.backgroundImage=`url(${h.side})`,f.style.filter=ns(n.blockType,"front",$e.front)),m&&(m.style.backgroundImage=`url(${h.side})`,m.style.filter=ns(n.blockType,"right",$e.right)),_&&(_.style.backgroundImage=`url(${h.side})`,_.style.filter=ns(n.blockType,"left",$e.left))}else{r.style.display="block",l.style.display="none";const u=Oc(n.blockType),f=a.querySelector(".face-top"),m=a.querySelector(".face-front"),_=a.querySelector(".face-right"),v=a.querySelector(".face-left");f&&(f.style.backgroundImage="none",f.style.backgroundColor=u,f.style.filter=`brightness(${$e.top})`),m&&(m.style.backgroundImage="none",m.style.backgroundColor=u,m.style.filter=`brightness(${$e.front})`),_&&(_.style.backgroundImage="none",_.style.backgroundColor=u,_.style.filter=`brightness(${$e.right})`),v&&(v.style.backgroundImage="none",v.style.backgroundColor=u,v.style.filter=`brightness(${$e.left})`)}n.count>1?(c.textContent=n.count.toString(),c.style.display="block"):c.style.display="none"}else r.style.display="none",l.style.display="none",c.style.display="none"}),this.updateSelectorPosition()}updateSelectorPosition(){const e=this.selectedSlot*20-2;this.selectorHighlight.style.left=`${e}px`}destroy(){this.container.remove();const t=document.getElementById("inventory-cube-styles");t&&t.remove()}}const is=.25,Qm=1.5,t_=.1,e_=2,n_=1.5,Bl=2,i_=5,s_=15,r_=300,a_=3,o_=20,Fl=.2,l_=.5,zl=64,c_=new Le(is,is,is),Nc=new ar(is*.6,8);Nc.rotateX(-Math.PI/2);const h_=new pe({color:0,transparent:!0,opacity:.3,depthWrite:!1});class d_{blockType;count;position;velocity;isPickedUp=!1;shouldDespawn=!1;mesh;scene;age=0;bobPhase=Math.random()*Math.PI*2;rotationAngle=Math.random()*Math.PI*2;groundY=0;isOnGround=!1;materials;isBeingAttracted=!1;attractionProgress=0;constructor(t,e,n){if(this.scene=t,this.blockType=e.blockType,this.count=e.count,this.position=e.position.clone(),this.materials=n,e.velocity)this.velocity=e.velocity.clone();else{const s=Math.random()*Math.PI*2,r=1.5+Math.random()*1.5;this.velocity=new O(Math.cos(s)*r,a_+Math.random()*2,Math.sin(s)*r)}this.mesh=this.createMesh(),this.mesh.position.copy(this.position),t.add(this.mesh)}createMesh(){const t=new Ne,e=new qt(c_,this.materials);e.position.y=is/2,t.add(e);const n=h_.clone(),s=new qt(Nc,n);return s.position.y=.01,s.name="shadow",t.add(s),t}update(t,e,n){if(this.age+=t,this.age>=r_){this.shouldDespawn=!0;return}const s=e.x-this.position.x,r=e.y-this.position.y,a=e.z-this.position.z,l=Math.sqrt(s*s+r*r+a*a);if(l<n_){this.isPickedUp=!0;return}if(l<Bl){this.isBeingAttracted=!0;const d=1-l/Bl;this.attractionProgress=Math.min(1,this.attractionProgress+t*2);const u=s/l,f=r/l,m=a/l,_=i_+s_*d*this.attractionProgress;this.velocity.x=u*_,this.velocity.y=f*_,this.velocity.z=m*_,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t}else this.isBeingAttracted=!1,this.attractionProgress=0,this.isOnGround||(this.velocity.y-=o_*t,this.velocity.x*=.98,this.velocity.z*=.98,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t,this.groundY=n(this.position.x,this.position.z)+1+Fl,this.position.y<=this.groundY&&(this.position.y=this.groundY,this.isOnGround=!0,this.velocity.set(0,0,0)));this.rotationAngle+=Qm*t,this.bobPhase+=e_*Math.PI*2*t,this.mesh.position.copy(this.position),this.isOnGround&&!this.isBeingAttracted&&(this.mesh.position.y+=Math.sin(this.bobPhase)*t_);const c=this.mesh.children.find(d=>d instanceof qt&&d.name!=="shadow");c&&(c.rotation.y=this.rotationAngle);const h=this.mesh.children.find(d=>d.name==="shadow");if(h&&h.material instanceof pe){const d=Math.max(0,this.position.y-this.groundY+Fl);h.material.opacity=Math.max(.1,.3-d*.1),h.position.y=-d+.01}}canMergeWith(t){return t===this||t.blockType!==this.blockType||this.count>=zl||t.isPickedUp||t.shouldDespawn?!1:this.position.distanceTo(t.position)<l_}mergeFrom(t){const e=zl-this.count,n=Math.min(e,t.count);this.count+=n,t.count-=n,t.count<=0&&(t.shouldDespawn=!0)}getPosition(){return this.position.clone()}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(t=>{t instanceof qt&&t.name==="shadow"&&t.material instanceof Ye&&t.material.dispose()})}}class u_{scene;textureManager;inventoryHUD;items=[];getGroundHeight;onItemPickup;constructor(t,e,n,s){this.scene=t,this.textureManager=e,this.inventoryHUD=n,this.getGroundHeight=s}spawnItem(t,e,n=1,s){if(t===o.Air)return null;const r=this.textureManager.getDroppedItemMaterials(t),a={blockType:t,count:n,position:e,velocity:s},l=new d_(this.scene,a,r);return this.items.push(l),l}spawnItemsFromBlock(t,e,n=1){const s=e.clone();s.y+=.5,this.spawnItem(t,s,n)}update(t,e){for(const s of this.items)s.update(t,e,this.getGroundHeight);this.mergeNearbyItems();const n=[];for(const s of this.items)s.isPickedUp?this.inventoryHUD.addItem({blockType:s.blockType,count:s.count,name:this.getBlockName(s.blockType)})?(this.onItemPickup&&this.onItemPickup(s.blockType,s.count),ve().playItemPickup(),n.push(s)):s.isPickedUp=!1:s.shouldDespawn&&n.push(s);for(const s of n){s.destroy();const r=this.items.indexOf(s);r!==-1&&this.items.splice(r,1)}}mergeNearbyItems(){for(let t=0;t<this.items.length;t++){const e=this.items[t];if(!(e.shouldDespawn||e.isPickedUp))for(let n=t+1;n<this.items.length;n++){const s=this.items[n];s.shouldDespawn||s.isPickedUp||e.canMergeWith(s)&&e.mergeFrom(s)}}}getBlockName(t){return{[o.Grass]:"Grass Block",[o.Dirt]:"Dirt",[o.Stone]:"Stone",[o.Sand]:"Sand",[o.Gravel]:"Gravel",[o.Water]:"Water",[o.Ice]:"Ice",[o.Snow]:"Snow",[o.SnowBlock]:"Snow Block",[o.Clay]:"Clay",[o.OakLog]:"Oak Log",[o.BirchLog]:"Birch Log",[o.SpruceLog]:"Spruce Log",[o.JungleLog]:"Jungle Log",[o.AcaciaLog]:"Acacia Log",[o.DarkOakLog]:"Dark Oak Log",[o.CherryLog]:"Cherry Log",[o.MangroveLog]:"Mangrove Log",[o.OakLeaves]:"Oak Leaves",[o.BirchLeaves]:"Birch Leaves",[o.SpruceLeaves]:"Spruce Leaves",[o.JungleLeaves]:"Jungle Leaves",[o.AcaciaLeaves]:"Acacia Leaves",[o.DarkOakLeaves]:"Dark Oak Leaves",[o.CherryLeaves]:"Cherry Leaves",[o.MangroveLeaves]:"Mangrove Leaves",[o.Cactus]:"Cactus",[o.Podzol]:"Podzol",[o.Mycelium]:"Mycelium",[o.PackedIce]:"Packed Ice",[o.BlueIce]:"Blue Ice",[o.RedSand]:"Red Sand",[o.Terracotta]:"Terracotta",[o.OakSapling]:"Oak Sapling",[o.BirchSapling]:"Birch Sapling",[o.SpruceSapling]:"Spruce Sapling",[o.JungleSapling]:"Jungle Sapling",[o.AcaciaSapling]:"Acacia Sapling",[o.DarkOakSapling]:"Dark Oak Sapling",[o.CherrySapling]:"Cherry Sapling",[o.MangroveSapling]:"Mangrove Propagule"}[t]||"Block"}getItemCount(){return this.items.length}destroy(){for(const t of this.items)t.destroy();this.items=[]}}const p_={[o.TallGrass]:0,[o.DeadBush]:0,[o.Fern]:0,[o.OakLeaves]:.2,[o.BirchLeaves]:.2,[o.SpruceLeaves]:.2,[o.JungleLeaves]:.2,[o.AcaciaLeaves]:.2,[o.DarkOakLeaves]:.2,[o.CherryLeaves]:.2,[o.MangroveLeaves]:.2,[o.Dirt]:.5,[o.Sand]:.5,[o.RedSand]:.5,[o.Gravel]:.6,[o.Clay]:.6,[o.Snow]:.2,[o.SnowBlock]:.2,[o.Grass]:.6,[o.Podzol]:.5,[o.Mycelium]:.6,[o.OakLog]:2,[o.BirchLog]:2,[o.SpruceLog]:2,[o.JungleLog]:2,[o.AcaciaLog]:2,[o.DarkOakLog]:2,[o.CherryLog]:2,[o.MangroveLog]:2,[o.Stone]:1.5,[o.Terracotta]:1.25,[o.Ice]:.5,[o.PackedIce]:.5,[o.BlueIce]:2.8,[o.Cactus]:.4,[o.OakSapling]:0,[o.BirchSapling]:0,[o.SpruceSapling]:0,[o.JungleSapling]:0,[o.AcaciaSapling]:0,[o.DarkOakSapling]:0,[o.CherrySapling]:0,[o.MangroveSapling]:0},f_=new Set([o.Stone,o.Terracotta,o.Ice,o.PackedIce,o.BlueIce]),g_=1,Zr=10;function m_(i){const t=p_[i]??g_;if(t===0)return 0;let e=t*1.5;return f_.has(i)&&(e*=5),e}class __{scene;breakingMesh=null;breakingOverlays=[];targetBlock=null;targetBlockType=null;breakProgress=0;breakTime=0;currentStage=-1;overlayMaterial;constructor(t){this.scene=t,this.overlayMaterial=new pe({color:0,transparent:!0,depthTest:!0,depthWrite:!1,side:we,alphaTest:.1});const e=new Le(1.002,1.002,1.002);this.breakingMesh=new qt(e,this.overlayMaterial),this.breakingMesh.visible=!1,this.breakingMesh.renderOrder=1e3,t.add(this.breakingMesh),this.loadDestroyTextures()}loadDestroyTextures(){const t=new or;for(let e=0;e<Zr;e++){const n=t.load(`/textures/destroy_stage_${e}.png`);n.magFilter=ee,n.minFilter=ee,this.breakingOverlays.push(n)}}startBreaking(t,e,n){if((!this.targetBlock||!this.targetBlock.equals(t))&&(this.targetBlock=t.clone(),this.targetBlockType=e,this.breakProgress=0,this.breakTime=m_(e),this.currentStage=0,this.breakingMesh&&(this.breakingMesh.position.copy(t),this.updateOverlayTexture(0),this.breakingMesh.visible=!0)),this.breakTime===0)return this.stopBreaking(),!0;this.breakProgress+=n/this.breakTime;const s=Math.min(Math.floor(this.breakProgress*Zr),Zr-1);return s!==this.currentStage&&s>=0&&(this.currentStage=s,this.updateOverlayTexture(s)),this.breakProgress>=1?(this.stopBreaking(),!0):!1}updateOverlayTexture(t){t>=0&&t<this.breakingOverlays.length&&(this.overlayMaterial.map=this.breakingOverlays[t],this.overlayMaterial.needsUpdate=!0)}stopBreaking(){this.targetBlock=null,this.targetBlockType=null,this.breakProgress=0,this.breakTime=0,this.currentStage=-1,this.breakingMesh&&(this.breakingMesh.visible=!1)}isBreaking(){return this.targetBlock!==null}getProgress(){return this.breakProgress}getTargetBlock(){return this.targetBlock?.clone()||null}getCurrentStage(){return this.currentStage}destroy(){this.breakingMesh&&(this.scene.remove(this.breakingMesh),this.breakingMesh.geometry.dispose()),this.overlayMaterial.dispose();for(const t of this.breakingOverlays)t.dispose()}}class v_{container;visible=!0;boundMouseMove;posX;posY;velX=0;velY=0;ACCELERATION=2e3;MAX_SPEED=600;FRICTION=8;usingGamepad=!1;constructor(){this.posX=window.innerWidth/2,this.posY=window.innerHeight/2,this.container=this.createCrosshair(),document.body.appendChild(this.container),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`,this.boundMouseMove=this.handleMouseMove.bind(this),window.addEventListener("mousemove",this.boundMouseMove),document.body.style.cursor="none"}createCrosshair(){const t=document.createElement("div");t.id="crosshair",t.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 1px;
      height: 1px;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
    `;const e=document.createElement("div");e.style.cssText=`
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
    `,t.appendChild(e),t.appendChild(n),t}handleMouseMove(t){this.visible&&(this.usingGamepad=!1,this.posX=t.clientX,this.posY=t.clientY,this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`)}updateGamepad(t,e,n){if(!this.visible)return;if(Math.abs(t)>.01||Math.abs(e)>.01){this.usingGamepad=!0;const r=t*this.MAX_SPEED,a=e*this.MAX_SPEED,l=this.ACCELERATION*n;this.velX=this.lerp(this.velX,r,Math.min(1,l/this.MAX_SPEED*3)),this.velY=this.lerp(this.velY,a,Math.min(1,l/this.MAX_SPEED*3))}else{const r=1-this.FRICTION*n;this.velX*=Math.max(0,r),this.velY*=Math.max(0,r),Math.abs(this.velX)<1&&(this.velX=0),Math.abs(this.velY)<1&&(this.velY=0)}(Math.abs(this.velX)>.1||Math.abs(this.velY)>.1)&&(this.posX=Math.max(0,Math.min(window.innerWidth,this.posX+this.velX*n)),this.posY=Math.max(0,Math.min(window.innerHeight,this.posY+this.velY*n)),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`)}lerp(t,e,n){return t+(e-t)*n}isMoving(){return Math.abs(this.velX)>1||Math.abs(this.velY)>1}moveBy(t,e){this.visible&&(Math.abs(t)<.001&&Math.abs(e)<.001||(this.usingGamepad=!0,this.posX=Math.max(0,Math.min(window.innerWidth,this.posX+t)),this.posY=Math.max(0,Math.min(window.innerHeight,this.posY+e)),this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`))}getPosition(){return{x:this.posX,y:this.posY}}isUsingGamepad(){return this.usingGamepad}centerCrosshair(){this.posX=window.innerWidth/2,this.posY=window.innerHeight/2,this.container.style.left=`${this.posX}px`,this.container.style.top=`${this.posY}px`}setVisible(t){this.visible=t,this.container.style.display=t?"block":"none"}isVisible(){return this.visible}destroy(){window.removeEventListener("mousemove",this.boundMouseMove),document.body.style.cursor="",this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}var yt=(i=>(i[i.none=-1]="none",i[i.ocean=0]="ocean",i[i.plains=1]="plains",i[i.desert=2]="desert",i[i.windswept_hills=3]="windswept_hills",i[i.forest=4]="forest",i[i.taiga=5]="taiga",i[i.swamp=6]="swamp",i[i.river=7]="river",i[i.nether_wastes=8]="nether_wastes",i[i.the_end=9]="the_end",i[i.frozen_ocean=10]="frozen_ocean",i[i.frozen_river=11]="frozen_river",i[i.snowy_plains=12]="snowy_plains",i[i.snowy_mountains=13]="snowy_mountains",i[i.mushroom_fields=14]="mushroom_fields",i[i.mushroom_field_shore=15]="mushroom_field_shore",i[i.beach=16]="beach",i[i.desert_hills=17]="desert_hills",i[i.wooded_hills=18]="wooded_hills",i[i.taiga_hills=19]="taiga_hills",i[i.mountain_edge=20]="mountain_edge",i[i.jungle=21]="jungle",i[i.jungle_hills=22]="jungle_hills",i[i.sparse_jungle=23]="sparse_jungle",i[i.deep_ocean=24]="deep_ocean",i[i.stony_shore=25]="stony_shore",i[i.snowy_beach=26]="snowy_beach",i[i.birch_forest=27]="birch_forest",i[i.birch_forest_hills=28]="birch_forest_hills",i[i.dark_forest=29]="dark_forest",i[i.snowy_taiga=30]="snowy_taiga",i[i.snowy_taiga_hills=31]="snowy_taiga_hills",i[i.old_growth_pine_taiga=32]="old_growth_pine_taiga",i[i.old_growth_pine_taiga_hills=33]="old_growth_pine_taiga_hills",i[i.windswept_forest=34]="windswept_forest",i[i.savanna=35]="savanna",i[i.savanna_plateau=36]="savanna_plateau",i[i.badlands=37]="badlands",i[i.wooded_badlands=38]="wooded_badlands",i[i.badlands_plateau=39]="badlands_plateau",i[i.small_end_islands=40]="small_end_islands",i[i.end_midlands=41]="end_midlands",i[i.end_highlands=42]="end_highlands",i[i.end_barrens=43]="end_barrens",i[i.warm_ocean=44]="warm_ocean",i[i.lukewarm_ocean=45]="lukewarm_ocean",i[i.cold_ocean=46]="cold_ocean",i[i.deep_warm_ocean=47]="deep_warm_ocean",i[i.deep_lukewarm_ocean=48]="deep_lukewarm_ocean",i[i.deep_cold_ocean=49]="deep_cold_ocean",i[i.deep_frozen_ocean=50]="deep_frozen_ocean",i[i.meadow=177]="meadow",i[i.grove=178]="grove",i[i.snowy_slopes=179]="snowy_slopes",i[i.jagged_peaks=180]="jagged_peaks",i[i.frozen_peaks=181]="frozen_peaks",i[i.stony_peaks=182]="stony_peaks",i[i.deep_dark=183]="deep_dark",i[i.mangrove_swamp=184]="mangrove_swamp",i[i.cherry_grove=185]="cherry_grove",i[i.pale_garden=186]="pale_garden",i[i.sunflower_plains=129]="sunflower_plains",i[i.flower_forest=132]="flower_forest",i[i.ice_spikes=140]="ice_spikes",i[i.old_growth_birch_forest=155]="old_growth_birch_forest",i[i.old_growth_spruce_taiga=160]="old_growth_spruce_taiga",i[i.windswept_savanna=163]="windswept_savanna",i[i.eroded_badlands=165]="eroded_badlands",i[i.bamboo_jungle=168]="bamboo_jungle",i[i.bamboo_jungle_hills=169]="bamboo_jungle_hills",i[i.soul_sand_valley=170]="soul_sand_valley",i[i.crimson_forest=171]="crimson_forest",i[i.warped_forest=172]="warped_forest",i[i.basalt_deltas=173]="basalt_deltas",i[i.dripstone_caves=174]="dripstone_caves",i[i.lush_caves=175]="lush_caves",i))(yt||{});const x_={0:[0,0,112],24:[0,0,48],10:[112,112,214],50:[64,64,144],46:[32,32,112],49:[32,32,80],45:[0,0,172],48:[0,0,128],44:[0,150,255],7:[0,0,255],11:[160,160,255],16:[250,222,85],26:[250,240,192],25:[162,162,132],1:[141,179,96],129:[181,219,136],177:[88,184,88],4:[5,102,33],132:[45,142,73],27:[48,116,68],155:[88,156,108],29:[64,81,26],185:[255,183,197],186:[213,206,199],5:[11,102,89],30:[49,85,74],32:[89,102,81],160:[69,82,61],178:[78,138,78],21:[83,123,9],168:[118,142,20],23:[98,139,23],6:[7,249,178],184:[103,53,43],2:[250,148,24],37:[217,69,21],38:[176,151,101],165:[255,109,61],35:[189,178,95],36:[167,157,100],163:[209,188,115],12:[255,255,255],140:[180,220,220],179:[168,168,168],181:[160,160,255],180:[192,192,192],182:[136,136,136],3:[96,96,96],34:[80,112,80],14:[255,0,255],8:[191,59,59],170:[94,56,48],171:[221,8,8],172:[73,144,123],173:[64,54,54],9:[128,128,255],40:[138,138,128],41:[148,148,138],42:[158,158,148],43:[118,118,108],183:[15,37,47],174:[134,96,67],175:[123,163,49]};function S_(i){return x_[i]??[128,128,128]}function b_(i){return i===0||i===24||i===10||i===50||i===46||i===49||i===45||i===48||i===44||i===47}function M_(i){return i===12||i===30||i===10||i===11||i===26||i===179||i===181||i===140||i===50||i===178}function y_(i){switch(i){case 4:case 132:case 27:case 155:case 29:case 5:case 30:case 32:case 160:case 21:case 168:case 23:case 6:case 184:case 178:case 34:case 185:case 186:case 38:return 1;case 1:case 177:case 35:case 36:case 129:return 2;default:return 0}}function w_(i){switch(i){case 6:return[106,112,57];case 184:return[141,177,39];case 21:case 168:case 23:return[89,201,60];case 37:case 38:case 165:return[144,129,77];case 29:return[80,122,50];case 185:return[182,219,136];case 186:return[163,177,157];default:return[141,179,96]}}function E_(i){switch(i){case 0:case 45:case 46:case 44:case 10:return 45;case 24:case 48:case 49:case 50:case 47:return 30;case 7:case 11:return 56;case 16:case 26:return 63;case 25:return 64;case 1:case 129:case 2:return 68;case 177:return 72;case 4:case 132:case 185:return 70;case 27:case 29:case 186:return 68;case 5:case 30:return 68;case 178:return 75;case 21:return 72;case 168:case 23:return 70;case 6:return 62;case 184:return 61;case 35:return 70;case 36:return 85;case 37:return 80;case 38:return 82;case 165:return 75;case 12:case 140:return 68;case 179:return 90;case 181:return 110;case 3:return 90;case 34:return 85;case 180:return 120;case 182:return 115;case 14:return 66;default:return 64}}const T_=512;class bn{state;constructor(t){let e=BigInt(t)^BigInt("0x9E3779B97F4A7C15");const n=()=>{e=BigInt.asUintN(64,e+BigInt("0x9E3779B97F4A7C15"));let s=e;return s=BigInt.asUintN(64,(s^s>>BigInt(30))*BigInt("0xBF58476D1CE4E5B9")),s=BigInt.asUintN(64,(s^s>>BigInt(27))*BigInt("0x94D049BB133111EB")),Number(BigInt.asUintN(32,s^s>>BigInt(31)))};this.state=[n(),n(),n(),n()]}nextInt(){const t=this.state[0]+this.state[3]>>>0,e=this.state[1]<<9>>>0;return this.state[2]^=this.state[0],this.state[3]^=this.state[1],this.state[1]^=this.state[2],this.state[0]^=this.state[3],this.state[2]^=e,this.state[3]=(this.state[3]<<11|this.state[3]>>>21)>>>0,t}nextFloat(){return(this.nextInt()>>>0)/4294967296}nextDouble(){return this.nextFloat()*2-1}nextBounded(t){return Math.floor(this.nextFloat()*t)}}class Xa{perm;originX;originY;originZ;constructor(t){this.perm=new Uint8Array(T_);for(let e=0;e<256;e++)this.perm[e]=e;for(let e=0;e<256;e++){const n=t.nextBounded(256-e)+e,s=this.perm[e];this.perm[e]=this.perm[n],this.perm[n]=s}for(let e=0;e<256;e++)this.perm[e+256]=this.perm[e];this.originX=t.nextDouble()*256,this.originY=t.nextDouble()*256,this.originZ=t.nextDouble()*256}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return e+t*(n-e)}grad(t,e,n,s){const r=t&15,a=r<8?e:n,l=r<4?n:r===12||r===14?e:s;return((r&1)===0?a:-a)+((r&2)===0?l:-l)}sample(t,e,n){const s=t+this.originX,r=e+this.originY,a=n+this.originZ,l=Math.floor(s)&255,c=Math.floor(r)&255,h=Math.floor(a)&255,d=s-Math.floor(s),u=r-Math.floor(r),f=a-Math.floor(a),m=this.fade(d),_=this.fade(u),v=this.fade(f),g=this.perm,p=g[l]+c,E=g[p]+h,y=g[p+1]+h,w=g[l+1]+c,P=g[w]+h,L=g[w+1]+h;return this.lerp(v,this.lerp(_,this.lerp(m,this.grad(g[E],d,u,f),this.grad(g[P],d-1,u,f)),this.lerp(m,this.grad(g[y],d,u-1,f),this.grad(g[L],d-1,u-1,f))),this.lerp(_,this.lerp(m,this.grad(g[E+1],d,u,f-1),this.grad(g[P+1],d-1,u,f-1)),this.lerp(m,this.grad(g[y+1],d,u-1,f-1),this.grad(g[L+1],d-1,u-1,f-1))))}sample2D(t,e){return this.sample(t,0,e)}}class Zi{octaves;lacunarity;persistence;constructor(t,e,n=2,s=.5){this.octaves=[],this.lacunarity=n,this.persistence=s;for(let r=0;r<e;r++)this.octaves.push(new Xa(t))}sample(t,e,n){let s=0,r=1,a=1,l=0;for(const c of this.octaves)s+=r*c.sample(t*a,e*a,n*a),l+=r,r*=this.persistence,a*=this.lacunarity;return s/l}sample2D(t,e){return this.sample(t,0,e)}}class ho{perm;permMod12;static GRAD3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];static F2=.5*(Math.sqrt(3)-1);static G2=(3-Math.sqrt(3))/6;constructor(t){this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);const e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;for(let n=255;n>0;n--){const s=t.nextBounded(n+1),r=e[n];e[n]=e[s],e[s]=r}for(let n=0;n<512;n++)this.perm[n]=e[n&255],this.permMod12[n]=this.perm[n]%12}dot2(t,e,n){return t[0]*e+t[1]*n}sample2D(t,e){const{F2:n,G2:s,GRAD3:r}=ho,a=(t+e)*n,l=Math.floor(t+a),c=Math.floor(e+a),h=(l+c)*s,d=l-h,u=c-h,f=t-d,m=e-u;let _,v;f>m?(_=1,v=0):(_=0,v=1);const g=f-_+s,p=m-v+s,E=f-1+2*s,y=m-1+2*s,w=l&255,P=c&255,L=this.permMod12[w+this.perm[P]],A=this.permMod12[w+_+this.perm[P+v]],k=this.permMod12[w+1+this.perm[P+1]];let M=0,S=0,C=0,G=.5-f*f-m*m;G>=0&&(G*=G,M=G*G*this.dot2(r[L],f,m));let N=.5-g*g-p*p;N>=0&&(N*=N,S=N*N*this.dot2(r[A],g,p));let $=.5-E*E-y*y;return $>=0&&($*=$,C=$*$*this.dot2(r[k],E,y)),70*(M+S+C)}}function Hl(i,t){if(i.length<2)return i[0]?.[1]??0;let e=0;for(;e<i.length-1&&i[e+1][0]<t;)e++;if(e>=i.length-1)return i[i.length-1][1];if(e<0||t<i[0][0])return i[0][1];const n=i[e][0],s=i[e+1][0],r=i[e][1],a=i[e+1][1],l=(t-n)/(s-n),c=l*l*(3-2*l);return r+(a-r)*c}class A_{temperatureNoise;humidityNoise;continentalnessNoise;erosionNoise;weirdnessNoise;shiftNoise;constructor(t){const e=new bn(t),n=new bn(t+1),s=new bn(t+2),r=new bn(t+3),a=new bn(t+4),l=new bn(t+5);this.temperatureNoise=new Zi(e,4,2,.5),this.humidityNoise=new Zi(n,4,2,.5),this.continentalnessNoise=new Zi(s,6,2,.5),this.erosionNoise=new Zi(r,4,2,.5),this.weirdnessNoise=new Zi(a,4,2,.5),this.shiftNoise=new ho(l)}sampleClimate(t,e,n=0){const r=this.shiftNoise.sample2D(t*.0025,e*.0025)*4,a=this.shiftNoise.sample2D(t*.0025+100,e*.0025+100)*4,l=t+r,c=e+a,h=this.temperatureNoise.sample2D(l*.0025,c*.0025),d=this.humidityNoise.sample2D(l*.0025,c*.0025),u=this.continentalnessNoise.sample2D(l*65e-5,c*65e-5),f=this.erosionNoise.sample2D(l*.00125,c*.00125),m=this.weirdnessNoise.sample2D(l*.0025,c*.0025);return{temperature:h,humidity:d,continentalness:u,erosion:f,weirdness:m,depth:n*.01}}}class Gl{seed;biomeNoise;constructor(t){this.seed=t??Math.floor(Math.random()*2147483647),this.biomeNoise=new A_(this.seed)}getBiomeAt(t,e,n,s){const r=t===1?e>>2:e,a=t===1?s>>2:s,l=t===1?n>>2:n,c=this.biomeNoise.sampleClimate(r,a,l);return this.selectBiome(c)}genBiomes2D(t,e,n,s,r,a,l=63){const c=l>>2;for(let h=0;h<a;h++)for(let d=0;d<r;d++){const u=e===1?n+d>>2:n+d,f=e===1?s+h>>2:s+h,m=this.biomeNoise.sampleClimate(u,f,c);t[h*r+d]=this.selectBiome(m)}}getTerrainHeight(t,e){const n=this.biomeNoise.sampleClimate(t>>2,e>>2),s=Hl([[-1,30],[-.6,40],[-.2,55],[0,62],[.1,65],[.3,68],[.5,75],[.7,85],[1,100]],n.continentalness),r=Hl([[-1,.6],[-.5,.8],[0,1],[.5,1.2],[1,1.5]],n.erosion),a=n.weirdness*8;return Math.max(0,Math.min(255,s*r+a))}selectBiome(t){const{temperature:e,humidity:n,continentalness:s,erosion:r,weirdness:a}=t;return s<-.1?this.selectOceanBiome(e,s):s<.1?this.selectShoreBiome(e,n,s):Math.abs(a)<.05&&r>.3&&s>.1?e<-.3?yt.frozen_river:yt.river:s>.6&&r<-.2?this.selectMountainBiome(e,n,r,a):this.selectLandBiome(e,n,s,r,a)}selectOceanBiome(t,e){const n=e<-.5;return t<-.5?n?yt.deep_frozen_ocean:yt.frozen_ocean:t<-.15?n?yt.deep_cold_ocean:yt.cold_ocean:t<.2?n?yt.deep_ocean:yt.ocean:t<.5?n?yt.deep_lukewarm_ocean:yt.lukewarm_ocean:n?yt.deep_warm_ocean:yt.warm_ocean}selectShoreBiome(t,e,n){return n<.03?t<-.3?yt.snowy_beach:e<-.3||Math.abs(t)>.4?yt.stony_shore:yt.beach:e>.3&&t>0?t>.5?yt.mangrove_swamp:yt.swamp:yt.plains}selectMountainBiome(t,e,n,s){const r=s>.5?"jagged":s<-.3?"stony":"frozen";return t<-.4?n<-.5?r==="jagged"?yt.jagged_peaks:yt.frozen_peaks:e>0?yt.grove:yt.snowy_slopes:t<0?n<-.5?r==="jagged"?yt.jagged_peaks:yt.stony_peaks:yt.windswept_forest:n<-.5?yt.stony_peaks:e>.3?yt.windswept_forest:yt.windswept_hills}selectLandBiome(t,e,n,s,r){return t<-.45?e>.3?yt.snowy_taiga:r>.7?yt.ice_spikes:yt.snowy_plains:t<-.15?e>.4?yt.old_growth_spruce_taiga:e>.1?yt.taiga:yt.snowy_plains:t<.2?e>.5?r>.4?yt.dark_forest:yt.old_growth_birch_forest:e>.2?r>.3?yt.flower_forest:yt.forest:e>-.2?r>.5?yt.meadow:yt.plains:n>.5?yt.sunflower_plains:yt.plains:t<.55?e>.5?r>.3?yt.bamboo_jungle:yt.jungle:e>.2?yt.sparse_jungle:e>-.3?r>.5?yt.cherry_grove:yt.forest:yt.savanna:e>.3?yt.jungle:e>-.1?r>.3?yt.windswept_savanna:yt.savanna_plateau:e<-.4?yt.desert:r>.5?yt.eroded_badlands:r>0?yt.wooded_badlands:yt.badlands}getSeed(){return this.seed}}let ne=null,Hs=null;async function C_(){return ne||Hs||(Hs=(async()=>{await new Promise((t,e)=>{if(window.CubiomesModule){t();return}const n=document.createElement("script");n.src="/cubiomes.js",n.onload=()=>t(),n.onerror=()=>e(new Error("Failed to load cubiomes.js")),document.head.appendChild(n)});const i=window.CubiomesModule;if(!i)throw new Error("CubiomesModule not found in window");return ne=await i(),console.log("✅ Cubiomes WASM module loaded"),ne})(),Hs)}const L_={MC_1_20:20},R_={NETHER:-1,OVERWORLD:0,END:1};class P_{initialized=!1;seed;fallbackGenerator=null;constructor(t){this.seed=BigInt(t??Math.floor(Math.random()*2147483647))}async init(t=L_.MC_1_20){if(!(typeof window.CubiomesModule=="function")){this.fallbackGenerator=new Gl(this.getSeedNumber()),this.initialized=!0,console.log(`🌍 Fallback generator initialized with seed: ${this.seed.toString(16)}`);return}try{if(ne||await C_(),ne){ne._init_generator(t,0);const n=Number(this.seed>>BigInt(32)&BigInt(4294967295)),s=Number(this.seed&BigInt(4294967295));ne._apply_seed(n,s,R_.OVERWORLD),this.initialized=!0,console.log(`🌍 WASM generator initialized with seed: ${this.seed.toString(16)}`);return}}catch(n){console.warn("⚠️ cubiomes WASM unavailable, using TypeScript fallback generator.",n)}this.fallbackGenerator=new Gl(this.getSeedNumber()),this.initialized=!0,console.log(`🌍 Fallback generator initialized with seed: ${this.seed.toString(16)}`)}getBiomeAt(t,e,n,s){if(!this.initialized)throw new Error("Generator not initialized");if(this.fallbackGenerator)return this.fallbackGenerator.getBiomeAt(t,e,n,s);if(!ne)throw new Error("WASM module unavailable");return ne._get_biome_at(t,e,n,s)}genBiomes2D(t,e,n,s,r,a=63){if(!this.initialized)throw new Error("Generator not initialized");if(this.fallbackGenerator){const d=new Int32Array(s*r);return this.fallbackGenerator.genBiomes2D(d,t,e,n,s,r,a),d}if(!ne)throw new Error("WASM module unavailable");const l=ne._alloc_biome_buffer(s,r),c=ne._gen_biomes_2d(l,t,e,n,s,r,a);if(c!==0)throw ne._free_buffer(l),new Error(`Biome generation failed with code ${c}`);const h=new Int32Array(s*r);for(let d=0;d<s*r;d++)h[d]=ne.getValue(l+d*4,"i32");return ne._free_buffer(l),h}isOcean(t){return this.fallbackGenerator?b_(t):ne?ne._is_ocean(t)!==0:!1}isSnowy(t){return this.fallbackGenerator?M_(t):ne?ne._is_snowy_biome(t)!==0:!1}getBiomeColor(t){if(this.fallbackGenerator)return S_(t);if(!ne)return[128,128,128];const e=ne._get_biome_color(t);return[e>>16&255,e>>8&255,e&255]}getBiomeBaseHeight(t){return this.fallbackGenerator?E_(t):ne?ne._get_biome_base_height(t):64}biomeHasTrees(t){return this.fallbackGenerator?y_(t):ne?ne._biome_has_trees(t):0}getBiomeGrassColor(t){if(this.fallbackGenerator)return w_(t);if(!ne)return[141,179,96];const e=ne._get_biome_grass_color(t);return[e>>16&255,e>>8&255,e&255]}getSeed(){return this.seed}getSeedNumber(){return Number(this.seed&BigInt(2147483647))}getBiomeName(t){return{0:"Ocean",1:"Plains",2:"Desert",3:"Windswept Hills",4:"Forest",5:"Taiga",6:"Swamp",7:"River",8:"Nether Wastes",9:"The End",10:"Frozen Ocean",11:"Frozen River",12:"Snowy Plains",13:"Snowy Mountains",14:"Mushroom Fields",15:"Mushroom Field Shore",16:"Beach",17:"Desert Hills",18:"Wooded Hills",19:"Taiga Hills",20:"Mountain Edge",21:"Jungle",22:"Jungle Hills",23:"Sparse Jungle",24:"Deep Ocean",25:"Stony Shore",26:"Snowy Beach",27:"Birch Forest",28:"Birch Forest Hills",29:"Dark Forest",30:"Snowy Taiga",31:"Snowy Taiga Hills",32:"Old Growth Pine Taiga",33:"Old Growth Pine Taiga Hills",34:"Windswept Forest",35:"Savanna",36:"Savanna Plateau",37:"Badlands",38:"Wooded Badlands",39:"Badlands Plateau",40:"Small End Islands",41:"End Midlands",42:"End Highlands",43:"End Barrens",44:"Warm Ocean",45:"Lukewarm Ocean",46:"Cold Ocean",47:"Deep Warm Ocean",48:"Deep Lukewarm Ocean",49:"Deep Cold Ocean",50:"Deep Frozen Ocean",127:"The Void",129:"Sunflower Plains",130:"Desert Lakes",131:"Windswept Gravelly Hills",132:"Flower Forest",133:"Taiga Mountains",134:"Swamp Hills",140:"Ice Spikes",149:"Jungle Edge Mutated",151:"Modified Jungle Edge",155:"Old Growth Birch Forest",156:"Birch Forest Mountains",157:"Dark Forest Hills",158:"Snowy Taiga Mountains",160:"Old Growth Spruce Taiga",161:"Giant Spruce Taiga Hills",162:"Modified Gravelly Mountains",163:"Windswept Savanna",164:"Shattered Savanna Plateau",165:"Eroded Badlands",166:"Modified Wooded Badlands Plateau",167:"Modified Badlands Plateau",168:"Bamboo Jungle",169:"Bamboo Jungle Hills",170:"Soul Sand Valley",171:"Crimson Forest",172:"Warped Forest",173:"Basalt Deltas",174:"Dripstone Caves",175:"Lush Caves",177:"Meadow",178:"Grove",179:"Snowy Slopes",180:"Frozen Peaks",181:"Jagged Peaks",182:"Stony Peaks",183:"Cherry Grove",184:"Deep Dark",185:"Mangrove Swamp"}[t]||`Unknown (${t})`}}async function k_(i){const t=new P_(i);return await t.init(),t}const D_={[zt.Oak]:{baseHeight:4,heightRandA:2,heightRandB:0},[zt.Birch]:{baseHeight:5,heightRandA:2,heightRandB:0},[zt.Spruce]:{baseHeight:5,heightRandA:2,heightRandB:3},[zt.Jungle]:{baseHeight:4,heightRandA:8,heightRandB:0},[zt.Acacia]:{baseHeight:5,heightRandA:2,heightRandB:0},[zt.DarkOak]:{baseHeight:6,heightRandA:2,heightRandB:0},[zt.Cherry]:{baseHeight:4,heightRandA:3,heightRandB:0},[zt.Mangrove]:{baseHeight:5,heightRandA:3,heightRandB:0},[zt.Cactus]:{baseHeight:1,heightRandA:2,heightRandB:0}};function Vl(i,t){const e=D_[i];return e.baseHeight+t.nextBounded(e.heightRandA+1)+t.nextBounded(e.heightRandB+1)}function Wl(i,t,e,n,s){for(let r=0;r<=e;r++){const a=Math.max(0,n-Math.floor(r/2));for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++)Math.abs(l)===a&&Math.abs(c)===a&&(s.nextBounded(2)===0||r===0)||i.push({dx:l,dy:t-r,dz:c,type:"leaves"})}}function I_(i,t,e,n,s){let r=s.nextBounded(2),a=1,l=0;for(let c=0;c<e;c++){const h=t-c;for(let d=-r;d<=r;d++)for(let u=-r;u<=r;u++)Math.abs(d)===r&&Math.abs(u)===r&&r>0||i.push({dx:d,dy:h,dz:u,type:"leaves"});r>=a?(r=l,l=1,a=Math.min(n,a+1)):r++}}function U_(i,t,e){const n=2+e.nextBounded(2);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++)i.push({dx:s,dy:t,dz:r,type:"leaves"});for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++)s*s+r*r<=n*n+1&&e.nextFloat()>.1&&i.push({dx:s,dy:t-1,dz:r,type:"leaves"})}function O_(i,t,e){for(let n=0;n<3;n++){const s=n===1?3:2;for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++)Math.abs(r)===s&&Math.abs(a)===s||i.push({dx:r,dy:t-n,dz:a,type:"leaves"})}}function N_(i,t,e){const n=[{dx:0,dy:0,dz:0,r:2},{dx:-2,dy:-1,dz:0,r:2},{dx:2,dy:-1,dz:0,r:2},{dx:0,dy:-1,dz:-2,r:2},{dx:0,dy:-1,dz:2,r:2}];for(const s of n)for(let r=-s.r;r<=s.r;r++)for(let a=-s.r;a<=s.r;a++)for(let l=-1;l<=1;l++)r*r+a*a+l*l<=s.r*s.r+1&&e.nextFloat()>.15&&i.push({dx:s.dx+r,dy:t+s.dy+l,dz:s.dz+a,type:"leaves"})}function B_(i,t,e){for(let s=0;s<4;s++){const r=s===0||s===3?2:3;for(let a=-r;a<=r;a++)for(let l=-r;l<=r;l++)Math.abs(a)===r&&Math.abs(l)===r&&e.nextBounded(2)===0||i.push({dx:a,dy:t-s,dz:l,type:"leaves"})}}function Xl(i){const t=new Map;for(const e of i){const n=`${e.dx},${e.dy},${e.dz}`;t.get(n)?(e.type==="log"||e.type==="cactus")&&t.set(n,e):t.set(n,e)}return Array.from(t.values())}function F_(i,t){const e=[];if(i===zt.Cactus){const l=Vl(i,t);for(let c=0;c<l;c++)e.push({dx:0,dy:c,dz:0,type:"cactus"});return{type:i,blocks:Xl(e),trunkHeight:l,foliageRadius:0}}const n=Vl(i,t);if(i===zt.DarkOak||i===zt.Jungle)for(let l=0;l<n;l++)e.push({dx:0,dy:l,dz:0,type:"log"}),e.push({dx:1,dy:l,dz:0,type:"log"}),e.push({dx:0,dy:l,dz:1,type:"log"}),e.push({dx:1,dy:l,dz:1,type:"log"});else if(i===zt.Acacia){for(let d=0;d<n-2;d++)e.push({dx:0,dy:d,dz:0,type:"log"});const l=t.nextBounded(4),c=l===0?1:l===1?-1:0,h=l===2?1:l===3?-1:0;e.push({dx:c,dy:n-2,dz:h,type:"log"}),e.push({dx:c*2,dy:n-1,dz:h*2,type:"log"})}else for(let l=0;l<n;l++)e.push({dx:0,dy:l,dz:0,type:"log"});const r=n+1;let a=2;switch(i){case zt.Oak:case zt.Birch:a=2,Wl(e,r,3,a,t);break;case zt.Spruce:a=2;const l=Math.max(4,n-2);I_(e,r,l,a,t);break;case zt.Jungle:a=3,B_(e,r,t);break;case zt.Acacia:a=3,U_(e,r-1,t);break;case zt.DarkOak:a=3,O_(e,r);break;case zt.Cherry:a=4,N_(e,r,t);break;case zt.Mangrove:a=3,Wl(e,r,4,a,t);for(let c=0;c<4;c++){const h=c/4*Math.PI*2,d=Math.round(Math.cos(h)*1.5),u=Math.round(Math.sin(h)*1.5);(d!==0||u!==0)&&(e.push({dx:d,dy:0,dz:u,type:"log"}),e.push({dx:d,dy:1,dz:u,type:"log"}))}break}return{type:i,blocks:Xl(e),trunkHeight:n,foliageRadius:a}}function z_(i,t){switch(i){case W.forest:case W.flower_forest:case W.plains:case W.meadow:case W.sunflower_plains:return t.nextFloat()<.8?zt.Oak:zt.Birch;case W.birch_forest:case W.old_growth_birch_forest:return zt.Birch;case W.dark_forest:case W.pale_garden:return t.nextFloat()<.7?zt.DarkOak:zt.Oak;case W.taiga:case W.snowy_taiga:case W.old_growth_pine_taiga:case W.old_growth_spruce_taiga:case W.grove:case W.windswept_forest:return zt.Spruce;case W.jungle:case W.bamboo_jungle:case W.sparse_jungle:return t.nextFloat()<.3?zt.Jungle:zt.Oak;case W.savanna:case W.savanna_plateau:case W.windswept_savanna:return zt.Acacia;case W.cherry_grove:return zt.Cherry;case W.swamp:return zt.Oak;case W.mangrove_swamp:return zt.Mangrove;case W.desert:return zt.Cactus;case W.wooded_badlands:return zt.Oak;default:return null}}function H_(i){switch(i){case W.forest:case W.flower_forest:case W.birch_forest:case W.dark_forest:return 8;case W.jungle:case W.bamboo_jungle:return 12;case W.taiga:case W.snowy_taiga:case W.old_growth_pine_taiga:case W.old_growth_spruce_taiga:return 6;case W.plains:case W.meadow:case W.sunflower_plains:return 1;case W.savanna:case W.savanna_plateau:return 2;case W.desert:return 2;case W.swamp:case W.mangrove_swamp:return 4;case W.cherry_grove:return 5;case W.grove:case W.windswept_forest:return 4;default:return 0}}o.Air+"",o.Stone+"",o.Dirt+"",o.Grass+"",o.Sand+"",o.Gravel+"",o.Water+"",o.Ice+"",o.Snow+"",o.SnowBlock+"",o.Clay+"",o.Bedrock+"",o.OakLog+"",o.BirchLog+"",o.SpruceLog+"",o.JungleLog+"",o.AcaciaLog+"",o.DarkOakLog+"",o.CherryLog+"",o.MangroveLog+"",o.OakLeaves+"",o.BirchLeaves+"",o.SpruceLeaves+"",o.JungleLeaves+"",o.AcaciaLeaves+"",o.DarkOakLeaves+"",o.CherryLeaves+"",o.MangroveLeaves+"",o.Cactus+"",o.CactusTop+"",o.DeadBush+"",o.TallGrass+"",o.Fern+"",o.Podzol+"",o.Mycelium+"",o.RedSand+"",o.Terracotta+"",o.PackedIce+"",o.BlueIce+"",o.Coral+"",o.Seagrass+"";class G_{generator=null;seed;initialized=!1;initPromise=null;terrainNoise=null;detailNoise=null;constructor(t){this.seed=t;const e=new bn(t),n=new bn(t^305419896);this.terrainNoise=new Xa(e),this.detailNoise=new Xa(n)}async init(){if(!this.initialized)return this.initPromise?this.initPromise:(this.initPromise=(async()=>{this.generator=await k_(BigInt(this.seed)),this.initialized=!0,console.log(`✅ ChunkGenerator initialized with seed: ${this.seed}`)})(),this.initPromise)}isReady(){return this.initialized&&this.generator!==null}generateChunk(t,e){if(!this.generator)throw new Error("Generator not initialized. Call init() first.");const n=new Uint8Array(z*z),s=new Int16Array(z*z),r=new Uint8Array(z*z),a=new Uint8Array(z*z),l=new Uint8Array(z),c=new Uint8Array(z),h=[],d=t*z,u=e*z,f=this.generator.genBiomes2D(1,d,u,z,z,63);for(let m=0;m<z;m++)for(let _=0;_<z;_++){const v=m*z+_,g=d+_,p=u+m,E=f[v];s[v]=E;const y=this.calculateSmoothHeight(g,p,E);n[v]=y}for(let m=0;m<z;m++){const _=d+z,v=u+m,g=this.getBiomeAt(_,v);l[m]=this.calculateSmoothHeight(_,v,g)}for(let m=0;m<z;m++){const _=d+m,v=u+z,g=this.getBiomeAt(_,v);c[m]=this.calculateSmoothHeight(_,v,g)}for(let m=0;m<3;m++)for(let _=0;_<z;_++)for(let v=0;v<z;v++){const g=_*z+v,p=n[g],E=_>0?n[(_-1)*z+v]:p,y=_<z-1?n[(_+1)*z+v]:c[v],w=v>0?n[_*z+(v-1)]:p,P=v<z-1?n[_*z+(v+1)]:l[_],L=[E,y,w,P];let A=Math.min(...L),k=Math.max(...L);n[g]=Math.max(A-1,Math.min(k+1,p))}for(let m=0;m<z;m++)for(let _=0;_<z;_++){const v=m*z+_,g=s[v],p=n[v],E=d+_,y=u+m,{block:w,waterLevel:P}=this.getTopBlock(g,p,E,y);r[v]=w,a[v]=P>0?$n-p:0}return this.generateTrees(t,e,n,s,r,h),{heightMap:n,biomeMap:s,topBlock:r,trees:h,waterDepth:a,rightNeighborHeights:l,frontNeighborHeights:c}}calculateSmoothHeight(t,e,n){return $n}isSwampWaterPatch(t,e){if(!this.detailNoise)return!1;const n=.08;return this.detailNoise.sample2D(t*n,e*n)<-.3}isMountainBiome(t){return t===W.windswept_hills||t===W.windswept_gravelly_hills||t===W.windswept_forest||t===W.windswept_savanna||t===W.jagged_peaks||t===W.stony_peaks||t===W.frozen_peaks||t===W.snowy_slopes||t===W.snowy_mountains||t===W.grove||t===W.stony_shore||t>=130&&t<=165}calculateHeight(t,e,n){if(!this.terrainNoise)return $n;const s=.005,r=this.terrainNoise.sample2D(t*s,e*s);if(this.generator?.isOcean(n)||n===W.river||n===W.frozen_river)return $n-1;let a=$n+(r+1)*3;return this.isMountainBiome(n)?a+=3:(n===W.beach||n===W.snowy_beach)&&(a=$n),Math.round(a)}getTopBlock(t,e,n,s){const r=[W.ocean,W.deep_ocean,W.cold_ocean,W.deep_cold_ocean,W.lukewarm_ocean,W.deep_lukewarm_ocean,W.warm_ocean,0,24,44,45,46,47,48,49,50];if([W.frozen_ocean,W.deep_frozen_ocean,10,50].includes(t))return{block:o.Ice,waterLevel:0};if(r.includes(t))return{block:o.Water,waterLevel:0};if(this.generator?.isOcean(t))return{block:o.Water,waterLevel:0};if(t===W.river||t===7)return{block:o.Water,waterLevel:0};if(t===W.frozen_river||t===11)return{block:o.Ice,waterLevel:0};if(t===W.swamp||t===W.mangrove_swamp)return this.isSwampWaterPatch(n,s)?{block:o.Water,waterLevel:0}:{block:o.Grass,waterLevel:0};switch(t){case W.desert:return{block:o.Sand,waterLevel:0};case W.badlands:case W.eroded_badlands:return{block:o.Terracotta,waterLevel:0};case W.wooded_badlands:case W.wooded_badlands_plateau:return{block:o.RedSand,waterLevel:0};case W.beach:case W.snowy_beach:return{block:o.Sand,waterLevel:0};case W.stony_shore:return{block:o.Stone,waterLevel:0};case W.snowy_plains:case W.snowy_slopes:case W.frozen_peaks:case W.snowy_mountains:return{block:o.Snow,waterLevel:0};case W.ice_spikes:return{block:o.PackedIce,waterLevel:0};case W.jagged_peaks:case W.stony_peaks:return{block:o.Stone,waterLevel:0};case W.windswept_hills:case W.windswept_gravelly_hills:return{block:o.Gravel,waterLevel:0};case W.old_growth_pine_taiga:case W.old_growth_spruce_taiga:return{block:o.Podzol,waterLevel:0};case W.mushroom_fields:return{block:o.Mycelium,waterLevel:0};case W.plains:case W.sunflower_plains:case W.meadow:case W.forest:case W.birch_forest:case W.flower_forest:case W.old_growth_birch_forest:case W.dark_forest:case W.cherry_grove:case W.taiga:case W.snowy_taiga:case W.grove:case W.jungle:case W.bamboo_jungle:case W.sparse_jungle:case W.savanna:case W.savanna_plateau:case W.windswept_savanna:case W.windswept_forest:return{block:o.Grass,waterLevel:0};default:return{block:o.Grass,waterLevel:0}}}generateTrees(t,e,n,s,r,a){const l=new bn(this.seed^t*341873128712+e*132897987541),c=z/2*z+z/2,h=s[c],d=H_(h);if(d===0)return;const u=d*3;let f=0;for(let m=0;m<u&&f<d;m++){const _=2+l.nextBounded(z-4),v=2+l.nextBounded(z-4),g=v*z+_,p=s[g],E=n[g],y=r[g];if(y===o.Water||y===o.Ice||E<$n||p===W.beach||p===W.snowy_beach||p===W.stony_shore)continue;const w=z_(p,l);if(w===null)continue;const P=w===zt.Jungle?4:3;let L=!1;for(const k of a){const M=k.x-_,S=k.z-v;if(M*M+S*S<P*P){L=!0;break}}if(L)continue;const A=F_(w,l);a.push({x:_,z:v,type:w,height:A.trunkHeight,blocks:A.blocks}),f++}}isWaterBiome(t){switch(t){case W.ocean:case W.deep_ocean:case W.cold_ocean:case W.deep_cold_ocean:case W.frozen_ocean:case W.deep_frozen_ocean:case W.lukewarm_ocean:case W.deep_lukewarm_ocean:case W.warm_ocean:case W.river:case W.frozen_river:return!0;default:return!1}}hashPosition(t,e){let n=this.seed;return n^=t*374761393,n^=e*668265263,n^=n>>13,n*=1274126177,n>>>0}getBiomeAt(t,e){return this.generator?this.generator.getBiomeAt(1,t,63,e):W.plains}getHeightAt(t,e){const n=this.getBiomeAt(t,e);return this.calculateHeight(t,e,n)}getBiomeColor(t){return this.generator?this.generator.getBiomeColor(t):[128,128,128]}getGrassColor(t){return this.generator?this.generator.getBiomeGrassColor(t):[124,189,80]}getSeed(){return this.seed}getBiomeName(t){return this.generator?this.generator.getBiomeName(t):"Unknown"}isOcean(t){return this.generator?this.generator.isOcean(t):!1}}async function V_(i){const t=new G_(i);return await t.init(),t}const W_="/soundtrack",$l=["music/game/calm1.ogg","music/game/calm2.ogg","music/game/calm3.ogg","music/game/hal1.ogg","music/game/hal2.ogg","music/game/hal3.ogg","music/game/hal4.ogg","music/game/nuance1.ogg","music/game/nuance2.ogg","music/game/piano1.ogg","music/game/piano2.ogg","music/game/piano3.ogg"],X_=["music/game/creative/creative1.ogg","music/game/creative/creative2.ogg","music/game/creative/creative3.ogg","music/game/creative/creative4.ogg","music/game/creative/creative5.ogg","music/game/creative/creative6.ogg"],$_=["music/menu/menu1.ogg","music/menu/menu2.ogg","music/menu/menu3.ogg","music/menu/menu4.ogg"],Y_=["music/game/water/axolotl.ogg","music/game/water/dragon_fish.ogg","music/game/water/shuniji.ogg"],Yl=300*1e3,q_=900*1e3,ql=3e3;class yi{static instance;currentAudio=null;currentContext="none";volume=.5;enabled=!0;isPlaying=!1;isFading=!1;nextTrackTimeout=null;fadeInterval=null;lastPlayedTracks=[];playedTrackHistory=new Map;constructor(){}static getInstance(){return yi.instance||(yi.instance=new yi),yi.instance}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.currentAudio&&!this.isFading&&(this.currentAudio.volume=this.volume)}getVolume(){return this.volume}setEnabled(t){this.enabled=t,t?this.currentContext!=="none"&&this.scheduleNextTrack(1e3):this.stop()}isEnabled(){return this.enabled}isCurrentlyPlaying(){return this.isPlaying}getCurrentTrackName(){if(!this.currentAudio||!this.isPlaying)return null;const e=this.currentAudio.src.match(/\/([^/]+)\.ogg$/);return e?e[1].replace(/_/g," ").replace(/\d+$/,"").trim():null}setContext(t){if(t===this.currentContext)return;const e=this.currentContext;if(this.currentContext=t,this.isPlaying)this.fadeOut(()=>{t!=="none"&&this.scheduleNextTrack(2e3)});else if(t!=="none"&&this.enabled){const n=e==="none"?5e3:this.getRandomDelay();this.scheduleNextTrack(n)}}start(){!this.enabled||this.currentContext==="none"||this.scheduleNextTrack(3e3)}stop(){this.clearScheduledTrack(),this.currentAudio&&this.fadeOut(()=>{this.currentAudio&&(this.currentAudio.pause(),this.currentAudio=null),this.isPlaying=!1})}skip(){this.currentAudio?this.fadeOut(()=>{this.playNextTrack()}):this.playNextTrack()}scheduleNextTrack(t){this.clearScheduledTrack(),this.nextTrackTimeout=setTimeout(()=>{this.playNextTrack()},t)}clearScheduledTrack(){this.nextTrackTimeout&&(clearTimeout(this.nextTrackTimeout),this.nextTrackTimeout=null)}getTracksForContext(){switch(this.currentContext){case"menu":return $_;case"creative":return[...$l,...X_];case"underwater":return Y_;case"overworld":default:return $l}}selectRandomTrack(){const t=this.getTracksForContext(),e=t.filter(l=>!this.lastPlayedTracks.includes(l)),n=e.length>0?e:t,s=n.map(l=>1/((this.playedTrackHistory.get(l)||0)+1)),r=s.reduce((l,c)=>l+c,0);let a=Math.random()*r;for(let l=0;l<n.length;l++)if(a-=s[l],a<=0)return n[l];return n[Math.floor(Math.random()*n.length)]}playNextTrack(){if(!this.enabled||this.currentContext==="none")return;const t=this.selectRandomTrack(),e=`${W_}/${t}`;this.lastPlayedTracks.push(t),this.lastPlayedTracks.length>3&&this.lastPlayedTracks.shift(),this.playedTrackHistory.set(t,(this.playedTrackHistory.get(t)||0)+1),this.currentAudio=new Audio(e),this.currentAudio.volume=0,this.currentAudio.addEventListener("ended",()=>{this.isPlaying=!1,this.scheduleNextTrack(this.getRandomDelay())}),this.currentAudio.addEventListener("error",()=>{console.warn(`Failed to load music track: ${t}`),this.isPlaying=!1,this.scheduleNextTrack(5e3)}),this.currentAudio.play().then(()=>{this.isPlaying=!0,this.fadeIn()}).catch(()=>{console.log("Music autoplay blocked, waiting for user interaction")})}fadeIn(){if(!this.currentAudio)return;this.isFading=!0;const t=0,e=this.volume,n=Date.now();this.clearFadeInterval(),this.fadeInterval=setInterval(()=>{const s=Date.now()-n,r=Math.min(1,s/ql);this.currentAudio&&(this.currentAudio.volume=t+(e-t)*r),r>=1&&(this.clearFadeInterval(),this.isFading=!1)},50)}fadeOut(t){if(!this.currentAudio){t?.();return}this.isFading=!0;const e=this.currentAudio.volume,n=Date.now();this.clearFadeInterval(),this.fadeInterval=setInterval(()=>{const s=Date.now()-n,r=Math.min(1,s/ql);this.currentAudio&&(this.currentAudio.volume=e*(1-r)),r>=1&&(this.clearFadeInterval(),this.isFading=!1,this.currentAudio&&this.currentAudio.pause(),this.isPlaying=!1,t?.())},50)}clearFadeInterval(){this.fadeInterval&&(clearInterval(this.fadeInterval),this.fadeInterval=null)}getRandomDelay(){return Yl+Math.random()*(q_-Yl)}destroy(){this.stop(),this.clearScheduledTrack(),this.clearFadeInterval()}}function ss(){return yi.getInstance()}var fe=(i=>(i.MoveForward="moveForward",i.MoveBackward="moveBackward",i.MoveLeft="moveLeft",i.MoveRight="moveRight",i.Jump="jump",i.Crouch="crouch",i.Attack="attack",i.Use="use",i.NextSlot="nextSlot",i.PrevSlot="prevSlot",i.OpenInventory="openInventory",i.Pause="pause",i.MenuUp="menuUp",i.MenuDown="menuDown",i.MenuLeft="menuLeft",i.MenuRight="menuRight",i.MenuSelect="menuSelect",i.MenuBack="menuBack",i.ZoomIn="zoomIn",i.ZoomOut="zoomOut",i.CrosshairRight="crosshairRight",i.CrosshairLeft="crosshairLeft",i.CrosshairUp="crosshairUp",i.CrosshairDown="crosshairDown",i))(fe||{});const Bc=[{button:0,action:"jump"},{button:1,action:"attack"},{button:2,action:"use"},{button:3,action:"openInventory"},{button:10,action:"crouch"},{button:5,action:"nextSlot"},{button:4,action:"prevSlot"},{button:7,action:"zoomIn"},{button:6,action:"zoomOut"},{button:9,action:"pause"},{button:12,action:"menuUp"},{button:13,action:"menuDown"},{button:14,action:"menuLeft"},{button:15,action:"menuRight"},{button:0,action:"menuSelect"},{button:1,action:"menuBack"}],Fc=[{axis:0,positiveAction:"moveRight",negativeAction:"moveLeft",deadzone:.15},{axis:1,positiveAction:"moveForward",negativeAction:"moveBackward",deadzone:.15},{axis:2,positiveAction:"crosshairRight",negativeAction:"crosshairLeft",deadzone:.15},{axis:3,positiveAction:"crosshairDown",negativeAction:"crosshairUp",deadzone:.15}],Kr={enabled:!0,deadzone:.15,sensitivity:1,invertY:!1,vibration:!0,buttonMappings:Bc,axisMappings:Fc},J_={0:"A / Cross",1:"B / Circle",2:"X / Square",3:"Y / Triangle",4:"LB / L1",5:"RB / R1",6:"LT / L2",7:"RT / R2",8:"Select / Share",9:"Start / Options",10:"L3",11:"R3",12:"D-Pad Up",13:"D-Pad Down",14:"D-Pad Left",15:"D-Pad Right",16:"Home"},j_={moveForward:"Move Forward",moveBackward:"Move Backward",moveLeft:"Move Left",moveRight:"Move Right",jump:"Jump",crouch:"Crouch",attack:"Attack / Break",use:"Use / Place",nextSlot:"Next Slot",prevSlot:"Previous Slot",openInventory:"Open Inventory",pause:"Pause",menuUp:"Menu Up",menuDown:"Menu Down",menuLeft:"Menu Left",menuRight:"Menu Right",menuSelect:"Menu Select",menuBack:"Menu Back",zoomIn:"Zoom In",zoomOut:"Zoom Out",crosshairRight:"Crosshair Right",crosshairLeft:"Crosshair Left",crosshairUp:"Crosshair Up",crosshairDown:"Crosshair Down"};class wi{static instance;settings;gamepads=new Map;activeGamepadIndex=null;actionStates=new Map;previousActionStates=new Map;commands=new Map;onMenuNavigate;onMenuSelect;onMenuBack;onPause;menuMode=!1;menuRepeatTimers=new Map;MENU_REPEAT_DELAY=400;MENU_REPEAT_RATE=150;constructor(){this.settings=this.loadSettings(),this.initializeActionStates(),this.setupEventListeners(),this.checkConnectedGamepads()}static getInstance(){return wi.instance||(wi.instance=new wi),wi.instance}initializeActionStates(){for(const t of Object.values(fe))this.actionStates.set(t,0),this.previousActionStates.set(t,0)}setupEventListeners(){window.addEventListener("gamepadconnected",t=>{console.log(`🎮 Gamepad connected: ${t.gamepad.id}`),this.onGamepadConnected(t.gamepad)}),window.addEventListener("gamepaddisconnected",t=>{console.log(`🎮 Gamepad disconnected: ${t.gamepad.id}`),this.onGamepadDisconnected(t.gamepad)})}checkConnectedGamepads(){const t=navigator.getGamepads();for(const e of t)e&&this.onGamepadConnected(e)}onGamepadConnected(t){const e={connected:!0,buttons:new Array(t.buttons.length).fill(!1),previousButtons:new Array(t.buttons.length).fill(!1),axes:new Array(t.axes.length).fill(0),previousAxes:new Array(t.axes.length).fill(0)};this.gamepads.set(t.index,e),this.activeGamepadIndex===null&&(this.activeGamepadIndex=t.index)}onGamepadDisconnected(t){if(this.gamepads.delete(t.index),this.activeGamepadIndex===t.index){const e=Array.from(this.gamepads.keys());this.activeGamepadIndex=e.length>0?e[0]:null}}registerCommand(t,e){this.commands.set(t,e)}setMenuMode(t){this.menuMode=t,this.menuRepeatTimers.clear()}isConnected(){return this.activeGamepadIndex!==null&&this.settings.enabled}getGamepadName(){return this.activeGamepadIndex===null?null:navigator.getGamepads()[this.activeGamepadIndex]?.id||null}update(t){if(!this.settings.enabled||this.activeGamepadIndex===null)return;const n=navigator.getGamepads()[this.activeGamepadIndex];if(!n)return;const s=this.gamepads.get(this.activeGamepadIndex);if(s){s.previousButtons=[...s.buttons],s.previousAxes=[...s.axes];for(let r=0;r<n.buttons.length;r++)s.buttons[r]=n.buttons[r].pressed;for(let r=0;r<n.axes.length;r++)s.axes[r]=n.axes[r];for(const[r,a]of this.actionStates)this.previousActionStates.set(r,a);this.computeActionStates(s),this.menuMode?this.processMenuActions(t):this.processGameActions()}}computeActionStates(t){for(const e of Object.values(fe))this.actionStates.set(e,0);for(const e of this.settings.buttonMappings)t.buttons[e.button]&&this.actionStates.set(e.action,1);for(const e of this.settings.axisMappings){const n=t.axes[e.axis]||0,s=e.deadzone??this.settings.deadzone;let r=0;if(Math.abs(n)>s&&(r=(Math.abs(n)-s)/(1-s),r=Math.sign(n)*r),e.axis===1&&this.settings.invertY&&(r=-r),r>0){const a=this.actionStates.get(e.positiveAction)||0;this.actionStates.set(e.positiveAction,Math.max(a,r))}else if(r<0){const a=this.actionStates.get(e.negativeAction)||0;this.actionStates.set(e.negativeAction,Math.max(a,Math.abs(r)))}}}processGameActions(){for(const[t,e]of this.actionStates){const n=this.previousActionStates.get(t)||0;if(e>.5&&n<=.5){const r=this.commands.get(t);r&&r.execute(),t==="pause"&&this.onPause&&this.onPause()}}}processMenuActions(t){const e=performance.now(),n=[{action:"menuUp",dir:"up"},{action:"menuDown",dir:"down"},{action:"menuLeft",dir:"left"},{action:"menuRight",dir:"right"}];for(const{action:d,dir:u}of n){const f=this.actionStates.get(d)||0,m=this.previousActionStates.get(d)||0,_=f>.5&&m<=.5,v=f>.5;if(f<=.5&&m>.5)this.menuRepeatTimers.delete(u);else if(_)this.onMenuNavigate?.(u),ve().playUIClick(),this.menuRepeatTimers.set(u,e+this.MENU_REPEAT_DELAY);else if(v){const p=this.menuRepeatTimers.get(u);p&&e>=p&&(this.onMenuNavigate?.(u),ve().playUIClick(),this.menuRepeatTimers.set(u,e+this.MENU_REPEAT_RATE))}}const s=this.actionStates.get("menuSelect")||0,r=this.previousActionStates.get("menuSelect")||0;s>.5&&r<=.5&&(this.onMenuSelect?.(),ve().playUIClick());const a=this.actionStates.get("menuBack")||0,l=this.previousActionStates.get("menuBack")||0;a>.5&&l<=.5&&(this.onMenuBack?.(),ve().playUIClick());const c=this.actionStates.get("pause")||0,h=this.previousActionStates.get("pause")||0;c>.5&&h<=.5&&(this.onMenuBack?.(),ve().playUIClick())}getActionValue(t){return this.settings.enabled&&this.actionStates.get(t)||0}isActionJustPressed(t){if(!this.settings.enabled)return!1;const e=this.actionStates.get(t)||0,n=this.previousActionStates.get(t)||0;return e>.5&&n<=.5}isActionPressed(t){return this.settings.enabled?(this.actionStates.get(t)||0)>.5:!1}getMovementVector(){if(!this.settings.enabled)return{x:0,y:0};const t=this.actionStates.get("moveLeft")||0,e=this.actionStates.get("moveRight")||0,n=this.actionStates.get("moveForward")||0,s=this.actionStates.get("moveBackward")||0;let r=e-t,a=s-n;r*=this.settings.sensitivity,a*=this.settings.sensitivity;const l=Math.sqrt(r*r+a*a);return l>1&&(r/=l,a/=l),{x:r,y:a}}getCrosshairVector(){if(!this.settings.enabled)return{x:0,y:0};const t=this.actionStates.get("crosshairLeft")||0,e=this.actionStates.get("crosshairRight")||0,n=this.actionStates.get("crosshairUp")||0,s=this.actionStates.get("crosshairDown")||0;let r=e-t,a=s-n;const l=this.settings.sensitivity*.8;return r*=l,a*=l,{x:r,y:a}}vibrate(t,e=.5,n=.5){if(!this.settings.vibration||this.activeGamepadIndex===null)return;const r=navigator.getGamepads()[this.activeGamepadIndex];r?.vibrationActuator&&r.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:t,weakMagnitude:e,strongMagnitude:n}).catch(()=>{})}getSettings(){return{...this.settings}}updateSettings(t){this.settings={...this.settings,...t},this.saveSettings()}setButtonMapping(t,e){["menuUp","menuDown","menuLeft","menuRight","menuSelect","menuBack"].includes(e)||(this.settings.buttonMappings=this.settings.buttonMappings.filter(s=>s.button!==t||["menuUp","menuDown","menuLeft","menuRight","menuSelect","menuBack"].includes(s.action))),this.settings.buttonMappings.push({button:t,action:e}),this.saveSettings()}getButtonForAction(t){return this.settings.buttonMappings.find(n=>n.action===t)?.button??null}resetToDefaults(){this.settings={...Kr},this.saveSettings()}loadSettings(){try{const t=localStorage.getItem("isocraft_gamepad_settings");if(t){const e=JSON.parse(t);return{...Kr,...e,buttonMappings:e.buttonMappings||Bc,axisMappings:e.axisMappings||Fc}}}catch{}return{...Kr}}saveSettings(){try{localStorage.setItem("isocraft_gamepad_settings",JSON.stringify(this.settings))}catch{}}waitForButtonPress(t=5e3){return new Promise(e=>{const n=performance.now(),s=()=>{if(performance.now()-n>t){e(null);return}if(this.activeGamepadIndex===null){requestAnimationFrame(s);return}const a=navigator.getGamepads()[this.activeGamepadIndex];if(!a){requestAnimationFrame(s);return}for(let l=0;l<a.buttons.length;l++)if(a.buttons[l].pressed){e(l);return}requestAnimationFrame(s)};requestAnimationFrame(s)})}}class Z_{constructor(t){this.onJump=t}execute(){this.onJump()}}class K_{constructor(t,e){this.onCrouchStart=t,this.onCrouchEnd=e}execute(){this.onCrouchStart()}undo(){this.onCrouchEnd?.()}}class Q_{constructor(t,e){this.onAttackStart=t,this.onAttackEnd=e}execute(){this.onAttackStart()}undo(){this.onAttackEnd?.()}}class t0{constructor(t){this.onUse=t}execute(){this.onUse()}}class Jl{constructor(t,e){this.direction=t,this.onChange=e}execute(){this.onChange(this.direction)}}class e0{constructor(t){this.onOpen=t}execute(){this.onOpen()}}function Ge(){return wi.getInstance()}const Ki={sound:{masterVolume:100,musicVolume:50,soundEffectsVolume:100,ambientVolume:100},video:{renderDistance:4,zoom:10,graphicsQuality:"high",fogEnabled:!0,particlesEnabled:!0,shaderEnabled:!0},showFPS:!0,musicEnabled:!0};class n0{container;isVisible=!1;currentScreen="main";settings;focusableElements=[];focusedIndex=0;isRemapping=!1;_remappingAction=null;onResume;onSettingsChange;onToggleDebug;onQuit;constructor(){this.settings=this.loadSettings(),this.container=document.createElement("div"),this.container.id="pause-menu",this.container.style.display="none",this.injectStyles(),this.buildMainMenu(),document.body.appendChild(this.container),this.applySettings(),this.setupGamepadNavigation()}injectStyles(){if(document.getElementById("pause-menu-styles"))return;if(!document.getElementById("minecraft-font-styles")){const e=document.createElement("style");e.id="minecraft-font-styles",e.textContent=Fi,document.head.appendChild(e)}const t=document.createElement("style");t.id="pause-menu-styles",t.textContent=`
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
        font-family: ${se};
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
        font-family: ${se};
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
        font-family: ${se};
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
        font-family: ${se};
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
        font-family: ${se};
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
        font-family: ${se};
        text-shadow: 2px 2px 0 #3f3f3f;
      }
      
      .mc-toggle-btn {
        min-width: 180px;
        height: 40px;
        font-family: ${se};
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
        font-family: ${se};
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
        font-family: ${se};
        text-shadow: 1px 1px 0 #222;
        line-height: 1.6;
        margin-bottom: 20px;
      }
      
      .mc-about-credit {
        color: #fff;
        font-size: 14px;
        font-family: ${se};
        text-shadow: 2px 2px 0 #3f3f3f;
        margin: 20px 0;
      }
      
      .mc-about-link {
        color: #5af;
        text-decoration: none;
        font-family: ${se};
      }
      
      .mc-about-link:hover {
        color: #8cf;
        text-decoration: underline;
      }
      
      .mc-footer-credit {
        color: #888;
        font-size: 11px;
        font-family: ${se};
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
        font-family: ${se};
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
        font-family: ${se};
        text-shadow: 1px 1px 0 #222;
        padding: 8px 0;
        text-align: left;
      }
      
      .mc-control-btn {
        min-width: 120px;
        height: 32px;
        font-family: ${se};
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
        font-family: ${se};
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
    `,document.head.appendChild(t)}setupGamepadNavigation(){const t=Ge();t.onMenuNavigate=e=>{if(!(!this.isVisible||this.isRemapping)){if(e==="up")this.moveFocus(-1);else if(e==="down")this.moveFocus(1);else if(e==="left"||e==="right"){const n=this.focusableElements[this.focusedIndex];if(n?.classList.contains("mc-slider")){const s=n,r=e==="left"?-5:5,a=Math.max(parseInt(s.min),Math.min(parseInt(s.max),parseInt(s.value)+r));s.value=String(a),s.dispatchEvent(new Event("input")),s.dispatchEvent(new Event("change"))}}}},t.onMenuSelect=()=>{if(!this.isVisible||this.isRemapping)return;const e=this.focusableElements[this.focusedIndex];e&&e.click()},t.onMenuBack=()=>{if(this.isVisible){if(this.isRemapping){this.isRemapping=!1,this._remappingAction=null,this.buildControlsMenu();return}this.currentScreen==="main"?(this.hide(),this.onResume?.()):this.currentScreen==="options"?this.buildMainMenu():this.buildOptionsMenu()}}}updateFocusableElements(){this.focusableElements.forEach(t=>t.classList.remove("gamepad-focus")),this.focusableElements=Array.from(this.container.querySelectorAll(".mc-button, .mc-toggle-btn, .mc-slider, .mc-control-btn")).filter(t=>!t.hasAttribute("disabled")),this.focusedIndex=0,this.updateFocusVisual()}moveFocus(t){this.focusableElements.length!==0&&(this.focusableElements[this.focusedIndex]?.classList.remove("gamepad-focus"),this.focusedIndex+=t,this.focusedIndex<0?this.focusedIndex=this.focusableElements.length-1:this.focusedIndex>=this.focusableElements.length&&(this.focusedIndex=0),this.updateFocusVisual())}updateFocusVisual(){const t=this.focusableElements[this.focusedIndex];t&&(t.classList.add("gamepad-focus"),t.scrollIntoView({behavior:"smooth",block:"center"}))}buildMainMenu(){this.container.innerHTML=`
      <div class="mc-title">Game Menu</div>
      <div class="mc-button-container">
        <button class="mc-button wide" id="btn-resume">Back to Game</button>
        <button class="mc-button wide" id="btn-quit">Regenerate World</button>
      </div>
    `,this.currentScreen="main",this.attachMainMenuListeners(),this.updateFocusableElements()}attachMainMenuListeners(){this.container.querySelector("#btn-resume")?.addEventListener("click",()=>{this.playClickSound(),this.hide(),this.onResume?.()}),this.container.querySelector("#btn-quit")?.addEventListener("click",()=>{this.playClickSound(),this.onQuit?.(),window.location.reload()})}buildOptionsMenu(){const e=Ge().isConnected();this.container.innerHTML=`
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
      ${e?`
        <div class="gamepad-indicator connected">
          <span>🎮</span>
          <span>Controller Connected</span>
        </div>
      `:""}
    `,this.currentScreen="options",this.attachOptionsMenuListeners(),this.updateFocusableElements()}attachOptionsMenuListeners(){this.container.querySelector("#btn-sound")?.addEventListener("click",()=>{this.playClickSound(),this.buildSoundMenu()}),this.container.querySelector("#btn-video")?.addEventListener("click",()=>{this.playClickSound(),this.buildVideoMenu()}),this.container.querySelector("#btn-controls")?.addEventListener("click",()=>{this.playClickSound(),this.buildControlsMenu()}),this.container.querySelector("#btn-toggle-debug")?.addEventListener("click",()=>{this.playClickSound(),this.settings.showFPS=!this.settings.showFPS,this.saveSettings(),this.onToggleDebug?.(),this.buildOptionsMenu()}),this.container.querySelector("#btn-about")?.addEventListener("click",()=>{this.playClickSound(),this.buildAboutMenu()}),this.container.querySelector("#btn-back-options")?.addEventListener("click",()=>{this.playClickSound(),this.buildMainMenu()})}buildSoundMenu(){const t=ss();this.container.innerHTML=`
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
        
        <button class="mc-button" id="btn-skip-track" ${t.isCurrentlyPlaying()?"":"disabled"}>
          Skip Current Track
        </button>
        
        <div class="mc-divider"></div>
        
        <button class="mc-button wide" id="btn-back-sound">Done</button>
      </div>
    `,this.currentScreen="sound",this.attachSoundMenuListeners(),this.updateFocusableElements()}attachSoundMenuListeners(){const t=ss(),e=this.container.querySelector("#slider-master"),n=this.container.querySelector("#val-master");e?.addEventListener("input",()=>{const d=parseInt(e.value);this.settings.sound.masterVolume=d,n.textContent=`${d}%`,this.applySettings()}),e?.addEventListener("change",()=>this.saveSettings());const s=this.container.querySelector("#slider-music"),r=this.container.querySelector("#val-music");s?.addEventListener("input",()=>{const d=parseInt(s.value);this.settings.sound.musicVolume=d,r.textContent=`${d}%`,this.applySettings()}),s?.addEventListener("change",()=>this.saveSettings());const a=this.container.querySelector("#slider-sfx"),l=this.container.querySelector("#val-sfx");a?.addEventListener("input",()=>{const d=parseInt(a.value);this.settings.sound.soundEffectsVolume=d,l.textContent=`${d}%`,this.applySettings()}),a?.addEventListener("change",()=>this.saveSettings());const c=this.container.querySelector("#slider-ambient"),h=this.container.querySelector("#val-ambient");c?.addEventListener("input",()=>{const d=parseInt(c.value);this.settings.sound.ambientVolume=d,h.textContent=`${d}%`,this.applySettings()}),c?.addEventListener("change",()=>this.saveSettings()),this.container.querySelector("#btn-toggle-music")?.addEventListener("click",()=>{this.playClickSound(),this.settings.musicEnabled=!this.settings.musicEnabled,t.setEnabled(this.settings.musicEnabled),this.saveSettings(),this.buildSoundMenu()}),this.container.querySelector("#btn-skip-track")?.addEventListener("click",()=>{this.playClickSound(),t.skip()}),this.container.querySelector("#btn-back-sound")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}buildVideoMenu(){const t={low:"Fast",medium:"Fancy",high:"Fabulous"};this.container.innerHTML=`
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
            ${t[this.settings.video.graphicsQuality]}
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
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Shader Effects:</span>
          <button class="mc-toggle-btn ${this.settings.video.shaderEnabled?"on":"off"}" id="btn-toggle-shader">
            ${this.settings.video.shaderEnabled?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-divider"></div>
        
        <button class="mc-button wide" id="btn-back-video">Done</button>
      </div>
    `,this.currentScreen="video",this.attachVideoMenuListeners(),this.updateFocusableElements()}attachVideoMenuListeners(){const t=["low","medium","high"],e={low:"Fast",medium:"Fancy",high:"Fabulous"},n=this.container.querySelector("#slider-render-distance"),s=this.container.querySelector("#val-render-distance");n?.addEventListener("input",()=>{const c=parseInt(n.value);this.settings.video.renderDistance=c,s.textContent=`${c} chunks`,this.applySettings()}),n?.addEventListener("change",()=>this.saveSettings());const r=this.container.querySelector("#slider-zoom"),a=this.container.querySelector("#val-zoom");r?.addEventListener("input",()=>{const c=parseInt(r.value);this.settings.video.zoom=c,a.textContent=`${c}`,this.applySettings()}),r?.addEventListener("change",()=>this.saveSettings());const l=this.container.querySelector("#btn-graphics-quality");l?.addEventListener("click",()=>{this.playClickSound();const h=(t.indexOf(this.settings.video.graphicsQuality)+1)%t.length;this.settings.video.graphicsQuality=t[h],l.textContent=e[this.settings.video.graphicsQuality],this.saveSettings()}),this.container.querySelector("#btn-toggle-fog")?.addEventListener("click",()=>{this.playClickSound(),this.settings.video.fogEnabled=!this.settings.video.fogEnabled,this.saveSettings(),this.buildVideoMenu()}),this.container.querySelector("#btn-toggle-particles")?.addEventListener("click",()=>{this.playClickSound(),this.settings.video.particlesEnabled=!this.settings.video.particlesEnabled,this.saveSettings(),this.buildVideoMenu()}),this.container.querySelector("#btn-toggle-shader")?.addEventListener("click",()=>{this.playClickSound(),this.settings.video.shaderEnabled=!this.settings.video.shaderEnabled,this.saveSettings(),this.buildVideoMenu()}),this.container.querySelector("#btn-back-video")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}buildControlsMenu(){const t=Ge(),e=t.getSettings(),n=t.isConnected(),s=t.getGamepadName(),a=[fe.Jump,fe.Crouch,fe.Attack,fe.Use,fe.NextSlot,fe.PrevSlot,fe.ZoomIn,fe.ZoomOut].map(l=>{const c=t.getButtonForAction(l),h=c!==null?J_[c]:"None";return`
        <div class="mc-control-row">
          <span class="mc-control-label">${j_[l]}:</span>
          <button class="mc-control-btn" data-action="${l}">${h}</button>
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
          <button class="mc-toggle-btn ${e.enabled?"on":"off"}" id="btn-toggle-gamepad">
            ${e.enabled?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Stick Deadzone:</span>
          <input type="range" class="mc-slider" id="slider-deadzone" min="5" max="40" value="${Math.round(e.deadzone*100)}">
          <span class="mc-slider-value" id="val-deadzone">${Math.round(e.deadzone*100)}%</span>
        </div>
        
        <div class="mc-slider-row">
          <span class="mc-slider-label">Sensitivity:</span>
          <input type="range" class="mc-slider" id="slider-sensitivity" min="50" max="150" value="${Math.round(e.sensitivity*100)}">
          <span class="mc-slider-value" id="val-sensitivity">${Math.round(e.sensitivity*100)}%</span>
        </div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Invert Y Axis:</span>
          <button class="mc-toggle-btn ${e.invertY?"on":"off"}" id="btn-toggle-inverty">
            ${e.invertY?"ON":"OFF"}
          </button>
        </div>
        
        <div class="mc-toggle">
          <span class="mc-toggle-label">Vibration:</span>
          <button class="mc-toggle-btn ${e.vibration?"on":"off"}" id="btn-toggle-vibration">
            ${e.vibration?"ON":"OFF"}
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
    `,this.currentScreen="controls",this.attachControlsMenuListeners(),this.updateFocusableElements()}attachControlsMenuListeners(){const t=Ge();this.container.querySelector("#btn-toggle-gamepad")?.addEventListener("click",()=>{this.playClickSound();const a=t.getSettings();t.updateSettings({enabled:!a.enabled}),this.buildControlsMenu()});const e=this.container.querySelector("#slider-deadzone"),n=this.container.querySelector("#val-deadzone");e?.addEventListener("input",()=>{const a=parseInt(e.value);n.textContent=`${a}%`,t.updateSettings({deadzone:a/100})});const s=this.container.querySelector("#slider-sensitivity"),r=this.container.querySelector("#val-sensitivity");s?.addEventListener("input",()=>{const a=parseInt(s.value);r.textContent=`${a}%`,t.updateSettings({sensitivity:a/100})}),this.container.querySelector("#btn-toggle-inverty")?.addEventListener("click",()=>{this.playClickSound();const a=t.getSettings();t.updateSettings({invertY:!a.invertY}),this.buildControlsMenu()}),this.container.querySelector("#btn-toggle-vibration")?.addEventListener("click",()=>{this.playClickSound();const a=t.getSettings();t.updateSettings({vibration:!a.vibration}),a.vibration||t.vibrate(200,.5,.5),this.buildControlsMenu()}),this.container.querySelectorAll(".mc-control-btn[data-action]").forEach(a=>{a.addEventListener("click",async()=>{const l=a.getAttribute("data-action");if(!l)return;this.playClickSound(),this.isRemapping=!0,this._remappingAction=l,a.textContent="Press button...",a.classList.add("remapping");const c=await t.waitForButtonPress(5e3);this.isRemapping=!1,this._remappingAction=null,c!==null&&(t.setButtonMapping(c,l),this.playClickSound()),this.buildControlsMenu()})}),this.container.querySelector("#btn-reset-controls")?.addEventListener("click",()=>{this.playClickSound(),t.resetToDefaults(),this.buildControlsMenu()}),this.container.querySelector("#btn-back-controls")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}buildAboutMenu(){this.container.innerHTML=`
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
    `,this.currentScreen="about",this.attachAboutMenuListeners(),this.updateFocusableElements()}attachAboutMenuListeners(){this.container.querySelector("#btn-back-about")?.addEventListener("click",()=>{this.playClickSound(),this.buildOptionsMenu()})}playClickSound(){ve().playUIClick()}applySettings(){const t=ve(),e=ss(),n=this.settings.sound.masterVolume/100;t.setMasterVolume(n*(this.settings.sound.soundEffectsVolume/100)),e.setVolume(n*(this.settings.sound.musicVolume/100)),e.setEnabled(this.settings.musicEnabled),this.onSettingsChange?.(this.settings)}loadSettings(){try{const t=localStorage.getItem("isocraft_settings");if(t){const e=JSON.parse(t),n={...Ki,...e,sound:{...Ki.sound,...e.sound||{}},video:{...Ki.video,...e.video||{}}};return n.video.zoom=Ki.video.zoom,n}}catch{}return{...Ki}}saveSettings(){try{localStorage.setItem("isocraft_settings",JSON.stringify(this.settings))}catch{}this.applySettings()}getSettings(){return{...this.settings}}toggleDebugSetting(){this.settings.showFPS=!this.settings.showFPS,this.saveSettings()}show(){this.isVisible||(this.isVisible=!0,this.container.style.display="flex",this.buildMainMenu(),Ge().setMenuMode(!0),this.playClickSound())}hide(){this.isVisible&&(this.isVisible=!1,this.container.style.display="none",Ge().setMenuMode(!1))}toggle(){this.isVisible?this.currentScreen==="sound"||this.currentScreen==="video"||this.currentScreen==="about"||this.currentScreen==="controls"?(this.playClickSound(),this.buildOptionsMenu()):this.currentScreen==="options"?(this.playClickSound(),this.buildMainMenu()):(this.hide(),this.onResume?.()):this.show()}isMenuVisible(){return this.isVisible}destroy(){this.container.remove();const t=document.getElementById("pause-menu-styles");t&&t.remove()}}class i0{container;visible=!1;settings;onChangeCallback=null;waterYOffset=0;onWaterYChangeCallback=null;constructor(){this.settings={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3},this.container=document.createElement("div"),this.container.className="swim-debug-ui",this.container.style.display="none",this.buildUI(),this.addStyles(),document.body.appendChild(this.container),window.addEventListener("keydown",t=>{t.code==="KeyW"&&t.shiftKey&&(t.preventDefault(),this.toggleVisibility())})}setOnChange(t){this.onChangeCallback=t}setOnWaterYChange(t){this.onWaterYChangeCallback=t}buildUI(){this.container.innerHTML=`
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
    `,setTimeout(()=>this.bindEvents(),0)}bindEvents(){const t=document.getElementById("swim-water-y"),e=document.getElementById("swim-water-y-val");t?.addEventListener("input",()=>{this.waterYOffset=parseFloat(t.value),e&&(e.textContent=this.waterYOffset.toFixed(2)),this.onWaterYChangeCallback?.(this.waterYOffset)}),this.bindSlider("swim-height","heightOffset"),this.bindSlider("swim-pivot-y","pivotOffsetY"),this.bindSlider("swim-pivot-z","pivotOffsetZ"),this.bindSlider("swim-mesh-rot","meshRotationX"),this.bindSlider("swim-head-rot","headRotationX"),document.getElementById("swim-reset")?.addEventListener("click",()=>{this.resetDefaults()}),document.getElementById("swim-copy")?.addEventListener("click",()=>{this.copyValues()})}bindSlider(t,e){const n=document.getElementById(t),s=document.getElementById(`${t}-val`);!n||!s||n.addEventListener("input",()=>{const r=parseFloat(n.value);this.settings[e]=r,s.textContent=r.toFixed(2),this.onChangeCallback?.(this.settings)})}resetDefaults(){this.settings={name:"Diving Down",meshRotationX:1.3,bodyRotationX:0,headRotationX:-1.74,armForwardAngle:Math.PI/1.8,armStrokeAmplitude:.6,legKickAmplitude:.4,heightOffset:-.7,pivotOffsetY:.2,pivotOffsetZ:.3},this.waterYOffset=0,this.updateSlider("swim-water-y",this.waterYOffset),this.updateSlider("swim-height",this.settings.heightOffset),this.updateSlider("swim-pivot-y",this.settings.pivotOffsetY),this.updateSlider("swim-pivot-z",this.settings.pivotOffsetZ),this.updateSlider("swim-mesh-rot",this.settings.meshRotationX),this.updateSlider("swim-head-rot",this.settings.headRotationX),this.onChangeCallback?.(this.settings),this.onWaterYChangeCallback?.(this.waterYOffset)}updateSlider(t,e){const n=document.getElementById(t),s=document.getElementById(`${t}-val`);n&&(n.value=String(e)),s&&(s.textContent=e.toFixed(2))}copyValues(){const t=`// Swim pose settings
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
const WATER_SWIM_Y_OFFSET = ${this.waterYOffset.toFixed(2)};`;navigator.clipboard.writeText(t).then(()=>{const e=document.getElementById("swim-output");e&&(e.textContent="✓ Copied to clipboard!",setTimeout(()=>{e.textContent=""},2e3))})}addStyles(){if(!document.getElementById("minecraft-font-styles")){const e=document.createElement("style");e.id="minecraft-font-styles",e.textContent=Fi,document.head.appendChild(e)}const t=document.createElement("style");t.textContent=`
      .swim-debug-ui {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1001;
        font-family: ${se};
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
        font-family: ${se};
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
    `,document.head.appendChild(t)}toggleVisibility(){this.visible=!this.visible,this.container.style.display=this.visible?"block":"none"}destroy(){this.container.remove()}}const Gs=[o.Stone,o.Dirt,o.Grass,o.Sand,o.RedSand,o.Gravel,o.Clay,o.Podzol,o.Mycelium,o.Snow,o.SnowBlock,o.Ice,o.PackedIce,o.BlueIce,o.Terracotta,o.OakPlanks,o.BirchPlanks,o.SprucePlanks,o.JunglePlanks,o.AcaciaPlanks,o.DarkOakPlanks,o.CherryPlanks,o.MangrovePlanks,o.OakLog,o.BirchLog,o.SpruceLog,o.JungleLog,o.AcaciaLog,o.DarkOakLog,o.CherryLog,o.MangroveLog,o.StrippedOakLog,o.StrippedBirchLog,o.StrippedSpruceLog,o.StrippedJungleLog,o.StrippedAcaciaLog,o.StrippedDarkOakLog,o.StrippedCherryLog,o.StrippedMangroveLog,o.OakLeaves,o.BirchLeaves,o.SpruceLeaves,o.JungleLeaves,o.AcaciaLeaves,o.DarkOakLeaves,o.CherryLeaves,o.MangroveLeaves,o.OakSapling,o.BirchSapling,o.SpruceSapling,o.JungleSapling,o.AcaciaSapling,o.DarkOakSapling,o.CherrySapling,o.MangroveSapling,o.OakDoor,o.BirchDoor,o.SpruceDoor,o.JungleDoor,o.AcaciaDoor,o.DarkOakDoor,o.CherryDoor,o.MangroveDoor,o.OakTrapdoor,o.BirchTrapdoor,o.SpruceTrapdoor,o.JungleTrapdoor,o.AcaciaTrapdoor,o.DarkOakTrapdoor,o.CherryTrapdoor,o.MangroveTrapdoor,o.Cactus,o.Bedrock],Vs={[o.Stone]:"Stone",[o.Dirt]:"Dirt",[o.Grass]:"Grass Block",[o.Sand]:"Sand",[o.RedSand]:"Red Sand",[o.Gravel]:"Gravel",[o.Clay]:"Clay",[o.Podzol]:"Podzol",[o.Mycelium]:"Mycelium",[o.Snow]:"Snow",[o.SnowBlock]:"Snow Block",[o.Ice]:"Ice",[o.PackedIce]:"Packed Ice",[o.BlueIce]:"Blue Ice",[o.Terracotta]:"Terracotta",[o.OakPlanks]:"Oak Planks",[o.BirchPlanks]:"Birch Planks",[o.SprucePlanks]:"Spruce Planks",[o.JunglePlanks]:"Jungle Planks",[o.AcaciaPlanks]:"Acacia Planks",[o.DarkOakPlanks]:"Dark Oak Planks",[o.CherryPlanks]:"Cherry Planks",[o.MangrovePlanks]:"Mangrove Planks",[o.OakLog]:"Oak Log",[o.BirchLog]:"Birch Log",[o.SpruceLog]:"Spruce Log",[o.JungleLog]:"Jungle Log",[o.AcaciaLog]:"Acacia Log",[o.DarkOakLog]:"Dark Oak Log",[o.CherryLog]:"Cherry Log",[o.MangroveLog]:"Mangrove Log",[o.StrippedOakLog]:"Stripped Oak Log",[o.StrippedBirchLog]:"Stripped Birch Log",[o.StrippedSpruceLog]:"Stripped Spruce Log",[o.StrippedJungleLog]:"Stripped Jungle Log",[o.StrippedAcaciaLog]:"Stripped Acacia Log",[o.StrippedDarkOakLog]:"Stripped Dark Oak Log",[o.StrippedCherryLog]:"Stripped Cherry Log",[o.StrippedMangroveLog]:"Stripped Mangrove Log",[o.OakLeaves]:"Oak Leaves",[o.BirchLeaves]:"Birch Leaves",[o.SpruceLeaves]:"Spruce Leaves",[o.JungleLeaves]:"Jungle Leaves",[o.AcaciaLeaves]:"Acacia Leaves",[o.DarkOakLeaves]:"Dark Oak Leaves",[o.CherryLeaves]:"Cherry Leaves",[o.MangroveLeaves]:"Mangrove Leaves",[o.OakSapling]:"Oak Sapling",[o.BirchSapling]:"Birch Sapling",[o.SpruceSapling]:"Spruce Sapling",[o.JungleSapling]:"Jungle Sapling",[o.AcaciaSapling]:"Acacia Sapling",[o.DarkOakSapling]:"Dark Oak Sapling",[o.CherrySapling]:"Cherry Sapling",[o.MangroveSapling]:"Mangrove Sapling",[o.OakDoor]:"Oak Door",[o.BirchDoor]:"Birch Door",[o.SpruceDoor]:"Spruce Door",[o.JungleDoor]:"Jungle Door",[o.AcaciaDoor]:"Acacia Door",[o.DarkOakDoor]:"Dark Oak Door",[o.CherryDoor]:"Cherry Door",[o.MangroveDoor]:"Mangrove Door",[o.OakTrapdoor]:"Oak Trapdoor",[o.BirchTrapdoor]:"Birch Trapdoor",[o.SpruceTrapdoor]:"Spruce Trapdoor",[o.JungleTrapdoor]:"Jungle Trapdoor",[o.AcaciaTrapdoor]:"Acacia Trapdoor",[o.DarkOakTrapdoor]:"Dark Oak Trapdoor",[o.CherryTrapdoor]:"Cherry Trapdoor",[o.MangroveTrapdoor]:"Mangrove Trapdoor",[o.Cactus]:"Cactus",[o.Bedrock]:"Bedrock"},s0={[o.Grass]:{top:"/textures/grass_block_top.png",side:"/textures/grass_block_side.png",bottom:"/textures/dirt.png"},[o.Podzol]:{top:"/textures/podzol_top.png",side:"/textures/podzol_side.png",bottom:"/textures/dirt.png"},[o.Mycelium]:{top:"/textures/mycelium_top.png",side:"/textures/mycelium_side.png",bottom:"/textures/dirt.png"},[o.Snow]:"/textures/snow.png",[o.SnowBlock]:"/textures/snow.png",[o.OakLog]:{top:"/textures/oak_log_top.png",side:"/textures/oak_log.png"},[o.BirchLog]:{top:"/textures/birch_log_top.png",side:"/textures/birch_log.png"},[o.SpruceLog]:{top:"/textures/spruce_log_top.png",side:"/textures/spruce_log.png"},[o.JungleLog]:{top:"/textures/jungle_log_top.png",side:"/textures/jungle_log.png"},[o.AcaciaLog]:{top:"/textures/acacia_log_top.png",side:"/textures/acacia_log.png"},[o.DarkOakLog]:{top:"/textures/dark_oak_log_top.png",side:"/textures/dark_oak_log.png"},[o.CherryLog]:{top:"/textures/cherry_log_top.png",side:"/textures/cherry_log.png"},[o.MangroveLog]:{top:"/textures/mangrove_log_top.png",side:"/textures/mangrove_log.png"},[o.Cactus]:{top:"/textures/cactus_top.png",side:"/textures/cactus_side.png"},[o.Dirt]:"/textures/dirt.png",[o.Stone]:"/textures/stone.png",[o.Sand]:"/textures/sand.png",[o.RedSand]:"/textures/red_sand.png",[o.Gravel]:"/textures/gravel.png",[o.Clay]:"/textures/clay.png",[o.Terracotta]:"/textures/terracotta.png",[o.Ice]:"/textures/ice.png",[o.PackedIce]:"/textures/packed_ice.png",[o.BlueIce]:"/textures/blue_ice.png",[o.Bedrock]:"/textures/bedrock.png",[o.OakLeaves]:"/textures/oak_leaves.png",[o.BirchLeaves]:"/textures/birch_leaves.png",[o.SpruceLeaves]:"/textures/spruce_leaves.png",[o.JungleLeaves]:"/textures/jungle_leaves.png",[o.AcaciaLeaves]:"/textures/acacia_leaves.png",[o.DarkOakLeaves]:"/textures/dark_oak_leaves.png",[o.CherryLeaves]:"/textures/cherry_leaves.png",[o.MangroveLeaves]:"/textures/mangrove_leaves.png",[o.OakSapling]:"/textures/oak_sapling.png",[o.BirchSapling]:"/textures/birch_sapling.png",[o.SpruceSapling]:"/textures/spruce_sapling.png",[o.JungleSapling]:"/textures/jungle_sapling.png",[o.AcaciaSapling]:"/textures/acacia_sapling.png",[o.DarkOakSapling]:"/textures/dark_oak_sapling.png",[o.CherrySapling]:"/textures/cherry_sapling.png",[o.MangroveSapling]:"/textures/mangrove_sapling.png",[o.OakPlanks]:"/textures/oak_planks.png",[o.BirchPlanks]:"/textures/birch_planks.png",[o.SprucePlanks]:"/textures/spruce_planks.png",[o.JunglePlanks]:"/textures/jungle_planks.png",[o.AcaciaPlanks]:"/textures/acacia_planks.png",[o.DarkOakPlanks]:"/textures/dark_oak_planks.png",[o.CherryPlanks]:"/textures/cherry_planks.png",[o.MangrovePlanks]:"/textures/mangrove_planks.png",[o.StrippedOakLog]:{top:"/textures/stripped_oak_log_top.png",side:"/textures/stripped_oak_log.png"},[o.StrippedBirchLog]:{top:"/textures/stripped_birch_log_top.png",side:"/textures/stripped_birch_log.png"},[o.StrippedSpruceLog]:{top:"/textures/stripped_spruce_log_top.png",side:"/textures/stripped_spruce_log.png"},[o.StrippedJungleLog]:{top:"/textures/stripped_jungle_log_top.png",side:"/textures/stripped_jungle_log.png"},[o.StrippedAcaciaLog]:{top:"/textures/stripped_acacia_log_top.png",side:"/textures/stripped_acacia_log.png"},[o.StrippedDarkOakLog]:{top:"/textures/stripped_dark_oak_log_top.png",side:"/textures/stripped_dark_oak_log.png"},[o.StrippedCherryLog]:{top:"/textures/stripped_cherry_log_top.png",side:"/textures/stripped_cherry_log.png"},[o.StrippedMangroveLog]:{top:"/textures/stripped_mangrove_log_top.png",side:"/textures/stripped_mangrove_log.png"},[o.OakDoor]:"/textures/oak_door_bottom.png",[o.BirchDoor]:"/textures/birch_door_bottom.png",[o.SpruceDoor]:"/textures/spruce_door_bottom.png",[o.JungleDoor]:"/textures/jungle_door_bottom.png",[o.AcaciaDoor]:"/textures/acacia_door_bottom.png",[o.DarkOakDoor]:"/textures/dark_oak_door_bottom.png",[o.CherryDoor]:"/textures/cherry_door_bottom.png",[o.MangroveDoor]:"/textures/mangrove_door_bottom.png",[o.OakTrapdoor]:"/textures/oak_trapdoor.png",[o.BirchTrapdoor]:"/textures/birch_trapdoor.png",[o.SpruceTrapdoor]:"/textures/spruce_trapdoor.png",[o.JungleTrapdoor]:"/textures/jungle_trapdoor.png",[o.AcaciaTrapdoor]:"/textures/acacia_trapdoor.png",[o.DarkOakTrapdoor]:"/textures/dark_oak_trapdoor.png",[o.CherryTrapdoor]:"/textures/cherry_trapdoor.png",[o.MangroveTrapdoor]:"/textures/mangrove_trapdoor.png"};o.Stone+"",o.Dirt+"",o.Grass+"",o.Sand+"",o.RedSand+"",o.Gravel+"",o.Clay+"",o.Terracotta+"",o.Ice+"",o.PackedIce+"",o.BlueIce+"",o.Snow+"",o.SnowBlock+"",o.Bedrock+"",o.OakPlanks+"",o.BirchPlanks+"",o.SprucePlanks+"",o.JunglePlanks+"",o.AcaciaPlanks+"",o.DarkOakPlanks+"",o.CherryPlanks+"",o.MangrovePlanks+"",o.OakLog+"",o.BirchLog+"",o.SpruceLog+"",o.JungleLog+"",o.AcaciaLog+"",o.DarkOakLog+"",o.CherryLog+"",o.MangroveLog+"",o.StrippedOakLog+"",o.StrippedBirchLog+"",o.StrippedSpruceLog+"",o.StrippedJungleLog+"",o.StrippedAcaciaLog+"",o.StrippedDarkOakLog+"",o.StrippedCherryLog+"",o.StrippedMangroveLog+"",o.OakLeaves+"",o.BirchLeaves+"",o.SpruceLeaves+"",o.JungleLeaves+"",o.AcaciaLeaves+"",o.DarkOakLeaves+"",o.CherryLeaves+"",o.MangroveLeaves+"",o.Podzol+"",o.Mycelium+"",o.OakSapling+"",o.BirchSapling+"",o.SpruceSapling+"",o.JungleSapling+"",o.AcaciaSapling+"",o.DarkOakSapling+"",o.CherrySapling+"",o.MangroveSapling+"",o.OakDoor+"",o.BirchDoor+"",o.SpruceDoor+"",o.JungleDoor+"",o.AcaciaDoor+"",o.DarkOakDoor+"",o.CherryDoor+"",o.MangroveDoor+"",o.OakTrapdoor+"",o.BirchTrapdoor+"",o.SpruceTrapdoor+"",o.JungleTrapdoor+"",o.AcaciaTrapdoor+"",o.DarkOakTrapdoor+"",o.CherryTrapdoor+"",o.MangroveTrapdoor+"",o.Cactus+"";class r0{container;isVisible=!1;inventoryHUD;tooltip;focusedSlotIndex=0;currentBlocks=Gs;GRID_COLUMNS=9;savedGamepadCallbacks={};onOpen;onClose;constructor(t){this.inventoryHUD=t,this.injectStyles(),this.container=this.createInventoryUI(),document.body.appendChild(this.container),this.tooltip=this.createTooltip(),document.body.appendChild(this.tooltip)}injectStyles(){if(!document.getElementById("minecraft-font-styles")){const e=document.createElement("style");e.id="minecraft-font-styles",e.textContent=Fi,document.head.appendChild(e)}if(document.getElementById("creative-inventory-styles"))return;const t=document.createElement("style");t.id="creative-inventory-styles",t.textContent=`
      #creative-inventory {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.65);
        z-index: 9999;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: ${se};
        image-rendering: pixelated;
      }
      
      .creative-panel {
        background: #c6c6c6;
        border: 4px solid;
        border-color: #ffffff #555555 #555555 #ffffff;
        padding: 8px;
        box-shadow: inset 2px 2px 0 rgba(255,255,255,0.3),
                    inset -2px -2px 0 rgba(0,0,0,0.2);
      }
      
      .creative-title {
        color: #404040;
        font-size: 16px;
        text-align: center;
        margin-bottom: 8px;
        text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
        font-family: ${se};
      }
      
      .creative-grid {
        display: grid;
        grid-template-columns: repeat(9, 40px);
        gap: 2px;
        background: #8b8b8b;
        padding: 4px;
        border: 2px solid;
        border-color: #373737 #ffffff #ffffff #373737;
      }
      
      .creative-slot {
        width: 40px;
        height: 40px;
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
        width: 32px;
        height: 32px;
        background: #555550;
        border: 1px solid;
        border-color: #3a3a38 #7a7a75 #7a7a75 #3a3a38;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 100px;
      }
      
      .creative-cube-container {
        width: 24px;
        height: 24px;
        transform-style: preserve-3d;
      }
      
      .creative-cube {
        width: 24px;
        height: 24px;
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(-30deg) rotateY(45deg);
      }
      
      .creative-cube .face {
        position: absolute;
        width: 24px;
        height: 24px;
        background-size: cover;
        background-position: center;
        image-rendering: pixelated;
        backface-visibility: hidden;
      }
      
      .creative-cube .face-top {
        transform: rotateX(90deg) translateZ(12px);
        filter: brightness(1.0);
      }
      
      .creative-cube .face-front {
        transform: translateZ(12px);
        filter: brightness(0.8);
      }
      
      .creative-cube .face-right {
        transform: rotateY(90deg) translateZ(12px);
        filter: brightness(0.6);
      }
      
      .creative-cube .face-left {
        transform: rotateY(-90deg) translateZ(12px);
        filter: brightness(0.7);
      }
      
      /* Flat sprite rendering for saplings, flowers, etc. */
      .creative-sprite {
        width: 24px;
        height: 24px;
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
        font-family: ${se};
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
        font-size: 12px;
        text-align: center;
        margin-top: 12px;
        font-family: ${se};
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
        font-family: ${se};
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
        padding: 6px 8px;
        font-family: ${se};
        font-size: 14px;
        background: #000000;
        border: 2px solid;
        border-color: #373737 #ffffff #ffffff #373737;
        color: #ffffff;
        outline: none;
      }
      
      .creative-search::placeholder {
        color: #606060;
      }
    `,document.head.appendChild(t)}createInventoryUI(){const t=document.createElement("div");t.id="creative-inventory",t.innerHTML=`
      <div class="creative-tabs">
        <div class="creative-tab active">Building Blocks</div>
      </div>
      <div class="creative-panel">
        <div class="creative-title">Creative Inventory</div>
        <div class="creative-search-container">
          <input type="text" class="creative-search" placeholder="Search blocks..." id="creative-search">
        </div>
        <div class="creative-grid" id="creative-grid">
          <!-- Slots will be generated here -->
        </div>
      </div>
      <div class="creative-close-hint">Press E, ESC, or Circle/B to close • D-Pad to navigate • Cross/A to select</div>
    `;const e=t.querySelector("#creative-grid");this.populateGrid(e,Gs);const n=t.querySelector("#creative-search");return n.addEventListener("input",()=>{const s=n.value.toLowerCase();this.currentBlocks=Gs.filter(r=>(Vs[r]||o[r]).toLowerCase().includes(s)),this.populateGrid(e,this.currentBlocks),this.focusedSlotIndex=0,Ge().isConnected()&&this.currentBlocks.length>0&&this.setFocusedSlot(0)}),t.addEventListener("click",s=>{s.target===t&&this.hide()}),t}populateGrid(t,e){t.innerHTML="",e.forEach(s=>{const r=this.createBlockSlot(s);t.appendChild(r)});const n=e.length%9;if(n>0)for(let s=0;s<9-n;s++){const r=document.createElement("div");r.className="creative-slot",r.innerHTML='<div class="creative-slot-inner"></div>',t.appendChild(r)}}createBlockSlot(t){const e=document.createElement("div");e.className="creative-slot",e.dataset.blockType=t.toString();const n=document.createElement("div");if(n.className="creative-slot-inner",Uc(t)){const s=document.createElement("div");s.className="creative-sprite";const r=this.getTextureConfig(t);r&&(s.style.backgroundImage=`url(${r.side})`),n.appendChild(s)}else{const s=document.createElement("div");s.className="creative-cube-container";const r=document.createElement("div");r.className="creative-cube";const a=this.getTextureConfig(t);[{name:"top",brightness:$e.top},{name:"front",brightness:$e.front},{name:"right",brightness:$e.right},{name:"left",brightness:$e.left}].forEach(({name:c,brightness:h})=>{const d=document.createElement("div");if(d.className=`face face-${c}`,a){const u=c==="top"?a.top:a.side;d.style.backgroundImage=`url(${u})`,d.style.filter=ns(t,c,h)}else{const u=Oc(t);d.style.backgroundColor=u}r.appendChild(d)}),s.appendChild(r),n.appendChild(s)}return e.appendChild(n),e.addEventListener("click",()=>{this.addBlockToInventory(t)}),e.addEventListener("mouseenter",s=>{const r=Vs[t]||o[t];this.showTooltip(r,s.clientX,s.clientY)}),e.addEventListener("mousemove",s=>{this.moveTooltip(s.clientX,s.clientY)}),e.addEventListener("mouseleave",()=>{this.hideTooltip()}),e}getTextureConfig(t){const e=s0[t];return e?typeof e=="string"?{top:e,side:e,bottom:e}:{top:e.top,side:e.side,bottom:e.bottom||e.side}:null}addBlockToInventory(t){const e={blockType:t,count:64,name:Vs[t]||o[t]};this.inventoryHUD.addItem(e)&&ve().playUIClick()}createTooltip(){const t=document.createElement("div");return t.className="creative-tooltip",t}showTooltip(t,e,n){this.tooltip.textContent=t,this.tooltip.style.display="block",this.moveTooltip(e,n)}moveTooltip(t,e){this.tooltip.style.left=`${t+15}px`,this.tooltip.style.top=`${e+15}px`;const s=this.tooltip.getBoundingClientRect();s.right>window.innerWidth&&(this.tooltip.style.left=`${t-s.width-15}px`),s.bottom>window.innerHeight&&(this.tooltip.style.top=`${e-s.height-15}px`)}hideTooltip(){this.tooltip.style.display="none"}setupGamepadNavigation(){const t=Ge();this.savedGamepadCallbacks={onMenuNavigate:t.onMenuNavigate,onMenuSelect:t.onMenuSelect,onMenuBack:t.onMenuBack},t.onMenuNavigate=e=>{this.navigateSlot(e)},t.onMenuSelect=()=>{this.selectFocusedSlot()},t.onMenuBack=()=>{this.hide()},t.setMenuMode(!0)}restoreGamepadCallbacks(){const t=Ge();t.onMenuNavigate=this.savedGamepadCallbacks.onMenuNavigate,t.onMenuSelect=this.savedGamepadCallbacks.onMenuSelect,t.onMenuBack=this.savedGamepadCallbacks.onMenuBack,t.setMenuMode(!1)}navigateSlot(t){const e=this.currentBlocks.length;if(e===0)return;const n=Math.ceil(e/this.GRID_COLUMNS),s=Math.floor(this.focusedSlotIndex/this.GRID_COLUMNS),r=this.focusedSlotIndex%this.GRID_COLUMNS;let a=s,l=r;switch(t){case"up":a=s>0?s-1:n-1;break;case"down":a=s<n-1?s+1:0;break;case"left":r>0?l=r-1:(l=this.GRID_COLUMNS-1,a=s>0?s-1:n-1);break;case"right":r<this.GRID_COLUMNS-1?l=r+1:(l=0,a=s<n-1?s+1:0);break}let c=a*this.GRID_COLUMNS+l;c>=e&&(t==="down"||t==="right"?c=0:c=e-1),this.setFocusedSlot(c),ve().playUIClick()}setFocusedSlot(t){const e=this.container.querySelectorAll(".creative-slot");e.forEach(s=>s.classList.remove("gamepad-focus")),this.focusedSlotIndex=Math.max(0,Math.min(t,this.currentBlocks.length-1));const n=e[this.focusedSlotIndex];if(n&&this.currentBlocks[this.focusedSlotIndex]!==void 0){n.classList.add("gamepad-focus");const s=this.currentBlocks[this.focusedSlotIndex],r=Vs[s]||o[s],a=n.getBoundingClientRect();this.showTooltip(r,a.right,a.top)}}selectFocusedSlot(){if(this.focusedSlotIndex<this.currentBlocks.length){const t=this.currentBlocks[this.focusedSlotIndex];this.addBlockToInventory(t)}}show(){if(this.isVisible)return;this.isVisible=!0,this.container.style.display="flex";const t=this.container.querySelector("#creative-search");t.value="";const e=this.container.querySelector("#creative-grid");this.currentBlocks=[...Gs],this.populateGrid(e,this.currentBlocks),this.focusedSlotIndex=0,this.setupGamepadNavigation(),setTimeout(()=>{Ge().isConnected()?this.setFocusedSlot(0):t.focus()},50),ve().playUIClick(),this.onOpen?.()}hide(){this.isVisible&&(this.isVisible=!1,this.container.style.display="none",this.hideTooltip(),this.restoreGamepadCallbacks(),this.onClose?.())}toggle(){this.isVisible?this.hide():this.show()}isInventoryVisible(){return this.isVisible}destroy(){this.container.remove(),this.tooltip.remove();const t=document.getElementById("creative-inventory-styles");t&&t.remove()}}const jl=25,Qr=10,Qi=7/9,Zl=1.8,a0=1,o0=.3,l0=.7;class c0{world;waterSwimYOffset=0;constructor(t){this.world=t}setWaterSwimYOffset(t){this.waterSwimYOffset=t}calculateTargetY(t,e,n,s){const r=s?this.world.getHeightAt(t,e):this.world.getHeightAtForPlayer(t,e,n);return this.world.getBlockAt(Math.floor(t),Math.floor(r),Math.floor(e))===o.Water?r+Qi+this.waterSwimYOffset:r+1}isOverWater(t,e,n){const s=this.world.getHeightAt(t,e);return this.world.getBlockAt(Math.floor(t),Math.floor(s),Math.floor(e))===o.Water}isInWater(t,e,n){const s=this.world.getHeightAt(t,e);if(this.world.getBlockAt(Math.floor(t),Math.floor(s),Math.floor(e))!==o.Water)return!1;const a=s+Qi+.5;return n<=a+.1}canStand(t,e,n){return this.world.canStandAt(t,e,n)}getBlockAtFeet(t,e){const n=this.world.getHeightAt(t,e);return this.world.getBlockAt(Math.floor(t),Math.floor(n),Math.floor(e))}tryMove(t,e,n){const{position:s,isJumping:r,isSwimming:a,isCrouching:l}=t,c=s.x+e,h=s.z+n,d=a?this.world.getHeightAt(c,h):this.world.getHeightAtForPlayer(c,h,s.y),u=this.world.getBlockAt(Math.floor(c),Math.floor(d),Math.floor(h)),f=u===o.Water;let m;f?m=d+Qi+this.waterSwimYOffset:m=d+1;const _=m-s.y,g=_<-.1||r?s.y:m;if(!(!f&&this.world.checkCollision(c,g,h))){const V=!r&&!a&&_<-.5;return l&&V&&!f?this.world.canStandAt(c,s.y,h)?{newX:c,newZ:h,newY:s.y,moved:!0,shouldFall:!1,blockType:u}:{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}:{newX:c,newZ:h,newY:m,moved:!0,shouldFall:V,blockType:u}}const E=a?this.world.getHeightAt(c,s.z):this.world.getHeightAtForPlayer(c,s.z,s.y),y=this.world.getBlockAt(Math.floor(c),Math.floor(E),Math.floor(s.z)),w=y===o.Water,P=w?E+Qi+this.waterSwimYOffset:E+1,L=P-s.y,k=L<-.1||r?s.y:P;if(!(!w&&this.world.checkCollision(c,k,s.z))){const V=!r&&!a&&L<-.5;if(l&&V&&!w){if(this.world.canStandAt(c,s.y,s.z))return{newX:c,newZ:s.z,newY:s.y,moved:!0,shouldFall:!1,blockType:y}}else return{newX:c,newZ:s.z,newY:P,moved:!0,shouldFall:V,blockType:y}}const S=a?this.world.getHeightAt(s.x,h):this.world.getHeightAtForPlayer(s.x,h,s.y),C=this.world.getBlockAt(Math.floor(s.x),Math.floor(S),Math.floor(h)),G=C===o.Water,N=G?S+Qi+this.waterSwimYOffset:S+1,$=N-s.y,Y=$<-.1||r?s.y:N;if(!(!G&&this.world.checkCollision(s.x,Y,h))){const V=!r&&!a&&$<-.5;return l&&V&&!G?this.world.canStandAt(s.x,s.y,h)?{newX:s.x,newZ:h,newY:s.y,moved:!0,shouldFall:!1,blockType:C}:{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}:{newX:s.x,newZ:h,newY:N,moved:!0,shouldFall:V,blockType:C}}return{newX:s.x,newZ:s.z,newY:s.y,moved:!1,shouldFall:!1,blockType:null}}applyGravity(t,e){return t-jl*e}calculateVerticalMovement(t,e){return t*e}checkCeilingCollision(t,e,n){return this.world.checkHeadCollision(t,e,n)?{hit:!0,maxY:Math.floor(e+Zl)-Zl-.01}:{hit:!1,maxY:e}}getJumpVelocity(){return Qr}calculateJumpProgress(t,e){const n=t-e,s=Qr*Qr/(2*jl);return Math.max(0,Math.min(1,n/s))}hasLanded(t,e,n){return t<=e&&n<0}getSpeedMultiplier(t,e){return e?l0:t?o0:a0}}const ta=200,Kl=15;class ln{container;analogStick;analogKnob;jumpButton;inventoryButton;callbacks;analogActive=!1;analogStartX=0;analogStartY=0;analogTouchId=null;analogTouchStartTime=0;analogMoved=!1;moveX=0;moveY=0;pinchStartDistance=0;pinchTouchIds=[];interactionTouchId=null;interactionStartTime=0;interactionStartX=0;interactionStartY=0;isBreaking=!1;breakCheckTimeout=null;crosshairTouchId=null;static isMobileDevice=null;constructor(t){this.callbacks=t,this.container=this.createContainer(),this.analogStick=this.createAnalogStick(),this.analogKnob=this.createAnalogKnob(),this.jumpButton=this.createJumpButton(),this.inventoryButton=this.createInventoryButton(),this.analogStick.appendChild(this.analogKnob),this.container.appendChild(this.analogStick),this.container.appendChild(this.jumpButton),this.container.appendChild(this.inventoryButton),document.body.appendChild(this.container),this.setupTouchHandlers()}static isMobile(){if(ln.isMobileDevice!==null)return ln.isMobileDevice;if(new URLSearchParams(window.location.search).get("mobile")==="true")return ln.isMobileDevice=!0,!0;const e="ontouchstart"in window||navigator.maxTouchPoints>0,n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=window.innerWidth<=1024||window.innerHeight<=768;return ln.isMobileDevice=e&&(n||s),ln.isMobileDevice}static setMobileMode(t){ln.isMobileDevice=t}createContainer(){const t=document.createElement("div");return t.id="mobile-controls",t.style.cssText=`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      pointer-events: none;
      z-index: 1100;
      display: ${ln.isMobile()?"block":"none"};
    `,t}createAnalogStick(){const t=document.createElement("div");return t.id="mobile-analog",t.style.cssText=`
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
    `,t}createAnalogKnob(){const t=document.createElement("div");return t.id="mobile-analog-knob",t.style.cssText=`
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
    `,t}createJumpButton(){const t=document.createElement("div");return t.id="mobile-jump",t.style.cssText=`
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
    `,t.innerHTML=`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    `,t}createInventoryButton(){const t=document.createElement("div");return t.id="mobile-inventory",t.style.cssText=`
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
    `,t.innerHTML=`
      <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    `,t}setupTouchHandlers(){this.analogStick.addEventListener("touchstart",this.handleAnalogStart.bind(this),{passive:!1}),this.analogStick.addEventListener("touchmove",this.handleAnalogMove.bind(this),{passive:!1}),this.analogStick.addEventListener("touchend",this.handleAnalogEnd.bind(this),{passive:!1}),this.analogStick.addEventListener("touchcancel",this.handleAnalogEnd.bind(this),{passive:!1}),this.jumpButton.addEventListener("touchstart",this.handleJumpStart.bind(this),{passive:!1}),this.jumpButton.addEventListener("touchend",this.handleJumpEnd.bind(this),{passive:!1}),this.inventoryButton.addEventListener("touchstart",this.handleInventoryStart.bind(this),{passive:!1}),this.inventoryButton.addEventListener("touchend",this.handleInventoryEnd.bind(this),{passive:!1}),document.addEventListener("touchstart",this.handleGlobalTouchStart.bind(this),{passive:!1}),document.addEventListener("touchmove",this.handleGlobalTouchMove.bind(this),{passive:!1}),document.addEventListener("touchend",this.handleGlobalTouchEnd.bind(this),{passive:!1}),document.addEventListener("touchcancel",this.handleGlobalTouchEnd.bind(this),{passive:!1})}handleAnalogStart(t){if(t.preventDefault(),t.stopPropagation(),this.analogTouchId!==null)return;const e=t.changedTouches[0];this.analogTouchId=e.identifier,this.analogActive=!0,this.analogTouchStartTime=Date.now(),this.analogMoved=!1;const n=this.analogStick.getBoundingClientRect();this.analogStartX=n.left+n.width/2,this.analogStartY=n.top+n.height/2}handleAnalogMove(t){if(t.preventDefault(),t.stopPropagation(),!this.analogActive||this.analogTouchId===null)return;const e=Array.from(t.touches).find(d=>d.identifier===this.analogTouchId);if(!e)return;const n=e.clientX-this.analogStartX,s=e.clientY-this.analogStartY,r=32,a=Math.sqrt(n*n+s*s),l=Math.min(a,r);a>10&&(this.analogMoved=!0);let c=0,h=0;a>0&&(c=n/a*l,h=s/a*l),this.analogKnob.style.transform=`translate(calc(-50% + ${c}px), calc(-50% + ${h}px))`,this.moveX=c/r,this.moveY=-h/r,this.callbacks.onMove(this.moveX,this.moveY)}handleAnalogEnd(t){t.preventDefault(),t.stopPropagation(),Array.from(t.changedTouches).find(n=>n.identifier===this.analogTouchId)&&(this.analogActive=!1,this.analogTouchId=null,this.moveX=0,this.moveY=0,this.analogKnob.style.transform="translate(-50%, -50%)",this.callbacks.onMove(0,0))}handleJumpStart(t){t.preventDefault(),t.stopPropagation(),this.jumpButton.style.transform="scale(0.92)",this.jumpButton.style.background="rgba(255, 255, 255, 0.25)",this.callbacks.onJump()}handleJumpEnd(t){t.preventDefault(),t.stopPropagation(),this.jumpButton.style.transform="scale(1)",this.jumpButton.style.background="rgba(255, 255, 255, 0.12)"}handleInventoryStart(t){t.preventDefault(),t.stopPropagation(),this.inventoryButton.style.transform="scale(0.92)",this.inventoryButton.style.background="rgba(255, 255, 255, 0.25)",this.callbacks.onOpenInventory()}handleInventoryEnd(t){t.preventDefault(),t.stopPropagation(),this.inventoryButton.style.transform="scale(1)",this.inventoryButton.style.background="rgba(255, 255, 255, 0.12)"}handleGlobalTouchStart(t){const e=t.target;if(!this.isUIElement(e)){if(t.touches.length===2){this.startPinchZoom(t);return}if(t.touches.length===1&&e.tagName==="CANVAS"){const n=t.touches[0];if(this.analogTouchId!==null)return;this.interactionTouchId=n.identifier,this.interactionStartTime=Date.now(),this.interactionStartX=n.clientX,this.interactionStartY=n.clientY,this.isBreaking=!1,this.callbacks.onCrosshairMove(n.clientX,n.clientY),this.breakCheckTimeout=setTimeout(()=>{this.interactionTouchId!==null&&!this.isBreaking&&(this.isBreaking=!0,this.callbacks.onBreakStart(this.interactionStartX,this.interactionStartY))},ta)}}}handleGlobalTouchMove(t){if(t.touches.length===2&&this.pinchTouchIds.length===2){this.updatePinchZoom(t);return}if(this.interactionTouchId!==null){const e=Array.from(t.touches).find(n=>n.identifier===this.interactionTouchId);if(e){const n=e.clientX-this.interactionStartX,s=e.clientY-this.interactionStartY;Math.sqrt(n*n+s*s)>Kl&&(this.callbacks.onCrosshairMove(e.clientX,e.clientY),this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null),!this.isBreaking&&Date.now()-this.interactionStartTime>ta?(this.isBreaking=!0,this.callbacks.onBreakStart(e.clientX,e.clientY)):this.isBreaking&&(this.callbacks.onBreakEnd(),this.callbacks.onBreakStart(e.clientX,e.clientY)))}}}handleGlobalTouchEnd(t){for(const n of Array.from(t.changedTouches)){const s=this.pinchTouchIds.indexOf(n.identifier);s!==-1&&(this.pinchTouchIds.splice(s,1),this.pinchTouchIds.length<2&&(this.pinchStartDistance=0))}const e=Array.from(t.changedTouches).find(n=>n.identifier===this.interactionTouchId);if(e){this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null);const n=Date.now()-this.interactionStartTime,s=e.clientX-this.interactionStartX,r=e.clientY-this.interactionStartY,a=Math.sqrt(s*s+r*r);this.isBreaking?this.callbacks.onBreakEnd():n<ta&&a<Kl&&this.callbacks.onPlace(e.clientX,e.clientY),this.interactionTouchId=null,this.isBreaking=!1}}startPinchZoom(t){this.pinchTouchIds=[t.touches[0].identifier,t.touches[1].identifier],this.pinchStartDistance=this.getPinchDistance(t.touches[0],t.touches[1]),this.interactionTouchId!==null&&(this.breakCheckTimeout&&(clearTimeout(this.breakCheckTimeout),this.breakCheckTimeout=null),this.isBreaking&&this.callbacks.onBreakEnd(),this.interactionTouchId=null,this.isBreaking=!1)}updatePinchZoom(t){if(this.pinchStartDistance===0)return;const e=Array.from(t.touches).find(a=>a.identifier===this.pinchTouchIds[0]),n=Array.from(t.touches).find(a=>a.identifier===this.pinchTouchIds[1]);if(!e||!n)return;const s=this.getPinchDistance(e,n),r=s-this.pinchStartDistance;if(Math.abs(r)>10){const a=-r*.02;this.callbacks.onZoom(a),this.pinchStartDistance=s}}getPinchDistance(t,e){const n=t.clientX-e.clientX,s=t.clientY-e.clientY;return Math.sqrt(n*n+s*s)}isUIElement(t){let e=t;for(;e;){if(e.id==="mobile-controls"||e.id==="mobile-analog"||e.id==="mobile-jump"||e.id==="mobile-inventory"||e.id==="hotbar"||e.id==="creative-inventory"||e.id==="pause-menu"||e.id==="debug-ui")return!0;e=e.parentElement}return!1}getMovement(){return{x:this.moveX,y:this.moveY}}setVisible(t){this.container.style.display=t?"block":"none"}isVisible(){return this.container.style.display!=="none"}destroy(){this.breakCheckTimeout&&clearTimeout(this.breakCheckTimeout),this.container.remove()}}function Si(){return ln.isMobile()}const h0=7/9,ea=5.4;class d0{renderer;scene;camera;chunkManager=null;player=null;playerPhysics=null;blockHighlight=null;debugUI;shaderDebugUI;swimDebugUI;textureManager;waterSwimYOffset=0;inventoryHUD;droppedItemManager=null;blockBreaking=null;crosshair;pauseMenu;creativeInventory;generator=null;seed;targetedBlockPos=null;isMouseDown=!1;hasValidTarget=!1;isGamepadAttacking=!1;isGamepadCrouching=!1;mobileControls=null;mobileMovement={x:0,y:0};isMobileTouchBreaking=!1;clock;isInitialized=!1;isPaused=!1;cameraDistance=50;zoom=10;constructor(){this.seed=Math.floor(Math.random()*2147483647),this.renderer=new Gg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(8900331),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tc,this.scene=new Vg,this.scene.fog=new tr(8900331,100,200);const t=window.innerWidth/window.innerHeight;this.camera=new so(-this.zoom*t,this.zoom*t,this.zoom,-this.zoom,.1,1e3),this.setupIsometricCamera(),this.setupLights(),this.textureManager=new Jm,this.debugUI=new Bm,this.shaderDebugUI=new zm,this.swimDebugUI=new i0,this.inventoryHUD=new co,this.crosshair=new v_,this.pauseMenu=new n0,this.creativeInventory=new r0(this.inventoryHUD),this.swimDebugUI.setOnChange(e=>{this.player&&this.player.setSwimPose(e)}),this.swimDebugUI.setOnWaterYChange(e=>{this.waterSwimYOffset=e}),this.clock=new em,this.pauseMenu.onResume=()=>{this.isPaused=!1,this.crosshair.setVisible(!0),this.mobileControls&&Si()&&this.mobileControls.setVisible(!0)},this.pauseMenu.onToggleDebug=()=>{this.debugUI.toggleVisibility()},this.pauseMenu.onSettingsChange=e=>{this.applyVideoSettings(e.video),console.log("Settings updated:",e)},this.creativeInventory.onOpen=()=>{this.isPaused=!0,this.crosshair.setVisible(!1),this.mobileControls&&this.mobileControls.setVisible(!1)},this.creativeInventory.onClose=()=>{this.isPaused=!1,this.crosshair.setVisible(!0),this.mobileControls&&Si()&&this.mobileControls.setVisible(!0)},Si()&&this.setupMobileControls()}setupMobileControls(){this.mobileControls=new ln({onMove:(t,e)=>{this.mobileMovement.x=t,this.mobileMovement.y=e},onJump:()=>{if(this.player&&!this.isPaused)if(this.player.swimming){if(this.playerPhysics){const e=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0),n=this.player.position.y+3*.1;this.player.position.y=Math.min(n,e)}}else this.player.jump()},onOpenInventory:()=>{this.isPaused||this.creativeInventory.toggle()},onZoom:t=>{this.isPaused||(this.zoom+=t,this.zoom=Math.max(5,Math.min(26,this.zoom)),this.updateCameraZoom())},onBreakStart:(t,e)=>{this.isPaused||(this.isMobileTouchBreaking=!0,this.updateBlockHighlight(t,e))},onBreakEnd:()=>{this.isMobileTouchBreaking=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()},onPlace:(t,e)=>{this.isPaused||(this.updateBlockHighlight(t,e),this.placeBlock())},onCrosshairMove:(t,e)=>{this.isPaused||(this.crosshair.moveBy(t-this.crosshair.getPosition().x,e-this.crosshair.getPosition().y),this.updateBlockHighlight(t,e))}}),document.body.style.cursor=""}applyVideoSettings(t){t.zoom!==this.zoom&&(this.zoom=t.zoom,this.updateCameraZoom()),this.chunkManager&&(this.chunkManager.setRenderDistance(t.renderDistance),this.chunkManager.setFastGraphics(t.graphicsQuality==="low"),this.chunkManager.setZoom(this.zoom));const e={low:1,medium:1.5,high:Math.min(window.devicePixelRatio,2)};this.renderer.setPixelRatio(e[t.graphicsQuality]),t.fogEnabled&&!this.scene.fog?this.scene.fog=new tr(8900331,100,200):!t.fogEnabled&&this.scene.fog&&(this.scene.fog=null),Ks({shaderEnabled:t.shaderEnabled})}setupIsometricCamera(){const t=this.cameraDistance;this.camera.position.set(t,t,t),this.camera.lookAt(0,0,0),this.camera.up.set(0,1,0)}setupLights(){const t=new tm(16777215,.6);this.scene.add(t);const e=new Qg(16777215,.8);e.position.set(15,200,160),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048;const n=80;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.camera.near=10,e.shadow.camera.far=300,e.shadow.bias=-.0041,e.shadow.normalBias=.005,e.shadow.radius=2,this.scene.add(e.target),this.sunLight=e,this.shadowOffset={x:15,y:200,z:160},this.scene.add(e);const s=new jg(8900331,4021309,.3);this.scene.add(s)}async init(){const t=document.getElementById("loading");document.body.appendChild(this.renderer.domElement),Si()&&(this.renderer.domElement.style.touchAction="none"),t&&(t.querySelector(".loading-text").textContent="Loading Textures..."),await this.textureManager.loadTextures(),t&&(t.querySelector(".loading-text").textContent="Initializing World..."),this.generator=await V_(this.seed),this.chunkManager=new bm(this.scene,this.generator,this.textureManager),this.playerPhysics=new c0(this.chunkManager),this.droppedItemManager=new u_(this.scene,this.textureManager,this.inventoryHUD,(r,a)=>this.chunkManager.getHeightAt(r,a)),this.blockBreaking=new __(this.scene),ve().preloadCommonSounds();const e=this.findSpawnPoint();this.player=new Im(this.scene,e.x,e.z),this.player.setY(e.y),this.blockHighlight=new Om(this.scene),this.setupInputHandlers(),this.setupGamepadCommands(),window.addEventListener("resize",()=>this.handleResize()),t&&(t.style.display="none"),console.log(`⛏️ IsoCraft 3D initialized! Seed: ${this.seed.toString(16)}`),console.log("🎮 Controls: WASD to move, Space to jump, C to crouch, Mouse wheel to zoom"),console.log("🏊 Swimming activates automatically in water!"),console.log("🎵 Press ESC for game menu and sound settings"),console.log("📦 Press E to open Creative Inventory"),this.isInitialized=!0;const n=ss();n.setContext("overworld"),n.start();const s=this.pauseMenu.getSettings();s.showFPS||this.debugUI.toggleVisibility(),this.applyVideoSettings(s.video),this.animate()}findSpawnPoint(){if(!this.generator)return{x:0,y:64,z:0};for(let t=0;t<1e3;t+=8)for(let e=0;e<16;e++){const n=e/16*Math.PI*2,s=Math.floor(Math.cos(n)*t),r=Math.floor(Math.sin(n)*t),a=this.generator.getHeightAt(s,r),l=this.generator.getBiomeAt(s,r);if(!this.generator.isOcean(l)&&a>=63&&a<=80)return console.log(`🏠 Spawn found at (${s}, ${a}, ${r})`),{x:s,y:a+1,z:r}}return{x:0,y:64,z:0}}setupGamepadCommands(){const t=Ge();t.registerCommand(fe.Jump,new Z_(()=>{this.player&&!this.isPaused&&this.player.jump()})),t.registerCommand(fe.Crouch,new K_(()=>{this.player&&!this.isPaused&&!this.player.swimming&&(this.isGamepadCrouching=!this.isGamepadCrouching,this.player.setCrouching(this.isGamepadCrouching))})),t.registerCommand(fe.Attack,new Q_(()=>{this.isPaused||(this.isGamepadAttacking=!0)},()=>{this.isGamepadAttacking=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()})),t.registerCommand(fe.Use,new t0(()=>{this.isPaused||this.placeBlock()})),t.registerCommand(fe.NextSlot,new Jl("next",()=>{if(!this.isPaused){const e=this.inventoryHUD.getSelectedSlot();this.inventoryHUD.selectSlot((e+1)%9)}})),t.registerCommand(fe.PrevSlot,new Jl("prev",()=>{if(!this.isPaused){const e=this.inventoryHUD.getSelectedSlot();this.inventoryHUD.selectSlot((e-1+9)%9)}})),t.registerCommand(fe.OpenInventory,new e0(()=>{this.pauseMenu.isMenuVisible()||this.creativeInventory.toggle()})),t.onPause=()=>{this.isPaused||(this.pauseMenu.toggle(),this.isPaused=this.pauseMenu.isMenuVisible(),this.crosshair.setVisible(!this.isPaused),this.mobileControls&&this.mobileControls.setVisible(!this.isPaused&&Si()))}}setupInputHandlers(){const t=new Set;window.addEventListener("keydown",e=>{if(e.code==="Escape"){if(e.preventDefault(),this.creativeInventory.isInventoryVisible()){this.creativeInventory.hide();return}this.pauseMenu.toggle(),this.isPaused=this.pauseMenu.isMenuVisible(),this.crosshair.setVisible(!this.isPaused),this.mobileControls&&this.mobileControls.setVisible(!this.isPaused&&Si());return}if(e.code==="KeyE"){if(e.preventDefault(),this.pauseMenu.isMenuVisible())return;this.creativeInventory.toggle();return}this.isPaused||this.creativeInventory.isInventoryVisible()||(t.add(e.code),e.code==="F3"&&(e.preventDefault(),this.debugUI.toggleVisibility(),this.pauseMenu.toggleDebugSetting()))}),window.addEventListener("keyup",e=>{this.isPaused||this.creativeInventory.isInventoryVisible()||t.delete(e.code)}),this.keys=t,this.renderer.domElement.addEventListener("wheel",e=>{e.preventDefault(),this.zoom+=e.deltaY*.02,this.zoom=Math.max(5,Math.min(26,this.zoom)),this.updateCameraZoom()},{passive:!1}),this.renderer.domElement.addEventListener("mousemove",e=>{if(!this.isPaused&&(this.updateBlockHighlight(e.clientX,e.clientY),this.isMouseDown&&this.blockBreaking)){const n=this.blockBreaking.getTargetBlock();if(n&&this.blockHighlight?.isVisible()){const s=this.blockHighlight.getPosition();n.equals(s)||this.blockBreaking.stopBreaking()}}}),this.renderer.domElement.addEventListener("mousedown",e=>{this.isPaused||e.button===0&&(this.isMouseDown=!0)}),this.renderer.domElement.addEventListener("mouseup",e=>{e.button===0&&(this.isMouseDown=!1,this.blockBreaking&&this.blockBreaking.stopBreaking())}),this.renderer.domElement.addEventListener("mouseleave",()=>{this.isMouseDown=!1,this.blockBreaking&&this.blockBreaking.stopBreaking()}),this.renderer.domElement.addEventListener("contextmenu",e=>{e.preventDefault(),this.placeBlock()})}placeBlock(){if(!this.blockHighlight||!this.chunkManager||!this.player||!this.blockHighlight.isVisible())return;const t=this.blockHighlight.getPosition(),e=this.blockHighlight.getFace();let n=this.chunkManager.getBlockTypeAt(t.x,t.y,t.z),s=t.y;if(n===null||!Ci(n)){const j=this.chunkManager.getBlockTypeAt(t.x,t.y-1,t.z);j!==null&&Ci(j)&&(n=j,s=t.y-1)}if(n!==null&&Ci(n)){const j=t.x+.5-this.player.position.x,Y=s+.5-(this.player.position.y+.9),Q=t.z+.5-this.player.position.z;Math.sqrt(j*j+Y*Y+Q*Q)<=ea&&this.chunkManager.toggleDoor(t.x,s,t.z)&&(ve().playBlockPlace(n),this.player.punch());return}const r=t.clone();switch(e){case"top":r.y+=1;break;case"bottom":r.y-=1;break;case"left":r.x-=1;break;case"right":r.x+=1;break;case"front":r.z+=1;break;case"back":r.z-=1;break}const a=r.x+.5-this.player.position.x,l=r.y+.5-(this.player.position.y+.9),c=r.z+.5-this.player.position.z;if(Math.sqrt(a*a+l*l+c*c)>ea){console.log("📏 Too far to place block");return}const d=this.player.position.x,u=this.player.position.y,f=this.player.position.z,m=.6,_=1.8,v=m/2,g=r.x,p=r.x+1,E=r.y,y=r.y+1,w=r.z,P=r.z+1,L=d-v,A=d+v,k=u,M=u+_,S=f-v,C=f+v;if(p>L&&g<A&&y>k&&E<M&&P>S&&w<C){console.log("🚫 Cannot place block inside player");return}const G=this.inventoryHUD.getSelectedSlot(),N=this.inventoryHUD.getItem(G);if(!N||N.count<=0){console.log("🙌 No item selected to place");return}this.chunkManager.placeBlock(r.x,r.y,r.z,N.blockType)&&(this.inventoryHUD.removeItem(G,1),this.player.punch(),ve().playBlockPlace(N.blockType),console.log(`🧱 Placed ${o[N.blockType]} at (${r.x}, ${r.y}, ${r.z})`))}updateBlockBreaking(t){if(!(this.isMouseDown||this.isGamepadAttacking||this.isMobileTouchBreaking)||!this.blockHighlight||!this.chunkManager||!this.player||!this.blockBreaking)return;let n=null;if(this.blockBreaking.isBreaking()&&(n=this.blockBreaking.getTargetBlock()),!n&&this.hasValidTarget&&(n=this.blockHighlight.getPosition()),!n){this.blockBreaking.stopBreaking();return}const s=n.x+.5-this.player.position.x,r=n.y+.5-(this.player.position.y+.9),a=n.z+.5-this.player.position.z;if(Math.sqrt(s*s+r*r+a*a)>ea){this.blockBreaking.stopBreaking();return}const c=this.chunkManager.getBlockTypeAt(n.x,n.y,n.z);if(c===null||c===o.Air||c===o.Water){this.blockBreaking.stopBreaking();return}this.player.punching||this.player.punch(),this.blockHighlight.setVisible(!0);const h=this.blockBreaking.getCurrentStage(),d=this.blockBreaking.startBreaking(n,c,t),u=this.blockBreaking.getCurrentStage();u>h&&u>=0&&ve().playBlockHit(c),d&&this.finishBreakingBlock(n,c)}finishBreakingBlock(t,e){if(!this.chunkManager||!this.droppedItemManager||!this.blockHighlight)return;ve().playBlockBreak(e),this.chunkManager.removeBlock(t.x,t.y,t.z);const n=im[e];if(n!==void 0){const s=sm[e]||.05;Math.random()<s?(this.droppedItemManager.spawnItemsFromBlock(n,t,1),console.log(`🌱 Leaves dropped a ${o[n]}!`)):console.log("🍂 Leaves crumbled to nothing")}else{const s=this.getBlockDropType(e);this.droppedItemManager.spawnItemsFromBlock(s,t,1),console.log(`⛏️ Broke ${o[e]} at (${t.x}, ${t.y}, ${t.z})`)}this.blockHighlight.setVisible(!1)}getBlockDropType(t){return{[o.Grass]:o.Dirt,[o.Podzol]:o.Dirt,[o.Mycelium]:o.Dirt}[t]??t}breakTargetedBlock(){}updateCameraZoom(){const t=window.innerWidth/window.innerHeight;this.camera.left=-this.zoom*t,this.camera.right=this.zoom*t,this.camera.top=this.zoom,this.camera.bottom=-this.zoom,this.camera.updateProjectionMatrix(),this.chunkManager&&this.chunkManager.setZoom(this.zoom)}updateBlockHighlight(t,e){if(!this.blockHighlight||!this.chunkManager)return;const n=t/window.innerWidth*2-1,s=-(e/window.innerHeight)*2+1,r=new nm;r.setFromCamera(new Zt(n,s),this.camera);const a=[];this.scene.children.forEach(c=>{c.name.startsWith("chunk_")&&a.push(c)});const l=r.intersectObjects(a,!0);if(l.length>0){const c=l[0],h=c.point.clone(),d=c.face?.normal;let u="top";if(d){const _=d.clone().transformDirection(c.object.matrixWorld);u=Nm(_),h.sub(_.multiplyScalar(.1))}const f=new O(Math.round(h.x),Math.round(h.y),Math.round(h.z));this.blockHighlight.setPosition(f.x,f.y,f.z,u);const m=this.chunkManager.getBlockTypeAt(f.x,f.y,f.z);this.blockHighlight.setColorForBlock(m),this.hasValidTarget=!0,this.blockHighlight.setVisible(!0)}else this.hasValidTarget=!1,this.blockHighlight.setVisible(!1)}handleResize(){const t=window.innerWidth/window.innerHeight;this.camera.left=-this.zoom*t,this.camera.right=this.zoom*t,this.camera.top=this.zoom,this.camera.bottom=-this.zoom,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate=()=>{if(requestAnimationFrame(this.animate),!this.isInitialized)return;const t=this.clock.getDelta(),e=Ge();if(e.update(t),!this.isPaused&&!this.creativeInventory.isInventoryVisible()){const n=e.getCrosshairVector();this.crosshair.updateGamepad(n.x,n.y,t);const s=8*t;e.isActionPressed(fe.ZoomIn)&&(this.zoom=Math.max(5,this.zoom-s),this.updateCameraZoom()),e.isActionPressed(fe.ZoomOut)&&(this.zoom=Math.min(26,this.zoom+s),this.updateCameraZoom())}if(e.isActionPressed(fe.Attack)&&!this.isPaused?this.isGamepadAttacking=!0:e.isActionPressed(fe.Attack)||(this.isGamepadAttacking=!1),!this.isPaused){this.updatePlayerMovement(t),this.updateCamera();const n=this.crosshair.getPosition();this.updateBlockHighlight(n.x,n.y),this.chunkManager&&this.player&&(this.chunkManager.update(this.player.position.x,this.player.position.z),this.chunkManager.setPlayerPosition(this.player.position),this.chunkManager.updateFallingBlocks(t)),this.droppedItemManager&&this.player&&this.droppedItemManager.update(t,this.player.position),this.updateBlockBreaking(t)}this.updateDebugUI(t),this.renderer.render(this.scene,this.camera)};updatePlayerMovement(t){if(!this.player||!this.chunkManager||!this.playerPhysics)return;const e=this.keys,n=Ge(),s=10;let r=0,a=0;(e.has("KeyW")||e.has("ArrowUp"))&&(r-=1,a-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(r+=1,a+=1),(e.has("KeyA")||e.has("ArrowLeft"))&&(r-=1,a+=1),(e.has("KeyD")||e.has("ArrowRight"))&&(r+=1,a-=1);const l=n.getMovementVector();if((Math.abs(l.x)>.01||Math.abs(l.y)>.01)&&(r=-l.y+l.x,a=-l.y-l.x),(Math.abs(this.mobileMovement.x)>.01||Math.abs(this.mobileMovement.y)>.01)&&(r=-this.mobileMovement.y+this.mobileMovement.x,a=-this.mobileMovement.y-this.mobileMovement.x),e.has("Space"))if(this.player.swimming){const u=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0),f=this.player.position.y+3*t;this.player.position.y=Math.min(f,u)}else this.player.jump();if(this.player.swimming)this.isGamepadCrouching=!1;else{const d=e.has("KeyC");(d||!this.isGamepadCrouching)&&this.player.setCrouching(d||this.isGamepadCrouching)}this.playerPhysics.setWaterSwimYOffset(this.waterSwimYOffset);const c=this.playerPhysics.isInWater(this.player.position.x,this.player.position.z,this.player.position.y);this.player.setSwimming(c);const h=this.playerPhysics.getBlockAtFeet(this.player.position.x,this.player.position.z);if(h!==null&&h!==o.Air&&this.player.setCurrentBlockType(h),!this.player.jumping&&!this.player.swimming&&(this.playerPhysics.canStand(this.player.position.x,this.player.position.y,this.player.position.z)||this.player.fall()),this.player.swimming&&!this.player.jumping){const d=this.playerPhysics.calculateTargetY(this.player.position.x,this.player.position.z,this.player.position.y,!0);this.player.setY(d)}if(r!==0||a!==0){const d=Math.sqrt(r*r+a*a),u=s*this.player.getSpeedMultiplier();r=r/d*u*t,a=a/d*u*t;const f=this.playerPhysics.tryMove({position:this.player.position,isJumping:this.player.jumping||this.player.isInAir(),isSwimming:this.player.swimming,isCrouching:this.player.crouching,jumpVelocity:this.player.getJumpVelocity()},r,a);f.moved&&(this.player.move(f.newX-this.player.position.x,f.newZ-this.player.position.z),this.player.jumping||this.player.isInAir()?this.player.updateTerrainY(f.newY):f.shouldFall?(this.player.fall(),this.player.updateTerrainY(f.newY)):this.player.setY(f.newY))}if(this.player.jumping){const d=this.chunkManager.getStandingHeightAt(this.player.position.x,this.player.position.z,this.player.position.y),u=this.chunkManager.getHeightAt(this.player.position.x,this.player.position.z),_=this.chunkManager.getBlockAt(Math.floor(this.player.position.x),Math.floor(u),Math.floor(this.player.position.z))===o.Water?Math.max(d,u+h0+.5):d;this.player.updateTerrainY(_)}if(this.player.update(t),this.player.jumping&&this.player.getJumpVelocity()>0){const d=this.playerPhysics.checkCeilingCollision(this.player.position.x,this.player.position.y,this.player.position.z);d.hit&&this.player.hitCeiling(d.maxY)}}updateCamera(){if(!this.player)return;const t=this.cameraDistance;this.camera.position.set(this.player.position.x+t,this.player.position.y+t,this.player.position.z+t),this.camera.lookAt(this.player.position.x,this.player.position.y,this.player.position.z);const e=this.sunLight,n=this.shadowOffset||{x:15,y:200,z:160};if(e){const s=e.shadow.mapSize.width,a=60*2/s,l=Math.round(this.player.position.x/a)*a,c=Math.round(this.player.position.z/a)*a;e.position.set(l+n.x,this.player.position.y+n.y,c+n.z),e.target.position.set(l,this.player.position.y,c)}}updateDebugUI(t){if(!this.player||!this.generator)return;const e=this.generator.getBiomeAt(Math.floor(this.player.position.x),Math.floor(this.player.position.z)),n=t>0?Math.round(1/t):60;let s=null;if(this.chunkManager){const l=Math.floor(this.player.position.y)-1,c=this.chunkManager.getBlockAt(Math.floor(this.player.position.x),l,Math.floor(this.player.position.z));c!==null&&(s=o[c])}let r=null;if(this.blockHighlight?.isVisible()&&this.chunkManager){const l=this.blockHighlight.getPosition(),c=this.chunkManager.getBlockAt(Math.floor(l.x),Math.floor(l.y),Math.floor(l.z));c!==null&&(r=o[c])}const a=this.renderer.info.render;this.debugUI.update({fps:n,playerX:this.player.position.x,playerY:this.player.position.y,playerZ:this.player.position.z,chunks:this.chunkManager?.getChunkCount()||0,biome:this.generator.getBiomeName(e),seed:this.seed,zoom:this.zoom,playerState:this.player.getStateName(),triangles:a.triangles,drawCalls:a.calls,blockBelow:s,targetedBlock:r})}destroy(){this.renderer.dispose(),this.chunkManager?.destroy(),this.player?.destroy(),this.blockHighlight?.destroy(),this.droppedItemManager?.destroy(),this.blockBreaking?.destroy(),this.crosshair.destroy(),this.debugUI.destroy(),this.shaderDebugUI.destroy(),this.pauseMenu.destroy(),this.creativeInventory.destroy(),this.mobileControls?.destroy(),ss().destroy()}}async function u0(){const i=new d0;await i.init(),window.game=i,console.log("⛏️ IsoCraft 3D initialized!"),console.log("🌍 Using Three.js with cubiomes for Minecraft biome generation"),console.log("🎮 Controls: WASD to move, Mouse wheel to zoom")}u0().catch(i=>{console.error("Failed to start game:",i);const t=document.getElementById("loading");t&&(t.innerHTML=`
      <div style="color: #ff5555; font-size: 20px; text-shadow: 2px 2px 0 #330000;">Error Loading World</div>
      <div style="color: #aaa; margin-top: 15px; font-size: 14px; text-shadow: 1px 1px 0 #222;">${i.message}</div>
    `)});
