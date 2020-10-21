/* eslint-disable */
import React from "react";

import { Row } from "components/Grid";
import {
  Card,
  Title,
  Extra,
  ChildrenContainer,
  QuadrantCard,
} from "components/DealCard";

function DealCard({ deal, children, ...restProps }) {
  return (
    <Card>
      <Title>{deal.title}</Title>
      <ChildrenContainer {...restProps}>{children}</ChildrenContainer>
      <Extra to={deal.extra.to}>{deal.extra.label}</Extra>
    </Card>
  );
}

function SingleDealCard({ deal }) {
  return (
    <DealCard deal={deal}>
      <img src={deal.imgPath} alt="card" />
    </DealCard>
  );
}

function MultiDealCard({ deal }) {
  return (
    <DealCard
      deal={deal}
      style={{
        alignSelf: "start",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Row>
        <QuadrantCard>
          <img src={deal.items[0].imgPath} alt="deal" />
          <span>{deal.items[0].label}</span>
        </QuadrantCard>
        <QuadrantCard>
          <img src={deal.items[1].imgPath} alt="deal" />
          <span>{deal.items[1].label}</span>
        </QuadrantCard>
      </Row>

      <Row>
        <QuadrantCard>
          <img src={deal.items[2].imgPath} alt="deal" />
          <span>{deal.items[2].label}</span>
        </QuadrantCard>
        <QuadrantCard>
          <img src={deal.items[3].imgPath} alt="deal" />
          <span>{deal.items[3].label}</span>
        </QuadrantCard>
      </Row>
    </DealCard>
  );
}

export { SingleDealCard, MultiDealCard };
