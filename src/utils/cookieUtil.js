/**
 * 设置cookie
 * @param {String} key
 * @param {*} value
 * @param {Number} timestamp 单位：秒
 */
function setCookie (key, value, timestamp) {
    timestamp = Number(timestamp)
    const now = new Date()
    const expires = now.setDate(now + isNaN(timestamp) ? timestamp * 1000 : 0)
    document.cookie = `${key}=${value};expires=${expires}`
}

/**
 * 获取cookie
 * @param {String} key
 * @returns
 */
function getCookie (key) {
    const c = document.cookie.split(';').map(c => c.split('=')).find(([k, v]) => k.trim() === key)
    return (c ? decodeURI(c[1]) : null)
}

/**
 * cookie失效
 * @param {String} key
 */
function deleteCookie (key) {
    setCookie(key, '', -1)
}

export {
    setCookie, getCookie, deleteCookie
}
