<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <spinner-val :mynumber="valore"></spinner-val><br>
    <spinner-comp @my-event="setVal"></spinner-comp>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './components/spinner-comp.ts';
import './components/spinner-val.ts';

@Component({})

export default class App extends Vue {
  @Prop() private valore : number = 0;
  
  setVal(data: any)
  {
    this.valore = data.detail.num;
  }

  metodo(numero: number){
    return numero++;
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
