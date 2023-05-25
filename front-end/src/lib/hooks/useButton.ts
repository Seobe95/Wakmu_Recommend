import { ButtonType } from '@/components/base/Button';
import { useState } from 'react';



export const useButton = ({ type }: ButtonType) => {
  const [isButtonType, setButtonType] = useState(type);

  const handleButtonType = ({ type }: ButtonType) => {
    if (type === 'submit') {
      return setButtonType('submit');
    } 
    if (type === 'select') {
      return setButtonType('noneSelect');
    } 
    if(type === "noneSelect"){
      return setButtonType('select');
    }
  };

  return { isButtonType, handleButtonType };
};
