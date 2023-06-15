import { useState } from 'react';
import Modal from '../base/Modal';
import { useSongsModal } from '@/lib/zustand/useSongModal';

interface SongsModalProps {}

export default function SongsModal() {
  const { isOpen, setIsOpen } = useSongsModal((state) => ({
    isOpen: state.isOpen,
    setIsOpen: state.setIsOpen,
  }));
  return (
    <Modal isOpen={isOpen} openHandler={(isOpen) => setIsOpen(isOpen)}>
      <div>sadfds</div>
    </Modal>
  );
}
