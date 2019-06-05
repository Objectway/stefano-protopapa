<template>
  <div class="NewUserPersonaGiuridica">
    <span>
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class NewUserPersonaGiuridica extends Vue {

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.NewUserPersonaGiuridica{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  text-align: center;

  i{
    font-size: 200px;
    color: #1db0e9;
  }
}
</style>
