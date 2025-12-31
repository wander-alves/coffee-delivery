import { ShoppingCartSimpleIcon } from '@phosphor-icons/react';
import {
  CardControlsContainer,
  CardPriceAndControlsContainer,
  CoffeeCardContainer,
  TagItem,
  TagList,
} from './styles';

import { CartControls } from '../cart-controls';
import { Button } from '../button';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import { priceFormatter } from '../../utils/price-formatter';

export interface CoffeeProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imgUrl: string;
  ingredients: {
    id: string;
    name: string;
  }[];
}

export function CoffeeCard({ id, title, description, price, imgUrl, ingredients }: CoffeeProps) {
  const { addCartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const formattedPrice = priceFormatter(price);

  function handleAddItem() {
    const cartItem = {
      id,
      title,
      price,
      imgUrl,
      quantity,
    };
    addCartItem(cartItem);
  }

  function incrementQuantity() {
    if (quantity >= 99) {
      return;
    }
    setQuantity((prev) => prev + 1);
  }
  function decrementQuantity() {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  }

  return (
    <CoffeeCardContainer id={id}>
      <img src={imgUrl} />
      <TagList>
        {ingredients.map(({ id, name }) => (
          <TagItem key={id}>{name}</TagItem>
        ))}
      </TagList>
      <h2>{title}</h2>
      <p>{description}</p>
      <CardPriceAndControlsContainer>
        <span>
          R$ <strong>{formattedPrice}</strong>
        </span>
        <CardControlsContainer>
          <CartControls
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <Button variant="icon" onClick={handleAddItem}>
            <ShoppingCartSimpleIcon size={22} weight="fill" />
          </Button>
        </CardControlsContainer>
      </CardPriceAndControlsContainer>
    </CoffeeCardContainer>
  );
}
