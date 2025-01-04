import React from "react";
import * as S from "./style";
import Row from "../../../../styles/Layouts/Row";
import Column from '../../../../styles/Layouts/Column';
import { H2,T6 ,B6,T7} from "../../../../styles/Typography";
import Back from '../../Back.svg'
import { theme } from "../../../../styles/theme"

export const TodayQuiz = () => {
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
        </S.TodayContainer>
       </>
    );
};