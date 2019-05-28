<template>
  <div class="shop">
    <shop-form></shop-form>
    <shop-table></shop-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShopForm from './ShopForm.vue';
import ShopTable from './ShopTable.vue';

@Component({
  components: {
    ShopForm,
    ShopTable
  }
})
export default class ShopBody extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
