<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class App extends Vue {

  created(){
    this.axios.get(this.$store.getters.getInfoEndPoint)
      .then((response) => {
        this.$store.commit('setList', response.data);
    })
  }

  closePopUp(){
      this.$emit('closePopUp');
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
