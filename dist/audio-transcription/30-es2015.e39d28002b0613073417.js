(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{mwoW:function(t,i,e){"use strict";e.r(i),e.d(i,"amplify_s3_image",(function(){return s}));var n=e("bRKV"),a=e("Nt7R"),r=e("H8iN"),h=(e("/vcS"),e("l1VB"),e("Y0ez"));const c=new a.a("S3Image"),s=class{constructor(t){Object(n.k)(this,t),this.contentType="binary/octet-stream",this.level=r.a.Public}async watchHandler(){await this.load()}async componentWillLoad(){await this.load()}async load(){const{imgKey:t,path:i,body:e,contentType:n,level:a,track:r,identityId:s}=this;if(!t&&!i)return void c.debug("empty imgKey and path");const o=t||i;c.debug("loading "+o+"...");try{e&&await Object(h.e)(t,e,a,r,n,c),this.src=await Object(h.c)(o,a,r,s,c)}catch(d){throw c.debug(d),new Error(d)}}render(){return Object(n.i)(n.b,null,this.src&&Object(n.i)("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))}static get watchers(){return{body:["watchHandler"]}}};s.style=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}"}}]);