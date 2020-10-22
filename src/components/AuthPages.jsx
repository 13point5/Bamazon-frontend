import styled from "styled-components/macro";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;
`;

export const FormCard = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;

  padding: 1rem 2rem;

  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 28px;
    font-weight: normal;
  }
`;

export const FormContainer = styled.form`
  margin: 15px 0;
  width: 100%;
`;

export const FormElement = styled.div`
  margin-bottom: 1rem;

  label {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    margin-top: 5px;
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 7px 10px;
    width: 100%;

    &:hover {
      border-color: black;
    }

    &:focus {
      border-color: orange;
    }
  }
`;

export const Extra = styled.span`
  font-size: 12px;
  color: grey;
  line-height: 1.5;
`;
