<template>
  <div>
     <Header title="商品详情"/>
      <div class="detail">
            <div class="item">
                <p class="item_top box">
                      <i class="lt">id</i>
                      <i class="gt">{{id}}</i>
                </p>
            </div>
            <div class="item">
                <p class="item_top box">
                      <i class="lt">名称</i>
                      <i class="gt">{{data.name}}</i>
                </p>
            </div>
              <div class="item">
                <p class="item_top box">
                      <i class="lt">数量</i>
                      <i class="gt">{{data.count}}</i>
                </p>
            </div>
              <div class="item">
                <p class="item_top box">
                      <i class="lt">价格</i>
                      <i class="gt">{{data.price}}</i>
                </p>
            </div>
            <div class="item high">
                <p class="item_top box">
                      <i class="lt">照片</i>
                      <i class="gt">
                        <img :src="img" alt="">
                      </i>
                </p>
            </div>
              <div class="item high">
                <p class="item_top box">
                      <i class="lt">描述</i>
                      <i class="gt">{{data.desc}}</i>
                </p>
            </div>
             <div class="item high">
                <p class="item_top box">
                      <i class="lt">描述</i>
                      <i class="gt">{{data.desc}}</i>
                </p>
            </div>
             <div class="item high">
                <p class="item_top box">
                      <i class="lt">描述</i>
                      <i class="gt">{{data.desc}}</i>
                </p>
            </div>
             <div class="item high">
                <p class="item_top box">
                      <i class="lt">描述</i>
                      <i class="gt">{{data.desc}}</i>
                </p>
            </div>
      </div> 
  </div>
</template>

<script>
  import Header from "@/components/Header/Header.vue";
  import detailData from "../../../public/data/detail.json";
  import {ajax} from "../../util/common";
  const img = require("@/assets/xigua.jpeg");

  export default {
    name:"DetailPage",
    data:()=>{
      return {
        data:{},
        id:null,
        img:null
      }
    },
    components:{
      Header
    },
    activated(){
        this.id = this.$route.params.id;
        this.img = img; 
        ajax(detailData).then((data)=>{
           this.data = data;
        })
    }
  }
</script>

<style lang="scss" scoped>
  .detail{
         box-sizing: border-box;
         padding-left:10px;
         padding-right:10px;
         margin-top:20px;
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
         &.high{
           height:120px;
         }
         .item_bottom{
              margin-top:5px;
         }
         .item_top{
           .gt{
             width:50%;
             text-align: right;
             img{
               width:70%;
             }
           }
         }
      }
  }
</style>