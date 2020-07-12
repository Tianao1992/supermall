<template>
  <div class='Home'>
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <RecommendView :recommends='recommends'></RecommendView>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  data(){
    return {
      banners: [],
      recommends: [],
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
  },
   created() {
    // 1. 请求多个数据
    getHomeMultidata().then(res => {
       this.banners = res.data.banner.list;
       this.recommends = res.data.recommend.list;
    }).catch(err => {
       console.log(err);
    })
  }
}
</script>
<style scoped>
 .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
 }
</style>
