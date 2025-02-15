import styled, { css } from "styled-components";
import { media } from "../../styles/media";

export const MyPageWrapper =styled.div`
  padding:0 12.19% 133px 12.19%;
`;

export const MyPageContainer=styled.div`
  display: flex;
  /* max-width: 1240px; */
  flex-direction: column;
  align-items: stretch;
  gap: 80px;
  /* align-self: stretch; */
`;

export const TopContainer =styled.div`
  display: flex;
  /* min-width: 920px; */
  /* max-width: 1240px; */
  align-items: center;
  gap: 40px;
  /* align-self: stretch; */
`;

export const TopLeftWrapper=styled.div`
  display: flex;
  /* height: 400px; */
  min-width: 320px;
  /* min-width: 320px; */
  /* max-width: 400px; */
  padding: 55px 20px;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  /* flex: 1 0 0; */

  width:33%;//임시

  border-radius: 12px;
  background: var(--White-FFFFFF, #FFF);
  /* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
  /* box-shadow: 1px 1px 20px 0px color(display-p3 0 0 0 / 0.04); */
`

export const TopLeftContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width:100%;
  /* flex: 1 0 0; */
`;

export const ImageWRapper=styled.div`
  /* padding:0 60px; */

  &  img {
    width:160px;
    height:160px;

    ${media.tablet`
      width:100px;
      height:160px;  
    `}
  }
`;

export const TopRightWrapper=styled.div`
  display: flex;
  /* min-width: 380px; */
  min-width: 380px;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  align-items:stretch;
  gap: 20px;
  /* flex: 1 0 0; */
  width:66%;//임시
  border-radius: 12px;
  background: var(--White-FFFFFF, #FFF);
  /* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
  /* box-shadow: 1px 1px 20px 0px color(display-p3 0 0 0 / 0.04); */

  align-self:stretch;
`;

export const ModifyButton=styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid var(--Primary-6673FF, #5F74FF);
  /* border: 1px solid var(--Primary-6673FF, color(display-p3 0.4 0.45 1)); */
  background: var(--White-FFFFFF, #FFF);
  /* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */

  &:hover{
    background: var(--Cool-Gray-7-E3E3FF, #E3E3FF);
  }
`;

export const PriceButton=styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: var(--Primary-6673FF, #6373FF);
  /* background: var(--Primary-6673FF, color(display-p3 0.4 0.45 1)); */

  &:hover{
    background: var(--Secondary-4552DD, #4252E5);
  }
`;

export const BottomContainer =styled.div`
  display: flex;
  /* min-width: 920px; */
  /* max-width: 1240px; */
  flex-direction: column;
  align-items: stretch;
  gap: 40px;
  align-self: stretch;
`;

export const BottomMain =styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;

  border-radius: 12px;
  background: var(--White-FFFFFF, #FFF);
  /* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
  /* box-shadow: 1px 1px 20px 0px color(display-p3 0 0 0 / 0.04); */
`;

export const BottomMiddleLine=styled.div`
  width:100%;
  height:1px;
  background: #D4D6EB;
`;

export const LogOutWrapper=styled.div`
display: flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
align-self: stretch;

border-radius: 12px;
background: var(--White-FFFFFF, #FFF);
/* background: var(--White-FFFFFF, color(display-p3 1 1 1)); */
box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
/* box-shadow: 1px 1px 20px 0px color(display-p3 0 0 0 / 0.04); */
`;

export const LogOutContainer=styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;