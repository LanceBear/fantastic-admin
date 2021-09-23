
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d0cc88c3.js";import{n as l,q as a,K as d,w as t,r as o,a as u,s as r,$ as s,y as n,z as c,F as _,A as p,D as m,a6 as f,v as h,x as b}from"./vendor.ebf75cd4.js";import{_ as i}from"./index.34d43001.js";l("data-v-987c3476");const v={class:"search-container"},V={key:0,class:"more"};a();const y={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:l}){const a=e,f=d(!a.unfold);function h(){f.value=!f.value,l("toggle",f.value)}return t((()=>a.unfold),(()=>h()),{immediate:!0}),(l,a)=>{const d=o("el-button");return u(),r("div",v,[s(l.$slots,"default",{},void 0,!0),e.showMore?(u(),r("div",V,[n(d,{type:"text",size:"small",icon:f.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:h},{default:c((()=>[_(p(f.value?"收起":"展开"),1)])),_:1},8,["icon"])])):m("v-if",!0)])}},__scopeId:"data-v-987c3476"},w={data:()=>({search:{name:"",department_id:"",department_job_id:"",role_id:"",check1:!0,check2:!1},searchMore:!1,searchMore2:!1})},j=_("备选项"),x=_("备选项"),U=_("筛选"),k=_("导出"),g=_("查看已导出记录"),M=_("备选项"),z=_("备选项"),B=_("筛选"),T=_("导出"),$=_("查看已导出记录");w.render=function(l,a,d,t,s,_){const p=e,m=o("el-input"),v=o("el-form-item"),V=o("el-col"),w=o("el-row"),q=o("el-option"),A=o("el-select"),C=o("el-checkbox"),D=o("el-button"),F=o("el-form"),I=y,K=i,S=f("auth");return u(),r("div",null,[n(p,{title:"搜索面板",content:"SearchBar"}),n(K,null,{default:c((()=>[n(I,{"show-more":"",onToggle:a[4]||(a[4]=e=>s.searchMore=e)},{default:c((()=>[n(F,{model:s.search,size:"small","label-width":"120px"},{default:c((()=>[n(w,null,{default:c((()=>[n(V,{span:12},{default:c((()=>[n(v,{label:"姓名 / 手机号"},{default:c((()=>[n(m,{modelValue:s.search.name,"onUpdate:modelValue":a[0]||(a[0]=e=>s.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:c((()=>[n(V,{span:6},{default:c((()=>[h(n(v,{label:"部门"},{default:c((()=>[n(A,{modelValue:s.search.department_id,"onUpdate:modelValue":a[1]||(a[1]=e=>s.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:c((()=>[n(q,{label:"技术部",value:1}),n(q,{label:"设计部",value:2}),n(q,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1},512),[[S,"supplay.department.browse"]])])),_:1}),n(V,{span:6},{default:c((()=>[h(n(v,{label:"职位"},{default:c((()=>[n(A,{modelValue:s.search.department_job_id,"onUpdate:modelValue":a[2]||(a[2]=e=>s.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:c((()=>[n(q,{label:"程序员",value:1}),n(q,{label:"设计师",value:2}),n(q,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1},512),[[S,"supplay.department_job.browse"]])])),_:1}),n(V,{span:6},{default:c((()=>[h(n(v,{label:"角色"},{default:c((()=>[n(A,{modelValue:s.search.role_id,"onUpdate:modelValue":a[3]||(a[3]=e=>s.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:c((()=>[n(q,{label:"主管",value:1}),n(q,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1},512),[[S,"supplay.role.browse"]])])),_:1})])),_:1}),h(n(w,null,{default:c((()=>[n(V,{span:24},{default:c((()=>[n(v,{label:"角色"},{default:c((()=>[n(C,{value:!0},{default:c((()=>[j])),_:1}),n(C,{value:!1},{default:c((()=>[x])),_:1})])),_:1})])),_:1})])),_:1},512),[[b,s.searchMore]]),n(v,null,{default:c((()=>[n(D,{type:"primary",icon:"el-icon-search"},{default:c((()=>[U])),_:1}),n(D,null,{default:c((()=>[k])),_:1}),n(D,{type:"text"},{default:c((()=>[g])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),n(K,{title:"默认展开"},{default:c((()=>[n(I,{"show-more":"",unfold:"",onToggle:a[11]||(a[11]=e=>s.searchMore2=e)},{default:c((()=>[n(F,{model:s.search,size:"small","label-width":"120px"},{default:c((()=>[n(w,null,{default:c((()=>[n(V,{span:12},{default:c((()=>[n(v,{label:"姓名 / 手机号"},{default:c((()=>[n(m,{modelValue:s.search.name,"onUpdate:modelValue":a[5]||(a[5]=e=>s.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(w,null,{default:c((()=>[n(V,{span:6},{default:c((()=>[h(n(v,{label:"部门"},{default:c((()=>[n(A,{modelValue:s.search.department_id,"onUpdate:modelValue":a[6]||(a[6]=e=>s.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:c((()=>[n(q,{label:"技术部",value:1}),n(q,{label:"设计部",value:2}),n(q,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1},512),[[S,"supplay.department.browse"]])])),_:1}),n(V,{span:6},{default:c((()=>[h(n(v,{label:"职位"},{default:c((()=>[n(A,{modelValue:s.search.department_job_id,"onUpdate:modelValue":a[7]||(a[7]=e=>s.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:c((()=>[n(q,{label:"程序员",value:1}),n(q,{label:"设计师",value:2}),n(q,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1},512),[[S,"supplay.department_job.browse"]])])),_:1}),n(V,{span:6},{default:c((()=>[h(n(v,{label:"角色"},{default:c((()=>[n(A,{modelValue:s.search.role_id,"onUpdate:modelValue":a[8]||(a[8]=e=>s.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:c((()=>[n(q,{label:"主管",value:1}),n(q,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1},512),[[S,"supplay.role.browse"]])])),_:1})])),_:1}),h(n(w,null,{default:c((()=>[n(V,{span:24},{default:c((()=>[n(v,{label:"角色"},{default:c((()=>[n(C,{modelValue:s.search.check1,"onUpdate:modelValue":a[9]||(a[9]=e=>s.search.check1=e)},{default:c((()=>[M])),_:1},8,["modelValue"]),n(C,{modelValue:s.search.check2,"onUpdate:modelValue":a[10]||(a[10]=e=>s.search.check2=e)},{default:c((()=>[z])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[b,s.searchMore2]]),n(v,null,{default:c((()=>[n(D,{type:"primary",icon:"el-icon-search"},{default:c((()=>[B])),_:1}),n(D,null,{default:c((()=>[T])),_:1}),n(D,{type:"text"},{default:c((()=>[$])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])};export{w as default};