import type { ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'icon';
}

export function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <ButtonContainer data-type={variant} {...props}>
      {children}
    </ButtonContainer>
  );
}
