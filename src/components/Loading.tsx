import React from 'react';
import '../styles/Loading.css'; // Asegúrate de que este archivo CSS esté bien definido

const Loading: React.FunctionComponent = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="loading-spinner"></div>
      <div className="loading-text">Cargando...</div>
    </div>
  );
};

export default Loading;
