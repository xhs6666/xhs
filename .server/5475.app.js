"use strict";
exports.id = 5475;
exports.ids = [5475];
exports.modules = {

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-a04945b4",
  "path": "/learn/markdown.html",
  "title": "Markdown",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "语法扩展",
      "slug": "语法扩展",
      "children": [
        {
          "level": 3,
          "title": "内置",
          "slug": "内置",
          "children": []
        },
        {
          "level": 3,
          "title": "标题锚点",
          "slug": "标题锚点",
          "children": []
        },
        {
          "level": 3,
          "title": "链接",
          "slug": "链接",
          "children": []
        },
        {
          "level": 3,
          "title": "Emoji 🎉",
          "slug": "emoji",
          "children": []
        },
        {
          "level": 3,
          "title": "目录",
          "slug": "目录",
          "children": []
        },
        {
          "level": 3,
          "title": "代码块",
          "slug": "代码块",
          "children": []
        },
        {
          "level": 3,
          "title": "导入代码块",
          "slug": "导入代码块",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "在 Markdown 中使用 Vue",
      "slug": "在-markdown-中使用-vue",
      "children": [
        {
          "level": 3,
          "title": "模板语法",
          "slug": "模板语法",
          "children": []
        },
        {
          "level": 3,
          "title": "组件",
          "slug": "组件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "注意事项",
      "slug": "注意事项",
      "children": [
        {
          "level": 3,
          "title": "已废弃的 HTML 标签",
          "slug": "已废弃的-html-标签",
          "children": []
        }
      ]
    }
  ],
  "git": {}
}


/***/ }),

