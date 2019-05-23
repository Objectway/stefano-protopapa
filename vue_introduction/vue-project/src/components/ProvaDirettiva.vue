<template>
  <div class="prova">
    <h1 v-foo-directive>omponets</h1>
    <h1 v-foo-directive:size>omponets</h1>
    <h1 v-foo-directive:color="[color]">omponets</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  directives: {
    'foo-directive': {
      bind: (el, binding, vnode) => {
        el.style.backgroundColor = 'yellowgreen';
        if(binding.arg === 'size')
        {
          el.style.fontSize = '21px';
        }
        if (binding.arg == 'color') 
        {
          //el.style.color = binding.value
          el.style.color = binding.value
        }
      }
    }
  }
})


export default class ProfileCard extends Vue {
  @Prop() public color: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.prova{
}
</style>
