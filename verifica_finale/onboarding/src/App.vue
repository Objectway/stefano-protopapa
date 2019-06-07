<template>
  <div id="app">
    <header>
        <i class="fas fa-bars" @click="openMenu = true" title="menu"></i>
        <div><span @click="goHome()" title="ONBOARDING"> ONBOARDING </span></div>
        <span class="notify" v-if="userSession"><i class="fas fa-bell" title="Notification"></i></span>
        <span class="notify" v-if="!userSession"><i class="fas fa-sign-in-alt" title="Login" @click="openLoginWindow()"></i></span>
        <span class="notify" v-if="userSession"><i class="fas fa-sign-out-alt" title="Logout" @click="userLogout()"></i></span>
    </header>

    <div class="WrapNav" v-if="openMenu">
      <div class="WrapNav__nav">
        <ul>
          <li><router-link class="link" to="/"></i>Home</router-link></li>
          <li v-if="userSession"><router-link class="link" to="/prospect"> Lista Utenti </router-link></li>
          <li v-if="userSession"><router-link class="link" to="/new-prospect"> Nuovo Utente </router-link></li>
          <li @click="openMenu = false"> Chiudi </li>
        </ul>
      </div>
      <div class="WrapNav__navSpec" @click="openMenu = false">
      </div>
    </div>

    <router-view/>
    <login v-if="openLogin" @closeLogin="openLogin = false; userSession = $store.getters.getSession"></login>
    <loader v-if="showLoader"></loader>
    <footer>
      © 2019 ObjectWay S.p.A. — P.IVA IT07114250967 — Trademarks and brands are the property of their respective owners.
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue';
import Loader from '@/components/Loader.vue';
import { eventBus } from '@/main.ts';

@Component({
  components: {
    Login,
    Loader
  },
})

export default class App extends Vue {
  private userSession: boolean = this.$store.getters.getSession;
  private openLogin: Boolean = false ;
  private openMenu: Boolean = false ;
  private showLoader: Boolean = false ;

  created(){

    this.showLoader = true;
    this.$store.dispatch('getUserList').then(() => {
      let arrUsr = this.$store.getters.getInfoEndPoint;
    }).then(() => {
      setTimeout(() => {
        this.showLoader = false;
      }, 2000)
    });
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
  height: 100%;

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

  .WrapNav {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;

    &__navSpec{
      width: 70%;
      height: 100%;
      background-color: transparent;
    }

    &__nav {
      width: 35%;
      height: 100%;
      opacity: 0.7;
      display: block;
      background-color: black;
      color: #fff;
      text-align: left;
      padding: 24px;

      li {
        margin-bottom: 24px;
        color: #fff;
        opacity: 1;
        text-decoration: none;
        font-weight: bold;
        font-size: 22px;
        cursor: pointer;

        i{
          margin-right: 8px;
        }
      }

      .link {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
      }
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
