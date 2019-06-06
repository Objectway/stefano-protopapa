<template>
  <div class="LoginForm">
    <div class="LoginForm__title"> Onboarding Login </div>
    <div class="LoginForm__desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed dignissim ultricies egestas. </div>
    <div class="LoginForm__infoBlock">
      <div class="label"> USERNAME </div>
      <input type="text" class='input' v-model="username" @focus="clrErrUsername()">
      <div class="spiceErrMsg" v-if="!viewErrUser"></div>
      <div class="errMsg" v-if="viewErrUser">{{errUser}}</div>
    </div>
    <div  class="LoginForm__infoBlock">
      <div class="label"> PASSWORD </div>
      <input type="password" class='input' v-model="password" @focus="clrErrPassword()">
      <div class="spiceErrMsg" v-if="!viewErrPw"></div>
      <div class="errMsg" v-if="viewErrPw">{{errPw}}</div>
    </div>
    <button class="LoginForm__enter" @click="enterLogin()">ACCEDI</button>
    <div class="LoginForm__retrivePass">Recupero password</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class LoginForm extends Vue {
  public username: string;
  public password: string;
  public errUser: string;
  public viewErrUser: boolean = false; 
  public errPw: string;
  public viewErrPw: boolean = false;

  enterLogin(){
    if(!!!this.username)
    {
      this.errUsername("Inserisci uno username!");
    }

    if(!!!this.password)
    {
      this.errPassword("Inserisci una password!");
    }

    if(!this.viewErrPw && !this.viewErrUser)
    {
      let usernameFound: boolean = false;
      let userValidate: boolean = false;
      for (let i of this.$store.getters.getListUser) {
        if(i.username === this.username)
        {
          usernameFound = true;
          if(i.address.zipcode === this.password){

            this.$store.commit('login');

            this.$emit('closeLogin');

            this.$router.push('/prospect');

            userValidate = true;
          }
        }
      }
      if(!usernameFound){ this.errUsername("Username inesistente! Ricontrolla i dati."); 
      }else{
        if(!userValidate){ 
          this.errPassword(this.username + " ricontrolla la password!"); 
        }
      }
    }
  }

  errUsername(msg: string){
    this.errUser = msg;
    this.viewErrUser = true;
  }

  errPassword(msg: string){
    this.errPw = msg;
    this.viewErrPw = true;
  }

  clrErrUsername(){
    this.errUser = "";
    this.viewErrUser = false;
  }

  clrErrPassword(){
    this.errPw = "";
    this.viewErrPw = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LoginForm{
  &__title{
    font-size: 18px;
    color: #000;
    font-weight: bold;
    margin-bottom: 24px;
  }

  &__desc{
    font-size: 16px;
    color: #bdbebf;
    margin-bottom: 64px;
  }

  &__infoBlock{
    text-align: left;
    width: 100%;
    margin-bottom: 16px;

    .label{
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 4px;
    }

    .input {
      width: 100%;
      padding: 8px;
      border: 1px solid #bdbebf;
      color: #000;
    }

    .errMsg{
      color: #ec0f0f;
      font-size: 12px;
      padding: 2px 0 0 0;
    }

    .spiceErrMsg{
      height: 14px;
    }
  }

  &__enter{
    width: 100%;
    padding: 8px 16px;
    font-size: 18px;
    background-color: #1db0e9;
    color: #82d2fd;
    font-weight: bold;
    border: 0px;
    margin-bottom: 16px;
  }

  &__retrivePass{
    color: #00b1e7;
    cursor: pointer;
    font-size: 12px;
  }
}
</style>
