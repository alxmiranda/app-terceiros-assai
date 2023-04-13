import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./scss/global.scss"
import PageLogin from "./pages/Login"
import PageServicos from "./pages/Servicos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLogin />,
  },
  {
    path: "/servicos",
    element: <PageServicos />
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
