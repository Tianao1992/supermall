<template>
  <div class='detail'>
      <detail-nav></detail-nav>
      <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'
import DetailSwiper from './childComps/DetailSwiper'
import {getDetail} from 'network/detail.js'
export default {
  name: 'Detail',
  data(){
    return {
        iid:null,
        topImages:[]
    }
  },
  components: {
    DetailNav,
    DetailSwiper
  },
  created(){
     this.iid = this.$route.params.id
     getDetail(this.iid).then((res) => {
         console.log(res);
         this.topImages = res.result.itemInfo.topImages;
     }).catch(err => {
         console.log(err);
     })
  },
  mounted(){},
  methods: {}
}
</script>
<style scoped>

</style>
