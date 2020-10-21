import React from "react";

import { Container, Frame, FeatureImage } from "components/Deals";
import { getGrid } from "components/Grid";
import { SingleDealCard, MultiDealCard } from "containers/DealCard";

import { dealsData } from "fixtures/deals";

export default function Deals() {
  const renderDealCards = () => {
    const dealCards = [];

    dealsData.forEach((deal) => {
      dealCards.push(
        deal.type === "single" ? (
          <SingleDealCard deal={deal} key={deal.id} />
        ) : (
          <MultiDealCard deal={deal} key={deal.id} />
        )
      );
    });

    return getGrid({
      items: dealCards,
      colCount: 4,
      rowProps: { padding: "0 20px", margin: "0 0 20px 0" },
    });
  };

  return (
    <Container>
      <Frame>
        <FeatureImage src="images/deals/features/deals_feature_1.jpg" />
        {renderDealCards()}
      </Frame>
    </Container>
  );
}
