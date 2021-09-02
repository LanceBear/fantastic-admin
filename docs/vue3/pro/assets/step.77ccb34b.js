
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as l}from"./index.95b2dfb2.js";import{_ as a}from"./index.29752973.js";import{x as t,y as o,r as d,o as i,z as u,i as s,w as m,L as n,K as r,h as c,I as p,F as f,A as _}from"./vendor.b5a7373b.js";const b={data:()=>({step:0,accounts:[{value:"admin@fantastic.admin",label:"admin@fantastic.admin"},{value:"test@fantastic.admin",label:"test@fantastic.admin"}],loading:!1,form:{payAccount:"admin@fantastic.admin",receiptAccount:"test@alipay.com",receiptType:1,name:"Hooray",price:"596.00",password:"123456"}}),methods:{submit(){this.loading=!0,setTimeout((()=>{this.step=2,this.loading=!1}),2e3)}}};t("data-v-444c6428");const y={key:0},v=_("div",{style:{width:"25px"}},"￥",-1),V=p("下一步"),h={key:1},x=p("提 交"),A=p("上一步"),w={key:2},k=p("再转一笔"),g=p("查看账单");o(),b.render=function(t,o,_,b,U,j){const C=e,z=d("el-step"),T=d("el-steps"),I=d("el-option"),F=d("el-select"),H=d("el-form-item"),K=d("el-input"),L=d("el-button"),q=d("el-divider"),B=l,D=d("el-form"),E=d("el-col"),G=d("el-row"),J=a;return i(),u("div",null,[s(C,{title:"分步表单",content:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"}),s(J,null,{default:m((()=>[s(G,{type:"flex",justify:"center"},{default:m((()=>[s(E,{md:12,sm:18},{default:m((()=>[s(T,{active:U.step,"finish-status":"success","align-center":"",style:{margin:"20px 0 40px"}},{default:m((()=>[s(z,{title:"填写转账信息"}),s(z,{title:"确认转账信息"}),s(z,{title:"完成"})])),_:1},8,["active"]),s(D,{model:U.form,size:"small","label-width":"100px"},{default:m((()=>[0==U.step?(i(),u("div",y,[s(H,{label:"付款账户"},{default:m((()=>[s(F,{modelValue:U.form.payAccount,"onUpdate:modelValue":o[0]||(o[0]=e=>U.form.payAccount=e),placeholder:"请选择付款账户"},{default:m((()=>[(i(!0),u(n,null,r(U.accounts,(e=>(i(),c(I,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(H,{label:"收款账户"},{default:m((()=>[s(K,{modelValue:U.form.receiptAccount,"onUpdate:modelValue":o[2]||(o[2]=e=>U.form.receiptAccount=e),placeholder:"请输入内容",class:"input-with-select"},{prepend:m((()=>[s(F,{modelValue:U.form.receiptType,"onUpdate:modelValue":o[1]||(o[1]=e=>U.form.receiptType=e),placeholder:"请选择",style:{width:"100px"}},{default:m((()=>[s(I,{label:"支付宝",value:1}),s(I,{label:"微信",value:2})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),s(H,{label:"收款人姓名"},{default:m((()=>[s(K,{modelValue:U.form.name,"onUpdate:modelValue":o[3]||(o[3]=e=>U.form.name=e)},null,8,["modelValue"])])),_:1}),s(H,{label:"转账金额"},{default:m((()=>[s(K,{modelValue:U.form.price,"onUpdate:modelValue":o[4]||(o[4]=e=>U.form.price=e)},{prefix:m((()=>[v])),_:1},8,["modelValue"])])),_:1}),s(H,null,{default:m((()=>[s(L,{type:"primary",onClick:o[5]||(o[5]=e=>U.step=1)},{default:m((()=>[V])),_:1})])),_:1})])):1==U.step?(i(),u("div",h,[s(H,{label:"付款账户"},{default:m((()=>[p(f(U.form.payAccount),1)])),_:1}),s(H,{label:"收款账户"},{default:m((()=>[p(f(U.form.receiptAccount),1)])),_:1}),s(H,{label:"收款人姓名"},{default:m((()=>[p(f(U.form.name),1)])),_:1}),s(H,{label:"转账金额"},{default:m((()=>[p(f(U.form.price),1)])),_:1}),s(q),s(H,{label:"支付密码"},{default:m((()=>[s(K,{modelValue:U.form.password,"onUpdate:modelValue":o[6]||(o[6]=e=>U.form.password=e),type:"password"},null,8,["modelValue"])])),_:1}),s(H,null,{default:m((()=>[s(L,{type:"primary",loading:U.loading,onClick:j.submit},{default:m((()=>[x])),_:1},8,["loading","onClick"]),s(L,{onClick:o[7]||(o[7]=e=>U.step=0)},{default:m((()=>[A])),_:1})])),_:1})])):(i(),u("div",w,[s(B,{type:"success",title:"交易成功",desc:"预计两小时内到账"},{extra:m((()=>[s(H,{label:"付款账户"},{default:m((()=>[p(f(U.form.payAccount),1)])),_:1}),s(H,{label:"收款账户"},{default:m((()=>[p(f(U.form.receiptAccount),1)])),_:1}),s(H,{label:"收款人姓名"},{default:m((()=>[p(f(U.form.name),1)])),_:1}),s(H,{label:"转账金额"},{default:m((()=>[p(f(U.form.price),1)])),_:1})])),default:m((()=>[s(L,{type:"primary",size:"small",onClick:o[8]||(o[8]=e=>U.step=0)},{default:m((()=>[k])),_:1}),s(L,{size:"small"},{default:m((()=>[g])),_:1})])),_:1})]))])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])},b.__scopeId="data-v-444c6428";export{b as default};