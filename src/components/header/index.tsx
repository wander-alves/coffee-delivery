import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { CartItemsContainer, CustomerLocationAndCart, HeaderContainer } from "./styles";
import { Link } from "react-router-dom";

export function Header(){
  return (
    <HeaderContainer>
      <Link to='/'>
        <img src="/logo.svg" />
      </Link>
      <CustomerLocationAndCart>
        <span>
          <MapPinIcon weight="fill" size={22}/>
          Porto Alegre, RS
        </span>
        <Link to='/checkout'>
          <ShoppingCartIcon weight="fill" size={22}/>
          <CartItemsContainer data-visible={false}>3</CartItemsContainer>
        </Link>
      </CustomerLocationAndCart>
    </HeaderContainer>
  )
}