module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/preset-create-react-app'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: null,
  },
}