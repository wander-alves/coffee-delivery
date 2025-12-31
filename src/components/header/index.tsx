import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { CartItemsContainer, CustomerLocationAndCart, HeaderContainer } from './styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

export function Header() {
  const { ordersCount } = useContext(CartContext);
  const hasCartItems = ordersCount > 0;
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" />
      </Link>
      <CustomerLocationAndCart>
        <span>
          <MapPinIcon weight="fill" size={22} />
          Porto Alegre, RS
        </span>
        <Link to="/checkout">
          <ShoppingCartIcon weight="fill" size={22} />
          <CartItemsContainer data-visible={hasCartItems}>{ordersCount}</CartItemsContainer>
        </Link>
      </CustomerLocationAndCart>
    </HeaderContainer>
  );
}
