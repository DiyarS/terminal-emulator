import styled from "styled-components";

function calcColumnsTotal(itemsTotal) {
  if (itemsTotal === 1) return 1;
  if (itemsTotal <= 4) return 2;

  return 3;
}

export const TerminalSessionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => calcColumnsTotal(props.itemsCount)},
    1fr
  );
  grid-template-rows: repeat(${(props) => (props.itemsCount < 3 ? 1 : 2)}, 1fr);
`;

export const TerminalSessionEntityWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: #000;
  overflow-y: scroll;

  &.stretched-vertically {
    border: 1px solid green;
    grid-row: 1/3;
    grid-column: ${(props) => (props.sessionsCount < 4 ? 2 : 3)} / 3;
  }
`;

export const TerminalSessionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SessionHeaderTitle = styled.div`
  font-weight: bold;
  font-style: italic;
  color: #ff6b00;
  width: 100%;
  border: 1px solid;
`;

export const CommandsWrapper = styled.div``;

export const CommandWrapper = styled.div`
  position: relative;
  display: flex;
  color: #fff;
  margin: 5px 0;
`;

export const CommandTitle = styled.label`
  position: absolute;
  display: block;
  white-space: nowrap;
  font-weight: bold;
  width: 14em;
  z-index: 1;
`;

export const CommandText = styled.textarea`
  position: relative;
  width: 100%;

  background: transparent;
  border: none;
  resize: none;
  box-shadow: none;
  outline: none;
  overflow: hidden;

  color: #fff;
  font-family: inherit;
  font-size: 1em;
  text-indent: 14em;
`;
