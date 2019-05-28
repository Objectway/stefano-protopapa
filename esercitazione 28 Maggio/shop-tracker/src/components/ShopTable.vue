<template>
  <div class="shopTable">
    <fieldset>
      <legend>Lista della spesa</legend>
      <table>
        <thead>
          <tr>
            <th colspan="4">Importo da pagare:</th>
            <th>{{converNumber(subTot() - scontoTot()) + ' €'}}</th>
          </tr>
          <tr>
            <th colspan="4">Sconot ticket:</th>
            <th style="color: #b62020">{{'-' + converNumber(scontoTot()) + ' €'}}</th>
          </tr>
          <tr>
            <th colspan="4">Spesa totale:</th>
            <th>{{converNumber(subTot()) + ' €'}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arrItem">
            <td><a @click='delItem(index)'><i class="fas fa-trash-alt" style="color: #b62020"></i></a></td>
            <td>{{item.name}}</td>
            <td>{{item.pices}}</td>
            <td>{{converNumber(item.cost) + ' €'}}</td>
            <td>{{converNumber(item.pices * item.cost) + ' €'}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th> <i class="fas fa-trash-alt"></i> </th>
            <th> <i class="fas fa-file-signature"></i> </th>
            <th> <i class="fas fa-infinity"></i> </th>
            <th> <i class="fas fa-money-bill-alt"></i> </th>
            <th> <i class="fas fa-money-check-alt"></i> </th>
          </tr>
        </tfoot>
      </table>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShopItem } from '../shop-item.ts';
import { ShopTicket } from '@/shop-ticket.ts';

@Component
export default class ShopTable extends Vue { 
  private arrItem: ShopItem [] = this.$store.getters.getListItem;
  private tickets: ShopTicket = this.$store.getters.getTicket;
 
  activated(){
    this.arrItem = this.$store.getters.getListItem;
    this.tickets = this.$store.getters.getTicket;
  }

  subTot(){
    let subTot = 0;
    this.arrItem.forEach(element => {
      subTot += element.cost * element.pices
    });
    return subTot;
  }

  scontoTot(){
    return (this.tickets.val * this.tickets.max);
  }
  
  delItem(index){
    this.$store.commit('delItem', index);
  }

  converNumber(num){
    return parseFloat(num).toFixed(2);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopTable{
  fieldset{
    border: 1px solid #2c3e50;
    border-radius: 5px;
    text-align: left;

    legend{
      color: #2c3e50;
    }
    table{
      width: 100%;
      border-spacing: 0px;

      thead{
        text-align: right;

        tr{
          th{
            padding: 5px;
            border: 1px solid #2c3e50;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
          }
        }
      }
      tbody{
        tr{
          td{
            text-align: left;
            min-width: 20%;
            padding: 5px;
          }
          td:nth-child(3){
            text-align: center;
          }
          td:nth-child(4){
            text-align: right;
          }
          td:last-child{
            text-align: right;
          }
        }
        tr:nth-child(even) {background: #e0e0e0}
      }
      tfoot{
        tr{
          background-color: #2c3e50;
          color: #fff;
          th{
            text-align: left;
            padding: 5px;
          }
          th:nth-child(3){
            text-align: center;
          }
          th:nth-child(4){
            text-align: right;
          }
          th:last-child{
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
