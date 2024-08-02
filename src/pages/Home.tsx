import { lazy, Suspense } from "react";
import React from "react";
import Loading from "../components/Loading";

const HomePage: React.FC = () => {
  const HeroSection = lazy(() => import("../components/HeroSection"));
  const StorySection = lazy(() => import("../components/StorySection"));
  const AlwaysFreshSection = lazy(() => import("../components/AlwaysFreshSection"));
  const MenuSection = lazy(() => import("../components/MenuSection"));
  const Footer = lazy(() => import("../components/Footer"));

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <StorySection />
        <AlwaysFreshSection />
        <MenuSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
