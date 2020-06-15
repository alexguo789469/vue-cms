<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <div class="submit-container">
            <form action="" class="submit">
                <input class="text" type="text" value="" placeholder="请输入评论的内容">
                <input class="button" type="button" value="发表">
            </form>
        </div>
        

        <div class="cmt-list" v-for="item in comments" :key ="item.id">
            <div class="cmt-title">
                <span>{{item.author}}</span>
                <span>{{item.add_time}}</span>
            </div>
            <div class="cmt-body">
                {{item.content}}
            </div>
        </div>
        <button id="btn">加载更多</button>
    </div>
</template>

<script>
import comments_json from "./comment.json"
export default {
    data() {
        return {
            comments: comments_json.comments
        }
    },
}
</script>

<style scoped lang="scss">
.comment-container{
    padding-bottom: 40px;
    h3{
        padding-bottom: 10px;
    }
    .submit-container{
        height: 30px;
        position: fixed;
        width: 100%;
        bottom: 40px;
        background-color: #fff;
        .submit{
        height: 25px;
        display: flex;
        .text{
            height: 25px;
            border-radius: 20px;
            flex-grow: 7;
            opacity: 1;
        }
        .button{
            flex-grow: 2;
            line-height: 25px;
        }
    }
    }
    .cmt-title{
        background-color: lightgray;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
    }
    .cmt-body{
        padding:10px
    }
    #btn{
        width: 100%;
        line-height: 30px;
    }
    
}
</style>