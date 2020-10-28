import React from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/TerminalWindow/actions";
import { ISession, ISessionEntity } from "../../interfaces";
import { TerminalSessionsWrapper } from "./styles";
import TerminalSessionEntity from "./TerminalSessionEntity";

type IMethods = Pick<
  ISession,
  "onRunCommand" | "onAddNewSession" | "onRemoveSession"
>;

interface IProps extends IMethods {
  sessions: Array<ISessionEntity>;
}

const MAX_SESSSIONS_AMOUNT = 6;

const TerminalWindow: React.FC<IProps> = (props) => {
  const { sessions, onAddNewSession, onRemoveSession, onRunCommand } = props;

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
            commands={session.commands}
            onRunCommand={onRunCommand}
            onAddNewSession={
              isMaxSessionsNumberReached ? () => {} : onAddNewSession
            }
            onRemoveSession={sessions.length > 1 ? onRemoveSession : () => {}}
          />
        );
      })}
    </TerminalSessionsWrapper>
  );
};

const mapStateToProps = (state: any) => ({ sessions: state.sessions });
const mapDispatchToProps = { ...actions };

export default connect<{ sessions: Array<ISessionEntity> }, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(TerminalWindow) as any;
