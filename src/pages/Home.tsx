
import HeroSection from "../components/HeroSection";
import StorySection from "../components/StorySection";
import AlwaysFreshSection from "../components/AlwaysFreshSection";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <HeroSection />
      <StorySection />
      <AlwaysFreshSection />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default HomePage;
