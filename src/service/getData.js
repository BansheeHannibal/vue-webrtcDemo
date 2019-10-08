import fetch from '@config//fetch'

import api from '@config/api'

import { method } from '@config/env'

/**
 * 登录
 * @param {String} loginname 必填 账户名/email/手机号
 * @param {String} password 必填 密码
 * @param {Object} context 选填 上下文
 * @param {Boolean} isCatchError 选填 是否捕获错误，默认捕获
 */
export const login = (loginname, password, context, isCatchError) => fetch(method, api.login, {
    loginname,
    password
}, '', context, isCatchError)
