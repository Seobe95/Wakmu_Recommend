import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  test('click button event', () => {
    const initialProps = {
      name: '테스트',
    };
    render(<Button {...initialProps} buttonType="submit" />);
  });
});
