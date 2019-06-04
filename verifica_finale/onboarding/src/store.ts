import Vue from 'vue';
import Vuex from 'vuex';
import { UserInterace } from './user-interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoEndPoint: "http://jsonplaceholder.typicode.com/users",
    photoEndPoint: "http://jsonplaceholder.typicode.com/photos",
    listUser: <UserInterace[]>[]
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
    /*getUserId(state, username){
      for (let i of state.listUser) {
        if(i.username === username)
        {
          return i.id;
        }
      }
      return false;
    }*/
  },
  actions: {

  },

  strict: true
});
