import request from "../../../helpers/request";
import { IRequestPutFinalizarPreventiva } from "../types";

const putFinalizarPreventiva = async ({
  id,
  etiqueta,
  observacoes,
}: IRequestPutFinalizarPreventiva) => {
  const url = `${process.env.REACT_APP_API}Preventiva/Fechar/${id}/${etiqueta}?observacoes=${observacoes}`;
  const result = await request({
    url,
    method: "put",
  });

  return result;
};

export default putFinalizarPreventiva;
