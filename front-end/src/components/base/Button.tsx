import useFeatures from '@/lib/zustand/useFeatures';
import { useState } from 'react';

export interface ButtonType {
  type?: 'select' | 'noneSelect' | 'submit';
}

interface ButtonProps {
  name: string;
  buttonType: 'select' | 'noneSelect' | 'submit';
  featuresValue?: string;
  onClick?: (value?: string) => void;
}
export default function Button({
  name,
  buttonType = 'noneSelect',
  featuresValue,
  onClick,
}: ButtonProps) {
  const [buttonTypes, setButtonType] = useState<
    'select' | 'noneSelect' | 'submit'
  >(buttonType);

  const features = useFeatures((state) => state.features);
  const isSelected = features.includes(featuresValue || '');

  const buttonVariants = {
    select: isSelected
      ? 'bg-green-500 border border-green-500 hover:border-green-300 hover:bg-green-300 px-3 py-1 text-white max-[480px]:px-1'
      : 'bg-white hover:bg-green-200 border border-green-200 px-3 py-1 max-[480px]:px-1',
    noneSelect:
      features.length === 5
        ? 'bg-white border border-green-200 px-3 py-1 max-[480px]:px-1 cursor-default'
        : 'bg-white hover:bg-green-200 border border-green-200 px-3 py-1 max-[480px]:px-1',
    submit:
      'bg-green-600 px-6 py-2 text-white hover:bg-green-500 max-[480px]:w-full',
  };

  function handleButtonType() {
    if (features.length < 5) {
      if (buttonType === 'noneSelect') {
        setButtonType('select');
      } else if (buttonType === 'select') {
        setButtonType('noneSelect');
      }
    } else if (features.length === 5) {
      if (buttonType === 'select') {
        setButtonType('noneSelect');
      }
    }
  }

  const buttonClickHandler = () => {
    if (onClick) {
      onClick(featuresValue);
    }
    handleButtonType();
  };

  return (
    <button
      type="button"
      className={`${buttonVariants[buttonTypes]} rounded-lg transition-colors select-none `}
      onClick={buttonClickHandler}
    >
      {name}
    </button>
  );
}
