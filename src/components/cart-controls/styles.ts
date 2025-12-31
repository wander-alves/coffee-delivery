import styled from 'styled-components';

export const CartControlsContainer = styled.div`
  width: fit-content;
  min-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  & > button {
    border: none;
    min-height: 100%;
    padding: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    cursor: pointer;

    & > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    &:hover {
      & > svg {
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  & > span {
    height: 100%;
    min-width: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`;
