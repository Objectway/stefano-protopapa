<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <custom-button :button-name="'Cliccami'" :button-color="'red'"></custom-button>
    <div>
      <custom-button v-for="item in buttons" :button-name="item.name" :button-color="item.color"></custom-button>
    </div>-->
    <!--<usr-button :buttons="buttons"></usr-button>-->
    <!--<usr-avatar :avatarSrc="url"></usr-avatar>-->
    <button @click="changeComponent">Change Component</button>
    <div v-for="user in users">
    <usr-line :usrDetails="user">
      <h1 slot="franco">Ciaooo</h1>
      <h1> Byeee </h1>
    </usr-line>
    <component :is="change"></component>
    </div>
    <prova-direttiva :color="'white'"></prova-direttiva>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import UsrLine from './components/UsrLine.vue'
import EventBus from './main'
import ProfileCard from './components/ProfileCard.vue';
import AnimalList from './components/AnimalList.vue';
import ProvaDirettiva from './components/ProvaDirettiva.vue'

interface usrDetails{
  avatarSrc: string;
  detailsNome: string;
  detailsCognome: string;
  firstLine: string;
  secondLine: string;
  buttons: {name: string;}[]
}

@Component({
  components: {
    UsrLine,
    app1: ProfileCard,
    app2: AnimalList,
    ProvaDirettiva

  }
})
export default class App extends Vue{

  public change: string = "app1";
  private users: usrDetails[] = [
    {
      avatarSrc: "https://www.rollingstone.it/wp-content/uploads/2017/04/avatar.jpg",
      detailsNome: "Stefano",
      detailsCognome: "Protopapa",
      firstLine: "Badge1",
      secondLine: "Badge2",
      buttons: [
        {
          name: 'click1'
        },
        {
          name: 'click2'
        },
        {
          name: 'click3'
        }
      ]
    },
    {
      avatarSrc: "https://i.kinja-img.com/gawker-media/image/upload/s--C00bVsGR--/c_scale,f_auto,fl_progressive,q_80,w_800/a8sv2drcithudsjmy7wz.jpg",
      detailsNome: "Mario",
      detailsCognome: "Rossi",
      firstLine: "Badge1",
      secondLine: "Badge2",
      buttons: [
        {
          name: 'click1'
        },
        {
          name: 'click2'
        }
      ]
    },
    {
      avatarSrc: "https://i.kinja-img.com/gawker-media/image/upload/s--C00bVsGR--/c_scale,f_auto,fl_progressive,q_80,w_800/a8sv2drcithudsjmy7wz.jpg",
      detailsNome: "Luca",
      detailsCognome: "Bianchi",
      firstLine: "Badge1",
      secondLine: "Badge2",
      buttons: [
        {
          name: 'click1'
        }
      ]
    },
    {
      avatarSrc: "https://i.kinja-img.com/gawker-media/image/upload/s--C00bVsGR--/c_scale,f_auto,fl_progressive,q_80,w_800/a8sv2drcithudsjmy7wz.jpg",
      detailsNome: "Fabio",
      detailsCognome: "Verdi",
      firstLine: "Badge1",
      secondLine: "Badge2",
      buttons: [
        {
          name: 'click1'
        },
        {
          name: 'click2'
        }
      ]
    }
  ]

  changeComponent(){
    if(this.change === "app1"){
      this.change = "app2";
    }else{
      this.change = "app1";
    }
  }
/*
  created(){
    EventBus.$on('eventBusCustomEvent', (data: any) => {
      debugger;
    })
  }
*/
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 3px dotted black;
  padding: 10px;
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
