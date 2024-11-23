const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/lessons-website/'
});
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/lessons-website/' : '/'
};