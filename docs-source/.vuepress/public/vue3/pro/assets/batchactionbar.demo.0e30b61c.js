
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as a}from"./index.7203ffb0.js";import{_ as t}from"./index.29752973.js";import{x as l,y as s,r as d,o,z as n,i,w as r,A as c,I as f}from"./vendor.b5a7373b.js";const u={name:"ComponentExampleBatchactionbar",props:{},data:()=>({dataList:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],selectionDataList:[]}),created(){},mounted(){},methods:{}};l("data-v-ceaf27fc");const m=c("p",null,"BatchActionBar",-1),p=c("p",{style:{"margin-bottom":"0"}},"该组件需要和 ElTable 搭配使用",-1),b=f("单个批量操作按钮"),_=f("批量操作按钮组1"),h=f("批量操作按钮组2"),g=f("单个批量操作按钮"),L=f("批量操作按钮组1"),z=f("批量操作按钮组2");s(),u.render=function(l,s,c,f,u,x){const A=e,C=d("el-button"),w=d("el-button-group"),S=a,j=d("el-table-column"),k=d("el-table"),v=t;return o(),n("div",null,[i(A,{title:"批量操作栏"},{content:r((()=>[m,p])),_:1}),i(v,null,{default:r((()=>[i(S,{data:u.dataList,"selection-data":u.selectionDataList,onCheckAll:s[0]||(s[0]=e=>l.$refs.table.toggleAllSelection()),onCheckNull:s[1]||(s[1]=e=>l.$refs.table.clearSelection())},{default:r((()=>[i(C,{size:"small"},{default:r((()=>[b])),_:1}),i(w,null,{default:r((()=>[i(C,{size:"small"},{default:r((()=>[_])),_:1}),i(C,{size:"small"},{default:r((()=>[h])),_:1})])),_:1})])),_:1},8,["data","selection-data"]),i(k,{ref:"table",data:u.dataList,border:"",stripe:"","highlight-current-row":"",onSelectionChange:s[2]||(s[2]=e=>u.selectionDataList=e)},{default:r((()=>[i(j,{type:"selection",width:"40"}),i(j,{prop:"date",label:"日期",width:"180"}),i(j,{prop:"name",label:"姓名",width:"180"}),i(j,{prop:"address",label:"地址"})])),_:1},8,["data"]),i(S,{data:u.dataList,"selection-data":u.selectionDataList,onCheckAll:s[3]||(s[3]=e=>l.$refs.table.toggleAllSelection()),onCheckNull:s[4]||(s[4]=e=>l.$refs.table.clearSelection())},{default:r((()=>[i(C,{size:"small"},{default:r((()=>[g])),_:1}),i(w,null,{default:r((()=>[i(C,{size:"small"},{default:r((()=>[L])),_:1}),i(C,{size:"small"},{default:r((()=>[z])),_:1})])),_:1})])),_:1},8,["data","selection-data"])])),_:1})])},u.__scopeId="data-v-ceaf27fc";export{u as default};