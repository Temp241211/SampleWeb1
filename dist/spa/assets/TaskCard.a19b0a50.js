import{c as l,h as c}from"./render.e0dd47e7.js";import{c as u,h as p,_ as h,N as m,O as d,Q as i,R as o,S as f,a3 as e,W as t,a6 as C,U as v}from"./index.70cbe3dd.js";import{Q as _}from"./QCard.954f191d.js";import"./use-dark.c4c6e9cf.js";var n=l({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:s}){const r=u(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>p(a.tag,{class:r.value},c(s.default))}});const k=m({name:"TaskCard",props:["data"]}),$={class:"text-h6"},g={class:"text-subtitle2"},S={class:""},Q={class:""},b={class:""};function z(a,s,r,B,D,N){return d(),i(_,{class:"cursor-pointer",onClick:s[0]||(s[0]=w=>this.$router.push({path:`/tasks/${a.data.id}`}))},{default:o(()=>[f(n,null,{default:o(()=>[e("div",$,"\u4EFB\u52D9 - "+t(a.data.id),1),e("div",g,t(a.data.from)+" -> "+t(a.data.to),1),e("div",S,"\u92FC\u6372\u6578\u91CF - "+t(a.data.coilCount),1),e("div",Q,"\u4EFB\u52D9\u958B\u59CB - "+t(a.data.createdDate),1),e("p",null,"\u5099\u8A3B - "+t(a.data.remark),1)]),_:1}),a.data.lastFinishedDate?(d(),i(n,{key:0,class:C(["bg-blue",{"bg-green":a.data.coilCount===a.data.finishedCoilCount}])},{default:o(()=>[e("div",null,"\u5DF2\u5B8C\u6210\u92FC\u6372\u6578\u91CF - "+t(a.data.finishedCoilCount),1),e("div",b,"\u6700\u8FD1\u88DD\u5378\u6642\u9593 - "+t(a.data.lastFinishedDate),1)]),_:1},8,["class"])):v("",!0)]),_:1})}var T=h(k,[["render",z]]);export{T as default};