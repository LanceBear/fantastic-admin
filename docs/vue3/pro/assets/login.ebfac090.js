
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e,a as o}from"./index.dff1d171.js";import{_ as a}from"./index.122b6189.js";import{s as t}from"./index.15daa332.js";import{H as l,I as s,r,n,J as i,q as d,l as p,K as c,L as m,M as u,O as g,P as h,Q as f,R as w,k as y,S as _}from"./vendor.3dac1dfd.js";const x={name:"Login",data:()=>({title:"Fantastic-admin 专业版",formType:"login",loginForm:{account:t.local.get("login_account"),password:"",remember:t.local.has("login_account")},loginRules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]},resetForm:{account:t.local.get("login_account"),captcha:"",newPassword:""},resetRules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]},loading:!1,passwordType:"password",redirect:void 0}),watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPassword(){this.passwordType="password"===this.passwordType?"":"password",this.$nextTick((()=>{this.$refs.password.focus()}))},handleLogin(){this.$refs.loginForm.validate((e=>{e&&(this.loading=!0,this.$store.dispatch("user/login",this.loginForm).then((()=>{this.loading=!1,this.loginForm.remember?t.local.set("login_account",this.loginForm.account):t.local.remove("login_account"),this.$router.push({path:this.redirect||"/"})})).catch((()=>{this.loading=!1})))}))},handleFind(){this.$message({message:"重置密码仅提供界面演示，无实际功能，需开发者自行扩展",type:"info"}),this.$refs.resetForm.validate((e=>{}))},testAccount(e){this.loginForm.account=e,this.loginForm.password="123456",this.handleLogin()}}};l("data-v-5a0b2f12");const b=c("div",{class:"bg-banner"},null,-1),F=c("i",{class:"ri-translate"},null,-1),v={id:"login-box"},V=c("div",{class:"login-banner"},null,-1),$={class:"title-container"},k={class:"title"},C={class:"flex-bar"},T=w("记住我"),P=w("忘记密码"),q={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},L=c("span",{style:{"margin-right":"5px"}},"演示帐号一键登录：",-1),U=w("admin"),R=w("test"),j=c("div",{class:"title-container"},[c("h3",{class:"title"},"重置密码")],-1);s(),x.render=function(t,l,s,x,z,A){const K=e,I=a,H=r("el-input"),J=r("el-form-item"),M=r("el-checkbox"),O=r("el-button"),Q=r("el-form"),S=r("el-col"),B=r("el-row"),D=o;return n(),i("div",null,[b,d(K,{class:"i18n-selector"},{default:p((()=>[F])),_:1}),c("div",v,[V,m(d(Q,{ref:"loginForm",model:z.loginForm,rules:z.loginRules,class:"login-form",autocomplete:"on","label-position":"left"},{default:p((()=>[c("div",$,[c("h3",k,g(z.title)+"管理后台",1)]),c("div",null,[d(J,{prop:"account"},{default:p((()=>[d(H,{ref:"name",modelValue:z.loginForm.account,"onUpdate:modelValue":l[0]||(l[0]=e=>z.loginForm.account=e),placeholder:t.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:p((()=>[d(I,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),d(J,{prop:"password"},{default:p((()=>[d(H,{ref:"password",modelValue:z.loginForm.password,"onUpdate:modelValue":l[1]||(l[1]=e=>z.loginForm.password=e),type:z.passwordType,placeholder:t.$t("app.password"),tabindex:"2",autocomplete:"on",onKeyup:h(A.handleLogin,["enter"])},{prefix:p((()=>[d(I,{name:"password"})])),suffix:p((()=>[d(I,{name:"password"===z.passwordType?"eye":"eye-open",onClick:A.showPassword},null,8,["name","onClick"])])),_:1},8,["modelValue","type","placeholder","onKeyup"])])),_:1})]),c("div",C,[d(M,{modelValue:z.loginForm.remember,"onUpdate:modelValue":l[2]||(l[2]=e=>z.loginForm.remember=e)},{default:p((()=>[T])),_:1},8,["modelValue"]),d(O,{type:"text",onClick:l[3]||(l[3]=e=>z.formType="reset")},{default:p((()=>[P])),_:1})]),d(O,{loading:z.loading,type:"primary",style:{width:"100%"},onClick:f(A.handleLogin,["prevent"])},{default:p((()=>[w(g(t.$t("app.login")),1)])),_:1},8,["loading","onClick"]),c("div",q,[L,d(O,{type:"danger",size:"mini",onClick:l[4]||(l[4]=e=>A.testAccount("admin"))},{default:p((()=>[U])),_:1}),d(O,{type:"danger",size:"mini",plain:"",onClick:l[5]||(l[5]=e=>A.testAccount("test"))},{default:p((()=>[R])),_:1})])])),_:1},8,["model","rules"]),[[u,"login"==z.formType]]),m(d(Q,{ref:"resetForm",model:z.resetForm,rules:z.resetRules,class:"login-form","auto-complete":"on","label-position":"left"},{default:p((()=>[j,c("div",null,[d(J,{prop:"account"},{default:p((()=>[d(H,{ref:"name",modelValue:z.resetForm.account,"onUpdate:modelValue":l[6]||(l[6]=e=>z.resetForm.account=e),placeholder:t.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:p((()=>[d(I,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),d(J,{prop:"captcha"},{default:p((()=>[d(H,{ref:"captcha",modelValue:z.resetForm.captcha,"onUpdate:modelValue":l[7]||(l[7]=e=>z.resetForm.captcha=e),placeholder:t.$t("app.captcha"),type:"text",tabindex:"2",autocomplete:"on"},{prefix:p((()=>[d(I,{name:"captcha"})])),append:p((()=>[d(O,null,{default:p((()=>[w(g(t.$t("app.sendCaptcha")),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),d(J,{prop:"newPassword"},{default:p((()=>[d(H,{ref:"newPassword",modelValue:z.resetForm.newPassword,"onUpdate:modelValue":l[8]||(l[8]=e=>z.resetForm.newPassword=e),type:z.passwordType,placeholder:t.$t("app.newPassword"),tabindex:"3",autocomplete:"on"},{prefix:p((()=>[d(I,{name:"password"})])),suffix:p((()=>[d(I,{name:"password"===z.passwordType?"eye":"eye-open",onClick:A.showPassword},null,8,["name","onClick"])])),_:1},8,["modelValue","type","placeholder"])])),_:1})]),d(B,{gutter:15,style:{"padding-top":"20px"}},{default:p((()=>[d(S,{md:6},{default:p((()=>[d(O,{style:{width:"100%"},onClick:l[9]||(l[9]=e=>z.formType="login")},{default:p((()=>[w(g(t.$t("app.goLogin")),1)])),_:1})])),_:1}),d(S,{md:18},{default:p((()=>[d(O,{loading:z.loading,type:"primary",style:{width:"100%"},onClick:f(A.handleFind,["prevent"])},{default:p((()=>[w(g(t.$t("app.check")),1)])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["model","rules"]),[[u,"reset"==z.formType]])]),t.$store.state.settings.showCopyright?(n(),y(D,{key:0})):_("v-if",!0)])},x.__scopeId="data-v-5a0b2f12";export{x as default};
