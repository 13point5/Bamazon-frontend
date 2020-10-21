import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Card = styled.div`
  padding: 10px 20px;

  background: #fff;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const Extra = styled(NavLink)`
  font-size: 13px;
`;

export const ChildrenContainer = styled.div`
  height: 100%;

  img {
    align-self: center;
    width: 100%;
    object-fit: contain;
  }
`;

export const QuadrantCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 12px;
  }
`;
