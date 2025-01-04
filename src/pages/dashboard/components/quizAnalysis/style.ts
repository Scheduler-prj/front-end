import styled, { css } from "styled-components";

export const AnalysisContainer =styled.div`
  display: flex;
  /* width: 700px; */
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const AnalysisMain=styled.div`
  display: flex;
  /* width: 700px; */
  width:100%;
  /* align-items: flex-start; */
  /* align-content: flex-start; */
  /* gap: 20px; */
  gap:2.85%;
  flex-wrap: wrap;
`

export const InfoWrapper =styled.div`
  display: flex;
  /* width: 312px; */
  /* height: 200px; */
  width: 44.57%; //수정해야함
  padding: 22px 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  
  border-radius: 12px;
  background: var(--White-FFFFFF, #FFF);  
  /* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
  /* box-shadow: 1px 1px 20px 0px color(display-p3 0 0 0 / 0.04); */
`

export const InfoContainer =styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`

export const Line=styled.div`
  height:0.4px;
  width:100%;
  background: #D4D6EB;
`

export const WrongWrapper=styled.div`
 /* width: 700px; */
 width:100%;
  /* height: 327px; */
  /* flex-shrink: 0; */
  padding:16px 16px 8px 16px;
  margin-top:20px;
  border-radius: 12px;
  background: var(--White-FFFFFF, #FFF);
  /* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);

box-shadow: 1px 1px 20px 0px color(display-p3 0 0 0 / 0.04);

  display:flex;
  flex-direction:column;
  justify-content:center;
  
`

export const WrongCard =styled.div`
  display: flex;
  /* width: 668px; */
  align-self:stretch;
  padding: 12px 22px;
  justify-content: space-between;
  align-items: flex-start;


  border-radius: 10px;
  background: var(--Cool-Gray-10-F5F5FA, #F5F5FA);
  /* background: var(--Cool-Gray-10-F5F5FA, color(display-p3 0.9593 0.9611 0.9801)); */
`
export const ChartWrapper=styled.div`
  width:52.57%;
  align-self:stretch;
  /* flex-shrink:0; */
`