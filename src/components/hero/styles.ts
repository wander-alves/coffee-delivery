import styled from 'styled-components';
import bgImg from '../../assets/home_background.png';

export const HeroContainer = styled.section`
  padding: 9.4rem 16rem 10.8rem;
  display: flex;
  justify-content: space-between;

  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > img {
    height: 36rem;
    width: 47.6rem;
  }
`;

export const HeroHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
`;

export const HeroHeadlineContentContainer = styled.div`
  max-width: 58.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > h1 {
    font: ${({ theme }) => theme.fonts['title-xl']};
    color: ${({ theme }) => theme.colors['base-title']};
  }
  & > p {
    font: ${({ theme }) => theme.fonts['text-l']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const HeroListContainer = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 4rem;
  row-gap: 2rem;
`;

interface HeroListItemProps {
  $itemcolor: 'purple' | 'yellow' | 'yellow-dark' | 'base-text';
}

export const HeroListItem = styled.li<HeroListItemProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > div {
    min-width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background-color: ${({ theme, $itemcolor }) => theme.colors[$itemcolor]};

    & > svg {
      fill: ${({ theme }) => theme.colors.background};
    }
  }

  & > p {
    font: ${({ theme }) => theme.fonts['text-m']};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;
