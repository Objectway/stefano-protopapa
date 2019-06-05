<template>
  <div class="NewUserStep1">
    <div class="NewUserStep1__subtitle">
      Per iniziare il censimento del prospect scegliere la tipologia di cliente.
    </div>
    <div class="NewUserStep1__body">
      <span>Scegli la tipologia di cliente</span>
      <div class="NewUserStep1__type">
        <div class="NewUserStep1__typeBox" @click="$emit('goStep2', 'stepPF')">
          <i class="fas fa-user"></i>
          <span>
            Persona fisica
          </span>
        </div>
        <div class="NewUserStep1__typeBox" @click="$emit('goStep2', 'stepPG')">
          <i class="fas fa-city"></i>
          <span>
            Persona giuridica
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class NewUserStep1 extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.NewUserStep1{

  &__subtitle{
    font-size: 12px;
    color: #bdbebf;
  }

  &__body{
    padding-top: 100px;
    text-align: center;

    span{
      font-weight: bold;
      font-size: 20px;
    }
  }

  &__type{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 32px;
  }

  &__typeBox{
    width: 30%;
    height: 160px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;

    i{
      font-size: 48px;
      margin-bottom: 8px;
    }

    span
    {
      font-weight: bold;
      font-size: 16px;
    }

    &:first-child{
      margin-right: 16px;
    }

    &:last-child{
      margin-left: 16px;
    }
  }
}
</style>
