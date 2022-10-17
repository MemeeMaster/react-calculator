import React, { useState } from "react";
import Screen from "../../atoms/Screen/Screen";
import Keyboard from "../Keyboard/Keyboard";
import { CalcBody } from "./Calc.styles";
import Title from "../../atoms/Title/Title";
import { evaluate } from "mathjs";

export const Calc = () => {
  const [screen, setScreen] = useState("");

  const handleClick = (e) => {
    switch (e.target.innerHTML) {
      case "•":
        return;
      case "C":
      case "CE":
        setScreen("");
        break;
      case "R":
        setScreen(screen.slice(0, -1));
        break;
      case "=":
        const result = evaluate(screen).toFixed(2).toString();
        setScreen(result);
        break;
      default:
        setScreen(screen + e.target.innerHTML);
        break;
    }
  };

  return (
    <CalcBody>
      <Title title="Calculator 1.0" />
      <Screen screenState={screen} />
      <Keyboard onClick={handleClick} />
    </CalcBody>
  );
};

export default Calc;
