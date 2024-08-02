import React from "react";
import "../styles/Loading.css"; // Asegúrate de crear este archivo CSS

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">Cargando...</div>
    </div>
  );
};

export default Loading;
