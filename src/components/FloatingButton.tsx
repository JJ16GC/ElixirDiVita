import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";

interface FloatingButtonProps {
  onClick: () => void;
  label: ReactNode; // Cambia el tipo de `label` a `ReactNode`
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, label }) => {
  return (
    <Button className="floating-button" onClick={onClick}>
      {label}
    </Button>
  );
};


export default FloatingButton;
