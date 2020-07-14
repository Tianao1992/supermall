<template>
  <div class='Category'>
      <h2>分类</h2>
      <div class="wrapper" ref="aaaa">
      <ul class="content">
       <li>我是1个</li>
       <li>我是2个</li>
       <li>我是3个</li>
       <li>我是4个</li>
       <li>我是5个</li>
       <li>我是6个</li>
       <li>我是7个</li>
       <li>我是8个</li>
       <li>我是9个</li>
       <li>我是10个</li>
       <li>我是11个</li>
       <li>我是12个</li>
       <li>我是13个</li>
       <li>我是14个</li>
       <li>我是15个</li>
       <li>我是16个</li>
       <li>我是17个</li>
       <li>我是18个</li>
       <li>我是19个</li>
       <li>我是20个</li>
       <li>我是21个</li>
       <li>我是22个</li>
       <li>我是23个</li>
       <li>我是24个</li>
       <li>我是25个</li>
       <li>我是26个</li>
       <li>我是27个</li>
       <li>我是28个</li>
       <li>我是29个</li>
       <li>我是30个</li>
       <li>我是31个</li>
       <li>我是32个</li>
       <li>我是33个</li>
       <li>我是34个</li>
       <li>我是35个</li>
       <li>我是36个</li>
       <li>我是37个</li>
       <li>我是38个</li>
       <li>我是39个</li>
       <li>我是40个</li>
       <li>我是41个</li>
       <li>我是42个</li>
       <li>我是43个</li>
       <li>我是44个</li>
       <li>我是45个</li>
       <li>我是46个</li>
       <li>我是47个</li>
       <li>我是48个</li>
       <li>我是49个</li>
       <li>我是50个</li>
       <li>我是51个</li>
       <li>我是52个</li>
       <li>我是53个</li>
       <li>我是54个</li>
       <li>我是55个</li>
       <li>我是56个</li>
       <li>我是57个</li>
       <li>我是58个</li>
       <li>我是59个</li>
       <li>我是60个</li>
       <li>我是61个</li>
       <li>我是62个</li>
       <li>我是63个</li>
       <li>我是64个</li>
       <li>我是65个</li>
       <li>我是66个</li>
       <li>我是67个</li>
       <li>我是68个</li>
       <li>我是69个</li>
       <li>我是70个</li>
       <li>我是71个</li>
       <li>我是72个</li>
       <li>我是73个</li>
       <li>我是74个</li>
       <li>我是75个</li>
       <li>我是76个</li>
       <li>我是77个</li>
       <li>我是78个</li>
       <li>我是79个</li>
       <li>我是80个</li>
       <li>我是81个</li>
       <li>我是82个</li>
       <li>我是83个</li>
       <li>我是84个</li>
       <li>我是85个</li>
       <li>我是86个</li>
       <li>我是87个</li>
       <li>我是88个</li>
       <li>我是89个</li>
       <li>我是90个</li>
       <li>我是91个</li>
       <li>我是92个</li>
       <li>我是93个</li>
       <li>我是94个</li>
       <li>我是95个</li>
       <li>我是96个</li>
       <li>我是97个</li>
       <li>我是98个</li>
       <li>我是99个</li>
       <li>我是100个</li>
     </ul>
      </div>
   
  </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data(){
    return {
      scorll: null
    }
  },
  mounted() {
    this.scorll = new BScroll(this.$refs.aaaa, {
      probeType: 3,
      pullUpload: true
    })

    this.scorll.on('scroll', (position) => {
      console.log(position);
    })
    this.scorll.on('pullingUp', () => {
       console.log('上来加载更多');
    })
  },
  

}
</script>
<style scoped>
 .wrapper {
    height: 150px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
