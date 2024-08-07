// src/pages/AboutPage.tsx
import React from "react";
import Our from "../components/Our";
import ImageComponent from "../components/ImageComponent";

const AboutMePage: React.FC = () => {
  return (
    <div className="container">
      <div className="section">
        <ImageComponent></ImageComponent>
        <Our></Our>
      </div>
    </div>
  );
};

export default AboutMePage;
