import { useState } from 'react';

export const useFeatures = () => {
  const [features, setFeatures] = useState<string[]>([]);

  const featuresHandler = (feature: string) => {
    if (features.includes(feature)) {
      return setFeatures((prev) => prev.filter((item) => item !== feature));
    }
    setFeatures((prev) => [...prev, feature]);
  };

  return { featuresHandler };
};
