
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(o,t,l)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l;import s from"./index.cfc48546.js";import{x as n,y as d,r as c,o as m,z as u,h as p,w as f,i as b,X as y,A as V,J as k,I as v}from"./vendor.b5a7373b.js";import"./index.5dae4bb6.js";import"./index.13e5accc.js";import"./index.8d444685.js";const C={components:{DetailForm:s},props:(h=((e,o)=>{for(var t in o||(o={}))a.call(o,t)&&r(e,t,o[t]);if(l)for(var t of l(o))i.call(o,t)&&r(e,t,o[t]);return e})({},s.props),j={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(h,t(j))),emits:["update:modelValue","success"],computed:{myVisible:{get:function(){return this.modelValue},set:function(e){this.$emit("update:modelValue",e)}},title(){return""==this.id?"新增管理员":"编辑管理员"}},methods:{onSubmit(){this.$refs.form.submit((()=>{this.$emit("success"),this.onCancel()}))},onCancel(){this.myVisible=!1}}};var h,j;n("data-v-375e2f7a");const w=v("取 消"),g=v("确 定"),O={class:"buttons"},x=v("取 消"),_=v("确 定");d(),C.render=function(e,o,t,l,a,i){const r=c("DetailForm"),s=c("el-button"),n=c("el-dialog"),d=c("el-drawer");return m(),u("div",null,["dialog"===t.mode?(m(),p(n,{key:0,modelValue:i.myVisible,"onUpdate:modelValue":o[0]||(o[0]=e=>i.myVisible=e),title:i.title,width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:f((()=>[b(s,{onClick:i.onCancel},{default:f((()=>[w])),_:1},8,["onClick"]),b(s,{type:"primary",onClick:i.onSubmit},{default:f((()=>[g])),_:1},8,["onClick"])])),default:f((()=>[b(r,y({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(m(),p(d,{key:1,modelValue:i.myVisible,"onUpdate:modelValue":o[1]||(o[1]=e=>i.myVisible=e),title:i.title,size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:f((()=>[b(r,y({ref:"form"},e.$props,{class:"form-container"}),null,16),V("div",O,[b(s,{onClick:i.onCancel},{default:f((()=>[x])),_:1},8,["onClick"]),b(s,{type:"primary",onClick:i.onSubmit},{default:f((()=>[_])),_:1},8,["onClick"])])])),_:1},8,["modelValue","title"])):k("v-if",!0)])},C.__scopeId="data-v-375e2f7a";export{C as default};
