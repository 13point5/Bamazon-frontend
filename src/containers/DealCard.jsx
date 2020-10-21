/* eslint-disable */
import React from "react";

import { getGrid } from "components/Grid";
import {
  Card,
  Title,
  Extra,
  ChildrenContainer,
  QuadrantCard,
} from "components/DealCard";
import { NavLink } from "react-router-dom";
import routes from "constants/routes";

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
      <NavLink to={deal.extra.to}>
        <img src={deal.imgPath} alt="card" />
      </NavLink>
    </DealCard>
  );
}

function MultiDealCard({ deal }) {
  const getQuadrants = () => {
    return deal.items.map((item) => (
      <QuadrantCard key={item.label}>
        <NavLink to={routes.PRODUCT_LIST}>
          <img src={item.imgPath} alt={item.label} />
        </NavLink>
        <span>{item.label}</span>
      </QuadrantCard>
    ));
  };

  return (
    <DealCard deal={deal}>
      {getGrid({
        items: getQuadrants(),
        colCount: 2,
        rowProps: {
          margin: "0 0 1rem 0",
        },
      })}
    </DealCard>
  );
}

export { SingleDealCard, MultiDealCard };
