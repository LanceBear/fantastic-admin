
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as l}from"./index.ffbd20e5.js";import{_ as e}from"./index.a3c54816.js";import{_ as a}from"./index.f03e52fd.js";import{H as t,I as o,r as n,l as i,J as p,s as r,n as s,K as f,R as m}from"./vendor.7707186e.js";const u={data:()=>({flip:"",rotate:0})};t("data-v-233c461b");const d=f("p",null,"也支持彩色 SVG Icon",-1),c=f("p",null,"翻转：",-1),x=m("无"),_=m("水平翻转"),b=m("垂直翻转"),v=m("水平垂直翻转"),V=f("p",null,"旋转：",-1),h=f("p",null,"使用方法：",-1),g=f("ol",null,[f("li",null,[m("上 "),f("a",{href:"https://www.iconfont.cn/",target:"_blank"},"Iconfont"),m(" 下载需要的 svg 图标")]),f("li",null,"将 svg 文件放入 ./src/assets/icons 目录下，文件名即为 name")],-1);o(),u.render=function(t,o,m,u,w,I){const j=l,G=e,S=n("el-radio-button"),y=n("el-radio-group"),U=n("el-slider"),k=a;return i(),p("div",null,[r(j,{title:"SVG Icon",content:"除了使用 Element Plus 提供的图标外，你还可以使用自己的 SVG 图标"}),r(k,null,{default:s((()=>[r(G,{name:"example-emotion-line",flip:w.flip,rotate:w.rotate,class:"example-icon"},null,8,["flip","rotate"]),r(G,{name:"example-emotion-laugh-line",flip:w.flip,rotate:w.rotate,class:"example-icon"},null,8,["flip","rotate"]),r(G,{name:"example-emotion-unhappy-line",flip:w.flip,rotate:w.rotate,class:"example-icon"},null,8,["flip","rotate"]),d,r(G,{name:"example-crown",flip:w.flip,rotate:w.rotate,class:"example-icon"},null,8,["flip","rotate"]),r(G,{name:"example-star",flip:w.flip,rotate:w.rotate,class:"example-icon"},null,8,["flip","rotate"]),r(G,{name:"example-vip",flip:w.flip,rotate:w.rotate,class:"example-icon"},null,8,["flip","rotate"]),f("div",null,[c,r(y,{modelValue:w.flip,"onUpdate:modelValue":o[0]||(o[0]=l=>w.flip=l)},{default:s((()=>[r(S,{label:""},{default:s((()=>[x])),_:1}),r(S,{label:"horizontal"},{default:s((()=>[_])),_:1}),r(S,{label:"vertical"},{default:s((()=>[b])),_:1}),r(S,{label:"both"},{default:s((()=>[v])),_:1})])),_:1},8,["modelValue"]),V,r(U,{modelValue:w.rotate,"onUpdate:modelValue":o[1]||(o[1]=l=>w.rotate=l),min:0,max:360,style:{width:"50%"}},null,8,["modelValue"])]),h,g])),_:1})])},u.__scopeId="data-v-233c461b";export{u as default};