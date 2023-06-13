import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ISwiper {
  currentFocusPage: number;
  setCurrentFocusPage: (page: number) => void;
}

export const useSwipeSlider = create<ISwiper>()(
  devtools((set) => ({
    currentFocusPage: 0,
    setCurrentFocusPage: (page) => {
      set((state) => {
        return { ...state, currentFocusPage: page };
      }, false, "setCurrentFocusPage");
    },
  })),
);
