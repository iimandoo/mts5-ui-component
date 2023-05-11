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
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.concat([
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: '> 0.5%, ie >= 11',
                },
                loose: true,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
            ['@babel/plugin-proposal-private-methods', { loose: true }],
          ],
        },
      },
    ]);

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // core: {
  //   builder: 'webpack5',
  // },
  // outputDir: '../dist',
};
export default config;
