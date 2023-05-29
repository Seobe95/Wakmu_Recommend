import { useFeatures } from '@/lib/hooks/useFeatures';
import { Button } from '../base';
import { useButton } from '@/lib/hooks/useButton';

interface FeatureListProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureListProps) {
  const { featuresHandler } = useFeatures();

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
                  featuresHandler(value as string);
                }}
                buttonType='noneSelect'
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
