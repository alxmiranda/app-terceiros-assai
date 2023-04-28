import { useParams } from "react-router-dom";
import { Html5Qrcode, Html5QrcodeResult } from "html5-qrcode";
import "./_styles.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { actionGetPreventiva } from "../../features/Preventiva/GetPreventiva/slices";
import Modal from "../../components/Modal";

const RealizarServico = () => {
  let html5QrCode: any = null;
  const navigate = useNavigate()
  const {
    getPreventiva: { status },
  } = useAppSelector((state) => state);

  const { tipoServico } = useParams();
  const [loading, setLoading] = React.useState(true);

  const qrCodeSuccessCallback = (
    decodedText: string,
    decodedResult: Html5QrcodeResult
  ) => {
    navigate(`/realizar-servico/${tipoServico}/${decodedText}`)
  };

  const qrCodeErrorCallback = (error: string) => console.log(error);

  const start = () => {
    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      qrCodeSuccessCallback,
      qrCodeErrorCallback
    );
    setLoading(false);
  };

  React.useEffect(() => {
    html5QrCode = new Html5Qrcode("reader");
    start();
  }, []);

  return (
    <div className="page-reader">
      <div id="reader"></div>
      {loading && <strong>carregando...</strong>}
      {status !== "success" && (
        <div className="container">
          <h1 className="heading--sm">
            Aponte a camera para a etiqueta no equipamento
          </h1>
        </div>
      )}
    </div>
  );
};

export default RealizarServico;
