// ImageComponent.tsx
import React from 'react';
import '../styles/ImageComponent.css';

// Componente de imagen para mostrar dos imágenes con estilos personalizados
const ImageComponent: React.FC = () => {
    return (
        <div className="image-container">
            <img 
                className='image1' 
                src="images/cacao.png" 
                alt="Granos de cacao en una bolsa" 
            />
            <img 
                className='image2' 
                src="images/Plantacacao.png" 
                alt="Plantación de cacao" 
            />
        </div>
    );
};

export default ImageComponent;
