import{r as a,o as n,c as s,a as e,b as r,F as t,d as p,e as o}from"./app.51c93988.js";const c={},i=p('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><p>默认提供开发环境、测试环境和生产环境三套配置，分别对应根目录下 <code>.env.development</code> 、<code>.env.test</code> 和 <code>.env.production</code> 文件。</p><p>如果要新增一个环境配置，或者环境变量，请保证原配置文件里默认提供的环境变量名不变，避免因修改环境变量名导致运行或打包错误。</p>',4),l=o("扩展阅读：《"),d={href:"https://cli.vuejs.org/zh/guide/mode-and-env.html",target:"_blank",rel:"noopener noreferrer"},u=o("Vue CLI - 环境变量和模式"),h=o("》"),b=p('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>环境配置修改后，需要重新运行才会生效</p></div><h2 id="框架配置" tabindex="-1"><a class="header-anchor" href="#框架配置" aria-hidden="true">#</a> 框架配置</h2><p>框架所有可选的配置信息都在 <code>./src/settings.js</code> 文件里统一存放。例如你想要修改布局为定宽居中布局，则修改并设置：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> globalSettings <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t<span class="token operator">...</span>\n\tlayout<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>\n\t<span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',4);c.render=function(p,o){const c=a("OutboundLink");return n(),s(t,null,[i,e("p",null,[l,e("a",d,[u,r(c)]),h]),b],64)};export{c as default};