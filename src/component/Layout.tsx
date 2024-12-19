import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Layout = () => {
    return (
        <AppWrapper>
            <NavigationBar />
            <MainContent>
                <Outlet />
            </MainContent>
        </AppWrapper>
    );
};

export default Layout;
