<template>
  <div class='Home'>
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
      <tab-control ref='tabControl1' :titles="['流行', '新款', '精选']" @tabClick="tabClick" v-show="isTabFixed" :class="{topControl:isTabFixed}">
      </tab-control>
    <scroll class="content" ref="scroll" 
    :probe-type="3"
     @scroll="contentScroll"
     :pull-up-load="true"
     @pullingUp="loadMore"
     >
        <home-swiper :banners="banners" ref="hSwiper" @swiperImgLoad="swiperImgLoad"></home-swiper>
        <RecommendView :recommends='recommends'></RecommendView>
        <FeatureView></FeatureView>
        <tab-control ref='tabControl2' :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isshowbacktop"></back-top>

  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'
import {getHomeMultidata, getHomeGoods} from 'network/home.js'

import {debounce} from 'common/utils'
 
export default {
  name: 'Home',
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop':{page:0 , list:[]},
        'new':{page:0 , list:[]},
        'sell':{page:0 , list:[]},
      },
      currentType: 'pop',
      isshowbacktop: false,
      taboffsetTop: 0,
      isTabFixed: false,
      saveY:0,
    }
  },
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
   created() {
    // 1. 请求多个数据
    this.getHomeMutlData();
    //请求商品数据
    this.getHomeGoods('pop');

    this.getHomeGoods('new');

    this.getHomeGoods('sell');
  },
  computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
  },
  mounted() {
    //图片加载完成 刷新scroll 高度
    //对频繁刷新 添加防抖函数
    const refresh = debounce(this.$refs.scroll.refresh,100);
    this.$bus.$on('imgLoad', () => {
      refresh()
    })
  },
  destroyed() {
     console.log('home destroyed');
  },
  activated() {
     this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //离开home 保持Y
     this.saveY = this.$refs.scroll.getCurrentY();
      this.$refs.hSwiper.stopTimer()
  },
  methods: {
    /* 
       事件监听的相关方法
    */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
        default:
          break;
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    //获取轮播图高度
    swiperImgLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    backClick() {
      this.$refs.scroll.scrollTop(0,0);
    },
    contentScroll(position) {
       this.isshowbacktop = (-position.y) > 1000 
       this.isTabFixed = (-position.y) > this.taboffsetTop
    },
    loadMore() {
        this.getHomeGoods(this.currentType);
    },
    //数据请求再次封装
    getHomeMutlData() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }).catch(err => {
        //  console.log(err);
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res => {
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page + 1;
            // this.$refs.scroll.finishPullUp()
      }).catch(err => {
            console.log(err);
      })
    }
  }
}
</script>
<style scoped>
  .Home {
    /* padding-top: 44px; */
    height: 100vh;
    /* position: relative; */
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    /* 原生吸顶去掉 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100; */
  }
  .topControl {
    position: relative;
    z-index: 9;
  }
  /* css 吸顶 */
  /* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  } */
  .content {
    /* height: calc(100% - 49px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
