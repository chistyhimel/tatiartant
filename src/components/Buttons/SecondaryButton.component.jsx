import React from "react";
import { SecondaryButtonContainer } from "./Buttons.style";

const SecondaryButton = ({ children }) => {
  return (
    <SecondaryButtonContainer>
      <a href="#">
        <span> {children}</span>
      </a>
    </SecondaryButtonContainer>
  );
};

export default SecondaryButton;
