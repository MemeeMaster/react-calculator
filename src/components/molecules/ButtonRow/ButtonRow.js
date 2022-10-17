import React from "react";
import Button from "../../atoms/Button/Button";
import { Wrapper } from "./ButtonRow.styles";

const ButtonRow = (props) => {
  const [key1, key2, key3, key4] = props.keys;
  return (
    <Wrapper>
      <Button value={key1} />
      <Button value={key2} />
      <Button value={key3} />
      <Button value={key4} />
    </Wrapper>
  );
};

export default ButtonRow;
