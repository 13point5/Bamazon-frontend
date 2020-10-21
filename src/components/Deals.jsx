import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1500px;
`;

export const Frame = styled.div``;

export const FeatureImage = styled.img`
  width: 100%;
  object-fit: cover;

  z-index: -1;
  margin-bottom: -300px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  @media (max-width: 1300px) {
    margin-bottom: -250px;
  }
`;
