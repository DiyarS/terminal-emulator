import React from "react";
import { ISession } from "../../interfaces";
import { TerminalSessionHeader, SessionHeaderTitle } from "./styles";

type IProps = Pick<
  ISession,
  "_id" | "index" | "onAddNewSession" | "onRemoveSession"
>;

const TerminalSessionHeaderComponent: React.FC<IProps> = ({
  _id,
  index,
  onAddNewSession,
  onRemoveSession,
}) => {
  function handleRemoveSessionClick() {
    onRemoveSession(_id);
  }

  return (
    <TerminalSessionHeader>
      <SessionHeaderTitle>
        Session: {index} <button onClick={handleRemoveSessionClick}>x</button>
      </SessionHeaderTitle>
      <button onClick={onAddNewSession}>+</button>
    </TerminalSessionHeader>
  );
};

export default TerminalSessionHeaderComponent;
