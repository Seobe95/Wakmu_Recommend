import { useButton } from '@/lib/hooks/useButton';

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
  buttonType = "noneSelect",
  featuresValue,
  onClick,
}: ButtonProps) {
  const { isButtonType, handleButtonType } = useButton({
    type: buttonType,
  });

  const buttonVariants = {
    select:
      'bg-green-500 border border-green-500 hover:border-green-300 hover:bg-green-300 px-3 py-1 text-white max-[480px]:px-1',
    noneSelect: 'bg-white hover:bg-green-200 border border-green-200 px-3 py-1 max-[480px]:px-1',
    submit: 'bg-green-600 px-6 py-2 text-white hover:bg-green-500 max-[480px]:w-full',
  };

  const buttonClickHandler = () => {
    if(onClick) {
      onClick(featuresValue);
    }

    handleButtonType({type: isButtonType})
  }

  return (
    <button
      type="button"
      className={`${
        buttonVariants[isButtonType]
      } rounded-lg transition-colors select-none`}
      onClick={buttonClickHandler}
    >
      {name}
    </button>
  );
}
