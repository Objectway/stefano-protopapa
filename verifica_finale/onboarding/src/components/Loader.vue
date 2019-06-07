<template>
  <div class="Loader">
    <div class="Loader__ldsRing">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component

  export default class Loader extends Vue {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Loader{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #005dad;
    display: block;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;


    &__ldsRing {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
    &__ldsRing div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 6px solid #fff;
      border-radius: 50%;
      animation: ldsRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    &__ldsRing div:nth-child(1) {
      animation-delay: -0.45s;
    }
    &__ldsRing div:nth-child(2) {
      animation-delay: -0.3s;
    }
    &__ldsRing div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes ldsRing {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
