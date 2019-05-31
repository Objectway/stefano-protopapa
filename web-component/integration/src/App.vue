<template>
  <div id="app">
    <owui-component-spinner v-if="isWidgetStatePending"
                            :configuration="{relative: true} | json"></owui-component-spinner>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import {HttpClientProvider} from '@owui-commons/http/dist/models/http-client-provider';
import {HttpClient} from '@owui-commons/http';
import {AppConstants} from '@/shared/app-constants';
import {configurationMixinFactory} from '@owui-commons/vue-widget-configuration-manager';
import {WidgetStateMixin} from '@owui-commons/vue-widget-state-manager';

@Component({
  mixins: [configurationMixinFactory(HttpClient.getInstance() as HttpClientProvider, AppConstants.WIDGET_WINDOW_NAMESPACE)],
})
export default class App extends Mixins(WidgetStateMixin) {

  public async created() {
    await this.$onConfigurationLoaded();
    this.$router.push(AppConstants.DEFAULT_ROUTE);
  }
}
</script>

<style scoped lang="scss">

</style>
