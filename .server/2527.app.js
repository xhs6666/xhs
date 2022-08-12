"use strict";
exports.id = 2527;
exports.ids = [2527];
exports.modules = {

/***/ 4168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ac8b5082",
  "path": "/issue/common.html",
  "title": "运行报错整理",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/12/10 22:27"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "因为权限问题操作被拒绝",
      "slug": "因为权限问题操作被拒绝",
      "children": []
    },
    {
      "level": 2,
      "title": "未在package.json同级目录下，运行npm命令",
      "slug": "未在package-json同级目录下-运行npm命令",
      "children": []
    },
    {
      "level": 2,
      "title": "'vuepress' 不是内部或外部命令，也不是可运行的程序",
      "slug": "vuepress-不是内部或外部命令-也不是可运行的程序",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 73230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ common_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/issue/common.html.vue?vue&type=template&id=52e710a4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="运行报错整理" tabindex="-1"><a class="header-anchor" href="#运行报错整理" aria-hidden="true">#</a> 运行报错整理</h1><h2 id="因为权限问题操作被拒绝" tabindex="-1"><a class="header-anchor" href="#因为权限问题操作被拒绝" aria-hidden="true">#</a> 因为权限问题操作被拒绝</h2><p>如果你运行，出现下面这种错误</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210214629801" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210214629801.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>出现这个问题的原因是因为，你当前并没有使用管理员方式进入<code>CMD</code>中，所以就出现操作被拒，解决的方式为</p><p>请看`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/base/admin.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`这里`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("这里")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h2 id="未在package-json同级目录下-运行npm命令" tabindex="-1"><a class="header-anchor" href="#未在package-json同级目录下-运行npm命令" aria-hidden="true">#</a> 未在package.json同级目录下，运行npm命令</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210205447370" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210205447370.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>解决方法，就是在<code>package.json</code>同级目录下，运行npm命令</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210221942585" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210221942585.png?x-oss-process=style/pictureProcess1" data="aurora"></p></div><h2 id="vuepress-不是内部或外部命令-也不是可运行的程序" tabindex="-1"><a class="header-anchor" href="#vuepress-不是内部或外部命令-也不是可运行的程序" aria-hidden="true">#</a> &#39;vuepress&#39; 不是内部或外部命令，也不是可运行的程序</h2><p>当你运行<code>npm run dev</code>或者<code>npm run build</code>出现下面错误的时候</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210225318731" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210225318731.png?x-oss-process=style/pictureProcess1" data="aurora"></p><blockquote><p>这是因为你没有安装相关的依赖导致的，解决方法请看`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/base/command.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`这里`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("这里")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210225429250" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210225429250.png?x-oss-process=style/pictureProcess1" data="aurora"></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/issue/common.html.vue?vue&type=template&id=52e710a4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/issue/common.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const common_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=2527.app.js.map