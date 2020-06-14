import Vue from "vue";
import app from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router";

//导入所有的mintui组件
//导入mint-ui
import MintUI from 'mint-ui'//把所有的组件都导入进来
//可以省略node_modules这一层目录
import 'mint-ui/lib/style.css' //把所有的组件注册为全局的组件
//将mint-ui安装到vue中
Vue.use(MintUI)

//2.1 导入Vue-resource
import VueResource from "vue-resource";

Vue.use(VueResource)


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})