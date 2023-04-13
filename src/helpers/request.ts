import axios, { AxiosRequestConfig } from 'axios'
import { getUser } from './user'

interface IOptions extends AxiosRequestConfig {
  factory?: (a: any) => any,
  noProtect?: boolean
}

const request = async (options: IOptions) => {
  const { factory, noProtect, responseType } = options;
  let instance = axios.create({
    baseURL: `${process.env.REACT_APP_API}`,
  })

  if(noProtect) {
    instance = axios.create({
      baseURL: `${process.env.REACT_APP_API}`,
    })  
  } else {
    const { token } = getUser()
    instance = axios.create({
      baseURL: `${process.env.REACT_APP_API}`,
      headers: { Authorization: `Bearer ${token}` }
    })
    if(responseType === "blob") {
      instance = axios.create({
        responseType,
        baseURL: `${process.env.REACT_APP_API}`,
        headers: { Authorization: `Bearer ${token}` }
      })
    }
  }

  try {
    const result = await instance(options)
    if (typeof factory === "function") {
      return factory(result)
    }
    return result
  } catch (error: any) {

    if (error.response.status === 404) {
      throw "Recurso indisponível no momento"
    }

    if (error.response.status === 400) {
      throw new Error("Algo deu errado, tente novamente!")
    }

    if (error.response.status === 401) {
      throw new Error("Não autorizado!")
    }
  }
}

export default request