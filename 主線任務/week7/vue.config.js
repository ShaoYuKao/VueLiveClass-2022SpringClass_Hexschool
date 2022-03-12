const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/VueLiveClass-2022SpringClass_Hexschool/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/week7/dist/'
    : '/'
});
