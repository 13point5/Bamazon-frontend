import React from "react";
import { Header, Deals, MainLayout } from "containers";

export default function App() {
  return (
    <MainLayout>
      <Header />
      <Deals />
    </MainLayout>
  );
}
