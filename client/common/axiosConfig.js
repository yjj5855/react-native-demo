import axios from 'axios'
// import { _localStorage } from './bbPlugin'
// import { logException } from './ravenConfig'
import env from '../env/env'

require('promise.prototype.finally').shim() //给axios添加finally方法

const config = {

    // 请求方法同上
    method: 'get', // default

    // 基础url前缀
    // baseURL: 'http://116.236.230.131:55002',
    baseURL: env.API_HOST + '/rest/ding',

    //设置超时时间
    timeout: 20000,

}

//全局配置axios
for(let key in config){
    axios.defaults[key] = config[key];
}
axios.interceptors.request.use(function (request) {
    let infoJson = {}
    let token = infoJson.token;
    if(token && (!request.params  || request.params.send_token !== false)){
        if(request.params){
            request.params.dtoken = token
        }else{
            request.params = {
                dtoken : token
            }
        }
    }else{
        if(request.params){
            delete request.params.send_token;
        }
    }


    return request
})
//response过滤
axios.interceptors.response.use(function (response) {
    // 这里提前处理返回的数据
    if(typeof response == 'object'){
        if(response.status == 200){
            return response.data;
        }else{
            logException(new Error(response.status+' 错误'), response)
        }
    }else{
        logException(new Error('接口返回不是一个对象'), response)
    }
    return response;
}, function (error) {
    try{
        logException(new Error(error.response.status+' 错误'), error.response)

        if(error.response.status == 403){
            alert('token过期,请重新打开页面')
            window.token_error = true
            dd.biz.navigation.close();
        }
    }catch (err){

    }
    return Promise.reject(error);
});

export default config;