  <template>
      <div class="header">
          <a class="back" v-if="hasBack" @click="goBack">返回</a> 
          {{this.title}}
          <a class="search" v-if="hasLogin" @click="search">搜索</a>
          <a class="login" v-if="hasLogin" @click="login">登录</a> 
      </div>
  </template>
  
  <script>
      export default {
         props:{
             title:String,
             hasBack:{
                 type:Boolean,
                 default:true
             },
             hasLogin:{
                 type:Boolean,
                 default:true
             }
         },
         methods:{
             goBack(){
                 this.$router.go(-1);
             },
             login(){
                 this.$router.push({name:"login"});
             },
             search(){
                 this.$router.push({name:"search"});
             }
         }
      }
  </script>
  
  <style lang="scss" scoped>
     .header{
         width:100%;
         height:70px;
         border-bottom:1px solid #eee;
         font-size:18px;
         color:#333;
         text-align: center;
         line-height: 70px;
         position: relative;
         .back{
            position: absolute;
            left: 20px;
            top: 2px;
            font-size: 14px;
            color: #005aa0;
         }
         .login{
             position: absolute;
             right: 20px;
             top: 2px;
             font-size: 14px;
             color: #005aa0;
         }
         .search{
             position: absolute;
             right: 60px;
             top: 2px;
             font-size: 14px;
             color: #005aa0;
         }
     }
  </style>