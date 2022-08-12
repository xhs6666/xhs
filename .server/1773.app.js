"use strict";
exports.id = 1773;
exports.ids = [1773];
exports.modules = {

/***/ 70199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-9c1c77e2",
  "path": "/feature/recommend.html",
  "title": "文章推荐",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "配置",
      "slug": "配置",
      "children": []
    },
    {
      "level": 2,
      "title": "组件代码",
      "slug": "组件代码",
      "children": [
        {
          "level": 3,
          "title": "props",
          "slug": "props",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "搜索功能配置",
      "slug": "搜索功能配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 47706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ recommend_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/feature/recommend.html.vue?vue&type=template&id=6d57c570



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="文章推荐" tabindex="-1"><a class="header-anchor" href="#文章推荐" aria-hidden="true">#</a> 文章推荐</h1><p>此组件并不是全局组件，组件位置<code>docs/.vuepress/theme/lib/client/components/RecommendPage.vue</code></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831161503804" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831161503804.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">recommendPageLength</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token comment">//最多推荐多少篇文章</span>
        <span class="token literal-property property">randomColor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#ffcad4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#d8e2dc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#8d99ae&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#b8f2e6&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#84c7d0&#39;</span><span class="token punctuation">]</span> <span class="token comment">//每个推荐背景颜色，随机</span>
    <span class="token literal-property property">recommendNoTitle</span><span class="token operator">:</span> <span class="token string">&#39;\`╮(￣▽￣)╭\`&#39;</span> <span class="token comment">//文章标题为空时，就会使用这个进行替换</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>推荐的文章是随机的，并不能指定</p><h2 id="组件代码" tabindex="-1"><a class="header-anchor" href="#组件代码" aria-hidden="true">#</a> 组件代码</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BCenter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-center1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommend-top-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>推荐阅读<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-center3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommend<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommend<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recommend-item</span>
            <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:theme-property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themeProperty<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in allPages<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BCenter</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>其中<code>&lt;BCenter&gt;</code>组件是一个全局组件，其就是一个居中效果的，展示效果和下图差不多</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831161059607" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831161059607.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>提供了很多插槽</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeProperty</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="搜索功能配置" tabindex="-1"><a class="header-anchor" href="#搜索功能配置" aria-hidden="true">#</a> 搜索功能配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/feature/search.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`搜索功能配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("搜索功能配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/feature/recommend.html.vue?vue&type=template&id=6d57c570

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/feature/recommend.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const recommend_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=1773.app.js.map