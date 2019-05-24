<template>
  <div>
    <div class="searchBar">
      <input type="text" v-model="strSearch">
      <button @click="searchMovie()">Enter</button>
    </div>
    <div v-for="movie in arrMovie">
      <movie-item :element="movie"></movie-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MovieItem from './MovieItem.vue';

@Component({
  components:{
    MovieItem
  }
})
export default class SearchMovie extends Vue {
  @Prop() public arrMovie: any[];
  private strSearch: string;

  created(){
    if(this.$store.state.srcKey)
    {
      this.strSearch = this.$store.state.srcKey;
      this.axios.get("http://www.omdbapi.com/?apikey=51fb3d47&" + this.$store.getters.getQuerystringSrcKey)
        .then((response) => {
          this.arrMovie = response.data.Search;
      })
    }
  }

  searchMovie(){
    this.$store.commit('setSrcKey', this.strSearch);
    /*this.$store.dispatch('superSetSrcKey', {
      key: "cube"
    });*/
    //this.axios.get("http://www.omdbapi.com/?apikey=51fb3d47&s=" + this.$store.state.srcKey)
    
    this.axios.get("http://www.omdbapi.com/?apikey=51fb3d47&" + this.$store.getters.getQuerystringSrcKey)
      .then((response) => {
        this.arrMovie = response.data.Search;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.searchBar{
  margin-bottom: 20px;
}
</style>
