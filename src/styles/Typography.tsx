import styled, {css} from "styled-components";

const BaseTypography = styled.p`
    margin: 0;
    padding: 0;
    font-family: "Arial, sans-serif";
`;

// Mixin: font-weight 설정
const medium = css`
  font-weight: 500;
`;

const regular = css`
  font-weight: 400;
`;

// 타이포 그래피 스타일 정의
export const H1 = styled(BaseTypography)`
  font-size: 40px;
  font-weight: 800;  //Extra bold 
  line-height: 160%;
`;

export const H2 = styled(BaseTypography)`
    font-size: 24px;
    font-weight: 700;  //bold
    line-height: 160%;
`;

export const T1 = styled(BaseTypography)`
    font-size: 36px;
    font-weight: 600;  //Semibold
    line-height: 52px;
`;

export const T2 = styled(BaseTypography)`
    font-size: 32px;
    font-weight: 600;
    line-height: 44px;
`;

export const T3 = styled(BaseTypography)`
    font-size: 26px;
    font-weight: 600;  //Semibold
    line-height: 34px;
    letter-spacing: -1px;
`;

export const T4 = styled(BaseTypography)`
  font-size: 24px;
  font-weight: 600; // Semibold
  line-height: 130%;
`;

export const T5 = styled(BaseTypography)`
  font-size: 22px;
  font-weight: 600; // Semibold
  line-height: normal;
`;

export const T6 = styled(BaseTypography)`
  font-size: 20px;
  font-weight: 600; // Semibold
  line-height: normal;
  letter-spacing: -2px;
`;

export const T7 = styled(BaseTypography)`
  font-size: 16px;
  font-weight: 600; // Semibold
  line-height: 150%;
`;

export const B1 = styled(BaseTypography)`
  font-size: 26px;
  ${medium};
  line-height: 38px;
  letter-spacing: -1px;
`;

export const B2 = styled(BaseTypography)`
  font-size: 22px;
  ${medium};
  line-height: normal;
  letter-spacing: -2px;
`;

export const B3 = styled(BaseTypography)`
  font-size: 20px;
  ${medium};
  line-height: normal;
  letter-spacing: -1px;
`;

export const B4 = styled(BaseTypography)`
  font-size: 18px;
  ${medium};
  line-height: 24px;
  letter-spacing: -2px;
`;

export const B5 = styled(BaseTypography)`
  font-size: 16px;
  ${medium};
  line-height: 140%;
  letter-spacing: -1px;
`;

export const B6 = styled(BaseTypography)`
  font-size: 14px;
  ${medium};
  line-height: 140%;
`;

export const SubT1 = styled(BaseTypography)`
  font-size: 20px;
  ${regular};
  line-height: 130%;
`;

export const B7 = styled(BaseTypography)`
  font-size: 18px;
  ${regular};
  line-height: 30px;
`;

export const Cap1 = styled(BaseTypography)`
  font-size: 16px;
  ${regular};
  line-height: 130%;
`;

export const Cap2 = styled(BaseTypography)`
  font-size: 13px;
  ${regular};
  line-height: 130%;
`;

//색상 정의
export const theme = {
  colors: {
    //Primary Colors
    primary: "#6673FF", // 메인 색상
    secondary: "#4552DD", // 서브 색상

    //Grayscale - Warm Grays
    black: "#2D2D2D",
    warmGray1: "#4D4D55",
    warmGray2: "#828282",
    warmGray3: "#CACCD5",
    white: "#FFFFFF",

    //Grayscale - Cool Grays
    coolGray1: "#585868",
    coolGray2: "#68687C",
    coolGray3: "#7A7FA5",
    coolGray4: "#9DA0C0",
    coolGray5: "#A8A8BC",
    coolGray6: "#D4D6E9",
    coolGray7: "#E3E3FF",
    coolGray8: "#E8E8F1",
    coolGray9: "#EFEFF5",
    coolGray10: "#F5F5FA",
    coolGray11: "#F7F7FF",
  },
};
