
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1ee7394a.js";import{_ as l}from"./index.e2b18078.js";import d from"./alert.6f9123e2.js";import{r as a,k as c,n as o,q as t,o as u,F as s,G as m,c as i,A as k,x as h}from"./vendor.e2e92bee.js";const n=["上海","北京","广州","深圳"],b={components:{Alert:d},data:()=>({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:n,checkboxGroup1:["上海"],checked3:!0,checked4:!1})},r=k("备选项"),V=k("备选项1"),f=k("备选项");b.render=function(d,n,b,p,_,x){const U=a("Alert"),A=e,j=a("el-checkbox"),C=l,G=a("el-checkbox-group"),L=a("el-checkbox-button");return u(),c("div",null,[o(U),o(A,{title:"多选框"}),o(C,{title:"基础用法",class:"demo"},{default:t((()=>[o(j,{modelValue:_.checked,"onUpdate:modelValue":n[0]||(n[0]=e=>_.checked=e)},{default:t((()=>[r])),_:1},8,["modelValue"])])),_:1}),o(C,{title:"禁用状态",class:"demo"},{default:t((()=>[o(j,{modelValue:_.checked1,"onUpdate:modelValue":n[1]||(n[1]=e=>_.checked1=e),disabled:""},{default:t((()=>[V])),_:1},8,["modelValue"]),o(j,{modelValue:_.checked2,"onUpdate:modelValue":n[2]||(n[2]=e=>_.checked2=e),disabled:""},{default:t((()=>[f])),_:1},8,["modelValue"])])),_:1}),o(C,{title:"多选框组",class:"demo"},{default:t((()=>[o(G,{modelValue:_.checkList,"onUpdate:modelValue":n[3]||(n[3]=e=>_.checkList=e)},{default:t((()=>[o(j,{label:"复选框 A"}),o(j,{label:"复选框 B"}),o(j,{label:"复选框 C"}),o(j,{label:"禁用",disabled:""}),o(j,{label:"选中且禁用",disabled:""})])),_:1},8,["modelValue"])])),_:1}),o(C,{title:"可选项目数量的限制",class:"demo"},{default:t((()=>[o(G,{modelValue:_.checkedCities,"onUpdate:modelValue":n[4]||(n[4]=e=>_.checkedCities=e),min:1,max:2},{default:t((()=>[(u(!0),c(s,null,m(_.cities,(e=>(u(),i(j,{key:e,label:e},{default:t((()=>[k(h(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(C,{title:"按钮样式",class:"demo"},{default:t((()=>[o(G,{modelValue:_.checkboxGroup1,"onUpdate:modelValue":n[5]||(n[5]=e=>_.checkboxGroup1=e)},{default:t((()=>[(u(!0),c(s,null,m(_.cities,(e=>(u(),i(L,{key:e,label:e},{default:t((()=>[k(h(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(C,{title:"带有边框",class:"demo"},{default:t((()=>[o(j,{modelValue:_.checked3,"onUpdate:modelValue":n[6]||(n[6]=e=>_.checked3=e),label:"备选项1",border:""},null,8,["modelValue"]),o(j,{modelValue:_.checked4,"onUpdate:modelValue":n[7]||(n[7]=e=>_.checked4=e),label:"备选项2",border:""},null,8,["modelValue"])])),_:1})])};export{b as default};
