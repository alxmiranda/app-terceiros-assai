import request from "../../helpers/request";
import { IRequestGetServicos, IResponseGetServicos } from "./types";

const servicos = async ({ dataIni, dataFim, status }: IRequestGetServicos) => {
  const url = `${process.env.REACT_APP_API}/Preventiva/GetLista?dataIni=${dataIni}&dataFim=${dataFim}&status=${status}`;
  const result = await request({ url });

  return result
};

export default servicos;
