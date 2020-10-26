import axios from 'axios'
import { Message } from 'element-ui';
// console.log(process.env.BASE_API);
// create an axios instance
const request = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.BASE_API, // url = base url + request url
  baseURL: process.env.BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor 请求前拦截器
service.interceptors.request.use(
  config => {
    // 如果headers有一些统一的配置，可以再这里面处理
      // config.headers['token'] = 'tokenstr'
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// response interceptor 请求后拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    // 业务出错
    if (res.code !== 0) {
      // 业务出错常见错误
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   Message({
      //     showClose: true,
      //     message: '没有权限',
      //     type: 'error'
      //   });
      //   console.log('没有权限')
      // } else {
        Message({
          showClose: true,
          message: res.message || 'error',
          type: 'error'
        });
      // }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      showClose: true,
      message: error || 'error',
      type: 'error'
    });  
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default request

