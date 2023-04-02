import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-styles";
import useTheme from "hooks/theme";
import Home from "pages/Home";
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
