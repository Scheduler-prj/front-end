import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { TabNavigation } from "./tabnavigation/TabNavigation";
import { ReactComponent as BookMarkIcon } from "../../../assets/icons/bookmark/BookMarkIcon.svg";
import {SubmissionAchieve} from "./SubmissionAchieve";
import {RoutineCreation} from "./sections/today/RoutineCreation";
import {TaskCreation} from "./sections/today/TaskCreation";
import {Routine} from "./sections/today/Routine";
import {TodayTasks} from "./sections/today/TodayTasks";
import {AllTasksSection} from "./sections/alltasks/AllTasksSection";
import {ScheduleSection} from "./sections/schedule/ScheduleSection";
import {Task} from "../../../store/feature/tasksStore";
import { media } from "../../../styles/media";

export const SidePanelTablet = () => {
    const [isOpen, setIsOpen] = useState(false);

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

    const [panelHeight, setPanelHeight] = useState("auto");

    useEffect(() => {
        // CalendarWrapper 높이를 가져와서 적용
        const calendarElement = document.getElementById("calendar-section");
        if (calendarElement) {
            setPanelHeight(`${calendarElement.clientHeight}px`);
        }
    }, []);

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
        <>
            {/* 배경 오버레이 (패널이 열렸을 때만 보이도록 설정) */}
            {isOpen && <Overlay onClick={() => setIsOpen(false)} />}

            <PanelContainer isOpen={isOpen} style={{ height: panelHeight }}>
                {/* 북마크 버튼 (사이드 패널과 함께 움직임) */}
                <BookmarkButton onClick={() => setIsOpen(!isOpen)}>
                    <BookMarkIcon />
                </BookmarkButton>

                {/* 사이드 패널 */}
                <PanelContent style={{ height: panelHeight }}>
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
                </PanelContent>
            </PanelContainer>
        </>
    );
};

/* 배경 오버레이 (패널이 열렸을 때만 표시) */
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9;
`;

/* 북마크 버튼 + 사이드 패널을 감싸는 Container */
const PanelContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 53%;
    right: ${({ isOpen }) => (isOpen ? "0px" : "-500px")}; /* 닫혔을 때 숨김 */
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    transition: right 0.3s ease-in-out;
    z-index: 10;
    height: 100%;
`;

/* 북마크 버튼 */
const BookmarkButton = styled.div`
    position: absolute;
    left: -83.9px; /* 패널이 닫혀 있을 때 보이도록 설정 */
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 11;
`;

/* 사이드 패널 본체 */
const PanelContent = styled.div`
    width: 500px;
    height: 100%;
    background: ${({ theme }) => theme.colors.coolGray10};
    border-radius: 16px 0px 0px 16px; 
    // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`;
