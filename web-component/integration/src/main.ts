import Vue from 'vue';
import App from './App.vue';
import './registerLibraryComponents';
import filters from '@/shared/filters';
import {routerFactory} from './app-routes';
import {storeFactory} from './store';
import {sync} from 'vuex-router-sync';
import {ENVIRONMENTS, Monitor, VERBOSITY_LEVEL} from '@owui-commons/monitor';
import {version} from '../package.json';
import {env} from '@/environment';
import {i18nFactory} from './i18n';
import wrap from '@vue/web-component-wrapper';
import {ConfigurationManagerPlugin} from '@owui-commons/vue-widget-configuration-manager';
import {container} from '@/shared/container';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const monitor = new Monitor({
  tags: {
    environment: ENVIRONMENTS.DEV,
    projectName: env.monitor.env,
    release: version,
  },
  verbosity: VERBOSITY_LEVEL.INFO,
});
monitor.provider.init({
 dsn: env.monitor.dsn,
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^owui-component-/];

Vue.use(filters);
Vue.use(ConfigurationManagerPlugin);
Vue.use(Vuex);

const unsyncSymbol = Symbol.for('unsync');

const VueComponent = Vue.extend(App);
const RootComponent = VueComponent.extend({
  i18n: i18nFactory(Vue),
  store: storeFactory as any,
  router: routerFactory(Vue),
  beforeCreate(): void {
    container.bind<VueRouter>(VueRouter).toConstantValue(this.$router);
    container.bind<VueI18n>(VueI18n).toConstantValue(this.$i18n);
    container.bind<Function>(unsyncSymbol).toConstantValue(sync(this.$store, this.$router));
  },
  deactivated(): void {
    this.$destroy();
  },
  destroyed(): void {
    container.get<Function>(unsyncSymbol)();
    container.unbind(VueRouter);
    container.unbind(VueI18n);
    container.unbind(unsyncSymbol);
  },
});

const VueCustomElement = wrap(Vue, RootComponent);
window.customElements.define('owui-widget-integration-test', VueCustomElement);
