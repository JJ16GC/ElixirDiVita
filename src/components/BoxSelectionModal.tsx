import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/BoxSelectionModal.css";

interface BoxSelectionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSelectBox: (boxType: string) => void;
}

const boxOptions = [
  { type: "Caja Hexagonal", imageUrl: "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2FHexagonal.webp?alt=media&token=30796e41-ce87-49c2-995e-d35a1facb633" },
  { type: "Caja Rectangular", imageUrl: "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2FRectangular.webp?alt=media&token=57312017-7dfe-4765-98e7-2477add8b134" },
];

const BoxSelectionModal: React.FC<BoxSelectionModalProps> = ({
  isOpen,
  onRequestClose,
  onSelectBox,
}) => {
  const [selectedBox, setSelectedBox] = useState<string>("");

  const handleBoxSelection = (boxType: string) => {
    setSelectedBox(boxType);
  };

  const handleConfirmSelection = () => {
    onSelectBox(selectedBox);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="box-modal"
      overlayClassName="box-modal-overlay"
    >
      <div className="box-modal-content">
        <button
          className="box-modal-close-button"
          onClick={onRequestClose}
          aria-label="Cerrar modal"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>Selecciona el tipo de caja</h2>
        <div className="box-options">
          {boxOptions.map((box, index) => (
            <div
              key={index}
              className={`box-option ${
                selectedBox === box.type ? "selected" : ""
              }`}
              onClick={() => handleBoxSelection(box.type)}
            >
              <img src={box.imageUrl} alt={box.type} className="box-image" />
              <p>{box.type}</p>
            </div>
          ))}
        </div>
        <button
          className="btn-modal"
          onClick={handleConfirmSelection}
          disabled={!selectedBox}
        >
          Confirmar
        </button>
      </div>
    </Modal>
  );
};

export default BoxSelectionModal;
