import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 80%;
  margin: 20px auto;
  display: flex;
  gap: 3rem;
`;

export const CartItemFrame = styled.div``;

export const CheckoutFrame = styled.div`
  border-radius: 10px;
  border: 1px solid #dddddd;

  background-color: #f3f3f3;

  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 10px 20px;

  span {
    font-size: 20px;
  }
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  background: #f0c14b;

  padding: 10px;
  // width: 100px;

  font-weight: bold;

  &:hover {
    background: #a88b40;
  }

  &:focus,
  &:active {
    border: 1px solid black;
  }
`;
