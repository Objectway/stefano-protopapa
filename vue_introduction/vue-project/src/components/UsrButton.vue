<template>
  <div class="UsrButton">
    <button v-for="button in buttons">{{button.name}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UsrButton extends Vue {

  //@Prop() private buttonName!: string;
  @Prop() private buttons!: [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.UsrButton{
  border: 3px dotted red;
  display: flex;
  flex-direction: row;
  button{
    margin-left: 5px;
  }
}
</style>
