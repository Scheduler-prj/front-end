import React from "react";
import { TodayQuiz } from "./components/todayQuiz/\bTodayQuiz";
import { QuizAnalysis } from "./components/quizAnalysis/QuizAnalysis";
import * as S from "./style";
import { SubAccomplish } from "./components/subAccomplish/SubAccomplish";



export const DashboardPage = () => {
    return (
       <>
        <S.CommonBackground>
            <S.DashWrapper>
                <S.DashContainer>
                    <TodayQuiz></TodayQuiz>
                    <div>2</div>
                    <QuizAnalysis></QuizAnalysis>
                    <SubAccomplish></SubAccomplish>
                </S.DashContainer>
            </S.DashWrapper>
        </S.CommonBackground>
       </>
    );
};