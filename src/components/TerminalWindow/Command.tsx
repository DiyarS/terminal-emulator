import React, { memo, useState, useEffect, useRef } from "react";
import autosize from "autosize";
import { ICommand, IBackendResponse } from "../../interfaces";
import { CommandWrapper, CommandTitle, CommandText } from "./styles";

interface IProps extends ICommand {
  inputDisabled: boolean;
  onExecuteCommand: (command: ICommand) => Promise<IBackendResponse>;
}

const Command: React.FC<IProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>();
  const [text, setText] = useState<string>(props.command);

  useEffect(() => {
    if (!props.inputDisabled && inputRef.current) {
      inputRef.current.focus();
      autosize(inputRef.current);
    }
  });

  useEffect(() => {
    setText(props.command);
  }, [props.command]);

  function commandTextChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setText(event.target.value);
  }

  function keypressHandler(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      const command: ICommand = {
        _id: props._id,
        session_id: props.session_id,
        command: text,
      };

      props.onExecuteCommand(command);
    }
  }

  return (
    <CommandWrapper data-test="terminal-session-command">
      <CommandTitle htmlFor={props._id}>user@user-Machine-name:</CommandTitle>
      <CommandText
        id={props._id}
        ref={inputRef}
        value={text}
        type="text"
        disabled={props.inputDisabled}
        onChange={commandTextChangeHandler}
        onKeyPress={keypressHandler}
      />
    </CommandWrapper>
  );
};

export default memo(Command);
