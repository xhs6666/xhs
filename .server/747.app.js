"use strict";
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 52037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7fc1dad8",
  "path": "/issue/bug.html",
  "title": "最近更新",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "V1.12.0",
      "slug": "v1-12-0",
      "children": []
    },
    {
      "level": 2,
      "title": "V1.11.1",
      "slug": "v1-11-1",
      "children": []
    },
    {
      "level": 2,
      "title": "V1.11.0",
      "slug": "v1-11-0",
      "children": []
    },
    {
      "level": 2,
      "title": "v1.6.2",
      "slug": "v1-6-2",
      "children": [
        {
          "level": 3,
          "title": "Bug Fixes",
          "slug": "bug-fixes",
          "children": []
        },
        {
          "level": 3,
          "title": "Features",
          "slug": "features",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "v1.6.1",
      "slug": "v1-6-1",
      "children": [
        {
          "level": 3,
          "title": "Bug Fixes",
          "slug": "bug-fixes-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Build System",
          "slug": "build-system",
          "children": []
        },
        {
          "level": 3,
          "title": "Features",
          "slug": "features-1",
          "children": []
        },
        {
          "level": 3,
          "title": "BREAKING CHANGES",
          "slug": "breaking-changes",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "v1.5.4-期望版本",
      "slug": "v1-5-4-期望版本",
      "children": []
    },
    {
      "level": 2,
      "title": "v1.5.3",
      "slug": "v1-5-3",
      "children": [
        {
          "level": 3,
          "title": "未解决bug",
          "slug": "未解决bug",
          "children": []
        },
        {
          "level": 3,
          "title": "需优化",
          "slug": "需优化",
          "children": []
        },
        {
          "level": 3,
          "title": "解决的bug",
          "slug": "解决的bug",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "v1.3.3",
      "slug": "v1-3-3",
      "children": []
    },
    {
      "level": 2,
      "title": "v1.3.2",
      "slug": "v1-3-2",
      "children": []
    },
    {
      "level": 2,
      "title": "提交bug",
      "slug": "提交bug",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 51445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bug_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/issue/bug.html.vue?vue&type=template&id=c9dc6f52

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="最近更新" tabindex="-1"><a class="header-anchor" href="#最近更新" aria-hidden="true">#</a> 最近更新</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这里记录Aurora主题最新更新的内容，你可以在这里查看，新增功能和修复bug</p></div><h2 id="v1-12-0" tabindex="-1"><a class="header-anchor" href="#v1-12-0" aria-hidden="true">#</a> V1.12.0</h2><ol><li><p>修改首页文章列表的样式，最终展示如下</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212160136329" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212160136329.png?x-oss-process=style/pictureProcess1" data="aurora"></p></li><li><p>统一全局颜色，对全局的hover激活的颜色和背景色等做了统一，你需要在<code>docs/.vuepress/styles/index.css</code>文件中，重新修改这些颜色变量，即可</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token comment">/*鼠标移动到某个需要hover的标签上得颜色*/</span>
    <span class="token property">--aurora-global-active-color</span><span class="token punctuation">:</span> #8186d5<span class="token punctuation">;</span>

     <span class="token comment">/*激活状态的背景色*/</span>
    <span class="token property">--aurora-global-active-bg</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>198<span class="token punctuation">,</span> 203<span class="token punctuation">,</span> 239<span class="token punctuation">,</span> .4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
     <span class="token comment">/*处于当前页数的分页背景色*/</span>
    <span class="token property">--aurora-pagination-active-bg</span><span class="token punctuation">:</span> #b2f7ef<span class="token punctuation">;</span>

     <span class="token comment">/*处于当前页数的分页字体颜色*/</span>
    <span class="token property">--aurora-pagination-active-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>

     <span class="token comment">/*没有处于当前页数的分页背景色*/</span>
    <span class="token property">--aurora-pagination-bg</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> .8<span class="token punctuation">)</span><span class="token punctuation">;</span>

         <span class="token comment">/*没有处于当前页数的分页字体颜色*/</span>
    <span class="token property">--aurora-pagination-color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>

     <span class="token comment">/*首页文章置顶背景色*/</span>
    <span class="token property">--aurora-page-top-bg</span><span class="token punctuation">:</span> #00cfc8<span class="token punctuation">;</span>

     <span class="token comment">/*首页文章置顶颜色*/</span>
    <span class="token property">--aurora-page-top-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li><li><p>侧边栏头像下方的文字，我没有使用<code>logoTitle</code>值了，因为logo那里就可以看到这个值，再在这里使用，就感觉有点多余。</p><blockquote><p>现在使用<code>sidebarDesc</code>此项作为配置，你可以写一段描述自己的语句，如</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">sidebarDesc</span><span class="token operator">:</span> <span class="token string">&#39;喜欢动漫，Coding目前是一名大三学生,CS专业,坐标西南边陲&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211212161157644" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211212161157644.png?x-oss-process=style/pictureProcess1" data="aurora"></p></li><li><p>增加自定义文章置顶文字</p><blockquote><p>配置项为<code>homeTopText</code>，如</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">homeTopText</span><span class="token operator">:</span> <span class="token string">&#39;置顶&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote></li></ol><h2 id="v1-11-1" tabindex="-1"><a class="header-anchor" href="#v1-11-1" aria-hidden="true">#</a> V1.11.1</h2><p>该版本都是bug修复，主要修复当在<code>config.js</code>内，设置<code>base</code>项后，使用本地图片等失效问题</p><ol><li><p>修复音乐播放器歌曲图片未显示</p></li><li><p>修复点击最新文章，页面刷新</p></li><li><p>赞赏页面，使用爱发电作为赞赏链接</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">afDianUrl</span><span class="token operator">:</span> <span class="token string">&#39;https://afdian.net/@qsyyke&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>....</p></li></ol><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211208172515504" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211208172515504.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="v1-11-0" tabindex="-1"><a class="header-anchor" href="#v1-11-0" aria-hidden="true">#</a> V1.11.0</h2><ol><li><p>修复相册页面未对齐</p></li><li><p>增加自定义随机一言接口</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">randomSayApi</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">urlApi</span><span class="token operator">:</span> <span class="token string">&#39;https://v1.hitokoto.cn/?encode=text&amp;c=a&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>为音乐播放器增加禁用空格键</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//在这里配置插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;player&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
    			<span class="token literal-property property">disableSpace</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//禁用空格键</span>
                <span class="token comment">//网易云单个歌单id</span>
                <span class="token literal-property property">songIds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;29723011&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1887893189&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1421069053&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ol><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211208172618954" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211208172618954.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="v1-6-2" tabindex="-1"><a class="header-anchor" href="#v1-6-2" aria-hidden="true">#</a> v1.6.2</h2><h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>修复首页文章列表一级标题，二级标题，三级标题等，出现#符号问题</li><li>修复友情链接页面图片和描述不匹配问题</li><li>修复关于页面，社交图片中，需要展示二维码等图片，部分被隐藏的问题</li></ul><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><ul><li>主题不再提供/photo路由，改由coze插件提供，该/photo使用说说的图片数据</li><li>主题所有的文本配置，比如公告，友情链接的message，都支持html，高度自定义</li><li>主题支持自定义导航图标，详细看文档aurora.xcye.xyz</li></ul><h2 id="v1-6-1" tabindex="-1"><a class="header-anchor" href="#v1-6-1" aria-hidden="true">#</a> v1.6.1</h2><h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>修复coze插件默认注册界面，输入框不对齐情况</li><li>修复leanCloud中有Talk类，但是没有数据情况下，不能编写说说问题</li><li>修复快速点赞，数据加减错误问题</li><li>修复侧边栏目录，不能获取到标题url问题</li><li>修复文章链接在在新标签中打开，图片失效问题</li></ul><h3 id="build-system" tabindex="-1"><a class="header-anchor" href="#build-system" aria-hidden="true">#</a> Build System</h3><ul><li>把主题文件夹移到docs同级，原来的docs/.vuepress/theme还存在，但是代码不在改变</li></ul><h3 id="features-1" tabindex="-1"><a class="header-anchor" href="#features-1" aria-hidden="true">#</a> Features</h3><ul><li>使用coze插件可以自定义注册，登录，登出等，除了默认提供的插件，额外提供的一个全局组件</li><li>其他用户也可以在你博客发布说说，但需要允许，默认关闭</li><li>说说功能使用插件实现</li></ul><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> BREAKING CHANGES</h3><p>主题的目录被改变，如果你是以前克隆仓库的，需要克隆最新版，并且主题github仓库移到vuepress-aurora组织下</p><h2 id="v1-5-4-期望版本" tabindex="-1"><a class="header-anchor" href="#v1-5-4-期望版本" aria-hidden="true">#</a> v1.5.4-期望版本</h2><ul><li>Feature</li><li>[ ] 支持在线编写说说功能</li></ul><h2 id="v1-5-3" tabindex="-1"><a class="header-anchor" href="#v1-5-3" aria-hidden="true">#</a> v1.5.3</h2><h3 id="未解决bug" tabindex="-1"><a class="header-anchor" href="#未解决bug" aria-hidden="true">#</a> 未解决bug</h3><ul><li>[x] 文章目录，如果有四级标题，滚动的时候，样式会失效</li><li>[x] 文章目录，点击某个二级标题，三级标题，会出现不会跳转到该标题附近</li><li>[ ] 全局组件<code>AuroraGlobal.vue</code>存在滚动动画问题</li></ul><h3 id="需优化" tabindex="-1"><a class="header-anchor" href="#需优化" aria-hidden="true">#</a> 需优化</h3><ul><li>[x] 顶部导航栏文字字体颜色不对</li></ul><h3 id="解决的bug" tabindex="-1"><a class="header-anchor" href="#解决的bug" aria-hidden="true">#</a> 解决的bug</h3><ul><li>[x] 修复全局组件<code>AuroraGlobal.vue</code>组件样式</li><li>[x] 修复<code>safari</code>浏览器侧边栏模糊</li><li>[x] 修复<code>/link</code>友情链接页面，logo与url不对应问题</li><li>[x] 修复标签分页</li></ul><h2 id="v1-3-3" tabindex="-1"><a class="header-anchor" href="#v1-3-3" aria-hidden="true">#</a> v1.3.3</h2><p>该版本为部分bug解决和功能增加</p><p>详细请查看<a href="https://github.com/qsyyke/vuepress-theme-aurora/releases/tag/v1.3.3">V1.3.3</a></p><p>从该版本开始，主题commit message将完全按照<code>angular</code>规范进行提交</p><h2 id="v1-3-2" tabindex="-1"><a class="header-anchor" href="#v1-3-2" aria-hidden="true">#</a> v1.3.2</h2><p>该版本目前已知的bug有</p><ul><li><p>1.运行<code>npm run build</code>命令，当build成功之后，并不会自动退出，需要手动<code>ctrl c</code>才能退出build过程，如果你会配置<code>webpack</code>，应该可以解决这个问题</p></li><li><p>2.站点在<code>ipad</code>上，或者一些平板上，会出现logo和文字被挤在一起的情况，像下图这样</p><details class="custom-container details"><summary>查看</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211013103447635" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211013103447635.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details></li><li><p>3.在<code>ipad</code>或者某些电脑上，文章等顶部图片会显得特别大(<code>顶部图片高度使用vh，所以会出现这个问题</code>)，这个问题主要存在于部分iPad和电脑</p><details class="custom-container details"><summary>view</summary><p>​ <img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211013104423679" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211013104423679.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211013104450699" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211013104450699.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details></li><li><p>4.在某些ipad或者电脑上，首页文章图片会显得很小，影响美观，像下图一样</p><details class="custom-container details"><summary>view</summary><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211013104220662" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211013104220662.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details></li><li><p>5.友情链接，标签等页面，刷新会出现404，对于相册页面，如果进入该页面，在刷新，会出现404问题(<code>这些页面使用动态路由，所以就出现这种情况</code>)</p><details class="custom-container details"><summary>view</summary><p>​ <img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211013104857123" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211013104857123.png?x-oss-process=style/pictureProcess1" data="aurora"></p></details></li></ul><p>​</p><ul><li>6.在火狐浏览器上访问站点，首页侧边栏，和文章列表，会出现滚动条</li></ul><h2 id="提交bug" tabindex="-1"><a class="header-anchor" href="#提交bug" aria-hidden="true">#</a> 提交bug</h2><blockquote><p>如果你在使用此主题的过程中，还遇到其他的bug，那么欢迎在此页面留言或者到github提交issue</p></blockquote><p><a target="_blank" href="https://github.com/qsyyke/vuepress-theme-aurora/issues">Github Issue</a></p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/issue/bug.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const bug_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=747.app.js.map