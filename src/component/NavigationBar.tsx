import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    NavWrapper,
    Logo,
    MenuList,
    MenuItem,
    UserCard,
} from "../styles/layout/NavigationBar.styles";
import { ReactComponent as CalendarIcon } from "../assets/navigation-bar/CalendarIcon.svg";
import { ReactComponent as DashboardIcon } from "../assets/navigation-bar/DashboardIcon.svg";
import { ReactComponent as QuizIcon } from "../assets/navigation-bar/QuizIcon.svg";
import { ReactComponent as QuizListIcon } from "../assets/navigation-bar/QuizListIcon.svg";
import { ReactComponent as ResultsIcon } from "../assets/navigation-bar/ResultsIcon.svg";
import { ReactComponent as LogoIcon } from "../assets/logo/LogoIcon.svg";
import { theme } from "../styles/theme";
import { T7, T6, B6 } from "../styles/Typography";

export const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로를 가져오기 위한 훅

    const menus = [
        { name: "캘린더", path: "/calendar", icon: CalendarIcon },
        { name: "성과 대시보드", path: "/dashboard", icon: DashboardIcon },
        { name: "퀴즈 풀기", path: "/quiz", icon: QuizIcon },
        { name: "퀴즈 모아보기", path: "/quiz-list", icon: QuizListIcon },
        { name: "성과 모아보기", path: "/result", icon: ResultsIcon },
    ];

    return (
        <NavWrapper>
            <Logo>
                <LogoIcon style={{ width: "199px", height: "53px" }} /> {/* 로고 스타일 */}
            </Logo>
            <UserCard>
                <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid white", // 하얀색 테두리
                }}>
                    <img
                        src={require("../apis/kong.jpg")} // 이미지 경로 수정 // 프로필 이미지 잘 들어가나 테스트 입니다 :)
                        alt="User"
                        width="48" /* 프로필 이미지 크기 */
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // 이미지가 원에 맞게 잘리도록 설정
                        }}
                    />
                </div>
                <div className="user-details" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <T6>
                        김가원
                    </T6>
                    <B6 style={{ color: "#F5F5FA" }}>
                        20일 연속 학습 중!
                    </B6>
                </div>
            </UserCard>
            <MenuList>
                {menus.map((menu, idx) => {
                    const isActive = location.pathname === menu.path; // 활성화 상태 확인
                    return (
                        <MenuItem
                            key={idx}
                            active={isActive}
                            onClick={() => navigate(menu.path)}
                        >
                            <menu.icon
                                style={{
                                    fill: isActive ? theme.colors.primary : "none", // 내부 색상
                                    stroke: isActive ? theme.colors.primary : theme.colors.warmGray2, // 외곽선 색상
                                    width: "24px",
                                    height: "24px",
                                }}
                            />
                            <T7
                                style={{
                                    color: isActive ? theme.colors.primary : theme.colors.warmGray2,
                                }}
                            >
                            {menu.name}
                            </T7>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </NavWrapper>
    );
};

