import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 16rem;
`;

export const CustomerLocationAndCart = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  
  &>span, &>a {
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    gap: 0.4rem;
  }
  
  &>span {
    min-width: fit-content;
    font: ${ ({theme}) => theme.fonts['text-s']};
    
    color: ${({theme}) => theme.colors['purple-dark']};
    background-color:${({theme}) => theme.colors['purple-light']};
    & svg { 
      fill: ${({theme}) => theme.colors.purple};
    }
  }
  &>a{
    position: relative;
    background-color:${({theme}) => theme.colors['yellow-light']};
    & svg { 
      fill: ${({theme}) => theme.colors['yellow-dark']};
    }
  }
`;

interface CartItemsContainerProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const CartItemsContainer = styled.span<CartItemsContainerProps>`
  position: absolute;
  right: -0.8rem;
  top: -0.8rem;

  width: 2rem;
  height: 2rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  
  background-color: ${({theme})=> theme.colors['yellow-dark']};
  color: ${({theme})=> theme.colors.white};
  font: ${({theme})=> theme.fonts['text-s-bold']};
  
  transition: opacity 0.2s;
  opacity: 0;
  
  &[data-visible="true"]{
    opacity: 1;
  }
`;