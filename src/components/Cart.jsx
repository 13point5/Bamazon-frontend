import styled from "styled-components/macro";
import colors from "styles/colors";

const { grey } = colors;

export const Container = styled.div`
  max-width: 80%;
  margin: 20px auto;
  display: flex;
  gap: 3rem;
`;

export const CartItemFrame = styled.div``;

export const CheckoutFrame = styled.div`
  border-radius: 10px;
  border: 1px solid ${grey.sm};

  background-color: ${grey.lg};

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
