import SolveQuizMain from "../../components/SolveQuiz/SolveQuizMain";
import * as S from "./style";

export default function SolveQuiz() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <S.SideBar />
      <SolveQuizMain />
    </div>
  );
}
