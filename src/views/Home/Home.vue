<template>
  <div class="home">
      <Header title="首页" :hasBack="false"/>
      <Likes/>
      <Recommends/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import Likes from "./components/Likes.vue";
import Recommends from "./components/Recommends.vue";
import { mapState,mapMutations,mapActions } from "vuex";

export default {
  name: 'home',
  components: {
    Header,
    Likes,
    Recommends
  },
  methods:{
    ...mapActions(['home/getLikes','home/getRecommends'])
  },
  mounted(){
      this["home/getLikes"]("我是一只丑小鸭");
      this["home/getRecommends"]();
  }
}
</script>
