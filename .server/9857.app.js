"use strict";
exports.id = 9857;
exports.ids = [9857];
exports.modules = {

/***/ 52634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-abea53f8",
  "path": "/style/live2d.html",
  "title": "在aurora主题中，加入看板娘教程",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "下载依赖",
      "slug": "下载依赖",
      "children": []
    },
    {
      "level": 2,
      "title": "使用",
      "slug": "使用",
      "children": []
    },
    {
      "level": 2,
      "title": "选择模型",
      "slug": "选择模型",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 80172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ live2d_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/style/live2d.html.vue?vue&type=template&id=0a875326



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><h1 id="在aurora主题中-加入看板娘教程" tabindex="-1"><a class="header-anchor" href="#在aurora主题中-加入看板娘教程" aria-hidden="true">#</a> 在aurora主题中，加入看板娘教程</h1><p>最终效果</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212151305342" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212151305342.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果你还不会使用插件，请先看一下这篇`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/base/plugin.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`文章`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("文章")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h2 id="下载依赖" tabindex="-1"><a class="header-anchor" href="#下载依赖" aria-hidden="true">#</a> 下载依赖</h2><p>因为这个需要使用到插件，所以需要先下载依赖，请在命令行窗口中，执行下面命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D vuepress-plugin-live2d-plus
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>当下载好之后，请到<code>docs/.vuepress/config.js</code>文件中，加入此插件</p><blockquote><p>没有这个<code>docs/.vuepress/config.js</code>文件？这是一个路径...</p></blockquote><p>进入到<code>config.js</code>文件内，将下面内容，添加到对应位置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;vuepress-plugin-live2d-plus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/gh/qsyyke/vscode-live2d-models/model-library/haru02/haru02.model.json&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;135px&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">xOffset</span><span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">yOffset</span><span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><details class="custom-container details"><summary>什么是对应位置?</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212155421101" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212155421101.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details><details class="custom-container details"><summary>最终</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> themeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./themeConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&#39;vuepress-plugin-live2d-plus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/gh/qsyyke/vscode-live2d-models/model-library/haru02/haru02.model.json&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;135px&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">xOffset</span><span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">yOffset</span><span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;aurora&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一款简洁.美观.功能强大的vuepress主题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></details><h2 id="选择模型" tabindex="-1"><a class="header-anchor" href="#选择模型" aria-hidden="true">#</a> 选择模型</h2><p>进入<a href="https://github.com/qsyyke/vscode-live2d-models" target="_blank" rel="noopener noreferrer">这里`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>选择自己喜欢的模型</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212155716585" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212155716585.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>设置好之后，重新运行<code>npm run dev</code>即可</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果你需要修改显示的位置，请修改一下下面配置，这个根据你自己的需要，自己修改,都是css样式</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;135px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xOffset</span><span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yOffset</span><span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/style/live2d.html.vue?vue&type=template&id=0a875326

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/style/live2d.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const live2d_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=9857.app.js.map