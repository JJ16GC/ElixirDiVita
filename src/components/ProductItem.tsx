// src/components/ProductItem.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Product } from '../types';
import "../styles/ProductItem.css";

// Configura el modal
Modal.setAppElement('#root');

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="product-item">
      <img
        src={product.imageUrl}
        alt={product.name}
        onClick={openModal}
        style={{ cursor: 'pointer', width: '200px' }}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button className='btn btn-primary' onClick={() => onAddToCart(product)}>Agregar</button>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product Image Modal"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              transform: 'translate(-50%, -50%)',
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'auto',
            },
          }}
        >
          <button onClick={closeModal} style={{ marginBottom: '10px' }}>Close</button>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
          <p>{product.description || 'No description available'}</p>
        </Modal>
      )}
    </div>
  );
};

export default ProductItem;
