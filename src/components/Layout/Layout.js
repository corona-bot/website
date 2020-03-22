import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import PropTypes from "prop-types";
import MenuBar from "../MenuBar/MenuBar";
import Header from "../Header/Header";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  background: #fff;
`;

function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm">
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
        <MenuBar />
      </Container>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Layout;
