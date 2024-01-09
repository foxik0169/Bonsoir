import{d as h,o as i,i as u,e as t,n as d,u as _,t as C,s as v,p as I,j,h as q,c as m,r as p,k as z,a as A,w as c,b as r,f as G,_ as N,l as a}from"./entry.oEsUeY7U.js";import{u as $}from"./theme.Kf9OGgWa.js";import{_ as V}from"./hand.-ezIIU3B.js";import{_ as D}from"./ShikijiCode.Xy-WtowX.js";import{_ as H}from"./Icon.vue.mDSKjJm8.js";const M=n=>(I("data-v-18cd70d9"),n=n(),j(),n),O={class:"bonsoir-header"},T={class:"title"},E=M(()=>t("img",{src:V,alt:"Hand",class:"hand"},null,-1)),F=[E],L=h({__name:"BonsoirHeader",setup(n){const e=$();return(l,o)=>(i(),u("header",O,[t("div",T,[t("div",{class:d(["logo",`theme-${_(e)}`])},F,2),t("h1",null,C(_(v).title),1)])]))}}),W=q(L,[["__scopeId","data-v-18cd70d9"]]),Y=h({name:"SkiColumn",__name:"Column",props:{width:{},xxl:{},xl:{},lg:{},md:{},sm:{},xs:{}},setup(n){const e=n,l=m(()=>{const o=[];return e.width||e.xxl||e.xl||e.lg||e.md||e.sm||e.xs?(e.width&&o.push(`col-${e.width}`),e.xxl&&o.push(`col-xxl-${e.xxl}`),e.xl&&o.push(`col-xl-${e.xl}`),e.lg&&o.push(`col-lg-${e.lg}`),e.md&&o.push(`col-md-${e.md}`),e.sm&&o.push(`col-sm-${e.sm}`),e.xs&&o.push(`col-xs-${e.xs}`)):o.push("col"),o});return(o,s)=>(i(),u("div",{class:d(l.value)},[p(o.$slots,"default")],2))}}),Z={class:"row"},J=h({name:"SkiColumns",__name:"Columns",setup(n){return(e,l)=>(i(),u("div",Z,[p(e.$slots,"default")]))}}),K=["href","aria-disabled"],P=["disabled"],Q=h({name:"SkiButton",__name:"Button",props:{to:{},href:{},variant:{default:"dark"},outlined:{},size:{},disabled:{type:[Boolean,String]}},setup(n){const e=n,l=m(()=>{const s=[e.outlined?`btn-outline-${e.variant}`:`btn-${e.variant}`];return e.size&&s.push(`btn-${e.size}`),e.disabled&&s.push("disabled"),s}),o=m(()=>e.disabled?!0:null);return(s,x)=>{const f=z("router-link");return s.to?(i(),A(f,{key:0,to:s.to,class:d(["btn",l.value]),role:"button","aria-disabled":o.value},{default:c(()=>[p(s.$slots,"default")]),_:3},8,["to","class","aria-disabled"])):s.href?(i(),u("a",{key:1,href:s.href,class:d(["btn",l.value]),role:"button","aria-disabled":o.value},[p(s.$slots,"default")],10,K)):(i(),u("button",{key:2,class:d(["btn",l.value]),type:"button",disabled:o.value},[p(s.$slots,"default")],10,P))}}}),R=t("div",null,[t("p",null,[a(" Bonsoir is a Flutter Zeroconf library that allows you to discover network services and to broadcast your own. It's based on "),t("a",{href:"https://developer.android.com/training/connect-devices-wirelessly/nsd"},"Android NSD"),a(" and on Apple's popular framework "),t("a",{href:"https://developer.apple.com/documentation/foundation/bonjour"},"Bonjour"),a(". ")]),t("p",null,[a(" In fact, "),t("q",null,"Bonsoir"),a(" can be translated into "),t("q",null,"Good evening"),a(" (and "),t("q",null,"Bonjour"),a(" into "),t("q",null,"Good morning"),a(" or "),t("q",null,"Good afternoon"),a(" depending on the current moment of the day). ")]),t("p",null," You can use Bonsoir on Android, iOS, macOS, Windows and Linux. ")],-1),U={class:"text-center pt-5 pb-5"},ne=h({__name:"index",setup(n){const e=$(),l=m(()=>e.value==="light"?"white":"dark"),o=m(()=>e.value==="light"?"dark":"light");return(s,x)=>{const f=G,k=W,b=Y,g=D,w=J,B=H,y=Q,S=N;return i(),u("div",null,[r(f,{title:_(v).title,"title-suffix":""},null,8,["title"]),r(k),t("div",{class:d(`bg-${_(l)}`)},[r(S,null,{default:c(()=>[r(w,{class:"pt-5"},{default:c(()=>[r(b,{sm:"12",md:"6",class:"d-flex align-items-center"},{default:c(()=>[R]),_:1}),r(b,{sm:"12",md:"6"},{default:c(()=>[r(g,{code:`
BonsoirService service = BonsoirService(
  name: 'My wonderful service',
  type: '_wonderful-service._tcp',
  port: 3030,
);

BonsoirBroadcast broadcast = BonsoirBroadcast(service: service);
await broadcast.ready;
await broadcast.start();
`})]),_:1})]),_:1}),t("div",U,[r(y,{to:"/docs",class:"btn-lg ps-5 pe-5",variant:_(o)},{default:c(()=>[r(B,{icon:"code-slash"}),a(" Get started ")]),_:1},8,["variant"])])]),_:1})],2)])}}});export{ne as default};
