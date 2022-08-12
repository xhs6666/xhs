"use strict";
exports.id = 8486;
exports.ids = [8486];
exports.modules = {

/***/ 75992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-adec05da",
  "path": "/base/command.html",
  "title": "博客中常见命令及注意事项",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/12/10 20:51"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "npm run dev",
      "slug": "npm-run-dev",
      "children": []
    },
    {
      "level": 2,
      "title": "npm run build",
      "slug": "npm-run-build",
      "children": []
    },
    {
      "level": 2,
      "title": "npm install",
      "slug": "npm-install",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 82297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ command_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/base/command.html.vue?vue&type=template&id=3a1c9080

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="博客中常见命令及注意事项" tabindex="-1"><a class="header-anchor" href="#博客中常见命令及注意事项" aria-hidden="true">#</a> 博客中常见命令及注意事项</h1><h2 id="npm-run-dev" tabindex="-1"><a class="header-anchor" href="#npm-run-dev" aria-hidden="true">#</a> npm run dev</h2><p>此命令是在本地启动博客，运行此命令之后，会自动为博客绑定一个端口，然后你就可以在浏览器中输入这个网址进行访问</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>http://localhost:<span class="token punctuation">[</span>post<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210223203670" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210223203670.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210223343459" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210223343459.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>如果你运行<code>npm run dev</code>，但是打开<code>http://localhost:8080/</code>，却不能访问，你可以先按住<code>Ctrl</code>键和<code>C</code>键退出，然后重新运行<code>npm run dev</code>试试</p><p>网址的输入位置也别弄错了，这个是Google下的视图</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210223619339" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210223619339.png?x-oss-process=style/pictureProcess1" data="aurora"></p></div><h2 id="npm-run-build" tabindex="-1"><a class="header-anchor" href="#npm-run-build" aria-hidden="true">#</a> npm run build</h2><p>此命令会将博客程序，自动生成html文件，此html和css和js等静态文件的存储位置为<code>docs/.vuepress/dist</code></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210224142914" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210224142914.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210224213071" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210224213071.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="npm-install" tabindex="-1"><a class="header-anchor" href="#npm-install" aria-hidden="true">#</a> npm install</h2><p>node_modules</p><p>此命令，就是安装依赖的，比如当</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210224420012" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210224420012.png?x-oss-process=style/pictureProcess1" data="aurora">、</p><p>你如果现在运行<code>npm run dev</code>或者<code>npm run build</code>命令，那么会出现下面错误</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210224527152" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210224527152.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>这是因为你还没有安装博客所需要的依赖，所以你需要运行<code>npm install</code>命令，此命令会自动下载<code>package.json</code>文件中，所有的依赖</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210224713144" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210224713144.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210224845840" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210224845840.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>只有当所需要的已依赖，都安装完成之后，你才可以使用<code>npm run dev</code>和<code>npm run build</code>等命令</p></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/base/command.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const command_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=8486.app.js.map