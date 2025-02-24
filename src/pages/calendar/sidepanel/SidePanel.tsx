import React, {useState, useEffect} from "react";
import {TabNavigation} from "./tabnavigation/TabNavigation";
import styled from "styled-components";
import {AllTasksSection} from "./sections/alltasks/AllTasksSection"
import {ScheduleSection} from "./sections/schedule/ScheduleSection"
import {Routine} from "./sections/today/Routine";
import {TodayTasks} from "./sections/today/TodayTasks";
import {RoutineCreation} from "./sections/today/RoutineCreation";
import {TaskCreation} from "./sections/today/TaskCreation";
import {SubmissionAchieve} from "./SubmissionAchieve";
import {Task} from "../../../store/feature/tasksStore"
import {media} from "../../../styles/media";

export const SidePanel = () => {
    const [activeTab, setActiveTab] = useState("today");
    const [isCreatingRoutine, setIsCreatingRoutine] = useState(false); // 루틴 생성 상태 관리
    const [isCreatingTask, setIsCreatingTask] = useState(false); // 할 일 생성 상태 관리

    const [isSubmitting, setIsSubmitting] = useState(false); // 성과 제출 상태
    const [selectedTask, setSelectedTask] = useState<Task | null>(null); // 타입에 null 추가

    // 탭(오늘 하루, 모든 할일, 일정) 이 변경될 때 성과 제출 상태 초기화
    useEffect(() => {
        setIsSubmitting(false);
        setSelectedTask(null);
    }, [activeTab]);

    // 루틴 생성 화면으로 이동
    const handleCreateRoutine = () => {
        setIsCreatingRoutine(true);
    };

    // 루틴 목록 화면으로 돌아가기
    const handleBackToRoutineList = () => {
        setIsCreatingRoutine(false);
    };

    // 할 일 생성 화면으로 이동
    const handleCreateTask = () => {
        setIsCreatingTask(true);
    };

    // 할 일 목록 화면으로 돌아가기
    const handleBackToTaskList = () => {
        setIsCreatingTask(false);
    };

    // 성과 제출 화면으로 이동
    const handleStartSubmission = (task:Task) => {
        setSelectedTask(task);
        setIsSubmitting(true);
    };

    // 성과 제출 화면에서 돌아오기
    const handleBackToTodayTasks = () => {
        setIsSubmitting(false);
        setSelectedTask(null);
    };

    const handleSubmitClick = (comment: string, file: File | null, quizEnabled: boolean) => {
        if (!selectedTask) {
            console.error("No task selected for submission.");
            return;
        }

        console.log("Submitting task:", {
            task: selectedTask,
            comment,
            file,
            quizEnabled,
        });

        // 이후 필요한 작업 (예: 서버 요청)을 추가
        setIsSubmitting(false);
        setSelectedTask(null);
    };

    return (
        <PanelWrapper>
            {/* TabNavigation 렌더링 */}
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* 현재 탭에 따른 콘텐츠 렌더링 */}
            {activeTab === "today" && (
                <>
                    {isSubmitting && selectedTask ? (
                        <SubmissionAchieve
                            task={selectedTask}
                            onBack={handleBackToTodayTasks}
                            onSubmit={handleSubmitClick}
                        />
                    ) : isCreatingRoutine ? (
                        <RoutineCreation onBack={handleBackToRoutineList} />
                    ) : isCreatingTask ? (
                        <TaskCreation onBack={handleBackToTaskList} />
                    ) : (
                        <>
                            <Routine onCreate={handleCreateRoutine} />
                            <TodayTasks
                                onCreateTask={handleCreateTask}
                                onSubmit={handleStartSubmission}
                            />
                        </>
                    )}
                </>
            )}
            {activeTab === "allTasks" && (
                isSubmitting && selectedTask ? (
                    <SubmissionAchieve
                        task={selectedTask}
                        onBack={handleBackToTodayTasks}
                        onSubmit={handleSubmitClick}
                    />
                ) : (
                    <AllTasksSection onSubmit={handleStartSubmission} />
                )
            )}
            {activeTab === "schedule" && <ScheduleSection />}
        </PanelWrapper>
    );
};

const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    flex: 1;
    min-width: 260px;
    max-width: 38%;
    gap: 40px; /* 자식 요소 간의 간격 */
    align-items: flex-start; /* 자식 요소 왼쪽 정렬 */
    background-color:  ${({ theme }) => theme.colors.coolGray10};
    border-radius: 16px;
    
    ${media.desktop`
        flex: 0.9; // 화면이 작아질 때 유연하게 조정
        max-width: 60%;
        min-width: 240px;
    `}

    ${media.tablet`
        max-width: 380px;
        padding: 16px;
        gap: 32px;
        align-self: center; /* 태블릿에서 중앙 정렬 */
    `}

    ${media.phone`
        display: none; /* 모바일에서는 숨김 */
    `}
`;
