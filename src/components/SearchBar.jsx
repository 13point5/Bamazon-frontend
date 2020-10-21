import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBarContainer = styled.div`
  flex-grow: 1;
  display: flex;

  height: 40px;
  max-width: 80%;

  border: 2px solid transparent;
  border-radius: 5px;

  &:focus-within > * {
    border: 2px solid #f90;
  }
`;

const Input = styled.input`
  width: 100%;

  border-radius: 5px 0 0 5px;

  font-size: 1rem;
  padding: 7px 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background: rgb(243, 168, 71);
  color: rgb(52, 52, 51);

  border-radius: 0 5px 5px 0;

  width: 45px;
  font-size: 22px;
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <Input type="string" />
      <Button type="button">
        <FontAwesomeIcon icon="search" />
      </Button>
    </SearchBarContainer>
  );
}

export default SearchBar;
