import likes from "../../../../public/data/likes.json";
import recommends from "../../../../public/data/recommends.json";
import { ajax } from "../../../util/common";

export default {
  namespaced:true,
  state:{
    likes:[],
    recommends:[]
  },
  actions:{ //在action中可以进行ajax请求数据并对数据进行处理
    getLikes({state,commit,rootState},code){
        let result = likes.map((v)=>{
            v.desc+=`,${code}`;
            return v;
        })
        ajax(result).then((data)=>{
            commit("getLikes",data);
        }) 
    },
    getRecommends({commit}){
        ajax(recommends).then((data)=>{
            commit("getRecommends",data);
        }) 
    }
  },
  mutations:{
    getLikes(state,result){ //在mutation只能进行同步操作,在这个函数中也可以做一些数据处理的工作再赋值给store
        state.likes = result;
    },
    getRecommends(state,result){
        state.recommends = result;
    }
  },
  getters:{
      recommendData(state,getters,rootState){
          return state.recommends.map((v)=>{
                v.desc+=`,getter`;
                return v;
          })
      }
  }
}