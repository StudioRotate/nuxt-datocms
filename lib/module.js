const path = require('path')

const CONFIG_KEY = 'nuxt-datocms'

const nuxtModule = function (moduleOptions) {
  const options = {
    ...this.options['nuxt-datocms'],
    ...moduleOptions
  }

  const runtimeDir = path.resolve(__dirname, 'runtime')
  this.nuxt.options.alias['~nuxt-datocms'] = runtimeDir
  this.nuxt.options.build.transpile.push(runtimeDir)

  this.addPlugin({
    src: path.resolve(runtimeDir, 'plugin.mjs'),
    fileName: 'nuxt-datocms.js',
    options,
  })
}

export default nuxtModule
