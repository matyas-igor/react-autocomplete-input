module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-storysource'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: null,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
