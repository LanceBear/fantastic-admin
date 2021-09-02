
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1ee7394a.js";import{_ as r}from"./index.e2b18078.js";import{_ as s}from"./index.b163878a.js";import{r as o,k as l,n as a,q as d,o as t,A as u}from"./vendor.e2e92bee.js";const m={data(){return{form:{password:"",newpassword:"",checkpassword:""},rules:{password:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:(e,r,s)=>{r!==this.form.newpassword?s(new Error("请确认新密码")):s()}}]}}},methods:{onSubmit(){this.$refs.form.validate((e=>{e&&this.$store.dispatch("user/editPassword",this.form).then((()=>{this.$message({type:"success",message:"修改成功，请重新登录"}),this.$store.dispatch("user/logout").then((()=>{this.$router.push("/login")}))})).catch((()=>{}))}))}}},p=u("提交");m.render=function(u,m,n,i,f,w){const c=e,h=o("el-input"),g=o("el-form-item"),b=o("el-form"),_=o("el-col"),V=o("el-row"),k=r,x=o("el-button"),y=s;return t(),l("div",null,[a(c,{title:"修改密码",content:"定期修改密码可以提高帐号安全性噢~"}),a(k,null,{default:d((()=>[a(V,null,{default:d((()=>[a(_,{md:24,lg:12},{default:d((()=>[a(b,{ref:"form",model:f.form,rules:f.rules,"label-width":"120px"},{default:d((()=>[a(g,{label:"原密码",prop:"password"},{default:d((()=>[a(h,{modelValue:f.form.password,"onUpdate:modelValue":m[0]||(m[0]=e=>f.form.password=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1}),a(g,{label:"新密码",prop:"newpassword"},{default:d((()=>[a(h,{modelValue:f.form.newpassword,"onUpdate:modelValue":m[1]||(m[1]=e=>f.form.newpassword=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1}),a(g,{label:"确认新密码",prop:"checkpassword"},{default:d((()=>[a(h,{modelValue:f.form.checkpassword,"onUpdate:modelValue":m[2]||(m[2]=e=>f.form.checkpassword=e),type:"password",placeholder:"请输入原密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1}),a(y,null,{default:d((()=>[a(x,{type:"primary",onClick:w.onSubmit},{default:d((()=>[p])),_:1},8,["onClick"])])),_:1})])};export{m as default};
