<template>
  <div class="movieItem" @click="goDetails()">
    <img class='movieItem__poster' :src="element.Poster">
    <div class='movieItem__title'>{{element.Title}}</div>
    <div class='movieItem__year'>Year: {{element.Year}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MovieDetails from './MovieDetails.vue'

@Component({
  components:{
    MovieDetails
  }
})
export default class MovieItem extends Vue {
  @Prop() private element!: any;
  
  goDetails(imdbID: string){
    this.$router.push('/' + this.element.imdbID);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movieItem{
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #acacac;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 10px;
  box-sizing: border-box;

  &:hover{
    border: #acacac 1px solid;
    background-color: white;
    box-sizing: border-box;
  }

  &__poster{
    height: 100px;
    border-radius: 10px;
  }

  &__title{
    padding-left: 30px;
    font-weight: bold;
    font-size: 24px;
  }

  &__year{
    padding-left: 10px;
  }
}
</style>
