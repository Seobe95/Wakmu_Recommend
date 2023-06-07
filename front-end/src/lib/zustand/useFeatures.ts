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
            ...state,
            features: state.features.filter((item) => item !== feature),
          };
        } else {
          if (state.features.length < 5) {
            return { ...state, features: [...state.features, feature] };
          }
          return { ...state };
        }
      }, false, "addOrRemoveFeature");
    },
  })),
);

export default useFeatures;
