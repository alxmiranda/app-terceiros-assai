export type IResponseGetPreventiva = {
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
    idLocal: 13;
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
    descricao: "-";
    ativo: number;
  };
  media: Array<any>;
  tarefas: Array<{
    id: number;
    idEquipamento: number;
    assiduidade: string;
    descricao: string;
    ativo: number;
  }>;
};

export interface IRequestPutIniciarPreventiva {
  id: string | number,
  etiqueta: string | undefined
}


export interface IInitialStateGetPreventiva {
  preventiva: IResponseGetPreventiva;
  status: "" | "success" | "failed" | "loading";
  feedbackError?: any;
}

export interface IInitialStatePutIniciarPreventiva {
  status: "" | "success" | "failed" | "loading";
  feedbackError?: any;
}