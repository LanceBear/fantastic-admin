
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as l}from"./index.29752973.js";import m from"./alert.8957d579.js";import{r as a,o,z as u,i as n,w as t}from"./vendor.b5a7373b.js";const d={components:{Alert:m},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};d.render=function(m,d,s,i,r,p){const V=a("Alert"),c=e,f=a("el-input-number"),_=l;return o(),u("div",null,[n(V),n(c,{title:"计数器"}),n(_,{title:"基础用法",class:"demo"},{default:t((()=>[n(f,{modelValue:r.num,"onUpdate:modelValue":d[0]||(d[0]=e=>r.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),n(_,{title:"禁用状态",class:"demo"},{default:t((()=>[n(f,{modelValue:r.num2,"onUpdate:modelValue":d[1]||(d[1]=e=>r.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),n(_,{title:"步数",class:"demo"},{default:t((()=>[n(f,{modelValue:r.num3,"onUpdate:modelValue":d[2]||(d[2]=e=>r.num3=e),step:2},null,8,["modelValue"])])),_:1}),n(_,{title:"精度",class:"demo"},{default:t((()=>[n(f,{modelValue:r.num4,"onUpdate:modelValue":d[3]||(d[3]=e=>r.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),n(_,{title:"按钮位置",class:"demo"},{default:t((()=>[n(f,{modelValue:r.num5,"onUpdate:modelValue":d[4]||(d[4]=e=>r.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])};export{d as default};
