import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { T7 } from "../../styles/Typography";
import { theme } from "../../styles/theme";
import { NAVIGATION_MENUS } from "../../component/navigation/constants";
import styled from "styled-components";
import { media } from "../../styles/media";
import useDeviceQueries from "../../hook/useDeviceQueries";

interface NavigationMenuItemProps {
    menu: {
        name: string;
        path: string;
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
    };
    isActive: boolean;
    onClick: () => void;
}

export const NavigationMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <MenuList>
            {NAVIGATION_MENUS.map((menu) => (
                <NavigationMenuItem 
                    key={menu.path}
                    menu={menu}
                    isActive={location.pathname === menu.path}
                    onClick={() => navigate(menu.path)}
                />
            ))}
        </MenuList>
    );
};

const NavigationMenuItem = ({ menu, isActive, onClick }: NavigationMenuItemProps) => {
    const { isTablet } = useDeviceQueries();
    
    return (
        <MenuItem active={isActive} onClick={onClick}>
            <menu.icon
                style={{
                    fill: isActive ? theme.colors.primary : "none",
                    stroke: isActive ? theme.colors.primary : theme.colors.warmGray2,
                    width: "24px",
                    height: "24px",
                }}
            />
            {!isTablet && (
                <T7
                    style={{
                        color: isActive ? theme.colors.primary : theme.colors.warmGray2,
                    }}
                >
                    {menu.name}
                </T7>
            )}
        </MenuItem>
    );
};

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

    ${media.tablet`
    gap: 31px; /* 아이콘 간격 조정 */
  `}
`;

const MenuItem = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    margin-bottom: 16px;
    cursor: pointer;
    color: ${(props) => (props.active ? "#6673FF" : "#333333")};
    background-color: ${(props) => (props.active ? "#F5F5FA" : "transparent")};

    &:hover {
        background-color: #F0F1FF;
    }

    ${media.desktop`
    padding: 10px 16px; /* 패딩 줄이기 */
    gap: 16px; /* 아이콘과 텍스트 간격 줄이기 */
  `}

  ${media.tablet`
    padding: 12px;
    margin-bottom: 31px;
    
    // 태블릿에서는 텍스트 숨기기
    T7 {
        display: none;
    }
    
    // 아이콘만 보이도록 조정
    svg {
        margin: 0;
    }
`}
`;