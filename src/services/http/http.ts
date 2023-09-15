import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class Http {
 public post = async <T>(
  url: string,
  body: AxiosResponse,
  header: AxiosRequestConfig,
 ): Promise<AxiosResponse> => {
  return await axios.post<T>(url, body, header);
 };
 public get = async <T>(url: string, header: AxiosRequestConfig): Promise<AxiosResponse> => {
  return await axios.get<T>(url, header);
 };
 public header(params: URLSearchParams): AxiosRequestConfig {
  return {
   headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
   },
   params: params,
  };
 }
}
export { Http };
