import React, { useState, useEffect} from "react";
import styled from "styled-components";
import {T6, T7, B6, SubT1} from "../../../../../styles/Typography";
import { ReactComponent as Create } from "../../../../../assets/icons/calendar/rightsidebar/Create.svg";
import { ReactComponent as Edit } from "../../../../../assets/icons/calendar/rightsidebar/Edit.svg";
import {useTasksStore} from "../../../../../store/feature/tasksStore";
import {useAuthStore} from "../../../../../store/feature/authStore";
import {Task} from "../../../../../store/feature/tasksStore"

interface TaskProps {
    onCreateTask: () => void;
    onSubmit: (task: Task) => void;
}

export const TodayTasks = ({ onCreateTask, onSubmit }: TaskProps) => {
    const {tasks, toggleTask, fetchTasks} = useTasksStore();
    const { isLoggedIn } = useAuthStore();  // zustand 에서 로그인 상태 가져오기

    useEffect(() => {
        console.log("isLoggedIn", isLoggedIn);
        if (isLoggedIn) {
            fetchTasks(); // 로그인한 경우에만 데이터를 불러오기
        }
    }, [fetchTasks, isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <TasksWrapper>
                <Title>오늘의 할 일</Title>
                <Divider />
                <NoDataMessage>로그인 후 이용 가능합니다.</NoDataMessage>
            </TasksWrapper>
        );
    }

    const formatDate = (dateString: string): string => {
        // 날짜에서 'T' 이전까지 추출 (ISO 8601 대응)
        const datePart = dateString.split("T")[0]; // "2025-02-10T10:00:00Z" → "2025-02-10"

        // 기존 방식으로 변환
        const [year, month, day] = datePart.split("-");
        return `${parseInt(month, 10)}/${parseInt(day, 10)}`; // "02" → "2", "10" → "10"
    };

    // 오늘 날짜 구하기
    const todayDate = new Date().toISOString().split("T")[0]; // "2025-02-20"

    // 오늘 할 일만 필터링
    const todayTasks = tasks.filter((task) => task.todoAt.split("T")[0] === todayDate);

    const completedTasks = todayTasks.filter((task) => task.completed);
    const incompleteTasks = todayTasks.filter((task) => !task.completed);

    const handleSubmitClick = (task: Task) => {
        onSubmit(task); // 부모 컴포넌트로 `onSubmit` 콜백 전달
    };

    return (
        <TasksWrapper>
            <Header>
                <Title>오늘의 할 일</Title>
                <Actions>
                    <Edit />
                    <Create onClick={onCreateTask}/>
                </Actions>
            </Header>
            <Divider />
            {/* 완료된 할 일 섹션 */}
            {completedTasks.length > 0 && (
                <>
                    <SectionHeader $completed={true}>완료</SectionHeader>
                    <TasksList>
                        {completedTasks.map((task) => (
                            <TaskItem
                                key={task.todoId}
                                $completed={task.completed}
                                color={task.color}
                            >
                                <TaskDate>{formatDate(task.todoAt)}</TaskDate>
                                <TaskContent>
                                    <TaskTitle>{task.title}</TaskTitle>
                                    <Checkbox
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.todoId)}
                                    />
                                </TaskContent>
                            </TaskItem>
                        ))}
                    </TasksList>
                </>
            )}
            {/* 미완료된 할 일 섹션 */}
            <TasksListWrapper/>
            {incompleteTasks.length > 0 && (
                <>
                    <SectionHeader $completed={false}>미완료</SectionHeader>
                    <TasksList>
                        {incompleteTasks.map((task) => (
                            <TaskItem
                                key={task.todoId}
                                $completed={task.completed}
                                color={task.color}
                            >
                                <TaskDate>{formatDate(task.todoAt)}</TaskDate>
                                <TaskContent>
                                    <TaskTitle>{task.title}</TaskTitle>
                                    <ButtonGroup>
                                        <SubmitButton onClick={() => handleSubmitClick(task)}>
                                            성과 제출
                                        </SubmitButton>
                                        <Checkbox
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => toggleTask(task.todoId)}
                                        />
                                    </ButtonGroup>
                                </TaskContent>
                            </TaskItem>
                        ))}
                    </TasksList>
                </>
            )}
        </TasksWrapper>
    );
};

const TasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 310px;
    max-width: 460px;
    padding: 24px;
    gap: 10px;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 12px 0px rgba(239, 239, 246, 0.8);
`;

// 완료/미완료 섹션 헤더 스타일
const SectionHeader = styled(T7).attrs<{ $completed: boolean }>({})`
    display: inline-block;
    padding: 8px 20px; /* 내부 여백 추가 */
    color: ${({ $completed }) => ($completed ? "#6373FF" : "#FFF")};
    background-color: ${({ $completed }) => ($completed ? "#F6F7FF" : "#6373FF")}; /* 배경색 */
    border-radius: 40px; /* 둥근 테두리 */
    text-align: center;
`;

const TasksListWrapper = styled.div`
    margin-bottom: 40px; /* 섹션 간 간격 */
    &:last-child {
        margin-bottom: 0; /* 마지막 섹션은 여백 제거 */
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled(T6)`
`;

const Actions = styled.div`
    display: flex;
    gap: 8px;
    align-items: center; /* 세로 정렬 */
    justify-content: center; /* 가로 정렬 */
    height: 100%; /* 부모 컨테이너에 따라 필요 시 높이 설정 */
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #D4D6EB; /* 실선 색상 */
    margin: 8px 0;
`;

const TasksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center; /* 수직 정렬 */
    gap: 8px; /* 버튼과 체크박스 사이 간격 */
`;

const TaskItem = styled.li<{ $completed: boolean; color: string }>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    background-color: ${({ $completed, color, theme }) =>
            $completed ? theme.colors.coolGray10 : color}; /* 완료 여부에 따라 배경색 설정 */
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const TaskDate = styled(B6)`
    background-color: #f0f0f0;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    color: #333;
    border: 0.4px solid #d4d6eb; /* 선 추가 */
`;

const TaskContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 8px;
    width: 100%;
`;

const TaskTitle = styled(SubT1)`
`;

const Checkbox = styled.input`
    width : 28px;
    height : 28px;
    margin-right: 12px;
    cursor: pointer;
`;

const SubmitButton = styled.button`
    border-radius: 4px; /* 둥근 모서리 */
    border: 1px solid #5F74FF; /* 테두리 색상 */
    background-color: #FFF; /* 배경색 */
    color: #5F74FF; /* 텍스트 색상 */
    padding: 4px 12px; /* 내부 여백 */
    cursor: pointer;
    font-size: 12px;
    font-weight: bold; /* 텍스트 강조 */
    margin-left: 56px;

    &:hover {
        background-color: #E3EAFD; /* 호버 시 배경색 */
        color: #3F51B5; /* 호버 시 텍스트 색상 */
        border-color: #3F51B5; /* 호버 시 테두리 색상 */
    }

    &:active {
        background-color: #D4D6EB; /* 클릭 시 배경색 */
        border-color: #6373FF; /* 클릭 시 테두리 색상 */
    }

    &:disabled {
        background-color: #F0F0F0; /* 비활성화 시 배경색 */
        color: #A0A0A0; /* 비활성화 시 텍스트 색상 */
        border-color: #D4D6EB; /* 비활성화 시 테두리 색상 */
        cursor: not-allowed; /* 비활성화 상태 커서 */
    }
`;

const NoDataMessage = styled.p`
    font-size: 16px;
    color: #999;
    text-align: center;
    width: 100%;
    margin-top: 20px;
`;