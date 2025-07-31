import React from "react";
import DatePicker from './components/DatePicker'
import Row from "../../../../styles/Layouts/Row";
import Column from '../../../../styles/Layouts/Column';
import { H2,T6 ,B6,T7,B5} from "../../../../styles/Typography";
import Back from '../../Back.svg'
import { theme } from "../../../../styles/theme"
import * as S from "./style";
import Under from './Under.svg';
import Rectangle from './Rectangle.svg'
import QuizChart from "./components/QuizChart";

export const QuizAnalysis = () => {
    return (
       <>
        <S.AnalysisContainer>
          <Row horizonAlign="distribute" verticalAlign="center" style={{alignSelf:'stretch'}}>
            <Row verticalAlign="center" gap={20}>
              <H2>퀴즈분석</H2>
              <DatePicker></DatePicker>
            </Row>
            <img src={Back} alt="alt"></img>
          </Row>


          <S.AnalysisMain >
            <S.InfoWrapper>
              <S.InfoContainer >
                <Row horizonAlign="distribute" verticalAlign="center" style={{alignSelf:'stretch'}}>
                  <B5>7일간 풀어본 퀴즈</B5>
                  <Row verticalAlign="center" gap={8}>
                    <T6 style={{fontWeight:'700',color:'#6373FF'}}>20</T6>
                    <B5>개</B5>
                  </Row>
                </Row>
                <S.Line></S.Line>
                <Row horizonAlign="distribute" verticalAlign="center" style={{alignSelf:'stretch'}}>
                  <B5>맞춘 퀴즈</B5>
                  <Row verticalAlign="center" gap={8}>
                    <T6 style={{fontWeight:'700',color:'#6373FF'}}>15</T6>
                    <B5>개</B5>
                  </Row>
                </Row>
                <S.Line></S.Line>
                <Row horizonAlign="distribute" verticalAlign="center" style={{alignSelf:'stretch'}}>
                  <B5>틀린 퀴즈</B5>
                  <Row verticalAlign="center" gap={8}>
                    <T6 style={{fontWeight:'700',color:'#6373FF'}}>5</T6>
                    <B5>개</B5>
                  </Row>
                </Row>
              </S.InfoContainer>
            </S.InfoWrapper>

            <S.ChartWrapper>
              <QuizChart/>
            </S.ChartWrapper>

            <S.WrongWrapper>
              <B6 style={{marginBottom:"27px"}}>틀린 문항</B6>
              <Column verticalAlign="center" gap={8}>
                <S.WrongCard>
                  <Row verticalAlign="center">
                    <Row verticalAlign="center" gap={16}>
                      <img src={Rectangle} alt="alt"></img>
                      <B5>퀴즈 제목</B5>
                      <B5 style={{color:'#9CA0C3'}}>n번 문항/퀴즈 문항 제목</B5>
                    </Row>
                  </Row>
                  <B5 style={{color:'#9CA0C3'}}>11.3(일)</B5>
                </S.WrongCard>
              </Column>
              <img src={Under} alt="alt" style={{width:'40px',alignSelf:'center'}}></img>
            </S.WrongWrapper>

          </S.AnalysisMain>
        </S.AnalysisContainer>
       </>
    );
};