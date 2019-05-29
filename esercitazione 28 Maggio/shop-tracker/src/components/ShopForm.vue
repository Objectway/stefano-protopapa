<template>
  <div class="shopForm">
    <fieldset>
      <legend>Aggiungi prodotto</legend>
      <div>
        <input type="number" v-model="item.cost" placeholder="Costo">
        <span>Costo Unitario (€)</span>
      </div>
      <div>
        <input type="number" v-model="item.pices" placeholder="Pezzi">
        <span>Pezzi</span>
      </div>
      <div>
        <input type="text" v-model="item.name" placeholder="Nome">
        <span>Nome</span>
      </div>
      <button @click="addItem()">Aggiungi</button>
    </fieldset>
    <pop-up v-if="openPopUp" @closePopUp="openPopUp = false" :msg="popMsg"></pop-up>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShopItem from '../shop-item.ts';
import PopUp from './PopUp.vue';

@Component({
  components: {
    PopUp
  }
})

export default class ShopBody extends Vue {
  private item: ShopItem = {"cost": undefined, "pices": undefined, "name": ''};
  @Prop() private openPopUp: Boolean = false ; 
  private popMsg: string;

  addItem(){

    if(!this.item.cost || !this.item.pices || this.item.name === '')
    {
      this.popMsg = "Ricontrolla i dati";
      this.openPopUp = true;
    }
    else
    {
      this.$store.commit('addItem', this.item);
      this.item = {"cost": undefined, "pices": undefined, "name": ''};
      this.popMsg = "Prodotto correttamente inserito";
      this.openPopUp = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopForm{
  text-align: left;
  margin-bottom: 10px;

  fieldset{
    border: 1px solid #2c3e50;
    border-radius: 5px;
    legend{
      color: #2c3e50;
    }
    div{
      margin-bottom: 5px;

      input
      {
        border: 1px solid #2c3e50;
        padding: 5px;
        margin-right: 5px;
      }

      span{
        color: #2c3e50;
        font-weight: bold;
      }
    }

    div:last-child {
      margin-bottom: 5px;
    }

    button {
      background-color: #42b983;
      border: 0px;
      color: #fff;
      font-size: 17px;
      padding: 5px;
      border-radius: 3px;
    }
  }
}
</style>
