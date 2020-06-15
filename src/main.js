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

//定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
    var date = new Date(dataStr);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    var hour = date.getHours().toString().padStart(2, "0");
    var minute = date.getMinutes().toString().padStart(2, "0");
    var seconds = date.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
})

import moment from "moment";

Vue.filter("dateFormat2", function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})