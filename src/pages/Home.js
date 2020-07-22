import React from "react";
import { Accent, StyledTitle } from "../styled/RandomStyles";
import CTA from "../styled/CTA";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <StyledTitle>Ready to Type</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>s</Accent> to start playing
      </CTA>
      <br />
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}
