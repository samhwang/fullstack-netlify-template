import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      css: true,
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/setupTests.ts'],
      coverage: {
        provider: 'v8',
        enabled: true,
      },
    },
  }),
);
