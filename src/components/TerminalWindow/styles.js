import styled from "styled-components";

export const TerminalSessionEntityWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: #000;
  overflow-y: scroll;
`;

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
