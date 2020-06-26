import React from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../styled/Game";
import { Strong } from "../styled/RandomStyles";

export default function Game() {
  return (
    <StyledGame>
      <StyledScore>
        Score:<Strong>4</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Timer: <Strong>00: 000</Strong>
      </StyledTimer>
    </StyledGame>
  );
}
