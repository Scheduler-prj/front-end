import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  padding: 4.5% 3.17%;
  border-radius: 24px;
  background-color: #fff;
  margin-right: 1.95%;
`;

export const QuizBtn = styled.button<{ selected: boolean }>`
  text-align: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.coolGray2};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.coolGray6 : theme.colors.coolGray9};
  border: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.colors.coolGray5}` : "none"};

  &:active {
    background-color: ${({ theme }) => theme.colors.coolGray6};
  }

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.coolGray6 : theme.colors.coolGray8};
  }
`;
