import Vue from 'vue';
import Vuex from 'vuex';
import { UserInterface } from './user-interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoEndPoint: "http://jsonplaceholder.typicode.com/users",
    photoEndPoint: "http://jsonplaceholder.typicode.com/photos",
    session: <boolean> false,
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
    },
    getSession(state){
      return state.session;
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
    },
    login: (state) => {
      state.session = true;
    },
    logout: (state) => {
      state.session = false;
    }
  },
  actions: {

  },

  strict: true
});
