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

export const CheckoutInputPaymentContainer = styled(CheckoutInputContainer)`
  & > div > svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const CheckoutInputPaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const CheckoutInputPaymentMethod = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  cursor: pointer;

  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors['base-button']};

  color: ${({ theme }) => theme.colors['base-text']};
  font: ${({ theme }) => theme.fonts['button-m']};
  text-transform: uppercase;
  white-space: nowrap;
  border-radius: 6px;
  border: 1px solid transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    & > svg {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  & > svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  & > input[type='radio'] {
    height: 1px;
    width: 1px;
    position: absolute;
  }

  &[data-selected='true'] {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;

export const CheckoutOrdersContainer = styled.div`
  min-width: 44.8rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  & > button {
    width: 100%;
  }
`;

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
  & > h3 {
    font: ${({ theme }) => theme.fonts['text-m']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 0.8rem;
  }
`;

export const CheckoutOrderItemDetailsControls = styled.div`
  display: flex;
  gap: 0.8rem;

  & button {
  }
`;
