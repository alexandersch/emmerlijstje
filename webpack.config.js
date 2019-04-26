const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('app', './assets/js/app.js')

    .splitEntryChunks()

    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()

    //.enableBuildNotifications()

    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabel((babelConfig) => {
        babelConfig.plugins = [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-default-from'
        ]
    }, {
        useBuiltIns: 'usage',
        corejs: 3,
    })

    //.enableSassLoader()
    .enableReactPreset()
    .enableTypeScriptLoader()
    .enableIntegrityHashes()
;

module.exports = Encore.getWebpackConfig();
