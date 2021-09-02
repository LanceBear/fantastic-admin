import{r as e,o as d,c as a,a as c,b as o,w as l,F as u,d as n,e as r}from"./app.7dd3f21c.js";const h={},i=n('<h1 id="从-vue2-版本迁移" tabindex="-1"><a class="header-anchor" href="#从-vue2-版本迁移" aria-hidden="true">#</a> 从 Vue2 版本迁移</h1><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>首先你需要准备一份 <code>Vue3版本</code> 的模版源码，并确保能在本地正常启动运行。</p><p>迁移的整个过程是将 <code>Vue2版本</code> 的项目环境，通过拷贝文件、修改代码的方式，一步步将 <code>Vue3版本</code> 的项目环境快速构建起来，所以不建议使用 <code>Vue3版本</code> 的演示源码做为迁移目标。</p><h2 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h2><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h3><p><code>Vue2版本</code> 和 <code>Vue3版本</code> 提供了相同的环境配置文件，但仅限于文件名相同，文件内的配置参数略有变化。例如从 <code>VUE_APP_API_ROOT</code> 变更为 <code>VITE_APP_API_BASEURL</code> ，在迁移过程中，需特别注意，建议可将原有配置的变量逐一覆盖到 <code>Vue3版本</code> 的环境配置文件中。</p><p>如果在 <code>Vue2版本</code> 中自定义了一些环境变量，注意在迁移的时候，需要将 <code>VUE_APP_</code> 开通的变量替换为 <code>VITE_</code> 开头，并在项目中使用 <code>p<wbr>rocess.env.VUE_APP_[xxx]</code> 的地方改写为 <code>i<wbr>mport.meta.env.VITE_[xxx]</code> 。</p><p>另，<code>Vue3版本</code> 目前不支持 CDN 开启。</p><h3 id="框架配置" tabindex="-1"><a class="header-anchor" href="#框架配置" aria-hidden="true">#</a> 框架配置</h3><p>框架配置除了布局相关的配置外，并无太大变化，建议逐一对照修改。</p>',11),t=r("至于布局相关的配置，"),s=c("code",null,"Vue2版本",-1),p=r(" 中是通过 "),V=c("code",null,"showHeader",-1),x=r(" 的开启或关闭切换头部导航布局和侧边栏布局，另外侧边栏布局还需要动态调整路由数据结构才可以实现双侧边栏布局和单侧边栏布局，而在 "),f=c("code",null,"Vue3版本",-1),_=r(" 中，统一使用 "),b=c("code",null,"menuMode",-1),m=r(" 这一参数来控制导航栏的模式，同时专业版还另外提供了 2 种模式，具体可阅读《"),A=r("布局 - 导航栏模式"),E=r("》。"),P=c("h3",{id:"主题",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#主题","aria-hidden":"true"},"#"),r(" 主题")],-1),g=c("code",null,"Vue3版本",-1),k=r(" 的专业版将原本把所有主题放在一个文件里，拆分成了多个主题独立文件，详细可阅读《"),v=r("主题"),F=r("》。"),R=n('<p>如果有自定义新增主题，也需要按照新的自定义主题的方式去修改。</p><p>另，主题里的配置参数名无变化。</p><h3 id="全局资源" tabindex="-1"><a class="header-anchor" href="#全局资源" aria-hidden="true">#</a> 全局资源</h3><p>全局资源目录结构与 <code>Vue2版本</code> 保持一致，迁移可直接复制并覆盖。</p><p>框架默认提供的全局组件有一定程度的优化和扩充，迁移过程中，请勿直接将全局组件目录下的文件直接覆盖，可找出自定义新增的全局组件拷贝到 <code>Vue3版本</code> 项目中，这样不会影响到框架默认提供的全局组件。</p><h3 id="与服务端交互" tabindex="-1"><a class="header-anchor" href="#与服务端交互" aria-hidden="true">#</a> 与服务端交互</h3><p>接口请求即 <code>./src/api/index.js</code> 文件，由于 <code>baseURL</code> 和跨域代理搭配使用代码耦合较高，请勿直接覆盖文件，建议可以只复制拦截器部分代码进行替换。</p><p>跨域开启本地代理仅需要在 <code>.env.development</code> 文件里 <code>VITE_OPEN_PROXY = true</code> 开启代理即可。</p>',8),B=r("Mock 部分变动较大，在 "),I=c("code",null,"Vue2版本",-1),j=r(" 里提供了 2 种方案，并且 mock 数据的配置也不一样，而在 "),T=c("code",null,"Vue3版本",-1),U=r(" 中，只需要配置一份 mock 数据，就可以同时实现原有 2 种方案的优点，唯一的缺点就是如果在 "),w=c("code",null,"Vue2版本",-1),C=r(" 的项目中如果使用了 mock ，无法直接将 mock 文件拷贝到 "),O=c("code",null,"Vue3版本",-1),L=r(" 项目中，因为数据结构和使用方式均有调整，具体可阅读《"),M=r("与服务端交互 - Mock"),N=r("》。"),y=c("h3",{id:"路由",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#路由","aria-hidden":"true"},"#"),r(" 路由")],-1),D=c("p",null,[c("code",null,"Vue3版本"),r(" 的路由配置项是在 "),c("code",null,"Vue2版本"),r(" 上进行了扩充，也就意味着路由文件可直接拷贝到 "),c("code",null,"Vue3版本"),r(" 项目中。")],-1),H=r("另外在 "),S=c("code",null,"Vue2版本",-1),X=r(" 的框架配置里提供了 "),Y=c("code",null,"enableFlatRoutes",-1),q=r(" 这项配置，如果原本就是开启状态，那无需注意，如果是未开启状态，那需要注意的是，在 "),z=c("code",null,"Vue3版本",-1),G=r(" 中多级路由会强制转为二级路由，可以理解为强制开启了 "),J=c("code",null,"enableFlatRoutes: true",-1),K=r(" 设置，如果你对这部分还不了解，可阅读《"),Q=r("路由 - 基本配置 - 多级路由"),W=r("》。"),Z=c("h3",{id:"页面缓存",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#页面缓存","aria-hidden":"true"},"#"),r(" 页面缓存")],-1),$=c("code",null,"Vue3版本",-1),ee=r(" 中对页面缓存提供了更加智能的方式，从而无需像 "),de=c("code",null,"Vue2版本",-1),ae=r(" 中在页面文件里手动添加缓存相关代码，只需在路由的配置项里设置 "),ce=c("code",null,"cache",-1),oe=r(" 以及 "),le=c("code",null,"noCache",-1),ue=r(" 参数即可，具体可阅读《"),ne=r("页面缓存"),re=r("》。"),he=c("h3",{id:"国际化",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#国际化","aria-hidden":"true"},"#"),r(" 国际化")],-1),ie=n("国际化的入口文件有变化，从 <code>Vue2版本</code> 的 <code>./src/lang/index.js</code> 变为 <code>Vue3版本</code> 的 <code>./src/locales/index.js</code> ，请比对后修改，同时语言包的目录也从 <code>./src/lang/packages/</code> 变为 <code>./src/locales/lang/</code> ，另外语言包的格式为 <code>.json</code> 文件，具体可阅读《",15),te=r("国际化"),se=r("》。"),pe=c("h2",{id:"最后",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#"),r(" 最后")],-1),Ve=c("p",null,"本篇迁移文档仅对整体做简单说明，迁移项目毕竟是个庞大工程，过程中难免会出现各种无法预测的问题，建议可以加讨论群自由讨论寻求帮助。",-1);h.render=function(n,r){const h=e("RouterLink");return d(),a(u,null,[i,c("p",null,[t,s,p,V,x,f,_,b,m,o(h,{to:"/guide/layout.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E6%A8%A1%E5%BC%8F"},{default:l((()=>[A])),_:1}),E]),P,c("p",null,[g,k,o(h,{to:"/guide/theme.html"},{default:l((()=>[v])),_:1}),F]),R,c("p",null,[B,I,j,T,U,w,C,O,L,o(h,{to:"/guide/axios.html#mock"},{default:l((()=>[M])),_:1}),N]),y,D,c("p",null,[H,S,X,Y,q,z,G,J,K,o(h,{to:"/guide/router.html#%E5%A4%9A%E7%BA%A7%E8%B7%AF%E7%94%B1"},{default:l((()=>[Q])),_:1}),W]),Z,c("p",null,[$,ee,de,ae,ce,oe,le,ue,o(h,{to:"/guide/keep-alive.html"},{default:l((()=>[ne])),_:1}),re]),he,c("p",null,[ie,o(h,{to:"/guide/i18n.html"},{default:l((()=>[te])),_:1}),se]),pe,Ve],64)};export{h as default};
