<template>
  <div>
    <button @click="decrementa()">-</button>
    <span>{{cont}}</span>
    <button @click="incrementa()">+</button>
  </div>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import {WidgetStateMixin} from '@owui-commons/vue-widget-state-manager';

@Component
export default class Widget extends Mixins(WidgetStateMixin) {
  public cont: number = 0;
  public created() {
    this.setWidgetReady();
  }

  public decrementa() {
    this.cont--;
  }
  public incrementa() {
    this.cont++;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
