import { type App } from 'vue';
import { type TranslateOptions, useI18n } from 'vue-i18n';

type Leaves<T> = T extends object ? { [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? '' : `.${Leaves<T[K]>}`}` }[keyof T] : never;

const createI18nLocales = () => {
  return {
    install: (app: App<any>) => {
      app.config.globalProperties.$translate = (key: Leaves<InstanceOOM.I18nLocalesKeyType>, named?: Record<string, unknown>, options?: TranslateOptions<string> | undefined) => {
        return named ? app.config.globalProperties.$t(key || 'Translating', named, options as any) : app.config.globalProperties.$t(key || 'Translating');
      };
    },
  };
};

const useI18nLocales = () => {
  const { t, locale } = useI18n();

  const translate = (key: Leaves<InstanceOOM.I18nLocalesKeyType>, named?: Record<string, unknown>, options?: TranslateOptions<string> | undefined) => {
    return named ? t(key || 'Translating', named, options as any) : t(key || 'Translating');
  };

  return {
    translate,
    locale,
  };
};

export { createI18nLocales, useI18nLocales };
