
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1ee7394a.js";import{_ as l}from"./index.e2b18078.js";import a from"./alert.6f9123e2.js";import{r as o,k as u,n as t,q as d,o as s,l as m}from"./vendor.e2e92bee.js";const n={components:{Alert:a},data:()=>({value1:0,value2:50,value3:36,value4:48,value5:42,value6:0,value7:0,value8:[4,8],value9:0}),methods:{formatTooltip:e=>e/100}},p=m("span",{class:"demonstration"},"默认",-1),i=m("span",{class:"demonstration"},"自定义初始值",-1),r=m("span",{class:"demonstration"},"隐藏 Tooltip",-1),v=m("span",{class:"demonstration"},"格式化 Tooltip",-1),V=m("span",{class:"demonstration"},"禁用",-1),c=m("span",{class:"demonstration"},"不显示间断点",-1),f=m("span",{class:"demonstration"},"显示间断点",-1);n.render=function(a,m,n,U,h,_){const x=o("Alert"),j=e,w=o("el-slider"),T=l;return s(),u("div",null,[t(x),t(j,{title:"滑块"}),t(T,{title:"基础用法",class:"demo"},{default:d((()=>[p,t(w,{modelValue:h.value1,"onUpdate:modelValue":m[0]||(m[0]=e=>h.value1=e)},null,8,["modelValue"]),i,t(w,{modelValue:h.value2,"onUpdate:modelValue":m[1]||(m[1]=e=>h.value2=e)},null,8,["modelValue"]),r,t(w,{modelValue:h.value3,"onUpdate:modelValue":m[2]||(m[2]=e=>h.value3=e),"show-tooltip":!1},null,8,["modelValue"]),v,t(w,{modelValue:h.value4,"onUpdate:modelValue":m[3]||(m[3]=e=>h.value4=e),"format-tooltip":_.formatTooltip},null,8,["modelValue","format-tooltip"]),V,t(w,{modelValue:h.value5,"onUpdate:modelValue":m[4]||(m[4]=e=>h.value5=e),disabled:""},null,8,["modelValue"])])),_:1}),t(T,{title:"离散值",class:"demo"},{default:d((()=>[c,t(w,{modelValue:h.value6,"onUpdate:modelValue":m[5]||(m[5]=e=>h.value6=e),step:10},null,8,["modelValue"]),f,t(w,{modelValue:h.value6,"onUpdate:modelValue":m[6]||(m[6]=e=>h.value6=e),step:10,"show-stops":""},null,8,["modelValue"])])),_:1}),t(T,{title:"带有输入框",class:"demo"},{default:d((()=>[t(w,{modelValue:h.value7,"onUpdate:modelValue":m[7]||(m[7]=e=>h.value7=e),"show-input":""},null,8,["modelValue"])])),_:1}),t(T,{title:"范围选择",class:"demo"},{default:d((()=>[t(w,{modelValue:h.value8,"onUpdate:modelValue":m[8]||(m[8]=e=>h.value8=e),range:"","show-stops":"",max:10},null,8,["modelValue"])])),_:1}),t(T,{title:"竖向模式",class:"demo"},{default:d((()=>[t(w,{modelValue:h.value9,"onUpdate:modelValue":m[9]||(m[9]=e=>h.value9=e),vertical:"",height:"200px"},null,8,["modelValue"])])),_:1})])};export{n as default};
