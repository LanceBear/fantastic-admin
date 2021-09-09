import{d as n}from"./app.e9233e2f.js";const s={},a=n('<h1 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h1><div class="custom-container warning"><p class="custom-container-title">注意</p><p>专业版整体重构了主题的实现方式，阅读时请区分。</p></div><h2 id="基础版" tabindex="-1"><a class="header-anchor" href="#基础版" aria-hidden="true">#</a> 基础版</h2><p>基础版只提供一套主题，但可自行修改关键颜色变量，实现主题自定义，相关代码在 <code>./src/assets/styles/resources/variables.scss</code> 里。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 应用背景色</span>\n<span class="token property"><span class="token variable">$g-app-bg</span></span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n<span class="token comment">// 主区域背景色</span>\n<span class="token property"><span class="token variable">$g-main-bg</span></span><span class="token punctuation">:</span> #f5f7f9<span class="token punctuation">;</span>\n\n<span class="token comment">// 头部背景色</span>\n<span class="token property"><span class="token variable">$g-header-bg</span></span><span class="token punctuation">:</span> #736477<span class="token punctuation">;</span>\n<span class="token comment">// 头部导航文字颜色</span>\n<span class="token property"><span class="token variable">$g-header-menu-color</span></span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n<span class="token comment">// 头部导航选中颜色</span>\n<span class="token property"><span class="token variable">$g-header-menu-active-bg</span></span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$g-header-bg</span><span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 主侧边栏背景色</span>\n<span class="token property"><span class="token variable">$g-main-sidebar-bg</span></span><span class="token punctuation">:</span> #736477<span class="token punctuation">;</span>\n<span class="token comment">// 主侧边栏文字颜色</span>\n<span class="token property"><span class="token variable">$g-main-sidebar-menu-color</span></span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n<span class="token comment">// 主侧边栏菜单选中背景色</span>\n<span class="token property"><span class="token variable">$g-main-sidebar-menu-active-bg</span></span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$g-main-sidebar-bg</span><span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 次侧边栏背景色</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-bg</span></span><span class="token punctuation">:</span> #ddcdcd<span class="token punctuation">;</span>\n<span class="token comment">// 次侧边栏菜单文字颜色</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-menu-color</span></span><span class="token punctuation">:</span> #89768f<span class="token punctuation">;</span>\n<span class="token comment">// 次侧边栏菜单文字选中颜色</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-menu-active-color</span></span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$g-sub-sidebar-menu-color</span><span class="token punctuation">,</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 次侧边栏菜单选中背景色</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-menu-active-bg</span></span><span class="token punctuation">:</span> #b5a5a5<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>该文件里你还可对布局的宽高进行调整。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span>\n<span class="token property"><span class="token variable">$g-header-width</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token comment">// 头部高度</span>\n<span class="token property"><span class="token variable">$g-header-height</span></span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>\n<span class="token comment">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span>\n<span class="token property"><span class="token variable">$g-breadcrumb-height</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n<span class="token comment">// 侧边栏宽度</span>\n<span class="token property"><span class="token variable">$g-main-sidebar-width</span></span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-width</span></span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$g-sidebar-width</span></span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--real-sidebar-width<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="专业版" tabindex="-1"><a class="header-anchor" href="#专业版" aria-hidden="true">#</a> 专业版</h2><p>框架提供了 5 款主题，在配置文件中就可轻松切换。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * 主题，默认提供 5 款\n * default 默认\n * vue-cli Vue CLI 风格\n * gitee 码云风格\n * freshness 清新\n * elegant 素雅\n */</span>\ntheme<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，和基础版不同的是，专业版主题相关代码在 <code>./src/assets/styles/resources/themes.scss</code> 里。由于代码比较多，下面只截取部分。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$themes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token property">default</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n        <span class="token comment">// 主区域背景色</span>\n        <span class="token property">g-main-bg</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">,</span>\n        <span class="token comment">// 【头部】</span>\n        <span class="token comment">// 头部背景色</span>\n        <span class="token property">g-header-bg</span><span class="token punctuation">:</span> #222b45<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字颜色</span>\n        <span class="token property">g-header-menu-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字选中颜色</span>\n        <span class="token property">g-header-menu-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航选中背景色</span>\n        <span class="token property">g-header-menu-active-bg</span><span class="token punctuation">:</span> #334067<span class="token punctuation">,</span>\n        ...\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token property">vue-cli</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n        <span class="token comment">// 主区域背景色</span>\n        <span class="token property">g-main-bg</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">,</span>\n        <span class="token comment">// 【头部】</span>\n        <span class="token comment">// 头部背景色</span>\n        <span class="token property">g-header-bg</span><span class="token punctuation">:</span> #1d2935<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字颜色</span>\n        <span class="token property">g-header-menu-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字选中颜色</span>\n        <span class="token property">g-header-menu-active-color</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航选中背景色</span>\n        <span class="token property">g-header-menu-active-bg</span><span class="token punctuation">:</span> #1f3039<span class="token punctuation">,</span>\n        ...\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    ...\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>可以看到，所有主题都存放在 <code>$themes</code> 这个变量里，所以如果想创建一个新主题，你可以按照 <code>default</code> 复制一份，其中 <code>new-theme</code> 就是主题的名称，里面主题的配色可以自行修改。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$themes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token property">default</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n        <span class="token comment">// 主区域背景色</span>\n        <span class="token property">g-main-bg</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">,</span>\n        <span class="token comment">// 【头部】</span>\n        <span class="token comment">// 头部背景色</span>\n        <span class="token property">g-header-bg</span><span class="token punctuation">:</span> #222b45<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字颜色</span>\n        <span class="token property">g-header-menu-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字选中颜色</span>\n        <span class="token property">g-header-menu-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航选中背景色</span>\n        <span class="token property">g-header-menu-active-bg</span><span class="token punctuation">:</span> #334067<span class="token punctuation">,</span>\n        ...\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token property">new-theme</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n        <span class="token comment">// 主区域背景色</span>\n        <span class="token property">g-main-bg</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">,</span>\n        <span class="token comment">// 【头部】</span>\n        <span class="token comment">// 头部背景色</span>\n        <span class="token property">g-header-bg</span><span class="token punctuation">:</span> #1d2935<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字颜色</span>\n        <span class="token property">g-header-menu-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航文字选中颜色</span>\n        <span class="token property">g-header-menu-active-color</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">,</span>\n        <span class="token comment">// 头部导航选中背景色</span>\n        <span class="token property">g-header-menu-active-bg</span><span class="token punctuation">:</span> #1f3039<span class="token punctuation">,</span>\n        ...\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    ...\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>布局相关的部分宽高变量存放在 <code>./src/assets/styles/resources/layout.scss</code> 文件中。</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 这是一个复合变量</span>\n<span class="token comment">// 当布局设置为 adaption-min-width 时，它代表 最小宽度</span>\n<span class="token comment">// 当布局设置为 center 时，它代表 固定宽度</span>\n<span class="token comment">// 当布局设置为 center-max-width 时，它代表 最大宽度</span>\n<span class="token property"><span class="token variable">$g-app-width</span></span><span class="token punctuation">:</span> 1400px<span class="token punctuation">;</span>\n\n<span class="token comment">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span>\n<span class="token property"><span class="token variable">$g-header-width</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token comment">// 头部高度</span>\n<span class="token property"><span class="token variable">$g-header-height</span></span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>\n<span class="token comment">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span>\n<span class="token property"><span class="token variable">$g-breadcrumb-height</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n<span class="token comment">// 标签栏高度</span>\n<span class="token property"><span class="token variable">$g-tabbar-height</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n<span class="token comment">// 侧边栏宽度</span>\n<span class="token property"><span class="token variable">$g-main-sidebar-width</span></span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$g-sub-sidebar-width</span></span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',16);s.render=function(n,s){return a};export{s as default};