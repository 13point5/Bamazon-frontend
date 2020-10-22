import React from "react";

import { MainLayout, ProductCard } from "containers";
import { productListData } from "fixtures/products";

export default function ProductList() {
  return (
    <MainLayout>
      <div style={{ maxWidth: "70%", margin: "20px auto" }}>
        <h3>
          Showing results for <i>smart phones</i>
        </h3>
        {productListData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </MainLayout>
  );
}
