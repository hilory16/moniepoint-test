import { createBrowserRouter } from "react-router-dom";

import Home from "pages/home";
import Loader from "components/Loader";

const James = () => <h1>James</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: Loader,
  },
  {
    path: "/james",
    element: <James />,
    loader: Loader,
  },
]);

export default router;
