import { create } from 'zustand';
import { GetSongsTypes, WakmuSongs } from '../api/types';
import { devtools } from 'zustand/middleware';
import apiClient from '../api/apiClient';
import { AxiosError, isAxiosError } from 'axios';

interface RecommendSongsState {
  songs: WakmuSongs[] | undefined;
  postFeatures: (features: string[]) => void;
  isLoading: boolean;
  error: AxiosError | null;
}

export const useRecommendSongs = create<RecommendSongsState>()(
  devtools(
    (set) => ({
      songs: [],
      error: null,
      isLoading: false,
      postFeatures: async (features: string[]) => {
        set((state) => ({
          ...state,
          isLoading: true,
        }));
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
            isLoading: false,
          }));
        } catch (e) {
          if (isAxiosError(e)) {
            const error = e as AxiosError;
            set((state) => ({
              ...state,
              songs: undefined,
              isLoading: false,
              error,
            }));
          }
        }
      },
    }),
    { name: 'recommend songs' },
  ),
);
