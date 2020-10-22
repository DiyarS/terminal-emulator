import React from "react";
import { Wrapper, MenuContainer, MenuItem } from "./styles";

const menuItems = ["File", "Edit", "View", "Search", "Terminal", "Help"];

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      {menuItems.map((item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ))}
    </MenuContainer>
  );
};

export default () => (
  <Wrapper>
    <Menu />
  </Wrapper>
);
