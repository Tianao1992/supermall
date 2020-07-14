<template>
  <div class="HomeSwiper">
    <Swiper ref="swiper">
       <swiper-item v-for=" (item,index) in banners" :key="index">
         <a :href="item.link">
           <img :src="item.image" alt="" @load="imgload">
         </a>
       </swiper-item>
     </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
   name:'HomeSwiper',
   data() {
     return {
       isload:false
     }
   },
   props: {
      banners: {
          type:Array,
          default() {
              return []
          }
      }
   },
   components:{
    Swiper,
    SwiperItem
   },
   methods: {
     imgload() {
       if (!this.isload) {
           this.$emit('swiperImgLoad')
           this.isload = true
       }
     },
     startTimer() {
         this.$refs.swiper.startTimer()
     },
     stopTimer() {
       this.$refs.swiper.stopTimer()
     }
   }
}
</script>

<style>

</style>