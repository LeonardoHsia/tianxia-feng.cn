const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@src': resolve('src'),
                '@components': resolve('src/components'),
                '@pages': resolve('src/pages'),
                '@common': resolve('src/common'),
                '@consts': resolve('src/common/constants'),
                '@utils': resolve('src/utils'),
                '@scss': resolve('src/common/scss'),
                '@resume': resolve('src/pages/Resume')
            }
        }
    }
}
