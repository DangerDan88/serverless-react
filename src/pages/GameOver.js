import React, { useEffect, useState } from "react";
import { useScore } from "../context/ScoreContext";
import { StyledLinkButton } from "../styled/NavBar";
import { StyledCharacter } from "../styled/Game";
import { StyledTitle } from "../styled/RandomStyles";
import { useAuth0 } from "@auth0/auth0-react";
// page components get access to a history object where you can push users to different pages.
export default function GameOver({ history }) {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (score === -1) {
    history.push("/");
  }

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const token = await getAccessTokenSilently();
        const options = {
          method: "POST",
          body: JSON.stringify({ Score: score }),
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        // console.log(options);
        const res = await fetch("/.netlify/functions/SaveHighScore", options);
        const data = await res.json();
        if (data.id) {
          setScoreMessage("congrats you got a high score");
        } else {
          setScoreMessage("sorry no high score for you");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (isAuthenticated) {
      saveHighScore();
    }
  }, [score, isAuthenticated]);

  return (
    <div>
      <StyledTitle>GameOver!</StyledTitle>
      <StyledCharacter>{score}</StyledCharacter>
      <h2>{scoreMessage}</h2>
      {!isAuthenticated && <h2>You should login or sign up to get a score</h2>}
      <StyledLinkButton to="/">Go home</StyledLinkButton>
      <br></br>
      <StyledLinkButton to="/game">Play again</StyledLinkButton>
    </div>
  );
}
