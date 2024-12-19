import styled from "styled-components";

export const TotalQuizPannelWrapper = styled.div`
  width: 23.4%;
  background-color: ${({ theme }) => theme.colors.coolGray9};
  padding: 36px 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const TotalDuration = styled.div`
  background-color: ${({ theme }) => theme.colors.coolGray8};
  width: fit-content;
  padding: 12px 18px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left:auto;
`;

export const QuizNumberWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 0px 17px;
`;

export const QuizNumber = styled.div`
  background-color: ${({ theme }) => theme.colors.coolGray4};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CheckAnswer = styled.div<{ isChecked: boolean }>`
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.coolGray8};
  padding: 24px 64px;
  border-radius: 10px;
`;
export const Row = styled.div`
  display: flex;
  gap: 8px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
