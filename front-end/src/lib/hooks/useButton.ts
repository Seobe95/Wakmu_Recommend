import { ButtonType } from '@/components/base/Button';
import { useState } from 'react';

interface HandleButtonTypeParams {
  type: 'submit' | 'select' | 'noneSelect';
  callback?: () => void;
}

export const useButton = ({ type }: ButtonType) => {
  const [isButtonType, setButtonType] = useState(type || 'noneSelect');

  const handleButtonType = ({ type, callback }: HandleButtonTypeParams) => {
    const typeMapping: Record<
      'submit' | 'select' | 'noneSelect',
      'submit' | 'select' | 'noneSelect'
    > = {
      select: 'noneSelect',
      noneSelect: 'select',
      submit: 'submit',
    };

    setButtonType(typeMapping[type]);

    if (callback) {
      callback;
    }
  };

  return { isButtonType, handleButtonType };
};
