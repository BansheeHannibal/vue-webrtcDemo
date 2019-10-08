/**
 * 配置编译环境和线上环境之间的切换
 *
 * http_prefix: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * appid: appid
 */
let http_prefix
let routerMode
let method = 'post'
let islocal = false
// const imgBaseUrl = 'https://fuss10.elemecdn.com'
let appid

if (process.env.NODE_ENV == 'development') {
    // http_prefix = '/api'
    http_prefix = 'https://consoledev.zego.im'
    // http_prefix = 'http://api.devapi.test'
    // http_prefix = 'http://devapi.test'
    // http_prefix = 'http://192.168.0.46:8989'
    routerMode = 'history'
} else {
    http_prefix = 'https://consoledev.zego.im'
    routerMode = 'history'
}
export {
    http_prefix,
    routerMode,
    // imgBaseUrl,
    appid,
    method,
    islocal,
}
