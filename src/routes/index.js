import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-styles";
import useTheme from "hooks/theme";
import Home from "pages/Home";
import Product from "pages/Product";
import Loader from "components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: Loader,
  },
  {
    path: "/product/:id",
    element: <Product />,
    loader: Loader,
  },
]);

function Routes() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default Routes;
