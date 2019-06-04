<template>
  <div id="app">
    <header>
        <i class="fas fa-bars" @click="openMenu = true"></i>
        <div> CONNECTUS </div>
        <i class="fas fa-sign-in-alt"></i>
    </header>

    <div class="Nav" v-if="openMenu">
      <ul>
        <li><router-link class="Nav__link" to="/">Home</router-link></li>
        <li><router-link class="Nav__link" to="/prospect">Lista Utenti</router-link></li>
      </ul>
      <span @click="openMenu = false"> X </span>
    </div>

    <router-view/>
    <footer>
      © 2018 ObjectWay S.p.A. — P.IVA IT07114250967 — Trademarks and brands are the property of their respective owners.
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class App extends Vue {
  @Prop() private openMenu: Boolean = false ;

  created(){
    this.axios.get(this.$store.getters.getInfoEndPoint)
    .then((response) => {
      //this.$store.commit('setList', response.data);
      let arrUser = response.data;
      let i: number = 0;
      arrUser.forEach(element => {
        let querystring = "?id=" + element.id;
        this.axios.get(this.$store.getters.getPhotoEndPoint + querystring)
          .then((response) => {
            arrUser[i].thumb = response.data[0].thumbnailUrl;
            arrUser[i].thumbTitle = response.data[0].title;
            i++; 
        });
      });
      this.$store.commit('setList', arrUser);
    })
  }

  closePopUp(){
      this.$emit('closePopUp');
  }
}
</script>
<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #cccccc;

  header{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #005dad;
    color: #fff;
    font-size: 32px;
    padding: 10px;
    div{
      width: 100%;
      margin-left: 12px;
      font-size: 24px;
      font-weight: bold;
    }
  }

  .Nav{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    display: block;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 24px;
    li{
      margin-bottom: 16px;
    }
    &__link{
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 24px;
    }
  }

  footer{
    padding: 10px;
    background-color: #3d3d3d;
    color: white;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
