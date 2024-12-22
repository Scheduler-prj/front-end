import React from "react";
import styled from "styled-components";
import {ReactComponent as NotificationIcon} from "../assets/header/NotificationIcon.svg";
import ProfileImage from "../apis/kong.jpg";

const HeaderLayout = () => {
    return (
        <HeaderContainer>
            {/* 알림 아이콘 */}
            <Icon>
                <NotificationIcon/>
            </Icon>
            {/* 사용자 프로필 */}
            <Profile>
                <img src={ProfileImage} alt="Profile"/>
            </Profile>
        </HeaderContainer>
    );
};

export default HeaderLayout;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
    width: 100%; /* 화면 전체 너비 */
    min-height: 60px; /* 최소 높이 */
  gap: 28px;
  align-self: stretch;
  padding: 16px 24px; /* 필요에 따라 패딩 조정 */
  background-color: #fff;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
