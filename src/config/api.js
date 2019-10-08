import { http_prefix, islocal } from '@config/env.js'

let login

let flag = islocal
if (!flag) {
    login = http_prefix + '/site/login'  // 登录

} else {
    login = http_prefix + '/static/json/login.json'  // 登录
}
export default {
    login
}
