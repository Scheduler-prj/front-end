import React, {useCallback, useState, useEffect} from "react";
import styled from "styled-components";
import { ReactComponent as Edit } from "../../../../../assets/icons/calendar/rightsidebar/Edit.svg"
import {SubT1, T6, T7} from "../../../../../styles/Typography";
import { usePlanStore } from "../../../../../store/feature/planStore";
import {useAuthStore} from "../../../../../store/feature/authStore";


export const ScheduleSection = () => {
    const { plans, fetchPlans, togglePlan, submitPlan } = usePlanStore();
    const {isLoggedIn} = useAuthStore();

    const [activeTab, setActiveTab] = useState<"incomplete" | "completed">("incomplete");

    // useCallback 을 사용하여 함수 메모이제이션
    const fetchPlansIfLoggedIn = useCallback(() => {
        if (isLoggedIn) {
            fetchPlans(2025, 2);
        }
    }, [isLoggedIn, fetchPlans]);

    // isLoggedIn이 true 로 변경될 때만 fetchTasks 실행
    useEffect(() => {
        fetchPlansIfLoggedIn();
    }, [fetchPlansIfLoggedIn]);

    // 로그인하지 않은 경우 아예 컴포넌트 렌더링하지 않음
    if (!isLoggedIn) {
        return (
            <ScheduleWrapper>
                <Title>일정</Title>
                <Divider />
                <NoDataMessage>로그인 후 이용 가능합니다.</NoDataMessage>
            </ScheduleWrapper>
        );
    }

    // 날짜 형식을 JS의 split 을 활용하여 MM/DD 형식으로 변환
    const formatDate = (dateString: string): string => {
        const [year, month, day] = dateString.split("-"); // YYYY-MM-DD → [YYYY, MM, DD]
        return `${parseInt(month, 10)}/${parseInt(day, 10)}`; // "02" → "2", "15" → "15"
    };

    // 완료된/미완료된 할 일 분리
    const completedTasks = plans.filter((plan) => plan.clear);
    const incompleteTasks = plans.filter((plan) => !plan.clear);

    const scheduleToRender = activeTab === "incomplete" ? incompleteTasks : completedTasks;
    return (
        <ScheduleWrapper>
            <Header>
                <Title>일정</Title>
                <Edit/>
            </Header>
            <Divider/>
            <Tabs>
                <TabButton
                    selected={activeTab === "incomplete"}
                    onClick={() => setActiveTab("incomplete")}
                >
                    미완료
                </TabButton>
                <TabButton
                    selected={activeTab === "completed"}
                    onClick={() => setActiveTab("completed")}
                >
                    완료
                </TabButton>
            </Tabs>
            <SchedulesList>
                {scheduleToRender.map((plan) => (
                    <ScheduleItem
                        key={plan.planId}
                        //color={plan.color}
                    >
                        <ScheduleIndicator color={plan.color} /> {/* Indicator 추가 */}
                        <ScheduleDate>{formatDate(plan.startDate)}</ScheduleDate>
                        <ScheduleContent>
                            <ScheduleTitleWrapper>
                                <ScheduleTitle>{plan.title}</ScheduleTitle>
                            </ScheduleTitleWrapper>
                            <ButtonGroup>
                                <Checkbox
                                    type="checkbox"
                                    checked={plan.clear}
                                    onChange={() => togglePlan(plan.planId)}
                                />
                            </ButtonGroup>
                        </ScheduleContent>
                    </ScheduleItem>
                ))}
            </SchedulesList>
            <CreateButton>성과 제출하기</CreateButton>
        </ScheduleWrapper>
    );
};


const ScheduleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 310px;
    // max-width: 460px;
    width: 100%;
    padding: 24px;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    border-radius: 20px;
    background: #fff; /* White */
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled(T6)`
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d4d6eb;
    // margin: 16px 0;
`;

const Tabs = styled.div`
    display: flex;
    gap: 8px;
`;

const TabButton = styled(T7).attrs<{ selected?: boolean }>({ as: "button" })`
    background: ${(props) => (props.selected ? "#6373FF" : "#F6F7FF")};
    color: ${(props) => (props.selected ? "#FFF" : "#6373FF")};
    padding: 8px 20px;
    border-radius: 40px;
    border: none;
    cursor: pointer;
`;

const SchedulesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const ScheduleDate = styled.div`
    font-size: 12px;
    color: #333;
    padding: 4px 8px;
    background: #f0f0f0;
    border-radius: 4px;
`;

const ScheduleItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px 12px 12px 32px; /* Figma 기준 padding 적용 */
    border-radius: 8px;
    border: 1px solid #CACCD7;
    background: #FFF;
    position: relative; /* ScheduleIndicator 위치 고정 */
    margin-bottom: 8px;
`;

const ScheduleIndicator = styled.div<{ color: string }>`
    width: 20px;
    height: 52px;
    border-radius: 8px 0px 0px 8px;
    background: ${({ color }) => color};
    position: absolute; // 위치 고정 
    left: 0; // ScheduleItem 의 왼쪽에 배치 
    top: 50%;
    transform: translateY(-50%); //세로 중앙 정렬 
`;

const ScheduleContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 8px;
    max-width: 100%;
    min-width: 0;
    padding-left: 12px;
`;

const ScheduleTitle = styled(SubT1)`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-shrink: 1;
`;

const ScheduleTitleWrapper = styled.div`
    flex: 1;  /* 텍스트가 가능한 최대 공간 차지 */
    //max-width: calc(100% - 100px); /* 버튼 그룹 공간 확보 */
    min-width: 30px;
    overflow: hidden;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center; /* 수직 정렬 */
    gap: 8px; /* 버튼과 체크박스 사이 간격 */
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
`;

const CreateButton = styled(T6).attrs({ as: "button" })`
    width: 100%;
    padding: 20px;
    background: #fff;
    color: #6373FF;
    border: 1px solid #5F74FF;
    border-radius: 8px;
    cursor: pointer;
`;

const NoDataMessage = styled.p`
    font-size: 16px;
    color: #999;
    text-align: center;
    width: 100%;
    margin-top: 20px;
`;