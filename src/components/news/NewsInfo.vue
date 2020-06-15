<template>
    <div class="newsinfo-container">
        <h3 class="title">{{target.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{target.publishedAt| dateFormat2}}</span>
            <span>点击： 0次</span>
        </p>

        <hr>

        <div class="description">

            {{target.description}}
        </div>

        <div class="content">
            {{target.content}}
        </div>

        <comment-box></comment-box>
    </div>
</template>

<script>
import news from "./news.json"
import comment from "../subcomponents/comment.vue"
export default {
    data() {
        return {
            id: this.$route.params.id,//将url传递的id值挂载到date上
            list: news.articles,
            target: {}
        }
    },
    created(){
        this.getNewsById();
    },
    methods:{
        getNewsById(){
            for(var i=0; i<this.list.length; i++){
                if(this.list[i].id == this.id){
                    this.target = this.list[i]
                }
            }
        }
    },
    components:{
        'comment-box': comment
    }
}
</script>

<style scoped lang="scss">
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px;
    }
    
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px 10px

    }
    .description{
        background-color: lightgray;
        margin: 10% 5% 5%;
        padding: 20px;
    }
    .content{
        padding: 5%;
    }
}
</style>