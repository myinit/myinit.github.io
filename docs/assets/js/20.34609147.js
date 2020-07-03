(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{375:function(v,_,t){"use strict";t.r(_);var n=t(42),a=Object(n.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"《算法导论》-第三版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《算法导论》-第三版"}},[v._v("#")]),v._v(" 《算法导论》 第三版")]),v._v(" "),t("h3",{attrs:{id:"算法的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法的作用"}},[v._v("#")]),v._v(" 算法的作用")]),v._v(" "),t("blockquote",[t("p",[v._v("算法就是求良解的计算过程")])]),v._v(" "),t("p",[v._v("数据结构是一种"),t("code",[v._v("存储")]),v._v("和"),t("code",[v._v("组织")]),v._v("数据的方式，旨在便于访问和修改。")]),v._v(" "),t("h3",{attrs:{id:"算法的效率问题："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法的效率问题："}},[v._v("#")]),v._v(" 算法的效率问题：")]),v._v(" "),t("p",[v._v("为求解相同的问题而设计的不同算法在效率方面有显著的差别。")]),v._v(" "),t("p",[v._v("拿排序举例，排序 "),t("code",[v._v("n")]),v._v(" 项")]),v._v(" "),t("ul",[t("li",[v._v("插入排序：所花时间大致等于 "),t("code",[v._v("cn^2")])]),v._v(" "),t("li",[v._v("并归排序：所花时间大致等于 "),t("code",[v._v("cnlgn")])])]),v._v(" "),t("p",[v._v("其中 "),t("code",[v._v("c")]),v._v(" 为不依赖 "),t("code",[v._v("n")]),v._v(" 的常数当 n = 1000 时， lgn 大致为 10，当 n 等于 100万 时，lgn 大致为 20。对于小规模的排序：插入排序通常比并归排序要快，超过一定点，并归排序更快。")]),v._v(" "),t("h3",{attrs:{id:"分治策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分治策略"}},[v._v("#")]),v._v(" 分治策略")]),v._v(" "),t("ol",[t("li",[v._v("分解：分解成多个子问题")]),v._v(" "),t("li",[v._v("解决：分别解决每个子问题")]),v._v(" "),t("li",[v._v("合并: 将解决的结果合并")])]),v._v(" "),t("p",[v._v("举例：一段时间（n天）内做一次股票交易怎样获益最大？也就是获取一个数组中值相加最大的子数组")]),v._v(" "),t("p",[v._v("解法1：暴力解决")]),v._v(" "),t("ol",[t("li",[v._v("只要卖出日期在买入日期之后即可，n天共有 "),t("code",[v._v("n^2")]),v._v(" 种组合")])]),v._v(" "),t("p",[v._v("解法2：分治策略")]),v._v(" "),t("ol",[t("li",[v._v("获取数组的中点 "),t("code",[v._v("n/2")]),v._v(" （n/2需要取整）")]),v._v(" "),t("li",[v._v("分解：一共 3 种情况\n"),t("ol",[t("li",[v._v("子数组在 0 至 n/2 之间（在左边） -> (n^2)/4")]),v._v(" "),t("li",[v._v("子数组在 n/2 至 n 之间（在右边） -> (n^2)/4")]),v._v(" "),t("li",[v._v("子数组在 跨越了中点 n/2（就是在中点两边） -> 2n")])])]),v._v(" "),t("li",[v._v("一共需要 (n^2)/2 + 2n 次计算")])]),v._v(" "),t("h3",{attrs:{id:"算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[v._v("#")]),v._v(" 算法")]),v._v(" "),t("ol",[t("li",[v._v("矩阵的 Strassen 算法")]),v._v(" "),t("li",[v._v("代入法求解递归式")]),v._v(" "),t("li",[v._v("递归树求解递归式")]),v._v(" "),t("li",[v._v("主方法求解递归式")])]),v._v(" "),t("p",[v._v("概率分析 和 随机算法")])])}),[],!1,null,null,null);_.default=a.exports}}]);