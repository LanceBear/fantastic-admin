
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1ee7394a.js";import{_ as s}from"./index.de27ff35.js";import{_ as t}from"./index.e2b18078.js";import{t as i,u as a,r as l,o,k as n,F as r,G as c,c as d,D as p,s as u,l as h,w as m,v as g,B as f,n as y,q as x,A as v}from"./vendor.e2e92bee.js";const b={name:"ImagesUpload",props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],data:()=>({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}}),methods:{preview(e){this.dialogImageIndex=e,this.imageViewerVisible=!0},remove(e){let s=this.url;s.splice(e,1),this.$emit("update:url",s)},move(e,s){let t=this.url;"left"==s&&0!=e&&(t[e]=t.splice(e-1,1,t[e])[0]),"right"==s&&e!=t.length-1&&(t[e]=t.splice(e+1,1,t[e])[0]),this.$emit("update:url",t)},beforeUpload(e){const s=e.name.split("."),t=s[s.length-1],i=this.ext.indexOf(t)>=0,a=e.size/1024/1024<this.size;return i||this.$message.error(`上传图片只支持 ${this.ext.join(" / ")} 格式！`),a||this.$message.error(`上传图片大小不能超过 ${this.size}MB！`),i&&a&&(this.progress.preview=URL.createObjectURL(e)),i&&a},onProgress(e){this.progress.percent=~~e.percent,100==this.progress.percent&&(this.progress.preview="",this.progress.percent=0)},onSuccess(e){this.$emit("on-success",e)}}};i("data-v-c87dc592");const w={class:"upload-container"},$={class:"mask"},k={class:"actions"},S=["onClick"],_=[h("i",{class:"el-icon-zoom-in"},null,-1)],j=["onClick"],z=[h("i",{class:"el-icon-delete"},null,-1)],O=["onClick"],U=[h("i",{class:"el-icon-back"},null,-1)],I=["onClick"],C=[h("i",{class:"el-icon-right"},null,-1)],V=[h("i",{class:"el-icon-plus"},null,-1)],B={key:0,class:"el-upload__tip"},N={style:{display:"inline-block"}};a(),b.render=function(e,s,t,i,a,v){const b=l("el-image"),A=l("el-progress"),E=l("el-upload"),M=l("el-alert"),T=l("el-image-viewer");return o(),n("div",w,[(o(!0),n(r,null,c(t.url,((e,s)=>(o(),n("div",{key:s,class:"images"},[s<t.max?(o(),d(b,{key:0,src:e,style:p(`width:${t.width}px;height:${t.height}px;`),fit:"cover"},null,8,["src","style"])):u("v-if",!0),h("div",$,[h("div",k,[h("span",{title:"预览",onClick:e=>v.preview(s)},_,8,S),h("span",{title:"移除",onClick:e=>v.remove(s)},z,8,j),m(h("span",{title:"左移",class:f({disabled:0==s}),onClick:e=>v.move(s,"left")},U,10,O),[[g,t.url.length>1]]),m(h("span",{title:"右移",class:f({disabled:s==t.url.length-1}),onClick:e=>v.move(s,"right")},C,10,I),[[g,t.url.length>1]])])])])))),128)),m(y(E,{"show-file-list":!1,headers:t.headers,action:t.action,data:t.data,name:t.name,"before-upload":v.beforeUpload,"on-progress":v.onProgress,"on-success":v.onSuccess,drag:"",class:"images-upload"},{default:x((()=>[h("div",{class:"image-slot",style:p(`width:${t.width}px;height:${t.height}px;`)},V,4),m(h("div",{class:"progress",style:p(`width:${t.width}px;height:${t.height}px;`)},[y(b,{src:a.progress.preview,style:p(`width:${t.width}px;height:${t.height}px;`),fit:"fill"},null,8,["src","style"]),y(A,{type:"circle",width:.8*Math.min(t.width,t.height),percentage:a.progress.percent},null,8,["width","percentage"])],4),[[g,a.progress.percent]])])),_:1},8,["headers","action","data","name","before-upload","on-progress","on-success"]),[[g,t.url.length<t.max]]),t.notip?u("v-if",!0):(o(),n("div",B,[h("div",N,[y(M,{title:`上传图片支持 ${t.ext.join(" / ")} 格式，单张图片大小不超过 ${t.size}MB，建议图片尺寸为 ${t.width}*${t.height}，且图片数量不超过 ${t.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),a.imageViewerVisible?(o(),d(T,{key:1,"url-list":t.url,"initial-index":a.dialogImageIndex,onClose:s[0]||(s[0]=()=>{a.imageViewerVisible=!1})},null,8,["url-list","initial-index"])):u("v-if",!0)])},b.__scopeId="data-v-c87dc592";const A={name:"FileUpload",props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],methods:{beforeUpload(e){const s=e.name.split("."),t=s[s.length-1],i=this.ext.indexOf(t)>=0,a=e.size/1024/1024<this.size;return i||this.$message.error(`上传文件只支持 ${this.ext.join(" / ")} 格式！`),a||this.$message.error(`上传文件大小不能超过 ${this.size}MB！`),i&&a},onExceed(){this.$message.warning("文件上传超过限制")},onSuccess(e,s){this.$emit("on-success",e,s)}}};i("data-v-54f82d7e");const E=h("div",{class:"slot"},[h("i",{class:"el-icon-upload"}),h("div",{class:"el-upload__text"},[v("将文件拖到此处，或"),h("em",null,"点击上传")])],-1),M={key:0,class:"el-upload__tip"},T={style:{display:"inline-block"}};a(),A.render=function(e,s,t,i,a,r){const c=l("el-alert"),p=l("el-upload");return o(),d(p,{action:t.action,data:t.data,name:t.name,"before-upload":r.beforeUpload,"on-exceed":r.onExceed,"on-success":r.onSuccess,"file-list":t.files,limit:t.max,drag:""},{tip:x((()=>[t.notip?u("v-if",!0):(o(),n("div",M,[h("div",T,[y(c,{title:`上传文件支持 ${t.ext.join(" / ")} 格式，单个文件大小不超过 ${t.size}MB，且文件数量不超过 ${t.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:x((()=>[E])),_:1},8,["action","data","name","before-upload","on-exceed","on-success","file-list","limit"])},A.__scopeId="data-v-54f82d7e";const q={data:()=>({image:"",images:["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,s){this.files.push({name:s.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(this.$message.warning(e.error),this.files.pop())}))}}};q.render=function(i,a,l,r,c,d){const p=e,u=s,h=t,m=b,g=A;return o(),n("div",null,[y(p,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),y(h,{title:"单图上传"},{default:x((()=>[y(u,{url:c.image,"onUpdate:url":a[0]||(a[0]=e=>c.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),y(h,{title:"多图上传（默认最多3张）"},{default:x((()=>[y(m,{url:c.images,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),y(h,{title:"文件上传（默认最多3个）"},{default:x((()=>[y(g,{files:c.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])};export{q as default};
