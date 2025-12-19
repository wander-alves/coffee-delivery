import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts['button-m']};
  text-transform: uppercase;

  &[data-type='primary'] {
    padding: 1.2rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    font: ${({ theme }) => theme.fonts['button-g']};

    &:hover {
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
  &[data-type='secondary'] {
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
      & > svg {
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }

    & > svg {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
  &[data-type='icon'] {
    background-color: ${({ theme }) => theme.colors['purple-dark']};
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }
`;
