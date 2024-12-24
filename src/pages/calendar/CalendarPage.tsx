import React, {useState} from "react";
import styled from "styled-components";
import {CalendarHeader} from "./CalendarHeader";
import {WeekDays} from "./WeekDays";
import {Calendar} from "./Calendar";

export const CalendarPage = () => {
    // 현재 날짜를 기반으로 초기 상태 설정
    const today = new Date(); // 현재 날짜 가져오기
    const [year, setYear] = useState(today.getFullYear()); // 현재 년도
    const [month, setMonth] = useState(today.getMonth()); // 현재 월 (0: 1월, 11: 12월)

    // 월 변경 함수
    const changeMonth = (offset: number) => {
        setMonth((prevMonth) => {
            const newMonth = prevMonth + offset;

            if (newMonth < 0) {
                setYear((prevYear) => prevYear - 1);
                return 11; // 이전 년도의 12월
            }
            if (newMonth > 11) {
                setYear((prevYear) => prevYear + 1);
                return 0; // 다음 년도의 1월
            }
            return newMonth;
        });
    };

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
    max-width: 1060px;
    padding: 24px 40px;
    gap: 40px;
    flex: 1 0 0;
    border-radius: 16px;
    background: ${({theme}) => theme.colors.white};
`;

const CalendarBody = styled.div`
    /* 캘린더 본체 스타일 */
    width: 100%;
    background: ${({theme}) => theme.colors.coolGray10};
    border-radius: 16px;
    // padding: 20px;
`;