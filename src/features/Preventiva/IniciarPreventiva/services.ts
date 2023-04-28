import request from "../../../helpers/request";
import { IRequestPutIniciarPreventiva } from "../types";

const putIniciarPreventiva = async ({
  id,
  etiqueta,
}: IRequestPutIniciarPreventiva) => {
  const url = `${process.env.REACT_APP_API}/Preventiva/Iniciar/${id}/${etiqueta}`;
  const result = await request({ url, method: "put" });

  return result;
};

export default putIniciarPreventiva;
