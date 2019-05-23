<template>
  <div class="UsrBadge">
    <span>{{firstLine}}</span><br>
    <span>{{secondLine}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UsrBadge extends Vue {
  @Prop() private firstLine!: string;
  @Prop() private secondLine!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.UsrBadge{
  border: 3px dotted violet;
  span{
    float:right;
  }
}
</style>
