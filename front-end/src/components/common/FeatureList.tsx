import useFeatures from '@/lib/zustand/useFeatures';
import { Button } from '../base';

interface FeatureListProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureListProps) {
  const addOrRemoveFeeature = useFeatures((state) => state.addOrRemoveFeature);
  return (
    <div>
      <ul className="flex flex-wrap space-x-2 space-y-2 mr-2 justify-center">
        {features.map((item, index) => {
          return (
            <li className="first:mt-2 first:ml-2" key={`${index}_${item}`}>
              <Button
                name={item}
                key={index}
                featuresValue={item}
                onClick={(value) => {
                  addOrRemoveFeeature(value as string);
                }}
                buttonType="noneSelect"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
