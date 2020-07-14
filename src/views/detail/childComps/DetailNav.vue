<template>
  <div class='DetailNav' >
      <nav-bar>
          <div slot="left" class="back" @click="goBack">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="titles">
            <div class="titles-item" v-for="(item,index) in titles" 
            :key="index"
            :class="{active: index === currentIndex}"
            @click="itemClick(index)"
            >
            {{item}}
            </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Detailnav',
  data(){
    return {
       titles:['商品','参数','评论','推荐'],
       currentIndex:0
    }
  },
  components: {
    NavBar
  },
  created(){},
  mounted(){},
  methods: {
      itemClick(index) {
          this.currentIndex = index
      },
      goBack() {
          this.$router.go(-1)
      }
  }
}
</script>
<style scoped>
 .titles {
     display: flex;
     font-size: 14px;
 }
 .titles-item {
     flex: 1;
 }
 .active {
     color: var(--color-tint);
 }
 .back img {
    margin-top: 10px;
 }
</style>
