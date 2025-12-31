import { MinusIcon, PlusIcon } from '@phosphor-icons/react';

import { CartControlsContainer } from './styles';

interface CartControlsProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function CartControls({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: CartControlsProps) {
  function increment() {
    incrementQuantity();
  }

  function decrement() {
    decrementQuantity();
  }
  return (
    <CartControlsContainer>
      <button type="button" onClick={decrement}>
        <MinusIcon size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={increment}>
        <PlusIcon size={14} weight="bold" />
      </button>
    </CartControlsContainer>
  );
}
