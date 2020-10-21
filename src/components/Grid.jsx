import styled from "styled-components/macro";

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
