"use strict";
exports.id = 3695;
exports.ids = [3695];
exports.modules = {

/***/ 48343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7e1e277e",
  "path": "/base/plugin.html",
  "title": "插件使用教程",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/12/8 16:58",
    "title": "插件使用教程",
    "tag": [
      "插件",
      "插件使用教程"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "插件使用步骤",
      "slug": "插件使用步骤",
      "children": [
        {
          "level": 3,
          "title": "1.查看config.js文件，是否有plugins项",
          "slug": "_1-查看config-js文件-是否有plugins项",
          "children": []
        },
        {
          "level": 3,
          "title": "2.下载需要的插件",
          "slug": "_2-下载需要的插件",
          "children": []
        },
        {
          "level": 3,
          "title": "例如使用官方search插件",
          "slug": "例如使用官方search插件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "时间轴",
      "slug": "时间轴",
      "children": []
    },
    {
      "level": 2,
      "title": "说说",
      "slug": "说说",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 67801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ plugin_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/base/plugin.html.vue?vue&type=template&id=e087a75a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><p>在vuepress中，插件是在配置文件(<code>docs/.vuepress/config.js</code>)中进行配置的，你也可以参照<a href="https://v2.vuepress.vuejs.org/zh/guide/plugin.html#%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6" target="_blank" rel="noopener noreferrer">官方`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>的教程</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//.....在这里使用插件</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;插件1&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token comment">//插件1的配置，具体请自己看每个插件的配置</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;插件2&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token comment">//插件2的配置，具体请自己看每个插件的配置</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;插件3&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token comment">//插件3的配置，具体请自己看每个插件的配置</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;插件4&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token comment">//插件4的配置，具体请自己看每个插件的配置</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;插件5&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token comment">//插件5的配置，具体请自己看每个插件的配置</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>plugins</code>这个是一个数组，这是一个数组，这是一个数组，你如果需要在你博客中，加入额外的插件，请在此数组中加入，格式就像上面那样</p></div><h2 id="插件使用步骤" tabindex="-1"><a class="header-anchor" href="#插件使用步骤" aria-hidden="true">#</a> 插件使用步骤</h2><p>比如现在有一个插件，名字和配置项如下，那么其使用步骤为(<code>此插件并不存在，别加，此插件并不存在，别加，此插件并不存在，别加，，只是演示</code>)</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>name<span class="token operator">:</span> <span class="token string">&quot;aurora-plugin&quot;</span><span class="token punctuation">,</span>
配置项<span class="token operator">:</span> <span class="token punctuation">{</span>
    github<span class="token operator">:</span> <span class="token string">&quot;https://github.com/vuepress-aurora/vuepress-theme-aurora&quot;</span><span class="token punctuation">,</span>
    author<span class="token operator">:</span> <span class="token string">&quot;qsyyke&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-查看config-js文件-是否有plugins项" tabindex="-1"><a class="header-anchor" href="#_1-查看config-js文件-是否有plugins项" aria-hidden="true">#</a> 1.查看<code>config.js</code>文件，是否有<code>plugins</code>项</h3><h4 id="config-js文件中-存在plugins" tabindex="-1"><a class="header-anchor" href="#config-js文件中-存在plugins" aria-hidden="true">#</a> config.js文件中，存在<code>plugins</code></h4><blockquote><p>没加入<code>aurora-plugin</code>插件之前的配置文件内容</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> themeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./themeConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;@vuepress/plugin-search&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Search&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;aurora&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一款简洁.美观.功能强大的vuepress主题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//.....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>如果你的<code>config.js</code>文件中，像上面一样，存在<code>plugins</code>项了，那么你就不用再写一个<code>plugins</code></p><p>你的<code>config.js</code>文件，不一定和我的一样，不一定和我的一样，不一定和我的一样，不一定和我的一样</p></blockquote><p>那么现在你要加入<code>aurora-plugin</code>这个插件，最终的<code>config.js</code>文件，就如下</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> themeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./themeConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;aurora-plugin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token literal-property property">github</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/vuepress-aurora/vuepress-theme-aurora&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&quot;qsyyke&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;@vuepress/plugin-search&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Search&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;aurora&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一款简洁.美观.功能强大的vuepress主题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//.....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h4 id="config-js文件中-不存在plugins" tabindex="-1"><a class="header-anchor" href="#config-js文件中-不存在plugins" aria-hidden="true">#</a> config.js文件中，不存在<code>plugins</code></h4><p>如果你的config.js文件中，不存在plugins，那么就表示，你重来没有在博客中，使用过任何的插件，那么现在你就需要自己写<code>plugins</code></p><blockquote><p>没加入插件之前的内容</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> themeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./themeConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;aurora&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一款简洁.美观.功能强大的vuepress主题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//.....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>加入插件之后的内容</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> themeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./themeConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;aurora-plugin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
                <span class="token literal-property property">github</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/vuepress-aurora/vuepress-theme-aurora&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&quot;qsyyke&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;aurora&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一款简洁.美观.功能强大的vuepress主题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//.....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-下载需要的插件" tabindex="-1"><a class="header-anchor" href="#_2-下载需要的插件" aria-hidden="true">#</a> 2.下载需要的插件</h3><p>官方也提供了好几款插件，如果需要的话，请<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html" target="_blank" rel="noopener noreferrer">自行配置`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211208170414756" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211208170414756.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>这里使用我自己的几款插件举例使用</p><p>或者你也可以直接到<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">Npm`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>中搜索对应的vuepress插件，请注意，需要保证此插件能够在<code>vuepress2</code>版本中使用，因为此主题是<code>vuepress2</code>版本的，一版本的插件，并不能正常使用</p><h3 id="例如使用官方search插件" tabindex="-1"><a class="header-anchor" href="#例如使用官方search插件" aria-hidden="true">#</a> 例如使用官方search插件</h3><p>此插件<a href="https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html#%E5%AE%89%E8%A3%85" target="_blank" rel="noopener noreferrer">地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><ol><li><p>定位到依赖安装(<code>在命令行窗口中，执行npm i xxx这个命令</code>)</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212154319106" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212154319106.png?x-oss-process=style/pictureProcess1" data="aurora"></p></li><li><p>查看插件使用</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212154444401" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212154444401.png?x-oss-process=style/pictureProcess1" data="aurora"></p></li><li><p>使用</p></li></ol><details class="custom-container details"><summary>错误使用</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> themeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./themeConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;archive&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//需要排除的页面url，在该数组里面的路径，都不会被统计</span>
                <span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/404.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/about/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/mood/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/link/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/tag/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/photo/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">//当某篇文章没有标题时，将使用下面值进行替换</span>
                <span class="token literal-property property">noTitle</span><span class="token operator">:</span> <span class="token string">&#39;暂时没有标题配置&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;aurora&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一款简洁.美观.功能强大的vuepress主题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//.....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
下面这个不是这样加的
*/</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;@vuepress/plugin-search&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Search&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><blockquote><p>我说的是加入到对应位置，并不是直接复制，然后粘贴到config.js文件里面，对应对应，对应位置</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212154854325" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212154854325.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details><details class="custom-container details"><summary>正确使用</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> themeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./themeConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;archive&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//需要排除的页面url，在该数组里面的路径，都不会被统计</span>
                <span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/404.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/about/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/mood/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/link/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/tag/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/photo/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">//当某篇文章没有标题时，将使用下面值进行替换</span>
                <span class="token literal-property property">noTitle</span><span class="token operator">:</span> <span class="token string">&#39;暂时没有标题配置&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
      <span class="token string">&#39;@vuepress/plugin-search&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Search&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;aurora&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一款简洁.美观.功能强大的vuepress主题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//.....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></details><h2 id="时间轴" tabindex="-1"><a class="header-anchor" href="#时间轴" aria-hidden="true">#</a> 时间轴</h2><p><a href="https://aurora.xcye.xyz/plugin/archive" target="_blank" rel="noopener noreferrer">链接`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><ol><li><p>安装插件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vuepress-plugin-archive
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>使用插件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//docs/.vuepress/config.js</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//在这里配置插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;archive&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//需要排除的页面url，在该数组里面的路径，都不会被统计</span>
                <span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/footer.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/404.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/about/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/mood/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/link/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/tag/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/photo/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">//当某篇文章没有标题时，将使用下面值进行替换</span>
                <span class="token literal-property property">noTitle</span><span class="token operator">:</span> <span class="token string">&#39;暂时没有标题配置&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ol><h2 id="说说" tabindex="-1"><a class="header-anchor" href="#说说" aria-hidden="true">#</a> 说说</h2><ol><li><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuepress-plugin-coze
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>使用</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//docs/.vuepress/config.js
module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    plugins: <span class="token punctuation">[</span>
         <span class="token string">&#39;vuepress-plugin-coze&#39;</span>,
        <span class="token punctuation">{</span>
            appId: <span class="token string">&#39;leanCloud中得到的appId&#39;</span>,
            appKey: <span class="token string">&#39;leanCloud中得到的appKey&#39;</span>,
            masterKey: <span class="token string">&#39;leanCloud中得到的masterKey&#39;</span>,
            //下面这些是可选的
            avatarPath: <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/avatar-aurora.png&#39;</span>,//说说头像url
            registerPath: <span class="token string">&#39;/aurora-register&#39;</span>, //自定义插件默认提供的注册页面路由，请在前面加上/
            onlyAdministrator: <span class="token boolean">false</span> //是否运行其他注册的用户发布说说，true表示只有管理员可以发布

        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li></ol><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/base/plugin.html.vue?vue&type=template&id=e087a75a

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/base/plugin.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const plugin_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=3695.app.js.map