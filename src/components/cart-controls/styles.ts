import styled from 'styled-components';

export const CartControlsContainer = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  & > button {
    border: none;
    height: 100%;
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
  }
  & > span {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
