import{r as e,o as n,c as s,a,b as l,F as r,e as t,d as i}from"./app.7cd044aa.js";const o={},p=a("h1",{id:"代码规范",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#代码规范","aria-hidden":"true"},"#"),t(" 代码规范")],-1),c=a("h2",{id:"准备",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),t(" 准备")],-1),u=t("代码规范主要基于 ESLint 和 stylelint 运行，所以为保证代码风格统一，请统一使用 "),d={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},m=t("VS Code"),b=t(" 做为开发工具，并安装以下扩展："),g={href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",target:"_blank",rel:"noopener noreferrer"},h=t("EditorConfig for VS Code"),v={href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"},f=t("ESLint"),k={href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",target:"_blank",rel:"noopener noreferrer"},x=t("Vetur"),y={href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"},S=t("Prettier - Code formatter"),j={href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",target:"_blank",rel:"noopener noreferrer"},q=t("stylelint"),C=i('<p>安装完后在 <code>settings.json</code> 中增加如下配置：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t<span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;source.fixAll.stylelint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>完成以上配置，并确保项目已安装好依赖，便可查看最终效果：在保存代码时，会自动对当前文件进行代码格式化操作。</p>',3),E={class:"custom-container warning"},w=a("p",{class:"custom-container-title"},"注意",-1),_=a("p",null,[t("若以上扩展和配置均设置好后，依旧无法实现自动格式化代码的效果，请随便打开一个 "),a("code",null,".js"),t(" 或 "),a("code",null,".vue"),t(" 文件，检查编辑器右下角的 ESLint 是否显示为✔️，如果显示为🚫，则需要点击并选择“Allow”。")],-1),L=["src"],N=["src"],A=["src"],B=i('<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>配置文件主要有 3 处，分别为 IDE 配置（<code>.editorconfig</code>）、ESLint 配置（<code>.eslintrc.js</code> 和 <code>.eslintignore</code>）、StyleLint 配置（<code>.stylelintrc</code> 和 <code>.stylelintignore</code>）。</p><p>以代码缩进举例，框架默认是以 4 空格进行缩进，如果要调整为 2 空格，则需要在 <code>.editorconfig</code> 里修改：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>indent_size = 2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 <code>.eslintrc.js</code> 里修改：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;indent&#39;: [2, 2, {\n    &#39;SwitchCase&#39;: 1\n}],\n\n...\n\n&#39;vue/html-indent&#39;: [2, 2],\n\n...\n\n&#39;vue/script-indent&#39;: [2, 2, {\n    &#39;switchCase&#39;: 1\n}]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在 <code>.stylelintrc</code> 里修改：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;indentation&quot;: 2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改完毕后，再分别执行下面两句命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> run lint\n<span class="token function">yarn</span> run stylelint\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。以上面的例子，当缩进规则调整后，我们无需手动去每个文件调整，通过命令可以自动应用新的缩进规则。</p>',11);o.render=function(t,i){const o=e("OutboundLink");return n(),s(r,null,[p,c,a("p",null,[u,a("a",d,[m,l(o)]),b]),a("ul",null,[a("li",null,[a("a",g,[h,l(o)])]),a("li",null,[a("a",v,[f,l(o)])]),a("li",null,[a("a",k,[x,l(o)])]),a("li",null,[a("a",y,[S,l(o)])]),a("li",null,[a("a",j,[q,l(o)])])]),C,a("div",E,[w,_,a("p",null,[a("img",{src:t.$withBase("/eslint1.png")},null,8,L),a("img",{src:t.$withBase("/eslint2.png")},null,8,N),a("img",{src:t.$withBase("/eslint3.png")},null,8,A)])]),B],64)};export{o as default};