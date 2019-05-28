<template>
  <div class="movieItem" @click="goDetails()">
    <img class='movieItem__poster' :src="element.Poster!=='N/A'? element.Poster : noImage">
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
  public noImage: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKAcvMZAifPoul3B1Vv2keLKeq4-c4fe3VIzKPXyT9RDoOveXUg";
  
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
    width: 80px;
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
