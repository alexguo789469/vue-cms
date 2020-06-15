<template>
    <div class="app-container">
       <!-- 顶部header区域 -->
        <mt-header fixed title="Vue项目"></mt-header>
       <!-- router-view -->
       <transition>
           <router-view></router-view>
       </transition>
       <!-- tabbar区域 -->
       <nav>
           <ul id="tabbar">
                <router-link class="icon" to="/home">首页</router-link> 
                <router-link class="icon" to="/member">会员</router-link>
                <router-link class="icon" to="/cart">购物车</router-link> 
                <router-link class="icon" to="/search">搜索</router-link>   
           </ul>
       </nav>
    </div>
</template>

<script>
</script>

<style scoped>
.app-container{
    padding-top: 40px;
    padding-bottom: 40px;
    overflow-x: hidden;
}
#tabbar{
    display: flex;
    justify-content: space-around;  
    list-style: none;
    padding: 0;
    margin: 0;
}
#tabbar .icon{
    line-height: 40px;
    font-size: 12px;
    text-decoration: none;
    color: black;
}
nav{
    border-top: 1px solid  gray;
    position: fixed;
    width: 100vw;
    bottom: 0;
    background: honeydew;
}
.router-link-active{
    color: red !important;
}
.v-enter{
    opacity: 0;
    transform: translateX(100%);
}

.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}
</style>