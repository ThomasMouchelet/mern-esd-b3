import axios from "axios";
import TokenService from "./token.service";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken  = TokenService.getLocalAccessToken();
  
    if (accessToken) {
      config.headers["Authorization"] = 'Bearer ' + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    // if (originalConfig.url !== "/login_check" && err.response) {
    //   // Access Token was expired
    //   if (err.response.status === 401 && !originalConfig._retry) {
    //     originalConfig._retry = true;
    //     try {
    //       const rs = await instance.post("/token/refresh", {
    //         refreshToken: TokenService.getLocalRefreshToken(),
    //       });

    //       const { token } = rs.data;
    //       TokenService.updateLocalAccessToken(token);

    //       return instance(originalConfig);
    //     } catch (_error) {
    //       return Promise.reject(_error);
    //     }
    //   }
    // }

    return Promise.reject(err);
  }
);

export default instance;