(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{476:function(t,_,v){"use strict";v.r(_);var s=v(2),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"一-行格式简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-行格式简介"}},[t._v("#")]),t._v(" 一.行格式简介")]),t._v(" "),_("p",[t._v("我们平时以行记录为单位向表中插入数据,这些数据在磁盘上的存储方式被称为"),_("strong",[t._v("行格式")])]),t._v(" "),_("p",[t._v("InnoDB引擎中支持四种行格式:")]),t._v(" "),_("ul",[_("li",[t._v("Compact")]),t._v(" "),_("li",[t._v("Redundant")]),t._v(" "),_("li",[t._v("Dynamic")]),t._v(" "),_("li",[t._v("Compressed")])]),t._v(" "),_("h3",{attrs:{id:"四种行格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四种行格式"}},[t._v("#")]),t._v(" 四种行格式")]),t._v(" "),_("p",[t._v("行格式给我们的数据添加了很多==隐藏的字段==,这些字段记录了本条数据的一些信息")]),t._v(" "),_("p",[_("strong",[t._v("这些信息属于是MySQL服务器为了描述这条记录而不得不额外添加的一些信息")])]),t._v(" "),_("h2",{attrs:{id:"二-compact行格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-compact行格式"}},[t._v("#")]),t._v(" 二.Compact行格式")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/%E8%A1%8C%E6%A0%BC%E5%BC%8F.png",alt:"image-20231003163719700"}})]),t._v(" "),_("p",[t._v("主要给表增加了三个额外字段")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("变长字段长度列表")])]),t._v(" "),_("li",[_("p",[t._v("NULL值列表")])]),t._v(" "),_("li",[_("p",[t._v("记录头信息")])])]),t._v(" "),_("h3",{attrs:{id:"_1-变长字段的长度列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-变长字段的长度列表"}},[t._v("#")]),t._v(" 1.变长字段的长度列表")]),t._v(" "),_("p",[t._v("该字段用来记录你表中有多少字段的值长度是可变的")]),t._v(" "),_("p",[_("strong",[t._v("用来记录这些可变的数据长度")])]),t._v(" "),_("p",[t._v("MySQL中有一些不定长的数据类型: varchar,blog,text,longtext")]),t._v(" "),_("p",[t._v("在compact行格式中,把所有变长字段"),_("strong",[t._v("真实数据占用的字节长度")]),t._v("存放在记录的==开头位置==")]),t._v(" "),_("p",[t._v("各个变长字段数据"),_("strong",[t._v("占用的字节数")]),t._v("按照列的顺序==逆序存放==")]),t._v(" "),_("p",[t._v("假如现在有三个字段：id、name、password，其中id是int类型，所以它不是变长字段，name和 password都是varchar类型，它们是变长字段，所以长度列表中会记录他俩的长度。")]),t._v(" "),_("div",{staticClass:"language-text line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("name : xiaoming\npassword : 123\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("如上，name的长度是8个字节，十六进制是0x08；password是3个字节，十六进制是0x03。 存储在列表中就是：0308。")]),t._v(" "),_("p",[t._v("由于这两条记录都比较短,占用的字节数量比较小,用一个字节就能表示")]),t._v(" "),_("p",[t._v("但是如果变长列的内容占用的字节数比较多,可能就需要2个字节来表示.")]),t._v(" "),_("p",[t._v("有一套规则")]),t._v(" "),_("p",[t._v("首先声明W,M,L的意思:")]),t._v(" "),_("ol",[_("li",[t._v("假设某个字符集中表示一个字符最多需要使用的字节数为 W ，也就是使用 SHOW CHARSET 语句的结果中的 Maxlen 列，比方说 utf8 字符集中的 W 就是 3 ， gbk 字符集中的 W 就是2,ascii 字符集中的 W 就是 1")]),t._v(" "),_("li",[t._v("对于变长类型 VARCHAR(M) 来说，这种类型表示能存储最多 M 个字符（注意是字符不是字节），所以这个类 型能表示的字符串最多占用的字节数就是 M×W")]),t._v(" "),_("li",[t._v("假设它实际存储的字符串占用的字节数是 L")])]),t._v(" "),_("p",[t._v("总结就是")]),t._v(" "),_("p",[_("strong",[t._v("如果该可变字段允许存储的最大字节数（ M×W ）超过255字节并且真实存储的字节数（ L ） 超过127字节，则使用2个字节，否则使用1个字节,值为null的字符串长度不存储")])]),t._v(" "),_("h3",{attrs:{id:"_2-null值列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-null值列表"}},[t._v("#")]),t._v(" 2.NULL值列表")]),t._v(" "),_("p",[t._v("某些表中的某些列可能存储NULL值,MySQL会将NULL值统一管理起来,存储到NULL值列表")]),t._v(" "),_("p",[t._v("每一个允许存储NULL值字段对应一个二进制位,二进制位按照字段的顺序==逆序==排序")]),t._v(" "),_("p",[t._v("NULL值用1表示")]),t._v(" "),_("p",[t._v("NULL值列表必须使用整个字节的位来表示,即: 8,16,32等")]),t._v(" "),_("p",[t._v("NULL值的记录处理流程")]),t._v(" "),_("ol",[_("li",[t._v("首先统计表中允许存储NULL的列有哪些")])]),t._v(" "),_("p",[t._v("主键,被NOT NULL修饰的列不可以存储NULL值")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[t._v("如果表中没有允许存储null值的列,则NULL值列表也不存在了")]),t._v(",否则将每个允许存储NULL的列对应一个二进制位,二进制位按照"),_("strong",[t._v("列的顺序逆序")]),t._v("排列")])]),t._v(" "),_("p",[t._v("二进制位值为1,代表该列的值为NULL")]),t._v(" "),_("p",[t._v("二进制位值为0,代表该列的值不为NULL")]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("MySQL规定NULL值列表必须使用整个字节的位表示,"),_("strong",[t._v("高位补0")])])]),t._v(" "),_("p",[t._v("示例:")]),t._v(" "),_("p",[t._v("有四个字段分别是c1,c2,c3,c4,其中c3字段是NOT NULL不考虑")]),t._v(" "),_("ul",[_("li",[t._v("第一条记录,c1,c2,c4都是null,对应二进制为 00000000,故该行null值列表为 00(十六进制)")]),t._v(" "),_("li",[t._v("第二条记录,c2和c4是null,对应二进制为 00000110,故该行null值列表为 06(十六进制)")])]),t._v(" "),_("h3",{attrs:{id:"_3-记录头信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-记录头信息"}},[t._v("#")]),t._v(" 3.记录头信息")]),t._v(" "),_("p",[t._v("这个字段固定有五个字节,即40个二进制位,不同位代表不同的以上,如下:")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/%E8%AE%B0%E5%BD%95%E5%A4%B4%E4%BF%A1%E6%81%AF.png",alt:"image"}})]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("大小（bit）")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("预留位")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("待使用")])]),t._v(" "),_("tr",[_("td",[t._v("delete_mask")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("该记录是否被删除")])]),t._v(" "),_("tr",[_("td",[t._v("min_rec_mask")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("B+树的每层非叶子节点中的最小记录都会添加该标记")])]),t._v(" "),_("tr",[_("td",[t._v("n_owned")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("表示当前记录拥有的记录数")])]),t._v(" "),_("tr",[_("td",[t._v("heap_no")]),t._v(" "),_("td",[t._v("13")]),t._v(" "),_("td",[t._v("表示当前记录在页中的位置")])]),t._v(" "),_("tr",[_("td",[t._v("record_type")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("表示当前记录的类型0：普通记录1：表示B+树非叶子节点记录2：表示最小记录3：表示最大记录")])]),t._v(" "),_("tr",[_("td",[t._v("next_record")]),t._v(" "),_("td",[t._v("16")]),t._v(" "),_("td",[t._v("表示下一条记录的相对位置")])])])]),t._v(" "),_("p",[t._v("MySQL对于每张表维护两条链表")]),t._v(" "),_("p",[t._v("一条未删除")]),t._v(" "),_("p",[t._v("一条已删除")]),t._v(" "),_("p",[t._v("删除一条数据时做逻辑删除,将"),_("strong",[t._v("delete_mask")]),t._v("变为1")]),t._v(" "),_("p",[t._v("当有新数据覆盖时再执行删除")]),t._v(" "),_("p",[t._v("我们想这张表中插入3条数据：")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" users "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaaa'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                        "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bbbb'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       \n\t\t\t"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cccc'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("p",[t._v("于是这几条数据就如下图所示连接：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/MySQL%E8%AE%B0%E5%BD%95%E4%BF%A1%E6%81%AF%E5%A4%B4.png",alt:"image"}})]),t._v(" "),_("p",[t._v("下面来说记录头信息的各个组成")]),t._v(" "),_("h4",{attrs:{id:"_1-delete-mask"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-delete-mask"}},[t._v("#")]),t._v(" 1).delete_mask")]),t._v(" "),_("p",[t._v("这个属性标记着当前记录是否被删除，占用1个二进制位，值为 0 的时候代表记录并没有被删除，为 1 的时 候代表记录被删除掉了")]),t._v(" "),_("p",[t._v("MySQL对于每张表维护两条链表")]),t._v(" "),_("p",[t._v("一条未删除")]),t._v(" "),_("p",[t._v("一条已删除")]),t._v(" "),_("p",[t._v("删除一条数据时做"),_("strong",[t._v("逻辑删除")]),t._v(",将"),_("strong",[t._v("delete_mask")]),t._v("变为1")]),t._v(" "),_("p",[t._v("当有新数据覆盖时再执行删除")]),t._v(" "),_("h4",{attrs:{id:"_2-min-rec-mask"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-min-rec-mask"}},[t._v("#")]),t._v(" 2).min_rec_mask")]),t._v(" "),_("p",[t._v("B+树的每层节点中的最小记录都会添加该标记")]),t._v(" "),_("h4",{attrs:{id:"_3-n-owned"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-n-owned"}},[t._v("#")]),t._v(" 3).n_owned")]),t._v(" "),_("p",[t._v("表示当前记录拥有的记录数")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/%E5%88%86%E7%BB%84.png",alt:"image-20231004145713089"}})]),t._v(" "),_("p",[t._v("为什么最小记录的 n_owned 值为1，而最大记录的 n_owned 值为 5 呢?")]),t._v(" "),_("p",[t._v("规定对于最小记录所在的分组只能有 1 条记录， 最大记录所在的分组拥有的记录条数只能在 1~8 条之间，剩下的分组中记录的条数范围只能在是 4~8 条之间")]),t._v(" "),_("p",[t._v("假设有18条记录")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/%E5%88%86%E7%BB%842.png",alt:"image-20231004145915992"}})]),t._v(" "),_("p",[t._v("所以在数据页中查找主键值的记录的过程分为两步:")]),t._v(" "),_("ol",[_("li",[t._v("通过二分法确定该记录所在的槽,并找到该槽中主键最小的那条记录")]),t._v(" "),_("li",[t._v("通过记录的"),_("strong",[t._v("next_record")]),t._v("属性遍历该槽所在的组中的各个记录")])]),t._v(" "),_("h4",{attrs:{id:"_4-heap-no"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-heap-no"}},[t._v("#")]),t._v(" 4).heap_no")]),t._v(" "),_("p",[t._v("表示当前记录在记录堆的位置信息")]),t._v(" "),_("p",[t._v("如以上示例")]),t._v(" "),_("p",[t._v("三条记录在本页中的位置分别是2,3,4")]),t._v(" "),_("p",[t._v("那么0和1呢")]),t._v(" "),_("p",[t._v("InnoDB设计者自动给每个页里边儿加了两个记录，由于这两个记录 并不是我们自己插入的，所以有时候也称为 伪记录")]),t._v(" "),_("p",[t._v("这两个伪记录一个代表 "),_("strong",[t._v("最小记录")]),t._v(" ，一 个代表 "),_("strong",[t._v("最大记录")])]),t._v(" "),_("p",[t._v("对一条记录来说,比较记录就是比较主键")]),t._v(" "),_("p",[t._v("这两条记录由5字节大小的记录头信息和8字节大小的固定部分组成")]),t._v(" "),_("p",[t._v("存放页结构中的Infimum+Supremum中")]),t._v(" "),_("h4",{attrs:{id:"_5-record-type"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-record-type"}},[t._v("#")]),t._v(" 5).record_type")]),t._v(" "),_("p",[t._v("表示当前记录的类型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("普通记录")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("B+树非叶子节点记录")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("最小记录")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("最大记录")])])])]),t._v(" "),_("h4",{attrs:{id:"_6-next-record"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-next-record"}},[t._v("#")]),t._v(" 6).next_record")]),t._v(" "),_("p",[t._v("表示从当前记录的真实数据到下一条记录的真实数据的地址偏移量")]),t._v(" "),_("p",[_("strong",[t._v("下一条记录 指得并不是按照我们插入顺序的下一条记录，而 是按照"),_("u",[t._v("主键值")]),t._v("由小到大的顺序的下一条记录")])]),t._v(" "),_("p",[t._v("规定Infimum记录（也就是最小记录） 的下一条记录就是 本页中主键值最小的用户记录，而本页中主键值最大的用户记录的下一条记录就是 Supremum记录（也就是最大记录）")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/next_record.png",alt:"image-20231004144153207"}})]),t._v(" "),_("h3",{attrs:{id:"_4-隐藏字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-隐藏字段"}},[t._v("#")]),t._v(" 4.隐藏字段")]),t._v(" "),_("p",[t._v("隐藏字段存放在记录的真实数据中")]),t._v(" "),_("p",[t._v("在创建表的时候,MySQL提供了几个隐藏字段")]),t._v(" "),_("p",[t._v("(用来实现MVCC)")]),t._v(" "),_("ul",[_("li",[t._v("row_id : 行id,唯一标识")]),t._v(" "),_("li",[t._v("transaction_id : 事务id")]),t._v(" "),_("li",[t._v("roll_pointer : 回滚指针")])]),t._v(" "),_("p",[t._v("InnoDB 表对主键的生成策略：")]),t._v(" "),_("p",[t._v("优先使用用户自定义主键作为主键，如果用户没有定义主键，则 选取一个 Unique 键作为主键")]),t._v(" "),_("p",[t._v("如果表中连 Unique 键都没有定义的话，则 InnoDB 会为表默认添加一个名为 row_id 的隐藏列作为主键。")]),t._v(" "),_("p",[t._v("所以我们从上表中可以看出：InnoDB存储引擎会为每条记录都添加 transaction_id 和 roll_pointer 这两个列，但是 "),_("strong",[t._v("row_id 是可选的")]),t._v("（在没有自定义主键以及Unique键的情况下才会添加该列）。 这些隐藏列的值不用我们操心， InnoDB 存储引擎会自己帮我们生成的。")])])}),[],!1,null,null,null);_.default=a.exports}}]);