import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme"; // 분리된 theme 가져오기
import SolveQuiz from "./pages/SolveQuiz/SolveQuiz";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <SolveQuiz />
    </ThemeProvider>
  );
};
export default App;
