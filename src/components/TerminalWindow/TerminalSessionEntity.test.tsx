import React from "react";
import { render } from "@testing-library/react";
import TerminalSessionEntity from "./TerminalSessionEntity";
import { generateNewCommand } from "../../containers/TerminalWindow/commandsReducer";
import { onRunCommand } from "../../containers/TerminalWindow/actions";

function getProps() {
  return {
    _id: Date.now(),
    commands: [generateNewCommand()],
    onRunCommand,
  };
}

describe("<TerminalSessionEntity />", () => {
  let props: any;

  beforeEach(() => {
    props = getProps();
  });

  it("should render correctly", () => {
    const { container } = render(<TerminalSessionEntity {...(props as any)} />);
    const terminalSession = container.querySelector(
      '[data-test="terminal-session-entity"]'
    );

    expect(terminalSession).toBeInTheDocument();
  });

  it("should have at least one command", () => {
    const { container } = render(<TerminalSessionEntity {...(props as any)} />);
    const terminalSessionCommand = container.querySelector(
      '[data-test="terminal-session-command"]'
    );

    const { commands } = props;
    expect(commands.length).toBe(1);
    expect(terminalSessionCommand).toBeInTheDocument();
  });
});
