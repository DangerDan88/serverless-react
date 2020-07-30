import React, { useState, useEffect } from "react";
import { ScoresList, ScoreLI } from "../styled/HighScores";
import { StyledTitle } from "../styled/RandomStyles";

export default function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScore");
        const scores = await res.json();
        // console.log(scores);
        setHighScores(scores);
      } catch (err) {
        console.log(err);
      }
    };
    loadHighScores();
  }, []);
  return (
    <div>
      <StyledTitle>HighScores</StyledTitle>
      <ScoresList>
        {highScores.map((score, index) => (
          <ScoreLI key={score.id}>
            {index + 1}, {score.fields.Name} - {score.fields.Score}
          </ScoreLI>
        ))}
      </ScoresList>
    </div>
  );
}
