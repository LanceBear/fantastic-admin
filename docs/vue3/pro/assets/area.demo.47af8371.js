
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as a}from"./index.5dae4bb6.js";import{_ as r}from"./index.29752973.js";import{x as l,y as o,r as t,o as m,z as d,i as u,w as s,I as n}from"./vendor.b5a7373b.js";import"./index.13e5accc.js";const i={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}};l("data-v-4e8ef6b2");const f=n("提交");o(),i.render=function(l,o,n,i,p,c){const _=e,b=a,F=r,x=t("el-form-item"),V=t("el-button"),j=t("el-form");return m(),d("div",null,[u(_,{title:"省市区联动",content:"CascaderArea"}),u(F,null,{default:s((()=>[u(b,{modelValue:p.area,"onUpdate:modelValue":o[0]||(o[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),u(F,{title:"表单验证"},{default:s((()=>[u(j,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:s((()=>[u(x,{label:"地区",prop:"area"},{default:s((()=>[u(b,{modelValue:p.ruleForm.area,"onUpdate:modelValue":o[1]||(o[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),u(x,null,{default:s((()=>[u(V,{type:"primary",onClick:c.submitForm},{default:s((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])},i.__scopeId="data-v-4e8ef6b2";export{i as default};
