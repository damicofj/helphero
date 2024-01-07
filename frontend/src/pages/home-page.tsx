import React from "react";
import { HeroBanner } from "src/components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { Creators } from "../components/creators";
import { Categories } from "../components/categories";

export const HomePage: React.FC = () => (
  <PageLayout>
    <>
      <HeroBanner />
      <Categories />
      <Creators />
    </>
  </PageLayout>
);
