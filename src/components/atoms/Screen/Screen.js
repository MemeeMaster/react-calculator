import React from "react";
import { StyledScreen } from "./Screen.styles";

export const Screen = ({ screenState }) => {
  return <StyledScreen>{screenState}</StyledScreen>;
};

export default Screen;
