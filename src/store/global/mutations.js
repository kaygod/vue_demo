export default {
    login(state,{username,password}){
        state.userInfo =  {
            username,
            password,
            hasLogin:true
        }
        let data = JSON.stringify({
            username,
            password,
            hasLogin:true
        })
        localStorage.setItem("userInfo",data) 
    },
    clear(state){
        let data =  {
            username:"",
            password:"",
            hasLogin:false
        }
        state.userInfo = data;
        localStorage.setItem("userInfo",JSON.stringify(data))  
    }
}