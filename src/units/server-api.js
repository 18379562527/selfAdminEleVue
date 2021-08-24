import axios from 'axios';
let serverApi = function () {
    let baseUrl = process.env.VUE_APP_BASE_URL;
    let instantiateVue = undefined;
    console.log('baseUrl',baseUrl)
    let config = {
        headers : {
            'Content-Type': 'application/json',
        },
        timeout: '60',
        withCredentials: false  // 是否跨域
    }
    // 设置new出来的vue实列
    this.setInstantiateVue = function (newVue){
        instantiateVue = newVue;
    }
    // axios封装post请求
    this.post = function(url, data, message,isShowMessage = false, headers){
        return new Promise((resolve)=>{
            headers = headers ? headers : config.headers;
            let newUrl = baseUrl + '/api/selfAdminEleVue' + url;
            axios({
                method: 'POST', // `method` 是创建请求时使用的方法  默认是 get
                url: newUrl, // `url` 是用于请求的服务器 URL
                data, // `data` 是作为请求主体被发送的数据   只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
                headers, // `headers` 是即将被发送的自定义请求头
                baseUrl, // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
                timeout: config.timeout, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间) 如果请求话费了超过 `timeout` 的时间，请求将被中断
                withCredentials: config.withCredentials, // `withCredentials` 表示跨域请求时是否需要使用凭证 默认false 不适用
            }).then(res=>{
                console.log('封装axios',res)
                if(res.data && res.data.state === 1){
                    resolve([true,res.data])
                }else{
                    instantiateVue.$alert((isShowMessage && message) || res.data.errCode + res.data.message,'提示');
                    resolve([false,res.data])
                }
            }).catch(err=>{
                resolve(err)
            })
        })
    }

    this.get = function(url, headers){
        return new Promise((resolve)=>{
            headers = headers ? headers : config.headers;
            let newUrl = baseUrl + url;
            axios({
                url: newUrl, // `url` 是用于请求的服务器 URL
                headers, // `headers` 是即将被发送的自定义请求头
                baseUrl, // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
                timeout: config.timeout, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间) 如果请求话费了超过 `timeout` 的时间，请求将被中断
                withCredentials: config.withCredentials, // `withCredentials` 表示跨域请求时是否需要使用凭证 默认false 不适用
            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                resolve(err)
            })
        })
    }
}

export default serverApi;