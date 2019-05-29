<template>
  <div id="app">
    <div class="header">
      <h1>Shop Tracker</h1>
      <div>
        <button class="butt" @click="switchView()" v-if="dinamicComponent==='ticket'">Shop</button>
        <button class="butt" @click="switchView()" v-if="dinamicComponent==='shop'">Ticket</button>
      </div>
    </div>
    <keep-alive>
    <component :is="dinamicComponent"></component>
    </keep-alive>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShopBody from './components/ShopBody.vue';
import SetTicket from './components/SetTicket.vue';

@Component({
  components: {
    shop: ShopBody,
    ticket: SetTicket
  }
})

export default class App extends Vue {
  private dinamicComponent: string = "shop";

  switchView(){
    if(this.dinamicComponent === "shop"){ 
      this.dinamicComponent = "ticket";
    }else{
    if(this.dinamicComponent === "ticket"){ this.dinamicComponent = "shop";}}
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

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .butt
    {
      background-color: #42b983;
      border: 0px;
      color: #fff;
      font-size: 17px;
      padding: 5px;
      width: 70px;
      border-radius: 3px;
    }
  }
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
