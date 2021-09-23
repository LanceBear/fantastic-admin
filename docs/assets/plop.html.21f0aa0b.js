import{r as l,o as e,c as n,a as o,b as a,w as r,F as c,e as p}from"./app.02c1b848.js";const u={},t=o("h1",{id:"代码文件自动生成",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#代码文件自动生成","aria-hidden":"true"},"#"),p(" 代码文件自动生成")],-1),s=o("p",null,"开发过程中，避免不了手动去频繁创建页面、组件等文件，并且还要在文件里写一些必要的代码，是不是觉得很麻烦？现在你可以用更简洁的方式来处理这一切。",-1),d={class:"custom-container tip"},i=o("p",{class:"custom-container-title"},"说明",-1),h=p("该功能基于 "),m={href:"https://www.npmjs.com/package/plop",target:"_blank",rel:"noopener noreferrer"},g=p("plop"),f=p(" 实现，在扩展新的模式前，请先详细阅读 plop 文档。"),k=o("p",null,[p("框架默认提供了 5 种模式，通过 "),o("code",null,"pnpm run new"),p(" 指令可以自行选择。")],-1),w=o("li",null,[o("code",null,"page"),p(" 页面文件")],-1),b=o("li",null,[o("code",null,"component"),p(" 组件文件")],-1),x=o("li",null,[o("code",null,"store"),p(" Vuex 全局状态文件")],-1),B=o("li",null,[o("code",null,"mock"),p(" mock 文件")],-1),v=o("code",null,"module",-1),$=p(" 页面模块文件 "),j=o("p",null,"除了框架提供的 5 种模式，你还可以自定义新的模式，其原理就是通过预设模板，按照特定规则创建文件或者文件夹。",-1),y=o("p",null,[p("预设模板文件存放在 "),o("code",null,"./plop-templates/"),p(" 目录下，并在 "),o("code",null,"./plopfile.js"),p(" 文件里进行引用，你可以参考现有 5 种模式的目录结构进行创建新的模板。")],-1),L=o("h2",{id:"page",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#page","aria-hidden":"true"},"#"),p(" page")],-1),R=["src"],_=o("p",null,[p("page 模式下，只能在 "),o("code",null,"./src/views/"),p(" 目录下选择指定的文件夹进行生成，生成的文件中，部分关键位置会被替换掉，例如 "),o("code",null,"<page-header />"),p(" 中的 "),o("code",null,"title"),p(" 会按照你输入的中文名称替换，页面的 "),o("code",null,"name"),p(" 会根据当前文件目录和文件名自动生成，确保唯一。")],-1),C=o("h2",{id:"component",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#component","aria-hidden":"true"},"#"),p(" component")],-1),D=["src"],F=o("p",null,[p("component 模式可以选择生成的是全局组件还是局部组件，全局组件生成目录为 "),o("code",null,"./src/components/"),p(" ，局部组件则在 "),o("code",null,"./src/views/"),p(" 目录下选择指定的文件夹进行生成。")],-1),O=o("h2",{id:"store",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#store","aria-hidden":"true"},"#"),p(" store")],-1),U=["src"],V=o("p",null,[p("store 模式则会在 "),o("code",null,"./src/store/modules/"),p(" 目录下生成一个空模板")],-1),q=o("h2",{id:"mock",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#mock","aria-hidden":"true"},"#"),p(" mock")],-1),z=["src"],A=o("p",null,[p("mock 模式则会在 "),o("code",null,"./src/mock/"),p(" 目录下生成一个标准 CURD 的 mock 数据")],-1),E={id:"module",tabindex:"-1"},G=o("a",{class:"header-anchor",href:"#module","aria-hidden":"true"},"#",-1),H=p(" module "),I=["src"],J=o("p",null,"module 模式是一个标准模块模板，会在指定目录下生成模块文件夹，并且包含列表页、编辑（详情）页，以及相关局部组件。",-1),K=p("这块部分详细介绍请阅读《"),M=p("标准模块"),N=p("》。");u.render=function(p,u){const P=l("OutboundLink"),Q=l("Badge"),S=l("RouterLink");return e(),n(c,null,[t,s,o("div",d,[i,o("p",null,[h,o("a",m,[g,a(P)]),f])]),k,o("ul",null,[w,b,x,B,o("li",null,[v,$,a(Q,{type:"tip",text:"专业版",vertical:"top"})])]),j,y,L,o("p",null,[o("img",{src:p.$withBase("/plop-page.gif")},null,8,R)]),_,C,o("p",null,[o("img",{src:p.$withBase("/plop-component.gif")},null,8,D)]),F,O,o("p",null,[o("img",{src:p.$withBase("/plop-store.gif")},null,8,U)]),V,q,o("p",null,[o("img",{src:p.$withBase("/plop-mock.gif")},null,8,z)]),A,o("h2",E,[G,H,a(Q,{type:"tip",text:"专业版",vertical:"top"})]),o("p",null,[o("img",{src:p.$withBase("/plop-module.gif")},null,8,I)]),J,o("p",null,[K,a(S,{to:"/guide/plop-module.html"},{default:r((()=>[M])),_:1}),N])],64)};export{u as default};