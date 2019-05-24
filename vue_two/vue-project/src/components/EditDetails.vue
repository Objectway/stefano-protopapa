<template>
  <div class="editDetails">
    <div class="editDetails__label">Poster</div>
    <input type="text" v-model="bindPoster">
    <div class="editDetails__label">Title</div>
    <input type="text" v-model="bindTitle">
    <div class="editDetails__label">Year</div>
    <input type="text" v-model="bindYear">
    <div class="editDetails__label">Writer</div>
    <input type="text" v-model="bindWriter">
    <div class="editDetails__label">Actors</div>
    <input type="text" v-model="bindActors">
    <div class="editDetails__label">Plot</div>
    <input type="text" v-model="bindPlot">
    <div class="editDetails__label">Runtime</div>
    <input type="text" v-model="bindRuntime">
    <button @click="save()">Salva</button>  
    <button @click="goBack()">Go Back</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EditDetails extends Vue {
  public arrDetails: any;
  @Prop() public bindPoster: string;
  @Prop() public bindTitle: string;
  @Prop() public bindYear: string;
  @Prop() public bindWriter: string;
  @Prop() public bindActors: string;
  @Prop() public bindPlot: string;
  @Prop() public bindRuntime: string;

  activated(){

    this.arrDetails = this.$store.getters.getMovieBind;

    this.bindPoster = this.arrDetails.Poster;
    this.bindTitle = this.arrDetails.Title;
    this.bindYear = this.arrDetails.Year;
    this.bindWriter = this.arrDetails.Writer;
    this.bindActors = this.arrDetails.Actors;
    this.bindPlot = this.arrDetails.Plot;
    this.bindRuntime = this.arrDetails.Runtime;
  }

  save(){
    
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
