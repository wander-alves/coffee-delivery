import styled from 'styled-components';

export const CartControlsContainer = styled.div`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  & > button {
    &:hover {
      background-color: initial;
    }
  }
  & > span {
    min-width: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors['base-title']};
  }
`;
