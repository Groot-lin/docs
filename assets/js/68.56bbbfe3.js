(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{494:function(s,a,t){"use strict";t.r(a);var n=t(2),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("JMM规定的是一个规范，通过规范定义了程序中各个变量的访问方式")]),s._v(" "),a("p",[s._v("围绕着原子性、有序性、可见性三点展开")]),s._v(" "),a("h2",{attrs:{id:"一-原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-原子性"}},[s._v("#")]),s._v(" 一.原子性")]),s._v(" "),a("h3",{attrs:{id:"_1-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题"}},[s._v("#")]),s._v(" 1.问题")]),s._v(" "),a("p",[s._v("两个线程对静态变量ｉ进行分别自增5000次和自减5000次")]),s._v(" "),a("p",[s._v("结果不一定为0")]),s._v(" "),a("h3",{attrs:{id:"_2-分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分析"}},[s._v("#")]),s._v(" 2.分析")]),s._v(" "),a("p",[s._v("在JMM中,完成静态变量的自增自减需要在"),a("strong",[s._v("主存和线程内存中进行数据交换")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/JMM1.png",alt:"image-20230930152646612"}})]),s._v(" "),a("h3",{attrs:{id:"_3-解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决"}},[s._v("#")]),s._v(" 3.解决")]),s._v(" "),a("p",[s._v("Java保证原子性-synchronized")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("唯一对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    原子性操作"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"二-可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-可见性"}},[s._v("#")]),s._v(" 二.可见性")]),s._v(" "),a("h3",{attrs:{id:"_1-问题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题-2"}},[s._v("#")]),s._v(" 1.问题")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("运行以上代码,mian线程对静态变量run的修改会导致t线程并不可见,从而使t线程一直运行")]),s._v(" "),a("h3",{attrs:{id:"_2-分析-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分析-2"}},[s._v("#")]),s._v(" 2.分析")]),s._v(" "),a("ol",[a("li",[s._v("初始状态,他线程刚开始从主内存读取了run的值到工作内存")]),s._v(" "),a("li",[s._v("因为t线程要频繁从主内存中读取run的值,JIT编译器会将run的值缓存至自己工作内存中的告诉缓存中,减少对主内存中run的访问,提高效率")]),s._v(" "),a("li",[s._v("1秒之后,main1线程修改了run的值,并同步到主存,而t是从自己工作内存中的高速缓存中读取这个变量的值,永远是旧值")])]),s._v(" "),a("h3",{attrs:{id:"_3-解决-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决-2"}},[s._v("#")]),s._v(" 3.解决")]),s._v(" "),a("p",[s._v("在变量前加上"),a("strong",[s._v("volatile")]),s._v("关键字,适合一个写线程,多个读线程")]),s._v(" "),a("p",[s._v("特性")]),s._v(" "),a("ul",[a("li",[s._v("不保证原子性")]),s._v(" "),a("li",[s._v("保证可见性")]),s._v(" "),a("li",[s._v("禁止指令重排")])]),s._v(" "),a("p",[s._v("但是如果在while中加上")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("语句则t线程会读到run")]),s._v(" "),a("p",[s._v("因为println方法中加上了synchronized关键字")]),s._v(" "),a("p",[s._v("该关键字会强制读取主存中的值")]),s._v(" "),a("h2",{attrs:{id:"三-有序性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-有序性"}},[s._v("#")]),s._v(" 三.有序性")]),s._v(" "),a("h3",{attrs:{id:"_1-问题-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题-3"}},[s._v("#")]),s._v(" 1.问题")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" ready "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线程一执行方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("actor1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("I_Result")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ready"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("r1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("r1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线程二执行方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("actor2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("I_Result")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ready "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"_2-分析-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分析-3"}},[s._v("#")]),s._v(" 2.分析")]),s._v(" "),a("p",[s._v("I_Result是一个对象，有一个属性r1用来保存结果，问，可能的结果有几种?\n情况如下:")]),s._v(" "),a("ul",[a("li",[s._v("情况1:线程1先执行，这时ready = false，所以进入else分支结果为1")]),s._v(" "),a("li",[s._v("情况2∶线程2先执行num=2，但没来得及执行ready = true，线程1执行，还是进入 else分支，结果为1")]),s._v(" "),a("li",[s._v("情况3∶线程2执行到ready = true，线程1执行，这回进入if分支，结果为4(因为mum已经执行过了)")])]),s._v(" "),a("p",[a("strong",[s._v("但还有一种情况是0")]),s._v("\n这种情况下是:线程2执行ready = true，切换到线程1，进入 if分支，相加为o，再切回线程2执行num=2")]),s._v(" "),a("p",[s._v("这种情况叫"),a("strong",[s._v("指令重排")])]),s._v(" "),a("h3",{attrs:{id:"_3-解决-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决-3"}},[s._v("#")]),s._v(" 3.解决")]),s._v(" "),a("p",[s._v("使用"),a("strong",[s._v("volatile")]),s._v("关键字")])])}),[],!1,null,null,null);a.default=r.exports}}]);