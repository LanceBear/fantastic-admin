
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.281722fb.js";import{_ as t}from"./index.46bcf552.js";import{r as o,n as l,J as n,q as i,l as a,R as u}from"./vendor.3dac1dfd.js";const d={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},p=u("vue3-clipboard 官网"),s=u("复制");d.render=function(u,d,c,r,m,f){const _=o("el-button"),b=e,h=o("el-input"),V=t;return l(),n("div",null,[i(b,{title:"剪贴板"},{default:a((()=>[i(_,{icon:"el-icon-link",onClick:d[0]||(d[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:a((()=>[p])),_:1})])),_:1}),i(V,{title:"输入内容，并点击复制按钮"},{default:a((()=>[i(h,{modelValue:m.input,"onUpdate:modelValue":d[1]||(d[1]=e=>m.input=e)},{append:a((()=>[i(_,{onClick:f.copy},{default:a((()=>[s])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),i(V,{title:"复制成功后可在这粘贴测试"},{default:a((()=>[i(h,{modelValue:m.input2,"onUpdate:modelValue":d[2]||(d[2]=e=>m.input2=e)},null,8,["modelValue"])])),_:1})])};export{d as default};
