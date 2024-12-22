import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";
import HeaderLayout from "./HeaderLayout";

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
  background-color: #f9f9f9;
`;

const Layout = () => {
    return (
        <AppWrapper>
            {/* 네비게이션 바와 콘텐츠 영역 */}
            <MainWrapper>
                <NavigationBar />
                <ContentWrapper>
                    <HeaderLayout />
                    <Outlet />
                </ContentWrapper>
            </MainWrapper>
        </AppWrapper>
    );
};

export default Layout;

