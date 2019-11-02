/*
 * @description 网络请求
 * @author 吕兴海
 * @update 2019/11/02
 */
import axios from 'axios';

let instance = axios.create({
  // baseURL: 'http://192.168.112.121:8000',
  baseURL: 'http://192.168.41.216:8000', // 宇翔
  // baseURL: 'http://192.168.41.215:8000', // 杜赟
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 5000
});

//请求拦截器
instance.interceptors.request.use(
  function (config) {
    let departNo = Axios.departNo;
    let hospNo = Axios.hospNo;
    // 添加请求头等等设置
    if (typeof departNo === 'string') {
      config.headers.departNo = departNo;
    }
    if (typeof hospNo === 'string') {
      config.headers.hospNo = hospNo;
    }

    return config;
  },
  function (error) {
    Utils.Massage.error({ title: '错误提示', content: `请求出错：${error.toString()}` });
    return Promise.reject(error) // 请求出错
  }
);

//返回拦截器
instance.interceptors.response.use(
  function (response) {
    const code = parseInt(response.data.meta.code, 10);
    if (code !== 200) {
      const { message } = response.data.meta;
      if (code === 401) { // 登录超时

      } else {
        Utils.Massage.error({ title: '错误提示', content: `返回出错：${message}（${code}）` });
      }
      return Promise.reject(message);
    } else {
      return response.data
    }
  },
  function (error) {
    if (error.message.includes('timeout')) {
      Utils.Massage.error({ title: '错误提示', content: '请求超时，请刷新重试！' });
    } else {
      Utils.Massage.error({ title: '错误提示', content: `返回出错：${error.toString()}` });
    }
    return Promise.reject(error)
  }
);

const Axios = {
  departNo: '',
  hospNo: '',
  get(option) { // option={url: '', params: ''}
    return instance.get(option.url, { params: option.params });
  },
  post(option) { // option={url: '', params: ''}
    return instance.post(option.url, option.params);
  },
  put(option) { // option={url: '', params: '', payload: ''}
    return instance.put(option.url, option.params, { data: option.payload })
  },
  del(option) { // option={url: '', payload: ''}
    return instance.delete(option.url, { data: option.payload });
  },
  setHeaders(departNo, hospNo) {
    this.departNo = departNo;
    this.hospNo = hospNo;
  },
  request(type, option, callback) {
    Utils.Loading.show();
    Axios[type](option)
      .then(res => {
        Utils.Loading.hide();
        callback(res);
      })
      .catch(err => {
        Utils.Loading.hide();
        console.log(`${option.url}:`, err);
      });
  }
}

export default Axios;
