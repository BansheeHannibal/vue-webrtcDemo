import axios from 'axios'
import handleError from '@config/handleError'

axios.defaults.withCredentials = true

// 请求时的拦截器
axios.interceptors.request.use(config => {
    // console.log(config)
    // console.log('fetch req success')
    return config
}, error => {
    // console.log('fetch req e = ', error)
    return Promise.reject(error)
})

// 请求完成后的拦截器
axios.interceptors.response.use(res => {
    // console.log(res)
    // console.log('fetch res success')
    return res
}, error => {
    // console.log('fetch res e = ', error)
    return Promise.reject(error)
})

// 处理网络或者服务器的错误  正常的http状态码  2xx、3xx、4xx等等
function checkStatus(res) {
    if (res.status === 200 || res.status === 304) {
        return res
    } else {
        return {
            data: {
                code: -404,
                message: res.statusText,
                data: res.statusText
            }
        }
    }
}


export default async(type = 'post', url = '', data = {}, config = {}, context, isCatchError = true) => {
    if (type == 'get') {
        let dataStr = '' //数据拼接字符串

        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
        }
    }

    let baseConfig = {
        timeout: 10000,
        // headers: {}, // 阻止发送options请求
        withCredentials: true,
    }


    for (const key in config) {
        if (config.hasOwnProperty(key)) {
            baseConfig[key] = config[key];
        }
    }

    if (type === 'get') {
        return axios[type](url, baseConfig)
            .then(checkStatus)      // 处理网络或者服务器的错误  正常的http状态码  2xx、3xx、4xx等等
            .then(function(res) {   // 处理服务端自定义的错误代码
                if (isCatchError) { // 是否允许接管状态码处理
                    if (res.data.code === 401 || res.data.code === 403 || res.data.code === 422) {  // 错误码需要特殊处理
                        handleError.call(context, res.data.code, {
                            errs: res.data.message
                        })
                    } else {
                        return res
                    }
                } else {
                    return res
                }
            })
            .catch(e => {
                console.log('catch e', e)
                return {
                    data: {
                        code: -403
                    }
                }
            })

    } else {
        return axios[type](url, data, baseConfig)
            .then(checkStatus)
            .then(function(res) {   // 处理服务端自定义的错误代码
                if (isCatchError) { // 是否允许接管状态码处理
                    if (res.data.code === 401 || res.data.code === 403 || res.data.code === 422) {  // 错误码需要特殊处理
                        handleError.call(context, res.data.code, {
                            errs: res.data.message
                        })
                    } else {
                        return res
                    }
                } else {
                    return res
                }
            })
            .catch(e => {
                console.log('catch e', e)
                return {
                    data: {
                        code: -403
                    }
                }
            })
    }
}
