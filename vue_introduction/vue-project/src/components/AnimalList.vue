<template>
  <div class="list">
    <h1>animal List</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})

export default class AnimalList extends Vue {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
  background-color: yellowgreen;
}
</style>
