const path = require('path');
const AutoImport = require('unplugin-auto-import/dist/webpack')
const Components = require('unplugin-vue-components/dist/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/dist/resolvers')

function resolve(dir) {
    return path.join(__dirname, dir)
}
const port = 8081;

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8081/',
                changeOrigin: true,
            }
        }
    },
    configureWebpack: {
        name: 'vue3-ts',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ]
    },
    chainWebpack: config => {
        config.module.rules.delete("svg"); // 重点:删除默认配置中处理svg,
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/icon')) // 处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
}