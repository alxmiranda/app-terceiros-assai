import request from "../../../helpers/request";
// import { IRequestGetServicos, IResponseGetServicos } from "./types";

const getPreventivaByEtiqueta = async (etiquetaPreventiva: string) => {
  const url = `${process.env.REACT_APP_API}/Preventiva/PreventivaByEtiqueta/${etiquetaPreventiva}`;
  const result = await request({ url });

  return result
};

export default getPreventivaByEtiqueta;
