import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./scss/global.scss"
import PageLogin from "./pages/Login"
import PageServicos from "./pages/Servicos";
import RealizarServico from "./pages/RealizarServico";

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
    path: "/realizar-servico/:tipoServico",
    element: <RealizarServico />
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
