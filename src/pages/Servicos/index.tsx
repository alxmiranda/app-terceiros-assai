import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actionGetServicos } from "../../features/Servicos/slices";
import BaseLayout from "../../components/BaseLayout";
import { useAppSelector } from "../../hooks/useAppSelector";
import ListServicos from "./ListServicos";

const PageServicos = () => {
  const dispatch = useAppDispatch();
  const { getServicos } = useAppSelector((state) => state);
  
  React.useEffect(() => {
    dispatch(actionGetServicos());
  }, []);

  return (
    <BaseLayout>
      <h1>Serviços</h1>
      <ListServicos data={getServicos.servicos} />
    </BaseLayout>
  );
};

export default PageServicos;
