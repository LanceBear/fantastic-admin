import{r as n,o as s,c as a,a as t,b as e,w as l,F as o,d as c,e as i}from"./app.795883d8.js";const p={},d=c('<h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1><p>做好准备工作后，请在项目根目录下依次执行以下命令：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>\n<span class="token function">pnpm</span> <span class="token function">install</span>\n\n<span class="token comment"># 运行</span>\n<span class="token function">pnpm</span> run dev\n</code></pre></div><p>运行成功后，会自动访问页面，默认情况下，地址为 <code>http://localhost:9000</code></p>',4),u={class:"custom-container warning"},r=t("p",{class:"custom-container-title"},"注意",-1),h=t("p",null,[i("安装依赖时如果提示 husky 安装失败，请使用 "),t("code",null,"git init"),i(" 对项目进行初始化，然后重新安装依赖即可。")],-1),m=i("husky 需要项目有 git 环境才能正常安装，详细介绍请阅读《"),g=i("代码规范 - husky & lint-staged"),k=i("》。"),f=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"运行报错"),t("p",null,[i("如果运行提示「 'vite' 不是内部或外部命令，也不是可运行的程序或批处理文件 」，请删除根目录下 "),t("code",null,"./node_modules"),i(" 文件夹与 "),t("code",null,"pnpm-lock.yaml"),i(" 文件，重新安装依赖并运行。")])],-1);p.render=function(c,i){const p=n("RouterLink");return s(),a(o,null,[d,t("div",u,[r,h,t("p",null,[m,e(p,{to:"/guide/coding-standard.html#husky-lint-staged"},{default:l((()=>[g])),_:1}),k])]),f],64)};export{p as default};
