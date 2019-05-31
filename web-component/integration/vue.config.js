module.exports = {
  devServer: {
    proxy: {
      '/hybridAdvisory': {
        target: 'http://10.64.8.134:9101',
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
}
