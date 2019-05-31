export const env = {
  monitor: {
    env: process.env.VUE_APP_MONITOR_ENV,
    dsn: process.env.VUE_APP_MONITOR_DSN,
  },
  l18n: {
    defaultLocale: process.env.VUE_APP_I18N_DEFAULT_LOCALE,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
    autodiscovery: {
      headerKey: process.env.VUE_APP_AUTODISCOVERY_DEFAULT_HEADER_KEY,
    },
  },
  api: {
    path: process.env.VUE_APP_API_PATH,
  },
};
