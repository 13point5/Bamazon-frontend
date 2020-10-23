import React from "react";
import styled from "styled-components";

const Message = styled.h1`
  color: rgb(20, 100, 20);
  margin: 50px auto;
`;

export default function App() {
  return <Message>Your Order has been placed !</Message>;
}
