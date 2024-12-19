import { useState } from "react";

import iconQ from "../../../assets/icon/solveQuiz/iconQ.svg";
import { B2, T2, T6 } from "../../../styles/Typography";
import * as S from "./style";

export default function QuizContent() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (id: number | null) => {
    setSelected(id);
  };
  return (
    <S.Wrapper>
      {/* 이것도 컴포넌트 - 헤더 로 뺄까? */}
      <T6>{"문항 10 / 15"}</T6>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginTop: "72px",
          marginBottom: "56px",
        }}
      >
        <img src={iconQ} />
        <T2>{"퀴즈 내용"}</T2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          marginLeft: "58px",
        }}
      >
        {[1, 2, 3, 4, 5].map((id) => (
          <div
            key={id}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              width: "calc(50% - 16px)",
            }}
          >
            <S.QuizBtn
              onClick={() => handleSelect(id)}
              selected={selected === id}
            >
              <T6>{id}</T6>
            </S.QuizBtn>
            <B2>{`문항 ${id}`}</B2>
          </div>
        ))}
      </div>
    </S.Wrapper>
  );
}
