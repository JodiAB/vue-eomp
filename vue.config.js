const { defineConfig } = require('@vue/cli-service')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[ext]'
      })
      .end();
  }
};
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }])
//     ]
//   }
// };