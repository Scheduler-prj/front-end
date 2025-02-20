import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as BackButton} from "../../../assets/icons/calendar/rightsidebar/BackButton.svg";
import { T6, B6, T7, SubT1, Cap2, B5 } from '../../../styles/Typography';
import {Task} from "../../../store/feature/tasksStore";

interface SubmissionProps {
    task: Task;
    onBack: () => void;
    onSubmit: (comment: string, file: File | null, quizEnabled: boolean) => void;
}

export const SubmissionAchieve = ({ task, onBack, onSubmit }: SubmissionProps) => {
    const [comment, setComment] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [quizEnabled, setQuizEnabled] = useState(true);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const formatDate = (dateString: string): string => {
        // 날짜에서 'T' 이전까지 추출 (ISO 8601 대응)
        const datePart = dateString.split("T")[0]; // "2025-02-10T10:00:00Z" → "2025-02-10"

        // 기존 방식으로 변환
        const [year, month, day] = datePart.split("-");
        return `${parseInt(month, 10)}/${parseInt(day, 10)}`; // "02" → "2", "10" → "10"
    };

    const handleSubmit = () => {
        onSubmit(comment, file, quizEnabled);
    };

    return (
        <Wrapper>
            <Header>
                <BackButton onClick={onBack}>&lt;</BackButton>
                <Title>성과 제출</Title>
            </Header>
            <Divider />
            <TaskInfo color={task.color}>
                <TaskDate>{formatDate(task.todoAt)}</TaskDate>
                <TaskContent>
                    <TaskTitle>{task.title}</TaskTitle>
                </TaskContent>
            </TaskInfo>
            <Section>
                <SectionLabel>코멘트</SectionLabel>
                <CommentInput
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="코멘트를 입력하세요"
                />
            </Section>
            <Section>
                <SectionLabel>성과 제출</SectionLabel>
                <FileUpload>
                    <FileUploadLabel as="label" htmlFor="file-upload">파일을 업로드해주세요</FileUploadLabel>
                    <ExplainFileUpload>.pdf, .txt 파일 업로드 가능(파일 1개당 10MB 이하)</ExplainFileUpload>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange} // 파일 선택 이벤트 핸들러
                    />
                    {file && <span>업로드된 파일: {file.name}</span>}
                </FileUpload>
            </Section>
            <Section>
                <CheckboxWrapper>
                    <SectionLabel>퀴즈 생성 여부</SectionLabel>
                    <Checkbox
                        type="checkbox"
                        checked={quizEnabled}
                        onChange={() => setQuizEnabled(!quizEnabled)}
                    />
                </CheckboxWrapper>
            </Section>
            <SubmitButton onClick={handleSubmit}>성과 제출하기</SubmitButton>
        </Wrapper>
    );
};

// 스타일 코드는 그대로 유지
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
    min-width: 310px;
    max-width: 460px;
    padding: 24px;
    border-radius: 20px;
    background: #fff;
    gap: 22px;
`;

const Header = styled.div`
    display: flex;
    // justify-content: space-between;
    gap: 12px;
    align-items: center;
    width: 100%;
`;

const Title = styled(T6)``;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #d4d6eb;
`;

const TaskInfo = styled.div<{color:string}>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    background-color: ${({ color }) => color};  /* task.color 를 사용 */
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const TaskContent = styled.div`
    display: flex;
    flex-direction: column; /* 수직 정렬 */
    justify-content: center;
    flex: 1;
    gap: 4px;
`;

const TaskDate = styled(B6)`
    background: #f0f0f0;
    padding: 4px 8px;
    border-radius: 4px;
`;

const TaskTitle = styled(SubT1)``;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const SectionLabel = styled(T7)`
    color: #6373FF;
`;

const CommentInput = styled.textarea`
    display: flex;
    height: 240px;
    width: 100%;
    //min-width: 238px;
    //max-width: 388px;
    padding: 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    border-radius: 4px;
    background: ${({ theme }) => theme.colors.coolGray10 || "#F5F5FA"};
    border: none;
    outline: none;
    resize: none; /* 사용자가 크기 조정 못하도록 */
    font-size: 16px; /* 폰트 크기 조정 */
    line-height: 1.5; /* 줄 간격 설정 */

    &::placeholder {
        color: ${({ theme }) => theme.colors.warmGray2 || "#999999"}; /* placeholder 색상 */
    }
`;

const FileUpload = styled.div`
    display: flex;
    height: 160px;
    width: 100%;
    //min-width: 238px;
    //max-width: 388px;
    padding: 59px 62px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border-radius: 4px;
    border: 1px dashed ${({ theme }) => theme.colors.primary || "#5F74FF"}; /* 대시 보더 */
    

    input {
        display: none;
    }

    span {
        margin-top: 10px;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.coolGray2 || "#888888"};
    }
`;

const FileUploadLabel = styled(B5)`
    color: #2D2D2D;
    cursor: pointer;
    text-align: center;
`;

const ExplainFileUpload = styled(Cap2)`
    color: ${({ theme }) => theme.colors.warmGray2 || "#828282"};
`;

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Checkbox = styled.input`
    width: 20px; /* 기본 너비 */
    height: 20px; /* 기본 높이 */
    margin : 0;
    transform: scale(1.0); /* 크기 조정 */
    cursor: pointer; /* 클릭 가능한 커서 */
`;

const SubmitButton = styled(T6).attrs({as : "button"})`
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 8px;
    background: #6373FF;
    color: white;
    cursor: pointer;
`;
