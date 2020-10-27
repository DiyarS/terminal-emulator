import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/TerminalWindow/actions";
import { ISession } from "../../interfaces";
import TerminalSessionEntity from "./TerminalSessionEntity";

type IProps = Pick<ISession, "commands" | "onRunCommand">;

const TerminalWindow: React.FC<IProps> = (props) => {
  const { commands, onRunCommand } = props;
  const [sessions] = useState([{ _id: Date.now() }]);

  return (
    <>
      {sessions.map((session) => (
        <TerminalSessionEntity
          _id={session._id}
          key={session._id}
          commands={commands}
          onRunCommand={onRunCommand}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state: any) => ({ commands: state.commands });
const mapDispatchToProps = { ...actions };

export default connect<{}, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(TerminalWindow) as any;
