
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.407496b8.js";import{_ as l}from"./index.fb938e69.js";import{n as a,q as t,r as o,a as i,s as n,y as s,z as p,t as m,F as d}from"./vendor.505a4e11.js";const u={name:"KeepAliveExamplePage",beforeRouteEnter(e,l,a){a((e=>{e.$store.commit("keepAlive/add",e.$options.name)}))},beforeRouteLeave(e,l,a){this.openKeepAlive&&["keepAliveExampleDetail","keepAliveExampleDetail2","keepAliveExampleDetail3"].includes(e.name)||this.$store.commit("keepAlive/remove","KeepAliveExamplePage"),a()},props:{},data:()=>({openKeepAlive:!1,num:1}),created(){},mounted(){},methods:{go(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleDetail2";break;case 3:l="keepAliveExampleDetail3"}this.$router.push({name:l})}}};a("data-v-d15018b2");const c={class:"block"},r={class:"block"},v={class:"block"},k=d("进入同级路由页面"),A=d("进入下级路由页面"),b=d("进入下下级路由页面");t(),u.render=function(a,t,d,u,x,f){const E=e,_=o("el-switch"),h=o("el-input-number"),g=o("el-button"),D=l;return i(),n("div",null,[s(E,{title:"页面缓存",content:"页面缓存只支持跳转至同级或下级路由，跳转上级路由则无法缓存，建议结合路由配置文件加深理解。"}),s(D,null,{default:p((()=>[m("div",c,[s(_,{modelValue:x.openKeepAlive,"onUpdate:modelValue":t[0]||(t[0]=e=>x.openKeepAlive=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),m("div",r,[s(h,{modelValue:x.num,"onUpdate:modelValue":t[1]||(t[1]=e=>x.num=e)},null,8,["modelValue"])]),m("div",v,[s(g,{onClick:t[2]||(t[2]=e=>f.go(1))},{default:p((()=>[k])),_:1}),s(g,{onClick:t[3]||(t[3]=e=>f.go(2))},{default:p((()=>[A])),_:1}),s(g,{onClick:t[4]||(t[4]=e=>f.go(3))},{default:p((()=>[b])),_:1})])])),_:1})])},u.__scopeId="data-v-d15018b2";export{u as default};
