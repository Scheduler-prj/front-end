import React, {useState} from "react";
import styled from "styled-components";
import {CalendarHeader} from "./CalendarHeader";
import {WeekDays} from "./WeekDays";
import {Calendar} from "./Calendar";
import {SidePanel} from "./sidepanel/SidePanel";
import {media} from "../../styles/media";

export const CalendarPage = () => {
    // 현재 날짜를 기반으로 초기 상태 설정
    const today = new Date();
    const [dateState, setDateState] = useState({ year: today.getFullYear(), month: today.getMonth() });
    const [selectedTab, setSelectedTab] = useState<"all" | "plans" | "tasks">("all");  // 필터링 상태 추가

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
            {/* 캘린더 영역 */}
            <CalendarSection>
                <CalendarHeader
                    year={year}
                    month={month}
                    changeMonth={changeMonth}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
                <WeekDays />
                <CalendarBody>
                    <Calendar year={year} month={month} selectedTab={selectedTab} />
                </CalendarBody>
            </CalendarSection>

            {/* 우측 패널 영역 */}
            <SidePanel />
        </CalendarWrapper>
    );
};

const CalendarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    // min-width: 570px;
    // max-width : 1560px;
    justify-content: space-between; /* 위-아래 간격 조절 */
    padding: 20px 36px;
    gap: 40px;
    flex: 1;
    // background: ${({theme}) => theme.colors.white};
    box-sizing: border-box; /* padding 포함 크기 계산 */

    ${media.desktop`
        padding-left: 40px;
        padding-right: 40px;
        width: 100%;
        gap: 40px;
    `}

    ${media.tablet`
        max-width: calc(100% - 20%); /* 1024px 이하 */
        margin: 60px auto 20px 20px;
        flex-direction: column; /* 태블릿에서는 세로 배치 */
    `}

    ${media.phone`
        max-width: calc(100% - 10%); /* 768px 이하 */
        margin: 40px auto 20px 10px;
        flex-direction: column;
        padding: 16px;
    `}
`;

const CalendarSection = styled.div`
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    flex: 1 0 0; /* 너비 비율 */
    min-width : 60%;
    padding: 24px 40px; /* 내부 여백 */
    gap: 40px; /* 자식 요소 간의 간격 */
    align-items: flex-start;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04); /* 그림자 */

    ${media.desktop`
        flex: 1.8;
        min-width: 55%;
        padding: 20px;
    `}

    ${media.tablet`
        max-width: 100%;
        padding: 20px;
        gap: 24px;
    `}

    ${media.phone`
        padding: 16px;
        gap: 20px;
        border-radius: 12px; /* 모바일에서는 둥글기 줄이기 */
    `}
`;

const CalendarBody = styled.div`
    /* 캘린더 본체 스타일 */
    width: 100%;
    background: ${({theme}) => theme.colors.coolGray10};
    border-radius: 16px;
`;