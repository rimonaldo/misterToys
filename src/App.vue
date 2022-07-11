<template >
  <section>
    <app-header  />
  </section>

  <RouterView :toys="toys" />

  <app-footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/header.vue';
import appFooter from './components/footer.vue';
import appHome from './views/home.vue';
import toyService from './services/toy.service.vue'
import { computed } from '@vue/runtime-core';

export default {
  components: {
    appHeader,
    appFooter,
    appHome,
  },
  data() {
    return {
      toys:this.toys||null,
      labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
      // toy: { "_id": "t101", "name": "Talking Doll", "price": 123, "labels": ["Doll", "Battery Powered", "Baby"], "createdAt": Date.now(), "inStock": true },
    }
  },
  created() {
    this.$store.dispatch({type:'loadToys'})     
  },

  computed:{
    toys(){
      return this.$store.getters.toys
    }
  },
}

</script>

<style>
</style>
