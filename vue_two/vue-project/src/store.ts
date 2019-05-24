import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    srcKey: '',
    moviePoster: '',
    movieTitle: '',
    movieYear: '',
    movieWriter: '',
    movieActors: '',
    moviePlot: '',
    movieRuntime: '',

    bindPoster: '',
    bindTitle: '',
    bindYear: '',
    bindWriter: '',
    bindActors: '',
    bindPlot: '',
    bindRuntime: '',
  },
  getters: {
    getQuerystringSrcKey(state){
      return "s=" + state.srcKey;
    },
    getMovieBind(state){
      return {
        "Poster" : state.bindPoster,
        "Title" : state.bindTitle,
        "Year" : state.bindYear,
        "Writer" : state.bindWriter,
        "Actors" : state.bindActors,
        "Plot" : state.bindPlot,
        "Runtime" : state.bindRuntime,
      };
    }
  },
  mutations: {
    setSrcKey: (state, val) => {
      state.srcKey = val;
    },
    setMovie: (state, movie) => {
      state.moviePoster = movie.Poster;
      state.movieTitle = movie.Title;
      state.movieYear = movie.Year;
      state.movieWriter = movie.Writer;
      state.movieActors = movie.Actors;
      state.moviePlot = movie.Plot;
      state.movieRuntime = movie.Runtime;
    },

    setBind: (state, movie) => {
      state.bindPoster = movie.Poster;
      state.bindTitle = movie.Title;
      state.bindYear = movie.Year;
      state.bindWriter = movie.Writer;
      state.bindActors = movie.Actors;
      state.bindPlot = movie.Plot;
      state.bindRuntime = movie.Runtime;
    }
  },
  actions: {
    superSetSrcKey: ({commit, state}, args) => {
      new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000)
      }).then(() => {
        commit("setSrcKey", args.key);
      })
    }
  },
});
