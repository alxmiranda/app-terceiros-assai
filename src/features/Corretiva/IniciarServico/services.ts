import request from "../../../helpers/request";
import { IRequestPostIniciarCorretiva } from "../types";

const postIniciarCorretiva = async ({
  etiqueta,
}: IRequestPostIniciarCorretiva) => {
  const url = `${process.env.REACT_APP_API}/Corretiva/Iniciar/${etiqueta}`;
  const result = await request({ url, method: "post" });

  return result;
};

export default postIniciarCorretiva;
