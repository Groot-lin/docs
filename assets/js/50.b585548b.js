(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{475:function(_,t,v){"use strict";v.r(t);var a=v(2),s=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("在MYSQL中可以按照功能与范围分类")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://18334034784.oss-cn-chengdu.aliyuncs.com/lin-oss/MySQL%E9%94%81%E5%88%86%E7%B1%BB.png",alt:"image"}})]),_._v(" "),t("h2",{attrs:{id:"一-锁结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-锁结构"}},[_._v("#")]),_._v(" 一.锁结构")]),_._v(" "),t("p",[_._v("锁结构中两个比较重要的信息")]),_._v(" "),t("ul",[t("li",[_._v("trx信息 : 代表这个锁结构是哪个事务生成的")]),_._v(" "),t("li",[_._v("is_watting : 代表当前事务是否在等待")])]),_._v(" "),t("p",[_._v("现在有两个事务分别是T1和T2")]),_._v(" "),t("p",[_._v("当事务T1改动了一条记录以后,就生成了一个所结构与该记录关联,因为之前没有别的事务为这条记录加锁,所以"),t("strong",[_._v("is_watting属性为false")]),_._v(";")]),_._v(" "),t("p",[_._v("在T1事务提交前,另一个事务T2也想对该记录做改动,发现有一个锁结构与之关联,所以T2也生成一个锁结构不过"),t("strong",[_._v("is_watting属性为false")]),_._v(";表示当前事务需要等待,这个场景我们称为获取锁失败")]),_._v(" "),t("p",[_._v("当事务T1提交以后,会把锁结构释放掉,发现T2还在等待获取锁,所以把事务T2对应的锁结构的"),t("strong",[_._v("is_watting")]),_._v("设置成false;")]),_._v(" "),t("h2",{attrs:{id:"二-并发安全问题的解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-并发安全问题的解决方案"}},[_._v("#")]),_._v(" 二.并发安全问题的解决方案")]),_._v(" "),t("ol",[t("li",[_._v("读操作利用多版本并发控制（ MVCC ），写操作进行 加锁,性能更高")]),_._v(" "),t("li",[_._v("读、写操作都采用 加锁 的方式,安全性更高")])]),_._v(" "),t("h2",{attrs:{id:"三-一致性读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-一致性读"}},[_._v("#")]),_._v(" 三.一致性读")]),_._v(" "),t("p",[t("strong",[_._v("事务利用 MVCC 进行的读取操作称之为 一致性读")]),_._v(",所有普通 的 SELECT 语句（ plain SELECT ）在 READ COMMITTED 、 REPEATABLE READ 隔离级别下都算是 一致性读")]),_._v(" "),t("h2",{attrs:{id:"四-锁定读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-锁定读"}},[_._v("#")]),_._v(" 四.锁定读")]),_._v(" "),t("p",[_._v("在使用 加锁 的方式解决问题时，由于既要允 许 读-读 情况不受影响，又要使 写-写 、 读-写 或 写-读 情况中的操作相互阻塞")]),_._v(" "),t("p",[_._v("MySQL将锁分类:")]),_._v(" "),t("h3",{attrs:{id:"_1-共享锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-共享锁"}},[_._v("#")]),_._v(" 1.共享锁")]),_._v(" "),t("p",[_._v("简称S锁,在事务要"),t("strong",[_._v("读取一条记录")]),_._v("时，需要先获取该记录的 S锁")]),_._v(" "),t("h3",{attrs:{id:"_2-独占锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-独占锁"}},[_._v("#")]),_._v(" 2.独占锁")]),_._v(" "),t("p",[_._v("简称X锁,在事务要"),t("strong",[_._v("改动一条记录")]),_._v("时，需要先获 取该记录的 X锁")]),_._v(" "),t("p",[_._v("假如事务 T1 首先获取了一条记录的 S锁 之后，事务 T2 接着也要访问这条记录：")]),_._v(" "),t("ul",[t("li",[_._v("如果事务 T2 想要再获取一个记录的 S锁 ，那么事务 T2 也会获得该锁，也就意味着事务 T1 和 T2 在该记录 上同时持有 S锁")]),_._v(" "),t("li",[_._v("如果事务 T2 想要再获取一个记录的 X锁 ，那么此操作会被阻塞，直到事务 T1 提交之后将 S锁 释放掉")]),_._v(" "),t("li",[_._v("如果事务 T1 首先获取了一条记录的 X锁 之后，那么不管事务 T2 接着想获取该记录的 S锁 还是 X锁 都会被阻 塞，直到事务 T1 提交")])]),_._v(" "),t("p",[_._v("所以我们说 S锁 和 S锁 是兼容的， S锁 和 X锁 是不兼容的， X锁 和 X锁 也是不兼容的")]),_._v(" "),t("h2",{attrs:{id:"五-写操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-写操作"}},[_._v("#")]),_._v(" 五.写操作")]),_._v(" "),t("p",[_._v("分别是增删改")]),_._v(" "),t("h3",{attrs:{id:"_1-delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-delete"}},[_._v("#")]),_._v(" 1.delete")]),_._v(" "),t("p",[_._v("对一条记录做 DELETE 操作的过程其实是先在 B+ 树中定位到这条记录的位置，然后获取一下这条记录的 X 锁 ，然后再执行 delete mark 操作")]),_._v(" "),t("p",[_._v("我们也可以把这个定位待删除记录在 B+ 树中位置的过程看成是一个获 取 X锁 的 锁定读")]),_._v(" "),t("h3",{attrs:{id:"_2-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-update"}},[_._v("#")]),_._v(" 2.update")]),_._v(" "),t("ul",[t("li",[_._v("如果未修改该记录的键值并且被更新的列占用的存储空间在修改前后未发生变化，则先在 B+ 树中定位 到这条记录的位置，然后再获取一下记录的 X锁 ，最后在原记录的位置进行修改操作。其实我们也可以 把这个定位待修改记录在 B+ 树中位置的过程看成是一个获取 X锁 的 锁定读")]),_._v(" "),t("li",[_._v("如果未修改该记录的键值并且至少有一个被更新的列占用的存储空间在修改前后发生变化，则先在 B+ 树中定位到这条记录的位置，然后获取一下记录的 X锁 ，将该记录彻底删除掉（就是把记录彻底移 入垃圾链表），最后再插入一条新记录")]),_._v(" "),t("li",[_._v("如果修改了该记录的键值，则相当于在原记录上做 DELETE 操作之后再来一次 INSERT 操作，加锁操作就 需要按照 DELETE 和 INSERT 的规则进行了")])]),_._v(" "),t("h3",{attrs:{id:"_3-insert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-insert"}},[_._v("#")]),_._v(" 3.insert")]),_._v(" "),t("p",[_._v("MySQL通过一种称之为"),t("strong",[_._v("隐式锁")]),_._v("来保护新插入的记录在本事务提交前不被别的事务访问")]),_._v(" "),t("h2",{attrs:{id:"六-多粒度锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-多粒度锁"}},[_._v("#")]),_._v(" 六.多粒度锁")]),_._v(" "),t("p",[_._v("之前提到的锁被称为行锁")]),_._v(" "),t("p",[_._v("事务也可也在表级别加锁")]),_._v(" "),t("p",[_._v("但是存在两个问题：")]),_._v(" "),t("ul",[t("li",[_._v("如果我们对整个表上S锁，首先需要确保表中没有记录被上x锁")]),_._v(" "),t("li",[_._v("如果我们对整个表上X锁，首先需要确保表中没有记录被上s锁和x锁")])]),_._v(" "),t("p",[_._v("但是上锁时如何查看表里面是否有记录被加锁？遍历是不可能遍历的")]),_._v(" "),t("p",[_._v("MySQL提出一种意向锁方案")]),_._v(" "),t("ul",[t("li",[_._v("意向共享锁 ： 简称IS锁，当事务准备在某条记录上加 S锁时，需要先在表级别加一个 IS锁")]),_._v(" "),t("li",[_._v("意向独占锁：  简称IX锁，当事务准备在某条记录上加 X锁时，需要先在表级别加一个 IX锁")])]),_._v(" "),t("p",[_._v("行级锁是InnoDB特有的")]),_._v(" "),t("h2",{attrs:{id:"七-innodb的行锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七-innodb的行锁"}},[_._v("#")]),_._v(" 七.InnoDB的行锁")]),_._v(" "),t("h3",{attrs:{id:"_1-record-locks-行锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-record-locks-行锁"}},[_._v("#")]),_._v(" 1.Record Locks 行锁")]),_._v(" "),t("p",[_._v("记录锁，普通行锁")]),_._v(" "),t("h3",{attrs:{id:"_2-gap-locks间隙锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-gap-locks间隙锁"}},[_._v("#")]),_._v(" 2.Gap Locks间隙锁")]),_._v(" "),t("p",[_._v("MySQL 在 REPEATABLE READ 隔离级别下是可以解决幻读问题的，解决方案有两种，可以使用 MVCC 方 案解决，也可以采用 加锁 方案解决")]),_._v(" "),t("p",[_._v("但是在使用 加锁 方案解决时有个大问题，就是事务在第一次执行读取 操作时，那些幻影记录尚不存在，我们无法给这些幻影记录加上记录锁")]),_._v(" "),t("p",[_._v("MySQL提出一种Gap Locks的锁，不允许别的事务在该记录之间的间隙插入新纪录")]),_._v(" "),t("h3",{attrs:{id:"_3-next-key-locks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-next-key-locks"}},[_._v("#")]),_._v(" 3.Next-Key Locks")]),_._v(" "),t("p",[_._v("前面两者的结合，它既能保护该条记录，又能阻止别的事务 将新记录插入被保护记录前边的 间隙")]),_._v(" "),t("h3",{attrs:{id:"_4-insert-intention-locks-插入意向锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-insert-intention-locks-插入意向锁"}},[_._v("#")]),_._v(" 4.Insert Intention Locks 插入意向锁")]),_._v(" "),t("p",[_._v("MySQL规定事务在等待的时候也需要在内存中生成一个 锁结构 ，表明有事务想在某个间隙中插入新记录，但是现在在等待")]),_._v(" "),t("h3",{attrs:{id:"_5-隐式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-隐式锁"}},[_._v("#")]),_._v(" 5.隐式锁")]),_._v(" "),t("p",[_._v("一个事务对新插入的记录可以不显式的加锁（生成一个锁结构），但是由于 事务id 这个牛逼的东东的存在，相当于加了一个 隐式锁 。别的事务在对这条记录加 S锁 或者 X锁 时，由于 隐式锁 的存在，会先帮助当前事务生成一个锁结构，然后自己再生成一个锁结构后进入等待 状态")])])}),[],!1,null,null,null);t.default=s.exports}}]);