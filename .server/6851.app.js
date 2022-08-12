"use strict";
exports.id = 6851;
exports.ids = [6851];
exports.modules = {

/***/ 3093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-71767b85",
  "path": "/footer.html",
  "title": "页脚设置",
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
      "title": "组件设置",
      "slug": "组件设置",
      "children": []
    },
    {
      "level": 2,
      "title": "组件代码",
      "slug": "组件代码",
      "children": []
    },
    {
      "level": 2,
      "title": "覆盖主题样式配置",
      "slug": "覆盖主题样式配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 32566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/footer.html.vue?vue&type=template&id=7097d435



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="页脚设置" tabindex="-1"><a class="header-anchor" href="#页脚设置" aria-hidden="true">#</a> 页脚设置</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>页脚 组件位置<code>docs/.vuepress/theme/lib/client/components/global/Footer.vue</code></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831151827669" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831151827669.png?x-oss-process=style/pictureProcess1" data="aurora"></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">isShowFooter</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#是否展示页脚，如果你自己使用Footer.vue组件，此项没用</span>

<span class="token comment">#页脚显示，以HTML的形式显示 并且首页只显示此数组中的两项，只显示两项</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> Copyright © by qsyyke All Rights Reserved.
  <span class="token punctuation">-</span> Theme &lt;a href=&quot;https<span class="token punctuation">:</span>//www.cco.vin&quot;<span class="token punctuation">&gt;</span>ccds&lt;/a<span class="token punctuation">&gt;</span> by qsyyke
  <span class="token punctuation">-</span> <span class="token string">&quot;&lt;a target=&#39;_blank&#39; href=&#39;http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53060202000142&#39; style=&#39;display:inline-block;text-decoration:none;height:20px;line-height:20px;&#39;&gt;&lt;img src=&#39;&#39; style=&#39;float:left;&#39;/&gt;&lt;p style=&#39;float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;&#39;&gt;滇公网安备 53060202000142号&lt;/p&gt;&lt;/a&gt;&quot;</span>

<span class="token comment">#是否展示运行时间 默认为true</span>
<span class="token key atrule">isShowRunTime</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> 

<span class="token comment">#开始时间</span>
<span class="token key atrule">startRunTime</span><span class="token punctuation">:</span> 8/7/2021 12<span class="token punctuation">:</span><span class="token datetime number">22:00</span>
<span class="token comment">#运行时间前缀</span>
<span class="token key atrule">prefixRuntime</span><span class="token punctuation">:</span> 小破站已运行
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//页脚信息，支持HTML，这是一个数组</span>
        <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Copyright © by qsyyke All Rights Reserved.&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;a target=&#39;_blank&#39; href=&#39;http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53060202000142&#39; style=&#39;display:inline-block;text-decoration:none;height:20px;line-height:20px;&#39;&gt;&lt;img src=&#39;&#39; style=&#39;float:left;&#39;/&gt;&lt;p style=&#39;float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;&#39;&gt;滇公网安备 53060202000142号&lt;/p&gt;&lt;/a&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;a href=&#39;https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral&#39;&gt;本网站由&lt;img style=&#39;height: 24.1px;width: 55.3px;&#39; src=&#39;https://ooszy.cco.vin/img/blog-note/%E5%8F%88%E6%8B%8D%E4%BA%91_logo5.png?x-oss-process=style/pictureProcess1&#39;&gt;提供CDN加速服务&lt;/a&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">//是否显示页脚，控制全局</span>
        <span class="token literal-property property">isShowFooter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">//是否显示主题信息在页脚，为false关闭</span>
        <span class="token literal-property property">isShowThemeCopyright</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

        <span class="token comment">//是否展示运行时间</span>
        <span class="token literal-property property">isShowRunTime</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">//网站开始时间，请按照以下格式进行</span>
        <span class="token literal-property property">startRunTime</span><span class="token operator">:</span> <span class="token string">&quot;8/7/2021 12:22:00&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">//网站运行时间前缀</span>
        <span class="token literal-property property">prefixRuntime</span><span class="token operator">:</span> <span class="token string">&quot;小破站已运行&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="组件设置" tabindex="-1"><a class="header-anchor" href="#组件设置" aria-hidden="true">#</a> 组件设置</h2><p>因为Footer.vue是一个全局组件，可以直接使用</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token attr-name">:theme-property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themeProperty<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-home</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>frontmatter.home<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:is-show-footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShowFooter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Footer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>theme-property主题配置</li><li>is-home是否为首页，决定页脚展示效果</li><li>is-show-footer 是否展示页脚</li></ul><p>如果需要修改运行多少天等等，需要修改代码，在<code>Footer.vue</code>中</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>runTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prefixRuntime <span class="token operator">+</span> <span class="token constant">A</span> <span class="token operator">+</span> <span class="token string">&quot;天&quot;</span> <span class="token operator">+</span> <span class="token constant">B</span> <span class="token operator">+</span> <span class="token string">&quot;小时&quot;</span> <span class="token operator">+</span> <span class="token constant">C</span> <span class="token operator">+</span> <span class="token string">&quot;分&quot;</span> <span class="token operator">+</span> <span class="token constant">D</span> <span class="token operator">+</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="组件代码" tabindex="-1"><a class="header-anchor" href="#组件代码" aria-hidden="true">#</a> 组件代码</h2><p><strong>Footer.vue</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-page-parent<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!isHome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShowFooter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\$store.state.borderRadiusStyle + \$store.state.opacityStyle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c-page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FooterItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in footerArr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FooterItem</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShowRunTime<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token punctuation">&gt;</span></span>{{runTime}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isHome<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home-footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footerArr[0]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footerArr[1]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>FooterItem.vue</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="覆盖主题样式配置" tabindex="-1"><a class="header-anchor" href="#覆盖主题样式配置" aria-hidden="true">#</a> 覆盖主题样式配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/style.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`覆盖主题样式配置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("覆盖主题样式配置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/footer.html.vue?vue&type=template&id=7097d435

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/footer.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const footer_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=6851.app.js.map