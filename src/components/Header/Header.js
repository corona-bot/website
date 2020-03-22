import React from "react";
import { Link } from "react-router-dom";
import Bund from "../Logo/Bund";
import LangSwitch from "../LangSwitch/LangSwitch";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Bund />
      </Link>
      <LangSwitch />
    </HeaderWrapper>
  );
}

export default Header;
