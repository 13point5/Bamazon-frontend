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
import Routes from "constants/Routes";
import DealPropTypes from "propTypes/Deal";
import ChildrenPropTypes from "propTypes/Children";

function DealCard({ deal, children }) {
  return (
    <Card>
      <Title>{deal.title}</Title>
      <ChildrenContainer>{children}</ChildrenContainer>
      <Extra to={deal.extra.to}>{deal.extra.label}</Extra>
    </Card>
  );
}

DealCard.propTypes = {
  deal: DealPropTypes.isRequired,
  children: ChildrenPropTypes.isRequired,
};

function SingleDealCard({ deal }) {
  return (
    <DealCard deal={deal}>
      <NavLink to={deal.extra.to}>
        <img src={deal.imgPath} alt="card" />
      </NavLink>
    </DealCard>
  );
}

SingleDealCard.propTypes = {
  deal: DealPropTypes.isRequired,
};

function MultiDealCard({ deal }) {
  const getQuadrants = () => {
    return deal.items.map((item) => (
      <QuadrantCard key={item.label}>
        <NavLink to={Routes.PRODUCT_LIST}>
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

MultiDealCard.propTypes = {
  deal: DealPropTypes.isRequired,
};

export default DealCard;

export { SingleDealCard, MultiDealCard };
