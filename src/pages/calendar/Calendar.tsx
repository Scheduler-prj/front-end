import React from "react";
import styled from "styled-components";

interface DayBoxProps {
    isCurrentMonth: boolean;
}

export const Calendar = () => {
    // 날짜 데이터 (예제)
    const days = Array.from({ length: 35 }, (_, i) => ({
        day: i + 1,
        isCurrentMonth: i >= 1 && i <= 31, // 현재 월 표시 여부
        tasks: i === 1 ? ["교양 과제1", "수학 문제 2개 풀기"] : [], // 해당 날짜에 표시할 작업
    }));

    return (
        <CalendarGrid>
            {days.map((day, index) => (
                <DayBox key={index} isCurrentMonth={day.isCurrentMonth}>
                    <DayNumber>{day.day}</DayNumber>
                    <Tasks>
                        {day.tasks.map((task, idx) => (
                            <Task key={idx}>{task}</Task>
                        ))}
                    </Tasks>
                </DayBox>
            ))}
        </CalendarGrid>
    );
};

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7열로 배치 */
  gap: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05); /* 선택적 그림자 */
`;

const DayBox = styled.div<DayBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px;
  height: 140px;
  min-width: 70px;
  max-width: 140px;
  gap: 12px;
  border-radius: 12px;
  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.4)};
  background-color: ${({ theme }) => theme.colors.coolGray11};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  }
`;

const DayNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
`;

const Task = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.coolGray10};
  padding: 4px 8px;
  border-radius: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
