import axios, { AxiosRequestConfig } from 'axios'
import { notification } from 'antd'

axios.defaults.baseURL = ''
axios.defaults.timeout = 5000

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    console.log(config, 'config')
    config.headers!.token = 'token---'
    return config
  },
  function (error) {
    console.log(error, 'error request')
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    console.log(response, 'response')
    return response
  },
  function (error) {
    console.log(error, 'error response')
    notification.error({
      message: error.code,
      description: error.message,
    })
    return Promise.reject(error)
  }
)

export const get: <T = any>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => Promise<T> = async (url, config) =>
  await axios
    .get(url, config)
    .then((res) => res)
    .catch((err) => {
      console.error(url + ' 请求出错', err, err.response)
      return err.response
    })

export const post: <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig | undefined
) => Promise<T> = (...props) => {
  return new Promise((resolve, reject) => {
    axios
      .post(...props)
      .then((res) => resolve(res.data))
      .catch((err) => {
        // reject(err); // 配合await 使用catch时会遇到debug 😡
        console.error('request' + props[0] + ' err', err, err.response)
        const message = err.response?.data?.message
        if (message) console.log({ message })
        reject({ err: err.response })
      })
  })
}
