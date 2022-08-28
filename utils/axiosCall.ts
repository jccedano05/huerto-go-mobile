import axios, { AxiosRequestHeaders, AxiosResponse, Method } from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const axiosCall = (
  url: string,
  data: object,
  headers: AxiosRequestHeaders,
  method: Method
): Promise<AxiosResponse> =>
  axios({
    method,
    url: `${url}`,
    data,
    headers,
    timeout: 600000,
    withCredentials: true,
  });

export default axiosCall;
