(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{411:function(t,e,v){t.exports=v.p+"assets/img/test.4315a444.png"},451:function(t,e,v){"use strict";v.r(e);var r=v(2),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),e("p",[t._v("生命周期（Life Cycle）的概念应用很广泛，特别是在政治、经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”（Cradle-to-Grave）的整个过程在 Vue 中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载 Dom→ 渲染、更新 → 渲染、卸载等一系列过程我们可以把组件比喻成工厂里面的一条流水线，每个工人（生命周期）站在各自的岗位，当任务流转到工人身边的时候，工人就开始工作 PS：在 Vue 生命周期钩子会自动绑定 this 上下文到实例中，因此你可以访问数据，对 property 和方法进行运算这意味着你不能使用箭头函数来定义一个生命周期方法")]),t._v(" "),e("h1",{attrs:{id:"生命周期有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期有哪些"}},[t._v("#")]),t._v(" 生命周期有哪些")]),t._v(" "),e("p",[t._v("Vue 生命周期总共可以分为 8 个阶段：创建前后, 载入前后,更新前后,销毁前销毁后，以及一些特殊场景的生命周期")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("生命周期")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("beforeCreate")]),t._v(" "),e("td",[t._v("组件实例被创建之初")])]),t._v(" "),e("tr",[e("td",[t._v("created")]),t._v(" "),e("td",[t._v("组件实例已经完全创建")])]),t._v(" "),e("tr",[e("td",[t._v("beforeMount")]),t._v(" "),e("td",[t._v("组件挂载之前")])]),t._v(" "),e("tr",[e("td",[t._v("mounted")]),t._v(" "),e("td",[t._v("组件挂载到实例上去之后")])]),t._v(" "),e("tr",[e("td",[t._v("beforeUpdate")]),t._v(" "),e("td",[t._v("组件数据发生变化，更新之前")])]),t._v(" "),e("tr",[e("td",[t._v("updated")]),t._v(" "),e("td",[t._v("组件数据更新之后")])]),t._v(" "),e("tr",[e("td",[t._v("beforeDestory")]),t._v(" "),e("td",[t._v("组件实例销毁之前")])]),t._v(" "),e("tr",[e("td",[t._v("destoryed")]),t._v(" "),e("td",[t._v("组件实例销毁之后")])]),t._v(" "),e("tr",[e("td",[t._v("activated")]),t._v(" "),e("td",[t._v("keep-alive 缓存的组件激活时")])]),t._v(" "),e("tr",[e("td",[t._v("deactivated")]),t._v(" "),e("td",[t._v("keep-alive 缓存的组件停用时调用")])]),t._v(" "),e("tr",[e("td",[t._v("errorCaptured")]),t._v(" "),e("td",[t._v("捕获一个来自子孙组件的错误时被调用")])])])]),t._v(" "),e("h1",{attrs:{id:"vue-生命周期整体流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期整体流程"}},[t._v("#")]),t._v(" vue 生命周期整体流程")]),t._v(" "),e("p",[e("img",{attrs:{src:v(411),alt:"vue 生命周期"}})]),t._v(" "),e("p",[t._v("具体分析：")]),t._v(" "),e("h3",{attrs:{id:"beforecreate-created"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate-created"}},[t._v("#")]),t._v(" beforeCreate -> created")]),t._v(" "),e("ul",[e("li",[t._v("初始化 vue 实例，进行数据观测")])]),t._v(" "),e("h3",{attrs:{id:"created"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),e("ul",[e("li",[t._v("完成数据观测，属性与方法的运算，watch、event 事件回调的配置")]),t._v(" "),e("li",[t._v("可调用 methods 中的方法，访问和修改 data 数据触发响应式渲染 dom，可通过 computed 和 watch 完成数据计算")]),t._v(" "),e("li",[t._v("此时 vm.$el 并没有被创建")])]),t._v(" "),e("h3",{attrs:{id:"created-beforemount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created-beforemount"}},[t._v("#")]),t._v(" created -> beforeMount")]),t._v(" "),e("ul",[e("li",[t._v("判断是否存在 el 选项，若不存在则停止编译，直到调用 vm.$mount(el)才会继续编译")]),t._v(" "),e("li",[t._v("优先级：render > template > outerHTML")]),t._v(" "),e("li",[t._v("vm.el 获取到的是挂载 DOM 的")])]),t._v(" "),e("h3",{attrs:{id:"beforemount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),e("ul",[e("li",[t._v("在此阶段可获取到 vm.el")]),t._v(" "),e("li",[t._v("此阶段 vm.el 虽已完成 DOM 初始化，但并未挂载在 el 选项上")])]),t._v(" "),e("h3",{attrs:{id:"beforemount-mounted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforemount-mounted"}},[t._v("#")]),t._v(" beforeMount -> mounted")]),t._v(" "),e("ul",[e("li",[t._v("此阶段 vm.el 完成挂载，vm.$el 生成的 DOM 替换了 el 选项所对应的 DOM")])]),t._v(" "),e("h3",{attrs:{id:"mounted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),e("ul",[e("li",[t._v("vm.el 已完成 DOM 的挂载与渲染，此刻打印 vm.$el，发现之前的挂载点及内容已被替换成新的 DOM")])]),t._v(" "),e("h3",{attrs:{id:"beforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),e("ul",[e("li",[t._v("更新的数据必须是被渲染在模板上的（el、template、render 之一）")]),t._v(" "),e("li",[t._v("此时 view 层还未更新")]),t._v(" "),e("li",[t._v("若在 beforeUpdate 中再次修改数据，不会再次触发更新方法")])]),t._v(" "),e("h3",{attrs:{id:"updated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),e("ul",[e("li",[t._v("完成 view 层的更新")]),t._v(" "),e("li",[t._v("若在 updated 中再次修改数据，会再次触发更新方法（beforeUpdate、updated）")])]),t._v(" "),e("h3",{attrs:{id:"beforedestroy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),e("ul",[e("li",[t._v("实例被销毁前调用，此时实例属性与方法仍可访问")])]),t._v(" "),e("h3",{attrs:{id:"destroyed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroyed"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),e("ul",[e("li",[t._v("完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器")]),t._v(" "),e("li",[t._v("并不能清除 DOM，仅仅销毁实例")])]),t._v(" "),e("h1",{attrs:{id:"使用场景分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景分析"}},[t._v("#")]),t._v(" 使用场景分析")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("生命周期")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("beforeCreate")]),t._v(" "),e("td",[t._v("执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务")])]),t._v(" "),e("tr",[e("td",[t._v("created")]),t._v(" "),e("td",[t._v("组件初始化完毕，各种数据可以使用，常用于异步数据获取")])]),t._v(" "),e("tr",[e("td",[t._v("beforeMount")]),t._v(" "),e("td",[t._v("未执行渲染、更新，dom 未创建")])]),t._v(" "),e("tr",[e("td",[t._v("mounted")]),t._v(" "),e("td",[t._v("初始化结束，dom 已创建，可用于获取访问数据和 dom 元素")])]),t._v(" "),e("tr",[e("td",[t._v("beforeUpdate")]),t._v(" "),e("td",[t._v("更新前，可用于获取更新前各种状态")])]),t._v(" "),e("tr",[e("td",[t._v("updated")]),t._v(" "),e("td",[t._v("更新后，所有状态已是最新")])]),t._v(" "),e("tr",[e("td",[t._v("beforeDestory")]),t._v(" "),e("td",[t._v("销毁前，可用于一些定时器或订阅的取消")])]),t._v(" "),e("tr",[e("td",[t._v("destoryed")]),t._v(" "),e("td",[t._v("组件已销毁，作用同上")])])])]),t._v(" "),e("h1",{attrs:{id:"数据请求在-created-和-mouted-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据请求在-created-和-mouted-的区别"}},[t._v("#")]),t._v(" 数据请求在 created 和 mouted 的区别")]),t._v(" "),e("p",[t._v("created 是在组件实例一旦创建完成的时候立刻调用，这时候页面 dom 节点并未生成；mounted 是在页面 dom 节点渲染完毕之后就立刻执行的。触发时机上 created 是比 mounted 要更早的，两者的相同点：都能拿到实例对象的属性和方法。 讨论这个问题本质就是触发的时机，放在 mounted 中的请求有可能导致页面闪动（因为此时页面 dom 结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在 created 生命周期当中。")])])}),[],!1,null,null,null);e.default=_.exports}}]);