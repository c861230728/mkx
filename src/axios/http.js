import axios from 'axios'
import router from '../router'

const service = axios.create({
    timeout: 5000, // 请求超时
    baseURL: 'http://luoyuequan.cn:80',
    headers: {
        'Content-Type':'application/json;charset=UTF-8',
        'Content-Type':'application/x-www-form-urlencoded',
        // 'Content-Type':'text/plain',
        "token":''
    },

})
// 添加request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})
// 添加response拦截器
service.interceptors.response.use(
    response => {
        let res={}
        res.status = response.status
        res.data = response.data
        return res
    },
    error => {
        if (error.response && error.response.status == 404) {
            router.push('/blank.vue') // 跳转404页面
        }
        return Promise.reject(error.response)
    }
)
// 封装get
export function get(url, params = {}) {
    params.t = new Date().getTime(); // get方法加一个时间参数,解决ie可能缓存问题
    return service({
        url: url,
        method: 'get',
        params
    })
}
// 封装 post
export function post(url,data = {}) {
    //默认配置
    let sendObject = {
        url: url,
        method: 'post',
        data: JSON.stringify(data)
    }
    sendObject.data = JSON.stringify(data)
    return service(sendObject)
}
// 封装put方法（resfuAPI常用）
export function put(url, data = {}) {
    return service({
        url: url,
        method: 'put',
        data:JSON.stringify(data)
    })
}
// 删除方法（resfulAPI常用）
export function deletes(url) {
    return service({
        url: url,
        method: 'delete',
    })
}
//将方法抛出
export default {
    service
}
