
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.407496b8.js";import{_ as e}from"./index.a289e36b.js";import{n as i,q as s,G as r,r as a,a as o,c as n,z as d,t as c,y as l,I as p,J as h,s as g}from"./vendor.505a4e11.js";import{_ as u}from"./index.fb938e69.js";i("data-v-c7d6f0ee");const f={class:"image-slot"};s();const m={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,s=r((()=>"string"==typeof i.width?i.width:`${i.width}px`)),g=r((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,r)=>{const u=e,m=a("el-image");return o(),n(m,{src:t.src,fit:"cover",style:p(`width:${h(s)};height:${h(g)};`),"preview-src-list":[t.src]},{error:d((()=>[c("div",f,[l(u,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}},__scopeId:"data-v-c7d6f0ee"};const w={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};w.render=function(e,i,s,r,a,n){const p=t,h=m,f=u;return o(),g("div",null,[l(p,{title:"图片预览",content:"ImagePreview"}),l(f,null,{default:d((()=>[c("div",null,[l(h,{src:`https://hooray.${n.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),l(f,{title:"图片加载失败时"},{default:d((()=>[c("div",null,[l(h,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])},w.__scopeId="data-v-8976f8fc";export{w as default};
