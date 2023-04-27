import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actionGetServicos } from "../../features/Servicos/slices";
import BaseLayout from "../../components/BaseLayout";
import { useAppSelector } from "../../hooks/useAppSelector";
import ListServicos from "./ListServicos";
import "./_styles.scss";
import { Link } from "../../components/Button";

const PageServicos = () => {
  const dispatch = useAppDispatch();
  const { getServicos } = useAppSelector((state) => state);
  
  React.useEffect(() => {
    dispatch(actionGetServicos());
  }, []);

  return (
    <BaseLayout>
      <nav className="nav-start-servicos mb-20">
        <Link size="sm" to="/capturar-qrcode/preventiva" variant="primary">Iniciar Preventiva</Link>
        <Link size="sm" to="/capturar-qrcode/correntiva" variant="secondary">Iniciar Corretiva</Link>
      </nav>
      <h2 className="heading--sm">Serviços</h2>
      <ListServicos data={getServicos.servicos} />
    </BaseLayout>
  );
};

export default PageServicos;
