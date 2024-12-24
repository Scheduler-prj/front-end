import React from "react";
import styled from "styled-components";
import { CalendarHeader } from "./CalendarHeader";
import { WeekDays } from "./WeekDays";
import { Calendar } from "./Calendar";

export const CalendarPage = () => {
    return (
        <CalendarWrapper>
            <CalendarHeader />
            <WeekDays/>
            <CalendarBody>
                <Calendar/>
            </CalendarBody>
        </CalendarWrapper>
    );
};

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 570px;
  max-width: 1060px;
  padding: 24px 40px;
  gap: 40px;
  flex: 1 0 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
`;

const CalendarBody = styled.div`
  /* 캘린더 본체 스타일 */
  width: 100%;
  background: ${({ theme }) => theme.colors.coolGray10};
  border-radius: 16px;
  // padding: 20px;
`;