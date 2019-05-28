import Vue from 'vue';
import Vuex from 'vuex';
import {ShopItem} from '@/shop-item.ts';
import {ShopTicket} from '@/shop-ticket.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listItem: <ShopItem[]>[
      {
        "cost":  10,
        "pices": 2,
        "name": "Casse Birra"
      },
      {
        "cost":  6.5,
        "pices": 2,
        "name": "Bottiglie Vino"
      },
      {
        "cost":  13.75,
        "pices": 2,
        "name": "Rum"
      },
      {
        "cost":  0.75,
        "pices": 8,
        "name": "Patatine"
      },
      {
        "cost":  1.20,
        "pices": 2,
        "name": "Succo di pera"
      }
    ],
    ticket: <ShopTicket>{
      "val": 8,
      "qty": 10,
      "max": 4
    }
  },
  getters: {
    getListItem(state){
      return state.listItem;
    },
    getTicket(state){
      return state.ticket;
    },
    getSconto(state){
      return (state.ticket.val * state.ticket.max);
    }
  },
  mutations: {
    addItem: (state, item) => {
      state.listItem.splice(0, 0, item);
    },
    delItem: (state, index) => {
      state.listItem.splice(index, 1);
    },
    setTicket: (state, tick) => {
      state.ticket = tick;
    }
  },
  actions: {

  },
  strict: true
});
