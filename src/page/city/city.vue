<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import cityHeader from './components/cityHeader'
  import citySearch from './components/search'
  import cityList from './components/list'
  import alphabet from './components/alphabet'
    export default {
        name: "city",
        components:{
          cityHeader,
          citySearch,
          cityList,
          alphabet
        },
        data () {
          return {
            cities:{},
            hotCities:[],
            letter:''
          }
        },
        mounted () {
          this.getCityInfo()
        },
        methods:{
          getCityInfo () {
            axios.get('/api/city.json')
              .then(this.handleGetCityInfoSucc)
          },
          handleGetCityInfoSucc (res) {
            res=res.data
            if(res.ret && res.data) {
              const data=res.data
              this.cities=data.cities
              this.hotCities=data.hotCities
            }
          },
          handleLetterChange (letter) {
            this.letter=letter
          }
        }
    }
</script>

<style scoped>

</style>
