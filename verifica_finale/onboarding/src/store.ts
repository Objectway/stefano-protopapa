import Vue from 'vue';
import Vuex from 'vuex';
import { UserInterface } from './user-interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoEndPoint: "http://jsonplaceholder.typicode.com/users",
    photoEndPoint: "http://jsonplaceholder.typicode.com/photos",
    listUser: <UserInterface[]>[]
  },
  getters: {
    getInfoEndPoint(state){
      return state.infoEndPoint;
    },
    getPhotoEndPoint(state){
      return state.photoEndPoint;
    },
    getListUser(state){
      return state.listUser;
    }
  },
  mutations: {
    setList: (state, list) => {
      state.listUser = list;
    },
    addItem: (state, item) => {
      // calcolo dell'id
      let temp: number = 0;
      state.listUser.forEach(element => {
        if(element.id > temp){ temp = element.id; }
      })
      item.id = temp + 1;
      state.listUser.splice(0, 0, item);
    }
  },
  actions: {

  },

  strict: true
});
