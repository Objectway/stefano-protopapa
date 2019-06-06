<template>
  <div id="app">
    <header>
        <i class="fas fa-bars" @click="openMenu = true" title="menu"></i>
        <div><span @click="goHome()" title="ONBOARDING"> ONBOARDING </span></div>
        <span class="notify" v-if="userSession"><i class="fas fa-bell" title="Notification"></i></span>
        <span class="notify" v-if="!userSession"><i class="fas fa-sign-in-alt" title="Login" @click="openLoginWindow()"></i></span>
        <span class="notify" v-if="userSession"><i class="fas fa-sign-out-alt" title="Logout" @click="userLogout()"></i></span>
    </header>

    <div class="Nav" v-if="openMenu">
      <ul>
        <li><router-link class="Nav__link" to="/">Home</router-link></li>
        <li v-if="userSession"><router-link class="Nav__link" to="/prospect">Lista Utenti</router-link></li>
        <li v-if="userSession"><router-link class="Nav__link" to="/new-prospect">Nuovo Utente</router-link></li>
        <li @click="openMenu = false"> Chiudi </li>
      </ul>
    </div>

    <router-view/>
    <login v-if="openLogin" @closeLogin="openLogin = false; userSession = $store.getters.getSession"></login>
    <footer>
      © 2019 ObjectWay S.p.A. — P.IVA IT07114250967 — Trademarks and brands are the property of their respective owners.
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue';
import { eventBus } from '@/main.ts';

@Component({
  components: {
    Login,
  },
})

export default class App extends Vue {
  private userSession: boolean = this.$store.getters.getSession;
  private openLogin: Boolean = false ;
  private openMenu: Boolean = false ;

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

  goHome(){
    this.$router.push('/');
  }

  openLoginWindow() {
    this.openLogin = true;
  }

  userLogout() {
    this.$store.commit('logout');
    this.userSession = this.$store.getters.getSession;
    this.$router.push('/');
  }
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
font-family: 'Montserrat', sans-serif;
background-color: #f5f5f5;

  header{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #005dad;
    color: #fff;
    font-size: 24px;
    padding: 10px;

    .notify{
      margin-left: 16px;
      font-size: 18px;
    }

    div{
      width: 100%;
      margin-left: 24px;
      font-size: 18px;
      padding-top: 4px;
      span {
        cursor: pointer;
      }
    }

    i{
      cursor: pointer;
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
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 24px;
      cursor: pointer;
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

  img{
    width:100%;
  }
}
</style>
