import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing : border-box }

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-Regular.woff2') format('font-woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-SemiBold.woff2') format('font-woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-Bold.woff2') format('font-woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../assets/fonts/Pretendard-ExtraBold.woff2') format('font-woff2');
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
      font-family: 'Pretendard';
      src: url('../assets/fonts/Pretendard-Medium.woff2') format('font-woff2');
      font-weight: 500;
      font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }
`;
