
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{x as e,y as a,r as l,ae as o,B as t,o as r,z as s,i as m,w as i,I as d}from"./vendor.b5a7373b.js";const u={props:{id:{type:[Number,String],default:""}},data(){return{loading:!1,form:{id:this.id,account:"",name:"",mobile:"",sex:"2"},rules:{account:[{required:!0,message:"请输入帐号",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:(e,a,l)=>{let o={key:"mobile",value:a};""!=this.form.id&&(o.id=this.form.id),this.$api.get("pages_example/manager/check",{baseURL:"/mock/",params:o}).then((e=>{e.data.exist?l(new Error("手机号已存在")):l()}))},trigger:"blur"}]}}},mounted(){""!=this.form.id&&this.getInfo()},methods:{getInfo(){this.loading=!0,this.$api.get("pages_example/manager/detail",{baseURL:"/mock/",params:{id:this.form.id}}).then((e=>{this.loading=!1,this.form.account=e.data.account,this.form.name=e.data.name,this.form.mobile=e.data.mobile}))},submit(e){""==this.form.id?this.$refs.form.validate((a=>{a&&this.$api.post("pages_example/manager/create",this.form,{baseURL:"/mock/"}).then((()=>{this.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):this.$refs.form.validate((a=>{a&&this.$api.post("pages_example/manager/edit",this.form,{baseURL:"/mock/"}).then((()=>{this.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}};e("data-v-2e8e7512");const n=d("保密"),f=d("男"),p=d("女");a(),u.render=function(e,a,d,u,c,g){const h=l("el-input"),b=l("el-form-item"),_=l("el-radio-button"),x=l("el-radio-group"),V=l("el-form"),v=o("loading");return t((r(),s("div",null,[m(V,{ref:"form",model:c.form,rules:c.rules,"label-width":"120px","label-suffix":"："},{default:i((()=>[m(b,{label:"帐号",prop:"account"},{default:i((()=>[m(h,{modelValue:c.form.account,"onUpdate:modelValue":a[0]||(a[0]=e=>c.form.account=e),placeholder:"请输入帐号"},null,8,["modelValue"])])),_:1}),m(b,{label:"姓名",prop:"name"},{default:i((()=>[m(h,{modelValue:c.form.name,"onUpdate:modelValue":a[1]||(a[1]=e=>c.form.name=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),m(b,{label:"手机号",prop:"mobile"},{default:i((()=>[m(h,{modelValue:c.form.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>c.form.mobile=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),m(b,{label:"性别",prop:"sex"},{default:i((()=>[m(x,{modelValue:c.form.sex,"onUpdate:modelValue":a[3]||(a[3]=e=>c.form.sex=e),size:"small"},{default:i((()=>[m(_,{label:"2"},{default:i((()=>[n])),_:1}),m(_,{label:"1"},{default:i((()=>[f])),_:1}),m(_,{label:"0"},{default:i((()=>[p])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])],512)),[[v,c.loading]])},u.__scopeId="data-v-2e8e7512";export{u as default};