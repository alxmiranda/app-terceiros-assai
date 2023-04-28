import { error } from "console";
import request from "../../../../helpers/request";
import { IRequestPostMediaPreventiva } from "../../types";
// import { IRequestGetServicos, IResponseGetServicos } from "./types";

const postMediaPreventiva = async ({
  id,
  photos,
}: IRequestPostMediaPreventiva) => {
  const url = `${process.env.REACT_APP_API}/Media/PostMediaPreventiva/${id}`;
  
  const result = photos.map(async (item) => {
    const data = {
      idServico: Number(id),
      tipoArquivo: item.blob.type,
      base64Image: item.blob,
    };
    return await request({ url, method: "post", data });
  });

  return Promise.all(result).then(result => result).catch(error => {throw new Error(error)})
};

export default postMediaPreventiva;
