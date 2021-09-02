
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{x as t,y as a,r as e,o as l,z as s,i,w as n,A as o,F as r,P as p,J as d}from"./vendor.b5a7373b.js";import{_ as c}from"./index.29752973.js";const h={name:"AmapMarker",props:{v:{type:String,default:"1.4.15"},appkey:{type:String,default:""},height:{type:[Number,String],default:500},lnglat:{type:Array,default:()=>[]}},emits:["update:lnglat"],data:()=>({search:"",searchOption:{citylimit:!0},map:"",marker:"",autoComplete:"",placeSearch:""}),computed:{realHeight(){return"string"==typeof this.height?this.height:`${this.height}px`}},created(){},mounted(){if("undefined"==typeof AMap){var t=document.createElement("script");t.charset="utf-8",t.src=`https://webapi.amap.com/maps?v=${this.v}&key=${this.appkey}&plugin=AMap.Autocomplete`,document.head.appendChild(t),t.onload=()=>{this.init()}}else this.$nextTick((()=>{this.init()}))},methods:{init(){this.map=new AMap.Map("amap",{zoom:12}),AMap.plugin("AMap.ToolBar",(()=>{var t=new AMap.ToolBar;this.map.addControl(t)})),this.marker=new AMap.Marker({draggable:!0,cursor:"move"}),this.marker.on("dragend",(t=>{this.$emit("update:lnglat",[t.lnglat.lng,t.lnglat.lat])})),this.autoComplete=new AMap.Autocomplete,this.map.on("click",(t=>{this.addMarket(t.lnglat.getLng(),t.lnglat.getLat())})),2==this.lnglat.length&&this.addMarket(this.lnglat[0],this.lnglat[1])},addMarket(t,a){this.map.remove(this.marker),this.marker.setPosition([t,a]),this.map.add(this.marker),this.map.setFitView(),this.$emit("update:lnglat",[t,a])},onSearch(t,a){this.autoComplete.search(t,((t,e)=>{a(e.tips)}))},onSelect(t){this.search=t.name,t.location?this.addMarket(t.location.lng,t.location.lat):this.map.setCity(t.adcode)}}};t("data-v-277e1816");const m={class:"map"},g={class:"search-name"},u=["title"];a(),h.render=function(t,a,d,c,h,f){const k=e("el-autocomplete");return l(),s("div",m,[i(k,{modelValue:h.search,"onUpdate:modelValue":a[0]||(a[0]=t=>h.search=t),class:"search","fetch-suggestions":f.onSearch,"trigger-on-focus":!1,clearable:"","prefix-icon":"el-icon-location-information",placeholder:"请输入地址关键字",onSelect:f.onSelect},{default:n((({item:t})=>[o("div",g,r(t.name),1),o("span",{class:"search-address",title:t.district+t.address},r(t.district+t.address),9,u)])),_:1},8,["modelValue","fetch-suggestions","onSelect"]),o("div",{id:"amap",style:p(`height:${f.realHeight};`)},null,4)])},h.__scopeId="data-v-277e1816";const f={name:"ComponentExampleAmap",props:{},data:()=>({lnglat:[120.068384,30.290939]}),created(){},mounted(){},methods:{}};f.render=function(t,a,e,p,m,g){const u=h,f=c;return l(),s("div",null,[i(f,null,{default:n((()=>[o("div",null,"经纬度："+r(m.lnglat),1),d(" 注意这里替换高德地图的appkey "),i(u,{lnglat:m.lnglat,"onUpdate:lnglat":a[0]||(a[0]=t=>m.lnglat=t),appkey:"8f7844cc502e17bb549c04c9aaadaf94",height:600},null,8,["lnglat"])])),_:1})])},f.__scopeId="data-v-3c373116";export{f as default};
