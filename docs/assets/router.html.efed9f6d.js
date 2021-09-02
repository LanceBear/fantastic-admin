import{o as n,c as s,a,F as p,d as e,e as t}from"./app.7dd3f21c.js";const o={},l=e('<h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><p>框架的核心是通过路由自动生成对应导航，所以除了路由的基本配置，还需要了解框架提供了哪些配置项，其中<strong>高亮部分为专业版扩充配置项</strong>，基础版不具备该特性：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 所有的导航配置项均放在路由的 meta 对象中</span>\nmeta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 该路由在侧边栏导航和面包屑导航中展示的标题</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;新闻列表&#39;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 国际化 key ，如果设置的 key 不存在则以显示 title</span>\n\ti18n<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 侧边栏导航中显示的图标，图标使用 &lt;svg-icon /&gt; 组件展示</span>\n    <span class="token comment">// 专业版支持使用 ElementUI Icon 和 RemixIcon ，如下：</span>\n    <span class="token comment">// icon: &#39;el-icon-star-on&#39;</span>\n    <span class="token comment">// icon: &#39;ri-star-fill&#39;</span>\n    icon<span class="token operator">:</span> <span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 侧边栏导航中激活时显示的图标，图标使用 &lt;svg-icon /&gt; 组件展示</span>\n    <span class="token comment">// 支持使用 ElementUI Icon 和 RemixIcon ，如下：</span>\n    <span class="token comment">// activeIcon: &#39;el-icon-star-on&#39;</span>\n    <span class="token comment">// activeIcon: &#39;ri-star-fill&#39;</span>\n\tactiveIcon<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 该路由进入的权限，支持多个权限叠加，只要满足一个，即可进入</span>\n    <span class="token comment">// 如果用户没有该权限，则该路由不会在侧边栏导航中展示</span>\n    auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;news.browse&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;news.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// 该路由是否在侧边栏导航中展示，如编辑页面 /edit/:id ，默认为 true</span>\n    sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 该路由是否在面包屑导航中展示，默认为 true</span>\n    breadcrumb<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 当路由设置了该属性，则会高亮相对应的侧边栏，一般会搭配 sidebar: false 一起使用</span>\n    <span class="token comment">// 例如从新闻列表进入新闻详情页，由于新闻详情页路由不在侧边栏导航中展示，这时你如果想高亮新闻列表的路由，就可以进行如下设置</span>\n    activeMenu<span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 导航标记，支持 boolean,number,string 三种类型</span>\n    <span class="token comment">// boolean 类型展示形式为点，当值为 false 时隐藏</span>\n    <span class="token comment">// number 类型展示形式为文本，当值小于等于 0 时隐藏</span>\n    <span class="token comment">// string 类型展示形式为文本，当值为空时隐藏</span>\n    <span class="token comment">// 如果标记需要动态更新，请设置为函数形式，并传入外部变量，例如搭配 vuex 一起使用</span>\n    <span class="token comment">// badge: () =&gt; store.state.global.number</span>\n    badge<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// 内嵌网页链接，如果要开启内嵌网页，component 需要设置为框架提供的 layoue/iframe.vue</span>\n    link<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 该路由是否显示底部版权信息，比全局设置里的 showCopyright 优先级高，不设置则继承全局里的设置</span>\n    copyright<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 该路由是否需要空出距离底部距离，默认无需设置</span>\n    <span class="token comment">// 当使用类似 FixedActionBar 这类通过 position: fixed 固定在底部的组件或 DOM 时，需要手动设置，目的是为了防止页面底部可能被遮挡</span>\n    paddingBottom<span class="token operator">:</span> <span class="token string">&#39;80px&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>示例：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/banner&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n    redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;Banner 管理&#39;</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>\n        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bannerCreate&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新增 Banner&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.create&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bannerList&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;Banner 列表&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bannerEdit&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;编辑 Banner&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>展示效果如下：</p>',7),c=["src"],r=a("h2",{id:"小技巧",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#小技巧","aria-hidden":"true"},"#"),t(" 小技巧")],-1),i=a("p",null,"客户总是有自己的想法，例如我司就曾遇到过这样的需求，在不改变侧边栏导航结构的前提下，面包屑导航希望能变成这样：",-1),u=["src"],b=e('<p>其实根据图中的效果，可以确定路由需要有三层，剩下就是通过配置项去控制侧边栏导航和面包屑导航是否展示。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>\n<span class="token keyword">import</span> EmptyLayout <span class="token keyword">from</span> <span class="token string">&#39;@/layout/empty&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/banner&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n    redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;Banner 管理&#39;</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token string">&#39;banner&#39;</span><span class="token punctuation">,</span>\n        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>\n            redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list/detail&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;新增 Banner&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.create&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bannerList&#39;</span><span class="token punctuation">,</span>\n            component<span class="token operator">:</span> EmptyLayout<span class="token punctuation">,</span>\n            redirect<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;Banner 列表&#39;</span><span class="token punctuation">,</span>\n                auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            children<span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>\n                    name<span class="token operator">:</span> <span class="token string">&#39;bannerCreate&#39;</span><span class="token punctuation">,</span>\n                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        title<span class="token operator">:</span> <span class="token string">&#39;新增 Banner&#39;</span><span class="token punctuation">,</span>\n                        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.create&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                        sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                        activeMenu<span class="token operator">:</span> <span class="token string">&#39;/banner/detail&#39;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n                    name<span class="token operator">:</span> <span class="token string">&#39;bannerList&#39;</span><span class="token punctuation">,</span>\n                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        title<span class="token operator">:</span> <span class="token string">&#39;Banner 列表&#39;</span><span class="token punctuation">,</span>\n                        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.browse&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                        sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                        breadcrumb<span class="token operator">:</span> <span class="token boolean">false</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    path<span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>\n                    name<span class="token operator">:</span> <span class="token string">&#39;bannerEdit&#39;</span><span class="token punctuation">,</span>\n                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;banner&#39; */</span> <span class="token string">&#39;@/views/banner/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        title<span class="token operator">:</span> <span class="token string">&#39;编辑 Banner&#39;</span><span class="token punctuation">,</span>\n                        auth<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;banner.edit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                        sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                        activeMenu<span class="token operator">:</span> <span class="token string">&#39;/banner/list&#39;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h2 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h2><p>上面的扩展例子里，引用了一个 <code>EmptyLayout</code> 组件，查看代码可以看到这是一个空白的 layout 页面。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>为什么需要这个呢？因为嵌套路由生成出来的导航栏目也是嵌套结构的，但导航栏目里的模块页面一般是不需要嵌套的，所以除了顶级路由需要设置 <code>component: Layout</code> ，嵌套有 <code>children</code> 属性的子项路由，均可设置 <code>component: EmptyLayout</code> 。当然如果你的页面确实有嵌套展示的需求，可不按照这种方式操作。</p><h2 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫" aria-hidden="true">#</a> 全局前置守卫</h2><p>路由的前置导航守卫是框架实现路由跳转的核心，在前置守卫里会接管侧边栏导航路由生成、页面标题设置、无效路由跳转404页面等处理。所以理解框架的前置守卫处理逻辑，对业务开发或框架二次开发有很大帮助。</p>',8),k=["src"];o.render=function(e,t){return n(),s(p,null,[l,a("p",null,[a("img",{src:e.$withBase("/breadcrumb1.gif")},null,8,c)]),r,i,a("p",null,[a("img",{src:e.$withBase("/breadcrumb2.gif")},null,8,u)]),b,a("p",null,[a("img",{src:e.$withBase("/router.png")},null,8,k)])],64)};export{o as default};
