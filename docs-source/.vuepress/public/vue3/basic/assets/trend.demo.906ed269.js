
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d0cc88c3.js";import{n as t,q as a,G as l,a as s,s as r,A as n,D as u,t as i,H as p,J as d,r as f,y as o,z as c}from"./vendor.ebf75cd4.js";import{_ as v}from"./index.34d43001.js";t("data-v-682aa7c2");const y={key:0,class:"prefix"},m={class:"text"},x={key:1,class:"suffix"};a();const _={props:{value:{type:String,required:!0},type:{type:String,validator:e=>["up","down"].includes(e),default:"up"},prefix:{type:String,default:""},suffix:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(e){const t=e,a=l((()=>{let e="up"===t.type;return t.reverse&&(e=!e),e}));return(t,l)=>(s(),r("div",{class:p("trend "+(d(a)?"up":"down"))},[e.prefix?(s(),r("span",y,n(e.prefix),1)):u("v-if",!0),i("span",m,n(e.value),1),e.suffix?(s(),r("span",x,n(e.suffix),1)):u("v-if",!0),i("i",{class:p(""+(d(a)?"el-icon-caret-top":"el-icon-caret-bottom"))},null,2)],2))},__scopeId:"data-v-682aa7c2"},g={},w=i("p",null,"Trend",-1),S=i("p",{style:{"margin-bottom":"0"}},"标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外",-1);g.render=function(t,a){const l=e,n=_,u=v,p=f("el-col"),d=f("el-row");return s(),r("div",null,[o(l,{title:"趋势符号"},{content:c((()=>[w,S])),_:1}),o(d,{gutter:20,style:{margin:"0 10px"}},{default:c((()=>[o(p,{md:8},{default:c((()=>[o(u,{title:"基础用法",style:{margin:"0"}},{default:c((()=>[i("p",null,[o(n,{value:"12.3"})]),i("p",null,[o(n,{value:"12.3",type:"down"})])])),_:1})])),_:1}),o(p,{md:8},{default:c((()=>[o(u,{title:"颜色反转",style:{margin:"0"}},{default:c((()=>[i("p",null,[o(n,{value:"12.3",reverse:""})]),i("p",null,[o(n,{value:"12.3",type:"down",reverse:""})])])),_:1})])),_:1}),o(p,{md:8},{default:c((()=>[o(u,{title:"前缀后缀",style:{margin:"0"}},{default:c((()=>[i("p",null,[o(n,{value:"12.3",prefix:"$"})]),i("p",null,[o(n,{value:"12.3",suffix:"%"})])])),_:1})])),_:1})])),_:1})])};export{g as default};