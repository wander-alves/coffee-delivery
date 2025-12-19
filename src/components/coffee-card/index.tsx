import { ShoppingCartSimpleIcon } from '@phosphor-icons/react';
import {
  CardControlsContainer,
  CardPriceAndControlsContainer,
  CoffeeCardContainer,
  TagItem,
  TagList,
} from './styles';

import coffeeImage from '../../assets/images/expresso_americano.png';
import { CartControls } from '../cart-controls';

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImage} />
      <TagList>
        <TagItem>Tradicional</TagItem>
      </TagList>
      <h2>Expresso Americano</h2>
      <p>Expresso diluído, menos intenso que o tradicional</p>
      <CardPriceAndControlsContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <CardControlsContainer>
          <CartControls />
          <button>
            <ShoppingCartSimpleIcon size={22} weight="fill" />
          </button>
        </CardControlsContainer>
      </CardPriceAndControlsContainer>
    </CoffeeCardContainer>
  );
}
