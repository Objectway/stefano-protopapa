<template>
  <div class="Login">
    <div class="Login__overlay">
    </div>
    <div class="Login__window">
        <div class="Login__close" @click="closePopUp()"> 
          CHIUDI
        </div>

        <div class="Login__body">
          <keep-alive>
            <component :is="dinamicComponent"></component>
          </keep-alive>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginForm from './LoginForm.vue';
import RetrivePassword from './RetrivePassword.vue';


@Component({
  components: {
    comp1: LoginForm,
    comp2: RetrivePassword
  }
})

export default class Login extends Vue {
  private dinamicComponent: string = "comp1";

  closePopUp(){
      this.dinamicComponent = "comp1";
      this.$emit('closePopUp');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Login{

  &__overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;
    display: block;
    z-index: 2;
    top: 0;
    left: 0;
  }

  &__window{
    width: 70%;
    position: fixed;
    z-index: 3;
    border: 1px solid #005dad;
    background-color: white;
    box-sizing: border-box;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
    

  &__body{
    font-size: 20px;
    font-weight: bold;
    padding: 40px;
    background-color: white;
    div{
      margin-bottom:60px;

      span{
          font-size: 20px;
          font-weight: bold;
          font-family: 'Roboto';
          font-weight: bold;
          font-style: normal;
      }

      span:first-child{
          color:black;
      }

      span:last-child{
          color: red;
          margin-left: 40px;
      }
    }
  }

  &__close{
    text-align: right;
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    font-family: 'Roboto';
    font-weight: bold;
    font-style: normal;
  }
}
</style>
