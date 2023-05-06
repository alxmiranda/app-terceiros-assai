import request from "../../../helpers/request";
import { IRequestPutFinalizarCorretiva } from "../types";

const putFinalizarCorretiva = async ({
  id,
  etiqueta,
  observacoes,
}: IRequestPutFinalizarCorretiva) => {
  const url = `${process.env.REACT_APP_API}Corretiva/Fechar/${id}/${etiqueta}?observacoes=${observacoes}`;
  const result = await request({
    url,
    method: "put",
  });

  return result;
};

export default putFinalizarCorretiva;
// 00001000030000000000
