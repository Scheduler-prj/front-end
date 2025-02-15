import React from "react";
import * as S from "./style";
import Row from "../../styles/Layouts/Row";
import Column from "../../styles/Layouts/Column";
import Profile from './_profile.svg';
import { T2,B3,B5,B1,T7,B4 } from "../../styles/Typography";
import LogOut from './logout.svg'
// import useDeviceQueries from "../../hook/useDeviceQueries";

const userInfo={
  name:'사용자 이름',
  email:'Lorem ipsum@gmail.com',
  price:'없음'
}



export const MyPage = () => {

    return (
        <>
          <S.MyPageWrapper>
            <S.MyPageContainer>
              <S.TopContainer>
                <S.TopLeftWrapper>
                  <S.TopLeftContainer>
                    <S.ImageWRapper>
                      <img src={Profile} alt="alt" ></img>
                    </S.ImageWRapper>
                    <Column verticalAlign="center" gap={12}>
                      <T2>{userInfo.name}</T2>
                      <B3 style={{color:'#828282'}}>{userInfo.email}</B3>
                    </Column>
                  </S.TopLeftContainer>
                </S.TopLeftWrapper>
                <S.TopRightWrapper>
                  <Column>
                    <B5 style={{color:'#828282'}}>이름</B5>
                    <Row verticalAlign="bottom" horizonAlign="distribute" style={{alignSelf:'stretch'}}>
                      <B1 style={{color:'#68687E'}}>{userInfo.name}</B1>
                      <S.ModifyButton>
                        <T7 style={{color:'#6373FF'}}>수정</T7>
                      </S.ModifyButton>
                    </Row>
                  </Column>
                  <Column>
                    <B5 style={{color:'#828282'}}>이메일</B5>
                    <Row verticalAlign="bottom" horizonAlign="distribute" style={{alignSelf:'stretch'}}>
                      <B1 style={{color:'#68687E'}}>{userInfo.email}</B1>
                      <S.ModifyButton>
                        <T7 style={{color:'#6373FF'}}>수정</T7>
                      </S.ModifyButton>
                    </Row>
                  </Column>
                  <Column>
                    <B5 style={{color:'#828282'}}>현재 이용중인 요금제</B5>
                    <Row verticalAlign="bottom" horizonAlign="distribute" style={{alignSelf:'stretch'}}>
                      <B1 style={{color:'#68687E'}}>{userInfo.price}</B1>
                      <S.PriceButton>
                        <T7 style={{color:'white'}}>수정</T7>
                      </S.PriceButton>
                    </Row>
                  </Column>
                </S.TopRightWrapper>
              </S.TopContainer>
              <S.BottomContainer>
                <B5 style={{color:'#68687E'}}>사용자 설정</B5>
                <S.BottomMain>
                  <B4 style={{color:'#68687E'}}>알림 설정</B4>
                  <S.BottomMiddleLine></S.BottomMiddleLine>
                  <B4 style={{color:'#68687E'}}>요금제 결제</B4>
                </S.BottomMain>
                <S.LogOutWrapper>
                  <S.LogOutContainer>
                    <img alt="alt" src={LogOut} style={{width:'24px',height:'24px'}}></img>
                    <B4 style={{color:'#FF777C'}}>로그아웃</B4>
                  </S.LogOutContainer>
                </S.LogOutWrapper>
              </S.BottomContainer>
            </S.MyPageContainer>
          </S.MyPageWrapper>
        </>        
    );
};
