import demoImage from '@assets/images/demo.png'

export function getImageAbsoluteUrl (url) {
    try {
        return require(`@assets/images/${url}`)
    } catch (e) {
        return demoImage
    }
}
