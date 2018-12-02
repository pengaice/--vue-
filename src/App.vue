<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  mounted(){
    this.$store.dispatch('getNavData')
  },
  components: {
    FootGuide
  }
}
</script>

<style>

</style>
