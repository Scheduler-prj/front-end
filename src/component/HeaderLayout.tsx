import React, {useState, useEffect} from "react";
import styled, { DefaultTheme }  from "styled-components";
import {ReactComponent as NotificationIcon} from "../assets/icons/header/NotificationIcon.svg";
import {ReactComponent as NavMenuIcon} from "../assets/icons/navigation-bar/NavMenuIcon.svg";
import {ReactComponent as MobileLogoIcon} from "../assets/logo/MobileLogoIcon.svg";
import ProfileImage from "../apis/kong.jpg";
import { LoginModal } from "./login/LoginModal";
import {useAuthStore} from "../store/feature/authStore";
import useDeviceQueries from "../hook/useDeviceQueries";
import {media} from "../styles/media";

type HeaderLayoutProps = {
    currentPage : string;  // currentPage 는 문자열 타입
    isLoggedIn : boolean;
    onLogin : (token: string) => void; // (토큰을 받을 수 있도록)
    onMenuClick : () => void;
};

export const HeaderLayout = ({ onMenuClick, currentPage, onLogin }: HeaderLayoutProps) => {
    /**
     * renderHeaderContent
     * - 현재 페이지(`currentPage`) 값에 따라 헤더 좌측 영역에 렌더링할 콘텐츠를 결정합니다.
     * - 특정 페이지에서 추가적인 콘텐츠가 필요 없을 경우 `null`을 반환하여 렌더링하지 않습니다.
     */
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    // Zustand 에서 로그인 상태 가져오기
    const { accessToken, userInfo, setAccessToken, fetchUserInfo } = useAuthStore();

    // accessToken 이 존재하면 로그인 상태로 설정
    const isLoggedIn = !!accessToken;

    const {isMobile} = useDeviceQueries();

    // 로그인 후 사용자 정보 가져오기 (컴포넌트 마운트 시 실행)
    useEffect(() => {
        if (isLoggedIn && !userInfo) {
            fetchUserInfo();
        }
    }, [isLoggedIn, userInfo, fetchUserInfo]);


    const handleLoginButtonClick = () => {
        setLoginModalOpen(true);
    };

    const handleModalClose = () => {
        setLoginModalOpen(false);
    };

    const handleLoginSuccess = (token:string) => {
        setAccessToken(token); // 로그인 성공 시 Zustand에 저장
        onLogin(token); // 부모 컴포넌트(Layout) 상태 업데이트
        setLoginModalOpen(false);
    };

    const renderHeaderContent = () => {
        switch (currentPage) {
            case "calendar":
                return null;  // 특정 페이지에서는 추가 조건 없이 null 반환 (ex. 캘린더 페이지, 대시보드 페이지)
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
            {/* 모바일(767px 이하)에서는 햄버거 버튼 추가 */}
            <LeftSection>
            {isMobile && (
                <MenuButton onClick={onMenuClick}>
                    <NavMenuIcon />
                </MenuButton>
            )}
            {isMobile && (
                <LogoContainer>
                    <MobileLogoIcon />
                </LogoContainer>
            )}
            </LeftSection>

            <LeftSection>{renderHeaderContent()}</LeftSection>
            <RightSection>
                <Icon>
                    <NotificationIcon />
                </Icon>
                {!isMobile && isLoggedIn && userInfo ? (
                    <Profile>
                        <img
                            src={userInfo.profile}
                            alt="Profile"
                            referrerPolicy="no-referrer"
                        />
                    </Profile>
                ) : !isMobile && (
                    <LoginButton onClick={handleLoginButtonClick}>Log in</LoginButton>
                )}
            </RightSection>

            {isLoginModalOpen && (
                <LoginModal onClose={handleModalClose} onLogin={handleLoginSuccess} />
            )}
        </HeaderContainer>
    );
};

// return (
//     <HeaderContainer>
//         <LeftSection>{renderHeaderContent()}</LeftSection>
//         <RightSection>
//             <Icon>
//                 <NotificationIcon />
//             </Icon>
//             {isLoggedIn && userInfo ? (
//                 <Profile>
//                     <img
//                         src={userInfo.profile}
//                         alt="Profile"
//                         referrerPolicy="no-referrer"
//                     />
//                 </Profile>
//             ) : (
//                 <LoginButton onClick={handleLoginButtonClick}>Log in</LoginButton>
//             )}
//             {isLoginModalOpen && (
//                 <LoginModal onClose={handleModalClose} onLogin={handleLoginSuccess} />
//             )}
//         </RightSection>
//     </HeaderContainer>
// );

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    width: 99%; /* 화면 전체 너비 */
    //max-width: 1560px;
    //min-height: 60px; /* 최소 높이 */
  align-self: stretch;
  padding: 16px 24px; /* 필요에 따라 패딩 조정 */
  background-color: ${({ theme }) => theme.colors.coolGray10};
    
    ${media.tablet`
        height: 72px;
        padding: 16px 20px;
    `}

    ${media.phone`
        height: 64px;
        padding: 16px 16px;
        background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.white};
  `}
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

const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    ${media.phone`
    justify-content: flex-start; /* 모바일에서는 왼쪽 정렬 */
  `}

    img {
        width: 100%;
        max-width: 117px;

        ${media.phone`
        max-width: 100px; /* 모바일에서는 크기 줄이기 */
    `}
    }
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

