export interface IRequestGetServicos {
  dataIni: string;
  dataFim: string;
  status: string;
}

export type IResponseGetServicos = {
  id: number;
  idTipoEquipamento: number;
  idEquipamento: number;
  idUsuarioTerceiro: number;
  idLocal: number;
  assiduidade: string;
  status: string;
  observacoes: string;
  dataProgramada: string;
  dataInicio: string;
  dataFim: string;
  ativo: number;
  equipamento: {
    id: number;
    idTipoEquipamento: number;
    idLocal: number;
    idLoja: number;
    idUsuarioTerceiro: number;
    assiduidade: string;
    info: string;
    ativo: number;
    tipoEquipamento: {
      id: number;
      nome: string;
      descricao: string;
      ativo: number;
    };
  };
  local: {
    id: number;
    nome: string;
    descricao: string;
    ativo: number;
  };
}


export interface IInitialStateServicos {
  servicos: Array<IResponseGetServicos> | [];
  status: "" | "success" | "failed" | "loading";
  feedbackError?: any;
}

