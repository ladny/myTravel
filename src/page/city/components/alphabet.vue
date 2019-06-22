<template>
    <div class="list">
      <ul>
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
          {{item}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "alphabet",
        props: {
          cities:Object
        },
        computed: {
        //计算字母
          letters () {
            const letters=[]
            for (let i in this.cities) {
              letters.push(i)
            }
            return letters
          }
        },
        data () {
          return {
            touchStatus:false, //标识位
            startY:0,
            timer:null //函数截流
          }
        },
        updated () {
          this.startY=this.$refs['A'][0].offsetTop //A元素距离顶部的高度
        },
        methods:{
          handleLetterClick (e) {
            this.$emit("change",e.target.innerText)
          },
          handleTouchStart () {
            this.touchStatus=true
          },
          handleTouchMove (e) {
            if(this.touchStatus) {
              if(this.timer) {
                clearTimeout(this.timer)
              }
              this.timer=setTimeout(()=>{
                const touchY=e.touches[0].clientY-79//手指滚动的位置与顶部底部的差值
                const index=Math.floor((touchY-this.startY)/20) //获取字母的小标 每个字母的高度20
                if(index>=0 && index<this.letters.length) {
                  this.$emit('change',this.letters[index])
                }
              },16)
            }
          },
          handleTouchEnd (e) {
            this.touchStatus=false
          },
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    top:1.58rem
    right:0
    bottom:0
    width:.4rem
    .item
      line-height:.4rem
      text-align:center
      color:$bgColor

</style>
