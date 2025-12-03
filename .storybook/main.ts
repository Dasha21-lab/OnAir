import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          '@app': path.resolve(__dirname, '../src/app'),
          '@entities': path.resolve(__dirname, '../src/entities'),
          '@features': path.resolve(__dirname, '../src/features'),
          '@widgets': path.resolve(__dirname, '../src/widgets'),
          '@pages': path.resolve(__dirname, '../src/pages'),
          '@shared': path.resolve(__dirname, '../src/shared')
        },
      },
    })
  },
};

export default config;