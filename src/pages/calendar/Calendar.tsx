import React, {useEffect} from "react";
import styled from "styled-components";
import { useTasksStore } from "../../store/feature/tasksStore";
import {useAuthStore} from "../../store/feature/authStore";
import {usePlanStore} from "../../store/feature/planStore";

interface DayBoxProps {
    isCurrentMonth: boolean;
}

interface CalendarProps {
    year: number;
    month: number; // 0: 1월, 11: 12월
    selectedTab: "all" | "plans" | "tasks";  // 필터링을 위한 prop 추가 -> 전체, 할일, 일정
}

// 날짜별로 할 일을 정리하는 함수
const formatDateKey = (dateString: string): string => {
    return new Date(dateString).toISOString().split("T")[0]; // "2025-02-10"
};

const organizeTasksByDate = (
    tasks: { todoAt: string; title: string; color : string }[],
    plans: {startDate: string; title: string; color: string }[],
) => {
    const mergedItems: Record<string, { title: string; color: string; type: "tasks" | "plans" }[]> = {};

    // 할 일 추가
    tasks.forEach((task) => {
        const dateKey = formatDateKey(task.todoAt);
        if (!mergedItems[dateKey]) mergedItems[dateKey] = [];
        mergedItems[dateKey].push({ title: task.title, color: task.color, type: "tasks" });
    });

    // 일정 추가
    plans.forEach((plan: { startDate: string; title: string; color: string }) => {
        const dateKey = formatDateKey(plan.startDate);
        if (!mergedItems[dateKey]) mergedItems[dateKey] = [];
        mergedItems[dateKey].push({ title: plan.title, color: plan.color, type: "plans" });
    });

    return mergedItems;
};

export const Calendar = ({year, month, selectedTab}: CalendarProps) => {
    const { tasks } = useTasksStore();  // 할 일 데이터 가져오기
    const { plans, fetchPlans } = usePlanStore();  // plans 가져오기 + fetchPlans 추가
    const { isLoggedIn } = useAuthStore(); // 로그인 상태 가져오기

    // 컴포넌트가 처음 렌더링될 때 일정 데이터 가져오기
    useEffect(() => {
        fetchPlans(year, month);
    }, [year, month, fetchPlans]);

    // 할 일 + 일정 함께 정리
    const tasksAndPlansByDate = organizeTasksByDate(
        tasks.map(task => ({ todoAt: task.todoAt, title: task.title, color: task.color, type: "tasks" })),
        plans.map(plan => ({ startDate: plan.startDate, title: plan.title, color: plan.color, type: "plans" })),
    );

    const generateDays = (
        year: number,
        month: number,
        tasksByDate: Record<string, { title: string; color: string; type: "tasks" | "plans" }[]>
    ) => {
        const today = new Date(); // 오늘 날짜
        const isToday = (d: number, m: number, y: number) =>
            d === today.getDate() && m === today.getMonth() && y === today.getFullYear();

        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 해당 달의 첫 요일
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // 해당 달의 총 일수
        const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7; // 필요한 셀 개수 계산
        const prevMonthDays = new Date(year, month, 0).getDate(); // 이전 달의 총 일수

        return Array.from({ length: totalCells }, (_, i) => {
            const dayNumber = i - firstDayOfMonth + 1;

            if (dayNumber <= 0) {
                // 이전 달의 날짜
                return { day: prevMonthDays + dayNumber, isCurrentMonth: false, isToday: false, tasks: [] };
            } else if (dayNumber > daysInMonth) {
                // 다음 달의 날짜
                return { day: dayNumber - daysInMonth, isCurrentMonth: false, isToday: false, tasks: [] };
            } else {
                // 현재 달의 날짜
                const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
                return {
                    day: dayNumber,
                    isCurrentMonth: true,
                    isToday: isToday(dayNumber, month, year),
                    tasks: tasksByDate[dateKey] || []
                };
            }
        });
    };

    const days = generateDays(year, month, tasksAndPlansByDate);

    return (
        <CalendarGrid>
            {days.map((day, index) => {
                //최대 3개의 일정만 표시
                // const filteredTasks =
                //     selectedTab === "tasks"
                //         ? day.tasks.filter(task => !task.color.includes("#D9E2FF")) //일정과 할 일을 구분하는 조건 추가
                //         : selectedTab === "plans"
                //             ? day.tasks.filter(task => task.color.includes("#D9E2FF"))
                //             : day.tasks; // "all"이면 전체 출력

                const filteredTasks =
                    selectedTab === "tasks"
                        ? day.tasks.filter(task => task.type === "tasks") // "tasks" 타입만 필터링
                        : selectedTab === "plans"
                            ? day.tasks.filter(task => task.type === "plans") // "plans" 타입만 필터링
                            : day.tasks; // "all"이면 전체 출력

                const tasksToDisplay = isLoggedIn ? filteredTasks.slice(0, 1) : [];
                const moreCount = isLoggedIn ? filteredTasks.length - 1 : 0;

                return (
                    <DayBox key={index} $isCurrentMonth={day.isCurrentMonth}>
                        <DayNumber $isToday={day.isToday}>{day.day}</DayNumber>
                        <Tasks>
                            {/*로그인 상태일 때만 할 일(Task) 렌더링 */}
                            {isLoggedIn &&
                                tasksToDisplay.map((task, idx) => (
                                    task.type === "plans" ? ( // 일정일 경우
                                        <ScheduleTask>
                                            <ScheduleTaskIndicator color={task.color} />
                                            <ScheduleTaskText>{task.title}</ScheduleTaskText>
                                        </ScheduleTask>
                                    ) : ( // 할 일일 경우
                                        <TodoTask key={idx} color={task.color}>
                                            {task.title}
                                        </TodoTask>
                                    )
                                ))
                            }
                            {/* 초과하는 일정이 있을 경우 "+N개" 표시 */}
                            {isLoggedIn && moreCount > 0 && (
                                <MoreTasks>+{moreCount}개</MoreTasks>
                            )}
                        </Tasks>
                    </DayBox>
                );
            })}
        </CalendarGrid>
    );

};