/***/ 33873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ markdown_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/learn/markdown.html.vue?vue&type=template&id=eb21e33c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_Badge = (0,external_vue_.resolveComponent)("Badge")

  _push(`<!--[--><h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h1><p>在阅读本章节之前，请确保你已经对 Markdown 有所了解。如果你还不了解 Markdown ，请先学习一些 <a href="https://commonmark.org/help/" target="_blank" rel="noopener noreferrer">Markdown 教程`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>。</p><h2 id="语法扩展" tabindex="-1"><a class="header-anchor" href="#语法扩展" aria-hidden="true">#</a> 语法扩展</h2><p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 。</p><p>本章节将会介绍 VuePress 内置支持的 Markdown 语法扩展。</p><p>你也可以通过 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown" target="_blank" rel="noopener noreferrer">markdown`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 和 <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#extendsmarkdown" target="_blank" rel="noopener noreferrer">extendsMarkdown`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 来配置这些内置扩展、加载更多 markdown-it 插件、实现你自己的扩展等。</p><h3 id="内置" tabindex="-1"><a class="header-anchor" href="#内置" aria-hidden="true">#</a> 内置</h3><p>由 markdown-it 内置支持：</p><ul><li><a href="https://help.github.com/articles/organizing-information-with-tables/" target="_blank" rel="noopener noreferrer">表格`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> (GFM)</li><li><a href="https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text" target="_blank" rel="noopener noreferrer">删除线`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> (GFM)</li></ul><h3 id="标题锚点" tabindex="-1"><a class="header-anchor" href="#标题锚点" aria-hidden="true">#</a> 标题锚点</h3><p>你可能已经注意到，当你把鼠标放在各个章节的标题上时，会显示出一个 <code>#</code> 锚点。点击这个 <code>#</code> 锚点，可以直接跳转到对应章节。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>标题锚点扩展由 <a href="https://github.com/valeriangalliat/markdown-it-anchor" target="_blank" rel="noopener noreferrer">markdown-it-anchor`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 支持。</p><p>配置参考： `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html#markdown-anchor" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`markdown.anchor`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("markdown.anchor")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><p>在你使用 Markdown 的 <a href="https://spec.commonmark.org/0.29/#link-reference-definitions" target="_blank" rel="noopener noreferrer">链接语法`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 时， VuePress 会为你进行一些转换。</p><p>以我们文档的源文件为例：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>└─ docs
   └─ zh
      ├─ guide
      │  ├─ getting-started.md
      │  ├─ markdown.md    <span class="token comment"># &lt;- 我们在这里</span>
      │  └─ README.md
      ├─ reference
      │  └─ config.md
      └─ README.md
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>原始 Markdown</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 相对路径 --&gt;</span>
<span class="token url">[<span class="token content">首页</span>](<span class="token url">../README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考</span>](<span class="token url">../reference/config.md</span>)</span>  
<span class="token url">[<span class="token content">快速上手</span>](<span class="token url">./getting-started.md</span>)</span>  
<span class="token comment">&lt;!-- 绝对路径 --&gt;</span>
<span class="token url">[<span class="token content">指南</span>](<span class="token url">/zh/guide/README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考 &gt; markdown.links</span>](<span class="token url">/zh/reference/config.md#links</span>)</span>  
<span class="token comment">&lt;!-- URL --&gt;</span>
<span class="token url">[<span class="token content">GitHub</span>](<span class="token url">https://github.com</span>)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>转换为</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/reference/config.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>配置参考<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/guide/getting-started.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>快速上手<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/guide/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>指南<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/reference/config.html#links<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>配置参考 <span class="token entity named-entity" title="&gt;">&amp;gt;</span> markdown.links<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noopener noreferrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>GitHub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OutboundLink</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>渲染为</strong></p><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/" }, {
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
  _push(`<br>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`配置参考`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("配置参考")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<br>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/learn/getting-started.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`快速上手`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("快速上手")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<br>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/zh/guide/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`指南`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("指南")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<br>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/zh/reference/config.html#links" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`配置参考 &gt; markdown.links`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("配置参考 > markdown.links")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<br><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><p><strong>解释</strong></p><ul><li>内部链接会被转换为 <code>&lt;RouterLink&gt;</code> 以便进行 SPA 导航。</li><li>指向 <code>.md</code> 文件的内部链接会被转换为目标页面的 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/learn/page.html#%E8%B7%AF%E7%94%B1" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`路由路径`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("路由路径")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`，并且支持绝对路径和相对路径。</li><li>外部链接会被添加 <code>target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code> 属性和一个 <code>&lt;OutboundLink /&gt;</code> 标记。</li></ul><p><strong>建议</strong></p><p>对于内部链接，尽可能使用相对路径而不是绝对路径。</p><ul><li>相对路径是指向目标文件的有效链接，在你的编辑器或者代码仓库中浏览源文件时也可以正确跳转。</li><li>相对路径在不同 locales 下都是一致的，这样在翻译你的内容时就不需要修改 locale 路径了。</li><li>在使用绝对路径时，如果你站点的 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html#base" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`base`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("base")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 不是 <code>&quot;/&quot;</code>，你需要手动添加 <code>base</code> 或者使用 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/learn/assets.html#base-helper" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`base helper`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("base helper")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 。</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>链接扩展是由我们的内置插件支持的。</p><p>配置参考： `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html#markdown-links" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`markdown.links`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("markdown.links")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><p>参考: `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/components.html#outboundlink" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`內置组件 &gt; OutboundLink`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("內置组件 > OutboundLink")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji 🎉</h3><p>你可以在你的 Markdown 内容中输入 <code>:EMOJICODE:</code> 来添加 Emoji 表情。</p><p>前往 <a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">emoji-cheat-sheet`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 来查看所有可用的 Emoji 表情和对应代码。</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>VuePress 2 已经发布 :tada: ！
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>输出</strong></p><p>VuePress 2 已经发布 🎉 ！</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Emoji 扩展由 <a href="https://github.com/markdown-it/markdown-it-emoji" target="_blank" rel="noopener noreferrer">markdown-it-emoji`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 支持。</p><p>配置参考： `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html#markdown-emoji" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`markdown.emoji`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("markdown.emoji")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><p>如果你想要把当前页面的目录添加到 Markdown 内容中，你可以使用 <code>[[toc]]</code> 语法。</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>[[toc]]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>输出</strong></p><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#语法扩展" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`语法扩展`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("语法扩展")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#内置" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`内置`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("内置")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#标题锚点" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`标题锚点`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("标题锚点")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#链接" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`链接`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("链接")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#emoji" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Emoji 🎉`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Emoji 🎉")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#目录" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`目录`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("目录")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#代码块" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`代码块`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("代码块")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#导入代码块" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`导入代码块`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("导入代码块")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#在-markdown-中使用-vue" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`在 Markdown 中使用 Vue`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("在 Markdown 中使用 Vue")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#模板语法" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`模板语法`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("模板语法")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#组件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`组件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("组件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#注意事项" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`注意事项`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("注意事项")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#已废弃的-html-标签" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`已废弃的 HTML 标签`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("已废弃的 HTML 标签")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul></nav><p>目录中的标题将会链接到对应的 <a href="#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9">标题锚点</a>，因此如果你禁用了标题锚点，可能会影响目录的功能。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>目录扩展是由我们的内置插件支持的，该扩展 Fork 并修改自 <a href="https://github.com/nagaozen/markdown-it-toc-done-right" target="_blank" rel="noopener noreferrer">markdown-it-toc-done-right`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>。</p><p>配置参考： `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html#markdown-toc" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`markdown.toc`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("markdown.toc")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3><p>下列代码块扩展是在 Node 端进行 Markdown 解析的时候实现的。这意味着代码块并不会在客户端被处理。</p><h4 id="行高亮" tabindex="-1"><a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮</h4><p>你可以在代码块添加行数范围标记，来为对应代码行进行高亮：</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>​\`\`\`ts{1,6-8}
import type { UserConfig } from &#39;@vuepress/cli&#39;

export const config: UserConfig = {
  title: &#39;你好， VuePress&#39;,

  themeConfig: {
    logo: &#39;https://vuejs.org/images/logo.png&#39;,
  },
}
\`\`\`
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>输出</strong></p><p>​\`\`\`ts{1,6-8} import type { UserConfig } from &#39;@vuepress/cli&#39;</p><p>export const config: UserConfig = { title: &#39;你好， VuePress&#39;,</p><p>themeConfig: { logo: &#39;https://vuejs.org/images/logo.png&#39;, }, }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
行数范围标记的例子：

- 行数范围： \`{5-8}\`
- 多个单行： \`{4,7,9}\`
- 组合： \`{4,7-13,16,23-27,40}\`

::: tip
行高亮扩展是由我们的内置插件支持的，该扩展 Fork 并修改自  [markdown-it-highlight-lines](https://github.com/egoist/markdown-it-highlight-lines)。

配置参考： [markdown.code.highlightLines](../reference/config.md#markdown-code-highlightlines)
:::

#### 行号

你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。

你可以在代码块添加 \`:line-numbers\` / \`:no-line-numbers\` 标记来覆盖配置项中的设置。

**输入**

\`\`\`\`md
​\`\`\`ts
// 行号默认是启用的
const line2 = &#39;This is line 2&#39;
const line3 = &#39;This is line 3&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span>
</code></pre></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
**输出**

​\`\`\`ts
// 行号默认是启用的
const line2 = &#39;This is line 2&#39;
const line3 = &#39;This is line 3&#39;
\`\`\`

\`\`\`ts:no-line-numbers
// 行号被禁用
const line2 = &#39;This is line 2&#39;
const line3 = &#39;This is line 3&#39;
\`\`\`

::: tip
行号扩展是由我们的内置插件支持的。

配置参考： [markdown.code.lineNumbers](../reference/config.md#markdown-code-linenumbers)
:::

#### 添加 v-pre

由于 [模板语法可以在 Markdown 中使用](#模板语法)，它也同样可以在代码块中生效。

为了避免你的代码块被 Vue 编译， VuePress 默认会在你的代码块添加 [v-pre](https://v3.vuejs.org/api/directives.html#v-pre) 指令。这一默认行为可以在配置中关闭。


你可以在代码块添加 \`:v-pre\` / \`:no-v-pre\` 标记来覆盖配置项中的设置。

::: warning
模板语法的字符有可能会被语法高亮器解析，比如 &quot;Mustache&quot; 语法（即双花括号）。因此，就像下面的例子一样，在某些语言中 \`:no-v-pre\` 可能并不能生效。

如果你无论如何都想在这种语言中使用 Vue 语法，你可以尝试禁用默认的语法高亮，然后在客户端实现你的自定义代码高亮。
:::

**输入**

\`\`\`\`md
​\`\`\`md
&lt;!-- 默认情况下，这里会被保持原样 --&gt;
1 + 2 + 3 = {{ 1 + 2 + 3 }}
\`\`\`

\`\`\`md:no-v-pre
&lt;!-- 这里会被 Vue 编译 --&gt;
1 + 2 + 3 = {{ 1 + 2 + 3 }}
\`\`\`

\`\`\`js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
\`\`\`
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p><strong>输出</strong></p><p>​\`\`\`md</p><p>1 + 2 + 3 = ${(0,server_renderer.ssrInterpolate)(1 + 2 + 3)}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\`\`\`md:no-v-pre
&lt;!-- 这里会被 Vue 编译 --&gt;
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>v-pre 扩展是由我们的内置插件支持的。</p><p>配置参考： `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html#markdown-vpre" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`markdown.code.vPre`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("markdown.code.vPre")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h3 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h3><p>你可以使用下面的语法，从文件中导入代码块：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 最简单的语法 --&gt;</span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果你只想导入这个文件的一部分：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 仅导入第 1 行至第 10 行 --&gt;</span>
@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 指定代码语言 --&gt;</span>
@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>实际上，<code>[]</code> 内的第二部分会被作为代码块标记来处理，因此在上面 <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a> 章节中提到的语法在这里都可以支持：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 行高亮 --&gt;</span>
@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面是一个复杂的例子：</p><ul><li>导入 <code>&#39;../foo.js&#39;</code> 文件的第 3 行至第 10 行</li><li>指定语言为 <code>&#39;js&#39;</code></li><li>对导入代码的第 3 行进行高亮，即 <code>&#39;../foo.js&#39;</code> 文件的第 5 行</li><li>禁用行号</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@<span class="token url">[<span class="token content">code{3-10} js{3}:no-line-numbers</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>需要注意的是，路径别名在导入代码语法中不会生效。你可以通过下面的配置来自行处理路径别名：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">importCode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 会被解析至 &#39;path/to/src/foo.js&#39; --&gt;</span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">@src/foo.js</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>导入代码扩展是由我们的内置插件支持的。</p><p>配置参考： `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/config.html#markdown-importcode" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`markdown.importCode`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("markdown.importCode")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></div><h2 id="在-markdown-中使用-vue" tabindex="-1"><a class="header-anchor" href="#在-markdown-中使用-vue" aria-hidden="true">#</a> 在 Markdown 中使用 Vue</h2><p>这一章节会介绍 Vue 在 Markdown 中一些基本用法。</p><p>可以前往 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/advanced/cookbook/markdown-and-vue-sfc.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Cookbook &gt; Markdown 和 Vue SFC`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Cookbook > Markdown 和 Vue SFC")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 来了解更多内容。</p><h3 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h3><p>我们知道：</p><ul><li>Markdown 中允许使用 HTML。</li><li>Vue 模板语法是和 HTML 兼容的。</li></ul><p>这意味着， Markdown 中允许直接使用 <a href="https://v3.vuejs.org/guide/template-syntax.html" target="_blank" rel="noopener noreferrer">Vue 模板语法`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>。</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>一加一等于： {{ 1 + 1 }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> span: {{ i }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>输出</strong></p><p>一加一等于： ${(0,server_renderer.ssrInterpolate)(1 + 1)}</p><p><!--[-->`)
  ;(0,server_renderer.ssrRenderList)(3, (i) => {
    _push(`<span> span: ${(0,server_renderer.ssrInterpolate)(i)}</span>`)
  })
  _push(`<!--]--></p><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><p>你可以在 Markdown 中直接使用 Vue 组件。</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>这是默认主题内置的 <span class="token code-snippet code keyword">\`&lt;Badge /&gt;\`</span> 组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>演示<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>输出</strong></p><p>这是默认主题内置的 <code>&lt;Badge /&gt;</code> 组件 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Badge, { text: "演示" }, null, _parent))
  _push(`</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>前往 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/components.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`内置组件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("内置组件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 查看所有内置组件。</p><p>前往 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/default-theme/components.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`默认主题 &gt; 内置组件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("默认主题 > 内置组件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 查看默认主题中的所有内置组件。</p></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="已废弃的-html-标签" tabindex="-1"><a class="header-anchor" href="#已废弃的-html-标签" aria-hidden="true">#</a> 已废弃的 HTML 标签</h3><p>已废弃的 HTML 标签默认不允许在 VuePress 的 Markdown 中使用，比如 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center" target="_blank" rel="noopener noreferrer">&lt;center&gt;`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font" target="_blank" rel="noopener noreferrer">&lt;font&gt;`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 等。</p><p>这些标签不会被 Vue 模板编译器识别成原生 HTML 标签。相反，Vue 会尝试将这些标签解析为 Vue 组件，而显然这些组件通常是不存在的。</p><p>你应该尽量避免使用已废弃的 HTML 标签。不过，如果你无论如何都要使用这些标签的话，可以尝试下面两种方法之一：</p><ul><li>添加一个 <a href="https://v3.cn.vuejs.org/api/directives.html#v-pre" target="_blank" rel="noopener noreferrer">v-pre`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 指令来跳过这个元素和它的子元素的编译过程。注意所有的模板语法也都会失效。</li><li>设置 <a href="https://v3.vuejs.org/api/application-config.html#compileroptions" target="_blank" rel="noopener noreferrer">compilerOptions.isCustomElement`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a> 来告诉 Vue 模板编译器不要尝试作为组件来解析它们。 <ul><li>对于 <code>@bundler-webpack</code> ，设置 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/bundler/webpack.html#vue" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`vue.compilerOptions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("vue.compilerOptions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>对于 <code>@bundler-vite</code> ，设置 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/reference/bundler/vite.html#vuepluginoptions" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`vuePluginOptions.template.compilerOptions`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("vuePluginOptions.template.compilerOptions")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/learn/markdown.html.vue?vue&type=template&id=eb21e33c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/learn/markdown.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const markdown_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=5475.app.js.map