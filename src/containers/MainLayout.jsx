import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ChildrenPropTypes from "propTypes/Children";
import { Header } from "containers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function MainLayout({ children, backgroundColor }) {
  return (
    <Container style={{ backgroundColor }}>
      <Header />
      {children}
    </Container>
  );
}

MainLayout.defaultProps = {
  backgroundColor: "white",
};

MainLayout.propTypes = {
  children: ChildrenPropTypes.isRequired,
  backgroundColor: PropTypes.string,
};

export default MainLayout;
