<template>
    <div>
      <ul>
          <li v-for = "item in newslists" :key ="item.url">
            <router-link class="click" :to="'/home/newsinfo/' + item.id">
                <img :src="item.urlToImage" alt="">
                <div class="title">{{item.title}}
                    <p class="subtitle">
                        <span>发表时间：{{item.publishedAt | dateFormat2}} </span>
                        <span>点击：0次</span>
                    </p>
                </div> 
            </router-link>  
          </li>
      </ul>
    </div>
</template>


<script>
import list from "./news.json"
export default {
    data(){
        return {
            newslists: list.articles
        }
    },
    created(){
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
ul{
    li{
        list-style: none;
        overflow: hidden;
        border-bottom: 0.5px solid gray;
        .click{
            text-decoration: none;
            color: black;
            padding: 10px;
            display: flex;
            img{
            width: 50px;
            height: 50px;
            padding-right: 10px;
            }
            .title{
                flex-grow: 1;
                font-size: 14px;
                .subtitle{
                    font-size: 12px;
                    padding-top: 7px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        
    }
} 
</style>