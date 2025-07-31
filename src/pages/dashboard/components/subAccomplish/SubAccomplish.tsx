import React from "react";
import * as S from "./style";
import Row from "../../../../styles/Layouts/Row";
import Column from '../../../../styles/Layouts/Column';
import { H2,T6 ,B6,T7,Cap1} from "../../../../styles/Typography";
import Go from './Go.svg'
import Next from './Next.svg'
import DatePicker from '../quizAnalysis/components/DatePicker'
import { useMediaQuery } from "react-responsive";

const data=[
  {
    title:'수학문제풀기',
    date:'11.3(일)',
    content:'코멘트 내용',
  }
]

export const SubAccomplish = () => {
    const isMobile = useMediaQuery({ maxWidth: 767, minWidth: 360 });

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
          {!isMobile ?
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
            
            :
            <S.SubMainM>
              <S.CardContainerM>
                <S.CardColor/>
                <S.CardMainM>
                  <S.CardTop>
                    <S.CardTopText>
                      <T7 style={{color:'#2D2D2D'}}>수학 문제 풀기</T7>
                      <B6 style={{color:'#9CA0C3'}}>날짜 (요일)</B6>
                    </S.CardTopText>
                    <div>1</div>
                  </S.CardTop>
                  <S.CardBottom>
                    22222222222222222222222222222222222222222222222222222

                  </S.CardBottom>
                </S.CardMainM>
              </S.CardContainerM>
            </S.SubMainM>
            
            }
        </S.SubWrapper>
       </>
    );
};