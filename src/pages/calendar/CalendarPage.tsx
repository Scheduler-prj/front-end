import React from "react";
import styled from "styled-components";
import { CalendarHeader } from "./CalendarHeader";

export const CalendarPage = () => {
    return (
        <CalendarWrapper>
            <CalendarHeader />
            <CalendarBody>
                {/* 캘린더 본체 - 여기에 캘린더 UI 추가 */}
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
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04);
`;

const CalendarBody = styled.div`
  /* 캘린더 본체 스타일 */
  width: 100%;
  background: ${({ theme }) => theme.colors.coolGray10};
  border-radius: 12px;
  padding: 20px;
`;