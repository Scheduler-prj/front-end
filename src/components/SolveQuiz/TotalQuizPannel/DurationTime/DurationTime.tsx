import { useEffect, useState } from "react";

import { B2, T6 } from "../../../../styles/Typography";
import { theme } from "../../../../styles/theme";
import * as S from "./style";

export const DurationTime = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { minutes, seconds } = prevTime;

        if (seconds === 59) {
          return { minutes: minutes + 1, seconds: 0 };
        } else {
          return { minutes, seconds: seconds + 1 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: { minutes: number; seconds: number }) => {
    const { minutes, seconds } = time;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <S.TotalDuration>
      <T6 style={{ color: theme.colors.coolGray2 }}>{"총 소요시간"}</T6>
      <B2 style={{ color: theme.colors.primary }}>{formatTime(time)}</B2>
    </S.TotalDuration>
  );
};
