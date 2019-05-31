import VueI18n from 'vue-i18n';
import {env} from '@/environment';
import {messages} from './messages';
import {numberFormats} from './number-formats';

export function i18nFactory(Vue): VueI18n {
  Vue.use(VueI18n);

  return new VueI18n({
    locale: env.l18n.defaultLocale,
    fallbackLocale: env.l18n.fallbackLocale,
    messages,
    numberFormats,
  });
}
