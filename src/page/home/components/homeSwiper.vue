<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "homeswiper",
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      showSwiper() {
        return this.list.length
      }

    }
  }
</script>

<style lang="stylus" scoped>
  //样式穿透，不受scoped的限制
  .
  wrapper > > >
  .swiper-pagination-bullet-active
    background: #ffffff

  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.7%
    background: #eaeaea
    //设置宽高比例padding-bottom
    .swiper-img
      width: 100%

</style>
