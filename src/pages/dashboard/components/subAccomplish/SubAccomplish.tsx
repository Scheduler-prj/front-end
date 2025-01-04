import React from "react";
import * as S from "./style";
import Row from "../../../../styles/Layouts/Row";
import Column from '../../../../styles/Layouts/Column';
import { H2,T6 ,B6,T7,Cap1} from "../../../../styles/Typography";
import Go from './Go.svg'
import Next from './Next.svg'
import DatePicker from '../quizAnalysis/components/DatePicker'

const data=[
  {
    title:'수학문제풀기',
    date:'11.3(일)',
    content:'코멘트 내용',
  }
]

export const SubAccomplish = () => {
    return (
       <>
        <S.SubWrapper>
          <S.SubHeaderWrapper>
            <S.SubHeaderContainer>
              <S.SubHedaerText>
                <H2>제출된 성과</H2>
                <DatePicker></DatePicker>
              </S.SubHedaerText>
              <img src={Go} alt="alt" style={{width:'40px'}}></img>
            </S.SubHeaderContainer>
          </S.SubHeaderWrapper>
          <S.SubMain>
            <S.SubCardWrapper>
              <div style={{ backgroundColor: '#FFE7C5', height: '16px', borderRadius: '12px 12px 0 0' }}></div>
              <S.CardMain>
                <T7 style={{marginBottom:'2px'}}>{data[0].title}</T7>
                <B6 style={{marginBottom:'16px',color:'#9CA0C3'}}>{data[0].date}</B6>
                <Cap1 style={{marginBottom:'20px'}}>{data[0].content}</Cap1>
                <S.Button>
                  <T7 style={{color:'#6373FF'}}>성과 제출</T7>
                  <img src={Next} alt="alt" style={{width:'24px'}}></img>
                </S.Button>
              </S.CardMain>
            </S.SubCardWrapper>
            <S.SubCardWrapper>
              <div style={{ backgroundColor: '#FFE7C5', height: '16px', borderRadius: '12px 12px 0 0' }}></div>
              <S.CardMain>
                <T7 style={{marginBottom:'2px'}}>{data[0].title}</T7>
                <B6 style={{marginBottom:'16px',color:'#9CA0C3'}}>{data[0].date}</B6>
                <Cap1 style={{marginBottom:'20px'}}>{data[0].content}</Cap1>
                <S.Button>
                  <T7 style={{color:'#6373FF'}}>성과 제출</T7>
                  <img src={Next} alt="alt" style={{width:'24px'}}></img>
                </S.Button>
              </S.CardMain>
            </S.SubCardWrapper>
            <S.SubCardWrapper>
              <div style={{ backgroundColor: '#FFE7C5', height: '16px', borderRadius: '12px 12px 0 0' }}></div>
              <S.CardMain>
                <T7 style={{marginBottom:'2px'}}>{data[0].title}</T7>
                <B6 style={{marginBottom:'16px',color:'#9CA0C3'}}>{data[0].date}</B6>
                <Cap1 style={{marginBottom:'20px'}}>{data[0].content}</Cap1>
                <S.Button>
                  <T7 style={{color:'#6373FF'}}>성과 제출</T7>
                  <img src={Next} alt="alt" style={{width:'24px'}}></img>
                </S.Button>
              </S.CardMain>
            </S.SubCardWrapper>
          </S.SubMain>
        </S.SubWrapper>
       </>
    );
};