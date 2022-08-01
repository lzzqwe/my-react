import axios from "axios";

const instance = axios.create({
  baseURL: "https://music.icci.top",
  timeout: 40000,
});
instance.interceptors.request.use(
  (config) => {
    // 在发送请求前做些什么
    return config;
  },
  (err) => {
    // 对请求错误做些什么
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  (response) => {
    // 响应成功的都会触发这个函数 也就是状态码在2xx范围内会触发
    return response;
  },
  (error) => {
    // 响应失败的会触发这个函数 也会是状态码不在2xx范围内会触发
    return Promise.reject(error);
  }
);
export default instance;
