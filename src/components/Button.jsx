import styled from "styled-components/macro";

const Button = styled.button`
  background: #f0c14b;

  padding: 10px;
  width: ${(props) => props.width || "fit-content"};
  border-radius: 3px;

  font-weight: bold;

  &:hover {
    background: #a88b40;
  }

  &:focus,
  &:active {
    border: 1px solid black;
  }

  :disabled {
    background: #a88b40;
    pointer-events: none;
  }
`;

export default Button;
