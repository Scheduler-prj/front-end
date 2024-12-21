import { QuizContent } from "./QuizContent/QuizContent";
import { TotalQuizPannel } from "./TotalQuizPannel/TotalQuizPannel";

import * as S from "./style";

export const SolveQuizMain = () => {
  return (
    <S.CommonBackground>
      <QuizContent />
      <TotalQuizPannel />
    </S.CommonBackground>
  );
};
