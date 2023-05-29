import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FeatureState {
  features: string[];
  addOrRemoveFeature: (feature: string) => void;
}

const useFeatures = create<FeatureState>()(
  devtools((set) => ({
    features: [],
    addOrRemoveFeature: (feature) => {
      set((state) => {
        if (state.features.includes(feature)) {
          return {
            features: state.features.filter((item) => item !== feature),
          };
        }
        return { features: [...state.features, feature] };
      });
    },
  })),
);

export default useFeatures;
