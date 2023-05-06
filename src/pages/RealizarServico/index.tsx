import "./_styles.scss";
import Modal from "../../components/Modal";
import Button, { ButtonGroup } from "../../components/Button";
import { useAppSelector } from "../../hooks/useAppSelector";
import BaseLayout from "../../components/BaseLayout";
import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actionGetPreventiva } from "../../features/Preventiva/GetPreventiva/slices";
import { useNavigate, useParams } from "react-router-dom";
import {
  actionPutInciarPreventiva,
  actionResetPutInciarPreventiva,
} from "../../features/Preventiva/IniciarServico/slices";
import { actionPostInciarCorretiva } from "../../features/Corretiva/IniciarServico/slices";

const RealizarServico = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { etiqueta, tipoServico } = useParams();
  const {
    getPreventiva: { status, preventiva },
    putIniciarPreventiva,
    postIniciarCorretiva,
  } = useAppSelector((state) => state);
  const isPreventiva = tipoServico === "preventiva";
  
  const getDetailsServico = () => isPreventiva && dispatch(actionGetPreventiva(etiqueta));

  const onIniciarServico = () => {
    if (!tipoServico) return null;
    const conditionalsToIniciar = {
      preventiva: () =>
        dispatch(actionPutInciarPreventiva({ id: preventiva.id, etiqueta })),
      corretiva: () => dispatch(actionPostInciarCorretiva({ etiqueta })),
    };
    conditionalsToIniciar[tipoServico]();
  };

  const onCancelServico = () =>
    navigate(`iniciar/capturar-qrcode/${tipoServico}`);

  const successRedirect = () => {
    if (
      putIniciarPreventiva.status === "success" ||
      postIniciarCorretiva.status === "success"
    ) {
      navigate("/servicos");
    }
  };

  const onReset: any = () => dispatch(actionResetPutInciarPreventiva());

  React.useEffect(getDetailsServico, []);

  React.useEffect(successRedirect, [
    putIniciarPreventiva.status,
    postIniciarCorretiva.status,
  ]);

  React.useEffect(() => {
    return () => onReset();
  }, []);

  if (!etiqueta) {
    return (
      <BaseLayout>
        <h1>Não existe nenhum serviço com esse código</h1>
      </BaseLayout>
    );
  }

  if (status === "loading") {
    return (
      <BaseLayout>
        <h1>carregando serviço...</h1>
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
    <BaseLayout>
      <Modal
        size="sm"
        children={
          isPreventiva ? (
            <>
              <p className="paragraph paragraph--md mb-10">
                Gostaria de iniciar o serviço de <strong>preventiva?</strong>
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
          ) : (
            <>
              <p className="paragraph paragraph--md mb-10">
                Gostaria de iniciar o serviço de <strong>corretiva?</strong>
              </p>
            </>
          )
        }
        actions={
          <ButtonGroup>
            <Button size="md" variant="secondary" onClick={onCancelServico}>
              Não
            </Button>
            <Button size="md" variant="primary" onClick={onIniciarServico}>
              Sim
            </Button>
          </ButtonGroup>
        }
      ></Modal>
    </BaseLayout>
  );
};

export default RealizarServico;
