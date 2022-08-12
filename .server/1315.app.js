"use strict";
exports.id = 1315;
exports.ids = [1315];
exports.modules = {

/***/ 57692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6b3e7ed0",
  "path": "/base/vite-webpack.html",
  "title": "vuepress切换打包工具",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/12/24 08:08",
    "title": "vuepress切换打包工具",
    "tag": [
      "vite",
      "webpack"
    ],
    "categories": [
      "build-tool"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "如何查看当前的打包工具",
      "slug": "如何查看当前的打包工具",
      "children": [
        {
          "level": 3,
          "title": "vite",
          "slug": "vite",
          "children": []
        },
        {
          "level": 3,
          "title": "webpack",
          "slug": "webpack",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "切换打包工具",
      "slug": "切换打包工具",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 99780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ vite_webpack_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/base/vite-webpack.html.vue?vue&type=template&id=8f4e7e60

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>vuepress在<code>beta.28</code>版本以前，默认使用的打包工具是<code>webpack</code>，但是从<code>beta.28</code>版本及之后的版本，便使用了<code>vite</code>作为默认的打包工具，但是你可以手动进行切换</p><h2 id="如何查看当前的打包工具" tabindex="-1"><a class="header-anchor" href="#如何查看当前的打包工具" aria-hidden="true">#</a> 如何查看当前的打包工具</h2><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> <strong>vite</strong></h3><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211224081408044" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211224081408044.png" data="aurora"></p><p>如果你运行<code>npm run dev</code>之后，会出现多个打开网址，那么这个就是使用<code>vite</code>作为打包工具，同时，你也可以运行<code>npm run build</code>命令，在控制台会有提示</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211224081606424" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211224081606424.png" data="aurora"></p><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> <strong>webpack</strong></h3><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211224081735990" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211224081735990.png" data="aurora"></p><p>如果你运行是上面这种，只出现一个网址，那么你使用的就是<code>webpack</code>作为打包工具，并且你可以通过打印的信息便可以看出</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>我推荐大家使用<code>webpack</code>，因为目前使用<code>vite</code>的话，我主题中，需要引入<code>leanCloud</code>的依赖包，但是此依赖包里面，好像并不能使用<code>import</code>进行导入，所以<code>vuepress-plugin-coze</code>插件，我还是使用<code>require()</code>进行引入，但是这样的话，使用vite启动，浏览器控制台就会报一个错误<code>require is not defined</code>，解决办法就是使用<code>webpack</code></p></div><h2 id="切换打包工具" tabindex="-1"><a class="header-anchor" href="#切换打包工具" aria-hidden="true">#</a> 切换打包工具</h2><p>如果你需要在这两个工具之间进行切换，那么你需要先安装<code>vuepress-webpack@next</code>,请运行下面命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D vuepress-webpack@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后进入到<code>docs/.vuepress/config.js</code>文件中，加上下面内容</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token string">&#39;@vuepress/bundler-webpack&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="custom-container details"><summary>还不会加?</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211224082501080" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211224082501080.png" data="aurora"></p></details><p>如果你在<code>config.js</code>文件里面加上<code>bundler: &#39;@vuepress/bundler-webpack&#39;</code>，那么你现在重新运行<code>npm run dev</code>或者<code>npm run build</code>将使用<code>webpack</code>作为打包工具</p><p>同理，如果你把上面的<code>bundler: &#39;@vuepress/bundler-webpack&#39;</code>注释了，那么就使用默认的<code>vite</code>作为打包工具</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>推荐使用<code>webpakck</code>作为打包工具</p></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/base/vite-webpack.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const vite_webpack_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=1315.app.js.map