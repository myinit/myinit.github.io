(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{391:function(t,e,a){"use strict";a.r(e);var s=a(42),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适配"}},[t._v("#")]),t._v(" 适配")]),t._v(" "),a("p",[t._v("Flutter借鉴的是React思想，使用的是Widget组件")]),t._v(" "),a("p",[t._v("本文只写"),a("code",[t._v("官网很难找到")]),t._v("或者"),a("code",[t._v("官网压根没有的")]),t._v("Fluter日常踩坑。")]),t._v(" "),a("h3",{attrs:{id:"静态文件引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态文件引入"}},[t._v("#")]),t._v(" 静态文件引入")]),t._v(" "),a("ol",[a("li",[t._v("打开根目录中的"),a("code",[t._v("pubspec.yaml")]),t._v("文件"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 配置 assets\n\nassets:\n- assets/images/xxx.jpg\n")])])])]),t._v(" "),a("li",[t._v("在Widget中使用即可"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Image.asset('assets/images/xxx.jpg',\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"屏幕适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#屏幕适配"}},[t._v("#")]),t._v(" 屏幕适配")]),t._v(" "),a("ol",[a("li",[t._v("打开根目录中的"),a("code",[t._v("pubspec.yaml")]),t._v("文件\n"),a("blockquote",[a("p",[t._v("添加 flutter_screenutil 插件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dependencies:\n    flutter:\n        sdk: flutter\n    flutter_screenutil: ^0.4.2\n")])])])]),t._v(" "),a("li",[t._v("在所有的使用处引入插件（肯定的咯）"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter_screenutil/flutter_screenutil.dart';\n")])])])]),t._v(" "),a("li",[t._v("在"),a("code",[t._v("MaterialApp")]),t._v("的"),a("code",[t._v("home")]),t._v("的Widget中确认设计稿宽高\n"),a("blockquote",[a("p",[t._v("拟定宽高 width=750; height=1334;")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// Widget build(BuildContext context) { 后面添加\n\nScreenUtil.instance = ScreenUtil(width: 750, height: 1334)..init(context);\n")])])])]),t._v(" "),a("li",[t._v("使用"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" width: ScreenUtil().setWidth(750)\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"字体适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体适配"}},[t._v("#")]),t._v(" 字体适配")]),t._v(" "),a("blockquote",[a("p",[t._v("适配方案大致同上，略有不同")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    ScreenUtil().setSp(28)\n")])])]),a("h3",{attrs:{id:"颜色使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色使用"}},[t._v("#")]),t._v(" 颜色使用")]),t._v(" "),a("ul",[a("li",[t._v("自带颜色 "),a("code",[t._v("Colors.red")])]),t._v(" "),a("li",[t._v("自义颜色 "),a("code",[t._v("Color(0xFF333333)")]),t._v(" "),a("ul",[a("li",[t._v("0xFF表示透明度16进制， 之后的333333代表RGB色值")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);