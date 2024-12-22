import {useState} from 'react';

import {Outlet, useLocation} from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";
import {HeaderLayout} from "./HeaderLayout";

export const Layout = () => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                <NavigationBar />
                <ContentWrapper>
                    <HeaderLayout currentPage={currentPage} isLoggedIn={isLoggedIn}/>
                    <Outlet />
                </ContentWrapper>
            </MainWrapper>
        </AppWrapper>
    );
};

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