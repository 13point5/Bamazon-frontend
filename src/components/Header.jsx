import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";

import { HeaderAction } from "styles/header";

export const Container = styled.div`
  height: 4rem;
  background-color: rgb(18, 25, 33);

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;

  position: sticky;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  height: 100%;

  ${HeaderAction}
`;

export const ActionButton = styled(NavLink)`
  height: 100%;
  background: transparent;

  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;

  ${HeaderAction}

  color: white;

  span {
    font-size: 14px;
    font-weight: 700;
  }

  span:first-child {
    font-size: 12px;
    font-weight: normal;
  }
`;

export const CartButton = styled(NavLink)`
  height: 100%;

  display: flex;
  gap: 1rem;
  align-items: center;

  ${HeaderAction}

  color: white;

  span {
    color: orange;
    font-size: 1.35rem;
    font-weight: bold;
  }
`;
