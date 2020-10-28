import styled from "styled-components";
import { HeaderBg } from "../styles/colors";

export const Wrapper = styled.header`
  background: ${HeaderBg};
`;

export const MenuItem = styled.span`
  color: #fff;
  margin: 0.5em;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
