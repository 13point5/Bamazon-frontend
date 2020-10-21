import React from "react";

import { Container, Frame, FeatureImage } from "components/Deals";
import { Row } from "components/Grid";
import { SingleDealCard, MultiDealCard } from "containers/DealCard";

import { dealsData } from "fixtures/deals";

export default function Deals() {
  const getCards = () => {
    const dealCards = [];

    const dealCount = dealsData.length;

    for (let i = 0; i < dealCount; i += 4) {
      const dealSlice = dealsData.slice(i, i + 4);

      dealCards.push(
        <Row padding="0 20px" margin="0 0 20px 0">
          {dealSlice.map((deal) =>
            deal.type === "single" ? (
              <SingleDealCard deal={deal} key={deal.id} />
            ) : (
              <MultiDealCard deal={deal} key={deal.id} />
            )
          )}
        </Row>
      );
    }

    return dealCards;
  };

  return (
    <Container>
      <Frame>
        <FeatureImage src="images/deals/features/deals_feature_1.jpg" />

        {getCards()}
      </Frame>
    </Container>
  );
}
