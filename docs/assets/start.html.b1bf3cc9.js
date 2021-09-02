import{r as n,o as a,c as s,a as e,b as t,w as l,F as c,d as r,e as o}from"./app.7dd3f21c.js";const i={},p=r('<h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1><p>阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。如果还没有源码，可以通过下面两种方式获取：</p><h2 id="基础版" tabindex="-1"><a class="header-anchor" href="#基础版" aria-hidden="true">#</a> 基础版</h2><div class="custom-container warning"><p class="custom-container-title">分支说明</p><ul><li><code>vue2</code> 演示源码，即在<strong>框架源码</strong>基础上提供各种特性展示，含有大量示例代码</li><li><code>template-vue2</code> 框架源码，不含示例代码，适合直接用于项目开发</li></ul></div>',4),u=o("手动下载 "),m=o("去 "),b={href:"https://gitee.com/hooray/fantastic-admin",target:"_blank",rel:"noopener noreferrer"},d=o("Gitee"),h=o(" 下载"),g=o("去 "),f={href:"https://github.com/hooray/fantastic-admin",target:"_blank",rel:"noopener noreferrer"},k=o("Github"),v=o(" 下载"),y=e("li",null,"git 克隆",-1),_=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 拉取演示源码"),o("\n"),e("span",{class:"token function"},"git"),o(" clone -b vue2 https://gitee.com/hooray/fantastic-admin.git\n"),e("span",{class:"token comment"},"# 拉取框架源码"),o("\n"),e("span",{class:"token function"},"git"),o(" clone -b template-vue2 https://gitee.com/hooray/fantastic-admin.git\n")])])],-1),x=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 拉取演示源码"),o("\n"),e("span",{class:"token function"},"git"),o(" clone -b vue2 https://github.com/hooray/fantastic-admin.git\n"),e("span",{class:"token comment"},"# 拉取框架源码"),o("\n"),e("span",{class:"token function"},"git"),o(" clone -b template-vue2 https://gitee.com/hooray/fantastic-admin.git\n")])])],-1),G=e("h2",{id:"专业版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#专业版","aria-hidden":"true"},"#"),o(" 专业版")],-1),j=o("去购买"),w=e("h2",{id:"运行",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行","aria-hidden":"true"},"#"),o(" 运行")],-1),z=o("本框架需要你本地安装 "),C={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},F=o("Node.js"),L=o(" 和 "),H={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},I=o("Git"),N=o(" ，同时我们强烈建议你安装并使用 "),O={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},R=o("Yarn"),Y=o(" 做为包管理工具。"),q=r('<p>做好准备工作后，依次执行下面的命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 克隆项目（如果本地已有源码，可跳过这步）</span>\n<span class="token comment"># 可选择从 github 或 gitee 克隆项目</span>\n<span class="token function">git</span> clone https://github.com/hooray/fantastic-admin.git\n<span class="token comment"># 或者</span>\n<span class="token function">git</span> clone https://gitee.com/hooray/fantastic-admin.git\n\n<span class="token comment"># 进入项目目录</span>\n<span class="token builtin class-name">cd</span> fantastic-admin\n<span class="token comment"># 专业版</span>\n<span class="token builtin class-name">cd</span> fantastic-admin-pro\n\n<span class="token comment"># 安装项目依赖（框架使用 yarn 进行依赖包的版本锁定，建议使用 yarn 进行安装）</span>\n<span class="token function">yarn</span>\n<span class="token comment"># 或者</span>\n<span class="token function">npm</span> <span class="token function">install</span>\n\n<span class="token comment"># 运行项目</span>\n<span class="token function">yarn</span> run serve\n<span class="token comment"># 或者</span>\n<span class="token function">npm</span> run serve\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>运行成功后，会自动访问页面，默认情况下，地址为 <code>http://localhost:8080</code></p>',3);i.render=function(r,o){const i=n("OutboundLink"),A=n("CodeGroupItem"),B=n("CodeGroup"),D=n("RouterLink");return a(),s(c,null,[p,e("ul",null,[e("li",null,[u,e("ul",null,[e("li",null,[m,e("a",b,[d,t(i)]),h]),e("li",null,[g,e("a",f,[k,t(i)]),v])])]),y]),t(B,null,{default:l((()=>[t(A,{title:"从 Gitee 克隆"},{default:l((()=>[_])),_:1}),t(A,{title:"从 Github 克隆"},{default:l((()=>[x])),_:1})])),_:1}),G,e("p",null,[t(D,{to:"/buy.html"},{default:l((()=>[j])),_:1})]),w,e("p",null,[z,e("a",C,[F,t(i)]),L,e("a",H,[I,t(i)]),N,e("a",O,[R,t(i)]),Y]),q],64)};export{i as default};
