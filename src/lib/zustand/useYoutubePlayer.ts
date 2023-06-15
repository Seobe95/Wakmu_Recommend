import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type PlayState = 'playing' | 'stop' | null;

interface PlayerState {
  playState: PlayState;
  currentPlayTitle: string | null;
  playPage: number | null;
  playMusic: (
    playState: PlayState,
    currentPlayTitle: string,
    playPage: number,
  ) => void;
  pauseMusic: (playState: PlayState) => void;
}

export const useYoutubePlayer = create<PlayerState>()(
  devtools((set) => ({
    currentPlayTitle: null,
    playState: null,
    playPage: null,
    playMusic: (playState, currentPlayTitle, playPage) => {
      set(
        () => {
          return {
            playState,
            currentPlayTitle,
            playPage,
          };
        },
        false,
        'Play_Music',
      );
    },
    pauseMusic: (playState) => {
      set((state) => ({
        ...state,
        playState,
      }), false, "Pause_Music");
    },
  }), {name: "youtube store"}),
);
