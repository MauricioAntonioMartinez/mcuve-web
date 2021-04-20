import React, { createContext, useContext, useState } from "react";
import { Modal } from "../components/ui/Modal";

interface ModalState {
  isOpen: boolean;
  Component?: React.FC | null;
  hideModal(): void;
  showModal(Component: React.FC): void;
}

const ModalContext = createContext<ModalState>({
  isOpen: false,
  Component: null,
  hideModal() {},
  showModal() {},
});

export const useModal = () => useContext(ModalContext);

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [Component, setComponent] = useState<React.FC | null>(null);

  const hideModal = () => setOpen(false);
  const showModal = (Component: React.FC) => {
    setOpen(true);
    setComponent(Component);
  };

  return (
    <ModalContext.Provider value={{ isOpen, showModal, hideModal }}>
      <>
        {Component && isOpen && (
          <Modal hideModal={hideModal}>{Component}</Modal>
        )}
        {children}
      </>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
