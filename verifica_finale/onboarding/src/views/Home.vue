<template>
  <div class="Home">
    <img src="@/assets/objectway.jpg">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {eventBus} from '@/main.ts';

@Component
export default class Home extends Vue {

}
</script>
<style scoped lang="scss">
.Home{
  display: flex;
  flex-direction: column;
  align-items: stretch;

  img{
    width: 100%;
  }
}
</style>