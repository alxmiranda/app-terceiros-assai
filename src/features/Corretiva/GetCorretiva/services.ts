import request from "../../../helpers/request";

const getCorretivaById = async (idCorretiva: string) => {
  const url = `${process.env.REACT_APP_API}Corretiva/CorretivaById/${idCorretiva}`;
  const result = await request({ url });

  return result
};

export default getCorretivaById;
