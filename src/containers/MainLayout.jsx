/* eslint-disable */
import React from "react";
import styled from "styled-components/macro";
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

export default MainLayout;
