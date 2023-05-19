import React from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Alert from "../../Alert";

const MessagesCenter = () => {
  const [state, setState] = React.useState(
    {} as { type: "success" | "error" | "warning"; msg: string }
  );
  const {
    postIniciarCorretiva,
    putIniciarPreventiva,
    postMediaPreventiva,
    postMediaCorretiva,
    putFinalizarCorretiva,
    putFinalizarPreventiva,
  } = useAppSelector((state) => state);
  const status =
    postIniciarCorretiva.status ||
    putIniciarPreventiva.status ||
    postMediaPreventiva.status ||
    postMediaCorretiva.status ||
    putFinalizarPreventiva.status ||
    putFinalizarCorretiva.status;

  React.useEffect(() => {
    if (postIniciarCorretiva.status === "success")
      setState({ type: "success", msg: "Corretiva iniciada!" });

    if (postIniciarCorretiva.status === "failed")
      setState({ type: "error", msg: postIniciarCorretiva.feedbackError });

    if (putIniciarPreventiva.status === "success")
      setState({ type: "success", msg: "Preventiva iniciada!" });

    if (putIniciarPreventiva.status === "failed")
      setState({ type: "error", msg: putIniciarPreventiva.feedbackError });

    if (
      postMediaPreventiva.status === "success" ||
      postMediaCorretiva.status === "success"
    )
      setState({ type: "success", msg: "Imagens salvas!" });

    if (
      postMediaPreventiva.status === "failed" ||
      postMediaCorretiva.status === "failed"
    )
      setState({
        type: "error",
        msg:
          postMediaPreventiva.feedbackError || postMediaCorretiva.feedbackError,
      });

    if (
      putFinalizarPreventiva.status === "success" ||
      putFinalizarCorretiva.status === "success"
    )
      setState({ type: "success", msg: "Preventiva finalizada!" });

    if (
      putFinalizarPreventiva.status === "failed" ||
      putFinalizarCorretiva.status === "failed"
    )
      setState({
        type: "error",
        msg:
        putFinalizarPreventiva.feedbackError || putFinalizarCorretiva.feedbackError,
      });
  }, [status]);


  return (
    <>
      {state.type && (
        <Alert show type={state.type}>
          {state.msg}
        </Alert>
      )}
    </>
  );
};

export default MessagesCenter;
