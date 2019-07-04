import axios from 'axios';
import conf from './config'
import { Message } from 'element-ui'

/**
 *
 * @param options: request config options
 * @param handle_err: whether handle data automatically when isOk is error
 */
const request = (options, handle_err = true) => {
  return new Promise((resolve, reject) => {
    // create axios instance
    const instance = axios.create({
      baseURL: conf.baseURL,
      headers: conf.headers,
      timeout: conf.timeout,
      withCredentials: conf.withCredentials,
      responseType: conf.responseType
    });

    // set request interceptor
    instance.interceptors.request.use(config => {
      console.log('preparing to intercept request...' + config.url);
      return config;
    }, error => {
      console.log('request interceptor occurred error!');
      // timeout
      if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') !== -1) {
        Message({
          showClose: true,
          message: '请求超时',
          type: 'error'
        });
      }
      return Promise.reject(error);
    });

    // set response interceptor
    instance.interceptors.response.use(response => {
      console.log('preparing to intercept response...');
      let data = response.data;
      // handle bad data automatically
      if (data.isOk === 'error' && handle_err===true) {
        console.log('handling bad data.');
        Message({
          showClose: true,
          message: data.result, // result will record error's message
          type: 'error'
        });
        return null;
      }
      // if don't handle data(bad) automatically
      console.log('return data directly');
      return data;
    }, error => {
      console.log('response interceptor occurred error!');
      // timeout
      if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') !== -1)
        error.message = '请求超时';
      if (error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误';
            break;
          case 401:
            error.message = '未授权,请登录';
            window.location.href = '/#/login';
            break;
          case 403:
            error.message = '拒绝访问';
            break;
          case 404:
            error.message = '请求地址出错:' + error.response.config.url;
            break;
          case 408:
            error.message = '请求超时';
            break;
          case 500:
            error.message = '服务器内部错误';
            break;
          case 501:
            error.message = '服务未实现';
            break;
          case 502:
            error.message = '网关错误';
            break;
          case 503:
            error.message = '服务不可用';
            break;
          case 504:
            error.message = '网关超时';
            break;
          case 505:
            error.message = 'HTTP 版本不受支持';
            break;
          default:
            break;
        }
      }
      Message({
        showClose: true,
        message: error.message,
        type: 'error',
      });
      return Promise.reject(error);
    });

    // request
    instance(options).then(response => {
      console.log('response correctly');
      resolve(response);
      return false;
    }).catch(error => {
      console.log('response occurred error!');
      reject(error);
    });
  });
};

export default request;
