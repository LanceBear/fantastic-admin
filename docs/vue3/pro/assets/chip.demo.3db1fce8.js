
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as a}from"./index.281722fb.js";import{H as l,I as e,n as s,J as t,K as o,X as n,S as d,Y as i,r as c,q as u,l as r,k as f,R as p}from"./vendor.3dac1dfd.js";import{_}from"./index.46bcf552.js";import{i as y}from"./logo.3c3b2e9b.js";l("data-v-6a5ba58c");const m={class:"content"},v=[o("i",{class:"el-icon-close"},null,-1)];e();const b={props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(a,{emit:l})=>(e,c)=>(s(),t("div",{class:i(["chip",[a.type?`chip--${a.type}`:""]])},[o("div",m,[n(e.$slots,"default",{},void 0,!0),a.closable?(s(),t("span",{key:0,class:"closable",onClick:c[0]||(c[0]=a=>l("close"))},v)):d("v-if",!0)])],2)),__scopeId:"data-v-6a5ba58c"},h={data:()=>({isShow:!0,avatar:y}),methods:{handleClose(){this.isShow=!1}}},g=p(" 基础纸片 "),C=p("Fa"),S=p(" 头像文字 "),j=p(" 头像图标 "),k=p(" 头像图片 "),w=p(" 关闭按钮 "),x=p(" Primary "),I=p(" Success "),$=p(" Info "),q=p(" Waning "),B=p(" Danger ");h.render=function(l,e,o,n,i,p){const y=a,m=b,v=c("el-avatar"),h=_;return s(),t("div",null,[u(y,{title:"纸片",content:"Chip"}),u(h,null,{default:r((()=>[u(m,null,{default:r((()=>[g])),_:1}),u(m,null,{default:r((()=>[u(v,null,{default:r((()=>[C])),_:1}),S])),_:1}),u(m,null,{default:r((()=>[u(v,{icon:"el-icon-user-solid"}),j])),_:1}),u(m,null,{default:r((()=>[u(v,{src:i.avatar},null,8,["src"]),k])),_:1}),i.isShow?(s(),f(m,{key:0,closable:"",onClose:p.handleClose},{default:r((()=>[w])),_:1},8,["onClose"])):d("v-if",!0)])),_:1}),u(h,null,{default:r((()=>[u(m,{type:"primary"},{default:r((()=>[x])),_:1}),u(m,{type:"success"},{default:r((()=>[I])),_:1}),u(m,{type:"info"},{default:r((()=>[$])),_:1}),u(m,{type:"warning"},{default:r((()=>[q])),_:1}),u(m,{type:"danger"},{default:r((()=>[B])),_:1})])),_:1})])};export{h as default};
