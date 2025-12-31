import { TrashIcon } from '@phosphor-icons/react';
import { Button } from '../button';
import { CartControls } from '../cart-controls';
import {
  CheckoutOrderItemContainer,
  CheckoutOrderItemDetails,
  CheckoutOrderItemDetailsControls,
  CheckoutOrderItemDetailTitle,
} from './styles';
import { priceFormatter } from '../../utils/price-formatter';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

interface CheckoutOrderProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imgUrl: string;
}
export function CheckoutOrder({ id, title, price, quantity, imgUrl }: CheckoutOrderProps) {
  const { removeCartItem } = useContext(CartContext);
  const formattedPrice = priceFormatter(price);

  function handleRemoveFromCart() {
    removeCartItem({
      id,
      title,
      price,
      quantity,
      imgUrl,
    });
  }
  return (
    <CheckoutOrderItemContainer key={id}>
      <CheckoutOrderItemDetails>
        <img src={imgUrl} alt={title} />
        <CheckoutOrderItemDetailTitle>
          <h4>{title}</h4>
          <CheckoutOrderItemDetailsControls>
            <CartControls
              quantity={quantity}
              incrementQuantity={() => {}}
              decrementQuantity={() => {}}
            />
            <Button variant="secondary" onClick={handleRemoveFromCart}>
              <TrashIcon size={16} weight="bold" />
              Remover
            </Button>
          </CheckoutOrderItemDetailsControls>
        </CheckoutOrderItemDetailTitle>
      </CheckoutOrderItemDetails>
      <strong>R$ {formattedPrice}</strong>
    </CheckoutOrderItemContainer>
  );
}
