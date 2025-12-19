import { TrashIcon } from '@phosphor-icons/react';
import { CartControls } from '../../components/cart-controls';
import { Button } from '../../components/button';

import { OrderDetailContainer, Separator } from './styles';

interface OrderDetailsProps {
  imgUrl: string;
}

export function OrderDetail({ imgUrl }: OrderDetailsProps) {
  return (
    <>
      <OrderDetailContainer>
        <img src={imgUrl} alt="Expresso Tradicional" />
        <div>
          <h4>Expresso Tradicional</h4>
          <div>
            <CartControls />
            <Button variant="secondary">
              <TrashIcon size={16} weight="bold" />
              Remover
            </Button>
          </div>
        </div>
        <strong>R$ 9,90</strong>
      </OrderDetailContainer>
      <Separator />
    </>
  );
}
