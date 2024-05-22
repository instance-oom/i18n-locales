## 💿 Installation

```sh
npm i @instance-oom/i18n-locales
```

```ts
// vite.config.ts
import VueI18nLocalesPlugin from '@instance-oom/i18n-locales/vite';

export default defineConfig({
  plugins: [
    VueI18nLocalesPlugin({ dir: path.resolve(__dirname, './src/locales') }),
    vue()
  ],
})
```

```ts
// xxx.ts
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@instance-oom/i18n-locales/messages';
import { createI18nLocales } from '@instance-oom/i18n-locales/locales';

const i18n = createI18n({
  locale: 'en',
  messages: messages
})

const app = createApp()
app
  .use(createI18nLocales())
  .use(i18n)
  .mount('#app');
```

```vue
<template>
  <div>
    {{ $t(LOCALES.xxx) }}
  </div>
</template>
```
