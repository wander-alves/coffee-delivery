import styled from 'styled-components';

export const SuccessContainer = styled.main`
  padding: 4rem 16rem;
`;

export const OrderSuccessTitle = styled.div`
  & > h1 {
    font: ${({ theme }) => theme.fonts['title-l']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
  & > p {
    font: ${({ theme }) => theme.fonts['text-l']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  margin-bottom: 4rem;
`;

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderInfoBulletList = styled.div`
  position: relative;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  width: 52.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background-color: ${({ theme }) => theme.colors.background};

  padding: 4rem;

  &::before {
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    content: '';
    display: block;
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    background: linear-gradient(45deg, #dbac2c, #8047f8);
    z-index: -1;
  }
`;

export const OrderInfoBullet = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const OrderInfoBulletIcon = styled.div`
  display: flex;
  border-radius: 999px;
  padding: 0.8rem;
  & > svg {
    color: ${({ theme }) => theme.colors.background};
  }
  &[data-variant='purple'] {
    background-color: ${({ theme }) => theme.colors.purple};
  }
  &[data-variant='yellow'] {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  &[data-variant='yellow-dark'] {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`;

export const OrderInfoBulletContent = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
`;
