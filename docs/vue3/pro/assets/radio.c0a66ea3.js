
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as l}from"./index.29752973.js";import a from"./alert.8957d579.js";import{r as d,o,z as t,i as r,w as u,I as i}from"./vendor.b5a7373b.js";const m={components:{Alert:a},data:()=>({radio:"1",radio2:"选中且禁用",radio3:3,radio4:"上海",radio5:"1"})},s=i("备选项"),V=i("备选项"),f=i("备选项"),n=i("备选项"),b=i("备选项"),_=i("备选项"),p=i("备选项"),c=i("备选项1"),U=i("备选项2");m.render=function(a,i,m,j,x,v){const A=d("Alert"),g=e,w=d("el-radio"),z=l,I=d("el-radio-group"),h=d("el-radio-button");return o(),t("div",null,[r(A),r(g,{title:"单选框"}),r(z,{title:"基础用法",class:"demo"},{default:u((()=>[r(w,{modelValue:x.radio,"onUpdate:modelValue":i[0]||(i[0]=e=>x.radio=e),label:"1"},{default:u((()=>[s])),_:1},8,["modelValue"]),r(w,{modelValue:x.radio,"onUpdate:modelValue":i[1]||(i[1]=e=>x.radio=e),label:"2"},{default:u((()=>[V])),_:1},8,["modelValue"])])),_:1}),r(z,{title:"禁用状态",class:"demo"},{default:u((()=>[r(w,{modelValue:x.radio2,"onUpdate:modelValue":i[2]||(i[2]=e=>x.radio2=e),disabled:"",label:"禁用"},{default:u((()=>[f])),_:1},8,["modelValue"]),r(w,{modelValue:x.radio2,"onUpdate:modelValue":i[3]||(i[3]=e=>x.radio2=e),disabled:"",label:"选中且禁用"},{default:u((()=>[n])),_:1},8,["modelValue"])])),_:1}),r(z,{title:"单选框组",class:"demo"},{default:u((()=>[r(I,{modelValue:x.radio3,"onUpdate:modelValue":i[4]||(i[4]=e=>x.radio3=e)},{default:u((()=>[r(w,{label:3},{default:u((()=>[b])),_:1}),r(w,{label:6},{default:u((()=>[_])),_:1}),r(w,{label:9},{default:u((()=>[p])),_:1})])),_:1},8,["modelValue"])])),_:1}),r(z,{title:"按钮样式",class:"demo"},{default:u((()=>[r(I,{modelValue:x.radio4,"onUpdate:modelValue":i[5]||(i[5]=e=>x.radio4=e)},{default:u((()=>[r(h,{label:"上海"}),r(h,{label:"北京"}),r(h,{label:"广州"}),r(h,{label:"深圳"})])),_:1},8,["modelValue"])])),_:1}),r(z,{title:"带有边框",class:"demo"},{default:u((()=>[r(w,{modelValue:x.radio5,"onUpdate:modelValue":i[6]||(i[6]=e=>x.radio5=e),label:"1",border:""},{default:u((()=>[c])),_:1},8,["modelValue"]),r(w,{modelValue:x.radio5,"onUpdate:modelValue":i[7]||(i[7]=e=>x.radio5=e),label:"2",border:""},{default:u((()=>[U])),_:1},8,["modelValue"])])),_:1})])};export{m as default};
