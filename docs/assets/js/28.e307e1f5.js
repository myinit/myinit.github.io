(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{387:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dart-基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dart-基本操作"}},[t._v("#")]),t._v(" Dart-基本操作 😕")]),t._v(" "),e("p",[t._v("参考：Dart官网")]),t._v(" "),e("h3",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始 😕")]),t._v(" "),e("blockquote",[e("p",[t._v("Dart中，所有的变量都是对象(包括基础类型)。默认为"),e("code",[t._v("null")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"数字-num"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字-num"}},[t._v("#")]),t._v(" 数字 num 😃")]),t._v(" "),e("p",[t._v("int(整数) 和 double(浮点数) 都是 num 的子类。定义了 "),e("code",[t._v("abs()")]),t._v("、 "),e("code",[t._v("ceil()")]),t._v("、和 "),e("code",[t._v("floor()")]),t._v(" 等 函数。")]),t._v(" "),e("p",[t._v("更多操作参考"),e("code",[t._v("dart:math")]),t._v("库,")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // math库有很多功能\n\n  var random = new math.Random();\n  random.nextDouble(); // 返回 0.0 到 1.0: [0, 1) 之间的数\n  random.nextInt(10);  // 返回 0 到 9. 之间的数\n")])])]),e("h3",{attrs:{id:"字符串-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串-string"}},[t._v("#")]),t._v(" 字符串 String 😗")]),t._v(" "),e("p",[t._v("字符串拼接推荐使用： "),e("code",[t._v("'${x}嘿嘿嘿'")])]),t._v(" "),e("p",[t._v("定义多行字符串推荐使用：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  String s1 = '''\n      You can create\n      multi-line strings like this one.\n    ''';\n")])])]),e("h3",{attrs:{id:"布尔-bool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布尔-bool"}},[t._v("#")]),t._v(" 布尔 bool 😐")]),t._v(" "),e("p",[t._v("Dart是强类型语音，在条件判断中，只支持"),e("code",[t._v("true")]),t._v("和"),e("code",[t._v("false")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // 检查变量是否是空字符串\n  var fullName = '';\n  assert(fullName.isEmpty);\n\n  // 检查对象是否为 0\n  var hitPoints = 0;\n  assert(hitPoints == 0);\n\n  // 检查对象是否为 null\n  var unicorn;\n  assert(unicorn == null);\n\n  // 检查是否 NaN\n  var iMeantToDoThis = 0 / 0;\n  assert(iMeantToDoThis.isNaN);\n")])])]),e("h3",{attrs:{id:"字符串和数字间的转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串和数字间的转换"}},[t._v("#")]),t._v(" 字符串和数字间的转换 😃")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // String -> int  => 1\n  int one = int.parse('1');\n\n  // String -> double   => 1.1\n  double onePointOne = double.parse('1.1');\n\n  // int -> String  => '1'\n  String oneAsString = 1.toString();\n\n  // double -> String  => '3.14'\n  String piAsString = 3.14159.toStringAsFixed(2);\n")])])]),e("h3",{attrs:{id:"list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List 😒")]),t._v(" "),e("p",[t._v("List的用法和JS类似，但是"),e("code",[t._v(".forEach(fn)")]),t._v("和"),e("code",[t._v(".map(fn)")]),t._v("的参数只有value，没有index，"),e("code",[t._v("-_-!")]),t._v(" 炒鸡难受。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  List list = [1, 2, 3];\n  // list.length == 3;\n  // list[1] == 2;\n")])])]),e("h3",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map 😐")]),t._v(" "),e("p",[t._v("Map的用法和JS类似，当然也能 "),e("code",[t._v("new Map()")]),t._v("，可以直接通过"),e("code",[t._v("length")]),t._v("获取长度")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Map gifts = {\n    // Keys      Values\n    'first' : 'partridge',\n    'second': 'turtledoves',\n    'fifth' : 'golden rings'\n  };\n\n  // 取值\n  print(gifts['first'] == 'partridge');\n  \n  // 赋值\n  nobleGases[2] = 'helium';\n\n  // Map可以获取长度\n  print(gifts.length == 2);\n")])])]),e("h3",{attrs:{id:"runes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runes"}},[t._v("#")]),t._v(" Runes 😡")]),t._v(" "),e("p",[t._v("在 Dart 中，runes 代表字符串的 UTF-32 code points。")]),t._v(" "),e("p",[t._v("Unicode 为每一个字符、标点符号、表情符号等都定义了 一个唯一的数值。 由于 Dart 字符串是 UTF-16 code units 字符序列， 所以在字符串中表达 32-bit Unicode 值就需要 新的语法了。")]),t._v(" "),e("p",[e("code",[t._v("- -.!")]),t._v(" 一脸懵逼")]),t._v(" "),e("h3",{attrs:{id:"symbol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol 😐")]),t._v(" "),e("p",[t._v("唯一标识符，同JS。"),e("code",[t._v('const Symbol("unary-")')])]),t._v(" "),e("h3",{attrs:{id:"function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" Function 😕")]),t._v(" "),e("p",[t._v("Dart的Function类似JS的函数。")]),t._v(" "),e("p",[t._v("函数是一等公民对象，可以作为参数使用，也可以赋值给变量。也支持闭包的写法。")]),t._v(" "),e("p",[t._v("如果只有一个表达式， 可以使用"),e("code",[t._v("=>")]),t._v("箭头函数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // => expr 语法是 { return expr; } 的缩写\n\n  bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;\n")])])]),e("p",[t._v("函数的参数有")]),t._v(" "),e("ul",[e("li",[t._v("命名参数"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // 定义\n  enableFlags({bool bold, bool hidden}) {\n    // ...\n  }\n\n  // 使用\n  enableFlags(bold: true, hidden: false);\n")])])])]),t._v(" "),e("li",[t._v("可选位置参数"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  String say(String from, String msg, [String device]) {\n    var result = '$from says $msg';\n    if (device != null) {\n      result = '$result with a $device';\n    }\n    return result;\n  }\n\n  // 使用\n  // say('Bob', 'Howdy') == 'Bob says Howdy'\n  // say('Bob', 'Howdy', 'dog') == 'Bob says Howdy with a dog'\n")])])])]),t._v(" "),e("li",[t._v("默认参数"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  void enableFlags({bool bold = false, bool hidden = false}) {\n    // ...\n  }\n")])])])])]),t._v(" "),e("p",[t._v("在Class章再叙述函数在Class中定义时的特性。")]),t._v(" "),e("h3",{attrs:{id:"操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[t._v("#")]),t._v(" 操作符 😮")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("操作符")]),t._v(" "),e("th",[t._v("解释")]),t._v(" "),e("th",[t._v("举例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("is")]),t._v(" "),e("td",[t._v("如果对象是指定的类型返回 True")]),t._v(" "),e("td",[e("code",[t._v("emp is Person")]),t._v("，当 emp 实现了 Person 的接口，则返回true，否则返回false")])]),t._v(" "),e("tr",[e("td",[t._v("is!")]),t._v(" "),e("td",[t._v("如果对象是指定的类型返回 False")]),t._v(" "),e("td",[t._v("同上")])]),t._v(" "),e("tr",[e("td",[t._v("as")]),t._v(" "),e("td",[t._v("类型转换")]),t._v(" "),e("td",[e("code",[t._v("(emp as Person).firstName = 'Bob';")]),t._v(" 如果emp不是Person类型。则"),e("code",[t._v("as")]),t._v("会抛出异常")])]),t._v(" "),e("tr",[e("td",[t._v("??")]),t._v(" "),e("td",[t._v("类似"),e("code",[t._v("|| (或)")]),t._v("，为"),e("code",[t._v("null")]),t._v("则用后面的值")]),t._v(" "),e("td",[e("code",[t._v("String str => msg ?? 'abc';")])])]),t._v(" "),e("tr",[e("td",[t._v("??=")]),t._v(" "),e("td",[t._v("指定 值为 null 的变量的值")]),t._v(" "),e("td",[e("code",[t._v("b ??= value;")]),t._v("，如果 b 是 null，则赋值给 b；如果不是 null，则 b 的值保持不变")])]),t._v(" "),e("tr",[e("td",[t._v("?.")]),t._v(" "),e("td",[t._v("条件成员访问")]),t._v(" "),e("td",[t._v("和 . 类似，例如 "),e("code",[t._v("foo?.bar")]),t._v(" 如果 foo 为 null 则返回 null，否则返回 bar 成员")])]),t._v(" "),e("tr",[e("td",[t._v("..")]),t._v(" "),e("td",[t._v("连级操作符")]),t._v(" "),e("td",[t._v("见下文")])])])]),t._v(" "),e("p",[t._v("连级操作符使用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  querySelector('#button') // Get an object.\n    ..text = 'Confirm'   // Use its members.\n    ..classes.add('important')\n    ..onClick.listen((e) => window.alert('Confirmed!'));\n")])])]),e("h3",{attrs:{id:"枚举"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[t._v("#")]),t._v(" 枚举 😐")]),t._v(" "),e("p",[t._v("枚举：用来表现一个固定 数目的常量。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  enum Color {\n    red,\n    green,\n    blue\n  }\n\n  // 枚举的使用\n  Color aColor = Color.blue;\n\n  // 获取全部枚举值\n  List<Color> colors = Color.values;\n\n  // 每个枚举都有对应的 index\n  print(Color.red.index == 0);\n")])])]),e("h3",{attrs:{id:"end"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" End 😦")]),t._v(" "),e("p",[t._v("基础篇结束，下一篇：Dart-类(Class)")])])}),[],!1,null,null,null);a.default=n.exports}}]);