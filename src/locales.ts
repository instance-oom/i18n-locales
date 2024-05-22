import { type App } from 'vue';

const createI18nLocales = () => {
  return {
    install: (app: App<any>) => {
      app.config.globalProperties.LOCALES = {} as InstanceOOM.I18nLocalesKeyType;
    },
  };
};

const localesKeyType = {} as InstanceOOM.I18nLocalesKeyType;

export { localesKeyType, createI18nLocales };
