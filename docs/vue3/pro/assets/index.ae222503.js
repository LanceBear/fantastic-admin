
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as e,I as t,h as s,$ as i,r as l,l as a,J as r,s as n,n as o,m as p,Z as c,K as u,Q as d,L as h,M as g,S as f}from"./vendor.7707186e.js";e("data-v-e069d77c");const v={class:"upload-container"},m=u("div",{class:"image-slot"},[u("i",{class:"el-icon-plus"})],-1),y={key:1,class:"image"},w={class:"mask"},$={class:"actions"},x=[u("i",{class:"el-icon-zoom-in"},null,-1)],b=["onClick"],k=[u("i",{class:"el-icon-delete"},null,-1)],V={key:0,class:"el-upload__tip"},j={style:{display:"inline-block"}};t();const _={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:t}){const _=e,{proxy:z}=s(),S=i({imageViewerVisible:!1,progress:{preview:"",percent:0}});function C(){S.value.imageViewerVisible=!1}function M(){t("update:url","")}function O(e){const t=e.name.split("."),s=t[t.length-1],i=_.ext.indexOf(s)>=0,l=e.size/1024/1024<_.size;return i||z.$message.error(`上传图片只支持 ${_.ext.join(" / ")} 格式！`),l||z.$message.error(`上传图片大小不能超过 ${_.size}MB！`),i&&l&&(S.value.progress.preview=URL.createObjectURL(e)),i&&l}function B(e){S.value.progress.percent=~~e.percent,100==S.value.progress.percent&&setTimeout((()=>{S.value.progress.preview="",S.value.progress.percent=0}),1e3)}function L(e){t("on-success",e)}return(t,s)=>{const i=l("el-image"),_=l("el-progress"),z=l("el-upload"),N=l("el-alert"),I=l("el-image-viewer");return a(),r("div",v,[n(z,{"show-file-list":!1,headers:e.headers,action:e.action,data:S.value,name:e.name,"before-upload":O,"on-progress":B,"on-success":L,drag:""},{default:o((()=>[""===e.url?(a(),p(i,{key:0,src:""===e.url?e.placeholder:e.url,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},{error:o((()=>[m])),_:1},8,["src","style"])):(a(),r("div",y,[n(i,{src:e.url,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),u("div",w,[u("div",$,[u("span",{title:"预览",onClick:s[0]||(s[0]=d((e=>t.imageViewerVisible=!0),["stop"]))},x),u("span",{title:"移除",onClick:d(M,["stop"])},k,8,b)])])])),h(u("div",{class:"progress",style:c(`width:${e.width}px;height:${e.height}px;`)},[n(i,{src:S.value.progress.preview,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),n(_,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:S.value.progress.percent},null,8,["width","percentage"])],4),[[g,S.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),e.notip?f("v-if",!0):(a(),r("div",V,[u("div",j,[n(N,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，且图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),S.value.imageViewerVisible?(a(),p(I,{key:1,"url-list":[e.url],onClose:C},null,8,["url-list"])):f("v-if",!0)])}},__scopeId:"data-v-e069d77c"};export{_};