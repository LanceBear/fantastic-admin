import{r as n,o as s,c as a,a as p,b as t,F as e,e as o,d as c}from"./app.7dd3f21c.js";const l={},r={id:"标准模块",tabindex:"-1"},u=p("a",{class:"header-anchor",href:"#标准模块","aria-hidden":"true"},"#",-1),i=o(" 标准模块 "),k=c('<h2 id="用法说明" tabindex="-1"><a class="header-anchor" href="#用法说明" aria-hidden="true">#</a> 用法说明</h2><p>在《<a href="plop">快速生成文件</a>》里说到，通过 <code>yarn new</code> 指令可以生成一个标准模块，那标准模块是什么样一个标准呢？那就实际生成一个模块来看一下。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>? 请选择需要创建的模式： module - 创建标准模块（包含列表页&amp;详情页）\n? 请选择模块创建目录 src/views\n? 请输入模块名 test\n? 请输入模块中文名称 测试模块\n√  ++ \\src\\views\\test\\list.vue\n√  ++ \\src\\views\\test\\detail.vue\n√  ++ \\src\\views\\test\\components\\DetailForm\\index.vue\n√  ++ \\src\\views\\test\\components\\FormDialog\\index.vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>通过一步步的提示设置，现在已经创建好了一个测试模块，先去路由里配置一下，看看实际页面上展示效果如何。</p><p>首先在 <code>./src/router/modules/</code> 目录下新建一个 <code>test.js</code> 文件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n    redirect<span class="token operator">:</span> <span class="token string">&#39;/test/list&#39;</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;测试模块&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;testList&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span> <span class="token string">&#39;@/views/test/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;列表&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;testDetail&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span> <span class="token string">&#39;@/views/test/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;详情&#39;</span><span class="token punctuation">,</span>\n                sidebar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                activeMenu<span class="token operator">:</span> <span class="token string">&#39;/test/list&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>然后到 <code>./src/router/index.js</code> 文件里加上这个路由配置文件的引用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Test <span class="token keyword">from</span> <span class="token string">&#39;./modules/test&#39;</span>\n\n<span class="token keyword">let</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">&#39;演示&#39;</span><span class="token punctuation">,</span>\n            icon<span class="token operator">:</span> <span class="token string">&#39;sidebar-default&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token operator">...</span>\n            Test\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>这样就能访问到我们的页面了，但是这时候点击新增按钮是会跳转到 404 页面的，那是因为在 <code>list.vue</code> 文件中，我们需要将详情页路由的 <code>name</code> 替换掉。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;testDetail&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token function">onEdit</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;testDetail&#39;</span><span class="token punctuation">,</span>\n            params<span class="token operator">:</span> <span class="token punctuation">{</span>\n                id<span class="token operator">:</span> row<span class="token punctuation">.</span>id\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>id <span class="token operator">=</span> row<span class="token punctuation">.</span>id\n        <span class="token keyword">this</span><span class="token punctuation">.</span>detailFormDialog<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',10),b=["src"],m=c('<p>这样，我们的一个测试模块就初步创建好了。</p><h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h2><p>功能部分的介绍主要还是要看代码，先从列表页 <code>list.vue</code> 开始。</p><p>最先看到的是这段 <code>mixins</code> 混入，因为几乎每个列表页都需要翻页功能，所以把翻页相关的东西都存放在 <code>./src/mixins/pagination.js</code> 方便复用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> paginationMixin <span class="token keyword">from</span> <span class="token string">&#39;@/mixins/pagination&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    mixins<span class="token operator">:</span> <span class="token punctuation">[</span>paginationMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>接着在 <code>data</code> 对象里存放的是标准模块提供的一些配置项和必要数据参数字段，例如你可以开启详情弹框模式，或者开启批量操作栏，这些都在 <code>data</code> 对象里设置即可。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 是否开启详情弹框模式</span>\n        dialogMode<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 详情弹框</span>\n        detailFormDialog<span class="token operator">:</span> <span class="token punctuation">{</span>\n            visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            id<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">// 搜索</span>\n        search<span class="token operator">:</span> <span class="token punctuation">{</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">// 批量操作</span>\n        batch<span class="token operator">:</span> <span class="token punctuation">{</span>\n            enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            selectionDataList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">// 列表数据</span>\n        dataList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',7),d=["src"],g=c('<p>再往下就是页面缓存相关的代码了，记得修改高亮部分代码。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 进入页面时，先将当前页面的 name 信息存入 keep-alive 全局状态</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            vm<span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;keepAlive/add&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;TestList&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存</span>\n        <span class="token comment">// 所以下面的代码意思就是，如果目标路由的 name 不在指定的数组内，则将当前页面的 name 从 keep-alive 中删除</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">&#39;testDetail&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 注意：上面校验的是路由的 name ，下面记录的是当前页面的 name</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;keepAlive/remove&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;TestList&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;getDataList&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>dialogMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$eventBus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;getDataList&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>再往下就是需要你自己编写业务代码的部分了。</p><p>详情页代码就不贴了，相对比较简单，因为把表单部分单独封装成组件存放在 <code>./src/views/[模块文件夹]/components/DetailForm/index.vue</code> 里了，同样你在 <code>components/</code> 文件夹下还能看到另外一个 <code>FormDialog</code> 的文件夹，这样的用意其实很明显了，目的就是让表单可以复用，<strong>可以通过传统路由跳转的形式进入详情页，也可以通过弹框的形式打开详情页</strong>。</p><p>可能有人会有疑问，为什么不在生成文件的时候直接让我选择用哪种形式，这样生成出来就是哪种，而是在生成好的代码文件里再进行配置？</p><p>这样设计的目的主要有两点：</p><ol><li><strong>方便后期维护</strong>。关于详情页到底是用弹框还是路由跳转的形式，我们的原则是，表单填写项如果比较少，用弹框形式，反之用路由跳转形式，但考虑到需求会变，可能一开始是一个很简单的表单，后期需求一点点增加，变成了一个庞大的表单，这时候要从弹框改成路由跳转，或者从路由跳转改成弹框，都很麻烦。所以方便后期维护，这部分还是做成了两种形式共存，通过配置一键切换。</li><li><strong>跨模块的组件调用</strong>。例如有两个模块，一个用户模块，一个部门模块，用户详情里有一项是选择部门，但是新增用户的时候部门可能还没创建，这时候表单已经填写一半了，如果让用户离开页面去部门模块里创建好再回来新建用户，先不说数据如何缓存的问题，光是操作流被打断，页面跳来跳去就很影响用户体验了。所以这个时候就可以在选择部门后面放一个新增部门的按钮，点击后弹出新增部门的弹框，新增完成后弹框关闭，可以继续在新增用户界面做后续操作。</li></ol><hr><p>当然标准模块也只是框架提供的一个标准，你可以沿用，也可以根据自己的需求指定一套标准，毕竟最终目的都是提高开发效率，同时也确保多人协作开发的时候有个统一标准，不会出现每个人做出来的模块风格都不一样。</p>',9);l.render=function(o,c){const l=n("Badge");return s(),a(e,null,[p("h1",r,[u,i,t(l,{type:"tip",text:"专业版",vertical:"top"})]),k,p("p",null,[p("img",{src:o.$withBase("/vue2/module1.gif")},null,8,b)]),m,p("p",null,[p("img",{src:o.$withBase("/vue2/module2.gif")},null,8,d)]),g],64)};export{l as default};
