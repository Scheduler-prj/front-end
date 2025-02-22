import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    NavWrapper,
    Logo,
    MenuList,
    MenuItem,
    UserCard,
} from "../styles/layout/NavigationBar.styles";
import { ReactComponent as CalendarIcon } from "../assets/icons/navigation-bar/CalendarIcon.svg";
import { ReactComponent as DashboardIcon } from "../assets/icons/navigation-bar/DashboardIcon.svg";
import { ReactComponent as QuizIcon } from "../assets/icons/navigation-bar/QuizIcon.svg";
import { ReactComponent as QuizListIcon } from "../assets/icons/navigation-bar/QuizListIcon.svg";
import { ReactComponent as ResultsIcon } from "../assets/icons/navigation-bar/ResultsIcon.svg";
import { ReactComponent as LogoIcon } from "../assets/logo/LogoIcon.svg";
import { ReactComponent as TabletLogoIcon } from "../assets/logo/TabletLogoIcon.svg";
import { theme } from "../styles/theme";
import { T7, T6, B6 } from "../styles/Typography";
import {useAuthStore} from "../store/feature/authStore";
import useDeviceQueries from "../hook/useDeviceQueries";

export const NavigationBar = ({isLoggedIn} : {isLoggedIn:boolean}) => {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로를 가져오기 위한 훅

    const { userInfo } = useAuthStore(); // Zustand에서 로그인 상태와 사용자 정보 가져오기
    const { isTablet } = useDeviceQueries();  // 1279px 이하 감지

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
                {isTablet ? (
                    <TabletLogoIcon width="53px" height="53px" /> // 1279~768px 로고
                ) : (
                    <LogoIcon width="199px" height="53px" /> // 1920~1280px 로고
                )}
            </Logo>
            {/* 1279~768 px 에서는 UserCard 숨김 */}
            {/* 1279~768px 에서는 UserCard를 렌더링하지 않음 */}
            {!isTablet && (
                <UserCard>
                    {isLoggedIn && userInfo ? (
                        <>
                            {/* 로그인 상태 */}
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    border: "2px solid white",
                                }}
                            >
                                <img
                                    src={userInfo.profile}
                                    alt="User"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div
                                className="user-details"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                }}
                            >
                                <T6>{userInfo.nickname}</T6>
                                <B6 style={{ color: "#F5F5FA" }}>20일 연속 학습 중!</B6>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* 비로그인 상태 */}
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    backgroundColor: "#E0E0E0",
                                    border: "2px solid white",
                                }}
                            />
                            <div
                                className="user-details"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                }}
                            >
                                <T6>Guest</T6>
                                <B6 style={{ color: "#F5F5FA" }}>로그인을 해주세요</B6>
                            </div>
                        </>
                    )}
                </UserCard>
            )}

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
                            {!isTablet && ( // 1279~768px에서는 텍스트 숨김
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
                })}
            </MenuList>
        </NavWrapper>
    );
};

