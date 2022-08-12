"use strict";
exports.id = 5246;
exports.ids = [5246];
exports.modules = {

/***/ 58006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-659378d3",
  "path": "/page/about.html",
  "title": "关于页面",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "社交",
      "slug": "社交",
      "children": []
    },
    {
      "level": 2,
      "title": "关于列表",
      "slug": "关于列表",
      "children": [
        {
          "level": 3,
          "title": "全部配置",
          "slug": "全部配置",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "标签",
      "slug": "标签",
      "children": []
    },
    {
      "level": 2,
      "title": "bar",
      "slug": "bar",
      "children": []
    },
    {
      "level": 2,
      "title": "友情链接页面配置",
      "slug": "友情链接页面配置",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/page/about.html.vue?vue&type=template&id=38a2c268



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="关于页面" tabindex="-1"><a class="header-anchor" href="#关于页面" aria-hidden="true">#</a> 关于页面</h1><h2 id="社交" tabindex="-1"><a class="header-anchor" href="#社交" aria-hidden="true">#</a> 社交</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20211011163020328" originSrc="https://ooszy.cco.vin/img/blog-note/image-20211011163020328.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>这个需要在<code>socials</code>进行设置，设置和首页一样</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">socials</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="关于列表" tabindex="-1"><a class="header-anchor" href="#关于列表" aria-hidden="true">#</a> 关于列表</h2><p>关于列表是一个一个的</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831194455529" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831194455529.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831194509894" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831194509894.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>在<code>readme.md</code>中，通过<code>about</code>项进行更改，<code>about</code>是一个数组对象，此对象格式有两种形式</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;技  能&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">70</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><table><thead><tr><th>对象名</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>bar</td><td>true or false</td><td>true表示describe数组，以条形的形式展示，否则以li方式显示</td></tr><tr><td>title</td><td>String</td><td>此列表的标题，如我?，技能...</td></tr><tr><td>describe</td><td>数组</td><td>描述</td></tr><tr><td>tag</td><td>数组</td><td>此个人说明项的标签</td></tr><tr><td>showTag</td><td>true or false</td><td>true开启tag,false不会显示tag</td></tr><tr><td>name</td><td>String</td><td>只有bar为true时有效，每个bar的标签</td></tr><tr><td>score</td><td>数组(0-100)</td><td>只有bar为true时有效，每个bar的占比</td></tr></tbody></table><h3 id="全部配置" tabindex="-1"><a class="header-anchor" href="#全部配置" aria-hidden="true">#</a> 全部配置</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">about</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;我?&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;目前是一名大三学生,CS专业,坐标西南边陲&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;喜欢安静,不喜社交&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;喜欢听音乐,什么类型都可&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;喜欢技术,coding&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;目前正在学习java后端&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;最喜欢的电影是&quot;忠犬八公的故事&quot;,梦想以后独居也能有一只&quot;Hachi&quot;&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;主题是我自己开发的，前端太菜了，如果有bug，希望大家多多包涵\`Σ(￣□￣||)\` &quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;有点懒&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;目前除了编程没有什么兴趣爱好&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;正在追的番有《百妖谱》,《致不灭的你》,《少年歌行》,《鬼灭之刃》,《关于我转生变成史莱姆这档事》...&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;喜欢小说，喜欢的作者是--十月流年，最喜欢的小说《至尊修罗》,《一念永恒》,《星辰变》&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;coding&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;社恐&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;番剧&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;电影&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;安静&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;音乐&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;小说&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;宅&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;懒&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;大三规划&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;做项目&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;软考二级&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;英语四级&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;想找实习&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;复习数据结构&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;驾照&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;做点什么有意义的事&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;大家加油呀\`Σ(￣□￣||)\` ...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;未来规划&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;后端工程师&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;赚money&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;忘记过去，展望未来&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;技  能&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HTML5&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">87</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;redis&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">59</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;spring&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;springMVC&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">77</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;springBoot&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token punctuation">{</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;掌握框架&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;spring&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">79</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;springMVC&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">81</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;springBoot&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;mybatis&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;dubbo&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">61</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;掌握技能&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;jetbrains&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">68</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">78</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Ctrl C V&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;关于主题&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;theme-ccds主题是我自己独立开发，是一款基于vuepress，对默认主题进行了大量修改，我以前使用的是wordpress的博客主题，但是我对PHP不了解，想改成自己想要的主题，太难了，最近在学vue，正好看到可以使用vuepress来搭建 博客，就将默认主题改成现在这个样，并且喜欢vuepress的最主要原因是，它可以 直接将本地的markdown文档进行编译部署，我原来博客，我记了几个月的笔记，不太想再慢慢从本地复制到WordPress进行发布，以至于博客几个月没有发布文章了，虽然有技术可以解决，但还是喜欢vuepress，简直是懒癌福音，如果你喜欢的话，可以在我的GitHub进行下载，使用文档可以查看https://theme-ccds.cco.vin，该主题已将所有的配置进行抽离，你现在看到的所有信息，都抽离在了一个配置文件中，但是目前还并不能做到开箱即用，如果使用的人多了，我可以进行修改，并且我自己也写了几个组件，包括文章页面看到的顶部图片，友情链接，海报分享功能等等 ，可以在你想使用的地方，直接使用这些组件就可以，该主题我加入了vuex，对前端不太了解，有很多css不对的地方，请大家多多包涵，Thanks♪(･ω･)ﾉ&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新日志&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;开发永不止步......&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.12 增加相册功能，解决已知bug&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.9 增加海报分享功能&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.5 重新修改文章SEO自动配置，使用新规则，解决从tag页面进入文章页面，懒加载失效问题&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.4 重新初始化仓库&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2.21.8.10 -- 2021.9 主题开发&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;想求个star\`(⌒▽⌒)\`&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;主题后续计划及闲话&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;为说说页面增加随时发布，随时修改功能&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;增加每日计划打卡功能&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831195631982" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831195631982.png?x-oss-process=style/pictureProcess1" data="aurora"></p><p>颜色不支持更改，随机，从<code>randomColor</code>中随机选择</p><h2 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> bar</h2><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20210831195817530" originSrc="http://ooszy.cco.vin/img/blog-note/image-20210831195817530.png?x-oss-process=style/pictureProcess1" data="aurora"></p><h2 id="友情链接页面配置" tabindex="-1"><a class="header-anchor" href="#友情链接页面配置" aria-hidden="true">#</a> 友情链接页面配置</h2><p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/page/friendlink.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`友情链接`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("友情链接")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/page/about.html.vue?vue&type=template&id=38a2c268

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/page/about.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const about_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=5246.app.js.map