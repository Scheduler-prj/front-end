// import React from "react";
// import {useNavigate} from "react-router-dom";
// import {NavWrapper, Logo, MenuList, MenuItem, UserCard} from "../styles/layout/NavigationBar.styles";
// import CalendarIcon from "../assets/navigation-bar/CalendarIcon.svg";
// import DashboardIcon from "../assets/navigation-bar/DashboardIcon.svg";
// import QuizIcon from "../assets/navigation-bar/QuizIcon.svg";
// import QuizListIcon from "../assets/navigation-bar/QuizListIcon.svg";
// import ResultsIcon from "../assets/navigation-bar/ResultsIcon.svg";
//
// const menus = [
//     { name: "캘린더", path: "/calendar", icon : CalendarIcon },
//     { name: "성과 대시보드", path: "/dashboard", icon : DashboardIcon },
//     { name: "퀴즈 풀기", path: "/quiz", icon: QuizIcon },
//     { name: "퀴즈 모아보기", path: "/quiz-list", icon : QuizListIcon },
//     { name: "성과 모아보기", path: "/result", icon : ResultsIcon },
// ];
//
// export const NavigationBar = () => {
//     const navigate = useNavigate();
//
//     return (
//         <NavWrapper>
//             <Logo>PlanQ</Logo>
//             <UserCard>
//                 <img
//                     src="/path/to/profile-image.jpg"
//                     alt="User"
//                     width="48" /* 프로필 이미지 크기를 적절하게 변경 */
//                     style={{ borderRadius: "50%" }} /* 둥근 프로필 이미지 */
//                 />
//                 <div className="user-details" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                     <div className="user-name" style={{ fontWeight: "bold", fontSize: "1rem" }}>
//                         사용자 이름
//                     </div>
//                     <div className="streak" style={{ fontSize: "0.875rem", color: "#E4E4E4" }}>
//                         20일 연속 학습 중!
//                     </div>
//                 </div>
//             </UserCard>
//             <MenuList>
//                 {menus.map((menu, idx) => (
//                     <MenuItem key={idx} onClick={() => navigate(menu.path)}>
//                         <span>{menu.name}</span>
//                     </MenuItem>
//                 ))}
//             </MenuList>
//         </NavWrapper>
//     );
// };

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
                <img
                    src="/path/to/profile-image.jpg"
                    alt="User"
                    width="48" /* 프로필 이미지 크기 */
                    style={{ borderRadius: "50%" }} /* 둥근 프로필 이미지 */
                />
                <div className="user-details" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div className="user-name" style={{ fontWeight: "bold", fontSize: "1rem" }}>
                        사용자 이름
                    </div>
                    <div className="streak" style={{ fontSize: "0.875rem", color: "#E4E4E4" }}>
                        20일 연속 학습 중!
                    </div>
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
                                    fill: isActive ? "#6673FF" : "#A0A0A0", // 활성화 상태에 따라 색상 변경
                                    width: "24px",
                                    height: "24px",
                                }}
                            />
                            <span>{menu.name}</span>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </NavWrapper>
    );
};

