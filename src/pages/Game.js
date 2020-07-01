import React, { useState, useEffect } from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../styled/Game";
import { Strong } from "../styled/RandomStyles";

export default function Game({ history }) {
  const [score, setScore] = useState(0);
  const MAX_SECONDS = 5;
  const [ms, setMs] = useState(999);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  useEffect(() => {
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);
    return () => clearInterval(interval);
  }, []);

  const updateTime = (startTime) => {
    const endTime = new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    const formattedMsStr = ("0000" + msPassedStr).slice(-5);
    const updatedSeconds =
      MAX_SECONDS - parseInt(formattedMsStr.substring(0, 2)) - 1;
    const updatedMs =
      1000 - parseInt(formattedMsStr.substring(formattedMsStr.length - 3));
    setSeconds(addLeadingZeros(updatedSeconds, 2));
    setMs(addLeadingZeros(updatedMs, 3));
  };

  const addLeadingZeros = (num, length) => {
    let zeros = "";
    for (let i = 0; i < length; i++) {
      zeros += "0";
    }
    return (zeros + num).slice(-length);
  };

  useEffect(() => {
    if (seconds <= -1) {
      history.push("/gameover");
    }
  }, [seconds, ms, history]);

  const keyUpHandler = (e) => {};

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return (
    <StyledGame>
      <StyledScore>
        Score:<Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Timer:{" "}
        <Strong>
          {seconds}:{ms}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
}
