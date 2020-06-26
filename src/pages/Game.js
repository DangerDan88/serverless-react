import React, { useState, useEffect } from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../styled/Game";
import { Strong } from "../styled/RandomStyles";

export default function Game() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      setScore((previousScore) => previousScore + 1);
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, [score]);

  return (
    <StyledGame>
      <StyledScore>
        Score:<Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Timer: <Strong>00: 000</Strong>
      </StyledTimer>
    </StyledGame>
  );
}
