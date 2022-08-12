"use strict";
exports.id = 3012;
exports.ids = [3012];
exports.modules = {

/***/ 73822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-41ed1ae4",
  "path": "/feature/seo.html",
  "title": "SEO",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "首页",
      "slug": "首页",
      "children": []
    },
    {
      "level": 2,
      "title": "文章页面",
      "slug": "文章页面",
      "children": []
    },
    {
      "level": 2,
      "title": "社交信息配置",
      "slug": "社交信息配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 14558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ seo_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/feature/seo.html.vue?vue&type=template&id=490ba7d4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h1><p>主题已对搜索引擎进行初步优化，主要就是自动设置关键词和描述，如果想要更深入的SEO优化，请自行解决</p><h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2><p>首页的<code>description</code>和<code>keyword</code>通过以下修改，在<code>readme.md</code>文件中，不推荐在<code>config.js</code>中进行修改</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;qsyyke的个人博客，记录生活琐事，学习笔记&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;vuepress主题,vuepress theme,生活琐事,二次元博客,简约博客,博客主题,静态主题&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="文章页面" tabindex="-1"><a class="header-anchor" href="#文章页面" aria-hidden="true">#</a> 文章页面</h2><p>对于文章页面，你可以通过<code>frontmatter</code>语法在每个<code>.md</code>文件上进行修改，可以参照官方<a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#description">description</a></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> 这是一个测试description项
<span class="token key atrule">keyword</span><span class="token punctuation">:</span> key1<span class="token punctuation">,</span>key2<span class="token punctuation">,</span>key3<span class="token punctuation">,</span>key4<span class="token punctuation">,</span>key5
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>description: String</li><li>keyword: 数组</li></ul><p>如果你没有在该<code>.md</code>文件中，没有对description或者keyword进行修改，那么默认通过获取当前文章的部分h2标签和部分p标签内容进行组合</p><p>description字符默认为<code>1220</code>，暂未在<code>config.js</code>中提供修改</p><p>keyword字符默认为90</p><h2 id="社交信息配置" tabindex="-1"><a class="header-anchor" href="#社交信息配置" aria-hidden="true">#</a> 社交信息配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/feature/social.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`社交信息配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("社交信息配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/feature/seo.html.vue?vue&type=template&id=490ba7d4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/feature/seo.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const seo_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=3012.app.js.map