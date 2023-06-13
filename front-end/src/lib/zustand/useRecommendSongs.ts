import { create } from 'zustand';
import { GetSongsTypes, WakmuSongs } from '../api/types';
import { devtools } from 'zustand/middleware';
import apiClient from '../api/apiClient';
import { AxiosError, isAxiosError } from 'axios';

interface RecommendSongsState {
  songs: WakmuSongs[];
  postFeatures: (features: string[]) => void;
  error: AxiosError | null;
}

export const useRecommendSongs = create<RecommendSongsState>()(
  devtools((set) => ({
    songs: [],
    error: null,
    postFeatures: async (features: string[]) => {
      try {
        const { data } = await apiClient.post<{ songs: WakmuSongs[] }>(
          '/api/songs.recommend',
          { features },
          {
            withCredentials: true,
            headers: {
              Accept: '/',
            },
          },
        );
        set((state) => ({
          ...state,
          songs: data.songs,
          e: null,
        }));
      } catch (e) {
        if (isAxiosError(e)) {
          const error = e as AxiosError;
          set((state) => ({
            ...state,
            error,
          }));
        }
      }
    },
  })),
);
