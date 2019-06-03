<template>
  <div class="Home">
    <button class="Home__cta"  @click="openPopUp = true">Login</button>
    <login v-if="openPopUp" @closePopUp="openPopUp = false"></login>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class Home extends Vue {
  @Prop() private openPopUp: Boolean = false ; 
}
</script>
<style scoped lang="scss">
.Home{

  &__cta{
    background-color: #005dad;
    color: #fff;
    font-size: 24px;
    border: 0px;
    padding: 16px;
  }
}
</style>