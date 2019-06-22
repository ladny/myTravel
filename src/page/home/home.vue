<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwiper'
  import homeIcons from './components/icons'
  import homeRecommend from './components/recommend'
  import homeWeekend from './components/weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "home",
    components: {
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommend,
      homeWeekend
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList:[],
        lastCity:''//临时缓冲变量
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted() {
      console.log("mounted")
      this.getHomeInfo()
      this.lastCity=this.city
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city='+this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList=data.weekendList
        }
      }
    },
    //当添加keep-alive时 会出现这个钩子 每次进入页面都会执行，添加一个缓冲变量如果有变化则执行请求
    activated () {
       if(this.lastCity !== this.city) {
         this.lastCity=this.city
         this.getHomeInfo()
       }
    }
  }
</script>

<style scoped>

</style>
