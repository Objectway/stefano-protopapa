<template>
  <div class="ticket">
    <fieldset>
      <legend>Set ticket</legend>
      <div>
        <input type="text" :value="tickets.val" ref="val">
        <span>Costo Unitario (€)</span>
      </div>
      <div>
        <input type="text" :value="tickets.qty" ref="qty">
        <span>Numero totale</span>
      </div>
      <div>
        <input type="text" :value="tickets.max" ref="max">
        <span>Utilizzati</span>
      </div>
      <button @click="setTicket()">Salva</button>
    </fieldset>
    <pop-up v-if="openPopUp" @closePopUp="openPopUp = false" :msg="popMsg"></pop-up>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShopTicket } from '@/shop-ticket.ts';
import PopUp from './PopUp.vue';

@Component({
  components: {
    PopUp
  }
})
export default class SetTicket extends Vue {
  private tickets: ShopTicket;
  @Prop() private openPopUp: Boolean = false ; 
  private popMsg: string = "Ticket aggiornato";
  
  created(){
    this.tickets = this.$store.getters.getTicket;
  }

  activated(){
    this.tickets = this.$store.getters.getTicket;
  }
  
  setTicket(){
    this.tickets.val = this.$refs.val.value;
    this.tickets.qty = this.$refs.qty.value;
    this.tickets.max = this.$refs.max.value;

    this.$store.commit('setTicket', this.tickets);
    this.openPopUp = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ticket{
  text-align: left;
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
    }
  }
}
</style>
