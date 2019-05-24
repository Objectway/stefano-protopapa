<template>
  <div class="home">
    <search-movie></search-movie>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchMovie from '@/components/SearchMovie.vue'; // @ is an alias to /src

@Component({
  components: {
    SearchMovie,
  },
})
export default class Home extends Vue {}
</script>
