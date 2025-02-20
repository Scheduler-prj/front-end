import React from "react";
import styled from "styled-components";
import { H2 } from "../../styles/Typography";
import { ReactComponent as MonthLeftButton } from "../../assets/icons/calendar/MonthLeftButton.svg";
import { ReactComponent as MonthRightButton } from "../../assets/icons/calendar/MonthRightButton.svg"

interface CalendarHeaderProps {
    year: number;
    month: number; // 0: 1월, 11: 12월
    changeMonth: (offset: number) => void;
    setSelectedTab: (tab: "all" | "plans" | "tasks") => void;  // 필터링 역할
    selectedTab: "all" | "plans" | "tasks";  // 버튼이 선택됬냐 아니냐에 따라 색상 변경 역할
}

export const CalendarHeader = ({year, month, changeMonth, setSelectedTab, selectedTab }:CalendarHeaderProps) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <HeaderContainer>
            <MonthNavigation>
                <H2 style={{ color: "#6673FF" }}>{`${monthNames[month]}, ${year}`}</H2>
                <button onClick={()=>changeMonth(-1)}>
                    <MonthLeftButton width={32} height={32} />
                </button>
                <button onClick={() =>changeMonth(1)}>
                    <MonthRightButton width={32} height={32} />
                </button>
            </MonthNavigation>
            <TabMenu>
                <TabButton
                    onClick={() => setSelectedTab("all")}
                    $isActive={selectedTab === "all"}
                >
                    전체
                </TabButton>
                <TabButton
                    onClick={() => setSelectedTab("plans")}
                    $isActive={selectedTab === "plans"}
                >
                    일정
                </TabButton>
                <TabButton
                    onClick={() => setSelectedTab("tasks")}
                    $isActive={selectedTab === "tasks"}
                >
                    할일
                </TabButton>
            </TabMenu>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const TabButton = styled.button<{$isActive : boolean}>`
    padding: 8px 16px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    
    // 선택된 탭 스타일
    background: ${({ $isActive, theme }) =>
            $isActive ? "rgba(99, 116, 255, 0.10)" : theme.colors.white};
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $isActive }) =>
            $isActive ? theme.colors.primary : theme.colors.primary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.coolGray8};
    }
`;

const TabMenu = styled.div`
  display: flex;
  gap: 8px;
`;
