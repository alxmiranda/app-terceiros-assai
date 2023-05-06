import React from "react";
import TextArea from "../../../components/TextArea";
import "./_styles.scss";
import Button from "../../../components/Button";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { actionPutFinalizarPreventiva } from "../../../features/Preventiva/FinalizarServico/slices";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { actionPutFinalizarCorretiva } from "../../../features/Corretiva/FinalizarServico/slices";

const Comment = () => {
  const [state, setState] = React.useState("");
  const dispatch = useAppDispatch();
  const { putFinalizarPreventiva } = useAppSelector((state) => state);
  const { idServico, etiqueta, tipoServico }: any = useParams();
  const navigate = useNavigate();

  const sendComment = () => {
    const data = {
      id: idServico,
      etiqueta,
      observacoes: state,
    };
    const conditionalsToFinalizar = {
      preventiva: () => dispatch(actionPutFinalizarPreventiva(data)),
      corretiva: () => dispatch(actionPutFinalizarCorretiva(data)),
    };
    conditionalsToFinalizar[tipoServico]()
  };

  React.useEffect(() => {
    if (putFinalizarPreventiva.status === "success") {
      navigate("/servicos");
    }
  }, [putFinalizarPreventiva.status]);

  return (
    <div className="comment">
      <div className="mb-10">
        <TextArea
          size="sm"
          label="Observações (opcional)"
          onChange={(e) => setState(e.target.value)}
        >
          {state}
        </TextArea>
        <p className="paragraph paragraph--sm color-negative">
          {putFinalizarPreventiva.feedbackError}
        </p>
      </div>
      <nav>
        <Button size="sm" variant="primary" onClick={sendComment}>
          Finalizar Serviço
        </Button>
      </nav>
    </div>
  );
};
export default Comment;
