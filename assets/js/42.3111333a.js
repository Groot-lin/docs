(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{471:function(t,_,v){"use strict";v.r(_);var s=v(2),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("观前提醒:只讲实现思想,不讲具体实现")]),t._v(" "),_("p",[t._v("来思考几个问题")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"title"}),_("p",[t._v("什么是虚拟内存?")])]),_("p",[t._v("我们程序使用的内存空间叫做"),_("strong",[t._v("虚拟内存地址")])]),t._v(" "),_("p",[t._v("实际存在硬件的空间地址叫做"),_("strong",[t._v("物理内存地址")])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"title"}),_("p",[t._v("内存系统面临哪些问题?")])]),_("ol",[_("li",[t._v("内存资源十分稀缺,内存空间利用率直接决定程序运行效率")]),t._v(" "),_("li",[t._v("进程之间容易破坏其他进程的内存空间")])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"title"}),_("p",[t._v("为什么需要虚拟内存?")])]),_("p",[t._v("就是为了解决以上问题")]),t._v(" "),_("h3",{attrs:{id:"_1-解决内存不足问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决内存不足问题"}},[t._v("#")]),t._v(" 1.解决内存不足问题")]),t._v(" "),_("p",[t._v("一个进程,在运行的某个时间段内,只会执行一部分指令")]),t._v(" "),_("p",[t._v("假设有一段程序,我先装入一半程序到内存中执行")]),t._v(" "),_("p",[t._v("等运行完了以后我再把另一半程序装入内存中执行")]),t._v(" "),_("p",[t._v("在内存容量不变的情况下,一个大程序在小的内存空间中执行,节约了部分的空间")]),t._v(" "),_("h3",{attrs:{id:"_2-解决多进程间内存保护问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决多进程间内存保护问题"}},[t._v("#")]),t._v(" 2.解决多进程间内存保护问题")]),t._v(" "),_("p",[t._v("每个进程,都给它分配4G大小的虚拟内存(默认情况)")]),t._v(" "),_("p",[t._v("每段程序通过一种方式,一种逻辑地址找到物理地址的方式(MMU)")]),t._v(" "),_("p",[t._v("将地址作映射到物理地址中工作")]),t._v(" "),_("ul",[_("li",[t._v("MMU:页表,动态翻译虚拟地址")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98.png",alt:"image-20240111165704246"}})]),t._v(" "),_("p",[t._v("虚拟存储管理的具体实现有:")]),t._v(" "),_("ul",[_("li",[t._v("请求分页存储")]),t._v(" "),_("li",[t._v("请求分段存储")]),t._v(" "),_("li",[t._v("请求段页式存储")])]),t._v(" "),_("p",[t._v("讲个思想,就酱")])])}),[],!1,null,null,null);_.default=a.exports}}]);