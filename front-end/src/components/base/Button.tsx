interface ButtonProps {
  name: string;
  isSelected: boolean;
}
export default function Button({ name, isSelected }: ButtonProps) {
  const buttonType = isSelected ? 'selected' : 'none';
  
  return <button>{name}</button>;
}
