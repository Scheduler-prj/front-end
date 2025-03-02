import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/logo/LogoIcon.svg";
import { UserProfile } from "../../component/navigation/UserProfile";
import { NavigationMenu } from "../../component/navigation/NavigationMenu";
import { media } from "../../styles/media";

export const DesktopNavigation = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return (
        <NavWrapper isMobile={false} isNavOpen={true}>
            <Logo>
                <LogoIcon />
            </Logo>
            <UserProfile isLoggedIn={isLoggedIn} />
            <NavigationMenu />
        </NavWrapper>
    );
};

const NavWrapper = styled.div<{ isMobile: boolean; isNavOpen: boolean }>`
  height: 100%;
  // min-width: 240px; /* 최소 너비 */
  // max-width: 280px; /* 최대 너비 */
  background-color: #FFFFFF; /* 배경색 */
  border: 1px solid #CACCD7; /* 테두리 색상 */
  border-radius: 0px 0px 40px 0px; /* 둥근 모서리 */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04); /* 그림자 */
  display: flex;
  flex-direction: column;
  padding: 24px; /* 전체 여백 */
  box-sizing: border-box;

    ${media.desktop`
    width: 240px; /* 1920~1280px 해상도에서 너비 줄이기 */
    max-width: 260px;
    padding: 20px;
  `}

    ${media.tablet`
    width: 80px; /* 279~768px에서는 너비를 80px로 조정 */
    height: 100vh;
    padding: 36px 14px 629px 13px;
    align-items: center;
    gap: 31px;
  `} 
        // 767px 이하에서는 기본적으로 숨김
    ${({ isMobile, isNavOpen }) => isMobile && !isNavOpen && `
        display: none;
    `}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6673FF; /* Primary 색상 */

    ${media.desktop`
    margin-bottom: 28px;
  `}

    ${media.tablet`
    margin-bottom: 0; /* 1279~768px 에서는 여백 제거 */
  `}
`;