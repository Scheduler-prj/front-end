import React, {useState} from "react";
import styled from "styled-components";
import {CalendarHeader} from "./CalendarHeader";
import {WeekDays} from "./WeekDays";
import {Calendar} from "./Calendar";

export const CalendarPage = () => {
    // 현재 날짜를 기반으로 초기 상태 설정
    const today = new Date();
    const [dateState, setDateState] = useState({ year: today.getFullYear(), month: today.getMonth() });

    // 월 변경 함수 (const 사용)
    const changeMonth = (offset: number) => {
        setDateState((prevState) => {
            const newMonth = (prevState.month + offset + 12) % 12; // 음수 보정
            const yearOffset = Math.floor((prevState.month + offset) / 12);
            const newYear = prevState.year + yearOffset;
            return { year: newYear, month: newMonth };
        });
    };

    // 상태 사용
    const { year, month } = dateState;

    return (
        <CalendarWrapper>
            <CalendarHeader
                year={year}
                month={month}
                changeMonth={changeMonth}
            />
            <WeekDays/>
            <CalendarBody>
                <Calendar
                    year={year}
                    month={month}
                />
            </CalendarBody>
        </CalendarWrapper>
    );
};

const CalendarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 570px;
    max-width: calc(100% - 400px); /* 오른쪽 540px 거리 확보 */
    width : 100%;
    justify-content: space-between; /* 위-아래 간격 조절 */
    padding: 24px 40px;
    margin: auto 41px 40px; /* 위, 아래, 왼쪽 간격 */
    gap: 40px;
    flex: 1 0 0;
    border-radius: 16px;
    background: ${({theme}) => theme.colors.white};
    box-sizing: border-box; /* padding 포함 크기 계산 */

    @media (max-width: 1024px) {
        max-width: calc(100% - 20%); /* 오른쪽 20% 거리 유지 */
        margin: 60px auto 20px 20px; /* 상, 좌 간격 축소 */
    }

    @media (max-width: 768px) {
        max-width: calc(100% - 10%); /* 더 작은 화면에서는 10% 거리 유지 */
        margin: 40px auto 20px 10px; /* 상단 간격 축소 */
    }
`;

const CalendarBody = styled.div`
    /* 캘린더 본체 스타일 */
    width: 100%;
    background: ${({theme}) => theme.colors.coolGray10};
    border-radius: 16px;
    // padding: 20px;
`;