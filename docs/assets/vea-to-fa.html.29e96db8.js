import{r as e,o as t,c as a,a as d,b as n,w as i,F as l,e as r,d as s}from"./app.7dd3f21c.js";const c={},h=d("h1",{id:"从-vue-element-admin-迁移",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#从-vue-element-admin-迁移","aria-hidden":"true"},"#"),r(" 从 vue-element-admin 迁移")],-1),o=d("h2",{id:"序",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#序","aria-hidden":"true"},"#"),r(" 序")],-1),u={href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"},m=r("vue-element-admin"),g=r(" 做为一款知名度相当高的后台框架，是很多刚接触后台开发的开发人员首选框架，但由于其作者似乎并不太关注这款作品，并且也无任何 Vue3 版本的相关动向，导致在 Github 仓库里堆积了近千个未关闭的 issues 。"),x=s('<p>开发者在使用过程中遇到的很多问题，在其社区里提供的解决方案都是需要修改框架源码，这也让市面上出现了很多基于 vue-element-admin 的魔改版本。但大部分也只是小修小改，如果要修改到框架本身的设计，都是牵一发而动全身的。这也是我早期使用 vue-element-admin 开发后的一些感触，于是才下定决定自己写一套可高度配置化的后台框架。</p><p>虽然上面说的已经是我几年前的经历了，但相信现在依旧有很多开发者还在使用 vue-element-admin ，有的想找替代产品，但又嫌迁移工作太麻烦，毕竟迁移工作的前提是要了解两套框架的差异，才可以确保迁移工作的正常进行。</p><p>那么这篇文章，将会尽可能详细的介绍 vue-element-admin 和 fantastic-admin 在使用上的差异，给还在犹豫是否要替换 vue-element-admin 的小伙伴一点点参考。</p><p>因为 Fantastic-admin 已经提供了 <code>Vue3版本</code> ，所以本篇文章会以 <code>Vue3版本</code> 为最终迁移目标。当然 <code>Vue2版本</code> 在大部分情况下也适用。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>首先你需要准备一份 <code>Vue3版本</code> 的模版源码，并确保能在本地正常启动运行。</p><p>其次建议你先完整阅读一遍 Fantastic-admin 的文档后，对其有个大致的了解后，再阅读下面的差异。</p><h2 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h2><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h3><p>得益于 vue-element-admin 的功能简单，环境配置里只能设置 <code>VUE_APP_BASE_API</code> ，在 Fantastic-admin 里对应的是 <code>VITE_APP_API_BASEURL</code> 这个参数。</p>',10),p=r("当然在 Fantastic-admin 还提供了页面标题、调试工具、构建压缩等一系列的配置，详细可阅读《"),f=r("配置 - 环境配置"),b=r("》。"),v=s('<h3 id="框架配置" tabindex="-1"><a class="header-anchor" href="#框架配置" aria-hidden="true">#</a> 框架配置</h3><p>vue-element-admin 一共只提供了 6 个配置项（<code>title</code> <code>showSettings</code> <code>tagsView</code> <code>fixedHeader</code> <code>sidebarLogo</code> <code>errorLog</code>），并且大部分都是界面布局上的设置，建议这部分可直接参考 Fantastic-admin 的框架配置文件，我们提供了更丰富的界面布局设置。</p><h3 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h3>',3),y=r("很遗憾，vue-element-admin 没有提供主题配色的功能，而 Fantastic-admin 里可以自定义主题配色方案，详细可阅读《"),F=r("主题"),E=r("》。"),B=d("h3",{id:"全局资源",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#全局资源","aria-hidden":"true"},"#"),r(" 全局资源")],-1),A=d("h4",{id:"svg-图标",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#svg-图标","aria-hidden":"true"},"#"),r(" SVG 图标")],-1),_=r("vue-element-admin 将 svg 文件存放在 "),S=d("code",null,"./src/icons/svg/",-1),V=r(" 目录下，这部分的 svg 文件可直接拷贝到 Fantastic-admin 的 "),P=d("code",null,"./src/assets/icon/",-1),C=r(" 目录下，并且我们还提供了 "),w=d("code",null,"<svg-icon />",-1),L=r(" 组件方便直接使用，详细可阅读《"),k=r("全局资源 - SVG图标"),D=r("》。"),G=d("h4",{id:"图片",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#图片","aria-hidden":"true"},"#"),r(" 图片")],-1),j=d("p",null,[r("vue-element-admin 将图片存放在 "),d("code",null,"./src/assets/"),r(" 目录下，这部分的图片资源可直接拷贝到 Fantastic-admin 的 "),d("code",null,"./src/assets/images/"),r(" 目录下即可。")],-1),I=d("h4",{id:"精灵图",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#精灵图","aria-hidden":"true"},"#"),r(" 精灵图")],-1),T=r("这是 Fantastic-admin 单独提供的特性，如果在项目中使用了较多尺寸不大的素材图，你可以考虑使用精灵图的方式将多张小图合并成一张大图，通过 css 背景图定位的方式去展示使用，详细可阅读《"),M=r("全局资源 - 精灵图"),O=r("》。"),R=d("h4",{id:"样式",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#样式","aria-hidden":"true"},"#"),r(" 样式")],-1),U=d("p",null,[r("vue-element-admin 将样式存放在 "),d("code",null,"./src/styles/"),r(" 目录下，这个目录存放的基本是和框架相关的样式，迁移过程中基本是无需关注的，你只需要关注你新增的样式文件，将这些文件拷贝到 Fantastic-admin 的 "),d("code",null,"./src/assets/styles/"),r(" 目录下，并在相关使用到的地方引入即可。")],-1),q=r("另外 Fantastic-admin 还提供了一个 "),H=d("code",null,"./src/assets/styles/resources/",-1),J=r(" 目录用来单独存放 SCSS 资源，这个目录下的文件会被框架自动引入，可在页面上直接使用，详细可阅读《"),z=r("全局资源 - 样式"),K=r("》。"),N=d("h4",{id:"组件",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#组件","aria-hidden":"true"},"#"),r(" 组件")],-1),Q=r("vue-element-admin 将组件存放在 "),W=d("code",null,"./src/components/",-1),X=r(" 目录下，并且使用时需要单独注册，而 Fantastic-admin 提供了全局组件自动注册的特性，你只需将全局组件同样放到 Fantastic-admin 的 "),Y=d("code",null,"./src/components/",-1),Z=r(" 目录下即可在页面中直接使用，详细可阅读《"),$=r("全局资源 - 组件"),ee=r("》。"),te=s('<h3 id="与服务端交互" tabindex="-1"><a class="header-anchor" href="#与服务端交互" aria-hidden="true">#</a> 与服务端交互</h3><p>vue-element-admin 的 <code>./src/utils/request.js</code> 对应了 Fantastic-admin 的 <code>./src/api/index.js</code> 文件，它们都对 axios 进行了封装，便于统一处理 POST 和 GET 请求，你可以根据原有的配置逐行迁移代码。</p><p>另外在 vue-element-admin 的 <code>./src/api/</code> 目录下存放了以模块为维度拆分的独立文件，方便统一管理不同模块的所有接口请求，这在大型项目中是很有必要的，而 Fantastic-admin 并未提供特定目录，如果你有这个需求，可以自行建立一个文件夹用来管理这部分文件。</p><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>Fantastic-admin 借鉴了 vue-element-admin 通过路由生成导航栏的思路，都是在路由里增加导航配置参数，只不过 Fantastic-admin 将额外的导航配置参数统一都放在的 <code>meta</code> 对象中。下面这个对比表格能帮助里快速了解 vue-element-admin 和 Fantastic-admin 对应的配置项。</p><table><thead><tr><th style="text-align:center;">vue-element-admin</th><th style="text-align:center;">Fantastic-admin</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">hidden</td><td style="text-align:center;">meta.sidebar</td><td style="text-align:left;">是否在导航栏里显示</td></tr><tr><td style="text-align:center;">alwaysShow</td><td style="text-align:center;">/</td><td style="text-align:left;">并未提供该设置，因为在 Fantastic-admin 里自动处理的</td></tr><tr><td style="text-align:center;">meta.roles</td><td style="text-align:center;">meta.auth</td><td style="text-align:left;">Fantastic-admin 可兼容 vue-element-admin 的权限设计模式，并提供了更高级的权限模式</td></tr><tr><td style="text-align:center;">meta.title</td><td style="text-align:center;">meta.title</td><td style="text-align:left;">导航标题</td></tr><tr><td style="text-align:center;">meta.icon</td><td style="text-align:center;">meta.icon</td><td style="text-align:left;">导航图标</td></tr><tr><td style="text-align:center;">meta.noCache</td><td style="text-align:center;">meta.cache</td><td style="text-align:left;">vue-element-admin 的 noCache 与 Fantastic-admin 的 cache 都是对页面缓存的配置，但背后的逻辑和使用方式却完全不一样</td></tr><tr><td style="text-align:center;">meta.breadcrumb</td><td style="text-align:center;">meta.breadcrumb</td><td style="text-align:left;">是否在面包屑导航里显示</td></tr><tr><td style="text-align:center;">meta.affix</td><td style="text-align:center;">/</td><td style="text-align:left;">标签页是否固定，在 Fantastic-admin 中，标签页是可以通过右键标签页手动设置固定，而非在路由配置里固定写死</td></tr><tr><td style="text-align:center;">meta.activeMenu</td><td style="text-align:center;">meta.activeMenu</td><td style="text-align:left;">高亮指定导航</td></tr></tbody></table>',6),ae=r("除了以上 vue-element-admin 提供的配置项之外，Fantastic-admin 还提供了很多额外的配置项，详细可阅读《"),de=r("路由 - 导航配置"),ne=r("》。"),ie=d("h3",{id:"页面缓存",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#页面缓存","aria-hidden":"true"},"#"),r(" 页面缓存")],-1),le=d("p",null,"在 Fantastic-admin 里你可以理解只有二级路由缓存，因为我们提供了一个特性，不管路由配置多少层级，最终都会被处理成二级，但是可以放心，仅仅是路由被处理成二级，而导航和面包屑导航依旧是保持原有的层级结构展示。",-1),re=d("p",null,"这么做的目的也是为了彻底解决多级路由缓存的问题，相信你一定在 vue-element-admin 里遇到过这类问题，社区里的解决方案也五花八门，始终没有一个统一的解决方案。",-1),se=r("所以 Fantastic-admin 提供了一个一劳永逸的解决办法，详细可阅读《"),ce=r("页面缓存"),he=r("》。"),oe=d("h2",{id:"最后",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#"),r(" 最后")],-1),ue=d("p",null,"本篇迁移文档仅对整体做简单说明，迁移项目毕竟是个庞大工程，过程中难免会出现各种无法预测的问题，建议可以加讨论群自由讨论寻求帮助。",-1);c.render=function(r,s){const c=e("OutboundLink"),me=e("RouterLink");return t(),a(l,null,[h,o,d("p",null,[d("a",u,[m,n(c)]),g]),x,d("p",null,[p,n(me,{to:"/guide/configure.html#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE"},{default:i((()=>[f])),_:1}),b]),v,d("p",null,[y,n(me,{to:"/guide/theme.html"},{default:i((()=>[F])),_:1}),E]),B,A,d("p",null,[_,S,V,P,C,w,L,n(me,{to:"/guide/global-resources.html#svg-%E5%9B%BE%E6%A0%87"},{default:i((()=>[k])),_:1}),D]),G,j,I,d("p",null,[T,n(me,{to:"/guide/global-resources.html#%E7%B2%BE%E7%81%B5%E5%9B%BE"},{default:i((()=>[M])),_:1}),O]),R,U,d("p",null,[q,H,J,n(me,{to:"/guide/global-resources.html#%E6%A0%B7%E5%BC%8F"},{default:i((()=>[z])),_:1}),K]),N,d("p",null,[Q,W,X,Y,Z,n(me,{to:"/guide/global-resources.html#%E7%BB%84%E4%BB%B6"},{default:i((()=>[$])),_:1}),ee]),te,d("p",null,[ae,n(me,{to:"/guide/router.html#%E5%AF%BC%E8%88%AA%E9%85%8D%E7%BD%AE"},{default:i((()=>[de])),_:1}),ne]),ie,le,re,d("p",null,[se,n(me,{to:"/guide/keep-alive.html"},{default:i((()=>[ce])),_:1}),he]),oe,ue],64)};export{c as default};
