import styled, { css } from "styled-components";

export const CommonBackground = styled.div`
  /* width: calc(100% - 280px); */
  width:100%;
  background-color: #f5f5fa;
  /* padding: 2.43%; */
  padding: 0 40px;
  /* display: flex; */
  /* aspect-ratio: auto 16 / 9; */
`;
 
 export const DashWrapper=styled.div`
  padding: 0 40px;
 `;

export const DashContainer =styled.div`

  display: grid; /* Grid 레이아웃 사용 */
  grid-template-columns: repeat(2, 1fr); /* 2열 설정 */
  grid-template-rows: repeat(2, 1fr);    /* 2행 설정 */
  gap: 40px; /* 칸 사이의 간격 */
  width: 100%;
  /* height: 200px; */
  /* border: 1px solid #ccc; */
`;