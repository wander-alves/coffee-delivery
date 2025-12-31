import styled from 'styled-components';

export const CheckoutOrderItemContainer = styled.div`
  padding: 0.4rem 0.8rem 2.4rem;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  & > strong {
    font: ${({ theme }) => theme.fonts['text-m-bold']};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;

export const CheckoutOrderItemDetails = styled.div`
  display: flex;
  gap: 2rem;
  & > img {
    width: 6.4rem;
  }
`;

export const CheckoutOrderItemDetailTitle = styled.div`
  & > h4 {
    font: ${({ theme }) => theme.fonts['text-m']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 0.8rem;
  }
`;

export const CheckoutOrderItemDetailsControls = styled.div`
  display: flex;
  gap: 0.8rem;
`;
