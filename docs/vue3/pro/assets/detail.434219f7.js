
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as t}from"./index.29752973.js";import{_ as a}from"./index.aaedbe08.js";import o from"./index.7ef68ae1.js";import{x as s,y as r,r as n,o as i,z as l,i as m,w as d,I as u}from"./vendor.b5a7373b.js";const f={name:"PagesExampleDepartmentDetail",components:{DetailForm:o},data:()=>({}),mounted(){},methods:{onSubmit(){this.$refs.form.submit((()=>{this.$eventBus.emit("get-data-list"),this.$router.back()}))},onCancel(){this.$store.state.settings.enableTabbar&&!this.$store.state.settings.enableTabbarMergeTabs?this.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):this.$router.push({name:"pagesExampleGeneralDepartmentList"})}}};s("data-v-e7d0d2bc");const c=u("返 回"),p=u("提 交"),b=u("取 消");r(),f.render=function(o,s,r,u,f,_){const $=n("el-button"),g=e,h=n("DetailForm"),x=n("el-col"),C=n("el-row"),k=t,D=a;return i(),l("div",null,[m(g,{title:"routerName"==o.$route.name?"新增部门":"编辑部门"},{default:d((()=>[m($,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:s[0]||(s[0]=e=>o.$router.go(-1))},{default:d((()=>[c])),_:1})])),_:1},8,["title"]),m(k,null,{default:d((()=>[m(C,null,{default:d((()=>[m(x,{md:24,lg:16},{default:d((()=>[m(h,{id:o.$route.params.id,ref:"form"},null,8,["id"])])),_:1})])),_:1})])),_:1}),m(D,null,{default:d((()=>[m($,{type:"primary",onClick:_.onSubmit},{default:d((()=>[p])),_:1},8,["onClick"]),m($,{onClick:_.onCancel},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1})])},f.__scopeId="data-v-e7d0d2bc";export{f as default};