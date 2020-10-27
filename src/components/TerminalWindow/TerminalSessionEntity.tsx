import React from "react";

import { TerminalSessionEntityWrapper } from "./styles";
import Command from "./Command";
import { ISession } from "../../interfaces";

const TerminalSessionEntity: React.FC<ISession> = ({
  commands,
  onRunCommand,
}) => {
  return (
    <TerminalSessionEntityWrapper data-test="terminal-session-entity">
      {commands.map((comm, index) => {
        const disabled = index !== commands.length - 1;

        return (
          <Command
            key={comm._id}
            {...comm}
            inputDisabled={disabled}
            onExecuteCommand={onRunCommand}
          />
        );
      })}
    </TerminalSessionEntityWrapper>
  );
};

export default React.memo(TerminalSessionEntity);
