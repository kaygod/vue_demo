<template>
    <div class="likes">
        <p class="title">猜你喜欢</p>
        <div class="item" v-for="item in likes" :key="item.id" @click="jump(item.id)">
              <p class="item_top box">
                  <i class="lt">{{item.name}}</i>
                  <i class="gt">{{item.price}}</i>
              </p>
              <p class="item_bottom">{{item.desc}}</p>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
      name:"LikesComponent",  
      computed:{
         ...mapState({
             likes:state=>state.home.likes
         })
      },
      methods:{
          jump(id){
             this.$router.push({name:"detail",params:{id:id}});
          }
      }
    }
</script>

<style lang="scss" scoped>
  .likes{
         box-sizing: border-box;
         padding-left:10px;
         padding-right:10px;
         margin-top:40px;
      .title{
          margin-bottom:10px;
          font-size:16px;
      }   
      .item{
         height:60px;
         box-sizing: border-box;
         border-bottom:1px solid #eee;
         font-size: 13px;
         color:#005aa0;
         cursor: pointer;
         padding-top:10px;
         &:nth-child(2){
            border-top:1px solid #eee;
         } 
         .item_bottom{
              margin-top:5px;
         }
      }
  }
</style>