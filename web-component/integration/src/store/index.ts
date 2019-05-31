import Vuex, {Store} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {widgetState, WidgetStateAwareRootState} from '@owui-commons/vue-widget-state-manager';
import {
  ConfigurationAwareRootState,
  configurationModuleFactory,
  MODULE_NAMESPACE,
} from '@owui-commons/vue-widget-configuration-manager';
import {env} from '@/environment';

export interface RootState extends WidgetStateAwareRootState, ConfigurationAwareRootState {

}

export function storeFactory(Vue?): Store<RootState> {
  if (Vue) {
    Vue.use(Vuex);
  }

  const initialState: RootState = {};

  const debug = process.env.NODE_ENV !== 'production';

  return new Vuex.Store<RootState>({
    state: initialState,
    actions,
    mutations,
    getters,
    modules: {
      widgetState,
      [MODULE_NAMESPACE]: configurationModuleFactory({
        i18n: {
          activeLocale: env.l18n.defaultLocale,
          autodiscovery: {headerKey: env.l18n.autodiscovery.headerKey},
        },
        security: {apiPath: env.api.path},
      }),
    },
    strict: debug,
    plugins: [],
  });
}
