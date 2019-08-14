import axios, { AxiosRequestConfig } from 'axios';

/** 请求拦截处理 */
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.timeout) {
    config.timeout = 10 * 1000;
  }

  // 给每个请求新增一个时间戳参数
  config.params = Object.assign({ _s: Date.now() }, config.params);

  return config;
});

/** 返回结果拦截处理 */
axios.interceptors.response.use(response => {
  let data = response.data;
  return data;

  // 错误异常待处理
});
