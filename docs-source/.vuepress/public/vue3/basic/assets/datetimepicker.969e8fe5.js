
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.407496b8.js";import{_ as a}from"./index.fb938e69.js";import l from"./alert.3c72a7cb.js";import{r as t,a as d,s as o,y as r,z as u,t as n}from"./vendor.505a4e11.js";const m={components:{Alert:l},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},s=n("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);m.render=function(l,n,m,i,p,c){const f=t("Alert"),v=e,V=t("el-date-picker"),h=a;return d(),o("div",null,[r(f),r(v,{title:"日期时间选择器"}),r(h,{title:"日期和时间点",class:"demo"},{default:u((()=>[r(V,{modelValue:p.value1,"onUpdate:modelValue":n[0]||(n[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),r(h,{title:"日期和时间范围",class:"demo"},{default:u((()=>[r(V,{modelValue:p.value2,"onUpdate:modelValue":n[1]||(n[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),r(h,{title:"默认的起始与结束时刻",class:"demo"},{default:u((()=>[s,r(V,{modelValue:p.value3,"onUpdate:modelValue":n[2]||(n[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])};export{m as default};
