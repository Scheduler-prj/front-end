import styled, { css } from "styled-components";


export const TodayContainer = styled.div`
  display: flex;
  /* width: 700px; */
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 20px;
`;

export const CardContainer =styled.div`
  width:25%;
  padding:32px 2.85% 2.85%;
  position:relative;
  /* background-color:white; */
  border-radius: 12px;
  background: white;
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
`;

export const CardTop=styled.div`
  width: 100%;
  height: 16px;
  position:absolute;
  border-radius: 12px 12px 0 0;
  top:0;
  left:0;
  /* flex-shrink: 0;  */
  background: #F3E3FF;
  margin-bottom:16px;
`;

export const TodayButton=styled.button`
  padding:8px 20px;
  width:100%;
  background-color:#6373FF;
  border-radius: 8px;
  border:none;
  color:white;
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #4252E5; /* Hover 상태 색상 */
  }
`