<template>
  <div class="LoginForm">
    <div class="LoginForm__title"> Onboarding Login </div>
    <div class="LoginForm__desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
    <div class="LoginForm__desc">Sed dignissim ultricies egestas. </div>
    <div>
      <div class="LoginForm__label"> USERNAME </div>
      <input type="text" class='LoginForm__input' v-model="username" @focus="clrErrUsername()">
      <div class="LoginForm__errMsg" v-if="viewErrUser">{{errUser}}</div>
    </div>
    <div>
      <div class="LoginForm__label"> PASSWORD </div>
      <input type="password" class='LoginForm__input' v-model="password" @focus="clrErrPassword()">
      <div class="LoginForm__errMsg" v-if="viewErrPw">{{errPw}}</div>
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
            this.$router.push('/prospect');
          };
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

}
</style>
