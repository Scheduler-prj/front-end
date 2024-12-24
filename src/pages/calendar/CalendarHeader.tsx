import React from "react";
import styled from "styled-components";
import { H2 } from "../../styles/Typography";
import { ReactComponent as MonthLeftButton } from "../../assets/calendar/MonthLeftButton.svg";
import { ReactComponent as MonthRightButton } from "../../assets/calendar/MonthRightButton.svg"

interface CalendarHeaderProps {
    year: number;
    month: number; // 0: 1월, 11: 12월
    changeMonth: (offset: number) => void;
}

export const CalendarHeader = ({year, month, changeMonth }:CalendarHeaderProps) => {
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
                <TabButton>전체</TabButton>
                <TabButton>일정</TabButton>
                <TabButton>할일</TabButton>
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

const TabMenu = styled.div`
  display: flex;
  gap: 8px;
`;

const TabButton = styled.button`
  padding: 8px 16px;
    border: 1.5px solid ${({ theme }) => theme.colors.primary}; /* theme 에서 primary 가져오기 */
    border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.coolGray10};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.coolGray8};
  }

  &:active {
    transform: scale(0.95);
  }
`;
