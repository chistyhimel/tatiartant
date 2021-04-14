import React from "react";
import { TertiaryButtonContainer } from "./Buttons.style";

const TertiaryButton = ({ children }) => {
  return (
    <TertiaryButtonContainer>
      <a href="#">
        <span> {children}</span>
      </a>
    </TertiaryButtonContainer>
  );
};

export default TertiaryButton;
