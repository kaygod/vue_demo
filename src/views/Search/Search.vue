<template>
    <div class="search">
        <Header title="产品搜索" :hasLogin="false"/>
        <div class="search_input">
            <input type="text" placeholder="请输入产品型号" v-model="keyword" @input="search"> 
        </div>
        <div class="search_content">
              <div class="item" v-for="item in list" :key="item.id" @click="jump(item.id)">
                <p class="item_top box">
                    <i class="lt">{{item.name}}</i>
                    <i class="gt">{{item.price}}</i>
                </p>
                <p class="item_bottom">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header/Header.vue';
    import data from "../../../public/data/search.json";
    import { ajax } from "../../util/common";

    export default {
        name:"Search",
        components:{
           Header 
        },
        data(){
          return {
              list:[],
              keyword:""
          }
        },
        methods:{
            search(){
                if(this.timer){
                   clearTimeout(this.timer);
                   this.timer = null;
                   this.search();
                   return false;
                }
                this.timer = setTimeout(()=>{
                     clearTimeout(this.timer);
                     this.timer = null;
                       if(this.keyword.trim().length == 0){
                            this.list = [];
                        }else{
                            ajax(data).then((result)=>{
                            this.list = result;
                        })

                        }

                },500)
              
             },
             jump(id){
                this.$router.push({name:"detail",params:{id}})
             }
            
            
        } 
    }
</script>

<style lang="scss" scoped>
  .search{
      .search_input{
          text-align: center;
          margin-top:20px;
          input{
              width:70%;
              height:35px;
              border:1px solid #eee;
              font-size: 14px;
              color:#333;
              box-sizing: border-box;
              padding-left: 10px;
              outline: none;
          }
      }
      .search_content{
         margin-top:20px;
         padding-left:10px;
         padding-right:10px;
          .item{
            height:60px;
            box-sizing: border-box;
            border-bottom:1px solid #eee;
            font-size: 13px;
            color:#005aa0;
            cursor: pointer;
            padding-top:10px;
            .item_bottom{
                margin-top:5px;
            }
        }
      }
  }
</style>