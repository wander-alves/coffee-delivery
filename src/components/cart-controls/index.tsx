import { MinusIcon, PlusIcon } from '@phosphor-icons/react';

import { CartControlsContainer } from './styles';
import { useState } from 'react';

export function CartControls() {
  const [items, setItems] = useState(1);

  function increment() {
    if (items >= 99) {
      return;
    }
    setItems((prev) => prev + 1);
  }

  function decrement() {
    if (items <= 1) {
      return;
    }
    setItems((prev) => prev - 1);
  }
  return (
    <CartControlsContainer>
      <button type="button" onClick={decrement}>
        <MinusIcon size={14} weight="bold" />
      </button>
      <span>{items}</span>
      <button type="button" onClick={increment}>
        <PlusIcon size={14} weight="bold" />
      </button>
    </CartControlsContainer>
  );
}
