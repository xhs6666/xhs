"use strict";
exports.id = 3991;
exports.ids = [3991];
exports.modules = {

/***/ 91812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1be58564",
  "path": "/page/photo.html",
  "title": "相册功能",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "相册",
      "photo"
    ]
  },
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
      "title": "标签页面配置",
      "slug": "标签页面配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 95937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ photo_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/page/photo.html.vue?vue&type=template&id=45a4e160



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="相册功能" tabindex="-1"><a class="header-anchor" href="#相册功能" aria-hidden="true">#</a> 相册功能</h1><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210911121146092" originSrc="https://ooszy.cco.vin/img/blog-note/image-20210911121146092.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><blockquote><p>此页面手机端默认是两列，PC端为5列，主题会自动计算宽度</p></blockquote><p>主题会寻找在<code>docs/photos/readme.md</code>中的所有图片，在此页面中展示，所以一定要在<code>docs/photos/readme.md</code>中，加入自己的图片，可以是本地，或者图片url连接，如果不存在此文件，那么会使用默认的图片进行展示</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>//docs/photos/reasdme.md
<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160320304</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160320304.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160335602</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160335602.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160455739</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160455739.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160510785</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160510785.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160523968</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160523968.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160541591</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160541591.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160601558</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160601558.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160650553</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160650553.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160702449</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160702449.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160713886</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160713886.png?x-oss-process=style/pictureProcess1</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">image-20210910160725684</span>](<span class="token url">https://ooszy.cco.vin/img/blog-note/image-20210910160725684.png?x-oss-process=style/pictureProcess1</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="标签页面配置" tabindex="-1"><a class="header-anchor" href="#标签页面配置" aria-hidden="true">#</a> 标签页面配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/page/tag.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`标签页面配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("标签页面配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/page/photo.html.vue?vue&type=template&id=45a4e160

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/page/photo.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const photo_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=3991.app.js.map