<template>
  <div class="RetrivePassword">
    <div class="RetrivePassword__title"> Recupero Password </div>
    <div class="RetrivePassword__desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed dignissim ultricies egestas. </div>
    <div class="RetrivePassword__infoBlock">
      <div class="label"> USERNAME </div>
      <input type="text" class='input' v-model="username" @focus="clrErrUsername()">
      <div class="spiceErrMsg" v-if="!viewErrUser"></div>
      <div class="errMsg" v-if="viewErrUser">{{errUser}}</div>
    </div>
    <div  class="RetrivePassword__infoBlock">
      <div class="label"> MAIL </div>
      <input type="email" class='input' v-model="email" @focus="clrErrEmail()">
      <div class="spiceErrMsg" v-if="!viewErrEmail"></div>
      <div class="errMsg" v-if="viewErrEmail">{{errEmail}}</div>
    </div>
    <button class="RetrivePassword__enter" @click="retrivePass()">RECUPERA</button>
    <span class = "RetrivePassword__viewPass">{{userPass}}</span>
    <div class="RetrivePassword__retrivePass" @click="goLogin()">Torna alla Login</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class RetrivePassword extends Vue {
  public username: string;
  public email: string;
  public errUser: string;
  public viewErrUser: boolean = false;
  public errEmail: string;
  public viewErrEmail: boolean = false;
  private userPass: string = '';

  retrivePass(){
    if(!!!this.username)
    {
      this.errUsername("Inserisci uno username!");
    }

    if(!!!this.email)
    {
      this.errMail("Inserisci una e-mail valida!");
    }

    if(!this.viewErrEmail && !this.viewErrUser)
    {
      let usernameFound: boolean = false;
      let userValidate: boolean = false;
      for (let i of this.$store.getters.getListUser) {
        if(i.username === this.username)
        {
          usernameFound = true;

          if(i.email === this.email){

            this.userPass = "Password = " + i.address.zipcode;

            userValidate = true;
          }
        }
      }
      if(!usernameFound){ this.errUsername("Username inesistente! Ricontrolla i dati.");
      }else{
        if(!userValidate){
          this.errMail(this.username + " ricontrolla l'e-mail!");
        }
      }
    }
  }

  errUsername(msg: string){
    this.errUser = msg;
    this.viewErrUser = true;
  }

  errMail(msg: string){
    this.errEmail = msg;
    this.viewErrEmail = true;
  }

  clrErrUsername(){
    this.errUser = "";
    this.viewErrUser = false;
  }

  clrErrEmail(){
    this.errEmail = "";
    this.viewErrEmail = false;
  }

  goLogin(){
    const val: string = 'comp1';
    this.$emit("rePassword", val);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.RetrivePassword{
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
      outline: none;
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
    width: 50%;
    padding: 8px 16px;
    font-size: 18px;
    background-color: #1db0e9;
    color: #82d2fd;
    font-weight: bold;
    border: 0px;
    margin-bottom: 16px;
  }

  &__viewPass{
    padding: 0px 18px;
    font-size: 16px;
  }

  &__retrivePass{
    color: #00b1e7;
    cursor: pointer;
    font-size: 12px;
  }
}
</style>
