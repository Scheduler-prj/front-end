import React from "react";
import styled from "styled-components";
import {ReactComponent as NotificationIcon} from "../assets/header/NotificationIcon.svg";
import ProfileImage from "../apis/kong.jpg";

type HeaderLayoutProps = {
    currentPage : string;  // currentPage 는 문자열 타입
    isLoggedIn : boolean;
};

export const HeaderLayout = ({ currentPage, isLoggedIn }: HeaderLayoutProps) => {
    /**
     * renderHeaderContent
     * - 현재 페이지(`currentPage`) 값에 따라 헤더 좌측 영역에 렌더링할 콘텐츠를 결정합니다.
     * - 특정 페이지에서 추가적인 콘텐츠가 필요 없을 경우 `null`을 반환하여 렌더링하지 않습니다.
     */
    const renderHeaderContent = () => {
        switch (currentPage) {
            case "calendar":
                return null;
            case "quiz-list":
                return null;
            case "dashboard":
                return null;
            case "result":
                return null;
            case "quiz":
                return null;
        }
    };

    return (
        <HeaderContainer>
            <LeftSection>{renderHeaderContent()}</LeftSection>
            <RightSection>
                <Icon>
                    <NotificationIcon />
                </Icon>
                {isLoggedIn ? (
                    // 로그인 상태: 프로필 이미지 표시
                    <Profile>
                        <img src={ProfileImage} alt="Profile" />
                    </Profile>
                ) : (
                    // 비로그인 상태: 로그인 버튼 표시
                    <LoginButton>Log in</LoginButton>
                )}
            </RightSection>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    width: 100%; /* 화면 전체 너비 */
    min-height: 60px; /* 최소 높이 */
  align-self: stretch;
  padding: 16px 24px; /* 필요에 따라 패딩 조정 */
  background-color: ${({ theme }) => theme.colors.coolGray10};
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

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 28px; /* 아이콘 간 간격 */
`;

const LoginButton = styled.button`
    display: flex;
    padding: 10px 20px; /* 내부 여백 */
    justify-content: center;
    align-items: center;

    border-radius: 8px; /* 모서리 둥글기 */
    background: linear-gradient(
        113deg,
        #bcb8ff -15.75%,
        #6373ff 106.09%
    ); /* 그라데이션 배경 */
    color: #ffffff; /* 텍스트 색상 */
    font-size: 16px; /* 글씨 크기 */
    font-weight: bold;
    border: none;
    cursor: pointer; /* 마우스를 올렸을 때 포인터 표시 */

    &:hover {
        opacity: 0.9; /* 호버 시 약간의 불투명 효과 */
    }

    &:active {
        transform: scale(0.98); /* 클릭 시 살짝 눌리는 효과 */
    }
`;
