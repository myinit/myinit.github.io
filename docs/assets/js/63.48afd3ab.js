(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{431:function(e,s,t){"use strict";t.r(s);var r=t(42),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rxjs学习-之-subject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rxjs学习-之-subject"}},[e._v("#")]),e._v(" RXJS学习 之 Subject")]),e._v(" "),t("blockquote",[t("p",[e._v("Subject是一种特殊类型的Observable，它允许将值多播到许多观察者。")])]),e._v(" "),t("p",[e._v("Subject继承自Observable："),t("code",[e._v("declare class Subject<T> extends Observable<T> implements SubscriptionLike")])]),e._v(" "),t("p",[e._v("Subject和多个Observable订阅不同点：")]),e._v(" "),t("ul",[t("li",[e._v("多个Observable订阅，每个Observable都是独立的")]),e._v(" "),t("li",[e._v("Subject 的状态是统一的")])]),e._v(" "),t("h3",{attrs:{id:"subject-实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subject-实现"}},[e._v("#")]),e._v(" Subject 实现")]),e._v(" "),t("p",[e._v("Subject实现起来就像EventEmitters。")]),e._v(" "),t("p",[t("code",[e._v("Subject")]),e._v("自己实现了"),t("code",[e._v("next、error、complete、subscribe、unsubscribe")]),e._v("其他方法都是继承自"),t("code",[e._v("Observable")]),e._v("的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    var subject = {\n        observers: [],\n        subscribe: function(observer) {\n            this.observers.push(observer)\n        },\n        next: function(value) {\n            this.observers.forEach(o => o.next(value))    \n        },\n        error: function(error){\n            this.observers.forEach(o => o.error(error))\n        },\n        complete: function() {\n            this.observers.forEach(o => o.complete())\n        }\n    }\n")])])]),t("h3",{attrs:{id:"subject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[e._v("#")]),e._v(" Subject")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    import { Subject, from } from \"rxjs\";\n\n    const subject = new Subject();\n\n    // 多个订阅\n    subject.subscribe({\n        next: (v) => console.log('observerA: ' + v)\n    })\n    subject.subscribe({\n        next: (v) => console.log('observerB: ' + v)\n    })\n\n    // Observable\n    var observable = from([1,2,3]);\n\n    // 使用Subject订阅\n    observable.subscribe(subject);\n")])])]),t("h3",{attrs:{id:"behaviorsubject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#behaviorsubject"}},[e._v("#")]),e._v(" BehaviorSubject")]),e._v(" "),t("p",[e._v("在开始订阅时，就尝试获取并使用最后一次发送的元素。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    var subject = new BehaviorSubject(0); // 0 为起始值\n    var observerA = {\n        ...\n    }\n\n    var observerB = {\n        ...\n    }\n\n    subject.subscribe(observerA);\n    subject.next(1);\n    subject.next(2);\n\n    setTimeout(() => {\n        subject.subscribe(observerB); \n        subject.next(3);\n    },3000)\n\n    // 0 1 2\n    // 3秒后 2 3 3\n")])])]),t("h3",{attrs:{id:"replaysubject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replaysubject"}},[e._v("#")]),e._v(" ReplaySubject")]),e._v(" "),t("p",[e._v("使用方法同上，"),t("code",[e._v("ReplaySubject(bufferSize, windowTime)")]),e._v("，一般用来缓存bufferSize个元素")]),e._v(" "),t("h3",{attrs:{id:"asyncsubject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asyncsubject"}},[e._v("#")]),e._v(" AsyncSubject")]),e._v(" "),t("p",[e._v("使用方法同上，AsyncSubject() 只返回最后一个值。类似于"),t("code",[e._v("last()")]),e._v("操作符")]),e._v(" "),t("h3",{attrs:{id:"observable转换subject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#observable转换subject"}},[e._v("#")]),e._v(" Observable转换Subject")]),e._v(" "),t("ul",[t("li",[e._v("multicast：用来挂载 subject，返回具有connect方法的observable\n"),t("ul",[t("li",[e._v("connect() 后才会真的用 subject 订阅")])])]),e._v(" "),t("li",[e._v("refCount：可以建立一个只要有订阅就会自动 connect 的 observable")]),e._v(" "),t("li",[e._v("publish = "),t("code",[e._v("multicast(new Rx.Subject())")])]),e._v(" "),t("li",[e._v("share = "),t("code",[e._v("publish + refCount")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);