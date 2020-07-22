import React from "react";
import {
  StyledNavBar,
  StyledNavBrand,
  StyledNavItems,
  StyledLinkButton,
} from "../styled/NavBar";
import { Accent } from "../styled/RandomStyles";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <StyledNavBar>
      {" "}
      <StyledNavBrand>
        <StyledLinkButton to="/">
          Learn.Build.<Accent>Type.</Accent>
        </StyledLinkButton>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLinkButton to="/home">Home</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/highscores">HighScores</StyledLinkButton>
        </li>
        {/* this is a react es6 short hand where you put what you want to render if condition is met right under stated condition */}
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
        {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
      </StyledNavItems>
    </StyledNavBar>
  );
}
