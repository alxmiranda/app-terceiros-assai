import request from '../../helpers/request'

interface IRequestLogin {
  user: string,
  pass: string
}

const login = async (params: IRequestLogin) => {
  
  const url =  `${process.env.REACT_APP_API}/UsuarioTerceiro/Login?login=${params.user}&senha=${params.pass}`
  const result = await request({ url, noProtect: true }) // request para api

  if(result.data.token) {
    return result
  } else {
    throw new Error(result.data.message)
  }
}

export default login