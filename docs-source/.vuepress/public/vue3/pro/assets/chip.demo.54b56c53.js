
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{x as a,y as l,o as s,z as t,A as o,M as n,J as d,O as i,r as c,i as r,w as u,h as f,I as p}from"./vendor.b5a7373b.js";import{_ as h}from"./index.29752973.js";import{i as _}from"./logo.3c3b2e9b.js";const m={name:"Chip",props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],methods:{handleClose(){this.$emit("close")}}};a("data-v-b7f3d898");const y={class:"content"},v=[o("i",{class:"el-icon-close"},null,-1)];l(),m.render=function(e,a,l,c,r,u){return s(),t("div",{class:i(["chip",[l.type?`chip--${l.type}`:""]])},[o("div",y,[n(e.$slots,"default",{},void 0,!0),l.closable?(s(),t("span",{key:0,class:"closable",onClick:a[0]||(a[0]=(...e)=>u.handleClose&&u.handleClose(...e))},v)):d("v-if",!0)])],2)},m.__scopeId="data-v-b7f3d898";const b={data:()=>({isShow:!0,avatar:_}),methods:{handleClose(){this.isShow=!1}}},C=p(" 基础纸片 "),g=p("Fa"),w=p(" 头像文字 "),S=p(" 头像图标 "),j=p(" 头像图片 "),x=p(" 关闭按钮 "),k=p(" Primary "),I=p(" Success "),$=p(" Info "),z=p(" Waning "),A=p(" Danger ");b.render=function(a,l,o,n,i,p){const _=e,y=m,v=c("el-avatar"),b=h;return s(),t("div",null,[r(_,{title:"纸片",content:"Chip"}),r(b,null,{default:u((()=>[r(y,null,{default:u((()=>[C])),_:1}),r(y,null,{default:u((()=>[r(v,null,{default:u((()=>[g])),_:1}),w])),_:1}),r(y,null,{default:u((()=>[r(v,{icon:"el-icon-user-solid"}),S])),_:1}),r(y,null,{default:u((()=>[r(v,{src:i.avatar},null,8,["src"]),j])),_:1}),i.isShow?(s(),f(y,{key:0,closable:"",onClose:p.handleClose},{default:u((()=>[x])),_:1},8,["onClose"])):d("v-if",!0)])),_:1}),r(b,null,{default:u((()=>[r(y,{type:"primary"},{default:u((()=>[k])),_:1}),r(y,{type:"success"},{default:u((()=>[I])),_:1}),r(y,{type:"info"},{default:u((()=>[$])),_:1}),r(y,{type:"warning"},{default:u((()=>[z])),_:1}),r(y,{type:"danger"},{default:u((()=>[A])),_:1})])),_:1})])};export{b as default};