<template>
  <div id="app">


    <button @click="callError()">Chiama 500</button>
    <pop-up v-if="openPopUp" @closePopUp="openPopUp = false" :msg="errorMsg"></pop-up>


    <div id="nav">
      <router-link to="/">Search</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PopUp from './components/PopUp.vue';

@Component({
  components: {
    PopUp,
  }
})

export default class App extends Vue {
  @Prop() private openPopUp!: Boolean = false ; 
  private errorMsg: string = "Internal Server Error"
 
 created() {

  this.axios.interceptors.response.use((data: any) => {
    if(data.status === 200)
    {
      return data;
    }

    }, (error: any)=> {

      this.openPopUp = true;

  })

 }

  callError()
  {
    this.axios.get("https://httpstat.us/500")
    .then((response) => {
      if(response){ console.log(response); }
    })
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