const CalendarGrid = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(7, 1fr); /* 7열로 배치 */
    gap: 8px;
    //padding: 16px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 16px;
`;

const DayBox = styled.div<{ $isCurrentMonth: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px;
    height: auto;
    min-width: 70px;
    max-width: 140px;
    gap: 0px;
    border-radius: 16px;
    opacity: ${({$isCurrentMonth}) => ($isCurrentMonth ? 1 : 0.4)};
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;

    /* 모든 직계 자식에 마진 추가 */
    & > * {
        margin-top: 4px;
        margin-bottom: 4px;
    }
    
    /* 마지막 자식의 마진 제거 */
    & > *:last-child {
        margin-bottom: 0;
    }
`;

const DayNumber = styled.div<{ $isToday: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: auto;
    aspect-ratio: 1 / 1;  /*정사각형 유지 */
    border-radius: 50%;  /*정확한 원형 유지 */
    flex-shrink: 0;  /*부모 크기에 영향을 받지 않도록 설정 */
    background: ${({ $isToday, theme }) =>
            $isToday ? theme.colors.primary : "transparent"};
    color: ${({ $isToday, theme }) =>
            $isToday ? theme.colors.white : theme.colors.black};
    font-size: 14px;
    font-weight: bold;
    margin: 0; 
`;

const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    overflow: hidden;
    min-height: 60px; /* 최소 높이 설정하여 개수가 적어도 동일한 높이 유지 */
    min-width: 0;
`;

const TodoTask = styled.div<{ color: string }>`
    display: block;
    align-items: center;
    width: auto;
    min-width: 54px;  /* 최소 너비 통일 */
    max-width: 124px; /* 최대 너비 설정 */
    height: 18px; /* 일정한 높이 */
    padding: 2px 12px;
    gap: 10px;
    align-self: stretch;

    border-radius: 100px;
    background: ${({ color }) => color}; // 할 일 색상 적용
    color: #000;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
`;

const ScheduleTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    min-width: 54px;  /* 최소 너비 */
    max-width: 124px; /* 최대 너비 */
    height: 18px;
    border: 0.4px solid #CACCD7; /* 테두리 적용 */
    background: #FFFFFF; /* 전체 배경은 흰색 */
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 10.5px 10.5px 10.5px 10.5px; /* 오른쪽만 둥글게 */
    align-self: stretch;  /* 부모 컨테이너 크기에 맞게 조절 */
    position: relative;
    box-sizing: border-box; /* border 포함 크기 조정 */
    margin : 0;
`;

// 왼쪽 파란색 바
const ScheduleTaskIndicator = styled.div<{color: string}>`
    width: 12px;
    height: 21px;
    background: ${({color}) => color};
    border-radius: 10.5px 0px 0px 10.5px;
    // border: 0.4px solid #CACCD7;
    flex-shrink: 0; /* 크기 축소 방지 */
    box-sizing: border-box;
    margin: 0;
`;

/* 일정 텍스트 컨테이너 */
const ScheduleTaskText = styled.div`
    display: block;
    align-items: center;
    min-width: 42px;
    max-width: 112px;
    padding: 2px 12px 2px 8px;
    // border: 0.4px solid #CACCD7;
    background: #FFF;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: 500;
    margin : 0;
`;

const MoreTasks = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    text-decoration: underline;
    padding-bottom: 0; // 하단 패딩 제거
    margin-left: 8px;
    line-height: 1; // 줄 높이 최소화
`;