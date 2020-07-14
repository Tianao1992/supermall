<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BsScroll from 'better-scroll'
export default {
   name: 'Scroll',
   props: {
    probeType: {
        type:Number,
        default: 0,
    },
    pullUpLoad: {
       type: Boolean,
    default: false
    }
   },
   data() {
       return {
           scroll: null
       }
   },
   mounted() {
       //创建bscroll 对象
      this.scroll = new BsScroll(this.$refs.wrapper, {
           click:true,
           probeType:this.probeType,
           pullUpLoad: this.pullUpLoad
      })
      
      if (this.probeType == 2 || this.probeType ==3) {
          this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position);
         })
      }
      if(this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
      })
      }
      
   },    
   methods: {
       scrollTop(x,y, time =300) {
          this.scroll && this.scroll.scrollTo(x, y, time)
       },
       finishPullUp() {
         this.scroll && this.scroll.finishPullUp()
       },
       refresh() {
         this.scroll && this.scroll.refresh()
        // console.log('----');
       }
   }
}
</script>


<style scoped>
/* scoped  作用域*/
</style>