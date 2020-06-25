import React from "react";
import { Accent, StyledTitle } from "../styled/RandomStyles";
import CTA from "../styled/CTA";

export default function Home() {
  return (
    <div>
      <StyledTitle>Ready to Type</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>s</Accent> to start playing
      </CTA>
    </div>
  );
}
