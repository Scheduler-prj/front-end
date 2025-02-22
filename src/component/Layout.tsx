import {useState, useEffect} from 'react';

import {Outlet, useLocation, useNavigate} from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";
import {HeaderLayout} from "./HeaderLayout";
import {useAuthStore} from "../store/feature/authStore";
import useDeviceQueries from "../hook/useDeviceQueries";

export const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuthStore(); // Zustand 활용
    const [loginState, setLoginState] = useState(isLoggedIn); // 로그인 상태 관리
    const handleLogin = () => setLoginState(true); // 로그인 처리 함수

    // 모바일 네비게이션 바 상태 관리 (햄버거 버튼 클릭시 토글)
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    // "/" 경로로 접근하면 "/calendar"로 리다이렉트
    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/calendar", { replace: true });
        }
    }, [location.pathname, navigate]);

    // 객체 기반 페이지 매핑
    const pageMapping : {[key: string]: string} = {
        "/": "calendar", // 루트 경로는 캘린더로 매핑
        "/calendar": "calendar",
        "/quiz-list": "quiz-list",
        "/dashboard": "dashboard",
        "/result": "result",
        "/quiz": "quiz",
    }
    // 현재 경로에 따라 currentPage 결정
    const currentPage = pageMapping[location.pathname] || "default";

    return (
        <AppWrapper>
            {/* 네비게이션 바와 콘텐츠 영역 */}
            <MainWrapper>
                <NavigationBar
                    isLoggedIn={isLoggedIn}
                    isNavOpen={isNavOpen}
                />
                <ContentWrapper>
                    <HeaderLayout
                        currentPage={currentPage}
                        isLoggedIn={loginState} // 추가
                        onLogin={handleLogin}   // 추가
                        onMenuClick={toggleNav}
                    />
                    <Outlet />
                </ContentWrapper>
            </MainWrapper>
        </AppWrapper>
    );
};

// <HeaderLayout
//     currentPage={currentPage}
//     isLoggedIn={loginState} // 추가
//     onLogin={handleLogin}   // 추가
// />

const AppWrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1; /* 나머지 공간을 채움 */
`;

const ContentWrapper = styled.div`
  flex: 1; /* NavigationBar 를 제외한 나머지 공간 채움 */
  overflow: auto; /* 스크롤 가능하도록 설정 */
  background-color:  ${({ theme }) => theme.colors.coolGray10};
`;