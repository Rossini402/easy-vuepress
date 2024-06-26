(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{345:function(s,v,t){"use strict";t.r(v);var _=t(8),a=Object(_.a)({},(function(){var s=this,v=s._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("p",[s._v("本主题遵循“"),v("strong",[s._v("约定优于配置")]),s._v("”原则，如果你想构建一个结构化的站点，需要遵循下面这些约定，约定可以为你省去很多配置，轻松拥有一个结构清晰的站点。")]),s._v(" "),v("p",[s._v("你需要在"),v("code",[s._v("config.js")]),s._v("中有如下配置：")]),s._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// config.js")]),s._v("\nmodule"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sidebar")]),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v("'structuring'")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义")]),s._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),v("p",[s._v("在运行开发服务"),v("code",[s._v("npm run dev")]),s._v("或打包"),v("code",[s._v("npm run build")]),s._v("时主题内部将会按照目录约定自动生成一个结构化的"),v("strong",[s._v("侧边栏、目录页、面包屑等")]),s._v("数据。")]),s._v(" "),v("p",[s._v("在源目录（一般是"),v("code",[s._v("docs")]),s._v("）文件夹中，除了"),v("code",[s._v(".vuepress")]),s._v("、"),v("code",[s._v("@pages")]),s._v("、"),v("code",[s._v("_posts")]),s._v("、"),v("code",[s._v("index.md 或 README.md")]),s._v("之外的"),v("strong",[s._v("文件夹")]),s._v("将会为其生成对应的侧边栏。生成的顺序取自序号，标题取自文件（夹）名称。")]),s._v(" "),v("h3",{attrs:{id:"命名约定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命名约定"}},[s._v("#")]),s._v(" 命名约定")]),s._v(" "),v("ul",[v("li",[s._v("无论是"),v("strong",[s._v("文件")]),s._v("还是"),v("strong",[s._v("文件夹")]),s._v("，请为其名称添加上正确的"),v("strong",[s._v("正整数序号")]),s._v("和"),v("code",[s._v(".")]),s._v("，从"),v("code",[s._v("00")]),s._v("或"),v("code",[s._v("01")]),s._v("开始累计，如"),v("code",[s._v("01.文件夹")]),s._v("、"),v("code",[s._v("02.文件.md")]),s._v("，我们将会按照序号的顺序来决定其在侧边栏当中的顺序。")]),s._v(" "),v("li",[s._v("同一级别目录别内即使只有一个文件或文件夹也要为其加上序号。\n")])]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),v("p",[s._v("序号只是用于决定先后顺序，并不一定需要连着，如"),v("code",[s._v("01、02、03...")]),s._v("，实际工作中可能会在两个文章中间插入一篇新的文章，因此为了方便可以采用间隔序号"),v("code",[s._v("10、20、30...")]),s._v("，后面如果需要在"),v("code",[s._v("10")]),s._v("和"),v("code",[s._v("20")]),s._v("中间插入一篇新文章，可以给定序号"),v("code",[s._v("15")]),s._v("。")])]),s._v(" "),v("h3",{attrs:{id:"级别说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#级别说明"}},[s._v("#")]),s._v(" 级别说明")]),s._v(" "),v("p",[s._v("源目录（一般是"),v("code",[s._v("docs")]),s._v("）底下的级别现在我们称之为"),v("code",[s._v("一级目录")]),s._v("，"),v("code",[s._v("一级目录")]),s._v("的下一级为"),v("code",[s._v("二级目录")]),s._v("，以此类推，最多只能到"),v("code",[s._v("四级目录")]),s._v("。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("一级目录")]),s._v(" "),v("ol",[v("li",[v("code",[s._v(".vuepress")]),s._v("、"),v("code",[s._v("@pages")]),s._v("、"),v("code",[s._v("_posts")]),s._v("、"),v("code",[s._v("index.md 或 README.md")]),s._v(" 这些文件(文件夹)不参与数据生成。")]),s._v(" "),v("li",[s._v("序号非必须。（如一些专栏，可以不用序号)")])])]),s._v(" "),v("li",[v("strong",[s._v("二级目录")]),s._v(" "),v("ol",[v("li",[s._v("该级别下可以同时放文件夹和"),v("code",[s._v(".md")]),s._v("文件，但是两者序号要连贯（参考下面的例子中的"),v("code",[s._v("其他")]),s._v("）。")]),s._v(" "),v("li",[s._v("必须有序号")])])]),s._v(" "),v("li",[v("strong",[s._v("三级目录")]),s._v(" "),v("ul",[v("li",[s._v("(同上)")])])]),s._v(" "),v("li",[v("strong",[s._v("四级目录")]),s._v(" "),v("Badge",{attrs:{text:"v1.6.0 +"}}),s._v(" "),v("ol",[v("li",[s._v("该级别下"),v("strong",[s._v("只能")]),s._v("放"),v("code",[s._v(".md")]),s._v("文件。")]),s._v(" "),v("li",[s._v("必须有序号")])])],1)]),s._v(" "),v("p",[s._v("所有级别内至少有一个文件或文件夹。")]),s._v(" "),v("h3",{attrs:{id:"目录结构例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录结构例子"}},[s._v("#")]),s._v(" 目录结构例子")]),s._v(" "),v("div",{staticClass:"language-html extra-class"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[s._v(".\n├── docs\n│   │  (不参与数据生成)\n│   ├── .vuepress\n│   ├── @pages\n│   ├── _posts\n│   ├── index.md\n│   │\n│   │ (以下部分参与数据生成)\n│   ├── 《JavaScript教程》专栏 (一级目录)\n│   │   ├── 01.章节1 (二级目录)\n│   │   |   ├── 01.js1.md (三级目录-文件)\n│   │   |   ├── 02.js2.md\n│   │   |   └── 03.js3.md\n│   │   └── 02.章节2 (二级目录)\n│   │   |   ├── 01.jsa.md\n│   │   |   ├── 02.小节 (三级目录)\n│   │   |   |   └── 01.jsxx.md (四级目录-文件)\n│   ├── 01.前端\n│   │   ├── 01.JavaScript\n│   │   |   ├── 01.js1.md\n│   │   |   ├── 02.js2.md\n│   │   |   └── 03.js3.md\n│   │   └── 02.vue\n│   │   |   ├── 01.vue1.md\n│   │   |   └── 02.vue2.md\n│   ├── 02.其他\n│   │   ├── 01.学习\n│   │   |   ├── 01.xxa.md\n│   │   |   └── 02.xxb.md\n│   │   ├── 02.学习笔记\n│   │   |   ├── 01.xxa.md\n│   │   |   └── 02.xxb.md\n│   │   ├── 03.文件x.md\n│   │   └── 04.文件xx.md\n│   └── 03.关于我\n│   │   └── 01.关于我.md\n.   .\n")])])]),v("h3",{attrs:{id:"如何知道侧边栏数据有没有正确生成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何知道侧边栏数据有没有正确生成"}},[s._v("#")]),s._v(" 如何知道侧边栏数据有没有正确生成？")]),s._v(" "),v("p",[s._v("在运行开发服务时("),v("code",[s._v("npm run dev")]),s._v(")，在命令行查看打印记录，如果正确生成会有这样的"),v("code",[s._v("绿色")]),s._v("提示记录：")]),s._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[s._v("tip: "),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" sidebar data. 侧边栏数据添加成功。\n")])])]),v("p",[s._v("如果有未按约定的文件，会有"),v("code",[s._v("黄色")]),s._v("警告记录，如：")]),s._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[s._v("warning:  该文件"),v("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("序号出错，请填写正确的序号。\n")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);