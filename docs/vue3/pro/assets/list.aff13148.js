
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as t}from"./index.2beb756b.js";import{_ as a}from"./index.7203ffb0.js";import{_ as i}from"./index.29752973.js";import{p as o}from"./pagination.ed16acc9.js";import l from"./index.a9cc9b19.js";import{x as s,y as n,r,ae as d,o as m,z as p,i as c,w as u,G as h,h as g,J as f,B as b,I as _}from"./vendor.b5a7373b.js";import"./index.f03c6850.js";const C={name:"PagesExampleDepartmentJobList",components:{FormMode:l},mixins:[o],data:()=>({formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[],department:""}),mounted(){this.getDepartmentInfo(),this.getDataList(),"router"===this.formMode&&this.$eventBus.on("get-data-list",(()=>{this.getDataList()}))},beforeUnmount(){"router"===this.formMode&&this.$eventBus.off("get-data-list")},methods:{getDepartmentInfo(){this.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:this.$route.params.department_id}}).then((e=>{this.department=e.data.title}))},getDataList(){this.loading=!0;let e=this.getParams();e.department_id=this.$route.params.department_id,this.search.title&&(e.title=this.search.title),this.$api.get("pages_example/job/list",{baseURL:"/mock/",params:e}).then((e=>{this.loading=!1,this.dataList=e.data.list,this.pagination.total=e.data.total}))},onCreate(){"router"===this.formMode?this.$router.push({name:"pagesExampleGeneralJobCreate",params:{department_id:this.$route.params.department_id}}):(this.formModeProps.id="",this.formModeProps.visible=!0)},onEdit(e){"router"===this.formMode?this.$router.push({name:"pagesExampleGeneralJobEdit",params:{id:e.id,department_id:this.$route.params.department_id}}):(this.formModeProps.id=e.id,this.formModeProps.visible=!0)},onDel(e){this.$confirm(`确认删除「${e.title}」吗？`,"确认信息").then((()=>{this.$api.post("pages_example/job/delete",{id:e.id},{baseURL:"/mock/"}).then((()=>{this.getDataList(),this.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}))}}};s("data-v-68c82ddb");const k=_("返回"),L=_("新增职位"),M=_("筛 选"),$=_("单个批量操作按钮"),x=_("批量操作按钮组1"),y=_("批量操作按钮组2"),z=_("编辑"),D=_("删除");n(),C.render=function(o,l,s,n,_,C){const v=r("el-button"),w=e,S=r("el-input"),j=r("el-form-item"),P=r("el-col"),E=r("el-row"),U=r("el-form"),V=t,I=r("el-button-group"),J=a,B=r("el-table-column"),G=r("el-table"),R=r("el-pagination"),A=i,F=r("FormMode"),K=d("loading");return m(),p("div",null,[c(w,{title:`「${_.department}」职位管理`,content:"页面数据为 Mock 示例数据，非真实数据。"},{default:u((()=>[c(v,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:l[0]||(l[0]=e=>o.$router.go(-1))},{default:u((()=>[k])),_:1})])),_:1},8,["title"]),c(A,null,{default:u((()=>[c(v,{type:"primary",icon:"el-icon-plus",onClick:C.onCreate},{default:u((()=>[L])),_:1},8,["onClick"]),c(V,null,{default:u((()=>[c(U,{model:_.search,size:"small","label-width":"100px","label-suffix":"："},{default:u((()=>[c(E,null,{default:u((()=>[c(P,{span:12},{default:u((()=>[c(j,{label:"职位"},{default:u((()=>[c(S,{modelValue:_.search.title,"onUpdate:modelValue":l[1]||(l[1]=e=>_.search.title=e),placeholder:"请输入职位名称，支持模糊查询",clearable:"",onKeydown:h(C.getDataList,["enter"]),onClear:C.getDataList},null,8,["modelValue","onKeydown","onClear"])])),_:1})])),_:1})])),_:1}),c(j,null,{default:u((()=>[c(v,{type:"primary",icon:"el-icon-search",onClick:C.getDataList},{default:u((()=>[M])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1}),_.batch.enable?(m(),g(J,{key:0,data:_.dataList,"selection-data":_.batch.selectionDataList,onCheckAll:l[2]||(l[2]=e=>o.$refs.table.toggleAllSelection()),onCheckNull:l[3]||(l[3]=e=>o.$refs.table.clearSelection())},{default:u((()=>[c(v,{size:"small"},{default:u((()=>[$])),_:1}),c(I,null,{default:u((()=>[c(v,{size:"small"},{default:u((()=>[x])),_:1}),c(v,{size:"small"},{default:u((()=>[y])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):f("v-if",!0),b(c(G,{ref:"table",class:"list-table",data:_.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:o.onSortChange,onSelectionChange:l[4]||(l[4]=e=>_.batch.selectionDataList=e)},{default:u((()=>[_.batch.enable?(m(),g(B,{key:0,type:"selection",width:"40"})):f("v-if",!0),c(B,{prop:"title",label:"职位"}),c(B,{label:"操作",width:"250",align:"center"},{default:u((e=>[c(v,{type:"primary",size:"mini",plain:"",onClick:t=>C.onEdit(e.row)},{default:u((()=>[z])),_:2},1032,["onClick"]),c(v,{type:"danger",size:"mini",plain:"",onClick:t=>C.onDel(e.row)},{default:u((()=>[D])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSortChange"]),[[K,o.loading]]),c(R,{"current-page":o.pagination.page,total:o.pagination.total,"page-size":o.pagination.size,"page-sizes":o.pagination.sizes,layout:o.pagination.layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:o.onSizeChange,onCurrentChange:o.onCurrentChange},null,8,["current-page","total","page-size","page-sizes","layout","onSizeChange","onCurrentChange"])])),_:1}),["dialog","drawer"].includes(_.formMode)?(m(),g(F,{key:0,id:_.formModeProps.id,modelValue:_.formModeProps.visible,"onUpdate:modelValue":l[5]||(l[5]=e=>_.formModeProps.visible=e),mode:_.formMode,onSuccess:C.getDataList},null,8,["id","modelValue","mode","onSuccess"])):f("v-if",!0)])},C.__scopeId="data-v-68c82ddb";export{C as default};
