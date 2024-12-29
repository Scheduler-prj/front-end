import React from "react";
import { TodayQuiz } from "./components/todayQuiz/\bTodayQuiz";
import { QuizAnalysis } from "./components/quizAnalysis/QuizAnalysis";
import * as S from "./style";



export const DashboardPage = () => {
    return (
       <>
        <S.CommonBackground>
            <S.DashWrapper>
                <S.DashContainer>
                    <TodayQuiz></TodayQuiz>
                    <div>2</div>
                    <QuizAnalysis></QuizAnalysis>
                    <div>4</div>
                </S.DashContainer>
            </S.DashWrapper>
        </S.CommonBackground>
       </>
    );
};