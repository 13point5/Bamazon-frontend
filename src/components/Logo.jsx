import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { HeaderAction } from "styles/header";

const LogoImg = styled.img`
  margin-top: 10px;
  width: 100px;
  object-fit: contain;
`;

const ImgLink = styled(NavLink)`
  ${HeaderAction}
`;

export default function Logo() {
  return (
    <ImgLink to="/">
      <LogoImg src="images/logo.png" alt="amazon logo" />
    </ImgLink>
  );
}
