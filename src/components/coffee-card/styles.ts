import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  padding: 2rem;
  width: 25.6rem;
  height: 31rem;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background-color: ${({ theme }) => theme.colors['base-card']};

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    position: absolute;
    top: -2rem;
    width: 12rem;
    height: 12rem;
  }
  & > h2 {
    font: ${({ theme }) => theme.fonts['title-s']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-block: 1.6rem 0.8rem;
  }
  & > p {
    text-align: center;
    font: ${({ theme }) => theme.fonts['text-s']};
    color: ${({ theme }) => theme.colors['base-label']};
    margin-bottom: 3.2rem;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 9.2rem;
`;
export const TagItem = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font: ${({ theme }) => theme.fonts.tag};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};
`;

export const CardPriceAndControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > span {
    font: ${({ theme }) => theme.fonts['text-s']};
    color: ${({ theme }) => theme.colors['base-text']};

    & > strong {
      font: ${({ theme }) => theme.fonts['title-m']};
    }
  }
`;

export const CardControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
