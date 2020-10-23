import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";
import { HeaderAction } from "styles/header";

import Routes from "constants/Routes";

const LogoImg = styled.img`
  margin-top: 10px;
  width: 100px;
  object-fit: contain;
`;

const ImgLink = styled(NavLink)`
  ${HeaderAction}
`;

function Logo({ normal }) {
  return (
    <ImgLink to={Routes.HOME}>
      <LogoImg
        src={normal ? "/images/logo_normal.png" : "/images/logo.png"}
        alt="amazon logo"
      />
    </ImgLink>
  );
}

Logo.defaultProps = {
  normal: false,
};

Logo.propTypes = {
  normal: PropTypes.bool,
};

export default Logo;
