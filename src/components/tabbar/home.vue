<template>
    <div>
      <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipe" :key="item">
                <img :src="item" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="choice">
            <li>新闻资讯</li>
            <li>图片分享</li>
            <li>商品购买</li>
        </ul>

         <ul class="choice">
            <li>留言反馈</li>
            <li>视频专区</li>
            <li>联系我们</li>
        </ul>

    </div>
</template>

<script>
import img1 from "../../img/anime1.jpg"
import img2 from "../../img/anime2.jpg"
import img3 from "../../img/anime3.jpg"
import img4 from "../../img/anime4.jpg"

export default {
    data() {
        return {
            swipe: [
                img1,
                img2,
                img3,
                img4
            ]
        }
    },
    methods:{
      
    }
}
</script>

<style scoped lang="scss">
.mint-swipe{
    height: 200px;
    img{
        width: 100%;
        height: 100%;
    }
}
.choice{
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    li{
        list-style: none;
        line-height: 50px;

    }
}
</style>