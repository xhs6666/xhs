"use strict";
exports.id = 4723;
exports.ids = [4723];
exports.modules = {

/***/ 37557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0128819c",
  "path": "/homePage.html",
  "title": "首页文章列表配置",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/10/19 21:18"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "替换文章列表图片地址",
      "slug": "替换文章列表图片地址",
      "children": []
    },
    {
      "level": 2,
      "title": "最后更新时间",
      "slug": "最后更新时间",
      "children": [
        {
          "level": 3,
          "title": "1.git-commit",
          "slug": "_1-git-commit",
          "children": []
        },
        {
          "level": 3,
          "title": "2. frontmatter",
          "slug": "_2-frontmatter",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "修改首页文章列表懒加载图片",
      "slug": "修改首页文章列表懒加载图片",
      "children": []
    },
    {
      "level": 2,
      "title": "关于页面配置",
      "slug": "关于页面配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 4084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homePage_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/homePage.html.vue?vue&type=template&id=1ef02cef



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><h1 id="首页文章列表配置" tabindex="-1"><a class="header-anchor" href="#首页文章列表配置" aria-hidden="true">#</a> 首页文章列表配置</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>vuepress框架，会自动将<code>docs</code>目录下的所有<code>.md</code>文件自动解析成<code>.html</code>文件，如果你建立站点之后，发现首页没有文章，那么你需要在<code>docs</code>目录下，创建几个<code>.md</code>文件</p><p>在阅读本章节之前，请确保你已经对 Markdown 有所了解。</p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/learn/markdown.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Markdown使用`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Markdown使用")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>如果你还不了解 Markdown ，请先学习一下<a href="https://www.runoob.com/markdown/md-tutorial.html" target="_blank" rel="noopener noreferrer">Markdown 教程 | 菜鸟教程 (runoob.com)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p></div><img src="https://ooszy.cco.vin/img/blog-note/image-20211019211924609.png?x-oss-process=style/pictureProcess1" alt="image-20211019211924609" style="${(0,server_renderer.ssrRenderStyle)({"zoom":"50%"})}"><blockquote><p>首页会根据你通过<code>git commit</code>提交的时间戳或者是否在文章的<code>frontmatter</code>中设置是否置顶</p></blockquote><h2 id="替换文章列表图片地址" tabindex="-1"><a class="header-anchor" href="#替换文章列表图片地址" aria-hidden="true">#</a> 替换文章列表图片地址</h2><p>图片地址的修改，可以有两个选择</p><ol><li><p>通过在每篇文章的顶部，设置<code>coverUrl</code>属性，此属性值需要传入一个图片url地址，语法为<code>yaml</code></p><details class="custom-container details"><summary>view</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">stick</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">coverUrl</span><span class="token punctuation">:</span> <span class="token string">&#39;https://img2.baidu.com/it/u=2192265457,2884791613&amp;fm=26&amp;fmt=auto&#39;</span>
<span class="token key atrule">time</span><span class="token punctuation">:</span> 2021/10/14
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details></li><li><p>如果你没有在每篇文章中，设置<code>coverUrl</code>值，那么将使用你设置的随机图片接口，如果没设置，那么将使用主题默认提供的接口，</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//首页文章列表封面图api接口</span>
<span class="token literal-property property">homePageImgApi</span><span class="token operator">:</span> <span class="token string">&quot;https://api.ixiaowai.cn/api/api.php&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><h2 id="最后更新时间" tabindex="-1"><a class="header-anchor" href="#最后更新时间" aria-hidden="true">#</a> 最后更新时间</h2><h3 id="_1-git-commit" tabindex="-1"><a class="header-anchor" href="#_1-git-commit" aria-hidden="true">#</a> 1.git-commit</h3><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211020235623101" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211020235623101.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>当你使用<code>git init</code>初始化之后，你需要使用下面命令进行提交</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;最后更新时间&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后重启服务<code>npm run dev</code></p><h3 id="_2-frontmatter" tabindex="-1"><a class="header-anchor" href="#_2-frontmatter" aria-hidden="true">#</a> 2. frontmatter</h3><p>同时，还有另外一种选择，你可以在每一个md文件中，在每篇文章的顶部，添加<code>date</code>字段，自己设置日期</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token string">&quot;2021/10/20 23:59&quot;</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>请注意，<code>---</code>内的是<code>yaml</code>语法，详细请查看官方说明https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html</p><blockquote><p><code>date字段值，请使用双引号引起来，你可以只写2021/10/20，不需要写后面的时候，如果你在frontmatter中，添加此字段，那么将以此字段的时间，作为首页文章列表的最后更新时间</code></p></blockquote><h2 id="修改首页文章列表懒加载图片" tabindex="-1"><a class="header-anchor" href="#修改首页文章列表懒加载图片" aria-hidden="true">#</a> 修改首页文章列表懒加载图片</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//config.js</span>
<span class="token literal-property property">homePageLazyLoadingImg</span><span class="token operator">:</span> <span class="token string">&#39;https://ooszy.cco.vin/img/blog-note/aurora-loading.gif?name=chuchen&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211021000532423" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211021000532423.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="关于页面配置" tabindex="-1"><a class="header-anchor" href="#关于页面配置" aria-hidden="true">#</a> 关于页面配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/page/about.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`关于页面配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("关于页面配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/homePage.html.vue?vue&type=template&id=1ef02cef

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/homePage.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const homePage_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=4723.app.js.map