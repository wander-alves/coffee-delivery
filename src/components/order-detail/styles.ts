import styled from 'styled-components';

export const OrderDetailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > img {
    width: 6.4rem;
    height: 6.4rem;
  }
  & > strong {
    font: ${({ theme }) => theme.fonts['text-m-bold']};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h4 {
      font: ${({ theme }) => theme.fonts['text-m']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-button']};
`;
