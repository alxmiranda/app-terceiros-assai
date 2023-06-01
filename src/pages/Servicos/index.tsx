import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actionGetServicos } from "../../features/Servicos/slices";
import BaseLayout from "../../components/BaseLayout";
import ListServicos from "./ListServicos";
import "./_styles.scss";
import { Link } from "react-router-dom";
import { BsCamera } from "react-icons/bs";
import Select from "../../components/Select";

const PageServicos = () => {
  const dispatch = useAppDispatch();

  const onChange = (ev) =>
    dispatch(actionGetServicos({ tipoServico: ev.target.value }));

  return (
    <BaseLayout>
      <nav className="nav-start-servicos mb-20">
        <Link to="/iniciar/capturar-qrcode/preventiva">
          <BsCamera />
          <span>Iniciar Preventiva</span>
        </Link>
        <Link to="/iniciar/capturar-qrcode/corretiva">
          <BsCamera />
          <span>Iniciar Corretiva</span>
        </Link>
      </nav>

      <Select
        onChange={onChange}
        size="sm"
        label="Escolha o tipo de seriço"
        options={[
          { value: "preventiva", children: "preventiva" },
          { value: "corretiva", children: "corretiva" },
        ]}
      />
      
      <h2 className="heading--sm">Serviços</h2>
      <ListServicos />
    </BaseLayout>
  );
};

export default PageServicos;
