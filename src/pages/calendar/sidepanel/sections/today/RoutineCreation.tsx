import React, {useState} from "react";
import styled from "styled-components";
import {T6, T4, Cap1} from "../../../../../styles/Typography";
import {ReactComponent as BackButton} from "../../../../../assets/icons/calendar/rightsidebar/BackButton.svg";
import {useRoutinesStore} from "../../../../../store/feature/routinStore";


export const RoutineCreation = ({ onBack }: { onBack: () => void }) => {
    const addRoutine = useRoutinesStore((state) => state.addRoutine);

    const [formData, setFormData] = useState<{
        title: string;
        alarm: boolean;
        comment: string;
        dotw: string[]; // dotw 의 타입을 명시
    }>({
        title: "",
        alarm: false,
        comment: "",
        dotw: [],
    });

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        // 폼 검증
        event.preventDefault(); // 기본 동작 방지
        if (!formData.title || formData.dotw.length === 0) {
            alert("루틴 제목과 요일을 입력해주세요.");
            return;
        }

        try {
            // 새로운 루틴 추가
            await addRoutine({
                title: formData.title,
                alarm: formData.alarm,
                comment: formData.comment,
                dtow_id: formData.dotw.length, // 선택된 요일 수를 ID로 (더미 로직) -> 실제 API에 맞춰 수정 필요
            });
            alert("루틴이 생성되었습니다!");
            // 폼 초기화
            setFormData({
                title: "",
                alarm: false,
                comment: "",
                dotw: [],
            });

            onBack();  // 루틴 생성 후 목록 화면으로 자동 전환
        } catch (error) {
            alert("루틴 생성 중 오류가 발생했습니다.");
        }
    };

    const toggleDay = (day: string) => {
        setFormData((prev) => ({
            ...prev,
            dotw: prev.dotw.includes(day)
                ? prev.dotw.filter((selectedDay) => selectedDay !== day) // 선택된 경우 제거
                : [...prev.dotw, day], // 선택되지 않은 경우 추가
        }));
    };

    return (
        <CreationWrapper>
            <Header>
                <BackButton onClick={onBack} />
                <Title>루틴 생성하기</Title>
            </Header>
            <Divider />
            <Form>
                <Label>
                    <TitleStyledInput
                        type="text"
                        placeholder="루틴 제목"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })} // 상태 업데이트
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "루틴 제목")}
                    />
                </Label>
                <Label>
                    <CommentStyleInput
                        type="text"
                        placeholder="코멘트 추가"
                        value={formData.comment}  // 상태와 연결
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })} // 상태 업데이트
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "코멘트 추가")}
                    />
                </Label>
                <Divider />
                <DaySelector>
                    <InputTitle>요일</InputTitle>
                    <DayList>
                        {["월", "화", "수", "목", "금", "토", "일"].map((day, index) => (
                            <DayButton
                                type="button"
                                key={index}
                                selected={formData.dotw.includes(day)} // 선택 여부에 따라 스타일 적용
                                onClick={() => toggleDay(day)}
                            >
                                {day}
                            </DayButton>
                        ))}
                    </DayList>
                </DaySelector>
                <LabelInline>
                    <InputTitle>알림</InputTitle>
                    <Checkbox
                        type="checkbox"
                        checked={formData.alarm} // 상태와 연결
                        onChange={(e) => setFormData({ ...formData, alarm: e.target.checked })} // 상태 업데이트
                    />
                </LabelInline>
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
    //max-width: 460px;
    width: 100%;
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
    align-self: stretch;
`;

const Title = styled(T6)`
`;

// T4 스타일을 사용한 루틴 제목 Input
const TitleStyledInput = styled(T4).attrs({ as: "input" })`
    width: 100%;
    color: #333;
    border: none;
    outline: none;
    transition: border-color 0.3s;
    background: ${({ theme }) => theme.colors.coolGray10};

    &:focus {
        border-bottom: 1px solid #6373ff;
    }

    &::placeholder {
        color: #aaa;
    }
`;

// Cap1 스타일을 사용한
const CommentStyleInput = styled(Cap1).attrs({ as: "input" })`
    width: 100%;
    color: #333;
    border: none;
    outline: none;
    transition: border-color 0.3s;
        background: ${({ theme }) => theme.colors.coolGray10};

    &:focus {
        border-bottom: 1px solid #6373ff;
    }

    &::placeholder {
        color: #aaa;
    }
`

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
    align-items: flex-start;
    padding: 24px;
    border-radius: 8px;
    gap: 24px;
    width: 100%;
    align-self: stretch;
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;

const LabelInline = styled.div`
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    gap: 14px; /* "알림"과 체크박스 사이의 간격 */
`;

const InputTitle = styled(Cap1)`
    white-space: nowrap; /* 강제 줄 바꿈 방지 */
    line-height: 1;
    margin-top: 3px;
`;

const DaySelector = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 16px;
`;

const DayList = styled.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;  /* 가로 스크롤 가능하도록 설정 */
    white-space: nowrap;  /* 줄 바꿈 방지 */
    flex-grow: 1;
    max-width: 100%;

    &::-webkit-scrollbar-track {
        background: #f0f0f0;
    }
`;

const DayButton = styled.button<{ selected: boolean }>`
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) => (props.selected ? "#6373ff" : "#fff")}; /* 선택 여부에 따라 배경색 변경 */
    color: ${(props) => (props.selected ? "#fff" : "#6373ff")}; /* 선택 여부에 따라 텍스트 색 변경 */
    font-size: 14px;
    cursor: pointer;
    flex-shrink: 0;
    
    &:hover {
        background-color: ${(props) => (props.selected ? "#6373ff" : "#fff")}; /* 선택 상태에 따른 hover 색상 */
    }
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    accent-color: #6373ff;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    background-color: #6373ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #5364e4;
    }
`;
