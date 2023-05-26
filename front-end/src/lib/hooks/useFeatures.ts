import { useState } from 'react';
import { GetSongsTypes } from '../api/types';
import { AxiosError } from 'axios';
import apiClient from '../api/apiClient';

export const useFeatures = () => {
  const [features, setFeatures] = useState<string[]>([]);

  const featuresHandler = (feature: string) => {
    if (features.includes(feature)) {
      return setFeatures((prev) => prev.filter((item) => item !== feature));
    }
    setFeatures((prev) => [...prev, feature]);
  };

  async function getFeaturesHandler(): Promise<{
    data?: GetSongsTypes;
    error?: string;
  }> {
    try {
      const { data } = await apiClient.get<GetSongsTypes>('/api/songs');
      return { data };
    } catch (e) {
      const error = e as AxiosError;
      return { error: error.message };
    }
  }

  return { featuresHandler, getFeaturesHandler };
};
