import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/Home";
import state from "./global/state";//这三个用来存储应用全局使用的状态
import actions from "./global/actions";
import mutations from "./global/mutations";

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    home
  }
})
