import styled from 'styled-components';

export const NotFoundContainer = styled.main`
  padding: 8rem 16rem;

  display: flex;
  justify-content: space-between;
  
  

  &>img{
    width: 56rem;
    height: 29.2rem;
    margin-bottom: 6.4rem;
  }
`;


export const HeadlineContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;

&>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;

    &>h1 { 
      font: ${({theme})=> theme.fonts['title-l']};
      color: ${({theme})=> theme.colors['purple-dark']};
      margin-bottom: 0.8rem;
    }
    
    &>p{
      font: ${({theme})=> theme.fonts['text-m']};
      color: ${({theme})=> theme.colors['base-text']};
    }
  }

  &>a { 
    padding: 1.2rem;
    width: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    
    border-radius: 8px;
    background-color: ${({theme})=> theme.colors.purple};
    font: ${({theme})=> theme.fonts['button-m']};
    
    text-decoration: none;
    text-transform: uppercase;

    color: ${({theme})=> theme.colors.white};
    &>svg {
      color: ${({theme})=> theme.colors.white};
    }
  }
`