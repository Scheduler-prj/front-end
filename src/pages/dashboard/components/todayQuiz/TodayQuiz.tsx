import React from "react";
import * as S from "./style";
import Row from "../../../../styles/Layouts/Row";
import Column from '../../../../styles/Layouts/Column';
import { H2,T6 ,B6,T7,Cap2} from "../../../../styles/Typography";
import Back from '../../Back.svg'
import { theme } from "../../../../styles/theme"
// import useDeviceQueries from '../../../../hook/useDeviceQueries' 
import { useMediaQuery } from "react-responsive";


export const TodayQuiz = () => {
  const isMobile = useMediaQuery({ maxWidth: 767, minWidth: 360 });
    return (
       <>
        <S.TodayContainer>
          <Row verticalAlign="center" horizonAlign="distribute">
            <Row verticalAlign="center" gap={16}>
              <H2>오늘 생성된 퀴즈</H2>
              <T6 style={{ color: theme.colors.primary }}>4개</T6>
            </Row>
            <img src={Back} alt="alt"></img>
          </Row>
          {!isMobile ?
            <Row verticalAlign="center" style={{gap:'2.85%',overflowX:'auto'}} >
            <S.CardContainer>
              <S.CardTop></S.CardTop>
              <Column style={{marginBottom:'54px'}}>
                <B6 style={{color:'#9CA0C3'}}>교양</B6>
                <T7>퀴즈 제목</T7>
                <B6 style={{color:'#9CA0C3'}}>25문항</B6>
              </Column>
              <S.TodayButton>
                <T7 style={{color:'white'}}>문제 풀기</T7>
              </S.TodayButton>
            </S.CardContainer>
            <S.CardContainer>
            <S.CardTop></S.CardTop>
              <Column style={{marginBottom:'54px'}}>
                <B6 style={{color:'#9CA0C3'}}>교양</B6>
                <T7>퀴즈 제목</T7>
                <B6 style={{color:'#9CA0C3'}}>25문항</B6>
              </Column>
              <S.TodayButton>
                <T7 style={{color:'white'}}>문제 풀기</T7>
              </S.TodayButton>
            </S.CardContainer>
            <S.CardContainer>
            <S.CardTop></S.CardTop>
              <Column style={{marginBottom:'54px'}}>
                <B6 style={{color:'#9CA0C3'}}>교양</B6>
                <T7>퀴즈 제목</T7>
                <B6 style={{color:'#9CA0C3'}}>25문항</B6>
              </Column>
              <S.TodayButton>
                <T7 style={{color:'white'}}>문제 풀기</T7>
              </S.TodayButton>
            </S.CardContainer>
            <S.CardContainer>
             <S.CardTop></S.CardTop>
              <Column style={{marginBottom:'54px'}}>
                <B6 style={{color:'#9CA0C3'}}>교양</B6>
                <T7>퀴즈 제목</T7>
                <B6 style={{color:'#9CA0C3'}}>25문항</B6>
              </Column>
              <S.TodayButton>
                <T7 style={{color:'white'}}>문제 풀기</T7>
              </S.TodayButton>
            </S.CardContainer>
          </Row>
          :
          <Column>
            <S.CardContainerM>
              <S.CardColor/>
              <S.CardMain>
                <S.CardTextContainer>
                  <Cap2 style={{color:'#9CA0C3'}}>교양</Cap2>
                  <B6 style={{color:'#2D2D2D'}}>퀴즈 제목</B6>
                  <Cap2 style={{color:'#2D2D2D'}}>25문항</Cap2>
                </S.CardTextContainer>
                <div>
                  <S.TodayButtonM>문제 풀기</S.TodayButtonM>
                </div>
              </S.CardMain>
            </S.CardContainerM>
          </Column>
          }
          
        </S.TodayContainer>
       </>
    );
};