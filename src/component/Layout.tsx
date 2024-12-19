import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Layout = () => {
    return (
        <AppWrapper>
            <NavigationBar />
                <Outlet />
        </AppWrapper>
    );
};

export default Layout;
