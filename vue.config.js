const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@views': resolve('src/views'),
                '@common': resolve('src/common'),
                '@consts': resolve('src/common/constants'),
                '@scss': resolve('src/common/scss'),
                '@resume': resolve('src/views/Resume')
            }
        }
    }
}
