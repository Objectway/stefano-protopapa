<template>
  <div>
    <div class="buttons">
      <button @click="goBack()">Go Back</button>
      <button @click="showDetails()">Show Details</button>
      <button @click="showEdit()">Edit Details</button>
    </div>
      <component :is="dinamicComponent"></component>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CompDetails from './CompDetails.vue';
import EditDetails from './EditDetails.vue';

@Component({
  components: {
    comp1: CompDetails,
    comp2: EditDetails
  }
})
export default class MovieDetails extends Vue {
  public dinamicComponent: string = "comp1";

  created(){

    this.axios.get("http://www.omdbapi.com/?apikey=51fb3d47&i=" + this.$route.params.id)
      .then((response) => {
        this.$store.commit('setMovie', response.data);
        this.$store.commit('setBind', response.data);
    })
  }

  goBack(){

    this.$router.push('/');
  }

  showEdit(){
    this.dinamicComponent = "comp2";
  }

  showDetails(){
    this.dinamicComponent = "comp1";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.buttons{
  margin-bottom: 50px;
}
</style>
