<template>
    <div class="app-container">
       <!-- 顶部header区域 -->
        <mt-header fixed title="Vue项目"></mt-header>
       <!-- router-view -->

       <!-- tabbar区域 -->
       <nav>
           <ul id="tabbar">
               <li>首页</li>
               <li>首页</li>
               <li>首页</li>
               <li>首页</li>
           </ul>
       </nav>
    </div>
</template>

<script>
</script>

<style scoped>
.app-container{
    padding-top: 40px;
}
#tabbar{
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
}
#tabbar li{
    line-height: 40px;
    font-size: 12px;
}
nav{
    border-top: 1px solid gray;
    position: fixed;
    width: 100vw;
    bottom: 0;
    background: honeydew;
}
</style>