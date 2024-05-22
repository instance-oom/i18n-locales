import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  outDir: 'lib',
  entries: [
    {
      name: 'index',
      input: 'src/index',
    },
    {
      name: 'vite',
      input: 'src/vite',
    },
    {
      name: 'locales',
      input: 'src/locales',
    },
    {
      name: 'messages',
      input: 'src/messages',
    },
  ],
  rollup: {
    emitCJS: true,
  },
  externals: ['vite', 'vue', 'lodash-es', 'preprettier', '@instance-oom/i18n-locales/locales-key'],
});
