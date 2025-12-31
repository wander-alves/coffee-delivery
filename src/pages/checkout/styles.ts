import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  padding: 4rem 16rem;
`;

export const CheckoutFormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
`;

export const CheckoutFormFieldContainer = styled.div`
  & > h2 {
    margin-bottom: 1.6rem;
  }
`;

export const CheckoutFieldsetBase = styled.div`
  padding: 4rem;
`;

export const CheckoutInputsContainer = styled(CheckoutFieldsetBase)`
  min-width: 64rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CheckoutInputContainer = styled.fieldset`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  border: none;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
`;

export const CheckoutInputTitle = styled.div`
  display: flex;
  gap: 0.8rem;

  & > div {
    & > legend {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
    & > span {
      font: ${({ theme }) => theme.fonts['text-s']};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`;

export const CheckoutInputAddressContainer = styled(CheckoutInputContainer)`
  & > div > svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`;

export const CheckoutInputAddressFields = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 6rem;
  grid-template-areas:
    'ZIPCODE ZIPCODE NONE'
    'STREET STREET STREET'
    'NUMBER ADDRESSINFO ADDRESSINFO'
    'NEIGHBORHOOD CITY STATE';
  row-gap: 1.6rem;
  column-gap: 1.2rem;

  & :nth-child(1) {
    grid-area: ZIPCODE;
  }
  & :nth-child(2) {
    grid-area: STREET;
  }
  & :nth-child(3) {
    grid-area: NUMBER;
  }
  & :nth-child(4) {
    grid-area: ADDRESSINFO;
  }
  & :nth-child(5) {
    grid-area: NEIGHBORHOOD;
  }
  & :nth-child(6) {
    grid-area: CITY;
  }
  & :nth-child(7) {
    grid-area: STATE;
  }
`;

export const CheckoutInputAddressWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['base-input']};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    padding: 1.2rem;
    outline: transparent;
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    width: 100%;
    height: 4.2rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
  & > input[type='number'],
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }

  & > em {
    color: ${({ theme }) => theme.colors['base-label']};
    font: ${({ theme }) => theme.fonts['text-s']};
    font-style: italic;
    padding-right: 1.2rem;
  }

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }
`;
