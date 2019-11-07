
const getLocalData = ()=>{

    let data = localStorage.getItem("userInfo");

    if(data){
      
       return JSON.parse(data);

    }else{
        return null;
    }

}


export default {
    userInfo: getLocalData() || {
        username:"",
        password:"",
        hasLogin:false
    }
}