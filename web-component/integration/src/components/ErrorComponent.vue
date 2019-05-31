<template>
  <div>
    <p>Error</p>
    <button v-on:click="setWidgetPending">Retry</button>
  </div>

</template>

<script lang="ts">
  import {Component, Mixins} from 'vue-property-decorator';
  import {WidgetStateMixin} from '@owui-commons/vue-widget-state-manager';

  @Component
  export default class ErrorComponent extends Mixins(WidgetStateMixin) {

  }
</script>

<style scoped>

</style>
