import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SongModalState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  currentSong: {
    title: string;
    features: string[];
  };
  setCurrentSong: ({
    title,
    features,
  }: {
    title: string;
    features: string[];
  }) => void;
}

export const useSongsModal = create<SongModalState>()(
  devtools((set) => ({
    isOpen: false,
    setIsOpen: (value) => {
      set((state) => ({
        ...state,
        isOpen: value,
      }));
    },
    currentSong: {
      title: '',
      features: [],
    },
    setCurrentSong: ({ title, features }) => {
      set((state) => ({
        ...state,
        currentSong: {
          title,
          features,
        },
      }));
    },
  })),
);
