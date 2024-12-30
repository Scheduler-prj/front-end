import React, { useState } from "react";
import styled from "styled-components";
import {T7} from '../../../../../styles/Typography'
import Drop from './Drop.svg'

// Styled-components
const CalendarContainer = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  /* background-color: #2a2a2a; */
  background-color:white;
  border: 1px solid #4a90e2;
  padding: 4px 12px 4px 20px;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  /* justify-content: space-between; */
  gap:8px;
  /* color: white; */
  color:#6373FF;
  font-size: 16px;
  /* width: 250px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const Arrow = styled.span`
  /* margin-left: 10px; */
  color: #aaa;
`;

const Calendar = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  /* background-color: #2a2a2a; */
  background-color:white;
  border: 1px solid #4a90e2;
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ArrowBtn = styled.button`
  background: none;
  border: none;
  color: #4a90e2;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: #a4c8f0;
  }
`;

const MonthTitle = styled.div`
  font-size: 16px;
  /* color: #fff; */
  color:black;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const CalendarDay = styled.div`
  text-align: center;
  padding: 10px 0;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  /* color: white; */
  color:black;
  font-size: 14px;

  &:hover {
    background-color: #4a90e2;
    color:white;
  }

  &.selected {
    background-color: #4a90e2;
    color: white;
    font-weight: bold;
  }
`;

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRange, setSelectedRange] = useState<string>("날짜 드롭다운");

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const getDaysInMonth = (year: number, month: number): Date[] => {
    const date = new Date(year, month, 1);
    const days: Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const handlePreviousMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: Date): void => {
    const start = new Date(day);
    const end = new Date(start);
    start.setDate(start.getDate() - 6); // 선택된 날짜에서 6일 전으로 설정

    const formatDate = (date: Date): string =>
      `${date.getMonth() + 1}.${String(date.getDate()).padStart(2, "0")}`;

    setStartDate(formatDate(start));
    setEndDate(formatDate(end));
    setSelectedRange(`${formatDate(start)} ~ ${formatDate(end)}`);
    setIsOpen(false);
  };

  const days: Date[] = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const monthYear: string = `${currentDate.toLocaleString("en-US", {
    month: "long",
  })}, ${currentDate.getFullYear()}`;

  return (
    <CalendarContainer>
      <Dropdown onClick={() => setIsOpen(!isOpen)}>
        <T7>{selectedRange}</T7>
        <img src={Drop} alt="alt" style={{width:'24px'}}></img>
      </Dropdown>

      {isOpen && (
        <Calendar>
          <CalendarHeader>
            <ArrowBtn onClick={handlePreviousMonth}>◀</ArrowBtn>
            <MonthTitle>{monthYear}</MonthTitle>
            <ArrowBtn onClick={handleNextMonth}>▶</ArrowBtn>
          </CalendarHeader>
          <CalendarGrid>
            {days.map((day) => (
              <CalendarDay
                key={day.toISOString()}
                className={`${
                  startDate && new Date(startDate).getTime() === day.getTime()
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day.getDate()}
              </CalendarDay>
            ))}
          </CalendarGrid>
        </Calendar>
      )}
    </CalendarContainer>
  );
};

export default App;
