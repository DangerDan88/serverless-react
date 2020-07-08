import React from "react";
import { useScore } from "../context/ScoreContext";
import { StyledLinkButton } from "../styled/NavBar";
// page components get access to a history object where you can push users to different pages.
export default function GameOver({ history }) {
  const [score] = useScore();

  if (score === -1) {
    history.pushState("/");
  }
  return (
    <div>
      <h1>GameOver!</h1>
      <p>{score}</p>
      <StyledLinkButton to="/">Go home</StyledLinkButton>
      <StyledLinkButton to="/game">Play again</StyledLinkButton>
    </div>
  );
}
