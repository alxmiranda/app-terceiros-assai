import { useParams } from "react-router-dom";
import {
  Html5Qrcode,
  Html5QrcodeResult,
} from "html5-qrcode";
import "./_styles.scss";
import React from "react";

const RealizarServico = () => {
  const { tipoServico } = useParams();
  let html5QrCode: any = null;
  const [state, setState] = React.useState("");
  const [loading, setLoading] = React.useState(true)

  const qrCodeSuccessCallback = (
    decodedText: string,
    decodedResult: Html5QrcodeResult
  ) => {
    setState(decodedText);
  };

  const qrCodeErrorCallback = (error: string) => console.log(error);

  const start = () => {
    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      qrCodeSuccessCallback,
      qrCodeErrorCallback
    );
    setLoading(false)
  };

  const stop = () =>
    html5QrCode
      .stop()
      .then(() => setState(""))
      .catch((e: string) => console.log(e));

  React.useEffect(() => {
    html5QrCode = new Html5Qrcode("reader");
    start()
  }, []);


  return (
    <div className="page-reader">
      <div id="reader"></div>
      {loading && <strong>carregando...</strong>}
      {/* <nav className="nav">
        <button className="btn-qr-code btn-start">Ler QR code</button>
        <button className="btn-qr-code btn--outline btn-stop">
          Cancelar Leitura
        </button>
        {state}
      </nav> */}
    </div>
  );
};

export default RealizarServico;
