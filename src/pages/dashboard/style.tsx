import styled, { css } from "styled-components";
import { media } from "../../styles/media";

export const CommonBackground = styled.div`
  width:100%;
  background-color: #f5f5fa;
  padding: 0 2.43%;
`;
 
 export const DashWrapper=styled.div`
  padding: 0 2.56%;
 `;

export const DashContainer =styled.div`
  display: grid; /* Grid 레이아웃 사용 */
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-columns:auto auto; */
  /* grid-template-rows: repeat(2, 1fr);    2행 설정 */
  grid-template-rows: auto auto;
  gap: 5.12%; 
  width: 100%;

  ${media.tablet`
    display:flex;
    flex-direction:column;
    gap:40px;
  `}
`;