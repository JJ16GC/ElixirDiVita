// src/pages/AboutPage.tsx
import React from "react";
import { MyComponent } from "../components/OurBakers";
import "react-accordion-ts/src/panel.css";
import "../styles/MyComponent.module.css";
import ImageComponent from "../components/ImageComponent";

const AboutMePage: React.FC = () => {
  return (
    <div className="container">
      <ImageComponent></ImageComponent>
      <div className="section">
        <MyComponent></MyComponent>
      </div>
    </div>
  );
};

export default AboutMePage;
