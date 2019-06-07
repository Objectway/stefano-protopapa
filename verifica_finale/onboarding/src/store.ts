import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import { UserInterface } from './user-interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoEndPoint: "http://jsonplaceholder.typicode.com/users",
    photoEndPoint: "http://jsonplaceholder.typicode.com/photos",
    session: <boolean> false,
    listUser: <UserInterface[]>[],
    successNewUser: <boolean> false,
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
    },
    getSuccessNewUser(state){
      return state.successNewUser;
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
    },
    setSuccessNewUser: (state, val) => {
      state.successNewUser = val;
    }
  },
  actions: {
    getUserList: ({getters, commit, state}) => {
      let arrUser: UserInterface[];

      // Chiamo infoEndPoint per scaricare la lista di utenti

      axios.get(state.infoEndPoint)
      .then((response: { "data": UserInterface[]}) => {
        arrUser = response.data;
        let i: number = 0;

        // Ciclo l'array di utenti per scaricare l'avatar

        arrUser.forEach((element: UserInterface) => {
          let querystring = "?id=" + element.id;


          // Chiamo photoEndPoint per scaricare l'avatar e agguionare la lista utenti

          axios.get(state.photoEndPoint + querystring)
            .then((response: { "data": any}) => {
              arrUser[i].thumb = response.data[0].thumbnailUrl;
              arrUser[i].thumbTitle = response.data[0].title;
              i++;
            });
        });

        //salvo la lista utenti nello store

        commit("setList", arrUser);
      })
    },
    // addUser
  },

  strict: true
});
