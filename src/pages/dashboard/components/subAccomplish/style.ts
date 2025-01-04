import styled, { css } from "styled-components";

export const SubWrapper = styled.div`
  display: flex;
  /* width: 700px; */
  width:100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const SubHeaderWrapper=styled.div`
  display: flex;
  /* width:100%; */
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

export const SubHeaderContainer=styled.div`
  display: flex;
/* width: 700px; */
width:100%;
justify-content: space-between;
align-items: center;
`;

export const SubHedaerText=styled.div`
  display: flex;
align-items: center;
gap: 20px;
`





export const SubMain=styled.div`
  display: flex;
  align-items: center;
  /* align-content: center; */
  gap: 2.85%;
  align-self: stretch;
  flex-wrap: wrap;

`

export const SubCardWrapper=styled.div`
  display: flex;
/* width: 220px; */
/* height: 240px; */
width: 31.42%;
/* padding-bottom:0px 20px 22px 20px; */
flex-direction: column;
/* align-items: center; */
/* gap: 16px; */
border-radius: 12px;
background: var(--White-FFFFFF, #FFF);
/* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */
box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
/* box-shadow: 1px 1px 20px 0px color(display-p3 0 0 0 / 0.04); */

`

export const CardMain=styled.div`
  padding:16px 9.09% 22px 9.09%;


`

export const Button=styled.div`
  display: flex;
/* width: 180px; */
width:100%;
padding: 8px 12px 8px 20px;
justify-content: space-between;
align-items: center;

border-radius: 8px;
border: 1px solid var(--Primary-6673FF, #5F74FF);
/* border: 1px solid var(--Primary-6673FF, color(display-p3 0.4 0.45 1)); */
background: var(--White-FFFFFF, #FFF);
/* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */

cursor: pointer;
&:hover{
  background: var(--Cool-Gray-7-E3E3FF, #E3E3FF);
/* background: var(--Cool-Gray-7-E3E3FF, color(display-p3 0.8903 0.8903 1)); */
}
`