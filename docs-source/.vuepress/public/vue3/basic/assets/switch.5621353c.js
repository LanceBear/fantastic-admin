
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1ee7394a.js";import{_ as l}from"./index.e2b18078.js";import a from"./alert.6f9123e2.js";import{r as t,k as o,n as u,q as d,o as m}from"./vendor.e2e92bee.js";const s={components:{Alert:a},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};s.render=function(a,s,n,i,r,v){const c=t("Alert"),f=e,V=t("el-switch"),p=l;return m(),o("div",null,[u(c),u(f,{title:"开关"}),u(p,{title:"基础用法",class:"demo"},{default:d((()=>[u(V,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=e=>r.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),u(p,{title:"文字描述",class:"demo"},{default:d((()=>[u(V,{modelValue:r.value1,"onUpdate:modelValue":s[1]||(s[1]=e=>r.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),u(p,{title:"禁用状态",class:"demo"},{default:d((()=>[u(V,{modelValue:r.value2,"onUpdate:modelValue":s[2]||(s[2]=e=>r.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),u(V,{modelValue:r.value3,"onUpdate:modelValue":s[3]||(s[3]=e=>r.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])};export{s as default};
