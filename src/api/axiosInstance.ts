import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache", // 서버에서 설정했었도 클라이언트에서 이 설정을 안하니깐 디스크 캐시가 발생함
    Pragma: "no-cache",
  },
  validateStatus: (status) => status === 200, // status 가 200 이 아니면 에러처리
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // 세션 만료
      if (window.location.pathname !== "/account/login") {
        window.localStorage.setItem("access_token", "");
        window.localStorage.setItem("refresh_token", "");
        window.location.pathname = "/account/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
