"use strict";
exports.id = 9225;
exports.ids = [9225];
exports.modules = {

/***/ 60087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ab2961b0",
  "path": "/readme/",
  "title": "快速开始",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2021/12/1",
    "title": "快速开始",
    "tag": [
      "快速开始",
      "博客搭建"
    ],
    "categories": [
      "教程"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Introduce",
      "slug": "introduce",
      "children": []
    },
    {
      "level": 2,
      "title": "Quick start",
      "slug": "quick-start",
      "children": [
        {
          "level": 3,
          "title": "安装CLI",
          "slug": "安装cli",
          "children": []
        },
        {
          "level": 3,
          "title": "创建博客",
          "slug": "创建博客",
          "children": []
        },
        {
          "level": 3,
          "title": "启动",
          "slug": "启动",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "联系我",
      "slug": "联系我",
      "children": []
    },
    {
      "level": 2,
      "title": "首页配置",
      "slug": "首页配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 46624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/readme/index.html.vue?vue&type=template&id=e9314682



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><ul><li><a href="https://aurora-animate.xcye.xyz/" target="_blank" rel="noopener noreferrer">动漫Demo`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora-common.xcye.xyz/" target="_blank" rel="noopener noreferrer">非动漫Demo`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/" target="_blank" rel="noopener noreferrer">文档`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li></ul><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce" aria-hidden="true">#</a> Introduce</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://img.shields.io/npm/v/vuepress-theme-aurora" data="aurora"><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="npm" originSrc="https://img.shields.io/npm/dm/vuepress-theme-aurora" data="aurora"><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="https://img.shields.io/github/stars/qsyyke/vuepress-theme-aurora?style=social" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211208135404881" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211208135404881.png?x-oss-process=style/pictureProcess1" data="aurora"></p><hr><p><a href="https://www.npmjs.com/package/vuepress-theme-aurora" target="_blank" rel="noopener noreferrer">Aurora`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>是一款基于<strong>Vuepress2</strong>的博客主题，将本地<strong>Markdown</strong>文件解析成静态html页面，作为博客文章。搭配<strong>说说</strong>，<strong>时间轴</strong>，<strong>文章分类</strong>，<strong>评论</strong>，<strong>友情链接</strong>，<strong>相册</strong>，<strong>音乐播放器</strong>等特色功能，给您不一样的使用体验。</p><ul><li>🏆<strong>100%自定义</strong></li><li>🌈<strong>简洁，漂亮</strong></li><li>🎨<strong>高扩展</strong></li><li>💫<strong>多功能</strong></li><li>📖<strong>配置文档</strong></li></ul><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>搭建此博客网站需要哪些知识？</p><blockquote><p>答：需要会使用<code>Windows</code>等操作系统，知道如何使用管理员身份进入<code>cmd</code>，以管理员方式运行某款软件</p></blockquote><p>需要编程知识么</p><blockquote><p>答：最好有编程知识，无论你学的是前端还是后端都行，因为<code>vuepress</code>并不像<code>wordpress</code>那样，在服务器上搭建好后，就是傻瓜式操作，<code>vuepress</code>需要你自己手动修改配置文件，也就是js文件，你需要知道js中的对象，数组是什么就行</p></blockquote><p>如果你不知道<code>url</code>地址需要在浏览器中打开，还没有任何编程经验，那么我并不推荐你使用这个，真的，因为需要修改很多配置项，我也没有时间手把手的教你搭建</p></div><h3 id="安装cli" tabindex="-1"><a class="header-anchor" href="#安装cli" aria-hidden="true">#</a> 安装CLI</h3><blockquote><p><code>管理员状态下运行cmd</code></p><p>如何进入管理员状态下的<code>CMD</code>,`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/readme/cmd.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`点这`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("点这")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote><ul><li><p>npm</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vuepress-theme-cli -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>yarn</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> global vuepress-theme-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><a href="https://ooszy.cco.vin/theme-template/%E6%9C%80%E7%BB%88%E7%89%88%E6%9C%AC.mp4" target="_blank" rel="noopener noreferrer">视频教程`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p></li></ul><h3 id="创建博客" tabindex="-1"><a class="header-anchor" href="#创建博客" aria-hidden="true">#</a> 创建博客</h3><p>待脚手架cli安装成功之后，进入cmd中</p><blockquote><p>这里推荐最好在管理员状态下，`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/readme/cmd.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`如何进入?`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("如何进入?")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211127104249135" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211127104249135.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>在命令行处输入下面命令(<code>之后一直按Enter键</code>)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>aurora blog-demo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>blog-demo</code>是你的博客文件件名称，会自动创建以此名字命名的文件夹</p><p>当你输入<code>aurora blog-demo</code>命令之后，会需要你填写一下<code>description</code>和<code>logoText(首页logo文字)</code>，你可以随便填一下</p></blockquote><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果提示,请看<a href="https://aurora.xcye.xyz/issue/cli-issue.md" target="_blank" rel="noopener noreferrer">这里`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&#39;aurora&#39;</span> 不是内部或外部命令，也不是可运行的程序
或批处理文件。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211130123037624" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211130123037624.png?x-oss-process=style/pictureProcess1" data="aurora"></p><blockquote><p>这个过程大概几秒，取决于你的网速，待安装成功之后，你会发现在当前目录下，多了一个目录</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211210202945519" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211210202945519.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>不知道你有没有注意到上图红色框中的信息，当博客模板下载完成之后，你还需要安装依赖，请根据你自己的环境，选择使用<code>npm</code>还是<code>yarn</code></p></div><details class="custom-container details"><summary>运行npm install报错?</summary><p>如果你运行<code>npm install</code>命令报错，就像下面这种情况</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211211083929879" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211211083929879.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>使用下面这条命令，便可以解决，感谢<a href="https://github.com/ranyong1997/" target="_blank" rel="noopener noreferrer">ranyong`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --legacy-peer-deps
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211211084030624" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211211084030624.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details><p><video controls="" class="aurora-video" autoplay="" name="media"><source src="https://ooszy.cco.vin/theme-template/%E6%9C%80%E7%BB%88%E7%89%88%E6%9C%AC.mp4" type="video/mp4"></video></p><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><blockquote><p>运行成功之后，会出现一个地址，你只需要在浏览器中，输入这个地址，就可以看到下面的页面</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211010232918219" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211010232918219.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>恭喜你，到这里，你已经安装成功了，接下来便可以尽情书写博客和修改配置(<code>上图展示出来的效果是默认配置，你可以更改</code>)</p><p>为了更好的对主题进行配置，你可以直接复制我GitHub中的<a href="https://github.com/vuepress-aurora/vuepress-theme-aurora/blob/master/docs/.vuepress/config-copy.js" target="_blank">config.js</a>文件</p><p>配置项</p><ul><li><a href="https://github.com/vuepress-aurora/vuepress-theme-aurora/blob/master/docs/.vuepress/config.js" target="_blank" rel="noopener noreferrer">主题config.js配置文件`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/home/config.md" target="_blank" rel="noopener noreferrer">主题所有配置速查`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/homeconfig.html" target="_blank" rel="noopener noreferrer">首页配置`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li></ul><hr><p>报错区</p><ul><li><a href="https://aurora.xcye.xyz/readme/cmd.html" target="_blank" rel="noopener noreferrer">进入管理员状态下的CMD`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/base/admin.html" target="_blank" rel="noopener noreferrer">切换到管理员状态下的CMD`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/base/command.html#npm-install" target="_blank" rel="noopener noreferrer">主题常用命令`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/issue/common.html" target="_blank" rel="noopener noreferrer">运行报错解决`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li></ul><hr><p>必读区</p><ul><li><a href="https://aurora.xcye.xyz/issue/" target="_blank" rel="noopener noreferrer">一定一定要读`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li></ul><hr><p>Vuepress基本知识</p><ul><li><a href="https://aurora.xcye.xyz/base/public.html" target="_blank" rel="noopener noreferrer">关于使用本地静态文件(图片,mp3等)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/base/plugin.html" target="_blank" rel="noopener noreferrer">Vuepress插件使用`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/base/docs.html" target="_blank" rel="noopener noreferrer">博客目录结构`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li><li><a href="https://aurora.xcye.xyz/issue/bug.html" target="_blank" rel="noopener noreferrer">主题最近更新,在这里看看每个新版本如何配置`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li></ul><hr><p>部署区</p><ul><li><a href="https://aurora.xcye.xyz/home/deploy.html" target="_blank" rel="noopener noreferrer">博客如何部署?`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li></ul></div><h2 id="联系我" tabindex="-1"><a class="header-anchor" href="#联系我" aria-hidden="true">#</a> 联系我</h2><p>如果你在使用该主题的过程中，有任何的问题，都可以通过以下方式联系我</p><table><thead><tr><th>QQ</th><th>主题交流群</th><th>微信</th></tr></thead><tbody><tr><td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233620332.png?x-oss-process=style/pictureProcess1" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"></td><td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233827133.png?x-oss-process=style/pictureProcess1" alt="image-20211024233827133" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"></td><td><img src="https://ooszy.cco.vin/img/blog-note/image-20211024233735110.png?x-oss-process=style/pictureProcess1" alt="image-20211024233735110" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"39%"})
  }"></td></tr></tbody></table><h2 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置" aria-hidden="true">#</a> 首页配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/homeconfig.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`首页`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("首页")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/readme/index.html.vue?vue&type=template&id=e9314682

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/readme/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=9225.app.js.map