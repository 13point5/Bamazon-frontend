import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background: white;
  display: flex;
  gap: 3rem;
  align-items: start;

  height: 300px;

  margin: 20px 0;
  padding: 20px;

  border-top: 1px solid #ddd;
`;

export const LeftFrame = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const RatingBox = styled.div`
  display: flex;
  gap: 2px;
`;

export const ActionGroup = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const LightText = styled.span`
  font-size: 14px;
  color: rgb(86, 89, 89);
`;

export const Image = styled.img``;

export const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Link = styled(NavLink)`
  color: black;

  &:hover {
    color: rgb(177, 39, 4);
  }
`;

export const Title = styled.h3`
  font-size: 22px;
`;

export const OrderCount = styled.span`
  color: #007185;
`;

export const Price = styled.span`
  color: rgb(177, 39, 4);
  font-size: 21px;
  font-weight: 400;
`;

export const Delivery = styled.span`
  font-weight: 500;
`;

export const Button = styled.button`
  background: #f0c14b;

  padding: 10px;
  width: 100px;

  font-weight: bold;

  &:hover {
    background: #a88b40;
  }

  &:focus,
  &:active {
    border: 1px solid black;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
color: #0066C0;
background: none;
font-size: 12px;

padding: 0 10px;
border-right: 1px solid #333;

&:hover {
  color: color: rgb(177, 39, 4);
}

&:first-child {
  padding-left: 0;
}

&:last-child {
  border-right: none;
}
`;
