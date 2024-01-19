(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{489:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-aop是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-aop是什么"}},[t._v("#")]),t._v(" 一.AOP是什么")]),t._v(" "),a("p",[t._v("AOP, 即 Aspect Oriented Programming")]),t._v(" "),a("p",[t._v("面向切面编程,是面向对象编程OOP的升华")]),t._v(" "),a("p",[t._v("横向对不同事物的抽象")]),t._v(" "),a("p",[t._v("比如属性的属性,方法的方法,对象的对象都可以组成一个切面")]),t._v(" "),a("p",[t._v("这么说有点抽象")]),t._v(" "),a("p",[t._v("本人的理解就是对原来的属性方法对象做增强扩展操作")]),t._v(" "),a("h3",{attrs:{id:"_1-aop思想的实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-aop思想的实现方案"}},[t._v("#")]),t._v(" 1.AOP思想的实现方案")]),t._v(" "),a("p",[t._v("动态代理技术,在运行期间,对目标对象的方法进行增强")]),t._v(" "),a("p",[t._v("代理对象同名方法内可以执行原有逻辑的同时")]),t._v(" "),a("p",[t._v("嵌入其他增强逻辑或其他对象的方法")]),t._v(" "),a("p",[t._v("假设有一个类A")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodA1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodA2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodA3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("现在我们想不改变原有A执行逻辑的基础上增加一些操作")]),t._v(" "),a("p",[t._v("首先定义一个类B")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodB1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodB2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("而后我们就得到一个A的Proxy代理对象")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodA1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodB1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//原有逻辑......")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodB2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("最后程序对象直接调用Porxy对象就行")]),t._v(" "),a("p",[t._v("经典的AOP应用有 :")]),t._v(" "),a("ul",[a("li",[t._v("日志记录")]),t._v(" "),a("li",[t._v("事务管理")]),t._v(" "),a("li",[t._v("权限验证")]),t._v(" "),a("li",[t._v("性能检测")])]),t._v(" "),a("h3",{attrs:{id:"_2-核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心概念"}},[t._v("#")]),t._v(" 2.核心概念")]),t._v(" "),a("p",[t._v("专业术语")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Target 目标对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("被增强的对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Proxy 代理对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("增强后的对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Joinpoint 连接点")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("目标对象中可以被增强的方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Pointcut 切入点")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("目标对象中实际被增强的方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Advice通知")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("增强部分的代码逻辑")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Aspect切面")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("增强+切入点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Weaving织入")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通知和切入点动态组合的过程")])])])]),t._v(" "),a("p",[t._v("通知类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("通知")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("前置通知")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通知方法在目标调用之前执行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("后置通知")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通知方法在目标方法返回或异常后调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("最终通知")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("都会执行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("异常通知")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通知方法会在目标方法抛出异常后调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("环绕通知")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("前后调用")])])])]),t._v(" "),a("h2",{attrs:{id:"二-原理剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-原理剖析"}},[t._v("#")]),t._v(" 二.原理剖析")]),t._v(" "),a("p",[t._v("Spring如何生成Proxy代理对象?")]),t._v(" "),a("h3",{attrs:{id:"_1-xml方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-xml方式"}},[t._v("#")]),t._v(" 1.xml方式")]),t._v(" "),a("ol",[a("li",[t._v("首先进行自定义命名空间解析")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("为该标签(config)设置一个parse解析器")]),t._v(" "),a("li",[t._v("解析器为Spring容器中注入"),a("strong",[t._v("AspectJAwareAdvisorAutoProxyCreator")]),t._v(",本质是一个BeanPostProcessor,bean后处理器")]),t._v(" "),a("li",[t._v("在AspectJAwareAdvisorAutoProxyCreator的after方法中生成Bean代理对象")])]),t._v(" "),a("h3",{attrs:{id:"_2-注解方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注解方式"}},[t._v("#")]),t._v(" 2.注解方式")]),t._v(" "),a("ol",[a("li",[t._v("首先对注解进行解析")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAspectJAutoProxy")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("该注解往Spring容器中添加了一个后处理器,名为"),a("strong",[t._v("AnnotationAwareAspectJAutoProxyCreator")])])]),t._v(" "),a("li",[a("p",[t._v("AnnotationAwareAspectJAutoProxyCreator的after方法中生成了Bean的代理对象")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);