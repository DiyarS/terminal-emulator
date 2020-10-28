import React from "react";
import { TerminalSessionEntityWrapper } from "./styles";
import TerminalSessionHeader from "./TerminalSessionHeader";
import Command from "./Command";
import { ISession } from "../../interfaces";

const TerminalSessionEntity: React.FC<ISession> = ({
  _id,
  index,
  commands,
  isStretched,
  sessionsTotalCount,
  onRunCommand,
  onAddNewSession,
  onRemoveSession,
}) => {
  return (
    <TerminalSessionEntityWrapper
      data-test="terminal-session-entity"
      className={isStretched ? "stretched-vertically" : ""}
      sessionsCount={sessionsTotalCount}
    >
      <TerminalSessionHeader
        _id={_id}
        index={index}
        onAddNewSession={onAddNewSession}
        onRemoveSession={onRemoveSession}
      />
      {commands.map((comm, index) => {
        const disabled = index !== commands.length - 1;

        return (
          <Command
            key={comm._id}
            {...comm}
            session_id={_id}
            inputDisabled={disabled}
            onExecuteCommand={onRunCommand}
          />
        );
      })}
    </TerminalSessionEntityWrapper>
  );
};

export default React.memo(TerminalSessionEntity);
