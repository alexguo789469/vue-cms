import VueRouter from "vue-router";
import home from "./components/tabbar/home.vue"
import member from "./components/tabbar/member.vue"
import search from "./components/tabbar/search.vue"
import cart from "./components/tabbar/cart.vue"
import newsList from './components/news/NewsList.vue'
import newsInfo from './components/news/NewsInfo.vue'


const router = new VueRouter({
    routes:[
        {path: "/", redirect: "/home"},
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/search', component: search},
        {path: '/cart', component: cart},
        {path: '/home/newslist', component: newsList},
        {path: '/home/newsinfo/:id', component: newsInfo}
    ]
})

export default router