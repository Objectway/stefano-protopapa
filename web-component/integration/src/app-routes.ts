import VueRouter, {RouteConfig} from 'vue-router';
import Widget from '@/components/Widget.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';
import {widgetStateManagerRoutes} from '@owui-commons/vue-widget-state-manager';

export function routerFactory(Vue): VueRouter {
  Vue.use(VueRouter);

  const routes: RouteConfig[] = [
    ...widgetStateManagerRoutes(Widget, ErrorComponent),
  ];

  return new VueRouter({
    routes,
    mode: 'abstract',
  });
}
