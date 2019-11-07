<template>
    <div class="login">
       <Header title="登录" :hasLogin="false"/>
       <div class="form" v-if="!userInfo.hasLogin">
             <p class="line">
                 <i class="label">用户名:</i>
                 <input type="text" placeholder="请输入用户名" v-model="username"/>
             </p>
             <p class="line">
                 <i class="label">密码:</i>
                 <input type="password" placeholder="请输入密码" v-model="password"/>
             </p>

             <p class="btn">
                 <a class="submmit" @click="submmit">登录</a>
             </p>

       </div>
       <div v-else>

              <p class="btn">
                 <a class="submmit" @click="loginOut">退出登录</a>
             </p>

       </div>        
    </div>
</template>

<script>
    import Header from "@/components/Header/Header.vue";
    import { mapMutations,mapState } from "vuex";
    export default {
        name:"Login",
        data:()=>{
          return {
              username:"",
              password:""
          }
        },
        computed:{
          ...mapState(["userInfo"])
        },
        components:{
            Header
        },
        mounted(){
          
        },
        methods:{
            ...mapMutations(["login","clear"]),
            submmit(){
                let username = this.username.trim();
                let password = this.password.trim();
                if(!username || !password){
                    alert("用户名和密码不能为空!");
                    return false;
                }
                this.login({username,password});
                this.$router.replace({name:"home"});
            },
            loginOut(){
                this.username = "";
                this.password = "";
                this.clear();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login{
        .form{
            margin-top:20px;
            .line{
                height:30px;
                width:100%;
                box-sizing: border-box;
                padding-left:20px;
                padding-right:20px;
                margin-bottom: 20px;
                .label{
                    color:#333;
                    font-size: 14px;
                    margin-right:20px;
                    width:54px;
                    text-align: right;
                    display: inline-block;
                }
                input{
                    width:240px;
                    height:30px;
                    border:1px solid #eee;
                    font-size:14px;
                    color:#333;
                    box-sizing: border-box;
                    padding-left:10px;
                }
            }
        }
        .btn{
                margin-top:40px;
                text-align: center;
                .submmit{
                      height:35px;
                      width:240px;
                      line-height: 35px;
                      background-color: #005aa0;
                      color:#fff;
                      text-align: center;
                      border-radius: 6px;
                      display: inline-block;
                }
            }
    }
</style>