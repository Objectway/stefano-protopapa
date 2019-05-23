<template>
  <div class="UsrAvatar">
    <img :src="avatarSrc">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UsrAvatar extends Vue {
  @Prop() public avatarSrc!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.UsrAvatar{
  border: 3px dotted green;

  img{
    border-radius: 100px;
    width: 100px;
    height: 100px;
  }
}
</style>
