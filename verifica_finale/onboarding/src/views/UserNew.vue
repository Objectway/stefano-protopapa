<template>
  <div class="UserNew">
    <div class="UserNew__head">
      <div class="UserNew__title"> Crea un nuovo Prospect </div>
    </div>
    <div class="UserNew__body">
      <component :is="stepNewUser" @goStep2="stepNewUser = $event"></component>
    </div>
    <div class="UserNew__utilityBar">
      <button class="UserNew__decline" @click="declineProcedure()">ANNULLA</button>
      <button class="UserNew__enter" v-if="stepNewUser === 'stepPF'" @click="startRegistration()">AVANTI</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {eventBus} from '@/main.ts';
import NewUserPersonaFisica from '@/components/NewUserPersonaFisica.vue';
import NewUserPersonaGiuridica from '@/components/NewUserPersonaGiuridica.vue';
import NewUserStep1 from "@/components/NewUserStep1.vue";

@Component({
  components: {
    step1: NewUserStep1,
    stepPF: NewUserPersonaFisica,
    stepPG: NewUserPersonaGiuridica
  }
})
export default class UserNew extends Vue {
  private subtitle: string = "Per iniziare il censimento del prospect scegliere la tipologia di cliente.";
  private stepNewUser: string = "step1";
  private num: number = 0;

  declineProcedure(){
    this.$router.push('/prospect');
  }

  startRegistration(){
    if(this.stepNewUser === 'stepPF' || this.stepNewUser === 'stepPF'){
      eventBus.$emit('i-got-clicked');
    }
  }
}
</script>
<style scoped lang="scss">
.UserNew{
  padding: 32px;

  &__head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__title{
    font-size: 18px;
    color: #000;
    font-weight: bold
  }

  &__body
  {
    height: 500px;
    //background-color: #42b983;
  }

  &__utilityBar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    padding: 8px;
    border-radius: 4px;
  }

  &__decline{
    width: 90px;
    padding: 8px 16px;
    background-color: #bdbebf;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    border: 0px;
    outline: none;
  }

  &__enter{
    width: 90px;
    padding: 8px 16px;
    background-color: #1db0e9;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    border: 0px;
    outline: none;
  }
}
</style>