import styled from "styled-components";

export const TotalQuizPannelWrapper = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.coolGray9};
  padding: 2.19% 1.95%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const QuizNumberWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 0px 4.42%;
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

export const CheckAnswer = styled.div<{ isChecked: boolean }>`
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.coolGray8};
  padding: 21px 16.6%;
  border-radius: 10px;
  width: 100%;
  text-align: center;
`;
