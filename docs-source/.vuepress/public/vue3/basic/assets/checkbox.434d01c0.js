
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.407496b8.js";import{_ as l}from"./index.fb938e69.js";import a from"./alert.3c72a7cb.js";import{r as d,a as c,s as o,y as t,z as u,P as s,Q as m,c as i,F as k,B as b}from"./vendor.505a4e11.js";const h=["上海","北京","广州","深圳"],n={components:{Alert:a},data:()=>({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:h,checkboxGroup1:["上海"],checked3:!0,checked4:!1})},r=k("备选项"),V=k("备选项1"),f=k("备选项");n.render=function(a,h,n,p,_,x){const U=d("Alert"),j=e,A=d("el-checkbox"),C=l,y=d("el-checkbox-group"),G=d("el-checkbox-button");return c(),o("div",null,[t(U),t(j,{title:"多选框"}),t(C,{title:"基础用法",class:"demo"},{default:u((()=>[t(A,{modelValue:_.checked,"onUpdate:modelValue":h[0]||(h[0]=e=>_.checked=e)},{default:u((()=>[r])),_:1},8,["modelValue"])])),_:1}),t(C,{title:"禁用状态",class:"demo"},{default:u((()=>[t(A,{modelValue:_.checked1,"onUpdate:modelValue":h[1]||(h[1]=e=>_.checked1=e),disabled:""},{default:u((()=>[V])),_:1},8,["modelValue"]),t(A,{modelValue:_.checked2,"onUpdate:modelValue":h[2]||(h[2]=e=>_.checked2=e),disabled:""},{default:u((()=>[f])),_:1},8,["modelValue"])])),_:1}),t(C,{title:"多选框组",class:"demo"},{default:u((()=>[t(y,{modelValue:_.checkList,"onUpdate:modelValue":h[3]||(h[3]=e=>_.checkList=e)},{default:u((()=>[t(A,{label:"复选框 A"}),t(A,{label:"复选框 B"}),t(A,{label:"复选框 C"}),t(A,{label:"禁用",disabled:""}),t(A,{label:"选中且禁用",disabled:""})])),_:1},8,["modelValue"])])),_:1}),t(C,{title:"可选项目数量的限制",class:"demo"},{default:u((()=>[t(y,{modelValue:_.checkedCities,"onUpdate:modelValue":h[4]||(h[4]=e=>_.checkedCities=e),min:1,max:2},{default:u((()=>[(c(!0),o(s,null,m(_.cities,(e=>(c(),i(A,{key:e,label:e},{default:u((()=>[k(b(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),t(C,{title:"按钮样式",class:"demo"},{default:u((()=>[t(y,{modelValue:_.checkboxGroup1,"onUpdate:modelValue":h[5]||(h[5]=e=>_.checkboxGroup1=e)},{default:u((()=>[(c(!0),o(s,null,m(_.cities,(e=>(c(),i(G,{key:e,label:e},{default:u((()=>[k(b(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),t(C,{title:"带有边框",class:"demo"},{default:u((()=>[t(A,{modelValue:_.checked3,"onUpdate:modelValue":h[6]||(h[6]=e=>_.checked3=e),label:"备选项1",border:""},null,8,["modelValue"]),t(A,{modelValue:_.checked4,"onUpdate:modelValue":h[7]||(h[7]=e=>_.checked4=e),label:"备选项2",border:""},null,8,["modelValue"])])),_:1})])};export{n as default};
