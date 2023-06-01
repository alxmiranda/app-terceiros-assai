import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./scss/global.scss";
import PageLogin from "./pages/Login";
import PageServicos from "./pages/Servicos";
import CapturarQRCode from "./pages/CapturarQRCode";
import RealizarServico from "./pages/RealizarServico";
import FinalizarServico from "./pages/FinalizarServico";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLogin />,
  },
  {
    path: "/servicos",
    element: <PageServicos />,
  },
  {
    path: "/iniciar/:tipoServico/:etiqueta",
    element: <RealizarServico />,
  },
  {
    path: "/iniciar/capturar-qrcode/:tipoServico",
    element: <CapturarQRCode />,
  },
  {
    path: "/finalizar/:tipoServico/:idServico/:etiqueta",
    element: <FinalizarServico />,
  },
  {
    path: "/finalizar/capturar-qrcode/:tipoServico/:idServico",
    element: <CapturarQRCode />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
