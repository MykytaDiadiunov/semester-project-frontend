import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'
import axios from 'axios'

export const apiService = () => {
  const apiUrl = import.meta.env.VITE_API_URL

  const instance: AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  } as CreateAxiosDefaults)

  async function get<T = unknown, R = unknown>(
    url: string,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return formattingResponse(await instance.get(url, config as AxiosRequestConfig<T>))
  }

  async function post<T = unknown, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return formattingResponse(await instance.post(url, data, config as AxiosRequestConfig<T>))
  }

  async function put<T = unknown, R = unknown>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return formattingResponse(await instance.put(url, data, config as AxiosRequestConfig<T>))
  }

  async function del<T = unknown, R = unknown>(
    url: string,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return formattingResponse(await instance.delete(url, config as AxiosRequestConfig<T>))
  }

  function formattingResponse<T = unknown>(response: AxiosResponse<T>): T {
    return response.data
  }

  return {
    apiUrl,
    instance,
    get,
    post,
    put,
    del,
  }
}
