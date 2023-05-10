<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import Draw from './components/Draw.vue';
import Readme from './components/Readme.vue';



export default {
  data() {
    return {

    }
  },
  components: {
    Readme,
    Draw
  },
}


</script>


<style scoped></style>