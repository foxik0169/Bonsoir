import{q as v,w as m,e as f,s as g,j as d,u as l,a as h}from"./query.x_Yyj_mT.js";import{D as _,v as y,d as C,H as w,c as P,I as $,E as N,G as r,q as j}from"./entry.oEsUeY7U.js";import{h as c,u as D}from"./preview.4C_rqyg0.js";const E=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=v(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${f(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./client-db.hmG78Opx.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:D().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},T=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${c(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),O=T;export{O as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.hmG78Opx.js","./entry.oEsUeY7U.js","./entry.Kh-om9zl.css","./query.x_Yyj_mT.js","./preview.4C_rqyg0.js","./index.Wme0U9j4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}