import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/TerminalWindow/actions";
import { ISession } from "../../interfaces";
import { TerminalSessionsWrapper } from "./styles";
import TerminalSessionEntity from "./TerminalSessionEntity";

type IProps = Pick<ISession, "commands" | "onRunCommand">;

const defaultState = () => [{ _id: Date.now() }];
const MAX_SESSSIONS_AMOUNT = 6;

const TerminalWindow: React.FC<IProps> = (props) => {
  const { commands, onRunCommand } = props;
  const [sessions, setSessions] = useState(defaultState());

  function onAddNewSession() {
    const updatedSessions = sessions.concat(defaultState());
    setSessions(updatedSessions);
  }

  function onRemoveSession(_id: number) {
    const updatedSessions = sessions.filter((session) => session._id !== _id);
    setSessions(updatedSessions);
  }

  const isMaxSessionsNumberReached = sessions.length === MAX_SESSSIONS_AMOUNT;

  return (
    <TerminalSessionsWrapper itemsCount={sessions.length}>
      {sessions.map((session, index) => {
        const isStretched =
          sessions.length !== 1 &&
          sessions.length % 2 === 1 &&
          index === sessions.length - 1;

        return (
          <TerminalSessionEntity
            _id={session._id}
            key={session._id}
            index={index + 1}
            isStretched={isStretched}
            sessionsTotalCount={sessions.length}
            commands={commands}
            onRunCommand={onRunCommand}
            onAddNewSession={
              isMaxSessionsNumberReached ? () => {} : onAddNewSession
            }
            onRemoveSession={onRemoveSession}
          />
        );
      })}
    </TerminalSessionsWrapper>
  );
};

const mapStateToProps = (state: any) => ({ commands: state.commands });
const mapDispatchToProps = { ...actions };

export default connect<{}, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(TerminalWindow) as any;
