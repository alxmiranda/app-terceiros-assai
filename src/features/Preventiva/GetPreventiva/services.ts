import request from "../../../helpers/request";
// import { IRequestGetServicos, IResponseGetServicos } from "./types";

const getPreventiva = async (idPreventiva: string) => {
  const url = `${process.env.REACT_APP_API}/Preventiva/PreventivaByEtiqueta/${idPreventiva}`;
  const result = await request({ url });

  return result
};

export default getPreventiva;
