import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./scss/global.scss"
import PageLogin from "./pages/Login"
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
    element: <PageServicos />
  },
  {
    path: "/capturar-qrcode/:tipoServico",
    element: <CapturarQRCode />
  },
  {
    path: "/realizar-servico/:etiqueta",
    element: <RealizarServico />
  },
  {
    path: "/finalizar-servico",
    element: <FinalizarServico />
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
