<template>
  <div class="editDetails">
    <div class="editDetails__label">Poster</div>
    <input type="text" v-model="arrDetails.Poster">
    <div class="editDetails__label">Title</div>
    <input type="text" v-model="arrDetails.Title">
    <div class="editDetails__label">Year</div>
    <input type="text" v-model="arrDetails.Year">
    <div class="editDetails__label">Writer</div>
    <input type="text" v-model="arrDetails.Writer">
    <div class="editDetails__label">Actors</div>
    <input type="text" v-model="arrDetails.Actors">
    <div class="editDetails__label">Plot</div>
    <input type="text" v-model="arrDetails.Plot">
    <div class="editDetails__label">Runtime</div>
    <input type="text" v-model="arrDetails.Runtime">
    <button @click="save()">Salva</button>  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MovieDetails from './MovieDetails.vue';
import Movie from '../movie.ts';

@Component({
  components:{
    MovieDetails
  }
})

@Component
export default class EditDetails extends Vue {
  private arrDetails: Movie = this.$store.getters.getMovieBind;

  save(){
    this.$store.commit('setMovie', this.arrDetails);
    this.$store.commit('setBind', this.arrDetails);
    debugger;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.editDetails{
  &__label{
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0px 5px 0;
  }
  input{
    width: 100%;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    background-color: #acacac;
  }
}
</style>
