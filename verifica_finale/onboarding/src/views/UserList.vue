<template>
  <div class="UserList">
    <div class="UserList__head">
      <div class="UserList__title"> Elenco Clienti e Prospect </div>
      <div class="UserList__newUser">
        <i class="fas fa-plus-circle"></i>Crea nuovo Prospect
      </div>
    </div>
    <div class="UserList__userSearch">
      <i class="fas fa-search"></i>
      <input v-model="srcKey" v-on:keyup="usersFilter()" type="text" placeholder='Cerca...'>
    </div>
    <div class="UserList__userItem" v-for="user in arrUser">
      <user-row :name="user.name" :thumb="user.thumb" :thumbTitle="user.thumbTitle"></user-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { UserNameThumb }from '@/user-name-thumb.ts';
import { UserInterface }from '@/user-interface.ts';
import '@/components/user-row.ts';

@Component
export default class UserList extends Vue {
  private arrUser: UserInterface[] = this.$store.getters.getListUser;
  private srcKey: string;
  private arrApp: UserInterface[] = [];

  usersFilter(){
//    this.arrUser.filter(item => item.name === "Leanne Graham");
//    this.arrUser.filter(item => item.name.toLowerCase().includes(this.srcKey.toLowerCase()));
 //   this.arrUser.filter(item => console.log(item.name.toLowerCase()));
    this.arrUser = this.$store.getters.getListUser;
    this.arrApp = [];
    this.arrUser.forEach(element => {
      console.log(element.name.toLowerCase().includes(this.srcKey.toLowerCase()));
      let name = element.name.toLowerCase();
      let str = this.srcKey.toLowerCase();
      if(name.includes(str)){
        console.log('xxx');
        this.arrApp.push(element);
      }
    });
    this.arrUser = this.arrApp;

  }
}
</script>
<style scoped lang="scss">
.UserList{
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

  &__newUser{
    color: #00b1e7;

    i{
      margin-right: 4px;
    }
  }
  &__userSearch{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
    border: 2px solid #999;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    padding-bottom: 4px;

    input{
      width: 100%;
      margin: 0px;
      border: 0px;
      background-color: transparent;
      color: #999;
      font-size: 12px;
    }

    input:focus{
      background-color: #fff;
    }

    i{
      color: #999;
      margin: 0 8px 0 4px;
      font-size: 18px;
    }
  }
  &__userItem{
    margin-bottom: 16px;

    &:last-child{
      margin-bottom: 0px;
    }
  }
}
</style>