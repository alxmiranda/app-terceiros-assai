import "./_styles.scss";
import Modal from "../../components/Modal";
import Button, { ButtonGroup } from "../../components/Button";
import { useAppSelector } from "../../hooks/useAppSelector";
import BaseLayout from "../../components/BaseLayout";
import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actionGetPreventiva } from "../../features/Preventiva/GetPreventiva/slices";
import { useNavigate, useParams } from "react-router-dom";
import { actionPutInciarPreventiva, actionResetPutInciarPreventiva } from "../../features/Preventiva/IniciarPreventiva/slices";

const RealizarServico = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { etiqueta, tipoServico } = useParams();
  const {
    getPreventiva: { status, preventiva },
    putIniciarPreventiva,
  } = useAppSelector((state) => state);

  const OniniciarPreventiva = () => dispatch(actionPutInciarPreventiva({ id: preventiva.id, etiqueta }));

  const OnCancel = () => navigate(`/capturar-qrcode/${tipoServico}`);

  const OnReset:any = () => dispatch(actionResetPutInciarPreventiva())

  React.useEffect(() => {
    dispatch(actionGetPreventiva(etiqueta));
  }, []);

  React.useEffect(() => {
    if (putIniciarPreventiva.status === "success") {
      navigate("/servicos");
    }
  }, [putIniciarPreventiva.status]);

  React.useEffect(() => {
    return () => OnReset()
  }, []) 

  if (!etiqueta) {
    return (
      <BaseLayout>
        <h1>Não existe nenhuma preventiva com esse código</h1>
      </BaseLayout>
    );
  }

  if (status === "loading") {
    return (
      <BaseLayout>
        <h1>carregando preventiva...</h1>
      </BaseLayout>
    );
  }

  if (status === "failed") {
    return (
      <BaseLayout>
        <h1>Algo deu errado</h1>
      </BaseLayout>
    );
  }

  return (
    <Modal
      size="sm"
      children={
        <>
          <p className="paragraph paragraph--sm mb-10">
            <strong>Gostaria de realizar a preventiva?</strong>
          </p>
          <p className="paragraph paragraph--sm">
            <strong>Equipamento: </strong>
            {preventiva?.equipamento?.tipoEquipamento?.nome}
          </p>
          <p className="paragraph paragraph--sm">
            <strong>Assiduidade: </strong>
            {preventiva.assiduidade}
          </p>
        </>
      }
      actions={
        <ButtonGroup>
          <Button size="md" variant="secondary" onClick={OnCancel}>
            Não
          </Button>
          <Button size="md" variant="primary" onClick={OniniciarPreventiva}>
            Sim
          </Button>
        </ButtonGroup>
      }
    ></Modal>
  );
};

export default RealizarServico;
