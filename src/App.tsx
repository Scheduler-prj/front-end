import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme"; // 분리된 theme 가져오기

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
