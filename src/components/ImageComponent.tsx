// ImageComponent.tsx
import React from 'react';
import '../styles/ImageComponent.css'

const ImageComponent: React.FC = () => {
    return (
        <div className="image-container">
            <img className='image1' src="images/cacao.png" alt="Descripción de la imagen" />
            <img className='image2' src="images/Plantacacao.png" alt="Descripción de la imagen" />
        </div>
    );
};

export default ImageComponent;
