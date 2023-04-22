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
      <h2 className="heading--sm">Serviços</h2>
      <nav className="nav-start-servicos">
        <Link size="sm" to="/realizar-servico/preventiva" variant="primary">Iniciar Preventiva</Link>
        <Link size="sm" to="/realizar-servico/correntiva" variant="secondary">Iniciar Corretiva</Link>
      </nav>
      <ListServicos data={getServicos.servicos} />
    </BaseLayout>
  );
};

export default PageServicos;
