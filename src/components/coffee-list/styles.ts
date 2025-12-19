import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  padding: 3.2rem 16rem;

  & > h1 {
    font: ${({ theme }) => theme.fonts['title-l']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 5.4rem;
  }
`;

export const CoffeeItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;

  row-gap: 4rem;
  column-gap: 3.2rem;
`;
