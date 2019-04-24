import axios from "axios";

// 创建axios实例
let service = axios.create({
  // headers: {'Centent': 'application/json'},
  // baseURL: 'https://some-domain.com/api/',
  // withCredentials: true,
  timeout: 1000
});
// 设置 post,put 默认 Content-Type
service.defaults.headers.post["Content-Type"] = "application/json";
service.defaults.headers.put["Content-Type"] = "application/json";
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    if (config.method === "post" || config.method === "put") {
      // post,put 提交时，将对象转换为string，为处理Java后台解析问题
      config.data = JSON.stringify(config.data);
    }
    // 请求发送前进行处理
    return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    let { data } = response;
    return data;
  },
  error => {
    let info;
    let { status, statusText, data } = error.response;

    if (!error.response) {
      info = {
        code: 5000,
        msg: "Network Error"
      };
    } else {
      // 此处整理错误信息格式
      info = {
        code: status,
        data: data,
        msg: statusText
      };
    }
    console.log(info);
  }
);

/**
 * 创建统一封装过的axios实例
 * @return {AxiosInstance}
 */
export default function() {
  return service;
}
