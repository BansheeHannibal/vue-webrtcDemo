/**
 * description 小于10 则加前缀0函数
 * @param {Number} num
 * return 字符串
 */
export function zero(num) {
    return num < 10 ? ('0' + num) : num
}

/**
 * description 传入日期对象，返回字符串年月日 如 20180313 / 2018/03/13
 * @param {Date} t 日期对象
 * @param {String} symbol 间隔符号，默认为空
 * return 字符串
 */
export function ymdFormat(t, symbol = '') {
    return '' + t.getFullYear() + symbol + zero(t.getMonth() + 1) + symbol + zero(t.getDate())
}

/**
 * description 传入日期对象  返回格式化的时分  如 06:30
 * @param {Date} timestamp
 */
export function hmFormat(t, boundary) {
    let h = '' + zero(t.getHours())
    if (h === '00') {
        if (boundary) {
            h = '24'
        }
    }
    return h + ':' + zero(t.getMinutes())
}

/**
 * description 时间戳  返回格式化的 年月日时分秒  如 2018-07-05 14:20:36
 * @param {Date} timestamp 单位秒
 */
export function ymdhmsFormat(s, symbol = '-') {
    let t = new Date(s)
    return '' + t.getFullYear() + symbol + zero(t.getMonth() + 1) + symbol + zero(t.getDate()) + ' '+ zero(t.getHours()) + ':' + zero(t.getMinutes()) + ':' + zero(t.getSeconds())
}

/**
 * description 获取地址栏参数对应的值
 * @param {String} key 地址栏参数名
 * return 字符串
 */
export function getQueryString(key){
    var reg = new RegExp('(^|&)'+ key + '=([^&]*)(&|$)');
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    return localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    localStorage.removeItem(name)
}

/**
 * 是否不是空字符串
 */
export const notEmpty = string => {
    if (string !== '') {
        return true
    } else {
        return false
    }
}

/**
 * 是否不是空字符串
 */
export const solveServerError = function(errMsg) {
    let str = ''
    let errObj = JSON.parse(errMsg)
    for (const key in errObj) {
        str += errObj[key] + ','
    }
    str = str.slice(0, -1)
    this.$message(str)
}
