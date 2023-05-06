import request from "../../../../helpers/request";
import { IRequestPostMediaCorretiva } from "../../types";

const postMediaCorretiva = async ({
  id,
  photos,
}: IRequestPostMediaCorretiva) => {
  const url = `${process.env.REACT_APP_API}Media/PostMediaCorretiva/${id}`;
  
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

export default postMediaCorretiva;
