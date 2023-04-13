interface IUser {
  usuario: {
    id: number,
    idCliente: number,
    idLoja: number,
    nome: string,
    login: string,
    senha: string,
    ultimaSenha: any,
    contato: any,
    email: any,
    contatoAlerta: any,
    emailAlerta: any,
    nivel: number,
    dataCadastro: string,
    dataAlteracao: string,
    dataExclusao: string,
    chave: any,
    ativacao: number,
    reset: number,
    ativo: number,
    loja: {
      id: number,
      idRegional: number,
      idCoordenacao: number,
      numero: any,
      nome: any,
      endereco: any,
      uf: any,
      arquivoPlanta: any,
      ativo: number
    }
  },
  customCliente: {
    id: number,
    nomeEmpresarial: string,
    nomeFantasia: string,
    descricao: string,
    imgLogotipo: string,
    imgBack: string,
    imgFaixa: string,
    primaryDarkColor: string,
    primaryColor: string,
    primaryLightColor: string,
    secondaryColor: string,
    textDarkColor: string,
    textLightColor: string,
    successColor: string,
    dangerColor: string,
    warningColor: string,
    infoColor: string,
    dataEvento: string,
    dataUltimaAlteracao: string,
    ativo: number
  },
  acesso: {
    divisao: boolean,
    regional: boolean,
    loja: boolean,
    menuMapa: boolean,
    menuDashboard: boolean,
    menuRelatorios: boolean,
    menuDocAVCB: boolean,
    menuConfigLoja: boolean,
    menuConfigUsuarios: boolean,
    menuConfigGruposMonitor: boolean,
    menuConfigCustom: boolean
  },
  token: string,
  message: string,
}

const KEY_SESSION_USER = "SESSION_USER";

const setUser = (user: any) =>
  new Promise((resolve: any, reject: any) => {
    if (user.token) {
      sessionStorage.setItem(KEY_SESSION_USER, JSON.stringify(user));
      resolve();
    } else {
      reject();
    }
  });

const logout = () => {
  sessionStorage.removeItem(KEY_SESSION_USER);
  window.location.href = "/";
};

const getUser = () => {
  const user: IUser = JSON.parse(`${sessionStorage.getItem(KEY_SESSION_USER)}`);
  return user;
};

export { setUser, getUser, logout };
