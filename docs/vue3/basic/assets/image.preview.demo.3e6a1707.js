
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.1ee7394a.js";import{_ as e}from"./index.e25e8707.js";import{t as i,u as r,r as s,o as a,c as o,q as n,l as d,n as l,D as c,k as h}from"./vendor.e2e92bee.js";import{_ as g}from"./index.e2b18078.js";const p={name:"ImagePreview",props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},data:()=>({dialogVisible:!1}),computed:{realWidth(){return"string"==typeof this.width?this.width:`${this.width}px`},realHeight(){return"string"==typeof this.height?this.height:`${this.height}px`}},created(){},mounted(){},methods:{}};i("data-v-b89afc60");const u={class:"image-slot"};r(),p.render=function(t,i,r,h,g,p){const m=e,f=s("el-image");return a(),o(f,{src:r.src,fit:"cover",style:c(`width:${p.realWidth};height:${p.realHeight};`),"preview-src-list":[r.src]},{error:n((()=>[d("div",u,[l(m,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])},p.__scopeId="data-v-b89afc60";const m={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};m.render=function(e,i,r,s,o,c){const u=t,m=p,f=g;return a(),h("div",null,[l(u,{title:"图片预览",content:"ImagePreview"}),l(f,null,{default:n((()=>[d("div",null,[l(m,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),l(f,{title:"图片加载失败时"},{default:n((()=>[d("div",null,[l(m,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])},m.__scopeId="data-v-8976f8fc";export{m as default};
