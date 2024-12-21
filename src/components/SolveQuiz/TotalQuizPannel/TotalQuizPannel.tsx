import { useState } from "react";
import { B2, B4, T5, T6, T7 } from "../../../styles/Typography";
import * as S from "./style";
import { theme } from "../../../styles/theme";
import Column from "../../../styles/Layouts/Column";
import Row from "../../../styles/Layouts/Row";
import { SolveQuizStore } from "../SolveQuizStore";

//받아야할 변수들
//문제 개수
//문제에 따른 푼퀴즈 / 맞은퀴즈 / 안푼퀴즈
export const TotalQuizPannel = () => {
  const { isChecked } = SolveQuizStore();

  return (
    <S.TotalQuizPannelWrapper>
      {/* 소요시간 */}
      <S.TotalDuration>
        <T6 style={{ color: theme.colors.coolGray2 }}>{"총 소요시간"}</T6>
        <B2 style={{ color: theme.colors.primary }}>{"11:05"}</B2>
      </S.TotalDuration>
      {/* 푼문제 번호 */}
      <S.QuizNumberWrapper>
        {[1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8, 9, 9, 10].map((number) => (
          <S.QuizNumber>
            <T7 style={{ color: "#fff" }}>{number}</T7>
          </S.QuizNumber>
        ))}
      </S.QuizNumberWrapper>
      {/* 푼 퀴즈 및 맞은 퀴즈 */}
      <Column gap={8} style={{ paddingLeft: "5.72%" }}>
        <Row gap={8} style={{ color: theme.colors.coolGray2 }}>
          <B2>{"푼 퀴즈 수"}</B2>
          <T5>{"40"}</T5>
        </Row>
        <Row>
          <B2 style={{ color: theme.colors.coolGray2 }}>{"맞은 퀴즈 수"}</B2>
          <T5 style={{ color: theme.colors.primary }}>{"31"}</T5>
        </Row>
      </Column>
      {/* 정답 확인하기 */}
      <Column
        gap={20}
        horizonAlign="center"
        verticalAlign="center"
        style={{ width: "100%" }}
      >
        <S.CheckAnswer isChecked={isChecked}>
          <T6
            style={{
              color: isChecked ? "#fff" : theme.colors.coolGray4,
              cursor: isChecked ? "pointer" : "not-allowed",
            }}
          >
            {isChecked ? "다음 문제" : "정답 확인하기"}
          </T6>
        </S.CheckAnswer>
        <B4 style={{ color: theme.colors.coolGray4, cursor: "pointer" }}>
          {"다음에 이어서 풀기"}
        </B4>
      </Column>
    </S.TotalQuizPannelWrapper>
  );
};
