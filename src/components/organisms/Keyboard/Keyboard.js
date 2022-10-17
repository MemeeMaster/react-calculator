import React from "react";
import { KeyboardBody } from "./Keyboard.styles";
import ButtonRow from "../../molecules/ButtonRow/ButtonRow";
import keyboard from "../../../data/data";

const Keyboard = ({ onClick }) => {
  return (
    <KeyboardBody onClick={onClick}>
      <ButtonRow keys={keyboard.firstRow} />
      <ButtonRow keys={keyboard.secondRow} />
      <ButtonRow keys={keyboard.thirdRow} />
      <ButtonRow keys={keyboard.fourthRow} />
      <ButtonRow keys={keyboard.fifthRow} />
      <ButtonRow keys={keyboard.sixthRow} />
    </KeyboardBody>
  );
};

export default Keyboard;
