const path = require('path')

module.exports = (baseConfig, env, config) => {
  const typeScriptConfig = {
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('awesome-typescript-loader')
  }

  config.module.rules.push(typeScriptConfig)
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
