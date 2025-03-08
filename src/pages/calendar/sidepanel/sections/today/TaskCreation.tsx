import React, { useState, useRef } from "react";
import styled from "styled-components";
import {T6, T4, Cap1, Cap2} from "../../../../../styles/Typography";
import { useTheme } from "styled-components";
import { ReactComponent as BackButton } from "../../../../../assets/icons/calendar/rightsidebar/BackButton.svg";
import {useTasksStore} from "../../../../../store/feature/tasksStore";

export const TaskCreation = ({ onBack }: { onBack: () => void }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        comment: "",
        color: "",
        isAllDay: false,
        alarm: true,
    });

    // 숨겨진 date input 을 조작하기 위한 ref
    const dateInputRef = useRef<HTMLInputElement>(null);

    // 날짜 선택 시 상태 업데이트
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, date: e.target.value });
    };

    // "시간 설정" 버튼 클릭 시 숨겨진 input 클릭
    const handleTimeSetClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.style.display = "block"; // input 보이기
            dateInputRef.current.focus(); // 포커스 이동
        }
    };

    // date input 포커스 해제 시 숨기기
    const handleDateBlur = () => {
        if (dateInputRef.current) {
            dateInputRef.current.style.display = "none"; // 다시 숨김
        }
    };

    const theme = useTheme(); // theme 객체 가져오기
    const colors = [
        theme.colors.category.red, // theme.tsx 에 정의된 red
        theme.colors.category.green, // theme.tsx 에 정의된 green
        theme.colors.category.blue, // theme.tsx 에 정의된 blue
        theme.colors.category.yellow, // theme.tsx 에 정의된 yellow
        theme.colors.category.purple, // theme.tsx 에 정의된 purple
    ];

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "short",
        };
        return date.toLocaleDateString("ko-KR", options).replace(/\./g, ". ");
    };

    // const selectColor = (color: string) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         color,
    //     }));
    // };

    const {createTask} = useTasksStore();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // 폼 검증 추가 기능
        if (!formData.title || !formData.date) {
            alert("제목과 날짜는 필수입니다");
            return;
        };

        //  'formData' 를 기반으로 'Task' 객체 생성
        const newTask = {
            title: formData.title,
            todoAt: formData.date,
            color: formData.color,
            planAlarm: formData.alarm,
            planComment: formData.comment,
            completed: false, // 초기값으로 false
        };

        // `createTask` 호출
        createTask(newTask)
            .then(() => {
                alert("할 일이 성공적으로 생성되었습니다!");
                onBack(); // 뒤로 돌아가기
            })
            .catch((error) => {
                console.error("Error creating task:", error);
                alert("할 일을 생성하는 도중 오류가 발생했습니다.");
            });
    };

    return (
        <CreationWrapper>
            <Header>
                <BackButton onClick={onBack} />
                <Title>할 일 생성하기</Title>
            </Header>
            <Divider />
            <Form>
                <Label>
                    <TitleStyledInput
                        type="text"
                        placeholder="할 일 제목"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </Label>
                <Label>
                    <DateSelector>
                        {formData.date ? (
                            <span>{formatDate(formData.date)}</span>
                        ) : (
                            <Placeholder>연도. 월. 일.</Placeholder>
                        )}
                        <TimeSetButton
                            type="button"  //버튼 타입 지정
                            onClick={handleTimeSetClick}  // 버튼 클릭 시 숨겨진 input 트리거
                        >
                            시간 설정
                        </TimeSetButton>
                        <HiddenDateInput
                            ref={dateInputRef}
                            type="date"
                            value={formData.date}
                            onChange={handleDateChange}
                            onBlur={handleDateBlur} // 포커스 해제 시 숨김
                        />
                    </DateSelector>
                </Label>
                <Label>
                    <CommentInput
                        placeholder="코멘트 추가"
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                </Label>
                <Divider />
                <ColorSelector>
                    <span style={{
                        whiteSpace: "nowrap",
                        lineHeight: "1",
                        marginTop: "3px"
                    }}>컬러 선택</span>
                    <ColorOptions>
                        {/* theme.tsx 에서 가져온 색상들 출력 */}
                        {colors.map((color, index) => (
                            <ColorCircle
                                key={index}
                                color={color}
                                selected={formData.color === color} // 선택된 색상 확인
                                onClick={() => setFormData({ ...formData, color })} // 선택한 색상 업데이트
                            />
                        ))}
                    </ColorOptions>
                </ColorSelector>
                <CheckboxWrapper>
                    <LabelInline>
                        <span>하루 종일</span>
                        <Checkbox
                            type="checkbox"
                            checked={formData.isAllDay}
                            onChange={(e) => setFormData({ ...formData, isAllDay: e.target.checked })}
                        />
                    </LabelInline>
                    <LabelInline>
                        <span>알림 받기</span>
                        <Checkbox
                            type="checkbox"
                            checked={formData.alarm}
                            onChange={(e) => setFormData({ ...formData, alarm: e.target.checked })}
                        />
                    </LabelInline>
                </CheckboxWrapper>
                <SubmitButton onClick={handleSubmit}>생성하기</SubmitButton>
            </Form>
        </CreationWrapper>
    );
};

const CreationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 310px;
    // max-width: 460px;
    padding: 24px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 20px;
    background: #fff; /* White */
    box-shadow: 0px 4px 12px 0px rgba(239, 239, 246, 0.8);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

const DateSelector = styled.div`
    display: flex;
    justify-content: space-between; /* 왼쪽과 오른쪽 요소 간 간격 조정 */
    align-items: center; /* 세로축 중앙 정렬 */
    align-self: stretch; /* 부모 요소 너비에 맞춤 */
    min-width: 214px; /* 최소 너비 */
    //max-width: 364px; /* 최대 너비 */
    width: 100%; /* 기본적으로 부모에 맞춤 */
    gap: 8px; /* 요소 간 간격 */
`;

const HiddenDateInput = styled.input`
    display: none; /* 기본적으로 숨김 */
    position: relative;
    margin-top: 8px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
`;

const TimeSetButton = styled(Cap2).attrs({as: 'button'})`
    border: none; /* 테두리 제거 */
    border-radius: 4px; /* 둥근 모서리 */
    color: ${({ theme }) => theme.colors.warmGray2};; /* 텍스트 색상 */
`;

const Placeholder = styled(Cap1)`
    color: #aaa; /* 텍스트 색상 */
    font-size: 14px; /* 폰트 크기 */
    line-height: 1.5; /* 줄 높이 */
`;

const Title = styled(T6)`
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d4d6eb;
    margin: 8px 0;
`;

const Form = styled.form`
    display: flex;
    background: ${({ theme }) => theme.colors.coolGray10};
    flex-direction: column;
    padding: 24px;
    border-radius: 8px;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
    align-self: stretch;
`;

const TitleStyledInput = styled(T4).attrs({ as: "input" })`
    width: 100%;
    color: #333;
    border: none;
    outline: none;
    transition: border-color 0.3s;
    background: ${({ theme }) => theme.colors.coolGray10};

    &:focus {
        border-bottom: 1px solid #6373ff;
    }w

    &::placeholder {
        color: #aaa;
    }
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    width: 100%;
`;

const CommentInput = styled(Cap1).attrs({ as: "textarea" })`
    display: flex;
    height: 100px;
    //min-width: 214px;
    //max-width: 364px;
    width: 100%;
    padding: 16px;
    align-items: flex-start;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.coolGray10};
    border: 0.4px solid ${({ theme }) => theme.colors.warmGray2};
    gap: 10px;
    align-self: stretch;
`;

const ColorSelector = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* 수직 중앙 정렬 */
    gap: 14px;
    width: 100%;
`;

const ColorOptions = styled.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    white-space: nowrap;
    flex-grow: 1;
    max-width: 100%;
    
    &::-webkit-scrollbar-track {
        background: #f0f0f0;
    }
`;

const ColorCircle = styled.div<{ color: string; selected: boolean }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    border: 2px solid
    ${(props) =>
            props.selected
                    ? props.theme.colors.primary // 선택된 경우 Primary 색상
                    : props.theme.colors.white}; // 기본 테두리 색상
    cursor: pointer;
    transition: border-color 0.3s ease; // 테두리 색상 전환 효과
`;

const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 텍스트와 체크박스 중앙 정렬 */
    gap: 16px;
`;

const LabelInline = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin: 0; /* 브라우저 기본 마진 초기화 */
`;

const SubmitButton = styled(T6).attrs({ as: "button" })`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background: #6373ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: #5364e4;
    }
`;