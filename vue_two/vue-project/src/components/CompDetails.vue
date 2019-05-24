<template>
  <div class="movieDetails">
    <img :src="$store.state.moviePoster">
    <div>
      <div>{{$store.state.movieTitle}}</div>
      <div>Year: {{$store.state.movieYear}}</div>
      <div>Writers: {{$store.state.movieWriter}}</div>
      <div>Cast: {{$store.state.movieActors}}</div>
      <div>Plop: {{$store.state.moviePlot}}</div>
      <div>Duration: {{$store.state.movieRuntime}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CompDetails extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movieDetails{
  display: flex;
  flex-direction: row;
  
  img{
    border-radius: 10px;
  }

  div{
    text-align: left;
    padding-left: 10px;
    div{
      margin-bottom: 10px;
      &:first-child{
        font-size: 30px;
        font-weight: bold;
        margin: 30px 0;
      }
    }
  }
}
</style>
