import React from "react";
import styled from "styled-components";

export const WeekDays = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <WeekDaysWrapper>
            {days.map((day) => (
                <Day key={day}>{day}</Day>
            ))}
        </WeekDaysWrapper>
    );
};

const WeekDaysWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 요일 간격 균등 배분 */
  padding: 16px 0;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.coolGray11 || "#F6F7FF"}; /* 테마 색상 사용 */
`;

const Day = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary || "#6673FF"};
  text-align: center;
  flex: 1; /* 균등한 간격 */
`;
