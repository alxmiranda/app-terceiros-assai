export type IResponseGetCorretiva = {
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

export interface IRequestPostIniciarCorretiva {
  etiqueta: string | undefined;
}


export interface IRequestPostMediaCorretiva {
  id: string | number | undefined;
  photos: Array<{
    idServico?: number;
    blob: Blob
  }>;
}

export interface IInitialStateGetCorretiva {
  preventiva: IResponseGetCorretiva;
  status: "" | "success" | "failed" | "loading";
  feedbackError?: any;
}

export interface IInitialStatePostIniciarCorretiva {
  status: "" | "success" | "failed" | "loading";
  feedbackError?: any;
}

export interface IInitialStatePutMediasCorretiva {
  status: "" | "success" | "failed" | "loading";
  feedbackError?: any;
}

export interface IInitialStatePutFinalizarCorretiva {
  status: "" | "success" | "failed" | "loading";
  feedbackError?: any;
}

export interface IRequestPutFinalizarCorretiva {
  id: string | number | undefined;
  etiqueta: string;
  observacoes: string
}
