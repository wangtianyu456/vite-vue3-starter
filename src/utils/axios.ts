import Axios from "axios";
import { ElMessage } from "element-plus";

const baseURL = import.meta.env.BASE_URL;

const axios = Axios.create({
  baseURL,
  timeout: 30000,
});

axios.interceptors.request.use(
  (config) => {
    config.headers["token"] = "123";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      ElMessage.error(`Code: ${code}, Message: ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default axios;
