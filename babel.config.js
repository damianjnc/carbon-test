module.exports = api => {
  const plugins = []

  if (api.env('test')) {
    plugins.push('@babel/plugin-transform-runtime')
  }

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: api.env('test') ? 'auto' : false,
        shippedProposals: true
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ]

  api.cache(true)

  return { plugins, presets }
}
