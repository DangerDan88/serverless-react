import React from "react";
import {
  StyledNavBar,
  StyledNavBrand,
  StyledNavItems,
  StyledLinkButton,
} from "../styled/NavBar";
import { Accent } from "../styled/RandomStyles";

export default function NavBar() {
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
          <StyledLinkButton to="/highscores">Scores</StyledLinkButton>
        </li>
      </StyledNavItems>
    </StyledNavBar>
  );
}
