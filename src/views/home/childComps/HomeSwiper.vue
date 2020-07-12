<template>
  <div class="HomeSwiper">
    <Swiper>
       <swiper-item v-for=" (item,index) in banners" :key="index">
         <a :href="item.link">
           <img :src="item.image" alt="">
         </a>
       </swiper-item>
     </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
   name:'HomeSwiper',
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
   }
}
</script>

<style>

</style>