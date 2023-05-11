// import type { StorybookConfig } from "@storybook/nextjs";

const path = require('path');
const config = {
  stories: [
   "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  outputDir: '../storybook-static',
};
export default config;
