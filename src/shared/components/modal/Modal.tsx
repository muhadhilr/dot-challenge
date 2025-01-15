import React, { ReactNode } from "react";
import Button from "../button/Button";

interface Props {
  isOpen: boolean;
  isFixed?: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children, isFixed = false }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 opacity-100">
        <div className="relative bg-white rounded-lg p-6 w-4/5 md:w-1/2">
            {!isFixed && <Button variant="secondary" onClick={onClose} className="absolute right-6 top-6">Close</Button>}
            {children}
        </div>
    </div>
  );
};

export default Modal;
