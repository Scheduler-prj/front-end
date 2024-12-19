import React from "react";
import {useNavigate} from "react-router-dom";
import {NavWrapper, Logo, MenuList, MenuItem, UserCard} from "../styles/layout/NavigationBar.styles";

const menus = [
    { name: "캘린더", path: "/calendar" },
    { name: "성과 대시보드", path: "/dashboard" },
    { name: "퀴즈 풀기", path: "/quiz" },
    { name: "퀴즈 모아보기", path: "/quiz-list" },
    { name: "성과 모아보기", path: "/result" },
];

export const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <NavWrapper>
            <Logo>PlanQ</Logo>
            <UserCard>
                <img
                    src="/path/to/profile-image.jpg"
                    alt="User"
                    width="60"
                    style={{ borderRadius: "50%" }}
                />
                <div className="user-name">사용자 이름</div>
                <div className="streak">20일 연속 학습 중! 🔥</div>
            </UserCard>
            <MenuList>
                {menus.map((menu, idx) => (
                    <MenuItem key={idx} onClick={() => navigate(menu.path)}>
                        <span>{menu.name}</span>
                    </MenuItem>
                ))}
            </MenuList>
        </NavWrapper>
    );
};