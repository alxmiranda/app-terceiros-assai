import { useLocation, useParams } from "react-router-dom";
import { Html5Qrcode, Html5QrcodeResult } from "html5-qrcode";
import "./_styles.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout";

const CapturarQRCode = () => {
  let html5QrCode: any = null;
  const navigate = useNavigate();
  const { tipoServico, idServico } = useParams();
  const location = useLocation()
  const [loading, setLoading] = React.useState(true);

  const qrCodeSuccessCallback = (
    decodedText: string,
    decodedResult: Html5QrcodeResult
  ) => {
    const stringAction = location.pathname.split("/")[1]
    const conditionalsToServicos = {
      iniciar: () => navigate(`/iniciar/${tipoServico}/${decodedText}`),
      finalizar: () => navigate(`/finalizar/${tipoServico}/${idServico}/${decodedText}`)
    }
    conditionalsToServicos[stringAction]()
  };

  const qrCodeErrorCallback = (error: string) => null

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
    return () => html5QrCode.stop();
  }, []);

  return (
    <BaseLayout noPadding>
      <div className="page-reader">
        <div id="reader"></div>
        {loading ? (
          <div className="container mt-20">
            <p className="paragraph paragraph--lg color-accent">
              <strong>carregando...</strong>
            </p>
          </div>
        ) : (
          <div className="container mt-20">
            <p className="paragraph paragraph--lg color-accent">
              Aponte a camera para a etiqueta no equipamento
            </p>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default CapturarQRCode;
