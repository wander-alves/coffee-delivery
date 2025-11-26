import { MinusIcon, PlusIcon } from '@phosphor-icons/react';

export function CartControls(){
  return (
    <div>
      <button>
        <MinusIcon size={14} weight="bold" />
      </button>
      <span>1</span>
      <button>
        <PlusIcon size={14} weight="bold" />
      </button>
    </div>
  )
}