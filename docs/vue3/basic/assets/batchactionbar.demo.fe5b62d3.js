
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.407496b8.js";import{n as a,q as t,G as l,r as s,a as d,s as n,y as o,z as i,J as c,X as r,B as u,A as f,_ as m,F as h,t as p}from"./vendor.505a4e11.js";import{_ as b}from"./index.fb938e69.js";a("data-v-e2dc6d6e");const _={class:"batch-action-bar"},g=h("当页全选"),v={key:0,class:"tips"};t();const D={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:a}){const t=e,h=l({get:function(){let e=!1;return 0!=t.data.length&&t.data.length==t.selectionData.length&&(e=!0),e},set:function(e){a(e?"check-all":"check-null")}}),p=l((()=>{let e=!1;return t.selectionData.length>0&&t.selectionData.length<t.data.length&&(e=!0),e}));return(a,t)=>{const l=s("el-checkbox"),b=s("el-form");return d(),n("div",_,[o(l,{modelValue:c(h),"onUpdate:modelValue":t[0]||(t[0]=e=>r(h)?h.value=e:null),indeterminate:c(p),disabled:!e.data.length},{default:i((()=>[g])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(d(),n("div",v,"已选 "+u(e.selectionData.length)+" 项",1)):f("v-if",!0),o(b,{disabled:!e.selectionData.length},{default:i((()=>[m(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}},__scopeId:"data-v-e2dc6d6e"};const k={name:"ComponentExampleBatchactionbar",props:{},data:()=>({dataList:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],selectionDataList:[]}),created(){},mounted(){},methods:{}};a("data-v-ceaf27fc");const y=p("p",null,"BatchActionBar",-1),A=p("p",{style:{"margin-bottom":"0"}},"该组件需要和 ElTable 搭配使用",-1),L=h("单个批量操作按钮"),z=h("批量操作按钮组1"),C=h("批量操作按钮组2"),x=h("单个批量操作按钮"),S=h("批量操作按钮组1"),$=h("批量操作按钮组2");t(),k.render=function(a,t,l,c,r,u){const f=e,m=s("el-button"),h=s("el-button-group"),p=D,_=s("el-table-column"),g=s("el-table"),v=b;return d(),n("div",null,[o(f,{title:"批量操作栏"},{content:i((()=>[y,A])),_:1}),o(v,null,{default:i((()=>[o(p,{data:r.dataList,"selection-data":r.selectionDataList,onCheckAll:t[0]||(t[0]=e=>a.$refs.table.toggleAllSelection()),onCheckNull:t[1]||(t[1]=e=>a.$refs.table.clearSelection())},{default:i((()=>[o(m,{size:"small"},{default:i((()=>[L])),_:1}),o(h,null,{default:i((()=>[o(m,{size:"small"},{default:i((()=>[z])),_:1}),o(m,{size:"small"},{default:i((()=>[C])),_:1})])),_:1})])),_:1},8,["data","selection-data"]),o(g,{ref:"table",data:r.dataList,border:"",stripe:"","highlight-current-row":"",onSelectionChange:t[2]||(t[2]=e=>r.selectionDataList=e)},{default:i((()=>[o(_,{type:"selection",width:"40"}),o(_,{prop:"date",label:"日期",width:"180"}),o(_,{prop:"name",label:"姓名",width:"180"}),o(_,{prop:"address",label:"地址"})])),_:1},8,["data"]),o(p,{data:r.dataList,"selection-data":r.selectionDataList,onCheckAll:t[3]||(t[3]=e=>a.$refs.table.toggleAllSelection()),onCheckNull:t[4]||(t[4]=e=>a.$refs.table.clearSelection())},{default:i((()=>[o(m,{size:"small"},{default:i((()=>[x])),_:1}),o(h,null,{default:i((()=>[o(m,{size:"small"},{default:i((()=>[S])),_:1}),o(m,{size:"small"},{default:i((()=>[$])),_:1})])),_:1})])),_:1},8,["data","selection-data"])])),_:1})])},k.__scopeId="data-v-ceaf27fc";export{k as default};
